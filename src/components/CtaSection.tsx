import React from "react";
import Link from "next/link";
import { Sticker } from "./Sticker";
import { CircleBadge } from "./CircleBadge";

export interface CtaSectionProps {
  className?: string;
  phoneImageSrc?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function CtaSection({
  className = "",
  phoneImageSrc,
  primaryCtaText = "JOIN THE COMMUNITY →",
  primaryCtaHref = "#contact",
  secondaryCtaText = "BOOK A CALL",
  secondaryCtaHref = "#contact",
}: CtaSectionProps) {
  return (
    <section
      id="contact"
      aria-label="Final Call To Action"
      className={`
        w-full min-h-screen lg:min-h-[800px] lg:h-screen lg:max-h-[1050px]
        bg-[#EFEAE4] text-[#0A0A0A]
        border-b-2 sm:border-b-[3px] border-[#0A0A0A]
        relative overflow-hidden select-none
        flex flex-col justify-center
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
      {/* Container to enforce exact site-wide alignment and generous padding */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-full flex flex-col justify-center relative z-10 py-12 lg:py-8">
        
        {/* 2-Column Split */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HEADLINE, DIVIDER, FEATURE, PARAGRAPH, BTNS  */}
          {/* (Order 1 on mobile & desktop - sharing one crisp left edge) */}
          {/* ========================================================= */}
          <div className="order-1 lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-start text-left z-10 max-w-xl">
            
            {/* 1. Headline stacked on 4 lines: tight line-height, perfectly scaled to fit */}
            <h2
              className="font-display uppercase tracking-tight leading-[0.86] text-5xl sm:text-6xl md:text-7xl lg:text-[4.25rem] xl:text-[5rem] 2xl:text-[5.5rem] select-none text-neon-green"
              style={{ color: "#03FA84" }}
            >
              <span className="block" style={{ color: "#03FA84" }}>STOP</span>
              <span className="block" style={{ color: "#03FA84" }}>GUESSING.</span>
              <span className="block" style={{ color: "#03FA84" }}>START</span>
              <span className="block opacity-35" style={{ color: "#03FA84" }}>TRADING.</span>
            </h2>

            {/* 2. Thin horizontal divider line (fading to transparent) */}
            <div
              className="w-32 sm:w-44 h-[1.5px] my-5 sm:my-6"
              style={{
                background: "linear-gradient(to right, #0A0A0A 0%, rgba(10, 10, 10, 0.3) 65%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            {/* 3. Small feature row: Telegram-style icon in a circle + bold title */}
            <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
              <div className="w-8 h-8 rounded-full border-[1.5px] border-[#0A0A0A] flex items-center justify-center flex-shrink-0 bg-[#0A0A0A]/5">
                <svg
                  className="w-4 h-4 text-[#0A0A0A] -translate-x-[0.5px] translate-y-[0.5px]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
              </div>
              <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-[#0A0A0A]">
                INSTANT ALERTS &amp; SETUPS
              </span>
            </div>

            {/* 4. Short paragraph in muted dark text */}
            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#0A0A0A]/80 max-w-lg mb-4 sm:mb-5">
              Join hundreds of funded traders executing institutional liquidity and price action. No hype, no indicators, just repeatable market edge.
            </p>

            {/* 5. Two short bullet points side by side in small type */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[#0A0A0A]/85 font-medium mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" aria-hidden="true" />
                <span>Real-time trade setups</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" aria-hidden="true" />
                <span>Daily market analysis</span>
              </div>
            </div>

            {/* 6. Two buttons side by side (sharing the left edge) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
              {/* Primary Button: Solid Black */}
              <Link
                href={primaryCtaHref}
                className="
                  w-full sm:w-auto
                  bg-[#0A0A0A] text-[#EFEAE4]
                  border-2 sm:border-[2.5px] border-[#0A0A0A]
                  shadow-[4px_4px_0px_#0A0A0A] sm:shadow-[5px_5px_0px_#0A0A0A]
                  hover:bg-[#5ED1C4] hover:text-[#0A0A0A]
                  hover:shadow-[6px_6px_0px_#0A0A0A] hover:-translate-y-0.5
                  active:translate-y-0.5
                  transition-all duration-200 ease-out
                  font-mono font-black uppercase tracking-wider text-xs sm:text-sm
                  py-3.5 sm:py-4 px-7 sm:px-8 rounded-xl
                  text-center
                "
              >
                {primaryCtaText}
              </Link>

              {/* Secondary Button: Outlined */}
              <Link
                href={secondaryCtaHref}
                className="
                  w-full sm:w-auto
                  bg-transparent text-[#0A0A0A]
                  border-2 sm:border-[2.5px] border-[#0A0A0A]
                  shadow-[4px_4px_0px_#0A0A0A] sm:shadow-[5px_5px_0px_#0A0A0A]
                  hover:bg-[#F7D417]
                  hover:shadow-[6px_6px_0px_#0A0A0A] hover:-translate-y-0.5
                  active:translate-y-0.5
                  transition-all duration-200 ease-out
                  font-mono font-black uppercase tracking-wider text-xs sm:text-sm
                  py-3.5 sm:py-4 px-7 sm:px-8 rounded-xl
                  text-center
                "
              >
                {secondaryCtaText}
              </Link>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: SIZED PHONE AREA WITH ANCHORED STICKERS     */}
          {/* (Order 2 on mobile & desktop - anchored to bottom right)  */}
          {/* ========================================================= */}
          <div className="order-2 lg:col-span-6 xl:col-span-6 relative w-full h-[460px] sm:h-[540px] lg:h-full min-h-[440px] lg:min-h-[580px] flex items-end justify-center lg:justify-end overflow-visible">
            
            {/* Subtle soft grounding shadow beneath the phone */}
            <div
              className="absolute right-0 bottom-0 w-[420px] h-[420px] pointer-events-none z-0"
              style={{
                background: "radial-gradient(circle at 60% 70%, rgba(10, 10, 10, 0.08) 0%, rgba(10, 10, 10, 0.02) 45%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* SIZED PHONE FRAME CONTAINER (Holds phone cutout + anchored stickers) */}
            <div className="relative w-[300px] sm:w-[350px] md:w-[380px] lg:w-[410px] h-[440px] sm:h-[520px] lg:h-[600px] flex items-end justify-center z-10">
              
              {/* Masked Photo Area: smoothly fades left & bottom edges */}
              <div
                className="w-full h-full relative z-10 flex items-end justify-center"
                style={{
                  WebkitMaskImage: `
                    linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 5%, black 16%),
                    linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 4%, black 14%)
                  `,
                  WebkitMaskComposite: "destination-in",
                  maskImage: `
                    linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 5%, black 16%),
                    linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 4%, black 14%)
                  `,
                  maskComposite: "intersect",
                }}
              >
                {phoneImageSrc ? (
                  /* Real photo cutout when provided */
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={phoneImageSrc}
                    alt="Hand holding phone with Telegram signals channel"
                    className="w-full h-full object-cover object-bottom select-none -rotate-2"
                  />
                ) : (
                  /* Sized Phone Mockup Placeholder: Clean editorial frame */
                  <div className="w-full h-full rounded-[2.5rem] border-2 sm:border-[2.5px] border-dashed border-[#0A0A0A]/40 bg-white/70 shadow-[8px_8px_0px_rgba(10,10,10,0.15)] flex flex-col justify-between p-5 sm:p-6 text-center select-none -rotate-2 backdrop-blur-xs">
                    
                    {/* Top Status & Dynamic Island */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-4 bg-[#0A0A0A]/20 rounded-full mx-auto" />
                      
                      {/* Telegram Channel Header */}
                      <div className="w-full bg-[#0A0A0A]/5 rounded-xl p-2.5 flex items-center gap-2.5 border border-[#0A0A0A]/10">
                        <div className="w-8 h-8 rounded-full bg-[#0A0A0A] text-[#EFEAE4] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                          </svg>
                        </div>
                        <div className="text-left font-mono leading-tight">
                          <span className="block text-xs font-black text-[#0A0A0A]">TRADEDBYCYBER VIP</span>
                          <span className="block text-[10px] text-[#0A0A0A]/50">1,840 members • 142 online</span>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Mock Trade Signal Ticket */}
                    <div className="w-full bg-[#0B0A08] text-[#EFEAE4] rounded-xl p-3 sm:p-4 text-left border border-[rgba(212,166,42,0.3)] shadow-[3px_3px_0px_rgba(10,10,10,0.3)] font-mono space-y-1.5 my-auto">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#3DDC97] font-bold">● XAU/USD BUY LIMIT</span>
                        <span className="text-[#A89F8C]">08:14 GMT</span>
                      </div>
                      <div className="text-xs sm:text-sm font-black text-[#EFEAE4]">
                        ENTRY: 2,724.50
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#A89F8C] flex justify-between">
                        <span>SL: 2,718.00</span>
                        <span className="text-[#3DDC97] font-bold">TP: 2,748.00 (+4.0R)</span>
                      </div>
                    </div>

                    {/* Bottom: Instructional Label */}
                    <div className="space-y-1 pt-2 border-t border-[#0A0A0A]/10">
                      <span className="font-mono text-xs font-black tracking-widest text-[#0A0A0A] uppercase block">
                        HAND + PHONE PHOTO HERE
                      </span>
                      <span className="font-mono text-[10px] text-[#0A0A0A]/60 block leading-tight max-w-[240px] mx-auto">
                        Cutout drops in via phoneImageSrc prop. Smoothly masked at left and bottom edges.
                      </span>
                    </div>

                  </div>
                )}
              </div>

              {/* ----------------------------------------------------------- */}
              {/* 3 STICKERS TIGHTLY ANCHORED AROUND THE PHONE EDGES          */}
              {/* (Overlapping edges nicely; never covering screen center)    */}
              {/* ----------------------------------------------------------- */}

              {/* 1. Teal: "⚡ NEXT SESSION STARTS TODAY" (Overlapping top-left corner) */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-8 lg:-left-12 z-20">
                <Sticker
                  color="teal"
                  rotation={-5}
                  size="md"
                  className="text-xs sm:text-sm font-black shadow-[3px_3px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
                >
                  <span className="flex items-center gap-1.5">
                    <span>⚡</span>
                    <span>NEXT SESSION STARTS TODAY</span>
                  </span>
                </Sticker>
              </div>

              {/* 2. Yellow: "STRICT 0.5% RISK RULE" (Overlapping mid-left bezel) */}
              <div className="absolute top-[48%] sm:top-[50%] -left-5 sm:-left-7 lg:-left-10 z-20">
                <Sticker
                  color="yellow"
                  rotation={4}
                  size="md"
                  className="text-xs sm:text-sm font-black shadow-[3px_3px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
                >
                  STRICT 0.5% RISK RULE
                </Sticker>
              </div>

              {/* 3. Lime Circle Badge (Overlapping bottom-right bezel - desktop only, hidden on mobile for max 2) */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 lg:-right-8 z-20 hidden sm:block">
                <CircleBadge
                  text="* TRADED BY CYBER * FOREX DISCIPLINE * "
                  badgeBg="lime"
                  color="cream"
                  rotation={-10}
                  size={100}
                  hasBorder
                  hasShadow
                  icon="crosshair"
                  className="scale-85 sm:scale-95 md:scale-100"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CtaSection;
