/**
 * Let's Explore DMC — Signature Destinations & Packages Master 3D Motion System
 * - 3D Perspective Convergence & Mix on Scroll (Turkey, Indian Ocean, Dubai cards)
 * - 3D Cascading Waterfall Wave Entry into #packages
 * - Floating Multiplane Parallax on Packages Scroll
 * - Interactive 3D Cursor Tilt with Dynamic Specular Glare on Package Cards
 */
(function () {
  'use strict';

  // Inject High-Performance 3D CSS Styles
  const styleEl = document.createElement('style');
  styleEl.id = 'signature-3d-motion-styles';
  styleEl.textContent = `
    .signature-3d-container {
      perspective: 1800px !important;
      perspective-origin: center center !important;
      transform-style: preserve-3d !important;
    }
    .dest-tile {
      transform-style: preserve-3d !important;
      will-change: transform, box-shadow !important;
    }
    .pkg-3d-wave-card {
      opacity: 0;
      transform: perspective(1200px) translateY(90px) rotateX(20deg) scale(0.9);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, opacity;
    }
    .pkg-3d-wave-card.pkg-in-view {
      opacity: 1 !important;
      transform: perspective(1200px) translateY(0) rotateX(0deg) scale(1) !important;
    }
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
  `;
  document.head.appendChild(styleEl);

  document.addEventListener('DOMContentLoaded', () => {
    initSignature3DConvergence();
    initPackages3DWaveEntry();
    initPackageCards3DTilt();
  });

  /* ============================================================ */
  /* 1. SIGNATURE DESTINATIONS 3D CONVERGENCE & MIX ON SCROLL     */
  /* ============================================================ */
  function initSignature3DConvergence() {
    const tiles = document.querySelectorAll('.dest-tile');
    if (!tiles || tiles.length < 3) return;

    const grid = tiles[0].parentElement;
    if (!grid) return;
    grid.classList.add('signature-3d-container');

    // Lerp state for fluid 60fps / 120fps physics
    let currentFactor = 0;
    let targetFactor = 0;
    let isTicking = false;

    function calculateScrollProgress() {
      const rect = grid.getBoundingClientRect();
      const windowH = window.innerHeight;

      // When grid top is at windowH, progress = 0
      // When grid center is at windowH / 2, progress = 0.5
      // When grid bottom scrolls past top, progress = 1.0
      const totalDist = windowH + rect.height;
      const currentDist = windowH - rect.top;
      const progress = Math.max(0, Math.min(1.2, currentDist / totalDist));

      // Convergence intensity peaks as user scrolls from center down towards packages
      // factor: 0 (top of page) -> 0 (when tiles first enter) -> 1.0 (when scrolling towards packages)
      if (progress < 0.3) {
        targetFactor = 0;
      } else {
        // Range 0.3 to 0.9 maps to 0 to 1.0
        targetFactor = Math.min(1.0, (progress - 0.3) / 0.6);
      }

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(render3DMotionLoop);
      }
    }

    function render3DMotionLoop() {
      // Smooth lerp (linear interpolation)
      currentFactor += (targetFactor - currentFactor) * 0.12;

      const f = currentFactor; // 0 to 1

      const tileLeft = tiles[0];   // Turkey
      const tileCenter = tiles[1]; // Indian Ocean
      const tileRight = tiles[2];  // Dubai

      if (tileLeft) {
        // Folds inward towards center, tilts on Y axis and drops slightly down
        const rotY = (f * 22).toFixed(2);
        const rotX = (f * 8).toFixed(2);
        const rotZ = (-f * 4).toFixed(2);
        const transX = (f * 95).toFixed(1);
        const transY = (f * 35).toFixed(1);
        const scale = (1 - f * 0.05).toFixed(3);
        const shadowSpread = (f * 35).toFixed(0);

        tileLeft.style.transform = `perspective(1600px) translateX(${transX}px) translateY(${transY}px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scale})`;
        tileLeft.style.boxShadow = `${-f * 20}px ${20 + f * 20}px ${shadowSpread}px -5px rgba(11, 31, 58, ${0.2 + f * 0.25})`;
      }

      if (tileCenter) {
        // Pops forward towards the camera, lifting in 3D space with brilliant glow
        const transZ = (f * 110).toFixed(1);
        const transY = (-f * 25).toFixed(1);
        const scale = (1 + f * 0.07).toFixed(3);
        const rotX = (-f * 4).toFixed(2);

        tileCenter.style.transform = `perspective(1600px) translateZ(${transZ}px) translateY(${transY}px) rotateX(${rotX}deg) scale(${scale})`;
        tileCenter.style.boxShadow = `0 ${25 + f * 25}px ${40 + f * 30}px -10px rgba(244, 162, 97, ${0.25 + f * 0.35}), 0 0 ${f * 40}px rgba(30, 136, 229, ${f * 0.3})`;
        tileCenter.style.zIndex = f > 0.1 ? '10' : '1';
      }

      if (tileRight) {
        // Folds inward towards center, mirrors left tile
        const rotY = (-f * 22).toFixed(2);
        const rotX = (f * 8).toFixed(2);
        const rotZ = (f * 4).toFixed(2);
        const transX = (-f * 95).toFixed(1);
        const transY = (f * 35).toFixed(1);
        const scale = (1 - f * 0.05).toFixed(3);
        const shadowSpread = (f * 35).toFixed(0);

        tileRight.style.transform = `perspective(1600px) translateX(${transX}px) translateY(${transY}px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scale})`;
        tileRight.style.boxShadow = `${f * 20}px ${20 + f * 20}px ${shadowSpread}px -5px rgba(11, 31, 58, ${0.2 + f * 0.25})`;
      }

      // Continue RAF loop while animating
      if (Math.abs(targetFactor - currentFactor) > 0.005) {
        requestAnimationFrame(render3DMotionLoop);
      } else {
        isTicking = false;
      }
    }

    window.addEventListener('scroll', calculateScrollProgress, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });
    calculateScrollProgress();
  }

  /* ============================================================ */
  /* 2. PACKAGES SECTION 3D CASCADE WAVE ENTRANCE                 */
  /* ============================================================ */
  function initPackages3DWaveEntry() {
    const packagesSection = document.getElementById('packages');
    if (!packagesSection) return;

    // Observe when packages container scrolls into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerPackages3DWave();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(packagesSection);

    function triggerPackages3DWave() {
      const cards = packagesSection.querySelectorAll('.pkg-card');
      if (!cards.length) return;

      cards.forEach((card, index) => {
        card.classList.add('pkg-3d-wave-card');
        setTimeout(() => {
          card.classList.add('pkg-in-view');
        }, index * 80); // Staggered 80ms wave cascade
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
        // Skip card if currently hovered by mouse
        if (card.matches(':hover')) return;

        // Multiplane depth float: alternate columns float with subtle depth delta
        const speed = (i % 2 === 0) ? -20 : 15;
        const offset = ((progress - 0.5) * speed).toFixed(1);
        card.style.transform = `perspective(1000px) translateY(${offset}px)`;
      });
    }
  }

  /* ============================================================ */
  /* 3. INTERACTIVE 3D MOUSE TILT & HOLOGRAPHIC SPECULAR GLARE    */
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

      const xPercent = (x / rect.width - 0.5) * 2; // -1 to +1
      const yPercent = (y / rect.height - 0.5) * 2; // -1 to +1

      const maxTilt = 14; // Degrees
      const tiltX = (-yPercent * maxTilt).toFixed(2);
      const tiltY = (xPercent * maxTilt).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-12px) scale(1.03)`;
      card.style.boxShadow = `
        ${-tiltY * 2.5}px ${Math.abs(tiltX) * 2.5 + 20}px 50px -10px rgba(11, 31, 58, 0.28),
        0 0 35px rgba(244, 162, 97, 0.22)
      `;

      // Specular Glare Effect
      let glare = card.querySelector('.card-3d-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'card-3d-glare';
        card.style.position = 'relative';
        card.appendChild(glare);
      }
      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.35) 0%, rgba(244,162,97,0.18) 35%, transparent 70%)`;
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

})();
