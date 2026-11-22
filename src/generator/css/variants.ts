/** Responsive/state variants and precompiled runtime classes emitted by Aksara's own components. */
import fs from "node:fs";
import path from "node:path";
import { parseModifiersAndUtility, resolveRuntimeRules } from "../aksara";
import { root, srcTs } from "../paths";
import { colors } from "../palette";
import {
  breakpoints,
  themeVariants,
  breakpointVariants,
  stateVariants,
  stateSelectors,
  rules,
  utilityMap,
  escapeClass,
  bootstrapSpacers,
  orderDirectionalRules
} from "./core";

export interface ParsedClass {
  theme: string | null;
  breakpoint: string | null;
  state: string | null;
  utility: string;
}

export function parseClassName(className: string): ParsedClass {
  const { modifiers, utility } = parseModifiersAndUtility(className);
  let position = 0;
  const parsed: ParsedClass = { theme: null, breakpoint: null, state: null, utility };
  for (const variant of modifiers) {
    let next: number | null = null;
    if (themeVariants.includes(variant)) next = 1;
    if (breakpointVariants.includes(variant)) next = 2;
    if (stateVariants.includes(variant) || variant === "group-hover") next = 3;
    if (!next || next < position || (next === position && next !== 3)) {
      throw new Error(`Invalid variant order: ${className}`);
    }
    position = next;
    if (next === 1) parsed.theme = variant;
    if (next === 2) parsed.breakpoint = variant;
    if (next === 3) parsed.state = variant;
  }
  return parsed;
}

/** Variant classes emitted statically (so the component scan doesn't bake them twice). */
export const staticVariantClasses = new Set<string>();

export function variantRule(className: string): string {
  const parsed = parseClassName(className);
  const declarations = utilityMap.get(parsed.utility);
  if (!declarations) throw new Error(`Unknown utility: ${parsed.utility}`);
  staticVariantClasses.add(className);
  const escaped = escapeClass(className);
  let selector = `.${escaped}`;
  if (parsed.state) {
    if (parsed.state === "group-hover") {
      selector = `.group:hover .${escaped}`;
    } else {
      selector += stateSelectors[parsed.state];
    }
  }
  let output = `${selector}{${declarations}}`;
  if (parsed.theme) {
    output = `[data-theme="${parsed.theme}"] ${selector},.${parsed.theme} ${selector}{${declarations}}`;
  }
  if (parsed.breakpoint) output = `@media (min-width:${breakpoints[parsed.breakpoint]}){${output}}`;
  return output;
}

/**
 * Precompiles the runtime-only classes that Aksara's OWN components and runtime emit
 * (arbitrary values, color opacity, variants of static utilities), so server-rendered
 * component markup is styled before `Aksara.init()` runs. Rules come from the runtime
 * resolver itself, so static and on-demand output are identical. Consumer, docs and
 * test markup is intentionally not scanned: the runtime generates those on demand.
 */
export function scanComponentRuntimeClasses(): void {
  const sources = [path.join(root, "src/components"), srcTs];
  const tokenPatterns = [
    /(?<![\w-])((?:[a-z0-9-]+:)*-?[a-zA-Z0-9_-]+-\[[^\]\s"'`]+\])(?![\w-])/g,
    /(?<![\w-])((?:[a-z0-9-]+:)*\[[a-zA-Z-]+:[^\]\s"'`]+\])(?![\w-])/g,
    /(?<![\w-])((?:[a-z0-9-]+:)*(?:bg|text|border|decoration|ring)-[a-z]+\/\d{1,3})(?![\w/-])/g,
    /(?<=["'`\s])((?:[a-z0-9]+(?:-[a-z]+)?:)+-?[a-z][a-z0-9-]*)(?=["'`\s])/g
  ];
  const lookup = (utility: string): string | null => utilityMap.get(utility) ?? null;
  const breakpointOrder = Object.values(breakpoints);
  const baseRules: string[] = [];
  const mediaRules: string[][] = breakpointOrder.map(() => []);
  const seen = new Set<string>();

  const walk = (target: string): string[] => {
    if (fs.statSync(target).isFile()) return [target];
    return fs.readdirSync(target, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(target, entry.name);
      if (entry.isDirectory()) return walk(full);
      return entry.name.endsWith(".ts") ? [full] : [];
    });
  };

  for (const file of sources.flatMap(walk)) {
    const content = fs.readFileSync(file, "utf8");
    for (const pattern of tokenPatterns) {
      for (const match of content.matchAll(pattern)) {
        const token = match[1];
        if (seen.has(token) || staticVariantClasses.has(token) || utilityMap.has(token)) continue;
        seen.add(token);
        for (const output of resolveRuntimeRules(token, lookup)) {
          const media = output.match(/^@media \(min-width:([^)]+)\)/);
          if (media) mediaRules[breakpointOrder.indexOf(media[1])]?.push(output);
          else baseRules.push(output);
        }
      }
    }
  }
  // Base rules first, then media rules in breakpoint order (mobile-first cascade).
  rules.push(
    ...orderDirectionalRules(baseRules),
    // Same rank order inside each breakpoint (single-rule @media blocks, ranked by their inner rule)
    ...mediaRules.flatMap((group) => orderDirectionalRules(group, true))
  );
}

export function addVariants(): void {
  // Static responsive variants cover layout only (no flash before `Aksara.init()`).
  // Other variants (`md:text-center`, `lg:p-[2rem]`, ...) are generated on demand.
  const responsive = [
    "col",
    "col-auto",
    ...Array.from({ length: 12 }, (_, i) => `col-${i + 1}`),
    ...Array.from({ length: 6 }, (_, i) => `g-${i}`),
    ...Array.from({ length: 6 }, (_, i) => `gx-${i}`),
    ...Array.from({ length: 6 }, (_, i) => `gy-${i}`),
    ...Array.from({ length: 6 }, (_, i) => `gap-${i}`),
    "block",
    "flex",
    "grid",
    "hidden",
    "flex-row",
    "flex-col",
    "flex-column",
    "d-none",
    "d-block",
    "d-flex",
    "d-inline",
    "d-inline-block",
    "d-inline-flex",
    "sticky-top",
    "sticky-bottom"
  ];
  const unwrapMedia = (output: string): string => output.replace(/^@media \(min-width:[^)]+\)\{/, "").slice(0, -1);

  // One @media block per breakpoint, in ascending order, so larger breakpoints always
  // win (`lg:col-4 xl:col-3` resolves to col-3 at xl). Breakpoints are prefix-only
  // (`md:col-6`, `lg:sticky-top`); Bootstrap infix names (`col-md-6`) are not generated.
  for (const [bp, minWidth] of Object.entries(breakpoints)) {
    const blockRules: string[] = responsive.map((name) => unwrapMedia(variantRule(`${bp}:${name}`)));
    blockRules.push(
      ...Object.entries(bootstrapSpacers).flatMap(([k, v]) => [
        // `.row` uses gutters, not flex gap, for `md:gap-3` / `md:col-gap-3` / `md:row-gap-3`.
        `.row.${escapeClass(`${bp}:gap-${k}`)}{--aksara-gutter-x:${v};--aksara-gutter-y:${v};column-gap:0;row-gap:0}`,
        `.row.${escapeClass(`${bp}:col-gap-${k}`)}{--aksara-gutter-x:${v};column-gap:0}`,
        `.row.${escapeClass(`${bp}:row-gap-${k}`)}{--aksara-gutter-y:${v};row-gap:0}`
      ])
    );
    rules.push(`@media (min-width:${minWidth}){${blockRules.join("")}}`);
  }

  // Static state variants only for the common interactive states; every other state
  // (`disabled:`, `last:`, `odd:`, ...) and any other utility is generated on demand.
  const stateful = [
    "border",
    ...Object.keys(colors).flatMap((name) => [`bg-${name}`, `text-${name}`, `border-${name}`, `ring-${name}`]),
    "bg-body",
    "bg-subtle",
    "bg-transparent",
    "text-body",
    "border-subtle",
    "underline",
    "ring"
  ];
  for (const state of ["hover", "focus", "active"]) {
    for (const name of stateful) rules.push(variantRule(`${state}:${name}`));
  }
}
