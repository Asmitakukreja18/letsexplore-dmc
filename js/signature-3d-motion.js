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
  /* 1. SIGNATURE DESTINATIONS 3D FAN-OUT & REVEAL ON SCROLL     */
  /* ============================================================ */
  function initSignature3DConvergence() {
    tiles = Array.from(document.querySelectorAll('.dest-tile'));
    if (!tiles || tiles.length < 3) return;

    grid = tiles[0].parentElement;
    if (!grid) return;
    grid.classList.add('signature-3d-container');

    // Attach interactive 3D cursor tilt to each dest-tile
    initDestTiles3DTilt();

    function calculateScrollProgress() {
      const rect = grid.getBoundingClientRect();
      const windowH = window.innerHeight;

      // When grid top enters viewport from bottom: rect.top ~= windowH
      // When grid is centered in viewport: rect.top ~= windowH * 0.25
      // Scrolling DOWN brings grid into view -> openFactor grows 0.0 -> 1.0 (CARDS OPEN UP / FAN OUT)
      // Scrolling UP towards top -> openFactor decreases back 1.0 -> 0.0 (CARDS FOLD BACK TOGETHER)
      const startOpen = windowH * 0.95;
      const fullOpen = windowH * 0.22;

      let progress = (startOpen - rect.top) / (startOpen - fullOpen);
      progress = Math.max(0, Math.min(1.0, progress));

      targetFactor = progress;

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(render3DMotionLoop);
      }
    }

    function render3DMotionLoop() {
      // Smooth lerp (linear interpolation) with 0.09 momentum for silky fluid 60fps/120fps physics
      currentFactor += (targetFactor - currentFactor) * 0.09;
      const f = currentFactor; // 0 (clustered/folded) to 1.0 (fully open & fanned out)

      apply3DTransforms(f);

      if (Math.abs(targetFactor - currentFactor) > 0.002) {
        requestAnimationFrame(render3DMotionLoop);
      } else {
        currentFactor = targetFactor;
        apply3DTransforms(currentFactor);
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

    const isDesktop = window.innerWidth >= 768;
    const unfold = Math.max(0, Math.min(1, f)); // 0 = folded, 1 = fully open
    const fold = 1 - unfold;                   // 1 = folded, 0 = fully open

    // LEFT TILE (Turkey)
    if (tileLeft && !tileLeft.dataset.isHovered) {
      if (isDesktop) {
        // As user scrolls down (unfold goes 0 -> 1):
        // transX glides from +125px (tucked behind center) smoothly OUT to 0px (fully open slot)
        // rotY swings gracefully from +18deg inward OUT to -5deg (subtle outward IMAX 3D perspective)
        const transX = (fold * 125).toFixed(1);
        const transY = (fold * 22).toFixed(1);
        const rotY = (fold * 20 - unfold * 5).toFixed(2);
        const rotX = (fold * 6).toFixed(2);
        const rotZ = (-fold * 3.5).toFixed(2);
        const scale = (0.93 + unfold * 0.07).toFixed(3);
        const shadowSpread = (25 + unfold * 20).toFixed(0);

        tileLeft.style.transform = `perspective(1800px) translateX(${transX}px) translateY(${transY}px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scale})`;
        tileLeft.style.boxShadow = `${-fold * 15}px ${20 + unfold * 15}px ${shadowSpread}px -8px rgba(11, 31, 58, ${0.18 + unfold * 0.15})`;
        tileLeft.style.zIndex = fold > 0.6 ? '2' : '3';
      } else {
        // Mobile / Small screen: subtle 3D lift & scale without horizontal overflow
        const transY = (fold * 35).toFixed(1);
        const scale = (0.95 + unfold * 0.05).toFixed(3);
        tileLeft.style.transform = `perspective(1000px) translateY(${transY}px) scale(${scale})`;
        tileLeft.style.boxShadow = '';
      }
    }

    // CENTER TILE (Indian Ocean)
    if (tileCenter && !tileCenter.dataset.isHovered) {
      if (isDesktop) {
        // Elevated in 3D space, proud center focal point
        const transZ = (20 + unfold * 30).toFixed(1);
        const transY = (-fold * 12).toFixed(1);
        const scale = (0.98 + unfold * 0.04).toFixed(3);

        tileCenter.style.transform = `perspective(1800px) translateZ(${transZ}px) translateY(${transY}px) scale(${scale})`;
        tileCenter.style.boxShadow = `0 ${25 + unfold * 20}px ${45 + unfold * 25}px -10px rgba(244, 162, 97, ${0.25 + unfold * 0.25}), 0 0 ${unfold * 35}px rgba(30, 136, 229, ${unfold * 0.25})`;
        tileCenter.style.zIndex = '10';
      } else {
        const transY = (fold * 35).toFixed(1);
        const scale = (0.95 + unfold * 0.05).toFixed(3);
        tileCenter.style.transform = `perspective(1000px) translateY(${transY}px) scale(${scale})`;
        tileCenter.style.boxShadow = '';
      }
    }

    // RIGHT TILE (Dubai)
    if (tileRight && !tileRight.dataset.isHovered) {
      if (isDesktop) {
        // As user scrolls down (unfold goes 0 -> 1):
        // transX glides from -125px (tucked behind center) smoothly OUT to 0px (fully open slot)
        // rotY swings gracefully from -18deg inward OUT to +5deg (subtle outward IMAX 3D perspective)
        const transX = (-fold * 125).toFixed(1);
        const transY = (fold * 22).toFixed(1);
        const rotY = (-fold * 20 + unfold * 5).toFixed(2);
        const rotX = (fold * 6).toFixed(2);
        const rotZ = (fold * 3.5).toFixed(2);
        const scale = (0.93 + unfold * 0.07).toFixed(3);
        const shadowSpread = (25 + unfold * 20).toFixed(0);

        tileRight.style.transform = `perspective(1800px) translateX(${transX}px) translateY(${transY}px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scale})`;
        tileRight.style.boxShadow = `${fold * 15}px ${20 + unfold * 15}px ${shadowSpread}px -8px rgba(11, 31, 58, ${0.18 + unfold * 0.15})`;
        tileRight.style.zIndex = fold > 0.6 ? '2' : '3';
      } else {
        const transY = (fold * 35).toFixed(1);
        const scale = (0.95 + unfold * 0.05).toFixed(3);
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

        const xPercent = (x / rect.width - 0.5) * 2;  // -1 to +1
        const yPercent = (y / rect.height - 0.5) * 2; // -1 to +1

        const maxTilt = 10; // Subtle luxury tilt
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
  /* 2. EXPLICIT 3D FAN-OUT & AUTO-SCROLL TRIGGER                 */
  /* ============================================================ */
  window.trigger3DConvergenceAndScroll = function (e) {
    if (e && e.preventDefault) e.preventDefault();

    // Smoothly scroll into packages section
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
