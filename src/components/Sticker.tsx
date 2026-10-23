import React from "react";

export type StickerColor =
  | "teal"
  | "pink"
  | "yellow"
  | "orange"
  | "lime"
  | "profit"
  | "loss"
  | "green"
  | "red"
  | "cream"
  | "black"
  | string;

export interface StickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Text label to display. Alternatively pass children.
   */
  label?: string;
  /**
   * Children content if not using label.
   */
  children?: React.ReactNode;
  /**
   * Preset palette color name or hex code.
   * Default: "yellow"
   */
  color?: StickerColor;
  /**
   * Rotation in degrees (number e.g. -3, 2, or CSS transform string e.g. "-2.5deg").
   * Default: 0
   */
  rotation?: number | string;
  /**
   * Sticker size variant.
   * Default: "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Shape style: rounded rectangle (default) or pill.
   */
  shape?: "rectangle" | "pill";
  /**
   * Add neo-brutalist hard drop shadow.
   * Default: true
   */
  hasShadow?: boolean;
  /**
   * Border around the sticker.
   * Default: true
   */
  hasBorder?: boolean;
}

const COLOR_STYLES: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
  teal: {
    bg: "bg-[#5ED1C4]",
    text: "text-[#0A0A0A]",
    border: "border-[#0A0A0A]",
    shadow: "shadow-[2px_2px_0px_#0A0A0A]",
  },
  pink: {
    bg: "bg-[#F0527E]",
    text: "text-[#0A0A0A]",
    border: "border-[#0A0A0A]",
    shadow: "shadow-[2px_2px_0px_#0A0A0A]",
  },
  yellow: {
    bg: "bg-[#F7D417]",
    text: "text-[#0A0A0A]",
    border: "border-[#0A0A0A]",
    shadow: "shadow-[2px_2px_0px_#0A0A0A]",
  },
  orange: {
    bg: "bg-[#FF8A1F]",
    text: "text-[#0A0A0A]",
    border: "border-[#0A0A0A]",
    shadow: "shadow-[2px_2px_0px_#0A0A0A]",
  },
  lime: {
    bg: "bg-[#A6E36E]",
    text: "text-[#0A0A0A]",
    border: "border-[#0A0A0A]",
    shadow: "shadow-[2px_2px_0px_#0A0A0A]",
  },
  profit: {
    bg: "bg-[#10B981]",
    text: "text-[#0A0A0A]",
    border: "border-[#0A0A0A]",
    shadow: "shadow-[2px_2px_0px_#0A0A0A]",
  },
  green: {
    bg: "bg-[#10B981]",
    text: "text-[#0A0A0A]",
    border: "border-[#0A0A0A]",
    shadow: "shadow-[2px_2px_0px_#0A0A0A]",
  },
  loss: {
    bg: "bg-[#EF4444]",
    text: "text-[#EFEAE4]",
    border: "border-[#0A0A0A]",
    shadow: "shadow-[2px_2px_0px_#0A0A0A]",
  },
  red: {
    bg: "bg-[#EF4444]",
    text: "text-[#EFEAE4]",
    border: "border-[#0A0A0A]",
    shadow: "shadow-[2px_2px_0px_#0A0A0A]",
  },
  cream: {
    bg: "bg-[#EFEAE4]",
    text: "text-[#0A0A0A]",
    border: "border-[#0A0A0A]",
    shadow: "shadow-[2px_2px_0px_#0A0A0A]",
  },
  black: {
    bg: "bg-[#0A0A0A]",
    text: "text-[#EFEAE4]",
    border: "border-[#EFEAE4]",
    shadow: "shadow-[2px_2px_0px_rgba(239,234,228,0.4)]",
  },
};

const SIZE_STYLES = {
  sm: "text-xs px-2.5 py-1 tracking-wider",
  md: "text-sm sm:text-base px-3.5 py-1.5 tracking-wider",
  lg: "text-base sm:text-lg px-5 py-2 tracking-wider",
};

export function Sticker({
  label,
  children,
  color = "yellow",
  rotation = 0,
  size = "md",
  shape = "rectangle",
  hasShadow = true,
  hasBorder = true,
  className = "",
  style,
  ...rest
}: StickerProps) {
  const content = label ?? children;
  const isCustomColor = !COLOR_STYLES[color.toLowerCase()];
  const presetStyle = COLOR_STYLES[color.toLowerCase()] || COLOR_STYLES.yellow;

  const shapeClass = shape === "pill" ? "rounded-full" : "rounded-md";
  const borderClass = hasBorder ? `border-2 ${presetStyle.border}` : "";
  const shadowClass = hasShadow ? presetStyle.shadow : "";

  // Parse rotation string or number
  const rotationTransform =
    typeof rotation === "number"
      ? `rotate(${rotation}deg)`
      : rotation.startsWith("rotate-") || rotation.includes("deg")
      ? rotation.includes("deg")
        ? `rotate(${rotation})`
        : undefined
      : `rotate(${rotation}deg)`;

  const customStyle: React.CSSProperties = {
    transform: rotationTransform,
    ...(isCustomColor
      ? {
          backgroundColor: color,
          color: "#0A0A0A",
          borderColor: "#0A0A0A",
        }
      : {}),
    ...style,
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center font-black uppercase
        select-none whitespace-nowrap leading-none transition-transform
        will-change-transform
        ${shapeClass}
        ${SIZE_STYLES[size]}
        ${!isCustomColor ? `${presetStyle.bg} ${presetStyle.text}` : ""}
        ${borderClass}
        ${shadowClass}
        ${className}
      `.trim()}
      style={customStyle}
      {...rest}
    >
      {content}
    </span>
  );
}

export default Sticker;
