import re

with open('chat_engine.js', 'r', encoding='utf-8') as f:
    code = f.read()

detect_lang_func = '''function detectLanguage(text) {
  if (!text) return 'english';
  // Check for Devanagari Hindi script (Unicode range: \\u0900-\\u097F)
  if (/[\\u0900-\\u097F]/.test(text)) {
    return 'hindi';
  }
  // Check for Roman Hindi / Hinglish keywords
  const hinglishWords = /\\b(mujhe|hume|humko|batao|btao|bataiye|hoga|hogi|hoge|kaise|kya|chahiye|kitna|kitne|kitni|kharcha|hai|hain|karna|karo|kare|karenge|aap|tum|kaun|konsa|kaisi|rahega|jana|jaana|ghoomne|sasta|saste|kam|baad|pehle|din|raat|raatein|bhejo|dekhna|milega|milegi|khana|bhojan|thike|accha|sahi|dosto|dost|bhyi|samaj|tu|teri|mera|meri|humare)\\b/i;
  if (hinglishWords.test(text)) {
    return 'hinglish';
  }
  return 'english';
}
'''

new_get_package_summary = '''function getPackageSummary(pkg, lang = 'english') {
  let itemsEn = [];
  let itemsHi = [];
  let itemsHing = [];

  if (pkg.id_code.includes('dubai')) {
    itemsEn = [
      "4★ Luxury Hotel with daily buffet breakfast",
      "Burj Khalifa 124th Floor observation deck tickets",
      "4x4 Desert Safari with dune bashing & grand BBQ dinner",
      "Dubai Marina Dhow Luxury Cruise with buffet dinner & live entertainment",
      "100% Private AC Airport & Sightseeing Transfers"
    ];
    itemsHi = [
      "4★ लग्जरी होटल और प्रतिदिन बुफे नाश्ता (Breakfast)",
      "बुर्ज खलीफा 124वीं मंजिल ऑब्जर्वेशन डेक टिकट",
      "4x4 डेजर्ट सफारी, ड्यून बैशिंग और भव्य BBQ डिनर",
      "दुबई मरीना लग्जरी धो क्रूज़, बुफे डिनर और लाइव म्यूजिक",
      "100% प्राइवेट AC एयरपोर्ट और सभी दर्शनीय स्थलों के ट्रांसफर"
    ];
    itemsHing = [
      "4★ Luxury Hotel aur daily buffet breakfast",
      "Burj Khalifa 124th Floor observation deck tickets",
      "4x4 Desert Safari with dune bashing & grand BBQ dinner",
      "Dubai Marina Dhow Luxury Cruise with buffet dinner & live entertainment",
      "100% Private AC Airport & Sightseeing Transfers"
    ];
  } else if (pkg.id_code.includes('bali')) {
    itemsEn = [
      "4★/5★ Deluxe Resort in Kuta + Private 1-Bedroom Pool Villa in Ubud with Daily Breakfast",
      "Full-Day Nusa Penida West Island Speedboat Tour (Kelingking T-Rex cliff & Angel's Billabong)",
      "90-min ATV Quad Biking + 3-Hour Ayung River Rafting + Bali Jungle Swing",
      "Uluwatu Cliff Sunset Temple & iconic Kecak Fire Dance show",
      "100% Private AC SUV with dedicated chauffeur throughout"
    ];
    itemsHi = [
      "कूटा में 4★/5★ डीलक्स रिसॉर्ट + उबूद में प्राइवेट 1-बेडरूम पूल विला (नाश्ते सहित)",
      "नुसा पेनिडा वेस्ट आइलैंड स्पीडबोट टूर (केलिंगकिंग टी-रेक्स क्लिफ और एंजल्स बिलबॉन्ग)",
      "90-मिनट ATV क्वाड बाइकिंग + 3-घंटे अयुंग रिवर राफ्टिंग + बाली जंगल स्विंग",
      "उलुवातु क्लिफ सनसेट मंदिर और प्रसिद्ध केचक फायर डांस शो",
      "पूरे टूर के दौरान 100% प्राइवेट AC गाड़ी और समर्पित ड्राइवर"
    ];
    itemsHing = [
      "Kuta me 4★/5★ Deluxe Resort + Ubud me Private 1-Bedroom Pool Villa with Daily Breakfast",
      "Full-Day Nusa Penida West Island Speedboat Tour (Kelingking T-Rex cliff & Angel's Billabong)",
      "90-min ATV Quad Biking + 3-Hour Ayung River Rafting + Bali Jungle Swing",
      "Uluwatu Cliff Sunset Temple & iconic Kecak Fire Dance show",
      "100% Private AC SUV with dedicated chauffeur throughout"
    ];
  } else if (pkg.id_code.includes('thailand')) {
    itemsEn = [
      "4★/5★ Beachfront Resort stays in Phuket & Krabi with Daily Buffet Breakfast",
      "Full-Day Phi Phi Island Speedboat Cruise with snorkeling & Maya Bay pass",
      "Krabi 4-Island Tour with Picnic Lunch & Coral Island exploration",
      "Evening Chao Phraya River Luxury Dinner Cruise & Bangkok City Tour",
      "100% Private AC Airport & Inter-city Transfers throughout"
    ];
    itemsHi = [
      "फुकेत और क्राबी में 4★/5★ बीचफ्रंट रिसॉर्ट स्टे और प्रतिदिन बुफे नाश्ता",
      "फी फी आइलैंड स्पीडबोट क्रूज़, स्नोर्कलिंग और माया बे पास",
      "क्राबी 4-आइलैंड टूर, पिकनिक लंच और कोरल आइलैंड टूर",
      "चाओ फ्राया रिवर लग्जरी डिनर क्रूज़ और बैंकॉक सिटी टूर",
      "पूरे टूर में 100% प्राइवेट AC एयरपोर्ट और इंटर-सिटी ट्रांसफर"
    ];
    itemsHing = [
      "Phuket aur Krabi me 4★/5★ Beachfront Resort stays with Daily Buffet Breakfast",
      "Full-Day Phi Phi Island Speedboat Cruise with snorkeling & Maya Bay pass",
      "Krabi 4-Island Tour with Picnic Lunch & Coral Island exploration",
      "Evening Chao Phraya River Luxury Dinner Cruise & Bangkok City Tour",
      "100% Private AC Airport & Inter-city Transfers throughout"
    ];
  } else {
    const raw = (pkg.inclusions || '').split(/,\\s*/);
    itemsEn = raw.slice(0, 4).map(it => it.trim());
    itemsEn.push("100% Private AC Airport & Sightseeing Transfers");
    itemsHing = [...itemsEn];
    itemsHi = [
      "सत्यापित 4★/5★ होटल/रिसॉर्ट में ठहरना और प्रतिदिन नाश्ता",
      "सभी प्रमुख दर्शनीय स्थलों और पर्यटन आकर्षणों के प्रवेश टिकट",
      "विशेष दर्शनीय स्थल यात्राएं और स्थानीय अनुभव",
      "100% प्राइवेट AC गाड़ी और समर्पित ड्राइवर",
      "सभी टोल, टैक्स और 24/7 ऑन-ग्राउंड सहायता"
    ];
  }

  // Devanagari Hindi Response
  if (lang === 'hindi') {
    const numberedListHi = itemsHi.map((it, idx) => `${idx + 1}. ${it}`).join('\\n');
    return `नमस्ते! मैं एटलस हूँ, Let's Explore DMC में आपका AI ट्रैवल आर्किटेक्ट।

• पैकेज का विवरण (Package Overview):
हमारा ${pkg.name} ₹${pkg.price_inr.toLocaleString('en-IN')} (~$${pkg.price_usd} USD) प्रति व्यक्ति से शुरू होता है (${pkg.duration.replace('Nights', 'रातें').replace('Days', 'दिन')})।

• क्या-क्या शामिल है (What's Included):
${numberedListHi}

• कीमत और जरूरी बातें (Pricing & Factors):
यह हमारी वेरीफाइड डायरेक्ट DMC शुरुआती बेस रेट है। फाइनल कीमत आपके शहर, फ्लाइट टिकट, यात्रा की तारीखों और 4★ या 5★ होटल के चुनाव पर निर्भर करती है।

• अगला कदम (Next Step):
आप किस महीने में जाने की योजना बना रहे हैं और कितने लोग साथ होंगे?
[📲 व्हाट्सएप (+91 80075 86871) पर कस्टमाइज्ड कोटेशन के लिए बात करें](https://wa.me/918007586871?text=नमस्ते%20Lets%20Explore%20DMC,%20कृपया%20${encodeURIComponent(pkg.name)}%20का%20कोटेशन%20शेयर%20करें)`;
  }

  // Hinglish Response
  if (lang === 'hinglish') {
    const numberedListHing = itemsHing.map((it, idx) => `${idx + 1}. ${it}`).join('\\n');
    return `Hello! Main Atlas hoon, Let's Explore DMC me aapka AI Travel Architect.

• Package Overview:
Hamara ${pkg.name} package ₹${pkg.price_inr.toLocaleString('en-IN')} (~$${pkg.price_usd} USD) per person se shuru hota hai (${pkg.duration})।

• What's Included:
${numberedListHing}

• Pricing & Real-world Factors:
Ye hamara direct DMC verified starting base rate hai. Final pricing aapke departure city, flight rates, travel dates aur 4★ ya 5★ hotel choice par depend karti hai.

• Next Step:
Aap kaun se month me travel plan kar rahe hain aur kitne log sath honge?
[📲 WhatsApp (+91 80075 86871) par customized quote payein](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20quote%20for%20${encodeURIComponent(pkg.name)})`;
  }

  // Default English Response
  const numberedListEn = itemsEn.map((it, idx) => `${idx + 1}. ${it}`).join('\\n');
  return `Hello! I am Atlas, your AI Travel Architect at Let's Explore DMC.

• Package Overview:
Our ${pkg.name} starts from INR ${pkg.price_inr.toLocaleString('en-IN')} (~$${pkg.price_usd} USD) per person (${pkg.duration}).

• What's Included:
${numberedListEn}

• Pricing & Real-world Factors:
This is our verified starting base rate. Final pricing depends on your departure city, flight rates, travel dates, and whether you choose 4★ or 5★ hotels.

• Next Step:
Which month are you planning to travel, and how many people will be joining? 
[📲 Chat on WhatsApp (+91 80075 86871) for a customized quote](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20quote%20for%20${encodeURIComponent(pkg.name)})`;
}'''

# Replace getPackageSummary function using index search to avoid regex escape issues
pkg_start = code.find('function getPackageSummary(pkg) {')
pkg_end = code.find('function generateSmartReply(message,')
if pkg_start == -1 or pkg_end == -1:
    print("Could not find getPackageSummary boundary!")
    exit(1)

code = code[:pkg_start] + detect_lang_func + '\n' + new_get_package_summary + '\n\n' + code[pkg_end:]

# Update generateSmartReply start to detect lang
smart_start = 'function generateSmartReply(message, history = [], activeDestination = null) {'
smart_body = '''function generateSmartReply(message, history = [], activeDestination = null) {
  const msgLower = (message || '').toLowerCase().trim();
  const lang = detectLanguage(message);'''

code = code.replace(smart_start + '\n  const msgLower = (message || \'\').toLowerCase().trim();', smart_body)

# Replace all getPackageSummary(pkg) calls with getPackageSummary(pkg, lang)
code = re.sub(r'getPackageSummary\(([^,)]+)\)', r'getPackageSummary(\1, lang)', code)

for p in ['chat_engine.js', 'backend/chat_engine.js', 'api/chat_engine.js']:
    with open(p, 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Updated {p}")

print("Multilingual support fully integrated!")
