/** Shared CSS generator state (rule list, utility map) and helpers. */
import { colors } from "../palette";
import {
  escapeArbitraryClass,
  runtimeBreakpoints,
  ruleCascadeRank,
  runtimeStateSelectors,
  shouldUseImportant,
  withImportant
} from "../aksara";

export const hexColors: Record<string, string> = Object.fromEntries(
  Object.entries(colors).map(([name, rgb]) => [
    name,
    `#${rgb
      .split(" ")
      .map((channel) => Number(channel).toString(16).padStart(2, "0"))
      .join("")}`
  ])
);

export const baseTokens: Record<string, string> = {
  "--aksara-border-width": "1px",
  "--aksara-radius": "1rem",
  "--aksara-radius-2xs": ".125rem",
  "--aksara-radius-xs": ".25rem",
  "--aksara-radius-sm": ".5rem",
  "--aksara-radius-md": ".75rem",
  "--aksara-radius-lg": "1rem",
  "--aksara-radius-xl": "1.25rem",
  "--aksara-radius-2xl": "1.5rem",
  "--aksara-radius-3xl": "2rem",
  "--aksara-radius-full": "9999px",
  "--aksara-border-radius": "1rem",
  "--aksara-gutter-x": "1rem",
  "--aksara-gutter-y": "0",
  "--aksara-container-max": "1140px",
  "--aksara-container-padding": "1rem",
  "--aksara-stack-gap": "1rem",
  "--aksara-modal-x": "0px",
  "--aksara-modal-y": "0px",
  "--aksara-modal-width": "32rem",
  "--aksara-surface": "#ffffff",
  "--aksara-surface-hover": "#f8fafc",
  "--aksara-surface-muted": "#f1f5f9",
  "--aksara-bg-surface": "#ffffff",
  "--aksara-bg-body": "#ffffff",
  "--aksara-bg-body-secondary": "#f8fafc",
  "--aksara-bg-body-tertiary": "#f1f5f9",
  "--aksara-bg-subtle": "#f1f5f9",
  "--aksara-bg-invert": "#0f172a",
  "--aksara-bg": "var(--aksara-bg-body)",
  "--aksara-font-sans": 'Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
  "--aksara-font-mono": 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  "--aksara-text-body": "#0f172a",
  "--aksara-text-base": "#0f172a",
  "--aksara-text-body-secondary": "#64748b",
  "--aksara-text-body-tertiary": "#94a3b8",
  "--aksara-text-subtle": "#64748b",
  "--aksara-text-invert": "#f8fafc",
  "--aksara-border": "#e2e8f0",
  "--aksara-border-secondary": "#f1f5f9",
  "--aksara-border-tertiary": "#e2e8f0",
  "--aksara-border-subtle": "#e2e8f0",
  "--aksara-border-invert": "#475569",
  "--aksara-border-color": "var(--aksara-border)"
};

export const lightTheme: Record<string, string> = {
  "--aksara-surface": "#ffffff",
  "--aksara-surface-hover": "#f8fafc",
  "--aksara-surface-muted": "#f1f5f9",
  "--aksara-bg-surface": "#ffffff",
  "--aksara-bg-body": "#ffffff",
  "--aksara-bg-body-secondary": "#f8fafc",
  "--aksara-bg-body-tertiary": "#f1f5f9",
  "--aksara-bg-subtle": "#f1f5f9",
  "--aksara-bg-invert": "#0f172a",
  "--aksara-bg": "var(--aksara-bg-body)",
  "--aksara-font-sans": 'Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
  "--aksara-font-mono": 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  "--aksara-text-body": "#0f172a",
  "--aksara-text-base": "#0f172a",
  "--aksara-text-body-secondary": "#64748b",
  "--aksara-text-body-tertiary": "#94a3b8",
  "--aksara-text-subtle": "#64748b",
  "--aksara-text-invert": "#f8fafc",
  "--aksara-border": "#e2e8f0",
  "--aksara-border-secondary": "#f1f5f9",
  "--aksara-border-tertiary": "#e2e8f0",
  "--aksara-border-subtle": "#e2e8f0",
  "--aksara-border-invert": "#475569",
  "--aksara-border-color": "var(--aksara-border)",
  "--aksara-shadow-sm": "0 1px 2px rgb(15 23 42/.05)",
  "--aksara-shadow-md": "0 10px 25px rgb(15 23 42/.08)",
  "--aksara-shadow-lg": "0 20px 50px rgb(15 23 42/.12)",
  "--aksara-overlay-bg": "rgb(15 23 42/.46)",
  "--aksara-tooltip-bg": "rgb(15 23 42)",
  "--aksara-tooltip-text": "rgb(var(--aksara-light))",
  "--aksara-placeholder-shine": "rgb(255 255 255/.35)",
  "--aksara-scrollbar-track": "transparent",
  "--aksara-scrollbar-thumb": "rgb(100 116 139/.32)",
  "--aksara-scrollbar-thumb-hover": "rgb(100 116 139/.52)",
  "--aksara-progress-stripe": "rgb(255 255 255/.22)",
  "--aksara-carousel-caption-bg": "rgb(15 23 42/.58)",
  "--aksara-carousel-control-bg": "rgb(15 23 42/.58)",
  "--aksara-carousel-indicator": "rgb(255 255 255/.56)",
  "--aksara-carousel-indicator-active": "rgb(255 255 255)",
  "--aksara-on-media": "rgb(var(--aksara-light))",
  "--aksara-link-color": "rgb(var(--aksara-primary))",
  "--aksara-link-hover-color": "rgb(var(--aksara-primary))"
};

export const darkTheme: Record<string, string> = {
  "--aksara-surface": "#0f172a",
  "--aksara-surface-hover": "#1e293b",
  "--aksara-surface-muted": "#1e293b",
  "--aksara-bg-surface": "#0f172a",
  "--aksara-bg-body": "#020617",
  "--aksara-bg-body-secondary": "#0f172a",
  "--aksara-bg-body-tertiary": "#1e293b",
  "--aksara-bg-subtle": "#1e293b",
  "--aksara-bg-invert": "#f8fafc",
  "--aksara-bg": "var(--aksara-bg-body)",
  "--aksara-text-body": "#f8fafc",
  "--aksara-text-base": "#f8fafc",
  "--aksara-text-body-secondary": "#94a3b8",
  "--aksara-text-body-tertiary": "#64748b",
  "--aksara-text-subtle": "#94a3b8",
  "--aksara-text-invert": "#0f172a",
  "--aksara-border": "#1e293b",
  "--aksara-border-secondary": "#0f172a",
  "--aksara-border-tertiary": "#334155",
  "--aksara-border-subtle": "#1e293b",
  "--aksara-border-invert": "#cbd5e1",
  "--aksara-border-color": "var(--aksara-border)",
  "--aksara-shadow-sm": "0 1px 2px rgb(0 0 0/.22)",
  "--aksara-shadow-md": "0 14px 36px rgb(0 0 0/.30)",
  "--aksara-shadow-lg": "0 28px 80px rgb(0 0 0/.42)",
  "--aksara-overlay-bg": "rgb(0 0 0/.62)",
  "--aksara-tooltip-bg": "rgb(248 250 252)",
  "--aksara-tooltip-text": "rgb(15 23 42)",
  "--aksara-placeholder-shine": "rgb(255 255 255/.16)",
  "--aksara-scrollbar-track": "transparent",
  "--aksara-scrollbar-thumb": "rgb(174 186 204/.28)",
  "--aksara-scrollbar-thumb-hover": "rgb(174 186 204/.46)",
  "--aksara-progress-stripe": "rgb(255 255 255/.18)",
  "--aksara-carousel-caption-bg": "rgb(0 0 0/.62)",
  "--aksara-carousel-control-bg": "rgb(0 0 0/.62)",
  "--aksara-carousel-indicator": "rgb(255 255 255/.48)",
  "--aksara-carousel-indicator-active": "rgb(255 255 255)",
  "--aksara-on-media": "rgb(var(--aksara-light))",
  "--aksara-link-color": "rgb(var(--aksara-primary))",
  "--aksara-link-hover-color": "rgb(var(--aksara-primary))"
};

// Breakpoints, variant names and state selectors are shared with the runtime engine.
export const breakpoints = runtimeBreakpoints;
export const themeVariants = ["dark", "light"];
export const breakpointVariants = Object.keys(breakpoints);
export const stateVariants = Object.keys(runtimeStateSelectors);
export const stateSelectors = runtimeStateSelectors;

export const rules: string[] = [];
export const utilityMap = new Map<string, string>();

// Same `!important` policy as runtime-generated classes.
export const shouldAddImportant = shouldUseImportant;
export const makeImportant = withImportant;

/** `add()` calls that redefined an existing class with different declarations. */
export const conflictingDefinitions: string[] = [];

export function add(name: string, declarations: string): void {
  const finalDeclarations = shouldAddImportant(name) ? makeImportant(declarations) : declarations;
  const existing = utilityMap.get(name);
  if (existing !== undefined) {
    // First definition wins; a different redefinition is a generator bug, not a no-op.
    if (existing !== finalDeclarations)
      conflictingDefinitions.push(`.${name}: "${existing}" vs "${finalDeclarations}"`);
    return;
  }
  utilityMap.set(name, finalDeclarations);
  rules.push(rule(name, finalDeclarations));
}

/** Emits one rule for a utility and its alias (e.g. `rounded-4` / `radius-4`). */
export function addWithAlias(name: string, alias: string, declarations: string): void {
  if (utilityMap.has(name) || utilityMap.has(alias)) return;
  const finalDeclarations = shouldAddImportant(name) ? makeImportant(declarations) : declarations;
  utilityMap.set(name, finalDeclarations);
  utilityMap.set(alias, finalDeclarations);
  rules.push(`.${escapeClass(name)},.${escapeClass(alias)}{${finalDeclarations}}`);
}

/**
 * Reorders the directional rules of `list` by `cascadeRank` (stable), leaving every other
 * rule at its position: only rules that set overlapping box properties change order, so
 * `pb-0` ends up after `p-2`, `mt-0` after `m-3`, `rounded-top-0` after `rounded`, ...
 * At-rules are left alone unless `includeAtRules` (a list of single-rule `@media` blocks of
 * the same breakpoint, ranked by their inner rule).
 */
export function orderDirectionalRules(list: string[], includeAtRules = false): string[] {
  const slots: number[] = [];
  const ranked: Array<{ rule: string; rank: number; order: number }> = [];
  list.forEach((entry, index) => {
    if (entry.startsWith("@") && !includeAtRules) return;
    const rank = ruleCascadeRank(entry);
    if (rank < 0) return;
    slots.push(index);
    ranked.push({ rule: entry, rank, order: ranked.length });
  });
  ranked.sort((a, b) => a.rank - b.rank || a.order - b.order);
  const output = [...list];
  slots.forEach((slot, i) => {
    output[slot] = ranked[i].rule;
  });
  return output;
}

export function addRaw(selector: string, declarations: string): void {
  rules.push(`${selector}{${declarations}}`);
}

export function rule(className: string, declarations: string): string {
  return `.${escapeClass(className)}{${declarations}}`;
}

export const escapeClass = escapeArbitraryClass;

export function alpha(level: number = 100): number {
  return Number(level) / 100;
}

export function colorValue(name: string, level: number = 100): string {
  return `rgb(var(--aksara-${name}) / ${alpha(level)})`;
}

export function px(n: number): string {
  return `${n}px`;
}

export function negative(value: string): string {
  return value === "0" ? "0" : `-${value}`;
}

export function readableText(name: string): string {
  const fallback = ["light", "warning", "info"].includes(name) ? "rgb(var(--aksara-dark))" : "rgb(var(--aksara-light))";
  return `var(--aksara-${name}-foreground,${fallback})`;
}

/**
 * Foreground for solid fills (`.btn-primary`, `.badge-primary`, ...). Themes that
 * invert a palette color (e.g. a light primary in dark mode) override it with
 * `--aksara-{name}-foreground` instead of re-declaring every component.
 */
export function solidForeground(name: string): string {
  const fallback = name === "light" || name === "tertiary" ? "rgb(var(--aksara-dark))" : "rgb(var(--aksara-light))";
  return `var(--aksara-${name}-foreground,${fallback})`;
}

export const bootstrapSpacers: Record<number, string> = {
  0: "0",
  1: ".25rem",
  2: ".5rem",
  3: "1rem",
  4: "1.5rem",
  5: "3rem"
};
