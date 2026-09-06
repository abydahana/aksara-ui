import { classNames, escapeHtml, toAttributes } from "../utils";

export type BadgeVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light";

export interface BadgeProps {
  label?: string;
  children?: string;
  variant?: BadgeVariant;
  soft?: boolean;
  pill?: boolean;
  dot?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Badge(props: BadgeProps = {}): string {
  const {
    label,
    children,
    variant = "primary",
    soft = false,
    pill = false,
    dot = false,
    className = "",
    attributes
  } = props;

  const prefix = soft ? "badge-soft" : "badge";

  const classes = classNames(
    "badge",
    `${prefix}-${variant}`,
    pill && "rounded-pill",
    dot && `badge-dot text-${variant}`,
    className
  );

  const baseAttrs = toAttributes(attributes);
  const content = children !== undefined ? children : label !== undefined ? escapeHtml(label) : "";

  return `<span class="${classes}"${baseAttrs}>${content}</span>`.trim();
}

export const badge = Badge;
