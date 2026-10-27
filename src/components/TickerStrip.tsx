import React from "react";

export interface TickerItem {
  pair: string;
  price: string;
  change: string;
  isUp: boolean;
}

// Default currency pairs and fake price movements
const DEFAULT_TICKER_ITEMS: TickerItem[] = [
  { pair: "EUR/USD", price: "1.0842", change: "+0.42%", isUp: true },
  { pair: "GBP/USD", price: "1.2985", change: "-0.18%", isUp: false },
  { pair: "XAU/USD", price: "2,734.50", change: "+1.24%", isUp: true },
  { pair: "USD/JPY", price: "152.60", change: "-0.35%", isUp: false },
  { pair: "NAS100", price: "20,410.8", change: "+0.88%", isUp: true },
];

export interface TickerStripProps {
  items?: TickerItem[];
  className?: string;
}

export function TickerStrip({
  items = DEFAULT_TICKER_ITEMS,
  className = "",
}: TickerStripProps) {
  // Repeating the array 3 times to ensure a seamless full-width strip across all screen widths.
  // Static for now; ready for marquee / infinite scroll CSS animation later.
  const displayItems = [...items, ...items, ...items];

  return (
    <aside
      aria-label="Live Forex Ticker"
      className={`
        w-full overflow-hidden
        bg-[#EFEAE4] text-[#0A0A0A]
        border-y-2 sm:border-y-[3px] border-[#0A0A0A]
        py-2.5 sm:py-3.5 select-none
        ${className}
      `.trim()}
    >
      <div className="flex items-center whitespace-nowrap justify-around sm:justify-start">
        {displayItems.map((item, idx) => (
          <div key={`${item.pair}-${idx}`} className="flex items-center">
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
        ))}
      </div>
    </aside>
  );
}

export default TickerStrip;
