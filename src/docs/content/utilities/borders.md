# Borders

Border utilities include width, color, logical sides, axes, and radius.

::html
<div class="docs-preview">
  <div class="p-5 border border-primary/30 rounded-12">border</div>
  <div class="p-5 border-start border-end border-danger/50 rounded-12">logical sides</div>
  <div class="p-5 border border-subtle rounded-full">rounded-full</div>
</div>
::end

```html
<div class="border">Default border</div>
<div class="border-2 border-primary/30">Width and color</div>
<div class="border-top border-bottom border-start border-end">Logical sides</div>
<div class="border-x border-y">Logical axes</div>
<div class="rounded-12 rounded-full rounded-pill rounded-circle">Radius</div>
```

Directional border names use full words. Aksara does not generate `border-t`, `border-b`, `border-s`, or `border-e`.
