import { classNames, escapeHtml, toAttributes } from "../utils";

export interface TabItem {
  id: string;
  /** Plain-text label (escaped). May be empty for icon-only tabs (set `ariaLabel`). */
  label: string;
  /** Raw HTML label (e.g. text plus a badge); takes precedence over `label`. */
  labelHtml?: string;
  /** Accessible name for the tab button, required for icon-only tabs. */
  ariaLabel?: string;
  /** Raw HTML icon. */
  icon?: string;
  content: string;
  active?: boolean;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  ariaLabel?: string;
  className?: string;
  attributes?: Record<string, unknown>;
  /** When true (default: true), tab panels render in a swipeable slider track that tracks finger movement */
  swipeable?: boolean;
  /** Visual style variant: 'default' (standard underline), 'segmented' (iOS/macOS style segmented control), or 'pills' */
  variant?: "default" | "segmented" | "pills";
}

export function Tabs(props: TabsProps): string {
  const { items = [], ariaLabel = "Tabs", className = "", attributes, swipeable = true, variant = "default" } = props;

  const hasActive = items.some((item) => item.active);
  const activeIndex = hasActive ? items.findIndex((item) => item.active) : 0;

  const buttonsHtml = items
    .map((item, idx) => {
      const isSelected = idx === activeIndex;
      const btnClasses = classNames("tab", isSelected && "active", item.disabled && "disabled");
      const disabledAttr = item.disabled ? " disabled" : "";
      const labelContent = item.labelHtml ?? escapeHtml(item.label);
      const iconClass = classNames("tab-icon", labelContent && "me-1", "shrink-0");
      const iconHtml = item.icon ? `<span class="${iconClass}" aria-hidden="true">${item.icon}</span>` : "";
      const ariaLabelAttr = item.ariaLabel ? ` aria-label="${escapeHtml(item.ariaLabel)}"` : "";

      return `
        <button
          id="tab-${escapeHtml(item.id)}"
          class="${btnClasses}"
          type="button"
          data-tabs="#panel-${escapeHtml(item.id)}"
          role="tab"
          aria-selected="${isSelected ? "true" : "false"}"
          tabindex="${isSelected ? "0" : "-1"}"
          aria-controls="panel-${escapeHtml(item.id)}"${ariaLabelAttr}
          ${disabledAttr}
        >
          ${iconHtml}${labelContent}
        </button>
      `.trim();
    })
    .join("");

  const panelsHtml = items
    .map((item, idx) => {
      const isSelected = idx === activeIndex;
      const hiddenAttr = swipeable ? "" : isSelected ? "" : " hidden";
      const panelClasses = classNames("tab-panel", isSelected && "active");

      return `
        <div
          id="panel-${escapeHtml(item.id)}"
          class="${panelClasses}"
          role="tabpanel"
          aria-labelledby="tab-${escapeHtml(item.id)}"${hiddenAttr}
        >
          ${item.content}
        </div>
      `.trim();
    })
    .join("\n");

  const baseAttrs = toAttributes(attributes);
  const trackClass = classNames("tab-content", swipeable && "tabs-slider-track", "mt-3");
  const tablistClass = classNames(
    "tabs",
    variant === "segmented" && "tabs-segmented",
    variant === "pills" && "nav nav-pills"
  );

  return `
    <div class="${classNames("tabs-wrapper", swipeable && "tabs-slider", variant === "segmented" && "tabs-segmented-wrapper", className)}"${baseAttrs}>
      <div class="${tablistClass}" role="tablist" aria-label="${escapeHtml(ariaLabel)}">
        ${buttonsHtml}
      </div>
      <div class="${trackClass}"${swipeable ? ' data-tabs-slider=""' : ""}>
        ${panelsHtml}
      </div>
    </div>
  `.trim();
}

export const tabs = Tabs;
