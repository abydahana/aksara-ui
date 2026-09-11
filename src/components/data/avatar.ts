import { classNames, escapeHtml, toAttributes } from "../utils";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type AvatarShape = "circle" | "rounded" | "square";
export type AvatarStatus = "online" | "offline" | "busy" | "away";

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  width?: string | number;
  height?: string | number;
  shape?: AvatarShape;
  status?: AvatarStatus | boolean;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
  className?: string;
  attributes?: Record<string, unknown>;
}

export function Avatar(props: AvatarProps = {}): string {
  const {
    src,
    alt = "Avatar",
    initials,
    size,
    width,
    height,
    shape = "circle",
    status,
    variant = "primary",
    className = "",
    attributes = {}
  } = props;

  const shapeClass = shape === "circle" ? "rounded-full" : shape === "rounded" ? "rounded-8" : "rounded-none";

  // Use size if provided, otherwise default to "md" if no explicit width/height
  const effectiveSize = size || (!width && !height ? "md" : undefined);
  const sizeClass = effectiveSize ? `avatar-${effectiveSize}` : "";

  const classes = classNames(
    "avatar",
    sizeClass,
    shapeClass,
    !src &&
      !className.includes("bg-") &&
      !className.includes("feed-card-avatar") &&
      `avatar-${variant} bg-${variant}/15 text-${variant}`,
    "position-relative inline-flex items-center justify-center font-bold select-none shrink-0",
    className
  );

  const customStyles: string[] = [];
  if (width !== undefined) {
    const w = typeof width === "number" ? `${width}px` : width;
    customStyles.push(`width:${w}`, `min-width:${w}`);
  }
  if (height !== undefined) {
    const h = typeof height === "number" ? `${height}px` : height;
    customStyles.push(`height:${h}`, `min-height:${h}`);
  }

  const attrs = { ...attributes };
  if (customStyles.length > 0) {
    const existingStyle = (attrs.style as string) || "";
    attrs.style = existingStyle
      ? `${existingStyle.replace(/;?$/, ";")} ${customStyles.join(";")};`
      : `${customStyles.join(";")};`;
  }

  const baseAttrs = toAttributes(attrs);

  let contentHtml: string;
  if (src) {
    contentHtml = `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" class="avatar-img w-full h-full object-cover block" loading="lazy" />`;
  } else if (initials) {
    contentHtml = `<span class="avatar-initials uppercase text-center leading-none">${escapeHtml(initials)}</span>`;
  } else {
    // Default fallback icon
    contentHtml = `<span class="avatar-fallback mdi mdi-account opacity-75"></span>`;
  }

  let statusHtml = "";
  if (status) {
    let statusVariant = "bg-success";
    if (status === "offline") statusVariant = "bg-subtle";
    else if (status === "busy") statusVariant = "bg-danger";
    else if (status === "away") statusVariant = "bg-warning";

    const statusKey = typeof status === "string" ? status : "online";
    statusHtml = `<span class="avatar-status position-absolute rounded-full ${statusVariant} border-2 border-body" data-status="${statusKey}" aria-hidden="true"></span>`;
  }

  return `
    <span class="${classes}"${baseAttrs}>
      ${contentHtml}
      ${statusHtml}
    </span>
  `.trim();
}

export const avatar = Avatar;

export interface AvatarGroupProps {
  children?: string;
  avatars?: AvatarProps[];
  max?: number;
  size?: AvatarSize;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function AvatarGroup(props: AvatarGroupProps = {}): string {
  const { children, avatars = [], max, size = "md", className = "", attributes } = props;

  const classes = classNames("avatar-group inline-flex items-center", className);
  const baseAttrs = toAttributes(attributes);

  if (children) {
    return `<div class="${classes}"${baseAttrs}>${children}</div>`.trim();
  }

  const count = avatars.length;
  const maxDisplay = max && max > 0 && count > max ? max : count;
  const displayed = avatars.slice(0, maxDisplay);
  const extraCount = count - maxDisplay;

  const renderedAvatars = displayed.map((item) => Avatar({ ...item, size: item.size ?? size })).join("\n");

  const extraPill =
    extraCount > 0
      ? `
        <span class="avatar avatar-${size} rounded-full bg-subtle text-subtle text-xs font-bold inline-flex items-center justify-center border-2 border-body">
          +${extraCount}
        </span>
      `.trim()
      : "";

  return `
    <div class="${classes}"${baseAttrs}>
      ${renderedAvatars}
      ${extraPill}
    </div>
  `.trim();
}

export const avatarGroup = AvatarGroup;
