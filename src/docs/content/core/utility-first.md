# Utility First

Aksara UI supports a premium, high-performance utility-first workflow while keeping Bootstrap-like readable component foundations.

## Compose Small Utilities

Use utility classes to compose bespoke, highly interactive layouts directly in your HTML without writing a single line of custom CSS.

::html
<div class="docs-preview py-5 flex justify-center">
  <article class="w-full p-4 bg-body border border-subtle rounded-[16px] shadow-md hover:border-primary/50 transition duration-[300ms]" style="max-width:520px;">
    <div class="hstack justify-between items-center mb-4">
      <span class="badge badge-soft-primary hstack gap-2 text-xs px-3 py-1 rounded-full fw-bold">
        <span class="mdi mdi-cube-outline"></span> Utility-first
      </span>
      <span class="text-xs text-subtle fw-semibold">Active Concept</span>
    </div>
    <h2 class="text-[28px] font-extrabold leading-[34px] mb-2 text-body">Compose directly in HTML</h2>
    <p class="text-subtle leading-[24px] mb-5 text-sm">
      Seamlessly combine layout grids, spacing offsets, adaptive color schemes, premium border properties, and CSS animations.
    </p>
    <button class="btn btn-primary hover:bg-primary/80 transition duration-[200ms] hstack gap-2">
      Continue Reading <span class="mdi mdi-arrow-right"></span>
    </button>
  </article>
</div>
::end

```html
<article
  class="w-full p-4 bg-body border border-subtle rounded-[16px] shadow-md hover:border-primary/50 transition duration-[300ms]"
  style="max-width:520px;"
>
  <div class="hstack justify-between items-center mb-4">
    <span class="badge badge-soft-primary hstack gap-2 text-xs px-3 py-1 rounded-full fw-bold">
      <span class="mdi mdi-cube-outline"></span> Utility-first
    </span>
    <span class="text-xs text-subtle fw-semibold">Active Concept</span>
  </div>
  <h2 class="text-[28px] font-extrabold leading-[34px] mb-2">Compose directly in HTML</h2>
  <p class="text-subtle leading-[24px] mb-5">...</p>
  <button class="btn btn-primary hover:bg-primary/80 transition duration-[200ms] hstack gap-2">
    Continue Reading <span class="mdi mdi-arrow-right"></span>
  </button>
</article>
```

## Mix Components & Utilities

Components provide a stable, standard, accessible base. Utilities let you customize spacing, colors, layouts, and interactive behaviors on top without code bloat.

::html
<div class="docs-preview py-4 flex gap-3 flex-wrap items-center">
  <button class="btn btn-outline-primary px-4 py-3 rounded-full hstack gap-2 hover:bg-primary/10 transition">
    <span class="mdi mdi-filter-variant"></span> Filter Results
  </button>
  <button class="btn btn-soft-danger px-4 py-3 rounded-full hstack gap-2 hover:bg-danger/20 transition">
    <span class="mdi mdi-trash-can-outline"></span> Delete Account
  </button>
</div>
::end

```html
<button class="btn btn-outline-primary px-4 py-3 rounded-full hstack gap-2 hover:bg-primary/10 transition">
  <span class="mdi mdi-filter-variant"></span> Filter Results
</button>
```

## Strict Class Grammar & Order

Aksara UI features a highly scalable, predictable utility naming syntax. To keep class names readable and the runtime engine small, variants must adhere strictly to the following composition order:

```text
[theme:][breakpoint:][state:]utility[-value][/level]
```

### 1. Strict Variant Order Rule

Variants **MUST ONLY** be composed in the following order. Both the stylesheet generator and the runtime engine reject out-of-order combinations: an unknown or misordered variant produces no CSS rule at all.

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
- **State variants**: `hover`, `focus`, `active`, `disabled`, `checked`, `selected`, `visited`, `first`, `last`, `odd`, `even`, plus `group-hover` (styles a child while a `.group` ancestor is hovered)

The stylesheet precompiles the most common variants: responsive layout classes (`md:col-6`, `lg:d-flex`, `md:gap-3`, `md:sticky-top`, ...) and `hover:`/`focus:`/`active:` for colors, `bg-body`, `bg-subtle`, `bg-transparent`, `text-body`, `border`, `border-subtle`, `underline` and `ring`. Every other valid combination (`md:text-center`, `last:border-0`, `disabled:opacity-[.5]`) is generated on demand by `Aksara.init()`.

### 3. Color Alpha Levels

Slash `/` is exclusively used to denote color opacity levels (from `0` to `100`% alpha). It works with the `bg-`, `text-`, `border-`, `decoration-` and `ring-` prefixes and the palette colors `primary`, `secondary`, `tertiary`, `success`, `danger`, `warning`, `info`, `dark` and `light`. The rules are generated on demand by `Aksara.init()`:

- `bg-primary/10` = Primary background with 10% opacity
- `text-danger/80` = Danger text color with 80% opacity
- `border-dark/10` = Dark border color with 10% opacity

Surface tokens such as `bg-body` or `border-subtle` have no opacity form; use an arbitrary value instead (`border-[rgb(var(--aksara-dark)/.1)]`).

---

## Aksara Core Differences

- **Static First, Runtime When Needed**: Components and utility scales are precompiled. Only arbitrary, opacity and extra variant classes are generated in the browser, and only when they appear in the DOM. No Node.js build step is needed.
- **Strict Logical Grammar**: Predictable order prevents inconsistent, competing responsive declarations.
- **RTL-First Logical Layouts**: Fully native logical properties (e.g. `ms-*` using `margin-inline-start`) instead of physical offsets (`ml-*`, `pl-*`).
- **Gentle UI Color Palette**: Flat, soft, sleek visual styles suited for high-end professional dashboards.
