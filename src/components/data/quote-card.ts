import { classNames, escapeHtml, parseAttributeString, toAttributes } from "../utils";
import { Avatar } from "./avatar";
import { Badge, type BadgeVariant } from "../feedback/badge";
import { MediaGrid } from "./media-grid";

export interface QuoteAuthor {
  name: string;
  handle?: string;
  photo?: string;
  initials?: string;
  /** Color of the initials avatar (`avatar-{variant}`). Default `primary`. */
  avatarVariant?: "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
  verified?: boolean;
}

export interface QuoteCategoryBadge {
  label: string;
  icon?: string;
  variant?: BadgeVariant;
}

export interface QuoteCardProps {
  author: QuoteAuthor;
  content?: string;
  timeAgo?: string;
  timestamp?: string;
  category?: QuoteCategoryBadge;
  /** Image URLs, or `{ src, alt }` objects to give each image alt text. */
  media?: Array<string | { src: string; alt?: string }>;
  isPreview?: boolean;
  showRemoveBtn?: boolean;
  onRemoveTitle?: string;
  /** Extra attributes for the card root, e.g. `{ "data-post-id": "42" }` (merged before `attributes`). */
  interactiveAttributes?: Record<string, unknown>;
  /**
   * @deprecated Use `interactiveAttributes`. A raw attribute string; it is parsed and
   * re-serialized (escaped, `on*` handlers dropped) instead of being injected verbatim.
   */
  interactiveAttrs?: string;
  /** Filters `media` URLs before rendering. Defaults to dropping empty / directory-like URLs. */
  mediaFilter?: (url: string) => boolean;
  className?: string;
  attributes?: Record<string, unknown>;
  children?: string;
}

export function QuoteCard(props: QuoteCardProps): string {
  const {
    author,
    content,
    timeAgo,
    timestamp,
    category,
    media = [],
    isPreview = false,
    showRemoveBtn = isPreview,
    onRemoveTitle = "Remove quote",
    interactiveAttributes,
    interactiveAttrs = "",
    mediaFilter = (url: string) => !url.endsWith("/"),
    className = "",
    attributes,
    children
  } = props;

  const authorUsername = (author.handle || "user").replace(/^@/, "").trim();
  // Up to two letters: the given initials, else the first letters of the first two words.
  const authorInitials = (
    author.initials ||
    (author.name || authorUsername || "U")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join("")
  )
    .slice(0, 2)
    .toUpperCase();

  const baseClasses = classNames("quote-card", isPreview && "quote-preview", className);

  const baseAttrs = toAttributes({
    ...parseAttributeString(interactiveAttrs),
    ...interactiveAttributes,
    ...attributes
  });

  const mediaList = media
    .map((entry) => (typeof entry === "string" ? { src: entry } : entry))
    .filter((entry) => Boolean(entry?.src) && typeof entry.src === "string" && mediaFilter(entry.src));
  const mediaHtml =
    mediaList.length > 0
      ? `<div class="quote-media">${MediaGrid({ items: mediaList.map((entry) => ({ src: entry.src, alt: entry.alt })) })}</div>`
      : "";

  const time =
    timeAgo || timestamp
      ? `<time${timestamp ? ` datetime="${escapeHtml(timestamp)}"` : ""}>${escapeHtml(timeAgo || timestamp || "")}</time>`
      : "";
  // Handles always show with a leading "@", like UserItem.
  const meta = [author.handle ? `<span>@${escapeHtml(authorUsername)}</span>` : "", time].filter(Boolean);

  const categoryHtml = category
    ? Badge({
        variant: category.variant || "secondary",
        soft: true,
        pill: true,
        children: `${category.icon ? `<span class="mdi ${escapeHtml(category.icon)}"></span> ` : ""}${escapeHtml(category.label)}`
      })
    : "";

  const removeHtml = showRemoveBtn
    ? `<button type="button" class="quote-card-remove btn-close" data-quote-card-remove${toAttributes({ title: onRemoveTitle, "aria-label": onRemoveTitle })}></button>`
    : "";

  return `
    <div class="${baseClasses}"${baseAttrs}>
      <div class="quote-header">
        ${Avatar({
          src: author.photo,
          initials: authorInitials,
          size: "md",
          shape: "circle",
          variant: author.avatarVariant,
          className: "quote-avatar",
          alt: author.name
        })}
        <div class="quote-author-info">
          <div class="quote-author-name"><span>${escapeHtml(author.name)}</span>${author.verified ? '<span class="mdi mdi-check-decagram text-primary" title="Verified"></span>' : ""}</div>
          ${meta.length ? `<div class="quote-author-meta">${meta.join('<span aria-hidden="true">&middot;</span>')}</div>` : ""}
        </div>
        ${categoryHtml || removeHtml ? `<div class="quote-actions">${categoryHtml}${removeHtml}</div>` : ""}
      </div>
      ${content ? `<div class="quote-body">${escapeHtml(content)}</div>` : children || ""}
      ${mediaHtml}
    </div>
  `.trim();
}

export const quoteCard = QuoteCard;
