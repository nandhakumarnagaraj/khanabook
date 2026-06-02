/**
 * KhanaBook POS — Shared Site Logic v3 (Redesigned 3D Edition)
 */

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('khana-theme');
    if (stored) return stored;
  } catch (e) {
    console.warn('localStorage is not accessible:', e);
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');
  if (theme === 'light') {
    html.classList.remove('dark');
    if (icon) icon.textContent = 'dark_mode';
  } else {
    html.classList.add('dark');
    if (icon) icon.textContent = 'light_mode';
  }
  try {
    localStorage.setItem('khana-theme', theme);
  } catch (e) {
    console.warn('localStorage is not accessible:', e);
  }
}

function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

function setActiveNavLink() {
  const path = window.location.pathname;
  let page = path.substring(path.lastIndexOf('/') + 1);
  if (!page || page === 'index.html') {
    page = 'home.html';
  }
  const getFilename = (urlStr) => {
    if (!urlStr) return '';
    const cleanUrl = urlStr.split('#')[0].split('?')[0];
    return cleanUrl.substring(cleanUrl.lastIndexOf('/') + 1);
  };
  const targetPage = getFilename(page) || 'home.html';
  document.querySelectorAll('nav a, #mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = getFilename(href);
    if (linkFile === targetPage) {
      link.classList.add('nav-link-active');
    } else {
      link.classList.remove('nav-link-active');
    }
  });
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  if (!menu) return;
  const isOpen = !menu.classList.contains('hidden');
  if (isOpen) {
    menu.classList.add('hidden');
    if (icon) icon.textContent = 'menu';
    document.getElementById('mobile-menu-btn')?.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.remove('hidden');
    if (icon) icon.textContent = 'close';
    document.getElementById('mobile-menu-btn')?.setAttribute('aria-expanded', 'true');
    menu.querySelector('a')?.focus();
  }
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });
  document.querySelectorAll('[data-reveal]').forEach(el => {
    observer.observe(el);
  });
}

function initCookieConsent() {
  try {
    if (localStorage.getItem('khana-cookie-consent')) return;
  } catch (e) {
    console.warn('localStorage is not accessible:', e);
    return;
  }
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  banner.classList.remove('hidden');
  document.querySelector('.whatsapp-float')?.style.setProperty('bottom', '120px');
  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    try { localStorage.setItem('khana-cookie-consent', 'accepted'); } catch (e) {}
    banner.classList.add('hidden');
    document.querySelector('.whatsapp-float')?.style.setProperty('bottom', '24px');
  });
  document.getElementById('cookie-decline')?.addEventListener('click', () => {
    try { localStorage.setItem('khana-cookie-consent', 'declined'); } catch (e) {}
    banner.classList.add('hidden');
    document.querySelector('.whatsapp-float')?.style.setProperty('bottom', '24px');
  });
}

function initPricingCalculator() {
  const calc = document.getElementById('pricing-calculator');
  if (!calc) return;
  const terminalsSlider = document.getElementById('calc-terminals');
  const locationsSlider = document.getElementById('calc-locations');
  const billingToggle = document.getElementById('calc-billing');
  const totalDisplay = document.getElementById('calc-total');
  const terminalVal = document.getElementById('calc-terminal-val');
  const locationVal = document.getElementById('calc-location-val');
  function updatePricing() {
    const terminals = parseInt(terminalsSlider.value);
    const locations = parseInt(locationsSlider.value);
    const isAnnual = billingToggle.checked;
    const basePrice = 0;
    const paidTerminals = Math.max(0, terminals - 1);
    const paidLocations = Math.max(0, locations - 1);
    const terminalPrice = paidTerminals * 499;
    const locationPrice = paidLocations * 999;
    let total = basePrice + terminalPrice + locationPrice;
    if (isAnnual) total = Math.round(total * 12 * 0.8);
    terminalVal.textContent = terminals;
    locationVal.textContent = locations;
    totalDisplay.textContent = isAnnual ? '₹' + total.toLocaleString('en-IN') + '/yr' : '₹' + total.toLocaleString('en-IN') + '/mo';
  }
  terminalsSlider.addEventListener('input', updatePricing);
  locationsSlider.addEventListener('input', updatePricing);
  billingToggle.addEventListener('change', updatePricing);
  updatePricing();
}

function initTestimonialsCarousel() {
  const track = document.getElementById('testimonials-track');
  if (!track) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentIndex = 0;
  const items = track.querySelectorAll('.testimonial-card');
  if (items.length === 0) return;
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const dots = document.querySelectorAll('.testimonial-dot');
  let interval = null;
  function resetInterval() {
    if (interval) clearInterval(interval);
    if (!prefersReducedMotion) {
      interval = setInterval(() => goTo(currentIndex + 1), 5000);
    }
  }
  function goTo(index) {
    currentIndex = index;
    if (currentIndex < 0) currentIndex = items.length - 1;
    if (currentIndex >= items.length) currentIndex = 0;
    track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    if (!prefersReducedMotion) {
      track.style.transition = 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
      track.style.transition = 'none';
    }
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-primary', i === currentIndex);
      dot.classList.toggle('bg-outline-variant', i !== currentIndex);
    });
  }
  prevBtn?.addEventListener('click', () => { goTo(currentIndex - 1); resetInterval(); });
  nextBtn?.addEventListener('click', () => { goTo(currentIndex + 1); resetInterval(); });
  dots.forEach((dot, i) => { dot.addEventListener('click', () => { goTo(i); resetInterval(); }); });
  let startX = 0;
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const deltaX = e.changedTouches[0].clientX - startX;
    if (deltaX > 50) { goTo(currentIndex - 1); resetInterval(); }
    else if (deltaX < -50) { goTo(currentIndex + 1); resetInterval(); }
  }, { passive: true });
  resetInterval();
  track.addEventListener('mouseenter', () => { if (interval) clearInterval(interval); });
  track.addEventListener('mouseleave', () => { resetInterval(); });
  goTo(0);
}

function setupContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  const btn = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    form.querySelectorAll('.field-error').forEach(el => el.remove());
    form.querySelectorAll('.error-border').forEach(el => el.classList.remove('error-border', 'border-error'));
    let isValid = true;
    const fields = form.querySelectorAll('[required]');
    fields.forEach(field => {
      const value = field.value.trim();
      if (!field.dataset.hasInputHandler) {
        const handler = () => {
          field.classList.remove('error-border', 'border-error');
          const errorMsg = field.parentNode.querySelector('.field-error');
          if (errorMsg) errorMsg.remove();
        };
        field.addEventListener('input', handler);
        field.addEventListener('change', handler);
        field.dataset.hasInputHandler = "true";
      }
      if (!value) { isValid = false; showFieldError(field, 'This field is required'); }
      else if (field.type === 'email' && !/^[^s@]+@[^s@]+.[^s@]+$/.test(value)) { isValid = false; showFieldError(field, 'Please enter a valid email address'); }
      else if (field.id === 'phone' && value && !/^[0-9\s]{10,15}$/.test(value.replace(/\+/g,''))) { isValid = false; showFieldError(field, 'Please enter a valid phone number'); }
    });
    if (!isValid) {
      const firstError = form.querySelector('.error-border');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    btn.disabled = true;
    btn.innerHTML = '<svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
    try {
      const response = await fetch('https://formspree.io/f/mlgvyknl', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        form.reset();
        btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:20px;">check_circle</span><span>Message Sent!</span>';
      } else {
        btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:20px;">error</span><span>Failed to Send</span>';
      }
    } catch (err) {
      btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:20px;">error</span><span>Error Sending</span>';
    } finally {
      btn.disabled = false;
      setTimeout(() => { btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:20px;">send</span><span>Send Message</span>'; }, 4000);
    }
  });
}

function showFieldError(field, message) {
  field.classList.add('error-border', 'border-error');
  const error = document.createElement('p');
  error.className = 'field-error text-error text-label-sm mt-1 flex items-center gap-1';
  error.innerHTML = '<span class="material-symbols-outlined text-xs">error</span> ' + message;
  field.parentNode.appendChild(error);
}

function initBlogSearch() {
  const searchInput = document.getElementById('blog-search');
  const cards = document.querySelectorAll('.blog-card');
  if (!searchInput || cards.length === 0) return;
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
      const desc = card.querySelector('p')?.textContent?.toLowerCase() || '';
      card.style.display = (title.includes(query) || desc.includes(query)) ? '' : 'none';
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

function initBillingToggle() {
  const toggle = document.getElementById('billing-toggle');
  if (!toggle) return;
  const thumb = document.getElementById('toggle-thumb');
  const prices = document.querySelectorAll('.plan-price');
  const periods = document.querySelectorAll('.plan-period');
  toggle.addEventListener('click', () => {
    const isAnnual = toggle.getAttribute('aria-checked') === 'true';
    const nextState = !isAnnual;
    toggle.setAttribute('aria-checked', nextState ? 'true' : 'false');
    if (nextState) {
      thumb.classList.remove('left-1');
      thumb.classList.add('right-1', 'translate-x-6');
      toggle.classList.remove('bg-outline-variant');
      toggle.classList.add('bg-primary');
    } else {
      thumb.classList.remove('right-1', 'translate-x-6');
      thumb.classList.add('left-1');
      toggle.classList.remove('bg-primary');
      toggle.classList.add('bg-outline-variant');
    }
    prices.forEach(priceEl => {
      const monthly = priceEl.getAttribute('data-monthly');
      const annual = priceEl.getAttribute('data-annual');
      if (monthly && annual) {
        priceEl.textContent = '₹' + (nextState ? parseInt(annual).toLocaleString('en-IN') : parseInt(monthly).toLocaleString('en-IN'));
      }
    });
    periods.forEach(periodEl => {
      const annualText = periodEl.getAttribute('data-annual-text');
      if (annualText) periodEl.textContent = nextState ? annualText : '/mo';
    });
  });
}

applyTheme(getInitialTheme());

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.copyright-year').forEach(el => { el.textContent = new Date().getFullYear(); });
  
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = document.getElementById('mobile-menu-icon');
        if (icon) icon.textContent = 'menu';
      });
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const menu = document.getElementById('mobile-menu');
      const icon = document.getElementById('mobile-menu-icon');
      if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        if (icon) icon.textContent = 'menu';
        document.getElementById('mobile-menu-btn')?.focus();
      }
    }
  });
  const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = currentTheme === 'light' ? 'dark_mode' : 'light_mode';
  
  setActiveNavLink();
  initScrollReveal();
  initCookieConsent();
  initPricingCalculator();
  initTestimonialsCarousel();
  setupContactForm('contact-form');
  initBlogSearch();
  initSmoothScroll();
  initBillingToggle();
});


/* ==========================================================================
   Page-Specific Script for home
   ========================================================================== */



// KhanaBook POS — Home Page Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Atmospheric mouse glow effect
  document.addEventListener('mousemove', (e) => {
    const gradient = document.querySelector('.hero-gradient');
    if (gradient) {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      gradient.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(124, 58, 237, 0.15) 0%, transparent 70%)`;
    }
  });

  // Modal handlers
  const demoModal = document.getElementById('demo-modal');
  const leadModal = document.getElementById('lead-modal');

  window.closeDemoModal = function() {
    if (demoModal) demoModal.classList.add('hidden');
  };

  window.closeLead = function() {
    if (leadModal) {
      leadModal.classList.add('hidden');
      try { sessionStorage.setItem('lead-dismissed', '1'); } catch(e) {}
    }
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      window.closeDemoModal();
      window.closeLead();
    }
  });

  let leadShown = false;
  window.addEventListener('scroll', () => {
    if (leadShown) return;
    try { if (sessionStorage.getItem('lead-dismissed')) return; } catch(e) {}
    const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    if (scrollPct > 0.70) {
      leadShown = true;
      if (leadModal) leadModal.classList.remove('hidden');
    }
  }, { passive: true });
});


/* ─── 3D Visual Redesign: Mouse Tilting Card Interaction ─── */
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.glass-card, .glass-panel, .blog-card, .card-3d');
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Compute degrees of rotation based on bounds (max 10 degrees)
      const rx = -(y / (rect.height / 2)) * 10;
      const ry = (x / (rect.width / 2)) * 10;
      
      card.style.setProperty('--rx', rx + 'deg');
      card.style.setProperty('--ry', ry + 'deg');
    });

    card.addEventListener('mouseleave', () => {
      // Snaps back smoothly to 0 degrees
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });

  // Ambient mouse parallax for floating background components (data-depth)
  document.addEventListener('mousemove', e => {
    const layers = document.querySelectorAll('[data-depth]');
    const xOffset = (window.innerWidth / 2 - e.clientX) / 45;
    const yOffset = (window.innerHeight / 2 - e.clientY) / 45;

    layers.forEach(layer => {
      const depth = parseFloat(layer.getAttribute('data-depth')) || 1;
      const x = xOffset * depth;
      const y = yOffset * depth;
      layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  });
});
