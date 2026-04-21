document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const DEFAULT_MODAL_SELECTOR = "#enquiry-modal";
  const MODAL_SELECTOR = ".enquiry-modal, .lead-modal";

  // Add smooth reveal animations for elements
  const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .programme-card, .course-card, .insight-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  };

  // Add parallax effect to hero sections
  const initParallax = () => {
    const heroSections = document.querySelectorAll('.hero');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      heroSections.forEach(hero => {
        const rect = hero.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          const speed = 0.5;
          const yPos = -(scrolled * speed);
          hero.style.backgroundPositionY = yPos + 'px';
        }
      });
    });
  };

  // Add hover effects for interactive elements
  const initHoverEffects = () => {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  };

  // Initialize all enhancements
  observeElements();
  initParallax();
  initHoverEffects();

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
      
      // Show success feedback
      const button = enquiryForm.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = '✓ Sent!';
      button.style.background = '#0ac950';
      
      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        enquiryForm.reset();
      }, 2000);
    });
  }

  // Handle all form submissions with feedback
  document.querySelectorAll('form').forEach(form => {
    if (form.id !== 'enquiry-form') {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = '✓ Sent!';
        button.style.background = '#0ac950';
        
        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = '';
          form.reset();
        }, 2000);
      });
    }
  });

  // Add smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading states for images
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
      this.style.animation = 'fadeIn 0.5s ease';
    });
  });
});
