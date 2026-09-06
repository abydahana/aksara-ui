import { classNames, escapeHtml, toAttributes } from "../utils";

export interface ScrollspyTargetProps {
  id: string;
  children?: string;
  height?: string | number;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ScrollspyTarget(props: ScrollspyTargetProps): string {
  const { id, children = "", height = 300, className = "", attributes } = props;

  const styleAttr = height
    ? ` style="height: ${typeof height === "number" ? `${height}px` : height}; position: relative; overflow-y: auto;"`
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
  targetId: string;
  as?: "list-group" | "nav";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ScrollspyNav(props: ScrollspyNavProps): string {
  const { items = [], targetId, as = "list-group", className = "", attributes } = props;

  const targetSelector = targetId.startsWith("#") ? targetId : `#${targetId}`;
  const isListGroup = as === "list-group";

  const containerClasses = classNames(isListGroup ? "list-group" : "nav flex-column", className);

  const baseAttrs = toAttributes({
    "data-scrollspy-nav": "true",
    ...attributes
  });

  const linksHtml = items
    .map((item, idx) => {
      const isActive = item.active ?? idx === 0;
      const linkClass = classNames(
        isListGroup ? "list-group-item list-group-item-action" : "nav-link",
        isActive && "active"
      );
      const sectionSelector = item.id.startsWith("#") ? item.id : `#${item.id}`;

      return `
        <a
          href="${escapeHtml(sectionSelector)}"
          class="${linkClass}"
          data-scrollspy-link
          data-scrollspy-container="${escapeHtml(targetSelector)}"
        >
          ${escapeHtml(item.label)}
        </a>
      `.trim();
    })
    .join("\n");

  return `<nav class="${containerClasses}"${baseAttrs}>${linksHtml}</nav>`.trim();
}

export const scrollspyNav = ScrollspyNav;
