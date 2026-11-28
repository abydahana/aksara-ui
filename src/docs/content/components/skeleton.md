# Skeleton

Skeleton loaders render component-shaped placeholders while content is loading. Matching the shape of the final layout keeps the page from jumping when data arrives and feels faster than a lone spinner. Skeletons use the subtle surface color, so they read correctly in light and dark mode without extra classes.

---

## Basic Shapes

`.skeleton` is a block with the subtle surface color and a gentle pulse. Give it a size, or add a shape modifier: `.skeleton-text` for a line of text, `.skeleton-circle` for avatars and icons, and `.skeleton-rect` to fill its parent.

::html
<div class="docs-preview">
  <div class="docs-row items-center">
    <div class="skeleton w-[8rem] h-[4.5rem]"></div>
    <div class="skeleton skeleton-circle w-[3rem] h-[3rem]"></div>
    <div class="skeleton skeleton-circle w-[2rem] h-[2rem]"></div>
    <div class="skeleton rounded-pill w-[6rem] h-[1.75rem]"></div>
    <div class="w-[12rem]">
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text w-[70%]"></div>
    </div>
    <div class="w-[8rem] h-[4.5rem]">
      <div class="skeleton skeleton-rect"></div>
    </div>
  </div>
</div>
::end

```html
<!-- Block: size it yourself -->
<div class="skeleton w-[8rem] h-[4.5rem]"></div>

<!-- Circle -->
<div class="skeleton skeleton-circle w-[3rem] h-[3rem]"></div>

<!-- Text lines: full width, .875rem tall, .5rem gap below -->
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text w-[70%]"></div>

<!-- Rect: fills a sized parent -->
<div class="w-[8rem] h-[4.5rem]">
  <div class="skeleton skeleton-rect"></div>
</div>
```

```js components
import { Skeleton, SkeletonCircle } from "@abydahana/aksara-ui/components";

// Block: size it yourself
Skeleton({ attributes: { style: "width: 8rem; height: 4.5rem;" } });

// Circle
SkeletonCircle({ size: "3rem" });

// Text lines
Skeleton({ variant: "text" });
Skeleton({ variant: "text", attributes: { style: "width: 70%;" } });

// Rect: fills a sized parent
`<div class="w-[8rem] h-[4.5rem]">${Skeleton({ variant: "rect" })}</div>`;
```

---

## Pulse And Wave

Every skeleton pulses by default. Add `.skeleton-wave` for a shimmer that sweeps across the shape. The shimmer color comes from `--aksara-placeholder-shine`, which is tuned separately for dark mode.

::html
<div class="docs-preview">
  <div class="grid-2 gap-5">
    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Pulse (default)</h4>
      <div class="hstack gap-3 items-center mb-3">
        <div class="skeleton skeleton-circle w-[2.5rem] h-[2.5rem]"></div>
        <div class="grow">
          <div class="skeleton skeleton-text w-[60%]"></div>
          <div class="skeleton skeleton-text mb-0 w-[35%]"></div>
        </div>
      </div>
      <div class="skeleton h-[5rem]"></div>
    </div>
    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Wave</h4>
      <div class="hstack gap-3 items-center mb-3">
        <div class="skeleton skeleton-circle skeleton-wave w-[2.5rem] h-[2.5rem]"></div>
        <div class="grow">
          <div class="skeleton skeleton-text skeleton-wave w-[60%]"></div>
          <div class="skeleton skeleton-text skeleton-wave mb-0 w-[35%]"></div>
        </div>
      </div>
      <div class="skeleton skeleton-wave h-[5rem]"></div>
    </div>
  </div>
</div>
::end

```html
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text skeleton-wave"></div>
```

```js components
import { Skeleton } from "@abydahana/aksara-ui/components";

Skeleton({ variant: "text" });
Skeleton({ variant: "text", wave: true });
```

---

## Text Blocks

Mix line widths so a paragraph skeleton looks like real text. Taller lines stand in for headings; the last line of a paragraph is usually shorter. Override the height inline or with an arbitrary class such as `h-[1.25rem]`.

::html
<div class="docs-preview">
  <div class="max-w-[34rem]">
    <div class="skeleton skeleton-text skeleton-wave h-[1.5rem] mb-3 w-[55%]"></div>
    <div class="skeleton skeleton-text skeleton-wave w-[30%] h-[0.625rem]"></div>
    <div class="mt-4">
      <div class="skeleton skeleton-text skeleton-wave"></div>
      <div class="skeleton skeleton-text skeleton-wave"></div>
      <div class="skeleton skeleton-text skeleton-wave"></div>
      <div class="skeleton skeleton-text skeleton-wave w-[60%]"></div>
    </div>
    <div class="mt-4">
      <div class="skeleton skeleton-text skeleton-wave"></div>
      <div class="skeleton skeleton-text skeleton-wave w-[85%]"></div>
    </div>
  </div>
</div>
::end

```html
<!-- Heading -->
<div class="skeleton skeleton-text skeleton-wave h-[1.5rem] mb-3 w-[55%]"></div>
<!-- Meta line -->
<div class="skeleton skeleton-text skeleton-wave w-[30%] h-[0.625rem]"></div>
<!-- Paragraph -->
<div class="skeleton skeleton-text skeleton-wave"></div>
<div class="skeleton skeleton-text skeleton-wave"></div>
<div class="skeleton skeleton-text skeleton-wave w-[60%]"></div>
```

```js components
import { Skeleton, SkeletonText } from "@abydahana/aksara-ui/components";

// Heading
Skeleton({ variant: "text", wave: true, className: "h-[1.5rem] mb-3", attributes: { style: "width: 55%;" } });
// Meta line
Skeleton({ variant: "text", wave: true, attributes: { style: "width: 30%; height: 0.625rem;" } });
// Paragraph: full-width lines, the last one 60% wide
SkeletonText({ lines: 3, wave: true });
```

---

## Profile Card

::html
<div class="docs-preview">
  <div class="card p-4 w-full max-w-[28rem]">
    <div class="hstack gap-3 items-center mb-4">
      <div class="skeleton skeleton-circle skeleton-wave w-[3rem] h-[3rem]"></div>
      <div class="grow">
        <div class="skeleton skeleton-text skeleton-wave w-[50%]"></div>
        <div class="skeleton skeleton-text skeleton-wave mb-0 w-[80%] h-[0.75rem]"></div>
      </div>
    </div>
    <div class="skeleton skeleton-text skeleton-wave"></div>
    <div class="skeleton skeleton-text skeleton-wave"></div>
    <div class="skeleton skeleton-text skeleton-wave mb-4 w-[60%]"></div>
    <div class="hstack gap-2">
      <div class="skeleton skeleton-wave grow h-[2.25rem]"></div>
      <div class="skeleton skeleton-wave w-[2.25rem] h-[2.25rem]"></div>
    </div>
  </div>
</div>
::end

```html
<div class="card p-4">
  <div class="hstack gap-3 items-center mb-4">
    <div class="skeleton skeleton-circle skeleton-wave w-[3rem] h-[3rem]"></div>
    <div class="grow">
      <div class="skeleton skeleton-text skeleton-wave w-[50%]"></div>
      <div class="skeleton skeleton-text skeleton-wave mb-0 w-[80%] h-[0.75rem]"></div>
    </div>
  </div>
  <div class="skeleton skeleton-text skeleton-wave"></div>
  <div class="skeleton skeleton-text skeleton-wave"></div>
  <div class="skeleton skeleton-text skeleton-wave mb-4 w-[60%]"></div>
  <div class="hstack gap-2">
    <div class="skeleton skeleton-wave grow h-[2.25rem]"></div>
    <div class="skeleton skeleton-wave w-[2.25rem] h-[2.25rem]"></div>
  </div>
</div>
```

```js components
import { Card, Skeleton, SkeletonCircle } from "@abydahana/aksara-ui/components";

// A wave text line with optional inline style and extra classes
const text = (style, className) => Skeleton({ variant: "text", wave: true, className, attributes: { style } });

Card({
  className: "p-4",
  children: `
    <div class="hstack gap-3 items-center mb-4">
      ${SkeletonCircle({ size: "3rem", wave: true })}
      <div class="grow">
        ${text("width: 50%;")}
        ${text("width: 80%; height: 0.75rem;", "mb-0")}
      </div>
    </div>
    ${text()}
    ${text()}
    ${text("width: 60%;", "mb-4")}
    <div class="hstack gap-2">
      ${Skeleton({ wave: true, className: "grow", attributes: { style: "height: 2.25rem;" } })}
      ${Skeleton({ wave: true, attributes: { style: "width: 2.25rem; height: 2.25rem;" } })}
    </div>`
});
```

---

## Media Cards

Wrap `.skeleton-rect` in a `.ratio` box to reserve the exact aspect ratio of the image that will load.

::html
<div class="docs-preview">
  <div class="grid-3 gap-4">
    <div class="card overflow-hidden">
      <div class="ratio ratio-16x9"><div class="skeleton skeleton-rect skeleton-wave rounded-0"></div></div>
      <div class="card-body">
        <div class="skeleton skeleton-text skeleton-wave h-[1.125rem] w-[75%]"></div>
        <div class="skeleton skeleton-text skeleton-wave"></div>
        <div class="skeleton skeleton-text skeleton-wave w-[50%]"></div>
        <div class="hstack gap-2 items-center mt-3">
          <div class="skeleton skeleton-circle skeleton-wave w-[1.5rem] h-[1.5rem]"></div>
          <div class="skeleton skeleton-text skeleton-wave mb-0 w-[40%] h-[0.625rem]"></div>
        </div>
      </div>
    </div>
    <div class="card overflow-hidden">
      <div class="ratio ratio-16x9"><div class="skeleton skeleton-rect skeleton-wave rounded-0"></div></div>
      <div class="card-body">
        <div class="skeleton skeleton-text skeleton-wave h-[1.125rem] w-[60%]"></div>
        <div class="skeleton skeleton-text skeleton-wave"></div>
        <div class="skeleton skeleton-text skeleton-wave w-[70%]"></div>
        <div class="hstack gap-2 items-center mt-3">
          <div class="skeleton skeleton-circle skeleton-wave w-[1.5rem] h-[1.5rem]"></div>
          <div class="skeleton skeleton-text skeleton-wave mb-0 w-[35%] h-[0.625rem]"></div>
        </div>
      </div>
    </div>
    <div class="card overflow-hidden">
      <div class="ratio ratio-16x9"><div class="skeleton skeleton-rect skeleton-wave rounded-0"></div></div>
      <div class="card-body">
        <div class="skeleton skeleton-text skeleton-wave h-[1.125rem] w-[80%]"></div>
        <div class="skeleton skeleton-text skeleton-wave"></div>
        <div class="skeleton skeleton-text skeleton-wave w-[45%]"></div>
        <div class="hstack gap-2 items-center mt-3">
          <div class="skeleton skeleton-circle skeleton-wave w-[1.5rem] h-[1.5rem]"></div>
          <div class="skeleton skeleton-text skeleton-wave mb-0 w-[45%] h-[0.625rem]"></div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card overflow-hidden">
  <div class="ratio ratio-16x9">
    <div class="skeleton skeleton-rect skeleton-wave rounded-0"></div>
  </div>
  <div class="card-body">
    <div class="skeleton skeleton-text skeleton-wave h-[1.125rem] w-[75%]"></div>
    <div class="skeleton skeleton-text skeleton-wave"></div>
    <div class="skeleton skeleton-text skeleton-wave w-[50%]"></div>
  </div>
</div>
```

```js components
import { Card, CardBody, Skeleton } from "@abydahana/aksara-ui/components";

// A wave text line with optional inline style and extra classes
const text = (style, className) => Skeleton({ variant: "text", wave: true, className, attributes: { style } });

Card({
  className: "overflow-hidden",
  children:
    `<div class="ratio ratio-16x9">${Skeleton({ variant: "rect", wave: true, className: "rounded-0" })}</div>` +
    CardBody({ children: text("width: 75%;", "h-[1.125rem]") + text() + text("width: 50%;") })
});
```

---

## List

::html
<div class="docs-preview">
  <div class="list-group max-w-[32rem]">
    <div class="list-group-item hstack gap-3 items-center">
      <div class="skeleton skeleton-circle skeleton-wave w-[2.5rem] h-[2.5rem]"></div>
      <div class="grow">
        <div class="skeleton skeleton-text skeleton-wave w-[45%]"></div>
        <div class="skeleton skeleton-text skeleton-wave mb-0 w-[70%] h-[0.625rem]"></div>
      </div>
      <div class="skeleton skeleton-wave rounded-pill w-[4rem] h-[1.5rem]"></div>
    </div>
    <div class="list-group-item hstack gap-3 items-center">
      <div class="skeleton skeleton-circle skeleton-wave w-[2.5rem] h-[2.5rem]"></div>
      <div class="grow">
        <div class="skeleton skeleton-text skeleton-wave w-[35%]"></div>
        <div class="skeleton skeleton-text skeleton-wave mb-0 w-[60%] h-[0.625rem]"></div>
      </div>
      <div class="skeleton skeleton-wave rounded-pill w-[4rem] h-[1.5rem]"></div>
    </div>
    <div class="list-group-item hstack gap-3 items-center">
      <div class="skeleton skeleton-circle skeleton-wave w-[2.5rem] h-[2.5rem]"></div>
      <div class="grow">
        <div class="skeleton skeleton-text skeleton-wave w-[55%]"></div>
        <div class="skeleton skeleton-text skeleton-wave mb-0 w-[40%] h-[0.625rem]"></div>
      </div>
      <div class="skeleton skeleton-wave rounded-pill w-[4rem] h-[1.5rem]"></div>
    </div>
  </div>
</div>
::end

```html
<div class="list-group">
  <div class="list-group-item hstack gap-3 items-center">
    <div class="skeleton skeleton-circle skeleton-wave w-[2.5rem] h-[2.5rem]"></div>
    <div class="grow">
      <div class="skeleton skeleton-text skeleton-wave w-[45%]"></div>
      <div class="skeleton skeleton-text skeleton-wave mb-0 w-[70%] h-[0.625rem]"></div>
    </div>
    <div class="skeleton skeleton-wave rounded-pill w-[4rem] h-[1.5rem]"></div>
  </div>
  <!-- repeat for each row -->
</div>
```

```js components
import { ListGroup, ListGroupItem, Skeleton, SkeletonCircle } from "@abydahana/aksara-ui/components";

// A wave text line with optional inline style and extra classes
const text = (style, className) => Skeleton({ variant: "text", wave: true, className, attributes: { style } });

const row = ListGroupItem({
  className: "hstack gap-3 items-center",
  content: `
    ${SkeletonCircle({ size: "2.5rem", wave: true })}
    <div class="grow">
      ${text("width: 45%;")}
      ${text("width: 70%; height: 0.625rem;", "mb-0")}
    </div>
    ${Skeleton({ wave: true, className: "rounded-pill", attributes: { style: "width: 4rem; height: 1.5rem;" } })}`
});

// repeat for each row
ListGroup({ children: row.repeat(3) });
```

---

## Table

Keep the real table header and replace only the cells, so column widths stay put when the rows arrive.

::html
<div class="docs-preview">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Plan</th>
          <th>Status</th>
          <th class="text-end">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="hstack gap-2 items-center">
              <div class="skeleton skeleton-circle skeleton-wave w-[1.75rem] h-[1.75rem]"></div>
              <div class="skeleton skeleton-text skeleton-wave mb-0 w-[7rem]"></div>
            </div>
          </td>
          <td><div class="skeleton skeleton-text skeleton-wave mb-0 w-[4rem]"></div></td>
          <td><div class="skeleton skeleton-wave rounded-pill w-[4.5rem] h-[1.25rem]"></div></td>
          <td><div class="skeleton skeleton-text skeleton-wave mb-0 ms-auto w-[3.5rem]"></div></td>
        </tr>
        <tr>
          <td>
            <div class="hstack gap-2 items-center">
              <div class="skeleton skeleton-circle skeleton-wave w-[1.75rem] h-[1.75rem]"></div>
              <div class="skeleton skeleton-text skeleton-wave mb-0 w-[5.5rem]"></div>
            </div>
          </td>
          <td><div class="skeleton skeleton-text skeleton-wave mb-0 w-[3rem]"></div></td>
          <td><div class="skeleton skeleton-wave rounded-pill w-[4.5rem] h-[1.25rem]"></div></td>
          <td><div class="skeleton skeleton-text skeleton-wave mb-0 ms-auto w-[4rem]"></div></td>
        </tr>
        <tr>
          <td>
            <div class="hstack gap-2 items-center">
              <div class="skeleton skeleton-circle skeleton-wave w-[1.75rem] h-[1.75rem]"></div>
              <div class="skeleton skeleton-text skeleton-wave mb-0 w-[8rem]"></div>
            </div>
          </td>
          <td><div class="skeleton skeleton-text skeleton-wave mb-0 w-[4.5rem]"></div></td>
          <td><div class="skeleton skeleton-wave rounded-pill w-[4.5rem] h-[1.25rem]"></div></td>
          <td><div class="skeleton skeleton-text skeleton-wave mb-0 ms-auto w-[3rem]"></div></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
::end

```html
<table class="table">
  <thead>
    <tr>
      <th>Customer</th>
      <th>Plan</th>
      <th>Status</th>
      <th class="text-end">Amount</th>
    </tr>
  </thead>
  <tbody aria-busy="true">
    <tr>
      <td>
        <div class="hstack gap-2 items-center">
          <div class="skeleton skeleton-circle skeleton-wave w-[1.75rem] h-[1.75rem]"></div>
          <div class="skeleton skeleton-text skeleton-wave mb-0 w-[7rem]"></div>
        </div>
      </td>
      <td><div class="skeleton skeleton-text skeleton-wave mb-0 w-[4rem]"></div></td>
      <td><div class="skeleton skeleton-wave rounded-pill w-[4.5rem] h-[1.25rem]"></div></td>
      <td><div class="skeleton skeleton-text skeleton-wave mb-0 ms-auto w-[3.5rem]"></div></td>
    </tr>
  </tbody>
</table>
```

```js components
import { Table, TableHead, TableBody, TableRow, Skeleton, SkeletonCircle } from "@abydahana/aksara-ui/components";

const text = (style, className = "mb-0") => Skeleton({ variant: "text", wave: true, className, attributes: { style } });

Table({
  children:
    TableHead({ children: '<tr><th>Customer</th><th>Plan</th><th>Status</th><th class="text-end">Amount</th></tr>' }) +
    TableBody({
      attributes: { "aria-busy": "true" },
      children: TableRow({
        children: `
          <td>
            <div class="hstack gap-2 items-center">${SkeletonCircle({ size: "1.75rem", wave: true })}${text("width: 7rem;")}</div>
          </td>
          <td>${text("width: 4rem;")}</td>
          <td>${Skeleton({ wave: true, className: "rounded-pill", attributes: { style: "width: 4.5rem; height: 1.25rem;" } })}</td>
          <td>${text("width: 3.5rem;", "mb-0 ms-auto")}</td>`
      })
    })
});
```

---

## Dashboard Stats

::html
<div class="docs-preview">
  <div class="grid-3 gap-4">
    <div class="card card-body">
      <div class="hstack justify-between items-center mb-3">
        <div class="skeleton skeleton-text mb-0 w-[45%]"></div>
        <div class="skeleton w-[2rem] h-[2rem]"></div>
      </div>
      <div class="skeleton skeleton-text h-[1.75rem] w-[55%]"></div>
      <div class="skeleton skeleton-text mb-0 w-[35%] h-[0.625rem]"></div>
    </div>
    <div class="card card-body">
      <div class="hstack justify-between items-center mb-3">
        <div class="skeleton skeleton-text mb-0 w-[55%]"></div>
        <div class="skeleton w-[2rem] h-[2rem]"></div>
      </div>
      <div class="skeleton skeleton-text h-[1.75rem] w-[40%]"></div>
      <div class="skeleton skeleton-text mb-0 w-[45%] h-[0.625rem]"></div>
    </div>
    <div class="card card-body">
      <div class="hstack justify-between items-center mb-3">
        <div class="skeleton skeleton-text mb-0 w-[40%]"></div>
        <div class="skeleton w-[2rem] h-[2rem]"></div>
      </div>
      <div class="skeleton skeleton-text h-[1.75rem] w-[65%]"></div>
      <div class="skeleton skeleton-text mb-0 w-[30%] h-[0.625rem]"></div>
    </div>
  </div>
  <div class="card card-body mt-4">
    <div class="hstack justify-between items-center mb-4">
      <div class="skeleton skeleton-text mb-0 w-[10rem] h-[1rem]"></div>
      <div class="skeleton w-[6rem] h-[2rem]"></div>
    </div>
    <div class="hstack gap-3 items-end h-[9rem]">
      <div class="skeleton grow h-[40%]"></div>
      <div class="skeleton grow h-[65%]"></div>
      <div class="skeleton grow h-[50%]"></div>
      <div class="skeleton grow h-[85%]"></div>
      <div class="skeleton grow h-[60%]"></div>
      <div class="skeleton grow h-[100%]"></div>
      <div class="skeleton grow h-[75%]"></div>
    </div>
  </div>
</div>
::end

```html
<div class="card card-body">
  <div class="hstack justify-between items-center mb-3">
    <div class="skeleton skeleton-text mb-0 w-[45%]"></div>
    <div class="skeleton w-[2rem] h-[2rem]"></div>
  </div>
  <div class="skeleton skeleton-text h-[1.75rem] w-[55%]"></div>
  <div class="skeleton skeleton-text mb-0 w-[35%] h-[0.625rem]"></div>
</div>

<!-- Chart area -->
<div class="hstack gap-3 items-end h-[9rem]">
  <div class="skeleton grow h-[40%]"></div>
  <div class="skeleton grow h-[65%]"></div>
  <div class="skeleton grow h-[85%]"></div>
</div>
```

```js components
import { Card, Skeleton } from "@abydahana/aksara-ui/components";

const text = (style, className) => Skeleton({ variant: "text", className, attributes: { style } });

Card({
  className: "card-body",
  children: `
    <div class="hstack justify-between items-center mb-3">
      ${text("width: 45%;", "mb-0")}
      ${Skeleton({ attributes: { style: "width: 2rem; height: 2rem;" } })}
    </div>
    ${text("width: 55%;", "h-[1.75rem]")}
    ${text("width: 35%; height: 0.625rem;", "mb-0")}`
});

// Chart area
`<div class="hstack gap-3 items-end h-[9rem]">
  ${["40%", "65%", "85%"].map((height) => Skeleton({ className: "grow", attributes: { style: `height: ${height};` } })).join("")}
</div>`;
```

---

## Comment Thread

::html
<div class="docs-preview">
  <div class="vstack gap-4 max-w-[36rem]">
    <div class="hstack gap-3 items-start">
      <div class="skeleton skeleton-circle skeleton-wave w-[2.25rem] h-[2.25rem]"></div>
      <div class="grow">
        <div class="hstack gap-2 mb-2">
          <div class="skeleton skeleton-text skeleton-wave mb-0 w-[6rem]"></div>
          <div class="skeleton skeleton-text skeleton-wave mb-0 w-[3rem] h-[0.625rem]"></div>
        </div>
        <div class="skeleton skeleton-text skeleton-wave"></div>
        <div class="skeleton skeleton-text skeleton-wave w-[75%]"></div>
      </div>
    </div>
    <div class="hstack gap-3 items-start ps-5">
      <div class="skeleton skeleton-circle skeleton-wave w-[1.75rem] h-[1.75rem]"></div>
      <div class="grow">
        <div class="hstack gap-2 mb-2">
          <div class="skeleton skeleton-text skeleton-wave mb-0 w-[5rem]"></div>
          <div class="skeleton skeleton-text skeleton-wave mb-0 w-[3rem] h-[0.625rem]"></div>
        </div>
        <div class="skeleton skeleton-text skeleton-wave w-[55%]"></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="hstack gap-3 items-start">
  <div class="skeleton skeleton-circle skeleton-wave w-[2.25rem] h-[2.25rem]"></div>
  <div class="grow">
    <div class="hstack gap-2 mb-2">
      <div class="skeleton skeleton-text skeleton-wave mb-0 w-[6rem]"></div>
      <div class="skeleton skeleton-text skeleton-wave mb-0 w-[3rem] h-[0.625rem]"></div>
    </div>
    <div class="skeleton skeleton-text skeleton-wave"></div>
    <div class="skeleton skeleton-text skeleton-wave w-[75%]"></div>
  </div>
</div>
```

```js components
import { Skeleton, SkeletonCircle } from "@abydahana/aksara-ui/components";

// A wave text line with optional inline style and extra classes
const text = (style, className) => Skeleton({ variant: "text", wave: true, className, attributes: { style } });

`<div class="hstack gap-3 items-start">
  ${SkeletonCircle({ size: "2.25rem", wave: true })}
  <div class="grow">
    <div class="hstack gap-2 mb-2">
      ${text("width: 6rem;", "mb-0")}
      ${text("width: 3rem; height: 0.625rem;", "mb-0")}
    </div>
    ${text()}
    ${text("width: 75%;")}
  </div>
</div>`;
```

---

## Swapping In Real Content

Render the skeleton while a request is in flight, then replace it. Mark the region with `aria-busy="true"` so assistive technology waits for the final content, and hide the decorative shapes with `aria-hidden="true"`.

```html
<section id="team" aria-busy="true">
  <span class="visually-hidden">Loading team members</span>
  <div aria-hidden="true">
    <div class="skeleton skeleton-text skeleton-wave"></div>
    <div class="skeleton skeleton-text skeleton-wave w-[60%]"></div>
  </div>
</section>
```

```js components
import { SkeletonText } from "@abydahana/aksara-ui/components";

`<section id="team" aria-busy="true">
  <span class="visually-hidden">Loading team members</span>
  <div aria-hidden="true">${SkeletonText({ lines: 2, wave: true })}</div>
</section>`;
```

```js
const region = document.querySelector("#team");
const people = await fetch("/api/team").then((response) => response.json());

region.innerHTML = people.map((person) => `<p>${person.name}</p>`).join("");
region.setAttribute("aria-busy", "false");
```

Skeletons have no JavaScript behavior of their own. Users who enable reduced motion still see the shapes; Aksara disables the pulse and wave animations through the global `prefers-reduced-motion` reset.

---

## String Components

```ts
import { Skeleton, SkeletonCircle, SkeletonText } from "@abydahana/aksara-ui/components";

SkeletonCircle({ size: "2.5rem", wave: true });
// <div class="skeleton skeleton-circle skeleton-wave w-[2.5rem] h-[2.5rem]"></div>

SkeletonText({ lines: 3, wave: true });
// three .skeleton-text lines; the last one is 60% wide

Skeleton({ variant: "rect", wave: true, className: "rounded-0" });
// <div class="skeleton skeleton-rect skeleton-wave rounded-0"></div>
```

### `Skeleton`

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>variant</code></td><td><code>"text"</code> | <code>"circle"</code> | <code>"rect"</code></td><td>—</td><td>Adds <code>.skeleton-text</code>, <code>.skeleton-circle</code> or <code>.skeleton-rect</code>.</td></tr>
      <tr><td><code>wave</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.skeleton-wave</code>.</td></tr>
      <tr><td><code>children</code></td><td><code>string</code></td><td><code>""</code></td><td>Inner HTML.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes (<code>style</code>, <code>aria-hidden</code>, …).</td></tr>
    </tbody>
  </table>
</div>
::end

### `SkeletonCircle`

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>size</code></td><td><code>number | string</code></td><td><code>"3rem"</code></td><td>Width and height. Numbers are treated as px.</td></tr>
      <tr><td><code>wave</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.skeleton-wave</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes.</td></tr>
    </tbody>
  </table>
</div>
::end

### `SkeletonText`

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>lines</code></td><td><code>number</code></td><td><code>3</code></td><td>Number of lines. With more than one, the last line is 60% wide.</td></tr>
      <tr><td><code>wave</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.skeleton-wave</code> to every line.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on every line.</td></tr>
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
      <tr><td><code>.skeleton</code></td><td>Block with the subtle surface color, small radius and a pulse animation. Size it yourself.</td></tr>
      <tr><td><code>.skeleton-text</code></td><td>Full-width line, <code>.875rem</code> tall, with <code>.5rem</code> margin below and a tighter radius.</td></tr>
      <tr><td><code>.skeleton-circle</code></td><td>Fully rounded and non-shrinking, for avatars and icons.</td></tr>
      <tr><td><code>.skeleton-rect</code></td><td><code>width: 100%; height: 100%</code>, fills a sized parent such as <code>.ratio</code>.</td></tr>
      <tr><td><code>.skeleton-wave</code></td><td>Adds a moving shimmer on top of the pulse.</td></tr>
    </tbody>
  </table>
</div>
::end

Need a skeleton that follows the text color instead of the surface color? Use Placeholders, which paint in `currentColor`.
