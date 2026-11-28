# Badges

Badges label status, counts, and compact metadata.

Samples with a **Components** tab also show the same markup built with the `Badge` string component from `@abydahana/aksara-ui/components`.

::html
<div class="docs-preview">
  <div class="mb-5">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Solid And Soft Badges</h4>
    <div class="docs-row">
      <span class="badge badge-primary">Primary</span>
      <span class="badge badge-success">Success</span>
      <span class="badge badge-warning">Warning</span>
      <span class="badge badge-danger">Danger</span>
      <span class="badge badge-info">Info</span>
    </div>
  </div>

  <div class="mb-5">
    <h4 class="mt-0 mb-3 fw-bold text-sm">Status Labels</h4>
    <div class="docs-row">
      <span class="badge badge-soft-success">Live</span>
      <span class="badge badge-soft-warning">Pending</span>
      <span class="badge badge-soft-danger">Blocked</span>
      <span class="badge badge-soft-info">Review</span>
    </div>
  </div>

  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Dot Indicators</h4>
    <div class="docs-row">
      <span class="hstack gap-2"><span class="badge badge-dot text-success"></span> Online</span>
      <span class="hstack gap-2"><span class="badge badge-dot text-warning"></span> Away</span>
      <span class="hstack gap-2"><span class="badge badge-dot text-danger"></span> Busy</span>
    </div>
  </div>
</div>
::end

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-soft-success">Live</span>
<span class="badge badge-soft-danger">Blocked</span>

<span class="hstack gap-2">
  <span class="badge badge-dot text-success"></span>
  Online
</span>
```

```js components
import { Badge } from "@abydahana/aksara-ui/components";

Badge({ label: "Primary" });
Badge({ label: "Success", variant: "success" });
Badge({ label: "Live", variant: "success", soft: true });
Badge({ label: "Blocked", variant: "danger", soft: true });

`<span class="hstack gap-2">${Badge({ variant: "success", dot: true })} Online</span>`;
```

---

## Outline Badges

`badge-outline-{color}` draws a hairline in the badge color with no fill. It pairs well with tables and dense lists where a solid badge is too loud.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="badge badge-outline-primary">Primary</span>
    <span class="badge badge-outline-secondary">Draft</span>
    <span class="badge badge-outline-success">Paid</span>
    <span class="badge badge-outline-warning">Due soon</span>
    <span class="badge badge-outline-danger">Overdue</span>
    <span class="badge badge-outline-info">Beta</span>
  </div>
</div>
::end

```html
<span class="badge badge-outline-success">Paid</span> <span class="badge badge-outline-danger">Overdue</span>
```

```js components
import { Badge } from "@abydahana/aksara-ui/components";

Badge({ label: "Paid", variant: "success", outline: true });
Badge({ label: "Overdue", variant: "danger", outline: true });
```

---

## Badges In Context

Badges inherit their size from the surrounding text (`font-size: .75em`), so the same class fits a heading, a button or a list row. Use `badge-xs` to `badge-2xl` for fixed sizes.

::html
<div class="docs-preview vstack gap-3">
  <h4 class="m-0 hstack gap-2">Release notes <span class="badge badge-soft-primary">v1.5</span></h4>
  <div class="docs-row">
    <button class="btn btn-plain">Inbox <span class="badge badge-primary">12</span></button>
    <button class="btn btn-soft-danger">Alerts <span class="badge badge-danger">3</span></button>
  </div>
  <ul class="list-group">
    <li class="list-group-item hstack justify-between"><span>Design review</span><span class="badge badge-soft-success">Done</span></li>
    <li class="list-group-item hstack justify-between"><span>API contract</span><span class="badge badge-soft-warning">In progress</span></li>
    <li class="list-group-item hstack justify-between"><span>Load testing</span><span class="badge badge-outline-secondary">Queued</span></li>
  </ul>
</div>
::end

```html
<h4>Release notes <span class="badge badge-soft-primary">v1.5</span></h4>
<button class="btn btn-plain">Inbox <span class="badge badge-primary">12</span></button>
```

```js components
import { Badge, Button } from "@abydahana/aksara-ui/components";

`<h4>Release notes ${Badge({ label: "v1.5", soft: true })}</h4>`;
Button({ children: `Inbox ${Badge({ label: "12" })}`, plain: true });
```
