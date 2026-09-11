import { classNames, escapeHtml, toAttributes } from "../utils";
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
    className = "",
    attributes
  } = props;

  const containerClasses = classNames(
    "user-item d-flex align-items-center justify-content-between p-3 border-bottom border-subtle",
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

  const subtitleText = subtitle || (handle ? `@${handle.replace(/^@/, "")}` : "");
  const subtitleHtml = subtitleText
    ? `<div class="user-item-subtitle text-subtle text-sm text-truncate mt-0.5">${escapeHtml(subtitleText)}</div>`
    : "";

  const contentCol = `
    <div class="user-item-info flex-1 min-w-0">
      <div class="d-flex align-items-center">
        <span class="user-item-name font-bold text-sm text-truncate text-body">${escapeHtml(name)}</span>
        ${verifiedBadge}
      </div>
      ${subtitleHtml}
    </div>
  `.trim();

  const leftPart = href
    ? `
      <a href="${escapeHtml(href)}" data-link class="d-flex align-items-center gap-3 text-decoration-none flex-1 min-w-0">
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
