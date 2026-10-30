"use client";

import React, { useState } from "react";
import { Container } from "../Container";
import { ScrollReveal } from "@/lib/motion";

interface LeaderboardEntry {
  rank: string;
  alias: string;
  netReturn: string;
  maxDrawdown: string;
  profitFactor: string;
  status: "Eligible*" | "Provisional*" | "Verified*";
}

const SAMPLE_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: "01",
    alias: "CyberRaven",
    netReturn: "+8.42%",
    maxDrawdown: "3.1%",
    profitFactor: "2.84",
    status: "Eligible*",
  },
  {
    rank: "02",
    alias: "GoldSentinel",
    netReturn: "+6.75%",
    maxDrawdown: "2.4%",
    profitFactor: "2.51",
    status: "Eligible*",
  },
  {
    rank: "03",
    alias: "LiquidityFox",
    netReturn: "+5.90%",
    maxDrawdown: "4.0%",
    profitFactor: "2.18",
    status: "Eligible*",
  },
  {
    rank: "04",
    alias: "AtlasPips",
    netReturn: "+4.18%",
    maxDrawdown: "2.0%",
    profitFactor: "1.95",
    status: "Eligible*",
  },
  {
    rank: "05",
    alias: "LondonWick",
    netReturn: "+3.62%",
    maxDrawdown: "3.7%",
    profitFactor: "1.82",
    status: "Eligible*",
  },
];

export function ArenaLeaderboard() {
  const [activeTab, setActiveTab] = useState<"demo" | "month" | "war">("demo");

  return (
    <section
      id="leaderboard"
      data-theme="dark"
      aria-label="Contest Leaderboard"
      className="w-full bg-[#14110D] text-[#EFEAE4] py-20 sm:py-28 relative select-none border-b border-[rgba(212,166,42,0.25)]"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C766] font-bold block mb-2">
              SEASON 01 PREVIEW
            </span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[0.88] text-[#EFEAE4]">
              THE <span className="gold-metallic-text">LEADERBOARD</span>
            </h2>
          </div>

          {/* Mandatory Prominent Sample Data Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A62A]/15 border border-[#D4A62A]/40 font-mono text-[11px] font-black uppercase text-[#E8C766] tracking-wider self-start md:self-end">
            <span className="w-2 h-2 rounded-full bg-[#E8C766] animate-pulse" />
            <span>SAMPLE DATA · NOT LIVE RESULTS</span>
          </div>
        </div>

        {/* Contest Switcher Tabs */}
        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab("demo")}
            className={`
              font-mono text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all cursor-pointer whitespace-nowrap
              ${
                activeTab === "demo"
                  ? "bg-[#D4A62A] text-[#0B0A08] border-[#D4A62A] shadow-[2px_2px_0px_#6B4F12]"
                  : "bg-[#0B0A08] text-[#A89F8C] border-[rgba(212,166,42,0.2)] hover:border-[#D4A62A]/50 hover:text-[#EFEAE4]"
              }
            `}
          >
            DEMO CHAMPIONSHIP
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("month")}
            className={`
              font-mono text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all cursor-pointer whitespace-nowrap
              ${
                activeTab === "month"
                  ? "bg-[#D4A62A] text-[#0B0A08] border-[#D4A62A] shadow-[2px_2px_0px_#6B4F12]"
                  : "bg-[#0B0A08] text-[#A89F8C] border-[rgba(212,166,42,0.2)] hover:border-[#D4A62A]/50 hover:text-[#EFEAE4]"
              }
            `}
          >
            TRADER OF THE MONTH
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("war")}
            className={`
              font-mono text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all cursor-pointer whitespace-nowrap
              ${
                activeTab === "war"
                  ? "bg-[#D4A62A] text-[#0B0A08] border-[#D4A62A] shadow-[2px_2px_0px_#6B4F12]"
                  : "bg-[#0B0A08] text-[#A89F8C] border-[rgba(212,166,42,0.2)] hover:border-[#D4A62A]/50 hover:text-[#EFEAE4]"
              }
            `}
          >
            TRADING WAR (VOLUME)
          </button>
        </div>

        {/* Chunky Table Container */}
        <ScrollReveal delay={0.15}>
          <div className="bg-[#1B1712] border-2 border-[#D4A62A]/40 rounded-2xl shadow-[6px_6px_0px_#6B4F12] overflow-hidden">
            
            {/* Table Control Bar */}
            <div className="p-4 sm:p-5 border-b border-[rgba(212,166,42,0.2)] bg-[#14110D] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
              <div>
                <strong className="text-[#EFEAE4] block sm:inline">
                  {activeTab === "demo"
                    ? "Demo Championship Season"
                    : activeTab === "month"
                    ? "Trader of the Month Season"
                    : "Trading War (Volume) Season"}
                </strong>
                <span className="text-[#A89F8C] sm:ml-2 text-[11px]">
                  • Official scoring updates after verified statement imports
                </span>
              </div>
              <span className="text-[#E8C766] text-[11px] font-bold">
                MT5 • 7-DAY CONTEST WINDOW
              </span>
            </div>

            {/* Responsive Table Scroll Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-[rgba(212,166,42,0.2)] bg-[#0B0A08]/50 text-[#A89F8C] font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-4 px-5 font-bold">Rank</th>
                    <th className="py-4 px-5 font-bold">Trader Alias</th>
                    <th className="py-4 px-5 font-bold">Net Return</th>
                    <th className="py-4 px-5 font-bold">Max Drawdown</th>
                    <th className="py-4 px-5 font-bold">Profit Factor</th>
                    <th className="py-4 px-5 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(212,166,42,0.1)] font-mono text-xs sm:text-sm">
                  {SAMPLE_LEADERBOARD.map((row) => (
                    <tr
                      key={row.rank}
                      className="hover:bg-[#D4A62A]/5 transition-colors"
                    >
                      {/* Rank */}
                      <td className="py-4 px-5 font-display text-lg tracking-tight text-[#E8C766] font-bold">
                        {row.rank}
                      </td>

                      {/* Alias */}
                      <td className="py-4 px-5 font-sans font-bold text-[#EFEAE4]">
                        {row.alias}
                      </td>

                      {/* Net Return (Green only for data) */}
                      <td className="py-4 px-5 font-bold text-[#3DDC97]">
                        {row.netReturn}
                      </td>

                      {/* Max Drawdown */}
                      <td className="py-4 px-5 text-[#A89F8C]">
                        {row.maxDrawdown}
                      </td>

                      {/* Profit Factor */}
                      <td className="py-4 px-5 text-[#EFEAE4]">
                        {row.profitFactor}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-5">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#3DDC97]/15 border border-[#3DDC97]/30 text-[#3DDC97] text-[10px] font-bold tracking-wider uppercase">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Disclaimer Footer */}
            <div className="p-4 sm:p-5 bg-[#0B0A08] border-t border-[rgba(212,166,42,0.15)] font-mono text-[11px] text-[#A89F8C] leading-relaxed">
              *Illustrative sample names and figures for the design preview only. A production leaderboard uses verified MT5 account statements, applies the published tie-breaker rules, and marks provisional scores clearly until the 72-hour appeal period concludes.
            </div>

          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default ArenaLeaderboard;
