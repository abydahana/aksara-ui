# JavaScript API Reference

Aksara UI features a modular, zero-dependency, ultra-lightweight TypeScript library. It provides high-performance accessibility handlers, keyboard triggers, focus traps, and interactive transitions for components.

---

## Live Programmatic API Playground

Experience Aksara UI's zero-dependency programmatic API. Click any button below to trigger and control components directly using the global browser `Aksara` instance API:

::html
<div class="docs-preview" style="overflow: visible !important;">
  <div class="docs-row flex-wrap">

    <!-- Programmatic Modal Summoner -->
    <button class="btn btn-primary hstack gap-2" onclick="Aksara.modal('#jsModalDemo', { backdrop: true, keyboard: true }).show()">
      <span class="mdi mdi-open-in-new mdi-18px"></span> Aksara.modal(options).show()
    </button>

    <!-- Programmatic Toast Summoner -->
    <button class="btn btn-success hstack gap-2" onclick="Aksara.toast('#jsToastDemo', { delay: 3500 }).show()">
      <span class="mdi mdi-bell-ring-outline mdi-18px"></span> Aksara.toast(options).show()
    </button>

    <!-- Programmatic Dropdown Toggle -->
    <div id="jsDropdownDemo" class="dropdown">
      <button class="btn btn-info hstack gap-2" id="jsDropdownTrigger" onclick="Aksara.dropdown('#jsDropdownDemo', { placement: 'bottom', container: 'body' }).toggle()">
        <span class="mdi mdi-menu-open mdi-18px"></span> Aksara.dropdown(options).toggle()
      </button>

      <!-- Programmatic Target Dropdown Menu -->
      <div class="dropdown-menu p-2 rounded-12 border border-subtle bg-body shadow-md mt-2" style="position: absolute; top: 100%; start: 0; z-index: 1050; min-width: 200px;">
        <span class="text-xs text-subtle font-800 uppercase tracking-widest block p-2">Programmatic Menu</span>
        <a href="#/helpers/javascript" class="dropdown-item rounded-8 p-2 hstack gap-2 text-sm text-base">
          <span class="mdi mdi-book-open-outline"></span> Documentation
        </a>
        <a href="#/" class="dropdown-item rounded-8 p-2 hstack gap-2 text-sm text-base">
          <span class="mdi mdi-home-outline"></span> Overview Home
        </a>
        <hr class="my-2" style="border:0; height:1px; background:var(--aksara-border-subtle)">
        <button class="dropdown-item rounded-8 p-2 hstack gap-2 text-sm text-danger w-full text-start bg-transparent border-0 cursor-pointer" onclick="Aksara.dropdown('#jsDropdownDemo').hide()">
          <span class="mdi mdi-close-circle-outline"></span> Close Dropdown
        </button>
      </div>
    </div>

  </div>
</div>

<!-- Supporting Programmatic Elements -->

<!-- 1. Target Modal Container -->
<div id="jsModalDemo" class="modal" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title font-800 hstack gap-2">
          <span class="mdi mdi-api text-primary"></span>
          Summoned programmatically!
        </h3>
        <button class="modal-close" data-modal-close>
          <span class="mdi mdi-close"></span>
        </button>
      </div>
      <div class="modal-body">
        <p class="text-subtle text-sm mt-0 mb-4">
          This modal was loaded and rendered directly by executing the following global API command in the browser:
        </p>
        <pre class="docs-code mt-2 mb-0">Aksara.modal('#jsModalDemo', {
  backdrop: true,
  keyboard: true
}).show();</pre>
      </div>
      <div class="modal-footer hstack gap-3 justify-end">
        <button class="btn btn-ghost btn-sm" data-modal-close>Dismiss</button>
        <button class="btn btn-primary btn-sm" data-modal-close>Acknowledge API</button>
      </div>
    </div>
  </div>
</div>

<!-- 2. Target Toast Stack (Bottom-Start Aligned) -->
<div class="toast-stack toast-bottom-start" style="z-index: 1500; pointer-events: none;">
  <div id="jsToastDemo" class="toast toast-success" data-toast-delay="3500" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-check-circle mdi-18px me-2 text-success"></span>
      <strong>API Handshake</strong>
      <span class="text-subtle text-xs ms-auto">Just now</span>
    </div>
    <div class="toast-body">
      Triggered successfully via global instance:
      <code class="block mt-2">Aksara.toast('#jsToastDemo', { delay: 3500 }).show()</code>
    </div>
  </div>
</div>
::end

```html
<!-- Interactive Triggers using inline JavaScript API -->
<button class="btn btn-primary" onclick="Aksara.modal('#jsModalDemo', { backdrop: true, keyboard: true }).show()">
  Summon Modal
</button>

<button class="btn btn-success" onclick="Aksara.toast('#jsToastDemo', { delay: 3500 }).show()">Summon Toast</button>
```

---

## Architecture & Bootstrapping

The library is exposed through the global `Aksara` namespace.

### Automatic Initialization

By default, Aksara UI bootstraps itself automatically when the browser dispatches `DOMContentLoaded`. It queries the DOM and creates instances for all relevant selectors.

If you are using dynamic single-page architectures (like Next.js, Turbo, HTMX, or custom Ajax loaders), manually trigger initialization inside your lifecycle hooks:

```js
// Re-scans the DOM and mounts new interactive components
Aksara.init();

// Optionally limit scans to a newly appended fragment or DOM sub-tree
const myFragment = document.querySelector("#dynamicContainer");
Aksara.init(myFragment);
```

### Manual De-registration & Cleanups

Avoid memory leaks in heavy single-page apps. When tearing down views, invoke the destroy hook to unbind all DOM event listeners, disable active keybind triggers, and garbage-collect instances:

```js
// Unbinds everything and clears internal registry maps
Aksara.destroy();
```

---

## Programmatic Initializer Factories

You can instantiate or select components programmatically. Programmatic methods accept a selector string, a direct DOM Element, or a NodeList:

```js
// Select elements programmatically and construct/retrieve instances
const myModal = Aksara.modal("#demoModal", {
  backdrop: true,
  keyboard: true
}); // Standard ID selector

const myDropdown = Aksara.dropdown(document.querySelector(".my-dropdown"), {
  placement: "bottom",
  container: "body"
}); // DOM node

const tooltips = Aksara.tooltip("[data-tooltip-dynamic]", {
  placement: "top",
  container: "body"
}); // Queries multiple elements
```

If the selector matches a single item, Aksara returns **a single instance**. If it matches multiple nodes, Aksara returns **an array of instances**.

---

## Component Reference Directory

Every component class inherits from a base `Component` controller, ensuring standard memory cleanup mechanisms:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">Component Namespace</th>
        <th style="width: 45%;">Target CSS / HTML Selectors</th>
        <th style="width: 30%;">Core Control Methods</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>Aksara.Modal</code></td>
        <td><code>.modal</code>, <code>[data-modal]</code></td>
        <td><code>show()</code>, <code>hide()</code>, <code>toggle()</code></td>
      </tr>
      <tr>
        <td><code>Aksara.Dropdown</code></td>
        <td><code>.dropdown</code>, <code>[data-dropdown]</code></td>
        <td><code>show()</code>, <code>hide()</code>, <code>toggle()</code></td>
      </tr>
      <tr>
        <td><code>Aksara.Tooltip</code></td>
        <td><code>[data-tooltip]</code></td>
        <td><code>show()</code>, <code>hide()</code></td>
      </tr>
      <tr>
        <td><code>Aksara.Popover</code></td>
        <td><code>[data-popover]</code></td>
        <td><code>show()</code>, <code>hide()</code></td>
      </tr>
      <tr>
        <td><code>Aksara.Accordion</code></td>
        <td><code>.accordion</code>, <code>[data-accordion]</code></td>
        <td>Binds automated click drawers.</td>
      </tr>
      <tr>
        <td><code>Aksara.Tabs</code></td>
        <td><code>.tabs</code>, <code>[data-tabs]</code></td>
        <td><code>show(tabElement)</code></td>
      </tr>
      <tr>
        <td><code>Aksara.Toast</code></td>
        <td><code>.toast</code>, <code>[data-toast]</code></td>
        <td><code>show()</code>, <code>hide()</code></td>
      </tr>
      <tr>
        <td><code>Aksara.Carousel</code></td>
        <td><code>.carousel</code>, <code>[data-carousel]</code></td>
        <td><code>show(index)</code>, <code>next()</code>, <code>prev()</code></td>
      </tr>
      <tr>
        <td><code>Aksara.Offcanvas</code></td>
        <td><code>.offcanvas</code>, <code>[data-offcanvas]</code></td>
        <td><code>show()</code>, <code>hide()</code></td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Internal Registry Architecture

Aksara UI prevents double-instantiation. When you call programmatic factories like `Aksara.modal()`, the engine checks a central `registry` Map:

1. If an instance already exists for that DOM element, Aksara **returns the existing instance**.
2. If no instance exists, Aksara **creates a new instance**, registers it, and returns it.

This guarantees absolute safety when working with multiple script bindings.

```js
// Returns the exact same instance! No double initializations.
const modalA = Aksara.modal("#userModal", {
  backdrop: true,
  keyboard: true
});
const modalB = Aksara.modal("#userModal", {
  backdrop: false,
  keyboard: false
});

console.log(modalA === modalB); // true
```

When an instance already exists, later calls return that same instance. Pass final option values on the first construction call.

---

## Global System Events

The core engine dispatches general lifecycle events directly on the HTML root element. You can capture these to monitor framework boot statuses:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 35%;">Global Event Key</th>
        <th style="width: 65%;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>aksara:init</code></td>
        <td>Dispatched on <code>document.documentElement</code> after a full bootstrapping routine has completed. Access the root inside <code>event.detail.root</code>.</td>
      </tr>
      <tr>
        <td><code>aksara:destroy</code></td>
        <td>Dispatched on <code>document.documentElement</code> after all instances are successfully destroyed.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

```js
document.documentElement.addEventListener("aksara:init", (event) => {
  console.log("Aksara UI initialized globally inside:", event.detail.root);
});
```
