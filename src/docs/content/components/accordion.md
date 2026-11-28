# Accordion

Accordions display stacked drawers that expand and collapse upon click, allowing you to hide and manage complex content layers in space-saving layouts.

## Interactive Accordion Showcase

Aksara UI features **Auto-Collapse Sibling Panels** natively. When a drawer panel is clicked and expanded, all other sibling drawers inside the same accordion container automatically collapse:

::html
<div class="docs-preview py-4">
  <div class="accordion">
    <!-- Item 1 -->
    <div class="accordion-item">
      <button class="accordion-button" data-accordion="#accPanelOne" aria-expanded="true" aria-controls="accPanelOne">
        <span>What is Aksara UI?</span>
        <span class="accordion-icon mdi mdi-chevron-down text-sm"></span>
      </button>
      <div id="accPanelOne" class="accordion-panel">
        Aksara UI is a next-generation static CSS and vanilla JavaScript UI framework built from the ground up to combine Bootstrap's readability with utility-first composition.
      </div>
    </div>

    <!-- Item 2 -->
    <div class="accordion-item">
      <button class="accordion-button" data-accordion="#accPanelTwo" aria-expanded="false" aria-controls="accPanelTwo">
        <span>Does it require a build compiler?</span>
        <span class="accordion-icon mdi mdi-chevron-down text-sm"></span>
      </button>
      <div id="accPanelTwo" class="accordion-panel" hidden>
        No. Components, utility scales and the common variants ship in a single static file, and the bundled runtime generates arbitrary and opacity classes in the browser on demand.
      </div>
    </div>

    <!-- Item 3 -->
    <div class="accordion-item">
      <button class="accordion-button" data-accordion="#accPanelThree" aria-expanded="false" aria-controls="accPanelThree">
        <span>What is the variant order rule?</span>
        <span class="accordion-icon mdi mdi-chevron-down text-sm"></span>
      </button>
      <div id="accPanelThree" class="accordion-panel" hidden>
        Aksara enforces a strict variant stacking order: theme -> breakpoint -> state -> utility (e.g. <code>dark:md:hover:border-primary</code>). Any violation gets rejected by the compiler.
      </div>
    </div>

  </div>
</div>
::end

```html
<div class="accordion">
  <!-- Item 1 -->
  <div class="accordion-item">
    <!-- Trigger button targets #accPanelOne -->
    <button class="accordion-button" data-accordion="#accPanelOne" aria-expanded="true">
      <span>What is Aksara UI?</span>
      <span class="accordion-icon mdi mdi-chevron-down"></span>
    </button>
    <!-- Collapsible drawer panel -->
    <div id="accPanelOne" class="accordion-panel">Aksara UI is a next-generation...</div>
  </div>

  <!-- Item 2 -->
  <div class="accordion-item">
    <button class="accordion-button" data-accordion="#accPanelTwo" aria-expanded="false">
      <span>Does it require a build compiler?</span>
      <span class="accordion-icon mdi mdi-chevron-down"></span>
    </button>
    <div id="accPanelTwo" class="accordion-panel" hidden>No. Aksara UI...</div>
  </div>
</div>
```

```js components
import { Accordion, AccordionItem } from "@abydahana/aksara-ui/components";

// Each item renders a header button, a chevron (`icon`) and a panel; only `expanded` items start open.
Accordion({
  children:
    AccordionItem({
      id: "accPanelOne",
      title: "What is Aksara UI?",
      body: "Aksara UI is a next-generation...",
      expanded: true
    }) +
    AccordionItem({
      id: "accPanelTwo",
      title: "Does it require a build compiler?",
      body: "No. Aksara UI..."
    })
});
```

---

## Technical Specifications

- **Auto-Collapse Behavior**: When expanding any target panel, the javascript engine scans the configured parent scope, collapses active panels (`hidden = true`), and resets active states (`aria-expanded="false"`).
- **`.accordion`**: Marks the parent container that wraps multiple items together and scopes event delegation listeners.
- **`.accordion-item`**: Wraps individual trigger elements and target collapsible panel blocks.
- **`.accordion-button`**: Styles trigger togglers with clean borders, logical flex headers, and accessibility states.
- **`.accordion-icon`**: Optional chevron indicator that rotates when its button has `aria-expanded="true"`.

---

## Shared Parent Across Columns

Use `parent` as a selector when multiple accordion columns should behave like one group. Expanding a panel in the right column collapses any active panel in the left column because both instances point to the same parent scope.

::html
<div class="docs-preview py-4">
  <div id="billingFaqGroup" class="row gap-5">
    <div class="col-12 md:col-6">
      <div class="accordion" data-accordion-parent="#billingFaqGroup">
        <div class="accordion-item">
          <button class="accordion-button" data-accordion="#billingPlanPanel" aria-expanded="true" aria-controls="billingPlanPanel">
            <span>Plan Limits</span>
            <span class="accordion-icon mdi mdi-chevron-down text-sm"></span>
          </button>
          <div id="billingPlanPanel" class="accordion-panel">
            Each plan includes fixed seats, project quotas, and monthly export limits.
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-button" data-accordion="#billingInvoicePanel" aria-expanded="false" aria-controls="billingInvoicePanel">
            <span>Invoice Access</span>
            <span class="accordion-icon mdi mdi-chevron-down text-sm"></span>
          </button>
          <div id="billingInvoicePanel" class="accordion-panel" hidden>
            Admins can download invoices from workspace billing settings.
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="accordion" data-accordion-parent="#billingFaqGroup">
        <div class="accordion-item">
          <button class="accordion-button" data-accordion="#billingPaymentPanel" aria-expanded="false" aria-controls="billingPaymentPanel">
            <span>Payment Method</span>
            <span class="accordion-icon mdi mdi-chevron-down text-sm"></span>
          </button>
          <div id="billingPaymentPanel" class="accordion-panel" hidden>
            Add a backup card to keep renewals active when the primary card fails.
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-button" data-accordion="#billingCancelPanel" aria-expanded="false" aria-controls="billingCancelPanel">
            <span>Cancel Subscription</span>
            <span class="accordion-icon mdi mdi-chevron-down text-sm"></span>
          </button>
          <div id="billingCancelPanel" class="accordion-panel" hidden>
            Cancellations keep the workspace active until the end of the current billing period.
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
::end

```html
<div id="billingFaqGroup" class="row gap-5">
  <div class="col-12 md:col-6">
    <div class="accordion" data-accordion-parent="#billingFaqGroup">
      <button class="accordion-button" data-accordion="#leftPanel" aria-expanded="true">Left column panel</button>
      <div id="leftPanel" class="accordion-panel">...</div>
    </div>
  </div>

  <div class="col-12 md:col-6">
    <div class="accordion" data-accordion-parent="#billingFaqGroup">
      <button class="accordion-button" data-accordion="#rightPanel" aria-expanded="false">Right column panel</button>
      <div id="rightPanel" class="accordion-panel" hidden>...</div>
    </div>
  </div>
</div>

<script>
  Aksara.accordion("#billingFaqGroup .accordion", {
    parent: "#billingFaqGroup"
  });
</script>
```

```js components
import { Accordion, AccordionItem } from "@abydahana/aksara-ui/components";

const column = (children) =>
  `<div class="col-12 md:col-6">${Accordion({
    attributes: { "data-accordion-parent": "#billingFaqGroup" },
    children
  })}</div>`;

`<div id="billingFaqGroup" class="row gap-5">
  ${column(AccordionItem({ id: "leftPanel", title: "Left column panel", body: "...", expanded: true }))}
  ${column(AccordionItem({ id: "rightPanel", title: "Right column panel", body: "..." }))}
</div>`;
```

---

## HTML Data API Reference

Aksara's engine binds event listeners to manage panel state automatically:

- Add `data-accordion="#panelId"` to your trigger buttons.
- Add `data-accordion-parent="#parentId"` on an accordion wrapper when several wrappers need one shared collapse group.
- Target panels must use matching `id` attributes.

---

## Programmatic JavaScript API

Interact with accordions programmatically using standard constructors.

### Initialization

```js
// Initialize accordion listeners inside a parent container
const accordion = Aksara.accordion(".accordion", {
  parent: true,
  collapsible: true
});
```

`parent` accepts:

- `true`: collapse siblings inside the same accordion wrapper.
- `false`: allow multiple panels to stay open.
- `'#selector'` or an `Element`: collapse all matching accordion triggers inside that shared parent scope.

---

## Custom Lifecycle Events

Aksara dispatches bubbled events to trigger custom integrations:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th class="w-[35%]">Custom Event Key</th>
        <th class="w-[65%]">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>aksara:accordion:toggle</code></td>
        <td>Dispatched when an accordion button is triggered. Detail contains: <code>{ button, panel, expanded }</code>.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

### Listening Example

```js
const container = document.querySelector(".accordion");

container.addEventListener("aksara:accordion:toggle", (event) => {
  console.log("Accordion panel toggled!", event.detail.panel);
  console.log("Is now open:", event.detail.expanded);
});
```

---

## Flush Accordion

Add `accordion-flush` to remove the outer borders, rounded corners and background so the accordion sits edge-to-edge inside a parent card or list. Items that are not expanded render collapsed (`hidden` panel, `aria-expanded="false"`).

```html
<div class="accordion accordion-flush">...</div>
```

```js components
import { Accordion } from "@abydahana/aksara-ui/components";

Accordion({ flush: true, children: "..." });
```

The `Accordion` string component exposes this as the `flush` prop.

---

## Separated Accordion

`accordion-separated` turns each item into its own rounded card with a gap between them. It suits FAQ pages where the items are read one at a time.

::html
<div class="docs-preview py-4">
  <div class="accordion accordion-separated">
    <div class="accordion-item">
      <button class="accordion-button" data-accordion="#accSepOne" aria-expanded="true" aria-controls="accSepOne">
        <span>Can I change plans later?</span>
        <span class="accordion-icon mdi mdi-chevron-down text-sm"></span>
      </button>
      <div id="accSepOne" class="accordion-panel">Yes. Upgrades apply immediately; downgrades take effect at the end of the billing period.</div>
    </div>
    <div class="accordion-item">
      <button class="accordion-button" data-accordion="#accSepTwo" aria-expanded="false" aria-controls="accSepTwo">
        <span>Do you offer refunds?</span>
        <span class="accordion-icon mdi mdi-chevron-down text-sm"></span>
      </button>
      <div id="accSepTwo" class="accordion-panel" hidden>Annual plans can be refunded within 14 days of purchase.</div>
    </div>
    <div class="accordion-item">
      <button class="accordion-button" data-accordion="#accSepThree" aria-expanded="false" aria-controls="accSepThree">
        <span>Is my data encrypted?</span>
        <span class="accordion-icon mdi mdi-chevron-down text-sm"></span>
      </button>
      <div id="accSepThree" class="accordion-panel" hidden>Data is encrypted in transit (TLS 1.3) and at rest (AES-256).</div>
    </div>
  </div>
</div>
::end

```html
<div class="accordion accordion-separated">
  <div class="accordion-item">...</div>
  <div class="accordion-item">...</div>
</div>
```

```js components
import { Accordion, AccordionItem } from "@abydahana/aksara-ui/components";

Accordion({
  className: "accordion-separated",
  children:
    AccordionItem({ id: "accSepOne", title: "Can I change plans later?", body: "...", expanded: true }) +
    AccordionItem({ id: "accSepTwo", title: "Do you offer refunds?", body: "..." })
});
```
