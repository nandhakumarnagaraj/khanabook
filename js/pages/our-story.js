/**
 * Our Story Page Layout Module
 */

export const html = `
  <main class="pt-20">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative py-section-desktop overflow-hidden">
      <div class="hero-gradient absolute inset-0 -z-10"
           style="background: radial-gradient(circle at 0.625% 16.6319%, rgba(124, 58, 237, 0.15) 0%, transparent 70%);">
      </div>
      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary/20 text-primary-fixed-dim text-label-sm font-label-sm">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          OUR MISSION
        </div>
        <h1 class="text-headline-xl font-headline-xl text-on-surface tracking-tight leading-tight">
          Modernizing the Indian <span class="text-primary">Hospitality Legacy</span> with Precision.
        </h1>
        <p class="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
          We are on a journey to help Indian restaurants move from manual billing and scattered tools to one simple, reliable POS system.
        </p>
        <div class="flex flex-wrap gap-4 pt-4">
          <button data-link="get-started"
             class="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:brightness-105 active:scale-95 transition-all violet-glow border-none cursor-pointer">
            Get First Year Free
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
          <a href="#values"
             class="border border-outline-variant bg-surface-container/50 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-surface-variant transition-all backdrop-blur-md">
            <span class="material-symbols-outlined">visibility</span>
            Our Values
          </a>
        </div>
      </div>
      <div class="relative animate-float hidden lg:block">
        <div class="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full"></div>
        <div class="glass-card p-4 rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/5">
          <img class="rounded-[1.5rem] w-full aspect-[4/3] object-cover grayscale-[0.2] contrast-[1.1]" 
               alt="Sleek modern industrial POS terminal in premium restaurant" 
               src="assets/pos_terminal_industrial.png" 
               loading="lazy" 
               decoding="async" 
               width="1024" 
               height="1024">
        </div>
      </div>
    </section>

    <!-- Our Story Section - Bento Layout -->
    <section class="py-section-desktop max-w-7xl mx-auto px-margin-desktop">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-700 opacity-100 translate-y-0">
        <div class="md:col-span-7 glass-card p-xl rounded-xl flex flex-col justify-center">
          <h2 class="font-headline-md text-headline-md text-on-surface mb-md">Born in the Kitchen</h2>
          <p class="font-body-base text-body-base text-on-surface-variant mb-md">
            KhanaBook started not in a boardroom, but in the frantic heart of a family-run bistro in Pune. We saw the chaos of manual billing and the limitations of legacy software that didn't understand the unique rhythm of Indian hospitality.
          </p>
          <p class="font-body-base text-body-base text-on-surface-variant">
            Our founders, a group of engineers and restauranteurs, decided to build something different—a system that marries industrial-grade reliability with the effortless control of modern SaaS.
          </p>
        </div>
        <div class="md:col-span-5 aspect-square md:aspect-auto rounded-xl overflow-hidden border border-outline-variant/30">
          <img class="w-full h-full object-cover grayscale-[0.1]" 
               alt="Chef and developer collaborating in a kitchen" 
               src="assets/chef_handshake.png" 
               loading="lazy" 
               decoding="async" 
               width="1024" 
               height="1024">
        </div>
        <div class="md:col-span-4 rounded-xl overflow-hidden border border-outline-variant/30 aspect-square md:aspect-auto">
          <img class="w-full h-full object-cover" 
               alt="Minimalist high-tech server room with saffron lighting" 
               src="assets/server_room.png" 
               loading="lazy" 
               decoding="async" 
               width="1024" 
               height="1024">
        </div>
        <div class="md:col-span-8 glass-card p-xl rounded-xl flex flex-col justify-center border-primary/20">
          <h2 class="font-headline-md text-headline-md text-on-surface mb-md">The Restaurant-First Mission</h2>
          <p class="font-body-base text-body-base text-on-surface-variant">
            Our goal is practical: make modern billing, menu management, payments, and reports accessible for restaurants that need speed without complexity. The first year free offer is designed to help teams adopt the system without upfront software cost.
          </p>
          <div class="mt-lg grid grid-cols-2 gap-md">
            <div class="bg-surface-container-high p-md rounded-lg border border-outline-variant/20">
              <span class="font-stat-lg text-stat-lg text-primary">First Year</span>
              <span class="block font-label-caps text-label-caps text-on-surface-variant opacity-70">FREE OFFER</span>
            </div>
            <div class="bg-surface-container-high p-md rounded-lg border border-outline-variant/20">
              <span class="font-stat-lg text-stat-lg text-primary">99.9%</span>
              <span class="block font-label-caps text-label-caps text-on-surface-variant opacity-70">SYSTEM UPTIME</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values Section -->
    <section id="values" class="py-section-desktop bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-margin-desktop text-center mb-xl transition-all duration-700 opacity-100 translate-y-0">
        <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Our Core Values</h2>
        <div class="w-20 h-1 bg-primary mx-auto mt-md rounded-full"></div>
      </div>
      <div class="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 opacity-100 translate-y-0">
        <!-- Precision -->
        <div class="p-xl rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-all group">
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-lg group-hover:bg-primary/20 transition-colors">
            <span class="material-symbols-outlined text-primary text-3xl">target</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-md">Precision</h3>
          <p class="font-body-base text-body-base text-on-surface-variant">
            Every transaction, every inventory update, and every report is handled with surgical accuracy. We believe that in business, details aren't just details—they're the foundation.
          </p>
        </div>
        <!-- Reliability -->
        <div class="p-xl rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-all group">
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-lg group-hover:bg-primary/20 transition-colors">
            <span class="material-symbols-outlined text-primary text-3xl">verified</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-md">Reliability</h3>
          <p class="font-body-base text-body-base text-on-surface-variant">
            A POS must never fail during a dinner rush. Our industrial-grade infrastructure ensures that KhanaBook is always on, even when the internet isn't.
          </p>
        </div>
        <!-- Growth -->
        <div class="p-xl rounded-xl border border-outline-variant/30 hover:border-primary/40 transition-all group">
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-lg group-hover:bg-primary/20 transition-colors">
            <span class="material-symbols-outlined text-primary text-3xl">trending_up</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface mb-md">Growth</h3>
          <p class="font-body-base text-body-base text-on-surface-variant">
            We win when you win. Our features are designed to uncover revenue leaks and optimize performance, helping your business reach its full potential.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Journey Timeline -->
    <section class="py-section-desktop max-w-7xl mx-auto px-margin-desktop">
      <div class="text-center mb-section-mobile transition-all duration-700 opacity-100 translate-y-0">
        <span class="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-md block">MILESTONES</span>
        <h2 class="font-headline-md text-headline-md text-on-surface">The Journey So Far</h2>
      </div>
      <div class="relative transition-all duration-700 opacity-100 translate-y-0">
        <!-- Vertical Line -->
        <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block"></div>
        <div class="space-y-xl">
          <!-- 2022 -->
          <div class="flex flex-col md:flex-row items-center gap-6">
            <div class="md:w-1/2 md:text-right">
              <h4 class="font-headline-md text-headline-md text-primary">2022</h4>
              <h5 class="font-body-bold text-body-bold text-on-surface">The Seed</h5>
              <p class="font-body-base text-body-base text-on-surface-variant max-w-sm ml-auto">Initial MVP launch in 5 pilot restaurants in Pune. Proven efficiency gains of 20% in table turnover.</p>
            </div>
            <div class="w-4 h-4 rounded-full bg-primary relative z-10 hidden md:block"></div>
            <div class="md:w-1/2"></div>
          </div>
          <!-- 2023 -->
          <div class="flex flex-col md:flex-row-reverse items-center gap-6">
            <div class="md:w-1/2 text-left">
              <h4 class="font-headline-md text-headline-md text-primary">2023</h4>
              <h5 class="font-body-bold text-body-bold text-on-surface">Expansion</h5>
              <p class="font-body-base text-body-base text-on-surface-variant max-w-sm">Spread to Mumbai and Delhi. Launched Cloud Sync and Advanced Inventory modules.</p>
            </div>
            <div class="w-4 h-4 rounded-full bg-primary relative z-10 hidden md:block"></div>
            <div class="md:w-1/2"></div>
          </div>
          <!-- 2024 -->
          <div class="flex flex-col md:flex-row items-center gap-6">
            <div class="md:w-1/2 md:text-right">
              <h4 class="font-headline-md text-headline-md text-primary">2024</h4>
              <h5 class="font-body-bold text-body-bold text-on-surface">Innovation</h5>
              <p class="font-body-base text-body-base text-on-surface-variant max-w-sm ml-auto">Expanded hardware workflows and refined the Android POS experience for restaurant billing.</p>
            </div>
            <div class="w-4 h-4 rounded-full bg-primary relative z-10 hidden md:block"></div>
            <div class="md:w-1/2"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-section-desktop max-w-7xl mx-auto px-margin-desktop mb-section-desktop">
      <div class="rounded-xl bg-gradient-to-br from-primary-container/20 to-transparent border border-primary/20 p-xl md:p-[80px] text-center relative overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div class="relative z-10">
          <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-lg">Ready to Modernize?</h2>
          <p class="font-body-base text-body-base text-on-surface-variant max-w-2xl mx-auto mb-xl">
            Start with the first year free and experience a POS built for Indian restaurant billing, payments, and reports.
          </p>
          <div class="flex flex-col sm:flex-row gap-md justify-center">
            <button data-link="get-started" class="bg-primary text-on-primary px-xl py-md rounded-lg font-body-bold text-body-bold hover:scale-105 transition-transform duration-200 border-none cursor-pointer violet-glow">Book a Demo</button>
            <button data-link="pricing-plans" class="border border-outline-variant text-on-surface px-xl py-md rounded-lg font-body-bold text-body-bold hover:bg-surface-container-high transition-colors cursor-pointer bg-transparent">View Pricing</button>
          </div>
        </div>
      </div>
    </section>
  </main>
`;

export function init(globalState) {
  // Page initialization code if any (Our Story is mostly static, but could setup card tilts, smooth scrolls, etc. which are managed globally)
}

export function destroy() {
  // Cleanups if any
}
