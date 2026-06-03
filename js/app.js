/**
 * KhanaBook POS — SPA Routing Engine & Shared Site Orchestrator
 */

import * as Home from './pages/home.js';
import * as Features from './pages/features.js';
import * as PricingPlans from './pages/pricing-plans.js';
import * as AndroidPos from './pages/android-pos.js';
import * as Blog from './pages/blog.js';
import * as GetStarted from './pages/get-started.js';
import * as HelpCenter from './pages/help-center.js';
import * as OurStory from './pages/our-story.js';
import * as LegalPrivacy from './pages/legal-privacy.js';

// Route Mapping
const routes = {
  home: Home,
  features: Features,
  'pricing-plans': PricingPlans,
  'android-pos': AndroidPos,
  blog: Blog,
  'get-started': GetStarted,
  'help-center': HelpCenter,
  'our-story': OurStory,
  'legal-privacy': LegalPrivacy
};

// SEO Metadata Mapping
const routeMetadata = {
  home: {
    title: 'KhanaBook | Android POS for Indian Restaurants',
    description: 'KhanaBook POS for Indian restaurants. Start with the first year free and get offline-first billing, AI menu import, UPI payments, GST tools, and reports.'
  },
  features: {
    title: 'Features | KhanaBook POS',
    description: 'Explore KhanaBook POS features: AI menu OCR scanner, 5-step billing flow, bluetooth printing, GST/FSSAI compliance auto-lookup, and offline room sync.'
  },
  'pricing-plans': {
    title: 'Pricing & Plans | KhanaBook',
    description: 'Simple, transparent pricing. KhanaBook POS is free for the first year. Calculate custom terminal and location pricing with our interactive estimator.'
  },
  'android-pos': {
    title: 'Android POS Systems | KhanaBook',
    description: 'Sleek, high-performance hardware options for your restaurant. Fully integrated with KhanaBook OS and local printers.'
  },
  blog: {
    title: 'Blog & Restaurant Insights | KhanaBook',
    description: 'Read the latest trends, tips, and articles about managing and scaling restaurants in India.'
  },
  'get-started': {
    title: 'Get Started | KhanaBook POS',
    description: 'Claim your first year free. Fill out our contact form and our onboarding team will get in touch.'
  },
  'help-center': {
    title: 'Help Center | KhanaBook Support',
    description: 'Find answers, setup guides, and video tutorials for using KhanaBook POS in your restaurant.'
  },
  'our-story': {
    title: 'About Us | KhanaBook',
    description: 'The story behind KhanaBook POS and the first year free launch offer helping Indian restaurants adopt modern billing, payments, and reports.'
  },
  'legal-privacy': {
    title: 'Legal & Privacy - KhanaBook',
    description: 'KhanaBook Privacy Policy and Legal Documentation. Learn how we collect, use, and protect restaurant data. GDPR, CCPA, and PCI-DSS Level 1 compliant.'
  }
};

let currentRouteKey = null;
let exitIntentHandler = null;

// Global Shared State passed to page components
const globalState = {
  triggerExitIntent: () => {
    setupExitIntent();
  }
};

// --- Theme Management ---
function getInitialTheme() {
  try {
    const stored = localStorage.getItem('khana-theme');
    if (stored) return stored;
  } catch (e) {
    console.warn('localStorage is not accessible:', e);
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');
  const btn = document.getElementById('theme-toggle-btn');
  if (theme === 'light') {
    html.classList.remove('dark');
    if (icon) icon.textContent = 'dark_mode';
    if (btn) btn.setAttribute('aria-pressed', 'false');
  } else {
    html.classList.add('dark');
    if (icon) icon.textContent = 'light_mode';
    if (btn) btn.setAttribute('aria-pressed', 'true');
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

// --- Navigation Link Highlighting ---
function setActiveNavLink(routeKey) {
  document.querySelectorAll('nav .nav-link[data-link], #mobile-drawer .nav-link[data-link]').forEach(el => {
    const linkRoute = el.getAttribute('data-link');
    if (linkRoute === routeKey) {
      el.classList.add('nav-link-active');
    } else {
      el.classList.remove('nav-link-active');
    }
  });
}

// --- Cookie Consent Banner ---
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

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    try { localStorage.setItem('khana-cookie-consent', 'accepted'); } catch (e) {}
    banner.classList.add('hidden');
  });
  document.getElementById('cookie-decline')?.addEventListener('click', () => {
    try { localStorage.setItem('khana-cookie-consent', 'declined'); } catch (e) {}
    banner.classList.add('hidden');
  });
}

// --- Mobile Navigation Drawer Controller ---
function initMobileDrawer() {
  const trigger = document.getElementById('hamburger-trigger');
  const drawer = document.getElementById('mobile-drawer');
  const menuIcon = document.getElementById('mobile-menu-icon');

  if (trigger && drawer) {
    const focusables = drawer.querySelectorAll('button, a[href]');
    const firstEl = focusables[0];
    const lastEl = focusables[focusables.length - 1];

    function toggleDrawer(open) {
      trigger.setAttribute('aria-expanded', open.toString());
      if (open) {
        drawer.classList.remove('hidden');
        drawer.setAttribute('data-open', 'true');
        drawer.setAttribute('aria-hidden', 'false');
        drawer.removeAttribute('inert');
        document.body.style.setProperty('overflow', 'hidden');
        if (menuIcon) menuIcon.textContent = 'close';
        if (firstEl) firstEl.focus();
      } else {
        drawer.setAttribute('data-open', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        drawer.setAttribute('inert', '');
        document.body.style.removeProperty('overflow');
        if (menuIcon) menuIcon.textContent = 'menu';
        // Delay hidden to allow transition completion
        setTimeout(() => {
          if (drawer.getAttribute('data-open') === 'false') {
            drawer.classList.add('hidden');
          }
        }, 200);
        trigger.focus();
      }
    }

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = drawer.getAttribute('data-open') === 'true';
      toggleDrawer(!isOpen);
    });

    drawer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleDrawer(false);
      }
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    });

    drawer.querySelectorAll('button, a').forEach(el => {
      el.addEventListener('click', () => {
        toggleDrawer(false);
      });
    });
  }
}

// --- Scroll-to-top button ---
function initScrollToTop() {
  const scrollBtn = document.getElementById('scroll-to-top');
  if (scrollBtn) {
    let scrollTicker = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicker) {
        scrollTicker = true;
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
          scrollBtn.classList.toggle('visible', scrollTop > 300);
          scrollTicker = false;
        });
      }
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// --- Exit Intent Modal Setup ---
function setupExitIntent() {
  if (exitIntentHandler) return; // avoid double registry
  
  if (localStorage.getItem('khana-waitlist-joined') || localStorage.getItem('khana-lead-dismissed')) {
    return;
  }

  exitIntentHandler = e => {
    if (e.clientY < 20) {
      const modal = document.getElementById('lead-modal');
      if (modal && modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.removeAttribute('inert');
        modal.setAttribute('aria-hidden', 'false');
        document.getElementById('lead-phone')?.focus();
        
        // Remove document mouseleave handler once shown
        document.removeEventListener('mouseleave', exitIntentHandler);
        exitIntentHandler = null;
      }
    }
  };

  document.addEventListener('mouseleave', exitIntentHandler);
}

function initLeadModal() {
  const modal = document.getElementById('lead-modal');
  const closeBtn = document.getElementById('lead-close-btn');
  const submitBtn = document.getElementById('lead-submit-btn');
  const phoneInput = document.getElementById('lead-phone');

  if (!modal || !submitBtn || !phoneInput) return;

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.setAttribute('inert', '');
    modal.setAttribute('aria-hidden', 'true');
    localStorage.setItem('khana-lead-dismissed', 'true');
  };

  closeBtn?.addEventListener('click', closeModal);

  submitBtn.addEventListener('click', async () => {
    const phone = phoneInput.value.trim();
    if (!phone || !/^[0-9\s]{10,15}$/.test(phone.replace(/\+/g, ''))) {
      alert('Please enter a valid phone number');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Joining...';

    try {
      const response = await fetch('https://formspree.io/f/mlgvyknl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ phone: phone })
      });

      if (response.ok) {
        submitBtn.textContent = 'Success!';
        localStorage.setItem('khana-waitlist-joined', 'true');
        setTimeout(closeModal, 1500);
      } else {
        submitBtn.textContent = 'Error';
        setTimeout(() => { submitBtn.textContent = 'Join Waitlist →'; submitBtn.disabled = false; }, 2000);
      }
    } catch (err) {
      submitBtn.textContent = 'Error';
      setTimeout(() => { submitBtn.textContent = 'Join Waitlist →'; submitBtn.disabled = false; }, 2000);
    }
  });

  // Esc key closure + Focus trap
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
    if (e.key === 'Tab' && !modal.classList.contains('hidden')) {
      const focusables = Array.from(modal.querySelectorAll('button, input'));
      if (focusables.length < 2) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  });
}

// --- Navigation / Routing Lifecycle Engine ---
function navigateTo(routeKey, sectionId = '') {
  // Graceful fallback to home
  if (!routes[routeKey]) {
    routeKey = 'home';
  }

  // Destroy previous route if registered
  if (currentRouteKey && routes[currentRouteKey] && typeof routes[currentRouteKey].destroy === 'function') {
    try {
      routes[currentRouteKey].destroy();
    } catch (err) {
      console.error(`Error destroying route "${currentRouteKey}":`, err);
    }
  }

  currentRouteKey = routeKey;

  // Render Layout HTML
  const contentArea = document.getElementById('app-content');
  if (contentArea) {
    contentArea.innerHTML = routes[routeKey].html;
  }

  // Update SEO Title & Meta Description
  const meta = routeMetadata[routeKey] || routeMetadata.home;
  document.title = meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', meta.description);
  }

  // Highlight Nav Links
  setActiveNavLink(routeKey);

  // Initialize Page Module
  if (routes[routeKey] && typeof routes[routeKey].init === 'function') {
    try {
      routes[routeKey].init(globalState);
    } catch (err) {
      console.error(`Error initializing route "${routeKey}":`, err);
    }
  }

  // Scroll Handling
  if (sectionId) {
    setTimeout(() => {
      const targetEl = document.getElementById(sectionId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

// --- Parse Hash State ---
function parseLocation() {
  const hash = window.location.hash || '#/';
  const parts = hash.split('#');
  
  // parts[0] is empty or has preceding parts
  // parts[1] is the main path, e.g. "/our-story" or "/features"
  // parts[2] is the internal section ID if any, e.g. "values"
  const pathPart = parts[1] || '/';
  const sectionId = parts[2] || '';

  const routeKey = pathPart.replace(/^\//, '').split('?')[0] || 'home';
  return { routeKey, sectionId };
}

function handleHashChange() {
  const { routeKey, sectionId } = parseLocation();
  navigateTo(routeKey, sectionId);
}

// --- Global Click Interception ---
function initGlobalClickInterception() {
  document.addEventListener('click', e => {
    const linkBtn = e.target.closest('[data-link]');
    if (linkBtn) {
      e.preventDefault();
      const route = linkBtn.getAttribute('data-link');
      const section = linkBtn.getAttribute('data-hash') || '';
      
      // Update hash structure to trigger hashchange listener
      window.location.hash = section ? `#/${route}#${section}` : `#/${route}`;
    }
  });
}

// --- App Bootstrap ---
document.addEventListener('DOMContentLoaded', () => {
  // Sync initial theme
  applyTheme(getInitialTheme());
  
  // Theme toggle listener
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);

  // Sync copyright year
  document.querySelectorAll('.copyright-year').forEach(el => {
    el.textContent = new Date().getFullYear().toString();
  });

  // Setup Global handlers
  initCookieConsent();
  initMobileDrawer();
  initScrollToTop();
  initLeadModal();
  initGlobalClickInterception();

  // Listen to router hash changes
  window.addEventListener('hashchange', handleHashChange);

  // Trigger initial routing
  handleHashChange();
});
