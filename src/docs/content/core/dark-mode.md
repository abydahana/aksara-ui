# Theme Adaptability

Aksara UI ships with two first-class themes: light and dark. Component surfaces, text, borders, overlays, shadows, form controls, tables, dropdowns, modals, tooltips, placeholders, and other built-in elements read from adaptive CSS variables by default.

---

## Activating Themes

To apply a theme, toggle the `data-theme` attribute on the root html element:

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
        <th style="width: 25%;">Adaptive Class</th>
        <th style="width: 35%;">Light Theme Value</th>
        <th style="width: 40%;">Dark Theme Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bg-body</code></td>
        <td>Soft clean background (<code>#fbfcff</code>)</td>
        <td>Deep rich navy/gray (<code>#0b1020</code>)</td>
      </tr>
      <tr>
        <td><code>bg-subtle</code></td>
        <td>Light slate tint (<code>#f4f7fb</code>)</td>
        <td>Subtle navy slate (<code>#182033</code>)</td>
      </tr>
      <tr>
        <td><code>bg-invert</code></td>
        <td>Dark slate (<code>#0f172a</code>)</td>
        <td>White slate (<code>#f8fafc</code>)</td>
      </tr>
      <tr>
        <td><code>text-body</code></td>
        <td>Dark slate text (<code>#172033</code>)</td>
        <td>Pure off-white text (<code>#f8fafc</code>)</td>
      </tr>
      <tr>
        <td><code>text-subtle</code></td>
        <td>Medium gray (<code>#64748b</code>)</td>
        <td>Soft muted blue-gray (<code>#aebacc</code>)</td>
      </tr>
      <tr>
        <td><code>text-invert</code></td>
        <td>Off-white text (<code>#f8fafc</code>)</td>
        <td>Dark slate text (<code>#0f172a</code>)</td>
      </tr>
      <tr>
        <td><code>border-body</code></td>
        <td>Muted cool-gray border (<code>#d7deea</code>)</td>
        <td>Medium slate border (<code>#334155</code>)</td>
      </tr>
      <tr>
        <td><code>border-subtle</code></td>
        <td>Extra soft border (<code>#e6ebf3</code>)</td>
        <td>Soft dark border (<code>#263247</code>)</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Dynamic Theme Switching Code

Below is a lightweight, modern JavaScript snippet to automate theme switching. It reads user preferences from local storage and falls back to system preferences if none exist:

```js
// Retrieve stored theme, or default to matching system color preferences
const getPreferredTheme = () => {
  const stored = localStorage.getItem("app-theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

// Apply theme to document element
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("app-theme", theme);
};

// Initialize theme on app load
setTheme(getPreferredTheme());

// Example Toggle Function
const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
};
```

---

## Interactive Theme Showcase

See the contrast side-by-side! Below are identical HTML card components rendered specifically inside simulated Light and Dark containers:

::html
<div class="docs-preview">
  <div class="row gap-4">
    <!-- Light Mode Container -->
    <div class="col-12 md:col-6">
      <div class="p-4 rounded-16 border" style="background-color: #fbfcff; border-color: #d7deea; color: #172033;">
        <span class="badge badge-soft-primary mb-3">Light Sandbox</span>
        <h4 class="mt-0 mb-2 font-800" style="color: #172033;">Aksara UI Soft Light</h4>
        <p class="text-sm mb-5 mt-0" style="color: #64748b; line-height: 1.6;">
          Adaptive utilities automatically render elegant bright surfaces with soft contrast lines and highly readable primary accents.
        </p>
        <button class="btn btn-primary btn-sm">Primary Action</button>
      </div>
    </div>

    <!-- Dark Mode Container -->
    <div class="col-12 md:col-6">
      <div class="p-4 rounded-16 border" style="background-color: #0b1020; border-color: #334155; color: #f8fafc;">
        <span class="badge badge-soft-primary mb-3">Dark Sandbox</span>
        <h4 class="mt-0 mb-2 font-800" style="color: #f8fafc;">Aksara UI Deep Dark</h4>
        <p class="text-sm mb-5 mt-0" style="color: #aebacc; line-height: 1.6;">
          Automatically toggling to dark mode adjusts backgrounds to an ultra-comfortable dark shade, keeping typography crisp.
        </p>
        <button class="btn btn-primary btn-sm">Primary Action</button>
      </div>
    </div>

  </div>
</div>
::end

```html
<!-- Simply use adaptive utility variables. They handle both states natively! -->
<div class="p-4 rounded-16 border border-body bg-body text-body">
  <span class="badge badge-soft-primary mb-3">Card Label</span>
  <h4 class="mt-0 mb-2 font-800">Adaptive Card</h4>
  <p class="text-subtle text-sm mb-5 mt-0">
    This element remains stunning across all display settings without writing theme code.
  </p>
  <button class="btn btn-primary btn-sm">Primary Action</button>
</div>
```
