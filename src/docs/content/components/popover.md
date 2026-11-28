# Popovers

Popovers are floating panels for richer context than a tooltip: a title, a few sentences, or trusted HTML such as a profile card. They share the tooltip positioning engine, but render on the raised surface with a border, an arrow and an optional header. Add `data-popover="Content"` to a trigger and Aksara does the rest.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <button class="btn btn-soft-primary" type="button" data-popover="Drafts are saved automatically every 30 seconds." data-popover-title="Autosave">Hover for details</button>
    <button class="btn btn-primary" type="button" data-popover="Click the button again or press Escape to close." data-popover-title="Click popover" data-popover-trigger="click" data-popover-placement="bottom">Click to toggle</button>
  </div>
</div>
::end

```html
<button
  class="btn btn-soft-primary"
  data-popover="Drafts are saved automatically every 30 seconds."
  data-popover-title="Autosave"
>
  Hover for details
</button>

<button
  class="btn btn-primary"
  data-popover="Click the button again or press Escape to close."
  data-popover-title="Click popover"
  data-popover-trigger="click"
  data-popover-placement="bottom"
>
  Click to toggle
</button>
```

```js components
import { PopoverTrigger } from "@abydahana/aksara-ui/components";

PopoverTrigger({
  content: "Drafts are saved automatically every 30 seconds.",
  title: "Autosave",
  className: "btn btn-soft-primary",
  children: "Hover for details"
});

PopoverTrigger({
  content: "Click the button again or press Escape to close.",
  title: "Click popover",
  placement: "bottom",
  className: "btn btn-primary",
  attributes: { "data-popover-trigger": "click" },
  children: "Click to toggle"
});
```

---

## Placements

`data-popover-placement` accepts `top` (default), `bottom`, `start`, `end`, `left`, `right` and `auto`. `start` / `end` follow the writing direction; `auto` picks top or bottom, whichever has room.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <button class="btn btn-outline-primary" type="button" data-popover="Popover above the trigger." data-popover-placement="top">Top</button>
    <button class="btn btn-outline-primary" type="button" data-popover="Popover below the trigger." data-popover-placement="bottom">Bottom</button>
    <button class="btn btn-outline-primary" type="button" data-popover="Popover at the inline start." data-popover-placement="start">Start</button>
    <button class="btn btn-outline-primary" type="button" data-popover="Popover at the inline end." data-popover-placement="end">End</button>
    <button class="btn btn-outline-primary" type="button" data-popover="Always on the left side." data-popover-placement="left">Left</button>
    <button class="btn btn-outline-primary" type="button" data-popover="Always on the right side." data-popover-placement="right">Right</button>
    <button class="btn btn-outline-primary" type="button" data-popover="Top or bottom, whichever fits better." data-popover-placement="auto">Auto</button>
  </div>
</div>
::end

```html
<button class="btn btn-outline-primary" data-popover="Popover above the trigger." data-popover-placement="top">
  Top
</button>
<button class="btn btn-outline-primary" data-popover="Popover below the trigger." data-popover-placement="bottom">
  Bottom
</button>
<button class="btn btn-outline-primary" data-popover="Popover at the inline start." data-popover-placement="start">
  Start
</button>
<button class="btn btn-outline-primary" data-popover="Popover at the inline end." data-popover-placement="end">
  End
</button>
<button class="btn btn-outline-primary" data-popover="Top or bottom." data-popover-placement="auto">Auto</button>
```

```js components
import { PopoverTrigger } from "@abydahana/aksara-ui/components";

[
  ["top", "Popover above the trigger.", "Top"],
  ["bottom", "Popover below the trigger.", "Bottom"],
  ["start", "Popover at the inline start.", "Start"],
  ["end", "Popover at the inline end.", "End"],
  ["auto", "Top or bottom.", "Auto"]
]
  .map(([placement, content, children]) =>
    PopoverTrigger({ content, placement, className: "btn btn-outline-primary", children })
  )
  .join("\n");
```

---

## Title

`data-popover-title` (or the `title` option) adds a `.popover-header` title line and wraps the content in `.popover-body`. Without a title the content sits directly in the panel.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <button class="btn btn-soft-primary" type="button" data-popover="Only the body text." data-popover-trigger="click">Without title</button>
    <button class="btn btn-soft-primary" type="button" data-popover="Billed on the 1st of every month. Cancel anytime from Settings." data-popover-title="Monthly plan" data-popover-trigger="click">With title</button>
  </div>
</div>
::end

```html
<button class="btn btn-soft-primary" data-popover="Only the body text." data-popover-trigger="click">
  Without title
</button>
<button
  class="btn btn-soft-primary"
  data-popover="Billed on the 1st of every month."
  data-popover-title="Monthly plan"
  data-popover-trigger="click"
>
  With title
</button>
```

```js components
import { PopoverTrigger } from "@abydahana/aksara-ui/components";

PopoverTrigger({
  content: "Only the body text.",
  className: "btn btn-soft-primary",
  attributes: { "data-popover-trigger": "click" },
  children: "Without title"
});

PopoverTrigger({
  content: "Billed on the 1st of every month.",
  title: "Monthly plan",
  className: "btn btn-soft-primary",
  attributes: { "data-popover-trigger": "click" },
  children: "With title"
});
```

---

## Triggers

`data-popover-trigger` takes a space-separated list of `hover`, `focus` and `click`. The default is `hover focus`. A `click` popover closes on a second click, on Escape, on a click anywhere outside it, and from a `data-popover-close` button inside it. Hover popovers stay open while the pointer moves into the panel. Near a viewport edge the panel flips to the other side and stays on screen. Changing `trigger` later (`Aksara.popover(el, { trigger: "click" })`) rebinds the listeners.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <button class="btn btn-outline-secondary" type="button" data-popover="Shown while hovering or focused." data-popover-placement="bottom">Hover + focus</button>
    <button class="btn btn-outline-secondary" type="button" data-popover="Shown only while hovering." data-popover-trigger="hover" data-popover-placement="bottom">Hover only</button>
    <button class="btn btn-outline-secondary" type="button" data-popover="Shown only while focused." data-popover-trigger="focus" data-popover-placement="bottom">Focus only</button>
    <button class="btn btn-outline-secondary" type="button" data-popover="Toggled by clicking the trigger." data-popover-trigger="click" data-popover-placement="bottom">Click</button>
    <button class="btn btn-outline-secondary" type="button" data-popover="Opens after 400ms and lingers 600ms." data-popover-show-delay="400" data-popover-hide-delay="600" data-popover-placement="bottom">With delays</button>
  </div>
</div>
::end

```html
<button class="btn btn-outline-secondary" data-popover="Shown only while hovering." data-popover-trigger="hover">
  Hover only
</button>
<button class="btn btn-outline-secondary" data-popover="Shown only while focused." data-popover-trigger="focus">
  Focus only
</button>
<button class="btn btn-outline-secondary" data-popover="Toggled by clicking." data-popover-trigger="click">
  Click
</button>
<button
  class="btn btn-outline-secondary"
  data-popover="Opens after 400ms and lingers 600ms."
  data-popover-show-delay="400"
  data-popover-hide-delay="600"
>
  With delays
</button>
```

```js components
import { PopoverTrigger } from "@abydahana/aksara-ui/components";

const trigger = (content, children, attributes) =>
  PopoverTrigger({ content, className: "btn btn-outline-secondary", attributes, children });

trigger("Shown only while hovering.", "Hover only", { "data-popover-trigger": "hover" });
trigger("Shown only while focused.", "Focus only", { "data-popover-trigger": "focus" });
trigger("Toggled by clicking.", "Click", { "data-popover-trigger": "click" });
trigger("Opens after 400ms and lingers 600ms.", "With delays", {
  "data-popover-show-delay": "400",
  "data-popover-hide-delay": "600"
});
```

---

## HTML Content

Set `data-popover-html="true"` to render trusted markup. Escape it inside the attribute, or pass it as the `content` option from JavaScript. Any Aksara class works inside the panel.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <button class="btn btn-ghost hstack gap-2" type="button" data-popover-trigger="click" data-popover-placement="bottom" data-popover-html="true"
      data-popover="&lt;div class=&quot;hstack gap-3 mb-3&quot;&gt;&lt;span class=&quot;avatar avatar-lg rounded-full avatar-primary&quot; aria-hidden=&quot;true&quot;&gt;MC&lt;/span&gt;&lt;div&gt;&lt;strong class=&quot;block&quot;&gt;Maya Chen&lt;/strong&gt;&lt;span class=&quot;text-subtle text-sm&quot;&gt;Product Designer · London&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;p class=&quot;m-0 mb-3 text-sm text-subtle&quot;&gt;Leads the design system and onboarding flows.&lt;/p&gt;&lt;div class=&quot;hstack gap-2&quot;&gt;&lt;a class=&quot;btn btn-primary btn-sm&quot; href=&quot;#&quot;&gt;Message&lt;/a&gt;&lt;a class=&quot;btn btn-outline-primary btn-sm&quot; href=&quot;#&quot;&gt;View profile&lt;/a&gt;&lt;/div&gt;">
      <span class="avatar avatar-sm rounded-full avatar-primary" aria-hidden="true">MC</span>
      Maya Chen
    </button>

    <button class="btn btn-soft-success hstack gap-2" type="button" data-popover-trigger="click" data-popover-html="true" data-popover-title="Password strength: strong"
      data-popover="&lt;ul class=&quot;vstack gap-1 m-0 p-0 list-unstyled text-sm&quot;&gt;&lt;li&gt;&lt;span class=&quot;mdi mdi-check text-success&quot;&gt;&lt;/span&gt; 12+ characters&lt;/li&gt;&lt;li&gt;&lt;span class=&quot;mdi mdi-check text-success&quot;&gt;&lt;/span&gt; Upper and lower case&lt;/li&gt;&lt;li&gt;&lt;span class=&quot;mdi mdi-check text-success&quot;&gt;&lt;/span&gt; A number or symbol&lt;/li&gt;&lt;/ul&gt;">
      <span class="mdi mdi-shield-check-outline"></span> Strength
    </button>

    <button class="btn btn-soft-danger hstack gap-2" type="button" data-popover-trigger="click" data-popover-html="true" data-popover-placement="bottom"
      data-popover="&lt;p class=&quot;m-0 mb-3 text-sm&quot;&gt;Delete &lt;strong&gt;invoice-0042.pdf&lt;/strong&gt;?&lt;/p&gt;&lt;div class=&quot;hstack gap-2 justify-end&quot;&gt;&lt;button class=&quot;btn btn-ghost btn-sm&quot; type=&quot;button&quot; onclick=&quot;Aksara.popover('#popoverDeleteTrigger').hide()&quot;&gt;Cancel&lt;/button&gt;&lt;button class=&quot;btn btn-danger btn-sm&quot; type=&quot;button&quot; onclick=&quot;Aksara.popover('#popoverDeleteTrigger').hide()&quot;&gt;Delete&lt;/button&gt;&lt;/div&gt;"
      id="popoverDeleteTrigger">
      <span class="mdi mdi-trash-can-outline"></span> Inline confirm
    </button>

  </div>
</div>
::end

Building that markup in JavaScript is easier than escaping it by hand:

```js
Aksara.popover("#profileTrigger", {
  trigger: "click",
  placement: "bottom",
  html: true,
  content: `
    <div class="hstack gap-3 mb-3">
      <span class="avatar avatar-lg rounded-full avatar-primary" aria-hidden="true">MC</span>
      <div><strong class="block">Maya Chen</strong><span class="text-subtle text-sm">Product Designer</span></div>
    </div>
    <div class="hstack gap-2">
      <a class="btn btn-primary btn-sm" href="#">Message</a>
      <a class="btn btn-outline-primary btn-sm" href="#">View profile</a>
    </div>`
});
```

Close a popover from a button inside it by calling `hide()` on the trigger's instance, as the inline confirm above does: `Aksara.popover("#popoverDeleteTrigger").hide()`. Only enable `html` for content you control.

---

## Static Markup

The runtime builds a `div.popover` and adds a `popover-{placement}` class that draws the bordered arrow: `popover-top`, `popover-bottom`, `popover-left`, `popover-right`, `popover-start`, `popover-end`. Inside, `.popover-header` and `.popover-title` are bold title lines that sit on the panel itself, and `.popover-body` is muted body text. You can use the same classes for static callouts.

::html
<div class="docs-preview">
  <div class="docs-row items-start gap-4 py-2">
    <div class="popover popover-top [position:relative]">
      <div class="popover-header">popover-top</div>
      <div class="popover-body">Header strip and body text.</div>
    </div>
    <div class="popover popover-bottom [position:relative]">
      <div class="popover-title">popover-bottom</div>
      <div class="popover-body">A title line instead of a header.</div>
    </div>
    <div class="popover popover-start [position:relative]">
      <div class="popover-body">popover-start</div>
    </div>
    <div class="popover popover-end [position:relative]">
      <div class="popover-body">popover-end</div>
    </div>
    <div class="popover popover-left [position:relative]">
      <div class="popover-body">popover-left</div>
    </div>
    <div class="popover popover-right [position:relative]">
      <div class="popover-body">popover-right</div>
    </div>
  </div>
</div>
::end

```html
<div class="popover popover-top">
  <div class="popover-header">Status</div>
  <div class="popover-body">More detail for this control.</div>
</div>

<div class="popover popover-bottom">
  <div class="popover-title">Status</div>
  <div class="popover-body">More detail for this control.</div>
</div>
```

```js components
import { Popover } from "@abydahana/aksara-ui/components";

Popover({ title: "Status", body: "More detail for this control.", placement: "top" });

Popover({ title: "Status", body: "More detail for this control.", placement: "bottom", titleVariant: "title" });
```

---

## JavaScript

`Aksara.init()` creates a `Popover` for every `[data-popover]` element. Use `Aksara.popover()` for elements added later or to pass options in code. It accepts a selector string, a DOM element, a NodeList, or an array of elements.

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

### Options

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Option</th><th>Attribute</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>content</code></td><td><code>data-popover-content</code>, <code>data-popover</code></td><td class="text-nowrap"><code>""</code></td><td>Body content. <code>text</code> is an alias. An empty value shows nothing.</td></tr>
      <tr><td class="text-nowrap"><code>title</code></td><td class="text-nowrap"><code>data-popover-title</code></td><td>none</td><td>Adds a <code>.popover-header</code> and wraps the content in <code>.popover-body</code>.</td></tr>
      <tr><td class="text-nowrap"><code>placement</code></td><td><code>data-popover-placement</code> (or <code>data-placement</code>)</td><td class="text-nowrap"><code>"top"</code></td><td><code>top</code>, <code>bottom</code>, <code>start</code>, <code>end</code>, <code>left</code>, <code>right</code>, <code>auto</code>.</td></tr>
      <tr><td class="text-nowrap"><code>trigger</code></td><td class="text-nowrap"><code>data-popover-trigger</code></td><td class="text-nowrap"><code>"hover focus"</code></td><td>Space-separated <code>hover</code>, <code>focus</code>, <code>click</code>.</td></tr>
      <tr><td class="text-nowrap"><code>container</code></td><td><code>data-popover-container</code> (or <code>data-container</code>)</td><td class="text-nowrap"><code>"body"</code></td><td>Selector or element the popover is appended to.</td></tr>
      <tr><td class="text-nowrap"><code>html</code></td><td><code>data-popover-html</code> (or <code>data-html</code>)</td><td class="text-nowrap"><code>false</code></td><td>Render <code>content</code> as HTML instead of text.</td></tr>
      <tr><td class="text-nowrap"><code>offset</code></td><td class="text-nowrap"><code>data-popover-offset</code></td><td class="text-nowrap"><code>8</code></td><td>Gap between trigger and popover, in pixels.</td></tr>
      <tr><td class="text-nowrap"><code>showDelay</code></td><td class="text-nowrap"><code>data-popover-show-delay</code></td><td class="text-nowrap"><code>0</code></td><td>Milliseconds before showing on hover/focus.</td></tr>
      <tr><td class="text-nowrap"><code>hideDelay</code></td><td class="text-nowrap"><code>data-popover-hide-delay</code></td><td class="text-nowrap"><code>0</code></td><td>Milliseconds before hiding on leave/blur.</td></tr>
      <tr><td class="text-nowrap"><code>keyboard</code></td><td class="text-nowrap"><code>data-popover-keyboard</code></td><td class="text-nowrap"><code>true</code></td><td>Hide on Escape.</td></tr>
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
      <tr><td class="text-nowrap"><code>popover.show()</code></td><td>Creates and positions the popover. Does nothing if open or empty.</td></tr>
      <tr><td class="text-nowrap"><code>popover.hide()</code></td><td>Removes the popover.</td></tr>
      <tr><td class="text-nowrap"><code>popover.toggle()</code></td><td>Shows or hides the popover.</td></tr>
      <tr><td class="text-nowrap"><code>popover.position()</code></td><td>Recalculates the position.</td></tr>
      <tr><td class="text-nowrap"><code>popover.updateOptions(options)</code></td><td>Merges options and refreshes an open popover's content.</td></tr>
      <tr><td class="text-nowrap"><code>popover.destroy()</code></td><td>Hides the popover, clears timers and removes listeners.</td></tr>
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
      <tr><td class="text-nowrap"><code>aksara:popover:show</code></td><td>The popover was added and placed.</td></tr>
      <tr><td class="text-nowrap"><code>aksara:popover:hide</code></td><td>The popover was removed.</td></tr>
      <tr><td class="text-nowrap"><code>aksara:popover:destroy</code></td><td>The instance was destroyed.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
const btn = document.querySelector("#infoBtn");

btn.addEventListener("aksara:popover:show", (event) => {
  console.log("Popover shown", event.detail.instance);
});
```

### String Components

`PopoverTrigger({ content, title, placement, children, as })` renders a trigger with `data-popover`, `data-popover-placement` and, with `title`, `data-popover-title`. `Popover({ title, body, placement, titleVariant })` renders static `.popover` markup: `placement` adds the `popover-{placement}` arrow class and `titleVariant: "title"` renders `.popover-title` instead of `.popover-header`.

```js
import { PopoverTrigger, Popover } from "@abydahana/aksara-ui/components";

PopoverTrigger({ content: "Saved every 30 seconds.", placement: "end", children: "Autosave" });
Popover({ title: "Status", body: "More detail for this control." });
```
