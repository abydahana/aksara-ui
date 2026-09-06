# Progress

Progress bars communicate completion, loading advancement, or measurable task state with a simple wrapper and fill element.

---

## Basic Progress

::html
<div class="docs-preview vstack gap-3">
  <div class="progress">
    <div class="progress-bar" style="width: 25%;">25%</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-success" style="width: 60%;">60%</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-danger" style="width: 90%;">90%</div>
  </div>
</div>
::end

```html
<div class="progress">
  <div class="progress-bar" style="width: 60%;">60%</div>
</div>
```

---

## Semantic Fill Colors

Progress fill uses regular utility classes, so semantic color changes stay predictable and static.

::html
<div class="docs-preview vstack gap-3">
  <div class="progress">
    <div class="progress-bar bg-primary" style="width: 42%;">Primary</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-success" style="width: 58%;">Success</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-warning" style="width: 76%;">Warning</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-danger" style="width: 64%;">Danger</div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-info" style="width: 52%;">Info</div>
  </div>
</div>
::end

```html
<div class="progress">
  <div class="progress-bar bg-success" style="width: 72%;">72%</div>
</div>
```

---

## Striped And Animated

Add `progress-striped` to the `.progress-bar` for diagonal stripes. Add `progress-animated` when the progress state is actively changing.

::html
<div class="docs-preview vstack gap-3">
  <div class="progress">
    <div class="progress-bar progress-striped" style="width: 48%;">48%</div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-striped progress-animated bg-success" style="width: 72%;">72%</div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-striped progress-animated bg-danger" style="width: 62%;">62%</div>
  </div>
</div>
::end

```html
<div class="progress">
  <div class="progress-bar progress-striped progress-animated" style="width: 72%;">72%</div>
</div>
```

---

## Accessibility

For dynamic progress, add progressbar semantics and values when the percentage represents a real task state.

```html
<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="45">
  <div class="progress-bar" style="width: 45%;">45%</div>
</div>
```
