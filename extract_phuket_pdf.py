import sys
sys.stdout.reconfigure(encoding='utf-8')

from pypdf import PdfReader

path = r'D:\letsexplore-main\letsexplore-main\packages\Package_tour_21_Dec_till_27_Dec_Phuket_27_Dec_till_1_Jan_12pct_markup.pdf'

reader = PdfReader(path)
print(f'Total Pages: {len(reader.pages)}')

for i, page in enumerate(reader.pages):
    text = page.extract_text() or ''
    print(f'\n{"="*60}')
    print(f'PAGE {i+1}')
    print('='*60)
    print(text)
