# Checks, Radios & Switches

Custom-drawn checkboxes, radio buttons and switches that keep the native `<input>` underneath for keyboard and form support, plus two richer patterns: selectable cards and toggle buttons.

---

## Checkboxes

Wrap the input and its text in `label.form-check`; the whole label is clickable. Add `data-indeterminate` for the mixed state (it can only be set from JavaScript, Aksara does it on load).

::html
<div class="docs-preview">
  <div class="vstack gap-1">
    <label class="form-check"><input class="form-check-input" type="checkbox" /> <span class="form-check-label">Default checkbox</span></label>
    <label class="form-check"><input class="form-check-input" type="checkbox" checked /> <span class="form-check-label">Checked checkbox</span></label>
    <label class="form-check"><input class="form-check-input" type="checkbox" data-indeterminate /> <span class="form-check-label">Indeterminate (some children selected)</span></label>
    <label class="form-check"><input class="form-check-input" type="checkbox" disabled /> <span class="form-check-label">Disabled</span></label>
    <label class="form-check"><input class="form-check-input" type="checkbox" checked disabled /> <span class="form-check-label">Checked and disabled</span></label>
  </div>
</div>
::end

```html
<label class="form-check">
  <input class="form-check-input" type="checkbox" checked />
  <span class="form-check-label">Checked checkbox</span>
</label>

<input class="form-check-input" type="checkbox" data-indeterminate />
```

```js components
import { Checkbox } from "@abydahana/aksara-ui/components";

Checkbox({ id: "checkedCheck", label: "Checked checkbox", checked: true });

Checkbox({ attributes: { "data-indeterminate": true } });
```

```js
// Or from script
document.querySelector("#selectAll").indeterminate = true;
```

---

## Radios

Radios with the same `name` form a group. Use `label.form-radio` (or `form-check` with `type="radio"`).

::html
<div class="docs-preview">
  <div class="vstack gap-1">
    <label class="form-radio"><input type="radio" name="rdShip" checked /> <span class="form-check-label">Standard shipping (3–5 days)</span></label>
    <label class="form-radio"><input type="radio" name="rdShip" /> <span class="form-check-label">Express shipping (1–2 days)</span></label>
    <label class="form-radio"><input type="radio" name="rdShip" /> <span class="form-check-label">Same-day courier</span></label>
    <label class="form-radio"><input type="radio" name="rdShip" disabled /> <span class="form-check-label">Pickup (unavailable)</span></label>
  </div>
</div>
::end

```html
<label class="form-radio">
  <input type="radio" name="shipping" checked />
  <span class="form-check-label">Standard shipping</span>
</label>
<label class="form-radio">
  <input type="radio" name="shipping" />
  <span class="form-check-label">Express shipping</span>
</label>
```

```js components
import { Radio } from "@abydahana/aksara-ui/components";

Radio({ name: "shipping", value: "standard", id: "shipStandard", label: "Standard shipping", checked: true });
Radio({ name: "shipping", value: "express", id: "shipExpress", label: "Express shipping" });
```

---

## Switches

`label.form-switch` turns a checkbox into an on/off toggle. Add `role="switch"` so screen readers announce it as one. The thumb slides the other way in RTL.

::html
<div class="docs-preview">
  <div class="vstack gap-1">
    <label class="form-switch"><input type="checkbox" role="switch" checked /> <span class="form-check-label">Email notifications</span></label>
    <label class="form-switch"><input type="checkbox" role="switch" /> <span class="form-check-label">Weekly digest</span></label>
    <label class="form-switch"><input type="checkbox" role="switch" checked disabled /> <span class="form-check-label">Security alerts (always on)</span></label>
    <label class="form-switch"><input type="checkbox" role="switch" disabled /> <span class="form-check-label">Beta features (disabled)</span></label>
  </div>
</div>
::end

```html
<label class="form-switch">
  <input type="checkbox" role="switch" checked />
  <span class="form-check-label">Email notifications</span>
</label>
```

```js components
import { Switch } from "@abydahana/aksara-ui/components";

Switch({ id: "emailNotify", label: "Email notifications", checked: true });
```

---

## Inline

Add `form-check-inline` to place options side by side.

::html
<div class="docs-preview">
  <div class="mb-3">
    <label class="form-check form-check-inline"><input class="form-check-input" type="checkbox" checked /> <span class="form-check-label">Mon</span></label>
    <label class="form-check form-check-inline"><input class="form-check-input" type="checkbox" checked /> <span class="form-check-label">Tue</span></label>
    <label class="form-check form-check-inline"><input class="form-check-input" type="checkbox" /> <span class="form-check-label">Wed</span></label>
    <label class="form-check form-check-inline"><input class="form-check-input" type="checkbox" checked /> <span class="form-check-label">Thu</span></label>
    <label class="form-check form-check-inline"><input class="form-check-input" type="checkbox" /> <span class="form-check-label">Fri</span></label>
  </div>
  <div>
    <label class="form-radio form-check-inline"><input type="radio" name="rdBilling" checked /> <span class="form-check-label">Monthly</span></label>
    <label class="form-radio form-check-inline"><input type="radio" name="rdBilling" /> <span class="form-check-label">Yearly (save 20%)</span></label>
  </div>
</div>
::end

```html
<label class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" />
  <span class="form-check-label">Mon</span>
</label>
```

```js components
import { Checkbox } from "@abydahana/aksara-ui/components";

Checkbox({ id: "dayMon", label: "Mon", inline: true });
```

---

## Heights That Line Up

Checks, radios and switches are 42px tall like `.form-control`, and take the same size suffixes (`form-check-sm`, `form-switch-lg`, ...), so a switch next to an input never shifts the row.

::html
<div class="docs-preview">
  <div class="row gap-3 [align-items:flex-end]">
    <div class="col-12 md:col-5">
      <label class="form-label" for="hlDomain">Domain</label>
      <input id="hlDomain" class="form-control" value="studio.example.com" />
    </div>
    <div class="col-12 md:col-4">
      <label class="form-switch"><input type="checkbox" role="switch" checked /> <span class="form-check-label">Force HTTPS</span></label>
    </div>
    <div class="col-12 md:col-3">
      <label class="form-check"><input class="form-check-input" type="checkbox" /> <span class="form-check-label">Primary</span></label>
    </div>
  </div>
  <div class="hstack gap-3 mt-3">
    <input class="form-control form-control-sm max-w-[200px]" placeholder="Small field" aria-label="Small field" />
    <label class="form-switch form-switch-sm"><input type="checkbox" role="switch" checked /> <span class="form-check-label">Small switch</span></label>
  </div>
</div>
::end

```html
<label class="form-switch form-switch-sm">...</label> <label class="form-check form-check-lg">...</label>
```

```js components
import { Checkbox, Switch } from "@abydahana/aksara-ui/components";

Switch({ id: "smallSwitch", label: "Small switch", size: "sm", checked: true });
Checkbox({ id: "largeCheck", label: "Large checkbox", size: "lg" });
```

---

## Validation

Add `is-invalid` to the input and a `.form-error` after the group.

::html
<div class="docs-preview">
  <label class="form-check"><input class="form-check-input is-invalid" type="checkbox" /> <span class="form-check-label">I agree to the terms of service</span></label>
  <span class="form-error">You must accept the terms to continue.</span>
</div>
::end

```html
<label class="form-check">
  <input class="form-check-input is-invalid" type="checkbox" required />
  <span class="form-check-label">I agree to the terms of service</span>
</label>
<span class="form-error">You must accept the terms to continue.</span>
```

```js components
import { Checkbox, FormError } from "@abydahana/aksara-ui/components";

Checkbox({
  id: "terms",
  label: "I agree to the terms of service",
  isInvalid: true,
  attributes: { required: true }
});
FormError({ message: "You must accept the terms to continue." });
```

---

## Selectable Cards

`label.form-check-card` makes a whole card the click target for a radio or checkbox. The selected card gets a primary border and tint; the keyboard focus ring wraps the card. Put the title and description in `.form-check-card-body`.

::html
<div class="docs-preview">
  <h4 class="mt-0 mb-3 fw-semibold text-sm">Radio cards</h4>
  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <label class="form-check-card h-100">
        <input class="form-check-input" type="radio" name="ccPlan" />
        <span class="form-check-card-body">
          <span class="form-check-card-title">Starter</span>
          <span class="form-check-card-text">3 projects, community support.</span>
          <span class="fw-bold mt-2">Free</span>
        </span>
      </label>
    </div>
    <div class="col-12 md:col-4">
      <label class="form-check-card h-100">
        <input class="form-check-input" type="radio" name="ccPlan" checked />
        <span class="form-check-card-body">
          <span class="form-check-card-title">Pro <span class="badge badge-soft-primary">Popular</span></span>
          <span class="form-check-card-text">Unlimited projects and custom domains.</span>
          <span class="fw-bold mt-2">$15 / mo</span>
        </span>
      </label>
    </div>
    <div class="col-12 md:col-4">
      <label class="form-check-card h-100">
        <input class="form-check-input" type="radio" name="ccPlan" disabled />
        <span class="form-check-card-body">
          <span class="form-check-card-title">Enterprise</span>
          <span class="form-check-card-text">SSO and audit logs. Contact sales.</span>
          <span class="fw-bold mt-2">Custom</span>
        </span>
      </label>
    </div>
  </div>

  <h4 class="mt-5 mb-3 fw-semibold text-sm">Checkbox cards with icons</h4>
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-check-card">
        <span class="hstack justify-center rounded-[10px] bg-primary/10 text-primary w-[40px] h-[40px] text-[1.25rem]"><span class="mdi mdi-email-outline"></span></span>
        <span class="form-check-card-body">
          <span class="form-check-card-title">Email</span>
          <span class="form-check-card-text">Daily summary at 08:00.</span>
        </span>
        <input class="form-check-input" type="checkbox" checked />
      </label>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-check-card">
        <span class="hstack justify-center rounded-[10px] bg-success/10 text-success w-[40px] h-[40px] text-[1.25rem]"><span class="mdi mdi-whatsapp"></span></span>
        <span class="form-check-card-body">
          <span class="form-check-card-title">WhatsApp</span>
          <span class="form-check-card-text">Instant alerts for failed payments.</span>
        </span>
        <input class="form-check-input" type="checkbox" />
      </label>
    </div>
  </div>

  <h4 class="mt-5 mb-3 fw-semibold text-sm">Hidden input (tiles)</h4>
  <div class="docs-row">
    <label class="form-check-card form-check-card-hidden w-[110px] [flex-direction:column] [align-items:center] [text-align:center]"><input type="radio" name="ccSize" /><span class="form-check-card-title">S</span><span class="form-check-card-text">36–38</span></label>
    <label class="form-check-card form-check-card-hidden w-[110px] [flex-direction:column] [align-items:center] [text-align:center]"><input type="radio" name="ccSize" checked /><span class="form-check-card-title">M</span><span class="form-check-card-text">39–41</span></label>
    <label class="form-check-card form-check-card-hidden w-[110px] [flex-direction:column] [align-items:center] [text-align:center]"><input type="radio" name="ccSize" /><span class="form-check-card-title">L</span><span class="form-check-card-text">42–44</span></label>
    <label class="form-check-card form-check-card-hidden w-[110px] [flex-direction:column] [align-items:center] [text-align:center]"><input type="radio" name="ccSize" disabled /><span class="form-check-card-title">XL</span><span class="form-check-card-text">Sold out</span></label>
  </div>
</div>
::end

```html
<label class="form-check-card">
  <input class="form-check-input" type="radio" name="plan" checked />
  <span class="form-check-card-body">
    <span class="form-check-card-title">Pro</span>
    <span class="form-check-card-text">Unlimited projects and custom domains.</span>
  </span>
</label>

<!-- Hide the input and rely on the border -->
<label class="form-check-card form-check-card-hidden">
  <input type="radio" name="size" />
  <span class="form-check-card-title">M</span>
</label>
```

```js components
import { CheckCard } from "@abydahana/aksara-ui/components";

CheckCard({
  name: "plan",
  value: "pro",
  title: "Pro",
  description: "Unlimited projects and custom domains.",
  checked: true
});

// Hide the input and rely on the border
CheckCard({ name: "size", value: "m", title: "M", hideInput: true });
```

---

## Toggle Buttons

Put a visually hidden `input.btn-check` right before a `.btn` label. Checked outline and soft buttons turn solid; `btn-plain`, `btn-subtle` and `btn-ghost` look pressed. Radios make a single-choice group, checkboxes independent toggles.

::html
<div class="docs-preview">
  <h4 class="mt-0 mb-3 fw-semibold text-sm">Radio toggles in a button group</h4>
  <div class="btn-group" role="group" aria-label="View mode">
    <input type="radio" class="btn-check" name="tbView" id="tbList" checked />
    <label class="btn btn-outline-primary" for="tbList"><span class="mdi mdi-format-list-bulleted"></span> List</label>
    <input type="radio" class="btn-check" name="tbView" id="tbBoard" />
    <label class="btn btn-outline-primary" for="tbBoard"><span class="mdi mdi-view-column-outline"></span> Board</label>
    <input type="radio" class="btn-check" name="tbView" id="tbCalendar" />
    <label class="btn btn-outline-primary" for="tbCalendar"><span class="mdi mdi-calendar-month-outline"></span> Calendar</label>
  </div>

  <h4 class="mt-5 mb-3 fw-semibold text-sm">Checkbox toggles</h4>
  <div class="docs-row">
    <input type="checkbox" class="btn-check" id="tbBold" checked />
    <label class="btn btn-plain btn-icon" for="tbBold" aria-label="Bold"><span class="mdi mdi-format-bold"></span></label>
    <input type="checkbox" class="btn-check" id="tbItalic" />
    <label class="btn btn-plain btn-icon" for="tbItalic" aria-label="Italic"><span class="mdi mdi-format-italic"></span></label>
    <input type="checkbox" class="btn-check" id="tbUnderline" />
    <label class="btn btn-plain btn-icon" for="tbUnderline" aria-label="Underline"><span class="mdi mdi-format-underline"></span></label>
  </div>

  <h4 class="mt-5 mb-3 fw-semibold text-sm">Filter chips with soft buttons</h4>
  <div class="docs-row">
    <input type="checkbox" class="btn-check" id="tbOpen" checked />
    <label class="btn btn-soft-success btn-sm" for="tbOpen">Open</label>
    <input type="checkbox" class="btn-check" id="tbReview" />
    <label class="btn btn-soft-warning btn-sm" for="tbReview">In review</label>
    <input type="checkbox" class="btn-check" id="tbBlocked" />
    <label class="btn btn-soft-danger btn-sm" for="tbBlocked">Blocked</label>
    <input type="checkbox" class="btn-check" id="tbDone" disabled />
    <label class="btn btn-soft-secondary btn-sm" for="tbDone">Done</label>
  </div>
</div>
::end

```html
<div class="btn-group" role="group" aria-label="View mode">
  <input type="radio" class="btn-check" name="view" id="viewList" checked />
  <label class="btn btn-outline-primary" for="viewList">List</label>
  <input type="radio" class="btn-check" name="view" id="viewBoard" />
  <label class="btn btn-outline-primary" for="viewBoard">Board</label>
</div>
```

---

## Check-All Pattern

A common list header: a "select all" checkbox that shows the indeterminate state when only some rows are checked.

::html
<div class="docs-preview">
  <div class="list-group">
    <div class="list-group-item"><label class="form-check"><input class="form-check-input" type="checkbox" data-indeterminate /> <span class="form-check-label fw-semibold">All invoices (2 of 3 selected)</span></label></div>
    <div class="list-group-item"><label class="form-check"><input class="form-check-input" type="checkbox" checked /> <span class="form-check-label">INV-2041 · Maya Chen</span></label></div>
    <div class="list-group-item"><label class="form-check"><input class="form-check-input" type="checkbox" checked /> <span class="form-check-label">INV-2040 · Alex Morgan</span></label></div>
    <div class="list-group-item"><label class="form-check"><input class="form-check-input" type="checkbox" /> <span class="form-check-label">INV-2039 · Sofia Patel</span></label></div>
  </div>
</div>
::end

```js
const all = document.querySelector("#checkAll");
const rows = document.querySelectorAll(".row-check");
const sync = () => {
  const checked = [...rows].filter((row) => row.checked).length;
  all.checked = checked === rows.length;
  all.indeterminate = checked > 0 && checked < rows.length;
};
rows.forEach((row) => row.addEventListener("change", sync));
all.addEventListener("change", () => rows.forEach((row) => (row.checked = all.checked)));
```

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Class / attribute</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><code>form-check</code>, <code>form-check-input</code>, <code>form-check-label</code></td><td>Checkbox row, input and text.</td></tr>
      <tr><td><code>form-radio</code></td><td>Radio row.</td></tr>
      <tr><td><code>form-switch</code></td><td>Switch row.</td></tr>
      <tr><td><code>form-check-inline</code></td><td>Side-by-side options.</td></tr>
      <tr><td><code>form-check-{size}</code>, <code>form-radio-{size}</code>, <code>form-switch-{size}</code></td><td>Row height matching <code>form-control-{size}</code>.</td></tr>
      <tr><td><code>data-indeterminate</code></td><td>Sets the mixed state on load.</td></tr>
      <tr><td><code>form-check-card</code>, <code>form-check-card-body</code>, <code>-title</code>, <code>-text</code>, <code>form-check-card-hidden</code></td><td>Selectable cards.</td></tr>
      <tr><td><code>btn-check</code></td><td>Hidden input that drives the following <code>.btn</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## String Components

```js
import { Checkbox, Radio, RadioGroup, Switch, CheckCard } from "@abydahana/aksara-ui/components";

Checkbox({ name: "terms", label: "I agree to the terms", attributes: { required: true } });
RadioGroup({
  name: "billing",
  value: "monthly",
  inline: true,
  options: [
    { label: "Monthly", value: "monthly" },
    { label: "Yearly", value: "yearly" }
  ]
});
Switch({ name: "notify", label: "Email notifications", checked: true });
CheckCard({ name: "plan", value: "pro", title: "Pro", description: "Unlimited projects", checked: true });
```

`CheckCard` props: `title`, `description`, `name`, `value`, `id`, `type` (`"radio"` or `"checkbox"`), `checked`, `disabled`, `hideInput`, `aside` (extra HTML), `className`, `attributes`.
