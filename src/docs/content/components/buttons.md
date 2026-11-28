# Buttons

Buttons trigger actions, submit forms, or link views inside your app. Aksara UI provides solid semantic fills, soft translucent backdrops, crisp borders, custom sizing, block layouts, and accessible focus states.

Samples with a **Components** tab also show the same markup built with the `Button` and `ButtonGroup` string components from `@abydahana/aksara-ui/components`.

---

## Interactive Button Showcase

Explore Aksara UI's default button states. Hover over the buttons to see smooth transitional elevation, outline shifts, or gentle soft colors:

::html
<div class="docs-preview">
  <div class="mb-5">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Solid Semantic Variants</h4>
    <div class="docs-row">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-danger">Danger</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-dark">Dark</button>
      <button class="btn btn-light">Light</button>
    </div>
  </div>

  <div class="mb-5">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Translucent Soft Variants</h4>
    <div class="docs-row">
      <button class="btn btn-soft-primary">Soft Primary</button>
      <button class="btn btn-soft-success">Soft Success</button>
      <button class="btn btn-soft-danger">Soft Danger</button>
      <button class="btn btn-soft-warning">Soft Warning</button>
      <button class="btn btn-soft-info">Soft Info</button>
    </div>
  </div>

  <div class="mb-5">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Outline & Border Variants</h4>
    <div class="docs-row">
      <button class="btn btn-outline-primary">Outline Primary</button>
      <button class="btn btn-outline-success">Outline Success</button>
      <button class="btn btn-outline-danger">Outline Danger</button>
      <button class="btn btn-ghost">Ghost (No Border)</button>
    </div>
  </div>

  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Size & Structural Modifiers</h4>
    <div class="docs-row">
      <button class="btn btn-primary btn-sm">Small Button</button>
      <button class="btn btn-primary">Default Size</button>
      <button class="btn btn-primary btn-lg">Large Button</button>
      <button class="btn btn-primary btn-icon" aria-label="Add Item"><span class="mdi mdi-plus"></span></button>
    </div>
  </div>

  <div class="mt-5">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Anchor Buttons</h4>
    <div class="docs-row">
      <a class="btn btn-primary" href="#/components/buttons">Primary Link</a>
      <a class="btn btn-outline-primary" href="#/components/buttons">Outline Link</a>
      <a class="btn btn-soft-success hstack gap-2" href="#/getting-started">
        <span class="mdi mdi-open-in-new"></span>
        Documentation Link
      </a>
    </div>
  </div>
</div>
::end

---

## Semantic Color Classes

Apply `.btn` to form a button's core dimensions, and couple it with any color modifier to paint the background.

```html
<!-- Solid Fills -->
<button class="btn btn-primary">Primary Fill</button>
<button class="btn btn-danger">Danger Fill</button>

<!-- Soft Transparent Backdrops (Gentle alpha backgrounds with solid text) -->
<button class="btn btn-soft-primary">Soft Primary</button>
<button class="btn btn-soft-danger">Soft Danger</button>

<!-- Outline Borders -->
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-outline-danger">Outline Danger</button>

<!-- Ghost (Flat text, no border or backdrop; only shows background on hover) -->
<button class="btn btn-ghost">Ghost Action</button>
```

```js components
import { Button } from "@abydahana/aksara-ui/components";

Button({ label: "Primary Fill", variant: "primary" });
Button({ label: "Danger Fill", variant: "danger" });

Button({ label: "Soft Primary", variant: "primary", soft: true });
Button({ label: "Soft Danger", variant: "danger", soft: true });

Button({ label: "Outline Primary", variant: "primary", outline: true });
Button({ label: "Outline Danger", variant: "danger", outline: true });

Button({ label: "Ghost Action", ghost: true });
```

---

## Ghost, Subtle And Plain

Quiet buttons keep secondary actions out of the way. `btn-ghost-{color}` is text-only until hovered, `btn-subtle` sits on a neutral tint, and `btn-plain` is a white (or surface) button with a hairline border, the usual choice for "Cancel" next to a primary action.

::html
<div class="docs-preview">
  <div class="mb-4">
    <h4 class="mt-0 mb-3 fw-semibold text-sm">Colored Ghost</h4>
    <div class="docs-row">
      <button class="btn btn-ghost-primary">Ghost Primary</button>
      <button class="btn btn-ghost-success">Ghost Success</button>
      <button class="btn btn-ghost-danger">Ghost Danger</button>
      <button class="btn btn-ghost-info">Ghost Info</button>
    </div>
  </div>
  <div class="mb-4">
    <h4 class="mt-0 mb-3 fw-semibold text-sm">Neutral</h4>
    <div class="docs-row">
      <button class="btn btn-plain"><span class="mdi mdi-tray-arrow-down"></span> Export</button>
      <button class="btn btn-subtle"><span class="mdi mdi-filter-variant"></span> Filter</button>
      <button class="btn btn-ghost"><span class="mdi mdi-dots-horizontal"></span> More</button>
    </div>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-semibold text-sm">Dialog Footer Pattern</h4>
    <div class="docs-row justify-end p-3 rounded-[12px] bg-body-secondary border border-subtle">
      <button class="btn btn-plain">Cancel</button>
      <button class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
::end

```html
<button class="btn btn-ghost-primary">Ghost Primary</button>
<button class="btn btn-subtle">Filter</button>
<button class="btn btn-plain">Cancel</button>
```

```js components
import { Button } from "@abydahana/aksara-ui/components";

Button({ label: "Ghost Primary", ghost: true, variant: "primary" });
Button({ label: "Filter", subtle: true });
Button({ label: "Cancel", plain: true });
```

---

## Focus, Pressed And Disabled

Every button shows a soft focus ring for keyboard users (`:focus-visible`), tinted to its own color. Pressing scales the button to 98%, and disabled buttons fade to 50% without a shadow. The ring width comes from `--aksara-ring-width`.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-primary [box-shadow:0_0_0_3px_rgb(var(--aksara-primary)/.28)]">Focused primary</button>
    <button class="btn btn-soft-danger [box-shadow:0_0_0_3px_rgb(var(--aksara-danger)/.28)]">Focused soft</button>
    <button class="btn btn-plain [box-shadow:var(--aksara-ring)]">Focused plain</button>
    <button class="btn btn-primary" disabled>Disabled</button>
    <button class="btn btn-outline-secondary" disabled>Disabled outline</button>
  </div>
  <p class="text-subtle text-xs mb-0 mt-3">The focused examples are pinned with an inline style; press Tab on any button to see the real ring.</p>
</div>
::end

```html
<button class="btn btn-primary" disabled>Disabled</button>
<a class="btn btn-primary disabled" aria-disabled="true">Disabled link</a>
```

```js components
import { Button } from "@abydahana/aksara-ui/components";

Button({ label: "Disabled", disabled: true });
Button({ label: "Disabled link", href: "/reports", disabled: true });
```

---

## Anchor Buttons

Use `.btn` on an `<a>` when the action navigates to another page, route, or downloadable resource. Use `<button>` for in-page actions such as submitting, opening a modal, or dismissing UI.

::html
<div class="docs-preview">
  <div class="docs-row">
    <a class="btn btn-primary" href="#/components/buttons">Primary Link</a>
    <a class="btn btn-outline-primary" href="#/components/buttons">Outline Link</a>
    <a class="btn btn-soft-success hstack gap-2" href="#/getting-started">
      <span class="mdi mdi-open-in-new"></span>
      Documentation Link
    </a>
  </div>
</div>
::end

```html
<a class="btn btn-primary" href="/dashboard">Dashboard</a>
<a class="btn btn-outline-primary" href="/reports">Reports</a>
<a class="btn btn-soft-success hstack gap-2" href="/docs">
  <span class="mdi mdi-open-in-new"></span>
  Documentation Link
</a>
```

```js components
import { Button } from "@abydahana/aksara-ui/components";

Button({ label: "Dashboard", href: "/dashboard" });
Button({ label: "Reports", href: "/reports", outline: true });
Button({
  children: '<span class="mdi mdi-open-in-new"></span> Documentation Link',
  href: "/docs",
  variant: "success",
  soft: true,
  className: "hstack gap-2"
});
```

---

## Size & Dimension Modifiers

Adjust button scales to fit layout constraints:

::html
<div class="docs-preview">
  <div class="mb-5">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Button Sizes</h4>
    <div class="docs-row items-center">
      <button class="btn btn-primary btn-sm">Small</button>
      <button class="btn btn-primary">Default</button>
      <button class="btn btn-primary btn-lg">Large</button>
    </div>
  </div>

  <div class="mb-5">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Anchor Sizes</h4>
    <div class="docs-row items-center">
      <a class="btn btn-outline-primary btn-sm" href="#/components/buttons">Small Link</a>
      <a class="btn btn-outline-primary" href="#/components/buttons">Default Link</a>
      <a class="btn btn-outline-primary btn-lg" href="#/components/buttons">Large Link</a>
    </div>
  </div>

  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th class="w-[25%]">Class Suffix</th>
          <th class="w-[25%]">Vertical Padding</th>
          <th class="w-[25%]">Horizontal Padding</th>
          <th class="w-[25%]">Font Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>btn-sm</code></td>
          <td><code>0.25rem</code> (4px)</td>
          <td><code>0.5rem</code> (8px)</td>
          <td><code>0.8125rem</code> (13px)</td>
        </tr>
        <tr>
          <td>Default</td>
          <td><code>0.5rem</code> (8px)</td>
          <td><code>1rem</code> (16px)</td>
          <td><code>1rem</code> (16px)</td>
        </tr>
        <tr>
          <td><code>btn-lg</code></td>
          <td><code>0.625rem</code> (10px)</td>
          <td><code>1.5rem</code> (24px)</td>
          <td><code>1.125rem</code> (18px)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
::end

```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>

<a class="btn btn-outline-primary btn-sm" href="/docs">Small Link</a>
<a class="btn btn-outline-primary" href="/docs">Default Link</a>
<a class="btn btn-outline-primary btn-lg" href="/docs">Large Link</a>
```

```js components
import { Button } from "@abydahana/aksara-ui/components";

Button({ label: "Small", size: "sm" });
Button({ label: "Default" });
Button({ label: "Large", size: "lg" });

Button({ label: "Small Link", href: "/docs", outline: true, size: "sm" });
Button({ label: "Default Link", href: "/docs", outline: true });
Button({ label: "Large Link", href: "/docs", outline: true, size: "lg" });
```

### Full-Width Block Buttons

Stretch buttons across 100% of their container's width using `.btn-block` or the `w-full` utility.

::html
<div class="docs-preview">
  <div class="vstack gap-3 max-w-[520px]">
    <button class="btn btn-primary btn-block">Block Button</button>
    <button class="btn btn-outline-primary w-full">Width Utility Button</button>
    <a class="btn btn-soft-success w-full" href="#/components/buttons">Full-Width Anchor Button</a>
  </div>
</div>
::end

```html
<button class="btn btn-primary btn-block">Primary Full Width</button>
<button class="btn btn-outline-primary w-full">Width Utility Button</button>
<a class="btn btn-soft-success w-full" href="/docs">Full-Width Anchor Button</a>
```

```js components
import { Button } from "@abydahana/aksara-ui/components";

Button({ label: "Primary Full Width", className: "btn-block" });
Button({ label: "Width Utility Button", outline: true, className: "w-full" });
Button({ label: "Full-Width Anchor Button", href: "/docs", variant: "success", soft: true, className: "w-full" });
```

### Accessible Icon Buttons

Use `.btn-icon` to create perfectly square trigger elements. Ideal for navigation sidebars, status counters, or close triggers. Always declare `aria-label` for screen readers:

::html
<div class="docs-preview">
  <div class="docs-row items-center">
    <button class="btn btn-soft-primary btn-sm btn-icon" aria-label="View">
      <span class="mdi mdi-eye-outline"></span>
    </button>
    <button class="btn btn-soft-primary btn-icon" aria-label="Create">
      <span class="mdi mdi-plus"></span>
    </button>
    <button class="btn btn-soft-primary btn-lg btn-icon" aria-label="Open">
      <span class="mdi mdi-open-in-new"></span>
    </button>
  </div>
</div>
::end

```html
<!-- Perfectly square + icon button -->
<button class="btn btn-soft-primary btn-sm btn-icon" aria-label="View">
  <span class="mdi mdi-eye-outline"></span>
</button>

<button class="btn btn-soft-primary btn-icon" aria-label="Create New Document">
  <span class="mdi mdi-plus"></span>
</button>
```

```js components
import { Button } from "@abydahana/aksara-ui/components";

Button({
  children: '<span class="mdi mdi-eye-outline"></span>',
  soft: true,
  size: "sm",
  className: "btn-icon",
  attributes: { "aria-label": "View" }
});

Button({
  children: '<span class="mdi mdi-plus"></span>',
  soft: true,
  className: "btn-icon",
  attributes: { "aria-label": "Create New Document" }
});
```

---

## Button Groups

Combine multiple buttons into a single cohesive row using the `.btn-group` wrapper. The wrapper automatically manages outer corner radiuses and aligns the buttons seamlessly.

::html
<div class="docs-preview">
  <div class="mb-5">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Solid Button Group</h4>
    <div class="btn-group">
      <button class="btn btn-primary">Left</button>
      <button class="btn btn-primary">Middle</button>
      <button class="btn btn-primary">Right</button>
    </div>
  </div>

  <div class="mb-5">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Outline Button Group</h4>
    <div class="btn-group">
      <button class="btn btn-outline-primary">Left</button>
      <button class="btn btn-outline-primary">Middle</button>
      <button class="btn btn-outline-primary">Right</button>
    </div>
  </div>

  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Icon Toolbar Group</h4>
    <div class="btn-group">
      <button class="btn btn-soft-primary btn-icon" aria-label="Align Left">
        <span class="mdi mdi-format-align-left"></span>
      </button>
      <button class="btn btn-soft-primary btn-icon" aria-label="Align Center">
        <span class="mdi mdi-format-align-center"></span>
      </button>
      <button class="btn btn-soft-primary btn-icon" aria-label="Align Right">
        <span class="mdi mdi-format-align-right"></span>
      </button>
      <button class="btn btn-soft-primary btn-icon" aria-label="Align Justify">
        <span class="mdi mdi-format-align-justify"></span>
      </button>
    </div>
  </div>
</div>
::end

```html
<!-- Solid Group -->
<div class="btn-group">
  <button class="btn btn-primary">Left</button>
  <button class="btn btn-primary">Middle</button>
  <button class="btn btn-primary">Right</button>
</div>

<!-- Icon Toolbar Group -->
<div class="btn-group">
  <button class="btn btn-soft-primary btn-icon" aria-label="Align Left">
    <span class="mdi mdi-format-align-left"></span>
  </button>
  <button class="btn btn-soft-primary btn-icon" aria-label="Align Center">
    <span class="mdi mdi-format-align-center"></span>
  </button>
  <button class="btn btn-soft-primary btn-icon" aria-label="Align Right">
    <span class="mdi mdi-format-align-right"></span>
  </button>
  <button class="btn btn-soft-primary btn-icon" aria-label="Align Justify">
    <span class="mdi mdi-format-align-justify"></span>
  </button>
</div>
```

```js components
import { Button, ButtonGroup } from "@abydahana/aksara-ui/components";

// Solid Group
ButtonGroup({
  children: ["Left", "Middle", "Right"].map((label) => Button({ label })).join("")
});

// Icon Toolbar Group
ButtonGroup({
  children: ["Left", "Center", "Right", "Justify"]
    .map((align) =>
      Button({
        children: `<span class="mdi mdi-format-align-${align.toLowerCase()}"></span>`,
        soft: true,
        className: "btn-icon",
        attributes: { "aria-label": `Align ${align}` }
      })
    )
    .join("")
});
```
