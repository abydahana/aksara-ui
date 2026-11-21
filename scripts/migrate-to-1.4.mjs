// Migrates class names removed in aksara-ui 1.4 (numeric scales above 5, numeric
// typography, percentage/fraction sizing, short directional radius) to the 1.4 grammar.
// Usage: node scripts/migrate-to-1.4.mjs [--write] [--only=w,h,...] <file...>
// Without --write it only prints what would change.
// Preserves the rendered value: old px/percent semantics become arbitrary values,
// exact matches become semantic names or the new 0..5 scale.
import fs from "node:fs";

// NOT idempotent for rounded/opacity/translate 1..5 (old px/percent vs new scale):
// run the full migration once per codebase; use --only=w,h for later partial passes.
const write = process.argv.includes("--write");
const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const only = onlyArg ? onlyArg.slice(7).split(",") : null;
const files = process.argv.slice(2).filter((a) => !a.startsWith("--"));

const textSemantic = {
  12: "xs",
  14: "sm",
  16: "base",
  18: "lg",
  20: "xl",
  24: "2xl",
  30: "3xl",
  36: "4xl",
  48: "5xl",
  60: "6xl"
};
const trackingSemantic = { 0: "normal", 5: "wide", 10: "wider", 15: "widest" };
const num = (n) => String(Number(n)).replace(/^0\./, ".");

const radiusSide = {
  t: "top",
  b: "bottom",
  s: "start",
  e: "end",
  tl: "top-start",
  tr: "top-end",
  bl: "bottom-start",
  br: "bottom-end"
};

const fontWeights = {
  100: "thin",
  200: "extralight",
  300: "light",
  400: "normal",
  500: "medium",
  600: "semibold",
  700: "bold",
  800: "extrabold",
  900: "black"
};
const radiusScale = { 1: "xs", 2: "sm", 3: "md", 4: "lg", 5: "xl" };
const xxlComponents =
  /^(btn|btn-close|btn-group|badge|form-control|form-select|input-group|pagination|spinner|navbar-expand|list-group-horizontal|table-responsive)-xxl$/;

function migrate(utility) {
  let m;
  // Bootstrap breakpoint infix -> prefix (col-md-6 -> md:col-6, sticky-lg-top -> lg:sticky-top)
  if (
    (m = utility.match(/^sticky-(sm|md|lg|xl|2xl|xxl)-(top|bottom)$/)) ||
    (m = utility.match(/^sticky-(top|bottom)-(sm|md|lg|xl|2xl|xxl)$/))
  )
    return /^(top|bottom)$/.test(m[1])
      ? `${m[2].replace("xxl", "2xl")}:sticky-${m[1]}`
      : `${m[1].replace("xxl", "2xl")}:sticky-${m[2]}`;
  if ((m = utility.match(/^col-(sm|md|lg|xl|2xl|xxl)(?:-(\d+|auto))?$/)))
    return `${m[1].replace("xxl", "2xl")}:col${m[2] ? `-${m[2]}` : ""}`;
  // Every other infix needs a value after the breakpoint, so sizes (text-lg, btn-sm) are untouched.
  if (
    (m = utility.match(
      /^(g|gx|gy|gap|col-gap|row-gap|d|flex|order|offset|align-items|align-self|align-content|justify-content|text|float|m|mt|mb|ms|me|mx|my|p|pt|pb|ps|pe|px|py)-(sm|md|lg|xl|2xl|xxl)-(.+)$/
    ))
  )
    return `${m[2].replace("xxl", "2xl")}:${m[1]}-${m[3]}`;
  // font-bold / font-semibold were removed in 1.4 in favour of fw-bold / fw-semibold
  if (utility === "font-bold" || utility === "font-700") return "fw-bold";
  if (utility === "font-semibold" || utility === "font-600") return "fw-semibold";
  if ((m = utility.match(/^font-([1-9]00)$/))) return `font-${fontWeights[m[1]]}`;
  if (utility === "text-md") return "text-base";
  if ((m = utility.match(/^duration-(\d+)$/))) return `duration-[${m[1]}ms]`;
  if ((m = utility.match(/^rotate-(\d+)$/))) return `rotate-[${m[1]}deg]`;
  if ((m = utility.match(/^backdrop-saturate-(\d+)$/))) return `backdrop-saturate-[${m[1]}%]`;
  if ((m = utility.match(xxlComponents))) return `${m[1]}-2xl`;
  // Directional radius 1..5 were radius tokens already (xs..xl).
  if ((m = utility.match(/^(?:rounded|radius)-((?:top|bottom|start|end)(?:-(?:start|end))?)-([1-5])$/)))
    return `rounded-${m[1]}-${radiusScale[m[2]]}`;
  if ((m = utility.match(/^(?:rounded|radius)-(tl|tr|bl|br|t|b|s|e)(-[a-z0-9]+)?$/)))
    return `rounded-${radiusSide[m[1]]}${m[2] ?? ""}`;
  if ((m = utility.match(/^(rounded|radius)-(\d+)$/))) {
    const n = +m[2];
    return n === 0 ? null : `rounded-[${n}px]`; // 1..5 used to be px; tokens now
  }
  if ((m = utility.match(/^border-(\d+)$/))) return +m[1] > 5 ? `border-[${m[1]}px]` : null;
  if ((m = utility.match(/^text-(\d+)$/))) {
    const n = +m[1];
    return textSemantic[n] ? `text-${textSemantic[n]}` : `text-[${n}px]`;
  }
  if ((m = utility.match(/^leading-(\d+)$/))) return `leading-[${m[1]}px]`;
  if ((m = utility.match(/^tracking-(\d+)$/))) {
    const n = +m[1];
    return trackingSemantic[n] !== undefined ? `tracking-${trackingSemantic[n]}` : `tracking-[${num(n / 100)}em]`;
  }
  if ((m = utility.match(/^z-(\d+)$/))) return `z-[${m[1]}]`; // no static z scale in 1.4
  if ((m = utility.match(/^opacity-(\d+)$/))) {
    const n = +m[1];
    if (n === 0) return null;
    if (n % 20 === 0) return `opacity-${n / 20}`; // 20/40/60/80/100 -> 1..5
    return `opacity-[${num(n / 100)}]`;
  }
  if ((m = utility.match(/^scale-(\d+)$/))) return `scale-[${num(+m[1] / 100)}]`;
  if ((m = utility.match(/^translate-([xy])-(\d+)$/))) return +m[2] === 0 ? null : `translate-${m[1]}-[${m[2]}px]`;
  if ((m = utility.match(/^skew-([xy])-(\d+)$/))) return `skew-${m[1]}-[${m[2]}deg]`;
  // Sizing: only w-100 / w-full / h-100 / h-full (and auto/screen keywords) stay static.
  if ((m = utility.match(/^([wh])-(\d+)\/(\d+)$/))) {
    const pct = Number(((+m[2] / +m[3]) * 100).toFixed(4));
    return pct === 100 ? `${m[1]}-100` : `${m[1]}-[${pct}%]`;
  }
  if ((m = utility.match(/^([wh])-(\d+)%$/))) return +m[2] === 100 ? `${m[1]}-100` : `${m[1]}-[${m[2]}%]`;
  if ((m = utility.match(/^([wh])-(\d+)$/))) {
    const n = +m[2];
    if (n === 100) return null;
    if ([25, 50, 75].includes(n)) return `${m[1]}-[${n}%]`; // aksara percentage widths
    return `${m[1]}-[${num(n / 4)}rem]`; // Tailwind-style spacing leftovers (w-7 = 1.75rem)
  }
  return null;
}

// A class token: optional variant prefixes, then the utility. Bounded by
// whitespace, quotes, backticks, or start/end so prose like "z-index" is untouched.
const tokenRe =
  /(?<=^|[\s"'`>(])((?:[a-z0-9-]+:)*)((?:rounded|radius|border|text|leading|tracking|z|opacity|scale|translate-[xy]|skew-[xy])-\d+|[wh]-\d+(?:%|\/\d+)?|(?:rounded|radius)-(?:tl|tr|bl|br|t|b|s|e)(?:-[a-z0-9]+)?|(?:rounded|radius)-(?:top|bottom|start|end)(?:-(?:start|end))?-[1-5]|font-[1-9]00|font-(?:semi)?bold|sticky-(?:(?:sm|md|lg|xl|2xl|xxl)-(?:top|bottom)|(?:top|bottom)-(?:sm|md|lg|xl|2xl|xxl))|(?:col|g|gx|gy|gap|col-gap|row-gap|d|flex|order|offset|align-items|align-self|justify-content|text|float|m|mt|mb|ms|me|mx|my|p|pt|pb|ps|pe|px|py)-(?:sm|md|lg|xl|2xl|xxl)(?:-[a-z0-9-]+)?|duration-\d+|rotate-\d+|backdrop-saturate-\d+|text-md|[a-z-]+-xxl)(?=$|[\s"'`<),])/gm;

let total = 0;
for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const changes = [];
  const out = src.replace(tokenRe, (full, prefix, utility) => {
    if (only && !only.includes(utility.replace(/-[^-]*$/, ""))) return full;
    const next = migrate(utility);
    if (!next) return full;
    changes.push(`${prefix}${utility} -> ${prefix}${next}`);
    return `${prefix}${next}`;
  });
  if (!changes.length) continue;
  total += changes.length;
  console.log(`${file}: ${changes.length}`);
  const counts = {};
  for (const c of changes) counts[c] = (counts[c] || 0) + 1;
  for (const [c, n] of Object.entries(counts)) console.log(`    ${n}x ${c}`);
  if (write) fs.writeFileSync(file, out);
}
console.log(`${write ? "migrated" : "would migrate"} ${total} class tokens`);
