import { classNames, toAttributes, type ComponentSize } from "../utils";

export interface InputGroupProps {
  children?: string;
  size?: ComponentSize;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function InputGroup(props: InputGroupProps = {}): string {
  const { children = "", size, className = "", attributes } = props;

  const sizeClass = size ? `input-group-${size}` : "";

  const classes = classNames("input-group", sizeClass, className);

  const baseAttrs = toAttributes(attributes);

  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const inputGroup = InputGroup;

export interface InputGroupTextProps {
  children?: string;
  as?: "span" | "label";
  htmlFor?: string;
  className?: string;
}

export function InputGroupText(props: InputGroupTextProps = {}): string {
  const { children = "", as: Tag = "span", htmlFor, className = "" } = props;
  const forAttr = htmlFor && Tag === "label" ? ` for="${htmlFor}"` : "";

  return `<${Tag} class="${classNames("input-group-text", className)}"${forAttr}>${children}</${Tag}>`.trim();
}

export const inputGroupText = InputGroupText;
