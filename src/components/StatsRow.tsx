import React from "react";
import { Container } from "./Container";
import { CountUpStat, ScrollReveal } from "@/lib/motion";

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
      id="stats"
      data-theme="dark"
      aria-label="Trading Performance Statistics"
      className={`w-full bg-gold-glow-tl film-grain text-[#EFEAE4] border-y border-[rgba(212,166,42,0.3)] py-14 sm:py-20 md:py-24 relative select-none ${className}`}
    >
      <Container size="lg" className="relative z-10">
        {/* 4-Column Neo-brutalist Stats Grid with Editorial Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 sm:gap-y-12 md:gap-y-0">
          {stats.map((stat, idx) => (
            <ScrollReveal
              key={stat.label}
              delay={idx * 0.08}
              className={`
                flex flex-col justify-start
                px-3 sm:px-6 md:px-8 lg:px-10
                ${idx % 2 === 0 ? "border-r md:border-r" : "border-r-0 md:border-r"}
                ${idx === stats.length - 1 ? "md:border-r-0" : ""}
                border-[rgba(212,166,42,0.18)]
              `}
            >
              {/* Big Condensed Number Stat in Metallic Gold Gradient with Count-up */}
              <CountUpStat
                value={stat.value}
                className="font-display uppercase gold-metallic-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tight"
              />

              {/* Stat Label in Cream */}
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#EFEAE4] font-bold mt-3 sm:mt-4">
                {stat.label}
              </span>

              {/* Stat Descriptor in Muted Text (#A89F8C) */}
              {stat.descriptor && (
                <span className="font-sans text-[11px] sm:text-xs text-[#A89F8C] mt-1 leading-snug">
                  {stat.descriptor}
                </span>
              )}
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StatsRow;
