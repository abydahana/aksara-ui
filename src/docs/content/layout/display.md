# Display

Display utilities control layout behavior and visibility.

## Block And Inline

::html
<div class="docs-preview">
  <span class="block p-3 bg-primary/10 rounded-[12px]">block</span>
  <span class="inline-block p-3 bg-success/10 rounded-[12px]">inline-block</span>
</div>
::end

```html
<span class="block">block</span> <span class="inline-block">inline-block</span>
```

## Flex And Grid

::html
<div class="docs-preview">
  <div class="flex gap-3">
    <div class="p-3 bg-primary/10 rounded-[12px]">flex</div>
    <div class="p-3 bg-primary/10 rounded-[12px]">item</div>
  </div>
  <div class="grid-3 gap-3">
    <div class="p-3 bg-success/10 rounded-[12px]">grid</div>
    <div class="p-3 bg-success/10 rounded-[12px]">item</div>
    <div class="p-3 bg-success/10 rounded-[12px]">item</div>
  </div>
</div>
::end

```html
<div class="flex gap-3">...</div>
<div class="grid-3 gap-3">...</div>
```

## Hiding Content

```html
<div class="hidden">Hidden content</div>
<div class="d-none">Bootstrap-like alias</div>
```
