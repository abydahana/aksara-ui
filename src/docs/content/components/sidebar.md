# Sidebar Nav

A vertical navigation component that supports two modes: **tab mode** — switch content panels on the same page using the Aksara tab API — and **link mode** — standard navigation links. Combine it with `sidebar-layout` for the classic two-column macOS-style layout.

---

## Tab Mode

Use `data-tabs` on sidebar items to control content panels on the right. The Aksara JS tab handler manages activation and panel visibility automatically.

::html
<div class="docs-preview p-0">
  <div class="sidebar-layout" style="height:480px; border: 1px solid var(--aksara-border-subtle); border-radius: var(--aksara-radius); overflow:hidden;">
    <!-- Sidebar Pane -->
    <div class="sidebar-pane">
      <nav class="sidebar-nav" role="tablist" aria-label="Settings Navigation">
        <!-- Brand header -->
        <div class="sidebar-nav-brand">
          <span class="sidebar-nav-icon" aria-hidden="true"><span class="mdi mdi-account-circle-outline text-subtle"></span></span>
          <div>
            <span class="sidebar-nav-brand-title">Accounts Center</span>
            <span class="sidebar-nav-brand-subtitle">Password, security, personal details</span>
          </div>
        </div>

        <button id="sbTabPrivacy" class="sidebar-nav-item active" type="button" data-tabs="#sbPanelPrivacy" role="tab" aria-selected="true" tabindex="0" aria-controls="sbPanelPrivacy">
          <span class="sidebar-nav-icon" aria-hidden="true"><span class="mdi mdi-lock-outline"></span></span>
          <span class="sidebar-nav-label">Privacy</span>
        </button>
        <button id="sbTabContent" class="sidebar-nav-item" type="button" data-tabs="#sbPanelContent" role="tab" aria-selected="false" tabindex="-1" aria-controls="sbPanelContent">
          <span class="sidebar-nav-icon" aria-hidden="true"><span class="mdi mdi-tune-vertical-variant"></span></span>
          <span class="sidebar-nav-label">Content preferences</span>
        </button>
        <button id="sbTabNotif" class="sidebar-nav-item" type="button" data-tabs="#sbPanelNotif" role="tab" aria-selected="false" tabindex="-1" aria-controls="sbPanelNotif">
          <span class="sidebar-nav-icon" aria-hidden="true"><span class="mdi mdi-bell-outline"></span></span>
          <span class="sidebar-nav-label">Notifications</span>
        </button>
        <button id="sbTabAccount" class="sidebar-nav-item" type="button" data-tabs="#sbPanelAccount" role="tab" aria-selected="false" tabindex="-1" aria-controls="sbPanelAccount">
          <span class="sidebar-nav-icon" aria-hidden="true"><span class="mdi mdi-account-outline"></span></span>
          <span class="sidebar-nav-label">Account status</span>
        </button>
        <button id="sbTabHelp" class="sidebar-nav-item" type="button" data-tabs="#sbPanelHelp" role="tab" aria-selected="false" tabindex="-1" aria-controls="sbPanelHelp">
          <span class="sidebar-nav-icon" aria-hidden="true"><span class="mdi mdi-help-circle-outline"></span></span>
          <span class="sidebar-nav-label">Help</span>
        </button>
      </nav>
    </div>

    <!-- Content Area -->
    <div class="sidebar-content p-5 overflow-y-auto">

      <div id="sbPanelPrivacy" class="tab-panel" role="tabpanel" aria-labelledby="sbTabPrivacy">
        <h2 class="text-24 font-800 mt-0 mb-2">Privacy</h2>
        <p class="text-subtle text-sm mt-0 mb-4">Manage your profile visibility, tag permissions, and interactions.</p>
        <div class="list-group">
          <a class="list-group-item list-group-item-action" href="#">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-7 h-7 shrink-0 text-lg" style="color:#6366f1;"><span class="mdi mdi-lock-outline"></span></span>
              <span class="flex-1 font-600">Private profile</span>
              <span class="text-subtle text-sm">Public</span>
              <span class="text-subtle opacity-50 text-sm ms-1">&#8250;</span>
            </div>
          </a>
          <a class="list-group-item list-group-item-action" href="#">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-7 h-7 shrink-0 text-lg" style="color:#06b6d4;"><span class="mdi mdi-at"></span></span>
              <span class="flex-1 font-600">Tags and mentions</span>
              <span class="text-subtle text-sm">Everyone</span>
              <span class="text-subtle opacity-50 text-sm ms-1">&#8250;</span>
            </div>
          </a>
          <a class="list-group-item list-group-item-action" href="#">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-7 h-7 shrink-0 text-lg" style="color:#22c55e;"><span class="mdi mdi-account-clock-outline"></span></span>
              <span class="flex-1 font-600">Online status</span>
              <span class="text-subtle text-sm">Active</span>
              <span class="text-subtle opacity-50 text-sm ms-1">&#8250;</span>
            </div>
          </a>
          <a class="list-group-item list-group-item-action" href="#">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-7 h-7 shrink-0 text-lg" style="color:#f43f5e;"><span class="mdi mdi-cancel"></span></span>
              <span class="flex-1 font-600">Blocked profiles</span>
              <span class="text-subtle opacity-50 text-sm ms-1">&#8250;</span>
            </div>
          </a>
        </div>
      </div>

      <div id="sbPanelContent" class="tab-panel" role="tabpanel" aria-labelledby="sbTabContent" hidden>
        <h2 class="text-24 font-800 mt-0 mb-2">Content preferences</h2>
        <p class="text-subtle text-sm mt-0 mb-4">Control what types of content appear in your feed.</p>
        <div class="list-group">
          <div class="list-group-item">
            <div class="flex items-center gap-4">
              <div class="flex-1 min-w-0">
                <span class="font-600 block">Default Proximity Alert Radius</span>
                <span class="text-subtle text-sm block mt-1">Prioritize reports occurring within this distance from your current coordinates.</span>
              </div>
              <select class="form-select form-select-sm shrink-0" style="width:auto;min-width:140px;">
                <option selected>25 km (City)</option>
                <option>10 km (Local)</option>
                <option>50 km (Region)</option>
              </select>
            </div>
          </div>
          <div class="list-group-item">
            <div class="flex items-center gap-4">
              <div class="flex-1 min-w-0">
                <span class="font-600 block">Verified reports only</span>
                <span class="text-subtle text-sm block mt-1">Only display observations that have passed community or authority verification.</span>
              </div>
              <div class="form-switch shrink-0">
                <input type="checkbox" role="switch" class="form-check-input" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sbPanelNotif" class="tab-panel" role="tabpanel" aria-labelledby="sbTabNotif" hidden>
        <h2 class="text-24 font-800 mt-0 mb-2">Notifications</h2>
        <p class="text-subtle text-sm mt-0 mb-4">Choose what alerts and updates you receive.</p>
        <div class="list-group">
          <div class="list-group-item">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-7 h-7 shrink-0 text-lg" style="color:#f43f5e;"><span class="mdi mdi-alert-circle"></span></span>
              <div class="flex-1 min-w-0">
                <span class="font-600 block">Disaster &amp; Critical Alerts</span>
                <span class="text-subtle text-sm block mt-1">Receive urgent notifications for high-severity hazards nearby</span>
              </div>
              <div class="form-switch shrink-0"><input type="checkbox" role="switch" class="form-check-input" checked /></div>
            </div>
          </div>
          <div class="list-group-item">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-7 h-7 shrink-0 text-lg" style="color:#22c55e;"><span class="mdi mdi-check-decagram-outline"></span></span>
              <div class="flex-1 min-w-0">
                <span class="font-600 block">Verification Updates</span>
                <span class="text-subtle text-sm block mt-1">Get notified when community verifies or updates your observation</span>
              </div>
              <div class="form-switch shrink-0"><input type="checkbox" role="switch" class="form-check-input" checked /></div>
            </div>
          </div>
        </div>
      </div>

      <div id="sbPanelAccount" class="tab-panel" role="tabpanel" aria-labelledby="sbTabAccount" hidden>
        <h2 class="text-24 font-800 mt-0 mb-2">Account status</h2>
        <p class="text-subtle text-sm mt-0 mb-4">Manage your account standing and verification level.</p>
        <div class="p-4 rounded-12 bg-success/8 border border-success/24 hstack gap-3">
          <span class="mdi mdi-check-circle text-success text-xl"></span>
          <div>
            <strong class="block">Account in good standing</strong>
            <span class="text-subtle text-sm">No violations or pending reviews.</span>
          </div>
        </div>
      </div>

      <div id="sbPanelHelp" class="tab-panel" role="tabpanel" aria-labelledby="sbTabHelp" hidden>
        <h2 class="text-24 font-800 mt-0 mb-2">Help</h2>
        <p class="text-subtle text-sm mt-0 mb-4">Resources and support options.</p>
        <div class="list-group">
          <a class="list-group-item list-group-item-action" href="#">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-7 h-7 shrink-0 text-lg" style="color:#6366f1;"><span class="mdi mdi-book-open-outline"></span></span>
              <span class="flex-1 font-600">Documentation</span>
              <span class="text-subtle opacity-50 text-sm ms-1">&#8250;</span>
            </div>
          </a>
          <a class="list-group-item list-group-item-action" href="#">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-7 h-7 shrink-0 text-lg" style="color:#22c55e;"><span class="mdi mdi-message-question-outline"></span></span>
              <span class="flex-1 font-600">Contact Support</span>
              <span class="text-subtle opacity-50 text-sm ms-1">&#8250;</span>
            </div>
          </a>
        </div>
      </div>

    </div>

  </div>
</div>
::end

```html
<!-- Two-column layout -->
<div class="sidebar-layout">
  <!-- Left pane: sidebar navigation -->
  <div class="sidebar-pane">
    <nav class="sidebar-nav" role="tablist" aria-label="Settings Navigation">
      <!-- Optional brand header -->
      <div class="sidebar-nav-brand">
        <span class="sidebar-nav-icon"><span class="mdi mdi-account-circle-outline"></span></span>
        <div>
          <span class="sidebar-nav-brand-title">Accounts Center</span>
          <span class="sidebar-nav-brand-subtitle">Password, security, personal details</span>
        </div>
      </div>

      <!-- Tab buttons -->
      <button
        class="sidebar-nav-item active"
        type="button"
        data-tabs="#panelPrivacy"
        role="tab"
        aria-selected="true"
        tabindex="0"
      >
        <span class="sidebar-nav-icon"><span class="mdi mdi-lock-outline"></span></span>
        <span class="sidebar-nav-label">Privacy</span>
      </button>

      <button
        class="sidebar-nav-item"
        type="button"
        data-tabs="#panelNotif"
        role="tab"
        aria-selected="false"
        tabindex="-1"
      >
        <span class="sidebar-nav-icon"><span class="mdi mdi-bell-outline"></span></span>
        <span class="sidebar-nav-label">Notifications</span>
      </button>
    </nav>
  </div>

  <!-- Right pane: content panels -->
  <div class="sidebar-content p-5">
    <div id="panelPrivacy" class="tab-panel" role="tabpanel">
      <!-- Privacy content -->
    </div>
    <div id="panelNotif" class="tab-panel" role="tabpanel" hidden>
      <!-- Notifications content -->
    </div>
  </div>
</div>
```

---

## Link Mode

Use `<a href>` for standard navigation without panel switching.

::html
<div class="docs-preview">
  <div style="width:220px;">
    <nav class="sidebar-nav">
      <span class="sidebar-nav-header">Main Menu</span>
      <a class="sidebar-nav-item active" href="#" aria-current="page">
        <span class="sidebar-nav-icon"><span class="mdi mdi-home-outline"></span></span>
        <span class="sidebar-nav-label">Dashboard</span>
      </a>
      <a class="sidebar-nav-item" href="#">
        <span class="sidebar-nav-icon"><span class="mdi mdi-map-outline"></span></span>
        <span class="sidebar-nav-label">Hazard Map</span>
        <span class="sidebar-nav-badge">3</span>
      </a>
      <a class="sidebar-nav-item" href="#">
        <span class="sidebar-nav-icon"><span class="mdi mdi-bell-outline"></span></span>
        <span class="sidebar-nav-label">Alerts</span>
        <span class="sidebar-nav-badge">12</span>
      </a>
      <a class="sidebar-nav-item" href="#">
        <span class="sidebar-nav-icon"><span class="mdi mdi-account-group-outline"></span></span>
        <span class="sidebar-nav-label">Community</span>
      </a>
      <span class="sidebar-nav-header">Account</span>
      <a class="sidebar-nav-item" href="#">
        <span class="sidebar-nav-icon"><span class="mdi mdi-cog-outline"></span></span>
        <span class="sidebar-nav-label">Settings</span>
      </a>
      <a class="sidebar-nav-item" href="#">
        <span class="sidebar-nav-icon"><span class="mdi mdi-help-circle-outline"></span></span>
        <span class="sidebar-nav-label">Help</span>
      </a>
    </nav>
  </div>
</div>
::end

```html
<nav class="sidebar-nav">
  <span class="sidebar-nav-header">Main Menu</span>

  <a class="sidebar-nav-item active" href="/dashboard" aria-current="page">
    <span class="sidebar-nav-icon"><span class="mdi mdi-home-outline"></span></span>
    <span class="sidebar-nav-label">Dashboard</span>
  </a>

  <!-- Link with badge -->
  <a class="sidebar-nav-item" href="/alerts">
    <span class="sidebar-nav-icon"><span class="mdi mdi-bell-outline"></span></span>
    <span class="sidebar-nav-label">Alerts</span>
    <span class="sidebar-nav-badge">12</span>
  </a>
</nav>
```

---

## API Reference

### Layout Classes

::html
<table class="table table-bordered text-sm">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><code>.sidebar-layout</code></td><td>Flex wrapper for the two-column layout</td></tr>
    <tr><td><code>.sidebar-pane</code></td><td>Left column, fixed width <code>14rem</code>, with a right border</td></tr>
    <tr><td><code>.sidebar-content</code></td><td>Right column, <code>flex:1</code>, scrollable</td></tr>
  </tbody>
</table>
::end

### Sidebar Nav Classes

::html
<table class="table table-bordered text-sm">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><code>.sidebar-nav</code></td><td>Vertical nav container</td></tr>
    <tr><td><code>.sidebar-nav-item</code></td><td>Row item — link or button. Add <code>.active</code> for the selected state</td></tr>
    <tr><td><code>.sidebar-nav-icon</code></td><td>Icon wrapper, <code>1.375rem</code></td></tr>
    <tr><td><code>.sidebar-nav-label</code></td><td>Text label, fills remaining width</td></tr>
    <tr><td><code>.sidebar-nav-badge</code></td><td>Pill count badge on the trailing edge</td></tr>
    <tr><td><code>.sidebar-nav-header</code></td><td>Section group heading — uppercase, small caps</td></tr>
    <tr><td><code>.sidebar-nav-brand</code></td><td>Optional branding block at the top of the sidebar</td></tr>
    <tr><td><code>.sidebar-nav-brand-title</code></td><td>Brand title text</td></tr>
    <tr><td><code>.sidebar-nav-brand-subtitle</code></td><td>Brand subtitle / description text</td></tr>
  </tbody>
</table>
::end

### Tab Mode Integration

- Add `role="tablist"` to the `<nav>` wrapper
- Add `data-tabs="#panelId"`, `role="tab"`, `aria-selected`, `tabindex` to each item
- Content panels use `class="tab-panel"` with `hidden` on inactive panels
