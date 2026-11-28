# Form Controls

Text inputs, textareas, file pickers and the helpers around them: labels, hints, icons, character counters, password toggles and clear buttons. Selects, checks and ranges have their own pages: [Select](#/forms/select), [Checks, Radios & Switches](#/forms/checks), [Range](#/forms/range).

---

## Overview

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label required" for="ovName">Full name</label>
      <input id="ovName" class="form-control" placeholder="Grace Lee" />
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label required" for="ovEmail">Email</label>
      <div class="form-icon">
        <span class="form-icon-start mdi mdi-email-outline"></span>
        <input id="ovEmail" class="form-control" type="email" placeholder="you@company.com" />
      </div>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="ovPassword">Password</label>
      <div class="form-icon">
        <span class="form-icon-start mdi mdi-lock-outline"></span>
        <input id="ovPassword" class="form-control" type="password" value="aksara-ui" />
        <button type="button" class="form-icon-end" data-password-toggle aria-label="Show password" aria-pressed="false"><span class="mdi mdi-eye-outline"></span></button>
      </div>
      <span class="form-text">At least 8 characters.</span>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="ovRole">Role</label>
      <select id="ovRole" class="form-select">
        <option value="">Choose a role…</option>
        <option>Designer</option>
        <option>Engineer</option>
        <option>Product manager</option>
      </select>
    </div>
    <div class="col-12">
      <label class="form-label" for="ovBio">Bio <span class="form-label-hint">(optional)</span></label>
      <textarea id="ovBio" class="form-control" rows="3" maxlength="160" data-counter="#ovBioCount" placeholder="A sentence or two about you"></textarea>
      <span id="ovBioCount" class="form-counter"></span>
    </div>
  </div>
</div>
::end

---

## Text Inputs

`.form-control` styles every text-like `<input>` type the same way: 42px tall, soft border, a primary focus ring and a darker border on hover.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6"><label class="form-label" for="tiText">Text</label><input id="tiText" class="form-control" type="text" placeholder="Plain text" /></div>
    <div class="col-12 md:col-6"><label class="form-label" for="tiEmail">Email</label><input id="tiEmail" class="form-control" type="email" placeholder="name@example.com" /></div>
    <div class="col-12 md:col-6"><label class="form-label" for="tiNumber">Number</label><input id="tiNumber" class="form-control" type="number" value="42" min="0" /></div>
    <div class="col-12 md:col-6"><label class="form-label" for="tiTel">Telephone</label><input id="tiTel" class="form-control" type="tel" placeholder="+1 (415) 555-0123" /></div>
    <div class="col-12 md:col-6"><label class="form-label" for="tiUrl">URL</label><input id="tiUrl" class="form-control" type="url" placeholder="https://" /></div>
    <div class="col-12 md:col-6"><label class="form-label" for="tiSearch">Search</label><input id="tiSearch" class="form-control" type="search" placeholder="Search…" /></div>
    <div class="col-12 md:col-4"><label class="form-label" for="tiDate">Date</label><input id="tiDate" class="form-control" type="date" value="2026-11-28" /></div>
    <div class="col-12 md:col-4"><label class="form-label" for="tiTime">Time</label><input id="tiTime" class="form-control" type="time" value="09:30" /></div>
    <div class="col-12 md:col-4"><label class="form-label" for="tiMonth">Month</label><input id="tiMonth" class="form-control" type="month" value="2026-11" /></div>
  </div>
</div>
::end

```html
<label class="form-label" for="email">Email</label>
<input id="email" class="form-control" type="email" placeholder="name@example.com" />
```

```js components
import { FormLabel, Input } from "@abydahana/aksara-ui/components";

FormLabel({ label: "Email", htmlFor: "email" });
Input({ id: "email", type: "email", placeholder: "name@example.com" });
```

---

## Labels, Hints And Help Text

- `.form-label` sits above the field. Add `.required` for a red asterisk, and wrap optional notes in `.form-label-hint`.
- `.form-text` is muted help text under the field; link it with `aria-describedby`.
- `.form-error` is the error message (see [Validation](#/forms/validation)).

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label required" for="lbCompany">Company</label>
      <input id="lbCompany" class="form-control" aria-describedby="lbCompanyHelp" />
      <span id="lbCompanyHelp" class="form-text">Shown on invoices.</span>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="lbVat">VAT number <span class="form-label-hint">(optional)</span></label>
      <input id="lbVat" class="form-control" placeholder="ID 01.234.567.8-901.000" />
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label required" for="lbEmail">Billing email</label>
      <input id="lbEmail" class="form-control is-invalid" value="billing@" aria-describedby="lbEmailError" />
      <span id="lbEmailError" class="form-error">Enter a complete email address.</span>
    </div>
  </div>
</div>
::end

```html
<label class="form-label required" for="company">Company</label>
<input id="company" class="form-control" aria-describedby="companyHelp" />
<span id="companyHelp" class="form-text">Shown on invoices.</span>

<label class="form-label" for="vat">VAT number <span class="form-label-hint">(optional)</span></label>
```

```js components
import { FormLabel, FormText, Input } from "@abydahana/aksara-ui/components";

FormLabel({ label: "Company", htmlFor: "company", required: true });
Input({ id: "company", attributes: { "aria-describedby": "companyHelp" } });
FormText({ id: "companyHelp", text: "Shown on invoices." });

FormLabel({ label: "VAT number", htmlFor: "vat", hint: "(optional)" });
```

---

## Textarea

Textareas use `.form-control` too and **grow with their content** out of the box: `rows` sets the starting height, and the field gets taller as the user types instead of scrolling (`max-h-[…]` caps it, after which it scrolls). Add `data-autogrow="false"` for a fixed height.

The resize handle only works vertically, and a textarea never gets shorter than one row: exactly the height of an input of the same size (`form-control-xs` 26px, `sm` 31px, default 42px, `lg` 48px, `xl` 56px, `2xl` 64px), so a one-row textarea lines up with the inputs next to it. Dragging it taller keeps that height while typing; `resize-none` removes the handle.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="taGrow">Message</label>
      <textarea id="taGrow" class="form-control" rows="2" placeholder="Type a few lines: the field grows"></textarea>
      <span class="form-text">Default: starts at 2 rows and grows.</span>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="taFixed">Notes</label>
      <textarea id="taFixed" class="form-control" rows="4" data-autogrow="false" placeholder="Fixed at four rows, scrolls when full"></textarea>
      <span class="form-text"><code>data-autogrow="false"</code>: fixed height.</span>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="taOne">Comment</label>
      <textarea id="taOne" class="form-control" rows="1" placeholder="One row, like an input"></textarea>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="taCap">Description</label>
      <textarea id="taCap" class="form-control max-h-[160px]" rows="2" placeholder="Grows up to 160px, then scrolls"></textarea>
    </div>
  </div>
</div>
::end

```html
<!-- Grows with its content (default) -->
<textarea class="form-control" rows="2"></textarea>

<!-- Fixed height -->
<textarea class="form-control" rows="4" data-autogrow="false"></textarea>

<!-- Grows up to 160px, then scrolls -->
<textarea class="form-control max-h-[160px]" rows="2"></textarea>
```

```js components
import { Textarea } from "@abydahana/aksara-ui/components";

Textarea({ rows: 2 }); // grows
Textarea({ rows: 4, autoGrow: false }); // fixed height
Textarea({ rows: 2, className: "max-h-[160px]" });
```

---

## Character Counter

Point `data-counter` at an element and Aksara keeps it updated with `length / maxlength` (or just the length without `maxlength`). `.form-counter` right-aligns it under the field and turns red at 90% of the limit.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="ccTitle">Title</label>
      <input id="ccTitle" class="form-control" maxlength="60" data-counter="#ccTitleCount" value="Quarterly business review" />
      <span id="ccTitleCount" class="form-counter"></span>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="ccTweet">Post</label>
      <textarea id="ccTweet" class="form-control" rows="3" maxlength="140" data-counter="#ccTweetCount">Shipping the new Aksara palette today: near-black neutrals with a faint warm tint, soft fills and proper focus rings everywhere. Feedback welcome!</textarea>
      <span id="ccTweetCount" class="form-counter"></span>
    </div>
  </div>
</div>
::end

```html
<textarea class="form-control" maxlength="140" data-counter="#postCount"></textarea>
<span id="postCount" class="form-counter"></span>
```

```js components
import { Textarea } from "@abydahana/aksara-ui/components";

Textarea({ maxLength: 140, counter: "#postCount" });
// followed by <span id="postCount" class="form-counter"></span>
```

---

## Inputs With Icons

Wrap the field in `.form-icon` and add a `.form-icon-start` and/or `.form-icon-end` slot. The field's padding adjusts automatically, and the start icon takes the primary color while the field is focused. A `<button>` in a slot stays clickable.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="form-icon">
        <span class="form-icon-start mdi mdi-magnify"></span>
        <input class="form-control" type="search" placeholder="Search projects" aria-label="Search projects" />
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="form-icon">
        <input class="form-control" placeholder="Website" aria-label="Website" value="aksara.dev" />
        <span class="form-icon-end mdi mdi-check-circle text-success"></span>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="form-icon">
        <span class="form-icon-start mdi mdi-currency-usd"></span>
        <input class="form-control" type="number" placeholder="0.00" aria-label="Amount" />
        <span class="form-icon-end text-sm fw-semibold">USD</span>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="form-icon">
        <span class="form-icon-start mdi mdi-calendar-blank-outline"></span>
        <input class="form-control" type="date" aria-label="Due date" />
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="form-icon">
  <span class="form-icon-start mdi mdi-magnify"></span>
  <input class="form-control" type="search" placeholder="Search projects" />
</div>
```

```js components
import { Input } from "@abydahana/aksara-ui/components";

Input({ type: "search", iconStart: "magnify", placeholder: "Search projects" });
```

---

## Password Toggle And Clear Button

Two data attributes cover the most common field buttons:

- `data-password-toggle` switches the nearest password field between hidden and visible, swaps `mdi-eye-outline` / `mdi-eye-off-outline` and updates `aria-pressed`. Pass a selector (`data-password-toggle="#pw"`) to target a field elsewhere.
- `data-clear` empties the nearest field (or the selector you pass), fires an `input` event and focuses it.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="pwField">Password</label>
      <div class="form-icon">
        <input id="pwField" class="form-control" type="password" value="correct horse battery" />
        <button type="button" class="form-icon-end" data-password-toggle aria-label="Show password" aria-pressed="false"><span class="mdi mdi-eye-outline"></span></button>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="clrField">Search</label>
      <div class="form-icon">
        <span class="form-icon-start mdi mdi-magnify"></span>
        <input id="clrField" class="form-control" value="invoices 2026" />
        <button type="button" class="form-icon-end" data-clear aria-label="Clear"><span class="mdi mdi-close-circle"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="form-icon">
  <input class="form-control" type="password" />
  <button type="button" class="form-icon-end" data-password-toggle aria-label="Show password" aria-pressed="false">
    <span class="mdi mdi-eye-outline"></span>
  </button>
</div>

<div class="form-icon">
  <input class="form-control" />
  <button type="button" class="form-icon-end" data-clear aria-label="Clear">
    <span class="mdi mdi-close-circle"></span>
  </button>
</div>
```

```js components
import { Input } from "@abydahana/aksara-ui/components";

Input({ type: "password", passwordToggle: true });
Input({ clearable: true });
```

---

## Sizes

Six sizes from `form-control-xs` (26px) to `form-control-2xl` (64px). Selects, checks and switches share the same heights, so mixed rows line up.

::html
<div class="docs-preview vstack gap-3">
  <input class="form-control form-control-xs" placeholder=".form-control-xs" aria-label="Extra small" />
  <input class="form-control form-control-sm" placeholder=".form-control-sm" aria-label="Small" />
  <input class="form-control" placeholder="Default (md)" aria-label="Default" />
  <input class="form-control form-control-lg" placeholder=".form-control-lg" aria-label="Large" />
  <input class="form-control form-control-xl" placeholder=".form-control-xl" aria-label="Extra large" />
  <input class="form-control form-control-2xl" placeholder=".form-control-2xl" aria-label="2x large" />
</div>
::end

```html
<input class="form-control form-control-sm" />
<input class="form-control form-control-lg" />
<select class="form-select form-select-lg">
  ...
</select>
```

```js components
import { Input, Select } from "@abydahana/aksara-ui/components";

Input({ size: "sm" });
Input({ size: "lg" });
Select({ size: "lg", options: [{ label: "London", value: "london" }] });
```

---

## Field States

Fields darken their border on hover and show a soft primary ring on focus (`--aksara-ring`). Disabled and read-only fields drop to the secondary background. Validation classes recolor both the border and the focus ring (see [Validation](#/forms/validation)).

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="stateDefault">Default</label>
      <input id="stateDefault" class="form-control" placeholder="Hover me" />
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="stateFocus">Focused</label>
      <input id="stateFocus" class="form-control [border-color:rgb(var(--aksara-primary)/.7)] [box-shadow:var(--aksara-ring)]" value="Focus ring" />
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="stateDisabled">Disabled</label>
      <input id="stateDisabled" class="form-control" value="Cannot edit" disabled />
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="stateReadonly">Read-only</label>
      <input id="stateReadonly" class="form-control" value="ak_live_8f2c…" readonly />
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="stateValid">Valid</label>
      <input id="stateValid" class="form-control is-valid" value="aksara-ui" />
      <span class="form-text">Username is available.</span>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="stateInvalid">Invalid</label>
      <input id="stateInvalid" class="form-control is-invalid" value="not-an-email" />
      <span class="form-error">Enter a valid email address.</span>
    </div>
  </div>
</div>
::end

```html
<input class="form-control" disabled />
<input class="form-control" readonly />
<input class="form-control is-invalid" />
<span class="form-error">Enter a valid email address.</span>
```

```js components
import { FormError, Input } from "@abydahana/aksara-ui/components";

Input({ disabled: true });
Input({ readOnly: true });
Input({ isInvalid: true });
FormError({ message: "Enter a valid email address." });
```

---

## File Input

A plain `input[type=file]` with `.form-control` turns the browser's button into a quiet segment inside the field.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="fiSingle">Avatar</label>
      <input id="fiSingle" class="form-control" type="file" accept="image/*" />
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="fiMulti">Attachments</label>
      <input id="fiMulti" class="form-control" type="file" multiple />
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="fiDisabled">Disabled</label>
      <input id="fiDisabled" class="form-control" type="file" disabled />
    </div>
  </div>
</div>
::end

```html
<input class="form-control" type="file" accept="image/*" /> <input class="form-control" type="file" multiple />
```

```js components
import { Input } from "@abydahana/aksara-ui/components";

Input({ type: "file", attributes: { accept: "image/*" } });
Input({ type: "file", attributes: { multiple: true } });
```

---

## Dropzone

`.form-dropzone` is a dashed drop area around a file input. Clicking anywhere opens the picker, dragging a file over it highlights the area (`.is-dragover`), and selected file names appear in `.form-dropzone-files`.

::html
<div class="docs-preview">
  <label class="form-dropzone">
    <input type="file" multiple accept="image/*,.pdf" />
    <span class="mdi mdi-cloud-upload-outline"></span>
    <span class="form-dropzone-title">Drop files here or click to browse</span>
    <span>PNG, JPG or PDF up to 10 MB</span>
    <span class="form-dropzone-files"></span>
  </label>
</div>
::end

```html
<label class="form-dropzone">
  <input type="file" multiple accept="image/*,.pdf" />
  <span class="mdi mdi-cloud-upload-outline"></span>
  <span class="form-dropzone-title">Drop files here or click to browse</span>
  <span>PNG, JPG or PDF up to 10 MB</span>
  <span class="form-dropzone-files"></span>
</label>
```

```js components
import { Dropzone } from "@abydahana/aksara-ui/components";

Dropzone({ multiple: true, accept: "image/*,.pdf", hint: "PNG, JPG or PDF up to 10 MB" });
```

---

## Color, Plaintext And Datalist

- `.form-control-color` makes a compact color swatch.
- `.form-control-plaintext` shows a read-only value aligned with neighbouring fields, without a box.
- A native `<datalist>` adds suggestions to any text input.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <label class="form-label" for="miscColor">Brand color</label>
      <input id="miscColor" class="form-control form-control-color" type="color" value="#22201d" />
    </div>
    <div class="col-12 md:col-4">
      <label class="form-label" for="miscPlain">Workspace ID</label>
      <input id="miscPlain" class="form-control-plaintext" readonly value="ws_7Hq2Lm" />
    </div>
    <div class="col-12 md:col-4">
      <label class="form-label" for="miscCity">City</label>
      <input id="miscCity" class="form-control" list="miscCities" placeholder="Start typing…" />
      <datalist id="miscCities">
        <option value="London"></option>
        <option value="Manchester"></option>
        <option value="Leeds"></option>
        <option value="Bristol"></option>
      </datalist>
    </div>
  </div>
</div>
::end

```html
<input class="form-control form-control-color" type="color" value="#22201d" />
<input class="form-control-plaintext" readonly value="ws_7Hq2Lm" />
<input class="form-control" list="cities" />
<datalist id="cities"><option value="London"></option></datalist>
```

```js components
import { Input } from "@abydahana/aksara-ui/components";

Input({ type: "color", value: "#22201d" });
Input({ plaintext: true, value: "ws_7Hq2Lm" });
Input({ attributes: { list: "cities" } });
// followed by <datalist id="cities"><option value="London"></option></datalist>
```

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Class / attribute</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><code>form-control</code></td><td>Text inputs and textareas.</td></tr>
      <tr><td><code>form-control-{xs|sm|lg|xl|2xl}</code></td><td>Field sizes (26–64px).</td></tr>
      <tr><td><code>form-label</code>, <code>required</code>, <code>form-label-hint</code></td><td>Label, red asterisk, muted note.</td></tr>
      <tr><td><code>form-text</code>, <code>form-error</code></td><td>Help text and error message.</td></tr>
      <tr><td><code>form-icon</code>, <code>form-icon-start</code>, <code>form-icon-end</code></td><td>Field with icon or button slots.</td></tr>
      <tr><td><code>form-counter</code> + <code>data-counter</code></td><td>Live character count.</td></tr>
      <tr><td><code>data-password-toggle</code>, <code>data-clear</code></td><td>Show/hide password, clear field.</td></tr>
      <tr><td><code>data-role="autogrow"</code></td><td>Textarea grows with content.</td></tr>
      <tr><td><code>form-dropzone</code>, <code>form-dropzone-title</code>, <code>form-dropzone-files</code></td><td>File drop area.</td></tr>
      <tr><td><code>form-control-color</code>, <code>form-control-plaintext</code></td><td>Color swatch, boxless read-only value.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## String Components

Render fields on the server or in templates with the HTML string components:

```js
import { Input, Textarea, FormLabel, FormText, Dropzone } from "@abydahana/aksara-ui/components";

FormLabel({ label: "Email", htmlFor: "email", required: true });
Input({ id: "email", type: "email", iconStart: "email-outline", placeholder: "you@company.com" });
Input({ type: "password", iconStart: "lock-outline", passwordToggle: true });
Input({ type: "search", iconStart: "magnify", clearable: true });
Textarea({ rows: 3, autoGrow: true, attributes: { maxlength: 160, "data-counter": "#bioCount" } });
Dropzone({ name: "files", multiple: true, hint: "PNG, JPG or PDF up to 10 MB" });
```

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Input prop</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>type</code></td><td>string</td><td>Any input type. <code>"color"</code> adds <code>form-control-color</code>.</td></tr>
      <tr><td><code>size</code></td><td><code>xs | sm | md | lg | xl | 2xl</code></td><td>Field size.</td></tr>
      <tr><td><code>iconStart</code> / <code>iconEnd</code></td><td>string</td><td>MDI name (<code>"magnify"</code>) or class list; wraps the field in <code>.form-icon</code>.</td></tr>
      <tr><td><code>passwordToggle</code></td><td>boolean</td><td>Adds a show/hide button.</td></tr>
      <tr><td><code>clearable</code></td><td>boolean</td><td>Adds a clear button.</td></tr>
      <tr><td><code>counter</code>, <code>maxLength</code></td><td>string, number</td><td>Character counter target and limit.</td></tr>
      <tr><td><code>isValid</code> / <code>isInvalid</code></td><td>boolean</td><td>Validation state.</td></tr>
      <tr><td><code>disabled</code>, <code>readOnly</code>, <code>required</code></td><td>boolean</td><td>Native attributes.</td></tr>
      <tr><td><code>attributes</code></td><td>object</td><td>Any extra attribute.</td></tr>
    </tbody>
  </table>
</div>
::end
