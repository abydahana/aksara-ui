import { classNames, escapeHtml, normalizeSize, toAttributes, type ComponentSize } from "../utils";

export interface CheckboxProps {
  label?: string;
  name?: string;
  id?: string;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  inline?: boolean;
  /** Matches the height of `.form-control-{size}` so it lines up with inputs of that size. */
  size?: ComponentSize;
  isInvalid?: boolean;
  isValid?: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  attributes?: Record<string, unknown>;
}

let checkboxIdCounter = 0;

export function Checkbox(props: CheckboxProps = {}): string {
  const {
    label,
    name,
    id: idProp,
    value,
    checked = false,
    disabled = false,
    inline = false,
    size,
    isInvalid = false,
    isValid = false,
    className = "",
    inputClassName = "",
    labelClassName = "",
    attributes
  } = props;

  // A label needs an id to point at; generate one when none is given.
  const attrId = attributes?.id;
  const id =
    idProp ??
    (typeof attrId === "string" && attrId ? attrId : label ? `aksara-check-${++checkboxIdCounter}` : undefined);

  const containerClasses = classNames(
    "form-check",
    size && `form-check-${normalizeSize(size)}`,
    inline && "form-check-inline",
    className
  );

  const inputClasses = classNames("form-check-input", isInvalid && "is-invalid", isValid && "is-valid", inputClassName);

  const baseAttrs = toAttributes({
    type: "checkbox",
    name,
    id,
    value,
    checked,
    disabled,
    ...attributes
  });

  const labelHtml = label
    ? `
      <label class="${classNames("form-check-label", labelClassName)}"${id ? ` for="${escapeHtml(id)}"` : ""}>
        ${escapeHtml(label)}
      </label>
    `.trim()
    : "";

  return `
    <div class="${containerClasses}">
      <input class="${inputClasses}"${baseAttrs} />
      ${labelHtml}
    </div>
  `.trim();
}

export const checkbox = Checkbox;
