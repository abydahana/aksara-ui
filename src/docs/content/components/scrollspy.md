# Scrollspy

Automatically update navigation active highlights based on scroll position to indicate the user's current reading location.

## Interactive Navigation Showcase

Aksara UI components link beautifully with scroll listener hooks. Scroll the code-preview card content block below to see list highlights shift:

::html
<div class="docs-preview py-6">
  <div class="row gap-4">
    <div class="col-12 md:col-4">
      <div id="scrollspyList" class="list-group" data-docs-scrollspy-nav data-docs-scrollspy-active="class">
        <a href="#section-1" class="list-group-item active" data-docs-scrollspy-link data-docs-scrollspy-container="#scrollspyTarget">Section One</a>
        <a href="#section-2" class="list-group-item" data-docs-scrollspy-link data-docs-scrollspy-container="#scrollspyTarget">Section Two</a>
        <a href="#section-3" class="list-group-item" data-docs-scrollspy-link data-docs-scrollspy-container="#scrollspyTarget">Section Three</a>
      </div>
    </div>
    <div class="col-12 md:col-8">
      <div id="scrollspyTarget" class="bg-body border border-subtle rounded-12 p-5 overflow-y-auto" style="height: 180px; position: relative;">
        <div id="section-1" class="mb-6">
          <h4 class="mt-0 mb-2 font-700">Section One</h4>
          <p class="text-subtle text-xs mb-0 mt-0 leading-22">
            This is Section One. Scrolling down past this paragraph changes the active state hook of the navigation list item on the left.
          </p>
        </div>
        <div id="section-2" class="mb-6 pt-4">
          <h4 class="mt-0 mb-2 font-700">Section Two</h4>
          <p class="text-subtle text-xs mb-0 mt-0 leading-22">
            This is Section Two. When the scroll container boundary intersects this title, the list group highlights this index.
          </p>
        </div>
        <div id="section-3" class="mb-6 pt-4" style="padding-bottom: 80px;">
          <h4 class="mt-0 mb-2 font-700">Section Three</h4>
          <p class="text-subtle text-xs mb-0 mt-0 leading-22">
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
      <a href="#section-1" class="list-group-item active">Section One</a>
      <a href="#section-2" class="list-group-item">Section Two</a>
      <a href="#section-3" class="list-group-item">Section Three</a>
    </div>
  </div>

  <!-- Scrollspy Content Panel -->
  <div class="col-8">
    <div id="scrollspyTarget" class="overflow-y-auto" style="height: 200px;">
      <div id="section-1">...</div>
      <div id="section-2">...</div>
      <div id="section-3">...</div>
    </div>
  </div>
</div>
```

---

## Navbar Scrollspy

Use regular navbar links when the tracked sections live in a scrollable content area.

::html
<div class="docs-preview py-6">
  <nav class="navbar rounded-12 border border-subtle mb-4">
    <a class="navbar-brand" href="#scrollspyNavbarOne" data-docs-scrollspy-link data-docs-scrollspy-container="#scrollspyNavbarTarget">Docs</a>
    <div id="scrollspyNavbarLinks" class="navbar-nav" data-docs-scrollspy-nav data-docs-scrollspy-current="page">
      <a class="nav-link" href="#scrollspyNavbarOne" aria-current="page" data-docs-scrollspy-link data-docs-scrollspy-container="#scrollspyNavbarTarget">Intro</a>
      <a class="nav-link" href="#scrollspyNavbarTwo" data-docs-scrollspy-link data-docs-scrollspy-container="#scrollspyNavbarTarget">API</a>
      <a class="nav-link" href="#scrollspyNavbarThree" data-docs-scrollspy-link data-docs-scrollspy-container="#scrollspyNavbarTarget">Events</a>
    </div>
  </nav>

  <div id="scrollspyNavbarTarget" class="bg-body border border-subtle rounded-12 p-5 overflow-y-auto" style="height: 180px;">
    <section id="scrollspyNavbarOne" class="mb-7">
      <h4 class="mt-0 mb-2 font-700">Intro</h4>
      <p class="m-0 text-subtle text-sm leading-22">Navbar scrollspy is useful when page sections are broad and the active item should live in the top navigation.</p>
    </section>
    <section id="scrollspyNavbarTwo" class="mb-7 pt-4">
      <h4 class="mt-0 mb-2 font-700">API</h4>
      <p class="m-0 text-subtle text-sm leading-22">Measure section offsets against the scroll container and toggle <code>aria-current</code> on matching links.</p>
    </section>
    <section id="scrollspyNavbarThree" class="pt-4" style="padding-bottom: 90px;">
      <h4 class="mt-0 mb-2 font-700">Events</h4>
      <p class="m-0 text-subtle text-sm leading-22">This pattern works with plain anchors, navbar items, pills, or any link group.</p>
    </section>
  </div>
</div>
::end

---

## Nav Pills Scrollspy

Use `nav nav-pills` when the scrollspy links act more like local section filters.

::html
<div class="docs-preview py-6">
  <div id="scrollspyPillsLinks" class="nav nav-pills mb-4" data-docs-scrollspy-nav data-docs-scrollspy-active="class" data-docs-scrollspy-current="true">
    <a class="nav-link active" href="#scrollspyPillOne" aria-current="true" data-docs-scrollspy-link data-docs-scrollspy-container="#scrollspyPillsTarget">Profile</a>
    <a class="nav-link" href="#scrollspyPillTwo" data-docs-scrollspy-link data-docs-scrollspy-container="#scrollspyPillsTarget">Billing</a>
    <a class="nav-link" href="#scrollspyPillThree" data-docs-scrollspy-link data-docs-scrollspy-container="#scrollspyPillsTarget">Security</a>
  </div>

  <div id="scrollspyPillsTarget" class="bg-body border border-subtle rounded-12 p-5 overflow-y-auto" style="height: 180px;">
    <section id="scrollspyPillOne" class="mb-7">
      <h4 class="mt-0 mb-2 font-700">Profile</h4>
      <p class="m-0 text-subtle text-sm leading-22">Pill scrollspy is a compact way to show which settings section is currently visible.</p>
    </section>
    <section id="scrollspyPillTwo" class="mb-7 pt-4">
      <h4 class="mt-0 mb-2 font-700">Billing</h4>
      <p class="m-0 text-subtle text-sm leading-22">The active pill is just a class and ARIA state update, so it stays framework-light.</p>
    </section>
    <section id="scrollspyPillThree" class="pt-4" style="padding-bottom: 90px;">
      <h4 class="mt-0 mb-2 font-700">Security</h4>
      <p class="m-0 text-subtle text-sm leading-22">This uses the same logic as list-group and navbar scrollspy samples.</p>
    </section>
  </div>
</div>
::end

```html
<div class="nav nav-pills">
  <a class="nav-link active" href="#profile" aria-current="true">Profile</a>
  <a class="nav-link" href="#billing">Billing</a>
</div>
```

---

## Technical Specifications

- **Scroll Interception**: Bind a simple viewport scroll listener inside Javascript to measure container offsets using standard `getBoundingClientRect()` checks.
- **Dynamic Classes**: Toggle `.active` classes on navigation anchor lists to smoothly transition focus indicators as elements slide into viewport view frames.
