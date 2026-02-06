
import pdfplumber
import os
import re
import statistics

pdf_dir = 'public/Placement_DATA_pdfs'
files = sorted([f for f in os.listdir(pdf_dir) if f.endswith('.pdf')], reverse=True)

def parse_value(val):
    if not val: return 0
    try:
        return int(float(str(val).replace(',', '').strip()))
    except:
        return 0

def parse_ctc(val):
    if not val: return 0.0
    val = str(val).split('-')[0].strip()
    val = re.sub(r'[^\d\.]', '', val)
    try:
        return float(val)
    except:
        return 0.0

results = []

for filename in files:
    if "2025" in filename: batch = "2024-25"
    elif "2024" in filename: batch = "2023-24"
    elif "2023" in filename: batch = "2022-23"
    elif "2022" in filename: batch = "2021-22"
    elif "2021" in filename: batch = "2020-21"
    elif "2020" in filename: batch = "2019-20"
    else: batch = filename

    stats = {
        "batch": batch,
        "offers": []
    }
    
    print(f"\nProcessing {filename} (Batch: {batch})...")
    
    try:
        with pdfplumber.open(os.path.join(pdf_dir, filename)) as pdf:
            for page in pdf.pages:
                tables = page.extract_tables()
                for table in tables:
                    table = [[str(cell).strip() if cell else "" for cell in row] for row in table]
                    
                    header_idx = -1
                    ee_col_idx = -1
                    ctc_col_idx = -1
                    company_col_idx = -1
                    
                    for r_idx, row in enumerate(table):
                        if "EE" in row and ("Company" in str(row) or "CTC" in str(row) or "Department" in str(row)):
                            header_idx = r_idx
                            try: 
                                ee_col_idx = row.index("EE")
                                for c, cell in enumerate(row):
                                    if "CTC" in cell or "Lakh" in cell:
                                        ctc_col_idx = c
                                        break
                                for c, cell in enumerate(row):
                                    if "Company" in cell:
                                        company_col_idx = c
                                        break
                                if company_col_idx == -1: company_col_idx = 1
                            except: pass
                            break
                    
                    if ee_col_idx != -1 and ctc_col_idx != -1:
                        for i in range(header_idx + 1, len(table)):
                            row = table[i]
                            if len(row) <= ee_col_idx: continue
                            
                            company = row[company_col_idx].replace('\n', ' ')
                            ctc_str = row[ctc_col_idx]
                            ee_offers = parse_value(row[ee_col_idx])
                            
                            if ee_offers > 0:
                                ctc = parse_ctc(ctc_str)
                                if ctc > 0:
                                    stats["offers"].append({
                                        "company": company,
                                        "ctc": ctc,
                                        "count": ee_offers
                                    })

    except Exception as e:
        print(f"Error parsing {filename}: {e}")

    results.append(stats)

print("\n--- FINAL EE STATISTICS ---")
for res in results:
    offers = res["offers"]
    if not offers: continue

    highest_offer = max(offers, key=lambda x: x["ctc"])
    
    recruiter_counts = {}
    for o in offers:
        recruiter_counts[o["company"]] = recruiter_counts.get(o["company"], 0) + o["count"]
    
    top_Recruiters_list = sorted(recruiter_counts.items(), key=lambda x: x[1], reverse=True)[:10]
    top_recruiters_names = [r[0] for r in top_Recruiters_list]
    
    # High Paying (>10 LPA)
    high_paying = [o for o in offers if o["ctc"] >= 10]
    high_paying = sorted(high_paying, key=lambda x: x["ctc"], reverse=True)
    # Unique companies
    seen_companies = set()
    high_paying_names = []
    for o in high_paying:
        if o["company"] not in seen_companies:
            high_paying_names.append(o["company"])
            seen_companies.add(o["company"])
    high_paying_names = high_paying_names[:5]

    print(f"Batch: {res['batch']}")
    print(f"  Highest: {highest_offer['ctc']} by {highest_offer['company']}")
    print(f"  Top Recruiters: {top_recruiters_names}")
    print(f"  High Paying: {high_paying_names}")
