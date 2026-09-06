import { classNames, escapeHtml, toAttributes } from "../utils";

export interface RadioProps {
  label?: string;
  name: string;
  id?: string;
  value: string | number;
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

export function Radio(props: RadioProps): string {
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
    type: "radio",
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

export const radio = Radio;

export interface RadioOption {
  label: string;
  value: string | number;
  id?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string | number;
  inline?: boolean;
  className?: string;
}

export function RadioGroup(props: RadioGroupProps): string {
  const { name, options = [], value, inline = false, className = "" } = props;

  const itemsHtml = options
    .map((opt, idx) => {
      const id = opt.id ?? `${name}-opt-${idx}`;
      const isChecked = value !== undefined && String(opt.value) === String(value);

      return Radio({
        name,
        id,
        label: opt.label,
        value: opt.value,
        checked: isChecked,
        disabled: opt.disabled,
        inline
      });
    })
    .join("\n");

  return `<div class="${classNames("radio-group", className)}">${itemsHtml}</div>`.trim();
}

export const radioGroup = RadioGroup;
