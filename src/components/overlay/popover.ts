import { classNames, escapeHtml, pickTag, toAttributes } from "../utils";

export type PopoverPlacement = "top" | "bottom" | "start" | "end" | "left" | "right" | "auto";

export interface PopoverTriggerProps {
  content: string;
  placement?: PopoverPlacement;
  /** Popover title line, rendered as `data-popover-title`. */
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
    "data-popover-title": title,
    type: Tag === "button" ? "button" : undefined,
    ...attributes
  });

  const classAttr = className ? ` class="${classNames(className)}"` : "";
  return `<${Tag}${classAttr}${baseAttrs}>${children}</${Tag}>`.trim();
}

export const popoverTrigger = PopoverTrigger;

export interface PopoverProps {
  title?: string;
  body: string;
  /** Adds the `popover-{placement}` class that draws the arrow on a static popover. */
  placement?: Exclude<PopoverPlacement, "auto">;
  /** `"header"` (default) renders `.popover-header`; `"title"` renders `.popover-title`. */
  titleVariant?: "header" | "title";
  className?: string;
}

export function Popover(props: PopoverProps): string {
  const { title, body, placement, titleVariant = "header", className = "" } = props;

  const titleClass = titleVariant === "title" ? "popover-title" : "popover-header";
  const headerHtml = title ? `<div class="${titleClass}">${escapeHtml(title)}</div>` : "";

  return `
    <div class="${classNames("popover", placement && `popover-${placement}`, className)}" role="tooltip">
      ${headerHtml}
      <div class="popover-body">${body}</div>
    </div>
  `.trim();
}

export const popover = Popover;
