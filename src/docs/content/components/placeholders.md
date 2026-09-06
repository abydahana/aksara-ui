# Placeholders

Placeholders reserve space while content is loading. Use width, height, radius, color, and animation utilities to shape skeleton screens that match the final layout.

::html
<div class="docs-preview">
  <div class="vstack gap-6">
    <div>
      <h4 class="mt-0 mb-3 font-700 text-sm">Text Skeleton</h4>
      <div style="max-width:560px;">
        <span class="placeholder placeholder-glow block w-7/20 h-20 rounded-4 mb-3"></span>
        <span class="placeholder block w-full h-12 rounded-4 mb-2"></span>
        <span class="placeholder block w-9/10 h-12 rounded-4 mb-2"></span>
        <span class="placeholder block w-7/10 h-12 rounded-4"></span>
      </div>
    </div>

    <div>
      <h4 class="mt-0 mb-3 font-700 text-sm">Cards And Media</h4>
      <div class="docs-row items-start">
        <article class="card w-full" style="max-width:360px;">
          <div class="h-160 placeholder placeholder-wave block rounded-top"></div>
          <div class="card-body">
            <span class="placeholder block w-4/5 h-18 rounded-4 mb-3"></span>
            <span class="placeholder block w-full h-12 rounded-4 mb-2"></span>
            <span class="placeholder block w-13/20 h-12 rounded-4"></span>
          </div>
        </article>

        <article class="card w-full" style="max-width:360px;">
          <div class="card-body">
            <div class="hstack gap-3 mb-4">
              <span class="placeholder placeholder-wave block h-48 rounded-full shrink-0" style="width:48px;"></span>
              <div class="flex-1">
                <span class="placeholder block w-3/5 h-16 rounded-4 mb-2"></span>
                <span class="placeholder block w-2/5 h-12 rounded-4"></span>
              </div>
            </div>
            <span class="placeholder block w-full h-12 rounded-4 mb-2"></span>
            <span class="placeholder block w-3/4 h-12 rounded-4 mb-2"></span>
            <span class="placeholder block w-3/5 h-12 rounded-4"></span>
          </div>
        </article>
      </div>
    </div>

    <div>
      <h4 class="mt-0 mb-3 font-700 text-sm">Table Skeleton</h4>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th><span class="placeholder block h-12 rounded-4" style="width:80px;"></span></th>
              <th><span class="placeholder block h-12 rounded-4" style="width:70px;"></span></th>
              <th><span class="placeholder block h-12 rounded-4" style="width:90px;"></span></th>
              <th class="text-end"><span class="placeholder inline-block h-12 rounded-4" style="width:64px;"></span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="placeholder placeholder-glow block w-7/10 h-14 rounded-4"></span></td>
              <td><span class="placeholder block w-1/2 h-14 rounded-4"></span></td>
              <td><span class="placeholder text-success block h-20 rounded-full" style="width:80px;"></span></td>
              <td class="text-end"><span class="placeholder inline-block h-28 rounded-8" style="width:92px;"></span></td>
            </tr>
            <tr>
              <td><span class="placeholder placeholder-glow block w-3/5 h-14 rounded-4"></span></td>
              <td><span class="placeholder block w-2/5 h-14 rounded-4"></span></td>
              <td><span class="placeholder text-warning block h-20 rounded-full" style="width:90px;"></span></td>
              <td class="text-end"><span class="placeholder inline-block h-28 rounded-8" style="width:92px;"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h4 class="mt-0 mb-3 font-700 text-sm">Form Skeleton</h4>
      <div style="max-width:520px;">
        <span class="placeholder block h-14 rounded-4 mb-2" style="width:120px;"></span>
        <span class="placeholder placeholder-wave block w-full h-42 rounded-10 mb-4"></span>
        <span class="placeholder block h-14 rounded-4 mb-2" style="width:96px;"></span>
        <span class="placeholder placeholder-wave block w-full h-42 rounded-10 mb-4"></span>
        <div class="hstack gap-3">
          <span class="placeholder text-primary block h-36 rounded-8" style="width:96px;"></span>
          <span class="placeholder block h-36 rounded-8" style="width:84px;"></span>
        </div>
      </div>
    </div>

  </div>
</div>
::end

```html
<!-- Text skeleton -->
<span class="placeholder placeholder-glow block w-7/20 h-20 rounded-4"></span>
<span class="placeholder block w-full h-12 rounded-4"></span>
<span class="placeholder block w-7/10 h-12 rounded-4"></span>

<!-- Media skeleton -->
<div class="hstack gap-3">
  <span class="placeholder placeholder-wave block h-48 rounded-full" style="width:48px;"></span>
  <div class="flex-1">
    <span class="placeholder block w-3/5 h-16 rounded-4"></span>
    <span class="placeholder block w-2/5 h-12 rounded-4"></span>
  </div>
</div>

<!-- Color follows currentColor -->
<span class="placeholder text-primary block h-36 rounded-8" style="width:96px;"></span>
<span class="placeholder text-success block h-20 rounded-full" style="width:80px;"></span>
```

## Animation Modifiers

- **`.placeholder-glow`** pulses the skeleton surface.
- **`.placeholder-wave`** adds a moving highlight across the placeholder.
- Color utilities such as `.text-primary`, `.text-success`, or `.text-warning` can tint placeholders because the base placeholder uses `currentColor`.
