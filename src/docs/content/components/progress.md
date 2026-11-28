# Progress

Progress bars communicate completion, loading advancement, or measurable task state with a simple wrapper and fill element.

---

## Basic Progress

::html
<div class="docs-preview vstack gap-3">
  <div class="progress">
    <div class="progress-bar w-[25%]">25%</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-success w-[60%]">60%</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-danger w-[90%]">90%</div>
  </div>
</div>
::end

```html
<div class="progress">
  <div class="progress-bar w-[60%]">60%</div>
</div>
```

```js components
import { Progress } from "@abydahana/aksara-ui/components";

Progress({ value: 60, label: "60%" });
```

---

## Semantic Fill Colors

Progress fill uses regular utility classes, so semantic color changes stay predictable and static.

::html
<div class="docs-preview vstack gap-3">
  <div class="progress">
    <div class="progress-bar bg-primary w-[42%]">Primary</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-success w-[58%]">Success</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-warning w-[76%]">Warning</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-danger w-[64%]">Danger</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-info w-[52%]">Info</div>
  </div>
</div>
::end

```html
<div class="progress">
  <div class="progress-bar bg-success w-[72%]">72%</div>
</div>
```

```js components
import { Progress } from "@abydahana/aksara-ui/components";

Progress({ value: 72, variant: "success", label: "72%" });
```

---

## Striped And Animated

Add `progress-striped` to the `.progress-bar` for diagonal stripes. Add `progress-animated` when the progress state is actively changing.

::html
<div class="docs-preview vstack gap-3">
  <div class="progress">
    <div class="progress-bar progress-striped w-[48%]">48%</div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-striped progress-animated bg-success w-[72%]">72%</div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-striped progress-animated bg-danger w-[62%]">62%</div>
  </div>
</div>
::end

```html
<div class="progress">
  <div class="progress-bar progress-striped progress-animated w-[72%]">72%</div>
</div>
```

```js components
import { Progress } from "@abydahana/aksara-ui/components";

Progress({ value: 72, striped: true, animated: true, label: "72%" });
```

---

## Thin Progress With Labels

`progress-thin` is a 6px track for meters inside cards and lists; put the label outside the bar.

::html
<div class="docs-preview vstack gap-4">
  <div>
    <div class="hstack justify-between text-sm mb-2"><span class="fw-semibold">Uploading assets</span><span class="text-subtle">72%</span></div>
    <div class="progress progress-thin"><div class="progress-bar w-[72%]"></div></div>
  </div>
  <div>
    <div class="hstack justify-between text-sm mb-2"><span class="fw-semibold">Disk usage</span><span class="text-subtle">91 of 100 GB</span></div>
    <div class="progress progress-thin"><div class="progress-bar bg-danger w-[91%]"></div></div>
  </div>
  <div>
    <div class="hstack justify-between text-sm mb-2"><span class="fw-semibold">Onboarding</span><span class="text-subtle">4 of 5 steps</span></div>
    <div class="progress progress-thin"><div class="progress-bar bg-success w-[80%]"></div></div>
  </div>
</div>
::end

```html
<div class="hstack justify-between text-sm mb-2">
  <span class="fw-semibold">Uploading assets</span>
  <span class="text-subtle">72%</span>
</div>
<div class="progress progress-thin" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-[72%]"></div>
</div>
```

```js components
import { Progress } from "@abydahana/aksara-ui/components";

`<div class="hstack justify-between text-sm mb-2">
  <span class="fw-semibold">Uploading assets</span>
  <span class="text-subtle">72%</span>
</div>` + Progress({ value: 72, className: "progress-thin" });
```

---

## Accessibility

For dynamic progress, add progressbar semantics and values when the percentage represents a real task state.

```html
<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="45">
  <div class="progress-bar w-[45%]">45%</div>
</div>
```

```js components
import { Progress } from "@abydahana/aksara-ui/components";

// role="progressbar" and the aria-value* attributes are added for you
Progress({ value: 45, label: "45%" });
```
