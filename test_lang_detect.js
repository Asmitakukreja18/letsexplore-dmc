function detectLanguage(text) {
  if (!text) return 'english';
  if (/[\u0900-\u097F]/.test(text)) {
    return 'hindi';
  }
  const hinglishWords = /\b(mujhe|hume|humko|batao|btao|bataiye|hoga|hogi|hoge|kaise|kya|chahiye|kitna|kitne|kitni|kharcha|hai|hain|karna|karo|kare|karenge|aap|tum|kaun|konsa|kaisi|rahega|jana|jaana|ghoomne|sasta|saste|kam|baad|pehle|din|raat|raatein|bhejo|dekhna|milega|milegi|khana|bhojan|thike|accha|sahi|dosto|dost|bhyi|samaj|tu|teri|mera|meri|humare)\b/i;
  if (hinglishWords.test(text)) {
    return 'hinglish';
  }
  return 'english';
}

const queries = [
  ["मुझे दुबई पैकेज के बारे में जानना है और क्या क्या शामिल है", "hindi"],
  ["mujhe dubai package ke baare me batao aur kya kya include hai", "hinglish"],
  ["I want to know about the Dubai package and what is included.", "english"],
  ["4-5 din ka sasta tour batao jisme dinner ho", "hinglish"],
  ["हनीमून के लिए कौन सा पैकेज बेस्ट है?", "hindi"],
  ["booking kaise karni hai advance kitna dena hoga aur uske baad?", "hinglish"],
  ["best time to visit bali", "english"]
];

queries.forEach(([q, expected]) => {
  const res = detectLanguage(q);
  console.log(`[${res.toUpperCase()}] ${q} -> Match: ${res === expected}`);
});
