# Color System

Aksara UI features a highly curated, premium visual color palette. It avoids harsh, over-saturated primary hues in favor of a sleek, flat, soft visual language consisting of gentle surfaces, subtle borders, and soft alpha-level fills.

---

## Interactive Color Palette

Explore Aksara UI's default color catalog. Notice the sophisticated, soft shades chosen instead of generic browser defaults:

::html
<div class="docs-preview">
  <div class="row gap-4">
    <!-- Primary -->
    <div class="col-12 sm:col-6 md:col-3">
      <div class="p-4 rounded-[12px] border border-subtle bg-body hstack gap-3">
        <div class="rounded-[8px] shadow-sm" style="width:36px;height:36px;background-color: rgb(var(--aksara-primary));"></div>
        <div>
          <span class="block font-extrabold text-sm">Primary</span>
          <span class="text-subtle text-xs">15 23 42</span>
        </div>
      </div>
    </div>

    <!-- Secondary -->
    <div class="col-12 sm:col-6 md:col-3">
      <div class="p-4 rounded-[12px] border border-subtle bg-body hstack gap-3">
        <div class="rounded-[8px] shadow-sm" style="width:36px;height:36px;background-color: rgb(var(--aksara-secondary));"></div>
        <div>
          <span class="block font-extrabold text-sm">Secondary</span>
          <span class="text-subtle text-xs">100 116 139</span>
        </div>
      </div>
    </div>

    <!-- Tertiary -->
    <div class="col-12 sm:col-6 md:col-3">
      <div class="p-4 rounded-[12px] border border-subtle bg-body hstack gap-3">
        <div class="rounded-[8px] shadow-sm" style="width:36px;height:36px;background-color: rgb(var(--aksara-tertiary));"></div>
        <div>
          <span class="block font-extrabold text-sm">Tertiary</span>
          <span class="text-subtle text-xs">148 163 184</span>
        </div>
      </div>
    </div>

    <!-- Success -->
    <div class="col-12 sm:col-6 md:col-3">
      <div class="p-4 rounded-[12px] border border-subtle bg-body hstack gap-3">
        <div class="rounded-[8px] shadow-sm" style="width:36px;height:36px;background-color: rgb(var(--aksara-success));"></div>
        <div>
          <span class="block font-extrabold text-sm">Success</span>
          <span class="text-subtle text-xs">34 197 94</span>
        </div>
      </div>
    </div>

    <!-- Danger -->
    <div class="col-12 sm:col-6 md:col-3">
      <div class="p-4 rounded-[12px] border border-subtle bg-body hstack gap-3">
        <div class="rounded-[8px] shadow-sm" style="width:36px;height:36px;background-color: rgb(var(--aksara-danger));"></div>
        <div>
          <span class="block font-extrabold text-sm">Danger</span>
          <span class="text-subtle text-xs">244 63 94</span>
        </div>
      </div>
    </div>

    <!-- Warning -->
    <div class="col-12 sm:col-6 md:col-3">
      <div class="p-4 rounded-[12px] border border-subtle bg-body hstack gap-3">
        <div class="rounded-[8px] shadow-sm" style="width:36px;height:36px;background-color: rgb(var(--aksara-warning));"></div>
        <div>
          <span class="block font-extrabold text-sm">Warning</span>
          <span class="text-subtle text-xs">245 158 11</span>
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="col-12 sm:col-6 md:col-3">
      <div class="p-4 rounded-[12px] border border-subtle bg-body hstack gap-3">
        <div class="rounded-[8px] shadow-sm" style="width:36px;height:36px;background-color: rgb(var(--aksara-info));"></div>
        <div>
          <span class="block font-extrabold text-sm">Info</span>
          <span class="text-subtle text-xs">6 182 212</span>
        </div>
      </div>
    </div>

    <!-- Dark -->
    <div class="col-12 sm:col-6 md:col-3">
      <div class="p-4 rounded-[12px] border border-subtle bg-body hstack gap-3">
        <div class="rounded-[8px] shadow-sm" style="width:36px;height:36px;background-color: rgb(var(--aksara-dark));"></div>
        <div>
          <span class="block font-extrabold text-sm">Dark</span>
          <span class="text-subtle text-xs">15 23 42</span>
        </div>
      </div>
    </div>

    <!-- Light -->
    <div class="col-12 sm:col-6 md:col-3">
      <div class="p-4 rounded-[12px] border border-subtle bg-body hstack gap-3">
        <div class="rounded-[8px] shadow-sm border border-subtle" style="width:36px;height:36px;background-color: rgb(var(--aksara-light));"></div>
        <div>
          <span class="block font-extrabold text-sm">Light</span>
          <span class="text-subtle text-xs">248 250 252</span>
        </div>
      </div>
    </div>

  </div>
</div>
::end

---

## Soft Alpha-Transparency Syntax

Aksara UI features a **translucency syntax modifier** to compose dynamic translucent background fills, borders, text colors, decoration lines, or outline rings at any integer level between 0% and 100%:

```text
utility-color/alpha
```

- Any integer level between `0` and `100` works, on every palette color (`primary`, `secondary`, `tertiary`, `success`, `danger`, `warning`, `info`, `dark`, `light`) and with variants (`hover:bg-primary/10`, `dark:md:border-danger/30`).
- Examples: `bg-primary/10`, `text-primary/20`, `border-success/30`.
- Levels are generated on demand by `Aksara.init()` (like arbitrary bracket classes) instead of being precompiled, which keeps the static stylesheet small. Pages that render without JavaScript should use a solid color or an arbitrary value such as `bg-[rgb(var(--aksara-primary)/.1)]`.

### Showcase: Subtle Background Accents

subtle tints are excellent for alerts, badges, hover effects, and premium highlights:

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="p-3 rounded-[8px] bg-primary/10 text-primary border border-primary/20 fw-bold text-sm">bg-primary/10</div>
    <div class="p-3 rounded-[8px] bg-success/12 text-success border border-success/20 fw-bold text-sm">bg-success/12</div>
    <div class="p-3 rounded-[8px] bg-danger/10 text-danger border border-danger/20 fw-bold text-sm">bg-danger/10</div>
    <div class="p-3 rounded-[8px] bg-warning/8 text-warning border border-warning/20 fw-bold text-sm">bg-warning/8</div>
  </div>
</div>
::end

```html
<!-- Perfect light soft highlights -->
<div class="bg-primary/10 text-primary border border-primary/20 rounded-[8px] p-3">...</div>
<div class="bg-success/12 text-success border border-success/20 rounded-[8px] p-3">...</div>
<div class="bg-danger/10 text-danger border border-danger/20 rounded-[8px] p-3">...</div>
```

---

## Core Variable Overwrites

All colors are controlled using CSS variables declared under the `:root` scope. You can customize the entire framework's theme settings easily by overwriting the underlying values:

```css
:root {
  /* Space-separated RGB channels (so opacity levels can use rgb(... / alpha)) */
  --aksara-primary: 15 23 42;
  --aksara-secondary: 100 116 139;
  --aksara-tertiary: 148 163 184;
  --aksara-success: 34 197 94;
  --aksara-danger: 244 63 94;
  --aksara-warning: 245 158 11;
  --aksara-info: 6 182 212;
  --aksara-dark: 15 23 42;
  --aksara-light: 248 250 252;
}
```

---

## Color Utility Groups

Aksara UI precompiles the solid utilities below for every palette color. The `/level` opacity forms are generated on demand by `Aksara.init()`. There are no literal color names such as `text-white`, `bg-white` or `bg-black`: use `text-light`, `bg-light`, `bg-dark`, or an arbitrary value (`bg-[rgb(0_0_0/.6)]`).

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">Category Prefix</th>
        <th style="width: 35%;">Generated Examples</th>
        <th style="width: 40%;">Underlying CSS Output</th>
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
