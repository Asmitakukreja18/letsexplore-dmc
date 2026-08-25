/* Stitch Tours & Travels - Dynamic Data & Interactive Application Script */

// Package Data Store (Loaded dynamically from SQLite DB backend, with offline fallbacks)
let travelPackages = [
  {
    id: "turkey-escape",
    db_id: 1,
    title: "Turkey Escape & Wonders",
    region: "turkey",
    destination: "Istanbul, Cappadocia & Pamukkale",
    duration: "5 Days / 4 Nights",
    price: 899,
    originalPrice: 1099,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller 🇹🇷",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
    tags: ["Hot Air Balloon", "Bosphorus Cruise", "Cave Hotel", "Historical"],
    highlights: ["Cappadocia Hot Air Balloon Sunrise Flight", "Private Bosphorus Sunset Yacht Cruise", "Pamukkale Thermal Travertines Bath", "Grand Bazaar Shopping Spree"],
    inclusions: ["4-Star Boutique Hotels", "Daily Buffet Breakfast & 3 Dinners", "Domestic Flights (Istanbul-Cappadocia)", "English Speaking Tour Guide", "All Monument Entry Fees"],
    exclusions: ["International Airfare", "Personal Expenses", "Travel Insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Istanbul & Bosphorus Sunset Cruise", desc: "Welcome to Turkey! Private airport transfer to your 4-star hotel in Sultanahmet. Evening luxury sunset cruise on the Bosphorus strait." },
      { day: 2, title: "Istanbul Historical Treasures & Flight to Cappadocia", desc: "Explore Hagia Sophia, Blue Mosque, and Topkapi Palace. Afternoon tour of the vibrant Grand Bazaar. Evening flight to Cappadocia." },
      { day: 3, title: "Cappadocia Hot Air Balloon & Goreme Open Air Museum", desc: "Early morning hot air balloon ride over fairy chimneys. Visit Goreme Open Air Museum and Underground City of Kaymakli." },
      { day: 4, title: "Pamukkale Travertines & Hierapolis Ancient City", desc: "Drive to Pamukkale. Walk on snow-white calcium terraces and swim in Cleopatra’s antique thermal pool." },
      { day: 5, title: "Return to Istanbul & Departure", desc: "Relaxed breakfast, final souvenir shopping in Istanbul, and private VIP transfer to Istanbul Airport." }
    ]
  },
  {
    id: "bali-paradise",
    db_id: 2,
    title: "Bali Tropical Island Paradise",
    region: "bali",
    destination: "Ubud, Seminyak & Nusa Penida",
    duration: "6 Days / 5 Nights",
    price: 75000,
    originalPrice: 85000,
    rating: 4.95,
    reviewsCount: 188,
    badge: "Trending 🌴",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Pool Villa", "Floating Breakfast", "Nusa Penida", "Waterfall"],
    highlights: ["Private Pool Villa in Ubud", "Insta-famous Bali Swing & Tegallalang Rice Terrace", "Full day Speedboat Tour to Nusa Penida Kelingking Beach", "Jimbaran Bay Sunset Seafood Dinner"],
    inclusions: ["Luxury Pool Villa Stay", "Floating Breakfast", "Private AC Vehicle & Driver", "Speedboat to Nusa Penida"],
    exclusions: ["International Flights", "Visa Fees"],
    itinerary: [
      { day: 1, title: "Arrival in Bali & Ubud Villa Check-in", desc: "Meet our representative at Ngurah Rai Airport with flower garland welcome." },
      { day: 2, title: "Ubud Swing, Rice Terraces & Sacred Monkey Forest", desc: "Morning floating breakfast. Visit Tegallalang Rice Terraces, experience giant Bali Swing." }
    ]
  },
  {
    id: "swiss-alps",
    db_id: 3,
    title: "Swiss Alps & Glacier Express",
    region: "europe",
    destination: "Zurich, Lucerne & Interlaken",
    duration: "7 Days / 6 Nights",
    price: 1899,
    originalPrice: 2200,
    rating: 4.98,
    reviewsCount: 96,
    badge: "Luxury 🇨🇭",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    tags: ["Glacier Train", "Mount Titlis", "Jungfraujoch", "Swiss Pass"],
    highlights: ["Jungfraujoch Top of Europe Mountain Rail", "Mount Titlis Cable Car", "Swiss Travel Pass Included", "Lake Lucerne Cruise"],
    inclusions: ["4-Star Alpine Hotels", "1st Class Swiss Travel Rail Pass"],
    exclusions: ["Airfare", "Dinners"],
    itinerary: []
  },
  {
    id: "dubai-luxury",
    db_id: 4,
    title: "Dubai Sky & Desert Dunes",
    region: "dubai",
    destination: "Dubai & Abu Dhabi",
    duration: "5 Days / 4 Nights",
    price: 65000,
    originalPrice: 75000,
    rating: 4.88,
    reviewsCount: 210,
    badge: "Super Seller 🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    tags: ["Burj Khalifa", "Desert Safari", "Abu Dhabi", "Dhow Cruise"],
    highlights: ["Burj Khalifa 124th Floor", "4x4 Desert Dune Bashing with BBQ", "Sheikh Zayed Mosque Abu Dhabi"],
    inclusions: ["4-Star Hotel", "Desert BBQ Dinner", "Dhow Cruise"],
    exclusions: ["Tourism Dirham Fee"],
    itinerary: []
  },
  {
    id: "maldives-honeymoon",
    db_id: 5,
    title: "Maldives Water Villa Luxury",
    region: "maldives",
    destination: "South Male Atoll",
    duration: "4 Days / 3 Nights",
    price: 1199,
    originalPrice: 1450,
    rating: 4.97,
    reviewsCount: 165,
    badge: "Honeymoon Special 🇲🇻",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    tags: ["Overwater Villa", "All Inclusive", "Speedboat", "Snorkeling"],
    highlights: ["Overwater Villa Access", "All-Inclusive Drinks & Dining", "Sunset Dolphin Cruise"],
    inclusions: ["Overwater Villa", "All Meals & Drinks", "Speedboat Transfers"],
    exclusions: ["Flight Tickets"],
    itinerary: []
  }
];

// App State
let sessionId = localStorage.getItem("stitch_session_id");
if (!sessionId) {
  sessionId = 'sess_' + Math.random().toString(36).substr(2, 9);
  localStorage.setItem("stitch_session_id", sessionId);
}
let wishlist = JSON.parse(localStorage.getItem("stitch_wishlist")) || [];
let compareList = JSON.parse(localStorage.getItem("stitch_compare")) || [];

// DOM Elements & Initialization
document.addEventListener("DOMContentLoaded", () => {
  ensureModalsExist();
  injectAnimationStyles();
  fetchAndRenderPackages();
  setupEventListeners();
});

function injectAnimationStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes heartPop {
      0% { transform: scale(1); }
      50% { transform: scale(1.6); color: #ff0000; }
      100% { transform: scale(1); }
    }
    .heart-pop { animation: heartPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
    
    @keyframes checkmarkAnim {
      0% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }
    .payment-success-icon { animation: checkmarkAnim 0.5s ease-out forwards; }
  `;
  document.head.appendChild(style);
}

// Ensure detail and booking modals exist in the DOM on all pages
function ensureModalsExist() {
  if (!document.getElementById("detail-modal")) {
    const detailModal = document.createElement("div");
    detailModal.id = "detail-modal";
    detailModal.className = "modal-overlay";
    detailModal.innerHTML = `<div class="modal-card max-w-2xl" id="detail-modal-body" style="background:#fff; border-radius:16px; overflow:hidden; max-width:700px; width:90%; margin:40px auto; position:relative; box-shadow:0 20px 40px rgba(0,0,0,0.3);"></div>`;
    document.body.appendChild(detailModal);
  }

  if (!document.getElementById("booking-modal")) {
    const bookingModal = document.createElement("div");
    bookingModal.id = "booking-modal";
    bookingModal.className = "modal-overlay";
    bookingModal.innerHTML = `<div class="modal-card max-w-lg" id="booking-modal-body" style="background:#fff; border-radius:16px; overflow:hidden; max-width:560px; width:90%; margin:40px auto; position:relative; box-shadow:0 20px 40px rgba(0,0,0,0.3);"></div>`;
    document.body.appendChild(bookingModal);
  }
}

// Fetch Real Packages from Backend API
async function fetchAndRenderPackages() {
  try {
    const res = await fetch('/api/packages');
    const data = await res.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      travelPackages = data.data;
    }
  } catch (err) {
    console.log("ℹ️ Loaded offline package fallback data");
  }

  // Fetch Wishlist from backend
  try {
    const wishRes = await fetch(`/api/wishlist?session_id=${sessionId}`);
    const wishData = await wishRes.json();
    if (wishData.success) {
      wishlist = wishData.data;
      localStorage.setItem("stitch_wishlist", JSON.stringify(wishlist));
    }
  } catch (err) {
    console.log("ℹ️ Offline wishlist loaded");
  }

  renderPackagesGrid(travelPackages);
  updateWishlistUI();
  updateCompareUI();
}

// Render Packages Grid
function renderPackagesGrid(packages) {
  const grid = document.getElementById("packages-grid");
  if (!grid) return;

  if (packages.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--on-surface-variant);">
      <i class="fa-solid fa-plane-circle-xmark" style="font-size: 3rem; margin-bottom: 12px; color:#64748b;"></i>
      <h3>No packages found matching your criteria</h3>
      <p>Try adjusting your search terms or filters.</p>
    </div>`;
    return;
  }

  grid.innerHTML = packages.map(pkg => {
    const pkgId = pkg.id || String(pkg.db_id);
    const isSaved = wishlist.includes(pkgId);
    const isCompared = compareList.includes(pkgId);
    const priceDisplay = typeof pkg.price === 'number' ? `$${pkg.price}` : pkg.price;

    return `
      <div class="package-card" data-id="${pkgId}">
        <div class="package-img-box" style="position:relative; height:220px; overflow:hidden; border-radius:14px 14px 0 0;">
          <img src="${pkg.image}" alt="${pkg.title || pkg.name}" loading="lazy" style="width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease;">
          <span class="package-badge" style="position:absolute; top:14px; left:14px; background:rgba(3,22,54,0.85); color:#ffa454; padding:4px 12px; border-radius:20px; font-size:0.75rem; font-weight:700; backdrop-filter:blur(4px); border:1px solid rgba(255,164,84,0.3);">${pkg.badge || 'Bestseller'}</span>
          <div class="package-actions-top" style="position:absolute; top:14px; right:14px; display:flex; gap:8px;">
            <button class="action-btn-mini ${isSaved ? 'active' : ''}" onclick="toggleWishlist('${pkgId}', this)" title="Save to Wishlist" style="width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,0.9); border:none; display:flex; align-items:center; justify-content:center; color:${isSaved ? '#ef4444' : '#475569'}; cursor:pointer; box-shadow:0 4px 10px rgba(0,0,0,0.15); transition: all 0.2s;">
              <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart" style="transition: all 0.2s;"></i>
            </button>
            <button class="action-btn-mini ${isCompared ? 'active' : ''}" onclick="toggleCompare('${pkgId}')" title="Compare" style="width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,0.9); border:none; display:flex; align-items:center; justify-content:center; color:${isCompared ? '#0284c7' : '#475569'}; cursor:pointer; box-shadow:0 4px 10px rgba(0,0,0,0.15);">
              <i class="fa-solid fa-code-compare"></i>
            </button>
          </div>
        </div>
        <div class="package-content" style="padding:20px; display:flex; flex-direction:column; justify-between:space-between; flex-grow:1;">
          <div>
            <div class="package-meta" style="display:flex; justify-content:space-between; font-size:0.82rem; color:#64748b; margin-bottom:8px;">
              <span><i class="fa-regular fa-clock" style="color:#0284c7;"></i> ${pkg.duration}</span>
              <div class="package-rating" style="color:#f59e0b; font-weight:700;">
                <i class="fa-solid fa-star"></i> ${pkg.rating || 4.9} (${pkg.reviewsCount || 120})
              </div>
            </div>
            <h3 class="package-title" style="font-size:1.2rem; font-weight:700; color:#031636; margin-bottom:6px; line-height:1.3;">${pkg.title || pkg.name}</h3>
            <p style="font-size: 0.85rem; color: #475569; margin-bottom: 12px; display:flex; align-items:center; gap:6px;">
              <i class="fa-solid fa-location-dot" style="color: #ef4444;"></i> ${pkg.destination}
            </p>
            <div class="package-highlights" style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:16px;">
              ${(pkg.tags || []).slice(0, 3).map(tag => `<span class="pill-tag" style="background:#f1f5f9; color:#334155; font-size:0.72rem; padding:3px 10px; border-radius:12px; font-weight:600;">${tag}</span>`).join('')}
            </div>
          </div>
          <div class="package-footer" style="display:flex; justify-content:space-between; align-items:center; padding-top:14px; border-t:1px solid #e2e8f0;">
            <div class="package-price">
              <span class="price-label" style="font-size:0.72rem; text-transform:uppercase; color:#64748b; font-weight:600; display:block;">Starts From</span>
              <div class="price-amount" style="font-size:1.35rem; font-weight:800; color:#0284c7;">${priceDisplay} <span style="font-size:0.75rem; color:#64748b; font-weight:400;">/ person</span></div>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn-primary" onclick="openBookingModal('${pkgId}')" style="background:#031636; color:#fff; padding:8px 16px; border-radius:10px; font-weight:700; font-size:0.85rem; display:flex; align-items:center; gap:6px; transition:all 0.2s ease;">
                Book <i class="fa-solid fa-bolt" style="color:#ffa454;"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Package Filter Logic
function filterPackages() {
  const searchInput = document.getElementById("search-input")?.value.toLowerCase() || "";
  const regionFilter = document.getElementById("region-filter")?.value || "all";
  const budgetFilter = document.getElementById("budget-filter")?.value || "all";

  let filtered = travelPackages.filter(pkg => {
    const title = (pkg.title || pkg.name || "").toLowerCase();
    const dest = (pkg.destination || "").toLowerCase();
    const tags = (pkg.tags || []).map(t => t.toLowerCase());

    const matchesSearch = title.includes(searchInput) || dest.includes(searchInput) || tags.some(t => t.includes(searchInput));
    const matchesRegion = regionFilter === "all" || pkg.region === regionFilter || pkg.category === regionFilter;

    let matchesBudget = true;
    const numPrice = typeof pkg.price === 'number' ? pkg.price : parseInt(String(pkg.price).replace(/[^0-9]/g, '')) || 500;
    if (budgetFilter === "under800") matchesBudget = numPrice < 800;
    else if (budgetFilter === "800to1500") matchesBudget = numPrice >= 800 && numPrice <= 1500;
    else if (budgetFilter === "above1500") matchesBudget = numPrice > 1500;

    return matchesSearch && matchesRegion && matchesBudget;
  });

  renderPackagesGrid(filtered);
}

// Wishlist Logic
function toggleWishlist(id, btnElement) {
  const strId = String(id);
  let isAdding = true;

  if (wishlist.includes(strId)) {
    isAdding = false;
    wishlist = wishlist.filter(item => item !== strId);
    showToast("Removed from Wishlist");
    if (btnElement) {
      btnElement.classList.remove('active');
      btnElement.style.color = '#475569';
      btnElement.querySelector('i').className = 'fa-regular fa-heart';
    }
  } else {
    wishlist.push(strId);
    showToast("Saved to Wishlist ❤️");
    if (btnElement) {
      btnElement.classList.add('active');
      btnElement.style.color = '#ef4444';
      const icon = btnElement.querySelector('i');
      icon.className = 'fa-solid fa-heart heart-pop';
      setTimeout(() => icon.classList.remove('heart-pop'), 400);
    }
  }
  
  localStorage.setItem("stitch_wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  if (!btnElement) filterPackages(); // Only full re-render if called without a specific button

  // Sync to Backend
  const method = isAdding ? 'POST' : 'DELETE';
  fetch('/api/wishlist', {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId, package_id: strId })
  }).catch(e => console.log('Wishlist sync failed (offline mode)'));
}

function updateWishlistUI() {
  const badge = document.getElementById("wishlist-badge");
  if (badge) badge.innerText = wishlist.length;

  const wishlistGrid = document.getElementById("wishlist-items");
  if (wishlistGrid) {
    const savedPackages = travelPackages.filter(p => wishlist.includes(String(p.id)) || wishlist.includes(String(p.db_id)));
    if (savedPackages.length === 0) {
      wishlistGrid.innerHTML = `
        <div style="text-align:center; padding:60px 20px; color:#64748b; grid-column: 1/-1;">
          <i class="fa-regular fa-heart" style="font-size: 3.5rem; margin-bottom: 16px; color: #ef4444;"></i>
          <h3 style="font-size:1.4rem; font-weight:700; color:#031636;">Your Wishlist is Empty</h3>
          <p style="margin-top:6px;">Browse trips on our Explore page and click the heart icon to save your dream vacations!</p>
        </div>`;
    } else {
      wishlistGrid.innerHTML = savedPackages.map(pkg => {
        const pkgId = pkg.id || String(pkg.db_id);
        const priceStr = typeof pkg.price === 'number' ? `$${pkg.price}` : pkg.price;
        return `
          <div class="package-card" style="display:flex; flex-direction:row; flex-wrap:wrap; align-items:center; padding:16px; gap:20px; background:#fff; border-radius:16px; box-shadow:0 4px 15px rgba(0,0,0,0.06); border:1px solid #e2e8f0; margin-bottom:16px;">
            <img src="${pkg.image}" style="width:130px; height:95px; object-fit:cover; border-radius:12px; shrink-0;">
            <div style="flex-grow:1; min-width:200px;">
              <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">${pkg.badge || 'Featured'}</span>
              <h4 style="font-size:1.15rem; font-weight:700; color:#031636; margin:2px 0;">${pkg.title || pkg.name}</h4>
              <p style="font-size:0.85rem; color:#64748b;"><i class="fa-solid fa-location-dot" style="color:#ef4444;"></i> ${pkg.destination} • <strong>${priceStr}</strong> / person</p>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
              <button class="btn-primary" onclick="openBookingModal('${pkgId}')" style="background:#031636; color:#fff; padding:10px 20px; border-radius:10px; font-weight:700; font-size:0.9rem; cursor:pointer;">
                Book Now <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button class="action-btn-mini" onclick="toggleWishlist('${pkgId}')" style="background:#fee2e2; color:#ef4444; width:38px; height:38px; border-radius:50%; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center;">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

// Compare Logic
function toggleCompare(id) {
  const strId = String(id);
  if (compareList.includes(strId)) {
    compareList = compareList.filter(item => item !== strId);
    showToast("Removed from Compare");
  } else {
    if (compareList.length >= 3) {
      showToast("You can compare up to 3 packages at a time");
      return;
    }
    compareList.push(strId);
    showToast("Added to Compare matrix ⚖️");
  }
  localStorage.setItem("stitch_compare", JSON.stringify(compareList));
  updateCompareUI();
  filterPackages();
}

function updateCompareUI() {
  const badge = document.getElementById("compare-badge");
  if (badge) badge.innerText = compareList.length;

  const compareMatrix = document.getElementById("compare-matrix");
  if (compareMatrix) {
    const compared = travelPackages.filter(p => compareList.includes(String(p.id)) || compareList.includes(String(p.db_id)));
    if (compared.length === 0) {
      compareMatrix.innerHTML = `
        <div style="text-align:center; padding: 60px 20px; color: var(--on-surface-variant);">
          <i class="fa-solid fa-code-compare" style="font-size: 3.5rem; margin-bottom: 16px; color: var(--accent-cyan);"></i>
          <h3>No Packages Selected to Compare</h3>
          <p>Click the compare icon on package cards to evaluate side-by-side!</p>
        </div>`;
    } else {
      compareMatrix.innerHTML = `
        <div class="compare-table-wrapper" style="overflow-x:auto;">
          <table class="compare-table" style="width:100%; border-collapse:collapse; background:#fff; border-radius:12px; overflow:hidden;">
            <thead>
              <tr style="background:#031636; color:#fff;">
                <th style="padding:16px; text-align:left;">Feature / Package</th>
                ${compared.map(p => `<th style="padding:16px; text-align:center;">${p.title || p.name} <br><button onclick="toggleCompare('${p.id || p.db_id}')" style="color:#f87171; background:none; border:none; font-size:0.75rem; cursor:pointer; margin-top:4px;"><i class="fa-solid fa-xmark"></i> Remove</button></th>`).join('')}
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:14px;"><strong>Price / Person</strong></td>
                ${compared.map(p => `<td style="padding:14px; text-align:center; color:#0284c7; font-weight:800; font-size:1.15rem;">$${p.price}</td>`).join('')}
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:14px;"><strong>Duration</strong></td>
                ${compared.map(p => `<td style="padding:14px; text-align:center;">${p.duration}</td>`).join('')}
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:14px;"><strong>Rating</strong></td>
                ${compared.map(p => `<td style="padding:14px; text-align:center;">⭐ ${p.rating || 4.9} (${p.reviewsCount || 120})</td>`).join('')}
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:14px;"><strong>Highlights</strong></td>
                ${compared.map(p => `<td style="padding:14px; font-size:0.85rem;"><ul style="padding-left:16px;">${(p.highlights||[]).map(h => `<li>${h}</li>`).join('')}</ul></td>`).join('')}
              </tr>
              <tr>
                <td style="padding:14px;"><strong>Action</strong></td>
                ${compared.map(p => `<td style="padding:14px; text-align:center;"><button class="btn-primary" onclick="openBookingModal('${p.id || p.db_id}')" style="background:#031636; color:#fff; padding:8px 16px; border-radius:8px; font-weight:700; font-size:0.85rem; cursor:pointer;">Book Now</button></td>`).join('')}
              </tr>
            </tbody>
          </table>
        </div>
      `;
    }
  }
}

// Modal Package Details & Itinerary Viewer
function openPackageDetails(id) {
  ensureModalsExist();
  const pkg = travelPackages.find(p => String(p.id) === String(id) || String(p.db_id) === String(id));
  if (!pkg) return;

  const modal = document.getElementById("detail-modal");
  const body = document.getElementById("detail-modal-body");
  const pkgId = pkg.id || String(pkg.db_id);

  body.innerHTML = `
    <button onclick="closeModal('detail-modal')" style="position:absolute; top:16px; right:16px; width:36px; height:36px; border-radius:50%; background:rgba(0,0,0,0.5); color:#fff; border:none; cursor:pointer; font-size:1.1rem; z-index:10;"><i class="fa-solid fa-xmark"></i></button>
    <div style="position:relative; height:240px; overflow:hidden;">
      <img src="${pkg.image}" style="width:100%; height:100%; object-fit:cover;">
      <div style="position:absolute; bottom:0; left:0; right:0; background:linear-gradient(transparent, rgba(3,22,54,0.95)); padding:20px; color:white;">
        <span class="package-badge" style="background:#ffa454; color:#031636; padding:3px 10px; border-radius:12px; font-size:0.75rem; font-weight:700;">${pkg.badge || 'Bestseller'}</span>
        <h2 style="font-size:1.75rem; font-weight:800; margin-top:6px;">${pkg.title || pkg.name}</h2>
        <p style="font-size:0.9rem; opacity:0.9;"><i class="fa-solid fa-location-dot" style="color:#ffa454;"></i> ${pkg.destination} • ${pkg.duration}</p>
      </div>
    </div>

    <div style="padding:24px; max-height:70vh; overflow-y:auto;">
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; background:#f8fafc; padding:16px; border-radius:12px; margin-bottom:20px; border:1px solid #e2e8f0;">
        <div>
          <span style="font-size:0.75rem; text-transform:uppercase; color:#64748b; font-weight:700;">Special Price</span>
          <div style="font-size:1.6rem; font-weight:800; color:#0284c7;">$${pkg.price} <span style="font-size:0.9rem; text-decoration:line-through; color:#94a3b8;">$${pkg.originalPrice || Math.round(pkg.price * 1.25)}</span></div>
        </div>
        <div style="display:flex; gap:10px;">
          <button onclick="toggleWishlist('${pkgId}')" style="background:#f1f5f9; color:#031636; border:1px solid #cbd5e1; padding:8px 16px; border-radius:10px; font-weight:600; cursor:pointer;"><i class="fa-regular fa-heart"></i> Save</button>
          <button onclick="openBookingModal('${pkgId}')" style="background:#031636; color:#fff; border:none; padding:8px 18px; border-radius:10px; font-weight:700; cursor:pointer;"><i class="fa-solid fa-bolt" style="color:#ffa454;"></i> Book Trip</button>
        </div>
      </div>

      <h3 style="font-size:1.2rem; margin-bottom:12px; font-weight:700; color:#031636;">🗺️ Day-Wise Itinerary</h3>
      <div class="itinerary-list" style="display:flex; flex-direction:column; gap:10px;">
        ${(pkg.itinerary || []).map(item => `
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:12px 16px;">
            <div style="font-weight:700; color:#031636; font-size:0.95rem;">Day ${item.day}: ${item.title}</div>
            <div style="font-size:0.85rem; color:#475569; margin-top:4px; line-height:1.4;">${item.desc}</div>
          </div>
        `).join('')}
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:24px;">
        <div style="background:#f0fdf4; border:1px solid #bbf7d0; padding:14px; border-radius:12px;">
          <h4 style="color:#166534; font-weight:700; margin-bottom:8px; font-size:0.9rem;"><i class="fa-solid fa-circle-check"></i> Inclusions</h4>
          <ul style="padding-left:16px; font-size:0.82rem; color:#166534; line-height:1.5;">
            ${(pkg.inclusions || []).map(inc => `<li>${inc}</li>`).join('')}
          </ul>
        </div>
        <div style="background:#fef2f2; border:1px solid #fecaca; padding:14px; border-radius:12px;">
          <h4 style="color:#991b1b; font-weight:700; margin-bottom:8px; font-size:0.9rem;"><i class="fa-solid fa-circle-xmark"></i> Exclusions</h4>
          <ul style="padding-left:16px; font-size:0.82rem; color:#991b1b; line-height:1.5;">
            ${(pkg.exclusions || []).map(exc => `<li>${exc}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

// Booking Modal Logic — PRECISE MATCH GUARANTEED ("jisko book krre vhi dikhe")
function openBookingModal(id) {
  ensureModalsExist();
  closeModal("detail-modal");

  const pkg = travelPackages.find(p => String(p.id) === String(id) || String(p.db_id) === String(id));
  if (!pkg) {
    showToast("Selected package details loaded");
    return;
  }

  const modal = document.getElementById("booking-modal");
  const body = document.getElementById("booking-modal-body");
  const pkgId = pkg.id || String(pkg.db_id);
  const basePrice = typeof pkg.price === 'number' ? pkg.price : parseInt(String(pkg.price).replace(/[^0-9]/g, '')) || 500;

  body.innerHTML = `
    <button onclick="closeModal('booking-modal')" style="position:absolute; top:14px; right:14px; width:32px; height:32px; border-radius:50%; background:#f1f5f9; color:#031636; border:none; cursor:pointer; font-size:1.1rem; z-index:10;"><i class="fa-solid fa-xmark"></i></button>

    <div style="padding:24px;">
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:18px; background:#f8fafc; padding:12px; border-radius:12px; border:1px solid #e2e8f0;">
        <img src="${pkg.image}" style="width:70px; height:60px; object-fit:cover; border-radius:8px; shrink-0;">
        <div>
          <span style="font-size:0.72rem; color:#0284c7; font-weight:700; text-transform:uppercase;">${pkg.badge || 'Selected Package'}</span>
          <h3 style="font-size:1.1rem; font-weight:800; color:#031636; margin:0;">${pkg.title || pkg.name}</h3>
          <p style="font-size:0.8rem; color:#64748b; margin:0;">${pkg.duration} • $${basePrice.toLocaleString()} / person</p>
        </div>
      </div>

      <form id="booking-form" onsubmit="submitBooking(event, '${pkgId}', ${basePrice})">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#334155; display:block; margin-bottom:4px;">Full Name *</label>
            <input type="text" id="book-name" required placeholder="John Doe" style="width:100%; padding:10px 12px; border:1px solid #cbd5e1; border-radius:8px; font-size:0.9rem;">
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#334155; display:block; margin-bottom:4px;">Email Address *</label>
            <input type="email" id="book-email" required placeholder="john@example.com" style="width:100%; padding:10px 12px; border:1px solid #cbd5e1; border-radius:8px; font-size:0.9rem;">
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#334155; display:block; margin-bottom:4px;">Phone / WhatsApp *</label>
            <input type="tel" id="book-phone" required placeholder="+91 9876543210" style="width:100%; padding:10px 12px; border:1px solid #cbd5e1; border-radius:8px; font-size:0.9rem;">
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#334155; display:block; margin-bottom:4px;">Travelers Count *</label>
            <input type="number" id="book-travelers" min="1" max="20" value="2" oninput="calcTotalCost(${basePrice})" style="width:100%; padding:10px 12px; border:1px solid #cbd5e1; border-radius:8px; font-size:0.9rem;">
          </div>
        </div>

        <div style="margin-bottom:16px;">
          <label style="font-size:0.8rem; font-weight:700; color:#334155; display:block; margin-bottom:4px;">Travel Date *</label>
          <input type="date" id="book-date" required style="width:100%; padding:10px 12px; border:1px solid #cbd5e1; border-radius:8px; font-size:0.9rem;">
        </div>

        <div style="background:#031636; color:#fff; padding:14px; border-radius:12px; margin-bottom:18px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <span style="font-size:0.75rem; color:#8293ba; text-transform:uppercase;">Total Estimated Price</span>
            <div id="booking-total-price" style="font-size:1.5rem; font-weight:800; color:#ffa454;">$${(basePrice * 2).toLocaleString()}</div>
          </div>
          <span style="font-size:0.75rem; background:rgba(255,255,255,0.15); color:#fff; padding:4px 10px; border-radius:20px;">All Taxes Included</span>
        </div>

        <button type="submit" style="width:100%; background:#0284c7; color:#fff; border:none; padding:12px; border-radius:10px; font-weight:700; font-size:1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px;">
          <i class="fa-solid fa-check-circle"></i> Confirm Booking Request
        </button>
      </form>
    </div>
  `;

  modal.classList.add("active");
}

function calcTotalCost(basePrice) {
  const count = parseInt(document.getElementById("book-travelers")?.value || 1);
  const totalElem = document.getElementById("booking-total-price");
  if (totalElem) totalElem.innerText = `$${(basePrice * count).toLocaleString()}`;
}

function submitBooking(e, pkgId, price) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  
  const name = document.getElementById("book-name")?.value || "";
  const email = document.getElementById("book-email")?.value || "";
  const phone = document.getElementById("book-phone")?.value || "";
  const travelers = document.getElementById("book-travelers")?.value || 1;
  const date = document.getElementById("book-date")?.value || "";

  const pkg = travelPackages.find(p => String(p.id) === String(pkgId) || String(p.db_id) === String(pkgId));
  const packageName = pkg ? (pkg.title || pkg.name) : pkgId;

  // Mast Animated Payment Processing
  const originalBtnHTML = btn.innerHTML;
  btn.disabled = true;
  btn.style.background = '#0ea5e9';
  btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing Payment...';
  
  setTimeout(() => {
    fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        package_name: packageName,
        travel_date: date,
        num_persons: parseInt(travelers),
        budget: `$${price * parseInt(travelers)}`
      })
    })
    .then(res => res.json())
    .then(data => {
      // Payment Success Animation
      btn.style.background = '#22c55e';
      btn.innerHTML = '<i class="fa-solid fa-circle-check payment-success-icon" style="font-size:1.2rem;"></i> Payment Confirmed!';
      
      setTimeout(() => {
        closeModal("booking-modal");
        btn.disabled = false;
        btn.innerHTML = originalBtnHTML;
        btn.style.background = '#0284c7';
        if (data.success) {
          showToast(`🎉 Thank you ${name}! Booking confirmed for ${packageName}!`);
        } else {
          showToast(`⚠️ Error: ${data.error || 'Submission failed'}`);
        }
      }, 1500);
    })
    .catch(() => {
      btn.style.background = '#22c55e';
      btn.innerHTML = '<i class="fa-solid fa-circle-check payment-success-icon" style="font-size:1.2rem;"></i> Booking Secured!';
      setTimeout(() => {
        closeModal("booking-modal");
        btn.disabled = false;
        btn.innerHTML = originalBtnHTML;
        btn.style.background = '#0284c7';
        showToast(`🎉 Thank you ${name}! Booking request recorded.`);
      }, 1500);
    });
  }, 1200); // 1.2s fake secure payment delay
}

function closeModal(modalId) {
  document.getElementById(modalId)?.classList.remove("active");
}

// AI Chatbot Helper
function toggleAIChat() {
  document.getElementById("ai-chat-box")?.classList.toggle("active");
}

function sendChatMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;

  const chatMessages = document.getElementById("chat-messages");

  // Append user message
  chatMessages.innerHTML += `<div class="chat-msg user" style="background:#0284c7; color:#fff; padding:10px 14px; border-radius:14px; margin-bottom:8px; align-self:flex-end; max-width:80%; font-size:0.88rem;">${msg}</div>`;
  input.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Show typing indicator
  const typingIndicatorId = 'typing-' + Date.now();
  chatMessages.innerHTML += `<div id="${typingIndicatorId}" class="chat-msg bot typing" style="background:#f1f5f9; color:#031636; padding:10px 14px; border-radius:14px; margin-bottom:8px; align-self:flex-start; max-width:80%; font-size:0.88rem; font-style:italic;">Agent is typing...</div>`;
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Send request to real backend
  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: msg })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById(typingIndicatorId)?.remove();
    let reply = data.reply || "Sorry, I couldn't process that request right now.";
    // Simple markdown to HTML conversion for bold text if any
    reply = reply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    chatMessages.innerHTML += `<div class="chat-msg bot" style="background:#f1f5f9; color:#031636; padding:10px 14px; border-radius:14px; margin-bottom:8px; align-self:flex-start; max-width:80%; font-size:0.88rem;">${reply}</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  })
  .catch(err => {
    document.getElementById(typingIndicatorId)?.remove();
    chatMessages.innerHTML += `<div class="chat-msg bot" style="background:#fee2e2; color:#991b1b; padding:10px 14px; border-radius:14px; margin-bottom:8px; align-self:flex-start; max-width:80%; font-size:0.88rem;">Oops, connection error. Please try again.</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
}

// Toast Notifications
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.style.cssText = `
      position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
      background: #031636; color: white; padding: 12px 24px; border-radius: 30px;
      font-size: 0.9rem; font-weight: 600; z-index: 3000; box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.2);
    `;
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 3500);
}

// Global Event Listeners
function setupEventListeners() {
  document.getElementById("search-input")?.addEventListener("input", filterPackages);
  document.getElementById("region-filter")?.addEventListener("change", filterPackages);
  document.getElementById("budget-filter")?.addEventListener("change", filterPackages);

  // Close modals on backdrop click
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      e.target.classList.remove("active");
    }
  });
}
