# Kbd

Kbd renders keyboard keys and shortcuts: a single key such as `Esc`, a combination such as `⌘ K`, or a sequence. The bare `<kbd>` element is styled out of the box, so plain HTML and Markdown content gets key caps with no extra class. Wrap combinations in `.kbd-group` to space the keys evenly.

::html
<div class="docs-preview">
  <div class="docs-row">
    <kbd>Esc</kbd>
    <kbd>Enter</kbd>
    <kbd>Tab</kbd>
    <span class="kbd-group"><kbd>⌘</kbd><kbd>K</kbd></span>
    <span class="kbd-group"><kbd>Ctrl</kbd><span aria-hidden="true">+</span><kbd>Shift</kbd><span aria-hidden="true">+</span><kbd>P</kbd></span>
    <span class="kbd-group"><kbd>↑</kbd><kbd>↓</kbd></span>
  </div>
</div>
::end

```html
<kbd>Esc</kbd>

<span class="kbd-group"><kbd>⌘</kbd><kbd>K</kbd></span>

<span class="kbd-group">
  <kbd>Ctrl</kbd><span aria-hidden="true">+</span><kbd>Shift</kbd><span aria-hidden="true">+</span><kbd>P</kbd>
</span>
```

```js components
import { Kbd } from "@abydahana/aksara-ui/components";

Kbd({ keys: "Esc" });
Kbd({ keys: ["⌘", "K"] });
Kbd({ keys: ["Ctrl", "Shift", "P"], separator: "+" });
```

---

## Inline In Text

A key cap aligns to the text baseline and uses the sans font at `.75rem`, so it sits comfortably inside a sentence, a form hint, or an empty state.

::html
<div class="docs-preview">
  <p class="m-0">Press <kbd>Esc</kbd> to close the dialog, or <kbd>Enter</kbd> to save your changes.</p>
  <p class="m-0 text-sm text-subtle">Tip: use <span class="kbd-group"><kbd>⌘</kbd><kbd>Enter</kbd></span> to send the message without leaving the keyboard.</p>
  <div class="max-w-[420px]">
    <label class="form-label" for="kbdTags">Tags</label>
    <input class="form-control" id="kbdTags" placeholder="design, checkout, mobile">
    <div class="form-text">Separate tags with a comma or press <kbd class="kbd-sm">Enter</kbd> after each one.</div>
  </div>
</div>
::end

```html
<p>Press <kbd>Esc</kbd> to close the dialog, or <kbd>Enter</kbd> to save your changes.</p>

<div class="form-text">Separate tags with a comma or press <kbd class="kbd-sm">Enter</kbd> after each one.</div>
```

```js components
import { Kbd } from "@abydahana/aksara-ui/components";

`Press ${Kbd({ keys: "Esc" })} to close the dialog.`;
`Separate tags with a comma or press ${Kbd({ keys: "Enter", size: "sm" })} after each one.`;
```

---

## Combinations And Sequences

Keys in a `.kbd-group` sit `.25rem` apart. Put a separator between them when the relationship matters: `+` for keys pressed together, "then" for keys pressed one after the other. Mark the separator `aria-hidden="true"` so screen readers only read the keys.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="kbd-group"><kbd>⌘</kbd><kbd>⇧</kbd><kbd>P</kbd></span>
    <span class="kbd-group"><kbd>Ctrl</kbd><span aria-hidden="true">+</span><kbd>C</kbd></span>
    <span class="kbd-group"><kbd>Alt</kbd><span aria-hidden="true">+</span><kbd>F4</kbd></span>
    <span class="kbd-group"><kbd>G</kbd><span aria-hidden="true">then</span><kbd>I</kbd></span>
    <span class="kbd-group"><kbd>Space</kbd></span>
    <span class="kbd-group"><kbd>←</kbd><kbd>→</kbd></span>
  </div>
</div>
::end

```html
<span class="kbd-group"><kbd>⌘</kbd><kbd>⇧</kbd><kbd>P</kbd></span>
<span class="kbd-group"><kbd>Ctrl</kbd><span aria-hidden="true">+</span><kbd>C</kbd></span>
<span class="kbd-group"><kbd>G</kbd><span aria-hidden="true">then</span><kbd>I</kbd></span>
```

```js components
import { Kbd } from "@abydahana/aksara-ui/components";

Kbd({ keys: ["⌘", "⇧", "P"] });
Kbd({ keys: ["Ctrl", "C"], separator: "+" });
Kbd({ keys: ["G", "I"], separator: "then" });
```

---

## Sizes

The default key is `1.5rem` tall. Use `.kbd-sm` inside small buttons, form hints and dense menus, and `.kbd-lg` for onboarding screens or a shortcut that is the focus of the page.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="kbd-group"><kbd class="kbd-sm">⌘</kbd><kbd class="kbd-sm">K</kbd></span>
    <span class="kbd-group"><kbd>⌘</kbd><kbd>K</kbd></span>
    <span class="kbd-group"><kbd class="kbd-lg">⌘</kbd><kbd class="kbd-lg">K</kbd></span>
  </div>
</div>
::end

```html
<span class="kbd-group"><kbd class="kbd-sm">⌘</kbd><kbd class="kbd-sm">K</kbd></span>
<span class="kbd-group"><kbd>⌘</kbd><kbd>K</kbd></span>
<span class="kbd-group"><kbd class="kbd-lg">⌘</kbd><kbd class="kbd-lg">K</kbd></span>
```

```js components
import { Kbd } from "@abydahana/aksara-ui/components";

Kbd({ keys: ["⌘", "K"], size: "sm" });
Kbd({ keys: ["⌘", "K"] });
Kbd({ keys: ["⌘", "K"], size: "lg" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Height / min width</th><th>Font size</th><th>Radius</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.kbd-sm</code></td><td><code>1.25rem</code></td><td><code>.6875rem</code></td><td><code>.3125rem</code></td></tr>
      <tr><td><code>kbd</code> / <code>.kbd</code></td><td><code>1.5rem</code></td><td><code>.75rem</code></td><td><code>.375rem</code></td></tr>
      <tr><td><code>.kbd-lg</code></td><td><code>2rem</code></td><td><code>.875rem</code></td><td><code>.5rem</code></td></tr>
    </tbody>
  </table>
</div>
::end

---

## Search Shortcut Hint

Show the shortcut that focuses a search field inside the field itself. With `.form-icon`, put the keys in a `.form-icon-end` slot, widen it with `[inline-size:3rem]`, and give the input `pe-5` so typed text never runs under the keys. The slot ignores pointer events, so clicks still reach the input. In an `.input-group`, the keys go in an `.input-group-text`.

::html
<div class="docs-preview">
  <div class="max-w-[420px] vstack gap-3">
    <div class="form-icon">
      <span class="form-icon-start mdi mdi-magnify"></span>
      <input class="form-control pe-5" type="search" placeholder="Search orders, customers…" aria-label="Search" aria-keyshortcuts="Meta+K">
      <span class="form-icon-end [inline-size:3rem]"><span class="kbd-group"><kbd class="kbd-sm">⌘</kbd><kbd class="kbd-sm">K</kbd></span></span>
    </div>
    <div class="input-group">
      <span class="input-group-text"><span class="mdi mdi-magnify"></span></span>
      <input class="form-control" type="search" placeholder="Jump to a page" aria-label="Jump to a page" aria-keyshortcuts="Control+K">
      <span class="input-group-text"><span class="kbd-group"><kbd class="kbd-sm">Ctrl</kbd><kbd class="kbd-sm">K</kbd></span></span>
    </div>
    <button type="button" class="btn btn-outline-secondary justify-between w-full">
      <span class="hstack gap-2"><span class="mdi mdi-magnify"></span> Search docs</span>
      <kbd class="kbd-sm">/</kbd>
    </button>
  </div>
</div>
::end

```html
<div class="form-icon">
  <span class="form-icon-start mdi mdi-magnify"></span>
  <input class="form-control pe-5" type="search" placeholder="Search orders, customers…" aria-keyshortcuts="Meta+K" />
  <span class="form-icon-end [inline-size:3rem]">
    <span class="kbd-group"><kbd class="kbd-sm">⌘</kbd><kbd class="kbd-sm">K</kbd></span>
  </span>
</div>

<div class="input-group">
  <span class="input-group-text"><span class="mdi mdi-magnify"></span></span>
  <input class="form-control" type="search" placeholder="Jump to a page" aria-keyshortcuts="Control+K" />
  <span class="input-group-text">
    <span class="kbd-group"><kbd class="kbd-sm">Ctrl</kbd><kbd class="kbd-sm">K</kbd></span>
  </span>
</div>
```

```js components
import { Kbd } from "@abydahana/aksara-ui/components";

const hint = Kbd({ keys: ["⌘", "K"], size: "sm" });

`<div class="form-icon">
  <span class="form-icon-start mdi mdi-magnify"></span>
  <input class="form-control pe-5" type="search" aria-keyshortcuts="Meta+K" />
  <span class="form-icon-end [inline-size:3rem]">${hint}</span>
</div>`;
```

`aria-keyshortcuts` tells assistive technology which keys focus the field. The visual hint does not wire up the shortcut; listen for it yourself:

```js
const search = document.querySelector("#orderSearch");
const isMac = /Mac|iPhone|iPad/.test(navigator.userAgent);

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "k" && (isMac ? event.metaKey : event.ctrlKey)) {
    event.preventDefault();
    search.focus();
  }
});
```

---

## Menu Shortcuts

Push the keys to the end of a `.dropdown-item` with `ms-auto`. Small keys keep the row height unchanged. The menus below are static previews (`position-static d-block`); in a real dropdown the same markup goes inside your `.dropdown-menu`.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row items-start">
    <div class="dropdown-menu position-static d-block w-[260px]" role="menu" aria-label="Edit">
      <button type="button" class="dropdown-item" role="menuitem"><span class="mdi mdi-undo"></span> Undo <span class="kbd-group ms-auto"><kbd class="kbd-sm">⌘</kbd><kbd class="kbd-sm">Z</kbd></span></button>
      <button type="button" class="dropdown-item" role="menuitem"><span class="mdi mdi-redo"></span> Redo <span class="kbd-group ms-auto"><kbd class="kbd-sm">⌘</kbd><kbd class="kbd-sm">⇧</kbd><kbd class="kbd-sm">Z</kbd></span></button>
      <div class="dropdown-divider"></div>
      <button type="button" class="dropdown-item" role="menuitem"><span class="mdi mdi-content-cut"></span> Cut <span class="kbd-group ms-auto"><kbd class="kbd-sm">⌘</kbd><kbd class="kbd-sm">X</kbd></span></button>
      <button type="button" class="dropdown-item" role="menuitem"><span class="mdi mdi-content-copy"></span> Copy <span class="kbd-group ms-auto"><kbd class="kbd-sm">⌘</kbd><kbd class="kbd-sm">C</kbd></span></button>
      <button type="button" class="dropdown-item" role="menuitem"><span class="mdi mdi-content-paste"></span> Paste <span class="kbd-group ms-auto"><kbd class="kbd-sm">⌘</kbd><kbd class="kbd-sm">V</kbd></span></button>
      <div class="dropdown-divider"></div>
      <button type="button" class="dropdown-item dropdown-item-danger" role="menuitem"><span class="mdi mdi-trash-can-outline"></span> Delete <span class="kbd-group ms-auto"><kbd class="kbd-sm">⌫</kbd></span></button>
    </div>
    <div class="dropdown-menu dropdown-menu-dark position-static d-block w-[260px]" role="menu" aria-label="Invoice actions">
      <div class="dropdown-header">Invoice INV-2048</div>
      <button type="button" class="dropdown-item" role="menuitem"><span class="mdi mdi-send-outline"></span> Send to customer <span class="kbd-group ms-auto"><kbd class="kbd-sm">S</kbd></span></button>
      <button type="button" class="dropdown-item" role="menuitem"><span class="mdi mdi-download-outline"></span> Download PDF <span class="kbd-group ms-auto"><kbd class="kbd-sm">D</kbd></span></button>
      <button type="button" class="dropdown-item" role="menuitem"><span class="mdi mdi-check-circle-outline"></span> Mark as paid <span class="kbd-group ms-auto"><kbd class="kbd-sm">P</kbd></span></button>
    </div>
  </div>
</div>
::end

```html
<div class="dropdown-menu" role="menu">
  <button type="button" class="dropdown-item" role="menuitem">
    <span class="mdi mdi-content-copy"></span> Copy
    <span class="kbd-group ms-auto"><kbd class="kbd-sm">⌘</kbd><kbd class="kbd-sm">C</kbd></span>
  </button>
  <button type="button" class="dropdown-item dropdown-item-danger" role="menuitem">
    <span class="mdi mdi-trash-can-outline"></span> Delete
    <span class="kbd-group ms-auto"><kbd class="kbd-sm">⌫</kbd></span>
  </button>
</div>
```

```js components
import { Kbd } from "@abydahana/aksara-ui/components";

// A className forces the .kbd-group wrapper, even for a single key
Kbd({ keys: ["⌘", "C"], size: "sm", className: "ms-auto" });
Kbd({ keys: "⌫", size: "sm", className: "ms-auto" });
```

---

## Shortcut Cheat Sheet

List the shortcuts of an app in a table or a list group. Keep the action on the start side and the keys on the end side so the eye can scan both columns.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="card">
        <div class="card-header fw-semibold">General</div>
        <div class="table-responsive">
          <table class="table m-0">
            <tbody>
              <tr><td>Open command palette</td><td class="text-end"><span class="kbd-group"><kbd>⌘</kbd><kbd>K</kbd></span></td></tr>
              <tr><td>Search</td><td class="text-end"><kbd>/</kbd></td></tr>
              <tr><td>Show this help</td><td class="text-end"><kbd>?</kbd></td></tr>
              <tr><td>Close panel</td><td class="text-end"><kbd>Esc</kbd></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card">
        <div class="card-header fw-semibold">Navigation</div>
        <div class="list-group list-group-flush">
          <div class="list-group-item hstack justify-between gap-3"><span>Go to inbox</span><span class="kbd-group"><kbd>G</kbd><span aria-hidden="true">then</span><kbd>I</kbd></span></div>
          <div class="list-group-item hstack justify-between gap-3"><span>Go to orders</span><span class="kbd-group"><kbd>G</kbd><span aria-hidden="true">then</span><kbd>O</kbd></span></div>
          <div class="list-group-item hstack justify-between gap-3"><span>Next item</span><span class="kbd-group"><kbd>J</kbd><span aria-hidden="true">or</span><kbd>↓</kbd></span></div>
          <div class="list-group-item hstack justify-between gap-3"><span>Previous item</span><span class="kbd-group"><kbd>K</kbd><span aria-hidden="true">or</span><kbd>↑</kbd></span></div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<table class="table">
  <tbody>
    <tr>
      <td>Open command palette</td>
      <td class="text-end">
        <span class="kbd-group"><kbd>⌘</kbd><kbd>K</kbd></span>
      </td>
    </tr>
    <tr>
      <td>Close panel</td>
      <td class="text-end"><kbd>Esc</kbd></td>
    </tr>
  </tbody>
</table>

<div class="list-group list-group-flush">
  <div class="list-group-item hstack justify-between gap-3">
    <span>Go to inbox</span>
    <span class="kbd-group"><kbd>G</kbd><span aria-hidden="true">then</span><kbd>I</kbd></span>
  </div>
</div>
```

```js components
import { Kbd } from "@abydahana/aksara-ui/components";

const shortcuts = [
  { action: "Open command palette", keys: ["⌘", "K"] },
  { action: "Close panel", keys: "Esc" }
];

shortcuts
  .map((item) => `<tr><td>${item.action}</td><td class="text-end">${Kbd({ keys: item.keys })}</td></tr>`)
  .join("");

Kbd({ keys: ["G", "I"], separator: "then" });
```

---

## Accessibility

- `<kbd>` already means "user input from a keyboard", so no extra role is needed.
- Symbols such as `⌘`, `⇧` and `⌥` are read inconsistently ("place of interest sign"). The `Kbd` component does this for you (⌘ Command, ⌥ Option, ⇧ Shift, ⌃ Control, ↵ Enter, ⌫ Backspace, ⎋ Escape, ⇥ Tab and the arrows); in hand-written markup hide the symbol and add a spoken name: `<kbd><span aria-hidden="true">⌘</span><span class="visually-hidden">Command</span></kbd>`.
- A visible hint is not a working shortcut. Add `aria-keyshortcuts` to the control the shortcut activates and implement the key handler yourself.
- Show the platform's modifier: `⌘` on macOS and iOS, `Ctrl` elsewhere.

::html
<div class="docs-preview">
  <p class="m-0">Press <span class="kbd-group"><kbd><span aria-hidden="true">⌘</span><span class="visually-hidden">Command</span></kbd><kbd>K</kbd></span> to open the command palette.</p>
</div>
::end

```html
<span class="kbd-group">
  <kbd><span aria-hidden="true">⌘</span><span class="visually-hidden">Command</span></kbd>
  <kbd>K</kbd>
</span>
```

---

## String Component

`Kbd` renders one `<kbd>` per key. A single key without `className` returns the bare `<kbd>`; several keys, or any `className`, are wrapped in a `<span class="kbd-group">`. Keys and the separator are escaped, and the separator is rendered as `<span aria-hidden="true">`.

```ts
import { Kbd } from "@abydahana/aksara-ui/components";

Kbd({ keys: "Esc" }); // <kbd>Esc</kbd>
Kbd({ keys: "Enter", size: "sm" }); // <kbd class="kbd-sm">Enter</kbd>
Kbd({ keys: ["⌘", "K"] }); // <span class="kbd-group"><kbd>⌘</kbd><kbd>K</kbd></span>
Kbd({ keys: ["Ctrl", "Shift", "P"], separator: "+" });
Kbd({ keys: "/", size: "lg", className: "ms-auto" }); // single key in a .kbd-group
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>keys</code></td><td><code>string | string[]</code></td><td>—</td><td>One key, or the keys of a combination in order. Required.</td></tr>
      <tr><td><code>size</code></td><td><code>"sm" | "md" | "lg"</code></td><td><code>"md"</code></td><td>Adds <code>.kbd-sm</code> or <code>.kbd-lg</code> to every key.</td></tr>
      <tr><td><code>separator</code></td><td><code>string</code></td><td><code>""</code></td><td>Text between keys, such as <code>"+"</code> or <code>"then"</code>. Hidden from screen readers. Empty puts keys side by side.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the <code>.kbd-group</code> wrapper. Setting it always renders the wrapper.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class / element</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>kbd</code></td><td>The bare element is styled: key cap on the surface color, <code>1px</code> border with a <code>2px</code> bottom edge, <code>.75rem</code> semibold sans text, no wrapping.</td></tr>
      <tr><td><code>.kbd</code></td><td>The same key cap style for elements other than <code>&lt;kbd&gt;</code>.</td></tr>
      <tr><td><code>.kbd-sm</code></td><td>Small key, <code>1.25rem</code> tall.</td></tr>
      <tr><td><code>.kbd-lg</code></td><td>Large key, <code>2rem</code> tall.</td></tr>
      <tr><td><code>.kbd-group</code></td><td>Inline flex wrapper with a <code>.25rem</code> gap. Separators inside it use <code>.75rem</code> subtle text.</td></tr>
    </tbody>
  </table>
</div>
::end
