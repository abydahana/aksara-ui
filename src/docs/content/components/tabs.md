# Tabs

Tabs partition complex views and content panels into logical, multi-tab layout sections that can be easily toggled.

## Interactive Tabs Showcase

Aksara UI features highly accessible, fully keyboard-navigable tab menus natively. Focus a tab menu item and tap `➔` or `←` to transition tabs instantly:

::html
<div class="docs-preview py-4">
  <div class="tabs" role="tablist" aria-label="Aksara Tabs Demo">
    <button id="tabPrimary" class="tab" data-tabs="#panelPrimary" aria-selected="true" role="tab" tabindex="0">
      Primary Accents
    </button>
    <button id="tabSecondary" class="tab" data-tabs="#panelSecondary" aria-selected="false" role="tab" tabindex="-1">
      Logical Layouts
    </button>
  </div>

  <div id="panelPrimary" class="tab-panel" role="tabpanel" aria-labelledby="tabPrimary">
    <h4 class="mt-0 mb-2 font-700">Soft UI Fills</h4>
    <p class="m-0 text-subtle text-sm">
      Aksara UI uses subtle semantic alerts, badge pill labels, outline surfaces, and translucent alpha tints.
    </p>
  </div>

  <div id="panelSecondary" class="tab-panel" role="tabpanel" aria-labelledby="tabSecondary" hidden>
    <h4 class="mt-0 mb-2 font-700">Logical Spacing</h4>
    <p class="m-0 text-subtle text-sm">
      Using start/end logical directions natively makes your website compatible with Arabic or Hebrew RTL readers out-of-the-box.
    </p>
  </div>
</div>
::end

```html
<!-- Tabs Container -->
<div class="tabs" role="tablist">
  <button class="tab" data-tabs="#panelPrimary" aria-selected="true" role="tab" tabindex="0">Primary Accents</button>
  <button class="tab" data-tabs="#panelSecondary" aria-selected="false" role="tab" tabindex="-1">
    Logical Layouts
  </button>
</div>

<!-- Tab Panel Containers -->
<div id="panelPrimary" class="tab-panel" role="tabpanel">
  <p>Panel primary contents...</p>
</div>
<div id="panelSecondary" class="tab-panel" role="tabpanel" hidden>
  <p>Panel secondary contents...</p>
</div>
```

---

## Nav Pills Tabs

Use `nav nav-pills` on the same `.tabs` container when you want pill-shaped tab navigation instead of an underlined tab row.

::html
<div class="docs-preview py-4">
  <div class="tabs nav nav-pills mb-4" role="tablist" aria-label="Pill Tabs Demo">
    <button id="pillTabOverview" class="tab" data-tabs="#pillPanelOverview" aria-selected="true" role="tab" tabindex="0">
      Overview
    </button>
    <button id="pillTabActivity" class="tab" data-tabs="#pillPanelActivity" aria-selected="false" role="tab" tabindex="-1">
      Activity
    </button>
    <button id="pillTabSettings" class="tab" data-tabs="#pillPanelSettings" aria-selected="false" role="tab" tabindex="-1">
      Settings
    </button>
  </div>

  <div id="pillPanelOverview" class="tab-panel p-4 bg-subtle rounded-12" role="tabpanel" aria-labelledby="pillTabOverview">
    <h4 class="mt-0 mb-2 font-700">Overview</h4>
    <p class="m-0 text-subtle text-sm">Pill tabs are useful for compact dashboards and filter-like navigation.</p>
  </div>

  <div id="pillPanelActivity" class="tab-panel p-4 bg-subtle rounded-12" role="tabpanel" aria-labelledby="pillTabActivity" hidden>
    <h4 class="mt-0 mb-2 font-700">Activity</h4>
    <p class="m-0 text-subtle text-sm">The same data API handles clicks, keyboard arrows, and panel visibility.</p>
  </div>

  <div id="pillPanelSettings" class="tab-panel p-4 bg-subtle rounded-12" role="tabpanel" aria-labelledby="pillTabSettings" hidden>
    <h4 class="mt-0 mb-2 font-700">Settings</h4>
    <p class="m-0 text-subtle text-sm">Use regular utilities to tune spacing, backgrounds, and panel surfaces.</p>
  </div>
</div>
::end

```html
<div class="tabs nav nav-pills" role="tablist">
  <button class="tab" data-tabs="#overview" aria-selected="true">Overview</button>
  <button class="tab" data-tabs="#activity" aria-selected="false">Activity</button>
</div>
```

---

## Technical Specifications

- **Arrow Keyboard Navigation**: Inside a `.tabs` container, keyboard users can focus an active tab and navigate seamlessly with `ArrowLeft` or `ArrowRight`. Focus wraps around the edges automatically.
- **`.tabs`**: Marks the navigation container list which binds click and key listeners.
- **`.tab`**: Individual tab buttons managing ARIA states.
- **`.nav-pills`**: Optional pill navigation modifier that can style `.tab` items.
- **`.tab-panel`**: Panels holding the actual target markup content.

---

## HTML Data API Reference

Aksara's engine binds event listeners to manage state automatically:

- Add `data-tabs="#panelId"` to your tab buttons.
- Target panels must use matching `id` attributes.

---

## Programmatic JavaScript API

Interact with tabs programmatically using standard constructors.

### Initialization

```js
// Initialize tab list keyboard navigation
const tabs = Aksara.tabs(".tabs", {
  activeIndex: 0,
  keyboard: true,
  loop: true,
  orientation: "horizontal"
});
```

### Methods

- **`tabs.show(tabElement)`**: Programmatically focuses and activates a specific tab button.

---

## Custom Lifecycle Events

Aksara dispatches bubbled events to trigger custom integrations:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 35%;">Custom Event Key</th>
        <th style="width: 65%;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>aksara:tabs:show</code></td>
        <td>Dispatched when a tab panel is shown. Detail contains: <code>{ tab, panel, instance }</code>.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

### Listening Example

```js
const tabContainer = document.querySelector(".tabs");

tabContainer.addEventListener("aksara:tabs:show", (event) => {
  console.log("Tab Swapped!", event.detail.tab);
  console.log("Activated Panel:", event.detail.panel);
});
```
