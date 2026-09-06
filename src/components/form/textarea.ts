import { classNames, escapeHtml, toAttributes } from "../utils";

export interface TextareaProps {
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  className?: string;
  autoGrow?: boolean;
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
    isInvalid = false,
    isValid = false,
    className = "",
    autoGrow = false,
    attributes
  } = props;

  const isAutoGrow = autoGrow || rows === 1;

  const classes = classNames(
    "form-control",
    isAutoGrow && "form-control-autogrow",
    isInvalid && "is-invalid",
    isValid && "is-valid",
    className
  );

  const baseAttrs = toAttributes({
    name,
    id,
    placeholder,
    rows,
    disabled,
    readonly: readOnly,
    required,
    ...(isAutoGrow ? { "data-role": "autogrow" } : {}),
    ...attributes
  });

  return `<textarea class="${classes}"${baseAttrs}>${escapeHtml(value)}</textarea>`.trim();
}

export const textarea = Textarea;
