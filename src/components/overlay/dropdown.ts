import { classNames, escapeHtml, toAttributes } from "../utils";

export interface DropdownProps {
  children?: string;
  direction?: "up" | "end" | "start";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Dropdown(props: DropdownProps = {}): string {
  const { children = "", direction, className = "", attributes } = props;

  const classes = classNames(
    "dropdown",
    direction === "up" && "dropup",
    direction === "end" && "dropend",
    direction === "start" && "dropstart",
    className
  );

  const baseAttrs = toAttributes(attributes);

  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const dropdown = Dropdown;

export interface DropdownMenuProps {
  id?: string;
  children?: string;
  end?: boolean;
  dark?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function DropdownMenu(props: DropdownMenuProps = {}): string {
  const { id, children = "", end = false, dark = false, className = "", attributes } = props;

  const classes = classNames("dropdown-menu", end && "dropdown-menu-end", dark && "dropdown-menu-dark", className);

  const baseAttrs = toAttributes({
    id,
    ...attributes
  });

  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const dropdownMenu = DropdownMenu;

export interface DropdownItemProps {
  content?: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  danger?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function DropdownItem(props: DropdownItemProps = {}): string {
  const { content = "", href, active = false, disabled = false, danger = false, className = "", attributes } = props;

  const Tag = href ? "a" : "button";

  const classes = classNames(
    "dropdown-item",
    active && "active",
    disabled && "disabled",
    danger && "text-danger",
    className
  );

  const baseAttrs = toAttributes({
    href,
    type: Tag === "button" ? "button" : undefined,
    disabled: disabled && Tag === "button" ? true : undefined,
    "aria-current": active ? "true" : undefined,
    "aria-disabled": disabled ? "true" : undefined,
    ...attributes
  });

  return `<${Tag} class="${classes}"${baseAttrs}>${content}</${Tag}>`.trim();
}

export const dropdownItem = DropdownItem;

export function DropdownDivider(className = ""): string {
  return `<div class="${classNames("dropdown-divider", className)}"></div>`;
}

export const dropdownDivider = DropdownDivider;

export function DropdownHeader(title: string, className = ""): string {
  return `<div class="${classNames("dropdown-header", className)}">${escapeHtml(title)}</div>`;
}

export const dropdownHeader = DropdownHeader;
