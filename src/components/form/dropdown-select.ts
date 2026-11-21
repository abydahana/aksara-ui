import { classNames, escapeHtml, type ComponentSize, normalizeSize } from "../utils";
import { Input } from "./input";
import { Button } from "../buttons/button";
import { Dropdown, DropdownItem, DropdownMenu } from "../overlay/dropdown";

export interface DropdownSelectOption {
  value: string;
  label: string;
  icon?: string;
  iconClass?: string;
}

export interface DropdownSelectProps {
  name: string;
  options: DropdownSelectOption[];
  defaultValue?: string;
  className?: string;
  btnClassName?: string;
  size?: ComponentSize;
  variant?: "chip" | "form-select";
  attributes?: Record<string, unknown>;
}

export function DropdownSelect(props: DropdownSelectProps): string {
  const {
    name,
    options = [],
    defaultValue,
    className = "",
    btnClassName = "",
    size = props.variant === "form-select" ? "md" : "sm",
    variant = "chip",
    attributes
  } = props;

  const selectedOption = options.find((opt) => opt.value === defaultValue) ?? options[0];
  const isFormSelect = variant === "form-select";

  const dropdownSizeClass = size ? `dropdown-${normalizeSize(size)}` : "dropdown-md";
  const menuSizeClass = size && size !== "md" ? `dropdown-menu-${normalizeSize(size)}` : "";
  const selectSizeClass = size ? `form-select-${normalizeSize(size)}` : "";
  const chipSizeClass = size ? `chip-${normalizeSize(size)}` : "chip-md";

  const hiddenInput = Input({
    type: "hidden",
    name,
    value: selectedOption?.value ?? ""
  });

  const triggerIcon = selectedOption?.icon
    ? `<i class="${classNames("mdi", selectedOption.icon, selectedOption.iconClass, "me-2 select-current-icon")}"></i>`
    : "";

  const triggerBtn = isFormSelect
    ? `<button type="button" class="${classNames("form-select", selectSizeClass, btnClassName, "text-start d-flex align-items-center justify-content-between cursor-pointer")}" data-dropdown="" aria-haspopup="true" aria-expanded="false">
      <div class="d-flex align-items-center min-w-0 flex-1 me-2 truncate">
        ${triggerIcon}
        <span class="select-current-label truncate">${escapeHtml(selectedOption?.label ?? "")}</span>
      </div>
    </button>`
    : Button({
        type: "button",
        variant: "secondary",
        soft: true,
        size: size === "md" ? undefined : size,
        className: btnClassName || `dropdown-select-toggle ${chipSizeClass}`,
        attributes: {
          "data-dropdown": "",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        },
        children: `
          ${triggerIcon}
          <span class="select-current-label truncate flex-1 min-w-0 text-start">${escapeHtml(selectedOption?.label ?? "")}</span>
          <i class="mdi mdi-chevron-down ms-1 opacity-3 shrink-0"></i>
        `
      });

  const menuItems = options
    .map((opt) =>
      DropdownItem({
        active: opt.value === selectedOption?.value,
        attributes: {
          type: "button",
          "data-dropdown-option": opt.value,
          "data-icon": opt.icon ?? "",
          "data-icon-class": opt.iconClass ?? ""
        },
        content: `
          ${opt.icon ? `<i class="${classNames("mdi", opt.icon, opt.iconClass, "me-2")}"></i>` : ""}
          <span>${escapeHtml(opt.label)}</span>
        `
      })
    )
    .join("\n");

  const menu = DropdownMenu({
    className: `${menuSizeClass} ${isFormSelect ? "dropdown-select-menu" : ""}`.trim(),
    attributes: {
      "data-dropdown-select-menu": name
    },
    children: menuItems
  });

  return Dropdown({
    className: classNames(
      "aksara-select-dropdown",
      isFormSelect && "variant-form-select w-100",
      dropdownSizeClass,
      className
    ),
    attributes: {
      "data-dropdown-select": name,
      ...attributes
    },
    children: `
      ${hiddenInput}
      ${triggerBtn}
      ${menu}
    `
  });
}

export const dropdownSelect = DropdownSelect;
