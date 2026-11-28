# Indicator

An indicator pins a small count or dot to the corner of another element: unread notifications on a bell, new messages on an inbox button, online status on an avatar, or a "something changed" dot on a tab. Wrap the target in `.indicator` and add an `.indicator-item` after it. The item straddles the top-end corner by default, mirrors in RTL, and gets a ring in the color of the surface it sits on (page background, or the card / list / modal surface inside those) so it stays readable on any target. Override it with `[--aksara-indicator-ring:…]`.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Notifications, 3 unread"><span class="mdi mdi-bell-outline"></span></button>
      <span class="indicator-item" aria-hidden="true">3</span>
    </span>
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Messages, 12 unread"><span class="mdi mdi-message-outline"></span></button>
      <span class="indicator-item indicator-primary" aria-hidden="true">12</span>
    </span>
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Cart, 2 items"><span class="mdi mdi-cart-outline"></span></button>
      <span class="indicator-item indicator-dark" aria-hidden="true">2</span>
    </span>
  </div>
</div>
::end

```html
<span class="indicator">
  <button type="button" class="btn btn-ghost btn-icon" aria-label="Notifications, 3 unread">
    <span class="mdi mdi-bell-outline"></span>
  </button>
  <span class="indicator-item" aria-hidden="true">3</span>
</span>
```

```js components
import { Indicator } from "@abydahana/aksara-ui/components";

Indicator({
  children: `<button type="button" class="btn btn-ghost btn-icon" aria-label="Notifications, 3 unread">
    <span class="mdi mdi-bell-outline"></span>
  </button>`,
  content: 3
});
```

The item is red (`danger`) unless you add a color class. It is `aria-hidden`, so put the count in the accessible name of the target, as the `aria-label` does here.

---

## Counts And Max

Counts grow into a pill as digits are added. Cap long numbers so the pill stays small: the string component shows anything above `max` (99 by default) as `99+`. Short words such as "New" also fit.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Notifications, 1 unread"><span class="mdi mdi-bell-outline"></span></button>
      <span class="indicator-item" aria-hidden="true">1</span>
    </span>
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Notifications, 24 unread"><span class="mdi mdi-bell-outline"></span></button>
      <span class="indicator-item" aria-hidden="true">24</span>
    </span>
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Notifications, more than 99 unread"><span class="mdi mdi-bell-outline"></span></button>
      <span class="indicator-item" aria-hidden="true">99+</span>
    </span>
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Orders, more than 9 new"><span class="mdi mdi-package-variant-closed"></span></button>
      <span class="indicator-item indicator-warning" aria-hidden="true">9+</span>
    </span>
    <span class="indicator">
      <button type="button" class="btn btn-soft-primary">Changelog</button>
      <span class="indicator-item indicator-success" aria-hidden="true">New</span>
    </span>
  </div>
</div>
::end

```html
<span class="indicator">
  <button type="button" class="btn btn-ghost btn-icon" aria-label="Notifications, more than 99 unread">
    <span class="mdi mdi-bell-outline"></span>
  </button>
  <span class="indicator-item" aria-hidden="true">99+</span>
</span>
```

```js components
import { Indicator } from "@abydahana/aksara-ui/components";

const bell = (label) =>
  `<button type="button" class="btn btn-ghost btn-icon" aria-label="${label}"><span class="mdi mdi-bell-outline"></span></button>`;

Indicator({ children: bell("Notifications, more than 99 unread"), content: 148 }); // shows "99+"
Indicator({ children: bell("Orders, more than 9 new"), content: 12, max: 9, variant: "warning" }); // "9+"
Indicator({
  children: '<button type="button" class="btn btn-soft-primary">Changelog</button>',
  content: "New",
  variant: "success"
});
```

`max` only applies to numbers. Strings are shown as given.

---

## Dots

Add `.indicator-dot` and leave the item empty when the exact number does not matter: unread mail, a pending update, unsaved changes. `Indicator` renders a dot when you leave out `content` or set `dot: true`.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Inbox, unread mail"><span class="mdi mdi-email-outline"></span></button>
      <span class="indicator-item indicator-dot indicator-primary" aria-hidden="true"></span>
    </span>
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Settings, update available"><span class="mdi mdi-cog-outline"></span></button>
      <span class="indicator-item indicator-dot indicator-warning" aria-hidden="true"></span>
    </span>
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Notifications, new activity"><span class="mdi mdi-bell-outline"></span></button>
      <span class="indicator-item indicator-dot" aria-hidden="true"></span>
    </span>
  </div>
</div>
::end

```html
<span class="indicator">
  <button type="button" class="btn btn-ghost btn-icon" aria-label="Inbox, unread mail">
    <span class="mdi mdi-email-outline"></span>
  </button>
  <span class="indicator-item indicator-dot indicator-primary" aria-hidden="true"></span>
</span>
```

```js components
import { Indicator } from "@abydahana/aksara-ui/components";

Indicator({
  children:
    '<button type="button" class="btn btn-ghost btn-icon" aria-label="Inbox, unread mail"><span class="mdi mdi-email-outline"></span></button>',
  variant: "primary" // no content: renders a dot
});
```

---

## Avatar Status

Place a dot at the bottom-end corner with `.indicator-bottom` to show presence on an avatar: online, away, busy, or offline. Use a color for each state and say the state in text nearby or in the avatar's label.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <span class="indicator">
      <span class="avatar avatar-primary avatar-lg rounded-full" role="img" aria-label="Maya Chen, online">MC</span>
      <span class="indicator-item indicator-dot indicator-bottom indicator-success" aria-hidden="true"></span>
    </span>
    <span class="indicator">
      <span class="avatar avatar-info avatar-lg rounded-full" role="img" aria-label="Alex Morgan, away">AM</span>
      <span class="indicator-item indicator-dot indicator-bottom indicator-warning" aria-hidden="true"></span>
    </span>
    <span class="indicator">
      <span class="avatar avatar-success avatar-lg rounded-full" role="img" aria-label="Sofia Patel, busy">SP</span>
      <span class="indicator-item indicator-dot indicator-bottom indicator-danger" aria-hidden="true"></span>
    </span>
    <span class="indicator">
      <span class="avatar avatar-lg rounded-full" role="img" aria-label="Daniel Kim, offline">DK</span>
      <span class="indicator-item indicator-dot indicator-bottom indicator-secondary" aria-hidden="true"></span>
    </span>
  </div>
  <div class="list-group max-w-[360px]">
    <div class="list-group-item hstack gap-3">
      <span class="indicator">
        <span class="avatar avatar-primary avatar-md rounded-full" aria-hidden="true">MC</span>
        <span class="indicator-item indicator-dot indicator-bottom indicator-success" aria-hidden="true"></span>
      </span>
      <div class="min-w-0 flex-1">
        <div class="fw-semibold text-sm truncate">Maya Chen</div>
        <div class="text-subtle text-xs">Online · Product, London</div>
      </div>
      <span class="indicator">
        <button type="button" class="btn btn-ghost btn-icon btn-sm" aria-label="Chat with Maya, 2 unread"><span class="mdi mdi-chat-outline"></span></button>
        <span class="indicator-item indicator-primary" aria-hidden="true">2</span>
      </span>
    </div>
    <div class="list-group-item hstack gap-3">
      <span class="indicator">
        <span class="avatar avatar-info avatar-md rounded-full" aria-hidden="true">AM</span>
        <span class="indicator-item indicator-dot indicator-bottom indicator-warning" aria-hidden="true"></span>
      </span>
      <div class="min-w-0 flex-1">
        <div class="fw-semibold text-sm truncate">Alex Morgan</div>
        <div class="text-subtle text-xs">Away · Finance, Manchester</div>
      </div>
      <button type="button" class="btn btn-ghost btn-icon btn-sm" aria-label="Chat with Alex"><span class="mdi mdi-chat-outline"></span></button>
    </div>
  </div>
</div>
::end

```html
<span class="indicator">
  <span class="avatar avatar-primary avatar-lg rounded-full" role="img" aria-label="Maya Chen, online">MC</span>
  <span class="indicator-item indicator-dot indicator-bottom indicator-success" aria-hidden="true"></span>
</span>
```

```js components
import { Indicator } from "@abydahana/aksara-ui/components";

Indicator({
  children:
    '<span class="avatar avatar-primary avatar-lg rounded-full" role="img" aria-label="Maya Chen, online">MC</span>',
  dot: true,
  placement: "bottom-end",
  variant: "success"
});
```

The dot sits on the corner of the avatar's box. For a status dot that follows the curve of a round avatar, the avatar's own `.avatar-status` is an alternative; use the indicator when you also need counts or other placements.

---

## Inset

`.indicator-inset` moves the item inside the corner instead of straddling it. Use it on rounded squares such as app tiles and workspace logos, where a straddling dot would float off the shape, or where the parent clips overflow.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <a class="vstack gap-2 items-center text-body text-sm" href="#/components/indicator">
      <span class="indicator">
        <span class="icon-tile icon-tile-xl icon-tile-primary"><span class="mdi mdi-receipt-text-outline"></span></span>
        <span class="indicator-item indicator-dot indicator-inset" aria-hidden="true"></span>
      </span>
      Invoices
    </a>
    <a class="vstack gap-2 items-center text-body text-sm" href="#/components/indicator">
      <span class="indicator">
        <span class="icon-tile icon-tile-xl icon-tile-success"><span class="mdi mdi-cash-multiple"></span></span>
        <span class="indicator-item indicator-dot indicator-inset indicator-primary" aria-hidden="true"></span>
      </span>
      Payments
    </a>
    <a class="vstack gap-2 items-center text-body text-sm" href="#/components/indicator">
      <span class="indicator">
        <span class="icon-tile icon-tile-xl icon-tile-warning"><span class="mdi mdi-truck-outline"></span></span>
      </span>
      Shipping
    </a>
    <a class="vstack gap-2 items-center text-body text-sm" href="#/components/indicator">
      <span class="indicator">
        <span class="icon-tile icon-tile-xl icon-tile-info"><span class="mdi mdi-chart-box-outline"></span></span>
        <span class="indicator-item indicator-inset indicator-success" aria-hidden="true">New</span>
      </span>
      Reports
    </a>
  </div>
  <div class="docs-row">
    <span class="indicator">
      <span class="avatar avatar-tertiary avatar-lg" role="img" aria-label="Dusk Coffee workspace, new activity">DC</span>
      <span class="indicator-item indicator-dot indicator-inset" aria-hidden="true"></span>
    </span>
    <span class="indicator">
      <span class="avatar avatar-primary avatar-lg" role="img" aria-label="Blue Harbor workspace">BH</span>
    </span>
    <span class="indicator">
      <span class="avatar avatar-warning avatar-lg" role="img" aria-label="Wildflower Digital workspace, new activity">WD</span>
      <span class="indicator-item indicator-dot indicator-inset" aria-hidden="true"></span>
    </span>
  </div>
</div>
::end

```html
<span class="indicator">
  <span class="icon-tile icon-tile-xl icon-tile-primary"><span class="mdi mdi-receipt-text-outline"></span></span>
  <span class="indicator-item indicator-dot indicator-inset" aria-hidden="true"></span>
</span>
```

```js components
import { Indicator } from "@abydahana/aksara-ui/components";

Indicator({
  children:
    '<span class="icon-tile icon-tile-xl icon-tile-primary"><span class="mdi mdi-receipt-text-outline"></span></span>',
  dot: true,
  inset: true
});
```

Inset works with every placement (`.indicator-bottom`, `.indicator-start`) and in RTL.

---

## Placement

The item goes on the top-end corner by default. `.indicator-bottom` moves it to the bottom-end corner and `.indicator-start` to the top-start corner. "End" and "start" follow the text direction, so in RTL top-end is the top-left corner.

The item adapts to the target's shape. On round targets (avatars with `rounded-full`, circular tiles and buttons) it sits on the edge of the circle instead of the empty corner of its box, and on borderless icon buttons (`btn-ghost btn-icon`) and bare icons it hugs the glyph. Set it yourself with `.indicator-circle` or `.indicator-icon` on the `.indicator`, or tune `--aksara-indicator-offset` (distance in from the corner).

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <span class="indicator">
      <span class="avatar avatar-lg" aria-hidden="true"><span class="avatar-fallback mdi mdi-account"></span></span>
      <span class="indicator-item" aria-hidden="true">5</span>
    </span>
    <span class="indicator">
      <span class="avatar avatar-lg" aria-hidden="true"><span class="avatar-fallback mdi mdi-account"></span></span>
      <span class="indicator-item indicator-bottom" aria-hidden="true">5</span>
    </span>
    <span class="indicator">
      <span class="avatar avatar-lg" aria-hidden="true"><span class="avatar-fallback mdi mdi-account"></span></span>
      <span class="indicator-item indicator-start" aria-hidden="true">5</span>
    </span>
  </div>
</div>
::end

```html
<!-- top-end (default) -->
<span class="indicator-item">5</span>
<!-- bottom-end -->
<span class="indicator-item indicator-bottom">5</span>
<!-- top-start -->
<span class="indicator-item indicator-start">5</span>
```

```js components
import { Indicator } from "@abydahana/aksara-ui/components";

Indicator({ children: avatar, content: 5 }); // placement: "top-end"
Indicator({ children: avatar, content: 5, placement: "bottom-end" });
Indicator({ children: avatar, content: 5, placement: "top-start" });
```

---

## Pulse

`.indicator-pulse` adds an expanding ring behind the item that repeats. Use it sparingly, for something that is happening right now, such as a live stream or an incoming call, not for ordinary unread counts.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <span class="indicator">
      <span class="avatar avatar-danger avatar-lg rounded-full" role="img" aria-label="Rachel Green, live now">RG</span>
      <span class="indicator-item indicator-dot indicator-pulse" aria-hidden="true"></span>
    </span>
    <span class="indicator">
      <button type="button" class="btn btn-soft-danger"><span class="mdi mdi-broadcast"></span> Flash sale live</button>
      <span class="indicator-item indicator-pulse" aria-hidden="true">Live</span>
    </span>
    <span class="indicator">
      <button type="button" class="btn btn-ghost btn-icon" aria-label="Incoming call"><span class="mdi mdi-phone-outline"></span></button>
      <span class="indicator-item indicator-dot indicator-success indicator-pulse" aria-hidden="true"></span>
    </span>
  </div>
</div>
::end

```html
<span class="indicator">
  <span class="avatar avatar-danger avatar-lg rounded-full" role="img" aria-label="Rachel Green, live now">RG</span>
  <span class="indicator-item indicator-dot indicator-pulse" aria-hidden="true"></span>
</span>
```

```js components
import { Indicator } from "@abydahana/aksara-ui/components";

Indicator({
  children:
    '<span class="avatar avatar-danger avatar-lg rounded-full" role="img" aria-label="Rachel Green, live now">RG</span>',
  dot: true,
  pulse: true
});
```

The ring is a CSS animation; it stops for users who ask for reduced motion (`prefers-reduced-motion: reduce`).

---

## Colors

Add `.indicator-{color}` for any palette color. The text uses that color's foreground, so counts stay readable on every fill.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <span class="indicator"><span class="avatar avatar-md" aria-hidden="true"><span class="avatar-fallback mdi mdi-bell-outline"></span></span><span class="indicator-item indicator-primary" aria-hidden="true">4</span></span>
    <span class="indicator"><span class="avatar avatar-md" aria-hidden="true"><span class="avatar-fallback mdi mdi-bell-outline"></span></span><span class="indicator-item indicator-secondary" aria-hidden="true">4</span></span>
    <span class="indicator"><span class="avatar avatar-md" aria-hidden="true"><span class="avatar-fallback mdi mdi-bell-outline"></span></span><span class="indicator-item indicator-tertiary" aria-hidden="true">4</span></span>
    <span class="indicator"><span class="avatar avatar-md" aria-hidden="true"><span class="avatar-fallback mdi mdi-bell-outline"></span></span><span class="indicator-item indicator-success" aria-hidden="true">4</span></span>
    <span class="indicator"><span class="avatar avatar-md" aria-hidden="true"><span class="avatar-fallback mdi mdi-bell-outline"></span></span><span class="indicator-item indicator-danger" aria-hidden="true">4</span></span>
    <span class="indicator"><span class="avatar avatar-md" aria-hidden="true"><span class="avatar-fallback mdi mdi-bell-outline"></span></span><span class="indicator-item indicator-warning" aria-hidden="true">4</span></span>
    <span class="indicator"><span class="avatar avatar-md" aria-hidden="true"><span class="avatar-fallback mdi mdi-bell-outline"></span></span><span class="indicator-item indicator-info" aria-hidden="true">4</span></span>
    <span class="indicator"><span class="avatar avatar-md" aria-hidden="true"><span class="avatar-fallback mdi mdi-bell-outline"></span></span><span class="indicator-item indicator-dark" aria-hidden="true">4</span></span>
    <span class="indicator"><span class="avatar avatar-md" aria-hidden="true"><span class="avatar-fallback mdi mdi-bell-outline"></span></span><span class="indicator-item indicator-light" aria-hidden="true">4</span></span>
  </div>
</div>
::end

```html
<span class="indicator-item indicator-primary">4</span>
<span class="indicator-item indicator-success">4</span>
<span class="indicator-item indicator-warning">4</span>
<span class="indicator-item indicator-dark">4</span>
```

```js components
import { Indicator } from "@abydahana/aksara-ui/components";

for (const variant of ["primary", "secondary", "tertiary", "success", "danger", "warning", "info", "dark", "light"]) {
  Indicator({ children: icon, content: 4, variant });
}
```

---

## Tabs And Nav Links

Put a dot on a tab label to flag new activity, or a count on a nav link. On tabs, wrap only the label so the dot sits on the text rather than on the tab's edge. When the number matters more than drawing the eye, a badge inside the tab is often the calmer choice.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="tabs" aria-label="Project sections">
    <button type="button" class="tab" aria-selected="true">Overview</button>
    <button type="button" class="tab" aria-selected="false"><span class="indicator">Activity<span class="indicator-item indicator-dot indicator-primary" aria-hidden="true"></span></span><span class="visually-hidden"> (new activity)</span></button>
    <button type="button" class="tab" aria-selected="false">Files</button>
    <button type="button" class="tab" aria-selected="false"><span class="indicator">Billing<span class="indicator-item indicator-dot indicator-warning" aria-hidden="true"></span></span><span class="visually-hidden"> (payment due)</span></button>
  </div>
  <ul class="nav nav-pills gap-3" aria-label="Inbox folders">
    <li><a class="nav-link" href="#/components/indicator" aria-current="page">Inbox</a></li>
    <li>
      <span class="indicator">
        <a class="nav-link" href="#/components/indicator">Mentions<span class="visually-hidden"> (6 unread)</span></a>
        <span class="indicator-item indicator-primary" aria-hidden="true">6</span>
      </span>
    </li>
    <li><a class="nav-link" href="#/components/indicator">Archived</a></li>
  </ul>
</div>
::end

```html
<button type="button" class="tab" aria-selected="false">
  <span class="indicator">
    Activity
    <span class="indicator-item indicator-dot indicator-primary" aria-hidden="true"></span>
  </span>
  <span class="visually-hidden"> (new activity)</span>
</button>

<span class="indicator">
  <a class="nav-link" href="/inbox/mentions">Mentions<span class="visually-hidden"> (6 unread)</span></a>
  <span class="indicator-item indicator-primary" aria-hidden="true">6</span>
</span>
```

```js components
import { Indicator } from "@abydahana/aksara-ui/components";

const tab = `<button type="button" class="tab" aria-selected="false">${Indicator({
  children: "Activity",
  dot: true,
  variant: "primary",
  label: " (new activity)"
})}</button>`;
```

Here `label` works well because the visually hidden text lands inside the tab button and becomes part of its name.

---

## Toolbar

A typical app header: icon buttons with a count and a dot, and the account avatar with a presence dot. Indicators never change the size of their target, so the toolbar keeps its height and alignment.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="card">
    <div class="hstack justify-between gap-3 px-4 py-3">
      <div class="hstack gap-2">
        <span class="icon-tile icon-tile-sm icon-tile-primary"><span class="mdi mdi-storefront-outline"></span></span>
        <span class="fw-bold">Dusk Coffee Shop</span>
      </div>
      <div class="hstack gap-3">
        <span class="indicator">
          <button type="button" class="btn btn-ghost btn-icon" aria-label="Orders, 8 new"><span class="mdi mdi-package-variant-closed"></span></button>
          <span class="indicator-item indicator-primary" aria-hidden="true">8</span>
        </span>
        <span class="indicator">
          <button type="button" class="btn btn-ghost btn-icon" aria-label="Messages, 23 unread"><span class="mdi mdi-message-outline"></span></button>
          <span class="indicator-item" aria-hidden="true">23</span>
        </span>
        <span class="indicator">
          <button type="button" class="btn btn-ghost btn-icon" aria-label="Notifications, new activity"><span class="mdi mdi-bell-outline"></span></button>
          <span class="indicator-item indicator-dot" aria-hidden="true"></span>
        </span>
        <span class="indicator ms-2">
          <span class="avatar avatar-primary avatar-sm rounded-full" role="img" aria-label="Maya Chen, online">MC</span>
          <span class="indicator-item indicator-dot indicator-bottom indicator-success" aria-hidden="true"></span>
        </span>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="hstack gap-3">
  <span class="indicator">
    <button type="button" class="btn btn-ghost btn-icon" aria-label="Orders, 8 new">
      <span class="mdi mdi-package-variant-closed"></span>
    </button>
    <span class="indicator-item indicator-primary" aria-hidden="true">8</span>
  </span>
  <span class="indicator">
    <button type="button" class="btn btn-ghost btn-icon" aria-label="Notifications, new activity">
      <span class="mdi mdi-bell-outline"></span>
    </button>
    <span class="indicator-item indicator-dot" aria-hidden="true"></span>
  </span>
  <span class="indicator">
    <span class="avatar avatar-primary avatar-sm rounded-full" role="img" aria-label="Maya Chen, online">MC</span>
    <span class="indicator-item indicator-dot indicator-bottom indicator-success" aria-hidden="true"></span>
  </span>
</div>
```

```js components
import { Indicator } from "@abydahana/aksara-ui/components";

const iconButton = (icon, label) =>
  `<button type="button" class="btn btn-ghost btn-icon" aria-label="${label}"><span class="mdi ${icon}"></span></button>`;

Indicator({ children: iconButton("mdi-package-variant-closed", "Orders, 8 new"), content: 8, variant: "primary" });
Indicator({ children: iconButton("mdi-bell-outline", "Notifications, new activity"), dot: true });
```

Leave a `gap-3` or more between icon buttons so the items of neighbors do not overlap.

---

## Accessibility

- The item is decorative to assistive technology (`aria-hidden="true"`), because a bare "3" or a colored dot means nothing out of context. Put the meaning in the target's accessible name, for example `aria-label="Notifications, 3 unread"` on the button.
- The `label` prop renders a visually hidden span after the target. It is read in order, but it is not part of the target's name when the target is a separate button or link. Prefer an `aria-label` on the target in that case.
- When the count changes while the page is open, announce it with a polite live region rather than relying on the indicator.
- Do not use color alone for presence. Mention the state ("online", "away") in text or in the label.
- Placement uses logical properties and RTL-aware offsets, so indicators move to the mirrored corner under `dir="rtl"`.

---

## String Component

`Indicator` wraps `children` (an HTML string) in `.indicator` and appends the item. Without `content`, or with `dot: true`, it renders a dot.

```ts
import { Indicator } from "@abydahana/aksara-ui/components";

Indicator({ children: bellButton, content: 3 });
Indicator({ children: bellButton, content: 240, max: 99 }); // "99+"
Indicator({ children: avatar, dot: true, placement: "bottom-end", variant: "success" });
Indicator({ children: tile, dot: true, inset: true, pulse: true, variant: "primary" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>children</code></td><td><code>string</code></td><td>—</td><td>Raw HTML of the target (button, avatar, icon tile, tab label).</td></tr>
      <tr><td><code>content</code></td><td><code>string | number</code></td><td>—</td><td>Count or short text, escaped. Leave it out for a dot.</td></tr>
      <tr><td><code>max</code></td><td><code>number</code></td><td><code>99</code></td><td>Numbers above it render as <code>{max}+</code>.</td></tr>
      <tr><td><code>dot</code></td><td><code>boolean</code></td><td>—</td><td>Forces a dot (<code>.indicator-dot</code>) and hides <code>content</code>. Defaults to <code>true</code> when <code>content</code> is empty.</td></tr>
      <tr><td><code>variant</code></td><td><code>"primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "dark" | "light"</code></td><td>—</td><td>Adds <code>.indicator-{variant}</code>. Without it the item is danger red.</td></tr>
      <tr><td><code>placement</code></td><td><code>"top-end" | "bottom-end" | "top-start"</code></td><td><code>"top-end"</code></td><td><code>"bottom-end"</code> adds <code>.indicator-bottom</code>, <code>"top-start"</code> adds <code>.indicator-start</code>.</td></tr>
      <tr><td><code>inset</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.indicator-inset</code>: inside the corner instead of straddling it.</td></tr>
      <tr><td><code>pulse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.indicator-pulse</code>.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Escaped screen reader text in a <code>.visually-hidden</code> span after the item.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the <code>.indicator</code> wrapper.</td></tr>
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
      <tr><td><code>.indicator</code></td><td>Inline-flex, relatively positioned wrapper around the target.</td></tr>
      <tr><td><code>.indicator-item</code></td><td>Absolute pill on the top-end corner: danger fill, 2px ring in the page background, small bold tabular numbers.</td></tr>
      <tr><td><code>.indicator-dot</code></td><td>Fixed 0.75rem dot with no text.</td></tr>
      <tr><td><code>.indicator-{color}</code></td><td>Fill and foreground from the palette: primary, secondary, tertiary, success, danger, warning, info, light, dark.</td></tr>
      <tr><td><code>.indicator-bottom</code></td><td>Bottom-end corner.</td></tr>
      <tr><td><code>.indicator-start</code></td><td>Top-start corner.</td></tr>
      <tr><td><code>.indicator-inset</code></td><td>Sits just inside the top-end corner instead of straddling it.</td></tr>
      <tr><td><code>.indicator-pulse</code></td><td>Repeating expanding ring behind the item.</td></tr>
          <tr><td><code>.indicator-circle</code></td><td>On <code>.indicator</code>: places the item on the edge of a round target (automatic for <code>rounded-full</code>, <code>icon-tile-circle</code>, round icon buttons).</td></tr>
      <tr><td><code>.indicator-icon</code></td><td>On <code>.indicator</code>: hugs the glyph of a borderless icon button (automatic for <code>btn-ghost btn-icon</code>).</td></tr>
      <tr><td><code>--aksara-indicator-offset</code></td><td>Distance of the item from the target's corner (default <code>0px</code>).</td></tr>
    </tbody>
  </table>
</div>
::end
