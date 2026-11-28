import { classNames, escapeHtml, safeUrl, toAttributes, type ComponentSize, normalizeSize } from "../utils";

export interface PaginationItem {
  /** Plain-text label (escaped). */
  label: string;
  /** Raw HTML content (e.g. an icon or `&laquo;`); takes precedence over `label`. */
  content?: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  attributes?: Record<string, unknown>;
}

export interface PaginationProps {
  items: PaginationItem[];
  size?: ComponentSize;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Pagination(props: PaginationProps): string {
  const { items = [], size, className = "", attributes } = props;

  const sizeClass = size ? `pagination-${normalizeSize(size)}` : "";

  const classes = classNames("pagination", sizeClass, className);

  const baseAttrs = toAttributes(attributes);

  const renderedItems = items
    .map((item) => {
      const linkClasses = classNames("page-link", item.disabled && "disabled");
      const liClasses = classNames("page-item", item.active && "active", item.disabled && "disabled");

      const href = item.disabled ? "#" : (item.href ?? "#");
      const currentAttr = item.active ? ' aria-current="page"' : "";
      const disabledAttr = item.disabled ? ' aria-disabled="true" tabindex="-1"' : "";
      // Icon-only content has no text, so the escaped label becomes its accessible name.
      const itemAttrs = toAttributes({
        "aria-label": item.content !== undefined ? item.label : undefined,
        ...item.attributes
      });

      return `
        <li class="${liClasses}">
          <a href="${escapeHtml(safeUrl(href))}" class="${linkClasses}"${currentAttr}${disabledAttr}${itemAttrs}>
            ${item.content ?? escapeHtml(item.label)}
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
