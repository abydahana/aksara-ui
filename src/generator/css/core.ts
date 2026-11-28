/** Shared CSS generator state (rule list, utility map) and helpers. */
import { foregrounds } from "../palette";
import {
  escapeArbitraryClass,
  runtimeBreakpoints,
  ruleCascadeRank,
  runtimeStateSelectors,
  shouldUseImportant,
  withImportant
} from "../aksara";

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
  "--aksara-control-radius": ".625rem",
  "--aksara-ring-width": "3px",
  "--aksara-ease": "cubic-bezier(.2,.8,.2,1)",
  "--aksara-duration": ".18s",
  "--aksara-gutter-x": "1rem",
  "--aksara-gutter-y": "0",
  "--aksara-container-max": "1140px",
  "--aksara-container-padding": "1rem",
  "--aksara-stack-gap": "1rem",
  "--aksara-modal-x": "0px",
  "--aksara-modal-y": "0px",
  "--aksara-modal-width": "32rem",
  "--aksara-surface": "#ffffff",
  "--aksara-surface-hover": "#f8f7f5",
  "--aksara-surface-muted": "#efeeeb",
  "--aksara-surface-raised": "#ffffff",
  "--aksara-bg-surface": "#ffffff",
  "--aksara-bg-body": "#fcfcfb",
  "--aksara-bg-body-secondary": "#f7f6f4",
  "--aksara-bg-body-tertiary": "#efeeeb",
  "--aksara-bg-subtle": "#f3f2f0",
  "--aksara-bg-invert": "#1c1a18",
  "--aksara-bg": "var(--aksara-bg-body)",
  "--aksara-font-sans": 'Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
  "--aksara-font-mono": 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  "--aksara-text-body": "#1c1a18",
  "--aksara-text-base": "#1c1a18",
  "--aksara-text-body-secondary": "#69655f",
  "--aksara-text-body-tertiary": "#a09b94",
  "--aksara-text-subtle": "#69655f",
  "--aksara-text-invert": "#f7f6f4",
  "--aksara-border": "#e5e3df",
  "--aksara-border-secondary": "#f1f0ed",
  "--aksara-border-tertiary": "#dcd9d4",
  "--aksara-border-subtle": "#ebe9e6",
  "--aksara-border-invert": "#55524d",
  "--aksara-border-color": "var(--aksara-border)"
};

export const lightTheme: Record<string, string> = {
  "--aksara-surface": "#ffffff",
  "--aksara-surface-hover": "#f8f7f5",
  "--aksara-surface-muted": "#efeeeb",
  "--aksara-surface-raised": "#ffffff",
  "--aksara-bg-surface": "#ffffff",
  "--aksara-bg-body": "#fcfcfb",
  "--aksara-bg-body-secondary": "#f7f6f4",
  "--aksara-bg-body-tertiary": "#efeeeb",
  "--aksara-bg-subtle": "#f3f2f0",
  "--aksara-bg-invert": "#1c1a18",
  "--aksara-bg": "var(--aksara-bg-body)",
  "--aksara-font-sans": 'Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
  "--aksara-font-mono": 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  "--aksara-text-body": "#1c1a18",
  "--aksara-text-base": "#1c1a18",
  "--aksara-text-body-secondary": "#69655f",
  "--aksara-text-body-tertiary": "#a09b94",
  "--aksara-text-subtle": "#69655f",
  "--aksara-text-invert": "#f7f6f4",
  "--aksara-border": "#e5e3df",
  "--aksara-border-secondary": "#f1f0ed",
  "--aksara-border-tertiary": "#dcd9d4",
  "--aksara-border-subtle": "#ebe9e6",
  "--aksara-border-invert": "#55524d",
  "--aksara-border-color": "var(--aksara-border)",
  "--aksara-border-strong": "#d1cdc7",
  "--aksara-shadow-sm": "0 1px 2px rgb(28 26 24/.04),0 1px 3px rgb(28 26 24/.06)",
  "--aksara-shadow-md": "0 2px 6px -1px rgb(28 26 24/.05),0 10px 28px -6px rgb(28 26 24/.12)",
  "--aksara-shadow-lg": "0 6px 12px -4px rgb(28 26 24/.06),0 28px 56px -14px rgb(28 26 24/.22)",
  "--aksara-ring": "0 0 0 var(--aksara-ring-width,3px) rgb(var(--aksara-primary)/.2)",
  "--aksara-overlay-bg": "rgb(28 26 24/.36)",
  "--aksara-tooltip-bg": "rgb(28 26 24)",
  "--aksara-tooltip-text": "rgb(247 246 244)",
  "--aksara-placeholder-shine": "rgb(255 255 255/.45)",
  "--aksara-scrollbar-track": "transparent",
  "--aksara-scrollbar-thumb": "rgb(108 104 98/.28)",
  "--aksara-scrollbar-thumb-hover": "rgb(108 104 98/.48)",
  "--aksara-progress-stripe": "rgb(255 255 255/.22)",
  "--aksara-carousel-caption-bg": "rgb(28 26 24/.55)",
  "--aksara-carousel-control-bg": "rgb(255 255 255/.85)",
  "--aksara-carousel-control-text": "rgb(28 26 24)",
  "--aksara-carousel-indicator": "rgb(255 255 255/.5)",
  "--aksara-carousel-indicator-active": "rgb(255 255 255)",
  "--aksara-on-media": "rgb(var(--aksara-light))",
  "--aksara-link-color": "rgb(var(--aksara-primary))",
  "--aksara-link-hover-color": "color-mix(in srgb,rgb(var(--aksara-primary)) 80%,var(--aksara-text-body))"
};

export const darkTheme: Record<string, string> = {
  "--aksara-surface": "#1a1918",
  "--aksara-surface-hover": "#222120",
  "--aksara-surface-muted": "#222120",
  "--aksara-surface-raised": "#1f1e1c",
  "--aksara-bg-surface": "#1a1918",
  "--aksara-bg-body": "#121110",
  "--aksara-bg-body-secondary": "#161514",
  "--aksara-bg-body-tertiary": "#222120",
  "--aksara-bg-subtle": "#242321",
  "--aksara-bg-invert": "#f7f6f4",
  "--aksara-bg": "var(--aksara-bg-body)",
  "--aksara-text-body": "#edebe8",
  "--aksara-text-base": "#edebe8",
  "--aksara-text-body-secondary": "#a19d97",
  "--aksara-text-body-tertiary": "#75716b",
  "--aksara-text-subtle": "#a19d97",
  "--aksara-text-invert": "#1c1a18",
  "--aksara-border": "#2e2c2a",
  "--aksara-border-secondary": "#1b1a19",
  "--aksara-border-tertiary": "#363431",
  "--aksara-border-subtle": "#272523",
  "--aksara-border-invert": "#d4d0ca",
  "--aksara-border-color": "var(--aksara-border)",
  "--aksara-border-strong": "#3d3a37",
  "--aksara-shadow-sm": "0 1px 2px rgb(0 0 0/.3)",
  "--aksara-shadow-md": "0 2px 6px -1px rgb(0 0 0/.3),0 12px 32px -6px rgb(0 0 0/.45)",
  "--aksara-shadow-lg": "0 6px 12px -4px rgb(0 0 0/.35),0 32px 64px -16px rgb(0 0 0/.6)",
  "--aksara-ring": "0 0 0 var(--aksara-ring-width,3px) rgb(var(--aksara-primary)/.28)",
  "--aksara-overlay-bg": "rgb(6 5 4/.66)",
  "--aksara-tooltip-bg": "rgb(237 235 232)",
  "--aksara-tooltip-text": "rgb(28 26 24)",
  "--aksara-placeholder-shine": "rgb(255 255 255/.08)",
  "--aksara-scrollbar-track": "transparent",
  "--aksara-scrollbar-thumb": "rgb(163 159 152/.24)",
  "--aksara-scrollbar-thumb-hover": "rgb(163 159 152/.4)",
  "--aksara-progress-stripe": "rgb(255 255 255/.18)",
  "--aksara-carousel-caption-bg": "rgb(6 5 4/.6)",
  "--aksara-carousel-control-bg": "rgb(31 30 28/.85)",
  "--aksara-carousel-control-text": "rgb(237 235 232)",
  "--aksara-carousel-indicator": "rgb(255 255 255/.45)",
  "--aksara-carousel-indicator-active": "rgb(255 255 255)",
  "--aksara-on-media": "rgb(var(--aksara-light))",
  "--aksara-link-color": "rgb(var(--aksara-primary))",
  "--aksara-link-hover-color": "color-mix(in srgb,rgb(var(--aksara-primary)) 80%,var(--aksara-text-body))"
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
  return `var(--aksara-${name}-foreground,${foregrounds[name] ?? "rgb(255 255 255)"})`;
}

/**
 * Foreground for solid fills (`.btn-primary`, `.badge-primary`, ...). Each theme
 * declares `--aksara-{name}-foreground` (see `foregrounds` / `darkForegrounds` in the
 * palette), so a custom theme only re-declares that token instead of every component.
 */
export function solidForeground(name: string): string {
  return readableText(name);
}

/**
 * Text color for tinted ("soft") surfaces: the palette color pulled toward the body
 * text, so it darkens on light themes and brightens on dark ones and stays readable
 * on a 10% tint of itself.
 */
export function softText(name: string): string {
  // `light`/`dark` tints sit on the opposite theme's text; the body color always reads.
  if (name === "light" || name === "dark") return "var(--aksara-text-body)";
  // Amber is light by nature; it needs a stronger pull to stay readable on its own tint.
  const keep = name === "warning" ? 58 : 78;
  return `color-mix(in srgb,rgb(var(--aksara-${name})) ${keep}%,var(--aksara-text-body))`;
}

/**
 * Hover/pressed state of a solid fill: the color mixed with a warm mid-tone, so dark
 * fills (near-black primary) lighten and light fills (off-white primary in dark mode, amber)
 * darken. Mixing toward the text color instead would be a no-op for the primary.
 */
export function shiftedFill(name: string, keep: number = 86): string {
  return `color-mix(in srgb,rgb(var(--aksara-${name})) ${keep}%,rgb(128 124 118))`;
}

export const bootstrapSpacers: Record<number, string> = {
  0: "0",
  1: ".25rem",
  2: ".5rem",
  3: "1rem",
  4: "1.5rem",
  5: "3rem"
};
