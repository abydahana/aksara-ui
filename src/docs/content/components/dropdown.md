# Dropdown Menus

Dropdowns are contextual overlays that display interactive list links or buttons when toggled, helping to gather actions, profile links, or filters into collapsible panels.

---

## Interactive Dropdown Showcase

Click the button below to toggle the menu panel. The vanilla engine handles positioning, keyboard closing (Escape key), and closing automatically when clicking outside.

::html
<div class="docs-preview" style="overflow: visible !important;">
  <div class="dropdown">
    <!-- Trigger targets #demoDropdownMenu -->
    <button class="btn btn-soft-primary hstack gap-2" data-dropdown="#demoDropdownMenu">
      Open Account Settings <span class="mdi mdi-chevron-down"></span>
    </button>

    <!-- Collapsible Menu -->
    <div id="demoDropdownMenu" class="dropdown-menu">
      <div class="dropdown-header">System Profile</div>
      <button class="dropdown-item hstack gap-2"><span class="mdi mdi-account-circle-outline"></span> Account Profile</button>
      <button class="dropdown-item active hstack gap-2"><span class="mdi mdi-cog-outline"></span> System Preferences</button>
      <div class="dropdown-divider"></div>
      <div class="dropdown-header">External Controls</div>
      <button class="dropdown-item hstack gap-2"><span class="mdi mdi-credit-card-outline"></span> Billing Plans</button>
      <button class="dropdown-item disabled hstack gap-2" disabled><span class="mdi mdi-lock-outline"></span> Admin Panel (Locked)</button>
      <div class="dropdown-divider"></div>
      <button class="dropdown-item text-danger hstack gap-2"><span class="mdi mdi-logout"></span> Sign Out</button>
    </div>

  </div>
</div>
::end

```html
<div class="dropdown">
  <!-- data-dropdown targets the menu element by ID -->
  <button class="btn btn-soft-primary" data-dropdown="#myDropdownMenu">Open Account Settings</button>

  <!-- Dropdown Menu panel -->
  <div id="myDropdownMenu" class="dropdown-menu">
    <div class="dropdown-header">Account</div>
    <button class="dropdown-item">Profile</button>
    <button class="dropdown-item active">Settings</button>
    <div class="dropdown-divider"></div>
    <button class="dropdown-item disabled" disabled>Disabled Action</button>
  </div>
</div>
```

---

## Placement Options (Top, Bottom, Start, End, Auto)

Aksara UI supports flexible placement configurations via the handler trigger using the `data-dropdown-placement` attribute. You can specify `"top"`, `"bottom"`, `"start"`, `"end"`, or `"auto"` (which dynamically switches based on available viewport space):

::html
<div class="docs-preview" style="overflow: visible !important;">
  <div class="docs-row flex-wrap gap-4">

    <!-- 1. Dropdown Top (Opens above trigger) -->
    <div class="dropdown">
      <button class="btn btn-soft-success hstack gap-2" data-dropdown="#demoDropupMenu" data-dropdown-placement="top">
        Dropdown Top <span class="mdi mdi-chevron-up"></span>
      </button>
      <div id="demoDropupMenu" class="dropdown-menu">
        <span class="dropdown-header">Profile Actions</span>
        <button class="dropdown-item hstack gap-2"><span class="mdi mdi-account-circle-outline"></span> Account Setting</button>
        <button class="dropdown-item hstack gap-2"><span class="mdi mdi-cog-outline"></span> Preference</button>
      </div>
    </div>

    <!-- 2. Dropdown Start (Opens to the start/left of trigger) -->
    <div class="dropdown">
      <button class="btn btn-soft-info hstack gap-2" data-dropdown="#demoDropstartMenu" data-dropdown-placement="start">
        <span class="mdi mdi-chevron-left"></span> Dropdown Start
      </button>
      <div id="demoDropstartMenu" class="dropdown-menu" style="min-width: 160px;">
        <span class="dropdown-header">Filter Config</span>
        <button class="dropdown-item hstack gap-2"><span class="mdi mdi-chart-box-outline"></span> Report Logs</button>
        <button class="dropdown-item hstack gap-2"><span class="mdi mdi-magnify"></span> Audit Trail</button>
      </div>
    </div>

    <!-- 3. Dropdown End (Opens to the end/right of trigger) -->
    <div class="dropdown">
      <button class="btn btn-soft-warning hstack gap-2" data-dropdown="#demoDropendMenu" data-dropdown-placement="end">
        Dropdown End <span class="mdi mdi-chevron-right"></span>
      </button>
      <div id="demoDropendMenu" class="dropdown-menu" style="min-width: 160px;">
        <span class="dropdown-header">System Tools</span>
        <button class="dropdown-item hstack gap-2"><span class="mdi mdi-cog-outline"></span> Diagnostics</button>
        <button class="dropdown-item hstack gap-2"><span class="mdi mdi-connection"></span> Integrations</button>
      </div>
    </div>

    <!-- 4. Dropdown Auto (Smart responsive placement) -->
    <div class="dropdown">
      <button class="btn btn-soft-primary hstack gap-2" data-dropdown="#demoDropautoMenu" data-dropdown-placement="auto">
        Dropdown Auto <span class="mdi mdi-unfold-more-horizontal"></span>
      </button>
      <div id="demoDropautoMenu" class="dropdown-menu">
        <span class="dropdown-header">Viewport Space</span>
        <button class="dropdown-item hstack gap-2"><span class="mdi mdi-refresh"></span> Auto Align</button>
        <button class="dropdown-item hstack gap-2"><span class="mdi mdi-ruler"></span> Viewport Clearance</button>
      </div>
    </div>

  </div>
</div>
::end

```html
<!-- Dropdown Top Variant -->
<div class="dropdown">
  <button class="btn btn-soft-success" data-dropdown="#myDropup" data-dropdown-placement="top">Dropdown Top</button>
  <div id="myDropup" class="dropdown-menu">...</div>
</div>

<!-- Dropdown Start Variant -->
<div class="dropdown">
  <button class="btn btn-soft-info" data-dropdown="#myDropstart" data-dropdown-placement="start">Dropdown Start</button>
  <div id="myDropstart" class="dropdown-menu">...</div>
</div>

<!-- Dropdown End Variant -->
<div class="dropdown">
  <button class="btn btn-soft-warning" data-dropdown="#myDropend" data-dropdown-placement="end">Dropdown End</button>
  <div id="myDropend" class="dropdown-menu">...</div>
</div>

<!-- Dropdown Auto Variant -->
<div class="dropdown">
  <button class="btn btn-soft-primary" data-dropdown="#myDropauto" data-dropdown-placement="auto">Dropdown Auto</button>
  <div id="myDropauto" class="dropdown-menu">...</div>
</div>
```

---

## Menu Layout Elements

Aksara's dropdown list structure relies on semantic item states:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">Class Name</th>
        <th style="width: 25%;">HTML Element Tag</th>
        <th style="width: 50%;">Usage & Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>dropdown-menu</code></td>
        <td><code>&lt;div&gt;</code></td>
        <td>The absolute-positioned menu overlay panel. Hidden by default.</td>
      </tr>
      <tr>
        <td><code>dropdown-item</code></td>
        <td><code>&lt;button&gt;</code> / <code>&lt;a&gt;</code></td>
        <td>An interactive item. Automatically handles padding, hovering transitions, and text alignment.</td>
      </tr>
      <tr>
        <td><code>dropdown-header</code></td>
        <td><code>&lt;div&gt;</code></td>
        <td>Muted, non-interactive heading text to categorize options.</td>
      </tr>
      <tr>
        <td><code>dropdown-divider</code></td>
        <td><code>&lt;div&gt;</code></td>
        <td>A thin, clean horizontal separator line.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

### Modifying Item States

- **Active State (`.active`)**: Highlights the item (e.g. `bg-primary text-light`).
- **Disabled State (`.disabled` or `disabled`)**: Grays out the item, blocks pointer clicks, and stops keyboard hover states.

---

## Programmatic JavaScript API

Construct or control dropdown instances manually inside your scripts.

### Initialization

```js
// Initialize programmatic triggers
const dropdown = Aksara.dropdown("#triggerBtn", {
  placement: "bottom",
  container: "body"
});
```

### Methods

- **`dropdown.show()`**: Opens the menu overlay. Returns instance.
- **`dropdown.hide()`**: Closes the menu overlay. Returns instance.
- **`dropdown.toggle()`**: Toggles dropdown visibility. Returns instance.
- **`dropdown.destroy()`**: Unbinds target click listeners and cleans registry memory.

---

## Custom Lifecycle Events

Bind listeners to trace dropdown interactions:

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
        <td><code>aksara:dropdown:show</code></td>
        <td>Dispatched when the dropdown starts/completes showing. Access instance in <code>event.detail.instance</code>.</td>
      </tr>
      <tr>
        <td><code>aksara:dropdown:hide</code></td>
        <td>Dispatched when the dropdown starts/completes hiding. Access instance in <code>event.detail.instance</code>.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

### Listening Example

```js
const menu = document.querySelector("#triggerBtn");

menu.addEventListener("aksara:dropdown:show", (event) => {
  console.log("Dropdown menu rendered!", event.detail.instance);
});
```
