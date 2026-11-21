# Collapse

Toggle the visibility of content areas with a declarative data attribute, no custom JavaScript required.

## Core Layout Showcase

Use the `.collapse` class to hide content and point a trigger at it with `data-collapse="#id"`. Clicking the trigger toggles the `.collapse-show` modifier on the panel and keeps `aria-expanded` in sync on every trigger that targets it:

::html
<div class="docs-preview py-4">
  <div class="mb-4">
    <button class="btn btn-primary" data-collapse="#demoCollapse" aria-expanded="false" aria-controls="demoCollapse">
      Toggle Content
    </button>
  </div>

  <div id="demoCollapse" class="collapse p-5 bg-subtle border border-subtle rounded-[12px] transition">
    <h4 class="mt-0 mb-2 fw-bold hstack gap-2"><span class="mdi mdi-information-outline text-primary"></span> Collapsible Card Area</h4>
    <p class="text-subtle text-sm mb-0 mt-0 leading-[22px]">
      This is a collapsible text content block. It is initially hidden via <code>display: none</code> using the <code>.collapse</code> utility and switches to <code>display: block</code> when the <code>.collapse-show</code> modifier is added.
    </p>
  </div>
</div>
::end

```html
<!-- Trigger Button -->
<button class="btn btn-primary" data-collapse="#demoCollapse" aria-expanded="false" aria-controls="demoCollapse">
  Toggle Content
</button>

<!-- Collapsible Content -->
<div id="demoCollapse" class="collapse p-5 bg-subtle border border-subtle rounded-[12px]">
  <h4 class="mt-0 mb-2 fw-bold">Collapsible Card Area</h4>
  <p class="text-subtle text-sm mb-0 leading-[22px]">...</p>
</div>
```

---

## Technical Specifications

- **`.collapse`**: Sets the target element's visibility to `display: none` by default.
- **`.collapse-show`**: Modifier that sets `display: block`. Add it in the markup to render a panel open.
- **`data-collapse="#id"`** (or `data-collapse-target="#id"`): Marks a trigger. Triggers use one delegated document listener, so they also work for markup rendered after `Aksara.init()`.
- **Events**: The panel dispatches bubbling `aksara:collapse:show` / `aksara:collapse:hide` events; the trigger is in `event.detail.trigger`.
- **Accessibility Tip**: Declare `aria-expanded="false"` and `aria-controls` on the trigger. Aksara updates `aria-expanded` as the panel toggles.

## String Components

```ts
import { Collapse, CollapseTrigger } from "@abydahana/aksara-ui/components";

CollapseTrigger({ targetId: "details", children: "Show details", className: "btn btn-primary" });
Collapse({ id: "details", children: "<p>...</p>" });
```
