/**
 * Tours & Travels — Backend API Server
 * Node.js + Express + SQLite (node:sqlite DatabaseSync)
 * 
 * Features:
 *  - Contact form API  →  POST /api/contact
 *  - Booking form API  →  POST /api/booking
 *  - Packages API      →  GET  /api/packages  (Real dynamic DB packages)
 *  - Package detail    →  GET  /api/packages/:id
 *  - Admin API         →  GET  /api/admin/stats, /api/admin/contacts, /api/admin/bookings
 *  - Package Management → POST/PUT/DELETE /api/admin/packages
 *  - Serves frontend static files
 */

require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const path       = require('path');
const nodemailer = require('nodemailer');
const { Pool } = require('pg');
const { GoogleGenAI } = require('@google/genai');

const app  = express();
const PORT = process.env.PORT || 3000;

// Prevent Node.js from crashing on unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Initialize Gemini Client
let ai = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
}

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files from parent directory
app.use(express.static(path.join(__dirname, '..')));

// ── Database Setup ───────────────────────────────────────────────────────────
const fs = require('fs');
let isSqlite = false;
let dbSync = null;

const localDbPath = path.join(__dirname, 'local_store.json');
let localStore = {
  contacts: [],
  bookings: [],
  packages: [],
  reviews: [],
  newsletters: [],
  deals: [],
  search_logs: [],
  wishlists: [],
  ai_logs: []
};

function loadLocalStore() {
  try {
    if (fs.existsSync(localDbPath)) {
      const raw = fs.readFileSync(localDbPath, 'utf8');
      const parsed = JSON.parse(raw);
      localStore = { ...localStore, ...parsed };
    }
  } catch (e) {
    console.warn('Could not load local_store.json:', e.message);
  }
}
loadLocalStore();

function saveLocalStore() {
  try {
    fs.writeFileSync(localDbPath, JSON.stringify(localStore, null, 2), 'utf8');
  } catch (e) {
    console.warn('Could not save local_store.json:', e.message);
  }
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('supabase') ? { rejectUnauthorized: false } : false
});

// Helper for queries with local failover
async function query(text, params = []) {
  if (!isSqlite && pool) {
    try {
      return await pool.query(text, params);
    } catch (pgErr) {
      isSqlite = true;
      console.warn('⚠️ PostgreSQL query failed. Falling back to local data store...');
    }
  }

  const sql = text.trim();
  const upper = sql.toUpperCase();

  // 1. Table creation/alters - silently succeed
  if (upper.startsWith('CREATE TABLE') || upper.startsWith('ALTER TABLE')) {
    return { rows: [] };
  }

  // 2. Count queries
  if (upper.includes('COUNT(*)')) {
    let tbl = 'contacts';
    if (upper.includes('FROM BOOKINGS')) tbl = 'bookings';
    else if (upper.includes('FROM PACKAGES')) tbl = 'packages';
    else if (upper.includes('FROM REVIEWS')) tbl = 'reviews';
    else if (upper.includes('FROM NEWSLETTERS')) tbl = 'newsletters';
    else if (upper.includes('FROM WISHLISTS')) tbl = 'wishlists';
    
    let list = localStore[tbl] || [];
    if (upper.includes("STATUS='PENDING'")) list = list.filter(x => x.status === 'pending');
    if (upper.includes("STATUS='CONFIRMED'")) list = list.filter(x => x.status === 'confirmed');
    if (upper.includes("STATUS='NEW'")) list = list.filter(x => x.status === 'new');
    
    return { rows: [{ c: list.length }] };
  }

  // 3. Contacts
  if (upper.startsWith('INSERT INTO CONTACTS')) {
    const id = localStore.contacts.length + 1;
    const item = {
      id,
      name: params[0] || '',
      email: params[1] || '',
      phone: params[2] || '',
      destination: params[3] || '',
      message: params[4] || '',
      status: 'new',
      created_at: new Date().toISOString()
    };
    localStore.contacts.push(item);
    saveLocalStore();
    return { rows: [{ id }] };
  }
  if (upper.startsWith('SELECT * FROM CONTACTS')) {
    return { rows: [...(localStore.contacts || [])].reverse() };
  }
  if (upper.startsWith('UPDATE CONTACTS')) {
    const id = parseInt(params[1]);
    const item = localStore.contacts.find(c => c.id === id);
    if (item) { item.status = params[0]; saveLocalStore(); }
    return { rows: [] };
  }

  // 4. Bookings
  if (upper.startsWith('INSERT INTO BOOKINGS')) {
    const id = localStore.bookings.length + 1;
    const item = {
      id,
      name: params[0] || '',
      email: params[1] || '',
      phone: params[2] || '',
      package_name: params[3] || '',
      travel_date: params[4] || '',
      num_persons: parseInt(params[5]) || 1,
      budget: params[6] || '',
      notes: params[7] || '',
      status: 'pending',
      created_at: new Date().toISOString()
    };
    localStore.bookings.push(item);
    saveLocalStore();
    return { rows: [{ id }] };
  }
  if (upper.startsWith('SELECT * FROM BOOKINGS')) {
    return { rows: [...(localStore.bookings || [])].reverse() };
  }
  if (upper.startsWith('UPDATE BOOKINGS')) {
    const id = parseInt(params[1]);
    const item = localStore.bookings.find(b => b.id === id);
    if (item) { item.status = params[0]; saveLocalStore(); }
    return { rows: [] };
  }

  // 5. Packages
  if (upper.startsWith('INSERT INTO PACKAGES')) {
    const existing = localStore.packages.find(p => p.id_code === params[0]);
    if (!existing) {
      const id = localStore.packages.length + 1;
      const pkg = {
        id,
        id_code: params[0],
        name: params[1],
        region: params[2],
        destination: params[3],
        duration: params[4],
        price: parseFloat(params[5]) || 0,
        original_price: parseFloat(params[6]) || 0,
        rating: parseFloat(params[7]) || 4.88,
        reviews_count: parseInt(params[8]) || 120,
        badge: params[9] || 'Bestseller',
        image: params[10] || '',
        tags: params[11] || '[]',
        highlights: params[12] || '[]',
        inclusions: params[13] || '[]',
        exclusions: params[14] || '[]',
        itinerary: params[15] || '[]',
        category: params[16] || 'international',
        active: 1,
        created_at: new Date().toISOString()
      };
      localStore.packages.push(pkg);
      saveLocalStore();
      return { rows: [{ id }] };
    }
    return { rows: [] };
  }
  if (upper.includes('FROM PACKAGES')) {
    let list = (localStore.packages || []).filter(p => p.active !== 0);
    if (params[0]) {
      const pId = String(params[0]).toLowerCase();
      list = list.filter(p => p.id_code === pId || String(p.id) === pId || p.category === pId || p.region === pId);
    }
    return { rows: list };
  }
  if (upper.startsWith('UPDATE PACKAGES SET ACTIVE=0')) {
    const id = parseInt(params[0]);
    const pkg = localStore.packages.find(p => p.id === id);
    if (pkg) { pkg.active = 0; saveLocalStore(); }
    return { rows: [] };
  }
  if (upper.startsWith('UPDATE PACKAGES')) {
    const id = parseInt(params[7]);
    const pkg = localStore.packages.find(p => p.id === id);
    if (pkg) {
      pkg.name = params[0];
      pkg.destination = params[1];
      pkg.duration = params[2];
      pkg.price = parseFloat(params[3]);
      pkg.category = params[4];
      pkg.badge = params[5];
      pkg.active = params[6] !== undefined ? params[6] : 1;
      saveLocalStore();
    }
    return { rows: [] };
  }

  // 6. Reviews
  if (upper.includes('FROM REVIEWS')) {
    return { rows: [...(localStore.reviews || [])].reverse() };
  }
  if (upper.startsWith('INSERT INTO REVIEWS')) {
    const id = localStore.reviews.length + 1;
    const r = { id, name: params[0], text: params[1], rating: params[2], created_at: new Date().toISOString() };
    localStore.reviews.push(r);
    saveLocalStore();
    return { rows: [{ id }] };
  }

  // 7. Newsletters
  if (upper.includes('FROM NEWSLETTERS')) {
    return { rows: localStore.newsletters || [] };
  }
  if (upper.startsWith('INSERT INTO NEWSLETTERS')) {
    if (!localStore.newsletters.find(n => n.email === params[0])) {
      localStore.newsletters.push({ email: params[0], subscribed_at: new Date().toISOString() });
      saveLocalStore();
    }
    return { rows: [] };
  }

  // 8. Wishlists & Search logs & AI logs
  if (upper.startsWith('INSERT INTO AI_LOGS')) {
    localStore.ai_logs.push({ type: params[0], prompt: params[1], destination: params[2], reply: params[3], created_at: new Date().toISOString() });
    saveLocalStore();
    return { rows: [] };
  }
  if (upper.startsWith('INSERT INTO SEARCH_LOGS')) {
    localStore.search_logs.push({ query: params[0], results_count: params[1], created_at: new Date().toISOString() });
    saveLocalStore();
    return { rows: [] };
  }

  return { rows: [] };
}

function switchToSqlite() {
  isSqlite = true;
}

// Create tables
async function initDB() {
  // Test connection to PostgreSQL pool
  try {
    const testClient = await pool.connect();
    testClient.release();
    console.log('✅ PostgreSQL database connected successfully.');
  } catch (err) {
    console.warn('⚠️ PostgreSQL connection failed. Falling back to local SQLite database...');
    switchToSqlite();
  }

  await query(`
  CREATE TABLE IF NOT EXISTS contacts (
    id          SERIAL PRIMARY KEY,
    name        TEXT    NOT NULL,
    email       TEXT    NOT NULL,
    phone       TEXT,
    destination TEXT,
    message     TEXT,
    status      TEXT    DEFAULT 'new',
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id           SERIAL PRIMARY KEY,
    name         TEXT    NOT NULL,
    email        TEXT    NOT NULL,
    phone        TEXT    NOT NULL,
    package_name TEXT    NOT NULL,
    travel_date  TEXT,
    num_persons  INTEGER DEFAULT 1,
    budget       TEXT,
    notes        TEXT,
    status       TEXT    DEFAULT 'pending',
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS packages (
    id             SERIAL PRIMARY KEY,
    id_code        TEXT    UNIQUE,
    name           TEXT    NOT NULL,
    region         TEXT,
    destination    TEXT    NOT NULL,
    duration       TEXT    NOT NULL,
    price          REAL    NOT NULL,
    original_price REAL,
    rating         REAL    DEFAULT 4.85,
    reviews_count  INTEGER DEFAULT 120,
    badge          TEXT,
    image          TEXT,
    tags           TEXT,
    highlights     TEXT,
    inclusions     TEXT,
    exclusions     TEXT,
    itinerary      TEXT,
    category       TEXT    DEFAULT 'international',
    active         INTEGER DEFAULT 1,
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS reviews (
    id                  SERIAL PRIMARY KEY,
    name                TEXT    NOT NULL,
    destination_traveled TEXT   NOT NULL,
    package_id          TEXT,
    rating              INTEGER DEFAULT 5,
    review_text         TEXT    NOT NULL,
    avatar_initials     TEXT,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    approved            INTEGER DEFAULT 0,
    reviewer_name       TEXT,
    comment             TEXT,
    status              TEXT    DEFAULT 'pending'
  );

  CREATE TABLE IF NOT EXISTS newsletters (
    id            SERIAL PRIMARY KEY,
    email         TEXT    NOT NULL UNIQUE,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS deals (
    id             SERIAL PRIMARY KEY,
    package_id     TEXT    NOT NULL,
    deal_name      TEXT    NOT NULL,
    original_price REAL    NOT NULL,
    deal_price     REAL    NOT NULL,
    discount_pct   INTEGER,
    valid_until    TEXT,
    badge          TEXT,
    active         INTEGER DEFAULT 1
  );

  CREATE TABLE IF NOT EXISTS search_logs (
    id            SERIAL PRIMARY KEY,
    query         TEXT    NOT NULL,
    results_count INTEGER DEFAULT 0,
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS wishlists (
    id          SERIAL PRIMARY KEY,
    session_id  TEXT    NOT NULL,
    package_id  TEXT    NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(session_id, package_id)
  );

  CREATE TABLE IF NOT EXISTS ai_logs (
    id          SERIAL PRIMARY KEY,
    type        TEXT    DEFAULT 'chat',
    prompt      TEXT    NOT NULL,
    reply       TEXT,
    destination TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  `);

  // Seed default packages if empty
  const resPkgCount = await query('SELECT COUNT(*) as c FROM packages');
  const pkgCount = parseInt(resPkgCount.rows[0].c);
  if (pkgCount === 0) {
    const insertQuery = `
      INSERT INTO packages (id_code, name, region, destination, duration, price, original_price, rating, reviews_count, badge, image, tags, highlights, inclusions, exclusions, itinerary, category)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`;

  const fullPackages = [
    [
      'georgia-magic',
      'Discover the Magic of Georgia',
      'georgia',
      'Tbilisi, Kazbegi, Gudauri & Mtskheta',
      '5 Days / 4 Nights',
      300,
      450,
      4.95,
      98,
      '$300 Special 🇬🇪',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Kazbegi 4x4", "Bridge of Peace", "Cable Car", "Gergeti Church"]),
      JSON.stringify(["Explore Historic Old Tbilisi", "Visit The Famous Bridge Of Peace", "Enjoy Tbilisi Cable Car Experience", "Discover The Stunning Gudauri Mountains", "Visit Gergeti Trinity Church, Kazbegi", "Explore Historic Mtskheta", "Capture Beautiful Caucasus Mountain Views", "Experience Authentic Georgian Culture & Cuisine"]),
      JSON.stringify(["4-Star Boutique Hotels", "Daily Buffet Breakfast", "Private Airport Transfers & Chauffeur", "Tbilisi Cable Car Ticket", "4x4 Jeep Safari to Gergeti Trinity Church", "English Speaking Tour Guide"]),
      JSON.stringify(["International Airfare", "E-Visa Fees", "Personal Expenses & Tips", "Lunches & Dinners"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Tbilisi & Historic Old Town", desc: "Arrive at Tbilisi Airport, private transfer to boutique hotel. Explore historic Old Tbilisi, Narikala Fortress, and the iconic Bridge of Peace glowing at dusk." },
        { day: 2, title: "Tbilisi Cable Car & Sameba Cathedral", desc: "Ride aerial cable car from Rike Park for sweeping city panoramas. Visit Holy Trinity Cathedral (Sameba), sulfur baths (Abanotubani), and try Khinkali dumplings." },
        { day: 3, title: "Mtskheta UNESCO Capital & Gudauri Highway", desc: "Visit Mtskheta (UNESCO World Heritage Site), Jvari Monastery overlooking river confluence, Svetitskhoveli Cathedral, and scenic drive up to Gudauri mountain resort." },
        { day: 4, title: "High Caucasus Kazbegi & Gergeti Trinity Church 4x4", desc: "Off-road 4x4 Jeep ride to Gergeti Trinity Church at 2,170m under Mt Kazbek. Photo stops at Russia-Georgia Friendship Panorama." },
        { day: 5, title: "Georgian Wine Tasting & Departure", desc: "Souvenir shopping at Dry Bridge Market, traditional Georgian wine tasting session, and VIP private transfer to Tbilisi Airport." }
      ]),
      'international'
    ],
    [
      'turkey-escape',
      'Turkey Escape & Wonders',
      'turkey',
      'Istanbul, Cappadocia & Pamukkale',
      '5 Days / 4 Nights',
      899,
      1099,
      4.9,
      142,
      'Bestseller 🇹🇷',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Hot Air Balloon", "Bosphorus Cruise", "Cave Hotel", "Historical"]),
      JSON.stringify(["Cappadocia Hot Air Balloon Sunrise Flight", "Private Bosphorus Sunset Yacht Cruise", "Pamukkale Thermal Travertines Bath", "Grand Bazaar Shopping Spree"]),
      JSON.stringify(["4-Star Boutique Hotels", "Daily Buffet Breakfast & 3 Dinners", "Domestic Flights (Istanbul-Cappadocia)", "English Speaking Tour Guide", "All Monument Entry Fees"]),
      JSON.stringify(["International Airfare", "Personal Expenses", "Travel Insurance"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Istanbul & Bosphorus Sunset Cruise", desc: "Welcome to Turkey! Private airport transfer to your 4-star hotel in Sultanahmet. Evening luxury sunset cruise on the Bosphorus strait." },
        { day: 2, title: "Istanbul Historical Treasures & Flight to Cappadocia", desc: "Explore Hagia Sophia, Blue Mosque, and Topkapi Palace. Afternoon tour of the vibrant Grand Bazaar. Evening flight to Cappadocia." },
        { day: 3, title: "Cappadocia Hot Air Balloon & Goreme Open Air Museum", desc: "Early morning hot air balloon ride over fairy chimneys. Visit Goreme Open Air Museum and Underground City of Kaymakli." },
        { day: 4, title: "Pamukkale Travertines & Hierapolis Ancient City", desc: "Drive to Pamukkale. Walk on the snow-white calcium terraces and swim in Cleopatra’s antique thermal pool." },
        { day: 5, title: "Return to Istanbul & Departure", desc: "Enjoy a relaxed breakfast, final souvenir shopping in Istanbul, and private VIP transfer to Istanbul Airport." }
      ]),
      'international'
    ],
    [
      'bali-paradise',
      'Bali Tropical Island Paradise',
      'bali',
      'Ubud, Seminyak & Nusa Penida',
      '6 Days / 5 Nights',
      75000,
      85000,
      4.95,
      188,
      'Trending 🌴',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Private Pool Villa", "Floating Breakfast", "Nusa Penida", "Waterfall"]),
      JSON.stringify(["Private Pool Villa in Ubud", "Insta-famous Bali Swing & Tegallalang Rice Terrace", "Full day Speedboat Tour to Nusa Penida Kelingking Beach", "Jimbaran Bay Sunset Seafood Dinner"]),
      JSON.stringify(["Luxury Pool Villa Stay (Ubud & Seminyak)", "Floating Breakfast Experience", "Private Air-Conditioned Vehicle & Driver", "Speedboat to Nusa Penida", "Spa & Massage Session"]),
      JSON.stringify(["International Flights", "Personal Purchases", "Visa on Arrival fees"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Bali & Ubud Villa Check-in", desc: "Meet our representative at Ngurah Rai Airport with flower garland welcome. Transfer to your jungle pool villa in Ubud." },
        { day: 2, title: "Ubud Swing, Rice Terraces & Sacred Monkey Forest", desc: "Morning floating breakfast. Visit Tegallalang Rice Terraces, experience the giant Bali Swing, explore Sacred Monkey Forest." },
        { day: 3, title: "Kintamani Volcano View & Temple Tour", desc: "Panoramic view of Mount Batur volcano and lake. Visit Tirta Empul Holy Water Temple for spiritual cleansing." },
        { day: 4, title: "Nusa Penida Island Speedboat Day Excursion", desc: "Speedboat ride to Nusa Penida. Marvel at Kelingking T-Rex Beach, Broken Beach, Angel's Billabong, and snorkeling at Crystal Bay." },
        { day: 5, title: "Seminyak Beach Club & Sunset at Tanah Lot", desc: "Transfer to Seminyak luxury resort. Spend afternoon at Potato Head Beach Club. Evening visit to Tanah Lot Sea Temple for breathtaking sunset." },
        { day: 6, title: "Souvenir Shopping & Airport Farewell", desc: "Balinese traditional massage session, Krisna souvenir market shopping, and airport drop-off." }
      ]),
      'international'
    ],
    [
      'swiss-alps',
      'Swiss Alps & Glacier Express',
      'europe',
      'Zurich, Lucerne & Interlaken',
      '7 Days / 6 Nights',
      1899,
      2200,
      4.98,
      96,
      'Luxury 🇨🇭',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Glacier Train", "Mount Titlis", "Jungfraujoch", "Swiss Pass"]),
      JSON.stringify(["Jungfraujoch Top of Europe Mountain Rail", "Mount Titlis Cable Car & Cliff Walk", "Panoramic Swiss Travel Pass Included", "Lake Lucerne Cruise"]),
      JSON.stringify(["4-Star Alpine Hotels", "1st Class Swiss Travel Rail Pass (8 Days)", "Jungfraujoch & Titlis Excursion Tickets", "Daily Breakfast"]),
      JSON.stringify(["Airfare", "Dinners", "City Taxes"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Zurich & Old Town Stroll", desc: "Arrive in Zurich, activate Swiss Travel Pass. Check in hotel and enjoy self-guided walk along Bahnhofstrasse." },
        { day: 2, title: "Lucerne & Mount Titlis Snow Adventure", desc: "Train to Lucerne. Ride the world's first revolving Titlis Rotair cable car. Walk the Titlis Cliff Walk bridge." },
        { day: 3, title: "Scenic Train to Interlaken & Lake Briez", desc: "Board the Luzern-Interlaken Express across golden alpine passes. Cruise on turquoise waters of Lake Briez." },
        { day: 4, title: "Jungfraujoch - Top of Europe Summit", desc: "Cogwheel train ride up to Europe's highest railway station (3,454m). Visit Ice Palace & Sphinx Observation Terrace." },
        { day: 5, title: "Zermatt & Matterhorn Views", desc: "Day excursion to car-free Zermatt village with iconic views of the majestic Matterhorn peak." },
        { day: 6, title: "Bern Capital City & Rhine Falls", desc: "Visit UNESCO old town Bern and witness Europe's largest waterfall, Rhine Falls near Schaffhausen." },
        { day: 7, title: "Zurich Departure", desc: "Free morning for Swiss chocolates shopping and flight transfer." }
      ]),
      'international'
    ],
    [
      'dubai-luxury',
      'Dubai Sky & Desert Dunes',
      'dubai',
      'Dubai & Abu Dhabi',
      '5 Days / 4 Nights',
      65000,
      75000,
      4.88,
      210,
      'Super Seller 🇦🇪',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Burj Khalifa", "Desert Safari", "Abu Dhabi", "Dhow Cruise"]),
      JSON.stringify(["Burj Khalifa 124th Floor", "4x4 Desert Dune Bashing with BBQ", "Sheikh Zayed Mosque Abu Dhabi", "Marina Dhow Cruise Dinner"]),
      JSON.stringify(["4-Star Hotel", "Desert BBQ Dinner", "Dhow Cruise", "Daily Breakfast", "City Tour"]),
      JSON.stringify(["Tourism Dirham Fee", "Flights"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Dubai & Marina Cruise", desc: "Airport pickup, hotel check-in. Evening Dhow Cruise with dinner at Dubai Marina." },
        { day: 2, title: "Dubai City Tour & Burj Khalifa", desc: "Half-day city tour including Dubai Frame and Gold Souk. Evening visit to Burj Khalifa 124th floor." },
        { day: 3, title: "Desert Safari & BBQ Dinner", desc: "Afternoon 4x4 dune bashing, camel ride, henna painting, and belly dance show with BBQ dinner." },
        { day: 4, title: "Abu Dhabi Grand Mosque Tour", desc: "Full-day trip to Abu Dhabi to see the majestic Sheikh Zayed Grand Mosque and Ferrari World photo stop." },
        { day: 5, title: "Departure", desc: "Breakfast, free time for shopping at Dubai Mall, transfer to airport." }
      ]),
      'international'
    ],
    [
      'santorini-escape',
      'Santorini Escape',
      'europe',
      'Santorini, Greece',
      '5 Days / 4 Nights',
      1550,
      1750,
      4.98,
      112,
      'Flash Deal 🔥',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDAsznwQw2LS3ZDIWggK-W1yI0pJouJnNyAtmDHLq0j3xW2Jw_eX_7ZA25dJGJzOSs5oIGE3yf09__yUBqPHM9-xHArbB7ViIvP7mJ9IV5-s6RkW6B4HzuwP6AZ9AzwetskcmVjPB-gmBmFKtTa6AthqoeRLxlyp48FtnmFaC2f0gXusvqHGqN-trQwQMFjzOlId-F-FxMiZRFn805KNtmRTabVCMZ1uVesFi0XDOkWKwyQvYGWVBn6Tw',
      JSON.stringify(["Private Villa", "Sunset Sailing", "Infinity Pool"]),
      JSON.stringify(["Private villa with infinity pool", "Sunset sailing", "Gourmet breakfast included"]),
      JSON.stringify(["Private Villa", "Breakfast", "Sailing Tour"]),
      JSON.stringify(["Flights", "Dinners"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Santorini", desc: "Private transfer to your cliffside villa." },
        { day: 2, title: "Caldera Sunset Cruise", desc: "Enjoy a premium catamaran sailing experience with dinner onboard." },
        { day: 3, title: "Oia Exploration", desc: "Free day to explore the iconic blue domes and boutique shops of Oia." },
        { day: 4, title: "Wine Tasting Tour", desc: "Sample volcanic wines at historic vineyards." },
        { day: 5, title: "Departure", desc: "Transfer to airport." }
      ]),
      'international'
    ],
    [
      'arctic-lights',
      'Arctic Northern Lights',
      'europe',
      'Lapland, Finland',
      '6 Days / 5 Nights',
      2250,
      2500,
      4.95,
      89,
      'Limited Seats ❄️',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDU0XoZJWBo89kt5CDcpB0LffCtjegDvMDOn-qcD5yQjomA0-DIxGM3Yc4WlfGmJBrWKeLVWMZT3LbmAKeec3iagg0B7wx7MTH7KRjHd0IB79OzcWpieudS4axKC1KTd4uIAc_IEmR07DpMrBj9QS1FgLs1RgOKLXNq_Ylh0-rUMEyV5PjITctwTRgPRXcreA7O96ckPNcVsX3ol4ErIlpCqLYxFmv0zOaX2A1vhcRCOqlRw_jv9jf7cQ',
      JSON.stringify(["Glass Igloo", "Husky Safari", "Aurora Borealis"]),
      JSON.stringify(["Glass igloo stay", "Husky safari", "Personal Northern Lights concierge service"]),
      JSON.stringify(["Igloo Accommodation", "Husky Ride", "Winter Gear"]),
      JSON.stringify(["Flights", "Lunches"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Rovaniemi", desc: "Transfer to your glass igloo under the stars." },
        { day: 2, title: "Husky Safari", desc: "Thrilling husky sledding through snow-covered forests." },
        { day: 3, title: "Santa Claus Village", desc: "Cross the Arctic Circle and meet Santa." },
        { day: 4, title: "Snowmobile & Ice Fishing", desc: "Ride a snowmobile to a frozen lake for ice fishing." },
        { day: 5, title: "Northern Lights Hunt", desc: "Guided expedition to spot the Aurora Borealis." },
        { day: 6, title: "Departure", desc: "Transfer to airport." }
      ]),
      'international'
    ],
    [
      'serengeti-luxury',
      'Serengeti Luxury',
      'africa',
      'Serengeti, Tanzania',
      '4 Days / 3 Nights',
      2100,
      2350,
      4.99,
      64,
      'Last Minute 🦁',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCh9b47gFa_sF3KozJrEwNCsBBOquBh1Z0eWmK2Gh6j9ygAGEA-tiH9kvzragmSXaR3RPRV_tmGMp8y0M_c3zy-k1DJrmDu3il5Blnzxkp8s-8gL_Hu9BOV_-JI34W1OxnemJjfUxg5WctgKr9NGEasXMgLknXMFk8s0eDjr4fZ1TuT3vQFjE5wiUAGUrmJlXJwjIYTGDd1NJrrBThmP7jjqdRrzuwcH3CxA-uUxRxJrEdVjr4HtX4Tw',
      JSON.stringify(["Safari Lodge", "Game Drives", "Bush Flights"]),
      JSON.stringify(["All-inclusive bush flights", "Private game drives", "Luxury tented camp experience"]),
      JSON.stringify(["Lodge Stay", "All Meals", "Game Drives", "Park Fees"]),
      JSON.stringify(["International Flights", "Gratuities"]),
      JSON.stringify([
        { day: 1, title: "Arrival & Bush Flight", desc: "Fly into the heart of the Serengeti and check into your luxury lodge." },
        { day: 2, title: "Full Day Game Drive", desc: "Track the Big Five across the vast savanna with an expert guide." },
        { day: 3, title: "Walking Safari & Sundowners", desc: "Guided walking safari followed by drinks watching the African sunset." },
        { day: 4, title: "Departure", desc: "Morning game drive and flight back to Kilimanjaro Airport." }
      ]),
      'international'
    ],
    [
      'maldives-honeymoon',
      'Maldives Water Villa Luxury',
      'maldives',
      'South Male Atoll',
      '4 Days / 3 Nights',
      1199,
      1450,
      4.97,
      165,
      'Honeymoon Special 🇲🇻',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Overwater Villa", "All Inclusive", "Speedboat", "Snorkeling"]),
      JSON.stringify(["Private Overwater Ocean Villa with Direct Sea Access", "All-Inclusive Unlimited Drinks & Gourmet Dining", "Sunset Dolphin Cruise", "Complementary Couple Massage"]),
      JSON.stringify(["Overwater Villa Stay", "All Meals (Breakfast, Lunch, Dinner, Drinks)", "Roundtrip Speedboat Transfers", "Snorkeling Equipment Rent"]),
      JSON.stringify(["International Flights", "Motorized Water Sports"]),
      JSON.stringify([
        { day: 1, title: "Speedboat Transfer & Overwater Villa Check-in", desc: "Arrive at Velana Airport Male. Board speed boat to 5-star island resort. Welcome sparkling wine in your glass-floor Overwater Villa." },
        { day: 2, title: "Reef Snorkeling & Sunset Dolphin Cruise", desc: "Morning guided coral reef snorkeling with sea turtles. Late afternoon Dhoni boat cruise for wild dolphin spotting." },
        { day: 3, title: "Spa Wellness & Candlelight Beach Dinner", desc: "60-minute relaxing Balinese couple massage at overwater spa sanctuary. Private romantic setup candlelit dinner on white sands under stars." },
        { day: 4, title: "Island Farewell & Departure", desc: "Enjoy sunrise lagoon swim, final buffet breakfast, and speedboat transfer back to Male airport." }
      ]),
      'international'
    ],
    [
      'thailand-thrill',
      'Thailand Adventure & Islands',
      'thailand',
      'Bangkok, Pattaya & Krabi',
      '5 Days / 4 Nights',
      499,
      650,
      4.85,
      130,
      'Trending 🇹🇭',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Phi Phi Islands", "Coral Reefs", "Floating Market", "Nightlife"]),
      JSON.stringify(["Speedboat Tour to Phi Phi & Maya Bay", "Coral Island Water Sports in Pattaya", "Grand Palace & Emerald Buddha Bangkok", "Alcazar Cabaret Show"]),
      JSON.stringify(["4-Star Hotels with Breakfast", "Speedboat Excursions", "Airport Transfers", "English Speaking Guide"]),
      JSON.stringify(["Visa Fees", "Personal Expenses"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Bangkok & Transfer to Pattaya", desc: "Welcome to Thailand! Private transfer to Pattaya resort. Evening Alcazar Cabaret show." },
        { day: 2, title: "Coral Island Speedboat Tour & Paragliding", desc: "Speedboat to Coral Island (Koh Larn). Enjoy snorkeling, parasailing, and seafood lunch." },
        { day: 3, title: "Bangkok City & Temple Tour", desc: "Drive back to Bangkok. Visit Golden Buddha (Wat Traimit) and Reclining Buddha (Wat Pho)." },
        { day: 4, title: "Safari World & Marine Park", desc: "Full day excursion to Safari World. Watch dolphin shows, lion feeding, and orangutan boxing." },
        { day: 5, title: "Shopping & Departure", desc: "Free time for shopping at MBK / CentralWorld and departure transfer." }
      ]),
      'international'
    ],
    [
      'goa-beach',
      'Goa Beach Fun & Nightlife',
      'domestic',
      'North & South Goa',
      '4 Days / 3 Nights',
      299,
      399,
      4.8,
      240,
      'Budget Fav 🌴',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Baga Beach", "Dudhsagar Falls", "Water Sports", "Mandovi Cruise"]),
      JSON.stringify(["Water sports at Baga Beach", "Full day Dudhsagar Waterfalls & Spice Plantation trip", "Sunset Cruise on Mandovi River", "Explore Old Goa Churches"]),
      JSON.stringify(["3-Star Beach Resort", "Daily Breakfast", "Scooter/Car Rental Allowance", "River Cruise Ticket"]),
      JSON.stringify(["Flight/Train Tickets", "Lunch & Dinners"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Goa & Baga Beach Sunset", desc: "Arrive at Dabolim / Mopa airport. Transfer to resort near Baga beach. Evening beach shack dinner." },
        { day: 2, title: "North Goa Beaches & Water Sports", desc: "Visit Calangute, Anjuna, and Vagator beaches. Experience Jet Ski & Banana Boat ride." },
        { day: 3, title: "Dudhsagar Falls & Spice Plantation", desc: "Jeep safari to Dudhsagar Waterfalls followed by authentic Goan buffet lunch at Spice Plantation." },
        { day: 4, title: "Old Goa Heritage & Departure", desc: "Visit Basilica of Bom Jesus and Se Cathedral, then airport transfer." }
      ]),
      'domestic'
    ],
    [
      'andaman-paradise',
      'Andaman Tropical Paradise',
      'domestic',
      'Port Blair & Havelock Island',
      '5 Days / 4 Nights',
      799,
      999,
      4.92,
      110,
      'Hidden Gem 🏝️',
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Scuba Diving", "Radhanagar Beach", "Cellular Jail", "Night Kayaking"]),
      JSON.stringify(["PADI Certified Scuba Diving in Havelock", "Sunset at Asia's best Radhanagar Beach", "Light & Sound Show at Cellular Jail", "Glass Bottom Boat Ride"]),
      JSON.stringify(["Beachfront Resort Stay", "Makruzz Ferry Tickets", "All Transfers in Private AC Car", "Daily Breakfast"]),
      JSON.stringify(["Airfare to Port Blair", "Personal Water Sports"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Port Blair & Cellular Jail", desc: "Arrive at Veer Savarkar Airport. Check-in hotel. Evening Light & Sound show at historic Cellular Jail." },
        { day: 2, title: "Cruising to Havelock Island & Radhanagar Beach", desc: "Board high-speed catamaran ferry to Havelock. Visit Radhanagar Beach (Beach No. 7) for spectacular sunset." },
        { day: 3, title: "Elephant Beach Scuba Diving & Snorkeling", desc: "Speedboat ride to Elephant Beach. Experience scuba diving among colorful coral reefs and tropical fishes." },
        { day: 4, title: "Neil Island & Natural Bridge", desc: "Ferry to Neil Island. Visit Bharatpur Beach, Laxmanpur Beach, and the famous Natural Rock Bridge." },
        { day: 5, title: "Return to Port Blair & Departure", desc: "Morning ferry back to Port Blair and airport drop-off." }
      ]),
      'domestic'
    ],
    [
      'kerala-backwaters',
      'Kerala Backwaters & Emerald Hills (LEDMC1118521)',
      'domestic',
      'Munnar, Thekkady, Alleppey & Kovalam',
      '7 Days / 6 Nights',
      35000,
      42000,
      4.92,
      190,
      'Official Package 🌿',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Munnar Tea Estates", "Periyar Wildlife", "Alleppey Backwaters", "Kovalam & Poovar"]),
      JSON.stringify(["Munnar Hill Sightseeing & Anaimudi View", "Periyar Wildlife Sanctuary & Boat Cruise", "Alleppey Backwaters & Punnamada Lake Walk", "Kovalam Beach & Poovar Mangrove Visit", "Padmanabhaswamy Temple Trivandrum"]),
      JSON.stringify(["Daily Breakfast at 3-Star Resorts", "6 Nights Stay (Lake N Hills, Sandra Palace, Resort Alleppey, Golden Sand Beach)", "Private AC Vehicle Transfers", "All Sightseeing & Driver Charges"]),
      JSON.stringify(["Lunch & Dinner", "Personal Expenses", "Airfare / Train Tickets"]),
      JSON.stringify([
        { day: 1, title: "Cochin to Munnar & Waterfalls", desc: "Pickup at Cochin, drive via Neriyamangalam Forest. Visit Valara & Cheeyappara Waterfalls. Check in Lake N Hills Resort." },
        { day: 2, title: "Munnar Full Day Sightseeing", desc: "Photo Point, Mattupetty Dam, Elephant Spot, Echo Point, Tata Tea Museum, Anaimudi Peak (Rajamala/Eravikulam) & Pothamedu Sunset." },
        { day: 3, title: "Munnar to Thekkady & Wildlife", desc: "Drive to Thekkady. Visit Periyar Wildlife Sanctuary, Mullaperiyar Dam & Spice plantations. Evening Periyar lake boat cruise. Stay at Sandra Palace." },
        { day: 4, title: "Thekkady to Alleppey Backwaters", desc: "Drive to Alleppey. Explore Backwaters, Beach, Light House, Revi Karunakaran Museum, Mullakkal Temple & Punnamada Lake walk. Stay at Resort Alleppey." },
        { day: 5, title: "Alleppey to Kovalam Beach", desc: "Scenic drive to Kovalam. Check in Golden Sand Beach Resort. Relax at Arabian Sea beaches." },
        { day: 6, title: "Kovalam & Poovar Day Visit", desc: "Visit Poovar Beach & mangrove estuary, Trivandrum Padmanabhaswamy Temple, Napier Museum & Zoo. Stay at Golden Sand Resort." },
        { day: 7, title: "Kerala Departure", desc: "Breakfast, check out, transfer to Trivandrum / Cochin Airport." }
      ]),
      'domestic'
    ],
    [
      'sikkim-mountains',
      'Sikkim Himalayan Monasteries',
      'domestic',
      'Gangtok, Lachung & Yumthang',
      '7 Days / 6 Nights',
      599,
      750,
      4.91,
      95,
      'Adventure 🏔️',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Tsomgo Lake", "Cable Car", "Yumthang Valley", "Monasteries"]),
      JSON.stringify(["Frozen Tsomgo Lake & Baba Mandir Excursion", "Yumthang Valley of Flowers Hot Spring", "Gangtok Ropeway Cable Car Ride", "Rumtek Monastery Tour"]),
      JSON.stringify(["3-Star Mountain Hotels", "Protected Area Permits", "Non-AC Scorpio / Xylo Vehicle", "Breakfast & Dinners"]),
      JSON.stringify(["Airfare to Bagdogra / Pakyong", "Zero Point Permit Charges"]),
      JSON.stringify([
        { day: 1, title: "Bagdogra Airport to Gangtok Transfer", desc: "Drive along Teesta river to Gangtok capital city. Check in hotel on MG Marg." },
        { day: 2, title: "Tsomgo Lake & Baba Mandir Excursion", desc: "Visit high-altitude Tsomgo Lake (12,400 ft) and historic Baba Harbhajan Singh Mandir near Nathula Pass." },
        { day: 3, title: "Gangtok to North Sikkim (Lachung)", desc: "Scenic drive past Singhik Viewpoint and Seven Sisters Waterfall to Lachung village." },
        { day: 4, title: "Yumthang Valley & Hot Springs", desc: "Visit Yumthang Valley (Valley of Flowers) and thermal hot springs. Return to Gangtok." },
        { day: 5, title: "Gangtok Local Monastery Tour", desc: "Visit Rumtek Monastery, Do Drul Chorten, Enchey Monastery, and Handicraft Center." },
        { day: 6, title: "Gangtok Ropeway & MG Marg Shopping", desc: "Enjoy Gangtok Cable Car ride and evening shopping for Tibetan souvenirs on MG Marg." },
        { day: 7, title: "Departure Transfer to Bagdogra", desc: "Morning breakfast and drive to Bagdogra airport." }
      ]),
      'domestic'
    ],
    [
      'australia-dream',
      'Australia Coast & Cities',
      'international',
      'Sydney, Melbourne & Gold Coast',
      '9 Days / 8 Nights',
      2199,
      2600,
      4.96,
      88,
      'Dream Trip 🇦🇺',
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Opera House", "Barrier Reef", "Wildlife Sanctuary", "Gold Coast"]),
      JSON.stringify(["Sydney Opera House Guided Tour", "Great Barrier Reef Helicopter & Snorkeling Flight", "Currumbin Wildlife Sanctuary Kangaroo & Koala Feed", "Puffing Billy Steam Train Melbourne"]),
      JSON.stringify(["4-Star City Hotels", "Domestic Australian Flights", "Opera House Entry Ticket", "Daily Buffet Breakfast"]),
      JSON.stringify(["International Airfare", "Australian Tourist Visa"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Sydney & Harbour Sunset Dinner Cruise", desc: "Arrive in Sydney. VIP transfer to Darling Harbour hotel. Evening luxury dinner cruise past Sydney Harbour Bridge." },
        { day: 2, title: "Sydney Opera House & Bondi Beach Tour", desc: "Guided tour inside Sydney Opera House, stroll along Bondi Beach to Coogee coastal walk." },
        { day: 3, title: "Flight to Cairns & Great Barrier Reef Excursion", desc: "Flight to Cairns. Board catamaran to Outer Barrier Reef pontoon for snorkeling and glass-bottom boat." },
        { day: 4, title: "Flight to Gold Coast & Theme Parks", desc: "Flight to Gold Coast. Evening Surfers Paradise beach walk." },
        { day: 5, title: "Currumbin Wildlife Sanctuary Koalas & Kangaroos", desc: "Feed kangaroos and hold koalas at Currumbin Wildlife Sanctuary." },
        { day: 6, title: "Flight to Melbourne & Laneway Street Art Tour", desc: "Flight to Melbourne. Explore famous Hosier Lane street art and coffee culture." },
        { day: 7, title: "Great Ocean Road Scenic Helicopter Tour", desc: "Full day tour along Great Ocean Road to witness Twelve Apostles rock formations." },
        { day: 8, title: "Puffing Billy Steam Train & Yarra Valley Wine", desc: "Ride historic Puffing Billy steam train through Dandenong Ranges." },
        { day: 9, title: "Departure from Melbourne", desc: "Final shopping and airport transfer." }
      ]),
      'international'
    ],
    [
      'jaipur-royal',
      'Jaipur Royal Forts & Palaces',
      'domestic',
      'Jaipur, Rajasthan',
      '3 Days / 2 Nights',
      249,
      350,
      4.87,
      190,
      'Royal India 🏰',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Amber Fort", "City Palace", "Chokhi Dhani", "Shopping"]),
      JSON.stringify(["Elephant Safari ride up Amber Fort", "Hawa Mahal (Palace of Winds) Photo Stop", "City Palace & Jantar Mantar Observatory", "Royal Rajasthani Thali Dinner at Chokhi Dhani"]),
      JSON.stringify(["Heritage Palace Hotel Stay", "Royal Welcome with Shehnai", "Private AC Sedan Vehicle", "Daily Breakfast & 1 Royal Dinner"]),
      JSON.stringify(["Train/Flight to Jaipur", "Personal Shopping"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Pink City Jaipur & Chokhi Dhani Village", desc: "Welcome to Jaipur! Transfer to Heritage Haveli hotel. Evening Rajasthani folk dance & dinner at Chokhi Dhani." },
        { day: 2, title: "Amber Fort, Hawa Mahal & City Palace Tour", desc: "Visit Amber Fort, Jal Mahal photo stop, Hawa Mahal, City Palace Museum, and UNESCO Jantar Mantar." },
        { day: 3, title: "Johari Bazaar Shopping & Departure", desc: "Explore colorful Johari Bazaar for blue pottery, handicrafts, and bandhani sarees before airport/station drop." }
      ]),
      'domestic'
    ],
    [
      'canton-fair-china',
      'Canton Fair 6N All-Inclusive Package',
      'china',
      '5N Foshan | 1N Hong Kong',
      '7 Days / 6 Nights',
      750,
      950,
      4.92,
      86,
      'B2B Special 🇨🇳',
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["144Hr Visa", "Canton Fair", "4★ Hotels", "Jain Meals", "China SIM"]),
      JSON.stringify(["5N Foshan & 1N Hong Kong accommodation", "China 144 Hour Visa & PAR Assistance", "Hindi, English & Chinese Guides", "Indian Breakfast & Dinner (Veg & Jain)", "Gala Dinner with Unlimited Drinks (2 Hrs)", "China SIM Card Included"]),
      JSON.stringify(["4★ Hotels Accommodation", "Transfers & Sightseeing in AC Coach", "On-Ground Indian Tour Coordinator", "On-Ground Support", "China 144 Visa & PAR", "China SIM Card"]),
      JSON.stringify(["International Flights", "Personal Expenses", "Tips to Driver & Guide"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Hong Kong & Transfer to Foshan", desc: "Arrive at Hong Kong Airport. Meet our Indian tour coordinator and transfer in comfortable AC coach to 4-star Foshan hotel." },
        { day: 2, title: "Canton Fair Day 1 Excursion", desc: "Full day dedicated visit to Canton Fair Pazhou Complex. Dedicated shuttle transfers and English/Chinese guides." },
        { day: 3, title: "Canton Fair Day 2 & Networking", desc: "Canton Fair exhibition visits. Indian Veg & Jain buffet dinner with tour coordinator support." },
        { day: 4, title: "Foshan City Sightseeing & Ancestral Temple", desc: "Visit Foshan Ancestral Temple, Nanfeng Ancient Kiln, and local electronics & ceramics trade markets." },
        { day: 5, title: "Canton Fair Final Day & Gala Dinner", desc: "Final day at Canton Fair. Special Gala Dinner with 2 hours unlimited drinks and networking with fellow buyers." },
        { day: 6, title: "Transfer to Hong Kong & Victoria Peak", desc: "Drive to Hong Kong. 1 Night stay at Hong Kong hotel. Visit Victoria Peak and Tsim Sha Tsui Promenade." },
        { day: 7, title: "Hong Kong Shopping & Departure", desc: "Morning shopping at Nathan Road / Ladies Market and airport transfer for return flight." }
      ]),
      'international'
    ],
    [
      'croatia-highlights',
      'Private Van Tour Croatia Highlights',
      'europe',
      'Zagreb - Plitvice Lakes - Zadar - Split - Hvar - Dubrovnik',
      '9 Days / 8 Nights',
      1499,
      1899,
      4.97,
      114,
      'Private Van 🇭🇷',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
      JSON.stringify(["Private Van", "Dubrovnik Cable Car", "Plitvice Lakes", "Hvar Island"]),
      JSON.stringify(["2 Nights Zagreb, 2 Nights Split, 1 Night Hvar, 3 Nights Dubrovnik", "Private Chauffeur-Driven Van at disposal", "Excursion to Plitvice Lakes National Park", "Full-day excursion to Hvar Island", "Dubrovnik Old Town & City Walls Cable Car"]),
      JSON.stringify(["8 Nights Boutique Accommodation", "Private Chauffeur-Driven Van Throughout", "Airport Pick-up & Drop-off", "Plitvice Lakes Entrance Ticket", "Dubrovnik Cable Car Ticket", "Daily Buffet Breakfast"]),
      JSON.stringify(["International Flights", "Schengen Visa Fees", "Meals not mentioned"]),
      JSON.stringify([
        { day: 1, title: "Arrival in Zagreb", desc: "Private chauffeur-driven van pickup at Zagreb Airport. Check-in boutique hotel and evening stroll around Ban Jelačić Square." },
        { day: 2, title: "Zagreb City Tour & Plitvice Lakes National Park", desc: "Morning Zagreb city tour. Excursion to UNESCO Plitvice Lakes National Park with turquoise lakes and waterfalls." },
        { day: 3, title: "Scenic Drive to Split via Zadar Sea Organ", desc: "Drive to Split along Adriatic coastline with photo stop at Zadar Sea Organ. Check-in Split hotel." },
        { day: 4, title: "Split Old Town & Diocletian's Palace Tour", desc: "Guided walking tour of Emperor Diocletian’s Palace, Riva Promenade, and leisure time along the coast." },
        { day: 5, title: "Ferry Excursion to Hvar Island", desc: "Full-day trip to sun-drenched Hvar Island. Explore Hvar Old Town, Fortica Fortress, and lavender fields." },
        { day: 6, title: "Drive to Dubrovnik (Pearl of the Adriatic)", desc: "Scenic coastal drive past Makarska Riviera to Dubrovnik. Check-in 3 nights Dubrovnik stay." },
        { day: 7, title: "Dubrovnik Old Town, City Walls & Cable Car", desc: "Walk ancient Dubrovnik City Walls (Game of Thrones backdrop) and ride Mount Srđ Cable Car for panoramic sunset views." },
        { day: 8, title: "Leisure Day in Dubrovnik or Elaphiti Islands", desc: "Leisure day to explore hidden coves, Lokrum Island, or relax at Banje Beach." },
        { day: 9, title: "Dubrovnik Airport Departure", desc: "Breakfast, private van transfer to Dubrovnik Airport for departure flight." }
      ]),
      'international'
    ]
  ];

    const insertPkgQuery = `
      INSERT INTO packages (id_code, name, region, destination, duration, price, original_price, rating, reviews_count, badge, image, tags, highlights, inclusions, exclusions, itinerary, category)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)
      ON CONFLICT DO NOTHING`;

    for (const p of fullPackages) {
      await query(insertPkgQuery, p);
    }
    console.log('✅ Full Rich Tour Packages seeded into PostgreSQL database!');
  }
}

// Initialize database
initDB().catch(err => console.error("Database initialization failed:", err));

// ── Email Helper ─────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(subject, html) {
  if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your_gmail_app_password_here') {
    console.log('📧 [EMAIL SKIPPED — configure .env] Subject:', subject);
    return;
  }
  try {
    await transporter.sendMail({
      from: `"Let's Explore DMC" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject,
      html,
    });
    console.log('📧 Email sent:', subject);
  } catch (err) {
    console.error('📧 Email error:', err.message);
  }
}

// ── Auth Middleware ───────────────────────────────────────────────────────────
function adminAuth(req, res, next) {
  const pass = req.headers['x-admin-pass'] || req.query.pass;
  if (pass !== (process.env.ADMIN_PASS || 'ToursAdmin@2025')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// ═══════════════════════════════════════════════
//  API ROUTES
// ═══════════════════════════════════════════════

// ── 1. Contact Form ───────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const name = req.body.name || req.body.fullName || '';
  const email = req.body.email || '';
  const phone = req.body.phone || req.body.mobile || '';
  const destination = req.body.destination || req.body.dest || '';
  const message = req.body.message || req.body.msg || req.body.notes || '';

  if (!name || (!email && !phone)) return res.status(400).json({ error: 'Name and email/phone required' });

  try {
    const text = `
      INSERT INTO contacts (name,email,phone,destination,message)
      VALUES ($1,$2,$3,$4,$5) RETURNING id`;
    const result = await query(text, [name, email||phone+'@contact', phone||'', destination||'', message||'']);

    sendEmail(
      `📩 New Enquiry from ${name} — Let's Explore DMC`,
      `<div style="font-family:sans-serif;max-width:600px;">
        <h2 style="color:#031636;">New Contact Enquiry</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Email</td><td style="padding:8px;">${email||'—'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Phone</td><td style="padding:8px;">${phone||'—'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Destination</td><td style="padding:8px;">${destination||'—'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Message</td><td style="padding:8px;">${message||'—'}</td></tr>
        </table>
        <p style="color:#888;margin-top:20px;font-size:13px;">Received via Let's Explore DMC website</p>
      </div>`
    );

    res.json({ success: true, id: (result.rows && result.rows[0]) ? result.rows[0].id : Date.now(), message: 'Enquiry received! We\'ll contact you soon.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── 2. Booking Form ───────────────────────────────────────────────────────────
app.post('/api/booking', async (req, res) => {
  const name = req.body.name || req.body.fullName || '';
  const email = req.body.email || '';
  const phone = req.body.phone || req.body.mobile || '';
  const package_name = req.body.package_name || req.body.packageName || req.body.package || 'Custom Tour';
  const travel_date = req.body.travel_date || req.body.travelDate || req.body.date || '';
  const num_persons = req.body.num_persons || req.body.travelers || req.body.persons || 1;
  const budget = req.body.budget || req.body.total || '';
  const notes = req.body.notes || req.body.message || '';

  if (!name || (!email && !phone)) {
    return res.status(400).json({ error: 'Name and phone/email are required' });
  }

  try {
    const text = `
      INSERT INTO bookings (name,email,phone,package_name,travel_date,num_persons,budget,notes)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`;
    const result = await query(text, [name, email||phone+'@booking', phone||'', package_name, travel_date||'', num_persons||1, budget||'', notes||'']);

    sendEmail(
      `🎫 New Booking Request — ${package_name} — Let's Explore DMC`,
      `<div style="font-family:sans-serif;max-width:600px;">
        <h2 style="color:#031636;">New Booking Request</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Email</td><td style="padding:8px;">${email||'—'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Phone</td><td style="padding:8px;">${phone||'—'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Package</td><td style="padding:8px;color:#904d00;font-weight:bold;">${package_name}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Travel Date</td><td style="padding:8px;">${travel_date||'Not specified'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Persons</td><td style="padding:8px;">${num_persons||1}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Budget</td><td style="padding:8px;">${budget||'—'}</td></tr>
          <tr><td style="padding:8px;background:#f5f5f5;font-weight:bold;">Notes</td><td style="padding:8px;">${notes||'—'}</td></tr>
        </table>
        <p style="color:#888;margin-top:20px;font-size:13px;">Received via Let's Explore DMC website</p>
      </div>`
    );

    res.json({ success: true, id: (result.rows && result.rows[0]) ? result.rows[0].id : Date.now(), message: 'Booking request received! We\'ll confirm within 2 hours.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Wishlist API ───────────────────────────────────────────────────────────
app.post('/api/wishlist', async (req, res) => {
  const { session_id, package_id } = req.body;
  if (!session_id || !package_id) return res.status(400).json({ error: 'Session ID and Package ID required' });
  try {
    const text = 'INSERT INTO wishlists (session_id, package_id) VALUES ($1, $2) ON CONFLICT DO NOTHING';
    await query(text, [session_id, package_id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/wishlist', async (req, res) => {
  const { session_id } = req.query;
  if (!session_id) return res.status(400).json({ error: 'Session ID required' });
  try {
    const result = await query('SELECT package_id FROM wishlists WHERE session_id = $1', [session_id]);
    res.json({ success: true, data: result.rows.map(r => r.package_id) });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/wishlist', async (req, res) => {
  const { session_id, package_id } = req.body;
  if (!session_id || !package_id) return res.status(400).json({ error: 'Session ID and Package ID required' });
  try {
    await query('DELETE FROM wishlists WHERE session_id = $1 AND package_id = $2', [session_id, package_id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── 3. Packages API (public) ──────────────────────────────────────────────────
app.get('/api/packages', async (req, res) => {
  const { category, region } = req.query;
  let q = 'SELECT * FROM packages WHERE active=1';
  const params = [];
  let paramCount = 1;

  if (category) {
    q += ` AND category=$${paramCount++}`;
    params.push(category);
  }
  if (region && region !== 'all') {
    q += ` AND (region=$${paramCount} OR category=$${paramCount})`;
    paramCount++;
    params.push(region);
  }

  q += ' ORDER BY id ASC';

  try {
    const result = await query(q, params);
    const rows = result.rows;

  const pkgs = rows.map(p => {
    let tags = [];
    let highlights = [];
    let inclusions = [];
    let exclusions = [];
    let itinerary = [];

    try { tags = typeof p.tags === 'string' ? (p.tags.startsWith('[') ? JSON.parse(p.tags) : p.tags.split(',')) : (p.tags||[]); } catch(e){}
    try { highlights = typeof p.highlights === 'string' ? (p.highlights.startsWith('[') ? JSON.parse(p.highlights) : p.highlights.split(',')) : (p.highlights||[]); } catch(e){}
    try { inclusions = typeof p.inclusions === 'string' ? (p.inclusions.startsWith('[') ? JSON.parse(p.inclusions) : p.inclusions.split(',')) : (p.inclusions||[]); } catch(e){}
    try { exclusions = typeof p.exclusions === 'string' ? (p.exclusions.startsWith('[') ? JSON.parse(p.exclusions) : p.exclusions.split(',')) : (p.exclusions||[]); } catch(e){}
    try { itinerary = typeof p.itinerary === 'string' ? JSON.parse(p.itinerary) : (p.itinerary||[]); } catch(e){}

    return {
      id: p.id_code || String(p.id),
      db_id: p.id,
      title: p.name,
      name: p.name,
      region: p.region || 'international',
      destination: p.destination,
      duration: p.duration,
      price: p.price,
      originalPrice: p.original_price || Math.round(p.price * 1.25),
      rating: p.rating || 4.88,
      reviewsCount: p.reviews_count || 140,
      badge: p.badge || 'Bestseller',
      image: p.image || 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      tags,
      highlights,
      inclusions,
      exclusions,
      itinerary,
      category: p.category
    };
  });

    res.json({ success: true, count: pkgs.length, data: pkgs });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/packages/:id', async (req, res) => {
  const param = req.params.id;
  try {
    const result = await query('SELECT * FROM packages WHERE active=1 AND (id_code=$1 OR id::text=$1)', [param]);
    const pkg = result.rows[0];
    if (!pkg) return res.status(404).json({ error: 'Package not found' });

  let tags = [], highlights = [], inclusions = [], exclusions = [], itinerary = [];
  try { tags = typeof pkg.tags === 'string' ? (pkg.tags.startsWith('[') ? JSON.parse(pkg.tags) : pkg.tags.split(',')) : []; } catch(e){}
  try { highlights = typeof pkg.highlights === 'string' ? (pkg.highlights.startsWith('[') ? JSON.parse(pkg.highlights) : pkg.highlights.split(',')) : []; } catch(e){}
  try { inclusions = typeof pkg.inclusions === 'string' ? (pkg.inclusions.startsWith('[') ? JSON.parse(pkg.inclusions) : pkg.inclusions.split(',')) : []; } catch(e){}
  try { exclusions = typeof pkg.exclusions === 'string' ? (pkg.exclusions.startsWith('[') ? JSON.parse(pkg.exclusions) : pkg.exclusions.split(',')) : []; } catch(e){}
  try { itinerary = typeof pkg.itinerary === 'string' ? JSON.parse(pkg.itinerary) : []; } catch(e){}

  res.json({
    success: true,
    data: {
      id: pkg.id_code || String(pkg.id),
      db_id: pkg.id,
      title: pkg.name,
      name: pkg.name,
      region: pkg.region || 'international',
      destination: pkg.destination,
      duration: pkg.duration,
      price: pkg.price,
      originalPrice: pkg.original_price || Math.round(pkg.price * 1.25),
      rating: pkg.rating || 4.88,
      reviewsCount: pkg.reviews_count || 140,
      badge: pkg.badge || 'Bestseller',
      image: pkg.image || 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      tags, highlights, inclusions, exclusions, itinerary, category: pkg.category
    }
  });
  } catch(err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── 4. Admin Routes ───────────────────────────────────────────────────────────

app.get('/api/admin/contacts', adminAuth, async (req, res) => {
  const result = await query('SELECT * FROM contacts ORDER BY id DESC');
  res.json({ success: true, count: result.rows.length, data: result.rows });
});

app.get('/api/admin/bookings', adminAuth, async (req, res) => {
  const result = await query('SELECT * FROM bookings ORDER BY id DESC');
  res.json({ success: true, count: result.rows.length, data: result.rows });
});

app.patch('/api/admin/bookings/:id', adminAuth, async (req, res) => {
  const { status } = req.body;
  const valid = ['pending','confirmed','cancelled','completed'];
  if (!valid.includes(status)) return res.status(400).json({ error: 'Invalid status' });
  await query('UPDATE bookings SET status=$1 WHERE id=$2', [status, req.params.id]);
  res.json({ success: true, message: 'Status updated' });
});

app.patch('/api/admin/contacts/:id', adminAuth, async (req, res) => {
  const { status } = req.body;
  await query('UPDATE contacts SET status=$1 WHERE id=$2', [status, req.params.id]);
  res.json({ success: true, message: 'Status updated' });
});

app.post('/api/admin/packages', adminAuth, async (req, res) => {
  const { name, destination, duration, price, category, badge, image } = req.body;
  if (!name || !destination || !price) return res.status(400).json({ error: 'name, destination and price required' });
  const idCode = name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now();
  const text = `
    INSERT INTO packages (id_code,name,destination,duration,price,category,badge,image)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`;
  const result = await query(text, [idCode, name, destination, duration||'5D/4N', price, category||'international', badge||'Custom', image||'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80']);
  res.json({ success: true, id: result.rows[0].id });
});

app.put('/api/admin/packages/:id', adminAuth, async (req, res) => {
  const { name, destination, duration, price, category, badge, active } = req.body;
  const text = `UPDATE packages SET name=$1,destination=$2,duration=$3,price=$4,category=$5,badge=$6,active=$7 WHERE id=$8`;
  await query(text, [name, destination, duration, price, category, badge, active !== undefined ? active : 1, req.params.id]);
  res.json({ success: true, message: 'Package updated' });
});

app.delete('/api/admin/packages/:id', adminAuth, async (req, res) => {
  await query('UPDATE packages SET active=0 WHERE id=$1', [req.params.id]);
  res.json({ success: true, message: 'Package deactivated' });
});

app.get('/api/admin/stats', adminAuth, async (req, res) => {
  const [
    cContacts, cBookings, cPending, cConfirmed, cNewContacts, topDest,
    cReviews, cSubs, cWish
  ] = await Promise.all([
    query('SELECT COUNT(*) as c FROM contacts'),
    query('SELECT COUNT(*) as c FROM bookings'),
    query("SELECT COUNT(*) as c FROM bookings WHERE status='pending'"),
    query("SELECT COUNT(*) as c FROM bookings WHERE status='confirmed'"),
    query("SELECT COUNT(*) as c FROM contacts WHERE status='new'"),
    query("SELECT package_name, COUNT(*) as c FROM bookings GROUP BY package_name ORDER BY c DESC LIMIT 1"),
    query("SELECT COUNT(*) as c FROM reviews"),
    query("SELECT COUNT(*) as c FROM newsletters"),
    query("SELECT COUNT(*) as c FROM wishlists")
  ]);

  res.json({
    success: true, data: {
      totalContacts: parseInt(cContacts.rows[0].c), 
      totalBookings: parseInt(cBookings.rows[0].c), 
      pendingBookings: parseInt(cPending.rows[0].c),
      confirmedBookings: parseInt(cConfirmed.rows[0].c), 
      newContacts: parseInt(cNewContacts.rows[0].c),
      topDestination: topDest.rows[0]?.package_name || 'Turkey Escape & Wonders',
      totalReviews: parseInt(cReviews.rows[0].c), 
      totalSubscribers: parseInt(cSubs.rows[0].c), 
      totalWishlists: parseInt(cWish.rows[0].c)
    }
  });
});

app.get('/api/admin/reviews', adminAuth, async (req, res) => {
  try {
    const result = await query('SELECT * FROM reviews ORDER BY created_at DESC');
    res.json({ success: true, count: result.rows.length, data: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.patch('/api/admin/reviews/:id', adminAuth, async (req, res) => {
  const { status } = req.body;
  try {
    await query('UPDATE reviews SET status = $1 WHERE id = $2', [status, req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/admin/newsletters', adminAuth, async (req, res) => {
  try {
    const result = await query('SELECT * FROM newsletters ORDER BY subscribed_at DESC');
    res.json({ success: true, count: result.rows.length, data: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── 4. Reviews API ─────────────────────────────────────────────────────────────
app.get('/api/reviews', async (req, res) => {
  const { package_id } = req.query;
  let q = "SELECT * FROM reviews WHERE status='approved'";
  let params = [];
  if (package_id) {
    q += " AND package_id = $1";
    params.push(package_id);
  }
  q += " ORDER BY created_at DESC";
  try {
    const result = await query(q, params);
    res.json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/reviews', async (req, res) => {
  const { package_id, reviewer_name, rating, comment } = req.body;
  if (!reviewer_name || !rating) return res.status(400).json({ error: 'Name and rating required' });
  try {
    await query('INSERT INTO reviews (package_id, reviewer_name, rating, comment) VALUES ($1, $2, $3, $4)', [package_id || 'general', reviewer_name, rating, comment || '']);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── 5. Newsletter API ────────────────────────────────────────────────────────
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });
  try {
    await query('INSERT INTO newsletters (email) VALUES ($1) ON CONFLICT DO NOTHING', [email]);
    res.json({ success: true, message: 'Subscribed successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── 6. Deals API ──────────────────────────────────────────────────────────────
app.get('/api/deals', async (req, res) => {
  try {
    const result = await query("SELECT * FROM deals WHERE active=1 AND valid_until > CURRENT_TIMESTAMP ORDER BY discount_pct DESC");
    res.json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/admin/deals', adminAuth, async (req, res) => {
  const { package_id, deal_name, original_price, deal_price } = req.body;
  if (!package_id || !deal_name || !original_price || !deal_price) return res.status(400).json({ error: 'Missing required fields' });
  
  const discount_pct = Math.round(((original_price - deal_price) / original_price) * 100);
  // Default valid until 30 days from now
  const valid_until = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  
  try {
    const text = 'INSERT INTO deals (package_id, deal_name, original_price, deal_price, discount_pct, valid_until) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
    const result = await query(text, [package_id, deal_name, original_price, deal_price, discount_pct, valid_until]);
    res.json({ success: true, id: result.rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/admin/deals/:id', adminAuth, async (req, res) => {
  try {
    await query('UPDATE deals SET active=0 WHERE id=$1', [req.params.id]);
    res.json({ success: true, message: 'Deal removed' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── 7. Search Logging API ─────────────────────────────────────────────────────
app.post('/api/search', async (req, res) => {
  const { q, results_count } = req.body;
  if (!q) return res.status(400).json({ error: 'Query required' });
  try {
    await query('INSERT INTO search_logs (query, results_count) VALUES ($1, $2)', [q, results_count || 0]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Admin Panel (HTML) ────────────────────────────────────────────────────────
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin_dashboard.html'));
});
app.get('/admin/leads', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin_leads.html'));
});
app.get('/admin/packages', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin_packages.html'));
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (_, res) => {
    res.json({ status: 'ok', app: "Let's Explore DMC Backend", time: new Date().toISOString() });
  });

  // ── 8. AI Chat & Trip Generator API (Gemini Free Tier Enabled) ─────────────
  app.post('/api/ai/generate', async (req, res) => {
    const { destination = 'Georgia', duration = '5 Days', budget = '$300', vibe = 'Mountains' } = req.body;

    // Default fallback structure
    const fallbackResponse = {
      title: destination.toLowerCase().includes('georgia') ? "Discover The Magic of Georgia" : `${destination} Custom Escape`,
      subtitle: "Verified Itinerary · Let's Explore DMC",
      price: destination.toLowerCase().includes('georgia') ? "USD 300" : (budget || "$300 / ₹24,999"),
      desc: `Explore ${destination} with an exclusive ${duration} itinerary tailored for ${vibe}. Includes transfers, 4★ boutique stays, and curated sightseeing!`,
      img: destination.toLowerCase().includes('georgia')
        ? "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80"
        : "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
      link: destination.toLowerCase().includes('georgia') ? "georgia-package.html" : "deals.html",
      match: "96% Match",
      days: [
        { day: 1, title: `Arrival in ${destination} & Private Transfer`, desc: "Meet representative at airport, VIP private transfer to boutique hotel. Evening walk around city center." },
        { day: 2, title: "Cultural Tour & Iconic Landmarks", desc: "Full day tour of top heritage sites, aerial cable car ride, and authentic local culinary tasting." },
        { day: 3, title: "Scenic Nature & Mountain Drive", desc: "Guided tour into breathtaking mountain passes and historic monuments." },
        { day: 4, title: "Off-Road Adventure & Panoramic Views", desc: "4x4 Jeep safari excursion to high altitude scenic points." },
        { day: 5, title: "Local Souvenir Market & Airport Drop-off", desc: "Morning market shopping and private airport farewell transfer." }
      ]
    };

    if (!process.env.GEMINI_API_KEY || !ai) {
      return res.json({ success: true, source: 'fallback', data: fallbackResponse });
    }

    try {
      const prompt = `Create a ${duration} travel itinerary for ${destination} with budget ${budget} and travel vibe ${vibe}.
      Respond ONLY in valid JSON with key fields:
      "title", "subtitle", "price", "desc", "match", "days" (array of {day: number, title: string, desc: string}).`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: "You are Atlas, the AI Travel Architect for Let's Explore DMC. Output strictly clean valid JSON without markdown formatting.",
          temperature: 0.7,
        }
      });

      let jsonText = response.text.trim();
      if (jsonText.startsWith('```json')) jsonText = jsonText.replace(/^```json/, '').replace(/```$/, '').trim();
      if (jsonText.startsWith('```')) jsonText = jsonText.replace(/^```/, '').replace(/```$/, '').trim();

      const parsed = JSON.parse(jsonText);
      try {
        await query('INSERT INTO ai_logs (type, prompt, destination, reply) VALUES ($1, $2, $3, $4)', [
          'generator', `Destination: ${destination}, Duration: ${duration}, Budget: ${budget}, Vibe: ${vibe}`, destination, parsed.title || destination
        ]);
      } catch(e){}
      res.json({ success: true, source: 'gemini-free-tier', data: parsed });
    } catch (err) {
      console.warn('Gemini API quota/error, falling back to cached smart itinerary:', err.message);
      try {
        await query('INSERT INTO ai_logs (type, prompt, destination, reply) VALUES ($1, $2, $3, $4)', [
          'generator', `Destination: ${destination}, Duration: ${duration}, Budget: ${budget}, Vibe: ${vibe}`, destination, fallbackResponse.title
        ]);
      } catch(e){}
      res.json({ success: true, source: 'fallback', data: fallbackResponse });
    }
  });

  function getSmartAIReply(prompt) {
    const p = (prompt || '').trim().toLowerCase();
    if (p.includes('hindi') || p.includes('baat karo') || p.includes('namaste') || p.includes('suhani') || p.includes('mera naam') || p.includes('mera name')) {
      const nameMatch = prompt.match(/(?:im|i am|mera name|mera naam)\s+([a-zA-Z]+)/i);
      const user = nameMatch ? nameMatch[1] : '';
      return `Namaste ${user ? user + ' ji' : ''}! 🙏 Welcome to Let's Explore DMC. Main aapki travel planning me help kar sakta hu! Aap kahan ghoomne ka plan kar rahe hain? (Georgia $300, Bali, Turkey, Dubai, Thailand, Kashmir, Kerala ya koi customized trip?).`;
    }
    if (p.startsWith('hi') || p.startsWith('hello') || p.startsWith('hey') || p === 'im suhani' || p.includes('i am suhani') || p.includes('my name is')) {
      const nameMatch = prompt.match(/(?:im|i am|my name is)\s+([a-zA-Z]+)/i);
      const user = nameMatch ? nameMatch[1] : '';
      return `Hello ${user ? user : 'there'}! 👋 Welcome to Let's Explore DMC! How can I help you plan your dream vacation today? Tell me your preferred destination (like Georgia, Bali, Turkey, Dubai, Thailand) or budget, and I'll build a custom itinerary for you!`;
    }
    if (p.includes('thailand')) {
      return `🇹🇭 **Thailand Islands & Beach Paradise**: 5D/4N Package starting at **₹29,999 / $360**! Includes Phuket Island Hopping, Phi Phi Island Speedboat Tour, James Bond Island, 4★ Beachfront Hotel & Private Airport Transfers. Would you like me to share a customized day-by-day plan?`;
    }
    if (p.includes('bali')) {
      return `🇮🇩 **Bali Tropical Luxury Escape**: 6D/5N Package starting at **$450 / ₹37,500**! Includes Ubud Private Pool Villa, Kuta Beach Sunset, Nusa Penida Island Tour, Bali Swing & Rice Terraces. Perfect for couples, honeymoons & luxury breaks!`;
    }
    if (p.includes('georgia') || p.includes('300')) {
      return `🇬🇪 **Georgia Special**: 5D/4N Package for **USD 300**! Includes Tbilisi Historic Old Town, Kazbegi 4x4 Jeep Safari, Gudauri Ski Resort, Gergeti Trinity Church, 4★ Boutique Hotel & Private Transfers.`;
    }
    if (p.includes('turkey')) {
      return `🇹🇷 **Turkey Escape & Wonders**: 5D/4N Package starting at **₹42,999 / $520**! Includes Istanbul Bosphorus Cruise, Hagia Sophia, Cappadocia Hot Air Balloon flight & Cave Hotel stay.`;
    }
    if (p.includes('dubai')) {
      return `🇦🇪 **Dubai Luxury & Desert Safari**: 5D/4N Package starting at **$499 / ₹41,500**! Includes Burj Khalifa 124th Floor Observation Deck, Desert Safari with BBQ Dinner, Dhow Cruise & Dubai Frame.`;
    }
    if (p.includes('kashmir')) {
      return `🏔️ **Kashmir Heaven on Earth**: 5D/4N Package starting at **₹18,500**! Includes Srinagar Houseboat Stay, Shikara Ride on Dal Lake, Gulmarg Gondola Cable Car & Pahalgam Valley.`;
    }
    if (p.includes('kerala')) {
      return `🌴 **Kerala Backwaters & Tea Gardens**: 5D/4N Package starting at **₹16,999**! Includes Munnar Hills, Alleppey Houseboat Cruise with all meals & Kovalam Beach.`;
    }
    return `🤖 **Atlas AI Concierge**: I'm here to assist you with your trip! We offer direct DMC packages to **Georgia ($300)**, **Thailand (₹29,999)**, **Bali ($450)**, **Turkey (₹42,999)**, **Dubai ($499)**, **Kashmir**, **Kerala** and more. Tell me your preferred destination or travel date!`;
  }

  app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message required' });

    const fallbackReply = getSmartAIReply(message);

    try {
      const packagesRes = await query("SELECT id, name, destination, duration, price, category FROM packages");
      let packagesContext = "Currently available travel packages:\n";
      if (packagesRes.rows && packagesRes.rows.length > 0) {
         packagesRes.rows.forEach(p => {
           packagesContext += `- ${p.name} (${p.duration}) to ${p.destination}. Price: $${p.price}. Category: ${p.category}\n`;
         });
      }

      const systemPrompt = `You are Atlas, an expert AI Travel Agent for 'Let's Explore DMC'. Help users find perfect travel packages (like Georgia $300, Turkey, Bali, Dubai). Be enthusiastic, concise, and helpful.\n\n${packagesContext}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: message,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        }
      });

      const replyText = response.text || fallbackReply;
      try {
        await query('INSERT INTO ai_logs (type, prompt, reply) VALUES ($1, $2, $3)', ['chat', message, replyText]);
      } catch(e){}

      res.json({ success: true, reply: replyText });
    } catch (err) {
      console.warn('Gemini Chat error/quota limit, returning smart fallback:', err.message);
      try {
        await query('INSERT INTO ai_logs (type, prompt, reply) VALUES ($1, $2, $3)', ['chat', message, fallbackReply]);
      } catch(e){}
      res.json({ success: true, reply: fallbackReply });
    }
  });

  // Admin AI Logs API
  app.get('/api/admin/ai-logs', async (req, res) => {
    try {
      const result = await query('SELECT * FROM ai_logs ORDER BY id DESC LIMIT 50');
      res.json({ success: true, count: result.rows.length, data: result.rows });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });

// ── Catch-all: serve frontend ─────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'home.html'));
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Tours & Travels Backend running at http://localhost:${PORT}`);
  console.log(`📊 Admin Panel: http://localhost:${PORT}/admin`);
  console.log(`📡 API Base:    http://localhost:${PORT}/api`);
});
