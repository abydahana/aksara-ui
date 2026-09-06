# Visually Hidden

Use `.visually-hidden` to keep content available to assistive technology while hiding it visually.

::html
<div class="docs-preview">
  <button class="btn btn-primary">
    Save
    <span class="visually-hidden">changes to your profile</span>
  </button>
  <div class="clearfix p-5 bg-subtle rounded-12">
    Clearfix uses `display: flow-root`.
  </div>
</div>
::end

```html
<button class="btn btn-primary">
  Save
  <span class="visually-hidden">changes to your profile</span>
</button>

<div class="clearfix">...</div>
```
