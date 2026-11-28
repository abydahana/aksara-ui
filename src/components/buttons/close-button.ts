import { classNames, toAttributes, type ComponentSize, normalizeSize } from "../utils";

export interface CloseButtonProps {
  /** `btn-close` (inline, default), `close` (absolutely placed in its parent's corner) or `modal-close`. */
  kind?: "btn-close" | "close" | "modal-close";
  size?: ComponentSize;
  white?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function CloseButton(props: CloseButtonProps = {}): string {
  const {
    kind = "btn-close",
    size,
    white = false,
    disabled = false,
    ariaLabel = "Close",
    className = "",
    attributes
  } = props;

  const sizeName = size ? normalizeSize(size) : "";
  const sizeClass = !sizeName
    ? ""
    : kind === "btn-close"
      ? `btn-close-${sizeName}`
      : kind === "close"
        ? `close-${sizeName}`
        : `btn-${sizeName}`;
  const whiteClass = white ? (kind === "close" ? "close-white" : "btn-close-white") : "";

  const classes = classNames(kind, sizeClass, whiteClass, className);

  const baseAttrs = toAttributes({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled ? true : undefined,
    ...attributes
  });

  return `<button class="${classes}"${baseAttrs}></button>`.trim();
}

export const closeButton = CloseButton;
