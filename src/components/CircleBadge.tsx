"use client";

import React, { useId } from "react";

export interface CircleBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Text that wraps around the circular border edge.
   * e.g. "• TRADED BY CYBER • INSTITUTIONAL FOREX • ORDERFLOW EDGE •"
   */
  text: string;
  /**
   * Optional element or icon placed at the center of the badge.
   */
  centerContent?: React.ReactNode;
  /**
   * Size in pixels (width & height).
   * Default: 140
   */
  size?: number;
  /**
   * Accent color for text/border.
   * Default: "cream"
   */
  color?: "cream" | "teal" | "pink" | "yellow" | "orange" | "lime" | "profit" | "loss" | "black" | string;
  /**
   * Background color for the inner center area.
   */
  centerBg?: string;
  /**
   * Placeholder hook for rotation animation to be activated later.
   * Default: false (no animation as per initial foundation specs)
   */
  isRotating?: boolean;
  className?: string;
}

const COLOR_MAP: Record<string, string> = {
  cream: "#EFEAE4",
  black: "#0A0A0A",
  teal: "#5ED1C4",
  pink: "#F0527E",
  yellow: "#F7D417",
  orange: "#FF8A1F",
  lime: "#A6E36E",
  profit: "#10B981",
  loss: "#EF4444",
};

export function CircleBadge({
  text,
  centerContent,
  size = 140,
  color = "cream",
  centerBg = "#0A0A0A",
  isRotating = false,
  className = "",
  ...rest
}: CircleBadgeProps) {
  const uniqueId = useId();
  const pathId = `circle-path-${uniqueId.replace(/:/g, "")}`;
  const strokeColor = COLOR_MAP[color] || color;

  // SVG viewBox coordinates: 200x200
  // Radius for text circle = 68 (circumference ~= 427px)
  const cx = 100;
  const cy = 100;
  const r = 68;

  // Path starts at top, goes clockwise
  const circlePath = `
    M ${cx}, ${cy - r}
    a ${r},${r} 0 1,1 0,${2 * r}
    a ${r},${r} 0 1,1 0,-${2 * r}
  `;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      data-rotating={isRotating}
      {...rest}
    >
      {/* SVG Container with circular text path */}
      <svg
        viewBox="0 0 200 200"
        className={`w-full h-full ${
          isRotating ? "animate-[spin_16s_linear_infinite]" : ""
        }`}
        style={{ color: strokeColor }}
      >
        <defs>
          <path id={pathId} d={circlePath} fill="none" />
        </defs>

        {/* Outer subtle guide ring */}
        <circle
          cx={cx}
          cy={cy}
          r={92}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="opacity-40"
        />

        {/* Middle bounding ring */}
        <circle
          cx={cx}
          cy={cy}
          r={82}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="opacity-80"
        />

        {/* Circular text along the edge */}
        <text
          className="fill-current font-black uppercase text-[11px] tracking-[0.24em]"
          style={{ letterSpacing: "0.22em" }}
        >
          <textPath
            href={`#${pathId}`}
            startOffset="0%"
            textLength="427"
            lengthAdjust="spacingAndGlyphs"
          >
            {text}
          </textPath>
        </text>

        {/* Inner boundary ring */}
        <circle
          cx={cx}
          cy={cy}
          r={50}
          fill={centerBg}
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* Centered element / icon / crosshair */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {centerContent ? (
          centerContent
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            {/* Minimalist Neo-brutalist Forex Crosshair Glyph */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="square"
            >
              <circle cx="12" cy="12" r="3" fill={strokeColor} />
              <line x1="12" y1="2" x2="12" y2="7" />
              <line x1="12" y1="17" x2="12" y2="22" />
              <line x1="2" y1="12" x2="7" y2="12" />
              <line x1="17" y1="12" x2="22" y2="12" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default CircleBadge;
