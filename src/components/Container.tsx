import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /**
   * Semantic HTML tag to render.
   * Default: "div"
   */
  as?: React.ElementType;
  /**
   * Container max width constraint.
   * Default: "default" (max-w-7xl)
   */
  size?: "sm" | "md" | "default" | "lg" | "full";
  /**
   * Add neo-brutalist editorial grid-line side borders.
   * Default: false
   */
  withGridLines?: boolean;
  className?: string;
}

const SIZE_MAP = {
  sm: "max-w-4xl",
  md: "max-w-5xl",
  default: "max-w-7xl",
  lg: "max-w-[1440px]",
  full: "max-w-full",
};

export function Container({
  children,
  as: Component = "div",
  size = "default",
  withGridLines = false,
  className = "",
  ...rest
}: ContainerProps) {
  const sizeClass = SIZE_MAP[size] || SIZE_MAP.default;
  const gridLineClass = withGridLines
    ? "border-x border-[rgba(239,234,228,0.12)]"
    : "";

  return (
    <Component
      className={`
        mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12
        ${sizeClass}
        ${gridLineClass}
        ${className}
      `.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Container;
