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

  // Intelligent Context-Aware Conversational Fallback with Custom WhatsApp Links
  let reply = "";

  if (msgLower.match(/^(yes|yep|sure|ok|okay|ha|haan|send|please|plz|y|deal|agree|done)/i)) {
    reply = "✨ **Great!** Our destination manager is ready with your customized wholesale itinerary and private chauffeur quote.\n\n📲 [**Click here to chat on WhatsApp (+91 80075 86871)**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%20please%20share%20the%20customized%20itinerary%20and%20best%20available%20rates!) or reply with your travel dates!";
  } else if (msgLower.match(/\b(i cant click|cant click|link not working|not clickable|how to open|phone|whatsapp number|call you)\b/i)) {
    reply = "📲 **Direct WhatsApp & Phone Support**:\n\n* **Direct Number**: +91 80075 86871\n* **Direct WhatsApp**: https://wa.me/918007586871\n* **Email**: letsexploredmc@gmail.com\n\n[**Open WhatsApp Chat Now**](https://wa.me/918007586871)";
  } else if (msgLower.match(/\b(idk|i dont know|dont know|not sure|confused|no idea|kuch bhi|suggest|recommend|any place|best place|best destination|where should i go|where to go|where can i go|ideas|trip idea|help me choose)\b/i)) {
    reply = "✨ **No worries! Here are our top handpicked recommendations**:\n\n1. 🇬🇪 **Georgia Special ($300 USD)** — Snowy Kazbegi & Old Tbilisi [**Get Georgia Details**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%20please%20send%20the%20Georgia%20$300%20deal!)\n2. 🇹🇷 **Turkey (Istanbul & Cappadocia)** — ₹42,999 (Cave suites & sunrise balloons) [**Get Turkey Details**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%20please%20send%20the%20Turkey%20Escape%20deal!)\n3. 🏝️ **Bali & Nusa Penida** — ₹48,999 (Private pool villas & beaches) [**Get Bali Details**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%20please%20send%20the%20Bali%20deal!)\n4. 🇹🇭 **Thailand (Phuket & Krabi)** — ₹28,999 (Island cruises)\n5. 🏙️ **Dubai Luxury** — ₹34,999 (Desert safaris & Burj Khalifa)\n\nWhich vibe do you prefer: **Mountains, Beaches, or City Luxury**?";
  } else if (msgLower.match(/^(hi|hello|hey|hola|namaste|good morning|good evening|heloo|hy)\b/i)) {
    reply = "👋 **Hello! Welcome to Let's Explore DMC.**\n\nI am your AI Travel Concierge. Tell me your dream destination, travel dates, or budget, and I'll craft a bespoke itinerary for you!\n\nWhere would you like to travel next?";
  } else if (msgLower.match(/\b(georgia|tbilisi|kazbegi|gudauri|gergeti)\b/i)) {
    reply = "🇬🇪 **Georgia Flash Deal ($300 USD Special)**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: $300 USD (~₹25,999/person)\n• **Inclusions**: 4★ Boutique Hotel in Tbilisi, Private 4x4 Chauffeur, Snowy Kazbegi Excursion, Gudauri Ski Pass, Gergeti Trinity Church & Daily Buffet Breakfast.\n\n📲 [**Send Georgia $300 Itinerary to my WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Georgia%20Flash%20Deal%20($300%20USD%20Special)*%20(5D/4N).%0A%0A•%20Includes:%204★%20Hotel,%20Kazbegi%204x4,%20Gudauri%20Resort%20%26%20Private%20Transfers%0A•%20Rate:%20$300%20USD%20per%20person%0A%0APlease%20share%20available%20dates%20and%20day-by-day%20itinerary!)";
  } else if (msgLower.match(/\b(turkey|cappadocia|istanbul|antalya|pamukkale)\b/i)) {
    reply = "🇹🇷 **Turkey Escape & Wonders (Flagship DMC)**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹42,999/person\n• **Inclusions**: 5★ Cave Resort in Cappadocia, Private Sunset Bosphorus Yacht Cruise, Istanbul guided tours, Private AC Chauffeur, Daily Breakfast & Dinners.\n\n📲 [**Send Turkey Itinerary to my WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Turkey%20Escape%20%26%20Wonders*%20(5D/4N%20₹42,999).%0A%0A•%20Includes:%205★%20Cave%20Resort,%20Cappadocia%20Balloons,%20Bosphorus%20Yacht%20%26%20Pvt%20Chauffeur%0A%0APlease%20share%20the%20detailed%20day-by-day%20proposal!)";
  } else if (msgLower.match(/\b(bali|indonesia|ubud|nusa penida|kintamani)\b/i)) {
    reply = "🏝️ **Bali Island Tropical Luxury & Pool Villa**:\n\n• **Duration**: 6 Days / 5 Nights\n• **Price**: ₹48,999/person\n• **Inclusions**: 5★ Private Pool Villa in Ubud, Floating Breakfast, Nusa Penida West Island Speedboat Cruise, Mt. Batur Sunrise Safari, 24/7 Dedicated Chauffeur.\n\n📲 [**Send Bali Itinerary to my WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Bali%20Tropical%20Luxury%20%26%20Pool%20Villa*%20(6D/5N%20₹48,999).%0A%0A•%20Includes:%205★%20Pool%20Villa%20in%20Ubud,%20Floating%20Breakfast,%20Nusa%20Penida%20Cruise%0A%0APlease%20share%20the%20detailed%20plan!)";
  } else if (msgLower.match(/\b(dubai|uae|burj khalifa|abu dhabi)\b/i)) {
    reply = "🏙️ **Dubai Grand Luxury Experience**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹34,999/person\n• **Inclusions**: 4★/5★ Central Luxury Hotel, Burj Khalifa 124th Floor Observatory, VIP 4x4 Desert Safari + BBQ Dinner & Live Show, Marina Dhow Cruise.\n\n📲 [**Send Dubai Itinerary to my WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Dubai%20Grand%20Luxury%20Experience*%20(5D/4N%20₹34,999).%0A%0A•%20Includes:%20Burj%20Khalifa,%20VIP%20Desert%20Safari,%20Marina%20Cruise%0A%0APlease%20share%20the%20day-by-day%20plan!)";
  } else if (msgLower.match(/\b(thailand|phuket|krabi|bangkok|pattaya|phi phi)\b/i)) {
    reply = "🇹🇭 **Thailand Island Hopper (Phuket & Krabi)**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹28,999/person\n• **Inclusions**: 4★ Beachfront Resort, 4-Island Speedboat Tour with snorkeling, Private AC Airport & Island Transfers, Daily Buffet Breakfast.\n\n📲 [**Send Thailand Itinerary to my WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Thailand%20Island%20Hopper*%20(5D/4N%20₹28,999).%0A%0A•%20Includes:%204★%20Beach%20Resort,%204-Island%20Speedboat,%20Pvt%20Transfers%0A%0APlease%20share%20the%20detailed%20plan!)";
  } else if (msgLower.match(/\b(vietnam|hanoi|da nang|ha long bay|halong)\b/i)) {
    reply = "🇻🇳 **Vietnam Scenic Wonder & Halong Bay**:\n\n• **Duration**: 7 Days / 6 Nights\n• **Price**: ₹49,999/person\n• **Inclusions**: 5★ Halong Bay Overnight Luxury Cruise with all meals, Domestic Flights, Da Nang Golden Bridge, Private Guided Tours.\n\n📲 [**Send Vietnam Itinerary to my WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Vietnam%20Scenic%20Wonder%20%26%20Halong%20Bay*%20(7D/6N%20₹49,999).%0A%0A•%20Includes:%205★%20Halong%20Cruise,%20Domestic%20Flights,%20Da%20Nang%20Bridge%0A%0APlease%20share%20the%20detailed%20plan!)";
  } else if (msgLower.match(/\b(kashmir|srinagar|gulmarg|pahalgam)\b/i)) {
    reply = "🏔️ **Kashmir Paradise Escape**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹21,999/person\n• **Inclusions**: Luxury Dal Lake Houseboat stay, Shikara ride, Gulmarg snow gondola transfers, Pahalgam valleys, Private Heated Chauffeur Cab.\n\n📲 [**Send Kashmir Itinerary to my WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Kashmir%20Paradise%20Escape*%20(5D/4N%20₹21,999).%0A%0A•%20Includes:%20Luxury%20Houseboat,%20Gulmarg%20Gondola%20Snow,%20Pahalgam%20Valleys%0A%0APlease%20share%20the%20detailed%20plan!)";
  } else if (msgLower.match(/\b(kerala|munnar|alleppey|kochi)\b/i)) {
    reply = "🌴 **Kerala Backwaters & Tea Hills**:\n\n• **Duration**: 5 Days / 4 Nights\n• **Price**: ₹18,999/person\n• **Inclusions**: Private Deluxe Alleppey Houseboat with private chef (all meals), Munnar tea estates, AC Private Cab.\n\n📲 [**Send Kerala Itinerary to my WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20interested%20in%20the%20*Kerala%20Backwaters%20%26%20Tea%20Hills*%20(5D/4N%20₹18,999).%0A%0A•%20Includes:%20Private%20Deluxe%20Houseboat%20with%20Chef,%20Munnar%20Hills%0A%0APlease%20share%20the%20detailed%20plan!)";
  } else if (msgLower.match(/\b(honeymoon|romantic|couple|anniversary)\b/i)) {
    reply = "💍 **Romantic Luxury Honeymoon Escapes**:\n\n• **Bali Private Pool Villa**: Floating breakfast & sunset Kecak dance (~₹48,999)\n• **Cappadocia Cave Suite**: Sunrise hot air balloon flight & candlelight dinner (~₹42,999)\n\n📲 [**Send Honeymoon Options to my WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%0A%0AI%20am%20looking%20for%20a%20*Romantic%20Honeymoon%20Package*%20(Bali%20Pool%20Villas%20or%20Cappadocia%20Cave%20Suites).%0A%0APlease%20share%20quotes%20with%20candlelight%20dinner%20and%20private%20transfers!)";
  } else if (msgLower.match(/\b(china|beijing|shanghai|guangzhou)\b/i)) {
    reply = "🏯 **China Luxury DMC Packages**: Private guided tours covering the Great Wall of China, Forbidden City, Shanghai skyline cruises, and Zhangjiajie Avatar mountains.\n\n📲 [**Send China Itinerary to my WhatsApp**](https://wa.me/918007586871?text=Hello%20Let's%20Explore%20DMC,%20please%20send%20the%20China%20Luxury%20package%20details!)";
  } else if (msgLower.match(/\b(price|cost|rate|cheap|budget|quote|how much)\b/i)) {
    reply = "💎 **100% Direct DMC Wholesale Pricing**: Because we manage ground operations directly with our own hotel allotments and vehicle fleets, you save 20–30% with zero middleman markup.\n\nTell me which destination you'd like: **Georgia ($300), Turkey, Bali, Dubai, Thailand, or Kashmir**?";
  } else if (msgLower.match(/\b(office address|where is your office|where are you located|branch address|head office|contact details|phone number|contact no|amravati office|mumbai office)\b/i)) {
    reply = "📍 **Our Global DMC Network**:\n\n* **India HQ**: Amravati (Shiv Krupa Residence, Opp New Cotton Market), Mumbai, Jaipur, Nagpur\n* **International**: Bali (Denpasar) & Turkey (Taksim, Istanbul)\n* **Official Hotline**: +91 80075 86871\n\n[**Open WhatsApp Chat with Desk**](https://wa.me/918007586871)";
  } else {
    reply = "✨ **Let's Explore DMC Concierge**: I'd love to help plan your getaway! We specialize in direct ground packages across **Georgia ($300), Turkey (₹42K), Bali (₹48K), Dubai (₹34K), Thailand (₹28K), Vietnam, Kashmir, and Kerala**.\n\nTell me your preferred destination or dates!";
  }

  return res.status(200).json({ reply });
}
}
