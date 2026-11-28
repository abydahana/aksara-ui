# Dropdown Select

A dropdown select is a single-choice picker built from a button and a [dropdown menu](#/components/dropdown) instead of a native `<select>`. Each option can carry its own icon, and the chosen value lives in a hidden input so it is submitted with the form. When an option is picked, the runtime writes the value, updates the trigger and fires `change` plus `aksara:dropdown-select:change`. Use it for compact choices with a visual cue: post visibility, a status, a sort order, a region. It comes in two looks: a soft "chip" button (default) for toolbars and filter bars, and `variant: "form-select"`, which looks like a regular form field.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="card max-w-[520px] w-full">
    <div class="card-body vstack gap-3">
      <textarea class="form-control" rows="3" placeholder="Share an update with your team…" aria-label="Update"></textarea>
      <div class="hstack gap-2 justify-between">
        <div class="dropdown aksara-select-dropdown w-[150px]" data-dropdown-select="visibility" data-value="team"><input type="hidden" name="visibility" value="team" /><button class="btn btn-soft-secondary dropdown-select-toggle btn-sm" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Post visibility"><span class="mdi mdi-account-group-outline select-current-icon" aria-hidden="true"></span><span class="select-current-label">Team only</span><span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span></button><div class="dropdown-menu dropdown-select-menu dropdown-menu-sm" role="menu"><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="public" data-icon="mdi-earth"><span class="mdi mdi-earth dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Public</span></button><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="team" data-icon="mdi-account-group-outline"><span class="mdi mdi-account-group-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Team only</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="private" data-icon="mdi-lock-outline"><span class="mdi mdi-lock-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Only me</span></button></div></div>
        <button type="button" class="btn btn-primary btn-sm">Post</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="dropdown aksara-select-dropdown w-[150px]" data-dropdown-select="visibility" data-value="team">
  <input type="hidden" name="visibility" value="team" />
  <button
    class="btn btn-soft-secondary dropdown-select-toggle btn-sm"
    type="button"
    data-dropdown=""
    aria-haspopup="menu"
    aria-expanded="false"
    aria-label="Post visibility"
  >
    <span class="mdi mdi-account-group-outline select-current-icon" aria-hidden="true"></span>
    <span class="select-current-label">Team only</span>
    <span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span>
  </button>
  <div class="dropdown-menu dropdown-select-menu dropdown-menu-sm" role="menu">
    <button
      class="dropdown-item"
      type="button"
      role="menuitemradio"
      aria-checked="false"
      data-dropdown-option="public"
      data-icon="mdi-earth"
    >
      <span class="mdi mdi-earth dropdown-select-option-icon" aria-hidden="true"></span>
      <span class="dropdown-select-option-label">Public</span>
    </button>
    <button
      class="dropdown-item active"
      type="button"
      role="menuitemradio"
      aria-checked="true"
      aria-current="true"
      data-dropdown-option="team"
      data-icon="mdi-account-group-outline"
    >
      <span class="mdi mdi-account-group-outline dropdown-select-option-icon" aria-hidden="true"></span>
      <span class="dropdown-select-option-label">Team only</span>
    </button>
    <button
      class="dropdown-item"
      type="button"
      role="menuitemradio"
      aria-checked="false"
      data-dropdown-option="private"
      data-icon="mdi-lock-outline"
    >
      <span class="mdi mdi-lock-outline dropdown-select-option-icon" aria-hidden="true"></span>
      <span class="dropdown-select-option-label">Only me</span>
    </button>
  </div>
</div>
```

```js components
import { DropdownSelect } from "@abydahana/aksara-ui/components";

DropdownSelect({
  name: "visibility",
  label: "Post visibility",
  defaultValue: "team",
  className: "w-[150px]",
  options: [
    { value: "public", label: "Public", icon: "mdi-earth" },
    { value: "team", label: "Team only", icon: "mdi-account-group-outline" },
    { value: "private", label: "Only me", icon: "mdi-lock-outline" }
  ]
});
```

Pick an option in the preview: the trigger label and icon follow, the option is marked as checked, and the hidden input holds the new value. No extra script is needed.

---

## Dropdown Select Or Select?

`.form-select` on a native `<select>` is enhanced by [Tom Select](#/forms/select): search, multiple values, tagging, a clear button. A dropdown select is a lighter, different control: no `<select>` element at all, just a button, a menu and a hidden input.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th></th><th><code>select.form-select</code> (Tom Select)</th><th>Dropdown Select</th></tr>
    </thead>
    <tbody>
      <tr><td>Markup</td><td>Native <code>&lt;select&gt;</code> with <code>&lt;option&gt;</code>s</td><td>Button + <code>.dropdown-menu</code> + <code>&lt;input type="hidden"&gt;</code></td></tr>
      <tr><td>Values</td><td>Single or multiple, tagging</td><td>Single value</td></tr>
      <tr><td>Search</td><td>Type to filter</td><td>None</td></tr>
      <tr><td>Icons per option</td><td>Not built in</td><td>Built in (<code>icon</code>, <code>iconClass</code>)</td></tr>
      <tr><td>Selection</td><td>Handled, fires <code>change</code></td><td>Handled: fires <code>input</code> / <code>change</code> on the hidden input and <code>aksara:dropdown-select:change</code> on the root</td></tr>
      <tr><td>Without JavaScript</td><td>Works as a native select</td><td>The menu does not open</td></tr>
      <tr><td>Validation</td><td><code>required</code>, <code>:invalid</code>, validation states</td><td>None (hidden inputs are never validated by the browser)</td></tr>
      <tr><td>Looks</td><td>Form field</td><td>Soft chip button or form field</td></tr>
    </tbody>
  </table>
</div>
::end

Pick the dropdown select for short lists (2–10 options) where the icon helps, in places where a full form field would be too heavy. Use `select.form-select` for long lists, search, multiple values, or anything that must validate or work without JavaScript.

---

## Form Select Variant

`variant: "form-select"` renders the trigger as a `button.form-select`: the same height, border, chevron and focus ring as other fields, at full width (`variant-form-select w-100` on the root). The menu opens at the width of the field and scrolls after 18rem. Give the trigger an `id` and point a `<label for>` at it: a `<button>` is labelable, so clicking the label focuses the trigger and screen readers announce the label.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="row gap-3 w-full">
    <div class="col-12 md:col-6">
      <label class="form-label" for="projectStatus">Project status</label>
      <div class="dropdown aksara-select-dropdown variant-form-select w-100" data-dropdown-select="status" data-value="active"><input type="hidden" name="status" value="active" /><button class="form-select dropdown-select-toggle" type="button" id="projectStatus" data-dropdown="" aria-haspopup="menu" aria-expanded="false"><span class="mdi mdi-circle text-success select-current-icon" aria-hidden="true"></span><span class="select-current-label">Active</span></button><div class="dropdown-menu dropdown-select-menu" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="active" data-icon="mdi-circle" data-icon-class="text-success"><span class="mdi mdi-circle text-success dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Active</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="paused" data-icon="mdi-circle" data-icon-class="text-warning"><span class="mdi mdi-circle text-warning dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Paused</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="archived" data-icon="mdi-circle" data-icon-class="text-subtle"><span class="mdi mdi-circle text-subtle dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Archived</span></button></div></div>
      <div class="form-text">Paused projects stop billing at the end of the cycle.</div>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="dataRegion">Data region</label>
      <div class="dropdown aksara-select-dropdown variant-form-select w-100" data-dropdown-select="region" data-value="lon"><input type="hidden" name="region" value="lon" /><button class="form-select dropdown-select-toggle" type="button" id="dataRegion" data-dropdown="" aria-haspopup="menu" aria-expanded="false"><span class="mdi mdi-map-marker-outline select-current-icon" aria-hidden="true"></span><span class="select-current-label">London (eu-west-2)</span></button><div class="dropdown-menu dropdown-select-menu" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="lon" data-icon="mdi-map-marker-outline"><span class="mdi mdi-map-marker-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">London (eu-west-2)</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="nyc" data-icon="mdi-map-marker-outline"><span class="mdi mdi-map-marker-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">New York (us-east-1)</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="man" data-icon="mdi-map-marker-outline"><span class="mdi mdi-map-marker-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Manchester (eu-west-3)</span></button></div></div>
    </div>
  </div>
</div>
::end

```html
<label class="form-label" for="projectStatus">Project status</label>
<div
  class="dropdown aksara-select-dropdown variant-form-select w-100"
  data-dropdown-select="status"
  data-value="active"
>
  <input type="hidden" name="status" value="active" />
  <button class="form-select dropdown-select-toggle" type="button" id="projectStatus" data-dropdown="">
    <span class="mdi mdi-circle text-success select-current-icon" aria-hidden="true"></span>
    <span class="select-current-label">Active</span>
  </button>
  <div class="dropdown-menu dropdown-select-menu" role="menu">
    <button
      class="dropdown-item active"
      type="button"
      role="menuitemradio"
      aria-checked="true"
      aria-current="true"
      data-dropdown-option="active"
      data-icon="mdi-circle"
      data-icon-class="text-success"
    >
      <span class="mdi mdi-circle text-success dropdown-select-option-icon" aria-hidden="true"></span>
      <span class="dropdown-select-option-label">Active</span>
    </button>
    <button
      class="dropdown-item"
      type="button"
      role="menuitemradio"
      aria-checked="false"
      data-dropdown-option="paused"
      data-icon="mdi-circle"
      data-icon-class="text-warning"
    >
      <span class="mdi mdi-circle text-warning dropdown-select-option-icon" aria-hidden="true"></span>
      <span class="dropdown-select-option-label">Paused</span>
    </button>
  </div>
</div>
```

```js components
import { DropdownSelect } from "@abydahana/aksara-ui/components";

DropdownSelect({
  name: "status",
  id: "projectStatus",
  variant: "form-select",
  defaultValue: "active",
  options: [
    { value: "active", label: "Active", icon: "mdi-circle", iconClass: "text-success" },
    { value: "paused", label: "Paused", icon: "mdi-circle", iconClass: "text-warning" },
    { value: "archived", label: "Archived", icon: "mdi-circle", iconClass: "text-subtle" }
  ]
});
```

`iconClass` adds classes to that option's icon, here a status color. The option keeps it in `data-icon-class`, and the runtime copies it to the trigger icon along with the icon itself.

---

## Without Icons

Icons are optional. Without one, the option shows only its label and the trigger shows no icon. If a later option has an icon, the runtime adds the `.select-current-icon` element on selection; picking an option without an icon removes it again.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="max-w-[320px] w-full">
    <label class="form-label" for="billingCurrency">Billing currency</label>
    <div class="dropdown aksara-select-dropdown variant-form-select w-100" data-dropdown-select="currency" data-value="usd"><input type="hidden" name="currency" value="usd" /><button class="form-select dropdown-select-toggle" type="button" id="billingCurrency" data-dropdown="" aria-haspopup="menu" aria-expanded="false"><span class="select-current-label">USD – US dollar</span></button><div class="dropdown-menu dropdown-select-menu" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="usd"><span class="dropdown-select-option-label">USD – US dollar</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="gbp"><span class="dropdown-select-option-label">GBP – Pound sterling</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="eur"><span class="dropdown-select-option-label">EUR – Euro</span></button></div></div>
  </div>
</div>
::end

```js components
import { DropdownSelect } from "@abydahana/aksara-ui/components";

DropdownSelect({
  name: "currency",
  id: "billingCurrency",
  variant: "form-select",
  defaultValue: "usd",
  options: [
    { value: "usd", label: "USD – US dollar" },
    { value: "gbp", label: "GBP – Pound sterling" },
    { value: "eur", label: "EUR – Euro" }
  ]
});
```

When `defaultValue` is missing or matches no option, the first option is selected.

---

## Disabled

`disabled: true` disables the trigger, so the menu cannot open. A `disabled` option is rendered as a disabled menu button: it is dimmed, ignores clicks and is skipped by the arrow keys.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="row gap-3 w-full">
    <div class="col-12 md:col-6">
      <label class="form-label" for="workspacePlan">Workspace plan</label>
      <div class="dropdown aksara-select-dropdown variant-form-select w-100" data-dropdown-select="plan" data-value="pro"><input type="hidden" name="plan" value="pro" /><button class="form-select dropdown-select-toggle" type="button" id="workspacePlan" data-dropdown="" aria-haspopup="menu" aria-expanded="false"><span class="mdi mdi-rocket-launch-outline select-current-icon" aria-hidden="true"></span><span class="select-current-label">Pro – $24 / month</span></button><div class="dropdown-menu dropdown-select-menu" role="menu"><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="starter" data-icon="mdi-sprout-outline"><span class="mdi mdi-sprout-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Starter – $0 / month</span></button><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="pro" data-icon="mdi-rocket-launch-outline"><span class="mdi mdi-rocket-launch-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Pro – $24 / month</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="enterprise" data-icon="mdi-office-building-outline" disabled><span class="mdi mdi-office-building-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Enterprise – contact sales</span></button></div></div>
      <div class="form-text">Enterprise is set up by our sales team.</div>
    </div>
    <div class="col-12 md:col-6 vstack gap-2 items-start">
      <span class="form-label mb-0">Your role</span>
      <div class="dropdown aksara-select-dropdown w-[150px]" data-dropdown-select="owner-role" data-value="owner"><input type="hidden" name="owner-role" value="owner" /><button class="btn btn-soft-secondary dropdown-select-toggle btn-sm" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Owner role" disabled><span class="mdi mdi-shield-crown-outline select-current-icon" aria-hidden="true"></span><span class="select-current-label">Owner</span><span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span></button><div class="dropdown-menu dropdown-select-menu dropdown-menu-sm" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="owner" data-icon="mdi-shield-crown-outline"><span class="mdi mdi-shield-crown-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Owner</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="admin" data-icon="mdi-shield-account-outline"><span class="mdi mdi-shield-account-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Admin</span></button></div></div>
      <div class="form-text">Transfer ownership to change your role.</div>
    </div>
  </div>
</div>
::end

```html
<button
  class="btn btn-soft-secondary dropdown-select-toggle btn-sm"
  type="button"
  data-dropdown=""
  aria-label="Owner role"
  disabled
>
  …
</button>

<button
  class="dropdown-item"
  type="button"
  role="menuitemradio"
  aria-checked="false"
  data-dropdown-option="enterprise"
  data-icon="mdi-office-building-outline"
  disabled
>
  …
</button>
```

```js components
import { DropdownSelect } from "@abydahana/aksara-ui/components";

DropdownSelect({
  name: "plan",
  id: "workspacePlan",
  variant: "form-select",
  defaultValue: "pro",
  options: [
    { value: "starter", label: "Starter – $0 / month", icon: "mdi-sprout-outline" },
    { value: "pro", label: "Pro – $24 / month", icon: "mdi-rocket-launch-outline" },
    { value: "enterprise", label: "Enterprise – contact sales", icon: "mdi-office-building-outline", disabled: true }
  ]
});

DropdownSelect({
  name: "owner-role",
  label: "Owner role",
  defaultValue: "owner",
  disabled: true,
  className: "w-[150px]",
  options: [
    { value: "owner", label: "Owner", icon: "mdi-shield-crown-outline" },
    { value: "admin", label: "Admin", icon: "mdi-shield-account-outline" }
  ]
});
```

The hidden input of a disabled select is still submitted with the form. Make it `disabled` yourself (`root.querySelector("input").disabled = true`) when the value must be left out.

---

## Sizes

`size` takes `xs`, `sm`, `md` or `lg`. The chip variant defaults to `sm` and sets `btn-{size}` on the trigger (none for `md`); the form variant defaults to `md` and sets `form-select-{size}` (none for `md`). At `sm`, the menu items are compact too (`dropdown-menu-sm`).

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="vstack gap-4 w-full">
    <div class="hstack flex-wrap gap-3 items-center"><div class="dropdown aksara-select-dropdown w-[150px]" data-dropdown-select="chip-xs" data-value="public"><input type="hidden" name="chip-xs" value="public" /><button class="btn btn-soft-secondary dropdown-select-toggle btn-xs" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Visibility"><span class="mdi mdi-earth select-current-icon" aria-hidden="true"></span><span class="select-current-label">Public</span><span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span></button><div class="dropdown-menu dropdown-select-menu" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="public" data-icon="mdi-earth"><span class="mdi mdi-earth dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Public</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="team" data-icon="mdi-account-group-outline"><span class="mdi mdi-account-group-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Team only</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="private" data-icon="mdi-lock-outline"><span class="mdi mdi-lock-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Only me</span></button></div></div><div class="dropdown aksara-select-dropdown w-[150px]" data-dropdown-select="chip-sm" data-value="public"><input type="hidden" name="chip-sm" value="public" /><button class="btn btn-soft-secondary dropdown-select-toggle btn-sm" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Visibility"><span class="mdi mdi-earth select-current-icon" aria-hidden="true"></span><span class="select-current-label">Public</span><span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span></button><div class="dropdown-menu dropdown-select-menu dropdown-menu-sm" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="public" data-icon="mdi-earth"><span class="mdi mdi-earth dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Public</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="team" data-icon="mdi-account-group-outline"><span class="mdi mdi-account-group-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Team only</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="private" data-icon="mdi-lock-outline"><span class="mdi mdi-lock-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Only me</span></button></div></div><div class="dropdown aksara-select-dropdown w-[150px]" data-dropdown-select="chip-md" data-value="public"><input type="hidden" name="chip-md" value="public" /><button class="btn btn-soft-secondary dropdown-select-toggle" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Visibility"><span class="mdi mdi-earth select-current-icon" aria-hidden="true"></span><span class="select-current-label">Public</span><span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span></button><div class="dropdown-menu dropdown-select-menu" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="public" data-icon="mdi-earth"><span class="mdi mdi-earth dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Public</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="team" data-icon="mdi-account-group-outline"><span class="mdi mdi-account-group-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Team only</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="private" data-icon="mdi-lock-outline"><span class="mdi mdi-lock-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Only me</span></button></div></div><div class="dropdown aksara-select-dropdown w-[150px]" data-dropdown-select="chip-lg" data-value="public"><input type="hidden" name="chip-lg" value="public" /><button class="btn btn-soft-secondary dropdown-select-toggle btn-lg" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Visibility"><span class="mdi mdi-earth select-current-icon" aria-hidden="true"></span><span class="select-current-label">Public</span><span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span></button><div class="dropdown-menu dropdown-select-menu" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="public" data-icon="mdi-earth"><span class="mdi mdi-earth dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Public</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="team" data-icon="mdi-account-group-outline"><span class="mdi mdi-account-group-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Team only</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="private" data-icon="mdi-lock-outline"><span class="mdi mdi-lock-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Only me</span></button></div></div></div>
    <div class="row gap-3 w-full">
      <div class="col-12 md:col-4"><div class="dropdown aksara-select-dropdown variant-form-select w-100" data-dropdown-select="fs-sm" data-value="public"><input type="hidden" name="fs-sm" value="public" /><button class="form-select dropdown-select-toggle form-select-sm" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Audience"><span class="mdi mdi-earth select-current-icon" aria-hidden="true"></span><span class="select-current-label">Public</span></button><div class="dropdown-menu dropdown-select-menu dropdown-menu-sm" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="public" data-icon="mdi-earth"><span class="mdi mdi-earth dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Public</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="team" data-icon="mdi-account-group-outline"><span class="mdi mdi-account-group-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Team only</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="private" data-icon="mdi-lock-outline"><span class="mdi mdi-lock-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Only me</span></button></div></div></div>
      <div class="col-12 md:col-4"><div class="dropdown aksara-select-dropdown variant-form-select w-100" data-dropdown-select="fs-md" data-value="public"><input type="hidden" name="fs-md" value="public" /><button class="form-select dropdown-select-toggle" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Audience"><span class="mdi mdi-earth select-current-icon" aria-hidden="true"></span><span class="select-current-label">Public</span></button><div class="dropdown-menu dropdown-select-menu" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="public" data-icon="mdi-earth"><span class="mdi mdi-earth dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Public</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="team" data-icon="mdi-account-group-outline"><span class="mdi mdi-account-group-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Team only</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="private" data-icon="mdi-lock-outline"><span class="mdi mdi-lock-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Only me</span></button></div></div></div>
      <div class="col-12 md:col-4"><div class="dropdown aksara-select-dropdown variant-form-select w-100" data-dropdown-select="fs-lg" data-value="public"><input type="hidden" name="fs-lg" value="public" /><button class="form-select dropdown-select-toggle form-select-lg" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Audience"><span class="mdi mdi-earth select-current-icon" aria-hidden="true"></span><span class="select-current-label">Public</span></button><div class="dropdown-menu dropdown-select-menu" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="public" data-icon="mdi-earth"><span class="mdi mdi-earth dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Public</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="team" data-icon="mdi-account-group-outline"><span class="mdi mdi-account-group-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Team only</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="private" data-icon="mdi-lock-outline"><span class="mdi mdi-lock-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Only me</span></button></div></div></div>
    </div>
  </div>
</div>
::end

```html
<button class="btn btn-soft-secondary dropdown-select-toggle btn-xs" type="button" data-dropdown="">…</button>
<button class="btn btn-soft-secondary dropdown-select-toggle btn-sm" type="button" data-dropdown="">…</button>
<button class="btn btn-soft-secondary dropdown-select-toggle" type="button" data-dropdown="">…</button>
<button class="btn btn-soft-secondary dropdown-select-toggle btn-lg" type="button" data-dropdown="">…</button>

<button class="form-select dropdown-select-toggle form-select-sm" type="button" data-dropdown="">…</button>
<button class="form-select dropdown-select-toggle" type="button" data-dropdown="">…</button>
<button class="form-select dropdown-select-toggle form-select-lg" type="button" data-dropdown="">…</button>
```

```js components
import { DropdownSelect } from "@abydahana/aksara-ui/components";

for (const size of ["xs", "sm", "md", "lg"]) {
  DropdownSelect({ name: `chip-${size}`, label: "Visibility", size, options, className: "w-[150px]" });
}
for (const size of ["sm", "md", "lg"]) {
  DropdownSelect({ name: `fs-${size}`, label: "Audience", size, variant: "form-select", options });
}
```

The trigger stretches to the width of its root (`dropdown-select-toggle` is `width: 100%`) and truncates long labels, so give a chip root a width with `className` when it sits in a row.

---

## Filter Bar

Chip selects sit well in a card header next to a title: a sort order and a period for a transactions list. `btnClassName` adds classes to the trigger, here `fw-semibold` on a priority picker whose icons carry the color.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="card max-w-[640px] w-full">
    <div class="card-header hstack flex-wrap gap-2 justify-between">
      <span class="fw-semibold">Transactions</span>
      <div class="hstack gap-2"><div class="dropdown aksara-select-dropdown w-[150px]" data-dropdown-select="sort" data-value="newest"><input type="hidden" name="sort" value="newest" /><button class="btn btn-soft-secondary dropdown-select-toggle btn-sm" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Sort transactions"><span class="mdi mdi-sort-calendar-descending select-current-icon" aria-hidden="true"></span><span class="select-current-label">Newest first</span><span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span></button><div class="dropdown-menu dropdown-select-menu dropdown-menu-sm" role="menu"><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="newest" data-icon="mdi-sort-calendar-descending"><span class="mdi mdi-sort-calendar-descending dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Newest first</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="oldest" data-icon="mdi-sort-calendar-ascending"><span class="mdi mdi-sort-calendar-ascending dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Oldest first</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="amount" data-icon="mdi-sort-numeric-descending"><span class="mdi mdi-sort-numeric-descending dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Highest amount</span></button></div></div><div class="dropdown aksara-select-dropdown w-[140px]" data-dropdown-select="period" data-value="30d"><input type="hidden" name="period" value="30d" /><button class="btn btn-soft-secondary dropdown-select-toggle btn-sm" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Period"><span class="mdi mdi-calendar-month-outline select-current-icon" aria-hidden="true"></span><span class="select-current-label">Last 30 days</span><span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span></button><div class="dropdown-menu dropdown-select-menu dropdown-menu-sm" role="menu"><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="7d" data-icon="mdi-calendar-week"><span class="mdi mdi-calendar-week dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Last 7 days</span></button><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="30d" data-icon="mdi-calendar-month-outline"><span class="mdi mdi-calendar-month-outline dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Last 30 days</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="qtd" data-icon="mdi-calendar-range"><span class="mdi mdi-calendar-range dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Quarter to date</span></button></div></div></div>
    </div>
    <div class="list-group list-group-flush">
      <div class="list-group-item hstack justify-between"><span>Invoice INV-2026-0481 · Northwind Ltd</span><span class="fw-semibold">$1,240.00</span></div>
      <div class="list-group-item hstack justify-between"><span>Invoice INV-2026-0479 · Contoso London</span><span class="fw-semibold">$860.50</span></div>
      <div class="list-group-item hstack justify-between"><span>Refund RF-0112 · Fabrikam Inc.</span><span class="fw-semibold text-danger">−$120.00</span></div>
    </div>
  </div>
</div>
::end

```html
<div class="card-header hstack flex-wrap gap-2 justify-between">
  <span class="fw-semibold">Transactions</span>
  <div class="hstack gap-2">
    <div class="dropdown aksara-select-dropdown w-[150px]" data-dropdown-select="sort" data-value="newest">…</div>
    <div class="dropdown aksara-select-dropdown w-[140px]" data-dropdown-select="period" data-value="30d">…</div>
  </div>
</div>
```

```js components
import { DropdownSelect } from "@abydahana/aksara-ui/components";

const sort = DropdownSelect({
  name: "sort",
  label: "Sort transactions",
  defaultValue: "newest",
  className: "w-[150px]",
  options: [
    { value: "newest", label: "Newest first", icon: "mdi-sort-calendar-descending" },
    { value: "oldest", label: "Oldest first", icon: "mdi-sort-calendar-ascending" },
    { value: "amount", label: "Highest amount", icon: "mdi-sort-numeric-descending" }
  ]
});

const period = DropdownSelect({
  name: "period",
  label: "Period",
  defaultValue: "30d",
  className: "w-[140px]",
  options: [
    { value: "7d", label: "Last 7 days", icon: "mdi-calendar-week" },
    { value: "30d", label: "Last 30 days", icon: "mdi-calendar-month-outline" },
    { value: "qtd", label: "Quarter to date", icon: "mdi-calendar-range" }
  ]
});
```

Reload the list when either value changes. `aksara:dropdown-select:change` bubbles from the root, so one listener on the header covers both:

```js
document.querySelector(".card-header").addEventListener("aksara:dropdown-select:change", (event) => {
  const name = event.target.dataset.dropdownSelect; // "sort" or "period"
  loadTransactions({ [name]: event.detail.value });
});
```

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="card max-w-[520px] w-full">
    <div class="card-body hstack flex-wrap gap-3 justify-between">
      <div class="vstack gap-0">
        <span class="fw-semibold">Checkout page fails on Safari 17</span>
        <span class="text-sm text-subtle">#4821 · opened by Sofia Patel</span>
      </div>
      <div class="dropdown aksara-select-dropdown w-[140px]" data-dropdown-select="priority" data-value="normal"><input type="hidden" name="priority" value="normal" /><button class="btn btn-soft-secondary dropdown-select-toggle btn-sm fw-semibold" type="button" data-dropdown="" aria-haspopup="menu" aria-expanded="false" aria-label="Ticket priority"><span class="mdi mdi-equal text-info select-current-icon" aria-hidden="true"></span><span class="select-current-label">Normal</span><span class="mdi mdi-chevron-down dropdown-select-chevron" aria-hidden="true"></span></button><div class="dropdown-menu dropdown-select-menu dropdown-menu-sm" role="menu"><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="low" data-icon="mdi-arrow-down" data-icon-class="text-subtle"><span class="mdi mdi-arrow-down text-subtle dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Low</span></button><button class="dropdown-item active" type="button" role="menuitemradio" aria-checked="true" aria-current="true" data-dropdown-option="normal" data-icon="mdi-equal" data-icon-class="text-info"><span class="mdi mdi-equal text-info dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Normal</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="high" data-icon="mdi-arrow-up" data-icon-class="text-warning"><span class="mdi mdi-arrow-up text-warning dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">High</span></button><button class="dropdown-item" type="button" role="menuitemradio" aria-checked="false" data-dropdown-option="urgent" data-icon="mdi-alert-circle-outline" data-icon-class="text-danger"><span class="mdi mdi-alert-circle-outline text-danger dropdown-select-option-icon" aria-hidden="true"></span><span class="dropdown-select-option-label">Urgent</span></button></div></div>
    </div>
  </div>
</div>
::end

```js components
import { DropdownSelect } from "@abydahana/aksara-ui/components";

DropdownSelect({
  name: "priority",
  label: "Ticket priority",
  defaultValue: "normal",
  className: "w-[140px]",
  btnClassName: "fw-semibold",
  options: [
    { value: "low", label: "Low", icon: "mdi-arrow-down", iconClass: "text-subtle" },
    { value: "normal", label: "Normal", icon: "mdi-equal", iconClass: "text-info" },
    { value: "high", label: "High", icon: "mdi-arrow-up", iconClass: "text-warning" },
    { value: "urgent", label: "Urgent", icon: "mdi-alert-circle-outline", iconClass: "text-danger" }
  ]
});
```

---

## Reading The Selection

`Aksara.init()` sets up every dropdown select. When an enabled option is clicked (or picked with <kbd>Enter</kbd>), the runtime:

1. writes the option's `data-dropdown-option` value into the hidden input and fires bubbling `input` and `change` events on it,
2. copies the option label to `.select-current-label` and its `data-icon` / `data-icon-class` to `.select-current-icon` (adding or removing the icon element as needed),
3. moves `.active`, `aria-checked="true"` and `aria-current="true"` to the picked option,
4. sets `data-value` on the root,
5. fires `aksara:dropdown-select:change` on the root, and closes the menu.

The events fire only when the value actually changes; picking the current option again just closes the menu. Because the value lives in a real (hidden) input, `FormData` and form libraries read it without any extra code:

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  data.get("status"); // "paused"
});
```

Listen on the root (or any ancestor) for the custom event when you need the label or the previous value too:

```js
document.addEventListener("aksara:dropdown-select:change", (event) => {
  const { value, label, previous, item } = event.detail;
  console.log(`${event.target.dataset.dropdownSelect}: ${previous} → ${value} (${label})`);
});
```

Read the current value at any time from the hidden input or from `root.dataset.value`. To change it from code, click the option button: `root.querySelector('[data-dropdown-option="paused"]').click()` runs the same steps (while the menu is open it lives in `<body>`, so keep a reference to the menu if you look it up then).

---

## Keyboard And Accessibility

The trigger is a regular `<button>`, so <kbd>Enter</kbd> and <kbd>Space</kbd> open and close the menu. While it is open, <kbd>↓</kbd> / <kbd>↑</kbd> move focus through the enabled options (wrapping around), <kbd>Home</kbd> / <kbd>End</kbd> jump to the first and last, <kbd>Enter</kbd> picks the focused option, and <kbd>Esc</kbd> closes the menu (focus returns to the trigger when it was inside the menu). A click outside closes it too. There is no type-ahead.

The trigger has `aria-haspopup="menu"` and `aria-expanded`; on init the runtime adds `aria-controls`. The menu has `role="menu"` and each option is a `menuitemradio` with `aria-checked`, so screen readers announce which option is chosen.

Give the trigger an accessible name: `label` sets `aria-label` (for chips without a visible label), `labelledBy` sets `aria-labelledby` to the id of a visible label, and `id` lets a `<label for>` point at the trigger. Icons and the chevron are `aria-hidden`. Spacing uses `gap` and `margin-inline-start`, so the layout follows `dir="rtl"`; the `.form-select` chevron itself stays on the right.

---

## JavaScript

Every dropdown select is a [Dropdown](#/components/dropdown) (`.dropdown` root, `[data-dropdown]` trigger), set up by `Aksara.init()`. On top of opening, closing and positioning, the runtime applies the selection when the root has `data-dropdown-select`.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Behavior / hook</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>Open / close</td><td>Click on the trigger toggles the menu. Choosing an option, a click outside or <kbd>Esc</kbd> closes it.</td></tr>
      <tr><td>Positioning</td><td>While open, the menu is moved to <code>&lt;body&gt;</code> (so cards and scroll containers never clip it), placed below the trigger at the trigger's width, and moved back on close.</td></tr>
      <tr><td><code>data-dropdown-select</code></td><td>On the root, with the field name. Turns on selection handling and makes the menu match the trigger's width.</td></tr>
      <tr><td><code>data-value</code></td><td>On the root: the current value. Rendered by the component and updated on every selection.</td></tr>
      <tr><td><code>data-dropdown-option</code></td><td>Option value. <code>data-icon</code> and <code>data-icon-class</code> carry its icon for the trigger. Disabled options are ignored.</td></tr>
      <tr><td><code>input</code> / <code>change</code></td><td>Native events fired on the hidden input when the value changes. Bubble.</td></tr>
      <tr><td><code>aksara:dropdown-select:change</code></td><td>Fired on the root when the value changes. Bubbles. <code>event.detail</code>: <code>{ value, label, previous, item }</code>, where <code>item</code> is the picked option button.</td></tr>
      <tr><td><code>aksara:dropdown:show</code> / <code>aksara:dropdown:hide</code></td><td>Fired on the root when the menu opens and closes. Bubble. <code>event.detail.instance</code> is the dropdown instance.</td></tr>
      <tr><td><code>data-dropdown-placement</code></td><td>On the root: <code>bottom</code> (default), <code>top</code>, <code>start</code>, <code>end</code> or <code>auto</code>. Pass it through <code>attributes</code>.</td></tr>
      <tr><td><code>Aksara.dropdown(root)</code></td><td>Returns the instance: <code>show()</code>, <code>hide()</code>, <code>toggle()</code>, <code>destroy()</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## String Component

```ts
import { DropdownSelect } from "@abydahana/aksara-ui/components";

DropdownSelect({
  name: "region",
  id: "dataRegion",
  variant: "form-select",
  defaultValue: "lon",
  options: [
    { value: "lon", label: "London (eu-west-2)", icon: "mdi-map-marker-outline" },
    { value: "nyc", label: "New York (us-east-1)", icon: "mdi-map-marker-outline" }
  ]
});
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>DropdownSelect prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>Required. Name of the hidden input and value of <code>data-dropdown-select</code> on the root.</td></tr>
      <tr><td><code>options</code></td><td><code>DropdownSelectOption[]</code></td><td><code>[]</code></td><td>The choices, in order.</td></tr>
      <tr><td><code>defaultValue</code></td><td><code>string</code></td><td>first option</td><td>Initially selected value.</td></tr>
      <tr><td><code>variant</code></td><td><code>"chip" | "form-select"</code></td><td><code>"chip"</code></td><td>Soft button trigger with a chevron, or a <code>button.form-select</code> at full width.</td></tr>
      <tr><td><code>size</code></td><td><code>"xs" | "sm" | "md" | "lg"</code></td><td><code>"sm"</code> (chip), <code>"md"</code> (form-select)</td><td>Trigger size; <code>sm</code> also compacts the menu.</td></tr>
      <tr><td><code>id</code></td><td><code>string</code></td><td>—</td><td><code>id</code> of the trigger button, for a <code>&lt;label for&gt;</code>.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Accessible name when there is no visible label (<code>aria-label</code> on the trigger).</td></tr>
      <tr><td><code>labelledBy</code></td><td><code>string</code></td><td>—</td><td>Id of a visible label element (<code>aria-labelledby</code> on the trigger).</td></tr>
      <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables the trigger.</td></tr>
      <tr><td><code>btnClassName</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes added to the trigger's own classes.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the root, for example a width.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes on the root.</td></tr>
    </tbody>
  </table>
</div>
::end

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>DropdownSelectOption field</th><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>value</code></td><td><code>string</code></td><td>Required. Submitted value.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td>Required. Text in the menu and on the trigger. Escaped.</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td>MDI class, for example <code>"mdi-earth"</code>.</td></tr>
      <tr><td><code>iconClass</code></td><td><code>string</code></td><td>Extra classes on the icon, for example <code>"text-success"</code>.</td></tr>
      <tr><td><code>disabled</code></td><td><code>boolean</code></td><td>Renders the option as a disabled button: it cannot be picked and is skipped by the arrow keys.</td></tr>
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
      <tr><td><code>.aksara-select-dropdown</code></td><td>Root, together with <code>.dropdown</code>: positioning context.</td></tr>
      <tr><td><code>.variant-form-select</code></td><td>Root hook for the form variant (no styles of its own; comes with <code>.w-100</code>).</td></tr>
      <tr><td><code>.dropdown-select-toggle</code></td><td>Trigger: inline flex with a gap, full width of the root, label truncates, icon and chevron do not shrink. On <code>.btn</code> it also spaces the content apart with <code>.625rem</code> inline padding.</td></tr>
      <tr><td><code>.btn-{xs|sm|lg}</code> / <code>.form-select-{sm|lg}</code></td><td>Trigger size.</td></tr>
      <tr><td><code>.select-current-label</code></td><td>Current label on the trigger, one line with an ellipsis.</td></tr>
      <tr><td><code>.select-current-icon</code></td><td>Current option's icon on the trigger.</td></tr>
      <tr><td><code>.dropdown-select-chevron</code></td><td>Chip chevron, dimmed and pushed to the inline end.</td></tr>
      <tr><td><code>.dropdown-select-menu</code></td><td>Menu: at least the trigger's width, at most 18rem tall, scrolls; items are flex rows with a gap.</td></tr>
      <tr><td><code>.dropdown-select-option-icon</code> / <code>.dropdown-select-option-label</code></td><td>Option icon (does not shrink) and label (one line with an ellipsis).</td></tr>
      <tr><td><code>.dropdown-menu-sm</code></td><td>Compact menu items (the <code>sm</code> size).</td></tr>
      <tr><td><code>.dropdown-item.active</code></td><td>The selected option.</td></tr>
    </tbody>
  </table>
</div>
::end
