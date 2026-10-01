# -*- coding: utf-8 -*-
import json
import re

with open('chat_engine.js', 'r', encoding='utf-8') as f:
    src = f.read()

# 1. Update detectDestination
old_detect_dest = src[src.find('function detectDestination(text, currentActive = null) {'):src.find('function resolveActiveDestination(message,')]

new_detect_dest = '''function detectDestination(text, currentActive = null) {
  if (!text) return currentActive;
  const t = text.toLowerCase();
  
  if ((t.includes('malaysia') || t.includes('मलेशिया')) && (t.includes('bali') || t.includes('बाली'))) return 'malaysia-bali-combo';
  if (t.includes('canton') || t.includes('कैंटन') || ((t.includes('china') || t.includes('चीन')) && (t.includes('fair') || t.includes('guangzhou') || t.includes('business') || t.includes('मेला')))) return 'canton-fair-china-6n7d';
  if (t.includes('hong kong') || t.includes('hongkong') || t.includes('macau') || t.includes('हांगकांग') || t.includes('मकाऊ')) return 'hong-kong-grand-6n7d';
  if (t.includes('sri lanka') || t.includes('srilanka') || t.includes('colombo') || t.includes('kandy') || t.includes('bentota') || t.includes('nuwara eliya') || t.includes('श्रीलंका') || t.includes('कैंडी') || t.includes('कोलंबो')) return 'sri-lanka-wonders-4n5d';
  if (t.includes('ujjain') || t.includes('omkareshwar') || t.includes('mahakal') || t.includes('indore') || t.includes('jyotirlinga') || t.includes('उज्जैन') || t.includes('महाकाल') || t.includes('ओंकारेश्वर') || t.includes('इंदौर') || t.includes('ज्योतिर्लिंग')) return 'ujjain-omkareshwar-4n5d';
  if (t.includes('kashmir') || t.includes('kasmir') || t.includes('gulmarg') || t.includes('dal lake') || t.includes('pahalgam') || t.includes('shikara') || t.includes('srinagar') || t.includes('कश्मीर') || t.includes('गुलमर्ग') || t.includes('पहलगाम') || t.includes('डल झील') || t.includes('शिकारा') || t.includes('श्रीनगर')) return 'kashmir-paradise-21k';
  
  if (t.includes('kerala') || t.includes('munnar') || t.includes('alleppey') || t.includes('thekkady') || t.includes('kovalam') || t.includes('केरल') || t.includes('मुन्नार') || t.includes('अलेप्पी') || t.includes('थेक्कडी')) {
    if (t.includes('darshan') || t.includes('honeymoon') || t.includes('luxury') || t.includes('marari') || t.includes('हनीमून') || t.includes('दर्शन')) return 'kerala-darshan-luxury-6n7d';
    return 'kerala-meghani-6n7d';
  }
  
  if (t.includes('singapore') || t.includes('sentosa') || t.includes('universal studios') || t.includes('mbs') || t.includes('marina bay') || t.includes('सिंगापुर') || t.includes('सेंटोसा')) {
    if (t.includes('6n') || t.includes('7d') || t.includes('grand') || t.includes('chhabra') || t.includes('leisure')) return 'singapore-grand-6n7d';
    if (t.includes('4n') || t.includes('5d') || t.includes('family') || t.includes('night safari') || t.includes('परिवार')) return 'singapore-family-4n5d';
    return 'singapore-signature-3n4d';
  }
  
  if (t.includes('vietnam') || t.includes('da nang') || t.includes('phu quoc') || t.includes('sapa') || t.includes('hanoi') || t.includes('fansipan') || t.includes('ba na hills') || t.includes('वियतनाम') || t.includes('हनोई') || t.includes('दा नांग') || t.includes('फू क्वोक') || t.includes('बा ना हिल्स')) return 'vietnam-grand-expedition';
  
  if (t.includes('dubai') || t.includes('dubaai') || t.includes('burj khalifa') || t.includes('abu dhabi') || t.includes('uae') || t.includes('दुबई') || t.includes('बुर्ज खलीफा') || t.includes('अबू धाबी')) {
    if (t.includes('abu dhabi') || t.includes('अबू धाबी') || t.includes('5n') || t.includes('6d') || t.includes('bajaj') || t.includes('museum of the future')) return 'dubai-luxury-grand-5n6d';
    if (t.includes('royal') || t.includes('extended') || t.includes('atlantis') || t.includes('palm jumeirah') || t.includes('7d')) return 'dubai-extended-6n7d';
    return 'dubai-super-saver-4n5d';
  }
  
  if (t.includes('thailand') || t.includes('tailand') || t.includes('phuket') || t.includes('krabi') || t.includes('bangkok') || t.includes('phi phi') || t.includes('pattaya') || t.includes('थाईलैंड') || t.includes('थाईलेंड') || t.includes('फुकेत') || t.includes('क्राबी') || t.includes('बैंकॉक') || t.includes('पटाया')) {
    if (t.includes('5n') || t.includes('6d') || t.includes('luxury') || t.includes('rathi') || t.includes('westin') || t.includes('लक्जरी')) return 'thailand-express-5n6d';
    return 'thailand-grand-signature';
  }
  
  if (t.includes('bali') || t.includes('ubud') || t.includes('nusa penida') || t.includes('kuta') || t.includes('tanah lot') || t.includes('बाली') || t.includes('उबूद') || t.includes('नुसा पेनिडा') || t.includes('कूटा')) {
    if (t.includes('budget') || t.includes('leisure') || t.includes('grand barong') || t.includes('कम बजट')) return 'bali-leisure-6n7d';
    return 'bali-indonesia-signature';
  }
  
  if (t.includes('malaysia') || t.includes('genting') || t.includes('kuala lumpur') || t.includes('batu caves') || t.includes('मलेशिया') || t.includes('कुआलालंपुर') || t.includes('जेंटिंग')) return 'malaysia-express-4n5d';
  if (t.includes('georgia') || t.includes('tbilisi') || t.includes('kazbegi') || t.includes('gudauri') || t.includes('300') || t.includes('जॉर्जिया') || t.includes('त्बिलिसी') || t.includes('गुदौरी') || t.includes('काजबेगी')) return 'georgia-magic-300';
  if (t.includes('turkey') || t.includes('türkiye') || t.includes('cappadocia') || t.includes('istanbul') || t.includes('bosphorus') || t.includes('तुर्की') || t.includes('टर्की') || t.includes('इस्तांबुल') || t.includes('कप्पाडोसिया')) return 'turkey-escape-42k';
  
  return currentActive;
}
'''

src = src.replace(old_detect_dest, new_detect_dest)

# 2. Update getPackageSummary
old_pkg_summary = src[src.find('function getPackageSummary(pkg) {'):src.find('function generateSmartReply(message,')]
new_pkg_summary = '''function detectLanguage(text) {
  if (!text) return 'english';
  // Check for Devanagari Hindi script (Unicode range: \\u0900-\\u097F)
  if (/[\\u0900-\\u097F]/.test(text)) {
    return 'hindi';
  }
  // Check for Roman Hindi / Hinglish keywords
  const hinglishWords = /\\b(mujhe|hume|humko|batao|btao|bataiye|hoga|hogi|hoge|kaise|kya|chahiye|kitna|kitne|kitni|kharcha|hai|hain|karna|karo|kare|karenge|aap|tum|kaun|konsa|kaisi|rahega|jana|jaana|ghoomne|sasta|saste|kam|baad|pehle|din|raat|raatein|bhejo|dekhna|milega|milegi|khana|bhojan|thike|accha|sahi|dosto|dost|bhyi|samaj|tu|teri|mera|meri|humare|shamil|kripya)\\b/i;
  if (hinglishWords.test(text)) {
    return 'hinglish';
  }
  return 'english';
}

function getPackageSummary(pkg, lang = 'english') {
  let itemsEn = [];
  let itemsHi = [];
  let itemsHing = [];

  const id = pkg.id_code || '';

  if (id.includes('dubai')) {
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
  } else if (id.includes('bali')) {
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
  } else if (id.includes('thailand')) {
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
  } else if (id.includes('georgia')) {
    itemsEn = [
      "4★ City Center Hotel in Tbilisi with Daily Buffet Breakfast",
      "Gudauri Ski Resort & Snowy Friendship Monument tour",
      "4x4 Extreme Mountain Drive to Kazbegi Gergeti Trinity Church",
      "Old Tbilisi Walking Tour, Bridge of Peace & Narikala Cable Car",
      "100% Private AC Airport & Excursion Transfers throughout"
    ];
    itemsHi = [
      "त्बिलिसी सिटी सेंटर में 4★ होटल और प्रतिदिन बुफे नाश्ता",
      "गुदौरी स्की रिसॉर्ट और बर्फीला फ्रेंडशिप मॉन्यूमेंट टूर",
      "काजबेगी गेर्गेटी ट्रिनिटी चर्च तक 4x4 रोमांचक माउंटेन राइड",
      "ओल्ड त्बिलिसी वॉकिंग टूर, ब्रिज ऑफ पीस और नरीकला केबल कार",
      "पूरे टूर में 100% प्राइवेट AC एयरपोर्ट और दर्शनीय स्थल ट्रांसफर"
    ];
    itemsHing = [
      "Tbilisi City Center me 4★ Hotel stay aur daily buffet breakfast",
      "Gudauri Ski Resort & Snowy Friendship Monument tour",
      "4x4 Extreme Mountain Drive to Kazbegi Gergeti Trinity Church",
      "Old Tbilisi Walking Tour, Bridge of Peace & Narikala Cable Car",
      "100% Private AC Airport & Excursion Transfers throughout"
    ];
  } else if (id.includes('kashmir')) {
    itemsEn = [
      "Luxury Dal Lake Houseboat stay + 4★ Srinagar Hotel with Breakfast & Dinners (MAP Plan)",
      "1-Hour Sunset Shikara Ride on Dal Lake",
      "Gulmarg Gondola Phase 1 Snow Expedition",
      "Pahalgam Betaab Valley & Aru Valley excursion with saffron field visits",
      "100% Dedicated Heated Chauffeur Cab throughout"
    ];
    itemsHi = [
      "डल झील पर लग्जरी हाउसबोट + श्रीनगर में 4★ होटल (नाश्ता और डिनर सहित - MAP प्लान)",
      "डल झील पर 1 घंटे की सनसेट शिकारा राइड",
      "गुलमर्ग गोंडोला फेज़ 1 स्नो टूर और बर्फबारी के नजारे",
      "पहलगाम बेताब वैली और अरू वैली टूर, केसर के खेत और सेब के बागान",
      "पूरे टूर में 100% प्राइवेट हीटेड कैब और समर्पित ड्राइवर"
    ];
    itemsHing = [
      "Dal Lake Luxury Houseboat + Srinagar me 4★ Hotel (Breakfast & Dinner included - MAP Plan)",
      "1-Hour Sunset Shikara Ride on Dal Lake",
      "Gulmarg Gondola Phase 1 Snow Expedition",
      "Pahalgam Betaab Valley & Aru Valley excursion with saffron field visits",
      "100% Dedicated Heated Chauffeur Cab throughout"
    ];
  } else if (id.includes('singapore')) {
    itemsEn = [
      "4★ City Hotel with Daily Buffet Breakfast",
      "Universal Studios Singapore 1-Day Pass with all rides",
      "Sentosa Island Cable Car Skypass & Wings of Time Sunset Laser Show",
      "Marina Bay Sands (MBS) Skypark Observation Deck & Gardens by the Bay",
      "100% Private AC Airport & Sightseeing Transfers"
    ];
    itemsHi = [
      "4★ प्रीमियम सिटी होटल और प्रतिदिन बुफे नाश्ता",
      "फुल-डे यूनिवर्सल स्टूडियोज सिंगापुर पास (सभी राइड्स शामिल)",
      "सेंटोसा केबल कार और विंग्स ऑफ टाइम लेजर शो",
      "मरीना बे सैंड्स (MBS) स्काईपार्क और गार्डन्स बाय द बे प्रवेश",
      "100% प्राइवेट AC एयरपोर्ट और सभी दर्शनीय स्थलों के ट्रांसफर"
    ];
    itemsHing = [
      "4★ City Hotel stay aur daily buffet breakfast",
      "Universal Studios Singapore 1-Day Pass with all rides",
      "Sentosa Island Cable Car Skypass & Wings of Time Sunset Laser Show",
      "Marina Bay Sands (MBS) Skypark Observation Deck & Gardens by the Bay",
      "100% Private AC Airport & Sightseeing Transfers"
    ];
  } else if (id.includes('vietnam')) {
    itemsEn = [
      "4★/5★ Hotels across Sapa, Hanoi, Da Nang & Phu Quoc with Daily Breakfast",
      "Fansipan Peak Cable Car ('Roof of Indochina' 3,143m) & Glass Bridge",
      "Ba Na Hills Golden Bridge (Giant Stone Hands) & Fantasy Park",
      "Hoi An Ancient Lantern Town & Coconut Jungle basket boat tour",
      "Vinpearl Safari, VinWonders Theme Park & 4-Island Speedboat Tour"
    ];
    itemsHi = [
      "सापा, हनोई, दा नांग और फू क्वोक में 4★/5★ होटल (प्रतिदिन नाश्ता सहित)",
      "फैंसीपैन पीक 'रूफ ऑफ इंडोचाइना' (3,143m) और ग्लास ब्रिज केबल कार टिकट",
      "बा ना हिल्स गोल्डन हैंड ब्रिज और फैंटेसी पार्क",
      "होई आन प्राचीन लालटेन टाउन और कोकोनट जंगल बास्केट बोट राइड",
      "विनपर्ल सफारी, विनवंडर्स थीम पार्क और 4-आइलैंड स्पीडबोट टूर"
    ];
    itemsHing = [
      "4★/5★ Hotels across Sapa, Hanoi, Da Nang & Phu Quoc with Daily Breakfast",
      "Fansipan Peak Cable Car ('Roof of Indochina' 3,143m) & Glass Bridge",
      "Ba Na Hills Golden Bridge (Giant Stone Hands) & Fantasy Park",
      "Hoi An Ancient Lantern Town & Coconut Jungle basket boat tour",
      "Vinpearl Safari, VinWonders Theme Park & 4-Island Speedboat Tour"
    ];
  } else if (id.includes('turkey')) {
    itemsEn = [
      "Authentic 5★ Cave Resort in Cappadocia + 4★ Istanbul Hotel with Daily Breakfast",
      "Sunrise Hot Air Balloon Flight viewing over Fairy Chimney Valleys",
      "Sunset Bosphorus Luxury Yacht Cruise in Istanbul",
      "Goreme Open Air Museum, Underground City & Pigeon Valley",
      "100% Private AC Airport & Sightseeing Transfers throughout"
    ];
    itemsHi = [
      "कप्पाडोसिया में 5★ ऑथेंटिक केव (गुफा) रिसॉर्ट + इस्तांबुल में 4★ होटल (नाश्ता सहित)",
      "फेयरी चिमनी घाटियों के ऊपर सनराइज हॉट एयर बैलून राइड का अनुभव",
      "इस्तांबुल में सनसेट बॉस्फोरस लग्जरी यॉट क्रूज़",
      "गोरेमे ओपन एयर म्यूजियम, अंडरग्राउंड सिटी और पिजन वैली टूर",
      "पूरे टूर में 100% प्राइवेट AC एयरपोर्ट और दर्शनीय स्थल ट्रांसफर"
    ];
    itemsHing = [
      "Cappadocia me 5★ Cave Resort + Istanbul me 4★ Hotel with Daily Breakfast",
      "Sunrise Hot Air Balloon Flight viewing over Fairy Chimney Valleys",
      "Sunset Bosphorus Luxury Yacht Cruise in Istanbul",
      "Goreme Open Air Museum, Underground City & Pigeon Valley",
      "100% Private AC Airport & Sightseeing Transfers throughout"
    ];
  } else if (id.includes('sri-lanka')) {
    itemsEn = [
      "4★ Beach & Hill Resorts with MAP Plan (Daily Breakfast + Daily Dinners included)",
      "Kandy Temple of the Sacred Tooth Relic & Royal Botanical Gardens",
      "Nuwara Eliya Tea Plantations & Ramboda Falls",
      "Bentota Madu River Mangrove Boat Safari & Turtle Hatchery",
      "100% Private AC Chauffeur Vehicle throughout"
    ];
    itemsHi = [
      "4★ बीच और हिल रिसॉर्ट (प्रतिदिन नाश्ता और डिनर शामिल - MAP मील प्लान)",
      "कैंडी टूथ रेलिक मंदिर और रॉयल बॉटनिकल गार्डन्स दर्शन",
      "नूवारा एलिया चाय बागान और रामबोडा वॉटरफॉल",
      "बेंटोटा माडू रिवर मैंग्रोव बोट सफारी और कछुआ संरक्षण केंद्र",
      "पूरे टूर में 100% प्राइवेट AC गाड़ी और समर्पित ड्राइवर"
    ];
    itemsHing = [
      "4★ Beach & Hill Resorts with MAP Plan (Daily Breakfast + Daily Dinners included)",
      "Kandy Temple of the Sacred Tooth Relic & Royal Botanical Gardens",
      "Nuwara Eliya Tea Plantations & Ramboda Falls",
      "Bentota Madu River Mangrove Boat Safari & Turtle Hatchery",
      "100% Private AC Chauffeur Vehicle throughout"
    ];
  } else if (id.includes('kerala')) {
    itemsEn = [
      "Munnar 4★ Tea Hill Resort + Private Deluxe Houseboat in Alleppey with all meals",
      "Mattupetty Dam, Echo Point & Eravikulam National Park",
      "Thekkady Periyar Wildlife Sanctuary & Spice Plantation Tour",
      "Alleppey Backwaters Cruise with authentic Kerala dining",
      "100% Private AC Vehicle with dedicated chauffeur"
    ];
    itemsHi = [
      "मुन्नार 4★ टी हिल रिसॉर्ट + अलेप्पी में प्राइवेट डीलक्स हाउसबोट (सभी भोजन सहित)",
      "मट्टुपेट्टी डैम, इको पॉइंट और इरावीकुलम नेशनल पार्क",
      "थेक्कडी पेरियार वन्यजीव अभयारण्य और मसाला बागान टूर",
      "अलेप्पी बैकवाटर क्रूज़ और पारंपरिक केरल भोजन",
      "पूरे टूर में 100% प्राइवेट AC गाड़ी और समर्पित ड्राइवर"
    ];
    itemsHing = [
      "Munnar 4★ Tea Hill Resort + Alleppey me Private Deluxe Houseboat with all meals",
      "Mattupetty Dam, Echo Point & Eravikulam National Park",
      "Thekkady Periyar Wildlife Sanctuary & Spice Plantation Tour",
      "Alleppey Backwaters Cruise with authentic Kerala dining",
      "100% Private AC Vehicle with dedicated chauffeur"
    ];
  } else if (id.includes('malaysia')) {
    itemsEn = [
      "4★ Central Hotel in Kuala Lumpur with Daily Buffet Breakfast",
      "Petronas Twin Towers Skybridge & Observation Deck Tickets",
      "Batu Caves Murugan Temple & Genting Highlands Skyway Cable Car",
      "Genting SkyWorlds Theme Park & Premium Outlets visit",
      "100% Private AC Airport & Tour Transfers"
    ];
    itemsHi = [
      "कुआलालंपुर में 4★ सेंट्रल होटल और प्रतिदिन बुफे नाश्ता",
      "पेट्रोनास ट्विन टावर्स स्काईब्रिज और ऑब्जर्वेशन डेक टिकट",
      "बाटू केव्स मुरुगन मंदिर और जेंटिंग हाईलैंड्स केबल कार राइड",
      "जेंटिंग स्काईवर्ल्ड्स थीम पार्क और प्रीमियम आउटलेट्स विजिट",
      "100% प्राइवेट AC एयरपोर्ट और टूर ट्रांसफर"
    ];
    itemsHing = [
      "Kuala Lumpur me 4★ Central Hotel aur daily buffet breakfast",
      "Petronas Twin Towers Skybridge & Observation Deck Tickets",
      "Batu Caves Murugan Temple & Genting Highlands Skyway Cable Car",
      "Genting SkyWorlds Theme Park & Premium Outlets visit",
      "100% Private AC Airport & Tour Transfers"
    ];
  } else if (id.includes('ujjain')) {
    itemsEn = [
      "4★ Luxury Hotel in Ujjain with Daily Buffet Breakfast",
      "Shri Mahakaleshwar Jyotirlinga VIP Bhasma Aarti Assistance",
      "Omkareshwar & Mamleshwar Jyotirlinga Darshan excursion",
      "Shri Mahakal Lok Corridor, Kaal Bhairav & Harsiddhi Temple visits",
      "100% Dedicated AC Vehicle from Indore Airport/Station throughout"
    ];
    itemsHi = [
      "उज्जैन में 4★ होटल स्टे और प्रतिदिन बुफे नाश्ता",
      "श्री महाकालेश्वर ज्योतिर्लिंग वीआईपी भस्म आरती सहायता",
      "ओंकारेश्वर और ममलेश्वर ज्योतिर्लिंग दर्शन यात्रा",
      "श्री महाकाल लोक कॉरिडोर, काल भैरव और हरसिद्धि मंदिर दर्शन",
      "इंदौर एयरपोर्ट/स्टेशन से पूरे टूर में 100% प्राइवेट AC गाड़ी"
    ];
    itemsHing = [
      "Ujjain me 4★ Hotel stay aur daily buffet breakfast",
      "Shri Mahakaleshwar Jyotirlinga VIP Bhasma Aarti Assistance",
      "Omkareshwar & Mamleshwar Jyotirlinga Darshan excursion",
      "Shri Mahakal Lok Corridor, Kaal Bhairav & Harsiddhi Temple visits",
      "Indore Airport/Station se poore tour me 100% Private AC Vehicle"
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

  // Devanagari Hindi Response (Golden 4-Part Structure)
  if (lang === 'hindi') {
    const numberedListHi = itemsHi.map((it, idx) => `${idx + 1}. ${it}`).join('\\n');
    const durHi = (pkg.duration || '').replace('Nights', 'रातें').replace('Night', 'रात').replace('Days', 'दिन').replace('Day', 'दिन');
    return `नमस्ते! मैं एटलस हूँ, Let's Explore DMC में आपका AI ट्रैवल आर्किटेक्ट।

• पैकेज का विवरण (Package Overview):
हमारा ${pkg.name} ₹${pkg.price_inr.toLocaleString('en-IN')} (~$${pkg.price_usd} USD) प्रति व्यक्ति से शुरू होता है (${durHi})।

• क्या-क्या शामिल है (What's Included):
${numberedListHi}

• कीमत और जरूरी बातें (Pricing & Factors):
यह हमारी वेरीफाइड डायरेक्ट DMC शुरुआती बेस रेट है। फाइनल कीमत आपके शहर, फ्लाइट टिकट, यात्रा की तारीखों और 4★ या 5★ होटल के चुनाव पर निर्भर करती है।

• अगला कदम (Next Step):
आप किस महीने में जाने की योजना बना रहे हैं और कितने लोग साथ होंगे?
[📲 व्हाट्सएप (+91 80075 86871) पर कस्टमाइज्ड कोटेशन के लिए बात करें](https://wa.me/918007586871?text=नमस्ते%20Lets%20Explore%20DMC,%20कृपया%20${encodeURIComponent(pkg.name)}%20का%20कोटेशन%20शेयर%20करें)`;
  }

  // Hinglish Response (Golden 4-Part Structure)
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

  // Default English Response (Golden 4-Part Structure)
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
}
'''

src = src.replace(old_pkg_summary, new_pkg_summary)

# 3. Update generateSmartReply body
# Find generateSmartReply start
start_gen = src.find('function generateSmartReply(message, history = [], activeDestination = null) {')
start_gen_body = src.find('const msgLower =', start_gen)
end_gen_body = src.find('const resolvedDest =', start_gen_body)
src = src[:start_gen_body] + '''const msgLower = (message || '').toLowerCase().trim();
  const lang = detectLanguage(message);
  ''' + src[end_gen_body:]

# Replace all getPackageSummary(pkg) calls with getPackageSummary(pkg, lang)
src = re.sub(r'getPackageSummary\(([^,)]+)\)', r'getPackageSummary(\1, lang)', src)

# 4. In generateSmartReply, update specific handlers for Hindi & Hinglish
# Greetings
g_old = '''  // 1. GREETING HANDLER (helo, hello, hi, hey, hy, hola, namaste)
  if (msgLower.match(/^(hi|hello|helo|hey|hy|hola|namaste|good morning|good evening|yo)\\b/i) && msgLower.split(/\\s+/).length <= 4) {
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
  }'''

g_new = '''  // 1. GREETING HANDLER (helo, hello, hi, hey, hy, hola, namaste, नमस्ते, नमस्कार, प्रणाम, हेलो, हाय)
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
  }'''
src = src.replace(g_old, g_new)

# Advance Payment
adv_old = '''  // 2. PAYMENT ADVANCE & USKE BAAD / PAYMENT STAGES
  if (msgLower.match(/\\b(advance.*(baad|after|balance)|(baad|after|balance).*advance|in advance or|advance kitna.*baad|advance payment.*remaining|how can i pay.*advance|advance or uske baad)\\b/i) || (msgLower.includes('advance') && (msgLower.includes('baad') || msgLower.includes('after') || msgLower.includes('balance') || msgLower.includes('pay')))) {'''

adv_new = '''  // 2. PAYMENT ADVANCE & USKE BAAD / PAYMENT STAGES
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
    }'''
src = src.replace(adv_old, adv_new)

# Food / Pure Veg
food_old = '''  // 7. FOOD / PURE VEG / JAIN FOOD / INDIAN MEALS
  if (msgLower.match(/\\b(veg|vegetarian|pure veg|jain|jain food|halal|indian food|indian restaurant|khana|meals|bhojan|breakfast and dinner|food options|meal plan)\\b/i)) {'''

food_new = '''  // 7. FOOD / PURE VEG / JAIN FOOD / INDIAN MEALS
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
    }'''
src = src.replace(food_old, food_new)

# Honeymoon
honey_old = '''  // 8. HONEYMOON / COUPLES / ROMANTIC TRIPS / POOL VILLAS
  if (msgLower.match(/\\b(honeymoon|couple|couples|anniversary|romantic|candlelight|pool villa|private pool|flower bed|honeymooner)\\b/i)) {'''

honey_new = '''  // 8. HONEYMOON / COUPLES / ROMANTIC TRIPS / POOL VILLAS
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
    }'''
src = src.replace(honey_old, honey_new)

# Low budget dinner & night
dinner_old = '''  // 15. Low-Budget Dinner & Nightlife (e.g. "dinner nightt ho my budget is low and for 45 days")
  if (msgLower.match(/\\b(dinner.*(night|low|budget)|night.*(dinner|low|budget)|low budget.*(dinner|night)|budget.*dinner|dinner nightt)\\b/i) || (msgLower.includes('dinner') && (msgLower.includes('low') || msgLower.includes('budget') || msgLower.includes('45') || msgLower.includes('4-5') || msgLower.includes('night')))) {'''

dinner_new = '''  // 15. Low-Budget Dinner & Nightlife (e.g. "dinner nightt ho my budget is low and for 45 days")
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
    }'''
src = src.replace(dinner_old, dinner_new)

# Targeted package query
targ_old = "if (currentPkg && (msgLower.includes('know about') || msgLower.includes('tell me about') || msgLower.includes('package details') || msgLower.includes('overview') || (msgLower.includes('package') && (msgLower.includes('what is included') || msgLower.includes('kya include'))))) {"
targ_new = "const isPkgDetail = msgLower.match(/(know about|tell me about|package details|overview|what is included|kya include|kya kya include|kya shamil|kya kya shamil|ke baare|batao|bataiye|jaanna|jaankari|vivaran|पैकेज|शामिल|जानकारी|विवरण|बताओ|जानना)/i);\n  if (currentPkg && (isPkgDetail || msgLower.includes('package'))) {"
src = src.replace(targ_old, targ_new)

# Affirmation
aff_old = '''  // 19. Affirmation / Ready to book (STRICT: Must NOT be a question or asking for price/packages!)
  const isQuestion = /[?]|^(what|how|why|where|when|which|tell|show|kitna|kya|kaise|kahan|kab)\\b/i.test(msgLower) || /\\b(packages?|price|pricing|cost|per person|hotel|itinerary|place|places|dinner|night)\\b/i.test(msgLower);
  if (!isQuestion && msgLower.match(/^(yes|yep|sure|ok|okay|ha|haan|theek hai|sahi hai|deal|agree|done|send|bhejo)\\b/i) && msgLower.split(/\\s+/).length <= 4) {'''

aff_new = '''  // 19. Affirmation / Ready to book (STRICT: Must NOT be a question or asking for price/packages!)
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
    }'''
src = src.replace(aff_old, aff_new)

# General Fallback
fall_old = '''  // General helpful response without robotic prefix
  return {
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
  };'''

fall_new = '''  // General helpful response without robotic prefix
  if (lang === 'hindi') {
    return {
      activeDestination: null,
      reply: `नमस्ते! मैं आपके सपनों की यात्रा की योजना बनाने में मदद कर सकता हूँ। हमारे पास 22 वेरीफाइड डायरेक्ट DMC पैकेज उपलब्ध हैं:

• 🇹🇭 **थाईलैंड ग्रैंड सिग्नेचर (7 रातें / 8 दिन)**: ₹62,362 (~$745 USD)
• 🏝️ **बाली इंडोनेशिया सिग्नेचर (6 रातें / 7 दिन)**: ₹96,068 (~$1,145 USD) | लैंड पैकेज ₹39,014 (~$464 USD) से
• 🇦🇪 **दुबई हाइलाइट्स और डेजर्ट (4 रातें / 5 दिन)**: ₹42,598 (~$507 USD) (धो डिनर क्रूज़ के साथ)
• 🇬🇪 **जॉर्जिया फ्लैश डील (4 रातें / 5 दिन)**: $300 USD (~₹28,999) (बर्फीला काजबेगी और त्बिलिसी)
• 🇸🇬 **सिंगापुर सिग्नेचर (3 रातें / 4 दिन)**: ₹52,062 (~$620 USD)
• 🇻🇳 **वियतनाम ग्रैंड एक्सपेडिशन (9 रातें / 10 दिन)**: ₹1,48,000 (~$1,762 USD)
• 🌴 **श्रीलंका रामायण टूर (4 रातें / 5 दिन)**: ₹23,064 (~$275 USD) (सभी डिनर सहित)
• 🏔️ **कश्मीर हेवन (4 रातें / 5 दिन)**: ₹21,999 (~$265 USD) (डल झील हाउसबोट और डिनर)

कृपया अपनी पसंदीदा जगह, यात्रा की तारीखें या बजट बताएं!`
    };
  }

  if (lang === 'hinglish') {
    return {
      activeDestination: null,
      reply: `Main aapke dream vacation ko plan karne me help kar sakta hoon! Hamare paas 22 verified direct DMC packages locked wholesale rates par available hain:

• 🇹🇭 **Thailand Grand Signature (7N/8D)**: ₹62,362 (~$745 USD)
• 🏝️ **Bali Indonesia Signature (6N/7D)**: ₹96,068 (~$1,145 USD) | Land ₹39,014 (~$464 USD) se
• 🇦🇪 **Dubai Highlights & Desert (4N/5D)**: ₹42,598 (~$507 USD) (Dhow Dinner Cruise ke sath)
• 🇬🇪 **Georgia Flash Deal (4N/5D)**: $300 USD (~₹28,999) (Snowy Kazbegi & Tbilisi)
• 🇸🇬 **Singapore Signature (3N/4D)**: ₹52,062 (~$620 USD)
• 🇻🇳 **Vietnam Grand Expedition (9N/10D)**: ₹1,48,000 (~$1,762 USD)
• 🌴 **Sri Lanka Ramayana (4N/5D)**: ₹23,064 (~$275 USD) (sab dinners ke sath)
• 🏔️ **Kashmir Heaven (4N/5D)**: ₹21,999 (~$265 USD) (Dal Lake Houseboat & Dinners)

Aap apni destination, dates ya budget share karein!`
    };
  }

  return {
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
  };'''
src = src.replace(fall_old, fall_new)

# Save to all 3 paths
for p in ['chat_engine.js', 'backend/chat_engine.js', 'api/chat_engine.js']:
    with open(p, 'w', encoding='utf-8') as f:
        f.write(src)
    print(f"Successfully generated clean {p}")

print("COMPLETED!")
