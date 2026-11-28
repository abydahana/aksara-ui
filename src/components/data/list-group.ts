import { classNames, pickTag, toAttributes, normalizeSize } from "../utils";

export interface ListGroupProps {
  children?: string;
  /**
   * Items to render with {@link ListGroupItem}. In a `ul`/`ol` list (`as` or `numbered`), plain
   * items render as `<li>`, so the markup stays valid.
   */
  items?: ListGroupItemProps[];
  /** Wrapper element. Defaults to `ol` when `numbered`, otherwise `div`. */
  as?: "div" | "ul" | "ol";
  flush?: boolean;
  numbered?: boolean;
  horizontal?: boolean | "sm" | "md" | "lg" | "xl" | "2xl" | "xxl";
  inset?: boolean;
  dividerInset?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function ListGroup(props: ListGroupProps = {}): string {
  const {
    children,
    items,
    flush = false,
    numbered = false,
    horizontal = false,
    inset = false,
    dividerInset = false,
    className = "",
    attributes
  } = props;

  const horizontalClass =
    horizontal === true
      ? "list-group-horizontal"
      : typeof horizontal === "string"
        ? `list-group-horizontal-${normalizeSize(horizontal)}`
        : null;

  const classes = classNames(
    "list-group",
    flush && "list-group-flush",
    numbered && "list-group-numbered",
    inset && "list-group-inset",
    dividerInset && "list-group-divider-inset",
    horizontalClass,
    className
  );

  const Tag = pickTag(props.as, ["div", "ul", "ol"] as const, numbered ? "ol" : "div");
  const baseAttrs = toAttributes(attributes);
  const isList = Tag !== "div";
  const content =
    children ??
    (items ?? [])
      .map((item) =>
        ListGroupItem({ ...item, as: item.as ?? (isList && !item.href && !item.action ? "li" : undefined) })
      )
      .join("");

  return `<${Tag} class="${classes}"${baseAttrs}>${content}</${Tag}>`.trim();
}

export const listGroup = ListGroup;

export interface ListGroupItemProps {
  content?: string;
  /**
   * Element for a plain item: `div` (default) or `li` for a `ul`/`ol` list. Items with `href`
   * render as `<a>` and `action` items as `<button>` regardless.
   */
  as?: "div" | "li";
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
  const Tag = isLink ? "a" : action ? "button" : pickTag(props.as, ["div", "li"] as const, "div");

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
