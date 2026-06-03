/**
 * Legal & Privacy Page Layout Module
 */

export const html = `
  <main class="pt-20 pb-section-desktop max-w-7xl mx-auto px-margin-desktop relative">
    <div class="hero-gradient absolute top-0 left-0 w-full h-[600px] -z-10"
         style="background: radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.1) 0%, transparent 70%);">
    </div>
    <div class="flex flex-col md:flex-row gap-section-mobile md:gap-section-desktop relative">
      <!-- Sidebar Navigation -->
      <aside class="w-full md:w-64 flex-shrink-0">
        <div class="sticky top-32 space-y-md">
          <div class="mb-xl">
            <span class="font-label-caps text-label-caps text-primary uppercase tracking-widest">Legal &amp; Privacy</span>
            <h1 class="font-headline-md text-headline-md mt-sm">Documentation</h1>
          </div>
          <nav class="flex flex-col gap-xs">
            <a class="p-md rounded-lg flex items-center gap-sm text-on-surface-variant hover:bg-surface-container transition-colors" href="#introduction">
              <span class="material-symbols-outlined text-[20px]">info</span>
              Introduction
            </a>
            <a class="p-md rounded-lg hover:bg-surface-container transition-colors flex items-center gap-sm text-on-surface-variant" href="#data-collection">
              <span class="material-symbols-outlined text-[20px]">database</span>
              Data Collection
            </a>
            <a class="p-md rounded-lg hover:bg-surface-container transition-colors flex items-center gap-sm text-on-surface-variant" href="#usage">
              <span class="material-symbols-outlined text-[20px]">analytics</span>
              How We Use Data
            </a>
            <a class="p-md rounded-lg hover:bg-surface-container transition-colors flex items-center gap-sm text-on-surface-variant" href="#sharing">
              <span class="material-symbols-outlined text-[20px]">share</span>
              Data Sharing
            </a>
            <a class="p-md rounded-lg hover:bg-surface-container transition-colors flex items-center gap-sm text-on-surface-variant" href="#security">
              <span class="material-symbols-outlined text-[20px]">security</span>
              Security Standards
            </a>
          </nav>
          <div class="mt-xl p-lg rounded-xl bg-surface-container-low border border-outline-variant/30">
            <p class="font-body-base text-body-base text-on-surface-variant mb-md">Need legal assistance?</p>
            <button data-link="get-started" class="w-full py-md border border-outline text-on-surface font-body-bold rounded-lg hover:bg-surface-variant transition-colors cursor-pointer bg-transparent">Contact Legal Team</button>
          </div>
        </div>
      </aside>
      <!-- Main Content Area -->
      <div class="flex-1 max-w-[800px]">
        <div class="mb-xl">
          <div class="flex items-center gap-sm mb-md text-on-surface-variant">
            <span class="">Last Updated: January 15, 2024</span>
            <span class="">•</span>
            <span class="">Version 2.4.0</span>
          </div>
          <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Privacy Policy</h1>
          <div class="mt-lg p-lg rounded-xl bg-primary-container/10 border border-primary/20">
            <p class="font-body-base text-body-base text-primary">
              <strong>At a glance:</strong> We value your privacy and only collect data necessary to provide our POS services. We never sell your personal information to third parties.
            </p>
          </div>
        </div>
        <article class="policy-content font-body-base text-body-base">
          <section id="introduction">
            <h2>1. Introduction</h2>
            <p>Welcome to KhanaBook. This Privacy Policy describes how KhanaBook ("we," "us," or "our") collects, uses, and shares your personal information when you use our POS software, hardware, and associated services. By using our services, you agree to the collection and use of information in accordance with this policy.</p>
            <p>Our commitment to security is paramount. We build our systems with privacy-by-design principles to ensure that your business data and your customers' payment information remains protected under the highest industrial standards.</p>
          </section>
          <section id="data-collection">
            <h2>2. Data Collection</h2>
            <p>We collect various types of information for several purposes to provide and improve our service to you. This includes:</p>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, business name, and physical address.</li>
              <li><strong>Transaction Data:</strong> Details of transactions made through our POS terminals, excluding full credit card numbers.</li>
              <li><strong>Hardware Metadata:</strong> Technical information about your POS hardware, including serial numbers and firmware versions.</li>
              <li><strong>Operational Logs:</strong> Usage patterns and system performance metrics to ensure uptime and stability.</li>
            </ul>
          </section>
          <div class="my-xl p-xl rounded-xl glass-card relative overflow-hidden">
            <div class="absolute top-0 right-0 p-lg opacity-10">
              <span class="material-symbols-outlined text-[80px]">gavel</span>
            </div>
            <h3 class="font-headline-md text-headline-md mb-md">Compliance Standard</h3>
            <p class="text-on-surface-variant">KhanaBook is fully compliant with GDPR, CCPA, and PCI-DSS Level 1 security standards. We undergo annual third-party audits to verify our security posture.</p>
          </div>
          <section id="usage">
            <h2>3. How We Use Data</h2>
            <p>The information we collect is utilized to maintain the integrity of your business operations. We use this data to:</p>
            <p>Identify and prevent fraudulent transactions in real-time. Provide you with detailed analytics and reporting tools to help grow your business. Process payments securely through our integrated banking partners. Notify you about critical system updates or hardware maintenance requirements.</p>
          </section>
          <section id="sharing">
            <h2>4. Data Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
            <p>Your data may be shared with:</p>
            <ul>
              <li>Payment processing networks (RuPay, Visa, Mastercard, UPI, etc.)</li>
              <li>Cloud hosting providers (AWS, Google Cloud)</li>
              <li>Regulatory bodies where required by law</li>
            </ul>
          </section>
          <section id="security">
            <h2>5. Security Standards</h2>
            <p>KhanaBook implements industry-standard security measures including end-to-end encryption (E2EE) for all transaction data. Our servers are located in secure facilities with 24/7 surveillance and biometric access controls.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
              <div class="p-lg rounded-lg border border-outline-variant/30 bg-surface-container-low">
                <span class="material-symbols-outlined text-primary mb-sm">lock</span>
                <h4 class="font-body-bold text-body-bold mb-xs">AES-256 Encryption</h4>
                <p class="text-[14px] text-on-surface-variant">All stored data is encrypted at rest using the highest military-grade standards.</p>
              </div>
              <div class="p-lg rounded-lg border border-outline-variant/30 bg-surface-container-low">
                <span class="material-symbols-outlined text-primary mb-sm">verified_user</span>
                <h4 class="font-body-bold text-body-bold mb-xs">MFA Required</h4>
                <p class="text-[14px] text-on-surface-variant">Multi-factor authentication is mandatory for all administrative access.</p>
              </div>
            </div>
          </section>
        </article>
        <div class="mt-section-mobile pt-xl border-t border-outline-variant/30 flex justify-between items-center">
          <p class="text-on-surface-variant">Did this answer your questions?</p>
          <div class="flex gap-md">
            <button class="px-md py-sm rounded-lg border border-outline text-on-surface hover:bg-surface-variant transition-colors flex items-center gap-sm cursor-pointer bg-transparent" id="feedback-yes">
              <span class="material-symbols-outlined text-[18px]">thumb_up</span> Yes
            </button>
            <button class="px-md py-sm rounded-lg border border-outline text-on-surface hover:bg-surface-variant transition-colors flex items-center gap-sm cursor-pointer bg-transparent" id="feedback-no">
              <span class="material-symbols-outlined text-[18px]">thumb_down</span> No
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
`;

let legalCleanups = [];

export function init(globalState) {
  legalCleanups = [];

  // Local feedback button handlers
  const yesBtn = document.getElementById('feedback-yes');
  const noBtn = document.getElementById('feedback-no');

  if (yesBtn) {
    const yesHandler = () => {
      yesBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check</span> Thank you!';
      yesBtn.disabled = true;
      if (noBtn) noBtn.remove();
    };
    yesBtn.addEventListener('click', yesHandler);
    legalCleanups.push(() => yesBtn.removeEventListener('click', yesHandler));
  }

  if (noBtn) {
    const noHandler = () => {
      noBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check</span> Noted!';
      noBtn.disabled = true;
      if (yesBtn) yesBtn.remove();
    };
    noBtn.addEventListener('click', noHandler);
    legalCleanups.push(() => noBtn.removeEventListener('click', noHandler));
  }

  // Sidebar link highlight on scroll or click
  const links = document.querySelectorAll('aside nav a');
  const sections = document.querySelectorAll('article section');

  const highlightSection = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 150; // offset for sticky nav

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    links.forEach(link => {
      const href = link.getAttribute('href');
      const isMatch = href === '#' + currentId;
      link.classList.toggle('bg-surface-container-high', isMatch);
      link.classList.toggle('text-primary', isMatch);
      link.classList.toggle('font-body-bold', isMatch);
      link.classList.toggle('border-l-2', isMatch);
      link.classList.toggle('border-primary', isMatch);
    });
  };

  window.addEventListener('scroll', highlightSection, { passive: true });
  legalCleanups.push(() => window.removeEventListener('scroll', highlightSection));

  highlightSection();
}

export function destroy() {
  legalCleanups.forEach(fn => fn());
  legalCleanups = [];
}
