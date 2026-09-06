import { classNames, escapeHtml, toAttributes } from "../utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: "slash" | "dot" | "arrow";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Breadcrumb(props: BreadcrumbProps): string {
  const { items = [], separator = "slash", className = "", attributes } = props;

  const classes = classNames(
    "breadcrumb",
    separator === "dot" && "breadcrumb-dot",
    separator === "arrow" && "breadcrumb-arrow",
    className
  );

  const baseAttrs = toAttributes(attributes);

  const renderedItems = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      const isActive = item.active ?? isLast;

      if (isActive) {
        return `<li class="breadcrumb-item active" aria-current="page">${escapeHtml(item.label)}</li>`;
      }

      const href = item.href ?? "#";
      return `<li class="breadcrumb-item"><a href="${escapeHtml(href)}">${escapeHtml(item.label)}</a></li>`;
    })
    .join("");

  return `
    <nav aria-label="breadcrumb"${baseAttrs}>
      <ol class="${classes}">
        ${renderedItems}
      </ol>
    </nav>
  `.trim();
}

export const breadcrumb = Breadcrumb;
