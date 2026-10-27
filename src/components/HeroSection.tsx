"use client";

import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Navbar } from "./Navbar";

export interface HeroSectionProps {
  className?: string;
  traderImageSrc?: string;
}

export function HeroSection({ className = "", traderImageSrc }: HeroSectionProps) {
  return (
    <section
      aria-label="Hero Section"
      className={`
        w-full min-h-screen lg:h-screen lg:max-h-[1050px]
        bg-[#0B0A08] text-[#EFEAE4]
        relative overflow-hidden flex flex-col justify-between
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
      {/* NAVBAR (Transparent at top of hero)                         */}
      {/* ----------------------------------------------------------- */}
      <div className="w-full relative z-30 flex-shrink-0">
        <Container size="lg">
          <Navbar />
        </Container>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* HERO MAIN BODY: 2 COLUMNS (STACKED ON MOBILE)               */}
      {/* ----------------------------------------------------------- */}
      <div className="w-full flex-1 relative z-10 flex flex-col justify-center">
        {/* On Desktop: Full width split; Left column aligns with Container */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HEADLINE, DIVIDER, PARAGRAPH, BUTTONS        */}
          {/* (Order 2 on mobile, Order 1 on desktop)                   */}
          {/* ========================================================= */}
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6 flex flex-col justify-center py-10 sm:py-12 lg:py-8 pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-5 sm:pr-8 lg:pr-6">
            
            {/* 1. Four-line stacked headline, huge, tight line-height */}
            <h1 className="font-display uppercase tracking-tight leading-[0.84] text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl select-none">
              <span className="block text-[#EFEAE4]">TRADE</span>
              <span className="block gold-metallic-text">GOLD</span>
              <span className="block text-[#EFEAE4]">WITH</span>
              <span className="block text-[#03FA84]">PRECISION.</span>
            </h1>

            {/* 2. Thin horizontal divider line (gold-800 to transparent fade) */}
            <div
              className="w-36 sm:w-48 h-[1.5px] my-6 sm:my-7 lg:my-8"
              style={{
                background: "linear-gradient(to right, #6B4F12 0%, rgba(107, 79, 18, 0.4) 60%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            {/* 3. Short paragraph in muted body text, with last sentence brighter */}
            <p className="font-sans text-base sm:text-lg leading-relaxed text-[#A89F8C] max-w-lg mb-8 sm:mb-10">
              A distraction-free home for traders who want to get consistent on gold.{" "}
              <span className="text-[#EFEAE4] font-medium">No fluff. Just results.</span>
            </p>

            {/* 4. Two buttons side by side (sharing left edge) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
              {/* Primary Pill: Metallic Gold Gradient + Dark Text */}
              <Link
                href="#contact"
                className="
                  w-full sm:w-auto inline-flex items-center justify-center
                  gold-metallic-bg text-[#0B0A08]
                  font-mono font-black uppercase text-xs sm:text-sm tracking-wider
                  px-7 sm:px-8 py-3.5 sm:py-4 rounded-full
                  shadow-[4px_4px_0px_#6B4F12] hover:shadow-[6px_6px_0px_#6B4F12]
                  hover:-translate-y-0.5 active:translate-y-0
                  transition-all text-center
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
                  hover:bg-[#D4A62A]/10 hover:border-[#E8C766]
                  font-mono font-bold uppercase text-xs sm:text-sm tracking-wider
                  px-7 sm:px-8 py-3.5 sm:py-4 rounded-full
                  shadow-[3px_3px_0px_#6B4F12]
                  hover:-translate-y-0.5 active:translate-y-0
                  transition-all text-center
                "
              >
                BEGINNER? START FREE
              </Link>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: TRADER PHOTO AREA (BLEEDING TOP, RIGHT, BOT)*/}
          {/* (Order 1 on mobile, Order 2 on desktop)                   */}
          {/* ========================================================= */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-full min-h-full flex items-center justify-center overflow-visible">
            
            {/* Radial Gold Glow behind the photo */}
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                background: "radial-gradient(circle at 55% 50%, rgba(212, 166, 42, 0.1) 0%, rgba(212, 166, 42, 0.03) 45%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Masked Photo Area: Left & bottom edge fade into warm black */}
            <div
              className="w-full h-full relative z-10 flex items-center justify-center"
              style={{
                WebkitMaskImage: `
                  linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 8%, black 20%),
                  linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 6%, black 16%)
                `,
                WebkitMaskComposite: "destination-in",
                maskImage: `
                  linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 8%, black 20%),
                  linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 6%, black 16%)
                `,
                maskComposite: "intersect",
              }}
            >
              {traderImageSrc ? (
                /* Real photo when provided */
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={traderImageSrc}
                  alt="Tradedbycyber Lead Forex Trader"
                  className="w-full h-full object-cover object-top select-none"
                />
              ) : (
                /* Dashed placeholder sized exactly where photo sits (no card, no border, no frame) */
                <div className="w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-full border-2 border-dashed border-[#D4A62A]/40 bg-[rgba(20,17,13,0.5)] flex flex-col items-center justify-center p-6 text-center select-none">
                  {/* Silhouette Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-[#D4A62A]/50 flex items-center justify-center text-[#D4A62A]/60 mb-3">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <span className="font-mono text-sm sm:text-base font-black tracking-widest text-[#EFEAE4] uppercase">
                    TRADER PHOTO HERE
                  </span>
                  <span className="font-mono text-xs text-[#A89F8C] max-w-xs mt-1.5 leading-snug">
                    Full photo or transparent cutout. Masked gradient automatically fades left &amp; bottom edges.
                  </span>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
