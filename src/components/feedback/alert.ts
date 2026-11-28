import { CloseButton, type CloseButtonProps } from "../buttons/close-button";
import { classNames, escapeHtml, iconClasses, toAttributes } from "../utils";

export type AlertVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light";

export interface AlertProps {
  /** Alert body (raw HTML). */
  content?: string;
  variant?: AlertVariant;
  /** Bold `.alert-title` line rendered before `content` (escaped). */
  title?: string;
  /**
   * Icon classes for a leading `.alert-icon` (e.g. `"mdi-check-circle-outline"`). When set, the
   * title and content are wrapped in `.alert-content` and the alert switches to a row layout.
   */
  icon?: string;
  dismissible?: boolean;
  /** Close button style: `"close"` (default, pinned to the corner) or `"btn-close"`. */
  closeKind?: CloseButtonProps["kind"];
  /** Close button size, e.g. `"sm"` for `.close-sm`. */
  closeSize?: CloseButtonProps["size"];
  /** Close button `aria-label`. Defaults to `"Close"`. */
  closeLabel?: string;
  /** Selector for `data-dismiss`. Empty (default) dismisses the closest alert. */
  dismissTarget?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Alert(props: AlertProps): string {
  const {
    content = "",
    variant = "primary",
    title,
    icon,
    dismissible = false,
    closeKind = "close",
    closeSize,
    closeLabel = "Close",
    dismissTarget = "",
    className = "",
    attributes
  } = props;

  const classes = classNames("alert", `alert-${variant}`, dismissible && "alert-dismissible", className);

  const baseAttrs = toAttributes({
    role: "alert",
    ...attributes
  });

  const closeButton = dismissible
    ? CloseButton({
        kind: closeKind,
        size: closeSize,
        ariaLabel: closeLabel,
        attributes: { "data-dismiss": dismissTarget }
      })
    : "";

  const titleHtml = title ? `<p class="alert-title">${escapeHtml(title)}</p>` : "";
  const body = icon
    ? `<span class="${classNames("alert-icon", iconClasses(icon))}" aria-hidden="true"></span>
      <div class="alert-content">${titleHtml}${content}</div>`
    : `${titleHtml}${content}`;

  return `
    <div class="${classes}"${baseAttrs}>
      ${body}
      ${closeButton}
    </div>
  `.trim();
}

export const alert = Alert;
