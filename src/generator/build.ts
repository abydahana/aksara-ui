import fs from "node:fs";
import path from "node:path";
import {
  createCompilerHost,
  createProgram,
  ModuleKind,
  ScriptTarget,
  transpileModule,
  type CompilerOptions
} from "typescript";
import { transformSync } from "esbuild";
import { docsContentDir, docsContentOutput, docsJsOutput, docsTs, distDir, root, srcTs } from "./paths";
import { conflictingDefinitions, orderDirectionalRules, rules, utilityMap } from "./css/core";
import {
  addBorders,
  addColors,
  addDisplayAndPosition,
  addFlexGrid,
  addMotionEffectsLayout,
  addScrollbars,
  addSizing,
  addSpacing,
  addTypography
} from "./css/utilities";
import { addExtras } from "./css/extras";
import { addAppComponents, addComponents, addComponentVariants, addSelectEnhancer, addSheets } from "./css/components";
import { preflight } from "./css/preflight";
import { addVariants, scanComponentRuntimeClasses } from "./css/variants";

// CSS generator entry point. Rule ORDER matters (later rules win at equal specificity):
// components -> utilities (borders before colors: `.border` resets the color) ->
// responsive/state variants -> precompiled runtime classes of Aksara's components.

const mdiPackageDir = path.join(root, "node_modules/@mdi/font");
const mdiCssFile = path.join(mdiPackageDir, "css/materialdesignicons.min.css");

/**
 * Material Design Icons are a required peer dependency. The build must fail loudly
 * instead of silently shipping a stylesheet without icons.
 */
function assertMdiInstalled(): void {
  if (!fs.existsSync(mdiCssFile)) {
    throw new Error(
      "[Aksara UI Build Error] Required peer dependency @mdi/font is not installed. Run `npm install @mdi/font`."
    );
  }
}

/**
 * Icons entry (`@abydahana/aksara-ui/css/icons`). It re-exports @mdi/font through a
 * bare-specifier import so the consumer's bundler resolves the peer dependency and
 * fails the consumer build when it is missing.
 */
function iconsCss(): string {
  return `${banner()}@import "@mdi/font/css/materialdesignicons.min.css";\n`;
}

function buildCss(): string {
  addComponents();
  addComponentVariants();
  addSelectEnhancer();
  addSheets();
  addAppComponents();
  addExtras();
  const utilitiesStart = rules.length;
  addSpacing();
  addSizing();
  // Borders before colors: `.border` uses the `border` shorthand (which resets the
  // color), so `border-primary` / `border-subtle` must come later to win.
  addBorders();
  addColors();
  addDisplayAndPosition();
  addFlexGrid();
  addTypography();
  addMotionEffectsLayout();
  addScrollbars();
  // Directional utilities win over their shorthands (`p-2 pb-0`), independent of the
  // order the families above are generated in
  rules.splice(utilitiesStart, rules.length - utilitiesStart, ...orderDirectionalRules(rules.slice(utilitiesStart)));
  addVariants();
  scanComponentRuntimeClasses();
  return `${banner()}${preflight()}${mergeAdjacentRules(rules).join("")}`;
}

const packageVersion: string = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).version;

/**
 * Groups ADJACENT rules that have identical declarations into one selector list
 * (`.a{x}.b{x}` -> `.a,.b{x}`). Only neighbours are merged, so cascade order is
 * unchanged. At-rules and vendor-prefixed / `:has()` selectors are left alone: one
 * unsupported selector would invalidate the whole grouped rule.
 */
function mergeAdjacentRules(input: string[]): string[] {
  const output: string[] = [];
  let pending: { selectors: string; declarations: string } | null = null;
  const flush = (): void => {
    if (pending) output.push(`${pending.selectors}{${pending.declarations}}`);
    pending = null;
  };
  for (const entry of input) {
    const match = entry.match(/^([^@{}][^{}]*)\{([^{}]*)\}$/);
    const mergeable = match && !/::?-|:has\(|:is\(|:where\(/.test(match[1]);
    if (!match || !mergeable) {
      flush();
      output.push(entry);
      continue;
    }
    if (pending && pending.declarations === match[2]) pending.selectors += `,${match[1]}`;
    else {
      flush();
      pending = { selectors: match[1], declarations: match[2] };
    }
  }
  flush();
  return output;
}

function banner(): string {
  return `/*! Aksara UI v${packageVersion} | Static CSS + on-demand runtime utilities | MIT */\n`;
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

function write(file: string, content: string): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function buildJs(): { esm: string; cjs: string; iife: string; iifeMin: string; dts: string } {
  const tsContent = fs.readFileSync(srcTs, "utf8");

  // Transpile TypeScript to ESM (readable, comments kept)
  const esmTranspiled = transpileModule(tsContent, {
    compilerOptions: {
      target: ScriptTarget.ES2022,
      module: ModuleKind.ESNext,
      removeComments: false
    }
  }).outputText;

  // CommonJS and browser IIFE builds come from a real compiler (esbuild), not regex
  // stripping: every `export` form is handled and the minifier understands template
  // literals (`calc(-${a} + ${b}px)` must keep its spaces).
  const footer = 'if(typeof window!=="undefined"){window.Aksara=__aksara.default;}';
  const iifeOptions = { loader: "js", format: "iife", globalName: "__aksara", target: "es2022", footer } as const;
  const iife = transformSync(esmTranspiled, { ...iifeOptions, banner: banner().trim() }).code;
  const iifeMin = transformSync(esmTranspiled, { ...iifeOptions, banner: banner().trim(), minify: true }).code;
  const cjs = transformSync(esmTranspiled, { loader: "js", format: "cjs", target: "es2022" }).code;
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

  return { esm, cjs: `${banner()}${cjs}`, iife, iifeMin, dts };
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

function validateNoDecimalClasses(): void {
  const scanDirs = [
    path.join(root, "src/components"),
    srcTs,
    docsContentDir,
    path.join(root, "src/examples"),
    path.join(root, "README.md")
  ];

  // Any numeric utility with a decimal step (`mt-1.5`, `px-2.5`, `gap-x-1.5`, `md:p-1.5`, `rounded-1.5`).
  const decimalClassRegex =
    /(?<![\w.[-])(?:[a-z0-9]+:)*-?(?:[mp][tbsexy]?|gap(?:-[xy])?|row-gap|col-gap|g[xy]?|w|h|top|bottom|start|end|inset(?:-[xy])?|rounded|radius|border|z|opacity|translate-[xy])-[0-9]+\.[0-9]+(?![\w\]])/g;
  const errors: string[] = [];

  function scanDir(dir: string): void {
    if (!fs.existsSync(dir)) return;
    const entries = fs.statSync(dir).isFile()
      ? [{ name: path.basename(dir), isDirectory: () => false, isFile: () => true, parent: path.dirname(dir) }]
      : fs.readdirSync(dir, { withFileTypes: true }).map((entry) => Object.assign(entry, { parent: dir }));
    for (const entry of entries) {
      const fullPath = path.join(entry.parent, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.isFile() && /\.(ts|js|html|md)$/.test(entry.name)) {
        const content = fs.readFileSync(fullPath, "utf8");
        const lines = content.split("\n");
        lines.forEach((line, idx) => {
          const classAttrMatch = line.match(/(?:class|className)\s*=\s*["'`]([^"'`]+)["'`]|classNames\(([^)]+)\)/g);
          if (classAttrMatch) {
            for (const match of classAttrMatch) {
              const decimals = match.match(decimalClassRegex);
              if (decimals) {
                for (const dec of decimals) {
                  errors.push(`  ${path.relative(root, fullPath)}:${idx + 1} -> prohibited decimal class "${dec}"`);
                }
              }
            }
          }
        });
      }
    }
  }

  for (const dir of scanDirs) {
    scanDir(dir);
  }

  if (errors.length > 0) {
    throw new Error(
      `[Aksara UI Build Error] Prohibited decimal utility class detected! Aksara UI strictly uses integer scale (0..5). Non-standard fractional spacing must use arbitrary bracket syntax (e.g. -[0.375rem]):\n${errors.join("\n")}`
    );
  }
}

validateNoDecimalClasses();
assertMdiInstalled();
fs.mkdirSync(distDir, { recursive: true });
// Fonts are no longer bundled with aksara.css; they come from the @mdi/font peer dependency.
fs.rmSync(path.join(distDir, "fonts"), { recursive: true, force: true });
const css = buildCss();
if (conflictingDefinitions.length > 0) {
  throw new Error(`[Aksara UI Build Error] Conflicting class definitions:\n  ${conflictingDefinitions.join("\n  ")}`);
}
const js = buildJs();

write(path.join(distDir, "aksara.css"), formatCss(css));
write(path.join(distDir, "aksara.min.css"), minifyCss(css));
write(path.join(distDir, "icons.css"), iconsCss());
write(path.join(distDir, "aksara.esm.js"), js.esm);
write(path.join(distDir, "aksara.cjs"), js.cjs);
write(path.join(distDir, "aksara.js"), js.iife);
write(path.join(distDir, "aksara.min.js"), js.iifeMin);
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
  fs.rmSync(distComponentsDir, { recursive: true, force: true });
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
  const result = program.emit();
  const errors = result.diagnostics.filter((d) => d.category === 1);
  if (errors.length > 0) {
    throw new Error(`[Aksara UI Build Error] Component emit failed with ${errors.length} diagnostic(s).`);
  }

  // Node's ESM loader needs explicit extensions: `from "../utils"` -> `from "../utils.js"`.
  const addJsExtensions = (dir: string): void => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        addJsExtensions(full);
        continue;
      }
      if (!/\.(js|d\.ts)$/.test(entry.name)) continue;
      const source = fs.readFileSync(full, "utf8");
      const rewritten = source.replace(/(from\s+|import\s*\(\s*)(["'])(\.{1,2}\/[^"']+)\2/g, (match, lead, q, spec) => {
        if (/\.(js|json|css)$/.test(spec)) return match;
        const target = path.resolve(path.dirname(full), spec);
        const suffix = fs.existsSync(target) && fs.statSync(target).isDirectory() ? "/index.js" : ".js";
        return `${lead}${q}${spec}${suffix}${q}`;
      });
      if (rewritten !== source) fs.writeFileSync(full, rewritten);
    }
  };
  addJsExtensions(distComponentsDir);
}

/** Copies MDI into the docs site vendor folder (the docs are static HTML, no bundler). */
function copyMdiAssets(): void {
  const docsVendorMdi = path.join(root, "src/docs/assets/vendor/mdi");
  fs.mkdirSync(path.join(docsVendorMdi, "css"), { recursive: true });
  fs.mkdirSync(path.join(docsVendorMdi, "fonts"), { recursive: true });
  fs.copyFileSync(mdiCssFile, path.join(docsVendorMdi, "css/materialdesignicons.min.css"));
  const fontsDir = path.join(mdiPackageDir, "fonts");
  for (const font of fs.readdirSync(fontsDir)) {
    fs.copyFileSync(path.join(fontsDir, font), path.join(docsVendorMdi, "fonts", font));
  }
}

/**
 * Copies Tom Select into the docs vendor folder. It is an optional peer dependency:
 * `Aksara.init()` enhances `.form-select` with it when present, styled by aksara.css.
 */
function copyTomSelectAssets(): void {
  const source = path.join(root, "node_modules/tom-select/dist/js/tom-select.complete.min.js");
  if (!fs.existsSync(source)) {
    console.warn("[Aksara UI] tom-select is not installed; docs selects fall back to native.");
    return;
  }
  const target = path.join(root, "src/docs/assets/vendor/tom-select");
  fs.mkdirSync(target, { recursive: true });
  fs.copyFileSync(source, path.join(target, "tom-select.complete.min.js"));
}

copyMdiAssets();
copyTomSelectAssets();
write(docsContentOutput, buildDocsContent());
buildDocsJs();
buildComponents();

console.log(`Generated ${utilityMap.size} utilities and ${rules.length} CSS rules.`);
