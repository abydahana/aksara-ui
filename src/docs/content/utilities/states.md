# States

State variants let utilities react to interaction and structural states. `hover:`, `focus:` and `active:` for colors, `bg-body`, `bg-subtle`, `bg-transparent`, `text-body`, `border`, `border-subtle`, `underline` and `ring` are precompiled in the static stylesheet. Every other state variant (`disabled:opacity-[.5]`, `odd:bg-subtle`, `last:border-0`, `hover:bg-primary/80`) is generated on demand by `Aksara.init()` the first time the class appears in the DOM.

## Variant Order

State variants must come after theme and breakpoint variants:

```text
theme -> breakpoint -> state -> utility
```

Valid:

```text
hover:bg-primary/80
focus:border-primary
active:-mx-3
disabled:opacity-[.5]
checked:bg-primary
selected:border-primary
dark:md:hover:border-primary
dark:lg:focus:bg-primary/20
```

Invalid:

```text
hover:md:bg-primary
focus:dark:bg-primary
md:dark:hover:border
```

## Supported States

- `hover`
- `focus`
- `active`
- `disabled`
- `checked`
- `selected`
- `visited`
- `first`
- `last`
- `odd`
- `even`
- `group-hover` (child of a `.group` element that is hovered)

Unknown or misordered variants are ignored: no CSS rule is generated.

## Hover

Use `hover:` for pointer hover states.

::html
<div class="docs-preview">
  <button class="btn btn-primary hover:bg-primary/80">Hover me</button>
  <div class="p-5 rounded-[12px] border border-subtle hover:border-primary transition duration-[200ms]">
    Card border changes on hover.
  </div>
</div>
::end

```html
<button class="btn btn-primary hover:bg-primary/80">Hover me</button>
<div class="border border-subtle hover:border-primary transition duration-[200ms]">...</div>
```

## Focus

Use `focus:` for keyboard and form focus states.

::html
<div class="docs-preview">
  <input class="form-control focus:border-primary" placeholder="Focus this input">
  <button class="btn btn-soft-primary focus:bg-primary/20">Focusable button</button>
</div>
::end

```html
<input class="form-control focus:border-primary" />
<button class="btn btn-soft-primary focus:bg-primary/20">Focusable button</button>
```

## Active

Use `active:` for pressed states.

::html
<div class="docs-preview">
  <button class="btn btn-soft-danger active:bg-danger/20">Press me</button>
</div>
::end

```html
<button class="btn btn-soft-danger active:bg-danger/20">Press me</button>
```

## Disabled

Use `disabled:` with real disabled controls. For non-form elements, use the `.disabled` component helper where available.

::html
<div class="docs-preview">
  <button class="btn btn-primary disabled:opacity-[.5]" disabled>Disabled button</button>
</div>
::end

```html
<button class="btn btn-primary disabled:opacity-[.5]" disabled>Disabled button</button>
```

## Checked

Use `checked:` with checkboxes and radios.

::html
<div class="docs-preview">
  <label class="form-check">
    <input type="checkbox" class="checked:ring checked:ring-primary" checked>
    <span>Checked option</span>
  </label>
</div>
::end

```html
<input type="checkbox" class="checked:ring checked:ring-primary" />
```

## Selected

Use `selected:` with elements using `aria-selected="true"`, such as tabs.

::html
<div class="docs-preview">
  <div class="tabs" role="tablist">
    <button class="tab selected:bg-primary/10 selected:text-primary" aria-selected="true">Selected</button>
    <button class="tab selected:bg-primary/10 selected:text-primary" aria-selected="false">Idle</button>
  </div>
</div>
::end

```html
<button class="tab selected:bg-primary/10 selected:text-primary" aria-selected="true">Selected</button>
```

## Theme And Breakpoint State

Combine variants only in the strict order.

```html
<div class="dark:md:hover:border-primary">Dark theme, md breakpoint, hover state.</div>

<button class="dark:lg:focus:bg-primary/20">Dark theme, lg breakpoint, focus state.</button>
```

## Structural States

Use structural states for repeated items.

::html
<div class="docs-preview">
  <ul class="grid gap-2 p-0 [list-style:none]">
    <li class="p-3 rounded-[12px] border border-subtle first:border-primary odd:bg-primary/10 even:bg-success/10">First odd item</li>
    <li class="p-3 rounded-[12px] border border-subtle first:border-primary odd:bg-primary/10 even:bg-success/10">Even item</li>
    <li class="p-3 rounded-[12px] border border-subtle last:border-danger odd:bg-primary/10 even:bg-success/10">Last odd item</li>
  </ul>
</div>
::end

```html
<li class="first:border-primary last:border-danger odd:bg-primary/10 even:bg-success/10">Item</li>
```

## Visited Links

```html
<a class="text-primary visited:text-secondary" href="/docs"> Visited link </a>
```
