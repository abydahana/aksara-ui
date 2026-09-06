import { classNames, escapeHtml, toAttributes } from "../utils";

export interface MediaGridItem {
  src: string;
  alt?: string;
  caption?: string;
  dataIndex?: number;
  attributes?: Record<string, unknown>;
}

export interface MediaGridProps {
  items: MediaGridItem[];
  maxDisplay?: number;
  gap?: 1 | 2 | 3 | 4;
  rounded?: boolean;
  onItemClickAttribute?: string;
  itemClickDataId?: string;
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
    rounded && "rounded-12",
    "overflow-hidden",
    className
  );

  const baseAttrs = toAttributes({
    ...(itemClickDataId ? { "data-media-id": itemClickDataId } : {}),
    ...attributes
  });

  const cellsHtml = displayed
    .map((item, idx) => {
      const isLast = idx === maxDisplay - 1 && extraCount > 0;
      const cellClasses = classNames(
        "media-grid-item",
        `media-grid-item-${idx + 1}`,
        isLast && "has-overlay",
        "position-relative overflow-hidden cursor-pointer"
      );

      const itemAttrs = toAttributes({
        ...(onItemClickAttribute && itemClickDataId ? { [onItemClickAttribute]: itemClickDataId } : {}),
        "data-media-index": item.dataIndex ?? idx,
        ...item.attributes
      });

      const overlayHtml = isLast
        ? `
          <div class="media-grid-overlay position-absolute inset-0 d-flex align-items-center justify-content-center">
            <span class="media-grid-overlay-text font-bold text-white text-24">+${extraCount}</span>
          </div>
        `.trim()
        : "";

      return `
        <div class="${cellClasses}"${itemAttrs}>
          <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || `Media item ${idx + 1}`)}" class="media-grid-img w-full h-full object-cover block" loading="lazy" />
          ${overlayHtml}
        </div>
      `.trim();
    })
    .join("\n");

  return `<div class="${containerClasses}"${baseAttrs}>${cellsHtml}</div>`.trim();
}

export const mediaGrid = MediaGrid;
