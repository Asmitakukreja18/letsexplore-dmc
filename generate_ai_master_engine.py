import json
import re

with open(r"D:\letsexplore-main\letsexplore-main\official_vouchers_compiled.json", "r", encoding="utf-8") as f:
    vouchers = json.load(f)

print(f"Generating Master AI Knowledge Engine for {len(vouchers)} vouchers...")

# Build knowledge text for systemPrompt
system_prompt_packages = "OFFICIAL VERIFIED PACKAGES (EXACT VOUCHER DATA WITH BOTH INR & USD RATES):\n"
for i, v in enumerate(vouchers, 1):
    system_prompt_packages += f"""
{i}. {v['name'].upper()} ({v['duration']}):
- Trip ID: {v['trip_id']} | Lead Guest: {v['lead_guest']} | Pax: {v['pax']}
- Route: {v['destination']}
- Pricing:
  * Per Adult Rate: INR {v['price_inr']:,} (~${v['price_usd']} USD)
  * Total Net Group Amount: INR {v['total_inr']:,}
  * Land Package Option: From INR {v.get('land_inr', v['price_inr']):,} (~${round(v.get('land_inr', v['price_inr'])/84)} USD)
- Hotels & Stays: {v['hotels']}
- Flights: {v.get('flights', 'Available on request')}
- Sightseeing Highlights: {v['highlights']}
- Inclusions: {v['inclusions']}
- Exclusions: {v['exclusions']}
"""

with open(r"D:\letsexplore-main\letsexplore-main\master_knowledge_prompt.txt", "w", encoding="utf-8") as f:
    f.write(system_prompt_packages)

print("Saved master_knowledge_prompt.txt")
