# Ospreyn — South African Economic & Regulatory Intelligence

**Author**: **Lehlohonolo Seokwe**, MA Political Science  
**Focus**: South African Macroeconomic Policy, Financial Sector Regulation & Public Affairs  
**Platform**: Production-quality public portfolio site demonstrating rigorous data sourcing, precise time-series charting, and policy analysis for decision-makers in finance and regulatory bodies.

---

## Confirmed Specifications & Brand Identity

> [!IMPORTANT]
> - **Platform Name**: **Ospreyn**
> - **Author**: **Lehlohonolo Seokwe**, MA Political Science
> - **Target Career Profile**: Policy, regulatory affairs, government relations, and macroeconomic strategy roles in banking, asset management, multilateral institutions, and public finance.
> - **Core Ethos**: **Zero Data Hallucination**. Every figure is backed by an authentic official source (World Bank, SARB, Stats SA, National Treasury), complete with unit, frequency, citation URL, and verification register. Pure DATA is explicitly separated from written ANALYSIS.

---

## 1. Overview & Core Concept

- **State of the Economy Executive Hub**:
  - 6 headline indicators: Real GDP Growth (%), CPI Inflation YoY (%), SARB Repo Rate (%), Official Unemployment Rate (%), ZAR/USD Exchange Rate, Central Government Debt (% of GDP).
  - Metric cards showing: Current value, change vs previous period (basis points / percentage), color-blind accessible direction arrow, sparkline, citation, and "Last updated" date.
  - Written executive summary driven by `/content/overview.md`.
- **Deep-Dive Indicator Pages (Dedicated route per metric)**:
  - Real GDP Growth (`/indicators/gdp`)
  - Consumer Price Inflation (`/indicators/inflation`)
  - Monetary Policy & Repo Rate (`/indicators/interest-rates`)
  - Labour Market & Unemployment (`/indicators/unemployment`)
  - Rand Exchange Rate (`/indicators/rand`)
  - Sovereign Debt & Fiscal Health (`/indicators/debt`)
  - Features: Time-range selector (1Y, 5Y, 10Y, MAX), event annotations (e.g. SARB MPC rate hikes, GNU formation, COVID contraction), dual-axis comparative view, accessible data tables, and CSV export.
  - Three-part structured analysis on each indicator: **Trend**, **Why it matters**, **Who is affected**.
  - **Definition Note**: Highlights key methodological differences (e.g., World Bank modeled vs Stats SA official QLFS vs expanded unemployment; Headline vs Core CPI; Gross loan debt vs Net debt).
- **Sector Profiles**:
  - 4 key economic sectors:
    1. *Banking & Financial Services* (Twin Peaks, Prudential Authority & FSCA, Basel III, AML/CFT grey-list exit)
    2. *Mining & Energy* (MPRDA, Transnet rail & port logistics bottlenecks, Eskom energy availability)
    3. *Retail & FMCG* (Consumer disposable income, food inflation basket dynamics, Competition Commission inquiries)
    4. *ICT & Telecommunications* (Post-spectrum auction rollout, digital finance integration, ICASA oversight)
- **Policy & Release Calendar**:
  - Upcoming SARB MPC decision dates, Stats SA statistical releases (GDP, CPI, QLFS), National Treasury Budget and MTBPS milestones, and open parliamentary comment deadlines.
- **Policy Briefs & Publications**:
  - Filterable library of in-depth policy briefs authored by Lehlohonolo Seokwe, each with executive summary, metadata, and full markdown reader.
- **Methodology, Sources & Hand-Verification Register**:
  - Complete data catalog with source URLs, retrieval dates, and API codes.
  - `VERIFY.md` register highlighting verified figures and manual audit checkpoints.
  - Explicit disclaimer: *"Educational and policy analysis. Not financial or investment advice."*
- **Author Profile & Contact**:
  - Bio of Lehlohonolo Seokwe, academic background in political science, LinkedIn and direct email links.

---

## 2. Design System & Design Tokens

Designed in the spirit of an authoritative central-bank bulletin or economic think-tank broadsheet (calm, credible, high contrast, zero-pill discipline).

### Design Tokens (CSS Variables & Tailwind)

| Token Name | Light Theme Value | Dark Theme Value | Usage |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#F8FAFC` (Slate 50) | `#0B0F19` (Deep Charcoal Navy) | Background canvas |
| `--surface-card` | `#FFFFFF` | `#111827` (Slate 900) | Metric cards, chart containers |
| `--surface-subtle`| `#F1F5F9` (Slate 100) | `#1E293B` (Slate 800) | Table headers, secondary blocks |
| `--border-hairline`| `rgba(15, 23, 42, 0.08)` | `rgba(255, 255, 255, 0.08)` | Clean 1px card boundaries |
| `--text-primary` | `#0F172A` (Slate 900) | `#F8FAFC` (Slate 50) | Display titles, primary body |
| `--text-secondary`| `#475569` (Slate 600) | `#94A3B8` (Slate 400) | Citations, subtitles, footnotes |
| `--accent-reserve`| `#047857` (Emerald 700) | `#10B981` (Emerald 500) | Interactive tabs, active states |
| `--delta-pos` | `#15803D` (Forest Green) | `#22C55E` (Emerald 400) | Favorable economic movement |
| `--delta-neg` | `#B91C1C` (Crimson) | `#EF4444` (Rose 500) | Unfavorable economic movement |
| `--delta-neutral` | `#475569` (Slate 600) | `#94A3B8` (Slate 400) | Flat / Neutral movement |

### Typography Scale
- **Display Headings**: Classical Editorial Serif (`Source Serif 4` / `Newsreader` font family, `font-serif font-semibold`).
- **Body & Navigation**: Crisp neo-grotesque sans (`Plus Jakarta Sans` / `Public Sans`, line height 1.6, line length capped under 75ch).
- **Data Figures & Sparklines**: Strict monospace tabular numerals (`font-mono tabular-nums`).

---

## 3. Folder Structure

```
/public/
  ├── data/
  │   ├── indicators.json       # Headline summary of all 6 indicators
  │   ├── gdp.json              # Historical real GDP growth (World Bank NY.GDP.MKTP.KD.ZG)
  │   ├── inflation.json        # CPI inflation series (World Bank FP.CPI.TOTL.ZG)
  │   ├── interest_rates.json   # SARB Repo rate and prime lending series
  │   ├── unemployment.json     # Stats SA QLFS official vs expanded vs World Bank SL.UEM.TOTL.ZS
  │   ├── exchange_rate.json    # ZAR/USD annual & monthly historical (PA.NUS.FCRF)
  │   ├── debt_gdp.json         # National Treasury & World Bank (GC.DOD.TOTL.GD.ZS)
  │   ├── sectors.json          # 4 Sector profiles with regulatory frameworks
  │   └── calendar.json         # Policy & release schedule
  └── netlify.toml              # Netlify SPA redirect rules
/content/
  ├── overview.md               # Executive commentary
  ├── analysis-gdp.md           # GDP growth & industrial capacity
  ├── analysis-inflation.md     # Inflation targeting & administered prices
  ├── analysis-repo.md          # SARB monetary stance & inflation expectations
  ├── analysis-unemployment.md  # Structural unemployment & labour reform
  ├── analysis-rand.md          # Currency volatility & terms of trade
  ├── analysis-debt.md          # Sovereign risk premium & debt servicing costs
  └── briefs/
      ├── brief-grey-listing.md # South Africa's Path Off the FATF Grey List
      ├── brief-two-pot-system.md# Retirement Two-Pot System: Fiscal & Capital Implications
      └── brief-transnet-logistics.md# Logistics Bottlenecks & Export Competitiveness
/scripts/
  ├── fetch-data.ts             # World Bank API fetcher & normalizer
  └── verify-data.ts            # Data integrity checker
/src/
  ├── types.ts                  # Shared TypeScript interfaces
  ├── components/
  │   ├── Navbar.tsx            # Clean 3-zone top bar with theme toggle
  │   ├── Footer.tsx            # Methodology note, disclaimer, author links
  │   ├── MetricCard.tsx        # Card with sparkline, delta, source line, quality badge
  │   ├── Sparkline.tsx         # Responsive SVG sparkline
  │   ├── IndicatorChart.tsx    # Recharts time series with range & event filters
  │   ├── DualAxisCompare.tsx   # Comparative chart with dual-axis scale warning
  │   ├── DataTableModal.tsx    # WCAG accessible tabular data view
  │   ├── QualityBadge.tsx      # Fresh / Stale / TO_VERIFY badge
  │   └── DefinitionNote.tsx    # Methodology divergence callout
  ├── pages/
  │   ├── OverviewPage.tsx      # Headline dashboard + executive brief
  │   ├── IndicatorDetailPage.tsx# Individual indicator deep dive
  │   ├── ComparePage.tsx       # Dual-series comparative analysis
  │   ├── SectorsPage.tsx       # 4 Sector profiles & regulatory matrix
  │   ├── CalendarPage.tsx      # Upcoming SARB, Stats SA & budget events
  │   ├── BriefsPage.tsx        # Policy research papers
  │   ├── AboutPage.tsx         # Author bio (Lehlohonolo Seokwe), methodology, sources
  │   └── VerifyRegistryPage.tsx# Audit log of data integrity & TO_VERIFY items
  ├── utils/
  │   ├── calculations.ts       # YoY calculation, moving average, real interest rate
  │   ├── formatters.ts         # Numeric and date formatting
  │   └── exportCsv.ts          # Client-side CSV generation
  ├── App.tsx                   # Client-side routing and theme context
  ├── index.css                 # Tailwind CSS & theme tokens
  └── main.tsx
VERIFY.md                       # Comprehensive data integrity register
README.md                       # Documentation, pipeline instructions & pre-launch checklist
```

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                    OFFICIAL DATA SOURCES                    │
│  - World Bank API (NY.GDP.MKTP.KD.ZG, FP.CPI.TOTL.ZG, etc.)  │
│  - South African Reserve Bank (SARB Quarterly Bulletin)     │
│  - Statistics South Africa (Stats SA QLFS, P0141 CPI)       │
│  - National Treasury (Budget Review, MTBPS)                 │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    /scripts/fetch-data.ts                   │
│  Validates schemas, normalizes frequencies, calculates      │
│  deltas, stamps retrieval timestamp and source URL          │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                       /public/data/*.json                   │
│  Static JSON files with status: VERIFIED / TO_VERIFY        │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                       OSPREYN WEB APP                       │
│  - React 18 + TypeScript + Vite + Tailwind CSS               │
│  - Recharts for responsive, accessible time-series          │
│  - Pure client-side calculations (YoY change, 3-yr MA)      │
│  - Light/Dark theme switch with localStorage persistence    │
│  - CSV download and accessible HTML data tables             │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Absolute Data Integrity Protocol

Every data entry conforms to the strict `DatasetMetadata` interface:
```typescript
export interface DatasetRecord {
  period: string; // "2024", "2024-Q2", or "2024-09"
  value: number;
  label?: string;
  isEstimate?: boolean;
}

export interface IndicatorDataset {
  id: string;
  indicatorName: string;
  shortName: string;
  unit: string;
  frequency: "Annual" | "Quarterly" | "Monthly";
  sourceName: string;
  sourceUrl: string;
  retrievalDate: string;
  lastPeriod: string;
  latestValue: number;
  previousValue: number;
  changeAbsolute: number;
  changePercentage: number;
  qualityStatus: "VERIFIED" | "STALE" | "TO_VERIFY";
  definitionNote?: string;
  data: DatasetRecord[];
}
```

---

## 6. Execution Steps

1. **Step 1: Core Foundation & Data Pipeline**
   - Setup `src/types.ts`, static JSON datasets in `/public/data/`, `/scripts/fetch-data.ts`, `VERIFY.md`, and calculation engine `src/utils/calculations.ts` with unit tests (`npx --yes tsx --test`).
2. **Step 2: Component Library & Design Tokens**
   - Implement `Navbar`, `Footer`, `MetricCard`, `Sparkline`, `QualityBadge`, and `DefinitionNote`.
3. **Step 3: Interactive Charts & Accessibility**
   - Build `IndicatorChart` (with range selector, annotations, tooltip, CSV export) and `DataTableModal`.
4. **Step 4: Primary Dashboard & Indicator Routes**
   - Implement `OverviewPage`, `IndicatorDetailPage`, and `ComparePage`.
5. **Step 5: Sector Profiles & Policy Calendar**
   - Implement `SectorsPage` and `CalendarPage` with countdowns and regulatory tags.
6. **Step 6: Policy Briefs, About Page & Methodology**
   - Implement `BriefsPage`, `AboutPage` highlighting Lehlohonolo Seokwe's profile, methodology, and legal disclaimer. Add `netlify.toml`.
7. **Step 7: Verification & QA**
   - Run unit tests, execute `compile_applet`, restart dev server, verify browser layout and journeys using `computer-use`, and provide `README.md` and pre-launch checklist.
