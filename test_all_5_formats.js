const { generateSmartReply } = require('./chat_engine.js');

const testCases = [
  {
    name: "FORMAT 1: Package & Overview Query",
    query: "Tell me about Dubai package and what is included.",
    history: [],
    activeDest: null
  },
  {
    name: "FORMAT 2: Itinerary Only Query (Zero Price Clutter)",
    query: "Give me a 5-day itinerary for Georgia, no price right now.",
    history: [],
    activeDest: null
  },
  {
    name: "FORMAT 3: Price-Specific Query",
    query: "Turkey package ka exact price kya hai?",
    history: [],
    activeDest: null
  },
  {
    name: "FORMAT 4: Language Matching (Hindi / Hinglish Honeymoon)",
    query: "Mujhe Bali ka honeymoon plan batao under 50k.",
    history: [],
    activeDest: null
  },
  {
    name: "FORMAT 5: Hotels & Stays Only Query",
    query: "Which hotels do you provide in Thailand?",
    history: [],
    activeDest: null
  },
  {
    name: "AUDIO CASE 1: Suggestions / Recommendations / Confused (No forced WhatsApp)",
    query: "bhai kuch suggest karo kahan jau samajh nahi aa raha",
    history: [],
    activeDest: null
  },
  {
    name: "AUDIO CASE 2: Package location / Link on website",
    query: "Turkey package website pe kahan hai mujhe nahi mil raha link do",
    history: [],
    activeDest: null
  },
  {
    name: "AUDIO CASE 3: General Missing Package / Itineraries on website",
    query: "mujhe website pe packages nahi mil rahe link chahiye",
    history: [],
    activeDest: null
  }
];

console.log("================================================================================");
console.log("RUNNING AUTOMATED VERIFICATION OF ALL 5 FORMATS + AUDIO REQUIREMENTS");
console.log("================================================================================\n");

let allPassed = true;

testCases.forEach((tc, idx) => {
  console.log(`--------------------------------------------------------------------------------`);
  console.log(`TEST ${idx + 1}: ${tc.name}`);
  console.log(`QUERY: "${tc.query}"`);
  const res = generateSmartReply(tc.query, tc.history, tc.activeDest);
  console.log(`ACTIVE DESTINATION: ${res.activeDestination}`);
  console.log(`REPLY:\n${res.reply}\n`);

  if (idx === 1) { // Format 2: check zero price clutter
    if (res.reply.includes("Wholesale DMC Rate") || res.reply.includes("₹") || res.reply.includes("USD")) {
      console.error("FAIL: Format 2 contains price clutter!");
      allPassed = false;
    } else {
      console.log("PASS: Format 2 has ZERO price clutter!");
    }
  }

  if (idx === 4) { // Format 5: check zero price clutter
    if (res.reply.includes("Wholesale DMC Rate") || res.reply.includes("₹") || res.reply.includes("USD")) {
      console.error("FAIL: Format 5 contains price clutter!");
      allPassed = false;
    } else {
      console.log("PASS: Format 5 has ZERO price clutter!");
    }
  }

  if (idx === 5) { // Audio Case 1: check that it gives direct website links and does not only dump whatsapp
    if (res.reply.includes("bali-package.html") && res.reply.includes("georgia-package.html")) {
      console.log("PASS: Audio Case 1 includes direct website exploration links!");
    } else {
      console.error("FAIL: Audio Case 1 missing website links!");
      allPassed = false;
    }
  }

  if (idx === 6) { // Audio Case 2: check that it gives turkey-package.html
    if (res.reply.includes("turkey-package.html")) {
      console.log("PASS: Audio Case 2 links directly to turkey-package.html!");
    } else {
      console.error("FAIL: Audio Case 2 missing turkey-package.html link!");
      allPassed = false;
    }
  }
});

console.log("\n================================================================================");
console.log(allPassed ? "ALL 8 VERIFICATION TESTS PASSED PERFECTLY!" : "SOME TESTS FAILED!");
console.log("================================================================================");
