# Bottom Sheet

A panel that slides up from the bottom of the screen: menus, actions and settings on phones, floating centered panels on larger screens. Rows can open **sub-sheets** that stack on top, the way GitHub and iOS apps do it: the sheet behind shrinks and dims, the new one slides up, and back, a swipe down or Escape returns one level. Swipe the handle down or tap the backdrop to dismiss the top sheet; on the root sheet that closes it.

---

## Basic Sheet

A `.sheet` root holds one or more `.sheet-panel`s. Open it with `data-sheet="#id"` on any button. Links inside close the sheet when chosen; `data-sheet-close` closes it explicitly.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-primary" type="button" data-sheet="#sheetBasic"><span class="mdi mdi-dots-horizontal"></span> Open actions</button>
  </div>

  <div id="sheetBasic" class="sheet">
    <div class="sheet-panel" aria-labelledby="sheetBasicTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <h2 id="sheetBasicTitle" class="sheet-title">Website redesign<span class="sheet-subtitle">Updated 2 hours ago</span></h2>
        <button class="btn-close" type="button" data-sheet-close aria-label="Close"></button>
      </div>
      <div class="sheet-body">
        <button class="sheet-item" type="button" data-sheet-close><span class="sheet-item-icon mdi mdi-pencil-outline"></span><span class="sheet-item-label">Rename</span></button>
        <button class="sheet-item" type="button" data-sheet-close><span class="sheet-item-icon mdi mdi-content-copy"></span><span class="sheet-item-label">Duplicate</span></button>
        <button class="sheet-item" type="button" data-sheet-close><span class="sheet-item-icon mdi mdi-share-variant-outline"></span><span class="sheet-item-label">Share</span><span class="sheet-item-meta">3 people</span></button>
        <button class="sheet-item" type="button" data-sheet-close><span class="sheet-item-icon mdi mdi-archive-outline"></span><span class="sheet-item-label">Archive</span></button>
        <div class="sheet-divider"></div>
        <button class="sheet-item sheet-item-danger" type="button" data-sheet-close><span class="sheet-item-icon mdi mdi-trash-can-outline"></span><span class="sheet-item-label">Delete project</span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<button class="btn btn-primary" data-sheet="#projectSheet">Open actions</button>

<div id="projectSheet" class="sheet">
  <div class="sheet-panel" aria-labelledby="projectSheetTitle">
    <div class="sheet-handle"></div>
    <div class="sheet-header">
      <h2 id="projectSheetTitle" class="sheet-title">Website redesign</h2>
      <button class="btn-close" data-sheet-close aria-label="Close"></button>
    </div>
    <div class="sheet-body">
      <button class="sheet-item">
        <span class="sheet-item-icon mdi mdi-pencil-outline"></span><span class="sheet-item-label">Rename</span>
      </button>
      <div class="sheet-divider"></div>
      <button class="sheet-item sheet-item-danger">
        <span class="sheet-item-icon mdi mdi-trash-can-outline"></span
        ><span class="sheet-item-label">Delete project</span>
      </button>
    </div>
  </div>
</div>
```

```js components
import { BottomSheet, SheetPanel, SheetItem } from "@abydahana/aksara-ui/components";

BottomSheet({
  id: "projectSheet",
  panels: [
    SheetPanel({
      id: "projectPanel",
      title: "Website redesign",
      body:
        SheetItem({ label: "Rename", icon: "pencil-outline" }) +
        SheetItem({ label: "Delete project", icon: "trash-can-outline", danger: true })
    })
  ]
});
```

---

## Sub-sheets

Give each extra panel an `id` and point a row at it with `data-sheet-push="#panelId"`; the row gets a chevron. Sub-panels use a `.sheet-back` button (`data-sheet-back`). Sheets can nest as deep as you need.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-plain" type="button" data-sheet="#sheetSettings"><span class="mdi mdi-cog-outline"></span> Settings</button>
  </div>

  <div id="sheetSettings" class="sheet">
    <div class="sheet-panel" aria-labelledby="ssRootTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <h2 id="ssRootTitle" class="sheet-title">Settings</h2>
        <button class="btn-close" type="button" data-sheet-close aria-label="Close"></button>
      </div>
      <div class="sheet-body">
        <div class="sheet-section-title">Account</div>
        <button class="sheet-item" type="button" data-sheet-push="#ssProfile"><span class="sheet-item-icon mdi mdi-account-outline"></span><span class="sheet-item-label">Profile<span class="sheet-item-text">Name, photo, bio</span></span><span class="sheet-item-chevron mdi mdi-chevron-right"></span></button>
        <button class="sheet-item" type="button" data-sheet-push="#ssNotify"><span class="sheet-item-icon mdi mdi-bell-outline"></span><span class="sheet-item-label">Notifications</span><span class="sheet-item-meta">On</span><span class="sheet-item-chevron mdi mdi-chevron-right"></span></button>
        <button class="sheet-item" type="button" data-sheet-push="#ssPrivacy"><span class="sheet-item-icon mdi mdi-lock-outline"></span><span class="sheet-item-label">Privacy</span><span class="sheet-item-chevron mdi mdi-chevron-right"></span></button>
        <div class="sheet-section-title">App</div>
        <button class="sheet-item" type="button" data-sheet-push="#ssAppearance"><span class="sheet-item-icon mdi mdi-palette-outline"></span><span class="sheet-item-label">Appearance</span><span class="sheet-item-meta">System</span><span class="sheet-item-chevron mdi mdi-chevron-right"></span></button>
      </div>
    </div>

    <div id="ssProfile" class="sheet-panel" aria-labelledby="ssProfileTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <button class="sheet-back" type="button" data-sheet-back aria-label="Back"><span class="mdi mdi-chevron-left"></span></button>
        <h2 id="ssProfileTitle" class="sheet-title">Profile</h2>
      </div>
      <div class="sheet-body px-[1rem]">
        <div class="vstack gap-3">
          <div><label class="form-label" for="ssName">Display name</label><input id="ssName" class="form-control" value="Grace Lee" /></div>
          <div><label class="form-label" for="ssBio">Bio</label><textarea id="ssBio" class="form-control" rows="2">Product designer in Manchester.</textarea></div>
        </div>
      </div>
      <div class="sheet-footer">
        <button class="btn btn-plain" type="button" data-sheet-back>Cancel</button>
        <button class="btn btn-primary" type="button" data-sheet-back>Save</button>
      </div>
    </div>

    <div id="ssNotify" class="sheet-panel" aria-labelledby="ssNotifyTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <button class="sheet-back" type="button" data-sheet-back aria-label="Back"><span class="mdi mdi-chevron-left"></span></button>
        <h2 id="ssNotifyTitle" class="sheet-title">Notifications</h2>
      </div>
      <div class="sheet-body">
        <label class="sheet-item"><span class="sheet-item-icon mdi mdi-cellphone"></span><span class="sheet-item-label">Push</span><span class="form-switch"><input type="checkbox" role="switch" checked aria-label="Push" /></span></label>
        <label class="sheet-item"><span class="sheet-item-icon mdi mdi-email-outline"></span><span class="sheet-item-label">Email</span><span class="form-switch"><input type="checkbox" role="switch" checked aria-label="Email" /></span></label>
        <button class="sheet-item" type="button" data-sheet-push="#ssFrequency"><span class="sheet-item-icon mdi mdi-clock-outline"></span><span class="sheet-item-label">Email frequency</span><span class="sheet-item-meta">Daily</span><span class="sheet-item-chevron mdi mdi-chevron-right"></span></button>
      </div>
    </div>

    <div id="ssFrequency" class="sheet-panel" aria-labelledby="ssFrequencyTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <button class="sheet-back" type="button" data-sheet-back aria-label="Back"><span class="mdi mdi-chevron-left"></span></button>
        <h2 id="ssFrequencyTitle" class="sheet-title">Email frequency</h2>
      </div>
      <div class="sheet-body">
        <label class="sheet-item"><span class="sheet-item-label">Instantly</span><span class="form-radio"><input type="radio" name="ssFreq" aria-label="Instantly" /></span></label>
        <label class="sheet-item"><span class="sheet-item-label">Daily digest</span><span class="form-radio"><input type="radio" name="ssFreq" checked aria-label="Daily digest" /></span></label>
        <label class="sheet-item"><span class="sheet-item-label">Weekly digest</span><span class="form-radio"><input type="radio" name="ssFreq" aria-label="Weekly digest" /></span></label>
      </div>
    </div>

    <div id="ssPrivacy" class="sheet-panel" aria-labelledby="ssPrivacyTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <button class="sheet-back" type="button" data-sheet-back aria-label="Back"><span class="mdi mdi-chevron-left"></span></button>
        <h2 id="ssPrivacyTitle" class="sheet-title">Privacy</h2>
      </div>
      <div class="sheet-body">
        <label class="sheet-item"><span class="sheet-item-label">Private profile<span class="sheet-item-text">Only followers see your activity</span></span><span class="form-switch"><input type="checkbox" role="switch" aria-label="Private profile" /></span></label>
        <button class="sheet-item" type="button"><span class="sheet-item-label">Blocked accounts</span><span class="sheet-item-meta">2</span><span class="sheet-item-chevron mdi mdi-chevron-right"></span></button>
      </div>
    </div>

    <div id="ssAppearance" class="sheet-panel" aria-labelledby="ssAppearanceTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <button class="sheet-back" type="button" data-sheet-back aria-label="Back"><span class="mdi mdi-chevron-left"></span></button>
        <h2 id="ssAppearanceTitle" class="sheet-title">Appearance</h2>
      </div>
      <div class="sheet-body">
        <label class="sheet-item"><span class="sheet-item-icon mdi mdi-white-balance-sunny"></span><span class="sheet-item-label">Light</span><span class="form-radio"><input type="radio" name="ssTheme" aria-label="Light" /></span></label>
        <label class="sheet-item"><span class="sheet-item-icon mdi mdi-weather-night"></span><span class="sheet-item-label">Dark</span><span class="form-radio"><input type="radio" name="ssTheme" aria-label="Dark" /></span></label>
        <label class="sheet-item"><span class="sheet-item-icon mdi mdi-theme-light-dark"></span><span class="sheet-item-label">System</span><span class="form-radio"><input type="radio" name="ssTheme" checked aria-label="System" /></span></label>
      </div>
    </div>

  </div>
</div>
::end

```html
<div id="settingsSheet" class="sheet">
  <!-- Root panel -->
  <div class="sheet-panel">
    <div class="sheet-handle"></div>
    <div class="sheet-header">
      <h2 class="sheet-title">Settings</h2>
      <button class="btn-close" data-sheet-close aria-label="Close"></button>
    </div>
    <div class="sheet-body">
      <button class="sheet-item" data-sheet-push="#notifyPanel">
        <span class="sheet-item-icon mdi mdi-bell-outline"></span>
        <span class="sheet-item-label">Notifications</span>
        <span class="sheet-item-meta">On</span>
        <span class="sheet-item-chevron mdi mdi-chevron-right"></span>
      </button>
    </div>
  </div>

  <!-- Sub-sheet -->
  <div id="notifyPanel" class="sheet-panel">
    <div class="sheet-handle"></div>
    <div class="sheet-header">
      <button class="sheet-back" data-sheet-back aria-label="Back"><span class="mdi mdi-chevron-left"></span></button>
      <h2 class="sheet-title">Notifications</h2>
    </div>
    <div class="sheet-body">...</div>
  </div>
</div>
```

```js components
import { BottomSheet, SheetPanel, SheetItem } from "@abydahana/aksara-ui/components";

BottomSheet({
  id: "settingsSheet",
  panels: [
    SheetPanel({
      title: "Settings",
      body: SheetItem({ label: "Notifications", icon: "bell-outline", meta: "On", push: "#notifyPanel" })
    }),
    SheetPanel({ id: "notifyPanel", title: "Notifications", back: true, body: "..." })
  ]
});
```

---

## Icon Menu

`.sheet-grid` lays out icon tiles four per row, like a phone home screen: launchers, share sheets, quick actions. Add `bg-text-{color}` to a `.sheet-grid-icon` for a solid app-style tile, or `text-{color}` for a soft tint. Labels stay on one line with an ellipsis. Mix grids and rows in one sheet.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-plain" type="button" data-sheet="#sheetApps"><span class="mdi mdi-apps"></span> Apps</button>
    <button class="btn btn-plain" type="button" data-sheet="#sheetShare"><span class="mdi mdi-share-variant-outline"></span> Share</button>
    <button class="btn btn-plain" type="button" data-sheet="#sheetLauncher"><span class="mdi mdi-cellphone"></span> Phone launcher</button>
  </div>

  <div id="sheetApps" class="sheet">
    <div class="sheet-panel" aria-labelledby="sheetAppsTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <h2 id="sheetAppsTitle" class="sheet-title">Create new</h2>
        <button class="btn-close" type="button" data-sheet-close aria-label="Close"></button>
      </div>
      <div class="sheet-body">
        <div class="sheet-grid">
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon text-primary mdi mdi-file-document-outline"></span><span class="sheet-grid-label">Document</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon text-success mdi mdi-table"></span><span class="sheet-grid-label">Sheet</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon text-warning mdi mdi-presentation"></span><span class="sheet-grid-label">Slides</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon text-info mdi mdi-form-select"></span><span class="sheet-grid-label">Form</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon text-danger mdi mdi-video-outline"></span><span class="sheet-grid-label">Meeting</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon text-secondary mdi mdi-folder-outline"></span><span class="sheet-grid-label">Folder</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon text-success mdi mdi-calendar-blank-outline"></span><span class="sheet-grid-label">Event</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon text-primary mdi mdi-upload-outline"></span><span class="sheet-grid-label">Upload</span></button>
        </div>
        <div class="sheet-divider"></div>
        <button class="sheet-item" type="button" data-sheet-close><span class="sheet-item-icon mdi mdi-view-grid-plus-outline"></span><span class="sheet-item-label">From a template<span class="sheet-item-text">Start with 120+ layouts</span></span><span class="sheet-item-chevron mdi mdi-chevron-right"></span></button>
      </div>
    </div>
  </div>

  <div id="sheetShare" class="sheet">
    <div class="sheet-panel" aria-labelledby="sheetShareTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <h2 id="sheetShareTitle" class="sheet-title">Share “Q4 plan”</h2>
        <button class="btn-close" type="button" data-sheet-close aria-label="Close"></button>
      </div>
      <div class="sheet-body">
        <div class="sheet-grid">
          <button class="sheet-grid-item" type="button"><span class="sheet-grid-icon text-success mdi mdi-whatsapp"></span><span class="sheet-grid-label">WhatsApp</span></button>
          <button class="sheet-grid-item" type="button"><span class="sheet-grid-icon text-info mdi mdi-send"></span><span class="sheet-grid-label">Telegram</span></button>
          <button class="sheet-grid-item" type="button"><span class="sheet-grid-icon text-primary mdi mdi-email-outline"></span><span class="sheet-grid-label">Email</span></button>
          <button class="sheet-grid-item" type="button"><span class="sheet-grid-icon text-secondary mdi mdi-message-text-outline"></span><span class="sheet-grid-label">Messages</span></button>
        </div>
        <div class="sheet-divider"></div>
        <button class="sheet-item" type="button" data-sheet-close><span class="sheet-item-icon mdi mdi-link-variant"></span><span class="sheet-item-label">Copy link</span></button>
        <button class="sheet-item" type="button" data-sheet-close><span class="sheet-item-icon mdi mdi-qrcode"></span><span class="sheet-item-label">Show QR code</span></button>
      </div>
    </div>
  </div>
  <div id="sheetLauncher" class="sheet">
    <div class="sheet-panel" aria-labelledby="sheetLauncherTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <h2 id="sheetLauncherTitle" class="sheet-title">All apps<span class="sheet-subtitle">Solid tiles with <code>bg-text-{color}</code></span></h2>
        <button class="btn-close" type="button" data-sheet-close aria-label="Close"></button>
      </div>
      <div class="sheet-body">
        <div class="sheet-grid">
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-success mdi mdi-message-text"></span><span class="sheet-grid-label">Messages</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-dark mdi mdi-camera"></span><span class="sheet-grid-label">Camera</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-warning mdi mdi-image-multiple"></span><span class="sheet-grid-label">Photos</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-danger mdi mdi-calendar-month"></span><span class="sheet-grid-label">Calendar</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-info mdi mdi-email"></span><span class="sheet-grid-label">Mail</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-success mdi mdi-map-marker"></span><span class="sheet-grid-label">Maps</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-info mdi mdi-weather-partly-cloudy"></span><span class="sheet-grid-label">Weather forecast</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-danger mdi mdi-music"></span><span class="sheet-grid-label">Music</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-dark mdi mdi-wallet"></span><span class="sheet-grid-label">Wallet &amp; payments</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-warning mdi mdi-note-text"></span><span class="sheet-grid-label">Notes</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-secondary mdi mdi-clock-outline"></span><span class="sheet-grid-label">Clock</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-secondary mdi mdi-cog"></span><span class="sheet-grid-label">Settings</span></button>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- Phone-style tiles: bg-text-{color} gives a solid fill with a readable glyph -->
<div class="sheet-grid">
  <button class="sheet-grid-item">
    <span class="sheet-grid-icon bg-text-success mdi mdi-message-text"></span>
    <span class="sheet-grid-label">Messages</span>
  </button>
  <button class="sheet-grid-item">
    <span class="sheet-grid-icon bg-text-info mdi mdi-weather-partly-cloudy"></span>
    <span class="sheet-grid-label">Weather forecast</span>
  </button>
</div>
```

```js components
import { SheetGrid } from "@abydahana/aksara-ui/components";

SheetGrid({
  solid: true,
  items: [
    { label: "Messages", icon: "message-text", color: "success" },
    { label: "Weather forecast", icon: "weather-partly-cloudy", color: "info" }
  ]
});
```

Labels stay on one line and end with an ellipsis when they are too long. Use `sheet-grid-3` or `sheet-grid-5` (or `columns: 3 | 5`) for a different number of tiles per row.

---

## Tinted Icon Grid

The "Apps" and "Share" sheets above use tinted tiles: `text-{color}` alone colors the glyph and a soft fill.

```html
<div class="sheet-grid">
  <button class="sheet-grid-item">
    <span class="sheet-grid-icon text-primary mdi mdi-file-document-outline"></span>
    <span class="sheet-grid-label">Document</span>
  </button>
  ...
</div>
```

```js components
import { SheetGrid } from "@abydahana/aksara-ui/components";

SheetGrid({
  items: [
    { label: "Document", icon: "file-document-outline", color: "primary" },
    { label: "Sheet", icon: "table", color: "success" },
    { label: "Slides", icon: "presentation", color: "warning" },
    { label: "Meeting", icon: "video-outline", color: "danger" }
  ]
});
```

---

## User Pill With Account Sheet

`.user-pill` is an avatar, name and handle in a rounded trigger, typically at the bottom of a sidebar or in a header. Put `data-sheet` on it to open an account sheet; a sub-sheet switches accounts.

::html
<div class="docs-preview">
  <div class="max-w-[280px]">
    <div class="user-pill" data-sheet="#sheetAccount">
      <button type="button" class="user-pill-trigger" aria-haspopup="dialog">
        <span class="avatar avatar-md avatar-primary rounded-full user-pill-avatar">GL</span>
        <span class="user-pill-meta">
          <span class="user-pill-name">Grace Lee</span>
          <span class="user-pill-handle">@grace · Pro</span>
        </span>
        <span class="mdi mdi-unfold-more-horizontal user-pill-dots"></span>
      </button>
    </div>
  </div>

  <div id="sheetAccount" class="sheet">
    <div class="sheet-panel" aria-labelledby="saTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-body [padding-top:.5rem]">
        <div class="hstack gap-3 p-[.5rem_.75rem_1rem]">
          <span class="avatar avatar-lg avatar-primary rounded-full">GL</span>
          <div class="min-w-[0]">
            <div id="saTitle" class="fw-semibold">Grace Lee</div>
            <div class="text-subtle text-sm">grace@studio.example.com</div>
          </div>
          <span class="badge badge-soft-primary ms-[auto]">Pro</span>
        </div>
        <div class="sheet-grid">
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-primary mdi mdi-account-outline"></span><span class="sheet-grid-label">Profile</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-dark mdi mdi-source-repository"></span><span class="sheet-grid-label">Repositories</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-info mdi mdi-view-dashboard-outline"></span><span class="sheet-grid-label">Projects</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-warning mdi mdi-star-outline"></span><span class="sheet-grid-label">Starred</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-success mdi mdi-domain"></span><span class="sheet-grid-label">Organizations</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-danger mdi mdi-bell-outline"></span><span class="sheet-grid-label">Notification preferences</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-secondary mdi mdi-cog-outline"></span><span class="sheet-grid-label">Settings</span></button>
          <button class="sheet-grid-item" type="button" data-sheet-close><span class="sheet-grid-icon bg-text-info mdi mdi-lifebuoy"></span><span class="sheet-grid-label">Help &amp; support center</span></button>
        </div>
        <div class="sheet-divider"></div>
        <button class="sheet-item" type="button" data-sheet-push="#saSwitch"><span class="sheet-item-icon mdi mdi-account-switch-outline"></span><span class="sheet-item-label">Switch account</span><span class="sheet-item-chevron mdi mdi-chevron-right"></span></button>
        <div class="sheet-divider"></div>
        <button class="sheet-item sheet-item-danger" type="button" data-sheet-close><span class="sheet-item-icon mdi mdi-logout"></span><span class="sheet-item-label">Sign out</span></button>
      </div>
    </div>
    <div id="saSwitch" class="sheet-panel" aria-labelledby="saSwitchTitle">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <button class="sheet-back" type="button" data-sheet-back aria-label="Back"><span class="mdi mdi-chevron-left"></span></button>
        <h2 id="saSwitchTitle" class="sheet-title">Switch account</h2>
      </div>
      <div class="sheet-body">
        <button class="sheet-item active" type="button" data-sheet-close><span class="avatar avatar-sm avatar-primary rounded-full">GL</span><span class="sheet-item-label">Grace Lee<span class="sheet-item-text">Personal</span></span><span class="mdi mdi-check"></span></button>
        <button class="sheet-item" type="button" data-sheet-close><span class="avatar avatar-sm avatar-success rounded-full">SM</span><span class="sheet-item-label">Studio Manchester<span class="sheet-item-text">Team · 12 members</span></span></button>
        <button class="sheet-item" type="button" data-sheet-close><span class="sheet-item-icon mdi mdi-plus"></span><span class="sheet-item-label">Add account</span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="user-pill" data-sheet="#accountSheet">
  <button type="button" class="user-pill-trigger" aria-haspopup="dialog">
    <span class="avatar avatar-md avatar-primary rounded-full user-pill-avatar">GL</span>
    <span class="user-pill-meta">
      <span class="user-pill-name">Grace Lee</span>
      <span class="user-pill-handle">@grace · Pro</span>
    </span>
    <span class="mdi mdi-unfold-more-horizontal user-pill-dots"></span>
  </button>
</div>
```

```js components
import { UserPill } from "@abydahana/aksara-ui/components";

// Opens a bottom sheet
UserPill({ name: "Grace Lee", handle: "grace", initials: "GL", attributes: { "data-sheet": "#accountSheet" } });

// Or an inline menu above the pill (toggled by the runtime)
UserPill({
  name: "Grace Lee",
  handle: "grace",
  initials: "GL",
  menuHtml: "<a class='dropdown-item' href='/profile'>Profile</a>"
});
```

---

## Options

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Option</th><th>Attribute</th><th>Default</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>backdrop</code></td><td><code>data-sheet-backdrop</code></td><td><code>true</code></td><td><code>true</code>: a backdrop tap dismisses the top sheet (one level, like a swipe or Escape). <code>"static"</code>: the sheet bounces instead. <code>false</code>: nothing happens.</td></tr>
      <tr><td><code>keyboard</code></td><td><code>data-sheet-keyboard</code></td><td><code>true</code></td><td>Escape goes back one level (and closes the last).</td></tr>
      <tr><td><code>swipe</code></td><td><code>data-sheet-swipe</code></td><td><code>true</code></td><td>Drag the handle or header down to dismiss; on touch, the body too when scrolled to the top.</td></tr>
      <tr><td><code>scrollLock</code></td><td><code>data-sheet-scroll-lock</code></td><td><code>true</code></td><td>Lock page scrolling while open.</td></tr>
    </tbody>
  </table>
</div>
::end

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Attribute</th><th>On</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>data-sheet="#id"</code></td><td>Any trigger</td><td>Opens (or closes) the sheet. Add <code>data-sheet-panel="#panel"</code> to open directly on a sub-sheet.</td></tr>
      <tr><td><code>data-sheet-push="#panel"</code></td><td>Inside the sheet</td><td>Slides a sub-sheet over the current one.</td></tr>
      <tr><td><code>data-sheet-back</code></td><td>Inside the sheet</td><td>Back one level.</td></tr>
      <tr><td><code>data-sheet-close</code></td><td>Inside the sheet</td><td>Closes the whole sheet.</td></tr>
      <tr><td><code>data-sheet-keep</code></td><td>Links inside</td><td>Keep the sheet open when the link is chosen.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## JavaScript API

```js
const sheet = Aksara.sheet("#settingsSheet", { backdrop: "static" });

sheet.show(); // open on the first panel
sheet.show("#notifyPanel"); // open directly on a panel
sheet.push("#frequencyPanel"); // stack a sub-sheet
sheet.back(); // one level back (closes on the last)
sheet.hide(); // close everything
sheet.isOpen; // boolean
sheet.stack; // open panels, bottom to top

document.querySelector("#settingsSheet").addEventListener("aksara:sheet:push", (event) => {
  console.log("Now showing", event.detail.panel.id, "at depth", event.detail.depth);
});
```

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Event</th><th>Detail</th></tr></thead>
    <tbody>
      <tr><td><code>aksara:sheet:show</code></td><td><code>{ instance, panel }</code></td></tr>
      <tr><td><code>aksara:sheet:push</code></td><td><code>{ instance, panel, depth }</code></td></tr>
      <tr><td><code>aksara:sheet:back</code></td><td><code>{ instance, panel, depth }</code></td></tr>
      <tr><td><code>aksara:sheet:hide</code></td><td><code>{ instance }</code></td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Class</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><code>sheet</code></td><td>Root and backdrop.</td></tr>
      <tr><td><code>sheet-panel</code></td><td>One sheet; the first is the root, others are sub-sheets. Max width via <code>--aksara-sheet-width</code> (36rem); floats above the bottom edge from <code>md</code> up.</td></tr>
      <tr><td><code>sheet-handle</code>, <code>sheet-header</code>, <code>sheet-title</code>, <code>sheet-subtitle</code>, <code>sheet-back</code></td><td>Top area; handle and header are drag targets.</td></tr>
      <tr><td><code>sheet-body</code>, <code>sheet-footer</code></td><td>Scrolling content and a sticky action row.</td></tr>
      <tr><td><code>sheet-item</code>, <code>sheet-item-icon</code>, <code>sheet-item-label</code>, <code>sheet-item-text</code>, <code>sheet-item-meta</code>, <code>sheet-item-chevron</code>, <code>sheet-item-danger</code></td><td>Menu rows.</td></tr>
      <tr><td><code>sheet-section-title</code>, <code>sheet-divider</code></td><td>Grouping.</td></tr>
      <tr><td><code>sheet-grid</code>, <code>sheet-grid-item</code>, <code>sheet-grid-icon</code>, <code>sheet-grid-label</code></td><td>Icon tiles.</td></tr>
      <tr><td><code>user-pill</code>, <code>user-pill-trigger</code>, <code>user-pill-avatar</code>, <code>user-pill-meta</code>, <code>user-pill-name</code>, <code>user-pill-handle</code>, <code>user-pill-dots</code>, <code>user-pill-menu</code></td><td>User pill.</td></tr>
    </tbody>
  </table>
</div>
::end
