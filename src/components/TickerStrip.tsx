import React from "react";

export interface TickerItem {
  pair: string;
  price: string;
  change: string;
  isUp: boolean;
}

// Live institutional currency pairs, gold, and key indices
const DEFAULT_TICKER_ITEMS: TickerItem[] = [
  { pair: "EUR/USD", price: "1.0842", change: "+0.42%", isUp: true },
  { pair: "GBP/USD", price: "1.2985", change: "-0.18%", isUp: false },
  { pair: "XAU/USD", price: "2,734.50", change: "+1.24%", isUp: true },
  { pair: "USD/JPY", price: "152.60", change: "-0.35%", isUp: false },
  { pair: "NAS100", price: "20,410.8", change: "+0.88%", isUp: true },
  { pair: "US30", price: "42,215.0", change: "+0.32%", isUp: true },
  { pair: "AUD/USD", price: "0.6580", change: "-0.25%", isUp: false },
  { pair: "USD/CAD", price: "1.3892", change: "+0.14%", isUp: true },
];

export interface TickerStripProps {
  items?: TickerItem[];
  className?: string;
}

export function TickerStrip({
  items = DEFAULT_TICKER_ITEMS,
  className = "",
}: TickerStripProps) {
  // Repeat items so each track is long enough to fill extra-wide screens
  const trackItems = [...items, ...items];

  const renderTrackItems = (keyPrefix: string) =>
    trackItems.map((item, idx) => (
      <div key={`${keyPrefix}-${item.pair}-${idx}`} className="flex items-center shrink-0">
        {/* Ticker Pair & Movement Data */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 font-mono text-xs sm:text-sm font-black tracking-wider">
          <span className="text-[#0A0A0A] font-extrabold">{item.pair}</span>
          <span className="text-[#0A0A0A]/80 font-medium">{item.price}</span>
          <span
            className={`inline-flex items-center gap-0.5 font-bold ${
              item.isUp ? "text-[#10B981]" : "text-[#EF4444]"
            }`}
          >
            <span className="text-[10px] sm:text-xs" aria-hidden="true">
              {item.isUp ? "▲" : "▼"}
            </span>
            <span>{item.change}</span>
          </span>
        </div>

        {/* Divider */}
        <span
          className="mx-4 sm:mx-6 md:mx-8 text-[#0A0A0A]/30 font-bold select-none"
          aria-hidden="true"
        >
          •
        </span>
      </div>
    ));

  return (
    <aside
      data-theme="cream"
      aria-label="Live Forex Ticker"
      className={`
        w-full overflow-hidden
        bg-[#EFEAE4] text-[#0A0A0A]
        border-y-2 sm:border-y-[3px] border-[#0A0A0A]
        py-2.5 sm:py-3.5 select-none
        relative flex
        ${className}
      `.trim()}
    >
      <style>{`
        @keyframes tickerTapeSlide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        .ticker-slide-track {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          white-space: nowrap;
          animation: tickerTapeSlide 28s linear infinite !important;
          will-change: transform;
        }
      `}</style>

      {/* Track 1 */}
      <div className="ticker-slide-track">
        {renderTrackItems("track1")}
      </div>

      {/* Track 2 (Seamless infinite mirror) */}
      <div className="ticker-slide-track" aria-hidden="true">
        {renderTrackItems("track2")}
      </div>
    </aside>
  );
}

export default TickerStrip;
