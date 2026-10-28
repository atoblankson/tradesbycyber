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
    { label: "Instagram", href: "https://instagram.com", handle: "@tradesbycyber" },
    { label: "X (Twitter)", href: "https://x.com", handle: "@tradesbycyber" },
    { label: "YouTube", href: "https://youtube.com", handle: "@tradesbycyber" },
    { label: "Telegram", href: "https://t.me/+ZJ-RRfV9XjM0MWI8", handle: "t.me/tradesbycyber" },
    { label: "TikTok", href: "https://tiktok.com", handle: "@tradesbycyber" },
  ];

  return (
    <footer
      aria-label="Site Footer"
      className={`w-full bg-gold-glow-br film-grain text-[#EFEAE4] border-t border-[rgba(212,166,42,0.35)] pt-16 sm:pt-24 md:pt-32 pb-12 select-none relative ${className}`}
    >
      <Container size="lg" className="relative z-10">
        {/* Top Grid: Brand + Navigation + Socials + Market Session Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-[rgba(212,166,42,0.2)]">
          {/* Column 1: Brand Logo & Wordmark + Bio */}
          <div className="lg:col-span-6 space-y-4">
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
                tradesbycyber
              </span>
            </Link>

            <p className="font-sans text-sm text-[#A89F8C] max-w-sm leading-relaxed">
              Institutional orderflow, liquidity modeling, and execution discipline for serious forex traders.
              Specializing in London &amp; New York gold (XAU/USD) setups.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C766] font-bold block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 font-sans text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#A89F8C] hover:text-[#E8C766] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links (Instagram, X, YouTube, Telegram, TikTok) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C766] font-bold block">
              SOCIAL CHANNELS
            </span>
            <ul className="space-y-2.5 font-sans text-sm">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A89F8C] hover:text-[#E8C766] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{social.label}</span>
                    <span className="text-[10px] text-[#A89F8C]/60 group-hover:text-[#E8C766] group-hover:translate-x-0.5 transition-all">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* ----------------------------------------------------------- */}
      {/* GIANT WORDMARK IN CREAM-TO-GOLD VERTICAL GRADIENT           */}
      {/* ----------------------------------------------------------- */}
      <div className="w-full overflow-hidden select-none py-10 sm:py-14 md:py-18 relative z-10">
        <span className="
          font-display uppercase gold-vertical-text
          text-[12.8vw] sm:text-[12.4vw] md:text-[12vw] lg:text-[11.8vw] xl:text-[11.4vw] 2xl:text-[170px]
          leading-[0.8] tracking-tight whitespace-nowrap block text-center
          opacity-95 hover:opacity-100 transition-opacity
        ">
          TRADESBYCYBER
        </span>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* DISCLAIMER + COPYRIGHT                                      */}
      {/* ----------------------------------------------------------- */}
      <Container size="lg" className="relative z-10">
        <div className="pt-8 sm:pt-12 border-t border-[rgba(212,166,42,0.2)] space-y-8">
          {/* Centered Legal Block (Matching reference formatting) */}
          <div className="max-w-4xl mx-auto text-center space-y-4 font-sans text-xs sm:text-[13px] leading-relaxed text-[#A89F8C]">
            <p className="text-[#EFEAE4]/80 text-xs sm:text-[13px] font-medium">
              © 2026 Tradesbycyber. All rights reserved.
            </p>

            <p>
              <strong className="font-bold text-[#EFEAE4]">DISCLAIMER:</strong> tradedbycyber provides trading education, mentorship, market commentary and trade breakdowns for informational purposes only. Nothing on this website or in our community channels, including videos, courses, mentorship sessions, signals, analysis or trade setups, is financial advice, an investment recommendation or an offer to buy or sell any financial instrument. Any account management or copy-trading arrangement is a separate, private agreement between the parties involved and is not offered through this website.
            </p>
            {/* TODO: client to confirm licensing/registration status and the exact wording of this last sentence with a lawyer before launch */}

            <p>
              Trading forex involves substantial risk of loss and is not suitable for every investor. Nothing on this site is financial advice.
            </p>

            <p>
              We encourage you to speak with a licensed financial advisor or the regulator in your jurisdiction before you trade or hand control of any account to anyone. Using any third-party broker or platform is entirely your choice, and tradedbycyber is not liable for any loss or damage arising directly or indirectly from using this website or its content.
            </p>

            <p className="pt-2 text-[11px] sm:text-xs text-[#A89F8C]/80">
              By using this website, you agree to our{" "}
              <a href="#terms" className="text-[#E8C766] underline underline-offset-2 hover:text-[#EFEAE4] transition-colors">
                Terms of Service
              </a>
              ,{" "}
              <a href="#privacy" className="text-[#E8C766] underline underline-offset-2 hover:text-[#EFEAE4] transition-colors">
                Privacy Policy
              </a>
              , and acknowledge the risks involved in trading.
            </p>
          </div>

          {/* Bottom Bar: Back to top / discipline motto */}
          <div className="pt-4 border-t border-[rgba(212,166,42,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#A89F8C]">
            <span className="text-[#A89F8C]/60">BUILT FOR DISCIPLINED TRADERS</span>
            <a
              href="#"
              className="text-[#EFEAE4] hover:text-[#E8C766] transition-colors inline-flex items-center gap-1 uppercase"
            >
              <span>BACK TO TOP</span>
              <span>↑</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
