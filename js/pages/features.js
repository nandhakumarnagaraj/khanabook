/**
 * Features Page Layout Module
 */

export const html = `
  <section class="max-w-7xl mx-auto px-margin-desktop mb-32 relative pt-12">
    <div class="hero-gradient absolute inset-0 -z-10" style="background: radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 70%);"></div>
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-label-sm font-label-sm">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
          NEW: AI OCR Scanner
        </div>
        <h1 class="font-headline-xl text-headline-xl text-on-surface leading-tight">
          Turn any menu into a <span class="text-primary">digital engine</span> in seconds.
        </h1>
        <p class="text-body-lg text-on-surface-variant max-w-lg">
          Stop manual data entry. Our proprietary AI-powered OCR turns your printed menu photos, gallery screenshots, or PDFs into fully functional digital databases with one click.
        </p>
        <div class="grid grid-cols-3 gap-2 lg:gap-4 max-w-xl">
          <div class="glass p-3 rounded-xl flex items-center gap-2 lg:gap-3 border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer group">
            <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shrink-0">
              <span class="material-symbols-outlined text-lg" aria-hidden="true">photo_camera</span>
            </div>
            <div class="min-w-0">
              <div class="font-label-md text-on-surface text-xs lg:text-sm truncate">Live Camera</div>
              <div class="text-label-sm text-slate-gray text-[10px] lg:text-xs truncate">Scan sheets</div>
            </div>
          </div>
          <div class="glass p-3 rounded-xl flex items-center gap-2 lg:gap-3 border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer group">
            <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shrink-0">
              <span class="material-symbols-outlined text-lg" aria-hidden="true">image</span>
            </div>
            <div class="min-w-0">
              <div class="font-label-md text-on-surface text-xs lg:text-sm truncate">Gallery</div>
              <div class="text-label-sm text-slate-gray text-[10px] lg:text-xs truncate">From phone</div>
            </div>
          </div>
          <div class="glass p-3 rounded-xl flex items-center gap-2 lg:gap-3 border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer group">
            <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shrink-0">
              <span class="material-symbols-outlined text-lg" aria-hidden="true">picture_as_pdf</span>
            </div>
            <div class="min-w-0">
              <div class="font-label-md text-on-surface text-xs lg:text-sm truncate">PDF Import</div>
              <div class="text-label-sm text-slate-gray text-[10px] lg:text-xs truncate">Digital files</div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="absolute -inset-16 bg-primary/20 blur-[120px] rounded-full"></div>
        <div class="relative glass border border-outline-variant/40 rounded-3xl overflow-hidden p-2 active-glow max-w-[280px] mx-auto">
          <img alt="A smartphone scanning a physical menu with AI OCR scanner overlay." class="rounded-2xl w-full h-[420px] object-cover opacity-80 ocr-mockup-img" src="assets/pos_phone_mockup.png" loading="lazy" decoding="async" width="280" height="420" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-primary/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col items-center gap-2 animate-pulse">
              <span class="material-symbols-outlined text-4xl text-primary" aria-hidden="true">data_object</span>
              <span class="text-label-md text-on-surface font-bold tracking-widest">DIGITIZING...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: The 5-Step Billing Flow -->
  <section class="bg-surface-container-lowest py-32 border-y border-outline-variant/20">
    <div class="max-w-7xl mx-auto px-margin-desktop">
      <div class="text-center mb-16">
        <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">Precision Billing Flow</h2>
        <p class="text-body-md text-slate-gray max-w-2xl mx-auto">Five intuitive steps designed for high-volume service. No friction, just focus.</p>
      </div>
      <div class="grid md:grid-cols-5 gap-4 relative">
        <!-- Progress Line -->
        <div class="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-outline-variant/30 -z-0"></div>
        
        <!-- Step 1 -->
        <div class="flex flex-col items-center text-center group relative z-10">
          <div class="w-24 h-24 rounded-full glass border-2 border-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-surface-dim shadow-[0_0_20px_rgba(255,182,142,0.3)]">
            <span class="material-symbols-outlined text-primary text-3xl" aria-hidden="true">person_add</span>
          </div>
          <h3 class="font-label-md text-on-surface mb-2">Customer Info</h3>
          <p class="text-label-sm text-slate-gray">Fast lookup via phone</p>
        </div>
        <div class="md:hidden flex justify-center -my-2 z-0">
          <div class="vertical-connector"></div>
        </div>
        
        <!-- Step 2 -->
        <div class="flex flex-col items-center text-center group relative z-10">
          <div class="w-24 h-24 rounded-full glass border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors bg-surface-dim">
            <span class="material-symbols-outlined text-slate-gray group-hover:text-primary text-3xl" aria-hidden="true">restaurant_menu</span>
          </div>
          <h3 class="font-label-md text-on-surface mb-2">Menu Selection</h3>
          <p class="text-label-sm text-slate-gray">Grid-based quick tap</p>
        </div>
        <div class="md:hidden flex justify-center -my-2 z-0">
          <div class="vertical-connector"></div>
        </div>
        
        <!-- Step 3 -->
        <div class="flex flex-col items-center text-center group relative z-10">
          <div class="w-24 h-24 rounded-full glass border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors bg-surface-dim">
            <span class="material-symbols-outlined text-slate-gray group-hover:text-primary text-3xl" aria-hidden="true">shopping_cart_checkout</span>
          </div>
          <h3 class="font-label-md text-on-surface mb-2">Review Order</h3>
          <p class="text-label-sm text-slate-gray">Modify and confirm</p>
        </div>
        <div class="md:hidden flex justify-center -my-2 z-0">
          <div class="vertical-connector"></div>
        </div>
        
        <!-- Step 4 -->
        <div class="flex flex-col items-center text-center group relative z-10">
          <div class="w-24 h-24 rounded-full glass border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors bg-surface-dim">
            <span class="material-symbols-outlined text-slate-gray group-hover:text-primary text-3xl" aria-hidden="true">payments</span>
          </div>
          <h3 class="font-label-md text-on-surface mb-2">Payment</h3>
          <p class="text-label-sm text-slate-gray">UPI, Card, or Cash</p>
        </div>
        <div class="md:hidden flex justify-center -my-2 z-0">
          <div class="vertical-connector"></div>
        </div>
        
        <!-- Step 5 -->
        <div class="flex flex-col items-center text-center group relative z-10">
          <div class="w-24 h-24 rounded-full glass border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors bg-surface-dim">
            <span class="material-symbols-outlined text-slate-gray group-hover:text-primary text-3xl" aria-hidden="true">verified</span>
          </div>
          <h3 class="font-label-md text-on-surface mb-2">Success</h3>
          <p class="text-label-sm text-slate-gray">Digital &amp; Print receipt</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Connectivity & Compliance (Bento Grid) -->
  <section class="max-w-7xl mx-auto px-margin-desktop py-32">
    <h2 class="font-headline-lg text-headline-lg text-on-surface mb-12">Hardware &amp; Compliance</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Bluetooth Printer -->
      <div class="md:col-span-2 glass rounded-3xl p-8 border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
        <div class="flex-1 space-y-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span class="material-symbols-outlined" aria-hidden="true">print</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface">Universal Printing</h3>
          <p class="text-body-md text-slate-gray leading-relaxed">
            Full support for all major Bluetooth thermal printers. Switch between 80mm and 58mm layouts instantly. High-speed printing ensures zero wait time during peak hours.
          </p>
          <div class="flex gap-3">
            <span class="px-3 py-1 bg-surface-container-high rounded text-label-sm text-on-surface">80mm Support</span>
            <span class="px-3 py-1 bg-surface-container-high rounded text-label-sm text-on-surface">58mm Support</span>
            <span class="px-3 py-1 bg-surface-container-high rounded text-label-sm text-on-surface">BT 5.0</span>
          </div>
        </div>
        <div class="w-full md:w-1/3 h-48 bg-midnight-elevated rounded-2xl relative overflow-hidden group">
          <img class="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="A professional black thermal receipt printer" src="assets/thermal_printer.png" loading="lazy" decoding="async" />
        </div>
      </div>
      
      <!-- Compliance Alerts -->
      <div class="glass rounded-3xl p-8 border border-outline-variant/30 space-y-6 flex flex-col justify-between">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-full bg-error-container/30 flex items-center justify-center text-error">
            <span class="material-symbols-outlined" aria-hidden="true">warning</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-on-surface leading-tight">License Safeguard</h3>
          <p class="text-body-sm text-slate-gray">
            Never miss a renewal. Automatic alerts for GST filing dates and FSSAI expiry. 
          </p>
        </div>
        <div class="space-y-2">
          <div class="p-3 bg-error-container/10 border border-error/20 rounded-xl" aria-label="FSSAI Expiry Alert: 14 Days Left">
            <div class="flex justify-between items-center mb-1">
              <span class="text-label-sm font-bold text-error">FSSAI Expiry Alert</span>
              <span class="text-label-xs text-error/80 italic">14 Days Left</span>
            </div>
            <div class="w-full h-1.5 bg-error-container rounded-full overflow-hidden">
              <div class="w-[85%] h-full bg-error"></div>
            </div>
          </div>
          <div class="p-3 border rounded-xl" style="background: var(--color-warn-container); border-color: var(--color-warn-border);" aria-label="GST Filing Alert: 7 Days Left">
            <div class="flex justify-between items-center mb-1">
              <span class="text-label-sm font-bold" style="color: var(--color-warn);">GST Filing Alert</span>
              <span class="text-label-xs italic" style="color: var(--color-on-warn-container);">7 Days Left</span>
            </div>
            <div class="w-full h-1.5 rounded-full overflow-hidden" style="background: var(--color-warn-progress-bg);">
              <div class="h-full rounded-full" style="width:93%; background: var(--color-warn-progress-bar);"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Offline First -->
      <div class="md:col-span-3 glass rounded-3xl p-8 border border-outline-variant/30 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <div class="w-16 h-16 rounded-2xl violet-gradient flex items-center justify-center text-on-primary">
            <span class="material-symbols-outlined text-3xl" aria-hidden="true">database</span>
          </div>
          <div>
            <h3 class="font-headline-md text-headline-md text-on-surface">Offline-First Room Sync</h3>
            <p class="text-body-md text-slate-gray">No internet? No problem. Full POS capabilities locally stored and synced instantly when back online.</p>
          </div>
        </div>
        <div class="hidden lg:flex items-center gap-2">
          <div class="h-1 w-8 bg-primary rounded-full animate-pulse" aria-hidden="true"></div>
          <span class="text-label-sm text-primary font-bold">LIVE SYNC</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Easebuzz & Enterprise Suite -->
  <section class="max-w-7xl mx-auto px-margin-desktop py-32 border-t border-outline-variant/20">
    <div class="text-center mb-20 space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-label-sm font-label-sm">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
        ENTERPRISE COMPLIANCE & SETTLEMENTS
      </div>
      <h2 class="font-headline-lg text-headline-lg text-on-surface">Easebuzz Onboarding &amp; Legal Guard</h2>
      <p class="text-body-md text-slate-gray max-w-2xl mx-auto">Enterprise-grade capabilities built for absolute control, financial routing, and regulatory compliance.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card 1: GST & FSSAI Lookup -->
      <div class="glass p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined" aria-hidden="true">gavel</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface">GSTIN &amp; FSSAI Auto-Lookup</h3>
          <p class="text-body-sm text-slate-gray">
            Instantly fetch legal business details directly from government databases by entering a GSTIN or FSSAI license number. No manual input, zero errors.
          </p>
        </div>
        <div class="mt-8 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-label-sm text-primary font-bold">
          <span>Govt API Connected</span>
          <span class="material-symbols-outlined" aria-hidden="true">sync</span>
        </div>
      </div>

      <!-- Card 2: Split Settlements -->
      <div class="glass p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined" aria-hidden="true">account_balance</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface">Sub-Merchant Splits</h3>
          <p class="text-body-sm text-slate-gray">
            Manage the entire Easebuzz onboarding lifecycle directly from your POS. Split transactions at the ticket level and trigger on-demand settlements straight to bank accounts.
          </p>
        </div>
        <div class="mt-8 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-label-sm text-primary font-bold">
          <span>Powered by Easebuzz v2.1</span>
          <span class="material-symbols-outlined" aria-hidden="true">shield</span>
        </div>
      </div>

      <!-- Card 3: Smart Routing -->
      <div class="glass p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined" aria-hidden="true">router</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface">Intelligent Payment Routing</h3>
          <p class="text-body-sm text-slate-gray">
            Optimize transaction fees and success rates. Auto-routes payments through dynamic bank links and BIN-specific rules based on real-time gateway performance.
          </p>
        </div>
        <div class="mt-8 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-label-sm text-primary font-bold">
          <span>Dynamic Fallbacks</span>
          <span class="material-symbols-outlined" aria-hidden="true">settings_suggest</span>
        </div>
      </div>

      <!-- Card 4: Chargeback Prevention -->
      <div class="glass p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined" aria-hidden="true">shield</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface">Chargeback Prevention</h3>
          <p class="text-body-sm text-slate-gray">
            Detect card fraud before it affects your balance. Real-time velocity scoring blocks suspicious customers who exceed transaction counts or exhibit anomalous behavior.
          </p>
        </div>
        <div class="mt-8 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-label-sm text-primary font-bold">
          <span>Velocity checks (24h window)</span>
          <span class="material-symbols-outlined" aria-hidden="true">lock</span>
        </div>
      </div>

      <!-- Card 5: CCPA/GDPR Privacy -->
      <div class="glass p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined" aria-hidden="true">privacy_tip</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface">Customer Data Privacy</h3>
          <p class="text-body-sm text-slate-gray">
            Fully compliant customer data management. Easily anonymize, export, or flag profiles for opt-out to respect global privacy standards.
          </p>
        </div>
        <div class="mt-8 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-label-sm text-primary font-bold">
          <span>Anonymization &amp; Opt-Out</span>
          <span class="material-symbols-outlined" aria-hidden="true">admin_panel_settings</span>
        </div>
      </div>

      <!-- Card 6: GST Exporter -->
      <div class="glass p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined" aria-hidden="true">csv</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-on-surface">Professional Tax Exports</h3>
          <p class="text-body-sm text-slate-gray">
            Generate government-compliant, line-item-level GST reports in Excel and CSV formats with automated summaries. Export directly from your dashboard.
          </p>
        </div>
        <div class="mt-8 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-label-sm text-primary font-bold">
          <span>CSV &amp; PDF Formats</span>
          <span class="material-symbols-outlined" aria-hidden="true">download</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Role-based Dashboard -->
  <section class="bg-surface-container-low py-32 border-t border-outline-variant/20">
    <div class="max-w-7xl mx-auto px-margin-desktop">
      <div class="text-center mb-20">
        <h2 class="font-headline-lg text-headline-lg text-on-surface">Tailored for Every Role</h2>
        <p class="text-body-md text-slate-gray">The right tools in the right hands.</p>
      </div>
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Owner View -->
        <div class="group">
          <div class="glass p-8 rounded-3xl border border-outline-variant/30 h-full hover:border-primary/40 transition-all flex flex-col">
            <div class="flex justify-between items-start mb-8">
              <div>
                <h3 class="text-headline-md font-headline-md text-on-surface mb-2">Owner Dashboard</h3>
                <p class="text-label-md text-slate-gray">Strategic Control &amp; Insights</p>
              </div>
              <span class="material-symbols-outlined text-4xl text-primary" style="font-variation-settings: 'FILL' 1;" aria-hidden="true">admin_panel_settings</span>
            </div>
            <div class="space-y-4 flex-grow">
              <div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high/50 border border-outline-variant/10">
                <span class="material-symbols-outlined text-primary" aria-hidden="true">bar_chart</span>
                <span class="text-body-md text-on-surface">Real-time Revenue Reports</span>
              </div>
              <div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high/50 border border-outline-variant/10">
                <span class="material-symbols-outlined text-primary" aria-hidden="true">inventory_2</span>
                <span class="text-body-md text-on-surface">Global Management</span>
              </div>
              <div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high/50 border border-outline-variant/10">
                <span class="material-symbols-outlined text-primary" aria-hidden="true">settings_suggest</span>
                <span class="text-body-md text-on-surface">Advanced System Configuration</span>
              </div>
            </div>
            <div class="mt-8 relative h-40 rounded-2xl bg-midnight-surface overflow-hidden border border-outline-variant/20">
              <div class="mockup-container">
                <img class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" alt="Owner dashboard mockup display" src="assets/owner_dashboard_mockup.png" loading="lazy" decoding="async" width="1024" height="1024" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
        </div>
        
        <!-- Staff View -->
        <div class="group">
          <div class="glass p-8 rounded-3xl border border-outline-variant/30 h-full hover:border-tertiary/40 transition-all flex flex-col">
            <div class="flex justify-between items-start mb-8">
              <div>
                <h3 class="text-headline-md font-headline-md text-on-surface mb-2">Staff Terminal</h3>
                <p class="text-label-md text-slate-gray">Operational Speed &amp; Efficiency</p>
              </div>
              <span class="material-symbols-outlined text-4xl text-tertiary" style="font-variation-settings: 'FILL' 1;" aria-hidden="true">point_of_sale</span>
            </div>
            <div class="space-y-4 flex-grow">
              <div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high/50 border border-outline-variant/10">
                <span class="material-symbols-outlined text-tertiary" aria-hidden="true">receipt_long</span>
                <span class="text-body-md text-on-surface">Lightning-fast Billing Flow</span>
              </div>
              <div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high/50 border border-outline-variant/10">
                <span class="material-symbols-outlined text-tertiary" aria-hidden="true">table_restaurant</span>
                <span class="text-body-md text-on-surface">Live Order Management</span>
              </div>
              <div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high/50 border border-outline-variant/10">
                <span class="material-symbols-outlined text-tertiary" aria-hidden="true">history</span>
                <span class="text-body-md text-on-surface">Personal Daily Sales Log</span>
              </div>
            </div>
            <div class="mt-8 relative h-40 rounded-2xl bg-midnight-surface overflow-hidden border border-outline-variant/20">
              <div class="mockup-container">
                <img class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" alt="Staff terminal mockup display" src="assets/staff_terminal_mockup.png" loading="lazy" decoding="async" width="1024" height="641" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why KhanaBook — Comparison Section -->
  <section class="max-w-7xl mx-auto px-margin-desktop mt-40 mb-20" id="why-khanabook">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- LEFT -->
      <div>
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
          <span class="material-symbols-outlined text-xs" aria-hidden="true">emoji_events</span>
          WHY KHANABOOK
        </div>
        <h2 class="text-3xl font-extrabold text-on-surface mb-4 leading-tight">
          How we compare to<br>the <span class="text-primary">competition</span>
        </h2>
        <p class="text-sm text-on-surface-variant mb-8 leading-relaxed" style="max-width:400px;">
          Offline-first architecture, AI OCR menu import, sub-merchant payment splitting and dual Bluetooth printing are features you won't find in Petpooja or Limetray — at any price tier.
        </p>

        <div class="space-y-3">
          <div class="glass-interactive glass-card p-4 rounded-2xl flex gap-4 items-start transition-colors">
            <div style="min-width:40px; height:40px; border-radius:10px; background:rgba(124, 58, 237,.12); display:flex; align-items:center; justify-content:center;">
              <span class="material-symbols-outlined text-primary icon-filled icon-size-20" aria-hidden="true">wifi_off</span>
            </div>
            <div>
              <p class="font-semibold text-sm text-on-surface mb-0.5">True Offline-First (SQLCipher + Room DB)</p>
              <p class="text-xs text-on-surface-variant leading-relaxed">Bill, accept payment, and print receipts with zero internet. Encrypted local DB syncs automatically on reconnect via WorkManager.</p>
            </div>
          </div>
          <div class="glass-interactive glass-card p-4 rounded-2xl flex gap-4 items-start transition-colors">
            <div style="min-width:40px; height:40px; border-radius:10px; background:rgba(124, 58, 237,.12); display:flex; align-items:center; justify-content:center;">
              <span class="material-symbols-outlined text-primary icon-filled icon-size-20" aria-hidden="true">document_scanner</span>
            </div>
            <div>
              <p class="font-semibold text-sm text-on-surface mb-0.5">AI OCR Menu Import (ML Kit + Spatial Parser)</p>
              <p class="text-xs text-on-surface-variant leading-relaxed">Scan a printed menu or upload a PDF — Google ML Kit extracts item names, prices, variants and categories automatically.</p>
            </div>
          </div>
          <div class="glass-interactive glass-card p-4 rounded-2xl flex gap-4 items-start transition-colors">
            <div style="min-width:40px; height:40px; border-radius:10px; background:rgba(124, 58, 237,.12); display:flex; align-items:center; justify-content:center;">
              <span class="material-symbols-outlined text-primary icon-filled icon-size-20" aria-hidden="true">account_balance</span>
            </div>
            <div>
              <p class="font-semibold text-sm text-on-surface mb-0.5">Easebuzz Sub-Merchant Direct Settlements</p>
              <p class="text-xs text-on-surface-variant leading-relaxed">Money flows directly to your bank — T+1 settlements, no middleman, no manual reconciliation.</p>
            </div>
          </div>
          <div class="glass-interactive glass-card p-4 rounded-2xl flex gap-4 items-start transition-colors">
            <div style="min-width:40px; height:40px; border-radius:10px; background:rgba(124, 58, 237,.12); display:flex; align-items:center; justify-content:center;">
              <span class="material-symbols-outlined text-primary icon-filled icon-size-20" aria-hidden="true">print</span>
            </div>
            <div>
              <p class="font-semibold text-sm text-on-surface mb-0.5">Dual Bluetooth Printer (Receipt + Kitchen)</p>
              <p class="text-xs text-on-surface-variant leading-relaxed">Simultaneous print to customer receipt printer and kitchen ticket printer. Queue auto-flushes on reconnect.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Comparison Table -->
      <div class="glass-card rounded-3xl overflow-hidden">
        <div class="compare-table-wrapper">
          <table class="compare-table">
            <thead>
              <tr class="header-row">
                <th class="sticky-col-header feature-header">Feature</th>
                <th class="kb-header">KhanaBook</th>
                <th>Petpooja</th>
                <th>Loyverse</th>
                <th>Limetray</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="sticky-col-body feature-name">Offline-First Billing</td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span style="font-size:11px; font-weight:700; color:#f59e0b;">Partial</span>
                  <span class="sr-only">Partially Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td class="sticky-col-body feature-name">AI OCR Menu Import</td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td class="sticky-col-body feature-name">Sub-Merchant Payment Splits</td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td class="sticky-col-body feature-name">Split Payments (Cash + UPI)</td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td class="sticky-col-body feature-name">Dual Printer (Receipt + Kitchen)</td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td class="sticky-col-body feature-name">Android Native (Jetpack Compose)</td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td class="sticky-col-body feature-name">AES-256 Local Encryption</td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td class="sticky-col-body feature-name">WhatsApp Invoice Sharing</td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td class="sticky-col-body feature-name">Swiggy + Zomato Integration</td>
                <td>
                  <span class="soon-badge">Soon</span>
                  <span class="sr-only">Coming Soon</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
              </tr>
              <tr>
                <td class="sticky-col-body feature-name">GST + FSSAI Auto-Lookup</td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td class="sticky-col-body feature-name">First Year Free Offer</td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-tertiary icon-filled icon-size-20" aria-hidden="true">check_circle</span>
                  <span class="sr-only">Supported</span>
                </td>
                <td>
                  <span class="material-symbols-outlined text-outline-variant icon-size-20" aria-hidden="true">cancel</span>
                  <span class="sr-only">Not Supported</span>
                </td>
              </tr>
              <tr class="score-row">
                <td class="sticky-col-score score-name">KhanaBook Score</td>
                <td class="kb-score">11/11</td>
                <td class="competitor-score">4/11</td>
                <td class="competitor-score">3/11</td>
                <td class="competitor-score">2/11</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-label-sm text-on-surface-variant text-center py-3 md:hidden flex items-center justify-center gap-1">
          <span class="material-symbols-outlined text-sm" aria-hidden="true">swipe</span>
          Swipe to compare
        </p>
        <div style="padding:13px 18px; background:var(--color-surface-container); border-top:1px solid var(--color-outline-variant); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
          <span style="font-size:12px; color:var(--color-on-surface-variant);">Based on publicly available feature lists — June 2026</span>
          <button data-link="get-started" style="background:none; border:none; cursor:pointer; font-size:13px; font-weight:700; color:var(--color-primary); display:flex; align-items:center; gap:4px;">
            Claim Free Year 
            <span class="material-symbols-outlined icon-size-15" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="max-w-7xl mx-auto px-margin-desktop mt-40">
    <div class="bg-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      <h2 class="text-headline-xl font-headline-xl text-on-primary-container mb-6">Ready to digitize your menu?</h2>
      <p class="text-body-lg font-body-lg text-on-primary-container/80 mb-10 max-w-2xl mx-auto">From AI-powered OCR to offline-first billing — experience the most advanced POS platform built for Indian restaurants.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button data-link="get-started" class="bg-surface-dim text-primary px-10 py-5 rounded-2xl font-headline-md text-headline-md hover:scale-105 transition-all shadow-2xl border-none cursor-pointer">Get First Year Free</button>
        <button data-link="get-started" class="border border-on-primary-container/30 text-on-primary-container bg-transparent px-10 py-5 rounded-2xl font-headline-md text-headline-md hover:bg-primary-container/80 transition-all cursor-pointer">Contact Sales</button>
      </div>
    </div>
  </section>
`;

export function init() {
  // Features route-specific initialization routines go here
}

export function destroy() {
  // Features route-specific cleanups go here
}
