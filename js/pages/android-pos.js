/**
 * Android POS Page Layout Module
 */

export const html = `
  <!-- Hero Section -->
  <section class="relative pt-24 pb-section-desktop px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-xl items-center">
    <div class="hero-gradient absolute inset-0 -z-10" style="background: radial-gradient(circle at 70% 40%, rgba(124, 58, 237, 0.12) 0%, transparent 70%);"></div>
    <div class="md:col-span-7 z-10">
      <span class="inline-block px-md py-xs bg-primary-container/10 border border-primary-container/20 text-primary rounded-full font-label-caps text-label-caps mb-md">
        MODERN ANDROID POS SYSTEM
      </span>
      <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-lg text-on-surface">
        Revolutionize Your <br>
        <span class="text-primary">Restaurant Billing.</span>
      </h1>
      <p class="font-body-base text-body-base text-on-surface-variant max-w-[540px] mb-xl">
        Experience the power of an offline-first, high-performance Android POS. Built with modern technology for merchants who demand speed, reliability, and precision.
      </p>
      <div class="flex flex-col sm:flex-row gap-md">
        <button data-link="get-started" class="h-[48px] px-xl bg-primary text-on-primary font-body-bold rounded-lg hover:scale-105 transition-all violet-glow flex items-center justify-center border-none cursor-pointer">
          Get First Year Free
        </button>
        <button data-link="get-started" class="h-[48px] px-xl border border-outline-variant/30 text-on-surface font-body-bold rounded-lg hover:bg-surface-container transition-all flex items-center justify-center gap-sm bg-transparent cursor-pointer">
          <span class="material-symbols-outlined text-primary">play_circle</span>
          Watch Demo
        </button>
      </div>
    </div>
    <div class="md:col-span-5 relative">
      <div class="pos-frame relative z-10 shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-700">
        <img class="rounded-xl w-full" alt="A premium Android POS terminal screen" src="assets/pos_terminal_industrial.png" loading="lazy" decoding="async" width="1024" height="1024">
      </div>
      <!-- Decorative Glows -->
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
      <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-container/20 blur-[100px] rounded-full"></div>
    </div>
  </section>

  <!-- Trust Bar -->
  <section class="py-xl bg-surface-container-low border-y border-outline-variant/20">
    <div class="max-w-7xl mx-auto px-margin-desktop flex flex-wrap justify-center md:justify-between items-center gap-xl opacity-60 grayscale hover:grayscale-0 transition-all">
      <span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest w-full text-center md:w-auto mb-md md:mb-0">Trusted Integrations</span>
      <div class="flex gap-xl flex-wrap justify-center">
        <div class="h-8 w-24 bg-surface-container-highest rounded flex items-center justify-center font-bold text-on-surface">Easebuzz</div>
        <div class="h-8 w-24 bg-surface-container-highest rounded flex items-center justify-center font-bold text-on-surface">Swiggy</div>
        <div class="h-8 w-24 bg-surface-container-highest rounded flex items-center justify-center font-bold text-on-surface">Zomato</div>
      </div>
    </div>
  </section>

  <!-- 5-Step Billing Flow -->
  <section class="py-section-desktop px-margin-desktop max-w-7xl mx-auto overflow-hidden">
    <div class="text-center mb-[80px]">
      <h2 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">Lightning Fast 5-Step Billing</h2>
      <p class="text-on-surface-variant font-body-base text-body-base max-w-[600px] mx-auto">Our optimized workflow allows you to serve customers in seconds, not minutes.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-md relative">
      <!-- Connecting Line (Desktop) -->
      <div class="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>
      <!-- Step 1 -->
      <div class="glass-card p-lg rounded-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform">
        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-md border border-primary/20">
          <span class="material-symbols-outlined text-primary">person_add</span>
        </div>
        <h3 class="font-body-bold text-body-bold mb-xs">Customer</h3>
        <p class="text-on-surface-variant text-sm">Quick identification or new entry</p>
      </div>
      <!-- Step 2 -->
      <div class="glass-card p-lg rounded-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform" style="border-color: rgb(45, 51, 63);">
        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-md border border-primary/20">
          <span class="material-symbols-outlined text-primary">restaurant_menu</span>
        </div>
        <h3 class="font-body-bold text-body-bold mb-xs">Menu</h3>
        <p class="text-on-surface-variant text-sm">Tap-to-add items with modifiers</p>
      </div>
      <!-- Step 3 -->
      <div class="glass-card p-lg rounded-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform border-primary/40 violet-glow scale-105 bg-surface-container-high">
        <div class="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-md shadow-lg">
          <span class="material-symbols-outlined text-on-primary-container" style="font-variation-settings: 'FILL' 1;">payments</span>
        </div>
        <h3 class="font-body-bold text-body-bold mb-xs">Payment</h3>
        <p class="text-on-surface-variant text-sm">UPI, Cash, or Split payments</p>
      </div>
      <!-- Step 4 -->
      <div class="glass-card p-lg rounded-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform" style="border-color: rgb(45, 51, 63);">
        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-md border border-primary/20">
          <span class="material-symbols-outlined text-primary">receipt</span>
        </div>
        <h3 class="font-body-bold text-body-bold mb-xs">KOT</h3>
        <p class="text-on-surface-variant text-sm">Instant kitchen print/display</p>
      </div>
      <!-- Step 5 -->
      <div class="glass-card p-lg rounded-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform" style="border-color: rgb(45, 51, 63);">
        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-md border border-primary/20">
          <span class="material-symbols-outlined text-primary">check_circle</span>
        </div>
        <h3 class="font-body-bold text-body-bold mb-xs">Success</h3>
        <p class="text-on-surface-variant text-sm">Auto-SMS and sync complete</p>
      </div>
    </div>
  </section>

  <!-- Featured Highlights (Bento Grid) -->
  <section class="py-section-desktop px-margin-desktop max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-lg h-auto">
      <!-- AI OCR Menu Import -->
      <div class="md:col-span-2 glass-card p-xl rounded-xl flex flex-col md:flex-row gap-xl items-center overflow-hidden" style="border-color: rgb(45, 51, 63);">
        <div class="flex-1">
          <span class="text-primary font-label-caps text-label-caps mb-sm block">INTELLIGENT ONBOARDING</span>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-md">AI OCR Menu Import</h3>
          <p class="text-on-surface-variant font-body-base text-body-base mb-lg">
            Stop manual data entry. Scan your existing printed menu with your phone's camera or upload a PDF. Our AI automatically extracts categories, items, and prices in seconds.
          </p>
          <ul class="space-y-md">
            <li class="flex items-center gap-sm text-on-surface">
              <span class="material-symbols-outlined text-primary">photo_camera</span>
              <div>
                <span class="block font-body-bold text-sm">Live Camera</span>
                <span class="text-xs text-on-surface-variant">Scan physical sheets of paper menus in real-time</span>
              </div>
            </li>
            <li class="flex items-center gap-sm text-on-surface">
              <span class="material-symbols-outlined text-primary">image</span>
              <div>
                <span class="block font-body-bold text-sm">Gallery</span>
                <span class="text-xs text-on-surface-variant">Import photo uploads or screenshots from your phone</span>
              </div>
            </li>
            <li class="flex items-center gap-sm text-on-surface">
              <span class="material-symbols-outlined text-primary">picture_as_pdf</span>
              <div>
                <span class="block font-body-bold text-sm">PDF Import</span>
                <span class="text-xs text-on-surface-variant">Upload digital menus directly to extract items</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex-1 w-full flex justify-center">
          <div class="relative w-full max-w-[280px]">
            <img class="rounded-lg shadow-2xl border border-outline-variant/30" alt="A smartphone scanning menu layout details" src="assets/pos_phone_mockup.png" loading="lazy" decoding="async" width="809" height="877">
          </div>
        </div>
      </div>
      <!-- Offline First -->
      <div class="glass-card p-xl rounded-xl flex flex-col justify-between" style="border-color: rgb(45, 51, 63);">
        <div>
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-md">
            <span class="material-symbols-outlined text-primary">wifi_off</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-md">Offline-First Core</h3>
          <p class="text-on-surface-variant font-body-base text-body-base">
            Internet down? No problem. KhanaBook works fully offline. Data syncs automatically to the cloud once you're back online.
          </p>
        </div>
        <div class="pt-xl mt-auto">
          <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
            <div class="bg-primary w-[85%] h-full"></div>
          </div>
          <span class="text-xs text-on-surface-variant mt-sm block">Reliability Score: 85% Better than Web POS</span>
        </div>
      </div>
      <!-- Split Payments -->
      <div class="glass-card p-xl rounded-xl">
        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-md">
          <span class="material-symbols-outlined text-primary">account_balance_wallet</span>
        </div>
        <h3 class="font-headline-md text-headline-md text-on-surface mb-md">Smart Split Payments</h3>
        <p class="text-on-surface-variant font-body-base text-body-base mb-lg">
          Handle complex payment scenarios with ease. Combine Cash and UPI on a single invoice.
        </p>
        <div class="space-y-sm">
          <div class="flex justify-between items-center bg-surface-container p-sm rounded border border-outline-variant/10">
            <span class="text-sm font-body-bold">UPI</span>
            <span class="text-primary font-body-bold">₹450.00</span>
          </div>
          <div class="flex justify-between items-center bg-surface-container p-sm rounded border border-outline-variant/10">
            <span class="text-sm font-body-bold">Cash</span>
            <span class="text-primary font-body-bold">₹120.00</span>
          </div>
        </div>
      </div>
      <!-- Compliance & Reports -->
      <div class="md:col-span-2 glass-card p-xl rounded-xl flex flex-col md:flex-row-reverse gap-xl items-center" style="border-color: rgb(45, 51, 63);">
        <div class="flex-1">
          <span class="text-primary font-label-caps text-label-caps mb-sm block">BUSINESS INTELLIGENCE</span>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-md">Compliance &amp; Daily Reports</h3>
          <p class="text-on-surface-variant font-body-base text-body-base mb-lg">
            Never miss a GST filing or FSSAI renewal. Get automated alerts and professional PDF/Excel reports delivered directly to your email.
          </p>
          <div class="grid grid-cols-2 gap-md">
            <div class="p-md bg-surface-container rounded-lg border border-outline-variant/10">
              <span class="material-symbols-outlined text-primary mb-xs">verified</span>
              <span class="block text-sm font-body-bold">GST Ready</span>
            </div>
            <div class="p-md bg-surface-container rounded-lg border border-outline-variant/10">
              <span class="material-symbols-outlined text-primary mb-xs">notifications_active</span>
              <span class="block text-sm font-body-bold">FSSAI Alerts</span>
            </div>
          </div>
        </div>
        <div class="flex-1 w-full flex justify-center relative">
          <div class="mockup-container">
            <img class="rounded-lg shadow-xl opacity-80 border border-outline-variant/30" alt="Android billing screen layout mockup" src="assets/pos_phone_billing_mockup.png" decoding="async" loading="lazy" width="480" height="360">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Tech Stack -->
  <section class="py-section-desktop px-margin-desktop bg-surface-container-low overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-section-mobile items-center">
      <div class="order-2 md:order-1 relative">
        <div class="absolute -z-10 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -top-1/4 -left-1/4"></div>
        <div class="pos-frame max-w-[400px] mx-auto relative violet-glow">
          <div class="mockup-container">
            <img class="rounded-xl" alt="Android smartphone interface running Compose app" src="assets/pos_phone_billing_mockup.png" decoding="async" loading="lazy" width="480" height="360">
          </div>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <h2 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-lg">Native Android Performance</h2>
        <p class="text-on-surface-variant font-body-base text-body-base mb-xl">
          Built from the ground up using <span class="text-primary font-body-bold">Jetpack Compose</span> and modern Android architectures. Our app is optimized for performance, even on budget merchant hardware.
        </p>
        <div class="space-y-lg">
          <div class="flex gap-md">
            <div class="flex-shrink-0 w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
              <span class="material-symbols-outlined text-primary">bolt</span>
            </div>
            <div>
              <h4 class="font-body-bold text-body-bold">60 FPS Fluid UI</h4>
              <p class="text-sm text-on-surface-variant">Zero lag animations for rapid-fire billing.</p>
            </div>
          </div>
          <div class="flex gap-md">
            <div class="flex-shrink-0 w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
              <span class="material-symbols-outlined text-primary">smartphone</span>
            </div>
            <div>
              <h4 class="font-body-bold text-body-bold">Adaptive Layouts</h4>
              <p class="text-sm text-on-surface-variant">Perfectly optimized for all Android smartphones and screen sizes.</p>
            </div>
          </div>
          <div class="flex gap-md">
            <div class="flex-shrink-0 w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
              <span class="material-symbols-outlined text-primary">cloud_sync</span>
            </div>
            <div>
              <h4 class="font-body-bold text-body-bold">Jetpack WorkManager</h4>
              <p class="text-sm text-on-surface-variant">Reliable background data synchronization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

export function init() {
  // Page-specific initialization if any
}

export function destroy() {
  // Page-specific cleanups if any
}
