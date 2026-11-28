import { classNames, toAttributes } from "../utils";

export interface OtpInputProps {
  /** Number of boxes. Default 6. */
  length?: number;
  /** Hidden field that receives the combined code. */
  name?: string;
  id?: string;
  /** Pre-filled code. */
  value?: string;
  /** Allowed characters as a one-character regex (default digits: `"[0-9]"`). */
  pattern?: string;
  /** Visual gap after these positions, e.g. `[3]` → 123 – 456. */
  groups?: number[];
  size?: "sm" | "md";
  disabled?: boolean;
  /** Mask the characters (`type="password"`). */
  masked?: boolean;
  label?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * One-time-code input (`data-otp`): typing advances, Backspace goes back, pasting fills every
 * box, and `aksara:otp:complete` fires with the full code. SMS autofill works on the first box.
 */
export function OtpInput(props: OtpInputProps = {}): string {
  const {
    length = 6,
    name,
    id,
    value = "",
    pattern,
    groups = [],
    size = "md",
    disabled = false,
    masked = false,
    label = "Verification code",
    className = "",
    attributes
  } = props;
  const numeric = !pattern || pattern === "[0-9]" || pattern === "\\d";
  const chars = Array.from(value);
  const boxes = Array.from({ length }, (_, i) => {
    const attrs = toAttributes({
      type: masked ? "password" : "text",
      inputmode: numeric ? "numeric" : "text",
      autocomplete: i === 0 ? "one-time-code" : "off",
      maxlength: i === 0 ? length : 1,
      placeholder: " ",
      value: chars[i],
      disabled,
      "aria-label": `${label} ${i + 1} of ${length}`
    });
    const separator =
      groups.includes(i + 1) && i < length - 1 ? '<span class="otp-separator" aria-hidden="true">–</span>' : "";
    return `<input${attrs} />${separator}`;
  }).join("");
  const hidden = name ? `<input${toAttributes({ type: "hidden", name, value })} />` : "";
  const attrs = toAttributes({
    id,
    role: "group",
    "aria-label": label,
    "data-otp": "",
    "data-otp-pattern": pattern,
    "data-value": value,
    ...attributes
  });
  return `<div class="${classNames("otp", size === "sm" && "otp-sm", className)}"${attrs}>${boxes}${hidden}</div>`;
}

export const otpInput = OtpInput;
