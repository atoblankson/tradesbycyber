import React from "react";
import Link from "next/link";
import { Container } from "./Container";

export interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  const navLinks = [
    { label: "Results", href: "#results" },
    { label: "Strategy", href: "#strategy" },
    { label: "Mentorship", href: "#mentorship" },
    { label: "Community", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", handle: "@tradedbycyber", hoverColor: "hover:text-[#5ED1C4]" },
    { label: "X (Twitter)", href: "https://x.com", handle: "@tradedbycyber", hoverColor: "hover:text-[#F7D417]" },
    { label: "YouTube", href: "https://youtube.com", handle: "@tradedbycyber", hoverColor: "hover:text-[#F0527E]" },
    { label: "Telegram", href: "https://t.me", handle: "t.me/tradedbycyber", hoverColor: "hover:text-[#5ED1C4]" },
    { label: "TikTok", href: "https://tiktok.com", handle: "@tradedbycyber", hoverColor: "hover:text-[#A6E36E]" },
  ];

  return (
    <footer
      aria-label="Site Footer"
      className={`w-full bg-[#0A0A0A] text-[#EFEAE4] pt-16 sm:pt-24 md:pt-32 pb-12 select-none ${className}`}
    >
      <Container size="lg">
        {/* Top Grid: Brand + Navigation + Socials + Market Session Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-[rgba(239,234,228,0.12)]">
          {/* Column 1: Brand Logo & Wordmark + Bio */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none"
            >
              {/* Cream rounded pill/block logo mark placeholder */}
              <span
                className="w-10 h-5.5 bg-[#EFEAE4] rounded-r-full rounded-l-[2px] transition-transform duration-150 group-hover:scale-105"
                aria-hidden="true"
              />
              <span className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[#EFEAE4]">
                tradedbycyber
              </span>
            </Link>

            <p className="font-sans text-sm text-[#EFEAE4]/70 max-w-sm leading-relaxed">
              Institutional orderflow, liquidity modeling, and execution discipline for serious forex traders.
              No lagging indicators, zero hindsight commentary.
            </p>

            {/* Email Contact Block */}
            <div className="pt-2">
              <span className="font-mono text-[11px] text-[#EFEAE4]/40 uppercase tracking-widest block mb-1">
                DIRECT INQUIRIES &amp; MENTORSHIP
              </span>
              <a
                href="mailto:contact@tradedbycyber.com"
                className="inline-flex items-center gap-2 font-mono text-sm sm:text-base font-bold text-[#5ED1C4] hover:text-[#EFEAE4] transition-colors underline underline-offset-4 decoration-1"
              >
                contact@tradedbycyber.com
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#EFEAE4]/45 font-bold block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 font-sans text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#EFEAE4]/80 hover:text-[#5ED1C4] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links (Instagram, X, YouTube, Telegram, TikTok) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#EFEAE4]/45 font-bold block">
              SOCIAL CHANNELS
            </span>
            <ul className="space-y-2.5 font-sans text-sm">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[#EFEAE4]/80 ${social.hoverColor} transition-colors inline-flex items-center gap-1.5 group`}
                  >
                    <span>{social.label}</span>
                    <span className="text-[10px] text-[#EFEAE4]/40 group-hover:translate-x-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Live Session Status Widget */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#EFEAE4]/45 font-bold block">
              SESSION DESK
            </span>
            <div className="p-3 bg-[rgba(239,234,228,0.03)] border border-[rgba(239,234,228,0.08)] rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[#EFEAE4]/60">LONDON:</span>
                <span className="text-[#EFEAE4] font-bold">08:00 - 16:00 GMT</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#EFEAE4]/60">NEW YORK:</span>
                <span className="text-[#EFEAE4] font-bold">13:00 - 21:00 GMT</span>
              </div>
              <div className="pt-1.5 border-t border-[rgba(239,234,228,0.08)] flex items-center gap-1.5 text-[11px] text-[#10B981] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse inline-block" />
                <span>EXECUTION DESK ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ----------------------------------------------------------- */}
      {/* GIANT CREAM CONDENSED "TRADEDBYCYBER" WORDMARK FULL WIDTH   */}
      {/* ----------------------------------------------------------- */}
      <div className="w-full overflow-hidden select-none py-10 sm:py-14 md:py-18">
        <span className="
          font-display uppercase text-[#EFEAE4]
          text-[12.8vw] sm:text-[12.4vw] md:text-[12vw] lg:text-[11.8vw] xl:text-[11.4vw] 2xl:text-[170px]
          leading-[0.8] tracking-tight whitespace-nowrap block text-center
          opacity-90 hover:opacity-100 transition-opacity
        ">
          TRADEDBYCYBER
        </span>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* DISCLAIMER + COPYRIGHT                                      */}
      {/* ----------------------------------------------------------- */}
      <Container size="lg">
        <div className="pt-8 border-t border-[rgba(239,234,228,0.12)] space-y-6">
          {/* Small-print Risk Disclaimer */}
          <p className="font-mono text-xs sm:text-[13px] leading-relaxed text-[#EFEAE4]/50 max-w-4xl">
            Trading forex involves substantial risk of loss and is not suitable for every investor. Nothing on this site is financial advice.
          </p>

          {/* Bottom Row: Copyright + Back to top link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#EFEAE4]/40">
            <div>
              © 2026 TRADEDBYCYBER. ALL RIGHTS RESERVED.
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[#EFEAE4]/30">BUILT FOR DISCIPLINED TRADERS</span>
              <a
                href="#"
                className="text-[#EFEAE4]/70 hover:text-[#5ED1C4] transition-colors inline-flex items-center gap-1 uppercase"
              >
                <span>BACK TO TOP</span>
                <span>↑</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
