import json
import re

with open(r"D:\letsexplore-main\letsexplore-main\extracted_packages.json", "r", encoding="utf-8") as f:
    raw_data = json.load(f)

# Group duplicates
seen = set()
unique_items = []
for item in raw_data:
    fn = item["filename"]
    base_fn = re.sub(r"\s*\(\d+\)", "", fn)
    if base_fn in seen:
        continue
    seen.add(base_fn)
    unique_items.append(item)

print(f"Total unique packages: {len(unique_items)}")

catalog = []

for item in unique_items:
    fn = item["filename"]
    text = item.get("text", "")
    
    # Extract destination
    dest = "General"
    fn_lower = fn.lower()
    text_lower = text[:1000].lower()
    
    if "kerala" in fn_lower or "kerala" in text_lower:
        dest = "Kerala"
    elif "srilanka" in fn_lower or "sri lanka" in text_lower:
        dest = "Sri Lanka"
    elif "malaysia with bali" in fn_lower or "malaysia with bali" in text_lower:
        dest = "Malaysia with Bali"
    elif "malaysia" in fn_lower or "malaysia" in text_lower:
        dest = "Malaysia"
    elif "bali" in fn_lower or "bali" in text_lower:
        dest = "Bali"
    elif "vietnam" in fn_lower or "vietnam" in text_lower:
        dest = "Vietnam"
    elif "hong-kong" in fn_lower or "hong kong" in text_lower:
        dest = "Hong Kong"
    elif "canton" in fn_lower or "canton" in text_lower:
        dest = "Canton Fair (China)"
    elif "dubai" in fn_lower or "dubai" in text_lower:
        dest = "Dubai"
    elif "singapore" in fn_lower or "singapore" in text_lower:
        dest = "Singapore"
    elif "thailand" in fn_lower or "thailand" in text_lower:
        dest = "Thailand"
    elif "ujjain" in fn_lower or "ujjain" in text_lower:
        dest = "Ujjain"
    
    # Extract package title
    pkg_name_match = re.search(r"Here is your package for\s*([^\n\r]+)", text, re.IGNORECASE)
    pkg_name = pkg_name_match.group(1).strip() if pkg_name_match else dest + " Tour"
    
    # Extract duration
    dur_match = re.search(r"(\d+\s*Nights?\s*/\s*\d+\s*Days?|\d+\s*Days?\s*/\s*\d+\s*Nights?)", text, re.IGNORECASE)
    duration = dur_match.group(1).strip() if dur_match else "Custom Duration"
    
    # Extract pricing
    prices_found = re.findall(r"(?:INR|₹|Rs\.?|USD|\$)\s*([\d,]+(?:\.\d{2})?)", text, re.IGNORECASE)
    # Also find "Total Amount" or "Per Adult"
    per_adult_match = re.search(r"Per\s*Adult\s*(?:Price)?[:\s]*(?:INR|₹|Rs\.?|USD|\$)?\s*([\d,]+(?:\.\d{2})?)", text, re.IGNORECASE)
    total_match = re.search(r"Total\s*(?:Net)?\s*Amount[:\s]*(?:INR|₹|Rs\.?|USD|\$)?\s*([\d,]+(?:\.\d{2})?)", text, re.IGNORECASE)
    
    print(f"\n--- {fn} ---")
    print(f"Destination: {dest}")
    print(f"Package: {pkg_name} ({duration})")
    print(f"Prices in text: {prices_found[:5]}")
    if per_adult_match:
        print(f"Per Adult: {per_adult_match.group(0)}")
    if total_match:
        print(f"Total: {total_match.group(0)}")
    
    catalog.append({
        "filename": fn,
        "destination": dest,
        "package_name": pkg_name,
        "duration": duration,
        "per_adult": per_adult_match.group(0) if per_adult_match else None,
        "total_amount": total_match.group(0) if total_match else None,
        "prices": prices_found[:6],
        "preview": text[:500]
    })

with open(r"D:\letsexplore-main\letsexplore-main\catalog_summary.json", "w", encoding="utf-8") as f:
    json.dump(catalog, f, ensure_ascii=False, indent=2)
