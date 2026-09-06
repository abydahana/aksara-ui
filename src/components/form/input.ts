import { classNames, toAttributes } from "../utils";

export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "search"
  | "tel"
  | "url"
  | "date"
  | "datetime-local"
  | "time"
  | "month"
  | "week"
  | "color"
  | "file"
  | "hidden";

export interface InputProps {
  type?: InputType;
  name?: string;
  id?: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  size?: "sm" | "lg";
  isInvalid?: boolean;
  isValid?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Input(props: InputProps = {}): string {
  const {
    type = "text",
    name,
    id,
    value,
    placeholder,
    disabled = false,
    readOnly = false,
    required = false,
    size,
    isInvalid = false,
    isValid = false,
    className = "",
    attributes
  } = props;

  const controlClass = type === "color" ? "form-control form-control-color" : "form-control";

  const classes = classNames(
    controlClass,
    size === "sm" && "form-control-sm",
    size === "lg" && "form-control-lg",
    isInvalid && "is-invalid",
    isValid && "is-valid",
    className
  );

  const baseAttrs = toAttributes({
    type,
    name,
    id,
    value,
    placeholder,
    disabled,
    readonly: readOnly,
    required,
    ...attributes
  });

  return `<input class="${classes}"${baseAttrs} />`.trim();
}

export const input = Input;
