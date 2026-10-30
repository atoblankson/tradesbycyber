"use client";

import React from "react";
import { Container } from "../Container";

export function ArenaRiskNotice() {
  return (
    <section
      id="arena-risk-notice"
      data-theme="dark"
      aria-label="Contest Risk Notice"
      className="w-full bg-[#0B0A08] text-[#EFEAE4] py-12 sm:py-16 relative select-none border-b border-[rgba(212,166,42,0.25)]"
    >
      <Container size="lg">
        <div className="p-6 sm:p-8 rounded-2xl border border-[rgba(212,166,42,0.3)] bg-[#14110D] shadow-[4px_4px_0px_#6B4F12]">
          <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-[#A89F8C]">
            <strong className="block font-mono uppercase tracking-wider text-[#E8C766] font-black text-xs sm:text-sm">
              IMPORTANT CONTEST &amp; RISK NOTICE
            </strong>
            <p className="text-[#EFEAE4]/90">
              Trading foreign exchange (Forex), Gold (XAU/USD), and leveraged derivatives involves substantial risk of loss and is not suitable for all individuals. All features and content in the <strong>CYBER FX Trading Arena</strong> are designed strictly for educational and skill-testing purposes and do not constitute financial, investment, or trading advice.
            </p>
            <p className="text-[#A89F8C]/80 text-[11px] sm:text-xs">
              Virtual demo contest results do not simulate live emotional pressures, liquidity constraints, slippage, or live market execution conditions. All prize figures, competition dates, and leaderboard entries shown are illustrative placeholders pending final administrative and regulatory review.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ArenaRiskNotice;
