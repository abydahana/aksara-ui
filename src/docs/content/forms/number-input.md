# Number Input

`.input-stepper` turns an input group into a number field with − and + buttons. Mark the group with `data-stepper` and the runtime steps the value by the input's `step`, clamps it to `min` and `max`, disables a button at its limit, keeps stepping while a button is held down, and fires `input` and `change` like a user edit. The browser spin buttons are hidden and the value is centered with tabular numbers.

---

## Basic Number Input

A native `<input type="number">` between two `.btn-plain.btn-icon` buttons marked `data-stepper-down` and `data-stepper-up`. Typing, the arrow keys and the mouse wheel keep working as usual.

::html
<div class="docs-preview">
  <div class="max-w-[260px]">
    <label class="form-label" for="niSeats">Seats</label>
    <div class="input-group input-stepper" data-stepper>
      <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
      <input id="niSeats" class="form-control" type="number" inputmode="numeric" name="seats" value="5" min="1" max="50" />
      <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
    </div>
    <p class="form-text">$8 per seat each month. Up to 50 seats.</p>
  </div>
</div>
::end

```html
<label class="form-label" for="seats">Seats</label>
<div class="input-group input-stepper" data-stepper>
  <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease">
    <span class="mdi mdi-minus" aria-hidden="true"></span>
  </button>
  <input id="seats" class="form-control" type="number" inputmode="numeric" name="seats" value="5" min="1" max="50" />
  <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase">
    <span class="mdi mdi-plus" aria-hidden="true"></span>
  </button>
</div>
<p class="form-text">$8 per seat each month. Up to 50 seats.</p>
```

```js components
import { FormLabel, FormText, NumberInput } from "@abydahana/aksara-ui/components";

FormLabel({ label: "Seats", htmlFor: "seats" });
NumberInput({ id: "seats", name: "seats", value: 5, min: 1, max: 50 });
FormText({ text: "$8 per seat each month. Up to 50 seats." });
```

Press and hold − or + to keep counting: after 400 ms the value repeats every 70 ms until you let go or a limit is reached.

---

## Quantity In A Cart

`.input-stepper-inline` shrinks the group to its content (a 3.5rem input) so it sits next to other content instead of filling the row. Combined with `.input-group-sm` it is the quantity picker of a cart line. The `min` of 1 disables − on the first item; the line total in the preview follows the `input` event.

::html
<div class="docs-preview">
  <div class="card max-w-[560px]">
    <div class="list-group list-group-flush">
      <div class="list-group-item hstack gap-3 flex-wrap" oninput="this.querySelector('[data-line-total]').textContent = '$' + (Number(event.target.value) * 18.5).toFixed(2)">
        <div class="w-[56px] h-[56px] rounded-[12px] shrink-0 [background:linear-gradient(135deg,rgb(var(--aksara-warning)/.35),rgb(var(--aksara-danger)/.2))]"></div>
        <div class="flex-1 min-w-0">
          <p class="m-0 fw-semibold truncate">Colombian Arabica Coffee, 500 g</p>
          <p class="m-0 text-sm text-subtle">$18.50 · Medium roast</p>
        </div>
        <div class="input-group input-stepper input-group-sm input-stepper-inline" data-stepper>
          <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease quantity" disabled><span class="mdi mdi-minus" aria-hidden="true"></span></button>
          <input class="form-control" type="number" inputmode="numeric" name="qty[coffee]" value="1" min="1" max="12" aria-label="Quantity, Colombian Arabica Coffee" />
          <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase quantity"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
        </div>
        <span class="fw-semibold w-[110px] text-end" data-line-total>$18.50</span>
      </div>
      <div class="list-group-item hstack gap-3 flex-wrap" oninput="this.querySelector('[data-line-total]').textContent = '$' + (Number(event.target.value) * 6.5).toFixed(2)">
        <div class="w-[56px] h-[56px] rounded-[12px] shrink-0 [background:linear-gradient(135deg,rgb(var(--aksara-success)/.3),rgb(var(--aksara-info)/.2))]"></div>
        <div class="flex-1 min-w-0">
          <p class="m-0 fw-semibold truncate">Jasmine Green Tea</p>
          <p class="m-0 text-sm text-subtle">$6.50 · 20 sachets</p>
        </div>
        <div class="input-group input-stepper input-group-sm input-stepper-inline" data-stepper>
          <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease quantity"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
          <input class="form-control" type="number" inputmode="numeric" name="qty[tea]" value="3" min="1" max="12" aria-label="Quantity, Jasmine Green Tea" />
          <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase quantity"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
        </div>
        <span class="fw-semibold w-[110px] text-end" data-line-total>$19.50</span>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="input-group input-stepper input-group-sm input-stepper-inline" data-stepper>
  <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease quantity" disabled>
    <span class="mdi mdi-minus" aria-hidden="true"></span>
  </button>
  <input
    class="form-control"
    type="number"
    inputmode="numeric"
    name="qty[coffee]"
    value="1"
    min="1"
    max="12"
    aria-label="Quantity, Colombian Arabica Coffee"
  />
  <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase quantity">
    <span class="mdi mdi-plus" aria-hidden="true"></span>
  </button>
</div>
```

```js components
import { NumberInput } from "@abydahana/aksara-ui/components";

NumberInput({
  name: "qty[coffee]",
  value: 1,
  min: 1,
  max: 12,
  size: "sm",
  inline: true,
  label: "Quantity, Colombian Arabica Coffee",
  decrementLabel: "Decrease quantity",
  incrementLabel: "Increase quantity"
});
```

When there is no visible `<label>`, name the input with `aria-label` (the `label` prop) and include the product, so every quantity field in the cart is distinguishable.

---

## Guests Picker

A booking widget lists one inline stepper per guest type. Adults start at 1, children and infants at 0, and each row has its own maximum. The summary in the preview adds up the values on every `input` event.

::html
<div class="docs-preview">
  <div class="card max-w-[400px]" oninput="this.querySelector('[data-guest-total]').textContent = Array.from(this.querySelectorAll('input')).reduce((sum, input) => sum + Number(input.value), 0) + ' guests'">
    <div class="card-header hstack justify-between">
      <span class="fw-semibold">Lakeside Cabin · 2 nights</span>
      <span class="badge badge-soft-primary" data-guest-total>3 guests</span>
    </div>
    <div class="list-group list-group-flush">
      <div class="list-group-item hstack justify-between gap-3">
        <div>
          <p class="m-0 fw-semibold" id="niAdultsLabel">Adults</p>
          <p class="m-0 text-xs text-subtle">Age 13 or above</p>
        </div>
        <div class="input-group input-stepper input-group-sm input-stepper-inline" data-stepper>
          <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Fewer adults"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
          <input class="form-control" type="number" inputmode="numeric" name="adults" value="2" min="1" max="8" aria-labelledby="niAdultsLabel" />
          <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="More adults"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
        </div>
      </div>
      <div class="list-group-item hstack justify-between gap-3">
        <div>
          <p class="m-0 fw-semibold" id="niChildrenLabel">Children</p>
          <p class="m-0 text-xs text-subtle">Age 2 to 12</p>
        </div>
        <div class="input-group input-stepper input-group-sm input-stepper-inline" data-stepper>
          <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Fewer children"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
          <input class="form-control" type="number" inputmode="numeric" name="children" value="1" min="0" max="6" aria-labelledby="niChildrenLabel" />
          <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="More children"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
        </div>
      </div>
      <div class="list-group-item hstack justify-between gap-3">
        <div>
          <p class="m-0 fw-semibold" id="niInfantsLabel">Infants</p>
          <p class="m-0 text-xs text-subtle">Under 2, max. 2</p>
        </div>
        <div class="input-group input-stepper input-group-sm input-stepper-inline" data-stepper>
          <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Fewer infants" disabled><span class="mdi mdi-minus" aria-hidden="true"></span></button>
          <input class="form-control" type="number" inputmode="numeric" name="infants" value="0" min="0" max="2" aria-labelledby="niInfantsLabel" />
          <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="More infants"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="list-group-item hstack justify-between gap-3">
  <div>
    <p class="m-0 fw-semibold" id="adultsLabel">Adults</p>
    <p class="m-0 text-xs text-subtle">Age 13 or above</p>
  </div>
  <div class="input-group input-stepper input-group-sm input-stepper-inline" data-stepper>
    <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Fewer adults">
      <span class="mdi mdi-minus" aria-hidden="true"></span>
    </button>
    <input
      class="form-control"
      type="number"
      inputmode="numeric"
      name="adults"
      value="2"
      min="1"
      max="8"
      aria-labelledby="adultsLabel"
    />
    <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="More adults">
      <span class="mdi mdi-plus" aria-hidden="true"></span>
    </button>
  </div>
</div>
```

```js components
import { NumberInput } from "@abydahana/aksara-ui/components";

const guests = (name, label, value, min, max) =>
  NumberInput({
    name,
    value,
    min,
    max,
    size: "sm",
    inline: true,
    decrementLabel: `Fewer ${label}`,
    incrementLabel: `More ${label}`,
    attributes: { "aria-labelledby": `${name}Label` }
  });

guests("adults", "adults", 2, 1, 8);
guests("children", "children", 1, 0, 6);
guests("infants", "infants", 0, 0, 2);
```

```js
widget.addEventListener("input", () => {
  const total = [...widget.querySelectorAll("input")].reduce((sum, input) => sum + Number(input.value), 0);
  summary.textContent = `${total} guests`;
});
```

---

## Decimal Steps

Set a fractional `step` such as `0.5` or `0.25`. The runtime rounds to the step's number of decimals, so repeated clicks never produce values like `2.4999999`. `NumberInput` switches `inputmode` to `decimal` for fractional steps, which shows a keyboard with a decimal key on phones.

::html
<div class="docs-preview">
  <div class="row gap-3 max-w-[560px]">
    <div class="col-12 md:col-6">
      <label class="form-label" for="niWeight">Package weight</label>
      <div class="input-group input-stepper" data-stepper>
        <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
        <input id="niWeight" class="form-control" type="number" inputmode="decimal" name="weight" value="1.5" min="0.5" max="30" step="0.5" />
        <span class="input-group-text">kg</span>
        <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
      </div>
      <p class="form-text">Standard shipping, Seattle → Portland: $1.10 / kg.</p>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="niRate">Interest rate</label>
      <div class="input-group input-stepper" data-stepper>
        <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
        <input id="niRate" class="form-control" type="number" inputmode="decimal" name="rate" value="6.25" min="0" max="20" step="0.25" />
        <span class="input-group-text">%</span>
        <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
      </div>
      <p class="form-text">Steps of 0.25 percentage points.</p>
    </div>
  </div>
</div>
::end

```html
<div class="input-group input-stepper" data-stepper>
  <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease">
    <span class="mdi mdi-minus" aria-hidden="true"></span>
  </button>
  <input
    id="weight"
    class="form-control"
    type="number"
    inputmode="decimal"
    name="weight"
    value="1.5"
    min="0.5"
    max="30"
    step="0.5"
  />
  <span class="input-group-text">kg</span>
  <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase">
    <span class="mdi mdi-plus" aria-hidden="true"></span>
  </button>
</div>
```

```js components
import { NumberInput } from "@abydahana/aksara-ui/components";

NumberInput({ id: "weight", name: "weight", value: 1.5, min: 0.5, max: 30, step: 0.5 });
```

The runtime uses the first `<input>` in the group, so extra elements such as an `.input-group-text` unit can sit anywhere in it. `NumberInput` does not render a unit; add it by hand as above.

---

## Sizes

The stepper follows the input group sizes: `.input-group-sm`, the default, and `.input-group-lg`.

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="input-group input-stepper input-group-sm input-stepper-inline" data-stepper>
      <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
      <input class="form-control" type="number" inputmode="numeric" value="2" min="0" max="10" aria-label="Small" />
      <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
    </div>
    <div class="input-group input-stepper input-stepper-inline" data-stepper>
      <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
      <input class="form-control" type="number" inputmode="numeric" value="2" min="0" max="10" aria-label="Medium" />
      <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
    </div>
    <div class="input-group input-stepper input-group-lg input-stepper-inline" data-stepper>
      <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
      <input class="form-control" type="number" inputmode="numeric" value="2" min="0" max="10" aria-label="Large" />
      <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
    </div>
  </div>
</div>
::end

```html
<div class="input-group input-stepper input-group-sm" data-stepper>...</div>
<div class="input-group input-stepper" data-stepper>...</div>
<div class="input-group input-stepper input-group-lg" data-stepper>...</div>
```

```js components
import { NumberInput } from "@abydahana/aksara-ui/components";

NumberInput({ value: 2, min: 0, max: 10, size: "sm", inline: true, label: "Small" });
NumberInput({ value: 2, min: 0, max: 10, inline: true, label: "Medium" });
NumberInput({ value: 2, min: 0, max: 10, size: "lg", inline: true, label: "Large" });
```

---

## Disabled And Read-Only

A `disabled` input disables both buttons. A `readonly` input keeps the buttons enabled but the runtime does not step it, which is useful while a value is being recalculated.

::html
<div class="docs-preview">
  <div class="row gap-3 max-w-[560px]">
    <div class="col-12 md:col-6">
      <label class="form-label" for="niLicenses">Licenses</label>
      <div class="input-group input-stepper" data-stepper>
        <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease" disabled><span class="mdi mdi-minus" aria-hidden="true"></span></button>
        <input id="niLicenses" class="form-control" type="number" inputmode="numeric" name="licenses" value="25" min="1" max="100" disabled />
        <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase" disabled><span class="mdi mdi-plus" aria-hidden="true"></span></button>
      </div>
      <p class="form-text">Managed by your organization admin.</p>
    </div>
    <div class="col-12 md:col-6">
      <label class="form-label" for="niStock">Stock on hand</label>
      <div class="input-group input-stepper" data-stepper>
        <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
        <input id="niStock" class="form-control" type="number" inputmode="numeric" name="stock" value="140" min="0" readonly />
        <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
      </div>
      <p class="form-text">Synced from the warehouse every 5 minutes.</p>
    </div>
  </div>
</div>
::end

```html
<div class="input-group input-stepper" data-stepper>
  <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease" disabled>
    <span class="mdi mdi-minus" aria-hidden="true"></span>
  </button>
  <input
    id="licenses"
    class="form-control"
    type="number"
    inputmode="numeric"
    name="licenses"
    value="25"
    min="1"
    max="100"
    disabled
  />
  <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase" disabled>
    <span class="mdi mdi-plus" aria-hidden="true"></span>
  </button>
</div>
```

```js components
import { NumberInput } from "@abydahana/aksara-ui/components";

NumberInput({ id: "licenses", name: "licenses", value: 25, min: 1, max: 100, disabled: true });
NumberInput({ id: "stock", name: "stock", value: 140, min: 0, attributes: { readonly: true } });
```

---

## In A Form Row

Number inputs fill their column like any `.form-control`, so they line up with other fields in a `.row gap-3` grid.

::html
<div class="docs-preview">
  <form class="row gap-3 max-w-[640px]" onsubmit="event.preventDefault(); Aksara.notify('Product saved', { icon: 'mdi-check' })">
    <div class="col-12">
      <label class="form-label" for="niProduct">Product name</label>
      <input id="niProduct" class="form-control" type="text" value="Handwoven Wool Throw" />
    </div>
    <div class="col-12 md:col-4">
      <label class="form-label" for="niPrice">Price</label>
      <div class="input-group">
        <span class="input-group-text">$</span>
        <input id="niPrice" class="form-control" type="number" value="129" min="0" />
      </div>
    </div>
    <div class="col-12 md:col-4">
      <label class="form-label" for="niQty">Stock</label>
      <div class="input-group input-stepper" data-stepper>
        <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease"><span class="mdi mdi-minus" aria-hidden="true"></span></button>
        <input id="niQty" class="form-control" type="number" inputmode="numeric" name="stock" value="12" min="0" max="999" />
        <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <label class="form-label" for="niMinOrder">Minimum order</label>
      <div class="input-group input-stepper" data-stepper>
        <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease" disabled><span class="mdi mdi-minus" aria-hidden="true"></span></button>
        <input id="niMinOrder" class="form-control" type="number" inputmode="numeric" name="min_order" value="1" min="1" max="10" />
        <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase"><span class="mdi mdi-plus" aria-hidden="true"></span></button>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Save product</button>
    </div>
  </form>
</div>
::end

```html
<form class="row gap-3">
  <div class="col-12 md:col-4">
    <label class="form-label" for="stock">Stock</label>
    <div class="input-group input-stepper" data-stepper>
      <button class="btn btn-plain btn-icon" type="button" data-stepper-down aria-label="Decrease">
        <span class="mdi mdi-minus" aria-hidden="true"></span>
      </button>
      <input
        id="stock"
        class="form-control"
        type="number"
        inputmode="numeric"
        name="stock"
        value="12"
        min="0"
        max="999"
      />
      <button class="btn btn-plain btn-icon" type="button" data-stepper-up aria-label="Increase">
        <span class="mdi mdi-plus" aria-hidden="true"></span>
      </button>
    </div>
  </div>
  ...
</form>
```

```js components
import { FormCol, FormLabel, FormRow, NumberInput } from "@abydahana/aksara-ui/components";

FormRow({
  as: "form",
  children: [
    FormCol({
      size: 12,
      md: 4,
      children:
        FormLabel({ label: "Stock", htmlFor: "stock" }) +
        NumberInput({ id: "stock", name: "stock", value: 12, min: 0, max: 999 })
    }),
    FormCol({
      size: 12,
      md: 4,
      children:
        FormLabel({ label: "Minimum order", htmlFor: "minOrder" }) +
        NumberInput({ id: "minOrder", name: "min_order", value: 1, min: 1, max: 10 })
    })
  ].join("")
});
```

The − and + buttons are `type="button"`, so clicking them never submits the form.

---

## JavaScript

The stepper uses delegated listeners on the document, so groups rendered after `Aksara.init()` work as well. `Aksara.init()` (and `Aksara.init(container)`) also syncs the disabled state of the buttons with the current value.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Attribute / event</th><th>Where</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-stepper</code></td><td>The group</td><td>Enables stepping for the first <code>&lt;input&gt;</code> inside.</td></tr>
      <tr><td><code>data-stepper-down</code></td><td>A button in the group</td><td>Subtracts <code>step</code>. Disabled while the value is at or below <code>min</code>.</td></tr>
      <tr><td><code>data-stepper-up</code></td><td>A button in the group</td><td>Adds <code>step</code>. Disabled while the value is at or above <code>max</code>.</td></tr>
      <tr><td><code>min</code>, <code>max</code>, <code>step</code></td><td>The input</td><td>Limits and increment (default step <code>1</code>). The result is clamped and rounded to the step's decimals. An empty field starts at <code>min</code>, or <code>0</code>.</td></tr>
      <tr><td><code>disabled</code> / <code>readonly</code></td><td>The input</td><td>The runtime does not step. <code>disabled</code> also disables both buttons.</td></tr>
      <tr><td><code>input</code>, <code>change</code></td><td>Fired on the input</td><td>Both bubble after every step, including each repeat while a button is held.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
document.querySelector("#seats").addEventListener("change", (event) => {
  const seats = Number(event.target.value);
  total.textContent = `$${seats * 8} / month`;
});

// After setting the value from code, refresh the buttons:
seatsInput.value = 50;
seatsInput.dispatchEvent(new Event("input", { bubbles: true }));
```

Typing a value outside the limits is not corrected while you type, but it snaps to `min` / `max` when the field is committed (on `change`, i.e. blur or Enter), and the buttons update.

---

## String Component

`NumberInput` renders the full group with `data-stepper`. The buttons start disabled when `value` is already at `min` or `max`, so the state is right before JavaScript runs.

```ts
import { NumberInput } from "@abydahana/aksara-ui/components";

NumberInput({ name: "qty", value: 1, min: 1, max: 10 });
NumberInput({ name: "weight", value: 1.5, min: 0.5, step: 0.5 }); // inputmode="decimal"
NumberInput({ name: "qty", value: 2, size: "sm", inline: true, label: "Quantity" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>Form field name.</td></tr>
      <tr><td><code>id</code></td><td><code>string</code></td><td>—</td><td>Input id, for a <code>&lt;label for&gt;</code>.</td></tr>
      <tr><td><code>value</code></td><td><code>number</code></td><td>—</td><td>Initial value.</td></tr>
      <tr><td><code>min</code></td><td><code>number</code></td><td>—</td><td>Lowest value.</td></tr>
      <tr><td><code>max</code></td><td><code>number</code></td><td>—</td><td>Highest value.</td></tr>
      <tr><td><code>step</code></td><td><code>number</code></td><td>—</td><td>Increment (the runtime uses <code>1</code> when unset). A fractional step sets <code>inputmode="decimal"</code>.</td></tr>
      <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables the input and both buttons.</td></tr>
      <tr><td><code>size</code></td><td><code>"sm" | "md" | "lg"</code></td><td><code>"md"</code></td><td>Adds <code>.input-group-sm</code> or <code>.input-group-lg</code>.</td></tr>
      <tr><td><code>inline</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.input-stepper-inline</code>: compact width instead of filling the row.</td></tr>
      <tr><td><code>decrementLabel</code></td><td><code>string</code></td><td><code>"Decrease"</code></td><td><code>aria-label</code> of the − button.</td></tr>
      <tr><td><code>incrementLabel</code></td><td><code>string</code></td><td><code>"Increase"</code></td><td><code>aria-label</code> of the + button.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td><code>aria-label</code> of the input, when there is no <code>&lt;label for&gt;</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the group.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes on the <strong>input</strong>, for example <code>{ readonly: true }</code> or <code>{ "aria-labelledby": "adultsLabel" }</code>.</td></tr>
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
      <tr><td><code>.input-stepper</code></td><td>Added to an <code>.input-group</code>: centers the value with tabular numbers, hides the native spin buttons and fades disabled buttons to 35%.</td></tr>
      <tr><td><code>.input-stepper-inline</code></td><td>Shrinks the group to its content with a 3.5rem input.</td></tr>
      <tr><td><code>.input-group-sm</code> / <code>.input-group-lg</code></td><td>Smaller or larger controls.</td></tr>
    </tbody>
  </table>
</div>
::end
