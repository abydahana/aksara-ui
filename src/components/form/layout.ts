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
    sm !== undefined && (sm === "auto" ? "sm:col-auto" : `sm:col-${sm}`),
    md !== undefined && (md === "auto" ? "md:col-auto" : `md:col-${md}`),
    lg !== undefined && (lg === "auto" ? "lg:col-auto" : `lg:col-${lg}`),
    xl !== undefined && (xl === "auto" ? "xl:col-auto" : `xl:col-${xl}`),
    className
  );

  const baseAttrs = toAttributes(attributes);

  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const formCol = FormCol;
