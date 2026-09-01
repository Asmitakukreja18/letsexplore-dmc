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

  // Intelligent Context-Aware Conversational Fallback
  let reply = "";

  if (msgLower.match(/^(yes|yep|sure|ok|okay|ha|haan|send|please|plz|y|deal|agree|done)/i)) {
    reply = "✨ **Great!** Our destination manager is ready with your customized wholesale itinerary and private chauffeur quote.\n\n📲 [**Click here to chat directly on WhatsApp (+91 80075 86871)**](https://wa.me/918007586871?text=Hi%20Let's%20Explore%20DMC,%20please%20share%20the%20itinerary%20and%20quote!) or reply with your travel dates!";
  } else if (msgLower.match(/\b(where should i go|suggest|recommend|confused|kuch bhi|any place|best place|best destination|where to go|where can i go|ideas|trip idea|help me choose)\b/i)) {
    reply = "✨ **Top Trending Getaways Right Now**:\n\n1. 🇹🇷 **Turkey (Istanbul & Cappadocia)** — ₹42,999 (Cave suites & hot air balloons)\n2. 🇬🇪 **Georgia Special** — $300 USD (Snowy Kazbegi mountains & Tbilisi)\n3. 🏝️ **Bali & Nusa Penida** — ₹48,999 (Private pool villas & tropical beaches)\n4. 🏙️ **Dubai Luxury** — ₹34,999 (Desert safaris & Marina yachts)\n\nWhich vibe do you prefer: **Mountains, Tropical Beaches, or City Luxury**?";
  } else if (msgLower.match(/^(hi|hello|hey|hola|namaste|good morning|good evening|heloo|hy)\b/i)) {
    reply = "👋 **Hello! Welcome to Let's Explore DMC.**\n\nI am your AI Travel Concierge. Tell me your dream destination, travel dates, or budget, and I'll craft a bespoke itinerary for you!\n\nWhere would you like to travel next?";
  } else if (msgLower.match(/\b(honeymoon|romantic|couple|anniversary)\b/i)) {
    reply = "💍 **Romantic Luxury Escapes**: Our top couple packages are **Bali Private Pool Villas** (Ubud & Seminyak) and **Cappadocia Cave Suites** with sunrise hot air balloon champagne flights. Both include private airport transfers & candlelight dinners. Would you like a honeymoon quote?";
  } else if (msgLower.match(/\b(family|kids|children|parents)\b/i)) {
    reply = "👨‍👩‍👧‍👦 **Family-Friendly Getaways**: **Dubai** (Theme parks, desert camp & Miracle Garden) and **Singapore & Malaysia** are our highest-rated family packages with private vans & 4★/5★ central stays. Shall I share details?";
  } else if (msgLower.match(/\b(snow|mountain|adventure|trek|ski)\b/i)) {
    reply = "🏔️ **Snow & Mountain Adventures**: **Georgia 5D4N ($300 USD Special)** covering Gudauri & Kazbegi snow resorts, or **Swiss Alps / Kashmir**! Includes private 4x4 transfers. Would you like the snow departure calendar?";
  } else if (msgLower.match(/\b(china|beijing|shanghai|guangzhou)\b/i)) {
    reply = "🏯 **China Luxury DMC Packages**: We curate private guided tours covering the Great Wall of China, Forbidden City, Shanghai skyline cruises, and Zhangjiajie Avatar mountains.\n\n* **Duration**: 7N/8D or 10N/11D\n* **Inclusions**: 4★/5★ Hotels, Bullet Train passes, English Guide & Visa assistance.\n\nWould you like me to send the complete day-by-day plan to your WhatsApp?";
  } else if (msgLower.match(/\b(turkey|cappadocia|istanbul|antalya)\b/i)) {
    reply = "🇹🇷 **Turkey Ground Packages**: Direct ground ops by Let's Explore Istanbul.\n\n* **Starts from**: ₹42,999/person (4N/5D)\n* **Highlights**: Hot Air Balloon flights in Cappadocia, Bosphorus Yacht Cruise, Cave Suites.\n\nShall I share the seasonal departure calendar on WhatsApp?";
  } else if (msgLower.match(/\b(georgia|tbilisi|kazbegi)\b/i)) {
    reply = "🇬🇪 **Georgia Flash Deal ($300 USD Special)**: 5D/4N covering Tbilisi, Kazbegi Mountains, Gudauri snow resort, and Ananuri Fortress. Includes 4★ hotel & private 4x4 transfers!";
  } else if (msgLower.match(/\b(bali|indonesia|ubud|nusa penida)\b/i)) {
    reply = "🏝️ **Bali Island DMC Package**: Managed directly by our Denpasar Bali office.\n\n* **Highlights**: Private Pool Villas, Nusa Penida speedboat tour, Mt. Batur sunrise jeep safari.\n* **Starting at**: ₹48,999/person.";
  } else if (msgLower.match(/\b(dubai|uae|burj khalifa|abu dhabi)\b/i)) {
    reply = "🏙️ **Dubai Grand Package**: 5D/4N covering Burj Khalifa 124th floor, Desert Safari with BBQ dinner, Marina Dhow Cruise, and Miracle Garden. Starts from ₹34,999/person.";
  } else if (msgLower.match(/\b(price|cost|rate|cheap|budget|quote|how much)\b/i)) {
    reply = "💎 **100% Direct DMC Wholesale Pricing**: Because we manage ground operations directly with our own hotel allotments and vehicle fleets, you save 20–30% with zero middleman markup. Which destination are you exploring?";
  } else if (msgLower.match(/\b(office address|where is your office|where are you located|branch address|head office|contact details|phone number|contact no|amravati office|mumbai office)\b/i)) {
    reply = "📍 **Our Global DMC Network**:\n\n* **India HQ**: Amravati, Mumbai, Jaipur, Nagpur\n* **International**: Bali (Denpasar) & Turkey (Taksim, Istanbul)\n* **Official Hotline**: +91 80075 86871";
  } else {
    reply = `✨ **Let's Explore DMC Concierge**: For **${message.trim()}**, we provide tailor-made private tours, 4★/5★ luxury stays, and 24/7 dedicated on-ground support.\n\nWould you like us to customize this for your preferred dates and group size?`;
  }

  return res.status(200).json({ reply });
}
