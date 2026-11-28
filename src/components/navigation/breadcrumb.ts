import { classNames, escapeHtml, iconClasses, safeUrl, toAttributes } from "../utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
  /** Leading icon classes (e.g. `"mdi-home-outline"`). The item becomes an `hstack gap-1` row. */
  icon?: string;
  /** Show only the icon; `label` becomes the link's `aria-label`. */
  iconOnly?: boolean;
  /**
   * Raw HTML used instead of the escaped `label`. Without an `href`, a non-active item renders
   * this HTML straight into the `<li>` (no link), e.g. a "…" dropdown for a collapsed path.
   */
  labelHtml?: string;
  /** Extra classes on the `<li>`. */
  className?: string;
  /** Extra classes on the link (e.g. `"truncate max-w-[10rem]"`). */
  linkClassName?: string;
  /** Extra attributes on the link (e.g. `{ title: "Full label" }`). */
  linkAttributes?: Record<string, unknown>;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: "slash" | "dot" | "arrow";
  className?: string;
  attributes?: Record<string, unknown>;
}

function itemContent(item: BreadcrumbItem): string {
  const label = item.labelHtml ?? escapeHtml(item.label);
  if (!item.icon) return label;
  const iconHtml = `<span class="${classNames(iconClasses(item.icon))}"></span>`;
  return item.iconOnly ? iconHtml : `${iconHtml} ${label}`;
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
      const iconRow = item.icon && !item.iconOnly ? "hstack gap-1" : "";

      if (isActive) {
        const liClasses = classNames("breadcrumb-item active", iconRow, item.className);
        return `<li class="${liClasses}" aria-current="page">${itemContent(item)}</li>`;
      }

      const liClasses = classNames("breadcrumb-item", item.className);

      if (item.labelHtml !== undefined && item.href === undefined) {
        return `<li class="${liClasses}">${itemContent(item)}</li>`;
      }

      const linkClasses = [iconRow, item.linkClassName].filter(Boolean).join(" ");
      const linkAttrs = toAttributes({
        href: safeUrl(item.href ?? "#"),
        class: linkClasses || undefined,
        "aria-label": item.iconOnly ? item.label : undefined,
        ...item.linkAttributes
      });
      return `<li class="${liClasses}"><a${linkAttrs}>${itemContent(item)}</a></li>`;
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
