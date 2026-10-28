import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  phoneImageSrc = "/images/cta-phone.jpg",
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
      {/* Scoped CSS for responsive directional mask */}
      <style>{`
        .cta-phone-mask {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 100%);
        }
        @media (min-width: 1024px) {
          .cta-phone-mask {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 18%, black 100%);
            mask-image: linear-gradient(to right, transparent 0%, black 18%, black 100%);
          }
        }
      `}</style>

      {/* Container to enforce exact site-wide alignment and generous padding for left text column */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-full flex flex-col justify-center relative lg:static z-20 pointer-events-none py-12 lg:py-8">
        
        {/* 2-Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HEADLINE, DIVIDER, FEATURE, PARAGRAPH, BTNS  */}
          {/* (Order 1 on mobile & desktop - stays on top, z-20)        */}
          {/* ========================================================= */}
          <div className="order-1 lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-start text-left relative z-20 pointer-events-auto max-w-xl">
            
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
          {/* RIGHT-COLUMN IMAGE: ABSOLUTE ON DESKTOP, STACKED ON MOBILE*/}
          {/* (right: 0, top: 0, height: 100%, width: auto, no crop)   */}
          {/* ========================================================= */}
          <div className="order-2 lg:col-span-6 xl:col-span-6 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-auto w-full h-auto z-10 flex items-center justify-center lg:justify-end pointer-events-none -mx-5 sm:-mx-8 lg:mx-0 mt-8 sm:mt-10 lg:mt-0">
            
            {/* Image + Anchored Stickers Container (Matches exact aspect ratio of image) */}
            <div className="relative w-full lg:w-auto h-auto lg:h-full inline-block">
              
              {/* Masked Photo Container */}
              <div className="w-full lg:w-auto h-auto lg:h-full cta-phone-mask overflow-hidden">
                <Image
                  src={phoneImageSrc || "/images/cta-phone.jpg"}
                  alt="Hand holding phone showing Telegram signals channel"
                  width={1024}
                  height={571}
                  quality={90}
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-auto lg:w-auto lg:h-full select-none pointer-events-none block"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                />
              </div>

              {/* ----------------------------------------------------------- */}
              {/* 3 STICKERS ANCHORED RELATIVE TO THE IMAGE CONTAINER         */}
              {/* (Percentage positions locked to image landmarks)           */}
              {/* ----------------------------------------------------------- */}

              {/* 1. Teal: "⚡ NEXT SESSION STARTS TODAY" (Phone's top-left corner) */}
              <div
                className="absolute z-20 pointer-events-auto"
                style={{
                  top: "9%",
                  left: "36%",
                }}
              >
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

              {/* 2. Yellow: "STRICT 0.5% RISK RULE" (Phone's left edge near thumb) */}
              <div
                className="absolute z-20 pointer-events-auto"
                style={{
                  top: "40%",
                  left: "26%",
                }}
              >
                <Sticker
                  color="yellow"
                  rotation={4}
                  size="md"
                  className="text-xs sm:text-sm font-black shadow-[3px_3px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
                >
                  STRICT 0.5% RISK RULE
                </Sticker>
              </div>

              {/* 3. Lime Circle Badge (Lower right over sleeve) */}
              <div
                className="absolute z-20 pointer-events-auto hidden sm:block"
                style={{
                  top: "70%",
                  left: "78%",
                }}
              >
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
