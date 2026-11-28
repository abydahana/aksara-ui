import { classNames, escapeHtml, safeUrl, toAttributes } from "../utils";
import { Avatar, type AvatarProps } from "./avatar";

export interface UserItemProps {
  avatar?: string;
  initials?: string;
  avatarVariant?: AvatarProps["variant"];
  name: string;
  handle?: string;
  subtitle?: string;
  verified?: boolean;
  status?: "online" | "offline" | "busy" | "away";
  href?: string;
  /** Trailing HTML (a badge, a button) placed at the end of the row. */
  action?: string;
  /** Extra attributes for the profile link (e.g. `{ "data-link": "" }` for a SPA router). */
  linkAttributes?: Record<string, unknown>;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function UserItem(props: UserItemProps): string {
  const {
    avatar,
    initials,
    avatarVariant,
    name,
    handle,
    subtitle,
    verified = false,
    status,
    href,
    action,
    linkAttributes,
    className = "",
    attributes
  } = props;

  const containerClasses = classNames("user-item", className);

  const avatarHtml = Avatar({
    src: avatar,
    initials,
    size: "md",
    shape: "circle",
    status,
    variant: avatarVariant,
    alt: status ? `${name}, ${status}` : name
  });

  const verifiedBadge = verified
    ? `<span class="mdi mdi-check-decagram user-item-verified" title="Verified" aria-label="Verified" role="img"></span>`
    : "";

  const cleanHandle = handle ? handle.replace(/^@/, "").trim() : "";
  const handleHtml = cleanHandle
    ? `<div class="user-item-subtitle user-item-handle truncate">@${escapeHtml(cleanHandle)}</div>`
    : "";

  const hasDistinctSubtitle = Boolean(subtitle && (!cleanHandle || subtitle.replace(/^@/, "").trim() !== cleanHandle));
  const subtitleHtml = hasDistinctSubtitle
    ? `<div class="user-item-subtitle truncate">${escapeHtml(subtitle!)}</div>`
    : "";

  const infoHtml = `
    <div class="user-item-info">
      <div class="user-item-name">${escapeHtml(name)}${verifiedBadge}</div>
      ${handleHtml}
      ${subtitleHtml}
    </div>
  `.trim();

  // With `href`, the avatar and text become one link; otherwise they sit directly in the row.
  const mainHtml = href
    ? `<a href="${escapeHtml(safeUrl(href))}" class="user-item-link"${toAttributes(linkAttributes)}>
        ${avatarHtml}
        ${infoHtml}
      </a>`
    : `${avatarHtml}
      ${infoHtml}`;

  const baseAttrs = toAttributes(attributes);

  return `
    <div class="${containerClasses}"${baseAttrs}>
      ${mainHtml}
      ${action ?? ""}
    </div>
  `.trim();
}

export const userItem = UserItem;
