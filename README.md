# Aksara UI

Bootstrap readability with Tailwind flexibility: a static CSS and vanilla JavaScript frontend framework.

Aksara UI is built around one promise: users can ship a modern interface with static files only. No Node.js, bundler, compiler, JIT server, runtime style injection, or framework adapter is required in production.

---

## Features

- **Static CSS Ahead-of-Time**: Predictable utility ranges and component classes precompiled into pure CSS. Dynamic class names are safe because utilities already exist in the stylesheet.
- **Strict Variant Ordering**: Clean, enforceable modifier hierarchy (`theme -> breakpoint -> state -> utility`, e.g. `dark:md:hover:border-primary`).
- **RTL-First Architecture**: Built on CSS logical properties (`ms`, `me`, `ps`, `pe`, `text-start`, `text-end`) ensuring seamless bidirectional layout support.
- **Zero-Dependency Vanilla JS**: Modular, lightweight interactive components (Modal, Dropdown, Tooltip, Toast, Offcanvas, Accordion, Tab) accessible globally via `Aksara` or modular imports.
- **Icon Integration**: Bundled with Material Design Icons (`@mdi/font`).

---

## Installation

```bash
npm install @abydahana/aksara-ui
```

```bash
yarn add @abydahana/aksara-ui
```

```bash
pnpm add @abydahana/aksara-ui
```

---

## Quick Start

### 1. In a Modern Bundler (Vite, Next.js, Webpack)

```ts
import "@abydahana/aksara-ui/css";
import Aksara from "@abydahana/aksara-ui";

// Initialize data-API attributes across the document
Aksara.init();
```

### 2. In Plain HTML (via CDN)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aksara UI Demo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui/dist/aksara.min.css" />
  </head>
  <body>
    <div class="container py-20">
      <button class="btn btn-primary" data-modal="#demoModal">Open Modal</button>

      <div class="modal fade" id="demoModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Hello Aksara</h5>
              <button type="button" class="btn-close" data-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p>Modern frontend framework with zero runtime dependencies.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui/dist/aksara.min.js"></script>
    <script>
      Aksara.init();
    </script>
  </body>
</html>
```

---

## Package Subpath Exports

| Import Path                         | Output                             |
| ----------------------------------- | ---------------------------------- |
| `@abydahana/aksara-ui`              | JavaScript entry point (ESM / CJS) |
| `@abydahana/aksara-ui/css`          | Standard compiled CSS bundle       |
| `@abydahana/aksara-ui/css/min`      | Minified production CSS bundle     |
| `@abydahana/aksara-ui/components/*` | Specific component scripts & types |

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
