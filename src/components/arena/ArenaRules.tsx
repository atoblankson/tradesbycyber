"use client";

import React from "react";
import { Container } from "../Container";
import { ScrollReveal } from "@/lib/motion";

export function ArenaRules() {
  const rules = [
    {
      title: "01. Eligibility & Entry",
      items: [
        "Entry is free; no purchase, subscription, or deposit is required to participate.",
        "One person may register only one contest identity and designated account per event.",
        "Participants must be at least 18 years of age and comply with their local jurisdiction regulations.",
        "Organizers reserve the right to verify identity and prize eligibility prior to payout distribution.",
        "Strictly prohibited: submitting another individual's identity, proxy registration, or duplicate entries.",
      ],
    },
    {
      title: "02. Dates & Account Setup",
      items: [
        "Each contest runs for seven (7) consecutive calendar days using the designated server timezone.",
        "Start/end timestamps, server name, eligible symbols, and cutoff deadlines are published before kickoff.",
        "All contestants receive the identical $10,000 virtual starting demo balance and leverage setting.",
        "Only trades opened and closed inside the official contest window count toward scoring.",
        "Pending orders are cancelled at the closing bell; open positions are marked to market.",
      ],
    },
    {
      title: "03. Demo Scoring & Leaderboard",
      items: [
        "Primary score formula: Net Return % = (Final Equity − Starting Equity) ÷ Starting Equity × 100.",
        "Final equity accounts for realized P/L, floating P/L at cutoff, swaps, and commissions.",
        "Leaderboard rankings remain provisional until complete trade history and equity are verified.",
        "Tie-breakers: 1) lower maximum equity drawdown, 2) higher profit factor, 3) earlier score timestamp.",
        "Any manual adjustments are recorded in an immutable audit log with transparent documented reasons.",
      ],
    },
    {
      title: "04. Risk Safeguards",
      items: [
        "Automatic disqualification: maximum equity drawdown exceeding 20% from contest equity peak.",
        "Recommended maximum risk per trade: 2% of current equity (contest rule, not financial advice).",
        "No exploitation of demo-feed latency, stale quotes, platform glitches, or pricing discrepancies.",
        "No reckless martingale, unlimited grid doubling, or coordinated account gambling strategies.",
      ],
    },
    {
      title: "05. MT5 Verification & Privacy",
      items: [
        "Verification operates via dedicated contest demo servers or private statement upload.",
        "NEVER provide an MT5 master password, email password, or payment details in any form.",
        "Original unedited MT5 HTML/PDF account statements are reviewed securely by organizers.",
        "Only public trader aliases and performance statistics are displayed publicly on the leaderboard.",
      ],
    },
    {
      title: "06. Fair Play & Disqualification",
      items: [
        "Prohibited: multiple accounts, account sharing, forged statements, impersonation, or collusion.",
        "Prohibited: opening opposite hedging positions across multiple accounts to manipulate leaderboard rank.",
        "Organizers may pause a result, audit records, or disqualify an account with logged reasons.",
        "Contestants may lodge a formal appeal within 72 hours of an adverse decision notification.",
      ],
    },
    {
      title: "07. Prizes & Payout",
      items: [
        "Proposed pool: $500 total (1st $250, 2nd $150, 3rd $100). Published only once funding is secured in escrow.",
        "Winners remain provisional until statement audits and the 72-hour appeal window conclude.",
        "Target payout: within 10 business days following final verification via bank or mobile money transfer.",
        "Zero entry fees; no deposit or live trading account is required to claim an earned prize.",
      ],
    },
    {
      title: "08. Organizer, Changes & Disputes",
      items: [
        "Official organizer contact, dates, and full terms are published before each competition cycle.",
        "Material rule changes apply prospectively; scoring rules are never modified after results are seen.",
        "Platform outages or data feed failures are managed under transparent published continuity guidelines.",
        "These competition terms are interpreted under the laws of the Republic of Ghana.",
      ],
    },
  ];

  return (
    <section
      id="rules"
      data-theme="dark"
      aria-label="Official Contest Rules"
      className="w-full bg-[#0B0A08] text-[#EFEAE4] py-20 sm:py-28 relative select-none border-b border-[rgba(212,166,42,0.25)]"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C766] font-bold block mb-2">
              READ BEFORE ENTERING
            </span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[0.88] text-[#EFEAE4]">
              OFFICIAL RULES <span className="gold-metallic-text">— DRAFT</span>
            </h2>
          </div>

          <div className="inline-block px-3 py-1.5 rounded-lg bg-[#14110D] border border-[rgba(212,166,42,0.3)] font-mono text-[11px] font-bold text-[#E8C766] uppercase self-start md:self-end">
            VERSION 1.0 • PROPOSED TERMS
          </div>
        </div>

        {/* 8 Rules Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {rules.map((rule, idx) => (
            <ScrollReveal key={rule.title} delay={0.08 * (idx % 2)} className="h-full">
              <article className="h-full bg-[#14110D] border border-[rgba(212,166,42,0.3)] rounded-2xl p-6 sm:p-8 shadow-[5px_5px_0px_#6B4F12] hover:-translate-y-1 hover:border-[#D4A62A]/50 transition-all duration-200">
                <h3 className="font-display uppercase text-2xl tracking-tight text-[#E8C766] mb-4 pb-3 border-b border-[rgba(212,166,42,0.15)]">
                  {rule.title}
                </h3>

                <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#A89F8C] leading-relaxed">
                  {rule.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <span className="text-[#D4A62A] font-mono text-xs mt-0.5" aria-hidden="true">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ArenaRules;
