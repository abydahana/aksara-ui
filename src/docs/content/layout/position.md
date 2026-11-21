# Position

Position utilities use logical inset names for RTL-friendly placement.

## Position Values

```html
<div class="static">...</div>
<div class="relative">...</div>
<div class="absolute">...</div>
<div class="fixed">...</div>
<div class="sticky">...</div>
```

## Logical Inset

::html
<div class="docs-preview">
  <div class="relative bg-subtle rounded-md" style="height: 10rem;">
    <div class="absolute top-3 start-3 p-3 bg-primary/10 rounded-md">top start</div>
    <div class="absolute bottom-3 end-3 p-3 bg-success/10 rounded-md">bottom end</div>
  </div>
</div>
::end

```html
<div class="absolute top-3 start-3">...</div>
<div class="absolute bottom-3 end-3">...</div>
```

## Inset Scale

Inset utilities use the standard integer scale `0..5` matching padding and margin:

- `0`: `0`
- `1`: `0.25rem`
- `2`: `0.5rem`
- `3`: `1rem`
- `4`: `1.5rem`
- `5`: `3rem`

```html
<div class="top-0">top 0</div>
<div class="top-1">top 0.25rem</div>
<div class="top-2">top 0.5rem</div>
<div class="top-3">top 1rem</div>
<div class="top-4">top 1.5rem</div>
<div class="top-5">top 3rem</div>
<div class="bottom-3">bottom 1rem</div>
<div class="start-3">inline start 1rem</div>
<div class="end-3">inline end 1rem</div>
<div class="inset-3">all sides 1rem</div>
<div class="inset-x-3">inline axis 1rem</div>
<div class="inset-y-3">block axis 1rem</div>
```

## Negative Inset

```html
<div class="-top-1">negative top 0.25rem</div>
<div class="-top-3">negative top 1rem</div>
<div class="-bottom-2">negative bottom 0.5rem</div>
<div class="-start-3">negative start 1rem</div>
<div class="-end-3">negative end 1rem</div>
```

## Arbitrary Inset

For custom pixels, percentages, or arbitrary spacing, use bracketed arbitrary syntax:

```html
<div class="top-[50%]">top 50%</div>
<div class="top-[2.5rem]">top 2.5rem</div>
<div class="start-[20px]">inline start 20px</div>
<div class="inset-inline-start-[3.25rem]">inset inline start 3.25rem</div>
<div class="-top-[10px]">negative top 10px</div>
```

## Z Index

```html
<div class="z-[1]">Local stacking layer</div>
<div class="z-[1050]">Arbitrary layer</div>
<div class="z-auto">Auto layer</div>
```
