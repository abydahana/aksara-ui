# Breadcrumb

Breadcrumbs show where the current page sits in the navigation hierarchy and let users jump back up a level. Aksara inserts the separators with CSS, so the markup is just an ordered list of links that ends with the current page.

---

## Basic Breadcrumb

Wrap the list in `<nav aria-label="Breadcrumb">`, link every ancestor, and mark the last item with `aria-current="page"`. The current item is drawn in the body color at semibold weight; ancestors use the subtle color and darken on hover.

::html
<div class="docs-preview">
  <div class="mb-4">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Standard Trail</h4>
    <nav aria-label="Breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item" aria-current="page">Breadcrumb</li>
      </ol>
    </nav>
  </div>

  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Nested App Path</h4>
    <nav aria-label="Breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Workspace</a></li>
        <li class="breadcrumb-item"><a href="#">Projects</a></li>
        <li class="breadcrumb-item"><a href="#">Aksara UI</a></li>
        <li class="breadcrumb-item" aria-current="page">Release Notes</li>
      </ol>
    </nav>
  </div>
</div>
::end

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/components">Components</a></li>
    <li class="breadcrumb-item" aria-current="page">Breadcrumb</li>
  </ol>
</nav>
```

```js components
import { Breadcrumb } from "@abydahana/aksara-ui/components";

Breadcrumb({
  items: [{ label: "Home", href: "/" }, { label: "Components", href: "/components" }, { label: "Breadcrumb" }]
});
```

---

## Separators

The default separator is a slash. Add `.breadcrumb-dot` for a centered dot or `.breadcrumb-arrow` for a chevron. The arrow flips automatically inside `dir="rtl"`.

::html
<div class="docs-preview">
  <div class="vstack gap-4">
    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Slash (default)</h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Docs</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item" aria-current="page">Breadcrumb</li>
      </ol>
    </div>
    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Dot Separator</h4>
      <ol class="breadcrumb breadcrumb-dot">
        <li class="breadcrumb-item"><a href="#">Docs</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item" aria-current="page">Breadcrumb</li>
      </ol>
    </div>
    <div>
      <h4 class="mt-0 mb-3 fw-bold text-sm">Arrow Separator</h4>
      <ol class="breadcrumb breadcrumb-arrow">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item"><a href="#">Settings</a></li>
        <li class="breadcrumb-item" aria-current="page">Billing</li>
      </ol>
    </div>
    <div dir="rtl">
      <h4 class="mt-0 mb-3 fw-bold text-sm">Arrow Separator (RTL)</h4>
      <ol class="breadcrumb breadcrumb-arrow">
        <li class="breadcrumb-item"><a href="#">لوحة التحكم</a></li>
        <li class="breadcrumb-item"><a href="#">الإعدادات</a></li>
        <li class="breadcrumb-item" aria-current="page">الفواتير</li>
      </ol>
    </div>
  </div>
</div>
::end

```html
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

<!-- Arrow points the other way in RTL documents -->
<div dir="rtl">
  <ol class="breadcrumb breadcrumb-arrow">
    ...
  </ol>
</div>
```

```js components
import { Breadcrumb } from "@abydahana/aksara-ui/components";

Breadcrumb({
  separator: "dot",
  items: [{ label: "Docs" }, { label: "Components" }, { label: "Breadcrumb" }]
});

const items = [{ label: "Dashboard" }, { label: "Settings" }, { label: "Billing" }];

Breadcrumb({ separator: "arrow", items });

// Arrow points the other way in RTL documents
Breadcrumb({ separator: "arrow", items, attributes: { dir: "rtl" } });
```

---

## With Icons

Put an icon inside the link and lay it out with `hstack gap-1`. An icon-only home link needs an `aria-label`.

::html
<div class="docs-preview">
  <div class="vstack gap-4">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" class="hstack gap-1"><span class="mdi mdi-home-outline"></span> Home</a></li>
      <li class="breadcrumb-item"><a href="#" class="hstack gap-1"><span class="mdi mdi-folder-outline"></span> Projects</a></li>
      <li class="breadcrumb-item hstack gap-1" aria-current="page"><span class="mdi mdi-file-document-outline"></span> Proposal.pdf</li>
    </ol>
    <ol class="breadcrumb breadcrumb-arrow">
      <li class="breadcrumb-item"><a href="#" aria-label="Home"><span class="mdi mdi-home-outline text-base"></span></a></li>
      <li class="breadcrumb-item"><a href="#">Store</a></li>
      <li class="breadcrumb-item"><a href="#">Products</a></li>
      <li class="breadcrumb-item" aria-current="page">Wireless Earbuds Pro</li>
    </ol>
    <ol class="breadcrumb breadcrumb-dot">
      <li class="breadcrumb-item"><a href="#" class="hstack gap-1"><span class="avatar avatar-xs rounded-full avatar-info" aria-hidden="true">NB</span> Nina Brooks</a></li>
      <li class="breadcrumb-item"><a href="#">Repositories</a></li>
      <li class="breadcrumb-item hstack gap-1" aria-current="page"><span class="mdi mdi-source-branch"></span> aksara-ui</li>
    </ol>
  </div>
</div>
::end

```html
<ol class="breadcrumb">
  <li class="breadcrumb-item">
    <a href="#" class="hstack gap-1"><span class="mdi mdi-home-outline"></span> Home</a>
  </li>
  <li class="breadcrumb-item">
    <a href="#" class="hstack gap-1"><span class="mdi mdi-folder-outline"></span> Projects</a>
  </li>
  <li class="breadcrumb-item hstack gap-1" aria-current="page">
    <span class="mdi mdi-file-document-outline"></span> Proposal.pdf
  </li>
</ol>

<!-- Icon-only home link -->
<li class="breadcrumb-item">
  <a href="#" aria-label="Home"><span class="mdi mdi-home-outline"></span></a>
</li>
```

```js components
import { Breadcrumb } from "@abydahana/aksara-ui/components";

Breadcrumb({
  items: [
    { label: "Home", href: "#", icon: "mdi-home-outline" },
    { label: "Projects", href: "#", icon: "mdi-folder-outline" },
    { label: "Proposal.pdf", icon: "mdi-file-document-outline" }
  ]
});

// Icon-only home link
Breadcrumb({ items: [{ label: "Home", href: "#", icon: "mdi-home-outline", iconOnly: true }, { label: "Projects" }] });
```

---

## Sizes And Containers

The breadcrumb is `.875rem` by default. Text utilities on `.breadcrumb` resize the whole trail, separators included. Spacing and background utilities turn it into a bar.

::html
<div class="docs-preview">
  <div class="vstack gap-4">
    <ol class="breadcrumb text-xs">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item" aria-current="page">Extra small</li>
    </ol>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item" aria-current="page">Default</li>
    </ol>
    <ol class="breadcrumb text-base">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item" aria-current="page">Base</li>
    </ol>
    <ol class="breadcrumb breadcrumb-arrow bg-subtle px-3 py-2 rounded-md">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item" aria-current="page">Subtle bar</li>
    </ol>
    <ol class="breadcrumb breadcrumb-arrow border border-subtle px-3 py-2 rounded-pill">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item" aria-current="page">Outlined pill</li>
    </ol>
  </div>
</div>
::end

```html
<ol class="breadcrumb text-xs">
  ...
</ol>
<ol class="breadcrumb text-base">
  ...
</ol>

<ol class="breadcrumb breadcrumb-arrow bg-subtle px-3 py-2 rounded-md">
  ...
</ol>
<ol class="breadcrumb breadcrumb-arrow border border-subtle px-3 py-2 rounded-pill">
  ...
</ol>
```

```js components
import { Breadcrumb } from "@abydahana/aksara-ui/components";

const items = [{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: "Proposal.pdf" }];

Breadcrumb({ items, className: "text-xs" });
Breadcrumb({ items, className: "text-base" });

Breadcrumb({ items, separator: "arrow", className: "bg-subtle px-3 py-2 rounded-md" });
Breadcrumb({ items, separator: "arrow", className: "border border-subtle px-3 py-2 rounded-pill" });
```

---

## Long Paths

Truncate long labels with `truncate` and a max width, and collapse the middle of a deep path into a dropdown so the trail stays on one line.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="vstack gap-4">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Drive</a></li>
      <li class="breadcrumb-item"><a href="#" class="truncate max-w-[10rem]" title="Client deliverables and signed contracts 2026">Client deliverables and signed contracts 2026</a></li>
      <li class="breadcrumb-item" aria-current="page"><span class="truncate max-w-[12rem]" title="Final brand guidelines v4 (approved).pdf">Final brand guidelines v4 (approved).pdf</span></li>
    </ol>
    <ol class="breadcrumb breadcrumb-arrow">
      <li class="breadcrumb-item"><a href="#">Workspace</a></li>
      <li class="breadcrumb-item">
        <button class="btn btn-ghost btn-xs btn-icon" type="button" data-dropdown="#breadcrumbMoreMenu" aria-label="Show hidden path"><span class="mdi mdi-dots-horizontal"></span></button>
        <div id="breadcrumbMoreMenu" class="dropdown-menu">
          <a class="dropdown-item hstack gap-2" href="#"><span class="mdi mdi-folder-outline"></span> Engineering</a>
          <a class="dropdown-item hstack gap-2" href="#"><span class="mdi mdi-folder-outline"></span> Platform</a>
          <a class="dropdown-item hstack gap-2" href="#"><span class="mdi mdi-folder-outline"></span> Design system</a>
        </div>
      </li>
      <li class="breadcrumb-item"><a href="#">Components</a></li>
      <li class="breadcrumb-item" aria-current="page">Breadcrumb spec</li>
    </ol>
  </div>
</div>
::end

```html
<!-- Truncated labels -->
<li class="breadcrumb-item">
  <a href="#" class="truncate max-w-[10rem]" title="Client deliverables and signed contracts 2026">
    Client deliverables and signed contracts 2026
  </a>
</li>

<!-- Collapsed middle -->
<li class="breadcrumb-item">
  <button class="btn btn-ghost btn-xs btn-icon" type="button" data-dropdown="#pathMenu" aria-label="Show hidden path">
    <span class="mdi mdi-dots-horizontal"></span>
  </button>
  <div id="pathMenu" class="dropdown-menu">
    <a class="dropdown-item" href="#">Engineering</a>
    <a class="dropdown-item" href="#">Platform</a>
  </div>
</li>
```

```js components
import { Breadcrumb, Button, DropdownItem, DropdownMenu } from "@abydahana/aksara-ui/components";

Breadcrumb({
  items: [
    // Truncated labels
    {
      label: "Client deliverables and signed contracts 2026",
      href: "#",
      linkClassName: "truncate max-w-[10rem]",
      linkAttributes: { title: "Client deliverables and signed contracts 2026" }
    },
    // Collapsed middle: labelHtml without href renders straight into the <li>
    {
      label: "Hidden path",
      labelHtml:
        Button({
          ghost: true,
          size: "xs",
          className: "btn-icon",
          attributes: { "data-dropdown": "#pathMenu", "aria-label": "Show hidden path" },
          children: '<span class="mdi mdi-dots-horizontal"></span>'
        }) +
        DropdownMenu({
          id: "pathMenu",
          children:
            DropdownItem({ content: "Engineering", href: "#" }) + DropdownItem({ content: "Platform", href: "#" })
        })
    },
    { label: "Q3 report" }
  ]
});
```

---

## Page Header

A common layout: breadcrumb above the page title, with actions on the right.

::html
<div class="docs-preview">
  <div class="hstack justify-between items-end flex-wrap gap-3 pb-4 border-bottom border-subtle">
    <div>
      <nav aria-label="Breadcrumb" class="mb-2">
        <ol class="breadcrumb breadcrumb-arrow text-xs">
          <li class="breadcrumb-item"><a href="#" class="hstack gap-1"><span class="mdi mdi-view-dashboard-outline"></span> Dashboard</a></li>
          <li class="breadcrumb-item"><a href="#">Customers</a></li>
          <li class="breadcrumb-item" aria-current="page">Amy Lawson</li>
        </ol>
      </nav>
      <div class="m-0 text-2xl fw-bold">Amy Lawson</div>
      <div class="mt-1 mb-0 text-sm text-subtle">Customer since March 2024 · Pro plan</div>
    </div>
    <div class="hstack gap-2">
      <button class="btn btn-plain" type="button"><span class="mdi mdi-email-outline"></span> Message</button>
      <button class="btn btn-primary" type="button"><span class="mdi mdi-pencil-outline"></span> Edit</button>
    </div>
  </div>
</div>
::end

```html
<div class="hstack justify-between items-end flex-wrap gap-3 pb-4 border-bottom border-subtle">
  <div>
    <nav aria-label="Breadcrumb" class="mb-2">
      <ol class="breadcrumb breadcrumb-arrow text-xs">
        <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
        <li class="breadcrumb-item"><a href="/customers">Customers</a></li>
        <li class="breadcrumb-item" aria-current="page">Amy Lawson</li>
      </ol>
    </nav>
    <h1 class="m-0 text-2xl fw-bold">Amy Lawson</h1>
  </div>
  <div class="hstack gap-2">
    <button class="btn btn-plain" type="button">Message</button>
    <button class="btn btn-primary" type="button">Edit</button>
  </div>
</div>
```

```js components
import { Breadcrumb, Button } from "@abydahana/aksara-ui/components";

const trail = Breadcrumb({
  separator: "arrow",
  className: "text-xs",
  attributes: { class: "mb-2" },
  items: [{ label: "Dashboard", href: "/" }, { label: "Customers", href: "/customers" }, { label: "Amy Lawson" }]
});

`<div class="hstack justify-between items-end flex-wrap gap-3 pb-4 border-bottom border-subtle">
  <div>
    ${trail}
    <h1 class="m-0 text-2xl fw-bold">Amy Lawson</h1>
  </div>
  <div class="hstack gap-2">
    ${Button({ label: "Message", plain: true })}
    ${Button({ label: "Edit" })}
  </div>
</div>`;
```

---

## Accessibility

- Wrap the list in `<nav aria-label="Breadcrumb">` so it is announced as a landmark.
- Use an ordered list: the order is meaningful.
- Give the last item `aria-current="page"`. Aksara styles the current item through this attribute, not through a class.
- Separators are generated content, so screen readers do not announce them.

---

## String Component

```ts
import { Breadcrumb } from "@abydahana/aksara-ui/components";

Breadcrumb({
  separator: "arrow",
  items: [{ label: "Dashboard", href: "/" }, { label: "Settings", href: "/settings" }, { label: "Billing" }]
});
```

Output:

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb breadcrumb-arrow">
    <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
    <li class="breadcrumb-item"><a href="/settings">Settings</a></li>
    <li class="breadcrumb-item active" aria-current="page">Billing</li>
  </ol>
</nav>
```

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>items</code></td><td><code>BreadcrumbItem[]</code></td><td>—</td><td>The trail, from the root to the current page. Required.</td></tr>
      <tr><td><code>separator</code></td><td><code>"slash"</code> | <code>"dot"</code> | <code>"arrow"</code></td><td><code>"slash"</code></td><td>Adds <code>.breadcrumb-dot</code> or <code>.breadcrumb-arrow</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the <code>&lt;ol&gt;</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra attributes on the <code>&lt;nav&gt;</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

`BreadcrumbItem` fields:

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Visible text (escaped).</td></tr>
      <tr><td><code>href</code></td><td><code>string</code></td><td><code>"#"</code></td><td>Link target for non-current items. Unsafe URLs are neutralised.</td></tr>
      <tr><td><code>active</code></td><td><code>boolean</code></td><td>last item</td><td>Renders the item as the current page (no link, <code>aria-current="page"</code>).</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td>—</td><td>Leading icon, e.g. <code>"mdi-home-outline"</code>. The link (or current item) gets <code>hstack gap-1</code>.</td></tr>
      <tr><td><code>iconOnly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show only the icon; <code>label</code> becomes the link's <code>aria-label</code>.</td></tr>
      <tr><td><code>labelHtml</code></td><td><code>string</code></td><td>—</td><td>Raw HTML instead of the escaped label. Without <code>href</code>, a non-current item renders it straight into the <code>&lt;li&gt;</code> (no link).</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td>—</td><td>Extra classes on the <code>&lt;li&gt;</code>.</td></tr>
      <tr><td><code>linkClassName</code></td><td><code>string</code></td><td>—</td><td>Extra classes on the link, e.g. <code>"truncate max-w-[10rem]"</code>.</td></tr>
      <tr><td><code>linkAttributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra attributes on the link, e.g. <code>{ title }</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Class / attribute</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.breadcrumb</code></td><td>Wrapping flex list without bullets, <code>.875rem</code>, subtle text color, <code>.5rem</code> gap.</td></tr>
      <tr><td><code>.breadcrumb-item</code></td><td>Inline flex item; every item after the first gets a <code>/</code> separator.</td></tr>
      <tr><td><code>.breadcrumb-dot</code></td><td>Replaces the separator with a centered dot (<code>•</code>).</td></tr>
      <tr><td><code>.breadcrumb-arrow</code></td><td>Replaces the separator with a chevron (<code>›</code>, or <code>‹</code> under <code>dir="rtl"</code>).</td></tr>
      <tr><td><code>aria-current="page"</code></td><td>Body color and semibold weight for the current item.</td></tr>
      <tr><td><code>.breadcrumb a</code></td><td>Inherits the subtle color, no underline, darkens on hover.</td></tr>
    </tbody>
  </table>
</div>
::end

Breadcrumbs have no JavaScript behavior of their own; the collapsed-path example uses the Dropdown component.
