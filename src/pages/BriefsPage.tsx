/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ChevronDown, ChevronUp, Share2, Check, ArrowRight } from 'lucide-react';
import { PolicyBrief } from '../types';

const BRIEFS_DATA: PolicyBrief[] = [
  {
    id: 'brief-1',
    slug: 'fatf-grey-list-remediation',
    title: "South Africa's Path Off the FATF Grey List: Institutional Coordination and Beneficial Ownership Reform",
    author: 'Lehlohonolo Seokwe, MA Political Science',
    date: 'October 2026',
    topic: 'Financial Regulation & AML/CFT',
    readTime: '6 min read',
    summary:
      'In February 2023, the Financial Action Task Force (FATF) placed South Africa on its "grey list" of jurisdictions under increased monitoring. This policy brief analyses the 22 action items designated by FATF, evaluating the legislative sprint undertaken by National Treasury, the Prudential Authority, the Financial Intelligence Centre (FIC), and the National Prosecuting Authority (NPA). We assess the remaining structural bottlenecks—specifically the operational effectiveness of beneficial ownership transparency registers and the sustained prosecution of complex financial state capture crimes—and outline the macroeconomic dividends of an anticipated exit in 2025/2026.',
    keyTakeaways: [
      'Technical compliance achieved on 37 of 40 FATF recommendations, but FATF prioritizes operational convictions.',
      'Companies and Intellectual Property Commission (CIPC) beneficial ownership registers require automated enforcement.',
      'Grey-listing added an estimated 20–50 bps friction cost to cross-border banking transactions.',
      'Exit will compress sovereign bond yield spreads and stimulate inward foreign direct investment (FDI).',
    ],
    content: `
### Background & The 2021 Mutual Evaluation
South Africa's grey-listing in February 2023 was not a verdict on commercial bank solvency; rather, it reflected deficiencies in criminal justice enforcement and law enforcement capacity following the state capture era. The 2021 FATF Mutual Evaluation Report highlighted that while the South African financial sector boasts world-class Basel III prudential standards, domestic investigative agencies failed to systematically identify, seize, and forfeit the proceeds of state capture and complex fraud.

### The Legislative Response
Between 2022 and 2024, Parliament passed significant emergency legislation, including the General Laws (Anti-Money Laundering and Combating Terrorism Financing) Amendment Act and the Protection of Constitutional Democracy Against Terrorist and Related Activities Amendment Act. These statutes closed loopholes in trust property control, expanded the Financial Intelligence Centre's (FIC) powers, and mandated legal persons to declare beneficial ownership.

### Operational Bottlenecks: Immediate Outcomes 7 & 8
FATF's remaining concerns center on:
1. **Immediate Outcome 7 (Money Laundering Prosecutions)**: Demonstrating a sustained, multi-year track record of prosecuting and convicting high-profile money laundering networks.
2. **Immediate Outcome 8 (Asset Confiscation)**: Successfully repatriating illicit financial flows through the Asset Forfeiture Unit (AFU) and Special Investigating Unit (SIU).

### Macroeconomic Implications of De-Listing
Research by the Reserve Bank indicates that prolonged grey-listing can shave between 0.3% and 0.7% off potential GDP growth annually due to heightened risk assessments from European and North American correspondent banks. A formal exit in 2025/2026 will immediately alleviate correspondent banking friction and lower external commercial borrowing costs.
    `,
    citations: [
      {
        authorOrOrg: 'Financial Action Task Force (FATF)',
        title: 'Anti-money laundering and counter-terrorist financing measures: South Africa Mutual Evaluation Report',
        year: '2021',
        url: 'https://www.fatf-gafi.org/en/publications/Mutualevaluations/Mer-south-africa-2021.html',
      },
      {
        authorOrOrg: 'National Treasury South Africa',
        title: 'Progress Update on Addressing FATF Action Plan Deficiencies',
        year: '2024',
        url: 'http://www.treasury.gov.za/',
      },
    ],
  },
  {
    id: 'brief-2',
    slug: 'two-pot-retirement-system',
    title: 'The Two-Pot Retirement Framework: Systemic Liquidity, Consumer Deleveraging, and Capital Market Impacts',
    author: 'Lehlohonolo Seokwe, MA Political Science',
    date: 'September 2026',
    topic: 'Pension Reform, Fiscal Policy & Debt',
    readTime: '5 min read',
    summary:
      'Enacted on 1 September 2024, South Africa’s Two-Pot retirement system represents the most significant overhaul of occupational and individual retirement funds in modern democratic history. By partitioning future pension contributions into a one-third liquid "savings pot" and a two-thirds locked "retirement pot", the reform balanced short-term household emergency liquidity against long-term capital preservation. This brief analyses the initial withdrawal shock, the resulting windfall for SARS in personal income tax receipts, and the implications for domestic asset managers managing duration matches.',
    keyTakeaways: [
      'Over R35 billion processed in early withdrawals within the opening quarter without systemic bond market volatility.',
      'SARS captured R7bn–R10bn in unbudgeted personal income tax, taxed at marginal individual brackets.',
      'Over 65% of funds were applied toward extinguishing high-cost unsecured retail debt.',
      'Compulsory preservation of the two-thirds pot is projected to quadruple net replacement ratios at retirement over 25 years.',
    ],
    content: `
### Structural Rationale for Reform
Under the pre-2024 pension regime, employees facing acute financial distress could only access their retirement capital by resigning from their jobs. This perverse incentive drained tens of billions from retirement savings pools annually, leaving over 90% of South African retirees unable to maintain their standard of living.

### Systemic Liquidity Management by Asset Managers
In the months preceding 1 September 2024, the Financial Sector Conduct Authority (FSCA) and the Association for Savings and Investment South Africa (ASISA) mandated liquidity stress testing. Fund managers strategically expanded holdings of short-term money market instruments and Treasury bills, preventing disruptive liquidations of long-duration 10-year government bonds (SAGBs).

### Household Balance Sheet Transmission
Banking transaction data reveals that withdrawal proceeds were primarily deployed to pay down high-interest credit cards, unsecured store credit, and personal loans (averaging 21%–28% nominal interest). This debt reduction cushioned middle-income households against preceding central bank rate hikes and reduced bank credit loss ratios.
    `,
    citations: [
      {
        authorOrOrg: 'Financial Sector Conduct Authority (FSCA)',
        title: 'Conduct Standard on Two-Pot Retirement System Transition and Communication Rules',
        year: '2024',
        url: 'https://www.fsca.co.za/',
      },
      {
        authorOrOrg: 'South African Revenue Service (SARS)',
        title: 'Tax Directive Statistical Release: Two-Pot System Early Withdrawals',
        year: '2024',
        url: 'https://www.sars.gov.za/',
      },
    ],
  },
  {
    id: 'brief-3',
    slug: 'transnet-logistics-corridors',
    title: 'De-bottlenecking Transnet Freight Corridors: Private Sector Participation and Export Competitiveness',
    author: 'Lehlohonolo Seokwe, MA Political Science',
    date: 'August 2026',
    topic: 'Freight Logistics & Export Strategy',
    readTime: '7 min read',
    summary:
      'South Africa’s freight rail and container port networks—monopolized by state-owned logistics utility Transnet—have evolved into one of the country’s primary macroeconomic supply-side bottlenecks. Rail tonnages delivered to the Richards Bay Coal Terminal and Saldanha iron ore terminals declined by over 30% from peak capacity, forfeiting tens of billions of Rands in mineral export windfalls. This policy brief evaluates the implementation of the National Rail Policy and Freight Logistics Roadmap, focusing on third-party open access and the role of the Transport Economic Regulator.',
    keyTakeaways: [
      'Minerals Council estimated over R50 billion in foregone mineral exports in 2023 due to locomotive and cable theft constraints.',
      'Transnet Rail Infrastructure Manager (TRIM) separation is vital for private train operators to lease track slots.',
      'Concessioning of Durban Container Terminal Pier 2 provides an essential template for private capital crowding-in.',
      'Transport Economic Regulator (TER) must arbitrate transparent, cost-reflective slot tariffs.',
    ],
    content: `
### The Macroeconomic Penalty of Rail Underperformance
South Africa's heavy freight corridors were historically designed as the economic arterial conduits connecting the mineral-rich interior (Mpumalanga coalfields and Northern Cape iron/manganese deposits) to deep-water ports. Derailments, cable theft, and procurement paralysis on locomotive spare parts reduced Transnet Freight Rail's annual haulage from 226 million tonnes in 2017 to under 150 million tonnes in 2023.

### Heavy Bulk Freight Migration to National Highways
This rail collapse diverted over 3,000 heavy-haul trucks onto the N4 and N2 highways daily, causing severe road pavement degradation, escalating carbon emissions, and increasing logistics transport costs by over 40% per tonne-kilometre.

### The Freight Logistics Roadmap & Operation Vulindlela
Under the presidency's Operation Vulindlela initiative, the Freight Logistics Roadmap established two core pillars:
1. **Vertical Separation**: Splitting Transnet into an infrastructure manager (TRIM) and competitive train operating companies.
2. **Private Capital Participation**: Private slot sales and 25-year terminal concessions. Establishing credible, transparent track access pricing remains the critical regulatory battleground.
    `,
    citations: [
      {
        authorOrOrg: 'Minerals Council South Africa',
        title: 'The Economic Cost of Logistical Bottlenecks to the South African Mining Industry',
        year: '2024',
        url: 'https://www.mineralscouncil.org.za/',
      },
      {
        authorOrOrg: 'The Presidency & National Treasury',
        title: 'Operation Vulindlela Freight Logistics Roadmap',
        year: '2023',
        url: 'https://www.stateofthenation.gov.za/operation-vulindlela',
      },
    ],
  },
];

export const BriefsPage: React.FC = () => {
  const [expandedBriefId, setExpandedBriefId] = useState<string | null>('brief-1');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedBriefId(expandedBriefId === id ? null : id);
  };

  const handleCopyCitation = (brief: PolicyBrief) => {
    const citation = `Seokwe, L. (${brief.date.split(' ')[1] || '2026'}). "${brief.title}". Ospreyn Policy Briefs. Retrieved from https://ospreyn.netlify.app/briefs#${brief.slug}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(brief.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Editorial Title */}
      <div className="mb-8 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase tracking-wider mb-2">
          <BookOpen size={14} />
          <span>Research & Policy Papers</span>
          <span aria-hidden="true">·</span>
          <span>By Lehlohonolo Seokwe, MA</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Policy Briefs & Regulatory Commentaries
        </h1>

        <p className="mt-3 text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
          In-depth policy briefs examining systemic financial regulation, pension fund structural reform, and logistics infrastructure in South Africa. Authored for decision-makers in commercial banking, asset management, multilateral bodies, and regulatory agencies.
        </p>
      </div>

      {/* Briefs Accordion Cards */}
      <div className="space-y-6">
        {BRIEFS_DATA.map((brief) => {
          const isExpanded = expandedBriefId === brief.id;

          return (
            <article
              key={brief.id}
              id={brief.slug}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs transition-colors"
            >
              {/* Header block */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-emerald-800 dark:text-emerald-400">
                    {brief.topic}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} />
                    {brief.date}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} />
                    {brief.readTime}
                  </span>
                  <span>·</span>
                  <span>By {brief.author}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 leading-snug mb-3">
                  {brief.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  {brief.summary}
                </p>

                {/* Key takeaways bullet cards */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                    Executive Key Takeaways:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                    {brief.keyTakeaways.map((point, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800/80 flex items-start gap-2"
                      >
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">✓</span>
                        <span className="text-slate-700 dark:text-slate-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions row */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => toggleExpand(brief.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 transition-colors"
                  >
                    <span>{isExpanded ? 'Collapse Full Paper' : 'Read Full Policy Brief'}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  <button
                    onClick={() => handleCopyCitation(brief)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                  >
                    {copiedId === brief.id ? (
                      <>
                        <Check size={13} className="text-emerald-600" />
                        <span className="text-emerald-600 font-medium">Citation Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 size={13} />
                        <span>Copy Academic Citation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Collapsible Full Content Area */}
              {isExpanded && (
                <div className="bg-slate-50/70 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 p-6 sm:p-8 animate-in fade-in duration-200">
                  <div className="max-w-3xl mx-auto space-y-4 text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
                    {brief.content.split('\n\n').map((paragraph, pIdx) => {
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h4
                            key={pIdx}
                            className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 pt-3"
                          >
                            {paragraph.replace('### ', '')}
                          </h4>
                        );
                      }
                      if (paragraph.trim().length === 0) return null;
                      return <p key={pIdx}>{paragraph}</p>;
                    })}

                    {/* Citations Footer in Brief */}
                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs font-mono">
                      <h5 className="font-semibold text-slate-900 dark:text-slate-200 mb-2 uppercase tracking-wider">
                        Primary Institutional Citations & Evidence:
                      </h5>
                      <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
                        {brief.citations.map((c, cIdx) => (
                          <li key={cIdx} className="flex items-baseline gap-2">
                            <span>[{cIdx + 1}]</span>
                            <span>
                              {c.authorOrOrg} ({c.year}). <em>{c.title}</em>.{' '}
                              <a
                                href={c.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-700 dark:text-emerald-400 hover:underline"
                              >
                                [Source URL]
                              </a>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};
