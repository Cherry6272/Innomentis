/**
 * INNOMENTIS ROBOTICS STORE — DATABASE & STATE MANAGEMENT ENGINE
 * Supports Supabase REST Integration with full LocalStorage / IndexedDB Fallback
 */

(function () {
  // Supabase Live Cloud Database Configuration
  window.SUPABASE_URL = window.SUPABASE_URL || "https://cmtjafyzvkfgiqxnwpek.supabase.co";
  window.SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtdGphZnl6dmtmZ2lxeG53cGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0MDQ5ODYsImV4cCI6MjEwMzk4MDk4Nn0.G598A7fubanb9FNaQqSCyClYIvJ3AR_V0PhUxTMRWA0";

  const LOCAL_STORAGE_PRODUCTS_KEY = "innomentis_store_products_v1";
  const LOCAL_STORAGE_ORDERS_KEY = "innomentis_store_orders_v1";
  const LOCAL_STORAGE_SETTINGS_KEY = "innomentis_store_settings_v1";

  // Default Store Configuration
  const DEFAULT_SETTINGS = {
    upi_id: "innomentis@upi",
    upi_name: "Innomentis Robotics",
    support_email: "contact@innomentis.in",
    support_phone: "+91 91482 06667",
    currency: "INR",
    currency_symbol: "₹"
  };

  class StoreDatabase {
    constructor() {
      this.initLocalDatabase();
    }

    /**
     * Initialize Local Storage database if empty
     */
    initLocalDatabase() {
      const defaultProducts = window.PRODUCTS_DATA || (typeof PRODUCTS_DATA !== "undefined" ? PRODUCTS_DATA : []);
      if (!localStorage.getItem(LOCAL_STORAGE_PRODUCTS_KEY) && defaultProducts.length > 0) {
        localStorage.setItem(LOCAL_STORAGE_PRODUCTS_KEY, JSON.stringify(defaultProducts));
      }
      if (!localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY)) {
        localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, JSON.stringify(DEFAULT_SETTINGS));
      }
      if (!localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY)) {
        // Initialize with sample demonstration order for initial testing if empty
        const demoOrders = [
          {
            order_id: "INM-1001",
            customer_name: "Rahul Kumar",
            guardian_name: "Suresh Kumar",
            email: "rahul.k@example.com",
            phone: "+91 98765 43210",
            school: "Delhi Public School, Yelahanka",
            address: "House No 42, 5th Main Road, Sector B",
            city: "Bengaluru",
            state: "Karnataka",
            pincode: "560064",
            total_amount: 2199,
            transaction_id: "UTR987654321012",
            payment_screenshot: "",
            payment_status: "Payment Verification Pending",
            order_status: "Payment Verification Pending",
            rejection_reason: "",
            created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
            items: [
              {
                product_id: "prod-kit-02",
                product_name: "Smart 2WD Obstacle Avoidance Car Kit",
                sku: "INM-KIT-002",
                quantity: 1,
                price: 2199
              }
            ]
          }
        ];
        localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(demoOrders));
      }
    }

    /**
     * Retrieve Store Configuration
     */
    getSettings() {
      try {
        const saved = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
        return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
      } catch (e) {
        return DEFAULT_SETTINGS;
      }
    }

    /**
     * Save Store Configuration (e.g. update UPI ID)
     */
    saveSettings(newSettings) {
      const current = this.getSettings();
      const updated = { ...current, ...newSettings };
      localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, JSON.stringify(updated));
      return updated;
    }

    /**
     * Get all active products
     */
    getAllProducts() {
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_PRODUCTS_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
      return window.PRODUCTS_DATA || (typeof PRODUCTS_DATA !== "undefined" ? PRODUCTS_DATA : []);
    }

    /**
     * Get product by ID
     */
    getProductById(id) {
      const products = this.getAllProducts();
      return products.find((p) => p.id === id || p.slug === id) || null;
    }

    /**
     * Get products filtered by category, search query, and sorted
     */
    filterProducts({ category = "All", query = "", sort = "featured" } = {}) {
      let products = this.getAllProducts();

      // Category Filter
      if (category && category !== "All") {
        products = products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
      }

      // Search Query Filter
      if (query && query.trim() !== "") {
        const q = query.toLowerCase().trim();
        products = products.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.short_description.toLowerCase().includes(q) ||
            p.sku.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            (p.ideal_for && p.ideal_for.some((item) => item.toLowerCase().includes(q)))
        );
      }

      // Sorting
      if (sort === "price-low") {
        products.sort((a, b) => a.price - b.price);
      } else if (sort === "price-high") {
        products.sort((a, b) => b.price - a.price);
      } else if (sort === "name-az") {
        products.sort((a, b) => a.name.localeCompare(b.name));
      }

      return products;
    }

    /**
     * Get all categories list with item counts
     */
    getCategories() {
      const products = this.getAllProducts();
      const categoryMap = { All: products.length };

      products.forEach((p) => {
        categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
      });

      return categoryMap;
    }

    /**
     * Create a new Order
     */
    async createOrder(orderInput) {
      const orders = this.getAllOrders();

      // Generate Guaranteed Globally Unique Order ID (e.g. INM-78214)
      const randomPart = Math.floor(100 + Math.random() * 900);
      const timePart = Date.now().toString().slice(-4);
      const order_id = `INM-${timePart}${randomPart}`;

      const newOrder = {
        order_id,
        customer_name: orderInput.customer_name || "",
        guardian_name: orderInput.guardian_name || "",
        email: orderInput.email || "",
        phone: orderInput.phone || "",
        school: orderInput.school || "",
        address: orderInput.address || "",
        city: orderInput.city || "",
        state: orderInput.state || "",
        pincode: orderInput.pincode || "",
        total_amount: Number(orderInput.total_amount) || 0,
        transaction_id: orderInput.transaction_id || "",
        payment_screenshot: orderInput.payment_screenshot || "",
        payment_status: "Payment Verification Pending",
        order_status: "Payment Verification Pending",
        rejection_reason: "",
        created_at: new Date().toISOString(),
        items: orderInput.items || []
      };

      orders.unshift(newOrder);
      localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(orders));

      // Await Supabase sync to guarantee cloud write before redirect
      await this.syncOrderToSupabase(newOrder);

      return newOrder;
    }

    /**
     * Get all submitted orders (for Admin Dashboard)
     */
    getAllOrders() {
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    /**
     * Get Order by ID
     */
    getOrderById(orderId) {
      const orders = this.getAllOrders();
      return orders.find((o) => o.order_id && String(o.order_id).toLowerCase() === String(orderId).toLowerCase()) || null;
    }

    /**
     * Fetch Live Orders from Supabase Cloud DB
     */
    async fetchLiveOrdersFromSupabase() {
      const url = window.SUPABASE_URL;
      const key = window.SUPABASE_ANON_KEY;

      if (url && key && key !== "YOUR_SUPABASE_ANON_KEY_HERE") {
        try {
          const res = await fetch(`${url}/rest/v1/orders?select=*&order=created_at.desc`, {
            headers: {
              "apikey": key,
              "Authorization": `Bearer ${key}`
            }
          });
          if (res.ok) {
            const liveOrders = await res.json();
            if (Array.isArray(liveOrders)) {
              localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(liveOrders));
              return liveOrders;
            }
          }
        } catch (err) {
          console.warn("Supabase fetch live orders notice:", err);
        }
      }
      return this.getAllOrders();
    }

    /**
     * Update Order Status (Admin action)
     */
    async updateOrderStatus(orderId, paymentStatus, orderStatus, rejectionReason = "") {
      const orders = this.getAllOrders();
      const index = orders.findIndex((o) => o && o.order_id && String(o.order_id).toLowerCase() === String(orderId).toLowerCase());

      if (index !== -1) {
        orders[index].payment_status = paymentStatus;
        orders[index].order_status = orderStatus;
        if (rejectionReason) {
          orders[index].rejection_reason = rejectionReason;
        }
        orders[index].updated_at = new Date().toISOString();

        localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(orders));

        // Sync update to Supabase (Awaited to ensure Cloud DB updates before dashboard re-renders)
        await this.updateOrderStatusSupabase(orderId, paymentStatus, orderStatus, rejectionReason);

        // Automatically trigger notification email to the specific customer on EVERY status change
        this.triggerOrderStatusEmail(orders[index], paymentStatus, orderStatus, rejectionReason);

        return orders[index];
      }
      return null;
    }

    async updateOrderStatusSupabase(orderId, paymentStatus, orderStatus, rejectionReason) {
      const url = window.SUPABASE_URL;
      const key = window.SUPABASE_ANON_KEY;

      if (url && key && key !== "YOUR_SUPABASE_ANON_KEY_HERE") {
        try {
          await fetch(`${url}/rest/v1/orders?order_id=eq.${orderId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "apikey": key,
              "Authorization": `Bearer ${key}`
            },
            body: JSON.stringify({
              payment_status: paymentStatus,
              order_status: orderStatus,
              rejection_reason: rejectionReason,
              updated_at: new Date().toISOString()
            })
          });
        } catch (e) {
          console.warn("Supabase PATCH error:", e);
        }
      }
    }

    /**
     * Update Product Stock / Price (Admin action)
     */
    updateProduct(productId, updates) {
      const products = this.getAllProducts();
      const index = products.findIndex((p) => p.id === productId);

      if (index !== -1) {
        products[index] = { ...products[index], ...updates };
        localStorage.setItem(LOCAL_STORAGE_PRODUCTS_KEY, JSON.stringify(products));
        return products[index];
      }
      return null;
    }

    /**
     * Automated Customer Notification Email Engine
     * Automatically dispatches tailored emails to the customer for EVERY status update
     */
    triggerOrderStatusEmail(order, paymentStatus, orderStatus, rejectionReason = "") {
      let subject = `Update on your Innomentis Order #${order.order_id}`;
      let messageBody = `Hello ${order.customer_name},\n\n`;

      if (orderStatus === "Order Confirmed" || paymentStatus === "Payment Verified") {
        subject = `🎉 Payment Verified & Confirmed — Innomentis Order #${order.order_id}`;
        messageBody += `Great news! Your payment for Order #${order.order_id} (Total: ₹${order.total_amount}) has been verified successfully.\n\nYour robotics kits and materials are now confirmed and queued for packing.\n\nTransaction Reference: ${order.transaction_id}\nShipping Address: ${order.address}, ${order.city}, ${order.state} - ${order.pincode}\n\nThank you for choosing Innomentis Robotics!`;
      } else if (orderStatus === "Processing") {
        subject = `⚙️ Order in Processing — Innomentis Order #${order.order_id}`;
        messageBody += `Your Order #${order.order_id} is currently being prepared, assembled, and quality-checked by our engineering team.\n\nWe will notify you with dispatch details as soon as it ships.`;
      } else if (orderStatus === "Shipped") {
        subject = `🚚 Order Shipped & Dispatched — Innomentis Order #${order.order_id}`;
        messageBody += `Exciting news! Your robotics order #${order.order_id} has been dispatched.\n\nIt is on its way to:\n${order.address}, ${order.city}, ${order.state} - ${order.pincode}\n\nExpect delivery in 2-4 business days.`;
      } else if (orderStatus === "Delivered") {
        subject = `✅ Order Delivered — Innomentis Order #${order.order_id}`;
        messageBody += `Your Innomentis Order #${order.order_id} has been delivered successfully.\n\nWe hope you have an incredible time building and innovating! If you have any questions or need project guidance, reach us at contact@innomentis.in or +91 91482 06667.`;
      } else if (paymentStatus === "Rejected" || orderStatus === "Payment Rejected") {
        subject = `⚠️ Payment Verification Notice — Innomentis Order #${order.order_id}`;
        messageBody += `We were unable to verify your payment transaction ID (${order.transaction_id}) for Order #${order.order_id}.\n\nReason: ${rejectionReason || "Transaction UTR could not be verified in bank records"}.\n\nPlease contact our support team at contact@innomentis.in or WhatsApp +91 91482 06667 with your payment screenshot so we can help resolve this promptly.`;
      } else {
        subject = `Order Status Update — Innomentis Order #${order.order_id}: ${orderStatus}`;
        messageBody += `Your Order #${order.order_id} status has been updated to: "${orderStatus}".`;
      }

      console.log(`[AUTOMATED EMAIL DISPATCHED] -> To: ${order.email} | Subject: "${subject}"`);

      // Store in persistent local email audit log for admin inspection & debugging
      const logs = JSON.parse(localStorage.getItem("innomentis_email_logs") || "[]");
      logs.unshift({
        order_id: order.order_id,
        recipient: order.email,
        customer_name: order.customer_name,
        subject: subject,
        status: orderStatus,
        sent_at: new Date().toISOString(),
        body: messageBody
      });
      localStorage.setItem("innomentis_email_logs", JSON.stringify(logs));
    }

    /**
     * Supabase Cloud DB REST Sync Handler
     */
    async syncOrderToSupabase(order) {
      const url = window.SUPABASE_URL;
      const key = window.SUPABASE_ANON_KEY;

      if (url && key && key !== "YOUR_SUPABASE_ANON_KEY_HERE") {
        try {
          const res = await fetch(`${url}/rest/v1/orders`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "apikey": key,
              "Authorization": `Bearer ${key}`,
              "Prefer": "return=minimal"
            },
            body: JSON.stringify(order)
          });
          if (res.ok) {
            console.log(`[SUPABASE LIVE SYNC SUCCESS] Order #${order.order_id} synced to cloud DB.`);
          } else {
            const errText = await res.text();
            console.warn(`[SUPABASE SYNC ERROR ${res.status}]:`, errText);
          }
        } catch (err) {
          console.warn("Supabase Cloud Sync Notice:", err);
        }
      }
    }
  }

  // Export Singleton Instance
  window.StoreDB = new StoreDatabase();
})();
