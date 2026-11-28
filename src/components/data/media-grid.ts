import { classNames, escapeHtml, isSafeAttributeName, safeUrl, toAttributes } from "../utils";

export interface MediaGridItem {
  src: string;
  alt?: string;
  caption?: string;
  dataIndex?: number;
  /** Extra classes on this cell (e.g. `"rounded-0"`). */
  className?: string;
  /** Custom overlay content (raw HTML) inside a `.media-grid-overlay` on this cell. Replaces the `+N` counter. */
  overlayHtml?: string;
  attributes?: Record<string, unknown>;
}

export interface MediaGridProps {
  items: MediaGridItem[];
  maxDisplay?: number;
  gap?: 1 | 2 | 3 | 4;
  rounded?: boolean;
  /**
   * Name of a data attribute set on every cell with `itemClickDataId` as value
   * (e.g. `"data-open-media"`). Event-handler names (`on*`) are rejected.
   */
  onItemClickAttribute?: string;
  itemClickDataId?: string;
  /**
   * Selector of a `MediaPreviewModal` (e.g. `"#viewer"`): clicking a cell opens it at that
   * item, with every item (also the ones hidden behind "+N") available to browse.
   */
  viewer?: string;
  /** Extra classes on every cell (e.g. `"rounded-0"` for a seamless block). */
  itemClassName?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function MediaGrid(props: MediaGridProps): string {
  const {
    items = [],
    maxDisplay = 4,
    gap = 2,
    rounded = true,
    onItemClickAttribute,
    itemClickDataId,
    itemClassName = "",
    viewer,
    className = "",
    attributes
  } = props;

  const count = items.length;
  if (count === 0) return "";

  const displayed = items.slice(0, maxDisplay);
  const extraCount = count - maxDisplay;

  let gridVariant = "media-grid-1";
  if (count === 2) gridVariant = "media-grid-2";
  else if (count === 3) gridVariant = "media-grid-3";
  else if (count >= 4) gridVariant = "media-grid-4";

  const containerClasses = classNames(
    "media-grid",
    gridVariant,
    gap && `gap-${gap}`,
    rounded && "rounded-[12px]",
    "overflow-hidden",
    className
  );

  const baseAttrs = toAttributes({
    ...(itemClickDataId ? { "data-media-id": itemClickDataId } : {}),
    ...(viewer
      ? {
          "data-media-items": JSON.stringify(
            items.map((item) => ({ src: safeUrl(item.src), alt: item.alt ?? "", caption: item.caption ?? "" }))
          )
        }
      : {}),
    ...attributes
  });

  const cellsHtml = displayed
    .map((item, idx) => {
      const isLast = idx === maxDisplay - 1 && extraCount > 0;
      const cellClasses = classNames(
        "media-grid-item",
        `media-grid-item-${idx + 1}`,
        (isLast || item.overlayHtml !== undefined) && "has-overlay",
        "position-relative overflow-hidden cursor-pointer",
        itemClassName,
        item.className
      );

      const itemAttrs = toAttributes({
        ...(onItemClickAttribute && itemClickDataId && isSafeAttributeName(onItemClickAttribute)
          ? { [onItemClickAttribute]: itemClickDataId }
          : {}),
        "data-media-index": item.dataIndex ?? idx,
        "data-media-open": viewer,
        role: viewer ? "button" : undefined,
        tabindex: viewer ? "0" : undefined,
        "aria-label": viewer ? `Open ${item.alt || `image ${idx + 1}`}` : undefined,
        ...item.attributes
      });

      const overlayHtml =
        item.overlayHtml !== undefined
          ? `<div class="media-grid-overlay position-absolute inset-0 d-flex align-items-center justify-content-center">${item.overlayHtml}</div>`
          : isLast
            ? `
          <div class="media-grid-overlay position-absolute inset-0 d-flex align-items-center justify-content-center">
            <span class="media-grid-overlay-text fw-bold text-light text-2xl">+${extraCount}</span>
          </div>
        `.trim()
            : "";

      return `
        <div class="${cellClasses}"${itemAttrs}>
          <img src="${escapeHtml(safeUrl(item.src))}" alt="${escapeHtml(item.alt || `Media item ${idx + 1}`)}" class="media-grid-img w-full h-full object-cover block" loading="lazy" />
          ${overlayHtml}
        </div>
      `.trim();
    })
    .join("\n");

  return `<div class="${containerClasses}"${baseAttrs}>${cellsHtml}</div>`.trim();
}

export const mediaGrid = MediaGrid;
