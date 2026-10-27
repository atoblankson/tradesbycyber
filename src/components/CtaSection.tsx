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
        w-full min-h-screen lg:h-screen lg:max-h-[1050px]
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
      {/* 2-Column Split: Full width on desktop, stacked on mobile */}
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: HEADLINE, DIVIDER, FEATURE, PARAGRAPH, BTNS  */}
        {/* (Order 1 on mobile & desktop - sharing one crisp left edge) */}
        {/* ========================================================= */}
        <div className="order-1 lg:col-span-6 xl:col-span-6 flex flex-col justify-center py-12 sm:py-16 lg:py-10 pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-5 sm:pr-8 lg:pr-6 z-10">
          
          {/* 1. Headline stacked on 4 lines, very large, tight line-height */}
          <h2 className="font-display uppercase tracking-tight leading-[0.84] text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl select-none">
            <span className="block text-[#03FA84]">STOP</span>
            <span className="block text-[#03FA84]">GUESSING.</span>
            <span className="block text-[#03FA84]">START</span>
            <span className="block text-[#03FA84]/40">TRADING.</span>
          </h2>

          {/* 2. Thin horizontal divider line (black fading to transparent) */}
          <div
            className="w-36 sm:w-48 h-[1.5px] my-6 sm:my-7"
            style={{
              background: "linear-gradient(to right, #0A0A0A 0%, rgba(10, 10, 10, 0.35) 60%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* 3. Small feature row: Telegram-style icon in a circle + bold title */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="w-8 h-8 rounded-full border-[1.5px] border-[#0A0A0A] flex items-center justify-center flex-shrink-0 bg-transparent">
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
          <p className="font-sans text-base sm:text-lg leading-relaxed text-[#0A0A0A]/75 max-w-lg mb-5 sm:mb-6">
            Join hundreds of funded traders executing institutional liquidity and price action. No hype, no indicators, just repeatable market edge.
          </p>

          {/* 5. Two short bullet points side by side in small type */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[#0A0A0A]/85 font-medium mb-8 sm:mb-10">
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
                transition-all duration-150
                font-mono font-black uppercase tracking-wider text-xs sm:text-sm
                py-4 px-8 rounded-xl
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
                transition-all duration-150
                font-mono font-black uppercase tracking-wider text-xs sm:text-sm
                py-4 px-8 rounded-xl
                text-center
              "
            >
              {secondaryCtaText}
            </Link>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: LARGE BLEEDING IMAGE AREA (HAND + PHONE)    */}
        {/* (Order 2 on mobile & desktop - bleeding top, right, bot)   */}
        {/* ========================================================= */}
        <div className="order-2 lg:col-span-6 xl:col-span-6 relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-full min-h-full flex items-center justify-center overflow-visible">
          
          {/* Subtle soft shadow / warm tonal ground shift behind the phone (no glow) */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: "radial-gradient(ellipse at 65% 55%, rgba(10, 10, 10, 0.06) 0%, rgba(10, 10, 10, 0.02) 40%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Masked Photo Area: Left edge & bottom fade into cream background */}
          <div
            className="w-full h-full relative z-10 flex items-center justify-center"
            style={{
              WebkitMaskImage: `
                linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 8%, black 22%),
                linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 6%, black 16%)
              `,
              WebkitMaskComposite: "destination-in",
              maskImage: `
                linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 8%, black 22%),
                linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 6%, black 16%)
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
                className="w-full h-full object-cover object-bottom select-none rotate-1"
              />
            ) : (
              /* Dashed placeholder sized exactly where phone cutout sits (no card, no border, no frame) */
              <div className="w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-full border-2 border-dashed border-[#0A0A0A]/30 bg-[#0A0A0A]/[0.03] flex flex-col items-center justify-center p-6 text-center select-none rotate-1">
                {/* Phone Outline Icon */}
                <div className="w-16 h-24 sm:w-20 sm:h-28 rounded-2xl border-2 border-dashed border-[#0A0A0A]/40 flex flex-col items-center justify-between p-2.5 text-[#0A0A0A]/50 mb-3 bg-white/40">
                  <div className="w-6 h-1 rounded-full bg-[#0A0A0A]/30" />
                  <div className="w-8 h-8 rounded-full border border-dashed border-[#0A0A0A]/30 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#0A0A0A]/60 translate-x-[0.5px]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                    </svg>
                  </div>
                  <div className="w-3 h-3 rounded-full border border-[#0A0A0A]/30" />
                </div>
                <span className="font-mono text-sm sm:text-base font-black tracking-widest text-[#0A0A0A] uppercase">
                  HAND + PHONE PHOTO HERE
                </span>
                <span className="font-mono text-xs text-[#0A0A0A]/60 max-w-xs mt-1.5 leading-snug">
                  Cutout of hand holding phone showing Telegram signals. Masked gradient automatically fades left &amp; bottom edges.
                </span>
              </div>
            )}
          </div>

          {/* ----------------------------------------------------------- */}
          {/* 3 STICKERS SCATTERED AROUND & OVERLAPPING IMAGE EDGE        */}
          {/* (Never covering the phone screen; max 2 visible on mobile)  */}
          {/* ----------------------------------------------------------- */}

          {/* 1. Teal: "NEXT SESSION STARTS TODAY" (Top-Left of image edge - visible mobile & desktop) */}
          <div className="absolute top-[8%] sm:top-[12%] -left-3 sm:-left-6 lg:-left-10 z-20">
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

          {/* 2. Yellow: "STRICT 0.5% RISK RULE" (Lower-Left edge - visible mobile & desktop) */}
          <div className="absolute top-[52%] sm:top-[56%] -left-2 sm:-left-5 lg:-left-8 z-20">
            <Sticker
              color="yellow"
              rotation={4}
              size="md"
              className="text-xs sm:text-sm font-black shadow-[3px_3px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
            >
              STRICT 0.5% RISK RULE
            </Sticker>
          </div>

          {/* 3. Lime Circle Badge (Bottom-Right edge - desktop only, hidden on mobile so 2 stickers max) */}
          <div className="absolute bottom-[10%] sm:bottom-[14%] right-4 sm:right-8 lg:right-12 z-20 hidden sm:block">
            <CircleBadge
              text="* TRADED BY CYBER * FOREX DISCIPLINE * "
              badgeBg="lime"
              color="cream"
              rotation={-10}
              size={110}
              hasBorder
              hasShadow
              icon="crosshair"
              className="scale-90 sm:scale-100 md:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default CtaSection;
