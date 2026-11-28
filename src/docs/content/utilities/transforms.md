# Transforms

Transform utilities cover scale, rotate, translate, and skew.

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="rounded-[12px] bg-primary/10 scale-[.95] w-[80px] h-[80px]"></div>
    <div class="rounded-[12px] bg-success/10 rotate-[45deg] w-[80px] h-[80px]"></div>
    <div class="rounded-[12px] bg-warning/10 translate-x-[10px] w-[80px] h-[80px]"></div>
  </div>
</div>
::end

```html
<div class="scale-[.95]">Scale</div>
<div class="rotate-[45deg]">Rotate</div>
<div class="translate-x-[10px] translate-y-[10px]">Translate</div>
<div class="skew-x-[10deg] skew-y-[10deg]">Skew</div>
```

Current transform utilities write the `transform` property directly. Use one transform utility at a time unless you intentionally override the previous transform.
