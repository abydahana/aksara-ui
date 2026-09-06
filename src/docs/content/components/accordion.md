# Accordion

Accordions display stacked drawers that expand and collapse upon click, allowing you to hide and manage complex content layers in space-saving layouts.

## Interactive Accordion Showcase

Aksara UI features **Auto-Collapse Sibling Panels** natively. When a drawer panel is clicked and expanded, all other sibling drawers inside the same accordion container automatically collapse:

::html
<div class="docs-preview py-6">
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
        Absolutely not. Aksara UI compiles all variations (breakpoints, themes, interactive states, and negative offsets) ahead of time into a single static file.
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
    <div id="accPanelTwo" class="accordion-panel" hidden>Absolutely not. Aksara UI...</div>
  </div>
</div>
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
<div class="docs-preview py-6">
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
        <th style="width: 35%;">Custom Event Key</th>
        <th style="width: 65%;">Description</th>
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
