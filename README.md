# Aksara UI

Bootstrap readability with Tailwind flexibility: a static CSS and TypeScript frontend framework.

Aksara UI is built around one promise: users can ship a modern interface with static files only. No Node.js, bundler, compiler, or framework adapter is required in production. Components and predictable utility scales are precompiled; a small runtime engine in `Aksara.init()` generates arbitrary, opacity and extra variant classes in the browser when they appear in the DOM.

---

## Features

- **Static CSS Ahead-of-Time**: Component classes and small, predictable utility scales (`0..5` for spacing, radius, border width, z-index and opacity; semantic names for typography) precompiled into plain CSS, plus responsive layout variants and `hover:`/`focus:`/`active:` color states.
- **On-Demand Runtime Utilities**: Arbitrary bracket classes (`w-[320px]`, `md:p-[2rem]`, `[position:sticky]`), color opacity classes (`bg-primary/10`, any level `0`–`100`) and variants that are not precompiled (`last:border-0`, `md:text-center`, `disabled:opacity-[.5]`) are generated in the browser by `Aksara.init()`, so the static stylesheet stays small.
- **Strict Variant Ordering**: Clean, enforceable modifier hierarchy (`theme -> breakpoint -> state -> utility`, e.g. `dark:md:hover:border-primary`). Unknown or misordered variants generate nothing.
- **RTL-First Architecture**: Built on CSS logical properties (`ms`, `me`, `ps`, `pe`, `text-start`, `text-end`) ensuring seamless bidirectional layout support.
- **Dependency-Free TypeScript**: Modular, lightweight interactive components written in pure TypeScript with first-class type declarations, accessible globally via `Aksara`, as ESM/CommonJS imports, or as server-renderable HTML string components.
- **Icon Integration**: Material Design Icons (`@mdi/font`) is a **required peer dependency**, shipped as a separate stylesheet entry.

---

## Installation

Aksara UI components render Material Design Icons, so `@mdi/font` must be installed alongside it (npm 7+ installs required peer dependencies automatically):

```bash
npm install @abydahana/aksara-ui @mdi/font
```

```bash
yarn add @abydahana/aksara-ui @mdi/font
```

```bash
pnpm add @abydahana/aksara-ui @mdi/font
```

---

## Quick Start

### 1. In a Modern Bundler (Vite, Next.js, Webpack)

```ts
import "@abydahana/aksara-ui/css";
import "@abydahana/aksara-ui/css/icons"; // Material Design Icons (required)
import Aksara from "@abydahana/aksara-ui";

// Initialize data-API attributes and runtime utilities across the document
Aksara.init();
```

`@abydahana/aksara-ui/css/icons` imports `@mdi/font`, so a missing peer dependency fails your build instead of silently rendering blank icons.

### 2. In Plain HTML (via CDN)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aksara UI Demo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui@1.4.0/dist/aksara.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" />
  </head>
  <body>
    <div class="container py-5">
      <button class="btn btn-primary" data-modal="#demoModal">Open Modal</button>

      <div class="modal" id="demoModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Hello Aksara</h5>
              <button type="button" class="btn-close" data-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p>Modern frontend framework with dependency-free JavaScript.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui@1.4.0/dist/aksara.min.js"></script>
    <!-- Aksara.init() runs automatically on DOMContentLoaded -->
  </body>
</html>
```

---

## Package Subpath Exports

| Import Path                         | Output                              |
| ----------------------------------- | ----------------------------------- |
| `@abydahana/aksara-ui`              | JavaScript entry point (ESM / CJS)  |
| `@abydahana/aksara-ui/css`          | Standard compiled CSS bundle        |
| `@abydahana/aksara-ui/css/min`      | Minified production CSS bundle      |
| `@abydahana/aksara-ui/css/icons`    | Material Design Icons (`@mdi/font`) |
| `@abydahana/aksara-ui/components`   | HTML string components (SSR-safe)   |
| `@abydahana/aksara-ui/components/*` | Specific component groups & types   |

```js
// CommonJS
const { Aksara } = require("@abydahana/aksara-ui");

// HTML string components work in Node (server-side rendering) and the browser
import { Button } from "@abydahana/aksara-ui/components";
Button({ label: "Save", variant: "primary" }); // <button class="btn btn-primary" type="button">Save</button>
```

---

## JavaScript API

```ts
import Aksara from "@abydahana/aksara-ui";

// Modal
const modal = Aksara.modal("#myModal", {
  backdrop: true,
  keyboard: true
});
modal.show();
modal.hide();

// Tooltip
Aksara.tooltip("[data-tooltip]", {
  placement: "top",
  container: "body"
});

// Toast
Aksara.toast("#notification", {
  delay: 5000
}).show();

// Dropdown
Aksara.dropdown("#profileMenu").toggle();
```

---

## Development

```bash
# Format, lint, and build all at once
npm run all

# Build CSS, JS bundles, and documentation assets
npm run build

# Run unit tests
npm run test

# Type check
npm run check

# Lint source files
npm run lint

# Automatically fix linting issues
npm run lint:fix

# Format source files with Prettier
npm run format

# Verify formatting and linting
npm run format:check
```

---

## License

MIT © Aby Dahana
