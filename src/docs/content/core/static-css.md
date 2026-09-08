# Static CSS & JIT-Free Philosophy

Aksara UI is engineered for modern developers who value simplicity, lightning-fast rendering speed, and zero build tool complexity.

## Zero-Tooling Architecture

Aksara UI provides a fully static, highly optimized, and pre-compiled CSS build out of the box. Unlike other modern utility frameworks, it does not scan templates, require runtime Node.js modules, or compile styles on the fly.

::html
<div class="docs-preview py-5 flex justify-center">
  <div class="row w-full gap-4">
    <div class="col-12 md:col-4">
      <div class="p-5 bg-body border border-subtle rounded-12 h-100% hover:border-primary/50 transition">
        <span class="mdi mdi-flash text-28 text-warning mb-3 d-block"></span>
        <h4 class="font-700 mb-2 mt-0 text-base">Instant Setup</h4>
        <p class="text-subtle text-xs mb-0 mt-0 leading-18">
          Add simple CDN links directly to your HTML files. No npm install, no compiler, and no bundler required.
        </p>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-5 bg-body border border-subtle rounded-12 h-100% hover:border-primary/50 transition">
        <span class="mdi mdi-shield-check text-28 text-success mb-3 d-block"></span>
        <h4 class="font-700 mb-2 mt-0 text-base">100% Safe JIT-Free</h4>
        <p class="text-subtle text-xs mb-0 mt-0 leading-18">
          Never worry about build utilities failing to parse your javascript or missing classes during production builds.
        </p>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="p-5 bg-body border border-subtle rounded-12 h-100% hover:border-primary/50 transition">
        <span class="mdi mdi-server-network text-28 text-primary mb-3 d-block"></span>
        <h4 class="font-700 mb-2 mt-0 text-base">CDN-Ready & Cached</h4>
        <p class="text-subtle text-xs mb-0 mt-0 leading-18">
          Highly optimized, gzipped, and minified stylesheet easily distributed and cached globally.
        </p>
      </div>
    </div>
  </div>
</div>
::end

---

## Browser CDN Integration

To start building beautiful, high-performance dashboards, simply copy and paste the premium Aksara UI distribution assets into your document's `<head>`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aksara UI App</title>

    <!-- Aksara UI CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aksara-ui@latest/dist/aksara.min.css" />
  </head>
  <body class="bg-subtle text-base font-normal">
    <!-- Aksara UI Javascript -->
    <script src="https://cdn.jsdelivr.net/npm/aksara-ui@latest/dist/aksara.min.js"></script>
  </body>
</html>
```

---

## Precompiled Utility Ranges

Aksara UI contains pre-computed utility classes compiled through optimized ranges. This lets you access precise spacing, typography sizes, and border dimensions with zero runtime latency.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">Utility Group</th>
        <th style="width: 25%;">Standard Range</th>
        <th style="width: 20%;">Step Increment</th>
        <th style="width: 30%;">Example Class</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Margins & Spacing</strong></td>
        <td><code>m-0</code> to <code>m-100</code></td>
        <td><code>1px</code></td>
        <td><code>m-4</code>, <code>-mx-3</code>, <code>ps-5</code></td>
      </tr>
      <tr>
        <td><strong>Widths & Heights</strong></td>
        <td><code>w-0</code> to <code>w-1000</code></td>
        <td><code>1px</code></td>
        <td><code>w-400</code>, <code>h-120</code>, <code>max-w-640</code></td>
      </tr>
      <tr>
        <td><strong>Fraction Widths</strong></td>
        <td><code>w-1/2</code>, <code>w-1/3</code>, <code>w-2/5</code></td>
        <td><code>ratio</code></td>
        <td><code>w-1/2</code>, <code>w-2/3</code>, <code>w-3/4</code></td>
      </tr>
      <tr>
        <td><strong>Border Radius</strong></td>
        <td><code>rounded-0</code> to <code>rounded-100</code></td>
        <td><code>1px</code></td>
        <td><code>rounded-12</code>, <code>rounded-full</code></td>
      </tr>
      <tr>
        <td><strong>Font Sizes</strong></td>
        <td><code>text-10</code> to <code>text-100</code></td>
        <td><code>1px</code></td>
        <td><code>text-14</code>, <code>text-28</code></td>
      </tr>
      <tr>
        <td><strong>Font Weights</strong></td>
        <td><code>font-100</code> to <code>font-900</code></td>
        <td><code>100</code></td>
        <td><code>font-700</code>, <code>font-semibold</code></td>
      </tr>
      <tr>
        <td><strong>Opacity Fills</strong></td>
        <td><code>opacity-0</code> to <code>opacity-100</code></td>
        <td><code>1%</code></td>
        <td><code>opacity-85</code>, <code>opacity-50</code></td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Safe Dynamic Class Concatenation

Traditional JIT CSS frameworks scan templates statically using string regex lookups. As a result, they **cannot** resolve dynamically concatenated classes at runtime, making patterns like `bg-${color}` or `p-${padding}` completely fail:

❌ **JIT-Based Framework (Fails)**:

```js
// The JIT compiler only reads static text; it will strip this class from production builds!
const paddingValue = 24;
element.className = `p-${paddingValue}`;
```

✅ **Aksara UI (Works Perfectly)**:

```js
// Precompiled static classes allow safe dynamic template literal resolutions!
const paddingValue = 24;
element.className = `p-${paddingValue} bg-primary/10 rounded-16`;
```

This makes Aksara UI exceptionally robust for client-rendered applications, headless component integrations, and state-driven web platforms!
