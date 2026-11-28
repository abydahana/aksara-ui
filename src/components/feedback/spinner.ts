import { classNames, toAttributes, type ComponentSize, normalizeSize } from "../utils";

export interface SpinnerProps {
  size?: ComponentSize;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
  label?: string;
  /** Hide the spinner from assistive technology (visible text already describes the state). */
  decorative?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Spinner(props: SpinnerProps = {}): string {
  const { size, variant, label = "Loading...", decorative = false, className = "", attributes } = props;

  const sizeClass = size ? `spinner-${normalizeSize(size)}` : "";

  const classes = classNames("spinner", sizeClass, variant && `text-${variant}`, className);

  const baseAttrs = toAttributes({
    role: decorative ? undefined : "status",
    "aria-label": decorative ? undefined : label,
    "aria-hidden": decorative ? "true" : undefined,
    ...attributes
  });

  return `<span class="${classes}"${baseAttrs}></span>`.trim();
}

export const spinner = Spinner;
