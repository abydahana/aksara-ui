import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  createCompilerHost,
  createProgram,
  ModuleKind,
  ScriptTarget,
  transpileModule,
  type CompilerOptions
} from "typescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const distDir = path.join(root, "dist");
const srcTs = path.join(root, "src/generator/aksara.ts");
const docsContentDir = path.join(root, "src/docs/content");
const docsContentOutput = path.join(root, "src/docs/assets/docs-content.js");
const docsTs = path.join(root, "src/docs/assets/docs.ts");
const docsJsOutput = path.join(root, "src/docs/assets/docs.js");

const colors: Record<string, string> = {
  primary: "15 23 42",
  secondary: "100 116 139",
  tertiary: "148 163 184",
  success: "34 197 94",
  danger: "244 63 94",
  warning: "245 158 11",
  info: "6 182 212",
  dark: "15 23 42",
  light: "248 250 252"
};

const hexColors: Record<string, string> = {
  primary: "#0f172a",
  secondary: "#64748b",
  tertiary: "#94a3b8",
  success: "#22c55e",
  danger: "#f43f5e",
  warning: "#f59e0b",
  info: "#06b6d4",
  dark: "#0f172a",
  light: "#f8fafc"
};

const baseTokens: Record<string, string> = {
  "--aksara-border-width": "1px",
  "--aksara-radius": "1rem",
  "--aksara-radius-2xs": ".125rem",
  "--aksara-radius-xs": ".25rem",
  "--aksara-radius-sm": ".5rem",
  "--aksara-radius-md": ".75rem",
  "--aksara-radius-lg": "1rem",
  "--aksara-radius-xl": "1rem",
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

const lightTheme: Record<string, string> = {
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

const darkTheme: Record<string, string> = {
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

const breakpoints: Record<string, string> = {
  sm: "36rem",
  md: "48rem",
  lg: "62rem",
  xl: "75rem",
  "2xl": "87.5rem",
  "3xl": "100rem"
};

const themeVariants = ["dark", "light"];
const breakpointVariants = Object.keys(breakpoints);
const stateVariants = [
  "hover",
  "focus",
  "active",
  "disabled",
  "checked",
  "selected",
  "visited",
  "first",
  "last",
  "odd",
  "even"
];

const stateSelectors: Record<string, string> = {
  hover: ":hover",
  focus: ":focus",
  active: ":active",
  disabled: ":disabled",
  checked: ":checked",
  selected: '[aria-selected="true"]',
  visited: ":visited",
  first: ":first-child",
  last: ":last-child",
  odd: ":nth-child(odd)",
  even: ":nth-child(even)"
};

const rules: string[] = [];
const utilityMap = new Map<string, string>();

function shouldAddImportant(name: string): boolean {
  // Radius utilities: rounded, rounded-*, radius-*
  if (
    name === "rounded" ||
    name.startsWith("rounded-") ||
    name.startsWith("radius-") ||
    name.startsWith("rounded-[") ||
    name.startsWith("radius-[")
  ) {
    return true;
  }

  // Margin utilities: m-*, mt-*, mb-*, ms-*, me-*, mx-*, my-*, and negative counterparts
  if (/^-?m[tbeasxy]?-(auto|\d+|\[.+\])$/.test(name)) {
    return true;
  }

  // Padding utilities: p-*, pt-*, pb-*, ps-*, pe-*, px-*, py-*
  if (/^p[tbeasxy]?-(auto|\d+|\[.+\])$/.test(name)) {
    return true;
  }

  return false;
}

function makeImportant(declarations: string): string {
  return declarations
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((decl) => (decl.includes("!important") ? decl : `${decl} !important`))
    .join(";");
}

function add(name: string, declarations: string): void {
  if (utilityMap.has(name)) return;
  const finalDeclarations = shouldAddImportant(name) ? makeImportant(declarations) : declarations;
  utilityMap.set(name, finalDeclarations);
  rules.push(rule(name, finalDeclarations));
}

function addRaw(selector: string, declarations: string): void {
  rules.push(`${selector}{${declarations}}`);
}

function rule(className: string, declarations: string): string {
  return `.${escapeClass(className)}{${declarations}}`;
}

function escapeClass(value: string): string {
  return Array.from(value)
    .map((char, index) => {
      if (/^[a-zA-Z_-]$/.test(char)) return char;
      if (/^[0-9]$/.test(char)) {
        return index === 0 ? `\\${char.charCodeAt(0).toString(16).padStart(6, "0")}` : char;
      }
      return `\\${char}`;
    })
    .join("");
}

function alpha(level: number = 100): number {
  return Number(level) / 100;
}

function colorValue(name: string, level: number = 100): string {
  return `rgb(var(--aksara-${name}) / ${alpha(level)})`;
}

function pct(n: number): string {
  return `${n}%`;
}

function px(n: number): string {
  return `${n}px`;
}

function rem(n: number): string {
  if (n === 0) return "0";
  return `${Number(n.toFixed(4)).toString().replace(/^0\./, ".")}rem`;
}

function negative(value: string): string {
  return value === "0" ? "0" : `-${value}`;
}

function readableText(name: string): string {
  return ["light", "warning", "info"].includes(name) ? "rgb(var(--aksara-dark))" : "rgb(var(--aksara-light))";
}

function solidForeground(name: string): string {
  return name === "light" || name === "tertiary" ? "rgb(var(--aksara-dark))" : "rgb(var(--aksara-light))";
}

const bootstrapSpacers: Record<number, string> = {
  0: "0",
  1: ".25rem",
  2: ".5rem",
  3: "1rem",
  4: "1.5rem",
  5: "3rem"
};

const arbitraryPropertyMap: Record<string, (val: string) => string> = {
  m: (v) => `margin:${v}`,
  mt: (v) => `margin-block-start:${v}`,
  mb: (v) => `margin-block-end:${v}`,
  ms: (v) => `margin-inline-start:${v}`,
  me: (v) => `margin-inline-end:${v}`,
  mx: (v) => `margin-inline:${v}`,
  my: (v) => `margin-block:${v}`,
  p: (v) => `padding:${v}`,
  pt: (v) => `padding-block-start:${v}`,
  pb: (v) => `padding-block-end:${v}`,
  ps: (v) => `padding-inline-start:${v}`,
  pe: (v) => `padding-inline-end:${v}`,
  px: (v) => `padding-inline:${v}`,
  py: (v) => `padding-block:${v}`,
  gap: (v) => `gap:${v}`,
  "row-gap": (v) => `row-gap:${v}`,
  "col-gap": (v) => `column-gap:${v}`,
  g: (v) => `--aksara-gutter-x:${v};--aksara-gutter-y:${v}`,
  gx: (v) => `--aksara-gutter-x:${v}`,
  gy: (v) => `--aksara-gutter-y:${v}`,
  w: (v) => `width:${v}`,
  h: (v) => `height:${v}`,
  "min-w": (v) => `min-width:${v}`,
  "max-w": (v) => `max-width:${v}`,
  "min-h": (v) => `min-height:${v}`,
  "max-h": (v) => `max-height:${v}`,
  top: (v) => `inset-block-start:${v}`,
  bottom: (v) => `inset-block-end:${v}`,
  start: (v) => `inset-inline-start:${v}`,
  end: (v) => `inset-inline-end:${v}`,
  inset: (v) => `inset:${v}`,
  "inset-x": (v) => `inset-inline:${v}`,
  "inset-y": (v) => `inset-block:${v}`,
  "translate-x": (v) => `transform:translateX(${v})`,
  "translate-y": (v) => `transform:translateY(${v})`,
  rotate: (v) => `transform:rotate(${v})`,
  scale: (v) => `transform:scale(${v})`,
  rounded: (v) => `border-radius:${v}`,
  border: (v) => `border-width:${v}`,
  opacity: (v) => `opacity:${v}`,
  z: (v) => `z-index:${v}`,
  leading: (v) => `line-height:${v}`,
  tracking: (v) => `letter-spacing:${v}`,
  text: (v) => (/^(#[0-9a-fA-F]+|rgb|hsl)/.test(v) ? `color:${v}` : `font-size:${v}`),
  bg: (v) => `background-color:${v}`
};

export function resolveArbitrary(utility: string): string | null {
  const match = utility.match(/^(-)?([a-zA-Z0-9_-]+)-\[(.+)\]$/);
  if (!match) return null;
  const isNegative = Boolean(match[1]);
  const prop = match[2];
  let val = match[3];

  if (!arbitraryPropertyMap[prop]) return null;

  if (isNegative && !val.startsWith("-")) {
    val = `-${val}`;
  }

  return arbitraryPropertyMap[prop](val);
}

function addSpacing(): void {
  for (const [key, value] of Object.entries(bootstrapSpacers)) {
    const n = Number(key);
    const inverse = negative(value);

    add(`m-${n}`, `margin:${value}`);
    add(`mt-${n}`, `margin-block-start:${value}`);
    add(`mb-${n}`, `margin-block-end:${value}`);
    add(`ms-${n}`, `margin-inline-start:${value}`);
    add(`me-${n}`, `margin-inline-end:${value}`);
    add(`mx-${n}`, `margin-inline:${value}`);
    add(`my-${n}`, `margin-block:${value}`);
    add(`p-${n}`, `padding:${value}`);
    add(`pt-${n}`, `padding-block-start:${value}`);
    add(`pb-${n}`, `padding-block-end:${value}`);
    add(`ps-${n}`, `padding-inline-start:${value}`);
    add(`pe-${n}`, `padding-inline-end:${value}`);
    add(`px-${n}`, `padding-inline:${value}`);
    add(`py-${n}`, `padding-block:${value}`);
    add(`gap-${n}`, `gap:${value}`);
    add(`row-gap-${n}`, `row-gap:${value}`);
    add(`col-gap-${n}`, `column-gap:${value}`);
    if (n > 0) {
      add(`-m-${n}`, `margin:${inverse}`);
      add(`-mt-${n}`, `margin-block-start:${inverse}`);
      add(`-mb-${n}`, `margin-block-end:${inverse}`);
      add(`-ms-${n}`, `margin-inline-start:${inverse}`);
      add(`-me-${n}`, `margin-inline-end:${inverse}`);
      add(`-mx-${n}`, `margin-inline:${inverse}`);
      add(`-my-${n}`, `margin-block:${inverse}`);
    }
  }
  add("m-auto", "margin:auto");
  add("mt-auto", "margin-block-start:auto");
  add("mb-auto", "margin-block-end:auto");
  add("ms-auto", "margin-inline-start:auto");
  add("me-auto", "margin-inline-end:auto");
  add("mx-auto", "margin-inline:auto");
  add("my-auto", "margin-block:auto");
}

function addSizing(): void {
  [25, 50, 75, 100].forEach((pctVal) => {
    add(`w-${pctVal}`, `width:${pctVal}%`);
    add(`h-${pctVal}`, `height:${pctVal}%`);
  });
  add("mw-100", "max-width:100%");
  add("mh-100", "max-height:100%");
  add("min-vw-100", "min-width:100vw");
  add("min-vh-100", "min-height:100vh");
  add("vw-100", "width:100vw");
  add("vh-100", "height:100vh");
  for (let denominator = 2; denominator <= 6; denominator += 1) {
    for (let numerator = 1; numerator < denominator; numerator += 1) {
      add(`w-${numerator}/${denominator}`, `width:${(numerator / denominator) * 100}%`);
    }
  }
  [0, 10, 20, 25, 30, 33, 40, 50, 60, 66, 70, 75, 80, 90, 100].forEach((n) => {
    add(`h-${n}%`, `height:${pct(n)}`);
    add(`w-${n}%`, `width:${pct(n)}`);
  });
  add("w-full", "width:100%");
  add("h-full", "height:100%");
  add("w-screen", "width:100vw");
  add("h-screen", "height:100vh");
  add("w-auto", "width:auto");
  add("h-auto", "height:auto");
}

function addColors(): void {
  add("bg-transparent", "background-color:transparent");
  add("text-transparent", "color:transparent");
  add("border-transparent", "border-color:transparent");
  add("bg-current", "background-color:currentColor");
  add("text-current", "color:currentColor");
  add("border-current", "border-color:currentColor");
  add("bg-surface", "background-color:var(--aksara-surface)");

  for (const name of Object.keys(colors)) {
    for (let a = 0; a <= 100; a += 1) {
      add(`bg-${name}/${a}`, `background-color:${colorValue(name, a)}`);
      add(`text-${name}/${a}`, `color:${colorValue(name, a)}`);
      add(`border-${name}/${a}`, `border-color:${colorValue(name, a)}`);
      add(`decoration-${name}/${a}`, `text-decoration-color:${colorValue(name, a)}`);
      add(`ring-${name}/${a}`, `--aksara-ring-color:${colorValue(name, a)}`);
    }
    add(`bg-${name}`, `background-color:${colorValue(name)}`);
    add(`text-${name}`, `color:${colorValue(name)}`);
    add(`border-${name}`, `border-color:${colorValue(name)}`);
    add(`decoration-${name}`, `text-decoration-color:${colorValue(name)}`);
    add(`ring-${name}`, `--aksara-ring-color:${colorValue(name)}`);
    add(`accent-${name}`, `accent-color:${colorValue(name)}`);
  }
  add("accent-auto", "accent-color:auto");
  ["body", "subtle", "invert"].forEach((name) => {
    add(`bg-${name}`, `background-color:var(--aksara-bg-${name})`);
    add(`text-${name}`, `color:var(--aksara-text-${name})`);
    add(`border-${name}`, `border-color:var(--aksara-border-${name})`);
  });

  // Bootstrap body variants
  add("bg-base", "background-color:var(--aksara-surface,var(--aksara-bg-body,#ffffff))");
  add("border-base", "border-color:var(--aksara-border,#d7deea)");
  add("bg-body-secondary", "background-color:var(--aksara-bg-body-secondary,var(--aksara-bg-subtle))");
  add(
    "bg-body-tertiary",
    "background-color:var(--aksara-bg-body-tertiary,var(--aksara-surface-muted,var(--aksara-bg-subtle)))"
  );
  add("text-body-secondary", "color:var(--aksara-text-body-secondary,var(--aksara-text-subtle))");
  add("text-body-tertiary", "color:var(--aksara-text-body-tertiary,var(--aksara-text-subtle))");
  add("border-body-secondary", "border-color:var(--aksara-border-secondary,var(--aksara-border-subtle))");
  add("border-body-tertiary", "border-color:var(--aksara-border-tertiary,var(--aksara-border-subtle))");
}

function addBorders(): void {
  add("border", "border:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-top", "border-block-start:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-bottom", "border-block-end:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-start", "border-inline-start:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-end", "border-inline-end:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-x", "border-inline:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-y", "border-block:var(--aksara-border-width,1px) solid var(--aksara-border)");
  for (let n = 0; n <= 20; n += 1) add(`border-${n}`, `border-width:${px(n)};border-style:solid`);
  for (let n = 0; n <= 100; n += 1) {
    add(`rounded-${n}`, `border-radius:${px(n)}`);
    add(`radius-${n}`, `border-radius:${px(n)}`);
  }
  add("rounded", "border-radius:var(--aksara-radius)");
  add("rounded-2xs", "border-radius:var(--aksara-radius-2xs)");
  add("rounded-xs", "border-radius:var(--aksara-radius-xs)");
  add("rounded-sm", "border-radius:var(--aksara-radius-sm)");
  add("rounded-md", "border-radius:var(--aksara-radius-md)");
  add("rounded-lg", "border-radius:var(--aksara-radius)");
  add("rounded-xl", "border-radius:var(--aksara-radius-xl)");
  add("rounded-2xl", "border-radius:var(--aksara-radius-2xl)");
  add("rounded-3xl", "border-radius:var(--aksara-radius-3xl)");
  add("rounded-full", "border-radius:9999px");
  add("rounded-pill", "border-radius:50rem");
  add("rounded-circle", "border-radius:50%");
  add("radius", "border-radius:var(--aksara-radius)");
  add("radius-2xs", "border-radius:var(--aksara-radius-2xs)");
  add("radius-xs", "border-radius:var(--aksara-radius-xs)");
  add("radius-sm", "border-radius:var(--aksara-radius-sm)");
  add("radius-md", "border-radius:var(--aksara-radius-md)");
  add("radius-lg", "border-radius:var(--aksara-radius)");
  add("radius-xl", "border-radius:var(--aksara-radius-xl)");
  add("radius-2xl", "border-radius:var(--aksara-radius-2xl)");
  add("radius-3xl", "border-radius:var(--aksara-radius-3xl)");
  add("radius-full", "border-radius:9999px");

  const directionalRadii: Record<string, [string, string]> = {
    top: ["border-start-start-radius", "border-start-end-radius"],
    bottom: ["border-end-start-radius", "border-end-end-radius"],
    start: ["border-start-start-radius", "border-end-start-radius"],
    end: ["border-start-end-radius", "border-end-end-radius"],
    t: ["border-start-start-radius", "border-start-end-radius"],
    b: ["border-end-start-radius", "border-end-end-radius"],
    s: ["border-start-start-radius", "border-end-start-radius"],
    e: ["border-start-end-radius", "border-end-end-radius"]
  };

  const cornerRadii: Record<string, string> = {
    "top-start": "border-start-start-radius",
    "top-end": "border-start-end-radius",
    "bottom-start": "border-end-start-radius",
    "bottom-end": "border-end-end-radius",
    tl: "border-start-start-radius",
    tr: "border-start-end-radius",
    bl: "border-end-start-radius",
    br: "border-end-end-radius"
  };

  const radiusSizes: Record<string, string> = {
    "0": "0",
    "1": "var(--aksara-radius-xs)",
    "2": "var(--aksara-radius-sm)",
    "3": "var(--aksara-radius-md)",
    "4": "var(--aksara-radius-lg)",
    "5": "var(--aksara-radius-xl)",
    "2xs": "var(--aksara-radius-2xs)",
    xs: "var(--aksara-radius-xs)",
    sm: "var(--aksara-radius-sm)",
    md: "var(--aksara-radius-md)",
    lg: "var(--aksara-radius-lg)",
    xl: "var(--aksara-radius-xl)",
    "2xl": "var(--aksara-radius-2xl)",
    "3xl": "var(--aksara-radius-3xl)",
    full: "9999px",
    pill: "50rem",
    circle: "50%"
  };

  for (const [dir, [p1, p2]] of Object.entries(directionalRadii)) {
    add(`rounded-${dir}`, `${p1}:var(--aksara-radius-md);${p2}:var(--aksara-radius-md)`);
    add(`radius-${dir}`, `${p1}:var(--aksara-radius-md);${p2}:var(--aksara-radius-md)`);
    for (const [size, val] of Object.entries(radiusSizes)) {
      add(`rounded-${dir}-${size}`, `${p1}:${val};${p2}:${val}`);
      add(`radius-${dir}-${size}`, `${p1}:${val};${p2}:${val}`);
    }
  }

  for (const [corner, prop] of Object.entries(cornerRadii)) {
    add(`rounded-${corner}`, `${prop}:var(--aksara-radius-md)`);
    add(`radius-${corner}`, `${prop}:var(--aksara-radius-md)`);
    for (const [size, val] of Object.entries(radiusSizes)) {
      add(`rounded-${corner}-${size}`, `${prop}:${val}`);
      add(`radius-${corner}-${size}`, `${prop}:${val}`);
    }
  }
}

function addDisplayAndPosition(): void {
  Object.entries({
    block: "display:block",
    inline: "display:inline",
    "inline-block": "display:inline-block",
    flex: "display:flex",
    "inline-flex": "display:inline-flex",
    grid: "display:grid",
    "inline-grid": "display:inline-grid",
    hidden: "display:none",
    "d-block": "display:block",
    "d-flex": "display:flex",
    "d-grid": "display:grid",
    "d-none": "display:none",
    "d-inline": "display:inline",
    "d-inline-block": "display:inline-block",
    "d-inline-flex": "display:inline-flex",
    static: "position:static",
    relative: "position:relative",
    absolute: "position:absolute",
    fixed: "position:fixed",
    sticky: "position:sticky",
    "position-static": "position:static",
    "position-relative": "position:relative",
    "position-absolute": "position:absolute",
    "position-fixed": "position:fixed",
    "position-sticky": "position:sticky",
    "sticky-top": "position:sticky;inset-block-start:0;z-index:1020",
    "sticky-bottom": "position:sticky;inset-block-end:0;z-index:1020"
  }).forEach(([name, declarations]) => add(name, declarations));
  for (let n = 0; n <= 100; n += 1) {
    add(`top-${n}`, `inset-block-start:${px(n)}`);
    add(`bottom-${n}`, `inset-block-end:${px(n)}`);
    add(`start-${n}`, `inset-inline-start:${px(n)}`);
    add(`end-${n}`, `inset-inline-end:${px(n)}`);
    add(`inset-${n}`, `inset:${px(n)}`);
    add(`inset-x-${n}`, `inset-inline:${px(n)}`);
    add(`inset-y-${n}`, `inset-block:${px(n)}`);
    add(`-top-${n}`, `inset-block-start:-${px(n)}`);
    add(`-bottom-${n}`, `inset-block-end:-${px(n)}`);
    add(`-start-${n}`, `inset-inline-start:-${px(n)}`);
    add(`-end-${n}`, `inset-inline-end:-${px(n)}`);
    add(`z-${n}`, `z-index:${n}`);
  }
  add("z-auto", "z-index:auto");
  add("top-auto", "inset-block-start:auto");
  add("bottom-auto", "inset-block-end:auto");
  add("start-auto", "inset-inline-start:auto");
  add("end-auto", "inset-inline-end:auto");
  add("inset-auto", "inset:auto");
  add("inset-x-auto", "inset-inline:auto");
  add("inset-y-auto", "inset-block:auto");
}

function addFlexGrid(): void {
  Object.entries({
    "flex-row": "flex-direction:row",
    "flex-col": "flex-direction:column",
    "flex-column": "flex-direction:column",
    "flex-row-reverse": "flex-direction:row-reverse",
    "flex-column-reverse": "flex-direction:column-reverse",
    "flex-wrap": "flex-wrap:wrap",
    "flex-nowrap": "flex-wrap:nowrap",
    "items-start": "align-items:flex-start",
    "items-center": "align-items:center",
    "items-end": "align-items:flex-end",
    "items-stretch": "align-items:stretch",
    "align-items-start": "align-items:flex-start",
    "align-items-center": "align-items:center",
    "align-items-end": "align-items:flex-end",
    "align-items-stretch": "align-items:stretch",
    "align-items-baseline": "align-items:baseline",
    "justify-start": "justify-content:flex-start",
    "justify-center": "justify-content:center",
    "justify-end": "justify-content:flex-end",
    "justify-between": "justify-content:space-between",
    "justify-around": "justify-content:space-around",
    "justify-evenly": "justify-content:space-evenly",
    "justify-content-start": "justify-content:flex-start",
    "justify-content-center": "justify-content:center",
    "justify-content-end": "justify-content:flex-end",
    "justify-content-between": "justify-content:space-between",
    "justify-content-around": "justify-content:space-around",
    "justify-content-evenly": "justify-content:space-evenly",
    "flex-1": "flex:1 1 0%",
    "flex-auto": "flex:1 1 auto",
    "flex-none": "flex:none",
    grow: "flex-grow:1",
    "grow-0": "flex-grow:0",
    shrink: "flex-shrink:1",
    "shrink-0": "flex-shrink:0"
  }).forEach(([name, declarations]) => add(name, declarations));
  add(
    "container",
    "width:100%;max-width:var(--aksara-container-max,1140px);margin-inline:auto;padding-inline:var(--aksara-container-padding,1rem)"
  );
  add("container-fluid", "width:100%;margin-inline:auto;padding-inline:var(--aksara-container-padding,1rem)");
  add(
    "row",
    "--aksara-gutter-x:1rem;--aksara-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1*var(--aksara-gutter-y,0));margin-inline:calc(var(--aksara-gutter-x,1rem)/-2)"
  );
  add("col", "flex:1 0 0%");
  add("col-auto", "flex:0 0 auto;width:auto");
  addRaw(".row-cols-auto > *", "flex:0 0 auto;width:auto");
  for (let n = 1; n <= 6; n += 1) {
    addRaw(`.row-cols-${n} > *`, `flex:0 0 auto;width:${100 / n}%`);
  }
  for (const [key, value] of Object.entries(bootstrapSpacers)) {
    const n = Number(key);
    addRaw(
      `.row.${escapeClass(`gap-${n}`)}`,
      `--aksara-gutter-x:${value};--aksara-gutter-y:${value};column-gap:0;row-gap:0`
    );
    addRaw(`.row.${escapeClass(`col-gap-${n}`)}`, `--aksara-gutter-x:${value};column-gap:0`);
    addRaw(`.row.${escapeClass(`row-gap-${n}`)}`, `--aksara-gutter-y:${value};row-gap:0`);
    add(`g-${n}`, `--aksara-gutter-x:${value};--aksara-gutter-y:${value}`);
    add(`gx-${n}`, `--aksara-gutter-x:${value}`);
    add(`gy-${n}`, `--aksara-gutter-y:${value}`);
  }
  for (let n = 1; n <= 12; n += 1) {
    add(`col-${n}`, `flex:0 0 auto;width:${(n / 12) * 100}%`);
    add(`offset-${n}`, `margin-inline-start:${(n / 12) * 100}%`);
    add(`grid-${n}`, `display:grid;grid-template-columns:repeat(${n},minmax(0,1fr))`);
    add(`span-${n}`, `grid-column:span ${n}/span ${n}`);
  }
}

function addTypography(): void {
  for (let n = 10; n <= 100; n += 1) add(`text-${n}`, `font-size:${rem(n / 16)}`);
  Object.entries({
    "text-xs": "font-size:.75rem",
    "text-sm": "font-size:.875rem",
    "text-md": "font-size:1rem",
    "text-base": "font-size:1rem",
    "text-lg": "font-size:1.125rem",
    "text-xl": "font-size:1.25rem",
    "text-2xl": "font-size:1.5rem",
    "text-3xl": "font-size:1.875rem",
    "text-4xl": "font-size:2.25rem",
    "text-5xl": "font-size:3rem",
    "text-6xl": "font-size:3.75rem",
    "fs-1": "font-size:2.5rem",
    "fs-2": "font-size:2rem",
    "fs-3": "font-size:1.75rem",
    "fs-4": "font-size:1.5rem",
    "fs-5": "font-size:1.25rem",
    "fs-6": "font-size:1rem",
    "fs-7": "font-size:.875rem",
    "fs-8": "font-size:.75rem",
    underline: "text-decoration-line:underline",
    overline: "text-decoration-line:overline",
    "line-through": "text-decoration-line:line-through",
    "no-underline": "text-decoration-line:none",
    "decoration-solid": "text-decoration-style:solid",
    "decoration-double": "text-decoration-style:double",
    "decoration-dotted": "text-decoration-style:dotted",
    "decoration-dashed": "text-decoration-style:dashed",
    "decoration-wavy": "text-decoration-style:wavy",
    uppercase: "text-transform:uppercase",
    lowercase: "text-transform:lowercase",
    capitalize: "text-transform:capitalize",
    "normal-case": "text-transform:none",
    italic: "font-style:italic",
    "not-italic": "font-style:normal",
    "text-start": "text-align:start",
    "text-center": "text-align:center",
    "text-end": "text-align:end",
    "text-justify": "text-align:justify",
    "whitespace-normal": "white-space:normal",
    "whitespace-nowrap": "white-space:nowrap",
    "whitespace-pre": "white-space:pre",
    "whitespace-pre-line": "white-space:pre-line",
    "whitespace-pre-wrap": "white-space:pre-wrap",
    "break-normal": "overflow-wrap:normal;word-break:normal",
    "break-words": "overflow-wrap:break-word",
    "break-all": "word-break:break-all",
    truncate: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap",
    "text-balance": "text-wrap:balance",
    "text-pretty": "text-wrap:pretty",
    "text-wrap": "text-wrap:wrap",
    "text-nowrap": "text-wrap:nowrap",
    "leading-none": "line-height:1",
    "leading-tight": "line-height:1.25",
    "leading-normal": "line-height:1.5",
    "leading-relaxed": "line-height:1.625",
    "leading-loose": "line-height:2",
    "tracking-tight": "letter-spacing:.025em",
    "tracking-normal": "letter-spacing:0",
    "tracking-wide": "letter-spacing:.05em",
    "tracking-wider": "letter-spacing:.1em",
    "tracking-widest": "letter-spacing:.15em"
  }).forEach(([name, declarations]) => add(name, declarations));
  for (let n = 100; n <= 900; n += 100) add(`font-${n}`, `font-weight:${n}`);
  Object.entries({
    "font-sans": 'font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
    "font-serif": "font-family:ui-serif,Georgia,Cambria,serif",
    "font-mono": "font-family:var(--docs-font-mono,ui-monospace,SFMono-Regular,Menlo,monospace)",
    "font-monospace": "font-family:var(--docs-font-mono,ui-monospace,SFMono-Regular,Menlo,monospace)",
    "font-thin": "font-weight:100",
    "font-light": "font-weight:300",
    "font-normal": "font-weight:400",
    "font-medium": "font-weight:500",
    "font-semibold": "font-weight:600",
    "font-bold": "font-weight:700",
    "font-extrabold": "font-weight:800",
    "font-black": "font-weight:900"
  }).forEach(([name, declarations]) => add(name, declarations));
  for (let n = 1; n <= 100; n += 1) add(`leading-${n}`, `line-height:${px(n)}`);
  for (let n = 0; n <= 20; n += 1) add(`tracking-${n}`, `letter-spacing:${n / 100}em`);
}

function addMotionEffectsLayout(): void {
  Object.entries({
    transition:
      "transition-property:color,background-color,border-color,opacity,box-shadow,transform;transition-duration:150ms;transition-timing-function:ease-in-out",
    "transition-fast": "transition-property:all;transition-duration:100ms;transition-timing-function:ease-in-out",
    "transition-slow": "transition-property:all;transition-duration:300ms;transition-timing-function:ease-in-out",
    "ease-linear": "transition-timing-function:linear",
    "ease-in": "transition-timing-function:cubic-bezier(.4,0,1,1)",
    "ease-out": "transition-timing-function:cubic-bezier(0,0,.2,1)",
    "ease-in-out": "transition-timing-function:cubic-bezier(.4,0,.2,1)",
    visible: "visibility:visible",
    invisible: "visibility:hidden",
    "aspect-square": "aspect-ratio:1/1",
    "aspect-video": "aspect-ratio:16/9",
    "object-cover": "object-fit:cover",
    "object-contain": "object-fit:contain",
    "object-fill": "object-fit:fill",
    "resize-none": "resize:none",
    "resize-x": "resize:horizontal",
    "resize-y": "resize:vertical",
    resize: "resize:both",
    "shadow-none": "box-shadow:none",
    "shadow-sm": "box-shadow:0 1px 2px rgb(0 0 0/.08)",
    shadow: "box-shadow:0 1px 3px rgb(0 0 0/.12),0 1px 2px rgb(0 0 0/.08)",
    "shadow-md": "box-shadow:0 4px 6px rgb(0 0 0/.12)",
    "shadow-lg": "box-shadow:0 10px 15px rgb(0 0 0/.14)",
    "shadow-xl": "box-shadow:0 20px 25px rgb(0 0 0/.16)",
    "overflow-auto": "overflow:auto",
    "overflow-hidden": "overflow:hidden",
    "overflow-visible": "overflow:visible",
    "overflow-scroll": "overflow:scroll",
    "overflow-x-auto": "overflow-x:auto",
    "overflow-y-auto": "overflow-y:auto",
    "overflow-x-hidden": "overflow-x:hidden",
    "overflow-y-hidden": "overflow-y:hidden",
    "overscroll-auto": "overscroll-behavior:auto",
    "overscroll-contain": "overscroll-behavior:contain",
    "overscroll-none": "overscroll-behavior:none",
    "overscroll-y-auto": "overscroll-behavior-y:auto",
    "overscroll-y-contain": "overscroll-behavior-y:contain",
    "overscroll-y-none": "overscroll-behavior-y:none",
    "overscroll-x-auto": "overscroll-behavior-x:auto",
    "overscroll-x-contain": "overscroll-behavior-x:contain",
    "overscroll-x-none": "overscroll-behavior-x:none",
    "cursor-auto": "cursor:auto",
    "cursor-default": "cursor:default",
    "cursor-pointer": "cursor:pointer",
    "cursor-wait": "cursor:wait",
    "cursor-text": "cursor:text",
    "cursor-move": "cursor:move",
    "cursor-not-allowed": "cursor:not-allowed",
    "select-none": "user-select:none",
    "select-text": "user-select:text",
    "select-all": "user-select:all",
    "select-auto": "user-select:auto",
    "pointer-events-none": "pointer-events:none",
    "pointer-events-auto": "pointer-events:auto",
    ring: "box-shadow:0 0 0 3px var(--aksara-ring-color,rgb(var(--aksara-primary)/.35))",
    "ring-1": "box-shadow:0 0 0 1px var(--aksara-ring-color,rgb(var(--aksara-primary)/.35))",
    "ring-2": "box-shadow:0 0 0 2px var(--aksara-ring-color,rgb(var(--aksara-primary)/.35))",
    "ring-4": "box-shadow:0 0 0 4px var(--aksara-ring-color,rgb(var(--aksara-primary)/.35))",
    "animate-fade": "animation:aksara-fade .2s ease-in-out",
    "animate-zoom": "animation:aksara-zoom .2s ease-in-out",
    "animate-slide": "animation:aksara-slide .25s ease-in-out",
    "animate-spin": "animation:aksara-spin 1s linear infinite",
    "animate-bounce": "animation:aksara-bounce 1s infinite",
    "animate-pulse": "animation:aksara-pulse 1.5s ease-in-out infinite",
    "backdrop-blur-none": "backdrop-filter:blur(0)",
    "backdrop-blur-sm": "backdrop-filter:blur(4px)",
    "backdrop-blur": "backdrop-filter:blur(8px)",
    "backdrop-blur-md": "backdrop-filter:blur(12px)",
    "backdrop-blur-lg": "backdrop-filter:blur(16px)",
    "backdrop-blur-xl": "backdrop-filter:blur(24px)",
    "backdrop-blur-2xl": "backdrop-filter:blur(40px)",
    "backdrop-saturate-50": "backdrop-filter:saturate(50%)",
    "backdrop-saturate-100": "backdrop-filter:saturate(100%)",
    "backdrop-saturate-150": "backdrop-filter:saturate(150%)",
    "backdrop-saturate-200": "backdrop-filter:saturate(200%)",
    "blur-none": "filter:blur(0)",
    "blur-sm": "filter:blur(4px)",
    blur: "filter:blur(8px)",
    "blur-md": "filter:blur(12px)",
    "blur-lg": "filter:blur(16px)",
    "blur-xl": "filter:blur(24px)",
    "scrollbar-none": "scrollbar-width:none;-ms-overflow-style:none",
    "scrollbar-thin": "scrollbar-width:thin",
    "container-inline": "container-type:inline-size",
    "container-normal": "container-type:normal",
    "@container": "container-type:inline-size"
  }).forEach(([name, declarations]) => add(name, declarations));
  addRaw(".scrollbar-none::-webkit-scrollbar", "display:none");
  [75, 100, 150, 200, 300, 500, 700, 1000].forEach((n) => add(`duration-${n}`, `transition-duration:${n}ms`));
  for (let n = 50; n <= 150; n += 1) add(`scale-${n}`, `transform:scale(${n / 100})`);
  [0, 45, 90, 180].forEach((n) => add(`rotate-${n}`, `transform:rotate(${n}deg)`));
  for (let n = 0; n <= 100; n += 1) {
    add(`translate-x-${n}`, `transform:translateX(${px(n)})`);
    add(`translate-y-${n}`, `transform:translateY(${px(n)})`);
    add(`skew-x-${n}`, `transform:skewX(${n}deg)`);
    add(`skew-y-${n}`, `transform:skewY(${n}deg)`);
    add(`opacity-${n}`, `opacity:${n / 100}`);
  }
}

function addScrollbars(): void {
  addRaw("*", "scrollbar-width:thin;scrollbar-color:var(--aksara-scrollbar-thumb) var(--aksara-scrollbar-track)");
  addRaw("*::-webkit-scrollbar", "width:.75rem;height:.75rem");
  addRaw("*::-webkit-scrollbar-track", "background:var(--aksara-scrollbar-track)");
  addRaw(
    "*::-webkit-scrollbar-thumb",
    "border:3px solid var(--aksara-scrollbar-track);border-radius:9999px;background:var(--aksara-scrollbar-thumb)"
  );
  addRaw("*::-webkit-scrollbar-thumb:hover", "background:var(--aksara-scrollbar-thumb-hover)");
  addRaw("*::-webkit-scrollbar-corner", "background:transparent");
}

function addComponents(): void {
  add(
    "btn",
    "display:inline-flex;align-items:center;justify-content:center;gap:.5rem;min-height:2.375rem;border:1px solid transparent;border-radius:var(--aksara-radius-sm);padding:.5rem .875rem;font:inherit;font-weight:650;line-height:1.25;text-decoration:none;cursor:pointer;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,transform .15s ease-in-out"
  );
  add("btn-sm", "min-height:1.75rem;padding:.25rem .5rem;font-size:.8125rem");
  add("btn-lg", "min-height:2.875rem;padding:.75rem 1.125rem;font-size:1.0625rem");
  add("btn-block", "display:flex;width:100%");
  add("btn-icon", "inline-size:2.375rem;block-size:2.375rem;padding:0");
  addRaw(".btn-sm.btn-icon", "inline-size:1.75rem;block-size:1.75rem");
  addRaw(".btn-lg.btn-icon", "inline-size:2.875rem;block-size:2.875rem");
  add("btn-ghost", "color:var(--aksara-text-body);background:transparent;border-color:transparent");
  add("btn-group", "display:inline-flex;vertical-align:middle");
  add(
    "btn-group-vertical",
    "display:inline-flex;flex-direction:column;align-items:flex-start;justify-content:center;vertical-align:middle"
  );
  add("btn-group-sm", "font-size:.8125rem");
  add("btn-group-lg", "font-size:1.0625rem");
  add("btn-toolbar", "display:flex;flex-wrap:wrap;justify-content:flex-start;gap:.5rem");
  addRaw(".btn-group>.btn,.btn-group-vertical>.btn", "position:relative;flex:1 1 auto;border-radius:0");
  addRaw(".btn-group>.btn+.btn", "margin-inline-start:-1px");
  addRaw(".btn-group-vertical>.btn+.btn", "margin-block-start:-1px;margin-inline-start:0");
  addRaw(
    ".btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:focus-visible,.btn-group>.btn:active,.btn-group-vertical>.btn:hover,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:focus-visible,.btn-group-vertical>.btn:active",
    "z-index:1"
  );
  addRaw(
    ".btn-group>.btn:first-child",
    "border-start-start-radius:var(--aksara-radius-sm);border-end-start-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".btn-group>.btn:last-child",
    "border-start-end-radius:var(--aksara-radius-sm);border-end-end-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".btn-group-vertical>.btn:first-child",
    "border-start-start-radius:var(--aksara-radius-sm);border-start-end-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".btn-group-vertical>.btn:last-child",
    "border-end-start-radius:var(--aksara-radius-sm);border-end-end-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".btn-group-sm>.btn,.btn-group-sm>.btn-group>.btn,.btn-group-sm>.btn-group-vertical>.btn",
    "min-height:1.75rem;padding:.25rem .5rem;font-size:.8125rem"
  );
  addRaw(
    ".btn-group-sm>.btn-icon,.btn-group-sm>.btn.btn-icon,.btn-group-sm>.btn-group>.btn-icon,.btn-group-sm>.btn-group>.btn.btn-icon,.btn-group-sm>.btn-group-vertical>.btn-icon,.btn-group-sm>.btn-group-vertical>.btn.btn-icon",
    "inline-size:1.75rem;block-size:1.75rem"
  );
  addRaw(
    ".btn-group-lg>.btn,.btn-group-lg>.btn-group>.btn,.btn-group-lg>.btn-group-vertical>.btn",
    "min-height:2.875rem;padding:.75rem 1.125rem;font-size:1.0625rem"
  );
  addRaw(
    ".btn-group-lg>.btn-icon,.btn-group-lg>.btn.btn-icon,.btn-group-lg>.btn-group>.btn-icon,.btn-group-lg>.btn-group>.btn.btn-icon,.btn-group-lg>.btn-group-vertical>.btn-icon,.btn-group-lg>.btn-group-vertical>.btn.btn-icon",
    "inline-size:2.875rem;block-size:2.875rem"
  );
  addRaw(".btn:focus-visible", "outline:0;box-shadow:none");
  addRaw(".btn-ghost:hover", "background:var(--aksara-bg-subtle)");
  for (const name of Object.keys(colors)) {
    add(
      `btn-${name}`,
      `color:${solidForeground(name)};background-color:${colorValue(name)};border-color:${colorValue(name)}`
    );
    add(
      `btn-outline-${name}`,
      `color:${colorValue(name)};background-color:transparent;border-color:${colorValue(name)}`
    );
    add(
      `btn-soft-${name}`,
      `color:${colorValue(name)};background-color:${colorValue(name, 12)};border-color:${colorValue(name, 18)}`
    );
    addRaw(`.btn-${name}:hover`, `background-color:${colorValue(name, 88)};border-color:${colorValue(name, 88)}`);
    addRaw(
      `.btn-outline-${name}:hover`,
      `color:${solidForeground(name)};background-color:${colorValue(name)};border-color:${colorValue(name)}`
    );
  }
  add(
    "card",
    "background:var(--aksara-surface);color:var(--aksara-text-body);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden;box-shadow:var(--aksara-shadow-sm)"
  );
  add("card-elevated", "box-shadow:var(--aksara-shadow-md)");
  add("card-flat", "box-shadow:none");
  add("card-img", "display:block;width:100%;object-fit:cover");
  add("card-title", "margin:0 0 .375rem;font-weight:800;line-height:1.2");
  add("card-text", "margin:0;color:var(--aksara-text-subtle)");
  add("card-header", "padding:1rem;font-weight:700");
  add("card-body", "padding:1rem");
  add("card-footer", "padding:1rem");
  add("bento-grid", "display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:1.25rem");
  add("bento-grid-2", "display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:1.25rem");
  add("bento-grid-3", "display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:1.25rem");
  add("bento-grid-4", "display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:1.25rem");
  addRaw(
    "@media(min-width:48rem)",
    ".bento-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.bento-grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}.bento-grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}.bento-grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}"
  );
  add(
    "bento-card",
    "position:relative;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;background:var(--aksara-surface);color:var(--aksara-text-body);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-2xl);padding:1.5rem;transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease"
  );
  addRaw(
    ".bento-card:hover",
    "box-shadow:var(--aksara-shadow-md);border-color:var(--aksara-border);transform:translateY(-2px)"
  );
  add("bento-col-1", "grid-column:span 1/span 1");
  add("bento-col-2", "grid-column:span 1/span 1");
  add("bento-col-3", "grid-column:span 1/span 1");
  add("bento-col-4", "grid-column:span 1/span 1");
  add("bento-row-1", "grid-row:span 1/span 1");
  add("bento-row-2", "grid-row:span 1/span 1");
  add("bento-row-3", "grid-row:span 1/span 1");
  addRaw(
    "@media(min-width:48rem)",
    ".bento-col-2{grid-column:span 2/span 2}.bento-col-3{grid-column:span 3/span 3}.bento-col-4{grid-column:span 4/span 4}.bento-row-2{grid-row:span 2/span 2}.bento-row-3{grid-row:span 3/span 3}"
  );
  add(
    "bento-featured",
    "background:linear-gradient(135deg,var(--aksara-surface),var(--aksara-bg-subtle));border-color:rgb(var(--aksara-primary)/.35);box-shadow:0 0 30px rgb(var(--aksara-primary)/.08)"
  );
  add("bento-header", "display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1rem");
  add("bento-title", "margin:0;font-size:1.25rem;font-weight:700;line-height:1.3");
  add("bento-subtitle", "margin:.25rem 0 0;font-size:.875rem;color:var(--aksara-text-subtle);line-height:1.4");
  add("bento-body", "flex:1 1 auto");
  add("bento-footer", "display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:1.25rem");
  add(
    "bento-visual",
    "display:flex;align-items:center;justify-content:center;border-radius:var(--aksara-radius);overflow:hidden;background:var(--aksara-bg-subtle);margin-top:1rem;min-height:120px"
  );
  add(
    "alert",
    "position:relative;padding:1rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
  );
  add("alert-dismissible", "padding-inline-end:3rem");
  add("alert-title", "margin:0 0 .25rem;font-weight:700");
  add("alert-link", "font-weight:700;color:inherit;text-decoration:underline;text-underline-offset:.16em");
  add(
    "badge",
    "display:inline-flex;align-items:center;gap:.25rem;border-radius:9999px;padding:.25rem .55rem;font-size:.75em;font-weight:750;line-height:1;background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
  );
  add("badge-dot", "inline-size:.5rem;block-size:.5rem;border-radius:9999px;background:currentColor;padding:0");
  add(
    "list-group",
    "display:flex;flex-direction:column;margin:0;padding:0;list-style:none;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden;background:var(--aksara-surface)"
  );
  add("list-group-flush", "border:0;border-radius:0;overflow:visible");
  add(
    "list-group-item",
    "display:block;padding:1rem;border-block-end:1px solid var(--aksara-border-subtle);color:var(--aksara-text-body);text-decoration:none;background:var(--aksara-surface)"
  );
  add(
    "list-group-item-action",
    "width:100%;border-inline:0;border-block-start:0;text-align:start;cursor:pointer;transition:background-color .15s ease,color .15s ease"
  );
  add("list-group-title", "display:block;margin:0;font-weight:800;color:var(--aksara-text-body);line-height:1.35");
  add(
    "list-group-subtitle",
    "display:block;margin:.25rem 0 0;color:var(--aksara-text-subtle);font-size:.875rem;line-height:1.45"
  );
  addRaw(".list-group-item:last-child", "border-block-end:0");
  addRaw(
    ".list-group-item.active",
    "background:rgb(var(--aksara-primary)/.12);color:rgb(var(--aksara-primary));font-weight:700"
  );
  addRaw(".list-group-item.active .list-group-title,.list-group-item.active .list-group-subtitle", "color:inherit");
  addRaw(".list-group-item-action:hover,.list-group-item-action:focus", "background:var(--aksara-bg-subtle);outline:0");
  addRaw(".list-group-item.disabled,.list-group-item:disabled", "opacity:.56;pointer-events:none");
  add("timeline", "position:relative;padding:0;margin:0;list-style:none");
  addRaw(
    ".timeline::before",
    'content:"";position:absolute;inset-block:0;inset-inline-start:.875rem;width:2px;background:var(--aksara-border-subtle)'
  );
  add("timeline-item", "position:relative;display:flex;gap:1rem;margin-bottom:1.5rem");
  addRaw(".timeline-item:last-child", "margin-bottom:0");
  add(
    "timeline-point",
    "position:relative;z-index:1;display:flex;align-items:center;justify-content:center;width:1.75rem;height:1.75rem;border-radius:9999px;background:var(--aksara-surface);border:2px solid rgb(var(--aksara-primary));color:rgb(var(--aksara-primary));flex-shrink:0;box-shadow:0 0 0 3px var(--aksara-surface)"
  );
  add("timeline-content", "flex:1 1 auto;padding-top:.125rem");
  add("timeline-title", "margin:0 0 .25rem;font-size:1rem;font-weight:700;line-height:1.3");
  add("timeline-time", "display:block;font-size:.75rem;color:var(--aksara-text-subtle);margin-bottom:.5rem");
  add(
    "navbar",
    "display:flex;align-items:center;gap:1rem;min-height:3.5rem;padding:.75rem 1rem;border-block-end:1px solid var(--aksara-border-subtle);background:var(--aksara-surface)"
  );
  add("navbar-brand", "font-weight:800;color:var(--aksara-text-body);text-decoration:none");
  add("navbar-nav", "display:flex;align-items:center;gap:.5rem;margin:0;padding:0;list-style:none");
  add(
    "navbar-toggler",
    "display:inline-flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-sm);background:var(--aksara-bg-subtle);color:var(--aksara-text-body);cursor:pointer"
  );
  add("navbar-collapse", "display:flex;align-items:center;gap:1rem");
  add(
    "nav-link",
    "display:inline-flex;align-items:center;border-radius:var(--aksara-radius-sm);padding:.5rem .625rem;color:var(--aksara-text-subtle);text-decoration:none"
  );
  addRaw(
    '.nav-link:hover,.nav-link[aria-current="page"]',
    "color:var(--aksara-text-body);background:var(--aksara-bg-subtle)"
  );
  add("dropdown", "position:relative;display:inline-block");
  add("dropdown-top", "position:relative;display:inline-block");
  add("dropdown-bottom", "position:relative;display:inline-block");
  add("dropdown-start", "position:relative;display:inline-block");
  add("dropdown-end", "position:relative;display:inline-block");
  add(
    "dropdown-menu",
    "position:absolute;z-index:1000;display:none;min-width:12rem;padding:.375rem;margin:.25rem 0 0;list-style:none;background:var(--aksara-surface);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);box-shadow:var(--aksara-shadow-md)"
  );
  addRaw(
    ".dropdown-top .dropdown-menu,.dropdown-menu.dropdown-top",
    "bottom:100%;top:auto;margin-top:0;margin-bottom:.25rem"
  );
  addRaw(
    ".dropdown-start .dropdown-menu,.dropdown-menu.dropdown-start",
    "end:100%;start:auto;top:0;margin-top:0;margin-inline-end:.25rem"
  );
  addRaw(
    ".dropdown-end .dropdown-menu,.dropdown-menu.dropdown-end",
    "start:100%;end:auto;top:0;margin-top:0;margin-inline-start:.25rem"
  );

  addRaw(
    ".dropdown-menu::before,.dropdown-menu::after",
    "content:'';position:absolute;pointer-events:none;border-style:solid"
  );
  addRaw(
    ".dropdown:not(.dropdown-top):not(.dropdown-start):not(.dropdown-end) .dropdown-menu::before,.dropdown-menu.dropdown-bottom::before",
    "bottom:100%;start:1rem;border-width:6px;border-color:transparent transparent var(--aksara-border-subtle) transparent"
  );
  addRaw(
    ".dropdown:not(.dropdown-top):not(.dropdown-start):not(.dropdown-end) .dropdown-menu::after,.dropdown-menu.dropdown-bottom::after",
    "bottom:100%;start:calc(1rem + 1px);border-width:5px;border-color:transparent transparent var(--aksara-surface) transparent"
  );
  addRaw(
    ".dropdown-top .dropdown-menu::before,.dropdown-menu.dropdown-top::before",
    "top:100%;bottom:auto;start:1rem;border-width:6px;border-color:var(--aksara-border-subtle) transparent transparent transparent"
  );
  addRaw(
    ".dropdown-top .dropdown-menu::after,.dropdown-menu.dropdown-top::after",
    "top:100%;bottom:auto;start:calc(1rem + 1px);border-width:5px;border-color:var(--aksara-surface) transparent transparent transparent"
  );
  addRaw(
    ".dropdown-start .dropdown-menu::before,.dropdown-menu.dropdown-start::before",
    "start:100%;top:1rem;border-width:6px;border-color:transparent transparent transparent var(--aksara-border-subtle)"
  );
  addRaw(
    ".dropdown-start .dropdown-menu::after,.dropdown-menu.dropdown-start::after",
    "start:100%;top:calc(1rem + 1px);border-width:5px;border-color:transparent transparent transparent var(--aksara-surface)"
  );
  addRaw(
    ".dropdown-end .dropdown-menu::before,.dropdown-menu.dropdown-end::before",
    "end:100%;top:1rem;border-width:6px;border-color:transparent var(--aksara-border-subtle) transparent transparent"
  );
  addRaw(
    ".dropdown-end .dropdown-menu::after,.dropdown-menu.dropdown-end::after",
    "end:100%;top:calc(1rem + 1px);border-width:5px;border-color:transparent var(--aksara-surface) transparent transparent"
  );
  add(
    "dropdown-item",
    "display:flex;align-items:center;gap:.5rem;width:100%;border:0;border-radius:var(--aksara-radius-md);padding:.5rem .625rem;background:transparent;color:var(--aksara-text-body);text-align:start;text-decoration:none;cursor:pointer"
  );
  add(
    "dropdown-header",
    "padding:.5rem .625rem;color:var(--aksara-text-subtle);font-size:.75rem;font-weight:800;text-transform:uppercase"
  );
  add("dropdown-divider", "height:1px;margin:.375rem 0;background:var(--aksara-border-subtle)");
  addRaw(".dropdown-item:hover,.dropdown-item:focus", "background:var(--aksara-bg-subtle);outline:0");
  addRaw(
    '.dropdown-item[aria-current="true"],.dropdown-item.active',
    "background:rgb(var(--aksara-primary)/.12);color:rgb(var(--aksara-primary))"
  );
  add("dropdown-open", "display:block");
  add("dropdown-menu-sm", "min-width:9rem;padding:.25rem;font-size:.8125rem");
  addRaw(
    ".dropdown-menu-sm .dropdown-item,.dropdown-sm .dropdown-item,.btn-sm~.dropdown-menu .dropdown-item,.form-control-sm~.dropdown-menu .dropdown-item,.form-select-sm~.dropdown-menu .dropdown-item",
    "padding:.3125rem .5rem;font-size:.8125rem;border-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".dropdown-menu-sm .dropdown-item i,.dropdown-menu-sm .dropdown-item .mdi,.btn-sm~.dropdown-menu .dropdown-item i",
    "font-size:.95rem"
  );
  add(
    "modal",
    "position:fixed;inset:0;z-index:1050;display:none;align-items:center;justify-content:center;overflow:hidden;background:var(--aksara-overlay-bg);backdrop-filter:saturate(130%) blur(8px)"
  );
  add("modal-open", "display:flex");
  add(
    "modal-dialog",
    "display:grid;grid-template-rows:auto minmax(0,1fr) auto;width:min(100%,var(--aksara-modal-width,32rem));max-height:calc(100svh - 2rem);overflow:hidden;transform:translate(var(--aksara-modal-x,0),var(--aksara-modal-y,0));background:var(--aksara-bg-body);color:var(--aksara-text-body);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);box-shadow:var(--aksara-shadow-lg)"
  );
  add("modal-sm", "--aksara-modal-width:24rem");
  add("modal-lg", "--aksara-modal-width:48rem");
  add("modal-xl", "--aksara-modal-width:72rem");
  add("modal-fullscreen", "width:100%;height:100%;max-height:100%;border-radius:0");
  add(
    "modal-header",
    "display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem;border-block-end:1px solid var(--aksara-border-subtle)"
  );
  add(
    "modal-title",
    "margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;font-size:1.25rem;font-weight:600;line-height:1.5"
  );
  add("modal-body", "min-height:0;overflow:auto;overscroll-behavior:contain;padding:1rem");
  add(
    "modal-footer",
    "display:flex;align-items:center;justify-content:flex-end;gap:.5rem;padding:1rem;border-block-start:1px solid var(--aksara-border-subtle)"
  );
  add(
    "modal-content",
    "display:grid;grid-template-rows:auto minmax(0,1fr) auto;width:100%;height:100%;max-height:calc(100svh - 2rem);min-height:0;overflow:hidden;background:inherit;color:inherit;border-radius:inherit"
  );
  addRaw(".modal-dialog:has(.modal-content)", "display:flex;flex-direction:column");
  add("modal-dialog-scrollable", "max-height:calc(100svh - 2rem)");
  addRaw(".modal-dialog-scrollable .modal-body", "min-height:0;overflow-y:auto;overscroll-behavior:contain");
  addRaw(".modal-header", "cursor:grab;touch-action:none;user-select:none");
  addRaw(".modal-dialog.is-dragging .modal-header", "cursor:grabbing");
  addRaw(
    '.modal[data-modal-draggable="false"] .modal-header,.modal-dialog[data-modal-draggable="false"] .modal-header',
    "cursor:auto;touch-action:auto;user-select:auto"
  );
  add(
    "close",
    "position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;display:inline-flex;align-items:center;justify-content:center;inline-size:2rem;block-size:2rem;flex:0 0 auto;border:0;border-radius:9999px;background:var(--aksara-bg-subtle);color:var(--aksara-text-subtle);cursor:pointer;transition:background-color .15s ease,color .15s ease,transform .15s ease"
  );
  add(
    "modal-close",
    "position:relative;display:inline-flex;align-items:center;justify-content:center;inline-size:2rem;block-size:2rem;flex:0 0 auto;border:0;border-radius:9999px;background:var(--aksara-bg-subtle);color:var(--aksara-text-subtle);cursor:pointer;transition:background-color .15s ease,color .15s ease,transform .15s ease"
  );
  add("close-sm", "inline-size:1.5rem;block-size:1.5rem");
  add("close-lg", "inline-size:2.5rem;block-size:2.5rem");
  addRaw(
    ".close::before,.close::after,.modal-close::before,.modal-close::after",
    'content:"";position:absolute;inline-size:50%;block-size:2px;border-radius:9999px;background:currentColor'
  );
  addRaw(".close::before,.modal-close::before", "transform:rotate(45deg)");
  addRaw(".close::after,.modal-close::after", "transform:rotate(-45deg)");
  addRaw(".close > *,.modal-close > *", "display:none");
  addRaw(
    ".close:hover,.modal-close:hover",
    "background:rgb(var(--aksara-primary)/.12);color:rgb(var(--aksara-primary))"
  );
  addRaw(".close:active,.modal-close:active", "transform:scale(.94)");
  add(
    "tooltip",
    "position:absolute;z-index:1080;max-width:16rem;padding:.375rem .5rem;border-radius:var(--aksara-radius-sm);background:var(--aksara-tooltip-bg);color:var(--aksara-tooltip-text);font-size:.875rem;box-shadow:var(--aksara-shadow-sm)"
  );
  addRaw(".tooltip::after", "content:'';position:absolute;pointer-events:none;border-style:solid");
  addRaw(
    ".tooltip-top::after",
    "top:100%;left:50%;transform:translateX(-50%);border-width:5px;border-color:var(--aksara-tooltip-bg) transparent transparent transparent"
  );
  addRaw(
    ".tooltip-bottom::after",
    "bottom:100%;left:50%;transform:translateX(-50%);border-width:5px;border-color:transparent transparent var(--aksara-tooltip-bg) transparent"
  );
  addRaw(
    ".tooltip-left::after,.tooltip-start::after",
    "left:100%;right:auto;top:50%;transform:translateY(-50%);border-width:5px;border-color:transparent transparent transparent var(--aksara-tooltip-bg)"
  );
  addRaw(
    ".tooltip-right::after,.tooltip-end::after",
    "right:100%;left:auto;top:50%;transform:translateY(-50%);border-width:5px;border-color:transparent var(--aksara-tooltip-bg) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .tooltip-start::after",
    "left:auto;right:100%;border-color:transparent var(--aksara-tooltip-bg) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .tooltip-end::after",
    "right:auto;left:100%;border-color:transparent transparent transparent var(--aksara-tooltip-bg)"
  );

  add(
    "popover",
    "position:absolute;z-index:1070;max-width:20rem;padding:.75rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);background:var(--aksara-surface);box-shadow:var(--aksara-shadow-md)"
  );
  addRaw(".popover::before,.popover::after", "content:'';position:absolute;pointer-events:none;border-style:solid");
  addRaw(
    ".popover-top::before",
    "top:100%;left:50%;transform:translateX(-50%);border-width:7px;border-color:var(--aksara-border-subtle) transparent transparent transparent"
  );
  addRaw(
    ".popover-top::after",
    "top:100%;left:50%;transform:translateX(-50%);border-width:6px;border-color:var(--aksara-surface) transparent transparent transparent"
  );
  addRaw(
    ".popover-bottom::before",
    "bottom:100%;left:50%;transform:translateX(-50%);border-width:7px;border-color:transparent transparent var(--aksara-border-subtle) transparent"
  );
  addRaw(
    ".popover-bottom::after",
    "bottom:100%;left:50%;transform:translateX(-50%);border-width:6px;border-color:transparent transparent var(--aksara-surface) transparent"
  );
  addRaw(
    ".popover-left::before,.popover-start::before",
    "left:100%;right:auto;top:50%;transform:translateY(-50%);border-width:7px;border-color:transparent transparent transparent var(--aksara-border-subtle)"
  );
  addRaw(
    ".popover-left::after,.popover-start::after",
    "left:100%;right:auto;top:50%;transform:translateY(-50%);border-width:6px;border-color:transparent transparent transparent var(--aksara-surface)"
  );
  addRaw(
    ".popover-right::before,.popover-end::before",
    "right:100%;left:auto;top:50%;transform:translateY(-50%);border-width:7px;border-color:transparent var(--aksara-border-subtle) transparent transparent"
  );
  addRaw(
    ".popover-right::after,.popover-end::after",
    "right:100%;left:auto;top:50%;transform:translateY(-50%);border-width:6px;border-color:transparent var(--aksara-surface) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .popover-start::before",
    "left:auto;right:100%;border-color:transparent var(--aksara-border-subtle) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .popover-start::after",
    "left:auto;right:100%;border-color:transparent var(--aksara-surface) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .popover-end::before",
    "right:auto;left:100%;border-color:transparent transparent transparent var(--aksara-border-subtle)"
  );
  addRaw(
    "[dir='rtl'] .popover-end::after",
    "right:auto;left:100%;border-color:transparent transparent transparent var(--aksara-surface)"
  );
  add(
    "popover-header",
    "margin:-.75rem -.75rem .75rem;padding:.75rem;border-block-end:1px solid var(--aksara-border-subtle);font-weight:800;background:var(--aksara-bg-subtle);border-start-start-radius:var(--aksara-radius-md);border-start-end-radius:var(--aksara-radius-md)"
  );
  add("popover-title", "margin:0 0 .25rem;font-weight:700");
  add("popover-body", "color:var(--aksara-text-subtle)");
  add(
    "accordion",
    "border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden;background:var(--aksara-surface)"
  );
  add("accordion-item", "border-block-end:1px solid var(--aksara-border-subtle)");
  add(
    "accordion-button",
    "display:flex;width:100%;align-items:center;justify-content:space-between;gap:1rem;border:0;background:transparent;padding:1rem;color:var(--aksara-text-body);font:inherit;font-weight:700;text-align:start;cursor:pointer;transition:background-color .2s ease,color .2s ease"
  );
  add(
    "accordion-icon",
    "display:inline-flex;align-items:center;justify-content:center;color:var(--aksara-text-subtle);transition:transform .2s ease,color .2s ease"
  );
  add("accordion-panel", "padding:0 1rem 1rem;color:var(--aksara-text-subtle)");
  addRaw(".accordion-item:last-child", "border-block-end:0");
  addRaw('.accordion-button[aria-expanded="true"]', "background:var(--aksara-bg-subtle)");
  addRaw(
    '.accordion-button[aria-expanded="true"] .accordion-icon',
    "color:var(--aksara-text-body);transform:rotate(180deg)"
  );
  add("tabs", "display:flex;gap:.25rem;border-block-end:1px solid var(--aksara-border-subtle)");
  add(
    "tab",
    "display:inline-flex;align-items:center;border:0;border-end-start-radius:0;border-end-end-radius:0;border-start-start-radius:var(--aksara-radius-sm);border-start-end-radius:var(--aksara-radius-sm);padding:.625rem .875rem;background:transparent;color:var(--aksara-text-subtle);font:inherit;font-weight:700;cursor:pointer"
  );
  add("tab-panel", "padding:1rem 0");
  addRaw('.tab[aria-selected="true"]', "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)");
  add("nav", "display:flex;flex-wrap:wrap;gap:.25rem;margin:0;padding:0;list-style:none");
  add("nav-pills", "border-block-end:0");
  addRaw(
    ".nav-pills .nav-link,.nav-pills .tab",
    "border-radius:9999px;border:1px solid transparent;padding:.5rem .875rem;background:transparent;color:var(--aksara-text-subtle);text-decoration:none"
  );
  addRaw(
    ".nav-pills .nav-link:hover,.nav-pills .tab:hover",
    "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
  );
  addRaw(
    '.nav-pills .nav-link.active,.nav-pills .nav-link[aria-current="true"],.nav-pills .nav-link[aria-current="page"],.nav-pills .tab[aria-selected="true"]',
    "background:rgb(var(--aksara-primary)/.12);border-color:rgb(var(--aksara-primary)/.22);color:rgb(var(--aksara-primary))"
  );
  add(
    "toast",
    "display:none;max-width:24rem;padding:1rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);background:var(--aksara-surface);box-shadow:var(--aksara-shadow-md)"
  );
  add(
    "toast-stack",
    "position:fixed;inset-block-end:1rem;inset-inline-end:1rem;z-index:1090;display:grid;align-content:start;gap:.75rem;width:min(100% - 2rem,24rem)"
  );
  add("toast-top-start", "inset-block-start:1rem;inset-block-end:auto;inset-inline-start:1rem;inset-inline-end:auto");
  add("toast-top-end", "inset-block-start:1rem;inset-block-end:auto;inset-inline-start:auto;inset-inline-end:1rem");
  add(
    "toast-top-center",
    "inset-block-start:1rem;inset-block-end:auto;inset-inline-start:50%;inset-inline-end:auto;transform:translateX(-50%)"
  );
  add(
    "toast-bottom-start",
    "inset-block-start:auto;inset-block-end:1rem;inset-inline-start:1rem;inset-inline-end:auto"
  );
  add("toast-bottom-end", "inset-block-start:auto;inset-block-end:1rem;inset-inline-start:auto;inset-inline-end:1rem");
  add(
    "toast-bottom-center",
    "inset-block-start:auto;inset-block-end:1rem;inset-inline-start:50%;inset-inline-end:auto;transform:translateX(-50%)"
  );
  add(
    "toast-header",
    "display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-block-end:.5rem;font-weight:700"
  );
  add("toast-body", "color:var(--aksara-text-subtle)");
  add("toast-show", "display:block");
  add("collapse", "display:none");
  add("collapse-show", "display:block");
  add("progress", "display:flex;height:1rem;overflow:hidden;border-radius:9999px;background:var(--aksara-bg-subtle)");
  add(
    "progress-bar",
    "display:flex;align-items:center;justify-content:center;overflow:hidden;color:rgb(var(--aksara-light));background:rgb(var(--aksara-primary));font-size:.75rem;font-weight:700;white-space:nowrap;transition:width .3s ease"
  );
  for (const name of Object.keys(colors)) {
    addRaw(
      `.progress-bar.${escapeClass(`bg-${name}`)}`,
      `color:${readableText(name)};background-color:${colorValue(name)}`
    );
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].forEach((level) => {
      addRaw(
        `.progress-bar.${escapeClass(`bg-${name}/${level}`)}`,
        `color:${readableText(name)};background-color:${colorValue(name, level)}`
      );
    });
  }
  add(
    "progress-striped",
    "background-image:linear-gradient(45deg,var(--aksara-progress-stripe) 25%,transparent 25%,transparent 50%,var(--aksara-progress-stripe) 50%,var(--aksara-progress-stripe) 75%,transparent 75%,transparent);background-size:1rem 1rem"
  );
  add("progress-animated", "animation:aksara-progress-stripes 1s linear infinite");
  add(
    "spinner",
    "display:inline-block;inline-size:2rem;block-size:2rem;border:.25rem solid color-mix(in srgb,currentColor 22%,transparent);border-inline-end-color:currentColor;border-radius:9999px;animation:aksara-spin .75s linear infinite"
  );
  add("spinner-sm", "inline-size:1rem;block-size:1rem;border-width:.15rem");
  add(
    "placeholder",
    "display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background:currentColor;opacity:.16"
  );
  add("placeholder-xs", "min-height:.6em");
  add("placeholder-sm", "min-height:.8em");
  add("placeholder-lg", "min-height:1.2em");
  add("placeholder-glow", "animation:aksara-pulse 1.5s ease-in-out infinite");
  add("placeholder-wave", "position:relative;overflow:hidden");
  addRaw(
    ".placeholder-wave::after",
    'position:absolute;inset:0;content:"";transform:translateX(-100%);background:linear-gradient(90deg,transparent,var(--aksara-placeholder-shine),transparent);animation:aksara-placeholder-wave 1.6s linear infinite'
  );
  add(
    "skeleton",
    "display:block;background:var(--aksara-bg-subtle);border-radius:var(--aksara-radius-sm);position:relative;overflow:hidden;animation:aksara-pulse 1.5s ease-in-out infinite"
  );
  add("skeleton-text", "height:.875rem;margin-bottom:.5rem;border-radius:var(--aksara-radius-2xs);width:100%");
  add("skeleton-circle", "border-radius:9999px;flex-shrink:0");
  add("skeleton-rect", "width:100%;height:100%");
  add("skeleton-wave", "position:relative;overflow:hidden");
  addRaw(
    ".skeleton-wave::after",
    'position:absolute;inset:0;content:"";transform:translateX(-100%);background:linear-gradient(90deg,transparent,var(--aksara-placeholder-shine),transparent);animation:aksara-placeholder-wave 1.6s linear infinite'
  );
  add("carousel", "position:relative;overflow:hidden");
  add("carousel-item", "display:block");
  add(
    "carousel-caption",
    "position:absolute;inset-inline:1rem;inset-block-end:1rem;padding:1rem;border-radius:var(--aksara-radius);background:var(--aksara-carousel-caption-bg);color:var(--aksara-on-media)"
  );
  add(
    "carousel-indicators",
    "position:absolute;inset-inline:0;inset-block-end:.75rem;display:flex;justify-content:center;gap:.375rem;margin:0;padding:0;list-style:none"
  );
  add(
    "carousel-indicator",
    "inline-size:.5rem;block-size:.5rem;border:0;border-radius:9999px;background:var(--aksara-carousel-indicator)"
  );
  addRaw('.carousel-indicator[aria-current="true"]', "background:var(--aksara-carousel-indicator-active)");
  add(
    "carousel-control",
    "position:absolute;inset-block-start:50%;transform:translateY(-50%);display:inline-flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:0;border-radius:9999px;background:var(--aksara-carousel-control-bg);color:var(--aksara-on-media);cursor:pointer"
  );
  add("carousel-prev", "inset-inline-start:.75rem");
  add("carousel-next", "inset-inline-end:.75rem");
  add(
    "offcanvas",
    "position:fixed;inset-block:0;inset-inline-start:0;z-index:1045;width:min(100%,20rem);transform:translateX(-100%);transition:transform .2s ease-in-out;background:var(--aksara-surface);border-inline-end:1px solid var(--aksara-border-subtle);box-shadow:var(--aksara-shadow-lg)"
  );
  add(
    "offcanvas-end",
    "inset-inline-start:auto;inset-inline-end:0;transform:translateX(100%);border-inline-start:1px solid var(--aksara-border-subtle);border-inline-end:0"
  );
  add(
    "offcanvas-top",
    "inset-inline:0;inset-block-start:0;inset-block-end:auto;width:100%;height:min(100%,18rem);transform:translateY(-100%);border-block-end:1px solid var(--aksara-border-subtle);border-inline-end:0"
  );
  add(
    "offcanvas-bottom",
    "inset-inline:0;inset-block-start:auto;inset-block-end:0;width:100%;height:min(100%,18rem);transform:translateY(100%);border-block-start:1px solid var(--aksara-border-subtle);border-inline-end:0"
  );
  add(
    "offcanvas-header",
    "display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem;border-block-end:1px solid var(--aksara-border-subtle)"
  );
  add("offcanvas-body", "padding:1rem");
  add("offcanvas-open", "transform:translateX(0)");
  addRaw(
    "[dir='rtl'] .offcanvas",
    "transform:translateX(100%);border-inline-start:1px solid var(--aksara-border-subtle);border-inline-end:0"
  );
  addRaw(
    "[dir='rtl'] .offcanvas-end",
    "transform:translateX(-100%);border-inline-start:0;border-inline-end:1px solid var(--aksara-border-subtle)"
  );
  addRaw("[dir='rtl'] .offcanvas-open", "transform:translateX(0)");
  addRaw("[dir='rtl'] .offcanvas-top", "transform:translateY(-100%)");
  addRaw("[dir='rtl'] .offcanvas-bottom", "transform:translateY(100%)");
  add("table", "width:100%;border-collapse:collapse;vertical-align:top;background:var(--aksara-surface)");
  add("table-responsive", "display:block;width:100%;overflow-x:auto;border-radius:var(--aksara-radius)");
  add(
    "table-bordered",
    "border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden"
  );
  add("table-compact", "font-size:.875rem");
  add("table-striped", "background:var(--aksara-surface)");
  add("table-hover", "background:var(--aksara-surface)");
  addRaw(
    ".table th,.table td",
    "padding:.75rem;border-block-end:1px solid var(--aksara-border-subtle);text-align:start"
  );
  addRaw(".table-compact th,.table-compact td", "padding:.5rem");
  addRaw(".table-bordered th,.table-bordered td", "border:1px solid var(--aksara-border-subtle)");
  addRaw(
    ".table thead th",
    "color:var(--aksara-text-subtle);font-size:.875rem;font-weight:800;background:var(--aksara-bg-subtle)"
  );
  addRaw(".table-striped tbody tr:nth-child(odd)", "background:var(--aksara-bg-subtle)");
  addRaw(".table-hover tbody tr:hover", "background:rgb(var(--aksara-primary)/.08)");
  add(
    "breadcrumb",
    "display:flex;flex-wrap:wrap;align-items:center;gap:.5rem;list-style:none;padding:0;margin:0;color:var(--aksara-text-subtle)"
  );
  add("breadcrumb-item", "display:inline-flex;align-items:center;gap:.5rem");
  addRaw('.breadcrumb-item[aria-current="page"]', "color:var(--aksara-text-body);font-weight:700");
  addRaw(".breadcrumb-item+ .breadcrumb-item::before", "content:'/';color:var(--aksara-border-invert)");
  addRaw(
    ".breadcrumb-dot .breadcrumb-item+ .breadcrumb-item::before",
    "content:'\\2022';font-size:.875em;line-height:1"
  );
  addRaw(
    ".breadcrumb-arrow .breadcrumb-item+ .breadcrumb-item::before",
    "content:'\\203A';font-size:1.15em;line-height:1;transform:none"
  );
  addRaw("[dir='rtl'] .breadcrumb-arrow .breadcrumb-item+ .breadcrumb-item::before", "content:'\\2039'");
  addRaw(".breadcrumb a", "color:inherit;text-decoration:none");
  addRaw(".breadcrumb a:hover", "color:var(--aksara-text-body)");
  add("pagination", "display:flex;gap:.25rem;list-style:none;padding:0;margin:0");
  add(
    "page-link",
    "display:inline-flex;align-items:center;justify-content:center;min-width:2.25rem;height:2.25rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-sm);padding:0 .625rem;background:var(--aksara-surface);color:var(--aksara-text-body);text-decoration:none"
  );
  addRaw(
    '.page-link:hover,.page-link[aria-current="page"]',
    "background:rgb(var(--aksara-primary)/.12);border-color:rgb(var(--aksara-primary)/.24);color:rgb(var(--aksara-primary))"
  );
  addRaw(".page-link.disabled,.page-link:disabled", "opacity:.5;pointer-events:none");
  for (const name of Object.keys(colors)) {
    add(
      `alert-${name}`,
      `color:${colorValue(name)};background-color:${colorValue(name, 10)};border-color:${colorValue(name, 20)}`
    );
    add(`badge-${name}`, `color:${solidForeground(name)};background-color:${colorValue(name)}`);
    add(`badge-soft-${name}`, `color:${colorValue(name)};background-color:${colorValue(name, 12)}`);
    addRaw(
      `.badge-dot.${escapeClass(`text-${name}`)}`,
      `color:${colorValue(name)};background-color:${colorValue(name)}`
    );
    add(`link-${name}`, `color:${colorValue(name)};text-decoration-color:${colorValue(name, 35)}`);
    add(`bg-text-${name}`, `color:${readableText(name)};background-color:${colorValue(name)}`);
    add(
      `toast-${name}`,
      `border-color:${colorValue(name, 24)};border-inline-start:4px solid ${colorValue(name)};background-image:linear-gradient(${colorValue(name, 6)},${colorValue(name, 6)})`
    );
    addRaw(`.toast-${name} .toast-header`, `color:${colorValue(name)}`);
  }
  add(
    "form-control",
    "display:block;width:100%;padding:.5rem .75rem;font:inherit;font-size:1rem;line-height:1.5;color:var(--aksara-text-body);background:var(--aksara-bg-body);border:1px solid var(--aksara-border);border-radius:var(--aksara-radius-sm);height:42px;min-height:42px;box-sizing:border-box;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out"
  );
  add(
    "form-select",
    "display:block;width:100%;padding:.5rem 2.25rem .5rem .75rem;font:inherit;font-size:1rem;line-height:1.5;color:var(--aksara-text-body);background-color:var(--aksara-bg-body);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid var(--aksara-border);border-radius:var(--aksara-radius-sm);height:42px;min-height:42px;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none"
  );
  addRaw("textarea.form-control", "height:auto;min-height:auto");
  addRaw(".form-control::placeholder,.form-select::placeholder", "color:var(--aksara-text-subtle);opacity:1");
  add("form-label", "display:inline-block;margin-block-end:.375rem;font-weight:600");
  add("form-text", "margin-block-start:.25rem;color:var(--aksara-text-subtle);font-size:.875rem");
  add("form-error", "margin-block-start:.25rem;color:rgb(var(--aksara-danger));font-size:.875rem");
  add("form-group", "margin-block-end:1rem");
  add("form-check", "display:flex;align-items:center;gap:.5rem");
  add("form-radio", "display:flex;align-items:center;gap:.5rem");
  add("form-switch", "display:flex;align-items:center;gap:.5rem");
  add("form-file", "display:block;width:100%");
  add("form-range", "width:100%");
  add("input-group", "position:relative;display:flex;align-items:stretch;width:100%");
  add(
    "input-group-text",
    "display:flex;align-items:center;padding:.5rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--aksara-text-subtle);text-align:center;white-space:nowrap;background-color:var(--aksara-bg-subtle);border:1px solid var(--aksara-border);border-radius:0"
  );
  addRaw(
    ".input-group>.form-control,.input-group>.form-select",
    "position:relative;flex:1 1 auto;width:1%;min-width:0;border-radius:0"
  );
  addRaw(
    ".input-group>.btn",
    "position:relative;z-index:2;display:inline-flex;align-items:center;justify-content:center;min-height:0;border-radius:0"
  );
  addRaw(
    ".input-group>:not(:first-child)",
    "margin-inline-start:-1px;border-start-start-radius:0!important;border-end-start-radius:0!important"
  );
  addRaw(".input-group>:not(:last-child)", "border-start-end-radius:0!important;border-end-end-radius:0!important");
  addRaw(
    ".input-group>:first-child",
    "border-start-start-radius:var(--aksara-radius-sm);border-end-start-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".input-group>:last-child",
    "border-start-end-radius:var(--aksara-radius-sm);border-end-end-radius:var(--aksara-radius-sm)"
  );
  addRaw(".input-group>.form-control:focus,.input-group>.form-select:focus", "z-index:3");
  addRaw(".input-group>.btn:focus", "z-index:4");
  add("input-group-sm", "");
  addRaw(
    ".input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn,.input-group>.form-control-sm,.input-group>.form-select-sm,.input-group>.btn-sm",
    "padding:.25rem .5rem;font-size:.875rem;min-height:1.875rem"
  );
  addRaw(
    ".input-group-sm>:first-child,.input-group:has(>.form-control-sm:first-child)>:first-child,.input-group:has(>.btn-sm:first-child)>:first-child",
    "border-start-start-radius:var(--aksara-radius-sm);border-end-start-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".input-group-sm>:last-child,.input-group:has(>.form-control-sm:last-child)>:last-child,.input-group:has(>.btn-sm:last-child)>:last-child",
    "border-start-end-radius:var(--aksara-radius-sm);border-end-end-radius:var(--aksara-radius-sm)"
  );
  add("input-group-lg", "");
  addRaw(
    ".input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn,.input-group>.form-control-lg,.input-group>.form-select-lg,.input-group>.btn-lg",
    "padding:.5rem 1rem;font-size:1.125rem;min-height:2.875rem"
  );
  addRaw(
    ".input-group-lg>:first-child",
    "border-start-start-radius:var(--aksara-radius-md,.5rem);border-end-start-radius:var(--aksara-radius-md,.5rem)"
  );
  addRaw(
    ".input-group-lg>:last-child",
    "border-start-end-radius:var(--aksara-radius-md,.5rem);border-end-end-radius:var(--aksara-radius-md,.5rem)"
  );
  add("is-valid", "border-color:rgb(var(--aksara-success))");
  add("is-invalid", "border-color:rgb(var(--aksara-danger))");
  add(
    "form-control-sm",
    "padding:.25rem .5rem;font-size:.875rem;line-height:1.5;min-height:31px;height:31px;box-sizing:border-box;border-radius:var(--aksara-radius-sm)"
  );
  add(
    "form-select-sm",
    "padding:.25rem 2rem .25rem .5rem;font-size:.875rem;line-height:1.5;min-height:31px;height:31px;box-sizing:border-box;border-radius:var(--aksara-radius-sm);background-position:right .5rem center;background-size:14px 10px"
  );
  add(
    "form-control-md",
    "padding:.5rem .75rem;font-size:1rem;line-height:1.5;min-height:42px;height:42px;box-sizing:border-box"
  );
  add(
    "form-select-md",
    "padding:.5rem 2.25rem .5rem .75rem;font-size:1rem;line-height:1.5;min-height:42px;height:42px;box-sizing:border-box;background-position:right .75rem center;background-size:16px 12px"
  );
  add(
    "form-control-lg",
    "padding:.75rem 1rem;font-size:1.125rem;line-height:1.5;min-height:48px;height:48px;box-sizing:border-box;border-radius:var(--aksara-radius-md,.5rem)"
  );
  add(
    "form-select-lg",
    "padding:.75rem 2.5rem .75rem 1rem;font-size:1.125rem;line-height:1.5;min-height:48px;height:48px;box-sizing:border-box;border-radius:var(--aksara-radius-md,.5rem);background-position:right 1rem center;background-size:18px 14px"
  );
  addRaw(
    ".form-control:focus,.form-select:focus",
    "color:var(--aksara-text-body);background:var(--aksara-surface);border-color:rgb(var(--aksara-primary));box-shadow:none;outline:0"
  );
  addRaw(
    ".form-check,.form-switch",
    "display:inline-flex;align-items:center;gap:.5rem;min-height:38px;line-height:1.5;margin-bottom:0"
  );
  addRaw(
    ".form-check-sm,.form-check.form-check-sm,.form-switch-sm,.form-switch.form-switch-sm",
    "min-height:31px;height:31px;line-height:1.5"
  );
  addRaw(
    ".form-check-lg,.form-check.form-check-lg,.form-switch-lg,.form-switch.form-switch-lg",
    "min-height:48px;height:48px;line-height:1.5"
  );
  addRaw(".form-check-label", "cursor:pointer;color:var(--aksara-text-body);font-size:.875rem;user-select:none");
  addRaw(
    ".form-check-input:not(.form-switch *),.form-check input:not(.form-switch *),.form-radio input",
    "appearance:none;-webkit-appearance:none;position:relative;display:inline-block;width:1.125rem;height:1.125rem;background-color:var(--aksara-surface);border:1.5px solid var(--aksara-border);border-radius:var(--aksara-radius-xs,.25rem);cursor:pointer;outline:0;padding:0;margin:0;vertical-align:middle;flex-shrink:0;transition:background-color .15s ease,border-color .15s ease,box-shadow .15s ease"
  );
  addRaw(
    ".form-check-input:not(.form-switch *):focus,.form-check input:not(.form-switch *):focus,.form-radio input:focus",
    "border-color:rgb(var(--aksara-primary));box-shadow:0 0 0 3px rgb(var(--aksara-primary)/.25)"
  );
  addRaw(
    ".form-check-input[type='checkbox']:not(.form-switch *):checked,.form-check input[type='checkbox']:not(.form-switch *):checked,.form-check-input:not([type]):not(.form-switch *):checked",
    "background-color:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' d='M3 8.5l3.5 3.5 6.5-6.5'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;background-size:100% 100%"
  );
  addRaw(
    ".form-check-input[type='checkbox']:not(.form-switch *):indeterminate,.form-check input[type='checkbox']:not(.form-switch *):indeterminate",
    "background-color:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' d='M3.5 8h9'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;background-size:100% 100%"
  );
  addRaw(".form-check-input[type='radio'],.form-radio input[type='radio'],.form-radio input", "border-radius:50%");
  addRaw(
    ".form-check-input[type='radio']:checked,.form-radio input[type='radio']:checked,.form-radio input:checked",
    "background-color:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3ccircle cx='8' cy='8' r='3.5' fill='%23ffffff'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;background-size:100% 100%"
  );
  addRaw(
    ".form-check-input:disabled,.form-check input:disabled,.form-radio input:disabled",
    "opacity:.5;cursor:not-allowed"
  );
  addRaw(
    ".form-switch input,.form-switch .form-check-input",
    "appearance:none;-webkit-appearance:none;position:relative;display:inline-block;width:2.25rem;height:1.25rem;border-radius:9999px;background-color:var(--aksara-border);cursor:pointer;outline:0;border:0;padding:0;margin:0;vertical-align:middle;flex-shrink:0;transition:background-color .2s ease,border-color .2s ease"
  );
  addRaw(
    ".form-switch input::before,.form-switch .form-check-input::before",
    'content:"";position:absolute;top:2px;left:2px;width:calc(1.25rem - 4px);height:calc(1.25rem - 4px);border-radius:50%;background-color:#ffffff;box-shadow:0 1px 3px rgba(0,0,0,.2);transition:transform .2s ease'
  );
  addRaw(
    ".form-switch input:checked,.form-switch .form-check-input:checked",
    "background-color:rgb(var(--aksara-primary))"
  );
  addRaw(
    ".form-switch input:checked::before,.form-switch .form-check-input:checked::before",
    "transform:translateX(1rem)"
  );
  addRaw(".form-switch input:disabled,.form-switch .form-check-input:disabled", "opacity:.5;cursor:not-allowed");
  addRaw(".form-range", "accent-color:rgb(var(--aksara-primary))");
  add("ratio", "--aksara-aspect-ratio:56.25%;position:relative;width:100%");
  addRaw(".ratio::before", 'display:block;padding-block-start:var(--aksara-aspect-ratio,56.25%);content:""');
  addRaw(".ratio>*", "position:absolute;inset:0;width:100%;height:100%");
  add("ratio-1x1", "--aksara-aspect-ratio:100%");
  add("ratio-4x3", "--aksara-aspect-ratio:75%");
  add("ratio-16x9", "--aksara-aspect-ratio:56.25%");
  add("ratio-21x9", "--aksara-aspect-ratio:42.8571428571%");
  add(
    "hstack",
    "--aksara-stack-gap:1rem;display:flex;flex-direction:row;align-items:center;gap:var(--aksara-stack-gap,1rem)"
  );
  add(
    "vstack",
    "--aksara-stack-gap:1rem;display:flex;flex-direction:column;align-self:stretch;gap:var(--aksara-stack-gap,1rem)"
  );
  add(
    "vr",
    "display:inline-block;align-self:stretch;width:1px;min-height:1em;background:var(--aksara-border);opacity:.85"
  );
  add("stretched-link", "position:static");
  addRaw(".stretched-link::after", 'position:absolute;inset:0;z-index:1;content:""');
  add(
    "visually-hidden",
    "position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important"
  );
  add("clearfix", "display:flow-root");
  add("media-grid", "display:grid;width:100%;gap:.5rem");
  add(
    "media-grid-item",
    "position:relative;overflow:hidden;border-radius:var(--aksara-radius);background:var(--aksara-bg-subtle)"
  );
  addRaw(".media-grid-item img", "width:100%;height:100%;object-fit:cover;display:block");
  add("media-grid-1", "grid-template-columns:1fr;max-height:480px");
  add("media-grid-2", "grid-template-columns:repeat(2,1fr);height:280px");
  add("media-grid-3", "grid-template-columns:2fr 1fr;grid-template-rows:repeat(2,1fr);height:320px");
  addRaw(".media-grid-3 .media-grid-item-1", "grid-row:span 2");
  add("media-grid-4", "grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);height:320px");
  add(
    "media-grid-overlay",
    "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.55)"
  );
  add(
    "avatar",
    "display:inline-flex;align-items:center;justify-content:center;position:relative;width:2.5rem;height:2.5rem;font-size:1rem;font-weight:700;line-height:1;overflow:visible;user-select:none;flex-shrink:0"
  );
  add("avatar-xs", "width:1.5rem;height:1.5rem;font-size:.6875rem");
  add("avatar-sm", "width:2rem;height:2rem;font-size:.8125rem");
  add("avatar-md", "width:2.5rem;height:2.5rem;font-size:1rem");
  add("avatar-lg", "width:3.25rem;height:3.25rem;font-size:1.25rem");
  add("avatar-xl", "width:4rem;height:4rem;font-size:1.5rem");
  add("avatar-2xl", "width:6rem;height:6rem;font-size:2.25rem");
  add("avatar-3xl", "width:7.5rem;height:7.5rem;font-size:3rem");
  addRaw(".avatar img,.avatar-img", "width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit");
  addRaw(
    ".avatar .avatar-initials,.avatar .avatar-fallback",
    "width:100%;height:100%;display:inline-flex;align-items:center;justify-content:center;border-radius:inherit"
  );
  addRaw(
    ".avatar-status",
    "position:absolute;bottom:0;right:0;border-radius:9999px;border:2px solid var(--aksara-bg-body);z-index:2;box-sizing:content-box"
  );
  addRaw(
    ".avatar.rounded-full .avatar-status,.avatar.rounded-circle .avatar-status",
    "bottom:14.6%;right:14.6%;transform:translate(50%,50%)"
  );
  addRaw(".avatar-xs .avatar-status", "width:.375rem;height:.375rem;border-width:1px");
  addRaw(".avatar-sm .avatar-status", "width:.4375rem;height:.4375rem;border-width:1.5px");
  addRaw(
    '.avatar-md .avatar-status,.avatar:not([class*="avatar-"]) .avatar-status',
    "width:.5625rem;height:.5625rem;border-width:1.5px"
  );
  addRaw(".avatar-lg .avatar-status", "width:.6875rem;height:.6875rem;border-width:2px");
  addRaw(".avatar-xl .avatar-status", "width:.8125rem;height:.8125rem;border-width:2px");
  addRaw(".avatar-2xl .avatar-status", "width:1.125rem;height:1.125rem;border-width:3px");
  addRaw(".avatar-3xl .avatar-status", "width:1.375rem;height:1.375rem;border-width:3.5px");
  addRaw(".avatar-group .avatar", "border:2px solid var(--aksara-bg-body);background:var(--aksara-bg-subtle)");
  addRaw(".avatar-group .avatar:not(:first-child)", "margin-inline-start:-.625rem");

  // ── Sidebar Nav ────────────────────────────────────────────────────────────
  add("sidebar-nav", "display:flex;flex-direction:column;gap:.125rem;margin:0;list-style:none");
  add(
    "sidebar-nav-item",
    "display:flex;align-items:center;gap:.625rem;width:100%;border:0;border-radius:var(--aksara-radius-sm);padding:.5625rem .75rem;background:transparent;color:var(--aksara-text-subtle);font:inherit;font-weight:600;font-size:.9375rem;text-align:start;text-decoration:none;cursor:pointer;transition:background-color .15s ease,color .15s ease;line-height:1.35"
  );
  add(
    "sidebar-nav-header",
    "display:block;padding:.625rem .75rem .25rem;font-size:.6875rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--aksara-text-subtle);opacity:.7;user-select:none"
  );
  add(
    "sidebar-nav-icon",
    "display:inline-flex;align-items:center;justify-content:center;width:1.375rem;height:1.375rem;flex-shrink:0;font-size:1.0625rem"
  );
  add("sidebar-nav-label", "flex:1 1 auto;min-width:0");
  add(
    "sidebar-nav-badge",
    "display:inline-flex;align-items:center;justify-content:center;min-width:1.25rem;height:1.25rem;border-radius:9999px;padding:0 .3125rem;font-size:.6875rem;font-weight:800;background:rgb(var(--aksara-primary)/.12);color:rgb(var(--aksara-primary));flex-shrink:0"
  );
  add(
    "sidebar-nav-brand",
    "display:flex;align-items:center;gap:.625rem;padding:.875rem .75rem;margin-block-end:.25rem"
  );
  add("sidebar-nav-brand-title", "font-weight:800;font-size:.9375rem;line-height:1.25;color:var(--aksara-text-body)");
  add(
    "sidebar-nav-brand-subtitle",
    "display:block;font-size:.75rem;font-weight:400;color:var(--aksara-text-subtle);margin-block-start:.0625rem;line-height:1.3"
  );
  addRaw(".sidebar-nav-item:hover", "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)");
  addRaw(
    '.sidebar-nav-item.active,.sidebar-nav-item[aria-selected="true"]',
    "background:var(--aksara-bg-subtle);color:var(--aksara-text-body);font-weight:700"
  );
  addRaw(".sidebar-nav-item:disabled,.sidebar-nav-item.disabled", "opacity:.5;pointer-events:none");

  // ── Sidebar Layout ─────────────────────────────────────────────────────────
  add("sidebar-layout", "display:flex;min-height:0;gap:0");
  add("sidebar-pane", "flex-shrink:0;width:14rem;border-inline-end:1px solid var(--aksara-border-subtle)");
  add("sidebar-content", "flex:1 1 auto;min-width:0;overflow:auto");

  // ── Empty State ────────────────────────────────────────────────────────────
  add("empty-state", "padding:3rem 1.5rem;text-align:center;margin:1rem auto;max-width:32rem");
  add(
    "empty-state-icon-wrap",
    "display:inline-flex;align-items:center;justify-content:center;border-radius:9999px;background:var(--aksara-bg-subtle);margin-inline:auto;margin-block-end:1rem"
  );
  add("empty-state-title", "font-weight:700;font-size:1.125rem;color:var(--aksara-text-body);margin-block-end:.5rem");
  add("empty-state-desc", "color:var(--aksara-text-subtle);font-size:.875rem;line-height:1.5;margin-block-end:1.25rem");
  add("empty-state-actions", "display:flex;align-items:center;justify-content:center;gap:.5rem;flex-wrap:wrap");

  // ── User Item / Row ────────────────────────────────────────────────────────
  add(
    "user-item",
    "display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;border-block-end:1px solid var(--aksara-border-subtle);transition:background .15s ease"
  );
  add("user-item-info", "flex:1 1 auto;min-width:0");
  add("user-item-name", "font-weight:700;font-size:.875rem;color:var(--aksara-text-body);line-height:1.3");
  add("user-item-subtitle", "color:var(--aksara-text-subtle);font-size:.8125rem;margin-block-start:.125rem");

  // ── Dropdown Select ────────────────────────────────────────────────────────
  add("aksara-select-dropdown", "position:relative");
  addRaw(".aksara-select-dropdown .dropdown-select-menu", "min-width:100%;max-height:18rem;overflow-y:auto");
  addRaw(".aksara-select-dropdown .select-current-label", "text-overflow:ellipsis;overflow:hidden;white-space:nowrap");

  // ── Toast Floating Container ───────────────────────────────────────────────
  add(
    "aksara-toast-container",
    "position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);z-index:1090;pointer-events:none;display:flex;flex-direction:column;gap:.5rem;align-items:center"
  );
  add(
    "aksara-toast-pill",
    "display:flex;align-items:center;gap:.5rem;padding:.5rem 1.15rem;border-radius:9999px;font-size:.875rem;font-weight:500;pointer-events:auto;background:rgba(15,23,42,.92);color:#fff;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.15);box-shadow:0 10px 25px -5px rgba(0,0,0,.35);transition:opacity .25s ease,transform .25s ease"
  );
}

function cssVars(source: Record<string, string>): string {
  return Object.entries(source)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
}

function preflight(): string {
  const vars = Object.entries(colors)
    .map(([name, value]) => {
      const commaSeparated = value.split(" ").join(", ");
      const hex = hexColors[name] ?? "";
      return `--aksara-${name}:${value};--aksara-${name}-rgb:${commaSeparated};${hex ? `--aksara-${name}-hex:${hex};` : ""}`;
    })
    .join("");
  return `:root{${vars}${cssVars(baseTokens)}font-size:1rem}:root,[data-theme="light"],.light{${cssVars(lightTheme)}color-scheme:light}[data-theme="dark"],.dark{${cssVars(darkTheme)}color-scheme:dark}*,*::before,*::after{box-sizing:border-box}html{font-size:1rem}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:1rem;background:var(--aksara-bg-body);color:var(--aksara-text-body);line-height:1.5}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:600;line-height:1.25;color:inherit}h1{font-size:2rem}h2{font-size:1.75rem}h3{font-size:1.5rem}h4{font-size:1.25rem}h5{font-size:1.125rem}h6{font-size:1rem}form{margin:0}button,input,textarea,select{font:inherit}button:disabled,.disabled{pointer-events:none;opacity:.58}img,svg,video{max-width:100%;height:auto}.row>*{box-sizing:border-box;flex-shrink:0;width:100%;max-width:100%;padding-inline:calc(var(--aksara-gutter-x,1rem)/2);margin-top:var(--aksara-gutter-y,0)}[hidden]{display:none!important}@keyframes aksara-fade{from{opacity:0}to{opacity:1}}@keyframes aksara-zoom{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes aksara-slide{from{opacity:0;transform:translateY(.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes aksara-spin{to{transform:rotate(360deg)}}@keyframes aksara-progress-stripes{from{background-position-x:1rem}to{background-position-x:0}}@keyframes aksara-bounce{0%,100%{transform:translateY(-15%)}50%{transform:translateY(0)}}@keyframes aksara-pulse{0%,100%{opacity:1}50%{opacity:.5}}@keyframes aksara-placeholder-wave{100%{transform:translateX(100%)}}`;
}

interface ParsedClass {
  theme: string | null;
  breakpoint: string | null;
  state: string | null;
  utility: string;
}

function parseClassName(className: string): ParsedClass {
  const parts = className.split(":");
  const utility = parts.pop()!;
  let position = 0;
  const parsed: ParsedClass = { theme: null, breakpoint: null, state: null, utility };
  for (const variant of parts) {
    let next: number | null = null;
    if (themeVariants.includes(variant)) next = 1;
    if (breakpointVariants.includes(variant)) next = 2;
    if (stateVariants.includes(variant)) next = 3;
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

function variantRule(className: string): string {
  const parsed = parseClassName(className);
  let declarations = utilityMap.get(parsed.utility);
  if (!declarations) {
    declarations = resolveArbitrary(parsed.utility) ?? undefined;
    if (declarations) {
      if (shouldAddImportant(parsed.utility)) {
        declarations = makeImportant(declarations);
      }
      utilityMap.set(parsed.utility, declarations);
      rules.push(rule(parsed.utility, declarations));
    }
  }
  if (!declarations) throw new Error(`Unknown utility: ${parsed.utility}`);
  let selector = `.${escapeClass(className)}`;
  if (parsed.state) selector += stateSelectors[parsed.state];
  let output = `${selector}{${declarations}}`;
  if (parsed.theme) {
    const themeSelector =
      parsed.theme === "dark"
        ? `[data-theme="dark"] ${selector},.dark ${selector}`
        : `[data-theme="light"] ${selector},.light ${selector}`;
    output = `${themeSelector}{${declarations}}`;
  }
  if (parsed.breakpoint) output = `@media (min-width:${breakpoints[parsed.breakpoint]}){${output}}`;
  return output;
}

function addArbitraryClass(className: string): boolean {
  if (utilityMap.has(className)) return true;
  try {
    if (className.includes(":")) {
      rules.push(variantRule(className));
      return true;
    }
    const declarations = resolveArbitrary(className);
    if (!declarations) return false;
    add(className, declarations);
    if (className.startsWith("gap-[") || className.startsWith("row-gap-[") || className.startsWith("col-gap-[")) {
      const match = className.match(/^([a-z-]+)-\[(.+)\]$/);
      if (match) {
        const type = match[1];
        const val = match[2];
        if (type === "gap") {
          addRaw(
            `.row.${escapeClass(className)}`,
            `--aksara-gutter-x:${val};--aksara-gutter-y:${val};column-gap:0;row-gap:0`
          );
        } else if (type === "col-gap") {
          addRaw(`.row.${escapeClass(className)}`, `--aksara-gutter-x:${val};column-gap:0`);
        } else if (type === "row-gap") {
          addRaw(`.row.${escapeClass(className)}`, `--aksara-gutter-y:${val};row-gap:0`);
        }
      }
    }
    return true;
  } catch {
    return false;
  }
}

function scanArbitraryClasses(): void {
  const scanDirs = [
    docsContentDir,
    path.join(root, "src/docs"),
    path.join(root, "src/examples"),
    path.join(root, "src/components"),
    path.join(root, "src/tests"),
    path.resolve(root, "../frontend/src"),
    path.resolve(root, "../frontend/index.html")
  ];

  const classRegex = /([a-zA-Z0-9_:-]+-\[[^\]\s"'`]+\])/g;

  function scanFile(filePath: string): void {
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, "utf8");
    let match: RegExpExecArray | null;
    while ((match = classRegex.exec(content)) !== null) {
      addArbitraryClass(match[1]);
    }
  }

  function walkDir(dir: string): void {
    if (!fs.existsSync(dir)) return;
    const stat = fs.statSync(dir);
    if (stat.isFile()) {
      scanFile(dir);
      return;
    }
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== "node_modules" && entry.name !== "dist" && entry.name !== ".git") {
          walkDir(fullPath);
        }
      } else if (entry.isFile() && /\.(ts|js|html|md|css)$/.test(entry.name)) {
        scanFile(fullPath);
      }
    }
  }

  for (const d of scanDirs) {
    walkDir(d);
  }
}

function addVariants(): void {
  const responsive = [
    "col",
    "col-auto",
    ...Array.from({ length: 12 }, (_, i) => `col-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `offset-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `grid-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `span-${i + 1}`),
    ...Array.from({ length: 6 }, (_, i) => `g-${i}`),
    ...Array.from({ length: 6 }, (_, i) => `gx-${i}`),
    ...Array.from({ length: 6 }, (_, i) => `gy-${i}`),
    ...Array.from({ length: 6 }, (_, i) => `gap-${i}`),
    ...Array.from({ length: 6 }, (_, i) => `row-gap-${i}`),
    ...Array.from({ length: 6 }, (_, i) => `col-gap-${i}`),
    "block",
    "flex",
    "grid",
    "hidden",
    "sticky-top",
    "sticky-bottom",
    "position-sticky",
    "position-relative",
    "position-absolute",
    "position-fixed",
    "position-static",
    "d-none",
    "d-block",
    "d-flex",
    "d-inline",
    "d-inline-block",
    "d-inline-flex"
  ];
  for (const bp of breakpointVariants) {
    for (const name of responsive) rules.push(variantRule(`${bp}:${name}`));
  }
  for (const [bp, minWidth] of Object.entries(breakpoints)) {
    rules.push(
      `@media (min-width:${minWidth}){.sticky-${bp}-top,.sticky-top-${bp}{position:sticky;inset-block-start:0;z-index:1020}}`
    );
    rules.push(
      `@media (min-width:${minWidth}){.sticky-${bp}-bottom,.sticky-bottom-${bp}{position:sticky;inset-block-end:0;z-index:1020}}`
    );

    const bsRules: string[] = [
      `.col-${bp}{flex:1 0 0%}`,
      `.col-${bp}-auto{flex:0 0 auto;width:auto}`,
      ...Array.from({ length: 12 }, (_, i) => `.col-${bp}-${i + 1}{flex:0 0 auto;width:${((i + 1) / 12) * 100}%}`),
      ...Array.from({ length: 11 }, (_, i) => `.offset-${bp}-${i + 1}{margin-inline-start:${((i + 1) / 12) * 100}%}`),
      `.offset-${bp}-0{margin-inline-start:0}`,
      `.row-cols-${bp}-auto > *{flex:0 0 auto;width:auto}`,
      ...Array.from({ length: 6 }, (_, i) => `.row-cols-${bp}-${i + 1} > *{flex:0 0 auto;width:${100 / (i + 1)}%}`),
      ...Object.entries(bootstrapSpacers).flatMap(([k, v]) => [
        `.g-${bp}-${k},.gx-${bp}-${k}{--aksara-gutter-x:${v}}`,
        `.g-${bp}-${k},.gy-${bp}-${k}{--aksara-gutter-y:${v}}`,
        `.row.${escapeClass(`gap-${bp}-${k}`)}{--aksara-gutter-x:${v};--aksara-gutter-y:${v};column-gap:0;row-gap:0}`,
        `.row.${escapeClass(`col-gap-${bp}-${k}`)}{--aksara-gutter-x:${v};column-gap:0}`,
        `.row.${escapeClass(`row-gap-${bp}-${k}`)}{--aksara-gutter-y:${v};row-gap:0}`
      ])
    ];
    if (bp === "2xl") {
      bsRules.push(
        `.col-xxl{flex:1 0 0%}`,
        `.col-xxl-auto{flex:0 0 auto;width:auto}`,
        ...Array.from({ length: 12 }, (_, i) => `.col-xxl-${i + 1}{flex:0 0 auto;width:${((i + 1) / 12) * 100}%}`),
        ...Array.from({ length: 11 }, (_, i) => `.offset-xxl-${i + 1}{margin-inline-start:${((i + 1) / 12) * 100}%}`),
        `.offset-xxl-0{margin-inline-start:0}`,
        `.row-cols-xxl-auto > *{flex:0 0 auto;width:auto}`,
        ...Array.from({ length: 6 }, (_, i) => `.row-cols-xxl-${i + 1} > *{flex:0 0 auto;width:${100 / (i + 1)}%}`),
        ...Object.entries(bootstrapSpacers).flatMap(([k, v]) => [
          `.g-xxl-${k},.gx-xxl-${k}{--aksara-gutter-x:${v}}`,
          `.g-xxl-${k},.gy-xxl-${k}{--aksara-gutter-y:${v}}`,
          `.row.${escapeClass(`gap-xxl-${k}`)}{--aksara-gutter-x:${v};--aksara-gutter-y:${v};column-gap:0;row-gap:0}`,
          `.row.${escapeClass(`col-gap-xxl-${k}`)}{--aksara-gutter-x:${v};column-gap:0}`,
          `.row.${escapeClass(`row-gap-xxl-${k}`)}{--aksara-gutter-y:${v};row-gap:0}`
        ])
      );
    }
    rules.push(`@media (min-width:${minWidth}){${bsRules.join("")}}`);
  }
  const stateful = [
    "border",
    ...Object.keys(colors).flatMap((name) => [
      `bg-${name}`,
      `text-${name}`,
      `border-${name}`,
      `ring-${name}`,
      `bg-${name}/10`,
      `bg-${name}/20`,
      `bg-${name}/80`,
      `text-${name}/20`,
      `border-${name}/50`
    ]),
    "bg-body",
    "bg-transparent",
    "text-body",
    "border-subtle",
    "opacity-50",
    "ring"
  ];
  for (const state of stateVariants) {
    for (const name of stateful) rules.push(variantRule(`${state}:${name}`));
  }
  [
    "dark:md:hover:border",
    "dark:lg:focus:bg-primary/20",
    "dark:sm:active:-mx-3",
    "dark:md:hover:border-primary",
    "hover:bg-primary/80"
  ].forEach((name) => rules.push(variantRule(name)));
}

function mdiCss(): string {
  const mdiCssPath = path.join(root, "node_modules/@mdi/font/css/materialdesignicons.min.css");
  if (!fs.existsSync(mdiCssPath)) return "";
  const raw = fs.readFileSync(mdiCssPath, "utf8");
  return raw.replace(/\.\.\/fonts\//g, "./fonts/");
}

function buildCss(): string {
  addComponents();
  addSpacing();
  addSizing();
  addColors();
  addBorders();
  addDisplayAndPosition();
  addFlexGrid();
  addTypography();
  addMotionEffectsLayout();
  addScrollbars();
  addVariants();
  scanArbitraryClasses();
  return `${banner()}${mdiCss()}\n${preflight()}${rules.join("")}`;
}

function banner(): string {
  return "/*! Aksara UI v1.0.0 | Static CSS, no JIT, TypeScript */\n";
}

function minifyCss(css: string): string {
  return css
    .replace(/\/\*![\s\S]*?\*\//g, (match) => match)
    .replace(/\/\*(?!!)[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}

function formatCss(css: string): string {
  let output = "";
  let indent = 0;
  let inString = false;
  let quote = "";

  for (const char of css) {
    if ((char === '"' || char === "'") && quote !== "\\" && !inString) {
      inString = true;
      quote = char;
      output += char;
      continue;
    }
    if (inString) {
      output += char;
      if (char === quote) {
        inString = false;
        quote = "";
      }
      continue;
    }
    if (char === "{") {
      output = output.trimEnd();
      output += " {\n";
      indent += 1;
      output += "  ".repeat(indent);
      continue;
    }
    if (char === ";") {
      output += ";\n";
      output += "  ".repeat(indent);
      continue;
    }
    if (char === "}") {
      indent = Math.max(0, indent - 1);
      output = output.trimEnd();
      output += `\n${"  ".repeat(indent)}}\n`;
      if (indent > 0) output += "  ".repeat(indent);
      continue;
    }
    output += char;
  }

  return output.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

function minifyJs(js: string): string {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([()[\];,:=+\-*/<>?.])\s*/g, "$1")
    .trim();
}

function write(file: string, content: string): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function buildJs(): { esm: string; iife: string; dts: string } {
  const tsContent = fs.readFileSync(srcTs, "utf8");

  // Transpile TypeScript to ESM
  const esmTranspiled = transpileModule(tsContent, {
    compilerOptions: {
      target: ScriptTarget.ES2022,
      module: ModuleKind.ESNext,
      removeComments: false
    }
  }).outputText;

  // Build IIFE from ESM output
  const iifeCleaned = esmTranspiled
    .replace(/export\s+default\s+Aksara;?/g, "")
    .replace(/export\s+\{[^}]+\};?/g, "")
    .replace(/export\s+const\s+Aksara\s*=/g, "const Aksara =")
    .replace(/export\s+class\s+/g, "class ")
    .replace(/export\s+function\s+/g, "function ")
    .replace(/export\s+type\s+[^;]+;/g, "")
    .replace(/export\s+interface\s+[^{]+{[^}]*}/g, "");

  const iife = `${banner()}(function(){\n${iifeCleaned}\nwindow.Aksara=Aksara;\n})();\n`;
  const esm = `${banner()}${esmTranspiled}`;

  // Generate d.ts declarations
  const dtsOptions: CompilerOptions = {
    target: ScriptTarget.ES2022,
    module: ModuleKind.ESNext,
    declaration: true,
    emitDeclarationOnly: true,
    skipLibCheck: true
  };
  const host = createCompilerHost(dtsOptions);
  let dts = "";
  host.writeFile = (fileName, text) => {
    if (fileName.endsWith(".d.ts")) {
      dts = text;
    }
  };
  const program = createProgram([srcTs], dtsOptions, host);
  program.emit();

  return { esm, iife, dts };
}

function buildDocsJs(): void {
  if (fs.existsSync(docsTs)) {
    const tsContent = fs.readFileSync(docsTs, "utf8");
    const strippedTs = tsContent.replace(/^import\s+type\s+.*?;?\s*$/gm, "");
    const transpiled = transpileModule(strippedTs, {
      compilerOptions: {
        target: ScriptTarget.ES2022,
        module: ModuleKind.None,
        removeComments: false
      }
    }).outputText;
    const cleanJs = transpiled
      .replace(/Object\.defineProperty\(exports,\s*"__esModule",\s*\{[^}]*\}\);?/g, "")
      .replace(/export\s*\{\s*\};?/g, "")
      .trim();
    write(docsJsOutput, cleanJs);
  }
}

function walkMarkdown(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdown(file);
    return entry.isFile() && entry.name.endsWith(".md") ? [file] : [];
  });
}

function routeFromMarkdown(file: string): string {
  const relative = path.relative(docsContentDir, file).replaceAll(path.sep, "/").replace(/\.md$/, "");
  return relative === "index" ? "/" : `/${relative}`;
}

function buildDocsContent(): string {
  const content: Record<string, string> = {};
  for (const file of walkMarkdown(docsContentDir)) {
    content[routeFromMarkdown(file)] = fs.readFileSync(file, "utf8");
  }
  return `window.AksaraDocsContent=${JSON.stringify(content, null, 2)};\n`;
}

fs.mkdirSync(distDir, { recursive: true });
copyMdiAssets();
const css = buildCss();
const js = buildJs();

write(path.join(distDir, "aksara.css"), formatCss(css));
write(path.join(distDir, "aksara.min.css"), minifyCss(css));
write(path.join(distDir, "aksara.esm.js"), js.esm);
write(path.join(distDir, "aksara.js"), js.iife);
write(path.join(distDir, "aksara.min.js"), minifyJs(js.iife));
if (js.dts) {
  write(path.join(distDir, "aksara.d.ts"), js.dts);
}
function buildComponents(): void {
  const componentsSrcDir = path.join(root, "src/components");
  if (!fs.existsSync(componentsSrcDir)) return;

  function walkTsFiles(dir: string): string[] {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walkTsFiles(fullPath);
      return entry.isFile() && entry.name.endsWith(".ts") ? [fullPath] : [];
    });
  }

  const files = walkTsFiles(componentsSrcDir);
  if (files.length === 0) return;

  const distComponentsDir = path.join(distDir, "components");
  fs.mkdirSync(distComponentsDir, { recursive: true });

  const compilerOptions: CompilerOptions = {
    target: ScriptTarget.ES2022,
    module: ModuleKind.ESNext,
    declaration: true,
    emitDeclarationOnly: false,
    outDir: distComponentsDir,
    rootDir: componentsSrcDir,
    skipLibCheck: true
  };

  const host = createCompilerHost(compilerOptions);
  const program = createProgram(files, compilerOptions, host);
  program.emit();
}

function copyMdiAssets(): void {
  const mdiNodeModules = path.join(root, "node_modules/@mdi/font");
  if (!fs.existsSync(mdiNodeModules)) return;
  const docsVendorMdi = path.join(root, "src/docs/assets/vendor/mdi");
  const distFonts = path.join(distDir, "fonts");
  fs.mkdirSync(path.join(docsVendorMdi, "css"), { recursive: true });
  fs.mkdirSync(path.join(docsVendorMdi, "fonts"), { recursive: true });
  fs.mkdirSync(distFonts, { recursive: true });
  fs.copyFileSync(
    path.join(mdiNodeModules, "css/materialdesignicons.min.css"),
    path.join(docsVendorMdi, "css/materialdesignicons.min.css")
  );
  const fontsDir = path.join(mdiNodeModules, "fonts");
  if (fs.existsSync(fontsDir)) {
    for (const font of fs.readdirSync(fontsDir)) {
      fs.copyFileSync(path.join(fontsDir, font), path.join(docsVendorMdi, "fonts", font));
      fs.copyFileSync(path.join(fontsDir, font), path.join(distFonts, font));
    }
  }
}

copyMdiAssets();
write(docsContentOutput, buildDocsContent());
buildDocsJs();
buildComponents();

console.log(`Generated ${utilityMap.size} utilities and ${rules.length} CSS rules.`);
