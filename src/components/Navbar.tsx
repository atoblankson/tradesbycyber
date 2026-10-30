"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { EASING } from "@/lib/motion";

export interface NavbarProps {
  className?: string;
}

interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Results", href: "/#results", id: "results" },
  { label: "Strategy", href: "/#strategy", id: "strategy" },
  { label: "Mentorship", href: "/#mentorship", id: "mentorship" },
  { label: "Arena", href: "/arena", id: "arena" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export function Navbar({ className = "" }: NavbarProps) {
  const pathname = usePathname();
  const isArenaRoute = pathname?.startsWith("/arena");
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [theme, setTheme] = useState<"dark" | "cream">("dark");
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollYRef = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------------------------
  // 1. SCROLL DIRECTION & THRESHOLD DETECTION
  // -------------------------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 40;
      setIsScrolled(scrolled);

      // Always visible sticky pill - stays with user as they scroll down
      setIsVisible(true);

      lastScrollYRef.current = currentScrollY;

      // Sample theme under the navbar pill (fixed around y = 40px)
      const sampleY = 40;
      const sampleX = window.innerWidth / 2;
      const el = document.elementFromPoint(sampleX, sampleY);
      if (el) {
        const themedEl = el.closest("[data-theme]");
        if (themedEl) {
          const t = themedEl.getAttribute("data-theme");
          if (t === "dark" || t === "cream") {
            setTheme(t);
          }
        }
        const sectionEl = el.closest("section[id]");
        if (sectionEl) {
          const id = sectionEl.getAttribute("id");
          if (id && NAV_LINKS.some((l) => l.id === id)) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // -------------------------------------------------------------------------
  // 2. INTERSECTION OBSERVER FOR ACTIVE SECTION & THEME ACCURACY
  // -------------------------------------------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const t = entry.target.getAttribute("data-theme");
            if (t === "dark" || t === "cream") {
              setTheme(t);
            }
            const id = entry.target.getAttribute("id");
            if (id && NAV_LINKS.some((l) => l.id === id)) {
              setActiveSection(id);
            }
          }
        }
      },
      {
        rootMargin: "-20px 0px -80% 0px",
        threshold: 0,
      }
    );

    const themedElements = document.querySelectorAll("[data-theme]");
    themedElements.forEach((el) => observer.observe(el));

    return () => {
      themedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // -------------------------------------------------------------------------
  // 3. BODY SCROLL LOCK WHEN MOBILE MENU IS OPEN
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // -------------------------------------------------------------------------
  // 4. CLICK OUTSIDE TO CLOSE MOBILE MENU
  // -------------------------------------------------------------------------
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isCream = isScrolled && theme === "cream";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 ${className}`}
      aria-label="Main Navigation Header"
    >
      <div className="w-full flex justify-center px-4 sm:px-6">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: isVisible ? 0 : -90,
                  opacity: isVisible ? 1 : 0,
                }
          }
          transition={{ duration: 0.3, ease: EASING }}
          className={`
            w-full pointer-events-auto transition-all duration-300
            ${
              isScrolled
                ? `
                  max-w-[960px] mt-4 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full
                  backdrop-blur-[14px] backdrop-saturate-[140%]
                  ${
                    isCream
                      ? "bg-[#EFEAE4]/75 border border-[#0B0A08]/15 shadow-[0_8px_24px_rgba(11,10,8,0.08)] text-[#0B0A08]"
                      : "bg-[#0B0A08]/55 border border-[#D4A62A]/25 shadow-[0_8px_32px_rgba(0,0,0,0.35)] text-[#EFEAE4]"
                  }
                `
                : "max-w-7xl pt-8 pb-4 sm:pt-10 sm:pb-6 bg-transparent border-transparent text-[#EFEAE4]"
            }
          `.trim()}
        >
          <nav
            ref={navRef}
            className="flex items-center justify-between gap-4 sm:gap-6"
            aria-label="Main Navigation"
          >
            {/* Brand Logo & Name */}
            <Link
              href="/"
              onClick={() => {
                setActiveSection("");
                if (mobileMenuOpen) setMobileMenuOpen(false);
              }}
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4A62A] flex-shrink-0"
            >
              {/* Brand Logo Mark */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden bg-black border border-[rgba(212,166,42,0.35)] flex-shrink-0 group-hover:scale-105 transition-transform shadow-[2px_2px_0px_#6B4F12]">
                <Image
                  src="/images/logo.png"
                  alt="TradesByCyber Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <span
                className={`
                  font-sans text-sm sm:text-base font-semibold tracking-tight transition-colors duration-300
                  ${isCream ? "text-[#0B0A08]" : "text-[#EFEAE4]"}
                `}
              >
                tradesbycyber
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = isArenaRoute ? link.id === "arena" : activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setActiveSection(link.id)}
                    className={`
                      relative py-1 text-xs sm:text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:text-[#E8C766]
                      ${
                        isCream
                          ? isActive
                            ? "text-[#0B0A08] font-bold"
                            : "text-[#0B0A08]/75 hover:text-[#0B0A08]"
                          : isActive
                          ? "text-[#EFEAE4] font-bold"
                          : "text-[#EFEAE4]/80 hover:text-[#E8C766]"
                      }
                    `}
                  >
                    <span>{link.label}</span>
                    {/* Active sliding gold underline/dot indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute -bottom-1 left-1.5 right-1.5 h-[2px] bg-[#D4A62A] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right side: Primary Button in pill + Mobile Menu toggle */}
            <div className="flex items-center gap-3">
              {/* Primary button inside pill: stays gold on both themes */}
              <Link
                href="https://t.me/+ZJ-RRfV9XjM0MWI8"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${isScrolled ? "hidden sm:inline-flex" : "hidden"}
                  items-center justify-center
                  gold-metallic-bg text-[#0B0A08]
                  font-mono font-black uppercase text-[11px] tracking-wider
                  px-4 py-2 rounded-full
                  shadow-[2px_2px_0px_#6B4F12]
                  hover:-translate-y-0.5 active:translate-y-0
                  transition-transform duration-200 text-center
                `}
              >
                JOIN THE COMMUNITY
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className={`
                  md:hidden p-2 rounded-full focus:outline-none transition-colors duration-200
                  ${
                    isCream
                      ? "text-[#0B0A08] hover:bg-[#0B0A08]/10"
                      : "text-[#EFEAE4] hover:bg-[#EFEAE4]/10"
                  }
                `}
              >
                {mobileMenuOpen ? (
                  /* Close Icon */
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  /* Hamburger Icon */
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* ========================================================= */}
          {/* MOBILE GLASS DROPDOWN PANEL                               */}
          {/* ========================================================= */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASING }}
                className={`
                  md:hidden mt-3 rounded-2xl p-5
                  backdrop-blur-[16px] backdrop-saturate-[140%]
                  ${
                    isCream
                      ? "bg-[#EFEAE4]/95 border border-[#0B0A08]/15 shadow-xl text-[#0B0A08]"
                      : "bg-[#0B0A08]/90 border border-[#D4A62A]/30 shadow-2xl text-[#EFEAE4]"
                  }
                `}
              >
                <div className="flex flex-col space-y-4">
                  {NAV_LINKS.map((link) => {
                    const isActive = isArenaRoute ? link.id === "arena" : activeSection === link.id;
                    return (
                      <Link
                        key={link.id}
                        href={link.href}
                        onClick={() => {
                          setActiveSection(link.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`
                          py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between
                          ${
                            isCream
                              ? isActive
                                ? "bg-[#0B0A08]/10 text-[#0B0A08]"
                                : "text-[#0B0A08]/80 hover:bg-[#0B0A08]/5"
                              : isActive
                              ? "bg-[#D4A62A]/15 text-[#EFEAE4]"
                              : "text-[#EFEAE4]/80 hover:bg-[#EFEAE4]/5"
                          }
                        `}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A62A]" />
                        )}
                      </Link>
                    );
                  })}

                  <div className="pt-2 border-t border-[rgba(212,166,42,0.2)]">
                    <Link
                      href="https://t.me/+ZJ-RRfV9XjM0MWI8"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="
                        w-full inline-flex items-center justify-center
                        gold-metallic-bg text-[#0B0A08]
                        font-mono font-black uppercase text-xs tracking-wider
                        py-3 px-5 rounded-full
                        shadow-[3px_3px_0px_#6B4F12]
                        active:translate-y-0.5
                      "
                    >
                      JOIN THE COMMUNITY →
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}

export default Navbar;
