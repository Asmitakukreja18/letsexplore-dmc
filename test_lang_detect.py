# Test language detection on common Hindi and Hinglish queries
import re

def detectLanguage(text):
    if not text:
        return 'english'
    if re.search(r'[\u0900-\u097F]', text):
        return 'hindi'
    hinglish_words = r'\b(mujhe|hume|humko|batao|btao|bataiye|hoga|hogi|hoge|kaise|kya|chahiye|kitna|kitne|kitni|kharcha|hai|hain|karna|karo|kare|karenge|aap|tum|kaun|konsa|kaisi|rahega|jana|jaana|ghoomne|sasta|saste|kam|baad|pehle|din|raat|raatein|bhejo|dekhna|milega|milegi|khana|bhojan|thike|accha|sahi|dosto|dost|ladkiyan|ladke)\b'
    if re.search(hinglish_words, text, re.IGNORECASE):
        return 'hinglish'
    return 'english'

queries = [
    ("मुझे दुबई पैकेज के बारे में जानना है और क्या क्या शामिल है", "hindi"),
    ("mujhe dubai package ke baare me batao aur kya kya include hai", "hinglish"),
    ("I want to know about the Dubai package and what is included.", "english"),
    ("4-5 din ka sasta tour batao jisme dinner ho", "hinglish"),
    ("हनीमून के लिए कौन सा पैकेज बेस्ट है?", "hindi"),
    ("booking kaise karni hai advance kitna dena hoga aur uske baad?", "hinglish"),
    ("best time to visit bali", "english")
]

for q, expected in queries:
    res = detectLanguage(q)
    print(f"[{res.upper()}] Query: {q} | Correct: {res == expected}")
