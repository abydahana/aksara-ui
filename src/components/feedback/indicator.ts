import { classNames, escapeHtml } from "../utils";

export interface IndicatorProps {
  /** The element that carries the indicator (avatar, icon button, tab). */
  children: string;
  /** Count or short text; omit (or `dot: true`) for a plain dot. */
  content?: string | number;
  /** Counts above this show as `max+`. Default 99. */
  max?: number;
  dot?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
  placement?: "top-end" | "bottom-end" | "top-start";
  /** Sit inside the corner instead of straddling it (for rounded-square targets). */
  inset?: boolean;
  pulse?: boolean;
  /** Screen-reader text, e.g. "3 unread messages". */
  label?: string;
  className?: string;
}

/** Corner badge / dot on another element: unread counts, online state, new items. */
export function Indicator(props: IndicatorProps): string {
  const {
    children,
    content,
    max = 99,
    variant,
    placement = "top-end",
    inset = false,
    pulse = false,
    label,
    className = ""
  } = props;
  const isDot = props.dot ?? (content === undefined || content === "");
  const text = typeof content === "number" && content > max ? `${max}+` : content === undefined ? "" : String(content);
  const itemClasses = classNames(
    "indicator-item",
    isDot && "indicator-dot",
    variant && `indicator-${variant}`,
    placement === "bottom-end" && "indicator-bottom",
    placement === "top-start" && "indicator-start",
    inset && "indicator-inset",
    pulse && "indicator-pulse"
  );
  const sr = label ? `<span class="visually-hidden">${escapeHtml(label)}</span>` : "";
  return `<span class="${classNames("indicator", className)}">${children}<span class="${itemClasses}" aria-hidden="true">${isDot ? "" : escapeHtml(text)}</span>${sr}</span>`;
}

export const indicator = Indicator;
