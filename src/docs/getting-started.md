# Getting Started

Aksara UI is built around one promise: users can ship a modern interface with static files only.

```html
<link rel="stylesheet" href="aksara.min.css" />
<script src="aksara.min.js"></script>
```

No Node.js, bundler, compiler, JIT server, runtime style injection, or framework adapter is required for users.

## Philosophy

Aksara UI uses prebuilt static CSS. The project generator creates predictable utility ranges and component classes ahead of time, including responsive grid utilities, state utilities, adaptive theme tokens, RTL-friendly logical spacing, and Bootstrap-like components.

Dynamic class names are safe because utilities such as `m-4`, `w-100`, `w-1/2`, `text-primary/20`, and `md:col-4` already exist in the generated CSS. There is no runtime CSS generation.

## Strict Variant Order

Class variants must be written in this order:

```text
theme -> breakpoint -> state -> utility
```

Valid examples:

```text
dark:md:hover:border
dark:lg:focus:bg-primary/20
md:col-4
hover:bg-primary/80
```

Invalid examples:

```text
md:dark:hover:border
hover:md:border
focus:dark:lg:bg-primary
```

The generator validates variant order before emitting CSS.

## RTL First

Aksara UI uses logical properties. Use `ms`, `me`, `ps`, and `pe` instead of left/right names.

```html
<div class="ms-3 me-3 ps-4 pe-4 text-start"></div>
```

The framework does not generate `ml-*`, `mr-*`, `pl-*`, `pr-*`, `text-left`, or `text-right`.

## JavaScript

The JavaScript package is optional, written in TypeScript with zero external runtime dependencies.

```js
Aksara.init();
Aksara.modal("#loginModal", {
  backdrop: true,
  keyboard: true
}).show();
Aksara.tooltip("[data-tooltip]", {
  placement: "top",
  container: "body"
});
Aksara.toast("#notification", {
  delay: 5000
}).show();
```

The data API uses readable component names:

```html
<button data-modal="#demoModal" data-tooltip="Open modal" data-tooltip-placement="top">Open Modal</button>
```

Do not use `data-toggle` or `data-bs-toggle`.
