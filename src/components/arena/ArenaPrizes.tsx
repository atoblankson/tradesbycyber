"use client";

import React from "react";
import { Container } from "../Container";
import { ScrollReveal } from "@/lib/motion";

export function ArenaPrizes() {
  const prizes = [
    {
      place: "🥇 1ST PLACE",
      amount: "$250",
      share: "50% OF PRIZE POOL",
      highlight: true,
      description: "Highest verified net return % under all drawdown and fair-play limits.",
    },
    {
      place: "🥈 2ND PLACE",
      amount: "$150",
      share: "30% OF PRIZE POOL",
      highlight: false,
      description: "Second highest verified net return % with audited risk parameters.",
    },
    {
      place: "🥉 3RD PLACE",
      amount: "$100",
      share: "20% OF PRIZE POOL",
      highlight: false,
      description: "Third highest verified net return % following final tie-breaker checks.",
    },
  ];

  return (
    <section
      id="prizes"
      data-theme="dark"
      aria-label="Contest Prizes"
      className="w-full bg-[#0B0A08] text-[#EFEAE4] py-20 sm:py-28 relative select-none border-b border-[rgba(212,166,42,0.25)]"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C766] font-bold block mb-2">
              PROPOSED DISTRIBUTION
            </span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[0.88] text-[#EFEAE4]">
              PRIZES FOR <span className="gold-metallic-text">SKILL</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#A89F8C] max-w-md leading-relaxed">
            Suggested cash-prize model for an illustrative $500 pool. All funding, eligibility, and Ghanaian regulatory compliance will be verified before formal launch.
          </p>
        </div>

        {/* 3 Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {prizes.map((prize, idx) => (
            <ScrollReveal key={prize.place} delay={0.1 + idx * 0.1} className="h-full">
              <div
                className={`
                  h-full flex flex-col justify-between p-7 sm:p-9 rounded-2xl border-2 transition-all duration-200
                  ${
                    prize.highlight
                      ? "bg-[#1B1712] border-[#D4A62A] shadow-[6px_6px_0px_#6B4F12] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#6B4F12]"
                      : "bg-[#14110D] border-[rgba(212,166,42,0.3)] shadow-[5px_5px_0px_#6B4F12] hover:-translate-y-1 hover:border-[#D4A62A]/50"
                  }
                `}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-[#E8C766]">
                      {prize.place}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#A89F8C]">
                      {prize.share}
                    </span>
                  </div>

                  <div
                    className={`
                      font-display uppercase tracking-tight text-5xl sm:text-6xl my-4
                      ${prize.highlight ? "gold-metallic-text" : "text-[#EFEAE4]"}
                    `}
                  >
                    {prize.amount}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#A89F8C] leading-relaxed">
                    {prize.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[rgba(212,166,42,0.15)] font-mono text-[10px] text-[#A89F8C]/70 uppercase">
                  Payout via manual bank / mobile money transfer
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Responsible Prize Funding Notice */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#14110D] border border-[rgba(212,166,42,0.2)] font-mono text-[11px] text-[#A89F8C] leading-relaxed">
          <strong className="text-[#E8C766] uppercase mr-2 font-bold">Funding Guarantee Policy:</strong>
          Prizes are funded securely prior to competition kickoff. Under no circumstances is a contest promoted with a guaranteed prize pool unless the corresponding capital has been committed and verified.
        </div>
      </Container>
    </section>
  );
}

export default ArenaPrizes;
