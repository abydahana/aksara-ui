import { classNames, escapeHtml, toAttributes, type ComponentSize, normalizeSize } from "../utils";

export type ButtonVariant =
  "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | "link";

export interface ButtonProps {
  label?: string;
  children?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  outline?: boolean;
  soft?: boolean;
  /** Text-only until hovered; with an explicit `variant` it renders `btn-ghost-{variant}`. */
  ghost?: boolean;
  /** Surface button with a hairline border (`btn-plain`), e.g. "Cancel". */
  plain?: boolean;
  /** Neutral tinted button (`btn-subtle`). */
  subtle?: boolean;
  size?: ComponentSize;
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
    plain = false,
    subtle = false,
    size,
    pill = false,
    disabled = false,
    href,
    className = "",
    attributes
  } = props;

  let variantClass = `btn-${variant}`;
  if (plain) {
    variantClass = "btn-plain";
  } else if (subtle) {
    variantClass = "btn-subtle";
  } else if (ghost) {
    variantClass = props.variant ? `btn-ghost-${variant}` : "btn-ghost";
  } else if (outline) {
    variantClass = `btn-outline-${variant}`;
  } else if (soft) {
    variantClass = `btn-soft-${variant}`;
  }

  const sizeClass = size ? `btn-${normalizeSize(size)}` : "";

  const classes = classNames("btn", variantClass, sizeClass, pill && "rounded-pill", disabled && "disabled", className);

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
