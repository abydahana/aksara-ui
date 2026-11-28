/** Static utilities: spacing, sizing, colors, borders, layout, typography, effects. */
import { colors } from "../palette";
import { add, addWithAlias, addRaw, escapeClass, colorValue, px, bootstrapSpacers } from "./core";

export function addSpacing(): void {
  for (const [key, value] of Object.entries(bootstrapSpacers)) {
    const n = Number(key);

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
    add(`gap-y-${n}`, `row-gap:${value}`);
    add(`col-gap-${n}`, `column-gap:${value}`);
    add(`gap-x-${n}`, `column-gap:${value}`);
  }
  add("m-auto", "margin:auto");
  add("mt-auto", "margin-block-start:auto");
  add("mb-auto", "margin-block-end:auto");
  add("ms-auto", "margin-inline-start:auto");
  add("me-auto", "margin-inline-end:auto");
  add("mx-auto", "margin-inline:auto");
  add("my-auto", "margin-block:auto");
}

export function addSizing(): void {
  // Only full-size and keyword sizing is static. Any other width/height is arbitrary
  // (`w-[50%]`, `h-[320px]`), so a typo such as `w-30` never silently "works".
  add("w-100", "width:100%");
  add("h-100", "height:100%");
  add("mw-100", "max-width:100%");
  add("mh-100", "max-height:100%");
  add("min-vw-100", "min-width:100vw");
  add("min-vh-100", "min-height:100vh");
  add("vw-100", "width:100vw");
  add("vh-100", "height:100vh");
  add("w-full", "width:100%");
  add("h-full", "height:100%");
  add("w-screen", "width:100vw");
  add("h-screen", "height:100vh");
  add("w-auto", "width:auto");
  add("h-auto", "height:auto");
  // Lets flex/grid children shrink below their content size (truncation, scroll areas).
  add("min-w-0", "min-width:0");
  add("min-h-0", "min-height:0");
}

export function addColors(): void {
  add("bg-transparent", "background-color:transparent");
  add("text-transparent", "color:transparent");
  add("border-transparent", "border-color:transparent");
  add("bg-current", "background-color:currentColor");
  add("text-current", "color:currentColor");
  add("border-current", "border-color:currentColor");
  add("bg-surface", "background-color:var(--aksara-surface)");

  // Color opacity levels (`bg-primary/10`, `border-danger/30`, ...) are intentionally
  // NOT generated here: the runtime engine (`resolveRuntimeRule` in aksara.ts)
  // resolves them on demand, like arbitrary bracket classes.
  for (const name of Object.keys(colors)) {
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
    // `--aksara-border-body` does not exist; the body border token is `--aksara-border`.
    add(`border-${name}`, `border-color:var(${name === "body" ? "--aksara-border" : `--aksara-border-${name}`})`);
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

export function addBorders(): void {
  add("border", "border:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-top", "border-block-start:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-bottom", "border-block-end:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-start", "border-inline-start:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-end", "border-inline-end:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-x", "border-inline:var(--aksara-border-width,1px) solid var(--aksara-border)");
  add("border-y", "border-block:var(--aksara-border-width,1px) solid var(--aksara-border)");
  // Numeric utilities follow the 0..5 scale; other values use arbitrary classes (`border-[6px]`).
  for (let n = 0; n <= 5; n += 1) add(`border-${n}`, `border-width:${px(n)};border-style:solid`);
  // Border style, after the shorthands and widths so `border-2 border-dashed` is dashed.
  for (const style of ["solid", "dashed", "dotted", "double", "none"]) add(`border-${style}`, `border-style:${style}`);
  // `radius-*` is an alias of `rounded-*`: one rule, two selectors.
  // Radius is semantic (`rounded-xs` ... `rounded-3xl`); `rounded-0` removes it. Other values: `rounded-[12px]`.
  addWithAlias("rounded-0", "radius-0", "border-radius:0");
  addWithAlias("rounded", "radius", "border-radius:var(--aksara-radius)");
  addWithAlias("rounded-2xs", "radius-2xs", "border-radius:var(--aksara-radius-2xs)");
  addWithAlias("rounded-xs", "radius-xs", "border-radius:var(--aksara-radius-xs)");
  addWithAlias("rounded-sm", "radius-sm", "border-radius:var(--aksara-radius-sm)");
  addWithAlias("rounded-md", "radius-md", "border-radius:var(--aksara-radius-md)");
  addWithAlias("rounded-lg", "radius-lg", "border-radius:var(--aksara-radius-lg)");
  addWithAlias("rounded-xl", "radius-xl", "border-radius:var(--aksara-radius-xl)");
  addWithAlias("rounded-2xl", "radius-2xl", "border-radius:var(--aksara-radius-2xl)");
  addWithAlias("rounded-3xl", "radius-3xl", "border-radius:var(--aksara-radius-3xl)");
  addWithAlias("rounded-full", "radius-full", "border-radius:9999px");
  add("rounded-pill", "border-radius:50rem");
  add("rounded-circle", "border-radius:50%");

  const directionalRadii: Record<string, [string, string]> = {
    top: ["border-start-start-radius", "border-start-end-radius"],
    bottom: ["border-end-start-radius", "border-end-end-radius"],
    start: ["border-start-start-radius", "border-end-start-radius"],
    end: ["border-start-end-radius", "border-end-end-radius"]
  };

  const cornerRadii: Record<string, string> = {
    "top-start": "border-start-start-radius",
    "top-end": "border-start-end-radius",
    "bottom-start": "border-end-start-radius",
    "bottom-end": "border-end-end-radius"
  };

  const radiusSizes: Record<string, string> = {
    "0": "0",
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
    addWithAlias(`rounded-${dir}`, `radius-${dir}`, `${p1}:var(--aksara-radius-md);${p2}:var(--aksara-radius-md)`);
    for (const [size, val] of Object.entries(radiusSizes)) {
      addWithAlias(`rounded-${dir}-${size}`, `radius-${dir}-${size}`, `${p1}:${val};${p2}:${val}`);
    }
  }

  for (const [corner, prop] of Object.entries(cornerRadii)) {
    addWithAlias(`rounded-${corner}`, `radius-${corner}`, `${prop}:var(--aksara-radius-md)`);
    for (const [size, val] of Object.entries(radiusSizes)) {
      addWithAlias(`rounded-${corner}-${size}`, `radius-${corner}-${size}`, `${prop}:${val}`);
    }
  }
}

export function addDisplayAndPosition(): void {
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
  for (const [key, value] of Object.entries(bootstrapSpacers)) {
    const n = Number(key);
    add(`top-${n}`, `inset-block-start:${value}`);
    add(`bottom-${n}`, `inset-block-end:${value}`);
    add(`start-${n}`, `inset-inline-start:${value}`);
    add(`end-${n}`, `inset-inline-end:${value}`);
    add(`inset-${n}`, `inset:${value}`);
    add(`inset-x-${n}`, `inset-inline:${value}`);
    add(`inset-y-${n}`, `inset-block:${value}`);
    add(`inset-block-start-${n}`, `inset-block-start:${value}`);
    add(`inset-block-end-${n}`, `inset-block-end:${value}`);
    add(`inset-inline-start-${n}`, `inset-inline-start:${value}`);
    add(`inset-inline-end-${n}`, `inset-inline-end:${value}`);
    add(`inset-block-${n}`, `inset-block:${value}`);
    add(`inset-inline-${n}`, `inset-inline:${value}`);
  }
  // z-index has no static scale: always explicit, e.g. `z-[1]`, `z-[1050]`.
  add("z-auto", "z-index:auto");
  add("top-auto", "inset-block-start:auto");
  add("bottom-auto", "inset-block-end:auto");
  add("start-auto", "inset-inline-start:auto");
  add("end-auto", "inset-inline-end:auto");
  add("inset-auto", "inset:auto");
  add("inset-x-auto", "inset-inline:auto");
  add("inset-y-auto", "inset-block:auto");
  add("inset-block-start-auto", "inset-block-start:auto");
  add("inset-block-end-auto", "inset-block-end:auto");
  add("inset-inline-start-auto", "inset-inline-start:auto");
  add("inset-inline-end-auto", "inset-inline-end:auto");
  add("inset-block-auto", "inset-block:auto");
  add("inset-inline-auto", "inset-inline:auto");
}

export function addFlexGrid(): void {
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
    "items-baseline": "align-items:baseline",
    "self-auto": "align-self:auto",
    "self-start": "align-self:flex-start",
    "self-center": "align-self:center",
    "self-end": "align-self:flex-end",
    "self-stretch": "align-self:stretch",
    "self-baseline": "align-self:baseline",
    "align-self-auto": "align-self:auto",
    "align-self-start": "align-self:flex-start",
    "align-self-center": "align-self:center",
    "align-self-end": "align-self:flex-end",
    "align-self-stretch": "align-self:stretch",
    "align-self-baseline": "align-self:baseline",
    "order-first": "order:-9999",
    "order-last": "order:9999",
    "order-0": "order:0",
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
    "display:flex;flex-wrap:wrap;margin-top:calc(-1*var(--aksara-gutter-y,0));margin-inline:calc(var(--aksara-gutter-x,1rem)/-2)"
  );
  // Default gutters at zero specificity, so `gap-*` (and `g-*`) on the row always win,
  // whatever order the rules are emitted in.
  addRaw(":where(.row)", "--aksara-gutter-x:1rem;--aksara-gutter-y:0");
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
    addRaw(`.row.${escapeClass(`gap-x-${n}`)}`, `--aksara-gutter-x:${value};column-gap:0`);
    addRaw(`.row.${escapeClass(`row-gap-${n}`)}`, `--aksara-gutter-y:${value};row-gap:0`);
    addRaw(`.row.${escapeClass(`gap-y-${n}`)}`, `--aksara-gutter-y:${value};row-gap:0`);
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

export function addTypography(): void {
  // Font size, line height and letter spacing are semantic only (`text-sm`, `leading-tight`,
  // `tracking-wide`); exact values use arbitrary classes (`text-[13px]`, `leading-[22px]`).
  Object.entries({
    "text-xs": "font-size:.75rem",
    "text-sm": "font-size:.875rem",
    "text-base": "font-size:1rem",
    "text-lg": "font-size:1.125rem",
    "text-xl": "font-size:1.25rem",
    "text-2xl": "font-size:1.5rem",
    "text-3xl": "font-size:1.875rem",
    "text-4xl": "font-size:2.25rem",
    "text-5xl": "font-size:3rem",
    "text-6xl": "font-size:3.75rem",
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
  Object.entries({
    "font-sans":
      'font-family:var(--aksara-font-sans,Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif)',
    "font-serif": "font-family:ui-serif,Georgia,Cambria,serif",
    "font-mono":
      'font-family:var(--aksara-font-mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace)',
    "font-monospace":
      'font-family:var(--aksara-font-mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace)!important',
    "font-thin": "font-weight:100",
    "font-extralight": "font-weight:200",
    "font-light": "font-weight:300",
    "font-normal": "font-weight:400",
    "font-medium": "font-weight:500",
    "font-extrabold": "font-weight:800",
    "font-black": "font-weight:900",
    // Bootstrap-style weight aliases
    "fw-light": "font-weight:300",
    "fw-normal": "font-weight:400",
    "fw-semibold": "font-weight:600",
    "fw-bold": "font-weight:700",
    "fw-bolder": "font-weight:800",
    "fw-black": "font-weight:900"
  }).forEach(([name, declarations]) => add(name, declarations));
}

export function addMotionEffectsLayout(): void {
  Object.entries({
    transition:
      "transition-property:color,background-color,border-color,opacity,box-shadow,transform;transition-duration:var(--aksara-duration,150ms);transition-timing-function:var(--aksara-ease,ease-in-out)",
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
    "blur-none": "filter:blur(0)",
    "blur-sm": "filter:blur(4px)",
    blur: "filter:blur(8px)",
    "blur-md": "filter:blur(12px)",
    "blur-lg": "filter:blur(16px)",
    "blur-xl": "filter:blur(24px)",
    "blur-2xl": "filter:blur(40px)",
    "scrollbar-none": "scrollbar-width:none;-ms-overflow-style:none",
    "scrollbar-thin": "scrollbar-width:thin",
    "container-inline": "container-type:inline-size",
    "container-normal": "container-type:normal",
    "@container": "container-type:inline-size"
  }).forEach(([name, declarations]) => add(name, declarations));
  addRaw(".scrollbar-none::-webkit-scrollbar", "display:none");
  // Durations, rotations and saturation are arbitrary: `duration-[200ms]`, `rotate-[45deg]`,
  // `backdrop-saturate-[150%]` (generated on demand).
  // 0..5 scale only. Scale/skew and any other value use arbitrary classes:
  // `scale-[.95]`, `skew-x-[6deg]`, `translate-y-[-2px]`, `opacity-[.35]`.
  for (let n = 0; n <= 5; n += 1) {
    add(`translate-x-${n}`, `transform:translateX(${bootstrapSpacers[n]})`);
    add(`translate-y-${n}`, `transform:translateY(${bootstrapSpacers[n]})`);
    add(`opacity-${n}`, `opacity:${n / 5}`);
  }
}

export function addScrollbars(): void {
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
