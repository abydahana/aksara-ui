import { classNames, toAttributes } from "../utils";

export interface ButtonGroupProps {
  children?: string;
  size?: "sm" | "lg";
  vertical?: boolean;
  ariaLabel?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ButtonGroup(props: ButtonGroupProps = {}): string {
  const { children = "", size, vertical = false, ariaLabel = "Button group", className = "", attributes } = props;

  const classes = classNames(
    vertical ? "btn-group-vertical" : "btn-group",
    size === "sm" && "btn-group-sm",
    size === "lg" && "btn-group-lg",
    className
  );

  const baseAttrs = toAttributes({
    role: "group",
    "aria-label": ariaLabel,
    ...attributes
  });

  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const buttonGroup = ButtonGroup;
