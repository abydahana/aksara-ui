# Spinners

Spinners communicate indeterminate loading states when exact progress is unknown.

---

## Basic Spinners

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="spinner" aria-label="Loading"></span>
    <span class="spinner spinner-sm" aria-label="Loading"></span>
    <button class="btn btn-primary"><span class="spinner spinner-sm"></span> Loading</button>
  </div>
</div>
::end

```html
<span class="spinner" aria-label="Loading"></span> <span class="spinner spinner-sm" aria-label="Loading"></span>
```

---

## Button Loading

Use a small spinner inside buttons when an action is in progress. Spinner color follows the button text color through `currentColor`, so it stays visible across solid, soft, and outline variants.

::html
<div class="docs-preview">
  <div class="docs-row flex-wrap">
    <button class="btn btn-primary" type="button" disabled>
      <span class="spinner spinner-sm" aria-hidden="true"></span>
      Saving
    </button>
    <button class="btn btn-soft-primary" type="button">
      Sync
      <span class="spinner spinner-sm" aria-hidden="true"></span>
    </button>
    <button class="btn btn-success" type="button" disabled>
      <span class="spinner spinner-sm" aria-hidden="true"></span>
      Publishing
    </button>
    <button class="btn btn-danger" type="button" disabled>
      <span class="spinner spinner-sm" aria-hidden="true"></span>
      Deleting
    </button>
    <button class="btn btn-warning" type="button" disabled>
      <span class="spinner spinner-sm" aria-hidden="true"></span>
      Processing
    </button>
    <button class="btn btn-outline-primary" type="button">
      <span class="spinner spinner-sm" aria-hidden="true"></span>
      Refresh
    </button>
    <button class="btn btn-soft-danger" type="button">
      Retry
      <span class="spinner spinner-sm" aria-hidden="true"></span>
    </button>
    <button class="btn btn-outline-primary btn-icon" type="button" aria-label="Refreshing">
      <span class="spinner spinner-sm" aria-hidden="true"></span>
    </button>
  </div>
</div>
::end

```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner spinner-sm" aria-hidden="true"></span>
  Saving
</button>

<button class="btn btn-danger" type="button" disabled>
  <span class="spinner spinner-sm" aria-hidden="true"></span>
  Deleting
</button>
```

---

## Alignment Options

Spinners align with existing display and flex utilities. Keep the spinner itself small and let the parent control placement.

::html
<div class="docs-preview vstack gap-4">
  <div class="hstack gap-3 items-center justify-start p-3 bg-subtle rounded-12">
    <span class="spinner spinner-sm" aria-hidden="true"></span>
    <span class="text-sm font-700">Start aligned loading row</span>
  </div>
  <div class="flex items-center justify-center gap-3 p-3 bg-subtle rounded-12">
    <span class="spinner spinner-sm" aria-hidden="true"></span>
    <span class="text-sm font-700">Centered loading row</span>
  </div>
  <div class="flex items-center justify-end gap-3 p-3 bg-subtle rounded-12">
    <span class="text-sm font-700">End aligned loading row</span>
    <span class="spinner spinner-sm" aria-hidden="true"></span>
  </div>
</div>
::end

```html
<div class="flex items-center justify-center gap-3">
  <span class="spinner spinner-sm" aria-hidden="true"></span>
  <span>Loading</span>
</div>
```

---

## Accessibility

Use `aria-label` when the spinner stands alone. If visible text already says what is happening, hide the spinner from assistive technology with `aria-hidden="true"`.
