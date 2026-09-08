import { classNames, toAttributes } from "../utils";

export interface SkeletonProps {
  children?: string;
  variant?: "text" | "circle" | "rect";
  wave?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Skeleton(props: SkeletonProps = {}): string {
  const { children = "", variant, wave = false, className = "", attributes } = props;
  const classes = classNames("skeleton", variant && `skeleton-${variant}`, wave && "skeleton-wave", className);
  const baseAttrs = toAttributes(attributes);
  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const skeleton = Skeleton;

export interface SkeletonCircleProps {
  size?: number | string;
  wave?: boolean;
  className?: string;
}

export function SkeletonCircle(props: SkeletonCircleProps = {}): string {
  const { size = "3rem", wave = false, className = "" } = props;
  const sizeStyle = typeof size === "number" ? `${size}px` : size;
  const classes = classNames("skeleton skeleton-circle", wave && "skeleton-wave", className);
  return `<div class="${classes}" style="width:${sizeStyle};height:${sizeStyle};"></div>`.trim();
}

export const skeletonCircle = SkeletonCircle;

export interface SkeletonTextProps {
  lines?: number;
  wave?: boolean;
  className?: string;
}

export function SkeletonText(props: SkeletonTextProps = {}): string {
  const { lines = 3, wave = false, className = "" } = props;
  const items: string[] = [];
  for (let i = 0; i < lines; i++) {
    const width = i === lines - 1 && lines > 1 ? "60%" : "100%";
    items.push(
      `<div class="${classNames("skeleton skeleton-text", wave && "skeleton-wave", className)}" style="width:${width};"></div>`
    );
  }
  return items.join("\n");
}

export const skeletonText = SkeletonText;
