import { classNames, escapeHtml, toAttributes } from "../utils";

export interface BentoGridProps {
  children?: string;
  cols?: 1 | 2 | 3 | 4;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function BentoGrid(props: BentoGridProps = {}): string {
  const { children = "", cols, className = "", attributes } = props;
  const gridClass = cols ? `bento-grid-${cols}` : "bento-grid";
  const classes = classNames(gridClass, className);
  const baseAttrs = toAttributes(attributes);
  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const bentoGrid = BentoGrid;

export interface BentoCardProps {
  children?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
  featured?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function BentoCard(props: BentoCardProps = {}): string {
  const { children = "", colSpan, rowSpan, featured = false, className = "", attributes } = props;
  const classes = classNames(
    "bento-card",
    colSpan && `bento-col-${colSpan}`,
    rowSpan && `bento-row-${rowSpan}`,
    featured && "bento-featured",
    className
  );
  const baseAttrs = toAttributes(attributes);
  return `<article class="${classes}"${baseAttrs}>${children}</article>`.trim();
}

export const bentoCard = BentoCard;

export interface BentoHeaderProps {
  children?: string;
  className?: string;
}

export function BentoHeader(props: BentoHeaderProps = {}): string {
  const { children = "", className = "" } = props;
  return `<div class="${classNames("bento-header", className)}">${children}</div>`.trim();
}

export const bentoHeader = BentoHeader;

export interface BentoTitleProps {
  title: string;
  subtitle?: string;
  as?: "h2" | "h3" | "h4" | "h5";
  className?: string;
}

export function BentoTitle(props: BentoTitleProps): string {
  const { title, subtitle, as = "h3", className = "" } = props;
  const safeTitle = escapeHtml(title);
  const titleHtml = `<${as} class="${classNames("bento-title", className)}">${safeTitle}</${as}>`;
  if (!subtitle) return titleHtml;
  return `<div>${titleHtml}<p class="bento-subtitle">${escapeHtml(subtitle)}</p></div>`.trim();
}

export const bentoTitle = BentoTitle;

export interface BentoBodyProps {
  children?: string;
  className?: string;
}

export function BentoBody(props: BentoBodyProps = {}): string {
  const { children = "", className = "" } = props;
  return `<div class="${classNames("bento-body", className)}">${children}</div>`.trim();
}

export const bentoBody = BentoBody;

export interface BentoFooterProps {
  children?: string;
  className?: string;
}

export function BentoFooter(props: BentoFooterProps = {}): string {
  const { children = "", className = "" } = props;
  return `<div class="${classNames("bento-footer", className)}">${children}</div>`.trim();
}

export const bentoFooter = BentoFooter;

export interface BentoVisualProps {
  children?: string;
  className?: string;
}

export function BentoVisual(props: BentoVisualProps = {}): string {
  const { children = "", className = "" } = props;
  return `<div class="${classNames("bento-visual", className)}">${children}</div>`.trim();
}

export const bentoVisual = BentoVisual;
