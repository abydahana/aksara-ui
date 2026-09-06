# Display

Display utilities control layout behavior and visibility.

## Block And Inline

::html
<div class="docs-preview">
  <span class="block p-3 bg-primary/10 rounded-12">block</span>
  <span class="inline-block p-3 bg-success/10 rounded-12">inline-block</span>
</div>
::end

```html
<span class="block">block</span> <span class="inline-block">inline-block</span>
```

## Flex And Grid

::html
<div class="docs-preview">
  <div class="flex gap-3">
    <div class="p-3 bg-primary/10 rounded-12">flex</div>
    <div class="p-3 bg-primary/10 rounded-12">item</div>
  </div>
  <div class="grid-3 gap-3">
    <div class="p-3 bg-success/10 rounded-12">grid</div>
    <div class="p-3 bg-success/10 rounded-12">item</div>
    <div class="p-3 bg-success/10 rounded-12">item</div>
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
