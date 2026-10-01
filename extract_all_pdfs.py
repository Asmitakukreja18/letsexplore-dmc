import os
import glob
import json
import re
from pypdf import PdfReader

PACKAGES_DIR = r"D:\letsexplore-main\letsexplore-main\packages"
OUTPUT_FILE = r"D:\letsexplore-main\letsexplore-main\extracted_packages.json"

pdf_files = glob.glob(os.path.join(PACKAGES_DIR, "*.pdf"))
print(f"Found {len(pdf_files)} PDF files.")

results = []

for pdf_path in sorted(pdf_files):
    filename = os.path.basename(pdf_path)
    try:
        reader = PdfReader(pdf_path)
        full_text = ""
        for i, page in enumerate(reader.pages):
            text = page.extract_text() or ""
            full_text += f"\n--- PAGE {i+1} ---\n" + text
        
        # Extract basic hints
        lines = [line.strip() for line in full_text.splitlines() if line.strip()]
        
        results.append({
            "filename": filename,
            "page_count": len(reader.pages),
            "text": full_text[:15000],  # first 15k chars
            "total_chars": len(full_text)
        })
        print(f"Processed: {filename} ({len(reader.pages)} pages, {len(full_text)} chars)")
    except Exception as e:
        print(f"Error processing {filename}: {e}")
        results.append({
            "filename": filename,
            "error": str(e)
        })

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"Saved extracted data to {OUTPUT_FILE}")
