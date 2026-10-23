import React from "react";
import { Container } from "./Container";

export interface StatItem {
  value: string;
  label: string;
  descriptor?: string;
}

/* =========================================================================
   PLACEHOLDER STATS DATA
   IMPORTANT: These values are temporary editorial placeholders for development.
   Replace with verified performance data and live mentorship statistics.
   ========================================================================= */
const DEFAULT_STATS: StatItem[] = [
  {
    // PLACEHOLDER VALUE: Historical strategy win rate across defined setups
    value: "74%",
    label: "Win Rate",
    descriptor: "High-probability orderflow setups",
  },
  {
    // PLACEHOLDER VALUE: Average risk to reward ratio per trade execution
    value: "1:3.4",
    label: "Avg Risk:Reward",
    descriptor: "Strict 0.5% max risk tolerance",
  },
  {
    // PLACEHOLDER VALUE: Cumulative years of live London & NY session trading
    value: "8+",
    label: "Years Trading",
    descriptor: "Full-time market experience",
  },
  {
    // PLACEHOLDER VALUE: Total traders coached through the mentorship curriculum
    value: "450+",
    label: "Students Mentored",
    descriptor: "Private Discord & 1-on-1 calls",
  },
];

export interface StatsRowProps {
  stats?: StatItem[];
  className?: string;
}

export function StatsRow({ stats = DEFAULT_STATS, className = "" }: StatsRowProps) {
  return (
    <section
      aria-label="Trading Performance Statistics"
      className={`w-full bg-[#0A0A0A] text-[#EFEAE4] border-b border-[rgba(239,234,228,0.12)] py-14 sm:py-20 md:py-24 ${className}`}
    >
      <Container size="lg">
        {/* 4-Column Neo-brutalist Stats Grid with Editorial Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 sm:gap-y-12 md:gap-y-0">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`
                flex flex-col justify-start
                px-3 sm:px-6 md:px-8 lg:px-10
                ${idx % 2 === 0 ? "border-r md:border-r" : "border-r-0 md:border-r"}
                ${idx === stats.length - 1 ? "md:border-r-0" : ""}
                border-[rgba(239,234,228,0.12)]
              `}
            >
              {/* Stat Index / Order Tag */}
              <span className="font-mono text-[10px] sm:text-xs text-[#5ED1C4] uppercase tracking-widest mb-2 font-bold">
                METRIC // 0{idx + 1}
              </span>

              {/* Big Condensed Number Stat in Cream */}
              <div className="font-display uppercase text-[#EFEAE4] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tight">
                {stat.value}
              </div>

              {/* Stat Label */}
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#EFEAE4] font-bold mt-3 sm:mt-4">
                {stat.label}
              </span>

              {/* Stat Descriptor */}
              {stat.descriptor && (
                <span className="font-sans text-[11px] sm:text-xs text-[#EFEAE4]/50 mt-1 leading-snug">
                  {stat.descriptor}
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StatsRow;
