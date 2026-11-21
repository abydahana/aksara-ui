# Typography

Typography utilities cover font size, weight, decoration, transform, alignment, whitespace, line-height, and tracking.

::html
<div class="docs-preview">
  <p class="text-[32px] font-extrabold leading-[40px] m-0">Large heading text</p>
  <p class="text-sm text-subtle leading-[24px] tracking-[.02em] uppercase">Uppercase label</p>
  <p class="truncate" style="max-width:320px;">This long line truncates when it reaches the fixed width container.</p>
</div>
::end

```html
<p class="text-[32px] font-extrabold leading-[40px]">Heading</p>
<p class="text-sm text-subtle tracking-[.02em] uppercase">Label</p>
<p class="truncate">Long text</p>
```

## Scale

Typography utilities use semantic names only. Numeric forms such as `text-14`, `leading-24` or `tracking-2` do not exist; use an arbitrary value (`text-[13px]`, `leading-[22px]`, `tracking-[.02em]`) instead.

| Utility        | Classes                                                                                                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font size      | `text-xs` (.75rem), `text-sm` (.875rem), `text-base` / `text-base` (1rem), `text-lg`, `text-xl`, `text-2xl` … `text-6xl` (3.75rem)                                                                                                                                                                                                    |
| Font weight    | `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-extrabold`, `font-black`, plus the weight classes `fw-light` (300), `fw-normal` (400), `fw-semibold` (600), `fw-bold` (700), `fw-bolder` (800), `fw-black` (900); `font-semibold` / `font-bold` and numeric weights such as `font-700` do not exist |
| Line height    | `leading-none`, `leading-tight`, `leading-normal`, `leading-relaxed`, `leading-loose`                                                                                                                                                                                                                                                 |
| Letter spacing | `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`                                                                                                                                                                                                                                             |
| Overflow       | `truncate`, `break-words`                                                                                                                                                                                                                                                                                                             |

Muted text uses `text-subtle` (there is no `text-muted`).
