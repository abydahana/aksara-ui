# Stacks

Stacks are flexbox shorthands for the most common layout job: putting things in a column or a row with even space between them. `.vstack` stacks its children vertically, `.hstack` lines them up horizontally and centers them on the cross axis, and both come with a default `1rem` gap you change with `gap-*`. Combine them with the flex helpers (`items-*`, `justify-*`, `ms-auto`, `flex-1`, `min-w-0`) and `.vr` dividers to build toolbars, card headers, list rows, form actions and media objects without writing any CSS.

::html
<div class="docs-preview">
  <div class="card max-w-[520px]">
    <div class="card-body vstack gap-3">
      <div class="hstack gap-2">
        <h3 class="m-0 text-lg fw-bold">Invite teammates</h3>
        <span class="badge badge-soft-primary ms-auto">3 of 10 seats</span>
      </div>
      <div class="hstack gap-2">
        <input type="email" class="form-control flex-1 min-w-0" placeholder="grace.lee@example.com" aria-label="Email address">
        <button type="button" class="btn btn-primary shrink-0">Send invite</button>
      </div>
      <div class="hstack gap-3">
        <span class="avatar avatar-primary avatar-sm rounded-full shrink-0">MC</span>
        <div class="vstack gap-0 min-w-0 flex-1">
          <span class="fw-semibold truncate">Maya Chen</span>
          <span class="text-sm text-subtle truncate">maya.chen@example.com</span>
        </div>
        <span class="badge badge-soft-success shrink-0">Owner</span>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-body vstack gap-3">
    <div class="hstack gap-2">
      <h3 class="m-0 text-lg fw-bold">Invite teammates</h3>
      <span class="badge badge-soft-primary ms-auto">3 of 10 seats</span>
    </div>
    <div class="hstack gap-2">
      <input type="email" class="form-control flex-1 min-w-0" placeholder="grace.lee@example.com" />
      <button type="button" class="btn btn-primary shrink-0">Send invite</button>
    </div>
  </div>
</div>
```

```js components
import { HStack, VStack, Button } from "@abydahana/aksara-ui/components";

VStack({
  gap: 3,
  className: "card-body",
  children: [
    HStack({
      gap: 2,
      children: `<h3 class="m-0 text-lg fw-bold">Invite teammates</h3>
        <span class="badge badge-soft-primary ms-auto">3 of 10 seats</span>`
    }),
    HStack({
      gap: 2,
      children: `<input type="email" class="form-control flex-1 min-w-0" placeholder="grace.lee@example.com" />
        ${Button({ label: "Send invite", variant: "primary", className: "shrink-0" })}`
    })
  ].join("")
});
```

---

## Vertical Stack

`.vstack` is a flex column. Children keep their natural height and stretch to the full width of the stack, which makes it the default wrapper for form fields, settings groups and card bodies. The space between children comes from `gap`, so you never need margins on the children themselves.

::html
<div class="docs-preview">
  <div class="vstack gap-2 max-w-[420px]">
    <div class="p-3 rounded-[12px] bg-primary/10 text-primary fw-semibold">Profile</div>
    <div class="p-3 rounded-[12px] bg-primary/10 text-primary fw-semibold">Notifications</div>
    <div class="p-3 rounded-[12px] bg-primary/10 text-primary fw-semibold">Billing</div>
  </div>
</div>
::end

```html
<div class="vstack gap-2">
  <div>Profile</div>
  <div>Notifications</div>
  <div>Billing</div>
</div>
```

```js components
import { VStack } from "@abydahana/aksara-ui/components";

VStack({
  gap: 2,
  children: `<div>Profile</div><div>Notifications</div><div>Billing</div>`
});
```

A `.vstack` also sets `align-self: stretch` on itself, so a column nested inside an `.hstack` fills the full row height. See Nested Stacks below.

---

## Horizontal Stack

`.hstack` is a flex row with `align-items: center`, so icons, avatars, text and buttons of different heights line up on one center line. Items keep their content width and do not wrap unless you add `flex-wrap`.

::html
<div class="docs-preview">
  <div class="hstack gap-2">
    <div class="p-3 rounded-[12px] bg-primary/10 text-primary fw-semibold">Overview</div>
    <div class="p-3 rounded-[12px] bg-primary/10 text-primary fw-semibold">Analytics</div>
    <div class="p-3 rounded-[12px] bg-primary/10 text-primary fw-semibold">Reports</div>
  </div>
  <div class="hstack gap-2">
    <span class="avatar avatar-success avatar-sm rounded-full">AM</span>
    <span class="fw-semibold">Alex Morgan</span>
    <span class="badge badge-soft-secondary">Admin</span>
    <button type="button" class="btn btn-soft-primary btn-sm">Message</button>
  </div>
</div>
::end

```html
<div class="hstack gap-2">
  <div>Overview</div>
  <div>Analytics</div>
  <div>Reports</div>
</div>

<div class="hstack gap-2">
  <span class="avatar avatar-success avatar-sm rounded-full">AM</span>
  <span class="fw-semibold">Alex Morgan</span>
  <span class="badge badge-soft-secondary">Admin</span>
  <button type="button" class="btn btn-soft-primary btn-sm">Message</button>
</div>
```

```js components
import { HStack, Avatar, Button } from "@abydahana/aksara-ui/components";

HStack({
  gap: 2,
  children: `<div>Overview</div><div>Analytics</div><div>Reports</div>`
});

HStack({
  gap: 2,
  children: [
    Avatar({ initials: "AM", size: "sm", variant: "success" }),
    `<span class="fw-semibold">Alex Morgan</span>`,
    `<span class="badge badge-soft-secondary">Admin</span>`,
    Button({ label: "Message", variant: "primary", soft: true, size: "sm" })
  ].join("")
});
```

---

## Gap

Both stacks default to a `1rem` gap, the same as `gap-3`. Add any `gap-*` from the spacing scale to change it. Utilities come later in the stylesheet than the stack rules, so `gap-*` always overrides the default.

::html
<div class="docs-preview">
  <div class="vstack gap-3">
    <div class="hstack gap-3"><code class="w-[64px] shrink-0 text-xs">gap-0</code><div class="hstack gap-0"><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div></div><span class="text-xs text-subtle">0</span></div>
    <div class="hstack gap-3"><code class="w-[64px] shrink-0 text-xs">gap-1</code><div class="hstack gap-1"><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div></div><span class="text-xs text-subtle">.25rem</span></div>
    <div class="hstack gap-3"><code class="w-[64px] shrink-0 text-xs">gap-2</code><div class="hstack gap-2"><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div></div><span class="text-xs text-subtle">.5rem</span></div>
    <div class="hstack gap-3"><code class="w-[64px] shrink-0 text-xs">gap-3</code><div class="hstack gap-3"><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div></div><span class="text-xs text-subtle">1rem (default)</span></div>
    <div class="hstack gap-3"><code class="w-[64px] shrink-0 text-xs">gap-4</code><div class="hstack gap-4"><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div></div><span class="text-xs text-subtle">1.5rem</span></div>
    <div class="hstack gap-3"><code class="w-[64px] shrink-0 text-xs">gap-5</code><div class="hstack gap-5"><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div><div class="p-3 rounded-[8px] bg-primary/10"></div></div><span class="text-xs text-subtle">3rem</span></div>
  </div>
</div>
::end

```html
<div class="hstack gap-0">...</div>
<div class="hstack gap-1">...</div>
<div class="hstack gap-2">...</div>
<div class="hstack">...</div>
<!-- same as gap-3 -->
<div class="hstack gap-4">...</div>
<div class="hstack gap-5">...</div>
```

```js components
import { HStack } from "@abydahana/aksara-ui/components";

HStack({ gap: 0, children: "..." });
HStack({ gap: 2, children: "..." });
HStack({ children: "..." }); // default 1rem, same as gap: 3
HStack({ gap: 5, children: "..." });
```

### Responsive and axis gaps

Prefix a gap with a breakpoint to change it on larger screens: `gap-2 md:gap-4` is tight on phones and roomier from `md` up. When items wrap, `gap-x-*` and `gap-y-*` set the column and row gaps separately.

::html
<div class="docs-preview">
  <div class="hstack flex-wrap gap-2 md:gap-4 p-3 rounded-[12px] bg-subtle">
    <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm fw-semibold">Revenue</div>
    <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm fw-semibold">Orders</div>
    <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm fw-semibold">Customers</div>
    <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm fw-semibold">Refunds</div>
  </div>
  <div class="hstack flex-wrap gap-x-4 gap-y-1 max-w-[420px] p-3 rounded-[12px] bg-subtle text-sm">
    <span>Plan: <strong>Business</strong></span>
    <span>Seats: <strong>24</strong></span>
    <span>Region: <strong>London</strong></span>
    <span>Renews: <strong>Jan 12, 2027</strong></span>
    <span>Invoice total: <strong>$1,240.00</strong></span>
  </div>
</div>
::end

```html
<div class="hstack flex-wrap gap-2 md:gap-4">...</div>

<div class="hstack flex-wrap gap-x-4 gap-y-1">
  <span>Plan: <strong>Business</strong></span>
  <span>Seats: <strong>24</strong></span>
  ...
</div>
```

```js components
import { HStack } from "@abydahana/aksara-ui/components";

HStack({ gap: 2, wrap: true, className: "md:gap-4", children: "..." });
HStack({ wrap: true, className: "gap-x-4 gap-y-1", children: "..." });
```

### Custom value (advanced)

The default comes from the `--aksara-stack-gap` custom property, which every stack declares on itself. For a one-off value outside the scale, set it on the stack with an arbitrary class such as `[--aksara-stack-gap:12px]`. Because each stack re-declares the property, a value set on a parent never leaks into nested stacks. Prefer `gap-*` in everyday markup so spacing stays on the shared scale.

```html
<div class="hstack [--aksara-stack-gap:12px]">...</div>
```

---

## Alignment

Cross-axis alignment sets how items sit perpendicular to the stack direction. An `.hstack` centers by default; add `items-start`, `items-end` or `items-stretch` to change it. The boxes below have different heights inside a fixed `h-[120px]` row so the difference is visible.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6 vstack gap-2">
      <code class="text-xs">items-start</code>
      <div class="hstack items-start gap-2 h-[120px] p-3 rounded-[12px] bg-subtle">
        <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">One</div>
        <div class="px-3 py-4 rounded-[8px] bg-primary/10 text-primary text-sm">Two</div>
        <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Three</div>
      </div>
    </div>
    <div class="col-12 md:col-6 vstack gap-2">
      <code class="text-xs">items-center (default)</code>
      <div class="hstack items-center gap-2 h-[120px] p-3 rounded-[12px] bg-subtle">
        <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">One</div>
        <div class="px-3 py-4 rounded-[8px] bg-primary/10 text-primary text-sm">Two</div>
        <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Three</div>
      </div>
    </div>
    <div class="col-12 md:col-6 vstack gap-2">
      <code class="text-xs">items-end</code>
      <div class="hstack items-end gap-2 h-[120px] p-3 rounded-[12px] bg-subtle">
        <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">One</div>
        <div class="px-3 py-4 rounded-[8px] bg-primary/10 text-primary text-sm">Two</div>
        <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Three</div>
      </div>
    </div>
    <div class="col-12 md:col-6 vstack gap-2">
      <code class="text-xs">items-stretch</code>
      <div class="hstack items-stretch gap-2 h-[120px] p-3 rounded-[12px] bg-subtle">
        <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">One</div>
        <div class="px-3 py-4 rounded-[8px] bg-primary/10 text-primary text-sm">Two</div>
        <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Three</div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="hstack items-start gap-2 h-[120px]">...</div>
<div class="hstack gap-2 h-[120px]">...</div>
<div class="hstack items-end gap-2 h-[120px]">...</div>
<div class="hstack items-stretch gap-2 h-[120px]">...</div>
```

```js components
import { HStack } from "@abydahana/aksara-ui/components";

HStack({ gap: 2, align: "start", className: "h-[120px]", children: "..." });
HStack({ gap: 2, children: "..." }); // centered
HStack({ gap: 2, align: "end", className: "h-[120px]", children: "..." });
HStack({ gap: 2, align: "stretch", className: "h-[120px]", children: "..." });
```

In a `.vstack` the cross axis is horizontal: children stretch to the full width by default, and `items-start`, `items-center` or `items-end` shrink them to their content width instead.

::html
<div class="docs-preview">
  <div class="vstack items-start gap-2 p-3 rounded-[12px] bg-subtle">
    <span class="badge badge-soft-success">Paid</span>
    <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Invoice INV-2048 for $1,240.00</div>
    <button type="button" class="btn btn-soft-primary btn-sm">Download PDF</button>
  </div>
</div>
::end

```html
<div class="vstack items-start gap-2">
  <span class="badge badge-soft-success">Paid</span>
  <div>Invoice INV-2048 for $1,240.00</div>
  <button type="button" class="btn btn-soft-primary btn-sm">Download PDF</button>
</div>
```

```js components
import { VStack, Button } from "@abydahana/aksara-ui/components";

VStack({
  gap: 2,
  align: "start",
  children: `<span class="badge badge-soft-success">Paid</span>
    <div>Invoice INV-2048 for $1,240.00</div>
    ${Button({ label: "Download PDF", variant: "primary", soft: true, size: "sm" })}`
});
```

### Baseline

Centering looks wrong when text of different sizes shares a row, such as a price with its currency and billing period. `items-baseline` lines the text up on its baseline instead.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6 vstack gap-2">
      <code class="text-xs">items-center</code>
      <div class="hstack items-center gap-1 p-3 rounded-[12px] bg-subtle">
        <span class="text-3xl fw-bold">$49</span>
        <span class="text-sm text-subtle">USD</span>
        <span class="text-sm text-subtle">/ month</span>
      </div>
    </div>
    <div class="col-12 md:col-6 vstack gap-2">
      <code class="text-xs">items-baseline</code>
      <div class="hstack items-baseline gap-1 p-3 rounded-[12px] bg-subtle">
        <span class="text-3xl fw-bold">$49</span>
        <span class="text-sm text-subtle">USD</span>
        <span class="text-sm text-subtle">/ month</span>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="hstack items-baseline gap-1">
  <span class="text-3xl fw-bold">$49</span>
  <span class="text-sm text-subtle">USD</span>
  <span class="text-sm text-subtle">/ month</span>
</div>
```

```js components
import { HStack } from "@abydahana/aksara-ui/components";

HStack({
  gap: 1,
  align: "baseline",
  children: `<span class="text-3xl fw-bold">$49</span>
    <span class="text-sm text-subtle">USD</span>
    <span class="text-sm text-subtle">/ month</span>`
});
```

### One item

`self-start`, `self-center`, `self-end`, `self-stretch` and `self-baseline` override the alignment for a single child while the rest of the stack keeps its `items-*` setting.

::html
<div class="docs-preview">
  <div class="hstack items-start gap-2 h-[120px] p-3 rounded-[12px] bg-subtle">
    <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">start</div>
    <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm self-center">self-center</div>
    <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm self-end">self-end</div>
    <div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm self-stretch">self-stretch</div>
  </div>
</div>
::end

```html
<div class="hstack items-start gap-2 h-[120px]">
  <div>start</div>
  <div class="self-center">self-center</div>
  <div class="self-end">self-end</div>
  <div class="self-stretch">self-stretch</div>
</div>
```

```js components
import { HStack } from "@abydahana/aksara-ui/components";

HStack({
  gap: 2,
  align: "start",
  className: "h-[120px]",
  children: `<div>start</div>
    <div class="self-center">self-center</div>
    <div class="self-end">self-end</div>
    <div class="self-stretch">self-stretch</div>`
});
```

---

## Distribution

`justify-*` distributes items along the main axis: the row in an `.hstack`, the column in a `.vstack` (which needs a fixed height to show it). `justify-between` is the one you will use most, for "title left, actions right" bars.

::html
<div class="docs-preview">
  <div class="vstack gap-3">
    <div class="vstack gap-1"><code class="text-xs">justify-start</code><div class="hstack justify-start gap-2 p-2 rounded-[12px] bg-subtle"><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">One</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Two</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Three</div></div></div>
    <div class="vstack gap-1"><code class="text-xs">justify-center</code><div class="hstack justify-center gap-2 p-2 rounded-[12px] bg-subtle"><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">One</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Two</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Three</div></div></div>
    <div class="vstack gap-1"><code class="text-xs">justify-end</code><div class="hstack justify-end gap-2 p-2 rounded-[12px] bg-subtle"><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">One</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Two</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Three</div></div></div>
    <div class="vstack gap-1"><code class="text-xs">justify-between</code><div class="hstack justify-between gap-2 p-2 rounded-[12px] bg-subtle"><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">One</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Two</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Three</div></div></div>
    <div class="vstack gap-1"><code class="text-xs">justify-around</code><div class="hstack justify-around gap-2 p-2 rounded-[12px] bg-subtle"><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">One</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Two</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Three</div></div></div>
    <div class="vstack gap-1"><code class="text-xs">justify-evenly</code><div class="hstack justify-evenly gap-2 p-2 rounded-[12px] bg-subtle"><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">One</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Two</div><div class="px-3 py-2 rounded-[8px] bg-primary/10 text-primary text-sm">Three</div></div></div>
  </div>
</div>
::end

```html
<div class="hstack justify-start gap-2">...</div>
<div class="hstack justify-center gap-2">...</div>
<div class="hstack justify-end gap-2">...</div>
<div class="hstack justify-between gap-2">...</div>
<div class="hstack justify-around gap-2">...</div>
<div class="hstack justify-evenly gap-2">...</div>
```

```js components
import { HStack } from "@abydahana/aksara-ui/components";

HStack({ gap: 2, justify: "center", children: "..." });
HStack({ gap: 2, justify: "between", children: "..." });
HStack({ gap: 2, justify: "evenly", children: "..." });
```

Keep a `gap-*` on a distributed stack. It is the minimum space between items when the row gets narrow, so labels never touch.

---

## Pushing Items

An auto margin soaks up all free space on its side. `ms-auto` on one item pushes it, and everything after it, to the end of the row; `me-auto` pushes everything after it away. This is more flexible than `justify-between` because the rest of the row keeps its normal gap. Both are logical properties, so they flip automatically in RTL layouts.

::html
<div class="docs-preview">
  <div class="card">
    <div class="card-body hstack gap-2">
      <span class="mdi mdi-receipt-text-outline text-xl text-primary"></span>
      <h3 class="m-0 text-lg fw-bold">Recent invoices</h3>
      <span class="badge badge-soft-secondary">12</span>
      <button type="button" class="btn btn-plain btn-sm ms-auto">Export</button>
      <button type="button" class="btn btn-primary btn-sm">New invoice</button>
    </div>
  </div>
  <div class="hstack gap-3 px-3 py-2 rounded-[12px] border">
    <span class="fw-bold me-auto">Northwind</span>
    <a href="#" class="text-sm text-body">Pricing</a>
    <a href="#" class="text-sm text-body">Docs</a>
    <a href="#" class="text-sm text-body">Sign in</a>
  </div>
</div>
::end

```html
<div class="hstack gap-2">
  <span class="mdi mdi-receipt-text-outline text-xl text-primary"></span>
  <h3 class="m-0 text-lg fw-bold">Recent invoices</h3>
  <span class="badge badge-soft-secondary">12</span>
  <button type="button" class="btn btn-plain btn-sm ms-auto">Export</button>
  <button type="button" class="btn btn-primary btn-sm">New invoice</button>
</div>

<div class="hstack gap-3">
  <span class="fw-bold me-auto">Northwind</span>
  <a href="#">Pricing</a>
  <a href="#">Docs</a>
  <a href="#">Sign in</a>
</div>
```

```js components
import { HStack, Button } from "@abydahana/aksara-ui/components";

HStack({
  gap: 2,
  className: "card-body",
  children: [
    `<span class="mdi mdi-receipt-text-outline text-xl text-primary"></span>`,
    `<h3 class="m-0 text-lg fw-bold">Recent invoices</h3>`,
    `<span class="badge badge-soft-secondary">12</span>`,
    Button({ label: "Export", plain: true, size: "sm", className: "ms-auto" }),
    Button({ label: "New invoice", variant: "primary", size: "sm" })
  ].join("")
});

HStack({
  gap: 3,
  children: `<span class="fw-bold me-auto">Northwind</span>
    <a href="#">Pricing</a><a href="#">Docs</a><a href="#">Sign in</a>`
});
```

---

## Wrapping

Stacks stay on one line by default. Add `flex-wrap` for lists of unknown length, such as tags, filters or selected recipients, so extra items move to the next line instead of overflowing.

::html
<div class="docs-preview">
  <div class="vstack gap-2 max-w-[420px]">
    <span class="text-sm fw-semibold">Skills</span>
    <div class="hstack flex-wrap gap-2">
      <span class="chip chip-soft-primary chip-sm">Product design</span>
      <span class="chip chip-soft-primary chip-sm">Figma</span>
      <span class="chip chip-soft-primary chip-sm">Design systems</span>
      <span class="chip chip-soft-primary chip-sm">User research</span>
      <span class="chip chip-soft-primary chip-sm">Prototyping</span>
      <span class="chip chip-soft-primary chip-sm">Accessibility</span>
      <span class="chip chip-soft-primary chip-sm">TypeScript</span>
      <span class="chip chip-outline-secondary chip-sm"><span class="chip-icon mdi mdi-plus"></span><span class="chip-label">Add skill</span></span>
    </div>
  </div>
</div>
::end

```html
<div class="hstack flex-wrap gap-2">
  <span class="chip chip-soft-primary chip-sm">Product design</span>
  <span class="chip chip-soft-primary chip-sm">Figma</span>
  <span class="chip chip-soft-primary chip-sm">Design systems</span>
  ...
</div>
```

```js components
import { HStack, Chip } from "@abydahana/aksara-ui/components";

const skills = ["Product design", "Figma", "Design systems", "User research", "Prototyping"];

HStack({
  gap: 2,
  wrap: true,
  children: skills.map((skill) => Chip({ as: "span", variant: "primary", size: "sm", children: skill })).join("")
});
```

---

## Dividers

`.vr` is a 1px vertical rule that stretches to the height of the row. Drop it between groups in an `.hstack`; the stack gap gives it equal space on both sides. It works for toolbar groups as well as inline metadata.

::html
<div class="docs-preview">
  <div class="hstack gap-1 p-2 rounded-[12px] border">
    <button type="button" class="btn btn-ghost btn-icon btn-sm" aria-label="Bold"><span class="mdi mdi-format-bold"></span></button>
    <button type="button" class="btn btn-ghost btn-icon btn-sm" aria-label="Italic"><span class="mdi mdi-format-italic"></span></button>
    <button type="button" class="btn btn-ghost btn-icon btn-sm" aria-label="Underline"><span class="mdi mdi-format-underline"></span></button>
    <div class="vr mx-1" role="separator" aria-orientation="vertical"></div>
    <button type="button" class="btn btn-ghost btn-icon btn-sm" aria-label="Bulleted list"><span class="mdi mdi-format-list-bulleted"></span></button>
    <button type="button" class="btn btn-ghost btn-icon btn-sm" aria-label="Numbered list"><span class="mdi mdi-format-list-numbered"></span></button>
    <div class="vr mx-1" role="separator" aria-orientation="vertical"></div>
    <button type="button" class="btn btn-ghost btn-icon btn-sm" aria-label="Insert link"><span class="mdi mdi-link-variant"></span></button>
    <button type="button" class="btn btn-soft-primary btn-sm ms-auto">Publish</button>
  </div>
  <div class="hstack gap-2 text-sm text-subtle">
    <span class="avatar avatar-info avatar-xs rounded-full">SP</span>
    <span class="text-body fw-semibold">Sofia Patel</span>
    <div class="vr" role="separator" aria-orientation="vertical"></div>
    <span>3 min read</span>
    <div class="vr" role="separator" aria-orientation="vertical"></div>
    <span>Updated 2h ago</span>
  </div>
</div>
::end

```html
<div class="hstack gap-1">
  <button type="button" class="btn btn-ghost btn-icon btn-sm" aria-label="Bold">
    <span class="mdi mdi-format-bold"></span>
  </button>
  ...
  <div class="vr mx-1" role="separator" aria-orientation="vertical"></div>
  ...
</div>

<div class="hstack gap-2 text-sm text-subtle">
  <span class="text-body fw-semibold">Sofia Patel</span>
  <div class="vr" role="separator" aria-orientation="vertical"></div>
  <span>3 min read</span>
  <div class="vr" role="separator" aria-orientation="vertical"></div>
  <span>Updated 2h ago</span>
</div>
```

```js components
import { HStack, Vr } from "@abydahana/aksara-ui/components";

HStack({
  gap: 2,
  className: "text-sm text-subtle",
  children: [
    `<span class="text-body fw-semibold">Sofia Patel</span>`,
    Vr(),
    `<span>3 min read</span>`,
    Vr(),
    `<span>Updated 2h ago</span>`
  ].join("")
});

Vr({ className: "mx-1" }); // extra space around a toolbar divider
```

`Vr()` renders `role="separator"` with `aria-orientation="vertical"`. If the rule is purely decorative (as between metadata items), you can add `aria-hidden="true"` in your own markup instead.

---

## Responsive Stacks

Most rows are too wide for a phone. `vstack md:hstack` stacks items vertically on small screens and switches to a centered row from the `md` breakpoint (48rem) up. In the column, buttons and fields stretch to the full width, which gives large touch targets on mobile.

::html
<div class="docs-preview">
  <div class="vstack md:hstack p-3 rounded-[12px] border">
    <div class="vstack gap-1 flex-1">
      <span class="fw-semibold">Delete workspace</span>
      <span class="text-sm text-subtle">All projects, files and invoices for Acme London will be removed.</span>
    </div>
    <button type="button" class="btn btn-plain">Cancel</button>
    <button type="button" class="btn btn-danger order-first md:order-0">Delete workspace</button>
  </div>
</div>
::end

```html
<div class="vstack md:hstack">
  <div class="vstack gap-1 flex-1">
    <span class="fw-semibold">Delete workspace</span>
    <span class="text-sm text-subtle">All projects, files and invoices will be removed.</span>
  </div>
  <button type="button" class="btn btn-plain">Cancel</button>
  <button type="button" class="btn btn-danger order-first md:order-0">Delete workspace</button>
</div>
```

```js components
import { Stack, Button } from "@abydahana/aksara-ui/components";

Stack({
  horizontalFrom: "md",
  children: [
    `<div class="vstack gap-1 flex-1">...</div>`,
    Button({ label: "Cancel", plain: true }),
    Button({ label: "Delete workspace", variant: "danger", className: "order-first md:order-0" })
  ].join("")
});
```

`order-first` moves the destructive action to the top on phones, where the main action usually goes; `md:order-0` restores the source order in the row. `order-*` only changes the visual order. Keyboard and screen reader users still follow the source order, so keep it logical.

### Custom gap on a responsive stack

Gap and alignment utilities on a responsive stack apply in both layouts: `vstack md:hstack gap-2` keeps an `0.5rem` gap as a column and as a row, and an `items-*` class overrides the row's centering. Use responsive gaps (`gap-2 md:gap-4`) when the two layouts need different spacing.

::html
<div class="docs-preview">
  <div class="vstack md:hstack gap-2">
    <div class="vstack gap-1 flex-1 p-3 rounded-[12px] bg-primary/10">
      <span class="text-sm text-subtle">Revenue</span>
      <span class="text-2xl fw-bold">$48,120.00</span>
      <span class="text-xs text-success">+12.4% vs last month</span>
    </div>
    <div class="vstack gap-1 flex-1 p-3 rounded-[12px] bg-primary/10">
      <span class="text-sm text-subtle">Orders</span>
      <span class="text-2xl fw-bold">1,284</span>
      <span class="text-xs text-success">+3.1% vs last month</span>
    </div>
    <div class="vstack gap-1 flex-1 p-3 rounded-[12px] bg-primary/10">
      <span class="text-sm text-subtle">Refunds</span>
      <span class="text-2xl fw-bold">$1,240.00</span>
      <span class="text-xs text-danger">+0.8% vs last month</span>
    </div>
  </div>
</div>
::end

```html
<div class="vstack md:hstack gap-2">
  <div class="vstack gap-1 flex-1">
    <span class="text-sm text-subtle">Revenue</span>
    <span class="text-2xl fw-bold">$48,120.00</span>
    <span class="text-xs text-success">+12.4% vs last month</span>
  </div>
  ...
</div>
```

```js components
import { Stack, VStack } from "@abydahana/aksara-ui/components";

const stat = (label, value, change) =>
  VStack({
    gap: 1,
    className: "flex-1",
    children: `<span class="text-sm text-subtle">${label}</span>
      <span class="text-2xl fw-bold">${value}</span>
      <span class="text-xs text-success">${change}</span>`
  });

Stack({
  horizontalFrom: "md",
  gap: 2,
  children: stat("Revenue", "$48,120.00", "+12.4% vs last month") + stat("Orders", "1,284", "+3.1% vs last month")
});
```

---

## Filling And Truncation

`flex-1` makes an item take all the space left in the row, which is how a list row keeps its avatar and button at fixed size while the text fills the middle. Flex items will not shrink below their content width by default, so long text pushes the button out of the row. Add `min-w-0` to the growing item and `truncate` to its text to cut it with an ellipsis. Use `shrink-0` on avatars and buttons so they never get squeezed.

::html
<div class="docs-preview">
  <div class="list-group max-w-[420px]">
    <div class="list-group-item hstack gap-3">
      <span class="avatar avatar-primary avatar-sm rounded-full shrink-0">DK</span>
      <div class="vstack gap-0 flex-1 min-w-0">
        <span class="fw-semibold truncate">Daniel Kim</span>
        <span class="text-sm text-subtle truncate">Shared "Q4 revenue forecast - London and Manchester offices (final).xlsx"</span>
      </div>
      <button type="button" class="btn btn-soft-primary btn-sm shrink-0">Open</button>
    </div>
    <div class="list-group-item hstack gap-3">
      <span class="avatar avatar-warning avatar-sm rounded-full shrink-0">GL</span>
      <div class="vstack gap-0 flex-1 min-w-0">
        <span class="fw-semibold truncate">Grace Lee</span>
        <span class="text-sm text-subtle truncate">Commented on "Checkout redesign: payment step and order summary"</span>
      </div>
      <button type="button" class="btn btn-soft-primary btn-sm shrink-0">Reply</button>
    </div>
  </div>
</div>
::end

```html
<div class="list-group-item hstack gap-3">
  <span class="avatar avatar-primary avatar-sm rounded-full shrink-0">DK</span>
  <div class="vstack gap-0 flex-1 min-w-0">
    <span class="fw-semibold truncate">Daniel Kim</span>
    <span class="text-sm text-subtle truncate"
      >Shared "Q4 revenue forecast - London and Manchester offices (final).xlsx"</span
    >
  </div>
  <button type="button" class="btn btn-soft-primary btn-sm shrink-0">Open</button>
</div>
```

```js components
import { HStack, VStack, Avatar, Button } from "@abydahana/aksara-ui/components";

HStack({
  gap: 3,
  className: "list-group-item",
  children: [
    Avatar({ initials: "DK", size: "sm" }),
    VStack({
      gap: 0,
      className: "flex-1 min-w-0",
      children: `<span class="fw-semibold truncate">Daniel Kim</span>
        <span class="text-sm text-subtle truncate">Shared "Q4 revenue forecast (final).xlsx"</span>`
    }),
    Button({ label: "Open", variant: "primary", soft: true, size: "sm", className: "shrink-0" })
  ].join("")
});
```

| Class       | Flex value       | Use it for                                                  |
| ----------- | ---------------- | ----------------------------------------------------------- |
| `flex-1`    | `1 1 0%`         | Items that share the free space equally (stat cards, text)  |
| `flex-auto` | `1 1 auto`       | Items that grow but start from their content width          |
| `flex-none` | `none`           | Items that must keep their exact size                       |
| `shrink-0`  | `flex-shrink: 0` | Avatars, icons and buttons next to growing text             |
| `min-w-0`   | `min-width: 0`   | Letting a flex item shrink below its content for `truncate` |

---

## Nested Stacks

Stacks compose. The classic media object is an `.hstack` with an avatar, a `.vstack` for the text, and actions. Use `items-start` on the row so the avatar stays at the top when the comment wraps over several lines.

::html
<div class="docs-preview">
  <div class="hstack items-start gap-3 p-3 rounded-[12px] border max-w-[560px]">
    <span class="avatar avatar-success avatar-sm rounded-full shrink-0">MC</span>
    <div class="vstack gap-2 flex-1 min-w-0">
      <div class="hstack gap-2 text-sm">
        <span class="fw-semibold">Maya Chen</span>
        <span class="text-subtle">Product Designer</span>
        <div class="vr" role="separator" aria-orientation="vertical"></div>
        <span class="text-subtle">2h ago</span>
      </div>
      <p class="m-0 text-sm">The new checkout flow looks great. Can we move the promo code field below the order summary so it does not distract from the pay button?</p>
      <div class="hstack gap-1">
        <button type="button" class="btn btn-ghost btn-sm"><span class="mdi mdi-reply-outline"></span> Reply</button>
        <button type="button" class="btn btn-ghost btn-sm"><span class="mdi mdi-thumb-up-outline"></span> 4</button>
      </div>
    </div>
    <button type="button" class="btn btn-ghost btn-icon btn-sm shrink-0" aria-label="More actions"><span class="mdi mdi-dots-horizontal"></span></button>
  </div>
</div>
::end

```html
<div class="hstack items-start gap-3">
  <span class="avatar avatar-success avatar-sm rounded-full shrink-0">MC</span>
  <div class="vstack gap-2 flex-1 min-w-0">
    <div class="hstack gap-2 text-sm">
      <span class="fw-semibold">Maya Chen</span>
      <span class="text-subtle">Product Designer</span>
      <div class="vr" role="separator" aria-orientation="vertical"></div>
      <span class="text-subtle">2h ago</span>
    </div>
    <p class="m-0 text-sm">The new checkout flow looks great...</p>
    <div class="hstack gap-1">
      <button type="button" class="btn btn-ghost btn-sm">Reply</button>
      <button type="button" class="btn btn-ghost btn-sm">4</button>
    </div>
  </div>
  <button type="button" class="btn btn-ghost btn-icon btn-sm shrink-0" aria-label="More actions">
    <span class="mdi mdi-dots-horizontal"></span>
  </button>
</div>
```

```js components
import { HStack, VStack, Vr, Avatar, Button } from "@abydahana/aksara-ui/components";

HStack({
  gap: 3,
  align: "start",
  children: [
    Avatar({ initials: "MC", size: "sm", variant: "success" }),
    VStack({
      gap: 2,
      className: "flex-1 min-w-0",
      children: [
        HStack({
          gap: 2,
          className: "text-sm",
          children: `<span class="fw-semibold">Maya Chen</span><span class="text-subtle">Product Designer</span>${Vr()}<span class="text-subtle">2h ago</span>`
        }),
        `<p class="m-0 text-sm">The new checkout flow looks great...</p>`,
        HStack({
          gap: 1,
          children:
            Button({ label: "Reply", ghost: true, size: "sm" }) + Button({ label: "4", ghost: true, size: "sm" })
        })
      ].join("")
    }),
    Button({
      ghost: true,
      size: "sm",
      className: "btn-icon shrink-0",
      children: `<span class="mdi mdi-dots-horizontal"></span>`,
      attributes: { "aria-label": "More actions" }
    })
  ].join("")
});
```

A `.vstack` nested in an `.hstack` has `align-self: stretch`, so it always fills the row height regardless of `items-*` on the parent. That is usually what you want (the column lines up with its neighbours). To center a short column as a block, add `self-center` to it; to center its content, add `justify-center`.

---

## Full-Height Layout

Give a `.vstack` the full height of its container with `h-full` and put `mt-auto` on the last child: it is pushed to the bottom, however short the content above it. Cards in a row then have their buttons on one line even when their descriptions differ in length.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="card h-[280px]">
        <div class="vstack gap-2 h-full p-4">
          <span class="text-sm fw-semibold text-primary">Starter</span>
          <div class="hstack items-baseline gap-1"><span class="text-3xl fw-bold">$12</span><span class="text-sm text-subtle">/ month</span></div>
          <p class="m-0 text-sm text-subtle">For freelancers getting their first projects off the ground.</p>
          <button type="button" class="btn btn-soft-primary mt-auto">Choose Starter</button>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card h-[280px]">
        <div class="vstack gap-2 h-full p-4">
          <span class="text-sm fw-semibold text-primary">Business</span>
          <div class="hstack items-baseline gap-1"><span class="text-3xl fw-bold">$49</span><span class="text-sm text-subtle">/ month</span></div>
          <p class="m-0 text-sm text-subtle">For growing teams in London, Manchester and New York that need shared workspaces, SSO, audit logs and priority support.</p>
          <button type="button" class="btn btn-primary mt-auto">Choose Business</button>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card h-[280px]">
  <div class="vstack gap-2 h-full p-4">
    <span class="text-sm fw-semibold text-primary">Starter</span>
    <div class="hstack items-baseline gap-1">
      <span class="text-3xl fw-bold">$12</span>
      <span class="text-sm text-subtle">/ month</span>
    </div>
    <p class="m-0 text-sm text-subtle">For freelancers getting their first projects off the ground.</p>
    <button type="button" class="btn btn-soft-primary mt-auto">Choose Starter</button>
  </div>
</div>
```

```js components
import { VStack, HStack, Button } from "@abydahana/aksara-ui/components";

`<div class="card h-[280px]">${VStack({
  gap: 2,
  className: "h-full p-4",
  children: [
    `<span class="text-sm fw-semibold text-primary">Starter</span>`,
    HStack({
      gap: 1,
      align: "baseline",
      children: `<span class="text-3xl fw-bold">$12</span><span class="text-sm text-subtle">/ month</span>`
    }),
    `<p class="m-0 text-sm text-subtle">For freelancers getting their first projects off the ground.</p>`,
    Button({ label: "Choose Starter", variant: "primary", soft: true, className: "mt-auto" })
  ].join("")
})}</div>`;
```

`h-full` needs a parent with a definite height (a fixed `h-[...]`, a grid cell or a stretched flex item). Inside a `.row`, columns stretch to the tallest one, so you can drop the fixed height and use `h-full` on the card as well.

---

## Common Recipes

### Inline form

An input that fills the row and a button that keeps its width. `min-w-0` lets the input shrink on narrow screens.

::html
<div class="docs-preview">
  <div class="vstack gap-2 max-w-[480px]">
    <label class="form-label m-0" for="stack-newsletter">Product updates</label>
    <div class="hstack gap-2">
      <input id="stack-newsletter" type="email" class="form-control flex-1 min-w-0" placeholder="you@example.com">
      <button type="button" class="btn btn-primary shrink-0">Subscribe</button>
    </div>
    <span class="text-xs text-subtle">One email a month. Unsubscribe any time.</span>
  </div>
</div>
::end

```html
<div class="hstack gap-2">
  <input type="email" class="form-control flex-1 min-w-0" placeholder="you@example.com" />
  <button type="button" class="btn btn-primary shrink-0">Subscribe</button>
</div>
```

```js components
import { HStack, Button } from "@abydahana/aksara-ui/components";

HStack({
  gap: 2,
  as: "form",
  children: `<input type="email" class="form-control flex-1 min-w-0" placeholder="you@example.com" />
    ${Button({ label: "Subscribe", type: "submit", variant: "primary", className: "shrink-0" })}`
});
```

### Card footer actions

`justify-end` groups the actions at the end of the footer, with the primary action last.

::html
<div class="docs-preview">
  <div class="card max-w-[520px]">
    <div class="card-body vstack gap-2">
      <h3 class="m-0 text-lg fw-bold">Billing address</h3>
      <p class="m-0 text-sm text-subtle">221B Baker Street, London NW1 6XE, United Kingdom</p>
    </div>
    <div class="card-footer hstack justify-end gap-2">
      <button type="button" class="btn btn-plain">Cancel</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
::end

```html
<div class="card-footer hstack justify-end gap-2">
  <button type="button" class="btn btn-plain">Cancel</button>
  <button type="button" class="btn btn-primary">Save changes</button>
</div>
```

```js components
import { HStack, Button } from "@abydahana/aksara-ui/components";

HStack({
  gap: 2,
  justify: "end",
  as: "footer",
  className: "card-footer",
  children: Button({ label: "Cancel", plain: true }) + Button({ label: "Save changes", variant: "primary" })
});
```

### List item with trailing meta

An icon, a label that fills the row, and a status pushed to the end.

::html
<div class="docs-preview">
  <div class="list-group max-w-[420px]">
    <div class="list-group-item hstack gap-3">
      <span class="mdi mdi-credit-card-outline text-xl text-primary shrink-0"></span>
      <div class="vstack gap-0 flex-1 min-w-0"><span class="fw-semibold">Visa ending 4242</span><span class="text-xs text-subtle">Expires 08/28</span></div>
      <span class="badge badge-soft-success">Default</span>
    </div>
    <div class="list-group-item hstack gap-3">
      <span class="mdi mdi-bank-outline text-xl text-primary shrink-0"></span>
      <div class="vstack gap-0 flex-1 min-w-0"><span class="fw-semibold">Business account</span><span class="text-xs text-subtle">Ending 0921</span></div>
      <span class="badge badge-soft-warning">Verifying</span>
    </div>
  </div>
</div>
::end

```html
<div class="list-group-item hstack gap-3">
  <span class="mdi mdi-credit-card-outline text-xl text-primary shrink-0"></span>
  <div class="vstack gap-0 flex-1 min-w-0">
    <span class="fw-semibold">Visa ending 4242</span>
    <span class="text-xs text-subtle">Expires 08/28</span>
  </div>
  <span class="badge badge-soft-success">Default</span>
</div>
```

```js components
import { HStack, VStack } from "@abydahana/aksara-ui/components";

HStack({
  gap: 3,
  className: "list-group-item",
  children: `<span class="mdi mdi-credit-card-outline text-xl text-primary shrink-0"></span>
    ${VStack({ gap: 0, className: "flex-1 min-w-0", children: `<span class="fw-semibold">Visa ending 4242</span><span class="text-xs text-subtle">Expires 08/28</span>` })}
    <span class="badge badge-soft-success">Default</span>`
});
```

### App bar

A simple top bar: brand, navigation, then search and account pushed to the end with `ms-auto`. For a full responsive navigation with a collapsing menu, use the [Navbar](#/components/navbar) component.

::html
<div class="docs-preview">
  <div class="hstack gap-3 px-3 py-2 rounded-[12px] border">
    <span class="hstack gap-2 fw-bold"><span class="mdi mdi-hexagon-multiple text-xl text-primary"></span>Northwind</span>
    <div class="vr" role="separator" aria-orientation="vertical"></div>
    <nav class="hstack gap-1" aria-label="Main">
      <a href="#" class="btn btn-soft-primary btn-sm">Dashboard</a>
      <a href="#" class="btn btn-ghost btn-sm">Orders</a>
      <a href="#" class="btn btn-ghost btn-sm">Customers</a>
    </nav>
    <button type="button" class="btn btn-ghost btn-icon btn-sm ms-auto" aria-label="Search"><span class="mdi mdi-magnify"></span></button>
    <button type="button" class="btn btn-ghost btn-icon btn-sm" aria-label="Notifications"><span class="mdi mdi-bell-outline"></span></button>
    <span class="avatar avatar-primary avatar-sm rounded-full shrink-0">AM</span>
  </div>
</div>
::end

```html
<div class="hstack gap-3">
  <span class="hstack gap-2 fw-bold">
    <span class="mdi mdi-hexagon-multiple text-xl text-primary"></span>Northwind
  </span>
  <div class="vr" role="separator" aria-orientation="vertical"></div>
  <nav class="hstack gap-1" aria-label="Main">
    <a href="#" class="btn btn-soft-primary btn-sm">Dashboard</a>
    <a href="#" class="btn btn-ghost btn-sm">Orders</a>
    <a href="#" class="btn btn-ghost btn-sm">Customers</a>
  </nav>
  <button type="button" class="btn btn-ghost btn-icon btn-sm ms-auto" aria-label="Search">
    <span class="mdi mdi-magnify"></span>
  </button>
  <span class="avatar avatar-primary avatar-sm rounded-full shrink-0">AM</span>
</div>
```

```js components
import { HStack, Vr, Avatar, Button } from "@abydahana/aksara-ui/components";

HStack({
  gap: 3,
  as: "header",
  children: [
    `<span class="fw-bold">Northwind</span>`,
    Vr(),
    HStack({
      gap: 1,
      as: "nav",
      attributes: { "aria-label": "Main" },
      children:
        Button({ label: "Dashboard", href: "#", variant: "primary", soft: true, size: "sm" }) +
        Button({ label: "Orders", href: "#", ghost: true, size: "sm" })
    }),
    Button({
      ghost: true,
      size: "sm",
      className: "btn-icon ms-auto",
      children: `<span class="mdi mdi-magnify"></span>`,
      attributes: { "aria-label": "Search" }
    }),
    Avatar({ initials: "AM", size: "sm" })
  ].join("")
});
```

---

## Stack Vs Grid

Stacks size items by their content and line them up in one direction. Reach for the [grid](#/layout/grid) (`row` with `col-*`) when items should take fixed fractions of the width or change their column count per breakpoint, such as a card gallery or a form with two fields per row.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-4"><div class="p-3 rounded-[12px] bg-primary/10 text-primary text-sm fw-semibold">col-12 md:col-4</div></div>
    <div class="col-12 md:col-4"><div class="p-3 rounded-[12px] bg-primary/10 text-primary text-sm fw-semibold">col-12 md:col-4</div></div>
    <div class="col-12 md:col-4"><div class="p-3 rounded-[12px] bg-primary/10 text-primary text-sm fw-semibold">col-12 md:col-4</div></div>
  </div>
</div>
::end

```html
<div class="row gap-3">
  <div class="col-12 md:col-4">...</div>
  <div class="col-12 md:col-4">...</div>
  <div class="col-12 md:col-4">...</div>
</div>
```

```js components
import { Stack } from "@abydahana/aksara-ui/components";

// Stacks have no columns. Write the grid as markup, and use stacks inside each column.
const column = (title) => `<div class="col-12 md:col-4">${Stack({ gap: 2, children: title })}</div>`;
`<div class="row gap-3">${column("London") + column("Manchester") + column("New York")}</div>`;
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Use a stack for</th><th>Use the grid for</th></tr>
    </thead>
    <tbody>
      <tr><td>Toolbars, card headers and footers, button groups</td><td>Page sections and dashboards with fixed column widths</td></tr>
      <tr><td>A list row: avatar, text, action</td><td>Card galleries that go 1, 2, then 3 columns wide</td></tr>
      <tr><td>Form fields stacked in a column, inline forms</td><td>Forms with two or three fields side by side</td></tr>
      <tr><td>Tags and chips that wrap at any width</td><td>Items that must line up in columns across rows</td></tr>
    </tbody>
  </table>
</div>
::end

---

## String Component

`Stack` renders a `.vstack` or `.hstack` and maps each prop to its utility class. `HStack` and `VStack` fix the direction, and `Vr` renders the divider. `children` is raw HTML, so you can pass strings or the output of other string components. The lowercase aliases `stack`, `hStack`, `vStack` and `vr` are also exported.

```ts
import { Stack, HStack, VStack, Vr } from "@abydahana/aksara-ui/components";

Stack({ horizontalFrom: "md", children: "..." }); // <div class="vstack md:hstack">
HStack({ gap: 2, justify: "between", children: "..." }); // <div class="hstack gap-2 justify-between">
VStack({ gap: 1, align: "start", as: "section", children: "..." }); // <section class="vstack gap-1 items-start">
Vr({ className: "mx-1" }); // <div class="vr mx-1" role="separator" aria-orientation="vertical"></div>
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>children</code></td><td><code>string</code></td><td><code>""</code></td><td>Raw HTML placed inside the stack.</td></tr>
      <tr><td><code>direction</code></td><td><code>"vertical" | "horizontal"</code></td><td><code>"vertical"</code></td><td><code>.vstack</code> or <code>.hstack</code>. <code>Stack</code> only; <code>HStack</code> and <code>VStack</code> set it for you.</td></tr>
      <tr><td><code>horizontalFrom</code></td><td><code>"sm" | "md" | "lg" | "xl" | "2xl"</code></td><td>—</td><td>Vertical below this breakpoint, a row from it up (adds <code>{bp}:hstack</code>). Ignored when <code>direction</code> is <code>"horizontal"</code>. Not available on <code>HStack</code>.</td></tr>
      <tr><td><code>gap</code></td><td><code>0 | 1 | 2 | 3 | 4 | 5</code></td><td>—</td><td>Adds <code>gap-{n}</code>. Without it the stack uses its default <code>1rem</code> (same as <code>gap-3</code>).</td></tr>
      <tr><td><code>align</code></td><td><code>"start" | "center" | "end" | "stretch" | "baseline"</code></td><td>—</td><td>Cross-axis alignment, <code>items-{align}</code>. An hstack centers by default; a vstack stretches.</td></tr>
      <tr><td><code>justify</code></td><td><code>"start" | "center" | "end" | "between" | "around" | "evenly"</code></td><td>—</td><td>Main-axis distribution, <code>justify-{justify}</code>.</td></tr>
      <tr><td><code>wrap</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>flex-wrap</code> so items move to the next line.</td></tr>
      <tr><td><code>as</code></td><td><code>"div" | "section" | "header" | "footer" | "nav" | "ul" | "ol" | "form" | "span"</code></td><td><code>"div"</code></td><td>Element to render. Any other value falls back to <code>div</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes, e.g. <code>"card-body"</code>, <code>"md:gap-4"</code> or <code>"flex-1 min-w-0"</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes such as <code>id</code>, <code>aria-label</code> or <code>data-*</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

`Vr` accepts a single prop, `className` (extra classes on the rule). It always renders `role="separator"` and `aria-orientation="vertical"`.

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.vstack</code></td><td>Flex column with <code>align-self: stretch</code> and a <code>1rem</code> gap.</td></tr>
      <tr><td><code>.hstack</code></td><td>Flex row with <code>align-items: center</code> and a <code>1rem</code> gap.</td></tr>
      <tr><td><code>.{bp}:hstack</code></td><td>Switch to a row from a breakpoint up: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>. Resets the gap to <code>1rem</code>.</td></tr>
      <tr><td><code>.vr</code></td><td>1px vertical rule that stretches to the row height. Use it inside an <code>.hstack</code>.</td></tr>
      <tr><td><code>.gap-{0-5}</code></td><td>Space between items: <code>0</code>, <code>.25rem</code>, <code>.5rem</code>, <code>1rem</code>, <code>1.5rem</code>, <code>3rem</code>. Overrides the stack default.</td></tr>
      <tr><td><code>.gap-x-{0-5}</code>, <code>.gap-y-{0-5}</code></td><td>Column gap and row gap separately, for wrapping stacks.</td></tr>
      <tr><td><code>.{bp}:gap-{0-5}</code></td><td>Gap from a breakpoint up, e.g. <code>md:gap-4</code>.</td></tr>
      <tr><td><code>[--aksara-stack-gap:value]</code></td><td>Advanced: a custom gap outside the scale, set on the stack itself.</td></tr>
      <tr><td><code>.items-start</code>, <code>.items-center</code>, <code>.items-end</code>, <code>.items-stretch</code>, <code>.items-baseline</code></td><td>Cross-axis alignment of all items.</td></tr>
      <tr><td><code>.self-start</code>, <code>.self-center</code>, <code>.self-end</code>, <code>.self-stretch</code>, <code>.self-baseline</code>, <code>.self-auto</code></td><td>Cross-axis alignment of a single item.</td></tr>
      <tr><td><code>.justify-start</code>, <code>.justify-center</code>, <code>.justify-end</code>, <code>.justify-between</code>, <code>.justify-around</code>, <code>.justify-evenly</code></td><td>Main-axis distribution.</td></tr>
      <tr><td><code>.flex-wrap</code></td><td>Let items wrap onto the next line.</td></tr>
      <tr><td><code>.flex-1</code>, <code>.flex-auto</code>, <code>.flex-none</code></td><td>Grow to share free space, grow from content width, or keep a fixed size.</td></tr>
      <tr><td><code>.shrink-0</code></td><td>Never shrink below the content width.</td></tr>
      <tr><td><code>.min-w-0</code></td><td>Allow a flex item to shrink below its content, needed for <code>.truncate</code>.</td></tr>
      <tr><td><code>.truncate</code></td><td>Single line with an ellipsis.</td></tr>
      <tr><td><code>.ms-auto</code>, <code>.me-auto</code></td><td>Push the item (and those after it) to the end, or push the following items away. Logical, so RTL-aware.</td></tr>
      <tr><td><code>.mt-auto</code></td><td>Push an item to the bottom of a <code>.vstack</code> with a definite height (<code>h-full</code>).</td></tr>
      <tr><td><code>.order-first</code>, <code>.order-last</code>, <code>.order-0</code></td><td>Change the visual order of one item (<code>-9999</code>, <code>9999</code>, <code>0</code>). Responsive with a prefix, e.g. <code>md:order-0</code>.</td></tr>
      <tr><td><code>.md:flex-row</code>, <code>.md:items-center</code></td><td>Turn a <code>.vstack</code> into a row from <code>md</code> up while keeping its own <code>gap-*</code>.</td></tr>
    </tbody>
  </table>
</div>
::end
