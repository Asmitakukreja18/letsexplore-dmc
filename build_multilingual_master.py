# -*- coding: utf-8 -*-
import json
import re

with open('chat_engine.js', 'r', encoding='utf-8') as f:
    engine_code = f.read()

# Replace greeting block
old_greeting_block = engine_code[engine_code.find('// 1. GREETING HANDLER'):engine_code.find('// 2. PAYMENT ADVANCE')]
new_greeting_block = '''// 1. GREETING HANDLER (helo, hello, hi, hey, hy, hola, namaste, नमस्ते, नमस्कार, प्रणाम, हेलो, हाय)
  const isGreeting = msgLower.match(/^(hi|hello|helo|hey|hy|hola|namaste|good morning|good evening|yo)\\b/i) || 
    msgLower.includes('नमस्ते') || msgLower.includes('नमस्कार') || msgLower.includes('प्रणाम') || 
    msgLower.includes('राम राम') || msgLower.startsWith('हेलो') || msgLower.startsWith('हाय');
    
  if (isGreeting && msgLower.split(/\\s+/).length <= 5) {
    if (lang === 'hindi') {
      return {
        activeDestination: resolvedDest,
        reply: `नमस्ते! 🙏 Let's Explore DMC में आपका स्वागत है!

बताइए आप कहाँ घूमने जाने की योजना बना रहे हैं या आपका क्या बजट है:
• 🍽️ *डिनर क्रूज़ और नाइटलाइफ़* या *4–5 दिन का कम बजट ट्रिप*
• 👑 *4–5 दिन लग्जरी टूर और प्राइवेट पूल विला*
• 🏝️ *बाली / थाईलैंड / वियतनाम / सिंगापुर / मलेशिया*
• ❄️ *जॉर्जिया $300 / कश्मीर बर्फ / तुर्की केव होटल*
• 🥗 *प्योर वेज/जैन फ्रेंडली पैकेज*, 💑 *हनीमून स्पेशल*, या 👨‍👩‍👧‍👦 *पारिवारिक छुट्टियां*!

आज मैं आपकी यात्रा की योजना बनाने में कैसे मदद कर सकता हूँ?`
      };
    }
    if (lang === 'hinglish') {
      return {
        activeDestination: resolvedDest,
        reply: `Hey there! 👋 Welcome to Let's Explore DMC!

Bataiye aap kahan ghoomne ka plan kar rahe hain ya aapka budget kya hai:
• 🍽️ *Dinner Cruise & Nightlife* ya *4–5 Days Low Budget*
• 👑 *4–5 Days Luxury Escapes & Pool Villas*
• 🏝️ *Bali / Thailand / Vietnam / Singapore / Malaysia*
• ❄️ *Georgia $300 / Kashmir Snow / Turkey Caves*
• 🥗 *Pure Veg/Jain friendly trips*, 💑 *Honeymoon Villas*, ya 👨‍👩‍👧‍👦 *Family Holidays*!

Main aaj aapka trip plan karne me kaise madad kar sakta hoon?`
      };
    }
    return {
      activeDestination: resolvedDest,
      reply: `Hey there! 👋 Welcome to Let's Explore DMC!

Tell me where you want to travel or what kind of trip you have in mind:
• 🍽️ *Dinner Cruise & Nightlife* or *4–5 Days Low Budget*
• 👑 *4–5 Days Luxury Escapes & Pool Villas*
• 🏝️ *Bali / Thailand / Vietnam / Singapore / Malaysia*
• ❄️ *Georgia $300 / Kashmir Snow / Turkey Caves*
• 🥗 *Pure Veg/Jain friendly trips*, 💑 *Honeymoon Villas*, or 👨‍👩‍👧‍👦 *Family Holidays*!

How can I help plan your trip today?`
    };
  }

  '''
engine_code = engine_code.replace(old_greeting_block, new_greeting_block)

# Replace advance payment block
old_adv_block = engine_code[engine_code.find('// 2. PAYMENT ADVANCE'):engine_code.find('// 3. SHORT DURATION LUXURY')]
new_adv_block = '''// 2. PAYMENT ADVANCE & USKE BAAD / PAYMENT STAGES
  const isAdvanceQuery = msgLower.match(/\\b(advance.*(baad|after|balance)|(baad|after|balance).*advance|in advance or|advance kitna.*baad|advance payment.*remaining|how can i pay.*advance|advance or uske baad)\\b/i) || 
    (msgLower.includes('advance') && (msgLower.includes('baad') || msgLower.includes('after') || msgLower.includes('balance') || msgLower.includes('pay') || msgLower.includes('kitna'))) ||
    msgLower.includes('एडवांस') || msgLower.includes('भुगतान') || msgLower.includes('किस्त') || (msgLower.includes('टोकन') && msgLower.includes('पेमेंट'));

  if (isAdvanceQuery) {
    if (lang === 'hindi') {
      const destName = currentPkg ? `(${currentPkg.name} के लिए)` : '';
      return {
        activeDestination: resolvedDest,
        reply: `💳 **पेमेंट का शेड्यूल और चरण ${destName}**:

1. **चरण 1: एडवांस टोकन अमाउंट (25% से 30%)**:
   • बुकिंग कन्फर्म करते समय देय।
   • तुरंत एयरलाइन ग्रुप सीट्स ब्लॉक करने, 4★/5★ होटलों में कमरे सुरक्षित करने और वीजा प्रोसेस शुरू करने के लिए।

2. **चरण 2: आधिकारिक कन्फर्मेशन वाउचर जारी होना**:
   • टोकन पेमेंट के 24–48 घंटों के भीतर आपको आधिकारिक **Let's Explore DMC वाउचर** दिया जाता है, जिसमें आपका Trip ID, होटल कन्फर्मेशन नंबर और फ्लाइट PNR दर्ज होता है।

3. **चरण 3: बाकी का पेमेंट (70% से 75%)**:
   • आपकी **यात्रा शुरू होने से 15 से 20 दिन पहले** देय।
   • जब आपके होटल, फ्लाइट और वीजा 100% कन्फर्म हो जाएं, तभी आपको शेष राशि देनी होती है!

💳 **स्वीकृत भुगतान माध्यम**: YES Bank RTGS/NEFT, UPI (Google Pay, PhonePe, Paytm), क्रेडिट/डेबिट कार्ड और आसान No-Cost EMI।

📲 [**व्हाट्सएप पर पेमेंट शेड्यूल कन्फर्म करें**](https://wa.me/918007586871?text=नमस्ते%20Lets%20Explore%20DMC,%20कृपया%20पेमेंट%20शेड्यूल%20शेयर%20करें)`
      };
    }
    const destName = currentPkg ? `for **${currentPkg.name}**` : '';
    return {
      activeDestination: resolvedDest,
      reply: `💳 **Payment Schedule & Stages ${destName}**:

1. **Step 1: Advance (Token Payment — 25% to 30%)**:
   • Payable at the time of booking confirmation.
   • Used to instantly block airline group seats, secure guaranteed 4★/5★ hotel room allocations, and initiate visa filing.

2. **Step 2: Official Confirmation Voucher Issued**:
   • Within 24–48 hours of token payment, you receive your official **Let's Explore DMC Voucher** with verified Trip ID, hotel confirmation numbers, and flight PNRs.

3. **Step 3: Uske Baad (Balance Payment — 70% to 75%)**:
   • Payable **15 to 20 days prior to your travel departure date**.
   • You only pay the balance after your hotels, flights, and visas are 100% confirmed!

💳 **Accepted Payment Modes**: YES Bank RTGS/NEFT, UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, and Easy No-Cost EMI options.

📲 [**Confirm Your Booking Schedule on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20payment%20details)`
    };
  }

  '''
engine_code = engine_code.replace(old_adv_block, new_adv_block)

# Replace food block
old_food_block = engine_code[engine_code.find('// 7. FOOD / PURE VEG'):engine_code.find('// 8. HONEYMOON / COUPLES')]
new_food_block = '''// 7. FOOD / PURE VEG / JAIN FOOD / INDIAN MEALS
  const isFoodQuery = msgLower.match(/\\b(veg|vegetarian|pure veg|jain|jain food|halal|indian food|indian restaurant|khana|meals|bhojan|breakfast and dinner|food options|meal plan)\\b/i) ||
    msgLower.includes('शाकाहारी') || msgLower.includes('जैन खाना') || msgLower.includes('खाना') || msgLower.includes('भोजन') || msgLower.includes('वेज');

  if (isFoodQuery) {
    if (lang === 'hindi') {
      const destName = currentPkg ? `(${currentPkg.name} के लिए)` : 'हमारे सभी टूर में';
      return {
        activeDestination: resolvedDest,
        reply: `🥗 **भोजन और खान-पान की सुविधा ${destName}**:

• **100% शुद्ध शाकाहारी और जैन भोजन उपलब्ध**: हमारे सभी अंतरराष्ट्रीय टूर (बाली, थाईलैंड, दुबई, सिंगापुर, वियतनाम, जॉर्जिया) में हमारी ऑन-ग्राउंड टीम आपको प्रामाणिक भारतीय रेस्तरां और 100% शुद्ध शाकाहारी/जैन भोजन की सुविधा उपलब्ध कराती है।
• 🏝️ **बाली**: कूटा, सेमिन्याक और उबूद में प्रसिद्ध भारतीय रेस्टोरेंट (Queen's Tandoor, Gateway of India, Sitara Indian)।
• 🇹🇭 **थाईलैंड**: फी फी और 4-आइलैंड टूर के दौरान विशेष भारतीय बुफे लंच; पटाया और बैंकॉक में शुद्ध शाकाहारी भोजनालय।
• 🇦🇪 **दुबई**: मरीना धो डिनर क्रूज़ और डेजर्ट सफारी BBQ कैंप में 100% शाकाहारी और जैन काउंटर।
• 🏔️ **कश्मीर और श्रीलंका**: पैकेजों में **MAP मील प्लान (प्रतिदिन नाश्ता + शेफ द्वारा तैयार डिनर)** शामिल है, जिसमें अनुरोध पर ताजा शुद्ध शाकाहारी व जैन भोजन दिया जाता है!
• 🏨 **होटल बुफे**: सभी 4★/5★ होटलों में प्रतिदिन बुफे नाश्ते में भरपूर शाकाहारी विकल्प, फल और गर्म बेकरी आइटम मिलते हैं।`
      };
    }
    const destName = currentPkg ? `for **${currentPkg.name}**` : 'across all our destinations';
    return {
      activeDestination: resolvedDest,
      reply: `🥗 **Food & Dining Details ${destName}**:

• **100% Pure Veg & Jain Meals Available**: In all our international destinations (Bali, Thailand, Dubai, Singapore, Vietnam, Georgia), our on-ground team connects you with verified Indian restaurants and serves pure vegetarian/Jain options.
• 🏝️ **Bali**: Authentic Indian restaurants in Kuta, Seminyak & Ubud (Queen's Tandoor, Gateway of India, Sitara Indian).
• 🇹🇭 **Thailand**: Dedicated Indian buffet lunches during Phi Phi & 4-Island tours; pure veg eateries in Patong & Bangkok.
• 🇦🇪 **Dubai**: 100% vegetarian & Jain buffet counters on the Marina Dhow Dinner Cruise & Desert Safari BBQ camp.
• 🏔️ **Kashmir & Sri Lanka**: Packages include **MAP Plan (Daily Breakfast + Daily Chef-prepared Dinners)** with pure vegetarian & Jain food prepared fresh on request!
• 🏨 **Hotel Breakfasts**: Daily buffet breakfasts at all our 4★/5★ partner hotels feature extensive vegetarian, fruit, cereal, and hot bakery options.`
    };
  }

  '''
engine_code = engine_code.replace(old_food_block, new_food_block)

# Replace honeymoon block
old_honey_block = engine_code[engine_code.find('// 8. HONEYMOON / COUPLES'):engine_code.find('// 9. FAMILY / KIDS')]
new_honey_block = '''// 8. HONEYMOON / COUPLES / ROMANTIC TRIPS / POOL VILLAS
  const isHoneyQuery = msgLower.match(/\\b(honeymoon|couple|couples|anniversary|romantic|candlelight|pool villa|private pool|flower bed|honeymooner)\\b/i) ||
    msgLower.includes('हनीमून') || msgLower.includes('रोमांटिक') || msgLower.includes('कपल');

  if (isHoneyQuery) {
    if (lang === 'hindi') {
      return {
        activeDestination: 'bali-indonesia-signature',
        reply: `❤️ **कपल और हनीमून के लिए टॉप रोमांटिक टूर**:

1. 🏝️ **बाली इंडोनेशिया सिग्नेचर (6 रातें / 7 दिन)** — *#1 हनीमून बेस्टसेलर!*:
• **कीमत**: ₹96,068 (~$1,145 USD) प्रति व्यक्ति (फ्लाइट्स और वीजा सहित) | लैंड पैकेज ₹48,999 (~$583 USD) से
• **हाइलाइट्स**: कूटा में बीच क्लब होटल + **उबूद में प्राइवेट 1-बेडरूम पूल विला में 2 रातें**, पूल में फ्लोटिंग ब्रेकफास्ट, उलुवातु सनसेट और केचक फायर डांस, नुसा पेनिडा टूर।

2. 🌴 **केरल प्रीमियम हनीमून और हाउसबोट (6 रातें / 7 दिन)**:
• **कीमत**: ₹35,456 (~$422 USD) प्रति व्यक्ति
• **हाइलाइट्स**: अलेप्पी में **प्राइवेट लग्जरी एयर-कंडीशन्ड हाउसबोट** में 1 रात (पर्सनल शेफ के साथ), मुन्नार चाय के बागान और रिसॉर्ट स्टे।

3. 🇹🇷 **तुर्की और कप्पाडोसिया केव एस्केप (4 रातें / 5 दिन)**:
• **कीमत**: ₹42,999 (~$515 USD) प्रति व्यक्ति
• **हाइलाइट्स**: कप्पाडोसिया में 5★ ऑथेंटिक केव रिसॉर्ट स्टे, सनराइज हॉट एयर बैलून राइड, इस्तांबुल में सनसेट बॉस्फोरस प्राइवेट यॉट क्रूज़।

4. 🇦🇪 **दुबई लग्जरी ग्रैंड (5 रातें / 6 दिन)**:
• **कीमत**: ₹66,848 (~$796 USD) प्रति व्यक्ति
• **हाइलाइट्स**: डेजर्ट सनसेट ड्यून डिनर, बुर्ज खलीफा 124वीं मंजिल VIP व्यूज और मरीना यॉट क्रूज़।

🎁 **हनीमून पर विशेष सुविधाएँ**: अनुरोध पर रूम में फ्लावर बेड डेकोरेशन, सेलिब्रेशन केक और रोमांटिक कैंडललाइट डिनर!

📲 [**व्हाट्सएप पर रोमांटिक टूर प्लान करें**](https://wa.me/918007586871?text=नमस्ते%20Lets%20Explore%20DMC,%20कृपया%20हनीमून%20टूर%20प्लान%20करें)`
      };
    }
    return {
      activeDestination: 'bali-indonesia-signature',
      reply: `❤️ **Top Romantic & Honeymoon Packages for Couples**:

1. 🏝️ **Bali Indonesia Signature (6N/7D)** — *#1 Couples Bestseller!*:
• **Rate**: INR 96,068 (~$1,145 USD) per person (All-inclusive with Flights & Visa) | Land Package from ₹48,999 (~$583 USD)
• **Highlights**: 4N Beach Club Hotel in Kuta + **2N in Private 1-Bedroom Pool Villa in Ubud**, Floating Breakfast in pool, Uluwatu sunset & Kecak Fire Dance, Nusa Penida T-Rex beach tour.

2. 🌴 **Kerala Premium Honeymoon & Houseboat (6N/7D)**:
• **Rate**: INR 35,456 (~$422 USD) per person
• **Highlights**: 1 Night in a **Private Luxury Air-Conditioned Houseboat in Alleppey** with personal chef, misty Munnar tea hills & Marari beach resort.

3. 🇹🇷 **Turkey & Cappadocia Cave Escape (4N/5D)**:
• **Rate**: INR 42,999 (~$515 USD) per person
• **Highlights**: 5★ Authentic Cave Resort stay in Cappadocia, sunrise Hot Air Balloon flight over fairy chimneys, private sunset Bosphorus Yacht Cruise in Istanbul.

4. 🇦🇪 **Dubai Luxury Grand (5N/6D)**:
• **Rate**: INR 66,848 (~$796 USD) per person
• **Highlights**: Desert Sunset Dune dinner, Burj Khalifa 124th floor VIP views & Marina Yacht Cruise.

🎁 **Complimentary Honeymoon Inclusions**: Room flower bed decor, celebration honeymoon cake & romantic candlelight dinner setup on request!

📲 [**Plan Romantic Itinerary on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20plan%20a%20honeymoon%20trip)`
    };
  }

  '''
engine_code = engine_code.replace(old_honey_block, new_honey_block)

# Replace low budget dinner block
old_dinner_block = engine_code[engine_code.find('// 15. Low-Budget Dinner'):engine_code.find('// 16. Numeric budget inputs')]
new_dinner_block = '''// 15. Low-Budget Dinner & Nightlife (e.g. "dinner nightt ho my budget is low and for 45 days")
  const isDinnerNightQuery = msgLower.match(/\\b(dinner.*(night|low|budget)|night.*(dinner|low|budget)|low budget.*(dinner|night)|budget.*dinner|dinner nightt)\\b/i) || 
    (msgLower.includes('dinner') && (msgLower.includes('low') || msgLower.includes('budget') || msgLower.includes('45') || msgLower.includes('4-5') || msgLower.includes('night'))) ||
    (msgLower.includes('डिनर') && (msgLower.includes('कम बजट') || msgLower.includes('सस्ता') || msgLower.includes('रात') || msgLower.includes('नाइट'))) ||
    ((msgLower.includes('कम बजट') || msgLower.includes('सस्ता')) && (msgLower.includes('डिनर') || msgLower.includes('शामिल') || msgLower.includes('4-5 दिन')));

  if (isDinnerNightQuery) {
    if (lang === 'hindi') {
      return {
        activeDestination: 'dubai-super-saver-4n5d',
        reply: `✨ **डिनर और नाइटलाइफ़ के साथ टॉप 4–5 दिन के कम बजट टूर**:

1. 🇦🇪 **दुबई हाइलाइट्स और डेजर्ट सफारी (4 रातें / 5 दिन)**:
• **शुरुआती कीमत**: ₹42,598 (~$507 USD) प्रति व्यक्ति | लैंड पैकेज ₹29,999 (~$357 USD) से
• **डिनर और नाइट हाइलाइट्स**:
  - **मरीना लग्जरी धो क्रूज़**: गगनचुंबी इमारतों के बीच इंटरनेशनल बुफे डिनर और लाइव म्यूजिक
  - **4x4 डेजर्ट सफारी**: ड्यून बैशिंग, बेली डांस, तनोउरा शो और भव्य BBQ डिनर

2. 🇬🇪 **जॉर्जिया फ्लैश डील (4 रातें / 5 दिन)** — *सबसे किफायती अंतरराष्ट्रीय टूर!*:
• **शुरुआती कीमत**: $300 USD (~₹28,999 INR) प्रति व्यक्ति
• **डिनर और नाइट हाइलाइट्स**:
  - रोशनी से जगमगाते ब्रिज ऑफ पीस के साथ ओल्ड त्बिलिसी नाइट वॉक
  - पारंपरिक जॉर्जियन वाइन चखना और स्थानीय भोजन अनुभव

3. 🌴 **श्रीलंका रामायण और हिल कंट्री (4 रातें / 5 दिन)**:
• **शुरुआती कीमत**: ₹23,064 (~$275 USD) प्रति व्यक्ति
• **डिनर हाइलाइट्स**: **MAP प्लान शामिल (प्रतिदिन नाश्ता + सभी दिन 4★ होटल डिनर शामिल!)**

4. 🏔️ **कश्मीर हेवन ऑन अर्थ (4 रातें / 5 दिन)**:
• **शुरुआती कीमत**: ₹21,999 (~$265 USD) प्रति व्यक्ति
• **डिनर हाइलाइट्स**: **MAP प्लान शामिल (प्रतिदिन नाश्ता + डल झील हाउसबोट पर शेफ द्वारा तैयार डिनर)** + 1 घंटे की सनसेट शिकारा राइड

5. 🇹🇭 **थाईलैंड आइलैंड हॉपर (4 रातें / 5 दिन)**:
• **शुरुआती कीमत**: लैंड पैकेज ₹28,999 (~$345 USD) से
• **डिनर और नाइटलाइफ़**: बांग्ला रोड नाइटलाइफ़, पातोंग बीच क्लब्स और सी-साइड सनसेट डिनर

आपको कौन सा विकल्प सबसे अच्छा लगा: **दुबई मरीना डिनर क्रूज़, बर्फीला जॉर्जिया ($300), या कश्मीर हाउसबोट डिनर**?`
      };
    }
    return {
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
    };
  }

  '''
engine_code = engine_code.replace(old_dinner_block, new_dinner_block)

# Replace Affirmation block
old_affirm_block = engine_code[engine_code.find('// 19. Affirmation'):engine_code.find('// 20. Contact / Bank')]
new_affirm_block = '''// 19. Affirmation / Ready to book
  const isQuestion = /[?]|^(what|how|why|where|when|which|tell|show|kitna|kya|kaise|kahan|kab)\\b/i.test(msgLower) || /\\b(packages?|price|pricing|cost|per person|hotel|itinerary|place|places|dinner|night)\\b/i.test(msgLower);
  const isAffirmation = (!isQuestion && msgLower.match(/^(yes|yep|sure|ok|okay|ha|haan|theek hai|sahi hai|deal|agree|done|send|bhejo)\\b/i)) ||
    (!isQuestion && (msgLower.startsWith('हाँ') || msgLower.startsWith('हा') || msgLower.includes('ठीक है') || msgLower.includes('बुक करना है') || msgLower.includes('बुक करो') || msgLower.includes('फाइनल करो')));

  if (isAffirmation && msgLower.split(/\\s+/).length <= 8) {
    if (lang === 'hindi') {
      const destText = currentPkg ? `(${currentPkg.name} के लिए)` : '';
      return {
        activeDestination: resolvedDest,
        reply: `✨ **बहुत बढ़िया!** हमारे डेस्टिनेशन मैनेजर डायरेक्ट होलसेल DMC रेट पर आपकी बुकिंग सुरक्षित करने के लिए तैयार हैं ${destText}।

📲 [**व्हाट्सएप (+91 80075 86871) पर सीधे बात करें**](https://wa.me/918007586871?text=नमस्ते%20Lets%20Explore%20DMC,%20मैं%20अपनी%20यात्रा%20फाइनल%20करना%20चाहता%20हूँ!)`
      };
    }
    const destText = currentPkg ? `for **${currentPkg.name}**` : '';
    return {
      activeDestination: resolvedDest,
      reply: `✨ **Great!** Our destination manager is ready to lock your booking ${destText} with direct wholesale DMC rates.

📲 [**Chat Directly with Destination Desk on WhatsApp (+91 80075 86871)**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20I%20am%20ready%20to%20finalize%20my%20trip!)`
    };
  }

  '''
engine_code = engine_code.replace(old_affirm_block, new_affirm_block)

for p in ['chat_engine.js', 'backend/chat_engine.js', 'api/chat_engine.js']:
    with open(p, 'w', encoding='utf-8') as f:
        f.write(engine_code)
    print(f"Updated {p}")

print("All engines updated with robust Hindi Unicode matching!")
