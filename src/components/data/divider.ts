import { classNames, escapeHtml, toAttributes } from "../utils";

export interface DividerProps {
  /** Text in the middle of the line (escaped). Use `children` for HTML. */
  label?: string;
  children?: string;
  /** Where the label sits. */
  align?: "center" | "start" | "end";
  vertical?: boolean;
  dashed?: boolean;
  strong?: boolean;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** A hairline separator, optionally with a label ("or", "Today"). */
export function Divider(props: DividerProps = {}): string {
  const {
    label,
    children,
    align = "center",
    vertical = false,
    dashed = false,
    strong = false,
    className = "",
    attributes
  } = props;
  const content = children ?? (label ? escapeHtml(label) : "");
  const classes = classNames(
    "divider",
    align === "start" && "divider-start",
    align === "end" && "divider-end",
    vertical && "divider-vertical",
    dashed && "divider-dashed",
    strong && "divider-strong",
    className
  );
  // A separator's content is presentational, so the label is also its accessible name.
  const attrs = toAttributes({
    role: "separator",
    "aria-label": label || undefined,
    "aria-orientation": vertical ? "vertical" : undefined,
    ...attributes
  });
  return `<div class="${classes}"${attrs}>${content}</div>`;
}

export const divider = Divider;
