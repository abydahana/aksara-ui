import { classNames, escapeHtml, toAttributes } from "../utils";

export interface CheckCardProps {
  title: string;
  description?: string;
  name: string;
  value: string | number;
  id?: string;
  /** "radio" (default) or "checkbox". */
  type?: "radio" | "checkbox";
  checked?: boolean;
  disabled?: boolean;
  /** Hide the radio/checkbox and rely on the card's selected border. */
  hideInput?: boolean;
  /** Extra HTML after the text (a price, a badge, an icon). */
  aside?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** A selectable card: a radio or checkbox inside a bordered `.form-check-card` label. */
export function CheckCard(props: CheckCardProps): string {
  const {
    title,
    description,
    name,
    value,
    id,
    type = "radio",
    checked = false,
    disabled = false,
    hideInput = false,
    aside = "",
    className = "",
    attributes
  } = props;
  const inputAttrs = toAttributes({ type, name, value, id, checked, disabled, ...attributes });
  const text = description ? `<span class="form-check-card-text">${escapeHtml(description)}</span>` : "";
  return `<label class="${classNames("form-check-card", hideInput && "form-check-card-hidden", className)}"><input class="form-check-input"${inputAttrs} /><span class="form-check-card-body"><span class="form-check-card-title">${escapeHtml(title)}</span>${text}</span>${aside}</label>`;
}

export const checkCard = CheckCard;
