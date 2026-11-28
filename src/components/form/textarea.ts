import { classNames, escapeHtml, toAttributes, type ComponentSize, normalizeSize } from "../utils";

export interface TextareaProps {
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  size?: ComponentSize;
  isInvalid?: boolean;
  isValid?: boolean;
  className?: string;
  /** Grow with the content (default `true`); `false` keeps the fixed `rows` height and scrolls. */
  autoGrow?: boolean;
  /** Selector of an element that shows the character count (`data-counter`). */
  counter?: string;
  maxLength?: number;
  attributes?: Record<string, unknown>;
}

export function Textarea(props: TextareaProps = {}): string {
  const {
    name,
    id,
    value = "",
    placeholder,
    rows = 3,
    disabled = false,
    readOnly = false,
    required = false,
    size,
    isInvalid = false,
    isValid = false,
    className = "",
    autoGrow = true,
    counter,
    maxLength,
    attributes
  } = props;

  const sizeClass = size ? `form-control-${normalizeSize(size)}` : "";

  const classes = classNames("form-control", sizeClass, isInvalid && "is-invalid", isValid && "is-valid", className);

  const baseAttrs = toAttributes({
    name,
    id,
    placeholder,
    rows,
    disabled,
    readonly: readOnly,
    required,
    maxlength: maxLength,
    "data-counter": counter,
    // Textareas autogrow by default; opting out is explicit.
    "data-autogrow": autoGrow ? undefined : "false",
    ...attributes
  });

  return `<textarea class="${classes}"${baseAttrs}>${escapeHtml(value)}</textarea>`.trim();
}

export const textarea = Textarea;
