const { generateSmartReply } = require('./chat_engine.js');

const query = "Hello Lets Explore DMC, please share detailed itinerary for Malaysia City & Highlands Escape agar whatsapp pe hi detail puchchna hai to ai kyu rakah ahi?";

console.log("=== TESTING USER'S EXACT QUERY ===");
console.log(`QUERY: "${query}"\n`);

const res = generateSmartReply(query, [], null);

console.log("REPLY FROM ATLAS:\n");
console.log(res.reply);
console.log("\nActive Destination:", res.activeDestination);
