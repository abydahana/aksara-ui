# Pagination

Provide page navigation links to distribute massive, tabular datasets or list indexes across multiple paginated pages.

## Interactive Navigation Showcase

Aksara UI features a clean, bordered pagination pattern. Use active (`aria-current="page"`) and disabled (`.disabled` or `disabled` attribute) modifiers to declare current state:

::html
<div class="docs-preview py-6">
  <div class="mb-6">
    <h4 class="mt-0 mb-3 font-700 text-sm">Standard Pagination</h4>
    <ul class="pagination">
      <li><a href="#" class="page-link">Previous</a></li>
      <li><a href="#" class="page-link">1</a></li>
      <li><a href="#" class="page-link" aria-current="page">2</a></li>
      <li><a href="#" class="page-link">3</a></li>
      <li><a href="#" class="page-link">Next</a></li>
    </ul>
  </div>

  <div>
    <h4 class="mt-0 mb-3 font-700 text-sm">Premium Icon Navigation</h4>
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

---

## Technical Specifications

- **`.pagination`**: Flexbox list wrapper that clears default list bullet decorators, aligns page links in a clean row, and manages item spacing.
- **`.page-link`**: Styles individual page trigger blocks with standard border dimensions, smooth rounded corners (`--aksara-radius-md`), hover states, and transparent soft primary active states.
- **`.disabled`**: Reduces opacity and disables click-through pointer gestures.
