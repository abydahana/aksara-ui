# Collapse

Show and hide any block of content with a declarative data attribute and no custom JavaScript. A `.collapse` panel is hidden until a trigger pointing at it is clicked; Aksara then adds `.collapse-show`, keeps `aria-expanded` in sync on every trigger, and dispatches show and hide events you can hook into.

---

## Basic Collapse

Give the panel an `id` and the `.collapse` class, then point a button at it with `data-collapse="#id"`. Each click toggles the panel.

::html
<div class="docs-preview">
  <div>
    <button class="btn btn-primary" type="button" data-collapse="#demoCollapse" aria-expanded="false" aria-controls="demoCollapse">
      Toggle content
    </button>
  </div>

  <div id="demoCollapse" class="collapse p-5 bg-subtle border border-subtle rounded-[12px]">
    <h4 class="mt-0 mb-2 fw-bold hstack gap-2"><span class="mdi mdi-information-outline text-primary"></span> Collapsible card area</h4>
    <div class="text-subtle text-sm mb-0 mt-0 leading-[22px]">
      This block is hidden with <code>display: none</code> by the <code>.collapse</code> class and switches to <code>display: block</code> when the <code>.collapse-show</code> modifier is added.
    </div>
  </div>
</div>
::end

```html
<!-- Trigger -->
<button
  class="btn btn-primary"
  type="button"
  data-collapse="#demoCollapse"
  aria-expanded="false"
  aria-controls="demoCollapse"
>
  Toggle content
</button>

<!-- Panel -->
<div id="demoCollapse" class="collapse p-5 bg-subtle border border-subtle rounded-[12px]">
  <h4 class="mt-0 mb-2 fw-bold">Collapsible card area</h4>
  <div class="text-subtle text-sm mb-0 leading-[22px]">...</div>
</div>
```

```js components
import { Collapse, CollapseTrigger } from "@abydahana/aksara-ui/components";

CollapseTrigger({ targetId: "demoCollapse", className: "btn btn-primary", children: "Toggle content" });

Collapse({
  id: "demoCollapse",
  className: "p-5 bg-subtle border border-subtle rounded-[12px]",
  children:
    '<h4 class="mt-0 mb-2 fw-bold">Collapsible card area</h4>' +
    '<div class="text-subtle text-sm mb-0 leading-[22px]">...</div>'
});
```

---

## Open By Default

Add `.collapse-show` in the markup to render a panel open, and set `aria-expanded="true"` on its trigger to match.

::html
<div class="docs-preview">
  <div>
    <button class="btn btn-soft-primary" type="button" data-collapse="#demoCollapseOpen" aria-expanded="true" aria-controls="demoCollapseOpen">
      <span class="mdi mdi-filter-variant"></span> Filters
    </button>
  </div>
  <div id="demoCollapseOpen" class="collapse collapse-show">
    <div class="card card-body">
      <div class="grid-3 gap-3">
        <div>
          <label class="form-label" for="demoFilterStatus">Status</label>
          <select class="form-select" id="demoFilterStatus">
            <option>Any status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Refunded</option>
          </select>
        </div>
        <div>
          <label class="form-label" for="demoFilterFrom">From</label>
          <input class="form-control" type="date" id="demoFilterFrom" value="2026-11-01">
        </div>
        <div>
          <label class="form-label" for="demoFilterTo">To</label>
          <input class="form-control" type="date" id="demoFilterTo" value="2026-11-28">
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<button
  class="btn btn-soft-primary"
  type="button"
  data-collapse="#filters"
  aria-expanded="true"
  aria-controls="filters"
>
  Filters
</button>

<div id="filters" class="collapse collapse-show">
  <div class="card card-body">...</div>
</div>
```

```js components
import { Card, Collapse, CollapseTrigger } from "@abydahana/aksara-ui/components";

CollapseTrigger({ targetId: "filters", expanded: true, className: "btn btn-soft-primary", children: "Filters" });

Collapse({ id: "filters", show: true, children: Card({ className: "card-body", children: "..." }) });
```

---

## Trigger Types

Any element can be a trigger: buttons, link buttons, text links, or icon buttons. Links use `href="#id"` as a fallback; Aksara prevents the jump. `data-collapse-target` is an alias of `data-collapse`.

::html
<div class="docs-preview">
  <div class="docs-row items-center">
    <button class="btn btn-outline-primary" type="button" data-collapse="#demoCollapseTriggers" aria-expanded="false" aria-controls="demoCollapseTriggers">Button</button>
    <a class="btn btn-ghost" href="#demoCollapseTriggers" data-collapse="#demoCollapseTriggers" aria-expanded="false" aria-controls="demoCollapseTriggers">Link button</a>
    <a class="text-primary fw-semibold text-sm" href="#demoCollapseTriggers" data-collapse-target="#demoCollapseTriggers" aria-expanded="false" aria-controls="demoCollapseTriggers">Text link</a>
    <button class="btn btn-plain btn-icon" type="button" data-collapse="#demoCollapseTriggers" aria-expanded="false" aria-controls="demoCollapseTriggers" aria-label="Toggle details"><span class="mdi mdi-chevron-down"></span></button>
  </div>
  <div id="demoCollapseTriggers" class="collapse">
    <div class="alert alert-info m-0">
      <span class="alert-icon mdi mdi-link-variant"></span>
      <div class="alert-content">Four triggers control this one panel. Each of them reflects the current state in <code>aria-expanded</code>.</div>
    </div>
  </div>
</div>
::end

```html
<button
  class="btn btn-outline-primary"
  type="button"
  data-collapse="#details"
  aria-expanded="false"
  aria-controls="details"
>
  Button
</button>

<a href="#details" data-collapse="#details" aria-expanded="false" aria-controls="details">Text link</a>

<a href="#details" data-collapse-target="#details" aria-expanded="false" aria-controls="details">Alias attribute</a>

<div id="details" class="collapse">...</div>
```

```js components
import { Collapse, CollapseTrigger } from "@abydahana/aksara-ui/components";

// CollapseTrigger writes both data-collapse and the data-collapse-target alias.
CollapseTrigger({ targetId: "details", className: "btn btn-outline-primary", children: "Button" });

CollapseTrigger({ targetId: "details", as: "a", children: "Text link" });

Collapse({ id: "details", children: "..." });
```

---

## Show More

Keep a short preview visible and put the rest of the content in a collapse below it.

::html
<div class="docs-preview">
  <article class="card card-body max-w-[36rem]">
    <div class="hstack gap-3 items-center mb-3">
      <span class="avatar avatar-md rounded-full avatar-success" aria-hidden="true">RG</span>
      <div>
        <div class="m-0 fw-semibold">Rachel Green</div>
        <div class="m-0 text-xs text-subtle">Verified buyer · 2 days ago</div>
      </div>
      <span class="badge badge-soft-success ms-auto"><span class="mdi mdi-star"></span> 5.0</span>
    </div>
    <div class="m-0 text-sm">
      The earbuds fit comfortably for hours and the noise cancelling is better than my previous pair. Pairing with two devices at once works without any fiddling.
    </div>
    <div id="demoReviewMore" class="collapse">
      <div class="mt-3 mb-0 text-sm">
        Battery life is close to the advertised eight hours with ANC on. The case charges wirelessly, and the app lets you remap the touch controls. My only complaint is that the ear tips run a little small, so try the large ones if you are between sizes.
      </div>
      <div class="hstack gap-2 mt-3">
        <div class="rounded-md w-[4rem] h-[4rem] [background:linear-gradient(150deg,#c9d6df,#2f4858)]" role="img" aria-label="Earbuds in the open charging case"></div>
        <div class="rounded-md w-[4rem] h-[4rem] [background:linear-gradient(150deg,#e8dccb,#8a6f55)]" role="img" aria-label="Earbuds next to the large ear tips"></div>
      </div>
    </div>
    <div class="mt-3">
      <button class="btn btn-ghost btn-sm" type="button" data-collapse="#demoReviewMore" aria-expanded="false" aria-controls="demoReviewMore">
        Show full review <span class="mdi mdi-chevron-down"></span>
      </button>
    </div>
  </article>
</div>
::end

```html
<p>The earbuds fit comfortably for hours...</p>

<div id="reviewMore" class="collapse">
  <p>Battery life is close to the advertised eight hours...</p>
</div>

<button
  class="btn btn-ghost btn-sm"
  type="button"
  data-collapse="#reviewMore"
  aria-expanded="false"
  aria-controls="reviewMore"
>
  Show full review <span class="mdi mdi-chevron-down"></span>
</button>
```

```js components
import { Collapse, CollapseTrigger } from "@abydahana/aksara-ui/components";

`<p>The earbuds fit comfortably for hours...</p>`;

Collapse({ id: "reviewMore", children: "<p>Battery life is close to the advertised eight hours...</p>" });

CollapseTrigger({
  targetId: "reviewMore",
  className: "btn btn-ghost btn-sm",
  children: 'Show full review <span class="mdi mdi-chevron-down"></span>'
});
```

Swap the label or rotate the chevron by listening for the collapse events (see JavaScript below).

---

## FAQ

Each question toggles its own answer, so several can be open at the same time. To keep only one open, give the panels the same `data-collapse-parent="#group"` (see [Only One Open](#/components/collapse)) or use the Accordion component.

::html
<div class="docs-preview">
  <div class="list-group max-w-[40rem]">
    <div class="list-group-item p-0">
      <button class="btn btn-ghost w-full justify-between rounded-0 px-4 py-3" type="button" data-collapse="#demoFaqRefund" aria-expanded="false" aria-controls="demoFaqRefund">
        <span class="fw-semibold">Can I get a refund?</span>
        <span class="mdi mdi-plus text-subtle"></span>
      </button>
      <div id="demoFaqRefund" class="collapse px-4 pb-4">
        <div class="m-0 text-sm text-subtle">Yes. Every plan has a 30-day money-back guarantee. Cancel from Billing and the refund reaches your card within 5–10 business days.</div>
      </div>
    </div>
    <div class="list-group-item p-0">
      <button class="btn btn-ghost w-full justify-between rounded-0 px-4 py-3" type="button" data-collapse="#demoFaqSeats" aria-expanded="false" aria-controls="demoFaqSeats">
        <span class="fw-semibold">How are seats counted?</span>
        <span class="mdi mdi-plus text-subtle"></span>
      </button>
      <div id="demoFaqSeats" class="collapse px-4 pb-4">
        <div class="m-0 text-sm text-subtle">A seat is any member who signed in during the billing period. Guests with view-only access are free.</div>
      </div>
    </div>
    <div class="list-group-item p-0">
      <button class="btn btn-ghost w-full justify-between rounded-0 px-4 py-3" type="button" data-collapse="#demoFaqExport" aria-expanded="false" aria-controls="demoFaqExport">
        <span class="fw-semibold">Can I export my data?</span>
        <span class="mdi mdi-plus text-subtle"></span>
      </button>
      <div id="demoFaqExport" class="collapse px-4 pb-4">
        <div class="m-0 text-sm text-subtle">Anytime. Go to Settings → Data and download a ZIP with CSV files for every table, or connect the REST API for scheduled exports.</div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="list-group">
  <div class="list-group-item p-0">
    <button
      class="btn btn-ghost w-full justify-between rounded-0 px-4 py-3"
      type="button"
      data-collapse="#faqRefund"
      aria-expanded="false"
      aria-controls="faqRefund"
    >
      <span class="fw-semibold">Can I get a refund?</span>
      <span class="mdi mdi-plus text-subtle"></span>
    </button>
    <div id="faqRefund" class="collapse px-4 pb-4">
      <div class="m-0 text-sm text-subtle">Yes. Every plan has a 30-day money-back guarantee.</div>
    </div>
  </div>
</div>
```

```js components
import { Collapse, CollapseTrigger, ListGroup, ListGroupItem } from "@abydahana/aksara-ui/components";

ListGroup({
  children: ListGroupItem({
    className: "p-0",
    content:
      CollapseTrigger({
        targetId: "faqRefund",
        className: "btn btn-ghost w-full justify-between rounded-0 px-4 py-3",
        children: '<span class="fw-semibold">Can I get a refund?</span><span class="mdi mdi-plus text-subtle"></span>'
      }) +
      Collapse({
        id: "faqRefund",
        className: "px-4 pb-4",
        children: '<div class="m-0 text-sm text-subtle">Yes. Every plan has a 30-day money-back guarantee.</div>'
      })
  })
});
```

---

## Only One Open

Panels that share `data-collapse-parent` behave like an accordion: opening one closes the open sibling. Unlike the Accordion component, the markup stays free-form.

::html
<div class="docs-preview">
  <div id="demoShipping" class="list-group max-w-[40rem]">
    <div class="list-group-item p-0">
      <button class="btn btn-ghost w-full justify-between rounded-0 px-4 py-3" type="button" data-collapse="#demoShipStd" aria-expanded="true" aria-controls="demoShipStd">
        <span class="fw-semibold">Standard delivery</span><span class="text-sm text-subtle">2–4 days</span>
      </button>
      <div id="demoShipStd" class="collapse collapse-show px-4 pb-4" data-collapse-parent="#demoShipping">
        <div class="text-sm text-subtle">Free on orders above $25.00. Tracked by Royal Mail or UPS.</div>
      </div>
    </div>
    <div class="list-group-item p-0">
      <button class="btn btn-ghost w-full justify-between rounded-0 px-4 py-3" type="button" data-collapse="#demoShipExp" aria-expanded="false" aria-controls="demoShipExp">
        <span class="fw-semibold">Express</span><span class="text-sm text-subtle">Next day</span>
      </button>
      <div id="demoShipExp" class="collapse px-4 pb-4" data-collapse-parent="#demoShipping">
        <div class="text-sm text-subtle">Order before 15:00 for next-day delivery in Greater London, Manchester and Leeds.</div>
      </div>
    </div>
    <div class="list-group-item p-0">
      <button class="btn btn-ghost w-full justify-between rounded-0 px-4 py-3" type="button" data-collapse="#demoShipPick" aria-expanded="false" aria-controls="demoShipPick">
        <span class="fw-semibold">Store pickup</span><span class="text-sm text-subtle">Today</span>
      </button>
      <div id="demoShipPick" class="collapse px-4 pb-4" data-collapse-parent="#demoShipping">
        <div class="text-sm text-subtle">Ready within two hours at any of our 14 stores. Bring your order number.</div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div id="shipping" class="list-group">
  <div class="list-group-item p-0">
    <button class="btn btn-ghost w-full justify-between" data-collapse="#shipStd" aria-expanded="true">Standard</button>
    <div id="shipStd" class="collapse collapse-show" data-collapse-parent="#shipping">...</div>
  </div>
  <div class="list-group-item p-0">
    <button class="btn btn-ghost w-full justify-between" data-collapse="#shipExp" aria-expanded="false">Express</button>
    <div id="shipExp" class="collapse" data-collapse-parent="#shipping">...</div>
  </div>
</div>
```

```js components
import { Collapse, CollapseTrigger } from "@abydahana/aksara-ui/components";

CollapseTrigger({ targetId: "shipExp", className: "btn btn-ghost w-full justify-between", children: "Express" }) +
  Collapse({ id: "shipExp", parent: "#shipping", children: "..." });
```

---

## Card Details

A collapse in a card footer reveals secondary information without leaving the list.

::html
<div class="docs-preview">
  <div class="card max-w-[30rem]">
    <div class="card-body hstack justify-between items-center">
      <div>
        <div class="m-0 fw-semibold">Invoice #2041</div>
        <div class="m-0 text-sm text-subtle">Due 5 Dec 2026</div>
      </div>
      <div class="text-end">
        <div class="m-0 text-lg fw-bold">$1,240.00</div>
        <span class="badge badge-soft-warning">Pending</span>
      </div>
    </div>
    <div id="demoInvoiceLines" class="collapse border-top border-subtle">
      <div class="card-body vstack gap-2 text-sm">
        <div class="hstack justify-between"><span class="text-subtle">Pro plan · 12 seats</span><span>$1,080.00</span></div>
        <div class="hstack justify-between"><span class="text-subtle">Extra storage · 200 GB</span><span>$60.00</span></div>
        <div class="hstack justify-between"><span class="text-subtle">Tax</span><span>$100.00</span></div>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn btn-ghost btn-sm w-full" type="button" data-collapse="#demoInvoiceLines" aria-expanded="false" aria-controls="demoInvoiceLines">
        <span class="mdi mdi-format-list-bulleted"></span> Line items
      </button>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-body">...</div>
  <div id="invoiceLines" class="collapse border-top border-subtle">
    <div class="card-body">...</div>
  </div>
  <div class="card-footer">
    <button
      class="btn btn-ghost btn-sm w-full"
      type="button"
      data-collapse="#invoiceLines"
      aria-expanded="false"
      aria-controls="invoiceLines"
    >
      Line items
    </button>
  </div>
</div>
```

```js components
import { Card, CardBody, CardFooter, Collapse, CollapseTrigger } from "@abydahana/aksara-ui/components";

Card({
  children: [
    CardBody({ children: "..." }),
    Collapse({ id: "invoiceLines", className: "border-top border-subtle", children: CardBody({ children: "..." }) }),
    CardFooter({
      children: CollapseTrigger({
        targetId: "invoiceLines",
        className: "btn btn-ghost btn-sm w-full",
        children: "Line items"
      })
    })
  ].join("")
});
```

---

## JavaScript

Collapse is driven entirely by the data API. `Aksara.init()` installs one delegated click listener on `document`, so triggers also work for markup rendered later (SPA views, string components, AJAX).

### Data attributes

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Attribute</th><th>On</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-collapse="#id"</code></td><td>Trigger</td><td>CSS selector of the panel to toggle.</td></tr>
      <tr><td><code>data-collapse-target="#id"</code></td><td>Trigger</td><td>Alias of <code>data-collapse</code>; takes precedence when both are set.</td></tr>
      <tr><td><code>aria-expanded</code></td><td>Trigger</td><td>Set the initial value yourself; Aksara updates it on the clicked trigger and every other trigger that targets the same <code>#id</code>.</td></tr>
      <tr><td><code>aria-controls</code></td><td>Trigger</td><td>The panel's <code>id</code>, for assistive technology. Not read by Aksara.</td></tr>
      <tr><td><code>.collapse-show</code></td><td>Panel</td><td>Current open state. Add it in the markup to start open.</td></tr>
      <tr><td><code>data-collapse-parent="#group"</code></td><td>Panel</td><td>Panels with the same value form a group: opening one closes the others.</td></tr>
      <tr><td><code>data-collapse-duration="300"</code></td><td>Panel</td><td>Height (or width, with <code>.collapse-horizontal</code>) transition in ms; <code>0</code> switches instantly. Reduced-motion users always get the instant switch.</td></tr>
      <tr><td><code>.collapsed</code></td><td>Trigger</td><td>Added to triggers while their panel is closed (handy for rotating chevrons).</td></tr>
    </tbody>
  </table>
</div>
::end

### Events

Both events are dispatched on the panel and bubble, so you can listen on the panel or on `document`.

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Event</th><th>Fired when</th><th><code>event.detail</code></th></tr>
    </thead>
    <tbody>
      <tr><td><code>aksara:collapse:show</code></td><td>The panel starts opening.</td><td><code>{ trigger }</code>, the clicked element (<code>null</code> from code).</td></tr>
      <tr><td><code>aksara:collapse:shown</code></td><td>The opening transition has finished.</td><td><code>{ trigger }</code></td></tr>
      <tr><td><code>aksara:collapse:hide</code></td><td>The panel starts closing.</td><td><code>{ trigger }</code></td></tr>
      <tr><td><code>aksara:collapse:hidden</code></td><td>The closing transition has finished and the panel is hidden.</td><td><code>{ trigger }</code></td></tr>
    </tbody>
  </table>
</div>
::end

```js
const panel = document.querySelector("#reviewMore");

panel.addEventListener("aksara:collapse:show", (event) => {
  event.detail.trigger.firstChild.textContent = "Show less ";
});

panel.addEventListener("aksara:collapse:hide", (event) => {
  event.detail.trigger.firstChild.textContent = "Show full review ";
});

// Or track every panel on the page
document.addEventListener("aksara:collapse:show", (event) => {
  analytics.track("panel_opened", { id: event.target.id });
});
```

### Toggling from code

`Aksara.collapse()` returns a handle with `show()`, `hide()`, `toggle()` and `isOpen`. It animates, keeps every trigger's `aria-expanded` in sync, respects `data-collapse-parent` and fires the events:

```js
const filters = Aksara.collapse("#filters");

filters.show();
filters.toggle();
if (filters.isOpen) filters.hide();
```

---

## String Components

```ts
import { Collapse, CollapseTrigger } from "@abydahana/aksara-ui/components";

CollapseTrigger({ targetId: "details", children: "Show details", className: "btn btn-primary" });
// <button class="btn btn-primary" type="button" data-collapse="#details" data-collapse-target="#details"
//         aria-expanded="false" aria-controls="details">Show details</button>

Collapse({ id: "details", children: "<p>...</p>" });
// <div class="collapse" id="details"><p>...</p></div>
```

### `Collapse`

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>id</code></td><td><code>string</code></td><td>—</td><td>Panel id that triggers point at. Required.</td></tr>
      <tr><td><code>children</code></td><td><code>string</code></td><td><code>""</code></td><td>Panel HTML.</td></tr>
      <tr><td><code>show</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Renders the panel open (<code>.collapse-show</code>).</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes.</td></tr>
    </tbody>
  </table>
</div>
::end

### `CollapseTrigger`

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>targetId</code></td><td><code>string</code></td><td>—</td><td>Panel id, with or without <code>#</code>. Required.</td></tr>
      <tr><td><code>children</code></td><td><code>string</code></td><td>—</td><td>Trigger HTML. Required.</td></tr>
      <tr><td><code>as</code></td><td><code>"button"</code> | <code>"a"</code></td><td><code>"button"</code></td><td>Element to render. Links get <code>href="#id"</code>, buttons <code>type="button"</code>.</td></tr>
      <tr><td><code>expanded</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Initial <code>aria-expanded</code>; pair it with <code>show: true</code> on the panel.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Classes for the trigger, for example <code>"btn btn-primary"</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Class</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.collapse</code></td><td><code>display: none</code>.</td></tr>
      <tr><td><code>.collapse-show</code></td><td><code>display: block</code>; added and removed by the data API.</td></tr>
    </tbody>
  </table>
</div>
::end

Panels open and close instantly. For animated, mutually exclusive sections use the Accordion component.
