# Transforms

Transform utilities cover scale, rotate, translate, and skew.

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="rounded-12 bg-primary/10 scale-95" style="width:80px;height:80px;"></div>
    <div class="rounded-12 bg-success/10 rotate-45" style="width:80px;height:80px;"></div>
    <div class="rounded-12 bg-warning/10 translate-x-10" style="width:80px;height:80px;"></div>
  </div>
</div>
::end

```html
<div class="scale-95">Scale</div>
<div class="rotate-45">Rotate</div>
<div class="translate-x-10 translate-y-10">Translate</div>
<div class="skew-x-10 skew-y-10">Skew</div>
```

Current transform utilities write the `transform` property directly. Use one transform utility at a time unless you intentionally override the previous transform.
