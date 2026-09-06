import { classNames, escapeHtml, toAttributes } from "../utils";

export type OffcanvasPlacement = "start" | "end" | "top" | "bottom";

export interface OffcanvasProps {
  id: string;
  children?: string;
  placement?: OffcanvasPlacement;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Offcanvas(props: OffcanvasProps): string {
  const { id, children = "", placement = "start", className = "", attributes } = props;

  const classes = classNames("offcanvas", `offcanvas-${placement}`, className);
  const baseAttrs = toAttributes({
    id,
    tabindex: "-1",
    role: "dialog",
    "aria-hidden": "true",
    ...attributes
  });

  return `<aside class="${classes}"${baseAttrs}>${children}</aside>`.trim();
}

export const offcanvas = Offcanvas;

export interface OffcanvasHeaderProps {
  title?: string;
  children?: string;
  dismissible?: boolean;
  className?: string;
}

export function OffcanvasHeader(props: OffcanvasHeaderProps = {}): string {
  const { title, children = "", dismissible = true, className = "" } = props;

  const titleHtml = title ? `<h5 class="offcanvas-title m-0">${escapeHtml(title)}</h5>` : "";
  const closeBtn = dismissible
    ? `<button class="modal-close btn-close" type="button" data-offcanvas-close aria-label="Close"></button>`
    : "";

  return `
    <div class="${classNames("offcanvas-header", className)}">
      ${titleHtml}
      ${children}
      ${closeBtn}
    </div>
  `.trim();
}

export const offcanvasHeader = OffcanvasHeader;

export function OffcanvasBody(content = "", className = ""): string {
  return `<div class="${classNames("offcanvas-body", className)}">${content}</div>`.trim();
}

export const offcanvasBody = OffcanvasBody;
