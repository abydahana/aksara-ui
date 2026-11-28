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

```js components
import { Alert } from "@abydahana/aksara-ui/components";

Alert({ title: "Information", content: "<p>Soft semantic alert text.</p>" });
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

```js components
import { Alert } from "@abydahana/aksara-ui/components";

Alert({ content: "Primary alert", variant: "primary" });
Alert({ content: "Secondary alert", variant: "secondary" });
Alert({ content: "Success alert", variant: "success" });
Alert({ content: "Danger alert", variant: "danger" });
Alert({ content: "Warning alert", variant: "warning" });
Alert({ content: "Info alert", variant: "info" });
Alert({ content: "Dark alert", variant: "dark" });
Alert({ content: "Light alert", variant: "light" });
```

## Alerts With Icons

Put an `.alert-icon` first and wrap the text in `.alert-content`. The alert switches to a row layout automatically and the icon takes the full-strength alert color while the text stays softer.

::html
<div class="docs-preview vstack gap-3">
  <div class="alert alert-info">
    <span class="alert-icon mdi mdi-information-outline"></span>
    <div class="alert-content">
      <p class="alert-title">A new version is available</p>
      <p class="m-0">Aksara 1.5 ships the refreshed palette. <a class="alert-link" href="#/utilities/colors">See what changed</a>.</p>
    </div>
  </div>
  <div class="alert alert-success">
    <span class="alert-icon mdi mdi-check-circle-outline"></span>
    <div class="alert-content">
      <p class="alert-title">Payment received</p>
      <p class="m-0">Invoice #2041 was paid on 28 Nov. A receipt is on its way to your inbox.</p>
    </div>
  </div>
  <div class="alert alert-warning">
    <span class="alert-icon mdi mdi-alert-outline"></span>
    <div class="alert-content">Your trial ends in 3 days. Add a payment method to keep your workspace.</div>
  </div>
  <div class="alert alert-danger alert-dismissible">
    <span class="alert-icon mdi mdi-alert-circle-outline"></span>
    <div class="alert-content">
      <p class="alert-title">Deployment failed</p>
      <p class="m-0">Build step <code>lint</code> exited with code 1.</p>
    </div>
    <button class="close close-sm" type="button" data-dismiss aria-label="Close alert"></button>
  </div>
</div>
::end

```html
<div class="alert alert-success">
  <span class="alert-icon mdi mdi-check-circle-outline"></span>
  <div class="alert-content">
    <p class="alert-title">Payment received</p>
    <p class="m-0">Invoice #2041 was paid on 28 Nov.</p>
  </div>
</div>
```

```js components
import { Alert } from "@abydahana/aksara-ui/components";

Alert({
  variant: "success",
  icon: "mdi-check-circle-outline",
  title: "Payment received",
  content: '<p class="m-0">Invoice #2041 was paid on 28 Nov.</p>'
});
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

```js components
import { Alert } from "@abydahana/aksara-ui/components";

Alert({
  variant: "primary",
  title: "Update available",
  content: '<p>Read the <a class="alert-link" href="#">release notes</a>.</p>',
  dismissible: true,
  dismissTarget: "#releaseAlert",
  closeLabel: "Close alert",
  attributes: { id: "releaseAlert" }
});

Alert({
  variant: "warning",
  content: "Scoped dismiss alert.",
  dismissible: true,
  closeSize: "sm",
  closeLabel: "Close alert"
});
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

```js components
import { CloseButton } from "@abydahana/aksara-ui/components";

// Remove any normal element
CloseButton({ kind: "close", attributes: { "data-dismiss": "#plainAlert" } });

// Hide a modal through the Modal instance
CloseButton({ kind: "close", ariaLabel: "Close modal", attributes: { "data-dismiss": "#modalSample" } });

// Hide a toast through the Toast instance
CloseButton({ kind: "close", size: "sm", ariaLabel: "Close toast", attributes: { "data-dismiss": "#savedToast" } });
```
