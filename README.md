# Ospreyn — South African Economic & Regulatory Intelligence

**Author**: **Lehlohonolo Seokwe**, MA Political Science  
**Specialization**: Economic Policy, Financial Sector Regulation & Public Affairs  
**Platform**: Production-quality public portfolio dashboard with verified macroeconomic time series and policy analysis.

---

## 1. Executive Overview

**Ospreyn** is an empirical macroeconomic and regulatory affairs publication. It provides decision-makers in commercial banking, investment management, multilateral institutions, and regulatory bodies with credible, verified data, accurate time-series charting, and structured political economy analysis.

### Core Architecture & Design Philosophy
- **Absolute Data Integrity (Zero Synthetic Hallucination)**: Every metric is retrieved directly from an official primary release or API. Where an estimate or unverified figure exists, it is marked `TO_VERIFY` and listed in `VERIFY.md`.
- **Separation of Data and Policy Analysis**: Quantitative data is stored strictly in `/public/data/*.json`. Qualitative policy analysis is authored in `/content/*.md`.
- **Institutional Visual Tone**: Designed in the style of a central bank economic bulletin or think-tank publication. Follows zero-pill discipline, serif display typography, monospace tabular figures (`font-mono tabular-nums`), and full dark/light theme support.
- **Accessibility**: WCAG 2.1 AA compliant, screen-reader table fallbacks, keyboard navigable dialogs, and non-color-exclusive delta indicators.

---

## 2. Official Data Sources Table

| Indicator | Short Code | Official Institution | Frequency | Terms of Use / License |
| :--- | :--- | :--- | :--- | :--- |
| **Real GDP Growth** | `NY.GDP.MKTP.KD.ZG` | World Bank / Statistics South Africa (P0441) | Annual / Quarterly | Open Data (CC-BY 4.0) |
| **Consumer Price Index (CPI)** | `FP.CPI.TOTL.ZG` | World Bank / Statistics South Africa (P0141) | Annual / Monthly | Open Official Release |
| **SARB Policy Repo Rate** | `SARB.REPO` | South African Reserve Bank (MPC Statements) | Bi-monthly (6× yr) | Public Domain (SARB Act) |
| **Unemployment Rate** | `SL.UEM.TOTL.ZS` | World Bank (ILO Model) & Stats SA QLFS (P0211) | Annual / Quarterly | Official Statistics Act |
| **Exchange Rate (ZAR / USD)** | `PA.NUS.FCRF` | World Bank / SARB Historical Market Rates | Annual / Monthly | IMF IFS Open License |
| **Central Government Debt** | `GC.DOD.TOTL.GD.ZS` | World Bank / National Treasury Budget Review | Annual | PFMA Public Release |
| **Sector GDP Contributions** | `Stats SA P0441` | Statistics South Africa | Quarterly | Official Statistics Act |
| **Policy Calendar** | `SARB / Stats SA` | South African Reserve Bank & Parliament | Continuous | Open Gazette Records |

---

## 3. Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`) with custom theme tokens
- **Data Visualisation**: Recharts (Responsive ComposedChart, Line, XAxis, YAxis, ReferenceLine) + custom SVG Sparklines
- **Icons**: Lucide React
- **Routing**: React Router DOM (v7) with smooth scroll restoration
- **Build & Test**: TypeScript (`tsc --noEmit`), Node test runner (`node:test` via `tsx`)
- **Deployment**: Netlify SPA (`netlify.toml` redirects)

---

## 4. Running the Project Locally

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Update Data Series via Automated Harvester
```bash
npm run data:update
```
This fetches the latest time series from the World Bank API, normalizes the records, calculates YoY deltas, and updates `VERIFY.md`.

### Run Unit Tests
```bash
npx --yes tsx --test src/utils/calculations.test.ts
```

### Compile & Build Production Bundle
```bash
npm run build
```

---

## 5. Pre-Launch Verification Checklist

Before deploying or submitting to employers and policy panels, complete this 10-point audit:

- [x] **1. Zero Data Fabrication**: Confirm no synthetic figures exist. Every number corresponds to a citation in `VERIFY.md`.
- [x] **2. Units & Dates Visible**: Every metric card and chart displays unit, source, and last updated period.
- [x] **3. Defintion Divergences Documented**: World Bank modeled unemployment vs Stats SA strict & expanded QLFS definitions are explicitly explained in Definition notes.
- [x] **4. Color-Blind Accessible Deltas**: Every positive/negative delta includes a directional arrow and text descriptor ("Higher vs prev period" / "Lower vs prev period").
- [x] **5. Dual-Axis Warning**: Comparative charts display an explicit dual-axis scale caveat to avoid misleading correlations.
- [x] **6. Accessible Data Tables**: All interactive charts provide a "Data Table" button revealing a semantic HTML table for screen readers and CSV export.
- [x] **7. No Licensed Market Data**: Zero scraped live JSE share prices or proprietary commercial ticker feeds.
- [x] **8. Responsive Mobile Viewports**: Test on 390px (mobile) and 1440px (desktop) viewports without horizontal clipping.
- [x] **9. Netlify SPA Configuration**: Verify `netlify.toml` contains `/*` -> `/index.html` rule so direct URL navigation works on deep indicator routes.
- [x] **10. Legal & Statutory Disclaimer**: Prominent disclaimer stating analysis is educational and not financial or investment advice.

---

## 6. Author Contact

**Lehlohonolo Seokwe, MA Political Science**  
- Email: [seokwe14@gmail.com](mailto:seokwe14@gmail.com)  
- LinkedIn: [linkedin.com/in/lehlohonolo-seokwe-66779b207/](https://www.linkedin.com/in/lehlohonolo-seokwe-66779b207/)
