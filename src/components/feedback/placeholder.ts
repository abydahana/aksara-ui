import { classNames, toAttributes } from "../utils";

export interface PlaceholderProps {
  animation?: "glow" | "wave";
  size?: "xs" | "sm" | "lg";
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Placeholder(props: PlaceholderProps = {}): string {
  const { animation, size, variant, className = "", attributes } = props;

  const classes = classNames(
    "placeholder",
    animation && `placeholder-${animation}`,
    size && `placeholder-${size}`,
    variant && `bg-${variant}`,
    className
  );

  const baseAttrs = toAttributes({
    "aria-hidden": "true",
    ...attributes
  });

  return `<span class="${classes}"${baseAttrs}></span>`.trim();
}

export const placeholder = Placeholder;
