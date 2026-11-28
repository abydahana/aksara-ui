# Offcanvas Drawers

Offcanvas panels slide in from an edge of the viewport: a navigation menu from the start, a filter or cart panel from the end, a search bar from the top, or an action sheet from the bottom. Aksara traps focus inside the open panel, closes it on Escape or a click outside, and locks page scrolling while it is open.

---

## Interactive Showcase

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-primary" type="button" data-offcanvas="#demoOffcanvasDrawer">Launch side drawer</button>
  </div>

  <aside id="demoOffcanvasDrawer" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="demoOffcanvasTitle">
    <div class="offcanvas-header">
      <strong id="demoOffcanvasTitle" class="text-lg">Quick links</strong>
      <button class="modal-close" type="button" data-offcanvas-close aria-label="Close panel"></button>
    </div>
    <div class="offcanvas-body">
      <p class="mt-0 text-subtle text-sm mb-4">This panel slides in from the inline end (right in LTR). Focus is trapped inside it while it is open.</p>
      <nav class="sidebar-nav mb-4">
        <a href="#/core/utility-first" class="sidebar-nav-item" data-offcanvas-close><span class="sidebar-nav-icon mdi mdi-home-outline"></span><span class="sidebar-nav-label">Overview</span></a>
        <a href="#/helpers/javascript" class="sidebar-nav-item" data-offcanvas-close><span class="sidebar-nav-icon mdi mdi-flash-outline"></span><span class="sidebar-nav-label">JavaScript API</span></a>
        <a href="#/utilities/colors" class="sidebar-nav-item" data-offcanvas-close><span class="sidebar-nav-icon mdi mdi-palette-outline"></span><span class="sidebar-nav-label">Colors</span></a>
      </nav>
      <button class="btn btn-sm btn-ghost btn-block" type="button" data-offcanvas-close>Close panel</button>
    </div>
  </aside>
</div>
::end

```html
<button class="btn btn-primary" type="button" data-offcanvas="#sidebar">Launch side drawer</button>

<aside id="sidebar" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="sidebarTitle">
  <div class="offcanvas-header">
    <strong id="sidebarTitle">Quick links</strong>
    <button class="modal-close" type="button" data-offcanvas-close aria-label="Close panel"></button>
  </div>
  <div class="offcanvas-body">...</div>
</aside>
```

```js components
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "@abydahana/aksara-ui/components";

Button({ label: "Launch side drawer", attributes: { "data-offcanvas": "#sidebar" } });

Offcanvas({
  id: "sidebar",
  placement: "end",
  attributes: { "aria-labelledby": "sidebarTitle" },
  children:
    OffcanvasHeader({ closeLabel: "Close panel", children: '<strong id="sidebarTitle">Quick links</strong>' }) +
    OffcanvasBody("...")
});
```

---

## Placement

The base `.offcanvas` slides from the inline start (left in LTR, right in RTL). Add a modifier for the other edges. Side panels are `20rem` wide; top and bottom panels span the width and are up to `18rem` tall.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-offcanvas="#placementStart"><span class="mdi mdi-dock-left"></span> Start</button>
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-offcanvas="#placementEnd"><span class="mdi mdi-dock-right"></span> End</button>
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-offcanvas="#placementTop"><span class="mdi mdi-dock-top"></span> Top</button>
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-offcanvas="#placementBottom"><span class="mdi mdi-dock-bottom"></span> Bottom</button>
  </div>

  <aside id="placementStart" class="offcanvas" tabindex="-1" aria-labelledby="placementStartTitle">
    <div class="offcanvas-header"><span id="placementStartTitle">offcanvas (start)</span><button class="modal-close" type="button" data-offcanvas-close aria-label="Close"></button></div>
    <div class="offcanvas-body text-subtle text-sm">The default placement. Mirrors to the right edge in RTL documents.</div>
  </aside>
  <aside id="placementEnd" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="placementEndTitle">
    <div class="offcanvas-header"><span id="placementEndTitle">offcanvas-end</span><button class="modal-close" type="button" data-offcanvas-close aria-label="Close"></button></div>
    <div class="offcanvas-body text-subtle text-sm">Slides from the inline end. Mirrors to the left edge in RTL documents.</div>
  </aside>
  <aside id="placementTop" class="offcanvas offcanvas-top" tabindex="-1" aria-labelledby="placementTopTitle">
    <div class="offcanvas-header"><span id="placementTopTitle">offcanvas-top</span><button class="modal-close" type="button" data-offcanvas-close aria-label="Close"></button></div>
    <div class="offcanvas-body text-subtle text-sm">Full width, drops down from the top edge.</div>
  </aside>
  <aside id="placementBottom" class="offcanvas offcanvas-bottom" tabindex="-1" aria-labelledby="placementBottomTitle">
    <div class="offcanvas-header"><span id="placementBottomTitle">offcanvas-bottom</span><button class="modal-close" type="button" data-offcanvas-close aria-label="Close"></button></div>
    <div class="offcanvas-body text-subtle text-sm">Full width, rises from the bottom edge.</div>
  </aside>
</div>
::end

```html
<aside class="offcanvas">...</aside>
<aside class="offcanvas offcanvas-end">...</aside>
<aside class="offcanvas offcanvas-top">...</aside>
<aside class="offcanvas offcanvas-bottom">...</aside>
```

```js components
import { Offcanvas } from "@abydahana/aksara-ui/components";

// placement defaults to "start"
["start", "end", "top", "bottom"]
  .map((placement) => Offcanvas({ id: `${placement}Drawer`, placement, children: "..." }))
  .join("\n");
```

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Class</th><th>Slides from</th><th>Size</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>offcanvas</code></td><td>Inline start (left, right in RTL)</td><td><code>min(100%, 20rem)</code> wide</td></tr>
      <tr><td class="text-nowrap"><code>offcanvas-end</code></td><td>Inline end (right, left in RTL)</td><td><code>min(100%, 20rem)</code> wide</td></tr>
      <tr><td class="text-nowrap"><code>offcanvas-top</code></td><td>Top</td><td>Full width, <code>min(100%, 18rem)</code> tall</td></tr>
      <tr><td class="text-nowrap"><code>offcanvas-bottom</code></td><td>Bottom</td><td>Full width, <code>min(100%, 18rem)</code> tall</td></tr>
      <tr><td class="text-nowrap"><code>offcanvas-open</code></td><td>Added by the runtime while the panel is shown.</td><td>none</td></tr>
    </tbody>
  </table>
</div>
::end

Override the size with an inline style, for example `style="width: min(100%, 26rem)"` or `style="height: auto"`.

---

## Filter Panel

A filter drawer from the end with a scrolling body and a sticky action footer. `vstack` on the panel makes it a column; `flex-1 overflow-y-auto` lets the body scroll while the header and footer stay put.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-offcanvas="#filterPanel">
      <span class="mdi mdi-tune-variant"></span> Filters <span class="badge badge-sm badge-primary">3</span>
    </button>
  </div>

  <aside id="filterPanel" class="offcanvas offcanvas-end vstack w-[min(100%,24rem)]" tabindex="-1" aria-labelledby="filterPanelTitle">
    <div class="offcanvas-header border-bottom pb-3">
      <span id="filterPanelTitle" class="hstack gap-2"><span class="mdi mdi-tune-variant"></span> Filters</span>
      <button class="modal-close" type="button" data-offcanvas-close aria-label="Close filters"></button>
    </div>
    <div class="offcanvas-body flex-1 overflow-y-auto pt-4 vstack gap-4">
      <div>
        <p class="form-label">Active filters</p>
        <div class="hstack flex-wrap gap-2">
          <span class="chip chip-soft-primary chip-sm"><span class="chip-label">In stock</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove In stock"><span class="mdi mdi-close"></span></button></span>
          <span class="chip chip-soft-primary chip-sm"><span class="chip-label">Under $200</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove Under $200"><span class="mdi mdi-close"></span></button></span>
          <span class="chip chip-soft-primary chip-sm"><span class="chip-label">4★ and up</span><button type="button" class="chip-action border-0 bg-transparent p-0 text-current" data-chip-remove aria-label="Remove 4 stars and up"><span class="mdi mdi-close"></span></button></span>
        </div>
      </div>
      <div>
        <label class="form-label" for="filterSort">Sort by</label>
        <select id="filterSort" class="form-select">
          <option>Most relevant</option>
          <option>Newest</option>
          <option>Price: low to high</option>
          <option>Price: high to low</option>
        </select>
      </div>
      <div>
        <p class="form-label">Category</p>
        <div class="vstack gap-1">
          <label class="form-check"><input class="form-check-input" type="checkbox" checked> <span class="form-check-label">Headphones</span></label>
          <label class="form-check"><input class="form-check-input" type="checkbox"> <span class="form-check-label">Speakers</span></label>
          <label class="form-check"><input class="form-check-input" type="checkbox" checked> <span class="form-check-label">Microphones</span></label>
          <label class="form-check"><input class="form-check-input" type="checkbox"> <span class="form-check-label">Accessories</span></label>
        </div>
      </div>
      <div>
        <label class="form-label hstack justify-between" for="filterPrice">Max price (USD) <output id="filterPriceOut" class="text-subtle text-sm">200</output></label>
        <input id="filterPrice" class="form-range" type="range" min="20" max="500" step="10" value="200" data-range-output="#filterPriceOut">
      </div>
      <div>
        <p class="form-label">Rating</p>
        <div class="vstack gap-1">
          <label class="form-check"><input class="form-check-input" type="radio" name="filterRating" checked> <span class="form-check-label">4★ and up</span></label>
          <label class="form-check"><input class="form-check-input" type="radio" name="filterRating"> <span class="form-check-label">3★ and up</span></label>
          <label class="form-check"><input class="form-check-input" type="radio" name="filterRating"> <span class="form-check-label">Any rating</span></label>
        </div>
      </div>
      <label class="form-switch"><input type="checkbox" role="switch" checked> <span class="form-check-label">In stock only</span></label>
    </div>
    <div class="hstack gap-2 p-3 border-top bg-body-secondary">
      <button class="btn btn-ghost flex-1" type="button">Reset</button>
      <button class="btn btn-primary flex-1" type="button" data-offcanvas-close>Show 128 results</button>
    </div>
  </aside>
</div>
::end

```html
<aside id="filterPanel" class="offcanvas offcanvas-end vstack" tabindex="-1" aria-labelledby="filterPanelTitle">
  <div class="offcanvas-header border-bottom pb-3">
    <span id="filterPanelTitle">Filters</span>
    <button class="modal-close" type="button" data-offcanvas-close aria-label="Close filters"></button>
  </div>
  <div class="offcanvas-body flex-1 overflow-y-auto pt-4 vstack gap-4">
    <div>
      <label class="form-label" for="filterSort">Sort by</label>
      <select id="filterSort" class="form-select">
        ...
      </select>
    </div>
    <div class="vstack gap-1">
      <label class="form-check"
        ><input class="form-check-input" type="checkbox" /> <span class="form-check-label">Headphones</span></label
      >
    </div>
    <input class="form-range" type="range" min="20" max="500" value="200" />
  </div>
  <div class="hstack gap-2 p-3 border-top bg-body-secondary">
    <button class="btn btn-ghost flex-1" type="button">Reset</button>
    <button class="btn btn-primary flex-1" type="button" data-offcanvas-close>Show results</button>
  </div>
</aside>
```

```js components
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  FormLabel,
  Select,
  Checkbox,
  Range,
  Button
} from "@abydahana/aksara-ui/components";

Offcanvas({
  id: "filterPanel",
  placement: "end",
  className: "vstack",
  attributes: { "aria-labelledby": "filterPanelTitle" },
  children:
    OffcanvasHeader({
      className: "border-bottom pb-3",
      closeLabel: "Close filters",
      children: '<span id="filterPanelTitle">Filters</span>'
    }) +
    OffcanvasBody(
      `<div>
        ${FormLabel({ label: "Sort by", htmlFor: "filterSort" })}
        ${Select({ id: "filterSort", native: true, options: [{ label: "Most relevant", value: "relevant" }] })}
      </div>
      <div class="vstack gap-1">${Checkbox({ label: "Headphones" })}</div>
      ${Range({ min: 20, max: 500, value: 200 })}`,
      "flex-1 overflow-y-auto pt-4 vstack gap-4"
    ) +
    `<div class="hstack gap-2 p-3 border-top bg-body-secondary">
      ${Button({ ghost: true, label: "Reset", className: "flex-1" })}
      ${Button({ label: "Show results", className: "flex-1", attributes: { "data-offcanvas-close": true } })}
    </div>`
});
```

---

## Mobile Menu

A start drawer that replaces the navbar links on small screens. Point the navbar toggler at it with `data-offcanvas`.

::html
<div class="docs-preview">
  <nav class="navbar border rounded-lg">
    <button class="navbar-toggler" type="button" data-offcanvas="#mobileMenu" aria-controls="mobileMenu" aria-label="Open menu"><span class="mdi mdi-menu text-lg"></span></button>
    <a class="navbar-brand" href="#"><span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara</a>
  </nav>

  <aside id="mobileMenu" class="offcanvas vstack" tabindex="-1" aria-labelledby="mobileMenuTitle">
    <div class="offcanvas-header">
      <span id="mobileMenuTitle" class="hstack gap-2"><span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara</span>
      <button class="modal-close" type="button" data-offcanvas-close aria-label="Close menu"></button>
    </div>
    <div class="offcanvas-body flex-1 overflow-y-auto px-3">
      <nav class="sidebar-nav" aria-label="Main">
        <a href="#" class="sidebar-nav-item" aria-current="page"><span class="sidebar-nav-icon mdi mdi-view-dashboard-outline"></span><span class="sidebar-nav-label">Dashboard</span></a>
        <a href="#" class="sidebar-nav-item"><span class="sidebar-nav-icon mdi mdi-folder-outline"></span><span class="sidebar-nav-label">Projects</span><span class="sidebar-nav-badge">8</span></a>
        <a href="#" class="sidebar-nav-item"><span class="sidebar-nav-icon mdi mdi-inbox-outline"></span><span class="sidebar-nav-label">Inbox</span><span class="sidebar-nav-badge">24</span></a>
        <a href="#" class="sidebar-nav-item"><span class="sidebar-nav-icon mdi mdi-calendar-blank-outline"></span><span class="sidebar-nav-label">Calendar</span></a>
        <span class="sidebar-nav-header">Workspace</span>
        <a href="#" class="sidebar-nav-item"><span class="sidebar-nav-icon mdi mdi-account-group-outline"></span><span class="sidebar-nav-label">Team</span></a>
        <a href="#" class="sidebar-nav-item"><span class="sidebar-nav-icon mdi mdi-chart-line"></span><span class="sidebar-nav-label">Reports</span></a>
        <a href="#" class="sidebar-nav-item"><span class="sidebar-nav-icon mdi mdi-cog-outline"></span><span class="sidebar-nav-label">Settings</span></a>
      </nav>
    </div>
    <div class="hstack gap-3 p-3 border-top">
      <span class="avatar avatar-md rounded-full avatar-primary" aria-hidden="true">MC<span class="avatar-status bg-success"></span></span>
      <span class="flex-1 min-w-0"><strong class="block text-sm truncate">Maya Chen</strong><span class="block text-xs text-subtle truncate">maya.chen@example.com</span></span>
      <button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Sign out" data-tooltip="Sign out"><span class="mdi mdi-logout"></span></button>
    </div>
  </aside>
</div>
::end

```html
<nav class="navbar">
  <button class="navbar-toggler" type="button" data-offcanvas="#mobileMenu" aria-label="Open menu">
    <span class="mdi mdi-menu"></span>
  </button>
  <a class="navbar-brand" href="#">Aksara</a>
</nav>

<aside id="mobileMenu" class="offcanvas vstack" tabindex="-1" aria-labelledby="mobileMenuTitle">
  <div class="offcanvas-header">
    <span id="mobileMenuTitle">Aksara</span>
    <button class="modal-close" type="button" data-offcanvas-close aria-label="Close menu"></button>
  </div>
  <div class="offcanvas-body flex-1 overflow-y-auto px-3">
    <nav class="sidebar-nav" aria-label="Main">
      <a href="#" class="sidebar-nav-item" aria-current="page">
        <span class="sidebar-nav-icon mdi mdi-view-dashboard-outline"></span>
        <span class="sidebar-nav-label">Dashboard</span>
      </a>
      <a href="#" class="sidebar-nav-item">
        <span class="sidebar-nav-icon mdi mdi-inbox-outline"></span>
        <span class="sidebar-nav-label">Inbox</span>
        <span class="sidebar-nav-badge">24</span>
      </a>
      <span class="sidebar-nav-header">Workspace</span>
      ...
    </nav>
  </div>
  <div class="hstack gap-3 p-3 border-top">
    <span class="avatar avatar-md rounded-full avatar-primary" aria-hidden="true">MC</span>
    <span class="flex-1 min-w-0"><strong class="block text-sm">Maya Chen</strong></span>
  </div>
</aside>
```

```js components
import { Navbar, Offcanvas, OffcanvasHeader, OffcanvasBody, SidebarNav, Avatar } from "@abydahana/aksara-ui/components";

// expand: false keeps the bar a plain .navbar; the toggler comes before the brand, so both go in children
Navbar({
  expand: false,
  children: `<button class="navbar-toggler" type="button" data-offcanvas="#mobileMenu" aria-label="Open menu">
      <span class="mdi mdi-menu"></span>
    </button>
    <a class="navbar-brand" href="#">Aksara</a>`
});

Offcanvas({
  id: "mobileMenu",
  className: "vstack",
  attributes: { "aria-labelledby": "mobileMenuTitle" },
  children:
    OffcanvasHeader({ closeLabel: "Close menu", children: '<span id="mobileMenuTitle">Aksara</span>' }) +
    OffcanvasBody(
      SidebarNav({
        ariaLabel: "Main",
        items: [
          { label: "Dashboard", icon: '<span class="mdi mdi-view-dashboard-outline"></span>', href: "#", active: true },
          { label: "Inbox", icon: '<span class="mdi mdi-inbox-outline"></span>', href: "#", badge: "24" },
          { header: "Workspace" }
        ]
      }),
      "flex-1 overflow-y-auto px-3"
    ) +
    `<div class="hstack gap-3 p-3 border-top">
      ${Avatar({ initials: "MC", variant: "primary", attributes: { "aria-hidden": "true" } })}
      <span class="flex-1 min-w-0"><strong class="block text-sm">Maya Chen</strong></span>
    </div>`
});
```

---

## Cart Drawer

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-soft-primary hstack gap-2" type="button" data-offcanvas="#cartDrawer"><span class="mdi mdi-cart-outline"></span> Cart <span class="badge badge-sm badge-primary">2</span></button>
  </div>

  <aside id="cartDrawer" class="offcanvas offcanvas-end vstack w-[min(100%,26rem)]" tabindex="-1" aria-labelledby="cartDrawerTitle">
    <div class="offcanvas-header border-bottom pb-3">
      <span id="cartDrawerTitle">Your cart (2)</span>
      <button class="modal-close" type="button" data-offcanvas-close aria-label="Close cart"></button>
    </div>
    <div class="offcanvas-body flex-1 overflow-y-auto pt-4 vstack gap-3">
      <div class="hstack gap-3">
        <span class="avatar avatar-xl rounded-lg bg-subtle text-subtle"><span class="mdi mdi-headphones"></span></span>
        <div class="flex-1 min-w-0">
          <strong class="block text-sm">Studio headphones</strong>
          <span class="text-xs text-subtle">Black · Wireless</span>
          <div class="hstack gap-2 mt-2">
            <button class="btn btn-outline-secondary btn-xs btn-icon" type="button" aria-label="Decrease"><span class="mdi mdi-minus"></span></button>
            <span class="text-sm">1</span>
            <button class="btn btn-outline-secondary btn-xs btn-icon" type="button" aria-label="Increase"><span class="mdi mdi-plus"></span></button>
          </div>
        </div>
        <strong class="text-sm">$189</strong>
      </div>
      <div class="hstack gap-3">
        <span class="avatar avatar-xl rounded-lg bg-subtle text-subtle"><span class="mdi mdi-microphone-variant"></span></span>
        <div class="flex-1 min-w-0">
          <strong class="block text-sm">USB microphone</strong>
          <span class="text-xs text-subtle">Silver</span>
          <div class="hstack gap-2 mt-2">
            <button class="btn btn-outline-secondary btn-xs btn-icon" type="button" aria-label="Decrease"><span class="mdi mdi-minus"></span></button>
            <span class="text-sm">2</span>
            <button class="btn btn-outline-secondary btn-xs btn-icon" type="button" aria-label="Increase"><span class="mdi mdi-plus"></span></button>
          </div>
        </div>
        <strong class="text-sm">$158</strong>
      </div>
    </div>
    <div class="vstack gap-3 p-4 border-top bg-body-secondary">
      <div class="hstack justify-between text-sm"><span class="text-subtle">Subtotal</span><span>$347</span></div>
      <div class="hstack justify-between text-sm"><span class="text-subtle">Shipping</span><span class="text-success">Free</span></div>
      <div class="hstack justify-between"><strong>Total</strong><strong>$347</strong></div>
      <button class="btn btn-primary btn-block" type="button">Checkout</button>
    </div>
  </aside>
</div>
::end

---

## Top and Bottom Sheets

A top panel works well for search, a bottom sheet for mobile actions. Set `style="height: auto"` to size the sheet to its content.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-offcanvas="#searchSheet"><span class="mdi mdi-magnify"></span> Search</button>
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-offcanvas="#shareSheet"><span class="mdi mdi-share-variant-outline"></span> Share</button>
  </div>

  <aside id="searchSheet" class="offcanvas offcanvas-top h-[auto]" tabindex="-1" aria-label="Search">
    <div class="offcanvas-body pt-4">
      <div class="max-w-[640px] mx-auto vstack gap-3">
        <div class="input-group input-group-lg">
          <span class="input-group-text"><span class="mdi mdi-magnify"></span></span>
          <input class="form-control" type="search" placeholder="Search projects, people, files" aria-label="Search">
          <button class="btn btn-ghost" type="button" data-offcanvas-close>Esc</button>
        </div>
        <div class="hstack flex-wrap gap-2 text-sm">
          <span class="text-subtle">Recent:</span>
          <a class="chip chip-sm" href="#">Q3 roadmap</a>
          <a class="chip chip-sm" href="#">Brand assets</a>
          <a class="chip chip-sm" href="#">Nina Brooks</a>
        </div>
      </div>
    </div>
  </aside>

  <aside id="shareSheet" class="offcanvas offcanvas-bottom rounded-top-xl h-[auto]" tabindex="-1" aria-labelledby="shareSheetTitle">
    <div class="offcanvas-header justify-center pb-1">
      <span id="shareSheetTitle">Share “Q3 roadmap”</span>
    </div>
    <div class="offcanvas-body">
      <div class="max-w-[480px] mx-auto">
        <div class="hstack justify-between mb-4">
          <button class="btn btn-ghost vstack gap-1 text-xs" type="button" data-offcanvas-close><span class="mdi mdi-link-variant text-2xl"></span> Copy link</button>
          <button class="btn btn-ghost vstack gap-1 text-xs" type="button" data-offcanvas-close><span class="mdi mdi-email-outline text-2xl"></span> Email</button>
          <button class="btn btn-ghost vstack gap-1 text-xs" type="button" data-offcanvas-close><span class="mdi mdi-message-outline text-2xl"></span> Message</button>
          <button class="btn btn-ghost vstack gap-1 text-xs" type="button" data-offcanvas-close><span class="mdi mdi-qrcode text-2xl"></span> QR code</button>
        </div>
        <button class="btn btn-soft-secondary btn-block" type="button" data-offcanvas-close>Cancel</button>
      </div>
    </div>
  </aside>
</div>
::end

```html
<aside id="searchSheet" class="offcanvas offcanvas-top h-[auto]" tabindex="-1" aria-label="Search">
  <div class="offcanvas-body pt-4">...</div>
</aside>

<aside id="shareSheet" class="offcanvas offcanvas-bottom rounded-top-xl h-[auto]" tabindex="-1">
  <div class="offcanvas-header justify-center">Share</div>
  <div class="offcanvas-body">...</div>
</aside>
```

```js components
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "@abydahana/aksara-ui/components";

Offcanvas({
  id: "searchSheet",
  placement: "top",
  attributes: { "aria-label": "Search", style: "height: auto" },
  children: OffcanvasBody("...", "pt-4")
});

Offcanvas({
  id: "shareSheet",
  placement: "bottom",
  className: "rounded-top-xl",
  attributes: { style: "height: auto" },
  children:
    OffcanvasHeader({ dismissible: false, className: "justify-center", children: "Share" }) + OffcanvasBody("...")
});
```

---

## Outside Clicks and Escape

An open panel dims the page with a backdrop (`.offcanvas-backdrop`); clicking it closes the panel. `data-offcanvas-backdrop="static"` keeps the panel open and gives it a short shake instead, `data-offcanvas-backdrop="false"` draws no backdrop and leaves the page usable, and `data-offcanvas-keyboard="false"` ignores Escape.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary" type="button" data-offcanvas="#staticDrawer">Static drawer</button>
  </div>
  <aside id="staticDrawer" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="staticDrawerTitle" data-offcanvas-backdrop="static" data-offcanvas-keyboard="false">
    <div class="offcanvas-header"><span id="staticDrawerTitle">Unsaved changes</span></div>
    <div class="offcanvas-body vstack gap-3">
      <p class="m-0 text-sm text-subtle">Outside clicks and Escape are ignored. Use a button to leave.</p>
      <button class="btn btn-primary" type="button" data-offcanvas-close>Save and close</button>
      <button class="btn btn-ghost" type="button" data-offcanvas-close>Discard</button>
    </div>
  </aside>
</div>
::end

```html
<aside
  id="staticDrawer"
  class="offcanvas offcanvas-end"
  data-offcanvas-backdrop="static"
  data-offcanvas-keyboard="false"
>
  ...
</aside>
```

```js components
import { Offcanvas } from "@abydahana/aksara-ui/components";

Offcanvas({
  id: "staticDrawer",
  placement: "end",
  attributes: { "data-offcanvas-backdrop": "static", "data-offcanvas-keyboard": "false" },
  children: "..."
});
```

---

## JavaScript

### Data Attributes

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Attribute</th><th>On</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>data-offcanvas="#id"</code></td><td>any element</td><td>Opens the panel. <code>data-offcanvas-*</code> options on the trigger apply to this opening only.</td></tr>
      <tr><td class="text-nowrap"><code>data-offcanvas-close</code></td><td>inside the panel</td><td>Closes the containing panel.</td></tr>
      <tr><td class="text-nowrap"><code>data-offcanvas-close="#id"</code></td><td>anywhere</td><td>Closes the targeted panel.</td></tr>
      <tr><td class="text-nowrap"><code>data-dismiss="#id"</code></td><td>anywhere</td><td>Closes the target (offcanvas, modal, toast or dropdown).</td></tr>
    </tbody>
  </table>
</div>
::end

### Options

Pass options to `Aksara.offcanvas()` or set them as `data-offcanvas-*` attributes on the panel or the trigger.

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Option</th><th>Attribute</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>backdrop</code></td><td class="text-nowrap"><code>data-offcanvas-backdrop</code></td><td class="text-nowrap"><code>true</code></td><td><code>true</code>: dimmed backdrop that closes on click. <code>"static"</code>: backdrop that shakes the panel instead. <code>false</code>: no backdrop.</td></tr>
      <tr><td class="text-nowrap"><code>keyboard</code></td><td class="text-nowrap"><code>data-offcanvas-keyboard</code></td><td class="text-nowrap"><code>true</code></td><td>Close on Escape.</td></tr>
      <tr><td class="text-nowrap"><code>focus</code></td><td class="text-nowrap"><code>data-offcanvas-focus</code></td><td class="text-nowrap"><code>true</code></td><td>Move focus into the panel on open (<code>[autofocus]</code>, else the first control that is not a close button).</td></tr>
      <tr><td class="text-nowrap"><code>scrollLock</code></td><td class="text-nowrap"><code>data-offcanvas-scroll-lock</code></td><td class="text-nowrap"><code>true</code></td><td>Lock page scrolling while open.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
// Initialize or retrieve the offcanvas instance
const drawer = Aksara.offcanvas("#sidebar", {
  backdrop: true,
  keyboard: true,
  scrollLock: false
});

drawer.show();
```

### Methods

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Method</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>drawer.show()</code></td><td>Adds <code>.offcanvas-open</code>, focuses the first control and locks scrolling.</td></tr>
      <tr><td class="text-nowrap"><code>drawer.hide()</code></td><td>Slides the panel out and restores focus to the element that opened it.</td></tr>
      <tr><td class="text-nowrap"><code>drawer.toggle()</code></td><td>Opens or closes the panel.</td></tr>
      <tr><td class="text-nowrap"><code>drawer.updateOptions(options)</code></td><td>Merges new options.</td></tr>
      <tr><td class="text-nowrap"><code>drawer.destroy()</code></td><td>Removes listeners and the stored instance.</td></tr>
    </tbody>
  </table>
</div>
::end

### Events

Events bubble from the `.offcanvas` element; `event.detail.instance` holds the instance.

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Event</th><th>Fired when</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>aksara:offcanvas:show</code></td><td>The panel has opened.</td></tr>
      <tr><td class="text-nowrap"><code>aksara:offcanvas:hide</code></td><td>The panel has closed.</td></tr>
      <tr><td class="text-nowrap"><code>aksara:offcanvas:destroy</code></td><td>The instance was destroyed.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
const filters = document.querySelector("#filterPanel");

filters.addEventListener("aksara:offcanvas:hide", () => {
  applyFilters(new FormData(filters.querySelector("form")));
});
```

Offcanvas panels share the overlay stack with modals: a modal opened from a drawer sits on top, and Escape closes the topmost overlay first.

### String Components

`Offcanvas({ id, placement, children })` renders the panel (`placement` is `start`, `end`, `top` or `bottom`). `OffcanvasHeader({ title, dismissible, closeLabel })` and `OffcanvasBody(content)` fill it.

```js
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "@abydahana/aksara-ui/components";

Offcanvas({
  id: "filterPanel",
  placement: "end",
  children: OffcanvasHeader({ title: "Filters" }) + OffcanvasBody("<p>...</p>")
});
```
