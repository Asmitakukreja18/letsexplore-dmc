/**
 * Let's Explore DMC — Master Cinematic Airplane Preloader
 * 
 * Exact 6-Scene Choreography:
 * 1. 0.0s – 1.0s: Full-screen cinematic sky with layered drifting clouds.
 * 2. 0.5s – 2.0s: Commercial airliner enters from LEFT edge and reaches CENTER.
 * 3. 2.0s – 3.5s: Airplane window opens in the center, revealing destination imagery.
 * 4. 3.5s – 4.8s: Camera moves through window, then smoothly pulls back / zooms out.
 * 5. 4.8s – 6.0s: Airplane flies away toward the RIGHT edge of the screen.
 * 6. 6.0s – 7.0s: Sky overlay fades out, seamlessly revealing the existing hero section!
 */

(function () {
  'use strict';

  // 1. Existing Destination Packages Imagery
  const DESTINATIONS = [
    {
      name: "Kerala · God's Own Country",
      tag: "Alleppey Backwaters & Houseboats",
      img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85"
    },
    {
      name: "Dubai · Arabian Luxury",
      tag: "Burj Khalifa & Desert Safari",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      name: "Singapore · Futuristic Wonders",
      tag: "Marina Bay Sands & Gardens",
      img: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=85"
    },
    {
      name: "Vietnam · Heritage & Horizons",
      tag: "Cầu Vàng · Golden Bridge",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85"
    },
    {
      name: "Turkey · Dream of Continents",
      tag: "Cappadocia Sunrise Balloons",
      img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=85"
    },
    {
      name: "Bali · Island Bliss",
      tag: "Nusa Penida & Kelingking Beach",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85"
    }
  ];

  // 2. Sound Engine (Disabled per user request: 100% silent)
  class PreloaderSoundEngine {
    constructor() {
      this.isMuted = true;
      this.isPlaying = false;
    }
    init() {}
    ensureRunning() {}
    playEngineRoar() {}
    playCabinChime() {}
    playFlybyWhoosh() {}
    toggleMute() { return false; }
  }

  // 3. Preloader Animation Orchestrator
  function initCinematicAirplanePreloader() {
    const preloader = document.getElementById('cinematic-airplane-preloader');
    if (!preloader) return;

    const airplaneRig = document.getElementById('cap-airplane-rig');
    const windowPortal = document.getElementById('cap-window-portal');
    const slidesContainer = document.getElementById('cap-slides-container');
    const badgeEl = document.getElementById('cap-slide-badge');
    // Cleanly purge any sound & skip intro buttons from DOM immediately
    document.querySelectorAll('.cap-controls, #cap-controls, #cap-sound-btn, #cap-skip-btn, .cap-sound-btn, .cap-skip-btn, [id*="sound-btn"], [id*="skip-btn"]').forEach(el => el.remove());

    const sound = new PreloaderSoundEngine();

    let isFinished = false;
    let slideInterval = null;
    let currentSlide = 0;

    // Render Destination Slides
    if (slidesContainer) {
      slidesContainer.innerHTML = DESTINATIONS.map((d, i) => `
        <img class="cap-slide-item ${i === 0 ? 'is-active' : ''}" 
             src="${d.img}" 
             alt="${d.name}" 
             id="cap-slide-${i}" />
      `).join('');
    }

    function updateBadge(idx) {
      if (!badgeEl) return;
      const d = DESTINATIONS[idx];
      badgeEl.textContent = d.name;
    }

    // Safety fallback: Unconditionally reveal site after 3.5 seconds max
    setTimeout(() => {
      if (!isFinished) finishAnimation();
    }, 3500);

    // Auto-skip if already viewed in this browser session
    if (sessionStorage.getItem('cap_intro_seen') === 'true') {
      preloader.style.display = 'none';
      preloader.classList.add('is-hidden');
      return;
    }

    // Tap/Click anywhere on the preloader screen to skip instantly
    preloader.addEventListener('pointerdown', () => {
      finishAnimation();
    });

    // -------------------------------------------------------------
    // MASTER ANIMATION TIMELINE (GSAP or fallback CSS)
    // -------------------------------------------------------------
    function runTimeline() {
      if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({
          onComplete: finishAnimation
        });

        // Initial Rig Placement (Extreme Left)
        gsap.set(airplaneRig, {
          x: '-110vw',
          y: '6vh',
          scale: 0.92,
          rotation: 3,
          opacity: 1
        });
        gsap.set(windowPortal, {
          scale: 0,
          opacity: 0
        });

        // Start engine audio
        sound.playEngineRoar();

        // SCENE 1 & 2: Airplane flies smoothly from Left to Center (0.1s -> 1.2s)
        tl.to(airplaneRig, {
          x: '0vw',
          y: '0vh',
          scale: 1,
          rotation: -1,
          duration: 1.1,
          ease: 'power3.out'
        }, 0.1);

        // SCENE 3: Entire Airplane & Fuselage Window Zoom In Together (1.2s -> 2.4s)
        tl.call(() => {
          sound.playCabinChime();
          startSlideCycle();
        }, null, 1.1);

        tl.to(airplaneRig, {
          scale: 1.07,
          x: '0vw',
          y: '0.5vh',
          rotation: -1,
          duration: 0.8,
          ease: 'power2.inOut'
        }, 1.2);

        tl.to(windowPortal, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        }, 1.25);

        // Natural cruise float
        tl.to(airplaneRig, {
          scale: 1.09,
          y: '-0.3vh',
          duration: 1.0,
          ease: 'sine.inOut'
        }, 2.0);

        // SCENE 4: Window shrinks back into fuselage (2.7s -> 3.2s)
        tl.to(windowPortal, {
          scale: 0.1,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in'
        }, 2.7);

        tl.to(airplaneRig, {
          scale: 1.0,
          x: '0vw',
          y: '0vh',
          rotation: -1,
          duration: 0.6,
          ease: 'power2.inOut'
        }, 2.7);

        // SCENE 5: Airplane exits smoothly toward the RIGHT (3.2s -> 4.1s)
        tl.call(() => {
          sound.playFlybyWhoosh();
          stopSlideCycle();
        }, null, 3.1);

        tl.to(airplaneRig, {
          x: '125vw',
          y: '-10vh',
          scale: 1.12,
          rotation: -5,
          duration: 1.0,
          ease: 'power2.in'
        }, 3.2);

        // SCENE 6: Sky overlay fades out smoothly revealing original hero (3.8s -> 4.5s)
        tl.to(preloader, {
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out'
        }, 3.8);

      } else {
        // Vanilla CSS Fallback
        sound.playEngineRoar();
        airplaneRig.style.transform = 'translate(-110vw, 6vh) scale(0.92) rotate(3deg)';
        airplaneRig.style.transition = 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)';

        setTimeout(() => {
          airplaneRig.style.transform = 'translate(0vw, 0vh) scale(1) rotate(-1deg)';
        }, 100);

        setTimeout(() => {
          sound.playCabinChime();
          startSlideCycle();
          airplaneRig.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          airplaneRig.style.transform = 'translate(0vw, 0.5vh) scale(1.07) rotate(-1deg)';
          windowPortal.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease';
          windowPortal.style.transform = 'translate(-50%, -50%) scale(1)';
          windowPortal.style.opacity = '1';
        }, 1200);

        setTimeout(() => {
          windowPortal.style.transition = 'transform 0.5s ease-in, opacity 0.4s ease';
          windowPortal.style.transform = 'translate(-50%, -50%) scale(0.1)';
          windowPortal.style.opacity = '0';
          airplaneRig.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          airplaneRig.style.transform = 'translate(0vw, 0vh) scale(1) rotate(-1deg)';
        }, 2700);

        setTimeout(() => {
          sound.playFlybyWhoosh();
          stopSlideCycle();
          airplaneRig.style.transition = 'transform 1.0s cubic-bezier(0.4, 0, 0.2, 1)';
          airplaneRig.style.transform = 'translate(125vw, -10vh) scale(1.12) rotate(-5deg)';
        }, 3200);

        setTimeout(() => {
          finishAnimation();
        }, 4100);
      }
    }

    // Slides cycle inside the window (Smooth 450ms pacing)
    function startSlideCycle() {
      updateBadge(0);
      slideInterval = setInterval(() => {
        if (isFinished) return;
        currentSlide = (currentSlide + 1) % DESTINATIONS.length;
        DESTINATIONS.forEach((_, i) => {
          const el = document.getElementById(`cap-slide-${i}`);
          if (el) el.classList.toggle('is-active', i === currentSlide);
        });
        updateBadge(currentSlide);
      }, 450);
    }

    function stopSlideCycle() {
      clearInterval(slideInterval);
    }

    // SCENE 6: Finish & Reveal Original Hero Section Underneath
    function finishAnimation() {
      if (isFinished) return;
      isFinished = true;
      stopSlideCycle();
      sessionStorage.setItem('cap_intro_seen', 'true');

      preloader.classList.add('is-hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 700);
    }

    // Run animation immediately
    runTimeline();
  }

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCinematicAirplanePreloader);
  } else {
    initCinematicAirplanePreloader();
  }

  // Allow manual replay for testing: window.replayAirplanePreloader()
  window.replayAirplanePreloader = function () {
    const preloader = document.getElementById('cinematic-airplane-preloader');
    if (preloader) {
      preloader.classList.remove('is-hidden');
      preloader.style.display = 'flex';
      preloader.style.opacity = '1';
      preloader.style.visibility = 'visible';
      initCinematicAirplanePreloader();
    }
  };

})();
