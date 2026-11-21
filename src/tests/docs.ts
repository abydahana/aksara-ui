import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { escapeArbitraryClass, resolveRuntimeRule } from "../generator/aksara";

/**
 * Documentation drift checks.
 *
 * Every class used in the README, the docs site and the examples page must either
 * exist in the built stylesheet (dist/aksara.css) or be something the runtime engine
 * (`Aksara.init()`) generates on demand. Stale claims about the engine are rejected.
 * Requires an up-to-date `dist/aksara.css` (run after the build).
 */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const STALE_PHRASES = [
  "no runtime",
  "no jit",
  "zero jit",
  "zero runtime",
  "no style injection",
  "runtime style injection",
  "aksara-ui@latest",
  "fully precompiled",
  "v1.1.0"
];

/**
 * Class names that intentionally have no rule in dist/aksara.css.
 * Keep this list short: every entry needs a reason.
 */
const ALLOWED_PREFIXES = [
  "docs-", // docs site shell and preview frames, styled by src/docs/assets/docs.css (not shipped)
  "demo-" // hooks for example-page scripts only, never meant to be styled by the library
];

function walk(target: string, ext: string): string[] {
  if (!fs.existsSync(target)) return [];
  if (fs.statSync(target).isFile()) return [target];
  return fs.readdirSync(target, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(target, entry.name);
    if (entry.isDirectory()) return walk(file, ext);
    return entry.isFile() && entry.name.endsWith(ext) ? [file] : [];
  });
}

export function docsFiles(): string[] {
  return [
    path.join(root, "README.md"),
    ...walk(path.join(root, "src/docs/content"), ".md"),
    path.join(root, "src/docs/index.html"),
    path.join(root, "src/examples/index.html")
  ];
}

function unescapeCssIdentifier(value: string): string {
  return value
    .replace(/\\([0-9a-fA-F]{1,6})\s?/g, (_, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/\\(.)/g, "$1");
}

interface StylesheetIndex {
  /** Every class name that appears anywhere in a selector. */
  classes: Set<string>;
  /** Declarations of top-level single-class rules (`.p-3 { ... }`), for variant lookups. */
  declarations: Map<string, string>;
}

/** Minimal CSS walker: collects selector preludes and top-level simple-rule bodies. */
function indexStylesheet(css: string): StylesheetIndex {
  const classes = new Set<string>();
  const declarations = new Map<string, string>();
  const source = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const stack: string[] = [];
  let buffer = "";

  for (const char of source) {
    if (char === "{") {
      const prelude = buffer.trim();
      buffer = "";
      const insideKeyframes = stack.some((p) => /^@(-\w+-)?keyframes/.test(p));
      if (!prelude.startsWith("@") && !insideKeyframes) {
        for (const match of prelude.matchAll(/\.((?:\\[0-9a-fA-F]{1,6}\s?|\\.|[\w-])+)/g)) {
          classes.add(unescapeCssIdentifier(match[1]));
        }
      }
      stack.push(prelude);
    } else if (char === "}") {
      const prelude = stack.pop() ?? "";
      if (stack.length === 0 && !prelude.startsWith("@")) {
        const body = buffer.replace(/\s+/g, " ").trim();
        for (const selector of prelude.split(",")) {
          const simple = selector.trim().match(/^\.([a-zA-Z_-][\w-]*)$/);
          if (simple && !declarations.has(simple[1])) declarations.set(simple[1], body);
        }
      }
      buffer = "";
    } else {
      buffer += char;
    }
  }
  return { classes, declarations };
}

/** Class tokens from `class="…"` / `class='…'` attributes, with `${…}` expressions neutralised. */
export function extractClassTokens(text: string): string[] {
  // Collapse template expressions so their contents never leak out as tokens.
  let neutral = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "$" && text[i + 1] === "{") {
      let depth = 0;
      let j = i + 1;
      for (; j < text.length; j++) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}" && --depth === 0) break;
      }
      neutral += "${}";
      i = j;
    } else {
      neutral += text[i];
    }
  }

  const tokens: string[] = [];
  for (const match of neutral.matchAll(/(?<![\w-])class\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
    for (const token of (match[1] ?? match[2] ?? "").split(/\s+/)) {
      if (token && !token.includes("${")) tokens.push(token);
    }
  }
  return tokens;
}

function isAllowed(token: string): boolean {
  if (token === "mdi" || token.startsWith("mdi-")) return true;
  return ALLOWED_PREFIXES.some((prefix) => token.startsWith(prefix));
}

/** True when `token` has a static rule in dist/aksara.css or a rule the runtime engine generates. */
export function createClassResolver(index: StylesheetIndex = loadStylesheetIndex()): (token: string) => boolean {
  const lookup = (utility: string): string | null => index.declarations.get(utility) ?? null;
  return (token) =>
    index.classes.has(token) ||
    // The engine escapes exactly like the build does; round-trip through it too.
    index.classes.has(unescapeCssIdentifier(escapeArbitraryClass(token))) ||
    resolveRuntimeRule(token, lookup) !== null;
}

function loadStylesheetIndex(): StylesheetIndex {
  return indexStylesheet(fs.readFileSync(path.join(root, "dist/aksara.css"), "utf8"));
}

function checkClasses(index: StylesheetIndex): void {
  const resolves = createClassResolver(index);
  const failures: string[] = [];
  for (const file of docsFiles()) {
    const unknown = new Set<string>();
    for (const token of extractClassTokens(fs.readFileSync(file, "utf8"))) {
      if (!isAllowed(token) && !resolves(token)) unknown.add(token);
    }
    if (unknown.size > 0) failures.push(`${path.relative(root, file)}: ${[...unknown].join(" ")}`);
  }
  assert.equal(
    failures.length,
    0,
    `Docs use classes with no static rule and no runtime rule:\n  ${failures.join("\n  ")}`
  );
}

function checkStalePhrases(): void {
  const failures: string[] = [];
  for (const file of docsFiles()) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      const lower = line.toLowerCase();
      for (const phrase of STALE_PHRASES) {
        if (lower.includes(phrase)) failures.push(`${path.relative(root, file)}:${i + 1}: "${phrase}"`);
      }
    });
  }
  assert.equal(failures.length, 0, `Stale phrases in docs:\n  ${failures.join("\n  ")}`);
}

function checkSelfTest(index: StylesheetIndex): void {
  // Boundary awareness: `.nav-link` must not satisfy `nav-lin`.
  assert.ok(index.classes.has("nav-link"));
  assert.ok(!index.classes.has("nav-lin"));
  // Escaped selectors are unescaped (`.md\:col-6`, `.\000032xl\:col`).
  assert.ok(index.classes.has("md:col-6"));
  assert.ok(index.classes.has("2xl:col"));
  const resolves = createClassResolver(index);
  for (const ok of ["bg-primary/10", "w-[33.3333%]", "md:text-center", "last:border-0", "[position:sticky]"]) {
    assert.ok(resolves(ok), `resolver should accept ${ok}`);
  }
  for (const bad of ["text-white", "py-20", "border-subtle/50", "hover:md:p-3", "rounded-t-3", "w-[1px;color:red]"]) {
    assert.ok(!resolves(bad), `resolver should reject ${bad}`);
  }
  assert.deepEqual(extractClassTokens(`<a class="p-3 \${x ? "a b" : "c"} m-0" class='x'>`), ["p-3", "m-0", "x"]);
  assert.deepEqual(extractClassTokens('<i data-class="nope" className="also-no">'), []);
}

export function runDocsChecks(): void {
  const index = loadStylesheetIndex();
  checkSelfTest(index);
  checkStalePhrases();
  checkClasses(index);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  runDocsChecks();
  console.log("docs checks passed");
}
