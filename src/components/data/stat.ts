import { classNames, escapeHtml, iconClasses, toAttributes } from "../utils";

export interface StatProps {
  label: string;
  value: string | number;
  /** Small text after the value (`"%"`, `"ms"`). */
  unit?: string;
  /** Change vs. the previous period, e.g. `"+12.4%"`. */
  delta?: string;
  /** Direction of `delta`: colors it green (`up`) / red (`down`). Inferred from a leading +/− when omitted. */
  trend?: "up" | "down" | "neutral";
  /** Flip the colors when going down is good (latency, churn). */
  invertTrend?: boolean;
  /** Text after the delta ("vs last month"). */
  caption?: string;
  /** Icon class (`"mdi-cash"`) shown in a tile at the top-end. */
  icon?: string;
  iconVariant?: string;
  /** No frame (for use inside cards). Inside a `StatGroup` the frame is dropped automatically. */
  plain?: boolean;
  /** `sm` for a smaller value (dense dashboards, long numbers). */
  size?: "sm" | "md";
  /** Extra HTML under the stat (sparkline, progress). */
  children?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** KPI block: label, big value, delta badge and caption. */
export function Stat(props: StatProps): string {
  const {
    label,
    value,
    unit,
    delta,
    caption,
    icon,
    iconVariant,
    plain = false,
    size = "md",
    invertTrend = false,
    children = "",
    className = "",
    attributes
  } = props;
  // Inferred from the sign: "+3%" up, "-3%" / "−3%" down, "0%" / "±0" / unsigned neutral.
  const sign = delta?.trim().charAt(0) ?? "";
  const isZero = delta !== undefined && /^[+±−-]?\s*0+([.,]0+)?\D*$/.test(delta.trim());
  const trend =
    props.trend ??
    (!delta || isZero || sign === "±"
      ? "neutral"
      : sign === "-" || sign === "−"
        ? "down"
        : sign === "+"
          ? "up"
          : "neutral");
  const good = trend === "neutral" ? null : (trend === "up") !== invertTrend;
  const arrow = trend === "up" ? "mdi-arrow-up" : trend === "down" ? "mdi-arrow-down" : "";
  const deltaHtml = delta
    ? `<span class="${classNames("stat-delta", good === true && "stat-delta-up", good === false && "stat-delta-down")}">${arrow ? `<span class="mdi ${arrow}" aria-hidden="true"></span>` : ""}${escapeHtml(delta)}</span>`
    : "";
  const meta =
    deltaHtml || caption
      ? `<div class="stat-meta">${deltaHtml}${caption ? `<span>${escapeHtml(caption)}</span>` : ""}</div>`
      : "";
  const iconHtml = icon
    ? `<span class="${classNames("icon-tile icon-tile-sm", iconVariant && `icon-tile-${iconVariant}`)}" aria-hidden="true"><span class="${escapeHtml(iconClasses(icon))}"></span></span>`
    : "";
  return `<div class="${classNames("stat", plain && "stat-plain", className)}"${toAttributes(attributes)}>
  <div class="stat-header"><span class="stat-label">${escapeHtml(label)}</span>${iconHtml}</div>
  <div class="${classNames("stat-value", size === "sm" && "stat-value-sm")}">${escapeHtml(value)}${unit ? `<span class="stat-unit">${escapeHtml(unit)}</span>` : ""}</div>
  ${meta}${children}
</div>`;
}

export interface StatGroupProps {
  /** Stats to render; the group's CSS drops their individual frames. */
  items?: StatProps[];
  children?: string;
  className?: string;
}

/** Stats sharing one frame with hairline dividers; wraps responsively. */
export function StatGroup(props: StatGroupProps = {}): string {
  const { items = [], children = "", className = "" } = props;
  return `<div class="${classNames("stat-group", className)}">${items.map((item) => Stat(item)).join("")}${children}</div>`;
}

export const stat = Stat;
export const statGroup = StatGroup;
