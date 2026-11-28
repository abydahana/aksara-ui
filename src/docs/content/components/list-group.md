# List Group

List groups show vertical lists of actions, navigation items, or metadata.

::html
<div class="docs-preview">
  <ul class="list-group max-w-[420px]">
    <li class="list-group-item active">Active item</li>
    <li class="list-group-item">Second item</li>
    <li class="list-group-item">Third item</li>
    <li class="list-group-item disabled">Disabled item</li>
  </ul>
</div>
::end

```html
<ul class="list-group">
  <li class="list-group-item active">Active item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item disabled">Disabled item</li>
</ul>
```

```js components
import { ListGroup } from "@abydahana/aksara-ui/components";

// With `as: "ul"`, plain items render as <li>.
ListGroup({
  as: "ul",
  items: [
    { content: "Active item", active: true },
    { content: "Second item" },
    { content: "Disabled item", disabled: true }
  ]
});
```

## Flush List

Use `list-group-flush` when the wrapper should not draw an outer border or rounded corners. Each item still keeps a separator border between rows.

::html
<div class="docs-preview">
  <ul class="list-group list-group-flush max-w-[420px]">
    <li class="list-group-item">Account overview</li>
    <li class="list-group-item">Billing history</li>
    <li class="list-group-item">Security settings</li>
    <li class="list-group-item">Connected devices</li>
  </ul>
</div>
::end

```html
<ul class="list-group list-group-flush">
  <li class="list-group-item">Account overview</li>
  <li class="list-group-item">Billing history</li>
  <li class="list-group-item">Security settings</li>
</ul>
```

```js components
import { ListGroup } from "@abydahana/aksara-ui/components";

ListGroup({
  as: "ul",
  flush: true,
  items: [{ content: "Account overview" }, { content: "Billing history" }, { content: "Security settings" }]
});
```

## Links And Buttons

Use anchors or buttons when each row is an action. Add `list-group-item-action` for hover and focus feedback.

::html
<div class="docs-preview">
  <div class="list-group max-w-[420px]">
    <a class="list-group-item list-group-item-action active" href="#">Dashboard</a>
    <a class="list-group-item list-group-item-action" href="#">Projects</a>
    <a class="list-group-item list-group-item-action" href="#">Team activity</a>
    <button class="list-group-item list-group-item-action" type="button">Settings</button>
  </div>
</div>
::end

```html
<div class="list-group">
  <a class="list-group-item list-group-item-action active" href="#">Dashboard</a>
  <a class="list-group-item list-group-item-action" href="#">Projects</a>
  <button class="list-group-item list-group-item-action" type="button">Settings</button>
</div>
```

```js components
import { ListGroup, ListGroupItem } from "@abydahana/aksara-ui/components";

ListGroup({
  children: [
    ListGroupItem({ content: "Dashboard", href: "#", active: true }),
    ListGroupItem({ content: "Projects", href: "#" }),
    ListGroupItem({ content: "Settings", action: true })
  ].join("")
});
```

## Rich Items

List group rows can combine a title, supporting subtitle, and badge for notification or metadata lists.

::html
<div class="docs-preview">
  <div class="list-group max-w-[520px]">
    <a class="list-group-item list-group-item-action active" href="#">
      <div class="flex items-start justify-between gap-4">
        <span>
          <span class="list-group-title">Inbox</span>
          <span class="list-group-subtitle">New messages from your workspace</span>
        </span>
        <span class="badge badge-primary">12</span>
      </div>
    </a>
    <a class="list-group-item list-group-item-action" href="#">
      <div class="flex items-start justify-between gap-4">
        <span>
          <span class="list-group-title">Deployments</span>
          <span class="list-group-subtitle">Production build completed successfully</span>
        </span>
        <span class="badge badge-soft-success">Ready</span>
      </div>
    </a>
    <a class="list-group-item list-group-item-action" href="#">
      <div class="flex items-start justify-between gap-4">
        <span>
          <span class="list-group-title">Security review</span>
          <span class="list-group-subtitle">Two permissions need confirmation</span>
        </span>
        <span class="badge badge-soft-warning">2</span>
      </div>
    </a>
  </div>
</div>
::end

```html
<a class="list-group-item list-group-item-action" href="#">
  <div class="flex items-start justify-between gap-4">
    <span>
      <span class="list-group-title">Inbox</span>
      <span class="list-group-subtitle">New messages from your workspace</span>
    </span>
    <span class="badge badge-primary">12</span>
  </div>
</a>
```

```js components
import { Badge, ListGroupItem } from "@abydahana/aksara-ui/components";

ListGroupItem({
  href: "#",
  content: `<div class="flex items-start justify-between gap-4">
    <span>
      <span class="list-group-title">Inbox</span>
      <span class="list-group-subtitle">New messages from your workspace</span>
    </span>
    ${Badge({ label: "12" })}
  </div>`
});
```

---

## Icon Rows (iOS/macOS Style)

Compose icon, label, value, and chevron inside a `list-group-item` using flex utilities. No additional classes needed — this is purely a layout pattern.

### Link Rows

Navigate to a detail page. Icon on the left, label in the middle, value + chevron on the right.

::html
<div class="docs-preview">
  <div class="list-group max-w-[520px]">
    <a class="list-group-item list-group-item-action" href="#">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg text-[#6366f1]"><span class="mdi mdi-lock-outline"></span></span>
        <span class="flex-1 fw-semibold">Private profile</span>
        <span class="text-subtle text-sm">Public</span>
        <span class="text-subtle opacity-[.5] text-sm ms-1">&#8250;</span>
      </div>
    </a>
    <a class="list-group-item list-group-item-action" href="#">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg text-[#06b6d4]"><span class="mdi mdi-at"></span></span>
        <span class="flex-1 fw-semibold">Tags and mentions</span>
        <span class="text-subtle text-sm">Everyone</span>
        <span class="text-subtle opacity-[.5] text-sm ms-1">&#8250;</span>
      </div>
    </a>
    <a class="list-group-item list-group-item-action" href="#">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg text-[#22c55e]"><span class="mdi mdi-account-clock-outline"></span></span>
        <span class="flex-1 fw-semibold">Online status</span>
        <span class="text-subtle text-sm">Active</span>
        <span class="text-subtle opacity-[.5] text-sm ms-1">&#8250;</span>
      </div>
    </a>
    <a class="list-group-item list-group-item-action" href="#">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg text-[#f43f5e]"><span class="mdi mdi-cancel"></span></span>
        <span class="flex-1 fw-semibold">Blocked profiles</span>
        <span class="text-subtle opacity-[.5] text-sm ms-1">&#8250;</span>
      </div>
    </a>
  </div>
</div>
::end

```html
<div class="list-group">
  <a class="list-group-item list-group-item-action" href="#">
    <div class="flex items-center gap-3">
      <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg">
        <span class="mdi mdi-lock-outline"></span>
      </span>
      <span class="flex-1 fw-semibold">Private profile</span>
      <span class="text-subtle text-sm">Public</span>
      <span class="text-subtle opacity-[.5] text-sm ms-1">›</span>
    </div>
  </a>
</div>
```

```js components
import { ListGroup, ListGroupItem } from "@abydahana/aksara-ui/components";

ListGroup({
  children: ListGroupItem({
    href: "#",
    content: `<div class="flex items-center gap-3">
      <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg">
        <span class="mdi mdi-lock-outline"></span>
      </span>
      <span class="flex-1 fw-semibold">Private profile</span>
      <span class="text-subtle text-sm">Public</span>
      <span class="text-subtle opacity-[.5] text-sm ms-1">›</span>
    </div>`
  })
});
```

### Switch Rows

Icon on the left, label in the middle, toggle switch on the right.

::html
<div class="docs-preview">
  <div class="list-group max-w-[520px]">
    <div class="list-group-item">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg text-[#06b6d4]"><span class="mdi mdi-water-alert"></span></span>
        <span class="flex-1 fw-semibold">Floods &amp; Inundations</span>
        <div class="form-switch ms-auto">
          <input type="checkbox" role="switch" class="form-check-input" checked />
        </div>
      </div>
    </div>
    <div class="list-group-item">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg text-[#f59e0b]"><span class="mdi mdi-sine-wave"></span></span>
        <span class="flex-1 fw-semibold">Earthquakes &amp; Tremors</span>
        <div class="form-switch ms-auto">
          <input type="checkbox" role="switch" class="form-check-input" checked />
        </div>
      </div>
    </div>
    <div class="list-group-item">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg text-[#f43f5e]"><span class="mdi mdi-fire"></span></span>
        <span class="flex-1 fw-semibold">Wildfires &amp; Hazmat</span>
        <div class="form-switch ms-auto">
          <input type="checkbox" role="switch" class="form-check-input" checked />
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="list-group">
  <div class="list-group-item">
    <div class="flex items-center gap-3">
      <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg">
        <span class="mdi mdi-water-alert"></span>
      </span>
      <span class="flex-1 fw-semibold">Floods &amp; Inundations</span>
      <div class="form-switch ms-auto">
        <input type="checkbox" role="switch" class="form-check-input" checked />
      </div>
    </div>
  </div>
</div>
```

```js components
import { ListGroup, ListGroupItem, Switch } from "@abydahana/aksara-ui/components";

ListGroup({
  children: ListGroupItem({
    content: `<div class="flex items-center gap-3">
      <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg">
        <span class="mdi mdi-water-alert"></span>
      </span>
      <span class="flex-1 fw-semibold">Floods &amp; Inundations</span>
      ${Switch({ checked: true, className: "ms-auto" })}
    </div>`
  })
});
```

### Description Rows

Label with supporting description text, and a trailing control (select or switch). Works without icons too.

::html
<div class="docs-preview">
  <div class="list-group max-w-[560px]">
    <div class="list-group-item">
      <div class="flex items-center gap-4">
        <div class="flex-1 min-w-0">
          <span class="fw-semibold block">Default Proximity Alert Radius</span>
          <span class="text-subtle text-sm block mt-1">Prioritize reports occurring within this distance from your coordinates.</span>
        </div>
        <select class="form-select form-select-sm shrink-0 w-[auto] min-w-[140px]">
          <option selected>25 km (City)</option>
          <option>10 km (Local)</option>
          <option>50 km (Region)</option>
        </select>
      </div>
    </div>
    <div class="list-group-item">
      <div class="flex items-center gap-4">
        <div class="flex-1 min-w-0">
          <span class="fw-semibold block">Verified reports only</span>
          <span class="text-subtle text-sm block mt-1">Only display observations that have passed community or authority verification.</span>
        </div>
        <div class="form-switch shrink-0">
          <input type="checkbox" role="switch" class="form-check-input" />
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="list-group">
  <div class="list-group-item">
    <div class="flex items-center gap-4">
      <div class="flex-1 min-w-0">
        <span class="fw-semibold block">Verified reports only</span>
        <span class="text-subtle text-sm block mt-1">Only display verified observations.</span>
      </div>
      <div class="form-switch shrink-0">
        <input type="checkbox" role="switch" class="form-check-input" />
      </div>
    </div>
  </div>
</div>
```

```js components
import { ListGroup, ListGroupItem, Switch } from "@abydahana/aksara-ui/components";

ListGroup({
  children: ListGroupItem({
    content: `<div class="flex items-center gap-4">
      <div class="flex-1 min-w-0">
        <span class="fw-semibold block">Verified reports only</span>
        <span class="text-subtle text-sm block mt-1">Only display verified observations.</span>
      </div>
      ${Switch({ className: "shrink-0" })}
    </div>`
  })
});
```

### Switch Rows (No Icon)

Same pattern with description text but no icon — matches notification or preference lists.

::html
<div class="docs-preview">
  <div class="list-group max-w-[520px]">
    <div class="list-group-item">
      <div class="flex items-center justify-between gap-4">
        <div>
          <span class="fw-semibold block">Disaster &amp; Critical Alerts</span>
          <span class="text-subtle text-sm block mt-1">Receive urgent notifications for high-severity hazards nearby</span>
        </div>
        <div class="form-switch shrink-0 ms-4">
          <input type="checkbox" role="switch" class="form-check-input" checked />
        </div>
      </div>
    </div>
    <div class="list-group-item">
      <div class="flex items-center justify-between gap-4">
        <div>
          <span class="fw-semibold block">Verification Updates</span>
          <span class="text-subtle text-sm block mt-1">Get notified when community verifies or updates your observation</span>
        </div>
        <div class="form-switch shrink-0 ms-4">
          <input type="checkbox" role="switch" class="form-check-input" checked />
        </div>
      </div>
    </div>
    <div class="list-group-item">
      <div class="flex items-center justify-between gap-4">
        <div>
          <span class="fw-semibold block">Activity &amp; Interactions</span>
          <span class="text-subtle text-sm block mt-1">Updates about upvotes, comments, and community notes</span>
        </div>
        <div class="form-switch shrink-0 ms-4">
          <input type="checkbox" role="switch" class="form-check-input" checked />
        </div>
      </div>
    </div>
    <div class="list-group-item">
      <div class="flex items-center justify-between gap-4">
        <div>
          <span class="fw-semibold block">Audio Chime / Alert Sound</span>
          <span class="text-subtle text-sm block mt-1">Play audio notification sound when receiving urgent alerts</span>
        </div>
        <div class="form-switch shrink-0 ms-4">
          <input type="checkbox" role="switch" class="form-check-input" checked />
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="list-group">
  <div class="list-group-item">
    <div class="flex items-center justify-between gap-4">
      <div>
        <span class="fw-semibold block">Disaster &amp; Critical Alerts</span>
        <span class="text-subtle text-sm block mt-1"
          >Receive urgent notifications for high-severity hazards nearby</span
        >
      </div>
      <div class="form-switch shrink-0 ms-4">
        <input type="checkbox" role="switch" class="form-check-input" checked />
      </div>
    </div>
  </div>
</div>
```

```js components
import { ListGroup, ListGroupItem, Switch } from "@abydahana/aksara-ui/components";

ListGroup({
  children: ListGroupItem({
    content: `<div class="flex items-center justify-between gap-4">
      <div>
        <span class="fw-semibold block">Disaster &amp; Critical Alerts</span>
        <span class="text-subtle text-sm block mt-1">Receive urgent notifications for high-severity hazards nearby</span>
      </div>
      ${Switch({ checked: true, className: "shrink-0 ms-4" })}
    </div>`
  })
});
```

---

## Horizontal, Numbered & Contextual Items

- `list-group-horizontal` lays items out in a row; `list-group-horizontal-{sm,md,lg,xl,2xl,3xl}` does so from that breakpoint up.
- `list-group-numbered` (on an `<ol>`) prefixes each item with its number.
- `list-group-item-{primary,secondary,success,danger,warning,info,light,dark}` tints a single item.

::html
<div class="docs-preview">
  <div class="list-group list-group-horizontal mb-3">
    <div class="list-group-item">Daily</div>
    <div class="list-group-item list-group-item-primary">Weekly</div>
    <div class="list-group-item">Monthly</div>
  </div>
  <ol class="list-group list-group-numbered m-0">
    <li class="list-group-item">Create an account</li>
    <li class="list-group-item list-group-item-success">Verify your email</li>
    <li class="list-group-item">Invite your team</li>
  </ol>
</div>
::end

```html
<div class="list-group list-group-horizontal-md">...</div>

<ol class="list-group list-group-numbered">
  <li class="list-group-item">Create an account</li>
  <li class="list-group-item list-group-item-success">Verify your email</li>
</ol>
```

```js components
import { ListGroup } from "@abydahana/aksara-ui/components";

ListGroup({ horizontal: "md", children: "..." });

// `numbered` renders an <ol>, and `items` become <li> elements.
ListGroup({
  numbered: true,
  items: [{ content: "Create an account" }, { content: "Verify your email", variant: "success" }]
});
```

The `ListGroup` string component exposes these as `horizontal`, `numbered` and (on `ListGroupItem`) `variant` props.
