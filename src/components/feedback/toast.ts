import { classNames, escapeHtml, toAttributes } from "../utils";

export interface ToastProps {
  id?: string;
  title?: string;
  time?: string;
  body: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
  delay?: number;
  autohide?: boolean;
  dismissible?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Toast(props: ToastProps): string {
  const {
    id,
    title,
    time,
    body,
    variant,
    delay = 4000,
    autohide = true,
    dismissible = true,
    className = "",
    attributes
  } = props;

  const classes = classNames("toast", variant && `toast-${variant}`, className);

  const baseAttrs = toAttributes({
    id,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    "data-toast-delay": delay,
    "data-toast-autohide": autohide ? "true" : "false",
    ...attributes
  });

  const headerHtml = title
    ? `
      <div class="toast-header">
        <strong class="me-auto">${escapeHtml(title)}</strong>
        ${time ? `<small class="text-muted ms-auto">${escapeHtml(time)}</small>` : ""}
        ${dismissible ? `<button type="button" class="close" data-dismiss="${id ? `#${id}` : "toast"}" aria-label="Close"></button>` : ""}
      </div>
    `
    : "";

  return `
    <div class="${classes}"${baseAttrs}>
      ${headerHtml}
      <div class="toast-body">${body}</div>
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
