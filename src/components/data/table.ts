import { classNames, toAttributes, normalizeSize } from "../utils";

export interface TableProps {
  children?: string;
  striped?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  hover?: boolean;
  small?: boolean;
  responsive?: boolean | "sm" | "md" | "lg" | "xl" | "2xl" | "xxl";
  /** Extra classes for the responsive wrapper (e.g. `max-h-[300px] overflow-y-auto`). */
  responsiveClassName?: string;
  /**
   * Row selection (`data-table-select`): `true` for checkbox selection, `"row"` to also
   * select by clicking anywhere on a row. Pair with `TableCheckAll` / `TableCheck` cells.
   */
  selectable?: boolean | "row";
  dark?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Table(props: TableProps = {}): string {
  const {
    children = "",
    striped = false,
    bordered = false,
    borderless = false,
    hover = false,
    small = false,
    responsive = false,
    responsiveClassName = "",
    dark = false,
    selectable = false,
    className = "",
    attributes
  } = props;

  const tableClasses = classNames(
    "table",
    striped && "table-striped",
    bordered && "table-bordered",
    borderless && "table-borderless",
    hover && "table-hover",
    small && "table-compact table-sm",
    dark && "table-dark",
    className
  );

  const baseAttrs = toAttributes({
    "data-table-select": selectable === "row" ? "row" : selectable ? "" : undefined,
    ...attributes
  });

  const tableHtml = `<table class="${tableClasses}"${baseAttrs}>${children}</table>`.trim();

  if (responsive) {
    const responsiveClass =
      typeof responsive === "string" ? `table-responsive-${normalizeSize(responsive)}` : "table-responsive";
    return `<div class="${classNames(responsiveClass, responsiveClassName)}">${tableHtml}</div>`.trim();
  }

  return tableHtml;
}

export const table = Table;

/** ` class="..."` when there are classes, otherwise an empty string. */
function classAttr(...classes: Parameters<typeof classNames>): string {
  const value = classNames(...classes);
  return value ? ` class="${value}"` : "";
}

export interface TableHeadProps {
  children?: string;
  dark?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function TableHead(props: TableHeadProps = {}): string {
  const { children = "", dark = false, className = "", attributes } = props;
  return `<thead${classAttr(dark && "table-dark", className)}${toAttributes(attributes)}>${children}</thead>`.trim();
}

export const tableHead = TableHead;

export interface TableBodyProps {
  children?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function TableBody(props: TableBodyProps = {}): string {
  const { children = "", className = "", attributes } = props;
  return `<tbody${classAttr(className)}${toAttributes(attributes)}>${children}</tbody>`.trim();
}

export const tableBody = TableBody;

export interface TableFootProps {
  children?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function TableFoot(props: TableFootProps = {}): string {
  const { children = "", className = "", attributes } = props;
  return `<tfoot${classAttr(className)}${toAttributes(attributes)}>${children}</tfoot>`.trim();
}

export const tableFoot = TableFoot;

export interface TableRowProps {
  children?: string;
  variant?: "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  active?: boolean;
  /** Alias of `active` for selectable tables (the runtime keeps it in sync). */
  selected?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function TableRow(props: TableRowProps = {}): string {
  const { children = "", variant, active = false, selected = false, className = "", attributes } = props;
  const isActive = active || selected;
  return `<tr${classAttr(variant && `table-${variant}`, isActive && "table-active", className)}${toAttributes({ "aria-selected": selected ? "true" : undefined, ...attributes })}>${children}</tr>`.trim();
}

export interface TableCheckProps {
  /** Accessible label, e.g. "Select Maya Chen". */
  label: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
}

/** Header cell with the select-all checkbox of a selectable table. */
export function TableCheckAll(props: { label?: string } = {}): string {
  const label = props.label ?? "Select all rows";
  return `<th class="table-check" scope="col"><input class="form-check-input" type="checkbox" data-table-select-all${toAttributes({ "aria-label": label })} /></th>`;
}

/** Row cell with the selection checkbox of a selectable table. */
export function TableCheck(props: TableCheckProps): string {
  const { label, checked = false, disabled = false, name, value } = props;
  const attrs = toAttributes({ "aria-label": label, checked, disabled, name, value });
  return `<td class="table-check"><input class="form-check-input" type="checkbox" data-table-select-row${attrs} /></td>`;
}

export const tableCheck = TableCheck;
export const tableCheckAll = TableCheckAll;

export const tableRow = TableRow;
