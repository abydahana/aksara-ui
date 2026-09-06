import { classNames, escapeHtml, toAttributes } from "../utils";

export interface AccordionProps {
  children?: string;
  flush?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Accordion(props: AccordionProps = {}): string {
  const { children = "", flush = false, className = "", attributes } = props;

  const classes = classNames("accordion", flush && "accordion-flush", className);

  const baseAttrs = toAttributes(attributes);

  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const accordion = Accordion;

export interface AccordionItemProps {
  id: string;
  title: string;
  body: string;
  expanded?: boolean;
  className?: string;
}

export function AccordionItem(props: AccordionItemProps): string {
  const { id, title, body, expanded = false, className = "" } = props;

  const buttonClasses = classNames("accordion-button", expanded && "accordion-button-active", !expanded && "collapsed");

  const panelClasses = classNames("accordion-panel", expanded && "accordion-panel-open");

  const targetSelector = id.startsWith("#") ? id : `#${id}`;
  const rawId = id.replace(/^#/, "");

  return `
    <div class="${classNames("accordion-item", className)}">
      <h2 class="accordion-header m-0">
        <button
          class="${buttonClasses}"
          type="button"
          data-accordion="${escapeHtml(targetSelector)}"
          aria-expanded="${expanded ? "true" : "false"}"
          aria-controls="${escapeHtml(rawId)}"
        >
          <span>${escapeHtml(title)}</span>
          <span class="accordion-icon" aria-hidden="true"></span>
        </button>
      </h2>
      <div id="${escapeHtml(rawId)}" class="${panelClasses}" role="region">
        <div class="accordion-body">
          ${body}
        </div>
      </div>
    </div>
  `.trim();
}

export const accordionItem = AccordionItem;
