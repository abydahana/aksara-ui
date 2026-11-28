# Spinner

Spinners communicate indeterminate loading states when exact progress is unknown. A spinner is a single `<span>` drawn with borders in `currentColor`, so it takes the color of its parent text and works on any background. Use the Progress component when you can report how far along a task is.

---

## Basic Spinner

::html
<div class="docs-preview">
  <div class="docs-row items-center">
    <span class="spinner" role="status" aria-label="Loading"></span>
    <span class="spinner spinner-sm" role="status" aria-label="Loading"></span>
    <span class="hstack gap-2 items-center text-sm text-subtle"><span class="spinner spinner-sm" aria-hidden="true"></span> Loading results…</span>
  </div>
</div>
::end

```html
<span class="spinner" role="status" aria-label="Loading"></span>

<span class="hstack gap-2 items-center text-sm text-subtle">
  <span class="spinner spinner-sm" aria-hidden="true"></span>
  Loading results…
</span>
```

```js components
import { Spinner } from "@abydahana/aksara-ui/components";

Spinner({ label: "Loading" });

// Decorative: the visible text already describes the state
`<span class="hstack gap-2 items-center text-sm text-subtle">
  ${Spinner({ size: "sm", decorative: true })}
  Loading results…
</span>`;
```

---

## Sizes

Seven sizes are available. `.spinner` alone equals `.spinner-md` (2rem). The ring thickness scales with the size.

::html
<div class="docs-preview">
  <div class="docs-row items-end gap-5">
    <div class="vstack gap-2 items-center"><span class="spinner spinner-xs" role="status" aria-label="Loading"></span><code class="text-xs">xs</code></div>
    <div class="vstack gap-2 items-center"><span class="spinner spinner-sm" role="status" aria-label="Loading"></span><code class="text-xs">sm</code></div>
    <div class="vstack gap-2 items-center"><span class="spinner spinner-md" role="status" aria-label="Loading"></span><code class="text-xs">md</code></div>
    <div class="vstack gap-2 items-center"><span class="spinner spinner-lg" role="status" aria-label="Loading"></span><code class="text-xs">lg</code></div>
    <div class="vstack gap-2 items-center"><span class="spinner spinner-xl" role="status" aria-label="Loading"></span><code class="text-xs">xl</code></div>
    <div class="vstack gap-2 items-center"><span class="spinner spinner-2xl" role="status" aria-label="Loading"></span><code class="text-xs">2xl</code></div>
    <div class="vstack gap-2 items-center"><span class="spinner [inline-size:5rem] [block-size:5rem] [border-width:0.45rem]" role="status" aria-label="Loading"></span><code class="text-xs">custom</code></div>
  </div>
</div>
::end

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Class</th><th>Size</th><th>Ring</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.spinner-xs</code></td><td><code>.75rem</code></td><td><code>.125rem</code></td></tr>
      <tr><td><code>.spinner-sm</code></td><td><code>1rem</code></td><td><code>.15rem</code></td></tr>
      <tr><td><code>.spinner-md</code></td><td><code>2rem</code> (default)</td><td><code>.25rem</code></td></tr>
      <tr><td><code>.spinner-lg</code></td><td><code>2.75rem</code></td><td><code>.3rem</code></td></tr>
      <tr><td><code>.spinner-xl</code></td><td><code>3.5rem</code></td><td><code>.35rem</code></td></tr>
      <tr><td><code>.spinner-2xl</code></td><td><code>4.25rem</code></td><td><code>.4rem</code></td></tr>
    </tbody>
  </table>
</div>
::end

```html
<span class="spinner spinner-xs"></span>
<span class="spinner spinner-sm"></span>
<span class="spinner spinner-md"></span>
<span class="spinner spinner-lg"></span>
<span class="spinner spinner-xl"></span>
<span class="spinner spinner-2xl"></span>

<!-- Custom size -->
<span class="spinner [inline-size:5rem] [block-size:5rem] [border-width:0.45rem]"></span>
```

```js components
import { Spinner } from "@abydahana/aksara-ui/components";

["xs", "sm", "md", "lg", "xl", "2xl"].map((size) => Spinner({ size })).join("\n");

// Custom size
Spinner({ attributes: { style: "inline-size: 5rem; block-size: 5rem; border-width: 0.45rem;" } });
```

---

## Colors

The active arc is `currentColor` and the track is the same color at 22% strength, so any `.text-*` utility recolors both.

::html
<div class="docs-preview">
  <div class="docs-row items-center gap-4">
    <span class="spinner text-primary" role="status" aria-label="Loading"></span>
    <span class="spinner text-secondary" role="status" aria-label="Loading"></span>
    <span class="spinner text-success" role="status" aria-label="Loading"></span>
    <span class="spinner text-danger" role="status" aria-label="Loading"></span>
    <span class="spinner text-warning" role="status" aria-label="Loading"></span>
    <span class="spinner text-info" role="status" aria-label="Loading"></span>
    <span class="spinner text-subtle" role="status" aria-label="Loading"></span>
  </div>
</div>
::end

```html
<span class="spinner text-primary"></span>
<span class="spinner text-secondary"></span>
<span class="spinner text-success"></span>
<span class="spinner text-danger"></span>
<span class="spinner text-warning"></span>
<span class="spinner text-info"></span>
<span class="spinner text-subtle"></span>
```

```js components
import { Spinner } from "@abydahana/aksara-ui/components";

["primary", "secondary", "success", "danger", "warning", "info"].map((variant) => Spinner({ variant })).join("\n");

// Any other text color goes through className
Spinner({ className: "text-subtle" });
```

---

## Button Loading

Use a small spinner inside buttons while an action runs. It follows the button text color, so it stays visible across solid, soft, and outline variants. Disable the button and keep a verb in the label so the user knows what is happening.

::html
<div class="docs-preview">
  <div class="docs-row flex-wrap">
    <button class="btn btn-primary" type="button" disabled>
      <span class="spinner spinner-sm" aria-hidden="true"></span>
      Saving
    </button>
    <button class="btn btn-soft-primary" type="button">
      Sync
      <span class="spinner spinner-sm" aria-hidden="true"></span>
    </button>
    <button class="btn btn-success" type="button" disabled>
      <span class="spinner spinner-sm" aria-hidden="true"></span>
      Publishing
    </button>
    <button class="btn btn-danger" type="button" disabled>
      <span class="spinner spinner-sm" aria-hidden="true"></span>
      Deleting
    </button>
    <button class="btn btn-warning" type="button" disabled>
      <span class="spinner spinner-sm" aria-hidden="true"></span>
      Processing
    </button>
    <button class="btn btn-outline-primary" type="button">
      <span class="spinner spinner-sm" aria-hidden="true"></span>
      Refresh
    </button>
    <button class="btn btn-soft-danger" type="button">
      Retry
      <span class="spinner spinner-sm" aria-hidden="true"></span>
    </button>
    <button class="btn btn-outline-primary btn-icon" type="button" aria-label="Refreshing">
      <span class="spinner spinner-sm" aria-hidden="true"></span>
    </button>
  </div>
  <div class="docs-row flex-wrap mt-4 items-center">
    <button class="btn btn-primary btn-xs" type="button" disabled><span class="spinner spinner-xs" aria-hidden="true"></span> Extra small</button>
    <button class="btn btn-primary btn-sm" type="button" disabled><span class="spinner spinner-xs" aria-hidden="true"></span> Small</button>
    <button class="btn btn-primary" type="button" disabled><span class="spinner spinner-sm" aria-hidden="true"></span> Default</button>
    <button class="btn btn-primary btn-lg" type="button" disabled><span class="spinner spinner-sm" aria-hidden="true"></span> Large</button>
  </div>
</div>
::end

```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner spinner-sm" aria-hidden="true"></span>
  Saving
</button>

<!-- Icon-only: the label moves to the button -->
<button class="btn btn-outline-primary btn-icon" type="button" aria-label="Refreshing">
  <span class="spinner spinner-sm" aria-hidden="true"></span>
</button>

<!-- Match the spinner to the button size -->
<button class="btn btn-primary btn-sm" type="button" disabled>
  <span class="spinner spinner-xs" aria-hidden="true"></span>
  Small
</button>
```

```js components
import { Button, Spinner } from "@abydahana/aksara-ui/components";

Button({ disabled: true, children: `${Spinner({ size: "sm", decorative: true })} Saving` });

// Icon-only: the label moves to the button
Button({
  outline: true,
  className: "btn-icon",
  attributes: { "aria-label": "Refreshing" },
  children: Spinner({ size: "sm", decorative: true })
});

// Match the spinner to the button size
Button({ size: "sm", disabled: true, children: `${Spinner({ size: "xs", decorative: true })} Small` });
```

Toggle the loading state from your submit handler:

```js
const button = document.querySelector("#saveButton");

button.addEventListener("click", async () => {
  const label = button.innerHTML;
  button.disabled = true;
  button.innerHTML = '<span class="spinner spinner-sm" aria-hidden="true"></span> Saving';
  try {
    await fetch("/api/settings", { method: "POST" });
  } finally {
    button.disabled = false;
    button.innerHTML = label;
  }
});
```

---

## Loading Overlay

Cover a card or panel while it refreshes. Make the container `relative`, then place an `absolute inset-0` layer over it with a translucent (refresh) or solid `bg-surface` (blocking task) background and a centered spinner. Set `aria-busy="true"` on the container while the overlay is visible.

::html
<div class="docs-preview">
  <div class="grid-2 gap-4">
    <div class="card relative overflow-hidden" aria-busy="true">
      <div class="card-body">
        <div class="hstack justify-between items-center mb-3">
          <h4 class="m-0 text-base fw-semibold">Monthly revenue</h4>
          <span class="badge badge-soft-success">+12.4%</span>
        </div>
        <div class="m-0 text-2xl fw-bold">$48,920</div>
        <div class="mt-1 mb-0 text-sm text-subtle">Compared with $43,510 last month</div>
        <div class="hstack gap-1 items-end mt-4 h-[4.5rem]">
          <div class="grow rounded-sm bg-primary/25 h-[35%]"></div>
          <div class="grow rounded-sm bg-primary/25 h-[55%]"></div>
          <div class="grow rounded-sm bg-primary/25 h-[45%]"></div>
          <div class="grow rounded-sm bg-primary/25 h-[70%]"></div>
          <div class="grow rounded-sm bg-primary/25 h-[60%]"></div>
          <div class="grow rounded-sm bg-primary/25 h-[85%]"></div>
          <div class="grow rounded-sm bg-primary/25 h-[75%]"></div>
          <div class="grow rounded-sm bg-primary/25 h-[95%]"></div>
        </div>
      </div>
      <div class="absolute inset-0 hstack items-center justify-center gap-2 backdrop-blur-sm text-primary [background:color-mix(in_srgb,var(--aksara-surface)_75%,transparent)]">
        <span class="spinner spinner-md" role="status" aria-label="Refreshing revenue"></span>
      </div>
    </div>
    <div class="card relative overflow-hidden" aria-busy="true">
      <div class="card-body">
        <h4 class="mt-0 mb-1 text-base fw-semibold">Import contacts</h4>
        <div class="mt-0 mb-3 text-sm text-subtle">customers-2026.csv · 4,218 rows</div>
        <ul class="list-group">
          <li class="list-group-item text-sm">Amy Clarke · amy.clarke@example.com</li>
          <li class="list-group-item text-sm">Ben Carter · ben.carter@example.com</li>
          <li class="list-group-item text-sm">Sofia Patel · sofia.patel@example.com</li>
        </ul>
      </div>
      <div class="absolute inset-0 vstack items-center justify-center gap-2 bg-surface">
        <span class="spinner spinner-lg text-primary" aria-hidden="true"></span>
        <span class="text-sm fw-semibold">Importing contacts…</span>
        <span class="text-xs text-subtle">This can take a minute</span>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card relative overflow-hidden" aria-busy="true">
  <div class="card-body">...</div>

  <div
    class="absolute inset-0 hstack items-center justify-center backdrop-blur-sm text-primary [background:color-mix(in_srgb,var(--aksara-surface)_75%,transparent)]"
  >
    <span class="spinner" role="status" aria-label="Refreshing revenue"></span>
  </div>
</div>
```

```js components
import { Card, CardBody, Spinner } from "@abydahana/aksara-ui/components";

Card({
  className: "relative overflow-hidden",
  attributes: { "aria-busy": "true" },
  children: `${CardBody({ children: "..." })}
    <div
      class="absolute inset-0 hstack items-center justify-center backdrop-blur-sm text-primary [background:color-mix(in_srgb,var(--aksara-surface)_75%,transparent)]"
     
    >
      ${Spinner({ label: "Refreshing revenue" })}
    </div>`
});
```

---

## Inline And Empty States

::html
<div class="docs-preview">
  <div class="vstack gap-4">
    <div class="input-group max-w-[24rem]">
      <span class="input-group-text"><span class="mdi mdi-magnify"></span></span>
      <input class="form-control" type="search" value="aksara" aria-label="Search">
      <span class="input-group-text"><span class="spinner spinner-sm" role="status" aria-label="Searching"></span></span>
    </div>

    <ul class="list-group max-w-[24rem]">
      <li class="list-group-item hstack justify-between items-center">
        <span class="hstack gap-2 items-center"><span class="mdi mdi-file-document-outline text-subtle"></span> invoice-2041.pdf</span>
        <span class="mdi mdi-check-circle text-success"></span>
      </li>
      <li class="list-group-item hstack justify-between items-center">
        <span class="hstack gap-2 items-center"><span class="mdi mdi-file-image-outline text-subtle"></span> cover-photo.png</span>
        <span class="spinner spinner-sm text-primary" role="status" aria-label="Uploading"></span>
      </li>
      <li class="list-group-item hstack justify-between items-center">
        <span class="hstack gap-2 items-center"><span class="mdi mdi-file-video-outline text-subtle"></span> product-demo.mp4</span>
        <span class="text-xs text-subtle">Queued</span>
      </li>
    </ul>

    <div class="vstack items-center justify-center gap-3 p-5 rounded-lg border border-subtle text-center">
      <span class="spinner spinner-xl text-primary" aria-hidden="true"></span>
      <div>
        <div class="m-0 fw-semibold">Preparing your workspace</div>
        <div class="mt-1 mb-0 text-sm text-subtle">We are copying templates and inviting your team.</div>
      </div>
    </div>

  </div>
</div>
::end

```html
<!-- In an input group -->
<div class="input-group">
  <input class="form-control" type="search" value="aksara" aria-label="Search" />
  <span class="input-group-text">
    <span class="spinner spinner-sm" role="status" aria-label="Searching"></span>
  </span>
</div>

<!-- Page or panel loader -->
<div class="vstack items-center justify-center gap-3 p-5 text-center">
  <span class="spinner spinner-xl text-primary" aria-hidden="true"></span>
  <div class="m-0 fw-semibold">Preparing your workspace</div>
</div>
```

```js components
import { InputGroup, InputGroupText, Input, Spinner } from "@abydahana/aksara-ui/components";

// In an input group
InputGroup({
  children:
    Input({ type: "search", value: "aksara", attributes: { "aria-label": "Search" } }) +
    InputGroupText({ children: Spinner({ size: "sm", label: "Searching" }) })
});

// Page or panel loader
`<div class="vstack items-center justify-center gap-3 p-5 text-center">
  ${Spinner({ size: "xl", variant: "primary", decorative: true })}
  <div class="m-0 fw-semibold">Preparing your workspace</div>
</div>`;
```

---

## Alignment Options

Spinners align with existing display and flex utilities. Keep the spinner itself small and let the parent control placement.

::html
<div class="docs-preview vstack gap-4">
  <div class="hstack gap-3 items-center justify-start p-3 bg-subtle rounded-[12px]">
    <span class="spinner spinner-sm" aria-hidden="true"></span>
    <span class="text-sm fw-bold">Start aligned loading row</span>
  </div>
  <div class="flex items-center justify-center gap-3 p-3 bg-subtle rounded-[12px]">
    <span class="spinner spinner-sm" aria-hidden="true"></span>
    <span class="text-sm fw-bold">Centered loading row</span>
  </div>
  <div class="flex items-center justify-end gap-3 p-3 bg-subtle rounded-[12px]">
    <span class="text-sm fw-bold">End aligned loading row</span>
    <span class="spinner spinner-sm" aria-hidden="true"></span>
  </div>
</div>
::end

```html
<div class="flex items-center justify-center gap-3">
  <span class="spinner spinner-sm" aria-hidden="true"></span>
  <span>Loading</span>
</div>
```

```js components
import { Spinner } from "@abydahana/aksara-ui/components";

`<div class="flex items-center justify-center gap-3">
  ${Spinner({ size: "sm", decorative: true })}
  <span>Loading</span>
</div>`;
```

---

## Accessibility

- A standalone spinner needs `role="status"` and an `aria-label` that says what is loading.
- When visible text already describes the state ("Saving", "Importing contacts…"), hide the spinner with `aria-hidden="true"`.
- Mark the region that is updating with `aria-busy="true"` and set it back to `false` when done.
- The rotation stops when the user prefers reduced motion; the ring stays visible.

---

## String Component

```ts
import { Spinner } from "@abydahana/aksara-ui/components";

Spinner();
// <span class="spinner" role="status" aria-label="Loading..."></span>

Spinner({ size: "sm", variant: "primary", label: "Saving" });
// <span class="spinner spinner-sm text-primary" role="status" aria-label="Saving"></span>

Spinner({ size: "xs", decorative: true });
// <span class="spinner spinner-xs" aria-hidden="true"></span>
```

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>size</code></td><td><code>"xs"</code> | <code>"sm"</code> | <code>"md"</code> | <code>"lg"</code> | <code>"xl"</code> | <code>"2xl"</code></td><td>—</td><td>Adds <code>.spinner-{size}</code>. Omit for the default <code>2rem</code> spinner.</td></tr>
      <tr><td><code>variant</code></td><td><code>"primary"</code> | <code>"secondary"</code> | <code>"success"</code> | <code>"danger"</code> | <code>"warning"</code> | <code>"info"</code> | <code>"dark"</code> | <code>"light"</code></td><td>—</td><td>Adds <code>text-{variant}</code>.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td><code>"Loading..."</code></td><td>Accessible name (<code>aria-label</code>).</td></tr>
      <tr><td><code>decorative</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Renders <code>aria-hidden="true"</code> instead of <code>role</code> and <code>aria-label</code>, for spinners next to text that already describes the state.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes; overrides the default <code>role</code> and <code>aria-label</code>.</td></tr>
    </tbody>
  </table>
</div>
::end
