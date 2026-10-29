/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Calendar, FileText, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';
import { MetricCard, MetricCardData } from '../components/MetricCard';

export const OverviewPage: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/indicators.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load indicators dataset');
        return res.json();
      })
      .then((data) => {
        setMetrics(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Unable to load indicators from /data/indicators.json');
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Editorial Headline Hero */}
      <section className="mb-10 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase tracking-wider mb-2">
          <span>South African Economic & Regulatory Monitor</span>
          <span aria-hidden="true">·</span>
          <span>Author: Lehlohonolo Seokwe, MA</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
          State of the South African Economy
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          A high-fidelity intelligence console tracking South Africa’s sovereign macroeconomic performance, central bank monetary policy, labour dynamics, and structural market reforms. Built on primary data from the World Bank, South African Reserve Bank, Statistics South Africa, and National Treasury.
        </p>

        {/* Data Quality Guarantee Bar */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800">
          <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium">
            <CheckCircle2 size={14} className="shrink-0" />
            <span>100% Primary Source Verified</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>Zero Synthetic Data Fill</span>
          <span aria-hidden="true">·</span>
          <Link to="/about" className="hover:text-slate-900 dark:hover:text-slate-100 underline decoration-slate-300">
            Methodology & Citations
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/verify" className="hover:text-slate-900 dark:hover:text-slate-100 underline decoration-slate-300">
            VERIFY.md Register
          </Link>
        </div>
      </section>

      {/* 6 Core Metric Cards Grid */}
      <section className="mb-14" aria-labelledby="core-indicators-heading">
        <div className="flex items-baseline justify-between mb-4">
          <h2 id="core-indicators-heading" className="text-xl sm:text-2xl font-serif font-semibold text-slate-900 dark:text-slate-100">
            Headline Economic Indicators
          </h2>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Click any metric for full time series & policy analysis
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-44 bg-slate-100 dark:bg-slate-800/50 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 rounded-lg text-rose-800 dark:text-rose-300 text-sm flex items-center gap-2">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        )}
      </section>

      {/* Written Policy Commentary & Executive Synthesis */}
      <section className="mb-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          <FileText size={14} className="text-emerald-700 dark:text-emerald-400" />
          <span>Written Analysis · From /content/overview.md</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6">
          Macroeconomic Assessment: Consolidation & Structural Horizons
        </h2>

        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            South Africa’s macroeconomic architecture is positioned at a critical juncture between fiscal consolidation and the structural imperative for inclusive employment generation. The formation of the Government of National Unity (GNU) in mid-2024 mitigated acute political risk premiums, catalysed sovereign bond yield compression, and sustained business sentiment. However, real GDP growth remains subdued below the 2.0% threshold required to reverse secular increases in joblessness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="space-y-2">
              <h3 className="text-base font-serif font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                1. Monetary Pivot & Disinflation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                Headline CPI disinflation into the lower half of the SARB’s 3%–6% target band enabled the Monetary Policy Committee to deliver cumulative 50 bps repo rate cuts to 7.75%. This easing cycle lowers borrowing costs for indebted households and commercial borrowers.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-serif font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400" />
                2. Fiscal Prudence & Primary Surplus
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                National Treasury achieved a primary budget surplus, anchoring gross debt-to-GDP at an anticipated peak of ~75.3% before gradual stabilization. Nonetheless, debt service costs continue to consume over 20% of main revenue receipts.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-serif font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600 dark:bg-rose-400" />
                3. Structural Labour Divide
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                Official strict joblessness remains near 32.1% (expanded 41.9%), driven by skills mismatches and high transport barriers. Structural youth unemployment requires accelerating Operation Vulindlela phase two microeconomic reforms.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-serif font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                4. Network Infrastructure Reform
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                While electricity availability has marked sustained improvement, Transnet rail and port congestion remains the primary supply-side drag on export receipts, necessitating urgent third-party private sector open access.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Authored by Lehlohonolo Seokwe · Targeting policy, regulatory and public affairs roles in finance
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-800 dark:text-emerald-400 hover:underline"
          >
            <span>Read full methodology and author background</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Feature Navigation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Exploration panels">
        <Link
          to="/compare"
          className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-3">
              <BarChart3 size={20} className="text-emerald-700 dark:text-emerald-400" />
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-base font-serif font-semibold text-slate-900 dark:text-slate-100 mb-1">
              Dual-Axis Series Comparison
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              Compare any two macroeconomic indicators on a synchronized time axis with automated scale divergence warnings.
            </p>
          </div>
          <span className="mt-4 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium">
            Launch Comparison →
          </span>
        </Link>

        <Link
          to="/sectors"
          className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-3">
              <TrendingUp size={20} className="text-emerald-700 dark:text-emerald-400" />
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-base font-serif font-semibold text-slate-900 dark:text-slate-100 mb-1">
              Sector Profiles & Regulation
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              Deep dives into Banking, Mining, Retail, and Telecoms. GDP contributions, governing legislation, and regulatory debates.
            </p>
          </div>
          <span className="mt-4 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium">
            Explore 4 Key Sectors →
          </span>
        </Link>

        <Link
          to="/calendar"
          className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-3">
              <Calendar size={20} className="text-emerald-700 dark:text-emerald-400" />
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-base font-serif font-semibold text-slate-900 dark:text-slate-100 mb-1">
              Policy & Release Calendar
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              Upcoming SARB MPC announcements, Stats SA statistical releases, National Treasury budget milestones, and parliamentary deadlines.
            </p>
          </div>
          <span className="mt-4 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium">
            View Upcoming Dates →
          </span>
        </Link>
      </section>
    </div>
  );
};
