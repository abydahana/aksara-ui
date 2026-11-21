import { classNames, escapeHtml, pickTag, toAttributes } from "../utils";

export interface CardProps {
  children?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Card(props: CardProps = {}): string {
  const { children = "", className = "", attributes } = props;
  const classes = classNames("card", className);
  const baseAttrs = toAttributes(attributes);
  return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
}

export const card = Card;

export interface CardHeaderProps {
  children?: string;
  className?: string;
}

export function CardHeader(props: CardHeaderProps = {}): string {
  const { children = "", className = "" } = props;
  return `<div class="${classNames("card-header", className)}">${children}</div>`.trim();
}

export const cardHeader = CardHeader;

export interface CardBodyProps {
  children?: string;
  className?: string;
}

export function CardBody(props: CardBodyProps = {}): string {
  const { children = "", className = "" } = props;
  return `<div class="${classNames("card-body", className)}">${children}</div>`.trim();
}

export const cardBody = CardBody;

export interface CardFooterProps {
  children?: string;
  className?: string;
}

export function CardFooter(props: CardFooterProps = {}): string {
  const { children = "", className = "" } = props;
  return `<div class="${classNames("card-footer", className)}">${children}</div>`.trim();
}

export const cardFooter = CardFooter;

export interface CardTitleProps {
  title: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export function CardTitle(props: CardTitleProps): string {
  const { title, as, className = "" } = props;
  const Tag = pickTag(as, ["h1", "h2", "h3", "h4", "h5", "h6"] as const, "h5");
  return `<${Tag} class="${classNames("card-title", className)}">${escapeHtml(title)}</${Tag}>`.trim();
}

export const cardTitle = CardTitle;

export interface CardSubtitleProps {
  subtitle: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

export function CardSubtitle(props: CardSubtitleProps): string {
  const { subtitle, as, className = "" } = props;
  const Tag = pickTag(as, ["h1", "h2", "h3", "h4", "h5", "h6", "p"] as const, "h6");
  const classes = classNames("card-subtitle mb-2 text-subtle", className);
  return `<${Tag} class="${classes}">${escapeHtml(subtitle)}</${Tag}>`.trim();
}

export const cardSubtitle = CardSubtitle;
