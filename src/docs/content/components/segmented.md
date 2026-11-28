# Segmented & Toggle

A segmented control is a row of mutually exclusive options in one pill-shaped track: one view, one period, one alignment. It comes in two flavours. **Radio mode** is a set of native radio inputs, so it needs no JavaScript and submits with any form. **Button mode** (`data-segmented`) uses buttons with `aria-pressed` that the runtime keeps in sync, firing `aksara:segmented:change`. Next to it, a **toggle button** (`data-toggle="button"`) is a single button with an on/off state, such as bold, mute, follow or bookmark.

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="segmented" role="group" aria-label="View" data-segmented data-value="grid">
      <button class="segmented-item active" type="button" data-value="grid" aria-pressed="true"><span class="mdi mdi-view-grid-outline" aria-hidden="true"></span><span>Grid</span></button>
      <button class="segmented-item" type="button" data-value="list" aria-pressed="false"><span class="mdi mdi-view-list-outline" aria-hidden="true"></span><span>List</span></button>
      <button class="segmented-item" type="button" data-value="map" aria-pressed="false"><span class="mdi mdi-map-outline" aria-hidden="true"></span><span>Map</span></button>
    </div>
    <div class="segmented" role="radiogroup" aria-label="Date range">
      <input type="radio" name="segIntroRange" id="segIntroRange-0" value="day" /><label for="segIntroRange-0">Day</label>
      <input type="radio" name="segIntroRange" id="segIntroRange-1" value="week" checked /><label for="segIntroRange-1">Week</label>
      <input type="radio" name="segIntroRange" id="segIntroRange-2" value="month" /><label for="segIntroRange-2">Month</label>
    </div>
    <button class="btn btn-plain btn-icon" type="button" data-toggle="button" aria-pressed="true" aria-label="Bold"><span class="mdi mdi-format-bold" aria-hidden="true"></span></button>
  </div>
</div>
::end

```html
<div class="segmented" role="group" aria-label="View" data-segmented data-value="grid">
  <button class="segmented-item active" type="button" data-value="grid" aria-pressed="true">
    <span class="mdi mdi-view-grid-outline" aria-hidden="true"></span><span>Grid</span>
  </button>
  <button class="segmented-item" type="button" data-value="list" aria-pressed="false">
    <span class="mdi mdi-view-list-outline" aria-hidden="true"></span><span>List</span>
  </button>
  <button class="segmented-item" type="button" data-value="map" aria-pressed="false">
    <span class="mdi mdi-map-outline" aria-hidden="true"></span><span>Map</span>
  </button>
</div>

<div class="segmented" role="radiogroup" aria-label="Date range">
  <input type="radio" name="range" id="range-0" value="day" /><label for="range-0">Day</label>
  <input type="radio" name="range" id="range-1" value="week" checked /><label for="range-1">Week</label>
  <input type="radio" name="range" id="range-2" value="month" /><label for="range-2">Month</label>
</div>

<button class="btn btn-plain btn-icon" type="button" data-toggle="button" aria-pressed="true" aria-label="Bold">
  <span class="mdi mdi-format-bold" aria-hidden="true"></span>
</button>
```

```js components
import { Segmented, ToggleButton } from "@abydahana/aksara-ui/components";

Segmented({
  label: "View",
  value: "grid",
  options: [
    { value: "grid", label: "Grid", icon: "mdi-view-grid-outline" },
    { value: "list", label: "List", icon: "mdi-view-list-outline" },
    { value: "map", label: "Map", icon: "mdi-map-outline" }
  ]
});

Segmented({
  name: "range",
  label: "Date range",
  value: "week",
  options: [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" }
  ]
});

ToggleButton({ children: '<span class="mdi mdi-format-bold"></span>', icon: true, pressed: true, label: "Bold" });
```

---

## Segmented Or Tabs?

Both look like a row of options, but they do different jobs. **Tabs** switch between panels of content that already exist on the page: each tab owns a panel, and only one panel is visible. A **segmented control** sets a value: the chart period, the layout of a list, the billing cycle. What changes is how something is rendered or calculated, not which block of content is shown.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th></th><th>Segmented</th><th>Tabs</th></tr>
    </thead>
    <tbody>
      <tr><td>Purpose</td><td>Pick one value (period, view, unit, alignment).</td><td>Show one of several content panels.</td></tr>
      <tr><td>Result</td><td>A form value or an <code>aksara:segmented:change</code> event.</td><td>A visible <code>.tab-pane</code>.</td></tr>
      <tr><td>Semantics</td><td><code>role="radiogroup"</code> (radio mode) or <code>role="group"</code> with <code>aria-pressed</code>.</td><td><code>role="tablist"</code>, <code>tab</code>, <code>tabpanel</code>.</td></tr>
      <tr><td>Typical place</td><td>Toolbars, filters, chart headers, pricing.</td><td>Settings sections, product details, dashboards.</td></tr>
    </tbody>
  </table>
</div>
::end

If you need panels, use [Tabs](#/components/tabs). If the options simply change a setting, use a segmented control.

---

## Radio Mode

Give the control radio inputs that share a `name`. Each `<input>` is followed by its `<label>`; the input is visually hidden, the checked label becomes the raised segment. It works without JavaScript, keyboard arrows move between options like any radio group, and the value is submitted with the form.

::html
<div class="docs-preview">
  <div class="card max-w-[560px]">
    <div class="card-header hstack justify-between flex-wrap gap-3">
      <div>
        <p class="m-0 fw-semibold">Revenue</p>
        <p class="m-0 text-xs text-subtle">Northwind Store · Seattle</p>
      </div>
      <div class="segmented segmented-sm" role="radiogroup" aria-label="Date range">
        <input type="radio" name="segRange" id="segRange-0" value="day" /><label for="segRange-0">Day</label>
        <input type="radio" name="segRange" id="segRange-1" value="week" checked /><label for="segRange-1">Week</label>
        <input type="radio" name="segRange" id="segRange-2" value="month" /><label for="segRange-2">Month</label>
      </div>
    </div>
    <div class="card-body">
      <p class="m-0 text-xl fw-bold">$48,250.00</p>
      <p class="m-0 text-sm text-subtle"><span class="text-success fw-semibold">+12.4%</span> vs previous period</p>
    </div>
  </div>
</div>
::end

```html
<div class="segmented segmented-sm" role="radiogroup" aria-label="Date range">
  <input type="radio" name="range" id="range-0" value="day" />
  <label for="range-0">Day</label>
  <input type="radio" name="range" id="range-1" value="week" checked />
  <label for="range-1">Week</label>
  <input type="radio" name="range" id="range-2" value="month" />
  <label for="range-2">Month</label>
</div>
```

```js components
import { Segmented } from "@abydahana/aksara-ui/components";

Segmented({
  name: "range",
  label: "Date range",
  value: "week",
  size: "sm",
  options: [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" }
  ]
});
```

Listen for the native `change` event to react to a new value: `form.addEventListener("change", (e) => e.target.name === "range" && reload(e.target.value))`.

---

## Button Mode

Without a `name`, render `<button class="segmented-item">` elements inside a `.segmented[data-segmented]` group. On click the runtime presses the clicked item (`aria-pressed="true"` and `.active`), releases the others, writes the value to the group's `data-value` and fires `aksara:segmented:change`. Use it to switch how a list is laid out. Click the segments below.

::html
<div class="docs-preview">
  <div class="card max-w-[640px]">
    <div class="card-header hstack justify-between flex-wrap gap-3">
      <p class="m-0 fw-semibold">128 properties in Brooklyn, New York</p>
      <div class="segmented segmented-sm" role="group" aria-label="View" data-segmented data-value="grid">
        <button class="segmented-item active" type="button" data-value="grid" aria-pressed="true"><span class="mdi mdi-view-grid-outline" aria-hidden="true"></span><span>Grid</span></button>
        <button class="segmented-item" type="button" data-value="list" aria-pressed="false"><span class="mdi mdi-view-list-outline" aria-hidden="true"></span><span>List</span></button>
        <button class="segmented-item" type="button" data-value="map" aria-pressed="false"><span class="mdi mdi-map-outline" aria-hidden="true"></span><span>Map</span></button>
      </div>
    </div>
    <div class="card-body">
      <div class="row gap-3">
        <div class="col-12 md:col-4"><div class="h-[72px] rounded-[12px] [background:linear-gradient(135deg,rgb(var(--aksara-primary)/.25),rgb(var(--aksara-info)/.15))]"></div><p class="m-0 mt-2 text-sm fw-semibold">Park Slope Residence</p></div>
        <div class="col-12 md:col-4"><div class="h-[72px] rounded-[12px] [background:linear-gradient(135deg,rgb(var(--aksara-success)/.25),rgb(var(--aksara-info)/.15))]"></div><p class="m-0 mt-2 text-sm fw-semibold">Cobble Hill Townhouse</p></div>
        <div class="col-12 md:col-4"><div class="h-[72px] rounded-[12px] [background:linear-gradient(135deg,rgb(var(--aksara-warning)/.25),rgb(var(--aksara-danger)/.15))]"></div><p class="m-0 mt-2 text-sm fw-semibold">Dumbo Loft</p></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="segmented segmented-sm" role="group" aria-label="View" data-segmented data-value="grid">
  <button class="segmented-item active" type="button" data-value="grid" aria-pressed="true">
    <span class="mdi mdi-view-grid-outline" aria-hidden="true"></span><span>Grid</span>
  </button>
  <button class="segmented-item" type="button" data-value="list" aria-pressed="false">
    <span class="mdi mdi-view-list-outline" aria-hidden="true"></span><span>List</span>
  </button>
  <button class="segmented-item" type="button" data-value="map" aria-pressed="false">
    <span class="mdi mdi-map-outline" aria-hidden="true"></span><span>Map</span>
  </button>
</div>
```

```js components
import { Segmented } from "@abydahana/aksara-ui/components";

Segmented({
  id: "listingView",
  label: "View",
  value: "grid",
  size: "sm",
  options: [
    { value: "grid", label: "Grid", icon: "mdi-view-grid-outline" },
    { value: "list", label: "List", icon: "mdi-view-list-outline" },
    { value: "map", label: "Map", icon: "mdi-map-outline" }
  ]
});
```

```js
document.querySelector("#listingView").addEventListener("aksara:segmented:change", (event) => {
  const { value, index } = event.detail; // "list", 1
  results.dataset.layout = value;
});
```

Without `data-value` on an item, the runtime uses the item's text as the value.

---

## Sizes

Add `.segmented-sm` or `.segmented-lg`; the default is medium. The small size fits card headers and toolbars, the large one stands alone in hero sections and pricing pages.

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="segmented segmented-sm" role="radiogroup" aria-label="Unit, small">
      <input type="radio" name="segSizeSm" id="segSizeSm-0" value="kg" checked /><label for="segSizeSm-0">kg</label>
      <input type="radio" name="segSizeSm" id="segSizeSm-1" value="lb" /><label for="segSizeSm-1">lb</label>
    </div>
    <div class="segmented" role="radiogroup" aria-label="Unit, medium">
      <input type="radio" name="segSizeMd" id="segSizeMd-0" value="kg" checked /><label for="segSizeMd-0">kg</label>
      <input type="radio" name="segSizeMd" id="segSizeMd-1" value="lb" /><label for="segSizeMd-1">lb</label>
    </div>
    <div class="segmented segmented-lg" role="radiogroup" aria-label="Unit, large">
      <input type="radio" name="segSizeLg" id="segSizeLg-0" value="kg" checked /><label for="segSizeLg-0">kg</label>
      <input type="radio" name="segSizeLg" id="segSizeLg-1" value="lb" /><label for="segSizeLg-1">lb</label>
    </div>
  </div>
</div>
::end

```html
<div class="segmented segmented-sm" role="radiogroup" aria-label="Unit">...</div>
<div class="segmented" role="radiogroup" aria-label="Unit">...</div>
<div class="segmented segmented-lg" role="radiogroup" aria-label="Unit">...</div>
```

```js components
import { Segmented } from "@abydahana/aksara-ui/components";

const options = [
  { value: "kg", label: "kg" },
  { value: "lb", label: "lb" }
];

Segmented({ name: "unit", label: "Unit", options, size: "sm" });
Segmented({ name: "unit", label: "Unit", options });
Segmented({ name: "unit", label: "Unit", options, size: "lg" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Segment padding</th><th>Font size</th><th>Min height</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.segmented-sm</code></td><td><code>.125rem .625rem</code></td><td><code>.8125rem</code></td><td><code>1.75rem</code></td></tr>
      <tr><td><code>.segmented</code></td><td><code>.25rem .875rem</code></td><td><code>.875rem</code></td><td><code>2.125rem</code></td></tr>
      <tr><td><code>.segmented-lg</code></td><td><code>.375rem 1.125rem</code></td><td><code>.9375rem</code></td><td><code>2.5rem</code></td></tr>
    </tbody>
  </table>
</div>
::end

---

## Icons And Icon-Only

Put an MDI icon before the text of a segment. For icon-only segments, the accessible name has to come from somewhere else: an `aria-label` on each button (button mode), or visually hidden text inside each label (radio mode). With the string component, `ariaLabel` on an icon-only option does the right thing in both modes. A text alignment group is the classic case.

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="segmented" role="group" aria-label="Text alignment" data-segmented data-value="left">
      <button class="segmented-item active" type="button" data-value="left" aria-pressed="true" aria-label="Align left"><span class="mdi mdi-format-align-left" aria-hidden="true"></span></button>
      <button class="segmented-item" type="button" data-value="center" aria-pressed="false" aria-label="Align center"><span class="mdi mdi-format-align-center" aria-hidden="true"></span></button>
      <button class="segmented-item" type="button" data-value="right" aria-pressed="false" aria-label="Align right"><span class="mdi mdi-format-align-right" aria-hidden="true"></span></button>
      <button class="segmented-item" type="button" data-value="justify" aria-pressed="false" aria-label="Justify"><span class="mdi mdi-format-align-justify" aria-hidden="true"></span></button>
    </div>
    <div class="segmented" role="radiogroup" aria-label="Theme">
      <input type="radio" name="segTheme" id="segTheme-0" value="light" checked /><label for="segTheme-0"><span class="mdi mdi-white-balance-sunny" aria-hidden="true"></span><span class="visually-hidden">Light</span></label>
      <input type="radio" name="segTheme" id="segTheme-1" value="dark" /><label for="segTheme-1"><span class="mdi mdi-weather-night" aria-hidden="true"></span><span class="visually-hidden">Dark</span></label>
      <input type="radio" name="segTheme" id="segTheme-2" value="system" /><label for="segTheme-2"><span class="mdi mdi-laptop" aria-hidden="true"></span><span class="visually-hidden">System</span></label>
    </div>
    <div class="segmented" role="radiogroup" aria-label="Transport">
      <input type="radio" name="segTransport" id="segTransport-0" value="car" checked /><label for="segTransport-0"><span class="mdi mdi-car-outline" aria-hidden="true"></span><span>Car</span></label>
      <input type="radio" name="segTransport" id="segTransport-1" value="motorbike" /><label for="segTransport-1"><span class="mdi mdi-motorbike" aria-hidden="true"></span><span>Motorbike</span></label>
      <input type="radio" name="segTransport" id="segTransport-2" value="walk" /><label for="segTransport-2"><span class="mdi mdi-walk" aria-hidden="true"></span><span>Walk</span></label>
    </div>
  </div>
</div>
::end

```html
<div class="segmented" role="group" aria-label="Text alignment" data-segmented data-value="left">
  <button class="segmented-item active" type="button" data-value="left" aria-pressed="true" aria-label="Align left">
    <span class="mdi mdi-format-align-left" aria-hidden="true"></span>
  </button>
  <button class="segmented-item" type="button" data-value="center" aria-pressed="false" aria-label="Align center">
    <span class="mdi mdi-format-align-center" aria-hidden="true"></span>
  </button>
  ...
</div>

<!-- Radio mode: hidden text names the option -->
<input type="radio" name="theme" id="theme-0" value="light" checked />
<label for="theme-0">
  <span class="mdi mdi-white-balance-sunny" aria-hidden="true"></span>
  <span class="visually-hidden">Light</span>
</label>
```

```js components
import { Segmented } from "@abydahana/aksara-ui/components";

Segmented({
  label: "Text alignment",
  value: "left",
  options: [
    { value: "left", icon: "mdi-format-align-left", ariaLabel: "Align left" },
    { value: "center", icon: "mdi-format-align-center", ariaLabel: "Align center" },
    { value: "right", icon: "mdi-format-align-right", ariaLabel: "Align right" },
    { value: "justify", icon: "mdi-format-align-justify", ariaLabel: "Justify" }
  ]
});

Segmented({
  name: "transport",
  label: "Transport",
  options: [
    { value: "car", label: "Car", icon: "mdi-car-outline" },
    { value: "motorbike", label: "Motorbike", icon: "mdi-motorbike" },
    { value: "walk", label: "Walk", icon: "mdi-walk" }
  ]
});
```

In radio mode, `ariaLabel` is put on the `<label>`. For the most reliable screen reader support, add visually hidden text inside the label as in the theme example above.

---

## Block

`.segmented-block` stretches the control to the full width of its container and gives every segment the same width. A billing switch above a pricing table is the typical use. The preview changes the prices with a small inline `change` handler.

::html
<div class="docs-preview">
  <div class="max-w-[640px] vstack gap-4" onchange="if (event.target.name === 'segBilling') this.querySelectorAll('[data-yearly]').forEach((el) => (el.textContent = event.target.value === 'yearly' ? el.dataset.yearly : el.dataset.monthly))">
    <div class="segmented segmented-block segmented-lg" role="radiogroup" aria-label="Billing period">
      <input type="radio" name="segBilling" id="segBilling-0" value="monthly" checked /><label for="segBilling-0">Monthly</label>
      <input type="radio" name="segBilling" id="segBilling-1" value="yearly" /><label for="segBilling-1">Yearly <span class="badge badge-soft-success">Save 20%</span></label>
    </div>
    <div class="row gap-3">
      <div class="col-12 md:col-6">
        <div class="card">
          <div class="card-body vstack gap-3">
            <div>
              <p class="m-0 fw-semibold">Starter</p>
              <p class="m-0 text-sm text-subtle">For small shops getting started.</p>
            </div>
            <p class="m-0"><span class="text-xl fw-bold" data-monthly="$12" data-yearly="$10">$12</span> <span class="text-sm text-subtle">/ month</span></p>
            <button class="btn btn-plain w-full" type="button">Choose Starter</button>
          </div>
        </div>
      </div>
      <div class="col-12 md:col-6">
        <div class="card">
          <div class="card-body vstack gap-3">
            <div>
              <p class="m-0 fw-semibold">Business <span class="badge badge-soft-primary">Popular</span></p>
              <p class="m-0 text-sm text-subtle">Multiple outlets and staff accounts.</p>
            </div>
            <p class="m-0"><span class="text-xl fw-bold" data-monthly="$29" data-yearly="$23">$29</span> <span class="text-sm text-subtle">/ month</span></p>
            <button class="btn btn-primary w-full" type="button">Choose Business</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="segmented segmented-block segmented-lg" role="radiogroup" aria-label="Billing period">
  <input type="radio" name="billing" id="billing-0" value="monthly" checked />
  <label for="billing-0">Monthly</label>
  <input type="radio" name="billing" id="billing-1" value="yearly" />
  <label for="billing-1">Yearly <span class="badge badge-soft-success">Save 20%</span></label>
</div>

<span class="text-xl fw-bold" data-monthly="$12" data-yearly="$10">$12</span>

<script>
  document.addEventListener("change", (event) => {
    if (event.target.name !== "billing") return;
    const yearly = event.target.value === "yearly";
    document.querySelectorAll("[data-yearly]").forEach((price) => {
      price.textContent = yearly ? price.dataset.yearly : price.dataset.monthly;
    });
  });
</script>
```

```js components
import { Segmented } from "@abydahana/aksara-ui/components";

Segmented({
  name: "billing",
  label: "Billing period",
  block: true,
  size: "lg",
  options: [
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" }
  ]
});
```

`label` in `Segmented` options is escaped text. To add the "Save 20%" badge, write the markup by hand as above.

---

## Disabled Segments

Disable a single option with `disabled` on its radio input or button. It fades out and ignores clicks; the runtime never selects a disabled button.

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="segmented" role="radiogroup" aria-label="Delivery">
      <input type="radio" name="segDelivery" id="segDelivery-0" value="regular" checked /><label for="segDelivery-0">Regular</label>
      <input type="radio" name="segDelivery" id="segDelivery-1" value="express" /><label for="segDelivery-1">Express</label>
      <input type="radio" name="segDelivery" id="segDelivery-2" value="same-day" disabled /><label for="segDelivery-2">Same day</label>
    </div>
    <span class="text-sm text-subtle">Same-day delivery is only available in central London.</span>
  </div>
</div>
::end

```html
<input type="radio" name="delivery" id="delivery-2" value="same-day" disabled />
<label for="delivery-2">Same day</label>
```

```js components
import { Segmented } from "@abydahana/aksara-ui/components";

Segmented({
  name: "delivery",
  label: "Delivery",
  options: [
    { value: "regular", label: "Regular" },
    { value: "express", label: "Express" },
    { value: "same-day", label: "Same day", disabled: true }
  ]
});
```

---

## Toggle Buttons

Add `data-toggle="button"` and `aria-pressed` to any `.btn`. Each click flips `aria-pressed` between `"true"` and `"false"`, toggles `.active` and fires `aksara:toggle` with `event.detail.pressed`. The plain, ghost and subtle button styles show the pressed state with a soft primary tint. A text editor toolbar combines toggle buttons for bold, italic and underline with an icon-only segmented control for alignment.

::html
<div class="docs-preview">
  <div class="card max-w-[560px]">
    <div class="card-header hstack flex-wrap gap-2" role="toolbar" aria-label="Formatting">
      <div class="hstack gap-1">
        <button class="btn btn-ghost btn-sm btn-icon active" type="button" data-toggle="button" aria-pressed="true" aria-label="Bold"><span class="mdi mdi-format-bold" aria-hidden="true"></span></button>
        <button class="btn btn-ghost btn-sm btn-icon" type="button" data-toggle="button" aria-pressed="false" aria-label="Italic"><span class="mdi mdi-format-italic" aria-hidden="true"></span></button>
        <button class="btn btn-ghost btn-sm btn-icon" type="button" data-toggle="button" aria-pressed="false" aria-label="Underline"><span class="mdi mdi-format-underline" aria-hidden="true"></span></button>
        <button class="btn btn-ghost btn-sm btn-icon" type="button" data-toggle="button" aria-pressed="false" aria-label="Strikethrough"><span class="mdi mdi-format-strikethrough-variant" aria-hidden="true"></span></button>
      </div>
      <span class="w-[1px] h-[20px] mx-1 [background:var(--aksara-border)]" aria-hidden="true"></span>
      <div class="segmented segmented-sm" role="group" aria-label="Alignment" data-segmented data-value="left">
        <button class="segmented-item active" type="button" data-value="left" aria-pressed="true" aria-label="Align left"><span class="mdi mdi-format-align-left" aria-hidden="true"></span></button>
        <button class="segmented-item" type="button" data-value="center" aria-pressed="false" aria-label="Align center"><span class="mdi mdi-format-align-center" aria-hidden="true"></span></button>
        <button class="segmented-item" type="button" data-value="right" aria-pressed="false" aria-label="Align right"><span class="mdi mdi-format-align-right" aria-hidden="true"></span></button>
      </div>
    </div>
    <div class="card-body">
      <p class="m-0"><strong>Weekly update</strong> · Shipping to Manchester and Leeds is back to normal. Orders placed before 14:00 leave the warehouse the same day.</p>
    </div>
  </div>
</div>
::end

```html
<div class="hstack gap-1" role="toolbar" aria-label="Formatting">
  <button
    class="btn btn-ghost btn-sm btn-icon active"
    type="button"
    data-toggle="button"
    aria-pressed="true"
    aria-label="Bold"
  >
    <span class="mdi mdi-format-bold" aria-hidden="true"></span>
  </button>
  <button
    class="btn btn-ghost btn-sm btn-icon"
    type="button"
    data-toggle="button"
    aria-pressed="false"
    aria-label="Italic"
  >
    <span class="mdi mdi-format-italic" aria-hidden="true"></span>
  </button>
  <button
    class="btn btn-ghost btn-sm btn-icon"
    type="button"
    data-toggle="button"
    aria-pressed="false"
    aria-label="Underline"
  >
    <span class="mdi mdi-format-underline" aria-hidden="true"></span>
  </button>
</div>
```

```js components
import { ToggleButton } from "@abydahana/aksara-ui/components";

const format = (name, icon, pressed = false) =>
  ToggleButton({
    children: `<span class="mdi ${icon}" aria-hidden="true"></span>`,
    variant: "ghost",
    size: "sm",
    icon: true,
    pressed,
    label: name,
    attributes: { "data-format": name.toLowerCase() }
  });

`<div class="hstack gap-1" role="toolbar" aria-label="Formatting">
  ${format("Bold", "mdi-format-bold", true)}
  ${format("Italic", "mdi-format-italic")}
  ${format("Underline", "mdi-format-underline")}
</div>`;
```

```js
document.addEventListener("aksara:toggle", (event) => {
  const button = event.target;
  if (!button.matches("[data-format]")) return;
  editor.setFormat(button.dataset.format, event.detail.pressed);
});
```

Keep the label the same in both states ("Bold", not "Bold on"): `aria-pressed` already tells screen readers whether it is on.

---

## Swapping Content

Put two spans in the button: `.btn-toggle-off` is shown while the button is not pressed, `.btn-toggle-on` while it is. Use this for Follow / Following, a bookmark that fills in, or a mute switch. `ToggleButton` writes both spans for you when you pass `pressedChildren`.

::html
<div class="docs-preview">
  <div class="card max-w-[480px]">
    <div class="list-group list-group-flush">
      <div class="list-group-item hstack gap-3">
        <span class="avatar avatar-primary avatar-sm rounded-full">AM</span>
        <div class="flex-1 min-w-0">
          <p class="m-0 fw-semibold">Alex Morgan</p>
          <p class="m-0 text-xs text-subtle">Product designer · London</p>
        </div>
        <button class="btn btn-plain btn-sm" type="button" data-toggle="button" aria-pressed="false"><span class="btn-toggle-off"><span class="mdi mdi-account-plus-outline" aria-hidden="true"></span> Follow</span><span class="btn-toggle-on"><span class="mdi mdi-check" aria-hidden="true"></span> Following</span></button>
      </div>
      <div class="list-group-item hstack gap-3">
        <span class="avatar avatar-info avatar-sm rounded-full">MC</span>
        <div class="flex-1 min-w-0">
          <p class="m-0 fw-semibold">Maya Chen</p>
          <p class="m-0 text-xs text-subtle">Backend engineer · Toronto</p>
        </div>
        <button class="btn btn-plain btn-sm active" type="button" data-toggle="button" aria-pressed="true"><span class="btn-toggle-off"><span class="mdi mdi-account-plus-outline" aria-hidden="true"></span> Follow</span><span class="btn-toggle-on"><span class="mdi mdi-check" aria-hidden="true"></span> Following</span></button>
      </div>
      <div class="list-group-item hstack gap-3">
        <div class="w-[40px] h-[40px] rounded-[10px] shrink-0 [background:linear-gradient(135deg,rgb(var(--aksara-warning)/.35),rgb(var(--aksara-danger)/.2))]"></div>
        <div class="flex-1 min-w-0">
          <p class="m-0 fw-semibold truncate">Weeknight Pasta, 12 recipes</p>
          <p class="m-0 text-xs text-subtle">Saved collections</p>
        </div>
        <button class="btn btn-ghost btn-sm btn-icon" type="button" data-toggle="button" aria-pressed="false" aria-label="Bookmark"><span class="btn-toggle-off mdi mdi-bookmark-outline" aria-hidden="true"></span><span class="btn-toggle-on mdi mdi-bookmark text-primary" aria-hidden="true"></span></button>
        <button class="btn btn-ghost btn-sm btn-icon" type="button" data-toggle="button" aria-pressed="false" aria-label="Mute notifications"><span class="btn-toggle-off mdi mdi-bell-outline" aria-hidden="true"></span><span class="btn-toggle-on mdi mdi-bell-off-outline" aria-hidden="true"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<button class="btn btn-plain btn-sm" type="button" data-toggle="button" aria-pressed="false">
  <span class="btn-toggle-off"><span class="mdi mdi-account-plus-outline" aria-hidden="true"></span> Follow</span>
  <span class="btn-toggle-on"><span class="mdi mdi-check" aria-hidden="true"></span> Following</span>
</button>

<button
  class="btn btn-ghost btn-sm btn-icon"
  type="button"
  data-toggle="button"
  aria-pressed="false"
  aria-label="Bookmark"
>
  <span class="btn-toggle-off mdi mdi-bookmark-outline" aria-hidden="true"></span>
  <span class="btn-toggle-on mdi mdi-bookmark text-primary" aria-hidden="true"></span>
</button>
```

```js components
import { ToggleButton } from "@abydahana/aksara-ui/components";

ToggleButton({
  children: '<span class="mdi mdi-account-plus-outline"></span> Follow',
  pressedChildren: '<span class="mdi mdi-check"></span> Following',
  size: "sm",
  attributes: { "data-user": "alex" }
});

ToggleButton({
  children: '<span class="mdi mdi-bookmark-outline"></span>',
  pressedChildren: '<span class="mdi mdi-bookmark text-primary"></span>',
  variant: "ghost",
  size: "sm",
  icon: true,
  label: "Bookmark"
});
```

Save the new state in the `aksara:toggle` listener, and flip `aria-pressed` back if the request fails.

---

## JavaScript

Both controls work through delegated click listeners on the document, so markup added after `Aksara.init()` works too. Radio mode needs no JavaScript at all.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Attribute / event</th><th>Where</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-segmented</code></td><td><code>.segmented</code></td><td>Turns <code>.segmented-item</code> buttons into a single-choice group. A click sets <code>aria-pressed</code> and <code>.active</code> on the clicked item and clears them on the others. Disabled items are skipped.</td></tr>
      <tr><td><code>data-value</code></td><td><code>.segmented-item</code></td><td>The item's value. Falls back to the item's text.</td></tr>
      <tr><td><code>data-value</code></td><td><code>.segmented[data-segmented]</code></td><td>The current value, updated on every change.</td></tr>
      <tr><td><code>aksara:segmented:change</code></td><td>Fired on the <code>.segmented</code></td><td>Bubbles. <code>event.detail</code>: <code>{ value, item, index }</code>, the new value, the pressed button and its position.</td></tr>
      <tr><td><code>data-toggle="button"</code></td><td>Any <code>.btn</code></td><td>Each click flips <code>aria-pressed</code> and toggles <code>.active</code>. Disabled buttons are ignored.</td></tr>
      <tr><td><code>aksara:toggle</code></td><td>Fired on the button</td><td>Bubbles. <code>event.detail.pressed</code> is the new state (<code>true</code> or <code>false</code>).</td></tr>
    </tbody>
  </table>
</div>
::end

To change a button-mode value from script, click the item (`group.querySelector('[data-value="map"]').click()`), so the classes, `data-value` and the event stay in sync. For a toggle button, call `button.click()` the same way.

---

## String Component

`Segmented` renders radio inputs when you pass `name` and buttons with `data-segmented` otherwise. `ToggleButton` renders a `.btn` with `data-toggle="button"`.

```ts
import { Segmented, ToggleButton } from "@abydahana/aksara-ui/components";

Segmented({
  name: "range",
  options: [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" }
  ],
  value: "week"
});
Segmented({
  id: "view",
  label: "View",
  options: [{ value: "grid", icon: "mdi-view-grid-outline", ariaLabel: "Grid" }]
});
ToggleButton({ children: "Follow", pressedChildren: "Following", pressed: false });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Segmented prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>options</code></td><td><code>SegmentedOption[]</code></td><td>—</td><td>The segments, see below.</td></tr>
      <tr><td><code>value</code></td><td><code>string</code></td><td>first option</td><td>Selected value.</td></tr>
      <tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>Renders radio inputs with this name (radio mode). Without it, buttons with <code>data-segmented</code>.</td></tr>
      <tr><td><code>id</code></td><td><code>string</code></td><td>—</td><td>Group id. In radio mode it is also the prefix of the input ids (default <code>{name}-seg</code>).</td></tr>
      <tr><td><code>size</code></td><td><code>"sm" | "md" | "lg"</code></td><td><code>"md"</code></td><td>Adds <code>.segmented-sm</code> or <code>.segmented-lg</code>.</td></tr>
      <tr><td><code>block</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.segmented-block</code>: full width, equal segments.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td><code>aria-label</code> of the group.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the group.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes on the group.</td></tr>
    </tbody>
  </table>
</div>
::end

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>SegmentedOption</th><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>value</code></td><td><code>string</code></td><td>Value of the radio input or the button's <code>data-value</code>.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td>Escaped text.</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td>Leading MDI class, for example <code>"mdi-map-outline"</code>.</td></tr>
      <tr><td><code>disabled</code></td><td><code>boolean</code></td><td>Disables the option.</td></tr>
      <tr><td><code>ariaLabel</code></td><td><code>string</code></td><td>Accessible name for icon-only segments.</td></tr>
    </tbody>
  </table>
</div>
::end

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>ToggleButton prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>children</code></td><td><code>string</code></td><td>—</td><td>Raw HTML shown while off (or always, without <code>pressedChildren</code>).</td></tr>
      <tr><td><code>pressedChildren</code></td><td><code>string</code></td><td>—</td><td>Raw HTML shown while on. Wraps both in <code>.btn-toggle-off</code> / <code>.btn-toggle-on</code>.</td></tr>
      <tr><td><code>pressed</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Initial state: <code>aria-pressed</code> and <code>.active</code>.</td></tr>
      <tr><td><code>variant</code></td><td><code>"plain" | "ghost" | "subtle"</code></td><td><code>"plain"</code></td><td>Adds <code>.btn-{variant}</code>.</td></tr>
      <tr><td><code>size</code></td><td><code>"sm" | "md" | "lg"</code></td><td><code>"md"</code></td><td>Adds <code>.btn-sm</code> or <code>.btn-lg</code>.</td></tr>
      <tr><td><code>icon</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Square icon button (<code>.btn-icon</code>). Set <code>label</code> too.</td></tr>
      <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Native <code>disabled</code>.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td><code>aria-label</code>, required for icon-only buttons.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes, for example <code>{ "data-format": "bold" }</code>.</td></tr>
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
      <tr><td><code>.segmented</code></td><td>Inline track with a subtle background. Holds radio <code>input + label</code> pairs or <code>.segmented-item</code> buttons. Scrolls horizontally when it does not fit.</td></tr>
      <tr><td><code>.segmented-item</code></td><td>A button segment. Raised when <code>.active</code>, <code>aria-pressed="true"</code> or <code>aria-selected="true"</code>.</td></tr>
      <tr><td><code>.segmented-sm</code> / <code>.segmented-lg</code></td><td>Smaller or larger segments.</td></tr>
      <tr><td><code>.segmented-block</code></td><td>Full width with equal-width segments.</td></tr>
      <tr><td><code>.btn-toggle-off</code></td><td>Content shown while the parent <code>.btn</code> is not pressed.</td></tr>
      <tr><td><code>.btn-toggle-on</code></td><td>Content shown while the parent <code>.btn</code> has <code>aria-pressed="true"</code>.</td></tr>
      <tr><td><code>.btn-plain</code>, <code>.btn-ghost</code>, <code>.btn-subtle</code> with <code>aria-pressed="true"</code></td><td>Soft primary tint for the pressed state.</td></tr>
    </tbody>
  </table>
</div>
::end
