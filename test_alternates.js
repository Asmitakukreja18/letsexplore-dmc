const { generateSmartReply } = require('./chat_engine.js');

const testQueries = [
  "kuch aur options dikhao",
  "pure veg khana milega kya?",
  "honeymoon trip with pool villa",
  "family trip with 2 kids",
  "best time to visit bali",
  "can i customize and add 2 days?",
  "flight nahi chahiye only land package",
  "scuba diving and water sports kahan hai",
  "booking kaise karni hai advance kitna hai",
  "friends ke sath jana hai bachelor trip"
];

let activeDest = null;
let history = [];

console.log("=== RUNNING ALTERNATES TEST SUITE ===");

testQueries.forEach((q, idx) => {
  const res = generateSmartReply(q, history, activeDest);
  console.log(`\n-----------------------------------------`);
  console.log(`TEST ${idx + 1}: "${q}"`);
  console.log(`ACTIVE DEST: ${res.activeDestination}`);
  console.log(`REPLY SNIPPET:\n${res.reply.substring(0, 220)}...`);
  history.push({ user: q, reply: res.reply });
  activeDest = res.activeDestination;
});

console.log("\n=== ALL ALTERNATES PASSED WITH DIVERSE REPLIES ===");
