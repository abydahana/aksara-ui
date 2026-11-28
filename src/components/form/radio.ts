import { classNames, escapeHtml, normalizeSize, toAttributes, type ComponentSize } from "../utils";

export interface RadioProps {
  label?: string;
  name: string;
  id?: string;
  value: string | number;
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

export function Radio(props: RadioProps): string {
  const {
    label,
    name,
    id,
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

  const containerClasses = classNames(
    "form-check",
    size && `form-check-${normalizeSize(size)}`,
    inline && "form-check-inline",
    className
  );

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
  size?: ComponentSize;
  className?: string;
}

export function RadioGroup(props: RadioGroupProps): string {
  const { name, options = [], value, inline = false, size, className = "" } = props;

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
        inline,
        size
      });
    })
    .join("\n");

  return `<div class="${classNames("radio-group", inline && "radio-group-inline", className)}" role="radiogroup">${itemsHtml}</div>`.trim();
}

export const radioGroup = RadioGroup;
