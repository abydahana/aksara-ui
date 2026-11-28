# Option Picker

The option picker is a small centered dialog with a list of choices: each option has an icon, a label, an optional description and badge, and a check on the current value. It is the touch-friendly alternative to a dropdown for sort orders, languages, visibility settings and action lists. Picking an option marks it, fires `aksara:picker:select` and closes the dialog. For one-off questions, `Aksara.pick()` builds a picker on the fly and resolves with the chosen value.

::html
<div class="docs-preview">
  <div class="card max-w-[30rem] w-full">
    <div class="card-header hstack justify-between">
      <span class="fw-semibold">Projects</span>
      <button class="btn btn-plain btn-sm" type="button" data-modal="#sortPicker"><span class="mdi mdi-sort"></span> Sort: Newest first</button>
    </div>
    <div class="list-group list-group-flush">
      <div class="list-group-item hstack justify-between"><span class="text-sm fw-semibold">Checkout redesign</span><span class="text-xs text-subtle">Today</span></div>
      <div class="list-group-item hstack justify-between"><span class="text-sm fw-semibold">Billing API v2</span><span class="text-xs text-subtle">Yesterday</span></div>
      <div class="list-group-item hstack justify-between"><span class="text-sm fw-semibold">Onboarding emails</span><span class="text-xs text-subtle">12 Nov</span></div>
    </div>
  </div>
  <div class="modal picker-modal" id="sortPicker" tabindex="-1" aria-hidden="true" aria-labelledby="sortPicker-title" data-modal-draggable="false">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
  <div class="modal-header">
  <div class="picker-heading">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-sort"></span></span>
  <div class="picker-heading-text">
  <h5 id="sortPicker-title" class="modal-title m-0">Sort projects</h5>
  <div class="picker-subtitle">Applies to this list only</div>
  </div>
  </div>
  <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
  </div>
  <div class="modal-body"><div class="picker-list" role="listbox" aria-labelledby="sortPicker-title"><button class="picker-option is-selected" type="button" role="option" aria-selected="true" data-picker-value="newest">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-clock-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Newest first</span><span class="picker-option-desc">Most recently created at the top</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="oldest">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-history"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Oldest first</span><span class="picker-option-desc">Oldest projects at the top</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="activity">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-pulse"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Recent activity</span><span class="picker-option-desc">Last comment, commit or upload</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="name">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-sort-alphabetical-ascending"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Name (A–Z)</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="budget">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-cash-multiple"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Budget (high to low)</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button></div></div>
  <div class="modal-footer"><button class="btn btn-plain btn-sm" type="button" data-modal-close="">Cancel</button></div>
  </div>
  </div>
  </div>
</div>
::end

```html
<button class="btn btn-plain btn-sm" type="button" data-modal="#sortPicker">Sort: Newest first</button>

<div
  class="modal picker-modal"
  id="sortPicker"
  tabindex="-1"
  aria-hidden="true"
  aria-labelledby="sortPicker-title"
  data-modal-draggable="false"
>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <div class="picker-heading">
          <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-sort"></span></span>
          <div class="picker-heading-text">
            <h5 id="sortPicker-title" class="modal-title m-0">Sort projects</h5>
            <div class="picker-subtitle">Applies to this list only</div>
          </div>
        </div>
        <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="picker-list" role="listbox" aria-labelledby="sortPicker-title">
          <button
            class="picker-option is-selected"
            type="button"
            role="option"
            aria-selected="true"
            data-picker-value="newest"
          >
            <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-clock-outline"></span></span>
            <span class="picker-option-text">
              <span class="picker-option-label">Newest first</span>
              <span class="picker-option-desc">Most recently created at the top</span>
            </span>
            <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
          </button>
          <button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="oldest">
            …
          </button>
          …
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-plain btn-sm" type="button" data-modal-close>Cancel</button>
      </div>
    </div>
  </div>
</div>
```

```js components
import { OptionPickerModal } from "@abydahana/aksara-ui/components";

OptionPickerModal({
  id: "sortPicker",
  title: "Sort projects",
  subtitle: "Applies to this list only",
  icon: "sort",
  selectedValue: "newest",
  options: [
    { value: "newest", label: "Newest first", icon: "clock-outline", description: "Most recently created at the top" },
    { value: "oldest", label: "Oldest first", icon: "history", description: "Oldest projects at the top" },
    { value: "activity", label: "Recent activity", icon: "pulse", description: "Last comment, commit or upload" },
    { value: "name", label: "Name (A–Z)", icon: "sort-alphabetical-ascending" },
    { value: "budget", label: "Budget (high to low)", icon: "cash-multiple" }
  ]
});
```

Open the picker with `data-modal="#id"` like any modal. React to the choice with the `aksara:picker:select` event; the picker has already moved the check mark and closed itself:

```js
const picker = document.querySelector("#sortPicker");
const trigger = document.querySelector('[data-modal="#sortPicker"]');

picker.addEventListener("aksara:picker:select", (event) => {
  const { value, label } = event.detail; // "activity", "Recent activity"
  trigger.lastChild.textContent = ` Sort: ${label}`;
  loadProjects({ sort: value });
});
```

---

## Anatomy

- `.picker-heading` in the modal header holds a `.picker-option-icon` circle and the title, with an optional `.picker-subtitle`. Long titles and subtitles truncate with an ellipsis.
- `.picker-list` (`role="listbox"`) holds the options. Each `.picker-option` is a `<button role="option">` with `data-picker-value`.
- Inside an option: `.picker-option-icon`, `.picker-option-text` (with `.picker-option-label` and an optional `.picker-option-desc`), an optional badge, and `.picker-option-check`.
- `.is-selected` plus `aria-selected="true"` marks the current value: the icon circle fills with the primary color and the check appears.
- The footer has a plain Cancel button (`data-modal-close`). The dialog is never draggable (`data-modal-draggable="false"`).

---

## Descriptions and Badges

Use `description` for a second line of help text and `badge` for a short pill at the end of the row. `badgeVariant` picks the soft badge color (`primary`, `secondary`, `tertiary`, `success`, `danger`, `warning`, `info`, `dark`, `light`; anything else falls back to `secondary`).

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-secondary" type="button" data-modal="#languagePicker"><span class="mdi mdi-translate"></span> English (US)</button>
  </div>
  <div class="modal picker-modal" id="languagePicker" tabindex="-1" aria-hidden="true" aria-labelledby="languagePicker-title" data-modal-draggable="false">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
  <div class="modal-header">
  <div class="picker-heading">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-translate"></span></span>
  <div class="picker-heading-text">
  <h5 id="languagePicker-title" class="modal-title m-0">Language</h5>
  <div class="picker-subtitle">Used for menus, emails and invoices</div>
  </div>
  </div>
  <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
  </div>
  <div class="modal-body"><div class="picker-list" role="listbox" aria-labelledby="languagePicker-title"><button class="picker-option is-selected" type="button" role="option" aria-selected="true" data-picker-value="en-US">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-alpha-e-circle-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">English (US)</span><span class="picker-option-desc">Fully translated</span></span>
  <span class="badge badge-soft-secondary rounded-pill">Default</span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="en-GB">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-alpha-e-circle-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">English (UK)</span><span class="picker-option-desc">Fully translated</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="fr">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-alpha-f-circle-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">French</span><span class="picker-option-desc">98% translated</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="de">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-alpha-d-circle-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">German</span><span class="picker-option-desc">94% translated</span></span>
  <span class="badge badge-soft-success rounded-pill">New</span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="ja">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-alpha-j-circle-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Japanese</span><span class="picker-option-desc">Machine translated, under review</span></span>
  <span class="badge badge-soft-warning rounded-pill">Beta</span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button></div></div>
  <div class="modal-footer"><button class="btn btn-plain btn-sm" type="button" data-modal-close="">Cancel</button></div>
  </div>
  </div>
  </div>
</div>
::end

```html
<button class="picker-option is-selected" type="button" role="option" aria-selected="true" data-picker-value="en-US">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-alpha-e-circle-outline"></span></span>
  <span class="picker-option-text">
    <span class="picker-option-label">English (US)</span>
    <span class="picker-option-desc">Fully translated</span>
  </span>
  <span class="badge badge-soft-secondary rounded-pill">Default</span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
</button>
```

```js components
import { OptionPickerModal } from "@abydahana/aksara-ui/components";

OptionPickerModal({
  id: "languagePicker",
  title: "Language",
  subtitle: "Used for menus, emails and invoices",
  icon: "translate",
  selectedValue: "en-US",
  options: [
    {
      value: "en-US",
      label: "English (US)",
      icon: "alpha-e-circle-outline",
      description: "Fully translated",
      badge: "Default"
    },
    { value: "en-GB", label: "English (UK)", icon: "alpha-e-circle-outline", description: "Fully translated" },
    { value: "fr", label: "French", icon: "alpha-f-circle-outline", description: "98% translated" },
    {
      value: "de",
      label: "German",
      icon: "alpha-d-circle-outline",
      description: "94% translated",
      badge: "New",
      badgeVariant: "success"
    },
    {
      value: "ja",
      label: "Japanese",
      icon: "alpha-j-circle-outline",
      description: "Machine translated, under review",
      badge: "Beta",
      badgeVariant: "warning"
    }
  ]
});
```

Matching `selectedValue` against option values is case-insensitive, so `"EN-us"` still marks English (US).

---

## Disabled Options

Set `disabled: true` to show an option that cannot be picked right now. It is rendered as a disabled button at half opacity and ignores clicks. Pair it with a description or badge that says why.

::html
<div class="docs-preview">
  <div class="card max-w-[26rem] w-full">
    <div class="card-body hstack justify-between">
      <div>
        <div class="fw-semibold text-sm">Invoices · November</div>
        <div class="text-xs text-subtle">48 invoices · $18,420.00</div>
      </div>
      <button class="btn btn-primary btn-sm" type="button" data-modal="#exportPicker"><span class="mdi mdi-download"></span> Export</button>
    </div>
  </div>
  <div class="modal picker-modal" id="exportPicker" tabindex="-1" aria-hidden="true" aria-labelledby="exportPicker-title" data-modal-draggable="false">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
  <div class="modal-header">
  <div class="picker-heading">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-download"></span></span>
  <div class="picker-heading-text">
  <h5 id="exportPicker-title" class="modal-title m-0">Export invoices</h5>
  <div class="picker-subtitle">48 invoices from November</div>
  </div>
  </div>
  <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
  </div>
  <div class="modal-body"><div class="picker-list" role="listbox" aria-labelledby="exportPicker-title"><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="csv">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-file-delimited-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">CSV</span><span class="picker-option-desc">Works with any spreadsheet app</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="xlsx">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-file-excel-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Excel workbook</span><span class="picker-option-desc">One sheet per customer</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="pdf" disabled>
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-file-pdf-box"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">PDF report</span><span class="picker-option-desc">Branded summary with charts</span></span>
  <span class="badge badge-soft-primary rounded-pill">Pro</span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button></div></div>
  <div class="modal-footer"><button class="btn btn-plain btn-sm" type="button" data-modal-close="">Cancel</button></div>
  </div>
  </div>
  </div>
</div>
::end

```html
<button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="pdf" disabled>
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-file-pdf-box"></span></span>
  <span class="picker-option-text">
    <span class="picker-option-label">PDF report</span>
    <span class="picker-option-desc">Branded summary with charts</span>
  </span>
  <span class="badge badge-soft-primary rounded-pill">Pro</span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
</button>
```

```js components
import { OptionPickerModal } from "@abydahana/aksara-ui/components";

OptionPickerModal({
  id: "exportPicker",
  title: "Export invoices",
  subtitle: "48 invoices from November",
  icon: "download",
  options: [
    { value: "csv", label: "CSV", icon: "file-delimited-outline", description: "Works with any spreadsheet app" },
    { value: "xlsx", label: "Excel workbook", icon: "file-excel-outline", description: "One sheet per customer" },
    {
      value: "pdf",
      label: "PDF report",
      icon: "file-pdf-box",
      description: "Branded summary with charts",
      badge: "Pro",
      badgeVariant: "primary",
      disabled: true
    }
  ]
});
```

---

## Action Lists

The picker also works as an action sheet: options without a check-worthy "current value", where each one runs a command. Leave `selectedValue` out and use `iconClass` to color an option's icon, for example a destructive action.

::html
<div class="docs-preview">
  <div class="card max-w-[26rem] w-full">
    <div class="card-body hstack gap-3 items-start">
      <span class="avatar avatar-sm avatar-success rounded-full"><span class="avatar-initials">GL</span></span>
      <div class="flex-1">
        <div class="fw-semibold text-sm">Grace Lee</div>
        <p class="m-0 text-sm text-subtle">Shipped the new pricing page. Feedback welcome before Friday.</p>
      </div>
      <button class="btn btn-ghost btn-sm btn-icon" type="button" data-modal="#postActions" aria-label="Post actions"><span class="mdi mdi-dots-horizontal"></span></button>
    </div>
  </div>
  <div class="modal picker-modal" id="postActions" tabindex="-1" aria-hidden="true" aria-labelledby="postActions-title" data-modal-draggable="false">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
  <div class="modal-header">
  <div class="picker-heading">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-dots-horizontal"></span></span>
  <div class="picker-heading-text">
  <h5 id="postActions-title" class="modal-title m-0">Post actions</h5>
  </div>
  </div>
  <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
  </div>
  <div class="modal-body"><div class="picker-list" role="listbox" aria-labelledby="postActions-title"><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="edit">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-pencil-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Edit post</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="pin">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-pin-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Pin to profile</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="link">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-link-variant"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Copy link</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="delete">
  <span class="picker-option-icon text-danger" aria-hidden="true"><span class="mdi mdi-trash-can-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Delete post</span><span class="picker-option-desc">This cannot be undone</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button></div></div>
  <div class="modal-footer"><button class="btn btn-plain btn-sm" type="button" data-modal-close="">Cancel</button></div>
  </div>
  </div>
  </div>
</div>
::end

```js components
import { OptionPickerModal } from "@abydahana/aksara-ui/components";

OptionPickerModal({
  id: "postActions",
  title: "Post actions",
  icon: "dots-horizontal",
  options: [
    { value: "edit", label: "Edit post", icon: "pencil-outline" },
    { value: "pin", label: "Pin to profile", icon: "pin-outline" },
    { value: "link", label: "Copy link", icon: "link-variant" },
    {
      value: "delete",
      label: "Delete post",
      icon: "trash-can-outline",
      iconClass: "text-danger",
      description: "This cannot be undone"
    }
  ]
});

document.querySelector("#postActions").addEventListener("aksara:picker:select", ({ detail }) => {
  if (detail.value === "delete") confirmDelete();
  if (detail.value === "link") Aksara.clipboard(detail.option, location.href);
});
```

---

## Keep It Open

By default the dialog closes as soon as an option is picked. Pass `closeOnSelect: false` (rendered as `data-picker-close="false"` on the modal) to keep it open, for example to preview each choice. The selection still moves and the event still fires; people close the dialog with the footer button, Escape or the backdrop. `cancelLabel` renames that button.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-soft-primary" type="button" data-modal="#soundPicker"><span class="mdi mdi-bell-ring-outline"></span> Notification sound</button>
  </div>
  <div class="modal picker-modal" id="soundPicker" tabindex="-1" aria-hidden="true" aria-labelledby="soundPicker-title" data-modal-draggable="false" data-picker-close="false">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
  <div class="modal-header">
  <div class="picker-heading">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-bell-ring-outline"></span></span>
  <div class="picker-heading-text">
  <h5 id="soundPicker-title" class="modal-title m-0">Notification sound</h5>
  <div class="picker-subtitle">Tap a sound to preview it</div>
  </div>
  </div>
  <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
  </div>
  <div class="modal-body"><div class="picker-list" role="listbox" aria-labelledby="soundPicker-title"><button class="picker-option is-selected" type="button" role="option" aria-selected="true" data-picker-value="chime">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-music-note-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Chime</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="pop">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-music-note-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Pop</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="bell">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-bell-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Bell</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="none">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-volume-off"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">None</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button></div></div>
  <div class="modal-footer"><button class="btn btn-plain btn-sm" type="button" data-modal-close="">Done</button></div>
  </div>
  </div>
  </div>
</div>
::end

```html
<div class="modal picker-modal" id="soundPicker" data-picker-close="false" …>…</div>
```

```js components
import { OptionPickerModal } from "@abydahana/aksara-ui/components";

OptionPickerModal({
  id: "soundPicker",
  title: "Notification sound",
  subtitle: "Tap a sound to preview it",
  icon: "bell-ring-outline",
  selectedValue: "chime",
  closeOnSelect: false,
  cancelLabel: "Done",
  options: [
    { value: "chime", label: "Chime", icon: "music-note-outline" },
    { value: "pop", label: "Pop", icon: "music-note-outline" },
    { value: "bell", label: "Bell", icon: "bell-outline" },
    { value: "none", label: "None", icon: "volume-off" }
  ]
});
```

---

## Static Backdrop

Tapping outside the dialog cancels it by default. With `staticBackdrop: true` (`data-modal-backdrop="static"`) a backdrop click only shakes the dialog, so people must pick an option or press the footer button.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-outline-primary" type="button" data-modal="#workspacePicker"><span class="mdi mdi-domain"></span> Switch workspace</button>
  </div>
  <div class="modal picker-modal" id="workspacePicker" tabindex="-1" aria-hidden="true" data-modal-backdrop="static" aria-labelledby="workspacePicker-title" data-modal-draggable="false">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
  <div class="modal-header">
  <div class="picker-heading">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-domain"></span></span>
  <div class="picker-heading-text">
  <h5 id="workspacePicker-title" class="modal-title m-0">Choose a workspace</h5>
  </div>
  </div>
  <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
  </div>
  <div class="modal-body"><div class="picker-list" role="listbox" aria-labelledby="workspacePicker-title"><button class="picker-option is-selected" type="button" role="option" aria-selected="true" data-picker-value="acme">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-office-building-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Acme Inc.</span><span class="picker-option-desc">London · 24 members</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="northwind">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-palette-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Northwind Studio</span><span class="picker-option-desc">Manchester · 8 members</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button><button class="picker-option" type="button" role="option" aria-selected="false" data-picker-value="personal">
  <span class="picker-option-icon" aria-hidden="true"><span class="mdi mdi-account-outline"></span></span>
  <span class="picker-option-text"><span class="picker-option-label">Personal</span><span class="picker-option-desc">Only you</span></span>
  <span class="picker-option-check mdi mdi-check" aria-hidden="true"></span>
  </button></div></div>
  <div class="modal-footer"><button class="btn btn-plain btn-sm" type="button" data-modal-close="">Cancel</button></div>
  </div>
  </div>
  </div>
</div>
::end

```js components
import { OptionPickerModal } from "@abydahana/aksara-ui/components";

OptionPickerModal({
  id: "workspacePicker",
  title: "Choose a workspace",
  icon: "domain",
  staticBackdrop: true,
  selectedValue: "acme",
  options: [
    { value: "acme", label: "Acme Inc.", icon: "office-building-outline", description: "London · 24 members" },
    { value: "northwind", label: "Northwind Studio", icon: "palette-outline", description: "Manchester · 8 members" },
    { value: "personal", label: "Personal", icon: "account-outline", description: "Only you" }
  ]
});
```

---

## Picking From Code

`Aksara.pick(options)` mounts a temporary picker, opens it and returns a `Promise<string | null>`: the picked value, or `null` when the dialog is cancelled (Cancel, close button, Escape or backdrop). The dialog is removed from the page afterwards, so there is no markup to render.

::html
<div class="docs-preview">
  <div class="card max-w-[28rem] w-full">
    <div class="card-body vstack gap-3">
      <div class="hstack gap-3">
        <span class="avatar avatar-sm avatar-primary rounded-full"><span class="avatar-initials">MC</span></span>
        <div class="flex-1 fw-semibold text-sm">New post</div>
        <button class="btn btn-soft-secondary btn-sm" type="button" data-value="public" onclick="Aksara.pick({ title: 'Who can see this post?', subtitle: 'You can change this later', icon: 'eye-outline', value: this.dataset.value, options: [{ value: 'public', label: 'Everyone', icon: 'earth', description: 'Anyone on or off the platform' }, { value: 'followers', label: 'Followers', icon: 'account-group-outline', description: '1,240 people' }, { value: 'team', label: 'My team', icon: 'briefcase-outline', description: 'Acme Inc. members only', badge: 'Work', badgeVariant: 'info' }, { value: 'private', label: 'Only me', icon: 'lock-outline' }] }).then((value) => { if (!value) return; this.dataset.value = value; this.querySelector('.demo-label').textContent = { public: 'Everyone', followers: 'Followers', team: 'My team', private: 'Only me' }[value]; })"><span class="mdi mdi-eye-outline"></span> <span class="demo-label">Everyone</span> <span class="mdi mdi-chevron-down"></span></button>
      </div>
      <textarea class="form-control" rows="3" placeholder="Share an update with your audience" aria-label="Post text"></textarea>
    </div>
  </div>
</div>
::end

```html
<button id="visibilityButton" class="btn btn-soft-secondary btn-sm" type="button" data-value="public">
  <span class="mdi mdi-eye-outline"></span> <span data-label>Everyone</span> <span class="mdi mdi-chevron-down"></span>
</button>
```

```js
const button = document.querySelector("#visibilityButton");
const options = [
  { value: "public", label: "Everyone", icon: "earth", description: "Anyone on or off the platform" },
  { value: "followers", label: "Followers", icon: "account-group-outline", description: "1,240 people" },
  {
    value: "team",
    label: "My team",
    icon: "briefcase-outline",
    description: "Acme Inc. members only",
    badge: "Work",
    badgeVariant: "info"
  },
  { value: "private", label: "Only me", icon: "lock-outline" }
];

button.addEventListener("click", async () => {
  const value = await Aksara.pick({
    title: "Who can see this post?",
    subtitle: "You can change this later",
    icon: "eye-outline",
    options,
    value: button.dataset.value, // marks the current choice
    cancelLabel: "Keep current"
  });
  if (value === null) return; // cancelled

  button.dataset.value = value;
  button.querySelector("[data-label]").textContent = options.find((option) => option.value === value).label;
});
```

`Aksara.pick()` accepts `title`, `subtitle`, `icon`, `options`, `value` and `cancelLabel`. Its options take the same fields as the component's: `value`, `label`, `icon`, `description`, `badge`, `badgeVariant` (soft badge color, `secondary` by default), `iconClass` (extra classes on the icon circle, for example `text-danger`) and `disabled`. Like `selectedValue`, `value` is matched case-insensitively (`"PUBLIC"` marks the `public` option); the promise always resolves with the option's own value. Use the `OptionPickerModal` component when you need `closeOnSelect`, `staticBackdrop` or a picker that stays in the page.

---

## Accessibility

- The dialog is labelled by its title (`aria-labelledby`), and the list is a `role="listbox"` of `role="option"` buttons with `aria-selected`, so screen readers announce the current choice.
- Options are real buttons: Tab moves between them, Enter or Space picks one, and disabled options are skipped.
- As with every modal, focus is trapped inside while it is open, Escape cancels, and focus returns to the trigger when it closes.
- Icons are decorative (`aria-hidden="true"`); keep the meaning in the label or description.

---

## JavaScript

Pickers are regular modals, so `data-modal`, `data-modal-close`, `Aksara.modal("#id")` and the `aksara:modal:*` events all apply. Option clicks are handled by one delegated listener on `document`, which also covers pickers rendered later.

### Data attributes

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Attribute</th><th>On</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-picker-value</code></td><td><code>.picker-option</code></td><td>The option's value, sent in the event and returned by <code>Aksara.pick()</code>.</td></tr>
      <tr><td><code>data-picker-close="false"</code></td><td><code>.picker-modal</code></td><td>Keep the dialog open after a pick.</td></tr>
      <tr><td><code>data-picker-selected</code></td><td><code>.picker-modal</code></td><td>Set by the runtime to the last picked value, handy for reading the state later.</td></tr>
      <tr><td><code>data-modal-backdrop="static"</code></td><td><code>.picker-modal</code></td><td>Ignore backdrop clicks (from <code>staticBackdrop</code>).</td></tr>
      <tr><td><code>data-modal="#id"</code>, <code>data-modal-close</code></td><td>Trigger, footer button</td><td>Open and close, as for any modal.</td></tr>
    </tbody>
  </table>
</div>
::end

### Events

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Event</th><th>Fired when</th><th><code>event.detail</code></th></tr>
    </thead>
    <tbody>
      <tr><td><code>aksara:picker:select</code></td><td>An enabled option is picked, after the selection has moved and before the dialog closes.</td><td><code>{ value, label, option }</code>: the value, the label text and the option button.</td></tr>
      <tr><td><code>aksara:modal:show</code>, <code>aksara:modal:hide</code></td><td>The picker opens or closes (for any reason).</td><td><code>{ instance }</code></td></tr>
    </tbody>
  </table>
</div>
::end

```js
// One listener for every picker on the page
document.addEventListener("aksara:picker:select", (event) => {
  const picker = event.target.closest(".picker-modal");
  savePreference(picker.id, event.detail.value);
});

// Open from code
Aksara.modal("#languagePicker").show();
```

---

## String Component

`OptionPickerModal` renders a complete picker modal (aliases: `PickerModal`, `pickerModal`, `renderOptionPickerModal`). Titles, labels, descriptions and badges are escaped. Icons accept `"fire"`, `"mdi-fire"` or `"mdi mdi-fire"`.

```ts
import { OptionPickerModal } from "@abydahana/aksara-ui/components";

OptionPickerModal({
  id: "currencyPicker",
  title: "Currency",
  icon: "currency-usd",
  selectedValue: "usd",
  options: [
    { value: "usd", label: "US dollar", icon: "currency-usd", description: "$1,240.00" },
    { value: "gbp", label: "British pound", icon: "currency-gbp", description: "£980.00" },
    { value: "eur", label: "Euro", icon: "currency-eur", description: "€1,140.00" }
  ]
});
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>id</code></td><td><code>string</code></td><td><code>"aksaraOptionPickerModal"</code></td><td>Modal id; the title gets <code>{id}-title</code>.</td></tr>
      <tr><td><code>title</code></td><td><code>string</code></td><td>—</td><td>Required. Dialog title.</td></tr>
      <tr><td><code>subtitle</code></td><td><code>string</code></td><td>—</td><td>Second line under the title.</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td><code>"mdi-format-list-bulleted"</code></td><td>Header icon.</td></tr>
      <tr><td><code>options</code></td><td><code>OptionPickerItem[]</code></td><td><code>[]</code></td><td>The choices (see below).</td></tr>
      <tr><td><code>selectedValue</code></td><td><code>string</code></td><td>—</td><td>Value to mark as selected (case-insensitive).</td></tr>
      <tr><td><code>cancelLabel</code></td><td><code>string</code></td><td><code>"Cancel"</code></td><td>Footer button text.</td></tr>
      <tr><td><code>closeOnSelect</code></td><td><code>boolean</code></td><td><code>true</code></td><td><code>false</code> adds <code>data-picker-close="false"</code>.</td></tr>
      <tr><td><code>staticBackdrop</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Backdrop clicks shake the dialog instead of cancelling.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on <code>.modal.picker-modal</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra attributes on the modal.</td></tr>
    </tbody>
  </table>
</div>
::end

Each `OptionPickerItem`:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Field</th><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>value</code></td><td><code>string</code></td><td>Required. Sent as <code>data-picker-value</code>.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td>Required. Bold first line.</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td>MDI icon; defaults to <code>mdi-circle-medium</code>.</td></tr>
      <tr><td><code>iconClass</code></td><td><code>string</code></td><td>Extra classes on the icon circle, e.g. <code>"text-danger"</code>.</td></tr>
      <tr><td><code>description</code></td><td><code>string</code></td><td>Muted second line.</td></tr>
      <tr><td><code>badge</code></td><td><code>string</code></td><td>Pill at the end of the row.</td></tr>
      <tr><td><code>badgeVariant</code></td><td><code>string</code></td><td>Soft badge color; defaults to <code>secondary</code>.</td></tr>
      <tr><td><code>disabled</code></td><td><code>boolean</code></td><td>Render the option disabled.</td></tr>
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
      <tr><td><code>.picker-modal</code></td><td>On the <code>.modal</code>: a 26rem dialog with a tighter body padding.</td></tr>
      <tr><td><code>.picker-heading</code></td><td>Header row with the icon circle and the title block.</td></tr>
      <tr><td><code>.picker-heading-text</code></td><td>Title block; lets the title and subtitle truncate.</td></tr>
      <tr><td><code>.picker-subtitle</code></td><td>Small muted line under the title.</td></tr>
      <tr><td><code>.picker-list</code></td><td>Vertical stack of options.</td></tr>
      <tr><td><code>.picker-option</code></td><td>Full-width option row with a hover background and a focus ring. Half opacity when <code>:disabled</code> or <code>[aria-disabled="true"]</code>.</td></tr>
      <tr><td><code>.picker-option-icon</code></td><td>Round icon tile; filled with the primary color on the selected option.</td></tr>
      <tr><td><code>.picker-option-text</code></td><td>Label and description column.</td></tr>
      <tr><td><code>.picker-option-label</code></td><td>Semibold, single-line label.</td></tr>
      <tr><td><code>.picker-option-desc</code></td><td>Muted, single-line description.</td></tr>
      <tr><td><code>.picker-option-check</code></td><td>Check icon, visible only on the selected option.</td></tr>
      <tr><td><code>.is-selected</code></td><td>State on <code>.picker-option</code> for the current value.</td></tr>
    </tbody>
  </table>
</div>
::end
