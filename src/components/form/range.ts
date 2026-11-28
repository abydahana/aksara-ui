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
  /** Selector of an element that mirrors the value (`data-range-output`). */
  output?: string;
  /** Text appended to the mirrored value, e.g. "%". */
  suffix?: string;
  attributes?: Record<string, unknown>;
}

export function Range(props: RangeProps = {}): string {
  const {
    name,
    id,
    min = 0,
    max = 100,
    step = 1,
    value,
    disabled = false,
    className = "",
    output,
    suffix,
    attributes
  } = props;
  const current = value ?? (min + max) / 2;
  const progress = max > min ? ((current - min) / (max - min)) * 100 : 0;

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
    style: `--aksara-range-progress:${Math.min(100, Math.max(0, progress))}%`,
    "data-range-output": output,
    "data-range-suffix": suffix,
    ...attributes
  });

  return `<input class="${classes}"${baseAttrs} />`.trim();
}

export const range = Range;
