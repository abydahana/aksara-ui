import { classNames, escapeHtml, safeUrl, toAttributes } from "../utils";

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
    id = "media-modal",
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
        <div class="media-modal-counter position-absolute top-4 start-[50%] translate-x-[-50%] z-[10] px-3 py-1 rounded-pill bg-[rgb(0_0_0/.6)] text-light text-sm fw-semibold pointer-events-none">
          <span id="media-counter-text">${currentIdx + 1} / ${total}</span>
        </div>
      `.trim()
      : "";

  const prevBtnHtml =
    total > 1
      ? `
        <button type="button" class="media-modal-btn media-modal-prev position-absolute start-4 top-[50%] translate-y-[-50%] z-[10] w-[3rem] h-[3rem] rounded-full d-flex align-items-center justify-content-center border-0 bg-[rgb(0_0_0/.6)] text-light text-xl cursor-pointer" data-media-prev aria-label="Previous media"${currentIdx === 0 ? " disabled" : ""}>
          <span class="mdi mdi-chevron-left mdi-24px"></span>
        </button>
      `.trim()
      : "";

  const nextBtnHtml =
    total > 1
      ? `
        <button type="button" class="media-modal-btn media-modal-next position-absolute end-4 top-[50%] translate-y-[-50%] z-[10] w-[3rem] h-[3rem] rounded-full d-flex align-items-center justify-content-center border-0 bg-[rgb(0_0_0/.6)] text-light text-xl cursor-pointer" data-media-next aria-label="Next media"${currentIdx === total - 1 ? " disabled" : ""}>
          <span class="mdi mdi-chevron-right mdi-24px"></span>
        </button>
      `.trim()
      : "";

  const zoomControlsHtml = showZoomControls
    ? `
      <div class="media-modal-zoom-controls position-absolute bottom-4 start-[50%] translate-x-[-50%] z-[10] d-flex align-items-center gap-2 p-1 rounded-pill bg-[rgb(0_0_0/.7)]" id="media-zoom-controls">
        <button type="button" class="media-zoom-btn w-[36px] h-[36px] rounded-full d-flex align-items-center justify-content-center border-0 bg-transparent text-light cursor-pointer" data-media-zoom-in aria-label="Zoom in" title="Zoom in">
          <span class="mdi mdi-magnify-plus-outline mdi-18px"></span>
        </button>
        <button type="button" class="media-zoom-btn w-[36px] h-[36px] rounded-full d-flex align-items-center justify-content-center border-0 bg-transparent text-light cursor-pointer" data-media-zoom-out aria-label="Zoom out" title="Zoom out">
          <span class="mdi mdi-magnify-minus-outline mdi-18px"></span>
        </button>
        <button type="button" class="media-zoom-btn w-[36px] h-[36px] rounded-full d-flex align-items-center justify-content-center border-0 bg-transparent text-light cursor-pointer" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen">
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
    <div class="${classNames("media-modal-backdrop position-fixed inset-0 z-[1050] d-flex bg-[rgb(0_0_0/.9)]", className)}"${baseAttrs}>
      <div class="media-modal-container d-flex flex-col md:flex-row w-full h-full overflow-hidden">
        <!-- Stage -->
        <div class="media-modal-stage flex-1 position-relative d-flex align-items-center justify-content-center overflow-hidden">
          <button type="button" class="media-modal-btn media-modal-close position-absolute top-4 start-4 z-[10] w-[2.5rem] h-[2.5rem] rounded-full d-flex align-items-center justify-content-center border-0 bg-[rgb(0_0_0/.6)] text-light cursor-pointer" data-media-close data-close-media-modal aria-label="Close">
            <span class="mdi mdi-close mdi-18px"></span>
          </button>

          ${counterHtml}
          ${prevBtnHtml}
          ${nextBtnHtml}

          <div class="media-modal-image-wrap d-flex align-items-center justify-content-center w-full h-full p-4">
            <img src="${escapeHtml(safeUrl(currentItem.src))}" id="media-modal-active-img" class="mw-100 mh-100 object-contain block transition" alt="${escapeHtml(currentItem.alt || "Preview")}" />
          </div>

          ${zoomControlsHtml}
        </div>

        ${sidebarHtml}
      </div>
    </div>
  `.trim();
}

export const mediaPreviewModal = MediaPreviewModal;
export const MediaModal = MediaPreviewModal;
export const mediaModal = MediaPreviewModal;
export type MediaModalProps = MediaPreviewModalProps;
