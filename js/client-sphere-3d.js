/**
 * Let's Explore DMC — 3D Interactive Client Memories Photo Sphere
 * Implements the signature 3D Fibonacci Sphere Photo Universe
 * with drag rotation, inertia, centered counter-rotating headline, and luxury lightbox plate.
 */
(function() {
  'use strict';

  // Client Data: 12 Real Verified Clients from Let's Explore DMC
  const CLIENT_STORIES = [
    {
      img: 'images/clients/client-01.jpeg',
      name: 'Rohan & Meera Kapoor',
      role: 'Honeymoon Couple · Mumbai',
      dest: '🇹🇷 Turkey 5D4N Honeymoon',
      headline: '"Unforgettable Sunrise in Cappadocia & Free Room Upgrade!"',
      quote: 'Cappadocia sunrise with 120 hot air balloons in the sky was surreal. On day 4, the Let\'s Explore team surprised us with a complimentary cave suite upgrade with a private pool. Everything was on-time with private chauffeurs.',
      stars: 5,
      date: 'Visited May 2026'
    },
    {
      img: 'images/clients/client-02.jpeg',
      name: 'Ananya Desai',
      role: 'Luxury Traveler · Pune',
      dest: '🇲🇻 Maldives Water Villa',
      headline: '"Seamless Speedboat Transfers & Luxury Ocean Villa"',
      quote: 'From airport pickup in Male to our glass-floor water villa, every single detail was planned to perfection. The all-inclusive gourmet dining and sunset dolphin cruise made our vacation completely stress-free.',
      stars: 5,
      date: 'Visited April 2026'
    },
    {
      img: 'images/clients/client-03.jpeg',
      name: 'Dr. Amit & Sangeeta Joshi',
      role: 'Family Trip · Nagpur',
      dest: '🇬🇪 Georgia Caucasus · ₹1,40,000',
      headline: '"Mind-Blowing Kazbegi 4x4 Jeep Safari & Tbilisi"',
      quote: 'We booked the Georgia package (₹1,40,000 per person). Kazbegi mountains, Gergeti Trinity church, and Old Tbilisi cable car ride were out of this world. The on-ground team was constantly connected with us on WhatsApp.',
      stars: 5,
      date: 'Visited March 2026'
    },
    {
      img: 'images/clients/client-04.jpeg',
      name: 'Arjun & Tanya Mehta',
      role: 'Family Vacation · Jaipur',
      dest: '🇨🇭 Swiss Alps & Glacier',
      headline: '"Zero Stress Family Holiday with Two Kids"',
      quote: 'Traveling with kids (6 & 9) to Switzerland felt daunting, but the Swiss Rail Pass, mountain excursion tickets to Titlis & Jungfraujoch, and boutique hotel check-ins were all flawless.',
      stars: 5,
      date: 'Visited June 2026'
    },
    {
      img: 'images/clients/client-05.jpeg',
      name: 'Kabir & Rhea Singhania',
      role: 'Friends Group · Delhi',
      dest: '🇦🇪 Dubai Sky & Desert',
      headline: '"Private Dune Bashing & VIP Marina Yacht Party"',
      quote: 'The desert safari VIP camp setup with live barbecue and Tanoura dance was unmatched. Our desert 4x4 driver was exceptionally skilled. Let\'s Explore is our permanent travel partner now.',
      stars: 5,
      date: 'Visited February 2026'
    },
    {
      img: 'images/clients/client-06.jpeg',
      name: 'Vikram Patel',
      role: 'Solo Explorer · Ahmedabad',
      dest: '🌴 Bali Ubud & Nusa Penida',
      headline: '"Ubud Private Pool Villa & Kelingking Cliff"',
      quote: 'Handara gate early morning without crowds, jungle swing over rice terraces, and private boat transfer to Nusa Penida. Local Balinese drivers were respectful and spoke great English.',
      stars: 5,
      date: 'Visited July 2026'
    },
    {
      img: 'images/clients/client-07.jpeg',
      name: 'Pooja & Sameer Deshmukh',
      role: 'Family Vacation · Amravati',
      dest: '🏔️ Kashmir Dal Lake & Gulmarg',
      headline: '"Gulmarg Phase 2 Gondola & Houseboat Magic"',
      quote: 'Our hometown DMC made us proud! Premium luxury houseboat on Dal lake with steaming Kashmiri Kahwa, followed by snowfall in Gulmarg. 24/7 team support was always ready.',
      stars: 5,
      date: 'Visited January 2026'
    },
    {
      img: 'images/clients/client-08.jpeg',
      name: 'Rajeshwari Iyer',
      role: 'Couples Tour · Bengaluru',
      dest: '🏝️ Andaman Coral Islands',
      headline: '"Pristine Radhanagar Beach & Private Yacht"',
      quote: 'Havelock island resort with private white sand beach access. Scuba diving in Elephant beach was breathtaking. Transparent billing and zero surprise charges.',
      stars: 5,
      date: 'Visited May 2026'
    },
    {
      img: 'images/clients/client-09.jpeg',
      name: 'Kunal & Neha Sharma',
      role: 'Adventure Tour · Mumbai',
      dest: '🇹🇭 Thailand Island Hopping',
      headline: '"Phi Phi Islands Speedboat & Bangkok Shopping"',
      quote: 'Direct Phuket airport VIP meet and greet. Private speedboat to Maya Bay and snorkeling in crystal emerald waters. Super smooth coordination by the Let\'s Explore Thailand team.',
      stars: 5,
      date: 'Visited March 2026'
    },
    {
      img: 'images/clients/client-10.jpeg',
      name: 'Deepak Verma',
      role: 'Family Holiday · Raipur',
      dest: '🌿 Kerala Backwaters',
      headline: '"Munnar Tea Hills & Alleppey Houseboat"',
      quote: 'Ayurvedic wellness massage, fresh Malabar seafood prepared onboard the houseboat, and misty tea plantations in Munnar. Unbelievable tranquility.',
      stars: 5,
      date: 'Visited August 2026'
    },
    {
      img: 'images/clients/client-11.jpeg',
      name: 'Nikhil & Sneha Bansal',
      role: 'Couples Tour · Indore',
      dest: '🇱🇰 Sri Lanka Ramayana Trail',
      headline: '"Scenic Ella Train & Sigiriya Fortress"',
      quote: 'Climbing Sigiriya rock at dawn and taking the famous blue train through tea estates. The English-speaking chauffeur was knowledgeable and courteous throughout.',
      stars: 5,
      date: 'Visited April 2026'
    },
    {
      img: 'images/clients/client-12.jpeg',
      name: 'Let\'s Explore Community',
      role: '10,000+ Happy Guests',
      dest: '✈️ Worldwide Luxury DMC Network',
      headline: '"10,000+ Real Travel Stories Handcrafted Across The Globe"',
      quote: 'Every itinerary is customized by our Amravati, Mumbai & Bali destination architects with verified 4★/5★ partner hotels and private vehicles.',
      stars: 5,
      date: 'Continuous 2026'
    }
  ];

  // 16 Positions on the Fibonacci Sphere (clean spacing, large photos)
  const N = 16;
  const GA = Math.PI * (3 - Math.sqrt(5)); // Golden angle ~2.39996 rad

  let stage, world, orb, headline;
  let cards = [];
  let R = 440;
  let cw = 270;
  let ch = 190;
  let perspective = 1150;

  // Camera & Interaction State
  let spin = 0;
  let tilt = -3;
  let camZ = 20;
  let camZTarget = 20;
  let dragX = 0;
  let dragY = 0;
  let velX = 0.08; // Gentle initial idle spin
  let velY = 0;
  let isDragging = false;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let pointerDownTime = 0;
  let activeCardIndex = -1;
  let isLightboxOpen = false;
  let rafId = null;

  function initSphere() {
    stage = document.getElementById('client-sphere-stage');
    if (!stage) return;

    world = document.getElementById('client-sphere-world');
    orb = document.getElementById('client-sphere-orb');
    headline = document.getElementById('client-sphere-headline');

    if (!world || !orb || !headline) return;

    // Create cards distributed along Fibonacci sphere
    orb.innerHTML = '';
    cards = [];

    for (let i = 0; i < N; i++) {
      const story = CLIENT_STORIES[i % CLIENT_STORIES.length];
      const y = 1 - (i / (N - 1)) * 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * GA;
      const x = Math.cos(theta) * rad;
      const z = Math.sin(theta) * rad;
      const lat = Math.asin(y) * 180 / Math.PI;
      const lon = Math.atan2(x, z) * 180 / Math.PI;

      const card = document.createElement('div');
      card.className = 'client-sphere-card' + (i % 4 === 0 ? ' tall' : '');
      card.dataset.index = i;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', story.name + ' - ' + story.dest);

      // Clean, photo-first layout: 90% photo visibility with minimal bottom hairline
      card.innerHTML = `
        <figure class="client-sphere-figure">
          <img src="${story.img}" alt="${story.name}" decoding="async" />
          <div class="client-sphere-pill">
            <span>${story.dest.split(' ')[0]}</span>
            <span class="font-bold text-[10px] tracking-wide">${story.dest.split(' ')[1] || 'Trip'}</span>
          </div>
          <div class="client-sphere-caption">
            <div class="client-sphere-name">${story.name}</div>
            <div class="client-sphere-loc">${story.dest}</div>
          </div>
        </figure>
      `;

      card.unitVector = { x, y, z, lat, lon };
      orb.appendChild(card);
      cards.push(card);

      // Card Click Handler -> Open Lightbox
      card.addEventListener('click', (e) => {
        // Prevent click if user was dragging
        const moveDist = Math.hypot(e.clientX - lastPointerX, e.clientY - lastPointerY);
        if (moveDist > 8 && Date.now() - pointerDownTime > 250) return;
        openLightbox(i % CLIENT_STORIES.length, card);
      });
    }

    computeDimensions();
    bindEvents();
    startLoop();
  }

  function computeDimensions() {
    if (!stage) return;
    const w = stage.clientWidth || window.innerWidth;
    const h = stage.clientHeight || 700;

    const isMobile = w <= 640;
    const isTablet = w > 640 && w <= 1024;

    if (isMobile) {
      cw = 135;
      ch = 95;
      R = Math.max(160, Math.min(200, w * 0.42));
      perspective = 700;
    } else if (isTablet) {
      cw = 225;
      ch = 160;
      R = Math.max(340, Math.min(440, w * 0.42));
      perspective = 980;
    } else {
      // Desktop: Large, crisp, vibrant cards
      cw = 275;
      ch = 190;
      R = Math.max(400, Math.min(520, w * 0.42, h * 0.58));
      perspective = 1200;
    }

    stage.style.perspective = perspective + 'px';

    // Apply geometry to each card
    cards.forEach((card) => {
      const u = card.unitVector;
      const isTall = card.classList.contains('tall');
      const cardHeight = isTall ? Math.round(cw * 1.22) : ch;

      card.style.width = cw + 'px';
      card.style.height = cardHeight + 'px';
      card.style.marginLeft = (-cw / 2) + 'px';
      card.style.marginTop = (-cardHeight / 2) + 'px';

      const tx = (u.x * R).toFixed(1);
      const ty = (-u.y * R).toFixed(1);
      const tz = (u.z * R).toFixed(1);
      const rlon = u.lon.toFixed(1);
      const rlat = u.lat.toFixed(1);

      card.style.transform = `translate3d(${tx}px, ${ty}px, ${tz}px) rotateY(${rlon}deg) rotateX(${rlat}deg)`;
    });
  }

  function bindEvents() {
    window.addEventListener('resize', computeDimensions, { passive: true });

    // Drag interactions on stage (mobile touch-friendly: allows natural vertical scrolling)
    let startTouchX = 0;
    let startTouchY = 0;
    let gestureDetermined = false;
    let isHorizontalSpin = false;

    stage.addEventListener('pointerdown', (e) => {
      if (isLightboxOpen) return;
      isDragging = true;
      startTouchX = e.clientX;
      startTouchY = e.clientY;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      pointerDownTime = Date.now();
      velX = 0;
      velY = 0;
      gestureDetermined = e.pointerType !== 'touch';
      isHorizontalSpin = e.pointerType !== 'touch';
      if (e.pointerType !== 'touch') {
        try { stage.setPointerCapture(e.pointerId); } catch (_) {}
      }
    });

    stage.addEventListener('pointermove', (e) => {
      if (!isDragging || isLightboxOpen) return;
      const dx = e.clientX - lastPointerX;
      const dy = e.clientY - lastPointerY;

      if (!gestureDetermined) {
        const totalDx = Math.abs(e.clientX - startTouchX);
        const totalDy = Math.abs(e.clientY - startTouchY);
        if (totalDx > 6 || totalDy > 6) {
          gestureDetermined = true;
          if (totalDx > totalDy) {
            isHorizontalSpin = true;
            try { stage.setPointerCapture(e.pointerId); } catch (_) {}
          } else {
            // User is scrolling down/up the page
            isHorizontalSpin = false;
            isDragging = false;
            return;
          }
        } else {
          return;
        }
      }

      if (!isHorizontalSpin) return;

      lastPointerX = e.clientX;
      lastPointerY = e.clientY;

      velX = dx * 0.14;
      velY = dy * 0.14;
      dragX += velX;
      dragY -= velY;

      // Pitch clamping within ±32 degrees
      dragY = Math.max(-32 - tilt, Math.min(32 - tilt, dragY));
    });

    const endDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      gestureDetermined = false;
      isHorizontalSpin = false;
      try { stage.releasePointerCapture(e.pointerId); } catch (_) {}
    };

    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);

    // Mouse wheel slight dolly zoom
    stage.addEventListener('wheel', (e) => {
      if (isLightboxOpen) return;
      camZTarget += e.deltaY * -0.05;
      camZTarget = Math.max(-40, Math.min(60, camZTarget));
    }, { passive: true });
  }

  let autoSpin = true;
  let baseAutoSpeed = 0.14; // Silky smooth, calm cinematic rotation (~8.4 deg/s)
  let currentSpeed = 0.14;
  let targetSpeed = 0.14;
  let continuousYaw = 0;
  let isHoveringCard = false;
  let isStageVisible = false;

  function injectAtmosphere() {
    if (!stage || stage.querySelector('.client-sphere-stars')) return;

    // 1. Cosmic Starlight Bokeh Particles
    const starsContainer = document.createElement('div');
    starsContainer.className = 'client-sphere-stars';

    for (let i = 0; i < 28; i++) {
      const star = document.createElement('div');
      star.className = 'client-sphere-star';
      const size = (Math.random() * 3 + 1.5).toFixed(1);
      const top = (Math.random() * 100).toFixed(1);
      const left = (Math.random() * 100).toFixed(1);
      const delay = (Math.random() * 4).toFixed(2);
      const dur = (Math.random() * 3 + 2.5).toFixed(2);
      const color = Math.random() > 0.4 ? 'rgba(244,162,97,0.85)' : 'rgba(142,244,255,0.85)';

      star.style.cssText = `
        position: absolute;
        top: ${top}%;
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        box-shadow: 0 0 ${size * 3}px ${color};
        opacity: ${(Math.random() * 0.6 + 0.2).toFixed(2)};
        animation: starTwinkle ${dur}s ease-in-out ${delay}s infinite alternate;
        pointer-events: none;
        z-index: 2;
      `;
      starsContainer.appendChild(star);
    }
    stage.appendChild(starsContainer);

    // 2. Interactive Orbit Controls at the bottom
    const controls = document.createElement('div');
    controls.className = 'client-sphere-orbit-controls';
    controls.innerHTML = `
      <button id="btn-sphere-spin-left" class="sphere-ctrl-btn" title="Spin Left">
        <span class="material-symbols-outlined text-base">rotate_left</span>
      </button>
      <button id="btn-sphere-toggle-orbit" class="sphere-ctrl-btn active" title="Toggle Auto-Orbit">
        <span class="material-symbols-outlined text-base">motion_photos_auto</span>
        <span class="text-[11px] font-bold uppercase tracking-wider">Auto-Orbit ON</span>
      </button>
      <button id="btn-sphere-spin-right" class="sphere-ctrl-btn" title="Spin Right">
        <span class="material-symbols-outlined text-base">rotate_right</span>
      </button>
    `;
    stage.appendChild(controls);

    // Bind controls
    document.getElementById('btn-sphere-spin-left').addEventListener('click', () => {
      velX -= 3.2;
    });
    document.getElementById('btn-sphere-spin-right').addEventListener('click', () => {
      velX += 3.2;
    });
    const toggleBtn = document.getElementById('btn-sphere-toggle-orbit');
    toggleBtn.addEventListener('click', () => {
      autoSpin = !autoSpin;
      if (autoSpin) {
        toggleBtn.classList.add('active');
        toggleBtn.querySelector('span:nth-child(2)').textContent = 'Auto-Orbit ON';
      } else {
        toggleBtn.classList.remove('active');
        toggleBtn.querySelector('span:nth-child(2)').textContent = 'Auto-Orbit PAUSED';
      }
    });
  }

  function startLoop() {
    if (rafId) cancelAnimationFrame(rafId);
    injectAtmosphere();

    // Hover listeners on cards to gently slow down auto-spin
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        isHoveringCard = true;
        targetSpeed = 0.02; // Gentle crawl when hovering so user can view/click comfortably
      });
      card.addEventListener('mouseleave', () => {
        isHoveringCard = false;
        targetSpeed = baseAutoSpeed; // Accelerate back to smooth speed
      });
    });

    let lastTimestamp = performance.now();

    const tick = (now) => {
      if (!now) now = performance.now();
      const dt = Math.min((now - lastTimestamp) / 1000, 0.05); // Capped at 50ms so no jump
      lastTimestamp = now;
      const timeFactor = dt * 60; // Exact 60fps baseline

      if (!isLightboxOpen) {
        // Silky smooth speed lerp
        currentSpeed += (targetSpeed - currentSpeed) * Math.min(1, 0.05 * timeFactor);

        // Auto-spin continuously if enabled and not actively dragging
        if (!isDragging) {
          if (autoSpin) {
            continuousYaw += currentSpeed * timeFactor;
          }

          // Smooth drag inertia decay with exponential time damping
          velX *= Math.pow(0.92, timeFactor);
          velY *= Math.pow(0.92, timeFactor);
          if (Math.abs(velX) < 0.001) velX = 0;
          if (Math.abs(velY) < 0.001) velY = 0;

          dragX += velX * timeFactor;
          dragY += velY * timeFactor;

          // Gently return pitch to natural -3 deg
          dragY *= Math.pow(0.96, timeFactor);
        }

        camZ += (camZTarget - camZ) * Math.min(1, 0.08 * timeFactor);

        const sx = tilt + dragY;
        const sy = continuousYaw + dragX;

        // 1. Rotate the 3D World (Hardware-accelerated subpixel transforms)
        world.style.transform = `translate3d(0, 0, ${camZ.toFixed(2)}px) rotateY(${sy.toFixed(3)}deg) rotateX(${sx.toFixed(3)}deg)`;

        // 2. Counter-rotate the Centered Headline so it stays square to camera
        const tzHead = (R * 0.16).toFixed(1);
        headline.style.transform = `rotateX(${-sx.toFixed(3)}deg) rotateY(${-sy.toFixed(3)}deg) translate3d(0, 0, ${tzHead}px)`;
      }

      if (isStageVisible && !document.hidden) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    // Viewport-aware IntersectionObserver: Zero CPU/GPU usage when off-screen
    if ('IntersectionObserver' in window && stage) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const visible = entry.isIntersecting && !document.hidden;
          if (visible && !isStageVisible) {
            isStageVisible = true;
            lastTimestamp = performance.now();
            if (!rafId) rafId = requestAnimationFrame(tick);
          } else if (!visible && isStageVisible) {
            isStageVisible = false;
            if (rafId) {
              cancelAnimationFrame(rafId);
              rafId = null;
            }
          }
        });
      }, { threshold: 0.02, rootMargin: '150px 0px 150px 0px' });
      observer.observe(stage);
    } else {
      isStageVisible = true;
      rafId = requestAnimationFrame(tick);
    }

    // Tab visibility handling: pause background CPU/GPU when user switches tab
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      } else if (isStageVisible && !rafId) {
        lastTimestamp = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    }, { passive: true });
  }

  // ============================================================
  // LUXURY FLIP LIGHTBOX PLATE
  // ============================================================
  let lightboxEl = null;

  function ensureLightbox() {
    if (lightboxEl) return lightboxEl;

    lightboxEl = document.createElement('div');
    lightboxEl.id = 'client-sphere-lightbox';
    lightboxEl.className = 'client-lightbox-overlay';
    lightboxEl.innerHTML = `
      <div class="client-lightbox-scrim" data-close="true"></div>
      <div class="client-lightbox-plate" role="dialog" aria-modal="true">
        <button class="client-lightbox-close" data-close="true" aria-label="Close dialog">
          <span class="material-symbols-outlined text-xl">close</span>
        </button>
        <div class="client-lightbox-body">
          <div class="client-lightbox-media">
            <img id="client-lightbox-img" src="" alt="Client Trip Memory" />
            <div class="client-lightbox-media-badge">
              <span class="material-symbols-outlined text-sm text-sunset" style="font-variation-settings:'FILL'1">verified</span>
              <span id="client-lightbox-dest">Destination</span>
            </div>
          </div>
          <div class="client-lightbox-info">
            <div class="flex items-center gap-1 text-[#F59E0B] text-sm mb-2" id="client-lightbox-stars">
              ★★★★★
            </div>
            <h3 class="font-display text-xl md:text-2xl font-bold text-navy-deep leading-snug mb-3" id="client-lightbox-headline">
              Headline
            </h3>
            <p class="font-sans text-sm text-fog leading-relaxed mb-6" id="client-lightbox-quote">
              Quote
            </p>
            <div class="pt-4 border-t border-navy/10 flex items-center justify-between mt-auto">
              <div>
                <div class="font-display font-bold text-navy-deep text-base" id="client-lightbox-name">Traveller Name</div>
                <div class="font-sans text-xs text-fog" id="client-lightbox-role">Role · City</div>
              </div>
              <a href="https://wa.me/918007586871?text=Hello%20Let%27s%20Explore%2C%20I%20saw%20your%20verified%20traveller%20memories%20and%20want%20to%20plan%20a%20similar%20trip!" 
                 target="_blank" 
                 class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest/10 hover:bg-forest text-forest hover:text-white font-sans text-xs font-bold transition shadow-sm">
                <span class="material-symbols-outlined text-base">chat</span> Plan Like This
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(lightboxEl);

    // Close on click scrim or close btn
    lightboxEl.addEventListener('click', (e) => {
      if (e.target.closest('[data-close="true"]')) {
        closeLightbox();
      }
    });

    // Close on Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
    });

    return lightboxEl;
  }

  function openLightbox(storyIndex, sourceCard) {
    const story = CLIENT_STORIES[storyIndex];
    if (!story) return;

    isLightboxOpen = true;
    const lb = ensureLightbox();

    document.getElementById('client-lightbox-img').src = story.img;
    document.getElementById('client-lightbox-dest').textContent = story.dest;
    document.getElementById('client-lightbox-headline').textContent = story.headline;
    document.getElementById('client-lightbox-quote').textContent = story.quote;
    document.getElementById('client-lightbox-name').textContent = story.name;
    document.getElementById('client-lightbox-role').textContent = story.role;

    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove('is-open');
    document.body.style.overflow = '';
    isLightboxOpen = false;
  }

  // ============================================================
  // VIEW TOGGLE: 3D SPHERE vs CLASSIC MASONRY GRID
  // ============================================================
  window.toggleClientView = function(mode) {
    const sphereStage = document.getElementById('client-sphere-stage');
    const gridStage = document.getElementById('client-grid-stage');
    const btnSphere = document.getElementById('btn-client-sphere');
    const btnGrid = document.getElementById('btn-client-grid');

    if (!sphereStage || !gridStage) return;

    if (mode === 'grid') {
      sphereStage.classList.add('hidden');
      gridStage.classList.remove('hidden');
      if (btnSphere) btnSphere.classList.remove('active');
      if (btnGrid) btnGrid.classList.add('active');
    } else {
      sphereStage.classList.remove('hidden');
      gridStage.classList.add('hidden');
      if (btnSphere) btnSphere.classList.add('active');
      if (btnGrid) btnGrid.classList.remove('active');
      computeDimensions();
    }
  };

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSphere);
  } else {
    initSphere();
  }
})();
