"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Navbar } from "./Navbar";

export interface HeroSectionProps {
  className?: string;
  traderImageSrc?: string;
}

export function HeroSection({
  className = "",
  traderImageSrc = "/images/trader-hero.jpg",
}: HeroSectionProps) {
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
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6 flex flex-col justify-center py-10 sm:py-12 lg:py-8 pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-5 sm:pr-8 lg:pr-6 z-20">
            
            {/* 1. Four-line stacked headline, huge, tight line-height */}
            <h1 className="font-display uppercase tracking-tight leading-[0.84] text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl select-none">
              <span className="block text-[#EFEAE4]">TRADE</span>
              <span className="block gold-metallic-text">GOLD</span>
              <span className="block text-[#EFEAE4]">WITH</span>
              <span className="block text-[#EFEAE4]/30">PRECISION.</span>
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
                href="https://t.me/+ZJ-RRfV9XjM0MWI8"
                target="_blank"
                rel="noopener noreferrer"
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
          {/* RIGHT COLUMN: TRADER PHOTO AREA (UNCROPPED, NATURAL 3:4)  */}
          {/* (Order 1 on mobile, Order 2 on desktop - centered in col) */}
          {/* ========================================================= */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-full min-h-full lg:self-stretch flex items-end justify-center overflow-visible">
            
            {/* Photo + Stickers Container (Rendered height 115% of hero, anchored to bottom center, centered in col) */}
            <div
              className="relative w-full lg:w-auto h-auto lg:h-[115%] flex items-end justify-center origin-bottom"
              style={{
                transformOrigin: "bottom center",
              }}
            >
              
              {/* Soft radial gold glow centered behind his head & shoulders */}
              <div
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

              {/* Masked Photo Container: uncropped, flush to bottom, dissolved edges */}
              <div
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
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
