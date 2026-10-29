/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  HelpCircle,
  Users,
  Calendar,
  Layers,
  ArrowLeft,
  ChevronRight,
  Database,
} from 'lucide-react';
import { IndicatorDataset } from '../types';
import { IndicatorChart } from '../components/IndicatorChart';
import { DefinitionNote } from '../components/DefinitionNote';
import { QualityBadge } from '../components/QualityBadge';
import { formatNumber } from '../utils/formatters';

interface IndicatorAnalysisContent {
  trend: string;
  whyItMatters: string;
  whoIsAffected: string;
}

const ANALYSES_MAP: Record<string, IndicatorAnalysisContent> = {
  gdp: {
    trend:
      'Following the sharp -6.0% contraction induced by the 2020 pandemic lockdowns and the subsequent 4.7% mechanical bounce-back in 2021, South Africa’s real GDP growth settled into an anaemic 0.5%–1.2% band between 2022 and 2025. This rate is structurally deficient: it trails domestic population growth (~1.3% annually), meaning real per capita income has effectively stagnated for over a decade.',
    whyItMatters:
      'Economic growth determines tax buoyancy, public revenue mobilization, and sovereign debt sustainability. Without real GDP expanding at 2.5% to 3.5%, the National Treasury cannot balance fiscal deficits without painful real expenditure cuts. Furthermore, financial institutions face compressed credit demand as corporate balance sheets defer long-term capital formation (capex) in favor of liquidity preservation.',
    whoIsAffected:
      'Commercial banks (depressed corporate loan book growth and higher retail provisions); Young job-seekers (sub-2% growth generates zero net employment absorption); Sovereign credit ratings (limits medium-term sovereign debt capacity).',
  },
  inflation: {
    trend:
      'South Africa experienced a significant disinflation cycle over 2024–2025. After peaking at 6.9% in 2022 amid global energy disruptions and supply chain bottlenecks, headline CPI fell below the SARB’s preferred 4.5% midpoint, reaching the lower 3% territory. Core inflation (excluding food, fuel, and energy) has demonstrated broad-based moderation, validating the central bank’s hawkish policy posture during the preceding tightening cycle.',
    whyItMatters:
      'Inflation acts as an insidious regressive tax, eroding the purchasing power of low-income households who allocate more than 35% of their total expenditure to essential food and transport. For institutional investors and financial policymakers, stable inflation anchors long-term nominal bond yields and provides the SARB’s Monetary Policy Committee with policy room to ease real interest rates.',
    whoIsAffected:
      'Low- and middle-income consumers (immediate relief on staple food and taxi fares); Fixed-income retirees (protection of real purchasing power against bracket creep); Corporate borrowers (lower working capital holding costs).',
  },
  'interest-rates': {
    trend:
      'Between November 2021 and May 2023, the SARB executed one of its most aggressive tightening cycles on record, escalating the repo rate from 3.50% to a restrictive peak of 8.25% (prime lending rate 11.75%). With headline inflation settling sustainably near the 4.5% midpoint and the US Federal Reserve initiating global easing, the SARB began a measured easing trajectory, delivering cumulative 50 bps in cuts down to 7.75%.',
    whyItMatters:
      'The repo rate is the primary price signal in South Africa’s financial system. It directly dictates the prime overdraft rate, commercial floating mortgage rates, and auto loan financing costs. A high real policy rate (~4.0%+) maintains price stability and protects the Rand’s carry-trade appeal, but simultaneously suppresses domestic credit extension, household consumption, and retail expansion.',
    whoIsAffected:
      'Mortgage and retail credit borrowers (each 25 bps cut delivers ~R150/month relief per R1m home loan); Commercial banks (Net Interest Margins compress slightly but credit loss impairments decline); Treasury debt service costs (lowers short-dated T-Bill yields).',
  },
  unemployment: {
    trend:
      'South Africa endures the highest recorded unemployment rate among major world economies. Official strict unemployment stands at ~32.1% (Stats SA Q3 2024), while the expanded definition—which incorporates discouraged job-seekers—surpasses 41.9%. Youth unemployment (ages 15–24 and 15–34) exceeds 60%, signaling an enduring structural divide rather than a cyclical labour downturn.',
    whyItMatters:
      'High unemployment fractures the domestic tax base, requiring state-funded social welfare transfers (such as the Social Relief of Distress grant) to support over 18 million grant recipients. For financial markets and institutional investors, protracted joblessness fuels political populism, pressures fiscal redistribution demands, and caps the addressable market for formal banking and insurance products.',
    whoIsAffected:
      'Youth & school leavers (acute spatial and transport barriers to formal employment hubs); National Treasury (mandatory social protection grants crowd out infrastructure budgets); Consumer retailers (caps addressable formal purchasing power).',
  },
  rand: {
    trend:
      'The Rand has historically exhibited high beta volatility, operating as a proxy for broader emerging-market sentiment and global risk tolerance. After weakening past R19.00/USD in early 2024 amid sovereign risk anxieties and election uncertainty, the currency appreciated into the R17.50–R18.20/USD corridor following the formation of the multi-party Government of National Unity and US Federal Reserve monetary easing.',
    whyItMatters:
      'As an open economy dependent on imported refined petroleum, technology equipment, and capital machinery, Rand weakness rapidly spills over into domestic pump prices and headline inflation (pass-through elasticity estimated at ~0.10 to 0.15). Conversely, a stable or strengthening Rand dampens import costs and curbs sovereign external debt servicing burdens.',
    whoIsAffected:
      'Bulk commodity exporters (Rand appreciation reduces local revenue realization for dollar-quoted mining exports); Domestic motorists & commuters (dictates monthly slate levies and retail petrol pump prices); Offshore investors (drives JSE equity and SAGB bond return repatriation).',
  },
  debt: {
    trend:
      'Central government gross debt rose rapidly from ~27% of GDP in 2008 to over 74% in 2024, driven by state-owned enterprise bailouts (notably Eskom’s R254 billion debt relief package), subdued economic growth, and the pandemic fiscal shock. In the 2024/25 fiscal year, National Treasury achieved a critical milestone: a primary budget surplus, anchoring projected peak debt near 75.3% of GDP by 2025/26 before beginning a gradual stabilization descent.',
    whyItMatters:
      'Debt sustainability is the fulcrum of South Africa’s macroeconomic sovereignty. Debt-service costs have become the fastest-growing line item in the national budget, exceeding R380 billion annually—larger than the entire police, defense, or healthcare budgets. Stabilizing debt-to-GDP is essential to avoid sovereign downgrade spirals, lower bond yields (10-year SAGB yields), and restore fiscal headroom.',
    whoIsAffected:
      'Public services and municipal infrastructure (debt service directly crowds out local government grants); Domestic retirement funds and banks (hold >70% of sovereign paper); Corporate bond issuers (sovereign bond yields serve as the benchmark pricing floor).',
  },
};

const ALL_INDICATORS_NAV = [
  { id: 'gdp', name: 'Real GDP Growth' },
  { id: 'inflation', name: 'CPI Inflation' },
  { id: 'interest-rates', name: 'SARB Repo Rate' },
  { id: 'unemployment', name: 'Unemployment' },
  { id: 'rand', name: 'ZAR / USD' },
  { id: 'debt', name: 'Govt Debt % GDP' },
];

export const IndicatorDetailPage: React.FC = () => {
  const { indicatorId } = useParams<{ indicatorId: string }>();
  const id = indicatorId || 'gdp';

  const [indicator, setIndicator] = useState<IndicatorDataset | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const filename = id === 'interest-rates' ? 'interest_rates.json' : id === 'debt' ? 'debt_gdp.json' : `${id}.json`;

    fetch(`/data/${filename}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load dataset for ${id}`);
        return res.json();
      })
      .then((data: IndicatorDataset) => {
        setIndicator(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(`Unable to load dataset for indicator "${id}".`);
        setLoading(false);
      });
  }, [id]);

  const analysis = ANALYSES_MAP[id] || {
    trend: 'Trend analysis undergoing review.',
    whyItMatters: 'Policy relevance details in progress.',
    whoIsAffected: 'Key stakeholders under assessment.',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
        <Link to="/" className="hover:text-slate-900 dark:hover:text-slate-100 flex items-center gap-1">
          <ArrowLeft size={13} />
          <span>Overview</span>
        </Link>
        <ChevronRight size={13} className="text-slate-400" />
        <span className="text-slate-700 dark:text-slate-200 font-semibold">{indicator?.shortName || id.toUpperCase()}</span>
      </nav>

      {/* Horizontal Indicator Switcher Tabs */}
      <div className="mb-8 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 min-w-max">
          {ALL_INDICATORS_NAV.map((item) => (
            <Link
              key={item.id}
              to={`/indicators/${item.id}`}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                item.id === id
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="space-y-6">
          <div className="h-20 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse" />
          <div className="h-96 bg-slate-100 dark:bg-slate-800 rounded-lg animate-pulse" />
        </div>
      ) : error || !indicator ? (
        <div className="p-8 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
          <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">Indicator Not Found</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{error || 'Unknown indicator ID.'}</p>
          <Link to="/" className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold hover:underline">
            ← Return to Overview
          </Link>
        </div>
      ) : (
        <>
          {/* Header Title & Key Metric Row */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Official Time Series #{indicator.seriesCode || indicator.id}
                  </span>
                  <QualityBadge status={indicator.qualityStatus} size="sm" />
                </div>

                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  {indicator.indicatorName}
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-mono mt-1">
                  Unit: {indicator.unit} · Frequency: {indicator.frequency} · Last Verified Period: {indicator.lastPeriod}
                </p>
              </div>

              {/* Latest Figure Capsule */}
              <div className="shrink-0 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 text-right">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Latest Recorded Value</div>
                <div className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                  {formatNumber(indicator.latestValue, 2)}
                  <span className="text-lg font-sans text-slate-500 dark:text-slate-400 ml-1 font-normal">
                    {indicator.unit}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-1">
                  Prior Period: {formatNumber(indicator.previousValue, 2)} {indicator.unit} (
                  <span className={indicator.changeAbsolute > 0 ? 'text-emerald-700 dark:text-emerald-400 font-semibold' : 'text-rose-700 dark:text-rose-400 font-semibold'}>
                    {indicator.changeAbsolute > 0 ? '+' : ''}{indicator.changeAbsolute}
                  </span>
                  )
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Chart Graphic */}
          <IndicatorChart indicator={indicator} defaultTimeRange="10Y" />

          {/* Institutional Definition & Methodology Note */}
          <DefinitionNote
            definition={indicator.definitionNote}
            methodologyDetail={indicator.methodologyDetail}
          />

          {/* "What This Means" Policy Analysis Block (Separated from Data) */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 my-8 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <ShieldCheck size={14} className="text-emerald-700 dark:text-emerald-400" />
              <span>Written Policy Analysis · By Lehlohonolo Seokwe, MA</span>
            </div>

            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6">
              What This Means: Three-Tier Strategic Assessment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
              {/* Part 1: Trend */}
              <div className="pt-4 md:pt-0 md:pr-6 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-serif font-semibold text-base">
                  <TrendingUp size={16} className="text-emerald-700 dark:text-emerald-400" />
                  <span>1. The Trend</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {analysis.trend}
                </p>
              </div>

              {/* Part 2: Why it matters */}
              <div className="pt-4 md:pt-0 md:px-6 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-serif font-semibold text-base">
                  <HelpCircle size={16} className="text-amber-600 dark:text-amber-400" />
                  <span>2. Why It Matters</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {analysis.whyItMatters}
                </p>
              </div>

              {/* Part 3: Who is affected */}
              <div className="pt-4 md:pt-0 md:pl-6 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-serif font-semibold text-base">
                  <Users size={16} className="text-indigo-600 dark:text-indigo-400" />
                  <span>3. Who Is Affected</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {analysis.whoIsAffected}
                </p>
              </div>
            </div>
          </section>

          {/* Secondary Series Section if available (e.g. Monthly Stats SA CPI or QLFS breakdown) */}
          {indicator.secondarySeries && (
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 my-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                <Layers size={14} className="text-indigo-600 dark:text-indigo-400" />
                <span>Complementary Domestic Series · {indicator.secondarySeries.sourceName}</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">
                {indicator.secondarySeries.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mb-4">
                {indicator.secondarySeries.definitionNote}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400">
                      <th className="py-2 px-3 font-semibold">Period</th>
                      <th className="py-2 px-3 text-right font-semibold">Value ({indicator.secondarySeries.unit})</th>
                      <th className="py-2 px-3 font-semibold">Institutional Annotation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {indicator.secondarySeries.data.slice(-8).map((row) => (
                      <tr key={row.period} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30">
                        <td className="py-2 px-3 font-medium text-slate-900 dark:text-slate-100">{row.period}</td>
                        <td className="py-2 px-3 text-right font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                          {formatNumber(row.value, 2)}
                        </td>
                        <td className="py-2 px-3 text-slate-500 dark:text-slate-400 font-sans">{row.annotation || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Primary Source Panel */}
          <section className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 my-8 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold uppercase tracking-wider mb-3">
              <Database size={14} className="text-emerald-700 dark:text-emerald-400" />
              <span>Primary Source Verification Panel</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-slate-600 dark:text-slate-400">
              <div>
                <span className="block text-slate-400 dark:text-slate-500">Institution:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{indicator.sourceName}</span>
              </div>
              <div>
                <span className="block text-slate-400 dark:text-slate-500">Catalog Code:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{indicator.seriesCode || 'Domestic Official'}</span>
              </div>
              <div>
                <span className="block text-slate-400 dark:text-slate-500">Harvest Date:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{indicator.retrievalDate}</span>
              </div>
              <div>
                <span className="block text-slate-400 dark:text-slate-500">Attribution Link:</span>
                <a
                  href={indicator.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Official Source</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
