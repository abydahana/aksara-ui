# Toasts

Toasts are short, non-blocking notifications that appear in a fixed corner of the screen and hide themselves after a delay. Place `.toast` elements in a `.toast-stack`, pick a corner with a `toast-{position}` class, and open them with `data-toast="#id"` or `Aksara.toast()`. For one-line messages without markup, `Aksara.notify()` creates a toast on the fly.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-primary" type="button" data-toast="#toastBasic">Show toast</button>
  </div>
</div>

<div class="toast-stack">
  <div id="toastBasic" class="toast" role="status">
    <div class="toast-header">
      <span class="mdi mdi-bell-outline"></span>
      <strong class="me-auto">Aksara</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Hello! This toast hides itself after 5 seconds.</div>
  </div>
</div>
::end

```html
<button class="btn btn-primary" type="button" data-toast="#savedToast">Show toast</button>

<div class="toast-stack">
  <div id="savedToast" class="toast" role="status">
    <div class="toast-header">
      <span class="mdi mdi-bell-outline"></span>
      <strong class="me-auto">Aksara</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Hello! This toast hides itself after 5 seconds.</div>
  </div>
</div>
```

```js components
import { Button, Toast, ToastContainer } from "@abydahana/aksara-ui/components";

Button({ label: "Show toast", attributes: { "data-toast": "#savedToast" } });

ToastContainer({
  placement: "bottom-end",
  children: Toast({
    id: "savedToast",
    role: "status",
    icon: "bell-outline",
    title: "Aksara",
    time: "Just now",
    delay: 5000,
    body: "Hello! This toast hides itself after 5 seconds."
  })
});
```

A `.toast` is hidden until the runtime adds `.toast-show`. A bare `data-dismiss` on the close button closes its own toast.

---

## Colors

`toast-{color}` tints the border and background and colors the header text. Every theme color is available: `primary`, `secondary`, `tertiary`, `success`, `danger`, `warning`, `info`, `dark` and `light`. The previews below are static (`.toast-show` is added in the markup); the buttons launch the same toasts at the top end of the screen.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-soft-primary btn-sm" type="button" data-toast="#toastColorPrimary">Primary</button>
    <button class="btn btn-soft-secondary btn-sm" type="button" data-toast="#toastColorSecondary">Secondary</button>
    <button class="btn btn-soft-tertiary btn-sm" type="button" data-toast="#toastColorTertiary">Tertiary</button>
    <button class="btn btn-soft-success btn-sm" type="button" data-toast="#toastColorSuccess">Success</button>
    <button class="btn btn-soft-danger btn-sm" type="button" data-toast="#toastColorDanger">Danger</button>
    <button class="btn btn-soft-warning btn-sm" type="button" data-toast="#toastColorWarning">Warning</button>
    <button class="btn btn-soft-info btn-sm" type="button" data-toast="#toastColorInfo">Info</button>
    <button class="btn btn-outline-secondary btn-sm" type="button" data-toast="#toastColorDark">Dark</button>
    <button class="btn btn-outline-secondary btn-sm" type="button" data-toast="#toastColorLight">Light</button>
  </div>
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="toast toast-primary toast-show" role="status">
        <div class="toast-header">
          <span class="mdi mdi-flash"></span>
          <strong class="me-auto">Deploy started</strong>
          <small class="text-subtle fw-normal">Just now</small>
          <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
        </div>
        <div class="toast-body">Building commit 3f9a2c on main.</div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-secondary toast-show" role="status">
        <div class="toast-header">
          <span class="mdi mdi-cog"></span>
          <strong class="me-auto">Settings updated</strong>
          <small class="text-subtle fw-normal">Just now</small>
          <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
        </div>
        <div class="toast-body">Your notification preferences were saved.</div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-tertiary toast-show" role="status">
        <div class="toast-header">
          <span class="mdi mdi-tag-outline"></span>
          <strong class="me-auto">Label added</strong>
          <small class="text-subtle fw-normal">Just now</small>
          <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
        </div>
        <div class="toast-body">“Design” was added to 3 tasks.</div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-success toast-show" role="status">
        <div class="toast-header">
          <span class="mdi mdi-check-circle"></span>
          <strong class="me-auto">Changes saved</strong>
          <small class="text-subtle fw-normal">Just now</small>
          <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
        </div>
        <div class="toast-body">Your profile has been updated.</div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-danger toast-show" role="status">
        <div class="toast-header">
          <span class="mdi mdi-alert-circle"></span>
          <strong class="me-auto">Payment failed</strong>
          <small class="text-subtle fw-normal">Just now</small>
          <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
        </div>
        <div class="toast-body">The card ending in 4242 was declined.</div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-warning toast-show" role="status">
        <div class="toast-header">
          <span class="mdi mdi-alert"></span>
          <strong class="me-auto">Storage almost full</strong>
          <small class="text-subtle fw-normal">Just now</small>
          <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
        </div>
        <div class="toast-body">You have used 94% of 10 GB.</div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-info toast-show" role="status">
        <div class="toast-header">
          <span class="mdi mdi-information"></span>
          <strong class="me-auto">Backup scheduled</strong>
          <small class="text-subtle fw-normal">Just now</small>
          <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
        </div>
        <div class="toast-body">The next backup runs tonight at 02:00.</div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-dark toast-show" role="status">
        <div class="toast-header">
          <span class="mdi mdi-weather-night"></span>
          <strong class="me-auto">Focus mode on</strong>
          <small class="text-subtle fw-normal">Just now</small>
          <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
        </div>
        <div class="toast-body">Notifications are paused for 1 hour.</div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-light toast-show" role="status">
        <div class="toast-header">
          <span class="mdi mdi-white-balance-sunny"></span>
          <strong class="me-auto">Focus mode off</strong>
          <small class="text-subtle fw-normal">Just now</small>
          <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
        </div>
        <div class="toast-body">Notifications are back on.</div>
      </div>
    </div>
  </div>
</div>

<div class="toast-stack toast-top-end [top:80px]">
  <div id="toastColorPrimary" class="toast toast-primary" role="status" data-toast-delay="4000">
    <div class="toast-header">
      <span class="mdi mdi-flash"></span>
      <strong class="me-auto">Deploy started</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Building commit 3f9a2c on main.</div>
  </div>
  <div id="toastColorSecondary" class="toast toast-secondary" role="status" data-toast-delay="4000">
    <div class="toast-header">
      <span class="mdi mdi-cog"></span>
      <strong class="me-auto">Settings updated</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Your notification preferences were saved.</div>
  </div>
  <div id="toastColorTertiary" class="toast toast-tertiary" role="status" data-toast-delay="4000">
    <div class="toast-header">
      <span class="mdi mdi-tag-outline"></span>
      <strong class="me-auto">Label added</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">“Design” was added to 3 tasks.</div>
  </div>
  <div id="toastColorSuccess" class="toast toast-success" role="status" data-toast-delay="4000">
    <div class="toast-header">
      <span class="mdi mdi-check-circle"></span>
      <strong class="me-auto">Changes saved</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Your profile has been updated.</div>
  </div>
  <div id="toastColorDanger" class="toast toast-danger" role="status" data-toast-delay="4000">
    <div class="toast-header">
      <span class="mdi mdi-alert-circle"></span>
      <strong class="me-auto">Payment failed</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">The card ending in 4242 was declined.</div>
  </div>
  <div id="toastColorWarning" class="toast toast-warning" role="status" data-toast-delay="4000">
    <div class="toast-header">
      <span class="mdi mdi-alert"></span>
      <strong class="me-auto">Storage almost full</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">You have used 94% of 10 GB.</div>
  </div>
  <div id="toastColorInfo" class="toast toast-info" role="status" data-toast-delay="4000">
    <div class="toast-header">
      <span class="mdi mdi-information"></span>
      <strong class="me-auto">Backup scheduled</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">The next backup runs tonight at 02:00.</div>
  </div>
  <div id="toastColorDark" class="toast toast-dark" role="status" data-toast-delay="4000">
    <div class="toast-header">
      <span class="mdi mdi-weather-night"></span>
      <strong class="me-auto">Focus mode on</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Notifications are paused for 1 hour.</div>
  </div>
  <div id="toastColorLight" class="toast toast-light" role="status" data-toast-delay="4000">
    <div class="toast-header">
      <span class="mdi mdi-white-balance-sunny"></span>
      <strong class="me-auto">Focus mode off</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Notifications are back on.</div>
  </div>
</div>
::end

```html
<div class="toast toast-primary">...</div>
<div class="toast toast-secondary">...</div>
<div class="toast toast-tertiary">...</div>
<div class="toast toast-success">...</div>
<div class="toast toast-danger">...</div>
<div class="toast toast-warning">...</div>
<div class="toast toast-info">...</div>
<div class="toast toast-dark">...</div>
<div class="toast toast-light">...</div>
```

```js components
import { Toast } from "@abydahana/aksara-ui/components";

["primary", "secondary", "success", "danger", "warning", "info", "dark", "light"]
  .map((variant) => Toast({ variant, body: "..." }))
  .join("\n");
```

---

## Positions

Add a position class to `.toast-stack`. Without one, the stack sits at the bottom end. Start and end are logical, so they mirror in RTL documents; the center positions stay centered.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-toast="#toastPosTopStart"><span class="mdi mdi-arrow-top-left"></span> Top start</button>
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-toast="#toastPosTopCenter"><span class="mdi mdi-arrow-up"></span> Top center</button>
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-toast="#toastPosTopEnd"><span class="mdi mdi-arrow-top-right"></span> Top end</button>
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-toast="#toastPosBottomStart"><span class="mdi mdi-arrow-bottom-left"></span> Bottom start</button>
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-toast="#toastPosBottomCenter"><span class="mdi mdi-arrow-down"></span> Bottom center</button>
    <button class="btn btn-outline-primary hstack gap-2" type="button" data-toast="#toastPosBottomEnd"><span class="mdi mdi-arrow-bottom-right"></span> Bottom end</button>
  </div>
</div>

<div class="toast-stack toast-top-start [top:80px]">
  <div id="toastPosTopStart" class="toast" role="status" data-toast-delay="3000">
    <div class="toast-header">
      <span class="mdi mdi-arrow-top-left"></span>
      <strong class="me-auto">Top start</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Upper-left corner (upper-right in RTL).</div>
  </div>
</div>
<div class="toast-stack toast-top-center [top:80px]">
  <div id="toastPosTopCenter" class="toast" role="status" data-toast-delay="3000">
    <div class="toast-header">
      <span class="mdi mdi-arrow-up"></span>
      <strong class="me-auto">Top center</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Centered along the top edge.</div>
  </div>
</div>
<div class="toast-stack toast-top-end [top:80px]">
  <div id="toastPosTopEnd" class="toast" role="status" data-toast-delay="3000">
    <div class="toast-header">
      <span class="mdi mdi-arrow-top-right"></span>
      <strong class="me-auto">Top end</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Upper-right corner (upper-left in RTL).</div>
  </div>
</div>
<div class="toast-stack toast-bottom-start">
  <div id="toastPosBottomStart" class="toast" role="status" data-toast-delay="3000">
    <div class="toast-header">
      <span class="mdi mdi-arrow-bottom-left"></span>
      <strong class="me-auto">Bottom start</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Lower-left corner (lower-right in RTL).</div>
  </div>
</div>
<div class="toast-stack toast-bottom-center">
  <div id="toastPosBottomCenter" class="toast" role="status" data-toast-delay="3000">
    <div class="toast-header">
      <span class="mdi mdi-arrow-down"></span>
      <strong class="me-auto">Bottom center</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Centered along the bottom edge.</div>
  </div>
</div>
<div class="toast-stack toast-bottom-end">
  <div id="toastPosBottomEnd" class="toast" role="status" data-toast-delay="3000">
    <div class="toast-header">
      <span class="mdi mdi-arrow-bottom-right"></span>
      <strong class="me-auto">Bottom end</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Lower-right corner, the default.</div>
  </div>
</div>
::end

```html
<div class="toast-stack toast-top-start">...</div>
<div class="toast-stack toast-top-center">...</div>
<div class="toast-stack toast-top-end">...</div>
<div class="toast-stack toast-bottom-start">...</div>
<div class="toast-stack toast-bottom-center">...</div>
<div class="toast-stack toast-bottom-end">...</div>
```

```js components
import { ToastContainer } from "@abydahana/aksara-ui/components";

["top-start", "top-center", "top-end", "bottom-start", "bottom-center", "bottom-end"]
  .map((placement) => ToastContainer({ placement, children: "..." }))
  .join("\n");
```

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Class</th><th>Position</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>toast-stack</code></td><td>Fixed, <code>1rem</code> from the bottom and inline end edges, <code>24rem</code> wide, <code>0.75rem</code> gap.</td></tr>
      <tr><td class="text-nowrap"><code>toast-top-start</code></td><td>Top, inline start.</td></tr>
      <tr><td class="text-nowrap"><code>toast-top-center</code></td><td>Top, centered.</td></tr>
      <tr><td class="text-nowrap"><code>toast-top-end</code></td><td>Top, inline end.</td></tr>
      <tr><td class="text-nowrap"><code>toast-bottom-start</code></td><td>Bottom, inline start.</td></tr>
      <tr><td class="text-nowrap"><code>toast-bottom-center</code></td><td>Bottom, centered.</td></tr>
      <tr><td class="text-nowrap"><code>toast-bottom-end</code></td><td>Bottom, inline end (same as the default).</td></tr>
    </tbody>
  </table>
</div>
::end

Override the offset inline when a fixed header is in the way, for example `style="top: 80px"`.

---

## Content Patterns

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="toast toast-show">
        <div class="toast-body hstack gap-2 text-body"><span class="mdi mdi-content-copy text-subtle"></span> Link copied to clipboard</div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-show">
        <div class="hstack gap-3">
          <span class="avatar avatar-md rounded-full avatar-info" aria-hidden="true">NB<span class="avatar-status bg-success"></span></span>
          <div class="flex-1 min-w-0">
            <div class="toast-header m-0"><strong>Nina Brooks</strong><small class="text-subtle fw-normal">2m ago</small></div>
            <div class="toast-body truncate">Can you review the onboarding copy?</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-show">
        <div class="hstack gap-3">
          <span class="toast-body flex-1">3 conversations archived.</span>
          <button class="btn btn-ghost btn-sm" type="button">Undo</button>
          <button class="btn-close btn-close-sm" type="button" aria-label="Close"></button>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-show">
        <div class="toast-header"><span class="spinner spinner-sm" aria-hidden="true"></span><strong class="me-auto">Uploading 4 files</strong><small class="text-subtle fw-normal">68%</small></div>
        <div class="progress progress-thin mt-2" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar w-[68%]"></div></div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-info toast-show">
        <div class="toast-header"><span class="mdi mdi-update"></span><strong class="me-auto">Update available</strong></div>
        <div class="toast-body mb-3">Version 2.4 adds offline mode and faster sync.</div>
        <div class="hstack gap-2 justify-end">
          <button class="btn btn-ghost btn-sm" type="button">Later</button>
          <button class="btn btn-primary btn-sm" type="button">Restart now</button>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="toast toast-success toast-show">
        <div class="toast-header"><span class="mdi mdi-cash-check"></span><strong class="me-auto">Payment received</strong><small class="text-subtle fw-normal">Just now</small></div>
        <div class="toast-body"><strong class="text-body">$1,240.00</strong> from Acme Corp for invoice #0042.</div>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- Body only -->
<div class="toast">
  <div class="toast-body hstack gap-2 text-body">
    <span class="mdi mdi-content-copy"></span> Link copied to clipboard
  </div>
</div>

<!-- With an action -->
<div class="toast">
  <div class="hstack gap-3">
    <span class="toast-body flex-1">3 conversations archived.</span>
    <button class="btn btn-ghost btn-sm" type="button">Undo</button>
    <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
  </div>
</div>

<!-- With progress -->
<div class="toast">
  <div class="toast-header">
    <span class="spinner spinner-sm" aria-hidden="true"></span>
    <strong class="me-auto">Uploading 4 files</strong>
    <small class="text-subtle fw-normal">68%</small>
  </div>
  <div class="progress progress-thin mt-2"><div class="progress-bar w-[68%]"></div></div>
</div>
```

```js components
import { Toast, Button, CloseButton, Spinner, Progress } from "@abydahana/aksara-ui/components";

// Body only
Toast({
  bodyClassName: "hstack gap-2 text-body",
  body: '<span class="mdi mdi-content-copy"></span> Link copied to clipboard'
});

// With an action: skip `body` and pass the row as children
Toast({
  children: `<div class="hstack gap-3">
    <span class="toast-body flex-1">3 conversations archived.</span>
    ${Button({ ghost: true, size: "sm", label: "Undo" })}
    ${CloseButton({ size: "sm", attributes: { "data-dismiss": true } })}
  </div>`
});

// With progress
Toast({
  iconHtml: Spinner({ size: "sm", decorative: true }),
  title: "Uploading 4 files",
  time: "68%",
  dismissible: false,
  children: Progress({ value: 68, className: "progress-thin mt-2" })
});
```

---

## Delay and Autohide

Toasts hide after `5000` ms by default. Set `data-toast-delay` to change it, or `data-toast-autohide="false"` to keep the toast until it is dismissed. Both work on the `.toast` or on the trigger. Several toasts in one stack line up with a `0.75rem` gap.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary" type="button" data-toast="#toastQuick">1.5 second toast</button>
    <button class="btn btn-outline-primary" type="button" data-toast="#toastSticky">Sticky toast</button>
  </div>
</div>

<div class="toast-stack toast-bottom-center">
  <div id="toastQuick" class="toast" role="status" data-toast-delay="1500">
    <div class="toast-header">
      <span class="mdi mdi-timer-sand"></span>
      <strong class="me-auto">Quick note</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">Gone in a moment.</div>
  </div>
  <div id="toastSticky" class="toast toast-warning" role="status" data-toast-autohide="false">
    <div class="toast-header">
      <span class="mdi mdi-pin-outline"></span>
      <strong class="me-auto">Action required</strong>
      <small class="text-subtle fw-normal">Just now</small>
      <button class="btn-close btn-close-sm" type="button" data-dismiss aria-label="Close"></button>
    </div>
    <div class="toast-body">This toast stays until you close it.</div>
  </div>
</div>
::end

```html
<div id="toastQuick" class="toast" data-toast-delay="1500">...</div>
<div id="toastSticky" class="toast toast-warning" data-toast-autohide="false">...</div>

<!-- Trigger options are merged into the toast's instance -->
<button class="btn btn-outline-primary" data-toast="#toastQuick" data-toast-delay="8000">8 seconds</button>
```

```js components
import { Button, Toast } from "@abydahana/aksara-ui/components";

Toast({ id: "toastQuick", delay: 1500, body: "..." });
Toast({ id: "toastSticky", variant: "warning", autohide: false, body: "..." });

// Trigger options are merged into the toast's instance
Button({ outline: true, label: "8 seconds", attributes: { "data-toast": "#toastQuick", "data-toast-delay": "8000" } });
```

---

## Quick Notifications

`Aksara.notify(message, options)` shows a dark pill at the bottom of the screen without any markup and removes it after `duration` milliseconds (default `2500`). Use it for short confirmations such as "Copied".

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-soft-primary" type="button" onclick="Aksara.notify('Link copied to clipboard', { icon: 'mdi-content-copy' })">Copied</button>
    <button class="btn btn-soft-success" type="button" onclick="Aksara.notify('Saved 3 changes', { icon: 'mdi-check-circle-outline', duration: 4000 })">Saved (4s)</button>
    <button class="btn btn-soft-secondary" type="button" onclick="Aksara.notify('You are offline. Changes will sync later.', { icon: 'mdi-wifi-off' })">Offline</button>
  </div>
</div>
::end

```js
Aksara.notify("Link copied to clipboard", { icon: "mdi-content-copy" });
Aksara.notify("Saved 3 changes", { icon: "mdi-check-circle-outline", duration: 4000 });
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
      <tr><td class="text-nowrap"><code>data-toast="#id"</code></td><td>any element</td><td>Shows the toast and restarts its timer.</td></tr>
      <tr><td class="text-nowrap"><code>data-toast-delay="3000"</code></td><td>toast, trigger</td><td>Milliseconds before the toast hides.</td></tr>
      <tr><td class="text-nowrap"><code>data-toast-autohide="false"</code></td><td>toast, trigger</td><td>Keeps the toast until it is dismissed.</td></tr>
      <tr><td class="text-nowrap"><code>data-dismiss</code></td><td>inside a toast</td><td>Closes the containing toast. <code>data-dismiss="#id"</code> closes any toast.</td></tr>
    </tbody>
  </table>
</div>
::end

### Options

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Option</th><th>Attribute</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>delay</code></td><td class="text-nowrap"><code>data-toast-delay</code></td><td class="text-nowrap"><code>5000</code></td><td>Milliseconds before auto-hiding. <code>0</code> disables the timer.</td></tr>
      <tr><td class="text-nowrap"><code>autohide</code></td><td class="text-nowrap"><code>data-toast-autohide</code></td><td class="text-nowrap"><code>true</code></td><td>Hide automatically after <code>delay</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
// Select a toast and instantiate it
const toast = Aksara.toast("#savedToast", {
  delay: 5000, // duration in milliseconds before auto-dismissal
  autohide: true
});

toast.show();
```

### Methods

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Method</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>toast.show()</code></td><td>Adds <code>.toast-show</code> and (re)starts the hide timer.</td></tr>
      <tr><td class="text-nowrap"><code>toast.hide()</code></td><td>Removes <code>.toast-show</code> and clears the timer.</td></tr>
      <tr><td class="text-nowrap"><code>toast.updateOptions(options)</code></td><td>Merges new options; they apply from the next <code>show()</code>.</td></tr>
      <tr><td class="text-nowrap"><code>toast.destroy()</code></td><td>Clears the timer, removes listeners and the stored instance.</td></tr>
    </tbody>
  </table>
</div>
::end

The runtime sets `role="status"` and `aria-live="polite"` on toasts that do not have them. Use `role="alert"` for urgent messages.

### Events

Events bubble from the `.toast` element; `event.detail.instance` holds the instance.

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Event</th><th>Fired when</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>aksara:toast:show</code></td><td>The toast was shown.</td></tr>
      <tr><td class="text-nowrap"><code>aksara:toast:hide</code></td><td>The toast was hidden.</td></tr>
      <tr><td class="text-nowrap"><code>aksara:toast:destroy</code></td><td>The instance was destroyed.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
const alertBox = document.querySelector("#savedToast");

alertBox.addEventListener("aksara:toast:hide", (event) => {
  console.log("Toast hidden", event.detail.instance);
});
```

### Aksara.notify Options

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Option</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>icon</code></td><td class="text-nowrap"><code>"mdi-information-outline"</code></td><td>MDI icon class shown before the message.</td></tr>
      <tr><td class="text-nowrap"><code>duration</code></td><td class="text-nowrap"><code>2500</code></td><td>Milliseconds before the pill fades out.</td></tr>
    </tbody>
  </table>
</div>
::end

### String Components

`Toast({ id, title, time, body, variant, delay, autohide, dismissible })` renders a toast with a header and close button. `icon` (an MDI name) or `iconHtml` adds a header icon, `bodyClassName` styles `.toast-body`, `children` appends raw HTML after the body (omit `body` to skip it), and `role: "status"` makes the toast polite instead of assertive; `ToastContainer({ placement, children })` renders the stack (`placement` defaults to `top-end`).

```js
import { Toast, ToastContainer } from "@abydahana/aksara-ui/components";

ToastContainer({
  placement: "bottom-end",
  children: Toast({ id: "savedToast", title: "Saved", time: "Just now", body: "Profile updated.", variant: "success" })
});
```
