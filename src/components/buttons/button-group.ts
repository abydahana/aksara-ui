import { classNames, toAttributes, type ComponentSize } from "../utils";

export interface ButtonGroupProps {
  children?: string;
  size?: ComponentSize;
  vertical?: boolean;
  ariaLabel?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ButtonGroup(props: ButtonGroupProps = {}): string {
  const { children = "", size, vertical = false, ariaLabel = "Button group", className = "", attributes } = props;

  const sizeClass = size ? `btn-group-${size}` : "";

  const classes = classNames(vertical ? "btn-group-vertical" : "btn-group", sizeClass, className);

  const baseAttrs = toAttributes({
    role: "group",
    "aria-label": ariaLabel,
    ...attributes
  });

  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const buttonGroup = ButtonGroup;
