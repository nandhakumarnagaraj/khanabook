/**
 * Pricing Page Layout Module
 */

export const html = `
  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative pt-12 pb-12">
    <div class="hero-gradient absolute inset-0 -z-10" style="background: radial-gradient(circle at 0.625% 16.6319%, rgba(124, 58, 237, 0.15) 0%, transparent 70%);"></div>
    <div class="space-y-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary/20 text-primary-fixed-dim text-label-sm font-label-sm">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
        First Year Free Offer
      </div>
      <h1 class="text-headline-xl font-headline-xl text-on-surface tracking-tight leading-tight">
        Start Free for One Full Year, <span class="text-primary">Then Scale With You.</span>
      </h1>
      <p class="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
        For launch customers, KhanaBook is free for the first year. After that, choose a simple plan that fits your restaurant size and support needs.
      </p>
      <div class="flex flex-wrap gap-4 pt-4">
        <button data-link="get-started" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:brightness-105 active:scale-95 transition-all violet-glow border-none cursor-pointer">
          Get First Year Free
          <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
        </button>
        <a href="#faq" class="border border-outline-variant bg-surface-container/50 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-surface-variant transition-all backdrop-blur-md">
          <span class="material-symbols-outlined" aria-hidden="true">help</span>
          Common Questions
        </a>
      </div>
    </div>
    <div class="relative animate-float hidden lg:block">
      <div class="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full"></div>
      <div class="glass-card p-6 rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/5">
        <div class="flex flex-col items-center p-6">
          <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <span class="material-symbols-outlined text-primary text-[40px]" aria-hidden="true">payments</span>
          </div>
          <div class="text-center">
            <div class="text-label-sm text-on-surface-variant mb-1">Launch offer</div>
            <div class="text-headline-xl font-headline-xl text-primary">₹0</div>
            <div class="text-body-sm text-on-surface-variant">first year free · no credit card</div>
          </div>
          <div class="mt-6 w-full grid grid-cols-2 gap-4">
            <div class="glass-card p-4 rounded-xl text-center">
              <div class="text-headline-md font-headline-md text-on-surface">₹0</div>
              <div class="text-label-sm text-slate-gray">First Year Cost</div>
            </div>
            <div class="glass-card p-4 rounded-xl text-center">
              <div class="text-headline-md font-headline-md text-on-surface">AES-256</div>
              <div class="text-label-sm text-slate-gray">Data Encrypted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Calculator -->
  <section class="max-w-7xl mx-auto px-margin-desktop mb-20" id="pricing-calculator">
    <div class="glass-card rounded-3xl p-8 md:p-12">
      <div class="text-center mb-10">
        <h2 class="text-headline-lg font-headline-lg text-on-surface mb-2">Estimate Cost After Your Free Year</h2>
        <p class="text-body-md text-on-surface-variant">Your first year is free. Use this calculator to estimate the monthly cost after year one.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="space-y-8">
          <div>
            <div class="flex justify-between items-center mb-3">
              <label class="text-label-md font-label-md text-on-surface" for="calc-terminals">POS Terminals</label>
              <span class="text-headline-md font-headline-md text-primary" id="calc-terminal-val">1</span>
            </div>
            <input type="range" id="calc-terminals" min="1" max="20" value="1" aria-valuemin="1" aria-valuemax="20" aria-valuenow="1" aria-valuetext="1 terminal" class="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-primary">
            <div class="flex justify-between text-label-sm text-on-surface-variant mt-1" aria-hidden="true">
              <span>1</span>
              <span>20</span>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-3">
              <label class="text-label-md font-label-md text-on-surface" for="calc-locations">Locations</label>
              <span class="text-headline-md font-headline-md text-primary" id="calc-location-val">1</span>
            </div>
            <input type="range" id="calc-locations" min="1" max="10" value="1" aria-valuemin="1" aria-valuemax="10" aria-valuenow="1" aria-valuetext="1 location" class="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-primary">
            <div class="flex justify-between text-label-sm text-on-surface-variant mt-1" aria-hidden="true">
              <span>1</span>
              <span>10</span>
            </div>
          </div>
          <div class="flex items-center justify-between p-4 rounded-xl bg-surface-container-high">
            <span class="text-label-md font-label-md text-on-surface">Annual Billing <span class="text-label-sm text-on-surface-variant">(Save 20%)</span></span>
            <label for="calc-billing" class="relative block cursor-pointer">
              <input type="checkbox" id="calc-billing" class="sr-only peer">
              <div class="w-12 h-6 bg-surface-variant rounded-full peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-6"></div>
            </label>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center p-8 rounded-2xl bg-primary-container/20 border border-primary/20">
          <div class="text-label-sm text-on-surface-variant mb-2">Estimated After Year One</div>
          <div class="text-headline-xl font-headline-xl text-primary" id="calc-total">₹0/mo</div>
          <div class="text-body-sm text-on-surface-variant mt-2 text-center">First year free for eligible launch customers. After year one, additional terminals and locations are estimated at ₹499/mo and ₹999/mo respectively.</div>
          <button data-link="get-started" class="mt-6 bg-primary text-on-primary px-8 py-3 rounded-xl font-label-md font-bold hover:brightness-110 transition-all violet-glow border-none cursor-pointer">
            Get First Year Free
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Grid -->
  <section class="max-w-7xl mx-auto px-margin-desktop mb-section-desktop">
    <div class="text-center mb-8 space-y-4">
      <h2 class="text-headline-lg font-headline-lg text-on-surface">Choose Your Plan After the Free Year</h2>
      <p class="text-body-md font-body-md text-slate-gray">All launch plans include the first year free for eligible restaurants. No credit card required.</p>
    </div>

    <!-- Billing Period Toggle -->
    <div class="flex items-center justify-center gap-4 mb-12">
      <span id="billing-label-monthly" data-active="true" class="text-body-md font-semibold text-on-surface transition-colors">
        Monthly
      </span>
      <button id="billing-annual-toggle" type="button" role="switch" aria-checked="false" class="relative w-14 h-7 rounded-full bg-outline-variant transition-colors focus-visible:outline-2 focus-visible:outline-primary cursor-pointer border-none">
        <span id="billing-toggle-thumb" class="absolute top-1 left-1 w-5 h-5 rounded-full bg-surface-bright shadow-md transition-transform duration-300"></span>
      </button>
      <span id="billing-label-annual" data-active="false" class="text-body-md text-on-surface-variant transition-colors">
        Annual
        <span class="ml-1.5 text-label-sm text-tertiary font-bold bg-tertiary/10 px-2 py-0.5 rounded-full">
          Save 20%
        </span>
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Starter Plan -->
      <div class="glass-interactive glass-card p-xl rounded-xl flex flex-col hover:scale-102 transition-transform duration-200">
        <div class="mb-lg">
          <h3 class="font-headline-md text-headline-md mb-sm">Starter</h3>
          <p class="text-on-surface-variant mb-4">A simple starting plan after your free first year.</p>
          <div class="flex items-baseline gap-1">
            <span class="text-display-md font-display-md text-primary font-extrabold" aria-hidden="true">₹</span>
            <span class="text-display-md font-display-md text-primary font-extrabold plan-price" data-monthly="0" data-annual="0">0</span>
            <span class="text-label-md text-on-surface-variant billing-period">/mo</span>
          </div>
        </div>
        <ul class="flex-grow space-y-md mb-xl">
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>1 Device Terminal</span>
          </li>
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>Cloud Reporting</span>
          </li>
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>Email Support</span>
          </li>
        </ul>
        <button data-link="get-started" class="block w-full border border-outline bg-transparent text-on-surface font-body-bold text-body-bold py-md rounded hover:bg-surface-container transition-colors text-center cursor-pointer">Contact Us</button>
      </div>
      
      <!-- Professional Plan -->
      <div class="glass-interactive glass-card p-xl rounded-xl flex flex-col hover:scale-102 transition-transform duration-200 border-primary/30">
        <div class="mb-lg">
          <h3 class="font-headline-md text-headline-md mb-sm">Professional</h3>
          <p class="text-on-surface-variant mb-4">For growing restaurants after the first year free launch offer.</p>
          <div class="flex items-baseline gap-1">
            <span class="text-display-md font-display-md text-primary font-extrabold" aria-hidden="true">₹</span>
            <span class="text-display-md font-display-md text-primary font-extrabold plan-price" data-monthly="999" data-annual="9,590">999</span>
            <span class="text-label-md text-on-surface-variant billing-period">/mo</span>
          </div>
        </div>
        <ul class="flex-grow space-y-md mb-xl">
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>Unlimited Terminals</span>
          </li>
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>Advanced Analytics</span>
          </li>
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>Inventory Management</span>
          </li>
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>24/7 Priority Support</span>
          </li>
        </ul>
        <button data-link="get-started" class="block w-full bg-primary text-on-primary font-body-bold text-body-bold py-md rounded violet-glow transition-all text-center border-none cursor-pointer">Contact Us</button>
      </div>
      
      <!-- Enterprise Plan -->
      <div class="glass-interactive glass-card p-xl rounded-xl flex flex-col hover:scale-102 transition-transform duration-200">
        <div class="mb-lg">
          <h3 class="font-headline-md text-headline-md mb-sm">Enterprise</h3>
          <p class="text-on-surface-variant mb-4">Customized after the first year for larger teams and multi-outlet operations.</p>
          <div class="flex items-baseline gap-1">
            <span class="text-display-md font-display-md text-primary font-extrabold">Custom</span>
          </div>
        </div>
        <ul class="flex-grow space-y-md mb-xl">
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>Multi-location Sync</span>
          </li>
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>API Access</span>
          </li>
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>Dedicated Account Manager</span>
          </li>
          <li class="flex items-center space-x-md">
            <span class="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
            <span>Custom Hardware Packages</span>
          </li>
        </ul>
        <button data-link="get-started" class="block w-full border border-outline bg-transparent text-on-surface font-body-bold text-body-bold py-md rounded hover:bg-surface-container transition-colors text-center cursor-pointer">Contact Us</button>
      </div>
    </div>
  </section>

  <!-- Comparison Table Section -->
  <section class="max-w-7xl mx-auto px-margin-desktop mb-section-desktop overflow-hidden">
    <h2 class="font-display-lg text-display-lg text-center mb-xl">Feature Overview</h2>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="text-left border-b border-outline-variant/30">
            <th class="py-lg px-md font-body-bold text-body-bold">Core Features</th>
            <th class="py-lg px-md font-body-bold text-body-bold text-center">Starter</th>
            <th class="py-lg px-md font-body-bold text-body-bold text-center text-primary">Professional</th>
            <th class="py-lg px-md font-body-bold text-body-bold text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody class="text-on-surface-variant">
          <tr class="border-b border-outline-variant/10">
            <td class="py-md px-md">Unlimited Transactions</td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-primary" aria-hidden="true">check</span>
              <span class="sr-only">Supported</span>
            </td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-primary" aria-hidden="true">check</span>
              <span class="sr-only">Supported</span>
            </td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-primary" aria-hidden="true">check</span>
              <span class="sr-only">Supported</span>
            </td>
          </tr>
          <tr class="border-b border-outline-variant/10">
            <td class="py-md px-md">Inventory Tracking</td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-on-surface-variant" aria-hidden="true">remove</span>
              <span class="sr-only">Not Supported</span>
            </td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-primary" aria-hidden="true">check</span>
              <span class="sr-only">Supported</span>
            </td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-primary" aria-hidden="true">check</span>
              <span class="sr-only">Supported</span>
            </td>
          </tr>
          <tr class="border-b border-outline-variant/10">
            <td class="py-md px-md">Customer CRM</td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-on-surface-variant" aria-hidden="true">remove</span>
              <span class="sr-only">Not Supported</span>
            </td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-primary" aria-hidden="true">check</span>
              <span class="sr-only">Supported</span>
            </td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-primary" aria-hidden="true">check</span>
              <span class="sr-only">Supported</span>
            </td>
          </tr>
          <tr class="border-b border-outline-variant/10">
            <td class="py-md px-md">Custom Branding</td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-on-surface-variant" aria-hidden="true">remove</span>
              <span class="sr-only">Not Supported</span>
            </td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-on-surface-variant" aria-hidden="true">remove</span>
              <span class="sr-only">Not Supported</span>
            </td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-primary" aria-hidden="true">check</span>
              <span class="sr-only">Supported</span>
            </td>
          </tr>
          <tr class="border-b border-outline-variant/10">
            <td class="py-md px-md">Advanced Reporting</td>
            <td class="py-md px-md text-center">Basic Only</td>
            <td class="py-md px-md text-center">
              <span class="material-symbols-outlined text-primary" aria-hidden="true">check</span>
              <span class="sr-only">Supported</span>
            </td>
            <td class="py-md px-md text-center">Customizable</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="max-w-[800px] mx-auto px-margin-desktop mb-section-desktop">
    <h2 class="font-display-lg text-display-lg text-center mb-xl">Common Questions</h2>
    <div class="space-y-md">
      <details class="glass-card rounded-lg group overflow-hidden">
        <summary class="p-lg cursor-pointer flex justify-between items-center font-body-bold text-body-bold transition-colors group-hover:bg-surface-container">
          How does the first year free offer work?
          <span class="material-symbols-outlined transition-transform group-open:rotate-180" aria-hidden="true">expand_more</span>
        </summary>
        <div class="p-lg pt-0 text-on-surface-variant">
          Contact us with your restaurant details. Eligible launch customers get the first year free, and our team will explain the plan that applies after year one.
        </div>
      </details>
      <details class="glass-card rounded-lg group overflow-hidden">
        <summary class="p-lg cursor-pointer flex justify-between items-center font-body-bold text-body-bold transition-colors group-hover:bg-surface-container">
          What happens after the first free year?
          <span class="material-symbols-outlined transition-transform group-open:rotate-180" aria-hidden="true">expand_more</span>
        </summary>
        <div class="p-lg pt-0 text-on-surface-variant">
          Before the free year ends, we will contact you with clear renewal options. You can continue on a monthly or annual plan, or stop without hidden charges.
        </div>
      </details>
      <details class="glass-card rounded-lg group overflow-hidden">
        <summary class="p-lg cursor-pointer flex justify-between items-center font-body-bold text-body-bold transition-colors group-hover:bg-surface-container">
          Does KhanaBook work with existing hardware?
          <span class="material-symbols-outlined transition-transform group-open:rotate-180" aria-hidden="true">expand_more</span>
        </summary>
        <div class="p-lg pt-0 text-on-surface-variant">
          KhanaBook is designed to be compatible with most modern Android smartphones and thermal printers. Enterprise customers can also request custom hardware integrations.
        </div>
      </details>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="max-w-7xl mx-auto px-margin-desktop mb-section-desktop">
    <div class="bg-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      <h2 class="text-headline-xl font-headline-xl text-on-primary-container mb-6">Ready to transform your restaurant?</h2>
      <p class="text-body-lg font-body-lg text-on-primary-container/80 mb-10 max-w-2xl mx-auto">Join early restaurant teams using KhanaBook for daily billing, payments, and reports.</p>
      <button data-link="get-started" class="inline-block bg-surface-dim text-primary px-10 py-5 rounded-2xl font-headline-md text-headline-md hover:scale-105 transition-all shadow-2xl border-none cursor-pointer">
        Claim First Year Free
      </button>
    </div>
  </section>
`;

let pricingCleanups = [];

export function init() {
  pricingCleanups = [];

  // --- Pricing Calculator ---
  const calc = document.getElementById('pricing-calculator');
  if (calc) {
    const terminalsSlider = document.getElementById('calc-terminals');
    const locationsSlider = document.getElementById('calc-locations');
    const billingToggle = document.getElementById('calc-billing');
    const totalDisplay = document.getElementById('calc-total');
    const terminalVal = document.getElementById('calc-terminal-val');
    const locationVal = document.getElementById('calc-location-val');

    if (terminalsSlider && locationsSlider && billingToggle && totalDisplay && terminalVal && locationVal) {
      const updatePricing = () => {
        const terminals = parseInt(terminalsSlider.value) || 1;
        const locations = parseInt(locationsSlider.value) || 1;
        const isAnnual = billingToggle.checked;
        
        const basePrice = 0;
        const paidTerminals = Math.max(0, terminals - 1);
        const paidLocations = Math.max(0, locations - 1);
        const terminalPrice = paidTerminals * 499;
        const locationPrice = paidLocations * 999;
        let total = basePrice + terminalPrice + locationPrice;
        
        if (isAnnual) {
          total = Math.round(total * 12 * 0.8);
        }
        
        terminalsSlider.setAttribute('aria-valuetext', `${terminals} terminal${terminals > 1 ? 's' : ''}`);
        locationsSlider.setAttribute('aria-valuetext', `${locations} location${locations > 1 ? 's' : ''}`);

        terminalVal.textContent = terminals;
        locationVal.textContent = locations;
        totalDisplay.textContent = isAnnual ? '₹' + total.toLocaleString('en-IN') + '/yr' : '₹' + total.toLocaleString('en-IN') + '/mo';
      };

      terminalsSlider.addEventListener('input', updatePricing);
      locationsSlider.addEventListener('input', updatePricing);
      billingToggle.addEventListener('change', updatePricing);
      
      pricingCleanups.push(() => {
        terminalsSlider.removeEventListener('input', updatePricing);
        locationsSlider.removeEventListener('input', updatePricing);
        billingToggle.removeEventListener('change', updatePricing);
      });

      updatePricing();
    }
  }

  // --- Billing Period Toggle ---
  const toggle = document.getElementById('billing-annual-toggle');
  const labelMonthly = document.getElementById('billing-label-monthly');
  const labelAnnual = document.getElementById('billing-label-annual');
  
  if (toggle) {
    const parsePrice = val => parseInt(val.replace(/,/g, '')) || 0;

    const updatePrices = (isAnnual) => {
      toggle.setAttribute('aria-checked', isAnnual ? 'true' : 'false');
      if (labelMonthly) labelMonthly.setAttribute('data-active', (!isAnnual).toString());
      if (labelAnnual) labelAnnual.setAttribute('data-active', isAnnual.toString());

      document.querySelectorAll('.plan-price').forEach(el => {
        const monthly = el.getAttribute('data-monthly');
        const annual = el.getAttribute('data-annual');
        if (monthly && annual) {
          const val = isAnnual ? parsePrice(annual) : parsePrice(monthly);
          el.textContent = val.toLocaleString('en-IN');
        }
      });

      document.querySelectorAll('.billing-period').forEach(el => {
        el.textContent = isAnnual ? '/yr' : '/mo';
      });
    };

    const toggleHandler = () => {
      const isAnnual = toggle.getAttribute('aria-checked') === 'true';
      updatePrices(!isAnnual);
    };

    toggle.addEventListener('click', toggleHandler);
    pricingCleanups.push(() => toggle.removeEventListener('click', toggleHandler));

    const initialAnnual = toggle.getAttribute('aria-checked') === 'true';
    updatePrices(initialAnnual);
  }
}

export function destroy() {
  pricingCleanups.forEach(fn => fn());
  pricingCleanups = [];
}
