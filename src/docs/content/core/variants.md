# Strict Variant Grammar

Aksara UI uses a highly advanced, structured, and predictable variant grammar to apply utilities conditionally. This keeps utility-first class lists structured, clean, and highly readable.

---

## The Grammar Pattern

Combined utility class names MUST always follow this single, strict direction:

```text
[theme:][breakpoint:][state:]utility[-value][/level]
```

To ensure predictable compilation and uniform readability across the entire code base, variants **must only** be composed in this exact structural hierarchy:

```text
Theme ➔ Breakpoint ➔ State ➔ Utility
```

- **Theme**: `dark` or `light`
- **Breakpoint**: `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
- **State**: `hover`, `focus`, `active`, `disabled`, `checked`, `selected`, `visited`, `first`, `last`, `odd`, `even`
- **Utility**: Spacing, borders, displays, typography, colors, animations, etc.

---

## Valid vs Invalid Stacking

The precompiler and parser **will reject** class declarations that violate this order. This guarantees that utility classes are easily scan-readable.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 50%;">✅ Valid Class Syntax</th>
        <th style="width: 50%;">❌ Invalid Class Syntax</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>dark:md:hover:border-primary</code><br><span class="text-subtle text-xs">Correct: Theme ➔ Breakpoint ➔ State ➔ Utility</span></td>
        <td><code>md:dark:hover:border-primary</code><br><span class="text-subtle text-xs">Incorrect: Breakpoint before Theme</span></td>
      </tr>
      <tr>
        <td><code>dark:lg:focus:bg-primary/20</code><br><span class="text-subtle text-xs">Correct: Theme ➔ Breakpoint ➔ State ➔ Utility</span></td>
        <td><code>focus:dark:lg:bg-primary</code><br><span class="text-subtle text-xs">Incorrect: State before Theme and Breakpoint</span></td>
      </tr>
      <tr>
        <td><code>hover:bg-primary/85</code><br><span class="text-subtle text-xs">Correct: State ➔ Utility</span></td>
        <td><code>bg-primary/85:hover</code><br><span class="text-subtle text-xs">Incorrect: Modifier trailing after utility</span></td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Breakpoint Reference

Aksara UI uses a mobile-first responsive architecture. Unprefixed utilities apply universally across all screen widths. Breakpoint-prefixed classes activate starting at the designated screen width and remain active as viewports grow larger.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 20%;">Breakpoint</th>
        <th style="width: 30%;">Minimum Width</th>
        <th style="width: 50%;">Example Class</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>sm</code></td>
        <td><code>576px</code></td>
        <td><code>sm:col-6</code></td>
      </tr>
      <tr>
        <td><code>md</code></td>
        <td><code>768px</code></td>
        <td><code>md:col-4</code></td>
      </tr>
      <tr>
        <td><code>lg</code></td>
        <td><code>992px</code></td>
        <td><code>lg:col-3</code></td>
      </tr>
      <tr>
        <td><code>xl</code></td>
        <td><code>1200px</code></td>
        <td><code>xl:hidden</code></td>
      </tr>
      <tr>
        <td><code>2xl</code></td>
        <td><code>1400px</code></td>
        <td><code>2xl:p-8</code></td>
      </tr>
      <tr>
        <td><code>3xl</code></td>
        <td><code>1600px</code></td>
        <td><code>3xl:max-w-1000</code></td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## State & Pseudo-class Reference

States apply custom classes during interactive triggers or structural conditions inside the DOM:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">State</th>
        <th style="width: 35%;">Underlying CSS Pseudo-class</th>
        <th style="width: 40%;">Example Usage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>hover</code></td>
        <td><code>:hover</code></td>
        <td><code>hover:bg-primary/80</code></td>
      </tr>
      <tr>
        <td><code>focus</code></td>
        <td><code>:focus</code></td>
        <td><code>focus:ring-2</code></td>
      </tr>
      <tr>
        <td><code>active</code></td>
        <td><code>:active</code></td>
        <td><code>active:scale-95</code></td>
      </tr>
      <tr>
        <td><code>disabled</code></td>
        <td><code>:disabled</code></td>
        <td><code>disabled:opacity-50</code></td>
      </tr>
      <tr>
        <td><code>checked</code></td>
        <td><code>:checked</code></td>
        <td><code>checked:bg-success</code></td>
      </tr>
      <tr>
        <td><code>selected</code></td>
        <td><code>[aria-selected="true"]</code></td>
        <td><code>selected:text-primary</code></td>
      </tr>
      <tr>
        <td><code>visited</code></td>
        <td><code>:visited</code></td>
        <td><code>visited:text-subtle</code></td>
      </tr>
      <tr>
        <td><code>first</code></td>
        <td><code>:first-child</code></td>
        <td><code>first:border-top-0</code></td>
      </tr>
      <tr>
        <td><code>last</code></td>
        <td><code>:last-child</code></td>
        <td><code>last:border-bottom-0</code></td>
      </tr>
      <tr>
        <td><code>odd</code></td>
        <td><code>:nth-child(odd)</code></td>
        <td><code>odd:bg-subtle</code></td>
      </tr>
      <tr>
        <td><code>even</code></td>
        <td><code>:nth-child(even)</code></td>
        <td><code>even:bg-body</code></td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Live Grammar Demo

Hover and focus the elements below to witness responsive, state-based, and themed variants working in harmony.

::html
<div class="docs-preview">
  <div class="p-6 rounded-16 border border-subtle bg-body transition duration-200 dark:md:hover:border-primary/80 hover:shadow-md">
    <h4 class="mt-0 mb-2 font-700 hstack gap-2"><span class="mdi mdi-layers-outline text-primary"></span> Responsive Hover Wrapper</h4>
    <p class="text-subtle text-sm mb-4 mt-0">
      This box transitions its border color on hover when viewed on viewports <code>md</code> and larger.
    </p>
    <button class="btn btn-soft-primary hover:bg-primary text-primary hover:text-light transition duration-150 hstack gap-2">
      <span class="mdi mdi-gesture-tap"></span> Interactive State Button
    </button>
  </div>
</div>
::end

```html
<!-- Border changes on hover at medium viewports, with a transition -->
<div class="border border-subtle dark:md:hover:border-primary/80 transition duration-200">...</div>

<!-- Button changes text & background colors smoothly on hover -->
<button
  class="btn btn-soft-primary hover:bg-primary text-primary hover:text-light transition duration-150 hstack gap-2"
>
  <span class="mdi mdi-gesture-tap"></span> Interactive State Button
</button>
```
