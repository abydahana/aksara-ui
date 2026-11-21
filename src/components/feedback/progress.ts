import { classNames, escapeHtml, safeCssLength, toAttributes } from "../utils";

export interface ProgressProps {
  value: number;
  min?: number;
  max?: number;
  /** Plain-text label (escaped). */
  label?: string;
  /** Raw HTML label; takes precedence over `label`. */
  labelHtml?: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark";
  striped?: boolean;
  animated?: boolean;
  height?: string | number;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Progress(props: ProgressProps): string {
  const {
    value,
    min = 0,
    max = 100,
    label,
    labelHtml,
    variant = "primary",
    striped = false,
    animated = false,
    height,
    className = "",
    attributes
  } = props;

  const ratio = max === min ? 0 : ((Number(value) - min) / (max - min)) * 100;
  const percentage = Number.isFinite(ratio) ? Math.min(100, Math.max(0, ratio)) : 0;

  const barClasses = classNames(
    "progress-bar",
    variant && `bg-${variant}`,
    striped && "progress-striped",
    animated && "progress-animated"
  );

  const safeHeight = height ? safeCssLength(height, "") : "";
  const containerStyle = safeHeight ? ` style="height: ${safeHeight};"` : "";

  const baseAttrs = toAttributes({
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max,
    ...attributes
  });

  return `
    <div class="${classNames("progress", className)}"${containerStyle}>
      <div class="${barClasses}" style="width: ${percentage}%;"${baseAttrs}>
        ${labelHtml ?? escapeHtml(label ?? "")}
      </div>
    </div>
  `.trim();
}

export const progress = Progress;
