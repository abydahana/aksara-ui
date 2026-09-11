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

  const containerClasses = classNames("sidebar-user-pill-wrap position-relative mt-auto", className);
  const triggerClasses = classNames("sidebar-user-pill w-100 text-start", triggerClassName);

  const avatarHtml = Avatar({
    src: avatar,
    alt: name,
    initials,
    size: "md",
    shape: "circle",
    className: "sidebar-user-avatar"
  });

  const subText = subtitle || (handle ? `@${handle.replace(/^@/, "")}` : "");

  const menuContainer = menuHtml ? `<div class="sidebar-user-menu d-none" data-user-menu>${menuHtml}</div>` : "";

  const baseAttrs = toAttributes(attributes);

  return `
    <div class="${containerClasses}"${baseAttrs}>
      ${menuContainer}
      <button type="button" class="${triggerClasses}" data-user-menu-trigger aria-haspopup="true" aria-expanded="false">
        ${avatarHtml}
        <div class="sidebar-user-meta flex-1 min-w-0">
          <div class="sidebar-user-name fw-bold text-truncate">${escapeHtml(name)}</div>
          ${subText ? `<div class="sidebar-user-handle text-muted text-truncate">${escapeHtml(subText)}</div>` : ""}
        </div>
        <i class="mdi mdi-dots-horizontal sidebar-user-dots" aria-hidden="true"></i>
      </button>
    </div>
  `.trim();
}

export const userPill = UserPill;
