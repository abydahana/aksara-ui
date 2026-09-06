import { classNames, toAttributes } from "../utils";

export interface CloseButtonProps {
  white?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function CloseButton(props: CloseButtonProps = {}): string {
  const { white = false, disabled = false, ariaLabel = "Close", className = "", attributes } = props;

  const classes = classNames("btn-close", white && "btn-close-white", className);

  const baseAttrs = toAttributes({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled ? true : undefined,
    ...attributes
  });

  return `<button class="${classes}"${baseAttrs}></button>`.trim();
}

export const closeButton = CloseButton;
