import { classNames, escapeHtml, toAttributes } from "../utils";

export type ButtonVariant =
  "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "link";

export interface ButtonProps {
  label?: string;
  children?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  outline?: boolean;
  soft?: boolean;
  ghost?: boolean;
  size?: "sm" | "lg";
  pill?: boolean;
  disabled?: boolean;
  href?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Button(props: ButtonProps = {}): string {
  const {
    label,
    children,
    type = "button",
    variant = "primary",
    outline = false,
    soft = false,
    ghost = false,
    size,
    pill = false,
    disabled = false,
    href,
    className = "",
    attributes
  } = props;

  let variantClass = `btn-${variant}`;
  if (ghost) {
    variantClass = "btn-ghost";
  } else if (outline) {
    variantClass = `btn-outline-${variant}`;
  } else if (soft) {
    variantClass = `btn-soft-${variant}`;
  }

  const classes = classNames(
    "btn",
    variantClass,
    size === "sm" && "btn-sm",
    size === "lg" && "btn-lg",
    pill && "rounded-pill",
    disabled && "disabled",
    className
  );

  const isLink = Boolean(href);
  const Tag = isLink ? "a" : "button";

  const baseAttrs = toAttributes({
    href,
    type: isLink ? undefined : type,
    disabled: !isLink && disabled ? true : undefined,
    "aria-disabled": isLink && disabled ? "true" : undefined,
    tabindex: isLink && disabled ? "-1" : undefined,
    ...attributes
  });

  const content = children !== undefined ? children : label !== undefined ? escapeHtml(label) : "";

  return `<${Tag} class="${classes}"${baseAttrs}>${content}</${Tag}>`.trim();
}

export const button = Button;
