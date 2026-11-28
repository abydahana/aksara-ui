import { classNames, escapeHtml, safeUrl, toAttributes, type ComponentSize, normalizeSize } from "../utils";
export type ChipVariant =
  "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light";

export interface ChipProps {
  /** Element to render: `"button"` (default), `"span"` for a static label, or `"a"` (with `href`). */
  as?: "button" | "span" | "a";
  /** Accessible label of the remove button (default "Remove"). */
  removeLabel?: string;
  label?: string;
  children?: string;
  type?: "button" | "submit" | "reset";
  /** Palette color, or `"default"` for the neutral chip. */
  variant?: ChipVariant | "default";
  outline?: boolean;
  soft?: boolean;
  ghost?: boolean;
  size?: ComponentSize;
  icon?: string;
  iconClass?: string;
  /** Image URL for a leading avatar. */
  avatar?: string;
  /** Initials for a leading avatar instead of an image (e.g. `"MC"`). */
  avatarInitials?: string;
  /** Color of the initials avatar (`avatar-{variant}`). */
  avatarVariant?: "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
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
    as,
    removeLabel = "Remove",
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
    avatarInitials,
    avatarVariant,
    trailingIcon,
    removable = false,
    active = false,
    disabled = false,
    href,
    className = "",
    attributes
  } = props;

  let variantClass = variant === "default" ? "" : `chip-${variant}`;
  if (variant === "default" && !ghost) {
    variantClass = "";
  } else if (ghost) {
    variantClass = "chip-ghost";
  } else if (outline) {
    variantClass = `chip-outline-${variant}`;
  } else if (soft) {
    variantClass = `chip-soft-${variant}`;
  }

  const sizeClass = size ? `chip-${normalizeSize(size)}` : "chip-sm";

  const classes = classNames(
    "chip",
    variantClass,
    sizeClass,
    active && "active",
    disabled && "disabled",
    avatarInitials && !avatar && "ps-1",
    className
  );

  const isLink = Boolean(href);
  // A removable chip holds its own remove <button>, so it cannot itself be a <button>.
  const Tag = as ?? (isLink ? "a" : removable ? "span" : "button");

  const baseAttrs = toAttributes({
    href,
    type: Tag === "button" ? type : undefined,
    disabled: Tag === "button" && disabled ? true : undefined,
    "aria-disabled": isLink && disabled ? "true" : undefined,
    tabindex: isLink && disabled ? "-1" : undefined,
    ...attributes
  });

  const leadingContent = avatar
    ? `<img src="${escapeHtml(safeUrl(avatar))}" alt="" class="chip-avatar rounded-circle shrink-0" />`
    : avatarInitials
      ? `<span class="${classNames("avatar", avatarVariant && `avatar-${avatarVariant}`, "avatar-xs rounded-full")}" aria-hidden="true">${escapeHtml(avatarInitials)}</span>`
      : icon
        ? `<i class="${classNames("mdi", icon, iconClass, "chip-icon shrink-0")}"></i>`
        : "";

  const textLabel =
    label !== undefined
      ? `<span class="chip-label truncate">${escapeHtml(label)}</span>`
      : children !== undefined
        ? children
        : "";

  const trailingContent = removable
    ? `<button type="button" class="chip-action chip-remove ms-1 shrink-0" data-chip-remove="" aria-label="${escapeHtml(removeLabel)}"${disabled ? " disabled" : ""}><i class="mdi mdi-close text-xs"></i></button>`
    : trailingIcon
      ? `<i class="${classNames("mdi", trailingIcon, "chip-icon chip-trailing ms-1 shrink-0")}"></i>`
      : "";

  return `<${Tag} class="${classes}"${baseAttrs}>${leadingContent}${textLabel}${trailingContent}</${Tag}>`;
}

export const chip = Chip;
