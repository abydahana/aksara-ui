import { classNames, escapeHtml, toAttributes, type ComponentSize, normalizeSize } from "../utils";

export interface DropdownSelectOption {
  value: string;
  label: string;
  /** MDI icon class, e.g. `"mdi-earth"`. */
  icon?: string;
  /** Extra classes for the icon (e.g. a text color). */
  iconClass?: string;
  disabled?: boolean;
}

export interface DropdownSelectProps {
  /** Name of the hidden input that carries the value in forms. */
  name: string;
  options: DropdownSelectOption[];
  defaultValue?: string;
  /** `chip` (compact soft button, default) or `form-select` (looks like a select field). */
  variant?: "chip" | "form-select";
  size?: ComponentSize;
  /** `id` for the trigger button, so a `<label for>` can point at it. */
  id?: string;
  /** Accessible name when there is no visible label (`aria-label` on the trigger). */
  label?: string;
  /** Id of a visible label element (`aria-labelledby` on the trigger). */
  labelledBy?: string;
  disabled?: boolean;
  className?: string;
  /** Extra classes for the trigger button (added to its own). */
  btnClassName?: string;
  attributes?: Record<string, unknown>;
}

/**
 * A button + menu that picks one value with icons per option. The runtime writes the choice
 * to the hidden input (firing `input` / `change`), updates the trigger and fires
 * `aksara:dropdown-select:change` ({ value, label, previous }).
 */
export function DropdownSelect(props: DropdownSelectProps): string {
  const {
    name,
    options = [],
    defaultValue,
    variant = "chip",
    id,
    label,
    labelledBy,
    disabled = false,
    className = "",
    btnClassName = "",
    attributes
  } = props;
  const isFormSelect = variant === "form-select";
  const size = props.size ? normalizeSize(props.size) : isFormSelect ? "md" : "sm";
  const selected = options.find((opt) => opt.value === defaultValue) ?? options[0];

  const icon = (opt: DropdownSelectOption | undefined, extra: string) =>
    opt?.icon ? `<span class="${classNames("mdi", opt.icon, opt.iconClass, extra)}" aria-hidden="true"></span>` : "";

  const triggerAttrs = toAttributes({
    type: "button",
    id,
    "data-dropdown": "",
    "aria-haspopup": "menu",
    "aria-expanded": "false",
    "aria-label": label,
    "aria-labelledby": labelledBy,
    disabled
  });
  const triggerClasses = isFormSelect
    ? classNames("form-select dropdown-select-toggle", size !== "md" && `form-select-${size}`, btnClassName)
    : classNames("btn btn-soft-secondary dropdown-select-toggle", size !== "md" && `btn-${size}`, btnClassName);
  const chevron = isFormSelect
    ? ""
    : '<span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span>';
  const trigger = `<button class="${triggerClasses}"${triggerAttrs}>${icon(selected, "select-current-icon")}<span class="select-current-label">${escapeHtml(selected?.label ?? "")}</span>${chevron}</button>`;

  const items = options
    .map((opt) => {
      const on = opt.value === selected?.value;
      const attrs = toAttributes({
        type: "button",
        role: "menuitemradio",
        "aria-checked": on ? "true" : "false",
        "aria-current": on ? "true" : undefined,
        "data-dropdown-option": opt.value,
        "data-icon": opt.icon,
        "data-icon-class": opt.iconClass,
        disabled: opt.disabled
      });
      return `<button class="${classNames("dropdown-item", on && "active")}"${attrs}>${icon(opt, "dropdown-select-option-icon")}<span class="dropdown-select-option-label">${escapeHtml(opt.label)}</span></button>`;
    })
    .join("");

  const rootAttrs = toAttributes({ "data-dropdown-select": name, "data-value": selected?.value, ...attributes });
  // A disabled select submits nothing, like a disabled native <select>.
  const hidden = `<input${toAttributes({ type: "hidden", name, value: selected?.value ?? "", disabled })} />`;
  return `<div class="${classNames("dropdown aksara-select-dropdown", isFormSelect && "variant-form-select w-100", className)}"${rootAttrs}>${hidden}${trigger}<div class="${classNames("dropdown-menu dropdown-select-menu", size === "sm" && "dropdown-menu-sm")}" role="menu">${items}</div></div>`;
}

export const dropdownSelect = DropdownSelect;
