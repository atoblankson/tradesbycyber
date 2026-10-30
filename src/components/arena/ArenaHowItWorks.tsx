"use client";

import React from "react";
import { Container } from "../Container";
import { ScrollReveal } from "@/lib/motion";

export function ArenaHowItWorks() {
  const steps = [
    {
      step: "STEP 01",
      title: "REGISTER INTEREST",
      description:
        "Submit your public trader alias and email, and accept contest rules. Entry is completely free; no purchase or deposit required.",
      accent: "bg-[#5ED1C4]",
    },
    {
      step: "STEP 02",
      title: "CONNECT MT5",
      description:
        "Receive designated demo account credentials or submit your statement. Never enter your trading master password on any form.",
      accent: "bg-[#F7D417]",
    },
    {
      step: "STEP 03",
      title: "TRADE DISCIPLINE",
      description:
        "Execute your strategy within the official 7-day contest window. Stay within the 20% maximum equity drawdown limit.",
      accent: "bg-[#FF8A1F]",
    },
    {
      step: "STEP 04",
      title: "AUDIT & WIN",
      description:
        "Statements are verified, disputes resolved during the 72-hour appeal window, and winners paid securely upon confirmation.",
      accent: "bg-[#F0527E]",
    },
  ];

  return (
    <section
      id="how-it-works"
      data-theme="cream"
      aria-label="How the Contest Works"
      className="w-full bg-[#EFEAE4] text-[#0A0A0A] py-20 sm:py-28 relative select-none border-b-2 sm:border-b-[3px] border-[#0A0A0A]"
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
        <div className="mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/70 font-bold block mb-2">
            STEP-BY-STEP PROCESS
          </span>
          <h2 className="font-display uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.88] text-[#0A0A0A]">
            FOUR STEPS TO COMPETE
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {steps.map((item, idx) => (
            <ScrollReveal key={item.step} delay={0.1 + idx * 0.08} className="h-full">
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-xl border-2 sm:border-[2.5px] border-[#0A0A0A] bg-[#FFFFFF] shadow-[4px_4px_0px_#0A0A0A] hover:shadow-[7px_7px_0px_#0A0A0A] hover:-translate-y-1 transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-[#0A0A0A]">
                      {item.step}
                    </span>
                    <span className={`w-3.5 h-3.5 rounded-full border border-[#0A0A0A] ${item.accent}`} />
                  </div>

                  <h3 className="font-display uppercase text-2xl tracking-tight text-[#0A0A0A] mb-3">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#0A0A0A]/15 font-mono text-[10px] text-[#0A0A0A]/60 uppercase font-bold">
                  Rule-Based Execution
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ArenaHowItWorks;
