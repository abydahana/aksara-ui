import { classNames, escapeHtml, toAttributes } from "../utils";

export interface PaginationItem {
  label: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  attributes?: Record<string, unknown>;
}

export interface PaginationProps {
  items: PaginationItem[];
  size?: "sm" | "lg";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Pagination(props: PaginationProps): string {
  const { items = [], size, className = "", attributes } = props;

  const classes = classNames(
    "pagination",
    size === "sm" && "pagination-sm",
    size === "lg" && "pagination-lg",
    className
  );

  const baseAttrs = toAttributes(attributes);

  const renderedItems = items
    .map((item) => {
      const linkClasses = classNames("page-link", item.disabled && "disabled");
      const liClasses = classNames("page-item", item.active && "active", item.disabled && "disabled");

      const href = item.disabled ? "#" : (item.href ?? "#");
      const currentAttr = item.active ? ' aria-current="page"' : "";
      const disabledAttr = item.disabled ? ' aria-disabled="true" tabindex="-1"' : "";
      const itemAttrs = toAttributes(item.attributes);

      return `
        <li class="${liClasses}">
          <a href="${escapeHtml(href)}" class="${linkClasses}"${currentAttr}${disabledAttr}${itemAttrs}>
            ${item.label}
          </a>
        </li>
      `.trim();
    })
    .join("");

  return `
    <nav aria-label="Page navigation"${baseAttrs}>
      <ul class="${classes}">
        ${renderedItems}
      </ul>
    </nav>
  `.trim();
}

export const pagination = Pagination;
