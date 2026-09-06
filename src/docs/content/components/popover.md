# Popovers

Popovers are floating panels for richer contextual descriptions. They share the same lightweight positioning engine as tooltips, but render as surface panels and can hold more explanatory text.

---

## Interactive Showcase

Hover over or focus the buttons below to see live, absolute-positioned popovers in logical and automatic placements.

::html
<div class="docs-preview" style="overflow: visible !important;">
  <div class="docs-row flex-wrap gap-3">
    <button class="btn btn-soft-primary" data-popover="Advanced popover description triggered on top." data-popover-placement="top">Popover Top</button>
    <button class="btn btn-soft-primary" data-popover="Advanced popover description triggered on bottom." data-popover-placement="bottom">Popover Bottom</button>
    <button class="btn btn-soft-primary" data-popover="Advanced popover description triggered on start." data-popover-placement="start">Popover Start</button>
    <button class="btn btn-soft-primary" data-popover="Advanced popover description triggered on end." data-popover-placement="end">Popover End</button>
    <button class="btn btn-soft-primary" data-popover="Advanced popover description with automatic clearance." data-popover-placement="auto">Popover Auto</button>
  </div>
</div>
::end

---

## HTML Data API

Aksara UI initializes popovers automatically on page load by scanning for `data-popover`.

```html
<button
  class="btn btn-soft-primary"
  data-popover="Saves drafts automatically every 30 seconds."
  data-popover-placement="end"
>
  Settings Info
</button>
```

Use `data-popover-placement` to control placement. Supported values are `top`, `bottom`, `start`, `end`, and `auto`.

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
        <td><code>data-popover</code></td>
        <td><code>""</code></td>
        <td>Any text string.</td>
      </tr>
      <tr>
        <td><code>placement</code></td>
        <td><code>data-popover-placement</code></td>
        <td><code>"top"</code></td>
        <td><code>"top"</code>, <code>"bottom"</code>, <code>"start"</code>, <code>"end"</code>, <code>"auto"</code></td>
      </tr>
      <tr>
        <td><code>container</code></td>
        <td><code>data-popover-container</code></td>
        <td><code>"body"</code></td>
        <td>CSS selector or element.</td>
      </tr>
      <tr>
        <td><code>html</code></td>
        <td><code>data-popover-html</code></td>
        <td><code>false</code></td>
        <td><code>true</code> or <code>false</code>.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Structural Classes

Popovers support optional inner structural classes when you render custom HTML content:

```html
<div class="popover">
  <div class="popover-header">Status</div>
  <div class="popover-body">More detail for this control.</div>
</div>
```

---

## Programmatic JavaScript API

```js
const popover = Aksara.popover("#infoBtn", {
  placement: "top",
  container: "body",
  html: true,
  content: "<div>HTML Content</div>"
});

popover.show();
popover.hide();
popover.destroy();
```

`Aksara.popover()` accepts a selector string, a DOM element, a NodeList, or an array of elements.

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
        <td><code>aksara:popover:show</code></td>
        <td>Dispatched when a popover is shown. Access the instance in <code>event.detail.instance</code>.</td>
      </tr>
      <tr>
        <td><code>aksara:popover:hide</code></td>
        <td>Dispatched when a popover is hidden. Access the instance in <code>event.detail.instance</code>.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

```js
const btn = document.querySelector("#infoBtn");

btn.addEventListener("aksara:popover:show", (event) => {
  console.log("Popover floated successfully.", event.detail.instance);
});
```
