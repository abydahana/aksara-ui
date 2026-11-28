import { classNames, escapeHtml, toAttributes } from "../utils";

export interface NumberInputProps {
  name?: string;
  id?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  /** Compact width (quantity pickers) instead of filling the row. */
  inline?: boolean;
  decrementLabel?: string;
  incrementLabel?: string;
  /** Accessible name when there is no `<label for>`. */
  label?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * Number field with − / + buttons (`data-stepper`). The runtime steps by `step`, clamps to
 * min/max, disables the button at a limit, repeats while held and fires input/change.
 */
export function NumberInput(props: NumberInputProps = {}): string {
  const {
    name,
    id,
    value,
    min,
    max,
    step,
    disabled = false,
    size = "md",
    inline = false,
    decrementLabel = "Decrease",
    incrementLabel = "Increase",
    label,
    className = "",
    attributes
  } = props;
  const classes = classNames(
    "input-group input-stepper",
    size !== "md" && `input-group-${size}`,
    inline && "input-stepper-inline",
    className
  );
  const inputAttrs = toAttributes({
    class: "form-control",
    type: "number",
    inputmode: step !== undefined && !Number.isInteger(step) ? "decimal" : "numeric",
    name,
    id,
    value,
    min,
    max,
    step,
    disabled,
    "aria-label": label,
    ...attributes
  });
  const atMin = value !== undefined && min !== undefined && value <= min;
  const atMax = value !== undefined && max !== undefined && value >= max;
  const button = (dir: "down" | "up", text: string, off: boolean) =>
    `<button class="btn btn-plain btn-icon" type="button" data-stepper-${dir} aria-label="${escapeHtml(text)}"${disabled || off ? " disabled" : ""}><span class="mdi mdi-${dir === "up" ? "plus" : "minus"}" aria-hidden="true"></span></button>`;
  return `<div class="${classes}" data-stepper>${button("down", decrementLabel, atMin)}<input${inputAttrs} />${button("up", incrementLabel, atMax)}</div>`;
}

export const numberInput = NumberInput;
