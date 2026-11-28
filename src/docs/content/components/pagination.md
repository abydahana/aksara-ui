# Pagination

Provide page navigation links to distribute massive, tabular datasets or list indexes across multiple paginated pages.

## Interactive Navigation Showcase

Aksara UI features a clean, bordered pagination pattern. Use active (`aria-current="page"`) and disabled (`.disabled` or `disabled` attribute) modifiers to declare current state:

::html
<div class="docs-preview py-4">
  <div class="mb-4">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Standard Pagination</h4>
    <ul class="pagination">
      <li><a href="#" class="page-link">Previous</a></li>
      <li><a href="#" class="page-link">1</a></li>
      <li><a href="#" class="page-link" aria-current="page">2</a></li>
      <li><a href="#" class="page-link">3</a></li>
      <li><a href="#" class="page-link">Next</a></li>
    </ul>
  </div>

  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Premium Icon Navigation</h4>
    <ul class="pagination">
      <li><a href="#" class="page-link disabled" aria-disabled="true"><span class="mdi mdi-chevron-double-left"></span></a></li>
      <li><a href="#" class="page-link"><span class="mdi mdi-chevron-left"></span></a></li>
      <li><a href="#" class="page-link">1</a></li>
      <li><a href="#" class="page-link">2</a></li>
      <li><a href="#" class="page-link" aria-current="page">3</a></li>
      <li><a href="#" class="page-link">4</a></li>
      <li><a href="#" class="page-link"><span class="mdi mdi-chevron-right"></span></a></li>
      <li><a href="#" class="page-link"><span class="mdi mdi-chevron-double-right"></span></a></li>
    </ul>
  </div>
</div>
::end

```html
<!-- Standard Pagination -->
<ul class="pagination">
  <li><a href="#" class="page-link">Previous</a></li>
  <li><a href="#" class="page-link">1</a></li>
  <li><a href="#" class="page-link" aria-current="page">2</a></li>
  <li><a href="#" class="page-link">3</a></li>
  <li><a href="#" class="page-link">Next</a></li>
</ul>

<!-- Icon Navigation -->
<ul class="pagination">
  <li>
    <a href="#" class="page-link disabled" aria-disabled="true">
      <span class="mdi mdi-chevron-double-left"></span>
    </a>
  </li>
  <li><a href="#" class="page-link">1</a></li>
  <li><a href="#" class="page-link" aria-current="page">2</a></li>
  <li>
    <a href="#" class="page-link">
      <span class="mdi mdi-chevron-right"></span>
    </a>
  </li>
</ul>
```

```js components
import { Pagination } from "@abydahana/aksara-ui/components";

// Standard Pagination
Pagination({
  items: [{ label: "Previous" }, { label: "1" }, { label: "2", active: true }, { label: "3" }, { label: "Next" }]
});

// Icon Navigation: `content` is raw HTML, `label` is the escaped fallback
Pagination({
  items: [
    { label: "First", content: '<span class="mdi mdi-chevron-double-left"></span>', disabled: true },
    { label: "1" },
    { label: "2", active: true },
    { label: "Next", content: '<span class="mdi mdi-chevron-right"></span>' }
  ]
});
```

---

## Outline Pagination

Page links are borderless by default: the current page is a solid primary pill and the rest only tint on hover. Add `pagination-outline` to give every link a hairline border, which reads better on busy backgrounds.

::html
<div class="docs-preview py-4">
  <ul class="pagination pagination-outline">
    <li><a href="#" class="page-link"><span class="mdi mdi-chevron-left"></span></a></li>
    <li><a href="#" class="page-link">1</a></li>
    <li><a href="#" class="page-link" aria-current="page">2</a></li>
    <li><a href="#" class="page-link">3</a></li>
    <li><span class="page-link disabled">…</span></li>
    <li><a href="#" class="page-link">12</a></li>
    <li><a href="#" class="page-link"><span class="mdi mdi-chevron-right"></span></a></li>
  </ul>
</div>
::end

```html
<ul class="pagination pagination-outline">
  <li><a href="#" class="page-link">1</a></li>
  <li><a href="#" class="page-link" aria-current="page">2</a></li>
  <li><a href="#" class="page-link">3</a></li>
</ul>
```

```js components
import { Pagination } from "@abydahana/aksara-ui/components";

Pagination({
  className: "pagination-outline",
  items: [{ label: "1" }, { label: "2", active: true }, { label: "3" }]
});
```

---

## Technical Specifications

- **`.pagination`**: Flexbox list wrapper that clears default list bullet decorators, aligns page links in a clean row, and manages item spacing.
- **`.page-link`**: Styles individual page trigger blocks with standard border dimensions, smooth rounded corners (`--aksara-radius-md`), hover states, and transparent soft primary active states.
- **`.disabled`**: Reduces opacity and disables click-through pointer gestures.
- **`Pagination` string component**: each item's `label` is plain text and is escaped. Use `content` for raw HTML such as icons or `&laquo;` (it takes precedence over `label`):

```ts
import { Pagination } from "@abydahana/aksara-ui/components";

Pagination({
  items: [
    { label: "Previous", content: '<span class="mdi mdi-chevron-left"></span>', href: "?page=1" },
    { label: "1", href: "?page=1" },
    { label: "2", href: "?page=2", active: true }
  ]
});
```
