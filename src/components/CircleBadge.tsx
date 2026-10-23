"use client";

import React, { useId } from "react";

export interface CircleBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Text that wraps around the circular border edge.
   * e.g. "* LIVE TRADE BREAKDOWNS * LIVE TRADE BREAKDOWNS"
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
   * Stroke and text color token.
   * Default: "cream"
   */
  color?: "cream" | "teal" | "pink" | "yellow" | "orange" | "lime" | "profit" | "loss" | "black" | string;
  /**
   * Background fill for the entire badge.
   * Default: "transparent"
   */
  badgeBg?: "transparent" | "lime" | "teal" | "pink" | "yellow" | "orange" | "cream" | "black" | string;
  /**
   * Background color for the inner center area.
   */
  centerBg?: string;
  /**
   * Static rotation in degrees (number e.g. -14, or string e.g. "-14deg").
   * Default: 0
   */
  rotation?: number | string;
  /**
   * Add neo-brutalist hard drop shadow.
   * Default: false
   */
  hasShadow?: boolean;
  /**
   * Add solid border around outer edge.
   * Default: false
   */
  hasBorder?: boolean;
  /**
   * Preset icon in center: "globe" | "crosshair" | "target"
   */
  icon?: "globe" | "crosshair" | "target";
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
  transparent: "transparent",
};

export function CircleBadge({
  text,
  centerContent,
  size = 140,
  color = "cream",
  badgeBg = "transparent",
  centerBg,
  rotation = 0,
  hasShadow = false,
  hasBorder = false,
  icon = "crosshair",
  isRotating = false,
  className = "",
  style,
  ...rest
}: CircleBadgeProps) {
  const uniqueId = useId();
  const pathId = `circle-path-${uniqueId.replace(/:/g, "")}`;
  
  const strokeColor = COLOR_MAP[color] || color;
  const resolvedBg = COLOR_MAP[badgeBg] || badgeBg;
  const isSolid = badgeBg !== "transparent";

  // If solid badge (like reference lime sticker), text and stroke are black by default
  const effectiveStroke = isSolid && color === "cream" ? "#0A0A0A" : strokeColor;
  const innerBg = centerBg || (isSolid ? resolvedBg : "#0A0A0A");

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

  // Parse rotation
  const rotationTransform =
    typeof rotation === "number"
      ? `rotate(${rotation}deg)`
      : rotation.includes("deg")
      ? `rotate(${rotation})`
      : `rotate(${rotation}deg)`;

  return (
    <div
      className={`
        relative inline-flex items-center justify-center select-none rounded-full
        transition-transform will-change-transform
        ${hasBorder ? "border-2 border-[#0A0A0A]" : ""}
        ${hasShadow ? "shadow-[3px_3px_0px_#0A0A0A]" : ""}
        ${className}
      `.trim()}
      style={{
        width: size,
        height: size,
        backgroundColor: resolvedBg,
        transform: rotationTransform,
        ...style,
      }}
      data-rotating={isRotating}
      {...rest}
    >
      {/* SVG Container with circular text path */}
      <svg
        viewBox="0 0 200 200"
        className={`w-full h-full ${
          isRotating ? "animate-[spin_16s_linear_infinite]" : ""
        }`}
        style={{ color: effectiveStroke }}
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
          strokeDasharray={isSolid ? "none" : "4 4"}
          className={isSolid ? "opacity-100" : "opacity-40"}
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
          className="fill-current font-black uppercase text-[11px] tracking-[0.22em]"
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
          fill={innerBg}
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* Centered element / icon / globe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {centerContent ? (
          centerContent
        ) : icon === "globe" ? (
          /* Globe wireframe icon like reference image */
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke={effectiveStroke}
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="9" />
            <ellipse cx="12" cy="12" rx="4" ry="9" />
            <line x1="3" y1="12" x2="21" y2="12" />
          </svg>
        ) : (
          /* Minimalist Forex Crosshair Glyph */
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={effectiveStroke}
            strokeWidth="2"
            strokeLinecap="square"
          >
            <circle cx="12" cy="12" r="3" fill={effectiveStroke} />
            <line x1="12" y1="2" x2="12" y2="7" />
            <line x1="12" y1="17" x2="12" y2="22" />
            <line x1="2" y1="12" x2="7" y2="12" />
            <line x1="17" y1="12" x2="22" y2="12" />
          </svg>
        )}
      </div>
    </div>
  );
}

export default CircleBadge;
