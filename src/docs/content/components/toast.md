# Toasts Notifications

Toasts are modern, lightweight feedback overlay boxes that slide or fade onto the screen to convey short, non-disruptive notifications, and automatically disappear after a brief delay.

---

## Interactive Toast Showcase

Explore Aksara UI's fully declarative toast triggers. Click any button below to launch a toast. The first row demonstrates semantic color variations (stacked in the upper-right), and the second row triggers dedicated toasts at each of the six layout alignment points on your screen:

::html
<div class="docs-preview">
  <div class="mb-5">
    <h4 class="mt-0 mb-3 font-700 text-sm">Semantic Colors (Stacked Top-End)</h4>
    <div class="docs-row flex-wrap">
      <button class="btn btn-success hstack gap-2" data-toast="#toastSuccess">
        <span class="mdi mdi-check-circle-outline mdi-18px"></span> Success Toast
      </button>
      <button class="btn btn-primary hstack gap-2" data-toast="#toastPrimary">
        <span class="mdi mdi-flash-outline mdi-18px"></span> Primary Toast
      </button>
      <button class="btn btn-danger hstack gap-2" data-toast="#toastDanger">
        <span class="mdi mdi-alert-circle-outline mdi-18px"></span> Danger Toast
      </button>
      <button class="btn btn-info hstack gap-2" data-toast="#toastInfo">
        <span class="mdi mdi-information-outline mdi-18px"></span> Info Toast
      </button>
    </div>
  </div>

  <div>
    <h4 class="mt-0 mb-3 font-700 text-sm">Viewport Placements</h4>
    <div class="docs-row flex-wrap">
      <button class="btn btn-outline-primary hstack gap-2" data-toast="#toastTopStart">
        <span class="mdi mdi-arrow-top-left mdi-18px"></span> Top Start
      </button>
      <button class="btn btn-outline-primary hstack gap-2" data-toast="#toastTopCenter">
        <span class="mdi mdi-arrow-up-bold-outline mdi-18px"></span> Top Center
      </button>
      <button class="btn btn-outline-primary hstack gap-2" data-toast="#toastTopEnd">
        <span class="mdi mdi-arrow-top-right mdi-18px"></span> Top End
      </button>
      <button class="btn btn-outline-primary hstack gap-2" data-toast="#toastBottomStart">
        <span class="mdi mdi-arrow-bottom-left mdi-18px"></span> Bottom Start
      </button>
      <button class="btn btn-outline-primary hstack gap-2" data-toast="#toastBottomCenter">
        <span class="mdi mdi-arrow-down-bold-outline mdi-18px"></span> Bottom Center
      </button>
      <button class="btn btn-outline-primary hstack gap-2" data-toast="#toastBottomEnd">
        <span class="mdi mdi-arrow-bottom-right mdi-18px"></span> Bottom End
      </button>
    </div>
  </div>
</div>

<!-- Absolute stacks containing corresponding toast IDs -->

<!-- 1. Default Top-End Stack for Color Previews -->
<div class="toast-stack toast-top-end" style="top: 80px; z-index: 1500; pointer-events: none;">
  <!-- Success -->
  <div id="toastSuccess" class="toast toast-success" data-toast-delay="3000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-check-circle mdi-18px me-2"></span>
      <strong>Changes Saved</strong>
      <span class="text-subtle text-xs ms-auto">Just now</span>
    </div>
    <div class="toast-body">Your preferences have been synchronized successfully.</div>
  </div>
  <!-- Primary -->
  <div id="toastPrimary" class="toast toast-primary" data-toast-delay="3000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-flash mdi-18px me-2"></span>
      <strong>Connection Active</strong>
      <span class="text-subtle text-xs ms-auto">1s ago</span>
    </div>
    <div class="toast-body">Successfully established database handshake.</div>
  </div>
  <!-- Danger -->
  <div id="toastDanger" class="toast toast-danger" data-toast-delay="4000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-alert-circle mdi-18px me-2"></span>
      <strong>Disk Space Warning</strong>
      <span class="text-subtle text-xs ms-auto">5s ago</span>
    </div>
    <div class="toast-body">System storage limit is at 94%. Please clear logs.</div>
  </div>
  <!-- Info -->
  <div id="toastInfo" class="toast toast-info" data-toast-delay="3000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-information mdi-18px me-2"></span>
      <strong>Backup Scheduled</strong>
      <span class="text-subtle text-xs ms-auto">Just now</span>
    </div>
    <div class="toast-body">Automated backup will proceed tonight at 02:00 AM.</div>
  </div>
</div>

<!-- 2. Top-Start Stack -->
<div class="toast-stack toast-top-start" style="top: 80px; z-index: 1500; pointer-events: none;">
  <div id="toastTopStart" class="toast toast-primary" data-toast-delay="3000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-arrow-top-left mdi-18px me-2"></span>
      <strong>Top Start Placement</strong>
      <span class="text-subtle text-xs ms-auto">Just now</span>
    </div>
    <div class="toast-body">Aligned to the upper-left (or upper-right in RTL).</div>
  </div>
</div>

<!-- 3. Top-Center Stack -->
<div class="toast-stack toast-top-center" style="top: 80px; z-index: 1500; pointer-events: none;">
  <div id="toastTopCenter" class="toast toast-info" data-toast-delay="3000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-arrow-up-bold-outline mdi-18px me-2"></span>
      <strong>Top Center Placement</strong>
      <span class="text-subtle text-xs ms-auto">Just now</span>
    </div>
    <div class="toast-body">Centered horizontally along the upper viewport edge.</div>
  </div>
</div>

<!-- 4. Top-End Stack for placement button -->
<div class="toast-stack toast-top-end" style="top: 80px; z-index: 1500; pointer-events: none;">
  <div id="toastTopEnd" class="toast toast-success" data-toast-delay="3000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-arrow-top-right mdi-18px me-2"></span>
      <strong>Top End Placement</strong>
      <span class="text-subtle text-xs ms-auto">Just now</span>
    </div>
    <div class="toast-body">Aligned to the upper-right (or upper-left in RTL).</div>
  </div>
</div>

<!-- 5. Bottom-Start Stack -->
<div class="toast-stack toast-bottom-start" style="z-index: 1500; pointer-events: none;">
  <div id="toastBottomStart" class="toast toast-primary" data-toast-delay="3000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-arrow-bottom-left mdi-18px me-2"></span>
      <strong>Bottom Start Placement</strong>
      <span class="text-subtle text-xs ms-auto">Just now</span>
    </div>
    <div class="toast-body">Aligned to the lower-left corner of the screen.</div>
  </div>
</div>

<!-- 6. Bottom-Center Stack -->
<div class="toast-stack toast-bottom-center" style="z-index: 1500; pointer-events: none;">
  <div id="toastBottomCenter" class="toast toast-info" data-toast-delay="3000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-arrow-down-bold-outline mdi-18px me-2"></span>
      <strong>Bottom Center Placement</strong>
      <span class="text-subtle text-xs ms-auto">Just now</span>
    </div>
    <div class="toast-body">Centered horizontally along the lower viewport edge.</div>
  </div>
</div>

<!-- 7. Bottom-End Stack -->
<div class="toast-stack toast-bottom-end" style="z-index: 1500; pointer-events: none;">
  <div id="toastBottomEnd" class="toast toast-danger" data-toast-delay="3000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-arrow-bottom-right mdi-18px me-2"></span>
      <strong>Bottom End Placement</strong>
      <span class="text-subtle text-xs ms-auto">Just now</span>
    </div>
    <div class="toast-body">Aligned to the lower-right corner of the screen.</div>
  </div>
</div>
::end

```html
<!-- Declarative Placement Buttons -->
<button class="btn btn-outline-primary" data-toast="#toastTopStart">Top Start</button>
<button class="btn btn-outline-primary" data-toast="#toastTopCenter">Top Center</button>

<!-- 1. Top Start Stack Layout -->
<div class="toast-stack toast-top-start">
  <div id="toastTopStart" class="toast toast-primary" data-toast-delay="3000">
    <div class="toast-header">
      <span class="mdi mdi-arrow-top-left me-2"></span>
      <strong>Top Start Alert</strong>
    </div>
    <div class="toast-body">Aligned to flow-start (top left).</div>
  </div>
</div>

<!-- 2. Top Center Stack Layout -->
<div class="toast-stack toast-top-center">
  <div id="toastTopCenter" class="toast toast-info" data-toast-delay="3000">
    <div class="toast-header">
      <span class="mdi mdi-arrow-up-bold-outline me-2"></span>
      <strong>Top Center Alert</strong>
    </div>
    <div class="toast-body">Aligned horizontally at the top edge.</div>
  </div>
</div>
```

---

## Viewport Position Classes

Place `.toast-stack` anywhere on the screen by applying a positional class. Positional classes set the vertical/horizontal logical boundaries, reset opposing properties (e.g. `inset-block-end: auto`), and apply proper horizontal centering matrices:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 30%;">Class Name</th>
        <th style="width: 35%;">Placement Alignment</th>
        <th style="width: 35%;">RTL Behavior Mappings</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>toast-top-start</code></td>
        <td>Upper Left corner of the viewport.</td>
        <td>Mirrors to upper right in RTL.</td>
      </tr>
      <tr>
        <td><code>toast-top-end</code></td>
        <td>Upper Right corner of the viewport.</td>
        <td>Mirrors to upper left in RTL.</td>
      </tr>
      <tr>
        <td><code>toast-top-center</code></td>
        <td>Upper Center edge of the viewport.</td>
        <td>Remains centered horizontally.</td>
      </tr>
      <tr>
        <td><code>toast-bottom-start</code></td>
        <td>Lower Left corner of the viewport.</td>
        <td>Mirrors to lower right in RTL.</td>
      </tr>
      <tr>
        <td><code>toast-bottom-end</code></td>
        <td>Lower Right corner (Default position).</td>
        <td>Mirrors to lower left in RTL.</td>
      </tr>
      <tr>
        <td><code>toast-bottom-center</code></td>
        <td>Lower Center edge of the viewport.</td>
        <td>Remains centered horizontally.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Semantic Color Classes

Aksara UI features a clean, highly refined flat/soft semantic styling system for colored toasts. Instead of heavy solid colors that overwhelm UI details, semantic toast classes add a **4px left-border (start-border) indicator stripe**, a solid composite opaque backdrop fill, and a matched color header title:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">Color Class</th>
        <th style="width: 35%;">Accent Theme</th>
        <th style="width: 40%;">Recommended MDI Icon</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>toast-primary</code></td>
        <td>Soft primary backdrop, 4px primary stripe.</td>
        <td><code>&lt;span class="mdi mdi-flash"&gt;&lt;/span&gt;</code></td>
      </tr>
      <tr>
        <td><code>toast-success</code></td>
        <td>Soft success green backdrop, 4px success stripe.</td>
        <td><code>&lt;span class="mdi mdi-check-circle"&gt;&lt;/span&gt;</code></td>
      </tr>
      <tr>
        <td><code>toast-danger</code></td>
        <td>Soft danger red backdrop, 4px danger stripe.</td>
        <td><code>&lt;span class="mdi mdi-alert-circle"&gt;&lt;/span&gt;</code></td>
      </tr>
      <tr>
        <td><code>toast-warning</code></td>
        <td>Soft warning orange backdrop, 4px warning stripe.</td>
        <td><code>&lt;span class="mdi mdi-alert"&gt;&lt;/span&gt;</code></td>
      </tr>
      <tr>
        <td><code>toast-info</code></td>
        <td>Soft info cyan backdrop, 4px info stripe.</td>
        <td><code>&lt;span class="mdi mdi-information"&gt;&lt;/span&gt;</code></td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Declarative HTML Data API

Launch toasts declaration-free without writing script lines:

- **`data-toast="#toastId"`**: Place this attribute on any trigger button. Clicking launches the target toast container.
- **`data-toast-delay="[ms]"`**: Place this attribute on the `.toast` card to adjust the visible duration in milliseconds (default is `5000` ms).

---

## Programmatic JavaScript API

Instantiate or control toast notifications programmatically inside your scripts.

### Creating an Instance

```js
// Select toast container and instantiate
const toast = Aksara.toast("#savedToast", {
  delay: 5000 // duration in milliseconds before auto-dismissal
});
```

### Methods

- **`toast.show()`**: Slides the toast card into view and begins the auto-dismiss timer. Returns instance.
- **`toast.hide()`**: Instantly fades out and collapses the toast panel. Returns instance.
- **`toast.destroy()`**: Cancels active timers, removes DOM transitions, and deletes registry references.

---

## Custom Lifecycle Events

Hook callbacks into custom bubbled events:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 35%;">Custom Event String</th>
        <th style="width: 65%;">Trigger Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>aksara:toast:show</code></td>
        <td>Dispatched instantly when the toast is shown. Access instance in <code>event.detail.instance</code>.</td>
      </tr>
      <tr>
        <td><code>aksara:toast:hide</code></td>
        <td>Dispatched instantly when the toast starts fading out or auto-dismissing. Access instance in <code>event.detail.instance</code>.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

### Listening Example

```js
const alertBox = document.querySelector("#savedToast");

alertBox.addEventListener("aksara:toast:hide", (event) => {
  console.log("Toast completed visibility loop and is hiding!", event.detail.instance);
});
```
