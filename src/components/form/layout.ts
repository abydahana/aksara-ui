import { classNames, toAttributes } from "../utils";

export interface FormRowProps {
  children?: string;
  gutter?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function FormRow(props: FormRowProps = {}): string {
  const { children = "", gutter = 3, className = "", attributes } = props;
  const classes = classNames("row", `g-${gutter}`, className);
  const baseAttrs = toAttributes(attributes);

  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const formRow = FormRow;

export interface FormColProps {
  children?: string;
  size?: number | "auto";
  sm?: number | "auto";
  md?: number | "auto";
  lg?: number | "auto";
  xl?: number | "auto";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function FormCol(props: FormColProps = {}): string {
  const { children = "", size, sm, md, lg, xl, className = "", attributes } = props;

  const classes = classNames(
    size !== undefined ? (size === "auto" ? "col-auto" : `col-${size}`) : "col",
    sm !== undefined && (sm === "auto" ? "col-sm-auto" : `col-sm-${sm}`),
    md !== undefined && (md === "auto" ? "col-md-auto" : `col-md-${md}`),
    lg !== undefined && (lg === "auto" ? "col-lg-auto" : `col-lg-${lg}`),
    xl !== undefined && (xl === "auto" ? "col-xl-auto" : `col-xl-${xl}`),
    className
  );

  const baseAttrs = toAttributes(attributes);

  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const formCol = FormCol;
