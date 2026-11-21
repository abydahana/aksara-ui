import { classNames, escapeHtml, parseAttributeString, toAttributes } from "../utils";
import { Avatar } from "./avatar";
import { Badge, type BadgeVariant } from "../feedback/badge";
import { Button } from "../buttons/button";
import { MediaGrid } from "./media-grid";

export interface QuoteAuthor {
  name: string;
  handle?: string;
  photo?: string;
  initials?: string;
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
  media?: string[];
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

  const authorUsername = (author.handle || "@user").replace(/^@/, "");
  const authorInitials = (author.initials || author.name || authorUsername || "U").slice(0, 1).toUpperCase();

  const baseClasses = classNames(
    "quote-card p-3 rounded-xl border border-subtle bg-surface mt-2 transition d-flex flex-column gap-2",
    isPreview ? "quote-preview" : "cursor-pointer hover:bg-[var(--aksara-bg-subtle)]",
    className
  );

  const baseAttrs = toAttributes({
    ...parseAttributeString(interactiveAttrs),
    ...interactiveAttributes,
    ...attributes
  });

  const mediaList = media.filter((url): url is string => Boolean(url) && typeof url === "string" && mediaFilter(url));

  const mediaHtml =
    mediaList.length > 0
      ? `<div class="quote-media rounded-lg overflow-hidden border border-subtle">
        ${MediaGrid({
          items: mediaList.map((src) => ({ src }))
        })}
      </div>`
      : "";

  return `
    <div class="${baseClasses}"${baseAttrs}>
      <!-- Header row: Author & Actions -->
      <div class="quote-header d-flex align-items-center gap-2">
        ${Avatar({
          src: author.photo,
          initials: authorInitials,
          size: "md",
          shape: "circle",
          className: "quote-avatar shrink-0",
          alt: author.name
        })}
        <div class="quote-author-info d-flex flex-column justify-content-center min-w-0 flex-1">
          <div class="d-inline-flex align-items-center gap-1 min-w-0">
            <span class="fw-bold text-sm text-body truncate whitespace-nowrap leading-tight">${escapeHtml(author.name)}</span>
            ${author.verified ? `<i class="mdi mdi-check-decagram text-primary text-sm shrink-0" title="Verified"></i>` : ""}
          </div>
          <div class="d-flex align-items-center gap-1 text-sm text-subtle truncate whitespace-nowrap min-w-0 leading-tight mt-1">
            ${author.handle ? `<span class="truncate whitespace-nowrap">${escapeHtml(author.handle)}</span>` : ""}
            ${author.handle && (timeAgo || timestamp) ? `<span class="text-subtle shrink-0">&bull;</span>` : ""}
            ${
              timeAgo || timestamp
                ? `<time class="text-subtle shrink-0 whitespace-nowrap" ${timestamp ? `datetime="${escapeHtml(timestamp)}"` : ""}>${escapeHtml(timeAgo || "")}</time>`
                : ""
            }
          </div>
        </div>

        <div class="d-flex align-items-center gap-2 shrink-0 ms-auto">
          ${
            category
              ? Badge({
                  variant: category.variant || "primary",
                  soft: true,
                  pill: true,
                  className: "text-xs px-2 py-1",
                  children: `${category.icon ? `<i class="mdi ${escapeHtml(category.icon)} me-1"></i>` : ""}${escapeHtml(category.label)}`
                })
              : ""
          }
          ${
            showRemoveBtn
              ? Button({
                  type: "button",
                  ghost: true,
                  size: "sm",
                  className: "quote-card-remove rounded-circle text-subtle hover:text-danger p-1",
                  attributes: {
                    title: onRemoveTitle,
                    "aria-label": onRemoveTitle,
                    "data-quote-card-remove": ""
                  },
                  children: '<i class="mdi mdi-close"></i>'
                })
              : ""
          }
        </div>
      </div>

      <!-- Main body: Content Text & Media Preview -->
      ${
        content
          ? `<div class="quote-body font-normal text-sm text-body leading-relaxed break-words">${escapeHtml(content)}</div>`
          : children || ""
      }
      ${mediaHtml}
    </div>
  `.trim();
}

export const quoteCard = QuoteCard;
