import { classNames, escapeHtml, toAttributes } from "../utils";

export interface DescriptionItem {
  term: string;
  /** Escaped text; use `html` for markup (badges, links). */
  detail?: string;
  html?: string;
  /** Classes for this row's `<dd>` (e.g. `hstack gap-2`). */
  detailClassName?: string;
}

export interface DescriptionListProps {
  items: DescriptionItem[];
  /** `stacked` (term above detail), `horizontal` (side by side from sm up) or `grid` (auto columns). */
  layout?: "stacked" | "horizontal" | "grid";
  /** Hairlines between rows. */
  divided?: boolean;
  /** Width of the term column in the horizontal layout (`"12rem"`, `"35%"`). */
  termWidth?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** Key/value details (`<dl>`): order summaries, profile fields, specs. */
export function DescriptionList(props: DescriptionListProps): string {
  const { items, layout = "stacked", divided = false, termWidth, className = "", attributes } = props;
  const classes = classNames(
    "desc-list",
    layout === "horizontal" && "desc-list-horizontal",
    layout === "grid" && "desc-list-grid",
    divided && "desc-list-divided",
    termWidth && `[--aksara-desc-term:${termWidth.replace(/[^\w.%-]/g, "")}]`,
    className
  );
  const rows = items
    .map(
      (item) =>
        `<div><dt>${escapeHtml(item.term)}</dt><dd${item.detailClassName ? ` class="${escapeHtml(item.detailClassName)}"` : ""}>${item.html ?? escapeHtml(item.detail ?? "")}</dd></div>`
    )
    .join("");
  return `<dl class="${classes}"${toAttributes(attributes)}>${rows}</dl>`;
}

export const descriptionList = DescriptionList;
