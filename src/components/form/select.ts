import { classNames, escapeHtml, toAttributes, type ComponentSize, normalizeSize } from "../utils";

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
  /** Selected value; an array for `multiple`. */
  value?: string | number | Array<string | number>;
  placeholder?: string;
  multiple?: boolean;
  /** Keep the native select instead of the Tom Select enhancement. */
  native?: boolean;
  /** Type-to-filter (Tom Select). Defaults to true. */
  search?: boolean;
  /** Allow creating values that are not in the list. */
  create?: boolean;
  /** Show a clear button. */
  clearable?: boolean;
  /** Checkbox next to each option (multiple). */
  checkboxes?: boolean;
  /** Maximum number of selected items (multiple). */
  maxItems?: number;
  disabled?: boolean;
  required?: boolean;
  size?: ComponentSize;
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
    multiple = false,
    native = false,
    search,
    create = false,
    clearable = false,
    checkboxes = false,
    maxItems,
    disabled = false,
    required = false,
    size,
    isInvalid = false,
    isValid = false,
    className = "",
    attributes
  } = props;

  const sizeClass = size ? `form-select-${normalizeSize(size)}` : "";

  const classes = classNames("form-select", sizeClass, isInvalid && "is-invalid", isValid && "is-valid", className);

  const baseAttrs = toAttributes({
    name,
    id,
    multiple,
    disabled,
    required,
    "data-select": native ? "native" : undefined,
    "data-select-search": search === false ? "false" : undefined,
    "data-select-create": create ? "true" : undefined,
    "data-select-clearable": clearable ? "true" : undefined,
    "data-select-checkboxes": checkboxes ? "true" : undefined,
    "data-select-max-items": maxItems,
    "data-select-placeholder": multiple && placeholder ? placeholder : undefined,
    ...attributes
  });
  const selected = new Set((Array.isArray(value) ? value : value === undefined ? [] : [value]).map(String));

  // Multiple selects show the placeholder in the control instead of an empty option.
  const placeholderHtml =
    placeholder && !multiple
      ? `<option value="" disabled${selected.size === 0 || selected.has("") ? " selected" : ""}>${escapeHtml(placeholder)}</option>`
      : "";

  const renderOption = (opt: SelectOption): string => {
    const isSelected = selected.has(String(opt.value));
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
