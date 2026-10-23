import React from "react";
import { Container } from "./Container";

export interface StrategyCardItem {
  number: string;
  title: string;
  description: string;
  accentBg: string;
  textColor: string;
  rotation: number;
}

/* =========================================================================
   STRATEGY CARDS DATA
   4 core pillars of the Tradedbycyber trading methodology
   ========================================================================= */
const STRATEGY_CARDS: StrategyCardItem[] = [
  {
    number: "01",
    title: "PRICE ACTION",
    description: "Raw market structure, liquidity sweeps, and candlestick delivery without lagging retail indicators.",
    accentBg: "bg-[#5ED1C4]",
    textColor: "text-[#0A0A0A]",
    rotation: -1,
  },
  {
    number: "02",
    title: "SUPPLY & DEMAND",
    description: "Identifying high-timeframe order blocks and imbalance inefficiencies where institutional capital enters.",
    accentBg: "bg-[#FF8A1F]",
    textColor: "text-[#0A0A0A]",
    rotation: 1.5,
  },
  {
    number: "03",
    title: "RISK MANAGEMENT",
    description: "Strict 0.5%–1.0% maximum risk per position with asymmetric 1:3+ minimum risk-to-reward targets.",
    accentBg: "bg-[#F7D417]",
    textColor: "text-[#0A0A0A]",
    rotation: -1.2,
  },
  {
    number: "04",
    title: "TRADING PSYCHOLOGY",
    description: "Eliminating FOMO, revenge trading, and emotional bias through systematic rule-based execution protocols.",
    accentBg: "bg-[#F0527E]",
    textColor: "text-[#0A0A0A]",
    rotation: 1,
  },
];

export interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className = "" }: AboutSectionProps) {
  return (
    <section
      id="strategy"
      aria-label="About & My Approach"
      className={`
        w-full bg-[#EFEAE4] text-[#0A0A0A]
        border-b-2 sm:border-b-[3px] border-[#0A0A0A]
        py-16 sm:py-20 md:py-28 select-none
        ${className}
      `.trim()}
      style={{
        backgroundSize: "52px 52px",
        backgroundImage: `
          linear-gradient(to right, rgba(10, 10, 10, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(10, 10, 10, 0.08) 1px, transparent 1px)
        `,
      }}
    >
      <Container size="lg">
        {/* Section Header: Pill kicker + Giant condensed headline */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A] bg-[#0A0A0A]/10 border border-[#0A0A0A]/20 px-3 py-1 rounded-full font-bold">
              {"// 02 • PHILOSOPHY & METHODOLOGY"}
            </span>
            <span className="font-mono text-xs text-[#0A0A0A]/50 tracking-wider hidden sm:inline">
              EXECUTION OVER EMOTION
            </span>
          </div>

          <h2 className="font-display uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.88] text-[#0A0A0A] max-w-5xl">
            I DON&apos;T GAMBLE.
            <br />
            I EXECUTE.
          </h2>
        </div>

        {/* 2-Column Layout: Left (Bio + Photo Placeholder) | Right (4 Strategy Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ----------------------------------------------------------- */}
          {/* LEFT COLUMN: BIO PARAGRAPH + PHOTO PLACEHOLDER              */}
          {/* ----------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Bio Paragraph (Placeholder clearly documented) */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0A0A0A]/60 font-bold block">
                [TRADER BIO — EDITORIAL PLACEHOLDER]
              </span>
              <p className="font-sans text-base sm:text-lg leading-relaxed text-[#0A0A0A]/85">
                I trade the London and New York sessions using pure price action and institutional orderflow.
                No lagging indicators, no get-rich-quick gambles, and no lifestyle illusions.
              </p>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#0A0A0A]/75">
                Every trade is backed by systematic data, strict risk parameters, and documented live in our community.
                I built this methodology so serious traders can learn what actually works in live markets—not what looks
                good on Instagram reels.
              </p>
            </div>

            {/* Photo Spot (Dashed Placeholder) */}
            <div className="relative">
              <div className="
                w-full h-[260px] sm:h-[300px] md:h-[340px]
                border-2 border-dashed border-[#0A0A0A]/40
                bg-[rgba(10,10,10,0.04)]
                rounded-2xl
                flex flex-col items-center justify-center gap-3
                p-6 text-center select-none shadow-[2px_2px_0px_rgba(10,10,10,0.08)]
              ">
                {/* Camera / Desk icon */}
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#0A0A0A]/40 flex items-center justify-center text-[#0A0A0A]/50">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>
                </div>
                <span className="font-mono text-xs sm:text-sm font-black tracking-widest text-[#0A0A0A]/70 uppercase">
                  TRADER PHOTO / WORKING SETUP
                </span>
                <span className="font-mono text-[11px] text-[#0A0A0A]/45 max-w-[220px] leading-tight">
                  Desk setup, charts multi-monitor, or candid working portrait (4:3 aspect ratio)
                </span>
              </div>

              {/* Corner mini-sticker accent */}
              <div className="absolute -top-3 -right-3 rotate-6 hidden sm:block">
                <span className="inline-block bg-[#0A0A0A] text-[#EFEAE4] border border-[#0A0A0A] font-mono text-[10px] uppercase font-black px-2.5 py-1 rounded shadow-[2px_2px_0px_rgba(10,10,10,0.3)]">
                  {"LIVE DESK // 08:00 GMT"}
                </span>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* RIGHT COLUMN: 4 STRATEGY CHUNKY STICKER-CARDS               */}
          {/* ----------------------------------------------------------- */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {STRATEGY_CARDS.map((card) => (
              <div
                key={card.number}
                className={`
                  relative flex flex-col justify-between
                  p-6 sm:p-7 rounded-xl
                  border-2 sm:border-[2.5px] border-[#0A0A0A]
                  shadow-[4px_4px_0px_#0A0A0A] sm:shadow-[5px_5px_0px_#0A0A0A]
                  ${card.accentBg} ${card.textColor}
                  transition-transform will-change-transform hover:scale-[1.02]
                `}
                style={{
                  transform: `rotate(${card.rotation}deg)`,
                }}
              >
                {/* Top Row: Pillar Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-black uppercase tracking-widest px-2.5 py-1 bg-[#0A0A0A] text-[#EFEAE4] rounded border border-[#0A0A0A]">
                    {"PILLAR //"} {card.number}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0A0A0A]/40">
                    ★
                  </span>
                </div>

                {/* Card Title & 1-Line Description */}
                <div>
                  <h3 className="font-display uppercase text-2xl sm:text-3xl tracking-tight leading-none mb-3">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#0A0A0A]/90 font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
