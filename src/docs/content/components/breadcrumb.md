# Breadcrumb

Breadcrumbs indicate the current page's location within a navigational hierarchy, allowing users to easily traverse back up the document structure.

## Core Navigation Showcase

Aksara UI features a lightweight, fully automated breadcrumb navigation pattern. It automatically appends logical separators (`/`) between nested items and styles active leaves seamlessly:

::html
<div class="docs-preview py-4">
  <div class="mb-4">
    <h4 class="mt-0 mb-3 font-700 text-sm">Standard Trail</h4>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" class="hstack gap-2"><span class="mdi mdi-home-outline"></span> Home</a></li>
      <li class="breadcrumb-item"><a href="#">Components</a></li>
      <li class="breadcrumb-item" aria-current="page">Breadcrumb</li>
    </ol>
  </div>

  <div>
    <h4 class="mt-0 mb-3 font-700 text-sm">Nested App Path</h4>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Workspace</a></li>
      <li class="breadcrumb-item"><a href="#">Projects</a></li>
      <li class="breadcrumb-item"><a href="#">Aksara UI</a></li>
      <li class="breadcrumb-item" aria-current="page">Release Notes</li>
    </ol>
  </div>

  <div class="mt-4">
    <h4 class="mt-0 mb-3 font-700 text-sm">Dot Separator</h4>
    <ol class="breadcrumb breadcrumb-dot">
      <li class="breadcrumb-item"><a href="#">Docs</a></li>
      <li class="breadcrumb-item"><a href="#">Components</a></li>
      <li class="breadcrumb-item" aria-current="page">Breadcrumb</li>
    </ol>
  </div>

  <div class="mt-4">
    <h4 class="mt-0 mb-3 font-700 text-sm">Arrow Separator</h4>
    <ol class="breadcrumb breadcrumb-arrow">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Settings</a></li>
      <li class="breadcrumb-item" aria-current="page">Billing</li>
    </ol>
  </div>
</div>
::end

```html
<ol class="breadcrumb">
  <li class="breadcrumb-item">
    <a href="#" class="hstack gap-2"> <span class="mdi mdi-home-outline"></span> Home </a>
  </li>
  <li class="breadcrumb-item"><a href="#">Components</a></li>
  <li class="breadcrumb-item" aria-current="page">Breadcrumb</li>
</ol>

<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Workspace</a></li>
  <li class="breadcrumb-item"><a href="#">Projects</a></li>
  <li class="breadcrumb-item"><a href="#">Aksara UI</a></li>
  <li class="breadcrumb-item" aria-current="page">Release Notes</li>
</ol>

<ol class="breadcrumb breadcrumb-dot">
  <li class="breadcrumb-item"><a href="#">Docs</a></li>
  <li class="breadcrumb-item"><a href="#">Components</a></li>
  <li class="breadcrumb-item" aria-current="page">Breadcrumb</li>
</ol>

<ol class="breadcrumb breadcrumb-arrow">
  <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
  <li class="breadcrumb-item"><a href="#">Settings</a></li>
  <li class="breadcrumb-item" aria-current="page">Billing</li>
</ol>
```

---

## Technical Specifications

- **`.breadcrumb`**: Marks the outer ordered list container, removing browser margins, paddings, and default bullet decorators.
- **`.breadcrumb-item`**: Marks internal link segments, automatically appending a logical separator `/` in front of subsequent elements.
- **`.breadcrumb-dot`**: Uses a centered dot separator.
- **`.breadcrumb-arrow`**: Uses an arrow separator that flips automatically in RTL documents.
- **`aria-current="page"`**: Applies to the last list item to declare that the current segment represents the active page for screen reader accessibility.
