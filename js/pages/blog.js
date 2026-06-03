/**
 * Blog Page Layout Module
 */

export const html = `
  <section class="max-w-7xl mx-auto px-margin-desktop text-center relative pt-12 mb-xl">
    <div class="hero-gradient absolute inset-0 -z-10" style="background: radial-gradient(circle at 50% 30%, rgba(124, 58, 237,.12) 0%, transparent 70%);"></div>
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-fixed-dim text-label-sm font-label-sm mb-6">
      <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Insights for Restaurant Owners
    </div>
    <h1 class="text-headline-xl font-headline-xl text-on-surface tracking-tight leading-tight mb-4">KhanaBook <span class="text-primary">Blog</span></h1>
    <p class="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">Tips, guides, and best practices to help you run a smarter restaurant.</p>
    <div class="relative max-w-xl mx-auto mb-section-mobile">
      <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
      <input id="blog-search" class="w-full h-14 pl-12 pr-4 glass-card rounded-xl text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Search articles..." type="text" aria-label="Search blog articles">
    </div>
  </section>

  <!-- Blog Grid -->
  <section class="max-w-7xl mx-auto px-margin-desktop">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Article 1 -->
      <article class="blog-card glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col">
        <div class="h-48 bg-gradient-to-br from-primary/20 to-tertiary/10 flex items-center justify-center overflow-hidden">
          <span class="material-symbols-outlined text-6xl text-primary/40 group-hover:scale-110 transition-transform">receipt_long</span>
        </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-label-sm font-label-sm">Technology</span>
            <span class="text-label-sm text-on-surface-variant">5 min read</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">The Future of Restaurant POS: Why Offline-First Matters</h3>
          <p class="text-body-sm text-on-surface-variant flex-1">Internet outages shouldn't cost you sales. Learn why offline-first architecture is revolutionizing how Indian restaurants handle billing.</p>
          <button data-link="help-center" class="mt-4 text-primary font-body-bold text-body-bold flex items-center gap-1 hover:gap-2 transition-all bg-transparent border-none text-left cursor-pointer">Read More <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
        </div>
      </article>
      <!-- Article 2 -->
      <article class="blog-card glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col">
        <div class="h-48 bg-gradient-to-br from-tertiary/20 to-primary/10 flex items-center justify-center overflow-hidden">
          <span class="material-symbols-outlined text-6xl text-tertiary/40 group-hover:scale-110 transition-transform">gavel</span>
        </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary text-label-sm font-label-sm">Compliance</span>
            <span class="text-label-sm text-on-surface-variant">4 min read</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">GST &amp; FSSAI Compliance Guide for Indian Restaurants 2026</h3>
          <p class="text-body-sm text-on-surface-variant flex-1">Stay ahead of regulatory requirements with automated GST invoicing and FSSAI display. A complete guide for restaurant owners.</p>
          <button data-link="help-center" class="mt-4 text-primary font-body-bold text-body-bold flex items-center gap-1 hover:gap-2 transition-all bg-transparent border-none text-left cursor-pointer">Read More <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
        </div>
      </article>
      <!-- Article 3 -->
      <article class="blog-card glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col">
        <div class="h-48 bg-gradient-to-br from-slate-gray/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <span class="material-symbols-outlined text-6xl text-slate-gray/40 group-hover:scale-110 transition-transform">qr_code</span>
        </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-label-sm font-label-sm">Payments</span>
            <span class="text-label-sm text-on-surface-variant">3 min read</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">UPI Payments for Restaurants: A Complete Guide</h3>
          <p class="text-body-sm text-on-surface-variant flex-1">From dynamic QR codes to split payments — everything you need to know about accepting UPI payments at your restaurant.</p>
          <button data-link="help-center" class="mt-4 text-primary font-body-bold text-body-bold flex items-center gap-1 hover:gap-2 transition-all bg-transparent border-none text-left cursor-pointer">Read More <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
        </div>
      </article>
      <!-- Article 4 -->
      <article class="blog-card glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col">
        <div class="h-48 bg-gradient-to-br from-primary/20 to-tertiary/5 flex items-center justify-center overflow-hidden">
          <span class="material-symbols-outlined text-6xl text-primary/40 group-hover:scale-110 transition-transform">print</span>
        </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-label-sm font-label-sm">Hardware</span>
            <span class="text-label-sm text-on-surface-variant">6 min read</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">Choosing the Right POS Hardware for Your Restaurant</h3>
          <p class="text-body-sm text-on-surface-variant flex-1">Tablet vs dedicated terminal? Bluetooth vs USB printer? Our guide to building the perfect POS hardware stack.</p>
          <button data-link="help-center" class="mt-4 text-primary font-body-bold text-body-bold flex items-center gap-1 hover:gap-2 transition-all bg-transparent border-none text-left cursor-pointer">Read More <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
        </div>
      </article>
      <!-- Article 5 -->
      <article class="blog-card glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col">
        <div class="h-48 bg-gradient-to-br from-tertiary/20 to-primary/10 flex items-center justify-center overflow-hidden">
          <span class="material-symbols-outlined text-6xl text-tertiary/40 group-hover:scale-110 transition-transform">trending_up</span>
        </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary text-label-sm font-label-sm">Business</span>
            <span class="text-label-sm text-on-surface-variant">4 min read</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">5 Data-Driven Ways to Boost Restaurant Revenue in 2026</h3>
          <p class="text-body-sm text-on-surface-variant flex-1">Leverage your POS data to identify top-selling items, optimize pricing, reduce waste, and increase average order value.</p>
          <button data-link="help-center" class="mt-4 text-primary font-body-bold text-body-bold flex items-center gap-1 hover:gap-2 transition-all bg-transparent border-none text-left cursor-pointer">Read More <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
        </div>
      </article>
      <!-- Article 6 -->
      <article class="blog-card glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col">
        <div class="h-48 bg-gradient-to-br from-slate-gray/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <span class="material-symbols-outlined text-6xl text-slate-gray/40 group-hover:scale-110 transition-transform">menu_book</span>
        </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-label-sm font-label-sm">Tips</span>
            <span class="text-label-sm text-on-surface-variant">3 min read</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">How AI OCR is Transforming Menu Digitization</h3>
          <p class="text-body-sm text-on-surface-variant flex-1">Manual menu entry is a thing of the past. See how AI-powered OCR can digitize your entire menu in seconds.</p>
          <button data-link="help-center" class="mt-4 text-primary font-body-bold text-body-bold flex items-center gap-1 hover:gap-2 transition-all bg-transparent border-none text-left cursor-pointer">Read More <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
        </div>
      </article>
    </div>
  </section>

  <!-- Newsletter CTA -->
  <section class="max-w-7xl mx-auto px-margin-desktop mt-32">
    <div class="bg-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      <h2 class="text-headline-xl font-headline-xl text-on-primary-container mb-6">Stay Ahead of the Curve</h2>
      <p class="text-body-lg font-body-lg text-on-primary-container/80 mb-10 max-w-2xl mx-auto">Get the latest restaurant industry insights, tips, and KhanaBook updates delivered to your inbox.</p>
      <form class="max-w-md mx-auto flex flex-col sm:flex-row gap-4" id="newsletter-form">
        <input type="email" class="flex-1 h-14 px-6 rounded-2xl bg-surface-dim/80 text-on-surface placeholder:text-on-surface-variant/40 border-none outline-none" placeholder="your@email.com" required aria-label="Email for newsletter">
        <button type="submit" class="bg-surface-dim text-primary px-8 py-4 rounded-2xl font-headline-md text-headline-md hover:scale-105 transition-all shadow-2xl whitespace-nowrap border-none cursor-pointer">Subscribe</button>
      </form>
    </div>
  </section>
`;

let blogCleanups = [];

export function init() {
  blogCleanups = [];

  // --- Blog Search ---
  const searchInput = document.getElementById('blog-search');
  const cards = document.querySelectorAll('.blog-card');
  
  if (searchInput && cards.length > 0) {
    const searchHandler = () => {
      const query = searchInput.value.toLowerCase();
      cards.forEach(card => {
        const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
        const desc  = card.querySelector('p')?.textContent?.toLowerCase() || '';
        card.style.display = (title.includes(query) || desc.includes(query)) ? '' : 'none';
      });
    };
    
    searchInput.addEventListener('input', searchHandler);
    blogCleanups.push(() => searchInput.removeEventListener('input', searchHandler));
  }

  // --- Newsletter Form ---
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    const submitHandler = e => {
      e.preventDefault();
      alert('Thanks for subscribing!');
      newsForm.reset();
    };
    newsForm.addEventListener('submit', submitHandler);
    blogCleanups.push(() => newsForm.removeEventListener('submit', submitHandler));
  }
}

export function destroy() {
  blogCleanups.forEach(fn => fn());
  blogCleanups = [];
}
