import { classNames, escapeHtml, toAttributes } from "../utils";

export interface RatingProps {
  /** Form field name. Without it the rating is display-only. */
  name?: string;
  value?: number;
  max?: number;
  /** Shows the value without allowing changes; a hidden field still submits it. */
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
  /** Accessible group label. */
  label?: string;
  /** Builds the per-star label; default "3 stars". */
  starLabel?: (n: number) => string;
  idPrefix?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * Star rating. With `name`: radio inputs in natural order (arrow keys, forms, no JavaScript needed).
 * Without: a display of `value` (halves allowed, e.g. 4.5).
 */
export function Rating(props: RatingProps = {}): string {
  const {
    name,
    value = 0,
    max = 5,
    readonly = false,
    size = "md",
    label = "Rating",
    idPrefix,
    className = "",
    attributes
  } = props;
  const starLabel = props.starLabel ?? ((n: number) => `${n} star${n === 1 ? "" : "s"}`);
  const sizeClass = size !== "md" && `rating-${size}`;
  if (!name) {
    const stars = Array.from({ length: max }, (_, i) => {
      const n = i + 1;
      const state = value >= n ? "is-on" : value >= n - 0.5 ? "is-half" : "";
      return `<span class="${classNames("rating-star", state)}"></span>`;
    }).join("");
    const text = `${Number.isInteger(value) ? value : value.toFixed(1)} out of ${max}`;
    return `<span class="${classNames("rating rating-display", sizeClass, className)}"${toAttributes({ role: "img", "aria-label": `${label}: ${text}`, ...attributes })}>${stars}</span>`;
  }
  const prefix = idPrefix ?? `${name}-rating`;
  // Read-only radios are disabled (so they cannot change) and therefore not submitted:
  // they get a display-only name and a hidden input carries the value.
  const radioName = readonly ? `${name}-display` : name;
  const stars = Array.from({ length: max }, (_, i) => i + 1)
    .map((n) => {
      const id = `${prefix}-${n}`;
      const attrs = toAttributes({
        type: "radio",
        name: radioName,
        id,
        value: n,
        checked: Math.round(value) === n,
        disabled: readonly
      });
      return `<input${attrs} /><label for="${escapeHtml(id)}" title="${escapeHtml(starLabel(n))}"><span class="visually-hidden">${escapeHtml(starLabel(n))}</span></label>`;
    })
    .join("");
  const hidden = readonly
    ? `<input${toAttributes({ type: "hidden", name, value: Math.round(value) || undefined })} />`
    : "";
  return `<div class="${classNames("rating", readonly && "rating-readonly", sizeClass, className)}"${toAttributes({ role: "radiogroup", "aria-label": label, "aria-readonly": readonly ? "true" : undefined, ...attributes })}>${stars}${hidden}</div>`;
}

export const rating = Rating;
