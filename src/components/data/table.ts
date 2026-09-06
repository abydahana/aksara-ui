import { classNames, toAttributes } from "../utils";

export interface TableProps {
  children?: string;
  striped?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  hover?: boolean;
  small?: boolean;
  responsive?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
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
    dark = false,
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

  const baseAttrs = toAttributes(attributes);

  const tableHtml = `<table class="${tableClasses}"${baseAttrs}>${children}</table>`.trim();

  if (responsive) {
    const responsiveClass = typeof responsive === "string" ? `table-responsive-${responsive}` : "table-responsive";
    return `<div class="${responsiveClass}">${tableHtml}</div>`.trim();
  }

  return tableHtml;
}

export const table = Table;

export interface TableHeadProps {
  children?: string;
  dark?: boolean;
  className?: string;
}

export function TableHead(props: TableHeadProps = {}): string {
  const { children = "", dark = false, className = "" } = props;
  const classes = classNames(dark && "table-dark", className);
  return `<thead class="${classes}">${children}</thead>`.trim();
}

export const tableHead = TableHead;

export interface TableBodyProps {
  children?: string;
  className?: string;
}

export function TableBody(props: TableBodyProps = {}): string {
  const { children = "", className = "" } = props;
  return `<tbody class="${classNames(className)}">${children}</tbody>`.trim();
}

export const tableBody = TableBody;

export interface TableRowProps {
  children?: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  active?: boolean;
  className?: string;
}

export function TableRow(props: TableRowProps = {}): string {
  const { children = "", variant, active = false, className = "" } = props;
  const classes = classNames(variant && `table-${variant}`, active && "table-active", className);
  return `<tr class="${classes}">${children}</tr>`.trim();
}

export const tableRow = TableRow;
