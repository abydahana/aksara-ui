# Theme Adaptability

Aksara UI ships with two first-class themes: light and dark. Component surfaces, text, borders, overlays, shadows, form controls, tables, dropdowns, modals, tooltips, placeholders, and other built-in elements read from adaptive CSS variables by default.

---

## Activating Themes

Themes are driven by the `data-theme` attribute on the root html element (set it from JavaScript with `Aksara.setTheme()`, see below):

```html
<!-- Light Mode (Default) -->
<html lang="en" data-theme="light">
  ...
</html>

<!-- Dark Mode -->
<html lang="en" data-theme="dark">
  ...
</html>
```

Alternatively, adding `.light` or `.dark` directly to any container or the body is also supported:

```html
<body class="light">
  <!-- Everything inside this inherits Light Theme styles -->
</body>

<body class="dark">
  <!-- Everything inside this inherits Dark Theme styles -->
</body>
```

---

## Theme-Adaptive CSS Utilities

Aksara UI provides powerful optional **adaptive utilities** that automatically transition their values when switching between light and dark themes. These rely on high-performance CSS custom properties:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th class="w-[25%]">Adaptive Class</th>
        <th class="w-[35%]">Light Theme Value</th>
        <th class="w-[40%]">Dark Theme Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bg-body</code></td>
        <td>Warm paper (<code>#fcfcfb</code>)</td>
        <td>Warm black (<code>#121110</code>)</td>
      </tr>
      <tr>
        <td><code>bg-surface</code></td>
        <td>Card surface (<code>#ffffff</code>)</td>
        <td>Lifted black (<code>#1a1918</code>)</td>
      </tr>
      <tr>
        <td><code>bg-subtle</code></td>
        <td>Soft stone tint (<code>#f3f2f0</code>)</td>
        <td>Soft charcoal tint (<code>#242321</code>)</td>
      </tr>
      <tr>
        <td><code>bg-invert</code></td>
        <td>Near-black (<code>#1c1a18</code>)</td>
        <td>Off-white (<code>#f7f6f4</code>)</td>
      </tr>
      <tr>
        <td><code>text-body</code></td>
        <td>Near-black text (<code>#1c1a18</code>)</td>
        <td>Soft off-white text (<code>#edebe8</code>)</td>
      </tr>
      <tr>
        <td><code>text-subtle</code></td>
        <td>Warm gray (<code>#69655f</code>)</td>
        <td>Muted stone (<code>#a19d97</code>)</td>
      </tr>
      <tr>
        <td><code>text-invert</code></td>
        <td>Off-white text (<code>#f7f6f4</code>)</td>
        <td>Near-black text (<code>#1c1a18</code>)</td>
      </tr>
      <tr>
        <td><code>border-body</code></td>
        <td>Quiet border (<code>#e5e3df</code>)</td>
        <td>Charcoal border (<code>#2e2c2a</code>)</td>
      </tr>
      <tr>
        <td><code>border-subtle</code></td>
        <td>Hairline (<code>#ebe9e6</code>)</td>
        <td>Soft hairline (<code>#272523</code>)</td>
      </tr>
      <tr>
        <td><code>primary</code> palette</td>
        <td>Near-black (<code>34 32 29</code>), white text</td>
        <td>Off-white (<code>236 233 228</code>), dark text</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Dynamic Theme Switching Code

Aksara UI manages the root theme for you. On `DOMContentLoaded`, `Aksara.init()` reads the saved preference (`localStorage["aksara-theme"]`, default `"system"`) and writes `data-theme` plus the `.light` / `.dark` class on `<html>`. In `"system"` mode it follows `prefers-color-scheme` live. Use the built-in API instead of writing the attribute yourself, otherwise the next `Aksara.init()` on the document resets it:

```js
// "light", "dark" or "system"; persisted to localStorage and applied to <html>
Aksara.setTheme("dark");

// Current preference ("light" | "dark" | "system")
const current = Aksara.getTheme();

// Example toggle
const toggleTheme = () => {
  const effective = document.documentElement.getAttribute("data-theme");
  Aksara.setTheme(effective === "dark" ? "light" : "dark");
};

// React to changes
document.documentElement.addEventListener("aksara:theme:change", (event) => {
  console.log("Theme is now", event.detail.theme);
});
```

---

## Interactive Theme Showcase

Wrap any subtree in `.light` or `.dark` to scope a theme to it. Surfaces, text, borders **and the palette** switch together, so the same markup below renders as a real light card and a real dark card:

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="light p-4 rounded-[16px] border border-subtle bg-body text-body">
        <span class="badge badge-soft-primary mb-3">Light scope</span>
        <h4 class="mt-0 mb-2">Soft Light</h4>
        <p class="text-subtle text-sm mb-4 mt-0">Soft paper surfaces, hairline borders and a near-black primary with white text.</p>
        <div class="docs-row">
          <button class="btn btn-primary btn-sm">Primary</button>
          <button class="btn btn-soft-success btn-sm">Soft</button>
          <button class="btn btn-outline-danger btn-sm">Outline</button>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="dark p-4 rounded-[16px] border border-subtle bg-body text-body">
        <span class="badge badge-soft-primary mb-3">Dark scope</span>
        <h4 class="mt-0 mb-2">Soft Dark</h4>
        <p class="text-subtle text-sm mb-4 mt-0">Near-black surfaces with lifted fills; the primary turns off-white with dark text.</p>
        <div class="docs-row">
          <button class="btn btn-primary btn-sm">Primary</button>
          <button class="btn btn-soft-success btn-sm">Soft</button>
          <button class="btn btn-outline-danger btn-sm">Outline</button>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- Simply use adaptive utility variables. They handle both states natively! -->
<div class="p-4 rounded-[16px] border border-body bg-body text-body">
  <span class="badge badge-soft-primary mb-3">Card Label</span>
  <h4 class="mt-0 mb-2 font-extrabold">Adaptive Card</h4>
  <p class="text-subtle text-sm mb-5 mt-0">
    This element remains stunning across all display settings without writing theme code.
  </p>
  <button class="btn btn-primary btn-sm">Primary Action</button>
</div>
```
