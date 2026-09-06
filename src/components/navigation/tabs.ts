import { classNames, escapeHtml, toAttributes } from "../utils";

export interface TabItem {
  id: string;
  label: string;
  content: string;
  active?: boolean;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  ariaLabel?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Tabs(props: TabsProps): string {
  const { items = [], ariaLabel = "Tabs", className = "", attributes } = props;

  const hasActive = items.some((item) => item.active);
  const activeIndex = hasActive ? items.findIndex((item) => item.active) : 0;

  const buttonsHtml = items
    .map((item, idx) => {
      const isSelected = idx === activeIndex;
      const btnClasses = classNames("tab", isSelected && "active", item.disabled && "disabled");
      const disabledAttr = item.disabled ? " disabled" : "";

      return `
        <button
          id="tab-${escapeHtml(item.id)}"
          class="${btnClasses}"
          type="button"
          data-tabs="#panel-${escapeHtml(item.id)}"
          role="tab"
          aria-selected="${isSelected ? "true" : "false"}"
          tabindex="${isSelected ? "0" : "-1"}"
          aria-controls="panel-${escapeHtml(item.id)}"
          ${disabledAttr}
        >
          ${escapeHtml(item.label)}
        </button>
      `.trim();
    })
    .join("");

  const panelsHtml = items
    .map((item, idx) => {
      const isSelected = idx === activeIndex;
      const hiddenAttr = isSelected ? "" : " hidden";

      return `
        <div
          id="panel-${escapeHtml(item.id)}"
          class="tab-panel"
          role="tabpanel"
          aria-labelledby="tab-${escapeHtml(item.id)}"${hiddenAttr}
        >
          ${item.content}
        </div>
      `.trim();
    })
    .join("\n");

  const baseAttrs = toAttributes(attributes);

  return `
    <div class="${classNames("tabs-wrapper", className)}"${baseAttrs}>
      <div class="tabs" role="tablist" aria-label="${escapeHtml(ariaLabel)}">
        ${buttonsHtml}
      </div>
      <div class="tab-content mt-3">
        ${panelsHtml}
      </div>
    </div>
  `.trim();
}

export const tabs = Tabs;
