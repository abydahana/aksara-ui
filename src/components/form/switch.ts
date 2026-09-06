import { classNames, escapeHtml, toAttributes } from "../utils";

export interface SwitchProps {
  label?: string;
  name?: string;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
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
    isInvalid = false,
    isValid = false,
    className = "",
    inputClassName = "",
    labelClassName = "",
    attributes
  } = props;

  const containerClasses = classNames("form-check form-switch", className);

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
