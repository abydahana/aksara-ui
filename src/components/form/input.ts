import { classNames, toAttributes, type ComponentSize, normalizeSize } from "../utils";

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
  size?: ComponentSize;
  isInvalid?: boolean;
  isValid?: boolean;
  className?: string;
  /** Icon inside the start of the field: an MDI name (`"magnify"`) or full class list. */
  iconStart?: string;
  /** Icon inside the end of the field. */
  iconEnd?: string;
  /** Adds a show/hide button (type="password"). */
  passwordToggle?: boolean;
  /** Read-only value without a box (`form-control-plaintext`). */
  plaintext?: boolean;
  /** Adds a button that clears the field. */
  clearable?: boolean;
  /** Selector of an element that shows the character count (`data-counter`). */
  counter?: string;
  maxLength?: number;
  attributes?: Record<string, unknown>;
}

function iconClass(icon: string): string {
  return /\s|^mdi /.test(icon) ? icon : `mdi mdi-${icon.replace(/^mdi-/, "")}`;
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
    iconStart,
    iconEnd,
    passwordToggle = false,
    plaintext = false,
    clearable = false,
    counter,
    maxLength,
    attributes
  } = props;

  const controlClass = plaintext
    ? "form-control-plaintext"
    : type === "color"
      ? "form-control form-control-color"
      : "form-control";
  const sizeClass = size ? `form-control-${normalizeSize(size)}` : "";

  const classes = classNames(controlClass, sizeClass, isInvalid && "is-invalid", isValid && "is-valid", className);

  const baseAttrs = toAttributes({
    type,
    name,
    id,
    value,
    placeholder,
    disabled,
    readonly: readOnly || plaintext,
    required,
    maxlength: maxLength,
    "data-counter": counter,
    ...attributes
  });

  const field = `<input class="${classes}"${baseAttrs} />`;
  const startHtml = iconStart ? `<span class="form-icon-start ${iconClass(iconStart)}" aria-hidden="true"></span>` : "";
  let endHtml = iconEnd ? `<span class="form-icon-end ${iconClass(iconEnd)}" aria-hidden="true"></span>` : "";
  if (passwordToggle) {
    endHtml = `<button type="button" class="form-icon-end" data-password-toggle aria-label="Show password" aria-pressed="false"><span class="mdi mdi-eye-outline"></span></button>`;
  } else if (clearable) {
    endHtml = `<button type="button" class="form-icon-end" data-clear aria-label="Clear"><span class="mdi mdi-close-circle"></span></button>`;
  }
  if (!startHtml && !endHtml) return field.trim();
  return `<div class="form-icon">${startHtml}${field}${endHtml}</div>`;
}

export const input = Input;
