# Utilities

Aksara UI ships prebuilt static utilities. There is no JIT compiler and no runtime CSS generation.

## Class Grammar

```text
[theme:][breakpoint:][state:]utility[-value][/level]
```

Examples:

```html
<div class="dark:md:hover:border-primary bg-primary/10 text-primary/80 p-4 rounded-md"></div>
```

Variant order is strict:

```text
theme -> breakpoint -> state -> utility
```

## Colors

The semantic UI palette is flat and soft:

- `primary`
- `secondary`
- `success`
- `danger`
- `warning`
- `info`
- `dark`
- `light`

Use semantic utility names:

```html
<div class="bg-primary text-light border-primary"></div>
<div class="bg-primary/10 text-primary border-primary/20"></div>
```

Literal color names such as `bg-red`, `bg-blue`, `text-white`, and `text-black` are not generated.

Adaptive theme utilities use CSS variables:

```html
<section class="bg-body text-body border-subtle"></section>
<section class="bg-subtle text-subtle border-body"></section>
<section class="bg-invert text-invert border-invert"></section>
```

## Spacing

Spacing utilities use a Bootstrap-compatible scale from `0` to `5` (`0`, `1`, `2`, `3`, `4`, `5`).

```html
<div class="m-3 mt-2 mb-4 ms-2 me-2 mx-3 my-4"></div>
<div class="p-4 pt-2 pb-2 ps-3 pe-3 px-4 py-5"></div>
<div class="gap-3 row-gap-2 col-gap-2"></div>
```

Negative margin uses a leading dash (`-m-1` through `-m-5`):

```html
<div class="-m-3 -mx-2 -ms-1"></div>
```

## RTL Logical Naming

Use logical start/end utilities:

```html
<div class="ms-3 me-3 ps-4 pe-4 text-start"></div>
```

Do not use left/right utility names. Aksara UI does not generate `ml-*`, `mr-*`, `pl-*`, or `pr-*`.

## Sizing

Sizing utilities include percentage and fraction classes:

```html
<div class="w-25 w-50 w-75 w-100"></div>
<div class="w-1/2 w-1/3 w-2/3 w-1/4 w-3/4"></div>
<div class="mw-100 mh-100 vh-100 vw-100"></div>
```

## Border And Radius

```html
<div class="border border-primary/30 rounded-md"></div>
<div class="border-top border-bottom border-start border-end"></div>
<div class="rounded-sm rounded-md rounded-lg rounded-xl rounded-full"></div>
```

Directional border names use full words. Aksara UI does not generate `border-t`, `border-b`, `border-s`, or `border-e`.

## Layout

```html
<div class="container">
  <div class="row gap-4">
    <div class="col-12 md:col-6 lg:col-4"></div>
  </div>
</div>
```

CSS grid utilities:

```html
<div class="grid-3 gap-4">
  <div class="span-2"></div>
</div>
```

## Typography

```html
<p class="text-14 font-700 leading-24 tracking-2 uppercase truncate"></p>
<p class="text-start md:text-center"></p>
```

Color and font-size share the `text-*` namespace. Numeric values are font sizes, while palette values are colors:

```html
<p class="text-14 text-primary/80"></p>
```

## Motion And Effects

```html
<button class="transition duration-200 ease-in-out hover:bg-primary/80"></button>
<div class="scale-95 rotate-45 translate-x-10 opacity-80 shadow-md"></div>
```

## Visibility And Media

```html
<div class="visible invisible"></div>
<img class="aspect-video object-cover" alt="" />
<textarea class="resize-y"></textarea>
```
