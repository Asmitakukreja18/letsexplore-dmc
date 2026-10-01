const { generateSmartReply } = require('./chat_engine.js');

const tests = [
  { label: 'Hindi Greeting', query: 'नमस्ते' },
  { label: 'Hindi Dubai Package Details', query: 'मुझे दुबई पैकेज के बारे में जानना है और क्या क्या शामिल है' },
  { label: 'Hindi Bali Package Details', query: 'बाली पैकेज में क्या क्या मिलता है' },
  { label: 'Hindi Advance & Balance', query: 'एडवांस कितना देना होगा और उसके बाद क्या प्रोसेस है?' },
  { label: 'Hindi Pure Veg Food', query: 'क्या वहां शुद्ध शाकाहारी या जैन खाना मिल जाएगा?' },
  { label: 'Hindi Honeymoon Options', query: 'हनीमून के लिए कौन सा पैकेज सबसे अच्छा रहेगा?' },
  { label: 'Hindi Low Budget 4-5 Days Dinner', query: '4-5 दिन का कोई कम बजट पैकेज बताओ जिसमें डिनर भी शामिल हो' },
  { label: 'Hindi Ready to Book', query: 'हाँ ठीक है मुझे बुक करना है' },
  { label: 'Hinglish Dubai Query', query: 'mujhe dubai package ke baare me batao aur kya kya include hai' },
  { label: 'English Dubai Query', query: 'I want to know about the Dubai package and what is included.' }
];

tests.forEach((t, i) => {
  console.log(`\n======================================================================`);
  console.log(`TEST ${i + 1} [${t.label}]: "${t.query}"`);
  console.log(`----------------------------------------------------------------------`);
  const res = generateSmartReply(t.query, [], null);
  console.log(`ACTIVE DESTINATION: ${res.activeDestination}`);
  console.log(`OUTPUT:\n${res.reply}`);
});
