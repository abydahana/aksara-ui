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

  const containerClasses = classNames(
    "user-item d-flex align-items-center justify-content-between px-3 py-2 border-bottom border-subtle",
    className
  );

  const avatarHtml = Avatar({
    src: avatar,
    initials,
    size: "md",
    shape: "circle",
    status,
    variant: avatarVariant,
    alt: name
  });

  const verifiedBadge = verified
    ? `<i class="mdi mdi-check-decagram text-primary ms-1" style="font-size: 1rem; vertical-align: middle;" title="Verified"></i>`
    : "";

  const cleanHandle = handle ? handle.replace(/^@/, "").trim() : "";
  const handleHtml = cleanHandle
    ? `<div class="user-item-handle text-subtle text-sm truncate">@${escapeHtml(cleanHandle)}</div>`
    : "";

  const hasDistinctSubtitle = Boolean(subtitle && (!cleanHandle || subtitle.replace(/^@/, "").trim() !== cleanHandle));
  const subtitleHtml = hasDistinctSubtitle
    ? `<div class="user-item-subtitle text-subtle ${cleanHandle ? "text-xs" : "text-sm"} truncate mt-1">${escapeHtml(subtitle!)}</div>`
    : "";

  const contentCol = `
    <div class="user-item-info flex-1 min-w-0">
      <div class="d-flex align-items-center">
        <span class="user-item-name fw-bold text-sm truncate text-body">${escapeHtml(name)}</span>
        ${verifiedBadge}
      </div>
      ${handleHtml}
      ${subtitleHtml}
    </div>
  `.trim();

  const leftPart = href
    ? `
      <a href="${escapeHtml(safeUrl(href))}" class="user-item-link d-flex align-items-center gap-3 no-underline flex-1 min-w-0"${toAttributes(linkAttributes)}>
        ${avatarHtml}
        ${contentCol}
      </a>
    `.trim()
    : `
      <div class="d-flex align-items-center gap-3 flex-1 min-w-0">
        ${avatarHtml}
        ${contentCol}
      </div>
    `.trim();

  const actionHtml = action ? `<div class="user-item-action ms-3 shrink-0">${action}</div>` : "";
  const baseAttrs = toAttributes(attributes);

  return `
    <div class="${containerClasses}"${baseAttrs}>
      ${leftPart}
      ${actionHtml}
    </div>
  `.trim();
}

export const userItem = UserItem;
