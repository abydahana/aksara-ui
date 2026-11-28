import { classNames, escapeHtml, pickTag, toAttributes } from "../utils";

const CARD_TAGS = ["div", "article", "section", "aside", "li", "a"] as const;

export interface CardProps {
  children?: string;
  /** Root element (default `div`). Use `href` in `attributes` with `as: "a"`. */
  as?: (typeof CARD_TAGS)[number];
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Card(props: CardProps = {}): string {
  const { children = "", className = "", attributes } = props;
  const Tag = pickTag(props.as, CARD_TAGS, "div");
  const classes = classNames("card", className);
  const baseAttrs = toAttributes(attributes);
  return `<${Tag} class="${classes}"${baseAttrs}>${children}</${Tag}>`.trim();
}

export const card = Card;

const CARD_SECTION_TAGS = ["div", "header", "footer"] as const;

export interface CardHeaderProps {
  children?: string;
  /** Element (default `div`). */
  as?: (typeof CARD_SECTION_TAGS)[number];
  className?: string;
}

export function CardHeader(props: CardHeaderProps = {}): string {
  const { children = "", className = "" } = props;
  const Tag = pickTag(props.as, CARD_SECTION_TAGS, "div");
  return `<${Tag} class="${classNames("card-header", className)}">${children}</${Tag}>`.trim();
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
  /** Element (default `div`). */
  as?: (typeof CARD_SECTION_TAGS)[number];
  className?: string;
}

export function CardFooter(props: CardFooterProps = {}): string {
  const { children = "", className = "" } = props;
  const Tag = pickTag(props.as, CARD_SECTION_TAGS, "div");
  return `<${Tag} class="${classNames("card-footer", className)}">${children}</${Tag}>`.trim();
}

export const cardFooter = CardFooter;

export interface CardTitleProps {
  /** Plain-text title (escaped). */
  title?: string;
  /** Raw HTML title (e.g. a stretched link); takes precedence over `title`. Trusted content only. */
  titleHtml?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export function CardTitle(props: CardTitleProps): string {
  const { title = "", titleHtml, as, className = "" } = props;
  const Tag = pickTag(as, ["h1", "h2", "h3", "h4", "h5", "h6"] as const, "h5");
  const content = titleHtml ?? escapeHtml(title);
  return `<${Tag} class="${classNames("card-title", className)}">${content}</${Tag}>`.trim();
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
