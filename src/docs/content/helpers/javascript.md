# JavaScript API Reference

Aksara UI ships a modular, dependency-free TypeScript library. It provides accessibility handlers, keyboard triggers, focus traps, and interactive transitions for components, plus the runtime engine that generates on-demand utility classes.

---

## Live Programmatic API Playground

Try Aksara UI's programmatic API. Click any button below to trigger and control components directly using the global browser `Aksara` instance API:

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
      <div class="dropdown-menu p-2 rounded-[12px] border border-subtle bg-body shadow-md mt-2" style="position: absolute; top: 100%; start: 0; z-index: 1050; min-width: 200px;">
        <span class="text-xs text-subtle font-extrabold uppercase tracking-widest block p-2">Programmatic Menu</span>
        <a href="#/helpers/javascript" class="dropdown-item rounded-[8px] p-2 hstack gap-2 text-sm">
          <span class="mdi mdi-book-open-outline"></span> Documentation
        </a>
        <a href="#/" class="dropdown-item rounded-[8px] p-2 hstack gap-2 text-sm">
          <span class="mdi mdi-home-outline"></span> Overview Home
        </a>
        <hr class="my-2" style="border:0; height:1px; background:var(--aksara-border-subtle)">
        <button class="dropdown-item rounded-[8px] p-2 hstack gap-2 text-sm text-danger w-full text-start bg-transparent border-0 cursor-pointer" onclick="Aksara.dropdown('#jsDropdownDemo').hide()">
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
        <h3 class="modal-title font-extrabold hstack gap-2">
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

By default, Aksara UI bootstraps itself automatically when the browser dispatches `DOMContentLoaded`. `Aksara.init()`:

- applies the stored theme (when called on the whole document);
- creates instances for all data-API selectors (tooltips, popovers, carousels, ...);
- generates CSS rules for the on-demand utility classes already in the DOM (arbitrary values such as `w-[320px]`, opacity levels such as `bg-primary/10`, and variants such as `last:border-0`) into a single `<style id="aksara-arbitrary-styles">` element;
- starts one `MutationObserver` that generates rules for classes added later and destroys component instances whose element was removed from the document.

If you are using dynamic single-page architectures (like Next.js, Turbo, HTMX, or custom Ajax loaders), manually trigger initialization inside your lifecycle hooks:

```js
// Re-scans the DOM and mounts new interactive components
Aksara.init();

// Optionally limit scans to a newly appended fragment or DOM sub-tree
const myFragment = document.querySelector("#dynamicContainer");
Aksara.init(myFragment);
```

### Manual De-registration & Cleanups

Components auto-destroy when their element is removed from the DOM (checked after each mutation batch, so moved nodes survive). To tear everything down explicitly, invoke the destroy hook to unbind all DOM event listeners, disable active keybind triggers, and release instances:

```js
// Unbinds everything and clears internal registry maps
Aksara.destroy();
```

### Stacked Overlays

Modals and offcanvases stack in opening order. Escape and focus trapping apply only to the topmost overlay, and the page scroll stays locked until the last one closes.

### Node.js & Server Rendering

The package works outside the browser too. Importing it in Node does not touch the DOM:

```js
// CommonJS
const { Aksara } = require("@abydahana/aksara-ui"); // also available as .default

// ESM
import Aksara from "@abydahana/aksara-ui";

// HTML string renderers for SSR (Button, Modal, ListGroup, ...)
import { Button, Modal } from "@abydahana/aksara-ui/components";
const html = Button({ label: "Save", variant: "primary" });
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

### Options Pattern

Every helper uses the same signature, `Aksara.component(target, options)`. `options` always overrides matching data attributes on the target element.

| Helper               | Useful Options                                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| `Aksara.modal()`     | `backdrop`, `keyboard`, `focus`, `scrollLock`, `draggable`                                         |
| `Aksara.offcanvas()` | `backdrop`, `keyboard`, `focus`, `scrollLock`                                                      |
| `Aksara.dropdown()`  | `placement`, `container`, `menu`, `offset`, `keyboard`, `closeOnSelect`, `closeOnOutside`          |
| `Aksara.tooltip()`   | `placement`, `container`, `text`, `content`, `html`, `trigger`, `showDelay`, `hideDelay`, `offset` |
| `Aksara.popover()`   | `placement`, `container`, `text`, `content`, `html`, `trigger`, `showDelay`, `hideDelay`, `offset` |
| `Aksara.accordion()` | `parent`, `collapsible`, `buttonSelector`                                                          |
| `Aksara.toast()`     | `delay`, `autohide`                                                                                |
| `Aksara.tabs()`      | `active`, `activeIndex`, `keyboard`, `loop`, `orientation`, `tabSelector`, `panelSelector`         |
| `Aksara.carousel()`  | `activeIndex`, `autoplay`, `interval`, `pauseOnHover`, `keyboard`, `loop`                          |

---

## Data API Conventions

Aksara UI does not use `data-toggle` or `data-bs-toggle`. Attributes follow `data-{component}` and `data-{component}-{option}`:

```html
<button data-modal="#demoModal">Open modal</button>
<button data-modal-close>Close modal</button>
<button data-tooltip="Edit user" data-tooltip-placement="top">Edit</button>
<button data-popover="More detail" data-popover-placement="end">Info</button>
<button data-dropdown="#menu">Menu</button>
<button data-toast="#savedToast">Show toast</button>
<button data-offcanvas="#sidebar">Open sidebar</button>
<button data-collapse="#details">Toggle details</button>
```

### Universal Dismiss API

`data-dismiss="#id"` removes plain elements and calls `hide()` on JavaScript components. An empty `data-dismiss` targets the closest alert, toast, modal, offcanvas, dropdown, popover or tooltip.

```html
<button class="close" type="button" data-dismiss="#plainAlert" aria-label="Close alert"></button>
<button class="close" type="button" data-dismiss="#demoModal" aria-label="Close modal"></button>
<button class="close close-sm" type="button" data-dismiss="" aria-label="Close toast"></button>
```

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
        <td><code>aksara:theme:change</code></td>
        <td>Dispatched on <code>document.documentElement</code> when the theme changes. The new theme is in <code>event.detail.theme</code>.</td>
      </tr>
      <tr>
        <td><code>aksara:chip:remove</code></td>
        <td>Dispatched (bubbling, cancelable) on a <code>.chip</code> before its <code>[data-chip-remove]</code> button removes it. Call <code>event.preventDefault()</code> to keep the chip. The chip is in <code>event.detail.chip</code>.</td>
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
