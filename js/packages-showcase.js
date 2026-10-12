/**
 * Let's Explore DMC — Master Package Cards Showcase
 * - Renders all 28 existing verified packages with curved, floating card design
 * - Live Category Filters & Search
 * - Wishlist integration and WhatsApp CTA
 */

(function () {
  'use strict';

  const ALL_PACKAGES = [
    {
      id: "georgia-special",
      name: "Georgia Caucasus Magic ($300 USD Special)",
      dest: "Tbilisi · Kazbegi · Gudauri · Mtskheta",
      duration: "5 Days / 4 Nights",
      price: "$300 USD",
      priceSub: "~₹28,999 / person",
      priceVal: 28999,
      category: ["international", "budget", "mountain"],
      badge: "$300 Special 🇬🇪",
      badgeColor: "bg-sunset text-navy-deep",
      rating: "4.95",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80",
      video: "images/georgia.mp4",
      href: "georgia-package.html",
      tags: ["Kazbegi 4x4", "Bridge of Peace", "Old Tbilisi Cable Car"],
      voucherId: "LEDMC100300"
    },
    {
      id: "turkey-escape",
      name: "Turkey Escape & Cappadocia Wonders",
      dest: "Istanbul · Cappadocia · Pamukkale",
      duration: "5 Days / 4 Nights",
      price: "₹42,999",
      priceSub: "per person · Quad/Twin sharing",
      priceVal: 42999,
      category: ["international", "luxury", "bestseller", "budget"],
      badge: "Bestseller 🇹🇷",
      badgeColor: "bg-navy-deep text-white",
      rating: "4.92",
      img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=900&q=80",
      video: "images/capadocia.mp4",
      href: "turkey-package.html",
      tags: ["Hot Air Balloon", "Bosphorus Cruise", "Cave Hotel"],
      voucherId: "LEDMC100420"
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
      badgeColor: "bg-[#16a34a] text-white",
      rating: "4.98",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
      video: "images/bali.mp4",
      href: "bali-package.html",
      tags: ["Finns Beach Club", "Kelingking T-Rex", "Ayung Rafting & ATV"],
      voucherId: "LEDMC587358"
    },
    {
      id: "bali-signature",
      name: "Bali Indonesia Signature (Private Pool Villa)",
      dest: "Kuta Beach (4N) + Ubud Villa (2N)",
      duration: "6 Nights / 7 Days",
      price: "₹96,068",
      priceSub: "Flights & Villa Included",
      priceVal: 96068,
      category: ["international", "beach", "luxury"],
      badge: "Signature 🏝️",
      badgeColor: "bg-ocean text-white",
      rating: "4.95",
      img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80",
      href: "bali-package.html",
      tags: ["Return Flights", "Private Pool Villa", "Lempuyang Gate"],
      voucherId: "LEDMC1024111"
    },
    {
      id: "bali-budget",
      name: "Bali Budget & Private Villa Escape",
      dest: "Kuta Beach (4N) + Ubud Private Villa (2N)",
      duration: "6 Nights / 7 Days",
      price: "₹39,014",
      priceSub: "per person onwards",
      priceVal: 39014,
      category: ["international", "beach", "budget"],
      badge: "Super Saver 🏝️",
      badgeColor: "bg-sunset text-navy-deep",
      rating: "4.88",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      href: "bali-package.html",
      tags: ["Grand Barong Resort", "Tanjung Benoa Watersports", "Tanah Lot"],
      voucherId: "LEDMC1132629"
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
      badgeColor: "bg-[#16a34a] text-white",
      rating: "4.94",
      img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80",
      href: "thailand-package.html",
      tags: ["Phi Phi Big Boat", "Phuket FantaSea", "Krabi 4-Island"],
      voucherId: "TVY448657"
    },
    {
      id: "thailand-luxury",
      name: "Phuket & Krabi 5-Star Luxury Escape",
      dest: "Westin Siray Bay Phuket + Krabi Pool Villa",
      duration: "5 Nights / 6 Days",
      price: "₹1,00,614",
      priceSub: "5★ Luxury Resorts Included",
      priceVal: 100614,
      category: ["international", "beach", "luxury", "honeymoon"],
      badge: "5-Star Luxury 🇹🇭",
      badgeColor: "bg-navy-deep text-white",
      rating: "4.97",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
      href: "thailand-package.html",
      tags: ["The Westin Siray Bay", "VIP Speedboat Phi Phi", "Sunset Longtail"],
      voucherId: "LEDMC1135678"
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
      badgeColor: "bg-sunset text-navy-deep",
      rating: "4.89",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
      video: "images/dubai.mp4",
      href: "dubai-package.html",
      tags: ["Burj Khalifa 124th", "4x4 Desert Safari", "Marina Dhow Cruise"],
      voucherId: "LEDMC1147561"
    },
    {
      id: "dubai-luxury-grand",
      name: "Dubai Grand Explorer & Abu Dhabi",
      dest: "Four Points Sheraton Downtown + Abu Dhabi",
      duration: "5 Nights / 6 Days",
      price: "₹66,848",
      priceSub: "per adult · 4★ Premium",
      priceVal: 66848,
      category: ["international", "luxury"],
      badge: "Luxury Tour 🇦🇪",
      badgeColor: "bg-ocean text-white",
      rating: "4.96",
      img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80",
      href: "dubai-package.html",
      tags: ["Museum of the Future", "Sheikh Zayed Mosque", "BAPS Mandir"],
      voucherId: "LEDMC1146323"
    },
    {
      id: "dubai-royal",
      name: "Dubai Complete Royal Experience",
      dest: "Hilton / Aloft + Palm Jumeirah + Atlantis",
      duration: "6 Nights / 7 Days",
      price: "₹64,410",
      priceSub: "per person onwards",
      priceVal: 64410,
      category: ["international", "luxury"],
      badge: "Royal Holiday 🇦🇪",
      badgeColor: "bg-navy-deep text-white",
      rating: "4.91",
      img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=900&q=80",
      href: "dubai-package.html",
      tags: ["The View at the Palm", "Aquaventure Pass", "Miracle Garden"],
      voucherId: "LEDMC1129743"
    },
    {
      id: "vietnam-expedition",
      name: "Vietnam Grand Expedition (Sapa to Phu Quoc)",
      dest: "Sapa (2N) + Hanoi (1N) + Da Nang (3N) + Phu Quoc (3N)",
      duration: "9 Nights / 10 Days",
      price: "₹1,48,000",
      priceSub: "All Domestic Flights Included",
      priceVal: 148000,
      category: ["international", "luxury"],
      badge: "Epic Tour 🇻🇳",
      badgeColor: "bg-[#16a34a] text-white",
      rating: "4.99",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
      href: "vietnam-package.html",
      tags: ["Fansipan Cable Car 3143m", "Ba Na Golden Bridge", "Vinpearl Safari"],
      voucherId: "LEDMC1134219"
    },
    {
      id: "singapore-signature",
      name: "Singapore Signature Experience",
      dest: "Novotel on Stevens + Sentosa Island",
      duration: "3 Nights / 4 Days",
      price: "₹52,062",
      priceSub: "per adult · Land package",
      priceVal: 52062,
      category: ["international", "luxury"],
      badge: "City Special 🇸🇬",
      badgeColor: "bg-ocean text-white",
      rating: "4.90",
      img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
      href: "singapore-package.html",
      tags: ["Universal Studios", "MBS Skypark Deck", "Gardens by the Bay"],
      voucherId: "LEDMC1032890"
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
      badgeColor: "bg-sunset text-navy-deep",
      rating: "4.93",
      img: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=900&q=80",
      href: "singapore-package.html",
      tags: ["Night Safari Tram", "Wings of Time Show", "Madame Tussauds"],
      voucherId: "LEDMC1143890"
    },
    {
      id: "singapore-grand",
      name: "Singapore Grand Leisure & Sentosa",
      dest: "Orchard Rendezvous Hotel (6N)",
      duration: "6 Nights / 7 Days",
      price: "₹82,800",
      priceSub: "4★ Superior Stay",
      priceVal: 82800,
      category: ["international", "luxury"],
      badge: "Grand Tour 🇸🇬",
      badgeColor: "bg-navy-deep text-white",
      rating: "4.96",
      img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=900&q=80",
      href: "singapore-package.html",
      tags: ["S.E.A. Aquarium", "Bird Paradise Mandai", "Sentosa Luge Skyride"],
      voucherId: "LEDMC1134589"
    },
    {
      id: "malaysia-bali-combo",
      name: "Malaysia with Bali Grand Combo Tour",
      dest: "Kuala Lumpur (1N) + Bali Kuta (4N) + Ubud Villa (2N)",
      duration: "7 Nights / 8 Days",
      price: "₹1,22,138",
      priceSub: "All Flights & Visas Included",
      priceVal: 122138,
      category: ["international", "beach", "luxury"],
      badge: "Combo Deal 🇲🇾🇮🇩",
      badgeColor: "bg-sunset text-navy-deep",
      rating: "4.95",
      img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80",
      href: "malaysia-package.html",
      tags: ["Petronas Twin Towers", "Nusa Penida Speedboat", "Ubud Pool Villa"],
      voucherId: "LEDMC1048820"
    },
    {
      id: "malaysia-express",
      name: "Malaysia City & Genting Highlands Escape",
      dest: "Furama Bukit Bintang + First World Genting",
      duration: "4 Nights / 5 Days",
      price: "₹39,364",
      priceSub: "per adult · Group deal",
      priceVal: 39364,
      category: ["international", "budget"],
      badge: "Value Deal 🇲🇾",
      badgeColor: "bg-[#16a34a] text-white",
      rating: "4.87",
      img: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?auto=format&fit=crop&w=900&q=80",
      href: "malaysia-package.html",
      tags: ["Batu Caves Rainbow Steps", "Awana Cable Car", "KL City Tour"],
      voucherId: "LEDMC1148210"
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
      badgeColor: "bg-navy-deep text-white",
      rating: "4.96",
      img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=900&q=80",
      href: "deals.html",
      tags: ["Disneyland 1-Day Pass", "TurboJET Fast Ferry", "Venetian Gondola Ride"],
      voucherId: "LEDMC1149838"
    },
    {
      id: "canton-fair",
      name: "Canton Fair Business & Guangzhou Tour",
      dest: "Guangzhou Exhibition + Hong Kong",
      duration: "6 Nights / 7 Days",
      price: "₹79,200",
      priceSub: "Daily Indian Dinners & Shuttles",
      priceVal: 79200,
      category: ["international", "business"],
      badge: "Business Expo 🇨🇳",
      badgeColor: "bg-ocean text-white",
      rating: "4.90",
      img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=900&q=80",
      href: "deals.html",
      tags: ["Pazhou Complex Passes", "Daily Coach Transfers", "Bullet Train to HK"],
      voucherId: "LEDMC1131584"
    },
    {
      id: "sri-lanka-wonders",
      name: "Sri Lanka Ramayana & Hill Country Tour",
      dest: "Kandy · Nuwara Eliya · Bentota Beach · Colombo",
      duration: "4 Nights / 5 Days",
      price: "₹23,064",
      priceSub: "MAP Plan (Breakfast & Dinner)",
      priceVal: 23064,
      category: ["international", "beach", "budget"],
      badge: "Budget Beach 🇱🇰",
      badgeColor: "bg-sunset text-navy-deep",
      rating: "4.89",
      img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=900&q=80",
      href: "srilanka-package.html",
      tags: ["Pinnawala Elephants", "Temple of Tooth Relic", "Madu River Safari"],
      voucherId: "LEDMC1148707"
    },
    {
      id: "kerala-classic",
      name: "Kerala God's Own Country (Family Classic)",
      dest: "Cochin · Munnar (2N) · Thekkady · Alleppey · Kovalam",
      duration: "6 Nights / 7 Days",
      price: "₹24,750",
      priceSub: "per adult · Private AC Car",
      priceVal: 24750,
      category: ["domestic", "family", "budget"],
      badge: "Family Special 🌴",
      badgeColor: "bg-[#16a34a] text-white",
      rating: "4.93",
      img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
      href: "kerala-package.html",
      tags: ["Fort Kochi Nets", "Alleppey Houseboat", "Eravikulam Tahr"],
      voucherId: "LEDMC1112399"
    },
    {
      id: "kerala-honeymoon",
      name: "Kerala Premium Honeymoon & Luxury Houseboat",
      dest: "Fragrant Nature Munnar (5★) + Private Houseboat",
      duration: "6 Nights / 7 Days",
      price: "₹35,456",
      priceSub: "All Meals on Houseboat + Innova",
      priceVal: 35456,
      category: ["domestic", "luxury", "honeymoon", "beach"],
      badge: "Luxury Honeymoon 🌴",
      badgeColor: "bg-navy-deep text-white",
      rating: "4.98",
      img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80",
      href: "kerala-package.html",
      tags: ["5★ Fragrant Nature", "Private Chef Houseboat", "Ayurvedic Massage"],
      voucherId: "LEDMC1135448"
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
      badgeColor: "bg-ocean text-white",
      rating: "4.95",
      img: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=900&q=80",
      href: "kashmir-package.html",
      tags: ["Dal Lake Shikara", "Gulmarg Gondola Ride", "Betaab Valley"],
      voucherId: "LEDMC100210"
    },
    {
      id: "andaman-islands",
      name: "Andaman Islands Coral & Havelock Cruise",
      dest: "Port Blair (3N) + Havelock Island (1N) + Neil Island",
      duration: "4 Nights / 5 Days",
      price: "₹40,000",
      priceSub: "Pvt Catamaran (Makruzz/Nautika)",
      priceVal: 40000,
      category: ["domestic", "beach", "honeymoon"],
      badge: "Island Special 🏝️",
      badgeColor: "bg-sunset text-navy-deep",
      rating: "4.94",
      img: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=900&q=80",
      href: "andaman-package.html",
      tags: ["Cellular Jail Light & Sound", "Radhanagar Beach Sunset", "Makruzz Cruise"],
      voucherId: "LEDMC592311"
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
      badgeColor: "bg-ocean text-white",
      rating: "4.91",
      img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
      href: "manali-package.html",
      tags: ["Hadimba Temple", "Solang Valley Adventure", "Naggar Castle"],
      voucherId: "LEDMC593412"
    },
    {
      id: "nepal-pilgrimage",
      name: "Nepal Pilgrimage, Muktinath 4x4 & Chitwan",
      dest: "Kathmandu (2N) · Pokhara (3N) · Jomsom · Chitwan (2N)",
      duration: "9 Nights / 10 Days",
      price: "₹25,000",
      priceSub: "Scorpio 4x4 & Full Board Chitwan",
      priceVal: 25000,
      category: ["international", "mountain", "budget"],
      badge: "Himalayan Yatra 🇳🇵",
      badgeColor: "bg-sunset text-navy-deep",
      rating: "4.93",
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
      href: "nepal-package.html",
      tags: ["Muktinath 4x4 Scorpio", "Chitwan Jungle Safari", "Pashupatinath Aarati"],
      voucherId: "LEDMC584910"
    },
    {
      id: "ujjain-jyotirlinga",
      name: "Ujjain Mahakal & Omkareshwar Jyotirlinga",
      dest: "Indore (1N) + Ujjain (2N) + Omkareshwar (1N)",
      duration: "4 Nights / 5 Days",
      price: "₹27,708",
      priceSub: "Private AC Vehicle Included",
      priceVal: 27708,
      category: ["domestic", "spiritual", "budget"],
      badge: "Spiritual Yatra 🛕",
      badgeColor: "bg-sunset text-navy-deep",
      rating: "4.96",
      img: "https://images.unsplash.com/photo-1545232979-fbf671151608?auto=format&fit=crop&w=900&q=80",
      href: "ujjain-package.html",
      tags: ["VIP Bhasma Aarti Guidance", "Mahakal Lok Corridor", "Narmada River Boat"],
      voucherId: "LEDMC1141325"
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
      badgeColor: "bg-navy-deep text-white",
      rating: "4.97",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80",
      href: "deals.html",
      tags: ["Eiffel Tower Level 2", "Swiss Alps Jungfrau", "Venice Gondola Ride"],
      voucherId: "LEDMC1139499"
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
      badgeColor: "bg-ocean text-white",
      rating: "4.98",
      img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
      href: "deals.html",
      tags: ["Mt Fuji 5th Station", "Shinkansen Bullet Train", "Kyoto Fushimi Inari"],
      voucherId: "LEDMC1142210"
    }
  ];

  let currentCategory = 'all';
  let currentSearchQuery = '';

  function renderPackageCards() {
    const gridEl = document.getElementById('curved-packages-grid');
    const countEl = document.getElementById('packages-count-badge');
    if (!gridEl) return;

    const filtered = ALL_PACKAGES.filter(pkg => {
      // Category match
      let matchCat = (currentCategory === 'all');
      if (!matchCat) {
        if (currentCategory === 'budget') {
          matchCat = pkg.priceVal <= 45000;
        } else {
          matchCat = pkg.category.includes(currentCategory);
        }
      }

      // Search match
      let matchSearch = true;
      if (currentSearchQuery.trim() !== '') {
        const q = currentSearchQuery.toLowerCase();
        matchSearch = pkg.name.toLowerCase().includes(q) ||
                      pkg.dest.toLowerCase().includes(q) ||
                      pkg.tags.some(t => t.toLowerCase().includes(q));
      }

      return matchCat && matchSearch;
    });

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${ALL_PACKAGES.length} Packages`;
    }

    if (filtered.length === 0) {
      gridEl.innerHTML = `
        <div class="col-span-full py-16 text-center text-fog">
          <span class="material-symbols-outlined text-5xl mb-3 opacity-40">travel_explore</span>
          <p class="text-xl font-display font-medium text-navy-deep">No travel packages found for "${currentSearchQuery}".</p>
          <p class="text-sm mt-1">Try searching for Dubai, Bali, Georgia, Turkey, Kerala, or clear the search.</p>
          <button onclick="clearPackageSearch()" class="mt-4 px-6 py-2.5 rounded-full bg-sunset text-navy-deep font-bold text-xs uppercase tracking-wider">Reset Filters</button>
        </div>
      `;
      return;
    }

    gridEl.innerHTML = filtered.map(pkg => `
      <article class="pkg-card group relative bg-white rounded-[32px] overflow-hidden border border-navy/10 hover:border-sunset/40 shadow-[0_8px_30px_-10px_rgba(11,31,58,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(11,31,58,0.25)] transition-all duration-500 hover:-translate-y-2 flex flex-col">
        
        <!-- Image & Badge Container -->
        <div class="relative aspect-[16/11] overflow-hidden">
          ${pkg.video ? `
            <video autoplay loop muted playsinline poster="${pkg.img}" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out">
              <source src="${pkg.video}" type="video/mp4"/>
            </video>
          ` : `
            <img src="${pkg.img}" alt="${pkg.name}" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" loading="lazy"/>
          `}
          
          <!-- Top Left Ribbon -->
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <span class="${pkg.badgeColor} text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md backdrop-blur">
              ${pkg.badge}
            </span>
          </div>

          <!-- Top Right Rating Pill -->
          <div class="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-full px-3 py-1 font-bold text-navy-deep flex items-center gap-1 text-xs shadow-md">
            <span>${pkg.rating}</span><span class="text-sunset">★</span>
          </div>

          <!-- Bottom Left Voucher Code -->
          <div class="absolute bottom-3 left-4 bg-navy-deep/80 backdrop-blur rounded-lg px-2.5 py-1 text-[10px] font-mono font-semibold text-white/90 border border-white/10">
            Trip ID: ${pkg.voucherId}
          </div>

          <!-- Wishlist Heart Button -->
          <button class="absolute bottom-3 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-navy-deep hover:text-red-500 backdrop-blur flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            data-wish-id="${pkg.id}"
            data-wish-title="${pkg.name}"
            data-wish-subtitle="${pkg.duration} · ${pkg.dest}"
            data-wish-price="${pkg.price}"
            data-wish-img="${pkg.img}"
            data-wish-href="${pkg.href}"
            title="Save to Wishlist">
            <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>

        <!-- Body Content -->
        <div class="p-6 md:p-7 flex flex-col flex-grow justify-between space-y-4">
          
          <div>
            <!-- Duration & Route -->
            <div class="flex items-center gap-2 text-xs text-fog font-medium mb-1.5">
              <span class="material-symbols-outlined text-sm text-ocean">calendar_month</span>
              <span class="font-semibold text-navy-deep">${pkg.duration}</span>
              <span class="text-gray-300">·</span>
              <span class="truncate">${pkg.dest}</span>
            </div>

            <!-- Title -->
            <h3 class="font-display text-xl md:text-2xl font-bold text-navy-deep leading-snug group-hover:text-ocean transition-colors">
              ${pkg.name}
            </h3>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mt-3">
              ${pkg.tags.map(t => `<span class="text-[11px] px-2.5 py-0.5 rounded-full bg-mist text-ocean font-medium tracking-tight">${t}</span>`).join('')}
            </div>
          </div>

          <!-- Pricing & Action Bar -->
          <div class="pt-4 border-t border-navy/5 flex items-end justify-between">
            <div>
              <div class="font-sans text-[10px] uppercase font-bold tracking-widest text-fog">Starting from</div>
              <div class="font-display text-2xl md:text-3xl font-bold text-navy-deep">${pkg.price}</div>
              <div class="text-[11px] text-forest font-semibold font-sans">${pkg.priceSub}</div>
            </div>

            <div class="flex items-center gap-2">
              <a href="https://wa.me/918007586871?text=Hi%20Let's%20Explore%20DMC,%20I%20am%20interested%20in%20${encodeURIComponent(pkg.name)}%20(${pkg.voucherId})!" target="_blank" class="w-10 h-10 rounded-full bg-[#16a34a]/12 hover:bg-[#16a34a] text-[#16a34a] hover:text-white flex items-center justify-center transition-all shadow-sm" title="Chat on WhatsApp">
                <span class="material-symbols-outlined text-lg" style="font-variation-settings:'FILL'1">chat</span>
              </a>
              <a href="${pkg.href}" class="btn-premium inline-flex items-center justify-center w-11 h-11 rounded-full bg-sunset text-navy-deep hover:bg-ocean hover:text-white transition-all shadow-md group-hover:scale-105" title="View Full Itinerary">
                <span class="material-symbols-outlined text-xl" style="font-variation-settings:'FILL'1">arrow_forward</span>
              </a>
            </div>
          </div>

        </div>
      </article>
    `).join('');
  }

  window.filterPackagesCategory = function (category) {
    currentCategory = category;

    // Update Chip states
    document.querySelectorAll('.pkg-filter-pill').forEach(btn => {
      if (btn.getAttribute('data-cat') === category) {
        btn.classList.add('bg-navy-deep', 'text-white', 'shadow-md');
        btn.classList.remove('bg-white', 'text-navy-deep/80');
      } else {
        btn.classList.remove('bg-navy-deep', 'text-white', 'shadow-md');
        btn.classList.add('bg-white', 'text-navy-deep/80');
      }
    });

    renderPackageCards();
  };

  window.searchPackages = function (query) {
    currentSearchQuery = query;
    renderPackageCards();
  };

  window.clearPackageSearch = function () {
    currentSearchQuery = '';
    currentCategory = 'all';
    const input = document.getElementById('pkg-search-input');
    if (input) input.value = '';
    window.filterPackagesCategory('all');
  };

  window.addEventListener('DOMContentLoaded', () => {
    renderPackageCards();

    const searchInput = document.getElementById('pkg-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        window.searchPackages(e.target.value);
      });
    }
  });

  // Expose ALL_PACKAGES globally for cinematic scroll journey and interactive portals
  window.ALL_PACKAGES = ALL_PACKAGES;

})();
