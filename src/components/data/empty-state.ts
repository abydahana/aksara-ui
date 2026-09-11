import { classNames, escapeHtml, toAttributes } from "../utils";

export interface EmptyStateProps {
  icon?: string;
  iconVariant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "muted" | string;
  iconSize?: "sm" | "md" | "lg" | string;
  title: string;
  description?: string;
  actions?: string;
  centered?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

export function EmptyState(props: EmptyStateProps): string {
  const {
    icon,
    iconVariant = "muted",
    iconSize = "md",
    title,
    description,
    actions,
    centered = true,
    className = "",
    attributes
  } = props;

  const containerClasses = classNames("empty-state", centered && "text-center", "py-5 px-4 my-3", className);

  const iconBubbleSizes: Record<string, { box: string; icon: string }> = {
    sm: { box: "width: 3.5rem; height: 3.5rem;", icon: "font-size: 1.75rem;" },
    md: { box: "width: 4.5rem; height: 4.5rem;", icon: "font-size: 2.25rem;" },
    lg: { box: "width: 5.5rem; height: 5.5rem;", icon: "font-size: 3rem;" }
  };

  const bubbleSize = iconBubbleSizes[iconSize] ?? iconBubbleSizes.md;

  const iconHtml = icon
    ? `
      <div class="empty-state-icon-wrap mx-auto mb-3 d-inline-flex align-items-center justify-content-center rounded-circle bg-subtle" style="${bubbleSize.box}">
        <i class="mdi ${escapeHtml(icon)} text-${escapeHtml(iconVariant)}" style="${bubbleSize.icon}" aria-hidden="true"></i>
      </div>
    `.trim()
    : "";

  const titleHtml = `<h3 class="empty-state-title fs-5 font-bold mb-2 text-body">${escapeHtml(title)}</h3>`;
  const descHtml = description
    ? `<p class="empty-state-desc text-subtle text-sm max-w-md mx-auto mb-4 leading-relaxed">${escapeHtml(description)}</p>`
    : "";
  const actionsHtml = actions
    ? `<div class="empty-state-actions d-flex align-items-center justify-content-center gap-2 flex-wrap">${actions}</div>`
    : "";

  const baseAttrs = toAttributes(attributes);

  return `
    <div class="${containerClasses}"${baseAttrs}>
      ${iconHtml}
      ${titleHtml}
      ${descHtml}
      ${actionsHtml}
    </div>
  `.trim();
}

export const emptyState = EmptyState;
