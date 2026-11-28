# Check List

A check list is a bulleted list with check marks instead of dots. Use it for plan features, password rules, onboarding tasks, and any "what you get" summary. The markers are drawn in CSS on each `<li>`, so the markup is a plain `<ul class="check-list">`. Add `.is-off` to an item to show a muted cross for something that is not included or not done yet.

::html
<div class="docs-preview">
  <ul class="check-list max-w-[420px]">
    <li>Unlimited invoices and quotes</li>
    <li>Automatic payment reminders by email and WhatsApp</li>
    <li>Bank reconciliation for checking, savings, and business accounts</li>
    <li class="is-off"><span class="visually-hidden">Not included: </span>Multi-currency accounts</li>
  </ul>
</div>
::end

```html
<ul class="check-list">
  <li>Unlimited invoices and quotes</li>
  <li>Automatic payment reminders by email and WhatsApp</li>
  <li>Bank reconciliation for checking, savings, and business accounts</li>
  <li class="is-off"><span class="visually-hidden">Not included: </span>Multi-currency accounts</li>
</ul>
```

```js components
import { CheckList } from "@abydahana/aksara-ui/components";

CheckList({
  items: [
    "Unlimited invoices and quotes",
    "Automatic payment reminders by email and WhatsApp",
    "Bank reconciliation for checking, savings, and business accounts",
    { text: "Multi-currency accounts", off: true }
  ]
});
```

---

## Pricing Table

Check lists are the body of most pricing cards. List what every plan includes, then the features it lacks as `.is-off` items so plans are easy to compare line by line. The featured plan gets a primary border, a badge, and a solid button.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <div class="card h-full">
        <div class="card-body vstack gap-4 items-start">
          <div>
            <h4 class="mt-0 mb-1 fw-bold">Starter</h4>
            <p class="m-0 text-subtle text-sm">For freelancers sending a few invoices a month.</p>
          </div>
          <div class="hstack gap-1 items-end">
            <span class="text-3xl fw-bold">$0</span>
            <span class="text-subtle text-sm mb-1">/ month</span>
          </div>
          <ul class="check-list check-list-sm">
            <li>20 invoices per month</li>
            <li>1 team member</li>
            <li>Payment links (Apple Pay, card)</li>
            <li class="is-off"><span class="visually-hidden">Not included: </span>Recurring invoices</li>
            <li class="is-off"><span class="visually-hidden">Not included: </span>Bank reconciliation</li>
            <li class="is-off"><span class="visually-hidden">Not included: </span>Priority support</li>
          </ul>
          <button type="button" class="btn btn-ghost w-full mt-auto">Start for free</button>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="card border-primary h-full">
        <div class="card-body vstack gap-4 items-start">
          <div class="w-full">
            <div class="hstack justify-between gap-2">
              <h4 class="m-0 fw-bold">Growth</h4>
              <span class="badge badge-soft-primary">Most popular</span>
            </div>
            <p class="mt-1 mb-0 text-subtle text-sm">For small teams that bill every week.</p>
          </div>
          <div class="hstack gap-1 items-end">
            <span class="text-3xl fw-bold">$15</span>
            <span class="text-subtle text-sm mb-1">/ month</span>
          </div>
          <ul class="check-list check-list-sm check-list-primary">
            <li>Unlimited invoices</li>
            <li>5 team members</li>
            <li>Payment links (Apple Pay, card)</li>
            <li>Recurring invoices</li>
            <li>Bank reconciliation</li>
            <li class="is-off"><span class="visually-hidden">Not included: </span>Priority support</li>
          </ul>
          <button type="button" class="btn btn-primary w-full mt-auto">Try Growth free for 14 days</button>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="card h-full">
        <div class="card-body vstack gap-4 items-start">
          <div>
            <h4 class="mt-0 mb-1 fw-bold">Business</h4>
            <p class="m-0 text-subtle text-sm">For finance teams with approvals and audits.</p>
          </div>
          <div class="hstack gap-1 items-end">
            <span class="text-3xl fw-bold">$45</span>
            <span class="text-subtle text-sm mb-1">/ month</span>
          </div>
          <ul class="check-list check-list-sm">
            <li>Unlimited invoices</li>
            <li>Unlimited team members</li>
            <li>Payment links (Apple Pay, card)</li>
            <li>Recurring invoices</li>
            <li>Bank reconciliation</li>
            <li>Priority support with a 4-hour response</li>
          </ul>
          <button type="button" class="btn btn-ghost w-full mt-auto">Contact sales</button>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="row gap-3">
  <div class="col-12 md:col-4">
    <div class="card h-full">
      <div class="card-body vstack gap-4 items-start">
        <h4 class="m-0 fw-bold">Starter</h4>
        <span class="text-3xl fw-bold">$0</span>
        <ul class="check-list check-list-sm">
          <li>20 invoices per month</li>
          <li>1 team member</li>
          <li class="is-off"><span class="visually-hidden">Not included: </span>Recurring invoices</li>
        </ul>
        <button type="button" class="btn btn-ghost w-full mt-auto">Start for free</button>
      </div>
    </div>
  </div>
  <div class="col-12 md:col-4">
    <!-- Featured plan -->
    <div class="card border-primary h-full">
      <div class="card-body vstack gap-4 items-start">
        <div class="hstack justify-between gap-2 w-full">
          <h4 class="m-0 fw-bold">Growth</h4>
          <span class="badge badge-soft-primary">Most popular</span>
        </div>
        <span class="text-3xl fw-bold">$15</span>
        <ul class="check-list check-list-sm check-list-primary">
          <li>Unlimited invoices</li>
          <li>Recurring invoices</li>
          <li class="is-off"><span class="visually-hidden">Not included: </span>Priority support</li>
        </ul>
        <button type="button" class="btn btn-primary w-full mt-auto">Try Growth free for 14 days</button>
      </div>
    </div>
  </div>
  <!-- Business plan … -->
</div>
```

```js components
import { CheckList } from "@abydahana/aksara-ui/components";

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: ["20 invoices per month", "1 team member"],
    missing: ["Recurring invoices"]
  },
  {
    name: "Growth",
    price: "$15",
    featured: true,
    features: ["Unlimited invoices", "Recurring invoices"],
    missing: ["Priority support"]
  }
];

plans.map((plan) =>
  CheckList({
    size: "sm",
    variant: plan.featured ? "primary" : undefined,
    items: [...plan.features, ...plan.missing.map((text) => ({ text, off: true }))]
  })
);
```

Keep the same feature order in every card, so a row on one plan lines up with the same row on the next.

---

## Password Requirements

Show the rules under a password field and move each one from `.is-off` to checked as the user types. The visually hidden prefix tells screen reader users which rules are still unmet; put `aria-live="polite"` on the list if you update it while typing.

::html
<div class="docs-preview">
  <div class="max-w-[420px]">
    <label class="form-label" for="newPassword">New password</label>
    <input id="newPassword" class="form-control" type="password" value="Manchester2024" autocomplete="new-password" aria-describedby="newPasswordRules">
    <ul id="newPasswordRules" class="check-list check-list-sm mt-3" aria-live="polite">
      <li>At least 8 characters</li>
      <li>An uppercase and a lowercase letter</li>
      <li>At least one number</li>
      <li class="is-off"><span class="visually-hidden">Not met: </span>A symbol such as ! or #</li>
      <li class="is-off"><span class="visually-hidden">Not met: </span>Different from your last 3 passwords</li>
    </ul>
  </div>
</div>
::end

```html
<label class="form-label" for="newPassword">New password</label>
<input id="newPassword" class="form-control" type="password" aria-describedby="newPasswordRules" />
<ul id="newPasswordRules" class="check-list check-list-sm mt-3" aria-live="polite">
  <li>At least 8 characters</li>
  <li>An uppercase and a lowercase letter</li>
  <li>At least one number</li>
  <li class="is-off"><span class="visually-hidden">Not met: </span>A symbol such as ! or #</li>
</ul>
```

```js components
import { CheckList } from "@abydahana/aksara-ui/components";

const rules = [
  { text: "At least 8 characters", test: (v) => v.length >= 8 },
  { text: "An uppercase and a lowercase letter", test: (v) => /[a-z]/.test(v) && /[A-Z]/.test(v) },
  { text: "At least one number", test: (v) => /\d/.test(v) },
  { text: "A symbol such as ! or #", test: (v) => /[^\w\s]/.test(v) }
];

const renderRules = (value) =>
  CheckList({
    size: "sm",
    offLabel: "Not met: ",
    className: "mt-3",
    attributes: { id: "newPasswordRules", "aria-live": "polite" },
    items: rules.map((rule) => ({ text: rule.text, off: !rule.test(value) }))
  });
```

The string component prefixes off items with "Not included: " by default; pass `offLabel` for other wording, such as "Not met: " here.

---

## Onboarding Checklist

A setup card that tracks the first tasks in a new workspace. Done tasks are checked; the rest use `.is-off` and carry a link to the page where the user can finish them.

::html
<div class="docs-preview">
  <div class="card max-w-[460px]">
    <div class="card-body vstack gap-4">
      <div class="hstack justify-between gap-3">
        <div>
          <h4 class="m-0 fw-bold">Set up Dusk Coffee Shop</h4>
          <p class="mt-1 mb-0 text-subtle text-sm">3 of 5 steps done</p>
        </div>
        <span class="badge badge-soft-success">60%</span>
      </div>
      <ul class="check-list">
        <li>Create your store</li>
        <li>Add your first 10 products</li>
        <li>Connect a payment method</li>
        <li class="is-off"><span class="visually-hidden">Not done: </span><a href="#/components/check-list">Set shipping rates for London and Manchester</a></li>
        <li class="is-off"><span class="visually-hidden">Not done: </span><a href="#/components/check-list">Invite a team member</a></li>
      </ul>
      <button type="button" class="btn btn-primary">Continue setup</button>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-body vstack gap-4">
    <h4 class="m-0 fw-bold">Set up Dusk Coffee Shop</h4>
    <ul class="check-list">
      <li>Create your store</li>
      <li>Add your first 10 products</li>
      <li>Connect a payment method</li>
      <li class="is-off">
        <span class="visually-hidden">Not done: </span>
        <a href="/settings/shipping">Set shipping rates for London and Manchester</a>
      </li>
      <li class="is-off">
        <span class="visually-hidden">Not done: </span>
        <a href="/settings/team">Invite a team member</a>
      </li>
    </ul>
    <button type="button" class="btn btn-primary">Continue setup</button>
  </div>
</div>
```

```js components
import { CheckList } from "@abydahana/aksara-ui/components";

CheckList({
  items: [
    "Create your store",
    "Add your first 10 products",
    "Connect a payment method",
    { html: '<a href="/settings/shipping">Set shipping rates for London and Manchester</a>', off: true },
    { html: '<a href="/settings/team">Invite a team member</a>', off: true }
  ]
});
```

Use `html` instead of `text` when an item contains markup. `text` is escaped; `html` is inserted as is, so never pass user input through it.

---

## Colors

Markers are green by default. Add `.check-list-{color}` to use another palette color, for example to match the accent of a plan or a brand section. The `.is-off` cross stays neutral in every color.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <ul class="check-list">
        <li>Success (default)</li>
        <li class="is-off"><span class="visually-hidden">Not included: </span>Off item</li>
      </ul>
    </div>
    <div class="col-12 md:col-6">
      <ul class="check-list check-list-primary">
        <li>Primary</li>
        <li class="is-off"><span class="visually-hidden">Not included: </span>Off item</li>
      </ul>
    </div>
    <div class="col-12 md:col-6">
      <ul class="check-list check-list-info">
        <li>Info</li>
        <li>Second item</li>
      </ul>
    </div>
    <div class="col-12 md:col-6">
      <ul class="check-list check-list-warning">
        <li>Warning</li>
        <li>Second item</li>
      </ul>
    </div>
    <div class="col-12 md:col-6">
      <ul class="check-list check-list-tertiary">
        <li>Tertiary</li>
        <li>Second item</li>
      </ul>
    </div>
    <div class="col-12 md:col-6">
      <ul class="check-list check-list-dark">
        <li>Dark</li>
        <li>Second item</li>
      </ul>
    </div>
  </div>
</div>
::end

```html
<ul class="check-list check-list-primary">
  …
</ul>
<ul class="check-list check-list-info">
  …
</ul>
<ul class="check-list check-list-warning">
  …
</ul>
<ul class="check-list check-list-tertiary">
  …
</ul>
<ul class="check-list check-list-dark">
  …
</ul>
```

```js components
import { CheckList } from "@abydahana/aksara-ui/components";

CheckList({ variant: "primary", items: ["Primary", { text: "Off item", off: true }] });
CheckList({ variant: "info", items: ["Info", "Second item"] });
CheckList({ variant: "dark", items: ["Dark", "Second item"] });
```

The color is a single custom property, `--aksara-check-color`, so you can also set it from an arbitrary class such as `[--aksara-check-color:rgb(var(--aksara-danger))]`.

---

## Plain Checks

`.check-list-plain` swaps the filled circle for a bare check mark. It reads lighter, which suits long feature lists in marketing pages and dense side panels. Off items keep the crossed circle.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <h4 class="mt-0 mb-3 fw-bold text-sm">Every plan includes</h4>
      <ul class="check-list check-list-plain check-list-primary">
        <li>SSL certificate and daily backups</li>
        <li>English and Spanish invoices</li>
        <li>Data stored in London (UK region)</li>
        <li>Export to Excel and PDF</li>
      </ul>
    </div>
    <div class="col-12 md:col-6">
      <h4 class="mt-0 mb-3 fw-bold text-sm">Plain, default color</h4>
      <ul class="check-list check-list-plain">
        <li>Free cancellation until 24 hours before</li>
        <li>Breakfast for two</li>
        <li class="is-off"><span class="visually-hidden">Not included: </span>Airport transfer</li>
      </ul>
    </div>
  </div>
</div>
::end

```html
<ul class="check-list check-list-plain check-list-primary">
  <li>SSL certificate and daily backups</li>
  <li>English and Spanish invoices</li>
  <li>Data stored in London (UK region)</li>
</ul>
```

```js components
import { CheckList } from "@abydahana/aksara-ui/components";

CheckList({
  plain: true,
  variant: "primary",
  items: ["SSL certificate and daily backups", "English and Spanish invoices", "Data stored in London (UK region)"]
});
```

---

## Small Size

`.check-list-sm` uses a smaller font, smaller markers, and tighter spacing. Use it in cards, popovers, and tables where the default size feels loud.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <h4 class="mt-0 mb-3 fw-bold text-sm">Default</h4>
      <ul class="check-list">
        <li>Free delivery in Greater London</li>
        <li>30-day returns</li>
        <li>Official 1-year warranty</li>
      </ul>
    </div>
    <div class="col-12 md:col-6">
      <h4 class="mt-0 mb-3 fw-bold text-sm">Small</h4>
      <ul class="check-list check-list-sm">
        <li>Free delivery in Greater London</li>
        <li>30-day returns</li>
        <li>Official 1-year warranty</li>
      </ul>
    </div>
  </div>
</div>
::end

```html
<ul class="check-list check-list-sm">
  <li>Free delivery in Greater London</li>
  <li>30-day returns</li>
  <li>Official 1-year warranty</li>
</ul>
```

```js components
import { CheckList } from "@abydahana/aksara-ui/components";

CheckList({ size: "sm", items: ["Free delivery in Greater London", "30-day returns", "Official 1-year warranty"] });
```

---

## In A List Group

The list is a grid with no outer margin, so it drops into any container. Here it summarizes what a product bundle includes inside a list group row.

::html
<div class="docs-preview">
  <div class="list-group max-w-[480px]">
    <div class="list-group-item vstack gap-2 items-start">
      <div class="hstack justify-between w-full gap-3">
        <span class="fw-semibold">Small Business Bundle</span>
        <span class="fw-semibold">$499.00</span>
      </div>
      <ul class="check-list check-list-sm check-list-plain">
        <li>Android POS tablet</li>
        <li>Bluetooth receipt printer</li>
        <li>12 months of Aksara POS Pro</li>
      </ul>
    </div>
    <div class="list-group-item vstack gap-2 items-start">
      <div class="hstack justify-between w-full gap-3">
        <span class="fw-semibold">Software Only Bundle</span>
        <span class="fw-semibold">$149.00</span>
      </div>
      <ul class="check-list check-list-sm check-list-plain">
        <li class="is-off"><span class="visually-hidden">Not included: </span>Android POS tablet</li>
        <li class="is-off"><span class="visually-hidden">Not included: </span>Bluetooth receipt printer</li>
        <li>12 months of Aksara POS Pro</li>
      </ul>
    </div>
  </div>
</div>
::end

```html
<div class="list-group">
  <div class="list-group-item vstack gap-2 items-start">
    <span class="fw-semibold">Small Business Bundle</span>
    <ul class="check-list check-list-sm check-list-plain">
      <li>Android POS tablet</li>
      <li>Bluetooth receipt printer</li>
      <li>12 months of Aksara POS Pro</li>
    </ul>
  </div>
</div>
```

```js components
import { CheckList } from "@abydahana/aksara-ui/components";

CheckList({
  size: "sm",
  plain: true,
  items: ["Android POS tablet", "Bluetooth receipt printer", "12 months of Aksara POS Pro"]
});
```

---

## Accessibility

- The markers are CSS pseudo-elements, so screen readers read only the text. Each `.is-off` item needs a visually hidden prefix ("Not included: ", "Not met: ") so the difference is not conveyed by the icon alone. `CheckList` adds the prefix for you (`offLabel`, default "Not included: ").
- Keep the semantic `<ul>`. Screen readers announce the item count, which helps on pricing cards.
- `.is-off` text uses the subtle text color. Do not fade it further with opacity, or it gets hard to read.
- Markers use logical properties (`padding-inline-start`, `inset-inline-start`), so the list mirrors in RTL with no extra classes.

---

## String Component

`CheckList` returns a `<ul class="check-list">` as an HTML string. Plain strings become checked items; objects let you mark an item as off or pass markup.

```ts
import { CheckList } from "@abydahana/aksara-ui/components";

CheckList({ items: ["Unlimited invoices", "5 team members"] });
CheckList({ items: ["Unlimited invoices", { text: "Priority support", off: true }], variant: "primary" });
CheckList({ items: [{ html: "<strong>24/7</strong> support" }], plain: true, size: "sm" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>items</code></td><td><code>Array&lt;string | CheckListItem&gt;</code></td><td>—</td><td>List items. A string is escaped text.</td></tr>
      <tr><td><code>items[].text</code></td><td><code>string</code></td><td>—</td><td>Escaped item text.</td></tr>
      <tr><td><code>items[].html</code></td><td><code>string</code></td><td>—</td><td>Raw HTML, used instead of <code>text</code>. Never pass user input.</td></tr>
      <tr><td><code>items[].off</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.is-off</code> (muted cross) and a visually hidden "Not included: " prefix.</td></tr>
      <tr><td><code>offLabel</code></td><td><code>string</code></td><td><code>"Not included: "</code></td><td>Screen-reader prefix of off items, e.g. <code>"Not met: "</code> for password rules.</td></tr>
      <tr><td><code>variant</code></td><td><code>"primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light"</code></td><td><code>"success"</code></td><td>Marker color. Any value other than <code>"success"</code> adds <code>.check-list-{variant}</code>.</td></tr>
      <tr><td><code>plain</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.check-list-plain</code>: bare check marks instead of filled circles.</td></tr>
      <tr><td><code>size</code></td><td><code>"sm" | "md"</code></td><td><code>"md"</code></td><td><code>"sm"</code> adds <code>.check-list-sm</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the <code>&lt;ul&gt;</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes, for example <code>{ id: "rules", "aria-live": "polite" }</code>.</td></tr>
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
      <tr><td><code>.check-list</code></td><td>Resets list styles and lays items out in a grid. Each direct <code>&lt;li&gt;</code> gets a filled check circle before it.</td></tr>
      <tr><td><code>.is-off</code></td><td>On an <code>&lt;li&gt;</code>: neutral crossed circle and subtle text color.</td></tr>
      <tr><td><code>.check-list-{color}</code></td><td>Marker color from the palette: primary, secondary, tertiary, success, danger, warning, info, light, dark.</td></tr>
      <tr><td><code>.check-list-plain</code></td><td>Bare check mark instead of a filled circle.</td></tr>
      <tr><td><code>.check-list-sm</code></td><td>Smaller font, markers, and gap.</td></tr>
      <tr><td><code>--aksara-check-color</code></td><td>Custom property behind the marker color. Defaults to the success color.</td></tr>
    </tbody>
  </table>
</div>
::end
