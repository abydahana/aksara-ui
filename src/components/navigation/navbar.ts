import { classNames, escapeHtml, toAttributes } from "../utils";

export interface NavbarProps {
  children?: string;
  brand?: string;
  brandHref?: string;
  expand?: "sm" | "md" | "lg" | "xl" | "xxl";
  dark?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Navbar(props: NavbarProps = {}): string {
  const { children = "", brand, brandHref = "#", expand, dark = false, className = "", attributes } = props;

  const classes = classNames(
    "navbar",
    expand ? `navbar-expand-${expand}` : "navbar-expand",
    dark && "navbar-dark bg-dark",
    className
  );

  const baseAttrs = toAttributes(attributes);

  const brandHtml = brand ? `<a class="navbar-brand" href="${escapeHtml(brandHref)}">${escapeHtml(brand)}</a>` : "";

  return `
    <nav class="${classes}"${baseAttrs}>
      ${brandHtml}
      ${children}
    </nav>
  `.trim();
}

export const navbar = Navbar;

export interface NavLinkProps {
  label: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  className?: string;
}

export function NavLink(props: NavLinkProps): string {
  const { label, href = "#", active = false, disabled = false, className = "" } = props;

  const classes = classNames("nav-link", active && "active", disabled && "disabled", className);

  const currentAttr = active ? ' aria-current="page"' : "";
  const disabledAttr = disabled ? ' tabindex="-1" aria-disabled="true"' : "";

  return `<a class="${classes}" href="${escapeHtml(href)}"${currentAttr}${disabledAttr}>${escapeHtml(label)}</a>`.trim();
}

export const navLink = NavLink;
