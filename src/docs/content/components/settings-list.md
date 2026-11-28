# Settings List

Settings lists are the grouped rows of a preferences screen: an icon, a label with an optional description, and a value, switch, control or chevron at the end. `SettingsGroup` and `SettingsItem` build them on top of [List Group](#/components/list-group), so there is no extra stylesheet: a group is a `.list-group` (optionally `.list-group-inset` for the iOS look) with an uppercase heading, and a row is a `.list-group-item` with a flex layout inside.

::html
<div class="docs-preview">
  <div class="max-w-[520px]"><div><p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Account</p><div class="list-group list-group-inset list-group-divider-inset"><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-primary"><span class="mdi mdi-account-outline"></span></span></span><span class="flex-1 fw-semibold">Profile</span><span class="text-subtle text-sm">Maya Chen</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-info"><span class="mdi mdi-email-outline"></span></span></span><span class="flex-1 fw-semibold">Email</span><span class="text-subtle text-sm">maya@example.com</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-success"><span class="mdi mdi-shield-check-outline"></span></span></span><span class="flex-1 fw-semibold">Two-factor authentication</span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Two-factor authentication" checked></label></span></div></div></div></div>
</div>
::end

```html
<div>
  <p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Account</p>
  <div class="list-group list-group-inset list-group-divider-inset">
    <a class="list-group-item list-group-item-action" href="/settings/profile">
      <span class="flex items-center gap-3">
        <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true">
          <span class="icon-tile icon-tile-xs icon-tile-primary"><span class="mdi mdi-account-outline"></span></span>
        </span>
        <span class="flex-1 fw-semibold">Profile</span>
        <span class="text-subtle text-sm">Maya Chen</span>
        <span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span>
      </span>
    </a>
    <div class="list-group-item">
      <span class="flex items-center gap-3">
        <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true">
          <span class="icon-tile icon-tile-xs icon-tile-success"
            ><span class="mdi mdi-shield-check-outline"></span
          ></span>
        </span>
        <span class="flex-1 fw-semibold">Two-factor authentication</span>
        <label class="form-switch">
          <input type="checkbox" role="switch" aria-label="Two-factor authentication" checked />
        </label>
      </span>
    </div>
  </div>
</div>
```

```js components
import { SettingsGroup, SettingsItem } from "@abydahana/aksara-ui/components";

const tile = (color, icon) =>
  `<span class="icon-tile icon-tile-xs icon-tile-${color}"><span class="mdi ${icon}"></span></span>`;

SettingsGroup({
  title: "Account",
  inset: true,
  className: "list-group-divider-inset",
  children: [
    SettingsItem({
      label: "Profile",
      icon: tile("primary", "mdi-account-outline"),
      value: "Maya Chen",
      showChevron: true,
      href: "/settings/profile"
    }),
    SettingsItem({
      label: "Email",
      icon: tile("info", "mdi-email-outline"),
      value: "maya@example.com",
      showChevron: true,
      href: "/settings/email"
    }),
    SettingsItem({
      label: "Two-factor authentication",
      icon: tile("success", "mdi-shield-check-outline"),
      trailing:
        '<label class="form-switch"><input type="checkbox" role="switch" aria-label="Two-factor authentication" checked></label>'
    })
  ].join("")
});
```

---

## Settings Screen

A full mobile-style screen: inset groups for Account, Notifications and Privacy, with values and chevrons for rows that open a detail page, switches for on/off preferences, and a separate group for the destructive "Sign out" action. Stack groups with `vstack gap-4`.

::html
<div class="docs-preview [background:var(--aksara-bg-body-secondary)]">
  <div class="vstack gap-4 max-w-[420px] w-full mx-auto"><div><p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Account</p><div class="list-group list-group-inset list-group-divider-inset"><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-primary"><span class="mdi mdi-account-outline"></span></span></span><span class="flex-1 fw-semibold">Profile</span><span class="text-subtle text-sm">Maya Chen</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-secondary"><span class="mdi mdi-lock-outline"></span></span></span><span class="flex-1 fw-semibold">Password</span><span class="text-subtle text-sm">Changed 3 months ago</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-warning"><span class="mdi mdi-star-outline"></span></span></span><span class="flex-1 fw-semibold">Plan</span><span class="text-subtle text-sm">Pro · $24/mo</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a></div></div><div><p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Notifications</p><div class="list-group list-group-inset list-group-divider-inset"><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-danger"><span class="mdi mdi-bell-outline"></span></span></span><span class="flex-1 fw-semibold">Push notifications</span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Push notifications" checked></label></span></div><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-info"><span class="mdi mdi-email-newsletter"></span></span></span><span class="flex-1 min-w-0"><span class="fw-semibold block">Email digest</span><span class="text-subtle text-sm block mt-1">A summary of activity every Monday at 9:00.</span></span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Email digest" checked></label></span></div><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-tertiary"><span class="mdi mdi-bullhorn-outline"></span></span></span><span class="flex-1 fw-semibold">Product updates</span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Product updates"></label></span></div></div></div><div><p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Privacy</p><div class="list-group list-group-inset list-group-divider-inset"><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-success"><span class="mdi mdi-eye-outline"></span></span></span><span class="flex-1 fw-semibold">Profile visibility</span><span class="text-subtle text-sm">Team only</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-dark"><span class="mdi mdi-cancel"></span></span></span><span class="flex-1 fw-semibold">Blocked accounts</span><span class="text-subtle text-sm">2</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><button class="list-group-item list-group-item-action" type="button"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="icon-tile icon-tile-xs icon-tile-secondary"><span class="mdi mdi-download-outline"></span></span></span><span class="flex-1 fw-semibold">Download my data</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></button></div></div><div class="list-group list-group-inset"><button class="list-group-item list-group-item-action text-danger" type="button"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-logout"></span></span><span class="flex-1 fw-semibold">Sign out</span></span></button></div></div>
</div>
::end

```html
<div class="vstack gap-4">
  <div>
    <p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Notifications</p>
    <div class="list-group list-group-inset list-group-divider-inset">
      <div class="list-group-item">
        <span class="flex items-center gap-3">
          <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"
            >…</span
          >
          <span class="flex-1 min-w-0">
            <span class="fw-semibold block">Email digest</span>
            <span class="text-subtle text-sm block mt-1">A summary of activity every Monday at 9:00.</span>
          </span>
          <label class="form-switch"><input type="checkbox" role="switch" aria-label="Email digest" checked /></label>
        </span>
      </div>
    </div>
  </div>
  <div class="list-group list-group-inset">
    <button class="list-group-item list-group-item-action text-danger" type="button">
      <span class="flex items-center gap-3">
        <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true">
          <span class="mdi mdi-logout"></span>
        </span>
        <span class="flex-1 fw-semibold">Sign out</span>
      </span>
    </button>
  </div>
</div>
```

```js components
import { SettingsGroup, SettingsItem } from "@abydahana/aksara-ui/components";

const tile = (color, icon) =>
  `<span class="icon-tile icon-tile-xs icon-tile-${color}"><span class="mdi ${icon}"></span></span>`;
const toggle = (label, checked = false) =>
  `<label class="form-switch"><input type="checkbox" role="switch" aria-label="${label}"${checked ? " checked" : ""}></label>`;

const screen = [
  SettingsGroup({
    title: "Account",
    inset: true,
    className: "list-group-divider-inset",
    children: [
      SettingsItem({
        label: "Profile",
        icon: tile("primary", "mdi-account-outline"),
        value: "Maya Chen",
        showChevron: true,
        href: "/settings/profile"
      }),
      SettingsItem({
        label: "Password",
        icon: tile("secondary", "mdi-lock-outline"),
        value: "Changed 3 months ago",
        showChevron: true,
        href: "/settings/password"
      }),
      SettingsItem({
        label: "Plan",
        icon: tile("warning", "mdi-star-outline"),
        value: "Pro · $24/mo",
        showChevron: true,
        href: "/billing"
      })
    ].join("")
  }),
  SettingsGroup({
    title: "Notifications",
    inset: true,
    className: "list-group-divider-inset",
    children: [
      SettingsItem({
        label: "Push notifications",
        icon: tile("danger", "mdi-bell-outline"),
        trailing: toggle("Push notifications", true)
      }),
      SettingsItem({
        label: "Email digest",
        icon: tile("info", "mdi-email-newsletter"),
        description: "A summary of activity every Monday at 9:00.",
        trailing: toggle("Email digest", true)
      }),
      SettingsItem({
        label: "Product updates",
        icon: tile("tertiary", "mdi-bullhorn-outline"),
        trailing: toggle("Product updates")
      })
    ].join("")
  }),
  SettingsGroup({
    title: "Privacy",
    inset: true,
    className: "list-group-divider-inset",
    children: [
      SettingsItem({
        label: "Profile visibility",
        icon: tile("success", "mdi-eye-outline"),
        value: "Team only",
        showChevron: true,
        href: "/settings/visibility"
      }),
      SettingsItem({
        label: "Blocked accounts",
        icon: tile("dark", "mdi-cancel"),
        value: "2",
        showChevron: true,
        href: "/settings/blocked"
      }),
      SettingsItem({
        label: "Download my data",
        icon: tile("secondary", "mdi-download-outline"),
        showChevron: true,
        action: true
      })
    ].join("")
  }),
  SettingsGroup({
    inset: true,
    children: SettingsItem({
      label: "Sign out",
      icon: '<span class="mdi mdi-logout"></span>',
      action: true,
      className: "text-danger"
    })
  })
].join("");

`<div class="vstack gap-4">${screen}</div>`;
```

---

## Row Types

A row's element follows its job. With `href` it is an `<a>`, with `action: true` a `<button type="button">`, and otherwise a static `<div>`. Links and buttons get `.list-group-item-action` (full width, start-aligned, hover background); static rows hold a value or a control and do not react to the pointer.

::html
<div class="docs-preview">
  <div class="max-w-[520px]"><div class="list-group"><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-translate"></span></span><span class="flex-1 fw-semibold">Language</span><span class="text-subtle text-sm">English (UK)</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><button class="list-group-item list-group-item-action" type="button"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-broom"></span></span><span class="flex-1 fw-semibold">Clear cache</span><span class="text-subtle text-sm">84 MB</span></span></button><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-information-outline"></span></span><span class="flex-1 fw-semibold">App version</span><span class="text-subtle text-sm">4.2.0 (1187)</span></span></div></div></div>
</div>
::end

```html
<div class="list-group">
  <a class="list-group-item list-group-item-action" href="/settings/language">…English (UK) ›</a>
  <button class="list-group-item list-group-item-action" type="button">…Clear cache · 84 MB</button>
  <div class="list-group-item">…App version · 4.2.0 (1187)</div>
</div>
```

```js components
import { SettingsGroup, SettingsItem } from "@abydahana/aksara-ui/components";

SettingsGroup({
  children: [
    SettingsItem({
      label: "Language",
      icon: '<span class="mdi mdi-translate"></span>',
      value: "English (UK)",
      showChevron: true,
      href: "/settings/language"
    }),
    SettingsItem({
      label: "Clear cache",
      icon: '<span class="mdi mdi-broom"></span>',
      value: "84 MB",
      action: true,
      attributes: { "data-action": "clear-cache" }
    }),
    SettingsItem({
      label: "App version",
      icon: '<span class="mdi mdi-information-outline"></span>',
      value: "4.2.0 (1187)"
    })
  ].join("")
});
```

`icon` is raw HTML placed in a 1.75rem square, `aria-hidden` slot: a bare MDI icon, a colored `icon-tile icon-tile-xs`, or an avatar. The chevron is a decorative `›` hidden from screen readers, so the link text alone must say where it goes.

---

## Descriptions

`description` adds a second, subtle line under the label. The label block then shrinks (`min-w-0`), so long descriptions wrap instead of pushing the trailing control off the row.

::html
<div class="docs-preview">
  <div class="max-w-[520px]"><div class="list-group"><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex-1 min-w-0"><span class="fw-semibold block">Weekly report</span><span class="text-subtle text-sm block mt-1">Revenue, new customers and churn, sent every Monday to maya@example.com.</span></span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Weekly report" checked></label></span></div><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex-1 min-w-0"><span class="fw-semibold block">Low balance alert</span><span class="text-subtle text-sm block mt-1">Notify me when the account balance drops below $500.00.</span></span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Low balance alert"></label></span></div><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex-1 min-w-0"><span class="fw-semibold block">Billing contact</span><span class="text-subtle text-sm block mt-1">Invoices and receipts go to this address.</span></span><span class="text-subtle text-sm">finance@example.com</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a></div></div>
</div>
::end

```html
<div class="list-group-item">
  <span class="flex items-center gap-3">
    <span class="flex-1 min-w-0">
      <span class="fw-semibold block">Weekly report</span>
      <span class="text-subtle text-sm block mt-1">Revenue, new customers and churn, sent every Monday.</span>
    </span>
    <label class="form-switch"><input type="checkbox" role="switch" aria-label="Weekly report" checked /></label>
  </span>
</div>
```

```js components
import { SettingsItem } from "@abydahana/aksara-ui/components";

SettingsItem({
  label: "Weekly report",
  description: "Revenue, new customers and churn, sent every Monday to maya@example.com.",
  trailing:
    '<label class="form-switch"><input type="checkbox" role="switch" aria-label="Weekly report" checked></label>'
});
```

---

## Trailing Controls

`trailing` takes any HTML and places it after the value: a switch, a small select, a badge or a button. `value` and `trailing` can be combined; the order is label, value, trailing, chevron.

::html
<div class="docs-preview">
  <div class="max-w-[520px]"><div class="list-group"><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-theme-light-dark"></span></span><span class="flex-1 fw-semibold">Theme</span><select class="form-select form-select-sm w-[140px]" data-select="native" aria-label="Theme"><option>System</option><option>Light</option><option>Dark</option></select></span></div><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-account-multiple-outline"></span></span><span class="flex-1 fw-semibold">Seats</span><span class="text-subtle text-sm">8 of 10</span><span class="badge badge-soft-warning">2 left</span></span></div><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-key-outline"></span></span><span class="flex-1 fw-semibold">API key</span><button type="button" class="btn btn-soft-primary btn-sm">Regenerate</button></span></div></div></div>
</div>
::end

```html
<div class="list-group-item">
  <span class="flex items-center gap-3">
    <span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true">
      <span class="mdi mdi-theme-light-dark"></span>
    </span>
    <span class="flex-1 fw-semibold">Theme</span>
    <select class="form-select form-select-sm w-[140px]" data-select="native" aria-label="Theme">
      <option>System</option>
      <option>Light</option>
      <option>Dark</option>
    </select>
  </span>
</div>
```

```js components
import { SettingsItem } from "@abydahana/aksara-ui/components";

SettingsItem({
  label: "Theme",
  icon: '<span class="mdi mdi-theme-light-dark"></span>',
  trailing:
    '<select class="form-select form-select-sm w-[140px]" data-select="native" aria-label="Theme"><option>System</option><option>Light</option><option>Dark</option></select>'
});
SettingsItem({
  label: "Seats",
  icon: '<span class="mdi mdi-account-multiple-outline"></span>',
  value: "8 of 10",
  trailing: '<span class="badge badge-soft-warning">2 left</span>'
});
SettingsItem({
  label: "API key",
  icon: '<span class="mdi mdi-key-outline"></span>',
  trailing: '<button type="button" class="btn btn-soft-primary btn-sm">Regenerate</button>'
});
```

Put interactive controls only in static rows (no `href`, no `action`): a switch or button inside an `<a>` or `<button>` row is invalid HTML and steals the row's click. `data-select="native"` keeps the small select out of [Tom Select](#/forms/select).

---

## Active, Disabled And Destructive

`active` adds `.active` and `aria-current="true"`, for the current page in a settings menu. `disabled` adds `.disabled` and `aria-disabled="true"`, plus the `disabled` attribute on button rows and `tabindex="-1"` on link rows, so a disabled row fades, ignores the pointer and leaves the tab order. Destructive rows have no prop of their own; add `className: "text-danger"`.

::html
<div class="docs-preview">
  <div class="max-w-[520px]"><div class="list-group"><a class="list-group-item list-group-item-action active" href="#" aria-current="true"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-credit-card-outline"></span></span><span class="flex-1 fw-semibold">Billing</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><a class="list-group-item list-group-item-action disabled" href="#" aria-disabled="true" tabindex="-1"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-key-chain"></span></span><span class="flex-1 fw-semibold">Single sign-on</span><span class="text-subtle text-sm">Enterprise plan</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><button class="list-group-item list-group-item-action disabled" type="button" disabled aria-disabled="true"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-export"></span></span><span class="flex-1 min-w-0"><span class="fw-semibold block">Export workspace</span><span class="text-subtle text-sm block mt-1">Available once the current export finishes.</span></span></span></button><div class="list-group-item disabled" aria-disabled="true"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-account-sync-outline"></span></span><span class="flex-1 fw-semibold">Sync contacts</span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Sync contacts" disabled></label></span></div><button class="list-group-item list-group-item-action text-danger" type="button"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-trash-can-outline"></span></span><span class="flex-1 fw-semibold">Delete workspace</span></span></button></div></div>
</div>
::end

```html
<a class="list-group-item list-group-item-action active" href="/settings/billing" aria-current="true">…</a>
<a class="list-group-item list-group-item-action disabled" href="/settings/sso" aria-disabled="true" tabindex="-1">…</a>
<button class="list-group-item list-group-item-action disabled" type="button" disabled aria-disabled="true">…</button>
<button class="list-group-item list-group-item-action text-danger" type="button">…</button>
```

```js components
import { SettingsItem } from "@abydahana/aksara-ui/components";

SettingsItem({ label: "Billing", showChevron: true, href: "/settings/billing", active: true });
SettingsItem({
  label: "Single sign-on",
  value: "Enterprise plan",
  showChevron: true,
  href: "/settings/sso",
  disabled: true
});
SettingsItem({
  label: "Export workspace",
  description: "Available once the current export finishes.",
  action: true,
  disabled: true
});
SettingsItem({
  label: "Delete workspace",
  icon: '<span class="mdi mdi-trash-can-outline"></span>',
  action: true,
  className: "text-danger"
});
```

A disabled row only looks disabled: also disable the control you pass in `trailing`, as in the "Sync contacts" row above.

---

## Inset Groups

By default a group is a bordered `.list-group` on the surface color. `inset: true` adds `.list-group-inset`: larger radius, a subtle background and transparent rows, like grouped tables on iOS. Add `.list-group-divider-inset` (through `className`) so the dividers start after the icon column instead of at the edge.

::html
<div class="docs-preview">
  <div class="row gap-3 w-full">
    <div class="col-12 md:col-4"><div><p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Default</p><div class="list-group"><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-bell-outline"></span></span><span class="flex-1 fw-semibold">Notifications</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-lock-outline"></span></span><span class="flex-1 fw-semibold">Privacy</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a></div></div></div>
    <div class="col-12 md:col-4"><div><p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Inset</p><div class="list-group list-group-inset"><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-bell-outline"></span></span><span class="flex-1 fw-semibold">Notifications</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-lock-outline"></span></span><span class="flex-1 fw-semibold">Privacy</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a></div></div></div>
    <div class="col-12 md:col-4"><div><p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Inset + divider-inset</p><div class="list-group list-group-inset list-group-divider-inset"><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-bell-outline"></span></span><span class="flex-1 fw-semibold">Notifications</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-lock-outline"></span></span><span class="flex-1 fw-semibold">Privacy</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a></div></div></div>
  </div>
</div>
::end

```html
<div class="list-group">…</div>
<div class="list-group list-group-inset">…</div>
<div class="list-group list-group-inset list-group-divider-inset">…</div>
```

```js components
import { SettingsGroup } from "@abydahana/aksara-ui/components";

SettingsGroup({ title: "Default", children: rows });
SettingsGroup({ title: "Inset", inset: true, children: rows });
SettingsGroup({ title: "Inset + divider-inset", inset: true, className: "list-group-divider-inset", children: rows });
```

The divider offset (3.25rem) matches rows that have an icon. For rows without one, leave `.list-group-divider-inset` out. With `title`, the group is wrapped in a `<div>` and the heading is a `<p>`; `className` and `attributes` go on the inner `.list-group`, not on the wrapper.

---

## Two-Pane Layout

On wide screens, put a settings menu next to the page it opens. The menu is a group of link rows with `active` on the current page; the content pane is a stack of groups. Below `md` the two panes stack.

::html
<div class="docs-preview">
  <div class="row gap-3 w-full">
    <div class="col-12 md:col-4"><div class="list-group list-group-inset" role="navigation" aria-label="Settings"><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-cog-outline"></span></span><span class="flex-1 fw-semibold">General</span></span></a><a class="list-group-item list-group-item-action active" href="#" aria-current="true"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-bell-outline"></span></span><span class="flex-1 fw-semibold">Notifications</span></span></a><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-shield-lock-outline"></span></span><span class="flex-1 fw-semibold">Security</span></span></a><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-credit-card-outline"></span></span><span class="flex-1 fw-semibold">Billing</span></span></a><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex items-center justify-center w-[1.75rem] h-[1.75rem] shrink-0 text-lg" aria-hidden="true"><span class="mdi mdi-account-group-outline"></span></span><span class="flex-1 fw-semibold">Members</span><span class="text-subtle text-sm">8</span></span></a></div></div>
    <div class="col-12 md:col-8">
      <div class="vstack gap-4">
        <div>
          <h3 class="mt-0 mb-1 fw-bold text-body">Notifications</h3>
          <p class="text-sm text-subtle m-0">Choose how Acme Cloud reaches you. Changes save automatically.</p>
        </div>
        <div><p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Email</p><div class="list-group"><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex-1 min-w-0"><span class="fw-semibold block">Mentions</span><span class="text-subtle text-sm block mt-1">When someone @mentions you in a comment.</span></span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Email for mentions" checked></label></span></div><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex-1 min-w-0"><span class="fw-semibold block">Assigned tasks</span><span class="text-subtle text-sm block mt-1">When a task is assigned to you.</span></span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Email for assigned tasks" checked></label></span></div><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex-1 min-w-0"><span class="fw-semibold block">Weekly digest</span><span class="text-subtle text-sm block mt-1">Every Monday at 9:00 (London).</span></span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Weekly digest email"></label></span></div></div></div><div><p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Mobile</p><div class="list-group"><div class="list-group-item"><span class="flex items-center gap-3"><span class="flex-1 fw-semibold">Push notifications</span><label class="form-switch"><input type="checkbox" role="switch" aria-label="Push notifications" checked></label></span></div><a class="list-group-item list-group-item-action" href="#"><span class="flex items-center gap-3"><span class="flex-1 fw-semibold">Quiet hours</span><span class="text-subtle text-sm">22:00 – 07:00</span><span class="text-subtle opacity-[.5] text-sm ms-1" aria-hidden="true">&#8250;</span></span></a></div></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="row gap-3">
  <div class="col-12 md:col-4">
    <div class="list-group list-group-inset" role="navigation" aria-label="Settings">
      <a class="list-group-item list-group-item-action" href="/settings/general">…General</a>
      <a class="list-group-item list-group-item-action active" href="/settings/notifications" aria-current="true">
        …Notifications
      </a>
      <a class="list-group-item list-group-item-action" href="/settings/security">…Security</a>
    </div>
  </div>
  <div class="col-12 md:col-8">
    <div class="vstack gap-4">
      <!-- heading -->
      <div>
        <p class="text-xs fw-bold uppercase tracking-wider text-subtle mb-2 px-1">Email</p>
        <div class="list-group">…</div>
      </div>
    </div>
  </div>
</div>
```

```js components
import { SettingsGroup, SettingsItem } from "@abydahana/aksara-ui/components";

// toggle() as in the Settings Screen example.
const pages = [
  { label: "General", icon: "mdi-cog-outline", href: "/settings/general" },
  { label: "Notifications", icon: "mdi-bell-outline", href: "/settings/notifications" },
  { label: "Security", icon: "mdi-shield-lock-outline", href: "/settings/security" },
  { label: "Billing", icon: "mdi-credit-card-outline", href: "/settings/billing" },
  { label: "Members", icon: "mdi-account-group-outline", href: "/settings/members", value: "8" }
];

const nav = SettingsGroup({
  inset: true,
  attributes: { role: "navigation", "aria-label": "Settings" },
  children: pages
    .map((page) =>
      SettingsItem({
        label: page.label,
        icon: `<span class="mdi ${page.icon}"></span>`,
        value: page.value,
        href: page.href,
        active: page.href === location.pathname
      })
    )
    .join("")
});

const pane = SettingsGroup({
  title: "Email",
  children: [
    SettingsItem({
      label: "Mentions",
      description: "When someone @mentions you in a comment.",
      trailing: toggle("Email for mentions", true)
    }),
    SettingsItem({
      label: "Assigned tasks",
      description: "When a task is assigned to you.",
      trailing: toggle("Email for assigned tasks", true)
    })
  ].join("")
});

`<div class="row gap-3">
  <div class="col-12 md:col-4">${nav}</div>
  <div class="col-12 md:col-8"><div class="vstack gap-4">${pane}</div></div>
</div>`;
```

---

## Accessibility

- The group heading is a plain `<p>`. When a screen needs real landmarks, give the group `attributes: { role: "group", "aria-label": "Notifications" }`, or render your own heading and point `aria-labelledby` at it.
- Label every switch: the row label is a `<span>`, not a `<label>`, so add `aria-label` to the input (as in the examples) or wrap the input and a visually hidden text in the `label.form-switch`.
- Icons and the chevron are `aria-hidden`. Values (`"English (UK)"`, `"2"`) are read as part of the row, so keep them meaningful.
- The `.form-switch` thumb flips in RTL, and the row layout follows `dir` automatically.

---

## String Component

```ts
import { SettingsGroup, SettingsItem } from "@abydahana/aksara-ui/components";

SettingsGroup({
  title: "Privacy",
  inset: true,
  children: SettingsItem({
    label: "Profile visibility",
    icon: '<span class="mdi mdi-eye-outline"></span>',
    value: "Team only",
    showChevron: true,
    href: "/settings/visibility"
  })
});
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>SettingsGroup prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>children</code></td><td><code>string</code></td><td><code>""</code></td><td>Rows, usually joined <code>SettingsItem</code> strings. Inserted as is.</td></tr>
      <tr><td><code>title</code></td><td><code>string</code></td><td><code>""</code></td><td>Uppercase heading above the group. Escaped. With a title the output is wrapped in a <code>&lt;div&gt;</code>.</td></tr>
      <tr><td><code>inset</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.list-group-inset</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the <code>.list-group</code>, for example <code>list-group-divider-inset</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes on the <code>.list-group</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>SettingsItem prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>Required. Semi-bold row label. Escaped.</td></tr>
      <tr><td><code>description</code></td><td><code>string</code></td><td><code>""</code></td><td>Subtle second line under the label. Escaped.</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td><code>""</code></td><td>Raw HTML for the leading 1.75rem slot (<code>aria-hidden</code>).</td></tr>
      <tr><td><code>value</code></td><td><code>string</code></td><td><code>""</code></td><td>Subtle text on the trailing side. Escaped.</td></tr>
      <tr><td><code>trailing</code></td><td><code>string</code></td><td><code>""</code></td><td>Raw HTML after the value: a switch, select, badge or button.</td></tr>
      <tr><td><code>href</code></td><td><code>string</code></td><td>—</td><td>Renders an <code>&lt;a href&gt;</code> with <code>.list-group-item-action</code>.</td></tr>
      <tr><td><code>action</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Without <code>href</code>, renders a <code>&lt;button type="button"&gt;</code> with <code>.list-group-item-action</code>.</td></tr>
      <tr><td><code>showChevron</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds a decorative <code>›</code> at the end.</td></tr>
      <tr><td><code>active</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.active</code> and <code>aria-current="true"</code>.</td></tr>
      <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.disabled</code> and <code>aria-disabled="true"</code>; button rows also get <code>disabled</code>, link rows <code>tabindex="-1"</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the row, for example <code>text-danger</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes on the row; they override the generated ones.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

Settings lists reuse the list group classes and plain utilities. These are the ones the components emit.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.list-group</code></td><td>Group container: bordered, rounded column on the surface color.</td></tr>
      <tr><td><code>.list-group-inset</code></td><td>iOS-style group: large radius, subtle background, transparent rows, primary-tinted hover on action rows.</td></tr>
      <tr><td><code>.list-group-divider-inset</code></td><td>Dividers start 3.25rem from the start edge, after the icon column.</td></tr>
      <tr><td><code>.list-group-item</code></td><td>A row: <code>.875rem 1rem</code> padding and a bottom divider (none on the last row).</td></tr>
      <tr><td><code>.list-group-item-action</code></td><td>Link and button rows: full width, start-aligned, pointer, hover background, slight press scale.</td></tr>
      <tr><td><code>.active</code></td><td>Primary tint and semi-bold text for the current row.</td></tr>
      <tr><td><code>.disabled</code></td><td>Faded row without pointer events.</td></tr>
      <tr><td><code>span.flex.items-center.gap-3</code></td><td>Inner row layout: icon, label, value, trailing, chevron. A <code>&lt;span&gt;</code>, so it is valid inside link and button rows.</td></tr>
      <tr><td><code>.text-xs.fw-bold.uppercase.tracking-wider.text-subtle</code></td><td>Group heading style.</td></tr>
    </tbody>
  </table>
</div>
::end
