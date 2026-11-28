# Static CSS & On-Demand Runtime

Aksara UI is engineered for developers who value simplicity, fast rendering, and no build tool complexity.

## Zero-Tooling Architecture

Aksara UI ships a precompiled stylesheet with every component and the predictable utility scales. It does not scan your templates at build time and needs no Node.js process or bundler.

Values outside those scales are handled in the browser: once `Aksara.init()` has run, a small runtime engine watches the DOM and generates a CSS rule the first time it sees one of these classes:

- **Arbitrary bracket classes**: `w-[320px]`, `md:p-[2rem]`, `[position:sticky]`.
- **Color opacity classes**: `bg-primary/10`, `hover:border-danger/30`. Any level from `0` to `100` works, for the palette colors `primary`, `secondary`, `tertiary`, `success`, `danger`, `warning`, `info`, `dark` and `light`.
- **Variants that are not precompiled**: `disabled:opacity-[.5]`, `last:border-0`, `md:text-center`, `odd:bg-subtle`. The variant must wrap an existing static utility (or an arbitrary class).

Variants must follow the strict `theme → breakpoint → state` order. Unknown or misordered variants (`print:p-3`, `hover:md:p-3`) are ignored and no rule is generated. Arbitrary values may not contain `;`, `{` or `}`.

::html
<div class="docs-preview py-5 flex justify-center">
  <div class="row w-full gap-4">
    <div class="col-12 md:col-4">
      <div class="p-5 bg-body border border-subtle rounded-[12px] h-100 hover:border-primary/50 transition">
        <span class="mdi mdi-flash text-[28px] text-warning mb-3 d-block"></span>
        <h4 class="fw-bold mb-2 mt-0 text-body">Instant Setup</h4>
        <p class="text-subtle text-xs mb-0 mt-0 leading-[18px]">
          Add the CDN links directly to your HTML files. No npm install, no compiler, and no bundler required.
        </p>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-5 bg-body border border-subtle rounded-[12px] h-100 hover:border-primary/50 transition">
        <span class="mdi mdi-shield-check text-[28px] text-success mb-3 d-block"></span>
        <h4 class="fw-bold mb-2 mt-0 text-body">No Build-Time Scanning</h4>
        <p class="text-subtle text-xs mb-0 mt-0 leading-[18px]">
          Classes are resolved from the live DOM, so no build tool can strip a class it failed to find in your JavaScript.
        </p>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-5 bg-body border border-subtle rounded-[12px] h-100 hover:border-primary/50 transition">
        <span class="mdi mdi-server-network text-[28px] text-primary mb-3 d-block"></span>
        <h4 class="fw-bold mb-2 mt-0 text-body">CDN-Ready & Cached</h4>
        <p class="text-subtle text-xs mb-0 mt-0 leading-[18px]">
          Highly optimized, gzipped, and minified stylesheet easily distributed and cached globally.
        </p>
      </div>
    </div>
  </div>
</div>
::end

---

## Browser CDN Integration

Copy the Aksara UI distribution assets into your document. Pin the version you tested against:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aksara UI App</title>

    <!-- Aksara UI CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui@1.4.0/dist/aksara.min.css" />
    <!-- Material Design Icons (required peer dependency) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" />
  </head>
  <body class="bg-subtle text-body font-normal">
    <!-- Aksara UI JavaScript (runs Aksara.init() on DOMContentLoaded) -->
    <script src="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui@1.4.0/dist/aksara.min.js"></script>
  </body>
</html>
```

---

## Precompiled Utility Scales

Spacing, inset, translate, border width and opacity share one small `0..5` scale; radius, typography and font weights use semantic names only. Any other value is written as an arbitrary class (`rounded-[12px]`, `text-[13px]`, `z-[1050]`), generated on demand by the runtime engine.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th class="w-[25%]">Utility Group</th>
        <th class="w-[35%]">Static Scale</th>
        <th class="w-[40%]">Other Values</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Margins, Padding, Gap, Inset</strong></td>
        <td><code>0..5</code> = <code>0, .25rem, .5rem, 1rem, 1.5rem, 3rem</code></td>
        <td><code>p-[0.75rem]</code>, <code>-top-[10px]</code></td>
      </tr>
      <tr>
        <td><strong>Translate</strong></td>
        <td><code>translate-x-0..5</code> (spacing scale)</td>
        <td><code>translate-y-[-2px]</code></td>
      </tr>
      <tr>
        <td><strong>Border Radius</strong></td>
        <td><code>rounded-0</code>, <code>rounded-2xs</code> &hellip; <code>rounded-3xl</code>, <code>rounded</code> (theme default), <code>rounded-full</code>, <code>rounded-pill</code>, <code>rounded-circle</code></td>
        <td><code>rounded-[12px]</code></td>
      </tr>
      <tr>
        <td><strong>Border Width</strong></td>
        <td><code>border-0..5</code> = <code>0..5px</code></td>
        <td><code>border-[6px]</code></td>
      </tr>
      <tr>
        <td><strong>Z Index</strong></td>
        <td>&mdash; (<code>z-auto</code> only)</td>
        <td><code>z-[1050]</code></td>
      </tr>
      <tr>
        <td><strong>Opacity</strong></td>
        <td><code>opacity-0..5</code> = <code>0, .2, .4, .6, .8, 1</code></td>
        <td><code>opacity-[.85]</code></td>
      </tr>
      <tr>
        <td><strong>Font Size, Line Height, Letter Spacing</strong></td>
        <td><code>text-xs</code> &hellip; <code>text-6xl</code>, <code>leading-none</code> &hellip; <code>leading-loose</code>, <code>tracking-tight</code> &hellip; <code>tracking-widest</code></td>
        <td><code>text-[13px]</code>, <code>leading-[22px]</code>, <code>tracking-[.02em]</code></td>
      </tr>
      <tr>
        <td><strong>Font Weights</strong></td>
        <td><code>font-thin</code>, <code>font-extralight</code>, <code>font-light</code>, <code>font-normal</code>, <code>font-medium</code>, <code>font-extrabold</code>, <code>font-black</code>; weight classes <code>fw-light</code> (300), <code>fw-normal</code> (400), <code>fw-semibold</code> (600), <code>fw-bold</code> (700), <code>fw-bolder</code> (800), <code>fw-black</code> (900)</td>
        <td>&mdash;</td>
      </tr>
      <tr>
        <td><strong>Widths &amp; Heights</strong></td>
        <td><code>w-100</code>, <code>w-full</code>, <code>h-100</code>, <code>h-full</code>, <code>w/h-auto</code>, <code>w/h-screen</code></td>
        <td><code>w-[50%]</code>, <code>w-[33.3333%]</code>, <code>w-[320px]</code>, <code>max-w-[40rem]</code></td>
      </tr>
      <tr>
        <td><strong>Scale &amp; Skew</strong></td>
        <td>&mdash;</td>
        <td><code>scale-[.95]</code>, <code>skew-x-[6deg]</code></td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Dynamic Class Concatenation

Build-time scanners only see class names that appear literally in your source, so a concatenated class such as `` `bg-${color}` `` is missing from their production CSS. Aksara UI resolves classes from the live DOM instead:

- Static scale classes are always in the stylesheet, so a computed value from the scale works as long as it stays within `0..5`.
- Arbitrary and opacity classes are generated the moment they appear in the DOM, including in markup rendered later by your framework.

```js
const level = 3; // spacing scale 0..5 (3 = 1rem)
const width = 320;
element.className = `p-${level} w-[${width}px] bg-primary/10 rounded-[16px]`;
```

There is no `p-24`: values outside the scale must use the arbitrary form (`` `p-[${px}px]` ``).

This makes Aksara UI robust for client-rendered applications, headless component integrations, and state-driven interfaces.
