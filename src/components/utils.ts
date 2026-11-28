/** `"xxl"` is a deprecated alias of `"2xl"` (the size scale everywhere else). */
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "xxl";
export type BreakpointName = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "xxl";

/** Maps the deprecated `xxl` size/breakpoint name to `2xl`. */
export function normalizeSize<T extends string>(size: T): Exclude<T, "xxl"> | "2xl" {
  return (size === "xxl" ? "2xl" : size) as Exclude<T, "xxl"> | "2xl";
}

/**
 * Escapes a value for safe interpolation into HTML text or a quoted attribute value.
 */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Joins class tokens. The result is HTML-escaped so it is always safe inside a
 * double-quoted `class="..."` attribute; ordinary class tokens (including
 * arbitrary utilities such as `w-[2.5rem]` or `bg-primary/10`) are unchanged.
 */
export function classNames(...classes: (string | undefined | null | false | 0)[]): string {
  return escapeHtml(classes.filter(Boolean).join(" ").replace(/\s+/g, " ").trim());
}

const ATTRIBUTE_NAME = /^[a-zA-Z_:][-a-zA-Z0-9_:.]*$/;

/** Attributes whose value is a URL and must go through {@link safeUrl}. */
const URL_ATTRIBUTES = new Set(["href", "src", "action", "formaction", "poster", "cite", "background", "xlink:href"]);

/**
 * Returns true when `name` is a valid, non event-handler attribute name.
 * Event-handler attributes (`on*`, case-insensitive) are always rejected.
 */
export function isSafeAttributeName(name: string): boolean {
  return ATTRIBUTE_NAME.test(name) && !/^on/i.test(name);
}

/**
 * Serializes an attribute map. Values are escaped, invalid attribute names and
 * event-handler attributes (`on*`) are dropped, and URL-bearing attributes
 * (`href`, `src`, ...) are passed through {@link safeUrl}.
 */
export function toAttributes(attributes?: Record<string, unknown>): string {
  if (!attributes) return "";
  const parts: string[] = [];

  for (const [key, value] of Object.entries(attributes)) {
    if (!isSafeAttributeName(key)) continue;
    if (value === true) {
      parts.push(key);
    } else if (value !== false && value !== null && value !== undefined) {
      const safeValue = URL_ATTRIBUTES.has(key.toLowerCase()) ? safeUrl(value) : value;
      parts.push(`${key}="${escapeHtml(safeValue)}"`);
    }
  }

  return parts.length > 0 ? ` ${parts.join(" ")}` : "";
}

const SAFE_SCHEMES = new Set(["http", "https", "mailto", "tel", "blob"]);

/**
 * Returns `url` when it is a relative URL, a fragment, or uses an allowed scheme
 * (`http:`, `https:`, `mailto:`, `tel:`, `blob:`, `data:image/*`). Anything else
 * (`javascript:`, `vbscript:`, `data:text/html`, ...) is replaced with `fallback`.
 * The result is NOT HTML-escaped; escape it (or pass it to {@link toAttributes}).
 */
export function safeUrl(url: unknown, fallback = "#"): string {
  if (url === undefined || url === null) return fallback;
  const raw = String(url).trim();
  if (!raw) return raw;

  // Browsers ignore ASCII whitespace/control characters inside the scheme
  // (e.g. "java\tscript:"), so strip them before detecting it.
  // eslint-disable-next-line no-control-regex
  const normalized = raw.replace(/[\u0000- \u007f-\u009f]/g, "").toLowerCase();
  const scheme = /^([a-z][a-z0-9+.-]*):/.exec(normalized)?.[1];

  if (!scheme) return raw;
  if (SAFE_SCHEMES.has(scheme)) return raw;
  if (scheme === "data" && /^data:image\/[a-z0-9.+-]+[;,]/.test(normalized)) return raw;
  return fallback;
}

/**
 * Returns `value` when it is a plain CSS length (`12px`, `2.5rem`, `50%`, `0`, a
 * bare number treated as px) or `fallback` otherwise. Used for inline sizes so a
 * prop can never break out of a `style` attribute.
 */
export function safeCssLength(value: unknown, fallback: string): string {
  if (typeof value === "number") return Number.isFinite(value) && value >= 0 ? `${value}px` : fallback;
  const str = String(value ?? "").trim();
  if (/^\d+(\.\d+)?$/.test(str)) return `${str}px`;
  if (/^\d*\.?\d+(px|rem|em|%|vh|vw|vmin|vmax|ch|ex|svh|lvh|dvh|svw|lvw|dvw)$/.test(str)) return str;
  return fallback;
}

/** Restricts a dynamic tag name to an allow-list. */
export function pickTag<T extends string>(tag: unknown, allowed: readonly T[], fallback: T): T {
  return allowed.includes(tag as T) ? (tag as T) : fallback;
}

/**
 * Parses a legacy raw attribute string (`data-a="1" data-b`) into an attribute
 * map so it can be re-serialized through {@link toAttributes} (which drops
 * invalid and `on*` names).
 */
export function parseAttributeString(input?: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  if (!input) return result;
  const decode = (s: string) =>
    s
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
  const pattern = /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(input)) !== null) {
    const [, name, dq, sq, uq] = match;
    const value = dq ?? sq ?? uq;
    result[name] = value === undefined ? true : decode(value);
  }
  return result;
}

/**
 * Normalizes an icon class list: a bare Material Design Icons name (`"mdi-plus"`) gets the
 * `mdi` base class (`"mdi mdi-plus"`); anything else (`"mdi mdi-plus text-sm"`, `"bi bi-x"`)
 * passes through. The result still needs {@link classNames} (or escaping) before use.
 */
export function iconClasses(icon: string): string {
  const trimmed = String(icon ?? "").trim();
  return /^mdi-[\w-]+$/.test(trimmed) ? `mdi ${trimmed}` : trimmed;
}
