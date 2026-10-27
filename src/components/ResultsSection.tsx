import React from "react";
import { Container } from "./Container";

export interface TradeTicket {
  id: string;
  pair: string;
  direction: "BUY" | "SELL";
  entry: string;
  exit: string;
  rMultiple: string;
  session: string;
  date: string;
}

/* =========================================================================
   TRADE TICKETS DATA (PLACEHOLDERS)
   6 recent documented executions with entry, exit, and R multiples
   ========================================================================= */
const TRADE_TICKETS: TradeTicket[] = [
  {
    id: "TC-8921",
    pair: "XAU/USD",
    direction: "BUY",
    entry: "2,714.20",
    exit: "2,748.50",
    rMultiple: "+4.2R",
    session: "NY OPEN",
    date: "OCT 22",
  },
  {
    id: "TC-8894",
    pair: "EUR/USD",
    direction: "SELL",
    entry: "1.0885",
    exit: "1.0820",
    rMultiple: "+3.4R",
    session: "LONDON FIX",
    date: "OCT 18",
  },
  {
    id: "TC-8840",
    pair: "NAS100",
    direction: "BUY",
    entry: "20,180.0",
    exit: "20,440.0",
    rMultiple: "+5.1R",
    session: "NYSE OPEN",
    date: "OCT 15",
  },
  {
    id: "TC-8792",
    pair: "GBP/USD",
    direction: "SELL",
    entry: "1.3040",
    exit: "1.2975",
    rMultiple: "+3.1R",
    session: "LONDON OPEN",
    date: "OCT 11",
  },
  {
    id: "TC-8735",
    pair: "USD/JPY",
    direction: "BUY",
    entry: "151.20",
    exit: "152.95",
    rMultiple: "+3.8R",
    session: "TOKYO/LDN",
    date: "OCT 08",
  },
  {
    id: "TC-8680",
    pair: "GBP/JPY",
    direction: "SELL",
    entry: "197.80",
    exit: "196.10",
    rMultiple: "+4.6R",
    session: "LONDON PM",
    date: "OCT 03",
  },
];

export interface ResultsSectionProps {
  className?: string;
}

export function ResultsSection({ className = "" }: ResultsSectionProps) {
  return (
    <section
      id="results"
      aria-label="Verified Trade Results"
      className={`
        w-full bg-gold-glow-tr film-grain text-[#EFEAE4]
        border-y border-[rgba(212,166,42,0.3)]
        py-16 sm:py-24 md:py-32 relative select-none
        ${className}
      `.trim()}
    >
      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[rgba(212,166,42,0.2)]">
          <div>
            <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] text-[#EFEAE4]">
              <span>THE </span>
              <span className="gold-metallic-text">RECEIPTS.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#A89F8C] max-w-md leading-relaxed">
            Every trade is taken in live market conditions with defined risk parameters.
            Real executions, strict trade journals, and zero retrospective hindsight.
          </p>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* GRID OF 6 TRADE TICKETS (Raised dark, 1px gold border, gold-800 shadow) */}
        {/* ----------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {TRADE_TICKETS.map((trade) => {
            const isBuy = trade.direction === "BUY";

            return (
              <article
                key={trade.id}
                className="
                  flex flex-col justify-between
                  bg-[#14110D] border border-[#B8871B]/35
                  rounded-xl p-5 sm:p-6
                  shadow-[4px_4px_0px_#6B4F12]
                  hover:border-[#D4A62A]/60 transition-colors
                "
              >
                {/* Ticket Top Row: Pair + BUY/SELL Tag + R Multiple */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-display text-2xl sm:text-3xl tracking-tight text-[#EFEAE4]">
                      {trade.pair}
                    </span>
                    <span
                      className={`
                        font-mono text-[11px] font-black uppercase px-2 py-0.5 rounded
                        border
                        ${
                          isBuy
                            ? "bg-[#3DDC97] text-[#0B0A08] border-[#0B0A08]"
                            : "bg-[#FF5C5C] text-[#0B0A08] border-[#0B0A08]"
                        }
                      `}
                    >
                      {trade.direction}
                    </span>
                  </div>

                  {/* Green R Multiple (#3DDC97 for trade data) */}
                  <span className="font-display text-2xl sm:text-3xl tracking-tight text-[#3DDC97] font-bold">
                    {trade.rMultiple}
                  </span>
                </div>

                {/* Entry / Exit / Session Specs */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-[rgba(212,166,42,0.18)] mb-4 font-mono text-xs">
                  <div>
                    <span className="text-[#A89F8C] block text-[10px] uppercase">
                      Entry
                    </span>
                    <span className="text-[#EFEAE4] font-bold">
                      {trade.entry}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A89F8C] block text-[10px] uppercase">
                      Exit
                    </span>
                    <span className="text-[#EFEAE4] font-bold">
                      {trade.exit}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A89F8C] block text-[10px] uppercase">
                      Session
                    </span>
                    <span className="text-[#E8C766] font-semibold truncate block">
                      {trade.session}
                    </span>
                  </div>
                </div>

                {/* Chart Screenshot Placeholder Box */}
                <div className="
                  w-full h-40 sm:h-44
                  border border-dashed border-[rgba(212,166,42,0.3)]
                  bg-[rgba(27,23,18,0.5)]
                  rounded-lg
                  flex flex-col items-center justify-center gap-2
                  p-4 text-center select-none
                ">
                  <svg
                    className="w-6 h-6 text-[#D4A62A]/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                  <span className="font-mono text-[11px] font-bold tracking-wider text-[#EFEAE4]/70 uppercase">
                    CHART SCREENSHOT
                  </span>
                  <span className="font-mono text-[9px] text-[#A89F8C]">
                    TradingView Execution • 15m TF
                  </span>
                </div>

                {/* Ticket Footer / Identifier */}
                <div className="flex items-center justify-between font-mono text-[10px] text-[#A89F8C] mt-3 pt-2">
                  <span>ID: {trade.id}</span>
                  <span>{trade.date}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* ----------------------------------------------------------- */}
        {/* WIDE CARD FOR EQUITY-CURVE PLACEHOLDER                      */}
        {/* ----------------------------------------------------------- */}
        <div className="mt-10 sm:mt-12">
          <div className="
            w-full bg-[#14110D]
            border border-[#B8871B]/35
            rounded-2xl p-6 sm:p-8 md:p-10
            shadow-[5px_5px_0px_#6B4F12]
          ">
            {/* Header of Equity Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[rgba(212,166,42,0.2)]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#D4A62A] font-bold block mb-1">
                  PORTFOLIO PERFORMANCE • AUDITED
                </span>
                <h3 className="font-display uppercase text-2xl sm:text-4xl tracking-tight text-[#EFEAE4]">
                  VERIFIED EQUITY CURVE
                </h3>
              </div>

              {/* Key Quick Metrics (#3DDC97 green, #FF5C5C red) */}
              <div className="flex items-center gap-4 sm:gap-8 font-mono text-xs">
                <div>
                  <span className="text-[#A89F8C] block text-[10px] uppercase">
                    PROFIT FACTOR
                  </span>
                  <span className="text-[#3DDC97] font-bold text-sm sm:text-base">
                    2.84
                  </span>
                </div>
                <div>
                  <span className="text-[#A89F8C] block text-[10px] uppercase">
                    MAX DRAWDOWN
                  </span>
                  <span className="text-[#FF5C5C] font-bold text-sm sm:text-base">
                    4.2%
                  </span>
                </div>
                <div>
                  <span className="text-[#A89F8C] block text-[10px] uppercase">
                    NET RETURN
                  </span>
                  <span className="text-[#3DDC97] font-bold text-sm sm:text-base">
                    +64.2%
                  </span>
                </div>
              </div>
            </div>

            {/* Large Dashed Box for Equity Curve Screenshot */}
            <div className="
              w-full h-64 sm:h-80 md:h-96
              border border-dashed border-[rgba(212,166,42,0.3)]
              bg-[rgba(27,23,18,0.5)]
              rounded-xl
              flex flex-col items-center justify-center gap-3
              p-6 text-center select-none relative overflow-hidden
            ">
              {/* Subtle background chart grid lines */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundSize: "40px 40px",
                  backgroundImage: `
                    linear-gradient(to right, rgba(212, 166, 42, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(212, 166, 42, 0.2) 1px, transparent 1px)
                  `,
                }}
              />

              {/* Upward-trending equity curve SVG illustration in #3DDC97 */}
              <svg
                className="w-48 sm:w-64 h-20 text-[#3DDC97] opacity-80 mb-1"
                viewBox="0 0 240 80"
                fill="none"
              >
                <path
                  d="M 10 70 L 50 55 L 80 60 L 120 40 L 150 45 L 180 25 L 210 28 L 235 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="235" cy="10" r="4" fill="currentColor" />
              </svg>

              <span className="font-mono text-xs sm:text-sm font-black tracking-widest text-[#EFEAE4] uppercase z-10">
                EQUITY CURVE SCREENSHOT PLACEHOLDER
              </span>
              <span className="font-mono text-[11px] text-[#A89F8C] max-w-md z-10 leading-relaxed">
                Upload verified Myfxbook or MetaTrader cumulative equity growth chart (16:9 ratio recommended).
              </span>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* DISCLAIMER NOTE UNDER SECTION                               */}
        {/* ----------------------------------------------------------- */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[rgba(212,166,42,0.2)] text-center">
          <p className="font-mono text-xs sm:text-sm text-[#A89F8C] tracking-wider">
            Past performance does not guarantee future results.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ResultsSection;
