/**
 * Tours & Travels — Shared Navigation & Footer
 * Injected into every page for consistent UI & cross-page linking.
 * Design System: Navy #0B1F3A + Blue #1E88E5 + Orange #F4A261
 */

(function () {
  // ── Detect active page ──────────────────────────────────────────────────
  const page = window.location.pathname.split('/').pop() || 'home.html';

  function isActive(href) {
    return page === href ? 'active' : '';
  }

  // ── Nav HTML ────────────────────────────────────────────────────────────
  const navHTML = `
  <nav id="site-nav" class="site-nav">
    <div class="nav-inner">
      <!-- Logo (Bigger & Prominent) -->
      <a href="home.html" class="nav-logo" aria-label="Let's Explore DMC Home">
        <img src="images/logo.png" alt="Let's Explore DMC" class="nav-logo-img">
      </a>

      <!-- Clean Main Desktop Links (No Redundant Mega Menus) -->
      <div class="nav-links" id="nav-links">
        <a href="home.html" class="nav-link ${isActive('home.html')}">HOME</a>
        <a href="explore.html" class="nav-link ${isActive('explore.html')}">GROUP TOURS</a>
        <a href="deals.html" class="nav-link ${isActive('deals.html')}">DEALS & PACKAGES</a>
        <a href="booking.html" class="nav-link ${isActive('booking.html')}">CUSTOMISE TRIP</a>
        <a href="reviews.html" class="nav-link ${isActive('reviews.html')}">REVIEWS</a>
        <a href="contact.html" class="nav-link ${isActive('contact.html')}">CONTACT</a>
      </div>

      <!-- Right Actions -->
      <div class="nav-actions">
        <!-- ✨ AI TRIP PLANNER -->
        <a href="ai-travel.html" class="nav-ai-pill ${isActive('ai-travel.html')}" title="AI Trip Planner">
          <span class="ai-sparkle">✨</span>
          <span class="ai-chip-label">AI Trip Planner</span>
        </a>
        <a href="booking.html" class="nav-cta">Plan Trip</a>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <a href="home.html"           class="mobile-link ${isActive('home.html')}"><span class="material-symbols-outlined mr-2">home</span> Home</a>
      <a href="explore.html"        class="mobile-link ${isActive('explore.html')}"><span class="material-symbols-outlined mr-2">groups</span> Group Tours</a>
      <a href="deals.html"          class="mobile-link ${isActive('deals.html')}"><span class="material-symbols-outlined mr-2">auto_awesome</span> Deals & Packages</a>
      <a href="booking.html"        class="mobile-link ${isActive('booking.html')}"><span class="material-symbols-outlined mr-2">edit_calendar</span> Customise Trip</a>
      <a href="ai-travel.html"      class="mobile-link mobile-ai ${isActive('ai-travel.html')}"><span class="material-symbols-outlined mr-2">smart_toy</span> Atlas AI Trip Architect</a>
      <a href="reviews.html"        class="mobile-link ${isActive('reviews.html')}"><span class="material-symbols-outlined mr-2">star</span> Client Reviews</a>
      <a href="contact.html"        class="mobile-link ${isActive('contact.html')}"><span class="material-symbols-outlined mr-2">location_on</span> Contact Us</a>
      <div class="mobile-contact">
        <a href="tel:+918007586871" class="mobile-contact-link"><span class="material-symbols-outlined text-base align-middle mr-1">call</span> +91-8007586871</a>
        <a href="https://wa.me/918007586871" target="_blank" class="mobile-wa-btn">WhatsApp Us</a>
      </div>
    </div>
  </nav>`;

  // ── Footer HTML ─────────────────────────────────────────────────────────
  const footerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="home.html" style="display: inline-block; margin-bottom: 12px;">
          <img src="images/logo.png" alt="Let's Explore DMC Logo" style="height: 76px; width: auto; border-radius: 10px; object-fit: contain; filter: drop-shadow(0 4px 14px rgba(0,0,0,0.18));" />
        </a>
        <p class="footer-tagline">Real packages. Real prices.<br>From Amravati to the world.</p>
        <div class="footer-social">
          <a href="https://wa.me/918007586871" target="_blank" class="social-btn wa">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://instagram.com/lets_exploredmc" target="_blank" class="social-btn ig">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="mailto:letsexploredmc@gmail.com" class="social-btn email">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h5>Destinations</h5>
        <a href="georgia-package.html"><span class="material-symbols-outlined text-[15px] align-middle mr-1 opacity-60">landscape</span>Georgia ($300)</a>
        <a href="turkey-package.html"><span class="material-symbols-outlined text-[15px] align-middle mr-1 opacity-60">flight</span>Turkey</a>
        <a href="deals.html"><span class="material-symbols-outlined text-[15px] align-middle mr-1 opacity-60">apartment</span>Dubai</a>
        <a href="deals.html"><span class="material-symbols-outlined text-[15px] align-middle mr-1 opacity-60">palette</span>Thailand</a>
        <a href="deals.html"><span class="material-symbols-outlined text-[15px] align-middle mr-1 opacity-60">wb_sunny</span>Bali</a>
        <a href="deals.html"><span class="material-symbols-outlined text-[15px] align-middle mr-1 opacity-60">beach_access</span>Goa</a>
        <a href="deals.html"><span class="material-symbols-outlined text-[15px] align-middle mr-1 opacity-60">island</span>Andaman</a>
        <a href="deals.html"><span class="material-symbols-outlined text-[15px] align-middle mr-1 opacity-60">forest</span>Kerala</a>
        <a href="deals.html"><span class="material-symbols-outlined text-[15px] align-middle mr-1 opacity-60">castle</span>Europe</a>
      </div>

      <div class="footer-col">
        <h5>Quick Links</h5>
        <a href="explore.html">Explore All</a>
        <a href="deals.html">Packages & Deals</a>
        <a href="ai-travel.html"><span class="material-symbols-outlined text-[15px] align-middle mr-1 opacity-80" style="color:#7B61FF">auto_awesome</span>Atlas AI Trip Architect</a>
        <a href="compare.html">Compare Packages</a>
        <a href="guides.html">Travel Guides</a>
        <a href="reviews.html">Client Reviews</a>
        <a href="wishlist.html">My Wishlist</a>
        <a href="booking.html">Book Now</a>
      </div>

      <div class="footer-col">
        <h5>Contact Us</h5>
        <p class="footer-address"><span class="material-symbols-outlined text-base align-middle mr-1 opacity-70">location_on</span>Sahakar Nagar, Opp. New Cotton Market,<br>Shiv Krupa Residence, Amravati, MH</p>
        <a href="tel:+918007586871" class="footer-phone"><span class="material-symbols-outlined text-base align-middle mr-1 opacity-70">call</span>+91-8007586871</a>
        <a href="mailto:letsexploredmc@gmail.com" class="footer-email"><span class="material-symbols-outlined text-base align-middle mr-1 opacity-70">mail</span>letsexploredmc@gmail.com</a>
        <a href="https://instagram.com/lets_exploredmc" target="_blank" class="footer-ig"><span class="material-symbols-outlined text-base align-middle mr-1 opacity-70">photo_camera</span>@lets_exploredmc</a>
        <a href="booking.html" class="footer-cta">Plan My Trip →</a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Let's Explore DMC. All rights reserved. Amravati, Maharashtra.</p>
      <p class="footer-bottom-links">
        <a href="contact.html">Privacy Policy</a>
        <span>·</span>
        <a href="contact.html">Terms of Service</a>
        <span>·</span>
        <a href="contact.html">Refund Policy</a>
      </p>
    </div>
  </footer>

  <!-- WhatsApp Floating Button -->
  <a href="https://wa.me/918007586871" target="_blank" class="wa-float" title="Chat on WhatsApp">
    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>`;

  // ── Inject styles ────────────────────────────────────────────────────────
  const css = `
  /* =========  SHARED NAV — FINAL LOCKED DESIGN SYSTEM  =========
     Primary:    #0B1F3A (Deep Navy — Trust)
     Secondary:  #1E88E5 (Travel Blue — Adventure)
     Accent:     #F4A261 (Warm Orange — CTA)
     Background: #F9FAFC (Soft Clean White)
     Text Dark:  #0F172A  |  Text Light: #64748B
  =================================================================== */

  :root {
    --primary: #0B1F3A;
    --primary-dark: #081830;
    --secondary: #1E88E5;
    --secondary-dark: #1565C0;
    --accent: #F4A261;
    --accent-dark: #E08E4D;
    --bg: #F9FAFC;
    --surface: #FFFFFF;
    --surface-alt: #F1F5F9;
    --surface-soft-blue: #EBF4FF;
    --text: #0F172A;
    --text-muted: #64748B;
    --nav-border: rgba(255,255,255,0.3);
    --nav-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }

  .site-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 999;
    background: #ffffff;
    border-bottom: 1px solid rgba(11,31,58,0.08);
    box-shadow: 0 2px 14px rgba(11,31,58,0.06);
    transition: all 0.3s ease;
    padding: 0;
    height: 70px;
  }

  /* Compact state on scroll */
  .site-nav.scrolled {
    background: #ffffff;
    border-bottom: 1px solid rgba(11,31,58,0.1);
    box-shadow: 0 4px 20px rgba(11,31,58,0.08);
  }

  .site-nav.scrolled .nav-logo-img {
    filter: drop-shadow(0 2px 10px rgba(11,31,58,0.15));
  }

  .nav-inner {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 70px;
    gap: 16px;
    box-sizing: border-box;
  }
  .nav-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    flex-shrink: 0;
    transition: opacity 0.2s;
  }
  .nav-logo:hover { opacity: 0.95; }

  /* BADA & PROMINENT LOGO */
  .nav-logo-img {
    height: 56px;
    width: auto;
    max-width: 250px;
    object-fit: contain;
    border-radius: 8px;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.1));
    transition: transform 0.25s ease;
  }
  .nav-logo:hover .nav-logo-img {
    transform: scale(1.04);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
  }
  .nav-link {
    color: #0F172A;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 700;
    padding: 7px 12px;
    border-radius: 8px;
    transition: all 0.18s ease;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    display: inline-flex;
    align-items: center;
  }
  .nav-link:hover {
    color: #E53935;
    background: rgba(229,57,53,0.06);
  }
  .nav-link.active {
    color: #E53935;
    font-weight: 800;
    background: rgba(229,57,53,0.06);
  }

  /* Dropdown Menu CSS */
  .nav-dropdown-wrap {
    position: relative;
    display: inline-block;
  }
  .nav-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 270px;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(11,31,58,0.1);
    border-radius: 16px;
    box-shadow: 0 20px 40px -10px rgba(11,31,58,0.18);
    padding: 12px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 1000;
    margin-top: 6px;
  }
  .nav-dropdown-wrap:hover .nav-dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  /* Right-align dropdowns on the right half of the navbar */
  .nav-dropdown-wrap:nth-child(n+4) .mega-menu-wide {
    left: auto;
    right: 0;
  }
  .nav-dropdown-wrap:nth-child(n+6) .nav-dropdown-menu:not(.mega-menu-wide) {
    left: auto;
    right: 0;
  }

  /* Mega Menu Wide Layout (Kesari Style) */
  .mega-menu-wide {
    width: 650px !important;
    padding: 0 !important;
    overflow: hidden;
  }
  .mega-grid {
    display: grid;
    grid-template-columns: 240px 1fr;
  }
  .mega-sidebar {
    background: #F8FAFC;
    padding: 24px;
    border-right: 1px solid rgba(11,31,58,0.06);
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .mega-sidebar-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700;
    color: #0B1F3A; margin-bottom: 8px;
    letter-spacing: -0.01em;
  }
  .mega-sidebar-desc {
    font-size: 12px; line-height: 1.6;
    color: #64748B; margin-bottom: 20px;
  }
  .mega-btn {
    display: inline-block;
    background: #F4A261; color: #0B1F3A;
    font-size: 11px; font-weight: 800;
    text-transform: uppercase; letter-spacing: 0.05em;
    padding: 10px 16px; border-radius: 99px;
    text-decoration: none; text-align: center;
    box-shadow: 0 4px 14px rgba(244,162,97,0.3);
    transition: all 0.2s ease;
  }
  .mega-btn:hover { background: #E08E4D; color: #fff; }
  .mega-cols {
    display: grid; grid-template-columns: 1fr 1fr;
    padding: 20px; gap: 16px;
  }
  .mega-cols-3 {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .dropdown-header {
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #64748B;
    padding: 6px 12px;
    margin-bottom: 4px;
    border-bottom: 1px solid rgba(11,31,58,0.06);
  }
  .dropdown-item {
    display: block;
    padding: 8px 12px;
    color: #0F172A;
    font-size: 13px;
    font-weight: 600;
    border-radius: 10px;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  .dropdown-item:hover {
    background: rgba(30,136,229,0.08);
    color: #1E88E5;
    transform: translateX(4px);
  }
  .dropdown-view-all {
    display: block;
    margin-top: 6px;
    padding: 10px 12px;
    background: rgba(244,162,97,0.12);
    color: #F4A261;
    font-size: 12px;
    font-weight: 800;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  .dropdown-view-all:hover {
    background: #F4A261;
    color: #0B1F3A;
  }

  /* 🤖 ✨ AI Trip Planner Button — Orange → Purple → Blue Gradient Pulse */
  @keyframes ai-scan {
    0%   { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
    30%  { opacity: 0.6; }
    100% { transform: translateX(350%) skewX(-15deg); opacity: 0; }
  }
  @keyframes ai-glow {
    0%   { box-shadow: 0 0 10px rgba(244,162,97,0.5), 0 0 20px rgba(123,97,255,0.3); }
    50%  { box-shadow: 0 0 22px rgba(244,162,97,0.8), 0 0 35px rgba(30,136,229,0.5); }
    100% { box-shadow: 0 0 10px rgba(244,162,97,0.5), 0 0 20px rgba(123,97,255,0.3); }
  }
  .nav-ai-pill {
    position: relative;
    display: flex; align-items: center; gap: 6px;
    background: linear-gradient(135deg, #F4A261 0%, #7B61FF 48%, #1E88E5 100%);
    background-size: 200% 200%;
    color: #fff !important; text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 11px; font-weight: 800;
    padding: 6px 14px; border-radius: 50px;
    letter-spacing: 0.03em;
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
    animation: ai-glow 2.4s infinite ease-in-out;
    border: 1px solid rgba(255,255,255,0.3);
    overflow: hidden;
  }
  .ai-sparkle { font-size: 13px; line-height: 1; }
  .nav-ai-pill::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
    animation: ai-scan 3.2s ease-in-out 1s infinite;
    border-radius: 50px;
  }
  .nav-ai-pill:hover {
    transform: translateY(-1px) scale(1.04);
    box-shadow: 0 0 25px rgba(244,162,97,0.9), 0 4px 20px rgba(30,136,229,0.5) !important;
  }
  .nav-ai-pill:hover::after { animation-play-state: paused; }
  .site-nav.scrolled .nav-ai-pill {
    border-color: rgba(255,255,255,0.25);
  }

  /* AI "badge" chip inside button */
  .ai-badge {
    background: rgba(255,255,255,0.25);
    border: 1px solid rgba(255,255,255,0.35);
    border-radius: 4px;
    font-size: 8.5px; font-weight: 900;
    padding: 1px 4px;
    letter-spacing: 0.08em;
    color: #fff;
    line-height: 1.3;
    flex-shrink: 0;
  }

  /* Text parts */
  .ai-chip-label { font-weight: 700; font-size: 11px; }
  .ai-chip-tag {
    font-size: 9.5px; font-weight: 500;
    opacity: 0.82;
    border-left: 1px solid rgba(255,255,255,0.3);
    padding-left: 4px;
    letter-spacing: 0.01em;
  }


  .nav-actions {
    display: flex; align-items: center; gap: 6px;
    flex-shrink: 0;
  }
  .nav-icon-btn {
    width: 34px; height: 34px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: rgba(15,23,42,0.65);
    transition: all 0.2s ease;
    text-decoration: none;
    background: rgba(15,23,42,0.04);
  }
  .nav-icon-btn:hover, .nav-icon-btn.active {
    color: var(--accent);
    background: rgba(244,162,97,0.12);
  }

  /* 🔘 Accent CTA — Book / Plan Trip */
  .nav-cta {
    background: var(--accent);
    color: #fff;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 11px; font-weight: 700;
    padding: 7px 14px; border-radius: 8px;
    letter-spacing: 0.03em; text-transform: uppercase;
    transition: all 0.22s ease;
    white-space: nowrap;
    box-shadow: 0 2px 10px rgba(244,162,97,0.28);
  }
  .nav-cta:hover {
    background: var(--accent-dark);
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(244,162,97,0.38);
  }
  .site-nav.scrolled .nav-cta {
    background: var(--accent);
  }
  .site-nav.scrolled .nav-cta:hover {
    background: var(--accent-dark);
  }

  .nav-hamburger {
    display: none;
    flex-direction: column; gap: 4px;
    background: none; border: none; cursor: pointer;
    padding: 6px;
  }
  .nav-hamburger span {
    display: block; width: 20px; height: 2px;
    background: rgba(15,23,42,0.75); border-radius: 2px;
    transition: all 0.3s;
  }
  .nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  /* Mobile Drawer */
  .mobile-drawer {
    display: none;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-top: 1px solid rgba(0,0,0,0.06);
    padding: 12px 0 20px;
    max-height: 80vh; overflow-y: auto;
  }
  .mobile-drawer.open { display: flex; }
  .mobile-link {
    color: rgba(15,23,42,0.78);
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 15px; font-weight: 500;
    padding: 13px 24px;
    border-bottom: 1px solid rgba(0,0,0,0.04);
    transition: all 0.2s;
  }
  .mobile-link:hover, .mobile-link.active {
    color: var(--accent);
    background: rgba(244,162,97,0.05);
  }
  .mobile-ai {
    color: #7B61FF !important;
    font-weight: 700 !important;
    background: linear-gradient(90deg, rgba(123,97,255,0.06), rgba(0,198,255,0.06)) !important;
  }
  .mobile-contact {
    padding: 16px 24px;
    display: flex; flex-direction: column; gap: 10px;
  }
  .mobile-contact-link {
    color: rgba(15,23,42,0.7);
    text-decoration: none; font-size: 14px;
  }
  .mobile-wa-btn {
    display: block; text-align: center;
    background: #27AE60; color: #fff;
    padding: 13px; border-radius: 12px;
    font-weight: 700; font-size: 14px;
    text-decoration: none;
    box-shadow: 0 4px 16px rgba(39,174,96,0.3);
  }

  /* =========  FOOTER — ✨ PURE CRISP WHITE BACKGROUND  ========= */
  .site-footer {
    position: relative;
    margin-top: 80px;
    overflow: hidden;
    background: #FFFFFF !important;
    border-top: 1.5px solid #E2E8F0 !important;
    box-shadow: 0 -10px 40px rgba(11,31,58,0.06);
    color: #0F172A !important;
    font-family: 'Inter', sans-serif;
  }
  .site-footer::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #F4A261, #1E88E5, #F4A261);
  }
  .site-footer::after {
    display: none;
  }
  .footer-inner {
    max-width: 1280px; margin: 0 auto;
    padding: 72px 24px 44px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 48px;
    position: relative;
    z-index: 1;
  }
  @media (max-width: 900px) {
    .footer-inner { grid-template-columns: 1fr 1fr; gap: 36px; }
  }
  @media (max-width: 560px) {
    .footer-inner { grid-template-columns: 1fr; }
  }
  .footer-tagline {
    font-size: 14px; line-height: 1.7;
    color: #475569 !important;
    margin-bottom: 20px;
  }
  .footer-social { display: flex; gap: 10px; }
  .social-btn {
    width: 40px; height: 40px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    text-decoration: none; transition: all 0.25s ease;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
  }
  .social-btn.wa    { color: #27AE60; }
  .social-btn.ig    { color: #E1306C; }
  .social-btn.email { color: var(--accent); }
  .social-btn:hover {
    transform: translateY(-3px) scale(1.05);
    background: #F1F5F9;
    border-color: #CBD5E1;
  }
  .footer-col h5 {
    color: #0B1F3A !important;
    font-size: 13px; font-weight: 800;
    text-transform: uppercase; letter-spacing: 0.12em;
    margin-bottom: 18px;
    padding-bottom: 10px;
    border-bottom: 2px solid #F1F5F9;
  }
  .footer-col a {
    display: block;
    color: #334155 !important;
    text-decoration: none; font-size: 14px; font-weight: 500;
    margin-bottom: 9px;
    transition: all 0.2s ease;
  }
  .footer-col a:hover {
    color: #F4A261 !important;
    transform: translateX(3px);
  }
  .footer-address {
    font-size: 13px; margin-bottom: 12px; line-height: 1.7;
    color: #475569 !important;
  }
  .footer-phone, .footer-email, .footer-ig {
    font-size: 13px; margin-bottom: 9px !important;
    color: #0F172A !important; font-weight: 600;
  }
  .footer-phone:hover, .footer-email:hover, .footer-ig:hover {
    color: #F4A261 !important;
  }
  .footer-cta {
    display: inline-block; margin-top: 14px !important;
    background: var(--accent);
    color: #fff !important;
    padding: 11px 22px; border-radius: 12px;
    font-weight: 800 !important; font-size: 13px !important;
    text-transform: uppercase; letter-spacing: 0.06em;
    box-shadow: 0 4px 16px rgba(244,162,97,0.3);
    transition: all 0.25s ease !important;
  }
  .footer-cta:hover {
    background: var(--accent-dark) !important;
    color: #fff !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 24px rgba(244,162,97,0.45) !important;
  }
  .footer-bottom {
    border-top: 1px solid #E2E8F0 !important;
    padding: 22px 24px;
    max-width: 1280px; margin: 0 auto;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 10px;
    font-size: 13px;
    color: #64748B !important;
    background: #FAFAFA;
    position: relative;
    z-index: 1;
  }
  .footer-bottom-links { display: flex; gap: 12px; align-items: center; }
  .footer-bottom-links a {
    color: rgba(15,23,42,0.5); text-decoration: none;
    transition: color 0.2s;
  }
  .footer-bottom-links a:hover { color: var(--accent); }
  .footer-bottom-links span { color: rgba(11,31,58,0.2); }

  /* =========  WHATSAPP FLOAT  ========= */
  .wa-float {
    position: fixed; bottom: 24px; right: 24px; z-index: 9999;
    width: 58px; height: 58px; border-radius: 50%;
    background: #27AE60; color: #fff;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 6px 28px rgba(39,174,96,0.45);
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
    border: 2px solid rgba(255,255,255,0.22);
  }
  .wa-float:hover {
    transform: scale(1.14) rotate(-5deg);
    box-shadow: 0 12px 38px rgba(39,174,96,0.6);
  }

  /* =========  RESPONSIVE NAV  ========= */
  @media (max-width: 1280px) {
    .nav-link { font-size: 11px; padding: 5px 8px; }
    .nav-logo-img { height: 50px; max-width: 220px; }
    .nav-ai-pill { padding: 5px 10px; font-size: 10.5px; }
    .nav-cta { padding: 7px 13px; font-size: 11px; }
    .nav-inner { padding: 0 12px; gap: 6px; }
  }
  @media (max-width: 980px) {
    .nav-link { font-size: 10px; padding: 4px 6px; }
    .nav-logo-img { height: 46px; max-width: 190px; }
    .nav-ai-pill { padding: 4px 8px; font-size: 10px; }
    .nav-cta { padding: 6px 10px; font-size: 10.5px; }
    .nav-inner { padding: 0 8px; gap: 4px; }
  }
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .nav-hamburger { display: flex; }
    .site-nav { height: 64px; }
    .nav-inner { height: 64px; padding: 0 14px; }
    .nav-logo-img { height: 46px; max-width: 180px; }
  }
  @media (max-width: 480px) {
    .nav-inner { padding: 0 10px; }
    .nav-logo-img { height: 42px; max-width: 160px; }
    .nav-cta { display: none; }
  }


  /* ==========================================================================
     ✨ LUXURY SEAMLESS PRELOADER — PURE SOLID WHITE (#FFFFFF)
     ========================================================================== */
  #global-preloader {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background: #FFFFFF !important;
    z-index: 99999999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                visibility 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  }
  #global-preloader.fade-out {
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none;
  }
  .preloader-box {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px;
    max-width: 380px;
    transform: scale(1);
    transition: transform 0.4s ease;
  }
  #global-preloader.fade-out .preloader-box {
    transform: scale(0.96);
  }
  .preloader-logo-ring {
    position: relative;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .preloader-ring-pulse {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #F4A261;
    border-right-color: #1E88E5;
    animation: preloaderSpin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  .preloader-ring-pulse-2 {
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    border: 1.5px dashed rgba(244,162,97,0.35);
    animation: preloaderSpinRev 3s linear infinite;
  }
  .preloader-logo-img {
    width: 68px;
    height: 68px;
    object-fit: contain;
    border-radius: 12px;
    filter: drop-shadow(0 6px 14px rgba(11,31,58,0.12));
  }
  .preloader-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    color: #0B1F3A;
    letter-spacing: 0.04em;
    margin: 0;
  }
  .preloader-sub {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #F4A261;
    margin: -8px 0 0 0;
  }
  .preloader-bar-bg {
    width: 180px;
    height: 3.5px;
    background: #F1F5F9;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-top: 6px;
  }
  .preloader-bar-fill {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #F4A261, #1E88E5);
    border-radius: 10px;
    transition: width 0.15s ease;
    box-shadow: 0 0 8px rgba(244,162,97,0.5);
  }
  .preloader-msg {
    font-family: 'Inter', sans-serif;
    font-size: 11.5px;
    color: #64748B;
    font-weight: 500;
  }

  @keyframes preloaderSpin {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes preloaderSpinRev {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }
  `;

  // ── Preloader HTML ───────────────────────────────────────────────────────
  const preloaderHTML = `
  <div id="global-preloader">
    <div class="preloader-box">
      <div class="preloader-logo-ring">
        <div class="preloader-ring-pulse"></div>
        <div class="preloader-ring-pulse-2"></div>
        <img src="images/logo.png" alt="Let's Explore DMC" class="preloader-logo-img"/>
      </div>
      <h2 class="preloader-title">Let's Explore DMC</h2>
      <p class="preloader-sub">Luxury Travel Architect</p>
      <div class="preloader-bar-bg">
        <div class="preloader-bar-fill" id="preloader-bar-fill"></div>
      </div>
      <span class="preloader-msg" id="preloader-text">Crafting your escape…</span>
    </div>
  </div>`;

  // ── Inject into DOM ──────────────────────────────────────────────────────
  function init() {
    // Guard: prevent double injection
    if (document.getElementById('site-nav')) return;

    // Inject CSS
    const styleEl = document.createElement('style');
    styleEl.id = 'site-nav-styles';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    // Inject Seamless Preloader at top of body
    if (!document.getElementById('global-preloader')) {
      document.body.insertAdjacentHTML('afterbegin', preloaderHTML);
    }

    // Progress Bar Animation
    let progress = 10;
    const progressInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 18) + 12;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
      }
      const fillEl = document.getElementById('preloader-bar-fill');
      if (fillEl) fillEl.style.width = progress + '%';
    }, 30);

    // Dismiss Preloader on window load
    const dismissPreloader = () => {
      clearInterval(progressInterval);
      const fillEl = document.getElementById('preloader-bar-fill');
      if (fillEl) fillEl.style.width = '100%';

      setTimeout(() => {
        const loader = document.getElementById('global-preloader');
        if (loader) {
          loader.classList.add('fade-out');
          setTimeout(() => loader.remove(), 450);
        }
      }, 180);
    };

    if (document.readyState === 'complete') {
      dismissPreloader();
    } else {
      window.addEventListener('load', dismissPreloader);
      setTimeout(dismissPreloader, 1200); // Safety fallback
    }

    // Inject Google Fonts if not already there
    if (!document.querySelector('link[href*="Montserrat"]')) {
      const fontLink = document.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap';
      document.head.appendChild(fontLink);
    }

    // Inject Nav at very top of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Inject Footer & WhatsApp at end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // ── Hamburger toggle ───────────────────────────────────────────────────
    const hamburger = document.getElementById('nav-hamburger');
    const drawer    = document.getElementById('mobile-drawer');
    if (hamburger && drawer) {
      hamburger.addEventListener('click', () => {
        drawer.classList.toggle('open');
        hamburger.classList.toggle('open');
      });
      document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
          drawer.classList.remove('open');
          hamburger.classList.remove('open');
        });
      });
    }

    // ── 🔥 SCROLL EFFECT: Header color swap (50px threshold) ──────────
    const nav = document.getElementById('site-nav');
    if (nav) {
      const isHome = page === 'home.html' || page === 'index.html' || page === '' || window.location.pathname.endsWith('/');
      if (isHome) {
        nav.classList.add('home-nav');
      }

      // Initial state check
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      }

      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
      }, { passive: true });
    }
  }

  // Run after DOM is ready (works with both defer and inline)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
