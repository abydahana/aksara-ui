import { classNames, escapeHtml, toAttributes } from "../utils";

type Tone = "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
/** Any button style: `plain`, `ghost`, `subtle`, a solid color, or `soft-*` / `outline-*` / `ghost-*` of a color. */
export type ButtonStyle = "plain" | "ghost" | "subtle" | Tone | `soft-${Tone}` | `outline-${Tone}` | `ghost-${Tone}`;

export interface CopyButtonProps {
  /** Literal text to copy. */
  text?: string;
  /** Or a selector whose value / text is copied (`"#apiKey"`). */
  target?: string;
  label?: string;
  copiedLabel?: string;
  /** Icon-only button (labels become the accessible name). */
  iconOnly?: boolean;
  variant?: ButtonStyle;
  size?: "sm" | "md" | "lg";
  /** How long the "copied" state lasts, in ms. */
  resetAfter?: number;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** Copies text with feedback: the icon and label switch to "Copied" for two seconds. */
export function CopyButton(props: CopyButtonProps = {}): string {
  const {
    text,
    target,
    label = "Copy",
    copiedLabel = "Copied",
    iconOnly = false,
    variant = "plain",
    size = "md",
    resetAfter,
    className = "",
    attributes
  } = props;
  const classes = classNames(
    "btn copy-btn",
    `btn-${variant}`,
    size !== "md" && `btn-${size}`,
    iconOnly && "btn-icon",
    className
  );
  const attrs = toAttributes({
    type: "button",
    "data-clipboard": target ?? "",
    "data-clipboard-text": text,
    "data-clipboard-reset": resetAfter,
    "aria-label": iconOnly ? label : undefined,
    title: iconOnly ? label : undefined,
    ...attributes
  });
  const idle = `<span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span>${iconOnly ? "" : `<span>${escapeHtml(label)}</span>`}</span>`;
  const done = `<span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span>${iconOnly ? `<span class="visually-hidden">${escapeHtml(copiedLabel)}</span>` : `<span>${escapeHtml(copiedLabel)}</span>`}</span>`;
  return `<button class="${classes}"${attrs}>${idle}${done}</button>`;
}

export interface CopyFieldProps {
  value: string;
  id?: string;
  label?: string;
  className?: string;
}

/** Read-only value (API key, URL, command) with a copy button. */
export function CopyField(props: CopyFieldProps): string {
  const { value, id, label = "Copy", className = "" } = props;
  return `<div class="${classNames("copy-field", className)}"><code${toAttributes({ id })}>${escapeHtml(value)}</code>${CopyButton({ text: value, label, iconOnly: true, variant: "ghost", size: "sm" })}</div>`;
}

export const copyButton = CopyButton;
export const copyField = CopyField;
