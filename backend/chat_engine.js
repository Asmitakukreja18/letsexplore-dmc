/**
 * Let's Explore DMC — AI Chat Engine & Persistent Memory System
 * Features:
 *  - 22 Verified Official Vouchers (Dual INR & USD rates)
 *  - Conversational NLP (Dinner, Nightlife, Low Budget, 4-5 Days, Greetings)
 *  - Zero robotic prefix (No 'Atlas AI Concierge:')
 *  - Multi-Turn Memory Tracking across 30 turns
 */

const PACKAGES_KNOWLEDGE = {
  "malaysia-bali-combo": {
    "id_code": "malaysia-bali-combo",
    "name": "Malaysia with Bali Grand Combo Tour",
    "duration": "7 Nights / 8 Days",
    "destination": "Kuala Lumpur (1N) + Bali Kuta (4N) + Ubud Villa (2N)",
    "pax": "4 Adults",
    "trip_id": "LEDMC1048820",
    "lead_guest": "Mohit Kodwani",
    "price_inr": 122138,
    "price_usd": 1454,
    "total_inr": 488552,
    "land_inr": 58999,
    "hotels": "Ibis Styles Kuala Lumpur (1N, 3\u2605 Standard, Breakfast) + Kuta Beach Club Hotel (4N, 4\u2605 Deluxe, Breakfast) + Maharaja Villa Ubud (2N, 4\u2605 1-Bedroom Private Pool Villa, Breakfast)",
    "flights": "Batik Air OD-216 (Mumbai to KL), Batik Air OD-171 (KL to Bali), Vietjet VJ-894 (Bali to Ho Chi Minh), Vietjet VJ-1803 (Ho Chi Minh to Hyderabad)",
    "highlights": "Kuala Lumpur City Tour & Petronas Twin Towers, Uluwatu Cliff Sunset & Kecak Fire Dance, Handara Gate + Ulun Danu Beratan + Tanah Lot, Nusa Penida West Speedboat Tour (Kelingking Beach, Angel's Billabong, Snorkeling), 90-min ATV Quad Biking + Bali Jungle Swing, Lempuyang Gate of Heaven & Tirta Gangga Water Palace.",
    "inclusions": "Flights & Visa clearances, 7N Hotel/Villa stays with Daily Breakfast, 100% Private AC Transfers, Speedboat to Nusa Penida, 90-min ATV + Swings, All Sightseeing & Temple Entrance Tickets.",
    "exclusions": "Daily Dinners, Bali Tourism Levy (IDR 150,000/person), Personal expenses & Tips.",
    "badge": "Combo Deal \ud83c\uddf2\ud83c\uddfe\ud83c\uddee\ud83c\udde9"
  },
  "thailand-grand-signature": {
    "id_code": "thailand-grand-signature",
    "name": "Thailand Grand Signature Tour",
    "duration": "7 Nights / 8 Days",
    "destination": "Phuket (3N) + Krabi (2N) + Bangkok (2N)",
    "pax": "2 Adults",
    "trip_id": "TVY448657",
    "lead_guest": "Mohit Kodwani / Rajesh Chawla",
    "price_inr": 62362,
    "price_usd": 745,
    "total_inr": 124724,
    "land_inr": 42999,
    "hotels": "Panwaburi Beachfront Resort Phuket (3N, 4\u2605 Deluxe, Breakfast) + Aonang Paradise Resort Krabi (2N, 4\u2605 Deluxe Pool View, Breakfast) + Platinum Suite Bangkok (2N, 4\u2605 Superior Premium, Breakfast)",
    "flights": "Domestic Krabi to Bangkok Flight included",
    "highlights": "Phuket City Tour (Big Buddha, Wat Chalong) + Tiger Park + Phuket FantaSea Cultural Show & Grand Buffet Dinner, Full-Day Phi Phi Island Tour by Big Boat (Maya Bay, Pileh Lagoon + Lunch), Krabi 4-Island Tour by Longtail boat with Picnic Lunch, Evening Chao Phraya River Luxury Dinner Cruise, Bangkok City Tour (Golden Buddha) + King Power Mahanakhon 78th Floor Glass Skywalk, Safari World & Marine Park with Lunch & Shows.",
    "inclusions": "7 Nights 4\u2605 Deluxe Resort stays with Daily Breakfast, 100% Private AC Transfers throughout, Phi Phi Island Big Boat Tour with National Park fees & lunch, Krabi 4-Island tour with lunch, Phuket FantaSea Show & Dinner, Chao Phraya Dinner Cruise, Mahanakhon Skywalk pass, Safari World admission with buffet lunch.",
    "exclusions": "Daily Dinners (except Phuket FantaSea & Dinner Cruise), Personal expenses & Travel Insurance.",
    "badge": "Flagship \ud83c\uddf9\ud83c\udded"
  },
  "bali-indonesia-signature": {
    "id_code": "bali-indonesia-signature",
    "name": "Bali Indonesia Signature Tour",
    "duration": "6 Nights / 7 Days",
    "destination": "Kuta Beach (4N) + Ubud Private Pool Villa (2N)",
    "pax": "2 Adults",
    "trip_id": "LEDMC1024111",
    "lead_guest": "Mohit Kodwani",
    "price_inr": 96068,
    "price_usd": 1145,
    "total_inr": 192136,
    "land_inr": 48999,
    "hotels": "Kuta Beach Club Hotel (4N, 4\u2605 Premium, 1 Deluxe Room, Breakfast) + Alam Ubud Culture Villas & Residences (2N, 4\u2605 Premium, 1-Bedroom Pool Villa, Breakfast)",
    "flights": "Return IndiGo Mumbai \u2194 Bali Direct Flights included (6E-1607 / 6E-1608)",
    "highlights": "Flower garland arrival welcome, Half-Day Uluwatu Cliff Temple Sunset & Kecak Dance Show, Full-Day Handara Iconic Gate + Ulun Danu Floating Temple + Tanah Lot Temple Sunset, Full-Day Nusa Penida West Speedboat Tour (Kelingking T-Rex Beach, Angel's Billabong, Broken Beach + Snorkeling & Canoeing), 90-min ATV Quad Biking + 3-hr Ayung River Rafting with Lunch + Bali Jungle Swing (Unlimited Swings & Nests), Full-Day Lempuyang Gate of Heaven + Tirta Gangga + Black Sand Beach.",
    "inclusions": "Return IndiGo Flights & Bali 30-Day e-VOA Visa, 6N Accommodations (4N Kuta + 2N Ubud Pool Villa) with Daily Breakfast, 100% Private SUV vehicle with dedicated driver, Nusa Penida private car & speedboat, 90-min ATV + Ayung Rafting with lunch + Swings, All entry tickets & taxes.",
    "exclusions": "Daily Dinners, Bali Tourism Levy (IDR 150,000/person), Nusa Penida retribution (IDR 25,000/person), Personal expenses.",
    "badge": "Bestseller \ud83c\udfdd\ufe0f"
  },
  "singapore-signature-3n4d": {
    "id_code": "singapore-signature-3n4d",
    "name": "Singapore Signature Experience",
    "duration": "3 Nights / 4 Days",
    "destination": "Singapore City & Sentosa Island",
    "pax": "2 Adults",
    "trip_id": "LEDMC1032890",
    "lead_guest": "Shyam Lalwani",
    "price_inr": 52062,
    "price_usd": 620,
    "total_inr": 104124,
    "land_inr": 36999,
    "hotels": "Novotel Singapore on Stevens / Similar (3N, 4\u2605 Premium, Deluxe City Room, Daily Breakfast)",
    "flights": "Available on request from Mumbai/Delhi",
    "highlights": "100% Private Changi Airport Transfers, Half-Day Singapore City Tour + Singapore Flyer (Little India, Merlion Park), Marina Bay Sands (MBS) Skypark Observation Deck + Gardens by the Bay (Flower Dome & Cloud Forest), Full-Day Universal Studios Singapore Pass with transfers (Transformers, Battlestar Galactica, Jurassic Park).",
    "inclusions": "3 Nights 4\u2605 Hotel with Daily Buffet Breakfast, 100% Private Airport Transfers, Universal Studios Singapore 1-Day Pass with transfers, Singapore Flyer & City Tour, MBS Skypark & Gardens by the Bay admissions.",
    "exclusions": "International Flights, Singapore Visa, Dinners, Hotel security deposit.",
    "badge": "City Special \ud83c\uddf8\ud83c\uddec"
  },
  "singapore-family-4n5d": {
    "id_code": "singapore-family-4n5d",
    "name": "Singapore Family Extravaganza",
    "duration": "4 Nights / 5 Days",
    "destination": "Singapore City, Sentosa & Marina Bay",
    "pax": "6 Adults",
    "trip_id": "LEDMC1143890",
    "lead_guest": "Pax Trip (Group of 6)",
    "price_inr": 58563,
    "price_usd": 697,
    "total_inr": 351378,
    "land_inr": 41999,
    "hotels": "V Hotel Lavender / Hotel Boss / Furama Riverfront (4N, 4\u2605 Standard, Daily Breakfast)",
    "flights": "Available on request",
    "highlights": "Changi Jewel Tour, Night Safari with Tram Ride & Creature of the Night Show, Sentosa Cable Car Skypass + Madame Tussauds (4-in-1), Wings of Time Sunset Laser Show, Universal Studios Singapore Full-Day, Gardens by the Bay.",
    "inclusions": "4 Nights 4\u2605 Hotel with Breakfast, Roundtrip Airport Transfers, Night Safari, Sentosa Island Package with Wings of Time, Universal Studios Full-Day Pass.",
    "exclusions": "Airfare, Visa, Dinners, Personal expenses.",
    "badge": "Family Favorite \ud83c\uddf8\ud83c\uddec"
  },
  "singapore-grand-6n7d": {
    "id_code": "singapore-grand-6n7d",
    "name": "Singapore Grand Leisure & Sentosa",
    "duration": "6 Nights / 7 Days",
    "destination": "Singapore City, Sentosa, Mandai & Marina Bay",
    "pax": "3 Adults",
    "trip_id": "LEDMC1134589",
    "lead_guest": "Chhabra Dental Clinic",
    "price_inr": 82800,
    "price_usd": 986,
    "total_inr": 248400,
    "land_inr": 59999,
    "hotels": "Orchard Rendezvous Hotel / Grand Copthorne Waterfront (6N, 4\u2605 Superior, Daily Breakfast)",
    "flights": "Direct Air India / Singapore Airlines options",
    "highlights": "Universal Studios VIP experience, S.E.A. Aquarium, Singapore Zoo & Bird Paradise Mandai, MBS Skypark Observation, Marina Bay River Cruise, Singapore Flyer, Sentosa Cable Car & Luge Skyride.",
    "inclusions": "6 Nights 4\u2605 Hotel stay with breakfast, Private AC Transfers, Universal Studios Singapore, S.E.A. Aquarium, Bird Paradise, Night Safari, Sentosa Cable Car, MBS Skypark.",
    "exclusions": "Flights, Visa, Dinners, Tips.",
    "badge": "Grand Tour \ud83c\uddf8\ud83c\uddec"
  },
  "vietnam-grand-expedition": {
    "id_code": "vietnam-grand-expedition",
    "name": "Vietnam Grand Expedition",
    "duration": "9 Nights / 10 Days",
    "destination": "Sapa (2N) + Hanoi (1N) + Da Nang (3N) + Phu Quoc (3N)",
    "pax": "4 Adults",
    "trip_id": "LEDMC1134219",
    "lead_guest": "Ashutosh Sahu",
    "price_inr": 148000,
    "price_usd": 1762,
    "total_inr": 592000,
    "land_inr": 69999,
    "hotels": "Sapagreen Hotel Sapa (2N, 3\u2605 Superior) + TK123 Hotel Hanoi (1N, 3\u2605 Superior) + Cosmos Hotel Da Nang (3N, 4\u2605 Deluxe City View) + Gaia Hotel Phu Quoc (3N, 4\u2605 Standard)",
    "flights": "Domestic flights included: Hanoi to Da Nang & Da Nang to Phu Quoc",
    "highlights": "Fansipan Peak Cable Car ('Roof of Indochina' 3,143m) & Rong May Glass Bridge at O Quy Ho Pass, Ninh Binh Ancient Capital Hoa Lu + Tam Coc boat caves, Da Nang Marble Mountain & Cam Thanh Coconut Jungle basket boat, Hoi An Ancient Town lantern boat on Thu Bon River, Ba Na Hills Golden Bridge (Giant Stone Hands) & Fantasy Park, Phu Quoc Sunset Town, Kiss Bridge & Symphony of the Sea show, Vinpearl Safari (largest open zoo) + VinWonders theme park & aquarium, 4-Island Speedboat Tour + Hon Thom 8km World's Longest Overwater Cable Car & Aquatopia Waterpark with Buffet Lunch.",
    "inclusions": "9 Nights Hotel Stays with Daily Breakfast, Private 7-Seater AC Transfers throughout, Domestic flights, All Cable Car Tickets (Fansipan, Ba Na Hills, Hon Thom), 4-Island Tour with Buffet Lunch, Vinpearl Safari & VinWonders all-access passes.",
    "exclusions": "Daily Dinners, Vietnam Visa, GST 5% & TCS, personal expenses.",
    "badge": "Epic Adventure \ud83c\uddfb\ud83c\uddf3"
  },
  "dubai-super-saver-4n5d": {
    "id_code": "dubai-super-saver-4n5d",
    "name": "Dubai Highlights & Desert Dunes",
    "duration": "4 Nights / 5 Days",
    "destination": "Dubai City & Arabian Desert",
    "pax": "6 Adults",
    "trip_id": "LEDMC1147561",
    "lead_guest": "Pax Trip (Group of 6)",
    "price_inr": 42598,
    "price_usd": 507,
    "total_inr": 255588,
    "land_inr": 29999,
    "hotels": "Citymax Bur Dubai / Ibis Al Barsha (4N, 3\u2605/4\u2605 Standard, Daily Breakfast)",
    "flights": "Air Arabia / Emirates assistance available",
    "highlights": "Dubai Half-Day Guided City Tour (Dubai Frame photo stop, Zabeel Palace, Jumeirah Mosque, Burj Al Arab view), Burj Khalifa 124th Floor At The Top Observatory Non-Prime Hours, Desert Safari by 4x4 Land Cruiser with Dune Bashing, Camel Ride, Tanoura & Belly Dance show with BBQ Buffet Dinner, Marina Dhow Cruise with International Buffet Dinner & Live Music.",
    "inclusions": "4 Nights Hotel Stay with Breakfast, Roundtrip Dubai Airport Transfers (DXB), Burj Khalifa 124th Floor ticket, 4x4 Desert Safari with BBQ Dinner, Marina Dhow Cruise Dinner, Half-Day Dubai City Tour.",
    "exclusions": "UAE Tourist Visa, Tourism Dirham Fee (~15 AED/room/night), Lunches, Personal expenses.",
    "badge": "Super Saver \ud83c\udde6\ud83c\uddea"
  },
  "dubai-luxury-grand-5n6d": {
    "id_code": "dubai-luxury-grand-5n6d",
    "name": "Dubai Grand Explorer & Abu Dhabi",
    "duration": "5 Nights / 6 Days",
    "destination": "Dubai & Abu Dhabi Capital",
    "pax": "5 Adults",
    "trip_id": "LEDMC1146323",
    "lead_guest": "Rahul Mahesh Bajaj",
    "price_inr": 66848,
    "price_usd": 796,
    "total_inr": 334240,
    "land_inr": 44999,
    "hotels": "Four Points by Sheraton / Millennium Central Downtown (5N, 4\u2605 Premium, Daily Breakfast)",
    "flights": "Return flights assistance available",
    "highlights": "Burj Khalifa 124th & 125th Floor Observatory, Museum of the Future entry ticket, Premium VIP Desert Safari with Quad Biking & BBQ Dinner, Luxury Marina Yacht Sunset Cruise, Full-Day Abu Dhabi Tour covering Sheikh Zayed Grand Mosque, BAPS Hindu Mandir, Emirates Palace photo stop & Ferrari World.",
    "inclusions": "5 Nights 4\u2605 Premium Hotel with Breakfast, Private Airport Transfers, Burj Khalifa tickets, Museum of the Future ticket, VIP Desert Safari with BBQ dinner, Marina Yacht cruise, Full-Day Abu Dhabi private tour with Grand Mosque & BAPS Mandir.",
    "exclusions": "UAE Visa, Tourism Dirham, Lunches, Tips.",
    "badge": "Luxury Tour \ud83c\udde6\ud83c\uddea"
  },
  "dubai-extended-6n7d": {
    "id_code": "dubai-extended-6n7d",
    "name": "Dubai Complete Royal Experience",
    "duration": "6 Nights / 7 Days",
    "destination": "Dubai, Palm Jumeirah & Abu Dhabi",
    "pax": "4 Adults",
    "trip_id": "LEDMC1129743",
    "lead_guest": "Rahul Vi",
    "price_inr": 64410,
    "price_usd": 767,
    "total_inr": 287329,
    "land_inr": 42999,
    "hotels": "Hilton Garden Inn / Aloft Dubai (6N, 4\u2605 Deluxe, Daily Breakfast)",
    "flights": "Available on request",
    "highlights": "Burj Khalifa + Dubai Aquarium & Underwater Zoo, The View at the Palm Observatory, Atlantis Aquaventure Waterpark & Lost Chambers Aquarium, Desert Safari with BBQ Dinner, Marina Dhow Cruise Dinner, Miracle Garden & Global Village (seasonal).",
    "inclusions": "6 Nights 4\u2605 Hotel with Breakfast, All Sightseeing Admissions, Private Airport Transfers, Desert Safari, Marina Cruise Dinner.",
    "exclusions": "UAE Visa, Tourism Dirham, Lunches, Personal expenses.",
    "badge": "Complete Holiday \ud83c\udde6\ud83c\uddea"
  },
  "malaysia-express-4n5d": {
    "id_code": "malaysia-express-4n5d",
    "name": "Malaysia City & Highlands Escape",
    "duration": "4 Nights / 5 Days",
    "destination": "Kuala Lumpur (2N) + Genting Highlands (2N)",
    "pax": "6 Adults",
    "trip_id": "LEDMC1148210",
    "lead_guest": "Pax Trip (Group of 6)",
    "price_inr": 39364,
    "price_usd": 469,
    "total_inr": 236184,
    "land_inr": 24999,
    "hotels": "Furama Bukit Bintang KL (2N, 4\u2605 Standard) + First World Hotel Genting (2N, Deluxe)",
    "flights": "Assistance available",
    "highlights": "Kuala Lumpur City Tour with Petronas Twin Towers, King's Palace, National Mosque, Batu Caves Murugan Temple (272 rainbow steps), Awana SkyWay Two-Way Cable Car ride to Genting, Genting SkyWorlds Theme Park / Casino leisure, Putrajaya administrative capital tour.",
    "inclusions": "4 Nights Hotel with Daily Breakfast, Roundtrip KLIA Airport Transfers, Full-Day Genting Highlands excursion with Awana Cable Car tickets, Batu Caves stop, KL Half-Day City Tour.",
    "exclusions": "Malaysia Tourism Tax (~10 MYR/room/night), Flights, Dinners, Travel Insurance.",
    "badge": "Value Deal \ud83c\uddf2\ud83c\uddfe"
  },
  "bali-leisure-6n7d": {
    "id_code": "bali-leisure-6n7d",
    "name": "Bali Budget & Private Villa Escape",
    "duration": "6 Nights / 7 Days",
    "destination": "Kuta Beach (4N) + Ubud Private Villa (2N)",
    "pax": "5 Adults",
    "trip_id": "LEDMC1132629",
    "lead_guest": "Rahul Vi",
    "price_inr": 39014,
    "price_usd": 464,
    "total_inr": 219076,
    "land_inr": 32999,
    "hotels": "Grand Barong Resort Kuta (4N, 4\u2605 Superior, Breakfast) + Villa Kayu Lama Ubud (2N, 1-Bedroom Private Pool Villa, Breakfast)",
    "flights": "Direct flights assistance available",
    "highlights": "Ubud Monkey Forest & Traditional Art Market, Bali Swing & Coffee Plantation tasting, Water sports at Tanjung Benoa (Banana Boat included), Uluwatu Cliff Sunset Temple, Tanah Lot Sunset.",
    "inclusions": "6 Nights Stay with Breakfast, Private AC Transfers with Driver, Tanjung Benoa water sports, Temple entry tickets, Ubud Villa experience.",
    "exclusions": "Airfare, Visa on Arrival ($35 USD), Tourism Levy (IDR 150K), Dinners.",
    "badge": "Budget Beach \ud83c\udfdd\ufe0f"
  },
  "thailand-express-5n6d": {
    "id_code": "thailand-express-5n6d",
    "name": "Thailand Phuket & Krabi Luxury Escape",
    "duration": "5 Nights / 6 Days",
    "destination": "Phuket (3N) + Krabi (2N)",
    "pax": "2 Adults",
    "trip_id": "LEDMC1135678",
    "lead_guest": "Dr. Rathi",
    "price_inr": 100614,
    "price_usd": 1198,
    "total_inr": 201228,
    "land_inr": 46999,
    "hotels": "The Westin Siray Bay Resort & Spa Phuket (3N, 5\u2605 Luxury Ocean View) + Aonang Paradise Resort Krabi (2N, 4\u2605 Pool Villa)",
    "flights": "Assistance available",
    "highlights": "VIP Speedboat Tour to Phi Phi & Bamboo Island with buffet lunch, Private sunset longtail boat in Krabi to 4 Islands with candlelight beach dinner, Phuket Big Buddha & Promthep Cape private excursion.",
    "inclusions": "5 Nights 5\u2605/4\u2605 Luxury Resort Stays with Breakfast, Private Airport & Intercity transfers in luxury van, VIP Speedboat Phi Phi Tour, Krabi 4-Island Tour with lunch, Candlelight Dinner.",
    "exclusions": "Flights, Personal expenses, Travel Insurance.",
    "badge": "5-Star Luxury \ud83c\uddf9\ud83c\udded"
  },
  "hong-kong-grand-6n7d": {
    "id_code": "hong-kong-grand-6n7d",
    "name": "Hong Kong & Macau Magic Tour",
    "duration": "6 Nights / 7 Days",
    "destination": "Hong Kong (4N) + Macau (2N)",
    "pax": "2 Adults",
    "trip_id": "LEDMC1149838",
    "lead_guest": "Rahul Vi",
    "price_inr": 130985,
    "price_usd": 1559,
    "total_inr": 261970,
    "land_inr": 85999,
    "hotels": "Panda Hotel / Harbour Plaza Hong Kong (4N, 4\u2605 Standard) + The Parisian Macao / Venetian (2N, 5\u2605 Luxury Suite)",
    "flights": "Direct Cathay Pacific options available",
    "highlights": "Hong Kong Disneyland 1-Day Pass (all themed lands + Momentous fireworks), Ocean Park Hong Kong with cable car & panda exhibit, Victoria Peak Tram & Sky Terrace 428, TurboJET Fast Ferry to Macau, Macau City Tour (Ruins of St. Paul's, Senado Square, Macau Tower), The Venetian Macao Gondola ride experience.",
    "inclusions": "6 Nights Hotel & 5\u2605 Casino Resort Stays with Breakfast, Roundtrip Airport Transfers, Disneyland 1-Day Pass with transfers, Ocean Park Pass, Peak Tram ticket, TurboJET return ferry tickets, Macau Guided City Tour.",
    "exclusions": "Airfare, Hong Kong PAR pre-arrival registration, Lunches & Dinners, Personal expenses.",
    "badge": "Disney & Vegas \ud83c\udded\ud83c\uddf0"
  },
  "canton-fair-china-6n7d": {
    "id_code": "canton-fair-china-6n7d",
    "name": "Canton Fair Business & Guangzhou Tour",
    "duration": "6 Nights / 7 Days",
    "destination": "Guangzhou (Canton Fair Exhibition) + Hong Kong",
    "pax": "2 Adults",
    "trip_id": "LEDMC1131584",
    "lead_guest": "Promotional / Business Delegation",
    "price_inr": 79200,
    "price_usd": 943,
    "total_inr": 158400,
    "land_inr": 54999,
    "hotels": "Guangzhou Hotel / Rosedale Hotel Guangzhou (4N, 4\u2605 Business Hotel) + Regal Oriental Hong Kong (2N, 4\u2605)",
    "flights": "Assistance available",
    "highlights": "Official Canton Fair Exhibition Phase passes, Daily dedicated coach shuttle transfers from Hotel to Pazhou Complex and back, Daily Indian Buffet Dinners in Guangzhou, Pearl River Evening Cruise, High-Speed Bullet Train from Guangzhou to Hong Kong Kowloon.",
    "inclusions": "6 Nights 4\u2605 Hotel stays with Daily Breakfast, Daily Indian Dinners in Guangzhou, Daily Exhibition Shuttle Coach, Canton Fair Badge registration assistance, High-Speed Bullet Train tickets to Hong Kong.",
    "exclusions": "China Visa fees, Flight tickets, Personal expenses, Exhibition stall charges.",
    "badge": "Business Expo \ud83c\udde8\ud83c\uddf3"
  },
  "sri-lanka-wonders-4n5d": {
    "id_code": "sri-lanka-wonders-4n5d",
    "name": "Sri Lanka Ramayana & Hill Country",
    "duration": "4 Nights / 5 Days",
    "destination": "Kandy (1N) + Nuwara Eliya (1N) + Bentota Beach (1N) + Colombo (1N)",
    "pax": "6 Adults",
    "trip_id": "LEDMC1148707",
    "lead_guest": "Pax Trip (Group of 6)",
    "price_inr": 23064,
    "price_usd": 275,
    "total_inr": 138384,
    "land_inr": 18999,
    "hotels": "Topaz Hotel Kandy (1N, 4\u2605) + Araliya Green Hills Nuwara Eliya (1N, 4\u2605) + The Palms Bentota (1N, 4\u2605 Beachfront) + Fairway Colombo (1N, 4\u2605 City Hotel)",
    "flights": "SriLankan Airlines direct from Mumbai/Chennai",
    "highlights": "Pinnawala Elephant Orphanage, Temple of the Sacred Tooth Relic Kandy, Royal Botanical Gardens Peradeniya, Ceylon Tea Plantation & Factory tour, Gregory Lake & Little England Nuwara Eliya, Madu River Boat Safari with Fish Spa, Turtle Hatchery Kosgoda, Colombo City Tour & Independence Square.",
    "inclusions": "4 Nights 4\u2605 Hotels with Daily Breakfast & Dinners (MAP Plan), 100% Private AC Coach with English speaking chauffeur-guide, Pinnawala Elephant Orphanage entrance, Madu River Boat Safari, Temple of Tooth Relic tickets.",
    "exclusions": "Airfare, Sri Lanka ETA Visa ($50 USD), Lunches, Water sports.",
    "badge": "Budget Beach \ud83c\uddf1\ud83c\uddf0"
  },
  "kerala-meghani-6n7d": {
    "id_code": "kerala-meghani-6n7d",
    "name": "Kerala God's Own Country (Family Classic)",
    "duration": "6 Nights / 7 Days",
    "destination": "Cochin (1N) + Munnar (2N) + Thekkady (1N) + Alleppey (1N) + Kovalam (1N)",
    "pax": "4 Adults",
    "trip_id": "LEDMC1112399",
    "lead_guest": "Arti Meghani",
    "price_inr": 24750,
    "price_usd": 295,
    "total_inr": 99000,
    "land_inr": 21999,
    "hotels": "Pagoda Resort Alappuzha (1N) + Munnar Tea County / Similar (2N) + Thekkady Wild Corridor (1N) + Kovalam Beach Retreat (1N)",
    "flights": "Train/Flight assistance to Kochi",
    "highlights": "Cochin Chinese Fishing Nets & Fort Kochi, Cheeyappara & Valara Waterfalls, Mattupetty Dam, Echo Point & Eravikulam National Park (Nilgiri Tahr), Periyar Wildlife Sanctuary spice plantations & boat ride, Alleppey Backwaters Houseboat cruise with local Kerala lunch, Kovalam Lighthouse Beach & Trivandrum Padmanabhaswamy Temple.",
    "inclusions": "6 Nights Hotel/Resort stays with Daily Breakfast, Private AC Sedan/Innova with experienced chauffeur, Alleppey Backwater Cruise, Spice Plantation tour, Toll, Parking & Driver allowances.",
    "exclusions": "Airfare/Train fare, Lunches & Dinners (except Houseboat), Entry tickets to monuments & boat rides, Personal expenses.",
    "badge": "Family Special \ud83c\udf34"
  },
  "kerala-darshan-luxury-6n7d": {
    "id_code": "kerala-darshan-luxury-6n7d",
    "name": "Kerala Premium Honeymoon & Luxury Houseboat",
    "duration": "6 Nights / 7 Days",
    "destination": "Munnar (2N) + Thekkady (1N) + Alleppey Private Houseboat (1N) + Marari Beach (2N)",
    "pax": "6 Adults",
    "trip_id": "LEDMC1135448",
    "lead_guest": "Darshan D",
    "price_inr": 35456,
    "price_usd": 422,
    "total_inr": 212736,
    "land_inr": 29999,
    "hotels": "Fragrant Nature Munnar (2N, 5\u2605 Luxury Resort) + Poetree Sarovar Portico Thekkady (1N, 4\u2605) + Deluxe Private Houseboat Alleppey (1N, Private Chef, All Meals) + Marari Beach Resort (2N, 4\u2605 Beachfront Villa)",
    "flights": "Available on request",
    "highlights": "Tea Museum & tea tasting session, Kundala Lake speedboating, Periyar Tiger Reserve jungle walk, Exclusive 1-Bedroom Private Houseboat with traditional Kerala Karimeen lunch, Candlelight dinner with flower bed decoration, Marari Ayurvedic rejuvenation massage.",
    "inclusions": "6 Nights Luxury Resort & Private Houseboat Stay, All Meals on Houseboat (Breakfast, Lunch, Evening Snacks & Dinner), Daily Breakfast at resorts, 100% Private AC Innova Crysta throughout, Ayurvedic massage session.",
    "exclusions": "Airfare, Personal laundry, Tips, Entry tickets.",
    "badge": "Luxury Honeymoon \ud83c\udf34"
  },
  "ujjain-omkareshwar-4n5d": {
    "id_code": "ujjain-omkareshwar-4n5d",
    "name": "Ujjain Mahakal & Omkareshwar Jyotirlinga Yatra",
    "duration": "4 Nights / 5 Days",
    "destination": "Indore (1N) + Ujjain (2N) + Omkareshwar & Maheshwar (1N)",
    "pax": "2 Adults",
    "trip_id": "LEDMC1141325",
    "lead_guest": "Suman Bhartia",
    "price_inr": 27708,
    "price_usd": 330,
    "total_inr": 55416,
    "land_inr": 21999,
    "hotels": "Hotel Imperial Grand Ujjain (2N, 3\u2605 Premium, Breakfast) + WOW Hotel Indore (1N, 4\u2605, Breakfast) + Narmada Resort Omkareshwar (1N, MPTDC, Breakfast)",
    "flights": "Assistance available to Indore Airport (IDR)",
    "highlights": "Ujjain Mahakaleshwar Jyotirlinga VIP Bhasma Aarti assistance, Mahakal Lok Corridor walking tour, Kal Bhairav Temple, Harsiddhi Shaktipeeth, Ram Ghat Shipra Aarti, Omkareshwar Jyotirlinga Island boat ride on Narmada River, Mamleshwar Temple, Maheshwar Ahilya Fort & Narmada Ghats, Indore Sarafa Night Street Food Market tour.",
    "inclusions": "4 Nights Hotel stays with Daily Breakfast, 100% Private AC Sedan with verified driver, Mahakal Bhasma Aarti booking guidance, Omkareshwar boat ride, All tolls, interstate taxes & parking.",
    "exclusions": "Train/Airfare, Special VIP darshan tickets, Lunches & Dinners, Personal pooja expenses.",
    "badge": "Spiritual Yatra \ud83d\uded5"
  },
  "georgia-magic-300": {
    "id_code": "georgia-magic-300",
    "name": "Georgia Flash Deal ($300 USD Special)",
    "duration": "4 Nights / 5 Days",
    "destination": "Tbilisi, Gudauri & Snowy Kazbegi",
    "pax": "2 Adults",
    "trip_id": "LEDMC100300",
    "lead_guest": "Wholesale Direct Promotion",
    "price_inr": 28999,
    "price_usd": 300,
    "total_inr": 57998,
    "land_inr": 28999,
    "hotels": "4\u2605 Boutique Hotel in Old Tbilisi (4N, Double Room, Daily Buffet Breakfast)",
    "flights": "Available on request via Sharjah (Air Arabia) or Kuwait (Jazeera)",
    "highlights": "Explore Historic Old Tbilisi, Narikala Fortress Aerial Cable Car, Bridge of Peace glowing at dusk, Jinvali Water Reservoir & Ananuri Fortress, Gudauri Ski Resort & Caucasus Friendship Monument, Off-road 4x4 Jeep Safari to 14th-century Gergeti Trinity Church (2,170m) under towering Mount Kazbek, Traditional Georgian wine cellar tasting.",
    "inclusions": "4 Nights 4\u2605 Boutique Hotel stay with Daily Buffet Breakfast, 100% Private 4x4 Chauffeur vehicle throughout, Tbilisi Aerial Cable Car ticket, Kazbegi 4x4 Jeep Safari, All monument entries & English speaking guide.",
    "exclusions": "International Airfare, Georgia eVisa ($20 USD or Visa-on-Arrival if US/UK/Schengen/UAE visa holder), Dinners.",
    "badge": "$300 Special \ud83c\uddec\ud83c\uddea"
  },
  "turkey-escape-42k": {
    "id_code": "turkey-escape-42k",
    "name": "Turkey Escape & Cappadocia Wonders",
    "duration": "4 Nights / 5 Days",
    "destination": "Istanbul & Cappadocia Cave Valley",
    "pax": "2 Adults",
    "trip_id": "LEDMC100420",
    "lead_guest": "Wholesale Direct Promotion",
    "price_inr": 42999,
    "price_usd": 515,
    "total_inr": 85998,
    "land_inr": 42999,
    "hotels": "5\u2605 Luxury Cave Resort in Cappadocia (2N) + 4\u2605 Taksim/Sultanahmet Hotel Istanbul (2N, Daily Breakfast)",
    "flights": "Domestic Istanbul \u2194 Nevsehir/Kayseri flights included",
    "highlights": "Sunrise Hot Air Balloon Flight over Cappadocia fairy chimneys with champagne toast, Private sunset Bosphorus Yacht Cruise in Istanbul, Hagia Sophia & Blue Mosque guided VIP tour, Goreme Open Air Museum & Derinkuyu Underground City, Grand Bazaar shopping tour.",
    "inclusions": "4 Nights 4\u2605/5\u2605 Cave Hotel Stays with Breakfast, Domestic Flights in Turkey, Bosphorus Yacht Cruise, Private Airport Transfers, Underground City tour, All monument entries.",
    "exclusions": "International Flights, Turkey Visa, Hot Air Balloon ticket (~150-180 EUR optional), Personal expenses.",
    "badge": "Direct DMC \ud83c\uddf9\ud83c\uddf7"
  },
  "kashmir-paradise-21k": {
    "id_code": "kashmir-paradise-21k",
    "name": "Kashmir Heaven on Earth & Snow Valley",
    "duration": "4 Nights / 5 Days",
    "destination": "Srinagar (2N) + Gulmarg (1N) + Pahalgam (1N)",
    "pax": "2 Adults",
    "trip_id": "LEDMC100210",
    "lead_guest": "Wholesale Direct Promotion",
    "price_inr": 21999,
    "price_usd": 265,
    "total_inr": 43998,
    "land_inr": 21999,
    "hotels": "Luxury Dal Lake Houseboat Srinagar (1N) + 4\u2605 Srinagar Hotel (1N) + 4\u2605 Pine Resort Gulmarg (1N) + 4\u2605 Valley Resort Pahalgam (1N)",
    "flights": "Available on request to Srinagar (SXR)",
    "highlights": "1-Hour Shikara Ride on Dal Lake, Gulmarg Gondola Cable Car Phase 1 snow ride, Pahalgam Betaab Valley & Aru Valley excursion, Apple orchards & saffron fields in Pampore, Mughal Gardens (Shalimar & Nishat Bagh).",
    "inclusions": "4 Nights Luxury Accommodations with Breakfast & Dinners (MAP Plan), Heated Private Chauffeur Cab throughout, 1-Hour Shikara ride, Airport pickups & drops.",
    "exclusions": "Airfare, Gulmarg Gondola Phase 2 tickets, Union cab in Pahalgam (Aru/Betaab), Personal pony rides.",
    "badge": "Snow Paradise \ud83c\udfd4\ufe0f"
  }
};

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
OFFICIAL VERIFIED PACKAGES (EXACT VOUCHER DATA WITH BOTH INR & USD RATES):

1. MALAYSIA WITH BALI GRAND COMBO TOUR (7 Nights / 8 Days):
- Trip ID: LEDMC1048820 | Lead Guest: Mohit Kodwani | Pax: 4 Adults
- Route: Kuala Lumpur (1N) + Bali Kuta (4N) + Ubud Villa (2N)
- Pricing:
  * Per Adult Rate: INR 122,138 (~$1454 USD)
  * Total Net Group Amount: INR 488,552
  * Land Package Option: From INR 58,999 (~$702 USD)
- Hotels & Stays: Ibis Styles Kuala Lumpur (1N, 3★ Standard, Breakfast) + Kuta Beach Club Hotel (4N, 4★ Deluxe, Breakfast) + Maharaja Villa Ubud (2N, 4★ 1-Bedroom Private Pool Villa, Breakfast)
- Flights: Batik Air OD-216 (Mumbai to KL), Batik Air OD-171 (KL to Bali), Vietjet VJ-894 (Bali to Ho Chi Minh), Vietjet VJ-1803 (Ho Chi Minh to Hyderabad)
- Sightseeing Highlights: Kuala Lumpur City Tour & Petronas Twin Towers, Uluwatu Cliff Sunset & Kecak Fire Dance, Handara Gate + Ulun Danu Beratan + Tanah Lot, Nusa Penida West Speedboat Tour (Kelingking Beach, Angel's Billabong, Snorkeling), 90-min ATV Quad Biking + Bali Jungle Swing, Lempuyang Gate of Heaven & Tirta Gangga Water Palace.
- Inclusions: Flights & Visa clearances, 7N Hotel/Villa stays with Daily Breakfast, 100% Private AC Transfers, Speedboat to Nusa Penida, 90-min ATV + Swings, All Sightseeing & Temple Entrance Tickets.
- Exclusions: Daily Dinners, Bali Tourism Levy (IDR 150,000/person), Personal expenses & Tips.

2. THAILAND GRAND SIGNATURE TOUR (7 Nights / 8 Days):
- Trip ID: TVY448657 | Lead Guest: Mohit Kodwani / Rajesh Chawla | Pax: 2 Adults
- Route: Phuket (3N) + Krabi (2N) + Bangkok (2N)
- Pricing:
  * Per Adult Rate: INR 62,362 (~$745 USD)
  * Total Net Group Amount: INR 124,724
  * Land Package Option: From INR 42,999 (~$512 USD)
- Hotels & Stays: Panwaburi Beachfront Resort Phuket (3N, 4★ Deluxe, Breakfast) + Aonang Paradise Resort Krabi (2N, 4★ Deluxe Pool View, Breakfast) + Platinum Suite Bangkok (2N, 4★ Superior Premium, Breakfast)
- Flights: Domestic Krabi to Bangkok Flight included
- Sightseeing Highlights: Phuket City Tour (Big Buddha, Wat Chalong) + Tiger Park + Phuket FantaSea Cultural Show & Grand Buffet Dinner, Full-Day Phi Phi Island Tour by Big Boat (Maya Bay, Pileh Lagoon + Lunch), Krabi 4-Island Tour by Longtail boat with Picnic Lunch, Evening Chao Phraya River Luxury Dinner Cruise, Bangkok City Tour (Golden Buddha) + King Power Mahanakhon 78th Floor Glass Skywalk, Safari World & Marine Park with Lunch & Shows.
- Inclusions: 7 Nights 4★ Deluxe Resort stays with Daily Breakfast, 100% Private AC Transfers throughout, Phi Phi Island Big Boat Tour with National Park fees & lunch, Krabi 4-Island tour with lunch, Phuket FantaSea Show & Dinner, Chao Phraya Dinner Cruise, Mahanakhon Skywalk pass, Safari World admission with buffet lunch.
- Exclusions: Daily Dinners (except Phuket FantaSea & Dinner Cruise), Personal expenses & Travel Insurance.

3. BALI INDONESIA SIGNATURE TOUR (6 Nights / 7 Days):
- Trip ID: LEDMC1024111 | Lead Guest: Mohit Kodwani | Pax: 2 Adults
- Route: Kuta Beach (4N) + Ubud Private Pool Villa (2N)
- Pricing:
  * Per Adult Rate: INR 96,068 (~$1145 USD)
  * Total Net Group Amount: INR 192,136
  * Land Package Option: From INR 48,999 (~$583 USD)
- Hotels & Stays: Kuta Beach Club Hotel (4N, 4★ Premium, 1 Deluxe Room, Breakfast) + Alam Ubud Culture Villas & Residences (2N, 4★ Premium, 1-Bedroom Pool Villa, Breakfast)
- Flights: Return IndiGo Mumbai ↔ Bali Direct Flights included (6E-1607 / 6E-1608)
- Sightseeing Highlights: Flower garland arrival welcome, Half-Day Uluwatu Cliff Temple Sunset & Kecak Dance Show, Full-Day Handara Iconic Gate + Ulun Danu Floating Temple + Tanah Lot Temple Sunset, Full-Day Nusa Penida West Speedboat Tour (Kelingking T-Rex Beach, Angel's Billabong, Broken Beach + Snorkeling & Canoeing), 90-min ATV Quad Biking + 3-hr Ayung River Rafting with Lunch + Bali Jungle Swing (Unlimited Swings & Nests), Full-Day Lempuyang Gate of Heaven + Tirta Gangga + Black Sand Beach.
- Inclusions: Return IndiGo Flights & Bali 30-Day e-VOA Visa, 6N Accommodations (4N Kuta + 2N Ubud Pool Villa) with Daily Breakfast, 100% Private SUV vehicle with dedicated driver, Nusa Penida private car & speedboat, 90-min ATV + Ayung Rafting with lunch + Swings, All entry tickets & taxes.
- Exclusions: Daily Dinners, Bali Tourism Levy (IDR 150,000/person), Nusa Penida retribution (IDR 25,000/person), Personal expenses.

4. SINGAPORE SIGNATURE EXPERIENCE (3 Nights / 4 Days):
- Trip ID: LEDMC1032890 | Lead Guest: Shyam Lalwani | Pax: 2 Adults
- Route: Singapore City & Sentosa Island
- Pricing:
  * Per Adult Rate: INR 52,062 (~$620 USD)
  * Total Net Group Amount: INR 104,124
  * Land Package Option: From INR 36,999 (~$440 USD)
- Hotels & Stays: Novotel Singapore on Stevens / Similar (3N, 4★ Premium, Deluxe City Room, Daily Breakfast)
- Flights: Available on request from Mumbai/Delhi
- Sightseeing Highlights: 100% Private Changi Airport Transfers, Half-Day Singapore City Tour + Singapore Flyer (Little India, Merlion Park), Marina Bay Sands (MBS) Skypark Observation Deck + Gardens by the Bay (Flower Dome & Cloud Forest), Full-Day Universal Studios Singapore Pass with transfers (Transformers, Battlestar Galactica, Jurassic Park).
- Inclusions: 3 Nights 4★ Hotel with Daily Buffet Breakfast, 100% Private Airport Transfers, Universal Studios Singapore 1-Day Pass with transfers, Singapore Flyer & City Tour, MBS Skypark & Gardens by the Bay admissions.
- Exclusions: International Flights, Singapore Visa, Dinners, Hotel security deposit.

5. SINGAPORE FAMILY EXTRAVAGANZA (4 Nights / 5 Days):
- Trip ID: LEDMC1143890 | Lead Guest: Pax Trip (Group of 6) | Pax: 6 Adults
- Route: Singapore City, Sentosa & Marina Bay
- Pricing:
  * Per Adult Rate: INR 58,563 (~$697 USD)
  * Total Net Group Amount: INR 351,378
  * Land Package Option: From INR 41,999 (~$500 USD)
- Hotels & Stays: V Hotel Lavender / Hotel Boss / Furama Riverfront (4N, 4★ Standard, Daily Breakfast)
- Flights: Available on request
- Sightseeing Highlights: Changi Jewel Tour, Night Safari with Tram Ride & Creature of the Night Show, Sentosa Cable Car Skypass + Madame Tussauds (4-in-1), Wings of Time Sunset Laser Show, Universal Studios Singapore Full-Day, Gardens by the Bay.
- Inclusions: 4 Nights 4★ Hotel with Breakfast, Roundtrip Airport Transfers, Night Safari, Sentosa Island Package with Wings of Time, Universal Studios Full-Day Pass.
- Exclusions: Airfare, Visa, Dinners, Personal expenses.

6. SINGAPORE GRAND LEISURE & SENTOSA (6 Nights / 7 Days):
- Trip ID: LEDMC1134589 | Lead Guest: Chhabra Dental Clinic | Pax: 3 Adults
- Route: Singapore City, Sentosa, Mandai & Marina Bay
- Pricing:
  * Per Adult Rate: INR 82,800 (~$986 USD)
  * Total Net Group Amount: INR 248,400
  * Land Package Option: From INR 59,999 (~$714 USD)
- Hotels & Stays: Orchard Rendezvous Hotel / Grand Copthorne Waterfront (6N, 4★ Superior, Daily Breakfast)
- Flights: Direct Air India / Singapore Airlines options
- Sightseeing Highlights: Universal Studios VIP experience, S.E.A. Aquarium, Singapore Zoo & Bird Paradise Mandai, MBS Skypark Observation, Marina Bay River Cruise, Singapore Flyer, Sentosa Cable Car & Luge Skyride.
- Inclusions: 6 Nights 4★ Hotel stay with breakfast, Private AC Transfers, Universal Studios Singapore, S.E.A. Aquarium, Bird Paradise, Night Safari, Sentosa Cable Car, MBS Skypark.
- Exclusions: Flights, Visa, Dinners, Tips.

7. VIETNAM GRAND EXPEDITION (9 Nights / 10 Days):
- Trip ID: LEDMC1134219 | Lead Guest: Ashutosh Sahu | Pax: 4 Adults
- Route: Sapa (2N) + Hanoi (1N) + Da Nang (3N) + Phu Quoc (3N)
- Pricing:
  * Per Adult Rate: INR 148,000 (~$1762 USD)
  * Total Net Group Amount: INR 592,000
  * Land Package Option: From INR 69,999 (~$833 USD)
- Hotels & Stays: Sapagreen Hotel Sapa (2N, 3★ Superior) + TK123 Hotel Hanoi (1N, 3★ Superior) + Cosmos Hotel Da Nang (3N, 4★ Deluxe City View) + Gaia Hotel Phu Quoc (3N, 4★ Standard)
- Flights: Domestic flights included: Hanoi to Da Nang & Da Nang to Phu Quoc
- Sightseeing Highlights: Fansipan Peak Cable Car ('Roof of Indochina' 3,143m) & Rong May Glass Bridge at O Quy Ho Pass, Ninh Binh Ancient Capital Hoa Lu + Tam Coc boat caves, Da Nang Marble Mountain & Cam Thanh Coconut Jungle basket boat, Hoi An Ancient Town lantern boat on Thu Bon River, Ba Na Hills Golden Bridge (Giant Stone Hands) & Fantasy Park, Phu Quoc Sunset Town, Kiss Bridge & Symphony of the Sea show, Vinpearl Safari (largest open zoo) + VinWonders theme park & aquarium, 4-Island Speedboat Tour + Hon Thom 8km World's Longest Overwater Cable Car & Aquatopia Waterpark with Buffet Lunch.
- Inclusions: 9 Nights Hotel Stays with Daily Breakfast, Private 7-Seater AC Transfers throughout, Domestic flights, All Cable Car Tickets (Fansipan, Ba Na Hills, Hon Thom), 4-Island Tour with Buffet Lunch, Vinpearl Safari & VinWonders all-access passes.
- Exclusions: Daily Dinners, Vietnam Visa, GST 5% & TCS, personal expenses.

8. DUBAI HIGHLIGHTS & DESERT DUNES (4 Nights / 5 Days):
- Trip ID: LEDMC1147561 | Lead Guest: Pax Trip (Group of 6) | Pax: 6 Adults
- Route: Dubai City & Arabian Desert
- Pricing:
  * Per Adult Rate: INR 42,598 (~$507 USD)
  * Total Net Group Amount: INR 255,588
  * Land Package Option: From INR 29,999 (~$357 USD)
- Hotels & Stays: Citymax Bur Dubai / Ibis Al Barsha (4N, 3★/4★ Standard, Daily Breakfast)
- Flights: Air Arabia / Emirates assistance available
- Sightseeing Highlights: Dubai Half-Day Guided City Tour (Dubai Frame photo stop, Zabeel Palace, Jumeirah Mosque, Burj Al Arab view), Burj Khalifa 124th Floor At The Top Observatory Non-Prime Hours, Desert Safari by 4x4 Land Cruiser with Dune Bashing, Camel Ride, Tanoura & Belly Dance show with BBQ Buffet Dinner, Marina Dhow Cruise with International Buffet Dinner & Live Music.
- Inclusions: 4 Nights Hotel Stay with Breakfast, Roundtrip Dubai Airport Transfers (DXB), Burj Khalifa 124th Floor ticket, 4x4 Desert Safari with BBQ Dinner, Marina Dhow Cruise Dinner, Half-Day Dubai City Tour.
- Exclusions: UAE Tourist Visa, Tourism Dirham Fee (~15 AED/room/night), Lunches, Personal expenses.

9. DUBAI GRAND EXPLORER & ABU DHABI (5 Nights / 6 Days):
- Trip ID: LEDMC1146323 | Lead Guest: Rahul Mahesh Bajaj | Pax: 5 Adults
- Route: Dubai & Abu Dhabi Capital
- Pricing:
  * Per Adult Rate: INR 66,848 (~$796 USD)
  * Total Net Group Amount: INR 334,240
  * Land Package Option: From INR 44,999 (~$536 USD)
- Hotels & Stays: Four Points by Sheraton / Millennium Central Downtown (5N, 4★ Premium, Daily Breakfast)
- Flights: Return flights assistance available
- Sightseeing Highlights: Burj Khalifa 124th & 125th Floor Observatory, Museum of the Future entry ticket, Premium VIP Desert Safari with Quad Biking & BBQ Dinner, Luxury Marina Yacht Sunset Cruise, Full-Day Abu Dhabi Tour covering Sheikh Zayed Grand Mosque, BAPS Hindu Mandir, Emirates Palace photo stop & Ferrari World.
- Inclusions: 5 Nights 4★ Premium Hotel with Breakfast, Private Airport Transfers, Burj Khalifa tickets, Museum of the Future ticket, VIP Desert Safari with BBQ dinner, Marina Yacht cruise, Full-Day Abu Dhabi private tour with Grand Mosque & BAPS Mandir.
- Exclusions: UAE Visa, Tourism Dirham, Lunches, Tips.

10. DUBAI COMPLETE ROYAL EXPERIENCE (6 Nights / 7 Days):
- Trip ID: LEDMC1129743 | Lead Guest: Rahul Vi | Pax: 4 Adults
- Route: Dubai, Palm Jumeirah & Abu Dhabi
- Pricing:
  * Per Adult Rate: INR 64,410 (~$767 USD)
  * Total Net Group Amount: INR 287,329
  * Land Package Option: From INR 42,999 (~$512 USD)
- Hotels & Stays: Hilton Garden Inn / Aloft Dubai (6N, 4★ Deluxe, Daily Breakfast)
- Flights: Available on request
- Sightseeing Highlights: Burj Khalifa + Dubai Aquarium & Underwater Zoo, The View at the Palm Observatory, Atlantis Aquaventure Waterpark & Lost Chambers Aquarium, Desert Safari with BBQ Dinner, Marina Dhow Cruise Dinner, Miracle Garden & Global Village (seasonal).
- Inclusions: 6 Nights 4★ Hotel with Breakfast, All Sightseeing Admissions, Private Airport Transfers, Desert Safari, Marina Cruise Dinner.
- Exclusions: UAE Visa, Tourism Dirham, Lunches, Personal expenses.

11. MALAYSIA CITY & HIGHLANDS ESCAPE (4 Nights / 5 Days):
- Trip ID: LEDMC1148210 | Lead Guest: Pax Trip (Group of 6) | Pax: 6 Adults
- Route: Kuala Lumpur (2N) + Genting Highlands (2N)
- Pricing:
  * Per Adult Rate: INR 39,364 (~$469 USD)
  * Total Net Group Amount: INR 236,184
  * Land Package Option: From INR 24,999 (~$298 USD)
- Hotels & Stays: Furama Bukit Bintang KL (2N, 4★ Standard) + First World Hotel Genting (2N, Deluxe)
- Flights: Assistance available
- Sightseeing Highlights: Kuala Lumpur City Tour with Petronas Twin Towers, King's Palace, National Mosque, Batu Caves Murugan Temple (272 rainbow steps), Awana SkyWay Two-Way Cable Car ride to Genting, Genting SkyWorlds Theme Park / Casino leisure, Putrajaya administrative capital tour.
- Inclusions: 4 Nights Hotel with Daily Breakfast, Roundtrip KLIA Airport Transfers, Full-Day Genting Highlands excursion with Awana Cable Car tickets, Batu Caves stop, KL Half-Day City Tour.
- Exclusions: Malaysia Tourism Tax (~10 MYR/room/night), Flights, Dinners, Travel Insurance.

12. BALI BUDGET & PRIVATE VILLA ESCAPE (6 Nights / 7 Days):
- Trip ID: LEDMC1132629 | Lead Guest: Rahul Vi | Pax: 5 Adults
- Route: Kuta Beach (4N) + Ubud Private Villa (2N)
- Pricing:
  * Per Adult Rate: INR 39,014 (~$464 USD)
  * Total Net Group Amount: INR 219,076
  * Land Package Option: From INR 32,999 (~$393 USD)
- Hotels & Stays: Grand Barong Resort Kuta (4N, 4★ Superior, Breakfast) + Villa Kayu Lama Ubud (2N, 1-Bedroom Private Pool Villa, Breakfast)
- Flights: Direct flights assistance available
- Sightseeing Highlights: Ubud Monkey Forest & Traditional Art Market, Bali Swing & Coffee Plantation tasting, Water sports at Tanjung Benoa (Banana Boat included), Uluwatu Cliff Sunset Temple, Tanah Lot Sunset.
- Inclusions: 6 Nights Stay with Breakfast, Private AC Transfers with Driver, Tanjung Benoa water sports, Temple entry tickets, Ubud Villa experience.
- Exclusions: Airfare, Visa on Arrival ($35 USD), Tourism Levy (IDR 150K), Dinners.

13. THAILAND PHUKET & KRABI LUXURY ESCAPE (5 Nights / 6 Days):
- Trip ID: LEDMC1135678 | Lead Guest: Dr. Rathi | Pax: 2 Adults
- Route: Phuket (3N) + Krabi (2N)
- Pricing:
  * Per Adult Rate: INR 100,614 (~$1198 USD)
  * Total Net Group Amount: INR 201,228
  * Land Package Option: From INR 46,999 (~$560 USD)
- Hotels & Stays: The Westin Siray Bay Resort & Spa Phuket (3N, 5★ Luxury Ocean View) + Aonang Paradise Resort Krabi (2N, 4★ Pool Villa)
- Flights: Assistance available
- Sightseeing Highlights: VIP Speedboat Tour to Phi Phi & Bamboo Island with buffet lunch, Private sunset longtail boat in Krabi to 4 Islands with candlelight beach dinner, Phuket Big Buddha & Promthep Cape private excursion.
- Inclusions: 5 Nights 5★/4★ Luxury Resort Stays with Breakfast, Private Airport & Intercity transfers in luxury van, VIP Speedboat Phi Phi Tour, Krabi 4-Island Tour with lunch, Candlelight Dinner.
- Exclusions: Flights, Personal expenses, Travel Insurance.

14. HONG KONG & MACAU MAGIC TOUR (6 Nights / 7 Days):
- Trip ID: LEDMC1149838 | Lead Guest: Rahul Vi | Pax: 2 Adults
- Route: Hong Kong (4N) + Macau (2N)
- Pricing:
  * Per Adult Rate: INR 130,985 (~$1559 USD)
  * Total Net Group Amount: INR 261,970
  * Land Package Option: From INR 85,999 (~$1024 USD)
- Hotels & Stays: Panda Hotel / Harbour Plaza Hong Kong (4N, 4★ Standard) + The Parisian Macao / Venetian (2N, 5★ Luxury Suite)
- Flights: Direct Cathay Pacific options available
- Sightseeing Highlights: Hong Kong Disneyland 1-Day Pass (all themed lands + Momentous fireworks), Ocean Park Hong Kong with cable car & panda exhibit, Victoria Peak Tram & Sky Terrace 428, TurboJET Fast Ferry to Macau, Macau City Tour (Ruins of St. Paul's, Senado Square, Macau Tower), The Venetian Macao Gondola ride experience.
- Inclusions: 6 Nights Hotel & 5★ Casino Resort Stays with Breakfast, Roundtrip Airport Transfers, Disneyland 1-Day Pass with transfers, Ocean Park Pass, Peak Tram ticket, TurboJET return ferry tickets, Macau Guided City Tour.
- Exclusions: Airfare, Hong Kong PAR pre-arrival registration, Lunches & Dinners, Personal expenses.

15. CANTON FAIR BUSINESS & GUANGZHOU TOUR (6 Nights / 7 Days):
- Trip ID: LEDMC1131584 | Lead Guest: Promotional / Business Delegation | Pax: 2 Adults
- Route: Guangzhou (Canton Fair Exhibition) + Hong Kong
- Pricing:
  * Per Adult Rate: INR 79,200 (~$943 USD)
  * Total Net Group Amount: INR 158,400
  * Land Package Option: From INR 54,999 (~$655 USD)
- Hotels & Stays: Guangzhou Hotel / Rosedale Hotel Guangzhou (4N, 4★ Business Hotel) + Regal Oriental Hong Kong (2N, 4★)
- Flights: Assistance available
- Sightseeing Highlights: Official Canton Fair Exhibition Phase passes, Daily dedicated coach shuttle transfers from Hotel to Pazhou Complex and back, Daily Indian Buffet Dinners in Guangzhou, Pearl River Evening Cruise, High-Speed Bullet Train from Guangzhou to Hong Kong Kowloon.
- Inclusions: 6 Nights 4★ Hotel stays with Daily Breakfast, Daily Indian Dinners in Guangzhou, Daily Exhibition Shuttle Coach, Canton Fair Badge registration assistance, High-Speed Bullet Train tickets to Hong Kong.
- Exclusions: China Visa fees, Flight tickets, Personal expenses, Exhibition stall charges.

16. SRI LANKA RAMAYANA & HILL COUNTRY (4 Nights / 5 Days):
- Trip ID: LEDMC1148707 | Lead Guest: Pax Trip (Group of 6) | Pax: 6 Adults
- Route: Kandy (1N) + Nuwara Eliya (1N) + Bentota Beach (1N) + Colombo (1N)
- Pricing:
  * Per Adult Rate: INR 23,064 (~$275 USD)
  * Total Net Group Amount: INR 138,384
  * Land Package Option: From INR 18,999 (~$226 USD)
- Hotels & Stays: Topaz Hotel Kandy (1N, 4★) + Araliya Green Hills Nuwara Eliya (1N, 4★) + The Palms Bentota (1N, 4★ Beachfront) + Fairway Colombo (1N, 4★ City Hotel)
- Flights: SriLankan Airlines direct from Mumbai/Chennai
- Sightseeing Highlights: Pinnawala Elephant Orphanage, Temple of the Sacred Tooth Relic Kandy, Royal Botanical Gardens Peradeniya, Ceylon Tea Plantation & Factory tour, Gregory Lake & Little England Nuwara Eliya, Madu River Boat Safari with Fish Spa, Turtle Hatchery Kosgoda, Colombo City Tour & Independence Square.
- Inclusions: 4 Nights 4★ Hotels with Daily Breakfast & Dinners (MAP Plan), 100% Private AC Coach with English speaking chauffeur-guide, Pinnawala Elephant Orphanage entrance, Madu River Boat Safari, Temple of Tooth Relic tickets.
- Exclusions: Airfare, Sri Lanka ETA Visa ($50 USD), Lunches, Water sports.

17. KERALA GOD'S OWN COUNTRY (FAMILY CLASSIC) (6 Nights / 7 Days):
- Trip ID: LEDMC1112399 | Lead Guest: Arti Meghani | Pax: 4 Adults
- Route: Cochin (1N) + Munnar (2N) + Thekkady (1N) + Alleppey (1N) + Kovalam (1N)
- Pricing:
  * Per Adult Rate: INR 24,750 (~$295 USD)
  * Total Net Group Amount: INR 99,000
  * Land Package Option: From INR 21,999 (~$262 USD)
- Hotels & Stays: Pagoda Resort Alappuzha (1N) + Munnar Tea County / Similar (2N) + Thekkady Wild Corridor (1N) + Kovalam Beach Retreat (1N)
- Flights: Train/Flight assistance to Kochi
- Sightseeing Highlights: Cochin Chinese Fishing Nets & Fort Kochi, Cheeyappara & Valara Waterfalls, Mattupetty Dam, Echo Point & Eravikulam National Park (Nilgiri Tahr), Periyar Wildlife Sanctuary spice plantations & boat ride, Alleppey Backwaters Houseboat cruise with local Kerala lunch, Kovalam Lighthouse Beach & Trivandrum Padmanabhaswamy Temple.
- Inclusions: 6 Nights Hotel/Resort stays with Daily Breakfast, Private AC Sedan/Innova with experienced chauffeur, Alleppey Backwater Cruise, Spice Plantation tour, Toll, Parking & Driver allowances.
- Exclusions: Airfare/Train fare, Lunches & Dinners (except Houseboat), Entry tickets to monuments & boat rides, Personal expenses.

18. KERALA PREMIUM HONEYMOON & LUXURY HOUSEBOAT (6 Nights / 7 Days):
- Trip ID: LEDMC1135448 | Lead Guest: Darshan D | Pax: 6 Adults
- Route: Munnar (2N) + Thekkady (1N) + Alleppey Private Houseboat (1N) + Marari Beach (2N)
- Pricing:
  * Per Adult Rate: INR 35,456 (~$422 USD)
  * Total Net Group Amount: INR 212,736
  * Land Package Option: From INR 29,999 (~$357 USD)
- Hotels & Stays: Fragrant Nature Munnar (2N, 5★ Luxury Resort) + Poetree Sarovar Portico Thekkady (1N, 4★) + Deluxe Private Houseboat Alleppey (1N, Private Chef, All Meals) + Marari Beach Resort (2N, 4★ Beachfront Villa)
- Flights: Available on request
- Sightseeing Highlights: Tea Museum & tea tasting session, Kundala Lake speedboating, Periyar Tiger Reserve jungle walk, Exclusive 1-Bedroom Private Houseboat with traditional Kerala Karimeen lunch, Candlelight dinner with flower bed decoration, Marari Ayurvedic rejuvenation massage.
- Inclusions: 6 Nights Luxury Resort & Private Houseboat Stay, All Meals on Houseboat (Breakfast, Lunch, Evening Snacks & Dinner), Daily Breakfast at resorts, 100% Private AC Innova Crysta throughout, Ayurvedic massage session.
- Exclusions: Airfare, Personal laundry, Tips, Entry tickets.

19. UJJAIN MAHAKAL & OMKARESHWAR JYOTIRLINGA YATRA (4 Nights / 5 Days):
- Trip ID: LEDMC1141325 | Lead Guest: Suman Bhartia | Pax: 2 Adults
- Route: Indore (1N) + Ujjain (2N) + Omkareshwar & Maheshwar (1N)
- Pricing:
  * Per Adult Rate: INR 27,708 (~$330 USD)
  * Total Net Group Amount: INR 55,416
  * Land Package Option: From INR 21,999 (~$262 USD)
- Hotels & Stays: Hotel Imperial Grand Ujjain (2N, 3★ Premium, Breakfast) + WOW Hotel Indore (1N, 4★, Breakfast) + Narmada Resort Omkareshwar (1N, MPTDC, Breakfast)
- Flights: Assistance available to Indore Airport (IDR)
- Sightseeing Highlights: Ujjain Mahakaleshwar Jyotirlinga VIP Bhasma Aarti assistance, Mahakal Lok Corridor walking tour, Kal Bhairav Temple, Harsiddhi Shaktipeeth, Ram Ghat Shipra Aarti, Omkareshwar Jyotirlinga Island boat ride on Narmada River, Mamleshwar Temple, Maheshwar Ahilya Fort & Narmada Ghats, Indore Sarafa Night Street Food Market tour.
- Inclusions: 4 Nights Hotel stays with Daily Breakfast, 100% Private AC Sedan with verified driver, Mahakal Bhasma Aarti booking guidance, Omkareshwar boat ride, All tolls, interstate taxes & parking.
- Exclusions: Train/Airfare, Special VIP darshan tickets, Lunches & Dinners, Personal pooja expenses.

20. GEORGIA FLASH DEAL ($300 USD SPECIAL) (4 Nights / 5 Days):
- Trip ID: LEDMC100300 | Lead Guest: Wholesale Direct Promotion | Pax: 2 Adults
- Route: Tbilisi, Gudauri & Snowy Kazbegi
- Pricing:
  * Per Adult Rate: INR 28,999 (~$300 USD)
  * Total Net Group Amount: INR 57,998
  * Land Package Option: From INR 28,999 (~$345 USD)
- Hotels & Stays: 4★ Boutique Hotel in Old Tbilisi (4N, Double Room, Daily Buffet Breakfast)
- Flights: Available on request via Sharjah (Air Arabia) or Kuwait (Jazeera)
- Sightseeing Highlights: Explore Historic Old Tbilisi, Narikala Fortress Aerial Cable Car, Bridge of Peace glowing at dusk, Jinvali Water Reservoir & Ananuri Fortress, Gudauri Ski Resort & Caucasus Friendship Monument, Off-road 4x4 Jeep Safari to 14th-century Gergeti Trinity Church (2,170m) under towering Mount Kazbek, Traditional Georgian wine cellar tasting.
- Inclusions: 4 Nights 4★ Boutique Hotel stay with Daily Buffet Breakfast, 100% Private 4x4 Chauffeur vehicle throughout, Tbilisi Aerial Cable Car ticket, Kazbegi 4x4 Jeep Safari, All monument entries & English speaking guide.
- Exclusions: International Airfare, Georgia eVisa ($20 USD or Visa-on-Arrival if US/UK/Schengen/UAE visa holder), Dinners.

21. TURKEY ESCAPE & CAPPADOCIA WONDERS (4 Nights / 5 Days):
- Trip ID: LEDMC100420 | Lead Guest: Wholesale Direct Promotion | Pax: 2 Adults
- Route: Istanbul & Cappadocia Cave Valley
- Pricing:
  * Per Adult Rate: INR 42,999 (~$515 USD)
  * Total Net Group Amount: INR 85,998
  * Land Package Option: From INR 42,999 (~$512 USD)
- Hotels & Stays: 5★ Luxury Cave Resort in Cappadocia (2N) + 4★ Taksim/Sultanahmet Hotel Istanbul (2N, Daily Breakfast)
- Flights: Domestic Istanbul ↔ Nevsehir/Kayseri flights included
- Sightseeing Highlights: Sunrise Hot Air Balloon Flight over Cappadocia fairy chimneys with champagne toast, Private sunset Bosphorus Yacht Cruise in Istanbul, Hagia Sophia & Blue Mosque guided VIP tour, Goreme Open Air Museum & Derinkuyu Underground City, Grand Bazaar shopping tour.
- Inclusions: 4 Nights 4★/5★ Cave Hotel Stays with Breakfast, Domestic Flights in Turkey, Bosphorus Yacht Cruise, Private Airport Transfers, Underground City tour, All monument entries.
- Exclusions: International Flights, Turkey Visa, Hot Air Balloon ticket (~150-180 EUR optional), Personal expenses.

22. KASHMIR HEAVEN ON EARTH & SNOW VALLEY (4 Nights / 5 Days):
- Trip ID: LEDMC100210 | Lead Guest: Wholesale Direct Promotion | Pax: 2 Adults
- Route: Srinagar (2N) + Gulmarg (1N) + Pahalgam (1N)
- Pricing:
  * Per Adult Rate: INR 21,999 (~$265 USD)
  * Total Net Group Amount: INR 43,998
  * Land Package Option: From INR 21,999 (~$262 USD)
- Hotels & Stays: Luxury Dal Lake Houseboat Srinagar (1N) + 4★ Srinagar Hotel (1N) + 4★ Pine Resort Gulmarg (1N) + 4★ Valley Resort Pahalgam (1N)
- Flights: Available on request to Srinagar (SXR)
- Sightseeing Highlights: 1-Hour Shikara Ride on Dal Lake, Gulmarg Gondola Cable Car Phase 1 snow ride, Pahalgam Betaab Valley & Aru Valley excursion, Apple orchards & saffron fields in Pampore, Mughal Gardens (Shalimar & Nishat Bagh).
- Inclusions: 4 Nights Luxury Accommodations with Breakfast & Dinners (MAP Plan), Heated Private Chauffeur Cab throughout, 1-Hour Shikara ride, Airport pickups & drops.
- Exclusions: Airfare, Gulmarg Gondola Phase 2 tickets, Union cab in Pahalgam (Aru/Betaab), Personal pony rides.

============================================================`;

function detectDestination(text, currentActive = null) {
  if (!text) return currentActive;
  const t = text.toLowerCase();
  
  if (t.includes('malaysia') && t.includes('bali')) return 'malaysia-bali-combo';
  if (t.includes('canton') || (t.includes('china') && (t.includes('fair') || t.includes('guangzhou') || t.includes('business')))) return 'canton-fair-china-6n7d';
  if (t.includes('hong kong') || t.includes('macau')) return 'hong-kong-grand-6n7d';
  if (t.includes('sri lanka') || t.includes('colombo') || t.includes('kandy') || t.includes('bentota') || t.includes('nuwara eliya')) return 'sri-lanka-wonders-4n5d';
  if (t.includes('ujjain') || t.includes('omkareshwar') || t.includes('mahakal') || t.includes('indore') || t.includes('jyotirlinga')) return 'ujjain-omkareshwar-4n5d';
  if (t.includes('kashmir') || t.includes('gulmarg') || t.includes('dal lake') || t.includes('pahalgam') || t.includes('shikara')) return 'kashmir-paradise-21k';
  
  if (t.includes('kerala') || t.includes('munnar') || t.includes('alleppey') || t.includes('thekkady') || t.includes('kovalam')) {
    if (t.includes('darshan') || t.includes('honeymoon') || t.includes('luxury') || t.includes('marari')) return 'kerala-darshan-luxury-6n7d';
    return 'kerala-meghani-6n7d';
  }
  
  if (t.includes('singapore') || t.includes('sentosa') || t.includes('universal studios') || t.includes('mbs') || t.includes('marina bay')) {
    if (t.includes('6n') || t.includes('7d') || t.includes('grand') || t.includes('chhabra') || t.includes('leisure')) return 'singapore-grand-6n7d';
    if (t.includes('4n') || t.includes('5d') || t.includes('family') || t.includes('night safari')) return 'singapore-family-4n5d';
    return 'singapore-signature-3n4d';
  }
  
  if (t.includes('vietnam') || t.includes('da nang') || t.includes('phu quoc') || t.includes('sapa') || t.includes('hanoi') || t.includes('fansipan') || t.includes('ba na hills')) return 'vietnam-grand-expedition';
  
  if (t.includes('dubai') || t.includes('burj khalifa') || t.includes('abu dhabi') || t.includes('uae')) {
    if (t.includes('abu dhabi') || t.includes('5n') || t.includes('6d') || t.includes('bajaj') || t.includes('museum of the future')) return 'dubai-luxury-grand-5n6d';
    if (t.includes('royal') || t.includes('extended') || t.includes('atlantis') || t.includes('palm jumeirah') || t.includes('7d')) return 'dubai-extended-6n7d';
    return 'dubai-super-saver-4n5d';
  }
  
  if (t.includes('thailand') || t.includes('phuket') || t.includes('krabi') || t.includes('bangkok') || t.includes('phi phi')) {
    if (t.includes('5n') || t.includes('6d') || t.includes('luxury') || t.includes('rathi') || t.includes('westin')) return 'thailand-express-5n6d';
    return 'thailand-grand-signature';
  }
  
  if (t.includes('bali') || t.includes('ubud') || t.includes('nusa penida') || t.includes('kuta') || t.includes('tanah lot')) {
    if (t.includes('budget') || t.includes('leisure') || t.includes('grand barong')) return 'bali-leisure-6n7d';
    return 'bali-indonesia-signature';
  }
  
  if (t.includes('malaysia') || t.includes('genting') || t.includes('kuala lumpur') || t.includes('batu caves')) return 'malaysia-express-4n5d';
  if (t.includes('georgia') || t.includes('tbilisi') || t.includes('kazbegi') || t.includes('gudauri') || t.includes('300')) return 'georgia-magic-300';
  if (t.includes('turkey') || t.includes('cappadocia') || t.includes('istanbul') || t.includes('bosphorus')) return 'turkey-escape-42k';
  
  return currentActive;
}

function resolveActiveDestination(message, history, explicitActive) {
  // 1. Check current message
  const inMsg = detectDestination(message);
  if (inMsg) return inMsg;

  // 2. Check explicitActive passed from client
  if (explicitActive && PACKAGES_KNOWLEDGE[explicitActive]) return explicitActive;

  // 3. Scan history backwards
  if (Array.isArray(history) && history.length > 0) {
    for (let i = history.length - 1; i >= 0; i--) {
      const h = history[i];
      const text = typeof h === 'string' ? h : (h.text || (h.parts && h.parts[0]?.text) || h.message || '');
      const found = detectDestination(text);
      if (found) return found;
    }
  }

  return null;
}

function getPackageSummary(pkg) {
  return `✨ **${pkg.name} (${pkg.duration})**:
• **Trip ID**: ${pkg.trip_id} | **Lead Guest**: ${pkg.lead_guest} | **Pax**: ${pkg.pax}
• **Route**: ${pkg.destination}

💰 **Pricing**:
• **Per Adult Rate**: INR ${pkg.price_inr.toLocaleString('en-IN')} (~$${pkg.price_usd} USD)
• **Total Net Group Amount**: INR ${pkg.total_inr.toLocaleString('en-IN')}
• **Land Package Option**: From INR ${pkg.land_inr.toLocaleString('en-IN')} (~$${Math.round(pkg.land_inr / 84)} USD)

🏨 **Accommodations**:
${pkg.hotels}

🗺️ **Sightseeing Highlights**:
${pkg.highlights}

✅ **Inclusions**:
${pkg.inclusions}

❌ **Exclusions**:
${pkg.exclusions}

📲 [**Book ${pkg.name} on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20${encodeURIComponent(pkg.name)}%20voucher)`;
}

function generateSmartReply(message, history = [], activeDestination = null) {
  const msgLower = (message || '').toLowerCase().trim();
  
  // Resolve active destination with memory preservation
  const resolvedDest = resolveActiveDestination(message, history, activeDestination);
  const currentPkg = resolvedDest ? PACKAGES_KNOWLEDGE[resolvedDest] : null;

  // 1. GREETING HANDLER (helo, hello, hi, hey, hy, hola, namaste)
  if (msgLower.match(/^(hi|hello|helo|hey|hy|hola|namaste|good morning|good evening|yo)\b/i) && msgLower.split(/\s+/).length <= 4) {
    return {
      activeDestination: resolvedDest,
      reply: `Hey there! 👋 Welcome to Let's Explore DMC!

Tell me where you want to travel or what kind of trip you have in mind:
• 🍽️ *Dinner Cruise & Nightlife* or *4–5 Days Low Budget*
• 🏝️ *Bali / Thailand / Vietnam / Singapore / Malaysia*
• ❄️ *Georgia $300 / Kashmir Snow / Turkey Caves*
• 🥗 *Pure Veg/Jain friendly trips*, 💑 *Honeymoon Villas*, or 👨‍👩‍👧‍👦 *Family Holidays*!

How can I help plan your trip today?`
    };
  }

  // 2. ALTERNATIVES / "KUCH AUR BATAO" / "OTHER OPTIONS" / "OPTIONS" / "DUSRA" / "ISKE ALAWA"
  if (msgLower.match(/\b(alternate|alternative|alternatives|kuch aur|aur option|aur options|other option|other options|dusra|dusre|dusri|aur packages|aur dikhao|different|kuch naya|iske alawa|change destination|koi aur|options)\b/i)) {
    return {
      activeDestination: resolvedDest,
      reply: `🌟 **Here are Handpicked Alternate Packages Across 4 Distinct Travel Vibes**:

🏝️ **1. Tropical Island & Beach Villas**:
• 🏝️ **Bali Indonesia Signature (6N/7D)**: INR 96,068 (~$1,145 USD) with Flights & Ubud Pool Villa | Land from ₹39,014 (~$464 USD)
• 🇹🇭 **Thailand Island Hopper (7N/8D)**: INR 62,362 (~$745 USD) (Phuket, Krabi & Bangkok) | Land from ₹28,999 (~$345 USD)
• 🌴 **Sri Lanka Ramayana & Coast (4N/5D)**: INR 23,064 (~$275 USD) with Breakfast & Dinners included!

🏙️ **2. Futuristic City Luxury & Shopping**:
• 🇦🇪 **Dubai Highlights & Desert (4N/5D)**: INR 42,598 (~$507 USD) (Marina Dinner Cruise & Desert Safari)
• 🇸🇬 **Singapore Signature (3N/4D - 6N/7D)**: From INR 52,062 (~$620 USD) (Universal Studios & Sentosa)
• 🇲🇾 **Malaysia City & Highlands (4N/5D)**: INR 39,364 (~$469 USD) (KL Petronas + Genting Cable Car)

❄️ **3. Snow Mountains & Cave Wonders**:
• 🇬🇪 **Georgia Flash Deal (4N/5D)**: **$300 USD** (~₹28,999 INR) (Gudauri Snow & Kazbegi 4x4)
• 🏔️ **Kashmir Heaven on Earth (4N/5D)**: INR 21,999 (~$265 USD) (Dal Lake Houseboat with Breakfast & Dinners)
• 🇹🇷 **Turkey & Cappadocia Caves (4N/5D)**: INR 42,999 (~$515 USD) (Cave Suite & Hot Air Balloon Valley)

🛕 **4. Heritage, Backwaters & Spiritual**:
• 🌴 **Kerala God's Own Country (6N/7D)**: INR 24,750 (~$295 USD) (Munnar Tea Hills & Alleppey Houseboat)
• 🛕 **Ujjain Mahakal & Omkareshwar (4N/5D)**: INR 27,708 (~$330 USD) (VIP Jyotirlinga Darshan Assistance)

Tell me which vibe you prefer: **Beaches, Snow Mountains, Luxury City, or Hill Backwaters**?`
    };
  }

  // 3. FOOD / PURE VEG / JAIN FOOD / INDIAN MEALS
  if (msgLower.match(/\b(veg|vegetarian|pure veg|jain|jain food|halal|indian food|indian restaurant|khana|meals|bhojan|breakfast and dinner|food options|meal plan)\b/i)) {
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

  // 4. HONEYMOON / COUPLES / ROMANTIC TRIPS / POOL VILLAS
  if (msgLower.match(/\b(honeymoon|couple|couples|anniversary|romantic|candlelight|pool villa|private pool|flower bed|honeymooner)\b/i)) {
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

  // 5. FAMILY / KIDS / SENIOR CITIZENS / PARENTS
  if (msgLower.match(/\b(family|family trip|kids|children|child|child policy|parents|senior citizen|elderly|grandparents|theme park)\b/i)) {
    return {
      activeDestination: 'singapore-family-4n5d',
      reply: `👨‍👩‍👧‍👦 **Best Family-Friendly & Safe Vacation Packages**:

1. 🇸🇬 **Singapore Family Extravaganza (4N/5D - 6N/7D)** — *Top Family Pick!*:
• **Rate**: INR 58,563 (~$697 USD) per person
• **Highlights**: Universal Studios Singapore (all rides included), Sentosa Cable Car, S.E.A. Aquarium, Gardens by the Bay, Night Safari.
• **Child & Senior Friendly**: 100% stroller & wheelchair accessible, English-speaking, safest destination.

2. 🇦🇪 **Dubai Complete Royal Experience (6N/7D)**:
• **Rate**: INR 64,410 (~$767 USD) per person
• **Highlights**: Dubai Aquarium & Underwater Zoo, Miracle Garden, Global Village, Desert Safari & Marina Dhow Cruise.

3. 🌴 **Kerala God's Own Country (6N/7D)**:
• **Rate**: INR 24,750 (~$295 USD) per person
• **Highlights**: Gentle scenic drives, Munnar tea hills, spice plantations & peaceful Alleppey backwaters.

4. 🇭🇰 **Hong Kong & Macau Magic Tour (6N/7D)**:
• **Rate**: INR 130,985 (~$1,559 USD) per person
• **Highlights**: Full-Day Hong Kong Disneyland pass, Ocean Park & Venetian Macao.

👶 **Child Policy**: Infants under 2 years travel almost free (airline infant taxes only); kids aged 2–11 receive subsidized Child-Without-Bed (CNB) discounts!`
    };
  }

  // 6. BEST TIME TO VISIT / WEATHER / SEASONS / MONTHS
  if (msgLower.match(/\b(best time|when to visit|weather|season|climate|temperature|rain|barish|monsoon|snow|snowfall|december|january|summer|winter|kab jau|kab jana|which month)\b/i)) {
    return {
      activeDestination: resolvedDest,
      reply: `🌤️ **Best Time to Visit — Destination Weather Guide**:

• 🏝️ **Bali**: **April to October** is the dry season with bright blue skies & low humidity. (Nov–March has occasional tropical showers, but stays warm & offers huge luxury villa discounts).
• 🇹🇭 **Thailand**: **November to April** has dry, sunny & cool weather — perfect for island hopping. (May–October is lush green with wholesale resort deals).
• 🇦🇪 **Dubai**: **October to April** has ideal pleasant weather (24°C–30°C) for desert safaris, outdoor theme parks & beaches.
• 🇬🇪 **Georgia**: **December to March** for fresh snow skiing in Gudauri; **May to October** for warm valley walks & blooming vineyards.
• 🏔️ **Kashmir**: **December to February** for snowfall & Gulmarg snow sports; **March to October** for green valleys, Shikara rides & apple orchards.
• 🇻🇳 **Vietnam**: **November to April** is the ideal season across Sapa, Hanoi, Da Nang & Phu Quoc.

Which month are you planning to travel in? Tell me, and I'll match the best weather destination for you!`
    };
  }

  // 7. CUSTOMIZATION / ITINERARY CHANGES / EXTRA DAYS
  if (msgLower.match(/\b(customize|customise|customization|customised|change hotel|change days|extra day|extra days|modify|itinerary change|add a day|badhana|custom)\b/i)) {
    const destName = currentPkg ? `for **${currentPkg.name}**` : 'for any package';
    return {
      activeDestination: resolvedDest,
      reply: `🛠️ **100% Customization Available (Direct DMC Ground Advantage)**:

Because Let's Explore DMC manages operations directly on the ground, **every single itinerary can be tailored to your exact preferences ${destName}**:
• **Extend or Shorten Nights**: Add extra days in Kuala Lumpur, Ubud, Bangkok, or Dubai.
• **Hotel & Villa Upgrades**: Switch from 4★ hotels to 5★ luxury beachfront resorts or Private Pool Villas.
• **Custom Sightseeing**: Add private yacht charters, scuba diving, skydiving, or specialized day tours.
• **100% Private Vehicle**: All airport transfers & tours are in dedicated private AC vehicles with verified drivers — no sharing with strangers!

📲 [**Send your custom plan to our WhatsApp Desk (+91 80075 86871)**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20I%20want%20to%20customize%20my%20itinerary)`
    };
  }

  // 8. WITHOUT FLIGHTS / LAND ONLY PACKAGE
  if (msgLower.match(/\b(without flight|without flights|only land|land package|flight nahi chahiye|flights already booked|airfare excluded|own flight|own tickets)\b/i)) {
    if (currentPkg) {
      return {
        activeDestination: resolvedDest,
        reply: `🏷️ **Land-Only Package Rate for ${currentPkg.name} (${currentPkg.duration})**:
• **Land Package Rate**: From **INR ${currentPkg.land_inr.toLocaleString('en-IN')}** (~$${Math.round(currentPkg.land_inr / 84)} USD) per adult
• **Inclusions**: ${currentPkg.hotels}, 100% Private AC ground transfers, all sightseeing entrance passes, daily breakfast, and English-speaking guide assistance.
• **Exclusions**: International airfare (you book your own flights at your convenient timing).

📲 [**Book Land Package on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20I%20need%20land%20package%20for%20${encodeURIComponent(currentPkg.name)})`
      };
    }
    return {
      activeDestination: resolvedDest,
      reply: `🏷️ **Wholesale Land-Only Package Rates (Book your own flights, we manage everything on ground)**:
• 🇬🇪 **Georgia Flash Deal (4N/5D)**: **$300 USD** (~₹28,999 INR)
• 🌴 **Sri Lanka Ramayana (4N/5D)**: **INR 23,064** (~$275 USD) *(with Breakfast & Dinners)*
• 🏔️ **Kashmir Heaven on Earth (4N/5D)**: **INR 21,999** (~$265 USD) *(with Breakfast & Dinners)*
• 🌴 **Kerala Classic Tour (6N/7D)**: **INR 24,750** (~$295 USD)
• 🇹🇭 **Thailand Island Hopper (4N/5D - 5N/6D)**: From **INR 28,999** (~$345 USD)
• 🇦🇪 **Dubai Highlights & Desert (4N/5D)**: From **INR 29,999** (~$357 USD)
• 🏝️ **Bali Private Villa & Tours (6N/7D)**: From **INR 39,014** (~$464 USD)
• 🇲🇾 **Malaysia City & Highlands (4N/5D)**: From **INR 39,364** (~$469 USD)
• 🇹🇷 **Turkey & Cappadocia (4N/5D)**: From **INR 42,999** (~$515 USD)
• 🇸🇬 **Singapore Signature (3N/4D)**: From **INR 36,999** (~$440 USD)

Which destination do you want the detailed land itinerary for?`
    };
  }

  // 9. ADVENTURE & WATER SPORTS / SCUBA / SKYDIVING
  if (msgLower.match(/\b(scuba|scuba diving|snorkeling|water sports|parasailing|skydiving|bungee|atv|quad bike|rafting|adventure|hiking|trekking)\b/i)) {
    return {
      activeDestination: resolvedDest,
      reply: `🏄 **Thrilling Adventure & Water Sports Activities Across Packages**:

• 🏝️ **Bali (Included in our package!)**:
  - **90-min ATV Quad Biking** through Ubud jungle trails & waterfalls
  - **3-Hour Ayung River White Water Rafting** with buffet lunch
  - **Bali Jungle Swing** (Unlimited swings & bird nests)
  - **Nusa Penida Snorkeling**: Swim with Giant Manta Rays at Manta Point & Crystal Bay!
  - **Tanjung Benoa**: Parasailing, Jet Skiing & Banana Boat.

• 🇹🇭 **Thailand**:
  - Phi Phi Island deep sea snorkeling, Coral Island Sea Walking, Krabi sea kayaking & rock climbing.

• 🇦🇪 **Dubai**:
  - 4x4 Red Dune Bashing & Sandboarding (included in our Desert Safari), Skydive Dubai over Palm Jumeirah, Jet Skiing at Burj Al Arab.

• 🇬🇪 **Georgia**:
  - Gudauri Tandem Paragliding over Caucasus mountains, 4x4 Kazbegi off-road alpine safari.

Which activity excites you the most?`
    };
  }

  // 10. BOOKING PROCESS / ADVANCE / EMI / CANCELLATION
  if (msgLower.match(/\b(how to book|booking process|advance|token|emi|installment|cancellation|refund|kaise book kare|steps to book|payment terms)\b/i)) {
    return {
      activeDestination: resolvedDest,
      reply: `📝 **Simple & Transparent 4-Step Booking Process**:

1. **Step 1: Finalize Itinerary & Dates**
   Confirm your travel dates, passenger count, and hotel preferences with our destination manager.
2. **Step 2: Token Advance Payment (25% – 30%)**
   Pay token advance to instantly block airline group seats and lock wholesale hotel rates.
3. **Step 3: Official Confirmation Voucher Issued**
   Within 24–48 hours, receive your official **Let's Explore DMC Confirmation Voucher** with verified Trip ID, flight PNRs, and hotel reservation numbers.
4. **Step 4: Balance Payment & Travel Pack**
   Clear remaining balance 15–20 days prior to departure; receive your visas, day-wise cab vouchers, and 24/7 on-ground manager contacts.

💳 **Payment Options**: YES Bank NEFT/RTGS, UPI, Credit Cards, and Easy No-Cost EMI options available.
🛡️ **Cancellation & Rescheduling**: Flexible date changes supported up to 21 days before travel with nominal airline charges.`
    };
  }

  // 11. SOLO TRAVEL & FRIENDS / BACHELORS GROUP
  if (msgLower.match(/\b(solo|solo trip|friends|dost|dosto|bachelor|bachelorette|boys trip|girls trip)\b/i)) {
    return {
      activeDestination: 'thailand-grand-signature',
      reply: `🎉 **Top Picks for Friends, Bachelors & Solo Travelers**:

• 🇹🇭 **Thailand (Phuket + Krabi + Bangkok)** — *Party & Island Hopping*:
  - Bangla Road nightlife, Illuzion club, Patong beach parties, Phi Phi speedboat cruises & night markets.
  - Land package from ₹28,999 (~$345 USD) per person.

• 🏝️ **Bali (Kuta + Seminyak + Canggu)** — *Beach Clubs & Surfing*:
  - Finns Beach Club, Atlas Beach Fest, ATV quad biking, scooter exploration & cliffside sunset bars.
  - Land package from ₹39,014 (~$464 USD) per person.

• 🇦🇪 **Dubai** — *High Energy & Mega-Attractions*:
  - Desert quad biking, Marina yacht parties & Dubai Mall shopping.

• 🇬🇪 **Georgia** — *Epic Road Trips & Budget European Vibe*:
  - Just **$300 USD** for 5 days of snowy mountains, wine tasting & European cafes!`
    };
  }

  // 12. CONVERSATIONAL INTENT: DINNER / NIGHTLIFE / 4-5 DAYS / LOW BUDGET
  const hasDinnerOrNight = /\b(dinner|night|nightt|nightlife|party|club|clubs|evening|food)\b/i.test(msgLower);
  const hasLowBudget = /\b(low budget|budget is low|budget kam|kam budget|sasta|cheap|affordable|budget tight|low price|lowest)\b/i.test(msgLower);
  const hasShortDuration = /\b(4[\s-]*5\s*days?|4\s*days?|5\s*days?|45\s*days?|short trip|weekend)\b/i.test(msgLower);

  if ((hasDinnerOrNight && (hasLowBudget || hasShortDuration)) || (hasLowBudget && hasShortDuration) || (hasDinnerOrNight && hasLowBudget)) {
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

  // 13. Numeric budget inputs (e.g. 10k, 25000, 50k, 1 lakh, $300)
  const numMatch = msgLower.match(/\b(\d{1,3}(?:,\d{3})*|\d+)\s*(k|lakh|lac|l|thousand|rs|inr|usd|\$)?\b/i);
  let parsedBudget = 0;
  if (numMatch && !msgLower.match(/\b(day|days|night|nights|pax|people|person|adult|adults|child|kids)\b/i)) {
    let rawNum = parseFloat(numMatch[1].replace(/,/g, ''));
    let unit = (numMatch[2] || '').toLowerCase();
    if (unit === 'k' || unit === 'thousand') rawNum *= 1000;
    else if (unit === 'l' || unit === 'lakh' || unit === 'lac') rawNum *= 100000;
    else if (unit === 'usd' || unit === '$') rawNum *= 84;
    if (rawNum >= 1000) {
      parsedBudget = rawNum;
    }
  }

  if (parsedBudget > 0) {
    if (parsedBudget < 25000) {
      return {
        activeDestination: 'kashmir-paradise-21k',
        reply: `💡 **Best Options for your ~₹${Math.round(parsedBudget).toLocaleString('en-IN')} Budget**:
• 🏔️ **Kashmir Heaven on Earth (4N/5D)**: INR 21,999 (~$265 USD) per adult (Dal Lake Houseboat with Breakfast & Dinners)
• 🌴 **Sri Lanka Ramayana & Hill Country (4N/5D)**: INR 23,064 (~$275 USD) per adult (with Breakfast & Dinners)
• 🛕 **Ujjain Mahakal & Omkareshwar (4N/5D)**: INR 27,708 (~$330 USD) per adult
• 🇬🇪 **Georgia Flash Deal (4N/5D)**: $300 USD (~₹28,999 INR) (Tbilisi & Snowy Kazbegi)

Which one would you like full details for?`
      };
    } else if (parsedBudget <= 45000) {
      return {
        activeDestination: 'dubai-super-saver-4n5d',
        reply: `💎 **Best Packages for ~₹${Math.round(parsedBudget).toLocaleString('en-IN')} Budget**:
• 🌴 **Kerala God's Own Country (6N/7D)**: INR 24,750 (~$295 USD) per adult
• 🇬🇪 **Georgia Flash Deal (4N/5D)**: $300 USD (~₹28,999 INR)
• 🇲🇾 **Malaysia City & Highlands (4N/5D)**: INR 39,364 (~$469 USD) per adult
• 🏝️ **Bali Budget & Private Villa (6N/7D)**: INR 39,014 (~$464 USD) per adult
• 🇦🇪 **Dubai Highlights & Desert Dunes (4N/5D)**: INR 42,598 (~$507 USD) per adult
• 🇹🇷 **Turkey Escape & Cappadocia Wonders (4N/5D)**: INR 42,999 (~$515 USD) per adult

Tell me your preferred vibe: **Snow, Beaches, or City Luxury**?`
      };
    } else if (parsedBudget <= 80000) {
      return {
        activeDestination: 'thailand-grand-signature',
        reply: `✨ **Premium Verified Packages for ~₹${Math.round(parsedBudget).toLocaleString('en-IN')} Budget**:
• 🇸🇬 **Singapore Signature Experience (3N/4D)**: INR 52,062 (~$620 USD) per adult
• 🇹🇭 **Thailand Grand Signature (7N/8D)**: INR 62,362 (~$745 USD) per adult (Phuket + Krabi + Bangkok)
• 🇦🇪 **Dubai Complete Royal Experience (6N/7D)**: INR 64,410 (~$767 USD) per adult
• 🇨🇳 **Canton Fair Business & Guangzhou (6N/7D)**: INR 79,200 (~$943 USD) per adult
• 🇸🇬 **Singapore Grand Leisure & Sentosa (6N/7D)**: INR 82,800 (~$986 USD) per adult

Which destination would you like full details for?`
      };
    } else {
      return {
        activeDestination: 'malaysia-bali-combo',
        reply: `👑 **Ultra-Luxury Signature Experiences**:
• 🏝️ **Bali Signature Tour (6N/7D)**: INR 96,068 (~$1,145 USD) with Flights & Pool Villa
• 🇲🇾🇮🇩 **Malaysia with Bali Grand Combo (7N/8D)**: INR 122,138 (~$1,454 USD) with Flights & Visa
• 🇭🇰 **Hong Kong & Macau Magic Tour (6N/7D)**: INR 130,985 (~$1,559 USD) with Disneyland
• 🇻🇳 **Vietnam Grand Expedition (9N/10D)**: INR 148,000 (~$1,762 USD) with 3 Cable Cars & Flights

Shall I share the full itinerary for any of these?`
      };
    }
  }

  // 14. TARGETED QUESTIONS ON ACTIVE DESTINATION (STRICT MEMORY RETENTION)
  if (currentPkg) {
    // Price / Cost query
    if (msgLower.match(/\b(price|pricing|cost|amount|rate|rates|kitna|kharcha|paisa|budget|rupaye|inr|usd|dollar)\b/i)) {
      return {
        activeDestination: resolvedDest,
        reply: `💰 **Pricing Breakdown for ${currentPkg.name} (${currentPkg.duration})**:
• **Per Adult Rate**: INR ${currentPkg.price_inr.toLocaleString('en-IN')} (~$${currentPkg.price_usd} USD)
• **Total Net Group Amount (${currentPkg.pax})**: INR ${currentPkg.total_inr.toLocaleString('en-IN')}
• **Land Package Option (Excluding International Flights)**: From INR ${currentPkg.land_inr.toLocaleString('en-IN')} (~$${Math.round(currentPkg.land_inr / 84)} USD) per adult
• **Trip ID**: ${currentPkg.trip_id} | **Lead Guest**: ${currentPkg.lead_guest}

📲 [**Lock This Price on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20lock%20quote%20for%20${encodeURIComponent(currentPkg.name)})`
      };
    }

    // Inclusions & Exclusions query
    if (msgLower.match(/\b(inclusion|inclusions|exclusion|exclusions|include|included|kya milega|kya include hai|services)\b/i)) {
      return {
        activeDestination: resolvedDest,
        reply: `📋 **Inclusions & Exclusions for ${currentPkg.name} (${currentPkg.duration})**:

✅ **Verified Inclusions**:
${currentPkg.inclusions}

❌ **Exclusions**:
${currentPkg.exclusions}

📲 [**Get Full Official Voucher on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20share%20inclusions%20for%20${encodeURIComponent(currentPkg.name)})`
      };
    }

    // Hotel query
    if (msgLower.match(/\b(hotel|hotels|stay|stays|resort|resorts|room|rooms|villa|villas|accommodation|rehna)\b/i)) {
      return {
        activeDestination: resolvedDest,
        reply: `🏨 **Verified Accommodations for ${currentPkg.name} (${currentPkg.duration})**:
${currentPkg.hotels}

• All stays include daily buffet breakfast, verified 4★/5★ ratings, and private room category upgrades on request.`
      };
    }

    // Itinerary / Sightseeing / Places query
    if (msgLower.match(/\b(itinerary|iternrary|schedule|day|days|sightseeing|places|place|visit|kya dekhenge|activities|plan)\b/i)) {
      return {
        activeDestination: resolvedDest,
        reply: `🗺️ **Sightseeing & Itinerary Highlights for ${currentPkg.name} (${currentPkg.duration})**:
• **Route**: ${currentPkg.destination}

**Key Attractions & Tours Included**:
${currentPkg.highlights}

📲 [**Get Day-by-Day PDF Itinerary on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20share%20detailed%20itinerary%20for%20${encodeURIComponent(currentPkg.name)})`
      };
    }

    // Flights query
    if (msgLower.match(/\b(flight|flights|airline|airfare|ticket|tickets|indigo|batik|vietjet|airport)\b/i)) {
      return {
        activeDestination: resolvedDest,
        reply: `✈️ **Flight Details for ${currentPkg.name} (${currentPkg.duration})**:
• **Flight Status**: ${currentPkg.flights}
• Ground airport pickups and drops are 100% private in dedicated AC vehicles.`
      };
    }

    // If destination was newly mentioned
    if (detectDestination(message)) {
      return {
        activeDestination: resolvedDest,
        reply: getPackageSummary(currentPkg)
      };
    }
  }

  // 15. Destination explicitly mentioned (if not already handled)
  const newDest = detectDestination(message);
  if (newDest && PACKAGES_KNOWLEDGE[newDest]) {
    return {
      activeDestination: newDest,
      reply: getPackageSummary(PACKAGES_KNOWLEDGE[newDest])
    };
  }

  // 16. Affirmation / Ready to book
  if (msgLower.match(/^(yes|yep|sure|ok|okay|ha|haan|theek hai|sahi hai|deal|agree|done|send|bhejo)\b/i)) {
    const destText = currentPkg ? `for **${currentPkg.name}**` : '';
    return {
      activeDestination: resolvedDest,
      reply: `✨ **Great!** Our destination manager is ready to lock your booking ${destText} with direct wholesale DMC rates.

📲 [**Chat Directly with Destination Desk on WhatsApp (+91 80075 86871)**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20I%20am%20ready%20to%20finalize%20my%20trip!)`
    };
  }

  // 17. Contact / Bank Details
  if (msgLower.match(/\b(bank|account|payment|pay|ifsc|yes bank|phone|call|contact|office|address|amravati|hotline)\b/i)) {
    return {
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
    };
  }

  // 18. Visa queries
  if (msgLower.match(/\b(visa|passport|e-visa|evisa|entry requirement|documents)\b/i)) {
    return {
      activeDestination: resolvedDest,
      reply: `🛂 **Visa Guide for Indian Citizens**:
• 🇹🇭 **Thailand & Malaysia**: 100% Visa-Free entry for Indian passport holders!
• 🏝️ **Bali (Indonesia)**: 30-Day e-VOA online (~$35 USD) or on-arrival assistance.
• 🇬🇪 **Georgia**: Quick eVisa online (or Visa-on-Arrival if holding valid US, UK, Schengen, or UAE residence visa).
• 🇹🇷 **Turkey**: Instant eVisa (if holding valid US, UK, Schengen visa) or direct sticker visa assistance.
• 🇦🇪 **Dubai (UAE)**: Express 48–72 hour tourist visa processed directly by our team.
• 🇸🇬 **Singapore & Vietnam**: Smooth eVisa approvals arranged with all official package bookings!`
    };
  }

  // Fallback to active package if present
  if (currentPkg) {
    return {
      activeDestination: resolvedDest,
      reply: getPackageSummary(currentPkg)
    };
  }

  // General helpful response without robotic prefix
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
  };
}

// Export for Node CommonJS and ES Module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PACKAGES_KNOWLEDGE,
    MASTER_SYSTEM_PROMPT,
    detectDestination,
    resolveActiveDestination,
    generateSmartReply
  };
}

if (typeof window !== 'undefined') {
  window.PACKAGES_KNOWLEDGE = PACKAGES_KNOWLEDGE;
  window.MASTER_SYSTEM_PROMPT = MASTER_SYSTEM_PROMPT;
  window.detectDestination = detectDestination;
  window.resolveActiveDestination = resolveActiveDestination;
  window.generateSmartReply = generateSmartReply;
}
