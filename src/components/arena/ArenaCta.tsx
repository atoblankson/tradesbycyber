"use client";

import React from "react";
import { Container } from "../Container";
import { ScrollReveal } from "@/lib/motion";

export interface ArenaCtaProps {
  onOpenModal: () => void;
}

export function ArenaCta({ onOpenModal }: ArenaCtaProps) {
  return (
    <section
      id="arena-cta"
      data-theme="dark"
      aria-label="Arena Call to Action"
      className="w-full bg-[#0B0A08] text-[#EFEAE4] py-20 sm:py-28 relative select-none border-b border-[rgba(212,166,42,0.25)]"
    >
      <Container size="lg">
        <ScrollReveal delay={0.1}>
          <div className="w-full bg-[#14110D] border-2 border-[#D4A62A]/50 rounded-3xl p-8 sm:p-12 md:p-16 shadow-[8px_8px_0px_#6B4F12] flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 relative overflow-hidden">
            
            {/* Background Accent Glow */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full pointer-events-none opacity-20"
              style={{
                background: "radial-gradient(circle, #D4A62A 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Left Copy */}
            <div className="max-w-2xl text-center md:text-left relative z-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E8C766] font-bold block mb-3">
                YOUR NEXT MOVE
              </span>
              <h2 className="font-display uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[0.88] text-[#EFEAE4] mb-4">
                READY TO ENTER <span className="gold-metallic-text">THE ARENA?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#A89F8C] leading-relaxed">
                Register your interest today. Official contest dates, server parameters, and verified rules will be released to approved entrants first.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="flex-shrink-0 relative z-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenModal}
                className="
                  w-full sm:w-auto py-5 px-10 rounded-2xl
                  gold-metallic-bg text-[#0B0A08]
                  font-mono font-black uppercase text-sm tracking-wider
                  shadow-[4px_4px_0px_#6B4F12]
                  hover:-translate-y-1 hover:brightness-105 active:translate-y-[1px]
                  transition-all duration-200 text-center cursor-pointer whitespace-nowrap
                "
              >
                REGISTER INTEREST ↗
              </button>
            </div>

          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default ArenaCta;
