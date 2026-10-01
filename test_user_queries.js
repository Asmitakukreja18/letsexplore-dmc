const { generateSmartReply } = require('./chat_engine');

const testCases = [
  "helo",
  "umm tell me abt places where dinner nightt ho my budget is low and for 45 days",
  "umm tell me abt places where dinner nightt ho my budget is low and for 4-5 days",
  "tell me malaysia with bali",
  "what is the price?",
  "which hotels?",
  "inclusions and exclusions"
];

let activeDest = null;
let history = [];

testCases.forEach((q, idx) => {
  console.log(`\n=============================================`);
  console.log(`TURN ${idx + 1}: USER QUERY: "${q}"`);
  console.log(`PREVIOUS ACTIVE DESTINATION: ${activeDest}`);
  
  const res = generateSmartReply(q, history, activeDest);
  activeDest = res.activeDestination;
  
  console.log(`UPDATED ACTIVE DESTINATION: ${activeDest}`);
  console.log(`REPLY:\n${res.reply}`);
  
  history.push({ role: 'user', text: q });
  history.push({ role: 'model', text: res.reply });
});
