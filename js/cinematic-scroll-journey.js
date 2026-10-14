/**
 * Let's Explore DMC — Master Cinematic Scroll Journey
 * Seamlessly integrates:
 * 1. Mostar Layered Bridge Parallax (Image 4 & verbatim math specification)
 * 2. Auragate Luxury Airplane Cabin Window (Image 2)
 * 3. 3D Cylindrical Curved Floating Package Cards Arc Carousel (Image 3)
 */

(function () {
  'use strict';

  // 1. ALL 28 VERIFIED DMC PACKAGES DATASET
  const ALL_PACKAGES = [
    {
      id: "georgia-magic",
      name: "Discover The Magic of Georgia",
      dest: "Tbilisi · Mtkvari River · Rike Park · Kazbegi",
      duration: "5 Days / 4 Nights",
      price: "₹1,40,000",
      priceSub: "per person · Direct DMC",
      priceVal: 140000,
      category: ["international", "luxury", "bestseller"],
      badge: "Caucasus Magic 🇬🇪",
      rating: "4.96",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85",
      href: "georgia-package.html",
      tags: ["Bridge of Peace", "Old Tbilisi", "Cable Car Kazbegi"],
      voucherId: "LEDMC100300"
    },
    {
      id: "turkey-escape",
      name: "Turkey Escape & Cappadocia Wonders",
      dest: "Istanbul · Cappadocia · Bosphorus Strait",
      duration: "5 Days / 4 Nights",
      price: "₹42,999",
      priceSub: "per adult · Direct DMC",
      priceVal: 42999,
      category: ["international", "luxury", "bestseller"],
      badge: "Flagship Deal 🇹🇷",
      rating: "4.97",
      img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=85",
      href: "turkey-package.html",
      tags: ["Bosphorus Cruise", "Cappadocia Balloons", "Hagia Sophia"],
      voucherId: "LEDMC100420"
    },
    {
      id: "japan-golden",
      name: "Japan Golden Route Discovery",
      dest: "Tokyo · Mt Fuji · Kyoto · Osaka",
      duration: "10 Days / 9 Nights",
      price: "₹2,21,000",
      priceSub: "Shinkansen Bullet Train Included",
      priceVal: 221000,
      category: ["international", "luxury"],
      badge: "Japan Special 🇯🇵",
      rating: "4.98",
      img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=85",
      href: "deals.html",
      tags: ["Mt Fuji 5th Station", "Shinkansen Train", "Kyoto Fushimi Inari"],
      voucherId: "LEDMC1142210"
    },
    {
      id: "bali-paradise",
      name: "Bali Bliss & Nusa Penida Island",
      dest: "Kuta · Nusa Penida Island · Ubud Villas",
      duration: "6 Nights / 7 Days",
      price: "₹75,000",
      priceSub: "per adult · verified voucher",
      priceVal: 75000,
      category: ["international", "beach", "luxury", "honeymoon"],
      badge: "Honeymoon Special 🏝️",
      rating: "4.98",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
      href: "bali-package.html",
      tags: ["Finns Beach Club", "Kelingking T-Rex", "Ayung Rafting & ATV"],
      voucherId: "LEDMC587358"
    },
    {
      id: "dubai-highlights",
      name: "Dubai Highlights & Desert Dunes",
      dest: "Dubai City & Arabian Desert",
      duration: "4 Nights / 5 Days",
      price: "₹42,598",
      priceSub: "per adult · Group/Family",
      priceVal: 42598,
      category: ["international", "luxury", "budget"],
      badge: "Super Saver 🇦🇪",
      rating: "4.89",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
      href: "dubai-package.html",
      tags: ["Burj Khalifa 124th", "4x4 Desert Safari", "Marina Dhow Cruise"],
      voucherId: "LEDMC1147561"
    },
    {
      id: "thailand-signature",
      name: "Thailand Grand Signature Tour",
      dest: "Phuket (3N) + Krabi (2N) + Bangkok (2N)",
      duration: "7 Nights / 8 Days",
      price: "₹62,362",
      priceSub: "per adult · Direct DMC",
      priceVal: 62362,
      category: ["international", "beach", "bestseller"],
      badge: "Flagship 🇹🇭",
      rating: "4.94",
      img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85",
      href: "thailand-package.html",
      tags: ["Phi Phi Big Boat", "Phuket FantaSea", "Krabi 4-Island"],
      voucherId: "TVY448657"
    },
    {
      id: "kerala-classic",
      name: "Kerala God's Own Country (Family Classic)",
      dest: "Cochin · Munnar (2N) · Thekkady · Alleppey",
      duration: "6 Nights / 7 Days",
      price: "₹24,750",
      priceSub: "per adult · Private AC Car",
      priceVal: 24750,
      category: ["domestic", "family", "budget"],
      badge: "Family Special 🌴",
      rating: "4.93",
      img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
      href: "kerala-package.html",
      tags: ["Fort Kochi Nets", "Alleppey Houseboat", "Eravikulam Tahr"],
      voucherId: "LEDMC1112399"
    },
    {
      id: "kashmir-paradise",
      name: "Kashmir Heaven on Earth & Snow Valley",
      dest: "Srinagar (2N) · Gulmarg (1N) · Pahalgam (1N)",
      duration: "4 Nights / 5 Days",
      price: "₹21,999",
      priceSub: "MAP Plan (Breakfast & Dinner)",
      priceVal: 21999,
      category: ["domestic", "mountain", "budget", "honeymoon"],
      badge: "Snow Paradise 🏔️",
      rating: "4.95",
      img: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=85",
      href: "kashmir-package.html",
      tags: ["Dal Lake Shikara", "Gulmarg Gondola Ride", "Betaab Valley"],
      voucherId: "LEDMC100210"
    },
    {
      id: "singapore-family",
      name: "Singapore Family Extravaganza",
      dest: "V Hotel Lavender + Sentosa + Mandai",
      duration: "4 Nights / 5 Days",
      price: "₹58,563",
      priceSub: "per adult · Group/Family",
      priceVal: 58563,
      category: ["international", "family"],
      badge: "Family Pick 🇸🇬",
      rating: "4.93",
      img: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=85",
      href: "singapore-package.html",
      tags: ["Night Safari Tram", "Wings of Time Show", "Madame Tussauds"],
      voucherId: "LEDMC1143890"
    },
    {
      id: "vietnam-heritage",
      name: "Vietnam Heritage & Halong Bay",
      dest: "Hanoi · Halong Bay Cruise · Da Nang",
      duration: "6 Days / 5 Nights",
      price: "₹44,000",
      priceSub: "per adult · verified voucher",
      priceVal: 44000,
      category: ["international", "bestseller"],
      badge: "Golden Bridge 🇻🇳",
      rating: "4.92",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85",
      href: "deals.html",
      tags: ["Giant Hands Bridge", "Halong Bay Cruise", "Hanoi Old Quarter"],
      voucherId: "LEDMC100440"
    },
    {
      id: "manali-adventure",
      name: "Manali Solang Valley & Rohtang Snow",
      dest: "Manali (4N) + Chandigarh Drive",
      duration: "4 Nights / 5 Days",
      price: "₹40,000",
      priceSub: "MAP Plan (Breakfast & Dinner)",
      priceVal: 40000,
      category: ["domestic", "mountain"],
      badge: "Himalayan Escape ❄️",
      rating: "4.91",
      img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85",
      href: "manali-package.html",
      tags: ["Hadimba Temple", "Solang Valley Adventure", "Naggar Castle"],
      voucherId: "LEDMC593412"
    },
    {
      id: "andaman-islands",
      name: "Andaman Islands Coral & Havelock Cruise",
      dest: "Port Blair (3N) + Havelock Island (1N)",
      duration: "4 Nights / 5 Days",
      price: "₹40,000",
      priceSub: "Pvt Catamaran (Makruzz/Nautika)",
      priceVal: 40000,
      category: ["domestic", "beach", "honeymoon"],
      badge: "Island Special 🏝️",
      rating: "4.94",
      img: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=85",
      href: "andaman-package.html",
      tags: ["Cellular Jail Light", "Radhanagar Beach Sunset", "Makruzz Cruise"],
      voucherId: "LEDMC592311"
    },
    {
      id: "european-flavours",
      name: "European Flavours 2026 Grand Tour",
      dest: "Paris · Switzerland · Austria · Italy",
      duration: "11 Days / 10 Nights",
      price: "₹1,94,990",
      priceSub: "per person · twin sharing",
      priceVal: 194990,
      category: ["international", "luxury"],
      badge: "Europe Classic 🇪🇺",
      rating: "4.97",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85",
      href: "deals.html",
      tags: ["Eiffel Tower Level 2", "Swiss Alps Jungfrau", "Venice Gondola"],
      voucherId: "LEDMC1139499"
    },
    {
      id: "hong-kong-macau",
      name: "Hong Kong Disneyland & Macau Magic",
      dest: "Panda Hotel HK (4N) + Venetian Macao (2N)",
      duration: "6 Nights / 7 Days",
      price: "₹1,30,985",
      priceSub: "5★ Casino Resort & Ferry",
      priceVal: 130985,
      category: ["international", "luxury", "family"],
      badge: "Disney & Vegas 🇭🇰",
      rating: "4.96",
      img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200&q=85",
      href: "deals.html",
      tags: ["Disneyland 1-Day Pass", "TurboJET Fast Ferry", "Venetian Gondola Ride"],
      voucherId: "LEDMC1149838"
    },
    {
      id: "malaysia-express",
      name: "Malaysia City & Highlands Escape",
      dest: "Kuala Lumpur (2N) + Genting Highlands (2N)",
      duration: "4 Nights / 5 Days",
      price: "₹34,500",
      priceSub: "per adult · Group/Family",
      priceVal: 34500,
      category: ["international", "budget", "family"],
      badge: "Value Deal 🇲🇾",
      rating: "4.87",
      img: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?auto=format&fit=crop&w=1200&q=85",
      href: "malaysia-package.html",
      tags: ["Batu Caves Rainbow Steps", "Awana Cable Car", "KL City Tour"],
      voucherId: "LEDMC1148210"
    }
  ];

  // DOM Elements
  const root = document.documentElement;
  const trackContainer = document.getElementById('cinematic-scroll-journey-track');
  const stickyStage = document.getElementById('cinematic-sticky-stage');
  const mostarStage = document.getElementById('mostar-stage');
  const flightTakeoffStage = document.getElementById('airplane-flight-stage');
  const flightRig = document.getElementById('airliner-flight-rig');
  const cabinStage = document.getElementById('cabin-window-stage');
  const carouselStage = document.getElementById('sky-carousel-stage');
  const carouselViewport = document.getElementById('carousel-3d-viewport');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!trackContainer || !stickyStage) return;

  // Math helpers
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const smoothstep = (e0, e1, v) => {
    const x = clamp((v - e0) / (e1 - e0));
    return x * x * (3 - 2 * x);
  };
  const lerp = (a, b, t) => a + (b - a) * t;
  const segmentInOut = (s, a, b, c, d) => {
    const enter = smoothstep(a, b, s);
    const exit = smoothstep(c, d, s);
    return { enter, exit, active: enter * (1 - exit) };
  };

  // State
  let targetMouseX = 0, targetMouseY = 0;
  let mouseX = 0, mouseY = 0;
  let targetScroll = 0, smoothScroll = 0;
  let initialized = false;
  let rafPending = false;

  // 3D Carousel State
  let currentCategory = 'all';
  let filteredPackages = [...ALL_PACKAGES];
  let activeCardIndex = 0;

  // Render 3D Curved Cards (Image 3)
  function render3DCarousel() {
    if (!carouselViewport) return;
    carouselViewport.innerHTML = '';

    filteredPackages.forEach((pkg, idx) => {
      const card = document.createElement('article');
      card.className = 'carousel-3d-card';
      card.dataset.index = idx;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${pkg.name}`);

      card.innerHTML = `
        <div>
          <div class="card-top-row">
            <span class="card-kicker-pill">${pkg.badge || 'Direct DMC'}</span>
            <span class="card-rating-pill">${pkg.rating || '4.95'} <span style="color:#f59e0b">★</span></span>
          </div>
          <h3 class="card-pkg-title">${pkg.name}</h3>
          <div class="card-pkg-dest">📍 ${pkg.dest}</div>
          <div class="card-tags-list">
            ${(pkg.tags || []).slice(0, 3).map(t => `<span class="card-tag-pill">${t}</span>`).join('')}
          </div>
        </div>

        <div>
          <div class="card-price-row">
            <div>
              <div class="card-price-label">Direct Wholesale</div>
              <div class="card-price-value">${pkg.price}</div>
            </div>
            <div class="card-action-btns">
              <a href="https://wa.me/918007586871?text=Hi%20Let's%20Explore%20DMC,%20I%20am%20interested%20in%20${encodeURIComponent(pkg.name)}%20(${pkg.voucherId})!" target="_blank" class="btn-card-wa" title="Book via WhatsApp" onclick="event.stopPropagation()">
                <span class="material-symbols-outlined" style="font-size:20px; font-variation-settings:'FILL' 1;">chat</span>
              </a>
              <a href="${pkg.href}" class="btn-card-explore" onclick="event.stopPropagation()">
                <span>Explore</span>
                <span class="material-symbols-outlined" style="font-size:16px;">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        activeCardIndex = idx;
        update3DCardPositions();
      });

      carouselViewport.appendChild(card);
    });

    update3DCardPositions();
  }

  // Update cylindrical positioning of cards across 3D arc
  function update3DCardPositions() {
    const cards = Array.from(carouselViewport.querySelectorAll('.carousel-3d-card'));
    const total = cards.length;
    if (!total) return;

    cards.forEach((card, idx) => {
      // Calculate relative position around active card
      let offset = idx - activeCardIndex;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      card.classList.toggle('card-active', offset === 0);

      const isMobile = window.innerWidth < 640;
      const xSpacing = isMobile ? 180 : 310;
      const farSpacing = isMobile ? 320 : 560;

      if (offset === 0) {
        // Active Center Card (Image 3: prominent, upright, slightly larger)
        card.style.transform = `translateX(0) translateZ(80px) rotateY(0deg) scale(1.05)`;
        card.style.opacity = '1';
        card.style.zIndex = '10';
        card.style.pointerEvents = 'auto';
      } else if (offset === -1) {
        // Immediate Left (Curved inward)
        card.style.transform = `translateX(-${xSpacing}px) translateZ(-40px) rotateY(18deg) scale(0.92)`;
        card.style.opacity = '0.85';
        card.style.zIndex = '5';
        card.style.pointerEvents = 'auto';
      } else if (offset === 1) {
        // Immediate Right (Curved inward)
        card.style.transform = `translateX(${xSpacing}px) translateZ(-40px) rotateY(-18deg) scale(0.92)`;
        card.style.opacity = '0.85';
        card.style.zIndex = '5';
        card.style.pointerEvents = 'auto';
      } else if (offset === -2) {
        // Far Left
        card.style.transform = `translateX(-${farSpacing}px) translateZ(-160px) rotateY(32deg) scale(0.8)`;
        card.style.opacity = '0.45';
        card.style.zIndex = '2';
        card.style.pointerEvents = 'auto';
      } else if (offset === 2) {
        // Far Right
        card.style.transform = `translateX(${farSpacing}px) translateZ(-160px) rotateY(-32deg) scale(0.8)`;
        card.style.opacity = '0.45';
        card.style.zIndex = '2';
        card.style.pointerEvents = 'auto';
      } else {
        // Hidden cards behind the arc
        card.style.transform = `translateX(0) translateZ(-300px) scale(0.5)`;
        card.style.opacity = '0';
        card.style.zIndex = '0';
        card.style.pointerEvents = 'none';
      }
    });
  }

  // Navigation handlers
  window.carouselPrev = function () {
    if (activeCardIndex > 0) {
      activeCardIndex--;
    } else {
      activeCardIndex = filteredPackages.length - 1;
    }
    update3DCardPositions();
  };

  window.carouselNext = function () {
    if (activeCardIndex < filteredPackages.length - 1) {
      activeCardIndex++;
    } else {
      activeCardIndex = 0;
    }
    update3DCardPositions();
  };

  window.filterCategory = function (cat) {
    currentCategory = cat;
    if (cat === 'all') {
      filteredPackages = [...ALL_PACKAGES];
    } else if (cat === 'budget') {
      filteredPackages = ALL_PACKAGES.filter(p => p.priceVal && p.priceVal <= 45000);
    } else {
      filteredPackages = ALL_PACKAGES.filter(p => p.category && p.category.includes(cat));
    }

    document.querySelectorAll('.tab-cat-pill').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.cat === cat);
    });

    activeCardIndex = 0;
    render3DCarousel();
  };

  // Main Per-Frame Update (Verbatim Math for Mostar Parallax + Multi-Stage Handoff)
  function update() {
    rafPending = false;

    const totalScrollRange = trackContainer.offsetHeight - window.innerHeight;
    targetScroll = clamp(-trackContainer.getBoundingClientRect().top, 0, totalScrollRange);

    if (!initialized || reduceMotion.matches) {
      smoothScroll = targetScroll;
      initialized = true;
    } else {
      smoothScroll = lerp(smoothScroll, targetScroll, 0.28);
    }
    if (Math.abs(smoothScroll - targetScroll) < 0.08) smoothScroll = targetScroll;

    mouseX = lerp(mouseX, targetMouseX, 0.16);
    mouseY = lerp(mouseY, targetMouseY, 0.16);

    // ============================================================
    // STAGE 1: MOSTAR BRIDGE SCROLL CHOREOGRAPHY (0 -> 480px)
    // Fast, crisp bridge parallax without dragging
    // ============================================================
    const mostarProgress = clamp(smoothScroll / 480);
    const frame2 = segmentInOut(smoothScroll, 70, 160, 240, 340);
    const frame3 = segmentInOut(smoothScroll, 300, 380, 440, 500);
    const introExit = smoothstep(20, 120, smoothScroll);
    const blurActive = clamp(frame2.active + frame3.active);
    const frame2Opacity = frame2.active * (1 - frame3.enter);
    const splitDrift = Math.pow(frame2.enter, 1.5);
    const panel2Opacity = frame2.active * (1 - frame2.exit);
    const panel3Opacity = frame3.active * (1 - frame3.exit);
    const backScale = 0.76 + mostarProgress * 0.2 + frame2.enter * 0.18 + frame3.enter * 0.16;
    const sharedHeroY = mostarProgress * -74;
    const sharedHeroScale = mostarProgress * 0.23;

    // Set verbatim CSS variables for Mostar layers
    root.style.setProperty('--mx', (reduceMotion.matches ? 0 : mouseX).toFixed(4));
    root.style.setProperty('--my', (reduceMotion.matches ? 0 : mouseY).toFixed(4));
    root.style.setProperty('--back-opacity', (1 - frame2.active * 0.06).toFixed(4));
    root.style.setProperty('--back-x', `${(mouseX * -12).toFixed(2)}px`);
    root.style.setProperty('--back-y', `${(mouseY * -4).toFixed(2)}px`);
    root.style.setProperty('--back-scale', backScale.toFixed(4));
    root.style.setProperty('--four-y', `${(10 + mostarProgress * 10).toFixed(2)}vh`);
    root.style.setProperty('--four-scale', (0.78 + mostarProgress * 0.16).toFixed(4));
    root.style.setProperty('--bazaar-y', `${(20 - mostarProgress * 8).toFixed(2)}vh`);
    root.style.setProperty('--blur-px', `${(blurActive * 14).toFixed(2)}px`);
    root.style.setProperty('--back-brightness', (1 - blurActive * 0.255).toFixed(4));
    root.style.setProperty('--bazaar-blur-px', `${(frame2.active * 14).toFixed(2)}px`);
    root.style.setProperty('--bazaar-brightness', (1 - frame2.active * 0.255 - frame3.active * 0.06).toFixed(4));
    root.style.setProperty('--bazaar-saturation', (1 + frame3.active * 0.18).toFixed(4));
    root.style.setProperty('--shade-opacity', '1');
    root.style.setProperty('--shade-z', frame2.active > 0.02 ? '2' : '0');
    root.style.setProperty('--shade-top-alpha', (blurActive * 0.465).toFixed(4));
    root.style.setProperty('--shade-mid-alpha', (blurActive * 0.42).toFixed(4));
    root.style.setProperty('--shade-bottom-alpha', (blurActive * 0.51).toFixed(4));

    root.style.setProperty('--title-y', `${(introExit * -210).toFixed(2)}px`);
    root.style.setProperty('--title-scale', (1 - introExit * 0.08).toFixed(4));
    root.style.setProperty('--title-opacity', (1 - introExit).toFixed(4));

    root.style.setProperty('--bridge-x', `calc(-50% + ${(mouseX * 18).toFixed(2)}px)`);
    root.style.setProperty('--bridge-y', `${(mouseY * 8 + sharedHeroY - frame2.exit * 760).toFixed(2)}px`);
    root.style.setProperty('--bridge-bottom', `${(5 - frame2.enter * 13).toFixed(2)}vh`);
    root.style.setProperty('--bridge-width', `${(67.2 + frame2.enter * 37.8).toFixed(2)}vw`);
    root.style.setProperty('--bridge-scale', (1.02 + sharedHeroScale + frame2.exit * 0.46).toFixed(4));

    root.style.setProperty('--split-left-x', `calc(-50% + ${(-splitDrift * 46).toFixed(2)}vw + ${(mouseX * 22).toFixed(2)}px)`);
    root.style.setProperty('--split-left-y', `${(mouseY * 10 + sharedHeroY - splitDrift * 180).toFixed(2)}px`);
    root.style.setProperty('--split-left-scale', (1 + sharedHeroScale + frame2.enter * 0.74).toFixed(4));
    root.style.setProperty('--split-right-x', `calc(-50% + ${(splitDrift * 46).toFixed(2)}vw + ${(mouseX * 22).toFixed(2)}px)`);
    root.style.setProperty('--split-right-y', `${(mouseY * 10 + sharedHeroY - splitDrift * 180).toFixed(2)}px`);
    root.style.setProperty('--split-right-scale', (1 + sharedHeroScale + frame2.enter * 0.74).toFixed(4));

    root.style.setProperty('--frame2-opacity', frame2Opacity.toFixed(4));
    root.style.setProperty('--frame2-x', `calc(-50% + ${(mouseX * 10).toFixed(2)}px)`);
    root.style.setProperty('--frame2-y', `calc(-50% + ${(mouseY * 8 - frame2.exit * 150).toFixed(2)}px)`);
    root.style.setProperty('--frame2-scale', (1.06 + frame2.enter * 0.08 + frame2.exit * 0.08).toFixed(4));

    root.style.setProperty('--intro-copy-y', `${(introExit * 90).toFixed(2)}px`);
    root.style.setProperty('--intro-copy-opacity', (1 - introExit).toFixed(4));
    root.style.setProperty('--panel2-opacity', panel2Opacity.toFixed(4));
    root.style.setProperty('--panel2-y', `calc(-50% + ${(-frame2.exit * 86 + (1 - frame2.enter) * 58).toFixed(2)}px)`);
    root.style.setProperty('--panel3-opacity', panel3Opacity.toFixed(4));
    root.style.setProperty('--panel3-y', `calc(-50% + ${(-frame3.exit * 86 + (1 - frame3.enter) * 58).toFixed(2)}px)`);

    // Clean Mostar Fade
    if (mostarStage) {
      const mostarFade = smoothstep(440, 560, smoothScroll);
      const mOp = 1 - mostarFade;
      mostarStage.style.opacity = mOp.toFixed(3);
      mostarStage.style.visibility = mOp > 0.005 ? 'visible' : 'hidden';
      mostarStage.style.pointerEvents = mOp > 0.2 ? 'auto' : 'none';
    }

    // ============================================================
    // AIRLINER FLIGHT TAKEOFF (SCENE 4): 460px -> 760px
    // The white "Lets Explore, DMC..." airliner takes flight!
    // ============================================================
    const flightEnter = smoothstep(460, 560, smoothScroll);
    const flightExit = smoothstep(660, 760, smoothScroll);
    const flightOpacity = flightEnter * (1 - flightExit);

    if (flightTakeoffStage) {
      flightTakeoffStage.style.opacity = flightOpacity.toFixed(3);
      flightTakeoffStage.style.visibility = flightOpacity > 0.005 ? 'visible' : 'hidden';
      flightTakeoffStage.style.pointerEvents = flightOpacity > 0.1 ? 'auto' : 'none';

      if (flightRig) {
        const progress = clamp((smoothScroll - 460) / 280);
        const flyX = (progress - 0.45) * 520 + mouseX * 25;
        const flyY = (0.45 - progress) * 240 + mouseY * 15;
        const flyScale = 0.85 + progress * 0.95;
        const bankAngle = (flyY * 0.02 - 3).toFixed(1);
        flightRig.style.transform = `translate(${flyX.toFixed(1)}px, ${flyY.toFixed(1)}px) scale(${flyScale.toFixed(3)}) rotate(${bankAngle}deg)`;
      }
    }

    // ============================================================
    // TRANSITION TO STAGE 2 (AIRPLANE CABIN WINDOW — IMAGE 2)
    // 720px -> 1060px
    // ============================================================
    const cabinEnter = smoothstep(720, 840, smoothScroll);
    const cabinExit = smoothstep(960, 1070, smoothScroll);
    const cabinOpacity = cabinEnter * (1 - cabinExit);

    if (cabinStage) {
      cabinStage.style.opacity = cabinOpacity.toFixed(3);
      cabinStage.style.visibility = cabinOpacity > 0.005 ? 'visible' : 'hidden';
      cabinStage.style.transform = `scale(${(0.96 + cabinEnter * 0.04).toFixed(3)})`;
      cabinStage.style.pointerEvents = cabinOpacity > 0.1 ? 'auto' : 'none';
    }

    // ============================================================
    // TRANSITION TO STAGE 3 (3D CURVED CARDS CAROUSEL — IMAGE 3)
    // 1040px -> 1800px — ARRIVES RAPIDLY & CLEANLY!
    // ============================================================
    const skyEnter = smoothstep(1040, 1200, smoothScroll);
    const arcSettle = smoothstep(1520, 1800, smoothScroll);
    if (carouselStage) {
      const arcOpacity = skyEnter * (1 - arcSettle * 0.85);
      carouselStage.style.opacity = arcOpacity.toFixed(3);
      carouselStage.style.visibility = skyEnter > 0.005 ? 'visible' : 'hidden';
      carouselStage.style.transform = `translateY(${(arcSettle * 90).toFixed(1)}px) scale(${(1 - arcSettle * 0.08).toFixed(3)})`;
      carouselStage.style.pointerEvents = arcOpacity > 0.1 ? 'auto' : 'none';
    }

    // Re-request frame if scrolling or pointer in motion
    if (
      Math.abs(smoothScroll - targetScroll) > 0.08 ||
      Math.abs(mouseX - targetMouseX) > 0.001 ||
      Math.abs(mouseY - targetMouseY) > 0.001
    ) {
      requestTick();
    }
  }

  function requestTick() {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(update);
    }
  }

  // Event Listeners
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', () => {
    update3DCardPositions();
    requestTick();
  }, { passive: true });

  // Only trigger rAF from pointermove when the sticky cinematic stage is visible
  // (i.e. user is scrolling through the track section), not during normal page scroll
  window.addEventListener('pointermove', (e) => {
    targetMouseX = e.clientX / window.innerWidth - 0.5;
    targetMouseY = e.clientY / window.innerHeight - 0.5;
    // Only schedule update if we're within the cinematic scroll track
    const scrollY = window.scrollY || 0;
    const trackTop = trackContainer.offsetTop || 0;
    const trackBottom = trackTop + (trackContainer.offsetHeight || 0);
    if (scrollY >= trackTop - window.innerHeight && scrollY <= trackBottom) {
      requestTick();
    }
  }, { passive: true });

  // Init
  window.addEventListener('DOMContentLoaded', () => {
    render3DCarousel();
    requestTick();
  });

})();
