"use client";

import React from "react";
import { Container } from "../Container";
import { Sticker } from "../Sticker";
import { ScrollReveal } from "@/lib/motion";

export interface ArenaContestsProps {
  onOpenModal: (contestName: string) => void;
}

export function ArenaContests({ onOpenModal }: ArenaContestsProps) {
  return (
    <section
      id="contests"
      data-theme="cream"
      aria-label="Available Contests"
      className="w-full bg-[#EFEAE4] text-[#0A0A0A] py-20 sm:py-28 md:py-32 relative select-none border-b-2 sm:border-b-[3px] border-[#0A0A0A]"
      style={{
        backgroundSize: "52px 52px",
        backgroundImage: `
          linear-gradient(to right, rgba(10, 10, 10, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(10, 10, 10, 0.08) 1px, transparent 1px)
        `,
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/70 font-bold block mb-2">
              CHOOSE YOUR CHALLENGE
            </span>
            <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.88] text-[#0A0A0A]">
              ENTER THE ARENA
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#0A0A0A]/80 max-w-md leading-relaxed">
            Standardized conditions. Transparent rules. Verifiable rankings. Your trading record—not cherry-picked screenshots—determines your place.
          </p>
        </div>

        {/* 3 Contests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* 1. DEMO TRADING CHAMPIONSHIP (Featured Primary) */}
          <ScrollReveal delay={0.1} className="h-full">
            <article className="h-full flex flex-col justify-between bg-[#FFFFFF] border-2 sm:border-[2.5px] border-[#0A0A0A] rounded-2xl p-7 sm:p-8 shadow-[5px_5px_0px_#0A0A0A] sm:shadow-[6px_6px_0px_#0A0A0A] hover:shadow-[9px_9px_0px_#0A0A0A] hover:-translate-y-1 transition-all duration-200 relative overflow-hidden">
              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <Sticker
                    color="teal"
                    rotation={-3}
                    size="sm"
                    className="font-mono text-[11px] font-black uppercase shadow-[2px_2px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
                  >
                    PERFORMANCE
                  </Sticker>
                  <span className="text-2xl" role="img" aria-label="Trophy">
                    🏆
                  </span>
                </div>

                <h3 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#0A0A0A] mb-3">
                  DEMO TRADING CHAMPIONSHIP
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/80 leading-relaxed mb-6">
                  Compete on a standardized MT5 demo account with $10,000 virtual equity. Rankings prioritize net percentage return while strictly enforcing drawdown safeguards and fair-play limits.
                </p>

                {/* Specs Pill */}
                <div className="inline-block px-3 py-1.5 rounded-lg bg-[#EFEAE4] border border-[#0A0A0A] font-mono text-[11px] font-black text-[#0A0A0A] mb-8">
                  7 DAYS • FREE ENTRY • $10K DEMO
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onOpenModal("Demo Trading Championship")}
                  className="
                    w-full py-4 px-6 rounded-xl
                    bg-[#0A0A0A] text-[#EFEAE4]
                    border-2 border-[#0A0A0A]
                    shadow-[3px_3px_0px_#0A0A0A]
                    hover:bg-[#5ED1C4] hover:text-[#0A0A0A]
                    hover:shadow-[5px_5px_0px_#0A0A0A] hover:-translate-y-0.5
                    active:translate-y-[1px]
                    font-mono font-black uppercase text-xs sm:text-sm tracking-wider
                    transition-all duration-200 text-center cursor-pointer
                  "
                >
                  REGISTER INTEREST ↗
                </button>
              </div>
            </article>
          </ScrollReveal>

          {/* 2. TRADER OF THE MONTH */}
          <ScrollReveal delay={0.2} className="h-full">
            <article className="h-full flex flex-col justify-between bg-[#FFFFFF] border-2 sm:border-[2.5px] border-[#0A0A0A] rounded-2xl p-7 sm:p-8 shadow-[5px_5px_0px_#0A0A0A] sm:shadow-[6px_6px_0px_#0A0A0A] hover:shadow-[9px_9px_0px_#0A0A0A] hover:-translate-y-1 transition-all duration-200 relative overflow-hidden">
              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <Sticker
                    color="yellow"
                    rotation={2}
                    size="sm"
                    className="font-mono text-[11px] font-black uppercase shadow-[2px_2px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
                  >
                    CONSISTENCY
                  </Sticker>
                  <span className="text-2xl" role="img" aria-label="Crown">
                    👑
                  </span>
                </div>

                <h3 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#0A0A0A] mb-3">
                  TRADER OF THE MONTH
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/80 leading-relaxed mb-6">
                  Recognition for disciplined risk-adjusted performance, low drawdown, and rule compliance across our community—not simply whoever took the highest gamble.
                </p>

                {/* Specs Pill */}
                <div className="inline-block px-3 py-1.5 rounded-lg bg-[#EFEAE4] border border-[#0A0A0A] font-mono text-[11px] font-black text-[#0A0A0A] mb-8">
                  MONTHLY • MERIT-BASED
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onOpenModal("Trader of the Month")}
                  className="
                    w-full py-4 px-6 rounded-xl
                    bg-transparent text-[#0A0A0A]
                    border-2 border-[#0A0A0A]
                    shadow-[3px_3px_0px_#0A0A0A]
                    hover:bg-[#F7D417]
                    hover:shadow-[5px_5px_0px_#0A0A0A] hover:-translate-y-0.5
                    active:translate-y-[1px]
                    font-mono font-black uppercase text-xs sm:text-sm tracking-wider
                    transition-all duration-200 text-center cursor-pointer
                  "
                >
                  GET UPDATES ↗
                </button>
              </div>
            </article>
          </ScrollReveal>

          {/* 3. TRADING WAR — VOLUME */}
          <ScrollReveal delay={0.3} className="h-full">
            <article className="h-full flex flex-col justify-between bg-[#FFFFFF] border-2 sm:border-[2.5px] border-[#0A0A0A] rounded-2xl p-7 sm:p-8 shadow-[5px_5px_0px_#0A0A0A] sm:shadow-[6px_6px_0px_#0A0A0A] hover:shadow-[9px_9px_0px_#0A0A0A] hover:-translate-y-1 transition-all duration-200 relative overflow-hidden">
              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <Sticker
                    color="orange"
                    rotation={-2}
                    size="sm"
                    className="font-mono text-[11px] font-black uppercase shadow-[2px_2px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
                  >
                    VOLUME (LATER)
                  </Sticker>
                  <span className="text-2xl" role="img" aria-label="Swords">
                    ⚔️
                  </span>
                </div>

                <h3 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-[#0A0A0A] mb-3">
                  TRADING WAR — VOLUME
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/80 leading-relaxed mb-6">
                  Compete on eligible closed-trade volume verified from approved MT5 statements. Strict risk caps and trade duration limits protect against reckless churn.
                </p>

                {/* Specs Pill */}
                <div className="inline-block px-3 py-1.5 rounded-lg bg-[#EFEAE4] border border-[#0A0A0A] font-mono text-[11px] font-black text-[#0A0A0A] mb-8">
                  WEEKLY • VERIFIED MT5 • PROPOSED
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onOpenModal("Trading War — Volume")}
                  className="
                    w-full py-4 px-6 rounded-xl
                    bg-transparent text-[#0A0A0A]
                    border-2 border-[#0A0A0A]
                    shadow-[3px_3px_0px_#0A0A0A]
                    hover:bg-[#FF8A1F]
                    hover:shadow-[5px_5px_0px_#0A0A0A] hover:-translate-y-0.5
                    active:translate-y-[1px]
                    font-mono font-black uppercase text-xs sm:text-sm tracking-wider
                    transition-all duration-200 text-center cursor-pointer
                  "
                >
                  JOIN WAITLIST ↗
                </button>
              </div>
            </article>
          </ScrollReveal>

        </div>
      </Container>
    </section>
  );
}

export default ArenaContests;
