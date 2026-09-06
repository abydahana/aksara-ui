import { classNames, escapeHtml, toAttributes } from "../utils";

export interface CheckboxProps {
  label?: string;
  name?: string;
  id?: string;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  inline?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  attributes?: Record<string, unknown>;
}

export function Checkbox(props: CheckboxProps = {}): string {
  const {
    label,
    name,
    id,
    value,
    checked = false,
    disabled = false,
    inline = false,
    isInvalid = false,
    isValid = false,
    className = "",
    inputClassName = "",
    labelClassName = "",
    attributes
  } = props;

  const containerClasses = classNames("form-check", inline && "form-check-inline", className);

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
