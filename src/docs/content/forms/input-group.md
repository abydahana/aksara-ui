# Input Group

Input groups join text addons, buttons, selects and inputs into one field. Inner corners are squared automatically, the outer corners keep the control radius, and the focused element is raised so its ring is never hidden by a neighbour.

---

## Text Addons

::html
<div class="docs-preview vstack gap-3">
  <div class="input-group">
    <span class="input-group-text">@</span>
    <input class="form-control" placeholder="username" aria-label="Username" />
  </div>
  <div class="input-group">
    <span class="input-group-text">https://</span>
    <input class="form-control" placeholder="studio.example.com" aria-label="Website" />
  </div>
  <div class="input-group">
    <input class="form-control" placeholder="Recipient's username" aria-label="Recipient" />
    <span class="input-group-text">@example.com</span>
  </div>
  <div class="input-group">
    <span class="input-group-text">$</span>
    <input class="form-control" type="number" placeholder="0" aria-label="Amount" />
    <span class="input-group-text">.00</span>
  </div>
</div>
::end

```html
<div class="input-group">
  <span class="input-group-text">$</span>
  <input class="form-control" type="number" placeholder="0" />
  <span class="input-group-text">.00</span>
</div>
```

```js components
import { Input, InputGroup, InputGroupText } from "@abydahana/aksara-ui/components";

InputGroup({
  children:
    InputGroupText({ children: "$" }) +
    Input({ type: "number", placeholder: "0" }) +
    InputGroupText({ children: ".00" })
});
```

---

## Icon Addons

::html
<div class="docs-preview vstack gap-3">
  <div class="input-group">
    <span class="input-group-text"><span class="mdi mdi-email-outline"></span></span>
    <input class="form-control" type="email" placeholder="you@company.com" aria-label="Email" />
  </div>
  <div class="input-group">
    <span class="input-group-text"><span class="mdi mdi-link-variant"></span></span>
    <input class="form-control" value="https://aksara.dev/invite/7Hq2Lm" readonly aria-label="Invite link" />
    <button class="btn btn-plain" type="button"><span class="mdi mdi-content-copy"></span> Copy</button>
  </div>
</div>
::end

---

## Buttons

Buttons on either side, single or several.

::html
<div class="docs-preview vstack gap-3">
  <div class="input-group">
    <input class="form-control" placeholder="Search invoices" aria-label="Search invoices" />
    <button class="btn btn-primary" type="button"><span class="mdi mdi-magnify"></span> Search</button>
  </div>
  <div class="input-group">
    <button class="btn btn-plain" type="button">Reset</button>
    <input class="form-control" placeholder="Promo code" aria-label="Promo code" />
    <button class="btn btn-soft-success" type="button">Apply</button>
  </div>
  <div class="input-group max-w-[180px]">
    <button class="btn btn-plain btn-icon" type="button" aria-label="Decrease"><span class="mdi mdi-minus"></span></button>
    <input class="form-control [text-align:center]" type="number" value="1" min="1" aria-label="Quantity" />
    <button class="btn btn-plain btn-icon" type="button" aria-label="Increase"><span class="mdi mdi-plus"></span></button>
  </div>
</div>
::end

```html
<div class="input-group">
  <input class="form-control" placeholder="Search invoices" />
  <button class="btn btn-primary" type="button">Search</button>
</div>
```

```js components
import { Button, Input, InputGroup } from "@abydahana/aksara-ui/components";

InputGroup({
  children: Input({ placeholder: "Search invoices" }) + Button({ label: "Search" })
});
```

---

## With Selects And Dropdowns

Tom Select controls and dropdown buttons join the group like any other element.

::html
<div class="docs-preview vstack gap-3 [overflow:visible_!important]">
  <div class="input-group">
    <select class="form-select max-w-[110px]" data-select-search="false" aria-label="Currency">
      <option>USD</option><option>EUR</option><option>GBP</option>
    </select>
    <input class="form-control" type="number" placeholder="Amount" aria-label="Amount" />
  </div>
  <div class="input-group">
    <input class="form-control" placeholder="Search…" aria-label="Search" />
    <div class="dropdown">
      <button class="btn btn-plain" type="button" data-dropdown="#igScope">All fields <span class="mdi mdi-chevron-down"></span></button>
      <div id="igScope" class="dropdown-menu dropdown-menu-end">
        <button class="dropdown-item">All fields</button>
        <button class="dropdown-item">Customer</button>
        <button class="dropdown-item">Invoice number</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="input-group">
  <select class="form-select max-w-[110px]" data-select-search="false">
    <option>USD</option>
    <option>EUR</option>
  </select>
  <input class="form-control" type="number" placeholder="Amount" />
</div>
```

```js components
import { Input, InputGroup, Select } from "@abydahana/aksara-ui/components";

InputGroup({
  children:
    Select({
      search: false,
      options: [
        { label: "USD", value: "USD" },
        { label: "EUR", value: "EUR" }
      ],
      attributes: { style: "max-width:110px" }
    }) + Input({ type: "number", placeholder: "Amount" })
});
```

---

## Checkbox And Radio Addons

::html
<div class="docs-preview vstack gap-3">
  <div class="input-group">
    <span class="input-group-text"><input class="form-check-input" type="checkbox" checked aria-label="Enable custom domain" /></span>
    <input class="form-control" value="studio.example.com" aria-label="Custom domain" />
  </div>
  <div class="input-group">
    <span class="input-group-text"><input type="radio" class="form-check-input" name="igPrimary" checked aria-label="Primary email" /></span>
    <input class="form-control" value="grace.lee@example.com" aria-label="Email" />
  </div>
</div>
::end

---

## Icons Inside A Grouped Field

Use `.form-icon` as a group member to keep an icon inside the field and a button outside it.

::html
<div class="docs-preview">
  <div class="input-group">
    <div class="form-icon">
      <span class="form-icon-start mdi mdi-magnify"></span>
      <input class="form-control" placeholder="Search members" aria-label="Search members" />
    </div>
    <button class="btn btn-primary" type="button">Invite</button>
  </div>
</div>
::end

```html
<div class="input-group">
  <div class="form-icon">
    <span class="form-icon-start mdi mdi-magnify"></span>
    <input class="form-control" placeholder="Search members" />
  </div>
  <button class="btn btn-primary">Invite</button>
</div>
```

```js components
import { Button, Input, InputGroup } from "@abydahana/aksara-ui/components";

InputGroup({
  children: Input({ iconStart: "magnify", placeholder: "Search members" }) + Button({ label: "Invite" })
});
```

---

## Sizes

Size the whole group with `input-group-{size}`: every member follows.

::html
<div class="docs-preview vstack gap-3">
  <div class="input-group input-group-sm">
    <span class="input-group-text">Small</span>
    <input class="form-control" aria-label="Small" />
    <button class="btn btn-primary">Go</button>
  </div>
  <div class="input-group">
    <span class="input-group-text">Default</span>
    <input class="form-control" aria-label="Default" />
    <button class="btn btn-primary">Go</button>
  </div>
  <div class="input-group input-group-lg">
    <span class="input-group-text">Large</span>
    <input class="form-control" aria-label="Large" />
    <button class="btn btn-primary">Go</button>
  </div>
</div>
::end

```html
<div class="input-group input-group-lg">...</div>
```

```js components
import { Input, InputGroup, InputGroupText } from "@abydahana/aksara-ui/components";

InputGroup({
  size: "lg",
  children: InputGroupText({ children: "@" }) + Input({ placeholder: "username" })
});
```

---

## Validation

::html
<div class="docs-preview">
  <div class="input-group">
    <span class="input-group-text">@</span>
    <input class="form-control is-invalid" value="grace lee" aria-label="Username" />
  </div>
  <span class="form-error">Usernames cannot contain spaces.</span>
</div>
::end

---

## String Components

```js
import { InputGroup, InputGroupText, Input, Button } from "@abydahana/aksara-ui/components";

InputGroup({
  size: "lg",
  children: InputGroupText({ children: "@" }) + Input({ placeholder: "username" })
});
```

`InputGroup` props: `children`, `size`, `className`, `attributes`. `InputGroupText` props: `children`, `as` (`"span"` or `"label"`), `htmlFor`, `className`.
