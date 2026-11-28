# Divider

Dividers are hairline separators between groups of content. A bare `.divider` draws a full-width line; put text inside and the line splits around it, which covers "or continue with" in sign-in forms, date breaks in a chat, and section labels in long forms. Add `.divider-vertical` to separate items in a row, such as toolbar groups or meta details.

::html
<div class="docs-preview">
  <div class="divider"></div>
  <div class="divider">or</div>
  <div class="divider divider-start">Billing address</div>
  <div class="divider divider-dashed">Unread messages</div>
</div>
::end

```html
<div class="divider" role="separator"></div>
<div class="divider" role="separator">or</div>
<div class="divider divider-start" role="separator">Billing address</div>
<div class="divider divider-dashed" role="separator">Unread messages</div>
```

```js components
import { Divider } from "@abydahana/aksara-ui/components";

Divider();
Divider({ label: "or" });
Divider({ label: "Billing address", align: "start" });
Divider({ label: "Unread messages", dashed: true });
```

---

## Basic Separator

An empty `.divider` is a single line in `--aksara-border-subtle`, with `1rem` of block margin on each side. Use it to split a card into regions without adding a header or footer.

::html
<div class="docs-preview">
  <div class="card max-w-[420px]">
    <div class="card-body">
      <div class="hstack gap-3">
        <span class="avatar avatar-primary rounded-full">MC</span>
        <div class="flex-1 min-w-0">
          <div class="fw-semibold">Maya Chen</div>
          <div class="text-sm text-subtle">Product designer · London</div>
        </div>
        <button type="button" class="btn btn-soft-primary btn-sm">Follow</button>
      </div>
      <div class="divider" role="separator"></div>
      <p class="text-sm text-subtle m-0">Designs checkout flows for small merchants. Currently rebuilding the Aksara invoicing screens.</p>
      <div class="divider" role="separator"></div>
      <div class="hstack justify-between text-sm">
        <span class="text-subtle">Member since</span>
        <span class="fw-semibold">March 2023</span>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-body">
    <div class="hstack gap-3">...</div>
    <div class="divider" role="separator"></div>
    <p class="text-sm text-subtle m-0">Designs checkout flows for small merchants.</p>
    <div class="divider" role="separator"></div>
    <div class="hstack justify-between text-sm">...</div>
  </div>
</div>
```

```js components
import { Divider } from "@abydahana/aksara-ui/components";

Divider();
```

Override the spacing with margin utilities: `my-2` for a tight list, `my-4` between page sections. Margin utilities carry `!important`, so they always beat the component default.

---

## With A Label

Text inside the divider sits between two lines. The label uses `.8125rem` medium text in `--aksara-text-subtle`, so keep it short: a word or a short phrase.

::html
<div class="docs-preview">
  <div class="card max-w-[400px]">
    <div class="card-body">
      <h4 class="mt-0 mb-1 fw-bold">Sign in to Aksara</h4>
      <p class="text-sm text-subtle mt-0 mb-4">Welcome back. Enter your details to continue.</p>
      <div class="mb-3">
        <label class="form-label" for="dividerEmail">Email</label>
        <input class="form-control" id="dividerEmail" type="email" placeholder="maya@example.com">
      </div>
      <div class="mb-3">
        <label class="form-label" for="dividerPassword">Password</label>
        <input class="form-control" id="dividerPassword" type="password" placeholder="••••••••">
      </div>
      <button type="button" class="btn btn-primary w-full">Sign in</button>
      <div class="divider my-4" role="separator">or continue with</div>
      <div class="hstack gap-2">
        <button type="button" class="btn btn-outline-secondary flex-1"><span class="mdi mdi-google"></span> Google</button>
        <button type="button" class="btn btn-outline-secondary flex-1"><span class="mdi mdi-github"></span> GitHub</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<button type="button" class="btn btn-primary w-full">Sign in</button>

<div class="divider my-4" role="separator">or continue with</div>

<div class="hstack gap-2">
  <button type="button" class="btn btn-outline-secondary flex-1"><span class="mdi mdi-google"></span> Google</button>
  <button type="button" class="btn btn-outline-secondary flex-1"><span class="mdi mdi-github"></span> GitHub</button>
</div>
```

```js components
import { Divider } from "@abydahana/aksara-ui/components";

Divider({ label: "or continue with", className: "my-4" });
```

The label can hold markup too, for example an icon or a link. Pass it as `children` in the string component (it is not escaped).

::html
<div class="docs-preview">
  <div class="divider" role="separator"><span class="mdi mdi-lock-outline"></span> Secured by Aksara Pay</div>
  <div class="divider" role="separator"><a href="#/components/divider">Show 8 earlier comments</a></div>
</div>
::end

```html
<div class="divider" role="separator"><span class="mdi mdi-lock-outline"></span> Secured by Aksara Pay</div>
<div class="divider" role="separator"><a href="/comments?page=2">Show 8 earlier comments</a></div>
```

```js components
import { Divider } from "@abydahana/aksara-ui/components";

Divider({ children: '<span class="mdi mdi-lock-outline"></span> Secured by Aksara Pay' });
Divider({ children: '<a href="/comments?page=2">Show 8 earlier comments</a>' });
```

---

## Label Alignment

Labels are centered by default. `.divider-start` shortens the leading line to `1.5rem` so the label reads like a section heading; `.divider-end` does the same on the trailing side. Both follow the writing direction, so in RTL layouts "start" is on the right.

::html
<div class="docs-preview">
  <div class="card max-w-[520px]">
    <div class="card-body">
      <div class="divider divider-start mt-0" role="separator">Shipping address</div>
      <div class="row gap-3">
        <div class="col-12 md:col-6">
          <label class="form-label" for="dividerCity">City</label>
          <input class="form-control" id="dividerCity" value="London">
        </div>
        <div class="col-12 md:col-6">
          <label class="form-label" for="dividerPostal">Postal code</label>
          <input class="form-control" id="dividerPostal" value="NW1 6XE">
        </div>
      </div>
      <div class="divider divider-start mt-4" role="separator">Payment</div>
      <label class="form-label" for="dividerCard">Card number</label>
      <input class="form-control" id="dividerCard" placeholder="4242 4242 4242 4242">
      <div class="divider divider-end mb-0" role="separator">Step 2 of 3</div>
    </div>
  </div>
</div>
::end

```html
<div class="divider divider-start" role="separator">Shipping address</div>
<div class="divider" role="separator">Centered (default)</div>
<div class="divider divider-end" role="separator">Step 2 of 3</div>
```

```js components
import { Divider } from "@abydahana/aksara-ui/components";

Divider({ label: "Shipping address", align: "start" });
Divider({ label: "Centered (default)" });
Divider({ label: "Step 2 of 3", align: "end" });
```

---

## Dashed And Strong

`.divider-dashed` switches the line style, which works well for "new since your last visit" markers or optional sections. `.divider-strong` uses `--aksara-border-strong` for a more visible break. Combine them freely.

::html
<div class="docs-preview">
  <div class="divider divider-dashed" role="separator"></div>
  <div class="divider divider-strong" role="separator"></div>
  <div class="divider divider-dashed" role="separator">Optional</div>
  <div class="divider divider-strong" role="separator">Order summary</div>
  <div class="divider divider-dashed divider-strong divider-start" role="separator">Archived</div>
</div>
::end

```html
<div class="divider divider-dashed" role="separator"></div>
<div class="divider divider-strong" role="separator"></div>
<div class="divider divider-dashed" role="separator">Optional</div>
<div class="divider divider-strong" role="separator">Order summary</div>
```

```js components
import { Divider } from "@abydahana/aksara-ui/components";

Divider({ dashed: true });
Divider({ strong: true });
Divider({ label: "Optional", dashed: true });
Divider({ label: "Order summary", strong: true });
```

Both modifiers only set custom properties (`--aksara-divider-style`, `--aksara-divider-color`), so you can also set a color of your own with an arbitrary class such as `[--aksara-divider-color:rgb(var(--aksara-primary))]`.

::html
<div class="docs-preview">
  <div class="divider [--aksara-divider-color:rgb(var(--aksara-danger))] text-danger" role="separator">3 unread messages</div>
</div>
::end

```html
<div class="divider [--aksara-divider-color:rgb(var(--aksara-danger))] text-danger" role="separator">
  3 unread messages
</div>
```

```js components
import { Divider } from "@abydahana/aksara-ui/components";

Divider({
  label: "3 unread messages",
  className: "[--aksara-divider-color:rgb(var(--aksara-danger))] text-danger"
});
```

---

## Date Separators

Group a chat thread or an activity feed by day. Tighten the margins with `my-2` so the separators do not push the messages apart.

::html
<div class="docs-preview">
  <div class="card max-w-[480px]">
    <div class="card-header fw-semibold">Order #INV-2048 · Activity</div>
    <div class="card-body vstack gap-3">
      <div class="divider my-2" role="separator">Yesterday</div>
      <div class="hstack gap-3 items-start">
        <span class="avatar avatar-sm avatar-success rounded-full">AM</span>
        <div class="min-w-0">
          <div class="text-sm"><span class="fw-semibold">Alex Morgan</span> created the order</div>
          <div class="text-xs text-subtle">16:42 · $1,250.00</div>
        </div>
      </div>
      <div class="hstack gap-3 items-start">
        <span class="avatar avatar-sm avatar-info rounded-full">SY</span>
        <div class="min-w-0">
          <div class="text-sm"><span class="fw-semibold">System</span> received payment by card</div>
          <div class="text-xs text-subtle">16:45</div>
        </div>
      </div>
      <div class="divider my-2" role="separator">Today</div>
      <div class="hstack gap-3 items-start">
        <span class="avatar avatar-sm avatar-primary rounded-full">MC</span>
        <div class="min-w-0">
          <div class="text-sm"><span class="fw-semibold">Maya Chen</span> packed 3 items and printed the label</div>
          <div class="text-xs text-subtle">09:10</div>
        </div>
      </div>
      <div class="divider divider-dashed my-2 text-primary" role="separator">New</div>
      <div class="hstack gap-3 items-start">
        <span class="avatar avatar-sm avatar-warning rounded-full">RM</span>
        <div class="min-w-0">
          <div class="text-sm"><span class="fw-semibold">Royal Mail</span> picked up the parcel</div>
          <div class="text-xs text-subtle">11:32 · Tracking RM0412398812GB</div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card-body vstack gap-3">
  <div class="divider my-2" role="separator">Yesterday</div>
  <div class="hstack gap-3 items-start">...</div>
  <div class="hstack gap-3 items-start">...</div>

  <div class="divider my-2" role="separator">Today</div>
  <div class="hstack gap-3 items-start">...</div>

  <div class="divider divider-dashed my-2 text-primary" role="separator">New</div>
  <div class="hstack gap-3 items-start">...</div>
</div>
```

```js components
import { Divider } from "@abydahana/aksara-ui/components";

Divider({ label: "Yesterday", className: "my-2" });
Divider({ label: "Today", className: "my-2" });
Divider({ label: "New", dashed: true, className: "my-2 text-primary" });
```

---

## Vertical

`.divider-vertical` turns the line upright. It stretches to the height of its flex row (with a `1.25rem` minimum) and adds `.75rem` of inline margin. Give the row a fixed height, such as `h-[24px]`, when the items have different heights. Inside a row that already has a `gap-*`, add `mx-0` so the spacing is not doubled.

::html
<div class="docs-preview">
  <div class="hstack h-[24px] text-sm text-subtle">
    <span><span class="mdi mdi-map-marker-outline"></span> London</span>
    <div class="divider divider-vertical" role="separator" aria-orientation="vertical"></div>
    <span><span class="mdi mdi-briefcase-outline"></span> Full-time</span>
    <div class="divider divider-vertical" role="separator" aria-orientation="vertical"></div>
    <span>$85–110k / year</span>
    <div class="divider divider-vertical" role="separator" aria-orientation="vertical"></div>
    <span>Posted 2 days ago</span>
  </div>
  <div class="hstack gap-1 h-[40px] p-1 border rounded-lg max-w-[max-content]">
    <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Bold"><span class="mdi mdi-format-bold"></span></button>
    <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Italic"><span class="mdi mdi-format-italic"></span></button>
    <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Underline"><span class="mdi mdi-format-underline"></span></button>
    <div class="divider divider-vertical mx-1" role="separator" aria-orientation="vertical"></div>
    <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Bulleted list"><span class="mdi mdi-format-list-bulleted"></span></button>
    <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Numbered list"><span class="mdi mdi-format-list-numbered"></span></button>
    <div class="divider divider-vertical mx-1" role="separator" aria-orientation="vertical"></div>
    <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Insert link"><span class="mdi mdi-link-variant"></span></button>
    <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Insert image"><span class="mdi mdi-image-outline"></span></button>
  </div>
</div>
::end

```html
<div class="hstack h-[24px] text-sm text-subtle">
  <span>London</span>
  <div class="divider divider-vertical" role="separator" aria-orientation="vertical"></div>
  <span>Full-time</span>
  <div class="divider divider-vertical" role="separator" aria-orientation="vertical"></div>
  <span>Posted 2 days ago</span>
</div>

<div class="hstack gap-1 h-[40px] p-1 border rounded-lg">
  <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Bold">...</button>
  <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Italic">...</button>
  <div class="divider divider-vertical mx-1" role="separator" aria-orientation="vertical"></div>
  <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Bulleted list">...</button>
</div>
```

```js components
import { Divider } from "@abydahana/aksara-ui/components";

Divider({ vertical: true });
Divider({ vertical: true, className: "mx-1" });
```

A vertical divider can carry a label as well. The text sits in the middle with a line above and below, a common pattern for two side-by-side sign-in options.

::html
<div class="docs-preview">
  <div class="hstack items-stretch max-w-[560px]">
    <div class="flex-1 vstack gap-2">
      <div class="fw-semibold">Scan to sign in</div>
      <p class="text-sm text-subtle m-0">Open the Aksara app on your phone and scan the code on your screen.</p>
    </div>
    <div class="divider divider-vertical mx-4" role="separator" aria-orientation="vertical">or</div>
    <div class="flex-1 vstack gap-2">
      <div class="fw-semibold">Use a magic link</div>
      <p class="text-sm text-subtle m-0">We send a one-time link to your work email. It expires in 15 minutes.</p>
    </div>
  </div>
</div>
::end

```html
<div class="hstack items-stretch">
  <div class="flex-1">...</div>
  <div class="divider divider-vertical mx-4" role="separator" aria-orientation="vertical">or</div>
  <div class="flex-1">...</div>
</div>
```

```js components
import { Divider } from "@abydahana/aksara-ui/components";

Divider({ label: "or", vertical: true, className: "mx-4" });
```

---

## Accessibility

- A divider that separates real sections should be announced: keep `role="separator"`, and add `aria-orientation="vertical"` on vertical ones. The string component does both for you.
- A separator's content is presentational, so the `Divider` component also puts its `label` in `aria-label`, which screen readers announce. In hand-written markup add `aria-label` yourself. When the label names a section that follows ("Shipping address"), a real heading is still the better choice.
- Purely decorative lines, such as the vertical bars between meta items or toolbar groups, can drop the role with `role="none"` and `aria-hidden="true"`; the surrounding items already describe themselves.
- Labels use logical properties, so `.divider-start` and `.divider-end` flip automatically under `dir="rtl"`.

```js
import { Divider } from "@abydahana/aksara-ui/components";

// Decorative separator between meta items
Divider({ vertical: true, attributes: { role: "none", "aria-hidden": "true" } });
```

---

## String Component

`Divider` returns a `<div class="divider">` with `role="separator"` (and `aria-orientation="vertical"` when `vertical` is set). `label` is escaped; `children` is raw HTML and wins over `label`. With neither, the divider renders as a single line.

```ts
import { Divider } from "@abydahana/aksara-ui/components";

Divider(); // plain line
Divider({ label: "or continue with" });
Divider({ label: "Billing address", align: "start", strong: true });
Divider({ vertical: true, className: "mx-1" });
Divider({ children: '<a href="/comments?page=2">Show earlier comments</a>', dashed: true });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Escaped text between the lines.</td></tr>
      <tr><td><code>children</code></td><td><code>string</code></td><td>—</td><td>Raw HTML used instead of <code>label</code> (icons, links).</td></tr>
      <tr><td><code>align</code></td><td><code>"center" | "start" | "end"</code></td><td><code>"center"</code></td><td>Label position. Adds <code>.divider-start</code> or <code>.divider-end</code>.</td></tr>
      <tr><td><code>vertical</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.divider-vertical</code> and <code>aria-orientation="vertical"</code>.</td></tr>
      <tr><td><code>dashed</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.divider-dashed</code>.</td></tr>
      <tr><td><code>strong</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.divider-strong</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes, for example <code>"my-2"</code> or <code>"mx-1"</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes. They override the default <code>role</code> and <code>aria-orientation</code>.</td></tr>
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
      <tr><td><code>.divider</code></td><td>Flex row with a line before and after its content, <code>1rem</code> block margin, <code>.8125rem</code> subtle label text. Empty dividers render one full line.</td></tr>
      <tr><td><code>.divider-start</code></td><td>Shortens the leading line to <code>1.5rem</code> so the label sits near the start.</td></tr>
      <tr><td><code>.divider-end</code></td><td>Shortens the trailing line to <code>1.5rem</code> so the label sits near the end.</td></tr>
      <tr><td><code>.divider-dashed</code></td><td>Dashed line style.</td></tr>
      <tr><td><code>.divider-strong</code></td><td>Line color <code>--aksara-border-strong</code>.</td></tr>
      <tr><td><code>.divider-vertical</code></td><td>Upright line that stretches to the row height (minimum <code>1.25rem</code>), <code>.75rem</code> inline margin, no block margin.</td></tr>
      <tr><td><code>--aksara-divider-color</code></td><td>Line color. Defaults to <code>--aksara-border-subtle</code>.</td></tr>
      <tr><td><code>--aksara-divider-style</code></td><td>Line style. Defaults to <code>solid</code>.</td></tr>
    </tbody>
  </table>
</div>
::end
