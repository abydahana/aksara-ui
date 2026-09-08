# Skeleton

Skeleton loaders render component-shaped placeholders while content is loading, creating a smoother and more responsive user experience compared to a plain loading spinner.

---

## Interactive Examples

::html
<div class="docs-preview py-4">
  <div class="card p-4 w-full" style="max-width: 28rem; bg-body border border-subtle">
    <!-- Profile Card Skeleton -->
    <div class="hstack gap-3 items-center mb-4">
      <div class="skeleton skeleton-circle skeleton-wave" style="width: 3rem; height: 3rem;"></div>
      <div class="grow">
        <div class="skeleton skeleton-text skeleton-wave mb-2" style="width: 50%;"></div>
        <div class="skeleton skeleton-text skeleton-wave" style="width: 80%; height: 0.75rem;"></div>
      </div>
    </div>
    <!-- Paragraph Lines -->
    <div class="skeleton skeleton-text skeleton-wave mb-2"></div>
    <div class="skeleton skeleton-text skeleton-wave mb-2"></div>
    <div class="skeleton skeleton-text skeleton-wave mb-4" style="width: 60%;"></div>
    <!-- Button Placeholder -->
    <div class="skeleton skeleton-wave rounded-sm" style="height: 2.25rem; width: 100%;"></div>
  </div>
</div>
::end

```html
<div class="card p-4 bg-body border border-subtle">
  <!-- Circular Avatar -->
  <div class="hstack gap-3 items-center mb-4">
    <div class="skeleton skeleton-circle skeleton-wave" style="width: 3rem; height: 3rem;"></div>
    <div class="grow">
      <div class="skeleton skeleton-text skeleton-wave" style="width: 50%;"></div>
      <div class="skeleton skeleton-text skeleton-wave" style="width: 80%;"></div>
    </div>
  </div>

  <!-- Paragraph Placeholder Lines -->
  <div class="skeleton skeleton-text skeleton-wave mb-2"></div>
  <div class="skeleton skeleton-text skeleton-wave mb-2"></div>
  <div class="skeleton skeleton-text skeleton-wave" style="width: 60%;"></div>
</div>
```

---

## Skeleton Utility Classes

- `.skeleton`: Base placeholder block with a gentle pulsing opacity.
- `.skeleton-text`: Text line placeholder with proportional font height.
- `.skeleton-circle`: Circular placeholder ideal for avatars and icons.
- `.skeleton-wave`: Adds a smooth horizontal gradient shimmer effect.
