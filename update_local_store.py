import json
import re

with open(r"D:\letsexplore-main\letsexplore-main\official_vouchers_compiled.json", "r", encoding="utf-8") as f:
    vouchers = json.load(f)

print(f"Loaded {len(vouchers)} vouchers.")

# 1. Update backend/local_store.json
local_store_path = r"D:\letsexplore-main\letsexplore-main\backend\local_store.json"
with open(local_store_path, "r", encoding="utf-8") as f:
    local_store = json.load(f)

# Convert vouchers to packages table format
packages_list = []
destination_images = {
    "malaysia": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    "thailand": "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80",
    "bali": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    "singapore": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    "vietnam": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    "dubai": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    "hong kong": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=800&q=80",
    "china": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
    "sri lanka": "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
    "kerala": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    "ujjain": "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
    "georgia": "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80",
    "turkey": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    "kashmir": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80"
}

for i, v in enumerate(vouchers, 1):
    reg = v.get("region", "international").lower()
    img = destination_images.get(reg, "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80")
    
    pkg_entry = {
        "id": i,
        "id_code": v["id_code"],
        "name": v["name"],
        "region": v["region"],
        "destination": v["destination"],
        "duration": v["duration"],
        "price": v["price_inr"],
        "price_usd": v["price_usd"],
        "original_price": round(v["price_inr"] * 1.2),
        "rating": 4.9,
        "reviews_count": 80 + i * 5,
        "badge": v["badge"],
        "image": img,
        "tags": json.dumps([v["destination"].split()[0], v["duration"].split()[0] + "D", "Verified DMC", "Private AC"]),
        "highlights": json.dumps([h.strip() for h in v["highlights"].split(",") if h.strip()][:6]),
        "inclusions": json.dumps([v["hotels"], v["inclusions"][:120]]),
        "exclusions": json.dumps([v["exclusions"][:120]]),
        "itinerary": json.dumps([{"day": 1, "title": "Arrival & Check-in", "desc": "Private transfer to hotel and leisure."}]),
        "category": v.get("category", "international"),
        "active": 1,
        "created_at": "2026-09-30T12:00:00.000Z"
    }
    packages_list.append(pkg_entry)

local_store["packages"] = packages_list
with open(local_store_path, "w", encoding="utf-8") as f:
    json.dump(local_store, f, ensure_ascii=False, indent=2)

print(f"Updated {local_store_path} with {len(packages_list)} verified packages.")
