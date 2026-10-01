import json

with open('packages_knowledge.json', 'r', encoding='utf-8') as f:
    pkg_data = json.load(f)

with open('master_knowledge_prompt.txt', 'r', encoding='utf-8') as f:
    voucher_prompt = f.read()

# Build comprehensive chat_engine.js
engine_js = f"""/**
 * Let's Explore DMC — AI Chat Engine & Persistent Memory System
 * Features:
 *  - 22 Verified Official Vouchers (Dual INR & USD rates)
 *  - Conversational NLP (Dinner, Nightlife, Low Budget, 4-5 Days, Greetings)
 *  - Zero robotic prefix (No 'Atlas AI Concierge:')
 *  - Multi-Turn Memory Tracking across 30 turns
 */

const PACKAGES_KNOWLEDGE = {json.dumps(pkg_data, indent=2)};

const MASTER_SYSTEM_PROMPT = `You are an elite Luxury Travel Concierge & Architect at Let's Explore DMC (Amravati, Maharashtra). Direct ground DMC for Thailand, Bali, Malaysia, Singapore, Vietnam, Georgia, Turkey, Dubai, Kashmir, Kerala, Sri Lanka, Hong Kong, China (Canton Fair), and Ujjain.

CRITICAL RULES:
1. ZERO ROBOTIC PREFIX:
   - DO NOT prefix your answers with "🤖 Atlas AI Concierge:" or "Atlas AI Concierge:".
   - Start directly with your warm, polite, and helpful answer.
2. JITNA PUCHA UTNA HI EXACT ANSWER DO (ANSWER ONLY WHAT IS SPECIFICALLY ASKED):
   - If user asks for "price", "amount", "cost", "rates": Answer ONLY the exact price breakdown (INR primary, USD equivalent, total group amount, land package option). DO NOT dump the full itinerary, flights, or policies unless asked!
   - If user asks for "inclusions and exclusions": Provide ONLY the clear itemized Inclusions and Exclusions.
   - If user asks for "hotels": Provide ONLY the hotels, room categories, meal plans, and nights.
   - If user asks for "itinerary" or "sightseeing" or "places": Provide ONLY the day-wise itinerary breakdown.
   - If user asks for "flights": Provide ONLY the flight schedule.
   - If user asks for recommendations (e.g. low budget, 4-5 days, dinner night, nightlife): Suggest top matching curated options with prices and highlights.
   - ONLY when user asks for "full package", "poora details", "complete voucher", or "overview" should you present the comprehensive multi-section breakdown.
3. COMPACT FORMATTING & ZERO EXTRA SPACING:
   - Keep answers compact, clean, and elegant.
   - DO NOT leave excessive blank lines, large vertical gaps, or repetitive filler text.
   - Use clean, tight bullet points.

CRITICAL PERSISTENT MEMORY & CONTINUITY (DO NOT LOSE MEMORY):
- You MUST maintain strict continuity across the ENTIRE conversation history (up to 30 turns).
- If a destination was discussed in ANY previous message (e.g. Malaysia with Bali, Thailand, Bali, Singapore, Vietnam, Dubai, Georgia, Turkey, Kashmir, Kerala, Sri Lanka, Hong Kong, Canton Fair, Ujjain) and the user asks follow-up questions:
  * "pricing?" / "price btao" / "kitna hoga" / "cost"
  * "places we will visit?" / "places to see" / "sightseeing" / "kya dekhenge"
  * "hotels?" / "hotel kon sa hai" / "resort"
  * "inclusions exclusions" / "kya include hai"
  * "flight schedule" / "airline"
  * "child policy" / "cancellation"
  YOU ALREADY KNOW THE DESTINATION! NEVER ask "Which package are you interested in?" or "Please specify your destination." ALWAYS immediately answer for the ACTIVE destination currently in context!

CRITICAL CURRENCY & RATES DISPLAY:
- Always show INR prominently as the primary rate, along with USD equivalent alongside:
  e.g. "INR 62,362 (~$745 USD) per adult".
- For foreign promotional deals (like Georgia $300): show "$300 USD (~₹28,999 INR)".

CRITICAL LANGUAGE RULE (STRICT):
- If the user asks in English, reply 100% in English only! Never use Devanagari Hindi.
- If the user asks in Hindi (in Devanagari script), reply in Hindi.
- If the user asks in Hinglish (Roman script Hindi, e.g. "dinner nightt ho my budget is low and for 4-5 days" or "price kitna hai"), reply in clear, friendly Hinglish / Latin script. NEVER use Devanagari Hindi.

ABOUT LET'S EXPLORE DMC:
- Direct Ground DMC with official ground teams & offices in:
  • India: Amravati Global HQ (Shiv Krupa Residence, Opp New Cotton Market), Mumbai, Jaipur, Nagpur
  • International: Bali (Denpasar) & Turkey (Taksim, Istanbul)
- Official WhatsApp / Hotline: +91 80075 86871 | Email: Info@letsexploredmc.com
- Bank Details: YES BANK LIMITED | Account No: 108163400004886 | IFSC: YESB0001081 | Account Type: LETS EXPLORE DMC

============================================================
{voucher_prompt}
============================================================`;

function detectDestination(text, currentActive = null) {{
  if (!text) return currentActive;
  const t = text.toLowerCase();
  
  if (t.includes('malaysia') && t.includes('bali')) return 'malaysia-bali-combo';
  if (t.includes('canton') || (t.includes('china') && (t.includes('fair') || t.includes('guangzhou') || t.includes('business')))) return 'canton-fair-china-6n7d';
  if (t.includes('hong kong') || t.includes('macau')) return 'hong-kong-grand-6n7d';
  if (t.includes('sri lanka') || t.includes('colombo') || t.includes('kandy') || t.includes('bentota') || t.includes('nuwara eliya')) return 'sri-lanka-wonders-4n5d';
  if (t.includes('ujjain') || t.includes('omkareshwar') || t.includes('mahakal') || t.includes('indore') || t.includes('jyotirlinga')) return 'ujjain-omkareshwar-4n5d';
  if (t.includes('kashmir') || t.includes('gulmarg') || t.includes('dal lake') || t.includes('pahalgam') || t.includes('shikara')) return 'kashmir-paradise-21k';
  
  if (t.includes('kerala') || t.includes('munnar') || t.includes('alleppey') || t.includes('thekkady') || t.includes('kovalam')) {{
    if (t.includes('darshan') || t.includes('honeymoon') || t.includes('luxury') || t.includes('marari')) return 'kerala-darshan-luxury-6n7d';
    return 'kerala-meghani-6n7d';
  }}
  
  if (t.includes('singapore') || t.includes('sentosa') || t.includes('universal studios') || t.includes('mbs') || t.includes('marina bay')) {{
    if (t.includes('6n') || t.includes('7d') || t.includes('grand') || t.includes('chhabra') || t.includes('leisure')) return 'singapore-grand-6n7d';
    if (t.includes('4n') || t.includes('5d') || t.includes('family') || t.includes('night safari')) return 'singapore-family-4n5d';
    return 'singapore-signature-3n4d';
  }}
  
  if (t.includes('vietnam') || t.includes('da nang') || t.includes('phu quoc') || t.includes('sapa') || t.includes('hanoi') || t.includes('fansipan') || t.includes('ba na hills')) return 'vietnam-grand-expedition';
  
  if (t.includes('dubai') || t.includes('burj khalifa') || t.includes('abu dhabi') || t.includes('uae')) {{
    if (t.includes('abu dhabi') || t.includes('5n') || t.includes('6d') || t.includes('bajaj') || t.includes('museum of the future')) return 'dubai-luxury-grand-5n6d';
    if (t.includes('royal') || t.includes('extended') || t.includes('atlantis') || t.includes('palm jumeirah') || t.includes('7d')) return 'dubai-extended-6n7d';
    return 'dubai-super-saver-4n5d';
  }}
  
  if (t.includes('thailand') || t.includes('phuket') || t.includes('krabi') || t.includes('bangkok') || t.includes('phi phi')) {{
    if (t.includes('5n') || t.includes('6d') || t.includes('luxury') || t.includes('rathi') || t.includes('westin')) return 'thailand-express-5n6d';
    return 'thailand-grand-signature';
  }}
  
  if (t.includes('bali') || t.includes('ubud') || t.includes('nusa penida') || t.includes('kuta') || t.includes('tanah lot')) {{
    if (t.includes('budget') || t.includes('leisure') || t.includes('grand barong')) return 'bali-leisure-6n7d';
    return 'bali-indonesia-signature';
  }}
  
  if (t.includes('malaysia') || t.includes('genting') || t.includes('kuala lumpur') || t.includes('batu caves')) return 'malaysia-express-4n5d';
  if (t.includes('georgia') || t.includes('tbilisi') || t.includes('kazbegi') || t.includes('gudauri') || t.includes('300')) return 'georgia-magic-300';
  if (t.includes('turkey') || t.includes('cappadocia') || t.includes('istanbul') || t.includes('bosphorus')) return 'turkey-escape-42k';
  
  return currentActive;
}}

function resolveActiveDestination(message, history, explicitActive) {{
  // 1. Check current message
  const inMsg = detectDestination(message);
  if (inMsg) return inMsg;

  // 2. Check explicitActive passed from client
  if (explicitActive && PACKAGES_KNOWLEDGE[explicitActive]) return explicitActive;

  // 3. Scan history backwards
  if (Array.isArray(history) && history.length > 0) {{
    for (let i = history.length - 1; i >= 0; i--) {{
      const h = history[i];
      const text = typeof h === 'string' ? h : (h.text || (h.parts && h.parts[0]?.text) || h.message || '');
      const found = detectDestination(text);
      if (found) return found;
    }}
  }}

  return null;
}}

function getPackageSummary(pkg) {{
  return `✨ **${{pkg.name}} (${{pkg.duration}})**:
• **Trip ID**: ${{pkg.trip_id}} | **Lead Guest**: ${{pkg.lead_guest}} | **Pax**: ${{pkg.pax}}
• **Route**: ${{pkg.destination}}

💰 **Pricing**:
• **Per Adult Rate**: INR ${{pkg.price_inr.toLocaleString('en-IN')}} (~$${{pkg.price_usd}} USD)
• **Total Net Group Amount**: INR ${{pkg.total_inr.toLocaleString('en-IN')}}
• **Land Package Option**: From INR ${{pkg.land_inr.toLocaleString('en-IN')}} (~$${{Math.round(pkg.land_inr / 84)}} USD)

🏨 **Accommodations**:
${{pkg.hotels}}

🗺️ **Sightseeing Highlights**:
${{pkg.highlights}}

✅ **Inclusions**:
${{pkg.inclusions}}

❌ **Exclusions**:
${{pkg.exclusions}}

📲 [**Book ${{pkg.name}} on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20${{encodeURIComponent(pkg.name)}}%20voucher)`;
}}

function generateSmartReply(message, history = [], activeDestination = null) {{
  const msgLower = (message || '').toLowerCase().trim();
  
  // Resolve active destination with memory preservation
  const resolvedDest = resolveActiveDestination(message, history, activeDestination);
  const currentPkg = resolvedDest ? PACKAGES_KNOWLEDGE[resolvedDest] : null;

  // 1. GREETING HANDLER (helo, hello, hi, hey, hy, hola, namaste)
  if (msgLower.match(/^(hi|hello|helo|hey|hy|hola|namaste|good morning|good evening|yo)\\b/i) && msgLower.split(/\\s+/).length <= 4) {{
    return {{
      activeDestination: resolvedDest,
      reply: `Hey there! 👋 Welcome to Let's Explore DMC!

Tell me where you want to travel or what kind of trip you have in mind (e.g. *dinner cruise & nightlife*, *4-5 days low budget*, *honeymoon pool villa*, or any country like *Thailand, Bali, Dubai, Georgia $300, Kashmir, Sri Lanka*), and I'll share the verified wholesale proposal for you!`
    }};
  }}

  // 2. CONVERSATIONAL INTENT: DINNER / NIGHTLIFE / 4-5 DAYS / LOW BUDGET
  const hasDinnerOrNight = /\\b(dinner|night|nightt|nightlife|party|club|clubs|evening|food)\\b/i.test(msgLower);
  const hasLowBudget = /\\b(low budget|budget is low|budget kam|kam budget|sasta|cheap|affordable|budget tight|low price|lowest)\\b/i.test(msgLower);
  const hasShortDuration = /\\b(4[\\s-]*5\\s*days?|4\\s*days?|5\\s*days?|45\\s*days?|short trip|weekend)\\b/i.test(msgLower);

  if ((hasDinnerOrNight && (hasLowBudget || hasShortDuration)) || (hasLowBudget && hasShortDuration) || (hasDinnerOrNight && hasLowBudget)) {{
    return {{
      activeDestination: 'dubai-super-saver-4n5d',
      reply: `✨ **Top 4–5 Day Low-Budget Packages with Special Dinners & Night Experiences**:

1. 🇦🇪 **Dubai Highlights & Desert Dunes (4 Nights / 5 Days)**:
• **Price**: INR 42,598 (~$507 USD) per adult | Land Package from INR 29,999 (~$357 USD)
• **Dinner & Night Highlights**:
  - **Marina Dhow Luxury Cruise** with International Buffet Dinner & Live Music under glowing skyscrapers
  - **4x4 Desert Safari** with Dune Bashing, Belly Dance & Tanoura show + Grand BBQ Dinner

2. 🇬🇪 **Georgia Flash Deal (4 Nights / 5 Days)** — *Lowest International Deal!*:
• **Price**: $300 USD (~₹28,999 INR) per adult
• **Dinner & Night Highlights**:
  - Historic Old Tbilisi night walk along the illuminated Bridge of Peace
  - Traditional Georgian wine cellar tasting & authentic local dining

3. 🌴 **Sri Lanka Ramayana & Hill Country (4 Nights / 5 Days)**:
• **Price**: INR 23,064 (~$275 USD) per adult
• **Dinner Highlights**: Includes **MAP Meal Plan (Daily Buffet Breakfast + Daily 4★ Hotel Dinners included!)**

4. 🏔️ **Kashmir Heaven on Earth (4 Nights / 5 Days)**:
• **Price**: INR 21,999 (~$265 USD) per adult
• **Dinner Highlights**: Includes **MAP Meal Plan (Daily Breakfast + Daily Chef-prepared Dinners on Dal Lake Houseboat)** + 1-Hour Sunset Shikara ride

5. 🇹🇭 **Thailand Island Hopper (4 Nights / 5 Days)**:
• **Price**: Land package from ₹28,999 (~$345 USD) per adult
• **Dinner & Nightlife**: Bangla Road nightlife, Patong Beach clubs & seaside sunset dining

Which one fits your mood best: **Dubai Marina Dinner Cruise, snowy Georgia ($300), or Kashmir houseboat dinners**?`
    }};
  }}

  // 3. Check for numeric budget inputs (e.g. 10k, 25000, 50k, 1 lakh, $300)
  const numMatch = msgLower.match(/\\b(\\d{{1,3}}(?:,\\d{{3}})*|\\d+)\\s*(k|lakh|lac|l|thousand|rs|inr|usd|\\$)?\\b/i);
  let parsedBudget = 0;
  if (numMatch && !msgLower.match(/\\b(day|days|night|nights|pax|people|person|adult|adults|child|kids)\\b/i)) {{
    let rawNum = parseFloat(numMatch[1].replace(/,/g, ''));
    let unit = (numMatch[2] || '').toLowerCase();
    if (unit === 'k' || unit === 'thousand') rawNum *= 1000;
    else if (unit === 'l' || unit === 'lakh' || unit === 'lac') rawNum *= 100000;
    else if (unit === 'usd' || unit === '$') rawNum *= 84;
    if (rawNum >= 1000) {{
      parsedBudget = rawNum;
    }}
  }}

  if (parsedBudget > 0) {{
    if (parsedBudget < 25000) {{
      return {{
        activeDestination: 'kashmir-paradise-21k',
        reply: `💡 **Best Options for your ~₹${{Math.round(parsedBudget).toLocaleString('en-IN')}} Budget**:
• 🏔️ **Kashmir Heaven on Earth (4N/5D)**: INR 21,999 (~$265 USD) per adult (Dal Lake Houseboat with Breakfast & Dinners)
• 🌴 **Sri Lanka Ramayana & Hill Country (4N/5D)**: INR 23,064 (~$275 USD) per adult (with Breakfast & Dinners)
• 🛕 **Ujjain Mahakal & Omkareshwar (4N/5D)**: INR 27,708 (~$330 USD) per adult
• 🇬🇪 **Georgia Flash Deal (4N/5D)**: $300 USD (~₹28,999 INR) (Tbilisi & Snowy Kazbegi)

Which one would you like full details for?`
      }};
    }} else if (parsedBudget <= 45000) {{
      return {{
        activeDestination: 'dubai-super-saver-4n5d',
        reply: `💎 **Best Packages for ~₹${{Math.round(parsedBudget).toLocaleString('en-IN')}} Budget**:
• 🌴 **Kerala God's Own Country (6N/7D)**: INR 24,750 (~$295 USD) per adult
• 🇬🇪 **Georgia Flash Deal (4N/5D)**: $300 USD (~₹28,999 INR)
• 🇲🇾 **Malaysia City & Highlands (4N/5D)**: INR 39,364 (~$469 USD) per adult
• 🏝️ **Bali Budget & Private Villa (6N/7D)**: INR 39,014 (~$464 USD) per adult
• 🇦🇪 **Dubai Highlights & Desert Dunes (4N/5D)**: INR 42,598 (~$507 USD) per adult
• 🇹🇷 **Turkey Escape & Cappadocia Wonders (4N/5D)**: INR 42,999 (~$515 USD) per adult

Tell me your preferred vibe: **Snow, Beaches, or City Luxury**?`
      }};
    }} else if (parsedBudget <= 80000) {{
      return {{
        activeDestination: 'thailand-grand-signature',
        reply: `✨ **Premium Verified Packages for ~₹${{Math.round(parsedBudget).toLocaleString('en-IN')}} Budget**:
• 🇸🇬 **Singapore Signature Experience (3N/4D)**: INR 52,062 (~$620 USD) per adult
• 🇹🇭 **Thailand Grand Signature (7N/8D)**: INR 62,362 (~$745 USD) per adult (Phuket + Krabi + Bangkok)
• 🇦🇪 **Dubai Complete Royal Experience (6N/7D)**: INR 64,410 (~$767 USD) per adult
• 🇨🇳 **Canton Fair Business & Guangzhou (6N/7D)**: INR 79,200 (~$943 USD) per adult
• 🇸🇬 **Singapore Grand Leisure & Sentosa (6N/7D)**: INR 82,800 (~$986 USD) per adult

Which destination would you like full details for?`
      }};
    }} else {{
      return {{
        activeDestination: 'malaysia-bali-combo',
        reply: `👑 **Ultra-Luxury Signature Experiences**:
• 🏝️ **Bali Signature Tour (6N/7D)**: INR 96,068 (~$1,145 USD) with Flights & Pool Villa
• 🇲🇾🇮🇩 **Malaysia with Bali Grand Combo (7N/8D)**: INR 122,138 (~$1,454 USD) with Flights & Visa
• 🇭🇰 **Hong Kong & Macau Magic Tour (6N/7D)**: INR 130,985 (~$1,559 USD) with Disneyland
• 🇻🇳 **Vietnam Grand Expedition (9N/10D)**: INR 148,000 (~$1,762 USD) with 3 Cable Cars & Flights

Shall I share the full itinerary for any of these?`
      }};
    }}
  }}

  // 4. TARGETED QUESTIONS ON ACTIVE DESTINATION (STRICT MEMORY RETENTION)
  if (currentPkg) {{
    // Price / Cost query
    if (msgLower.match(/\\b(price|pricing|cost|amount|rate|rates|kitna|kharcha|paisa|budget|rupaye|inr|usd|dollar)\\b/i)) {{
      return {{
        activeDestination: resolvedDest,
        reply: `💰 **Pricing Breakdown for ${{currentPkg.name}} (${{currentPkg.duration}})**:
• **Per Adult Rate**: INR ${{currentPkg.price_inr.toLocaleString('en-IN')}} (~$${{currentPkg.price_usd}} USD)
• **Total Net Group Amount (${{currentPkg.pax}})**: INR ${{currentPkg.total_inr.toLocaleString('en-IN')}}
• **Land Package Option (Excluding International Flights)**: From INR ${{currentPkg.land_inr.toLocaleString('en-IN')}} (~$${{Math.round(currentPkg.land_inr / 84)}} USD) per adult
• **Trip ID**: ${{currentPkg.trip_id}} | **Lead Guest**: ${{currentPkg.lead_guest}}

📲 [**Lock This Price on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20lock%20quote%20for%20${{encodeURIComponent(currentPkg.name)}})`
      }};
    }}

    // Inclusions & Exclusions query
    if (msgLower.match(/\\b(inclusion|inclusions|exclusion|exclusions|include|included|kya milega|kya include hai|services)\\b/i)) {{
      return {{
        activeDestination: resolvedDest,
        reply: `📋 **Inclusions & Exclusions for ${{currentPkg.name}} (${{currentPkg.duration}})**:

✅ **Verified Inclusions**:
${{currentPkg.inclusions}}

❌ **Exclusions**:
${{currentPkg.exclusions}}

📲 [**Get Full Official Voucher on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20share%20inclusions%20for%20${{encodeURIComponent(currentPkg.name)}})`
      }};
    }}

    // Hotel query
    if (msgLower.match(/\\b(hotel|hotels|stay|stays|resort|resorts|room|rooms|villa|villas|accommodation|rehna)\\b/i)) {{
      return {{
        activeDestination: resolvedDest,
        reply: `🏨 **Verified Accommodations for ${{currentPkg.name}} (${{currentPkg.duration}})**:
${{currentPkg.hotels}}

• All stays include daily buffet breakfast, verified 4★/5★ ratings, and private room category upgrades on request.`
      }};
    }}

    // Itinerary / Sightseeing / Places query
    if (msgLower.match(/\\b(itinerary|iternrary|schedule|day|days|sightseeing|places|place|visit|kya dekhenge|activities|plan)\\b/i)) {{
      return {{
        activeDestination: resolvedDest,
        reply: `🗺️ **Sightseeing & Itinerary Highlights for ${{currentPkg.name}} (${{currentPkg.duration}})**:
• **Route**: ${{currentPkg.destination}}

**Key Attractions & Tours Included**:
${{currentPkg.highlights}}

📲 [**Get Day-by-Day PDF Itinerary on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20detailed%20itinerary%20for%20${{encodeURIComponent(currentPkg.name)}})`
      }};
    }}

    // Flights query
    if (msgLower.match(/\\b(flight|flights|airline|airfare|ticket|tickets|indigo|batik|vietjet|airport)\\b/i)) {{
      return {{
        activeDestination: resolvedDest,
        reply: `✈️ **Flight Details for ${{currentPkg.name}} (${{currentPkg.duration}})**:
• **Flight Status**: ${{currentPkg.flights}}
• Ground airport pickups and drops are 100% private in dedicated AC vehicles.`
      }};
    }}

    // If destination was newly mentioned
    if (detectDestination(message)) {{
      return {{
        activeDestination: resolvedDest,
        reply: getPackageSummary(currentPkg)
      }};
    }}
  }}

  // 5. Destination explicitly mentioned (if not already handled)
  const newDest = detectDestination(message);
  if (newDest && PACKAGES_KNOWLEDGE[newDest]) {{
    return {{
      activeDestination: newDest,
      reply: getPackageSummary(PACKAGES_KNOWLEDGE[newDest])
    }};
  }}

  // 6. Affirmation / Ready to book
  if (msgLower.match(/^(yes|yep|sure|ok|okay|ha|haan|theek hai|sahi hai|deal|agree|done|send|bhejo)\\b/i)) {{
    const destText = currentPkg ? `for **${{currentPkg.name}}**` : '';
    return {{
      activeDestination: resolvedDest,
      reply: `✨ **Great!** Our destination manager is ready to lock your booking ${{destText}} with direct wholesale DMC rates.

📲 [**Chat Directly with Destination Desk on WhatsApp (+91 80075 86871)**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20I%20am%20ready%20to%20finalize%20my%20trip!)`
    }};
  }}

  // 7. Contact / Bank Details
  if (msgLower.match(/\\b(bank|account|payment|pay|ifsc|yes bank|phone|call|contact|office|address|amravati|hotline)\\b/i)) {{
    return {{
      activeDestination: resolvedDest,
      reply: `🏛️ **Let's Explore DMC Official Details**:
• **Global HQ**: Sahakar Nagar, Opp. New Cotton Market, Inside Shiv Krupa Residence, Amravati, Maharashtra
• **Offices**: Mumbai, Bali (Denpasar), Turkey (Taksim, Istanbul), Jaipur, Nagpur
• **Direct Hotline / WhatsApp**: +91 80075 86871 | **Email**: Info@letsexploredmc.com

🏦 **Official Bank Account (for RTGS/NEFT/IMPS)**:
• **Bank**: YES BANK LIMITED
• **Account Name**: LETS EXPLORE DMC
• **Account Number**: 108163400004886
• **IFSC Code**: YESB0001081`
    }};
  }}

  // 8. Visa queries
  if (msgLower.match(/\\b(visa|passport|e-visa|evisa|entry requirement|documents)\\b/i)) {{
    return {{
      activeDestination: resolvedDest,
      reply: `🛂 **Visa Guide for Indian Citizens**:
• 🇹🇭 **Thailand & Malaysia**: Visa-Free entry!
• 🏝️ **Bali (Indonesia)**: 30-Day e-VOA online (~$35 USD)
• 🇬🇪 **Georgia**: eVisa online (or Visa-on-Arrival with valid US/UK/Schengen/UAE visa)
• 🇹🇷 **Turkey**: Instant eVisa (with valid US/UK/Schengen visa) or sticker visa
• 🇦🇪 **Dubai (UAE)**: 48-72 hr tourist visa arranged by us
• 🇸🇬 **Singapore & Vietnam**: Quick eVisa assistance provided with all packages!`
    }};
  }}

  // Fallback to active package if present
  if (currentPkg) {{
    return {{
      activeDestination: resolvedDest,
      reply: getPackageSummary(currentPkg)
    }};
  }}

  // General helpful response without robotic prefix
  return {{
    activeDestination: null,
    reply: `I can help you plan your dream vacation! We have 22 verified direct DMC packages with locked wholesale rates:

• 🇹🇭 **Thailand Grand Signature (7N/8D)**: INR 62,362 (~$745 USD)
• 🏝️ **Bali Indonesia Signature (6N/7D)**: INR 96,068 (~$1,145 USD) | Land from ₹39,014 (~$464 USD)
• 🇦🇪 **Dubai Highlights & Desert (4N/5D)**: INR 42,598 (~$507 USD) (with Dhow Dinner Cruise)
• 🇬🇪 **Georgia Flash Deal (4N/5D)**: $300 USD (~₹28,999 INR) (Snowy Kazbegi & Tbilisi)
• 🇸🇬 **Singapore Signature (3N/4D)**: INR 52,062 (~$620 USD)
• 🇻🇳 **Vietnam Grand Expedition (9N/10D)**: INR 1,48,000 (~$1,762 USD)
• 🌴 **Sri Lanka Ramayana (4N/5D)**: INR 23,064 (~$275 USD) (with all dinners)
• 🏔️ **Kashmir Heaven (4N/5D)**: INR 21,999 (~$265 USD) (Dal Lake Houseboat & Dinners)

Tell me your destination, preferred dates, or budget!`
  }};
}}

// Export for Node CommonJS and ES Module environments
if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{
    PACKAGES_KNOWLEDGE,
    MASTER_SYSTEM_PROMPT,
    detectDestination,
    resolveActiveDestination,
    generateSmartReply
  }};
}}
"""

with open('chat_engine.js', 'w', encoding='utf-8') as f:
    f.write(engine_js)

with open('backend/chat_engine.js', 'w', encoding='utf-8') as f:
    f.write(engine_js)

with open('api/chat_engine.js', 'w', encoding='utf-8') as f:
    f.write(engine_js)

print("Updated chat_engine.js in root, backend, and api!")
