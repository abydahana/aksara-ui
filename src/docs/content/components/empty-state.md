# Empty State

An empty state fills the space where content will appear: an empty list, a search with no results, a failed load, or a feature nobody has used yet. It explains what is missing and offers the next step. The block is centered, with an optional icon bubble, a title, a short description, and actions.

::html
<div class="docs-preview">
  <div class="empty-state">
    <div class="empty-state-icon-wrap"><span class="mdi mdi-folder-plus-outline"></span></div>
    <div class="empty-state-title">No projects yet</div>
    <p class="empty-state-desc max-w-[26rem] mx-auto">Projects group your tasks, files, and people. Create one to get started, or import from another tool.</p>
    <div class="empty-state-actions">
      <button type="button" class="btn btn-primary"><span class="mdi mdi-plus"></span> New project</button>
      <button type="button" class="btn btn-ghost">Import</button>
    </div>
  </div>
</div>
::end

```html
<div class="empty-state">
  <div class="empty-state-icon-wrap">
    <span class="mdi mdi-folder-plus-outline"></span>
  </div>
  <div class="empty-state-title">No projects yet</div>
  <p class="empty-state-desc max-w-[26rem] mx-auto">
    Projects group your tasks, files, and people. Create one to get started, or import from another tool.
  </p>
  <div class="empty-state-actions">
    <button type="button" class="btn btn-primary"><span class="mdi mdi-plus"></span> New project</button>
    <button type="button" class="btn btn-ghost">Import</button>
  </div>
</div>
```

```js components
import { Button, EmptyState } from "@abydahana/aksara-ui/components";

// `bare` keeps only the .empty-state-* classes, so the stylesheet does the styling.
EmptyState({
  bare: true,
  icon: "mdi-folder-plus-outline",
  title: "No projects yet",
  description: "Projects group your tasks, files, and people. Create one to get started, or import from another tool.",
  descriptionClassName: "max-w-[26rem] mx-auto",
  actions:
    Button({ children: '<span class="mdi mdi-plus"></span> New project' }) + Button({ label: "Import", ghost: true })
});
```

---

## Anatomy

Every part is optional except the container. Use whichever element suits the document outline for the title (`div`, `h3`, `h4`); `.empty-state-title` sets its look.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.empty-state</code></td><td>Centered block with <code>3rem 1.5rem</code> padding and <code>1rem</code> vertical margin.</td></tr>
      <tr><td><code>.empty-state-icon-wrap</code></td><td>Round 4.5rem bubble with a tint and a soft halo derived from its text color (primary by default). Resize with <code>empty-state-icon-wrap-sm</code> / <code>-lg</code>.</td></tr>
      <tr><td><code>.empty-state-title</code></td><td>Semi-bold <code>1.0625rem</code> heading.</td></tr>
      <tr><td><code>.empty-state-desc</code></td><td>Subtle <code>.875rem</code> text. Cap its width (<code>max-w-[26rem] mx-auto</code>) so lines stay readable.</td></tr>
      <tr><td><code>.empty-state-actions</code></td><td>Centered, wrapping row of buttons with a <code>.5rem</code> gap.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Icon Sizes

The bubble is 4.5rem by default; `empty-state-icon-wrap-sm` (3.5rem) and `empty-state-icon-wrap-lg` (5.5rem) resize the bubble, the icon and the halo together, matching the `iconSize` option of the `EmptyState` string component.

::html
<div class="docs-preview">
  <div class="docs-row justify-center gap-5">
    <div class="empty-state-icon-wrap empty-state-icon-wrap-sm m-0"><span class="mdi mdi-inbox-outline"></span></div>
    <div class="empty-state-icon-wrap m-0"><span class="mdi mdi-inbox-outline"></span></div>
    <div class="empty-state-icon-wrap empty-state-icon-wrap-lg m-0"><span class="mdi mdi-inbox-outline"></span></div>
  </div>
</div>
::end

```html
<div class="empty-state-icon-wrap empty-state-icon-wrap-sm"><span class="mdi mdi-inbox-outline"></span></div>
<div class="empty-state-icon-wrap"><span class="mdi mdi-inbox-outline"></span></div>
<div class="empty-state-icon-wrap empty-state-icon-wrap-lg"><span class="mdi mdi-inbox-outline"></span></div>
```

```js components
import { EmptyStateIcon } from "@abydahana/aksara-ui/components";

EmptyStateIcon({ icon: "mdi-inbox-outline", size: "sm" });
EmptyStateIcon({ icon: "mdi-inbox-outline" });
EmptyStateIcon({ icon: "mdi-inbox-outline", size: "lg" });
```

---

## Icon Colors

The bubble is primary by default, and its fill and halo are derived from the text color, so a single `text-*` utility recolors all three: success for "all done", danger for errors, warning for limits, or `text-subtle` when there is nothing to emphasize.

::html
<div class="docs-preview">
  <div class="docs-row justify-center gap-5">
    <div class="empty-state-icon-wrap m-0"><span class="mdi mdi-magnify"></span></div>
    <div class="empty-state-icon-wrap m-0 text-success"><span class="mdi mdi-check-all"></span></div>
    <div class="empty-state-icon-wrap m-0 text-danger"><span class="mdi mdi-wifi-off"></span></div>
    <div class="empty-state-icon-wrap m-0 text-warning"><span class="mdi mdi-lock-outline"></span></div>
    <div class="empty-state-icon-wrap m-0 text-info"><span class="mdi mdi-bell-sleep-outline"></span></div>
    <div class="empty-state-icon-wrap m-0 text-subtle"><span class="mdi mdi-archive-outline"></span></div>
  </div>
</div>
::end

```html
<div class="empty-state-icon-wrap text-success"><span class="mdi mdi-check-all"></span></div>
<div class="empty-state-icon-wrap text-subtle"><span class="mdi mdi-archive-outline"></span></div>
```

```js components
import { EmptyStateIcon } from "@abydahana/aksara-ui/components";

EmptyStateIcon({ icon: "mdi-check-all", variant: "success" });
EmptyStateIcon({ icon: "mdi-archive-outline", variant: "muted" }); // text-subtle
```

`shadow-none` removes the halo, which otherwise stays a faint primary tint.

---

## Compact And Text Only

For small panels, drop the icon and tighten the spacing with padding and margin utilities. Utilities override the component defaults.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="card card-flat h-100">
        <div class="card-header">Pinned messages</div>
        <div class="empty-state py-4 px-3 my-0">
          <div class="empty-state-title text-sm">Nothing pinned</div>
          <p class="empty-state-desc text-xs mb-0">Hover a message and choose Pin to keep it here.</p>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card card-flat h-100">
        <div class="card-header">Attachments</div>
        <div class="empty-state py-4 px-3 my-0">
          <div class="empty-state-icon-wrap w-[40px] h-[40px] mb-3 text-subtle shadow-none"><span class="mdi mdi-paperclip"></span></div>
          <div class="empty-state-title text-sm">No files</div>
          <p class="empty-state-desc text-xs mb-3">Drop files here or browse.</p>
          <div class="empty-state-actions"><button type="button" class="btn btn-soft-primary btn-sm">Browse</button></div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="empty-state py-4 px-3 my-0">
  <div class="empty-state-title text-sm">Nothing pinned</div>
  <p class="empty-state-desc text-xs mb-0">Hover a message and choose Pin to keep it here.</p>
</div>
```

```js components
import { EmptyState } from "@abydahana/aksara-ui/components";

// `compact` = bare markup with py-4 px-3 my-0, a text-sm title and a text-xs description.
EmptyState({
  compact: true,
  title: "Nothing pinned",
  description: "Hover a message and choose Pin to keep it here."
});
```

---

## Aligned To Start

Inside a left-aligned layout, such as a settings section, align the block with `text-start`, move the actions with `justify-start`, and drop the icon's auto margin with `ms-0`.

::html
<div class="docs-preview">
  <div class="empty-state text-start px-0 my-0">
    <div class="empty-state-icon-wrap empty-state-icon-wrap-sm ms-0"><span class="mdi mdi-key-chain-variant"></span></div>
    <div class="empty-state-title">No API keys</div>
    <p class="empty-state-desc max-w-[30rem]">API keys let scripts and integrations access this workspace. Keys inherit the permissions of the person who creates them.</p>
    <div class="empty-state-actions justify-start">
      <button type="button" class="btn btn-primary btn-sm">Create key</button>
      <button type="button" class="btn btn-ghost btn-sm">Read the API guide</button>
    </div>
  </div>
</div>
::end

```html
<div class="empty-state text-start px-0 my-0">
  <div class="empty-state-icon-wrap empty-state-icon-wrap-sm ms-0">
    <span class="mdi mdi-key-chain-variant"></span>
  </div>
  <div class="empty-state-title">No API keys</div>
  <p class="empty-state-desc max-w-[30rem]">API keys let scripts and integrations access this workspace.</p>
  <div class="empty-state-actions justify-start">
    <button type="button" class="btn btn-primary btn-sm">Create key</button>
  </div>
</div>
```

```js components
import { Button, EmptyState } from "@abydahana/aksara-ui/components";

EmptyState({
  bare: true,
  centered: false, // text-start, and justify-start on the actions
  className: "px-0 my-0",
  icon: "mdi-key-chain-variant",
  iconSize: "sm",
  iconClassName: "ms-0",
  title: "No API keys",
  description: "API keys let scripts and integrations access this workspace.",
  descriptionClassName: "max-w-[30rem]",
  actions: Button({ label: "Create key", size: "sm" })
});
```

---

## No Search Results

Repeat the query back to the user and offer a way out, such as clearing filters.

::html
<div class="docs-preview">
  <div class="card">
    <div class="card-body">
      <div class="form-icon">
        <span class="form-icon-start mdi mdi-magnify"></span>
        <input class="form-control" type="search" value="invoice 2099" aria-label="Search invoices">
      </div>
      <div class="hstack flex-wrap gap-2 mt-3">
        <span class="chip chip-soft-primary chip-sm"><span class="chip-label">Status: Paid</span></span>
        <span class="chip chip-soft-primary chip-sm"><span class="chip-label">This month</span></span>
      </div>
      <div class="empty-state mb-0">
        <div class="empty-state-icon-wrap"><span class="mdi mdi-file-search-outline"></span></div>
        <div class="empty-state-title">No invoices match “invoice 2099”</div>
        <p class="empty-state-desc max-w-[26rem] mx-auto">Check the spelling, or search all statuses and dates.</p>
        <div class="empty-state-actions">
          <button type="button" class="btn btn-outline-primary">Clear filters</button>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="empty-state">
  <div class="empty-state-icon-wrap"><span class="mdi mdi-file-search-outline"></span></div>
  <div class="empty-state-title">No invoices match “invoice 2099”</div>
  <p class="empty-state-desc max-w-[26rem] mx-auto">Check the spelling, or search all statuses and dates.</p>
  <div class="empty-state-actions">
    <button type="button" class="btn btn-outline-primary">Clear filters</button>
  </div>
</div>
```

```js components
import { Button, EmptyState } from "@abydahana/aksara-ui/components";

EmptyState({
  bare: true,
  icon: "mdi-file-search-outline",
  title: "No invoices match “invoice 2099”",
  description: "Check the spelling, or search all statuses and dates.",
  descriptionClassName: "max-w-[26rem] mx-auto",
  actions: Button({ label: "Clear filters", outline: true })
});
```

---

## Inside A Table

Keep the table header so the layout does not jump when rows arrive, and put the empty state in a single cell that spans every column.

::html
<div class="docs-preview">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr><th>Customer</th><th>Amount</th><th>Status</th><th>Date</th></tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="4">
            <div class="empty-state py-4 my-0">
              <div class="empty-state-icon-wrap empty-state-icon-wrap-sm text-subtle shadow-none"><span class="mdi mdi-receipt-text-outline"></span></div>
              <div class="empty-state-title">No transactions this week</div>
              <p class="empty-state-desc mb-0">Payments appear here as soon as customers pay an invoice.</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
::end

```html
<tbody>
  <tr>
    <td colspan="4">
      <div class="empty-state py-4 my-0">
        <div class="empty-state-icon-wrap empty-state-icon-wrap-sm text-subtle shadow-none">
          <span class="mdi mdi-receipt-text-outline"></span>
        </div>
        <div class="empty-state-title">No transactions this week</div>
        <p class="empty-state-desc mb-0">Payments appear here as soon as customers pay an invoice.</p>
      </div>
    </td>
  </tr>
</tbody>
```

```js components
import { EmptyState } from "@abydahana/aksara-ui/components";

`<tbody>
  <tr>
    <td colspan="4">
      ${EmptyState({
        bare: true,
        className: "py-4 my-0",
        icon: "mdi-receipt-text-outline",
        iconSize: "sm",
        iconVariant: "muted",
        iconClassName: "shadow-none",
        title: "No transactions this week",
        description: "Payments appear here as soon as customers pay an invoice.",
        descriptionClassName: "mb-0"
      })}
    </td>
  </tr>
</tbody>`;
```

---

## Error And Success States

The same structure works for a failed load (with a retry) and for "all done" moments.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="card h-100">
        <div class="empty-state">
          <div class="empty-state-icon-wrap text-danger shadow-none"><span class="mdi mdi-cloud-alert-outline"></span></div>
          <div class="empty-state-title">Couldn’t load activity</div>
          <p class="empty-state-desc">The server took too long to respond. Your data is safe.</p>
          <div class="empty-state-actions">
            <button type="button" class="btn btn-outline-secondary btn-sm"><span class="mdi mdi-refresh"></span> Try again</button>
            <a class="btn btn-ghost btn-sm" href="#/components/empty-state">Status page</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card h-100">
        <div class="empty-state">
          <div class="empty-state-icon-wrap text-success shadow-none"><span class="mdi mdi-party-popper"></span></div>
          <div class="empty-state-title">Inbox zero</div>
          <p class="empty-state-desc">You’ve replied to every conversation. New messages will show up here.</p>
          <div class="empty-state-actions">
            <button type="button" class="btn btn-ghost btn-sm">View archived</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="empty-state">
  <div class="empty-state-icon-wrap text-danger shadow-none">
    <span class="mdi mdi-cloud-alert-outline"></span>
  </div>
  <div class="empty-state-title">Couldn’t load activity</div>
  <p class="empty-state-desc">The server took too long to respond. Your data is safe.</p>
  <div class="empty-state-actions">
    <button type="button" class="btn btn-outline-secondary btn-sm">
      <span class="mdi mdi-refresh"></span> Try again
    </button>
  </div>
</div>
```

```js components
import { Button, EmptyState } from "@abydahana/aksara-ui/components";

EmptyState({
  bare: true,
  icon: "mdi-cloud-alert-outline",
  iconVariant: "danger",
  iconClassName: "shadow-none",
  title: "Couldn’t load activity",
  description: "The server took too long to respond. Your data is safe.",
  actions: Button({
    variant: "secondary",
    outline: true,
    size: "sm",
    children: '<span class="mdi mdi-refresh"></span> Try again'
  })
});
```

---

## First Run

On a feature nobody has used yet, show who it is for and what happens next. An avatar stack hints at collaboration without a screenshot.

::html
<div class="docs-preview [background:var(--aksara-bg-body-secondary)]">
  <div class="card">
    <div class="empty-state">
      <div class="avatar-stack mb-4">
        <span class="avatar avatar-lg avatar-warning" aria-hidden="true">GL</span>
        <span class="avatar avatar-lg avatar-info" aria-hidden="true">RC</span>
        <span class="avatar avatar-primary avatar-lg"><span class="avatar-fallback mdi mdi-plus"></span></span>
      </div>
      <div class="empty-state-title">Invite your team</div>
      <p class="empty-state-desc max-w-[28rem] mx-auto">Workspaces are better together. Teammates can comment, assign tasks, and edit documents with you in real time.</p>
      <div class="empty-state-actions">
        <button type="button" class="btn btn-primary"><span class="mdi mdi-email-outline"></span> Invite by email</button>
        <button type="button" class="btn btn-outline-secondary"><span class="mdi mdi-link-variant"></span> Copy invite link</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="empty-state">
  <div class="avatar-stack mb-4">
    <span class="avatar avatar-lg avatar-warning" aria-hidden="true">GL</span>
    <span class="avatar avatar-lg avatar-info" aria-hidden="true">RC</span>
    <span class="avatar avatar-primary avatar-lg"><span class="avatar-fallback mdi mdi-plus"></span></span>
  </div>
  <div class="empty-state-title">Invite your team</div>
  <p class="empty-state-desc max-w-[28rem] mx-auto">Workspaces are better together.</p>
  <div class="empty-state-actions">
    <button type="button" class="btn btn-primary">Invite by email</button>
    <button type="button" class="btn btn-outline-secondary">Copy invite link</button>
  </div>
</div>
```

```js components
import { Avatar, AvatarStack, Button, EmptyState } from "@abydahana/aksara-ui/components";

EmptyState({
  bare: true,
  // `media` replaces the icon bubble with any HTML
  media: AvatarStack({
    className: "mb-4",
    children: [
      Avatar({ initials: "GL", size: "lg", variant: "warning", attributes: { "aria-hidden": "true" } }),
      Avatar({ initials: "RC", size: "lg", variant: "info", attributes: { "aria-hidden": "true" } }),
      Avatar({ size: "lg", icon: "mdi-plus" })
    ].join("")
  }),
  title: "Invite your team",
  description: "Workspaces are better together.",
  descriptionClassName: "max-w-[28rem] mx-auto",
  actions:
    Button({ label: "Invite by email" }) + Button({ label: "Copy invite link", variant: "secondary", outline: true })
});
```

---

## String Component

`EmptyState` renders the full block. The title and description are escaped; `actions` is raw HTML, so you can pass buttons built with the `Button` component.

```ts
import { EmptyState, Button } from "@abydahana/aksara-ui/components";

EmptyState({
  icon: "mdi-folder-plus-outline",
  iconVariant: "primary",
  title: "No projects yet",
  description: "Projects group your tasks, files, and people.",
  actions: Button({ label: "New project", variant: "primary" })
});
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>title</code></td><td><code>string</code></td><td>—</td><td>Heading text, rendered in an <code>&lt;h3 class="empty-state-title"&gt;</code>.</td></tr>
      <tr><td><code>description</code></td><td><code>string</code></td><td>—</td><td>Supporting text, capped at <code>28rem</code> and centered (unless <code>bare</code>).</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td>—</td><td>MDI class such as <code>"mdi-inbox-outline"</code>. Omit for a text-only state.</td></tr>
      <tr><td><code>iconVariant</code></td><td><code>string</code></td><td><code>"primary"</code></td><td>Icon color, applied as <code>text-{iconVariant}</code>; <code>"muted"</code> maps to <code>text-subtle</code>. With <code>bare</code> no color class is added unless you pass one.</td></tr>
      <tr><td><code>iconSize</code></td><td><code>"sm" | "md" | "lg"</code></td><td><code>"md"</code></td><td>Adds <code>.empty-state-icon-wrap-sm</code> or <code>-lg</code>.</td></tr>
      <tr><td><code>iconClassName</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the icon bubble, e.g. <code>"shadow-none"</code>.</td></tr>
      <tr><td><code>media</code></td><td><code>string</code></td><td>—</td><td>Raw HTML (an avatar stack, an illustration) rendered instead of the icon bubble.</td></tr>
      <tr><td><code>actions</code></td><td><code>string</code></td><td>—</td><td>Raw HTML placed in <code>.empty-state-actions</code>.</td></tr>
      <tr><td><code>centered</code></td><td><code>boolean</code></td><td><code>true</code></td><td><code>false</code> aligns the text and actions to the start.</td></tr>
      <tr><td><code>bare</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Only the semantic <code>.empty-state-*</code> classes, with no spacing or typography utilities, so the stylesheet and your own classes decide.</td></tr>
      <tr><td><code>compact</code></td><td><code>boolean</code></td><td><code>false</code></td><td><code>bare</code> plus <code>py-4 px-3 my-0</code>, a <code>text-sm</code> title and a <code>text-xs</code> description.</td></tr>
      <tr><td><code>titleClassName</code>, <code>descriptionClassName</code>, <code>actionsClassName</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the title, description and actions row.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the container.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes.</td></tr>
    </tbody>
  </table>
</div>
::end

`EmptyStateIcon({ icon, variant, size, className })` renders the bubble on its own, as in the icon size and color samples above.
