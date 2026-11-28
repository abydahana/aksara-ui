import { classNames, escapeHtml } from "../utils";

export interface KbdProps {
  /** One key (`"Esc"`) or a combination (`["⌘", "K"]`). */
  keys: string | string[];
  size?: "sm" | "md" | "lg";
  /** Text between keys of a combination. Default `""` (keys sit side by side). */
  separator?: string;
  className?: string;
}

/** Spoken names for symbol keys, so screen readers say "Command" instead of nothing. */
const KEY_NAMES: Record<string, string> = {
  "⌘": "Command",
  "⌥": "Option",
  "⇧": "Shift",
  "⌃": "Control",
  "↵": "Enter",
  "⏎": "Enter",
  "⌫": "Backspace",
  "⌦": "Delete",
  "⎋": "Escape",
  "⇥": "Tab",
  "↑": "Up arrow",
  "↓": "Down arrow",
  "←": "Left arrow",
  "→": "Right arrow"
};

/** Keyboard key(s): `Kbd({ keys: ["Ctrl", "K"] })`. */
export function Kbd(props: KbdProps): string {
  const { keys, size = "md", separator = "", className = "" } = props;
  const list = Array.isArray(keys) ? keys : [keys];
  const keyClass = classNames(size === "sm" && "kbd-sm", size === "lg" && "kbd-lg");
  const items = list.map((key) => {
    const spoken = KEY_NAMES[key];
    const content = spoken
      ? `<span aria-hidden="true">${escapeHtml(key)}</span><span class="visually-hidden">${spoken}</span>`
      : escapeHtml(key);
    return `<kbd${keyClass ? ` class="${keyClass}"` : ""}>${content}</kbd>`;
  });
  if (list.length === 1 && !className) return items[0];
  const join = separator ? `<span aria-hidden="true">${escapeHtml(separator)}</span>` : "";
  return `<span class="${classNames("kbd-group", className)}">${items.join(join)}</span>`;
}

export const kbd = Kbd;
