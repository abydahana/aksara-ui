import { escapeHtml } from "../utils";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "./modal";
import { Button } from "../buttons/button";

export interface OptionPickerItem {
  value: string;
  label: string;
  icon?: string;
  iconClass?: string;
  badge?: string;
  badgeVariant?: string;
  description?: string;
}

export interface OptionPickerModalOptions {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: string;
  options: OptionPickerItem[];
  selectedValue?: string;
  cancelLabel?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function OptionPickerModal(options: OptionPickerModalOptions): string {
  const {
    id = "aksaraOptionPickerModal",
    title,
    subtitle,
    icon = "mdi-format-list-bulleted",
    options: items = [],
    selectedValue,
    cancelLabel = "Cancel",
    className = "",
    attributes
  } = options;

  return Modal({
    id,
    centered: true,
    scrollable: true,
    className: `composer-picker-modal ${className}`.trim(),
    attributes: {
      style: "z-index: 10050 !important;",
      "data-backdrop": "static",
      "data-modal-backdrop": "static",
      "data-modal-draggable": "false",
      ...attributes
    },
    children: `
      ${ModalHeader({
        dismissible: true,
        className: "px-3 px-md-4 py-3 border-bottom border-line bg-transparent",
        children: `
          <div class="d-flex align-items-center gap-2 me-auto min-w-0">
            <div class="w-9 h-9 rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center shrink-0">
              <i class="mdi ${escapeHtml(icon)} text-lg"></i>
            </div>
            <div class="min-w-0">
              <h5 class="modal-title font-bold text-ink m-0 text-sm md:text-base text-truncate leading-tight">
                ${escapeHtml(title)}
              </h5>
              ${subtitle ? `<div class="text-xs text-subtle text-truncate leading-tight mt-1">${escapeHtml(subtitle)}</div>` : ""}
            </div>
          </div>
        `
      })}
      ${ModalBody({
        className: "p-0 overflow-y-auto max-h-[60vh] bg-transparent",
        children: `
          <div class="list-group list-group-flush border-0 bg-transparent w-100" id="${escapeHtml(id)}-list">
            ${items
              .map((item, index) => {
                const isSelected =
                  selectedValue !== undefined &&
                  String(selectedValue).toLowerCase() === String(item.value).toLowerCase();
                const rawIcon = (item.icon || "mdi-circle-medium").replace(/^mdi\s+/, "").trim();
                const iconClass = rawIcon.startsWith("mdi-") ? rawIcon : `mdi-${rawIcon}`;
                const isLast = index === items.length - 1;
                return `
                  <button
                    type="button"
                    class="list-group-item list-group-item-action d-flex align-items-center justify-content-between px-3 px-md-4 py-3 bg-transparent border-0 ${
                      isLast ? "" : "border-bottom border-line"
                    } text-start transition-all"
                    data-picker-value="${escapeHtml(item.value)}"
                  >
                    <div class="d-flex align-items-center gap-3 min-w-0 flex-1">
                      <!-- Perfectly Round Circular Icon -->
                      <div class="w-9 h-9 rounded-circle ${
                        isSelected ? "bg-primary text-white" : "bg-subtle " + (item.iconClass || "text-body")
                      } d-flex align-items-center justify-content-center shrink-0">
                        <i class="mdi ${escapeHtml(iconClass)} text-lg"></i>
                      </div>
                      <!-- Label & Description -->
                      <div class="d-flex flex-column min-w-0 flex-1">
                        <span class="font-semibold text-sm ${
                          isSelected ? "text-primary font-bold" : "text-body"
                        } text-truncate leading-tight">
                          ${escapeHtml(item.label)}
                        </span>
                        ${
                          item.description
                            ? `<span class="text-xs text-subtle text-truncate leading-tight mt-1">${escapeHtml(
                                item.description
                              )}</span>`
                            : ""
                        }
                      </div>
                    </div>
                    <!-- Right Checkmark Indicator & Badge -->
                    <div class="d-flex align-items-center gap-2 shrink-0 ms-2">
                      ${
                        item.badge
                          ? `<span class="badge ${
                              item.badgeVariant ? "badge-" + item.badgeVariant : "badge-subtle"
                            } text-xs px-2 py-1 rounded-pill font-semibold">${escapeHtml(item.badge)}</span>`
                          : ""
                      }
                      ${
                        isSelected
                          ? `<i class="mdi mdi-check text-primary font-bold text-xl leading-none"></i>`
                          : `<span class="w-5"></span>`
                      }
                    </div>
                  </button>
                `;
              })
              .join("")}
          </div>
        `
      })}
      ${ModalFooter({
        className:
          "d-flex align-items-center justify-content-end px-3 px-md-4 py-3 border-top border-line bg-transparent shrink-0",
        children: Button({
          type: "button",
          ghost: true,
          size: "sm",
          pill: true,
          className: "px-4 text-muted hover:text-body font-semibold",
          attributes: {
            "data-modal-close": ""
          },
          children: escapeHtml(cancelLabel)
        })
      })}
    `
  });
}

export const PickerModal = OptionPickerModal;
export const renderOptionPickerModal = OptionPickerModal;
export const pickerModal = OptionPickerModal;
