import React from "react";
import Link from "next/link";

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
  const navLinks = [
    { label: "Results", href: "#results" },
    { label: "Strategy", href: "#strategy" },
    { label: "Mentorship", href: "#mentorship" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`w-full pt-8 pb-4 sm:pt-10 sm:pb-6 ${className}`}>
      <nav className="flex items-center justify-between gap-6" aria-label="Main Navigation">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4A62A]"
        >
          {/* Cream rounded pill / block shape placeholder */}
          <span
            className="w-9 h-5 sm:w-10 sm:h-5.5 bg-[#EFEAE4] rounded-r-full rounded-l-[2px] transition-transform duration-150 group-hover:scale-105"
            aria-hidden="true"
          />
          <span className="font-sans text-sm sm:text-base font-semibold tracking-tight text-[#EFEAE4]">
            tradedbycyber
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs sm:text-sm font-normal text-[#EFEAE4]/85 hover:text-[#E8C766] transition-colors focus:outline-none focus-visible:text-[#E8C766]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
