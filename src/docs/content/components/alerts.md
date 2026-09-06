# Alerts

Alerts use semantic soft fills and borders for inline feedback.

::html
<div class="docs-preview">
  <div class="alert alert-primary">
    <p class="alert-title">Information</p>
    <p class="m-0">Aksara uses soft semantic accents.</p>
  </div>
  <div class="alert alert-success">Saved successfully.</div>
  <div id="dangerAlertDemo" class="alert alert-danger alert-dismissible">
    Something needs attention.
    <button class="close" type="button" data-dismiss="#dangerAlertDemo" aria-label="Close alert"></button>
  </div>
</div>
::end

```html
<div class="alert alert-primary">
  <p class="alert-title">Information</p>
  <p>Soft semantic alert text.</p>
</div>
```

## All Variants

::html
<div class="docs-preview">
  <div class="alert alert-primary">Primary alert</div>
  <div class="alert alert-secondary">Secondary alert</div>
  <div class="alert alert-success">Success alert</div>
  <div class="alert alert-danger">Danger alert</div>
  <div class="alert alert-warning">Warning alert</div>
  <div class="alert alert-info">Info alert</div>
  <div class="alert alert-dark">Dark alert</div>
  <div class="alert alert-light">Light alert</div>
</div>
::end

```html
<div class="alert alert-primary">Primary alert</div>
<div class="alert alert-secondary">Secondary alert</div>
<div class="alert alert-success">Success alert</div>
<div class="alert alert-danger">Danger alert</div>
<div class="alert alert-warning">Warning alert</div>
<div class="alert alert-info">Info alert</div>
<div class="alert alert-dark">Dark alert</div>
<div class="alert alert-light">Light alert</div>
```

## Link And Dismissible Layout

::html
<div class="docs-preview">
  <div id="releaseAlert" class="alert alert-primary alert-dismissible">
    <p class="alert-title">Update available</p>
    <p class="m-0">Read the <a class="alert-link" href="#">release notes</a> before upgrading.</p>
    <button class="close" type="button" data-dismiss="#releaseAlert" aria-label="Close alert"></button>
  </div>

  <div class="alert alert-warning alert-dismissible mt-4">
    <p class="alert-title">Scoped dismiss</p>
    <p class="m-0">Without a selector, <code>data-dismiss</code> removes the closest dismissible surface.</p>
    <button class="close close-sm" type="button" data-dismiss aria-label="Close alert"></button>
  </div>
</div>
::end

```html
<div id="releaseAlert" class="alert alert-primary alert-dismissible">
  <p class="alert-title">Update available</p>
  <p>Read the <a class="alert-link" href="#">release notes</a>.</p>
  <button class="close" type="button" data-dismiss="#releaseAlert" aria-label="Close alert"></button>
</div>

<div class="alert alert-warning alert-dismissible">
  Scoped dismiss alert.
  <button class="close close-sm" type="button" data-dismiss aria-label="Close alert"></button>
</div>
```

## Universal Dismiss

Use `.close` for the reusable close button and `data-dismiss` for the behavior. When `data-dismiss` contains a selector, Aksara targets that element. If the target is a JavaScript component such as modal, offcanvas, toast, or dropdown, Aksara calls its close method instead of removing the node.

```html
<!-- Remove any normal element -->
<button class="close" type="button" data-dismiss="#plainAlert" aria-label="Close"></button>

<!-- Hide a modal through the Modal instance -->
<button class="close" type="button" data-dismiss="#modalSample" aria-label="Close modal"></button>

<!-- Hide a toast through the Toast instance -->
<button class="close close-sm" type="button" data-dismiss="#savedToast" aria-label="Close toast"></button>
```
