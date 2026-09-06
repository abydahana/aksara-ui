# Button Group

Button groups join related actions together.

::html
<div class="docs-preview">
  <div class="btn-group" role="group" aria-label="Basic actions">
    <button class="btn btn-soft-primary">Left</button>
    <button class="btn btn-soft-primary">Middle</button>
    <button class="btn btn-soft-primary">Right</button>
  </div>

  <div class="mt-4">
    <h4 class="mt-0 mb-3 font-700 text-sm">Anchor Button Group</h4>
    <div class="btn-group" role="group" aria-label="Documentation links">
      <a class="btn btn-outline-primary" href="#/components/buttons">Buttons</a>
      <a class="btn btn-outline-primary" href="#/components/button-group">Button Group</a>
      <a class="btn btn-outline-primary" href="#/helpers/javascript">JavaScript</a>
    </div>
  </div>

  <div class="mt-4">
    <h4 class="mt-0 mb-3 font-700 text-sm">Sizing</h4>
    <div class="vstack gap-3 items-start">
      <div class="btn-group btn-group-sm" role="group" aria-label="Small grouped actions">
        <button class="btn btn-primary">Small</button>
        <button class="btn btn-primary">Group</button>
        <button class="btn btn-primary">Actions</button>
      </div>

      <div class="btn-group" role="group" aria-label="Default grouped actions">
        <button class="btn btn-primary">Default</button>
        <button class="btn btn-primary">Group</button>
        <button class="btn btn-primary">Actions</button>
      </div>

      <div class="btn-group btn-group-lg" role="group" aria-label="Large grouped links">
        <a class="btn btn-outline-primary" href="#/components/buttons">Large</a>
        <a class="btn btn-outline-primary" href="#/components/button-group">Grouped</a>
        <a class="btn btn-outline-primary" href="#/helpers/javascript">Links</a>
      </div>
    </div>

  </div>

  <div class="btn-toolbar">
    <div class="btn-group" role="group">
      <button class="btn btn-primary">1</button>
      <button class="btn btn-primary">2</button>
      <button class="btn btn-primary">3</button>
    </div>
    <div class="btn-group" role="group">
      <button class="btn btn-secondary">A</button>
      <button class="btn btn-secondary">B</button>
    </div>
  </div>
</div>
::end

```html
<div class="btn-group" role="group" aria-label="Basic actions">
  <button class="btn btn-soft-primary">Left</button>
  <button class="btn btn-soft-primary">Middle</button>
  <button class="btn btn-soft-primary">Right</button>
</div>

<div class="btn-group" role="group" aria-label="Documentation links">
  <a class="btn btn-outline-primary" href="/buttons">Buttons</a>
  <a class="btn btn-outline-primary" href="/button-group">Button Group</a>
  <a class="btn btn-outline-primary" href="/javascript">JavaScript</a>
</div>

<div class="btn-group btn-group-sm" role="group" aria-label="Small grouped actions">
  <button class="btn btn-primary">Small</button>
  <button class="btn btn-primary">Group</button>
  <button class="btn btn-primary">Actions</button>
</div>

<div class="btn-group btn-group-lg" role="group" aria-label="Large grouped links">
  <a class="btn btn-outline-primary" href="/buttons">Large</a>
  <a class="btn btn-outline-primary" href="/button-group">Grouped</a>
  <a class="btn btn-outline-primary" href="/javascript">Links</a>
</div>
```
