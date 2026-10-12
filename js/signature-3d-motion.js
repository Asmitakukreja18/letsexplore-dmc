/**
 * Signature Destinations & Packages 3D Motion System
 * - 3D Perspective Convergence on Scroll (Turkey, Indian Ocean, Dubai)
 * - 3D Wave Entrance & Cascading Motion into #packages
 * - Interactive 3D Cursor Tilt & Specular Light Glare on all Package Cards
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initSignature3DScroll();
    initPackageCards3DTilt();
  });

  /* ============================================================ */
  /* 1. 3D PERSPECTIVE CONVERGENCE ON SIGNATURE TILES             */
  /* ============================================================ */
  function initSignature3DScroll() {
    const section = document.querySelector('.dest-tiles-section, section:has(.dest-tile)');
    const tiles = document.querySelectorAll('.dest-tile');
    if (!tiles || tiles.length < 3) return;

    // Set 3D perspective container
    const grid = tiles[0].parentElement;
    if (grid) {
      grid.style.perspective = '1500px';
      grid.style.transformStyle = 'preserve-3d';
    }

    tiles.forEach(tile => {
      tile.style.transformStyle = 'preserve-3d';
      tile.style.willChange = 'transform';
      tile.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease';
    });

    // Scroll listener for 3D convergence
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          update3DTiles();
          ticking = false;
        });
        ticking = true;
      }
    }

    function update3DTiles() {
      if (!grid) return;
      const rect = grid.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Only calculate if visible
      if (rect.bottom < -100 || rect.top > windowH + 100) return;

      // Progress from 0 (entering screen) to 1 (leaving screen towards packages)
      const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
      const scrollFactor = (progress - 0.5) * 2; // -1 to +1

      const tileLeft = tiles[0];   // Turkey
      const tileCenter = tiles[1]; // Indian Ocean
      const tileRight = tiles[2];  // Dubai

      if (tileLeft) {
        const rotY = (scrollFactor * 8).toFixed(2);
        const rotX = (scrollFactor * 4).toFixed(2);
        const rotZ = (-scrollFactor * 1.5).toFixed(2);
        const transY = (scrollFactor * -25).toFixed(1);
        tileLeft.style.transform = `perspective(1400px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) translateY(${transY}px) translateZ(10px)`;
      }

      if (tileCenter) {
        const transZ = (35 + Math.abs(scrollFactor) * 20).toFixed(1);
        const transY = (scrollFactor * 18).toFixed(1);
        const scale = (1.02 + Math.abs(scrollFactor) * 0.02).toFixed(3);
        tileCenter.style.transform = `perspective(1400px) translateZ(${transZ}px) translateY(${transY}px) scale(${scale})`;
      }

      if (tileRight) {
        const rotY = (-scrollFactor * 8).toFixed(2);
        const rotX = (scrollFactor * 4).toFixed(2);
        const rotZ = (scrollFactor * 1.5).toFixed(2);
        const transY = (scrollFactor * -25).toFixed(1);
        tileRight.style.transform = `perspective(1400px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) translateY(${transY}px) translateZ(10px)`;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    update3DTiles();
  }

  /* ============================================================ */
  /* 2. INTERACTIVE 3D MOUSE TILT & HOLOGRAPHIC LIGHT GLARE       */
  /* ============================================================ */
  function initPackageCards3DTilt() {
    const grid = document.getElementById('curved-packages-grid');
    if (!grid) return;

    // Delegate mousemove and mouseleave for all cards (including dynamic ones)
    grid.addEventListener('mousemove', (e) => {
      const card = e.target.closest('.pkg-card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = (x / rect.width - 0.5) * 2; // -1 to +1
      const yPercent = (y / rect.height - 0.5) * 2; // -1 to +1

      const maxTilt = 12; // Degrees
      const tiltX = (-yPercent * maxTilt).toFixed(2);
      const tiltY = (xPercent * maxTilt).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-10px) scale(1.02)`;
      card.style.boxShadow = `
        ${-tiltY * 2}px ${Math.abs(tiltX) * 2 + 15}px 40px -10px rgba(11, 31, 58, 0.24),
        0 0 30px rgba(244, 162, 97, 0.18)
      `;

      // Specular Light Glare
      let glare = card.querySelector('.card-3d-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'card-3d-glare pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-[32px]';
        card.style.position = 'relative';
        card.appendChild(glare);
      }
      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.28) 0%, rgba(244,162,97,0.12) 30%, transparent 70%)`;

      // Media container parallax depth shift
      const media = card.querySelector('.relative.aspect-\\[16\\/11\\]');
      if (media) {
        media.style.transform = `translate(${-xPercent * 4}px, ${-yPercent * 4}px)`;
        media.style.transition = 'transform 0.1s ease-out';
      }
    });

    grid.addEventListener('mouseleave', (e) => {
      const card = e.target.closest('.pkg-card') || e.target;
      resetCardTilt(card);
    }, true);

    function resetCardTilt(card) {
      if (!card || !card.classList || !card.classList.contains('pkg-card')) return;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
      card.style.boxShadow = '';
      card.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s ease';

      const glare = card.querySelector('.card-3d-glare');
      if (glare) {
        glare.style.opacity = '0';
      }

      const media = card.querySelector('.relative.aspect-\\[16\\/11\\]');
      if (media) {
        media.style.transform = 'translate(0, 0)';
        media.style.transition = 'transform 0.5s ease-out';
      }
    }
  }

})();
