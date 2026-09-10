import { classNames, escapeHtml, toAttributes } from "../utils";

// ── SettingsGroup ─────────────────────────────────────────────────────────────

export interface SettingsGroupProps {
  children?: string;
  /** Optional uppercase heading rendered above the group */
  title?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * Container for a group of settings-style rows.
 * Renders as `.list-group` with an optional uppercase section heading above.
 */
export function SettingsGroup(props: SettingsGroupProps = {}): string {
  const { children = "", title = "", className = "", attributes } = props;

  const baseAttrs = toAttributes(attributes);
  const groupHtml = `<div class="${classNames("list-group", className)}"${baseAttrs}>${children}</div>`;

  if (!title) return groupHtml.trim();

  return `<div><p class="text-xs font-800 uppercase tracking-wider text-subtle mb-2 px-1">${escapeHtml(title)}</p><div class="${classNames("list-group", className)}">${children}</div></div>`.trim();
}

export const settingsGroup = SettingsGroup;

// ── SettingsItem ──────────────────────────────────────────────────────────────

export interface SettingsItemProps {
  /** Main label text */
  label: string;
  /** Optional supporting description rendered below the label */
  description?: string;
  /** Icon HTML string, e.g. `<span class="mdi mdi-lock-outline">` */
  icon?: string;
  /** Value text shown on the right */
  value?: string;
  /** Arbitrary trailing HTML on the right, e.g. a switch or select */
  trailing?: string;
  /** Renders the item as `<a href>` */
  href?: string;
  /** Renders the item as `<button>` (when no href) */
  action?: boolean;
  /** Shows a `›` chevron on the trailing edge */
  showChevron?: boolean;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

/**
 * A settings-style row using `.list-group-item` with an inner flex layout.
 * Composable as a link, button, or static element.
 *
 * @example Link row
 * SettingsItem({ label: "Private profile", icon: '<span class="mdi mdi-lock-outline">', value: "Public", showChevron: true, href: "#privacy" })
 *
 * @example Toggle row
 * SettingsItem({ label: "Floods & Inundations", icon: '<span class="mdi mdi-water-alert">', trailing: '<input type="checkbox" role="switch" class="form-check-input" checked />' })
 *
 * @example Description row
 * SettingsItem({ label: "Verified reports only", description: "Only display verified observations.", trailing: '<input type="checkbox" role="switch" class="form-check-input" />' })
 */
export function SettingsItem(props: SettingsItemProps): string {
  const {
    label,
    description = "",
    icon = "",
    value = "",
    trailing = "",
    href,
    action = false,
    showChevron = false,
    active = false,
    disabled = false,
    className = "",
    attributes
  } = props;

  const isLink = Boolean(href);
  const Tag = isLink ? "a" : action ? "button" : "div";

  const classes = classNames(
    "list-group-item",
    (action || isLink) && "list-group-item-action",
    active && "active",
    disabled && "disabled",
    className
  );

  const baseAttrs = toAttributes({
    href,
    type: Tag === "button" ? "button" : undefined,
    disabled: Tag === "button" && disabled ? true : undefined,
    "aria-current": active ? "true" : undefined,
    "aria-disabled": disabled ? "true" : undefined,
    ...attributes
  });

  const iconHtml = icon
    ? `<span class="flex items-center justify-center w-7 h-7 shrink-0 text-lg" aria-hidden="true">${icon}</span>`
    : "";

  const labelBlock = description
    ? `<span class="flex-1 min-w-0"><span class="font-600 block">${escapeHtml(label)}</span><span class="text-subtle text-sm block mt-1">${escapeHtml(description)}</span></span>`
    : `<span class="flex-1 font-600">${escapeHtml(label)}</span>`;

  const valueHtml = value ? `<span class="text-subtle text-sm">${escapeHtml(value)}</span>` : "";

  const chevronHtml = showChevron
    ? `<span class="text-subtle opacity-50 text-sm ms-1" aria-hidden="true">&#8250;</span>`
    : "";

  return `<${Tag} class="${classes}"${baseAttrs}><div class="flex items-center gap-3">${iconHtml}${labelBlock}${valueHtml}${trailing}${chevronHtml}</div></${Tag}>`.trim();
}

export const settingsItem = SettingsItem;
