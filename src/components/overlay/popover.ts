import { classNames, escapeHtml, pickTag, toAttributes } from "../utils";

export type PopoverPlacement = "top" | "bottom" | "start" | "end" | "auto";

export interface PopoverTriggerProps {
  content: string;
  placement?: PopoverPlacement;
  title?: string;
  children: string;
  as?: "button" | "a" | "span" | "div";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function PopoverTrigger(props: PopoverTriggerProps): string {
  const { content, placement = "top", title, children, className = "", attributes } = props;
  const Tag = pickTag(props.as, ["button", "a", "span", "div"] as const, "button");

  const baseAttrs = toAttributes({
    "data-popover": content,
    "data-popover-placement": placement,
    title,
    type: Tag === "button" ? "button" : undefined,
    ...attributes
  });

  return `<${Tag} class="${classNames(className)}"${baseAttrs}>${children}</${Tag}>`.trim();
}

export const popoverTrigger = PopoverTrigger;

export interface PopoverProps {
  title?: string;
  body: string;
  className?: string;
}

export function Popover(props: PopoverProps): string {
  const { title, body, className = "" } = props;

  const headerHtml = title ? `<div class="popover-header fw-bold">${escapeHtml(title)}</div>` : "";

  return `
    <div class="${classNames("popover", className)}" role="tooltip">
      ${headerHtml}
      <div class="popover-body">${body}</div>
    </div>
  `.trim();
}

export const popover = Popover;
