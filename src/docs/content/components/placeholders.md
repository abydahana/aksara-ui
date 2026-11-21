# Placeholders

Placeholders reserve space while content is loading. Use width, height, radius, color, and animation utilities to shape skeleton screens that match the final layout.

::html
<div class="docs-preview">
  <div class="vstack gap-4">
    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Text Skeleton</h4>
      <div style="max-width:560px;">
        <span class="placeholder placeholder-glow block w-[33.3333%] rounded mb-3" style="height: 1.25rem;"></span>
        <span class="placeholder block w-full rounded mb-2" style="height: 0.75rem;"></span>
        <span class="placeholder block w-[80%] rounded mb-2" style="height: 0.75rem;"></span>
        <span class="placeholder block w-[66.6667%] rounded" style="height: 0.75rem;"></span>
      </div>
    </div>

    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Cards And Media</h4>
      <div class="docs-row items-start">
        <article class="card w-full" style="max-width:360px;">
          <div class="placeholder placeholder-wave block rounded-top" style="height: 10rem;"></div>
          <div class="card-body">
            <span class="placeholder block w-[80%] rounded mb-3" style="height: 1rem;"></span>
            <span class="placeholder block w-full rounded mb-2" style="height: 0.75rem;"></span>
            <span class="placeholder block w-[66.6667%] rounded" style="height: 0.75rem;"></span>
          </div>
        </article>

        <article class="card w-full" style="max-width:360px;">
          <div class="card-body">
            <div class="hstack gap-3 mb-4">
              <span class="placeholder placeholder-wave block rounded-circle shrink-0" style="width:48px; height:48px;"></span>
              <div class="flex-1">
                <span class="placeholder block w-[60%] rounded mb-2" style="height: 1rem;"></span>
                <span class="placeholder block w-[40%] rounded" style="height: 0.75rem;"></span>
              </div>
            </div>
            <span class="placeholder block w-full rounded mb-2" style="height: 0.75rem;"></span>
            <span class="placeholder block w-[75%] rounded mb-2" style="height: 0.75rem;"></span>
            <span class="placeholder block w-[60%] rounded" style="height: 0.75rem;"></span>
          </div>
        </article>
      </div>
    </div>

    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Table Skeleton</h4>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th><span class="placeholder block rounded" style="width:80px; height: 0.75rem;"></span></th>
              <th><span class="placeholder block rounded" style="width:70px; height: 0.75rem;"></span></th>
              <th><span class="placeholder block rounded" style="width:90px; height: 0.75rem;"></span></th>
              <th class="text-end"><span class="placeholder inline-block rounded" style="width:64px; height: 0.75rem;"></span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="placeholder placeholder-glow block w-[66.6667%] rounded" style="height: 0.875rem;"></span></td>
              <td><span class="placeholder block w-[50%] rounded" style="height: 0.875rem;"></span></td>
              <td><span class="placeholder text-success block rounded-pill" style="width:80px; height: 1.25rem;"></span></td>
              <td class="text-end"><span class="placeholder inline-block rounded" style="width:92px; height: 1.75rem;"></span></td>
            </tr>
            <tr>
              <td><span class="placeholder placeholder-glow block w-[60%] rounded" style="height: 0.875rem;"></span></td>
              <td><span class="placeholder block w-[40%] rounded" style="height: 0.875rem;"></span></td>
              <td><span class="placeholder text-warning block rounded-pill" style="width:90px; height: 1.25rem;"></span></td>
              <td class="text-end"><span class="placeholder inline-block rounded" style="width:92px; height: 1.75rem;"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Form Skeleton</h4>
      <div style="max-width:520px;">
        <span class="placeholder block rounded mb-2" style="width:120px; height: 0.875rem;"></span>
        <span class="placeholder placeholder-wave block w-full rounded mb-4" style="height: 2.5rem;"></span>
        <span class="placeholder block rounded mb-2" style="width:96px; height: 0.875rem;"></span>
        <span class="placeholder placeholder-wave block w-full rounded mb-4" style="height: 2.5rem;"></span>
        <div class="hstack gap-3">
          <span class="placeholder text-primary block rounded" style="width:96px; height: 2.25rem;"></span>
          <span class="placeholder block rounded" style="width:84px; height: 2.25rem;"></span>
        </div>
      </div>
    </div>

  </div>
</div>
::end

```html
<!-- Text skeleton -->
<span class="placeholder placeholder-glow block w-[33.3333%] mb-3"></span>
<span class="placeholder block w-full mb-2"></span>
<span class="placeholder block w-[75%]"></span>

<!-- Sizing modifiers -->
<span class="placeholder placeholder-xs col-12"></span>
<span class="placeholder placeholder-sm col-12"></span>
<span class="placeholder col-12"></span>
<span class="placeholder placeholder-lg col-12"></span>

<!-- Color follows currentColor / text-* -->
<span class="placeholder text-primary block" style="width: 96px;"></span>
<span class="placeholder text-success block rounded-pill" style="width: 80px;"></span>
```

---

## Modifiers

- **`.placeholder-glow`**: Pulses the skeleton surface.
- **`.placeholder-wave`**: Adds a moving gradient shimmer across the placeholder.
- **`.placeholder-xs` / `.placeholder-sm` / `.placeholder-lg`**: Scales the height proportionally.
- Color utilities such as `.text-primary`, `.text-success`, or `.text-warning` tint placeholders automatically because the base placeholder uses `currentColor`.
