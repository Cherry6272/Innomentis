/**
 * INNOMENTIS ROBOTICS STORE — CHECKOUT & UPI PAYMENT WORKFLOW
 * Handles order assembly, configurable UPI ID display, QR generation, UTR input, and screenshot processing
 */

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const checkoutForm = document.getElementById("checkout-form");
    const orderItemsContainer = document.getElementById("checkout-items-list");
    const checkoutTotalEl = document.getElementById("checkout-total-val");
    const checkoutSubtotalEl = document.getElementById("checkout-subtotal-val");
    const upiIdDisplay = document.getElementById("upi-id-display");
    const qrContainer = document.getElementById("upi-qr-container");
    const screenshotInput = document.getElementById("payment_screenshot");
    const screenshotPreview = document.getElementById("screenshot-preview");

    if (!checkoutForm) return; // Only execute on checkout.html

    const settings = window.StoreDB.getSettings();
    const cartItems = window.StoreCart ? window.StoreCart.getItems() : [];
    const subtotal = window.StoreCart ? window.StoreCart.getSubtotal() : 0;

    // Redirect if cart is empty
    if (cartItems.length === 0) {
      alert("Your cart is currently empty. Redirecting to Robotics Store...");
      window.location.href = "store.html";
      return;
    }

    // 1. Display Order Summary Items
    if (orderItemsContainer) {
      orderItemsContainer.innerHTML = cartItems
        .map(
          (item) => `
          <div class="summary-item-row">
            <div class="summary-item-info">
              <img src="${item.image}" alt="${item.product_name}" class="summary-item-thumb" />
              <div>
                <h5 class="summary-item-name">${item.product_name}</h5>
                <span class="summary-item-meta">Qty: ${item.quantity} × ₹${item.price.toLocaleString("en-IN")}</span>
              </div>
            </div>
            <div class="summary-item-price">₹${(item.quantity * item.price).toLocaleString("en-IN")}</div>
          </div>
        `
        )
        .join("");
    }

    if (checkoutSubtotalEl) checkoutSubtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
    if (checkoutTotalEl) checkoutTotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;

    // 2. Display Configurable UPI Details & Generate QR Code
    if (upiIdDisplay) {
      upiIdDisplay.textContent = settings.upi_id || "innomentis@upi";
    }

    // Generate Dynamic UPI QR Code Component
    if (qrContainer) {
      const upiId = settings.upi_id || "innomentis@upi";
      const upiName = encodeURIComponent(settings.upi_name || "Innomentis Robotics");
      const upiUri = `upi://pay?pa=${upiId}&pn=${upiName}&am=${subtotal}&cu=INR&tn=Robotics%20Order`;
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUri)}`;

      qrContainer.innerHTML = `
        <div class="qr-box">
          <img src="${qrApiUrl}" alt="UPI Payment QR Code" class="upi-qr-image" />
          <p class="qr-caption">Scan with GPay, PhonePe, Paytm, or BHIM</p>
          <span class="qr-amount-badge">Amount: ₹${subtotal.toLocaleString("en-IN")}</span>
        </div>
      `;
    }

    // 3. Handle Copy UPI ID Button
    const copyUpiBtn = document.getElementById("copy-upi-btn");
    if (copyUpiBtn) {
      copyUpiBtn.addEventListener("click", () => {
        const upiText = settings.upi_id || "innomentis@upi";
        navigator.clipboard.writeText(upiText).then(() => {
          copyUpiBtn.textContent = "✓ Copied!";
          setTimeout(() => {
            copyUpiBtn.textContent = "Copy UPI ID";
          }, 2000);
        });
      });
    }

    // 4. Handle Payment Screenshot Upload Preview (Base64)
    let screenshotBase64 = "";
    if (screenshotInput) {
      screenshotInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          if (file.size > 5 * 1024 * 1024) {
            alert("File size exceeds 5MB limit. Please upload a smaller image.");
            screenshotInput.value = "";
            return;
          }
          const reader = new FileReader();
          reader.onload = function (evt) {
            screenshotBase64 = evt.target.result;
            if (screenshotPreview) {
              screenshotPreview.innerHTML = `
                <div class="preview-box">
                  <img src="${screenshotBase64}" alt="Payment Screenshot Preview" />
                  <span>✓ Screenshot attached</span>
                </div>
              `;
            }
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // 5. Handle Form Submission
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const studentName = document.getElementById("customer_name")?.value.trim();
      const guardianName = document.getElementById("guardian_name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const phone = document.getElementById("phone")?.value.trim();
      const school = document.getElementById("school")?.value.trim();
      const address = document.getElementById("address")?.value.trim();
      const city = document.getElementById("city")?.value.trim();
      const state = document.getElementById("state")?.value.trim();
      const pincode = document.getElementById("pincode")?.value.trim();
      const transactionId = document.getElementById("transaction_id")?.value.trim();

      if (!studentName || !email || !phone || !address || !city || !pincode || !transactionId) {
        alert("Please complete all required fields including your Transaction ID / UTR Number.");
        return;
      }

      const submitBtn = document.getElementById("submit-order-btn");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting Order for Verification...";
      }

      // Create Order in DB
      const newOrder = window.StoreDB.createOrder({
        customer_name: studentName,
        guardian_name: guardianName,
        email: email,
        phone: phone,
        school: school,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
        total_amount: subtotal,
        transaction_id: transactionId,
        payment_screenshot: screenshotBase64,
        items: cartItems
      });

      // Clear Shopping Cart
      if (window.StoreCart) {
        window.StoreCart.clearCart();
      }

      // Direct Redirect to Order Confirmation Page
      setTimeout(() => {
        window.location.href = `order-confirmation.html?id=${newOrder.order_id}`;
      }, 500);
    });
  });
})();
