document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  /* ==========================================================================
     1. STICKY NAVBAR SCROLL STATE & MOBILE TOGGLE
     ========================================================================== */
  const nav = document.querySelector(".main-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      nav?.classList.add("scrolled");
    } else {
      nav?.classList.remove("scrolled");
    }
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("is-open");
      navLinks.classList.toggle("mobile-open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("is-open");
        navLinks.classList.remove("mobile-open");
      });
    });
  }

  /* ==========================================================================
     2. MODAL SYSTEM (LEAD & ENQUIRY MODALS)
     ========================================================================== */
  const DEFAULT_MODAL_SELECTOR = "#lead-modal";

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

  // Open modal triggers
  document.querySelectorAll("[data-modal-target]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const selector = trigger.getAttribute("data-modal-target") || DEFAULT_MODAL_SELECTOR;
      const modal = document.querySelector(selector);
      openModal(modal);
    });
  });

  // Close modal buttons / overlays
  document.querySelectorAll("[data-close]").forEach((closer) => {
    closer.addEventListener("click", () => {
      const modal = closer.closest(".lead-modal, .enquiry-modal");
      closeModal(modal);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".lead-modal.is-visible, .enquiry-modal.is-visible");
      if (activeModal) closeModal(activeModal);
    }
  });

  /* ==========================================================================
     3. INTERACTIVE TECH EXPERIENCE NODES (SENSE, THINK, BUILD, MOVE)
     ========================================================================== */
  const techNodeBtns = document.querySelectorAll(".tech-node-btn");
  const techDisplayTitle = document.getElementById("tech-display-title");
  const techDisplayDesc = document.getElementById("tech-display-desc");
  const techDisplayImg = document.getElementById("tech-display-img");

  const techNodeData = {
    sense: {
      title: "SENSE — Environmental Awareness & Perception",
      desc: "Robots use ultrasonic, infrared, optical, and touch sensors to gather real-time data from their physical environment, teaching students how machines perceive reality.",
      image: "images/1.jpg"
    },
    think: {
      title: "THINK — Algorithmic Logic & AI Decision Making",
      desc: "Microcontrollers and AI algorithms process sensor data in milliseconds. Students program conditional logic, loops, and decision trees to build smart autonomous systems.",
      image: "images/AI.jpg"
    },
    build: {
      title: "BUILD — Hands-On Hardware & Engineering",
      desc: "Students assemble modular chassis, gearing systems, circuits, and micro-actuators, transforming raw engineering principles into physical working prototypes.",
      image: "images/HOME 1.jpg"
    },
    move: {
      title: "MOVE — Actuation & Dynamic Robotics Execution",
      desc: "Motors and servos execute precise physical movements. Students test kinetic forces, speed control, and navigation algorithms to accomplish complex technological missions.",
      image: "images/3.jpg"
    }
  };

  techNodeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      techNodeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const nodeKey = btn.getAttribute("data-node");
      if (techNodeData[nodeKey] && techDisplayTitle) {
        techDisplayTitle.textContent = techNodeData[nodeKey].title;
        techDisplayDesc.textContent = techNodeData[nodeKey].desc;
        if (techDisplayImg) techDisplayImg.src = techNodeData[nodeKey].image;
      }
    });
  });

  /* ==========================================================================
     4. FAQ ACCORDION INTERACTIVITY
     ========================================================================== */
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((q) => {
    q.addEventListener("click", () => {
      const faqItem = q.closest(".faq-item");
      const isActive = faqItem.classList.contains("active");

      // Close all other items
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
      });

      if (!isActive) {
        faqItem.classList.add("active");
      }
    });
  });

  /* ==========================================================================
     5. LEAD & DEMO FORM SUBMISSION (EXCLUDES STORE CHECKOUT)
     ========================================================================== */
  document.querySelectorAll("form.lead-form, form.enquiry-form, form.contact-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Collect field values if present
      const nameInput = form.querySelector("input[type='text'], input[placeholder*='Name']");
      const phoneInput = form.querySelector("input[type='tel'], input[placeholder*='Phone']");
      const nameVal = nameInput ? nameInput.value : "Parent/Student";
      const phoneVal = phoneInput ? phoneInput.value : "";

      const msg = `Hello Innomentis Team, I would like to book a demo/enquire about your robotics & AI programs. Name: ${nameVal}, Contact: ${phoneVal}`;
      const whatsappUrl = `https://wa.me/919148206667?text=${encodeURIComponent(msg)}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      // Submit feedback button state
      const submitBtn = form.querySelector("button[type='submit']");
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "✓ Lead Submitted!";
        submitBtn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = "";
          form.reset();
          const activeModal = form.closest(".lead-modal, .enquiry-modal");
          if (activeModal) closeModal(activeModal);
        }, 2200);
      }
    });
  });

  /* ==========================================================================
     6. INTERSECTION OBSERVER FOR SCROLL REVEALS
     ========================================================================== */
  const revealTargets = document.querySelectorAll(
    ".pillar-card, .program-editorial-card, .value-card, .gallery-item, .journey-step, .stat-box, .course-card, .insight-card, .tier-card, .aiml-card"
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealTargets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
  });
});
