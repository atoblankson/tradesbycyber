import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Sticker } from "./Sticker";
import { getWhatsAppUrl } from "@/lib/contact";

export interface CtaSectionProps {
  className?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function CtaSection({
  className = "",
  headlineLine1 = "STOP GUESSING.",
  headlineLine2 = "START TRADING.",
  primaryCtaText = "JOIN THE COMMUNITY →",
  primaryCtaHref = "https://t.me/+ZJ-RRfV9XjM0MWI8",
  secondaryCtaText = "BOOK A CALL",
  secondaryCtaHref,
}: CtaSectionProps) {
  const resolvedSecondaryHref = secondaryCtaHref ?? getWhatsAppUrl("cta");
  return (
    <section
      id="contact"
      aria-label="Final Call To Action"
      className={`
        w-full bg-[#EFEAE4] text-[#0A0A0A]
        border-b-2 sm:border-b-[3px] border-[#0A0A0A]
        py-20 sm:py-28 md:py-36 lg:py-44
        relative overflow-hidden select-none
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
      {/* ----------------------------------------------------------- */}
      {/* 4 SCATTERED STICKERS FOR VISUAL CONTINUITY WITH THE HERO     */}
      {/* ----------------------------------------------------------- */}

      {/* 1. Teal Sticker (Top-Left) */}
      <div className="absolute top-8 sm:top-14 md:top-20 left-4 sm:left-10 md:left-16 lg:left-24 z-20">
        <Sticker
          color="teal"
          rotation={-6}
          size="md"
          className="text-xs sm:text-sm font-black shadow-[3px_3px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
        >
          <span className="flex items-center gap-1.5">
            <span>⚡</span>
            <span>NEXT SESSION STARTS TODAY</span>
          </span>
        </Sticker>
      </div>

      {/* 2. Pink Sticker (Top-Right) */}
      <div className="absolute top-10 sm:top-16 md:top-24 right-4 sm:right-10 md:right-16 lg:right-28 z-20">
        <Sticker
          color="pink"
          rotation={5}
          size="md"
          className="text-xs sm:text-sm font-black shadow-[3px_3px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
        >
          NO RETAIL INDICATORS
        </Sticker>
      </div>

      {/* 3. Yellow Sticker (Bottom-Left) */}
      <div className="absolute bottom-8 sm:bottom-14 md:bottom-20 left-4 sm:left-12 md:left-20 lg:left-32 z-20">
        <Sticker
          color="yellow"
          rotation={-4}
          size="md"
          className="text-xs sm:text-sm font-black shadow-[3px_3px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
        >
          STRICT 0.5% RISK RULE
        </Sticker>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* CENTERED CONTENT: MASSIVE HEADLINE + 2 BUTTONS              */}
      {/* ----------------------------------------------------------- */}
      <Container size="lg" className="relative z-10 flex flex-col items-center text-center">
        {/* Massive Condensed Headline (Loud & Full-Bleed) */}
        <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11.5rem] tracking-tight leading-[0.84] text-[#0A0A0A] max-w-6xl mx-auto">
          {headlineLine1}
          <br />
          {headlineLine2}
        </h2>

        {/* Supporting subheadline */}
        <p className="mt-6 sm:mt-8 font-sans text-base sm:text-lg md:text-xl text-[#0A0A0A]/80 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of funded traders executing institutional liquidity and price action.
          No hype, no indicators—just repeatable market edge.
        </p>

        {/* Two Buttons: Black Solid + Outlined */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 w-full sm:w-auto">
          {/* Button 1: "JOIN THE COMMUNITY →" (Solid Black) */}
          <Link
            href={primaryCtaHref}
            target={primaryCtaHref.startsWith("http") ? "_blank" : undefined}
            rel={primaryCtaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="
              w-full sm:w-auto
              bg-[#0A0A0A] text-[#EFEAE4]
              border-2 sm:border-[2.5px] border-[#0A0A0A]
              shadow-[4px_4px_0px_#0A0A0A] sm:shadow-[5px_5px_0px_#0A0A0A]
              hover:bg-[#5ED1C4] hover:text-[#0A0A0A]
              hover:shadow-[6px_6px_0px_#0A0A0A] hover:-translate-y-0.5
              active:translate-y-0.5
              transition-all duration-150
              font-mono font-black uppercase tracking-wider text-sm sm:text-base
              py-4 sm:py-5 px-8 sm:px-10 rounded-xl
              text-center
            "
          >
            {primaryCtaText}
          </Link>

          {/* Button 2: "BOOK A CALL" (Outlined) */}
          <a
            href={resolvedSecondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full sm:w-auto
              bg-transparent text-[#0A0A0A]
              border-2 sm:border-[2.5px] border-[#0A0A0A]
              shadow-[4px_4px_0px_#0A0A0A] sm:shadow-[5px_5px_0px_#0A0A0A]
              hover:bg-[#F7D417]
              hover:shadow-[6px_6px_0px_#0A0A0A] hover:-translate-y-0.5
              active:translate-y-0.5
              transition-all duration-150
              font-mono font-black uppercase tracking-wider text-sm sm:text-base
              py-4 sm:py-5 px-8 sm:px-10 rounded-xl
              text-center
            "
          >
            {secondaryCtaText}
          </a>
        </div>
      </Container>
    </section>
  );
}

export default CtaSection;
