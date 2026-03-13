/* ============================================
   NexLock — Brand Styles
   Color palette from concept board
   ============================================ */

:root {
  --deep-navy: #071843;
  --blue: #2F4A6D;
  --muted-blue: #7C9DBD;
  --light-gray: #E4E9EF;
  --off-white: #F7F4EF;
  --accent-orange: #F26A2E;

  --bg-primary: var(--off-white);
  --bg-secondary: #fff;
  --text-primary: var(--deep-navy);
  --text-secondary: var(--blue);
  --text-muted: var(--muted-blue);
  --border-color: var(--light-gray);
  --shadow-color: rgba(7, 24, 67, 0.08);
  --header-bg: rgba(247, 244, 239, 0.95);

  --ease-out: cubic-bezier(.22, 1, .36, 1);
  --radius-xl: 18px;
  --radius-lg: 14px;
  --radius-md: 12px;
}

[data-theme="dark"] {
  --bg-primary: #0d1629;
  --bg-secondary: var(--deep-navy);
  --text-primary: var(--off-white);
  --text-secondary: var(--light-gray);
  --text-muted: var(--muted-blue);
  --border-color: var(--blue);
  --shadow-color: rgba(0, 0, 0, 0.3);
  --header-bg: rgba(7, 24, 67, 0.95);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Noto Sans Thai", system-ui, -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.bg-grid {
  position: fixed;
  inset: 0;
  z-index: -3;
  background:
    linear-gradient(to right, rgba(47,74,109,.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(47,74,109,.06) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(circle at 50% 10%, black 0%, transparent 60%);
  pointer-events: none;
}

.bg-orb {
  position: fixed;
  width: 680px;
  height: 680px;
  border-radius: 999px;
  filter: blur(70px);
  opacity: .55;
  z-index: -4;
  pointer-events: none;
}

.bg-orb--a {
  top: -240px;
  left: -200px;
  background: radial-gradient(circle at 30% 30%, rgba(242,106,46,.55), transparent 60%);
}

.bg-orb--b {
  bottom: -260px;
  right: -220px;
  background: radial-gradient(circle at 30% 30%, rgba(124,157,189,.55), transparent 62%);
}

h1, h2, h3 {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 600;
}

a {
  color: var(--accent-orange);
  text-decoration: none;
  transition: color 0.2s ease, opacity 0.2s ease;
}

a:hover {
  opacity: 0.85;
}

.container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--header-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  transition: background 0.3s ease;
}

.header.is-scrolled {
  box-shadow: 0 10px 30px var(--shadow-color);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1150px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  height: 76px;
}

.logo-link {
  display: block;
}

.logo {
  height: 76px;
  width: auto;
  display: block;
  transform: scale(1.55);
  transform-origin: left center;
}

.nav {
  display: none;
  gap: 2rem;
}

.nav-link {
  color: var(--text-primary);
  font-weight: 500;
  position: relative;
  background: transparent;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-orange), rgba(242,106,46,0));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .25s var(--ease-out);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-link:hover {
  color: var(--accent-orange);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
}

.theme-toggle:hover {
  background: var(--light-gray);
}

.theme-icon {
  position: absolute;
  font-size: 1.2rem;
}

.theme-icon.moon {
  display: none;
}

[data-theme="dark"] .theme-icon.sun {
  display: none;
}

[data-theme="dark"] .theme-icon.moon {
  display: inline;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-line {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.3s ease;
}

.hamburger[aria-expanded="true"] .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger[aria-expanded="true"] .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger[aria-expanded="true"] .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--header-bg);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.mobile-menu.is-open {
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.mobile-nav-link {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-primary);
}

.mobile-nav-link:hover {
  color: var(--accent-orange);
}

@media (min-width: 768px) {
  .nav {
    display: flex;
  }

  .hamburger {
    display: none;
  }
}

/* Hero */

.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 5rem 0;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  max-width: 800px;
  height: 80%;
  background: radial-gradient(
    ellipse at center,
    rgba(47, 74, 109, 0.15) 0%,
    rgba(242, 106, 46, 0.08) 40%,
    transparent 70%
  );
  pointer-events: none;
}

.hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 2rem;
  min-height: 80vh;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 560px;
  min-width: 0;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  padding: .5rem .75rem;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: rgba(255,255,255,.55);
  color: var(--text-secondary);
  width: fit-content;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin-bottom: 1.25rem;
}

[data-theme="dark"] .hero-badge {
  background: rgba(7,24,67,.55);
}

.badge-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--accent-orange);
  box-shadow: 0 0 0 6px rgba(242,106,46,.12);
}

.hero-product {
  margin: .75rem 0 .25rem 0;
  font-weight: 600;
  letter-spacing: .2px;
  color: var(--text-secondary);
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
  margin: 0 0 1rem 0;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 0 2rem 0;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
  margin-top: 1.75rem;
}

.metric {
  display: inline-flex;
  align-items: baseline;
  gap: .5rem;
  padding: .6rem .8rem;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: rgba(255,255,255,.55);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

[data-theme="dark"] .metric {
  background: rgba(7,24,67,.55);
}

.metric-k {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 700;
  color: var(--text-primary);
}

.metric-l {
  color: var(--text-secondary);
  font-size: .95rem;
}

/* Buttons */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background .2s var(--ease-out), color .2s var(--ease-out), transform .2s var(--ease-out), box-shadow .2s var(--ease-out);
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--accent-orange);
  color: white;
  box-shadow: 0 10px 30px rgba(242,106,46,.22);
}

.btn-primary:hover {
  background: #e05a22;
  color: white;
}

.btn-secondary {
  background: transparent;
  color: var(--blue);
  border: 2px solid var(--blue);
}

.btn-secondary:hover {
  background: var(--blue);
  color: white;
  box-shadow: 0 10px 30px rgba(47,74,109,.18);
}

.btn-download {
  background: var(--deep-navy);
  color: white;
  margin-top: 1rem;
}

.btn-download:hover {
  background: var(--blue);
  color: white;
}

/* Sections */

.section {
  padding: 4rem 0;
}

.section-alt {
  background: linear-gradient(180deg, rgba(124,157,189,.08), transparent 70%);
  border-top: 1px solid rgba(124,157,189,.18);
  border-bottom: 1px solid rgba(124,157,189,.18);
}

[data-theme="dark"] .section-alt {
  background: linear-gradient(180deg, rgba(47,74,109,.22), transparent 70%);
  border-top: 1px solid rgba(124,157,189,.22);
  border-bottom: 1px solid rgba(124,157,189,.22);
}

.section-title {
  font-size: 2rem;
  margin: 0 0 2rem 0;
  text-align: center;
  color: var(--text-primary);
}

.about-intro {
  max-width: 640px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
  color: var(--text-secondary);
}

.creators {
  max-width: 820px;
  margin: 0 auto;
}

.creators-heading {
  font-size: 1.4rem;
  text-align: center;
  margin: 0 0 1.5rem 0;
  color: var(--text-primary);
}

.creators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.creator-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  box-shadow: 0 6px 28px var(--shadow-color);
  padding: 1.5rem 1.5rem 1.75rem 1.5rem;
  text-align: center;
  transition: transform .3s var(--ease-out), box-shadow .3s var(--ease-out), border-color .3s var(--ease-out);
}

.creator-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 36px var(--shadow-color);
  border-color: rgba(242,106,46,.3);
}

.creator-image {
  width: 100%;
  height: auto;
  border-radius: 16px;
  margin-bottom: 1rem;
  display: block;
}

.creator-name {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.creator-meta {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-muted);
}

.research-intro {
  max-width: 640px;
  margin: 0 auto 2.25rem auto;
  text-align: center;
  color: var(--text-secondary);
}

.abstract-text {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  color: var(--text-secondary);
}

.research-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  max-width: 980px;
  margin: 0 auto;
}

.research-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  box-shadow: 0 6px 28px var(--shadow-color);
  padding: 1.5rem 1.5rem 1.75rem 1.5rem;
  transition: transform .3s var(--ease-out), box-shadow .3s var(--ease-out), border-color .3s var(--ease-out);
}

.research-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 36px var(--shadow-color);
  border-color: rgba(242,106,46,.3);
}

.research-image-wrapper {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: var(--bg-primary);
}

.research-image {
  width: 100%;
  height: auto;
  display: block;
}

.research-caption {
  margin: 0.75rem 0 0 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
  text-align: center;
}

.section-header {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 2.5rem auto;
}

.section-subtitle {
  margin: 0.75rem auto 0 auto;
  color: var(--text-secondary);
  max-width: 720px;
}

.solution-block {
  max-width: 1040px;
  margin: 0 auto;
}

.solution-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  align-items: start;
}

@media (min-width: 920px) {
  .solution-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.25rem;
    align-items: center;
  }

  .solution-grid--reverse .solution-media { order: 2; }
  .solution-grid--reverse .solution-content { order: 1; }
}

.solution-media-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-color);
  box-shadow: 0 6px 28px var(--shadow-color);
  padding: 1rem;
  transition: transform .3s var(--ease-out), box-shadow .3s var(--ease-out), border-color .3s var(--ease-out);
}

.solution-media-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 36px var(--shadow-color);
  border-color: rgba(242,106,46,.3);
}

.solution-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  background: var(--bg-primary);
}

.solution-label {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: var(--text-muted);
  letter-spacing: .02em;
}

.solution-title {
  margin: 0;
  font-size: clamp(1.3rem, 1.1rem + 0.8vw, 1.75rem);
  line-height: 1.15;
}

.solution-title-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.8rem;
  align-items: baseline;
}

.solution-overview {
  margin: 0.85rem 0 1.25rem 0;
  color: var(--text-secondary);
}

.solution-lists {
  display: grid;
  gap: 1rem;
}

.solution-list {
  background: rgba(255,255,255,.55);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 1rem 1rem 0.9rem 1rem;
  box-shadow: 0 6px 22px var(--shadow-color);
}

[data-theme="dark"] .solution-list {
  background: rgba(7,24,67,.42);
}

.solution-list-title {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.solution-list ul {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--text-secondary);
}

.solution-list li {
  margin: 0.35rem 0;
}

.section-divider {
  max-width: 1040px;
  margin: 2.25rem auto;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124,157,189,.35), transparent);
}

/* Reveal */

.reveal {
  opacity: 0;
  transform: translateY(28px);
  filter: blur(6px);
  transition: opacity .7s var(--ease-out), transform .7s var(--ease-out), filter .7s var(--ease-out);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform, filter;
}

.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.reveal[data-reveal="fade-left"] { transform: translateX(28px); }
.reveal[data-reveal="fade-right"] { transform: translateX(-28px); }

.reveal.in-view[data-reveal="fade-left"],
.reveal.in-view[data-reveal="fade-right"] {
  transform: translateX(0);
}

/* Contact */

.contact-email {
  text-align: center;
  margin: 0 0 2rem 0;
}

.contact-email a {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
}

.contact-form {
  max-width: 480px;
  margin: 0 auto 1rem auto;
  background: rgba(255,255,255,.6);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 1.25rem;
  box-shadow: 0 10px 40px var(--shadow-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

[data-theme="dark"] .contact-form {
  background: rgba(7,24,67,.55);
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: inherit;
  font-size: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 10px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-orange);
}

.form-group input.error,
.form-group textarea.error {
  border-color: var(--accent-orange);
}

.form-group .error-message {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--accent-orange);
  min-height: 1.25rem;
}

.demo-message {
  text-align: center;
  padding: 1rem;
  background: var(--light-gray);
  border-radius: 10px;
  max-width: 480px;
  margin: 0 auto;
  color: var(--text-secondary);
}

.demo-message a {
  font-weight: 600;
}

/* Footer */

.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 3rem 0;
  text-align: center;
}

.footer-logo {
  height: 78px;
  width: auto;
  display: block;
  margin: 0 auto 1rem auto;
  transform: scale(1.55);
  transform-origin: center top;
}

.footer-tagline {
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.back-to-top {
  font-size: 0.9rem;
  color: var(--muted-blue);
}

.back-to-top:hover {
  color: var(--accent-orange);
}

/* Desktop dropdown */

.nav-dropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.nav-dropdown-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.nav-dropdown-toggle .chev {
  font-size: 0.85em;
  opacity: 0.75;
  transition: transform 0.2s ease;
}

.nav-dropdown-toggle[aria-expanded="true"] .chev {
  transform: rotate(180deg);
}

.nav-dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 320px;
  padding: 10px;
  border-radius: 16px;
  background: var(--bg-secondary);
  box-shadow: 0 10px 30px var(--shadow-color);
  border: 1px solid rgba(124, 157, 189, 0.22);
  display: none;
  z-index: 100;
}

.nav-dropdown.is-open .nav-dropdown-menu {
  display: grid;
  gap: 6px;
}

.nav-dropdown-item {
  display: block;
  padding: 10px 12px;
  border-radius: 12px;
  color: var(--text-primary);
  text-decoration: none;
  transition: transform 0.18s ease, background 0.18s ease;
}

.nav-dropdown-item:hover {
  background: rgba(124, 157, 189, 0.18);
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .nav-dropdown {
    display: none;
  }
}

/* Lock demo */

.lock-demo {
  width: 100%;
  max-width: 480px;
  display: flex;
  justify-content: center;
}

.lock-demo__card {
  width: min(480px, 100%);
  border: 1px solid rgba(47, 74, 109, 0.18);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.48);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 18px 50px rgba(7, 24, 67, 0.10);
  overflow: hidden;
  transition: box-shadow 0.45s ease;
}

[data-theme="dark"] .lock-demo__card {
  background: rgba(7, 24, 67, 0.42);
  border-color: rgba(124, 157, 189, 0.22);
}

.lock-demo__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem 0.85rem;
  border-bottom: 1px solid rgba(124, 157, 189, 0.15);
}

.lock-demo__label {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.lock-demo__status {
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(124, 157, 189, 0.14);
  border: 1px solid rgba(124, 157, 189, 0.28);
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  color: var(--text-primary);
  transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease;
}

.lock-demo__scene {
  padding: 0.6rem 1.25rem 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.lock {
  width: 180px;
  height: 210px;
  position: relative;
  filter: drop-shadow(0 16px 32px rgba(7, 24, 67, 0.20));
  overflow: visible;
}

.lock__shackle-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  height: 115px;
  overflow: visible;
  z-index: 2;
}

.lock__shackle-group {
  transition: transform 0.58s cubic-bezier(0.34, 1.3, 0.64, 1);
}

.lock__shackle-path {
  transition: stroke 0.4s ease;
}

[data-theme="dark"] .lock__shackle-path {
  stroke: rgba(124, 157, 189, 0.92) !important;
}

.lock__body {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 172px;
  height: 130px;
  border-radius: 22px;
  background: linear-gradient(160deg, rgba(7, 24, 67, 0.98), rgba(47, 74, 109, 0.96));
  border: 1px solid rgba(228, 233, 239, 0.14);
  display: grid;
  place-items: center;
  box-shadow: 0 16px 38px rgba(7, 24, 67, 0.24);
  overflow: hidden;
  transition: box-shadow 0.45s ease;
  z-index: 3;
}

.lock__body::before {
  content: "";
  position: absolute;
  inset: -30px;
  background:
    radial-gradient(circle at 35% 30%, rgba(242, 106, 46, 0.14), transparent 45%),
    radial-gradient(circle at 72% 68%, rgba(124, 157, 189, 0.16), transparent 48%);
  filter: blur(12px);
  pointer-events: none;
}

.lock__sensor {
  width: 76px;
  height: 76px;
  border-radius: 20px;
  background: rgba(228, 233, 239, 0.10);
  border: 1px solid rgba(228, 233, 239, 0.20);
  position: relative;
  display: grid;
  place-items: center;
  cursor: pointer;
  outline: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 2;
  appearance: none;
  -webkit-appearance: none;
}

.lock__sensor:hover,
.lock__sensor:focus-visible {
  transform: scale(1.05);
  box-shadow: 0 0 0 3px rgba(242, 106, 46, 0.30), 0 8px 24px rgba(242, 106, 46, 0.18);
}

.lock__sensor-glow,
.lock__scan,
.lock__sensor-lines {
  pointer-events: none;
}

.lock__sensor-glow {
  position: absolute;
  inset: -20px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(242, 106, 46, 0.28), transparent 60%);
  filter: blur(10px);
  opacity: 0.65;
  animation: sensorPulse 2.2s ease-in-out infinite;
}

.lock__sensor-lines {
  width: 46px;
  height: 46px;
  position: relative;
  z-index: 3;
  border-radius: 999px;
  background: repeating-linear-gradient(
    to bottom,
    rgba(228, 233, 239, 0.82) 0 3px,
    transparent 3px 7px
  );
  clip-path: ellipse(48% 50% at 50% 50%);
}

.lock__scan {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, rgba(242, 106, 46, 0.95), transparent);
  opacity: 0;
  filter: drop-shadow(0 0 5px rgba(242, 106, 46, 0.55));
  z-index: 4;
  transform: translateY(0);
}

.lock-demo__hint {
  font-size: 0.94rem;
  color: var(--text-secondary);
  text-align: center;
  line-height: 1.5;
  max-width: 380px;
}

.lock-demo__card.is-unlocked .lock-demo__status {
  background: rgba(242, 106, 46, 0.16);
  border-color: rgba(242, 106, 46, 0.45);
  color: var(--accent-orange);
}

.lock-demo__card.is-unlocked .lock__body {
  box-shadow: 0 16px 38px rgba(242, 106, 46, 0.20), 0 6px 18px rgba(7, 24, 67, 0.18);
}

.lock-demo__card.is-unlocked .lock__scan {
  opacity: 1;
  animation: scanMove 1s ease-in-out infinite;
}

.lock-demo__card:not(.is-unlocked) .lock__scan {
  opacity: 0.25;
  animation: scanIdle 3s ease-in-out infinite;
}

@keyframes sensorPulse {
  0%, 100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.8;
  }
}

@keyframes scanMove {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(52px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes scanIdle {
  0%, 100% {
    transform: translateY(10px);
    opacity: 0.16;
  }
  50% {
    transform: translateY(42px);
    opacity: 0.3;
  }
}

/* Responsive */

@media (max-width: 900px) {
  .hero-layout {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
    min-height: auto;
  }

  .hero-content {
    max-width: 100%;
    margin: 0 auto;
  }

  .hero-buttons,
  .hero-metrics {
    justify-content: center;
  }

  .hero-badge,
  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }

  .lock-demo {
    margin: 1rem auto 0;
  }

  .lock-demo__card {
    width: min(420px, 100%);
  }
}

@media (max-width: 640px) {
  .lock-demo__card {
    border-radius: 20px;
  }

  .lock-demo__header {
    padding: 0.9rem 1rem 0.8rem;
  }

  .lock-demo__scene {
    padding: 0.5rem 1rem 1.2rem;
  }

  .lock {
    transform: scale(0.92);
    transform-origin: center top;
  }

  .lock-demo__hint {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .header-inner {
    height: 68px;
  }

  .logo {
    height: 68px;
    transform: scale(1.45);
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
