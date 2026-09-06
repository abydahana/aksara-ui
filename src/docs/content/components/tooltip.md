# Tooltips

Tooltips are lightweight floating hints for short contextual text. They appear next to a trigger on hover or focus, then disappear when the trigger loses focus, the pointer leaves, or Escape is pressed.

---

## Interactive Showcase

Hover over or focus the buttons below to see live, absolute-positioned tooltips in logical and automatic placements.

::html
<div class="docs-preview" style="overflow: visible !important;">
  <div class="docs-row flex-wrap gap-3">
    <button class="btn btn-primary" data-tooltip="Tooltip on Top" data-tooltip-placement="top">Tooltip Top</button>
    <button class="btn btn-primary" data-tooltip="Tooltip on Bottom" data-tooltip-placement="bottom">Tooltip Bottom</button>
    <button class="btn btn-primary" data-tooltip="Tooltip on Start" data-tooltip-placement="start">Tooltip Start</button>
    <button class="btn btn-primary" data-tooltip="Tooltip on End" data-tooltip-placement="end">Tooltip End</button>
    <button class="btn btn-primary" data-tooltip="Tooltip with automatic clearance" data-tooltip-placement="auto">Tooltip Auto</button>
  </div>
</div>
::end

---

## HTML Data API

Aksara UI initializes tooltips automatically on page load by scanning for `data-tooltip`.

```html
<button class="btn btn-primary" data-tooltip="Edit user profile" data-tooltip-placement="top">Edit Button</button>
```

Use `data-tooltip-placement` to control placement. Supported values are `top`, `bottom`, `start`, `end`, and `auto`.

---

## Configuration Options

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">Option</th>
        <th style="width: 30%;">HTML Attribute</th>
        <th style="width: 20%;">Default</th>
        <th style="width: 25%;">Allowed Values</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>text</code></td>
        <td><code>data-tooltip</code></td>
        <td><code>""</code></td>
        <td>Any text string.</td>
      </tr>
      <tr>
        <td><code>placement</code></td>
        <td><code>data-tooltip-placement</code></td>
        <td><code>"top"</code></td>
        <td><code>"top"</code>, <code>"bottom"</code>, <code>"start"</code>, <code>"end"</code>, <code>"auto"</code></td>
      </tr>
      <tr>
        <td><code>container</code></td>
        <td><code>data-tooltip-container</code></td>
        <td><code>"body"</code></td>
        <td>CSS selector or element.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Programmatic JavaScript API

```js
const tooltip = Aksara.tooltip("#editBtn", {
  placement: "bottom",
  container: "body",
  text: "Click to modify this item"
});

tooltip.show();
tooltip.hide();
tooltip.destroy();
```

`Aksara.tooltip()` accepts a selector string, a DOM element, a NodeList, or an array of elements.

---

## Custom Lifecycle Events

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 35%;">Custom Event</th>
        <th style="width: 65%;">Trigger Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>aksara:tooltip:show</code></td>
        <td>Dispatched when a tooltip is shown. Access the instance in <code>event.detail.instance</code>.</td>
      </tr>
      <tr>
        <td><code>aksara:tooltip:hide</code></td>
        <td>Dispatched when a tooltip is hidden. Access the instance in <code>event.detail.instance</code>.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

```js
const btn = document.querySelector("#editBtn");

btn.addEventListener("aksara:tooltip:show", (event) => {
  console.log("Tooltip floated successfully.", event.detail.instance);
});
```
