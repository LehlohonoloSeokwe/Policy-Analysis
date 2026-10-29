# Ospreyn Data Verification Register & Audit Log

**Author**: Lehlohonolo Seokwe, MA Political Science  
**Last Pipeline Audit**: 2026-10-29  
**Governing Standard**: Zero Data Hallucination. Every metric is bound to an auditable public primary source.

---

## 1. Indicator Audit Matrix

| Metric ID | Indicator Name | Unit | Frequency | Primary Source | World Bank / Official Code | Quality Status | Verified Value |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **gdp** | Real GDP Growth | % | Annual | World Bank / Stats SA P0441 | `NY.GDP.MKTP.KD.ZG` | **VERIFIED** | 1.11% (2025) |
| **inflation** | Consumer Price Index (CPI) | % | Annual | World Bank / Stats SA P0141 | `FP.CPI.TOTL.ZG` | **VERIFIED** | 3.21% (2025) |
| **interest-rates** | SARB Policy Repo Rate | % | Scheduled (MPC) | South African Reserve Bank | `SARB.REPO` | **VERIFIED** | 7.75% (2024) |
| **unemployment** | Unemployment (% of Labour Force) | % | Annual | World Bank (ILO Modeled) | `SL.UEM.TOTL.ZS` | **VERIFIED** | 32.39% (2025) |
| **rand** | Official ZAR / USD Exchange Rate | ZAR per USD | Annual | World Bank / SARB Market Rates | `PA.NUS.FCRF` | **VERIFIED** | R17.89 (2025) |
| **debt** | Central Government Debt | % of GDP | Annual | World Bank / National Treasury | `GC.DOD.TOTL.GD.ZS` | **VERIFIED** | 82.76% (2024) |

---

## 2. Key Methodological Divergences Explained

### A. Unemployment: World Bank ILO Model vs. Stats SA QLFS
- **World Bank (`SL.UEM.TOTL.ZS`)**: Econometric model harmonized by the International Labour Organization (ILO) for international cross-country comparison (32.39% for South Africa).
- **Stats SA Official Strict Definition (P0211)**: Includes persons aged 15–64 who were not employed in the reference week, actively looked for work or tried to start a business in the four weeks preceding the survey, and were available for work. Latest verified: **32.1% (Q3 2024)**.
- **Stats SA Expanded Definition (P0211)**: Includes all individuals above PLUS discouraged work-seekers (those who desire work but ceased active searching due to lack of jobs in their area or transport costs). Latest verified: **41.9% (Q3 2024)**.

### B. Inflation: Headline CPI vs. Core Inflation vs. SARB Target
- **Headline CPI**: Covers the total urban consumer basket including volatile food and non-alcoholic beverages (NAB), fuel, and electricity.
- **Core CPI**: Excludes food, non-alcoholic beverages, fuel, and energy. Used by the SARB MPC to assess underlying demand pressure.
- **SARB Inflation Target**: Explicit 3% to 6% band, with policy preference anchored at the **4.5% midpoint**.

### C. Sovereign Debt: Gross Loan Debt vs. Consolidated Debt
- **World Bank (`GC.DOD.TOTL.GD.ZS`)**: Central government gross loan debt as a percentage of nominal GDP (82.76%).
- **National Treasury Definition**: Distinguishes between gross loan debt issued directly by the national government (~74.7% of GDP) and wider public-sector consolidated debt which accounts for municipal debt and contingent liabilities (SOE debt guarantees for Eskom and Transnet).

---

## 3. Items Marked for Manual Verification (TO_VERIFY)
- No indicators currently hold `TO_VERIFY` status. All series have been fetched directly from the World Bank API or verified against SARB and Stats SA releases.
- Next scheduled verification audit: **Q4 2026 Statistical Release Window**.
