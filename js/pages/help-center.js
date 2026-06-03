/**
 * Help Center Page Layout Module
 */

export const html = `
  <section class="max-w-7xl mx-auto px-margin-desktop text-center mb-xl relative pt-12">
    <div class="hero-gradient absolute inset-0 -z-10" style="background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 70%);"></div>
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary/20 text-primary-fixed-dim text-label-sm font-label-sm mb-6">
      <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      24/7 Support Available
    </div>
    <h1 class="text-headline-xl font-headline-xl text-on-surface tracking-tight leading-tight mb-4">How can we <span class="text-primary">help?</span></h1>
    <p class="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">Search our knowledge base for answers, setup guides, and best practices to grow your business.</p>
    <div class="relative max-w-2xl mx-auto mb-section-mobile">
      <span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
      <input class="w-full h-14 pl-12 pr-md glass-card rounded-xl text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Search for hardware setup, payments, or reports..." type="text">
    </div>
  </section>

  <!-- Categories Bento Grid -->
  <section class="max-w-7xl mx-auto px-margin-desktop mb-section-desktop">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Getting Started -->
      <div class="md:col-span-8 group glass-panel rounded-xl p-xl hover:border-primary/50 transition-all cursor-pointer overflow-hidden relative" style="transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s;">
        <div class="flex items-start justify-between relative z-10">
          <div>
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-md">
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">rocket_launch</span>
            </div>
            <h3 class="font-headline-md text-headline-md mb-sm">Getting Started</h3>
            <p class="font-body-base text-body-base text-on-surface-variant mb-md max-w-md">Everything you need to know to set up your restaurant and start taking orders in minutes.</p>
            <ul class="space-y-sm text-on-surface-variant font-body-base">
              <li class="flex items-center gap-sm"><span class="material-symbols-outlined text-xs">arrow_forward</span> First-time login guide</li>
              <li class="flex items-center gap-sm"><span class="material-symbols-outlined text-xs">arrow_forward</span> Managing your menu items</li>
              <li class="flex items-center gap-sm"><span class="material-symbols-outlined text-xs">arrow_forward</span> Setting up staff permissions</li>
            </ul>
          </div>
          <img class="w-48 h-48 object-cover rounded-xl opacity-20 group-hover:opacity-40 transition-opacity absolute -right-4 -bottom-4 md:static" alt="Cinematic POS terminal close-up" src="assets/pos_terminal_industrial.png" loading="lazy" decoding="async" width="192" height="192">
        </div>
      </div>
      <!-- Hardware Setup -->
      <div class="md:col-span-4 glass-panel rounded-xl p-xl hover:border-primary/50 transition-all cursor-pointer" style="transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s;">
        <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-md">
          <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">print</span>
        </div>
        <h3 class="font-headline-md text-headline-md mb-sm">Hardware Setup</h3>
        <p class="font-body-base text-body-base text-on-surface-variant mb-md">Connect your printers, terminals, and cash drawers.</p>
        <button class="text-primary font-body-bold flex items-center gap-xs bg-transparent border-none cursor-pointer">View Guides <span class="material-symbols-outlined text-md">chevron_right</span></button>
      </div>
      <!-- Payments -->
      <div class="md:col-span-4 glass-panel rounded-xl p-xl hover:border-primary/50 transition-all cursor-pointer" style="transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s;">
        <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-md">
          <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">payments</span>
        </div>
        <h3 class="font-headline-md text-headline-md mb-sm">Payments</h3>
        <p class="font-body-base text-body-base text-on-surface-variant mb-md">Process transactions, refunds, and manage payout schedules.</p>
        <button class="text-primary font-body-bold flex items-center gap-xs bg-transparent border-none cursor-pointer">Manage Billing <span class="material-symbols-outlined text-md">chevron_right</span></button>
      </div>
      <!-- Reports -->
      <div class="md:col-span-8 glass-panel rounded-xl p-xl hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden" style="transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s;">
        <div class="flex items-center justify-between h-full">
          <div class="max-w-md">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-md">
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">bar_chart</span>
            </div>
            <h3 class="font-headline-md text-headline-md mb-sm">Reports &amp; Analytics</h3>
            <p class="font-body-base text-body-base text-on-surface-variant">Understand your sales trends, peak hours, and staff performance with deep data insights.</p>
          </div>
          <div class="hidden lg:flex items-end gap-2 h-24 w-32 border-b border-primary/30 pb-1">
            <div class="w-6 bg-primary opacity-30 h-[40%] rounded-t-sm"></div>
            <div class="w-6 bg-primary opacity-50 h-[70%] rounded-t-sm"></div>
            <div class="w-6 bg-primary opacity-70 h-[50%] rounded-t-sm"></div>
            <div class="w-6 bg-primary h-[90%] rounded-t-sm"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Community & Support Section -->
  <section class="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-xl">
    <!-- Contact Support -->
    <div class="bg-surface-container-low border border-outline-variant/20 rounded-xl p-xl">
      <h2 class="font-headline-md text-headline-md mb-md">Still need help?</h2>
      <p class="font-body-base text-body-base text-on-surface-variant mb-xl">Our support team is available 24/7 to assist with any technical issues or billing questions.</p>
      <div class="space-y-md">
        <button data-link="get-started" class="w-full text-left flex items-center justify-between p-md glass-card rounded-lg hover:border-primary transition-all group bg-transparent border border-outline-variant/30 cursor-pointer" style="transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s;">
          <div class="flex items-center gap-md">
            <div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-green-500">chat</span>
            </div>
            <div>
              <p class="font-body-bold text-body-bold">Request a Demo</p>
              <p class="text-on-surface-variant text-sm">Speak with our sales team</p>
            </div>
          </div>
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        <a class="flex items-center justify-between p-md glass-card rounded-lg hover:border-primary transition-all group" href="mailto:kbook@pcts.tech" style="transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s;">
          <div class="flex items-center gap-md">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-primary">mail</span>
            </div>
            <div>
              <p class="font-body-bold text-body-bold">Email Support</p>
              <p class="text-on-surface-variant text-sm">kbook@pcts.tech</p>
            </div>
          </div>
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
        <a class="flex items-center justify-between p-md glass-card rounded-lg hover:border-primary transition-all group" href="tel:9471676935" style="transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s;">
          <div class="flex items-center gap-md">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-primary">call</span>
            </div>
            <div>
              <p class="font-body-bold text-body-bold">Phone Support</p>
              <p class="text-on-surface-variant text-sm">+91 94716 76935</p>
            </div>
          </div>
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
    </div>
    <!-- Community Forum -->
    <div class="bg-gradient-to-br from-surface-container-low to-primary/5 border border-primary/20 rounded-xl p-xl flex flex-col justify-between">
      <div>
        <h2 class="font-headline-md text-headline-md mb-md">Join the Community</h2>
        <p class="font-body-base text-body-base text-on-surface-variant mb-md">Connect with other restaurant owners. Share tips, request features, and stay ahead of the curve.</p>
        <div class="flex -space-x-3 mb-xl">
          <img class="w-10 h-10 rounded-full border-2 border-surface" alt="Smiling Mumbai bistro chef headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKqXi-J2Sf6hFw_Cm0JBEIPi-ASjZByQsEyWKsN4A4CV5RRk_zdQDy1Ygzg5TexJ8Awvq1o8ds6XWjaW77zbtWMoQ60no7tkluHx26V3bB_Z-guC6xQQvrsFDqICox4hn727IgMFodNNBp-IhLg1b6WRsffpLTwHbPXe8qI4fV68orBAyqLaSW1Ok1VGl4EkU-izWY2wbinLZewokymhojVTy4NOP5iHFhM9SOnFeEvsXK3tBZV2khuyDNAr37Tmg8_OywXkK0trg" loading="lazy" decoding="async" width="40" height="40">
          <img class="w-10 h-10 rounded-full border-2 border-surface" alt="Restaurant business partner portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfKYKAnXuFqkOVCPRqKMM4iXApGrUjSxa3RyAgm3xd8nMQBNMoVRrX1VUJ22d8w3Giv4bA42_mrPY-XtdI1tcCl3P_x5fVKt7Z5RLR5jujVdj0VVvX4tfGt5jsuojMnlnp-1sU51dERnnZsr93z5fD9A6A8NTX7NAidCg7HlUTACh6A2Yx0v_ZJDruxNoFGyRrcUCCITaNbbKGWJeqdmzl6L1BcqiOnjaU8rl6VYIpVjIaSFyB2A4w-NFSuHWSUY6jfaC07ml8oUI" loading="lazy" decoding="async" width="40" height="40">
          <img class="w-10 h-10 rounded-full border-2 border-surface" alt="Smiling Indian cafe owner portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6kxHYvT-ZsGCLdtmuAoWd_cRUcD9JMLBZyarDec6dkZIoJHbZBIQ2wbEmKIAjXlfTTwHa_0evX8NLGXtLoWpx6hpF9dcvuCjhhMjkty92Xt8jxVY-cEJSf_N9TWOZzPf5zg_ucCjBlxLoB_IP98oWk96NRYP_frcm8yc9Ilcwqvnz2mj0a2-8FobDVK28HAyLthkE8xaWzSuidStoS9vvlICkH7vlh9sGr2MbgS5hjjhAixkP6oqnSByX6n2262IIv0bGVNDjEzY" loading="lazy" decoding="async" width="40" height="40">
          <div class="w-10 h-10 rounded-full bg-primary/20 border-2 border-surface flex items-center justify-center text-xs font-bold text-primary">+2k</div>
        </div>
      </div>
      <button class="w-full bg-surface border border-[#2D333F] text-on-surface py-md rounded-xl font-body-bold hover:bg-[#1F242C] transition-colors flex items-center justify-center gap-md cursor-pointer">
        <span class="material-symbols-outlined">forum</span>
        Visit KhanaBook Forum
      </button>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="max-w-7xl mx-auto px-margin-desktop mb-section-desktop mt-20">
    <div class="bg-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      <h2 class="text-headline-xl font-headline-xl text-on-primary-container mb-6">Still have questions?</h2>
      <p class="text-body-lg font-body-lg text-on-primary-container/80 mb-10 max-w-2xl mx-auto">Our support team is ready to help you 24/7. Reach out anytime and we'll get back to you within minutes.</p>
      <button data-link="get-started" class="inline-block bg-surface-dim text-primary px-10 py-5 rounded-2xl font-headline-md text-headline-md hover:scale-105 transition-all shadow-2xl border-none cursor-pointer">
        Contact Support
      </button>
    </div>
  </section>
`;

export function init() {
  // Help Center page-specific init
}

export function destroy() {
  // Help Center page-specific destroy
}
