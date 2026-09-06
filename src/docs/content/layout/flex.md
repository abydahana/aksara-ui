# Flex

Flex utilities cover direction, wrapping, alignment, justification, grow, and shrink.

## Direction And Wrap

::html
<div class="docs-preview">
  <div class="flex flex-wrap gap-3">
    <div class="p-3 bg-primary/10 rounded-12">One</div>
    <div class="p-3 bg-primary/10 rounded-12">Two</div>
    <div class="p-3 bg-primary/10 rounded-12">Three</div>
  </div>
</div>
::end

```html
<div class="flex flex-wrap gap-3">...</div>
<div class="flex flex-col gap-3">...</div>
```

## Alignment

::html
<div class="docs-preview">
  <div class="flex items-center justify-between p-5 bg-subtle rounded-12">
    <span>Aligned start</span>
    <button class="btn btn-primary">Action</button>
  </div>
</div>
::end

```html
<div class="flex items-center justify-between">...</div>
```

## Flex Items

```html
<div class="flex">
  <div class="flex-1">Flexible</div>
  <div class="flex-none">Fixed</div>
</div>
```
