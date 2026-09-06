import { classNames, toAttributes } from "../utils";

export interface CollapseProps {
  id: string;
  children?: string;
  show?: boolean;
  horizontal?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Collapse(props: CollapseProps): string {
  const { id, children = "", show = false, horizontal = false, className = "", attributes } = props;

  const classes = classNames("collapse", show && "collapse-show show", horizontal && "collapse-horizontal", className);

  const baseAttrs = toAttributes({
    id,
    ...attributes
  });

  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const collapse = Collapse;

export interface CollapseTriggerProps {
  targetId: string;
  children: string;
  as?: "button" | "a";
  expanded?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function CollapseTrigger(props: CollapseTriggerProps): string {
  const { targetId, children, as: Tag = "button", expanded = false, className = "", attributes } = props;

  const targetSelector = targetId.startsWith("#") ? targetId : `#${targetId}`;
  const targetRawId = targetId.replace(/^#/, "");

  const baseAttrs = toAttributes({
    href: Tag === "a" ? targetSelector : undefined,
    type: Tag === "button" ? "button" : undefined,
    "data-collapse": targetSelector,
    "data-collapse-target": targetSelector,
    "aria-expanded": expanded ? "true" : "false",
    "aria-controls": targetRawId,
    ...attributes
  });

  return `<${Tag} class="${classNames(className)}"${baseAttrs}>${children}</${Tag}>`.trim();
}

export const collapseTrigger = CollapseTrigger;
