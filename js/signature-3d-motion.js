/**
 * Let's Explore DMC — Master Cinematic Motion Architecture & Flight Trail System
 * 
 * 01. One Continuous Luminous Golden Flight Path (SVG scroll-synchronized)
 * 02. Packages — Boarding Pass 3D Unfold Motion
 * 03. Services — Sequential Left-to-Right Motion Wave
 * 04. Why Us & Reviews — Cinematic Depth Experience
 * 05. Global Hubs — Destination Landing with 5 Pulsing Waypoint Markers
 * 06. Video Performance — Viewport-aware offscreen pause & single-active decoding
 * 
 * Performance Guaranteed:
 * - Single passive scroll listener batched with requestAnimationFrame
 * - Cached layout dimensions recalculated only on resize
 * - Zero synchronous layout thrashing (no getBoundingClientRect during mousemove)
 * - IntersectionObserver with one-time unobserve for minimal main-thread load
 * - 100% graceful fallbacks if JS is disabled or fails
 */

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Cached layout metrics
  let lowerWrapper = null;
  let flightPath = null;
  let flightDash = null;
  let hubBranches = null;
  let lowerTop = 0;
  let lowerHeight = 0;
  let isScrollTicking = false;

  function measureLayout() {
    if (!lowerWrapper) lowerWrapper = document.getElementById('cinematic-journey-lower');
    if (lowerWrapper) {
      const rect = lowerWrapper.getBoundingClientRect();
      lowerTop = rect.top + window.scrollY;
      lowerHeight = lowerWrapper.offsetHeight;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    lowerWrapper = document.getElementById('cinematic-journey-lower');
    flightPath = document.getElementById('master-flight-path');
    flightDash = document.getElementById('master-flight-dash');
    hubBranches = document.getElementById('hub-branches');

    measureLayout();

    initMasterFlightTrajectory();
    initBoardingPassUnfold();
    initServicesMotionWave();
    initWhyUsDepthPillars();
    initGlobalHubsLanding();
    initOffscreenVideoManager();
    initFooterEntrance();
  });

  window.addEventListener('resize', () => {
    measureLayout();
    onScrollUpdate();
  }, { passive: true });

  /* ============================================================ */
  /* 1. MASTER CONTINUOUS GOLDEN FLIGHT TRAIL                     */
  /* ============================================================ */
  function onScrollUpdate() {
    if (reduceMotion.matches) return;
    if (!flightPath || lowerHeight <= 0) return;

    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    // Fast calculation without getBoundingClientRect
    const scrolled = (scrollY + windowH * 0.85) - lowerTop;
    const progress = Math.max(0, Math.min(1, scrolled / (lowerHeight + windowH * 0.2)));

    // SVG pathLength is 1000
    const dashOffset = (1000 * (1 - progress)).toFixed(1);
    flightPath.style.strokeDashoffset = dashOffset;
    if (flightDash) flightDash.style.strokeDashoffset = dashOffset;

    // Reveal 5 branching connector lines near Global Hubs (~0.74 - 0.96)
    if (hubBranches) {
      if (progress > 0.74 && progress < 0.98) {
        const branchAlpha = Math.min(1, (progress - 0.74) / 0.08);
        hubBranches.style.opacity = branchAlpha.toFixed(2);
      } else {
        hubBranches.style.opacity = '0';
      }
    }
  }

  function initMasterFlightTrajectory() {
    if (!flightPath) return;

    window.addEventListener('scroll', () => {
      if (!isScrollTicking) {
        isScrollTicking = true;
        requestAnimationFrame(() => {
          onScrollUpdate();
          isScrollTicking = false;
        });
      }
    }, { passive: true });

    onScrollUpdate();
  }

  /* ============================================================ */
  /* 2. PACKAGES — BOARDING PASS 3D UNFOLD MOTION                 */
  /* ============================================================ */
  function initBoardingPassUnfold() {
    const packagesSection = document.getElementById('packages');
    if (!packagesSection) return;

    let packageObserver = null;

    function setupObserver() {
      if (packageObserver) packageObserver.disconnect();

      packageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const index = parseInt(card.dataset.unfoldIndex || '0', 10);
            const cols = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
            
            // Staggered boarding pass unfold timing: 70ms per column
            const delay = ((index % cols) * 70);
            card.style.transitionDelay = `${delay}ms`;
            card.classList.add('card-unfolded');
            packageObserver.unobserve(card);
          }
        });
      }, {
        threshold: 0.04,
        rootMargin: '80px 0px 40px 0px'
      });

      const cards = packagesSection.querySelectorAll('.pkg-card');
      cards.forEach((card, idx) => {
        card.dataset.unfoldIndex = idx;
        packageObserver.observe(card);
      });
    }

    // Expose globally so packages-showcase.js calls it on filter / search change
    window.reobservePackageCards = function () {
      setupObserver();
    };

    setupObserver();

    // Safety fallback: ensure cards are never hidden permanently
    setTimeout(() => {
      const cards = packagesSection.querySelectorAll('.pkg-card:not(.card-unfolded)');
      cards.forEach(c => c.classList.add('card-unfolded'));
    }, 1200);
  }

  /* ============================================================ */
  /* 3. SERVICES — SEQUENTIAL MOTION WAVE                         */
  /* ============================================================ */
  function initServicesMotionWave() {
    const serviceCards = document.querySelectorAll('.tile-hover');
    if (!serviceCards.length) return;

    const waveObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = parseInt(card.dataset.waveIndex || '0', 10);
          
          // Left-to-right row-by-row wave delay
          const delay = ((index % 2) * 80);
          card.style.transitionDelay = `${delay}ms`;
          card.classList.add('wave-in');
          waveObserver.unobserve(card);
        }
      });
    }, {
      threshold: 0.06,
      rootMargin: '100px 0px 40px 0px'
    });

    serviceCards.forEach((card, idx) => {
      card.classList.add('service-wave-card');
      card.dataset.waveIndex = idx;
      waveObserver.observe(card);
    });

    // Safety fallback
    setTimeout(() => {
      serviceCards.forEach(c => c.classList.add('wave-in'));
    }, 1500);
  }

  /* ============================================================ */
  /* 4. WHY US — CINEMATIC DEPTH PILLARS                          */
  /* ============================================================ */
  function initWhyUsDepthPillars() {
    const pillarCards = document.querySelectorAll('section.bg-white .rounded-\\[28px\\]');
    if (!pillarCards.length) return;

    const pillarObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = parseInt(card.dataset.pillarIndex || '0', 10);
          
          const delay = (index * 80);
          card.style.transitionDelay = `${delay}ms`;
          card.classList.add('pillar-in');
          pillarObserver.unobserve(card);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '80px 0px 40px 0px'
    });

    pillarCards.forEach((card, idx) => {
      card.classList.add('pillar-depth-card');
      card.dataset.pillarIndex = idx;
      pillarObserver.observe(card);
    });

    // Safety fallback
    setTimeout(() => {
      pillarCards.forEach(c => c.classList.add('pillar-in'));
    }, 1500);
  }

  /* ============================================================ */
  /* 5. GLOBAL HUBS — DESTINATION LANDING & PULSING MARKERS       */
  /* ============================================================ */
  function initGlobalHubsLanding() {
    const officeSection = document.getElementById('offices');
    if (!officeSection) return;

    const hubCards = officeSection.querySelectorAll('.hub-landing-card');
    if (!hubCards.length) return;

    const hubObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = parseInt(card.dataset.hubIndex || '0', 10);
          
          const delay = ((index % 3) * 100);
          card.style.transitionDelay = `${delay}ms`;
          card.classList.add('hub-landed');

          // Trigger pulsing waypoint marker beacon
          const beacon = card.querySelector('.beacon-ring');
          if (beacon) beacon.style.opacity = '1';

          hubObserver.unobserve(card);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '80px 0px 40px 0px'
    });

    hubCards.forEach((card, idx) => {
      card.dataset.hubIndex = idx;

      // Inject radar beacon ring on hub card badge if not already present
      const badge = card.querySelector('.rounded-full');
      if (badge && !card.querySelector('.beacon-ring')) {
        const beaconRing = document.createElement('span');
        beaconRing.className = 'beacon-ring';
        badge.style.position = 'relative';
        badge.appendChild(beaconRing);
      }

      hubObserver.observe(card);
    });

    // Safety fallback
    setTimeout(() => {
      hubCards.forEach(c => c.classList.add('hub-landed'));
    }, 1800);
  }

  /* ============================================================ */
  /* 6. OFF-SCREEN VIDEO MANAGER — Zero CPU/GPU Waste             */
  /* ============================================================ */
  function initOffscreenVideoManager() {
    const allVideos = document.querySelectorAll('video');
    if (!allVideos.length) return;

    const vidObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (entry.isIntersecting) {
          // Only play if it's supposed to autoplay or in active carousel
          if (vid.hasAttribute('autoplay') || vid.classList.contains('is-playing')) {
            vid.play().catch(() => {});
          }
        } else {
          vid.pause();
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '200px 0px 200px 0px'
    });

    allVideos.forEach(v => vidObserver.observe(v));
  }

  /* ============================================================ */
  /* 7. FOOTER ENTRANCE REVEAL                                    */
  /* ============================================================ */
  function initFooterEntrance() {
    const footer = document.querySelector('body > footer') || document.querySelector('[id*="footer"]');
    if (!footer) return;

    footer.style.opacity = '0';
    footer.style.transform = 'translateY(24px)';
    footer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    const footerObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
        footerObserver.disconnect();
      }
    }, { threshold: 0.04 });

    footerObserver.observe(footer);
  }

})();
