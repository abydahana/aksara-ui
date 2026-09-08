# Offcanvas Drawers

Offcanvas components are hidden sidebars or sliding sheets that slide into view from any viewport edge (left, right, top, or bottom). They are perfect for collapsible navigation headers, profile cards, configuration sheets, or action flows.

---

## Interactive Showcase

Click the button below to toggle a live offcanvas drawer sheet sliding from the right edge. Aksara UI handles backdrop overlay dimming, scroll-blocking, focus trapping, and close triggers out-of-the-box.

::html
<div class="docs-preview">
  <!-- Trigger Button -->
  <button class="btn btn-primary" data-offcanvas="#demoOffcanvasDrawer">
    Launch Side Drawer
  </button>

  <!-- Offcanvas sheet sliding from the right -->
  <aside id="demoOffcanvasDrawer" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="demoOffcanvasTitle">
    <div class="offcanvas-header">
      <strong id="demoOffcanvasTitle" class="text-lg">Navigation Menu</strong>
      <button class="modal-close hstack justify-center items-center" data-offcanvas-close aria-label="Close panel" style="border: 0; background: transparent; padding: 4px; cursor: pointer; color: var(--aksara-text-subtle);"><span class="mdi mdi-close mdi-18px"></span></button>
    </div>

    <div class="offcanvas-body">
      <p class="mt-0 text-subtle text-sm mb-4">
        This sidebar is slide-positioned from the flow-end (right in LTR). Focus trapping is active, meaning you can Tab through options securely.
      </p>

      <!-- Sample Navigation Links -->
      <nav class="vstack gap-2 mb-4">
        <a href="#/core/utility-first" class="p-3 rounded bg-subtle text-body font-600 block hstack gap-2" data-offcanvas-close><span class="mdi mdi-home-outline"></span> Overview Dashboard</a>
        <a href="#/helpers/javascript" class="p-3 rounded bg-subtle text-body font-600 block hstack gap-2" data-offcanvas-close><span class="mdi mdi-flash-outline"></span> JavaScript API</a>
        <a href="#/utilities/colors" class="p-3 rounded bg-subtle text-body font-600 block hstack gap-2" data-offcanvas-close><span class="mdi mdi-palette-outline"></span> Visual Colors</a>
      </nav>

      <button class="btn btn-sm btn-ghost btn-block" data-offcanvas-close>Close Panel</button>
    </div>

  </aside>
</div>
::end

```html
<!-- Trigger Button -->
<button class="btn btn-primary" data-offcanvas="#sidebar">Launch Side Drawer</button>

<!-- Offcanvas Sidebar Container -->
<aside id="sidebar" class="offcanvas offcanvas-end" tabindex="-1" role="dialog">
  <div class="offcanvas-header">
    <strong>Navigation Menu</strong>
    <!-- data-offcanvas-close closes the sidebar panel -->
    <button class="modal-close" data-offcanvas-close>
      <span class="mdi mdi-close"></span>
    </button>
  </div>
  <div class="offcanvas-body">
    <p>Sidebar content here...</p>
  </div>
</aside>
```

---

## Layout Placement Modifiers

Control which screen edge the offcanvas drawer slides out from by applying a placement class:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 30%;">Class Modifier</th>
        <th style="width: 30%;">Slide Direction</th>
        <th style="width: 40%;">Best Practices & Usage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>offcanvas-start</code></td>
        <td>Slides from the flow-start (left).</td>
        <td>Ideal for primary navigation menus or side indexes.</td>
      </tr>
      <tr>
        <td><code>offcanvas-end</code></td>
        <td>Slides from the flow-end (right).</td>
        <td>Ideal for user settings, profile sheets, and shopping carts.</td>
      </tr>
      <tr>
        <td><code>offcanvas-top</code></td>
        <td>Slides down from the top edge.</td>
        <td>Ideal for system notifications, announcements, or search panels.</td>
      </tr>
      <tr>
        <td><code>offcanvas-bottom</code></td>
        <td>Slides up from the bottom edge.</td>
        <td>Ideal for mobile actions sheet or bottom configuration options.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Declarative HTML Data API

Control drawer visible states markup-only:

- **`data-offcanvas="#drawerId"`**: Place this attribute on any trigger button. Clicking launches the target sidebar.
- **`data-offcanvas-close`**: Place this attribute on any button inside the offcanvas container. Clicking automatically dismisses the drawer sheet.

---

## Programmatic JavaScript API

Interact with offcanvas drawers manually inside your scripts.

### Creating an Instance

```js
// Initialize or retrieve the Offcanvas sheet
const drawer = Aksara.offcanvas("#sidebar", {
  backdrop: true,
  keyboard: true
});
```

### Methods

- **`drawer.show()`**: Slides the offcanvas panel into view, dims backdrops, traps keyboard focus, and blocks body scrolling. Returns instance.
- **`drawer.hide()`**: Slides the offcanvas panel out of view and restores focus to the trigger element. Returns instance.
- **`drawer.toggle()`**: Toggles the visibility of the offcanvas drawer. Returns instance.
- **`drawer.destroy()`**: Unbinds DOM triggers, removes backdrop overlay listeners, and cleans memory references.

---

## Custom Lifecycle Events

Offcanvas emits custom bubbled transition events:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 35%;">Custom Event String</th>
        <th style="width: 65%;">Trigger Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>aksara:offcanvas:show</code></td>
        <td>Dispatched when the offcanvas starts/completes showing. Access instance in <code>event.detail.instance</code>.</td>
      </tr>
      <tr>
        <td><code>aksara:offcanvas:hide</code></td>
        <td>Dispatched when the offcanvas starts/completes hiding. Access instance in <code>event.detail.instance</code>.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

### Listening Example

```js
const navEl = document.querySelector("#sidebar");

navEl.addEventListener("aksara:offcanvas:show", (event) => {
  console.log("Sidebar opened successfully!", event.detail.instance);
});
```
