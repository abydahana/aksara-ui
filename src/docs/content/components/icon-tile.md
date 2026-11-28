# Icon Tile

An icon tile puts an icon on a soft tinted square or circle. It gives feature lists, settings rows, notifications and KPI cards a consistent visual anchor without images. Tiles come in five sizes, every palette color, a circle shape and an outline style, and they never shrink inside flex rows.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="icon-tile icon-tile-primary" aria-hidden="true"><span class="mdi mdi-rocket-launch-outline"></span></span>
    <span class="icon-tile icon-tile-success" aria-hidden="true"><span class="mdi mdi-shield-check-outline"></span></span>
    <span class="icon-tile icon-tile-warning icon-tile-circle" aria-hidden="true"><span class="mdi mdi-bell-outline"></span></span>
    <span class="icon-tile icon-tile-outline" aria-hidden="true"><span class="mdi mdi-cog-outline"></span></span>
    <span class="icon-tile" aria-hidden="true"><span class="mdi mdi-folder-outline"></span></span>
  </div>
</div>
::end

```html
<span class="icon-tile icon-tile-primary" aria-hidden="true">
  <span class="mdi mdi-rocket-launch-outline"></span>
</span>
<span class="icon-tile icon-tile-warning icon-tile-circle" aria-hidden="true">
  <span class="mdi mdi-bell-outline"></span>
</span>
<span class="icon-tile icon-tile-outline" aria-hidden="true">
  <span class="mdi mdi-cog-outline"></span>
</span>
```

```js components
import { IconTile } from "@abydahana/aksara-ui/components";

IconTile({ icon: "mdi-rocket-launch-outline", variant: "primary" });
IconTile({ icon: "mdi-bell-outline", variant: "warning", shape: "circle" });
IconTile({ icon: "mdi-cog-outline", outline: true });
```

---

## Sizes

The default tile is `2.5rem` (40px) square with a `1.25rem` icon. The icon scales with the tile, and the corner radius grows with it so large tiles do not look sharp.

::html
<div class="docs-preview">
  <div class="docs-row items-end">
    <span class="icon-tile icon-tile-xs icon-tile-primary" aria-hidden="true"><span class="mdi mdi-lightning-bolt-outline"></span></span>
    <span class="icon-tile icon-tile-sm icon-tile-primary" aria-hidden="true"><span class="mdi mdi-lightning-bolt-outline"></span></span>
    <span class="icon-tile icon-tile-primary" aria-hidden="true"><span class="mdi mdi-lightning-bolt-outline"></span></span>
    <span class="icon-tile icon-tile-lg icon-tile-primary" aria-hidden="true"><span class="mdi mdi-lightning-bolt-outline"></span></span>
    <span class="icon-tile icon-tile-xl icon-tile-primary" aria-hidden="true"><span class="mdi mdi-lightning-bolt-outline"></span></span>
  </div>
</div>
::end

```html
<span class="icon-tile icon-tile-xs icon-tile-primary" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-sm icon-tile-primary" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-primary" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-lg icon-tile-primary" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-xl icon-tile-primary" aria-hidden="true">...</span>
```

```js components
import { IconTile } from "@abydahana/aksara-ui/components";

for (const size of ["xs", "sm", "md", "lg", "xl"]) {
  IconTile({ icon: "mdi-lightning-bolt-outline", variant: "primary", size });
}
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Size</th><th>Icon size</th><th>Radius</th><th>Typical use</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.icon-tile-xs</code></td><td><code>1.75rem</code></td><td><code>1rem</code></td><td><code>.5rem</code></td><td>Dense lists, table cells, menu items</td></tr>
      <tr><td><code>.icon-tile-sm</code></td><td><code>2rem</code></td><td><code>1.0625rem</code></td><td><code>.625rem</code></td><td>Stat headers, notifications</td></tr>
      <tr><td><code>.icon-tile</code></td><td><code>2.5rem</code></td><td><code>1.25rem</code></td><td><code>--aksara-radius-md</code></td><td>Settings rows, list groups</td></tr>
      <tr><td><code>.icon-tile-lg</code></td><td><code>3rem</code></td><td><code>1.5rem</code></td><td><code>--aksara-radius-lg</code></td><td>Feature cards</td></tr>
      <tr><td><code>.icon-tile-xl</code></td><td><code>3.75rem</code></td><td><code>1.875rem</code></td><td><code>--aksara-radius-xl</code></td><td>Onboarding, empty states, hero features</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Colors

A bare `.icon-tile` is neutral: subtle background, body-colored icon. Each palette color has a `.icon-tile-{color}` modifier with a 12% tint and a readable soft text color, in light and dark themes.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="icon-tile" role="img" aria-label="Default"><span class="mdi mdi-palette-outline"></span></span>
    <span class="icon-tile icon-tile-primary" role="img" aria-label="Primary"><span class="mdi mdi-palette-outline"></span></span>
    <span class="icon-tile icon-tile-secondary" role="img" aria-label="Secondary"><span class="mdi mdi-palette-outline"></span></span>
    <span class="icon-tile icon-tile-tertiary" role="img" aria-label="Tertiary"><span class="mdi mdi-palette-outline"></span></span>
    <span class="icon-tile icon-tile-success" role="img" aria-label="Success"><span class="mdi mdi-palette-outline"></span></span>
    <span class="icon-tile icon-tile-danger" role="img" aria-label="Danger"><span class="mdi mdi-palette-outline"></span></span>
    <span class="icon-tile icon-tile-warning" role="img" aria-label="Warning"><span class="mdi mdi-palette-outline"></span></span>
    <span class="icon-tile icon-tile-info" role="img" aria-label="Info"><span class="mdi mdi-palette-outline"></span></span>
    <span class="icon-tile icon-tile-dark" role="img" aria-label="Dark"><span class="mdi mdi-palette-outline"></span></span>
    <span class="icon-tile icon-tile-light" role="img" aria-label="Light"><span class="mdi mdi-palette-outline"></span></span>
  </div>
</div>
::end

```html
<span class="icon-tile" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-primary" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-secondary" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-tertiary" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-success" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-danger" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-warning" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-info" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-dark" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-light" aria-hidden="true">...</span>
```

```js components
import { IconTile } from "@abydahana/aksara-ui/components";

IconTile({ icon: "mdi-palette-outline" }); // neutral
IconTile({ icon: "mdi-palette-outline", variant: "primary" });
IconTile({ icon: "mdi-palette-outline", variant: "danger" });
```

Colors: `primary`, `secondary`, `tertiary`, `success`, `danger`, `warning`, `info`, `dark`, `light`.

Give colors a meaning and keep it across the product, for example success for money in, danger for destructive or failed items, info for system messages.

---

## Shapes And Outline

`.icon-tile-circle` makes the tile round, which pairs well with avatars in feeds and notifications. `.icon-tile-outline` drops the fill and adds a subtle border, a quieter style for secondary rows. Combine it with a color (`icon-tile-outline icon-tile-primary`, or `outline: true, variant: "primary"`) for a colored icon on a transparent tile with a matching tinted border.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="icon-tile icon-tile-info" aria-hidden="true"><span class="mdi mdi-message-text-outline"></span></span>
    <span class="icon-tile icon-tile-info icon-tile-circle" aria-hidden="true"><span class="mdi mdi-message-text-outline"></span></span>
    <span class="icon-tile icon-tile-outline" aria-hidden="true"><span class="mdi mdi-message-text-outline"></span></span>
    <span class="icon-tile icon-tile-outline icon-tile-circle" aria-hidden="true"><span class="mdi mdi-message-text-outline"></span></span>
    <span class="icon-tile icon-tile-outline text-primary" aria-hidden="true"><span class="mdi mdi-message-text-outline"></span></span>
    <span class="icon-tile icon-tile-outline icon-tile-circle text-danger" aria-hidden="true"><span class="mdi mdi-message-text-outline"></span></span>
  </div>
</div>
::end

```html
<span class="icon-tile icon-tile-info icon-tile-circle" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-outline" aria-hidden="true">...</span>
<span class="icon-tile icon-tile-outline text-primary" aria-hidden="true">...</span>
```

```js components
import { IconTile } from "@abydahana/aksara-ui/components";

IconTile({ icon: "mdi-message-text-outline", variant: "info", shape: "circle" });
IconTile({ icon: "mdi-message-text-outline", outline: true });
IconTile({ icon: "mdi-message-text-outline", outline: true, className: "text-primary" });
```

---

## Custom Content

A tile can hold any inline content instead of an MDI icon: an inline SVG, a currency symbol, or a short code. Pass it as `children` in the string component.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="icon-tile icon-tile-success fw-bold text-sm" aria-hidden="true">$</span>
    <span class="icon-tile icon-tile-primary icon-tile-circle fw-bold text-sm" aria-hidden="true">EN</span>
    <span class="icon-tile icon-tile-tertiary" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/></svg></span>
  </div>
</div>
::end

```html
<span class="icon-tile icon-tile-success fw-bold text-sm" aria-hidden="true">$</span>
<span class="icon-tile icon-tile-tertiary" aria-hidden="true">
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">...</svg>
</span>
```

```js components
import { IconTile } from "@abydahana/aksara-ui/components";

IconTile({ children: "$", variant: "success", className: "fw-bold text-sm" });
IconTile({
  children: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">…</svg>',
  variant: "tertiary"
});
```

---

## Feature Grid

Large tiles lead feature cards on landing and pricing pages. Keep the icons in one color, or give each feature its own color when they belong to different product areas.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6 lg:col-4">
      <div class="card h-full">
        <div class="card-body vstack items-start gap-3">
          <span class="icon-tile icon-tile-lg icon-tile-primary" aria-hidden="true"><span class="mdi mdi-contactless-payment"></span></span>
          <div>
            <h4 class="mt-0 mb-1 fw-bold">Tap to pay</h4>
            <p class="m-0 text-sm text-subtle">Accept contactless cards, Apple Pay and Google Pay right at the counter.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-4">
      <div class="card h-full">
        <div class="card-body vstack items-start gap-3">
          <span class="icon-tile icon-tile-lg icon-tile-success" aria-hidden="true"><span class="mdi mdi-receipt-text-check-outline"></span></span>
          <div>
            <h4 class="mt-0 mb-1 fw-bold">Automatic invoices</h4>
            <p class="m-0 text-sm text-subtle">Send invoices by email or text message and get paid reminders sent for you.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-4">
      <div class="card h-full">
        <div class="card-body vstack items-start gap-3">
          <span class="icon-tile icon-tile-lg icon-tile-info" aria-hidden="true"><span class="mdi mdi-chart-box-outline"></span></span>
          <div>
            <h4 class="mt-0 mb-1 fw-bold">Daily reports</h4>
            <p class="m-0 text-sm text-subtle">See sales per outlet, best sellers and stock alerts every morning at 7:00 AM.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-4">
      <div class="card h-full">
        <div class="card-body vstack items-start gap-3">
          <span class="icon-tile icon-tile-lg icon-tile-warning" aria-hidden="true"><span class="mdi mdi-account-group-outline"></span></span>
          <div>
            <h4 class="mt-0 mb-1 fw-bold">Staff roles</h4>
            <p class="m-0 text-sm text-subtle">Give cashiers, managers and owners exactly the access they need.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-4">
      <div class="card h-full">
        <div class="card-body vstack items-start gap-3">
          <span class="icon-tile icon-tile-lg icon-tile-tertiary" aria-hidden="true"><span class="mdi mdi-cloud-sync-outline"></span></span>
          <div>
            <h4 class="mt-0 mb-1 fw-bold">Works offline</h4>
            <p class="m-0 text-sm text-subtle">Keep selling when the connection drops; orders sync as soon as you are back online.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-4">
      <div class="card h-full">
        <div class="card-body vstack items-start gap-3">
          <span class="icon-tile icon-tile-lg icon-tile-danger" aria-hidden="true"><span class="mdi mdi-shield-lock-outline"></span></span>
          <div>
            <h4 class="mt-0 mb-1 fw-bold">Fraud protection</h4>
            <p class="m-0 text-sm text-subtle">Suspicious refunds and voids are flagged and held for an owner to approve.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="row gap-3">
  <div class="col-12 md:col-6 lg:col-4">
    <div class="card h-full">
      <div class="card-body vstack items-start gap-3">
        <span class="icon-tile icon-tile-lg icon-tile-primary" aria-hidden="true">
          <span class="mdi mdi-contactless-payment"></span>
        </span>
        <div>
          <h4 class="mt-0 mb-1 fw-bold">Tap to pay</h4>
          <p class="m-0 text-sm text-subtle">Accept contactless cards and mobile wallets at the counter.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- more features -->
</div>
```

```js components
import { IconTile } from "@abydahana/aksara-ui/components";

const features = [
  {
    icon: "mdi-contactless-payment",
    variant: "primary",
    title: "Tap to pay",
    text: "Accept contactless cards and mobile wallets."
  },
  {
    icon: "mdi-receipt-text-check-outline",
    variant: "success",
    title: "Automatic invoices",
    text: "Send invoices by email or text message."
  }
];

features
  .map(
    (
      f
    ) => `<div class="col-12 md:col-6 lg:col-4"><div class="card h-full"><div class="card-body vstack items-start gap-3">
  ${IconTile({ icon: f.icon, variant: f.variant, size: "lg" })}
  <div><h4 class="mt-0 mb-1 fw-bold">${f.title}</h4><p class="m-0 text-sm text-subtle">${f.text}</p></div>
</div></div></div>`
  )
  .join("");
```

`vstack items-start` keeps the tile at its own width; without `items-start` a column flexbox would stretch it.

---

## Settings List

Tiles in a [list group](#/components/list-group) make long settings pages easy to scan. Put the tile first, a title and a one-line description in a `flex-1 min-w-0` block, and the control or a chevron last.

::html
<div class="docs-preview">
  <div class="list-group max-w-[520px]">
    <a href="#/components/icon-tile" class="list-group-item list-group-item-action hstack gap-3">
      <span class="icon-tile icon-tile-primary" aria-hidden="true"><span class="mdi mdi-account-circle-outline"></span></span>
      <span class="flex-1 min-w-0"><span class="d-block fw-semibold">Profile</span><span class="d-block text-sm text-subtle">Name, photo and contact details</span></span>
      <span class="mdi mdi-chevron-right text-subtle" aria-hidden="true"></span>
    </a>
    <a href="#/components/icon-tile" class="list-group-item list-group-item-action hstack gap-3">
      <span class="icon-tile icon-tile-success" aria-hidden="true"><span class="mdi mdi-bank-outline"></span></span>
      <span class="flex-1 min-w-0"><span class="d-block fw-semibold">Payouts</span><span class="d-block text-sm text-subtle">Checking ···· 8812 · every Friday</span></span>
      <span class="mdi mdi-chevron-right text-subtle" aria-hidden="true"></span>
    </a>
    <div class="list-group-item hstack gap-3">
      <span class="icon-tile icon-tile-warning" aria-hidden="true"><span class="mdi mdi-bell-ring-outline"></span></span>
      <span class="flex-1 min-w-0"><span class="d-block fw-semibold">Order notifications</span><span class="d-block text-sm text-subtle">Push and email for every new order</span></span>
      <label class="form-switch"><input type="checkbox" checked aria-label="Order notifications" /></label>
    </div>
    <div class="list-group-item hstack gap-3">
      <span class="icon-tile icon-tile-info" aria-hidden="true"><span class="mdi mdi-two-factor-authentication"></span></span>
      <span class="flex-1 min-w-0"><span class="d-block fw-semibold">Two-factor authentication</span><span class="d-block text-sm text-subtle">Require a code from your authenticator app</span></span>
      <label class="form-switch"><input type="checkbox" aria-label="Two-factor authentication" /></label>
    </div>
    <a href="#/components/icon-tile" class="list-group-item list-group-item-action hstack gap-3">
      <span class="icon-tile icon-tile-danger" aria-hidden="true"><span class="mdi mdi-delete-outline"></span></span>
      <span class="flex-1 min-w-0"><span class="d-block fw-semibold text-danger">Close store</span><span class="d-block text-sm text-subtle">Export your data and delete the account</span></span>
      <span class="mdi mdi-chevron-right text-subtle" aria-hidden="true"></span>
    </a>
  </div>
</div>
::end

```html
<div class="list-group">
  <a href="/settings/profile" class="list-group-item list-group-item-action hstack gap-3">
    <span class="icon-tile icon-tile-primary" aria-hidden="true"
      ><span class="mdi mdi-account-circle-outline"></span
    ></span>
    <span class="flex-1 min-w-0">
      <span class="d-block fw-semibold">Profile</span>
      <span class="d-block text-sm text-subtle">Name, photo and contact details</span>
    </span>
    <span class="mdi mdi-chevron-right text-subtle" aria-hidden="true"></span>
  </a>
  <div class="list-group-item hstack gap-3">
    <span class="icon-tile icon-tile-warning" aria-hidden="true"><span class="mdi mdi-bell-ring-outline"></span></span>
    <span class="flex-1 min-w-0">
      <span class="d-block fw-semibold">Order notifications</span>
      <span class="d-block text-sm text-subtle">Push and email for every new order</span>
    </span>
    <label class="form-switch"><input type="checkbox" checked aria-label="Order notifications" /></label>
  </div>
</div>
```

```js components
import { IconTile } from "@abydahana/aksara-ui/components";

const rows = [
  {
    href: "/settings/profile",
    icon: "mdi-account-circle-outline",
    variant: "primary",
    title: "Profile",
    text: "Name, photo and contact details"
  },
  {
    href: "/settings/payouts",
    icon: "mdi-bank-outline",
    variant: "success",
    title: "Payouts",
    text: "Checking ···· 8812 · every Friday"
  }
];

`<div class="list-group">${rows
  .map(
    (row) => `<a href="${row.href}" class="list-group-item list-group-item-action hstack gap-3">
  ${IconTile({ icon: row.icon, variant: row.variant })}
  <span class="flex-1 min-w-0"><span class="d-block fw-semibold">${row.title}</span><span class="d-block text-sm text-subtle">${row.text}</span></span>
  <span class="mdi mdi-chevron-right text-subtle" aria-hidden="true"></span>
</a>`
  )
  .join("")}</div>`;
```

### Notifications

Circle tiles in small sizes work as type markers in a notification feed.

::html
<div class="docs-preview">
  <div class="card max-w-[420px]">
    <div class="list-group list-group-flush">
      <div class="list-group-item hstack items-start gap-3">
        <span class="icon-tile icon-tile-sm icon-tile-success icon-tile-circle" aria-hidden="true"><span class="mdi mdi-cash-check"></span></span>
        <div class="min-w-0"><div class="text-sm"><span class="fw-semibold">Payment received</span> · $1,250.00 from Alex Morgan</div><div class="text-xs text-subtle">2 minutes ago</div></div>
      </div>
      <div class="list-group-item hstack items-start gap-3">
        <span class="icon-tile icon-tile-sm icon-tile-warning icon-tile-circle" aria-hidden="true"><span class="mdi mdi-package-variant-closed-remove"></span></span>
        <div class="min-w-0"><div class="text-sm"><span class="fw-semibold">Low stock</span> · House blend 250 g has 4 bags left</div><div class="text-xs text-subtle">1 hour ago</div></div>
      </div>
      <div class="list-group-item hstack items-start gap-3">
        <span class="icon-tile icon-tile-sm icon-tile-info icon-tile-circle" aria-hidden="true"><span class="mdi mdi-account-plus-outline"></span></span>
        <div class="min-w-0"><div class="text-sm"><span class="fw-semibold">Maya Chen</span> joined your team as Manager</div><div class="text-xs text-subtle">Yesterday</div></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="list-group-item hstack items-start gap-3">
  <span class="icon-tile icon-tile-sm icon-tile-success icon-tile-circle" aria-hidden="true">
    <span class="mdi mdi-cash-check"></span>
  </span>
  <div class="min-w-0">
    <div class="text-sm"><span class="fw-semibold">Payment received</span> · $1,250.00 from Alex Morgan</div>
    <div class="text-xs text-subtle">2 minutes ago</div>
  </div>
</div>
```

```js components
import { IconTile } from "@abydahana/aksara-ui/components";

IconTile({ icon: "mdi-cash-check", variant: "success", size: "sm", shape: "circle" });
```

---

## Inside Stats

[Stat](#/components/stat) uses a small tile in its header when you pass `icon`. For a bolder KPI card, lay out a large tile next to the value yourself.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Today's sales</span><span class="icon-tile icon-tile-sm icon-tile-success" aria-hidden="true"><span class="mdi mdi-cash-register"></span></span></div>
        <div class="stat-value">$7,420</div>
        <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+12%</span><span>vs yesterday</span></div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card h-full">
        <div class="card-body hstack gap-3">
          <span class="icon-tile icon-tile-xl icon-tile-primary" aria-hidden="true"><span class="mdi mdi-storefront-outline"></span></span>
          <div class="stat stat-plain">
            <span class="stat-label">Active outlets</span>
            <div class="stat-value">5<span class="stat-unit">/ 5</span></div>
            <div class="stat-meta"><span>London, Leeds, Bristol</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-body hstack gap-3">
    <span class="icon-tile icon-tile-xl icon-tile-primary" aria-hidden="true">
      <span class="mdi mdi-storefront-outline"></span>
    </span>
    <div class="stat stat-plain">
      <span class="stat-label">Active outlets</span>
      <div class="stat-value">5<span class="stat-unit">/ 5</span></div>
    </div>
  </div>
</div>
```

```js components
import { IconTile, Stat } from "@abydahana/aksara-ui/components";

Stat({
  label: "Today's sales",
  value: "$7,420",
  delta: "+12%",
  caption: "vs yesterday",
  icon: "mdi-cash-register",
  iconVariant: "success"
});

`<div class="card"><div class="card-body hstack gap-3">
  ${IconTile({ icon: "mdi-storefront-outline", variant: "primary", size: "xl" })}
  ${Stat({ label: "Active outlets", value: 5, unit: "/ 5", caption: "London, Leeds, Bristol", plain: true })}
</div></div>`;
```

---

## Accessibility

- Most tiles sit next to text that already says what they mean, so they are decorative: keep `aria-hidden="true"`. The string component adds it whenever `label` is not set.
- When a tile stands alone and carries meaning (a status in a table cell, a file type), set `label`: the tile gets `role="img"` and an `aria-label`.
- Do not rely on the tile color alone to convey status. Pair it with a word ("Failed", "Paid") or use a distinct icon per state.
- Tiles have no interactive behavior. To make one clickable, put it inside a `<button>` or `<a>` with its own accessible name.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="icon-tile icon-tile-sm icon-tile-danger" role="img" aria-label="PDF document"><span class="mdi mdi-file-pdf-box"></span></span>
    <span class="icon-tile icon-tile-sm icon-tile-success" role="img" aria-label="Spreadsheet"><span class="mdi mdi-file-excel-outline"></span></span>
    <span class="icon-tile icon-tile-sm icon-tile-info" role="img" aria-label="Word document"><span class="mdi mdi-file-word-outline"></span></span>
  </div>
</div>
::end

```html
<span class="icon-tile icon-tile-sm icon-tile-danger" role="img" aria-label="PDF document">
  <span class="mdi mdi-file-pdf-box"></span>
</span>
```

```js components
import { IconTile } from "@abydahana/aksara-ui/components";

IconTile({ icon: "mdi-file-pdf-box", variant: "danger", size: "sm", label: "PDF document" });
```

---

## String Component

`IconTile` returns a `<span class="icon-tile">`. `icon` accepts a bare MDI name (`"mdi-rocket-launch-outline"`, the `mdi` base class is added for you) or a full class list (`"mdi mdi-plus text-sm"`). `children` is raw HTML and wins over `icon`.

```ts
import { IconTile } from "@abydahana/aksara-ui/components";

IconTile({ icon: "mdi-rocket-launch-outline", variant: "primary" });
IconTile({ icon: "mdi-bell-outline", variant: "warning", size: "sm", shape: "circle" });
IconTile({ icon: "mdi-cog-outline", outline: true, size: "lg" });
IconTile({ icon: "mdi-file-pdf-box", variant: "danger", label: "PDF document" });
IconTile({ children: "$", variant: "success", className: "fw-bold text-sm" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>icon</code></td><td><code>string</code></td><td>—</td><td>Icon class, rendered as an inner <code>&lt;span&gt;</code>.</td></tr>
      <tr><td><code>children</code></td><td><code>string</code></td><td>—</td><td>Raw HTML (SVG, text) used instead of <code>icon</code>.</td></tr>
      <tr><td><code>variant</code></td><td><code>"primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light"</code></td><td>—</td><td>Adds <code>.icon-tile-{variant}</code>. Neutral when omitted.</td></tr>
      <tr><td><code>size</code></td><td><code>"xs" | "sm" | "md" | "lg" | "xl"</code></td><td><code>"md"</code></td><td>Adds <code>.icon-tile-{size}</code> (nothing for <code>md</code>).</td></tr>
      <tr><td><code>shape</code></td><td><code>"rounded" | "circle"</code></td><td><code>"rounded"</code></td><td><code>"circle"</code> adds <code>.icon-tile-circle</code>.</td></tr>
      <tr><td><code>outline</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.icon-tile-outline</code>: transparent fill; with a <code>variant</code>, the border is tinted by the icon color.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Accessible name. Sets <code>role="img"</code> and <code>aria-label</code>; without it the tile gets <code>aria-hidden="true"</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the tile.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes. They override the generated <code>role</code> and ARIA attributes.</td></tr>
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
      <tr><td><code>.icon-tile</code></td><td><code>2.5rem</code> inline-flex square, centered content, <code>--aksara-radius-md</code>, subtle background, never shrinks.</td></tr>
      <tr><td><code>.icon-tile-xs</code> … <code>.icon-tile-xl</code></td><td>Size, icon size and radius (see Sizes).</td></tr>
      <tr><td><code>.icon-tile-{color}</code></td><td>12% tint of the color with a readable soft text color.</td></tr>
      <tr><td><code>.icon-tile-circle</code></td><td>Fully round tile.</td></tr>
      <tr><td><code>.icon-tile-outline</code></td><td>Transparent background with a subtle border.</td></tr>
    </tbody>
  </table>
</div>
::end
