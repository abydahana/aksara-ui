import { classNames, pickTag, toAttributes } from "../utils";

export interface CollapseProps {
  id: string;
  children?: string;
  show?: boolean;
  horizontal?: boolean;
  /** Group selector (`data-collapse-parent`): opening this panel closes the group's other panels. */
  parent?: string;
  /** Transition length in ms (`data-collapse-duration`); `0` switches instantly. */
  duration?: number;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Collapse(props: CollapseProps): string {
  const { id, children = "", show = false, horizontal = false, parent, duration, className = "", attributes } = props;

  const classes = classNames("collapse", show && "collapse-show show", horizontal && "collapse-horizontal", className);

  const baseAttrs = toAttributes({
    id,
    "data-collapse-parent": parent,
    "data-collapse-duration": duration,
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
  const { targetId, children, expanded = false, className = "", attributes } = props;
  const Tag = pickTag(props.as, ["button", "a"] as const, "button");

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

  const classes = classNames(className);
  const classAttr = classes ? ` class="${classes}"` : "";

  return `<${Tag}${classAttr}${baseAttrs}>${children}</${Tag}>`.trim();
}

export const collapseTrigger = CollapseTrigger;
