# Steps

Steps show progress through a flow with a fixed number of stages, such as checkout, onboarding, KYC verification, or order tracking. Earlier steps are complete, one step is active, and the rest are pending. The list can be horizontal or vertical, and with `data-steps` it turns into a working wizard that shows one panel per step, with no JavaScript of your own.

::html
<div class="docs-preview">
  <ol class="steps" aria-label="Checkout progress">
    <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Cart</span></span></li>
    <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Shipping</span></span></li>
    <li class="step is-active" aria-current="step"><span class="visually-hidden">Current: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Payment</span></span></li>
    <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Review</span></span></li>
  </ol>
</div>
::end

```html
<ol class="steps" aria-label="Checkout progress">
  <li class="step is-complete">
    <span class="visually-hidden">Completed: </span>
    <span class="step-marker" aria-hidden="true"></span>
    <span class="step-body"><span class="step-title">Cart</span></span>
  </li>
  <li class="step is-complete">
    <span class="visually-hidden">Completed: </span>
    <span class="step-marker" aria-hidden="true"></span>
    <span class="step-body"><span class="step-title">Shipping</span></span>
  </li>
  <li class="step is-active" aria-current="step">
    <span class="visually-hidden">Current: </span>
    <span class="step-marker" aria-hidden="true"></span>
    <span class="step-body"><span class="step-title">Payment</span></span>
  </li>
  <li class="step">
    <span class="step-marker" aria-hidden="true"></span>
    <span class="step-body"><span class="step-title">Review</span></span>
  </li>
</ol>
```

```js components
import { Steps } from "@abydahana/aksara-ui/components";

Steps({
  label: "Checkout progress",
  current: 2,
  items: [{ title: "Cart" }, { title: "Shipping" }, { title: "Payment" }, { title: "Review" }]
});
```

An empty `.step-marker` shows the step number from a CSS counter. Complete steps replace the number with a check mark, and the connector to the next step turns primary.

---

## Descriptions

Add a `.step-text` under the title for a short detail: what the step covers, a date, or the value the user already chose.

::html
<div class="docs-preview">
  <div class="card">
    <div class="card-body">
      <ol class="steps" aria-label="Checkout progress">
        <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Cart</span><span class="step-text">3 items · $48.70</span></span></li>
        <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Shipping</span><span class="step-text">Royal Mail Tracked to Manchester</span></span></li>
        <li class="step is-active" aria-current="step"><span class="visually-hidden">Current: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Payment</span><span class="step-text">Apple Pay, PayPal, or card</span></span></li>
        <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Review</span><span class="step-text">Confirm and pay</span></span></li>
      </ol>
    </div>
  </div>
</div>
::end

```html
<ol class="steps" aria-label="Checkout progress">
  <li class="step is-complete">
    <span class="visually-hidden">Completed: </span>
    <span class="step-marker" aria-hidden="true"></span>
    <span class="step-body">
      <span class="step-title">Cart</span>
      <span class="step-text">3 items · $48.70</span>
    </span>
  </li>
  <!-- … -->
</ol>
```

```js components
import { Steps } from "@abydahana/aksara-ui/components";

Steps({
  label: "Checkout progress",
  current: 2,
  items: [
    { title: "Cart", description: "3 items · $48.70" },
    { title: "Shipping", description: "Royal Mail Tracked to Manchester" },
    { title: "Payment", description: "Apple Pay, PayPal, or card" },
    { title: "Review", description: "Confirm and pay" }
  ]
});
```

---

## Small

`.steps-sm` shrinks the markers from 2rem to 1.5rem. Use it in cards, modals, and side panels where the default size competes with the content.

::html
<div class="docs-preview">
  <div class="card max-w-[520px]">
    <div class="card-body vstack gap-4">
      <ol class="steps steps-sm" aria-label="Verification progress">
        <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Account</span></span></li>
        <li class="step is-active" aria-current="step"><span class="visually-hidden">Current: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">ID card</span></span></li>
        <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Selfie</span></span></li>
      </ol>
      <div>
        <h4 class="mt-0 mb-1 fw-bold">Upload your photo ID</h4>
        <p class="m-0 text-subtle text-sm">Take a photo of the front of your ID card. Make sure the ID number is readable.</p>
      </div>
    </div>
  </div>
</div>
::end

```html
<ol class="steps steps-sm" aria-label="Verification progress">
  <li class="step is-complete">…</li>
  <li class="step is-active" aria-current="step">…</li>
  <li class="step">…</li>
</ol>
```

```js components
import { Steps } from "@abydahana/aksara-ui/components";

Steps({
  size: "sm",
  label: "Verification progress",
  current: 1,
  items: [{ title: "Account" }, { title: "ID card" }, { title: "Selfie" }]
});
```

---

## Icons

Put an icon inside `.step-marker` to replace the number. Complete steps keep the icon on a primary fill instead of switching to a check mark.

::html
<div class="docs-preview">
  <ol class="steps" aria-label="Onboarding progress">
    <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"><span class="mdi mdi-account-outline"></span></span><span class="step-body"><span class="step-title">Profile</span></span></li>
    <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"><span class="mdi mdi-store-outline"></span></span><span class="step-body"><span class="step-title">Store</span></span></li>
    <li class="step is-active" aria-current="step"><span class="visually-hidden">Current: </span><span class="step-marker" aria-hidden="true"><span class="mdi mdi-bank-outline"></span></span><span class="step-body"><span class="step-title">Bank account</span></span></li>
    <li class="step"><span class="step-marker" aria-hidden="true"><span class="mdi mdi-rocket-launch-outline"></span></span><span class="step-body"><span class="step-title">Go live</span></span></li>
  </ol>
</div>
::end

```html
<li class="step is-active" aria-current="step">
  <span class="visually-hidden">Current: </span>
  <span class="step-marker" aria-hidden="true"><span class="mdi mdi-bank-outline"></span></span>
  <span class="step-body"><span class="step-title">Bank account</span></span>
</li>
```

```js components
import { Steps } from "@abydahana/aksara-ui/components";

Steps({
  label: "Onboarding progress",
  current: 2,
  items: [
    { title: "Profile", icon: "mdi-account-outline" },
    { title: "Store", icon: "mdi-store-outline" },
    { title: "Bank account", icon: "mdi-bank-outline" },
    { title: "Go live", icon: "mdi-rocket-launch-outline" }
  ]
});
```

---

## Error State

`.is-error` marks a step that failed: the marker border and the title turn red. Say what went wrong in `.step-text`, because the color alone does not reach screen reader users. Use an icon such as `mdi-alert` to make the state clear without color too.

::html
<div class="docs-preview">
  <ol class="steps" aria-label="Payment progress">
    <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Order placed</span><span class="step-text">INV/2024/11/0412</span></span></li>
    <li class="step is-error" aria-current="step"><span class="visually-hidden">Current: </span><span class="step-marker" aria-hidden="true"><span class="mdi mdi-alert"></span></span><span class="step-body"><span class="step-title">Payment</span><span class="step-text">Card declined by issuer</span></span></li>
    <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Processing</span></span></li>
    <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Shipped</span></span></li>
  </ol>
</div>
::end

```html
<li class="step is-error" aria-current="step">
  <span class="visually-hidden">Current: </span>
  <span class="step-marker" aria-hidden="true"><span class="mdi mdi-alert"></span></span>
  <span class="step-body">
    <span class="step-title">Payment</span>
    <span class="step-text">Card declined by issuer</span>
  </span>
</li>
```

```js components
import { Steps } from "@abydahana/aksara-ui/components";

Steps({
  label: "Payment progress",
  current: 1,
  items: [
    { title: "Order placed", description: "INV/2024/11/0412" },
    { title: "Payment", description: "Card declined by issuer", icon: "mdi-alert", error: true },
    { title: "Processing" },
    { title: "Shipped" }
  ]
});
```

The runtime leaves `.is-error` alone when it moves the list: remove it yourself once the problem is fixed (`step.classList.remove("is-error")`). Screen readers hear "Error:" before the title when the step comes from the string component.

---

## Vertical

`.steps-vertical` stacks the steps with the markers in a column and the connector running down between them. It fits order tracking, delivery status, and long setup flows where every step needs a description.

::html
<div class="docs-preview">
  <div class="card max-w-[460px]">
    <div class="card-body vstack gap-4">
      <div class="hstack justify-between gap-3">
        <div>
          <h4 class="m-0 fw-bold">Order #ORD-20931</h4>
          <p class="mt-1 mb-0 text-subtle text-sm">Estimated arrival Fri, 29 Nov</p>
        </div>
        <span class="badge badge-soft-info">On the way</span>
      </div>
      <ol class="steps steps-vertical" aria-label="Order status">
        <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Order confirmed</span><span class="step-text">Tue, 26 Nov · 09:14</span></span></li>
        <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Packed at London warehouse</span><span class="step-text">Tue, 26 Nov · 16:40</span></span></li>
        <li class="step is-active" aria-current="step"><span class="visually-hidden">Current: </span><span class="step-marker" aria-hidden="true"><span class="mdi mdi-truck-fast-outline"></span></span><span class="step-body"><span class="step-title">In transit to Manchester</span><span class="step-text">Royal Mail · Tracking RM012345678GB</span></span></li>
        <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Out for delivery</span></span></li>
        <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Delivered</span></span></li>
      </ol>
    </div>
  </div>
</div>
::end

```html
<ol class="steps steps-vertical" aria-label="Order status">
  <li class="step is-complete">
    <span class="visually-hidden">Completed: </span>
    <span class="step-marker" aria-hidden="true"></span>
    <span class="step-body">
      <span class="step-title">Order confirmed</span>
      <span class="step-text">Tue, 26 Nov · 09:14</span>
    </span>
  </li>
  <li class="step is-active" aria-current="step">
    <span class="visually-hidden">Current: </span>
    <span class="step-marker" aria-hidden="true"><span class="mdi mdi-truck-fast-outline"></span></span>
    <span class="step-body">
      <span class="step-title">In transit to Manchester</span>
      <span class="step-text">Royal Mail · Tracking RM012345678GB</span>
    </span>
  </li>
  <li class="step">
    <span class="step-marker" aria-hidden="true"></span>
    <span class="step-body"><span class="step-title">Delivered</span></span>
  </li>
</ol>
```

```js components
import { Steps } from "@abydahana/aksara-ui/components";

Steps({
  vertical: true,
  label: "Order status",
  current: 2,
  items: [
    { title: "Order confirmed", description: "Tue, 26 Nov · 09:14" },
    { title: "Packed at London warehouse", description: "Tue, 26 Nov · 16:40" },
    {
      title: "In transit to Manchester",
      description: "Royal Mail · Tracking RM012345678GB",
      icon: "mdi-truck-fast-outline"
    },
    { title: "Out for delivery" },
    { title: "Delivered" }
  ]
});
```

Vertical steps also combine with `.steps-sm`.

---

## Links

Wrap the marker and body in an `<a>` to let users jump back to a finished step, for example to change the shipping address during checkout. Only link steps the user can actually revisit; pending steps stay plain text.

::html
<div class="docs-preview">
  <ol class="steps" aria-label="Checkout progress">
    <li class="step is-complete"><a href="#/components/steps" class="step-link"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Cart</span><span class="step-text">Edit</span></span></a></li>
    <li class="step is-complete"><a href="#/components/steps" class="step-link"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Address</span><span class="step-text">Edit</span></span></a></li>
    <li class="step is-active" aria-current="step"><span class="visually-hidden">Current: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Payment</span></span></li>
    <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Review</span></span></li>
  </ol>
</div>
::end

```html
<li class="step is-complete">
  <a href="/checkout/address" class="step-link">
    <span class="visually-hidden">Completed: </span>
    <span class="step-marker" aria-hidden="true"></span>
    <span class="step-body">
      <span class="step-title">Address</span>
      <span class="step-text">Edit</span>
    </span>
  </a>
</li>
```

```js components
import { Steps } from "@abydahana/aksara-ui/components";

Steps({
  label: "Checkout progress",
  current: 2,
  items: [
    { title: "Cart", description: "Edit", href: "/checkout/cart" },
    { title: "Address", description: "Edit", href: "/checkout/address" },
    { title: "Payment" },
    { title: "Review" }
  ]
});
```

Give the link `.step-link`: it keeps the step's layout (also in `.steps-vertical`), underlines the title on hover and shows a focus ring. The string component does this for `items[].href`.

---

## Wizard

Give the list an `id` and `data-steps`, point `data-steps-panels` at the panels (one per step, in order), and add buttons with `data-steps-next="#id"` and `data-steps-prev="#id"`. The runtime shows the panel of the active step, hides the others, and updates the step classes and `aria-current`. Mark every panel except the first `hidden` so the page does not flash before `Aksara.init()` runs. Try it below.

::html
<div class="docs-preview">
  <div class="card max-w-[640px]">
    <div class="card-body vstack gap-5">
      <ol id="workspaceSteps" class="steps steps-sm" aria-label="Create workspace" data-steps data-steps-panels="#workspacePanes > section">
        <li class="step is-active" aria-current="step"><span class="visually-hidden">Current: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Workspace</span></span></li>
        <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Invite team</span></span></li>
        <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Review</span></span></li>
      </ol>
      <div id="workspacePanes">
        <section aria-labelledby="paneWorkspaceTitle">
          <h4 id="paneWorkspaceTitle" class="mt-0 mb-3 fw-bold">Name your workspace</h4>
          <div class="vstack gap-3">
            <div>
              <label class="form-label" for="wsName">Company name</label>
              <input id="wsName" class="form-control" type="text" value="Dusk Coffee Co." required>
            </div>
            <div>
              <label class="form-label" for="wsUrl">Workspace URL</label>
              <div class="input-group">
                <span class="input-group-text">aksara.app/</span>
                <input id="wsUrl" class="form-control" type="text" value="dusk-coffee" required aria-describedby="wsUrlHelp">
              </div>
              <div id="wsUrlHelp" class="form-text">Lowercase letters, numbers, and dashes.</div>
            </div>
          </div>
          <div class="hstack justify-end gap-2 mt-4">
            <button type="button" class="btn btn-primary" data-steps-next="#workspaceSteps">Next <span class="mdi mdi-arrow-right"></span></button>
          </div>
        </section>
        <section aria-labelledby="paneTeamTitle" hidden>
          <h4 id="paneTeamTitle" class="mt-0 mb-3 fw-bold">Invite your team</h4>
          <div class="vstack gap-3">
            <div>
              <label class="form-label" for="wsEmails">Email addresses</label>
              <textarea id="wsEmails" class="form-control" rows="3">maya.chen@duskcoffee.com, alex.morgan@duskcoffee.com</textarea>
              <div class="form-text">Separate addresses with commas. You can invite more people later.</div>
            </div>
            <div>
              <label class="form-label" for="wsRole">Role</label>
              <select id="wsRole" class="form-select">
                <option>Member</option>
                <option>Admin</option>
                <option>Viewer</option>
              </select>
            </div>
          </div>
          <div class="hstack justify-between gap-2 mt-4">
            <button type="button" class="btn btn-ghost" data-steps-prev="#workspaceSteps"><span class="mdi mdi-arrow-left"></span> Back</button>
            <button type="button" class="btn btn-primary" data-steps-next="#workspaceSteps">Next <span class="mdi mdi-arrow-right"></span></button>
          </div>
        </section>
        <section aria-labelledby="paneReviewTitle" hidden>
          <h4 id="paneReviewTitle" class="mt-0 mb-3 fw-bold">Review</h4>
          <div class="list-group">
            <div class="list-group-item hstack justify-between gap-3">
              <div class="min-w-0">
                <div class="text-subtle text-xs">Workspace</div>
                <div class="fw-semibold truncate">Dusk Coffee Co. · aksara.app/dusk-coffee</div>
              </div>
              <button type="button" class="btn btn-plain btn-sm" data-steps-go="#workspaceSteps" data-steps-index="0">Edit</button>
            </div>
            <div class="list-group-item hstack justify-between gap-3">
              <div class="min-w-0">
                <div class="text-subtle text-xs">Invites</div>
                <div class="fw-semibold truncate">2 people as Member</div>
              </div>
              <button type="button" class="btn btn-plain btn-sm" data-steps-go="#workspaceSteps" data-steps-index="1">Edit</button>
            </div>
          </div>
          <div class="hstack justify-between gap-2 mt-4">
            <button type="button" class="btn btn-ghost" data-steps-prev="#workspaceSteps"><span class="mdi mdi-arrow-left"></span> Back</button>
            <button type="button" class="btn btn-primary"><span class="mdi mdi-check"></span> Create workspace</button>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
::end

```html
<ol
  id="workspaceSteps"
  class="steps steps-sm"
  aria-label="Create workspace"
  data-steps
  data-steps-panels="#workspacePanes > section"
>
  <li class="step is-active" aria-current="step">…Workspace…</li>
  <li class="step">…Invite team…</li>
  <li class="step">…Review…</li>
</ol>

<div id="workspacePanes">
  <section>
    <!-- step 1 fields -->
    <button type="button" class="btn btn-primary" data-steps-next="#workspaceSteps">Next</button>
  </section>
  <section hidden>
    <!-- step 2 fields -->
    <button type="button" class="btn btn-ghost" data-steps-prev="#workspaceSteps">Back</button>
    <button type="button" class="btn btn-primary" data-steps-next="#workspaceSteps">Next</button>
  </section>
  <section hidden>
    <!-- review -->
    <button type="button" class="btn btn-plain btn-sm" data-steps-go="#workspaceSteps" data-steps-index="0">
      Edit
    </button>
    <button type="button" class="btn btn-ghost" data-steps-prev="#workspaceSteps">Back</button>
    <button type="submit" class="btn btn-primary">Create workspace</button>
  </section>
</div>
```

```js components
import { Steps } from "@abydahana/aksara-ui/components";

// `id` + `panels` render data-steps and data-steps-panels.
Steps({
  id: "workspaceSteps",
  size: "sm",
  label: "Create workspace",
  panels: "#workspacePanes > section",
  items: [{ title: "Workspace" }, { title: "Invite team" }, { title: "Review" }]
});
```

- `data-steps-go="#id"` with `data-steps-index="0"` jumps straight to a step (zero-based), here from the review page back to the step you want to edit.
- The panel selector runs against the whole document, so make it specific to this wizard (`#workspacePanes > section`), not a bare `section`.
- Each panel here has its own footer. With one shared footer instead, the runtime disables every `data-steps-prev` button on the first step and sets `data-steps-last` on `data-steps-next` buttons on the last step. See Shared footer under JavaScript below.

### Validate before moving on

`aksara:steps:before` fires on the list before every move made by a button, and it is cancelable. Call `preventDefault()` to stay on the current step, for example while a required field in the current panel is empty:

```js
const steps = document.querySelector("#workspaceSteps");
const panes = document.querySelectorAll("#workspacePanes > section");

steps.addEventListener("aksara:steps:before", (event) => {
  const { from, to } = event.detail;
  if (to <= from) return; // going back is always allowed

  const invalid = panes[from].querySelector("input:invalid, select:invalid, textarea:invalid");
  if (invalid) {
    event.preventDefault(); // stay on this step
    invalid.reportValidity(); // shows the browser's message for the field
    invalid.focus();
  }
});

// Move focus into the new panel so keyboard and screen reader users land on it.
steps.addEventListener("aksara:steps:change", (event) => {
  panes[event.detail.index].querySelector("h4, input, select, textarea")?.focus();
});
```

To move focus to a heading, give it `tabindex="-1"`.

---

## Responsive

Below 576px, horizontal steps hide the title and description of every step except the active one. The markers and connectors stay, so the user still sees how far along they are, and the active step keeps its label. Vertical steps always show all text. If you need every label on phones, switch to `.steps-vertical` there.

::html
<div class="docs-preview">
  <div class="max-w-[360px]">
    <ol class="steps steps-sm" aria-label="Checkout progress">
      <li class="step is-complete"><span class="visually-hidden">Completed: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Cart</span></span></li>
      <li class="step is-active" aria-current="step"><span class="visually-hidden">Current: </span><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Shipping</span></span></li>
      <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Payment</span></span></li>
      <li class="step"><span class="step-marker" aria-hidden="true"></span><span class="step-body"><span class="step-title">Review</span></span></li>
    </ol>
  </div>
</div>
::end

Resize the browser below 576px to see the other titles disappear. Keep titles to one or two words so they fit when they are visible.

---

## Accessibility

- Use an `<ol>` with an `aria-label` that names the flow ("Checkout progress"). `Steps` defaults the label to "Progress".
- The active step carries `aria-current="step"`. Complete and current steps start with visually hidden "Completed: " and "Current: " text, because the check mark and ring are drawn in CSS and hidden from assistive technology (`aria-hidden="true"` on the marker).
- An error step has no hidden prefix of its own. Put the reason in `.step-text`, as in the Error State example.
- The step list is a status display, not a set of tabs. The wizard controls are ordinary buttons, so do not add `role="tablist"` to it.
- Markers and connectors use logical properties, so the steps run right to left under `dir="rtl"`.

---

## JavaScript

The wizard behavior is part of the data API. `Aksara.init()` syncs every `.steps[data-steps]` list once (panels, button states) and installs one delegated click listener on `document`, so buttons rendered later work too.

### Data attributes

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Attribute</th><th>On</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-steps</code></td><td><code>.steps</code></td><td>Syncs the list on <code>Aksara.init()</code>: activates the current step (the <code>.is-active</code> one, or the first step after the complete ones), shows its panel and updates the buttons.</td></tr>
      <tr><td><code>data-steps-panels="selector"</code></td><td><code>.steps</code></td><td>Panels, one per step in document order. The panel at the active index is shown and the others get <code>hidden</code>.</td></tr>
      <tr><td><code>data-steps-next="#id"</code></td><td>Button</td><td>Moves the list with that selector one step forward. Gets <code>data-steps-last</code> while the last step is active.</td></tr>
      <tr><td><code>data-steps-prev="#id"</code></td><td>Button</td><td>Moves one step back. Buttons are <code>disabled</code> while the first step is active.</td></tr>
      <tr><td><code>data-steps-go="#id"</code></td><td>Button</td><td>Jumps to the step in <code>data-steps-index</code>.</td></tr>
      <tr><td><code>data-steps-index="0"</code></td><td>Button</td><td>Zero-based target for <code>data-steps-go</code>. Defaults to <code>0</code>.</td></tr>
      <tr><td><code>data-steps-last</code></td><td>Set by Aksara</td><td>Present on <code>data-steps-next</code> buttons while the last step is active. Inside the button, <code>.steps-continue</code> text shows until then and <code>.steps-finish</code> text from then on.</td></tr>
    </tbody>
  </table>
</div>
::end

Indexes are clamped to the list. Back on the first step does nothing; Next on the last step fires `aksara:steps:finish` instead of moving. The button state sync (`disabled`, `data-steps-last`) only matches buttons whose value is exactly `#` followed by the list's `id`, so use that form rather than another selector.

### Events

Both events are dispatched on the `.steps` element and bubble, so you can listen on the list or on `document`.

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Event</th><th>Fired when</th><th><code>event.detail</code></th></tr>
    </thead>
    <tbody>
      <tr><td><code>aksara:steps:before</code></td><td>A next, prev, or go button is clicked, before anything changes. Cancelable: <code>preventDefault()</code> keeps the current step.</td><td><code>{ from, to }</code>, both clamped to the list.</td></tr>
      <tr><td><code>aksara:steps:finish</code></td><td>Next is clicked while the last step is active.</td><td><code>{ index, total }</code></td></tr>
      <tr><td><code>aksara:steps:change</code></td><td>The active step changed, from a button, from <code>Aksara.steps()</code>, or on init when no step was active.</td><td><code>{ index, previous, total }</code>. <code>previous</code> is <code>-1</code> when no step was active before.</td></tr>
    </tbody>
  </table>
</div>
::end

### Shared footer

With a single Back / Next pair under all panels, put both labels in the Next button: `.steps-continue` shows until the last step, `.steps-finish` from then on. Next on the last step fires `aksara:steps:finish`, where you submit:

```html
<div class="card-footer hstack justify-between gap-2">
  <button type="button" class="btn btn-ghost" data-steps-prev="#checkoutSteps">Back</button>
  <button type="button" class="btn btn-primary" data-steps-next="#checkoutSteps">
    <span class="steps-continue">Next</span>
    <span class="steps-finish">Place order</span>
  </button>
</div>
```

```js
document.querySelector("#checkoutSteps").addEventListener("aksara:steps:finish", () => {
  document.querySelector("#checkoutForm").requestSubmit();
});
```

### Moving from code

`Aksara.steps(target)` returns the zero-based active index. `Aksara.steps(target, index)` moves the list there, syncs panels and buttons, fires `aksara:steps:change`, and returns the clamped index. It does not fire `aksara:steps:before`. Both return `-1` when the target is not found.

```js
Aksara.steps("#workspaceSteps"); // 0
Aksara.steps("#workspaceSteps", 2); // 2, shows the review panel

// After the server rejects step 2, go back and flag it.
const failed = Aksara.steps("#workspaceSteps", 1);
document.querySelectorAll("#workspaceSteps > .step")[failed].classList.add("is-error");
```

Moving a list keeps `.is-error` where you put it, and it works on any `.steps` list, with or without `data-steps`.

---

## String Component

`Steps` returns an `<ol class="steps">` as an HTML string. Steps before `current` render complete, the one at `current` is active with `aria-current="step"`, and the rest are pending. Passing `panels` adds `data-steps` and `data-steps-panels`, so the list works as a wizard once `Aksara.init()` runs.

```ts
import { Steps } from "@abydahana/aksara-ui/components";

Steps({ items: [{ title: "Cart" }, { title: "Payment" }, { title: "Review" }], current: 1 });
Steps({ items, vertical: true, size: "sm", label: "Order status" });
Steps({ items, id: "signupSteps", panels: "#signupPanes > section" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>items</code></td><td><code>StepItem[]</code></td><td>—</td><td>The steps, in order.</td></tr>
      <tr><td><code>items[].title</code></td><td><code>string</code></td><td>—</td><td>Escaped title in <code>.step-title</code>.</td></tr>
      <tr><td><code>items[].description</code></td><td><code>string</code></td><td>—</td><td>Escaped detail in <code>.step-text</code>.</td></tr>
      <tr><td><code>items[].icon</code></td><td><code>string</code></td><td>—</td><td>Icon class shown in the marker instead of the number, for example <code>"mdi-truck-outline"</code>.</td></tr>
      <tr><td><code>items[].error</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.is-error</code> instead of the complete or active class.</td></tr>
      <tr><td><code>items[].href</code></td><td><code>string</code></td><td>—</td><td>Wraps the marker and body in an <code>&lt;a&gt;</code>.</td></tr>
      <tr><td><code>current</code></td><td><code>number</code></td><td><code>0</code></td><td>Zero-based active step. Earlier steps render complete. <code>-1</code> renders every step pending (the runtime activates the first one on init when <code>data-steps</code> is set).</td></tr>
      <tr><td><code>vertical</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.steps-vertical</code>.</td></tr>
      <tr><td><code>size</code></td><td><code>"sm" | "md"</code></td><td><code>"md"</code></td><td><code>"sm"</code> adds <code>.steps-sm</code>.</td></tr>
      <tr><td><code>id</code></td><td><code>string</code></td><td>—</td><td>List id, used by <code>data-steps-next|prev|go="#id"</code> buttons.</td></tr>
      <tr><td><code>panels</code></td><td><code>string</code></td><td>—</td><td>Panel selector. Renders <code>data-steps</code> and <code>data-steps-panels</code>.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td><code>"Progress"</code></td><td><code>aria-label</code> of the list.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the <code>&lt;ol&gt;</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes on the <code>&lt;ol&gt;</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.steps</code></td><td>Flex row of steps with a step counter. Sets <code>--aksara-step-size</code> (2rem) and <code>--aksara-step-line</code> (connector color).</td></tr>
      <tr><td><code>.step</code></td><td>One step: centered marker and body, with a connector to the next step drawn by <code>::after</code>.</td></tr>
      <tr><td><code>.step-marker</code></td><td>Round marker. Shows the step number when empty, or the icon inside it.</td></tr>
      <tr><td><code>.step-body</code></td><td>Wrapper for the title and text.</td></tr>
      <tr><td><code>.step-title</code></td><td>Step name, subtle until the step is active or complete.</td></tr>
      <tr><td><code>.step-text</code></td><td>Smaller detail line.</td></tr>
      <tr><td><code>.is-complete</code></td><td>Primary marker with a check mark (or the icon) and a primary connector.</td></tr>
      <tr><td><code>.is-active</code></td><td>Primary marker border with a soft ring and full-contrast title.</td></tr>
      <tr><td><code>.is-error</code></td><td>Danger marker border and title.</td></tr>
      <tr><td><code>.steps-vertical</code></td><td>Stacks steps in a column with the connector running down beside the text.</td></tr>
      <tr><td><code>.steps-sm</code></td><td>1.5rem markers and smaller numbers.</td></tr>
      <tr><td><code>.step-link</code></td><td>Link wrapping a step's marker and body; keeps the layout, adds hover and focus styles.</td></tr>
      <tr><td><code>.steps-continue</code>, <code>.steps-finish</code></td><td>Labels inside a <code>data-steps-next</code> button: the first shows until the last step, the second on it.</td></tr>
    </tbody>
  </table>
</div>
::end
