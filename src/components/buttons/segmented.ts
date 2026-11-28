import { classNames, escapeHtml, iconClasses, toAttributes } from "../utils";
import type { ButtonStyle } from "./copy-button";

export interface SegmentedOption {
  value: string;
  label?: string;
  icon?: string;
  disabled?: boolean;
  /** Accessible name for icon-only segments. */
  ariaLabel?: string;
}

export interface SegmentedProps {
  options: SegmentedOption[];
  value?: string;
  /**
   * With `name` it renders radio inputs (works in forms, no JavaScript). Without it, buttons
   * (`data-segmented`) that the runtime toggles, firing `aksara:segmented:change`.
   */
  name?: string;
  id?: string;
  size?: "sm" | "md" | "lg";
  /** Stretch to full width with equal segments. */
  block?: boolean;
  label?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

function segmentContent(option: SegmentedOption): string {
  const icon = option.icon ? `<span class="${escapeHtml(iconClasses(option.icon))}" aria-hidden="true"></span>` : "";
  return `${icon}${option.label ? `<span>${escapeHtml(option.label)}</span>` : ""}`;
}

/** iOS-style segmented control for switching a value or view. */
export function Segmented(props: SegmentedProps): string {
  const { options, value, name, id, size = "md", block = false, label, className = "", attributes } = props;
  const classes = classNames("segmented", size !== "md" && `segmented-${size}`, block && "segmented-block", className);
  const selected = value ?? options[0]?.value;
  if (name) {
    const base = id ?? `${name}-seg`;
    const items = options
      .map((option, i) => {
        const inputId = `${base}-${i}`;
        const inputAttrs = toAttributes({
          type: "radio",
          name,
          id: inputId,
          value: option.value,
          checked: option.value === selected,
          disabled: option.disabled
        });
        // A label's aria-label is not reliably used as the radio's name; hidden text is.
        const srName =
          option.ariaLabel && !option.label
            ? `<span class="visually-hidden">${escapeHtml(option.ariaLabel)}</span>`
            : "";
        return `<input${inputAttrs} /><label for="${escapeHtml(inputId)}">${segmentContent(option)}${srName}</label>`;
      })
      .join("");
    return `<div class="${classes}"${toAttributes({ id, role: "radiogroup", "aria-label": label, ...attributes })}>${items}</div>`;
  }
  const items = options
    .map((option) => {
      const on = option.value === selected;
      const attrs = toAttributes({
        type: "button",
        "data-value": option.value,
        "aria-pressed": on ? "true" : "false",
        "aria-label": option.ariaLabel,
        disabled: option.disabled
      });
      return `<button class="${classNames("segmented-item", on && "active")}"${attrs}>${segmentContent(option)}</button>`;
    })
    .join("");
  return `<div class="${classes}"${toAttributes({ id, role: "group", "aria-label": label, "data-segmented": "", "data-value": selected, ...attributes })}>${items}</div>`;
}

export interface ToggleButtonProps {
  /** Content while off; `pressedChildren` (optional) replaces it while on. */
  children: string;
  pressedChildren?: string;
  pressed?: boolean;
  /** Button style; `plain` / `ghost` / `subtle` get a soft tint while pressed. */
  variant?: ButtonStyle;
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  disabled?: boolean;
  label?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** Button with an on/off state (`aria-pressed`), e.g. bold, mute, follow, bookmark. */
export function ToggleButton(props: ToggleButtonProps): string {
  const {
    children,
    pressedChildren,
    pressed = false,
    variant = "plain",
    size = "md",
    icon = false,
    disabled = false,
    label,
    className = "",
    attributes
  } = props;
  const classes = classNames(
    "btn",
    `btn-${variant}`,
    size !== "md" && `btn-${size}`,
    icon && "btn-icon",
    pressed && "active",
    className
  );
  const attrs = toAttributes({
    type: "button",
    "data-toggle": "button",
    "aria-pressed": pressed ? "true" : "false",
    "aria-label": label,
    disabled,
    ...attributes
  });
  const content = pressedChildren
    ? `<span class="btn-toggle-off">${children}</span><span class="btn-toggle-on">${pressedChildren}</span>`
    : children;
  return `<button class="${classes}"${attrs}>${content}</button>`;
}

export const segmented = Segmented;
export const toggleButton = ToggleButton;
