import { classNames, escapeHtml, pickTag, toAttributes, normalizeSize } from "../utils";

export interface ModalProps {
  id: string;
  children?: string;
  size?:
    | "sm"
    | "lg"
    | "xl"
    | "fullscreen"
    | "fullscreen-sm-down"
    | "fullscreen-md-down"
    | "fullscreen-lg-down"
    | "fullscreen-xl-down";
  centered?: boolean;
  scrollable?: boolean;
  staticBackdrop?: boolean;
  /** Classes for the outer `.modal` element. */
  className?: string;
  /** Classes for the `.modal-dialog` element (e.g. `max-w-[576px]`). */
  dialogClassName?: string;
  attributes?: Record<string, unknown>;
}

export function Modal(props: ModalProps): string {
  const {
    id,
    children = "",
    size,
    centered = false,
    scrollable = false,
    staticBackdrop = false,
    className = "",
    dialogClassName = "",
    attributes
  } = props;

  const dialogClasses = classNames(
    "modal-dialog",
    size && (size === "fullscreen" ? "modal-fullscreen" : `modal-${normalizeSize(size)}`),
    centered && "modal-dialog-centered",
    scrollable && "modal-dialog-scrollable",
    dialogClassName
  );

  const baseAttrs = toAttributes({
    id,
    tabindex: "-1",
    "aria-hidden": "true",
    // The Modal runtime reads options from `data-modal-*` attributes.
    "data-modal-backdrop": staticBackdrop ? "static" : undefined,
    ...attributes
  });

  return `
    <div class="${classNames("modal", className)}"${baseAttrs}>
      <div class="${dialogClasses}">
        <div class="modal-content">
          ${children}
        </div>
      </div>
    </div>
  `.trim();
}

export const modal = Modal;

export interface ModalHeaderProps {
  title?: string;
  /** `id` for the title, so the modal can point `aria-labelledby` at it. */
  titleId?: string;
  /** Heading level for the title. Defaults to `"h5"`. */
  level?: "h2" | "h3" | "h4" | "h5" | "h6";
  children?: string;
  dismissible?: boolean;
  className?: string;
}

export function ModalHeader(props: ModalHeaderProps = {}): string {
  const { title, titleId, children = "", dismissible = true, className = "" } = props;
  const Tag = pickTag(props.level, ["h2", "h3", "h4", "h5", "h6"] as const, "h5");

  const titleAttrs = toAttributes({ id: titleId });
  const titleHtml = title ? `<${Tag}${titleAttrs} class="modal-title m-0">${escapeHtml(title)}</${Tag}>` : "";
  const closeBtn = dismissible
    ? `<button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>`
    : "";

  return `
    <div class="${classNames("modal-header", className)}">
      ${titleHtml}
      ${children}
      ${closeBtn}
    </div>
  `.trim();
}

export const modalHeader = ModalHeader;

export interface ModalBodyProps {
  children?: string;
  className?: string;
}

export function ModalBody(props: ModalBodyProps = {}): string {
  const { children = "", className = "" } = props;
  return `<div class="${classNames("modal-body", className)}">${children}</div>`.trim();
}

export const modalBody = ModalBody;

export interface ModalFooterProps {
  children?: string;
  className?: string;
}

export function ModalFooter(props: ModalFooterProps = {}): string {
  const { children = "", className = "" } = props;
  return `<div class="${classNames("modal-footer", className)}">${children}</div>`.trim();
}

export const modalFooter = ModalFooter;
