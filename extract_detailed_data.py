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

print(f"Loaded {len(unique_items)} unique files.")

detailed_packages = {}

for item in unique_items:
    fn = item["filename"]
    text = item.get("text", "")
    
    # Extract Hotels section
    hotels = []
    hotel_matches = re.findall(r"([A-Za-z0-9\s&'-]+(?:Hotel|Resort|Villa|Suites?|Inn|Palace)[A-Za-z0-9\s&'-]*)", text)
    
    # Extract Day by day
    days = re.findall(r"(Day\s*\d+[^:\n\r]+:[^\n\r]+)", text)
    
    # Check for lead guest and trip id
    trip_id_match = re.search(r"(?:Trip\s*ID|Quotation\s*No|Voucher\s*No)[:\s]*([A-Z0-9]+)", text, re.IGNORECASE)
    lead_guest_match = re.search(r"(?:Lead\s*Guest|Customer\s*Name|Guest\s*Name)[:\s]*([A-Za-z\s]+)", text, re.IGNORECASE)
    
    detailed_packages[fn] = {
        "trip_id": trip_id_match.group(1) if trip_id_match else None,
        "lead_guest": lead_guest_match.group(1).strip() if lead_guest_match else None,
        "hotels": list(set([h.strip() for h in hotel_matches if len(h.strip()) > 5]))[:6],
        "days": days[:8]
    }

with open(r"D:\letsexplore-main\letsexplore-main\detailed_extracted.json", "w", encoding="utf-8") as f:
    json.dump(detailed_packages, f, ensure_ascii=False, indent=2)

print("Saved detailed_extracted.json")
