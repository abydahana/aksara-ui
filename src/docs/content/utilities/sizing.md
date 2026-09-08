# Sizing

Aksara UI provides clean, semantic sizing utilities combining Bootstrap's standard percentage widths with modern fraction and viewport helpers.

---

## Interactive Sizing Showcase

::html
<div class="docs-preview">
  <div class="vstack gap-3">
    <div class="w-100 bg-primary/10 border border-primary/20 rounded p-2 text-xs font-semibold">w-100 (100%)</div>
    <div class="w-75 bg-primary/10 border border-primary/20 rounded p-2 text-xs font-semibold">w-75 (75%)</div>
    <div class="w-50 bg-primary/10 border border-primary/20 rounded p-2 text-xs font-semibold">w-50 (50%)</div>
    <div class="w-25 bg-primary/10 border border-primary/20 rounded p-2 text-xs font-semibold">w-25 (25%)</div>
  </div>
</div>
::end

```html
<div class="w-100">100% width</div>
<div class="w-75">75% width</div>
<div class="w-50">50% width</div>
<div class="w-25">25% width</div>
```

---

## Percentage Sizing (Bootstrap Compatible)

Easily make an element as wide or tall as its parent container:

| Width Utility | Height Utility | Computed Value |
| ------------- | -------------- | -------------- |
| `w-25`        | `h-25`         | `25%`          |
| `w-50`        | `h-50`         | `50%`          |
| `w-75`        | `h-75`         | `75%`          |
| `w-100`       | `h-100`        | `100%`         |
| `w-auto`      | `h-auto`       | `auto`         |
| `w-full`      | `h-full`       | `100%`         |

```html
<div class="w-50 h-100">50% width, 100% height</div>
<div class="w-full h-auto">Full container width</div>
```

---

## Fraction Widths

For modular layouts, Aksara provides intuitive fraction widths:

| Class   | Percentage |
| ------- | ---------- |
| `w-1/2` | `50%`      |
| `w-1/3` | `33.333%`  |
| `w-2/3` | `66.667%`  |
| `w-1/4` | `25%`      |
| `w-3/4` | `75%`      |
| `w-1/5` | `20%`      |
| `w-2/5` | `40%`      |
| `w-3/5` | `60%`      |
| `w-4/5` | `80%`      |

```html
<div class="w-1/3">One third (33.333%)</div>
<div class="w-2/3">Two thirds (66.667%)</div>
<div class="w-3/4">Three quarters (75%)</div>
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
