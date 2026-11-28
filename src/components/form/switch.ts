import { classNames, escapeHtml, normalizeSize, toAttributes, type ComponentSize } from "../utils";

export interface SwitchProps {
  label?: string;
  name?: string;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  /** Matches the height of `.form-control-{size}` so it lines up with inputs of that size. */
  size?: ComponentSize;
  isInvalid?: boolean;
  isValid?: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  attributes?: Record<string, unknown>;
}

export function Switch(props: SwitchProps = {}): string {
  const {
    label,
    name,
    id,
    checked = false,
    disabled = false,
    size,
    isInvalid = false,
    isValid = false,
    className = "",
    inputClassName = "",
    labelClassName = "",
    attributes
  } = props;

  const containerClasses = classNames(
    "form-check form-switch",
    size && `form-switch-${normalizeSize(size)}`,
    className
  );

  const inputClasses = classNames("form-check-input", isInvalid && "is-invalid", isValid && "is-valid", inputClassName);

  const baseAttrs = toAttributes({
    type: "checkbox",
    role: "switch",
    name,
    id,
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

export const switchInput = Switch;
export const SwitchInput = Switch;
