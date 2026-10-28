"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EASING } from "@/lib/motion";

export interface HeroSectionProps {
  className?: string;
  traderImageSrc?: string;
}

export function HeroSection({
  className = "",
  traderImageSrc = "/images/trader-hero.jpg",
}: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      data-theme="dark"
      aria-label="Hero Section"
      className={`
        w-full min-h-screen lg:h-screen lg:max-h-[1050px]
        bg-[#0B0A08] text-[#EFEAE4]
        relative overflow-hidden flex flex-col justify-between
        pt-24 sm:pt-28 lg:pt-24
        select-none
        ${className}
      `.trim()}
    >
      {/* ----------------------------------------------------------- */}
      {/* BACKGROUND DEPTH: RADIAL GOLD GLOW + FILM GRAIN TEXTURE     */}
      {/* ----------------------------------------------------------- */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 35%, rgba(212, 166, 42, 0.09) 0%, rgba(212, 166, 42, 0.02) 45%, transparent 65%),
            radial-gradient(circle at 15% 85%, rgba(212, 166, 42, 0.05) 0%, transparent 55%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Faint film grain overlay (3-4% opacity) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* ----------------------------------------------------------- */}
      {/* MOBILE BACKGROUND PORTRAIT (< lg)                           */}
      {/* Superimposes headline and text directly over the trader     */}
      {/* ----------------------------------------------------------- */}
      <div className="lg:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft radial gold glow behind his head on mobile */}
        <div
          className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(212, 166, 42, 0.22) 0%, rgba(212, 166, 42, 0.06) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* Trader portrait image anchored to top/center */}
        <div className="relative w-full h-full min-h-screen">
          <Image
            src={traderImageSrc}
            alt="Tradesbycyber Lead Forex Trader"
            fill
            priority
            quality={92}
            className="object-cover object-top select-none pointer-events-none"
            style={{
              filter: "saturate(0.92) brightness(0.88) contrast(1.08) hue-rotate(6deg)",
            }}
          />
          {/* Gradients ensuring the headline and text are 100% legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08] via-[#0B0A08]/65 to-[#0B0A08]/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A08]/85 via-transparent to-[#0B0A08]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A08]/75 via-transparent to-[#0B0A08]/40" />
        </div>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* HERO MAIN BODY                                              */}
      {/* ----------------------------------------------------------- */}
      <div className="w-full flex-1 relative z-10 flex flex-col justify-center">
        {/* On Desktop: Full width split; Left column aligns with Container */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HEADLINE, DIVIDER, PARAGRAPH, BUTTONS        */}
          {/* (Overlaid on photo on mobile, Left column on desktop)     */}
          {/* ========================================================= */}
          <div className="relative z-10 w-full lg:col-span-6 xl:col-span-6 flex flex-col justify-center py-10 sm:py-12 lg:py-8 pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-5 sm:pr-8 lg:pr-6">
            
            {/* 1. Four-line stacked headline, huge, tight line-height with masked slide reveals */}
            <h1 className="font-display uppercase tracking-tight leading-[0.84] text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl select-none drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
              <div className="overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? {} : { y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASING, delay: 0 }}
                  className="block text-[#EFEAE4]"
                >
                  TRADE
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? {} : { y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASING, delay: 0.08 }}
                  className="block gold-metallic-text"
                >
                  GOLD
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? {} : { y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASING, delay: 0.16 }}
                  className="block text-[#EFEAE4]"
                >
                  WITH
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? {} : { y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASING, delay: 0.24 }}
                  className="block text-[#EFEAE4]/50 lg:text-[#EFEAE4]/30"
                >
                  PRECISION.
                </motion.span>
              </div>
            </h1>

            {/* 2. Thin horizontal divider line (draws in from left) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASING, delay: 0.35 }}
              style={{ transformOrigin: "left" }}
              className="w-36 sm:w-48 h-[1.5px] my-6 sm:my-7 lg:my-8"
              aria-hidden="true"
            >
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(to right, #6B4F12 0%, rgba(107, 79, 18, 0.4) 60%, transparent 100%)",
                }}
              />
            </motion.div>

            {/* 3. Short paragraph in muted body text (fades up 16px) */}
            <motion.p
              initial={shouldReduceMotion ? {} : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: EASING, delay: 0.45 }}
              className="font-sans text-base sm:text-lg leading-relaxed text-[#A89F8C] max-w-lg mb-8 sm:mb-10"
            >
              A distraction-free home for traders who want to get consistent on gold.{" "}
              <span className="text-[#EFEAE4] font-medium">No fluff. Just results.</span>
            </motion.p>

            {/* 4. Two buttons side by side (fade up 16px with stagger & interactive states) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: EASING, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
            >
              {/* Primary Pill: Metallic Gold Gradient + Dark Text */}
              <Link
                href="https://t.me/+ZJ-RRfV9XjM0MWI8"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full sm:w-auto inline-flex items-center justify-center
                  gold-metallic-bg text-[#0B0A08]
                  font-mono font-black uppercase text-xs sm:text-sm tracking-wider
                  px-7 sm:px-8 py-3.5 sm:py-4 rounded-full
                  shadow-[4px_4px_0px_#6B4F12] hover:shadow-[6px_6px_0px_#6B4F12]
                  hover:-translate-y-0.5 hover:brightness-105 active:translate-y-[1px]
                  transition-all duration-200 text-center
                "
              >
                JOIN THE COMMUNITY →
              </Link>

              {/* Secondary Pill: Transparent + Gold Hairline Border + Cream Text */}
              <Link
                href="#strategy"
                className="
                  w-full sm:w-auto inline-flex items-center justify-center
                  bg-transparent border border-[#D4A62A]/60 text-[#EFEAE4]
                  hover:bg-[#D4A62A]/10 hover:border-[#E8C766] hover:brightness-105
                  font-mono font-bold uppercase text-xs sm:text-sm tracking-wider
                  px-7 sm:px-8 py-3.5 sm:py-4 rounded-full
                  shadow-[3px_3px_0px_#6B4F12]
                  hover:-translate-y-0.5 active:translate-y-[1px]
                  transition-all duration-200 text-center
                "
              >
                BEGINNER? START FREE
              </Link>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: TRADER PHOTO AREA (DESKTOP ONLY)            */}
          {/* ========================================================= */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 relative w-full h-full min-h-full self-stretch items-end justify-center overflow-visible">
            
            {/* Photo Container (Rendered height 115% of hero, anchored to bottom center, centered in col) */}
            <div
              className="relative w-full lg:w-auto h-auto lg:h-[115%] flex items-end justify-center origin-bottom"
              style={{
                transformOrigin: "bottom center",
              }}
            >
              
              {/* Soft radial gold glow centered behind his head & shoulders (fades in) */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: EASING, delay: 0.2 }}
                className="absolute pointer-events-none z-0"
                style={{
                  top: "14%",
                  left: "50%",
                  transform: "translate(-50%, -20%)",
                  width: "560px",
                  height: "560px",
                  background: "radial-gradient(circle at 50% 50%, rgba(212, 166, 42, 0.12) 0%, rgba(212, 166, 42, 0.05) 35%, rgba(212, 166, 42, 0.01) 60%, transparent 75%)",
                }}
                aria-hidden="true"
              />

              {/* Masked Photo Container: uncropped, flush to bottom, dissolved edges (scale 1.03 -> 1 & fade in) */}
              <motion.div
                initial={shouldReduceMotion ? {} : { scale: 1.03, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.0, ease: EASING, delay: 0.2 }}
                className="w-full lg:w-auto h-auto lg:h-full relative z-10 flex items-end justify-center"
                style={{
                  WebkitMaskImage: `
                    linear-gradient(to right, transparent 0%, #000 28%, #000 72%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, #000 22%, #000 100%)
                  `,
                  WebkitMaskComposite: "source-in",
                  maskImage: `
                    linear-gradient(to right, transparent 0%, #000 28%, #000 72%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, #000 22%, #000 100%)
                  `,
                  maskComposite: "intersect",
                }}
              >
                <Image
                  src={traderImageSrc}
                  alt="Tradesbycyber Lead Forex Trader"
                  width={768}
                  height={1024}
                  priority
                  quality={90}
                  className="w-full h-auto lg:w-auto lg:h-full select-none pointer-events-none block"
                  style={{
                    filter: "saturate(0.9) brightness(0.9) contrast(1.05) hue-rotate(8deg)",
                  }}
                />
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
