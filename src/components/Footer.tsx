/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, FileText, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Author column */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              Ospreyn
            </Link>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              South African macroeconomic and regulatory policy dashboard authored by{' '}
              <strong className="text-slate-900 dark:text-slate-200 font-medium">
                Lehlohonolo Seokwe, MA Political Science
              </strong>
              . Grounded in primary official data from the World Bank, South African Reserve Bank, Statistics South Africa, and National Treasury.
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <a
                href="mailto:seokwe14@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
              >
                <Mail size={14} />
                <span>seokwe14@gmail.com</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.linkedin.com/in/lehlohonolo-seokwe-66779b207/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Core Navigation links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-900 dark:text-slate-200 font-semibold mb-3">
              Sections
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                  State of the Economy
                </Link>
              </li>
              <li>
                <Link to="/indicators/gdp" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                  Indicator Deep Dives
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                  Dual-Axis Comparison
                </Link>
              </li>
              <li>
                <Link to="/sectors" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                  Sector Profiles & Regulators
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                  Policy & Statistical Calendar
                </Link>
              </li>
              <li>
                <Link to="/briefs" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                  Policy Research Briefs
                </Link>
              </li>
            </ul>
          </div>

          {/* Transparency & Integrity */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-900 dark:text-slate-200 font-semibold mb-3">
              Integrity & Standards
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/about" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-1.5">
                  <FileText size={13} />
                  <span>Methodology & Sources</span>
                </Link>
              </li>
              <li>
                <Link to="/verify" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-1.5">
                  <ShieldCheck size={13} />
                  <span>VERIFY.md Register</span>
                </Link>
              </li>
              <li className="pt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                Data pipeline: World Bank API + Stats SA releases (P0141, P0211, P0441).
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
          <p className="max-w-2xl leading-relaxed">
            <strong className="text-slate-700 dark:text-slate-300 font-semibold">Disclaimer:</strong> Educational and policy analysis, not financial or investment advice. Data is retrieved under open license terms from public institutions and verified against official gazettes.
          </p>
          <div className="shrink-0 text-slate-400">
            © {new Date().getFullYear()} Ospreyn · Lehlohonolo Seokwe
          </div>
        </div>
      </div>
    </footer>
  );
};
