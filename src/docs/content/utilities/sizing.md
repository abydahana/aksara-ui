# Sizing

Sizing utilities cover pixel widths, pixel heights, min/max constraints, fraction widths, and viewport aliases. Numeric utilities such as `w-100`, `max-w-100`, `h-100`, and `max-h-100` use pixels. Percent widths use fractions such as `w-1/2`, `w-1/3`, or `w-2/5`.

::html
<div class="docs-preview">
  <div class="w-240 h-80 bg-primary/10 border border-primary/20 rounded-12"></div>
  <div class="w-1/2 h-60 bg-success/10 border border-success/20 rounded-12"></div>
</div>
::end

```html
<div class="w-240 h-80">240px width, 80px height</div>
<div class="min-w-160 max-w-640">Min/max width in pixels</div>
<div class="w-1/2 h-100%">50% width, 100% height</div>
<div class="w-full h-full">Full parent</div>
<div class="w-screen h-screen">Viewport</div>
```

## Width Scale

```html
<div class="w-0">0px</div>
<div class="w-100">100px</div>
<div class="w-320">320px</div>
<div class="w-1000">1000px</div>
```

## Fraction Widths

```html
<div class="w-1/2">50%</div>
<div class="w-1/3">33.333%</div>
<div class="w-2/3">66.667%</div>
<div class="w-2/5">40%</div>
<div class="w-3/4">75%</div>
```

## Height Scale

```html
<div class="h-0">0px</div>
<div class="h-80">80px</div>
<div class="h-320">320px</div>
<div class="h-1000">1000px</div>
```

## Min And Max

```html
<div class="min-w-160 max-w-640">Width constrained</div>
<div class="min-h-120 max-h-320">Height constrained</div>
```

Use fraction widths when you want a percentage relationship to the parent:

```html
<div class="w-1/2">Half width</div>
<div class="w-2/5">Two fifths</div>
```
