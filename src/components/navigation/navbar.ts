import { classNames, escapeHtml, safeUrl, toAttributes, normalizeSize } from "../utils";

export interface NavbarProps {
  children?: string;
  /** Plain-text brand (escaped). */
  brand?: string;
  /** Raw HTML brand content (icon, logo, avatar); takes precedence over `brand`. */
  brandHtml?: string;
  brandHref?: string;
  /** Breakpoint for `navbar-expand-{bp}`; omitted adds `navbar-expand`, `false` adds neither. */
  expand?: "sm" | "md" | "lg" | "xl" | "2xl" | "xxl" | false;
  dark?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Navbar(props: NavbarProps = {}): string {
  const { children = "", brand, brandHtml, brandHref = "#", expand, dark = false, className = "", attributes } = props;

  const classes = classNames(
    "navbar",
    expand === false ? null : expand ? `navbar-expand-${normalizeSize(expand)}` : "navbar-expand",
    dark && "navbar-dark bg-dark",
    className
  );

  const baseAttrs = toAttributes(attributes);

  const brandContent = brandHtml ?? (brand ? escapeHtml(brand) : "");
  const brandMarkup = brandContent
    ? `<a class="navbar-brand" href="${escapeHtml(safeUrl(brandHref))}">${brandContent}</a>`
    : "";

  return `
    <nav class="${classes}"${baseAttrs}>
      ${brandMarkup}
      ${children}
    </nav>
  `.trim();
}

export const navbar = Navbar;

export interface NavLinkProps {
  /** Plain-text label (escaped). */
  label: string;
  /** Raw HTML label (e.g. text plus a badge); takes precedence over `label`. */
  labelHtml?: string;
  /** Leading icon: an MDI name (`"folder-outline"`) or a full class list. */
  icon?: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

function navIconClass(icon: string): string {
  return /\s|^mdi /.test(icon) ? icon : `mdi mdi-${icon.replace(/^mdi-/, "")}`;
}

export function NavLink(props: NavLinkProps): string {
  const { label, labelHtml, icon, href = "#", active = false, disabled = false, className = "", attributes } = props;

  const classes = classNames("nav-link", active && "active", disabled && "disabled", className);

  const currentAttr = active ? ' aria-current="page"' : "";
  const disabledAttr = disabled ? ' tabindex="-1" aria-disabled="true"' : "";

  const iconHtml = icon ? `<span class="${classNames(navIconClass(icon))}" aria-hidden="true"></span> ` : "";
  const content = labelHtml ?? escapeHtml(label);

  return `<a class="${classes}" href="${escapeHtml(safeUrl(href))}"${currentAttr}${disabledAttr}${toAttributes(attributes)}>${iconHtml}${content}</a>`.trim();
}

export const navLink = NavLink;
