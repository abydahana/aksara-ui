import { classNames, escapeHtml, pickTag, toAttributes } from "../utils";

export type TooltipPlacement = "top" | "bottom" | "start" | "end" | "auto";

export interface TooltipTriggerProps {
  title: string;
  placement?: TooltipPlacement;
  children: string;
  as?: "button" | "a" | "span" | "div";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function TooltipTrigger(props: TooltipTriggerProps): string {
  const { title, placement = "top", children, className = "", attributes } = props;
  const Tag = pickTag(props.as, ["button", "a", "span", "div"] as const, "button");

  const baseAttrs = toAttributes({
    "data-tooltip": title,
    "data-tooltip-placement": placement,
    type: Tag === "button" ? "button" : undefined,
    ...attributes
  });

  return `<${Tag} class="${classNames(className)}"${baseAttrs}>${children}</${Tag}>`.trim();
}

export const tooltipTrigger = TooltipTrigger;

export interface TooltipProps {
  text: string;
  /** Render `text` as raw HTML instead of escaping it (opt-in; only for trusted content). */
  html?: boolean;
  className?: string;
}

export function Tooltip(props: TooltipProps): string {
  const { text, html = false, className = "" } = props;

  return `
    <div class="${classNames("tooltip", className)}" role="tooltip">
      <div class="tooltip-inner">${html ? text : escapeHtml(text)}</div>
    </div>
  `.trim();
}

export const tooltip = Tooltip;
