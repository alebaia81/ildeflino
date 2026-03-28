/* ═══════════════════════════════════════
   RISTORANTE PIZZERIA DELFINO — JAVASCRIPT
   ═══════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   MENU DATA
───────────────────────────────────────── */

const menuClassiche = [
  { name: 'Margherita',       desc: 'Pomodoro, mozzarella',                                           price: '7,00' },
  { name: 'Bufalina',         desc: 'Pomodoro, mozzarella, mozzarella di bufala',                     price: '9,00', badge: 'Alta Qualità' },
  { name: 'Crudo di Parma',   desc: 'Pomodoro, mozzarella, prosciutto crudo di Parma',                price: '10,00' },
  { name: 'Capricciosa',      desc: 'Pomodoro, mozzarella, carciofi, funghi, olive',                  price: '9,00' },
  { name: 'Quattro Formaggi', desc: 'Pomodoro, mozzarella, fontina, taleggio, gorgonzola',            price: '10,00' },
  { name: 'Napoli',           desc: 'Pomodoro, mozzarella, acciughe, origano',                        price: '8,00' }
];

const menuSpeciali = [
  { name: 'Delfino',          desc: 'Pomodoro, mozzarella, calamari fritti',                          price: '14,00', badge: 'Iconica' },
  { name: 'Beyko',            desc: 'Pomodoro, mozzarella, cipolle, prosciutto crudo di Parma, pomodoro a fette', price: '13,00' },
  { name: 'Lory',             desc: 'Pomodoro, mozzarella, bufala, prosciutto crudo di Parma, scaglie di grana, rucola', price: '12,00' },
  { name: 'Italia',           desc: 'Pomodoro, mozzarella, gorgonzola, peperoni conditi, rucola, salame piccante', price: '11,00' },
  { name: 'Gamberetti*',      desc: 'Pomodoro, mozzarella, gamberetti, rucola, salsa cocktail',       price: '13,00' },
  { name: 'Pizzorecchia Farcita', desc: 'Prosciutto cotto, funghi e mozzarella (specialità della casa)', price: '17,00', badge: 'Pizzorecchia' }
];

const menuCucina = [
  { name: 'Fritto Misto Imperiale', desc: 'Alici, sarde, calamari, gamberetti, gamberoni, verdure in pastella', price: '21,00', badge: 'Il Nostro Forte' },
  { name: 'Fritto di Calamari',     desc: 'Calamari fritti dorati',                                             price: '14,00' },
  { name: 'Pasta Fresca della Casa',desc: 'Ripieno di carne, formaggio, ricotta e spinaci o zucca',             price: '12,00', badge: 'Pasta Fresca' },
  { name: 'Tagliata Rucola e Grana',desc: 'Tagliata di manzo con rucola e scaglie di grana',                    price: '17,00' },
  { name: 'Torta Pavarotti',        desc: 'Il nostro dolce di produzione propria',                              price: '8,00', badge: 'Dessert' }
];

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function badge(text) {
  return text
    ? `<span style="font-size:0.6rem;padding:2px 8px;background:rgba(212,175,55,0.15);color:#d4af37;border-radius:999px;border:1px solid rgba(212,175,55,0.3);white-space:nowrap;">${text}</span>`
    : '';
}

function singlePriceHeader(title) {
  return `
    <div class="flex items-center justify-between px-5 pb-2 mb-1 border-b border-gold/10">
      <span class="text-xs text-gray-500 uppercase tracking-widest font-semibold">${title}</span>
      <div class="flex gap-6 text-xs text-gold/60 uppercase tracking-widest font-medium">
        <span class="w-16 text-right">Prezzo</span>
      </div>
    </div>`;
}

function singlePriceRow(item) {
  return `
    <div class="menu-item-row group">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap mb-1">
          <span class="menu-item-name font-serif text-lg text-white group-hover:text-gold transition-colors duration-300">${item.name}</span>
          ${badge(item.badge)}
        </div>
        <span class="menu-item-desc text-sm text-gray-400 block">${item.desc}</span>
      </div>
      <div class="flex items-center shrink-0">
        <span class="w-16 text-right text-base font-semibold text-gold tracking-wide">€ ${item.price}</span>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────
   RENDER MENU
───────────────────────────────────────── */
function renderMenu() {
  renderClassicheTab();
  renderSpecialiTab();
  renderCucinaTab();
}

function renderClassicheTab() {
  const el = document.getElementById('menu-classiche');
  if (!el) return;
  let html = singlePriceHeader('Le Nostre Pizze Classiche');
  menuClassiche.forEach(item => { html += singlePriceRow(item); });
  html += `
    <div class="text-center py-5 border-t border-gold/10 mt-6">
      <p class="text-xs text-gray-600 italic">* I prodotti utilizzati sono freschi o surgelati in base alla disponibilità di mercato</p>
    </div>`;
  el.innerHTML = html;
}

function renderSpecialiTab() {
  const el = document.getElementById('menu-speciali');
  if (!el) return;
  let html = singlePriceHeader('Pizze Speciali & Pizzorecchia');
  menuSpeciali.forEach(item => { html += singlePriceRow(item); });
  html += `
    <div class="text-center py-5 border-t border-gold/10 mt-6">
      <p class="text-xs text-gray-600 italic">* I prodotti utilizzati sono freschi o surgelati in base alla disponibilità di mercato</p>
    </div>`;
  el.innerHTML = html;
}

function renderCucinaTab() {
  const el = document.getElementById('menu-cucina');
  if (!el) return;
  let html = singlePriceHeader('Specialità Ristorante: Mare, Terra e Dolci');
  menuCucina.forEach(item => { html += singlePriceRow(item); });
  html += `
    <div class="text-center py-5 border-t border-gold/10 mt-6">
      <p class="text-xs text-gray-600 italic">* I prodotti utilizzati sono freschi o surgelati in base alla disponibilità di mercato</p>
    </div>`;
  el.innerHTML = html;
}

/* ─────────────────────────────────────────
   MENU TABS
───────────────────────────────────────── */
function showTab(name) {
  ['classiche', 'speciali', 'cucina'].forEach(key => {
    const section = document.getElementById(`menu-${key}`);
    const tab = document.getElementById(`tab-${key}`);
    if (!section || !tab) return;
    if (key === name) {
      section.classList.remove('hidden');
      tab.classList.add('active-tab');
    } else {
      section.classList.add('hidden');
      tab.classList.remove('active-tab');
    }
  });
}
window.showTab = showTab;

/* ─────────────────────────────────────────
   NAVBAR SCROLL EFFECT
───────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ─────────────────────────────────────────
   MOBILE MENU TOGGLE
───────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      toggle.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─────────────────────────────────────────
   HERO VIDEO — autoplay fallback
───────────────────────────────────────── */
function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  // Forza autoplay su iOS/Safari via interazione utente
  const tryPlay = () => {
    video.play().catch(() => {});
    document.removeEventListener('touchstart', tryPlay);
    document.removeEventListener('click', tryPlay);
  };

  if (video.paused) {
    document.addEventListener('touchstart', tryPlay, { once: true, passive: true });
    document.addEventListener('click', tryPlay, { once: true });
  }
}

/* ─────────────────────────────────────────
   SCROLL FADE-IN (IntersectionObserver)
───────────────────────────────────────── */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add staggered delay for siblings
        const siblings = entry.target.parentElement.querySelectorAll('.fade-in-scroll');
        let delay = 0;
        siblings.forEach((el, i) => {
          if (el === entry.target) delay = i * 80;
        });
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────
   BOOKING FORM
───────────────────────────────────────── */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  const success = document.getElementById('booking-success');
  if (!form) return;

  // Set minimum date to today
  const dateInput = document.getElementById('data');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Client-side validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = 'rgba(239, 68, 68, 0.6)';
        setTimeout(() => field.style.borderColor = '', 2000);
      }
    });
    if (!valid) return;

    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Invio in corso...';
    btn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Success
        form.querySelectorAll('input:not([type=hidden]), select').forEach(f => f.value = '');
        if (success) {
          success.classList.remove('hidden');
          success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(() => success.classList.add('hidden'), 7000);
        }
      } else {
        const data = await response.json();
        const msg = data?.errors?.map(e => e.message).join(', ') || 'Errore nell\'invio.';
        alert('Si è verificato un errore: ' + msg + '\nRiprova o contattaci telefonicamente.');
      }
    } catch (err) {
      alert('Connessione non riuscita. Controlla la tua connessione e riprova.');
    } finally {
      btn.textContent = 'Conferma Prenotazione';
      btn.disabled = false;
    }
  });
}

/* ─────────────────────────────────────────
   SMOOTH SCROLL FOR NAV LINKS
───────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────
   ACTIVE NAV LINK HIGHLIGHT
───────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('text-gold');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('text-gold');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ─────────────────────────────────────────
   INIT ALL
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  initNavbar();
  initMobileMenu();
  initHeroVideo();
  initScrollAnimations();
  initBookingForm();
  initSmoothScroll();
  initActiveNav();
  console.log('%c🐬 Ristorante Pizzeria Delfino — Benvenuto!', 'color:#d4af37; font-size:14px; font-weight:bold;');
});
