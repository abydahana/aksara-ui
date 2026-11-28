import { classNames, escapeHtml, toAttributes } from "../utils";

// ── SidebarNavItem ────────────────────────────────────────────────────────────

export interface SidebarNavItemProps {
  /** Unique ID (used for tab panel targeting) */
  id?: string;
  /** Label text */
  label: string;
  /** Icon HTML string */
  icon?: string;
  /** Badge text or count */
  badge?: string;
  /** Active state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Link mode: render as <a href="..."> */
  href?: string;
  /** Tab mode: render as <button data-tabs="#panelId"> */
  panelTarget?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** A section heading placed between items: `{ header: "Account" }`. */
export interface SidebarNavHeaderItem {
  header: string;
  className?: string;
}

// ── SidebarNavProps ───────────────────────────────────────────────────────────

export interface SidebarNavProps {
  /** Nav items; `{ header: "..." }` entries render a `.sidebar-nav-header` at that position. */
  items: Array<SidebarNavItemProps | SidebarNavHeaderItem>;
  /** Brand section title at the top */
  title?: string;
  /** Brand section subtitle */
  subtitle?: string;
  /** Brand icon HTML */
  brandIcon?: string;
  /** Accessible label for the nav / tablist */
  ariaLabel?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * Sidebar navigation that supports two modes:
 *
 * - **Tab mode** (`panelTarget` prop): renders `<button data-tabs="#panelId">` —
 *   integrates with Aksara's tab JS to show/hide content panels.
 * - **Link mode** (`href` prop): renders `<a href="...">` — plain navigation links.
 *
 * @example Tab mode
 * SidebarNav({
 *   title: "Settings",
 *   items: [
 *     { label: "Privacy", icon: '<span class="mdi mdi-lock-outline">', panelTarget: "#panel-privacy", active: true },
 *     { label: "Notifications", icon: '<span class="mdi mdi-bell-outline">', panelTarget: "#panel-notif" },
 *   ]
 * })
 *
 * @example Link mode
 * SidebarNav({
 *   items: [
 *     { label: "Dashboard", icon: '<span class="mdi mdi-home-outline">', href: "/dashboard", active: true },
 *     { label: "Settings", icon: '<span class="mdi mdi-cog-outline">', href: "/settings" },
 *   ]
 * })
 */
export function SidebarNav(props: SidebarNavProps): string {
  const { items = [], title = "", subtitle = "", brandIcon = "", ariaLabel, className = "", attributes } = props;

  const isHeader = (item: SidebarNavItemProps | SidebarNavHeaderItem): item is SidebarNavHeaderItem =>
    typeof (item as SidebarNavHeaderItem).header === "string";
  const hasTabs = items.some((item) => !isHeader(item) && Boolean(item.panelTarget) && !item.href);

  // Tab mode: the nav is the tablist. `data-tabs-root` marks it for the Tabs runtime
  // (which auto-initializes `.tabs` only); `data-tabs-orientation` drives arrow keys.
  const baseAttrs = toAttributes({
    role: hasTabs ? "tablist" : undefined,
    "aria-orientation": hasTabs ? "vertical" : undefined,
    "aria-label": ariaLabel ?? (title || undefined),
    "data-tabs-root": hasTabs ? "" : undefined,
    "data-tabs-orientation": hasTabs ? "vertical" : undefined,
    ...attributes
  });

  // Brand section
  const brandHtml = title
    ? `<div class="sidebar-nav-brand">${brandIcon ? `<span class="sidebar-nav-icon">${brandIcon}</span>` : ""}<div><span class="sidebar-nav-brand-title">${escapeHtml(title)}</span>${subtitle ? `<span class="sidebar-nav-brand-subtitle">${escapeHtml(subtitle)}</span>` : ""}</div></div>`
    : "";

  // Items
  const itemsHtml = items
    .map((item) => {
      if (isHeader(item)) return SidebarNavHeader({ label: item.header, className: item.className });
      const isLink = Boolean(item.href);
      const isTab = Boolean(item.panelTarget) && !isLink;
      const Tag = isLink ? "a" : "button";

      const itemClasses = classNames(
        "sidebar-nav-item",
        item.active && "active",
        item.disabled && "disabled",
        item.className
      );

      // aria-controls must reference the panel element id, derived from `panelTarget`
      // ("#panel-x" or a bare "panel-x" id).
      const rawTarget = isTab ? String(item.panelTarget) : "";
      const panelId = /^#?[A-Za-z_][-A-Za-z0-9_:.]*$/.test(rawTarget) ? rawTarget.replace(/^#/, "") : "";
      const panelSelector = panelId ? `#${panelId}` : rawTarget;

      const itemAttrs = toAttributes({
        href: isLink ? item.href : undefined,
        type: !isLink ? "button" : undefined,
        "data-tabs": isTab ? panelSelector : undefined,
        role: isTab ? "tab" : undefined,
        "aria-selected": isTab ? (item.active ? "true" : "false") : undefined,
        tabindex: isTab ? (item.active ? "0" : "-1") : undefined,
        id: isTab && item.id ? `sidebar-tab-${item.id}` : item.id,
        "aria-controls": panelId || undefined,
        disabled: !isLink && item.disabled ? true : undefined,
        "aria-disabled": item.disabled ? "true" : undefined,
        "aria-current": isLink && item.active ? "page" : undefined,
        ...item.attributes
      });

      const iconHtml = item.icon ? `<span class="sidebar-nav-icon" aria-hidden="true">${item.icon}</span>` : "";

      const badgeHtml = item.badge ? `<span class="sidebar-nav-badge">${escapeHtml(item.badge)}</span>` : "";

      return `<${Tag} class="${itemClasses}"${itemAttrs}>${iconHtml}<span class="sidebar-nav-label">${escapeHtml(item.label)}</span>${badgeHtml}</${Tag}>`;
    })
    .join("");

  return `<nav class="${classNames("sidebar-nav", className)}"${baseAttrs}>${brandHtml}${itemsHtml}</nav>`.trim();
}

export const sidebarNav = SidebarNav;

// ── SidebarNavHeader ──────────────────────────────────────────────────────────

export interface SidebarNavHeaderProps {
  label: string;
  className?: string;
}

/** A group header label inside a SidebarNav */
export function SidebarNavHeader(props: SidebarNavHeaderProps): string {
  const { label, className = "" } = props;
  return `<span class="${classNames("sidebar-nav-header", className)}">${escapeHtml(label)}</span>`;
}

export const sidebarNavHeader = SidebarNavHeader;

// ── SidebarLayout ─────────────────────────────────────────────────────────────

export interface SidebarLayoutProps {
  sidebar: string;
  content: string;
  className?: string;
  /** Extra classes for `.sidebar-pane`. */
  paneClassName?: string;
  /** Extra classes for `.sidebar-content` (e.g. `p-5`). */
  contentClassName?: string;
  attributes?: Record<string, unknown>;
}

/**
 * Two-column layout wrapper: sidebar pane on the left, content area on the right.
 *
 * @example
 * SidebarLayout({
 *   sidebar: SidebarNav({ ... }),
 *   content: '<div class="p-5">Panel content here</div>'
 * })
 */
export function SidebarLayout(props: SidebarLayoutProps): string {
  const { sidebar, content, className = "", paneClassName = "", contentClassName = "", attributes } = props;
  const baseAttrs = toAttributes(attributes);
  return `<div class="${classNames("sidebar-layout", className)}"${baseAttrs}><div class="${classNames("sidebar-pane", paneClassName)}">${sidebar}</div><div class="${classNames("sidebar-content", contentClassName)}">${content}</div></div>`.trim();
}

export const sidebarLayout = SidebarLayout;
