# Description List

Description lists show key/value details: order summaries, profile fields, plan specs and settings. They are built on a real `<dl>` with each term/detail pair wrapped in a `<div>`, so screen readers announce the pairs and the layout stays a simple grid. Pick one of three layouts: stacked (term above detail), horizontal (side by side from `576px` up) or an auto-fitting grid, and add hairlines with `.desc-list-divided`.

::html
<div class="docs-preview">
  <dl class="desc-list desc-list-horizontal desc-list-divided max-w-[560px]">
    <div><dt>Customer</dt><dd>Maya Chen</dd></div>
    <div><dt>Email</dt><dd>maya.chen@example.com</dd></div>
    <div><dt>Plan</dt><dd>Business · $45 / month</dd></div>
    <div><dt>Status</dt><dd><span class="badge badge-soft-success">Active</span></dd></div>
  </dl>
</div>
::end

```html
<dl class="desc-list desc-list-horizontal desc-list-divided">
  <div>
    <dt>Customer</dt>
    <dd>Maya Chen</dd>
  </div>
  <div>
    <dt>Email</dt>
    <dd>maya.chen@example.com</dd>
  </div>
  <div>
    <dt>Plan</dt>
    <dd>Business · $45 / month</dd>
  </div>
  <div>
    <dt>Status</dt>
    <dd><span class="badge badge-soft-success">Active</span></dd>
  </div>
</dl>
```

```js components
import { DescriptionList } from "@abydahana/aksara-ui/components";

DescriptionList({
  layout: "horizontal",
  divided: true,
  items: [
    { term: "Customer", detail: "Maya Chen" },
    { term: "Email", detail: "maya.chen@example.com" },
    { term: "Plan", detail: "Business · $45 / month" },
    { term: "Status", html: '<span class="badge badge-soft-success">Active</span>' }
  ]
});
```

---

## Layouts

The default stacked layout puts each term above its detail with `.875rem` between pairs; it works at any width. `.desc-list-horizontal` puts the term in a start column from `576px` up and falls back to stacked on phones. `.desc-list-grid` flows the pairs into as many columns as fit (each at least `10rem`).

::html
<div class="docs-preview">
  <div class="row gap-4">
    <div class="col-12 md:col-4">
      <h4 class="mt-0 mb-3 fw-bold text-sm">Stacked</h4>
      <dl class="desc-list">
        <div><dt>Warehouse</dt><dd>Leeds DC 2</dd></div>
        <div><dt>Stock on hand</dt><dd>1,240 units</dd></div>
        <div><dt>Reorder point</dt><dd>300 units</dd></div>
      </dl>
    </div>
    <div class="col-12 md:col-8">
      <h4 class="mt-0 mb-3 fw-bold text-sm">Horizontal</h4>
      <dl class="desc-list desc-list-horizontal">
        <div><dt>Warehouse</dt><dd>Leeds DC 2</dd></div>
        <div><dt>Stock on hand</dt><dd>1,240 units</dd></div>
        <div><dt>Reorder point</dt><dd>300 units</dd></div>
      </dl>
    </div>
    <div class="col-12">
      <h4 class="mt-0 mb-3 fw-bold text-sm">Grid</h4>
      <dl class="desc-list desc-list-grid">
        <div><dt>Warehouse</dt><dd>Leeds DC 2</dd></div>
        <div><dt>Stock on hand</dt><dd>1,240 units</dd></div>
        <div><dt>Reorder point</dt><dd>300 units</dd></div>
        <div><dt>Lead time</dt><dd>5 days</dd></div>
      </dl>
    </div>
  </div>
</div>
::end

```html
<dl class="desc-list">...</dl>
<dl class="desc-list desc-list-horizontal">...</dl>
<dl class="desc-list desc-list-grid">...</dl>
```

```js components
import { DescriptionList } from "@abydahana/aksara-ui/components";

const items = [
  { term: "Warehouse", detail: "Leeds DC 2" },
  { term: "Stock on hand", detail: "1,240 units" },
  { term: "Reorder point", detail: "300 units" }
];

DescriptionList({ items }); // stacked
DescriptionList({ items, layout: "horizontal" });
DescriptionList({ items, layout: "grid" });
```

Terms use `.8125rem` medium subtle text and details `.9375rem` body text. Long details, such as URLs or IDs, wrap anywhere instead of overflowing.

---

## Order Details

A horizontal, divided list inside a card is the classic order summary. Put the total in a stronger style so it stands out from the line items.

::html
<div class="docs-preview">
  <div class="card max-w-[560px]">
    <div class="card-header hstack justify-between gap-3">
      <span class="fw-semibold">Order #INV-2048</span>
      <span class="badge badge-soft-warning">Awaiting shipment</span>
    </div>
    <div class="card-body">
      <dl class="desc-list desc-list-horizontal desc-list-divided">
        <div><dt>Placed on</dt><dd>28 November 2026, 16:42</dd></div>
        <div><dt>Customer</dt><dd>Alex Morgan · <a href="#/components/description-list">alex.morgan@example.com</a></dd></div>
        <div><dt>Ship to</dt><dd>221B Baker Street, London NW1 6XE, United Kingdom</dd></div>
        <div><dt>Courier</dt><dd>Royal Mail Tracked 48 · estimated 2–3 days</dd></div>
        <div><dt>Payment</dt><dd><span class="mdi mdi-credit-card-outline"></span> Visa ···· 4242 · paid</dd></div>
        <div><dt>Subtotal</dt><dd>$1,215.00</dd></div>
        <div><dt>Shipping</dt><dd>$35.00</dd></div>
        <div><dt>Total</dt><dd class="fw-bold">$1,250.00</dd></div>
      </dl>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-header hstack justify-between gap-3">
    <span class="fw-semibold">Order #INV-2048</span>
    <span class="badge badge-soft-warning">Awaiting shipment</span>
  </div>
  <div class="card-body">
    <dl class="desc-list desc-list-horizontal desc-list-divided">
      <div>
        <dt>Placed on</dt>
        <dd>28 November 2026, 16:42</dd>
      </div>
      <div>
        <dt>Ship to</dt>
        <dd>221B Baker Street, London NW1 6XE, United Kingdom</dd>
      </div>
      <div>
        <dt>Total</dt>
        <dd class="fw-bold">$1,250.00</dd>
      </div>
    </dl>
  </div>
</div>
```

```js components
import { DescriptionList } from "@abydahana/aksara-ui/components";

DescriptionList({
  layout: "horizontal",
  divided: true,
  items: [
    { term: "Placed on", detail: "28 November 2026, 16:42" },
    { term: "Ship to", detail: "221B Baker Street, London NW1 6XE, United Kingdom" },
    { term: "Total", html: '<span class="fw-bold">$1,250.00</span>' }
  ]
});
```

---

## User Profile

The stacked layout suits narrow side panels. Here it sits under a profile header, and a grid list shows the short facts in two columns.

::html
<div class="docs-preview">
  <div class="card max-w-[380px]">
    <div class="card-body vstack gap-4">
      <div class="hstack gap-3">
        <span class="avatar avatar-lg avatar-primary rounded-full">MC</span>
        <div class="min-w-0">
          <div class="fw-semibold">Maya Chen</div>
          <div class="text-sm text-subtle">Product designer</div>
        </div>
      </div>
      <dl class="desc-list desc-list-grid">
        <div><dt>Team</dt><dd>Checkout</dd></div>
        <div><dt>Location</dt><dd>London</dd></div>
        <div><dt>Local time</dt><dd>4:42 PM GMT</dd></div>
        <div><dt>Joined</dt><dd>March 2023</dd></div>
      </dl>
      <dl class="desc-list">
        <div><dt>Email</dt><dd><a href="#/components/description-list">maya.chen@example.com</a></dd></div>
        <div><dt>Phone</dt><dd>+44 20 7946 0958</dd></div>
        <div><dt>About</dt><dd>Designs payment flows for small merchants. Ask me about card payments, invoices and accessible forms.</dd></div>
      </dl>
    </div>
  </div>
</div>
::end

```html
<dl class="desc-list desc-list-grid">
  <div>
    <dt>Team</dt>
    <dd>Checkout</dd>
  </div>
  <div>
    <dt>Location</dt>
    <dd>London</dd>
  </div>
  <div>
    <dt>Local time</dt>
    <dd>4:42 PM GMT</dd>
  </div>
  <div>
    <dt>Joined</dt>
    <dd>March 2023</dd>
  </div>
</dl>

<dl class="desc-list">
  <div>
    <dt>Email</dt>
    <dd><a href="mailto:maya.chen@example.com">maya.chen@example.com</a></dd>
  </div>
  <div>
    <dt>Phone</dt>
    <dd>+44 20 7946 0958</dd>
  </div>
</dl>
```

```js components
import { DescriptionList } from "@abydahana/aksara-ui/components";

DescriptionList({
  layout: "grid",
  items: [
    { term: "Team", detail: "Checkout" },
    { term: "Location", detail: "London" },
    { term: "Local time", detail: "4:42 PM GMT" },
    { term: "Joined", detail: "March 2023" }
  ]
});

DescriptionList({
  items: [
    { term: "Email", html: '<a href="mailto:maya.chen@example.com">maya.chen@example.com</a>' },
    { term: "Phone", detail: "+44 20 7946 0958" }
  ]
});
```

---

## Rich Values

Details can hold any inline markup: badges, links, code, avatars and actions. Use `html` instead of `detail` in the string component (it is not escaped, so only pass trusted markup). The copy buttons below use [Copy Button](#/components/copy-button) and work as soon as `Aksara.init()` has run.

::html
<div class="docs-preview">
  <div class="card max-w-[620px]">
    <div class="card-header fw-semibold">API credentials</div>
    <div class="card-body">
      <dl class="desc-list desc-list-horizontal desc-list-divided">
        <div><dt>Environment</dt><dd><span class="badge badge-soft-success">Production</span></dd></div>
        <div><dt>Client ID</dt><dd class="hstack gap-2"><code class="min-w-0">aks_live_7f3c91d2</code><button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="" data-clipboard-text="aks_live_7f3c91d2" aria-label="Copy client ID" title="Copy"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button></dd></div>
        <div><dt>Webhook URL</dt><dd class="hstack gap-2"><code class="min-w-0">https://api.northwindcoffee.com/hooks/aksara</code><button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="" data-clipboard-text="https://api.northwindcoffee.com/hooks/aksara" aria-label="Copy webhook URL" title="Copy"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button></dd></div>
        <div><dt>Scopes</dt><dd class="hstack flex-wrap gap-1"><span class="badge badge-soft-primary">orders:read</span><span class="badge badge-soft-primary">orders:write</span><span class="badge badge-soft-secondary">customers:read</span></dd></div>
        <div><dt>Created by</dt><dd class="hstack gap-2"><span class="avatar avatar-xs avatar-success rounded-full">AM</span> Alex Morgan</dd></div>
        <div><dt>Documentation</dt><dd><a href="#/components/description-list">Webhook signatures <span class="mdi mdi-open-in-new"></span></a></dd></div>
      </dl>
    </div>
  </div>
</div>
::end

```html
<dl class="desc-list desc-list-horizontal desc-list-divided">
  <div>
    <dt>Environment</dt>
    <dd><span class="badge badge-soft-success">Production</span></dd>
  </div>
  <div>
    <dt>Client ID</dt>
    <dd class="hstack gap-2">
      <code class="min-w-0">aks_live_7f3c91d2</code>
      <button
        class="btn copy-btn btn-ghost btn-sm btn-icon"
        type="button"
        data-clipboard=""
        data-clipboard-text="aks_live_7f3c91d2"
        aria-label="Copy client ID"
      >
        ...
      </button>
    </dd>
  </div>
  <div>
    <dt>Scopes</dt>
    <dd class="hstack flex-wrap gap-1">
      <span class="badge badge-soft-primary">orders:read</span>
      <span class="badge badge-soft-primary">orders:write</span>
    </dd>
  </div>
</dl>
```

```js components
import { DescriptionList, CopyButton } from "@abydahana/aksara-ui/components";

DescriptionList({
  layout: "horizontal",
  divided: true,
  items: [
    { term: "Environment", html: '<span class="badge badge-soft-success">Production</span>' },
    {
      term: "Client ID",
      html: `<span class="hstack gap-2"><code>aks_live_7f3c91d2</code>${CopyButton({
        text: "aks_live_7f3c91d2",
        label: "Copy client ID",
        iconOnly: true,
        variant: "ghost",
        size: "sm"
      })}</span>`
    },
    {
      term: "Scopes",
      html: '<span class="hstack flex-wrap gap-1"><span class="badge badge-soft-primary">orders:read</span><span class="badge badge-soft-primary">orders:write</span></span>'
    }
  ]
});
```

The string component has no class option per `<dd>`, so wrap the content in an `hstack` span instead, as shown.

---

## Plan Facts

The grid layout flows into as many columns as the container allows, which makes it a good fit for plan specs, product attributes and quick summaries on a pricing or billing page.

::html
<div class="docs-preview">
  <div class="card max-w-[640px]">
    <div class="card-body vstack gap-4">
      <div class="hstack justify-between gap-3 flex-wrap">
        <div>
          <div class="fw-bold">Business plan</div>
          <div class="text-sm text-subtle">Billed yearly · renews 1 January 2027</div>
        </div>
        <button type="button" class="btn btn-soft-primary btn-sm">Change plan</button>
      </div>
      <dl class="desc-list desc-list-grid">
        <div><dt>Price</dt><dd class="fw-semibold">$45 / month</dd></div>
        <div><dt>Seats</dt><dd>12 of 15 used</dd></div>
        <div><dt>Storage</dt><dd>72 GB of 100 GB</dd></div>
        <div><dt>Outlets</dt><dd>Up to 5</dd></div>
        <div><dt>Support</dt><dd>Priority, 7 days a week</dd></div>
        <div><dt>Payment method</dt><dd><span class="mdi mdi-credit-card-outline"></span> Visa ···· 4242</dd></div>
      </dl>
    </div>
  </div>
</div>
::end

```html
<dl class="desc-list desc-list-grid">
  <div>
    <dt>Price</dt>
    <dd class="fw-semibold">$45 / month</dd>
  </div>
  <div>
    <dt>Seats</dt>
    <dd>12 of 15 used</dd>
  </div>
  <div>
    <dt>Storage</dt>
    <dd>72 GB of 100 GB</dd>
  </div>
  <div>
    <dt>Outlets</dt>
    <dd>Up to 5</dd>
  </div>
</dl>
```

```js components
import { DescriptionList } from "@abydahana/aksara-ui/components";

DescriptionList({
  layout: "grid",
  items: [
    { term: "Price", html: '<span class="fw-semibold">$45 / month</span>' },
    { term: "Seats", detail: "12 of 15 used" },
    { term: "Storage", detail: "72 GB of 100 GB" },
    { term: "Outlets", detail: "Up to 5" }
  ]
});
```

`.desc-list-divided` draws a line under every pair, which suits the stacked and horizontal layouts. In a grid, leave it off and let the gaps separate the items.

---

## Confirmation Dialog

Description lists are a clear way to show what the user is about to confirm. The card below mirrors a [modal](#/components/modal) layout; the same `<dl>` works inside `.modal-body`.

::html
<div class="docs-preview">
  <div class="card max-w-[460px]">
    <div class="card-header hstack justify-between gap-3">
      <span class="fw-semibold">Confirm transfer</span>
      <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Close"><span class="mdi mdi-close"></span></button>
    </div>
    <div class="card-body">
      <dl class="desc-list desc-list-horizontal desc-list-divided [--aksara-desc-term:9rem]">
        <div><dt>From</dt><dd>Operating account ···· 8812</dd></div>
        <div><dt>To</dt><dd>Northwind Coffee Ltd · Savings ···· 0045</dd></div>
        <div><dt>Amount</dt><dd class="fw-bold">$12,500.00</dd></div>
        <div><dt>Fee</dt><dd>$2.50</dd></div>
        <div><dt>Reference</dt><dd>Supplier invoice SUP-1129</dd></div>
        <div><dt>Scheduled</dt><dd>Today, 5:00 PM GMT</dd></div>
      </dl>
    </div>
    <div class="card-footer hstack justify-end gap-2">
      <button type="button" class="btn btn-plain">Cancel</button>
      <button type="button" class="btn btn-primary">Transfer $12,502.50</button>
    </div>
  </div>
</div>
::end

```html
<div class="modal-body">
  <dl class="desc-list desc-list-horizontal desc-list-divided [--aksara-desc-term:9rem]">
    <div>
      <dt>From</dt>
      <dd>Operating account ···· 8812</dd>
    </div>
    <div>
      <dt>To</dt>
      <dd>Northwind Coffee Ltd · Savings ···· 0045</dd>
    </div>
    <div>
      <dt>Amount</dt>
      <dd class="fw-bold">$12,500.00</dd>
    </div>
    <div>
      <dt>Fee</dt>
      <dd>$2.50</dd>
    </div>
  </dl>
</div>
```

```js components
import { DescriptionList } from "@abydahana/aksara-ui/components";

DescriptionList({
  layout: "horizontal",
  divided: true,
  termWidth: "9rem",
  items: [
    { term: "From", detail: "Operating account ···· 8812" },
    { term: "To", detail: "Northwind Coffee Ltd · Savings ···· 0045" },
    { term: "Amount", html: '<span class="fw-bold">$12,500.00</span>' },
    { term: "Fee", detail: "$2.50" }
  ]
});
```

---

## Custom Term Width

In the horizontal layout the term column defaults to `30%` of the list, with a floor of `8rem`. Set `--aksara-desc-term` to a fixed length for short terms in a wide container, or to a percentage for long terms. Use an arbitrary class such as `[--aksara-desc-term:12rem]`, or the `termWidth` prop.

::html
<div class="docs-preview">
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Default (30%)</h4>
    <dl class="desc-list desc-list-horizontal">
      <div><dt>Name</dt><dd>Northwind Coffee</dd></div>
      <div><dt>VAT number</dt><dd>GB 123 4567 89</dd></div>
    </dl>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Fixed (<code>[--aksara-desc-term:10rem]</code>)</h4>
    <dl class="desc-list desc-list-horizontal [--aksara-desc-term:10rem]">
      <div><dt>Name</dt><dd>Northwind Coffee</dd></div>
      <div><dt>VAT number</dt><dd>GB 123 4567 89</dd></div>
    </dl>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Wide (<code>[--aksara-desc-term:45%]</code>)</h4>
    <dl class="desc-list desc-list-horizontal [--aksara-desc-term:45%]">
      <div><dt>Registered business name (as registered)</dt><dd>Northwind Coffee Ltd</dd></div>
      <div><dt>Tax ID (VAT)</dt><dd>GB 123 4567 89</dd></div>
    </dl>
  </div>
</div>
::end

```html
<dl class="desc-list desc-list-horizontal [--aksara-desc-term:10rem]">...</dl>
<dl class="desc-list desc-list-horizontal [--aksara-desc-term:45%]">...</dl>
```

```js components
import { DescriptionList } from "@abydahana/aksara-ui/components";

const items = [
  { term: "Name", detail: "Northwind Coffee" },
  { term: "VAT number", detail: "GB 123 4567 89" }
];

DescriptionList({ layout: "horizontal", termWidth: "10rem", items });
DescriptionList({ layout: "horizontal", termWidth: "45%", items });
```

Values below `8rem` have no effect, because the column is `minmax(8rem, var(--aksara-desc-term, 30%))`. The variable only applies to the horizontal layout.

---

## Accessibility

- Keep the `<dl>`, `<dt>` and `<dd>` elements: screen readers announce the list and the number of items, and read each term with its detail. Wrapping each pair in a `<div>` is valid HTML.
- Terms should be short labels, not sentences. Put explanations in the detail or a `.form-text` below the list.
- When a detail is only an icon or a badge color, include text as well ("Active", "Paid").
- The horizontal layout uses CSS grid with logical properties, so the term column moves to the right under `dir="rtl"`.

---

## String Component

`DescriptionList` renders a `<dl class="desc-list">` with one `<div><dt>…</dt><dd>…</dd></div>` per item. `term` and `detail` are escaped; `html` is raw markup and wins over `detail`.

```ts
import { DescriptionList } from "@abydahana/aksara-ui/components";

DescriptionList({
  items: [
    { term: "Customer", detail: "Maya Chen" },
    { term: "Status", html: '<span class="badge badge-soft-success">Active</span>' }
  ]
});

DescriptionList({ items, layout: "horizontal", divided: true, termWidth: "12rem" });
DescriptionList({ items, layout: "grid", className: "mt-4" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>items</code></td><td><code>DescriptionItem[]</code></td><td>—</td><td>The pairs, in order. Required.</td></tr>
      <tr><td><code>layout</code></td><td><code>"stacked" | "horizontal" | "grid"</code></td><td><code>"stacked"</code></td><td>Adds <code>.desc-list-horizontal</code> or <code>.desc-list-grid</code>.</td></tr>
      <tr><td><code>divided</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.desc-list-divided</code>.</td></tr>
      <tr><td><code>termWidth</code></td><td><code>string</code></td><td>—</td><td>Term column width for the horizontal layout, such as <code>"12rem"</code> or <code>"35%"</code>. Emitted as <code>[--aksara-desc-term:…]</code>; characters other than letters, digits, <code>.</code>, <code>%</code> and <code>-</code> are stripped.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the <code>&lt;dl&gt;</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes on the <code>&lt;dl&gt;</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

### DescriptionItem

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Field</th><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>term</code></td><td><code>string</code></td><td>Escaped label in the <code>&lt;dt&gt;</code>. Required.</td></tr>
      <tr><td><code>detail</code></td><td><code>string</code></td><td>Escaped text in the <code>&lt;dd&gt;</code>.</td></tr>
      <tr><td><code>html</code></td><td><code>string</code></td><td>Raw HTML in the <code>&lt;dd&gt;</code> (badges, links, buttons). Takes precedence over <code>detail</code>.</td></tr>
      <tr><td><code>detailClassName</code></td><td><code>string</code></td><td>Classes for this row's <code>&lt;dd&gt;</code>, e.g. <code>"hstack gap-2"</code> to line up a value with a copy button.</td></tr>
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
      <tr><th>Class / property</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.desc-list</code></td><td>Grid of pairs with a <code>.875rem</code> gap and no margin. Styles <code>dt</code> (subtle <code>.8125rem</code>) and <code>dd</code> (body <code>.9375rem</code>, wraps anywhere).</td></tr>
      <tr><td><code>.desc-list-horizontal</code></td><td>From <code>576px</code> up, each pair becomes two columns: term and detail, aligned on the baseline.</td></tr>
      <tr><td><code>.desc-list-grid</code></td><td>Auto-fit columns, at least <code>10rem</code> each, with a <code>1rem 1.5rem</code> gap.</td></tr>
      <tr><td><code>.desc-list-divided</code></td><td>Removes the gap and adds <code>.75rem</code> padding with a hairline between pairs.</td></tr>
      <tr><td><code>--aksara-desc-term</code></td><td>Term column width in the horizontal layout. Defaults to <code>30%</code>, never narrower than <code>8rem</code>.</td></tr>
    </tbody>
  </table>
</div>
::end
