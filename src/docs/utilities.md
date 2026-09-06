# Utilities

Aksara UI ships prebuilt static utilities. There is no JIT compiler and no runtime CSS generation.

## Class Grammar

```text
[theme:][breakpoint:][state:]utility[-value][/level]
```

Examples:

```html
<div class="dark:md:hover:border-primary bg-primary/10 text-primary/80 p-20 rounded-12"></div>
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

Spacing utilities use pixels from `0` to `100`.

```html
<div class="m-15 mt-10 mb-20 ms-10 me-10 mx-20 my-30"></div>
<div class="p-20 pt-10 pb-10 ps-20 pe-20 px-30 py-40"></div>
<div class="gap-20 row-gap-10 col-gap-10"></div>
```

Negative spacing uses a leading dash:

```html
<div class="-m-10 -mx-10 -ms-5"></div>
```

## RTL Logical Naming

Use logical start/end utilities:

```html
<div class="ms-10 me-10 ps-20 pe-20 text-start"></div>
```

Do not use left/right utility names. Aksara UI does not generate `ml-*`, `mr-*`, `pl-*`, or `pr-*`.

## Sizing

Numeric sizing is pixel-based from `0` to `1000`. Use fraction width utilities when you need percentages.

```html
<div class="w-320 h-180 min-w-120 max-w-640"></div>
```

Fraction width and percent height sizing:

```html
<div class="w-1/2 h-100%"></div>
```

Aliases:

```html
<div class="w-full h-full w-screen h-screen"></div>
```

## Border And Radius

```html
<div class="border border-primary/30 rounded-12"></div>
<div class="border-top border-bottom border-start border-end"></div>
<div class="rounded-sm rounded-md rounded-lg rounded-xl rounded-full"></div>
```

Directional border names use full words. Aksara UI does not generate `border-t`, `border-b`, `border-s`, or `border-e`.

## Layout

```html
<div class="container">
  <div class="row gap-20">
    <div class="col-12 md:col-6 lg:col-4"></div>
  </div>
</div>
```

CSS grid utilities:

```html
<div class="grid-3 gap-20">
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
