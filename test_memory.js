const { generateSmartReply } = require('./chat_engine');

console.log("=== TEST 1: Turn 1 - User asks about Malaysia with Bali ===");
let history = [];
let res1 = generateSmartReply("tell me malaysia with bali", history, null);
console.log("Active Destination:", res1.activeDestination);
console.log("Reply preview:", res1.reply.substring(0, 150) + "...\n");

// Update history
history.push({ role: 'user', text: "tell me malaysia with bali" });
history.push({ role: 'model', text: res1.reply });

console.log("=== TEST 2: Turn 2 - User asks 'what is the price?' (NO destination mentioned) ===");
let res2 = generateSmartReply("what is the price?", history, res1.activeDestination);
console.log("Active Destination:", res2.activeDestination);
console.log("Reply:\n", res2.reply, "\n");

console.log("=== TEST 3: Turn 3 - User asks 'which hotels?' (NO destination mentioned) ===");
history.push({ role: 'user', text: "what is the price?" });
history.push({ role: 'model', text: res2.reply });
let res3 = generateSmartReply("which hotels?", history, res2.activeDestination);
console.log("Active Destination:", res3.activeDestination);
console.log("Reply:\n", res3.reply, "\n");

console.log("=== TEST 4: Turn 4 - User asks 'inclusions and exclusions' ===");
let res4 = generateSmartReply("inclusions and exclusions", history, res3.activeDestination);
console.log("Active Destination:", res4.activeDestination);
console.log("Reply:\n", res4.reply, "\n");

console.log("=== TEST 5: Turn 5 - User switches destination to 'what about dubai?' ===");
let res5 = generateSmartReply("what about dubai?", history, res4.activeDestination);
console.log("Active Destination:", res5.activeDestination);
console.log("Reply preview:", res5.reply.substring(0, 150) + "...\n");

console.log("=== TEST 6: Turn 6 - User asks 'cost kitna hai?' for Dubai ===");
let res6 = generateSmartReply("cost kitna hai?", history, res5.activeDestination);
console.log("Active Destination:", res6.activeDestination);
console.log("Reply:\n", res6.reply, "\n");

console.log("ALL TESTS COMPLETED SUCCESSFULLY!");
