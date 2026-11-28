# Copy Button

A copy button puts text on the clipboard and confirms it in place: the icon turns into a check and the label reads "Copied" for two seconds. Any element with `data-clipboard` becomes a copy trigger, with no script of your own. It copies the value or text of another element, a literal string, or its own text, and it works on plain `http://` and `file://` pages too, where the async Clipboard API is not available.

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="copy-field w-[360px] max-w-[100%]"><code>npm install @abydahana/aksara-ui</code><button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="" data-clipboard-text="npm install @abydahana/aksara-ui" aria-label="Copy" title="Copy"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button></div>
    <button class="btn copy-btn btn-plain" type="button" data-clipboard="" data-clipboard-text="INV-2025-00481"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Copy invoice no.</span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span></span></button>
  </div>
</div>
::end

```html
<div class="copy-field">
  <code>npm install @abydahana/aksara-ui</code>
  <button
    class="btn copy-btn btn-ghost btn-sm btn-icon"
    type="button"
    data-clipboard=""
    data-clipboard-text="npm install @abydahana/aksara-ui"
    aria-label="Copy"
    title="Copy"
  >
    <span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span>
    <span class="copy-btn-done" aria-live="polite">
      <span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span>
    </span>
  </button>
</div>
```

```js components
import { CopyButton, CopyField } from "@abydahana/aksara-ui/components";

CopyField({ value: "npm install @abydahana/aksara-ui" });
CopyButton({ text: "INV-2025-00481", label: "Copy invoice no." });
```

---

## Basic Copy Button

`.copy-btn` holds two states: `.copy-btn-idle` is visible by default, `.copy-btn-done` while the button has `.is-copied`. The runtime adds `.is-copied` after a successful copy, which also turns the text success-green, and removes it after 2000 ms. Pick any plain, ghost or subtle button style and size.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn copy-btn btn-plain" type="button" data-clipboard="" data-clipboard-text="SPRING-7H2Q"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Copy code</span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span></span></button>
    <button class="btn copy-btn btn-ghost" type="button" data-clipboard="" data-clipboard-text="SPRING-7H2Q"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Ghost</span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span></span></button>
    <button class="btn copy-btn btn-subtle" type="button" data-clipboard="" data-clipboard-text="SPRING-7H2Q"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Subtle</span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span></span></button>
  </div>
  <div class="docs-row">
    <button class="btn copy-btn btn-plain btn-sm" type="button" data-clipboard="" data-clipboard-text="SPRING-7H2Q"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Small</span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span></span></button>
    <button class="btn copy-btn btn-plain" type="button" data-clipboard="" data-clipboard-text="SPRING-7H2Q"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Medium</span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span></span></button>
    <button class="btn copy-btn btn-plain btn-lg" type="button" data-clipboard="" data-clipboard-text="SPRING-7H2Q"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Large</span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span></span></button>
    <button class="btn copy-btn btn-plain btn-icon" type="button" data-clipboard="" data-clipboard-text="SPRING-7H2Q" aria-label="Copy voucher code" title="Copy voucher code"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button>
    <button class="btn copy-btn btn-plain" type="button" data-clipboard="" data-clipboard-text="SPRING-7H2Q" data-clipboard-reset="5000"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Stays for 5 s</span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span></span></button>
  </div>
</div>
::end

```html
<button class="btn copy-btn btn-plain" type="button" data-clipboard="" data-clipboard-text="SPRING-7H2Q">
  <span class="copy-btn-idle">
    <span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Copy code</span>
  </span>
  <span class="copy-btn-done" aria-live="polite">
    <span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span>
  </span>
</button>

<!-- Icon only: the label becomes the accessible name -->
<button
  class="btn copy-btn btn-plain btn-icon"
  type="button"
  data-clipboard=""
  data-clipboard-text="SPRING-7H2Q"
  aria-label="Copy voucher code"
  title="Copy voucher code"
>
  <span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span>
  <span class="copy-btn-done" aria-live="polite">
    <span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span>
  </span>
</button>
```

```js components
import { CopyButton } from "@abydahana/aksara-ui/components";

CopyButton({ text: "SPRING-7H2Q", label: "Copy code" });
CopyButton({ text: "SPRING-7H2Q", label: "Ghost", variant: "ghost" });
CopyButton({ text: "SPRING-7H2Q", label: "Subtle", variant: "subtle" });
CopyButton({ text: "SPRING-7H2Q", label: "Small", size: "sm" });
CopyButton({ text: "SPRING-7H2Q", label: "Copy voucher code", iconOnly: true });
CopyButton({ text: "SPRING-7H2Q", label: "Stays for 5 s", resetAfter: 5000 });
```

The `.copy-btn-done` part is an `aria-live` region, and the runtime gives it `role="status"` on copy, so screen readers announce "Copied".

---

## Copy Field

`.copy-field` shows a read-only value in a monospace box with a copy button at the end. Long values are cut off with an ellipsis, but the full value is still copied. Use it for install commands, API keys, webhook URLs and IDs.

::html
<div class="docs-preview">
  <div class="card max-w-[560px]">
    <div class="card-body vstack gap-4">
      <div>
        <p class="form-label">Install</p>
        <div class="copy-field"><code>npm install @abydahana/aksara-ui @mdi/font</code><button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="" data-clipboard-text="npm install @abydahana/aksara-ui @mdi/font" aria-label="Copy install command" title="Copy install command"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button></div>
      </div>
      <div>
        <p class="form-label">Live API key</p>
        <div class="copy-field"><code id="copyApiKey">ak_live_51Hq8ZtB2xYv9KdL0mPqR7sTuVw3XyZa4bC6dE8fG</code><button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="#copyApiKey" aria-label="Copy API key" title="Copy API key"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button></div>
        <p class="form-text">Keep this key secret. Created 12 Nov 2025 by Alex Morgan.</p>
      </div>
      <div>
        <p class="form-label">Webhook URL</p>
        <div class="copy-field"><code>https://api.northwind.app/webhooks/payments/v2/3f9c2a</code><button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="" data-clipboard-text="https://api.northwind.app/webhooks/payments/v2/3f9c2a" aria-label="Copy webhook URL" title="Copy webhook URL"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="copy-field">
  <code id="apiKey">ak_live_51Hq8ZtB2xYv9KdL0mPqR7sTuVw3XyZa4bC6dE8fG</code>
  <button
    class="btn copy-btn btn-ghost btn-sm btn-icon"
    type="button"
    data-clipboard="#apiKey"
    aria-label="Copy API key"
    title="Copy API key"
  >
    <span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span>
    <span class="copy-btn-done" aria-live="polite">
      <span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span>
    </span>
  </button>
</div>
```

```js components
import { CopyField } from "@abydahana/aksara-ui/components";

CopyField({ value: "npm install @abydahana/aksara-ui @mdi/font", label: "Copy install command" });
CopyField({ value: "ak_live_51Hq8ZtB2xYv9KdL0mPqR7sTuVw3XyZa4bC6dE8fG", id: "apiKey", label: "Copy API key" });
```

`CopyField` copies its `value` literally; `id` lands on the `<code>` element so other scripts can find it.

---

## Copy From An Input

Point `data-clipboard` at a selector and the trigger copies that element's current value (inputs, textareas, selects) or its text (anything else). A read-only input in an `.input-group` with a copy button at the end is the usual pattern for secrets and invite links. The second field below is editable, so you can check that the current value is copied.

::html
<div class="docs-preview">
  <div class="vstack gap-4 max-w-[520px]">
    <div>
      <label class="form-label" for="copySecret">Client secret</label>
      <div class="input-group">
        <span class="input-group-text"><span class="mdi mdi-key-variant" aria-hidden="true"></span></span>
        <input id="copySecret" class="form-control font-monospace" type="text" value="cs_9f2b7e41d0a84c55" readonly />
        <button class="btn copy-btn btn-plain" type="button" data-clipboard="#copySecret"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Copy</span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span></span></button>
      </div>
    </div>
    <div>
      <label class="form-label" for="copyMessage">Message for the courier</label>
      <div class="input-group">
        <input id="copyMessage" class="form-control" type="text" value="Leave it at the front desk, Building C2, Unit 14" />
        <button class="btn copy-btn btn-plain btn-icon" type="button" data-clipboard="#copyMessage" aria-label="Copy message" title="Copy message"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<label class="form-label" for="clientSecret">Client secret</label>
<div class="input-group">
  <span class="input-group-text"><span class="mdi mdi-key-variant" aria-hidden="true"></span></span>
  <input id="clientSecret" class="form-control font-monospace" type="text" value="cs_9f2b7e41d0a84c55" readonly />
  <button class="btn copy-btn btn-plain" type="button" data-clipboard="#clientSecret">
    <span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Copy</span></span>
    <span class="copy-btn-done" aria-live="polite">
      <span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span>
    </span>
  </button>
</div>
```

```js components
import { CopyButton, FormLabel } from "@abydahana/aksara-ui/components";

FormLabel({ label: "Client secret", htmlFor: "clientSecret" });
`<div class="input-group">
  <span class="input-group-text"><span class="mdi mdi-key-variant" aria-hidden="true"></span></span>
  <input id="clientSecret" class="form-control font-monospace" type="text" value="cs_9f2b7e41d0a84c55" readonly />
  ${CopyButton({ target: "#clientSecret" })}
</div>`;
```

---

## Share Link

A share dialog body: the link in a read-only field with a primary copy button, plus quick share actions.

::html
<div class="docs-preview">
  <div class="card max-w-[480px]">
    <div class="card-body vstack gap-3">
      <div>
        <p class="m-0 fw-semibold">Share "Q4 Sales Review"</p>
        <p class="m-0 text-sm text-subtle">Anyone with the link can view. 14 people have opened it.</p>
      </div>
      <div class="input-group">
        <span class="input-group-text"><span class="mdi mdi-link-variant" aria-hidden="true"></span></span>
        <input id="copyShareLink" class="form-control" type="text" value="https://dash.northwind.app/r/q4-sales-7Hq2Lm" readonly aria-label="Share link" />
        <button class="btn copy-btn btn-primary" type="button" data-clipboard="#copyShareLink"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Copy link</span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span></span></button>
      </div>
      <div class="hstack gap-2 flex-wrap">
        <button class="btn btn-soft-success btn-sm" type="button"><span class="mdi mdi-whatsapp" aria-hidden="true"></span> WhatsApp</button>
        <button class="btn btn-plain btn-sm" type="button"><span class="mdi mdi-email-outline" aria-hidden="true"></span> Email</button>
        <button class="btn btn-plain btn-sm" type="button"><span class="mdi mdi-qrcode" aria-hidden="true"></span> QR code</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="input-group">
  <span class="input-group-text"><span class="mdi mdi-link-variant" aria-hidden="true"></span></span>
  <input
    id="shareLink"
    class="form-control"
    type="text"
    value="https://dash.northwind.app/r/q4-sales-7Hq2Lm"
    readonly
    aria-label="Share link"
  />
  <button class="btn copy-btn btn-primary" type="button" data-clipboard="#shareLink">
    <span class="copy-btn-idle"
      ><span class="mdi mdi-content-copy" aria-hidden="true"></span><span>Copy link</span></span
    >
    <span class="copy-btn-done" aria-live="polite">
      <span class="mdi mdi-check" aria-hidden="true"></span><span>Copied</span>
    </span>
  </button>
</div>
```

```js components
import { CopyButton } from "@abydahana/aksara-ui/components";

CopyButton({ target: "#shareLink", label: "Copy link" });
```

`CopyButton` variants are `plain`, `ghost` and `subtle`. For a solid primary button as in the preview, write the markup by hand and use `btn-primary` in place of `btn-plain`.

---

## Code Block Header

An icon-only copy button in the header of a code card copies the text of the `<pre>` below it.

::html
<div class="docs-preview">
  <div class="card max-w-[560px]">
    <div class="card-header hstack justify-between gap-3 py-2">
      <span class="text-sm fw-semibold"><span class="mdi mdi-language-javascript text-warning" aria-hidden="true"></span> checkout.js</span>
      <button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="#copySnippet" aria-label="Copy code" title="Copy code"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button>
    </div>
    <pre id="copySnippet" class="m-0 p-3 text-sm font-monospace overflow-x-auto">const total = items.reduce((sum, item) =&gt; sum + item.price * item.qty, 0);
Aksara.notify("Total: $" + total.toFixed(2));</pre>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-header hstack justify-between gap-3 py-2">
    <span class="text-sm fw-semibold">checkout.js</span>
    <button
      class="btn copy-btn btn-ghost btn-sm btn-icon"
      type="button"
      data-clipboard="#snippet"
      aria-label="Copy code"
      title="Copy code"
    >
      <span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span>
      <span class="copy-btn-done" aria-live="polite">
        <span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span>
      </span>
    </button>
  </div>
  <pre id="snippet" class="m-0 p-3 text-sm font-monospace overflow-x-auto">const total = ...</pre>
</div>
```

```js components
import { CopyButton } from "@abydahana/aksara-ui/components";

CopyButton({ target: "#snippet", label: "Copy code", iconOnly: true, variant: "ghost", size: "sm" });
```

Text copied from an element is trimmed at both ends; line breaks inside are kept.

---

## In A Table

Small icon-only buttons next to IDs let support staff grab an order number or a tracking code without selecting text.

::html
<div class="docs-preview">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr><th>Order</th><th>Customer</th><th>Tracking</th><th class="text-end">Total</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="hstack gap-1"><code>ORD-10482</code><button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="" data-clipboard-text="ORD-10482" aria-label="Copy order ORD-10482" title="Copy order number"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button></span></td>
          <td>Alex Morgan</td>
          <td><span class="hstack gap-1"><code>TRK-0042871193</code><button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="" data-clipboard-text="TRK-0042871193" aria-label="Copy tracking number TRK-0042871193" title="Copy tracking number"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button></span></td>
          <td class="text-end">$1,240.00</td>
        </tr>
        <tr>
          <td><span class="hstack gap-1"><code>ORD-10483</code><button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="" data-clipboard-text="ORD-10483" aria-label="Copy order ORD-10483" title="Copy order number"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button></span></td>
          <td>Maya Chen</td>
          <td><span class="hstack gap-1"><code>TRK-7731045528</code><button class="btn copy-btn btn-ghost btn-sm btn-icon" type="button" data-clipboard="" data-clipboard-text="TRK-7731045528" aria-label="Copy tracking number TRK-7731045528" title="Copy tracking number"><span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span><span class="copy-btn-done" aria-live="polite"><span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span></span></button></span></td>
          <td class="text-end">$389.00</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
::end

```html
<td>
  <span class="hstack gap-1">
    <code>ORD-10482</code>
    <button
      class="btn copy-btn btn-ghost btn-sm btn-icon"
      type="button"
      data-clipboard=""
      data-clipboard-text="ORD-10482"
      aria-label="Copy order ORD-10482"
      title="Copy order number"
    >
      <span class="copy-btn-idle"><span class="mdi mdi-content-copy" aria-hidden="true"></span></span>
      <span class="copy-btn-done" aria-live="polite">
        <span class="mdi mdi-check" aria-hidden="true"></span><span class="visually-hidden">Copied</span>
      </span>
    </button>
  </span>
</td>
```

```js components
import { CopyButton } from "@abydahana/aksara-ui/components";

const row = (order) => `<tr>
  <td><span class="hstack gap-1"><code>${order.id}</code>${CopyButton({
    text: order.id,
    label: `Copy order ${order.id}`,
    iconOnly: true,
    variant: "ghost",
    size: "sm"
  })}</span></td>
  <td>${order.customer}</td>
</tr>`;
```

Give each icon-only button its own label ("Copy order ORD-10482"), so a screen reader user can tell the buttons in a column apart.

---

## Custom Trigger And Success Content

`data-clipboard` works on any element, not only `.copy-btn`. Without the copy-button markup, use `data-clipboard-success` to replace the trigger's HTML while it is in the copied state; the original HTML comes back after the reset delay. When `data-clipboard` is empty and there is no `data-clipboard-text`, the trigger copies its own text, which suits a voucher code shown on a button.

::html
<div class="docs-preview">
  <div class="card max-w-[420px]">
    <div class="card-body hstack gap-3">
      <span class="avatar avatar-warning avatar-sm rounded-full"><span class="mdi mdi-ticket-percent-outline" aria-hidden="true"></span></span>
      <div class="flex-1 min-w-0">
        <p class="m-0 fw-semibold">15% off your next order</p>
        <p class="m-0 text-xs text-subtle">Valid until 31 Dec · min. order $50</p>
      </div>
      <button class="btn btn-soft-primary btn-sm font-monospace" type="button" data-clipboard="" data-clipboard-success="&lt;span class=&quot;mdi mdi-check&quot;&gt;&lt;/span&gt; Copied" title="Copy voucher code">SAVE15</button>
    </div>
  </div>
</div>
::end

```html
<button
  class="btn btn-soft-primary btn-sm font-monospace"
  type="button"
  data-clipboard=""
  data-clipboard-success='<span class="mdi mdi-check"></span> Copied'
  title="Copy voucher code"
>
  SAVE15
</button>
```

```js components
import { Button } from "@abydahana/aksara-ui/components";

Button({
  label: "SAVE15",
  size: "sm",
  className: "btn-soft-primary font-monospace",
  attributes: {
    "data-clipboard": "",
    "data-clipboard-success": '<span class="mdi mdi-check"></span> Copied',
    title: "Copy voucher code"
  }
});
```

`data-clipboard` can also hold the text itself, for example `data-clipboard="dir='rtl'"`. Only values starting with `#`, `.` or `[` are treated as selectors, so a literal such as `button` is copied as is. `data-clipboard-text` is still the clearest way to write a literal.

---

## Toast On Copy

Every successful copy fires `aksara:clipboard:copy` on the trigger, and a failed one fires `aksara:clipboard:error`. Both bubble, so one listener on the document can show a toast for every copy button on the page.

```js
document.addEventListener("aksara:clipboard:copy", (event) => {
  const text = event.detail.text;
  Aksara.notify(text.length > 32 ? "Copied to clipboard" : `Copied "${text}"`, {
    icon: "mdi-check-circle-outline",
    variant: "success"
  });
});

document.addEventListener("aksara:clipboard:error", () => {
  Aksara.notify("Could not copy. Select the text and press Ctrl+C.", {
    icon: "mdi-alert-circle-outline",
    variant: "danger"
  });
});
```

You can also copy from your own code with `Aksara.clipboard(target, text?)`. It returns a promise that resolves to `true` on success. It does not add `.is-copied` or fire the events, so give feedback yourself, as this button does:

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-plain" type="button" onclick="Aksara.clipboard(this, '221B Baker Street, London NW1 6XE').then((ok) => Aksara.notify(ok ? 'Address copied' : 'Copy failed', { icon: ok ? 'mdi-check' : 'mdi-alert-circle-outline', variant: ok ? 'success' : 'danger' }))"><span class="mdi mdi-map-marker-outline" aria-hidden="true"></span> Copy shipping address</button>
  </div>
</div>
::end

```js
const ok = await Aksara.clipboard(button, "221B Baker Street, London NW1 6XE");
Aksara.notify(ok ? "Address copied" : "Copy failed", { icon: ok ? "mdi-check" : "mdi-alert-circle-outline" });

await Aksara.clipboard("#apiKey"); // copies the value / text of #apiKey
```

---

## JavaScript

Copy triggers use one delegated click listener on the document, so buttons rendered after `Aksara.init()` work too. The click's default action is prevented, so a trigger can be an `<a>`.

On a secure page (`https://` or `localhost`) the runtime uses `navigator.clipboard.writeText()`. Elsewhere, for example on an intranet over plain `http://` or a page opened from disk, it falls back to a hidden textarea and `document.execCommand("copy")`, so copying still works.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Attribute / event / method</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-clipboard</code></td><td>Marks the trigger. A selector (<code>#id</code>, <code>.class</code>, <code>[attr]</code>) copies the matching element's <code>value</code> (input, textarea, select) or trimmed text. Any other value, or a selector that matches nothing, is copied literally. Empty, with no <code>data-clipboard-text</code>, copies the trigger's own label (the idle text of a <code>.copy-btn</code>).</td></tr>
      <tr><td><code>data-clipboard-text</code></td><td>Literal text to copy. Takes precedence over the selector.</td></tr>
      <tr><td><code>data-clipboard-reset</code></td><td>How long <code>.is-copied</code> (and the success HTML) stays, in milliseconds. Default <code>2000</code>. Copying again restarts the timer.</td></tr>
      <tr><td><code>data-clipboard-success</code></td><td>HTML that replaces the trigger's content while copied. The original content is restored afterwards.</td></tr>
      <tr><td><code>.is-copied</code></td><td>Added to the trigger after a successful copy, removed after the reset delay.</td></tr>
      <tr><td><code>aksara:clipboard:copy</code></td><td>Fired on the trigger after a successful copy. Bubbles. <code>event.detail.text</code> is the copied text.</td></tr>
      <tr><td><code>aksara:clipboard:error</code></td><td>Fired on the trigger when copying failed or there was nothing to copy. Bubbles. <code>event.detail.text</code> is the text it tried to copy.</td></tr>
      <tr><td><code>Aksara.clipboard(target, text?)</code></td><td>Copies <code>text</code>, or the value / text of <code>target</code> (selector or element). Returns <code>Promise&lt;boolean&gt;</code>. No classes, no events.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## String Component

`CopyButton` renders a `.copy-btn` with both states and the right data attributes. `CopyField` renders a `.copy-field` with the value in a `<code>` and an icon-only ghost `CopyButton`.

```ts
import { CopyButton, CopyField } from "@abydahana/aksara-ui/components";

CopyButton({ text: "INV-2025-00481" }); // "Copy" → "Copied"
CopyButton({ target: "#apiKey", label: "Copy key", copiedLabel: "Key copied" });
CopyButton({ text: "ORD-10482", iconOnly: true, variant: "ghost", size: "sm", label: "Copy order" });
CopyField({ value: "npm install @abydahana/aksara-ui", label: "Copy install command" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>CopyButton prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>text</code></td><td><code>string</code></td><td>—</td><td>Literal text to copy (<code>data-clipboard-text</code>).</td></tr>
      <tr><td><code>target</code></td><td><code>string</code></td><td>—</td><td>Selector whose value or text is copied (<code>data-clipboard</code>), for example <code>"#apiKey"</code>.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td><code>"Copy"</code></td><td>Idle label. With <code>iconOnly</code>, the <code>aria-label</code> and <code>title</code>.</td></tr>
      <tr><td><code>copiedLabel</code></td><td><code>string</code></td><td><code>"Copied"</code></td><td>Label of the copied state. Visually hidden with <code>iconOnly</code>.</td></tr>
      <tr><td><code>iconOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Square icon button (<code>.btn-icon</code>).</td></tr>
      <tr><td><code>variant</code></td><td><code>"plain" | "ghost" | "subtle"</code></td><td><code>"plain"</code></td><td>Adds <code>.btn-{variant}</code>.</td></tr>
      <tr><td><code>size</code></td><td><code>"sm" | "md" | "lg"</code></td><td><code>"md"</code></td><td>Adds <code>.btn-sm</code> or <code>.btn-lg</code>.</td></tr>
      <tr><td><code>resetAfter</code></td><td><code>number</code></td><td><code>2000</code></td><td>Duration of the copied state in ms (<code>data-clipboard-reset</code>).</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes.</td></tr>
    </tbody>
  </table>
</div>
::end

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>CopyField prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>value</code></td><td><code>string</code></td><td>—</td><td>Value shown and copied. Escaped.</td></tr>
      <tr><td><code>id</code></td><td><code>string</code></td><td>—</td><td>Id of the <code>&lt;code&gt;</code> element.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td><code>"Copy"</code></td><td>Accessible name of the copy button.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on <code>.copy-field</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

Pass `text` or `target`. Without either, the button copies its own label ("Copy"), which is rarely what you want.

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.copy-btn</code></td><td>Copy button with an idle and a copied state. Success text color while <code>.is-copied</code>.</td></tr>
      <tr><td><code>.copy-btn-idle</code></td><td>Icon and label shown by default.</td></tr>
      <tr><td><code>.copy-btn-done</code></td><td>Check icon and "Copied" label, shown only while <code>.is-copied</code>.</td></tr>
      <tr><td><code>.is-copied</code></td><td>State class added by the runtime after a successful copy.</td></tr>
      <tr><td><code>.copy-field</code></td><td>Monospace read-only box: subtle background, border, value plus trailing button.</td></tr>
      <tr><td><code>.copy-field &gt; code</code>, <code>.copy-field &gt; span</code></td><td>The value. Fills the space and truncates with an ellipsis.</td></tr>
    </tbody>
  </table>
</div>
::end
