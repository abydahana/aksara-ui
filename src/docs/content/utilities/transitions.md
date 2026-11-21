# Transitions

Transition utilities provide common duration and easing presets.

::html
<div class="docs-preview">
  <button class="btn btn-primary transition duration-[200ms] ease-in-out hover:bg-primary/80">
    Hover transition
  </button>
</div>
::end

```html
<button class="transition duration-[200ms] ease-in-out hover:bg-primary/80">Hover</button>
```

Available:

- `transition`
- `transition-fast`
- `transition-slow`
- `duration-[…]`: any duration, generated on demand (`duration-[150ms]`, `duration-[1s]`); there is no numeric `duration-200`
- `ease-linear`
- `ease-in`
- `ease-out`
- `ease-in-out`
