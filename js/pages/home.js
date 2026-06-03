/**
 * Home Page Layout Module
 */

export const html = `
  <!-- Hero Section -->
  <section class="home-hero max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative pt-24 pb-20">
    <div class="hero-gradient absolute inset-0 -z-10" style="--gx: 50%; --gy: 50%;"></div>
    <div class="space-y-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary/20 text-primary-fixed-dim text-label-sm font-label-sm">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        Now with AI Menu Import
      </div>
      <h1 class="text-headline-xl font-headline-xl text-on-surface tracking-tight leading-tight">
        Precision POS for the <span class="text-primary">Modern Era.</span>
      </h1>
      <p class="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
        From 5-step billing to AI-powered menu imports, manage your restaurant with the world's most intuitive Android POS.
      </p>
      <div class="flex flex-wrap gap-4 pt-2">
        <button data-link="get-started" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:brightness-105 active:scale-95 transition-all violet-glow border-none cursor-pointer">
          Start First Year Free
        </button>
        <button id="watch-demo-btn" class="border border-outline-variant bg-surface-container/50 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-surface-variant transition-all backdrop-blur-md cursor-pointer">
          <span class="material-symbols-outlined text-lg" aria-hidden="true">play_circle</span>
          Watch Demo Video
        </button>
      </div>
      <div class="text-label-sm font-label-sm text-on-surface-variant/80 flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 opacity-90">
        <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px] text-primary" aria-hidden="true">verified</span> ₹0 for 12 months</span>
        <span class="text-outline-variant/50" aria-hidden="true">•</span>
        <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px] text-primary" aria-hidden="true">credit_card_off</span> No card required</span>
        <span class="text-outline-variant/50" aria-hidden="true">•</span>
        <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px] text-primary" aria-hidden="true">cancel</span> Cancel anytime</span>
      </div>
      <div class="grid grid-cols-2 gap-8 ">
        <div>
          <div class="text-headline-md font-headline-md text-on-surface">5-sec</div>
          <div class="text-label-sm font-label-sm text-slate-gray">Average Billing Time</div>
        </div>
        <div>
          <div class="text-headline-md font-headline-md text-on-surface">100%</div>
          <div class="text-label-sm font-label-sm text-slate-gray">Offline Capable</div>
        </div>
      </div>
    </div>
    <!-- Hero Visual -->
    <div class="relative animate-float">
      <div class="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full"></div>
      <div class="home-hero-visual glass-card p-4 rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/5">
        <img class="home-hero-image rounded-[1.5rem] object-cover mx-auto block" alt="KhanaBook Android POS interface" src="assets/pos_phone_billing_mockup.png" loading="lazy" decoding="async">
      </div>
    </div>
  </section>

  <!-- Features Bento Grid -->
  <section data-reveal class="max-w-7xl mx-auto px-margin-desktop mt-40">
    <div class="text-center mb-16 space-y-4">
      <h2 class="text-headline-lg font-headline-lg text-on-surface">Engineered for Hospitality Excellence</h2>
      <p class="text-body-md font-body-md text-slate-gray">Comprehensive tools built for speed, reliability, and precision.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Large Card -->
      <div class="md:col-span-2 glass-card glass-interactive p-8 rounded-3xl relative overflow-hidden group">
        <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <span class="material-symbols-outlined text-[120px]">sync_saved_locally</span>
        </div>
        <div class="relative z-10">
          <span class="material-symbols-outlined text-primary mb-4 text-[40px]">wifi_off</span>
          <h3 class="text-headline-md font-headline-md mb-4">Offline-First Sync</h3>
          <p class="text-body-md font-body-md text-on-surface-variant max-w-md">Never lose a sale. KhanaBook works flawlessly without internet, syncing data the moment you're back online. Reliable performance in every corner of your restaurant.</p>
        </div>
      </div>
      <!-- Small Card -->
      <div class="glass-card glass-interactive p-8 rounded-3xl hover:bg-surface-variant/50 transition-all cursor-default group">
        <span class="material-symbols-outlined text-primary mb-4 text-[40px] group-hover:scale-110 transition-transform">call_split</span>
        <h3 class="text-headline-md font-headline-md mb-4">Split Payments</h3>
        <p class="text-body-sm font-body-sm text-on-surface-variant">Intelligent bill splitting by item, person, or equal portions. Simplify complex group billing with a single tap.</p>
      </div>
      <!-- Small Card -->
      <div class="glass-card glass-interactive p-8 rounded-3xl hover:bg-surface-variant/50 transition-all cursor-default group">
        <span class="material-symbols-outlined text-primary mb-4 text-[40px] group-hover:scale-110 transition-transform">qr_code_2</span>
        <h3 class="text-headline-md font-headline-md mb-4">Dynamic UPI QR</h3>
        <p class="text-body-sm font-body-sm text-on-surface-variant">Generate bill-specific QR codes instantly for touchless, error-free digital payments at the table.</p>
      </div>
      <!-- Large Card (GST & FSSAI Compliance) -->
      <div class="md:col-span-2 glass-card glass-interactive p-8 rounded-3xl relative overflow-hidden group flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div class="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
          <span class="material-symbols-outlined text-[120px]">verified_user</span>
        </div>
        <div class="relative z-10 max-w-md">
          <span class="material-symbols-outlined text-tertiary mb-4 text-[40px]">gavel</span>
          <h3 class="text-headline-md font-headline-md mb-4">GST &amp; FSSAI Compliance</h3>
          <p class="text-body-md font-body-md text-on-surface-variant">Stay ahead of regulations with automated GST invoicing and mandatory FSSAI display integration. Built for the Indian hospitality regulatory landscape.</p>
        </div>
        <div class="relative shrink-0 flex flex-col gap-3 w-full md:w-auto mt-4 md:mt-0 z-10">
          <div class="flex items-center gap-3 bg-surface/50 border border-outline-variant/30 p-3 rounded-2xl shadow-sm backdrop-blur-sm">
            <span class="material-symbols-outlined text-[#10B981]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
            <div>
              <div class="text-[10px] uppercase tracking-wider text-on-surface-variant/80 font-bold">GSTIN Invoicing</div>
              <div class="text-body-sm font-semibold text-on-surface">Active • 22AAAAA0000A1Z5</div>
            </div>
          </div>
          <div class="flex items-center gap-3 bg-surface/50 border border-outline-variant/30 p-3 rounded-2xl shadow-sm backdrop-blur-sm">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">verified</span>
            <div>
              <div class="text-[10px] uppercase tracking-wider text-on-surface-variant/80 font-bold">FSSAI License</div>
              <div class="text-body-sm font-semibold text-on-surface">Verified • 10024011000124</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why KhanaBook — Teaser Section -->
  <section data-reveal class="max-w-7xl mx-auto px-margin-desktop mt-40" id="why-khanabook">
    <div class="text-center mb-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
        <span class="material-symbols-outlined text-sm">emoji_events</span>
        WHY KHANABOOK
      </div>
      <h2 class="text-headline-lg font-headline-lg text-on-surface mb-4 leading-tight">
        Built different.<br>Priced <span class="text-primary">fairly</span>.
      </h2>
      <p class="text-body-md font-body-md text-on-surface-variant max-w-xl mx-auto">
        Features you won't find in Petpooja or Limetray — at any price tier.
      </p>
    </div>

    <!-- Key differentiator pills -->
    <div class="flex flex-wrap justify-center gap-3 mb-10">
      <div class="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-outline-variant/30">
        <span class="material-symbols-outlined text-tertiary" style="font-size:18px;">wifi_off</span>
        <span class="text-label-md font-label-md text-on-surface">True Offline-First</span>
      </div>
      <div class="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-outline-variant/30">
        <span class="material-symbols-outlined text-tertiary" style="font-size:18px;">document_scanner</span>
        <span class="text-label-md font-label-md text-on-surface">AI OCR Menu Import</span>
      </div>
      <div class="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-outline-variant/30">
        <span class="material-symbols-outlined text-tertiary" style="font-size:18px;">account_balance</span>
        <span class="text-label-md font-label-md text-on-surface">Direct Settlements</span>
      </div>
      <div class="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-outline-variant/30">
        <span class="material-symbols-outlined text-tertiary" style="font-size:18px;">call_split</span>
        <span class="text-label-md font-label-md text-on-surface">Split Payments</span>
      </div>
      <div class="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-outline-variant/30">
        <span class="material-symbols-outlined text-tertiary" style="font-size:18px;">lock</span>
        <span class="text-label-md font-label-md text-on-surface">AES-256 Encryption</span>
      </div>
    </div>

    <!-- Comparison Table -->
    <div class="compare-table-wrapper overflow-x-auto rounded-3xl border border-outline-variant/30 glass-card mt-8">
      <table class="w-full text-left border-collapse min-w-[700px]">
        <thead>
          <tr class="border-b border-outline-variant/30 bg-surface-container/50">
            <th class="p-5 font-headline-md text-on-surface">Feature</th>
            <th class="p-5 font-headline-md text-primary font-bold">KhanaBook POS</th>
            <th class="p-5 font-headline-md text-on-surface-variant/80">PetPooja</th>
            <th class="p-5 font-headline-md text-on-surface-variant/80">Posist</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-outline-variant/20 text-body-md">
          <tr>
            <td class="p-5 font-semibold text-on-surface">Pricing</td>
            <td class="p-5 text-primary font-bold">₹0 First Year (Free)</td>
            <td class="p-5 text-on-surface-variant">₹15,000+ / year</td>
            <td class="p-5 text-on-surface-variant">₹25,000+ / year</td>
          </tr>
          <tr>
            <td class="p-5 font-semibold text-on-surface">Offline Capabilities</td>
            <td class="p-5 text-on-surface">100% full local billing & database sync</td>
            <td class="p-5 text-on-surface-variant">Partial sync (janky)</td>
            <td class="p-5 text-on-surface-variant">Requires active cloud connection</td>
          </tr>
          <tr>
            <td class="p-5 font-semibold text-on-surface">Menu Setup</td>
            <td class="p-5 text-on-surface">AI menu OCR import (5 seconds)</td>
            <td class="p-5 text-on-surface-variant">Manual data entry (days)</td>
            <td class="p-5 text-on-surface-variant">Paid onboarding setup (weeks)</td>
          </tr>
          <tr>
            <td class="p-5 font-semibold text-on-surface">Dynamic UPI & Splits</td>
            <td class="p-5 text-on-surface">Built-in (instant QR & split billing)</td>
            <td class="p-5 text-on-surface-variant">Requires external payment fees</td>
            <td class="p-5 text-on-surface-variant">Paid addon custom modules</td>
          </tr>
          <tr>
            <td class="p-5 font-semibold text-on-surface">Compliance Checks</td>
            <td class="p-5 text-on-surface">Auto-validated GST & FSSAI lookup</td>
            <td class="p-5 text-on-surface-variant">Manual entry verification only</td>
            <td class="p-5 text-on-surface-variant">Manual entry verification only</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Testimonials Carousel -->
  <section data-reveal class="max-w-7xl mx-auto px-margin-desktop mt-40">
    <div class="text-center mb-16 space-y-4">
      <h2 class="text-headline-lg font-headline-lg text-on-surface">Trusted by Restaurant Owners</h2>
      <p class="text-body-md font-body-md text-slate-gray">Hear from the businesses that run on KhanaBook every day.</p>
    </div>

    <div class="testimonials-carousel" role="region" aria-roledescription="carousel" aria-label="Customer Testimonials">
      <div id="carousel-live" class="sr-only" aria-live="polite">Testimonial 1 of 3</div>
      <div class="testimonials-clip">
        <div id="testimonials-track" class="testimonials-track transition-transform duration-500 ease-out">
          <!-- Testimonial 1 -->
          <div class="testimonial-card">
            <div class="tcard">
              <span class="tcard-quote" aria-hidden="true">"</span>
              <div class="tcard-author">
                <div class="tcard-avatar">AK</div>
                <div>
                  <p class="tcard-name">Arjun Krishnamurthy</p>
                  <p class="tcard-location">Chennai, Tamil Nadu</p>
                </div>
              </div>
              <div class="tcard-stars" role="img" aria-label="Rated 5 out of 5">
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
              </div>
              <blockquote class="tcard-body">
                KhanaBook completely transformed how we manage our restaurant. The offline-first billing is a lifesaver during network outages, and the AI menu import saved us days of manual data entry. Customer split payments are incredibly smooth.
              </blockquote>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="testimonial-card">
            <div class="tcard">
              <span class="tcard-quote" aria-hidden="true">"</span>
              <div class="tcard-author">
                <div class="tcard-avatar">SP</div>
                <div>
                  <p class="tcard-name">Senthil Pandian</p>
                  <p class="tcard-location">Madurai, Tamil Nadu</p>
                </div>
              </div>
              <div class="tcard-stars" role="img" aria-label="Rated 5 out of 5">
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
              </div>
              <blockquote class="tcard-body">
                We run 3 outlets and KhanaBook's multi-location sync is flawless. The dual printer setup means our kitchen gets tickets instantly while customers get their receipts. It's cut our billing time in half.
              </blockquote>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="testimonial-card">
            <div class="tcard">
              <span class="tcard-quote" aria-hidden="true">"</span>
              <div class="tcard-author">
                <div class="tcard-avatar">RN</div>
                <div>
                  <p class="tcard-name">Rakesh Nair</p>
                  <p class="tcard-location">Bengaluru, Karnataka</p>
                </div>
              </div>
              <div class="tcard-stars" role="img" aria-label="Rated 5 out of 5">
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
                <span class="material-symbols-outlined icon-star">star</span>
              </div>
              <blockquote class="tcard-body">
                The GST compliance features alone saved us from a major penalty. The FSSAI auto-lookup and automated GST invoicing make tax season stress-free. Plus the WhatsApp invoice sharing is a hit with our customers.
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="testimonials-controls">
        <button id="testimonial-prev" class="tcarousel-btn" aria-label="Previous testimonial">
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <div class="tcarousel-dots">
          <button class="testimonial-dot active" aria-label="Go to testimonial 1" aria-current="true"></button>
          <button class="testimonial-dot" aria-label="Go to testimonial 2" aria-current="false"></button>
          <button class="testimonial-dot" aria-label="Go to testimonial 3" aria-current="false"></button>
        </div>
        <button id="testimonial-next" class="tcarousel-btn" aria-label="Next testimonial">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section data-reveal class="max-w-7xl mx-auto px-margin-desktop mt-40">
    <div class="bg-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      <h2 class="text-headline-xl font-headline-xl text-on-primary-container mb-6">Ready to upgrade your restaurant experience?</h2>
      <p class="text-body-lg font-body-lg text-on-primary-container/80 mb-10 max-w-2xl mx-auto">Join early restaurant teams using KhanaBook to make billing, payments, and daily operations simpler.</p>
      <button data-link="get-started" class="inline-block bg-surface-dim text-primary px-10 py-5 rounded-2xl font-headline-md text-headline-md hover:scale-105 transition-all shadow-2xl border-none cursor-pointer">
        Start First Year Free
      </button>
    </div>
  </section>

  <!-- Demo Modal -->
  <div id="demo-modal" class="hidden fixed inset-0 z-[300] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" inert aria-hidden="true">
    <div class="glass-card rounded-3xl p-6 max-w-3xl w-full relative">
      <button id="demo-close-btn" class="absolute top-4 right-4 w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary transition-colors cursor-pointer" aria-label="Close demo modal">
        <span class="material-symbols-outlined text-on-surface-variant">close</span>
      </button>
      <div class="aspect-video bg-surface-container rounded-2xl flex items-center justify-center">
        <div class="text-center space-y-4">
          <span class="material-symbols-outlined text-primary text-[64px]" style="font-variation-settings:'FILL' 1" aria-hidden="true">play_circle</span>
          <p class="text-body-md text-on-surface-variant">Demo video coming soon.</p>
        </div>
      </div>
    </div>
  </div>
`;

let carouselInterval = null;
let homeCleanups = [];

export function init(globalState) {
  // Reset cleanups
  homeCleanups = [];

  // --- Hero Mouse Parallax Move ---
  const heroGradient = document.querySelector('.hero-gradient');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (heroGradient && !prefersReducedMotion) {
    let rafHero = false;
    const gradientHandler = e => {
      if (rafHero) return;
      rafHero = true;
      requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        heroGradient.style.setProperty('--gx', x + '%');
        heroGradient.style.setProperty('--gy', y + '%');
        rafHero = false;
      });
    };
    document.addEventListener('mousemove', gradientHandler);
    homeCleanups.push(() => document.removeEventListener('mousemove', gradientHandler));
  }

  // --- Testimonials Carousel ---
  const track = document.getElementById('testimonials-track');
  if (track) {
    let currentIndex = 0;
    const items = track.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dot');
    const carousel = track.closest('.testimonials-carousel');

    // Force horizontal layout alignment dynamically to prevent wrap/stacking bugs
    track.style.display = 'flex';
    track.style.flexDirection = 'row';
    track.style.flexWrap = 'nowrap';
    track.style.width = `${items.length * 100}%`;
    items.forEach(item => {
      item.style.width = `${100 / items.length}%`;
      item.style.flex = `0 0 ${100 / items.length}%`;
      item.style.maxWidth = `${100 / items.length}%`;
    });

    const goTo = index => {
      if (index < 0) index = items.length - 1;
      if (index >= items.length) index = 0;
      currentIndex = index;
      track.style.transition = prefersReducedMotion ? 'none' : 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)';
      track.style.transform = `translateX(-${currentIndex * (100 / items.length)}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
        dot.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
      });
      const live = document.getElementById('carousel-live');
      if (live) live.textContent = `Testimonial ${currentIndex + 1} of ${items.length}`;
    };

    const startCarousel = () => {
      if (prefersReducedMotion) return;
      carouselInterval = setInterval(() => goTo(currentIndex + 1), 6000);
    };

    const stopCarousel = () => {
      if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
      }
    };

    const resetCarousel = () => {
      stopCarousel();
      startCarousel();
    };

    // Attach controls listeners
    if (prevBtn) {
      const prevHandler = () => { goTo(currentIndex - 1); resetCarousel(); };
      prevBtn.addEventListener('click', prevHandler);
      homeCleanups.push(() => prevBtn.removeEventListener('click', prevHandler));
    }
    if (nextBtn) {
      const nextHandler = () => { goTo(currentIndex + 1); resetCarousel(); };
      nextBtn.addEventListener('click', nextHandler);
      homeCleanups.push(() => nextBtn.removeEventListener('click', nextHandler));
    }
    dots.forEach((dot, i) => {
      const dotHandler = () => { goTo(i); resetCarousel(); };
      dot.addEventListener('click', dotHandler);
      homeCleanups.push(() => dot.removeEventListener('click', dotHandler));
    });

    if (carousel) {
      carousel.addEventListener('mouseenter', stopCarousel);
      carousel.addEventListener('mouseleave', startCarousel);
      carousel.addEventListener('focusin', stopCarousel);
      carousel.addEventListener('focusout', startCarousel);
      homeCleanups.push(() => {
        carousel.removeEventListener('mouseenter', stopCarousel);
        carousel.removeEventListener('mouseleave', startCarousel);
        carousel.removeEventListener('focusin', stopCarousel);
        carousel.removeEventListener('focusout', startCarousel);
      });
    }

    // Touch Swipe Support
    let startX = 0;
    const touchStartHandler = e => { startX = e.touches[0].clientX; };
    const touchEndHandler = e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) { goTo(currentIndex - 1); resetCarousel(); }
      else if (dx < -50) { goTo(currentIndex + 1); resetCarousel(); }
    };
    track.addEventListener('touchstart', touchStartHandler, { passive: true });
    track.addEventListener('touchend', touchEndHandler, { passive: true });
    homeCleanups.push(() => {
      track.removeEventListener('touchstart', touchStartHandler);
      track.removeEventListener('touchend', touchEndHandler);
    });

    goTo(0);
    startCarousel();
  }

  // --- Watch Demo Video Modal ---
  const demoModal = document.getElementById('demo-modal');
  const demoBtn = document.getElementById('watch-demo-btn');
  const demoCloseBtn = document.getElementById('demo-close-btn');
  let demoOpener = null;

  const openDemo = () => {
    if (demoModal) {
      demoOpener = demoBtn;
      demoModal.classList.remove('hidden');
      demoModal.removeAttribute('inert');
      demoModal.setAttribute('aria-hidden', 'false');
      demoCloseBtn?.focus();
    }
  };

  const closeDemo = () => {
    if (demoModal) {
      demoModal.classList.add('hidden');
      demoModal.setAttribute('inert', '');
      demoModal.setAttribute('aria-hidden', 'true');
      demoOpener?.focus();
    }
  };

  if (demoBtn && demoModal) {
    demoBtn.addEventListener('click', openDemo);
    homeCleanups.push(() => demoBtn.removeEventListener('click', openDemo));
  }
  if (demoCloseBtn && demoModal) {
    demoCloseBtn.addEventListener('click', closeDemo);
    homeCleanups.push(() => demoCloseBtn.removeEventListener('click', closeDemo));
  }

  // Focus trap for demo modal
  const demoTrap = e => {
    if (e.key === 'Escape') { closeDemo(); }
    if (e.key === 'Tab' && demoModal && !demoModal.classList.contains('hidden')) {
      const focusables = Array.from(demoModal.querySelectorAll('a[href], button, input, textarea, select'));
      if (focusables.length < 2) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    }
  };
  document.addEventListener('keydown', demoTrap);
  homeCleanups.push(() => document.removeEventListener('keydown', demoTrap));

  // --- Exit Intent Waitlist capture (delegated to Global in App level) ---
  if (globalState && typeof globalState.triggerExitIntent === 'function') {
    globalState.triggerExitIntent();
  }
}

export function destroy() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }
  // Run all other event cleanups
  homeCleanups.forEach(fn => fn());
  homeCleanups = [];
}
