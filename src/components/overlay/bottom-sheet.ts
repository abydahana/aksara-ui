import { classNames, escapeHtml, safeUrl, toAttributes } from "../utils";

function mdi(icon: string): string {
  return /\s|^mdi /.test(icon) ? icon : `mdi mdi-${icon.replace(/^mdi-/, "")}`;
}

export interface SheetItemProps {
  label: string;
  /** MDI name (`"cog-outline"`) or a full class list. */
  icon?: string;
  /** Second line under the label. */
  text?: string;
  /** Right-aligned value (`"Public"`, `"3"`). */
  meta?: string;
  href?: string;
  /** Selector of a sub-sheet panel to push (adds a chevron). */
  push?: string;
  danger?: boolean;
  active?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** A row in a bottom sheet: link, action button, or a button that pushes a sub-sheet. */
export function SheetItem(props: SheetItemProps): string {
  const { label, icon, text, meta, href, push, danger = false, active = false, className = "", attributes } = props;
  const tag = href ? "a" : "button";
  const attrs = toAttributes({
    href: href ? safeUrl(href) : undefined,
    type: href ? undefined : "button",
    "data-sheet-push": push,
    "aria-current": active ? "page" : undefined,
    ...attributes
  });
  const classes = classNames("sheet-item", danger && "sheet-item-danger", active && "active", className);
  const iconHtml = icon ? `<span class="sheet-item-icon ${escapeHtml(mdi(icon))}" aria-hidden="true"></span>` : "";
  const textHtml = text ? `<span class="sheet-item-text">${escapeHtml(text)}</span>` : "";
  const metaHtml = meta ? `<span class="sheet-item-meta">${escapeHtml(meta)}</span>` : "";
  const chevron = push ? `<span class="sheet-item-chevron mdi mdi-chevron-right" aria-hidden="true"></span>` : "";
  return `<${tag} class="${classes}"${attrs}>${iconHtml}<span class="sheet-item-label">${escapeHtml(label)}${textHtml}</span>${metaHtml}${chevron}</${tag}>`;
}

export interface SheetGridItemProps {
  label: string;
  icon: string;
  href?: string;
  /** Palette color for the icon tile, e.g. `"success"`. */
  color?: string;
  attributes?: Record<string, unknown>;
}

export interface SheetGridProps {
  items: SheetGridItemProps[];
  /** Solid colored tiles with a light glyph, like phone app icons (`bg-text-{color}`). */
  solid?: boolean;
  /** Tiles per row: 3, 4 (default) or 5. */
  columns?: 3 | 4 | 5;
  className?: string;
}

/** Icon grid (app launcher / share sheet). Labels stay on one line with an ellipsis. */
export function SheetGrid(props: SheetGridProps): string {
  const cells = props.items
    .map((item) => {
      const tag = item.href ? "a" : "button";
      const attrs = toAttributes({
        href: item.href ? safeUrl(item.href) : undefined,
        type: item.href ? undefined : "button",
        ...item.attributes
      });
      const color = item.color ? ` ${props.solid ? "bg-text" : "text"}-${escapeHtml(item.color)}` : "";
      return `<${tag} class="sheet-grid-item"${attrs}><span class="sheet-grid-icon${color} ${escapeHtml(mdi(item.icon))}" aria-hidden="true"></span><span class="sheet-grid-label">${escapeHtml(item.label)}</span></${tag}>`;
    })
    .join("");
  const columns = props.columns && props.columns !== 4 ? `sheet-grid-${props.columns}` : "";
  return `<div class="${classNames("sheet-grid", columns, props.className)}">${cells}</div>`;
}

export interface SheetPanelProps {
  id?: string;
  title?: string;
  subtitle?: string;
  /** Show a back button (sub-sheets). */
  back?: boolean;
  /** Show a close button. Defaults to true on panels without a back button. */
  close?: boolean;
  /** Drag handle on top. Defaults to true. */
  handle?: boolean;
  body?: string;
  footer?: string;
  className?: string;
}

/** One sheet (root or sub-sheet) inside a `BottomSheet`. */
export function SheetPanel(props: SheetPanelProps = {}): string {
  const { id, title, subtitle, back = false, close = !back, handle = true, body = "", footer, className = "" } = props;
  const titleId = id && title ? `${id}-title` : undefined;
  const attrs = toAttributes({ id, "aria-labelledby": titleId });
  const backHtml = back
    ? `<button type="button" class="sheet-back" data-sheet-back aria-label="Back"><span class="mdi mdi-chevron-left"></span></button>`
    : "";
  const closeHtml = close
    ? `<button type="button" class="btn-close" data-sheet-close aria-label="Close"></button>`
    : "";
  const subtitleHtml = subtitle ? `<span class="sheet-subtitle">${escapeHtml(subtitle)}</span>` : "";
  const header =
    title || back || close
      ? `<div class="sheet-header">${backHtml}<h2 class="sheet-title"${titleId ? ` id="${escapeHtml(titleId)}"` : ""}>${escapeHtml(title ?? "")}${subtitleHtml}</h2>${closeHtml}</div>`
      : "";
  return `<div class="${classNames("sheet-panel", className)}"${attrs}>${handle ? '<div class="sheet-handle" aria-hidden="true"></div>' : ""}${header}<div class="sheet-body">${body}</div>${footer ? `<div class="sheet-footer">${footer}</div>` : ""}</div>`;
}

export interface BottomSheetProps {
  id: string;
  /** Panels (`SheetPanel(...)`); the first one opens by default. */
  panels?: string[];
  children?: string;
  backdrop?: boolean | "static";
  swipe?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** Bottom sheet root. Open it with `data-sheet="#id"` or `Aksara.sheet("#id").show()`. */
export function BottomSheet(props: BottomSheetProps): string {
  const { id, panels = [], children = "", backdrop, swipe, className = "", attributes } = props;
  const attrs = toAttributes({
    id,
    "data-sheet-backdrop": backdrop === undefined ? undefined : String(backdrop),
    "data-sheet-swipe": swipe === undefined ? undefined : String(swipe),
    ...attributes
  });
  return `<div class="${classNames("sheet", className)}"${attrs}>${panels.join("")}${children}</div>`;
}

export const sheetItem = SheetItem;
export const sheetGrid = SheetGrid;
export const sheetPanel = SheetPanel;
export const bottomSheet = BottomSheet;
