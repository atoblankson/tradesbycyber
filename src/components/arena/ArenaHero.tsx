"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "../Container";
import { Sticker } from "../Sticker";
import { EASING } from "@/lib/motion";

export interface ArenaHeroProps {
  onOpenModal: (contest?: string) => void;
}

export function ArenaHero({ onOpenModal }: ArenaHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="arena-hero"
      data-theme="dark"
      aria-label="Trading Arena Hero"
      className="w-full bg-[#0B0A08] text-[#EFEAE4] relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-[rgba(212,166,42,0.25)] select-none"
    >
      {/* Background Radial Gold Glow Depth */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 85% 25%, rgba(212, 166, 42, 0.12) 0%, rgba(212, 166, 42, 0.03) 45%, transparent 65%),
            radial-gradient(circle at 10% 80%, rgba(212, 166, 42, 0.06) 0%, transparent 55%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Faint Film Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HERO HEADLINE & ACTIONS                      */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Season 01 Eyebrow Tag */}
            <motion.div
              initial={shouldReduceMotion ? {} : { y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: EASING }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Sticker
                color="yellow"
                rotation={-3}
                size="sm"
                className="font-mono text-[11px] font-black uppercase shadow-[2.5px_2.5px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
              >
                SEASON 01
              </Sticker>
              <span className="font-mono text-xs uppercase tracking-widest text-[#E8C766] font-bold">
                REGISTRATION CONCEPT
              </span>
            </motion.div>

            {/* Stacked Display Headline */}
            <h1 className="font-display uppercase tracking-tight leading-[0.84] text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl select-none mb-6">
              <div className="overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? {} : { y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASING, delay: 0.05 }}
                  className="block text-[#EFEAE4]"
                >
                  TRADE.
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? {} : { y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASING, delay: 0.12 }}
                  className="block gold-metallic-text"
                >
                  COMPETE.
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? {} : { y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASING, delay: 0.19 }}
                  className="block text-[#EFEAE4]/30"
                >
                  CLIMB.
                </motion.span>
              </div>
            </h1>

            {/* Thin Horizontal Divider Line */}
            <motion.div
              initial={shouldReduceMotion ? {} : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: EASING, delay: 0.28 }}
              style={{ transformOrigin: "left" }}
              className="w-32 sm:w-44 h-[1.5px] my-4"
              aria-hidden="true"
            >
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(to right, #D4A62A 0%, rgba(212, 166, 42, 0.3) 60%, transparent 100%)",
                }}
              />
            </motion.div>

            {/* Lead Description */}
            <motion.p
              initial={shouldReduceMotion ? {} : { y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: EASING, delay: 0.35 }}
              className="font-sans text-base sm:text-lg leading-relaxed text-[#A89F8C] max-w-xl my-6"
            >
              A disciplined trading competition for traders who want to test their strategy, sharpen their risk management, and earn their place on the CYBER FX leaderboard.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? {} : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: EASING, delay: 0.42 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-2"
            >
              {/* Primary Button */}
              <button
                type="button"
                onClick={() => onOpenModal("Demo Trading Championship")}
                className="
                  inline-flex items-center justify-center
                  gold-metallic-bg text-[#0B0A08]
                  font-mono font-black uppercase text-xs sm:text-sm tracking-wider
                  px-8 sm:px-9 py-4 rounded-full
                  shadow-[3px_3px_0px_#6B4F12]
                  hover:-translate-y-0.5 hover:brightness-105 active:translate-y-[1px]
                  transition-all duration-200 text-center cursor-pointer
                "
              >
                JOIN A CONTEST →
              </button>

              {/* Secondary Anchor Button */}
              <a
                href="#leaderboard"
                className="
                  inline-flex items-center justify-center
                  bg-transparent border border-[#D4A62A]/60 text-[#EFEAE4]
                  hover:bg-[#D4A62A]/10 hover:border-[#E8C766] hover:brightness-105
                  font-mono font-bold uppercase text-xs sm:text-sm tracking-wider
                  px-7 sm:px-8 py-4 rounded-full
                  shadow-[3px_3px_0px_#6B4F12]
                  hover:-translate-y-0.5 active:translate-y-[1px]
                  transition-all duration-200 text-center
                "
              >
                VIEW LEADERBOARD ↓
              </a>
            </motion.div>

            {/* Micro Specs */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASING, delay: 0.5 }}
              className="font-mono text-[11px] text-[#A89F8C]/70 mt-6 tracking-wide"
            >
              MT5 • Free entry • Demo competition uses virtual funds • Results subject to verification
            </motion.p>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: FEATURED ARENA CARD PREVIEW                 */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASING, delay: 0.25 }}
              className="w-full max-w-md bg-[#14110D] border-2 border-[#D4A62A]/40 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#6B4F12] relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 pb-5 border-b border-[rgba(212,166,42,0.2)]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#E8C766] font-black flex items-center gap-1.5">
                  <span>⚡</span>
                  <span>DEMO CHAMPIONSHIP</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#3DDC97]/15 border border-[#3DDC97]/30 text-[#3DDC97] font-mono text-[10px] font-black tracking-wider uppercase">
                  OPEN FOR SIGN-UPS*
                </span>
              </div>

              {/* Big Duration Metric */}
              <div className="py-6">
                <div className="font-display uppercase tracking-tight text-5xl sm:text-6xl text-[#EFEAE4]">
                  7 <span className="gold-metallic-text">DAYS</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#A89F8C] mt-2 leading-relaxed">
                  One week. One standard demo balance. One public leaderboard.
                </p>
              </div>

              {/* 3 Chunky Stats Grid */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 py-4 border-t border-b border-[rgba(212,166,42,0.15)] text-left">
                <div className="p-3 rounded-xl bg-[#0B0A08] border border-[rgba(212,166,42,0.2)]">
                  <strong className="block font-display text-xl sm:text-2xl text-[#EFEAE4]">
                    $10K
                  </strong>
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-[#A89F8C] mt-0.5 leading-tight">
                    Virtual Starting Balance
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0A08] border border-[rgba(212,166,42,0.2)]">
                  <strong className="block font-display text-xl sm:text-2xl text-[#EFEAE4]">
                    7 DAYS
                  </strong>
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-[#A89F8C] mt-0.5 leading-tight">
                    Contest Length
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0A08] border border-[rgba(212,166,42,0.2)]">
                  <strong className="block font-display text-xl sm:text-2xl gold-metallic-text">
                    $500
                  </strong>
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-[#A89F8C] mt-0.5 leading-tight">
                    Illustrative Prize Pool*
                  </span>
                </div>
              </div>

              {/* CTA Inside Card */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onOpenModal("Demo Trading Championship")}
                  className="
                    w-full py-3.5 px-5 rounded-xl
                    gold-metallic-bg text-[#0B0A08]
                    font-mono font-black uppercase text-xs tracking-wider
                    shadow-[3px_3px_0px_#6B4F12]
                    hover:-translate-y-0.5 hover:brightness-105 active:translate-y-[1px]
                    transition-all duration-200 text-center cursor-pointer
                  "
                >
                  REGISTER INTEREST ↗
                </button>
              </div>

              {/* Asterisk Disclaimer Note */}
              <p className="font-mono text-[10px] text-[#A89F8C]/60 mt-4 leading-relaxed">
                *Proposed sample terms and prize pool. Not live registration or a funded prize commitment.
              </p>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default ArenaHero;
