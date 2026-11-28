# Floating Labels

Wrap a field and its label in `.form-floating` and the label sits inside the field like a placeholder, then floats up and shrinks once the field is focused or filled. The input needs a `placeholder` (any text, it stays invisible) so CSS can detect when it is empty.

---

## Inputs

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="form-floating">
        <input id="flEmail" class="form-control" type="email" placeholder="name@example.com" />
        <label for="flEmail">Email address</label>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="form-floating">
        <input id="flName" class="form-control" placeholder="Name" value="Grace Lee" />
        <label for="flName">Full name (filled)</label>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="form-floating">
        <input id="flPassword" class="form-control" type="password" placeholder="Password" />
        <label for="flPassword">Password</label>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="form-floating">
        <input id="flDisabled" class="form-control" placeholder="Disabled" value="Locked" disabled />
        <label for="flDisabled">Disabled</label>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="form-floating">
  <input id="email" class="form-control" type="email" placeholder="name@example.com" />
  <label for="email">Email address</label>
</div>
```

```js components
import { FloatingLabel, Input } from "@abydahana/aksara-ui/components";

FloatingLabel({
  label: "Email address",
  htmlFor: "email",
  controlHtml: Input({ id: "email", type: "email", placeholder: "name@example.com" })
});
```

---

## Textarea And Select

Textareas get a taller minimum height. Floating selects always keep the label floated; use `data-select="native"` so the label stays inside the native field.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="form-floating">
        <textarea id="flMessage" class="form-control" placeholder="Message"></textarea>
        <label for="flMessage">Message</label>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="form-floating">
        <select id="flCountry" class="form-select" data-select="native">
          <option>United Kingdom</option>
          <option>United States</option>
          <option>Canada</option>
        </select>
        <label for="flCountry">Country</label>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="form-floating">
  <textarea id="message" class="form-control" placeholder="Message"></textarea>
  <label for="message">Message</label>
</div>

<div class="form-floating">
  <select id="country" class="form-select" data-select="native">
    ...
  </select>
  <label for="country">Country</label>
</div>
```

```js components
import { FloatingLabel, Select, Textarea } from "@abydahana/aksara-ui/components";

FloatingLabel({
  label: "Message",
  htmlFor: "message",
  controlHtml: Textarea({ id: "message", placeholder: "Message" })
});

FloatingLabel({
  label: "Country",
  htmlFor: "country",
  controlHtml: Select({
    id: "country",
    native: true,
    options: [
      { label: "United Kingdom", value: "gb" },
      { label: "United States", value: "us" }
    ]
  })
});
```

---

## Validation

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="form-floating">
        <input id="flValid" class="form-control is-valid" placeholder="Username" value="aksara" />
        <label for="flValid">Username</label>
      </div>
      <span class="form-text">Available.</span>
    </div>
    <div class="col-12 md:col-6">
      <div class="form-floating">
        <input id="flInvalid" class="form-control is-invalid" placeholder="Email" value="grace@" />
        <label for="flInvalid">Email</label>
      </div>
      <span class="form-error">Enter a complete email address.</span>
    </div>
  </div>
</div>
::end

---

## Sign-In Example

::html
<div class="docs-preview">
  <div class="card max-w-[380px] w-[100%] mx-[auto]">
    <div class="card-body vstack gap-3">
      <h4 class="m-0">Sign in</h4>
      <div class="form-floating">
        <input id="flSignEmail" class="form-control" type="email" placeholder="Email" />
        <label for="flSignEmail">Email</label>
      </div>
      <div class="form-floating">
        <input id="flSignPassword" class="form-control" type="password" placeholder="Password" />
        <label for="flSignPassword">Password</label>
      </div>
      <button class="btn btn-primary btn-block">Continue</button>
    </div>
  </div>
</div>
::end

---

## String Component

```js
import { FloatingLabel, Input } from "@abydahana/aksara-ui/components";

FloatingLabel({
  label: "Email address",
  htmlFor: "email",
  controlHtml: Input({ id: "email", type: "email", placeholder: "name@example.com" })
});
```

Props: `controlHtml` (the field markup), `label`, `htmlFor`, `className`, `attributes`.
