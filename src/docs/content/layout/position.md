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
  <div class="relative bg-subtle rounded-md h-[10rem]">
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

## Negative Offsets

There are no `-`-prefixed classes. Write the negative value in an arbitrary inset instead: `top-[-.5rem]`, `end-[-.75rem]`, `inset-x-[-1rem]`. It pushes an absolutely positioned element outside its positioned parent, for badges that overhang a card corner, remove buttons on thumbnails, or a "Popular" label sitting on a pricing card's top edge. `start-*` and `end-*` are logical, so they swap sides in RTL.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row gap-5 items-end pt-4">
    <div class="relative w-[150px] h-[96px] rounded-md border-2 border-dashed border-subtle">
      <span class="absolute top-[-1rem] start-[-1rem] badge badge-soft-primary">top-[-1rem] start-[-1rem]</span>
      <span class="absolute bottom-[-.5rem] end-[-1rem] badge badge-soft-success">bottom-[-.5rem] end-[-1rem]</span>
    </div>

    <div class="relative">
      <div class="w-[96px] h-[96px] rounded-md [background:linear-gradient(150deg,#c9d6df,#2f4858)]" role="img" aria-label="Uploaded photo"></div>
      <button class="absolute top-[-.5rem] end-[-.5rem] btn btn-plain btn-icon btn-sm rounded-full" type="button" aria-label="Remove photo"><span class="mdi mdi-close"></span></button>
    </div>

    <div class="relative w-[200px]">
      <div class="card">
        <div class="card-body vstack gap-1">
          <span class="text-sm text-subtle">Pro</span>
          <span class="text-2xl fw-bold">$15<span class="text-sm text-subtle fw-semibold"> / mo</span></span>
        </div>
      </div>
      <div class="absolute top-[-.75rem] inset-x-0 hstack justify-center">
        <span class="badge badge-primary rounded-pill">Most popular</span>
      </div>
    </div>

    <div class="relative">
      <button class="btn btn-plain" type="button">Inbox</button>
      <span class="absolute top-[-.5rem] end-[-.5rem] badge badge-danger rounded-pill">12</span>
    </div>

  </div>
</div>
::end

```html
<!-- Remove button overhanging a thumbnail corner -->
<div class="relative">
  <img src="photo.jpg" alt="Uploaded photo" class="rounded-md" />
  <button
    class="absolute top-[-.5rem] end-[-.5rem] btn btn-plain btn-icon btn-sm rounded-full"
    aria-label="Remove photo"
  >
    <span class="mdi mdi-close"></span>
  </button>
</div>

<!-- Label centered on a card's top edge. Cards clip their content (overflow: hidden),
     so position the label on a wrapper instead of inside the card. -->
<div class="relative">
  <div class="card"><div class="card-body">...</div></div>
  <div class="absolute top-[-.75rem] inset-x-0 hstack justify-center">
    <span class="badge badge-primary rounded-pill">Most popular</span>
  </div>
</div>
```

Any length works, including the spacing-scale values:

```html
<div class="top-[-.25rem]">-0.25rem (scale 1)</div>
<div class="top-[-1rem]">-1rem (scale 3)</div>
<div class="bottom-[-.5rem]">-0.5rem (scale 2)</div>
<div class="start-[-1rem]">inline start -1rem</div>
<div class="end-[-10px]">inline end -10px</div>
<div class="inset-[-4px]">all sides -4px (a glow ring around a parent)</div>
```

## Arbitrary Inset

For custom pixels, percentages, or arbitrary spacing, use bracketed arbitrary syntax:

```html
<div class="top-[50%]">top 50%</div>
<div class="top-[2.5rem]">top 2.5rem</div>
<div class="start-[20px]">inline start 20px</div>
<div class="inset-inline-start-[3.25rem]">inset inline start 3.25rem</div>
<div class="top-[-10px]">negative top 10px</div>
```

## Z Index

```html
<div class="z-[1]">Local stacking layer</div>
<div class="z-[1050]">Arbitrary layer</div>
<div class="z-auto">Auto layer</div>
```
