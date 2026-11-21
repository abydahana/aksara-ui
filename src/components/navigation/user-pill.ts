import { classNames, escapeHtml, toAttributes } from "../utils";
import { Avatar } from "../data/avatar";

export interface UserPillProps {
  avatar?: string;
  initials?: string;
  name: string;
  handle?: string;
  subtitle?: string;
  menuHtml?: string;
  className?: string;
  triggerClassName?: string;
  attributes?: Record<string, unknown>;
}

export function UserPill(props: UserPillProps): string {
  const {
    avatar,
    initials,
    name,
    handle,
    subtitle,
    menuHtml = "",
    className = "",
    triggerClassName = "",
    attributes
  } = props;

  const containerClasses = classNames("user-pill position-relative mt-auto", className);
  const triggerClasses = classNames("user-pill-trigger w-100 text-start", triggerClassName);

  const avatarHtml = Avatar({
    src: avatar,
    alt: name,
    initials,
    size: "md",
    shape: "circle",
    className: "user-pill-avatar"
  });

  const subText = subtitle || (handle ? `@${handle.replace(/^@/, "")}` : "");

  const menuContainer = menuHtml ? `<div class="user-pill-menu d-none" data-user-menu>${menuHtml}</div>` : "";

  const baseAttrs = toAttributes(attributes);

  return `
    <div class="${containerClasses}"${baseAttrs}>
      ${menuContainer}
      <button type="button" class="${triggerClasses}" data-user-menu-trigger aria-haspopup="true" aria-expanded="false">
        ${avatarHtml}
        <div class="user-pill-meta flex-1 min-w-0">
          <div class="user-pill-name fw-bold truncate">${escapeHtml(name)}</div>
          ${subText ? `<div class="user-pill-handle text-subtle truncate">${escapeHtml(subText)}</div>` : ""}
        </div>
        <i class="mdi mdi-dots-horizontal user-pill-dots" aria-hidden="true"></i>
      </button>
    </div>
  `.trim();
}

export const userPill = UserPill;
