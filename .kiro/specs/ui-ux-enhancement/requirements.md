# Requirements Document

## Introduction

KhanaBook is an Android POS system for Indian restaurants, marketed via a static multi-page website (home, features, android-pos, blog, get-started, help-center, legal-privacy, our-story, pos-hardware, pricing-plans). The site uses a hand-crafted vanilla CSS design system (`home.css` + `khanabook-premium.css`) with CSS custom properties, a violet/amber primary palette, dark/light theme toggle, 3D glass-card effects, and per-page CSS/JS files.

The current UI has quality issues across both mobile and desktop: inconsistent section spacing, poor visual hierarchy on small screens, hero layout problems on mobile, nav UX gaps, inaccessible buttons, cross-page CSS inconsistencies, color-contrast failures, and rough animation behaviour. This feature defines requirements to systematically resolve all identified issues without changing the underlying framework (no Tailwind, no component libraries — vanilla CSS only).

---

## Glossary

- **Design_System**: The shared CSS variables, typography scale, color tokens, spacing tokens, and component styles defined in `home.css` and `khanabook-premium.css`.
- **Page_CSS**: The per-page stylesheet (`android-pos.css`, `blog.css`, `features.css`, `get-started.css`, `help-center.css`, `legal-privacy.css`, `our-story.css`, `pos-hardware.css`, `pricing-plans.css`).
- **Nav**: The fixed top navigation bar rendered on every page.
- **Mobile_Menu**: The slide-down off-canvas menu revealed by the hamburger button on viewports narrower than 768 px.
- **Hero**: The first full-width section on `home.html` containing the headline, sub-copy, CTAs, stats, and the floating phone mockup visual.
- **Glass_Card**: Any element carrying the `.glass-card` or `.glass-interactive` CSS class.
- **CTA_Button**: Any anchor or button element that initiates a primary conversion action (e.g. "Get First Year Free", "Start First Year Free", "Claim First Year Free").
- **Secondary_Button**: Any anchor or button that initiates a supporting action (e.g. "Watch Demo Video", "See full feature comparison").
- **Bento_Grid**: The 3-column CSS grid of feature cards on the home page.
- **Testimonials_Carousel**: The single-slide testimonial component controlled by prev/next buttons and dot indicators.
- **Footer**: The 4-column site footer present on every page.
- **Viewport_Mobile**: Viewports with a max-width of 767 px.
- **Viewport_Tablet**: Viewports between 768 px and 1023 px wide.
- **Viewport_Desktop**: Viewports 1024 px wide and above.
- **WCAG_AA**: Web Content Accessibility Guidelines 2.1 Level AA contrast requirements (minimum 4.5:1 for normal text, 3:1 for large text and UI components).
- **Reduced_Motion**: The `prefers-reduced-motion: reduce` media query preference.

---

## Requirements

### Requirement 1: Consistent Section Spacing Across All Pages

**User Story:** As a visitor, I want consistent vertical breathing room between content sections, so that the page feels intentional and easy to scan on any device.

#### Acceptance Criteria

1. THE Design_System SHALL define exactly two semantic section-gap CSS custom properties: `--section-gap-desktop` (value: 96px) and `--section-gap-mobile` (value: 56px), and these two values SHALL be different from each other.
2. WHEN a viewport is Viewport_Mobile, THE Design_System SHALL apply `--section-gap-mobile` as the `margin-top` for every `section[data-reveal]` element.
3. WHEN a viewport is Viewport_Desktop, THE Design_System SHALL apply `--section-gap-desktop` as the `margin-top` for every `section[data-reveal]` element.
4. THE Design_System SHALL remove the direct `mt-40` utility class override that sets `margin-top: 10rem` on individual home-page sections, replacing it with the semantic token.
5. FOR ALL Page_CSS files, each file SHALL use `var(--section-gap-desktop)` and `var(--section-gap-mobile)` rather than hardcoded pixel values for inter-section spacing.

---

### Requirement 2: Typography Scale Responsive Adjustment

**User Story:** As a mobile visitor, I want headlines and body text to be legible and properly scaled, so that I can read content without zooming or horizontal scrolling.

#### Acceptance Criteria

1. THE Design_System SHALL define the `text-headline-xl` font size using `clamp(1.875rem, 5vw, 3.5rem)` so it scales fluidly from Viewport_Mobile through Viewport_Desktop.
2. THE Design_System SHALL define the `text-headline-lg` font size using `clamp(1.375rem, 3vw, 2.25rem)`.
3. THE Design_System SHALL define the `text-headline-md` font size using `clamp(1rem, 2vw, 1.5rem)`.
4. THE Design_System SHALL define the `text-body-lg` font size using `clamp(0.938rem, 1.2vw, 1.063rem)` with `line-height: 1.7`.
5. WHEN a viewport is Viewport_Mobile, THE Design_System SHALL set the `line-height` of `text-headline-xl` to `1.05` to prevent excessive vertical height on small screens, regardless of other typography scale definitions. On Viewport_Desktop and Viewport_Tablet, the line-height SHALL use the browser-default or inherited value defined in the base scale.
6. THE Design_System SHALL ensure no text element in any HTML page requires horizontal scrolling on a 320 px wide viewport.

---

### Requirement 3: Hero Section Mobile Layout Fix

**User Story:** As a mobile visitor, I want the Hero section to display clearly in a single-column layout, so that the phone mockup and CTAs are both visible without excessive scrolling.

#### Acceptance Criteria

1. WHEN a viewport is Viewport_Mobile, THE Hero SHALL render as a single column (grid-template-columns: 1fr) with the text block above the visual block.
2. WHEN a viewport is Viewport_Mobile, THE Hero visual block SHALL have a maximum height of 280 px and the `.home-hero-image` SHALL use `object-fit: cover` to avoid distortion.
3. WHEN a viewport is Viewport_Mobile, THE `.home-hero-insight` overlay card SHALL be repositioned to `position: static` and rendered below the hero image, at full container width, so it is not clipped.
4. WHEN a viewport is Viewport_Mobile, THE Hero CTA group (`flex.flex-wrap`) SHALL stack vertically with each CTA_Button at 100% width and center-justified.
5. WHEN a viewport is Viewport_Mobile, THE Hero stats grid SHALL collapse to a 2-column grid with reduced gap (gap: 1rem) so both stat items remain visible.
6. THE Hero radial gradient SHALL cover no more than 60% of viewport width on Viewport_Mobile to avoid colour bleed into body content.

---

### Requirement 4: Navigation UX and Accessibility Improvements

**User Story:** As a user on any device, I want the navigation to behave predictably, support keyboard access, and provide clear focus indicators, so that I can navigate the site efficiently.

#### Acceptance Criteria

1. THE Nav SHALL maintain a minimum touch target height of 44 px for all interactive elements (theme toggle, hamburger button, nav links, CTA_Button) on Viewport_Mobile.
2. WHEN the Mobile_Menu is open, THE Nav hamburger button SHALL have `aria-expanded="true"` and WHEN closed SHALL have `aria-expanded="false"`.
3. THE Mobile_Menu SHALL trap focus within its links while open, and WHEN the Escape key is pressed, THE Mobile_Menu SHALL immediately end focus trapping and close the menu, returning focus to the hamburger button. IF the mobile menu closes due to the Escape key but the `aria-expanded` attribute update fails due to a JavaScript error, THE menu SHALL remain closed and the `aria-expanded` error SHALL not prevent the close action.
4. THE Nav active page link SHALL have a visible active state distinguishable from hover state, using the `.nav-link-active` CSS class with a `color: var(--color-primary)` and a `2px` bottom border in `var(--color-primary)`.
5. WHEN a viewport is Viewport_Mobile and the Mobile_Menu is open, THE Nav SHALL prevent the body from scrolling by applying `overflow: hidden` to the `<body>` element.
6. THE Nav logo image SHALL include a descriptive `alt` attribute of `"KhanaBook Logo"` on every page HTML file.
7. IF a Nav link's `href` matches the current page filename, THEN THE Nav SHALL apply the `.nav-link-active` class to that element via the `setActiveNavLink` function.

---

### Requirement 5: Glass Card and Component Visual Polish

**User Story:** As a visitor, I want card components to feel polished and consistent, so that the UI communicates quality and trust.

#### Acceptance Criteria

1. THE Design_System SHALL define `.glass-card` hover state as `transform: translateY(-3px)` with `transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease`.
2. THE Design_System SHALL ensure `.glass-card` background uses `linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)` in dark theme and `linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 100%)` in light theme.
3. WHEN a user's device indicates Reduced_Motion preference, THE Design_System SHALL set `transition: none` and `animation: none` on all `.glass-card` elements, and SHALL also skip the hover `transform: translateY(-3px)` effect so the card remains stationary.
4. THE Bento_Grid SHALL render with a consistent `gap: 1.25rem` on Viewport_Desktop and `gap: 0.875rem` on Viewport_Mobile.
5. WHEN a viewport is Viewport_Mobile, THE Bento_Grid large cards (`.md:col-span-2`) SHALL span full width (grid-column: 1 / -1).
6. THE Design_System SHALL apply a `min-height: 160px` to all Bento_Grid small cards so icon and headline are not cramped on Viewport_Tablet.

---

### Requirement 6: CTA Button and Interactive Element Accessibility

**User Story:** As any visitor including those using assistive technology, I want CTA buttons to have sufficient colour contrast, clear focus states, and meaningful labels, so that I can confidently trigger actions.

#### Acceptance Criteria

1. THE Design_System SHALL ensure the amber `nav-cta` and `mobile-cta` buttons (`background: linear-gradient(135deg, #fbbf24, #f59e0b)` on dark `#15110a` text) meet WCAG_AA contrast ratio of at least 4.5:1 for the label text.
2. THE Design_System SHALL apply a visible `:focus-visible` ring of `outline: 2px solid var(--color-primary); outline-offset: 3px` to all CTA_Button and Secondary_Button elements.
3. THE Design_System SHALL ensure Secondary_Button elements meet WCAG_AA minimum contrast ratio of 4.5:1 between button label text and button background.
4. WHEN a CTA_Button enters the `:active` CSS state, THE Design_System SHALL immediately apply `transform: translateY(2px)` and reduce box-shadow to communicate physical press feedback, without requiring additional activation conditions.
5. THE Design_System SHALL set `min-height: 44px` and `min-width: 44px` on all interactive button and anchor elements used as buttons to meet touch target guidelines.
6. FOR ALL `<a>` elements that navigate to an external URL, THE Design_System SHALL require `target="_blank"` to be accompanied by `rel="noopener noreferrer"` in the HTML.

---

### Requirement 7: Cross-Page CSS Consistency

**User Story:** As a visitor browsing multiple pages, I want a consistent visual identity and component behaviour across all pages, so that the site feels cohesive.

#### Acceptance Criteria

1. THE Design_System SHALL expose all color, spacing, radius, and typography tokens exclusively via CSS custom properties in `:root` and `.dark` blocks within `home.css`, so every Page_CSS file can reference them via `var()`.
2. WHEN a Page_CSS file defines a component that also exists in `home.css`, THE Page_CSS SHALL use the same CSS custom property tokens rather than hardcoded colour or size values.
3. THE Design_System SHALL define a single `.section-header` utility block (text-align: center, margin-bottom: 3rem, max-width: 640px, mx: auto) used consistently as the section headline container across all pages.
4. THE Design_System SHALL ensure the `.nav-link-active` indicator style is identical across all pages by defining it solely in `home.css` (which all pages load) rather than per-page.
5. FOR ALL HTML pages, THE Nav markup structure SHALL be identical — any structural change to the Nav in `home.html` SHALL be replicated to all other HTML pages.
6. THE Footer markup and CSS SHALL be consistent across all pages, using the same 4-column grid, responsive collapse, and token-based colours.

---

### Requirement 8: Colour Contrast and Readability

**User Story:** As a visitor with visual impairments, I want all text to have sufficient contrast against its background, so that the content is readable.

#### Acceptance Criteria

1. THE Design_System SHALL ensure `var(--color-on-surface-variant)` text on `var(--color-background)` in dark theme achieves a contrast ratio of at least 4.5:1.
2. THE Design_System SHALL ensure `var(--color-on-surface-variant)` text on `var(--color-surface-container)` backgrounds achieves a contrast ratio of at least 4.5:1.
3. THE Design_System SHALL ensure `var(--color-primary)` used for link and accent text on dark theme backgrounds (`#08080b`) achieves a contrast ratio of at least 4.5:1.
4. THE Design_System SHALL ensure placeholder text in form inputs achieves a contrast ratio of at least 3:1 against the input background.
5. WHEN a `.glass-card` contains body text, THE Design_System SHALL ensure that text colour on the card's computed background achieves a contrast ratio of at least 4.5:1.
6. THE Design_System SHALL audit and update the `--color-slate-gray` value in dark theme so that `.text-slate-gray` elements meet WCAG_AA on the dark background.

---

### Requirement 9: Animation and Interaction Polish

**User Story:** As a visitor, I want smooth, purposeful animations that enhance understanding without causing distraction or motion sickness.

#### Acceptance Criteria

1. WHEN a user's device does not indicate Reduced_Motion preference, THE Design_System SHALL animate all `[data-reveal]` elements using a `translateY(24px) + opacity(0) → translateY(0) + opacity(1)` entrance with duration `0.6s` and `cubic-bezier(0.16, 1, 0.3, 1)` easing.
2. WHEN a user's device indicates Reduced_Motion preference, THE Design_System SHALL show all `[data-reveal]` elements as immediately visible (opacity: 1, transform: none) without animation.
3. THE Testimonials_Carousel auto-advance interval SHALL be 5000 ms and SHALL pause when the carousel container receives `mouseenter` or when `focus` enters any control inside the carousel.
4. WHEN a user's device indicates Reduced_Motion preference, THE Testimonials_Carousel SHALL disable auto-advance. Manual navigation via prev/next buttons and dot indicators SHALL remain functional regardless of the Reduced_Motion preference.
5. THE Design_System SHALL limit the 3D card tilt effect (rotateX / rotateY) to a maximum of 8 degrees to avoid excessive distortion on large cards.
6. THE Design_System SHALL ensure the `animate-float` keyframe animation on the hero visual has `animation-duration: 4s` and uses a `cubic-bezier(0.45, 0.05, 0.55, 0.95)` timing function for a smooth bobbing effect.
7. WHEN a user's device indicates Reduced_Motion preference, THE Design_System SHALL set `animation: none` on any element with the `animate-float` class.

---

### Requirement 10: Footer Mobile Layout Fix

**User Story:** As a mobile visitor, I want the footer to display in a readable single-column layout, so that contact info, links, and the app download badge are all accessible.

#### Acceptance Criteria

1. WHEN a viewport is Viewport_Mobile, THE Footer grid SHALL collapse from 4 columns to a single column with `gap: 2rem`.
2. WHEN a viewport is Viewport_Tablet, THE Footer grid SHALL render as 2 columns with `gap: 2rem`.
3. WHEN a viewport is Viewport_Mobile, THE Footer SHALL display the brand block first, followed by link columns, followed by contact and social links.
4. THE Footer Google Play badge link SHALL maintain a minimum touch target size of 44 px height on all viewports.
5. THE Footer copyright year span (`.copyright-year`) SHALL be populated dynamically by the existing JavaScript and SHALL display the current calendar year.
6. WHEN a viewport is Viewport_Mobile, THE Footer link columns SHALL have a visible top-border separator (`border-top: 1px solid var(--color-outline-variant)`) and padding-top of `1.5rem` to visually separate sections.

---

### Requirement 11: Mobile Menu Overlay and Scroll Interaction

**User Story:** As a mobile visitor, I want the navigation menu to open and close smoothly without causing layout shift or scroll confusion.

#### Acceptance Criteria

1. WHEN the Mobile_Menu opens on Viewport_Mobile, THE Design_System SHALL apply a CSS transition of `opacity 200ms ease, transform 200ms ease` for a slide-down entrance (`translateY(-8px) → translateY(0)`).
2. WHEN the Mobile_Menu closes, THE Design_System SHALL reverse the entrance transition before setting `display: none`.
3. WHEN the Mobile_Menu is open, THE body element SHALL have `overflow: hidden` applied for the entire duration the menu remains open to prevent background scroll. WHEN the Mobile_Menu closes, THE body element SHALL have `overflow: hidden` removed to restore normal scrolling.
4. THE Mobile_Menu SHALL display a divider line between the navigation links and the mobile CTA button using `border-top: 1px solid var(--color-outline-variant)` with `padding-top: 0.75rem`.
5. WHEN a Mobile_Menu link is tapped, THE Mobile_Menu SHALL close and navigation SHALL proceed to the linked page.

---

### Requirement 12: Image Optimisation and Loading Behaviour

**User Story:** As a visitor on a slow connection, I want images to load progressively and not cause layout shift, so that the page feels fast.

#### Acceptance Criteria

1. THE Hero image (`pos_phone_billing_mockup.png`) SHALL carry `loading="eager"` (not lazy) since it is above the fold, and all other images on the page SHALL carry `loading="lazy"`.
2. ALL `<img>` elements on every HTML page SHALL define explicit `width` and `height` attributes or use a CSS `aspect-ratio` property to prevent Cumulative Layout Shift.
3. THE Hero image container SHALL define `aspect-ratio: 4 / 3` in CSS so the browser reserves layout space before the image loads.
4. ALL `<img>` elements SHALL include a non-empty, descriptive `alt` attribute. IF an image is purely decorative, THEN THE image SHALL have `alt=""` and `aria-hidden="true"`.
