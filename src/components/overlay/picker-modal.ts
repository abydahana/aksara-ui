import { classNames, escapeHtml } from "../utils";
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
    staticBackdrop: true,
    className: classNames("picker-modal", className),
    attributes: {
      style: "z-index: 10050 !important;",
      "data-modal-draggable": "false",
      ...attributes
    },
    children: `
      ${ModalHeader({
        dismissible: true,
        className: "px-3 md:px-[1.5rem] py-3 border-bottom border-subtle bg-transparent",
        children: `
          <div class="d-flex align-items-center gap-2 me-auto min-w-0">
            <div class="w-[38px] h-[38px] min-w-[38px] rounded-circle bg-primary/10 text-primary d-flex align-items-center justify-content-center shrink-0">
              <i class="mdi ${escapeHtml(icon)} text-lg"></i>
            </div>
            <div class="min-w-0">
              <h5 class="modal-title fw-bold text-body m-0 text-sm md:text-[1rem] truncate leading-tight">
                ${escapeHtml(title)}
              </h5>
              ${subtitle ? `<div class="text-xs text-subtle truncate leading-tight mt-1">${escapeHtml(subtitle)}</div>` : ""}
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
                    class="${classNames(
                      "list-group-item list-group-item-action d-flex align-items-center justify-content-between px-3 md:px-[1.5rem] py-3 bg-transparent border-0",
                      !isLast && "border-bottom border-subtle",
                      "text-start transition"
                    )}"
                    data-picker-value="${escapeHtml(item.value)}"
                  >
                    <div class="d-flex align-items-center gap-3 min-w-0 flex-1">
                      <!-- Perfectly Round Circular Icon -->
                      <div class="${classNames(
                        "w-[38px] h-[38px] min-w-[38px] rounded-circle",
                        isSelected ? "bg-primary text-light" : `bg-subtle ${item.iconClass || "text-body"}`,
                        "d-flex align-items-center justify-content-center shrink-0"
                      )}">
                        <i class="mdi ${escapeHtml(iconClass)} text-lg leading-none"></i>
                      </div>
                      <!-- Label & Description -->
                      <div class="d-flex flex-column min-w-0 flex-1">
                        <span class="fw-semibold text-sm ${
                          isSelected ? "text-primary fw-bold" : "text-body"
                        } truncate leading-tight">
                          ${escapeHtml(item.label)}
                        </span>
                        ${
                          item.description
                            ? `<span class="text-xs text-subtle truncate leading-tight mt-1">${escapeHtml(
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
                          ? `<span class="${classNames(
                              "badge",
                              item.badgeVariant ? `badge-${item.badgeVariant}` : "badge-subtle",
                              "text-xs px-2 py-1 rounded-pill fw-semibold"
                            )}">${escapeHtml(item.badge)}</span>`
                          : ""
                      }
                      ${
                        isSelected
                          ? `<i class="mdi mdi-check text-primary fw-bold text-xl leading-none"></i>`
                          : `<span class="w-[1.25rem]"></span>`
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
          "d-flex align-items-center justify-content-end px-3 md:px-[1.5rem] py-3 border-top border-subtle bg-transparent shrink-0",
        children: Button({
          type: "button",
          ghost: true,
          size: "sm",
          pill: true,
          className: "px-4 text-subtle hover:text-body fw-semibold",
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
