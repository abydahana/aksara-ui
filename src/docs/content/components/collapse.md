# Collapse

Toggle the visibility of content areas across your page using simple utility classes and custom responsive structures.

## Core Layout Showcase

Aksara UI features a clean, CSS-based visibility toggler that is extremely lightweight. Use the `.collapse` class to hide content, and add the `.collapse-show` modifier to reveal it smoothly:

::html
<div class="docs-preview py-4">
  <div class="mb-4">
    <button class="btn btn-primary" onclick="const c = document.getElementById('demoCollapse'); c.classList.toggle('collapse-show'); this.setAttribute('aria-expanded', c.classList.contains('collapse-show') ? 'true' : 'false')" aria-expanded="false" aria-controls="demoCollapse">
      Toggle Content
    </button>
  </div>

  <div id="demoCollapse" class="collapse p-5 bg-subtle border border-subtle rounded-12 transition">
    <h4 class="mt-0 mb-2 font-700 hstack gap-2"><span class="mdi mdi-information-outline text-primary"></span> Collapsible Card Area</h4>
    <p class="text-subtle text-sm mb-0 mt-0 leading-22">
      This is a collapsible text content block. It is initially hidden via <code>display: none</code> using the <code>.collapse</code> utility and transitions to <code>display: block</code> when the <code>.collapse-show</code> modifier is appended.
    </p>
  </div>
</div>
::end

```html
<!-- Trigger Button -->
<button class="btn btn-primary" onclick="document.getElementById('demoCollapse').classList.toggle('collapse-show')">
  Toggle Content
</button>

<!-- Collapsible Content -->
<div id="demoCollapse" class="collapse p-5 bg-subtle border border-subtle rounded-12">
  <h4 class="mt-0 mb-2 font-700">Collapsible Card Area</h4>
  <p class="text-subtle text-sm mb-0 leading-22">...</p>
</div>
```

---

## Technical Specifications

- **`.collapse`**: Sets the target element's visibility to `display: none` by default.
- **`.collapse-show`**: Standard CSS modifier that overrides style properties to `display: block` to display the element.
- **Accessibility Tip**: Always declare `aria-expanded="false"` on the trigger element and update it to `true` dynamically as state toggles. Set the button's `aria-controls` attribute pointing to the collapsible container's ID.
