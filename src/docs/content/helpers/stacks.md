# Stacks

Stacks are shorthand helpers for flex layouts.

::html
<div class="docs-preview">
  <div class="vstack" style="--aksara-stack-gap: 12px;">
    <div class="p-3 bg-primary/10 rounded-12">First</div>
    <div class="p-3 bg-primary/10 rounded-12">Second</div>
  </div>
  <div class="hstack" style="--aksara-stack-gap: 12px;">
    <div class="p-3 bg-success/10 rounded-12">Left</div>
    <div class="vr"></div>
    <div class="p-3 bg-success/10 rounded-12">Right</div>
  </div>
</div>
::end

```html
<div class="vstack" style="--aksara-stack-gap: 12px;">...</div>
<div class="hstack" style="--aksara-stack-gap: 12px;">...</div>
<div class="vr"></div>
```
