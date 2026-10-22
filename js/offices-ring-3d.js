/**
 * Let's Explore DMC — 3D Perspective Ring Carousel for Branch Network / Offices
 * Implements a true 3D perspective cylinder ring tangent to the camera
 * with continuous smooth rotation, drag-to-spin, culling, hover pause, and next/prev controls.
 */
(function() {
  'use strict';

  const OFFICES = [
    {
      id: 'bali',
      city: 'Denpasar, Bali',
      country: 'Indonesia',
      tag: '👑 Global HQ',
      tagColor: 'bg-sunset text-navy-deep',
      company: 'PT. Chrysthalia Athena Sejahtera',
      address: 'Komplek Perhotelan Viking, Jalan Diponegoro, Denpasar, Bali, Indonesia',
      contact: 'bali@letsexploredmc.com',
      contactType: 'email',
      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      badge: 'Direct Ground HQ'
    },
    {
      id: 'amravati',
      city: 'Amravati, Maharashtra',
      country: 'India',
      tag: '🇮🇳 India Central Hub',
      tagColor: 'bg-ocean text-white',
      company: 'India Operations Headquarters',
      address: 'Sahakar Nagar, Opp. New Cotton Market, Shiv Krupa Residence, Amravati, Maharashtra',
      contact: '+91-80075 86871',
      contactType: 'tel',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      badge: 'Open 9am - 9pm'
    },
    {
      id: 'thailand',
      city: 'Saraburi & Bangkok',
      country: 'Thailand',
      tag: '🇹🇭 Inbound Partner',
      tagColor: 'bg-[#16a34a] text-white',
      company: 'Onetripthailand Co., Ltd. (Inbound Tour)',
      address: '229/63 Thesaban 4 Road, Saraburi 18000, Thailand · Mr. Jumphol Vongchun (+66 818311204)',
      contact: 'thailand@letsexploredmc.com',
      contactType: 'email',
      img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
      badge: 'Co-partners DMC'
    },
    {
      id: 'srilanka',
      city: 'Pannipitiya',
      country: 'Sri Lanka',
      tag: '🇱🇰 Inbound Partner',
      tagColor: 'bg-[#7c3aed] text-white',
      company: 'Walk With Me Lanka (Pvt) Ltd',
      address: '827/1, Pannipitiya 10230, Sri Lanka · Mr. Susantha (+94 772074441)',
      contact: 'srilanka@letsexploredmc.com',
      contactType: 'email',
      img: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
      badge: 'Ramayana Trail DMC'
    },
    {
      id: 'cairo',
      city: 'Cairo',
      country: 'Egypt',
      tag: '🇪🇬 Operations Desk',
      tagColor: 'bg-[#ea580c] text-white',
      company: 'Egypt Inbound Tour Services',
      address: 'Direct on-ground Cairo & Nile cruise operations with 24/7 dedicated local coordinators',
      contact: 'cairo@letsexploredmc.com',
      contactType: 'email',
      img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
      badge: 'Nile & Pyramids'
    },
    {
      id: 'kashmir-kerala',
      city: 'Srinagar & Kochi',
      country: 'Domestic Hubs',
      tag: '🏔️ North & South Desks',
      tagColor: 'bg-[#0284c7] text-white',
      company: 'Domestic DMC Operations',
      address: 'Boulevard Road, Dal Lake, Srinagar & Fort Kochi Wharf, Kochi, Kerala',
      contact: '+91-80075 86871',
      contactType: 'tel',
      img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      badge: 'Houseboat Fleets'
    },
    {
      id: 'central-india',
      city: 'Pune, Raipur & Noida',
      country: 'Regional Hubs',
      tag: '🏢 Central & North India',
      tagColor: 'bg-[#0f172a] text-white',
      company: 'Client Relationship & Corporate Desks',
      address: 'Shivajinagar Pune · VIP Road Raipur · Sector 62 Noida Corporate Park',
      contact: '+91-80075 86871',
      contactType: 'tel',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      badge: 'Corporate & MICE'
    },
    {
      id: 'west-india',
      city: 'Mumbai, Jaipur & Nagpur',
      country: 'Regional Desks',
      tag: '🌆 West India Desks',
      tagColor: 'bg-sunset text-navy-deep',
      company: 'Direct Regional Offices',
      address: 'Bora Bazar Fort Mumbai · Jagatpura Jaipur · Mecosabagh Sindhi Colony Nagpur',
      contact: '+91-80075 86871',
      contactType: 'tel',
      img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
      badge: 'Regional Network'
    }
  ];

  let stage, ring;
  let cardEls = [];
  const n = OFFICES.length; // 8
  const step = 360 / n; // 45 deg
  let R = 540; // cylinder radius
  let phase = 0;
  let speed = 2.4; // deg / sec
  let isHovered = false;
  let isDragging = false;
  let startX = 0;
  let lastTime = 0;
  let rafId = null;

  function initRing() {
    stage = document.getElementById('offices-ring-stage');
    if (!stage) return;

    ring = document.getElementById('offices-ring-cylinder');
    if (!ring) return;

    ring.innerHTML = '';
    cardEls = [];

    computeRadius();

    OFFICES.forEach((office, i) => {
      const card = document.createElement('div');
      card.className = 'office-ring-card';
      card.dataset.index = i;

      card.innerHTML = `
        <div class="office-ring-card-inner">
          <div class="office-ring-thumb">
            <img src="${office.img}" alt="${office.city}" loading="lazy"/>
            <div class="office-ring-badge-top">
              <span class="office-ring-tag ${office.tagColor}">${office.tag}</span>
            </div>
            <div class="office-ring-status">${office.badge}</div>
          </div>
          <div class="office-ring-content">
            <h3 class="font-display text-xl font-bold text-navy-deep mb-1 truncate">${office.city}</h3>
            <p class="text-xs font-bold uppercase text-ocean tracking-wider mb-2 truncate">${office.company}</p>
            <p class="text-xs text-fog leading-relaxed mb-4 line-clamp-2">${office.address}</p>
            <div class="pt-3 border-t border-navy/5 flex items-center justify-between mt-auto">
              ${office.contactType === 'tel' 
                ? `<a href="tel:${office.contact.replace(/\s+/g,'')}" class="text-xs font-bold text-navy-deep flex items-center gap-1.5 hover:text-sunset transition"><span class="material-symbols-outlined text-sunset text-sm">call</span> ${office.contact}</a>`
                : `<a href="mailto:${office.contact}" class="text-xs font-bold text-navy-deep flex items-center gap-1.5 hover:text-sunset transition"><span class="material-symbols-outlined text-sunset text-sm">mail</span> ${office.contact}</a>`
              }
              <a href="contact.html#offices" class="text-xs font-bold text-ocean hover:underline flex items-center gap-0.5">Details →</a>
            </div>
          </div>
        </div>
      `;

      ring.appendChild(card);
      cardEls.push(card);

      // Card hover pauses rotation & sharpens
      card.addEventListener('mouseenter', () => { isHovered = true; });
      card.addEventListener('mouseleave', () => { isHovered = false; });
    });

    bindEvents();
    startAnimation();
  }

  function computeRadius() {
    if (!stage) return;
    const w = stage.clientWidth || window.innerWidth;
    if (w <= 640) {
      R = 360;
    } else if (w <= 1024) {
      R = 480;
    } else {
      R = 560;
    }
  }

  function placeCards() {
    const cullAngle = 88; // Cull back half of the 3D cylinder
    const PI = Math.PI;

    cardEls.forEach((card, i) => {
      const a = ((i * step + phase) % 360 + 540) % 360 - 180; // -180..180
      if (Math.abs(a) > cullAngle) {
        card.style.visibility = 'hidden';
        return;
      }

      card.style.visibility = 'visible';
      const r = (a * PI) / 180;
      const c = Math.cos(r);
      const s = Math.sin(r);

      const tx = (R * s).toFixed(1);
      const tz = (R * (1 - c)).toFixed(1);
      const rotY = (-a).toFixed(1);

      card.style.transform = `translate3d(${tx}px, 0px, ${tz}px) rotateY(${rotY}deg)`;

      const opacity = 0.55 + 0.45 * Math.max(0, c);
      card.style.opacity = opacity.toFixed(2);
      card.style.zIndex = Math.round(c * 100);
    });
  }

  function bindEvents() {
    window.addEventListener('resize', () => {
      computeRadius();
      placeCards();
    }, { passive: true });

    // Drag / swipe controls on ring stage (mobile touch-friendly: allows natural vertical scrolling)
    let startTouchX = 0;
    let startTouchY = 0;
    let gestureDetermined = false;
    let isHorizontalSpin = false;

    stage.addEventListener('pointerdown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startTouchX = e.clientX;
      startTouchY = e.clientY;
      gestureDetermined = e.pointerType !== 'touch';
      isHorizontalSpin = e.pointerType !== 'touch';
      if (e.pointerType !== 'touch') {
        try { stage.setPointerCapture(e.pointerId); } catch (_) {}
      }
    });

    stage.addEventListener('pointermove', (e) => {
      if (!isDragging) return;

      if (!gestureDetermined) {
        const totalDx = Math.abs(e.clientX - startTouchX);
        const totalDy = Math.abs(e.clientY - startTouchY);
        if (totalDx > 6 || totalDy > 6) {
          gestureDetermined = true;
          if (totalDx > totalDy) {
            isHorizontalSpin = true;
            try { stage.setPointerCapture(e.pointerId); } catch (_) {}
          } else {
            // User is scrolling vertically
            isHorizontalSpin = false;
            isDragging = false;
            return;
          }
        } else {
          return;
        }
      }

      if (!isHorizontalSpin) return;

      const dx = e.clientX - startX;
      startX = e.clientX;
      phase += dx * 0.22;
      placeCards();
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

    // Prev / Next button listeners
    const prevBtn = document.getElementById('btn-offices-prev');
    const nextBtn = document.getElementById('btn-offices-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        rotateToRelative(1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        rotateToRelative(-1);
      });
    }
  }

  function rotateToRelative(direction) {
    const targetPhase = phase + direction * step;
    const startP = phase;
    const startTime = performance.now();
    const duration = 450;

    function anim(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      phase = startP + (targetPhase - startP) * ease;
      placeCards();

      if (progress < 1) {
        requestAnimationFrame(anim);
      }
    }

    requestAnimationFrame(anim);
  }

  let isRingVisible = false;

  function startAnimation() {
    if (rafId) cancelAnimationFrame(rafId);
    lastTime = performance.now();

    function tick(now) {
      if (!now) now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isHovered && !isDragging) {
        phase -= speed * dt;
        placeCards();
      }

      if (isRingVisible && !document.hidden) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    }

    // Call once initially to position cards without continuous background loop
    placeCards();

    if ('IntersectionObserver' in window && stage) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const visible = entry.isIntersecting && !document.hidden;
          if (visible && !isRingVisible) {
            isRingVisible = true;
            lastTime = performance.now();
            if (!rafId) rafId = requestAnimationFrame(tick);
          } else if (!visible && isRingVisible) {
            isRingVisible = false;
            if (rafId) {
              cancelAnimationFrame(rafId);
              rafId = null;
            }
          }
        });
      }, { threshold: 0.02, rootMargin: '150px 0px 150px 0px' });
      observer.observe(stage);
    } else {
      isRingVisible = true;
      rafId = requestAnimationFrame(tick);
    }

    // Tab visibility handling: pause background CPU/GPU when user switches tab
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      } else if (isRingVisible && !rafId) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    }, { passive: true });
  }

  // ============================================================
  // VIEW TOGGLE: 3D CYLINDER RING vs COMPLETE NETWORK GRID
  // ============================================================
  window.toggleOfficesView = function(mode) {
    const ringStage = document.getElementById('offices-ring-stage');
    const ringControls = document.getElementById('offices-ring-controls');
    const gridStage = document.getElementById('offices-grid-stage');
    const btnRing = document.getElementById('btn-offices-ring');
    const btnGrid = document.getElementById('btn-offices-grid');

    if (!ringStage || !gridStage) return;

    if (mode === 'grid') {
      ringStage.classList.add('hidden');
      if (ringControls) ringControls.classList.add('hidden');
      gridStage.classList.remove('hidden');
      if (btnRing) btnRing.classList.remove('active');
      if (btnGrid) btnGrid.classList.add('active');
      isRingVisible = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    } else {
      ringStage.classList.remove('hidden');
      if (ringControls) ringControls.classList.remove('hidden');
      gridStage.classList.add('hidden');
      if (btnRing) btnRing.classList.add('active');
      if (btnGrid) btnGrid.classList.remove('active');
      computeRadius();
      placeCards();
      isRingVisible = true;
      lastTime = performance.now();
      if (!rafId) rafId = requestAnimationFrame(tick);
    }
  };

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRing);
  } else {
    initRing();
  }
})();
