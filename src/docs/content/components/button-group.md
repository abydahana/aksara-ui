# Button Group

Button groups join related buttons into a single control. Adjacent borders collapse into one line, only the outer corners stay rounded, and the hovered or focused button rises above its neighbours so its border and focus ring are never clipped. Groups work with every button variant, with links, and with icon buttons.

---

## Basic Group

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="btn-group" role="group" aria-label="Basic actions">
      <button class="btn btn-soft-primary" type="button">Left</button>
      <button class="btn btn-soft-primary w-full" type="button">Middle</button>
      <button class="btn btn-soft-primary" type="button">Right</button>
    </div>
    <div class="btn-group" role="group" aria-label="Solid actions">
      <button class="btn btn-primary" type="button">Left</button>
      <button class="btn btn-primary" type="button">Middle</button>
      <button class="btn btn-primary" type="button">Right</button>
    </div>
    <div class="btn-group" role="group" aria-label="Outline actions">
      <button class="btn btn-outline-primary" type="button">Left</button>
      <button class="btn btn-outline-primary" type="button">Middle</button>
      <button class="btn btn-outline-primary" type="button">Right</button>
    </div>
    <div class="btn-group" role="group" aria-label="Plain actions">
      <button class="btn btn-plain" type="button">Left</button>
      <button class="btn btn-plain" type="button">Middle</button>
      <button class="btn btn-plain" type="button">Right</button>
    </div>
  </div>
</div>
::end

```html
<div class="btn-group" role="group" aria-label="Basic actions">
  <button class="btn btn-soft-primary" type="button">Left</button>
  <button class="btn btn-soft-primary w-full" type="button">Middle</button>
  <button class="btn btn-soft-primary" type="button">Right</button>
</div>
```

```js components
import { Button, ButtonGroup } from "@abydahana/aksara-ui/components";

ButtonGroup({
  ariaLabel: "Basic actions",
  children:
    Button({ label: "Left", soft: true }) +
    Button({ label: "Middle", soft: true, className: "w-full" }) +
    Button({ label: "Right", soft: true })
});
```

Give every group `role="group"` and an `aria-label` so assistive technology announces the buttons as one set.

---

## Anchor Button Group

::html
<div class="docs-preview">
  <div class="docs-row">
  <div class="btn-group" role="group" aria-label="Documentation links">
    <a class="btn btn-outline-primary" href="#/components/buttons">Buttons</a>
    <a class="btn btn-outline-primary" href="#/components/button-group" aria-current="page">Button Group</a>
    <a class="btn btn-outline-primary" href="#/helpers/javascript">JavaScript</a>
  </div>
  </div>
</div>
::end

```html
<div class="btn-group" role="group" aria-label="Documentation links">
  <a class="btn btn-outline-primary" href="/buttons">Buttons</a>
  <a class="btn btn-outline-primary" href="/button-group" aria-current="page">Button Group</a>
  <a class="btn btn-outline-primary" href="/javascript">JavaScript</a>
</div>
```

```js components
import { Button, ButtonGroup } from "@abydahana/aksara-ui/components";

ButtonGroup({
  ariaLabel: "Documentation links",
  children:
    Button({ label: "Buttons", href: "/buttons", outline: true }) +
    Button({ label: "Button Group", href: "/button-group", outline: true, attributes: { "aria-current": "page" } }) +
    Button({ label: "JavaScript", href: "/javascript", outline: true })
});
```

---

## Mixed Variants

Buttons in a group do not have to share a variant. A plain group with one colored action is a common pattern for pagers and approve/reject pairs.

::html
<div class="docs-preview">
  <div class="docs-row">
    <div class="btn-group" role="group" aria-label="Review decision">
      <button class="btn btn-soft-success" type="button"><span class="mdi mdi-check"></span> Approve</button>
      <button class="btn btn-soft-danger" type="button"><span class="mdi mdi-close"></span> Reject</button>
    </div>
    <div class="btn-group" role="group" aria-label="Pager">
      <button class="btn btn-plain btn-icon" type="button" aria-label="Previous"><span class="mdi mdi-chevron-left"></span></button>
      <button class="btn btn-plain" type="button" disabled>Page 3 of 12</button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="Next"><span class="mdi mdi-chevron-right"></span></button>
    </div>
    <div class="btn-group" role="group" aria-label="Quantity">
      <button class="btn btn-outline-secondary btn-icon" type="button" aria-label="Decrease"><span class="mdi mdi-minus"></span></button>
      <button class="btn btn-outline-secondary" type="button" tabindex="-1">2</button>
      <button class="btn btn-outline-secondary btn-icon" type="button" aria-label="Increase"><span class="mdi mdi-plus"></span></button>
    </div>
  </div>
</div>
::end

```html
<div class="btn-group" role="group" aria-label="Review decision">
  <button class="btn btn-soft-success" type="button"><span class="mdi mdi-check"></span> Approve</button>
  <button class="btn btn-soft-danger" type="button"><span class="mdi mdi-close"></span> Reject</button>
</div>

<div class="btn-group" role="group" aria-label="Pager">
  <button class="btn btn-plain btn-icon" type="button" aria-label="Previous">
    <span class="mdi mdi-chevron-left"></span>
  </button>
  <button class="btn btn-plain" type="button" disabled>Page 3 of 12</button>
  <button class="btn btn-plain btn-icon" type="button" aria-label="Next">
    <span class="mdi mdi-chevron-right"></span>
  </button>
</div>
```

```js components
import { Button, ButtonGroup } from "@abydahana/aksara-ui/components";

const iconButton = (icon, label) =>
  Button({
    children: `<span class="mdi mdi-${icon}"></span>`,
    plain: true,
    className: "btn-icon",
    attributes: { "aria-label": label }
  });

ButtonGroup({
  ariaLabel: "Review decision",
  children:
    Button({ children: '<span class="mdi mdi-check"></span> Approve', variant: "success", soft: true }) +
    Button({ children: '<span class="mdi mdi-close"></span> Reject', variant: "danger", soft: true })
});

ButtonGroup({
  ariaLabel: "Pager",
  children:
    iconButton("chevron-left", "Previous") +
    Button({ label: "Page 3 of 12", plain: true, disabled: true }) +
    iconButton("chevron-right", "Next")
});
```

---

## Sizing

Size the whole group with one class instead of sizing every button: `.btn-group-xs`, `-sm`, `-md`, `-lg`, `-xl`, `-2xl`. Icon buttons inside stay square at each size.

::html
<div class="docs-preview">
  <div class="vstack gap-3 items-start">
    <div class="btn-group btn-group-xs" role="group" aria-label="Extra small group">
      <button class="btn btn-primary" type="button">Extra small</button>
      <button class="btn btn-primary" type="button">Group</button>
      <button class="btn btn-primary btn-icon" type="button" aria-label="More"><span class="mdi mdi-dots-horizontal"></span></button>
    </div>
    <div class="btn-group btn-group-sm" role="group" aria-label="Small grouped actions">
      <button class="btn btn-primary" type="button">Small</button>
      <button class="btn btn-primary" type="button">Group</button>
      <button class="btn btn-primary btn-icon" type="button" aria-label="More"><span class="mdi mdi-dots-horizontal"></span></button>
    </div>
    <div class="btn-group btn-group-md" role="group" aria-label="Medium group">
      <button class="btn btn-primary" type="button">Medium</button>
      <button class="btn btn-primary" type="button">Group</button>
      <button class="btn btn-primary btn-icon" type="button" aria-label="More"><span class="mdi mdi-dots-horizontal"></span></button>
    </div>
    <div class="btn-group btn-group-lg" role="group" aria-label="Large grouped links">
      <a class="btn btn-outline-primary" href="#/components/buttons">Large</a>
      <a class="btn btn-outline-primary" href="#/components/button-group">Group</a>
      <a class="btn btn-outline-primary btn-icon" href="#/helpers/javascript" aria-label="More"><span class="mdi mdi-dots-horizontal"></span></a>
    </div>
    <div class="btn-group btn-group-xl" role="group" aria-label="Extra large group">
      <button class="btn btn-soft-primary" type="button">Extra large</button>
      <button class="btn btn-soft-primary" type="button">Group</button>
      <button class="btn btn-soft-primary btn-icon" type="button" aria-label="More"><span class="mdi mdi-dots-horizontal"></span></button>
    </div>
    <div class="btn-group btn-group-2xl" role="group" aria-label="2XL group">
      <button class="btn btn-soft-primary" type="button">2XL</button>
      <button class="btn btn-soft-primary" type="button">Group</button>
      <button class="btn btn-soft-primary btn-icon" type="button" aria-label="More"><span class="mdi mdi-dots-horizontal"></span></button>
    </div>
  </div>
</div>
::end

```html
<div class="btn-group btn-group-xs" role="group" aria-label="Extra small group">...</div>
<div class="btn-group btn-group-sm" role="group" aria-label="Small grouped actions">...</div>
<div class="btn-group btn-group-md" role="group" aria-label="Medium group">...</div>
<div class="btn-group btn-group-lg" role="group" aria-label="Large grouped links">...</div>
<div class="btn-group btn-group-xl" role="group" aria-label="Extra large group">...</div>
<div class="btn-group btn-group-2xl" role="group" aria-label="2XL group">...</div>
```

```js components
import { Button, ButtonGroup } from "@abydahana/aksara-ui/components";

const children = Button({ label: "Grouped" }) + Button({ label: "Actions" });

ButtonGroup({ size: "xs", ariaLabel: "Extra small group", children });
ButtonGroup({ size: "sm", ariaLabel: "Small grouped actions", children });
ButtonGroup({ size: "md", ariaLabel: "Medium group", children });
ButtonGroup({ size: "lg", ariaLabel: "Large grouped links", children });
ButtonGroup({ size: "xl", ariaLabel: "Extra large group", children });
ButtonGroup({ size: "2xl", ariaLabel: "2XL group", children });
```

---

## Vertical Group

`.btn-group-vertical` stacks the buttons and rounds only the top and bottom corners. Add `w-full` (or a width) to make every button the same width.

::html
<div class="docs-preview">
  <div class="docs-row items-start">
    <div class="btn-group-vertical" role="group" aria-label="Vertical actions">
      <button class="btn btn-soft-primary w-full" type="button">Top</button>
      <button class="btn btn-soft-primary w-full" type="button">Middle</button>
      <button class="btn btn-soft-primary w-full" type="button">Bottom</button>
    </div>
    <div class="btn-group-vertical" role="group" aria-label="Map zoom">
      <button class="btn btn-plain btn-icon" type="button" aria-label="Zoom in"><span class="mdi mdi-plus"></span></button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="Zoom out"><span class="mdi mdi-minus"></span></button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="My location"><span class="mdi mdi-crosshairs-gps"></span></button>
    </div>
    <div class="btn-group-vertical w-[14rem]" role="group" aria-label="Account menu">
      <button class="btn btn-plain w-full justify-start" type="button"><span class="mdi mdi-account-outline"></span> Profile</button>
      <button class="btn btn-plain w-full justify-start" type="button"><span class="mdi mdi-cog-outline"></span> Settings</button>
      <button class="btn btn-plain w-full justify-start" type="button"><span class="mdi mdi-credit-card-outline"></span> Billing</button>
      <button class="btn btn-plain w-full justify-start text-danger" type="button"><span class="mdi mdi-logout"></span> Sign out</button>
    </div>
    <div class="btn-group-vertical btn-group-sm" role="group" aria-label="Small vertical group">
      <button class="btn btn-outline-primary w-full" type="button">Small</button>
      <button class="btn btn-outline-primary w-full" type="button">Vertical</button>
      <button class="btn btn-outline-primary w-full" type="button">Group</button>
    </div>
  </div>
</div>
::end

```html
<div class="btn-group-vertical" role="group" aria-label="Map zoom">
  <button class="btn btn-plain btn-icon" type="button" aria-label="Zoom in"><span class="mdi mdi-plus"></span></button>
  <button class="btn btn-plain btn-icon" type="button" aria-label="Zoom out">
    <span class="mdi mdi-minus"></span>
  </button>
</div>

<!-- Equal-width stacked menu -->
<div class="btn-group-vertical w-[14rem]" role="group" aria-label="Account menu">
  <button class="btn btn-plain w-full justify-start" type="button">Profile</button>
  <button class="btn btn-plain w-full justify-start" type="button">Settings</button>
</div>
```

```js components
import { Button, ButtonGroup } from "@abydahana/aksara-ui/components";

const iconButton = (icon, label) =>
  Button({
    children: `<span class="mdi mdi-${icon}"></span>`,
    plain: true,
    className: "btn-icon",
    attributes: { "aria-label": label }
  });

ButtonGroup({
  vertical: true,
  ariaLabel: "Map zoom",
  children: iconButton("plus", "Zoom in") + iconButton("minus", "Zoom out")
});

// Equal-width stacked menu
ButtonGroup({
  vertical: true,
  ariaLabel: "Account menu",
  attributes: { style: "width: 14rem;" },
  children: ["Profile", "Settings"]
    .map((label) => Button({ label, plain: true, className: "w-full justify-start" }))
    .join("")
});
```

---

## Segmented Control

Pair each button with a visually hidden radio (`.btn-check`) to build a single-choice segmented control. The checked option fills with its color; keyboard arrows move between options like any radio group. Use checkboxes instead of radios for multi-select toggles. Because the first button is not the group's first child (its input is), add `rounded-start-sm` to the first label to keep the outer corner rounded.

::html
<div class="docs-preview">
  <div class="vstack gap-4 items-start">
    <div class="btn-group" role="group" aria-label="Billing period">
      <input class="btn-check" type="radio" name="billingPeriod" id="demoBillingMonthly" checked>
      <label class="btn btn-outline-primary rounded-start-sm" for="demoBillingMonthly">Monthly</label>
      <input class="btn-check" type="radio" name="billingPeriod" id="demoBillingQuarterly">
      <label class="btn btn-outline-primary" for="demoBillingQuarterly">Quarterly</label>
      <input class="btn-check" type="radio" name="billingPeriod" id="demoBillingYearly">
      <label class="btn btn-outline-primary" for="demoBillingYearly">Yearly</label>
    </div>

    <div class="btn-group btn-group-sm" role="group" aria-label="View mode">
      <input class="btn-check" type="radio" name="viewMode" id="viewList" checked>
      <label class="btn btn-plain rounded-start-sm" for="viewList"><span class="mdi mdi-format-list-bulleted"></span> List</label>
      <input class="btn-check" type="radio" name="viewMode" id="viewGrid">
      <label class="btn btn-plain" for="viewGrid"><span class="mdi mdi-view-grid-outline"></span> Grid</label>
      <input class="btn-check" type="radio" name="viewMode" id="viewBoard">
      <label class="btn btn-plain" for="viewBoard"><span class="mdi mdi-view-column-outline"></span> Board</label>
    </div>

    <div class="btn-group" role="group" aria-label="Text style">
      <input class="btn-check" type="checkbox" id="demoStyleBold" checked>
      <label class="btn btn-soft-primary btn-icon rounded-start-sm" for="demoStyleBold" aria-label="Bold"><span class="mdi mdi-format-bold"></span></label>
      <input class="btn-check" type="checkbox" id="demoStyleItalic">
      <label class="btn btn-soft-primary btn-icon" for="demoStyleItalic" aria-label="Italic"><span class="mdi mdi-format-italic"></span></label>
      <input class="btn-check" type="checkbox" id="demoStyleUnderline" checked>
      <label class="btn btn-soft-primary btn-icon" for="demoStyleUnderline" aria-label="Underline"><span class="mdi mdi-format-underline"></span></label>
    </div>

  </div>
</div>
::end

```html
<div class="btn-group" role="group" aria-label="Billing period">
  <input class="btn-check" type="radio" name="billingPeriod" id="billingMonthly" checked />
  <label class="btn btn-outline-primary rounded-start-sm" for="billingMonthly">Monthly</label>
  <input class="btn-check" type="radio" name="billingPeriod" id="billingQuarterly" />
  <label class="btn btn-outline-primary" for="billingQuarterly">Quarterly</label>
  <input class="btn-check" type="radio" name="billingPeriod" id="billingYearly" />
  <label class="btn btn-outline-primary" for="billingYearly">Yearly</label>
</div>

<!-- Multi-select: checkboxes -->
<div class="btn-group" role="group" aria-label="Text style">
  <input class="btn-check" type="checkbox" id="styleBold" checked />
  <label class="btn btn-soft-primary btn-icon rounded-start-sm" for="styleBold" aria-label="Bold"
    ><span class="mdi mdi-format-bold"></span
  ></label>
  <input class="btn-check" type="checkbox" id="styleItalic" />
  <label class="btn btn-soft-primary btn-icon" for="styleItalic" aria-label="Italic"
    ><span class="mdi mdi-format-italic"></span
  ></label>
</div>
```

---

## Toolbar

`.btn-toolbar` lays out several groups (and other controls) in a wrapping row with a `.5rem` gap. Give it `role="toolbar"` and a label.

::html
<div class="docs-preview">
  <div class="btn-toolbar" role="toolbar" aria-label="Editor toolbar">
    <div class="btn-group btn-group-sm" role="group" aria-label="History">
      <button class="btn btn-plain btn-icon" type="button" aria-label="Undo"><span class="mdi mdi-undo"></span></button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="Redo"><span class="mdi mdi-redo"></span></button>
    </div>
    <div class="btn-group btn-group-sm" role="group" aria-label="Formatting">
      <button class="btn btn-plain btn-icon" type="button" aria-label="Bold"><span class="mdi mdi-format-bold"></span></button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="Italic"><span class="mdi mdi-format-italic"></span></button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="Underline"><span class="mdi mdi-format-underline"></span></button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="Strikethrough"><span class="mdi mdi-format-strikethrough"></span></button>
    </div>
    <div class="btn-group btn-group-sm" role="group" aria-label="Alignment">
      <button class="btn btn-plain btn-icon" type="button" aria-label="Align left"><span class="mdi mdi-format-align-left"></span></button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="Align center"><span class="mdi mdi-format-align-center"></span></button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="Align right"><span class="mdi mdi-format-align-right"></span></button>
    </div>
    <div class="btn-group btn-group-sm" role="group" aria-label="Insert">
      <button class="btn btn-plain btn-icon" type="button" aria-label="Link"><span class="mdi mdi-link-variant"></span></button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="Image"><span class="mdi mdi-image-outline"></span></button>
      <button class="btn btn-plain btn-icon" type="button" aria-label="Code"><span class="mdi mdi-code-tags"></span></button>
    </div>
  </div>

  <div class="btn-toolbar justify-between mt-4" role="toolbar" aria-label="Table toolbar">
    <div class="input-group max-w-[16rem]">
      <span class="input-group-text"><span class="mdi mdi-magnify"></span></span>
      <input class="form-control" type="search" placeholder="Search orders" aria-label="Search orders">
    </div>
    <div class="hstack gap-2">
      <div class="btn-group" role="group" aria-label="Status filter">
        <button class="btn btn-plain" type="button">All</button>
        <button class="btn btn-plain" type="button">Paid</button>
        <button class="btn btn-plain" type="button">Refunded</button>
      </div>
      <button class="btn btn-primary" type="button"><span class="mdi mdi-plus"></span> New order</button>
    </div>
  </div>
</div>
::end

```html
<div class="btn-toolbar" role="toolbar" aria-label="Editor toolbar">
  <div class="btn-group btn-group-sm" role="group" aria-label="History">
    <button class="btn btn-plain btn-icon" type="button" aria-label="Undo"><span class="mdi mdi-undo"></span></button>
    <button class="btn btn-plain btn-icon" type="button" aria-label="Redo"><span class="mdi mdi-redo"></span></button>
  </div>
  <div class="btn-group btn-group-sm" role="group" aria-label="Formatting">
    <button class="btn btn-plain btn-icon" type="button" aria-label="Bold">
      <span class="mdi mdi-format-bold"></span>
    </button>
    <button class="btn btn-plain btn-icon" type="button" aria-label="Italic">
      <span class="mdi mdi-format-italic"></span>
    </button>
  </div>
</div>

<!-- Mixed with an input group -->
<div class="btn-toolbar justify-between" role="toolbar" aria-label="Table toolbar">
  <div class="input-group">...</div>
  <div class="btn-group" role="group" aria-label="Status filter">...</div>
</div>
```

```js components
import { Button, ButtonGroup, InputGroup } from "@abydahana/aksara-ui/components";

const iconButton = (icon, label) =>
  Button({
    children: `<span class="mdi mdi-${icon}"></span>`,
    plain: true,
    className: "btn-icon",
    attributes: { "aria-label": label }
  });

`<div class="btn-toolbar" role="toolbar" aria-label="Editor toolbar">
  ${ButtonGroup({ size: "sm", ariaLabel: "History", children: iconButton("undo", "Undo") + iconButton("redo", "Redo") })}
  ${ButtonGroup({
    size: "sm",
    ariaLabel: "Formatting",
    children: iconButton("format-bold", "Bold") + iconButton("format-italic", "Italic")
  })}
</div>`;

// Mixed with an input group
`<div class="btn-toolbar justify-between" role="toolbar" aria-label="Table toolbar">
  ${InputGroup({ children: "..." })}
  ${ButtonGroup({ ariaLabel: "Status filter", children: "..." })}
</div>`;
```

---

## Split Button

Put the main action and a caret button in one group, and point the caret at a dropdown menu placed after the group.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="docs-row">
    <div class="btn-group" role="group" aria-label="Save options">
      <button class="btn btn-primary" type="button"><span class="mdi mdi-content-save-outline"></span> Save</button>
      <button class="btn btn-primary btn-icon" type="button" data-dropdown="#splitSaveMenu" aria-label="More save options"><span class="mdi mdi-chevron-down"></span></button>
    </div>
    <div id="splitSaveMenu" class="dropdown-menu">
      <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-content-save-all-outline"></span> Save all</button>
      <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-content-copy"></span> Save as copy</button>
      <div class="dropdown-divider"></div>
      <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-clock-outline"></span> Schedule…</button>
    </div>

    <div class="btn-group" role="group" aria-label="Merge options">
      <button class="btn btn-outline-success" type="button"><span class="mdi mdi-source-merge"></span> Merge</button>
      <button class="btn btn-outline-success btn-icon" type="button" data-dropdown="#splitMergeMenu" aria-label="More merge options"><span class="mdi mdi-chevron-down"></span></button>
    </div>
    <div id="splitMergeMenu" class="dropdown-menu">
      <button class="dropdown-item" type="button">Create a merge commit</button>
      <button class="dropdown-item" type="button">Squash and merge</button>
      <button class="dropdown-item" type="button">Rebase and merge</button>
    </div>

  </div>
</div>
::end

```html
<div class="btn-group" role="group" aria-label="Save options">
  <button class="btn btn-primary" type="button">Save</button>
  <button class="btn btn-primary btn-icon" type="button" data-dropdown="#saveMenu" aria-label="More save options">
    <span class="mdi mdi-chevron-down"></span>
  </button>
</div>
<div id="saveMenu" class="dropdown-menu">
  <button class="dropdown-item" type="button">Save all</button>
  <button class="dropdown-item" type="button">Save as copy</button>
</div>
```

```js components
import { Button, ButtonGroup, DropdownItem, DropdownMenu } from "@abydahana/aksara-ui/components";

ButtonGroup({
  ariaLabel: "Save options",
  children:
    Button({ label: "Save" }) +
    Button({
      children: '<span class="mdi mdi-chevron-down"></span>',
      className: "btn-icon",
      attributes: { "data-dropdown": "#saveMenu", "aria-label": "More save options" }
    })
});
DropdownMenu({
  id: "saveMenu",
  children: DropdownItem({ content: "Save all" }) + DropdownItem({ content: "Save as copy" })
});
```

Button groups are pure CSS. The split button's menu is handled by the Dropdown component (`data-dropdown`); see the Dropdown page for its options and events.

---

## String Component

```ts
import { Button, ButtonGroup } from "@abydahana/aksara-ui/components";

ButtonGroup({
  size: "sm",
  ariaLabel: "Formatting",
  children: [Button({ label: "Bold", outline: true }), Button({ label: "Italic", outline: true })].join("")
});
// <div class="btn-group btn-group-sm" role="group" aria-label="Formatting">...</div>

ButtonGroup({ vertical: true, children: "..." });
// <div class="btn-group-vertical" role="group" aria-label="Button group">...</div>
```

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>children</code></td><td><code>string</code></td><td><code>""</code></td><td>Button HTML.</td></tr>
      <tr><td><code>size</code></td><td><code>"xs"</code> | <code>"sm"</code> | <code>"md"</code> | <code>"lg"</code> | <code>"xl"</code> | <code>"2xl"</code></td><td>—</td><td>Adds <code>.btn-group-{size}</code>.</td></tr>
      <tr><td><code>vertical</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Uses <code>.btn-group-vertical</code> instead of <code>.btn-group</code>.</td></tr>
      <tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>"Button group"</code></td><td>Accessible name of the group.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra attributes; overrides the default <code>role="group"</code>.</td></tr>
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
      <tr><td><code>.btn-group</code></td><td>Inline flex row; inner buttons lose their radius except on the outer corners and overlap borders by <code>1px</code>.</td></tr>
      <tr><td><code>.btn-group-vertical</code></td><td>Stacked column; only the top and bottom corners are rounded.</td></tr>
      <tr><td><code>.btn-group-xs</code> … <code>.btn-group-2xl</code></td><td>Sizes every button (and icon button) in the group: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>.</td></tr>
      <tr><td><code>.btn-toolbar</code></td><td>Wrapping flex row with a <code>.5rem</code> gap for several groups and controls.</td></tr>
      <tr><td><code>.btn-check</code></td><td>Visually hidden radio or checkbox; the following <code>.btn</code> shows its checked, focus and disabled state.</td></tr>
    </tbody>
  </table>
</div>
::end
