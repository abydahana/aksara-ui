# Chip

Chips are compact, pill-shaped elements for tags, filters, selections, and contacts. A chip can hold a leading icon or avatar, a truncating label, and a trailing action such as a remove button. Removal works without any JavaScript of your own through `data-chip-remove`.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="chip chip-md">Design</span>
    <span class="chip chip-soft-primary chip-md"><span class="chip-icon mdi mdi-tag-outline"></span><span class="chip-label">Release 2.4</span></span>
    <span class="chip chip-soft-success chip-md"><span class="chip-icon mdi mdi-check-circle-outline"></span><span class="chip-label">Approved</span></span>
    <span class="chip chip-outline-info chip-md"><span class="chip-label">London</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove London"><span class="mdi mdi-close"></span></button></span>
    <span class="chip chip-md ps-1"><span class="avatar avatar-warning avatar-xs rounded-full" aria-hidden="true">GL</span><span class="chip-label">Grace Lee</span></span>
  </div>
</div>
::end

```html
<span class="chip chip-md">Design</span>
<span class="chip chip-soft-primary chip-md">
  <span class="chip-icon mdi mdi-tag-outline"></span>
  <span class="chip-label">Release 2.4</span>
</span>
```

```js components
import { Chip } from "@abydahana/aksara-ui/components";

Chip({ as: "span", variant: "default", size: "md", children: "Design" });
Chip({ as: "span", variant: "primary", size: "md", icon: "mdi-tag-outline", label: "Release 2.4" });
```

---

## Variants

A bare `.chip` is a neutral pill with a border on the surface color. Add a color modifier for a solid fill, a soft tint, or an outline. Every palette color has all three.

::html
<div class="docs-preview">
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Default</h4>
    <div class="docs-row">
      <span class="chip chip-sm">Default chip</span>
    </div>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Solid</h4>
    <div class="docs-row">
      <span class="chip chip-primary chip-sm">Primary</span>
      <span class="chip chip-secondary chip-sm">Secondary</span>
      <span class="chip chip-tertiary chip-sm">Tertiary</span>
      <span class="chip chip-success chip-sm">Success</span>
      <span class="chip chip-danger chip-sm">Danger</span>
      <span class="chip chip-warning chip-sm">Warning</span>
      <span class="chip chip-info chip-sm">Info</span>
      <span class="chip chip-dark chip-sm">Dark</span>
      <span class="chip chip-light chip-sm">Light</span>
    </div>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Soft</h4>
    <div class="docs-row">
      <span class="chip chip-soft-primary chip-sm">Primary</span>
      <span class="chip chip-soft-secondary chip-sm">Secondary</span>
      <span class="chip chip-soft-tertiary chip-sm">Tertiary</span>
      <span class="chip chip-soft-success chip-sm">Success</span>
      <span class="chip chip-soft-danger chip-sm">Danger</span>
      <span class="chip chip-soft-warning chip-sm">Warning</span>
      <span class="chip chip-soft-info chip-sm">Info</span>
      <span class="chip chip-soft-dark chip-sm">Dark</span>
      <span class="chip chip-soft-light chip-sm">Light</span>
    </div>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Outline</h4>
    <div class="docs-row">
      <span class="chip chip-outline-primary chip-sm">Primary</span>
      <span class="chip chip-outline-secondary chip-sm">Secondary</span>
      <span class="chip chip-outline-tertiary chip-sm">Tertiary</span>
      <span class="chip chip-outline-success chip-sm">Success</span>
      <span class="chip chip-outline-danger chip-sm">Danger</span>
      <span class="chip chip-outline-warning chip-sm">Warning</span>
      <span class="chip chip-outline-info chip-sm">Info</span>
      <span class="chip chip-outline-dark chip-sm">Dark</span>
      <span class="chip chip-outline-light chip-sm">Light</span>
    </div>
  </div>
</div>
::end

```html
<span class="chip chip-sm">Default chip</span>

<span class="chip chip-primary chip-sm">Primary</span>
<span class="chip chip-soft-primary chip-sm">Primary</span>
<span class="chip chip-outline-primary chip-sm">Primary</span>
```

```js components
import { Chip } from "@abydahana/aksara-ui/components";

Chip({ as: "span", variant: "default", children: "Default chip" });

Chip({ as: "span", variant: "primary", soft: false, children: "Primary" });
Chip({ as: "span", variant: "primary", children: "Primary" });
Chip({ as: "span", variant: "primary", outline: true, children: "Primary" });
```

Colors: `primary`, `secondary`, `tertiary`, `success`, `danger`, `warning`, `info`, `dark`, `light`.

---

## Sizes

`.chip` sets shape and color only. The size class sets padding, font size, and a minimum height, so always add one.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="chip chip-soft-primary chip-xs">Extra small</span>
    <span class="chip chip-soft-primary chip-sm">Small</span>
    <span class="chip chip-soft-primary chip-md">Medium</span>
    <span class="chip chip-soft-primary chip-lg">Large</span>
  </div>
  <div class="docs-row">
    <span class="chip chip-outline-secondary chip-xs"><span class="chip-icon mdi mdi-map-marker-outline"></span><span class="chip-label">Manchester</span></span>
    <span class="chip chip-outline-secondary chip-sm"><span class="chip-icon mdi mdi-map-marker-outline"></span><span class="chip-label">Manchester</span></span>
    <span class="chip chip-outline-secondary chip-md"><span class="chip-icon mdi mdi-map-marker-outline"></span><span class="chip-label">Manchester</span></span>
    <span class="chip chip-outline-secondary chip-lg"><span class="chip-icon mdi mdi-map-marker-outline"></span><span class="chip-label">Manchester</span></span>
  </div>
</div>
::end

```html
<span class="chip chip-soft-primary chip-xs">Extra small</span>
<span class="chip chip-soft-primary chip-sm">Small</span>
<span class="chip chip-soft-primary chip-md">Medium</span>
<span class="chip chip-soft-primary chip-lg">Large</span>
```

```js components
import { Chip } from "@abydahana/aksara-ui/components";

Chip({ as: "span", variant: "primary", size: "xs", children: "Extra small" });
Chip({ as: "span", variant: "primary", size: "sm", children: "Small" });
Chip({ as: "span", variant: "primary", size: "md", children: "Medium" });
Chip({ as: "span", variant: "primary", size: "lg", children: "Large" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Padding</th><th>Font size</th><th>Min height</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.chip-xs</code></td><td><code>.125rem .375rem</code></td><td><code>.6875rem</code></td><td><code>1.375rem</code></td></tr>
      <tr><td><code>.chip-sm</code></td><td><code>.25rem .5rem</code></td><td><code>.75rem</code></td><td><code>1.75rem</code></td></tr>
      <tr><td><code>.chip-md</code></td><td><code>.375rem .75rem</code></td><td><code>.875rem</code></td><td><code>2.125rem</code></td></tr>
      <tr><td><code>.chip-lg</code></td><td><code>.5rem 1rem</code></td><td><code>1rem</code></td><td><code>2.5rem</code></td></tr>
    </tbody>
  </table>
</div>
::end

---

## Icons And Avatars

Put a `.chip-icon` before or after the label. Icons inherit the chip color and never shrink. For people, use an `.avatar-xs` and trim the start padding with `ps-1` so the avatar sits close to the edge.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="chip chip-soft-success chip-md"><span class="chip-icon mdi mdi-check-circle-outline"></span><span class="chip-label">Paid</span></span>
    <span class="chip chip-soft-warning chip-md"><span class="chip-icon mdi mdi-clock-outline"></span><span class="chip-label">Pending review</span></span>
    <span class="chip chip-soft-danger chip-md"><span class="chip-icon mdi mdi-alert-circle-outline"></span><span class="chip-label">Overdue</span></span>
    <span class="chip chip-md"><span class="chip-label">Sort by date</span><span class="chip-icon mdi mdi-chevron-down"></span></span>
  </div>
  <div class="docs-row">
    <span class="chip chip-md ps-1"><span class="avatar avatar-primary avatar-xs rounded-full" aria-hidden="true">RC</span><span class="chip-label">Ryan Cooper</span></span>
    <span class="chip chip-md ps-1"><span class="avatar avatar-success avatar-xs rounded-full" aria-hidden="true">LB</span><span class="chip-label">Laura Bennett</span></span>
    <span class="chip chip-soft-primary chip-md ps-1"><span class="avatar avatar-danger avatar-xs rounded-full" aria-hidden="true">MP</span><span class="chip-label">Mia Parker</span></span>
  </div>
</div>
::end

```html
<span class="chip chip-soft-success chip-md">
  <span class="chip-icon mdi mdi-check-circle-outline"></span>
  <span class="chip-label">Paid</span>
</span>

<span class="chip chip-md ps-1">
  <span class="avatar avatar-primary avatar-xs rounded-full" aria-hidden="true">RC</span>
  <span class="chip-label">Ryan Cooper</span>
</span>
```

```js components
import { Chip } from "@abydahana/aksara-ui/components";

Chip({ as: "span", variant: "success", size: "md", icon: "mdi-check-circle-outline", label: "Paid" });

// `avatarInitials` for an initials avatar, `avatar` for an image URL
Chip({
  as: "span",
  variant: "default",
  size: "md",
  avatarInitials: "RC",
  avatarVariant: "primary",
  label: "Ryan Cooper"
});
```

---

## Long Labels

`.chip-label` truncates with an ellipsis once the chip hits its maximum width. Chips are `max-width: 100%` by default; set a tighter cap with a `max-w-[…]` utility and put the full text in `title`.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="chip chip-soft-info chip-md max-w-[12rem]" title="quarterly-financial-report-final-v3.pdf"><span class="chip-icon mdi mdi-file-pdf-box"></span><span class="chip-label">quarterly-financial-report-final-v3.pdf</span></span>
    <span class="chip chip-md max-w-[10rem]" title="Royal Borough of Kensington and Chelsea"><span class="chip-icon mdi mdi-map-marker-outline"></span><span class="chip-label">Royal Borough of Kensington and Chelsea</span></span>
  </div>
</div>
::end

```html
<span class="chip chip-soft-info chip-md max-w-[12rem]" title="quarterly-financial-report-final-v3.pdf">
  <span class="chip-icon mdi mdi-file-pdf-box"></span>
  <span class="chip-label">quarterly-financial-report-final-v3.pdf</span>
</span>
```

```js components
import { Chip } from "@abydahana/aksara-ui/components";

Chip({
  as: "span",
  variant: "info",
  size: "md",
  icon: "mdi-file-pdf-box",
  label: "quarterly-financial-report-final-v3.pdf",
  className: "max-w-[12rem]",
  attributes: { title: "quarterly-financial-report-final-v3.pdf" }
});
```

---

## Removable Chips

Add a `.chip-action` with `data-chip-remove` inside the chip. Clicking it removes the closest `.chip`. Use a real `<button>` so the action is reachable by keyboard, and reset its native styles with `border-0 bg-transparent p-0 text-current`. Click the close icons below.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="chip chip-soft-primary chip-sm"><span class="chip-label">React</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove React"><span class="mdi mdi-close"></span></button></span>
    <span class="chip chip-soft-primary chip-sm"><span class="chip-label">TypeScript</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove TypeScript"><span class="mdi mdi-close"></span></button></span>
    <span class="chip chip-soft-primary chip-sm"><span class="chip-label">Accessibility</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove Accessibility"><span class="mdi mdi-close"></span></button></span>
  </div>
  <div class="docs-row">
    <span class="chip chip-md"><span class="chip-icon mdi mdi-calendar-blank-outline"></span><span class="chip-label">Last 30 days</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove date filter"><span class="mdi mdi-close-circle"></span></button></span>
    <span class="chip chip-outline-danger chip-md"><span class="chip-label">Status: Failed</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove status filter"><span class="mdi mdi-close-circle"></span></button></span>
    <span class="chip chip-primary chip-md"><span class="chip-label">Owner: me</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove owner filter"><span class="mdi mdi-close-circle"></span></button></span>
  </div>
</div>
::end

```html
<span class="chip chip-soft-primary chip-sm">
  <span class="chip-label">React</span>
  <button
    type="button"
    class="chip-action border-0 bg-transparent p-0 text-current"
    data-chip-remove
    aria-label="Remove React"
  >
    <span class="mdi mdi-close"></span>
  </button>
</span>
```

```js components
import { Chip } from "@abydahana/aksara-ui/components";

Chip({ variant: "primary", label: "React", removable: true, removeLabel: "Remove React" });
```

`.chip-action` sits at 70% opacity and goes fully opaque on hover. It works for any trailing control, not only removal, for example a dropdown caret or an edit icon.

### The remove event

Before removing the chip, Aksara dispatches `aksara:chip:remove` on it. The event bubbles and is cancelable, so one listener on a parent can sync your state or keep the chip.

```js
document.querySelector("#activeFilters").addEventListener("aksara:chip:remove", (event) => {
  const chip = event.detail.chip;

  if (chip.hasAttribute("data-locked")) {
    event.preventDefault(); // keep the chip in the DOM
    return;
  }

  filters.delete(chip.dataset.value);
  refreshResults();
});
```

The listener is delegated from the document, so chips rendered after `Aksara.init()` work too.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Attribute / event</th><th>Where</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-chip-remove</code></td><td>Any element inside a <code>.chip</code></td><td>On click, dispatches <code>aksara:chip:remove</code> and removes the closest <code>.chip</code> unless the event is canceled.</td></tr>
      <tr><td><code>aksara:chip:remove</code></td><td>Fired on the <code>.chip</code></td><td>Bubbles, cancelable. <code>event.detail.chip</code> is the chip element. Call <code>preventDefault()</code> to keep it.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Clickable Chips

A chip can be a `<button>` or an `<a>`; `.chip` already sets the pointer cursor and removes link underlines. Show the selected state by switching to a stronger variant and setting `aria-pressed` (buttons) or `aria-current` (links). Disabled chips use the `disabled` attribute or `.disabled`.

::html
<div class="docs-preview">
  <div class="docs-row" role="group" aria-label="Category">
    <button type="button" class="chip chip-primary chip-md" aria-pressed="true"><span class="chip-icon mdi mdi-check"></span><span class="chip-label">All</span></button>
    <button type="button" class="chip chip-md" aria-pressed="false">Electronics</button>
    <button type="button" class="chip chip-md" aria-pressed="false">Home &amp; living</button>
    <button type="button" class="chip chip-md" aria-pressed="false">Fashion</button>
    <button type="button" class="chip chip-md" aria-pressed="false" disabled>Groceries</button>
  </div>
  <div class="docs-row">
    <a class="chip chip-soft-info chip-sm" href="#/components/chip" aria-current="page">#frontend</a>
    <a class="chip chip-outline-secondary chip-sm" href="#/components/chip">#css</a>
    <a class="chip chip-outline-secondary chip-sm" href="#/components/chip">#design-systems</a>
    <a class="chip chip-outline-secondary chip-sm disabled" href="#/components/chip" aria-disabled="true" tabindex="-1">#archived</a>
  </div>
</div>
::end

```html
<button type="button" class="chip chip-primary chip-md" aria-pressed="true">
  <span class="chip-icon mdi mdi-check"></span>
  <span class="chip-label">All</span>
</button>
<button type="button" class="chip chip-md" aria-pressed="false">Electronics</button>
<button type="button" class="chip chip-md" aria-pressed="false" disabled>Groceries</button>

<a class="chip chip-soft-info chip-sm" href="/tags/frontend" aria-current="page">#frontend</a>
```

```js components
import { Chip } from "@abydahana/aksara-ui/components";

Chip({
  variant: "primary",
  soft: false,
  size: "md",
  icon: "mdi-check",
  label: "All",
  attributes: { "aria-pressed": "true" }
});
Chip({ variant: "default", size: "md", children: "Electronics", attributes: { "aria-pressed": "false" } });
Chip({
  variant: "default",
  size: "md",
  children: "Groceries",
  disabled: true,
  attributes: { "aria-pressed": "false" }
});

Chip({ href: "/tags/frontend", variant: "info", children: "#frontend", attributes: { "aria-current": "page" } });
```

Aksara does not toggle the variant for you. Swap the classes and `aria-pressed` in your click handler.

---

## Active Filters

A search bar with the applied filters as removable chips underneath. Removing a chip fires `aksara:chip:remove`, which is where you re-run the query.

::html
<div class="docs-preview">
  <div class="card max-w-[40rem]">
    <div class="card-body">
      <div class="form-icon">
        <span class="form-icon-start mdi mdi-magnify"></span>
        <input class="form-control" type="search" aria-label="Search orders" placeholder="Search orders" value="coffee">
      </div>
      <div class="hstack flex-wrap gap-2 mt-3">
        <span class="text-subtle text-sm me-1">Filters</span>
        <span class="chip chip-soft-primary chip-sm"><span class="chip-label">Status: Shipped</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove status filter"><span class="mdi mdi-close"></span></button></span>
        <span class="chip chip-soft-primary chip-sm"><span class="chip-label">Nov 1 – Nov 28</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove date filter"><span class="mdi mdi-close"></span></button></span>
        <span class="chip chip-soft-primary chip-sm"><span class="chip-label">Over $50.00</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove amount filter"><span class="mdi mdi-close"></span></button></span>
        <button type="button" class="btn btn-ghost btn-sm">Clear all</button>
      </div>
      <p class="text-subtle text-sm m-0 mt-3">24 orders match</p>
    </div>
  </div>
</div>
::end

```html
<div class="hstack flex-wrap gap-2">
  <span class="text-subtle text-sm me-1">Filters</span>
  <span class="chip chip-soft-primary chip-sm" data-value="status:shipped">
    <span class="chip-label">Status: Shipped</span>
    <button
      type="button"
      class="chip-action border-0 bg-transparent p-0 text-current"
      data-chip-remove
      aria-label="Remove status filter"
    >
      <span class="mdi mdi-close"></span>
    </button>
  </span>
  <button type="button" class="btn btn-ghost btn-sm">Clear all</button>
</div>
```

```js components
import { Button, Chip } from "@abydahana/aksara-ui/components";

`<div class="hstack flex-wrap gap-2">
  <span class="text-subtle text-sm me-1">Filters</span>
  ${Chip({
    variant: "primary",
    label: "Status: Shipped",
    removable: true,
    removeLabel: "Remove status filter",
    attributes: { "data-value": "status:shipped" }
  })}
  ${Button({ label: "Clear all", ghost: true, size: "sm" })}
</div>`;
```

---

## Tag Input

Chips inside a `.form-control` box with a borderless input for the next tag. Adding a chip on Enter is up to your script; removal is handled by `data-chip-remove`.

::html
<div class="docs-preview">
  <div class="max-w-[32rem]">
    <label class="form-label" for="chipTagInput">Skills</label>
    <div class="form-control hstack flex-wrap gap-2 h-auto">
      <span class="chip chip-soft-secondary chip-sm"><span class="chip-label">Figma</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove Figma"><span class="mdi mdi-close"></span></button></span>
      <span class="chip chip-soft-secondary chip-sm"><span class="chip-label">Prototyping</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove Prototyping"><span class="mdi mdi-close"></span></button></span>
      <span class="chip chip-soft-secondary chip-sm"><span class="chip-label">User research</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove User research"><span class="mdi mdi-close"></span></button></span>
      <input id="chipTagInput" class="flex-1 min-w-[8rem] border-0 bg-transparent p-0 text-[inherit]" type="text" placeholder="Add a skill">
    </div>
    <p class="form-text">Press Enter to add. Up to 10 skills.</p>
  </div>
</div>
::end

```html
<label class="form-label" for="skills">Skills</label>
<div class="form-control hstack flex-wrap gap-2 h-auto">
  <span class="chip chip-soft-secondary chip-sm">
    <span class="chip-label">Figma</span>
    <button
      type="button"
      class="chip-action border-0 bg-transparent p-0 text-current"
      data-chip-remove
      aria-label="Remove Figma"
    >
      <span class="mdi mdi-close"></span>
    </button>
  </span>
  <input
    id="skills"
    class="flex-1 min-w-[8rem] border-0 bg-transparent p-0 text-[inherit]"
    type="text"
    placeholder="Add a skill"
  />
</div>
```

```js components
import { Chip, FormLabel } from "@abydahana/aksara-ui/components";

FormLabel({ label: "Skills", htmlFor: "skills" });
`<div class="form-control hstack flex-wrap gap-2 h-auto">
  ${Chip({ label: "Figma", removable: true, removeLabel: "Remove Figma" })}
  <input id="skills" class="flex-1 min-w-[8rem] border-0 bg-transparent p-0 text-[inherit]" type="text" placeholder="Add a skill" />
</div>`;
```

---

## Recipients

Contact chips with avatars, the pattern used in a message composer.

::html
<div class="docs-preview">
  <div class="card max-w-[36rem]">
    <div class="card-body vstack gap-3">
      <div class="hstack flex-wrap gap-2">
        <span class="text-subtle text-sm me-1">To</span>
        <span class="chip chip-md ps-1"><span class="avatar avatar-warning avatar-xs rounded-full" aria-hidden="true">GL</span><span class="chip-label">Grace Lee</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove Grace Lee"><span class="mdi mdi-close"></span></button></span>
        <span class="chip chip-md ps-1"><span class="avatar avatar-info avatar-xs rounded-full" aria-hidden="true">AM</span><span class="chip-label">Alex Morgan</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove Alex Morgan"><span class="mdi mdi-close"></span></button></span>
        <span class="chip chip-outline-danger chip-md" title="Not a valid address"><span class="chip-icon mdi mdi-alert-circle-outline"></span><span class="chip-label">sofia@studio</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove sofia@studio"><span class="mdi mdi-close"></span></button></span>
      </div>
      <input class="form-control" type="text" placeholder="Subject" value="Sprint review notes">
    </div>
  </div>
</div>
::end

```html
<span class="chip chip-md ps-1">
  <span class="avatar avatar-warning avatar-xs rounded-full" aria-hidden="true">GL</span>
  <span class="chip-label">Grace Lee</span>
  <button
    type="button"
    class="chip-action border-0 bg-transparent p-0 text-current"
    data-chip-remove
    aria-label="Remove Grace Lee"
  >
    <span class="mdi mdi-close"></span>
  </button>
</span>
```

```js components
import { Chip } from "@abydahana/aksara-ui/components";

Chip({
  variant: "default",
  size: "md",
  avatarInitials: "GL",
  avatarVariant: "warning",
  label: "Grace Lee",
  removable: true,
  removeLabel: "Remove Grace Lee"
});
```

---

## Tags On Cards

Read-only chips summarize metadata at a glance.

::html
<div class="docs-preview">
  <div class="card max-w-[26rem]">
    <div class="card-body">
      <h4 class="card-title">Dusk Coffee House</h4>
      <p class="card-subtitle">12 Deansgate, Manchester</p>
      <div class="hstack flex-wrap gap-2 mt-3">
        <span class="chip chip-soft-success chip-xs"><span class="chip-icon mdi mdi-clock-outline"></span><span class="chip-label">Open now</span></span>
        <span class="chip chip-xs"><span class="chip-icon mdi mdi-wifi"></span><span class="chip-label">Free Wi-Fi</span></span>
        <span class="chip chip-xs"><span class="chip-icon mdi mdi-power-plug-outline"></span><span class="chip-label">Outlets</span></span>
        <span class="chip chip-xs"><span class="chip-icon mdi mdi-dog-side"></span><span class="chip-label">Pet friendly</span></span>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="hstack flex-wrap gap-2">
  <span class="chip chip-soft-success chip-xs">
    <span class="chip-icon mdi mdi-clock-outline"></span>
    <span class="chip-label">Open now</span>
  </span>
  <span class="chip chip-xs">
    <span class="chip-icon mdi mdi-wifi"></span>
    <span class="chip-label">Free Wi-Fi</span>
  </span>
</div>
```

```js components
import { Chip } from "@abydahana/aksara-ui/components";

`<div class="hstack flex-wrap gap-2">
  ${Chip({ as: "span", variant: "success", size: "xs", icon: "mdi-clock-outline", label: "Open now" })}
  ${Chip({ as: "span", variant: "default", size: "xs", icon: "mdi-wifi", label: "Free Wi-Fi" })}
</div>`;
```

---

## String Component

`Chip` returns a chip as an HTML string. It renders a `<button>` by default, an `<a>` when you pass `href`, and a `<span>` with `as: "span"` (for static labels) or when it is `removable`. With `removable`, it appends a `<button>` with `data-chip-remove`, so removal works as soon as `Aksara.init()` has run.

```ts
import { Chip } from "@abydahana/aksara-ui/components";

Chip({ label: "Design" }); // soft secondary, small
Chip({ label: "Approved", variant: "success", icon: "mdi-check-circle-outline", size: "md" });
Chip({ label: "London", variant: "info", outline: true, removable: true });
Chip({ label: "#frontend", href: "/tags/frontend", variant: "primary" });
Chip({ label: "Primary", variant: "primary", soft: false }); // solid fill
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Escaped text, wrapped in <code>.chip-label</code>.</td></tr>
      <tr><td><code>children</code></td><td><code>string</code></td><td>—</td><td>Raw HTML used when <code>label</code> is not set.</td></tr>
      <tr><td><code>as</code></td><td><code>"button" | "span" | "a"</code></td><td>—</td><td>Element to render. Defaults to <code>&lt;a&gt;</code> with <code>href</code>, <code>&lt;span&gt;</code> when <code>removable</code>, otherwise <code>&lt;button&gt;</code>.</td></tr>
      <tr><td><code>variant</code></td><td><code>ChipVariant | "default"</code></td><td><code>"secondary"</code></td><td>Palette color, or <code>"default"</code> for the neutral chip with no color class.</td></tr>
      <tr><td><code>soft</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Uses <code>.chip-soft-{variant}</code>. Set <code>false</code> for the solid <code>.chip-{variant}</code>.</td></tr>
      <tr><td><code>outline</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uses <code>.chip-outline-{variant}</code>. Takes precedence over <code>soft</code>.</td></tr>
      <tr><td><code>ghost</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Emits <code>chip-ghost</code>: no fill and no border until hovered.</td></tr>
      <tr><td><code>size</code></td><td><code>"xs" | "sm" | "md" | "lg"</code></td><td><code>"sm"</code></td><td>Adds <code>.chip-{size}</code>.</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td>—</td><td>Leading MDI class, for example <code>"mdi-tag-outline"</code>.</td></tr>
      <tr><td><code>iconClass</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the leading icon.</td></tr>
      <tr><td><code>trailingIcon</code></td><td><code>string</code></td><td>—</td><td>Trailing MDI class. Ignored when <code>removable</code> is set.</td></tr>
      <tr><td><code>avatar</code></td><td><code>string</code></td><td>—</td><td>Leading image URL, rendered as a round <code>.chip-avatar</code> sized to the chip. Takes precedence over <code>icon</code>.</td></tr>
      <tr><td><code>avatarInitials</code></td><td><code>string</code></td><td>—</td><td>Leading initials avatar (<code>avatar-xs</code>) instead of an image; adds <code>ps-1</code> so it sits close to the edge.</td></tr>
      <tr><td><code>avatarVariant</code></td><td><code>"primary" | … | "light"</code></td><td>—</td><td>Color of the initials avatar (<code>avatar-{variant}</code>).</td></tr>
      <tr><td><code>removable</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Renders the chip as a <code>&lt;span&gt;</code> and appends a <code>&lt;button class="chip-action"&gt;</code> with <code>data-chip-remove</code>.</td></tr>
      <tr><td><code>removeLabel</code></td><td><code>string</code></td><td><code>"Remove"</code></td><td>Accessible label of the remove button, for example <code>"Remove React"</code>.</td></tr>
      <tr><td><code>active</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds the <code>.active</code> class. Pair it with a stronger variant for a visible selected state.</td></tr>
      <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Native <code>disabled</code> on buttons; <code>aria-disabled</code> and <code>tabindex="-1"</code> on links.</td></tr>
      <tr><td><code>href</code></td><td><code>string</code></td><td>—</td><td>Renders an <code>&lt;a&gt;</code> instead of a <code>&lt;button&gt;</code>.</td></tr>
      <tr><td><code>type</code></td><td><code>"button" | "submit" | "reset"</code></td><td><code>"button"</code></td><td>Button type. Ignored for links.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the chip.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes, for example <code>{ "data-value": "status:shipped" }</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

A removable `Chip` renders as a `<span>` with a real `<button>` remove action, the same structure as the markup under Removable Chips above, so removal is keyboard accessible. Set `removeLabel` so screen readers announce what is removed.

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.chip</code></td><td>Pill shape, flex layout, neutral border and surface. Pointer cursor and no underline.</td></tr>
      <tr><td><code>.chip-xs</code> … <code>.chip-lg</code></td><td>Padding, font size, and minimum height.</td></tr>
      <tr><td><code>.chip-{color}</code></td><td>Solid fill with a readable foreground.</td></tr>
      <tr><td><code>.chip-soft-{color}</code></td><td>10% tint with a 20% border.</td></tr>
      <tr><td><code>.chip-outline-{color}</code></td><td>Transparent fill with a 45% border.</td></tr>
      <tr><td><code>.chip-label</code></td><td>Flexible label that truncates with an ellipsis.</td></tr>
      <tr><td><code>.chip-icon</code></td><td>Non-shrinking icon slot.</td></tr>
      <tr><td><code>.chip-action</code></td><td>Trailing control at 70% opacity, fully opaque on hover.</td></tr>
    </tbody>
  </table>
</div>
::end
