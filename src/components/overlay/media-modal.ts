import { classNames, escapeHtml, toAttributes } from "../utils";

export interface MediaPreviewModalProps {
  id?: string;
  items: Array<{ src: string; alt?: string; caption?: string }>;
  activeIndex?: number;
  sidebar?: string;
  showZoomControls?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function MediaPreviewModal(props: MediaPreviewModalProps): string {
  const {
    id = "media-preview-modal",
    items = [],
    activeIndex = 0,
    sidebar,
    showZoomControls = true,
    className = "",
    attributes
  } = props;

  const total = items.length;
  const currentIdx = Math.max(0, Math.min(activeIndex, Math.max(0, total - 1)));
  const currentItem = items[currentIdx] || { src: "", alt: "" };

  const baseAttrs = toAttributes({
    id,
    role: "dialog",
    "aria-modal": "true",
    "data-active-index": currentIdx,
    "data-total-items": total,
    ...attributes
  });

  const counterHtml =
    total > 1
      ? `
        <div class="media-modal-counter position-absolute top-4 start-50% translate-x-[-50%] z-10 px-3 py-1 rounded-pill bg-black/60 text-white text-sm font-semibold pointer-events-none">
          <span id="media-counter-text">${currentIdx + 1} / ${total}</span>
        </div>
      `.trim()
      : "";

  const prevBtnHtml =
    total > 1
      ? `
        <button type="button" class="media-modal-btn media-modal-prev position-absolute start-4 top-50% translate-y-[-50%] z-10 w-12 h-12 rounded-full d-flex align-items-center justify-content-center border-0 bg-black/60 text-white text-xl cursor-pointer" data-media-prev aria-label="Previous media"${currentIdx === 0 ? " disabled" : ""}>
          <span class="mdi mdi-chevron-left mdi-24px"></span>
        </button>
      `.trim()
      : "";

  const nextBtnHtml =
    total > 1
      ? `
        <button type="button" class="media-modal-btn media-modal-next position-absolute end-4 top-50% translate-y-[-50%] z-10 w-12 h-12 rounded-full d-flex align-items-center justify-content-center border-0 bg-black/60 text-white text-xl cursor-pointer" data-media-next aria-label="Next media"${currentIdx === total - 1 ? " disabled" : ""}>
          <span class="mdi mdi-chevron-right mdi-24px"></span>
        </button>
      `.trim()
      : "";

  const zoomControlsHtml = showZoomControls
    ? `
      <div class="media-modal-zoom-controls position-absolute bottom-6 start-50% translate-x-[-50%] z-10 d-flex align-items-center gap-2 p-1 rounded-pill bg-black/70" id="media-zoom-controls">
        <button type="button" class="media-zoom-btn w-9 h-9 rounded-full d-flex align-items-center justify-content-center border-0 bg-transparent text-white cursor-pointer" data-media-zoom-in aria-label="Zoom in" title="Zoom in">
          <span class="mdi mdi-magnify-plus-outline mdi-18px"></span>
        </button>
        <button type="button" class="media-zoom-btn w-9 h-9 rounded-full d-flex align-items-center justify-content-center border-0 bg-transparent text-white cursor-pointer" data-media-zoom-out aria-label="Zoom out" title="Zoom out">
          <span class="mdi mdi-magnify-minus-outline mdi-18px"></span>
        </button>
        <button type="button" class="media-zoom-btn w-9 h-9 rounded-full d-flex align-items-center justify-content-center border-0 bg-transparent text-white cursor-pointer" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen">
          <span class="mdi mdi-fit-to-screen-outline mdi-18px"></span>
        </button>
      </div>
    `.trim()
    : "";

  const sidebarHtml = sidebar
    ? `
      <div class="media-modal-sidebar w-full md:w-[360px] lg:w-[420px] shrink-0 border-start border-subtle bg-body d-flex flex-col overflow-y-auto">
        ${sidebar}
      </div>
    `.trim()
    : "";

  return `
    <div class="${classNames("media-modal-backdrop position-fixed inset-0 z-[1050] d-flex bg-black/90", className)}"${baseAttrs}>
      <div class="media-modal-container d-flex flex-col md:flex-row w-full h-full overflow-hidden">
        <!-- Stage -->
        <div class="media-modal-stage flex-1 position-relative d-flex align-items-center justify-content-center overflow-hidden">
          <button type="button" class="media-modal-btn media-modal-close position-absolute top-4 start-4 z-10 w-10 h-10 rounded-full d-flex align-items-center justify-content-center border-0 bg-black/60 text-white cursor-pointer" data-close-media-modal aria-label="Close">
            <span class="mdi mdi-close mdi-18px"></span>
          </button>

          ${counterHtml}
          ${prevBtnHtml}
          ${nextBtnHtml}

          <div class="media-modal-image-wrap d-flex align-items-center justify-content-center w-full h-full p-4">
            <img src="${escapeHtml(currentItem.src)}" id="media-modal-active-img" class="max-w-full max-h-full object-contain block transition" alt="${escapeHtml(currentItem.alt || "Preview")}" />
          </div>

          ${zoomControlsHtml}
        </div>

        ${sidebarHtml}
      </div>
    </div>
  `.trim();
}

export const mediaPreviewModal = MediaPreviewModal;
