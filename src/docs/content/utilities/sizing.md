# Sizing

Aksara UI keeps only full-size and keyword sizing static. Every other width or height is an arbitrary value, so a typo such as `w-30` never looks like a real utility.

---

## Interactive Sizing Showcase

::html
<div class="docs-preview">
  <div class="vstack gap-3">
    <div class="w-100 bg-primary/10 border border-primary/20 rounded p-2 text-xs fw-semibold">w-100 (100%)</div>
    <div class="w-[75%] bg-primary/10 border border-primary/20 rounded p-2 text-xs fw-semibold">w-[75%]</div>
    <div class="w-[50%] bg-primary/10 border border-primary/20 rounded p-2 text-xs fw-semibold">w-[50%]</div>
    <div class="w-[320px] bg-primary/10 border border-primary/20 rounded p-2 text-xs fw-semibold">w-[320px]</div>
  </div>
</div>
::end

```html
<div class="w-100">100% width</div>
<div class="w-[75%]">75% width</div>
<div class="w-[33.3333%]">One third</div>
<div class="w-[320px] h-[180px]">Fixed size</div>
```

---

## Static Sizing Utilities

| Width Utility | Height Utility | Computed Value    |
| ------------- | -------------- | ----------------- |
| `w-100`       | `h-100`        | `100%`            |
| `w-full`      | `h-full`       | `100%`            |
| `w-auto`      | `h-auto`       | `auto`            |
| `w-screen`    | `h-screen`     | `100vw` / `100vh` |

---

## Arbitrary Sizes

Percentages, fractions and fixed sizes use bracket values, generated on demand by `Aksara.init()`:

| Need                     | Class           |
| ------------------------ | --------------- |
| Half width               | `w-[50%]`       |
| One third                | `w-[33.3333%]`  |
| Fixed width              | `w-[320px]`     |
| Viewport-relative height | `h-[60vh]`      |
| Max width                | `max-w-[40rem]` |

```html
<div class="w-[50%] h-100">50% width, 100% height</div>
<div class="max-w-[40rem] mx-auto">Readable column</div>
```

---

## Max & Min Constraints

Use standard constraints to control responsive boundaries:

- `mw-100`: `max-width: 100%`
- `mh-100`: `max-height: 100%`
- `min-vw-100`: `min-width: 100vw`
- `min-vh-100`: `min-height: 100vh`
- `vw-100`: `width: 100vw`
- `vh-100`: `height: 100vh`
- `w-screen`: `width: 100vw`
- `h-screen`: `height: 100vh`

```html
<!-- Prevent image from overflowing its parent -->
<img src="banner.jpg" class="mw-100 h-auto" alt="Banner" />

<!-- Full viewport hero container -->
<div class="min-vh-100 d-flex items-center justify-center">Centered Content</div>
```
