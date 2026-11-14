import { classNames, escapeHtml, toAttributes, type ComponentSize } from "../utils";
import type { ButtonVariant } from "./button";

export interface ChipProps {
  label?: string;
  children?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  outline?: boolean;
  soft?: boolean;
  ghost?: boolean;
  size?: ComponentSize;
  icon?: string;
  iconClass?: string;
  avatar?: string;
  trailingIcon?: string;
  removable?: boolean;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Chip(props: ChipProps = {}): string {
  const {
    label,
    children,
    type = "button",
    variant = "secondary",
    outline = false,
    soft = true,
    ghost = false,
    size = "sm",
    icon,
    iconClass = "",
    avatar,
    trailingIcon,
    removable = false,
    active = false,
    disabled = false,
    href,
    className = "",
    attributes
  } = props;

  let variantClass = `chip-${variant}`;
  if (ghost) {
    variantClass = "chip-ghost";
  } else if (outline) {
    variantClass = `chip-outline-${variant}`;
  } else if (soft) {
    variantClass = `chip-soft-${variant}`;
  }

  const sizeClass = size ? `chip-${size}` : "chip-sm";

  const classes = classNames("chip", variantClass, sizeClass, active && "active", disabled && "disabled", className);

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

  const leadingContent = avatar
    ? `<img src="${escapeHtml(avatar)}" alt="" class="chip-avatar rounded-circle shrink-0" />`
    : icon
      ? `<i class="mdi ${escapeHtml(icon)} ${escapeHtml(iconClass)} chip-icon shrink-0"></i>`
      : "";

  const textLabel =
    label !== undefined
      ? `<span class="chip-label text-truncate">${escapeHtml(label)}</span>`
      : children !== undefined
        ? children
        : "";

  const trailingContent = removable
    ? `<span class="chip-action chip-remove ms-1 shrink-0" data-chip-remove="" aria-label="Remove"><i class="mdi mdi-close text-xs"></i></span>`
    : trailingIcon
      ? `<i class="mdi ${escapeHtml(trailingIcon)} chip-icon chip-trailing ms-1 shrink-0"></i>`
      : "";

  return `<${Tag} class="${classes}"${baseAttrs}>${leadingContent}${textLabel}${trailingContent}</${Tag}>`;
}

export const chip = Chip;
