/**
 * Let's Explore DMC — Signature Destinations & Packages Master 3D Motion System
 * - 3D Perspective Convergence & Mix on Scroll (Turkey, Indian Ocean, Dubai cards)
 * - Interactive 3D Mix & Reveal Scroll Trigger (window.trigger3DConvergenceAndScroll)
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
      perspective: 2000px !important;
      perspective-origin: center center !important;
      transform-style: preserve-3d !important;
    }
    .dest-tile {
      transform-style: preserve-3d !important;
      will-change: transform, box-shadow !important;
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
    }
    .pkg-3d-wave-card {
      opacity: 0;
      transform: perspective(1200px) translateY(90px) rotateX(22deg) scale(0.9);
      transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
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

  let tiles = [];
  let grid = null;
  let currentFactor = 0;
  let targetFactor = 0;
  let isTicking = false;

  document.addEventListener('DOMContentLoaded', () => {
    initSignature3DConvergence();
    initPackages3DWaveEntry();
    initPackageCards3DTilt();
    initTriggerButton();
  });

  /* ============================================================ */
  /* 1. SIGNATURE DESTINATIONS 3D CONVERGENCE & MIX ON SCROLL     */
  /* ============================================================ */
  function initSignature3DConvergence() {
    tiles = Array.from(document.querySelectorAll('.dest-tile'));
    if (!tiles || tiles.length < 3) return;

    grid = tiles[0].parentElement;
    if (!grid) return;
    grid.classList.add('signature-3d-container');

    function calculateScrollProgress() {
      const rect = grid.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Progress: 0 when entering viewport, 1.0 when scrolling towards packages
      const totalDist = windowH + rect.height;
      const currentDist = windowH - rect.top;
      const progress = Math.max(0, Math.min(1.2, currentDist / totalDist));

      // Convergence intensity peaks as user scrolls past tiles down towards packages
      if (progress < 0.25) {
        targetFactor = 0;
      } else {
        // Range 0.25 to 0.85 maps to 0 to 1.0
        targetFactor = Math.min(1.0, (progress - 0.25) / 0.6);
      }

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(render3DMotionLoop);
      }
    }

    function render3DMotionLoop() {
      // Smooth lerp (linear interpolation) for silky 60fps/120fps physics
      currentFactor += (targetFactor - currentFactor) * 0.14;
      const f = currentFactor; // 0 to 1

      apply3DTransforms(f);

      if (Math.abs(targetFactor - currentFactor) > 0.003) {
        requestAnimationFrame(render3DMotionLoop);
      } else {
        isTicking = false;
      }
    }

    window.addEventListener('scroll', calculateScrollProgress, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });
    calculateScrollProgress();
  }

  function apply3DTransforms(f) {
    if (!tiles || tiles.length < 3) return;

    const tileLeft = tiles[0];   // Turkey
    const tileCenter = tiles[1]; // Indian Ocean
    const tileRight = tiles[2];  // Dubai

    if (tileLeft) {
      // Folds inward towards center, rotates in 3D perspective and layers smoothly
      const rotY = (f * 28).toFixed(2);
      const rotX = (f * 10).toFixed(2);
      const rotZ = (-f * 5).toFixed(2);
      const transX = (f * 160).toFixed(1);
      const transY = (f * 45).toFixed(1);
      const scale = (1 - f * 0.06).toFixed(3);
      const shadowSpread = (f * 45).toFixed(0);

      tileLeft.style.transform = `perspective(1800px) translateX(${transX}px) translateY(${transY}px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scale})`;
      tileLeft.style.boxShadow = `${-f * 25}px ${25 + f * 25}px ${shadowSpread}px -5px rgba(11, 31, 58, ${0.2 + f * 0.3})`;
      tileLeft.style.zIndex = '2';
    }

    if (tileCenter) {
      // Pops forward towards the camera with glorious 3D depth and radiant aura
      const transZ = (f * 140).toFixed(1);
      const transY = (-f * 30).toFixed(1);
      const scale = (1 + f * 0.09).toFixed(3);
      const rotX = (-f * 5).toFixed(2);

      tileCenter.style.transform = `perspective(1800px) translateZ(${transZ}px) translateY(${transY}px) rotateX(${rotX}deg) scale(${scale})`;
      tileCenter.style.boxShadow = `0 ${30 + f * 35}px ${50 + f * 40}px -10px rgba(244, 162, 97, ${0.3 + f * 0.4}), 0 0 ${f * 50}px rgba(30, 136, 229, ${f * 0.35})`;
      tileCenter.style.zIndex = f > 0.05 ? '10' : '3';
    }

    if (tileRight) {
      // Folds inward towards center, mirroring left tile
      const rotY = (-f * 28).toFixed(2);
      const rotX = (f * 10).toFixed(2);
      const rotZ = (f * 5).toFixed(2);
      const transX = (-f * 160).toFixed(1);
      const transY = (f * 45).toFixed(1);
      const scale = (1 - f * 0.06).toFixed(3);
      const shadowSpread = (f * 45).toFixed(0);

      tileRight.style.transform = `perspective(1800px) translateX(${transX}px) translateY(${transY}px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scale})`;
      tileRight.style.boxShadow = `${f * 25}px ${25 + f * 25}px ${shadowSpread}px -5px rgba(11, 31, 58, ${0.2 + f * 0.3})`;
      tileRight.style.zIndex = '2';
    }
  }

  /* ============================================================ */
  /* 2. EXPLICIT 3D CONVERGENCE & AUTO-SCROLL TRIGGER             */
  /* ============================================================ */
  window.trigger3DConvergenceAndScroll = function (e) {
    if (e && e.preventDefault) e.preventDefault();

    // 1. Play dramatic 3D convergence
    let step = 0;
    const animInterval = setInterval(() => {
      step += 0.08;
      apply3DTransforms(Math.min(1.0, step));
      if (step >= 1.0) {
        clearInterval(animInterval);

        // 2. Smoothly scroll into packages section
        const packagesSection = document.getElementById('packages');
        if (packagesSection) {
          packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 16);
  };

  function initTriggerButton() {
    const btn = document.getElementById('btn-trigger-3d-mix');
    if (btn) {
      btn.addEventListener('click', (e) => {
        window.trigger3DConvergenceAndScroll(e);
      });
    }
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
    }, { threshold: 0.12 });

    observer.observe(packagesSection);

    function triggerPackages3DWave() {
      const cards = packagesSection.querySelectorAll('.pkg-card');
      if (!cards.length) return;

      cards.forEach((card, index) => {
        card.classList.add('pkg-3d-wave-card');
        setTimeout(() => {
          card.classList.add('pkg-in-view');
        }, index * 75); // Staggered 75ms wave cascade
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

      const xPercent = (x / rect.width - 0.5) * 2; // -1 to +1
      const yPercent = (y / rect.height - 0.5) * 2; // -1 to +1

      const maxTilt = 15; // Degrees
      const tiltX = (-yPercent * maxTilt).toFixed(2);
      const tiltY = (xPercent * maxTilt).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-14px) scale(1.035)`;
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

})();
