import { classNames, escapeHtml, toAttributes } from "../utils";

export type ToastVariant =
  "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light";

export interface ToastProps {
  id?: string;
  title?: string;
  time?: string;
  /** Header icon: an MDI name (`"bell-outline"`) or a full class list. */
  icon?: string;
  /** Raw HTML header icon (e.g. a spinner); takes precedence over `icon`. */
  iconHtml?: string;
  /** Raw HTML for `.toast-body`. Omit it to render only the header and `children`. */
  body?: string;
  /** Extra classes for `.toast-body`. */
  bodyClassName?: string;
  /** Raw HTML appended after the body (custom rows, a progress bar, ...). */
  children?: string;
  variant?: ToastVariant;
  /** `"alert"` (default, assertive) or `"status"` (polite). */
  role?: "alert" | "status";
  delay?: number;
  autohide?: boolean;
  dismissible?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

function toastIconClass(icon: string): string {
  return /\s|^mdi /.test(icon) ? icon : `mdi mdi-${icon.replace(/^mdi-/, "")}`;
}

export function Toast(props: ToastProps): string {
  const {
    id,
    title,
    time,
    icon,
    iconHtml,
    body,
    bodyClassName = "",
    children = "",
    variant,
    role = "alert",
    delay = 4000,
    autohide = true,
    dismissible = true,
    className = "",
    attributes
  } = props;

  const classes = classNames("toast", variant && `toast-${variant}`, className);

  const baseAttrs = toAttributes({
    id,
    role,
    "aria-live": role === "status" ? "polite" : "assertive",
    "aria-atomic": "true",
    "data-toast-delay": delay,
    "data-toast-autohide": autohide ? "true" : "false",
    ...attributes
  });

  const iconMarkup =
    iconHtml ?? (icon ? `<span class="${classNames(toastIconClass(icon))}" aria-hidden="true"></span>` : "");

  const headerHtml = title
    ? `
      <div class="toast-header">
        ${iconMarkup}
        <strong class="me-auto">${escapeHtml(title)}</strong>
        ${time ? `<small class="text-subtle ms-auto">${escapeHtml(time)}</small>` : ""}
        ${dismissible ? `<button type="button" class="btn-close btn-close-sm" data-dismiss="" aria-label="Close"></button>` : ""}
      </div>
    `
    : "";

  const bodyHtml = body !== undefined ? `<div class="${classNames("toast-body", bodyClassName)}">${body}</div>` : "";

  return `
    <div class="${classes}"${baseAttrs}>
      ${headerHtml}
      ${bodyHtml}${children}
    </div>
  `.trim();
}

export const toast = Toast;

export type ToastPlacement = "top-start" | "top-center" | "top-end" | "bottom-start" | "bottom-center" | "bottom-end";

export interface ToastContainerProps {
  children?: string;
  placement?: ToastPlacement;
  className?: string;
}

export function ToastContainer(props: ToastContainerProps = {}): string {
  const { children = "", placement = "top-end", className = "" } = props;
  const classes = classNames("toast-stack", `toast-${placement}`, className);

  return `<div class="${classes}">${children}</div>`.trim();
}

export const toastContainer = ToastContainer;
