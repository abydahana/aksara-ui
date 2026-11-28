# Form Layout

Forms are laid out with the regular grid (`row`, `col-*`, `gy-*`) plus a few form-specific helpers: `col-form-label` for horizontal forms, `form-fieldset` / `form-legend` for grouped sections, and `form-actions` for the button row. Every example below is a complete, copy-ready form.

---

## Stacked

The default: one field per row, labels on top. `vstack gap-3` spaces the fields.

::html
<div class="docs-preview">
  <form class="vstack gap-3 max-w-[420px]" onsubmit="return false">
    <div>
      <label class="form-label required" for="lyStName">Name</label>
      <input id="lyStName" class="form-control" />
    </div>
    <div>
      <label class="form-label required" for="lyStEmail">Email</label>
      <input id="lyStEmail" class="form-control" type="email" />
    </div>
    <div>
      <label class="form-label" for="lyStMsg">Message</label>
      <textarea id="lyStMsg" class="form-control" rows="3"></textarea>
    </div>
    <label class="form-check"><input class="form-check-input" type="checkbox" /> <span class="form-check-label">Send me a copy</span></label>
    <button class="btn btn-primary [align-self:flex-start]" type="submit">Send message</button>
  </form>
</div>
::end

```html
<form class="vstack gap-3">
  <div>
    <label class="form-label required" for="name">Name</label>
    <input id="name" class="form-control" />
  </div>
  ...
  <button class="btn btn-primary" type="submit">Send message</button>
</form>
```

```js components
import { Button, FormLabel, Input } from "@abydahana/aksara-ui/components";

`<form class="vstack gap-3">
  <div>
    ${FormLabel({ label: "Name", htmlFor: "name", required: true })}
    ${Input({ id: "name" })}
  </div>
  ...
  ${Button({ label: "Send message", type: "submit" })}
</form>`;
```

---

## Grid

Use responsive columns for related fields. `gy-3` adds vertical space when columns wrap.

::html
<div class="docs-preview">
  <form class="row gap-3" onsubmit="return false">
    <div class="col-12 md:col-6">
      <label class="form-label" for="lyGrFirst">First name</label>
      <input id="lyGrFirst" class="form-control" />
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="lyGrLast">Last name</label>
      <input id="lyGrLast" class="form-control" />
    </div>
    <div class="col-12">
      <label class="form-label" for="lyGrAddress">Address</label>
      <input id="lyGrAddress" class="form-control" placeholder="Street and number" />
    </div>
    <div class="col-12 md:col-5">
      <label class="form-label" for="lyGrCity">City</label>
      <input id="lyGrCity" class="form-control" />
    </div>
    <div class="col-12 md:col-4">
      <label class="form-label" for="lyGrProvince">State</label>
      <select id="lyGrProvince" class="form-select">
        <option value="">Choose…</option>
        <option>California</option>
        <option>New York</option>
        <option>Texas</option>
        <option>Washington</option>
        <option>Oregon</option>
        <option>Massachusetts</option>
      </select>
    </div>
    <div class="col-12 md:col-3">
      <label class="form-label" for="lyGrZip">Postal code</label>
      <input id="lyGrZip" class="form-control" inputmode="numeric" />
    </div>
  </form>
</div>
::end

```html
<form class="row gap-3">
  <div class="col-12 md:col-6">...</div>
  <div class="col-12 md:col-6">...</div>
  <div class="col-12">...</div>
</form>
```

```js components
import { FormCol, FormRow } from "@abydahana/aksara-ui/components";

FormRow({
  as: "form",
  gutter: 3,
  children:
    FormCol({ size: 12, md: 6, children: "..." }) +
    FormCol({ size: 12, md: 6, children: "..." }) +
    FormCol({ size: 12, children: "..." })
});
```

---

## Horizontal

Labels beside fields. `col-form-label` pads the label so its text lines up with the field's text.

::html
<div class="docs-preview">
  <form class="vstack gap-3" onsubmit="return false">
    <div class="row gap-2">
      <label class="col-12 md:col-3 col-form-label required" for="lyHzEmail">Email</label>
      <div class="col-12 md:col-9"><input id="lyHzEmail" class="form-control" type="email" /></div>
    </div>
    <div class="row gap-2">
      <label class="col-12 md:col-3 col-form-label" for="lyHzPassword">Password</label>
      <div class="col-12 md:col-9">
        <input id="lyHzPassword" class="form-control" type="password" />
        <span class="form-text">8+ characters with a number.</span>
      </div>
    </div>
    <div class="row gap-2">
      <span class="col-12 md:col-3 col-form-label">Plan</span>
      <div class="col-12 md:col-9">
        <label class="form-radio form-check-inline"><input type="radio" name="lyHzPlan" checked /> <span class="form-check-label">Monthly</span></label>
        <label class="form-radio form-check-inline"><input type="radio" name="lyHzPlan" /> <span class="form-check-label">Yearly</span></label>
      </div>
    </div>
    <div class="row gap-2">
      <span class="col-12 md:col-3 col-form-label">Workspace ID</span>
      <div class="col-12 md:col-9"><input class="form-control-plaintext" readonly value="ws_7Hq2Lm" aria-label="Workspace ID" /></div>
    </div>
  </form>
</div>
::end

```html
<div class="row gap-2">
  <label class="col-12 md:col-3 col-form-label" for="email">Email</label>
  <div class="col-12 md:col-9"><input id="email" class="form-control" type="email" /></div>
</div>
```

```js components
import { FormCol, FormRow, Input } from "@abydahana/aksara-ui/components";

FormRow({
  gutter: 2,
  children:
    '<label class="col-12 md:col-3 col-form-label" for="email">Email</label>' +
    FormCol({ size: 12, md: 9, children: Input({ id: "email", type: "email" }) })
});
```

---

## Inline

Toolbars and filter rows: put the fields in an `hstack` that wraps.

::html
<div class="docs-preview">
  <form class="hstack gap-2 flex-wrap" onsubmit="return false">
    <div class="form-icon max-w-[240px]">
      <span class="form-icon-start mdi mdi-magnify"></span>
      <input class="form-control" placeholder="Search" aria-label="Search" />
    </div>
    <select class="form-select max-w-[160px]" data-select-search="false" aria-label="Status">
      <option>All statuses</option><option>Paid</option><option>Pending</option><option>Overdue</option>
    </select>
    <input class="form-control max-w-[170px]" type="month" value="2026-11" aria-label="Month" />
    <label class="form-switch"><input type="checkbox" role="switch" /> <span class="form-check-label">Only mine</span></label>
    <button class="btn btn-primary" type="submit">Apply</button>
  </form>
</div>
::end

```html
<form class="hstack gap-2 flex-wrap">
  <input class="form-control max-w-[240px]" placeholder="Search" />
  <select class="form-select" data-select-search="false">
    ...
  </select>
  <button class="btn btn-primary">Apply</button>
</form>
```

```js components
import { Button, Input, Select } from "@abydahana/aksara-ui/components";

`<form class="hstack gap-2 flex-wrap">
  ${Input({ placeholder: "Search", attributes: { style: "max-width:240px" } })}
  ${Select({ search: false, options: [{ label: "All statuses", value: "" }] })}
  ${Button({ label: "Apply", type: "submit" })}
</form>`;
```

---

## Fieldsets And Actions

`form-fieldset` is a bordered section with a `form-legend` title; `form-actions` is a right-aligned button row separated by a hairline.

::html
<div class="docs-preview">
  <form class="vstack gap-3" onsubmit="return false">
    <fieldset class="form-fieldset">
      <legend class="form-legend">Contact</legend>
      <div class="row gap-3">
        <div class="col-12 md:col-6"><label class="form-label" for="lyFsPhone">Phone</label><input id="lyFsPhone" class="form-control" type="tel" /></div>
        <div class="col-12 md:col-6"><label class="form-label" for="lyFsEmail">Email</label><input id="lyFsEmail" class="form-control" type="email" /></div>
      </div>
    </fieldset>
    <fieldset class="form-fieldset">
      <legend class="form-legend">Preferences</legend>
      <div class="vstack gap-1">
        <label class="form-switch"><input type="checkbox" role="switch" checked /> <span class="form-check-label">Product updates</span></label>
        <label class="form-switch"><input type="checkbox" role="switch" /> <span class="form-check-label">Marketing emails</span></label>
      </div>
    </fieldset>
    <div class="form-actions">
      <button class="btn btn-plain" type="button">Cancel</button>
      <button class="btn btn-primary" type="submit">Save</button>
    </div>
  </form>
</div>
::end

```html
<fieldset class="form-fieldset">
  <legend class="form-legend">Contact</legend>
  ...
</fieldset>
<div class="form-actions">
  <button class="btn btn-plain" type="button">Cancel</button>
  <button class="btn btn-primary" type="submit">Save</button>
</div>
```

```js components
import { Button } from "@abydahana/aksara-ui/components";

`<fieldset class="form-fieldset">
  <legend class="form-legend">Contact</legend>
  ...
</fieldset>
<div class="form-actions">
  ${Button({ label: "Cancel", plain: true })}
  ${Button({ label: "Save", type: "submit" })}
</div>`;
```

---

## Settings Page With Section Descriptions

A two-column layout: the section title and description on the left, the fields on the right.

::html
<div class="docs-preview">
  <form class="vstack gap-5" onsubmit="return false">
    <div class="row gap-3">
      <div class="col-12 md:col-4">
        <h5 class="m-0">Profile</h5>
        <p class="text-subtle text-sm mt-1 mb-0">Your name and photo are visible to everyone in the workspace.</p>
      </div>
      <div class="col-12 md:col-8">
        <div class="card"><div class="card-body vstack gap-3">
          <div class="hstack gap-3">
            <span class="avatar avatar-primary avatar-lg rounded-full">DA</span>
            <label class="btn btn-plain btn-sm">Change photo <input type="file" accept="image/*" class="visually-hidden" /></label>
          </div>
          <div class="row gap-3">
            <div class="col-12 md:col-6"><label class="form-label" for="lySpName">Display name</label><input id="lySpName" class="form-control" value="Grace" /></div>
            <div class="col-12 md:col-6"><label class="form-label" for="lySpTitle">Job title</label><input id="lySpTitle" class="form-control" value="Product designer" /></div>
          </div>
        </div></div>
      </div>
    </div>
    <div class="row gap-3">
      <div class="col-12 md:col-4">
        <h5 class="m-0">Notifications</h5>
        <p class="text-subtle text-sm mt-1 mb-0">Choose how we reach you.</p>
      </div>
      <div class="col-12 md:col-8">
        <div class="card"><div class="card-body vstack gap-2">
          <label class="form-check-card">
            <input class="form-check-input" type="radio" name="lySpNotify" checked />
            <span class="form-check-card-body"><span class="form-check-card-title">Everything</span><span class="form-check-card-text">All activity in your projects.</span></span>
          </label>
          <label class="form-check-card">
            <input class="form-check-input" type="radio" name="lySpNotify" />
            <span class="form-check-card-body"><span class="form-check-card-title">Mentions only</span><span class="form-check-card-text">When someone @mentions you.</span></span>
          </label>
        </div></div>
      </div>
    </div>
    <div class="form-actions">
      <button class="btn btn-plain" type="reset">Discard</button>
      <button class="btn btn-primary" type="submit">Save changes</button>
    </div>
  </form>
</div>
::end

---

## Checkout Form

::html
<div class="docs-preview">
  <form class="row gap-4" onsubmit="return false">
    <div class="col-12 lg:col-7 vstack gap-4">
      <div>
        <h5 class="mt-0 mb-3">Shipping</h5>
        <div class="row gap-3">
          <div class="col-12"><label class="form-label required" for="coName">Recipient</label><input id="coName" class="form-control" autocomplete="name" /></div>
          <div class="col-12"><label class="form-label required" for="coAddr">Address</label><textarea id="coAddr" class="form-control" rows="2" autocomplete="street-address"></textarea></div>
          <div class="col-12 md:col-6"><label class="form-label required" for="coCity">City</label>
            <select id="coCity" class="form-select"><option value="">Choose a city…</option><option>London</option><option>Manchester</option><option>Leeds</option><option>Bristol</option><option>Edinburgh</option></select>
          </div>
          <div class="col-12 md:col-6"><label class="form-label required" for="coPhone">Phone</label>
            <div class="input-group"><span class="input-group-text">+44</span><input id="coPhone" class="form-control" type="tel" autocomplete="tel-national" /></div>
          </div>
        </div>
      </div>
      <div>
        <h5 class="mt-0 mb-3">Delivery</h5>
        <div class="vstack gap-2">
          <label class="form-check-card"><input class="form-check-input" type="radio" name="coShip" checked /><span class="form-check-card-body"><span class="form-check-card-title">Regular</span><span class="form-check-card-text">3–5 business days</span></span><span class="fw-semibold text-sm">$5.00</span></label>
          <label class="form-check-card"><input class="form-check-input" type="radio" name="coShip" /><span class="form-check-card-body"><span class="form-check-card-title">Express</span><span class="form-check-card-text">Next business day</span></span><span class="fw-semibold text-sm">$12.00</span></label>
        </div>
      </div>
      <div>
        <h5 class="mt-0 mb-3">Payment</h5>
        <div class="row gap-3">
          <div class="col-12"><label class="form-label" for="coCard">Card number</label>
            <div class="form-icon"><span class="form-icon-start mdi mdi-credit-card-outline"></span><input id="coCard" class="form-control" inputmode="numeric" autocomplete="cc-number" placeholder="1234 5678 9012 3456" /></div>
          </div>
          <div class="col-6"><label class="form-label" for="coExp">Expiry</label><input id="coExp" class="form-control" placeholder="MM / YY" autocomplete="cc-exp" /></div>
          <div class="col-6"><label class="form-label" for="coCvc">CVC</label><input id="coCvc" class="form-control" inputmode="numeric" autocomplete="cc-csc" /></div>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-5">
      <div class="card card-muted">
        <div class="card-body vstack gap-3">
          <h5 class="m-0">Order summary</h5>
          <div class="hstack justify-between text-sm"><span>Aksara Pro (1 year)</span><span>$149.00</span></div>
          <div class="hstack justify-between text-sm"><span>Shipping</span><span>$5.00</span></div>
          <div class="input-group input-group-sm"><input class="form-control" placeholder="Promo code" aria-label="Promo code" /><button class="btn btn-plain" type="button">Apply</button></div>
          <div class="hstack justify-between fw-semibold [border-top:1px_solid_var(--aksara-border-subtle)] [padding-top:.75rem]"><span>Total</span><span>$154.00</span></div>
          <label class="form-check"><input class="form-check-input" type="checkbox" required /> <span class="form-check-label">I agree to the terms</span></label>
          <button class="btn btn-primary btn-block" type="submit">Pay now</button>
        </div>
      </div>
    </div>
  </form>
</div>
::end

---

## String Components

```js
import { FormRow, FormCol, FormGroup, FormLabel, Input } from "@abydahana/aksara-ui/components";

FormRow({
  gutter: 3,
  children:
    FormCol({
      size: 12,
      md: 6,
      children: FormLabel({ label: "First name", htmlFor: "first" }) + Input({ id: "first" })
    }) +
    FormCol({ size: 12, md: 6, children: FormLabel({ label: "Last name", htmlFor: "last" }) + Input({ id: "last" }) })
});
```
