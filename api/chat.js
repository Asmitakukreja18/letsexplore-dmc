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
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: "You are Atlas, the elite AI Travel Concierge for Let's Explore DMC (Destination Management Company). Let's Explore DMC operates direct ground offices in Amravati HQ, Mumbai, Jaipur, Nagpur, Bali (Indonesia), and Istanbul (Turkey). Provide helpful, ultra-luxury, high-converting travel recommendations. Keep answers crisp (under 3 sentences) with bullet points and invite them to connect on WhatsApp at +91 80075 86871." }]
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
  } else if (msgLower.match(/\b(china|beijing|shanghai|guangzhou)\b/i)) {
    reply = "🏯 **China Luxury DMC Packages**: We curate private guided tours covering the Great Wall of China, Forbidden City, Shanghai skyline cruises, and Zhangjiajie Avatar mountains.\n\n* **Duration**: 7N/8D or 10N/11D\n* **Inclusions**: 4★/5★ Hotels, Bullet Train passes, English Guide & Visa assistance.\n\nWould you like me to send the complete day-by-day plan to your WhatsApp?";
  } else if (msgLower.match(/\b(turkey|cappadocia|istanbul|antalya)\b/i)) {
    reply = "🇹🇷 **Turkey Ground Packages**: Direct ground ops by Let's Explore Istanbul.\n\n* **Starts from**: ₹42,999/person (4N/5D)\n* **Highlights**: Hot Air Balloon flights in Cappadocia, Bosphorus Yacht Cruise, Cave Suites.\n\nShall I share the seasonal departure calendar on WhatsApp?";
  } else if (msgLower.match(/\b(georgia|tbilisi|kazbegi)\b/i)) {
    reply = "🇬🇪 **Georgia Flash Deal ($300 USD Special)**: 5D/4N covering Tbilisi, Kazbegi Mountains, Gudauri snow resort, and Ananuri Fortress. Includes 4★ hotel & private 4x4 transfers!";
  } else if (msgLower.match(/\b(bali|indonesia|ubud|nusa penida)\b/i)) {
    reply = "🏝️ **Bali Island DMC Package**: Managed directly by our Denpasar Bali office.\n\n* **Highlights**: Private Pool Villas, Nusa Penida speedboat tour, Mt. Batur sunrise jeep safari.\n* **Starting at**: ₹48,999/person.";
  } else if (msgLower.match(/\b(price|cost|rate|cheap|budget|quote|how much)\b/i)) {
    reply = "💎 **100% Direct DMC Wholesale Pricing**: Because we manage ground operations directly with our own hotel allotments and vehicle fleets, you save 20–30% with zero middleman markup. Which destination are you exploring?";
  } else if (msgLower.match(/\b(office|branches|location|where|address|contact|phone|amravati|mumbai|nagpur|jaipur)\b/i)) {
    reply = "📍 **Our Global DMC Network**:\n\n* **India HQ**: Amravati, Mumbai, Jaipur, Nagpur\n* **International**: Bali (Denpasar) & Turkey (Taksim, Istanbul)\n* **Official Hotline**: +91 80075 86871";
  } else {
    reply = `✨ **Let's Explore DMC Concierge**: For **${message.trim()}**, we provide tailor-made private tours, 4★/5★ luxury stays, and 24/7 dedicated on-ground support.\n\nWould you like us to customize this for your preferred dates and group size?`;
  }

  return res.status(200).json({ reply });
}
