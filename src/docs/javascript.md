# JavaScript

Aksara UI JavaScript is optional, modular internally, and published as plain browser-ready JavaScript.

```html
<script src="aksara.min.js"></script>
```

The global namespace is `Aksara`.

## Initialization

```js
Aksara.init();
```

`Aksara.init()` scans the document for data APIs and component classes. It is safe to call again after adding new DOM.

## Selectors Or Elements

Every component helper accepts a selector string, a DOM element, a NodeList, or an array of elements.

```js
Aksara.modal("#demoModal", {
  backdrop: true,
  keyboard: true
}).show();

Aksara.tooltip(document.querySelectorAll("[data-tooltip]"), {
  placement: "top",
  container: "body"
});
```

## Lifecycle

```js
const modal = Aksara.modal("#demoModal", {
  backdrop: true,
  keyboard: true
});
modal.show();
modal.hide();
modal.destroy();

Aksara.destroy();
```

Components dispatch custom events with the `aksara:` prefix.

```js
document.querySelector("#demoModal").addEventListener("aksara:modal:show", (event) => {
  console.log(event.detail.instance);
});
```

## Data API

Aksara UI does not use `data-toggle` or `data-bs-toggle`.

Use:

```text
data-{component}
data-{component}-{option}
```

Examples:

```html
<button data-modal="#demoModal">Open modal</button>
<button data-modal-close>Close modal</button>
<button data-dismiss="#demoModal">Dismiss modal</button>
<button data-tooltip="Edit user" data-tooltip-placement="top">Edit</button>
<button data-popover="More detail" data-popover-placement="right">Info</button>
<button data-dropdown="#menu">Menu</button>
<button data-toast="#savedToast">Show toast</button>
<button data-offcanvas="#sidebar">Open sidebar</button>
```

## Components

```js
Aksara.modal("#demo", {
  backdrop: true,
  keyboard: true
});

Aksara.tooltip("[data-tooltip]", {
  placement: "top",
  container: "body"
});

Aksara.dropdown(".dropdown", {
  placement: "bottom",
  container: "body"
});

Aksara.popover("[data-popover]", {
  placement: "top",
  container: "body",
  html: true,
  content: "<div>HTML Content</div>"
});

Aksara.accordion(".accordion", {
  parent: true
});

Aksara.tabs(".tabs", {
  activeIndex: 0,
  keyboard: true,
  loop: true
});

Aksara.toast(".toast", {
  delay: 5000
});

Aksara.carousel(".carousel", {
  activeIndex: 0,
  autoplay: false,
  interval: 5000
});

Aksara.offcanvas("#sidebar", {
  backdrop: true,
  keyboard: true
});
```

Modal and offcanvas include escape-key handling and focus trapping. Tooltip and popover support hover, focus, escape cleanup, and placement. Tabs support arrow-key navigation.

## Options Pattern

Every helper uses the same signature:

```js
Aksara.component(target, options);
```

`target` can be a selector string, a DOM element, a NodeList, or an array of elements. `options` always overrides matching data attributes on the target element.

| Helper               | Useful Options                                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| `Aksara.modal()`     | `backdrop`, `keyboard`, `focus`, `scrollLock`                                                      |
| `Aksara.offcanvas()` | `backdrop`, `keyboard`, `focus`, `scrollLock`                                                      |
| `Aksara.dropdown()`  | `placement`, `container`, `menu`, `offset`, `keyboard`, `closeOnSelect`, `closeOnOutside`          |
| `Aksara.tooltip()`   | `placement`, `container`, `text`, `content`, `html`, `trigger`, `showDelay`, `hideDelay`, `offset` |
| `Aksara.popover()`   | `placement`, `container`, `text`, `content`, `html`, `trigger`, `showDelay`, `hideDelay`, `offset` |
| `Aksara.accordion()` | `parent`, `collapsible`, `buttonSelector`                                                          |
| `Aksara.toast()`     | `delay`, `autohide`                                                                                |
| `Aksara.tabs()`      | `active`, `activeIndex`, `keyboard`, `loop`, `orientation`, `tabSelector`, `panelSelector`         |
| `Aksara.carousel()`  | `activeIndex`, `autoplay`, `interval`, `pauseOnHover`, `keyboard`, `loop`                          |

## Universal Dismiss API

`data-dismiss` removes normal elements and calls component hide methods for JavaScript components.

```html
<button class="close" type="button" data-dismiss="#plainAlert" aria-label="Close alert"></button>
<button class="close" type="button" data-dismiss="#demoModal" aria-label="Close modal"></button>
<button class="close close-sm" type="button" data-dismiss="#savedToast" aria-label="Close toast"></button>
```
