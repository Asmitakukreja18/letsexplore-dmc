// Vercel Serverless Function: /api/chat
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { message = '', history = [] } = req.body || {};
  const msgLower = (message || '').toLowerCase().trim();

  // Try real Gemini API if key is set in environment
  const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (geminiKey) {
    try {
      const systemPrompt = `You are Atlas, the elite Luxury Travel Architect at Let's Explore DMC.
You are a REAL, deeply knowledgeable, passionate human travel expert — NEVER sound robotic, scripted, or repetitive.

ABOUT LET'S EXPLORE DMC:
- Direct Ground DMC (Destination Management Company) with official ground teams & offices in:
  • India: Amravati HQ (Shiv Krupa Residence), Mumbai, Jaipur, Nagpur
  • International: Bali (Denpasar) & Turkey (Taksim, Istanbul)
- Key destinations: Turkey, Georgia ($300 USD Special), Bali, Dubai, Thailand, Singapore, Kashmir, Kerala, Europe, China, Vietnam.
- Official WhatsApp / Hotline: +91 80075 86871.

HOW YOU COMMUNICATE:
1. TALK NATURALLY: Reply fluently in the user's language (English, Hindi, or casual Hinglish).
2. REAL VALUE: Give authentic local recommendations (hidden cafes, scenic sunset viewpoints, best season to visit, packing tips, visa advice).
3. ASK SMART QUESTIONS: If the user is unsure, ask about their vibe (adventure vs luxury chill, couple vs family, preferred budget).
4. CONCISE & LUXURY: Keep responses crisp (2 to 4 short paragraphs or clean bullet points).
5. GENTLE CTA: At the end of helpful advice, naturally invite them to get a customized day-by-day WhatsApp itinerary via +91 80075 86871.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [{ role: 'user', parts: [{ text: message }] }]
        })
      });
      const data = await response.json();
      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (aiReply) {
        return res.status(200).json({ reply: aiReply });
      }
    } catch(err) {
      console.error('Gemini API fetch error:', err);
    }
  }

  // Intelligent Context-Aware Multi-Turn Conversational AI Engine
  let reply = "";

  // Check for numbers / budget values (e.g. 10k, 10,482, 25000, 50k, 1 lakh, $300)
  const numMatch = msgLower.match(/\b(\d{1,3}(?:,\d{3})*|\d+)\s*(k|lakh|lac|l|thousand|rs|inr|usd|\$)?\b/i);
  let parsedBudget = 0;
  if (numMatch && !msgLower.match(/\b(day|days|night|nights|pax|people|person|adult|adults|child|kids)\b/i)) {
    let rawNum = parseFloat(numMatch[1].replace(/,/g, ''));
    let unit = (numMatch[2] || '').toLowerCase();
    if (unit === 'k' || unit === 'thousand') rawNum *= 1000;
    else if (unit === 'l' || unit === 'lakh' || unit === 'lac') rawNum *= 100000;
    else if (unit === 'usd' || unit === '$') rawNum *= 86;
    if (rawNum >= 1000) {
      parsedBudget = rawNum;
    }
  }

  // 1. Smart Budget Recommendations (e.g. 10k, 10,482, 50k, etc.)
  if (parsedBudget > 0 && parsedBudget < 20000) {
    reply = `💡 **Best Options for your ~₹${Math.round(parsedBudget).toLocaleString('en-IN')} Budget**:\n\n• 🛕 **Ujjain Mahakal & Omkareshwar**: 3D/2N from ₹8,999/person\n• 🏖️ **Goa Beach Break**: 4D/3N 4★ resort from ₹12,999/person\n• 🏔️ **Manali Snow Valley**: 4D/3N private cab from ₹14,999/person\n\n*Pro Tip:* If you can stretch your budget slightly to ~₹21,000–₹25,000, you can do international **Georgia 5D ($300 USD / ₹25K)** or **Kashmir Dal Lake (₹21,999)**!\n\nWould you prefer domestic hill stations or an international deal?`;
  }
  else if (parsedBudget >= 20000 && parsedBudget <= 45000) {
    reply = `💎 **Best International Direct DMC Packages for ~₹${Math.round(parsedBudget).toLocaleString('en-IN')}**:\n\n1. 🇬🇪 **Georgia Special** — $300 USD (~₹25,999) (5D/4N snowy Kazbegi & Tbilisi)\n2. 🇹🇭 **Thailand Island Hopper** — ₹28,999 (5D/4N Phuket & Krabi 4★ resort)\n3. 🏙️ **Dubai Grand Luxury** — ₹34,999 (5D/4N Desert safari & Burj Khalifa)\n4. 🇹🇷 **Turkey Escape** — ₹42,999 (5D/4N Cappadocia balloons & Bosphorus yacht)\n5. 🏔️ **Kashmir Heaven** — ₹21,999 (5D/4N Dal Lake luxury houseboat & snow)\n\nWhich destination fits your mood: **Mountains, Beaches, or City Luxury**?`;
  }
  else if (parsedBudget > 45000 && parsedBudget <= 120000) {
    reply = `✨ **Premium 5-Star Luxury Packages for ~₹${Math.round(parsedBudget).toLocaleString('en-IN')}**:\n\n1. 🏝️ **Bali Tropical Luxury & Private Pool Villa** (6D/5N ~₹48,999 with floating breakfast & Nusa Penida)\n2. 🇻🇳 **Vietnam Scenic Wonder & Halong Cruise** (7D/6N ~₹49,999)\n3. 🇹🇷 **Turkey 7-Day Grand Circuit & Cave Suite** (~₹65,000)\n\nWould you like me to share a customized day-by-day plan on WhatsApp?`;
  }
  else if (parsedBudget > 120000) {
    reply = `👑 **Ultra-Luxury Signature Experiences for ~₹${Math.round(parsedBudget).toLocaleString('en-IN')}**:\n\n1. 🇨🇭 **Swiss Alps, Glacier Express & Interlaken** (7D/6N from ₹1,45,000)\n2. 🏯 **China Luxury Silk Route & Avatar Mountains** (~₹1,25,000)\n3. 🏝️ **Maldives / Bali Overwater Private Pool Villa**\n\nShall I connect you with our senior European & Luxury specialist on WhatsApp?`;
  }
  // 2. Negative / Rejection Handlers
  else if (msgLower.match(/^(no|nope|nah|nahi|na|never|not interested|dont want|cancel|stop)\b/i)) {
    reply = "No problem at all! Take your time. 😊\n\nWhenever you're ready, I can help you with:\n• 🏔️ **Snow & Mountains** (Georgia $300 or Kashmir ₹21K)\n• 🏝️ **Tropical Beaches** (Bali Pool Villas ₹48K or Thailand ₹28K)\n• 🏙️ **City Luxury** (Dubai ₹34K)\n\nWhat kind of holiday do you usually enjoy?";
  } 
  // 3. Confusion / Frustration Handlers
  else if (msgLower.match(/\b(wtf|wth|what|kya|huh|bakwas|pagal|robot|nonsense|confused|glitch|bug|error)\b/i)) {
    reply = "Haha, sorry about that! 😅 Let's restart cleanly.\n\nI am **Atlas**, the AI Travel Architect at Let's Explore DMC. You can ask me anything naturally:\n\n1. *\"What is included in the Georgia $300 package?\"*\n2. *\"Best time to visit Turkey for hot air balloons?\"*\n3. *\"Suggest a 5-day honeymoon package under ₹1 Lakh\"*\n4. *\"Do Indians get visa on arrival in Bali?\"*\n\nTell me in your own words, what are you looking for?";
  }
  // 4. Affirmation / Agreement Handlers
  else if (msgLower.match(/^(yes|yep|sure|ok|okay|ha|haan|theek hai|sahi hai|deal|agree|done|send|bhejo)\b/i)) {
    reply = "✨ **Awesome!** Which month or dates are you planning for? And how many people will be traveling?\n\nOnce you tell me, our destination manager will share the finalized day-by-day itinerary and locked wholesale quotation.\n\n📲 [**Or message our destination desk directly on WhatsApp (+91 80075 86871)**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%20I%20am%20ready%20to%20plan%20my%20trip.%20Please%20connect%20me%20with%20a%20travel%20expert!)";
  }
  // 5. Visa Questions
  else if (msgLower.match(/\b(visa|passport|e-visa|evisa|entry requirement|documents|rules)\b/i)) {
    reply = "🛂 **Visa Guide for Indian Travellers**:\n\n• 🇬🇪 **Georgia**: Easy eVisa online, or Visa-on-Arrival if you hold a valid US, UK, Schengen, or UAE/GCC residency visa.\n• 🇹🇷 **Turkey**: Instant eVisa online (if you hold valid US/UK/Schengen visa) or hassle-free sticker visa with our documentation assistance.\n• 🏝️ **Bali (Indonesia)**: 30-Day e-VOA (Visa on Arrival) online for ~$35 USD.\n• 🇹🇭 **Thailand & Malaysia**: 100% Visa-Free entry for Indian passport holders!\n• 🇦🇪 **Dubai (UAE)**: 48-hour express tourist visa processed in 2–3 working days.\n\nOur team provides full visa processing assistance for all bookings!";
  }
  // 6. Weather & Best Time to Visit
  else if (msgLower.match(/\b(weather|best time|season|temperature|when to visit|snow time|rainy|monsoon|summer|winter)\b/i)) {
    reply = "🌤️ **Best Seasons to Travel**:\n\n• 🇬🇪 **Georgia**: **Dec to March** for guaranteed snow & skiing in Gudauri; **May to Oct** for lush green Caucasus mountains & wine harvests.\n• 🇹🇷 **Turkey**: **April to June & Sept to Nov** for perfect balloon flights & pleasant sightseeing; **Dec to Feb** for snowy fairy chimneys.\n• 🏝️ **Bali**: Wonderful year-round tropical climate (April–Oct is peak dry season with breezy sunny days).\n• 🏔️ **Kashmir**: **Dec to Feb** for Gulmarg snow & skiing; **April to July** for blooming tulip gardens & green valleys.\n\nWhich month are you planning to take your vacation?";
  }
  // 7. Food, Vegetarian & Jain Meals
  else if (msgLower.match(/\b(food|veg|vegetarian|jain|indian food|halal|breakfast|meals|dinner)\b/i)) {
    reply = "🥗 **Food & Dining Inclusions**:\n\nYes! We ensure 100% comfort for Indian food preferences:\n• In **Turkey, Bali, Georgia, Dubai, and Thailand**, our packages include daily multi-cuisine buffet breakfasts at 4★/5★ hotels.\n• We arrange dedicated **Indian Vegetarian and Jain friendly restaurants** on your sightseeing routes.\n• In Bali villas, private chefs prepare floating breakfasts and custom meals upon request!";
  }
  // 8. Flights & Airline Questions
  else if (msgLower.match(/\b(flight|flights|air ticket|airline|airport|airfare|indigo|emirates)\b/i)) {
    reply = "✈️ **Flight Connections & Transfers**:\n\n• We assist with direct & connecting flight bookings from **Mumbai, Delhi, Bangalore, Chennai, Ahmedabad, Nagpur**, and other Indian hubs.\n• All our land packages include **100% Private Chauffeured Airport Pick-up & Drop-off** in luxury AC vehicles with name placard reception.\n\nWould you like a land package only, or a flight-inclusive quotation?";
  }
  // 9. Georgia Destination
  else if (msgLower.match(/\b(georgia|tbilisi|kazbegi|gudauri|gergeti|ananuri)\b/i)) {
    reply = "🇬🇪 **Georgia Flash Deal ($300 USD Special)**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: $300 USD (~₹25,999/person)\n• **Inclusions**: 4★ Boutique Hotel in Tbilisi, Private 4x4 Chauffeur, Snowy Kazbegi Excursion, Gudauri Ski Resort, Gergeti Trinity Church & Daily Breakfast.\n\n📲 [**Send Georgia $300 Plan to WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Georgia%20Flash%20Deal%20($300%20USD%20Special)*%20(5D/4N).%0A%0A•%20Includes:%204★%20Hotel,%20Kazbegi%204x4,%20Gudauri%20Resort%20%26%20Private%20Transfers%0A•%20Rate:%20$300%20USD%20per%20person%0A%0APlease%20share%20available%20dates%20and%20day-by-day%20itinerary!)";
  }
  // 10. Turkey Destination
  else if (msgLower.match(/\b(turkey|cappadocia|istanbul|antalya|pamukkale|bosphorus|balloon)\b/i)) {
    reply = "🇹🇷 **Turkey Escape & Wonders (Flagship DMC)**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹42,999/person\n• **Inclusions**: 5★ Cave Resort in Cappadocia, Private Sunset Bosphorus Yacht Cruise, Istanbul guided tours, Private AC Chauffeur, Daily Breakfast & Dinners.\n\n📲 [**Send Turkey Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Turkey%20Escape%20%26%20Wonders*%20(5D/4N%20₹42,999).%0A%0A•%20Includes:%205★%20Cave%20Resort,%20Cappadocia%20Balloons,%20Bosphorus%20Yacht%20%26%20Pvt%20Chauffeur%0A%0APlease%20share%20the%20detailed%20day-by-day%20proposal!)";
  }
  // 11. Bali Destination
  else if (msgLower.match(/\b(bali|indonesia|ubud|nusa penida|kintamani|seminyak)\b/i)) {
    reply = "🏝️ **Bali Island Tropical Luxury & Pool Villa**:\n\n• **Duration**: 6 Days / 5 Nights\n• **Price**: ₹48,999/person\n• **Inclusions**: 5★ Private Pool Villa in Ubud, Floating Breakfast, Nusa Penida West Island Speedboat Cruise, Mt. Batur Sunrise Safari, 24/7 Dedicated Chauffeur.\n\n📲 [**Send Bali Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Bali%20Tropical%20Luxury%20%26%20Pool%20Villa*%20(6D/5N%20₹48,999).%0A%0A•%20Includes:%205★%20Pool%20Villa%20in%20Ubud,%20Floating%20Breakfast,%20Nusa%20Penida%20Cruise%0A%0APlease%20share%20the%20detailed%20plan!)";
  }
  // 12. Dubai Destination
  else if (msgLower.match(/\b(dubai|uae|burj khalifa|abu dhabi|desert safari)\b/i)) {
    reply = "🏙️ **Dubai Grand Luxury Experience**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹34,999/person\n• **Inclusions**: 4★/5★ Central Luxury Hotel, Burj Khalifa 124th Floor Observatory, VIP 4x4 Desert Safari + BBQ Dinner & Live Show, Marina Dhow Cruise.\n\n📲 [**Send Dubai Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Dubai%20Grand%20Luxury%20Experience*%20(5D/4N%20₹34,999).%0A%0A•%20Includes:%20Burj%20Khalifa,%20VIP%20Desert%20Safari,%20Marina%20Cruise%0A%0APlease%20share%20the%20day-by-day%20plan!)";
  }
  // 13. Thailand Destination
  else if (msgLower.match(/\b(thailand|phuket|krabi|bangkok|pattaya|phi phi)\b/i)) {
    reply = "🇹🇭 **Thailand Island Hopper (Phuket & Krabi)**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹28,999/person\n• **Inclusions**: 4★ Beachfront Resort, 4-Island Speedboat Tour with snorkeling, Private AC Airport & Island Transfers, Daily Buffet Breakfast.\n\n📲 [**Send Thailand Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Thailand%20Island%20Hopper*%20(5D/4N%20₹28,999).%0A%0A•%20Includes:%204★%20Beach%20Resort,%204-Island%20Speedboat,%20Pvt%20Transfers%0A%0APlease%20share%20the%20detailed%20plan!)";
  }
  // 14. Vietnam Destination
  else if (msgLower.match(/\b(vietnam|hanoi|da nang|ha long bay|halong)\b/i)) {
    reply = "🇻🇳 **Vietnam Scenic Wonder & Halong Bay**:\n\n• **Duration**: 7 Days / 6 Nights\n• **Price**: ₹49,999/person\n• **Inclusions**: 5★ Halong Bay Overnight Luxury Cruise with all meals, Domestic Flights, Da Nang Golden Bridge, Private Guided Tours.\n\n📲 [**Send Vietnam Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Vietnam%20Scenic%20Wonder%20%26%20Halong%20Bay*%20(7D/6N%20₹49,999).%0A%0A•%20Includes:%205★%20Halong%20Cruise,%20Domestic%20Flights,%20Da%20Nang%20Bridge%0A%0APlease%20share%20the%20detailed%20plan!)";
  }
  // 15. Kashmir Destination
  else if (msgLower.match(/\b(kashmir|srinagar|gulmarg|pahalgam|sonamarg)\b/i)) {
    reply = "🏔️ **Kashmir Paradise Escape**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹21,999/person\n• **Inclusions**: Luxury Dal Lake Houseboat stay, Shikara ride, Gulmarg snow gondola transfers, Pahalgam valleys, Private Heated Chauffeur Cab.\n\n📲 [**Send Kashmir Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Kashmir%20Paradise%20Escape*%20(5D/4N%20₹21,999).%0A%0A•%20Includes:%20Luxury%20Houseboat,%20Gulmarg%20Gondola%20Snow,%20Pahalgam%20Valleys%0A%0APlease%20share%20the%20detailed%20plan!)";
  }
  // 16. Kerala Destination
  else if (msgLower.match(/\b(kerala|munnar|alleppey|kochi|thekkady)\b/i)) {
    reply = "🌴 **Kerala Backwaters & Tea Hills**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹18,999/person\n• **Inclusions**: Private Deluxe Alleppey Houseboat with private chef (all meals), Munnar tea estates, AC Private Cab.\n\n📲 [**Send Kerala Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Kerala%20Backwaters%20%26%20Tea%20Hills*%20(5D/4N%20₹18,999).%0A%0A•%20Includes:%20Private%20Deluxe%20Houseboat%20with%20Chef,%20Munnar%20Hills%0A%0APlease%20share%20the%20detailed%20plan!)";
  }
  // 17. Honeymoon Packages
  else if (msgLower.match(/\b(honeymoon|romantic|couple|anniversary|candlelight)\b/i)) {
    reply = "💍 **Romantic Luxury Honeymoon Escapes**:\n\n• **Bali Private Pool Villa**: Floating breakfast & sunset Kecak dance (~₹48,999)\n• **Cappadocia Cave Suite**: Sunrise hot air balloon flight & candlelight dinner (~₹42,999)\n\n📲 [**Send Honeymoon Options to WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20looking%20for%20a%20*Romantic%20Honeymoon%20Package*%20(Bali%20Pool%20Villas%20or%20Cappadocia%20Cave%20Suites).%0A%0APlease%20share%20quotes%20with%20candlelight%20dinner%20and%20private%20transfers!)";
  }
  // 18. Greetings
  else if (msgLower.match(/^(hi|hello|hey|hola|namaste|good morning|good evening|heloo|hy|kem cho|kaisa hai|hie)\b/i)) {
    reply = "👋 **Hello! Welcome to Let's Explore DMC.**\n\nI am your AI Travel Architect. Tell me your dream destination, approximate dates, or budget, and I'll craft a bespoke proposal for you!\n\nWhere would you like to travel next?";
  }
  // 19. Pricing & How DMC works
  else if (msgLower.match(/\b(price|cost|rate|cheap|budget|quote|how much|discount|offer|deal)\b/i)) {
    reply = "💎 **100% Direct DMC Wholesale Pricing**:\n\nBecause we manage ground operations directly with our own hotel allotments and vehicle fleets in **Georgia, Turkey, and Bali**, you save 20–30% compared to typical retail portals.\n\nWhich destination shall I calculate a quote for: **Georgia ($300), Turkey, Bali, Dubai, Thailand, or Kashmir**?";
  }
  // 20. Contact & Offices
  else if (msgLower.match(/\b(office|address|where are you|location|branch|phone|number|contact|amravati|mumbai)\b/i)) {
    reply = "📍 **Our Global DMC Network**:\n\n• **Global HQ**: Sahakar Nagar, Opp. New Cotton Market, Shiv Krupa Residence, Amravati, Maharashtra\n• **International Desks**: Taksim Square (Istanbul, Turkey) & Denpasar (Bali, Indonesia)\n• **Partner Hubs**: Mumbai, Jaipur, Nagpur\n• **Official Hotline**: +91 80075 86871\n\n[**Open WhatsApp Chat with Desk**](https://wa.me/918007586871)";
  }
  // 21. Natural Open Question Fallback (Varied and Engaging)
  else {
    reply = "✨ **Let's Explore DMC Travel Concierge**:\n\nI'd love to help plan your getaway! Tell me:\n1. Where would you like to go?\n2. Are you traveling with family, friends, or as a couple?\n3. What's your rough budget?\n\nPopular picks: **Georgia ($300 Special)**, **Turkey Cappadocia (₹42K)**, **Bali Villas (₹48K)**, or **Kashmir (₹21K)**.";
  }

  return res.status(200).json({ reply });
}
}
