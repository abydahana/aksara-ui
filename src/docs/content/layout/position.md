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
  <div class="relative h-160 bg-subtle rounded-12">
    <div class="absolute top-20 start-20 p-3 bg-primary/10 rounded-12">top start</div>
    <div class="absolute bottom-20 end-20 p-3 bg-success/10 rounded-12">bottom end</div>
  </div>
</div>
::end

```html
<div class="absolute top-20 start-20">...</div>
<div class="absolute bottom-20 end-20">...</div>
```

## Inset Scale

Inset utilities are generated from `0` to `100`.

```html
<div class="top-0">top 0</div>
<div class="top-20">top 20px</div>
<div class="bottom-20">bottom 20px</div>
<div class="start-20">inline start 20px</div>
<div class="end-20">inline end 20px</div>
<div class="inset-20">all sides 20px</div>
<div class="inset-x-20">inline axis 20px</div>
<div class="inset-y-20">block axis 20px</div>
```

## Negative Inset

```html
<div class="-top-10">negative top</div>
<div class="-bottom-10">negative bottom</div>
<div class="-start-10">negative start</div>
<div class="-end-10">negative end</div>
```

## Z Index

```html
<div class="z-10">Layer</div>
<div class="z-100">Highest generated layer</div>
<div class="z-auto">Auto layer</div>
```
