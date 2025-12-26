document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const DEFAULT_MODAL_SELECTOR = "#enquiry-modal";
  const MODAL_SELECTOR = ".enquiry-modal, .lead-modal";

  const initNavToggle = () => {
    const navToggles = document.querySelectorAll(".nav-toggle");

    navToggles.forEach((toggle) => {
      const navGrid = toggle.closest(".nav-grid");
      const navLinks = navGrid?.querySelector(".nav-links");

      const closeMenu = () => {
        toggle.classList.remove("is-open");
        navGrid?.classList.remove("is-open");
      };

      toggle.addEventListener("click", () => {
        toggle.classList.toggle("is-open");
        navGrid?.classList.toggle("is-open");
      });

      navLinks?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
      });
    });
  };

  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
  };

  const modalTriggers = document.querySelectorAll(
    "[data-modal-target], .link-arrow[href='#']"
  );

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const selector = trigger.getAttribute("data-modal-target") || DEFAULT_MODAL_SELECTOR;
      const modal = document.querySelector(selector);
      openModal(modal);
    });
  });

  document.querySelectorAll("[data-close]").forEach((closer) => {
    closer.addEventListener("click", () => {
      const modal = closer.closest(MODAL_SELECTOR);
      closeModal(modal);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const activeModal = document.querySelector(`${MODAL_SELECTOR}.is-visible`);
      if (activeModal) closeModal(activeModal);
    }
  });

  const internalLinks = document.querySelectorAll("a[href^='#']:not([href='#'])");
  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSelector = link.getAttribute("href");
      const target = document.querySelector(targetSelector);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  initNavToggle();

  const enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("enquiry-name").value;
      const phone = document.getElementById("enquiry-phone").value;
      const message = `Hello, I am interested in your courses. Name: ${name}, Phone: ${phone}`;
      const whatsappUrl = `https://wa.me/919148206667?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    });
  }
});
