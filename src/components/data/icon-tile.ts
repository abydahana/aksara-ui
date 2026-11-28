import { classNames, escapeHtml, iconClasses, toAttributes } from "../utils";

export interface IconTileProps {
  /** Icon class (`"mdi-rocket-launch-outline"`) or use `children` for custom HTML/SVG. */
  icon?: string;
  children?: string;
  variant?: "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "rounded" | "circle";
  outline?: boolean;
  /** Accessible name; without it the tile is decorative (`aria-hidden`). */
  label?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** Icon on a soft tinted square/circle, for feature lists, settings rows and stats. */
export function IconTile(props: IconTileProps = {}): string {
  const {
    icon,
    children,
    variant,
    size = "md",
    shape = "rounded",
    outline = false,
    label,
    className = "",
    attributes
  } = props;
  const classes = classNames(
    "icon-tile",
    size !== "md" && `icon-tile-${size}`,
    variant && `icon-tile-${variant}`,
    shape === "circle" && "icon-tile-circle",
    outline && "icon-tile-outline",
    className
  );
  const attrs = toAttributes({
    role: label ? "img" : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : "true",
    ...attributes
  });
  const content = children ?? (icon ? `<span class="${escapeHtml(iconClasses(icon))}"></span>` : "");
  return `<span class="${classes}"${attrs}>${content}</span>`;
}

export const iconTile = IconTile;
