import React from "react";
import Link from "next/link";

export interface HeroTopProps {
  className?: string;
  headlinePrefix?: string;
  headlineHighlight?: string;
  leftText?: string;
  rightText?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function HeroTop({
  className = "",
  headlinePrefix = "FOREX ",
  headlineHighlight = "TRADER",
  leftText = "Trading the London and New York sessions. Price action, supply and demand, strict risk.",
  rightText = "Disciplined, data-backed, and transparent. I trade so you can learn what actually works, not what looks good on Instagram.",
  ctaText = "JOIN THE COMMUNITY",
  ctaHref = "#community",
}: HeroTopProps) {
  return (
    <section className={`w-full pt-10 sm:pt-14 md:pt-18 lg:pt-20 pb-12 sm:pb-16 ${className}`}>
      {/* Giant Edge-to-Edge Headline with Metallic Gold Highlight on key word */}
      <div className="w-full overflow-hidden select-none">
        <h1 className="font-display uppercase text-[#EFEAE4] text-[13.8vw] sm:text-[13.4vw] md:text-[13vw] lg:text-[12.6vw] xl:text-[12.2vw] 2xl:text-[176px] leading-[0.84] tracking-tight whitespace-nowrap block text-left">
          <span>{headlinePrefix}</span>
          <span className="gold-metallic-text">{headlineHighlight}</span>
        </h1>
      </div>

      {/* Intro Row: Muted body text on dark (#A89F8C) + Gold accent CTA */}
      <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-8 lg:gap-x-12 items-start">
        {/* Left Column */}
        <div className="md:col-span-4 lg:col-span-4">
          <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#A89F8C] max-w-sm">
            {leftText}
          </p>
        </div>

        {/* Right Column */}
        <div className="md:col-span-5 lg:col-span-5">
          <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#A89F8C] max-w-md">
            {rightText}
          </p>
        </div>

        {/* Far Right CTA Link */}
        <div className="md:col-span-3 lg:col-span-3 flex md:justify-end items-start pt-1 md:pt-0">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#EFEAE4] hover:text-[#E8C766] transition-colors group"
          >
            <span className="underline underline-offset-4 decoration-1 decoration-[#D4A62A] group-hover:decoration-[#E8C766]">
              {ctaText}
            </span>
            <span className="text-[#E8C766] transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroTop;
