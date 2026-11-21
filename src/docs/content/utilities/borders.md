# Borders

Border utilities include width, color, logical sides, axes, and radius.

::html
<div class="docs-preview">
  <div class="p-5 border border-primary/30 rounded-[12px]">border</div>
  <div class="p-5 border-start border-end border-danger/50 rounded-[12px]">logical sides</div>
  <div class="p-5 border border-subtle rounded-full">rounded-full</div>
</div>
::end

```html
<div class="border">Default border</div>
<div class="border-2 border-primary/30">Width and color</div>
<div class="border-top border-bottom border-start border-end">Logical sides</div>
<div class="border-x border-y">Logical axes</div>
<div class="rounded-[12px] rounded-full rounded-pill rounded-circle">Radius</div>
```

Directional border names use full words. Aksara does not generate `border-t`, `border-b`, `border-s`, or `border-e`.

## Width

`border-0` … `border-5` set the border width in pixels (`0px` … `5px`). Any other width is arbitrary: `border-[6px]`.

## Color

Use the palette colors (`border-primary`, `border-danger`, …), the surface tokens `border-subtle`, `border-body`, `border-transparent` and `border-current`, or an opacity level generated on demand (`border-primary/30`, any level `0`–`100`). Surface tokens have no opacity form; use an arbitrary value such as `border-[rgb(var(--aksara-dark)/.1)]`.

## Radius

| Class                                            | Value                                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `rounded-0`                                      | No radius                                                                                                                       |
| `rounded`                                        | Theme default radius (`--aksara-radius`)                                                                                        |
| `rounded-2xs` … `rounded-3xl`                    | `.125rem`, `.25rem`, `.5rem`, `.75rem`, `1rem`, `1.25rem`, `1.5rem`, `2rem` (`2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`) |
| `rounded-full`, `rounded-pill`, `rounded-circle` | Fully rounded                                                                                                                   |
| `rounded-[12px]`                                 | Arbitrary value, generated on demand                                                                                            |

Directional radius classes use full words as well: `rounded-top-*`, `rounded-bottom-*`, `rounded-start-*`, `rounded-end-*`, `rounded-top-start-*`, `rounded-top-end-*`, `rounded-bottom-start-*` and `rounded-bottom-end-*`, each with the same values (`rounded-top-0`, `rounded-bottom-end-lg`). The short forms `rounded-t-*`, `rounded-b-*`, `rounded-s-*`, `rounded-e-*`, `rounded-tl-*`, `rounded-tr-*`, `rounded-bl-*` and `rounded-br-*` do not exist.
