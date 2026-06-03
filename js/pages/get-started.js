/**
 * Get Started / Contact Page Layout Module
 */

export const html = `
  <section class="flex-grow pt-12 pb-section-desktop relative">
    <div class="hero-gradient absolute top-0 left-0 w-full h-[600px] -z-10" style="background: radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.12) 0%, transparent 70%);"></div>
    <div class="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
      <!-- Left Side: Contact Info & Branding -->
      <div class="lg:col-span-5 space-y-xl lg:sticky lg:top-28">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-fixed-dim text-label-caps font-label-caps tracking-widest uppercase animate-fade-in">
          Get in Touch
        </div>
        <h1 class="font-display-lg text-display-lg leading-tight lg:text-display-lg lg:font-display-lg md:text-display-lg-mobile md:font-display-lg-mobile animate-fade-in" style="animation-delay: 0.1s;">
          We'd Love to <br>
          <span class="text-primary">Hear From You.</span>
        </h1>
        <p class="font-body-base text-body-base text-on-surface-variant max-w-md animate-fade-in" style="animation-delay: 0.15s;">
          Whether you have a question, need support, or want to explore how KhanaBook can help your restaurant thrive — our team is ready to help.
        </p>
        <div class="space-y-lg pt-md animate-fade-in" style="animation-delay: 0.2s;">
          <!-- Contact Info 1: Email -->
          <div class="flex items-start gap-md group">
            <div class="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">mail</span>
            </div>
            <div>
              <h3 class="font-body-bold text-body-bold text-on-surface">Email Us</h3>
              <p class="font-body-base text-body-base text-on-surface-variant opacity-80">Reach out anytime at <strong class="text-on-surface">kbook@pcts.tech</strong> — we'll respond within 24 hours.</p>
            </div>
          </div>
          <!-- Contact Info 2: Phone -->
          <div class="flex items-start gap-md group">
            <div class="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">call</span>
            </div>
            <div>
              <h3 class="font-body-bold text-body-bold text-on-surface">Call Us</h3>
              <p class="font-body-base text-body-base text-on-surface-variant opacity-80">Speak directly with our team at <strong class="text-on-surface">+91 94716 76935</strong>.<br>Mon–Sat, 9 AM – 8 PM IST.</p>
            </div>
          </div>
          <!-- Contact Info 3: Chat -->
          <div class="flex items-start gap-md group">
            <div class="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">forum</span>
            </div>
            <div>
              <h3 class="font-body-bold text-body-bold text-on-surface">Live Chat</h3>
              <p class="font-body-base text-body-base text-on-surface-variant opacity-80">Prefer instant answers? Our live chat support is available during business hours for quick assistance.</p>
            </div>
          </div>
        </div>
        <div class="pt-xl border-t border-outline-variant/20 animate-fade-in" style="animation-delay: 0.25s;">
          <div class="flex -space-x-3">
            <img class="w-10 h-10 rounded-full border-2 border-background object-cover" alt="Mumbai restaurant owner portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAjGLjhWn72upcWEB7DBdqkeo6PIXBiaxNOVXZMIQ29_qgwGNE3g6RBx6TwZH6hO-ynNVgrBZY2FbhIM04PYTVWTG9srvfkZqBbk7TsW1MEiN-Kt85htC9AP53rvjYKzUh4KWVXgZxz1dn9s_OWnwmGDFV5MnHGGsD_iQoXPa6iWGE1233p-sJ2yJkYGItA2uIf1Ll-ofu_gaE2G50V2UYiJI75FfRo-gklhqIttLlqM9T5MULKYsP4XSQ2DJi8OLF8gFX7XFYt3w" loading="lazy" decoding="async" width="40" height="40">
            <img class="w-10 h-10 rounded-full border-2 border-background object-cover" alt="Restaurant head chef portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyBR68cVwUP69TbiA4n5GIbHhlNep0dzBdE80pstgDahC0dboHUB8bOemQ1A1OIjIdcRYxPn21sENeikCZ3YbMvTvrDfBBVkZVQjRyTKufxIxmciB4K6g3n1HtagsAA8wUvqxEInRf22aNDFTvS_3tW6k-FJOmEshlHKDkOg_N6YmMUE8MxfXmp3UPsTtutUBk8XAwMCUtTuTb3tsQiPLabd_YgPaAuq0nrDh5cgdK9q_9e65ZhV1nnB1GppywvN2hEgEl8flbZgA" loading="lazy" decoding="async" width="40" height="40">
            <img class="w-10 h-10 rounded-full border-2 border-background object-cover" alt="Hospitality business manager portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb9SnQ2I0sukb0ktamsYWBaxtMGE63ROJbJEqixtjDKmjMOypVkW5RtygqHTZWQxueTeUc7a7u3zB1z0TTLYjbirkx1Y-59bMU8Cs3VV3LuJ-rczbgJBDXRuOoyD9CfyQ3JQHlJ4-pWiZwjRkJkq9jDt26VTtY1XEH86pWAOUrws0-2shzAIkKn-DngSP7S_5TtMtoebud7haGswiNbcFLG3doenAHthtzX8APQi7-ADoWFMKdQSHb2G_RsgyUkdz3-sdoMBtemHQ" loading="lazy" decoding="async" width="40" height="40">
          </div>
          <p class="mt-4 font-body-base text-body-base text-on-surface-variant">
            <span class="text-primary font-bold">99%</span> satisfaction rate from our customers
          </p>
        </div>
      </div>
      <!-- Right Side: Contact Form Card -->
      <div class="lg:col-span-7">
        <div class="glass-card rounded-[16px] p-lg md:p-xl violet-glow animate-fade-in" style="animation-delay: 0.15s;">
          <div class="mb-xl">
            <h2 class="font-headline-md text-headline-md text-on-surface">Send Us a Message</h2>
            <p class="font-body-base text-body-base text-on-surface-variant mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>
          <form class="space-y-lg" id="contact-form" novalidate>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <label class="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest" for="full_name">Full Name <span class="text-error">*</span></label>
                <input class="w-full h-12 bg-surface-container-low border border-outline-variant/50 rounded-lg px-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/30" id="full_name" name="name" placeholder="e.g. Arjun Khanna" type="text" required autocomplete="name">
              </div>
              <div>
                <label class="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest" for="email">Email Address <span class="text-error">*</span></label>
                <input class="w-full h-12 bg-surface-container-low border border-outline-variant/50 rounded-lg px-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/30" id="email" name="email" placeholder="arjun@restaurant.com" type="email" required autocomplete="email">
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <label class="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest" for="phone">Phone Number</label>
                <div class="relative">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-body-base">+91</span>
                  <input class="w-full h-12 bg-surface-container-low border border-outline-variant/50 rounded-lg pl-12 pr-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/30" id="phone" name="phone" placeholder="98765 43210" type="tel" autocomplete="tel">
                </div>
              </div>
              <div>
                <label class="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest" for="restaurant_name">Restaurant Name</label>
                <input class="w-full h-12 bg-surface-container-low border border-outline-variant/50 rounded-lg px-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/30" id="restaurant_name" name="restaurant_name" placeholder="e.g. The Spice Route" type="text" autocomplete="organization">
              </div>
            </div>
            <div>
              <label class="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest" for="subject">Subject <span class="text-error">*</span></label>
              <select class="w-full h-12 bg-surface-container-low border border-outline-variant/50 rounded-lg px-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer" id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales &amp; Pricing</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="feedback">Feedback &amp; Suggestions</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest" for="message">Message <span class="text-error">*</span></label>
              <textarea class="w-full min-h-[140px] bg-surface-container-low border border-outline-variant/50 rounded-lg p-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/30 resize-y" id="message" name="message" placeholder="Tell us how we can help you..." rows="5" required></textarea>
            </div>
            <button class="w-full h-12 bg-primary text-on-primary font-body-bold text-body-bold rounded-lg hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none cursor-pointer border-none" id="submit-btn" type="submit">
              <span class="material-symbols-outlined" style="font-size: 20px;">send</span>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="max-w-7xl mx-auto px-margin-desktop mt-32">
    <div class="bg-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      <h2 class="text-headline-xl font-headline-xl text-on-primary-container mb-6">Ready to get started?</h2>
      <p class="text-body-lg font-body-lg text-on-primary-container/80 mb-10 max-w-2xl mx-auto">Claim the first year free launch offer. Fill out the form above and we'll reach out within 24 hours.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="mailto:kbook@pcts.tech" class="inline-block bg-surface-dim text-primary px-10 py-5 rounded-2xl font-headline-md text-headline-md hover:scale-105 transition-all shadow-2xl">Email Us Directly</a>
        <a href="tel:9471676935" class="inline-block border border-outline-variant/50 text-on-surface px-10 py-5 rounded-2xl font-headline-md text-headline-md hover:bg-surface-container transition-all shadow-2xl">Call +91 94716 76935</a>
      </div>
    </div>
  </section>
`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9\s]{10,15}$/;
let getStartedCleanups = [];

export function init() {
  getStartedCleanups = [];

  const form = document.getElementById('contact-form');
  if (form) {
    const btn = form.querySelector('button[type="submit"]');
    
    const showFieldError = (field, message) => {
      field.classList.add('error-border', 'border-error');
      const error = document.createElement('p');
      error.className = 'field-error text-error text-label-sm mt-1 flex items-center gap-1';
      error.innerHTML = '<span class="material-symbols-outlined text-xs">error</span> ' + message;
      field.parentNode.appendChild(error);
    };

    const submitHandler = async (e) => {
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
        
        if (!value) {
          isValid = false;
          showFieldError(field, 'This field is required');
        } else if (field.type === 'email' && !EMAIL_RE.test(value)) {
          isValid = false;
          showFieldError(field, 'Please enter a valid email address');
        } else if (field.id === 'phone' && value && !PHONE_RE.test(value)) {
          isValid = false;
          showFieldError(field, 'Please enter a valid phone number');
        }
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
        setTimeout(() => {
          btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:20px;">send</span><span>Send Message</span>';
        }, 4000);
      }
    };

    form.addEventListener('submit', submitHandler);
    getStartedCleanups.push(() => form.removeEventListener('submit', submitHandler));
  }
}

export function destroy() {
  getStartedCleanups.forEach(fn => fn());
  getStartedCleanups = [];
}
