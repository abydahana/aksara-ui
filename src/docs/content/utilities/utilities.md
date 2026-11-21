# Utilities

Utilities for colors, spacing, sizing, borders, display, position, flex, effects, motion, and transforms ship in the static stylesheet on small, predictable scales. Arbitrary values (`w-[50%]`), color opacity levels (`bg-primary/10`) and less common variants (`last:border-0`) are generated on demand by `Aksara.init()` when they appear in the DOM.

::html
<div class="docs-preview">
  <div class="p-5 bg-primary/10 text-primary border border-primary/20 rounded-[12px]">Color alpha utilities</div>
  <div class="flex gap-3">
    <div class="bg-success/10 rounded-[12px]" style="width:80px;height:80px;"></div>
    <div class="bg-warning/10 rounded-[12px] scale-[.95]" style="width:80px;height:80px;"></div>
  </div>
</div>
::end

```text
bg-primary/10 text-primary border-primary/20
m-4 mx-3 -mx-3 ps-5 pe-5
w-[50%] w-100 w-[320px] mw-100
transition duration-[200ms] ease-in-out
scale-[.95] rotate-[45deg] translate-x-[10px]
```
