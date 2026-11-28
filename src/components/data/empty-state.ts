import { classNames, escapeHtml, iconClasses, toAttributes } from "../utils";

export type EmptyStateIconVariant =
  "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "muted" | (string & {});

export interface EmptyStateIconProps {
  /** Icon classes, e.g. `"mdi-folder-plus-outline"`. */
  icon: string;
  /** Text color of the bubble; `"muted"` maps to `text-subtle`. Defaults to the stylesheet's primary. */
  variant?: EmptyStateIconVariant;
  /** `sm` and `lg` add `.empty-state-icon-wrap-sm` / `-lg`; `md` is the default size. */
  size?: "sm" | "md" | "lg";
  /** Extra classes on `.empty-state-icon-wrap` (e.g. `"shadow-none"`). */
  className?: string;
}

/** The round `.empty-state-icon-wrap` bubble on its own. */
export function EmptyStateIcon(props: EmptyStateIconProps): string {
  const { icon, variant, size, className = "" } = props;
  const classes = classNames(
    "empty-state-icon-wrap",
    (size === "sm" || size === "lg") && `empty-state-icon-wrap-${size}`,
    variant && `text-${variant === "muted" ? "subtle" : variant}`,
    className
  );
  return `<div class="${classes}"><span class="${classNames(iconClasses(icon))}" aria-hidden="true"></span></div>`;
}

export const emptyStateIcon = EmptyStateIcon;

export interface EmptyStateProps {
  icon?: string;
  iconVariant?: EmptyStateIconVariant;
  iconSize?: "sm" | "md" | "lg";
  /** Extra classes on the icon bubble (e.g. `"shadow-none"`). */
  iconClassName?: string;
  /** Custom HTML (an avatar stack, an illustration) rendered instead of the icon bubble. */
  media?: string;
  title?: string;
  description?: string;
  actions?: string;
  centered?: boolean;
  /**
   * Only the semantic `.empty-state-*` classes, styled by the stylesheet: no spacing or typography
   * utilities, so `className`, `titleClassName`, etc. are free to set their own.
   */
  bare?: boolean;
  /** Tighter padding and smaller text for panels and sidebars. Implies `bare`. */
  compact?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
  actionsClassName?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function EmptyState(props: EmptyStateProps): string {
  const {
    icon,
    iconVariant,
    iconSize,
    iconClassName = "",
    media,
    title,
    description,
    actions,
    centered = true,
    compact = false,
    titleClassName = "",
    descriptionClassName = "",
    actionsClassName = "",
    className = "",
    attributes
  } = props;
  const bare = props.bare || compact;

  const containerClasses = bare
    ? classNames("empty-state", !centered && "text-start", compact && "py-4 px-3 my-0", className)
    : classNames("empty-state", centered ? "text-center" : "text-start", "py-5 px-4 my-3", className);

  const mediaHtml =
    media ??
    (icon
      ? EmptyStateIcon({
          icon,
          size: iconSize,
          variant: iconVariant ?? (bare ? undefined : "primary"),
          className: iconClassName
        })
      : "");

  const titleHtml = title
    ? `<h3 class="${classNames(
        "empty-state-title",
        bare ? compact && "text-sm" : "text-xl fw-bold mb-2 text-body",
        titleClassName
      )}">${escapeHtml(title)}</h3>`
    : "";
  const descHtml = description
    ? `<p class="${classNames(
        "empty-state-desc",
        bare
          ? compact && "text-xs mb-0"
          : `text-subtle text-sm max-w-[28rem] ${centered ? "mx-auto " : ""}mb-4 leading-relaxed`,
        descriptionClassName
      )}">${escapeHtml(description)}</p>`
    : "";
  const actionsHtml = actions
    ? `<div class="${classNames(
        "empty-state-actions",
        bare
          ? !centered && "justify-start"
          : `d-flex align-items-center ${centered ? "justify-content-center" : "justify-content-start"} gap-2 flex-wrap`,
        actionsClassName
      )}">${actions}</div>`
    : "";

  const baseAttrs = toAttributes(attributes);

  return `
    <div class="${containerClasses}"${baseAttrs}>
      ${mediaHtml}
      ${titleHtml}
      ${descHtml}
      ${actionsHtml}
    </div>
  `.trim();
}

export const emptyState = EmptyState;
