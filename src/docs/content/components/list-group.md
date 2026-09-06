# List Group

List groups show vertical lists of actions, navigation items, or metadata.

::html
<div class="docs-preview">
  <ul class="list-group" style="max-width:420px;">
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

## Flush List

Use `list-group-flush` when the wrapper should not draw an outer border or rounded corners. Each item still keeps a separator border between rows.

::html
<div class="docs-preview">
  <ul class="list-group list-group-flush" style="max-width:420px;">
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

## Links And Buttons

Use anchors or buttons when each row is an action. Add `list-group-item-action` for hover and focus feedback.

::html
<div class="docs-preview">
  <div class="list-group" style="max-width:420px;">
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

## Rich Items

List group rows can combine a title, supporting subtitle, and badge for notification or metadata lists.

::html
<div class="docs-preview">
  <div class="list-group" style="max-width:520px;">
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
