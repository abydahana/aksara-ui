import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  input,
  Input,
  textarea,
  Textarea,
  select,
  Select,
  checkbox,
  Checkbox,
  radio,
  Radio,
  switchInput,
  Switch,
  range,
  Range,
  card,
  Card,
  cardBody,
  CardBody,
  table,
  accordion,
  accordionItem,
  alert,
  badge,
  progress,
  spinner,
  toast,
  modal,
  Modal,
  dropdown,
  offcanvas,
  popoverTrigger,
  tooltipTrigger,
  breadcrumb,
  pagination,
  tabs,
  scrollspyNav,
  scrollspyTarget,
  collapse,
  collapseTrigger,
  carousel,
  floatingLabel,
  formRow,
  formCol,
  button,
  Button,
  buttonGroup,
  closeButton,
  chip,
  Chip,
  OptionPickerModal,
  PickerModal,
  quoteCard,
  QuoteCard,
  GuestGate,
  guestGate,
  AuthPromptModal,
  AuthModal,
  mediaGrid,
  MediaGrid,
  mediaPreviewModal,
  Avatar,
  AvatarGroup,
  AvatarStack,
  avatarStack,
  bentoGrid,
  BentoGrid,
  bentoCard,
  BentoCard,
  skeleton,
  Skeleton,
  timeline,
  Timeline
} from "../components/index";
import { cascadeRank, resolveRuntimeRule } from "../generator/aksara";
import { colors as buildColors } from "../generator/palette";
import { runComponentChecks } from "./components";
import { runDocsChecks } from "./docs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");

execFileSync("node", ["--import", "tsx", "src/generator/build.ts"], { cwd: root, stdio: "inherit" });

const css = fs.readFileSync(path.join(root, "dist/aksara.css"), "utf8");
const minCss = fs.readFileSync(path.join(root, "dist/aksara.min.css"), "utf8");
const js = fs.readFileSync(path.join(root, "dist/aksara.js"), "utf8");
const docsShell = fs.readFileSync(path.join(root, "src/docs/index.html"), "utf8");
const docsLoader = fs.readFileSync(path.join(root, "src/docs/assets/docs.js"), "utf8");
const docsContent = fs.readFileSync(path.join(root, "src/docs/assets/docs-content.js"), "utf8");
const docsCss = fs.readFileSync(path.join(root, "src/docs/assets/docs.css"), "utf8");
const oldTooltipPopoverRoute = `/components/${"tooltip"}-${"popover"}`;
const oldTooltipPopoverLabel = `${"Tooltip"} & ${"Popover"}`;
const oldTooltipsPopoversTitle = `${"Tooltips"} & ${"Popovers"}`;
const oldProgressSpinnerRoute = `/components/${"progress"}-${"spinners"}`;
const oldProgressSpinnerLabel = `${"Progress"} & ${"Spinners"}`;

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function escapeClass(value: string): string {
  return Array.from(value)
    .map((char, index) => {
      if (/^[a-zA-Z_-]$/.test(char)) return char;
      if (/^[0-9]$/.test(char)) return index === 0 ? `\\${char.charCodeAt(0).toString(16).padStart(6, "0")}` : char;
      return `\\${char}`;
    })
    .join("");
}

/** Declarations of every rule (any nesting) keyed by each selector in its selector list. */
const ruleIndex = new Map<string, string[]>();
for (const match of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const declarations = match[2].replace(/\s+/g, " ").replace(/: /g, ":").trim();
  for (const selector of match[1].split(",")) {
    const key = selector.trim();
    ruleIndex.set(key, [...(ruleIndex.get(key) ?? []), declarations]);
  }
}

/** True when some rule for exactly `selector` contains `declaration` (format-independent). */
function ruleHas(selector: string, declaration: string): boolean {
  const wanted = declaration.replace(/\s+/g, " ").trim();
  return (ruleIndex.get(selector) ?? []).some((declarations) => declarations.includes(wanted));
}

/** The class itself has a rule (a longer class sharing the prefix, like `.nav-link` for `nav`, does not count). */
function hasClass(name: string): boolean {
  const escaped = escapeClass(name).replace(/[\\^$.*+?()[\]{}|/]/g, (char) => `\\${char}`);
  return new RegExp(`\\.${escaped}(?![\\w-]|\\\\)`).test(css);
}

function hasExactClassRule(name: string): boolean {
  const selector = `.${escapeClass(name)}`;
  // Also as the first entry of a merged selector list (`.inset-y-3,.inset-block-3 {`)
  return css.includes(`${selector} {`) || css.includes(`${selector}{`) || css.includes(`${selector},`);
}

[
  "md:col-4",
  "lg:col-3",
  "2xl:col",
  "3xl:col",
  "w-100",
  "w-full",
  "h-100",
  "h-full",
  "bg-body",
  "text-body",
  "border-subtle",
  "m-3",
  "mx-2",
  "-mx-2",
  "ps-4",
  "pe-4",
  "lg:sticky-top",
  "border-top",
  "border-bottom",
  "border-start",
  "border-end",
  "text-sm",
  "underline",
  "uppercase",
  "truncate",
  "modal-title",
  "bento-grid",
  "bento-card",
  "bento-col-2",
  "bento-featured",
  "text-balance",
  "text-pretty",
  "backdrop-blur",
  "accent-primary",
  "scrollbar-none",
  "skeleton",
  "timeline",
  "leading-tight",
  "tracking-wide",
  "transition",
  "ease-in-out",
  "translate-x-3",
  "opacity-3",
  "border-5",
  "rounded-0",
  "rounded-xl",
  "z-auto",
  "font-extralight",
  "blur-2xl",
  "form-control",
  "form-check",
  "form-radio",
  "form-switch",
  "is-valid",
  "is-invalid",
  "btn-soft-primary",
  "btn-outline-primary",
  "btn-xs",
  "btn-sm",
  "btn-md",
  "btn-lg",
  "btn-xl",
  "btn-2xl",
  "form-control-xs",
  "form-control-sm",
  "form-control-md",
  "form-control-lg",
  "form-control-xl",
  "form-control-2xl",
  "form-select-xs",
  "form-select-sm",
  "form-select-md",
  "form-select-lg",
  "form-select-xl",
  "form-select-2xl",
  "badge-xs",
  "badge-sm",
  "badge-md",
  "badge-lg",
  "badge-xl",
  "badge-2xl",
  "btn-close-xs",
  "btn-close-sm",
  "btn-close-md",
  "btn-close-lg",
  "btn-close-xl",
  "btn-close-2xl",
  "btn-icon",
  "btn-ghost",
  "btn-group",
  "btn-group-vertical",
  "btn-group-sm",
  "btn-group-lg",
  "btn-toolbar",
  "card-elevated",
  "card-img",
  "card-title",
  "card-text",
  "alert-primary",
  "alert-dismissible",
  "alert-title",
  "badge-soft-success",
  "list-group",
  "list-group-flush",
  "list-group-item",
  "list-group-item-action",
  "list-group-title",
  "list-group-subtitle",
  "navbar-brand",
  "navbar-nav",
  "navbar-toggler",
  "navbar-collapse",
  "nav-link",
  "dropdown-item",
  "dropdown-header",
  "dropdown-divider",
  "modal-sm",
  "modal-lg",
  "modal-xl",
  "modal-fullscreen",
  "modal-header",
  "modal-body",
  "modal-footer",
  "btn-close",
  "modal-close",
  "close",
  "close-sm",
  "close-lg",
  "popover-header",
  "popover-title",
  "popover-body",
  "accordion-item",
  "accordion-button",
  "accordion-icon",
  "accordion-panel",
  "nav",
  "nav-pills",
  "tab",
  "tab-panel",
  "toast-header",
  "toast-body",
  "toast-stack",
  "collapse",
  "collapse-show",
  "progress",
  "progress-bar",
  "progress-striped",
  "progress-animated",
  "spinner",
  "spinner-sm",
  "placeholder",
  "placeholder-glow",
  "placeholder-wave",
  "carousel-item",
  "carousel-caption",
  "carousel-indicators",
  "carousel-indicator",
  "carousel-control",
  "offcanvas-end",
  "offcanvas-top",
  "offcanvas-bottom",
  "offcanvas-header",
  "offcanvas-body",
  "table-responsive",
  "table-bordered",
  "table-compact",
  "table-striped",
  "table-hover",
  "breadcrumb-item",
  "breadcrumb-dot",
  "breadcrumb-arrow",
  "page-link",
  "form-select",
  "input-group",
  "input-group-text",
  "ratio",
  "ratio-16x9",
  "hstack",
  "vstack",
  "vr",
  "stretched-link",
  "visually-hidden",
  "clearfix",
  "link-primary",
  "bg-text-primary",
  "ms-auto",
  "rounded-pill",
  "rounded-circle",
  "rounded-start-0",
  "rounded-end-0",
  "rounded-top-0",
  "rounded-bottom-0"
].forEach((name) => assert(hasClass(name), `Missing .${name}`));

["ml-10", "mr-10", "pl-10", "pr-10", "border-t", "border-b", "border-s", "border-e", "bg-red", "text-white"].forEach(
  (name) => assert(!hasExactClassRule(name), `Forbidden CSS class generated: ${name}`)
);

// ── Variants of static utilities beyond hover/focus/active are generated on demand ──
{
  const staticLookup = (utility: string): string | null =>
    css.match(new RegExp(`^\\.${escapeClass(utility)}(?:,[^{]*)? \\{\\n([^}]*)\\}`, "m"))?.[1].replace(/\s+/g, "") ??
    null;
  (
    [
      ["checked:ring-primary", ":checked{"],
      ["selected:text-primary", '[aria-selected="true"]{'],
      ["visited:text-primary", ":visited{"],
      ["first:border-primary", ":first-child{"],
      ["last:border-danger", ":last-child{"],
      ["dark:md:hover:border", '@media (min-width:48rem){[data-theme="dark"] .dark\\:md\\:hover\\:border:hover'],
      ["dark:sm:active:-mx-3", "!important"]
    ] as const
  ).forEach(([name, fragment]) => {
    const generated = resolveRuntimeRule(name, staticLookup);
    assert(generated?.includes(fragment), `Runtime must generate ${name} from the static utility (got ${generated})`);
  });
  ["hover:bg-subtle", "hover:underline", "focus:border-primary", "active:bg-primary"].forEach((name) =>
    assert(hasClass(name), `Missing static interactive variant .${name}`)
  );
  assert(
    !hasClass("checked:ring") && !hasClass("odd:bg-primary"),
    "Non-interactive state variants must be runtime-only"
  );
}

// ── Color opacity utilities are resolved on demand by the runtime engine ──
// Only levels that Aksara's own components emit are precompiled (for server-rendered
// markup); every other level is generated on demand.
{
  const walkFiles = (target: string): string[] =>
    fs.statSync(target).isFile()
      ? [target]
      : fs.readdirSync(target).flatMap((name) => walkFiles(path.join(target, name)));
  const componentSources = [path.join(root, "src/components"), path.join(root, "src/generator/aksara.ts")]
    .flatMap(walkFiles)
    .map((file) => fs.readFileSync(file, "utf8"))
    .join("\n");
  const staticColorOpacityClasses = (
    css.match(/^\.[^\s{,:]*(?:bg|text|border|decoration|ring)-[a-z]+\\\/\d+/gm) ?? []
  ).map((selector) => selector.slice(1).replace(/\\/g, ""));
  const notFromComponents = staticColorOpacityClasses.filter((name) => !componentSources.includes(name));
  assert(
    notFromComponents.length === 0,
    `Color opacity levels must not be generated statically unless components emit them: ${notFromComponents.join(" ")}`
  );
  assert(staticColorOpacityClasses.length < 20, "Color opacity levels must stay runtime-generated");
}
for (const name of Object.keys(buildColors)) {
  assert(css.includes(`--aksara-${name}:`), `Runtime color opacity palette name has no token: --aksara-${name}`);
  assert(
    resolveRuntimeRule(`bg-${name}/10`) === `.bg-${name}\\/10{background-color:rgb(var(--aksara-${name}) / 0.1)}`,
    `Runtime engine must resolve bg-${name}/10`
  );
}
(
  [
    ["bg-primary/12", ".bg-primary\\/12{background-color:rgb(var(--aksara-primary) / 0.12)}"],
    ["text-primary/20", ".text-primary\\/20{color:rgb(var(--aksara-primary) / 0.2)}"],
    ["border-danger/50", ".border-danger\\/50{border-color:rgb(var(--aksara-danger) / 0.5)}"],
    ["decoration-info/0", ".decoration-info\\/0{text-decoration-color:rgb(var(--aksara-info) / 0)}"],
    ["ring-success/100", ".ring-success\\/100{--aksara-ring-color:rgb(var(--aksara-success) / 1)}"],
    ["hover:bg-primary/80", ".hover\\:bg-primary\\/80:hover{background-color:rgb(var(--aksara-primary) / 0.8)}"],
    ["odd:bg-primary/10", ".odd\\:bg-primary\\/10:nth-child(odd){background-color:rgb(var(--aksara-primary) / 0.1)}"],
    [
      "group-hover:bg-light/5",
      ".group:hover .group-hover\\:bg-light\\/5{background-color:rgb(var(--aksara-light) / 0.05)}"
    ],
    [
      "dark:lg:focus:bg-primary/20",
      '@media (min-width:62rem){[data-theme="dark"] .dark\\:lg\\:focus\\:bg-primary\\/20:focus,.dark .dark\\:lg\\:focus\\:bg-primary\\/20:focus{background-color:rgb(var(--aksara-primary) / 0.2)}}'
    ]
  ] as const
).forEach(([name, expected]) => assert(resolveRuntimeRule(name) === expected, `Runtime rule mismatch for ${name}`));
["bg-primary/101", "bg-black/60", "bg-white/10", "bg-panel/90", "w-1/2", "bg-primary"].forEach((name) =>
  assert(resolveRuntimeRule(name) === null, `Runtime engine must not resolve ${name}`)
);

// ── Numeric utilities use the 0..5 scale; typography is semantic; other values are arbitrary ──
{
  const ruleOf = (name: string): string | undefined =>
    css.match(new RegExp(`^\\.${escapeClass(name)}(?:,[^{]*)? \\{\\n  ([^\\n]*)`, "m"))?.[1];
  const staticSizing = (css.match(/^\.[wh]-[^\s{,:]+(?=[ ,])/gm) ?? []).map((rule) => rule.slice(1).replace(/\\/g, ""));
  const allowedSizing = ["w-100", "h-100", "w-full", "h-full", "w-auto", "h-auto", "w-screen", "h-screen"];
  const unexpectedSizing = staticSizing.filter((name) => !name.includes("[") && !allowedSizing.includes(name));
  assert(
    unexpectedSizing.length === 0,
    `Only full/auto/screen sizing may be static; use arbitrary values instead: ${unexpectedSizing.slice(0, 8).join(" ")}`
  );
  assert(
    resolveRuntimeRule("w-[33.3333%]") === ".w-\\[33\\.3333\\%\\]{width:33.3333%}",
    "Runtime engine must resolve fractional widths"
  );
  const outOfScale = css.match(/^\.-?(?:rounded|radius|border|z|opacity|translate-[xy])-(?:[6-9]|\d{2,})[ ,]/gm) ?? [];
  assert(
    outOfScale.length === 0,
    `Numeric utilities above 5 must not be generated: ${outOfScale.slice(0, 5).join(" ")}`
  );
  const numericOnlySemantic = css.match(/^\.(?:text|leading|tracking|scale|skew-[xy])-\d+ /gm) ?? [];
  assert(
    numericOnlySemantic.length === 0,
    `Numeric text/leading/tracking/scale/skew must not be generated: ${numericOnlySemantic[0]}`
  );
  (
    [
      ["rounded-0", "border-radius:0 !important"],
      ["rounded-xl", "border-radius:var(--aksara-radius-xl) !important"],
      ["border-5", "border-width:5px;"],
      ["opacity-0", "opacity:0"],
      ["opacity-3", "opacity:0.6"],
      ["opacity-5", "opacity:1"],
      ["translate-x-3", "transform:translateX(1rem)"]
    ] as const
  ).forEach(([name, declaration]) =>
    assert(ruleOf(name) === declaration, `.${name} should be "${declaration}", got "${ruleOf(name)}"`)
  );
  (
    [
      ["rounded-[12px]", ".rounded-\\[12px\\]{border-radius:12px !important}"],
      ["text-[13px]", ".text-\\[13px\\]{font-size:13px}"],
      ["leading-[22px]", ".leading-\\[22px\\]{line-height:22px}"],
      ["z-[1050]", ".z-\\[1050\\]{z-index:1050}"],
      ["scale-[.95]", ".scale-\\[\\.95\\]{transform:scale(.95)}"],
      ["disabled:opacity-[.5]", ".disabled\\:opacity-\\[\\.5\\]:disabled{opacity:.5}"]
    ] as const
  ).forEach(([name, expected]) => assert(resolveRuntimeRule(name) === expected, `Runtime rule mismatch for ${name}`));
}

// ── Material Design Icons: separate entry + required peer dependency ──
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
assert(pkg.peerDependencies?.["@mdi/font"], "@mdi/font must be declared as a peer dependency");
assert(!pkg.peerDependenciesMeta?.["@mdi/font"]?.optional, "@mdi/font peer dependency must not be optional");
assert(!pkg.dependencies?.["@mdi/font"], "@mdi/font must not be a regular dependency");
assert(pkg.exports["./css/icons"] === "./dist/icons.css", "Missing ./css/icons export");
const iconsCss = fs.readFileSync(path.join(root, "dist/icons.css"), "utf8");
assert(
  iconsCss.includes('@import "@mdi/font/css/materialdesignicons.min.css"'),
  "dist/icons.css must import the @mdi/font peer dependency"
);
assert(!/\.mdi-[a-z0-9-]+::?before/.test(css), "aksara.css must not bundle Material Design Icons glyph rules");
assert(!css.includes("Material Design Icons"), "aksara.css must not bundle the Material Design Icons font-face");
assert(!fs.existsSync(path.join(root, "dist/fonts")), "dist/fonts must not be shipped; fonts come from @mdi/font");
assert(js.includes("Material Design Icons are not loaded"), "Runtime must report a missing icon stylesheet");

assert(!css.includes("data-bs-toggle"), "Forbidden data-bs-toggle token generated");
assert(!css.includes("--aksara-primary:13 110 253"), "Bootstrap-like primary token should not be used");
assert(css.includes("--aksara-primary:15 23 42"), "Slate Aksara primary token missing");
assert(css.includes(':root,[data-theme="light"],.light'), "Light theme selector should be explicit");
assert(css.includes('[data-theme="dark"],.dark'), "Dark theme selector should be explicit");
assert(
  css.includes("--aksara-text-base:#0f172a"),
  "Light theme and base root must define dark text for --aksara-text-base"
);
assert(css.includes("--aksara-text-base:#f8fafc"), "Dark theme must define light text for --aksara-text-base");
assert(hasExactClassRule("bg-base"), "Missing bg-base utility class");
assert(hasExactClassRule("border-base"), "Missing border-base utility class");
assert(css.includes("--aksara-overlay-bg:rgb(15 23 42/.46)"), "Light overlay token missing");
assert(css.includes("--aksara-overlay-bg:rgb(0 0 0/.62)"), "Dark overlay token missing");
assert(css.includes("--aksara-radius:1rem"), "Base rounded theme radius token missing");
{
  // Radius tokens grow strictly: 2xs < xs < sm < md < lg < xl < 2xl < 3xl.
  const radiusScale = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"].map((size) =>
    Number.parseFloat(css.match(new RegExp(`--aksara-radius-${size}:([.\\d]+)rem`))?.[1] ?? "NaN")
  );
  assert(
    radiusScale.every((value, index) => index === 0 || value > radiusScale[index - 1]),
    `Radius tokens must be strictly increasing: ${radiusScale.join(" < ")}`
  );
  assert(css.includes("--aksara-radius-xl:1.25rem"), "rounded-xl must sit between lg (1rem) and 2xl (1.5rem)");
  // Semantic-only families: no numeric radius, z-index, font weight; no xxl size names; no text-md alias.
  const forbidden =
    css.match(
      /^\.(?:rounded|radius)-[1-9][ ,]|^\.(?:rounded|radius)-(?:top|bottom|start|end)(?:-(?:start|end))?-[1-9][ ,]|^\.z-\d+[ ,]|^\.font-\d00[ ,]|^\.(?:duration|rotate|backdrop-saturate)-\d+[ ,]|^\.[a-z-]+-xxl[ ,]|^\.text-md[ ,]/gm
    ) ?? [];
  assert(
    forbidden.length === 0,
    `Removed numeric/alias classes are generated again: ${forbidden.slice(0, 6).join(" ")}`
  );
  assert(ruleHas(".rounded-0", "border-radius:0"), "rounded-0 must remove radius");
  for (const [name, weight] of [
    ["fw-light", "300"],
    ["fw-normal", "400"],
    ["fw-semibold", "600"],
    ["fw-bold", "700"],
    ["fw-bolder", "800"],
    ["fw-black", "900"]
  ] as const) {
    assert(ruleHas(`.${name}`, `font-weight:${weight}`), `${name} must set font-weight ${weight}`);
  }
  assert(!hasExactClassRule("font-bold"), "font-bold was removed in favour of fw-bold");
  assert(!hasExactClassRule("font-semibold"), "font-semibold was removed in favour of fw-semibold");
  assert(resolveRuntimeRule("z-[1050]") === ".z-\\[1050\\]{z-index:1050}", "z-index must use arbitrary values");
  (
    [
      ["duration-[200ms]", ".duration-\\[200ms\\]{transition-duration:200ms}"],
      ["rotate-[45deg]", ".rotate-\\[45deg\\]{transform:rotate(45deg)}"],
      ["backdrop-saturate-[150%]", ".backdrop-saturate-\\[150\\%\\]{backdrop-filter:saturate(150%)}"]
    ] as const
  ).forEach(([name, expected]) => assert(resolveRuntimeRule(name) === expected, `Runtime rule mismatch for ${name}`));
}
assert(css.includes("--aksara-scrollbar-thumb:rgb(100 116 139/.32)"), "Light scrollbar token missing");
assert(css.includes("--aksara-scrollbar-thumb:rgb(174 186 204/.28)"), "Dark scrollbar token missing");
assert(
  css.includes("*::-webkit-scrollbar-thumb") && css.includes("background:var(--aksara-scrollbar-thumb)"),
  "Custom scrollbar thumb styling missing"
);
assert(
  ruleHas(".modal", "position:fixed") && css.includes("background:var(--aksara-overlay-bg)"),
  "Modal backdrop should use theme-aware overlay token"
);
assert(
  css.includes(".modal-dialog") &&
    css.includes("background:var(--aksara-surface)") &&
    css.includes("color:var(--aksara-text-body)"),
  "Modal dialog should use adaptive surface and text tokens"
);
assert(
  css.includes("transform:translate(var(--aksara-modal-x,0),var(--aksara-modal-y,0))"),
  "Modal dialog should support draggable transform offsets"
);
assert(css.includes(".modal-body") && css.includes("overflow:auto"), "Modal body should own scrolling");
assert(ruleHas(".modal-header", "cursor:grab"), "Modal header should expose draggable affordance");
assert(
  ruleHas(".btn", "display:inline-flex") && css.includes("border-radius:var(--aksara-radius)"),
  "Buttons should use base rounded theme radius"
);
assert(
  ruleHas(".card", "color:var(--aksara-text-body)") && css.includes("border-radius:var(--aksara-radius)"),
  "Cards should use base rounded theme radius"
);
assert(
  css.includes(".modal-dialog") && css.includes("border-radius:var(--aksara-radius)"),
  "Modal dialogs should use base rounded theme radius"
);
assert(
  css.includes(".table-responsive") && css.includes("border-radius:var(--aksara-radius)"),
  "Responsive table wrappers should use base rounded theme radius"
);
assert(
  css.includes(".form-control") && css.includes("border-radius:var(--aksara-radius)"),
  "Form controls should use base rounded theme radius"
);
assert(
  ruleHas(".tooltip", "position:absolute") &&
    css.includes("background:var(--aksara-tooltip-bg)") &&
    css.includes("color:var(--aksara-tooltip-text)"),
  "Tooltip should use theme-aware tokens"
);
assert(
  css.includes(".placeholder-wave::after") && css.includes("var(--aksara-placeholder-shine)"),
  "Placeholder wave should use theme-aware shine token"
);
assert(
  css.includes(".progress-striped") && css.includes("var(--aksara-progress-stripe)"),
  "Progress stripe should use theme-aware stripe token"
);
assert(
  css.includes(".carousel-caption") &&
    css.includes("background:var(--aksara-carousel-caption-bg)") &&
    css.includes("color:var(--aksara-on-media)"),
  "Carousel caption should use theme-aware overlay tokens"
);
assert(css.includes(".\\000032xl\\:col"), "Readable CSS must escape 2xl responsive selector");
assert(minCss.includes(".\\000032xl\\:col"), "Minified CSS must escape 2xl responsive selector");
assert(!css.includes(".\\32 xl\\:col"), "Readable CSS must not use space-terminated leading digit escape");
assert(!minCss.includes(".\\32 xl\\:col"), "Minified CSS must not use space-terminated leading digit escape");
assert(!minCss.includes(".2xl\\:col"), "Minified CSS must not emit invalid leading digit selector");
assert(css.includes(".row.gap-5"), "Rows should map gap utilities to grid gutters");
assert(css.includes("--aksara-gutter-x:3rem"), "Row gap utility should set horizontal gutter on the rem spacing scale");
assert(css.includes("--aksara-gutter-y:3rem"), "Row gap utility should set vertical gutter on the rem spacing scale");
assert(css.includes("row-gap:0"), "Row gap utility should reset flex row-gap so vertical gutters rely on margin-top");
assert(css.includes("column-gap:0"), "Row gap utility should avoid flex column-gap with percentage columns");
assert(css.includes("margin-top:var(--aksara-gutter-y,0)"), "Columns should set margin-top from gutter-y token");
assert(
  css.includes("margin-top:calc(-1*var(--aksara-gutter-y,0))"),
  "Row should offset vertical gutters via negative top margin"
);
assert(css.includes(".col-auto"), "col-auto utility must exist");
assert(css.includes(".row-cols-auto"), "row-cols-auto utility must exist");
assert(css.includes(".row-cols-2"), "row-cols-2 utility must exist");
assert(hasClass("md:col-6"), "md:col-6 responsive utility must exist");
assert(hasClass("md:col-auto"), "md:col-auto responsive utility must exist");
assert(hasClass("md:g-3"), "md:g-3 responsive gutter utility must exist");
for (const infix of ["col-md-6", "col-md-auto", "col-lg", "g-md-3", "gx-lg-2", "sticky-lg-top", "sticky-top-md"]) {
  assert(!hasClass(infix), `${infix}: breakpoints are prefix-only (md:..), Bootstrap infix names must not exist`);
}
// Directional utilities win over their shorthands, whatever the generation order:
// `p-2 pb-0` has no bottom padding, `m-3 mt-0` no top margin, `rounded rounded-top-0` square top...
{
  const ruleAt = (name: string): number => {
    const selector = `.${name}`.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = new RegExp(`(?:^|\\n|,)${selector}(?:,|\\s*\\{)`).exec(css);
    assert(match, `Missing rule for .${name}`);
    return match.index;
  };
  for (const [broad, narrow] of [
    ["p-2", "pb-0"],
    ["p-5", "pt-0"],
    ["p-0", "px-3"],
    ["px-3", "ps-0"],
    ["py-4", "pb-1"],
    ["m-3", "mt-0"],
    ["m-auto", "mb-0"],
    ["mx-auto", "ms-0"],
    ["-m-2", "-mt-1"],
    ["gap-3", "gap-x-1"],
    ["gap-5", "row-gap-0"],
    ["g-3", "gx-1"],
    ["rounded", "rounded-top-0"],
    ["rounded-top", "rounded-top-start-0"],
    ["inset-0", "top-2"],
    ["overflow-hidden", "overflow-x-auto"],
    ["border", "border-top"],
    // Border shorthands (which set a color) stay before width/color utilities
    ["border-top", "border-0"],
    ["border-top", "border-primary"]
  ] as const) {
    assert(ruleAt(broad) < ruleAt(narrow), `.${narrow} must come after .${broad} so it wins`);
  }
  assert(cascadeRank("padding:1rem") < cascadeRank("padding-inline:1rem"), "axis padding outranks padding");
  assert(cascadeRank("padding-inline:1rem") < cascadeRank("padding-block-end:0"), "side padding outranks axis");
  assert(
    cascadeRank("margin:0 !important") < cascadeRank("margin-block-start:auto !important"),
    "!important is ignored"
  );
  assert(
    cascadeRank("border-start-start-radius:0;border-start-end-radius:0") < cascadeRank("border-start-start-radius:0"),
    "one corner outranks two"
  );
  assert(cascadeRank("display:flex") === -1, "non-directional rules are unranked");
}

assert(css.split("\n").length > 1000, "dist/aksara.css should be readable, not one-line minified output");
assert(minCss.split("\n").length <= 2, "dist/aksara.min.css should be true minified one-line output");
assert(minCss.length < css.length, "dist/aksara.min.css should be smaller than readable CSS");

assert(ruleHas(".p-1", "padding:.25rem"), "p-1 should generate quarter-rem padding");
assert(ruleHas(".p-2", "padding:.5rem"), "p-2 should generate half-rem padding");
assert(ruleHas(".p-3", "padding:1rem"), "p-3 should generate one-rem padding");
assert(ruleHas(".p-4", "padding:1.5rem"), "p-4 should generate 1.5-rem padding");
assert(ruleHas(".p-5", "padding:3rem"), "p-5 should generate 3-rem padding");
assert(hasClass("lg:sticky-top"), "lg:sticky-top must be generated");
assert(css.includes("margin-inline:-1rem"), "mx-[-1rem] must use margin-inline:-1rem");
assert(ruleHas(".gap-2", "gap:.5rem"), "gap-2 should generate half-rem gap");
assert(
  css.includes("padding-inline:var(--aksara-container-padding,1rem)"),
  "Container should default to one-rem horizontal padding"
);
assert(ruleHas(".card-body", "padding:1rem"), "Card body should default to one-rem padding");
assert(
  ruleHas(".modal-body", "min-height:0") && css.includes("padding:1rem"),
  "Modal body should default to one-rem padding"
);
assert(ruleHas(".w-100", "width:100%"), "w-100 should generate 100% width");
assert(
  !hasExactClassRule("w-1/2") && !hasExactClassRule("w-50") && !hasExactClassRule("w-30"),
  "Fraction and percentage widths must be arbitrary (w-[50%])"
);
assert(css.includes("border-inline-end-color:currentColor"), "Spinner active stroke should follow current text color");
assert(
  css.includes("color-mix(in srgb,currentColor 22%,transparent)"),
  "Spinner track should derive from current text color"
);
assert(
  css.includes(".badge-dot.text-success") && css.includes("background-color:rgb(var(--aksara-success) / 1)"),
  "Badge dot should support semantic text color utilities"
);
assert(
  ruleHas(".btn-warning", "color:var(--aksara-warning-foreground,rgb(var(--aksara-light)))"),
  "Warning button foreground should stay light"
);
assert(
  ruleHas(".btn-info", "color:var(--aksara-info-foreground,rgb(var(--aksara-light)))"),
  "Info button foreground should stay light"
);
assert(ruleHas(".btn-sm", "min-height:1.75rem"), "Small buttons should be compact enough for dense tables");
assert(
  css.includes(".btn-sm.btn-icon") && css.includes("inline-size:1.75rem"),
  "Small icon buttons should stay compact"
);
assert(ruleHas("form", "margin:0"), "Forms should not add default block margin");
assert(
  ruleHas(".badge-warning", "color:var(--aksara-warning-foreground,rgb(var(--aksara-light)))"),
  "Warning badge foreground should stay light"
);
assert(
  ruleHas(".badge-info", "color:var(--aksara-info-foreground,rgb(var(--aksara-light)))"),
  "Info badge foreground should stay light"
);
assert(css.includes(".progress-bar.bg-success"), "Progress bars should support semantic background utilities");
assert(css.includes(".progress-bar.bg-warning"), "Progress bars should support readable warning fills");
assert(css.includes(".progress-bar.bg-danger"), "Progress bars should support danger fills");
assert(
  css.includes('.accordion-button[aria-expanded="true"] .accordion-icon'),
  "Accordion icon should animate from expanded state"
);
assert(css.includes(".nav-pills .nav-link"), "Nav pills should style nav links");
assert(css.includes(".nav-pills .tab"), "Nav pills should style tab buttons");
assert(
  css.includes(".close {") &&
    css.includes("position:absolute") &&
    css.includes("inset-block-start:.75rem") &&
    css.includes("inset-inline-end:.75rem"),
  "Close helper should be absolutely positioned at the top/end by default"
);
assert(
  css.includes(".btn-group>.btn+.btn") && css.includes("margin-inline-start:-1px"),
  "Button group should collapse adjacent borders"
);
assert(
  css.includes(".btn-group>.btn:hover") && css.includes("z-index:1"),
  "Button group active button should rise above collapsed borders"
);
assert(
  css.includes(".btn-group-sm>.btn") && css.includes("min-height:1.75rem") && css.includes("font-size:.8125rem"),
  "Button group small modifier should make child buttons small"
);
assert(
  css.includes(".btn-group-lg>.btn") && css.includes("min-height:2.875rem") && css.includes("font-size:1.0625rem"),
  "Button group large modifier should make child buttons large"
);
assert(
  css.includes(".input-group>.btn") &&
    css.includes(".input-group>:not(:first-child)") &&
    css.includes("margin-inline-start:-1px") &&
    css.includes(".input-group-sm"),
  "Input group should support buttons and addons with border-radius stripping and size matching"
);
assert(!ruleHas(".btn:hover", "transform:translateY(-1px)"), "Buttons should not lift on hover by default");
assert(
  css.includes(".breadcrumb-dot .breadcrumb-item+ .breadcrumb-item::before"),
  "Breadcrumb dot separator class missing"
);
assert(
  css.includes(".breadcrumb-arrow .breadcrumb-item+ .breadcrumb-item::before"),
  "Breadcrumb arrow separator class missing"
);
assert(
  css.includes("[dir='rtl'] .breadcrumb-arrow .breadcrumb-item+ .breadcrumb-item::before"),
  "Breadcrumb arrow separator should support RTL"
);
assert(
  css.includes("[dir='rtl'] .offcanvas") && css.includes("[dir='rtl'] .offcanvas-end"),
  "Offcanvas should include RTL transform overrides"
);
// The browser bundles must actually execute and expose window.Aksara.
for (const bundle of ["dist/aksara.js", "dist/aksara.min.js"]) {
  const sandbox: Record<string, unknown> = { console };
  sandbox.window = sandbox;
  vm.runInNewContext(fs.readFileSync(path.join(root, bundle), "utf8"), sandbox, { filename: bundle });
  const globalAksara = (sandbox.window as { Aksara?: { init?: unknown; modal?: unknown } }).Aksara;
  assert(typeof globalAksara?.init === "function", `${bundle} must execute and expose window.Aksara`);
}
assert(
  !fs.readFileSync(path.join(root, "dist/aksara.min.js"), "utf8").includes("%+${"),
  "Minified JS must keep template-literal whitespace (calc(-${a}% + ${b}px))"
);
{
  const cjs = createRequire(import.meta.url)(path.join(root, "dist/aksara.cjs"));
  assert(
    typeof cjs.default?.init === "function" && typeof cjs.Modal === "function",
    "dist/aksara.cjs must be CommonJS"
  );
}
assert(js.includes("data-modal"), "Modal data API missing");
assert(js.includes("data-modal-close"), "Modal close data API missing");
assert(
  js.includes('readTriggerOptions(trigger, "modal"') && js.includes('"draggable"'),
  "Modal draggable data API missing"
);
assert(js.includes("startDrag(event)"), "Modal draggable behavior missing");
assert(js.includes("--aksara-modal-x") && js.includes("--aksara-modal-y"), "Modal drag offset variables missing");
assert(js.includes("data-offcanvas-close"), "Offcanvas close data API missing");
assert(js.includes("data-dismiss"), "Universal dismiss data API missing");
assert(js.includes("dismissTarget"), "Universal dismiss target handler missing");
assert(js.includes("resolveDismissTargets"), "Universal dismiss selector resolver missing");
assert(js.includes("data-tooltip"), "Tooltip data API missing");
assert(js.includes("class Modal"), "Modal class missing");
assert(js.includes("class Tooltip"), "Tooltip class missing");
[
  "updateOptions(options = {})",
  "readTriggerOptions",
  "closeOnSelect",
  "closeOnOutside",
  "showDelay",
  "hideDelay",
  "collapsible",
  "getParentScope",
  "activeIndex",
  "orientation",
  "autohide",
  "autoplay",
  "pauseOnHover",
  "play()",
  "pause()",
  "scrollLock"
].forEach((token) => assert(js.includes(token), `JavaScript option support missing token: ${token}`));
assert(docsShell.includes('id="docs-content"'), "Docs shell target missing");
assert(docsShell.includes("data-docs-menu"), "Docs mobile menu button missing");
assert(docsShell.includes("data-docs-backdrop"), "Docs mobile backdrop missing");
assert(docsShell.includes("data-docs-theme"), "Docs theme toggle missing");
assert(docsShell.includes("data-docs-group-toggle"), "Docs sidebar group toggles missing");
assert(docsShell.includes('data-doc-link="/core/utility-first"'), "Docs core utility-first route missing");
assert(docsShell.includes('data-doc-link="/components/buttons"'), "Docs sidebar route missing");
assert(docsShell.includes('data-doc-link="/layout/responsive"'), "Docs responsive sidebar route missing");
assert(docsShell.includes('data-doc-link="/utilities/states"'), "Docs states sidebar route missing");
assert(docsShell.includes('data-doc-link="/utilities/colors"'), "Docs colors sidebar route missing");
assert(docsShell.includes('data-doc-link="/forms/validation"'), "Docs validation sidebar route missing");
assert(docsShell.includes('data-doc-link="/components/list-group"'), "Docs list group sidebar route missing");
assert(docsShell.includes('data-doc-link="/components/progress"'), "Docs progress sidebar route missing");
assert(docsShell.includes('data-doc-link="/components/spinner"'), "Docs spinner sidebar route missing");
assert(docsShell.includes('data-doc-link="/components/progress">Progress</a>'), "Docs progress sidebar label missing");
assert(docsShell.includes('data-doc-link="/components/spinner">Spinner</a>'), "Docs spinner sidebar label missing");
assert(
  !docsShell.includes(`data-doc-link="${oldProgressSpinnerRoute}"`),
  "Combined progress and spinner sidebar route should be removed"
);
assert(!docsShell.includes(oldProgressSpinnerLabel), "Combined progress and spinner sidebar label should be removed");
assert(docsShell.includes('data-doc-link="/components/tooltip"'), "Docs tooltip sidebar route missing");
assert(docsShell.includes('data-doc-link="/components/popover"'), "Docs popover sidebar route missing");
assert(docsShell.includes('data-doc-link="/components/tooltip">Tooltip</a>'), "Docs tooltip sidebar label missing");
assert(docsShell.includes('data-doc-link="/components/popover">Popover</a>'), "Docs popover sidebar label missing");
assert(
  !docsShell.includes(`data-doc-link="${oldTooltipPopoverRoute}"`),
  "Combined tooltip and popover sidebar route should be removed"
);
assert(!docsShell.includes(oldTooltipPopoverLabel), "Combined tooltip and popover sidebar label should be removed");
assert(docsShell.includes('data-doc-link="/helpers/ratio"'), "Docs ratio sidebar route missing");
assert(
  docsShell.indexOf("docs-content.js") < docsShell.indexOf("docs.js"),
  "Docs content manifest must load before docs.js"
);
assert(docsLoader.includes("renderMarkdown"), "Docs markdown loader missing");
assert(docsLoader.includes("bindDocsScrollspy"), "Docs scrollspy binding missing");
assert(docsLoader.includes("toggleMenu"), "Docs mobile menu toggle missing");
assert(docsLoader.includes("toggleTheme"), "Docs theme toggle behavior missing");
assert(docsLoader.includes("toggleGroup"), "Docs group collapse behavior missing");
assert(
  docsLoader.includes('localStorage.setItem("aksara-theme"'),
  "Docs theme persistence must share the runtime aksara-theme key"
);
assert(docsLoader.includes("docs-menu-open"), "Docs mobile menu state missing");
assert(docsCss.includes("position: fixed"), "Docs mobile topbar/sheet fixed positioning missing");
assert(docsCss.includes("translateY(100%)"), "Docs mobile menu should be a bottom sheet");
assert(docsCss.includes("data-collapsed"), "Docs collapsed sidebar group styling missing");
assert(
  docsCss.includes("body") && docsCss.includes("overflow-x: hidden"),
  "Docs body should prevent horizontal page overflow"
);
assert(docsLoader.includes("window.AksaraDocsContent"), "Docs loader must support local embedded markdown");
assert(!docsLoader.includes("exports"), "Docs loader docs.js must not reference CommonJS 'exports'");
assert(!/\bexport\s*\{/.test(docsLoader), "Docs loader docs.js must not contain 'export {' statements");
assert(!/\bexport\s+default\b/.test(docsLoader), "Docs loader docs.js must not contain 'export default'");
assert(!/^\s*import\b/m.test(docsLoader), "Docs loader docs.js must not contain 'import' statements");

// Verify sandbox execution of docs.js without exports/module
{
  const dummyWindow = {
    addEventListener: () => {},
    matchMedia: () => ({ matches: false, addEventListener: () => {} }),
    location: { hash: "" }
  };
  const dummyDoc = {
    querySelector: () => null,
    querySelectorAll: () => [],
    documentElement: {
      dataset: {},
      classList: { add: () => {}, remove: () => {}, contains: () => false },
      setAttribute: () => {},
      getAttribute: () => null
    },
    addEventListener: () => {}
  };
  const dummyStorage = {
    getItem: () => null,
    setItem: () => {}
  };
  try {
    new Function("window", "document", "localStorage", "exports", "module", `"use strict";\n${docsLoader}`)(
      dummyWindow,
      dummyDoc,
      dummyStorage,
      undefined,
      undefined
    );
  } catch (error) {
    throw new Error(`Docs loader execution failed in browser sandbox: ${error}`, { cause: error });
  }
}

assert(docsCss.includes("Inter"), "Docs CSS must use Inter font");
assert(css.includes("Inter"), "Base CSS must include Inter in font stack");
assert(js.includes("setTheme"), "Aksara runtime must export setTheme");
assert(js.includes("getTheme"), "Aksara runtime must export getTheme");
assert(js.includes("initTheme"), "Aksara runtime must export initTheme");
assert(docsContent.includes("window.AksaraDocsContent"), "Docs content manifest missing");
assert(docsContent.includes('"/components/buttons"'), "Docs content manifest missing button route");
assert(docsContent.includes("Anchor Buttons"), "Docs content manifest missing anchor button sample");
assert(docsContent.includes('<a class=\\"btn btn-primary\\"'), "Docs content manifest missing anchor button markup");
assert(docsContent.includes("Anchor Button Group"), "Docs content manifest missing anchor button group sample");
assert(docsContent.includes("Button Sizes"), "Docs content manifest missing button sizing sample");
assert(docsContent.includes("Anchor Sizes"), "Docs content manifest missing anchor button sizing sample");
assert(docsContent.includes("btn-sm btn-icon"), "Docs content manifest missing compact icon button sizing sample");
assert(docsContent.includes("Block Button"), "Docs content manifest missing block button sample");
assert(docsContent.includes("w-full"), "Docs content manifest missing full-width button utility sample");
assert(docsContent.includes("Small grouped actions"), "Docs content manifest missing button group sizing sample");
assert(
  docsContent.includes("Large grouped links"),
  "Docs content manifest missing large anchor button group sizing sample"
);
assert(docsContent.includes('"/core/utility-first"'), "Docs content manifest missing utility-first route");
assert(docsContent.includes('"/core/variants"'), "Docs content manifest missing variants route");
assert(docsContent.includes('"/layout/responsive"'), "Docs content manifest missing responsive route");
assert(docsContent.includes('"/utilities/states"'), "Docs content manifest missing states route");
assert(docsContent.includes('"/utilities/colors"'), "Docs content manifest missing colors route");
assert(docsContent.includes('"/utilities/spacing"'), "Docs content manifest missing spacing route");
assert(docsContent.includes('"/helpers/no-jit"'), "Docs content manifest missing no-jit route");
assert(docsContent.includes('"/components/list-group"'), "Docs content manifest missing list-group route");
assert(docsContent.includes("list-group-flush"), "Docs content manifest missing flush list group sample");
assert(docsContent.includes("list-group-item-action"), "Docs content manifest missing action list group sample");
assert(docsContent.includes("list-group-title"), "Docs content manifest missing rich list group title sample");
assert(docsCss.includes(".docs-main .list-group"), "Docs CSS should preserve list group reset inside markdown content");
assert(
  docsContent.includes("Aksara.tooltip") && docsContent.includes("data-tooltip-dynamic"),
  "Docs JavaScript examples should show tooltip options"
);
assert(
  docsContent.includes("placement") && docsContent.includes("top"),
  "Docs JavaScript examples should document placement options"
);
assert(
  docsContent.includes("container") && docsContent.includes("body"),
  "Docs JavaScript examples should document container options"
);
assert(docsContent.includes("html: true"), "Docs JavaScript examples should document HTML popover options");
assert(docsContent.includes("HTML Content"), "Docs JavaScript examples should document popover content options");
assert(
  docsContent.includes("backdrop: true"),
  "Docs JavaScript examples should document modal/offcanvas backdrop options"
);
assert(
  docsContent.includes("keyboard: true"),
  "Docs JavaScript examples should document modal/offcanvas keyboard options"
);
assert(
  docsContent.includes("data-modal-draggable") && docsContent.includes("draggable: true"),
  "Docs should document modal draggable options"
);
assert(docsContent.includes("parent: true"), "Docs JavaScript examples should document accordion parent options");
assert(
  docsContent.includes("Shared Parent Across Columns"),
  "Docs content manifest missing shared accordion parent sample"
);
assert(
  docsContent.includes("data-accordion-parent") && docsContent.includes("#billingFaqGroup"),
  "Docs content manifest missing accordion shared parent data API sample"
);
assert(
  docsContent.includes("#billingFaqGroup"),
  "Docs JavaScript examples should document accordion selector parent option"
);
assert(
  docsContent.includes("delay: 5000") || docsContent.includes("delay: 3500"),
  "Docs JavaScript examples should document toast delay options"
);
assert(docsContent.includes("Universal Dismiss"), "Docs content manifest missing universal dismiss documentation");
assert(
  docsContent.includes("data-dismiss") && docsContent.includes("#releaseAlert"),
  "Docs content manifest missing dismissible alert selector sample"
);
assert(
  docsContent.includes("data-dismiss") && docsContent.includes("#modalSample"),
  "Docs content manifest missing dismissible modal sample"
);
assert(
  docsContent.includes("activeIndex: 0"),
  "Docs JavaScript examples should document tabs/carousel active index options"
);
assert(docsContent.includes("autoplay: false"), "Docs JavaScript examples should document carousel autoplay options");
assert(
  docsContent.includes("pauseOnHover: true"),
  "Docs JavaScript examples should document carousel pause-on-hover options"
);
assert(
  docsContent.includes("orientation") && docsContent.includes("horizontal"),
  "Docs JavaScript examples should document tabs orientation options"
);
assert(docsContent.includes("badge-dot text-success"), "Docs content manifest missing badge dot variation sample");
assert(docsContent.includes("Nested App Path"), "Docs content manifest missing breadcrumb variation sample");
assert(docsContent.includes("Dot Separator"), "Docs content manifest missing breadcrumb dot separator sample");
assert(docsContent.includes("Arrow Separator"), "Docs content manifest missing breadcrumb arrow separator sample");
assert(docsContent.includes("breadcrumb-arrow"), "Docs content manifest missing breadcrumb arrow class sample");
assert(
  docsContent.includes("table-compact table-hover"),
  "Docs content manifest missing compact table variation sample"
);
assert(docsContent.includes("CRUD Table"), "Docs content manifest missing CRUD table sample");
assert(docsContent.includes("Search users"), "Docs content manifest missing CRUD table search sample");
assert(docsContent.includes("mdi-pencil-outline"), "Docs content manifest missing CRUD table update action");
assert(docsContent.includes("Showing 1-3 of 24 users"), "Docs content manifest missing CRUD table pagination footer");
assert(
  docsContent.includes("placeholder placeholder-wave block") && docsContent.includes("width:48px"),
  "Docs content manifest missing placeholder wave variation sample"
);
assert(docsContent.includes("Text Skeleton"), "Docs content manifest missing placeholder text skeleton sample");
assert(docsContent.includes("Table Skeleton"), "Docs content manifest missing placeholder table skeleton sample");
assert(docsContent.includes("Form Skeleton"), "Docs content manifest missing placeholder form skeleton sample");
assert(
  docsContent.includes("placeholder text-primary block") && docsContent.includes("width:96px"),
  "Docs content manifest missing tinted placeholder sample"
);
assert(docsContent.includes("Static Sizing Utilities"), "Docs content manifest missing updated sizing documentation");
assert(
  docsContent.includes("Arbitrary Sizes") && docsContent.includes("w-[33.3333%]"),
  "Docs content manifest missing arbitrary sizing documentation"
);
assert(docsContent.includes('"/components/progress"'), "Docs content manifest missing progress route");
assert(docsContent.includes('"/components/spinner"'), "Docs content manifest missing spinner route");
assert(
  !docsContent.includes(`"${oldProgressSpinnerRoute}"`),
  "Docs content manifest should not include combined progress and spinner route"
);
assert(
  !docsContent.includes(oldProgressSpinnerLabel),
  "Docs content manifest should not include combined progress and spinner page title"
);
assert(docsContent.includes('"/components/tooltip"'), "Docs content manifest missing tooltip route");
assert(docsContent.includes('"/components/popover"'), "Docs content manifest missing popover route");
assert(
  !docsContent.includes(`"${oldTooltipPopoverRoute}"`),
  "Docs content manifest should not include combined tooltip and popover route"
);
assert(
  !docsContent.includes(oldTooltipsPopoversTitle),
  "Docs content manifest should not include combined tooltip and popover page title"
);
assert(docsContent.includes("Navbar Scrollspy"), "Docs content manifest missing navbar scrollspy sample");
assert(docsContent.includes("Nav Pills Scrollspy"), "Docs content manifest missing nav pills scrollspy sample");
assert(docsContent.includes("data-docs-scrollspy-link"), "Docs content manifest missing scrollspy link bindings");
assert(docsContent.includes("Nav Pills Tabs"), "Docs content manifest missing nav pills tabs sample");
assert(docsContent.includes("accordion-icon"), "Docs content manifest missing animated accordion icon sample");
assert(docsContent.includes('"/helpers/ratio"'), "Docs content manifest missing ratio route");
[
  "src/docs/content/index.md",
  "src/docs/content/core/utility-first.md",
  "src/docs/content/core/variants.md",
  "src/docs/content/core/dark-mode.md",
  "src/docs/content/core/static-css.md",
  "src/docs/content/components/buttons.md",
  "src/docs/content/components/button-group.md",
  "src/docs/content/components/cards.md",
  "src/docs/content/components/list-group.md",
  "src/docs/content/components/modal.md",
  "src/docs/content/components/progress.md",
  "src/docs/content/components/spinner.md",
  "src/docs/content/components/placeholders.md",
  "src/docs/content/components/tooltip.md",
  "src/docs/content/components/popover.md",
  "src/docs/content/forms/forms.md",
  "src/docs/content/layout/grid.md",
  "src/docs/content/layout/container.md",
  "src/docs/content/layout/responsive.md",
  "src/docs/content/forms/validation.md",
  "src/docs/content/typography/typography.md",
  "src/docs/content/utilities/utilities.md",
  "src/docs/content/utilities/colors.md",
  "src/docs/content/utilities/spacing.md",
  "src/docs/content/utilities/sizing.md",
  "src/docs/content/utilities/borders.md",
  "src/docs/content/utilities/states.md",
  "src/docs/content/helpers/no-jit.md",
  "src/docs/content/helpers/customization.md",
  "src/docs/content/helpers/ratio.md",
  "src/docs/content/helpers/stacks.md",
  "src/docs/content/helpers/links.md",
  "src/docs/content/helpers/visually-hidden.md",
  "src/docs/content/helpers/javascript.md"
].forEach((file) => assert(fs.existsSync(path.join(root, file)), `Missing docs markdown: ${file}`));

// --------------------------------------------------------------------------
// UI Components Tests
// --------------------------------------------------------------------------
assert(
  input({ name: "email", type: "email", placeholder: "test@example.com" }).includes('type="email"'),
  "input failed"
);
assert(textarea({ name: "notes", value: "hello" }).includes(">hello</textarea>"), "textarea failed");
assert(
  select({ name: "cat", options: [{ label: "A", value: "a" }], value: "a" }).includes("selected>A</option>"),
  "select failed"
);
assert(checkbox({ name: "agree", label: "I agree" }).includes("form-check"), "checkbox failed");
assert(radio({ name: "opt", value: "1", label: "One" }).includes('type="radio"'), "radio failed");
assert(switchInput({ name: "notif", label: "Enable" }).includes("form-switch"), "switch failed");
assert(range({ name: "volume", min: 0, max: 100 }).includes("form-range"), "range failed");

assert(card({ children: cardBody({ children: "content" }) }).includes("card-body"), "card failed");
assert(table({ children: "<tr><td>data</td></tr>", striped: true }).includes("table-striped"), "table failed");
assert(
  accordion({ children: accordionItem({ id: "item1", title: "Item 1", body: "Body 1" }) }).includes(
    'data-accordion="#item1"'
  ),
  "accordion failed"
);

assert(alert({ content: "Warning!", variant: "warning", dismissible: true }).includes("alert-warning"), "alert failed");
assert(badge({ label: "New", variant: "success", pill: true }).includes("badge-success rounded-pill"), "badge failed");
assert(progress({ value: 50 }).includes('style="width: 50%;"'), "progress failed");
assert(spinner({ size: "sm" }).includes("spinner spinner-sm"), "spinner failed");
assert(toast({ title: "Hi", body: "Msg" }).includes("toast-header"), "toast failed");

assert(modal({ id: "myModal", children: "Modal content" }).includes('id="myModal"'), "modal failed");
assert(dropdown({ children: "<button>Open</button>" }).includes('class="dropdown"'), "dropdown failed");
assert(offcanvas({ id: "drawer", placement: "end" }).includes("offcanvas-end"), "offcanvas failed");
assert(popoverTrigger({ content: "Info", children: "Hover" }).includes('data-popover="Info"'), "popover failed");
assert(tooltipTrigger({ title: "Help", children: "Hover" }).includes('data-tooltip="Help"'), "tooltip failed");

assert(
  breadcrumb({ items: [{ label: "Home", href: "/" }, { label: "Sub" }] }).includes("breadcrumb-item active"),
  "breadcrumb failed"
);
assert(
  pagination({ items: [{ label: "1", active: true }, { label: "2" }] }).includes("page-item active"),
  "pagination failed"
);
assert(
  tabs({ items: [{ id: "t1", label: "Tab 1", content: "Content 1" }] }).includes('data-tabs="#panel-t1"'),
  "tabs failed"
);

assert(button({ label: "Save", variant: "primary" }).includes("btn btn-primary"), "button failed");
assert(buttonGroup({ children: "<button>1</button>" }).includes("btn-group"), "buttonGroup failed");
assert(closeButton().includes("btn-close"), "closeButton failed");

assert(collapse({ id: "colDemo", children: "Collapsible text" }).includes('id="colDemo"'), "collapse failed");
assert(
  collapseTrigger({ targetId: "colDemo", children: "Toggle" }).includes('data-collapse="#colDemo"'),
  "collapseTrigger failed"
);
assert(
  carousel({ slides: [{ content: "Slide 1" }, { content: "Slide 2" }] }).includes("carousel-inner"),
  "carousel failed"
);
assert(scrollspyTarget({ id: "spTarget", children: "Content" }).includes('id="spTarget"'), "scrollspyTarget failed");
assert(
  scrollspyNav({ targetId: "spTarget", items: [{ id: "sec1", label: "Sec 1" }] }).includes("data-scrollspy-link"),
  "scrollspyNav failed"
);
assert(
  floatingLabel({
    controlHtml: '<input class="form-control" id="flIn" placeholder="Email">',
    label: "Email",
    htmlFor: "flIn"
  }).includes("form-floating"),
  "floatingLabel failed"
);
assert(formRow({ children: formCol({ children: "Col" }) }).includes("row g-3"), "formRow failed");

assert(
  mediaGrid({ items: [{ src: "1.jpg" }, { src: "2.jpg" }] }).includes("media-grid media-grid-2"),
  "mediaGrid failed"
);
assert(mediaPreviewModal({ items: [{ src: "1.jpg" }] }).includes("media-modal-backdrop"), "mediaPreviewModal failed");

// PascalCase assertions
assert(Input({ name: "email", type: "email" }).includes('type="email"'), "Input failed");
assert(Textarea({ name: "notes" }).includes("<textarea"), "Textarea failed");
assert(Select({ options: [{ label: "A", value: "a" }] }).includes("<select"), "Select failed");
assert(Checkbox({ label: "Check" }).includes('type="checkbox"'), "Checkbox failed");
assert(Radio({ name: "r", value: "1", label: "Rad" }).includes('type="radio"'), "Radio failed");
assert(Switch({ label: "Sw" }).includes('role="switch"'), "Switch failed");
assert(Range({ name: "rng" }).includes('type="range"'), "Range failed");
assert(Button({ label: "Save", variant: "primary" }).includes("btn btn-primary"), "Button failed");
assert(Card({ children: CardBody({ children: "content" }) }).includes("card-body"), "Card failed");
assert(Modal({ id: "myModal", children: "Modal content" }).includes('id="myModal"'), "Modal failed");
assert(MediaGrid({ items: [{ src: "1.jpg" }] }).includes("media-grid"), "MediaGrid failed");
assert(Avatar({ initials: "AB", size: "lg", status: "online" }).includes("avatar avatar-lg"), "Avatar failed");
assert(AvatarGroup({ avatars: [{ initials: "A" }, { initials: "B" }] }).includes("avatar-group"), "AvatarGroup failed");

assert(bentoGrid({ cols: 3, children: "items" }).includes("bento-grid-3"), "bentoGrid failed");
assert(
  bentoCard({ colSpan: 2, featured: true, children: "content" }).includes("bento-col-2 bento-featured"),
  "bentoCard failed"
);
assert(BentoGrid({ children: BentoCard({ children: "Card" }) }).includes("bento-card"), "Bento PascalCase failed");
assert(skeleton({ variant: "text", wave: true }).includes("skeleton-text skeleton-wave"), "skeleton failed");
assert(Skeleton({ variant: "circle" }).includes("skeleton-circle"), "Skeleton PascalCase failed");
assert(timeline({ children: "<li>" }).includes("timeline"), "timeline failed");
assert(Timeline({ children: "<li>" }).includes("timeline"), "Timeline PascalCase failed");

assert(Chip({ label: "Category", icon: "mdi-tag", removable: true }).includes("chip-label"), "Chip failed");
assert(chip({ label: "Test", soft: true, variant: "primary" }).includes("chip-soft-primary"), "chip function failed");
assert(
  OptionPickerModal({
    id: "testPicker",
    title: "Select Alert",
    options: [{ value: "1", label: "One" }]
  }).includes('data-picker-value="1"'),
  "OptionPickerModal failed"
);
assert(
  PickerModal({
    id: "testPicker2",
    title: "Select Alert 2",
    options: [{ value: "2", label: "Two" }]
  }).includes('data-picker-value="2"'),
  "PickerModal failed"
);
assert(
  QuoteCard({
    author: { name: "User", handle: "@user" },
    content: "Quoted message"
  }).includes("quote-card"),
  "QuoteCard failed"
);
assert(quoteCard({ author: { name: "A" } }).includes("quote-card"), "quoteCard failed");

assert(GuestGate({ title: "Login to see" }).includes("guest-gate-wrapper"), "GuestGate failed");
assert(guestGate({ variant: "slide", title: "Slide Lock" }).includes("guest-gate-slide"), "guestGate slide failed");
assert(AuthPromptModal({ title: "Sign in now" }).includes("authPromptModal"), "AuthPromptModal failed");
assert(AuthModal({ title: "Sign in modal" }).includes("auth-modal"), "AuthModal failed");

assert(css.includes(".chip"), "Missing .chip in generated CSS");
assert(css.includes(".dropdown-select-toggle"), "Missing .dropdown-select-toggle in generated CSS");

// Verify Theme Manager & Clipboard in JS
assert(js.includes("setTheme"), "Missing setTheme in JS runtime");
assert(js.includes("getTheme"), "Missing getTheme in JS runtime");
assert(js.includes("initTheme"), "Missing initTheme in JS runtime");
assert(js.includes("data-clipboard"), "Missing data-clipboard support in JS runtime");

// Verify local vendor MDI assets exist
assert(
  fs.existsSync(path.join(root, "src/docs/assets/vendor/mdi/css/materialdesignicons.min.css")),
  "Missing local vendor MDI CSS"
);
assert(
  fs.existsSync(path.join(root, "src/docs/assets/vendor/mdi/fonts/materialdesignicons-webfont.woff2")),
  "Missing local vendor MDI font"
);

// Verify no external picsum.photos in docs
assert(!docsContent.includes("picsum.photos"), "Docs content still contains external picsum.photos URLs");

// Verify dist/components output files exist
assert(fs.existsSync(path.join(root, "dist/components/index.js")), "Missing dist/components/index.js");
assert(fs.existsSync(path.join(root, "dist/components/index.d.ts")), "Missing dist/components/index.d.ts");
assert(fs.existsSync(path.join(root, "dist/components/form/index.js")), "Missing dist/components/form/index.js");
assert(fs.existsSync(path.join(root, "dist/components/form/index.d.ts")), "Missing dist/components/form/index.d.ts");
assert(fs.existsSync(path.join(root, "dist/components/data/bento.js")), "Missing dist/components/data/bento.js");
assert(fs.existsSync(path.join(root, "dist/components/data/bento.d.ts")), "Missing dist/components/data/bento.d.ts");
assert(fs.existsSync(path.join(root, "dist/components/data/timeline.js")), "Missing dist/components/data/timeline.js");
assert(
  fs.existsSync(path.join(root, "dist/components/feedback/skeleton.js")),
  "Missing dist/components/feedback/skeleton.js"
);

// ── Inset Scale & Logical Positioning (integer 0..5 scale matching spacing) ──
assert(hasExactClassRule("top-0"), "Missing top-0 in CSS");
assert(hasExactClassRule("top-1"), "Missing top-1 in CSS");
assert(hasExactClassRule("top-2"), "Missing top-2 in CSS");
assert(hasExactClassRule("top-3"), "Missing top-3 in CSS");
assert(hasExactClassRule("top-4"), "Missing top-4 in CSS");
assert(hasExactClassRule("top-5"), "Missing top-5 in CSS");
assert(hasExactClassRule("-top-1"), "Missing -top-1 in CSS");
assert(hasExactClassRule("-top-3"), "Missing -top-3 in CSS");
assert(hasExactClassRule("inset-0"), "Missing inset-0 in CSS");
assert(hasExactClassRule("inset-3"), "Missing inset-3 in CSS");
assert(hasExactClassRule("inset-x-2"), "Missing inset-x-2 in CSS");
assert(hasExactClassRule("inset-y-3"), "Missing inset-y-3 in CSS");
assert(hasExactClassRule("inset-block-start-3"), "Missing inset-block-start-3 in CSS");
assert(hasExactClassRule("inset-inline-start-3"), "Missing inset-inline-start-3 in CSS");

// Verify old pixel-scale inset utilities (e.g. top-10 = 10px, top-20 = 20px) are removed
assert(!hasExactClassRule("top-10"), "top-10 should not exist as a bare class; use top-[10px] or integer scale");
assert(!hasExactClassRule("top-20"), "top-20 should not exist as a bare class; use top-[20px] or integer scale");
assert(!hasExactClassRule("bottom-10"), "bottom-10 should not exist as a bare class");
assert(!hasExactClassRule("start-10"), "start-10 should not exist as a bare class");

// ── Strict Prohibition of Decimal Utility Classes ──
assert(!hasExactClassRule("p-1.5"), "p-1.5 must not exist as a generated rule");
assert(!hasExactClassRule("g-1.5"), "g-1.5 must not exist as a generated rule");
assert(!hasExactClassRule("m-2.5"), "m-2.5 must not exist as a generated rule");
assert(!hasExactClassRule("gap-1.5"), "gap-1.5 must not exist as a generated rule");
assert(!hasExactClassRule("top-1.5"), "top-1.5 must not exist as a generated rule");

// ── Font Size & Typography (Standardize on text-*, remove redundant fs-*) ──
assert(!hasExactClassRule("fs-1"), "fs-1 should be removed in favor of text-*");
assert(!hasExactClassRule("fs-4"), "fs-4 should be removed in favor of text-*");
assert(!hasExactClassRule("fs-6"), "fs-6 should be removed in favor of text-*");
assert(!hasExactClassRule("fs-8"), "fs-8 should be removed in favor of text-*");
assert(hasExactClassRule("text-xs"), "Missing text-xs in CSS");
assert(hasExactClassRule("text-sm"), "Missing text-sm in CSS");
assert(hasExactClassRule("text-base"), "Missing text-base in CSS");
assert(hasExactClassRule("text-xl"), "Missing text-xl in CSS");
assert(hasExactClassRule("text-2xl"), "Missing text-2xl in CSS");

// ── Generic Structural Utilities & Components ──
assert(css.includes(".avatar-stack"), "Missing .avatar-stack in CSS");
assert(css.includes(".list-group-divider-inset"), "Missing .list-group-divider-inset in CSS");
assert(css.includes(".list-group-inset"), "Missing .list-group-inset in CSS");

assert(AvatarStack({ children: Avatar({ initials: "A" }) }).includes("avatar-stack"), "AvatarStack failed");
assert(avatarStack().includes("avatar-stack"), "avatarStack failed");

// ── `.border` (shorthand resets color) must precede border color utilities ──
{
  const borderRule = css.search(/^\.border \{/m);
  ["border-primary", "border-danger", "border-subtle", "border-body", "border-transparent"].forEach((name) => {
    const colorRule = css.search(new RegExp(`^\\.${name} \\{`, "m"));
    assert(borderRule >= 0 && colorRule > borderRule, `.${name} must come after .border so it can override its color`);
  });
  assert(
    /^\.rounded-lg,\s*\.radius-lg \{/m.test(css) && !/^\.radius-lg \{/m.test(css),
    "radius-* must share the rounded-* rule instead of duplicating it"
  );
}

// ── Components must only emit utilities that exist (statically or via the runtime engine) ──
{
  const definedClasses = new Set<string>();
  for (const match of css.matchAll(/\.((?:\\.|[\w-])+)/g)) definedClasses.add(match[1].replace(/\\(.)/g, "$1"));
  const utilityLike =
    /^(?:[a-z0-9]+:)*-?(?:[mp][tbsexy]?|w|h|min-w|max-w|min-h|max-h|mw|mh|top|bottom|start|end|inset|gap|text|bg|border|rounded|radius|shadow|font|fw|fs|leading|tracking|z|opacity|flex|d|items|justify|self|order|grow|shrink|translate|rotate|scale|transition|duration|ease|cursor|select|overflow|whitespace|ring|decoration)-.*[^-]$/;
  const walkTs = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return walkTs(full);
      return entry.name.endsWith(".ts") ? [full] : [];
    });
  const undefinedUtilities: string[] = [];
  for (const file of [...walkTs(path.join(root, "src/components")), path.join(root, "src/generator/aksara.ts")]) {
    const source = fs.readFileSync(file, "utf8");
    const classStrings = [
      ...[...source.matchAll(/class(?:Name)?=\\?["']([^"'$]*)/g)].map((m) => m[1]),
      ...[...source.matchAll(/classNames\(\s*["'`]([^"'`$]*)/g)].map((m) => m[1])
    ];
    for (const token of classStrings.flatMap((value) => value.split(/\s+/)).filter(Boolean)) {
      if (!utilityLike.test(token) || definedClasses.has(token) || resolveRuntimeRule(token)) continue;
      undefinedUtilities.push(`${token} (${path.relative(root, file)})`);
    }
  }
  assert(
    undefinedUtilities.length === 0,
    `Components emit undefined utility classes:\n${[...new Set(undefinedUtilities)].join("\n")}`
  );
}

runComponentChecks();
runDocsChecks();

console.log("Aksara UI acceptance checks passed.");
