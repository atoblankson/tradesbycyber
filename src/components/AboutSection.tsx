import React from "react";
import { Container } from "./Container";
import { MaskedLineReveal, ScrollReveal } from "@/lib/motion";

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
   4 core pillars of the Tradesbycyber trading methodology
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
      data-theme="cream"
      aria-label="About & My Approach"
      className={`w-full bg-[#0B0A08] relative select-none ${className}`}
    >
      {/* Cream Curved Grid Panel (Moved from Hero to become the background of this section) */}
      <div
        className="
          w-full bg-[#EFEAE4] text-[#0A0A0A]
          rounded-tr-[160px] sm:rounded-tr-[240px] md:rounded-tr-[320px] lg:rounded-tr-[380px]
          rounded-tl-none rounded-b-none
          border-b-2 sm:border-b-[3px] border-[#0A0A0A]
          py-16 sm:py-20 md:py-28 overflow-hidden
        "
        style={{
          backgroundSize: "52px 52px",
          backgroundImage: `
            linear-gradient(to right, rgba(10, 10, 10, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(10, 10, 10, 0.08) 1px, transparent 1px)
          `,
        }}
      >
        <Container size="lg">
          {/* Section Header with Masked Line Slide */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2
              className="font-display uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.88] text-neon-green text-[#03FA84] max-w-5xl"
              style={{ color: "#03FA84" }}
            >
              <MaskedLineReveal delay={0}>
                <span>I DON&apos;T GAMBLE.</span>
              </MaskedLineReveal>
              <MaskedLineReveal delay={0.08}>
                <span>I EXECUTE.</span>
              </MaskedLineReveal>
            </h2>
          </div>

          {/* 2-Column Layout: Left (Bio + Photo Placeholder) | Right (4 Strategy Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* ----------------------------------------------------------- */}
            {/* LEFT COLUMN: BIO PARAGRAPH + PHOTO PLACEHOLDER              */}
            {/* ----------------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
              {/* Bio Paragraph */}
              <ScrollReveal delay={0.16} className="space-y-4">
                <p className="font-sans text-base sm:text-lg leading-relaxed text-[#0A0A0A]/85">
                  I trade the London and New York sessions using pure price action and institutional orderflow.
                  No lagging indicators, no get-rich-quick gambles, and no lifestyle illusions.
                </p>
                <p className="font-sans text-sm sm:text-base leading-relaxed text-[#0A0A0A]/75">
                  Every trade is backed by systematic data, strict risk parameters, and documented live in our community.
                  I built this methodology so serious traders can learn what actually works in live markets—not what looks
                  good on Instagram reels.
                </p>
              </ScrollReveal>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* RIGHT COLUMN: 4 STRATEGY CHUNKY STICKER-CARDS               */}
            {/* ----------------------------------------------------------- */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {STRATEGY_CARDS.map((card, idx) => (
                <ScrollReveal
                  key={card.number}
                  delay={0.1 + idx * 0.08}
                  className="h-full"
                >
                  <div
                    style={{
                      transform: `rotate(${card.rotation}deg)`,
                    }}
                    className="h-full"
                  >
                    <div
                      className={`
                        relative flex flex-col justify-between h-full
                        p-6 sm:p-7 rounded-xl
                        border-2 sm:border-[2.5px] border-[#0A0A0A]
                        shadow-[4px_4px_0px_#0A0A0A] sm:shadow-[5px_5px_0px_#0A0A0A]
                        hover:shadow-[8px_8px_0px_#0A0A0A] hover:-translate-y-1
                        ${card.accentBg} ${card.textColor}
                        transition-all duration-200
                      `}
                    >
                      {/* Top Row: Pillar Number Tag */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs font-black uppercase tracking-widest px-2.5 py-1 bg-[#0A0A0A] text-[#EFEAE4] rounded border border-[#0A0A0A]">
                          0{card.number}
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
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}

export default AboutSection;
