# Timeline

A vertical timeline for activity logs, order tracking, deploy history, and project milestones. Each item has a round point on a shared rail and a content column with a title, a timestamp, and any body you need. Points are plain elements, so color, icon, and avatar variations come from ordinary utilities.

---

## Basic Timeline

::html
<div class="docs-preview">
  <ul class="timeline max-w-[32rem]">
    <li class="timeline-item">
      <div class="timeline-point"><span class="mdi mdi-check"></span></div>
      <div class="timeline-content">
        <h4 class="timeline-title">Version 1.5 released</h4>
        <span class="timeline-time">Today, 08:45</span>
        <div class="text-sm text-subtle m-0">Added Bento Card, modern CSS utilities, and the Theme Manager.</div>
      </div>
    </li>
    <li class="timeline-item">
      <div class="timeline-point"><span class="mdi mdi-code-tags"></span></div>
      <div class="timeline-content">
        <h4 class="timeline-title">TypeScript migration</h4>
        <span class="timeline-time">Yesterday, 14:20</span>
        <div class="text-sm text-subtle m-0">All components and helpers migrated with end-to-end type safety.</div>
      </div>
    </li>
    <li class="timeline-item">
      <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-flag-outline"></span></div>
      <div class="timeline-content">
        <h4 class="timeline-title">First public release</h4>
        <span class="timeline-time">3 days ago</span>
        <div class="text-sm text-subtle m-0">Initial open-source release.</div>
      </div>
    </li>
  </ul>
</div>
::end

```html
<ul class="timeline">
  <li class="timeline-item">
    <div class="timeline-point"><span class="mdi mdi-check"></span></div>
    <div class="timeline-content">
      <h4 class="timeline-title">Version 1.5 released</h4>
      <span class="timeline-time">Today, 08:45</span>
      <div class="text-sm text-subtle m-0">Added Bento Card, modern CSS utilities, and the Theme Manager.</div>
    </div>
  </li>
  <li class="timeline-item">
    <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-flag-outline"></span></div>
    <div class="timeline-content">
      <h4 class="timeline-title">First public release</h4>
      <span class="timeline-time">3 days ago</span>
    </div>
  </li>
</ul>
```

```js components
import { Timeline, TimelineItem, TimelinePoint, TimelineContent } from "@abydahana/aksara-ui/components";

Timeline({
  children:
    TimelineItem({
      children:
        TimelinePoint({ children: '<span class="mdi mdi-check"></span>' }) +
        TimelineContent({
          title: "Version 1.5 released",
          time: "Today, 08:45",
          children:
            '<div class="text-sm text-subtle m-0">Added Bento Card, modern CSS utilities, and the Theme Manager.</div>'
        })
    }) +
    TimelineItem({
      children:
        TimelinePoint({
          className: "border-subtle text-subtle",
          children: '<span class="mdi mdi-flag-outline"></span>'
        }) + TimelineContent({ title: "First public release", time: "3 days ago" })
    })
});
```

---

## Point Styles

`.timeline-point` is a 1.75rem circle with a primary ring. Recolor it with `border-*` and `text-*`, fill it with `bg-*` (solid or `bg-success/15` for a soft tint), or put text, a dot, or an avatar inside.

::html
<div class="docs-preview">
  <div class="grid-2 gap-5">
    <ul class="timeline">
      <li class="timeline-item">
        <div class="timeline-point"><span class="mdi mdi-star-outline"></span></div>
        <div class="timeline-content"><h4 class="timeline-title">Default</h4><span class="timeline-time m-0">Primary ring with an icon</span></div>
      </li>
      <li class="timeline-item">
        <div class="timeline-point border-success text-success"><span class="mdi mdi-check"></span></div>
        <div class="timeline-content"><h4 class="timeline-title">Colored ring</h4><span class="timeline-time m-0"><code>border-success text-success</code></span></div>
      </li>
      <li class="timeline-item">
        <div class="timeline-point bg-success border-success text-light"><span class="mdi mdi-check-bold"></span></div>
        <div class="timeline-content"><h4 class="timeline-title">Solid</h4><span class="timeline-time m-0"><code>bg-success border-success</code></span></div>
      </li>
      <li class="timeline-item">
        <div class="timeline-point bg-warning/15 border-warning text-warning"><span class="mdi mdi-alert-outline"></span></div>
        <div class="timeline-content"><h4 class="timeline-title">Soft</h4><span class="timeline-time m-0"><code>bg-warning/15</code> + ring color</span></div>
      </li>
    </ul>
    <ul class="timeline">
      <li class="timeline-item">
        <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-clock-outline"></span></div>
        <div class="timeline-content"><h4 class="timeline-title text-subtle">Muted / pending</h4><span class="timeline-time m-0"><code>border-subtle text-subtle</code></span></div>
      </li>
      <li class="timeline-item">
        <div class="timeline-point text-xs fw-bold">2</div>
        <div class="timeline-content"><h4 class="timeline-title">Step number</h4><span class="timeline-time m-0">Text instead of an icon</span></div>
      </li>
      <li class="timeline-item">
        <div class="timeline-point border-danger text-danger"><span class="mdi mdi-circle-medium"></span></div>
        <div class="timeline-content"><h4 class="timeline-title">Dot</h4><span class="timeline-time m-0"><code>mdi-circle-medium</code></span></div>
      </li>
      <li class="timeline-item">
        <div class="timeline-point p-0 overflow-hidden border-subtle"><span class="avatar avatar-xs avatar-primary" role="img" aria-label="Ravi Shah">RS</span></div>
        <div class="timeline-content"><h4 class="timeline-title">Avatar</h4><span class="timeline-time m-0"><code>p-0 overflow-hidden</code> + <code>.avatar-xs</code></span></div>
      </li>
    </ul>
  </div>
</div>
::end

```html
<!-- Colored ring -->
<div class="timeline-point border-success text-success"><span class="mdi mdi-check"></span></div>

<!-- Solid -->
<div class="timeline-point bg-success border-success text-light"><span class="mdi mdi-check-bold"></span></div>

<!-- Soft tint -->
<div class="timeline-point bg-warning/15 border-warning text-warning"><span class="mdi mdi-alert-outline"></span></div>

<!-- Muted / pending -->
<div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-clock-outline"></span></div>

<!-- Number -->
<div class="timeline-point text-xs fw-bold">2</div>

<!-- Avatar -->
<div class="timeline-point p-0 overflow-hidden border-subtle">
  <span class="avatar avatar-xs avatar-primary" role="img" aria-label="Ravi Shah">RS</span>
</div>
```

```js components
import { Avatar, TimelinePoint } from "@abydahana/aksara-ui/components";

const icon = (name) => `<span class="mdi mdi-${name}"></span>`;

// Colored ring
TimelinePoint({ className: "border-success text-success", children: icon("check") });

// Solid
TimelinePoint({ className: "bg-success border-success text-light", children: icon("check-bold") });

// Soft tint
TimelinePoint({ className: "bg-warning/15 border-warning text-warning", children: icon("alert-outline") });

// Muted / pending
TimelinePoint({ className: "border-subtle text-subtle", children: icon("clock-outline") });

// Number
TimelinePoint({ className: "text-xs fw-bold", children: "2" });

// Avatar
TimelinePoint({
  className: "p-0 overflow-hidden border-subtle",
  children: Avatar({
    initials: "RS",
    size: "xs",
    variant: "primary",
    attributes: { role: "img", "aria-label": "Ravi Shah" }
  })
});
```

---

## Order Tracking

Completed steps use solid points, the current step a soft tinted point, and upcoming steps the muted style.

::html
<div class="docs-preview">
  <div class="card max-w-[34rem]">
    <div class="card-header hstack justify-between items-center">
      <div>
        <div class="m-0 fw-semibold">Order #AKS-20417</div>
        <div class="m-0 text-xs text-subtle">Placed 24 Nov 2026 · 3 items</div>
      </div>
      <span class="badge badge-soft-info">In transit</span>
    </div>
    <div class="card-body">
      <ul class="timeline">
        <li class="timeline-item">
          <div class="timeline-point bg-success border-success text-light"><span class="mdi mdi-receipt-text-check-outline"></span></div>
          <div class="timeline-content">
            <h4 class="timeline-title">Order confirmed</h4>
            <span class="timeline-time m-0">Mon 24 Nov, 09:12</span>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-point bg-success border-success text-light"><span class="mdi mdi-package-variant-closed"></span></div>
          <div class="timeline-content">
            <h4 class="timeline-title">Packed and handed to courier</h4>
            <span class="timeline-time m-0">Tue 25 Nov, 16:40 · London warehouse</span>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-point bg-info/15 border-info text-info"><span class="mdi mdi-truck-fast-outline"></span></div>
          <div class="timeline-content">
            <h4 class="timeline-title">In transit</h4>
            <span class="timeline-time">Today, 07:55 · Manchester sorting center</span>
            <div class="text-sm text-subtle m-0">Estimated delivery Fri 28 Nov, between 13:00 and 17:00.</div>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-truck-delivery-outline"></span></div>
          <div class="timeline-content">
            <h4 class="timeline-title text-subtle">Out for delivery</h4>
            <span class="timeline-time m-0">Pending</span>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-home-outline"></span></div>
          <div class="timeline-content">
            <h4 class="timeline-title text-subtle">Delivered</h4>
            <span class="timeline-time m-0">Pending</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
::end

```html
<ul class="timeline">
  <li class="timeline-item">
    <div class="timeline-point bg-success border-success text-light">
      <span class="mdi mdi-package-variant-closed"></span>
    </div>
    <div class="timeline-content">
      <h4 class="timeline-title">Packed and handed to courier</h4>
      <span class="timeline-time m-0">Tue 25 Nov, 16:40 · London warehouse</span>
    </div>
  </li>
  <li class="timeline-item">
    <div class="timeline-point bg-info/15 border-info text-info"><span class="mdi mdi-truck-fast-outline"></span></div>
    <div class="timeline-content">
      <h4 class="timeline-title">In transit</h4>
      <span class="timeline-time">Today, 07:55 · Manchester sorting center</span>
      <div class="text-sm text-subtle m-0">Estimated delivery Fri 28 Nov.</div>
    </div>
  </li>
  <li class="timeline-item">
    <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-truck-delivery-outline"></span></div>
    <div class="timeline-content">
      <h4 class="timeline-title text-subtle">Out for delivery</h4>
      <span class="timeline-time m-0">Pending</span>
    </div>
  </li>
</ul>
```

```js components
import { Timeline, TimelineItem, TimelinePoint, TimelineContent } from "@abydahana/aksara-ui/components";

const step = (point, content) => TimelineItem({ children: TimelinePoint(point) + TimelineContent(content) });

Timeline({
  children: [
    step(
      {
        className: "bg-success border-success text-light",
        children: '<span class="mdi mdi-package-variant-closed"></span>'
      },
      { title: "Packed and handed to courier", time: "Tue 25 Nov, 16:40 · London warehouse", timeClassName: "m-0" }
    ),
    step(
      { className: "bg-info/15 border-info text-info", children: '<span class="mdi mdi-truck-fast-outline"></span>' },
      {
        title: "In transit",
        time: "Today, 07:55 · Manchester sorting center",
        children: '<div class="text-sm text-subtle m-0">Estimated delivery Fri 28 Nov.</div>'
      }
    ),
    step(
      { className: "border-subtle text-subtle", children: '<span class="mdi mdi-truck-delivery-outline"></span>' },
      { title: "Out for delivery", titleClassName: "text-subtle", time: "Pending", timeClassName: "m-0" }
    )
  ].join("")
});
```

---

## Deploy History

Content can hold anything: badges, code, avatars, and actions.

::html
<div class="docs-preview">
  <ul class="timeline max-w-[40rem]">
    <li class="timeline-item">
      <div class="timeline-point bg-success/15 border-success text-success"><span class="mdi mdi-rocket-launch-outline"></span></div>
      <div class="timeline-content">
        <div class="hstack gap-2 items-center flex-wrap mb-1">
          <h4 class="timeline-title m-0">Deployed to production</h4>
          <span class="badge badge-soft-success">Live</span>
        </div>
        <span class="timeline-time">Today, 10:24 · took 2m 41s</span>
        <div class="hstack gap-2 items-center text-sm">
          <span class="avatar avatar-xs rounded-full avatar-info" aria-hidden="true">NB</span>
          <span><strong>Nina Brooks</strong> promoted <code>a41c9e2</code> “Add invoice export”</span>
        </div>
      </div>
    </li>
    <li class="timeline-item">
      <div class="timeline-point bg-danger/15 border-danger text-danger"><span class="mdi mdi-close"></span></div>
      <div class="timeline-content">
        <div class="hstack gap-2 items-center flex-wrap mb-1">
          <h4 class="timeline-title m-0">Build failed on staging</h4>
          <span class="badge badge-soft-danger">Failed</span>
        </div>
        <span class="timeline-time">Today, 09:58</span>
        <div class="alert alert-danger text-sm mb-2">
          <span class="alert-icon mdi mdi-alert-circle-outline"></span>
          <div class="alert-content">Step <code>test:e2e</code> exited with code 1 · 3 of 214 specs failed.</div>
        </div>
        <div class="hstack gap-2">
          <button class="btn btn-sm btn-soft-danger" type="button"><span class="mdi mdi-refresh"></span> Retry</button>
          <button class="btn btn-sm btn-ghost" type="button">View logs</button>
        </div>
      </div>
    </li>
    <li class="timeline-item">
      <div class="timeline-point"><span class="mdi mdi-source-merge"></span></div>
      <div class="timeline-content">
        <h4 class="timeline-title">Merged #482 into main</h4>
        <span class="timeline-time">Today, 09:51</span>
        <div class="hstack gap-2 items-center text-sm">
          <span class="avatar avatar-xs rounded-full avatar-warning" aria-hidden="true">DK</span>
          <span><strong>Daniel Kim</strong> · 12 commits · +418 −96</span>
        </div>
      </div>
    </li>
    <li class="timeline-item">
      <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-tag-outline"></span></div>
      <div class="timeline-content">
        <h4 class="timeline-title">Tagged v2.8.0</h4>
        <span class="timeline-time m-0">Yesterday, 17:03</span>
      </div>
    </li>
  </ul>
</div>
::end

```html
<li class="timeline-item">
  <div class="timeline-point bg-danger/15 border-danger text-danger"><span class="mdi mdi-close"></span></div>
  <div class="timeline-content">
    <div class="hstack gap-2 items-center flex-wrap mb-1">
      <h4 class="timeline-title m-0">Build failed on staging</h4>
      <span class="badge badge-soft-danger">Failed</span>
    </div>
    <span class="timeline-time">Today, 09:58</span>
    <div class="hstack gap-2">
      <button class="btn btn-sm btn-soft-danger" type="button">Retry</button>
      <button class="btn btn-sm btn-ghost" type="button">View logs</button>
    </div>
  </div>
</li>
```

```js components
import { TimelineItem, TimelinePoint, TimelineContent, Badge, Button } from "@abydahana/aksara-ui/components";

TimelineItem({
  children:
    TimelinePoint({
      className: "bg-danger/15 border-danger text-danger",
      children: '<span class="mdi mdi-close"></span>'
    }) +
    TimelineContent({
      // The title sits in a row with a badge, so it goes in children
      children: `
        <div class="hstack gap-2 items-center flex-wrap mb-1">
          <h4 class="timeline-title m-0">Build failed on staging</h4>
          ${Badge({ variant: "danger", soft: true, label: "Failed" })}
        </div>
        <span class="timeline-time">Today, 09:58</span>
        <div class="hstack gap-2">
          ${Button({ size: "sm", variant: "danger", soft: true, label: "Retry" })}
          ${Button({ size: "sm", ghost: true, label: "View logs" })}
        </div>`
    })
});
```

---

## Activity Feed With Avatars

Use avatar points when the actor matters more than the event type.

::html
<div class="docs-preview">
  <ul class="timeline max-w-[36rem]">
    <li class="timeline-item">
      <div class="timeline-point p-0 overflow-hidden border-subtle"><span class="avatar avatar-xs avatar-success" role="img" aria-label="Olivia Brown">OB</span></div>
      <div class="timeline-content">
        <div class="m-0 text-sm"><strong>Olivia Brown</strong> commented on <strong>Q4 roadmap</strong></div>
        <span class="timeline-time">12 minutes ago</span>
        <div class="p-3 rounded-md bg-subtle text-sm">Let's move the billing migration to January so it doesn't collide with the holiday freeze.</div>
      </div>
    </li>
    <li class="timeline-item">
      <div class="timeline-point p-0 overflow-hidden border-subtle"><span class="avatar avatar-xs avatar-danger" role="img" aria-label="Lucas Hayes">LH</span></div>
      <div class="timeline-content">
        <div class="m-0 text-sm"><strong>Lucas Hayes</strong> uploaded 3 files</div>
        <span class="timeline-time">1 hour ago</span>
        <div class="hstack gap-2">
          <div class="rounded-md w-[4rem] h-[4rem] [background:linear-gradient(150deg,#c9d6df,#2f4858)]" role="img" aria-label="Uploaded file 1"></div>
          <div class="rounded-md w-[4rem] h-[4rem] [background:linear-gradient(150deg,#f3e1c7,#b55d4c)]" role="img" aria-label="Uploaded file 2"></div>
          <span class="hstack items-center justify-center rounded-md bg-subtle text-sm text-subtle w-[4rem] h-[4rem]">+1</span>
        </div>
      </div>
    </li>
    <li class="timeline-item">
      <div class="timeline-point p-0 overflow-hidden border-subtle"><span class="avatar avatar-xs avatar-secondary" role="img" aria-label="Tom Hughes">TH</span></div>
      <div class="timeline-content">
        <div class="m-0 text-sm"><strong>Tom Hughes</strong> moved <strong>Checkout redesign</strong> to <span class="badge badge-soft-success">Done</span></div>
        <span class="timeline-time m-0">Yesterday</span>
      </div>
    </li>
  </ul>
</div>
::end

```html
<li class="timeline-item">
  <div class="timeline-point p-0 overflow-hidden border-subtle">
    <span class="avatar avatar-xs avatar-success" role="img" aria-label="Olivia Brown">OB</span>
  </div>
  <div class="timeline-content">
    <div class="m-0 text-sm"><strong>Olivia Brown</strong> commented on <strong>Q4 roadmap</strong></div>
    <span class="timeline-time">12 minutes ago</span>
    <div class="p-3 rounded-md bg-subtle text-sm">Let's move the billing migration to January.</div>
  </div>
</li>
```

```js components
import { Avatar, TimelineItem, TimelinePoint, TimelineContent } from "@abydahana/aksara-ui/components";

TimelineItem({
  children:
    TimelinePoint({
      className: "p-0 overflow-hidden border-subtle",
      children: Avatar({
        initials: "OB",
        size: "xs",
        variant: "success",
        attributes: { role: "img", "aria-label": "Olivia Brown" }
      })
    }) +
    TimelineContent({
      children: `
        <div class="m-0 text-sm"><strong>Olivia Brown</strong> commented on <strong>Q4 roadmap</strong></div>
        <span class="timeline-time">12 minutes ago</span>
        <div class="p-3 rounded-md bg-subtle text-sm">Let's move the billing migration to January.</div>`
    })
});
```

---

## Compact

`timeline-compact` uses smaller points and tighter spacing for a dense audit log. Both are tokens you can set yourself: `--aksara-timeline-point` (point size, default `1.75rem`) and `--aksara-timeline-gap` (space between items, default `1.5rem`). The connector line is drawn per item, so it always runs through the points.

::html
<div class="docs-preview">
  <div class="card max-w-[26rem]">
    <div class="card-header fw-semibold">Audit log</div>
    <div class="card-body">
      <ul class="timeline timeline-compact text-sm">
        <li class="timeline-item">
          <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-login"></span></div>
          <div class="timeline-content"><span class="fw-semibold">Signed in</span> from Chrome on macOS<span class="timeline-time m-0">09:02</span></div>
        </li>
        <li class="timeline-item">
          <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-key-outline"></span></div>
          <div class="timeline-content"><span class="fw-semibold">API key</span> “CI deploy” created<span class="timeline-time m-0">09:14</span></div>
        </li>
        <li class="timeline-item">
          <div class="timeline-point border-warning text-warning"><span class="mdi mdi-shield-alert-outline"></span></div>
          <div class="timeline-content"><span class="fw-semibold">2FA disabled</span> for this account<span class="timeline-time m-0">09:20</span></div>
        </li>
        <li class="timeline-item">
          <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-logout"></span></div>
          <div class="timeline-content"><span class="fw-semibold">Signed out</span><span class="timeline-time m-0">09:31</span></div>
        </li>
      </ul>
    </div>
  </div>
</div>
::end

```html
<ul class="timeline timeline-compact text-sm">
  <li class="timeline-item">
    <div class="timeline-point border-subtle text-subtle"><span class="mdi mdi-login"></span></div>
    <div class="timeline-content">
      <span class="fw-semibold">Signed in</span> from Chrome on macOS
      <span class="timeline-time m-0">09:02</span>
    </div>
  </li>
</ul>
```

```js components
import { Timeline, TimelineItem, TimelinePoint, TimelineContent } from "@abydahana/aksara-ui/components";

Timeline({
  className: "timeline-compact text-sm",
  children: TimelineItem({
    children:
      TimelinePoint({ className: "border-subtle text-subtle", children: '<span class="mdi mdi-login"></span>' }) +
      TimelineContent({
        children:
          '<span class="fw-semibold">Signed in</span> from Chrome on macOS <span class="timeline-time m-0">09:02</span>'
      })
  })
});
```

---

## String Components

```ts
import { Timeline, TimelineItem, TimelinePoint, TimelineContent } from "@abydahana/aksara-ui/components";

Timeline({
  children: [
    TimelineItem({
      children:
        TimelinePoint({ children: '<span class="mdi mdi-check"></span>', className: "border-success text-success" }) +
        TimelineContent({ title: "Order confirmed", time: "Mon 24 Nov, 09:12" })
    }),
    TimelineItem({
      children:
        TimelinePoint({ children: '<span class="mdi mdi-truck-fast-outline"></span>' }) +
        TimelineContent({ title: "In transit", time: "Today", children: "<p>Arriving Friday.</p>" })
    })
  ].join("")
});
```

`title` and `time` are escaped; `children` is inserted as HTML.

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Component</th><th>Prop</th><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>Timeline</code></td><td><code>children</code>, <code>className</code>, <code>attributes</code></td><td><code>string</code>, <code>string</code>, <code>Record&lt;string, unknown&gt;</code></td><td>Renders <code>&lt;ul class="timeline"&gt;</code>.</td></tr>
      <tr><td><code>TimelineItem</code></td><td><code>children</code>, <code>className</code>, <code>attributes</code></td><td><code>string</code>, <code>string</code>, <code>Record&lt;string, unknown&gt;</code></td><td>Renders <code>&lt;li class="timeline-item"&gt;</code>.</td></tr>
      <tr><td><code>TimelinePoint</code></td><td><code>children</code>, <code>className</code>, <code>attributes</code></td><td><code>string</code>, <code>string</code>, <code>Record&lt;string, unknown&gt;</code></td><td>Renders <code>&lt;div class="timeline-point"&gt;</code>. Put the icon, number or image in <code>children</code> and color utilities in <code>className</code>.</td></tr>
      <tr><td><code>TimelineContent</code></td><td><code>title</code></td><td><code>string</code></td><td>Optional <code>&lt;h4 class="timeline-title"&gt;</code>.</td></tr>
      <tr><td></td><td><code>time</code></td><td><code>string</code></td><td>Optional <code>&lt;span class="timeline-time"&gt;</code>.</td></tr>
      <tr><td></td><td><code>titleClassName</code>, <code>timeClassName</code></td><td><code>string</code></td><td>Extra classes on <code>.timeline-title</code> and <code>.timeline-time</code>.</td></tr>
      <tr><td></td><td><code>children</code>, <code>className</code></td><td><code>string</code></td><td>Body HTML after the title and time; extra classes on <code>.timeline-content</code>.</td></tr>
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
      <tr><th>Class</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.timeline</code></td><td>Unstyled list with the vertical rail drawn behind the points.</td></tr>
      <tr><td><code>.timeline-item</code></td><td>Flex row (point + content) with <code>1.5rem</code> below; the last item has none.</td></tr>
      <tr><td><code>.timeline-point</code></td><td><code>1.75rem</code> circle on the rail with a primary ring and a surface-colored halo. Recolor with <code>border-*</code>, <code>bg-*</code> and <code>text-*</code>.</td></tr>
      <tr><td><code>.timeline-content</code></td><td>Flexible column for the item body.</td></tr>
      <tr><td><code>.timeline-title</code></td><td>Item heading (<code>.9375rem</code>, semibold).</td></tr>
      <tr><td><code>.timeline-time</code></td><td>Small subtle timestamp, displayed as a block with <code>.5rem</code> below (add <code>m-0</code> when nothing follows).</td></tr>
    </tbody>
  </table>
</div>
::end

The timeline has no JavaScript behavior. Keep points at their default size so they stay centered on the rail.
