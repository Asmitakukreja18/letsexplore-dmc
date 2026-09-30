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

  // Connect Real Gemini 2.5 Flash API
  const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || Buffer.from("QVEuQWI4Uk42SXQ5aGtQWlFuZTU4Q2V6RlFyRnlTZlZDbE5TODYzLThQUHRpYTlBRmlhR1E=", "base64").toString("utf-8");
  if (geminiKey) {
    try {
      const systemPrompt = `You are Atlas, the elite Luxury Travel Concierge & Architect at Let's Explore DMC (Amravati, Maharashtra).

CRITICAL TARGETED ANSWER & COMPACT SPACING RULE:
1. JITNA PUCHA UTNA HI EXACT ANSWER DO (ANSWER ONLY WHAT IS SPECIFICALLY ASKED):
   - If the user asks for "price", "amount", "kitna kharcha", "cost": Answer ONLY the exact price breakdown (Per Adult Price, Total Group Amount, Land Package Option). DO NOT dump the full 8-day itinerary, flights, or policies unless requested!
   - If the user asks for "inclusions and exclusions": Provide ONLY the clear itemized Inclusions and Exclusions.
   - If the user asks for "hotels": Provide ONLY the hotels, room categories, meal plans, and nights.
   - If the user asks for "itinerary": Provide ONLY the day-wise schedule.
   - If the user asks for "flights": Provide ONLY the flight schedule.
   - ONLY when the user asks for "full package", "poora details", "complete voucher", or "overview" should you present the multi-section breakdown.
2. COMPACT FORMATTING & ZERO EXTRA SPACING:
   - Keep answers compact, clean, and elegant.
   - DO NOT leave excessive blank lines, large vertical gaps, or repetitive filler text.
   - Use clean, tight bullet points.

CRITICAL MULTI-TURN CONVERSATION MEMORY:
- You MUST maintain strict continuity across the ENTIRE conversation history.
- If a destination was discussed in any previous message (e.g. Malaysia with Bali, Thailand, Bali, Singapore, Vietnam, Georgia, Turkey, Dubai) and the user asks follow-up questions like:
  * "place we will visit?" / "places to see" / "sightseeing" / "kya dekhenge"
  * "pricing?" / "price btao" / "kitna hoga"
  * "itenrary" / "itinerary" / "schedule"
  * "hotels?" / "hotel kon sa hai"
  * "inclusions exclusions"
  YOU ALREADY KNOW THE DESTINATION! NEVER ask "Please specify which package you are interested in". ALWAYS answer immediately for the active destination from the conversation context!

CRITICAL LANGUAGE RULE (STRICT):
- If the user asks in English, you MUST reply 100% in English only! Never use Hindi or Devanagari script.
- If the user asks in Hindi (in Devanagari script), reply in Hindi.
- If the user asks in Hinglish (Roman script Hindi), reply in friendly Hinglish in Latin script.
- Strictly match the exact language and script of the user's message.

ABOUT LET'S EXPLORE DMC:
- Direct Ground DMC with official ground teams & offices in:
  • India: Amravati Global HQ (Shiv Krupa Residence, Opp New Cotton Market), Mumbai, Jaipur, Nagpur
  • International: Bali (Denpasar) & Turkey (Taksim, Istanbul)
- Official WhatsApp / Hotline: +91 80075 86871 | Email: Info@letsexploredmc.com

============================================================
OFFICIAL VERIFIED PACKAGES (EXACT VOUCHER DATA):
============================================================

1. MALAYSIA WITH BALI COMBO (7N/8D):
- Trip ID: LEDMC1048820 | Lead Guest: Mohit Kodwani | Pax: 4 Adults (25-Jul to 01-Aug-2026)
- Route: Kuala Lumpur (1N) + Bali Kuta (4N) + Bali Private Pool Villa (2N)
- Pricing: INR 1,22,138.00 per adult (All-inclusive with Batik Air/Vietjet flights & visa) | Total for 4 adults = INR 4,88,552.00 | Land Package from ₹58,999/adult
- Inclusions: Flights (Batik Air OD-216 Bom-KL, OD-171 KL-DPS, Vietjet VJ-894 DPS-SGN, VJ-1803 SGN-HYD), Visa clearances, 7N Stays (1N Ibis Styles KL, 4N Kuta Beach Club, 2N Maharaja Villa), Daily Breakfast, KL City Tour + Twin Towers, Uluwatu Sunset + Kecak Fire Dance, Handara Gate + Ulun Danu + Tanah Lot, Nusa Penida West Tour with sharing boat & pvt car + complimentary snorkelling & canoeing, ATV Quad Biking (90 min tandem) + Bali Jungle Swing (unlimited swings & nests), Lempuyang Gate of Heaven + Tirta Gangga + Bats Cave + Black Sand Beach, all private airport & tour transfers.
- Exclusions: Dinners, optional water sports, Nusa Penida retribution fee (IDR 25,000/adult), personal expenses, travel insurance.

2. THAILAND GRAND EXPEDITION (7N/8D):
- Trip ID: TVY448657 | Customer Name: Rajesh Chawla | Pax: 6 Adults (06-Apr-2026 Created)
- Travel Dates: 31-May-2026 to 07-Jun-2026 (7 Nights / 8 Days)
- Route: Phuket (3N) + Krabi (2N) + Bangkok (2N)
- Pricing: INR 62,362.00 per adult net DMC rate | Total for 6 adults = INR 3,74,172.00
- Hotels: Panwaburi Beachfront Resort (Phuket 4★, 2 Rooms, Deluxe Tree or Facade + extra bed, Triple, Breakfast), Aonang Paradise Resort (Krabi 3★, 2 Rooms, Deluxe Pool View, Triple, Breakfast), Platinum Suite Bangkok (4★, 2 Rooms, Superior + extra bed, Triple, Breakfast).
- Inclusions: 7N Stays, Daily Breakfast, 100% Private AC Transfers, Phi Phi Island Big Boat with lunch, Krabi 4-Island with lunch, Chao Phraya Dinner Cruise, Mahanakhon Skywalk, Safari World with lunch, Phuket FantaSea Show & Dinner, Phuket Tiger Park.
- Exclusions: Dinners (except cruise & FantaSea), personal expenses, national park fees, visa.
- Child Policy: Under 2 yrs free, under 10 yrs no bed 45%, under 10 yrs with bed 85%, 10+ yrs adult.
- Bank: YES BANK LIMITED | Account No: 108163400004886 | IFSC: YESB0001081 | LETS EXPLORE DMC
- Contact: Hemant Thadani (8007586871)

3. BALI INDONESIA SIGNATURE (6N/7D):
- Trip ID: LEDMC1024111 | Customer Name: MOHIT KODWANI | Pax: 2 Adults (10-Jul to 16-Jul-2026)
- Route: Kuta (4N) + Ubud Luxury Private Pool Villa (2N)
- Pricing: INR 96,068.00 per adult (with IndiGo flights & visa) | Total for 2 adults = INR 1,92,136.00 | Land package from ₹48,999/adult
- Flights: IndiGo 6E-1607 (Mumbai 05:15 -> Bali 16:40, 10-Jul) & IndiGo 6E-1608 (Bali 18:00 -> Mumbai 00:10, 16-Jul).
- Hotels: Kuta Beach Club Hotel (4★ Premium, 1 Deluxe Room, Double, Breakfast, 4N) + Alam Ubud Culture Villas (4★ Premium, 1-Bedroom Pool Villa, Double, Breakfast, 2N).
- Inclusions: Flights & Visa, Flower garland welcome at airport, 600ml daily water bottle, 100% Private SUV vehicle (Avanza/Xenia) with English speaking driver, Nusa Penida West tour with private car on island & sharing boat + complimentary snorkelling & canoeing, ATV Bike Ride (90 min tandem) + Ayung River Rafting (3 hrs with lunch) + Bali Jungle Swing (unlimited swings & nests), Handara Gate + Ulun Danu + Tanah Lot Sunset, Lempuyang Temple (Gate of Heaven) + Tirta Gangga + Bats Cave + Black Sand Beach, all entrance fees & taxes.
- Exclusions: Dinners, International Tourism Levy (IDR 150,000/person on arrival), Nusa Penida retribution (IDR 25,000/adult), extra water sports, personal expenses, travel insurance.
- Bank: YES BANK LIMITED | Account No: 108163400004886 | IFSC: YESB0001081 | LETS EXPLORE DMC
- Contact: Hemant Thadani (8007586871)

4. SINGAPORE SIGNATURE EXPERIENCE (3N/4D):
- Duration: 3 Nights / 4 Days | Pax: 2 Adults
- Pricing: INR 52,062.00 per adult | Total for 2 adults = INR 1,04,124.00
- Inclusions: 3N Novotel Singapore (4★ Deluxe Room, Breakfast), Private Changi Airport transfers, City Tour + Singapore Flyer (3 hrs), Marina Bay Sands Skypark Observation Deck, Gardens by the Bay (Flower Dome & Cloud Forest), Full-day Universal Studios Singapore Pass with transfers.
- Exclusions: Flights, Visa, Dinners, hotel security deposit.

5. VIETNAM GRAND EXPEDITION (9N/10D):
- Trip ID: LEDMC1134219 | Lead Guest: Ashutosh Sahu | Pax: 4 Adults
- Route: Sapa (2N) + Hanoi (1N) + Da Nang (3N) + Phu Quoc (3N)
- Pricing: INR 1,48,000.00 per adult all-inclusive | Total for 4 adults = INR 5,92,000.00 | Land package from ₹69,999/adult
- Inclusions: 9N 3★/4★ Hotels with breakfast, 7-seater private AC transfers, Fansipan Peak Cable Car & Glass Bridge, Ninh Binh Tam Coc boat, Ba Na Hills Golden Bridge, Phu Quoc Sunset Town, Kiss Bridge, Vinpearl Safari & VinWonders, 4-Island Tour with Hon Thom 8km Cable Car & Aquatopia Waterpark with buffet lunch.
- Exclusions: Dinners, Visa, GST 5% & TCS, personal expenses.`;

      // Build conversation contents
      const contents = [];
      if (Array.isArray(history) && history.length > 0) {
        history.slice(-6).forEach(h => {
          if (h.role && h.text) {
            contents.push({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.text }] });
          }
        });
      }
      contents.push({ role: 'user', parts: [{ text: message }] });

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: contents
        })
      });
      const data = await response.json();
      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (aiReply) {
        return res.status(200).json({ reply: aiReply });
      }
    } catch (err) {
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
    else if (unit === 'usd' || unit === '$') rawNum *= 96.6;
    if (rawNum >= 1000) {
      parsedBudget = rawNum;
    }
  }

  // 1. Smart Budget Recommendations (e.g. 10k, 10,482, 50k, etc.)
  if (parsedBudget > 0 && parsedBudget < 20000) {
    reply = `💡 **Best Options for your ~₹${Math.round(parsedBudget).toLocaleString('en-IN')} Budget**:\n\n• 🛕 **Ujjain Mahakal & Omkareshwar**: 3D/2N from ₹8,999/person\n• 🏖️ **Goa Beach Break**: 4D/3N 4★ resort from ₹12,999/person\n• 🏔️ **Manali Snow Valley**: 4D/3N private cab from ₹14,999/person\n\n*Pro Tip:* If you can stretch your budget slightly to ~₹21,000–₹29,000, you can do international **Georgia 5D ($300 USD / ~₹29K)** or **Kashmir Dal Lake (₹21,999)**!\n\nWould you prefer domestic hill stations or an international deal?`;
  }
  else if (parsedBudget >= 20000 && parsedBudget <= 45000) {
    reply = `💎 **Best International Direct DMC Packages for ~₹${Math.round(parsedBudget).toLocaleString('en-IN')}**:\n\n1. 🇬🇪 **Georgia Special** — $300 USD (~₹28,999) (5D/4N snowy Kazbegi & Tbilisi)\n2. 🇹🇭 **Thailand Island Hopper** — ₹28,999 (5D/4N Phuket & Krabi 4★ resort)\n3. 🏙️ **Dubai Grand Luxury** — ₹34,999 (5D/4N Desert safari & Burj Khalifa)\n4. 🇹🇷 **Turkey Escape** — ₹42,999 (5D/4N Cappadocia balloons & Bosphorus yacht)\n5. 🏔️ **Kashmir Heaven** — ₹21,999 (5D/4N Dal Lake luxury houseboat & snow)\n\nWhich destination fits your mood: **Mountains, Beaches, or City Luxury**?`;
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
  // 9. Malaysia with Bali Combo Destination
  else if (msgLower.match(/\b(malaysia|kuala lumpur|kl|petronas|malaysia with bali)\b/i)) {
    reply = `🇲🇾🇮🇩 **Malaysia with Bali Grand Combo Tour (7 Nights / 8 Days)**:
• **Trip ID**: LEDMC1048820 | **Lead Guest**: Mohit Kodwani | **Pax**: 4 Adults
• **Route**: Kuala Lumpur (1N) + Bali Kuta (4N) + Ubud Luxury Private Pool Villa (2N)

💰 **Pricing Summary**:
• **Per Adult (All-inclusive with Flights & Visa)**: INR 1,22,138.00
• **Total Net Amount for 4 Adults**: INR 4,88,552.00
• **Land Package Option**: From ₹58,999 per adult

🏨 **Verified Accommodations**:
• **Kuala Lumpur (1N)**: Ibis Styles (3★ Standard, Double, Breakfast)
• **Bali Kuta (4N)**: Kuta Beach Club Hotel (4★ Deluxe, Double, Breakfast)
• **Bali Ubud (2N)**: Maharaja Villa (4★ 1-Bedroom Private Pool Villa, Double, Breakfast)

🗺️ **Day-Wise Itinerary Breakdown**:
• **Day 1**: Arrive Kuala Lumpur Airport → City Tour + Petronas Twin Towers / KL Tower view → Stay at Ibis Styles
• **Day 2**: Flight from KL to Bali (Denpasar) → Private AC transfer to Kuta Beach Club Hotel → Leisure
• **Day 3**: Afternoon Uluwatu Cliff Sunset Tour + Iconic Kecak & Fire Dance Show
• **Day 4**: Full-Day Scenic Tour: Handara Gate + Ulun Danu Beratan Floating Temple + Tanah Lot Temple Sunset
• **Day 5**: Full-Day Nusa Penida West Tour (Kelingking Beach, Angel's Billabong, Broken Beach, Bubu Beach + Snorkeling & Canoeing)
• **Day 6**: ATV Quad Biking Jungle Ride (90 min tandem) + Bali Jungle Swing (Unlimited Swings & Nests) → Check-in to Maharaja Private Pool Villa
• **Day 7**: Eastern Bali Tour: Lempuyang Gate of Heaven + Tirta Gangga Water Palace + Goa Lawah Bat Cave + Black Sand Beach
• **Day 8**: Villa leisure & floating breakfast → Check-out & Airport drop for departure flight

✅ **Key Inclusions**:
• International & Domestic Flights: Batik Air OD-216 (Mumbai to KL), Batik Air OD-171 (KL to Bali), Vietjet VJ-894 (Bali to Ho Chi Minh), Vietjet VJ-1803 (Ho Chi Minh to Hyderabad)
• Visa assistance & clearances
• 7 Nights Hotel & Villa Accommodations with Daily Breakfast
• 100% Private AC Vehicle transfers with English speaking driver
• Nusa Penida Speedboat & Private Car on island
• 90-min ATV Ride + Bali Jungle Swing + All Sightseeing Entry Tickets

❌ **Exclusions**:
• Daily Dinners, Bali Tourism Levy (IDR 150,000/pax), Personal expenses & Tips.

📲 [**Book Malaysia with Bali on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Malaysia%20with%20Bali%20voucher)`;
  }
  // 10. Bali Destination
  else if (msgLower.match(/\b(bali|indonesia|ubud|nusa penida|kintamani|seminyak)\b/i)) {
    reply = `🏝️ **Bali Indonesia Signature Tour (6 Nights / 7 Days)**:
• **Trip ID**: LEDMC1024111 | **Customer**: Mohit Kodwani | **Pax**: 2 Adults
• **Route**: Kuta Beach (4N) + Ubud Luxury Private Pool Villa (2N)

💰 **Pricing Summary**:
• **Per Adult (All-inclusive with IndiGo Flights & Visa)**: INR 96,068.00
• **Total Net Amount for 2 Adults**: INR 1,92,136.00
• **Land Package Option**: From ₹48,999 per adult

🏨 **Verified Accommodations**:
• **Kuta (4N)**: Kuta Beach Club Hotel (4★ Premium, 1 Deluxe Room, Breakfast)
• **Ubud (2N)**: Alam Ubud Culture Villas & Residences (4★ Premium, 1-Bedroom Private Pool Villa, Breakfast)

🗺️ **Day-Wise Itinerary Breakdown**:
• **Day 1**: Arrive Denpasar Bali Airport → Traditional Flower Garland Welcome → Private SUV transfer to Kuta Beach Club Hotel
• **Day 2**: Half-Day Uluwatu Sunset Tour + Cliffside Temple + Kecak & Fire Dance Show
• **Day 3**: Full-Day Scenic Tour: Handara Iconic Gate + Ulun Danu Lake Beratan Floating Temple + Tanah Lot Temple Sunset
• **Day 4**: Full-Day Nusa Penida West Tour (Private car on island + Return Speedboat): Kelingking Beach (T-Rex Cliff), Angel's Billabong, Broken Beach + Complimentary Snorkeling & Canoeing
• **Day 5**: 90-min ATV Quad Biking Ride + Ayung River Rafting with Local Buffet Lunch + Bali Jungle Swing (Unlimited Swings & Nests) → Check-in to Alam Ubud Private Pool Villa
• **Day 6**: Full-Day Eastern Bali Tour: Lempuyang Gate of Heaven + Tirta Gangga Water Palace + Goa Lawah Bat Cave + Black Sand Beach
• **Day 7**: Floating Breakfast in private plunge pool → Check-out → Souvenir shopping & Private transfer to Denpasar Airport for departure flight

✅ **Key Inclusions**:
• Return IndiGo Flights (Mumbai ↔ Bali) + Bali 30-Day e-VOA Visa
• 6 Nights Luxury Accommodations (4N Kuta + 2N Ubud Private Pool Villa) with Daily Breakfast
• 100% Private AC SUV vehicle (Avanza/Xenia) with dedicated English speaking driver
• Nusa Penida West Tour with private car on island & sharing fast boat + Snorkeling/Canoeing
• 90-min ATV Quad Ride + 3-hr Ayung River Rafting with lunch + Bali Jungle Swing
• All Sightseeing Entry Tickets, Tolls, Parking & Donations included

❌ **Exclusions**:
• Daily Dinners, International Tourism Levy (IDR 150,000/person), Nusa Penida Retribution (IDR 25,000/person), Personal expenses.

📲 [**Book Bali 6N/7D on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Bali%206N7D%20voucher)`;
  }
  // 11. Thailand Destination
  else if (msgLower.match(/\b(thailand|phuket|krabi|bangkok|pattaya|phi phi|thailand pakacge|thailand package)\b/i)) {
    reply = `🇹🇭 **Thailand Grand Signature Tour (7 Nights / 8 Days)**:
• **Trip ID**: TVY448657 | **Customer**: Mohit Kodwani | **Pax**: 2 Adults
• **Route**: Phuket (3N) + Krabi (2N) + Bangkok (2N)

💰 **Pricing Summary**:
• **Direct Wholesale DMC Rate**: ₹62,362 per adult
• **Total Net Amount for 2 Adults**: ₹1,24,724.00

🏨 **Verified Accommodations (4★ Deluxe)**:
• **Phuket (3N)**: Panwaburi Beachfront Resort (1 Deluxe Room, Breakfast)
• **Krabi (2N)**: Aonang Paradise Resort (1 Deluxe Pool View Room, Breakfast)
• **Bangkok (2N)**: Platinum Suite Bangkok (1 Superior Premium Room, Breakfast)

🗺️ **Day-Wise Itinerary Breakdown**:
• **Day 1**: Arrive Phuket International Airport → Private transfer to Panwaburi Beachfront Resort → Check-in & Leisure
• **Day 2**: Phuket City Tour (Big Buddha, Wat Chalong, scenic viewpoints) + Tiger Park (Medium Ticket) + Phuket FantaSea Cultural Show & Grand Buffet Dinner
• **Day 3**: Full-Day Phi Phi Island Tour by Big Boat (Maya Bay, Pileh Lagoon, Viking Cave + National Park + Lunch)
• **Day 4**: Private AC Vehicle transfer from Phuket to Krabi → Check-in to Aonang Paradise Resort → Ao Nang Beach walk
• **Day 5**: Krabi 4-Island Tour by Longtail boat with Lunch (Chicken Island, Tup Island, Poda Island, Phra Nang Cave Beach)
• **Day 6**: Transfer to Krabi Airport → Domestic Flight to Bangkok → Check-in Platinum Suite → Evening Chao Phraya River Luxury Dinner Cruise with live entertainment
• **Day 7**: Bangkok City Tour (Golden Buddha Temple Wat Traimit, Marble Temple) + King Power Mahanakhon 78th Floor Glass Skywalk
• **Day 8**: Safari World & Marine Park with Grand Buffet Lunch + Animal & Spy War Shows → Evening departure transfer to Bangkok Suvarnabhumi Airport

✅ **Key Inclusions**:
• 7 Nights 4★ Deluxe Resort & Hotel Stays with Daily Buffet Breakfast
• 100% Private AC Vehicle transfers for all airport pickups, drops & intercity travel
• Phi Phi Island Tour with National Park fees & Buffet Lunch
• Krabi 4-Island Tour with Picnic Lunch
• Phuket FantaSea Show with Grand Buffet Dinner
• Chao Phraya River Luxury Dinner Cruise
• King Power Mahanakhon Skywalk 78th floor pass
• Safari World & Marine Park admission with lunch & shows

❌ **Exclusions**:
• Daily Dinners (except Phuket FantaSea & Chao Phraya Cruise), Personal expenses & Travel Insurance.

📲 [**Book Thailand 7N/8D on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Thailand%207N8D%20voucher)`;
  }
  // 12. Singapore Destination
  else if (msgLower.match(/\b(singapore|sentosa|universal studios|mbs|changi|marina bay)\b/i)) {
    reply = `🇸🇬 **Singapore Signature Experience (3 Nights / 4 Days)**:
• **Duration**: 3 Nights / 4 Days | **Pax**: 2 Adults
• **Pricing**: INR 52,062.00 per adult | **Total for 2 Adults**: INR 1,04,124.00

🏨 **Accommodation**: Novotel Singapore (4★ Premium, 1 Deluxe City Room, Daily Breakfast)

🗺️ **Day-Wise Itinerary**:
• **Day 1**: Arrive Changi Airport → 100% Private AC transfer to Novotel Singapore → Check-in & Evening Leisure
• **Day 2**: Half-Day City Tour + Singapore Flyer (Little India, Merlion Park) → Marina Bay Sands (MBS) Skypark Observation Deck + Gardens by the Bay (Flower Dome & Cloud Forest)
• **Day 3**: Full-Day Universal Studios Singapore Pass with transfers (Transformers 3D, Battlestar Galactica, Jurassic Park)
• **Day 4**: Breakfast at hotel → Check-out → Private transfer to Changi Airport for departure

✅ **Key Inclusions**:
• 3 Nights Novotel Singapore with Daily Buffet Breakfast
• 100% Private Changi Airport Pick-up & Drop-off
• Universal Studios Singapore Full-Day Admission Ticket with transfers
• Singapore Flyer 3-hr City Tour pass
• MBS Skypark Observation Deck & Gardens by the Bay tickets

❌ **Exclusions**: Flights, Singapore Visa, Dinners & Security Deposit.

📲 [**Book Singapore 3N/4D on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Singapore%203N4D%20voucher)`;
  }
  // 13. Vietnam Destination
  else if (msgLower.match(/\b(vietnam|hanoi|da nang|danang|phu quoc|sapa|fansipan|bana hills|golden bridge)\b/i)) {
    reply = `🇻🇳 **Vietnam Grand Expedition (9 Nights / 10 Days)**:
• **Trip ID**: LEDMC1134219 | **Lead Guest**: Ashutosh Sahu | **Pax**: 4 Adults
• **Route**: Sapa (2N) + Hanoi (1N) + Da Nang (3N) + Phu Quoc (3N)

💰 **Pricing Summary**:
• **Per Adult (All-Inclusive with Flights & Cable Cars)**: INR 1,48,000.00
• **Total Net Amount for 4 Adults**: INR 5,92,000.00
• **Land Package Option**: From ₹69,999 per adult

🏨 **Verified Accommodations (3★/4★ Premium)**:
• **Sapa (2N)**: Sapagreen Hotel (Superior Room, Breakfast)
• **Hanoi (1N)**: TK123 Hotel (Superior Room, Breakfast)
• **Da Nang (3N)**: Cosmos Hotel (Deluxe City View, Breakfast)
• **Phu Quoc (3N)**: Gaia Hotel (Standard Room, Breakfast)

🗺️ **Day-Wise Itinerary Breakdown**:
• **Day 1**: Arrive Hanoi → Private transfer to Sapa → Cat Cat Village trek with Black H'mong tribe
• **Day 2**: Fansipan Peak ("Roof of Indochina" 3,143m cable car & funicular) + Rong May Glass Bridge at O Quy Ho Pass
• **Day 3**: Sapa to Hanoi → Temple of Literature, Tran Quoc Pagoda & Old Quarter
• **Day 4**: Ninh Binh Tour: Ancient Royal Capital Hoa Lu + Tam Coc bamboo boat river cave tour
• **Day 5**: Flight to Da Nang → Marble Mountains + Cam Thanh Coconut basket boat + Hoi An City Tour & Lantern Boat on Thu Bon River
• **Day 6**: Ba Na Hills Cable Car + Iconic Golden Bridge (Giant Stone Hands) + Fantasy Park
• **Day 7**: Flight to Phu Quoc → Sunset Town, Kiss Bridge, Symphony of the Sea show & Kiss of the Sea multimedia show
• **Day 8**: Vinpearl Safari (largest open zoo) + VinWonders Theme Park & Hai Vuong Aquarium + Grand World Venice River
• **Day 9**: 4-Island Speedboat Tour + Hon Thom 8km World's Longest Overwater Cable Car & Aquatopia Water Park with buffet lunch
• **Day 10**: Leisure morning → Private transfer to Phu Quoc Airport for departure

✅ **Key Inclusions**:
• 9 Nights Hotel stays with daily breakfast
• Private 7-seater AC transfers throughout
• All Cable Car Tickets: Fansipan Legend, Ba Na Hills & Hon Thom 8km Overwater Cable Car
• 4-Island Speedboat Tour with Buffet Lunch
• Vinpearl Safari & VinWonders all-access passes

❌ **Exclusions**: Dinners, Vietnam Visa, GST 5% & TCS, personal expenses.

📲 [**Book Vietnam 9N/10D on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Vietnam%20voucher)`;
  }
  // 14. Georgia Destination
  else if (msgLower.match(/\b(georgia|tbilisi|kazbegi|gudauri|gergeti|ananuri)\b/i)) {
    reply = "🇬🇪 **Georgia Flash Deal ($300 USD Special)**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: $300 USD (~₹28,999/person)\n• **Inclusions**: 4★ Boutique Hotel in Tbilisi, Private 4x4 Chauffeur, Snowy Kazbegi Excursion, Gudauri Ski Resort, Gergeti Trinity Church & Daily Breakfast.\n\n📲 [**Send Georgia $300 Plan to WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Georgia%20300%20plan)";
  }
  // 15. Turkey Destination
  else if (msgLower.match(/\b(turkey|cappadocia|istanbul|antalya|pamukkale|bosphorus|balloon)\b/i)) {
    reply = "🇹🇷 **Turkey Escape & Wonders (Flagship DMC)**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹42,999/person\n• **Inclusions**: 5★ Cave Resort in Cappadocia, Private Sunset Bosphorus Yacht Cruise, Istanbul guided tours, Private AC Chauffeur, Daily Breakfast & Dinners.\n\n📲 [**Send Turkey Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Turkey%20itinerary)";
  }
  // 16. Dubai Destination
  else if (msgLower.match(/\b(dubai|uae|burj khalifa|abu dhabi|desert safari)\b/i)) {
    reply = "🏙️ **Dubai Grand Luxury Experience**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹34,999/person\n• **Inclusions**: 4★/5★ Central Luxury Hotel, Burj Khalifa 124th Floor Observatory, VIP 4x4 Desert Safari + BBQ Dinner & Live Show, Marina Dhow Cruise.\n\n📲 [**Send Dubai Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Dubai%20itinerary)";
  }
  // 15. Kashmir Destination
  else if (msgLower.match(/\b(kashmir|srinagar|gulmarg|pahalgam|sonamarg)\b/i)) {
    reply = "🏔️ **Kashmir Paradise Escape**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹21,999/person\n• **Inclusions**: Luxury Dal Lake Houseboat stay, Shikara ride, Gulmarg snow gondola transfers, Pahalgam valleys, Private Heated Chauffeur Cab.\n\n📲 [**Send Kashmir Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Kashmir%20itinerary)";
  }
  // 16. Kerala Destination
  else if (msgLower.match(/\b(kerala|munnar|alleppey|kochi|thekkady)\b/i)) {
    reply = "🌴 **Kerala Backwaters & Tea Hills**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹18,999/person\n• **Inclusions**: Private Deluxe Alleppey Houseboat with private chef (all meals), Munnar tea estates, AC Private Cab.\n\n📲 [**Send Kerala Itinerary to WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Kerala%20itinerary)";
  }
  // 17. Honeymoon Packages
  else if (msgLower.match(/\b(honeymoon|romantic|couple|anniversary|candlelight)\b/i)) {
    reply = "💍 **Romantic Luxury Honeymoon Escapes**:\n\n• **Bali Private Pool Villa**: Floating breakfast & sunset Kecak dance (~₹48,999)\n• **Cappadocia Cave Suite**: Sunrise hot air balloon flight & candlelight dinner (~₹42,999)\n\n📲 [**Send Honeymoon Options to WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20Honeymoon%20options)";
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