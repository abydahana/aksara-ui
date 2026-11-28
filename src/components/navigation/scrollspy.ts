import { classNames, escapeHtml, safeCssLength, toAttributes } from "../utils";

export interface ScrollspyTargetProps {
  id: string;
  children?: string;
  height?: string | number;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ScrollspyTarget(props: ScrollspyTargetProps): string {
  const { id, children = "", height = 300, className = "", attributes } = props;

  const safeHeight = height ? safeCssLength(height, "") : "";
  const styleAttr = safeHeight
    ? ` style="height: ${safeHeight}; position: relative; overflow-y: auto;"`
    : ' style="position: relative; overflow-y: auto;"';
  const baseAttrs = toAttributes({
    id,
    "data-scrollspy": "target",
    ...attributes
  });

  return `<div class="${classNames("scrollspy-target", className)}"${styleAttr}${baseAttrs}>${children}</div>`.trim();
}

export const scrollspyTarget = ScrollspyTarget;

export interface ScrollspyNavItem {
  id: string;
  label: string;
  active?: boolean;
}

export interface ScrollspyNavProps {
  items: ScrollspyNavItem[];
  /** Scroll container id. Omit it to spy on the page scroll. */
  targetId?: string;
  /** `"list-group"` (default), `"nav"` (`.nav` + `.nav-link`) or `"sidebar"` (`.sidebar-nav` + `.sidebar-nav-item`). */
  as?: "list-group" | "nav" | "sidebar";
  /** Stack `as: "nav"` links vertically with `flex-column` (default `true`). */
  vertical?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ScrollspyNav(props: ScrollspyNavProps): string {
  const { items = [], targetId, as = "list-group", vertical = true, className = "", attributes } = props;

  const targetSelector = targetId ? (targetId.startsWith("#") ? targetId : `#${targetId}`) : "";
  const containerAttr = targetSelector ? `\n          data-scrollspy-container="${escapeHtml(targetSelector)}"` : "";

  const containerClasses = classNames(
    as === "list-group" ? "list-group" : as === "sidebar" ? "sidebar-nav" : "nav",
    as === "nav" && vertical && "flex-column",
    className
  );
  const linkBaseClass =
    as === "list-group" ? "list-group-item list-group-item-action" : as === "sidebar" ? "sidebar-nav-item" : "nav-link";

  const baseAttrs = toAttributes({
    "data-scrollspy-nav": "true",
    ...attributes
  });

  const linksHtml = items
    .map((item, idx) => {
      const isActive = item.active ?? idx === 0;
      const linkClass = classNames(linkBaseClass, isActive && "active");
      const sectionSelector = item.id.startsWith("#") ? item.id : `#${item.id}`;

      return `
        <a
          href="${escapeHtml(sectionSelector)}"
          class="${linkClass}"
          data-scrollspy-link${containerAttr}
        >
          ${escapeHtml(item.label)}
        </a>
      `.trim();
    })
    .join("\n");

  return `<nav class="${containerClasses}"${baseAttrs}>${linksHtml}</nav>`.trim();
}

export const scrollspyNav = ScrollspyNav;
