# Color System

Aksara UI ships its own palette rather than Bootstrap or Tailwind defaults: near-black neutrals with a faint warm tint and a near-black primary that turns off-white in dark mode, with semantic colors warmed slightly to match. Every color has a separate **dark theme value**, lifted so it stays legible on dark surfaces, and a **foreground token** that picks readable text for solid fills.

---

## Palette

Toggle the theme in the top bar to see each color switch to its dark-theme value.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="h-[64px] [background:rgb(var(--aksara-primary))]"></div>
        <div class="p-3">
          <span class="block fw-semibold text-sm capitalize">primary</span>
          <span class="block text-subtle text-xs mt-1">Brand actions, focus rings, links</span>
          <span class="block text-xs mt-2 font-mono text-subtle">light 34 32 29 · dark 236 233 228</span>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="h-[64px] [background:rgb(var(--aksara-secondary))]"></div>
        <div class="p-3">
          <span class="block fw-semibold text-sm capitalize">secondary</span>
          <span class="block text-subtle text-xs mt-1">Neutral actions and metadata</span>
          <span class="block text-xs mt-2 font-mono text-subtle">light 108 104 98 · dark 163 159 152</span>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="h-[64px] [background:rgb(var(--aksara-tertiary))]"></div>
        <div class="p-3">
          <span class="block fw-semibold text-sm capitalize">tertiary</span>
          <span class="block text-subtle text-xs mt-1">Quiet fills and placeholders</span>
          <span class="block text-xs mt-2 font-mono text-subtle">light 166 162 156 · dark 120 116 110</span>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="h-[64px] [background:rgb(var(--aksara-success))]"></div>
        <div class="p-3">
          <span class="block fw-semibold text-sm capitalize">success</span>
          <span class="block text-subtle text-xs mt-1">Confirmations, healthy states</span>
          <span class="block text-xs mt-2 font-mono text-subtle">light 27 128 86 · dark 86 190 140</span>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="h-[64px] [background:rgb(var(--aksara-danger))]"></div>
        <div class="p-3">
          <span class="block fw-semibold text-sm capitalize">danger</span>
          <span class="block text-subtle text-xs mt-1">Destructive actions, errors</span>
          <span class="block text-xs mt-2 font-mono text-subtle">light 196 62 52 · dark 236 112 98</span>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="h-[64px] [background:rgb(var(--aksara-warning))]"></div>
        <div class="p-3">
          <span class="block fw-semibold text-sm capitalize">warning</span>
          <span class="block text-subtle text-xs mt-1">Caution, pending states</span>
          <span class="block text-xs mt-2 font-mono text-subtle">light 226 152 40 · dark 238 182 88</span>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="h-[64px] [background:rgb(var(--aksara-info))]"></div>
        <div class="p-3">
          <span class="block fw-semibold text-sm capitalize">info</span>
          <span class="block text-subtle text-xs mt-1">Neutral notices, tips</span>
          <span class="block text-xs mt-2 font-mono text-subtle">light 31 113 170 · dark 104 170 222</span>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="h-[64px] [background:rgb(var(--aksara-dark))]"></div>
        <div class="p-3">
          <span class="block fw-semibold text-sm capitalize">dark</span>
          <span class="block text-subtle text-xs mt-1">Inverted surfaces, tooltips</span>
          <span class="block text-xs mt-2 font-mono text-subtle">light 28 26 24 · dark 48 46 43</span>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="border-bottom border-subtle h-[64px] [background:rgb(var(--aksara-light))]"></div>
        <div class="p-3">
          <span class="block fw-semibold text-sm capitalize">light</span>
          <span class="block text-subtle text-xs mt-1">Near-white fills on dark media</span>
          <span class="block text-xs mt-2 font-mono text-subtle">light 247 246 244 · dark 247 246 244</span>
        </div>
      </div>
    </div>
  </div>
</div>
::end

---

## Solid, Soft And Outline

Each color drives three treatments. Solid fills get a faint inner highlight and a tinted shadow. Soft and outline text is the palette color mixed toward the body text, so it darkens in light mode and brightens in dark mode and stays readable on its own tint.

::html
<div class="docs-preview">
  <div class="vstack gap-3">
    <div class="docs-row">
      <span class="text-xs fw-semibold text-subtle capitalize w-[84px]">primary</span>
      <button class="btn btn-primary btn-sm">Solid</button>
      <button class="btn btn-soft-primary btn-sm">Soft</button>
      <button class="btn btn-outline-primary btn-sm">Outline</button>
      <span class="badge badge-soft-primary">Badge</span>
      <span class="badge badge-outline-primary">Outline</span>
    </div>
    <div class="docs-row">
      <span class="text-xs fw-semibold text-subtle capitalize w-[84px]">secondary</span>
      <button class="btn btn-secondary btn-sm">Solid</button>
      <button class="btn btn-soft-secondary btn-sm">Soft</button>
      <button class="btn btn-outline-secondary btn-sm">Outline</button>
      <span class="badge badge-soft-secondary">Badge</span>
      <span class="badge badge-outline-secondary">Outline</span>
    </div>
    <div class="docs-row">
      <span class="text-xs fw-semibold text-subtle capitalize w-[84px]">success</span>
      <button class="btn btn-success btn-sm">Solid</button>
      <button class="btn btn-soft-success btn-sm">Soft</button>
      <button class="btn btn-outline-success btn-sm">Outline</button>
      <span class="badge badge-soft-success">Badge</span>
      <span class="badge badge-outline-success">Outline</span>
    </div>
    <div class="docs-row">
      <span class="text-xs fw-semibold text-subtle capitalize w-[84px]">danger</span>
      <button class="btn btn-danger btn-sm">Solid</button>
      <button class="btn btn-soft-danger btn-sm">Soft</button>
      <button class="btn btn-outline-danger btn-sm">Outline</button>
      <span class="badge badge-soft-danger">Badge</span>
      <span class="badge badge-outline-danger">Outline</span>
    </div>
    <div class="docs-row">
      <span class="text-xs fw-semibold text-subtle capitalize w-[84px]">warning</span>
      <button class="btn btn-warning btn-sm">Solid</button>
      <button class="btn btn-soft-warning btn-sm">Soft</button>
      <button class="btn btn-outline-warning btn-sm">Outline</button>
      <span class="badge badge-soft-warning">Badge</span>
      <span class="badge badge-outline-warning">Outline</span>
    </div>
    <div class="docs-row">
      <span class="text-xs fw-semibold text-subtle capitalize w-[84px]">info</span>
      <button class="btn btn-info btn-sm">Solid</button>
      <button class="btn btn-soft-info btn-sm">Soft</button>
      <button class="btn btn-outline-info btn-sm">Outline</button>
      <span class="badge badge-soft-info">Badge</span>
      <span class="badge badge-outline-info">Outline</span>
    </div>
  </div>
</div>
::end

---

## Foreground Tokens

Solid fills read their text color from `--aksara-{name}-foreground`. Light fills such as warning take dark text, darker fills take white. In dark mode the primary becomes off-white and the lifted fills switch to dark text. Override one token to retheme every solid button, badge, chip and progress bar of that color:

```css
:root {
  --aksara-warning-foreground: rgb(28 26 24);
}
[data-theme="dark"] {
  --aksara-primary-foreground: rgb(28 26 24);
}
```

---

## Soft Alpha-Transparency Syntax

Aksara UI features a **translucency syntax modifier** to compose translucent background fills, borders, text colors, decoration lines, or outline rings at any integer level between 0% and 100%:

```text
utility-color/alpha
```

- Any integer level between `0` and `100` works, on every palette color (`primary`, `secondary`, `tertiary`, `success`, `danger`, `warning`, `info`, `dark`, `light`) and with variants (`hover:bg-primary/10`, `dark:md:border-danger/30`).
- Examples: `bg-primary/10`, `text-primary/20`, `border-success/30`.
- Levels are generated on demand by `Aksara.init()` (like arbitrary bracket classes) instead of being precompiled, which keeps the static stylesheet small. Pages that render without JavaScript should use a solid color or an arbitrary value such as `bg-[rgb(var(--aksara-primary)/.1)]`.

### Subtle Background Accents

Subtle tints work well for alerts, badges, hover effects and highlights:

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="p-3 rounded-[10px] bg-primary/10 text-primary border border-primary/20 fw-semibold text-sm">bg-primary/10</div>
    <div class="p-3 rounded-[10px] bg-success/12 text-success border border-success/20 fw-semibold text-sm">bg-success/12</div>
    <div class="p-3 rounded-[10px] bg-danger/10 text-danger border border-danger/20 fw-semibold text-sm">bg-danger/10</div>
    <div class="p-3 rounded-[10px] bg-warning/15 text-body border border-warning/30 fw-semibold text-sm">bg-warning/15</div>
  </div>
</div>
::end

```html
<div class="bg-primary/10 text-primary border border-primary/20 rounded-[10px] p-3">...</div>
<div class="bg-success/12 text-success border border-success/20 rounded-[10px] p-3">...</div>
<div class="bg-danger/10 text-danger border border-danger/20 rounded-[10px] p-3">...</div>
```

---

## Overriding The Palette

Colors are space-separated RGB channels, so opacity levels can use `rgb(... / alpha)`. Light values live on `:root` (and `[data-theme="light"]`, `.light`); dark values on `[data-theme="dark"]` and `.dark`. Override both when you rebrand, for example a blue brand color and a greener success:

```css
:root,
[data-theme="light"],
.light {
  --aksara-primary: 37 99 235;
  --aksara-primary-foreground: rgb(255 255 255);
  --aksara-success: 22 136 90;
}

[data-theme="dark"],
.dark {
  --aksara-primary: 96 165 250;
  --aksara-primary-foreground: rgb(28 26 24);
  --aksara-success: 74 200 140;
}
```

Load this after `aksara.css`. A lone `:root` rule would also apply in dark mode, so always set both blocks. The full list of tokens is in [Customization](#/helpers/customization).

---

## Color Utility Groups

Aksara UI precompiles the solid utilities below for every palette color. The `/level` opacity forms are generated on demand by `Aksara.init()`. There are no literal color names such as `text-white`, `bg-white` or `bg-black`: use `text-light`, `bg-light`, `bg-dark`, or an arbitrary value (`bg-[rgb(0_0_0/.6)]`).

::html
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th class="w-[25%]">Category Prefix</th>
        <th class="w-[35%]">Generated Examples</th>
        <th class="w-[40%]">Underlying CSS Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bg-</code></td>
        <td><code>bg-primary</code>, <code>bg-primary/10</code></td>
        <td><code>background-color</code></td>
      </tr>
      <tr>
        <td><code>text-</code></td>
        <td><code>text-danger</code>, <code>text-danger/70</code></td>
        <td><code>color</code></td>
      </tr>
      <tr>
        <td><code>border-</code></td>
        <td><code>border-secondary</code>, <code>border-secondary/25</code></td>
        <td><code>border-color</code></td>
      </tr>
      <tr>
        <td><code>decoration-</code></td>
        <td><code>decoration-info</code></td>
        <td><code>text-decoration-color</code></td>
      </tr>
      <tr>
        <td><code>ring-</code></td>
        <td><code>ring-primary</code>, <code>ring-primary/40</code></td>
        <td>Modifies internal ring shadow borders.</td>
      </tr>
    </tbody>
  </table>
</div>
::end
