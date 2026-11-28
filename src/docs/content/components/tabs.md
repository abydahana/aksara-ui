# Tabs

Tabs split related content into panels that share one place on the page. A `.tabs` list holds `.tab` buttons, each pointing at a `.tab-panel` through `data-tabs="#panelId"`. Aksara handles clicks, arrow-key navigation, ARIA state and panel visibility. Three looks are built in: underline (default), pills (`nav nav-pills`) and segmented (`tabs-segmented`).

---

## Interactive Tabs Showcase

Click a tab, or focus one and press `→` / `←` to move between tabs. Focus wraps around at the ends.

::html
<div class="docs-preview">
  <div>
    <div class="tabs" role="tablist" aria-label="Aksara Tabs Demo">
      <button id="tabPrimary" class="tab" type="button" data-tabs="#panelPrimary" aria-selected="true" aria-controls="panelPrimary" role="tab" tabindex="0">
        Primary Accents
      </button>
      <button id="tabSecondary" class="tab" type="button" data-tabs="#panelSecondary" aria-selected="false" aria-controls="panelSecondary" role="tab" tabindex="-1">
        Logical Layouts
      </button>
      <button id="tabTertiary" class="tab" type="button" data-tabs="#panelTertiary" aria-selected="false" aria-controls="panelTertiary" role="tab" tabindex="-1">
        Dark Mode
      </button>
    </div>

    <div id="panelPrimary" class="tab-panel" role="tabpanel" aria-labelledby="tabPrimary">
      <h4 class="mt-0 mb-2 fw-bold">Soft UI Fills</h4>
      <p class="m-0 text-subtle text-sm">Aksara UI uses subtle semantic alerts, badge pill labels, outline surfaces, and translucent alpha tints.</p>
    </div>
    <div id="panelSecondary" class="tab-panel" role="tabpanel" aria-labelledby="tabSecondary" hidden>
      <h4 class="mt-0 mb-2 fw-bold">Logical Spacing</h4>
      <p class="m-0 text-subtle text-sm">Start/end logical directions make layouts work for Arabic or Hebrew RTL readers out of the box.</p>
    </div>
    <div id="panelTertiary" class="tab-panel" role="tabpanel" aria-labelledby="tabTertiary" hidden>
      <h4 class="mt-0 mb-2 fw-bold">Theme Tokens</h4>
      <p class="m-0 text-subtle text-sm">Every component reads CSS variables, so switching themes never needs extra classes.</p>
    </div>

  </div>
</div>
::end

```html
<div class="tabs" role="tablist" aria-label="Settings">
  <button id="tabPrimary" class="tab" type="button" data-tabs="#panelPrimary" aria-selected="true" role="tab">
    Primary Accents
  </button>
  <button id="tabSecondary" class="tab" type="button" data-tabs="#panelSecondary" aria-selected="false" role="tab">
    Logical Layouts
  </button>
</div>

<div id="panelPrimary" class="tab-panel" role="tabpanel" aria-labelledby="tabPrimary">...</div>
<div id="panelSecondary" class="tab-panel" role="tabpanel" aria-labelledby="tabSecondary" hidden>...</div>
```

```js components
import { Tabs } from "@abydahana/aksara-ui/components";

// Renders the tablist and the panels; ids become tab-{id} / panel-{id}
Tabs({
  ariaLabel: "Settings",
  swipeable: false,
  items: [
    { id: "primary", label: "Primary Accents", content: "...", active: true },
    { id: "secondary", label: "Logical Layouts", content: "..." }
  ]
});
```

Give inactive panels the `hidden` attribute in your markup so nothing flashes before the script runs. The first tab with `aria-selected="true"` (or the first tab) is activated on init.

---

## Icons and Counts

`.tab` is an inline flex row, so an icon before the label and a badge after it align without extra classes. The list scrolls horizontally (with the scrollbar hidden) when tabs overflow, and the active tab is scrolled into view.

::html
<div class="docs-preview">
  <div>
    <div class="tabs" role="tablist" aria-label="Inbox folders">
      <button id="inboxTabAll" class="tab" type="button" data-tabs="#inboxPanelAll" aria-selected="true" role="tab">
        <span class="mdi mdi-inbox-outline"></span> Inbox <span class="badge badge-sm badge-soft-primary">24</span>
      </button>
      <button id="inboxTabMentions" class="tab" type="button" data-tabs="#inboxPanelMentions" aria-selected="false" role="tab">
        <span class="mdi mdi-at"></span> Mentions <span class="badge badge-sm badge-soft-danger">3</span>
      </button>
      <button id="inboxTabStarred" class="tab" type="button" data-tabs="#inboxPanelStarred" aria-selected="false" role="tab">
        <span class="mdi mdi-star-outline"></span> Starred
      </button>
      <button id="inboxTabArchive" class="tab" type="button" data-tabs="#inboxPanelArchive" aria-selected="false" role="tab">
        <span class="mdi mdi-archive-outline"></span> Archive <span class="badge badge-sm badge-soft-secondary">128</span>
      </button>
    </div>
    <div id="inboxPanelAll" class="tab-panel" role="tabpanel" aria-labelledby="inboxTabAll">
      <ul class="list-group list-group-flush">
        <li class="list-group-item hstack gap-3">
          <span class="avatar avatar-sm rounded-full avatar-info" aria-hidden="true">NB</span>
          <span class="flex-1 min-w-0"><strong class="block text-sm">Nina Brooks</strong><span class="text-subtle text-sm">Design review moved to Thursday</span></span>
          <span class="text-subtle text-xs">9:41</span>
        </li>
        <li class="list-group-item hstack gap-3">
          <span class="avatar avatar-sm rounded-full avatar-warning" aria-hidden="true">MF</span>
          <span class="flex-1 min-w-0"><strong class="block text-sm">Max Foster</strong><span class="text-subtle text-sm">Release notes for v2.4 are ready</span></span>
          <span class="text-subtle text-xs">Yesterday</span>
        </li>
      </ul>
    </div>
    <div id="inboxPanelMentions" class="tab-panel" role="tabpanel" aria-labelledby="inboxTabMentions" hidden>
      <p class="m-0 text-subtle text-sm">3 threads mention you.</p>
    </div>
    <div id="inboxPanelStarred" class="tab-panel" role="tabpanel" aria-labelledby="inboxTabStarred" hidden>
      <p class="m-0 text-subtle text-sm">Nothing starred yet.</p>
    </div>
    <div id="inboxPanelArchive" class="tab-panel" role="tabpanel" aria-labelledby="inboxTabArchive" hidden>
      <p class="m-0 text-subtle text-sm">128 archived conversations.</p>
    </div>
  </div>
</div>
::end

```html
<div class="tabs" role="tablist" aria-label="Inbox folders">
  <button class="tab" type="button" data-tabs="#inboxPanelAll" aria-selected="true">
    <span class="mdi mdi-inbox-outline"></span> Inbox <span class="badge badge-sm badge-soft-primary">24</span>
  </button>
  <button class="tab" type="button" data-tabs="#inboxPanelMentions" aria-selected="false">
    <span class="mdi mdi-at"></span> Mentions <span class="badge badge-sm badge-soft-danger">3</span>
  </button>
  <button class="tab" type="button" data-tabs="#inboxPanelStarred" aria-selected="false">
    <span class="mdi mdi-star-outline"></span> Starred
  </button>
</div>
```

```js components
import { Tabs, Badge } from "@abydahana/aksara-ui/components";

const icon = (name) => `<span class="mdi mdi-${name}"></span>`;

// labelHtml takes raw markup, so a count badge can follow the text
Tabs({
  ariaLabel: "Inbox folders",
  swipeable: false,
  items: [
    {
      id: "inboxAll",
      label: "Inbox",
      labelHtml: `Inbox ${Badge({ variant: "primary", soft: true, size: "sm", label: "24" })}`,
      icon: icon("inbox-outline"),
      content: "..."
    },
    {
      id: "inboxMentions",
      label: "Mentions",
      labelHtml: `Mentions ${Badge({ variant: "danger", soft: true, size: "sm", label: "3" })}`,
      icon: icon("at"),
      content: "..."
    },
    { id: "inboxStarred", label: "Starred", icon: icon("star-outline"), content: "..." }
  ]
});
```

---

## Nav Pills Tabs

Add `nav nav-pills` to the same `.tabs` container for pill-shaped tabs. The underline is removed and the active tab gets a soft tinted fill.

::html
<div class="docs-preview">
  <div>
    <div class="tabs nav nav-pills mb-4" role="tablist" aria-label="Pill Tabs Demo">
      <button id="pillTabOverview" class="tab" type="button" data-tabs="#pillPanelOverview" aria-selected="true" role="tab" tabindex="0">
        <span class="mdi mdi-view-dashboard-outline"></span> Overview
      </button>
      <button id="pillTabActivity" class="tab" type="button" data-tabs="#pillPanelActivity" aria-selected="false" role="tab" tabindex="-1">
        <span class="mdi mdi-pulse"></span> Activity
      </button>
      <button id="pillTabSettings" class="tab" type="button" data-tabs="#pillPanelSettings" aria-selected="false" role="tab" tabindex="-1">
        <span class="mdi mdi-cog-outline"></span> Settings
      </button>
    </div>
    <div id="pillPanelOverview" class="tab-panel p-4 bg-subtle rounded-lg" role="tabpanel" aria-labelledby="pillTabOverview">
      <h4 class="mt-0 mb-2 fw-bold">Overview</h4>
      <p class="m-0 text-subtle text-sm">Pill tabs suit compact dashboards and filter-like navigation.</p>
    </div>
    <div id="pillPanelActivity" class="tab-panel p-4 bg-subtle rounded-lg" role="tabpanel" aria-labelledby="pillTabActivity" hidden>
      <h4 class="mt-0 mb-2 fw-bold">Activity</h4>
      <p class="m-0 text-subtle text-sm">The same data API handles clicks, keyboard arrows, and panel visibility.</p>
    </div>
    <div id="pillPanelSettings" class="tab-panel p-4 bg-subtle rounded-lg" role="tabpanel" aria-labelledby="pillTabSettings" hidden>
      <h4 class="mt-0 mb-2 fw-bold">Settings</h4>
      <p class="m-0 text-subtle text-sm">Use regular utilities to tune spacing, backgrounds, and panel surfaces.</p>
    </div>
  </div>
</div>
::end

```html
<div class="tabs nav nav-pills" role="tablist">
  <button class="tab" type="button" data-tabs="#overview" aria-selected="true">
    <span class="mdi mdi-view-dashboard-outline"></span> Overview
  </button>
  <button class="tab" type="button" data-tabs="#activity" aria-selected="false">
    <span class="mdi mdi-pulse"></span> Activity
  </button>
</div>
```

```js components
import { Tabs } from "@abydahana/aksara-ui/components";

Tabs({
  variant: "pills",
  swipeable: false,
  items: [
    { id: "overview", label: "Overview", icon: '<span class="mdi mdi-view-dashboard-outline"></span>', content: "..." },
    { id: "activity", label: "Activity", icon: '<span class="mdi mdi-pulse"></span>', content: "..." }
  ]
});
```

---

## Segmented Tabs

`tabs-segmented` turns the list into a segmented control: a subtle track with equal-width segments, where the selected segment is raised onto the surface. Use it for view switches and short option sets.

::html
<div class="docs-preview">
  <div class="max-w-[420px]">
    <div class="tabs tabs-segmented" role="tablist" aria-label="Billing period">
      <button id="segTabMonthly" class="tab" type="button" data-tabs="#segPanelMonthly" aria-selected="true" role="tab">Monthly</button>
      <button id="segTabYearly" class="tab" type="button" data-tabs="#segPanelYearly" aria-selected="false" role="tab">
        Yearly <span class="badge badge-xs badge-soft-success">-20%</span>
      </button>
      <button id="segTabLifetime" class="tab" type="button" data-tabs="#segPanelLifetime" aria-selected="false" role="tab">Lifetime</button>
    </div>
    <div id="segPanelMonthly" class="tab-panel" role="tabpanel" aria-labelledby="segTabMonthly">
      <p class="m-0"><strong class="text-2xl">$12</strong> <span class="text-subtle text-sm">per seat / month</span></p>
    </div>
    <div id="segPanelYearly" class="tab-panel" role="tabpanel" aria-labelledby="segTabYearly" hidden>
      <p class="m-0"><strong class="text-2xl">$115</strong> <span class="text-subtle text-sm">per seat / year</span></p>
    </div>
    <div id="segPanelLifetime" class="tab-panel" role="tabpanel" aria-labelledby="segTabLifetime" hidden>
      <p class="m-0"><strong class="text-2xl">$349</strong> <span class="text-subtle text-sm">one-time payment</span></p>
    </div>
  </div>

  <div class="max-w-[220px]">
    <div class="tabs tabs-segmented" role="tablist" aria-label="Layout">
      <button id="segTabGrid" class="tab" type="button" data-tabs="#segPanelGrid" aria-selected="true" role="tab" aria-label="Grid view">
        <span class="mdi mdi-view-grid-outline text-lg"></span>
      </button>
      <button id="segTabList" class="tab" type="button" data-tabs="#segPanelList" aria-selected="false" role="tab" aria-label="List view">
        <span class="mdi mdi-view-list-outline text-lg"></span>
      </button>
      <button id="segTabBoard" class="tab" type="button" data-tabs="#segPanelBoard" aria-selected="false" role="tab" aria-label="Board view">
        <span class="mdi mdi-view-column-outline text-lg"></span>
      </button>
    </div>
    <div id="segPanelGrid" class="tab-panel text-subtle text-sm" role="tabpanel" aria-labelledby="segTabGrid">Grid view</div>
    <div id="segPanelList" class="tab-panel text-subtle text-sm" role="tabpanel" aria-labelledby="segTabList" hidden>List view</div>
    <div id="segPanelBoard" class="tab-panel text-subtle text-sm" role="tabpanel" aria-labelledby="segTabBoard" hidden>Board view</div>
  </div>
</div>
::end

```html
<div class="tabs tabs-segmented" role="tablist" aria-label="Billing period">
  <button class="tab" type="button" data-tabs="#monthly" aria-selected="true">Monthly</button>
  <button class="tab" type="button" data-tabs="#yearly" aria-selected="false">
    Yearly <span class="badge badge-xs badge-soft-success">-20%</span>
  </button>
  <button class="tab" type="button" data-tabs="#lifetime" aria-selected="false">Lifetime</button>
</div>

<!-- Icon-only segments need an aria-label -->
<div class="tabs tabs-segmented" role="tablist" aria-label="Layout">
  <button class="tab" type="button" data-tabs="#grid" aria-selected="true" aria-label="Grid view">
    <span class="mdi mdi-view-grid-outline"></span>
  </button>
  <button class="tab" type="button" data-tabs="#list" aria-selected="false" aria-label="List view">
    <span class="mdi mdi-view-list-outline"></span>
  </button>
</div>
```

```js components
import { Tabs, Badge } from "@abydahana/aksara-ui/components";

Tabs({
  variant: "segmented",
  ariaLabel: "Billing period",
  swipeable: false,
  items: [
    { id: "monthly", label: "Monthly", content: "..." },
    {
      id: "yearly",
      label: "Yearly",
      labelHtml: `Yearly ${Badge({ variant: "success", soft: true, size: "xs", label: "-20%" })}`,
      content: "..."
    },
    { id: "lifetime", label: "Lifetime", content: "..." }
  ]
});

// Icon-only segments: an empty label plus an ariaLabel
Tabs({
  variant: "segmented",
  ariaLabel: "Layout",
  swipeable: false,
  items: [
    {
      id: "grid",
      label: "",
      ariaLabel: "Grid view",
      icon: '<span class="mdi mdi-view-grid-outline"></span>',
      content: "..."
    },
    {
      id: "list",
      label: "",
      ariaLabel: "List view",
      icon: '<span class="mdi mdi-view-list-outline"></span>',
      content: "..."
    }
  ]
});
```

---

## Vertical Tabs

Stack pill tabs with `flex-col` and set `data-tabs-orientation="vertical"` (or `aria-orientation="vertical"`) so `↑` / `↓` move between tabs instead of `←` / `→`.

::html
<div class="docs-preview">
  <div class="vstack md:flex-row gap-4">
    <div class="tabs nav nav-pills flex-col shrink-0 md:w-[180px]" role="tablist" aria-label="Account settings" data-tabs-orientation="vertical">
      <button id="vTabProfile" class="tab" type="button" data-tabs="#vPanelProfile" aria-selected="true" role="tab">
        <span class="mdi mdi-account-outline"></span> Profile
      </button>
      <button id="vTabSecurity" class="tab" type="button" data-tabs="#vPanelSecurity" aria-selected="false" role="tab">
        <span class="mdi mdi-shield-lock-outline"></span> Security
      </button>
      <button id="vTabBilling" class="tab" type="button" data-tabs="#vPanelBilling" aria-selected="false" role="tab">
        <span class="mdi mdi-credit-card-outline"></span> Billing
      </button>
      <button id="vTabNotifications" class="tab" type="button" data-tabs="#vPanelNotifications" aria-selected="false" role="tab">
        <span class="mdi mdi-bell-outline"></span> Notifications
      </button>
    </div>
    <div class="flex-1 min-w-0">
      <div id="vPanelProfile" class="tab-panel pt-0" role="tabpanel" aria-labelledby="vTabProfile">
        <h4 class="mt-0 mb-2 fw-bold">Profile</h4>
        <p class="m-0 text-subtle text-sm">Your name, photo and public bio.</p>
      </div>
      <div id="vPanelSecurity" class="tab-panel pt-0" role="tabpanel" aria-labelledby="vTabSecurity" hidden>
        <h4 class="mt-0 mb-2 fw-bold">Security</h4>
        <p class="m-0 text-subtle text-sm">Password, passkeys and two-factor authentication.</p>
      </div>
      <div id="vPanelBilling" class="tab-panel pt-0" role="tabpanel" aria-labelledby="vTabBilling" hidden>
        <h4 class="mt-0 mb-2 fw-bold">Billing</h4>
        <p class="m-0 text-subtle text-sm">Plan, invoices and payment methods.</p>
      </div>
      <div id="vPanelNotifications" class="tab-panel pt-0" role="tabpanel" aria-labelledby="vTabNotifications" hidden>
        <h4 class="mt-0 mb-2 fw-bold">Notifications</h4>
        <p class="m-0 text-subtle text-sm">Choose what reaches your inbox.</p>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="vstack md:flex-row gap-4">
  <div
    class="tabs nav nav-pills flex-col shrink-0 md:w-[180px]"
    role="tablist"
    aria-label="Account settings"
    data-tabs-orientation="vertical"
  >
    <button class="tab" type="button" data-tabs="#vPanelProfile" aria-selected="true">Profile</button>
    <button class="tab" type="button" data-tabs="#vPanelSecurity" aria-selected="false">Security</button>
  </div>
  <div class="flex-1 min-w-0">
    <div id="vPanelProfile" class="tab-panel pt-0">...</div>
    <div id="vPanelSecurity" class="tab-panel pt-0" hidden>...</div>
  </div>
</div>
```

---

## Card Tabs

Put an underline tab list in a card header to switch the card body.

::html
<div class="docs-preview">
  <div class="card">
    <div class="card-header pb-0">
      <div class="tabs" role="tablist" aria-label="Project">
        <button id="cardTabCode" class="tab" type="button" data-tabs="#cardPanelCode" aria-selected="true" role="tab"><span class="mdi mdi-code-tags"></span> Code</button>
        <button id="cardTabIssues" class="tab" type="button" data-tabs="#cardPanelIssues" aria-selected="false" role="tab"><span class="mdi mdi-record-circle-outline"></span> Issues <span class="badge badge-sm badge-soft-secondary">7</span></button>
        <button id="cardTabPulls" class="tab" type="button" data-tabs="#cardPanelPulls" aria-selected="false" role="tab"><span class="mdi mdi-source-pull"></span> Pull requests <span class="badge badge-sm badge-soft-secondary">2</span></button>
      </div>
    </div>
    <div class="card-body">
      <div id="cardPanelCode" class="tab-panel p-0" role="tabpanel" aria-labelledby="cardTabCode">
        <p class="m-0 text-subtle text-sm"><span class="mdi mdi-source-branch"></span> main · 214 commits · updated 2 hours ago</p>
      </div>
      <div id="cardPanelIssues" class="tab-panel p-0" role="tabpanel" aria-labelledby="cardTabIssues" hidden>
        <p class="m-0 text-subtle text-sm">7 open issues, 3 labelled <span class="badge badge-soft-danger">bug</span></p>
      </div>
      <div id="cardPanelPulls" class="tab-panel p-0" role="tabpanel" aria-labelledby="cardTabPulls" hidden>
        <p class="m-0 text-subtle text-sm">2 open pull requests awaiting review.</p>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-header pb-0">
    <div class="tabs" role="tablist" aria-label="Project">
      <button class="tab" type="button" data-tabs="#cardPanelCode" aria-selected="true">Code</button>
      <button class="tab" type="button" data-tabs="#cardPanelIssues" aria-selected="false">
        Issues <span class="badge badge-sm badge-soft-secondary">7</span>
      </button>
    </div>
  </div>
  <div class="card-body">
    <div id="cardPanelCode" class="tab-panel p-0">...</div>
    <div id="cardPanelIssues" class="tab-panel p-0" hidden>...</div>
  </div>
</div>
```

---

## Swipeable Panels

Place the panels in a `.tabs-slider-track` (or any element with `data-tabs-slider`) inside a `.tabs-slider` wrapper. Panels then sit side by side, the track slides to the active one, and touch users can swipe between them. Mark the wrapper with `data-tabs-wrapper` so the tab list finds its own track.

::html
<div class="docs-preview">
  <div class="tabs-slider" data-tabs-wrapper>
    <div class="tabs tabs-segmented" role="tablist" aria-label="Onboarding">
      <button id="slideTabOne" class="tab" type="button" data-tabs="#slidePanelOne" aria-selected="true" role="tab">1. Account</button>
      <button id="slideTabTwo" class="tab" type="button" data-tabs="#slidePanelTwo" aria-selected="false" role="tab">2. Team</button>
      <button id="slideTabThree" class="tab" type="button" data-tabs="#slidePanelThree" aria-selected="false" role="tab">3. Done</button>
    </div>
    <div class="tabs-slider-track" data-tabs-slider>
      <div id="slidePanelOne" class="tab-panel" role="tabpanel" aria-labelledby="slideTabOne">
        <div class="p-4 bg-subtle rounded-lg"><strong class="block mb-1">Create your account</strong><span class="text-subtle text-sm">Swipe left on touch devices, or pick a step above.</span></div>
      </div>
      <div id="slidePanelTwo" class="tab-panel" role="tabpanel" aria-labelledby="slideTabTwo">
        <div class="p-4 bg-subtle rounded-lg"><strong class="block mb-1">Invite your team</strong><span class="text-subtle text-sm">Panels slide horizontally instead of toggling <code>hidden</code>.</span></div>
      </div>
      <div id="slidePanelThree" class="tab-panel" role="tabpanel" aria-labelledby="slideTabThree">
        <div class="p-4 bg-subtle rounded-lg"><strong class="block mb-1">All set</strong><span class="text-subtle text-sm">The track uses a 300ms eased transform.</span></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="tabs-slider" data-tabs-wrapper>
  <div class="tabs tabs-segmented" role="tablist">
    <button class="tab" type="button" data-tabs="#slidePanelOne" aria-selected="true">1. Account</button>
    <button class="tab" type="button" data-tabs="#slidePanelTwo" aria-selected="false">2. Team</button>
  </div>
  <div class="tabs-slider-track" data-tabs-slider>
    <div id="slidePanelOne" class="tab-panel">...</div>
    <div id="slidePanelTwo" class="tab-panel">...</div>
  </div>
</div>
```

```js components
import { Tabs } from "@abydahana/aksara-ui/components";

// swipeable defaults to true: .tabs-slider wrapper plus a [data-tabs-slider] track
Tabs({
  variant: "segmented",
  items: [
    { id: "slideAccount", label: "1. Account", content: "..." },
    { id: "slideTeam", label: "2. Team", content: "..." }
  ]
});
```

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Class</th><th>Applies to</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>tabs</code></td><td>tab list</td><td>Horizontal flex row with a bottom border and hidden horizontal scrollbar.</td></tr>
      <tr><td class="text-nowrap"><code>tab</code></td><td>button</td><td>Muted tab with an underline when <code>aria-selected="true"</code> or <code>.active</code>.</td></tr>
      <tr><td class="text-nowrap"><code>tab-panel</code></td><td>panel</td><td>Panel with <code>1rem</code> vertical padding. The runtime toggles <code>hidden</code> and <code>.active</code>.</td></tr>
      <tr><td class="text-nowrap"><code>nav nav-pills</code></td><td>tab list</td><td>Pill tabs: no underline, rounded tabs, tinted active fill.</td></tr>
      <tr><td class="text-nowrap"><code>tabs-segmented</code></td><td>tab list</td><td>Segmented control: subtle track, equal-width segments, raised active segment.</td></tr>
      <tr><td class="text-nowrap"><code>tabs-slider</code></td><td>wrapper</td><td>Clips the slider track.</td></tr>
      <tr><td class="text-nowrap"><code>tabs-slider-track</code></td><td>panel row</td><td>Lays panels side by side and slides to the active one. <code>.tab-pane</code> children are supported too.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## JavaScript

`Aksara.init()` creates a `Tabs` instance for every `.tabs` element and every element with `data-tabs-root`. Each tab button points at its panel with `data-tabs="#panelId"`; Aksara links them with `aria-controls` / `aria-labelledby` when both have an `id`.

Arrow keys move between tabs (mirrored in RTL), `Home` / `End` jump to the first and last one. A tab that is `disabled`, `aria-disabled="true"` or `.disabled` is skipped by clicks, arrow keys, swipes and the initial activation.

### Options

Options can be passed to `Aksara.tabs()` or set as `data-tabs-*` attributes on the tab list.

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Option</th><th>Attribute</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>active</code></td><td class="text-nowrap"><code>data-tabs-active</code></td><td class="text-nowrap"><code>null</code></td><td>Selector (or element) of the tab to activate on init.</td></tr>
      <tr><td class="text-nowrap"><code>activeIndex</code></td><td class="text-nowrap"><code>data-tabs-active-index</code></td><td class="text-nowrap"><code>-1</code></td><td>Zero-based index of the tab to activate when <code>active</code> is not set.</td></tr>
      <tr><td class="text-nowrap"><code>keyboard</code></td><td class="text-nowrap"><code>data-tabs-keyboard</code></td><td class="text-nowrap"><code>true</code></td><td>Enables arrow-key navigation.</td></tr>
      <tr><td class="text-nowrap"><code>loop</code></td><td class="text-nowrap"><code>data-tabs-loop</code></td><td class="text-nowrap"><code>true</code></td><td>Wraps focus from the last tab to the first and back.</td></tr>
      <tr><td class="text-nowrap"><code>orientation</code></td><td class="text-nowrap"><code>data-tabs-orientation</code></td><td class="text-nowrap"><code>"horizontal"</code></td><td><code>"vertical"</code> switches the arrow keys to <code>↑</code> / <code>↓</code>. Falls back to <code>aria-orientation</code>.</td></tr>
      <tr><td class="text-nowrap"><code>tabSelector</code></td><td class="text-nowrap"><code>data-tabs-tab-selector</code></td><td class="text-nowrap"><code>"[data-tabs]"</code></td><td>Which descendants count as tabs.</td></tr>
      <tr><td class="text-nowrap"><code>panelSelector</code></td><td class="text-nowrap"><code>data-tabs-panel-selector</code></td><td class="text-nowrap"><code>null</code></td><td>Extra panels to hide whenever a tab is shown.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
const tabs = Aksara.tabs(".tabs", {
  activeIndex: 0,
  keyboard: true,
  loop: true,
  orientation: "horizontal"
});
```

### Methods

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Method</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>tabs.show(tab, animate?)</code></td><td>Activates a tab element and its panel. Pass <code>false</code> to skip the slider animation and scroll-into-view.</td></tr>
      <tr><td class="text-nowrap"><code>tabs.updateOptions(options)</code></td><td>Merges new options. Passing <code>active</code> or <code>activeIndex</code> re-activates the matching tab.</td></tr>
      <tr><td class="text-nowrap"><code>tabs.destroy()</code></td><td>Removes the listeners and the stored instance.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
const settingsTabs = Aksara.tabs("#settingsTabs");
settingsTabs.show(document.querySelector("#vTabSecurity"));
settingsTabs.updateOptions({ activeIndex: 2 });
```

### Events

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Event</th><th>Fired on</th><th>Detail</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>aksara:tabs:show</code></td><td>tab list</td><td class="text-nowrap"><code>{ tab, panel, index, instance }</code></td></tr>
      <tr><td class="text-nowrap"><code>aksara:tabs:destroy</code></td><td>tab list</td><td class="text-nowrap"><code>{ instance }</code></td></tr>
    </tbody>
  </table>
</div>
::end

```js
const tabContainer = document.querySelector(".tabs");

tabContainer.addEventListener("aksara:tabs:show", (event) => {
  console.log("Tab swapped", event.detail.tab, "index", event.detail.index);
  console.log("Activated panel", event.detail.panel);
});
```

### String Component

`Tabs({ items, variant, swipeable, ariaLabel })` renders the list and panels in one call. Each item takes `label` (escaped) or `labelHtml` (raw, for badges), an `icon` (HTML) and an `ariaLabel` for icon-only tabs. `variant` is `"default"`, `"pills"` or `"segmented"`; `swipeable` (default `true`) wraps the panels in a slider track.

```js
import { Tabs } from "@abydahana/aksara-ui/components";

Tabs({
  variant: "segmented",
  swipeable: false,
  items: [
    { id: "monthly", label: "Monthly", content: "<p>$12 per seat</p>", active: true },
    { id: "yearly", label: "Yearly", content: "<p>$115 per seat</p>" }
  ]
});
```
