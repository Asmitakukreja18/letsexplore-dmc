/**
 * Let's Explore DMC — Master Connected 3D Motion System
 * Seamless, continuous, end-to-end morphing 3D scroll motion connecting:
 * Header -> Cinematic Airliner & Sky Arc -> Signature Video Reels ->
 * Kinetic Marquee -> Packages Waterfall Grid -> Specialized Services ->
 * Why Us Pillars -> Global Hubs -> Footer Aurora
 *
 * Designed with 60/120fps hardware-accelerated 3D transforms,
 * organic living floating physics, and interactive holographic specular lighting.
 */
(function () {
  'use strict';

  // Inject High-Performance 3D CSS Styles
  const styleEl = document.createElement('style');
  styleEl.id = 'signature-3d-motion-styles';
  styleEl.textContent = `
    /* 3D Global Containers */
    .signature-3d-container {
      perspective: 2000px !important;
      perspective-origin: center center !important;
      transform-style: preserve-3d !important;
    }
    .dest-tile {
      transform-style: preserve-3d !important;
      will-change: transform, box-shadow !important;
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
    }

    /* Packages 3D Waterfall Entrance */
    .pkg-3d-wave-card {
      opacity: 0;
      transform: perspective(1200px) translateY(75px) rotateX(18deg) scale(0.92);
      transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, opacity;
    }
    .pkg-3d-wave-card.pkg-in-view {
      opacity: 1 !important;
      transform: perspective(1200px) translateY(0) rotateX(0deg) scale(1) !important;
    }

    /* Interactive Holographic Specular Glare */
    .card-3d-glare {
      pointer-events: none;
      position: absolute;
      inset: 0;
      z-index: 25;
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.3s ease;
      mix-blend-mode: overlay;
    }

    /* 3D Kinetic Ribbon Marquee */
    .kinetic-3d-marquee {
      perspective: 1000px;
      transform-style: preserve-3d;
      will-change: transform;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* 3D Services & Feature Cards Levitation */
    .service-3d-card, .pillar-3d-card, .office-3d-card {
      transform-style: preserve-3d;
      will-change: transform, box-shadow;
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
    }
    .service-3d-card:hover, .pillar-3d-card:hover, .office-3d-card:hover {
      transform: perspective(1000px) translateY(-8px) translateZ(16px) scale(1.02);
      box-shadow: 0 24px 45px -12px rgba(11, 31, 58, 0.16), 0 0 25px rgba(244, 162, 97, 0.18) !important;
    }

    /* Connected Journey Golden Thread */
    #golden-journey-thread {
      position: fixed;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 180px;
      background: rgba(11, 31, 58, 0.08);
      border-radius: 999px;
      z-index: 9999;
      pointer-events: none;
      display: none;
    }
    @media (min-width: 1024px) {
      #golden-journey-thread { display: block; }
    }
    #golden-journey-fill {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background: linear-gradient(to bottom, #1E88E5, #F4A261, #e07a5f);
      border-radius: 999px;
      box-shadow: 0 0 12px rgba(244, 162, 97, 0.6);
      transition: height 0.1s linear;
    }
    #golden-journey-orb {
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #F4A261;
      border: 2px solid #ffffff;
      box-shadow: 0 0 14px rgba(244, 162, 97, 0.9), 0 0 24px rgba(30, 136, 229, 0.5);
      transition: top 0.1s linear;
    }
  `;
  document.head.appendChild(styleEl);

  let tiles = [];
  let grid = null;
  let currentFactor = 0;
  let targetFactor = 0;
  let isTicking = false;
  let animTime = 0;
  let inView = false;
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;

  document.addEventListener('DOMContentLoaded', () => {
    initConnectedJourneyThread();
    initSignature3DConvergence();
    initKineticMarqueeMotion();
    initPackages3DWaveEntry();
    initPackageCards3DTilt();
    initConnectedServicesAndCards3D();
  });

  /* ============================================================ */
  /* 0. CONNECTED JOURNEY GOLDEN THREAD (Visual Continuum)        */
  /* ============================================================ */
  function initConnectedJourneyThread() {
    let thread = document.getElementById('golden-journey-thread');
    if (!thread) {
      thread = document.createElement('div');
      thread.id = 'golden-journey-thread';
      thread.innerHTML = `
        <div id="golden-journey-fill"></div>
        <div id="golden-journey-orb"></div>
      `;
      document.body.appendChild(thread);
    }

    const fill = document.getElementById('golden-journey-fill');
    const orb = document.getElementById('golden-journey-orb');

    function updateThread() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const progress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      const pct = (progress * 100).toFixed(1);
      if (fill) fill.style.height = `${pct}%`;
      if (orb) orb.style.top = `${pct}%`;
    }

    window.addEventListener('scroll', updateThread, { passive: true });
    updateThread();
  }

  /* ============================================================ */
  /* 1. SIGNATURE DESTINATIONS 3D FAN-OUT & REVEAL ON SCROLL     */
  /* ============================================================ */
  function initSignature3DConvergence() {
    tiles = Array.from(document.querySelectorAll('.dest-tile'));
    if (!tiles || tiles.length < 3) return;

    grid = tiles[0].parentElement;
    if (!grid) return;
    grid.classList.add('signature-3d-container');

    initDestTiles3DTilt();

    function calculateScrollProgress() {
      const rect = grid.getBoundingClientRect();
      const windowH = window.innerHeight;

      inView = rect.bottom > 0 && rect.top < windowH;

      // Snappy trigger range: responsive opening from 0.88 down to 0.58 window height
      const startOpen = windowH * 0.88;
      const fullOpen = windowH * 0.58;

      let progress = (startOpen - rect.top) / (startOpen - fullOpen);
      progress = Math.max(0, Math.min(1.0, progress));

      targetFactor = progress;

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(render3DMotionLoop);
      }
    }

    function render3DMotionLoop() {
      animTime += 0.025; // Organic breathing clock

      // Responsive 0.18 lerp momentum for natural fluidity
      currentFactor += (targetFactor - currentFactor) * 0.18;
      const f = currentFactor;

      apply3DTransforms(f, animTime);

      // Keep motion alive with living 3D floating wave while user watches live video reels
      if (inView || Math.abs(targetFactor - currentFactor) > 0.002) {
        requestAnimationFrame(render3DMotionLoop);
      } else {
        isTicking = false;
      }
    }

    window.addEventListener('scroll', calculateScrollProgress, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });
    calculateScrollProgress();
  }

  function apply3DTransforms(f, time) {
    if (!tiles || tiles.length < 3) return;

    const tileLeft = tiles[0];   // Turkey
    const tileCenter = tiles[1]; // Indian Ocean
    const tileRight = tiles[2];  // Dubai

    const isDesktop = window.innerWidth >= 768;
    const unfold = Math.max(0, Math.min(1, f)); // 0 = folded, 1 = fully open
    const fold = 1 - unfold;

    // Organic living floating wave
    const t = time || 0;
    const floatYLeft = unfold * Math.sin(t) * 4;
    const floatRotLeft = unfold * Math.sin(t * 0.8) * 1.4;
    const floatYCenter = unfold * -Math.cos(t) * 5;
    const floatZCenter = unfold * Math.sin(t * 1.2) * 8;
    const floatYRight = unfold * Math.sin(t + 1.2) * 4;
    const floatRotRight = unfold * -Math.sin(t * 0.8) * 1.4;

    // LEFT TILE (Turkey)
    if (tileLeft && !tileLeft.dataset.isHovered) {
      if (isDesktop) {
        const transX = (fold * 115).toFixed(1);
        const transY = (fold * 20 + floatYLeft).toFixed(1);
        const rotY = (fold * 18 - unfold * 5 + floatRotLeft).toFixed(2);
        const rotX = (fold * 5).toFixed(2);
        const rotZ = (-fold * 3).toFixed(2);
        const scale = (0.94 + unfold * 0.06).toFixed(3);
        const shadowSpread = (25 + unfold * 20).toFixed(0);

        tileLeft.style.transform = `perspective(1800px) translateX(${transX}px) translateY(${transY}px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scale})`;
        tileLeft.style.boxShadow = `${-fold * 15}px ${20 + unfold * 15}px ${shadowSpread}px -8px rgba(11, 31, 58, ${0.18 + unfold * 0.15})`;
        tileLeft.style.zIndex = fold > 0.6 ? '2' : '3';
      } else {
        const transY = (fold * 30 + floatYLeft * 0.5).toFixed(1);
        const scale = (0.96 + unfold * 0.04).toFixed(3);
        tileLeft.style.transform = `perspective(1000px) translateY(${transY}px) scale(${scale})`;
        tileLeft.style.boxShadow = '';
      }
    }

    // CENTER TILE (Indian Ocean)
    if (tileCenter && !tileCenter.dataset.isHovered) {
      if (isDesktop) {
        const transZ = (22 + unfold * 28 + floatZCenter).toFixed(1);
        const transY = (-fold * 10 + floatYCenter).toFixed(1);
        const scale = (0.98 + unfold * 0.04).toFixed(3);

        tileCenter.style.transform = `perspective(1800px) translateZ(${transZ}px) translateY(${transY}px) scale(${scale})`;
        tileCenter.style.boxShadow = `0 ${25 + unfold * 20}px ${45 + unfold * 25}px -10px rgba(244, 162, 97, ${0.25 + unfold * 0.25}), 0 0 ${unfold * 35}px rgba(30, 136, 229, ${unfold * 0.25})`;
        tileCenter.style.zIndex = '10';
      } else {
        const transY = (fold * 30 + floatYCenter * 0.5).toFixed(1);
        const scale = (0.96 + unfold * 0.04).toFixed(3);
        tileCenter.style.transform = `perspective(1000px) translateY(${transY}px) scale(${scale})`;
        tileCenter.style.boxShadow = '';
      }
    }

    // RIGHT TILE (Dubai)
    if (tileRight && !tileRight.dataset.isHovered) {
      if (isDesktop) {
        const transX = (-fold * 115).toFixed(1);
        const transY = (fold * 20 + floatYRight).toFixed(1);
        const rotY = (-fold * 18 + unfold * 5 + floatRotRight).toFixed(2);
        const rotX = (fold * 5).toFixed(2);
        const rotZ = (fold * 3).toFixed(2);
        const scale = (0.94 + unfold * 0.06).toFixed(3);
        const shadowSpread = (25 + unfold * 20).toFixed(0);

        tileRight.style.transform = `perspective(1800px) translateX(${transX}px) translateY(${transY}px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scale})`;
        tileRight.style.boxShadow = `${fold * 15}px ${20 + unfold * 15}px ${shadowSpread}px -8px rgba(11, 31, 58, ${0.18 + unfold * 0.15})`;
        tileRight.style.zIndex = fold > 0.6 ? '2' : '3';
      } else {
        const transY = (fold * 30 + floatYRight * 0.5).toFixed(1);
        const scale = (0.96 + unfold * 0.04).toFixed(3);
        tileRight.style.transform = `perspective(1000px) translateY(${transY}px) scale(${scale})`;
        tileRight.style.boxShadow = '';
      }
    }
  }

  /* Interactive 3D Cursor Tilt & Specular Light Reflection on Dest Tiles */
  function initDestTiles3DTilt() {
    if (!tiles || !tiles.length) return;

    tiles.forEach((tile) => {
      tile.addEventListener('mouseenter', () => {
        tile.dataset.isHovered = 'true';
        tile.style.transition = 'transform 0.15s ease-out, box-shadow 0.25s ease';
      });

      tile.addEventListener('mousemove', (e) => {
        const rect = tile.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width - 0.5) * 2;
        const yPercent = (y / rect.height - 0.5) * 2;

        const maxTilt = 10;
        const tiltX = (-yPercent * maxTilt).toFixed(2);
        const tiltY = (xPercent * maxTilt).toFixed(2);

        tile.style.transform = `perspective(1600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px) scale(1.028) translateZ(45px)`;
        tile.style.boxShadow = `
          ${-tiltY * 3}px ${Math.abs(tiltX) * 3 + 28}px 55px -10px rgba(11, 31, 58, 0.35),
          0 0 35px rgba(244, 162, 97, 0.3)
        `;
        tile.style.zIndex = '20';

        let glare = tile.querySelector('.card-3d-glare');
        if (!glare) {
          glare = document.createElement('div');
          glare.className = 'card-3d-glare';
          tile.appendChild(glare);
        }
        glare.style.opacity = '0.9';
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.45) 0%, rgba(244,162,97,0.2) 40%, transparent 70%)`;
      });

      tile.addEventListener('mouseleave', () => {
        delete tile.dataset.isHovered;
        tile.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease';
        apply3DTransforms(currentFactor);

        const glare = tile.querySelector('.card-3d-glare');
        if (glare) {
          glare.style.opacity = '0';
        }
      });
    });
  }

  /* ============================================================ */
  /* 2. KINETIC 3D MARQUEE STREAM VELOCITY TILT                   */
  /* ============================================================ */
  function initKineticMarqueeMotion() {
    const marqueeTrack = document.querySelector('.marquee-track');
    if (!marqueeTrack) return;

    const parent = marqueeTrack.closest('section');
    if (parent) parent.classList.add('kinetic-3d-marquee');

    window.addEventListener('scroll', () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;

      scrollVelocity = delta * 0.12;
      const clampedTilt = Math.max(-10, Math.min(10, scrollVelocity));

      if (parent) {
        parent.style.transform = `perspective(1000px) rotateX(${clampedTilt.toFixed(2)}deg)`;
      }
    }, { passive: true });
  }

  /* ============================================================ */
  /* 3. PACKAGES SECTION 3D CASCADE WAVE ENTRANCE                 */
  /* ============================================================ */
  function initPackages3DWaveEntry() {
    const packagesSection = document.getElementById('packages');
    if (!packagesSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerPackages3DWave();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    observer.observe(packagesSection);

    function triggerPackages3DWave() {
      const cards = packagesSection.querySelectorAll('.pkg-card');
      if (!cards.length) return;

      cards.forEach((card, index) => {
        card.classList.add('pkg-3d-wave-card');
        setTimeout(() => {
          card.classList.add('pkg-in-view');
        }, index * 70); // Staggered 70ms wave cascade
      });
    }

    // Floating Multiplane Scroll Parallax for Package Cards
    let parallaxTicking = false;
    window.addEventListener('scroll', () => {
      if (!parallaxTicking) {
        requestAnimationFrame(() => {
          updatePackagesParallax();
          parallaxTicking = false;
        });
        parallaxTicking = true;
      }
    }, { passive: true });

    function updatePackagesParallax() {
      const rect = packagesSection.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > windowH) return;

      const progress = (windowH - rect.top) / (windowH + rect.height);
      const cards = packagesSection.querySelectorAll('.pkg-card.pkg-in-view');

      cards.forEach((card, i) => {
        if (card.matches(':hover')) return;

        // Alternate columns float with subtle depth delta
        const speed = (i % 2 === 0) ? -22 : 18;
        const offset = ((progress - 0.5) * speed).toFixed(1);
        card.style.transform = `perspective(1000px) translateY(${offset}px)`;
      });
    }
  }

  /* ============================================================ */
  /* 4. INTERACTIVE 3D MOUSE TILT & HOLOGRAPHIC SPECULAR GLARE    */
  /* ============================================================ */
  function initPackageCards3DTilt() {
    const grid = document.getElementById('curved-packages-grid');
    if (!grid) return;

    grid.addEventListener('mousemove', (e) => {
      const card = e.target.closest('.pkg-card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = (x / rect.width - 0.5) * 2;
      const yPercent = (y / rect.height - 0.5) * 2;

      const maxTilt = 14;
      const tiltX = (-yPercent * maxTilt).toFixed(2);
      const tiltY = (xPercent * maxTilt).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-12px) scale(1.035)`;
      card.style.boxShadow = `
        ${-tiltY * 3}px ${Math.abs(tiltX) * 3 + 22}px 55px -10px rgba(11, 31, 58, 0.3),
        0 0 35px rgba(244, 162, 97, 0.24)
      `;

      let glare = card.querySelector('.card-3d-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'card-3d-glare';
        card.style.position = 'relative';
        card.appendChild(glare);
      }
      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4) 0%, rgba(244,162,97,0.2) 35%, transparent 70%)`;
    });

    grid.addEventListener('mouseleave', (e) => {
      const card = e.target.closest('.pkg-card') || e.target;
      if (!card || !card.classList || !card.classList.contains('pkg-card')) return;

      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
      card.style.boxShadow = '';
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease';

      const glare = card.querySelector('.card-3d-glare');
      if (glare) {
        glare.style.opacity = '0';
      }
    }, true);
  }

  /* ============================================================ */
  /* 5. CONNECTED SERVICES, WHY-US & GLOBAL HUBS 3D LEVITATION   */
  /* ============================================================ */
  function initConnectedServicesAndCards3D() {
    // 12 Specialized Services Tiles
    const serviceCards = document.querySelectorAll('.tile-hover');
    serviceCards.forEach(card => card.classList.add('service-3d-card'));

    // Why Us 4 Pillars
    const pillarCards = document.querySelectorAll('.bg-sand.border.border-navy\\/5');
    pillarCards.forEach(card => card.classList.add('pillar-3d-card'));

    // Global Hub Office Cards
    const officeCards = document.querySelectorAll('#offices .reveal, section:has(#offices) .reveal');
    officeCards.forEach(card => card.classList.add('office-3d-card'));

    // Subtle 3D magnetic hover physics on service cards
    serviceCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width - 0.5) * 2;
        const yPercent = (y / rect.height - 0.5) * 2;

        const tiltX = (-yPercent * 8).toFixed(2);
        const tiltY = (xPercent * 8).toFixed(2);
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px) scale(1.025)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

})();
