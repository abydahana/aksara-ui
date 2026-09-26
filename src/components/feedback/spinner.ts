import { classNames, toAttributes, type ComponentSize } from "../utils";

export interface SpinnerProps {
  size?: ComponentSize;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
  label?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Spinner(props: SpinnerProps = {}): string {
  const { size, variant, label = "Loading...", className = "", attributes } = props;

  const sizeClass = size ? `spinner-${size}` : "";

  const classes = classNames("spinner", sizeClass, variant && `text-${variant}`, className);

  const baseAttrs = toAttributes({
    role: "status",
    "aria-label": label,
    ...attributes
  });

  return `<span class="${classes}"${baseAttrs}></span>`.trim();
}

export const spinner = Spinner;
