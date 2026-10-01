import re

def test_intent(msg):
    m = msg.lower().strip()
    
    # 1. Greetings
    if re.search(r'^(hi|hello|helo|hey|hy|hola|namaste|good morning|good evening|yo)\b', m) and len(m.split()) <= 4:
        return "GREETING"
    
    # 2. Nightlife / Dinner / 4-5 Days / Low Budget
    is_dinner_or_night = bool(re.search(r'\b(dinner|night|nightlife|party|club|clubs|evening)\b', m))
    is_low_budget = bool(re.search(r'\b(low budget|budget is low|budget kam|kam budget|sasta|cheap|affordable|budget tight)\b', m))
    is_short_duration = bool(re.search(r'\b(4[\s-]*5\s*days?|4\s*days?|5\s*days?|short trip|weekend)\b', m))
    
    if (is_dinner_or_night and (is_low_budget or is_short_duration)) or (is_low_budget and is_short_duration):
        return "LOW_BUDGET_SHORT_TRIP_WITH_DINNER"
        
    # 3. Destination detection
    if 'malaysia' in m and 'bali' in m:
        return "MALAYSIA_BALI"
    if 'dubai' in m:
        return "DUBAI"
    if 'thailand' in m:
        return "THAILAND"
    if 'bali' in m:
        return "BALI"
        
    return "UNKNOWN"

test_cases = [
    "helo",
    "hello",
    "hi there",
    "umm tell me abt places where dinner nightt ho my budget is low and for 45 days",
    "umm tell me abt places where dinner nightt ho my budget is low and for 4-5 days",
    "tell me malaysia with bali",
    "what is the price?",
    "which hotels?",
    "budget is low for 4 days"
]

for t in test_cases:
    print(f"'{t}' => {test_intent(t)}")
