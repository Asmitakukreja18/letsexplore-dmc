import json

with open('official_vouchers_compiled.json', 'r', encoding='utf-8') as f:
    vouchers = json.load(f)

js_packages = {}
for v in vouchers:
    js_packages[v['id_code']] = {
        'id_code': v['id_code'],
        'name': v['name'],
        'duration': v['duration'],
        'destination': v['destination'],
        'pax': v.get('pax', '2 Adults'),
        'trip_id': v.get('trip_id', 'LEDMC100' + str(abs(hash(v['id_code'])) % 90000 + 10000)),
        'lead_guest': v.get('lead_guest', 'Valued Guest'),
        'price_inr': v['price_inr'],
        'price_usd': v['price_usd'],
        'total_inr': v.get('total_inr', v['price_inr'] * 2),
        'land_inr': v.get('land_inr', int(v['price_inr'] * 0.7)),
        'hotels': v.get('hotels', ''),
        'flights': v.get('flights', 'Available on request'),
        'highlights': v.get('highlights', ''),
        'inclusions': v.get('inclusions', ''),
        'exclusions': v.get('exclusions', ''),
        'badge': v.get('badge', '')
    }

with open('packages_knowledge.json', 'w', encoding='utf-8') as f:
    json.dump(js_packages, f, indent=2)

print(f"Generated packages_knowledge.json with {len(js_packages)} packages.")
