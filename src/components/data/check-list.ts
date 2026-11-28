import { classNames, escapeHtml, toAttributes } from "../utils";

export interface CheckListItem {
  /** Escaped text; use `html` for markup. */
  text?: string;
  html?: string;
  /** Not included: crossed-out marker and muted text. */
  off?: boolean;
}

export interface CheckListProps {
  items: Array<string | CheckListItem>;
  /** Marker color. Default `success`. */
  variant?: "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
  /** Screen-reader prefix of `off` items. Default "Not included: " (e.g. "Not met: " for password rules). */
  offLabel?: string;
  /** Bare check marks instead of filled circles. */
  plain?: boolean;
  size?: "sm" | "md";
  className?: string;
  attributes?: Record<string, unknown>;
}

/** Feature / requirement list with check (and cross) markers. */
export function CheckList(props: CheckListProps): string {
  const { items, variant, plain = false, size = "md", offLabel = "Not included: ", className = "", attributes } = props;
  const classes = classNames(
    "check-list",
    variant && variant !== "success" && `check-list-${variant}`,
    plain && "check-list-plain",
    size === "sm" && "check-list-sm",
    className
  );
  const rows = items
    .map((item) => {
      const entry = typeof item === "string" ? { text: item } : item;
      const content = entry.html ?? escapeHtml(entry.text ?? "");
      return entry.off
        ? `<li class="is-off"><span class="visually-hidden">${escapeHtml(offLabel)}</span>${content}</li>`
        : `<li>${content}</li>`;
    })
    .join("");
  return `<ul class="${classes}"${toAttributes(attributes)}>${rows}</ul>`;
}

export const checkList = CheckList;
