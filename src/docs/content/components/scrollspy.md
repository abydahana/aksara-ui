# Scrollspy

Automatically update navigation active highlights based on scroll position to indicate the user's current reading location.

## Interactive Navigation Showcase

Give each link `data-scrollspy-link`, an `href` pointing at a section, and `data-scrollspy-container` with the scrolling element. Aksara highlights the link of the section you are reading (`.active` + `aria-current`), smooth-scrolls on click, and marks the last section once the container reaches the bottom. Scroll the panel below:

::html
<div class="docs-preview py-4">
  <div class="row gap-4">
    <div class="col-12 md:col-4">
      <div id="scrollspyList" class="list-group">
        <a href="#section-1" class="list-group-item" data-scrollspy-link data-scrollspy-container="#scrollspyTarget">Section One</a>
        <a href="#section-2" class="list-group-item" data-scrollspy-link data-scrollspy-container="#scrollspyTarget">Section Two</a>
        <a href="#section-3" class="list-group-item" data-scrollspy-link data-scrollspy-container="#scrollspyTarget">Section Three</a>
      </div>
    </div>
    <div class="col-12 md:col-8">
      <div id="scrollspyTarget" class="bg-body border border-subtle rounded-[12px] p-5 overflow-y-auto h-[180px] [position:relative]">
        <div id="section-1" class="mb-4">
          <h4 class="mt-0 mb-2 fw-bold">Section One</h4>
          <p class="text-subtle text-xs mb-0 mt-0 leading-[22px]">
            This is Section One. Scrolling down past this paragraph changes the active state hook of the navigation list item on the left.
          </p>
        </div>
        <div id="section-2" class="mb-4 pt-4">
          <h4 class="mt-0 mb-2 fw-bold">Section Two</h4>
          <p class="text-subtle text-xs mb-0 mt-0 leading-[22px]">
            This is Section Two. When the scroll container boundary intersects this title, the list group highlights this index.
          </p>
        </div>
        <div id="section-3" class="mb-4 pt-4 [padding-bottom:80px]">
          <h4 class="mt-0 mb-2 fw-bold">Section Three</h4>
          <p class="text-subtle text-xs mb-0 mt-0 leading-[22px]">
            This is Section Three. Use native logical spacings and transition effects to compose professional user guides or side-by-side reading panels.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="row">
  <!-- Scrollspy List Group Links -->
  <div class="col-4">
    <div id="scrollspyList" class="list-group">
      <a href="#section-1" class="list-group-item" data-scrollspy-link data-scrollspy-container="#scrollspyTarget"
        >Section One</a
      >
      <a href="#section-2" class="list-group-item" data-scrollspy-link data-scrollspy-container="#scrollspyTarget"
        >Section Two</a
      >
      <a href="#section-3" class="list-group-item" data-scrollspy-link data-scrollspy-container="#scrollspyTarget"
        >Section Three</a
      >
    </div>
  </div>

  <!-- Scrollspy Content Panel -->
  <div class="col-8">
    <div id="scrollspyTarget" class="overflow-y-auto h-[200px]">
      <div id="section-1">...</div>
      <div id="section-2">...</div>
      <div id="section-3">...</div>
    </div>
  </div>
</div>
```

```js components
import { ScrollspyNav, ScrollspyTarget } from "@abydahana/aksara-ui/components";

`<div class="row">
  <div class="col-4">
    ${ScrollspyNav({
      targetId: "scrollspyTarget",
      attributes: { id: "scrollspyList" },
      items: [
        { id: "section-1", label: "Section One" },
        { id: "section-2", label: "Section Two" },
        { id: "section-3", label: "Section Three" }
      ]
    })}
  </div>
  <div class="col-8">
    ${ScrollspyTarget({
      id: "scrollspyTarget",
      height: 200,
      className: "overflow-y-auto",
      children: `<div id="section-1">...</div><div id="section-2">...</div><div id="section-3">...</div>`
    })}
  </div>
</div>`;
```

---

## Navbar Scrollspy

Use regular navbar links when the tracked sections live in a scrollable content area.

::html
<div class="docs-preview py-4">
  <nav class="navbar rounded-[12px] border border-subtle mb-4">
    <span class="navbar-brand">Docs</span>
    <div id="scrollspyNavbarLinks" class="navbar-nav">
      <a class="nav-link" href="#scrollspyNavbarOne" data-scrollspy-link data-scrollspy-container="#scrollspyNavbarTarget">Intro</a>
      <a class="nav-link" href="#scrollspyNavbarTwo" data-scrollspy-link data-scrollspy-container="#scrollspyNavbarTarget">API</a>
      <a class="nav-link" href="#scrollspyNavbarThree" data-scrollspy-link data-scrollspy-container="#scrollspyNavbarTarget">Events</a>
    </div>
  </nav>

  <div id="scrollspyNavbarTarget" class="bg-body border border-subtle rounded-[12px] p-5 overflow-y-auto h-[180px]">
    <section id="scrollspyNavbarOne" class="mb-5">
      <h4 class="mt-0 mb-2 fw-bold">Intro</h4>
      <p class="m-0 text-subtle text-sm leading-[22px]">Navbar scrollspy is useful when page sections are broad and the active item should live in the top navigation.</p>
    </section>
    <section id="scrollspyNavbarTwo" class="mb-5 pt-4">
      <h4 class="mt-0 mb-2 fw-bold">API</h4>
      <p class="m-0 text-subtle text-sm leading-[22px]">Measure section offsets against the scroll container and toggle <code>aria-current</code> on matching links.</p>
    </section>
    <section id="scrollspyNavbarThree" class="pt-4 [padding-bottom:90px]">
      <h4 class="mt-0 mb-2 fw-bold">Events</h4>
      <p class="m-0 text-subtle text-sm leading-[22px]">This pattern works with plain anchors, navbar items, pills, or any link group.</p>
    </section>
  </div>
</div>
::end

---

## Nav Pills Scrollspy

Use `nav nav-pills` when the scrollspy links act more like local section filters.

::html
<div class="docs-preview py-4">
  <div id="scrollspyPillsLinks" class="nav nav-pills mb-4">
    <a class="nav-link" href="#scrollspyPillOne" data-scrollspy-link data-scrollspy-container="#scrollspyPillsTarget">Profile</a>
    <a class="nav-link" href="#scrollspyPillTwo" data-scrollspy-link data-scrollspy-container="#scrollspyPillsTarget">Billing</a>
    <a class="nav-link" href="#scrollspyPillThree" data-scrollspy-link data-scrollspy-container="#scrollspyPillsTarget">Security</a>
  </div>

  <div id="scrollspyPillsTarget" class="bg-body border border-subtle rounded-[12px] p-5 overflow-y-auto h-[180px]">
    <section id="scrollspyPillOne" class="mb-5">
      <h4 class="mt-0 mb-2 fw-bold">Profile</h4>
      <p class="m-0 text-subtle text-sm leading-[22px]">Pill scrollspy is a compact way to show which settings section is currently visible.</p>
    </section>
    <section id="scrollspyPillTwo" class="mb-5 pt-4">
      <h4 class="mt-0 mb-2 fw-bold">Billing</h4>
      <p class="m-0 text-subtle text-sm leading-[22px]">The active pill is just a class and ARIA state update, so it stays framework-light.</p>
    </section>
    <section id="scrollspyPillThree" class="pt-4 [padding-bottom:90px]">
      <h4 class="mt-0 mb-2 fw-bold">Security</h4>
      <p class="m-0 text-subtle text-sm leading-[22px]">This uses the same logic as list-group and navbar scrollspy samples.</p>
    </section>
  </div>
</div>
::end

```html
<div class="nav nav-pills">
  <a class="nav-link" href="#profile" data-scrollspy-link data-scrollspy-container="#settingsPanel">Profile</a>
  <a class="nav-link" href="#billing" data-scrollspy-link data-scrollspy-container="#settingsPanel">Billing</a>
</div>
```

```js components
import { ScrollspyNav } from "@abydahana/aksara-ui/components";

ScrollspyNav({
  as: "nav",
  vertical: false,
  className: "nav-pills",
  targetId: "settingsPanel",
  items: [
    { id: "profile", label: "Profile" },
    { id: "billing", label: "Billing" }
  ]
});
```

---

## Page Scrolling

Leave out `data-scrollspy-container` (or set it to `window`) to track sections of the page itself, for example a sticky table of contents. `data-scrollspy-offset` on a link or any ancestor sets how far below the top edge a section becomes active (default: 96px for the page, a quarter of the container height up to 80px for containers), which is useful under a fixed header.

```html
<nav class="sidebar-nav [position:sticky] [top:5rem]" data-scrollspy-offset="120">
  <a class="sidebar-nav-item" href="#install" data-scrollspy-link>Install</a>
  <a class="sidebar-nav-item" href="#usage" data-scrollspy-link>Usage</a>
  <a class="sidebar-nav-item" href="#api" data-scrollspy-link>API</a>
</nav>

<section id="install">...</section>
<section id="usage">...</section>
<section id="api">...</section>
```

```js components
import { ScrollspyNav } from "@abydahana/aksara-ui/components";

// No targetId: the links follow the page scroll
ScrollspyNav({
  as: "sidebar",
  attributes: { style: "position: sticky; top: 5rem", "data-scrollspy-offset": "120" },
  items: [
    { id: "install", label: "Install" },
    { id: "usage", label: "Usage" },
    { id: "api", label: "API" }
  ]
});

`<section id="install">...</section>
<section id="usage">...</section>
<section id="api">...</section>`;
```

---

## Reference

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Attribute / event</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>data-scrollspy-link</code></td><td>Marks a link whose <code>href="#id"</code> points at a tracked section. Clicking it smooth-scrolls to the section.</td></tr>
      <tr><td><code>data-scrollspy-container</code></td><td>Selector of the scrolling element. Omit (or <code>window</code>) for the page.</td></tr>
      <tr><td><code>data-scrollspy-offset</code></td><td>Activation line in px below the top edge; on the link or an ancestor.</td></tr>
      <tr><td><code>.active</code>, <code>aria-current="true"</code></td><td>Set on the current link; styled by list groups, nav links, pills and sidebar items.</td></tr>
      <tr><td><code>aksara:scrollspy:change</code></td><td>Fired on the newly active link. Detail: <code>{ link, section }</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

Positions are measured with `getBoundingClientRect()`, so the container does not need `position: relative`, and scroll handling is batched to one update per animation frame. `Aksara.init()` syncs the highlight on load and on resize.

```js
document.addEventListener("aksara:scrollspy:change", (event) => {
  console.log("Now reading", event.detail.section.id);
});
```
