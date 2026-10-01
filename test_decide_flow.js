const { generateSmartReply } = require('./chat_engine.js');

console.log("=== SIMULATING USER CONVERSATION ===");

let history = [];
let activeDest = null;

// Turn 1
console.log("\n--- TURN 1 ---");
console.log("USER: tell me malaysia with bali");
let res1 = generateSmartReply("tell me malaysia with bali", history, activeDest);
console.log("AI:\n", res1.reply.substring(0, 200) + "...\n");
activeDest = res1.activeDestination;
history.push({ role: 'user', text: "tell me malaysia with bali" });
history.push({ role: 'model', text: res1.reply });

// Turn 2
console.log("\n--- TURN 2 ---");
console.log("USER: icant decide?");
let res2 = generateSmartReply("icant decide?", history, activeDest);
console.log("AI:\n", res2.reply);
activeDest = res2.activeDestination;
history.push({ role: 'user', text: "icant decide?" });
history.push({ role: 'model', text: res2.reply });

// Turn 3: Hinglish indecision
console.log("\n--- TURN 3 (Hinglish Indecision) ---");
console.log("USER: mujhe samajh nahi aa raha kya karu");
let res3 = generateSmartReply("mujhe samajh nahi aa raha kya karu", history, activeDest);
console.log("AI:\n", res3.reply);

// Turn 4: Hindi indecision
console.log("\n--- TURN 4 (Hindi Indecision) ---");
console.log("USER: मैं फैसला नहीं कर पा रहा");
let res4 = generateSmartReply("मैं फैसला नहीं कर पा रहा", history, activeDest);
console.log("AI:\n", res4.reply);

// Turn 5: Repetitive query check (when user just sends random or general follow up without asking for overview)
console.log("\n--- TURN 5 (No Repeated Summary Check) ---");
console.log("USER: hmm okay");
let res5 = generateSmartReply("hmm okay", history, activeDest);
console.log("AI:\n", res5.reply);
