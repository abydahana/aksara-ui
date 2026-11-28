# Navbar

Navbars are horizontal application headers. A `.navbar` lays out a brand, a list of `.nav-link`s and any extra controls such as search, buttons or an account menu. Add `navbar-expand-{breakpoint}` and a `.navbar-toggler` to collapse the links into a menu on small screens.

::html
<div class="docs-preview">
  <nav class="navbar navbar-expand border rounded-lg">
    <a class="navbar-brand" href="#">Aksara</a>
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
        <li><a class="nav-link" href="#">Components</a></li>
        <li><a class="nav-link" href="#">Examples</a></li>
      </ul>
    </div>
  </nav>
</div>
::end

```html
<nav class="navbar navbar-expand">
  <a class="navbar-brand" href="#">Aksara</a>
  <div class="navbar-collapse">
    <ul class="navbar-nav">
      <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
      <li><a class="nav-link" href="#">Components</a></li>
      <li><a class="nav-link" href="#">Examples</a></li>
    </ul>
  </div>
</nav>
```

```js components
import { Navbar, NavLink } from "@abydahana/aksara-ui/components";

const links = [
  NavLink({ label: "Docs", active: true }),
  NavLink({ label: "Components" }),
  NavLink({ label: "Examples" })
];

Navbar({
  brand: "Aksara",
  children: `<div class="navbar-collapse">
    <ul class="navbar-nav">${links.map((link) => `<li>${link}</li>`).join("")}</ul>
  </div>`
});
```

---

## Anatomy

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Class</th><th>Role</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>navbar</code></td><td>Flex row with a <code>3.5rem</code> minimum height, padding, a bottom border and the surface background.</td></tr>
      <tr><td class="text-nowrap"><code>navbar-brand</code></td><td>Bold product name or logo. Holds an icon or image and text side by side.</td></tr>
      <tr><td class="text-nowrap"><code>navbar-nav</code></td><td>Unstyled list that lays its items out in a row.</td></tr>
      <tr><td class="text-nowrap"><code>nav-link</code></td><td>Muted link with a soft hover fill. <code>.active</code> or <code>aria-current="page"</code> marks the current page.</td></tr>
      <tr><td class="text-nowrap"><code>navbar-collapse</code></td><td>Wrapper for everything that should collapse on small screens.</td></tr>
      <tr><td class="text-nowrap"><code>navbar-toggler</code></td><td>Square <code>2.5rem</code> menu button that opens and closes the collapse.</td></tr>
      <tr><td class="text-nowrap"><code>navbar-expand</code></td><td>Always expanded: the collapse is shown and the toggler is hidden.</td></tr>
      <tr><td class="text-nowrap"><code>navbar-expand-{sm,md,lg,xl,2xl,3xl}</code></td><td>Collapsed below the breakpoint, expanded from the breakpoint up.</td></tr>
      <tr><td class="text-nowrap"><code>navbar-dark</code></td><td>Switches the text and border tokens to light values. Pair it with a dark background such as <code>bg-dark</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Brand

The brand is an inline flex container, so an icon, a logo image or an avatar sits next to the name with an even gap.

::html
<div class="docs-preview">
  <nav class="navbar navbar-expand border rounded-lg">
    <a class="navbar-brand" href="#">Aksara</a>
  </nav>
  <nav class="navbar navbar-expand border rounded-lg">
    <a class="navbar-brand" href="#"><span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara UI</a>
  </nav>
  <nav class="navbar navbar-expand border rounded-lg">
    <a class="navbar-brand" href="#">
      <span class="avatar avatar-sm rounded-md bg-text-primary">A</span>
      <span class="vstack">
        <span>Acme Cloud</span>
        <span class="text-xs text-subtle fw-normal">Workspace</span>
      </span>
    </a>
  </nav>
</div>
::end

```html
<a class="navbar-brand" href="#">Aksara</a>

<a class="navbar-brand" href="#"><span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara UI</a>

<a class="navbar-brand" href="#">
  <span class="avatar avatar-sm rounded-md bg-text-primary">A</span>
  <span class="vstack">
    <span>Acme Cloud</span>
    <span class="text-xs text-subtle fw-normal">Workspace</span>
  </span>
</a>
```

```js components
import { Navbar } from "@abydahana/aksara-ui/components";

// The brand renders as the navbar's first child: `brand` is escaped text, `brandHtml` is raw
Navbar({ brand: "Aksara" });

Navbar({ brandHtml: '<span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara UI' });

Navbar({
  brandHtml: `<span class="avatar avatar-sm rounded-md bg-text-primary">A</span>
    <span class="vstack">
      <span>Acme Cloud</span>
      <span class="text-xs text-subtle fw-normal">Workspace</span>
    </span>`
});
```

---

## Nav Links

Links are muted by default, fill softly on hover, and turn bold with a fill when they carry `.active` or `aria-current="page"`. They are inline flex, so icons and badges line up without extra classes.

::html
<div class="docs-preview">
  <nav class="navbar navbar-expand border rounded-lg">
    <ul class="navbar-nav">
      <li><a class="nav-link" aria-current="page" href="#"><span class="mdi mdi-view-dashboard-outline"></span> Dashboard</a></li>
      <li><a class="nav-link" href="#"><span class="mdi mdi-folder-outline"></span> Projects</a></li>
      <li>
        <a class="nav-link" href="#"><span class="mdi mdi-inbox-outline"></span> Inbox <span class="badge badge-sm badge-soft-danger">12</span></a>
      </li>
      <li><a class="nav-link" href="#"><span class="mdi mdi-chart-line"></span> Reports</a></li>
    </ul>
  </nav>
</div>
::end

```html
<ul class="navbar-nav">
  <li>
    <a class="nav-link" aria-current="page" href="#"><span class="mdi mdi-view-dashboard-outline"></span> Dashboard</a>
  </li>
  <li>
    <a class="nav-link" href="#"><span class="mdi mdi-folder-outline"></span> Projects</a>
  </li>
  <li>
    <a class="nav-link" href="#">
      <span class="mdi mdi-inbox-outline"></span> Inbox <span class="badge badge-sm badge-soft-danger">12</span>
    </a>
  </li>
</ul>
```

```js components
import { NavLink, Badge } from "@abydahana/aksara-ui/components";

`<ul class="navbar-nav">
  <li>${NavLink({ label: "Dashboard", icon: "view-dashboard-outline", active: true })}</li>
  <li>${NavLink({ label: "Projects", icon: "folder-outline" })}</li>
  <li>${NavLink({
    label: "Inbox",
    icon: "inbox-outline",
    labelHtml: `Inbox ${Badge({ variant: "danger", soft: true, size: "sm", label: "12" })}`
  })}</li>
</ul>`;
```

### Pill Links

Add `nav-pills` to the `.navbar-nav` to render links as rounded pills with a tinted active state.

::html
<div class="docs-preview">
  <nav class="navbar navbar-expand border rounded-lg">
    <a class="navbar-brand" href="#">Aksara</a>
    <div class="navbar-collapse">
      <ul class="navbar-nav nav-pills">
        <li><a class="nav-link" aria-current="page" href="#">Overview</a></li>
        <li><a class="nav-link" href="#">Pricing</a></li>
        <li><a class="nav-link" href="#">Changelog</a></li>
      </ul>
    </div>
  </nav>
</div>
::end

```html
<ul class="navbar-nav nav-pills">
  <li><a class="nav-link" aria-current="page" href="#">Overview</a></li>
  <li><a class="nav-link" href="#">Pricing</a></li>
  <li><a class="nav-link" href="#">Changelog</a></li>
</ul>
```

```js components
import { NavLink } from "@abydahana/aksara-ui/components";

`<ul class="navbar-nav nav-pills">
  <li>${NavLink({ label: "Overview", active: true })}</li>
  <li>${NavLink({ label: "Pricing" })}</li>
  <li>${NavLink({ label: "Changelog" })}</li>
</ul>`;
```

---

## Application Header

A typical app header: brand, primary links, a search field, a notification button and an avatar dropdown. `ms-auto` pushes the right-hand group to the end of the bar.

::html
<div class="docs-preview [overflow:visible_!important]">
  <nav class="navbar navbar-expand border rounded-lg">
    <a class="navbar-brand" href="#"><span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara</a>
    <div class="navbar-collapse w-full">
      <ul class="navbar-nav">
        <li><a class="nav-link" aria-current="page" href="#">Dashboard</a></li>
        <li><a class="nav-link" href="#">Projects</a></li>
        <li><a class="nav-link" href="#">Team</a></li>
      </ul>
      <div class="hstack gap-2 ms-auto">
        <form class="input-group input-group-sm max-w-[240px]" role="search">
          <span class="input-group-text"><span class="mdi mdi-magnify"></span></span>
          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
        </form>
        <button class="btn btn-ghost btn-sm btn-icon relative" type="button" aria-label="Notifications" data-tooltip="3 unread notifications" data-tooltip-placement="bottom">
          <span class="mdi mdi-bell-outline text-lg"></span>
          <span class="badge badge-dot text-danger absolute top-[6px] end-[6px]"></span>
        </button>
        <div class="dropdown">
          <button class="btn btn-ghost btn-sm hstack gap-1 px-1" type="button" data-dropdown="#navAccountMenu" aria-label="Account menu">
            <span class="avatar avatar-sm rounded-full avatar-primary" aria-hidden="true">
              MC
              <span class="avatar-status bg-success"></span>
            </span>
            <span class="mdi mdi-chevron-down text-subtle"></span>
          </button>
          <div id="navAccountMenu" class="dropdown-menu dropdown-menu-end">
            <div class="dropdown-header">Signed in as<br><strong class="text-body">maya.chen@example.com</strong></div>
            <a class="dropdown-item hstack gap-2" href="#"><span class="mdi mdi-account-outline"></span> Profile</a>
            <a class="dropdown-item hstack gap-2" href="#"><span class="mdi mdi-cog-outline"></span> Settings</a>
            <a class="dropdown-item hstack gap-2" href="#"><span class="mdi mdi-credit-card-outline"></span> Billing</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item dropdown-item-danger hstack gap-2" href="#"><span class="mdi mdi-logout"></span> Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
::end

```html
<nav class="navbar navbar-expand">
  <a class="navbar-brand" href="#"><span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara</a>
  <div class="navbar-collapse w-full">
    <ul class="navbar-nav">
      <li><a class="nav-link" aria-current="page" href="#">Dashboard</a></li>
      <li><a class="nav-link" href="#">Projects</a></li>
      <li><a class="nav-link" href="#">Team</a></li>
    </ul>
    <div class="hstack gap-2 ms-auto">
      <form class="input-group input-group-sm max-w-[240px]" role="search">
        <span class="input-group-text"><span class="mdi mdi-magnify"></span></span>
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <button class="btn btn-ghost btn-sm btn-icon relative" type="button" aria-label="Notifications">
        <span class="mdi mdi-bell-outline text-lg"></span>
        <span class="badge badge-dot text-danger absolute top-[6px] end-[6px]"></span>
      </button>
      <div class="dropdown">
        <button class="btn btn-ghost btn-sm hstack gap-1 px-1" type="button" data-dropdown="#accountMenu">
          <span class="avatar avatar-sm rounded-full avatar-primary" aria-hidden="true">
            MC
            <span class="avatar-status bg-success"></span>
          </span>
          <span class="mdi mdi-chevron-down text-subtle"></span>
        </button>
        <div id="accountMenu" class="dropdown-menu dropdown-menu-end">
          <a class="dropdown-item" href="#">Profile</a>
          <a class="dropdown-item" href="#">Settings</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item dropdown-item-danger" href="#">Sign out</a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

```js components
import {
  Navbar,
  NavLink,
  InputGroup,
  InputGroupText,
  Input,
  Button,
  Badge,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownDivider
} from "@abydahana/aksara-ui/components";

Navbar({
  brandHtml: '<span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara',
  children: `<div class="navbar-collapse w-full">
    <ul class="navbar-nav">
      <li>${NavLink({ label: "Dashboard", active: true })}</li>
      <li>${NavLink({ label: "Projects" })}</li>
      <li>${NavLink({ label: "Team" })}</li>
    </ul>
    <div class="hstack gap-2 ms-auto">
      ${InputGroup({
        size: "sm",
        className: "max-w-[240px]",
        attributes: { role: "search" },
        children:
          InputGroupText({ children: '<span class="mdi mdi-magnify"></span>' }) +
          Input({ type: "search", placeholder: "Search", attributes: { "aria-label": "Search" } })
      })}
      ${Button({
        ghost: true,
        size: "sm",
        className: "btn-icon relative",
        attributes: { "aria-label": "Notifications" },
        children:
          '<span class="mdi mdi-bell-outline text-lg"></span>' +
          Badge({ variant: "danger", dot: true, className: "absolute top-[6px] end-[6px]" })
      })}
      ${Dropdown({
        children:
          Button({
            ghost: true,
            size: "sm",
            className: "hstack gap-1 px-1",
            attributes: { "data-dropdown": "#accountMenu" },
            children:
              Avatar({ initials: "MC", size: "sm", status: "online", attributes: { "aria-hidden": "true" } }) +
              '<span class="mdi mdi-chevron-down text-subtle"></span>'
          }) +
          DropdownMenu({
            id: "accountMenu",
            end: true,
            children:
              DropdownItem({ content: "Profile", href: "#" }) +
              DropdownItem({ content: "Settings", href: "#" }) +
              DropdownDivider() +
              DropdownItem({ content: "Sign out", href: "#", danger: true })
          })
      })}
    </div>
  </div>`
});
```

---

## Responsive Collapse

`navbar-expand-{sm,md,lg,xl,2xl,3xl}` hides `.navbar-collapse` below the breakpoint and shows the `.navbar-toggler` instead. The toggler opens the collapse through the collapse data API (`data-collapse="#id"`), which adds `.collapse-show` and keeps `aria-expanded` in sync. From the breakpoint up the toggler is hidden and the collapse is always shown.

The navbar itself does not wrap, so add `flex-wrap` to the bar and `w-full lg:w-auto` to the collapse to drop the open menu onto its own row. Responsive flex utilities (`flex-col lg:flex-row`) stack the links vertically while collapsed.

::html
<div class="docs-preview">
  <p class="m-0 text-subtle text-sm">This bar uses <code>navbar-expand-lg</code>: narrow the window below 992px to see the toggler.</p>
  <nav class="navbar navbar-expand-lg flex-wrap border rounded-lg">
    <a class="navbar-brand" href="#"><span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara</a>
    <button class="navbar-toggler ms-auto" type="button" data-collapse="#respNavLg" aria-controls="respNavLg" aria-expanded="false" aria-label="Toggle navigation">
      <span class="mdi mdi-menu text-lg"></span>
    </button>
    <div id="respNavLg" class="navbar-collapse w-full lg:w-auto lg:flex-1">
      <ul class="navbar-nav flex-col lg:flex-row items-stretch lg:items-center py-2 lg:py-0">
        <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
        <li><a class="nav-link" href="#">Components</a></li>
        <li><a class="nav-link" href="#">Templates</a></li>
        <li><a class="nav-link" href="#">Blog</a></li>
      </ul>
      <div class="hstack gap-2 lg:ms-auto pb-2 lg:pb-0">
        <a class="btn btn-ghost btn-sm" href="#">Sign in</a>
        <a class="btn btn-primary btn-sm" href="#">Get started</a>
      </div>
    </div>
  </nav>

  <p class="m-0 text-subtle text-sm">This bar uses <code>navbar-expand-3xl</code> (1600px), so it stays collapsed on most laptops. Click the toggler to open it.</p>
  <nav class="navbar navbar-expand-3xl flex-wrap border rounded-lg">
    <a class="navbar-brand" href="#"><span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara</a>
    <button class="navbar-toggler ms-auto" type="button" data-collapse="#respNav3xl" aria-controls="respNav3xl" aria-expanded="false" aria-label="Toggle navigation">
      <span class="mdi mdi-menu text-lg"></span>
    </button>
    <div id="respNav3xl" class="navbar-collapse w-full 3xl:w-auto 3xl:flex-1">
      <ul class="navbar-nav flex-col 3xl:flex-row items-stretch 3xl:items-center py-2 3xl:py-0">
        <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
        <li><a class="nav-link" href="#">Components</a></li>
        <li><a class="nav-link" href="#">Templates</a></li>
        <li><a class="nav-link" href="#">Blog</a></li>
      </ul>
      <form class="input-group input-group-sm pb-2 3xl:pb-0 3xl:ms-auto 3xl:max-w-[240px]" role="search">
        <span class="input-group-text"><span class="mdi mdi-magnify"></span></span>
        <input class="form-control" type="search" placeholder="Search docs" aria-label="Search docs">
      </form>
    </div>
  </nav>
</div>
::end

```html
<nav class="navbar navbar-expand-lg flex-wrap">
  <a class="navbar-brand" href="#">Aksara</a>
  <button
    class="navbar-toggler ms-auto"
    type="button"
    data-collapse="#mainNav"
    aria-controls="mainNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="mdi mdi-menu text-lg"></span>
  </button>
  <div id="mainNav" class="navbar-collapse w-full lg:w-auto lg:flex-1">
    <ul class="navbar-nav flex-col lg:flex-row items-stretch lg:items-center py-2 lg:py-0">
      <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
      <li><a class="nav-link" href="#">Components</a></li>
      <li><a class="nav-link" href="#">Templates</a></li>
    </ul>
    <div class="hstack gap-2 lg:ms-auto pb-2 lg:pb-0">
      <a class="btn btn-ghost btn-sm" href="#">Sign in</a>
      <a class="btn btn-primary btn-sm" href="#">Get started</a>
    </div>
  </div>
</nav>
```

```js components
import { Navbar, NavLink, CollapseTrigger, Button } from "@abydahana/aksara-ui/components";

Navbar({
  brand: "Aksara",
  expand: "lg",
  className: "flex-wrap",
  children: `
    ${CollapseTrigger({
      targetId: "mainNav",
      className: "navbar-toggler ms-auto",
      attributes: { "aria-label": "Toggle navigation" },
      children: '<span class="mdi mdi-menu text-lg"></span>'
    })}
    <div id="mainNav" class="navbar-collapse w-full lg:w-auto lg:flex-1">
      <ul class="navbar-nav flex-col lg:flex-row items-stretch lg:items-center py-2 lg:py-0">
        <li>${NavLink({ label: "Docs", active: true })}</li>
        <li>${NavLink({ label: "Components" })}</li>
        <li>${NavLink({ label: "Templates" })}</li>
      </ul>
      <div class="hstack gap-2 lg:ms-auto pb-2 lg:pb-0">
        ${Button({ ghost: true, size: "sm", href: "#", label: "Sign in" })}
        ${Button({ size: "sm", href: "#", label: "Get started" })}
      </div>
    </div>`
});
```

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Class</th><th>Collapsed below</th><th>Expanded from</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>navbar-expand</code></td><td>never</td><td>always</td></tr>
      <tr><td class="text-nowrap"><code>navbar-expand-sm</code></td><td>576px</td><td>576px</td></tr>
      <tr><td class="text-nowrap"><code>navbar-expand-md</code></td><td>768px</td><td>768px</td></tr>
      <tr><td class="text-nowrap"><code>navbar-expand-lg</code></td><td>992px</td><td>992px</td></tr>
      <tr><td class="text-nowrap"><code>navbar-expand-xl</code></td><td>1200px</td><td>1200px</td></tr>
      <tr><td class="text-nowrap"><code>navbar-expand-2xl</code></td><td>1400px</td><td>1400px</td></tr>
      <tr><td class="text-nowrap"><code>navbar-expand-3xl</code></td><td>1600px</td><td>1600px</td></tr>
    </tbody>
  </table>
</div>
::end

For a full-height mobile menu instead of an inline collapse, open an [offcanvas](#/components/offcanvas) from the toggler with `data-offcanvas="#menuId"`.

---

## Dark Navbar

`navbar-dark` re-scopes the surface, border and text tokens to light-on-dark values, so links, the toggler and the brand all switch together. Combine it with `bg-dark` (or any dark background).

::html
<div class="docs-preview [overflow:visible_!important]">
  <nav class="navbar navbar-expand navbar-dark bg-dark rounded-lg">
    <a class="navbar-brand" href="#"><span class="mdi mdi-hexagon-multiple-outline text-xl"></span> Aksara</a>
    <div class="navbar-collapse w-full">
      <ul class="navbar-nav">
        <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
        <li><a class="nav-link" href="#">Components</a></li>
        <li><a class="nav-link" href="#">Examples</a></li>
      </ul>
      <div class="hstack gap-2 ms-auto">
        <button class="navbar-toggler" type="button" aria-label="Toggle theme" data-tooltip="Toggle theme" data-tooltip-placement="bottom"><span class="mdi mdi-weather-night"></span></button>
        <span class="avatar avatar-sm rounded-full avatar-info" role="img" aria-label="Account">EW</span>
      </div>
    </div>
  </nav>
</div>
::end

```html
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Aksara</a>
  <div class="navbar-collapse w-full">
    <ul class="navbar-nav">
      <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
      <li><a class="nav-link" href="#">Components</a></li>
    </ul>
    <div class="hstack gap-2 ms-auto">
      <button class="navbar-toggler" type="button" aria-label="Toggle theme">
        <span class="mdi mdi-weather-night"></span>
      </button>
      <span class="avatar avatar-sm rounded-full avatar-info" role="img" aria-label="Account">EW</span>
    </div>
  </div>
</nav>
```

```js components
import { Navbar, NavLink, Avatar } from "@abydahana/aksara-ui/components";

// dark adds .navbar-dark.bg-dark
Navbar({
  brand: "Aksara",
  dark: true,
  children: `<div class="navbar-collapse w-full">
    <ul class="navbar-nav">
      <li>${NavLink({ label: "Docs", active: true })}</li>
      <li>${NavLink({ label: "Components" })}</li>
    </ul>
    <div class="hstack gap-2 ms-auto">
      <button class="navbar-toggler" type="button" aria-label="Toggle theme">
        <span class="mdi mdi-weather-night"></span>
      </button>
      ${Avatar({ initials: "EW", size: "sm", variant: "info", attributes: { role: "img", "aria-label": "Account" } })}
    </div>
  </div>`
});
```

---

## Layout Variations

Utilities reshape the bar without extra component classes.

### Centered Links

Use `mx-auto` on the link list to center it between the brand and the actions.

::html
<div class="docs-preview">
  <nav class="navbar navbar-expand border rounded-lg">
    <a class="navbar-brand" href="#">Studio</a>
    <div class="navbar-collapse w-full">
      <ul class="navbar-nav mx-auto">
        <li><a class="nav-link" href="#">Product</a></li>
        <li><a class="nav-link" aria-current="page" href="#">Pricing</a></li>
        <li><a class="nav-link" href="#">Customers</a></li>
      </ul>
      <a class="btn btn-outline-primary btn-sm" href="#">Contact sales</a>
    </div>
  </nav>
</div>
::end

```html
<nav class="navbar navbar-expand">
  <a class="navbar-brand" href="#">Studio</a>
  <div class="navbar-collapse w-full">
    <ul class="navbar-nav mx-auto">
      <li><a class="nav-link" href="#">Product</a></li>
      <li><a class="nav-link" aria-current="page" href="#">Pricing</a></li>
    </ul>
    <a class="btn btn-outline-primary btn-sm" href="#">Contact sales</a>
  </div>
</nav>
```

```js components
import { Navbar, NavLink, Button } from "@abydahana/aksara-ui/components";

Navbar({
  brand: "Studio",
  children: `<div class="navbar-collapse w-full">
    <ul class="navbar-nav mx-auto">
      <li>${NavLink({ label: "Product" })}</li>
      <li>${NavLink({ label: "Pricing", active: true })}</li>
    </ul>
    ${Button({ outline: true, size: "sm", href: "#", label: "Contact sales" })}
  </div>`
});
```

### Floating Pill Bar

Drop the border, round the corners fully and add a shadow for a floating header. `sticky-top` keeps a navbar pinned while the page scrolls.

::html
<div class="docs-preview bg-body-secondary">
  <nav class="navbar navbar-expand border-0 rounded-pill">
    <a class="navbar-brand" href="#"><span class="mdi mdi-feather text-xl"></span> Quill</a>
    <div class="navbar-collapse w-full">
      <ul class="navbar-nav nav-pills mx-auto">
        <li><a class="nav-link" aria-current="page" href="#">Write</a></li>
        <li><a class="nav-link" href="#">Library</a></li>
        <li><a class="nav-link" href="#">Stats</a></li>
      </ul>
      <a class="btn btn-primary btn-sm rounded-pill" href="#">Publish</a>
    </div>
  </nav>
</div>
::end

```html
<nav class="navbar navbar-expand sticky-top border-0 rounded-pill">
  <a class="navbar-brand" href="#">Quill</a>
  <div class="navbar-collapse w-full">
    <ul class="navbar-nav nav-pills mx-auto">
      <li><a class="nav-link" aria-current="page" href="#">Write</a></li>
      <li><a class="nav-link" href="#">Library</a></li>
    </ul>
    <a class="btn btn-primary btn-sm rounded-pill" href="#">Publish</a>
  </div>
</nav>
```

```js components
import { Navbar, NavLink, Button } from "@abydahana/aksara-ui/components";

Navbar({
  brand: "Quill",
  className: "sticky-top border-0 rounded-pill shadow-md",
  children: `<div class="navbar-collapse w-full">
    <ul class="navbar-nav nav-pills mx-auto">
      <li>${NavLink({ label: "Write", active: true })}</li>
      <li>${NavLink({ label: "Library" })}</li>
    </ul>
    ${Button({ size: "sm", pill: true, href: "#", label: "Publish" })}
  </div>`
});
```

### Mobile App Bar

A compact bar with a back button, a centered title and a trailing action.

::html
<div class="docs-preview">
  <nav class="navbar navbar-expand max-w-[420px] w-full border rounded-lg justify-between">
    <button class="navbar-toggler border-0" type="button" aria-label="Back"><span class="mdi mdi-arrow-left text-lg"></span></button>
    <span class="navbar-brand">Messages</span>
    <button class="navbar-toggler border-0" type="button" aria-label="New message"><span class="mdi mdi-pencil-outline text-lg"></span></button>
  </nav>
</div>
::end

```html
<nav class="navbar navbar-expand justify-between">
  <button class="navbar-toggler border-0" type="button" aria-label="Back">
    <span class="mdi mdi-arrow-left"></span>
  </button>
  <span class="navbar-brand">Messages</span>
  <button class="navbar-toggler border-0" type="button" aria-label="New message">
    <span class="mdi mdi-pencil-outline"></span>
  </button>
</nav>
```

```js components
import { Navbar } from "@abydahana/aksara-ui/components";

// The title sits between two buttons, so it goes in children instead of `brand`
Navbar({
  className: "justify-between",
  children: `<button class="navbar-toggler border-0" type="button" aria-label="Back">
      <span class="mdi mdi-arrow-left"></span>
    </button>
    <span class="navbar-brand">Messages</span>
    <button class="navbar-toggler border-0" type="button" aria-label="New message">
      <span class="mdi mdi-pencil-outline"></span>
    </button>`
});
```

---

## JavaScript

The navbar has no JavaScript of its own. The toggler uses the delegated collapse data API, which is bound once by `Aksara.init()` and also works for navbars rendered later.

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Attribute</th><th>On</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-collapse="#id"</code> (or <code>data-collapse-target</code>)</td><td>toggler</td><td>Toggles <code>.collapse-show</code> on the target and sets <code>aria-expanded</code> on its triggers.</td></tr>
      <tr><td class="text-nowrap"><code>data-dropdown="#menuId"</code></td><td>button</td><td>Opens a dropdown menu, for example an account menu.</td></tr>
      <tr><td class="text-nowrap"><code>data-offcanvas="#panelId"</code></td><td>toggler</td><td>Opens an offcanvas panel instead of an inline collapse.</td></tr>
    </tbody>
  </table>
</div>
::end

The collapse panel emits `aksara:collapse:show` and `aksara:collapse:hide`, with the trigger in `event.detail.trigger`:

```js
document.querySelector("#mainNav").addEventListener("aksara:collapse:show", (event) => {
  console.log("Menu opened by", event.detail.trigger);
});
```

### String Components

`Navbar` renders the `<nav>` and brand: `expand` maps to `navbar-expand-{bp}` (default `navbar-expand`, `false` for none), `dark` adds `navbar-dark bg-dark`, and `brandHtml` takes raw brand content such as an icon or avatar. `NavLink` renders a `.nav-link`, with `active` adding `.active` and `aria-current="page"`; `icon` adds a leading MDI icon and `labelHtml` takes a raw label (for example text plus a badge).

```js
import { Navbar, NavLink } from "@abydahana/aksara-ui/components";

Navbar({
  brand: "Aksara",
  expand: "lg",
  dark: true,
  children: `<ul class="navbar-nav"><li>${NavLink({ label: "Docs", active: true })}</li></ul>`
});
```
