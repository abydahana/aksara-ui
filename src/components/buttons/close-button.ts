import { classNames, toAttributes, type ComponentSize } from "../utils";

export interface CloseButtonProps {
  size?: ComponentSize;
  white?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function CloseButton(props: CloseButtonProps = {}): string {
  const { size, white = false, disabled = false, ariaLabel = "Close", className = "", attributes } = props;

  const sizeClass = size ? `btn-close-${size}` : "";

  const classes = classNames("btn-close", sizeClass, white && "btn-close-white", className);

  const baseAttrs = toAttributes({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled ? true : undefined,
    ...attributes
  });

  return `<button class="${classes}"${baseAttrs}></button>`.trim();
}

export const closeButton = CloseButton;
