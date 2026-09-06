import { classNames, escapeHtml, toAttributes } from "../utils";

export interface ModalProps {
  id: string;
  children?: string;
  size?: "sm" | "lg" | "xl" | "fullscreen";
  centered?: boolean;
  scrollable?: boolean;
  staticBackdrop?: boolean;
  className?: string;
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
    attributes
  } = props;

  const dialogClasses = classNames(
    "modal-dialog",
    size && (size === "fullscreen" ? "modal-fullscreen" : `modal-${size}`),
    centered && "modal-dialog-centered",
    scrollable && "modal-dialog-scrollable"
  );

  const baseAttrs = toAttributes({
    id,
    tabindex: "-1",
    "aria-hidden": "true",
    "data-backdrop": staticBackdrop ? "static" : undefined,
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
  children?: string;
  dismissible?: boolean;
  className?: string;
}

export function ModalHeader(props: ModalHeaderProps = {}): string {
  const { title, children = "", dismissible = true, className = "" } = props;

  const titleHtml = title ? `<h5 class="modal-title m-0">${escapeHtml(title)}</h5>` : "";
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
