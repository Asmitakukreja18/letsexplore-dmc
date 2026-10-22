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

const MASTER_SYSTEM_PROMPT = `You are Atlas, the elite Luxury Travel Concierge & Architect at Let's Explore DMC (Amravati, Maharashtra). Direct DMC for 22+ destinations including Turkey, Bali, Dubai, Georgia, Thailand, Singapore, Vietnam, Kashmir, Kerala, and Sri Lanka.

CORE ARCHITECTURE RULES:
1. INTENT-BASED FILTERING (STRICT):
   - User ne price pucha toh SIRF price aayega (Format 3). DO NOT dump itinerary or hotels!
   - User ne itinerary puchi toh SIRF day-wise itinerary aayegi (Format 2). ZERO price clutter!
   - User ne hotels puche toh SIRF hotels and stay details aayenge (Format 5). DO NOT dump price or itinerary!
   - User ne package overview pucha ("tell me about dubai package", "what is included"): Follow Format 1.
   - User ne suggestions maange ("kahan jau", "options do", "suggest me", "confused"): Give categorized suggestions with direct website links without forcing WhatsApp!
   - User ne pucha "website pe kahan hai / link do / nahi mil raha": Give direct website link and snapshot.

2. VISUAL BULLET STRUCTURE:
   - Always break paragraphs into clean visual points using curated icons (🏨 Stay, 🏙 Sightseeing, 🏜 Adventure, 🚢 Experience, 🚗 Transfers, 💎 Rate, 📅 Day, ✅ Inclusions, ❌ Exclusions).

3. ZERO HALLUCINATION:
   - Strictly quote real locked wholesale rates and verified hotel names from our 22 DMC vouchers.

4. 1-CLICK ACTIONS & WEBSITE EXPLORATION:
   - Provide direct website page links for on-site exploration and WhatsApp booking links for rate locks.

5 STANDARD RESPONSE FORMATS:
📌 FORMAT 1: Package & Overview Query
When user asks about a destination package or what is included:
1 Persona & Welcome: "Hello! I am Atlas, your Luxury Travel Architect at Let's Explore DMC."
2 Core Package & Rate: "💎 Our [Package Name] starts from ₹[Price] per person ([Duration])."
3 Key Inclusions (Bulleted Icons):
  • 🏨 Stay: [Hotels & Breakfast]
  • 🏙 Sightseeing: [Major Landmark / Observation Tickets]
  • 🏜 Adventure: [Safari / Island / Cable Car / Adventure]
  • 🚢 Experience: [Cruise / Cultural / Specialty Dinner]
  • 🚗 Transfers: [100% Private AC Airport & Tour Transfers]
4 Real-world Transparency Note: "Note: Final price depends on your travel dates, departure city, and hotel preference (4★ vs 5★)."
5 Direct Next Step / CTA: Website Link + WhatsApp Link.

📌 FORMAT 2: Itinerary Only Query
When user asks for itinerary / day-wise plan ("Give me a 5-day itinerary for Georgia, no price right now"):
"Here is your [Duration] curated route for [Destination]:
📅 Day 1: [Day 1 Route & Title] → [Highlights]
📅 Day 2: [Day 2 Route & Title] → [Highlights]
📅 Day 3: [Day 3 Route & Title] → [Highlights]
📅 Day 4: [Day 4 Route & Title] → [Highlights]
📅 Day 5: [Day 5 Route & Title] → [Highlights]
👉 Would you like recommendations on verified 4★ hotels or flight options for these dates?
[🌐 View Full Itinerary on Website]([destination]-package.html)"
(ZERO price clutter!)

📌 FORMAT 3: Price-Specific Query
When user asks for price / cost / rate / budget ("Turkey package ka exact price kya hai?"):
"💎 [Package Name] ([Duration])
• Per Adult Rate: ₹[Price] (~$[USD] USD)
• Total for 2 Adults: ₹[Total]
• Land Package (Ex-[Country]): From ₹[Land] / person
• Includes: [Top 4 Highlights]
[🌐 View Package Page]([destination]-package.html)
📲 [Lock this Rate on WhatsApp (+91 80075 86871)](https://wa.me/918007586871?text=...)"

📌 FORMAT 4: Language Matching (Hindi / Hinglish)
User jis language me bolega, AI usi tone me connect karega:
e.g. User: "Mujhe Bali ka honeymoon plan batao under 50k"
AI: "Namaste! Bali honeymoon ke liye ₹48,999 per person me hamara 6D/5N package perfect rahega:
• 🏨 Stays: Kuta Beach Resort (3N) + Ubud me Luxury Private Pool Villa (2N)
• 🍳 Special: Villa me Floating Breakfast & Romantic Candlelight Dinner
• 🏝 Island Tour: Nusa Penida West Speedboat Tour (Kelingking Beach & Snorkeling)
• 🚗 Comfort: 100% Dedicated Private AC Car with Chauffeur
Aap tentative travel month aur departure city bataiye, taaki flight ke sath exact quote share kar sakein!
[🌐 Website par Bali Honeymoon Package dekhein](bali-package.html)
📲 [WhatsApp par direct travel architect se baat karein](https://wa.me/918007586871?text=...)"

📌 FORMAT 5: Hotels & Stays Only Query
When user asks for hotels or rooms ("Which hotels do you provide in Thailand?"):
"🏨 Verified Accommodations for [Package Name] ([Duration])
1. [City 1] ([Nights] Nights): [Hotel Name] ([Star Rating] & [Room Type])
2. [City 2] ([Nights] Nights): [Hotel Name] ([Star Rating] & [Room Type])
• All hotels include daily buffet breakfast, certified cleanliness ratings, and free room upgrades on advance bookings.
[🌐 View Hotels & Details on Website]([destination]-package.html)"
(ZERO price dump!)

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

function detectLanguage(text) {
  if (!text) return 'english';
  // Check for Devanagari Hindi script (Unicode range: \u0900-\u097F)
  if (/[\u0900-\u097F]/.test(text)) {
    return 'hindi';
  }
  // Check for Roman Hindi / Hinglish keywords
  const hinglishWords = /\b(mujhe|hume|humko|batao|btao|bataiye|hoga|hogi|hoge|kaise|kya|chahiye|kitna|kitne|kitni|kharcha|hai|hain|karna|karo|kare|karenge|aap|tum|kaun|konsa|kaisi|rahega|jana|jaana|ghoomne|sasta|saste|kam|baad|pehle|din|raat|raatein|bhejo|dekhna|milega|milegi|khana|bhojan|thike|accha|sahi|dosto|dost|bhyi|samaj|tu|teri|mera|meri|humare|shamil|kripya)\b/i;
  if (hinglishWords.test(text)) {
    return 'hinglish';
  }
  return 'english';
}

function getPackageWebUrl(pkgOrDestId) {
  const str = String(pkgOrDestId || '').toLowerCase();
  if (str.includes('turkey')) return 'turkey-package.html';
  if (str.includes('bali')) return 'bali-package.html';
  if (str.includes('dubai')) return 'dubai-package.html';
  if (str.includes('georgia')) return 'georgia-package.html';
  if (str.includes('thailand') || str.includes('phuket') || str.includes('krabi')) return 'thailand-package.html';
  if (str.includes('singapore')) return 'singapore-package.html';
  if (str.includes('vietnam')) return 'vietnam-package.html';
  if (str.includes('srilanka') || str.includes('sri-lanka') || str.includes('sri lanka')) return 'srilanka-package.html';
  if (str.includes('malaysia')) return 'malaysia-package.html';
  if (str.includes('kashmir')) return 'kashmir-package.html';
  if (str.includes('kerala')) return 'kerala-package.html';
  if (str.includes('andaman')) return 'andaman-package.html';
  if (str.includes('manali')) return 'manali-package.html';
  if (str.includes('nepal')) return 'nepal-package.html';
  if (str.includes('ujjain')) return 'ujjain-package.html';
  return 'deals.html';
}

function getPackageSummary(pkg, lang = 'english') {
  const id = (pkg.id_code || '').toLowerCase();
  const pageUrl = getPackageWebUrl(pkg.id_code);
  const waUrl = `https://wa.me/918007586871?text=${encodeURIComponent('Hello Lets Explore DMC, please share customized quote for ' + pkg.name)}`;

  let inclusionsListEn = [];
  let inclusionsListHi = [];
  let inclusionsListHing = [];

  if (id.includes('dubai')) {
    inclusionsListEn = [
      "🏨 **Stay**: 4★ Luxury Hotel with Daily Buffet Breakfast",
      "🏙 **Sightseeing**: Burj Khalifa 124th Floor Observation Deck Tickets",
      "🏜 **Adventure**: VIP Desert Safari with 4x4 Dune Bashing & BBQ Dinner",
      "🚢 **Experience**: Dubai Marina Luxury Dhow Cruise with Dinner",
      "🚗 **Transfers**: 100% Private AC Airport & Tour Transfers"
    ];
    inclusionsListHi = [
      "🏨 **स्टे**: 4★ लग्जरी होटल और प्रतिदिन बुफे नाश्ता (Breakfast)",
      "🏙 **दर्शनीय स्थल**: बुर्ज खलीफा 124वीं मंजिल ऑब्जर्वेशन डेक टिकट",
      "🏜 **एडवेंचर**: वीआईपी डेजर्ट सफारी, 4x4 ड्यून बैशिंग और भव्य BBQ डिनर",
      "🚢 **अनुभव**: दुबई मरीना लग्जरी धो क्रूज़, बुफे डिनर और लाइव म्यूजिक",
      "🚗 **ट्रांसफर**: 100% प्राइवेट AC एयरपोर्ट और सभी टूर ट्रांसफर"
    ];
    inclusionsListHing = [
      "🏨 **Stay**: 4★ Luxury Hotel with Daily Buffet Breakfast",
      "🏙 **Sightseeing**: Burj Khalifa 124th Floor Observation Deck Tickets",
      "🏜 **Adventure**: VIP Desert Safari with 4x4 Dune Bashing & BBQ Dinner",
      "🚢 **Experience**: Dubai Marina Luxury Dhow Cruise with Dinner",
      "🚗 **Transfers**: 100% Private AC Airport & Tour Transfers"
    ];
  } else if (id.includes('bali')) {
    inclusionsListEn = [
      "🏨 **Stay**: 4★ Kuta Resort (4N) + Ubud Luxury Private Pool Villa (2N) with Daily Breakfast",
      "🏝 **Island Tour**: Full-Day Nusa Penida West Speedboat Tour (Kelingking T-Rex Beach & Snorkeling)",
      "🏜 **Adventure**: 90-min ATV Quad Biking + 3-Hour Ayung River Rafting + Bali Jungle Swing",
      "🌅 **Sunset Culture**: Uluwatu Cliff Sunset Temple & Kecak Fire Dance Show",
      "🚗 **Transfers**: 100% Dedicated Private AC Car with Chauffeur throughout"
    ];
    inclusionsListHi = [
      "🏨 **स्टे**: कूटा रिसॉर्ट (4 रातें) + उबूद में प्राइवेट 1-बेडरूम पूल विला (2 रातें) नाश्ते सहित",
      "🏝 **आइलैंड टूर**: नुसा पेनिडा वेस्ट स्पीडबोट टूर (केलिंगकिंग बीच और स्नोर्कलिंग)",
      "🏜 **एडवेंचर**: 90-मिनट ATV क्वाड बाइकिंग + 3-घंटे अयुंग रिवर राफ्टिंग + जंगल स्विंग",
      "🌅 **संस्कृति**: उलुवातु क्लिफ सनसेट मंदिर और प्रसिद्ध केचक फायर डांस शो",
      "🚗 **ट्रांसफर**: पूरे टूर में 100% प्राइवेट AC गाड़ी और समर्पित ड्राइवर"
    ];
    inclusionsListHing = [
      "🏨 **Stay**: 4★ Kuta Resort (4N) + Ubud me Luxury Private Pool Villa (2N) with Daily Breakfast",
      "🏝 **Island Tour**: Full-Day Nusa Penida West Speedboat Tour (Kelingking Beach & Snorkeling)",
      "🏜 **Adventure**: 90-min ATV Quad Biking + 3-Hour Ayung River Rafting + Bali Jungle Swing",
      "🌅 **Sunset Culture**: Uluwatu Cliff Sunset Temple & Kecak Fire Dance Show",
      "🚗 **Transfers**: 100% Dedicated Private AC Car with Chauffeur throughout"
    ];
  } else if (id.includes('thailand')) {
    inclusionsListEn = [
      "🏨 **Stay**: 4★/5★ Beachfront Resort stays in Phuket & Krabi with Daily Buffet Breakfast",
      "🏝 **Island Tour**: Full-Day Phi Phi Island Speedboat Cruise with Maya Bay & Snorkeling",
      "🚢 **Experience**: Evening Chao Phraya River Luxury Dinner Cruise & Bangkok City Tour",
      "🐅 **Adventure**: Krabi 4-Island Tour with Picnic Lunch & Safari World Marine Park",
      "🚗 **Transfers**: 100% Private AC Airport & Inter-city Transfers throughout"
    ];
    inclusionsListHi = [
      "🏨 **स्टे**: फुकेत और क्राबी में 4★/5★ बीचफ्रंट रिसॉर्ट स्टे और प्रतिदिन बुफे नाश्ता",
      "🏝 **आइलैंड टूर**: फी फी आइलैंड स्पीडबोट क्रूज़, स्नोर्कलिंग और माया बे पास",
      "🚢 **अनुभव**: चाओ फ्राया रिवर लग्जरी डिनर क्रूज़ और बैंकॉक सिटी टूर",
      "🐅 **एडवेंचर**: क्राबी 4-आइलैंड टूर, पिकनिक लंच और सफारी वर्ल्ड मरीन पार्क",
      "🚗 **ट्रांसफर**: पूरे टूर में 100% प्राइवेट AC एयरपोर्ट और इंटर-सिटी ट्रांसफर"
    ];
    inclusionsListHing = [
      "🏨 **Stay**: 4★/5★ Beachfront Resort stays in Phuket & Krabi with Daily Buffet Breakfast",
      "🏝 **Island Tour**: Full-Day Phi Phi Island Speedboat Cruise with Maya Bay & Snorkeling",
      "🚢 **Experience**: Evening Chao Phraya River Luxury Dinner Cruise & Bangkok City Tour",
      "🐅 **Adventure**: Krabi 4-Island Tour with Picnic Lunch & Safari World Marine Park",
      "🚗 **Transfers**: 100% Private AC Airport & Inter-city Transfers throughout"
    ];
  } else if (id.includes('georgia')) {
    inclusionsListEn = [
      "🏨 **Stay**: 4★ Boutique Hotel in Old Tbilisi with Daily Buffet Breakfast",
      "🏔 **Snow Adventure**: Gudauri Ski Resort & Snowy Caucasus Friendship Monument",
      "🚙 **Off-road**: 4x4 Extreme Mountain Jeep Safari to Kazbegi Gergeti Trinity Church (2,170m)",
      "🍇 **Culture**: Historic Old Tbilisi Cable Car, Bridge of Peace & Traditional Wine Cellar Tasting",
      "🚗 **Transfers**: 100% Private 4x4 Vehicle with Chauffeur throughout"
    ];
    inclusionsListHi = [
      "🏨 **स्टे**: त्बिलिसी ओल्ड टाउन में 4★ बुटीक होटल और प्रतिदिन बुफे नाश्ता",
      "🏔 **स्नो एडवेंचर**: गुदौरी स्की रिसॉर्ट और बर्फीला फ्रेंडशिप मॉन्यूमेंट टूर",
      "🚙 **माउंटेन सफारी**: काजबेगी गेर्गेटी ट्रिनिटी चर्च (2,170m) तक 4x4 रोमांचक जीप सफारी",
      "🍇 **संस्कृति**: नरीकला केबल कार, ब्रिज ऑफ पीस और पारंपरिक जॉर्जियन वाइन चखना",
      "🚗 **ट्रांसफर**: पूरे टूर में 100% प्राइवेट 4x4 गाड़ी और समर्पित ड्राइवर"
    ];
    inclusionsListHing = [
      "🏨 **Stay**: 4★ Boutique Hotel in Old Tbilisi with Daily Buffet Breakfast",
      "🏔 **Snow Adventure**: Gudauri Ski Resort & Snowy Caucasus Friendship Monument",
      "🚙 **Off-road**: 4x4 Extreme Mountain Jeep Safari to Kazbegi Gergeti Trinity Church (2,170m)",
      "🍇 **Culture**: Historic Old Tbilisi Cable Car, Bridge of Peace & Traditional Wine Cellar Tasting",
      "🚗 **Transfers**: 100% Private 4x4 Vehicle with Chauffeur throughout"
    ];
  } else if (id.includes('turkey')) {
    inclusionsListEn = [
      "🏨 **Stay**: 5★ Authentic Cave Resort in Cappadocia (2N) + 4★ Istanbul Hotel (2N) with Daily Breakfast",
      "🎈 **Adventure**: Sunrise Hot Air Balloon Valley Flight Viewing with Champagne Toast",
      "🚢 **Experience**: Private Sunset Bosphorus Luxury Yacht Cruise in Istanbul",
      "🏛 **Sightseeing**: Goreme Open Air Museum, Derinkuyu Underground City & Hagia Sophia",
      "🚗 **Transfers**: 100% Private AC Transfers + Domestic Return Flights in Turkey"
    ];
    inclusionsListHi = [
      "🏨 **स्टे**: कप्पाडोसिया में 5★ ऑथेंटिक केव रिसॉर्ट (2N) + इस्तांबुल में 4★ होटल (2N) नाश्ते सहित",
      "🎈 **एडवेंचर**: फेयरी चिमनी घाटियों के ऊपर सनराइज हॉट एयर बैलून राइड का विहंगम दृश्य",
      "🚢 **अनुभव**: इस्तांबुल में यूरोप और एशिया के बीच सनसेट बॉस्फोरस लग्जरी यॉट क्रूज़",
      "🏛 **दर्शनीय स्थल**: गोरेमे ओपन एयर म्यूजियम, डेरिनकुयू अंडरग्राउंड सिटी और हागिया सोफिया",
      "🚗 **ट्रांसफर**: 100% प्राइवेट AC एयरपोर्ट ट्रांसफर + तुर्की में डोमेस्टिक फ्लाइट्स शामिल"
    ];
    inclusionsListHing = [
      "🏨 **Stay**: 5★ Authentic Cave Resort in Cappadocia (2N) + 4★ Istanbul Hotel (2N) with Daily Breakfast",
      "🎈 **Adventure**: Sunrise Hot Air Balloon Valley Flight Viewing with Champagne Toast",
      "🚢 **Experience**: Private Sunset Bosphorus Luxury Yacht Cruise in Istanbul",
      "🏛 **Sightseeing**: Goreme Open Air Museum, Derinkuyu Underground City & Hagia Sophia",
      "🚗 **Transfers**: 100% Private AC Transfers + Domestic Return Flights in Turkey"
    ];
  } else if (id.includes('singapore')) {
    inclusionsListEn = [
      "🏨 **Stay**: 4★ Central City Hotel with Daily Buffet Breakfast",
      "🎢 **Theme Park**: Universal Studios Singapore 1-Day Pass with all rides",
      "🏙 **Sightseeing**: Marina Bay Sands (MBS) Skypark & Gardens by the Bay (Flower Dome & Cloud Forest)",
      "🌅 **Experience**: Sentosa Cable Car Skypass & Wings of Time Sunset Laser Show",
      "🚗 **Transfers**: 100% Private Changi Airport & Sightseeing Transfers"
    ];
    inclusionsListHi = [
      "🏨 **स्टे**: 4★ प्रीमियम सिटी होटल और प्रतिदिन बुफे नाश्ता",
      "🎢 **थीम पार्क**: फुल-डे यूनिवर्सल स्टूडियोज सिंगापुर पास (सभी राइड्स शामिल)",
      "🏙 **दर्शनीय स्थल**: मरीना बे सैंड्स (MBS) स्काईपार्क और गार्डन्स बाय द बे प्रवेश",
      "🌅 **अनुभव**: सेंटोसा केबल कार और विंग्स ऑफ टाइम सनसेट लेजर शो",
      "🚗 **ट्रांसफर**: 100% प्राइवेट AC एयरपोर्ट और दर्शनीय स्थल ट्रांसफर"
    ];
    inclusionsListHing = [
      "🏨 **Stay**: 4★ Central City Hotel with Daily Buffet Breakfast",
      "🎢 **Theme Park**: Universal Studios Singapore 1-Day Pass with all rides",
      "🏙 **Sightseeing**: Marina Bay Sands (MBS) Skypark & Gardens by the Bay",
      "🌅 **Experience**: Sentosa Cable Car Skypass & Wings of Time Sunset Laser Show",
      "🚗 **Transfers**: 100% Private Changi Airport & Sightseeing Transfers"
    ];
  } else if (id.includes('kashmir')) {
    inclusionsListEn = [
      "🏨 **Stay**: Luxury Dal Lake Houseboat + 4★ Srinagar Hotel with Breakfast & Dinners (MAP Plan)",
      "🚣 **Experience**: 1-Hour Sunset Shikara Ride on Dal Lake",
      "❄️ **Snow Adventure**: Gulmarg Gondola Phase 1 Snow Expedition",
      "🌲 **Excursion**: Pahalgam Betaab Valley & Aru Valley excursion with saffron field visits",
      "🚗 **Transfers**: 100% Dedicated Heated Chauffeur Cab throughout"
    ];
    inclusionsListHi = [
      "🏨 **स्टे**: डल झील पर लग्जरी हाउसबोट + श्रीनगर 4★ होटल (नाश्ता और डिनर सहित - MAP प्लान)",
      "🚣 **अनुभव**: डल झील पर 1 घंटे की सनसेट शिकारा राइड",
      "❄️ **स्नो एडवेंचर**: गुलमर्ग गोंडोला फेज़ 1 स्नो टूर और बर्फबारी के नजारे",
      "🌲 **एक्सकर्शन**: पहलगाम बेताब वैली और अरू वैली टूर, केसर के खेत और सेब के बागान",
      "🚗 **ट्रांसफर**: पूरे टूर में 100% प्राइवेट हीटेड कैब और समर्पित ड्राइवर"
    ];
    inclusionsListHing = [
      "🏨 **Stay**: Luxury Dal Lake Houseboat + 4★ Srinagar Hotel with Breakfast & Dinners (MAP Plan)",
      "🚣 **Experience**: 1-Hour Sunset Shikara Ride on Dal Lake",
      "❄️ **Snow Adventure**: Gulmarg Gondola Phase 1 Snow Expedition",
      "🌲 **Excursion**: Pahalgam Betaab Valley & Aru Valley with saffron field visits",
      "🚗 **Transfers**: 100% Dedicated Heated Chauffeur Cab throughout"
    ];
  } else {
    const raw = (pkg.inclusions || '').split(/,\s*/);
    inclusionsListEn = raw.slice(0, 4).map(it => `• ✅ **Included**: ${it.trim()}`);
    inclusionsListEn.push("• 🚗 **Transfers**: 100% Private AC Airport & Sightseeing Transfers");
    inclusionsListHing = [...inclusionsListEn];
    inclusionsListHi = [
      "• 🏨 **स्टे**: 4★/5★ होटल में ठहरना और प्रतिदिन नाश्ता",
      "• 🏙 **दर्शनीय स्थल**: सभी प्रमुख पर्यटन आकर्षणों के प्रवेश टिकट",
      "• 🚗 **ट्रांसफर**: 100% प्राइवेट AC गाड़ी और समर्पित ड्राइवर"
    ];
  }

  // Devanagari Hindi Response (Format 1)
  if (lang === 'hindi') {
    const bulletsHi = inclusionsListHi.map(it => it.startsWith('•') ? it : `• ${it}`).join('\n');
    return `नमस्ते! मैं एटलस हूँ, Let's Explore DMC में आपका लग्जरी ट्रैवल आर्किटेक्ट।

💎 **हमारा ${pkg.name} ₹${pkg.price_inr.toLocaleString('en-IN')} प्रति व्यक्ति से शुरू होता है (${pkg.duration})।**

• **मुख्य सुविधाएं (Key Inclusions)**:
${bulletsHi}

• **जरूरी जानकारी (Pricing Transparency Note)**:
नोट: अंतिम कीमत आपकी यात्रा की तारीखों, प्रस्थान शहर और होटल श्रेणी (4★ या 5★) पर निर्भर करती है।

• **अगला कदम (Direct Next Step)**:
[🌐 वेबसाइट पर ${pkg.name} का आधिकारिक पेज देखें](${pageUrl})
📲 [**व्हाट्सएप (+91 80075 86871) पर तुरंत कस्टमाइज करें**](${waUrl})`;
  }

  // Hinglish Response (Format 1)
  if (lang === 'hinglish') {
    const bulletsHing = inclusionsListHing.map(it => it.startsWith('•') ? it : `• ${it}`).join('\n');
    return `Hello! Main Atlas hoon, Let's Explore DMC me aapka Luxury Travel Architect.

💎 **Hamara ${pkg.name} starts from ₹${pkg.price_inr.toLocaleString('en-IN')} per person (${pkg.duration})।**

• **Key Inclusions**:
${bulletsHing}

• **Pricing & Real-world Transparency Note**:
Note: Final price aapki travel dates, departure city aur hotel preference (4★ vs 5★) par depend karta hai.

• **Direct Next Step**:
[🌐 View ${pkg.name} Page on Website](${pageUrl})
📲 [**Chat on WhatsApp (+91 80075 86871) for Instant Customization**](${waUrl})`;
  }

  // Default English Response (Format 1)
  const bulletsEn = inclusionsListEn.map(it => it.startsWith('•') ? it : `• ${it}`).join('\n');
  return `Hello! I am Atlas, your Luxury Travel Architect at Let's Explore DMC.

💎 **Our ${pkg.name} starts from ₹${pkg.price_inr.toLocaleString('en-IN')} per person (${pkg.duration}).**

• **Key Inclusions**:
${bulletsEn}

• **Real-world Transparency Note**:
Note: Final price depends on your travel dates, departure city, and hotel preference (4★ vs 5★).

• **Direct Next Step**:
[🌐 View ${pkg.name} Page on Website](${pageUrl})
📲 [**Chat on WhatsApp (+91 80075 86871) for Instant Customization**](${waUrl})`;
}

function getPackagePriceOnly(pkg, lang = 'english') {
  const perAdult = `₹${pkg.price_inr.toLocaleString('en-IN')} (~$${pkg.price_usd} USD)`;
  const total2 = `₹${(pkg.price_inr * 2).toLocaleString('en-IN')}`;
  const landRate = `₹${pkg.land_inr.toLocaleString('en-IN')}`;
  const webUrl = getPackageWebUrl(pkg.id_code);
  const waUrl = `https://wa.me/918007586871?text=${encodeURIComponent('Hello Lets Explore DMC, I want to lock rate for ' + pkg.name)}`;

  let summary = '';
  const id = (pkg.id_code || '').toLowerCase();
  if (id.includes('turkey')) {
    summary = '5★ Cave Resort in Cappadocia (2N) + 4★ Istanbul Hotel (2N) + Hot Air Balloon Valley Tour + Bosphorus Cruise';
  } else if (id.includes('dubai')) {
    summary = '4★ Luxury Hotel (4N) + Burj Khalifa 124th Floor + Desert Safari with BBQ Dinner + Marina Dhow Cruise';
  } else if (id.includes('georgia')) {
    summary = '4★ Old Tbilisi Hotel (4N) + Gudauri Ski Resort + Kazbegi 4x4 Mountain Safari + Wine Tasting';
  } else if (id.includes('bali')) {
    summary = '4★ Kuta Resort (4N) + Ubud Private Pool Villa (2N) + Nusa Penida Speedboat Tour + 90-min ATV & Rafting';
  } else if (id.includes('thailand')) {
    summary = '4★ Beachfront Resorts in Phuket & Krabi + Phi Phi Island Cruise + Chao Phraya Dinner Cruise';
  } else {
    summary = pkg.highlights ? pkg.highlights.split(/,\s*|\.\s*/).slice(0, 4).join(' + ') : 'Luxury Stays + Private Transfers + Sightseeing';
  }

  if (lang === 'hindi') {
    return `💎 **${pkg.name} (${pkg.duration})**
• **प्रति वयस्क दर (Per Adult Rate)**: ${perAdult}
• **2 वयस्कों का कुल (Total for 2 Adults)**: ${total2}
• **लैंड पैकेज (Land Package Ex-Origin)**: ${landRate} प्रति व्यक्ति से
• **शामिल**: ${summary}

[🌐 वेबसाइट पर ${pkg.name} का आधिकारिक पेज देखें](${webUrl})
📲 [**व्हाट्सएप (+91 80075 86871) पर यह रेट लॉक करें**](${waUrl})`;
  }

  return `💎 **${pkg.name} (${pkg.duration})**
• **Per Adult Rate**: ${perAdult}
• **Total for 2 Adults**: ${total2}
• **Land Package (Ex-Origin)**: From ${landRate} / person
• **Includes**: ${summary}

[🌐 View ${pkg.name} Page on Website](${webUrl})
📲 [**Lock this Rate on WhatsApp (+91 80075 86871)**](${waUrl})`;
}

function getPackageHotelsOnly(pkg, lang = 'english') {
  const webUrl = getPackageWebUrl(pkg.id_code);
  const id = (pkg.id_code || '').toLowerCase();
  let hotelList = [];

  if (id.includes('thailand')) {
    hotelList = [
      "Phuket (3 Nights): Panwaburi Beachfront Resort (4★ Deluxe Room)",
      "Krabi (2 Nights): Aonang Paradise Resort (4★ Deluxe Pool View)",
      "Bangkok (2 Nights): Platinum Suite / Similar (4★ Premium City Hotel)"
    ];
  } else if (id.includes('dubai')) {
    hotelList = [
      "Dubai City (4 Nights): Citymax Bur Dubai / Millennium Central Downtown (4★ Premium City Hotel)"
    ];
  } else if (id.includes('bali')) {
    hotelList = [
      "Kuta Beach (4 Nights): Kuta Beach Club Hotel (4★ Deluxe Room)",
      "Ubud (2 Nights): Maharaja Villa / Alam Ubud (4★ 1-Bedroom Private Pool Villa)"
    ];
  } else if (id.includes('georgia')) {
    hotelList = [
      "Old Tbilisi (4 Nights): 4★ Boutique Hotel in Old Tbilisi (City Center Deluxe Room)"
    ];
  } else if (id.includes('turkey')) {
    hotelList = [
      "Cappadocia (2 Nights): 5★ Authentic Luxury Cave Resort (Deluxe Cave Suite)",
      "Istanbul (2 Nights): 4★ Taksim / Sultanahmet Hotel (Superior City Room)"
    ];
  } else if (id.includes('singapore')) {
    hotelList = [
      "Singapore City (3-4 Nights): Novotel Singapore on Stevens / V Hotel (4★ Premium Deluxe)"
    ];
  } else if (id.includes('vietnam')) {
    hotelList = [
      "Sapa (2 Nights): Sapagreen Hotel (3★ Superior Mountain View)",
      "Hanoi (1 Night): TK123 Hotel Hanoi (3★ Old Quarter Superior)",
      "Da Nang (3 Nights): Cosmos Hotel Da Nang (4★ Deluxe City View)",
      "Phu Quoc (3 Nights): Gaia Hotel Phu Quoc (4★ Beach Resort)"
    ];
  } else if (id.includes('kashmir')) {
    hotelList = [
      "Dal Lake (1 Night): Luxury Dal Lake Houseboat (Deluxe Heated Cedar Wood Suite)",
      "Srinagar (3 Nights): 4★ Srinagar Grand Hotel (Deluxe Mountain View Room)"
    ];
  } else if (id.includes('kerala')) {
    hotelList = [
      "Munnar (2 Nights): Fragrant Nature / Tea County Resort (4★/5★ Hill Resort)",
      "Thekkady (1 Night): Poetree Sarovar Portico (4★ Deluxe)",
      "Alleppey (1 Night): Deluxe Private Air-Conditioned Houseboat (Private Chef, All Meals)",
      "Kovalam / Marari (2 Nights): Beachfront Resort (4★ Sea View Villa)"
    ];
  } else {
    hotelList = [
      `Accommodations (${pkg.duration}): ${pkg.hotels}`
    ];
  }

  const numbered = hotelList.map((h, i) => `${i + 1}. ${h}`).join('\n');

  if (lang === 'hindi') {
    return `🏨 **${pkg.name} (${pkg.duration}) के सत्यापित होटल (Verified Accommodations)**:
${numbered}

• सभी होटलों में प्रतिदिन बुफे नाश्ता, उच्च स्वच्छता रेटिंग और अग्रिम बुकिंग पर कॉम्प्लिमेंट्री रूम अपग्रेड शामिल है।

[🌐 वेबसाइट पर होटल और कमरों के फोटो देखें](${webUrl})`;
  }

  return `🏨 **Verified Accommodations for ${pkg.name} (${pkg.duration})**:
${numbered}

• All hotels include daily buffet breakfast, certified cleanliness ratings, and free room upgrades on advance bookings.

[🌐 View Stays & Photos on Website](${webUrl})`;
}

const DETAILED_DAY_ITINERARIES = {
  "turkey-escape-42k": {
    "title": "Turkey Escape & Cappadocia Wonders (4 Nights / 5 Days)",
    "route": "Istanbul (2N) + Cappadocia Cave Valley (2N)",
    "hotels": "5★ Luxury Cave Resort in Cappadocia (2N) + 4★ Taksim/Sultanahmet Hotel Istanbul (2N, Daily Breakfast)",
    "days": [
      {
        "day": 1,
        "title": "Arrival in Istanbul & Sunset Bosphorus Luxury Yacht Cruise",
        "desc_en": "Arrive at Istanbul Airport (IST). Meet dedicated chauffeur for private transfer to your 4★ hotel. Evening private sunset luxury yacht cruise along the scenic Bosphorus Strait between Europe & Asia.",
        "desc_hi": "इस्तांबुल आगमन। 4★ होटल में प्राइवेट ट्रांसफर। शाम को यूरोप और एशिया के बीच खूबसूरत सनसेट बॉस्फोरस लग्जरी यॉट क्रूज़ का आनंद।"
      },
      {
        "day": 2,
        "title": "Historic Istanbul Old City & Flight to Cappadocia",
        "desc_en": "Guided VIP tour of Hagia Sophia, Blue Mosque, Hippodrome, and Grand Bazaar. Evening domestic flight to Cappadocia; check into your authentic 5★ Cave Resort.",
        "desc_hi": "हागिया सोफिया, ब्लू मॉस्क और ग्रैंड बाज़ार का गाइडेड टूर। शाम को कप्पाडोसिया के लिए फ्लाइट और 5★ ऑथेंटिक केव रिसॉर्ट में चेक-इन।"
      },
      {
        "day": 3,
        "title": "Sunrise Hot Air Balloon Flight & Goreme Open Air Museum",
        "desc_en": "Early morning sunrise Hot Air Balloon flight viewing over fairy chimneys with champagne toast. Goreme Open Air Museum rock churches, Pasabag monk valley & pottery workshop.",
        "desc_hi": "सुबह फेयरी चिमनी घाटियों के ऊपर सनराइज हॉट एयर बैलून राइड। गोरेमे ओपन एयर म्यूजियम, पाशाबाग और पारंपरिक पॉटरी आर्ट।"
      },
      {
        "day": 4,
        "title": "Derinkuyu Underground City & Pigeon Valley Panorama",
        "desc_en": "Explore multi-level Derinkuyu Underground City, scenic hike through Pigeon Valley, and sunset photo stop at Uchisar Castle rock fortress.",
        "desc_hi": "डेरिनकुयू अंडरग्राउंड सिटी का दौरा, पिजन वैली की खूबसूरत सैर और उचिसार कैसल पर मनोरम सनसेट दृश्य।"
      },
      {
        "day": 5,
        "title": "Cappadocia to Istanbul Flight & Departure",
        "desc_en": "Buffet breakfast at Cave Resort. Private transfer to Kayseri/Nevsehir Airport for domestic flight back to Istanbul Airport (IST) for your departure home.",
        "desc_hi": "केव रिसॉर्ट में नाश्ता। काइसेरी एयरपोर्ट से इस्तांबुल वापसी और अंतरराष्ट्रीय फ्लाइट से स्वदेश रवानगी।"
      }
    ]
  },
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
  const webUrl = getPackageWebUrl(pkg.id_code);
  const cleanName = (pkg.name || '').replace(/\s*\([^)]*\$\d+[^)]*\)/i, '').replace(/\s*\(\$\d+\s*USD[^)]*\)/i, '').trim();

  if (data && data.days) {
    if (lang === 'hindi') {
      const daysText = data.days.map(d => `📅 **दिन ${d.day}: ${d.title}**\n• ${d.desc_hi}`).join('\n\n');
      return `यहाँ **${cleanName}** (${pkg.duration}) का आपका दिन-वार क्यूरेटेड रूट है:

${daysText}

👉 क्या आप इस यात्रा के लिए 4★ होटलों के विकल्प या फ्लाइट की जानकारी देखना चाहते हैं?
[🌐 वेबसाइट पर पूरा टूर प्लान देखें](${webUrl})`;
    }

    const daysText = data.days.map(d => `📅 **Day ${d.day}: ${d.title}**\n• ${d.desc_en}`).join('\n\n');
    return `Here is your ${pkg.duration} curated route for **${cleanName}**:

${daysText}

👉 Would you like recommendations on verified 4★ hotels or flight options for these dates?
[🌐 View Full Itinerary on Website](${webUrl})`;
  }

  // Fallback if day-by-day not in DETAILED_DAY_ITINERARIES
  const parts = (pkg.highlights || '').split(/,\s*|\.\s*/).filter(p => p.trim().length > 10);
  const derivedDays = parts.slice(0, 5).map((p, i) => `📅 **Day ${i + 1}**: ${p.trim()}`).join('\n\n');

  return `Here is your ${pkg.duration} curated route for **${cleanName}**:

${derivedDays}

👉 Would you like recommendations on verified 4★ hotels or flight options for these dates?
[🌐 View Full Itinerary on Website](${webUrl})`;
}


function generateSmartReply(message, history = [], activeDestination = null) {
  const msgLower = (message || '').toLowerCase().trim();
  const lang = detectLanguage(message);
  const resolvedDest = resolveActiveDestination(message, history, activeDestination);
  const currentPkg = resolvedDest ? PACKAGES_KNOWLEDGE[resolvedDest] : null;

  // 1. QUERY INTENT: WHERE IS THIS PACKAGE / CAN'T FIND / WEBSITE PE KAHAN HAI / LINK DO
  const isWebsiteLocationQuery = msgLower.match(/\b(kahan hai|kaha hai|nahi mil raha|kahan milega|website pe|website par|where is it|where is the package|can't find|cannot find|give me link|link bhejo|link do|page link|show page|where on website|website link|open page|open package|link chahiye|packages nahi mil rahe|itineraries nahi mil rahe)\b/i) ||
    msgLower.includes('कहाँ है') || msgLower.includes('नहीं मिल रहा') || msgLower.includes('वेबसाइट') || msgLower.includes('लिंक');

  if (isWebsiteLocationQuery) {
    if (currentPkg) {
      const pageUrl = getPackageWebUrl(currentPkg.id_code);
      if (lang === 'hindi') {
        return {
          activeDestination: resolvedDest,
          reply: `📍 **${currentPkg.name}** हमारी वेबसाइट पर यहाँ उपलब्ध है:

[🌐 वेबसाइट पर ${currentPkg.name} पेज खोलें](${pageUrl})

यहाँ इसकी मुख्य जानकारी है:
• **अवधि**: ${currentPkg.duration}
• **शुरुआती दर**: ₹${currentPkg.price_inr.toLocaleString('en-IN')} (~$${currentPkg.price_usd} USD) प्रति व्यक्ति
• **होटल**: ${currentPkg.hotels}
• **हाइलाइट्स**: ${currentPkg.highlights}

👉 क्या आप इसका विस्तृत दिन-प्रतिदिन का टूर प्लान (Itinerary) यहीं स्क्रीन पर देखना चाहते हैं?`
        };
      }
      return {
        activeDestination: resolvedDest,
        reply: `📍 You can find the official package page for **${currentPkg.name}** right here on our website:

[🌐 View ${currentPkg.name} Page on Website](${pageUrl})

Here is the quick snapshot:
• **Duration**: ${currentPkg.duration}
• **Locked Wholesale Rate**: INR ${currentPkg.price_inr.toLocaleString('en-IN')} (~$${currentPkg.price_usd} USD) per person
• **Stays**: ${currentPkg.hotels}
• **Highlights**: ${currentPkg.highlights}

👉 Would you like me to display the complete Day-by-Day itinerary right here on the screen?`
      };
    } else {
      return {
        activeDestination: null,
        reply: `📍 आप हमारी वेबसाइट के सभी वेरिफाइड पैकेजेस और आइटिनरेरी यहाँ सीधे देख सकते हैं:

• 🇹🇷 [Turkey Escape 5D/4N Package](turkey-package.html)
• 🏝️ [Bali Signature 7D/6N Pool Villa](bali-package.html)
• 🇦🇪 [Dubai Highlights 5D/4N Package](dubai-package.html)
• ❄️ [Georgia High Caucasus 5D/4N ($300)](georgia-package.html)
• 🇹🇭 [Thailand Grand Signature 8D/7N](thailand-package.html)
• 🇸🇬 [Singapore Signature 4D/3N](singapore-package.html)
• 🇻🇳 [Vietnam Grand Expedition 10D/9N](vietnam-package.html)
• 🏔️ [Kashmir Snow Valley 5D/4N](kashmir-package.html)
• 🌴 [Kerala God's Own Country 7D/6N](kerala-package.html)

[🌐 Browse All 22 Direct Packages on Website](deals.html)

👉 आप जिस भी देश का दिन-वार प्लान देखना चाहते हैं, मुझे बताएं—मैं तुरंत स्क्रीन पर दिखा दूंगा!`
      };
    }
  }

  // 2. QUERY INTENT: SUGGESTIONS / RECOMMENDATIONS / "KAHAN JAU" / CONFUSED / UNDECIDED (WITHOUT FORCING WHATSAPP!)
  const isSuggestionQuery = msgLower.match(/\b(suggest|suggestion|suggestions|recommend|recommendation|recommendations|kahan jau|kaha jau|kahan ja sakte|kaha ja sakte|kahan jana chahiye|where should i go|best place to go|confused|samajh nahi aa raha|suggest me|places to visit|where can we travel|batao kahan jau|kuch suggest karo|kaha ghume|options do|help me choose|help me decide|not sure)\b/i) ||
    msgLower.includes('सुझाव') || msgLower.includes('कहाँ जाऊं') || msgLower.includes('कहाँ जा सकते') || msgLower.includes('सलाह') || msgLower.includes('समझ नहीं');

  if (isSuggestionQuery && !currentPkg) {
    if (lang === 'hindi') {
      return {
        activeDestination: null,
        reply: `🌟 **आपके लिए बेहतरीन यात्रा सुझाव (Curated Travel Recommendations)**:

यदि आप तय नहीं कर पा रहे हैं, तो अपनी पसंद के आधार पर इन टॉप डेस्टिनेशन्स को चुन सकते हैं:

🏝️ **1. बीच और प्राइवेट पूल विला (Beach & Romantic)**:
• **बाली**: [🌐 वेबसाइट पर बाली पैकेज देखें](bali-package.html) — ₹48,999 से (उबूद में प्राइवेट पूल विला और नुसा पेनिडा)
• **थाईलैंड**: [🌐 वेबसाइट पर थाईलैंड पैकेज देखें](thailand-package.html) — ₹28,999 से (फुकेत और क्राबी आइलैंड्स)

❄️ **2. बर्फीले पहाड़ और प्राकृतिक सौंदर्य (Snow & Scenery)**:
• **जॉर्जिया**: [🌐 वेबसाइट पर जॉर्जिया $300 डील देखें](georgia-package.html) — $300 USD (~₹28,999) (काजबेगी स्नो 4x4)
• **कश्मीर**: [🌐 वेबसाइट पर कश्मीर पैकेज देखें](kashmir-package.html) — ₹21,999 (डल झील हाउसबोट और गुलमर्ग गोंडोला)

🏙️ **3. 4–5 दिन की लग्जरी और सिटी लाइफ (4-5 Days Luxury City)**:
• **दुबई**: [🌐 वेबसाइट पर दुबई पैकेज देखें](dubai-package.html) — ₹42,598 (मरीना धो डिनर क्रूज़ और डेजर्ट सफारी)
• **सिंगापुर**: [🌐 वेबसाइट पर सिंगापुर पैकेज देखें](singapore-package.html) — ₹52,062 (यूनिवर्सल स्टूडियोज और मरीना बे)

🇹🇷 **4. केव सुइट और हॉट एयर बैलून (Unique Wonder)**:
• **तुर्की**: [🌐 वेबसाइट पर तुर्की पैकेज देखें](turkey-package.html) — ₹42,999 (कप्पाडोसिया केव स्टे और बोस्फोरस क्रूज़)

👉 **आप इनमें से किस प्रकार का अनुभव पसंद करेंगे?** मुझे बताएं, मैं तुरंत उसका पूरा दिन-वार प्लान (Itinerary) यहीं स्क्रीन पर दिखा दूँगा या आप सीधे वेबसाइट लिंक पर क्लिक करके देख सकते हैं!`
      };
    }
    return {
      activeDestination: null,
      reply: `🌟 **Curated Travel Suggestions & Recommendations**:

If you're not sure which destination to choose, here are handpicked options based on your travel mood:

🏝️ **1. Tropical Beaches & Private Pool Villas**:
• **Bali, Indonesia**: [🌐 View Bali Package on Website](bali-package.html) — From ₹48,999 (Ubud Private Pool Villa & Nusa Penida)
• **Thailand Island Hopper**: [🌐 View Thailand Package on Website](thailand-package.html) — From ₹28,999 (Phuket & Krabi)

❄️ **2. Snow Mountains & Majestic Landscapes**:
• **Georgia ($300 Flash Deal)**: [🌐 View Georgia Package on Website](georgia-package.html) — $300 USD (~₹28,999) (Gudauri Snow & Kazbegi 4x4)
• **Kashmir Heaven on Earth**: [🌐 View Kashmir Package on Website](kashmir-package.html) — ₹21,999 (Dal Lake Houseboat & Gulmarg Gondola)

🏙️ **3. 4–5 Days Luxury City & Nightlife**:
• **Dubai Highlights & Desert**: [🌐 View Dubai Package on Website](dubai-package.html) — ₹42,598 (Marina Dinner Cruise & Desert Safari)
• **Singapore Signature**: [🌐 View Singapore Package on Website](singapore-package.html) — From ₹52,062 (Universal Studios & Sentosa)

🇹🇷 **4. Iconic Cave Suites & Fairy Chimneys**:
• **Turkey Escape**: [🌐 View Turkey Package on Website](turkey-package.html) — ₹42,999 (Cappadocia Cave Resort & Bosphorus Yacht)

👉 **Which vibe appeals to you the most?** Tell me, and I can present the full day-by-day itinerary right here on the screen, or you can explore it directly on the website!`
    };
  }

  // 3. TARGETED DESTINATION QUERIES (INTENT-BASED FILTERING FOR ACTIVE OR MENTIONED DESTINATION)
  if (currentPkg) {
    // 3A. FORMAT 4: HONEYMOON SPECIAL (UNDER BUDGET / LANGUAGE MATCHING)
    const isHoney = msgLower.match(/\b(honeymoon|romantic|couple|couples|anniversary|candlelight|pool villa|private pool)\b/i) || msgLower.includes('हनीमून');
    if (isHoney) {
      const pageUrl = getPackageWebUrl(currentPkg.id_code);
      if (lang === 'hinglish' || lang === 'hindi') {
        return {
          activeDestination: resolvedDest,
          reply: `Namaste! Bali honeymoon ke liye ₹48,999 per person me hamara 6D/5N package perfect rahega:

• 🏨 **Stays**: Kuta Beach Resort (3N) + Ubud me Luxury Private Pool Villa (2N)
• 🍳 **Special**: Villa me Floating Breakfast & Romantic Candlelight Dinner
• 🏝 **Island Tour**: Nusa Penida West Speedboat Tour (Kelingking Beach & Snorkeling)
• 🚗 **Comfort**: 100% Dedicated Private AC Car with Chauffeur

Aap tentative travel month aur departure city bataiye, taaki flight ke sath exact quote share kar sakein!

[🌐 Website par Bali Honeymoon Package dekhein](${pageUrl})
📲 [**WhatsApp par direct travel architect se baat karein**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20mujhe%20Bali%20honeymoon%20package%20customize%20karna%20hai)`
        };
      }
    }

    // 3B. FORMAT 2: ITINERARY ONLY QUERY (ZERO PRICE CLUTTER)
    const isItinerary = msgLower.match(/\b(itinerary|iternrary|day by day|day wise|day-wise|days plan|sightseeing|schedule|route|route map|kya dekhenge|activities|din ka plan|itinerary batao|detailed itinerary|share itinerary|plan|days route)\b/i) ||
      msgLower.includes('itinerary') || msgLower.includes('आइटिनरेरी') || msgLower.includes('दिन का प्लान') || msgLower.includes('टूर प्लान');

    if (isItinerary) {
      return {
        activeDestination: resolvedDest,
        reply: getPackageItinerary(currentPkg, lang)
      };
    }

    // 3C. FORMAT 3: PRICE-SPECIFIC QUERY (PRICING CARD FORMAT)
    const isPrice = msgLower.match(/\b(price|pricing|cost|amount|rate|rates|exact price|kitna|kharcha|paisa|budget|rupaye|inr|usd|dollar|price kya hai|cost kitna)\b/i) ||
      msgLower.includes('कीमत') || msgLower.includes('रेट') || msgLower.includes('खर्चा') || msgLower.includes('दाम');

    if (isPrice) {
      return {
        activeDestination: resolvedDest,
        reply: getPackagePriceOnly(currentPkg, lang)
      };
    }

    // 3D. FORMAT 5: HOTELS & STAYS ONLY QUERY (HOTEL CARD FORMAT, ZERO PRICE DUMP)
    const isHotel = msgLower.match(/\b(hotel|hotels|stay|stays|resort|resorts|room|rooms|villa|villas|accommodation|rehna|hotel provide|which hotel)\b/i) ||
      msgLower.includes('होटल') || msgLower.includes('रिसॉर्ट') || msgLower.includes('कमरा') || msgLower.includes('विला');

    if (isHotel) {
      return {
        activeDestination: resolvedDest,
        reply: getPackageHotelsOnly(currentPkg, lang)
      };
    }

    // 3E. FORMAT 1: PACKAGE & OVERVIEW QUERY (Checked before pure inclusions so "Tell me about Dubai package and what is included" returns Format 1)
    const isOverview = msgLower.match(/(know about|tell me about|package details|overview|what is included|kya include|kya kya include|kya shamil|ke baare|batao|bataiye|jaanna|jaankari|vivaran|पैकेज|जानकारी|विवरण|package)/i) || detectDestination(message);
    if (isOverview) {
      return {
        activeDestination: resolvedDest,
        reply: getPackageSummary(currentPkg, lang)
      };
    }

    // 3F. Pure Inclusions & Exclusions query
    if (msgLower.match(/\b(inclusion|inclusions|exclusion|exclusions|only inclusion|only inclusions|included|kya milega|services)\b/i)) {
      return {
        activeDestination: resolvedDest,
        reply: `📋 **Inclusions & Exclusions for ${currentPkg.name} (${currentPkg.duration})**:

✅ **Verified Inclusions**:
${currentPkg.inclusions}

❌ **Exclusions**:
${currentPkg.exclusions}

[🌐 View Full Voucher on Website](${getPackageWebUrl(currentPkg.id_code)})
📲 [**Chat on WhatsApp (+91 80075 86871)**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20share%20inclusions%20for%20${encodeURIComponent(currentPkg.name)})`
      };
    }

    // 3F. Flights Query
    if (msgLower.match(/\b(flight|flights|airline|airfare|ticket|tickets|indigo|batik|vietjet|airport)\b/i)) {
      return {
        activeDestination: resolvedDest,
        reply: `✈️ **Flight Details for ${currentPkg.name} (${currentPkg.duration})**:
• **Flight Status**: ${currentPkg.flights}
• Ground airport pickups and drops are 100% private in dedicated AC vehicles.

[🌐 View Package on Website](${getPackageWebUrl(currentPkg.id_code)})`
      };
    }


  }

  // 4. DESTINATION EXPLICITLY MENTIONED (FIRST TURN)
  const newDest = detectDestination(message);
  if (newDest && PACKAGES_KNOWLEDGE[newDest]) {
    const pkg = PACKAGES_KNOWLEDGE[newDest];
    // Check if they asked for price only on first turn: e.g. "Turkey package ka exact price kya hai?"
    if (msgLower.match(/\b(price|pricing|cost|amount|rate|rates|exact price|kitna|kharcha|paisa)\b/i)) {
      return {
        activeDestination: newDest,
        reply: getPackagePriceOnly(pkg, lang)
      };
    }
    // Check if they asked for itinerary only on first turn: e.g. "Give me a 5-day itinerary for Georgia, no price right now."
    if (msgLower.match(/\b(itinerary|day by day|day wise|days plan|route|no price)\b/i)) {
      return {
        activeDestination: newDest,
        reply: getPackageItinerary(pkg, lang)
      };
    }
    // Check if they asked for hotels only on first turn: e.g. "Which hotels do you provide in Thailand?"
    if (msgLower.match(/\b(hotel|hotels|stay|stays|room|rooms|resort|villa)\b/i)) {
      return {
        activeDestination: newDest,
        reply: getPackageHotelsOnly(pkg, lang)
      };
    }
    return {
      activeDestination: newDest,
      reply: getPackageSummary(pkg, lang)
    };
  }

  // 5. GREETING HANDLER
  const isGreeting = msgLower.match(/^(hi|hello|helo|hey|hy|hola|namaste|good morning|good evening|yo)\b/i) || 
    msgLower.includes('नमस्ते') || msgLower.includes('नमस्कार') || msgLower.includes('प्रणाम') || 
    msgLower.includes('राम राम') || msgLower.startsWith('हेलो') || msgLower.startsWith('हाय');

  if (isGreeting && msgLower.split(/\s+/).length <= 5) {
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
    return {
      activeDestination: resolvedDest,
      reply: `Hey there! 👋 Welcome to Let's Explore DMC!

Tell me where you want to travel, your preferred dates, or your budget:
• 🏝️ **Tropical Island**: Bali Pool Villa, Thailand Island Hopper
• ❄️ **Snow & Caucasus**: Georgia $300 Special, Kashmir Snow Valley
• 🏙️ **City Luxury**: Dubai Marina Dinner Cruise, Singapore Signature
• 🇹🇷 **Historic Wonders**: Turkey Cappadocia Cave Suites

How can I help plan your trip today?`
    };
  }

  // 6. PAYMENT ADVANCE & USKE BAAD / PAYMENT STAGES

  const isAdvanceQuery = msgLower.match(/\b(advance.*(baad|after|balance)|(baad|after|balance).*advance|in advance or|advance kitna.*baad|advance payment.*remaining|how can i pay.*advance|advance or uske baad)\b/i) || 
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

  // 3. SHORT DURATION LUXURY & NICE PLACES (4-5 Days / Luxury / Nice Place)
  const isLuxuryQuery = /\b(luxury|nice place|nice places|deluxe|5\s*star|5★|premium|royal|vip|best place|best places)\b/i.test(msgLower);
  const isShortDuration = /\b(4[\s-]*5\s*days?|4\s*days?|5\s*days?|45\s*days?|short trip|few days|weekend)\b/i.test(msgLower);

  if (isLuxuryQuery && isShortDuration) {
    return {
      activeDestination: 'dubai-luxury-grand-5n6d',
      reply: `👑 **Top 4–5 Day Luxury & Premium Vacation Packages**:

1. 🇦🇪 **Dubai Luxury Grand & Desert Safari (4N/5D - 5N/6D)** — *#1 Luxury City Escape*:
• **Price**: INR 42,598 (~$507 USD) to INR 66,848 (~$796 USD) per person | Land from INR 29,999 (~$357 USD)
• **Luxury Highlights**: 5★ Hotel Stays, Marina Dhow Luxury Dinner Cruise cruising under illuminated skyscrapers, Private 4x4 Desert Safari with VIP lounge & Grand BBQ, Burj Khalifa 124th Floor VIP observation deck.

2. 🏝️ **Bali Tropical Luxury & Private Pool Villa (4N/5D - 6N/7D)**:
• **Price**: Land package from INR 48,999 (~$583 USD) | INR 96,068 (~$1,145 USD) with Flights & Visa
• **Luxury Highlights**: **Private 1-Bedroom Pool Villa in Ubud**, Floating Breakfast in the pool, Nusa Penida West Speedboat tour (Kelingking T-Rex cliff), Uluwatu Cliff sunset & Kecak Fire Dance.

3. 🇹🇭 **Thailand Express Luxury Escape (5N/6D)**:
• **Price**: Land package from INR 42,999 (~$512 USD) | INR 100,614 (~$1,198 USD) all-inclusive
• **Luxury Highlights**: 5★ Beachfront Resort in Phuket & Krabi, Private Speedboat 4-Island Tour with snorkeling, Chao Phraya River luxury dinner cruise.

4. 🇹🇷 **Turkey & Cappadocia Cave Luxury (4N/5D)**:
• **Price**: INR 42,999 (~$515 USD) per person
• **Luxury Highlights**: 5★ Authentic Cave Resort stay in Cappadocia, Sunrise Hot Air Balloon Flight over fairy chimneys, Private sunset Bosphorus Yacht Cruise in Istanbul.

Which vibe matches your luxury taste: **Dubai 5★ Skyline Luxury, Bali Private Pool Villa, or Cappadocia Cave Suite**?`
    };
  }

  // 4. NIGHT PLACES / NIGHTLIFE / EVENING SPOTS / PARTY
  if (msgLower.match(/\b(night place|night places|nightlife|night party|clubbing|party place|night clubs?|clubs?|pub|pubs|evening spots?|night vibe|night vibes)\b/i)) {
    return {
      activeDestination: 'thailand-grand-signature',
      reply: `🌃 **Top Destinations for Vibrant Nightlife & Evening Experiences**:

1. 🇹🇭 **Thailand (Phuket & Bangkok)** — *World-Famous Nightlife*:
• **Night Highlights**: Bangla Road street clubs (Illuzion, Sugar Club), Patong Beach clubs, night markets, and the luxury **Chao Phraya River Dinner Cruise** with live bands under glowing temples.
• **Package**: Thailand Grand Signature (7N/8D) at INR 62,362 (~$745 USD) | Land package from ₹28,999 (~$345 USD).

2. 🏝️ **Bali (Kuta, Seminyak & Canggu)** — *Beach Clubs & Sunset Sessions*:
• **Night Highlights**: Iconic beach clubs (Finns Beach Club, Atlas Beach Fest, Potato Head, La Favela), Uluwatu cliff sunset with fire dance, and Jimbaran beach seafood dinners under the stars.
• **Package**: Bali Signature with Pool Villa at INR 96,068 (~$1,145 USD) | Land from ₹39,014 (~$464 USD).

3. 🇦🇪 **Dubai** — *Glamorous Skyline Evenings & Desert Nights*:
• **Night Highlights**: Marina Dhow Luxury Dinner Cruise cruising through towering illuminated skyscrapers, and the Arabian Desert Safari with campfire, Tanoura & Belly Dance performances + Grand BBQ Dinner.
• **Package**: Dubai Highlights (4N/5D) at INR 42,598 (~$507 USD).

Tell me what you love more: **Island Beach Clubs (Bali), Bustling Street Party (Thailand), or Luxury Marina Cruise (Dubai)**?`
    };
  }

  // 5. PER PERSON PRICING / PACKAGE RATES (Handles "? what packages and per person" and "ok what abt its packages per person?")
  if (msgLower.match(/\b(per person|per adult|rate per person|cost per person|pricing per person|packages? per person|what packages?|kitna per person|price per person)\b/i)) {
    if (currentPkg) {
      return {
        activeDestination: resolvedDest,
        reply: `💰 **Per-Person Pricing Breakdown for ${currentPkg.name} (${currentPkg.duration})**:
• **Per Adult Rate (All-Inclusive with Flights & Stays)**: INR ${currentPkg.price_inr.toLocaleString('en-IN')} (~$${currentPkg.price_usd} USD) per adult
• **Land Package Option (Excluding International Flights)**: From INR ${currentPkg.land_inr.toLocaleString('en-IN')} (~$${Math.round(currentPkg.land_inr / 84)} USD) per adult
• **Total Net Group Amount (${currentPkg.pax})**: INR ${currentPkg.total_inr.toLocaleString('en-IN')}
• **Trip ID**: ${currentPkg.trip_id} | **Lead Guest**: ${currentPkg.lead_guest}

📲 [**Lock This Price on WhatsApp**](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20please%20lock%20quote%20for%20${encodeURIComponent(currentPkg.name)})`
      };
    }
  }

  // 6. ALTERNATIVES / "KUCH AUR BATAO" / "OTHER OPTIONS" / "OPTIONS" / "DUSRA" / "ISKE ALAWA"
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

  // 7. FOOD / PURE VEG / JAIN FOOD / INDIAN MEALS
  const isFoodQuery = msgLower.match(/\b(veg|vegetarian|pure veg|jain|jain food|halal|indian food|indian restaurant|khana|meals|bhojan|breakfast and dinner|food options|meal plan)\b/i) ||
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

  // 8. HONEYMOON / COUPLES / ROMANTIC TRIPS / POOL VILLAS
  const isHoneyQuery = msgLower.match(/\b(honeymoon|couple|couples|anniversary|romantic|candlelight|pool villa|private pool|flower bed|honeymooner)\b/i) ||
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

  // 9. FAMILY / KIDS / SENIOR CITIZENS / PARENTS
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

  // 10. BEST TIME TO VISIT / WEATHER / SEASONS / MONTHS
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

  // 11. CUSTOMIZATION / ITINERARY CHANGES / EXTRA DAYS
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

  // 12. WITHOUT FLIGHTS / LAND ONLY PACKAGE
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

  // 13. ADVENTURE & WATER SPORTS / SCUBA / SKYDIVING
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

  // 14. SOLO TRAVEL & FRIENDS / BACHELORS GROUP
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

  // 15. CONVERSATIONAL INTENT: DINNER / NIGHTLIFE / 4-5 DAYS / LOW BUDGET
  const hasDinnerOrNight = /\b(dinner|night|nightt|nightlife|party|club|clubs|evening|food)\b/i.test(msgLower) || msgLower.includes('डिनर') || msgLower.includes('नाइट') || msgLower.includes('रात');
  const hasLowBudget = /\b(low budget|budget is low|budget kam|kam budget|sasta|cheap|affordable|budget tight|low price|lowest)\b/i.test(msgLower) || msgLower.includes('कम बजट') || msgLower.includes('सस्ता');
  const hasShortDuration = /\b(4[\s-]*5\s*days?|4\s*days?|5\s*days?|45\s*days?|short trip|weekend)\b/i.test(msgLower) || msgLower.includes('4-5') || msgLower.includes('4–5') || msgLower.includes('4 से 5');

  if ((hasDinnerOrNight && (hasLowBudget || hasShortDuration)) || (hasLowBudget && hasShortDuration) || (hasDinnerOrNight && hasLowBudget)) {
    if (lang === 'hindi') {
      return {
        activeDestination: 'dubai-super-saver-4n5d',
        reply: `✨ **डिनर और नाइट अनुभवों के साथ टॉप 4–5 दिन के कम बजट पैकेज**:

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

  // 16. Numeric budget inputs (e.g. 10k, 25000, 50k, 1 lakh, $300)
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

  // 17. TARGETED QUESTIONS ON ACTIVE DESTINATION (STRICT MEMORY RETENTION)
  // If user is asking for package overview / details / "know about [dest] package" -> return Golden Package Summary
  const isPkgDetail = msgLower.match(/(know about|tell me about|package details|overview|what is included|kya include|kya kya include|kya shamil|kya kya shamil|ke baare|batao|bataiye|jaanna|jaankari|vivaran|पैकेज|शामिल|जानकारी|विवरण|बताओ|जानना)/i);
  if (currentPkg && (isPkgDetail || msgLower.includes('package'))) {
    return {
      activeDestination: resolvedDest,
      reply: getPackageSummary(currentPkg, lang)
    };
  }

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

    // Itinerary / Sightseeing / Places query (Provide FULL DAY-BY-DAY Itinerary directly in chat)
    const isItineraryQuery = msgLower.match(/\b(itinerary|iternrary|schedule|day by day|day wise|days plan|sightseeing|places|place|visit|kya dekhenge|activities|plan|din ka plan|itinerary batao|detailed itinerary|share itinerary|share detailed itinerary)\b/i) ||
      msgLower.includes('itinerary') || msgLower.includes('आइटिनरेरी') || msgLower.includes('दिन का प्लान') || msgLower.includes('टूर प्लान');

    if (isItineraryQuery) {
      return {
        activeDestination: resolvedDest,
        reply: getPackageItinerary(currentPkg, lang)
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
        reply: getPackageSummary(currentPkg, lang)
      };
    }
  }

  // 18. Destination explicitly mentioned (if not already handled)
  const explicitDest = detectDestination(message);
  if (explicitDest && PACKAGES_KNOWLEDGE[explicitDest]) {
    return {
      activeDestination: explicitDest,
      reply: getPackageSummary(PACKAGES_KNOWLEDGE[explicitDest], lang)
    };
  }

  // 19. Affirmation / Ready to book (STRICT: Must NOT be a question or asking for price/packages!)
  const isQuestion = /[?]|^(what|how|why|where|when|which|tell|show|kitna|kya|kaise|kahan|kab)\b/i.test(msgLower) || /\b(packages?|price|pricing|cost|per person|hotel|itinerary|place|places|dinner|night)\b/i.test(msgLower);
  const isAffirmation = (!isQuestion && msgLower.match(/^(yes|yep|sure|ok|okay|ha|haan|theek hai|sahi hai|deal|agree|done|send|bhejo)\b/i)) ||
    (!isQuestion && (msgLower.startsWith('हाँ') || msgLower.startsWith('हा') || msgLower.includes('ठीक है') || msgLower.includes('बुक करना है') || msgLower.includes('बुक करो') || msgLower.includes('फाइनल करो')));

  if (isAffirmation && msgLower.split(/\s+/).length <= 8) {
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

  // 20. Contact / Bank Details
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

  // 21. Visa queries
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

  // 22. INDECISION / HELP ME CHOOSE / "I CANT DECIDE" / "CONFUSED"
  const isUndecided = /\b(can'?t decide|cannot decide|icant decide|i cant decide|cant decide|confused|not sure|help me choose|help me decide|what do you suggest|what should i (choose|pick|do)|which one is better|which is better|recommend me|suggest something|suggest me|guide me|tell me what to do)\b/i.test(msgLower) ||
    msgLower.includes('decide') || msgLower.includes('confus') || msgLower.includes('samajh nahi') || msgLower.includes('samajh ni') || msgLower.includes('konsa lu') || msgLower.includes('kya karu') || msgLower.includes('kahan jau') || msgLower.includes('फैसला नहीं') || msgLower.includes('समझ नहीं') || msgLower.includes('क्या चुनूं');

  if (isUndecided) {
    if (currentPkg) {
      if (lang === 'hindi') {
        return {
          activeDestination: resolvedDest,
          reply: `बिल्कुल चिंता न करें! सही जगह चुनना कभी-कभी थोड़ा मुश्किल हो सकता है। मैं आपको सही फैसला लेने में मदद करता हूँ:

🤔 **आप इस तरह फैसला ले सकते हैं**:
1. **${currentPkg.name} चुनें**: अगर आप एक ही यात्रा में दो अलग-अलग खूबसूरत जगहों और अनुभवों का पूरा आनंद लेना चाहते हैं (${currentPkg.duration}, ₹${currentPkg.price_inr.toLocaleString('en-IN')} प्रति व्यक्ति)।
2. **एक ही देश (जैसे सिर्फ बाली या थाईलैंड) चुनें**: अगर आप बिना किसी भागदौड़ के सुकून से बीच और विला में आराम करना चाहते हैं और बजट भी कम रखना चाहते हैं (शुरुआती ₹39,000–₹62,000)।
3. **दुबई या जॉर्जिया चुनें**: अगर आपके पास 4–5 दिन का समय है और आप कम समय में भव्य सिटी टूर या बर्फ का अनुभव चाहते हैं ($300 / ₹42,598)।

🎯 **सटीक सलाह के लिए मुझे बस 3 बातें बताएं**:
1. **बजट**: प्रति व्यक्ति आपका अनुमानित बजट कितना है?
2. **साथी**: आप किसके साथ जा रहे हैं (पार्टनर/हनीमून, परिवार, या दोस्तों के साथ)?
3. **पसंद**: आपको बीच और प्राइवेट पूल विला पसंद हैं, शॉपिंग और नाइटलाइफ़, या बर्फीले पहाड़?

[📲 व्हाट्सएप (+91 80075 86871) पर सीधे हमारे सीनियर ट्रैवल आर्किटेक्ट से 1-on-1 सलाह लें](https://wa.me/918007586871?text=नमस्ते%20Lets%20Explore%20DMC,%20मुझे%20सही%20टूर%20चुनने%20में%20मदद%20चाहिए)`
        };
      }
      if (lang === 'hinglish') {
        return {
          activeDestination: resolvedDest,
          reply: `Fikar mat kijiye! Perfect trip choose karna kabhi-kabhi mushkil hota hai. Main aapko decide karne me help karta hoon:

🤔 **Aap aise decide kar sakte hain**:
1. **${currentPkg.name} chunein**: Agar aap ek hi vacation me do contrasting experiences enjoy karna chahte hain (${currentPkg.duration} at ₹${currentPkg.price_inr.toLocaleString('en-IN')})।
2. **Single Destination (jaise Bali ya Thailand) chunein**: Agar aap aaram se relax karna chahte hain, travel time kam rakhna chahte hain aur budget bachaana chahte hain (from ₹39,000–₹62,000)।
3. **Dubai ya Georgia chunein**: Agar aap 4–5 din ka quick luxury escape ya snowy winter chahte hain ($300 / ₹42,598)।

🎯 **Bas mujhe 3 choti baatein bataiye**:
1. **Budget**: Per person aapka lagbhag kitna budget hai?
2. **Companions**: Aap kiske sath travel kar rahe hain (Partner/Honeymoon, Friends, ya Family)?
3. **Vibe**: Beaches & pool villas, luxury skyline & nightlife, ya snowy mountains?

[📲 WhatsApp (+91 80075 86871) par direct senior travel architect se free guidance lein](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20mujhe%20trip%20choose%20karne%20me%20help%20chahiye)`
        };
      }
      return {
        activeDestination: resolvedDest,
        reply: `No worries at all! Choosing the right holiday can be tricky when there are so many tempting options. Let me help you break it down:

🤔 **How to Decide for Your Trip**:
1. **Choose ${currentPkg.name}**: If you want the ultimate all-in-one vacation experiencing two world-class destinations in a single seamless itinerary (${currentPkg.duration} at INR ${currentPkg.price_inr.toLocaleString('en-IN')} per adult).
2. **Choose a Single Destination (e.g. Bali Only or Thailand)**: If you prefer a relaxed pace, zero inter-country flights, and want to keep costs lower (starting ₹39,014–₹62,362).
3. **Choose Dubai or Georgia**: If you have 4–5 days and want iconic luxury cityscapes or fresh mountain snow on a pocket-friendly budget ($300 USD / ₹42,598).

🎯 **Answer these 3 quick questions so I can recommend the exact right fit for you**:
1. **Budget**: What is your approximate target budget per person?
2. **Travel Companions**: Are you traveling with your Partner/Honeymoon, Family, or Friends?
3. **Preferred Vibe**: Tropical beaches & pool villas, glamorous city luxury & shopping, or cool mountain scenery?

[📲 Or chat 1-on-1 with our Senior Destination Architect on WhatsApp (+91 80075 86871)](https://wa.me/918007586871?text=Hello%20Lets%20Explore%20DMC,%20I%20am%20undecided%20and%20need%20help%20choosing%20the%20best%20trip)`
      };
    }
  }

  // Fallback to active package if present
  if (currentPkg) {
    const alreadySentSummary = Array.isArray(history) && history.slice(-4).some(h => {
      const txt = typeof h === 'string' ? h : (h.text || (h.parts && h.parts[0]?.text) || h.message || '');
      return txt.includes(currentPkg.name) && (txt.includes('Package Overview') || txt.includes('पैकेज का विवरण'));
    });

    if (alreadySentSummary) {
      if (lang === 'hindi') {
        return {
          activeDestination: resolvedDest,
          reply: `मैं **${currentPkg.name}** के बारे में आपकी सहायता कर रहा हूँ!

आप इसके बारे में क्या जानना चाहते हैं:
• 🏨 **होटल और रूम विकल्प** (4★ डीलक्स या प्राइवेट पूल विला)
• 🗺️ **दिन-प्रतिदिन का दर्शनीय स्थल (Itinerary)**
• 🥗 **शुद्ध शाकाहारी/जैन भोजन की सुविधा**
• 💳 **एडवांस और आसान पेमेंट शेड्यूल**
• 🔄 **या किसी अन्य देश या बजट के पैकेज देखना चाहते हैं?**`
        };
      }
      if (lang === 'hinglish') {
        return {
          activeDestination: resolvedDest,
          reply: `Main **${currentPkg.name}** ke baare me aapki madad kar raha hoon!

Aap isme se kya dekhna chahte hain:
• 🏨 **Hotels & Room Categories** (4★ Deluxe ya Private Pool Villa)
• 🗺️ **Day-by-Day Sightseeing Itinerary**
• 🥗 **Pure Veg / Jain Food Options**
• 💳 **Advance Token & Balance Payment Schedule**
• 🔄 **Ya kisi dusre destination/budget ke options dekhna chahenge?**`
        };
      }
      return {
        activeDestination: resolvedDest,
        reply: `I have **${currentPkg.name}** active for you!

What would you like to explore next:
• 🏨 **Hotels & Room Categories** (4★ Deluxe or Private Pool Villa upgrades)
• 🗺️ **Day-by-Day Itinerary & Sightseeing details**
• 🥗 **Pure Veg / Jain Meal plans**
• 💳 **Payment Schedule & Advance token details**
• 🔄 **Or would you like to compare alternate destinations in your budget?**`
      };
    }

    return {
      activeDestination: resolvedDest,
      reply: getPackageSummary(currentPkg, lang)
    };
  }

  // General helpful response without robotic prefix
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
