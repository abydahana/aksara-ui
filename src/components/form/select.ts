import { classNames, escapeHtml, toAttributes } from "../utils";

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectOptGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps {
  name?: string;
  id?: string;
  options?: Array<SelectOption | SelectOptGroup>;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "sm" | "lg";
  isInvalid?: boolean;
  isValid?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Select(props: SelectProps = {}): string {
  const {
    name,
    id,
    options = [],
    value,
    placeholder,
    disabled = false,
    required = false,
    size,
    isInvalid = false,
    isValid = false,
    className = "",
    attributes
  } = props;

  const classes = classNames(
    "form-select",
    size === "sm" && "form-select-sm",
    size === "lg" && "form-select-lg",
    isInvalid && "is-invalid",
    isValid && "is-valid",
    className
  );

  const baseAttrs = toAttributes({
    name,
    id,
    disabled,
    required,
    ...attributes
  });

  const placeholderHtml = placeholder
    ? `<option value="" disabled${value === undefined || value === "" ? " selected" : ""}>${escapeHtml(placeholder)}</option>`
    : "";

  const renderOption = (opt: SelectOption): string => {
    const isSelected = value !== undefined && String(opt.value) === String(value);
    const disabledAttr = opt.disabled ? " disabled" : "";
    const selectedAttr = isSelected ? " selected" : "";
    return `<option value="${escapeHtml(String(opt.value))}"${selectedAttr}${disabledAttr}>${escapeHtml(opt.label)}</option>`;
  };

  const optionsHtml = options
    .map((item) => {
      if ("options" in item) {
        const groupOptions = item.options.map(renderOption).join("");
        return `<optgroup label="${escapeHtml(item.label)}">${groupOptions}</optgroup>`;
      }
      return renderOption(item);
    })
    .join("");

  return `
    <select class="${classes}"${baseAttrs}>
      ${placeholderHtml}
      ${optionsHtml}
    </select>
  `.trim();
}

export const select = Select;
