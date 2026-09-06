export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function classNames(...classes: (string | undefined | null | false | 0)[]): string {
  return classes.filter(Boolean).join(" ").trim();
}

export function toAttributes(attributes?: Record<string, unknown>): string {
  if (!attributes) return "";
  const parts: string[] = [];

  for (const [key, value] of Object.entries(attributes)) {
    if (value === true) {
      parts.push(key);
    } else if (value !== false && value !== null && value !== undefined) {
      parts.push(`${key}="${escapeHtml(value)}"`);
    }
  }

  return parts.length > 0 ? ` ${parts.join(" ")}` : "";
}
