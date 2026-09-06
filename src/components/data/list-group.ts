import { classNames, toAttributes } from "../utils";

export interface ListGroupProps {
  children?: string;
  flush?: boolean;
  numbered?: boolean;
  horizontal?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ListGroup(props: ListGroupProps = {}): string {
  const { children = "", flush = false, numbered = false, horizontal = false, className = "", attributes } = props;

  const horizontalClass =
    horizontal === true
      ? "list-group-horizontal"
      : typeof horizontal === "string"
        ? `list-group-horizontal-${horizontal}`
        : null;

  const classes = classNames(
    "list-group",
    flush && "list-group-flush",
    numbered && "list-group-numbered",
    horizontalClass,
    className
  );

  const Tag = numbered ? "ol" : "div";
  const baseAttrs = toAttributes(attributes);

  return `<${Tag} class="${classes}"${baseAttrs}>${children}</${Tag}>`.trim();
}

export const listGroup = ListGroup;

export interface ListGroupItemProps {
  content?: string;
  active?: boolean;
  disabled?: boolean;
  action?: boolean;
  href?: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ListGroupItem(props: ListGroupItemProps = {}): string {
  const {
    content = "",
    active = false,
    disabled = false,
    action = false,
    href,
    variant,
    className = "",
    attributes
  } = props;

  const isLink = Boolean(href);
  const Tag = isLink ? "a" : action ? "button" : "div";

  const classes = classNames(
    "list-group-item",
    (action || isLink) && "list-group-item-action",
    active && "active",
    disabled && "disabled",
    variant && `list-group-item-${variant}`,
    className
  );

  const baseAttrs = toAttributes({
    href,
    type: Tag === "button" ? "button" : undefined,
    disabled: Tag === "button" && disabled ? true : undefined,
    "aria-current": active ? "true" : undefined,
    "aria-disabled": disabled ? "true" : undefined,
    ...attributes
  });

  return `<${Tag} class="${classes}"${baseAttrs}>${content}</${Tag}>`.trim();
}

export const listGroupItem = ListGroupItem;
