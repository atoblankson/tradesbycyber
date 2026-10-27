import React from "react";
import { Container } from "./Container";
import { Sticker, StickerColor } from "./Sticker";

export interface TestimonialItem {
  id: string;
  name: string;
  handle: string;
  resultTag: string;
  stickerColor: StickerColor;
  rotation: number;
  quote: string;
  metric: string;
  date: string;
}

/* =========================================================================
   STUDENT TESTIMONIALS DATA (PLACEHOLDERS)
   6 student quote cards in a masonry layout with varied lengths & sticker tags
   ========================================================================= */
const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    name: "Alex M.",
    handle: "@alextrws",
    resultTag: "FUNDED IN 6 WEEKS",
    stickerColor: "teal",
    rotation: -3,
    quote:
      "Before working with cyber, I was gambling on random EMA crossovers and blowing 50k challenges. His institutional liquidity framework made everything click. The focus on London session manipulation completely changed how I see price. Cleared phase 1 and phase 2 in 6 weeks.",
    metric: "FTMO $100K Funded",
    date: "OCT 2026",
  },
  {
    id: "review-2",
    name: "Marcus K.",
    handle: "@marcus_trades",
    resultTag: "+$18.4K FIRST PAYOUT",
    stickerColor: "yellow",
    rotation: 2.5,
    quote:
      "The risk management module alone is worth 10x the price. I went from revenge trading after every red day to treating this like an actual business with a strict 0.5% max risk cap. Just received my first 5-figure payout.",
    metric: "MFF $200K Account",
    date: "OCT 2026",
  },
  {
    id: "review-3",
    name: "Sarah T.",
    handle: "@sarah.fx",
    resultTag: "PASSED 100K EVALUATION",
    stickerColor: "pink",
    rotation: -2,
    quote:
      "I wasted 2 years on retail YouTube courses that taught chart patterns that always get hunted. Cyber taught me where the banks actually place liquidity pools and how to wait patiently for New York open confirmation. 1-on-1 calls were a complete game changer.",
    metric: "Funded Engineer $100K",
    date: "SEP 2026",
  },
  {
    id: "review-4",
    name: "Daniel R.",
    handle: "@dan_fxtrader",
    resultTag: "1:4.2 AVERAGE R:R",
    stickerColor: "lime",
    rotation: 3,
    quote:
      "The daily pre-market breakdowns in the Discord give you absolute clarity before the London bell rings. No ambiguity, just clean levels and order blocks. My average RR jumped from 1:1.5 to 1:4.2.",
    metric: "Prop Firm Trader",
    date: "SEP 2026",
  },
  {
    id: "review-5",
    name: "Elena V.",
    handle: "@elena_orderflow",
    resultTag: "CONSISTENT PROFITABILITY",
    stickerColor: "orange",
    rotation: -2.5,
    quote:
      "What separates this mentorship is the trading psychology and accountability. Cyber forces you to log every execution in detail. You can't hide your mistakes, and that's exactly why you improve so fast.",
    metric: "Full-Time Trader",
    date: "AUG 2026",
  },
  {
    id: "review-6",
    name: "Liam P.",
    handle: "@liamp_forex",
    resultTag: "QUIT MY 9-TO-5",
    stickerColor: "profit",
    rotation: 2,
    quote:
      "Went from working 50 hours a week to trading 2 hours during London open and closing my laptop. If you want flashy lifestyle reels, look elsewhere. If you want raw data, strict discipline, and actual payouts, this is it.",
    metric: "Private Capital & Funded",
    date: "AUG 2026",
  },
];

export interface TestimonialsSectionProps {
  className?: string;
}

export function TestimonialsSection({ className = "" }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      aria-label="Student Testimonials and Reviews"
      className={`
        w-full bg-gold-glow-tl film-grain text-[#EFEAE4]
        border-y border-[rgba(212,166,42,0.3)]
        py-16 sm:py-24 md:py-32 relative select-none
        ${className}
      `.trim()}
    >
      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[rgba(212,166,42,0.2)]">
          <div>
            <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] text-[#EFEAE4]">
              <span>COMMUNITY </span>
              <span className="gold-metallic-text">WINS.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#A89F8C] max-w-md leading-relaxed">
            Real quotes and milestone payouts from students executing the institutional orderflow framework in live markets.
          </p>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* MASONRY-STYLE GRID OF 6 STUDENT QUOTE CARDS                 */}
        {/* Raised dark background (#14110D), 1px gold border, gold-800 shadow */}
        {/* ----------------------------------------------------------- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid"
            >
              <article className="
                relative flex flex-col justify-between
                bg-[#14110D] border border-[#B8871B]/35
                rounded-2xl p-6 sm:p-7
                shadow-[4px_4px_0px_#6B4F12]
                hover:border-[#D4A62A]/60 transition-colors
              ">
                {/* Result Tag as Rotated Sticker (Keeps original colorful palette) */}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <Sticker
                    label={item.resultTag}
                    color={item.stickerColor}
                    rotation={item.rotation}
                    size="sm"
                    className="font-mono text-[11px] font-black shadow-[2px_2px_0px_#0B0A08] border-2 border-[#0B0A08]"
                  />
                  <span className="font-mono text-[10px] text-[#A89F8C]">
                    {item.date}
                  </span>
                </div>

                {/* Quote Text in Cream for strong contrast */}
                <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#EFEAE4] mb-6 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Author Info & Metric Bar */}
                <div className="pt-4 border-t border-[rgba(212,166,42,0.18)] flex items-center justify-between">
                  {/* Avatar Initial + Student Name/Handle */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EFEAE4] text-[#0B0A08] font-display text-base font-black flex items-center justify-center select-none">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-sans text-sm font-bold text-[#EFEAE4] leading-tight flex items-center gap-1.5">
                        <span>{item.name}</span>
                        <span className="text-[#3DDC97] text-xs" title="Verified Trader">✓</span>
                      </div>
                      <span className="font-mono text-[11px] text-[#A89F8C] leading-none">
                        {item.handle}
                      </span>
                    </div>
                  </div>

                  {/* Prop Firm / Metric Badge in Gold Accent */}
                  <span className="font-mono text-[10px] text-[#E8C766] uppercase tracking-wider font-semibold bg-[#D4A62A]/10 px-2 py-1 rounded border border-[#D4A62A]/30">
                    {item.metric}
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
