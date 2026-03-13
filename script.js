document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navToggle = document.querySelector(".ns-nav-toggle");
  const navLinks = document.querySelectorAll(".ns-nav-links a");
  const scrollButtons = ddocument.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navToggle = document.querySelector(".ns-nav-toggle");
  const navLinks = document.querySelectorAll(".ns-nav-links a");
  const scrollButtons = document.querySelectorAll("[data-scroll-to]");
  const yearSpan = document.getElementById("year");
  const form = document.querySelector(".ns-form");
  const formNote = document.getElementById("form-note");

  // Anno corrente nel footer
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  // Menu mobile
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("ns-nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("ns-nav-open");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Smooth scroll
  const smoothScrollTo = (selector) => {
    const target = document.querySelector(selector);
    if (!target) return;
    const header = document.querySelector(".ns-header");
    const offset = header ? header.offsetHeight + 8 : 64;
    const rect = target.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - offset;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll-to");
      if (target) smoothScrollTo(target);
    });
  });

  // Form submit
  if (form && formNote) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formNote.textContent = "Grazie! La tua richiesta è stata inviata. Ti risponderemo entro 24 ore.";
      formNote.style.color = "#16a34a";
      formNote.style.fontWeight = "500";
      setTimeout(() => {
        form.reset();
        setTimeout(() => {
          formNote.textContent = "Nessuno spam. Usiamo i tuoi dati solo per risponderti.";
          formNote.style.color = "";
          formNote.style.fontWeight = "";
        }, 5000);
      }, 600);
    });
  }

  // Scroll reveal con IntersectionObserver
  const revealElements = document.querySelectorAll(".ns-reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ns-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: mostra tutto senza animazione
    revealElements.forEach((el) => el.classList.add("ns-visible"));
  }
});
ocument.querySelectorAll("[data-scroll-to]");
  const yearSpan = document.getElementById("year");
  const form = document.querySelector(".ns-form");
  const formNote = document.getElementById("form-note");

  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("ns-nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("ns-nav-open");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  const smoothScrollTo = (selector) => {
    const target = document.querySelector(selector);
    if (!target) return;
    const header = document.querySelector(".ns-header");
    const offset = header ? header.offsetHeight + 8 : 64;
    const rect = target.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - offset;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll-to");
      if (target) {
        smoothScrollTo(target);
      }
    });
  });

  // Client-side fake submit (puoi collegarlo a un backend o servizio email in seguito)
  if (form && formNote) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      formNote.textContent = "Grazie! La tua richiesta è stata inviata (demo).";
      formNote.style.color = "#16a34a";

      setTimeout(() => {
        form.reset();
      }, 600);
    });
  }
});

