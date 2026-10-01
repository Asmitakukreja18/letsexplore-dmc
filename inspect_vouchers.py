import json

with open('official_vouchers_compiled.json', 'r', encoding='utf-8') as f:
    vouchers = json.load(f)

print(f"Total compiled vouchers: {len(vouchers)}")
for v in vouchers:
    p_inr = v.get('price_inr', 0)
    p_usd = v.get('price_usd', 0)
    print(f"{v['id_code']}: {v['name']} -> INR {p_inr:,} (~${p_usd:,} USD)")
