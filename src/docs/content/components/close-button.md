# Close Button

A close button dismisses an alert, card, toast, modal, or drawer. The "×" is drawn with CSS, so there is no icon to load and it stays crisp at every size. Pair it with `data-dismiss` (or `data-modal-close`, `data-offcanvas-close`) and Aksara handles the dismissal.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button type="button" class="btn-close" aria-label="Close"></button>
    <button type="button" class="modal-close" aria-label="Close"></button>
    <button type="button" class="btn-close" aria-label="Close" disabled></button>
  </div>
</div>
::end

```html
<button type="button" class="btn-close" aria-label="Close"></button>
```

```js components
import { CloseButton } from "@abydahana/aksara-ui/components";

CloseButton();
```

Always give the button an `aria-label`. Child elements are hidden (`display: none`), so text inside the button is neither shown nor read.

---

## Three Classes

All three share the same look, hover fill, focus ring, and press effect. They differ in how they are placed.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <div class="card card-flat h-100">
        <div class="card-body">
          <div class="hstack justify-between">
            <span class="fw-semibold text-sm">.btn-close</span>
            <button type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <p class="text-subtle text-sm m-0 mt-2">Inline, sits in normal flow. Use it in flex headers and toolbars.</p>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="card card-flat h-100">
        <div class="card-body">
          <div class="hstack justify-between">
            <span class="fw-semibold text-sm">.modal-close</span>
            <button type="button" class="modal-close" aria-label="Close"></button>
          </div>
          <p class="text-subtle text-sm m-0 mt-2">Same as <code>.btn-close</code>, named for modal and drawer headers.</p>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="card card-flat h-100">
        <div class="card-body pe-5">
          <span class="fw-semibold text-sm">.close</span>
          <p class="text-subtle text-sm m-0 mt-2">Absolutely positioned in the top-end corner of the nearest positioned parent.</p>
        </div>
        <button type="button" class="close" aria-label="Close"></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- Inline -->
<div class="hstack justify-between">
  <span>Title</span>
  <button type="button" class="btn-close" aria-label="Close"></button>
</div>

<!-- Pinned to the top-end corner; the parent needs position: relative (cards and alerts have it) -->
<div class="card">
  <div class="card-body pe-5">Content</div>
  <button type="button" class="close" aria-label="Close"></button>
</div>
```

```js components
import { CloseButton } from "@abydahana/aksara-ui/components";

// Inline
`<div class="hstack justify-between">
  <span>Title</span>
  ${CloseButton()}
</div>`;

// Pinned to the top-end corner
`<div class="card">
  <div class="card-body pe-5">Content</div>
  ${CloseButton({ kind: "close" })}
</div>`;
```

`.close` uses logical properties (`inset-inline-end`), so it moves to the left corner in right-to-left layouts.

---

## Sizes

`.btn-close-xs` through `.btn-close-2xl` set the button size; the cross scales with it. You can also combine `.btn-close` with a button size class such as `.btn-sm`. For `.close`, use `.close-sm` or `.close-lg`.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button type="button" class="btn-close btn-close-xs" aria-label="Close"></button>
    <button type="button" class="btn-close btn-close-sm" aria-label="Close"></button>
    <button type="button" class="btn-close btn-close-md" aria-label="Close"></button>
    <button type="button" class="btn-close btn-close-lg" aria-label="Close"></button>
    <button type="button" class="btn-close btn-close-xl" aria-label="Close"></button>
    <button type="button" class="btn-close btn-close-2xl" aria-label="Close"></button>
  </div>
  <div class="docs-row">
    <div class="card card-flat w-[140px] h-[80px]"><button type="button" class="close close-sm" aria-label="Close"></button></div>
    <div class="card card-flat w-[140px] h-[80px]"><button type="button" class="close" aria-label="Close"></button></div>
    <div class="card card-flat w-[140px] h-[80px]"><button type="button" class="close close-lg" aria-label="Close"></button></div>
  </div>
</div>
::end

```html
<button type="button" class="btn-close btn-close-xs" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-sm" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-md" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-lg" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-xl" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-2xl" aria-label="Close"></button>

<!-- Same as .btn-close-sm -->
<button type="button" class="btn-close btn-sm" aria-label="Close"></button>

<button type="button" class="close close-sm" aria-label="Close"></button>
<button type="button" class="close close-lg" aria-label="Close"></button>
```

```js components
import { CloseButton } from "@abydahana/aksara-ui/components";

CloseButton({ size: "xs" });
CloseButton({ size: "sm" });
CloseButton({ size: "md" });
CloseButton({ size: "lg" });
CloseButton({ size: "xl" });
CloseButton({ size: "2xl" });

CloseButton({ kind: "close", size: "sm" });
CloseButton({ kind: "close", size: "lg" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Alias</th><th>Size</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.btn-close-xs</code></td><td><code>.btn-close.btn-xs</code></td><td><code>1.25rem</code></td></tr>
      <tr><td><code>.btn-close-sm</code>, <code>.close-sm</code></td><td><code>.btn-close.btn-sm</code></td><td><code>1.5rem</code></td></tr>
      <tr><td><code>.btn-close-md</code> (default)</td><td><code>.btn-close.btn-md</code></td><td><code>2rem</code></td></tr>
      <tr><td><code>.btn-close-lg</code>, <code>.close-lg</code></td><td><code>.btn-close.btn-lg</code></td><td><code>2.5rem</code></td></tr>
      <tr><td><code>.btn-close-xl</code></td><td><code>.btn-close.btn-xl</code></td><td><code>3rem</code></td></tr>
      <tr><td><code>.btn-close-2xl</code></td><td><code>.btn-close.btn-2xl</code></td><td><code>3.5rem</code></td></tr>
    </tbody>
  </table>
</div>
::end

---

## White Variant

On photos and dark surfaces, add `.btn-close-white` (or `.close-white`). It switches to a white cross on a translucent white disc that stays visible over busy images.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="position-relative rounded-lg overflow-hidden">
        <div class="h-[220px] [background:linear-gradient(150deg,#d6e2e9,#5d7f95_55%,#2c4a5e)]" role="img" aria-label="River valley"></div>
        <button type="button" class="close close-white" aria-label="Close preview"></button>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="hstack justify-between gap-3 rounded-lg bg-[#111827] text-[#f9fafb] p-4 h-100">
        <div>
          <div class="fw-semibold">Recording paused</div>
          <div class="text-sm text-[rgb(255_255_255/.75)]">Resume within 10 minutes to keep the session.</div>
        </div>
        <button type="button" class="btn-close btn-close-white" aria-label="Dismiss"></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="position-relative rounded-lg overflow-hidden">
  <img class="d-block w-full h-[220px] object-cover" src="valley.jpg" alt="River valley" />
  <button type="button" class="close close-white" aria-label="Close preview"></button>
</div>

<button type="button" class="btn-close btn-close-white" aria-label="Dismiss"></button>
```

```js components
import { CloseButton } from "@abydahana/aksara-ui/components";

`<div class="position-relative rounded-lg overflow-hidden">
  <img class="d-block w-full h-[220px] object-cover" src="valley.jpg" alt="River valley" />
  ${CloseButton({ kind: "close", white: true, ariaLabel: "Close preview" })}
</div>`;

CloseButton({ white: true, ariaLabel: "Dismiss" });
```

---

## States

Hover adds a subtle fill, keyboard focus shows the theme focus ring, and pressing scales the button down slightly. A disabled close button is dimmed and ignores clicks. Tab to the buttons below to see the focus ring.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button type="button" class="btn-close btn-close-lg" aria-label="Close"></button>
    <button type="button" class="btn-close btn-close-lg" aria-label="Close" disabled></button>
  </div>
</div>
::end

```html
<button type="button" class="btn-close" aria-label="Close"></button>
<button type="button" class="btn-close" aria-label="Close" disabled></button>
```

```js components
import { CloseButton } from "@abydahana/aksara-ui/components";

CloseButton();
CloseButton({ disabled: true });
```

---

## Dismissing Things

Close buttons are only visual. Behavior comes from data attributes that `Aksara.init()` wires up.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Attribute</th><th>Value</th><th>Behavior</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-dismiss</code></td><td>Empty</td><td>Dismisses the closest <code>.alert</code>, <code>.toast</code>, <code>.modal</code>, <code>.offcanvas</code>, <code>.dropdown</code>, <code>.popover</code>, or <code>.tooltip</code>.</td></tr>
      <tr><td><code>data-dismiss</code></td><td>CSS selector</td><td>Dismisses every element that matches, anywhere on the page.</td></tr>
      <tr><td><code>data-modal-close</code></td><td>Empty or selector</td><td>Hides the closest <code>.modal</code>, or the one the selector names.</td></tr>
      <tr><td><code>data-offcanvas-close</code></td><td>Empty or selector</td><td>Hides the closest <code>.offcanvas</code>, or the one the selector names.</td></tr>
    </tbody>
  </table>
</div>
::end

How `data-dismiss` dismisses depends on the target: modals, offcanvas drawers, toasts, and dropdowns are hidden through their component instance (with their animations and events), and anything else is removed from the DOM. That is what lets one close button work on a plain card.

---

## In Alerts

Add `.alert-dismissible` to reserve room on the end side, then a `.close` with `data-dismiss`. Without a selector the button removes its own alert.

::html
<div class="docs-preview vstack gap-3">
  <div class="alert alert-success alert-dismissible">
    <span class="alert-icon mdi mdi-check-circle-outline"></span>
    <div class="alert-content">
      <p class="alert-title">Backup complete</p>
      <p class="m-0">1.2 GB copied to cloud storage at 03:00.</p>
    </div>
    <button type="button" class="close close-sm" data-dismiss aria-label="Dismiss alert"></button>
  </div>
  <div class="alert alert-warning alert-dismissible">
    Your session expires in 5 minutes.
    <button type="button" class="close close-sm" data-dismiss aria-label="Dismiss alert"></button>
  </div>
</div>
::end

```html
<div class="alert alert-success alert-dismissible">
  <span class="alert-icon mdi mdi-check-circle-outline"></span>
  <div class="alert-content">
    <p class="alert-title">Backup complete</p>
    <p class="m-0">1.2 GB copied to cloud storage at 03:00.</p>
  </div>
  <button type="button" class="close close-sm" data-dismiss aria-label="Dismiss alert"></button>
</div>
```

```js components
import { CloseButton } from "@abydahana/aksara-ui/components";

`<div class="alert alert-success alert-dismissible">
  <span class="alert-icon mdi mdi-check-circle-outline"></span>
  <div class="alert-content">…</div>
  ${CloseButton({ kind: "close", size: "sm", ariaLabel: "Dismiss alert", attributes: { "data-dismiss": true } })}
</div>`;
```

---

## In Cards

Cards are positioned, so `.close` pins to their corner. Cards are not in the list of automatic targets, so point `data-dismiss` at the card's id. Click to remove the card.

::html
<div class="docs-preview">
  <div id="closeTipCard" class="card max-w-[28rem]">
    <div class="card-body pe-5">
      <div class="hstack gap-3 items-start">
        <span class="avatar avatar-info avatar-md rounded-md"><span class="avatar-fallback mdi mdi-lightbulb-on-outline"></span></span>
        <div>
          <h4 class="card-title">Tip: keyboard shortcuts</h4>
          <p class="card-text text-sm">Press <code>?</code> anywhere to see every shortcut for the editor.</p>
        </div>
      </div>
    </div>
    <button type="button" class="close close-sm" data-dismiss="#closeTipCard" aria-label="Dismiss tip"></button>
  </div>
</div>
::end

```html
<div id="tipCard" class="card">
  <div class="card-body pe-5">…</div>
  <button type="button" class="close close-sm" data-dismiss="#tipCard" aria-label="Dismiss tip"></button>
</div>
```

```js components
import { CloseButton } from "@abydahana/aksara-ui/components";

`<div id="tipCard" class="card">
  <div class="card-body pe-5">…</div>
  ${CloseButton({ kind: "close", size: "sm", ariaLabel: "Dismiss tip", attributes: { "data-dismiss": "#tipCard" } })}
</div>`;
```

---

## In Toasts

Inside `.toast-header`, an inline `.btn-close` lines up with the title. `data-dismiss` finds the toast and hides it through the Toast instance.

::html
<div class="docs-preview">
  <div class="toast toast-show max-w-[24rem]" role="status">
    <div class="toast-header">
      <span class="hstack gap-2"><span class="mdi mdi-cloud-upload-outline text-primary"></span> Upload finished</span>
      <button type="button" class="btn-close btn-close-sm" data-dismiss aria-label="Close notification"></button>
    </div>
    <div class="toast-body">3 files were added to “Q4 Reports”.</div>
  </div>
</div>
::end

```html
<div id="uploadToast" class="toast" role="status">
  <div class="toast-header">
    <span>Upload finished</span>
    <button type="button" class="btn-close btn-close-sm" data-dismiss aria-label="Close notification"></button>
  </div>
  <div class="toast-body">3 files were added to “Q4 Reports”.</div>
</div>
```

```js components
import { CloseButton } from "@abydahana/aksara-ui/components";

`<div id="uploadToast" class="toast" role="status">
  <div class="toast-header">
    <span>Upload finished</span>
    ${CloseButton({ size: "sm", ariaLabel: "Close notification", attributes: { "data-dismiss": true } })}
  </div>
  <div class="toast-body">3 files were added to “Q4 Reports”.</div>
</div>`;
```

---

## In Modals And Drawers

Use `.modal-close` with `data-modal-close` in a modal header, and with `data-offcanvas-close` in a drawer header. A "Cancel" button can carry the same attribute.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button type="button" class="btn btn-primary" data-modal="#closeDemoModal">Open modal</button>
    <button type="button" class="btn btn-outline-primary" data-offcanvas="#closeDemoDrawer">Open drawer</button>
  </div>

  <div id="closeDemoModal" class="modal" tabindex="-1" aria-labelledby="closeDemoModalTitle">
    <div class="modal-dialog modal-sm">
      <div class="modal-header">
        <h4 id="closeDemoModalTitle" class="modal-title">Leave this page?</h4>
        <button type="button" class="modal-close" data-modal-close aria-label="Close dialog"></button>
      </div>
      <div class="modal-body">
        <p class="text-subtle text-sm m-0">You have unsaved changes in “Invoice #2041”.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-ghost" data-modal-close>Stay</button>
        <button type="button" class="btn btn-danger" data-modal-close>Leave</button>
      </div>
    </div>
  </div>

  <aside id="closeDemoDrawer" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="closeDemoDrawerTitle">
    <div class="offcanvas-header">
      <strong id="closeDemoDrawerTitle" class="text-lg">Notifications</strong>
      <button type="button" class="modal-close" data-offcanvas-close aria-label="Close drawer"></button>
    </div>
    <div class="offcanvas-body">
      <p class="text-subtle text-sm m-0">You are all caught up.</p>
    </div>
  </aside>
</div>
::end

```html
<div id="leaveModal" class="modal" tabindex="-1" aria-labelledby="leaveTitle">
  <div class="modal-dialog modal-sm">
    <div class="modal-header">
      <h4 id="leaveTitle" class="modal-title">Leave this page?</h4>
      <button type="button" class="modal-close" data-modal-close aria-label="Close dialog"></button>
    </div>
    <div class="modal-body">…</div>
    <div class="modal-footer">
      <button type="button" class="btn btn-ghost" data-modal-close>Stay</button>
    </div>
  </div>
</div>

<aside id="notifications" class="offcanvas offcanvas-end" tabindex="-1">
  <div class="offcanvas-header">
    <strong>Notifications</strong>
    <button type="button" class="modal-close" data-offcanvas-close aria-label="Close drawer"></button>
  </div>
</aside>
```

```js components
import { Button, CloseButton } from "@abydahana/aksara-ui/components";

// Modal header and footer
CloseButton({ kind: "modal-close", ariaLabel: "Close dialog", attributes: { "data-modal-close": true } });
Button({ label: "Stay", ghost: true, attributes: { "data-modal-close": true } });

// Drawer header
CloseButton({ kind: "modal-close", ariaLabel: "Close drawer", attributes: { "data-offcanvas-close": true } });
```

---

## String Component

`CloseButton` renders a `.btn-close` button (or `.close` / `.modal-close` through `kind`) with `type="button"` and an `aria-label`.

```ts
import { CloseButton } from "@abydahana/aksara-ui/components";

CloseButton(); // <button class="btn-close" type="button" aria-label="Close"></button>
CloseButton({ size: "sm", ariaLabel: "Dismiss alert", attributes: { "data-dismiss": "" } });
CloseButton({ white: true, attributes: { "data-modal-close": "" } });
CloseButton({ kind: "close", size: "sm" }); // <button class="close close-sm" ...>
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>kind</code></td><td><code>"btn-close" | "close" | "modal-close"</code></td><td><code>"btn-close"</code></td><td>Base class: inline, pinned to the parent's corner, or the modal/drawer header variant.</td></tr>
      <tr><td><code>size</code></td><td><code>"xs" | "sm" | "md" | "lg" | "xl" | "2xl"</code></td><td>—</td><td>Adds <code>.btn-close-{size}</code> (<code>.close-{size}</code> for <code>kind: "close"</code>). Without it the button is <code>2rem</code>.</td></tr>
      <tr><td><code>white</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.btn-close-white</code> (<code>.close-white</code> for <code>kind: "close"</code>).</td></tr>
      <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Sets the native <code>disabled</code> attribute.</td></tr>
      <tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>"Close"</code></td><td>Accessible name.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra attributes, typically <code>data-dismiss</code>, <code>data-modal-close</code>, or <code>data-offcanvas-close</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.btn-close</code></td><td>Inline <code>2rem</code> round button with a CSS-drawn cross.</td></tr>
      <tr><td><code>.modal-close</code></td><td>Same styles as <code>.btn-close</code>, for modal and drawer headers.</td></tr>
      <tr><td><code>.close</code></td><td>Same styles, absolutely positioned <code>.75rem</code> from the top-end corner.</td></tr>
      <tr><td><code>.btn-close-xs</code> … <code>.btn-close-2xl</code></td><td>Sizes for <code>.btn-close</code>, also reachable as <code>.btn-close.btn-{size}</code>.</td></tr>
      <tr><td><code>.close-sm</code>, <code>.close-lg</code></td><td>Small and large sizes for <code>.close</code>.</td></tr>
      <tr><td><code>.btn-close-white</code>, <code>.close-white</code></td><td>White cross on a translucent white disc for dark surfaces.</td></tr>
    </tbody>
  </table>
</div>
::end
