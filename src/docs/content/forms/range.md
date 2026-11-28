# Range

`.form-range` replaces the browser slider with a thin rounded track, a filled part in the primary color and a soft thumb that grows while dragged. The fill follows the value live (`--aksara-range-progress`), also in RTL.

---

## Basic Range

::html
<div class="docs-preview vstack gap-4">
  <div>
    <label class="form-label" for="rgBasic">Volume</label>
    <input id="rgBasic" class="form-range" type="range" min="0" max="100" value="40" />
  </div>
  <div>
    <label class="form-label" for="rgStep">Steps of 10</label>
    <input id="rgStep" class="form-range" type="range" min="0" max="100" step="10" value="70" />
  </div>
  <div>
    <label class="form-label" for="rgDisabled">Disabled</label>
    <input id="rgDisabled" class="form-range" type="range" value="30" disabled />
  </div>
</div>
::end

```html
<input class="form-range" type="range" min="0" max="100" value="40" />
```

```js components
import { Range } from "@abydahana/aksara-ui/components";

Range({ min: 0, max: 100, value: 40 });
```

---

## Live Value Output

`data-range-output` mirrors the value into any element (selector); `data-range-suffix` appends a unit.

::html
<div class="docs-preview vstack gap-4">
  <div>
    <div class="hstack justify-between mb-2">
      <label class="form-label m-0" for="rgBrightness">Brightness</label>
      <span id="rgBrightnessOut" class="badge badge-soft-primary"></span>
    </div>
    <input id="rgBrightness" class="form-range" type="range" min="0" max="100" value="65" data-range-output="#rgBrightnessOut" data-range-suffix="%" />
  </div>
  <div>
    <div class="hstack justify-between mb-2">
      <label class="form-label m-0" for="rgBudget">Monthly budget</label>
      <span class="fw-semibold text-sm">$<span id="rgBudgetOut"></span></span>
    </div>
    <input id="rgBudget" class="form-range" type="range" min="500" max="10000" step="500" value="2500" data-range-output="#rgBudgetOut" />
    <div class="hstack justify-between text-xs text-subtle mt-1"><span>$500</span><span>$10,000</span></div>
  </div>
</div>
::end

```html
<label class="form-label" for="brightness">Brightness</label>
<span id="brightnessOut" class="badge badge-soft-primary"></span>
<input
  id="brightness"
  class="form-range"
  type="range"
  value="65"
  data-range-output="#brightnessOut"
  data-range-suffix="%"
/>
```

```js components
import { Badge, FormLabel, Range } from "@abydahana/aksara-ui/components";

FormLabel({ label: "Brightness", htmlFor: "brightness" });
Badge({ soft: true, attributes: { id: "brightnessOut" } });
Range({ id: "brightness", value: 65, output: "#brightnessOut", suffix: "%" });
```

---

## With An Input

Pair the slider with a number field for precise entry; a few lines of script keep the two in sync (the preview only mirrors the slider into the help text):

::html
<div class="docs-preview">
  <label class="form-label" for="rgPairRange">Discount</label>
  <div class="hstack gap-3">
    <input id="rgPairRange" class="form-range" type="range" min="0" max="50" value="15" data-range-output="#rgPairValue" />
    <div class="form-icon max-w-[110px]">
      <input class="form-control" type="number" min="0" max="50" value="15" aria-label="Discount percent" />
      <span class="form-icon-end text-sm">%</span>
    </div>
  </div>
  <span class="form-text">Current: <strong id="rgPairValue"></strong>%</span>
</div>
::end

```js
const range = document.querySelector("#discountRange");
const number = document.querySelector("#discountNumber");
range.addEventListener("input", () => (number.value = range.value));
number.addEventListener("input", () => {
  range.value = number.value;
  range.dispatchEvent(new Event("input", { bubbles: true })); // refresh the fill
});
```

---

## Setting The Value From Script

The fill updates on user input. After changing `value` in code, dispatch an `input` event (or call `Aksara.init(container)`):

```js
const range = document.querySelector("#volume");
range.value = 80;
range.dispatchEvent(new Event("input", { bubbles: true }));
```

---

## String Component

```js
import { Range } from "@abydahana/aksara-ui/components";

Range({ id: "brightness", min: 0, max: 100, value: 65, output: "#brightnessOut", suffix: "%" });
```

Props: `name`, `id`, `min`, `max`, `step`, `value`, `disabled`, `output` (selector), `suffix`, `className`, `attributes`. The initial fill is rendered inline, so it is correct before JavaScript runs.
