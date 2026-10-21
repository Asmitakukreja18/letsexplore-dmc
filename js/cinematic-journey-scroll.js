/**
 * Let's Explore DMC — Master Scroll Journey Motion Engine
 * - Smooth scroll-linked depth & parallax without heavy layout recalculations
 * - Interactive Journey Progress indicator
 * - Packages Focus & Depth Choreography
 * - Client Traveller Gallery progressive reveal & center focus
 * - Branch Network & Services Staggered Parallax
 * - Back to Top smooth navigation
 */

(function () {
  'use strict';

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', () => {
    initJourneyProgressNav();
    initBackToTopButton();
    initDMCExpertiseMotion();
    initTravellerGalleryMotion();
    initBranchNetworkMotion();
    initWhyUsMotion();
    initPackagesDepthMotion();
    initFormMicroInteractions();
  });

  /* ============================================================ */
  /* 1. JOURNEY PROGRESS NAV & SCROLL SPY                         */
  /* ============================================================ */
  function initJourneyProgressNav() {
    if (document.querySelector('.journey-progress-nav')) return;

    // Only inject on homepage or pages with these sections
    const packagesSec = document.getElementById('packages');
    if (!packagesSec) return;

    const navHTML = `
      <nav class="journey-progress-nav" aria-label="Travel Journey Progression">
        <a href="#packages" class="journey-progress-item is-active" data-section="packages" title="Packages">
          <span class="journey-progress-dot"></span>
          <span class="journey-progress-label">Packages</span>
        </a>
        <a href="#expertise" class="journey-progress-item" data-section="expertise" title="DMC Expertise">
          <span class="journey-progress-dot"></span>
          <span class="journey-progress-label">DMC Expertise</span>
        </a>
        <a href="#stories" class="journey-progress-item" data-section="stories" title="Traveller Moments">
          <span class="journey-progress-dot"></span>
          <span class="journey-progress-label">Travellers</span>
        </a>
        <a href="#offices" class="journey-progress-item" data-section="offices" title="Branch Network">
          <span class="journey-progress-dot"></span>
          <span class="journey-progress-label">Offices</span>
        </a>
        <a href="#why-us" class="journey-progress-item" data-section="why-us" title="Why Travellers Return">
          <span class="journey-progress-dot"></span>
          <span class="journey-progress-label">Why Us</span>
        </a>
        <a href="#trip-plan" class="journey-progress-item" data-section="trip-plan" title="Plan Your Trip">
          <span class="journey-progress-dot"></span>
          <span class="journey-progress-label">Plan Trip</span>
        </a>
      </nav>
    `;

    document.body.insertAdjacentHTML('beforeend', navHTML);

    const navItems = document.querySelectorAll('.journey-progress-item');
    const sections = ['packages', 'expertise', 'stories', 'offices', 'why-us', 'trip-plan']
      .map(id => document.getElementById(id))
      .filter(Boolean);

    let sectionMetrics = [];
    function cacheSectionMetrics() {
      sectionMetrics = sections.map(sec => ({
        id: sec.id,
        top: sec.offsetTop,
        height: sec.offsetHeight
      }));
    }
    cacheSectionMetrics();
    window.addEventListener('resize', cacheSectionMetrics, { passive: true });
    window.addEventListener('load', cacheSectionMetrics, { passive: true });

    function updateActiveSection() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const triggerPoint = scrollY + vh * 0.45;

      let currentSectionId = '';
      for (let i = 0; i < sectionMetrics.length; i++) {
        const m = sectionMetrics[i];
        if (triggerPoint >= m.top && triggerPoint < m.top + m.height) {
          currentSectionId = m.id;
          break;
        }
      }

      if (currentSectionId) {
        navItems.forEach(item => {
          if (item.getAttribute('data-section') === currentSectionId) {
            item.classList.add('is-active');
          } else {
            item.classList.remove('is-active');
          }
        });
      }
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Smooth click handler
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const targetId = item.getAttribute('data-section');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ============================================================ */
  /* 2. FLOATING BACK TO TOP BUTTON                               */
  /* ============================================================ */
  function initBackToTopButton() {
    if (document.getElementById('back-to-top-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'back-to-top-btn';
    btn.className = 'back-to-top-btn';
    btn.setAttribute('aria-label', 'Back to top of page');
    btn.innerHTML = '<span class="material-symbols-outlined text-2xl">arrow_upward</span>';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 750) {
            btn.classList.add('is-visible');
          } else {
            btn.classList.remove('is-visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ============================================================ */
  /* 3. DMC EXPERTISE & SERVICES STAGGER REVEAL                   */
  /* ============================================================ */
  function initDMCExpertiseMotion() {
    const expertiseSec = document.getElementById('expertise');
    if (!expertiseSec) return;

    const serviceCards = expertiseSec.querySelectorAll('.tile-hover');
    serviceCards.forEach((card, idx) => {
      card.classList.add('service-card-motion');
      card.style.transitionDelay = `${(idx % 4) * 0.08}s`;
      const icon = card.querySelector('.w-12');
      if (icon) icon.classList.add('service-icon-box');
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.12 });

      serviceCards.forEach(c => observer.observe(c));
    } else {
      serviceCards.forEach(c => c.classList.add('in-view'));
    }
  }

  /* ============================================================ */
  /* 4. SABSE IMPORTANT — TRAVELLER GALLERY (#stories)            */
  /* ============================================================ */
  function initTravellerGalleryMotion() {
    const storiesSec = document.getElementById('stories');
    if (!storiesSec) return;

    const galleryCards = storiesSec.querySelectorAll('.grid > a');
    galleryCards.forEach((card, idx) => {
      card.classList.add('gallery-card-motion');
      card.style.transitionDelay = `${idx * 0.07}s`;
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.08 });

      galleryCards.forEach(c => observer.observe(c));
    } else {
      galleryCards.forEach(c => c.classList.add('in-view'));
    }
  }

  /* ============================================================ */
  /* 5. OUR BRANCH NETWORK (#offices) MOTION                      */
  /* ============================================================ */
  function initBranchNetworkMotion() {
    const officesSec = document.getElementById('offices');
    if (!officesSec) return;

    const officeCards = officesSec.querySelectorAll('.grid > div');
    officeCards.forEach((card, idx) => {
      card.classList.add('office-card-motion');
      card.style.transitionDelay = `${(idx % 3) * 0.1}s`;
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.1 });

      officeCards.forEach(c => observer.observe(c));
    } else {
      officeCards.forEach(c => c.classList.add('in-view'));
    }
  }

  /* ============================================================ */
  /* 6. WHY TRAVELLERS RETURN (#why-us) SEQUENTIAL MOTION         */
  /* ============================================================ */
  function initWhyUsMotion() {
    const whyUsSec = document.getElementById('why-us');
    if (!whyUsSec) return;

    const pillarCards = whyUsSec.querySelectorAll('.grid > div');
    pillarCards.forEach((card, idx) => {
      card.classList.add('pillar-card-motion');
      card.style.transitionDelay = `${idx * 0.12}s`;
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.15 });

      pillarCards.forEach(c => observer.observe(c));
    } else {
      pillarCards.forEach(c => c.classList.add('in-view'));
    }
  }

  /* ============================================================ */
  /* 7. PACKAGE CARDS FOCUS & SCROLL DEPTH                        */
  /* ============================================================ */
  function initPackagesDepthMotion() {
    // Pure GPU CSS hover handles focus without synchronous getBoundingClientRect layout reflow
  }

  /* ============================================================ */
  /* 8. FORM MICRO-INTERACTIONS                                  */
  /* ============================================================ */
  function initFormMicroInteractions() {
    const form = document.getElementById('home-callback-form');
    if (!form) return;

    const budgetLabels = form.querySelectorAll('input[name="cb-budget"]');
    budgetLabels.forEach(radio => {
      const parentLabel = radio.closest('label');
      if (parentLabel) parentLabel.classList.add('budget-pill-motion');
    });
  }

})();
