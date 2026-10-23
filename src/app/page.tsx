import { Sticker, CircleBadge, Container } from "@/components";

export default function Home() {
  const stickers = [
    { label: "EUR/USD +62 PIPS", color: "teal", rotation: -3, desc: "Teal (#5ED1C4)" },
    { label: "RISK 0.5% MAX", color: "pink", rotation: 2, desc: "Pink (#F0527E)" },
    { label: "NEW YORK OPEN", color: "yellow", rotation: -2, desc: "Yellow (#F7D417)" },
    { label: "ORDER BLOCK", color: "orange", rotation: 3.5, desc: "Orange (#FF8A1F)" },
    { label: "INSTITUTIONAL FLOW", color: "lime", rotation: -1.5, desc: "Lime (#A6E36E)" },
    { label: "+$14,250 PROFIT", color: "profit", rotation: 2.5, desc: "Profit Green (#10B981)" },
    { label: "-1.0R STOPPED", color: "loss", rotation: -3, desc: "Loss Red (#EF4444)" },
    { label: "TRADING JOURNAL", color: "cream", rotation: 1.5, desc: "Cream (#EFEAE4)" },
    { label: "CYBER PROTOCOL", color: "black", rotation: -2, desc: "Black (#0A0A0A)" },
  ];

  const palette = [
    { name: "--black", hex: "#0A0A0A", bgClass: "bg-[#0A0A0A] border border-[rgba(239,234,228,0.2)]" },
    { name: "--cream", hex: "#EFEAE4", bgClass: "bg-[#EFEAE4] text-[#0A0A0A]" },
    { name: "--teal", hex: "#5ED1C4", bgClass: "bg-[#5ED1C4] text-[#0A0A0A]" },
    { name: "--pink", hex: "#F0527E", bgClass: "bg-[#F0527E] text-[#0A0A0A]" },
    { name: "--yellow", hex: "#F7D417", bgClass: "bg-[#F7D417] text-[#0A0A0A]" },
    { name: "--orange", hex: "#FF8A1F", bgClass: "bg-[#FF8A1F] text-[#0A0A0A]" },
    { name: "--lime", hex: "#A6E36E", bgClass: "bg-[#A6E36E] text-[#0A0A0A]" },
    { name: "--profit", hex: "#10B981", bgClass: "bg-[#10B981] text-[#0A0A0A]" },
    { name: "--loss", hex: "#EF4444", bgClass: "bg-[#EF4444] text-[#EFEAE4]" },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#EFEAE4] py-12 md:py-20">
      <Container withGridLines className="space-y-16">
        
        {/* Brand Foundation Header */}
        <div className="border-b border-[rgba(239,234,228,0.15)] pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5ED1C4] bg-[#5ED1C4]/10 border border-[#5ED1C4]/30 px-3 py-1 rounded">
              Phase 01 • Foundation Setup
            </span>
            <span className="font-mono text-xs text-[#EFEAE4]/60 tracking-wider">
              TRADEDBYCYBER.COM
            </span>
          </div>

          <h1 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-[#EFEAE4]">
            TRADEDBYCYBER
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#EFEAE4]/75 max-w-2xl font-sans font-light">
            Neo-brutalist editorial foundation for high-conviction forex trading.
            Condensed typography, cream-on-black contrast, grid-line panels, and tactile stickers.
          </p>
        </div>

        {/* 1. Sticker Component Demo */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-[rgba(239,234,228,0.15)] pb-3">
            <h2 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-[#EFEAE4]">
              &lt;Sticker /&gt; Component Showcase
            </h2>
            <span className="font-mono text-xs text-[#EFEAE4]/50">
              Rotated • Rounded Rectangle • Thick Sans
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-8 bg-[#0A0A0A] border border-[rgba(239,234,228,0.12)] rounded-lg">
            {stickers.map((stk) => (
              <div
                key={stk.color}
                className="flex flex-col items-start justify-center p-6 bg-[rgba(239,234,228,0.02)] border border-[rgba(239,234,228,0.06)] rounded min-h-[120px]"
              >
                <div className="py-3">
                  <Sticker
                    label={stk.label}
                    color={stk.color}
                    rotation={stk.rotation}
                    size="md"
                  />
                </div>
                <span className="mt-4 font-mono text-[11px] text-[#EFEAE4]/50">
                  {stk.desc} • rotation: {stk.rotation}°
                </span>
              </div>
            ))}
          </div>

          {/* Sticker Sizes & Shapes Demo */}
          <div className="p-6 bg-[#0A0A0A] border border-[rgba(239,234,228,0.12)] rounded-lg flex flex-wrap items-center gap-6">
            <div className="flex flex-col gap-1 mr-4">
              <span className="font-mono text-xs uppercase text-[#EFEAE4]/70 font-bold">Variations:</span>
              <span className="font-mono text-[11px] text-[#EFEAE4]/40">Sizes &amp; pill shapes</span>
            </div>
            <Sticker label="SMALL SIZE" color="teal" size="sm" rotation={-2} />
            <Sticker label="MEDIUM SIZE" color="yellow" size="md" rotation={1.5} />
            <Sticker label="LARGE SIZE" color="pink" size="lg" rotation={-3} />
            <Sticker label="PILL SHAPE" color="lime" shape="pill" size="md" rotation={2} />
          </div>
        </section>

        {/* 2. CircleBadge Component Demo */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-[rgba(239,234,228,0.15)] pb-3">
            <h2 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-[#EFEAE4]">
              &lt;CircleBadge /&gt; Component
            </h2>
            <span className="font-mono text-xs text-[#EFEAE4]/50">
              Curved TextPath • SVG Vector • Rotation Placeholder
            </span>
          </div>

          <div className="p-8 md:p-12 bg-[#0A0A0A] border border-[rgba(239,234,228,0.12)] rounded-lg flex flex-wrap items-center justify-around gap-8">
            <div className="flex flex-col items-center gap-3">
              <CircleBadge
                text="• TRADED BY CYBER • FOREX EDGE • ORDERFLOW •"
                size={150}
                color="cream"
              />
              <span className="font-mono text-xs text-[#EFEAE4]/60">Default Cream Badge</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <CircleBadge
                text="• INSTITUTIONAL EXECUTION • RISK MANAGEMENT •"
                size={150}
                color="teal"
              />
              <span className="font-mono text-xs text-[#EFEAE4]/60">Teal Accent Badge</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <CircleBadge
                text="• HIGH CONVICTION • DISCIPLINE FIRST •"
                size={150}
                color="yellow"
              />
              <span className="font-mono text-xs text-[#EFEAE4]/60">Yellow Accent Badge</span>
            </div>
          </div>
        </section>

        {/* 3. CSS Variables & Theme Verification */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-[rgba(239,234,228,0.15)] pb-3">
            <h2 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-[#EFEAE4]">
              CSS Variables &amp; Core Palette
            </h2>
            <span className="font-mono text-xs text-[#EFEAE4]/50">
              Variables ready for section builds
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {palette.map((c) => (
              <div
                key={c.name}
                className="p-3 bg-[rgba(239,234,228,0.03)] border border-[rgba(239,234,228,0.08)] rounded flex flex-col gap-2"
              >
                <div className={`h-12 w-full rounded ${c.bgClass} flex items-center justify-center font-mono text-xs font-bold`}>
                  {c.hex}
                </div>
                <div className="font-mono text-xs text-[#EFEAE4]/90 font-medium">{c.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Typography Matrix */}
        <section className="space-y-6 pb-8">
          <div className="flex items-baseline justify-between border-b border-[rgba(239,234,228,0.15)] pb-3">
            <h2 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-[#EFEAE4]">
              Typography Pairings
            </h2>
            <span className="font-mono text-xs text-[#EFEAE4]/50">
              Anton / Bebas Neue + Inter
            </span>
          </div>

          <div className="p-6 md:p-8 bg-[#0A0A0A] border border-[rgba(239,234,228,0.12)] rounded-lg space-y-6">
            <div>
              <span className="font-mono text-xs text-[#5ED1C4] uppercase tracking-wider block mb-1">
                Display Headline Font (Anton / Bebas Neue)
              </span>
              <p className="font-display text-3xl sm:text-5xl uppercase tracking-normal text-[#EFEAE4]">
                THE MARKET REWARDS PATIENCE, DISCIPLINE &amp; EXECUTION.
              </p>
            </div>

            <div className="border-t border-[rgba(239,234,228,0.08)] pt-4">
              <span className="font-mono text-xs text-[#F7D417] uppercase tracking-wider block mb-1">
                Body Grotesk Font (Inter)
              </span>
              <p className="font-sans text-sm sm:text-base text-[#EFEAE4]/80 leading-relaxed max-w-3xl">
                Every trade executed follows strict institutional liquidity models, defined risk parameters,
                and systematic orderflow analysis. We do not gamble; we trade market structure and probabilities.
              </p>
            </div>
          </div>
        </section>

      </Container>
    </main>
  );
}
