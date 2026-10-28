"use client";

import React from "react";
import { Container } from "./Container";
import { Sticker } from "./Sticker";
import { getWhatsAppUrl } from "@/lib/contact";

export interface WorkWithMeSectionProps {
  className?: string;
}

export function WorkWithMeSection({ className = "" }: WorkWithMeSectionProps) {
  return (
    <section
      id="mentorship"
      aria-label="Work With Me Offerings"
      className={`
        w-full bg-[#EFEAE4] text-[#0A0A0A]
        border-b-2 sm:border-b-[3px] border-[#0A0A0A]
        py-16 sm:py-24 md:py-32 select-none
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
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.88] text-[#0A0A0A]">
            WORK WITH ME
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-[#0A0A0A]/75 max-w-xl mx-auto leading-relaxed">
            Stop gambling on retail indicators. Choose your program and master institutional price action with systematic discipline.
          </p>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* TWO OFFER CARDS IN CHUNKY STICKER-CARD STYLE                */}
        {/* Equal height, aligned baselines, centered 2-col grid        */}
        {/* ----------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch pt-6">
          
          {/* ========================================================= */}
          {/* CARD 1: FULL TRADER DEVELOPMENT PROGRAM                   */}
          {/* ========================================================= */}
          <div
            className="
              relative flex flex-col justify-between
              rounded-2xl p-6 sm:p-8 md:p-9
              border-2 sm:border-[2.5px] border-[#0A0A0A]
              bg-[#FFFFFF] shadow-[6px_6px_0px_#0A0A0A] sm:shadow-[8px_8px_0px_#0A0A0A]
              transition-all duration-200 hover:-translate-y-1
            "
          >
            {/* Corner Sticker: LIMITED ENROLLMENT */}
            <div className="absolute -top-3.5 sm:-top-4.5 right-4 sm:right-6 z-20">
              <Sticker
                color="yellow"
                rotation={-3}
                size="md"
                className="text-xs sm:text-sm font-black px-3.5 py-1.5 shadow-[3px_3px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
              >
                LIMITED ENROLLMENT
              </Sticker>
            </div>

            {/* Top Content Area */}
            <div className="flex-1 flex flex-col">
              {/* Card Title (Black, condensed display, aligned min-height) */}
              <div className="min-h-[4rem] sm:min-h-[4.5rem] flex items-center mb-1">
                <h3 className="font-display uppercase text-3xl sm:text-4xl tracking-tight text-[#0A0A0A] leading-[1.05]">
                  FULL TRADER DEVELOPMENT PROGRAM
                </h3>
              </div>

              {/* Price Block ($100 large condensed number) */}
              <div className="py-4 border-y-2 border-[#0A0A0A]/10 my-5 h-20 sm:h-24 flex items-baseline">
                <span className="font-display text-5xl sm:text-6xl md:text-7xl text-[#0A0A0A] tracking-tight leading-none">
                  $100
                </span>
              </div>

              {/* Tagline */}
              <div className="min-h-[2.75rem] sm:min-h-[3rem] mb-6 flex items-start">
                <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/75 leading-relaxed">
                  Stop depending on random signals. Learn how to read the market and build your own trading plan.
                </p>
              </div>

              {/* Subheading: MASTER: */}
              <div className="mb-3">
                <span className="font-mono text-xs font-black uppercase tracking-wider text-[#0A0A0A]">
                  MASTER:
                </span>
              </div>

              {/* 2-Column Checklist (Single column on mobile) */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
                {[
                  "Support & Resistance",
                  "Supply & Demand",
                  "Bullish & Bearish Order Blocks",
                  "Market Structure",
                  "Liquidity",
                  "Trade Confirmation",
                  "Risk Management",
                  "Trading Psychology",
                  "XAUUSD Execution",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-4 h-4 rounded-sm bg-[#0A0A0A] text-[#EFEAE4] flex items-center justify-center font-mono text-[10px] font-bold mt-0.5 select-none">
                      ✓
                    </span>
                    <span className="font-sans text-xs text-[#0A0A0A]/85 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Strip of four small tags in a row */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 pt-5 border-t border-[#0A0A0A]/10">
                {[
                  "4 WEEKS",
                  "LIVE TRAINING",
                  "PRACTICAL CHART WORK",
                  "PERSONAL TRADING PLAN",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-1.5 bg-[#0A0A0A]/5 border border-[#0A0A0A]/20 rounded text-[#0A0A0A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bold Quote Line */}
              <p className="font-sans text-xs sm:text-sm font-bold text-[#0A0A0A] leading-snug mb-6">
                Your goal isn&apos;t to copy my trades. Your goal is to understand WHY the trade exists.
              </p>
            </div>

            {/* Black Button */}
            <div className="pt-6 border-t border-[#0A0A0A]/10 mt-auto">
              <a
                href={getWhatsAppUrl("program")}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full py-4 px-6 rounded-lg
                  font-mono text-xs sm:text-sm font-black uppercase tracking-wider
                  text-center block select-none
                  border-2 border-[#0A0A0A]
                  bg-[#0A0A0A] text-[#EFEAE4] shadow-[3px_3px_0px_#0A0A0A]
                  hover:bg-[#1F1D1A] hover:shadow-[5px_5px_0px_#0A0A0A]
                  hover:-translate-y-0.5 active:translate-y-0
                  transition-all duration-150
                "
              >
                ENROLL NOW →
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 2: ELITE MENTORSHIP                                  */}
          {/* ========================================================= */}
          <div
            className="
              relative flex flex-col justify-between
              rounded-2xl p-6 sm:p-8 md:p-9
              border-2 sm:border-[2.5px] border-[#0A0A0A]
              bg-[#FFFFFF] shadow-[6px_6px_0px_#0A0A0A] sm:shadow-[8px_8px_0px_#0A0A0A]
              transition-all duration-200 hover:-translate-y-1
            "
          >
            {/* Top Content Area */}
            <div className="flex-1 flex flex-col">
              {/* Card Title (Black, condensed display, aligned min-height) */}
              <div className="min-h-[4rem] sm:min-h-[4.5rem] flex items-center mb-1">
                <h3 className="font-display uppercase text-3xl sm:text-4xl tracking-tight text-[#0A0A0A] leading-[1.05]">
                  ELITE MENTORSHIP
                </h3>
              </div>

              {/* Price Block (GHS 1,300 with / 3 months in small text) */}
              <div className="py-4 border-y-2 border-[#0A0A0A]/10 my-5 h-20 sm:h-24 flex items-baseline gap-2">
                <span className="font-display text-5xl sm:text-6xl md:text-7xl text-[#0A0A0A] tracking-tight leading-none">
                  GHS 1,300
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#0A0A0A]/60 font-bold uppercase tracking-wider">
                  / 3 months
                </span>
              </div>

              {/* Tagline */}
              <div className="min-h-[2.75rem] sm:min-h-[3rem] mb-6 flex items-start">
                <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/75 leading-relaxed">
                  Long-term development.
                </p>
              </div>

              {/* Subheading: INCLUDES: */}
              <div className="mb-3">
                <span className="font-mono text-xs font-black uppercase tracking-wider text-[#0A0A0A]">
                  INCLUDES:
                </span>
              </div>

              {/* TODO: client to confirm what Elite includes */}
              <ul className="space-y-4 mb-8">
                {[
                  "Feature scope to be confirmed by client",
                  "Session structure to be confirmed by client",
                  "Direct mentorship access to be confirmed by client",
                ].map((placeholder, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-4 h-4 rounded-sm bg-[#0A0A0A] text-[#EFEAE4] flex items-center justify-center font-mono text-[10px] font-bold mt-0.5 select-none">
                      ✓
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-[#0A0A0A]/60 italic leading-snug">
                      {placeholder}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Black Button */}
            <div className="pt-6 border-t border-[#0A0A0A]/10 mt-auto">
              <a
                href={getWhatsAppUrl("elite")}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full py-4 px-6 rounded-lg
                  font-mono text-xs sm:text-sm font-black uppercase tracking-wider
                  text-center block select-none
                  border-2 border-[#0A0A0A]
                  bg-[#0A0A0A] text-[#EFEAE4] shadow-[3px_3px_0px_#0A0A0A]
                  hover:bg-[#1F1D1A] hover:shadow-[5px_5px_0px_#0A0A0A]
                  hover:-translate-y-0.5 active:translate-y-0
                  transition-all duration-150
                "
              >
                APPLY FOR ELITE →
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default WorkWithMeSection;
