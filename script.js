// Anno corrente nel footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth scroll per bottoni con data-scroll-to
document.querySelectorAll('[data-scroll-to]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.scrollTo);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Menu hamburger mobile
const toggle = document.querySelector('.ns-nav-toggle');
const nav = document.querySelector('.ns-nav');
const navLinks = document.querySelector('.ns-nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('ns-nav-open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Chiudi il menu' : 'Apri il menu');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('ns-nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Apri il menu');
    });
  });
}

// Animazioni scroll (Intersection Observer)
const reveals = document.querySelectorAll('.ns-reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ns-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Form submit con feedback
const form = document.querySelector('.ns-form');
const formNote = document.getElementById('form-note');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Invio in corso…';
    setTimeout(() => {
      formNote.textContent = '✅ Messaggio inviato! Ti risponderemo entro 24 ore.';
      formNote.style.color = '#22c55e';
      btn.textContent = 'Invia richiesta';
      btn.disabled = false;
      form.reset();
    }, 1500);
  });
}
