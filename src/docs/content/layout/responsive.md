# Responsive

Aksara UI precompiles the responsive variants of layout utilities: `col-*`, `d-*`, `flex`, `grid`, `hidden`, `flex-row` / `flex-col`, `g-*` / `gx-*` / `gy-*`, `gap-*` and `sticky-top` / `sticky-bottom` (`md:col-6`, `lg:d-flex`, `md:gap-3`, `md:sticky-top`). Breakpoints are always a prefix: Bootstrap infix names such as `col-md-6` or `sticky-md-top` do not exist. Breakpoint variants of any other utility (`md:text-center`, `lg:p-5`, `md:w-[50%]`) are generated on demand by `Aksara.init()` the first time they appear in the DOM.

## Breakpoints

Default breakpoints:

- `sm`: 576px
- `md`: 768px
- `lg`: 992px
- `xl`: 1200px
- `2xl`: 1400px
- `3xl`: 1600px

Responsive variants follow the strict grammar:

```text
[theme:][breakpoint:][state:]utility[-value][/level]
```

Valid:

```text
md:col-6
lg:col-4
2xl:col-3
dark:md:hover:border-primary
```

Invalid:

```text
md:dark:hover:border
hover:md:border
focus:dark:lg:bg-primary
```

## Responsive Grid

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6 lg:col-4 2xl:col-3">
      <div class="p-5 rounded-[12px] bg-primary/10 border border-primary/20">12 / 6 / 4 / 3</div>
    </div>
    <div class="col-12 md:col-6 lg:col-4 2xl:col-3">
      <div class="p-5 rounded-[12px] bg-success/10 border border-success/20">12 / 6 / 4 / 3</div>
    </div>
    <div class="col-12 md:col-6 lg:col-4 2xl:col-3">
      <div class="p-5 rounded-[12px] bg-warning/10 border border-warning/20">12 / 6 / 4 / 3</div>
    </div>
    <div class="col-12 md:col-6 lg:col-4 2xl:col-3">
      <div class="p-5 rounded-[12px] bg-info/10 border border-info/20">12 / 6 / 4 / 3</div>
    </div>
  </div>
</div>
::end

```html
<div class="row gap-3">
  <div class="col-12 md:col-6 lg:col-4 2xl:col-3">...</div>
</div>
```

## Responsive Display

Use responsive display utilities to progressively reveal or change layout.

::html
<div class="docs-preview">
  <div class="block md:flex gap-3">
    <div class="p-5 rounded-[12px] bg-primary/10">Block on small screens</div>
    <div class="p-5 rounded-[12px] bg-secondary/10">Flex from md and up</div>
  </div>
</div>
::end

```html
<div class="block md:flex gap-3">
  <div>Block on small screens</div>
  <div>Flex from md and up</div>
</div>
```

## Responsive State With Theme

Theme, breakpoint, and state variants must stay in order.

```html
<div class="border border-subtle dark:md:hover:border-primary">
  Border changes only on dark theme, md and up, while hovered.
</div>
```

## Practical Card Layout

::html
<div class="docs-preview">
  <article class="card p-5 bg-body text-body border border-subtle rounded-[12px] dark:md:hover:border-primary transition duration-[200ms]">
    <h2 class="card-title">Responsive card</h2>
    <p class="card-text">The hover border variant only applies from md screens in dark mode.</p>
  </article>
</div>
::end

```html
<article
  class="card p-5 bg-body text-body border border-subtle rounded-[12px] dark:md:hover:border-primary transition duration-[200ms]"
>
  ...
</article>
```
