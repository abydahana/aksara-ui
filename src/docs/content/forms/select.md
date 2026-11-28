# Select

Every `select.form-select` is enhanced with [Tom Select](https://tom-select.js.org) by default: type to filter, multiple selection as removable chips, tagging, a clear button and checkbox options. Aksara ships the whole skin in `aksara.css` (Tom Select's own stylesheet is not needed), so the control follows your theme, sizes and validation states. Without Tom Select on the page the same markup renders as a styled native select.

---

## Setup

Load Tom Select before Aksara. It is an optional peer dependency of `@abydahana/aksara-ui`.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui/dist/aksara.min.css" />
<script src="https://cdn.jsdelivr.net/npm/tom-select@2.7.0/dist/js/tom-select.complete.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui/dist/aksara.min.js"></script>
```

With a bundler, register the constructor once:

```js
import TomSelect from "tom-select";
import Aksara from "@abydahana/aksara-ui";

Aksara.useTomSelect(TomSelect).init();
```

---

## Basic Select

An empty first option (`value=""`) becomes the placeholder. The dropdown is mounted on `<body>`, so cards and scroll containers never clip it.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="selCountry">Country</label>
      <select id="selCountry" class="form-select">
        <option value="">Choose a country…</option>
        <option value="gb">United Kingdom</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="ie">Ireland</option>
        <option value="nz">New Zealand</option>
        <option value="jp">Japan</option>
        <option value="kr">South Korea</option>
      </select>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="selPlan">Plan</label>
      <select id="selPlan" class="form-select">
        <option value="free">Free</option>
        <option value="pro" selected>Pro</option>
        <option value="team">Team</option>
        <option value="enterprise" disabled>Enterprise (contact sales)</option>
      </select>
    </div>
  </div>
</div>
::end

```html
<label class="form-label" for="country">Country</label>
<select id="country" class="form-select">
  <option value="">Choose a country…</option>
  <option value="gb">United Kingdom</option>
  <option value="us">United States</option>
</select>
```

```js components
import { FormLabel, Select } from "@abydahana/aksara-ui/components";

FormLabel({ label: "Country", htmlFor: "country" });
Select({
  id: "country",
  placeholder: "Choose a country…",
  options: [
    { label: "United Kingdom", value: "gb" },
    { label: "United States", value: "us" }
  ]
});
```

---

## Without Search

Short lists read better without a search field: add `data-select-search="false"`.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="selSort">Sort by</label>
      <select id="selSort" class="form-select" data-select-search="false">
        <option>Newest first</option>
        <option>Oldest first</option>
        <option>Name A–Z</option>
        <option>Name Z–A</option>
      </select>
    </div>
  </div>
</div>
::end

```html
<select class="form-select" data-select-search="false">
  ...
</select>
```

```js components
import { Select } from "@abydahana/aksara-ui/components";

Select({
  search: false,
  options: [
    { label: "Newest first", value: "newest" },
    { label: "Oldest first", value: "oldest" }
  ]
});
```

---

## Option Groups

`<optgroup>` labels render as small section headers in the dropdown.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="selTz">Time zone</label>
      <select id="selTz" class="form-select">
        <option value="">Select a time zone…</option>
        <optgroup label="Asia">
          <option value="Asia/Dubai">Dubai (UTC+4)</option>
          <option value="Asia/Kolkata">Mumbai (UTC+5:30)</option>
          <option value="Asia/Hong_Kong">Hong Kong (UTC+8)</option>
          <option value="Asia/Singapore">Singapore (UTC+8)</option>
          <option value="Asia/Tokyo">Tokyo (UTC+9)</option>
        </optgroup>
        <optgroup label="Europe">
          <option value="Europe/London" selected>London (GMT, UTC+0)</option>
          <option value="Europe/Amsterdam">Amsterdam (UTC+1)</option>
        </optgroup>
        <optgroup label="Americas">
          <option value="America/New_York">New York (EST, UTC−5)</option>
          <option value="America/Los_Angeles">Los Angeles (PST, UTC−8)</option>
        </optgroup>
      </select>
    </div>
  </div>
</div>
::end

```html
<select class="form-select">
  <option value="">Select a time zone…</option>
  <optgroup label="Asia">
    <option value="Asia/Singapore">Singapore (UTC+8)</option>
  </optgroup>
  <optgroup label="Europe">...</optgroup>
</select>
```

```js components
import { Select } from "@abydahana/aksara-ui/components";

Select({
  placeholder: "Select a time zone…",
  options: [
    { label: "Asia", options: [{ label: "Singapore (UTC+8)", value: "Asia/Singapore" }] },
    { label: "Europe", options: [{ label: "London (GMT, UTC+0)", value: "Europe/London" }] }
  ]
});
```

---

## Multiple Selection

Add `multiple`. Selected values become soft chips with a remove button (turn it off with `data-select-remove-button="false"`); Backspace removes the last one. Limit the count with `data-select-max-items`, and set the empty-state text with `data-select-placeholder`.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="selSkills">Skills</label>
      <select id="selSkills" class="form-select" multiple data-select-placeholder="Add skills…">
        <option selected>Design</option>
        <option selected>TypeScript</option>
        <option>Accessibility</option>
        <option>CSS architecture</option>
        <option>Performance</option>
        <option>Testing</option>
      </select>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="selReviewers">Reviewers <span class="form-label-hint">(max 2)</span></label>
      <select id="selReviewers" class="form-select" multiple data-select-max-items="2" data-select-placeholder="Pick up to two">
        <option>Maya Chen</option>
        <option>Alex Morgan</option>
        <option>Sofia Patel</option>
        <option>Daniel Kim</option>
      </select>
    </div>
  </div>
</div>
::end

```html
<select class="form-select" multiple data-select-placeholder="Add skills…">
  <option selected>Design</option>
  <option selected>TypeScript</option>
  <option>Accessibility</option>
</select>

<select class="form-select" multiple data-select-max-items="2">
  ...
</select>
```

```js components
import { Select } from "@abydahana/aksara-ui/components";

const options = [
  { label: "Option one", value: "1" },
  { label: "Option two", value: "2" }
];

Select({
  multiple: true,
  placeholder: "Add skills…",
  value: ["Design", "TypeScript"],
  options: ["Design", "TypeScript", "Accessibility"].map((skill) => ({ label: skill, value: skill }))
});

Select({ multiple: true, maxItems: 2, options });
```

---

## Checkbox Options

For long multiple lists, `data-select-checkboxes="true"` shows a checkbox next to every option and keeps selected options in the list.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="selChannels">Notify via</label>
      <select id="selChannels" class="form-select" multiple data-select-checkboxes="true" data-select-placeholder="Choose channels">
        <option selected>Email</option>
        <option>SMS</option>
        <option selected>Push notification</option>
        <option>Slack</option>
        <option>WhatsApp</option>
      </select>
    </div>
  </div>
</div>
::end

```html
<select class="form-select" multiple data-select-checkboxes="true">
  ...
</select>
```

```js components
import { Select } from "@abydahana/aksara-ui/components";

const options = [
  { label: "Option one", value: "1" },
  { label: "Option two", value: "2" }
];

Select({ multiple: true, checkboxes: true, options });
```

---

## Tagging (Create Values)

`data-select-create="true"` lets people add values that are not in the list: type and press Enter. Combine with `multiple` for a tag input.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="selTags">Tags</label>
      <select id="selTags" class="form-select" multiple data-select-create="true" data-select-placeholder="Type and press Enter">
        <option selected>release</option>
        <option selected>ui</option>
        <option>backend</option>
        <option>docs</option>
      </select>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="selCategory">Category</label>
      <select id="selCategory" class="form-select" data-select-create="true">
        <option value="">Pick or create…</option>
        <option>Marketing</option>
        <option>Engineering</option>
      </select>
    </div>
  </div>
</div>
::end

```html
<select class="form-select" multiple data-select-create="true">
  <option selected>release</option>
  <option>docs</option>
</select>
```

```js components
import { Select } from "@abydahana/aksara-ui/components";

Select({
  multiple: true,
  create: true,
  value: "release",
  options: [
    { label: "release", value: "release" },
    { label: "docs", value: "docs" }
  ]
});
```

---

## Clearable

`data-select-clearable="true"` adds a × button that appears on hover and focus.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="selAssignee">Assignee</label>
      <select id="selAssignee" class="form-select" data-select-clearable="true">
        <option value="">Unassigned</option>
        <option selected>Maya Chen</option>
        <option>Alex Morgan</option>
        <option>Sofia Patel</option>
      </select>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="selLabels">Labels</label>
      <select id="selLabels" class="form-select" multiple data-select-clearable="true">
        <option selected>bug</option>
        <option selected>p1</option>
        <option>feature</option>
      </select>
    </div>
  </div>
</div>
::end

```html
<select class="form-select" data-select-clearable="true">
  ...
</select>
```

```js components
import { Select } from "@abydahana/aksara-ui/components";

const options = [
  { label: "Option one", value: "1" },
  { label: "Option two", value: "2" }
];

Select({ clearable: true, options });
```

---

## Sizes

The `form-select-{size}` classes move to the enhanced control, so it matches inputs of the same size.

::html
<div class="docs-preview vstack gap-3">
  <select class="form-select form-select-sm" aria-label="Small select"><option>Small (.form-select-sm)</option><option>Option two</option></select>
  <select class="form-select" aria-label="Default select"><option>Default</option><option>Option two</option></select>
  <select class="form-select form-select-lg" aria-label="Large select"><option>Large (.form-select-lg)</option><option>Option two</option></select>
  <select class="form-select form-select-xl" aria-label="Extra large select"><option>Extra large (.form-select-xl)</option><option>Option two</option></select>
</div>
::end

```html
<select class="form-select form-select-sm">
  ...
</select>
<select class="form-select form-select-lg">
  ...
</select>
```

```js components
import { Select } from "@abydahana/aksara-ui/components";

const options = [
  { label: "Option one", value: "1" },
  { label: "Option two", value: "2" }
];

Select({ size: "sm", options });
Select({ size: "lg", options });
```

---

## States

`disabled`, `is-valid` and `is-invalid` work on the enhanced control as they do on inputs, including the colored focus ring.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <label class="form-label" for="selDisabled">Disabled</label>
      <select id="selDisabled" class="form-select" disabled><option>Locked value</option></select>
    </div>
    <div class="col-12 md:col-4">
      <label class="form-label" for="selValid">Valid</label>
      <select id="selValid" class="form-select is-valid"><option>London</option><option>Manchester</option></select>
      <span class="form-text">Looks good.</span>
    </div>
    <div class="col-12 md:col-4">
      <label class="form-label" for="selInvalid">Invalid</label>
      <select id="selInvalid" class="form-select is-invalid"><option value="">Choose…</option><option>London</option></select>
      <span class="form-error">Select a city.</span>
    </div>
  </div>
</div>
::end

```html
<select class="form-select is-invalid">
  ...
</select>
<span class="form-error">Select a city.</span>
```

```js components
import { FormError, Select } from "@abydahana/aksara-ui/components";

const options = [
  { label: "Option one", value: "1" },
  { label: "Option two", value: "2" }
];

Select({ isInvalid: true, options });
FormError({ message: "Select a city." });
```

---

## In An Input Group

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-8">
      <div class="input-group">
        <span class="input-group-text"><span class="mdi mdi-phone-outline"></span></span>
        <select class="form-select max-w-[120px]" data-select-search="false" aria-label="Country code">
          <option>+1</option><option>+44</option><option>+61</option>
        </select>
        <input class="form-control" placeholder="(415) 555-0123" aria-label="Phone number" />
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="input-group">
  <span class="input-group-text"><span class="mdi mdi-phone-outline"></span></span>
  <select class="form-select" data-select-search="false">
    ...
  </select>
  <input class="form-control" />
</div>
```

```js components
import { Input, InputGroup, InputGroupText, Select } from "@abydahana/aksara-ui/components";

const options = [
  { label: "Option one", value: "1" },
  { label: "Option two", value: "2" }
];

InputGroup({
  children:
    InputGroupText({ children: '<span class="mdi mdi-phone-outline"></span>' }) +
    Select({ search: false, options }) +
    Input()
});
```

---

## Native Select

Opt out per element with `data-select="native"` (or the `form-select-native` class). Native selects keep the same field styling and are the better choice on forms that must work without JavaScript.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <label class="form-label" for="selNative">Native select</label>
      <select id="selNative" class="form-select" data-select="native">
        <option>Option one</option>
        <option>Option two</option>
      </select>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="selNativeMulti">Native multiple</label>
      <select id="selNativeMulti" class="form-select form-select-native h-[auto]" multiple size="3">
        <option selected>Option one</option>
        <option>Option two</option>
        <option>Option three</option>
      </select>
    </div>
  </div>
</div>
::end

```html
<select class="form-select" data-select="native">
  ...
</select>
```

```js components
import { Select } from "@abydahana/aksara-ui/components";

const options = [
  { label: "Option one", value: "1" },
  { label: "Option two", value: "2" }
];

Select({ native: true, options });
```

---

## Options Reference

Options are read from `data-select-*` attributes or passed to `Aksara.select()`.

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Attribute</th><th>Option</th><th>Default</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>data-select="native"</code></td><td>–</td><td>–</td><td>Skip the enhancement.</td></tr>
      <tr><td><code>data-select-search</code></td><td><code>search</code></td><td><code>true</code></td><td>Type to filter options.</td></tr>
      <tr><td><code>data-select-create</code></td><td><code>create</code></td><td><code>false</code></td><td>Allow new values (tagging).</td></tr>
      <tr><td><code>data-select-clearable</code></td><td><code>clearable</code></td><td><code>false</code></td><td>Show a clear button.</td></tr>
      <tr><td><code>data-select-remove-button</code></td><td><code>removeButton</code></td><td><code>true</code></td><td>Remove button on chips (multiple).</td></tr>
      <tr><td><code>data-select-checkboxes</code></td><td><code>checkboxes</code></td><td><code>false</code></td><td>Checkbox per option (multiple).</td></tr>
      <tr><td><code>data-select-max-items</code></td><td><code>maxItems</code></td><td>unlimited</td><td>Maximum selected items (multiple).</td></tr>
      <tr><td><code>data-select-max-options</code></td><td><code>maxOptions</code></td><td><code>200</code></td><td>Options rendered in the dropdown.</td></tr>
      <tr><td><code>data-select-placeholder</code></td><td><code>placeholder</code></td><td>empty option text</td><td>Placeholder text.</td></tr>
      <tr><td><code>data-select-dropdown-parent</code></td><td><code>dropdownParent</code></td><td><code>"body"</code></td><td><code>"wrapper"</code> keeps the dropdown next to the field.</td></tr>
      <tr><td>–</td><td><code>settings</code></td><td><code>{}</code></td><td>Raw Tom Select settings, merged last (e.g. <code>load</code> for remote data).</td></tr>
    </tbody>
  </table>
</div>
::end

---

## JavaScript API

```js
// Enhance (or re-read options for) specific selects
const select = Aksara.select("#country", { clearable: true });

select.getValue(); // "id" or ["a", "b"] for multiple
select.setValue("my"); // fires change; pass true as 2nd argument to stay silent
select.sync(); // re-read <option> elements after changing the markup
select.tomSelect; // the underlying Tom Select instance (null when not enhanced)
select.destroy(); // back to the native select

// Remote data through raw Tom Select settings
Aksara.select("#user", {
  settings: {
    valueField: "id",
    labelField: "name",
    searchField: ["name"],
    load(query, callback) {
      fetch(`/api/users?q=${encodeURIComponent(query)}`)
        .then((response) => response.json())
        .then(callback)
        .catch(() => callback());
    }
  }
});
```

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Event</th><th>Detail</th></tr></thead>
    <tbody>
      <tr><td><code>aksara:select:init</code></td><td><code>{ instance, tomSelect }</code></td></tr>
      <tr><td><code>aksara:select:change</code></td><td><code>{ value, instance }</code> (the native <code>change</code> event fires too)</td></tr>
      <tr><td><code>aksara:select:open</code> / <code>aksara:select:close</code></td><td><code>{ instance }</code></td></tr>
      <tr><td><code>aksara:select:destroy</code></td><td><code>{ instance }</code></td></tr>
    </tbody>
  </table>
</div>
::end

---

## String Component

```js
import { Select } from "@abydahana/aksara-ui/components";

Select({
  name: "skills",
  multiple: true,
  clearable: true,
  placeholder: "Add skills…",
  value: ["design", "ts"],
  options: [
    { label: "Design", value: "design" },
    { label: "TypeScript", value: "ts" },
    { label: "Testing", value: "testing" }
  ]
});
```

Props: `name`, `id`, `options` (options or `{ label, options }` groups), `value` (array for multiple), `placeholder`, `multiple`, `native`, `search`, `create`, `clearable`, `checkboxes`, `maxItems`, `size`, `disabled`, `required`, `isValid`, `isInvalid`, `className`, `attributes`.
