"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Shared Motion tokens across tradesbycyber
 * Easing: cubic-bezier(0.22, 1, 0.36, 1)
 * Durations: 0.5s - 0.8s for reveals, 0.2s for hovers
 */
export const EASING = [0.22, 1, 0.36, 1] as const;

export const REVEAL_TRANSITION = {
  duration: 0.6,
  ease: EASING,
};

export const HOVER_TRANSITION = {
  duration: 0.2,
  ease: EASING,
};

/**
 * ScrollReveal Component
 * Fades and rises 24px once as it enters the viewport (20% visible), 0.6s.
 * Respects prefers-reduced-motion.
 */
export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 24,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASING, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * MaskedLineReveal Component
 * Section headlines reveal with masked line slide (overflow-hidden, slide up from 100% once).
 */
export interface MaskedLineRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MaskedLineReveal({
  children,
  className = "",
  delay = 0,
}: MaskedLineRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: EASING, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * CountUpStat Component
 * Smooth count-up number over 1.5s with ease-out when section enters view (once).
 * Preserves exact target values, decimals, prefixes, and suffixes.
 */
export interface CountUpStatProps {
  value: string; // e.g. "74%", "1:3.4", "8+", "450+"
  className?: string;
}

export function CountUpStat({ value, className = "" }: CountUpStatProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState("0");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          // Parse value formats:
          // Format 1: "1:3.4" (ratio with decimal)
          // Format 2: "74%" (percentage)
          // Format 3: "450+", "8+" (integer with plus)
          if (value.startsWith("1:")) {
            const targetNum = parseFloat(value.replace("1:", ""));
            const duration = 1500;
            const startTime = performance.now();

            const step = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic: 1 - Math.pow(1 - progress, 3)
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = (easeOut * targetNum).toFixed(1);
              setDisplayValue(`1:${current}`);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(value);
              }
            };
            requestAnimationFrame(step);
          } else {
            const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
            const suffix = value.replace(/[0-9]/g, "");
            const duration = 1500;
            const startTime = performance.now();

            const step = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(easeOut * numericPart);
              setDisplayValue(`${current}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(value);
              }
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <div className={className}>{value}</div>;
  }

  return (
    <div ref={containerRef} className={className}>
      {displayValue}
    </div>
  );
}
