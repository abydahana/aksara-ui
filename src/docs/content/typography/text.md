# Text

Text utilities control alignment, transform, whitespace, decoration, and overflow.

## Alignment

```html
<p class="text-start">Start aligned</p>
<p class="text-center">Centered</p>
<p class="text-end">End aligned</p>
```

## Transform And Decoration

::html
<div class="docs-preview">
  <p class="uppercase font-700">Uppercase text</p>
  <p class="capitalize underline decoration-primary">decorated text</p>
  <p class="line-through text-subtle">Removed text</p>
</div>
::end

```html
<p class="uppercase">Uppercase</p>
<p class="underline decoration-primary">Underlined</p>
<p class="line-through">Removed</p>
```

## Overflow

```html
<p class="truncate" style="max-width:320px;">Very long text that should truncate...</p>
<p class="break-words">Long words can wrap safely.</p>
```
