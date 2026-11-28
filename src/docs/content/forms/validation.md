# Validation

Mark fields with `is-invalid` / `is-valid` and show a message with `.form-error`. Or let Aksara do it: add `data-validate` to a `<form>` and the browser's built-in constraints (`required`, `type="email"`, `minlength`, `pattern`, ...) drive the states and messages, on submit and then live while the user fixes each field.

---

## Automatic Validation

Add `data-validate novalidate` to the form. On submit Aksara checks every field; if one is invalid the submit is cancelled, the field is marked, a message is inserted after it, and focus moves to the first problem. After the first attempt, each field re-validates as it is edited. `data-error` replaces the browser's message. Press **Create account** with the form empty:

::html
<div class="docs-preview">
  <form class="row gap-3" data-validate novalidate onsubmit="event.preventDefault(); Aksara.notify('Account created', { variant: 'success' })">
    <div class="col-12 md:col-6">
      <label class="form-label required" for="vaName">Full name</label>
      <input id="vaName" class="form-control" required minlength="3" data-error="Enter at least 3 characters." />
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label required" for="vaEmail">Email</label>
      <div class="form-icon">
        <span class="form-icon-start mdi mdi-email-outline"></span>
        <input id="vaEmail" class="form-control" type="email" required />
      </div>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label required" for="vaPassword">Password</label>
      <div class="form-icon">
        <input id="vaPassword" class="form-control" type="password" required minlength="8" data-error="Use 8 or more characters." />
        <button type="button" class="form-icon-end" data-password-toggle aria-label="Show password" aria-pressed="false"><span class="mdi mdi-eye-outline"></span></button>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label required" for="vaRole">Role</label>
      <select id="vaRole" class="form-select" required data-error="Choose a role.">
        <option value="">Choose…</option>
        <option>Designer</option>
        <option>Engineer</option>
        <option>Manager</option>
      </select>
    </div>
    <div class="col-12">
      <label class="form-label required" for="vaHandle">Username</label>
      <div class="input-group">
        <span class="input-group-text">@</span>
        <input id="vaHandle" class="form-control" required pattern="[a-z0-9_]{3,16}" data-error="3–16 lowercase letters, numbers or _." />
      </div>
    </div>
    <div class="col-12">
      <label class="form-check"><input class="form-check-input" type="checkbox" required data-error="You must accept the terms." /> <span class="form-check-label">I agree to the terms of service</span></label>
    </div>
    <div class="col-12 hstack gap-2">
      <button class="btn btn-primary" type="submit">Create account</button>
      <button class="btn btn-plain" type="reset">Reset</button>
    </div>
  </form>
</div>
::end

```html
<form data-validate novalidate>
  <label class="form-label required" for="name">Full name</label>
  <input id="name" class="form-control" required minlength="3" data-error="Enter at least 3 characters." />

  <label class="form-label required" for="role">Role</label>
  <select id="role" class="form-select" required>
    <option value="">Choose…</option>
    <option>Designer</option>
  </select>

  <button class="btn btn-primary" type="submit">Create account</button>
  <button class="btn btn-plain" type="reset">Reset</button>
</form>
```

```js components
import { Button, FormLabel, Input, Select } from "@abydahana/aksara-ui/components";

`<form data-validate novalidate>
  ${FormLabel({ label: "Full name", htmlFor: "name", required: true })}
  ${Input({ id: "name", required: true, attributes: { minlength: 3, "data-error": "Enter at least 3 characters." } })}

  ${FormLabel({ label: "Role", htmlFor: "role", required: true })}
  ${Select({ id: "role", required: true, placeholder: "Choose…", options: [{ label: "Designer", value: "Designer" }] })}

  ${Button({ label: "Create account", type: "submit" })}
  ${Button({ label: "Reset", type: "reset", plain: true })}
</form>`;
```

- Messages go after the field's wrapper (`.form-icon`, `.input-group`, `.form-floating`, check labels, Tom Select), so layouts stay intact.
- Enhanced selects are validated through the hidden `<select>`, and the visible control gets the state.
- Resetting the form clears all states and messages.
- `data-validate="all"` also marks valid fields with `is-valid`.

---

## Events And Script

```js
const form = document.querySelector("#signup");

form.addEventListener("aksara:form:invalid", (event) => {
  console.log("Invalid fields:", event.detail.fields);
});
form.addEventListener("aksara:form:valid", () => {
  // the submit continues normally; prevent it here to submit with fetch()
});

// Validate without submitting (e.g. a multi-step form)
if (Aksara.validate(form)) goToNextStep();
```

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Attribute / API</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>data-validate</code></td><td>On a <code>&lt;form&gt;</code>: validate on submit and live afterwards. Pair with <code>novalidate</code> to hide the browser bubbles.</td></tr>
      <tr><td><code>data-validate="all"</code></td><td>Also mark valid fields.</td></tr>
      <tr><td><code>data-error</code></td><td>On a field: custom message.</td></tr>
      <tr><td><code>Aksara.validate(form)</code></td><td>Validate now; returns <code>true</code> when valid.</td></tr>
      <tr><td><code>aksara:form:invalid</code></td><td><code>{ form, fields }</code></td></tr>
      <tr><td><code>aksara:form:valid</code></td><td><code>{ form, fields: [] }</code></td></tr>
    </tbody>
  </table>
</div>
::end

---

## Manual States

For server-side errors, render the classes yourself.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="vmUser">Username</label>
      <input id="vmUser" class="form-control is-valid" value="grace" />
      <span class="valid-feedback">Username is available.</span>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="vmEmail">Email</label>
      <input id="vmEmail" class="form-control is-invalid" value="grace@example" aria-describedby="vmEmailError" />
      <span id="vmEmailError" class="form-error">This email is already registered.</span>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="vmCity">City</label>
      <select id="vmCity" class="form-select is-invalid"><option value="">Choose…</option><option>London</option></select>
      <span class="form-error">We don't ship to this city yet.</span>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="vmNotes">Notes</label>
      <textarea id="vmNotes" class="form-control is-invalid" rows="2">Too short</textarea>
      <span class="form-error">At least 20 characters.</span>
    </div>
  </div>
</div>
::end

```html
<input class="form-control is-invalid" aria-describedby="emailError" />
<span id="emailError" class="form-error">This email is already registered.</span>

<input class="form-control is-valid" />
<span class="valid-feedback">Username is available.</span>
```

```js components
import { FormError, FormFeedback, Input } from "@abydahana/aksara-ui/components";

Input({ isInvalid: true, attributes: { "aria-describedby": "emailError" } });
FormError({ id: "emailError", message: "This email is already registered." });

Input({ isValid: true });
FormFeedback({ message: "Username is available.", type: "valid" });
```

---

## Error Summary

For long forms, add an alert at the top that lists what to fix.

::html
<div class="docs-preview">
  <div class="alert alert-danger">
    <span class="alert-icon mdi mdi-alert-circle-outline"></span>
    <div class="alert-content">
      <p class="alert-title">2 fields need your attention</p>
      <ul class="m-0 ps-[1.125rem]">
        <li><a class="alert-link" href="#/forms/validation">Email is already registered</a></li>
        <li><a class="alert-link" href="#/forms/validation">City is not supported</a></li>
      </ul>
    </div>
  </div>
</div>
::end

---

## Feedback Tooltips

`invalid-tooltip` / `valid-tooltip` float under the field instead of pushing content down. The parent needs `position: relative` (`.form-group` has it).

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="form-group [margin-bottom:2rem]">
        <label class="form-label" for="vtZip">Postal code</label>
        <input id="vtZip" class="form-control is-invalid" value="12" />
        <div class="invalid-tooltip">Postal codes have 5 digits.</div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="form-group [margin-bottom:2rem]">
        <label class="form-label" for="vtCode">Promo code</label>
        <input id="vtCode" class="form-control is-valid" value="AKSARA15" />
        <div class="valid-tooltip">15% off applied.</div>
      </div>
    </div>
  </div>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Class</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><code>is-invalid</code> / <code>is-valid</code></td><td>Border and focus ring color on inputs, selects (native and enhanced), textareas and checks.</td></tr>
      <tr><td><code>form-error</code>, <code>invalid-feedback</code></td><td>Error message under the field.</td></tr>
      <tr><td><code>valid-feedback</code></td><td>Success message under the field.</td></tr>
      <tr><td><code>invalid-tooltip</code> / <code>valid-tooltip</code></td><td>Floating message.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## String Components

```js
import { Input, FormFeedback } from "@abydahana/aksara-ui/components";

Input({ name: "email", isInvalid: true, attributes: { "aria-describedby": "emailError" } });
FormFeedback({ message: "This email is already registered." }); // .invalid-feedback
FormFeedback({ message: "Looks good", type: "valid", tooltip: true }); // .valid-tooltip
```
