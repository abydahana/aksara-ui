import { classNames, escapeHtml, safeUrl, toAttributes } from "../utils";

export interface MediaModalItem {
  src: string;
  alt?: string;
  caption?: string;
}

export interface MediaPreviewModalProps {
  id?: string;
  items: MediaModalItem[];
  activeIndex?: number;
  /** Render it open (`media-modal-open`). Otherwise open it with `Aksara.media("#id").show(index)`. */
  open?: boolean;
  /** HTML for a side panel (comments, details); stacks under the stage on small screens. */
  sidebar?: string;
  showZoomControls?: boolean;
  /** Wrap around from the last item to the first. */
  loop?: boolean;
  label?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * Full-screen media viewer. The runtime (`Aksara.media`, `[data-media-open]`,
 * `[data-media-gallery]`) adds navigation, swipe, keyboard, zoom and pan.
 */
export function MediaPreviewModal(props: MediaPreviewModalProps): string {
  const {
    id = "media-modal",
    items = [],
    activeIndex = 0,
    open = false,
    sidebar,
    showZoomControls = true,
    loop = false,
    label = "Media viewer",
    className = "",
    attributes
  } = props;

  const safeItems = items.map((item) => ({
    src: safeUrl(item.src),
    alt: item.alt ?? "",
    caption: item.caption ?? ""
  }));
  const total = safeItems.length;
  const index = Math.max(0, Math.min(activeIndex, Math.max(0, total - 1)));
  const current = safeItems[index] ?? { src: "", alt: "", caption: "" };
  const multiple = total > 1;

  const baseAttrs = toAttributes({
    id,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": label,
    "aria-hidden": open ? "false" : "true",
    tabindex: "-1",
    "data-media-items": JSON.stringify(safeItems),
    "data-media-index": index,
    "data-media-loop": loop ? "true" : undefined,
    ...attributes
  });

  // Always rendered (hidden with fewer than two items) so items added later get navigation.
  const hide = multiple ? "" : " hidden";
  const nav = `<span class="media-modal-counter" aria-live="polite"${hide}><span data-media-current>${index + 1}</span> / <span data-media-total>${total}</span></span>
      <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous"${!loop && index === 0 ? " disabled" : ""}${hide}><span class="mdi mdi-chevron-left"></span></button>
      <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next"${!loop && index >= total - 1 ? " disabled" : ""}${hide}><span class="mdi mdi-chevron-right"></span></button>`;

  const zoom = showZoomControls
    ? `<div class="media-modal-zoom" role="group" aria-label="Zoom">
        <button type="button" data-media-zoom-out aria-label="Zoom out" title="Zoom out"><span class="mdi mdi-magnify-minus-outline"></span></button>
        <button type="button" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen"><span class="mdi mdi-fit-to-screen-outline"></span></button>
        <button type="button" data-media-zoom-in aria-label="Zoom in" title="Zoom in"><span class="mdi mdi-magnify-plus-outline"></span></button>
      </div>`
    : "";

  const sidebarHtml = sidebar ? `<aside class="media-modal-sidebar">${sidebar}</aside>` : "";

  return `
    <div class="${classNames("media-modal", open && "media-modal-open", className)}"${baseAttrs}>
      <div class="media-modal-stage" data-media-stage>
        <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close"><span class="mdi mdi-close"></span></button>
        ${nav}
        <figure class="media-modal-figure">
          <img class="media-modal-image" data-media-image src="${escapeHtml(current.src)}" alt="${escapeHtml(current.alt)}" draggable="false" />
          <figcaption class="media-modal-caption" data-media-caption${current.caption ? "" : " hidden"}>${escapeHtml(current.caption)}</figcaption>
        </figure>
        ${zoom}
      </div>
      ${sidebarHtml}
    </div>
  `.trim();
}

export const mediaPreviewModal = MediaPreviewModal;
export const MediaModal = MediaPreviewModal;
export const mediaModal = MediaPreviewModal;
export type MediaModalProps = MediaPreviewModalProps;
