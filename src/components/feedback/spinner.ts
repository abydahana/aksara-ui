import { classNames, toAttributes } from "../utils";

export interface SpinnerProps {
  size?: "sm" | "md";
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
  label?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Spinner(props: SpinnerProps = {}): string {
  const { size, variant, label = "Loading...", className = "", attributes } = props;

  const classes = classNames("spinner", size === "sm" && "spinner-sm", variant && `text-${variant}`, className);

  const baseAttrs = toAttributes({
    role: "status",
    "aria-label": label,
    ...attributes
  });

  return `<span class="${classes}"${baseAttrs}></span>`.trim();
}

export const spinner = Spinner;
