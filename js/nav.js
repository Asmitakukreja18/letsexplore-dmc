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
      <!-- Logo -->
      <a href="home.html" class="nav-logo" aria-label="Let's Explore DMC Home">
        <img src="images/logo.png" alt="Let's Explore DMC" class="nav-logo-img">
      </a>

      <!-- Desktop Links -->
      <div class="nav-links" id="nav-links">
        <a href="home.html" class="nav-link ${isActive('home.html')}">HOME</a>
        
        <!-- GROUP TOURS DROPDOWN -->
        <div class="nav-dropdown-wrap">
          <a href="explore.html" class="nav-link ${isActive('explore.html')} flex items-center gap-1">
            GROUP TOURS <span class="material-symbols-outlined text-sm">expand_more</span>
          </a>
          <div class="nav-dropdown-menu mega-menu-wide">
            <div class="mega-grid">
              <div class="mega-sidebar">
                <div class="mega-sidebar-title">GROUP TOURS</div>
                <p class="mega-sidebar-desc">Handcrafted group departures with verified hotels, English & Hindi speaking guides and 24/7 on-ground support.</p>
                <a href="explore.html" class="mega-btn">View All Group Tours</a>
              </div>
              <div class="mega-cols">
                <div>
                  <div class="dropdown-header">INTERNATIONAL GROUPS</div>
                  <a href="georgia-package.html" class="dropdown-item">🇬🇪 Georgia ($300 Special)</a>
                  <a href="turkey-package.html" class="dropdown-item">🇹🇷 Turkey Escape & Wonders</a>
                  <a href="bali-package.html" class="dropdown-item">🇮🇩 Bali Paradise Group</a>
                  <a href="dubai-package.html" class="dropdown-item">🇦🇪 Dubai & Abu Dhabi</a>
                  <a href="thailand-package.html" class="dropdown-item">🇹🇭 Thailand Island Hopping</a>
                  <a href="vietnam-package.html" class="dropdown-item">🇻🇳 Vietnam Heritage Tour</a>
                </div>
                <div>
                  <div class="dropdown-header">DOMESTIC GROUPS</div>
                  <a href="kashmir-package.html" class="dropdown-item">🏔️ Kashmir Paradise Group</a>
                  <a href="kerala-package.html" class="dropdown-item">🌴 Kerala Backwaters Tour</a>
                  <a href="andaman-package.html" class="dropdown-item">🏖️ Andaman Tropical Group</a>
                  <a href="manali-package.html" class="dropdown-item">❄️ Himachal & Manali Escape</a>
                  <a href="ujjain-package.html" class="dropdown-item">🛕 Ujjain Spiritual Yatra</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SPECIALITY TOURS DROPDOWN -->
        <div class="nav-dropdown-wrap">
          <a href="deals.html" class="nav-link flex items-center gap-1">
            SPECIALITY TOURS <span class="material-symbols-outlined text-sm">expand_more</span>
          </a>
          <div class="nav-dropdown-menu mega-menu-wide">
            <div class="mega-grid">
              <div class="mega-sidebar">
                <div class="mega-sidebar-title">SPECIALITY TOURS</div>
                <p class="mega-sidebar-desc">Specialty tours are designed to cater to specific interests and passions, offering unique and immersive experiences that go beyond the typical tourist activities.</p>
                <a href="deals.html" class="mega-btn">View All Speciality Tours</a>
              </div>
              <div class="mega-cols">
                <div>
                  <a href="deals.html" class="dropdown-item">ADVENTURE TOUR</a>
                  <a href="deals.html" class="dropdown-item">GUJARATI SPECIAL</a>
                  <a href="deals.html" class="dropdown-item">MARIGOLD</a>
                  <a href="deals.html" class="dropdown-item">STUDENT SPECIAL</a>
                  <a href="deals.html" class="dropdown-item">ECONOMY TOURS</a>
                </div>
                <div>
                  <a href="deals.html" class="dropdown-item">CHHOTA BREAK</a>
                  <a href="deals.html" class="dropdown-item">HONEYMOON SPECIAL</a>
                  <a href="deals.html" class="dropdown-item">MY FAIR LADY</a>
                  <a href="deals.html" class="dropdown-item">VEG TOUR</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CUSTOMISE HOLIDAYS -->
        <a href="booking.html" class="nav-link ${isActive('booking.html')}">CUSTOMISE HOLIDAYS</a>

        <!-- EXPERIENCES DROPDOWN -->
        <div class="nav-dropdown-wrap">
          <a href="explore.html" class="nav-link flex items-center gap-1">
            EXPERIENCES <span class="material-symbols-outlined text-sm">expand_more</span>
          </a>
          <div class="nav-dropdown-menu mega-menu-wide">
            <div class="mega-grid">
              <div class="mega-sidebar">
                <div class="mega-sidebar-title">EXPERIENCES</div>
                <p class="mega-sidebar-desc">Experiences are thrilling adventures that will immerse you in nature's most awe-inspiring landscapes, offering an escape from the ordinary.</p>
                <a href="explore.html" class="mega-btn">View All Experiences</a>
              </div>
              <div class="mega-cols mega-cols-3">
                <div>
                  <a href="explore.html" class="dropdown-item">ADVENTURE</a>
                  <a href="explore.html" class="dropdown-item">DESERT</a>
                  <a href="explore.html" class="dropdown-item">RIVER CRUISE</a>
                </div>
                <div>
                  <a href="explore.html" class="dropdown-item">BEACH</a>
                  <a href="explore.html" class="dropdown-item">FOOD AND CULINARY</a>
                  <a href="explore.html" class="dropdown-item">SAFARI</a>
                </div>
                <div>
                  <a href="explore.html" class="dropdown-item">CRUISE</a>
                  <a href="explore.html" class="dropdown-item">HIKING AND TREKKING</a>
                  <a href="explore.html" class="dropdown-item">EXPLORE EUROPE</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- DEALS -->
        <a href="deals.html" class="nav-link ${isActive('deals.html')}">DEALS</a>

        <!-- OUR BRANCHES -->
        <a href="contact.html#offices" class="nav-link">OUR BRANCHES</a>

        <!-- MORE DROPDOWN -->
        <div class="nav-dropdown-wrap">
          <a href="#" class="nav-link flex items-center gap-1">
            MORE <span class="material-symbols-outlined text-sm">expand_more</span>
          </a>
          <div class="nav-dropdown-menu">
            <a href="reviews.html" class="dropdown-item">TESTIMONIALS</a>
            <a href="guides.html" class="dropdown-item">TRAVEL GUIDES</a>
            <a href="contact.html" class="dropdown-item">ABOUT US</a>
            <a href="contact.html" class="dropdown-item">CONTACT</a>
            <a href="compare.html" class="dropdown-item">COMPARE PACKAGES</a>
          </div>
        </div>

        <!-- ATLAS AI -->
        <a href="ai-travel.html" class="nav-ai-pill ${isActive('ai-travel.html')}">
          <span class="ai-badge">AI</span>
          <span class="material-symbols-outlined text-base" style="font-variation-settings:'FILL' 1; color: #fff;">smart_toy</span>
          <span class="ai-chip-label">Atlas AI</span>
        </a>
      </div>

      <!-- Right Actions -->
      <div class="nav-actions">
        <a href="wishlist.html" class="nav-icon-btn ${isActive('wishlist.html')}" title="My Wishlist" style="position: relative;">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span data-wishlist-badge class="nav-wish-badge">0</span>
        </a>
        <a href="booking.html" class="nav-cta">Plan My Trip</a>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <a href="home.html"           class="mobile-link ${isActive('home.html')}"><span class="material-symbols-outlined mr-2">home</span> Home</a>
      <a href="explore.html"        class="mobile-link ${isActive('explore.html')}"><span class="material-symbols-outlined mr-2">groups</span> Group Tours</a>
      <a href="deals.html"          class="mobile-link ${isActive('deals.html')}"><span class="material-symbols-outlined mr-2">auto_awesome</span> Speciality Tours & Deals</a>
      <a href="booking.html"        class="mobile-link ${isActive('booking.html')}"><span class="material-symbols-outlined mr-2">edit_calendar</span> Customise Holidays</a>
      <a href="contact.html#offices" class="mobile-link"><span class="material-symbols-outlined mr-2">storefront</span> Our 6 Global Branches</a>
      <a href="ai-travel.html"      class="mobile-link mobile-ai ${isActive('ai-travel.html')}"><span class="material-symbols-outlined mr-2">smart_toy</span> Atlas AI Trip Architect</a>
      <a href="reviews.html"        class="mobile-link ${isActive('reviews.html')}"><span class="material-symbols-outlined mr-2">star</span> Client Reviews</a>
      <a href="guides.html"         class="mobile-link ${isActive('guides.html')}"><span class="material-symbols-outlined mr-2">travel_explore</span> Travel Guides</a>
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
    box-shadow: 0 2px 12px rgba(11,31,58,0.06);
    transition: all 0.3s ease;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  /* Compact state on scroll */
  .site-nav.scrolled {
    background: #ffffff;
    border-bottom: 1px solid rgba(11,31,58,0.1);
    box-shadow: 0 4px 20px rgba(11,31,58,0.10);
    padding-top: 2px;
    padding-bottom: 2px;
  }

  .site-nav.scrolled .nav-logo-img {
    filter: drop-shadow(0 2px 10px rgba(11,31,58,0.15));
  }

  /* Wishlist badge */
  .nav-wish-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    min-width: 18px;
    height: 18px;
    border-radius: 99px;
    background: #F4A261 !important;
    color: #fff !important;
    font-size: 10px;
    font-weight: 800;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    box-shadow: 0 3px 8px rgba(244,162,97,0.5);
    border: 2px solid rgba(255,255,255,0.95) !important;
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.02em;
  }

  .nav-inner {
    max-width: 1440px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 16px; height: 58px;
    gap: 8px;
  }
  .nav-logo {
    display: flex; align-items: center; gap: 8px;
    text-decoration: none;
    flex-shrink: 0;
    transition: opacity 0.2s;
  }
  .nav-logo:hover { opacity: 0.92; }

  .nav-logo-img {
    height: 40px;
    width: auto;
    max-width: 180px;
    object-fit: contain;
    border-radius: 8px;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.12));
    transition: transform 0.3s ease;
  }
  .nav-logo:hover .nav-logo-img {
    transform: scale(1.04);
  }

  .nav-links {
    display: flex; align-items: center; gap: 4px;
    flex-wrap: nowrap;
  }
  .nav-link {
    color: #0F172A;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 11.5px; font-weight: 700;
    padding: 6px 7px; border-radius: 6px;
    transition: all 0.22s ease;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  .nav-link:hover {
    color: #E53935;
    background: rgba(229,57,53,0.06);
  }
  .nav-link.active {
    color: #E53935;
    font-weight: 800;
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

  /* Mega Menu Wide Layout (Kesari Style) */
  .mega-menu-wide {
    width: 680px !important;
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

  /* 🤖 Atlas AI Button — Premium neural interface feel */
  @keyframes ai-scan {
    0%   { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
    30%  { opacity: 0.6; }
    100% { transform: translateX(350%) skewX(-15deg); opacity: 0; }
  }
  @keyframes ai-glow {
    0%   { box-shadow: 0 0 10px rgba(123,97,255,0.4), 0 0 20px rgba(0,198,255,0.12), inset 0 1px 0 rgba(255,255,255,0.15); }
    50%  { box-shadow: 0 0 22px rgba(123,97,255,0.7), 0 0 44px rgba(0,198,255,0.28), inset 0 1px 0 rgba(255,255,255,0.2); }
    100% { box-shadow: 0 0 10px rgba(123,97,255,0.4), 0 0 20px rgba(0,198,255,0.12), inset 0 1px 0 rgba(255,255,255,0.15); }
  }
  .nav-ai-pill {
    position: relative;
    display: flex; align-items: center; gap: 6px;
    background: linear-gradient(135deg, #5B3FD8 0%, #7B61FF 45%, #00C6FF 100%);
    background-size: 200% 200%;
    color: #fff; text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 12px; font-weight: 700;
    padding: 7px 14px 7px 8px; border-radius: 50px;
    letter-spacing: 0.04em;
    transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
    animation: ai-glow 2.8s infinite ease-in-out;
    border: 1px solid rgba(255,255,255,0.18);
    overflow: hidden;
  }
  /* Scan shimmer */
  .nav-ai-pill::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
    animation: ai-scan 3.5s ease-in-out 1.2s infinite;
    border-radius: 50px;
  }
  .nav-ai-pill:hover {
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 0 30px rgba(123,97,255,0.8), 0 6px 24px rgba(0,0,0,0.2) !important;
  }
  .nav-ai-pill:hover::after { animation-play-state: paused; }
  .site-nav.scrolled .nav-ai-pill {
    border-color: rgba(255,255,255,0.25);
  }

  /* AI "badge" chip inside button */
  .ai-badge {
    background: rgba(255,255,255,0.22);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 4px;
    font-size: 9px; font-weight: 900;
    padding: 1px 5px;
    letter-spacing: 0.12em;
    color: #fff;
    line-height: 1.4;
    flex-shrink: 0;
  }

  /* Text parts */
  .ai-chip-label { font-weight: 800; font-size: 13px; }
  .ai-chip-tag {
    font-size: 10px; font-weight: 500;
    opacity: 0.82;
    border-left: 1px solid rgba(255,255,255,0.3);
    padding-left: 6px;
    letter-spacing: 0.02em;
  }


  .nav-actions {
    display: flex; align-items: center; gap: 10px;
    flex-shrink: 0;
  }
  .nav-icon-btn {
    width: 38px; height: 38px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: rgba(15,23,42,0.6);
    transition: all 0.22s ease;
    text-decoration: none;
    background: rgba(15,23,42,0.04);
  }
  .nav-icon-btn:hover, .nav-icon-btn.active {
    color: var(--accent);
    background: rgba(244,162,97,0.12);
  }

  /* 🔘 Accent CTA — Book / Plan Trip — ONLY orange for these */
  .nav-cta {
    background: var(--accent);
    color: #fff;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 800;
    padding: 11px 22px; border-radius: 12px;
    letter-spacing: 0.04em; text-transform: uppercase;
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    white-space: nowrap;
    box-shadow: 0 4px 16px rgba(244,162,97,0.32);
  }
  .nav-cta:hover {
    background: var(--accent-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(244,162,97,0.45);
  }
  .site-nav.scrolled .nav-cta {
    background: var(--accent);
  }
  .site-nav.scrolled .nav-cta:hover {
    background: var(--accent-dark);
  }

  .nav-hamburger {
    display: none;
    flex-direction: column; gap: 5px;
    background: none; border: none; cursor: pointer;
    padding: 6px;
  }
  .nav-hamburger span {
    display: block; width: 22px; height: 2px;
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

  /* =========  FOOTER — ✨ WHITE GLASS MORPHISM (Header jaisa premium)  ========= */
  .site-footer {
    position: relative;
    margin-top: 80px;
    overflow: hidden;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    background: rgba(255, 255, 255, 0.78);
    border-top: 1px solid rgba(255, 255, 255, 0.55);
    box-shadow: 0 -10px 40px rgba(11,31,58,0.08);
    color: rgba(15, 23, 42, 0.78);
    font-family: 'Inter', sans-serif;
  }
  .site-footer::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(244,162,97,0.7), transparent);
  }
  .site-footer::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 50% 70% at 90% 0%, rgba(30,136,229,0.08) 0%, transparent 55%),
      radial-gradient(ellipse 45% 55% at 5% 100%, rgba(244,162,97,0.09) 0%, transparent 55%);
    pointer-events: none;
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
    color: rgba(15,23,42,0.62);
    margin-bottom: 20px;
  }
  .footer-social { display: flex; gap: 10px; }
  .social-btn {
    width: 40px; height: 40px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    text-decoration: none; transition: all 0.25s ease;
    background: rgba(11,31,58,0.04);
    border: 1px solid rgba(11,31,58,0.08);
  }
  .social-btn.wa    { color: #27AE60; }
  .social-btn.ig    { color: #E1306C; }
  .social-btn.email { color: var(--accent); }
  .social-btn:hover {
    transform: translateY(-3px) scale(1.05);
    background: rgba(11,31,58,0.07);
    border-color: rgba(11,31,58,0.15);
  }
  .footer-col h5 {
    color: var(--primary);
    font-size: 12px; font-weight: 800;
    text-transform: uppercase; letter-spacing: 0.12em;
    margin-bottom: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(11,31,58,0.1);
  }
  .footer-col a {
    display: block;
    color: rgba(15,23,42,0.62);
    text-decoration: none; font-size: 14px;
    margin-bottom: 9px;
    transition: all 0.2s ease;
  }
  .footer-col a:hover {
    color: var(--accent);
    transform: translateX(3px);
  }
  .footer-address {
    font-size: 13px; margin-bottom: 12px; line-height: 1.7;
    color: rgba(15,23,42,0.6);
  }
  .footer-phone, .footer-email, .footer-ig {
    font-size: 13px; margin-bottom: 9px !important;
    color: rgba(15,23,42,0.72) !important;
  }
  .footer-phone:hover, .footer-email:hover, .footer-ig:hover {
    color: var(--accent) !important;
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
    border-top: 1px solid rgba(11,31,58,0.08);
    padding: 22px 24px;
    max-width: 1280px; margin: 0 auto;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 10px;
    font-size: 12px;
    color: rgba(15,23,42,0.55);
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
  @media (max-width: 1100px) {
    .nav-link { font-size: 13px; padding: 7px 10px; }
    .nav-logo-img { height: 50px; max-width: 200px; }
  }
  @media (max-width: 900px) {
    .nav-links { display: none; }
    .nav-hamburger { display: flex; }
    .nav-cta { display: none; }
    .nav-inner { height: 70px; }
  }
  @media (max-width: 480px) {
    .nav-inner { padding: 0 16px; }
    .nav-logo-img { height: 46px; max-width: 180px; }
  }


  /* Premium Global Preloader — Pure Solid White */
  #global-preloader {
    position: fixed;
    inset: 0;
    background: #ffffff !important;
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                visibility 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }
  #global-preloader.fade-out {
    opacity: 0;
    visibility: hidden;
  }
  .preloader-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 34px;
    transform: translateY(0) scale(1);
    transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }
  #global-preloader.fade-out .preloader-content {
    transform: translateY(-18px) scale(1.04);
    opacity: 0.1;
  }
  .preloader-logo-wrap {
    position: relative;
    width: 220px;
    height: auto;
    animation: preLogoFloat 3.4s infinite ease-in-out;
  }
  .preloader-logo-wrap::after {
    content: "";
    position: absolute;
    left: 50%; top: 50%;
    width: 88%; height: 50%;
    transform: translate(-50%, 46%);
    background: radial-gradient(ellipse, rgba(11,31,58,0.22) 0%, transparent 72%);
    filter: blur(10px);
    z-index: -1;
    animation: preShadow 3.4s infinite ease-in-out;
  }
  .preloader-logo-wrap img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 16px;
    filter:
      drop-shadow(0 16px 38px rgba(11, 31, 58, 0.18))
      drop-shadow(0 6px 18px rgba(244,162,97,0.10));
  }
  .preloader-brand {
    font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
    font-size: 30px;
    font-weight: 600;
    color: #0B1F3A;
    letter-spacing: -0.01em;
    line-height: 1;
    margin-top: -6px;
    position: relative;
    background: linear-gradient(90deg, #0B1F3A 0%, #1E88E5 45%, #F4A261 75%, #0B1F3A 100%);
    background-size: 250% 100%;
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: preShimmer 3.6s linear infinite;
  }
  .preloader-brand small {
    display: block;
    margin-top: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.52em;
    text-transform: uppercase;
    -webkit-text-fill-color: rgba(11,31,58,0.55);
    background: none;
    animation: none;
  }
  .preloader-spinner-box {
    position: relative;
    width: 96px;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px;
  }
  .preloader-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2.5px solid transparent;
    border-radius: 50%;
  }
  .preloader-ring.ring-a {
    border-top-color: #1E88E5;
    border-right-color: #7B61FF;
    filter: drop-shadow(0 0 8px rgba(30,136,229,0.42));
    animation: preSpin 1.15s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  .preloader-ring.ring-b {
    width: 82%;
    height: 82%;
    border-bottom-color: #F4A261;
    border-left-color: #F4A261;
    filter: drop-shadow(0 0 6px rgba(244,162,97,0.45));
    animation: preSpinRev 1.65s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  .preloader-ring.ring-c {
    width: 66%;
    height: 66%;
    border: 1px dashed rgba(11,31,58,0.18);
    animation: preSpin 4.6s linear infinite;
  }
  .preloader-compass {
    position: absolute;
    inset: 24%;
    border-radius: 50%;
    background:
      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(245,248,252,1) 55%, rgba(224,233,244,1) 100%);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.9),
      inset 0 -1px 2px rgba(11,31,58,0.12),
      0 4px 12px rgba(11,31,58,0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .preloader-needle {
    position: absolute;
    width: 2px;
    height: 74%;
    left: 50%;
    top: 13%;
    transform-origin: 50% 75%;
    transform: translateX(-50%) rotate(0deg);
    animation: preNeedle 2.3s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
  }
  .preloader-needle::before,
  .preloader-needle::after {
    content: "";
    position: absolute;
    left: 50%;
    width: 0;
    height: 0;
    transform: translateX(-50%);
  }
  .preloader-needle::before {
    top: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 14px solid #EF4444;
    filter: drop-shadow(0 1px 1px rgba(11,31,58,0.2));
  }
  .preloader-needle::after {
    bottom: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 14px solid #0B1F3A;
  }
  .preloader-needle-cap {
    position: relative;
    z-index: 2;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: linear-gradient(145deg, #0B1F3A, #1E88E5);
    box-shadow: 0 1px 2px rgba(255,255,255,0.9) inset, 0 2px 4px rgba(11,31,58,0.35);
  }
  .preloader-center-icon {
    display: none;
  }
  .preloader-status {
    font-family: 'Inter', sans-serif;
    color: rgba(11, 31, 58, 0.75);
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: -4px;
  }
  .preloader-number {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 15px;
    letter-spacing: 0;
    color: #F4A261;
    font-weight: 700;
    min-width: 44px;
    display: inline-block;
    text-align: left;
    font-variant-numeric: tabular-nums;
    text-transform: none;
  }
  .preloader-progress-bar-bg {
    width: 220px;
    height: 3px;
    background: rgba(11, 31, 58, 0.07);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    margin-top: -6px;
  }
  .preloader-progress-bar-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(90deg,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.65) 50%,
      rgba(255,255,255,0) 100%);
    background-size: 30% 100%;
    background-repeat: no-repeat;
    animation: preBarSweep 1.9s linear infinite;
    mix-blend-mode: overlay;
    z-index: 2;
    pointer-events: none;
  }
  .preloader-progress-bar-fill {
    position: relative;
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #1E88E5 0%, #7B61FF 50%, #F4A261 100%);
    border-radius: 20px;
    transition: width 0.12s ease;
    box-shadow: 0 0 10px rgba(244,162,97,0.55);
  }
  .preloader-glow {
    position: absolute;
    width: 620px;
    height: 620px;
    background: radial-gradient(circle, rgba(30,136,229,0.09) 0%, rgba(244,162,97,0.06) 40%, transparent 72%);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
    animation: preAmbient 7s infinite ease-in-out alternate;
  }

  @keyframes preLogoFloat {
    0%, 100% { transform: translateY(0) rotate(-0.2deg); }
    50%      { transform: translateY(-6px) rotate(0.2deg); }
  }
  @keyframes preShadow {
    0%, 100% { opacity: 0.7; transform: translate(-50%, 48%) scaleX(1); }
    50%      { opacity: 0.4; transform: translate(-50%, 50%) scaleX(0.92); }
  }
  @keyframes preShimmer {
    0%   { background-position: 0% 0; }
    100% { background-position: 250% 0; }
  }
  @keyframes preSpin {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes preSpinRev {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }
  @keyframes preNeedle {
    0%   { transform: translateX(-50%) rotate(-38deg); }
    25%  { transform: translateX(-50%) rotate(24deg); }
    50%  { transform: translateX(-50%) rotate(-18deg); }
    75%  { transform: translateX(-50%) rotate(42deg); }
    100% { transform: translateX(-50%) rotate(-38deg); }
  }
  @keyframes preAmbient {
    0%   { transform: translate(-50%, -50%) scale(0.88); opacity: 0.5; }
    100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.95; }
  }
  @keyframes preBarSweep {
    0%   { background-position: -30% 0; }
    100% { background-position: 130% 0; }
  }
  `;

  const preloaderHTML = `
  <div id="global-preloader">
    <div class="preloader-glow"></div>
    <div class="preloader-content">
      <div class="preloader-logo-wrap">
        <img src="images/logo.png" alt="Let's Explore DMC Logo">
      </div>
      <div class="preloader-brand">
        Let's Explore
        <small>Luxury \u00B7 Tailored \u00B7 Journeys</small>
      </div>
      <div class="preloader-spinner-box">
        <div class="preloader-ring ring-a"></div>
        <div class="preloader-ring ring-b"></div>
        <div class="preloader-ring ring-c"></div>
        <div class="preloader-compass">
          <div class="preloader-needle"></div>
          <div class="preloader-needle-cap"></div>
        </div>
      </div>
      <div class="preloader-status">
        Crafting your escape <span class="preloader-number" id="preloader-pct">0%</span>
      </div>
      <div class="preloader-progress-bar-bg">
        <div class="preloader-progress-bar-fill" id="preloader-fill"></div>
      </div>
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

    // Inject Preloader
    document.body.insertAdjacentHTML('afterbegin', preloaderHTML);

    // Progress Bar Animation
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 8;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
      }
      const pctEl = document.getElementById('preloader-pct');
      const fillEl = document.getElementById('preloader-fill');
      if (pctEl) pctEl.textContent = progress + '%';
      if (fillEl) fillEl.style.width = progress + '%';
    }, 25);

    // Remove preloader on complete load
    const fadeOutPreloader = () => {
      clearInterval(progressInterval);
      const pctEl = document.getElementById('preloader-pct');
      const fillEl = document.getElementById('preloader-fill');
      if (pctEl) pctEl.textContent = '100%';
      if (fillEl) fillEl.style.width = '100%';

      setTimeout(() => {
        const loader = document.getElementById('global-preloader');
        if (loader) {
          loader.classList.add('fade-out');
          setTimeout(() => loader.remove(), 500);
        }
      }, 150);
    };

    if (document.readyState === 'complete') {
      fadeOutPreloader();
    } else {
      window.addEventListener('load', fadeOutPreloader);
      // Safety timeout after 1.5 seconds max
      setTimeout(fadeOutPreloader, 1500);
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
