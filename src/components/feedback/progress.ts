import { classNames, toAttributes } from "../utils";

export interface ProgressProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;
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
    variant = "primary",
    striped = false,
    animated = false,
    height,
    className = "",
    attributes
  } = props;

  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  const barClasses = classNames(
    "progress-bar",
    variant && `bg-${variant}`,
    striped && "progress-striped",
    animated && "progress-animated"
  );

  const containerStyle = height ? ` style="height: ${typeof height === "number" ? `${height}px` : height};"` : "";

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
        ${label ?? ""}
      </div>
    </div>
  `.trim();
}

export const progress = Progress;
