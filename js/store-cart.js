/**
 * INNOMENTIS ROBOTICS STORE — SHOPPING CART & DRAWER SYSTEM
 * Manages item addition, quantity adjustments, totals, and slide-over UI
 */

(function () {
  const CART_STORAGE_KEY = "innomentis_cart_v1";

  class StoreCart {
    constructor() {
      this.items = this.loadCart();
      this.initCartDrawer();
      this.updateCartBadges();
    }

    loadCart() {
      try {
        const raw = localStorage.getItem(CART_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    saveCart() {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
      this.updateCartBadges();
      this.renderCartDrawer();
    }

    addItem(productId, quantity = 1) {
      const product = window.StoreDB.getProductById(productId);
      if (!product) return false;

      if (product.availability === "Out of Stock") {
        alert("Sorry, this item is currently Out of Stock.");
        return false;
      }

      const existingIndex = this.items.findIndex((item) => item.product_id === productId);

      if (existingIndex !== -1) {
        this.items[existingIndex].quantity += quantity;
      } else {
        this.items.push({
          product_id: product.id,
          product_name: product.name,
          sku: product.sku,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity: quantity
        });
      }

      this.saveCart();
      this.openCartDrawer();
      return true;
    }

    removeItem(productId) {
      this.items = this.items.filter((item) => item.product_id !== productId);
      this.saveCart();
    }

    updateQuantity(productId, newQty) {
      if (newQty <= 0) {
        this.removeItem(productId);
        return;
      }
      const item = this.items.find((i) => i.product_id === productId);
      if (item) {
        item.quantity = newQty;
        this.saveCart();
      }
    }

    clearCart() {
      this.items = [];
      this.saveCart();
    }

    getSubtotal() {
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    getItemCount() {
      return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    getItems() {
      return this.items;
    }

    updateCartBadges() {
      const count = this.getItemCount();
      document.querySelectorAll(".cart-count-badge").forEach((el) => {
        el.textContent = count;
        el.style.display = count > 0 ? "inline-flex" : "none";
      });
    }

    /**
     * Inject Cart Drawer Overlay into page body if not present
     */
    initCartDrawer() {
      if (document.getElementById("cart-drawer")) return;

      const drawerHtml = `
        <div id="cart-drawer" class="cart-drawer-overlay" aria-hidden="true">
          <div class="cart-drawer-backdrop" data-close-cart></div>
          <div class="cart-drawer-content" role="dialog" aria-modal="true" aria-label="Shopping Cart">
            <div class="cart-drawer-header">
              <div class="cart-header-title">
                <span class="cart-icon">🛒</span>
                <h3>Your Robotics Cart</h3>
                <span class="cart-count-tag"><span class="cart-count-badge">0</span> items</span>
              </div>
              <button type="button" class="cart-close-btn" data-close-cart aria-label="Close Cart">&times;</button>
            </div>

            <div class="cart-drawer-body" id="cart-items-container">
              <!-- Rendered Cart Items -->
            </div>

            <div class="cart-drawer-footer">
              <div class="cart-subtotal-row">
                <span>Subtotal:</span>
                <span class="cart-subtotal-amount" id="cart-subtotal-val">₹0</span>
              </div>
              <p class="cart-shipping-note">🚚 Fast Delivery across India | Verification via UPI</p>
              <div class="cart-footer-actions">
                <a href="checkout.html" class="btn primary btn-checkout" id="cart-checkout-btn">
                  Proceed to Order →
                </a>
                <button type="button" class="btn secondary" data-close-cart>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML("beforeend", drawerHtml);

      // Event listeners for close
      document.querySelectorAll("[data-close-cart]").forEach((el) => {
        el.addEventListener("click", () => this.closeCartDrawer());
      });

      // Render initial items
      this.renderCartDrawer();
    }

    openCartDrawer() {
      const drawer = document.getElementById("cart-drawer");
      if (drawer) {
        drawer.classList.add("is-visible");
        drawer.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
      }
    }

    closeCartDrawer() {
      const drawer = document.getElementById("cart-drawer");
      if (drawer) {
        drawer.classList.remove("is-visible");
        drawer.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
      }
    }

    renderCartDrawer() {
      const container = document.getElementById("cart-items-container");
      const subtotalEl = document.getElementById("cart-subtotal-val");
      const checkoutBtn = document.getElementById("cart-checkout-btn");
      if (!container) return;

      const subtotal = this.getSubtotal();
      if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;

      if (this.items.length === 0) {
        container.innerHTML = `
          <div class="cart-empty-state">
            <div class="empty-icon">🤖</div>
            <h4>Your cart is empty</h4>
            <p>Explore our robotics kits, sensors, and electronic components to start building!</p>
            <a href="store.html" class="btn primary" data-close-cart style="margin-top: 1rem;">Explore Products</a>
          </div>
        `;
        if (checkoutBtn) checkoutBtn.classList.add("disabled");
      } else {
        if (checkoutBtn) checkoutBtn.classList.remove("disabled");
        container.innerHTML = this.items
          .map(
            (item) => `
            <div class="cart-item-card" data-id="${item.product_id}">
              <img src="${item.image}" alt="${item.product_name}" class="cart-item-img" />
              <div class="cart-item-details">
                <div class="cart-item-category">${item.category}</div>
                <h4 class="cart-item-title">${item.product_name}</h4>
                <div class="cart-item-price">₹${item.price.toLocaleString("en-IN")}</div>
                
                <div class="cart-qty-controls">
                  <button type="button" class="btn-qty" onclick="window.StoreCart.updateQuantity('${item.product_id}', ${item.quantity - 1})">-</button>
                  <span class="qty-num">${item.quantity}</span>
                  <button type="button" class="btn-qty" onclick="window.StoreCart.updateQuantity('${item.product_id}', ${item.quantity + 1})">+</button>
                </div>
              </div>
              <button type="button" class="cart-remove-btn" onclick="window.StoreCart.removeItem('${item.product_id}')" title="Remove item">&times;</button>
            </div>
          `
          )
          .join("");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.StoreCart = new StoreCart();
  });
})();
