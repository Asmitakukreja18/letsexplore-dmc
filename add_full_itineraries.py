# -*- coding: utf-8 -*-
import json
import re

with open('chat_engine.js', 'r', encoding='utf-8') as f:
    engine_code = f.read()

# Comprehensive Day-by-Day Itineraries Dictionary
itineraries_code = '''
const DETAILED_DAY_ITINERARIES = {
  "malaysia-express-4n5d": {
    "title": "Malaysia City & Highlands Escape (4 Nights / 5 Days)",
    "route": "Kuala Lumpur (2N) + Genting Highlands (2N)",
    "hotels": "Ramada Suites by Wyndham / Furama Bukit Bintang KL (2N, 4★) + First World / Resort Hotel Genting (2N, Deluxe)",
    "days": [
      {
        "day": 1,
        "title": "KLIA Airport Arrival & Kuala Lumpur City Tour",
        "desc_en": "Arrive at Kuala Lumpur International Airport (KLIA/KLIA2). Meet your dedicated driver for a 100% private AC transfer to your 4★ central hotel. Check in and relax. Afternoon guided KL Half-Day City Tour: photo stop at iconic Petronas Twin Towers, King's Palace (Istana Negara), National Monument, National Mosque, and KL Tower Observation Deck tickets included. Evening free to explore Bukit Bintang and Jalan Alor street food market.",
        "desc_hi": "कुआलालंपुर इंटरनेशनल एयरपोर्ट (KLIA/KLIA2) पर आगमन। प्राइवेट AC गाड़ी द्वारा आपके 4★ होटल में ट्रांसफर और चेक-इन। दोपहर में गाइडेड सिटी टूर: पेट्रोनास ट्विन टावर्स, किंग्स पैलेस, नेशनल मॉन्यूमेंट, नेशनल मस्जिद और केएल टॉवर ऑब्जर्वेशन डेक टिकट शामिल। शाम को प्रसिद्ध बुकित बिनतांग और जालान अलोर स्ट्रीट फूड मार्केट घूमें।"
      },
      {
        "day": 2,
        "title": "Sunway Lagoon Theme Park (All 6 Parks Included)",
        "desc_en": "Daily buffet breakfast at hotel. Private AC transfer to Sunway Lagoon Theme Park for a full day of non-stop adventure with all 6 parks included: Water Park, Amusement Park, Wildlife Park, Extreme Park, Scream Park, and Nickelodeon Lost Lagoon with 90+ rides. Evening private transfer back to hotel.",
        "desc_hi": "होटल में प्रतिदिन बुफे नाश्ता। सनवे लैगून थीम पार्क के लिए प्राइवेट ट्रांसफर। सभी 6 पार्कों (वाटर पार्क, अम्यूजमेंट पार्क, वाइल्डलाइफ पार्क, एक्सट्रीम पार्क, स्क्रीम पार्क और निकेलोडियन लॉस्ट लैगून) में 90+ रोमांचक राइड्स का आनंद लें। शाम को होटल वापसी।"
      },
      {
        "day": 3,
        "title": "Batu Caves Rainbow Steps & Awana SkyWay to Genting Peak",
        "desc_en": "Buffet breakfast and check-out. En-route stop at world-famous Batu Caves: climb the 272 rainbow steps to the limestone cave temple beside the towering 140ft golden Lord Murugan statue. Board the Awana SkyWay Two-Way Cable Car for breathtaking rainforest aerial views up to 6,000 ft Genting Highlands. Check into First World / Resort Hotel Genting. Afternoon Genting Skytropolis Indoor Theme Park pass included.",
        "desc_hi": "नाश्ता और चेक-आउट। विश्व प्रसिद्ध बाटू केव्स का दौरा: 140 फीट ऊंची स्वर्ण मुरुगन प्रतिमा और 272 रंगीन सीढ़ियां चढ़कर गुफा मंदिर के दर्शन। अवाना स्काईवे केबल कार से बादलों के बीच 6,000 फीट ऊपर जेंटिंग हाईलैंड्स की यात्रा। होटल चेक-इन और दोपहर में जेंटिंग स्काईट्रोपोलिस इनडोर थीम पार्क का आनंद।"
      },
      {
        "day": 4,
        "title": "Genting SkyWorlds Outdoor Theme Park Adventure",
        "desc_en": "Buffet breakfast at resort. Full day access to Genting SkyWorlds Outdoor Theme Park featuring 9 movie & adventure themed worlds (Studio Plaza, Eagle Mountain, Central Park, Rio, Ice Age, Epic, Robots, Andromeda Base) with high-thrill rollercoasters and live entertainment. Afternoon visit to Genting Highlands Premium Outlets for designer duty-free shopping.",
        "desc_hi": "होटल में बुफे नाश्ता। जेंटिंग स्काईवर्ल्ड्स आउटडोर थीम पार्क का पूरा दिन का टिकट: 9 अलग-अलग मूवी और एडवेंचर वर्ल्ड्स (आइस एज, रियो, ईगल माउंटेन आदि) में विश्वस्तरीय रोलरकोस्टर और 3D राइड्स। दोपहर में जेंटिंग प्रीमियम आउटलेट्स पर इंटरनेशनल ब्रांडेड शॉपिंग।"
      },
      {
        "day": 5,
        "title": "Scenic Descent, Putrajaya Capital Tour & Departure",
        "desc_en": "Buffet breakfast and check-out. Return scenic Awana cable car ride down. En-route photo stop at Putrajaya: Malaysia's futuristic federal administrative capital featuring the pink Putra Mosque & Prime Minister complex. Private transfer directly to KLIA/KLIA2 for your return flight home.",
        "desc_hi": "बुफे नाश्ता और चेक-आउट। केबल कार से नीचे वापसी। रास्ते में पुत्राजया का दौरा: मलेशिया की खूबसूरत प्रशासनिक राजधानी, गुलाबी पुत्रा मस्जिद और प्रधानमंत्री कार्यालय के दर्शन। समय पर KLIA एयरपोर्ट के लिए प्राइवेट ट्रांसफर और सुखद यादों के साथ स्वदेश वापसी।"
      }
    ]
  },
  "dubai-super-saver-4n5d": {
    "title": "Dubai Highlights & Desert Dunes (4 Nights / 5 Days)",
    "route": "Dubai City (4N)",
    "hotels": "4★ Luxury City Hotel (Daily Buffet Breakfast)",
    "days": [
      {
        "day": 1,
        "title": "Dubai Arrival & Marina Dhow Luxury Dinner Cruise",
        "desc_en": "Arrive at Dubai International Airport (DXB). Meet our on-ground concierge for 100% private AC transfer to your 4★ hotel. Check in and relax. In the evening, private pickup for the Dubai Marina Dhow Luxury Cruise: 2 hours cruising under illuminated glittering skyscrapers, international 5★ buffet dinner, and live Tanoura folk dance.",
        "desc_hi": "दुबई एयरपोर्ट (DXB) पर आगमन। प्राइवेट AC गाड़ी द्वारा 4★ होटल में ट्रांसफर। शाम को दुबई मरीना लग्जरी धो क्रूज़: गगनचुंबी रोशन इमारतों के बीच 2 घंटे का क्रूज़, भव्य 5★ इंटरनेशनल बुफे डिनर और लाइव तनोउरा डांस शो।"
      },
      {
        "day": 2,
        "title": "Dubai City Tour + Burj Khalifa 124th Floor & Fountains",
        "desc_en": "Buffet breakfast. Half-day guided Dubai City Tour: Dubai Frame photo stop, Zabeel Palace, Jumeirah Beach, Burj Al Arab (photo stop). Afternoon visit to Dubai Mall and Burj Khalifa: observation deck tickets to the 124th & 125th Floors for panoramic sunset views + musical Dubai Fountain show.",
        "desc_hi": "बुफे नाश्ता। गाइडेड दुबई सिटी टूर: दुबई फ्रेम, ज़बील पैलेस, जुमेराह बीच, बुर्ज अल अरब फोटो स्टॉप। दोपहर में दुबई मॉल और बुर्ज खलीफा की 124वीं मंजिल ऑब्जर्वेशन डेक टिकट + दुबई फाउंटेन शो।"
      },
      {
        "day": 3,
        "title": "Gold & Spice Souks + 4x4 Desert Safari & Grand BBQ Dinner",
        "desc_en": "Morning free for Gold Souk and Spice Souk shopping. At 3:00 PM, 4x4 Land Cruiser pickup for the Arabian Desert Safari: extreme red dune bashing, sandboarding, camel rides, sunset photography, belly dancing, fire shows, and a lavish BBQ buffet dinner under desert stars.",
        "desc_hi": "सुबह गोल्ड और स्पाइस सूक में शॉपिंग। दोपहर 3:00 बजे 4x4 लैंड क्रूज़र से डेजर्ट सफारी: रोमांचक रेड ड्यून बैशिंग, सैंडबोर्डिंग, ऊंट की सवारी, बेली डांस, फायर शो और तारों की छांव में भव्य BBQ बुफे डिनर।"
      },
      {
        "day": 4,
        "title": "Miracle Garden & Global Village (Seasonal) or Leisure Shopping",
        "desc_en": "Breakfast at hotel. Day at leisure for shopping at Mall of the Emirates or optional tour to Dubai Miracle Garden (150 million blooming floral sculptures) & Global Village evening international pavilions.",
        "desc_hi": "होटल में नाश्ता। दिन शॉपिंग या मिरेकल गार्डन (15 करोड़ खिले हुए फूलों का पार्क) और ग्लोबल विलेज के अंतरराष्ट्रीय पवेलियन घूमने के लिए स्वतंत्र।"
      },
      {
        "day": 5,
        "title": "Hotel Check-out & Airport Departure",
        "desc_en": "Buffet breakfast. Enjoy morning souvenir shopping. Timely private AC transfer to Dubai International Airport (DXB) for your flight back home.",
        "desc_hi": "नाश्ता और चेक-आउट। प्राइवेट AC गाड़ी से दुबई एयरपोर्ट (DXB) के लिए प्रस्थान और शानदार यादों के साथ विदाई।"
      }
    ]
  },
  "bali-indonesia-signature": {
    "title": "Bali Indonesia Signature Tour (6 Nights / 7 Days)",
    "route": "Kuta/Seminyak Beach Resort (4N) + Ubud Private Pool Villa (2N)",
    "hotels": "4★/5★ Deluxe Beachfront Resort Kuta + 1-Bedroom Private Pool Villa Ubud",
    "days": [
      {
        "day": 1,
        "title": "Denpasar Airport Arrival & Beachfront Resort Check-in",
        "desc_en": "Arrive at Ngurah Rai International Airport (DPS), Denpasar. Traditional Balinese flower garland welcome. Dedicated private SUV transfer to your 4★/5★ beachfront resort in Kuta/Seminyak. Evening walk along Kuta beach sunset.",
        "desc_hi": "बाली (DPS) एयरपोर्ट आगमन। पारंपरिक फूल-माला से भव्य स्वागत। प्राइवेट SUV द्वारा कूटा/सेमिन्याक के 4★/5★ रिसॉर्ट में ट्रांसफर। शाम को खूबसूरत बीच सनसेट का आनंद।"
      },
      {
        "day": 2,
        "title": "Full-Day Nusa Penida West Island Speedboat Tour",
        "desc_en": "Early breakfast. Private transfer to Sanur Harbour. Fast speedboat to Nusa Penida Island: visit world-famous Kelingking T-Rex Cliff, Angel's Billabong natural infinity pool, Broken Beach, and Crystal Bay with Indonesian buffet lunch included.",
        "desc_hi": "सानूर हार्बर से स्पीडबोट द्वारा नुसा पेनिडा आइलैंड की यात्रा: विश्व प्रसिद्ध केलिंगकिंग टी-रेक्स क्लिफ, एंजल्स बिलबॉन्ग, ब्रोकन बीच और क्रिस्टल बे पर स्नोर्कलिंग (बुफे लंच सहित)।"
      },
      {
        "day": 3,
        "title": "Tanjung Benoa Water Sports + Uluwatu Cliff Temple & Kecak Dance",
        "desc_en": "Water sports at Tanjung Benoa beach (Banana Boat ride included; parasailing/jet ski available). Sunset visit to dramatic Uluwatu Cliff Temple perched 70m above crashing waves, followed by the iconic Kecak & Fire Dance show. Jimbaran beach candlelight seafood dinner.",
        "desc_hi": "तंजुंग बेनोआ बीच पर वॉटर स्पोर्ट्स (बनाना बोट शामिल)। 70 मीटर ऊंची चट्टान पर स्थित उलुवातु मंदिर में सनसेट और प्रसिद्ध केचक फायर डांस शो। जिमबरन बीच पर कैंडललाइट डिनर।"
      },
      {
        "day": 4,
        "title": "Transfer to Ubud + Tegenungan Waterfall & Pool Villa Check-in",
        "desc_en": "Breakfast & checkout. Scenic transfer to Ubud: stop at Tegenungan Waterfall and Luwak Coffee Plantation tasting. Check into your Private 1-Bedroom Pool Villa in Ubud with romantic pool decor.",
        "desc_hi": "उबूद के लिए प्रस्थान: रास्ते में तेगेनुंगन वॉटरफॉल और कॉफी बागान का दौरा। उबूद में प्राइवेट 1-बेडरूम पूल विला में चेक-इन और रोमांटिक पूल डेकोरेशन।"
      },
      {
        "day": 5,
        "title": "Floating Breakfast + 90-Min ATV Quad Biking & Ayung River Rafting",
        "desc_en": "Morning Instagram-famous Floating Breakfast served in your private villa pool! 90-minute ATV Quad Biking through jungle caves & waterfalls + 3-Hour thrilling Ayung River White Water Rafting with buffet lunch + Bali Jungle Swing.",
        "desc_hi": "प्राइवेट विला पूल में फ्लोटिंग ब्रेकफास्ट! 90 मिनट ATV क्वाड बाइकिंग (गुफाओं और झरनों के बीच) + 3 घंटे अयुंग रिवर राफ्टिंग (बुफे लंच सहित) + बाली जंगल स्विंग।"
      },
      {
        "day": 6,
        "title": "Ubud Monkey Forest, Tirta Empul & Traditional Art Market",
        "desc_en": "Explore the sacred Ubud Monkey Forest sanctuary, holy spring water temple Tirta Empul, and the bustling Ubud Traditional Art Market for handcrafted souvenirs, paintings, and rattan bags.",
        "desc_hi": "उबूद मंकी फॉरेस्ट, पवित्र जल मंदिर तीर्थ एम्पुल और स्थानीय कला व हैंडीक्राफ्ट के लिए उबूद ट्रेडिशनल आर्ट मार्केट का भ्रमण।"
      },
      {
        "day": 7,
        "title": "Villa Breakfast & Airport Departure",
        "desc_en": "Leisure morning breakfast in villa. Dedicated private airport transfer to DPS Airport for your departure flight.",
        "desc_hi": "विला में नाश्ता, आराम और समय पर बाली एयरपोर्ट के लिए प्राइवेट ट्रांसफर।"
      }
    ]
  },
  "thailand-grand-signature": {
    "title": "Thailand Grand Signature (7 Nights / 8 Days)",
    "route": "Phuket (3N) + Krabi (2N) + Bangkok (2N)",
    "hotels": "4★/5★ Beachfront Resorts in Phuket & Krabi + 4★ Central Bangkok Hotel",
    "days": [
      {
        "day": 1,
        "title": "Phuket Arrival & Patong Beach Nightlife",
        "desc_en": "Arrive at Phuket International Airport (HKT). Private AC transfer to 4★/5★ Patong Beach Resort. Evening free to enjoy lively Bangla Road nightlife and night markets.",
        "desc_hi": "फुकेत एयरपोर्ट आगमन। पातोंग बीच रिसॉर्ट में प्राइवेट ट्रांसफर। शाम को बांग्ला रोड की प्रसिद्ध नाइटलाइफ़ और नाइट मार्केट का आनंद।"
      },
      {
        "day": 2,
        "title": "Full-Day Phi Phi Island Speedboat Cruise with Lunch",
        "desc_en": "Speedboat cruise to Phi Phi Islands: Maya Bay (The Beach movie setting), Pileh Lagoon emerald swimming, Viking Cave, Monkey Beach, deep sea snorkeling & international buffet lunch.",
        "desc_hi": "स्पीडबोट द्वारा फी फी आइलैंड टूर: माया बे, पिलेह लैगून में तैराकी, वाइकिंग केव, मंकी बीच और कोरल रीफ स्नोर्कलिंग (बुफे लंच सहित)।"
      },
      {
        "day": 3,
        "title": "Phuket City Tour & Big Buddha",
        "desc_en": "Guided tour of Phuket: Big Buddha on Nakkerd Hill, Wat Chalong Temple, Karon Viewpoint, Cashew Nut factory & Old Phuket Town Sino-Portuguese streets.",
        "desc_hi": "फुकेत सिटी टूर: बिग बुद्ध, वाट चालोंग मंदिर, कारोन व्यू पॉइंट और ओल्ड फुकेत टाउन की ऐतिहासिक सड़कें।"
      },
      {
        "day": 4,
        "title": "Scenic Highway Drive to Krabi Beach",
        "desc_en": "Check out and private AC highway drive from Phuket to Krabi. Check into Krabi Ao Nang beachfront resort. Relax on the stunning cliff-backed beach.",
        "desc_hi": "फुकेत से क्राबी के लिए खूबसूरत हाईवे ड्राइव। क्राबी आओ नांग बीच रिसॉर्ट में चेक-इन और सनसेट का आनंद।"
      },
      {
        "day": 5,
        "title": "Krabi 4-Island Speedboat Tour & Coral Reefs",
        "desc_en": "Full day Krabi 4-Island tour: Phra Nang Cave Beach (Princess Cave), Tup Island sandbar walk, Chicken Island snorkeling, and Poda Island picnic lunch.",
        "desc_hi": "क्राबी 4-आइलैंड स्पीडबोट टूर: फ्रा नांग केव बीच, टुप आइलैंड सैंडबार, चिकन आइलैंड और पोडा आइलैंड पर पिकनिक लंच व स्नोर्कलिंग।"
      },
      {
        "day": 6,
        "title": "Flight to Bangkok & Chao Phraya Luxury Dinner Cruise",
        "desc_en": "Fly to Bangkok. Check into central 4★ Bangkok hotel. Evening Chao Phraya River Luxury Dinner Cruise: 5★ buffet, live band, and illuminated riverfront temples.",
        "desc_hi": "बैंकॉक के लिए फ्लाइट। होटल चेक-इन। शाम को चाओ फ्राया रिवर लग्जरी डिनर क्रूज़: लाइव म्यूजिक और जगमगाते मंदिरों के बीच भव्य डिनर।"
      },
      {
        "day": 7,
        "title": "Bangkok City Temples & Shopping",
        "desc_en": "Bangkok Temple Tour: Golden Buddha (Wat Traimit), Marble Temple (Wat Benchamabophit), Gems Gallery + afternoon shopping at Pratunam & MBK Centre.",
        "desc_hi": "बैंकॉक मंदिर दर्शन: गोल्डन बुद्ध, मार्बल मंदिर, जेम्स गैलरी और प्रतुनाम व एमबीके मॉल में शॉपिंग।"
      },
      {
        "day": 8,
        "title": "Hotel Check-out & Suvarnabhumi Airport Departure",
        "desc_en": "Breakfast at hotel. Private transfer to BKK Airport for your return flight home.",
        "desc_hi": "होटल में नाश्ता, चेक-आउट और बैंकॉक एयरपोर्ट के लिए प्राइवेट ट्रांसफर।"
      }
    ]
  },
  "malaysia-bali-combo": {
    "title": "Malaysia with Bali Grand Combo Tour (7 Nights / 8 Days)",
    "route": "Kuala Lumpur (2N) + Bali Beach & Ubud Pool Villa (5N)",
    "hotels": "4★ Furama Bukit Bintang KL + 4★ Beach Resort Kuta + 1-Bedroom Private Pool Villa Ubud",
    "days": [
      {
        "day": 1,
        "title": "Arrival in Kuala Lumpur & Petronas Twin Towers",
        "desc_en": "Arrive at KLIA Airport. Private AC transfer to central 4★ hotel. Half-day city tour covering Petronas Twin Towers, King's Palace, and Bukit Bintang.",
        "desc_hi": "कुआलालंपुर (KLIA) आगमन। 4★ होटल में प्राइवेट ट्रांसफर। पेट्रोनास ट्विन टावर्स, किंग्स पैलेस और बुकित बिनतांग का टूर।"
      },
      {
        "day": 2,
        "title": "Batu Caves & Genting Highlands Cable Car",
        "desc_en": "Batu Caves 272 rainbow steps tour + Awana Skyway cable car up to Genting Highlands mountain peak and Skytropolis indoor theme park.",
        "desc_hi": "बाटू केव्स मुरुगन मंदिर और अवाना स्काईवे केबल कार से जेंटिंग हाईलैंड्स की यात्रा।"
      },
      {
        "day": 3,
        "title": "Flight to Bali & Kuta Beach Resort Welcome",
        "desc_en": "Flight from Kuala Lumpur to Bali (DPS). Flower garland welcome and private transfer to beach resort in Kuta. Evening beach sunset.",
        "desc_hi": "कुआलालंपुर से बाली के लिए फ्लाइट। पारंपरिक स्वागत और कूटा बीच रिसॉर्ट में चेक-इन।"
      },
      {
        "day": 4,
        "title": "Nusa Penida West Island Speedboat Expedition",
        "desc_en": "Fast speedboat to Nusa Penida: Kelingking T-Rex cliff, Angel's Billabong, Broken Beach & snorkeling at Crystal Bay with lunch.",
        "desc_hi": "नुसा पेनिडा आइलैंड टूर: केलिंगकिंग टी-रेक्स क्लिफ, एंजल्स बिलबॉन्ग और क्रिस्टल बे स्नोर्कलिंग।"
      },
      {
        "day": 5,
        "title": "Tanjung Benoa Watersports + Uluwatu Cliff Kecak Fire Dance",
        "desc_en": "Banana boat watersports at Benoa beach + Uluwatu sunset cliff temple and Kecak fire dance show + Jimbaran candlelight dinner.",
        "desc_hi": "तंजुंग बेनोआ वॉटर स्पोर्ट्स + उलुवातु क्लिफ सनसेट और केचक फायर डांस + जिमबरन डिनर।"
      },
      {
        "day": 6,
        "title": "Private Pool Villa Check-in + ATV Quad Biking & Rafting",
        "desc_en": "Transfer to Ubud Private Pool Villa. 90-min ATV Quad Biking through waterfalls + Ayung River white water rafting + Bali jungle swing.",
        "desc_hi": "उबूद में प्राइवेट पूल विला चेक-इन। 90 मिनट ATV क्वाड बाइकिंग + अयुंग रिवर राफ्टिंग + बाली स्विंग।"
      },
      {
        "day": 7,
        "title": "Floating Breakfast in Pool & Ubud Cultural Tour",
        "desc_en": "Floating breakfast in private pool. Visit Ubud Monkey Forest, Tirta Empul holy spring water temple, and art handicraft market.",
        "desc_hi": "प्राइवेट पूल में फ्लोटिंग ब्रेकफास्ट। उबूद मंकी फॉरेस्ट, तीर्थ एम्पुल मंदिर और आर्ट मार्केट दर्शन।"
      },
      {
        "day": 8,
        "title": "Breakfast in Villa & Departure to Denpasar Airport",
        "desc_en": "Breakfast in villa. Private AC transfer to DPS Airport for flight home with memories of two iconic countries!",
        "desc_hi": "विला में नाश्ता और बाली एयरपोर्ट के लिए प्राइवेट ट्रांसफर।"
      }
    ]
  },
  "georgia-magic-300": {
    "title": "Georgia Flash Deal (4 Nights / 5 Days - $300 USD Special)",
    "route": "Tbilisi (4N) with Gudauri & Kazbegi Snow Excursions",
    "hotels": "4★ Boutique Hotel in Old Tbilisi (Daily Buffet Breakfast)",
    "days": [
      {
        "day": 1,
        "title": "Tbilisi Arrival & Old Town Cable Car Tour",
        "desc_en": "Arrive at Tbilisi Airport. Private transfer to 4★ Old Tbilisi Hotel. Evening walk across illuminated Bridge of Peace, Rike Park, and Narikala Fortress cable car ride.",
        "desc_hi": "त्बिलिसी एयरपोर्ट आगमन। 4★ होटल में प्राइवेट ट्रांसफर। ब्रिज ऑफ पीस, रिके पार्क और नरीकला फोर्ट्रेस केबल कार राइड।"
      },
      {
        "day": 2,
        "title": "Mtskheta Ancient Capital, Jvari & Ananuri Fortress",
        "desc_en": "Visit UNESCO Jvari Monastery overlooking river confluence, drive along Georgian Military Highway, and explore 17th-century Ananuri Fortress over Zhinvali reservoir.",
        "desc_hi": "यूनेस्को जवारी मॉनेस्ट्री, जॉर्जियन मिलिट्री हाईवे और झिनवाली लेक पर अनानुरी किले का भ्रमण।"
      },
      {
        "day": 3,
        "title": "Gudauri Ski Resort & 4x4 Kazbegi Mountain Expedition",
        "desc_en": "Visit snowy Gudauri Ski Resort & Friendship Monument. Take extreme 4x4 mountain jeeps up to Gergeti Trinity Church situated at 2,170m under majestic Mount Kazbek.",
        "desc_hi": "गुदौरी स्की रिसॉर्ट और स्नो फ्रेंडशिप मॉन्यूमेंट। 4x4 माउंटेन जीप द्वारा 2,170 मीटर ऊंचाई पर स्थित गेर्गेटी ट्रिनिटी चर्च और काजबेगी बर्फ के दीदार।"
      },
      {
        "day": 4,
        "title": "Kakheti Wine Valley & Sighnaghi City of Love",
        "desc_en": "Explore Kakheti: Bodbe Monastery, Sighnaghi fortified town with panoramic Alazani Valley views, and traditional Georgian wine cellar tasting with Khachapuri lunch.",
        "desc_hi": "काखेती वाइन रीजन: बोडबे मॉनेस्ट्री, सिग्नागी 'सिटी ऑफ लव' और पारंपरिक जॉर्जियन वाइन सेलर टेस्टिंग।"
      },
      {
        "day": 5,
        "title": "Sulfur Baths District & Airport Departure",
        "desc_en": "Stroll through historic Abanotubani sulfur baths district, souvenir shopping, and timely private transfer to Tbilisi Airport for your flight.",
        "desc_hi": "सल्फर बाथ डिस्ट्रिक्ट का भ्रमण, सोवेनियर शॉपिंग और त्बिलिसी एयरपोर्ट के लिए प्राइवेट ट्रांसफर।"
      }
    ]
  },
  "kashmir-paradise-21k": {
    "title": "Kashmir Heaven on Earth (4 Nights / 5 Days)",
    "route": "Dal Lake Luxury Houseboat (1N) + Srinagar Hotel (3N)",
    "hotels": "Dal Lake Luxury Houseboat + 4★ Srinagar Hotel (Breakfast & Dinner Included - MAP Plan)",
    "days": [
      {
        "day": 1,
        "title": "Srinagar Arrival & Dal Lake Sunset Shikara Ride",
        "desc_en": "Arrive at Srinagar Airport. Meet dedicated heated cab driver; transfer to Luxury Houseboat on Dal Lake. Welcome Kashmiri Kahwa. 1-Hour Sunset Shikara Ride. Chef-prepared dinner on houseboat.",
        "desc_hi": "श्रीनगर एयरपोर्ट आगमन। डल झील पर लग्जरी हाउसबोट में ट्रांसफर। कश्मीरी कहवा और 1 घंटे की सनसेट शिकारा राइड। हाउसबोट पर स्वादिष्ट डिनर।"
      },
      {
        "day": 2,
        "title": "Gulmarg Snow Gondola Cable Car Ride",
        "desc_en": "Excursion to Gulmarg: scenic pine-covered Tangmarg route. Gondola Phase 1 snow ride over powdery white slopes. Enjoy skiing, sledge rides, and return to Srinagar hotel for dinner.",
        "desc_hi": "गुलमर्ग स्नो टूर: गोंडोला फेज़ 1 केबल कार से बर्फीली चोटियों की यात्रा। स्कीइंग, स्लेज राइड्स और होटल वापसी (डिनर शामिल)।"
      },
      {
        "day": 3,
        "title": "Pahalgam Valley & Betaab Valley Excursion",
        "desc_en": "Drive along saffron fields of Pampore and Awantipora ruins to Pahalgam 'Valley of Shepherds'. Visit Betaab Valley, Aru Valley, and stroll along Lidder River. Return for dinner at hotel.",
        "desc_hi": "पहलगाम टूर: केसर के खेत, बेताब वैली, अरू वैली और लिद्दर नदी के खूबसूरत नजारे (होटल में डिनर शामिल)।"
      },
      {
        "day": 4,
        "title": "Srinagar Mughal Gardens & Shankaracharya Temple",
        "desc_en": "Tour of Mughal Gardens: Nishat Bagh, Shalimar Bagh, Chashme Shahi, and hilltop Shankaracharya Temple with panoramic Dal Lake view. Evening dry fruit and Pashmina shopping.",
        "desc_hi": "श्रीनगर मुग़ल गार्डन टूर: निशात बाग, शालीमार बाग, चश्मा शाही और शंकराचार्य मंदिर दर्शन। पश्मीना और कश्मीरी ड्राई फ्रूट शॉपिंग।"
      },
      {
        "day": 5,
        "title": "Hotel Check-out & Srinagar Airport Departure",
        "desc_en": "Buffet breakfast at hotel. Private cab transfer to Srinagar Airport for your flight back home.",
        "desc_hi": "होटल में नाश्ता और श्रीनगर एयरपोर्ट के लिए प्राइवेट कैब ट्रांसफर।"
      }
    ]
  }
};

function getPackageItinerary(pkg, lang = 'english') {
  const id = pkg.id_code || '';
  const data = DETAILED_DAY_ITINERARIES[id];
  
  if (data) {
    if (lang === 'hindi') {
      const daysText = data.days.map(d => `📅 **दिन ${d.day}: ${d.title}**\\n• ${d.desc_hi}`).join('\\n\\n');
      return `🗺️ **${pkg.name} (${pkg.duration}) का विस्तृत दिन-प्रतिदिन टूर प्लान (Itinerary)**:

• **रूट**: ${data.route}
• **होटल**: ${data.hotels}

${daysText}

---
💰 **पैकेज दर**: ₹${pkg.price_inr.toLocaleString('en-IN')} (~$${pkg.price_usd} USD) प्रति व्यक्ति
✅ **शामिल**: होटल, प्रतिदिन नाश्ता, सभी प्राइवेट ट्रांसफर और प्रवेश टिकट।
📲 [**व्हाट्सएप (+91 80075 86871) पर यह टूर बुक या कस्टमाइज करें**](https://wa.me/918007586871?text=नमस्ते%20Lets%20Explore%20DMC,%20कृपया%20${encodeURIComponent(pkg.name)}%20का%20बुकिंग%20शेड्यूल%20बताएं)`;
    }

    if (lang === 'hinglish') {
      const daysText = data.days.map(d => `📅 **Day ${d.day}: ${d.title}**\\n• ${d.desc_en}`).join('\\n\\n');
      return `🗺️ **${pkg.name} (${pkg.duration}) ka Detailed Day-by-Day Itinerary**:

• **Route**: ${data.route}
• **Hotels**: ${data.hotels}

${daysText}

---
💰 **All-Inclusive Rate**: ₹${pkg.price_inr.toLocaleString('en-IN')} (~$${pkg.price_usd} USD) per person
✅ **Included**: 4★ Hotels, Daily Breakfast, 100% Private AC Transfers & Sightseeing Passes.
📲 [**WhatsApp (+91 80075 86871) par customized quote lock karein**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20lock%20quote%20for%20${encodeURIComponent(pkg.name)})`;
    }

    const daysText = data.days.map(d => `📅 **Day ${d.day}: ${d.title}**\\n• ${d.desc_en}`).join('\\n\\n');
    return `🗺️ **Complete Day-by-Day Itinerary for ${pkg.name} (${pkg.duration})**:

• **Route**: ${data.route}
• **Hotels**: ${data.hotels}

${daysText}

---
💰 **Wholesale DMC Rate**: INR ${pkg.price_inr.toLocaleString('en-IN')} (~$${pkg.price_usd} USD) per person
✅ **Included**: Hotels, Daily Breakfast, 100% Private AC Transfers & Sightseeing Passes.
📲 [**Lock This Itinerary on WhatsApp (+91 80075 86871)**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20lock%20quote%20for%20${encodeURIComponent(pkg.name)})`;
  }

  // Fallback for packages where day-by-day is derived from highlights
  const parts = (pkg.highlights || '').split(/,\\s*|\\.\\s*/).filter(p => p.trim().length > 10);
  const derivedDays = parts.slice(0, 5).map((p, i) => `📅 **Day ${i + 1}**: ${p.trim()}`).join('\\n\\n');

  return `🗺️ **Detailed Itinerary for ${pkg.name} (${pkg.duration})**:

• **Route**: ${pkg.destination}
• **Hotels**: ${pkg.hotels}

${derivedDays}

---
💰 **Rate**: INR ${pkg.price_inr.toLocaleString('en-IN')} (~$${pkg.price_usd} USD) per person
📲 [**Lock Rate on WhatsApp (+91 80075 86871)**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20lock%20quote%20for%20${encodeURIComponent(pkg.name)})`;
}
'''

# Insert itineraries_code right before generateSmartReply
gen_pos = engine_code.find('function generateSmartReply(')
engine_code = engine_code[:gen_pos] + itineraries_code + '\n\n' + engine_code[gen_pos:]

# Update the itinerary query check in generateSmartReply
old_itin_block = engine_code[engine_code.find('// Itinerary / Sightseeing / Places query'):engine_code.find('// Flights query')]

new_itin_block = '''// Itinerary / Sightseeing / Places query (Provide FULL DAY-BY-DAY Itinerary directly in chat)
    const isItineraryQuery = msgLower.match(/\\b(itinerary|iternrary|schedule|day by day|day wise|days plan|sightseeing|places|place|visit|kya dekhenge|activities|plan|din ka plan|itinerary batao|detailed itinerary|share itinerary|share detailed itinerary)\\b/i) ||
      msgLower.includes('itinerary') || msgLower.includes('आइटिनरेरी') || msgLower.includes('दिन का प्लान') || msgLower.includes('टूर प्लान');

    if (isItineraryQuery) {
      return {
        activeDestination: resolvedDest,
        reply: getPackageItinerary(currentPkg, lang)
      };
    }

    '''

engine_code = engine_code.replace(old_itin_block, new_itin_block)

# Also check top of generateSmartReply: if user explicitly says "share detailed itinerary for [dest]"
# even before active package is set, handle it directly with getPackageItinerary!
itin_top_check = '''  // Direct Itinerary Query with destination mentioned
  if (resolvedDest && PACKAGES_KNOWLEDGE[resolvedDest] && (msgLower.includes('itinerary') || msgLower.includes('day by day') || msgLower.includes('plan') || msgLower.includes('schedule') || msgLower.includes('आइटिनरेरी') || msgLower.includes('दिन का प्लान'))) {
    return {
      activeDestination: resolvedDest,
      reply: getPackageItinerary(PACKAGES_KNOWLEDGE[resolvedDest], lang)
    };
  }
'''

body_pos = engine_code.find('const currentPkg = resolvedDest ? PACKAGES_KNOWLEDGE[resolvedDest] : null;')
engine_code = engine_code[:body_pos + len('const currentPkg = resolvedDest ? PACKAGES_KNOWLEDGE[resolvedDest] : null;\n')] + '\n' + itin_top_check + '\n' + engine_code[body_pos + len('const currentPkg = resolvedDest ? PACKAGES_KNOWLEDGE[resolvedDest] : null;\n'):]

# Save to all 3 paths
for p in ['chat_engine.js', 'backend/chat_engine.js', 'api/chat_engine.js']:
    with open(p, 'w', encoding='utf-8') as f:
        f.write(engine_code)
    print(f"Updated {p} with complete day-by-day itineraries!")

print("All engines now provide FULL DAY-BY-DAY ITINERARIES directly in chat!")
