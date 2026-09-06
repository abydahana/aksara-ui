# Utility First

Aksara UI supports a premium, high-performance utility-first workflow while keeping Bootstrap-like readable component foundations.

## Compose Small Utilities

Use utility classes to compose bespoke, highly interactive layouts directly in your HTML without writing a single line of custom CSS.

::html
<div class="docs-preview py-8 flex justify-center">
  <article class="w-full p-6 bg-body border border-subtle rounded-16 shadow-md hover:border-primary/50 transition duration-300" style="max-width:520px;">
    <div class="hstack justify-between items-center mb-4">
      <span class="badge badge-soft-primary hstack gap-2 text-xs px-3 py-1 rounded-full font-700">
        <span class="mdi mdi-cube-outline"></span> Utility-first
      </span>
      <span class="text-xs text-subtle font-600">Active Concept</span>
    </div>
    <h2 class="text-28 font-800 leading-34 mb-2 text-base">Compose directly in HTML</h2>
    <p class="text-subtle leading-24 mb-5 text-sm">
      Seamlessly combine layout grids, spacing offsets, adaptive color schemes, premium border properties, and CSS animations.
    </p>
    <button class="btn btn-primary hover:bg-primary/80 transition duration-200 hstack gap-2">
      Continue Reading <span class="mdi mdi-arrow-right"></span>
    </button>
  </article>
</div>
::end

```html
<article
  class="w-full p-6 bg-body border border-subtle rounded-16 shadow-md hover:border-primary/50 transition duration-300"
  style="max-width:520px;"
>
  <div class="hstack justify-between items-center mb-4">
    <span class="badge badge-soft-primary hstack gap-2 text-xs px-3 py-1 rounded-full font-700">
      <span class="mdi mdi-cube-outline"></span> Utility-first
    </span>
    <span class="text-xs text-subtle font-600">Active Concept</span>
  </div>
  <h2 class="text-28 font-800 leading-34 mb-2">Compose directly in HTML</h2>
  <p class="text-subtle leading-24 mb-5">...</p>
  <button class="btn btn-primary hover:bg-primary/80 transition duration-200 hstack gap-2">
    Continue Reading <span class="mdi mdi-arrow-right"></span>
  </button>
</article>
```

## Mix Components & Utilities

Components provide a stable, standard, accessible base. Utilities let you customize spacing, colors, layouts, and interactive behaviors on top without code bloat.

::html
<div class="docs-preview py-6 flex gap-3 flex-wrap items-center">
  <button class="btn btn-outline-primary px-6 py-3 rounded-100 hstack gap-2 hover:bg-primary/10 transition">
    <span class="mdi mdi-filter-variant"></span> Filter Results
  </button>
  <button class="btn btn-soft-danger px-6 py-3 rounded-100 hstack gap-2 hover:bg-danger/20 transition">
    <span class="mdi mdi-trash-can-outline"></span> Delete Account
  </button>
</div>
::end

```html
<button class="btn btn-outline-primary px-6 py-3 rounded-100 hstack gap-2 hover:bg-primary/10 transition">
  <span class="mdi mdi-filter-variant"></span> Filter Results
</button>
```

## Strict Class Grammar & Order

Aksara UI features a highly scalable, predictable utility naming syntax. To keep class names highly readable and eliminate runtime compiling overhead, variants must adhere strictly to the following composition order:

```text
[theme:][breakpoint:][state:]utility[-value][/level]
```

### 1. Strict Variant Order Rule

Variants **MUST ONLY** be composed in the following order. The pre-compiled generator strictly validates and rejects out-of-order combinations:

```text
theme ➔ breakpoint ➔ state ➔ utility
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 20%;">Type</th>
        <th style="width: 40%;">Valid Composition</th>
        <th style="width: 40%;">Invalid Composition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Correct</strong></td>
        <td><code>dark:md:hover:border-primary</code></td>
        <td>—</td>
      </tr>
      <tr>
        <td><strong>Correct</strong></td>
        <td><code>dark:lg:focus:bg-primary/20</code></td>
        <td>—</td>
      </tr>
      <tr>
        <td><strong>Incorrect</strong></td>
        <td>—</td>
        <td><code>md:dark:hover:border</code></td>
      </tr>
      <tr>
        <td><strong>Incorrect</strong></td>
        <td>—</td>
        <td><code>hover:md:border</code></td>
      </tr>
      <tr>
        <td><strong>Incorrect</strong></td>
        <td>—</td>
        <td><code>focus:dark:lg:bg-primary</code></td>
      </tr>
    </tbody>
  </table>
</div>
::end

### 2. Available Variant Groups

- **Theme variants**: `dark`, `light`
- **Breakpoint variants**: `sm` (576px), `md` (768px), `lg` (992px), `xl` (1200px), `2xl` (1400px), `3xl` (1600px)
- **State variants**: `hover`, `focus`, `active`, `disabled`, `checked`, `selected`, `visited`, `first`, `last`, `odd`, `even`

### 3. Color Alpha Levels

Slash `/` is exclusively used to denote semantic color opacity levels (from `0` to `100`% alpha):

- `bg-primary/10` = Primary background with 10% opacity
- `text-danger/80` = Danger text color with 80% opacity
- `border-subtle/50` = Subtle border color with 50% opacity

---

## Aksara Core Differences

- **Zero Runtime Overhead**: 100% static generated CSS. No JIT compilers, no runtime scripts, and no complex Node.js build steps needed for users.
- **Strict Logical Grammar**: Predictable order prevents inconsistent, competing responsive declarations.
- **RTL-First Logical Layouts**: Fully native logical properties (e.g. `ms-*` using `margin-inline-start`) instead of physical offsets (`ml-*`, `pl-*`).
- **Gentle UI Color Palette**: Flat, soft, sleek visual styles suited for high-end professional dashboards.
