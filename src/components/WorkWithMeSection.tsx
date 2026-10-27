import React from "react";
import { Container } from "./Container";
import { Sticker } from "./Sticker";

export interface OfferCard {
  id: string;
  title: string;
  badge?: string;
  price: string;
  frequency: string;
  description: string;
  bullets: [string, string, string];
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
}

/* =========================================================================
   OFFER CARDS DATA (PLACEHOLDERS)
   3 pricing and engagement tiers for Tradedbycyber
   ========================================================================= */
const OFFERS: OfferCard[] = [
  {
    id: "community",
    title: "COMMUNITY / SIGNALS",
    badge: "DAILY ACCESS",
    // PLACEHOLDER PRICE: Replace with actual community subscription rate
    price: "$99",
    frequency: "/ month",
    description: "Daily trade alerts, live session markups, and active peer review.",
    bullets: [
      "Real-time London & NY session alerts with defined entry, stop loss, and targets",
      "Daily pre-market video breakdowns analyzing institutional liquidity & bias",
      "Private Discord access with active trade markup channels and weekly group Q&A",
    ],
    buttonText: "JOIN THE COMMUNITY",
    buttonHref: "#contact",
    isPopular: false,
  },
  {
    id: "mentorship",
    title: "MENTORSHIP (1-ON-1)",
    badge: "PRIVATE APPRENTICESHIP",
    // PLACEHOLDER PRICE: Replace with actual private 1-on-1 coaching rate
    price: "$1,499",
    frequency: "/ quarter",
    description: "Direct personal mentorship to build a repeatable, systematic institutional edge.",
    bullets: [
      "Bi-weekly private 1-on-1 video calls with in-depth personal trade journal reviews",
      "Custom risk management playbook engineered around your time zone and capital",
      "Direct priority DM access for real-time setup questions during active sessions",
    ],
    buttonText: "APPLY FOR MENTORSHIP",
    buttonHref: "#contact",
    isPopular: true, // Middle highlighted card
  },
  {
    id: "course",
    title: "TRADING COURSE",
    badge: "SELF-PACED PLAYBOOK",
    // PLACEHOLDER PRICE: Replace with actual video course pricing
    price: "$499",
    frequency: "one-time",
    description: "Step-by-step institutional curriculum from market structure to execution.",
    bullets: [
      "40+ modular HD video lessons breaking down liquidity, order blocks, and supply/demand",
      "Downloadable Notion trade journal systems, risk calculators, and rule checklists",
      "Lifetime access to all future course updates and recorded masterclass archives",
    ],
    buttonText: "GET INSTANT ACCESS",
    buttonHref: "#contact",
    isPopular: false,
  },
];

export interface WorkWithMeSectionProps {
  className?: string;
}

export function WorkWithMeSection({ className = "" }: WorkWithMeSectionProps) {
  return (
    <section
      id="mentorship"
      aria-label="Work With Me Offerings"
      className={`
        w-full bg-[#EFEAE4] text-[#0A0A0A]
        border-b-2 sm:border-b-[3px] border-[#0A0A0A]
        py-16 sm:py-24 md:py-32 select-none
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
      <Container size="lg">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.88] text-[#03FA84]">
            LEVEL UP YOUR EDGE.
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-[#0A0A0A]/75 max-w-xl mx-auto leading-relaxed">
            Stop gambling on retail indicators. Choose your level of access and learn how to trade institutional orderflow with systematic discipline.
          </p>
        </div>

        {/* ----------------------------------------------------------- */}
        {/* 3 OFFER CARDS IN STICKER-CARD STYLE                         */}
        {/* ----------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-8 items-stretch pt-6">
          {OFFERS.map((offer) => {
            const isHighlighted = offer.isPopular;

            return (
              <div
                key={offer.id}
                className={`
                  relative flex flex-col justify-between
                  rounded-2xl p-6 sm:p-8 md:p-9
                  border-2 sm:border-[2.5px] border-[#0A0A0A]
                  ${
                    isHighlighted
                      ? "bg-[#FFFFFF] shadow-[7px_7px_0px_#0A0A0A] sm:shadow-[8px_8px_0px_#0A0A0A] lg:-translate-y-4 ring-2 ring-[#0A0A0A]"
                      : "bg-[#FFFFFF]/90 shadow-[5px_5px_0px_#0A0A0A] sm:shadow-[6px_6px_0px_#0A0A0A]"
                  }
                  transition-all duration-200 hover:-translate-y-1
                `}
              >
                {/* Highlighted Badge: "MOST POPULAR" Rotated Sticker on Middle Card */}
                {isHighlighted && (
                  <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-20">
                    <Sticker
                      color="yellow"
                      rotation={-3}
                      size="md"
                      className="text-xs sm:text-sm font-black px-4 py-1.5 shadow-[3px_3px_0px_#0A0A0A] border-2 border-[#0A0A0A]"
                    >
                      ★ MOST POPULAR ★
                    </Sticker>
                  </div>
                )}

                {/* Card Top: Header badge + Title + Description */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] font-black uppercase tracking-wider text-[#0A0A0A]/60">
                      {offer.badge}
                    </span>
                    <span className="font-mono text-xs text-[#0A0A0A]/30">
                      0{OFFERS.indexOf(offer) + 1}
                    </span>
                  </div>

                  <h3 className="font-display uppercase text-3xl sm:text-4xl tracking-tight text-[#03FA84] mb-3 leading-none">
                    {offer.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/70 leading-relaxed mb-6">
                    {offer.description}
                  </p>

                  {/* Price Block */}
                  <div className="py-4 border-y-2 border-[#0A0A0A]/10 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-4xl sm:text-5xl md:text-6xl text-[#0A0A0A] tracking-tight leading-none">
                        {offer.price}
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-[#0A0A0A]/60 font-semibold">
                        {offer.frequency}
                      </span>
                    </div>
                  </div>

                  {/* 3 Bullet Points */}
                  <ul className="space-y-3.5 mb-8">
                    {offer.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-4 h-4 rounded-sm bg-[#0A0A0A] text-[#EFEAE4] flex items-center justify-center font-mono text-[10px] font-bold mt-0.5 select-none">
                          ✓
                        </span>
                        <span className="font-sans text-xs sm:text-sm text-[#0A0A0A]/85 leading-snug">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Black Button with Interactive Neo-brutalist Hover State */}
                <div className="pt-2">
                  <a
                    href={offer.buttonHref}
                    className={`
                      w-full py-4 px-6 rounded-lg
                      font-mono text-xs sm:text-sm font-black uppercase tracking-wider
                      text-center block select-none
                      border-2 border-[#0A0A0A]
                      ${
                        isHighlighted
                          ? "bg-[#0A0A0A] text-[#EFEAE4] shadow-[3px_3px_0px_#0A0A0A] hover:bg-[#5ED1C4] hover:text-[#0A0A0A] hover:shadow-[5px_5px_0px_#0A0A0A]"
                          : "bg-[#0A0A0A] text-[#EFEAE4] shadow-[3px_3px_0px_#0A0A0A] hover:bg-[#F7D417] hover:text-[#0A0A0A] hover:shadow-[5px_5px_0px_#0A0A0A]"
                      }
                      transition-all duration-150 active:translate-y-0.5
                    `}
                  >
                    {offer.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WorkWithMeSection;
