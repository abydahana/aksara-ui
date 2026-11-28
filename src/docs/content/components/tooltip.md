# Tooltips

Tooltips are small floating labels for short contextual text. Add `data-tooltip="Text"` to any element and Aksara shows a tooltip next to it on hover or keyboard focus. It hides when the pointer leaves, focus moves away, or Escape is pressed. The trigger gets `aria-describedby` while the tooltip is open.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <button class="btn btn-primary" type="button" data-tooltip="Saves a new draft">Save draft</button>
    <button class="btn btn-soft-primary btn-icon" type="button" aria-label="Share" data-tooltip="Share link"><span class="mdi mdi-share-variant-outline"></span></button>
    <a href="#" class="link-primary" data-tooltip="Opens the pricing page">Hover this link</a>
  </div>
</div>
::end

```html
<button class="btn btn-primary" type="button" data-tooltip="Saves a new draft">Save draft</button>
<button class="btn btn-soft-primary btn-icon" type="button" aria-label="Share" data-tooltip="Share link">
  <span class="mdi mdi-share-variant-outline"></span>
</button>
```

```js components
import { TooltipTrigger } from "@abydahana/aksara-ui/components";

TooltipTrigger({ title: "Saves a new draft", className: "btn btn-primary", children: "Save draft" });

TooltipTrigger({
  title: "Share link",
  className: "btn btn-soft-primary btn-icon",
  attributes: { "aria-label": "Share" },
  children: '<span class="mdi mdi-share-variant-outline"></span>'
});
```

---

## Placements

Set `data-tooltip-placement` to `top` (default), `bottom`, `start`, `end`, `left`, `right` or `auto`. `start` and `end` are logical: they flip in right-to-left documents. `auto` picks top or bottom, whichever has room.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <button class="btn btn-outline-primary" type="button" data-tooltip="Tooltip on top" data-tooltip-placement="top">Top</button>
    <button class="btn btn-outline-primary" type="button" data-tooltip="Tooltip on bottom" data-tooltip-placement="bottom">Bottom</button>
    <button class="btn btn-outline-primary" type="button" data-tooltip="Tooltip at start" data-tooltip-placement="start">Start</button>
    <button class="btn btn-outline-primary" type="button" data-tooltip="Tooltip at end" data-tooltip-placement="end">End</button>
    <button class="btn btn-outline-primary" type="button" data-tooltip="Always left" data-tooltip-placement="left">Left</button>
    <button class="btn btn-outline-primary" type="button" data-tooltip="Always right" data-tooltip-placement="right">Right</button>
    <button class="btn btn-outline-primary" type="button" data-tooltip="Top or bottom, whichever fits" data-tooltip-placement="auto">Auto</button>
  </div>
</div>
::end

```html
<button class="btn btn-outline-primary" data-tooltip="Tooltip on top" data-tooltip-placement="top">Top</button>
<button class="btn btn-outline-primary" data-tooltip="Tooltip on bottom" data-tooltip-placement="bottom">Bottom</button>
<button class="btn btn-outline-primary" data-tooltip="Tooltip at start" data-tooltip-placement="start">Start</button>
<button class="btn btn-outline-primary" data-tooltip="Tooltip at end" data-tooltip-placement="end">End</button>
<button class="btn btn-outline-primary" data-tooltip="Always left" data-tooltip-placement="left">Left</button>
<button class="btn btn-outline-primary" data-tooltip="Always right" data-tooltip-placement="right">Right</button>
<button class="btn btn-outline-primary" data-tooltip="Top or bottom" data-tooltip-placement="auto">Auto</button>
```

```js components
import { TooltipTrigger } from "@abydahana/aksara-ui/components";

TooltipTrigger({ title: "Tooltip on top", placement: "top", className: "btn btn-outline-primary", children: "Top" });
TooltipTrigger({
  title: "Tooltip on bottom",
  placement: "bottom",
  className: "btn btn-outline-primary",
  children: "Bottom"
});
TooltipTrigger({
  title: "Tooltip at start",
  placement: "start",
  className: "btn btn-outline-primary",
  children: "Start"
});
TooltipTrigger({ title: "Tooltip at end", placement: "end", className: "btn btn-outline-primary", children: "End" });
TooltipTrigger({ title: "Always left", placement: "left", className: "btn btn-outline-primary", children: "Left" });
TooltipTrigger({ title: "Always right", placement: "right", className: "btn btn-outline-primary", children: "Right" });
TooltipTrigger({ title: "Top or bottom", placement: "auto", className: "btn btn-outline-primary", children: "Auto" });
```

---

## Triggers

`data-tooltip-trigger` takes a space-separated list of `hover`, `focus` and `click`. The default is `hover focus`. With `click`, the trigger toggles the tooltip and its default action is prevented.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <button class="btn btn-soft-primary" type="button" data-tooltip="Hover or focus (default)">Hover + focus</button>
    <button class="btn btn-soft-primary" type="button" data-tooltip="Only on hover" data-tooltip-trigger="hover">Hover only</button>
    <button class="btn btn-soft-primary" type="button" data-tooltip="Only on keyboard or click focus" data-tooltip-trigger="focus">Focus only</button>
    <button class="btn btn-soft-primary" type="button" data-tooltip="Click again to close" data-tooltip-trigger="click">Click to toggle</button>
  </div>
</div>
::end

```html
<button class="btn btn-soft-primary" data-tooltip="Only on hover" data-tooltip-trigger="hover">Hover only</button>
<button class="btn btn-soft-primary" data-tooltip="Only on focus" data-tooltip-trigger="focus">Focus only</button>
<button class="btn btn-soft-primary" data-tooltip="Click again to close" data-tooltip-trigger="click">
  Click to toggle
</button>
```

```js components
import { TooltipTrigger } from "@abydahana/aksara-ui/components";

TooltipTrigger({
  title: "Only on hover",
  className: "btn btn-soft-primary",
  attributes: { "data-tooltip-trigger": "hover" },
  children: "Hover only"
});

TooltipTrigger({
  title: "Only on focus",
  className: "btn btn-soft-primary",
  attributes: { "data-tooltip-trigger": "focus" },
  children: "Focus only"
});

TooltipTrigger({
  title: "Click again to close",
  className: "btn btn-soft-primary",
  attributes: { "data-tooltip-trigger": "click" },
  children: "Click to toggle"
});
```

---

## Delay and Offset

`data-tooltip-show-delay` and `data-tooltip-hide-delay` (milliseconds) avoid flicker when the pointer crosses many triggers. `data-tooltip-offset` sets the gap between trigger and tooltip in pixels (default `8`).

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <button class="btn btn-outline-secondary" type="button" data-tooltip="Appeared after 500ms" data-tooltip-show-delay="500">Show delay 500ms</button>
    <button class="btn btn-outline-secondary" type="button" data-tooltip="Stays for 800ms after leaving" data-tooltip-hide-delay="800">Hide delay 800ms</button>
    <button class="btn btn-outline-secondary" type="button" data-tooltip="24px away" data-tooltip-offset="24">Offset 24px</button>
    <button class="btn btn-outline-secondary" type="button" data-tooltip="Flush against the trigger" data-tooltip-offset="2">Offset 2px</button>
  </div>
</div>
::end

```html
<button class="btn btn-outline-secondary" data-tooltip="Appeared after 500ms" data-tooltip-show-delay="500">
  Show delay
</button>
<button class="btn btn-outline-secondary" data-tooltip="Stays for 800ms" data-tooltip-hide-delay="800">
  Hide delay
</button>
<button class="btn btn-outline-secondary" data-tooltip="24px away" data-tooltip-offset="24">Offset 24px</button>
```

```js components
import { TooltipTrigger } from "@abydahana/aksara-ui/components";

TooltipTrigger({
  title: "Appeared after 500ms",
  className: "btn btn-outline-secondary",
  attributes: { "data-tooltip-show-delay": "500" },
  children: "Show delay"
});

TooltipTrigger({
  title: "Stays for 800ms",
  className: "btn btn-outline-secondary",
  attributes: { "data-tooltip-hide-delay": "800" },
  children: "Hide delay"
});

TooltipTrigger({
  title: "24px away",
  className: "btn btn-outline-secondary",
  attributes: { "data-tooltip-offset": "24" },
  children: "Offset 24px"
});
```

---

## HTML Content

Tooltip text is inserted as plain text by default. Set `data-tooltip-html="true"` to render trusted markup, such as a keyboard shortcut or a line break. Escape the markup inside the attribute.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <button class="btn btn-ghost btn-icon" type="button" aria-label="Bold" data-tooltip-html="true" data-tooltip="&lt;strong&gt;Bold&lt;/strong&gt; &amp;nbsp;Ctrl + B"><span class="mdi mdi-format-bold text-lg"></span></button>
    <button class="btn btn-ghost btn-icon" type="button" aria-label="Italic" data-tooltip-html="true" data-tooltip="&lt;em&gt;Italic&lt;/em&gt; &amp;nbsp;Ctrl + I"><span class="mdi mdi-format-italic text-lg"></span></button>
    <button class="btn btn-ghost btn-icon" type="button" aria-label="Link" data-tooltip-html="true" data-tooltip="Insert link&lt;br&gt;Ctrl + K"><span class="mdi mdi-link-variant text-lg"></span></button>
    <button class="btn btn-ghost" type="button" data-tooltip="&lt;strong&gt;not rendered&lt;/strong&gt;">Plain text (escaped)</button>
  </div>
</div>
::end

```html
<button
  class="btn btn-ghost btn-icon"
  aria-label="Bold"
  data-tooltip-html="true"
  data-tooltip="&lt;strong&gt;Bold&lt;/strong&gt; Ctrl + B"
>
  <span class="mdi mdi-format-bold"></span>
</button>
```

```js components
import { TooltipTrigger } from "@abydahana/aksara-ui/components";

// title is escaped into the attribute; data-tooltip-html renders it as markup
TooltipTrigger({
  title: "<strong>Bold</strong> Ctrl + B",
  className: "btn btn-ghost btn-icon",
  attributes: { "aria-label": "Bold", "data-tooltip-html": "true" },
  children: '<span class="mdi mdi-format-bold"></span>'
});
```

Only enable `html` for content you control. User-supplied text should stay in the default plain-text mode.

---

## Common Patterns

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="vstack gap-4">
    <div class="docs-row">
      <span class="text-sm fw-semibold">Icon toolbar</span>
      <div class="hstack gap-1 p-1 border rounded-md">
        <button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Undo" data-tooltip="Undo" data-tooltip-placement="bottom"><span class="mdi mdi-undo"></span></button>
        <button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Redo" data-tooltip="Redo" data-tooltip-placement="bottom"><span class="mdi mdi-redo"></span></button>
        <button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Comment" data-tooltip="Add comment" data-tooltip-placement="bottom"><span class="mdi mdi-comment-outline"></span></button>
        <button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Delete" data-tooltip="Delete" data-tooltip-placement="bottom"><span class="mdi mdi-trash-can-outline text-danger"></span></button>
      </div>
    </div>

    <div class="docs-row">
      <span class="text-sm fw-semibold">Field hint</span>
      <label class="form-label m-0 hstack gap-1" for="tooltipApiKey">
        API key
        <span class="mdi mdi-information-outline text-subtle" tabindex="0" role="button" aria-label="About API keys" data-tooltip="Keys are shown once. Store them in a password manager." data-tooltip-placement="end"></span>
      </label>
      <input id="tooltipApiKey" class="form-control max-w-[260px]" type="text" value="sk_live_••••••••3f9a" readonly>
    </div>

    <div class="docs-row">
      <span class="text-sm fw-semibold">Avatar group</span>
      <div class="avatar-stack">
        <span class="avatar avatar-sm rounded-full avatar-primary" tabindex="0" role="img" aria-label="Maya Chen" data-tooltip="Maya Chen">MC</span>
        <span class="avatar avatar-sm rounded-full avatar-info" tabindex="0" role="img" aria-label="Alex Morgan" data-tooltip="Alex Morgan">AM</span>
        <span class="avatar avatar-sm rounded-full avatar-success" tabindex="0" role="img" aria-label="Sofia Patel" data-tooltip="Sofia Patel">SP</span>
        <span class="avatar avatar-sm rounded-full bg-text-secondary text-xs" tabindex="0" data-tooltip="Grace, Henry and 4 more">+6</span>
      </div>
    </div>

    <div class="docs-row">
      <span class="text-sm fw-semibold">Disabled button</span>
      <span tabindex="0" data-tooltip="You need the Admin role to publish">
        <button class="btn btn-primary pointer-events-none" type="button" disabled>Publish</button>
      </span>
    </div>

    <div class="docs-row">
      <span class="text-sm fw-semibold">Truncated text</span>
      <span class="truncate max-w-[220px] text-sm" tabindex="0" data-tooltip="quarterly-financial-report-final-v3-approved.pdf">quarterly-financial-report-final-v3-approved.pdf</span>
    </div>

  </div>
</div>
::end

```html
<!-- Icon-only buttons: keep an aria-label, the tooltip only describes -->
<button class="btn btn-ghost btn-sm btn-icon" aria-label="Undo" data-tooltip="Undo" data-tooltip-placement="bottom">
  <span class="mdi mdi-undo"></span>
</button>

<!-- Non-interactive triggers need tabindex="0" for keyboard users -->
<span
  class="mdi mdi-information-outline"
  tabindex="0"
  role="button"
  aria-label="About API keys"
  data-tooltip="Keys are shown once."
  data-tooltip-placement="end"
></span>

<!-- Disabled elements fire no events: put the tooltip on a wrapper -->
<span tabindex="0" data-tooltip="You need the Admin role to publish">
  <button class="btn btn-primary pointer-events-none" disabled>Publish</button>
</span>
```

```js components
import { Button, TooltipTrigger } from "@abydahana/aksara-ui/components";

// Icon-only buttons: keep an aria-label, the tooltip only describes
TooltipTrigger({
  title: "Undo",
  placement: "bottom",
  className: "btn btn-ghost btn-sm btn-icon",
  attributes: { "aria-label": "Undo" },
  children: '<span class="mdi mdi-undo"></span>'
});

// Non-interactive triggers need tabindex="0" for keyboard users
TooltipTrigger({
  as: "span",
  title: "Keys are shown once.",
  placement: "end",
  className: "mdi mdi-information-outline",
  attributes: { tabindex: "0", role: "button", "aria-label": "About API keys" },
  children: ""
});

// Disabled elements fire no events: put the tooltip on a wrapper
TooltipTrigger({
  as: "span",
  title: "You need the Admin role to publish",
  attributes: { tabindex: "0" },
  children: Button({ label: "Publish", disabled: true, className: "pointer-events-none" })
});
```

---

## Live Updates

Calling `Aksara.tooltip()` on an element that already has a tooltip updates its options. Changing `content` while the tooltip is open swaps the text and repositions it.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <div class="input-group max-w-[320px]">
      <input class="form-control" type="text" value="https://aksara.dev/invite/7Hq2" readonly aria-label="Invite link">
      <button id="tooltipCopyBtn" class="btn btn-outline-primary" type="button" data-tooltip="Copy to clipboard"
        onclick="Aksara.tooltip(this, { content: 'Copied!' }).show(); setTimeout(() => Aksara.tooltip(this, { content: 'Copy to clipboard' }), 1500)">
        <span class="mdi mdi-content-copy"></span>
      </button>
    </div>
  </div>
</div>
::end

```js
const copyBtn = document.querySelector("#copyBtn");

copyBtn.addEventListener("click", () => {
  Aksara.tooltip(copyBtn, { content: "Copied!" }).show();
  setTimeout(() => Aksara.tooltip(copyBtn, { content: "Copy to clipboard" }), 1500);
});
```

---

## Static Markup and Theming

The runtime creates a `div.tooltip` with a `tooltip-{placement}` class that draws the arrow. Placement classes are `tooltip-top`, `tooltip-bottom`, `tooltip-left`, `tooltip-right`, `tooltip-start` and `tooltip-end`. The colors come from the `--aksara-tooltip-bg` and `--aksara-tooltip-text` tokens.

::html
<div class="docs-preview">
  <div class="docs-row gap-4 py-2">
    <div class="tooltip tooltip-top [position:relative]">tooltip-top</div>
    <div class="tooltip tooltip-bottom [position:relative]">tooltip-bottom</div>
    <div class="tooltip tooltip-start [position:relative]">tooltip-start</div>
    <div class="tooltip tooltip-end [position:relative]">tooltip-end</div>
    <div class="tooltip tooltip-left [position:relative]">tooltip-left</div>
    <div class="tooltip tooltip-right [position:relative]">tooltip-right</div>
  </div>
</div>
::end

```css
/* Brand-colored tooltips */
:root {
  --aksara-tooltip-bg: rgb(31 113 170);
  --aksara-tooltip-text: #fff;
}
```

---

## JavaScript

`Aksara.init()` creates a `Tooltip` for every `[data-tooltip]` element. Call `Aksara.tooltip()` for elements added later or to pass options in code. It accepts a selector, an element, a NodeList or an array and returns one instance (or a list that forwards method calls to every instance).

```js
const tooltip = Aksara.tooltip("#editBtn", {
  placement: "bottom",
  container: "body",
  text: "Click to modify this item"
});

tooltip.show();
tooltip.hide();
tooltip.destroy();

// Initialize many triggers at once
const tooltips = Aksara.tooltip("[data-tooltip-dynamic]", {
  placement: "top",
  container: "body"
});
```

### Options

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Option</th><th>Attribute</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>content</code></td><td><code>data-tooltip-content</code>, <code>data-tooltip</code></td><td class="text-nowrap"><code>""</code></td><td>Tooltip text. <code>text</code> is an alias. An empty value shows nothing.</td></tr>
      <tr><td class="text-nowrap"><code>placement</code></td><td><code>data-tooltip-placement</code> (or <code>data-placement</code>)</td><td class="text-nowrap"><code>"top"</code></td><td><code>top</code>, <code>bottom</code>, <code>start</code>, <code>end</code>, <code>left</code>, <code>right</code>, <code>auto</code>.</td></tr>
      <tr><td class="text-nowrap"><code>trigger</code></td><td class="text-nowrap"><code>data-tooltip-trigger</code></td><td class="text-nowrap"><code>"hover focus"</code></td><td>Space-separated <code>hover</code>, <code>focus</code>, <code>click</code>.</td></tr>
      <tr><td class="text-nowrap"><code>container</code></td><td><code>data-tooltip-container</code> (or <code>data-container</code>)</td><td class="text-nowrap"><code>"body"</code></td><td>Selector or element the tooltip is appended to.</td></tr>
      <tr><td class="text-nowrap"><code>html</code></td><td><code>data-tooltip-html</code> (or <code>data-html</code>)</td><td class="text-nowrap"><code>false</code></td><td>Render <code>content</code> as HTML instead of text.</td></tr>
      <tr><td class="text-nowrap"><code>offset</code></td><td class="text-nowrap"><code>data-tooltip-offset</code></td><td class="text-nowrap"><code>8</code></td><td>Gap between trigger and tooltip, in pixels.</td></tr>
      <tr><td class="text-nowrap"><code>showDelay</code></td><td class="text-nowrap"><code>data-tooltip-show-delay</code></td><td class="text-nowrap"><code>0</code></td><td>Milliseconds before showing on hover/focus.</td></tr>
      <tr><td class="text-nowrap"><code>hideDelay</code></td><td class="text-nowrap"><code>data-tooltip-hide-delay</code></td><td class="text-nowrap"><code>0</code></td><td>Milliseconds before hiding on leave/blur.</td></tr>
      <tr><td class="text-nowrap"><code>keyboard</code></td><td class="text-nowrap"><code>data-tooltip-keyboard</code></td><td class="text-nowrap"><code>true</code></td><td>Hide on Escape.</td></tr>
    </tbody>
  </table>
</div>
::end

### Methods

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Method</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>tooltip.show()</code></td><td>Creates and positions the tooltip. Does nothing if it is open or empty.</td></tr>
      <tr><td class="text-nowrap"><code>tooltip.hide()</code></td><td>Removes the tooltip and its <code>aria-describedby</code> reference.</td></tr>
      <tr><td class="text-nowrap"><code>tooltip.toggle()</code></td><td>Shows or hides the tooltip.</td></tr>
      <tr><td class="text-nowrap"><code>tooltip.position()</code></td><td>Recalculates the position, for example after the trigger moves.</td></tr>
      <tr><td class="text-nowrap"><code>tooltip.updateOptions(options)</code></td><td>Merges options and refreshes an open tooltip.</td></tr>
      <tr><td class="text-nowrap"><code>tooltip.destroy()</code></td><td>Hides the tooltip, clears timers and removes listeners.</td></tr>
    </tbody>
  </table>
</div>
::end

### Events

Events bubble from the trigger element. `event.detail.instance` holds the instance.

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Event</th><th>Fired when</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>aksara:tooltip:show</code></td><td>The tooltip was added and placed.</td></tr>
      <tr><td class="text-nowrap"><code>aksara:tooltip:hide</code></td><td>The tooltip was removed.</td></tr>
      <tr><td class="text-nowrap"><code>aksara:tooltip:destroy</code></td><td>The instance was destroyed.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
const btn = document.querySelector("#editBtn");

btn.addEventListener("aksara:tooltip:show", (event) => {
  console.log("Tooltip shown", event.detail.instance);
});
```

### String Component

`TooltipTrigger({ title, placement, children, as })` renders a trigger element with `data-tooltip` and `data-tooltip-placement` set (`placement` is `top`, `bottom`, `start`, `end`, `left`, `right` or `auto`). `as` is `"button"` (default), `"a"`, `"span"` or `"div"`.

```js
import { TooltipTrigger } from "@abydahana/aksara-ui/components";

TooltipTrigger({ title: "Delete", placement: "bottom", children: '<span class="mdi mdi-trash-can-outline"></span>' });
```
