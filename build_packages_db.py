import json
import re

with open(r"D:\letsexplore-main\letsexplore-main\extracted_packages.json", "r", encoding="utf-8") as f:
    raw_data = json.load(f)

# Unique filenames
seen = set()
unique_items = []
for item in raw_data:
    fn = item["filename"]
    base_fn = re.sub(r"\s*\(\d+\)", "", fn)
    if base_fn in seen:
        continue
    seen.add(base_fn)
    unique_items.append(item)

print(f"Analyzing {len(unique_items)} packages...")

def clean_section(text, start_pattern, end_pattern=None, max_len=2000):
    match = re.search(start_pattern, text, re.IGNORECASE)
    if not match:
        return ""
    start_pos = match.end()
    if end_pattern:
        end_match = re.search(end_pattern, text[start_pos:], re.IGNORECASE)
        if end_match:
            return text[start_pos:start_pos+end_match.start()].strip()
    return text[start_pos:start_pos+max_len].strip()

packages_catalog = []

for item in unique_items:
    fn = item["filename"]
    text = item.get("text", "")
    
    # 1. Package Name & Destination
    pkg_match = re.search(r"Here is your package for\s*([^\n\r]+)", text, re.IGNORECASE)
    pkg_name = pkg_match.group(1).strip() if pkg_match else fn.replace(".pdf", "")
    
    dur_match = re.search(r"(\d+\s*Nights?\s*/\s*\d+\s*Days?|\d+\s*Days?\s*/\s*\d+\s*Nights?)", text, re.IGNORECASE)
    duration = dur_match.group(1).strip() if dur_match else "Custom"
    
    # Destination
    t_low = (pkg_name + " " + fn).lower()
    dest = "International"
    if "kerala" in t_low: dest = "Kerala"
    elif "srilanka" in t_low or "sri lanka" in t_low: dest = "Sri Lanka"
    elif "malaysia with bali" in t_low: dest = "Malaysia with Bali"
    elif "malaysia" in t_low: dest = "Malaysia"
    elif "bali" in t_low: dest = "Bali"
    elif "vietnam" in t_low: dest = "Vietnam"
    elif "hong kong" in t_low or "hong-kong" in t_low: dest = "Hong Kong"
    elif "canton" in t_low: dest = "Canton Fair (China)"
    elif "dubai" in t_low: dest = "Dubai"
    elif "singapore" in t_low: dest = "Singapore"
    elif "thailand" in t_low: dest = "Thailand"
    elif "ujjain" in t_low: dest = "Ujjain"
    
    # 2. Pricing
    per_adult_match = re.search(r"Per\s*Adult\s*(?:Price)?[:\s]*(?:INR|₹|Rs\.?|USD|\$)?\s*([\d,]+(?:\.\d{2})?)", text, re.IGNORECASE)
    total_match = re.search(r"Total\s*(?:Net)?\s*Amount[:\s]*(?:INR|₹|Rs\.?|USD|\$)?\s*([\d,]+(?:\.\d{2})?)", text, re.IGNORECASE)
    
    per_adult_inr = per_adult_match.group(1) if per_adult_match else None
    total_inr = total_match.group(1) if total_match else None
    
    # Calculate USD equivalent (~84 INR / 1 USD)
    usd_adult = None
    if per_adult_inr:
        try:
            val_clean = float(per_adult_inr.replace(",", ""))
            usd_adult = f"${round(val_clean / 84):,} USD"
        except:
            pass

    # 3. Trip ID & Guest
    trip_id = None
    trip_id_m = re.search(r"(?:Trip\s*ID|Quotation\s*No|Voucher\s*No)[:\s]*([A-Z0-9]+)", text, re.IGNORECASE)
    if trip_id_m: trip_id = trip_id_m.group(1)
    
    guest_m = re.search(r"Customer\s*Name[:\s]*([^\n\r]+)|Lead\s*Guest[:\s]*([^\n\r]+)", text, re.IGNORECASE)
    guest = None
    if guest_m:
        guest = (guest_m.group(1) or guest_m.group(2) or "").strip()
        guest = re.sub(r"\s*(PASSENGER|ADULT|CHILD|INFANT).*", "", guest, flags=re.IGNORECASE).strip()
    
    pax_m = re.search(r"(\d+)\s*Adults?", text, re.IGNORECASE)
    pax = f"{pax_m.group(1)} Adults" if pax_m else "2 Adults"

    # 4. Inclusions / Exclusions
    inclusions_raw = clean_section(text, r"INCLUSIONS?\s*(?:SNAPSHOT)?", r"EXCLUSIONS?|SNAPSHOT\s*HOTELS|ITINERARY", 1500)
    exclusions_raw = clean_section(text, r"EXCLUSIONS?\s*(?:SNAPSHOT)?", r"PAYMENT\s*POLICY|CANCELLATION|TERMS|HOTEL", 1000)

    # 5. Itinerary
    itinerary_raw = clean_section(text, r"ITINERARY\s*SIGHTSEEING|DAY\s*WISE\s*ITINERARY", r"HOTELS?|POLICY|PAYMENT|BANK", 3000)
    
    packages_catalog.append({
        "filename": fn,
        "trip_id": trip_id,
        "lead_guest": guest,
        "pax": pax,
        "destination": dest,
        "package_name": pkg_name,
        "duration": duration,
        "price_inr_adult": per_adult_inr,
        "price_usd_adult": usd_adult,
        "total_amount_inr": total_inr,
        "inclusions_preview": inclusions_raw[:400].replace("\n", " "),
        "exclusions_preview": exclusions_raw[:300].replace("\n", " "),
        "itinerary_preview": itinerary_raw[:600].replace("\n", " ")
    })

with open(r"D:\letsexplore-main\letsexplore-main\packages_db.json", "w", encoding="utf-8") as f:
    json.dump(packages_catalog, f, ensure_ascii=False, indent=2)

print(f"Generated packages_db.json with {len(packages_catalog)} packages.")
for p in packages_catalog:
    print(f"[{p['destination']}] {p['package_name']} ({p['duration']}) | INR: {p['price_inr_adult']} | USD: {p['price_usd_adult']} | Pax: {p['pax']}")
