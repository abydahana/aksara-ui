import { classNames, escapeHtml, iconClasses, toAttributes } from "../utils";

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
  /**
   * Icon classes for the `.accordion-icon` indicator (rotates when open). Defaults to
   * `"mdi-chevron-down"`; a bare `mdi-*` name gets the `mdi` base class. `false` renders no icon.
   */
  icon?: string | false;
  className?: string;
}

export function AccordionItem(props: AccordionItemProps): string {
  const { id, title, body, expanded = false, icon = "mdi-chevron-down", className = "" } = props;

  // The runtime (Accordion in aksara.ts) toggles `aria-expanded` on the button and the
  // `hidden` attribute on the panel, so the initial markup must use the same contract.
  const buttonClasses = classNames("accordion-button", expanded && "accordion-button-active", !expanded && "collapsed");

  const panelClasses = classNames("accordion-panel", expanded && "accordion-panel-open");

  const rawId = String(id).replace(/^#/, "");
  const targetSelector = `#${rawId}`;
  const buttonId = `${rawId}-button`;

  const iconHtml =
    icon === false ? "" : `<span class="${classNames("accordion-icon", iconClasses(icon))}" aria-hidden="true"></span>`;

  // `text-base` resets the heading font-size (h2 is 1.75rem and the button uses font:inherit).
  return `
    <div class="${classNames("accordion-item", className)}">
      <h2 class="accordion-header m-0 text-base">
        <button
          id="${escapeHtml(buttonId)}"
          class="${buttonClasses}"
          type="button"
          data-accordion="${escapeHtml(targetSelector)}"
          aria-expanded="${expanded ? "true" : "false"}"
          aria-controls="${escapeHtml(rawId)}"
        >
          <span>${escapeHtml(title)}</span>
          ${iconHtml}
        </button>
      </h2>
      <div id="${escapeHtml(rawId)}" class="${panelClasses}" role="region" aria-labelledby="${escapeHtml(buttonId)}"${expanded ? "" : " hidden"}>
        <div class="accordion-body">
          ${body}
        </div>
      </div>
    </div>
  `.trim();
}

export const accordionItem = AccordionItem;
