# Customization

Aksara UI is themed entirely with CSS custom properties. Every component reads its colors, surfaces, radii, focus rings, motion and fonts from `--aksara-*` tokens, so you can rebrand a whole product, restyle one section, or change a single component without touching the component CSS. This page lists every token the stylesheet ships with, its light and dark defaults, and how to override it: globally in a stylesheet, on a scoped wrapper with arbitrary classes, or at build time in the generator. For switching between light and dark at runtime, see [Theme Adaptability](#/core/dark-mode).

---

## How Theming Works

Tokens come in three layers. Each layer reads from the one before it, so an override at a lower layer flows up into every component that uses it.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th class="w-[22%]">Layer</th><th class="w-[34%]">Examples</th><th>What it does</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1. Palette</strong></td>
        <td><code>--aksara-primary</code>, <code>--aksara-danger</code>, <code>--aksara-primary-foreground</code></td>
        <td>Nine semantic colors stored as space-separated RGB channels (<code>34 32 29</code>), plus the text color used on each solid fill. Each theme declares its own set.</td>
      </tr>
      <tr>
        <td><strong>2. Theme tokens</strong></td>
        <td><code>--aksara-surface</code>, <code>--aksara-text-body</code>, <code>--aksara-border</code>, <code>--aksara-ring</code>, <code>--aksara-shadow-md</code></td>
        <td>Semantic surfaces, text, borders, overlays, shadows and focus rings, declared once for light and once for dark.</td>
      </tr>
      <tr>
        <td><strong>3. Component tokens</strong></td>
        <td><code>--aksara-control-radius</code>, <code>--aksara-rating-color</code>, <code>--aksara-step-size</code>, <code>--aksara-stack-gap</code></td>
        <td>Knobs for one component or a family of components. Most default to a theme token, so they follow the theme unless you set them.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

The stylesheet emits the tokens in three blocks. Shape, motion and layout tokens are theme-independent and live on `:root`. The palette and theme tokens are declared twice, once per theme:

```css
/* Theme-independent: radius scale, control radius, ring width, motion, layout */
:root {
  --aksara-radius: 1rem;
  --aksara-control-radius: 0.625rem;
  --aksara-duration: 0.18s;
  /* ... */
}

/* Light palette + light theme tokens (the default) */
:root,
[data-theme="light"],
.light {
  --aksara-primary: 34 32 29;
  --aksara-primary-foreground: rgb(255 255 255);
  --aksara-surface: #ffffff;
  --aksara-text-body: #1c1a18;
  /* ... */
  color-scheme: light;
}

/* Dark palette + dark theme tokens */
[data-theme="dark"],
.dark {
  --aksara-primary: 236 233 228;
  --aksara-primary-foreground: rgb(28 26 24);
  --aksara-surface: #1a1918;
  --aksara-text-body: #edebe8;
  /* ... */
  color-scheme: dark;
}
```

### Why RGB channels

Palette colors hold bare channels instead of a full color, so any rule can add its own alpha. That is how one token produces the solid fill, the 12% soft tint and the focus ring of the same color:

```css
.btn-primary {
  background-color: rgb(var(--aksara-primary) / 1);
}
.badge-soft-primary {
  background-color: rgb(var(--aksara-primary) / 0.12);
}
.my-highlight {
  background: rgb(var(--aksara-primary) / 0.1);
}
```

The runtime opacity classes work the same way: `bg-primary/10`, `border-danger/30` and `hover:text-info/80` resolve to `rgb(var(--aksara-{color}) / alpha)`, so they follow your overrides automatically. When you override a palette color, always write channels (`37 99 235`), never `#2563eb` or `rgb(37 99 235)`.

Two kinds of color are derived rather than stored, which is why a single override is enough:

- **Soft text** (`btn-soft-*`, `badge-soft-*`, `link-*`, alert text) mixes the palette color 78% with `--aksara-text-body` (58% for `warning`), so it darkens on light themes, brightens on dark ones and stays readable on its own tint. `light` and `dark` use the body text color.
- **Hover fills** of solid buttons mix the color 86% with a warm mid-tone (`rgb(128 124 118)`), so a near-black primary lightens on hover and an off-white or amber one darkens.

---

## Brand Color

The primary color drives solid and soft buttons, badges, progress bars, checked checkboxes and switches, range fills, active pagination, focus rings, selection highlight and `link-primary`. To rebrand, override `--aksara-primary` and the text drawn on it, `--aksara-primary-foreground`, for both themes. Load this file after `aksara.css`:

```css
/* brand.css */
:root,
[data-theme="light"],
.light {
  --aksara-primary: 37 99 235;
  --aksara-primary-foreground: rgb(255 255 255);
}

[data-theme="dark"],
.dark {
  --aksara-primary: 96 165 250;
  --aksara-primary-foreground: rgb(11 18 32);
}
```

Repeat the full selector lists, in this order. A lone `:root { ... }` rule loaded after Aksara also matches `<html data-theme="dark">` with the same specificity, so it would replace the dark value too, and nested `.light` / `.dark` scopes would fall back to the stock palette.

The preview below scopes the same override to one card with arbitrary classes. Both cards hold identical markup; toggle the theme in the top bar to see the `dark:` overrides take over.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="card h-full">
        <div class="card-body vstack gap-3 [align-items:stretch]">
          <div class="hstack justify-between">
            <span class="fw-semibold">Default</span>
            <span class="badge badge-soft-primary">Stock palette</span>
          </div>
          <div class="hstack flex-wrap gap-2">
            <button type="button" class="btn btn-primary btn-sm">Upgrade plan</button>
            <button type="button" class="btn btn-soft-primary btn-sm">Compare</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Contact sales</button>
          </div>
          <div class="progress"><div class="progress-bar w-[68%]">68%</div></div>
          <div class="hstack flex-wrap gap-3">
            <label class="form-switch"><input type="checkbox" role="switch" checked /> <span class="form-check-label">Auto-renew</span></label>
            <label class="form-check"><input class="form-check-input" type="checkbox" checked /> <span class="form-check-label">Invoices by email</span></label>
          </div>
          <input type="text" class="form-control" placeholder="Focus me to see the ring" aria-label="Team name" />
          <p class="m-0 text-sm">Billed to Maya Chen · <a class="link-primary" href="#">View invoice</a> <span class="badge badge-primary">Pro</span></p>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="h-full [--aksara-primary:37_99_235] [--aksara-primary-foreground:#fff] dark:[--aksara-primary:96_165_250] dark:[--aksara-primary-foreground:#0b1220] [--aksara-ring:0_0_0_var(--aksara-ring-width)_rgb(var(--aksara-primary)/.2)]">
        <div class="card h-full">
          <div class="card-body vstack gap-3 [align-items:stretch]">
            <div class="hstack justify-between">
              <span class="fw-semibold">Brand override</span>
              <span class="badge badge-soft-primary">37 99 235</span>
            </div>
            <div class="hstack flex-wrap gap-2">
              <button type="button" class="btn btn-primary btn-sm">Upgrade plan</button>
              <button type="button" class="btn btn-soft-primary btn-sm">Compare</button>
              <button type="button" class="btn btn-outline-primary btn-sm">Contact sales</button>
            </div>
            <div class="progress"><div class="progress-bar w-[68%]">68%</div></div>
            <div class="hstack flex-wrap gap-3">
              <label class="form-switch"><input type="checkbox" role="switch" checked /> <span class="form-check-label">Auto-renew</span></label>
              <label class="form-check"><input class="form-check-input" type="checkbox" checked /> <span class="form-check-label">Invoices by email</span></label>
            </div>
            <input type="text" class="form-control" placeholder="Focus me to see the ring" aria-label="Team name" />
            <p class="m-0 text-sm">Billed to Maya Chen · <a class="link-primary" href="#">View invoice</a> <span class="badge badge-primary">Pro</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div
  class="[--aksara-primary:37_99_235] [--aksara-primary-foreground:#fff]
         dark:[--aksara-primary:96_165_250] dark:[--aksara-primary-foreground:#0b1220]
         [--aksara-ring:0_0_0_var(--aksara-ring-width)_rgb(var(--aksara-primary)/.2)]"
>
  <div class="card">
    <div class="card-body vstack gap-3">
      <button type="button" class="btn btn-primary btn-sm">Upgrade plan</button>
      <div class="progress"><div class="progress-bar w-[68%]">68%</div></div>
      <label class="form-switch"><input type="checkbox" role="switch" checked /> Auto-renew</label>
      <a class="link-primary" href="#">View invoice</a>
    </div>
  </div>
</div>
```

In arbitrary classes, `_` stands for a space, so `[--aksara-primary:37_99_235]` sets `--aksara-primary: 37 99 235`. These classes are generated in the browser by `Aksara.init()`.

> **Tokens that reference other tokens resolve where they are declared.** `--aksara-ring` is `0 0 0 var(--aksara-ring-width) rgb(var(--aksara-primary) / .2)` on the theme block, so descendants inherit the ring already computed with the stock primary. A global override in `brand.css` re-runs it on the same element and needs nothing else. A scoped wrapper must redeclare `--aksara-ring` too, as above, or inputs and checks keep the stock ring color. The same applies to `--aksara-on-media`.

---

## Palette Reference

Each palette entry is emitted four times per theme: the channels (`--aksara-primary`), a comma-separated copy (`--aksara-primary-rgb: 34, 32, 29`), a hex copy (`--aksara-primary-hex: #22201d`) and the fill foreground (`--aksara-primary-foreground`). The `-rgb` and `-hex` copies are computed when the stylesheet is built and no component reads them; overriding `--aksara-primary` does not update them.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Color</th>
        <th>Light channels</th>
        <th>Light foreground</th>
        <th>Dark channels</th>
        <th>Dark foreground</th>
        <th>Typical use</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>primary</code></td><td><code>34 32 29</code></td><td><code>rgb(255 255 255)</code></td><td><code>236 233 228</code></td><td><code>rgb(28 26 24)</code></td><td>Main actions, focus rings, selection</td></tr>
      <tr><td><code>secondary</code></td><td><code>108 104 98</code></td><td><code>rgb(255 255 255)</code></td><td><code>163 159 152</code></td><td><code>rgb(28 26 24)</code></td><td>Neutral actions, metadata</td></tr>
      <tr><td><code>tertiary</code></td><td><code>166 162 156</code></td><td><code>rgb(28 26 24)</code></td><td><code>120 116 110</code></td><td><code>rgb(255 255 255)</code></td><td>Quiet accents, placeholders</td></tr>
      <tr><td><code>success</code></td><td><code>27 128 86</code></td><td><code>rgb(255 255 255)</code></td><td><code>86 190 140</code></td><td><code>rgb(28 26 24)</code></td><td>Paid, active, valid, check marks</td></tr>
      <tr><td><code>danger</code></td><td><code>196 62 52</code></td><td><code>rgb(255 255 255)</code></td><td><code>236 112 98</code></td><td><code>rgb(28 26 24)</code></td><td>Destructive actions, errors, counters</td></tr>
      <tr><td><code>warning</code></td><td><code>226 152 40</code></td><td><code>rgb(28 26 24)</code></td><td><code>238 182 88</code></td><td><code>rgb(28 26 24)</code></td><td>Pending states, rating stars</td></tr>
      <tr><td><code>info</code></td><td><code>31 113 170</code></td><td><code>rgb(255 255 255)</code></td><td><code>104 170 222</code></td><td><code>rgb(28 26 24)</code></td><td>Tips, neutral notices</td></tr>
      <tr><td><code>dark</code></td><td><code>28 26 24</code></td><td><code>rgb(255 255 255)</code></td><td><code>48 46 43</code></td><td><code>rgb(255 255 255)</code></td><td>Inverted panels, dark tables</td></tr>
      <tr><td><code>light</code></td><td><code>247 246 244</code></td><td><code>rgb(28 26 24)</code></td><td><code>247 246 244</code></td><td><code>rgb(28 26 24)</code></td><td>Text and controls on media, light chips</td></tr>
    </tbody>
  </table>
</div>
::end

The swatches render each color in a `.light` and a `.dark` scope side by side, with its foreground on top, whatever the page theme is.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="hstack gap-0">
          <div class="light flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-primary))] [color:var(--aksara-primary-foreground)]">Aa</div>
          <div class="dark flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-primary))] [color:var(--aksara-primary-foreground)]">Aa</div>
        </div>
        <div class="p-3"><span class="block fw-semibold text-sm">primary</span><span class="block text-xs mt-1 font-mono text-subtle">34 32 29 · 236 233 228</span></div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="hstack gap-0">
          <div class="light flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-secondary))] [color:var(--aksara-secondary-foreground)]">Aa</div>
          <div class="dark flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-secondary))] [color:var(--aksara-secondary-foreground)]">Aa</div>
        </div>
        <div class="p-3"><span class="block fw-semibold text-sm">secondary</span><span class="block text-xs mt-1 font-mono text-subtle">108 104 98 · 163 159 152</span></div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="hstack gap-0">
          <div class="light flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-tertiary))] [color:var(--aksara-tertiary-foreground)]">Aa</div>
          <div class="dark flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-tertiary))] [color:var(--aksara-tertiary-foreground)]">Aa</div>
        </div>
        <div class="p-3"><span class="block fw-semibold text-sm">tertiary</span><span class="block text-xs mt-1 font-mono text-subtle">166 162 156 · 120 116 110</span></div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="hstack gap-0">
          <div class="light flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-success))] [color:var(--aksara-success-foreground)]">Aa</div>
          <div class="dark flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-success))] [color:var(--aksara-success-foreground)]">Aa</div>
        </div>
        <div class="p-3"><span class="block fw-semibold text-sm">success</span><span class="block text-xs mt-1 font-mono text-subtle">27 128 86 · 86 190 140</span></div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="hstack gap-0">
          <div class="light flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-danger))] [color:var(--aksara-danger-foreground)]">Aa</div>
          <div class="dark flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-danger))] [color:var(--aksara-danger-foreground)]">Aa</div>
        </div>
        <div class="p-3"><span class="block fw-semibold text-sm">danger</span><span class="block text-xs mt-1 font-mono text-subtle">196 62 52 · 236 112 98</span></div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="hstack gap-0">
          <div class="light flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-warning))] [color:var(--aksara-warning-foreground)]">Aa</div>
          <div class="dark flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-warning))] [color:var(--aksara-warning-foreground)]">Aa</div>
        </div>
        <div class="p-3"><span class="block fw-semibold text-sm">warning</span><span class="block text-xs mt-1 font-mono text-subtle">226 152 40 · 238 182 88</span></div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="hstack gap-0">
          <div class="light flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-info))] [color:var(--aksara-info-foreground)]">Aa</div>
          <div class="dark flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-info))] [color:var(--aksara-info-foreground)]">Aa</div>
        </div>
        <div class="p-3"><span class="block fw-semibold text-sm">info</span><span class="block text-xs mt-1 font-mono text-subtle">31 113 170 · 104 170 222</span></div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="hstack gap-0">
          <div class="light flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-dark))] [color:var(--aksara-dark-foreground)]">Aa</div>
          <div class="dark flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-dark))] [color:var(--aksara-dark-foreground)]">Aa</div>
        </div>
        <div class="p-3"><span class="block fw-semibold text-sm">dark</span><span class="block text-xs mt-1 font-mono text-subtle">28 26 24 · 48 46 43</span></div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="rounded-[14px] border border-subtle overflow-hidden bg-surface">
        <div class="hstack gap-0">
          <div class="light flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-light))] [color:var(--aksara-light-foreground)]">Aa</div>
          <div class="dark flex-1 h-[64px] p-3 text-sm fw-semibold [background:rgb(var(--aksara-light))] [color:var(--aksara-light-foreground)]">Aa</div>
        </div>
        <div class="p-3"><span class="block fw-semibold text-sm">light</span><span class="block text-xs mt-1 font-mono text-subtle">247 246 244 · 247 246 244</span></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- One swatch: the palette value of each scope, with its foreground on top -->
<div class="hstack gap-0">
  <div
    class="light flex-1 h-[64px] p-3 [background:rgb(var(--aksara-success))] [color:var(--aksara-success-foreground)]"
  >
    Aa
  </div>
  <div
    class="dark flex-1 h-[64px] p-3 [background:rgb(var(--aksara-success))] [color:var(--aksara-success-foreground)]"
  >
    Aa
  </div>
</div>
```

When you lift or darken a fill, check its foreground. Light fills (`warning`, `tertiary` and `light` in the light theme, every lifted fill in the dark theme) take ink text, the rest take white. Re-declare only the foreground when your new fill flips that balance:

```css
:root,
[data-theme="light"],
.light {
  --aksara-warning: 250 204 21;
  --aksara-warning-foreground: rgb(28 26 24);
}
```

---

## Surfaces, Text And Borders

These tokens paint the page, cards, menus and text. Components read them directly (a card is `background: var(--aksara-surface); color: var(--aksara-text-body); border: 1px solid var(--aksara-border-subtle)`), and the `bg-*`, `text-*` and `border-*` adaptive utilities map onto them.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th class="w-[30%]">Token</th><th>Light</th><th>Dark</th><th class="w-[34%]">Used by</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--aksara-bg-body</code></td><td><code>#fcfcfb</code></td><td><code>#121110</code></td><td>Page background (<code>body</code>, <code>bg-body</code>)</td></tr>
      <tr><td><code>--aksara-bg-body-secondary</code></td><td><code>#f7f6f4</code></td><td><code>#161514</code></td><td>Muted cards, striped rows, dropzones, disabled input groups, <code>bg-body-secondary</code></td></tr>
      <tr><td><code>--aksara-bg-body-tertiary</code></td><td><code>#efeeeb</code></td><td><code>#222120</code></td><td><code>bg-body-tertiary</code></td></tr>
      <tr><td><code>--aksara-bg-subtle</code></td><td><code>#f3f2f0</code></td><td><code>#242321</code></td><td>Badges, alerts, hover fills, progress and range tracks, skeletons, copy fields, <code>bg-subtle</code></td></tr>
      <tr><td><code>--aksara-bg-invert</code></td><td><code>#1c1a18</code></td><td><code>#f7f6f4</code></td><td><code>bg-invert</code></td></tr>
      <tr><td><code>--aksara-surface</code></td><td><code>#ffffff</code></td><td><code>#1a1918</code></td><td>Cards, list groups, tables, inputs, <code>bg-surface</code></td></tr>
      <tr><td><code>--aksara-surface-hover</code></td><td><code>#f8f7f5</code></td><td><code>#222120</code></td><td>Hover rows and menu items</td></tr>
      <tr><td><code>--aksara-surface-muted</code></td><td><code>#efeeeb</code></td><td><code>#222120</code></td><td>Ghost and subtle button hover, pressed sheet items</td></tr>
      <tr><td><code>--aksara-surface-raised</code></td><td><code>#ffffff</code></td><td><code>#1f1e1c</code></td><td>Modals, dropdowns, popovers, toasts, offcanvas, sheets (lighter than cards in dark mode)</td></tr>
      <tr><td><code>--aksara-text-body</code></td><td><code>#1c1a18</code></td><td><code>#edebe8</code></td><td>Body text, headings, <code>text-body</code>; also the target of every soft-color mix</td></tr>
      <tr><td><code>--aksara-text-subtle</code></td><td><code>#69655f</code></td><td><code>#a19d97</code></td><td>Descriptions, labels, hints, <code>text-subtle</code></td></tr>
      <tr><td><code>--aksara-text-body-secondary</code></td><td><code>#69655f</code></td><td><code>#a19d97</code></td><td><code>text-body-secondary</code></td></tr>
      <tr><td><code>--aksara-text-body-tertiary</code></td><td><code>#a09b94</code></td><td><code>#75716b</code></td><td>Breadcrumb dividers, input icons, character counters, <code>text-body-tertiary</code></td></tr>
      <tr><td><code>--aksara-text-invert</code></td><td><code>#f7f6f4</code></td><td><code>#1c1a18</code></td><td><code>text-invert</code></td></tr>
      <tr><td><code>--aksara-border</code></td><td><code>#e5e3df</code></td><td><code>#2e2c2a</code></td><td>Inputs, chips, <code>kbd</code>, step and timeline connectors, <code>border</code> utilities</td></tr>
      <tr><td><code>--aksara-border-subtle</code></td><td><code>#ebe9e6</code></td><td><code>#272523</code></td><td>Cards, list groups, table rules, dividers</td></tr>
      <tr><td><code>--aksara-border-strong</code></td><td><code>#d1cdc7</code></td><td><code>#3d3a37</code></td><td>Hovered inputs and chips, step markers, sheet handles, empty stars</td></tr>
      <tr><td><code>--aksara-border-secondary</code></td><td><code>#f1f0ed</code></td><td><code>#1b1a19</code></td><td><code>border-body-secondary</code></td></tr>
      <tr><td><code>--aksara-border-tertiary</code></td><td><code>#dcd9d4</code></td><td><code>#363431</code></td><td><code>border-body-tertiary</code></td></tr>
      <tr><td><code>--aksara-border-invert</code></td><td><code>#55524d</code></td><td><code>#d4d0ca</code></td><td><code>border-invert</code></td></tr>
      <tr><td><code>--aksara-border-width</code></td><td colspan="2"><code>1px</code> (both themes)</td><td><code>border</code>, <code>border-top</code> and the other border utilities</td></tr>
    </tbody>
  </table>
</div>
::end

The theme blocks also declare a few aliases that no component reads: `--aksara-text-base` (same value as `--aksara-text-body`), `--aksara-bg-surface`, `--aksara-bg`, `--aksara-border-color`, `--aksara-border-radius`, `--aksara-radius-full`, `--aksara-link-color` and `--aksara-link-hover-color`. Overriding them changes nothing; set the token in the table instead (for body text that is `--aksara-text-body`).

### Warmer or cooler neutrals

The stock neutrals have a faint warm tint. Replace the surface, text and border set to shift the whole interface. Here is a cooler slate set for both themes:

```css
:root,
[data-theme="light"],
.light {
  --aksara-bg-body: #f8fafc;
  --aksara-bg-body-secondary: #f1f5f9;
  --aksara-bg-subtle: #f1f5f9;
  --aksara-surface: #ffffff;
  --aksara-surface-hover: #f8fafc;
  --aksara-text-body: #0f172a;
  --aksara-text-subtle: #64748b;
  --aksara-text-body-tertiary: #94a3b8;
  --aksara-border: #e2e8f0;
  --aksara-border-subtle: #e9eef4;
  --aksara-border-strong: #cbd5e1;
}

[data-theme="dark"],
.dark {
  --aksara-bg-body: #0b1120;
  --aksara-bg-body-secondary: #0f172a;
  --aksara-bg-subtle: #1e293b;
  --aksara-surface: #111827;
  --aksara-surface-hover: #1e293b;
  --aksara-surface-raised: #172033;
  --aksara-text-body: #e2e8f0;
  --aksara-text-subtle: #94a3b8;
  --aksara-text-body-tertiary: #64748b;
  --aksara-border: #1e293b;
  --aksara-border-subtle: #172033;
  --aksara-border-strong: #334155;
}
```

The preview pins three light cards side by side: the stock set, a warm paper set and the cool slate set, each scoped to its wrapper.

::html
<div class="docs-preview">
  <div class="light row gap-3">
    <div class="col-12 md:col-4">
      <div class="card h-full">
        <div class="card-body vstack gap-3 [align-items:stretch]">
          <div class="hstack justify-between"><span class="fw-semibold">Stock</span><span class="badge badge-soft-success">Paid</span></div>
          <p class="m-0 text-sm text-subtle">Invoice INV-2048 · $1,240.00 · due 12 Dec</p>
          <div class="p-3 rounded-[10px] bg-subtle text-sm">Alex Morgan approved the quote.</div>
          <button type="button" class="btn btn-primary btn-sm">Download PDF</button>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="h-full [--aksara-surface:#fffaf2] [--aksara-bg-subtle:#f5ecdd] [--aksara-border-subtle:#ecdfca] [--aksara-text-body:#2b2418] [--aksara-text-subtle:#7a6b57]">
        <div class="card h-full">
          <div class="card-body vstack gap-3 [align-items:stretch]">
            <div class="hstack justify-between"><span class="fw-semibold">Warm paper</span><span class="badge badge-soft-success">Paid</span></div>
            <p class="m-0 text-sm text-subtle">Invoice INV-2048 · $1,240.00 · due 12 Dec</p>
            <div class="p-3 rounded-[10px] bg-subtle text-sm">Alex Morgan approved the quote.</div>
            <button type="button" class="btn btn-primary btn-sm">Download PDF</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="h-full [--aksara-surface:#ffffff] [--aksara-bg-subtle:#f1f5f9] [--aksara-border-subtle:#e2e8f0] [--aksara-text-body:#0f172a] [--aksara-text-subtle:#64748b] [--aksara-primary:15_23_42]">
        <div class="card h-full">
          <div class="card-body vstack gap-3 [align-items:stretch]">
            <div class="hstack justify-between"><span class="fw-semibold">Cool slate</span><span class="badge badge-soft-success">Paid</span></div>
            <p class="m-0 text-sm text-subtle">Invoice INV-2048 · $1,240.00 · due 12 Dec</p>
            <div class="p-3 rounded-[10px] bg-subtle text-sm">Alex Morgan approved the quote.</div>
            <button type="button" class="btn btn-primary btn-sm">Download PDF</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div
  class="[--aksara-surface:#fffaf2] [--aksara-bg-subtle:#f5ecdd] [--aksara-border-subtle:#ecdfca]
         [--aksara-text-body:#2b2418] [--aksara-text-subtle:#7a6b57]"
>
  <div class="card">...</div>
</div>
```

---

## Shape

Two token groups control corners. Controls (buttons, inputs, selects, input groups, page links, segmented controls, copy fields) share `--aksara-control-radius`. Containers use the radius scale: cards, list groups, accordions and tables read `--aksara-radius`; menus, popovers, toasts and alerts read `--aksara-radius-md`; the modal dialog reads `--aksara-radius-xl`. Badges, chips, progress bars and switches are always fully round.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th class="w-[30%]">Token</th><th class="w-[18%]">Default</th><th>Used by</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--aksara-control-radius</code></td><td><code>.625rem</code></td><td>Buttons, inputs, selects, input groups, pagination, segmented controls, copy fields</td></tr>
      <tr><td><code>--aksara-radius</code></td><td><code>1rem</code></td><td>Cards, list groups, accordions, tables, the <code>rounded</code> utility</td></tr>
      <tr><td><code>--aksara-radius-2xs</code></td><td><code>.125rem</code></td><td><code>rounded-2xs</code> utilities</td></tr>
      <tr><td><code>--aksara-radius-xs</code></td><td><code>.25rem</code></td><td><code>rounded-xs</code> utilities</td></tr>
      <tr><td><code>--aksara-radius-sm</code></td><td><code>.5rem</code></td><td><code>rounded-sm</code>, tooltips, dropdown items, nav links, skeletons, small inputs and input groups</td></tr>
      <tr><td><code>--aksara-radius-md</code></td><td><code>.75rem</code></td><td><code>rounded-md</code>, dropdowns, popovers, toasts, alerts, check cards, icon tiles, large inputs</td></tr>
      <tr><td><code>--aksara-radius-lg</code></td><td><code>1rem</code></td><td><code>rounded-lg</code>, stat groups, inset list groups, large icon tiles, 2xl inputs</td></tr>
      <tr><td><code>--aksara-radius-xl</code></td><td><code>1.25rem</code></td><td><code>rounded-xl</code>, modal dialog, guest gate card, xl icon tiles</td></tr>
      <tr><td><code>--aksara-radius-2xl</code></td><td><code>1.5rem</code></td><td><code>rounded-2xl</code>, bento cards</td></tr>
      <tr><td><code>--aksara-radius-3xl</code></td><td><code>2rem</code></td><td><code>rounded-3xl</code></td></tr>
    </tbody>
  </table>
</div>
::end

The same login form with the stock shape, a square set and a pill set. Each variant only changes tokens on its wrapper.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <div class="card">
        <div class="card-body vstack gap-3 [align-items:stretch]">
          <span class="fw-semibold">Default</span>
          <input type="email" class="form-control" placeholder="maya.chen@example.com" aria-label="Email" />
          <div class="hstack gap-2"><button type="button" class="btn btn-primary btn-sm flex-1">Sign in</button><button type="button" class="btn btn-outline-secondary btn-sm">SSO</button></div>
          <div class="alert alert-info m-0 text-sm">New device in London.</div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="[--aksara-radius:.25rem] [--aksara-radius-md:.25rem] [--aksara-control-radius:.125rem]">
        <div class="card">
          <div class="card-body vstack gap-3 [align-items:stretch]">
            <span class="fw-semibold">Square</span>
            <input type="email" class="form-control" placeholder="maya.chen@example.com" aria-label="Email" />
            <div class="hstack gap-2"><button type="button" class="btn btn-primary btn-sm flex-1">Sign in</button><button type="button" class="btn btn-outline-secondary btn-sm">SSO</button></div>
            <div class="alert alert-info m-0 text-sm">New device in London.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="[--aksara-radius:1.5rem] [--aksara-radius-md:1.25rem] [--aksara-control-radius:9999px]">
        <div class="card">
          <div class="card-body vstack gap-3 [align-items:stretch]">
            <span class="fw-semibold">Pill</span>
            <input type="email" class="form-control" placeholder="maya.chen@example.com" aria-label="Email" />
            <div class="hstack gap-2"><button type="button" class="btn btn-primary btn-sm flex-1">Sign in</button><button type="button" class="btn btn-outline-secondary btn-sm">SSO</button></div>
            <div class="alert alert-info m-0 text-sm">New device in London.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- Square -->
<div class="[--aksara-radius:.25rem] [--aksara-radius-md:.25rem] [--aksara-control-radius:.125rem]">
  <div class="card">...</div>
</div>

<!-- Pill -->
<div class="[--aksara-radius:1.5rem] [--aksara-radius-md:1.25rem] [--aksara-control-radius:9999px]">
  <div class="card">...</div>
</div>
```

The global equivalent goes on `:root`, because the radius scale does not change between themes:

```css
:root {
  --aksara-control-radius: 0.375rem;
  --aksara-radius: 0.5rem;
  --aksara-radius-md: 0.5rem;
  --aksara-radius-xl: 0.75rem;
}
```

`rounded-*` utilities carry `!important`, so `rounded-0` or `rounded-full` on one element always beats the token. Use the tokens for the system and `rounded-*` for exceptions.

---

## Elevation And Focus

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th class="w-[26%]">Token</th><th>Light</th><th>Dark</th><th class="w-[28%]">Used by</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--aksara-shadow-sm</code></td><td><code>0 1px 2px rgb(28 26 24/.04), 0 1px 3px rgb(28 26 24/.06)</code></td><td><code>0 1px 2px rgb(0 0 0/.3)</code></td><td>Not used by components; available for your own rules</td></tr>
      <tr><td><code>--aksara-shadow-md</code></td><td><code>0 2px 6px -1px rgb(28 26 24/.05), 0 10px 28px -6px rgb(28 26 24/.12)</code></td><td><code>0 2px 6px -1px rgb(0 0 0/.3), 0 12px 32px -6px rgb(0 0 0/.45)</code></td><td><code>card-elevated</code>, tooltips, carousel controls, validation tooltips</td></tr>
      <tr><td><code>--aksara-shadow-lg</code></td><td><code>0 6px 12px -4px rgb(28 26 24/.06), 0 28px 56px -14px rgb(28 26 24/.22)</code></td><td><code>0 6px 12px -4px rgb(0 0 0/.35), 0 32px 64px -16px rgb(0 0 0/.6)</code></td><td>Dropdowns, modals, popovers, toasts, offcanvas, bottom sheets</td></tr>
      <tr><td><code>--aksara-ring-width</code></td><td colspan="2"><code>3px</code></td><td>Width of every focus ring</td></tr>
      <tr><td><code>--aksara-ring</code></td><td><code>0 0 0 var(--aksara-ring-width,3px) rgb(var(--aksara-primary)/.2)</code></td><td>Same, at <code>.28</code> alpha</td><td>Focus of plain buttons, inputs, selects, checks, switches, tabs, close buttons, page links, accordions, ratings, OTP fields</td></tr>
      <tr><td><code>--aksara-overlay-bg</code></td><td><code>rgb(28 26 24/.36)</code></td><td><code>rgb(6 5 4/.66)</code></td><td>Modal, offcanvas and bottom-sheet backdrops</td></tr>
      <tr><td><code>--aksara-tooltip-bg</code> / <code>--aksara-tooltip-text</code></td><td><code>rgb(28 26 24)</code> / <code>rgb(247 246 244)</code></td><td><code>rgb(237 235 232)</code> / <code>rgb(28 26 24)</code></td><td>Tooltips and their arrows</td></tr>
    </tbody>
  </table>
</div>
::end

Colored buttons build their own ring from the button color: `.btn-danger:focus-visible` is `0 0 0 var(--aksara-ring-width) rgb(var(--aksara-danger) / .28)`. So `--aksara-ring-width` resizes every ring, while `--aksara-ring` restyles the neutral one. For a strictly flat interface, remove the shadows; for a high-contrast focus style, use a solid ring:

```css
:root,
[data-theme="light"],
.light,
[data-theme="dark"],
.dark {
  --aksara-shadow-sm: none;
  --aksara-shadow-md: none;
  --aksara-shadow-lg: none;
}

:root {
  --aksara-ring-width: 2px;
}
:root,
[data-theme="light"],
.light,
[data-theme="dark"],
.dark {
  --aksara-ring: 0 0 0 var(--aksara-ring-width) rgb(var(--aksara-primary));
}
```

Press Tab through both groups below. The second one sets a 2px solid ring on its wrapper.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="vstack gap-3 [align-items:stretch]">
        <span class="text-sm fw-semibold">Default ring</span>
        <input type="text" class="form-control" placeholder="Workspace name" aria-label="Workspace name" />
        <div class="hstack gap-2"><button type="button" class="btn btn-primary btn-sm">Save</button><button type="button" class="btn btn-soft-danger btn-sm">Delete</button></div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="vstack gap-3 [align-items:stretch] [--aksara-ring-width:2px] [--aksara-ring:0_0_0_2px_rgb(var(--aksara-primary))]">
        <span class="text-sm fw-semibold">Solid 2px ring</span>
        <input type="text" class="form-control" placeholder="Workspace name" aria-label="Workspace name" />
        <div class="hstack gap-2"><button type="button" class="btn btn-primary btn-sm">Save</button><button type="button" class="btn btn-soft-danger btn-sm">Delete</button></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="vstack gap-3 [--aksara-ring-width:2px] [--aksara-ring:0_0_0_2px_rgb(var(--aksara-primary))]">
  <input type="text" class="form-control" placeholder="Workspace name" aria-label="Workspace name" />
  <button type="button" class="btn btn-primary btn-sm">Save</button>
</div>
```

---

## Motion

Hover, focus, open and close transitions across components use two tokens. Collapse panels and carousels have their own duration tokens (see the component table below).

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th class="w-[26%]">Token</th><th class="w-[28%]">Default</th><th>Used by</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--aksara-duration</code></td><td><code>.18s</code></td><td>Color, border, ring and transform transitions of buttons, inputs, checks, tabs, list items, menus</td></tr>
      <tr><td><code>--aksara-ease</code></td><td><code>cubic-bezier(.2,.8,.2,1)</code></td><td>Timing function of the same transitions, carousel slides and collapse panels</td></tr>
    </tbody>
  </table>
</div>
::end

Hover the buttons: the second row runs at `.6s` with a linear curve.

::html
<div class="docs-preview">
  <div class="vstack gap-3">
    <div class="hstack flex-wrap gap-2"><button type="button" class="btn btn-primary btn-sm">Default</button><button type="button" class="btn btn-outline-primary btn-sm">Default</button><button type="button" class="btn btn-soft-success btn-sm">Default</button></div>
    <div class="hstack flex-wrap gap-2 [--aksara-duration:.6s] [--aksara-ease:linear]"><button type="button" class="btn btn-primary btn-sm">Slow</button><button type="button" class="btn btn-outline-primary btn-sm">Slow</button><button type="button" class="btn btn-soft-success btn-sm">Slow</button></div>
  </div>
</div>
::end

```html
<div class="hstack gap-2 [--aksara-duration:.6s] [--aksara-ease:linear]">
  <button type="button" class="btn btn-primary btn-sm">Slow</button>
</div>
```

```css
/* Snappier interface */
:root {
  --aksara-duration: 0.12s;
  --aksara-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Reduced motion.** When the user enables `prefers-reduced-motion: reduce`, the stylesheet forces every animation and transition to `.01ms` (with `!important`), so token values cannot bring motion back. The collapse runtime also skips its height animation and opens or closes panels instantly. You do not need to set `--aksara-duration: 0s` for these users.

---

## Typography

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th class="w-[24%]">Token</th><th>Default</th><th class="w-[26%]">Used by</th></tr>
    </thead>
    <tbody>
      <tr><td><code>--aksara-font-sans</code></td><td><code>Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif</code></td><td><code>body</code>, <code>font-sans</code></td></tr>
      <tr><td><code>--aksara-font-mono</code></td><td><code>ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace</code></td><td><code>font-mono</code>, <code>kbd</code>, copy fields</td></tr>
    </tbody>
  </table>
</div>
::end

Aksara does not download any font. Inter is used when it is installed or loaded by the page; otherwise the system stack takes over. To use a web font, load it and point the token at it:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
/>
<link rel="stylesheet" href="aksara.min.css" />
<link rel="stylesheet" href="brand.css" />
```

```css
/* brand.css */
:root,
[data-theme="light"],
.light {
  --aksara-font-sans: "Inter", system-ui, sans-serif;
  --aksara-font-mono: "JetBrains Mono", ui-monospace, monospace;
}
```

For a self-hosted font, declare it with `@font-face` and use the same token. The body font is applied on `body`, so a scoped override needs `font-sans` on the wrapper as well, otherwise its text keeps the font inherited from `body`:

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="card h-full">
        <div class="card-body">
          <p class="m-0 text-xs text-subtle">Default stack</p>
          <h4 class="mt-2 mb-2">The Manchester Review</h4>
          <p class="m-0 text-sm text-subtle">Grace Lee on remote teams, small offices and the four-day week.</p>
          <p class="mt-3 mb-0 text-xs font-mono">ISSUE-0042 · 12 min read</p>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="h-full font-sans [--aksara-font-sans:Georgia,'Times_New_Roman',serif] [--aksara-font-mono:'Courier_New',monospace]">
        <div class="card h-full">
          <div class="card-body">
            <p class="m-0 text-xs text-subtle">Serif override</p>
            <h4 class="mt-2 mb-2">The Manchester Review</h4>
            <p class="m-0 text-sm text-subtle">Grace Lee on remote teams, small offices and the four-day week.</p>
            <p class="mt-3 mb-0 text-xs font-mono">ISSUE-0042 · 12 min read</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="font-sans [--aksara-font-sans:Georgia,'Times_New_Roman',serif]">
  <div class="card">...</div>
</div>
```

---

## Component Tokens

These tokens tune one component or family. Most are declared on the component's own root class, so set them on that element (or with a selector that targets it), not on an ancestor. Tokens marked _runtime_ are written by the JavaScript runtime as inline styles from component options; set the option, not the token.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th class="w-[18%]">Component</th><th class="w-[30%]">Token</th><th class="w-[22%]">Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>Layout</td><td><code>--aksara-container-max</code></td><td><code>1140px</code></td><td>Maximum width of <code>.container</code></td></tr>
      <tr><td>Layout</td><td><code>--aksara-container-padding</code></td><td><code>1rem</code></td><td>Inline padding of <code>.container</code> and <code>.container-fluid</code></td></tr>
      <tr><td>Grid</td><td><code>--aksara-gutter-x</code></td><td><code>1rem</code></td><td>Horizontal gutter of <code>.row</code>; set by <code>gap-*</code>, <code>gap-x-*</code>, <code>g-*</code>, <code>gx-*</code> on the row</td></tr>
      <tr><td>Grid</td><td><code>--aksara-gutter-y</code></td><td><code>0</code></td><td>Vertical gutter of <code>.row</code>; set by <code>gap-*</code>, <code>gap-y-*</code>, <code>g-*</code></td></tr>
      <tr><td>Stacks</td><td><code>--aksara-stack-gap</code></td><td><code>1rem</code></td><td>Gap of <code>.hstack</code> / <code>.vstack</code> (a <code>gap-*</code> utility wins)</td></tr>
      <tr><td>Ratio</td><td><code>--aksara-aspect-ratio</code></td><td><code>56.25%</code></td><td>Height as a percentage of width; <code>ratio-1x1</code> ... <code>ratio-9x16</code> set it</td></tr>
      <tr><td>Divider</td><td><code>--aksara-divider-color</code></td><td><code>var(--aksara-border-subtle)</code></td><td>Line color; <code>divider-strong</code> uses <code>--aksara-border-strong</code></td></tr>
      <tr><td>Divider</td><td><code>--aksara-divider-style</code></td><td><code>solid</code></td><td>Line style; <code>divider-dashed</code> sets <code>dashed</code></td></tr>
      <tr><td>Steps</td><td><code>--aksara-step-size</code></td><td><code>2rem</code></td><td>Marker diameter; <code>steps-sm</code> sets <code>1.5rem</code></td></tr>
      <tr><td>Steps</td><td><code>--aksara-step-line</code></td><td><code>var(--aksara-border)</code></td><td>Connector color between markers</td></tr>
      <tr><td>Timeline</td><td><code>--aksara-timeline-point</code></td><td><code>1.75rem</code></td><td>Point size; <code>timeline-compact</code> sets <code>1.5rem</code></td></tr>
      <tr><td>Timeline</td><td><code>--aksara-timeline-gap</code></td><td><code>1.5rem</code></td><td>Space between items; <code>timeline-compact</code> sets <code>1rem</code></td></tr>
      <tr><td>Rating</td><td><code>--aksara-rating-color</code></td><td><code>rgb(var(--aksara-warning))</code></td><td>Filled star color</td></tr>
      <tr><td>Rating</td><td><code>--aksara-rating-empty</code></td><td><code>var(--aksara-border-strong)</code></td><td>Empty star color</td></tr>
      <tr><td>Check list</td><td><code>--aksara-check-color</code></td><td><code>rgb(var(--aksara-success))</code></td><td>Marker color; <code>check-list-{color}</code> sets it</td></tr>
      <tr><td>Check list</td><td><code>--aksara-check-icon</code> / <code>--aksara-cross-icon</code></td><td>Circled check / circled cross SVG</td><td>Mask images of the markers; <code>check-list-plain</code> swaps in a bare check</td></tr>
      <tr><td>Indicator</td><td><code>--aksara-indicator-ring</code></td><td><code>var(--aksara-bg-body)</code></td><td>Ring around the badge; <code>--aksara-surface</code> inside cards, list groups, stats, tables; <code>--aksara-surface-raised</code> inside modals, menus, offcanvas, sheets, popovers</td></tr>
      <tr><td>Indicator</td><td><code>--aksara-indicator-offset</code></td><td><code>0px</code></td><td>Inset from the corner; <code>14.6%</code> on round targets, <code>24%</code> on borderless icon buttons, <code>12%</code> on bare icons</td></tr>
      <tr><td>Avatar</td><td><code>--aksara-avatar-ring</code></td><td><code>var(--aksara-surface)</code></td><td>Ring around grouped avatars and status dots; match it to the background</td></tr>
      <tr><td>Range</td><td><code>--aksara-range-progress</code></td><td><code>50%</code> (<em>runtime</em>)</td><td>Filled part of <code>.form-range</code>, updated on input</td></tr>
      <tr><td>Progress</td><td><code>--aksara-progress-stripe</code></td><td><code>rgb(255 255 255/.22)</code> / <code>.18</code> dark</td><td>Stripe color of <code>progress-striped</code></td></tr>
      <tr><td>Placeholder</td><td><code>--aksara-placeholder-shine</code></td><td><code>rgb(255 255 255/.45)</code> / <code>/.08</code> dark</td><td>Highlight of the wave animation</td></tr>
      <tr><td>Breadcrumb</td><td><code>--aksara-breadcrumb-divider</code></td><td><code>'/'</code></td><td>Separator content between items</td></tr>
      <tr><td>Description list</td><td><code>--aksara-desc-term</code></td><td><code>30%</code></td><td>Maximum term column width of <code>desc-list-horizontal</code> (min <code>8rem</code>)</td></tr>
      <tr><td>Collapse</td><td><code>--aksara-collapse-duration</code></td><td><code>.3s</code> (<em>runtime</em>)</td><td>Height or width transition; set from <code>data-collapse-duration</code></td></tr>
      <tr><td>Modal</td><td><code>--aksara-modal-width</code></td><td><code>32rem</code></td><td>Width of <code>.modal-dialog</code>; <code>modal-sm</code> 24rem, <code>modal-lg</code> 48rem, <code>modal-xl</code> 72rem</td></tr>
      <tr><td>Modal</td><td><code>--aksara-modal-x</code> / <code>--aksara-modal-y</code></td><td><code>0px</code> (<em>runtime</em>)</td><td>Drag offset of a draggable dialog</td></tr>
      <tr><td>Bottom sheet</td><td><code>--aksara-sheet-width</code></td><td><code>36rem</code></td><td>Maximum panel width</td></tr>
      <tr><td>Bottom sheet</td><td><code>--aksara-sheet-depth</code></td><td><code>0</code> (<em>runtime</em>)</td><td>Stack level of a sheet behind the top one (scales and lifts it)</td></tr>
      <tr><td>Media viewer</td><td><code>--aksara-media-zoom</code>, <code>--aksara-media-x</code>, <code>--aksara-media-y</code></td><td><code>1</code>, <code>0px</code>, <code>0px</code> (<em>runtime</em>)</td><td>Zoom level and pan offset of the open image</td></tr>
      <tr><td>Carousel</td><td><code>--aksara-carousel-gap</code></td><td><code>0px</code> (<em>runtime</em>)</td><td>Space between slides; from <code>data-carousel-gap</code></td></tr>
      <tr><td>Carousel</td><td><code>--aksara-carousel-per-view</code></td><td><code>1</code> (<em>runtime</em>)</td><td>Visible slides, resolved from the per-view option</td></tr>
      <tr><td>Carousel</td><td><code>--aksara-carousel-speed</code></td><td><code>.5s</code> slide, <code>.6s</code> fade (<em>runtime</em>)</td><td>Transition length; from <code>data-carousel-speed</code></td></tr>
      <tr><td>Carousel</td><td><code>--aksara-carousel-interval</code></td><td><code>5s</code> (<em>runtime</em>)</td><td>Autoplay progress bar length</td></tr>
      <tr><td>Carousel</td><td><code>--aksara-carousel-caption-bg</code></td><td><code>rgb(28 26 24/.55)</code> / <code>rgb(6 5 4/.6)</code></td><td>Caption and counter background</td></tr>
      <tr><td>Carousel</td><td><code>--aksara-carousel-control-bg</code> / <code>-control-text</code></td><td><code>rgb(255 255 255/.85)</code> / <code>rgb(28 26 24)</code></td><td>Previous / next buttons (dark: <code>rgb(31 30 28/.85)</code> / <code>rgb(237 235 232)</code>)</td></tr>
      <tr><td>Carousel</td><td><code>--aksara-carousel-indicator</code> / <code>-indicator-active</code></td><td><code>rgb(255 255 255/.5)</code> / <code>rgb(255 255 255)</code></td><td>Dots and the active dot or progress bar</td></tr>
      <tr><td>Media</td><td><code>--aksara-on-media</code></td><td><code>rgb(var(--aksara-light))</code></td><td>Text on images: carousel captions and counters</td></tr>
      <tr><td>Scrollbar</td><td><code>--aksara-scrollbar-thumb</code> / <code>-thumb-hover</code> / <code>-track</code></td><td><code>rgb(108 104 98/.28)</code> / <code>/.48</code> / <code>transparent</code></td><td>Scrollbar colors on every element (dark: <code>rgb(163 159 152/.24)</code> / <code>/.4</code>)</td></tr>
      <tr><td>Ring utility</td><td><code>--aksara-ring-color</code></td><td><code>rgb(var(--aksara-primary)/.35)</code></td><td>Color of the <code>ring</code>, <code>ring-1</code>, <code>ring-2</code>, <code>ring-4</code> utilities; <code>ring-{color}</code> sets it</td></tr>
    </tbody>
  </table>
</div>
::end

A few of them in use. Each override sits on the component's own element:

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="row gap-4">
    <div class="col-12 md:col-6 vstack gap-2 [align-items:flex-start]">
      <span class="text-xs text-subtle">Rating in the info color</span>
      <span class="rating rating-display [--aksara-rating-color:rgb(var(--aksara-info))]" role="img" aria-label="Rating: 4.5 out of 5"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-half"></span></span>
    </div>
    <div class="col-12 md:col-6 vstack gap-2 [align-items:stretch]">
      <span class="text-xs text-subtle">Divider with a primary tint</span>
      <div class="divider [--aksara-divider-color:rgb(var(--aksara-primary)/.35)] [--aksara-divider-style:dotted]">Today</div>
    </div>
    <div class="col-12 vstack gap-2 [align-items:stretch]">
      <span class="text-xs text-subtle">Larger steps with a success connector</span>
      <ol class="steps [--aksara-step-size:2.5rem] [--aksara-step-line:rgb(var(--aksara-success)/.4)]" aria-label="Onboarding progress">
        <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Workspace</span></span></li>
        <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Invite team</span></span></li>
        <li class="step is-active" aria-current="step"><span class="visually-hidden">Current: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Billing</span></span></li>
      </ol>
    </div>
    <div class="col-12 md:col-6 vstack gap-2 [align-items:flex-start]">
      <span class="text-xs text-subtle">Indicator and avatar rings on a subtle panel</span>
      <div class="hstack gap-4 p-3 rounded-[12px] bg-subtle">
        <span class="indicator [--aksara-indicator-ring:var(--aksara-bg-subtle)]">
          <span class="avatar avatar-primary rounded-full">SP</span>
          <span class="indicator-item indicator-dot" aria-hidden="true"></span>
        </span>
        <div class="avatar-group [--aksara-avatar-ring:var(--aksara-bg-subtle)]">
          <span class="avatar avatar-sm rounded-full text-success">MC</span>
          <span class="avatar avatar-sm rounded-full text-info">AM</span>
          <span class="avatar avatar-sm rounded-full text-danger">DK</span>
          <span class="avatar avatar-sm rounded-full text-subtle text-xs">+4</span>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 vstack gap-2 [align-items:stretch]">
      <span class="text-xs text-subtle">Tighter stack and an info check list</span>
      <div class="hstack [--aksara-stack-gap:.375rem]"><span class="badge badge-soft-primary">Design</span><span class="badge badge-soft-success">Shipped</span><span class="badge badge-soft-warning">Q4</span></div>
      <ul class="check-list check-list-sm m-0 [--aksara-check-color:rgb(var(--aksara-info))]"><li>Unlimited projects</li><li>SAML single sign-on</li><li class="is-off">Dedicated support manager</li></ul>
    </div>
  </div>
</div>
::end

```html
<span
  class="rating rating-display [--aksara-rating-color:rgb(var(--aksara-info))]"
  role="img"
  aria-label="Rating: 4.5 out of 5"
>
  <span class="rating-star is-on"></span>
  ...
</span>

<div class="divider [--aksara-divider-color:rgb(var(--aksara-primary)/.35)] [--aksara-divider-style:dotted]">Today</div>

<ol class="steps [--aksara-step-size:2.5rem] [--aksara-step-line:rgb(var(--aksara-success)/.4)]">
  ...
</ol>

<div class="p-3 bg-subtle">
  <span class="indicator [--aksara-indicator-ring:var(--aksara-bg-subtle)]">
    <span class="avatar avatar-primary rounded-full">SP</span>
    <span class="indicator-item indicator-dot" aria-hidden="true"></span>
  </span>
  <div class="avatar-group [--aksara-avatar-ring:var(--aksara-bg-subtle)]">...</div>
</div>

<div class="hstack [--aksara-stack-gap:.375rem]">...</div>
<ul class="check-list [--aksara-check-color:rgb(var(--aksara-info))]">
  ...
</ul>
```

The same overrides in a stylesheet, for every instance:

```css
.rating {
  --aksara-rating-color: rgb(var(--aksara-danger));
}
.steps {
  --aksara-step-size: 2.25rem;
}
.divider {
  --aksara-divider-color: var(--aksara-border);
}
.check-list {
  --aksara-check-color: rgb(var(--aksara-primary));
}
.breadcrumb {
  --aksara-breadcrumb-divider: "›";
}
```

Write these after `aksara.css`. Components such as `.rating`, `.steps` and `.divider` declare their default on the same class with the same specificity, so the later rule wins.

---

## Scoping Themes

Because tokens are inherited custom properties, any element can carry its own theme.

### A dark section on a light page

`.dark` (or `data-theme="dark"`) on any element re-declares the whole dark palette and theme tokens for its subtree, and `.light` does the same for light. Components that paint their own background and text, such as `.card`, pick the scope up directly; on a plain `div`, add `bg-body text-body` or `bg-surface text-body` so the scope paints. The two cards below stay dark and light in both page themes:

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="card dark h-full">
        <div class="card-body vstack gap-3 [align-items:stretch]">
          <div class="hstack justify-between"><span class="fw-semibold">Revenue this month</span><span class="badge badge-soft-success">+12.4%</span></div>
          <p class="m-0 text-xs text-subtle">Always dark: <code>class="card dark"</code></p>
          <div class="h-[28px] fw-bold text-lg">$48,920.00</div>
          <div class="progress"><div class="progress-bar w-[72%]">72%</div></div>
          <div class="hstack gap-2"><button type="button" class="btn btn-primary btn-sm">View report</button><button type="button" class="btn btn-soft-secondary btn-sm">Export</button></div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card light h-full">
        <div class="card-body vstack gap-3 [align-items:stretch]">
          <div class="hstack justify-between"><span class="fw-semibold">Revenue this month</span><span class="badge badge-soft-success">+12.4%</span></div>
          <p class="m-0 text-xs text-subtle">Always light: <code>class="card light"</code></p>
          <div class="h-[28px] fw-bold text-lg">$48,920.00</div>
          <div class="progress"><div class="progress-bar w-[72%]">72%</div></div>
          <div class="hstack gap-2"><button type="button" class="btn btn-primary btn-sm">View report</button><button type="button" class="btn btn-soft-secondary btn-sm">Export</button></div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card dark">
  <div class="card-body">...</div>
</div>

<section data-theme="dark" class="bg-body text-body p-5">...</section>
```

`Aksara.setTheme()` only writes `data-theme` and `.light` / `.dark` on `<html>`, so scoped sections keep their theme when the user switches. Global overrides written with the full selector lists from [Brand Color](#brand-color) reach these scopes too, because they target `.light` and `.dark` as well. See [Theme Adaptability](#/core/dark-mode) for `setTheme`, `getTheme`, `initTheme` and the `aksara-theme` storage key.

### Per-component overrides with a class

To restyle one kind of element, put the tokens on a class of your own. For example, a promotional call to action that uses a violet fill while the rest of the product keeps the brand primary:

```css
.btn-promo {
  --aksara-primary: 124 58 237;
  --aksara-primary-foreground: rgb(255 255 255);
  --aksara-ring-width: 4px;
}
[data-theme="dark"] .btn-promo,
.dark .btn-promo {
  --aksara-primary: 167 139 250;
  --aksara-primary-foreground: rgb(28 26 24);
}
```

Add `btn-promo` next to `btn-primary`, `btn-soft-primary` or `btn-outline-primary`, and the fill, hover mix, soft text and focus ring all switch. For one-off cases, the arbitrary-class form needs no stylesheet:

::html
<div class="docs-preview">
  <div class="hstack flex-wrap gap-2">
    <button type="button" class="btn btn-primary">Start free trial</button>
    <button type="button" class="btn btn-primary [--aksara-primary:124_58_237] [--aksara-primary-foreground:#fff] dark:[--aksara-primary:167_139_250] dark:[--aksara-primary-foreground:#1c1a18]">Black Friday: 40% off</button>
    <button type="button" class="btn btn-soft-primary [--aksara-primary:124_58_237] dark:[--aksara-primary:167_139_250]">See the deal</button>
  </div>
</div>
::end

```html
<button
  type="button"
  class="btn btn-primary [--aksara-primary:124_58_237] [--aksara-primary-foreground:#fff]
         dark:[--aksara-primary:167_139_250] dark:[--aksara-primary-foreground:#1c1a18]"
>
  Black Friday: 40% off
</button>
```

---

## Building Your Own Stylesheet

Overriding tokens in a CSS file loaded after Aksara covers most projects. If you maintain a fork or want the defaults baked into `aksara.css`, change the generator sources and rebuild:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th class="w-[34%]">File</th><th>What to change</th></tr>
    </thead>
    <tbody>
      <tr><td><code>src/generator/palette.ts</code></td><td><code>colors</code> and <code>darkColors</code> (RGB channels), <code>foregrounds</code> and <code>darkForegrounds</code> (text on solid fills)</td></tr>
      <tr><td><code>src/generator/css/core.ts</code></td><td><code>baseTokens</code> (radius scale, control radius, ring width, motion, layout), <code>lightTheme</code> and <code>darkTheme</code> (surfaces, text, borders, shadows, ring, overlay, tooltips, fonts, carousel colors), <code>bootstrapSpacers</code> (the 0–5 spacing scale), and the <code>softText</code> / <code>shiftedFill</code> mixes</td></tr>
      <tr><td><code>src/generator/css/components.ts</code>, <code>extras.ts</code></td><td>Component token defaults (<code>--aksara-step-size</code>, <code>--aksara-rating-color</code>, ...)</td></tr>
      <tr><td><code>src/generator/aksara.ts</code></td><td><code>runtimeColorNames</code>: the palette names the runtime accepts in <code>bg-{color}/{alpha}</code> classes. Keep it in sync with <code>colors</code> when you add or rename a color; the tests check it.</td></tr>
    </tbody>
  </table>
</div>
::end

```ts
// src/generator/palette.ts
export const colors: Record<string, string> = {
  primary: "37 99 235"
  // ...
};

export const darkColors: Record<string, string> = {
  primary: "96 165 250"
  // ...
};

export const darkForegrounds: Record<string, string> = {
  primary: "rgb(11 18 32)"
  // ...
};
```

```bash
npm run build
```

The build writes to `dist/`:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th class="w-[34%]">File</th><th>Contents</th></tr>
    </thead>
    <tbody>
      <tr><td><code>aksara.css</code> / <code>aksara.min.css</code></td><td>Tokens, reset, components and the static utility scales</td></tr>
      <tr><td><code>icons.css</code></td><td>An <code>@import</code> of the MDI icon font from the <code>@mdi/font</code> package</td></tr>
      <tr><td><code>aksara.js</code> / <code>aksara.min.js</code></td><td>Browser bundle (the global <code>Aksara</code>, runs <code>Aksara.init()</code> on <code>DOMContentLoaded</code>)</td></tr>
      <tr><td><code>aksara.esm.js</code>, <code>aksara.cjs</code>, <code>aksara.d.ts</code></td><td>Module builds and type declarations of the runtime</td></tr>
      <tr><td><code>components/</code></td><td>The HTML string components (<code>@abydahana/aksara-ui/components</code>)</td></tr>
    </tbody>
  </table>
</div>
::end

The build fails on two kinds of mistakes: a class defined twice with different declarations, and fractional utility names (spacing scales are integers 0–5; other values use brackets, such as `p-[.375rem]`).

### `!important` policy

Margin, padding and radius utilities (`m-*`, `mt-*`, `p-*`, `px-*`, `rounded-*`, `radius-*`, including bracket forms such as `p-[2rem]`) are emitted with `!important` so they beat component CSS. Static and runtime classes follow the same rule. Tokens and component rules carry no `!important`, so your overrides need only equal specificity and a later position.

### Static stylesheet or runtime classes

Overrides in your own CSS file work with the stylesheet alone. The bracket forms on this page (`[--aksara-primary:37_99_235]`, `dark:[--aksara-ring-width:2px]`) are generated in the browser by the runtime engine once `Aksara.init()` runs, and are inserted after the stylesheet, so they win over component defaults of equal specificity. Use them for scoped, one-off themes; use a stylesheet for anything global or for pages that do not load the JavaScript bundle. See [Static CSS & On-Demand Runtime](#/core/static-css).

---

## Token Reference

A summary of every token family. Values for each are in the sections above.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th class="w-[22%]">Family</th><th class="w-[48%]">Tokens</th><th>Declared on</th></tr>
    </thead>
    <tbody>
      <tr><td>Palette</td><td><code>--aksara-{primary|secondary|tertiary|success|danger|warning|info|dark|light}</code>, <code>-foreground</code>, <code>-rgb</code>, <code>-hex</code></td><td>Light and dark theme blocks</td></tr>
      <tr><td>Backgrounds</td><td><code>--aksara-bg-body</code>, <code>-bg-body-secondary</code>, <code>-bg-body-tertiary</code>, <code>-bg-subtle</code>, <code>-bg-invert</code></td><td>Light and dark theme blocks</td></tr>
      <tr><td>Surfaces</td><td><code>--aksara-surface</code>, <code>-surface-hover</code>, <code>-surface-muted</code>, <code>-surface-raised</code></td><td>Light and dark theme blocks</td></tr>
      <tr><td>Text</td><td><code>--aksara-text-body</code>, <code>-text-subtle</code>, <code>-text-body-secondary</code>, <code>-text-body-tertiary</code>, <code>-text-invert</code></td><td>Light and dark theme blocks</td></tr>
      <tr><td>Borders</td><td><code>--aksara-border</code>, <code>-border-subtle</code>, <code>-border-strong</code>, <code>-border-secondary</code>, <code>-border-tertiary</code>, <code>-border-invert</code>; <code>--aksara-border-width</code></td><td>Theme blocks; width on <code>:root</code></td></tr>
      <tr><td>Shape</td><td><code>--aksara-radius</code>, <code>--aksara-radius-{2xs|xs|sm|md|lg|xl|2xl|3xl}</code>, <code>--aksara-control-radius</code></td><td><code>:root</code></td></tr>
      <tr><td>Elevation</td><td><code>--aksara-shadow-sm</code>, <code>-shadow-md</code>, <code>-shadow-lg</code>, <code>--aksara-overlay-bg</code></td><td>Light and dark theme blocks</td></tr>
      <tr><td>Focus</td><td><code>--aksara-ring</code> (theme blocks), <code>--aksara-ring-width</code> (<code>:root</code>), <code>--aksara-ring-color</code> (ring utilities)</td><td>Mixed</td></tr>
      <tr><td>Motion</td><td><code>--aksara-duration</code>, <code>--aksara-ease</code></td><td><code>:root</code></td></tr>
      <tr><td>Typography</td><td><code>--aksara-font-sans</code>, <code>--aksara-font-mono</code></td><td>Light theme block (<code>:root</code>, <code>[data-theme="light"]</code>, <code>.light</code>)</td></tr>
      <tr><td>Layout</td><td><code>--aksara-container-max</code>, <code>-container-padding</code>, <code>-gutter-x</code>, <code>-gutter-y</code>, <code>-stack-gap</code>, <code>-aspect-ratio</code></td><td><code>:root</code> and the component class</td></tr>
      <tr><td>Floating UI</td><td><code>--aksara-tooltip-bg</code>, <code>-tooltip-text</code>, <code>-modal-width</code>, <code>-modal-x</code>, <code>-modal-y</code>, <code>-sheet-width</code>, <code>-sheet-depth</code></td><td>Theme blocks, <code>:root</code> and runtime</td></tr>
      <tr><td>Components</td><td><code>--aksara-divider-*</code>, <code>-step-*</code>, <code>-timeline-*</code>, <code>-rating-*</code>, <code>-check-*</code>, <code>-cross-icon</code>, <code>-indicator-*</code>, <code>-avatar-ring</code>, <code>-range-progress</code>, <code>-progress-stripe</code>, <code>-placeholder-shine</code>, <code>-breadcrumb-divider</code>, <code>-desc-term</code>, <code>-collapse-duration</code>, <code>-media-*</code></td><td>The component class, theme blocks or runtime</td></tr>
      <tr><td>Carousel</td><td><code>--aksara-carousel-{gap|per-view|speed|interval|caption-bg|control-bg|control-text|indicator|indicator-active}</code>, <code>--aksara-on-media</code></td><td>Theme blocks and runtime</td></tr>
      <tr><td>Scrollbar</td><td><code>--aksara-scrollbar-track</code>, <code>-scrollbar-thumb</code>, <code>-scrollbar-thumb-hover</code></td><td>Light and dark theme blocks</td></tr>
      <tr><td>Unused aliases</td><td><code>--aksara-text-base</code>, <code>-bg-surface</code>, <code>-bg</code>, <code>-border-color</code>, <code>-border-radius</code>, <code>-radius-full</code>, <code>-link-color</code>, <code>-link-hover-color</code></td><td>Declared, but no component reads them</td></tr>
    </tbody>
  </table>
</div>
::end
