
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
    # Handle ranges like "3.5-11" -> take average or max? Usually placement stats take the specific offer value if available, or average. 
    # Let's take average of range for safety, or just the value.
    val = str(val).split('-')[0].strip() # taking lower bound or single value is safer, or average?
    # Actually, looking at previous output "3.5-11", taking 7.25? 
    # Let's clean standard numbers.
    val = re.sub(r'[^\d\.]', '', val)
    try:
        return float(val)
    except:
        return 0.0

results = []

for filename in files:
    year_match = re.search(r'20\d\d', filename)
    year = year_match.group(0) if year_match else "Unknown"
    
    # Adjust batch name. e.g. Placement Statistic 2025.pdf -> Batch 2024-25
    # filename is like "Placement Record 2021.pdf" -> Batch 2020-21 usually?
    # Let's map filename to batch explicitly based on known filenames or just use the year in filename.
    # 2025 -> 2024-25
    # 2024 -> 2023-24
    if "2025" in filename: batch = "2024-25"
    elif "2024" in filename: batch = "2023-24"
    elif "2023" in filename: batch = "2022-23"
    elif "2022" in filename: batch = "2021-22"
    elif "2021" in filename: batch = "2020-21"
    elif "2020" in filename: batch = "2019-20"
    else: batch = filename

    stats = {
        "batch": batch,
        "offers": [], # (Company, CTC, Count)
        "eligible": 0,
        "placed": 0
    }
    
    print(f"\nProcessing {filename} (Batch: {batch})...")
    
    try:
        with pdfplumber.open(os.path.join(pdf_dir, filename)) as pdf:
            # 1. Summary Extraction (Eligible / Placed)
            # Usually on last pages or summary tables.
            # Strategy: Search extracted tables for "EE" row or column in summary.
            
            summary_found = False
            
            for page in pdf.pages:
                tables = page.extract_tables()
                for table in tables:
                    # Clean None values
                    table = [[str(cell).strip() if cell else "" for cell in row] for row in table]
                    
                    # Search for Detailed Placement Table (Company wise)
                    # Headers usually contain "Company" and "EE"
                    header_idx = -1
                    ee_col_idx = -1
                    ctc_col_idx = -1
                    company_col_idx = -1
                    
                    for r_idx, row in enumerate(table):
                        # Look for Header Row
                        if "EE" in row and ("Company" in str(row) or "CTC" in str(row) or "Department" in str(row)):
                            # This is a header
                            header_idx = r_idx
                            try: 
                                ee_col_idx = row.index("EE")
                                # Find CTC col - mostly "Annual CTC" or "Lakh"
                                for c, cell in enumerate(row):
                                    if "CTC" in cell or "Lakh" in cell:
                                        ctc_col_idx = c
                                        break
                                # Find Company col
                                for c, cell in enumerate(row):
                                    if "Company" in cell:
                                        company_col_idx = c
                                        break
                                # Fallback for Company: usually col 1 or 2
                                if company_col_idx == -1: company_col_idx = 1
                            except: pass
                            break
                    
                    # If this is the company table (Has EE and Company/CTC)
                    if ee_col_idx != -1 and ctc_col_idx != -1:
                        # Process rows below header
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

                    # 2. Search for Summary Table (Eligible / Placed)
                    # Usually transposed or standard. Look for "Eligible", "Batch Size", "Placed"
                    # Rows often have "EE" or "Electrical"
                    # Or Columns have "EE"
                    
                    # Transposed Summary (common in these PDFs): Department | CST | ETC | EE ...
                    if "Department" in [c for c in table[0] if c] and "EE" in table[0]:
                        # Columns are departments
                        try:
                            ee_idx = table[0].index("EE")
                            for row in table:
                                first_col = row[0].lower()
                                if "eligible" in first_col or "batch size" in first_col:
                                    stats["eligible"] = max(stats["eligible"], parse_value(row[ee_idx]))
                                if "placed" in first_col or "job" in first_col or "offer" in first_col:
                                    # Need to differentiate "Total Offers" vs "Actually Placed"
                                    # Usually "Actually Placed" is distinct specific row.
                                    # If only "Total Offers" exists, use that temporarily, but prefer "Placed"
                                    if "actually placed" in first_col:
                                        stats["placed"] = parse_value(row[ee_idx])
                        except: pass
                    
                    # Check for row-based summary (Department in first col, stats in others) -> Less likely based on previous output
                    
            # Post-pdf processing logic for Placed count if "Actually placed" wasn't explicitly found
            # Sometimes "Students who might have secured jobs..." or similar wording is used
            # If placed is 0, heuristic: sum of unique offers? No, use Eligible * %? 
            # Let's rely on gathered data. If Placed is 0, we might print "Unknown" to be safe.

    except Exception as e:
        print(f"Error parsing {filename}: {e}")

    results.append(stats)

# Calculation and Printing
print("\n--- FINAL EE STATISTICS ---")
for res in results:
    offers = res["offers"]
    total_offers = sum(o["count"] for o in offers)
    
    if total_offers == 0:
        continue

    # Flatten offers for median/avg
    all_ctcs = []
    for o in offers:
        all_ctcs.extend([o["ctc"]] * o["count"])
    
    highest = max(all_ctcs) if all_ctcs else 0
    average = statistics.mean(all_ctcs) if all_ctcs else 0
    median = statistics.median(all_ctcs) if all_ctcs else 0
    
    # Recruiters
    # Group by company
    recruiter_counts = {}
    for o in offers:
        recruiter_counts[o["company"]] = recruiter_counts.get(o["company"], 0) + o["count"]
    
    top_Recruiters_list = sorted(recruiter_counts.items(), key=lambda x: x[1], reverse=True)[:5]
    top_recruiters_names = [r[0] for r in top_Recruiters_list]

    print(f"Batch: {res['batch']}")
    print(f"  Eligible: {res['eligible']}")
    print(f"  Placed: {res['placed'] if res['placed'] > 0 else 'N/A'}")
    print(f"  Highest: {highest}")
    print(f"  Average: {average:.2f}")
    print(f"  Median: {median:.2f}")
    print(f"  Top Recruiters: {top_recruiters_names}")
