import { classNames, escapeHtml, iconClasses, toAttributes } from "../utils";

export interface StepItem {
  title: string;
  description?: string;
  /** Icon class shown instead of the number. */
  icon?: string;
  /** Marks this step as failed. */
  error?: boolean;
  href?: string;
}

export interface StepsProps {
  items: StepItem[];
  /** Zero-based active step; earlier steps render complete. `-1` = none started. */
  current?: number;
  vertical?: boolean;
  size?: "sm" | "md";
  id?: string;
  /**
   * Selector of the wizard panels (one per step, in order). Turns on the runtime
   * (`data-steps`): `[data-steps-next|prev="#id"]` buttons move between them.
   */
  panels?: string;
  label?: string;
  className?: string;
  attributes?: Record<string, unknown>;
}

/** Progress through a multi-step flow (checkout, onboarding, wizard). */
export function Steps(props: StepsProps): string {
  const {
    items,
    current = 0,
    vertical = false,
    size = "md",
    id,
    panels,
    label = "Progress",
    className = "",
    attributes
  } = props;
  const classes = classNames("steps", vertical && "steps-vertical", size === "sm" && "steps-sm", className);
  const attrs = toAttributes({
    id,
    "aria-label": label,
    "data-steps": panels !== undefined ? "" : undefined,
    "data-steps-panels": panels || undefined,
    ...attributes
  });
  const rows = items
    .map((item, i) => {
      const state = item.error ? "is-error" : i < current ? "is-complete" : i === current ? "is-active" : "";
      const marker = item.icon ? `<span class="${escapeHtml(iconClasses(item.icon))}"></span>` : "";
      const body = `<span class="step-marker" aria-hidden="true">${marker}</span><span class="step-body"><span class="step-title">${escapeHtml(item.title)}</span>${item.description ? `<span class="step-text">${escapeHtml(item.description)}</span>` : ""}</span>`;
      const status = item.error ? "Error: " : i < current ? "Completed: " : i === current ? "Current: " : "";
      const sr = status ? `<span class="visually-hidden">${status}</span>` : "";
      const inner = item.href
        ? `<a href="${escapeHtml(item.href)}" class="step-link">${sr}${body}</a>`
        : `${sr}${body}`;
      return `<li class="${classNames("step", state)}"${i === current ? ' aria-current="step"' : ""}>${inner}</li>`;
    })
    .join("");
  return `<ol class="${classes}"${attrs}>${rows}</ol>`;
}

export const steps = Steps;
