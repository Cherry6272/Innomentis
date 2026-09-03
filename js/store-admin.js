/**
 * INNOMENTIS ROBOTICS STORE — ADMIN DASHBOARD & VERIFICATION LOGIC
 * Protected portal for order verification, payment status updates, stock management, and UPI settings
 */

(function () {
  const ADMIN_SESSION_KEY = "innomentis_admin_auth_v1";
  const DEFAULT_ADMIN_PASSCODE = "innomentis2025";

  class StoreAdmin {
    constructor() {
      this.init();
    }

    init() {
      if (!document.getElementById("admin-dashboard-app")) return; // Only execute on admin.html

      this.checkAuth();
      this.bindEvents();
    }

    checkAuth() {
      const isAuthenticated = sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
      const authOverlay = document.getElementById("admin-login-overlay");
      const mainContent = document.getElementById("admin-main-content");

      if (isAuthenticated) {
        if (authOverlay) authOverlay.style.display = "none";
        if (mainContent) mainContent.style.display = "block";
        this.renderDashboard();
      } else {
        if (authOverlay) authOverlay.style.display = "flex";
        if (mainContent) mainContent.style.display = "none";
      }
    }

    authenticate(passcode) {
      if (passcode === DEFAULT_ADMIN_PASSCODE) {
        sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
        this.checkAuth();
        return true;
      }
      return false;
    }

    logout() {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
      this.checkAuth();
    }

    bindEvents() {
      // Login Form
      const loginForm = document.getElementById("admin-login-form");
      if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const pass = document.getElementById("admin_passcode")?.value.trim();
          const errorEl = document.getElementById("login-error-msg");

          if (this.authenticate(pass)) {
            if (errorEl) errorEl.style.display = "none";
          } else {
            if (errorEl) {
              errorEl.textContent = "Invalid passcode. Please try again.";
              errorEl.style.display = "block";
            }
          }
        });
      }

      // Logout Button
      const logoutBtn = document.getElementById("admin-logout-btn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", () => this.logout());
      }

      // Search & Filter Inputs
      const searchInput = document.getElementById("admin-order-search");
      const statusFilter = document.getElementById("admin-status-filter");

      if (searchInput) searchInput.addEventListener("input", () => this.renderOrdersTable());
      if (statusFilter) statusFilter.addEventListener("change", () => this.renderOrdersTable());

      // Tab Switching
      document.querySelectorAll(".admin-tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".admin-tab-btn").forEach((b) => b.classList.remove("active"));
          document.querySelectorAll(".admin-tab-content").forEach((c) => c.classList.remove("active"));

          btn.classList.add("active");
          const targetId = btn.getAttribute("data-tab");
          const targetContent = document.getElementById(targetId);
          if (targetContent) targetContent.classList.add("active");

          if (targetId === "tab-settings") this.renderSettingsForm();
          if (targetId === "tab-inventory") this.renderInventoryTable();
        });
      });

      // Settings Form Submission
      const settingsForm = document.getElementById("admin-settings-form");
      if (settingsForm) {
        settingsForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const upiId = document.getElementById("setting_upi_id")?.value.trim();
          const upiName = document.getElementById("setting_upi_name")?.value.trim();

          window.StoreDB.saveSettings({ upi_id: upiId, upi_name: upiName });
          alert("✓ Store settings updated successfully!");
        });
      }
    }

    async renderDashboard() {
      await window.StoreDB.fetchLiveOrdersFromSupabase();
      this.renderStats();
      this.renderOrdersTable();
    }

    renderStats() {
      const orders = window.StoreDB.getAllOrders();

      const totalOrders = orders.length;
      const pendingCount = orders.filter((o) => o.payment_status === "Payment Verification Pending").length;
      const confirmedCount = orders.filter((o) => o.payment_status === "Payment Verified" || o.order_status === "Order Confirmed").length;
      const shippedCount = orders.filter((o) => o.order_status === "Shipped" || o.order_status === "Delivered").length;

      if (document.getElementById("stat-total-orders")) document.getElementById("stat-total-orders").textContent = totalOrders;
      if (document.getElementById("stat-pending-verification")) document.getElementById("stat-pending-verification").textContent = pendingCount;
      if (document.getElementById("stat-confirmed-orders")) document.getElementById("stat-confirmed-orders").textContent = confirmedCount;
      if (document.getElementById("stat-shipped-orders")) document.getElementById("stat-shipped-orders").textContent = shippedCount;
    }

    renderOrdersTable() {
      const tableBody = document.getElementById("admin-orders-table-body");
      if (!tableBody) return;

      let orders = window.StoreDB.getAllOrders();

      const searchQuery = document.getElementById("admin-order-search")?.value.toLowerCase().trim() || "";
      const filterStatus = document.getElementById("admin-status-filter")?.value || "All";

      if (filterStatus !== "All") {
        orders = orders.filter((o) => o.payment_status === filterStatus || o.order_status === filterStatus);
      }

      if (searchQuery) {
        orders = orders.filter(
          (o) =>
            o.order_id.toLowerCase().includes(searchQuery) ||
            o.customer_name.toLowerCase().includes(searchQuery) ||
            o.email.toLowerCase().includes(searchQuery) ||
            o.transaction_id.toLowerCase().includes(searchQuery) ||
            o.phone.includes(searchQuery)
        );
      }

      if (orders.length === 0) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="7" class="table-empty-cell">No matching orders found.</td>
          </tr>
        `;
        return;
      }

      tableBody.innerHTML = orders
        .map((order) => {
          const dateStr = new Date(order.created_at).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          });

          const statusBadgeClass = this.getStatusBadgeClass(order.payment_status, order.order_status);

          return `
          <tr>
            <td><strong>#${order.order_id}</strong></td>
            <td>
              <div class="customer-cell">
                <strong>${this.escapeHtml(order.customer_name)}</strong>
                <span>${this.escapeHtml(order.email)} • ${this.escapeHtml(order.phone)}</span>
              </div>
            </td>
            <td>${dateStr}</td>
            <td><strong>₹${order.total_amount.toLocaleString("en-IN")}</strong></td>
            <td><code>${this.escapeHtml(order.transaction_id)}</code></td>
            <td><span class="status-badge ${statusBadgeClass}">${order.payment_status}</span></td>
            <td>
              <button type="button" class="btn small primary" onclick="window.StoreAdmin.viewOrderModal('${order.order_id}')">
                Review & Verify
              </button>
            </td>
          </tr>
        `;
        })
        .join("");
    }

    getStatusBadgeClass(paymentStatus, orderStatus) {
      if (paymentStatus === "Payment Verified" || orderStatus === "Order Confirmed") return "badge-success";
      if (paymentStatus === "Rejected") return "badge-danger";
      if (orderStatus === "Shipped" || orderStatus === "Delivered") return "badge-info";
      return "badge-warning";
    }

    viewOrderModal(orderId) {
      const order = window.StoreDB.getOrderById(orderId);
      if (!order) return;

      const modalContainer = document.getElementById("admin-order-modal-container");
      if (!modalContainer) return;

      const itemsHtml = order.items
        .map(
          (item) => `
        <div class="modal-item-row">
          <span>${this.escapeHtml(item.product_name)} (x${item.quantity})</span>
          <strong>₹${(item.quantity * item.price).toLocaleString("en-IN")}</strong>
        </div>
      `
        )
        .join("");

      const screenshotHtml = order.payment_screenshot
        ? `<div class="screenshot-box"><img src="${order.payment_screenshot}" alt="Payment Proof" /><a href="${order.payment_screenshot}" target="_blank" class="link-download">View Full Image ↗</a></div>`
        : `<p class="no-proof-text">No screenshot uploaded (Verification via UTR ID)</p>`;

      modalContainer.innerHTML = `
        <div class="admin-modal-overlay">
          <div class="admin-modal-content">
            <div class="modal-header">
              <h3>Order Details #${order.order_id}</h3>
              <button class="modal-close-btn" onclick="window.StoreAdmin.closeModal()">&times;</button>
            </div>
            
            <div class="modal-body">
              <div class="modal-grid-2col">
                <div class="info-block">
                  <h4 class="block-title">Student & Delivery Info</h4>
                  <p><strong>Student Name:</strong> ${this.escapeHtml(order.customer_name)}</p>
                  <p><strong>Parent/Guardian:</strong> ${this.escapeHtml(order.guardian_name || "N/A")}</p>
                  <p><strong>School/College:</strong> ${this.escapeHtml(order.school || "N/A")}</p>
                  <p><strong>Email:</strong> ${this.escapeHtml(order.email)}</p>
                  <p><strong>Phone:</strong> ${this.escapeHtml(order.phone)}</p>
                  <p><strong>Delivery Address:</strong> ${this.escapeHtml(order.address)}, ${this.escapeHtml(order.city)}, ${this.escapeHtml(order.state)} - ${this.escapeHtml(order.pincode)}</p>
                </div>

                <div class="info-block">
                  <h4 class="block-title">Payment Verification Info</h4>
                  <p><strong>Transaction / UTR ID:</strong> <code class="utr-code">${this.escapeHtml(order.transaction_id)}</code></p>
                  <p><strong>Total Amount:</strong> <span class="highlight-price">₹${order.total_amount.toLocaleString("en-IN")}</span></p>
                  <p><strong>Payment Status:</strong> <span class="status-badge ${this.getStatusBadgeClass(order.payment_status, order.order_status)}">${order.payment_status}</span></p>
                  <p><strong>Order Status:</strong> <strong>${order.order_status}</strong></p>
                  <div class="screenshot-preview-wrapper">
                    <h5>Payment Proof Screenshot:</h5>
                    ${screenshotHtml}
                  </div>
                </div>
              </div>

              <div class="info-block items-block" style="margin-top: 1.5rem;">
                <h4 class="block-title">Ordered Products</h4>
                ${itemsHtml}
              </div>

              <div class="admin-actions-bar" style="margin-top: 2rem;">
                <h4>Verification Actions:</h4>
                <div class="action-buttons-group">
                  <button type="button" class="btn success" onclick="window.StoreAdmin.verifyPayment('${order.order_id}')">
                    ✓ Verify Payment & Confirm Order
                  </button>
                  <button type="button" class="btn danger" onclick="window.StoreAdmin.rejectPayment('${order.order_id}')">
                    ✕ Reject Payment
                  </button>
                  
                  <div class="status-dropdown-group">
                    <label>Update Status:</label>
                    <select onchange="window.StoreAdmin.updateLifecycleStatus('${order.order_id}', this.value)">
                      <option value="Payment Verification Pending" ${order.order_status === "Payment Verification Pending" ? "selected" : ""}>Payment Verification Pending</option>
                      <option value="Order Confirmed" ${order.order_status === "Order Confirmed" ? "selected" : ""}>Order Confirmed</option>
                      <option value="Processing" ${order.order_status === "Processing" ? "selected" : ""}>Processing</option>
                      <option value="Shipped" ${order.order_status === "Shipped" ? "selected" : ""}>Shipped</option>
                      <option value="Delivered" ${order.order_status === "Delivered" ? "selected" : ""}>Delivered</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    closeModal() {
      const modalContainer = document.getElementById("admin-order-modal-container");
      if (modalContainer) modalContainer.innerHTML = "";
    }

    verifyPayment(orderId) {
      if (confirm(`Confirm verification of payment for Order #${orderId}? This will trigger confirmation email to the customer.`)) {
        window.StoreDB.updateOrderStatus(orderId, "Payment Verified", "Order Confirmed");
        alert(`✓ Payment verified! Order #${orderId} is now confirmed.`);
        this.closeModal();
        this.renderDashboard();
      }
    }

    rejectPayment(orderId) {
      const reason = prompt("Enter reason for payment rejection (e.g. Invalid UTR number / Amount mismatch):");
      if (reason !== null) {
        window.StoreDB.updateOrderStatus(orderId, "Rejected", "Payment Rejected", reason);
        alert(`Order #${orderId} payment marked as Rejected.`);
        this.closeModal();
        this.renderDashboard();
      }
    }

    updateLifecycleStatus(orderId, newStatus) {
      const paymentStatus = newStatus === "Order Confirmed" || newStatus === "Processing" || newStatus === "Shipped" || newStatus === "Delivered" ? "Payment Verified" : "Payment Verification Pending";
      window.StoreDB.updateOrderStatus(orderId, paymentStatus, newStatus);
      alert(`Order #${orderId} status updated to: ${newStatus}`);
      this.closeModal();
      this.renderDashboard();
    }

    renderSettingsForm() {
      const settings = window.StoreDB.getSettings();
      const upiInput = document.getElementById("setting_upi_id");
      const nameInput = document.getElementById("setting_upi_name");

      if (upiInput) upiInput.value = settings.upi_id || "innomentis@upi";
      if (nameInput) nameInput.value = settings.upi_name || "Innomentis Robotics";
    }

    renderInventoryTable() {
      const tbody = document.getElementById("admin-inventory-table-body");
      if (!tbody) return;

      const products = window.StoreDB.getAllProducts();

      tbody.innerHTML = products
        .map(
          (p) => `
        <tr>
          <td><code>${p.sku}</code></td>
          <td><strong>${this.escapeHtml(p.name)}</strong></td>
          <td>${p.category}</td>
          <td>₹${p.price}</td>
          <td>
            <select onchange="window.StoreAdmin.updateStock('${p.id}', this.value)">
              <option value="In Stock" ${p.availability === "In Stock" ? "selected" : ""}>In Stock</option>
              <option value="Low Stock" ${p.availability === "Low Stock" ? "selected" : ""}>Low Stock</option>
              <option value="Out of Stock" ${p.availability === "Out of Stock" ? "selected" : ""}>Out of Stock</option>
            </select>
          </td>
        </tr>
      `
        )
        .join("");
    }

    updateStock(productId, newAvailability) {
      const updated = window.StoreDB.updateProduct(productId, { availability: newAvailability });
      if (updated) {
        alert(`✓ Saved! Stock status for "${updated.name}" is now updated to: ${newAvailability}`);
      }
    }

    escapeHtml(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.StoreAdmin = new StoreAdmin();
  });
})();
