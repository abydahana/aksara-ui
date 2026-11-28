import { classNames, escapeHtml, toAttributes } from "../utils";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "./modal";
import { Button } from "../buttons/button";

export interface OptionPickerItem {
  value: string;
  label: string;
  /** MDI icon name, with or without the `mdi-` prefix. */
  icon?: string;
  /** Extra classes for the icon circle (e.g. `text-danger`). */
  iconClass?: string;
  badge?: string;
  /** Badge color; rendered as a soft badge (`badge-soft-{variant}`). */
  badgeVariant?: string;
  description?: string;
  disabled?: boolean;
}

export interface OptionPickerModalOptions {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: string;
  options: OptionPickerItem[];
  selectedValue?: string;
  cancelLabel?: string;
  /** Close when an option is picked (default `true`). */
  closeOnSelect?: boolean;
  /** Ignore backdrop clicks (shakes instead). Default `false`: tapping outside cancels. */
  staticBackdrop?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

const BADGE_VARIANTS = ["primary", "secondary", "tertiary", "success", "danger", "warning", "info", "dark", "light"];

function mdiClass(icon: string): string {
  const name = icon.replace(/^mdi\s+/, "").trim();
  return name.startsWith("mdi-") ? name : `mdi-${name}`;
}

/**
 * Modal list of options with icons, descriptions and a check on the current value.
 * The runtime marks the picked option, emits `aksara:picker:select` ({ value, label, option })
 * and closes; `Aksara.pick({...})` builds one on the fly and resolves with the value.
 */
export function OptionPickerModal(options: OptionPickerModalOptions): string {
  const {
    id = "aksaraOptionPickerModal",
    title,
    subtitle,
    icon = "mdi-format-list-bulleted",
    options: items = [],
    selectedValue,
    cancelLabel = "Cancel",
    closeOnSelect = true,
    staticBackdrop = false,
    className = "",
    attributes
  } = options;

  const titleId = `${id}-title`;
  const optionsHtml = items
    .map((item) => {
      const selected =
        selectedValue !== undefined && String(selectedValue).toLowerCase() === String(item.value).toLowerCase();
      const variant = BADGE_VARIANTS.includes(item.badgeVariant ?? "") ? item.badgeVariant : "secondary";
      const badge = item.badge
        ? `<span class="badge badge-soft-${variant} rounded-pill">${escapeHtml(item.badge)}</span>`
        : "";
      const description = item.description
        ? `<span class="picker-option-desc">${escapeHtml(item.description)}</span>`
        : "";
      const attrs = toAttributes({
        type: "button",
        role: "option",
        "aria-selected": selected ? "true" : "false",
        "data-picker-value": item.value,
        disabled: item.disabled
      });
      return `<button class="${classNames("picker-option", selected && "is-selected")}"${attrs}>
          <span class="${classNames("picker-option-icon", item.iconClass)}" aria-hidden="true"><span class="mdi ${escapeHtml(mdiClass(item.icon || "mdi-circle-medium"))}"></span></span>
          <span class="picker-option-text"><span class="picker-option-label">${escapeHtml(item.label)}</span>${description}</span>
          ${badge}
          <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
        </button>`;
    })
    .join("");

  return Modal({
    id,
    centered: true,
    scrollable: true,
    staticBackdrop,
    className: classNames("picker-modal", className),
    attributes: {
      "aria-labelledby": titleId,
      "data-modal-draggable": "false",
      "data-picker-close": closeOnSelect ? undefined : "false",
      ...attributes
    },
    children: `
      ${ModalHeader({
        children: `<div class="picker-heading">
            <span class="picker-option-icon" aria-hidden="true"><span class="mdi ${escapeHtml(mdiClass(icon))}"></span></span>
            <div class="picker-heading-text">
              <h5 id="${escapeHtml(titleId)}" class="modal-title m-0">${escapeHtml(title)}</h5>
              ${subtitle ? `<div class="picker-subtitle">${escapeHtml(subtitle)}</div>` : ""}
            </div>
          </div>`
      })}
      ${ModalBody({ children: `<div class="picker-list" role="listbox" aria-labelledby="${escapeHtml(titleId)}">${optionsHtml}</div>` })}
      ${ModalFooter({
        children: Button({
          type: "button",
          plain: true,
          size: "sm",
          attributes: { "data-modal-close": "" },
          children: escapeHtml(cancelLabel)
        })
      })}
    `
  });
}

export const PickerModal = OptionPickerModal;
export const renderOptionPickerModal = OptionPickerModal;
export const pickerModal = OptionPickerModal;
