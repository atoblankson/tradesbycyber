import React from "react";
import { Sticker } from "./Sticker";
import { CircleBadge } from "./CircleBadge";

export interface HeroGridPanelProps {
  className?: string;
}

export function HeroGridPanel({ className = "" }: HeroGridPanelProps) {
  return (
    <div className={`w-full relative mt-10 sm:mt-14 md:mt-18 ${className}`}>
      {/* Cream Chart-Grid Panel with Curved Semicircle Right Edge bleeding off the bottom */}
      <div
        className="
          relative w-full
          h-[480px] sm:h-[540px] md:h-[600px] lg:h-[660px]
          bg-[#EFEAE4] text-[#0A0A0A]
          rounded-tr-[160px] sm:rounded-tr-[240px] md:rounded-tr-[320px] lg:rounded-tr-[380px]
          rounded-tl-none rounded-b-none
          overflow-hidden select-none
        "
        style={{
          backgroundSize: "52px 52px",
          backgroundImage: `
            linear-gradient(to right, rgba(10, 10, 10, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(10, 10, 10, 0.08) 1px, transparent 1px)
          `,
        }}
      >
        {/* Subtle decorative grid coordinate markers in the corners */}
        <div className="absolute top-4 left-6 font-mono text-[10px] tracking-widest text-[#0A0A0A]/35 uppercase hidden sm:block">
          GRID: LONDON / NY SESSION // 0.01R
        </div>

        {/* ----------------------------------------------------------- */}
        {/* CENTERED TRADER CUTOUT PHOTO PLACEHOLDER                    */}
        {/* ----------------------------------------------------------- */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 flex flex-col items-center justify-end">
          <div className="
            w-60 sm:w-72 md:w-80 lg:w-96
            h-[340px] sm:h-[400px] md:h-[480px] lg:h-[530px]
            border-2 border-dashed border-[#0A0A0A]/40
            bg-[rgba(10,10,10,0.03)]
            rounded-t-[32px] sm:rounded-t-[40px]
            border-b-0
            flex flex-col items-center justify-center gap-3
            p-6 text-center select-none shadow-[0_-8px_24px_rgba(10,10,10,0.04)]
          ">
            {/* Minimalist User Cutout Silhouette Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-dashed border-[#0A0A0A]/40 flex items-center justify-center text-[#0A0A0A]/40">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8"
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
            <span className="font-mono text-xs sm:text-sm font-black tracking-widest text-[#0A0A0A]/70 uppercase">
              PHOTO HERE
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#0A0A0A]/50 max-w-[200px] leading-tight">
              Trader Cutout Silhouette (Bleeding off bottom)
            </span>
          </div>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* SCATTERED STICKERS AROUND THE TRADER PLACEHOLDER            */}
        {/* ----------------------------------------------------------- */}

        {/* 1. Teal Circle: "RISK MANAGEMENT / PROTECT YOUR CAPITAL" */}
        {/* Desktop only (hidden on mobile to reduce to 4 stickers) */}
        <div className="absolute top-6 sm:top-10 md:top-14 left-4 sm:left-10 md:left-14 lg:left-24 z-20 hidden md:block">
          <Sticker
            color="teal"
            shape="circle"
            rotation={-7}
            className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 p-4 text-center cursor-default hover:scale-105 transition-transform"
          >
            {/* 2 eye / dot icons like reference */}
            <div className="flex gap-1.5 mb-1.5">
              <span className="w-2.5 h-2.5 bg-[#0A0A0A] rounded-full inline-block" />
              <span className="w-2.5 h-2.5 bg-[#0A0A0A] rounded-full inline-block" />
            </div>
            <span className="font-display text-base md:text-lg lg:text-xl leading-[0.9] tracking-tight block">
              RISK
            </span>
            <span className="font-display text-base md:text-lg lg:text-xl leading-[0.9] tracking-tight block">
              MANAGEMENT
            </span>
            <span className="font-mono text-[9px] md:text-[10px] leading-tight tracking-wider text-[#0A0A0A]/85 mt-1.5 block">
              PROTECT YOUR
              <br />
              CAPITAL
            </span>
          </Sticker>
        </div>

        {/* 2. Yellow Sticker: "XAU/USD GOLD SETUPS" */}
        {/* Visible on both Mobile & Desktop */}
        <div className="absolute top-[18%] sm:top-[22%] md:top-[42%] left-3 sm:left-6 md:left-10 lg:left-16 z-20">
          <Sticker
            color="yellow"
            rotation={-4}
            size="md"
            className="text-xs sm:text-sm md:text-base cursor-default hover:scale-105 transition-transform"
          >
            <span className="flex items-center gap-1.5">
              <span className="font-mono text-xs">⚡</span>
              <span>XAU/USD GOLD SETUPS</span>
            </span>
          </Sticker>
        </div>

        {/* 3. Orange Sticker: "LONDON & NY SESSIONS" */}
        {/* Visible on both Mobile & Desktop */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-3 sm:left-8 md:left-16 lg:left-24 z-20">
          <Sticker
            color="orange"
            rotation={-8}
            size="md"
            className="text-xs sm:text-sm md:text-base cursor-default hover:scale-105 transition-transform"
          >
            <span className="flex items-center gap-1.5">
              <span>LONDON &amp; NY SESSIONS</span>
              <span className="font-bold">→</span>
            </span>
          </Sticker>
        </div>

        {/* 4. Pink Sticker: "PRICE ACTION © ENTRIES" */}
        {/* Visible on both Mobile & Desktop */}
        <div className="absolute top-[12%] sm:top-[16%] md:top-[26%] right-3 sm:right-10 md:right-28 lg:right-44 z-20">
          <Sticker
            color="pink"
            rotation={-5}
            size="md"
            className="text-xs sm:text-sm md:text-base cursor-default hover:scale-105 transition-transform"
          >
            PRICE ACTION © ENTRIES
          </Sticker>
        </div>

        {/* 5. Teal Rotated Rectangle: "PROP FIRM FUNDED ©26" */}
        {/* Desktop only (hidden on mobile to reduce to 4 stickers) */}
        <div className="absolute top-[48%] sm:top-[46%] md:top-[48%] right-2 sm:right-6 md:right-8 lg:right-16 z-20 hidden md:block">
          <Sticker
            color="teal"
            rotation={-13}
            size="md"
            className="text-xs sm:text-sm md:text-base cursor-default hover:scale-105 transition-transform"
          >
            <span className="flex items-center gap-1.5">
              <span>PROP FIRM FUNDED ©26</span>
              <span className="font-mono text-xs">★</span>
            </span>
          </Sticker>
        </div>

        {/* 6. Lime Circle Badge: "* LIVE TRADE BREAKDOWNS * LIVE TRADE BREAKDOWNS" */}
        {/* Visible on both Mobile & Desktop (overlapping the bottom right curve) */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 right-4 sm:right-10 md:right-20 lg:right-32 z-20">
          <CircleBadge
            text="* LIVE TRADE BREAKDOWNS * LIVE TRADE BREAKDOWNS "
            badgeBg="lime"
            color="cream"
            rotation={-15}
            size={120}
            hasBorder
            hasShadow
            icon="globe"
            className="scale-90 sm:scale-100 md:scale-110 lg:scale-115 cursor-default hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroGridPanel;
