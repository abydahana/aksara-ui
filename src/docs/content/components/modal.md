# Modal Dialogs

Modals are dialogs layered over the page with a blurred backdrop. They trap keyboard focus, close on Escape or a backdrop click, lock page scrolling, and can be dragged by their header. Open one with `data-modal="#id"` and close it with `data-modal-close`.

---

## Interactive Modal Showcase

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-primary" type="button" data-modal="#standardModalDemo">Launch modal</button>
  </div>

  <div id="standardModalDemo" class="modal" tabindex="-1" aria-labelledby="standardModalTitle">
    <div class="modal-dialog">
      <div class="modal-header">
        <h4 id="standardModalTitle" class="modal-title">Invite teammates</h4>
        <button class="modal-close" type="button" data-modal-close aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="mt-0">New members get access to every project in this workspace. Drag this dialog by its header, press Tab to cycle focus, or press Escape to close.</p>
        <div class="form-group mb-0">
          <label class="form-label" for="modalInputEmail">Email address</label>
          <input id="modalInputEmail" type="email" class="form-control" placeholder="name@example.com">
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" type="button" data-modal-close>Cancel</button>
        <button class="btn btn-primary" type="button" data-modal-close>Send invite</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<button class="btn btn-primary" type="button" data-modal="#inviteModal">Launch modal</button>

<div id="inviteModal" class="modal" tabindex="-1" aria-labelledby="inviteModalTitle">
  <div class="modal-dialog">
    <div class="modal-header">
      <h4 id="inviteModalTitle" class="modal-title">Invite teammates</h4>
      <button class="modal-close" type="button" data-modal-close aria-label="Close"></button>
    </div>
    <div class="modal-body">...</div>
    <div class="modal-footer">
      <button class="btn btn-ghost" type="button" data-modal-close>Cancel</button>
      <button class="btn btn-primary" type="button">Send invite</button>
    </div>
  </div>
</div>
```

```js components
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@abydahana/aksara-ui/components";

Button({ label: "Launch modal", attributes: { "data-modal": "#inviteModal" } });

Modal({
  id: "inviteModal",
  attributes: { "aria-labelledby": "inviteModalTitle" },
  children: [
    ModalHeader({ title: "Invite teammates", titleId: "inviteModalTitle", level: "h4" }),
    ModalBody({ children: "..." }),
    ModalFooter({
      children:
        Button({ label: "Cancel", ghost: true, attributes: { "data-modal-close": true } }) +
        Button({ label: "Send invite" })
    })
  ].join("")
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
      <tr><td class="text-nowrap"><code>modal</code></td><td>Fixed full-screen wrapper with the blurred backdrop. Hidden until the runtime adds <code>.modal-open</code>.</td></tr>
      <tr><td class="text-nowrap"><code>modal-dialog</code></td><td>The panel: raised surface, large radius, shadow. A three-row grid for header, body and footer.</td></tr>
      <tr><td class="text-nowrap"><code>modal-content</code></td><td>Optional inner wrapper (used by the <code>Modal</code> string component). The dialog switches to a column layout around it.</td></tr>
      <tr><td class="text-nowrap"><code>modal-header</code></td><td>Title row and drag handle.</td></tr>
      <tr><td class="text-nowrap"><code>modal-title</code></td><td>Heading style for the title.</td></tr>
      <tr><td class="text-nowrap"><code>modal-body</code></td><td>Muted body text. Scrolls on its own when the dialog reaches the viewport height.</td></tr>
      <tr><td class="text-nowrap"><code>modal-footer</code></td><td>Right-aligned action row that blends into the body; a hairline divider appears only in scrollable dialogs.</td></tr>
      <tr><td class="text-nowrap"><code>modal-close</code></td><td>Round icon button that draws its own X. Any children are hidden, so leave it empty and add an <code>aria-label</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

The runtime sets `role="dialog"`, `aria-modal="true"` and `aria-hidden` on `.modal`. Point `aria-labelledby` at the title.

---

## Sizes

Add a size class to `.modal-dialog`. Widths are caps: every dialog shrinks to the viewport on small screens.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-soft-primary" type="button" data-modal="#sizeModalSm">Small</button>
    <button class="btn btn-soft-primary" type="button" data-modal="#sizeModalMd">Default</button>
    <button class="btn btn-soft-primary" type="button" data-modal="#sizeModalLg">Large</button>
    <button class="btn btn-soft-primary" type="button" data-modal="#sizeModalXl">Extra large</button>
  </div>

  <div id="sizeModalSm" class="modal" tabindex="-1" aria-labelledby="sizeModalSmTitle">
    <div class="modal-dialog modal-sm">
      <div class="modal-header"><h4 id="sizeModalSmTitle" class="modal-title">modal-sm</h4><button class="modal-close" type="button" data-modal-close aria-label="Close"></button></div>
      <div class="modal-body"><p class="m-0">24rem wide. Good for short prompts and alerts.</p></div>
    </div>
  </div>
  <div id="sizeModalMd" class="modal" tabindex="-1" aria-labelledby="sizeModalMdTitle">
    <div class="modal-dialog">
      <div class="modal-header"><h4 id="sizeModalMdTitle" class="modal-title">Default</h4><button class="modal-close" type="button" data-modal-close aria-label="Close"></button></div>
      <div class="modal-body"><p class="m-0">32rem wide. Good for forms and most dialogs.</p></div>
    </div>
  </div>
  <div id="sizeModalLg" class="modal" tabindex="-1" aria-labelledby="sizeModalLgTitle">
    <div class="modal-dialog modal-lg">
      <div class="modal-header"><h4 id="sizeModalLgTitle" class="modal-title">modal-lg</h4><button class="modal-close" type="button" data-modal-close aria-label="Close"></button></div>
      <div class="modal-body"><p class="m-0">48rem wide. Good for two-column forms, previews and lists.</p></div>
    </div>
  </div>
  <div id="sizeModalXl" class="modal" tabindex="-1" aria-labelledby="sizeModalXlTitle">
    <div class="modal-dialog modal-xl">
      <div class="modal-header"><h4 id="sizeModalXlTitle" class="modal-title">modal-xl</h4><button class="modal-close" type="button" data-modal-close aria-label="Close"></button></div>
      <div class="modal-body"><p class="m-0">72rem wide. Good for tables, charts and editors.</p></div>
    </div>
  </div>
</div>
::end

```html
<div class="modal-dialog modal-sm">...</div>
<div class="modal-dialog">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-xl">...</div>
```

```js components
import { Modal } from "@abydahana/aksara-ui/components";

Modal({ id: "smallModal", size: "sm", children: "..." });
Modal({ id: "defaultModal", children: "..." });
Modal({ id: "largeModal", size: "lg", children: "..." });
Modal({ id: "xlModal", size: "xl", children: "..." });
```

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Class</th><th>Width</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>modal-sm</code></td><td><code>24rem</code> (384px)</td></tr>
      <tr><td>none</td><td><code>32rem</code> (512px)</td></tr>
      <tr><td class="text-nowrap"><code>modal-lg</code></td><td><code>48rem</code> (768px)</td></tr>
      <tr><td class="text-nowrap"><code>modal-xl</code></td><td><code>72rem</code> (1152px)</td></tr>
      <tr><td class="text-nowrap"><code>modal-fullscreen</code></td><td>Fills the viewport with square corners.</td></tr>
      <tr><td class="text-nowrap"><code>modal-fullscreen-{bp}-down</code></td><td>Fullscreen below <code>sm</code> (576px), <code>md</code> (768px), <code>lg</code> (992px) or <code>xl</code> (1200px).</td></tr>
    </tbody>
  </table>
</div>
::end

You can also set any width through the `--aksara-modal-width` custom property, for example `style="--aksara-modal-width: 40rem"`.

---

## Fullscreen

`modal-fullscreen` always fills the viewport. The responsive `modal-fullscreen-{sm,md,lg,xl}-down` classes only go fullscreen below the breakpoint, which suits forms that need room on phones but should stay a dialog on desktop.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary" type="button" data-modal="#fullscreenModal">Fullscreen</button>
    <button class="btn btn-outline-primary" type="button" data-modal="#fullscreenMdModal">Fullscreen below md</button>
  </div>

  <div id="fullscreenModal" class="modal" tabindex="-1" aria-labelledby="fullscreenModalTitle">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-header">
        <h4 id="fullscreenModalTitle" class="modal-title hstack gap-2"><span class="mdi mdi-file-document-edit-outline"></span> Untitled document</h4>
        <div class="hstack gap-2">
          <button class="btn btn-ghost btn-sm" type="button" data-modal-close>Discard</button>
          <button class="btn btn-primary btn-sm" type="button" data-modal-close>Save</button>
          <button class="modal-close" type="button" data-modal-close aria-label="Close"></button>
        </div>
      </div>
      <div class="modal-body">
        <div class="max-w-[720px] mx-auto">
          <input class="form-control form-control-lg mb-3" type="text" value="Quarterly planning notes" aria-label="Title">
          <textarea class="form-control" rows="12" aria-label="Body">Goals for Q3:&#10;1. Ship the new onboarding flow&#10;2. Reduce time-to-first-value by 30%&#10;3. Migrate billing to the new provider</textarea>
        </div>
      </div>
    </div>
  </div>

  <div id="fullscreenMdModal" class="modal" tabindex="-1" aria-labelledby="fullscreenMdModalTitle">
    <div class="modal-dialog modal-lg modal-fullscreen-md-down">
      <div class="modal-header"><h4 id="fullscreenMdModalTitle" class="modal-title">Fullscreen below 768px</h4><button class="modal-close" type="button" data-modal-close aria-label="Close"></button></div>
      <div class="modal-body"><p class="m-0">On a wide screen this is a <code>modal-lg</code> dialog. Narrow the window below 768px and it fills the viewport.</p></div>
      <div class="modal-footer"><button class="btn btn-primary" type="button" data-modal-close>Got it</button></div>
    </div>
  </div>
</div>
::end

```html
<div class="modal-dialog modal-fullscreen">...</div>

<!-- A large dialog that becomes fullscreen on phones and small tablets -->
<div class="modal-dialog modal-lg modal-fullscreen-md-down">...</div>
```

```js components
import { Modal } from "@abydahana/aksara-ui/components";

Modal({ id: "fullscreenModal", size: "fullscreen", children: "..." });

// A large dialog that becomes fullscreen on phones and small tablets
Modal({ id: "responsiveModal", size: "lg", dialogClassName: "modal-fullscreen-md-down", children: "..." });
```

---

## Scrollable Body

When content is taller than the viewport, the dialog stops at the viewport height and `.modal-body` scrolls while the header and footer stay in place. `modal-dialog-scrollable` states that intent explicitly.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary" type="button" data-modal="#scrollableModal">Terms of service</button>
  </div>

  <div id="scrollableModal" class="modal" tabindex="-1" aria-labelledby="scrollableModalTitle">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-header"><h4 id="scrollableModalTitle" class="modal-title">Terms of service</h4><button class="modal-close" type="button" data-modal-close aria-label="Close"></button></div>
      <div class="modal-body">
        <h5 class="mt-0 text-body">1. Accounts</h5>
        <p>You are responsible for the activity on your account and for keeping your password secure. Notify us right away about any unauthorized use.</p>
        <h5 class="text-body">2. Acceptable use</h5>
        <p>Do not misuse the service: no interfering with its normal operation, no access through methods other than the interfaces we provide, and no attempts to bypass usage limits.</p>
        <h5 class="text-body">3. Your content</h5>
        <p>You keep ownership of what you upload. You grant us the license needed to host, back up and display it to the people you share it with.</p>
        <h5 class="text-body">4. Billing</h5>
        <p>Paid plans renew automatically at the end of each billing period unless cancelled. Fees are non-refundable except where required by law.</p>
        <h5 class="text-body">5. Termination</h5>
        <p>You can stop using the service at any time. We may suspend accounts that break these terms after giving reasonable notice.</p>
        <h5 class="text-body">6. Liability</h5>
        <p>The service is provided as is. To the extent permitted by law we are not liable for indirect or consequential losses.</p>
        <h5 class="text-body">7. Changes</h5>
        <p class="mb-0">We will announce material changes to these terms at least 30 days before they take effect.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" type="button" data-modal-close>Decline</button>
        <button class="btn btn-primary" type="button" data-modal-close>Accept</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="modal-dialog modal-dialog-scrollable">
  <div class="modal-header">...</div>
  <div class="modal-body"><!-- long content scrolls here --></div>
  <div class="modal-footer">...</div>
</div>
```

```js components
import { Modal, ModalBody, ModalFooter, ModalHeader } from "@abydahana/aksara-ui/components";

Modal({
  id: "termsModal",
  scrollable: true,
  children:
    ModalHeader({ children: "..." }) +
    ModalBody({ children: "<!-- long content scrolls here -->" }) +
    ModalFooter({ children: "..." })
});
```

---

## Alert Dialog (Confirm and Delete)

`modal-alert` is a compact alert dialog in the iOS / macOS style: a narrow frosted card, an icon tile, centered copy, and full-width text actions split by hairlines. Color an action with `modal-alert-action-{color}` (`danger` for destructive choices, any color for the default action). Use `data-modal-backdrop="static"` so a stray click outside cannot dismiss a destructive choice. `Aksara.confirm()` and `Aksara.alert()` render this same dialog.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-soft-danger hstack gap-2" type="button" data-modal="#deleteModal"><span class="mdi mdi-trash-can-outline"></span> Delete project</button>
    <button class="btn btn-soft-success hstack gap-2" type="button" data-modal="#publishModal"><span class="mdi mdi-rocket-launch-outline"></span> Publish</button>
    <button class="btn btn-plain hstack gap-2" type="button" data-modal="#unsavedModal"><span class="mdi mdi-content-save-alert-outline"></span> Three actions</button>
  </div>

  <div id="deleteModal" class="modal modal-alert" tabindex="-1" role="alertdialog" aria-labelledby="deleteModalTitle" data-modal-backdrop="static" data-modal-draggable="false">
    <div class="modal-dialog">
      <div class="modal-alert-body">
        <span class="modal-alert-icon text-danger"><span class="mdi mdi-trash-can-outline"></span></span>
        <h4 id="deleteModalTitle" class="modal-alert-title">Delete “Website redesign”?</h4>
        <p class="modal-alert-message">This permanently removes the project, its 48 files and all comments. This cannot be undone.</p>
      </div>
      <div class="modal-alert-actions">
        <button class="modal-alert-action" type="button" data-modal-close>Cancel</button>
        <button class="modal-alert-action modal-alert-action-danger" type="button" data-modal-close>Delete</button>
      </div>
    </div>
  </div>

  <div id="publishModal" class="modal modal-alert" tabindex="-1" role="alertdialog" aria-labelledby="publishModalTitle" data-modal-draggable="false">
    <div class="modal-dialog">
      <div class="modal-alert-body">
        <span class="modal-alert-icon text-success"><span class="mdi mdi-rocket-launch-outline"></span></span>
        <h4 id="publishModalTitle" class="modal-alert-title">Publish to production?</h4>
        <p class="modal-alert-message">Version 2.4.0 will go live for all 12,480 users.</p>
      </div>
      <div class="modal-alert-actions">
        <button class="modal-alert-action" type="button" data-modal-close>Not now</button>
        <button class="modal-alert-action modal-alert-action-success" type="button" data-modal-close>Publish</button>
      </div>
    </div>
  </div>

  <div id="unsavedModal" class="modal modal-alert" tabindex="-1" role="alertdialog" aria-labelledby="unsavedModalTitle" data-modal-draggable="false">
    <div class="modal-dialog">
      <div class="modal-alert-body">
        <span class="modal-alert-icon text-warning"><span class="mdi mdi-content-save-alert-outline"></span></span>
        <h4 id="unsavedModalTitle" class="modal-alert-title">Save changes to “Q4 plan”?</h4>
        <p class="modal-alert-message">Your changes will be lost if you don't save them.</p>
      </div>
      <div class="modal-alert-actions modal-alert-actions-stacked">
        <button class="modal-alert-action modal-alert-action-primary" type="button" data-modal-close>Save</button>
        <button class="modal-alert-action modal-alert-action-danger" type="button" data-modal-close>Don't save</button>
        <button class="modal-alert-action" type="button" data-modal-close>Cancel</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div
  id="deleteModal"
  class="modal modal-alert"
  tabindex="-1"
  role="alertdialog"
  aria-labelledby="deleteTitle"
  data-modal-backdrop="static"
>
  <div class="modal-dialog">
    <div class="modal-alert-body">
      <span class="modal-alert-icon text-danger"><span class="mdi mdi-trash-can-outline"></span></span>
      <h4 id="deleteTitle" class="modal-alert-title">Delete “Website redesign”?</h4>
      <p class="modal-alert-message">This permanently removes the project. This cannot be undone.</p>
    </div>
    <div class="modal-alert-actions">
      <button class="modal-alert-action" type="button" data-modal-close>Cancel</button>
      <button class="modal-alert-action modal-alert-action-danger" type="button">Delete</button>
    </div>
  </div>
</div>

<!-- Three or more actions: stack them -->
<div class="modal-alert-actions modal-alert-actions-stacked">...</div>
```

```js components
import { Modal } from "@abydahana/aksara-ui/components";

Modal({
  id: "deleteModal",
  className: "modal-alert",
  staticBackdrop: true,
  attributes: { role: "alertdialog", "aria-labelledby": "deleteTitle" },
  children: `
    <div class="modal-alert-body">
      <span class="modal-alert-icon text-danger"><span class="mdi mdi-trash-can-outline"></span></span>
      <h4 id="deleteTitle" class="modal-alert-title">Delete “Website redesign”?</h4>
      <p class="modal-alert-message">This permanently removes the project. This cannot be undone.</p>
    </div>
    <div class="modal-alert-actions">
      <button class="modal-alert-action" type="button" data-modal-close>Cancel</button>
      <button class="modal-alert-action modal-alert-action-danger" type="button">Delete</button>
    </div>
  `
});

// Three or more actions: add modal-alert-actions-stacked to the actions row.
```

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Class</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><code>modal-alert</code></td><td>On <code>.modal</code>: narrow frosted alert dialog with a pop-in animation.</td></tr>
      <tr><td><code>modal-alert-body</code>, <code>modal-alert-icon</code>, <code>modal-alert-title</code>, <code>modal-alert-message</code></td><td>Centered content; the icon tile tints from its <code>text-*</code> color.</td></tr>
      <tr><td><code>modal-alert-actions</code>, <code>modal-alert-actions-stacked</code></td><td>Side-by-side or stacked full-width actions.</td></tr>
      <tr><td><code>modal-alert-action</code>, <code>modal-alert-action-{color}</code></td><td>Text action; colored ones are bold.</td></tr>
    </tbody>
  </table>
</div>
::end

### Built-in Confirm and Alert

`Aksara.confirm()` and `Aksara.alert()` build a small dialog on the fly and remove it when it closes. `confirm` resolves to `true` or `false`; `alert` resolves once dismissed.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-danger" type="button" onclick="Aksara.confirm({ title: 'Remove member?', message: 'Alex will lose access to all projects.', confirmLabel: 'Remove' }).then((ok) => Aksara.notify(ok ? 'Member removed' : 'Cancelled', { icon: ok ? 'mdi-check' : 'mdi-close' }))">Aksara.confirm()</button>
    <button class="btn btn-warning" type="button" onclick="Aksara.confirm({ title: 'Leave without saving?', message: 'Your changes will be lost.', tone: 'warning', confirmLabel: 'Leave', cancelLabel: 'Stay' })">Warning tone</button>
    <button class="btn btn-outline-primary" type="button" onclick="Aksara.alert({ title: 'Export ready', message: 'Your CSV has been emailed to you.', tone: 'success', icon: 'mdi-check-circle-outline' })">Aksara.alert()</button>
  </div>
</div>
::end

```js
const ok = await Aksara.confirm({
  title: "Remove member?",
  message: "Alex will lose access to all projects.",
  tone: "danger", // danger (default), warning, primary, info, success
  confirmLabel: "Remove", // default "Confirm"
  cancelLabel: "Cancel", // default "Cancel"
  icon: "mdi-account-remove-outline" // optional MDI class
});

if (ok) removeMember();

await Aksara.alert({
  title: "Export ready",
  message: "Your CSV has been emailed to you.",
  tone: "success", // primary (default), danger, warning, info, success
  buttonLabel: "OK" // default "OK"
});
```

---

## Form Modal

Put a `<form>` in the body and wire the submit button with the `form` attribute so it can sit in the footer.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-primary hstack gap-2" type="button" data-modal="#formModal"><span class="mdi mdi-account-plus-outline"></span> New user</button>
  </div>

  <div id="formModal" class="modal" tabindex="-1" aria-labelledby="formModalTitle">
    <div class="modal-dialog modal-lg">
      <div class="modal-header">
        <div>
          <h4 id="formModalTitle" class="modal-title">Create user</h4>
          <p class="m-0 text-sm text-subtle">They will receive an email to set their password.</p>
        </div>
        <button class="modal-close" type="button" data-modal-close aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="formModalForm" class="row gap-3" onsubmit="event.preventDefault(); Aksara.modal('#formModal').hide(); Aksara.notify('User created', { icon: 'mdi-check' });">
          <div class="col-12 md:col-6">
            <label class="form-label" for="formModalFirst">First name</label>
            <input id="formModalFirst" class="form-control" type="text" placeholder="Maya" required>
          </div>
          <div class="col-12 md:col-6">
            <label class="form-label" for="formModalLast">Last name</label>
            <input id="formModalLast" class="form-control" type="text" placeholder="Chen">
          </div>
          <div class="col-12 md:col-6">
            <label class="form-label" for="formModalEmail">Email</label>
            <input id="formModalEmail" class="form-control" type="email" placeholder="maya.chen@example.com" required>
          </div>
          <div class="col-12 md:col-6">
            <label class="form-label" for="formModalRole">Role</label>
            <select id="formModalRole" class="form-select">
              <option>Viewer</option>
              <option selected>Editor</option>
              <option>Admin</option>
            </select>
          </div>
          <div class="col-12">
            <label class="form-label" for="formModalNote">Welcome note</label>
            <textarea id="formModalNote" class="form-control" rows="3" placeholder="Optional"></textarea>
          </div>
          <div class="col-12">
            <label class="form-switch"><input type="checkbox" role="switch" checked> <span class="form-check-label">Require two-factor authentication</span></label>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" type="button" data-modal-close>Cancel</button>
        <button class="btn btn-primary" type="submit" form="formModalForm">Create user</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div id="userModal" class="modal" tabindex="-1" aria-labelledby="userModalTitle">
  <div class="modal-dialog modal-lg">
    <div class="modal-header">
      <h4 id="userModalTitle" class="modal-title">Create user</h4>
      <button class="modal-close" type="button" data-modal-close aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form id="userForm" class="row gap-3">
        <div class="col-12 md:col-6">
          <label class="form-label" for="firstName">First name</label>
          <input id="firstName" class="form-control" type="text" required />
        </div>
        <div class="col-12 md:col-6">
          <label class="form-label" for="role">Role</label>
          <select id="role" class="form-select">
            <option>Viewer</option>
            <option>Editor</option>
          </select>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" type="button" data-modal-close>Cancel</button>
      <button class="btn btn-primary" type="submit" form="userForm">Create user</button>
    </div>
  </div>
</div>
```

```js components
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@abydahana/aksara-ui/components";

Modal({
  id: "userModal",
  size: "lg",
  attributes: { "aria-labelledby": "userModalTitle" },
  children: [
    ModalHeader({ title: "Create user", titleId: "userModalTitle", level: "h4" }),
    ModalBody({
      children: `<form id="userForm" class="row gap-3">
        <div class="col-12 md:col-6">
          <label class="form-label" for="firstName">First name</label>
          <input id="firstName" class="form-control" type="text" required />
        </div>
        <div class="col-12 md:col-6">
          <label class="form-label" for="role">Role</label>
          <select id="role" class="form-select">
            <option>Viewer</option>
            <option>Editor</option>
          </select>
        </div>
      </form>`
    }),
    ModalFooter({
      children:
        Button({ label: "Cancel", ghost: true, attributes: { "data-modal-close": true } }) +
        Button({ label: "Create user", type: "submit", attributes: { form: "userForm" } })
    })
  ].join("")
});
```

---

## Media Preview

Remove the body padding with `p-0` for an image lightbox.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn p-0 border-0 rounded-lg overflow-hidden" type="button" data-modal="#mediaModal" aria-label="Open photo">
      <div class="block w-[96px] h-[96px] [background:linear-gradient(160deg,#c9d6df_0%,#6f8fa6_45%,#2f4858_100%)]"></div>
    </button>
  </div>

  <div id="mediaModal" class="modal" tabindex="-1" aria-labelledby="mediaModalTitle">
    <div class="modal-dialog">
      <div class="modal-header">
        <div class="hstack gap-2">
          <span class="avatar avatar-sm rounded-full avatar-warning" aria-hidden="true">MF</span>
          <div><h4 id="mediaModalTitle" class="modal-title text-base">Max Foster</h4><span class="text-xs text-subtle">Uploaded 2 days ago</span></div>
        </div>
        <button class="modal-close" type="button" data-modal-close aria-label="Close"></button>
      </div>
      <div class="modal-body p-0">
        <div class="block w-full aspect-[4/3] max-h-[70vh] [background:linear-gradient(160deg,#c9d6df_0%,#6f8fa6_45%,#2f4858_100%)]" role="img" aria-label="Harbour at dusk"></div>
      </div>
      <div class="modal-footer justify-between">
        <span class="text-sm text-subtle">1 of 1</span>
        <button class="btn btn-soft-primary btn-sm hstack gap-1" type="button"><span class="mdi mdi-download"></span> Download</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="modal-dialog">
  <div class="modal-header">...</div>
  <div class="modal-body p-0">
    <img src="photo.jpg" alt="..." class="block w-full max-h-[70vh] object-cover" />
  </div>
</div>
```

```js components
import { Modal, ModalBody, ModalHeader } from "@abydahana/aksara-ui/components";

Modal({
  id: "photoModal",
  children:
    ModalHeader({ children: "..." }) +
    ModalBody({
      className: "p-0",
      children: '<img src="photo.jpg" alt="..." class="block w-full max-h-[70vh] object-cover" />'
    })
});
```

---

## Backdrop and Keyboard

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Attribute</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>data-modal-backdrop="false"</code></td><td>Backdrop clicks do nothing.</td></tr>
      <tr><td class="text-nowrap"><code>data-modal-backdrop="static"</code></td><td>Backdrop clicks do nothing. Add <code>data-modal-keyboard="false"</code> to ignore Escape too.</td></tr>
      <tr><td class="text-nowrap"><code>data-modal-keyboard="false"</code></td><td>Escape does not close the modal.</td></tr>
      <tr><td class="text-nowrap"><code>data-modal-focus="false"</code></td><td>Do not move focus into the modal when it opens.</td></tr>
      <tr><td class="text-nowrap"><code>data-modal-scroll-lock="false"</code></td><td>Keep the page scrollable while the modal is open.</td></tr>
    </tbody>
  </table>
</div>
::end

Set them on the `.modal` element, or on a `data-modal` trigger. Trigger options apply to that opening only: another trigger without them opens the modal with the options set on the `.modal` element (or the defaults).

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary" type="button" data-modal="#staticModal">Static backdrop</button>
  </div>

  <div id="staticModal" class="modal" tabindex="-1" aria-labelledby="staticModalTitle" data-modal-backdrop="static" data-modal-keyboard="false">
    <div class="modal-dialog modal-sm">
      <div class="modal-header"><h4 id="staticModalTitle" class="modal-title">Session expiring</h4></div>
      <div class="modal-body"><p class="m-0">Clicking outside and pressing Escape are both ignored. Choose an option to continue.</p></div>
      <div class="modal-footer">
        <button class="btn btn-ghost" type="button" data-modal-close>Sign out</button>
        <button class="btn btn-primary" type="button" data-modal-close>Stay signed in</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div id="staticModal" class="modal" tabindex="-1" data-modal-backdrop="static" data-modal-keyboard="false">...</div>

<!-- Or per trigger -->
<button class="btn btn-primary" data-modal="#staticModal" data-modal-backdrop="static">Open</button>
```

```js components
import { Button, Modal } from "@abydahana/aksara-ui/components";

Modal({
  id: "staticModal",
  staticBackdrop: true,
  attributes: { "data-modal-keyboard": "false" },
  children: "..."
});

// Or per trigger
Button({ label: "Open", attributes: { "data-modal": "#staticModal", "data-modal-backdrop": "static" } });
```

---

## Draggable Header

The `.modal-header` is a drag handle by default: the dialog follows the pointer and stays inside the viewport, and its position resets when it closes. Buttons, links, inputs and anything marked `data-no-drag` inside the header still work normally. Turn dragging off with `data-modal-draggable="false"` on the modal or the trigger, or `draggable: false` in JavaScript.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-soft-primary" type="button" data-modal="#dragModal">Draggable</button>
    <button class="btn btn-soft-primary" type="button" data-modal="#noDragModal">Dragging off</button>
  </div>

  <div id="dragModal" class="modal" tabindex="-1" aria-labelledby="dragModalTitle">
    <div class="modal-dialog modal-sm">
      <div class="modal-header"><h4 id="dragModalTitle" class="modal-title hstack gap-2"><span class="mdi mdi-drag text-subtle"></span> Drag me</h4><button class="modal-close" type="button" data-modal-close aria-label="Close"></button></div>
      <div class="modal-body"><p class="m-0">Grab the header and move the dialog around.</p></div>
    </div>
  </div>

  <div id="noDragModal" class="modal" tabindex="-1" aria-labelledby="noDragModalTitle" data-modal-draggable="false">
    <div class="modal-dialog modal-sm">
      <div class="modal-header"><h4 id="noDragModalTitle" class="modal-title">Fixed in place</h4><button class="modal-close" type="button" data-modal-close aria-label="Close"></button></div>
      <div class="modal-body"><p class="m-0">This modal has <code>data-modal-draggable="false"</code>, so the header is a normal title row.</p></div>
    </div>
  </div>
</div>
::end

```html
<div id="noDragModal" class="modal" tabindex="-1" data-modal-draggable="false">...</div>
```

```js components
import { Modal } from "@abydahana/aksara-ui/components";

Modal({ id: "noDragModal", attributes: { "data-modal-draggable": "false" }, children: "..." });
```

---

## Stacked Modals

Modals and offcanvases can open on top of each other. They stack in opening order: Escape and focus trapping apply only to the topmost overlay, and page scrolling stays locked until the last one closes. Place the second modal after the first in the DOM so it paints on top.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary" type="button" data-modal="#stackModalOne">Open first modal</button>
  </div>

  <div id="stackModalOne" class="modal" tabindex="-1" aria-labelledby="stackModalOneTitle">
    <div class="modal-dialog">
      <div class="modal-header"><h4 id="stackModalOneTitle" class="modal-title">Billing details</h4><button class="modal-close" type="button" data-modal-close aria-label="Close"></button></div>
      <div class="modal-body"><p class="m-0">Card ending in 4242, expires 08/28.</p></div>
      <div class="modal-footer">
        <button class="btn btn-ghost" type="button" data-modal-close>Close</button>
        <button class="btn btn-danger" type="button" data-modal="#stackModalTwo">Remove card</button>
      </div>
    </div>
  </div>

  <div id="stackModalTwo" class="modal" tabindex="-1" aria-labelledby="stackModalTwoTitle">
    <div class="modal-dialog modal-sm">
      <div class="modal-header"><h4 id="stackModalTwoTitle" class="modal-title">Remove this card?</h4></div>
      <div class="modal-body"><p class="m-0">Escape closes only this dialog.</p></div>
      <div class="modal-footer">
        <button class="btn btn-ghost" type="button" data-modal-close>Keep</button>
        <button class="btn btn-danger" type="button" data-modal-close="#stackModalTwo" data-dismiss="#stackModalOne">Remove</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<button class="btn btn-danger" type="button" data-modal="#stackModalTwo">Remove card</button>
```

```js components
import { Button } from "@abydahana/aksara-ui/components";

Button({ label: "Remove card", variant: "danger", attributes: { "data-modal": "#stackModalTwo" } });
```

---

## Universal Dismiss

`data-dismiss="#id"` closes whatever it points at: a modal, offcanvas, toast or dropdown (other elements are removed). It is handy for closing a modal from outside it, or several overlays at once.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary" type="button" data-modal="#modalSample">Open sample</button>
  </div>
  <div id="modalSample" class="modal" tabindex="-1" aria-labelledby="modalSampleTitle">
    <div class="modal-dialog modal-sm">
      <div class="modal-header"><h4 id="modalSampleTitle" class="modal-title">Dismiss sample</h4><button class="close" type="button" data-dismiss="#modalSample" aria-label="Close modal"></button></div>
      <div class="modal-body"><p class="m-0">The close button uses <code>data-dismiss="#modalSample"</code>.</p></div>
    </div>
  </div>
</div>
::end

```html
<button class="close" type="button" data-dismiss="#modalSample" aria-label="Close modal"></button>
```

```js components
import { CloseButton } from "@abydahana/aksara-ui/components";

CloseButton({ kind: "close", ariaLabel: "Close modal", attributes: { "data-dismiss": "#modalSample" } });
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
      <tr><td class="text-nowrap"><code>data-modal="#id"</code></td><td>any element</td><td>Opens the modal. <code>data-modal-*</code> options on the trigger apply to this opening only.</td></tr>
      <tr><td class="text-nowrap"><code>data-modal-close</code></td><td>inside the modal</td><td>Closes the containing modal.</td></tr>
      <tr><td class="text-nowrap"><code>data-modal-close="#id"</code></td><td>anywhere</td><td>Closes the targeted modal.</td></tr>
      <tr><td class="text-nowrap"><code>data-dismiss="#id"</code></td><td>anywhere</td><td>Closes the target (modal, offcanvas, toast or dropdown).</td></tr>
      <tr><td class="text-nowrap"><code>data-no-drag</code></td><td>inside the header</td><td>Excludes an element from starting a drag.</td></tr>
    </tbody>
  </table>
</div>
::end

### Options

Pass options to `Aksara.modal()` or set them as `data-modal-*` attributes on the modal or the trigger.

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Option</th><th>Attribute</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>backdrop</code></td><td class="text-nowrap"><code>data-modal-backdrop</code></td><td class="text-nowrap"><code>true</code></td><td><code>true</code> closes on backdrop click; <code>false</code> or <code>"static"</code> ignore it.</td></tr>
      <tr><td class="text-nowrap"><code>keyboard</code></td><td class="text-nowrap"><code>data-modal-keyboard</code></td><td class="text-nowrap"><code>true</code></td><td>Close on Escape.</td></tr>
      <tr><td class="text-nowrap"><code>focus</code></td><td class="text-nowrap"><code>data-modal-focus</code></td><td class="text-nowrap"><code>true</code></td><td>Move focus into the dialog on open: an <code>[autofocus]</code> element, else the first control that is not a close button, else the dialog itself.</td></tr>
      <tr><td class="text-nowrap"><code>scrollLock</code></td><td class="text-nowrap"><code>data-modal-scroll-lock</code></td><td class="text-nowrap"><code>true</code></td><td>Lock page scrolling while open.</td></tr>
      <tr><td class="text-nowrap"><code>draggable</code></td><td class="text-nowrap"><code>data-modal-draggable</code></td><td class="text-nowrap"><code>true</code></td><td>Drag the dialog by its header.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
// Initialize or fetch the modal instance
const myModal = Aksara.modal("#userModal", {
  backdrop: true,
  keyboard: true,
  draggable: true
});

myModal.show();
```

### Methods

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Method</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>myModal.show()</code></td><td>Opens the modal, focuses the first control and locks scrolling. Returns the instance.</td></tr>
      <tr><td class="text-nowrap"><code>myModal.hide()</code></td><td>Closes the modal, resets the drag position and restores focus to the trigger.</td></tr>
      <tr><td class="text-nowrap"><code>myModal.toggle()</code></td><td>Opens or closes the modal.</td></tr>
      <tr><td class="text-nowrap"><code>myModal.resetPosition()</code></td><td>Moves a dragged dialog back to the center.</td></tr>
      <tr><td class="text-nowrap"><code>myModal.updateOptions(options)</code></td><td>Merges new options.</td></tr>
      <tr><td class="text-nowrap"><code>myModal.destroy()</code></td><td>Removes listeners and the stored instance.</td></tr>
    </tbody>
  </table>
</div>
::end

### Events

Events bubble from the `.modal` element; `event.detail.instance` holds the instance.

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Event</th><th>Fired when</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>aksara:modal:show</code></td><td>The modal has opened.</td></tr>
      <tr><td class="text-nowrap"><code>aksara:modal:hide</code></td><td>The modal has closed.</td></tr>
      <tr><td class="text-nowrap"><code>aksara:modal:destroy</code></td><td>The instance was destroyed.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
const userModalEl = document.querySelector("#userModal");

userModalEl.addEventListener("aksara:modal:show", () => {
  userModalEl.querySelector("#firstName").focus();
});

userModalEl.addEventListener("aksara:modal:hide", () => {
  userModalEl.querySelector("form").reset();
});
```

### String Components

`Modal({ id, size, scrollable, staticBackdrop, children })` renders the wrapper, dialog and `.modal-content`. `size` is `sm`, `lg`, `xl`, `fullscreen` or `fullscreen-{sm,md,lg,xl}-down`; `staticBackdrop` sets `data-modal-backdrop="static"`. `ModalHeader({ title, titleId, level, dismissible })` (title in an `h5` by default; `titleId` gives it an `id` for `aria-labelledby`), `ModalBody()` and `ModalFooter()` fill it.

```js
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@abydahana/aksara-ui/components";

Modal({
  id: "userModal",
  size: "lg",
  staticBackdrop: true,
  children:
    ModalHeader({ title: "Create user" }) +
    ModalBody({ children: "<p>...</p>" }) +
    ModalFooter({ children: '<button class="btn btn-primary">Save</button>' })
});
```
