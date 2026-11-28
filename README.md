# Aksara UI

A CSS and TypeScript UI framework that runs from static files. You get Bootstrap-style component classes and Tailwind-style utilities, with no build step required in production.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui@1.5.0/dist/aksara.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" />
<script src="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui@1.5.0/dist/aksara.min.js"></script>
```

That's the whole setup. `aksara.min.css` is about 40 KB gzipped and `aksara.min.js` about 31 KB gzipped.

## How it works

Most of the CSS ships precompiled: components, the common utility scales and responsive layout variants. Anything outside those scales is generated in the browser the first time it appears in the DOM:

```html
<div class="w-[320px] md:p-[2rem] bg-primary/10 last:border-0">...</div>
```

`Aksara.init()` runs on `DOMContentLoaded`. It writes rules for these classes into a single `<style>` tag and watches for markup added later, so the static stylesheet stays small and you don't need a class scanner.

Variants have a fixed order: `theme → breakpoint → state → utility`, for example `dark:md:hover:border-primary`. A variant that is misordered or unknown generates nothing, so typos fail visibly instead of half working.

Layout uses logical properties (`ms-*`, `pe-*`, `text-start`), so RTL works by setting `dir="rtl"`.

## Install

```bash
npm install @abydahana/aksara-ui @mdi/font
```

`@mdi/font` (Material Design Icons) is a required peer dependency. Components render its icons. yarn and pnpm work the same way.

With a bundler:

```ts
import "@abydahana/aksara-ui/css";
import "@abydahana/aksara-ui/css/icons";
import Aksara from "@abydahana/aksara-ui";

Aksara.init();
```

`css/icons` imports `@mdi/font` directly, so a missing peer dependency breaks the build instead of rendering blank icons.

## Example

A modal, opened and closed through data attributes:

```html
<button class="btn btn-primary" type="button" data-modal="#invite">Invite</button>

<div class="modal" id="invite" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Invite a teammate</h5>
        <button class="modal-close" type="button" data-modal-close aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input class="form-control" type="email" placeholder="name@example.com" />
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" type="button" data-modal-close>Cancel</button>
        <button class="btn btn-primary" type="button">Send</button>
      </div>
    </div>
  </div>
</div>
```

Modals trap focus, close on Escape or a backdrop click, lock page scroll, and stack in the order you open them.

## JavaScript API

The same components can be controlled from code:

```ts
Aksara.modal("#invite", { backdrop: true, keyboard: true }).show();
Aksara.toast("#saved", { delay: 5000 }).show();
Aksara.dropdown("#profileMenu").toggle();
Aksara.tooltip("[data-tooltip]", { placement: "top" });
```

If your app swaps markup in without a page load (HTMX, Turbo, a SPA router), call `Aksara.init(element)` on the new fragment. Instances are cleaned up automatically when their element leaves the DOM. `Aksara.destroy()` tears everything down.

## Dark mode

Light and dark themes are built in. Set the theme with an attribute or from JavaScript:

```html
<html data-theme="dark"></html>
```

```ts
Aksara.setTheme("system"); // "light" | "dark" | "system"
```

Component colors come from CSS variables, so they follow the theme without `dark:` classes.

## Select

When [Tom Select](https://tom-select.js.org) is on the page, every `select.form-select` gets filtering, multi-select chips and tagging. The styling ships in `aksara.css`, so you don't need Tom Select's stylesheet. Without Tom Select you get a styled native select from the same markup.

```html
<script src="https://cdn.jsdelivr.net/npm/tom-select@2.7.0/dist/js/tom-select.complete.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui@1.5.0/dist/aksara.min.js"></script>
```

With a bundler, register it once:

```ts
import TomSelect from "tom-select";

Aksara.useTomSelect(TomSelect).init();
```

## HTML string components

Each component also has a function that returns an HTML string. They don't touch the DOM, so they work in Node for server rendering:

```ts
import { Button } from "@abydahana/aksara-ui/components";

Button({ label: "Save", variant: "primary" });
// <button class="btn btn-primary" type="button">Save</button>
```

## Exports

| Import path                         | Contents                                                                            |
| ----------------------------------- | ----------------------------------------------------------------------------------- |
| `@abydahana/aksara-ui`              | JavaScript API (ESM and CommonJS)                                                   |
| `@abydahana/aksara-ui/css`          | Compiled CSS                                                                        |
| `@abydahana/aksara-ui/css/min`      | Minified CSS                                                                        |
| `@abydahana/aksara-ui/css/icons`    | Material Design Icons stylesheet                                                    |
| `@abydahana/aksara-ui/components`   | All HTML string components                                                          |
| `@abydahana/aksara-ui/components/*` | One group: `buttons`, `data`, `feedback`, `form`, `layout`, `navigation`, `overlay` |

The `dist/` folder also has `aksara.js` and `aksara.min.js` (IIFE builds that expose a global `Aksara`) for use with a `<script>` tag.

## Upgrading from 1.3 or earlier

Version 1.4 changed the utility grammar: numeric scales stop at 5, typography uses semantic names, and percentage sizing moved to arbitrary values. This repo includes a codemod for old class names:

```bash
node scripts/migrate-to-1.4.mjs src/**/*.html          # dry run, prints the changes
node scripts/migrate-to-1.4.mjs --write src/**/*.html  # apply them
```

Run the full migration only once per codebase, because it is not idempotent for some scales.

## Development

```bash
npm install
npm run dev      # docs site with live rebuild at http://localhost:3000
npm run test
npm run build    # CSS, JS bundles, type declarations and docs assets
npm run all      # type check, format, lint, test and build
```

The documentation lives in `src/docs/content/` as Markdown. Every component page has live examples, so `npm run dev` is the fastest way to browse what's available.

## License

MIT © Aby Dahana
