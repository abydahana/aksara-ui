# Placeholders

Placeholders reserve space while content is loading. A `.placeholder` is an inline block painted in `currentColor` at low opacity, so it inherits the font size and color of wherever you put it. Shape it with width, height, radius, color, and animation utilities to build loading screens that match the final layout.

---

## Basic Usage

Drop a `.placeholder` where text will appear. Its height is `1em`, so it scales with the surrounding font size. Set the width with grid column classes (`col-6`), arbitrary widths (`w-[40%]`), or inline styles. Add `block` to put each placeholder on its own line.

::html
<div class="docs-preview">
  <div class="max-w-[560px]">
    <h3 class="mt-0 mb-3"><span class="placeholder col-6 rounded"></span></h3>
    <div class="mb-3">
      <span class="placeholder col-7 rounded"></span>
      <span class="placeholder col-4 rounded"></span>
      <span class="placeholder col-4 rounded"></span>
      <span class="placeholder col-6 rounded"></span>
      <span class="placeholder col-8 rounded"></span>
    </div>
    <div class="text-sm m-0">
      Inline: your order total is <span class="placeholder w-[4rem] rounded"></span> and ships on <span class="placeholder w-[6rem] rounded"></span>.
    </div>
  </div>
</div>
::end

```html
<h3><span class="placeholder col-6 rounded"></span></h3>
<p>
  <span class="placeholder col-7 rounded"></span>
  <span class="placeholder col-4 rounded"></span>
  <span class="placeholder col-6 rounded"></span>
</p>
<p>Your order total is <span class="placeholder w-[4rem] rounded"></span>.</p>
```

```js components
import { Placeholder } from "@abydahana/aksara-ui/components";

`<h3>${Placeholder({ className: "col-6 rounded" })}</h3>
<p>
  ${Placeholder({ className: "col-7 rounded" })}
  ${Placeholder({ className: "col-4 rounded" })}
  ${Placeholder({ className: "col-6 rounded" })}
</p>
<p>Your order total is ${Placeholder({ className: "w-[4rem] rounded" })}.</p>`;
```

---

## Sizing

`.placeholder-xs`, `.placeholder-sm` and `.placeholder-lg` change the minimum height relative to the font size (`.6em`, `.8em`, `1.2em`; the default is `1em`). For a fixed height, set `height` inline.

::html
<div class="docs-preview">
  <div class="vstack gap-3 max-w-[560px]">
    <div class="hstack gap-3 items-center"><code class="text-xs w-[9rem]">placeholder-xs</code><span class="placeholder placeholder-xs col-8 rounded"></span></div>
    <div class="hstack gap-3 items-center"><code class="text-xs w-[9rem]">placeholder-sm</code><span class="placeholder placeholder-sm col-8 rounded"></span></div>
    <div class="hstack gap-3 items-center"><code class="text-xs w-[9rem]">placeholder</code><span class="placeholder col-8 rounded"></span></div>
    <div class="hstack gap-3 items-center"><code class="text-xs w-[9rem]">placeholder-lg</code><span class="placeholder placeholder-lg col-8 rounded"></span></div>
    <div class="hstack gap-3 items-center"><code class="text-xs w-[9rem]">text-2xl</code><span class="placeholder col-8 rounded text-2xl"></span></div>
  </div>
</div>
::end

```html
<span class="placeholder placeholder-xs col-12"></span>
<span class="placeholder placeholder-sm col-12"></span>
<span class="placeholder col-12"></span>
<span class="placeholder placeholder-lg col-12"></span>

<!-- Height follows font size -->
<span class="placeholder col-12 text-2xl"></span>
```

```js components
import { Placeholder } from "@abydahana/aksara-ui/components";

Placeholder({ size: "xs", className: "col-12" });
Placeholder({ size: "sm", className: "col-12" });
Placeholder({ className: "col-12" });
Placeholder({ size: "lg", className: "col-12" });

// Height follows font size
Placeholder({ className: "col-12 text-2xl" });
```

---

## Colors

The base placeholder paints `currentColor` at 16% opacity, so any text color utility tints it. Inside a colored element, placeholders pick up that color automatically.

::html
<div class="docs-preview">
  <div class="vstack gap-2 max-w-[560px]">
    <span class="placeholder block w-full rounded"></span>
    <span class="placeholder text-primary block w-full rounded"></span>
    <span class="placeholder text-secondary block w-full rounded"></span>
    <span class="placeholder text-success block w-full rounded"></span>
    <span class="placeholder text-danger block w-full rounded"></span>
    <span class="placeholder text-warning block w-full rounded"></span>
    <span class="placeholder text-info block w-full rounded"></span>
  </div>
</div>
::end

```html
<span class="placeholder block w-full"></span>
<span class="placeholder text-primary block w-full"></span>
<span class="placeholder text-secondary block w-full"></span>
<span class="placeholder text-success block w-full"></span>
<span class="placeholder text-danger block w-full"></span>
<span class="placeholder text-warning block w-full"></span>
<span class="placeholder text-info block w-full"></span>
```

```js components
import { Placeholder } from "@abydahana/aksara-ui/components";

Placeholder({ className: "block w-full" });

["primary", "secondary", "success", "danger", "warning", "info"]
  .map((color) => Placeholder({ className: `text-${color} block w-full` }))
  .join("\n");
```

---

## Animation

`.placeholder-wave` sweeps a shimmer across a placeholder. `.placeholder-glow` pulses opacity; put it on the **wrapper** so every placeholder inside fades together while keeping its soft tint.

::html
<div class="docs-preview">
  <div class="grid-2 gap-5">
    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Glow (on the wrapper)</h4>
      <div class="placeholder-glow">
        <span class="placeholder block w-[60%] rounded mb-2 h-[1rem]"></span>
        <span class="placeholder block w-full rounded mb-2 h-[0.75rem]"></span>
        <span class="placeholder block w-[80%] rounded h-[0.75rem]"></span>
      </div>
    </div>
    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Wave</h4>
      <span class="placeholder placeholder-wave block w-[60%] rounded mb-2 h-[1rem]"></span>
      <span class="placeholder placeholder-wave block w-full rounded mb-2 h-[0.75rem]"></span>
      <span class="placeholder placeholder-wave block w-[80%] rounded h-[0.75rem]"></span>
    </div>
  </div>
</div>
::end

```html
<!-- Glow: animate the container -->
<div class="placeholder-glow">
  <span class="placeholder block w-[60%]"></span>
  <span class="placeholder block w-full"></span>
</div>

<!-- Wave: animate each placeholder -->
<span class="placeholder placeholder-wave block w-[60%]"></span>
<span class="placeholder placeholder-wave block w-full"></span>
```

```js components
import { Placeholder } from "@abydahana/aksara-ui/components";

// Glow: animate the container
`<div class="placeholder-glow">
  ${Placeholder({ className: "block w-[60%]" })}
  ${Placeholder({ className: "block w-full" })}
</div>`;

// Wave: animate each placeholder
Placeholder({ animation: "wave", className: "block w-[60%]" });
Placeholder({ animation: "wave", className: "block w-full" });
```

---

## Text Skeleton

::html
<div class="docs-preview">
  <div class="placeholder-glow max-w-[560px]">
    <span class="placeholder block w-[33.3333%] rounded mb-3 h-[1.25rem]"></span>
    <span class="placeholder block w-full rounded mb-2 h-[0.75rem]"></span>
    <span class="placeholder block w-[80%] rounded mb-2 h-[0.75rem]"></span>
    <span class="placeholder block w-[66.6667%] rounded h-[0.75rem]"></span>
  </div>
</div>
::end

```html
<div class="placeholder-glow">
  <span class="placeholder block w-[33.3333%] rounded mb-3 h-[1.25rem]"></span>
  <span class="placeholder block w-full rounded mb-2 h-[0.75rem]"></span>
  <span class="placeholder block w-[80%] rounded mb-2 h-[0.75rem]"></span>
  <span class="placeholder block w-[66.6667%] rounded h-[0.75rem]"></span>
</div>
```

```js components
import { Placeholder } from "@abydahana/aksara-ui/components";

// A block bar with an inline height
const bar = (className, style) => Placeholder({ className: `block rounded ${className}`, attributes: { style } });

`<div class="placeholder-glow">
  ${bar("w-[33.3333%] mb-3", "height: 1.25rem;")}
  ${bar("w-full mb-2", "height: 0.75rem;")}
  ${bar("w-[80%] mb-2", "height: 0.75rem;")}
  ${bar("w-[66.6667%]", "height: 0.75rem;")}
</div>`;
```

---

## Cards And Media

Render the real card shell and swap only its content for placeholders, so the card keeps its final size.

::html
<div class="docs-preview">
  <div class="grid-3 gap-4">
    <article class="card overflow-hidden" aria-hidden="true">
      <div class="placeholder placeholder-wave block w-full h-[10rem]"></div>
      <div class="card-body">
        <span class="placeholder block w-[80%] rounded mb-3 h-[1rem]"></span>
        <span class="placeholder block w-full rounded mb-2 h-[0.75rem]"></span>
        <span class="placeholder block w-[66.6667%] rounded mb-4 h-[0.75rem]"></span>
        <span class="placeholder text-primary block rounded w-[96px] h-[2.25rem]"></span>
      </div>
    </article>

    <article class="card" aria-hidden="true">
      <div class="card-body">
        <div class="hstack gap-3 mb-4">
          <span class="placeholder placeholder-wave block rounded-circle shrink-0 w-[48px] h-[48px]"></span>
          <div class="flex-1">
            <span class="placeholder block w-[60%] rounded mb-2 h-[1rem]"></span>
            <span class="placeholder block w-[40%] rounded h-[0.75rem]"></span>
          </div>
        </div>
        <span class="placeholder block w-full rounded mb-2 h-[0.75rem]"></span>
        <span class="placeholder block w-[75%] rounded mb-2 h-[0.75rem]"></span>
        <span class="placeholder block w-[60%] rounded h-[0.75rem]"></span>
      </div>
    </article>

    <article class="card" aria-hidden="true">
      <div class="card-body placeholder-glow">
        <div class="hstack justify-between items-center mb-4">
          <span class="placeholder block w-[40%] rounded h-[0.875rem]"></span>
          <span class="placeholder text-success block rounded-pill w-[56px] h-[1.25rem]"></span>
        </div>
        <span class="placeholder block w-[55%] rounded mb-2 h-[1.75rem]"></span>
        <span class="placeholder block w-[35%] rounded mb-4 h-[0.75rem]"></span>
        <span class="placeholder text-primary block w-full rounded-pill h-[0.5rem]"></span>
      </div>
    </article>

  </div>
</div>
::end

```html
<article class="card overflow-hidden" aria-hidden="true">
  <div class="placeholder placeholder-wave block w-full h-[10rem]"></div>
  <div class="card-body">
    <span class="placeholder block w-[80%] rounded mb-3 h-[1rem]"></span>
    <span class="placeholder block w-full rounded mb-2 h-[0.75rem]"></span>
    <span class="placeholder text-primary block rounded w-[96px] h-[2.25rem]"></span>
  </div>
</article>

<!-- Avatar row -->
<div class="hstack gap-3">
  <span class="placeholder placeholder-wave block rounded-circle shrink-0 w-[48px] h-[48px]"></span>
  <div class="flex-1">
    <span class="placeholder block w-[60%] rounded mb-2 h-[1rem]"></span>
    <span class="placeholder block w-[40%] rounded h-[0.75rem]"></span>
  </div>
</div>
```

```js components
import { Card, CardBody, Placeholder } from "@abydahana/aksara-ui/components";

// A block bar with an inline height
const bar = (className, style) => Placeholder({ className: `block rounded ${className}`, attributes: { style } });

Card({
  as: "article",
  className: "overflow-hidden",
  attributes: { "aria-hidden": "true" },
  children:
    Placeholder({ animation: "wave", className: "block w-full", attributes: { style: "height: 10rem;" } }) +
    CardBody({
      children:
        bar("w-[80%] mb-3", "height: 1rem;") +
        bar("w-full mb-2", "height: 0.75rem;") +
        bar("text-primary", "width:96px; height: 2.25rem;")
    })
});

// Avatar row
`<div class="hstack gap-3">
  ${Placeholder({ animation: "wave", className: "block rounded-circle shrink-0", attributes: { style: "width:48px; height:48px;" } })}
  <div class="flex-1">
    ${bar("w-[60%] mb-2", "height: 1rem;")}
    ${bar("w-[40%]", "height: 0.75rem;")}
  </div>
</div>`;
```

---

## List Skeleton

::html
<div class="docs-preview">
  <ul class="list-group placeholder-glow max-w-[32rem]" aria-hidden="true">
    <li class="list-group-item hstack gap-3 items-center">
      <span class="placeholder block rounded-circle shrink-0 w-[40px] h-[40px]"></span>
      <div class="flex-1">
        <span class="placeholder block w-[50%] rounded mb-2 h-[0.875rem]"></span>
        <span class="placeholder block w-[75%] rounded h-[0.625rem]"></span>
      </div>
      <span class="placeholder block rounded w-[28px] h-[28px]"></span>
    </li>
    <li class="list-group-item hstack gap-3 items-center">
      <span class="placeholder block rounded-circle shrink-0 w-[40px] h-[40px]"></span>
      <div class="flex-1">
        <span class="placeholder block w-[40%] rounded mb-2 h-[0.875rem]"></span>
        <span class="placeholder block w-[65%] rounded h-[0.625rem]"></span>
      </div>
      <span class="placeholder block rounded w-[28px] h-[28px]"></span>
    </li>
    <li class="list-group-item hstack gap-3 items-center">
      <span class="placeholder block rounded-circle shrink-0 w-[40px] h-[40px]"></span>
      <div class="flex-1">
        <span class="placeholder block w-[60%] rounded mb-2 h-[0.875rem]"></span>
        <span class="placeholder block w-[45%] rounded h-[0.625rem]"></span>
      </div>
      <span class="placeholder block rounded w-[28px] h-[28px]"></span>
    </li>
  </ul>
</div>
::end

```html
<ul class="list-group placeholder-glow" aria-hidden="true">
  <li class="list-group-item hstack gap-3 items-center">
    <span class="placeholder block rounded-circle shrink-0 w-[40px] h-[40px]"></span>
    <div class="flex-1">
      <span class="placeholder block w-[50%] rounded mb-2 h-[0.875rem]"></span>
      <span class="placeholder block w-[75%] rounded h-[0.625rem]"></span>
    </div>
    <span class="placeholder block rounded w-[28px] h-[28px]"></span>
  </li>
</ul>
```

```js components
import { ListGroup, ListGroupItem, Placeholder } from "@abydahana/aksara-ui/components";

// A block bar with an inline height
const bar = (className, style) => Placeholder({ className: `block rounded ${className}`, attributes: { style } });

ListGroup({
  className: "placeholder-glow",
  attributes: { "aria-hidden": "true" },
  children: ListGroupItem({
    className: "hstack gap-3 items-center",
    content: `${Placeholder({ className: "block rounded-circle shrink-0", attributes: { style: "width:40px; height:40px;" } })}
      <div class="flex-1">
        ${bar("w-[50%] mb-2", "height: 0.875rem;")}
        ${bar("w-[75%]", "height: 0.625rem;")}
      </div>
      ${bar("", "width:28px; height:28px;")}`
  })
});
```

---

## Table Skeleton

::html
<div class="docs-preview">
  <div class="table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th><span class="placeholder block rounded w-[80px] h-[0.75rem]"></span></th>
          <th><span class="placeholder block rounded w-[70px] h-[0.75rem]"></span></th>
          <th><span class="placeholder block rounded w-[90px] h-[0.75rem]"></span></th>
          <th class="text-end"><span class="placeholder inline-block rounded w-[64px] h-[0.75rem]"></span></th>
        </tr>
      </thead>
      <tbody class="placeholder-glow">
        <tr>
          <td><span class="placeholder block w-[66.6667%] rounded h-[0.875rem]"></span></td>
          <td><span class="placeholder block w-[50%] rounded h-[0.875rem]"></span></td>
          <td><span class="placeholder text-success block rounded-pill w-[80px] h-[1.25rem]"></span></td>
          <td class="text-end"><span class="placeholder inline-block rounded w-[92px] h-[1.75rem]"></span></td>
        </tr>
        <tr>
          <td><span class="placeholder block w-[60%] rounded h-[0.875rem]"></span></td>
          <td><span class="placeholder block w-[40%] rounded h-[0.875rem]"></span></td>
          <td><span class="placeholder text-warning block rounded-pill w-[90px] h-[1.25rem]"></span></td>
          <td class="text-end"><span class="placeholder inline-block rounded w-[92px] h-[1.75rem]"></span></td>
        </tr>
        <tr>
          <td><span class="placeholder block w-[70%] rounded h-[0.875rem]"></span></td>
          <td><span class="placeholder block w-[45%] rounded h-[0.875rem]"></span></td>
          <td><span class="placeholder text-danger block rounded-pill w-[72px] h-[1.25rem]"></span></td>
          <td class="text-end"><span class="placeholder inline-block rounded w-[92px] h-[1.75rem]"></span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
::end

```html
<table class="table table-bordered">
  <tbody class="placeholder-glow">
    <tr>
      <td><span class="placeholder block w-[66.6667%] rounded h-[0.875rem]"></span></td>
      <td><span class="placeholder block w-[50%] rounded h-[0.875rem]"></span></td>
      <td><span class="placeholder text-success block rounded-pill w-[80px] h-[1.25rem]"></span></td>
      <td class="text-end">
        <span class="placeholder inline-block rounded w-[92px] h-[1.75rem]"></span>
      </td>
    </tr>
  </tbody>
</table>
```

```js components
import { Table, TableBody, TableRow, Placeholder } from "@abydahana/aksara-ui/components";

const cell = (className, style) => Placeholder({ className, attributes: { style } });

Table({
  bordered: true,
  children: TableBody({
    className: "placeholder-glow",
    children: TableRow({
      children: `
        <td>${cell("block w-[66.6667%] rounded", "height: 0.875rem;")}</td>
        <td>${cell("block w-[50%] rounded", "height: 0.875rem;")}</td>
        <td>${cell("text-success block rounded-pill", "width:80px; height: 1.25rem;")}</td>
        <td class="text-end">${cell("inline-block rounded", "width:92px; height: 1.75rem;")}</td>`
    })
  })
});
```

---

## Form Skeleton

::html
<div class="docs-preview">
  <div class="max-w-[520px]">
    <span class="placeholder block rounded mb-2 w-[120px] h-[0.875rem]"></span>
    <span class="placeholder placeholder-wave block w-full rounded mb-4 h-[2.5rem]"></span>
    <span class="placeholder block rounded mb-2 w-[96px] h-[0.875rem]"></span>
    <span class="placeholder placeholder-wave block w-full rounded mb-4 h-[2.5rem]"></span>
    <span class="placeholder block rounded mb-2 w-[140px] h-[0.875rem]"></span>
    <span class="placeholder placeholder-wave block w-full rounded mb-4 h-[5rem]"></span>
    <div class="hstack gap-3">
      <span class="placeholder text-primary block rounded w-[96px] h-[2.25rem]"></span>
      <span class="placeholder block rounded w-[84px] h-[2.25rem]"></span>
    </div>
  </div>
</div>
::end

```html
<span class="placeholder block rounded mb-2 w-[120px] h-[0.875rem]"></span>
<span class="placeholder placeholder-wave block w-full rounded mb-4 h-[2.5rem]"></span>

<div class="hstack gap-3">
  <span class="placeholder text-primary block rounded w-[96px] h-[2.25rem]"></span>
  <span class="placeholder block rounded w-[84px] h-[2.25rem]"></span>
</div>
```

```js components
import { Placeholder } from "@abydahana/aksara-ui/components";

// A block bar with an inline height
const bar = (className, style) => Placeholder({ className: `block rounded ${className}`, attributes: { style } });

bar("mb-2", "width:120px; height: 0.875rem;");
Placeholder({ animation: "wave", className: "block w-full rounded mb-4", attributes: { style: "height: 2.5rem;" } });

`<div class="hstack gap-3">
  ${bar("text-primary", "width:96px; height: 2.25rem;")}
  ${bar("", "width:84px; height: 2.25rem;")}
</div>`;
```

---

## Accessibility

Placeholders are decorative. Hide them from assistive technology with `aria-hidden="true"` (the string component adds it for you) and mark the region that is loading with `aria-busy="true"`. Placeholders also show a `wait` cursor on hover. Animations are disabled automatically when the user prefers reduced motion.

```html
<section aria-busy="true">
  <span class="visually-hidden">Loading orders</span>
  <div class="placeholder-glow" aria-hidden="true">
    <span class="placeholder block w-full"></span>
  </div>
</section>
```

```js components
import { Placeholder } from "@abydahana/aksara-ui/components";

// Placeholder() already sets aria-hidden="true" on itself
`<section aria-busy="true">
  <span class="visually-hidden">Loading orders</span>
  <div class="placeholder-glow" aria-hidden="true">
    ${Placeholder({ className: "block w-full" })}
  </div>
</section>`;
```

---

## String Component

```ts
import { Placeholder } from "@abydahana/aksara-ui/components";

Placeholder({ animation: "wave", size: "lg", className: "col-6" });
// <span class="placeholder placeholder-wave placeholder-lg col-6" aria-hidden="true"></span>

Placeholder({ variant: "primary", className: "block w-[96px]" });
// <span class="placeholder bg-primary block w-[96px]" aria-hidden="true"></span>
```

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>animation</code></td><td><code>"glow"</code> | <code>"wave"</code></td><td>—</td><td>Adds <code>.placeholder-glow</code> or <code>.placeholder-wave</code>.</td></tr>
      <tr><td><code>size</code></td><td><code>"xs"</code> | <code>"sm"</code> | <code>"lg"</code></td><td>—</td><td>Adds <code>.placeholder-xs</code>, <code>.placeholder-sm</code> or <code>.placeholder-lg</code>.</td></tr>
      <tr><td><code>variant</code></td><td><code>"primary"</code> | <code>"secondary"</code> | <code>"success"</code> | <code>"danger"</code> | <code>"warning"</code> | <code>"info"</code> | <code>"dark"</code> | <code>"light"</code></td><td>—</td><td>Adds <code>bg-{variant}</code> to tint the placeholder.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes, typically the width (<code>col-6</code>, <code>w-[40%]</code>).</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes. <code>aria-hidden="true"</code> is set by default.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Class</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.placeholder</code></td><td>Inline block, <code>1em</code> tall, <code>currentColor</code> background at 16% opacity, <code>wait</code> cursor.</td></tr>
      <tr><td><code>.placeholder-xs</code></td><td>Minimum height <code>.6em</code>.</td></tr>
      <tr><td><code>.placeholder-sm</code></td><td>Minimum height <code>.8em</code>.</td></tr>
      <tr><td><code>.placeholder-lg</code></td><td>Minimum height <code>1.2em</code>.</td></tr>
      <tr><td><code>.placeholder-glow</code></td><td>Pulses opacity. Apply it to the wrapper around your placeholders.</td></tr>
      <tr><td><code>.placeholder-wave</code></td><td>Adds a moving shimmer across the placeholder (<code>--aksara-placeholder-shine</code>).</td></tr>
      <tr><td><code>.text-*</code> utilities</td><td>Tint placeholders, because the background is <code>currentColor</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

Prefer shapes that sit on the surface color regardless of text color? See Skeleton.
