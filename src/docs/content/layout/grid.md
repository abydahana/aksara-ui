# Layout & Grid

Use Bootstrap-like containers, rows, columns, offsets, plus CSS grid utilities.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6 lg:col-4"><div class="bg-primary/10 p-5 rounded-12">col</div></div>
    <div class="col-12 md:col-6 lg:col-4"><div class="bg-success/10 p-5 rounded-12">col</div></div>
    <div class="col-12 lg:col-4"><div class="bg-warning/10 p-5 rounded-12">col</div></div>
  </div>
  <div class="grid-3 gap-3">
    <div class="span-2 bg-info/10 p-5 rounded-12">span-2</div>
    <div class="bg-danger/10 p-5 rounded-12">1</div>
  </div>
</div>
::end

```html
<div class="container">
  <div class="row gap-5">
    <div class="col-12 md:col-6 lg:col-4">...</div>
  </div>
</div>

<div class="grid-3 gap-5"><div class="span-2">...</div></div>
```
