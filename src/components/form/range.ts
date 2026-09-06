import { classNames, toAttributes } from "../utils";

export interface RangeProps {
  name?: string;
  id?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  disabled?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Range(props: RangeProps = {}): string {
  const { name, id, min = 0, max = 100, step = 1, value, disabled = false, className = "", attributes } = props;

  const classes = classNames("form-range", className);

  const baseAttrs = toAttributes({
    type: "range",
    name,
    id,
    min,
    max,
    step,
    value,
    disabled,
    ...attributes
  });

  return `<input class="${classes}"${baseAttrs} />`.trim();
}

export const range = Range;
