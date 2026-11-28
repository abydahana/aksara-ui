# Table

`.table` styles native tables with comfortable padding, row dividers and an uppercase header row. Modifiers add stripes, hover, borders and compact spacing, and the `.table-responsive` wrapper scrolls wide tables horizontally inside a rounded frame.

::html
<div class="docs-preview">
  <div class="table-responsive">
      <table class="table">
        <thead><tr><th>Invoice</th><th>Customer</th><th>Status</th><th class="text-end">Amount</th></tr></thead>
        <tbody>
          <tr><td>#0041</td><td>Acme Corp</td><td><span class="badge badge-soft-success">Paid</span></td><td class="text-end">$1,240.00</td></tr>
          <tr><td>#0042</td><td>Globex</td><td><span class="badge badge-soft-warning">Pending</span></td><td class="text-end">$860.00</td></tr>
          <tr><td>#0043</td><td>Initech</td><td><span class="badge badge-soft-danger">Overdue</span></td><td class="text-end">$2,115.50</td></tr>
        </tbody>
      </table>
    </div>
</div>
::end

```html
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Invoice</th>
        <th>Customer</th>
        <th>Status</th>
        <th class="text-end">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#0041</td>
        <td>Acme Corp</td>
        <td><span class="badge badge-soft-success">Paid</span></td>
        <td class="text-end">$1,240.00</td>
      </tr>
    </tbody>
  </table>
</div>
```

```js components
import { Table, TableHead, TableBody, TableRow, Badge } from "@abydahana/aksara-ui/components";

Table({
  responsive: true,
  children:
    TableHead({
      children: '<tr><th>Invoice</th><th>Customer</th><th>Status</th><th class="text-end">Amount</th></tr>'
    }) +
    TableBody({
      children: TableRow({
        children: `<td>#0041</td><td>Acme Corp</td>
          <td>${Badge({ variant: "success", soft: true, label: "Paid" })}</td>
          <td class="text-end">$1,240.00</td>`
      })
    })
});
```

---

## Variants

Combine modifiers freely on the `<table>`.

::html
<div class="docs-preview">
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Striped <code>table-striped</code></h4>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead><tr><th>Invoice</th><th>Customer</th><th>Status</th><th class="text-end">Amount</th></tr></thead>
        <tbody>
          <tr><td>#0041</td><td>Acme Corp</td><td><span class="badge badge-soft-success">Paid</span></td><td class="text-end">$1,240.00</td></tr>
          <tr><td>#0042</td><td>Globex</td><td><span class="badge badge-soft-warning">Pending</span></td><td class="text-end">$860.00</td></tr>
          <tr><td>#0043</td><td>Initech</td><td><span class="badge badge-soft-danger">Overdue</span></td><td class="text-end">$2,115.50</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Hover <code>table-hover</code></h4>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead><tr><th>Invoice</th><th>Customer</th><th>Status</th><th class="text-end">Amount</th></tr></thead>
        <tbody>
          <tr><td>#0041</td><td>Acme Corp</td><td><span class="badge badge-soft-success">Paid</span></td><td class="text-end">$1,240.00</td></tr>
          <tr><td>#0042</td><td>Globex</td><td><span class="badge badge-soft-warning">Pending</span></td><td class="text-end">$860.00</td></tr>
          <tr><td>#0043</td><td>Initech</td><td><span class="badge badge-soft-danger">Overdue</span></td><td class="text-end">$2,115.50</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Bordered <code>table-bordered</code></h4>
    <table class="table table-bordered">
      <thead><tr><th>Invoice</th><th>Customer</th><th>Status</th><th class="text-end">Amount</th></tr></thead>
      <tbody>
        <tr><td>#0041</td><td>Acme Corp</td><td><span class="badge badge-soft-success">Paid</span></td><td class="text-end">$1,240.00</td></tr>
        <tr><td>#0042</td><td>Globex</td><td><span class="badge badge-soft-warning">Pending</span></td><td class="text-end">$860.00</td></tr>
        <tr><td>#0043</td><td>Initech</td><td><span class="badge badge-soft-danger">Overdue</span></td><td class="text-end">$2,115.50</td></tr>
      </tbody>
    </table>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Borderless <code>table-borderless</code></h4>
    <table class="table table-borderless">
      <thead><tr><th>Invoice</th><th>Customer</th><th>Status</th><th class="text-end">Amount</th></tr></thead>
      <tbody>
        <tr><td>#0041</td><td>Acme Corp</td><td><span class="badge badge-soft-success">Paid</span></td><td class="text-end">$1,240.00</td></tr>
        <tr><td>#0042</td><td>Globex</td><td><span class="badge badge-soft-warning">Pending</span></td><td class="text-end">$860.00</td></tr>
        <tr><td>#0043</td><td>Initech</td><td><span class="badge badge-soft-danger">Overdue</span></td><td class="text-end">$2,115.50</td></tr>
      </tbody>
    </table>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Compact <code>table-compact</code> / <code>table-sm</code></h4>
    <div class="table-responsive">
      <table class="table table-compact table-hover">
        <thead><tr><th>Invoice</th><th>Customer</th><th>Status</th><th class="text-end">Amount</th></tr></thead>
        <tbody>
          <tr><td>#0041</td><td>Acme Corp</td><td><span class="badge badge-soft-success">Paid</span></td><td class="text-end">$1,240.00</td></tr>
          <tr><td>#0042</td><td>Globex</td><td><span class="badge badge-soft-warning">Pending</span></td><td class="text-end">$860.00</td></tr>
          <tr><td>#0043</td><td>Initech</td><td><span class="badge badge-soft-danger">Overdue</span></td><td class="text-end">$2,115.50</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <h4 class="mt-0 mb-3 fw-bold text-sm">Extra small <code>table-sm</code></h4>
    <div class="table-responsive">
      <table class="table table-sm">
        <thead><tr><th>Invoice</th><th>Customer</th><th>Status</th><th class="text-end">Amount</th></tr></thead>
        <tbody>
          <tr><td>#0041</td><td>Acme Corp</td><td><span class="badge badge-soft-success">Paid</span></td><td class="text-end">$1,240.00</td></tr>
          <tr><td>#0042</td><td>Globex</td><td><span class="badge badge-soft-warning">Pending</span></td><td class="text-end">$860.00</td></tr>
          <tr><td>#0043</td><td>Initech</td><td><span class="badge badge-soft-danger">Overdue</span></td><td class="text-end">$2,115.50</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</div>
::end

```html
<table class="table table-striped">
  ...
</table>
<table class="table table-hover">
  ...
</table>
<table class="table table-bordered">
  ...
</table>
<table class="table table-borderless">
  ...
</table>
<table class="table table-compact table-hover">
  ...
</table>
<table class="table table-sm">
  ...
</table>
<table class="table table-dark">
  ...
</table>
```

```js components
import { Table } from "@abydahana/aksara-ui/components";

Table({ striped: true, children: "..." });
Table({ hover: true, children: "..." });
Table({ bordered: true, children: "..." });
Table({ borderless: true, children: "..." });
Table({ hover: true, className: "table-compact", children: "..." });
Table({ className: "table-sm", children: "..." });
Table({ dark: true, children: "..." });

// small adds both .table-compact and .table-sm
Table({ small: true, children: "..." });
```

---

## Row and Cell Colors

`table-{color}` tints a row or a single cell with a 10% wash of the theme color. `table-active` highlights a selected row.

::html
<div class="docs-preview">
  <div class="table-responsive">
    <table class="table table-compact">
      <thead><tr><th>Class</th><th>Example</th><th class="text-end">Value</th></tr></thead>
      <tbody>
        <tr class="table-active"><td class="text-nowrap"><code>table-active</code></td><td>Selected row</td><td class="text-end">42</td></tr>
        <tr class="table-primary"><td class="text-nowrap"><code>table-primary</code></td><td>Primary row</td><td class="text-end">42</td></tr>
        <tr class="table-secondary"><td class="text-nowrap"><code>table-secondary</code></td><td>Secondary row</td><td class="text-end">42</td></tr>
        <tr class="table-tertiary"><td class="text-nowrap"><code>table-tertiary</code></td><td>Tertiary row</td><td class="text-end">42</td></tr>
        <tr class="table-success"><td class="text-nowrap"><code>table-success</code></td><td>Success row</td><td class="text-end">42</td></tr>
        <tr class="table-danger"><td class="text-nowrap"><code>table-danger</code></td><td>Danger row</td><td class="text-end">42</td></tr>
        <tr class="table-warning"><td class="text-nowrap"><code>table-warning</code></td><td>Warning row</td><td class="text-end">42</td></tr>
        <tr class="table-info"><td class="text-nowrap"><code>table-info</code></td><td>Info row</td><td class="text-end">42</td></tr>
        <tr class="table-light"><td class="text-nowrap"><code>table-light</code></td><td>Light row</td><td class="text-end">42</td></tr>
        <tr><td>Single cell</td><td class="table-success">Only this cell is tinted</td><td class="text-end table-danger">-12</td></tr>
      </tbody>
    </table>
  </div>
</div>
::end

```html
<tr class="table-active">
  ...
</tr>
<tr class="table-success">
  ...
</tr>
<td class="table-danger">-12</td>
```

```js components
import { TableRow } from "@abydahana/aksara-ui/components";

TableRow({ active: true, children: "..." });
TableRow({ variant: "success", children: "..." });

// Cells have no component; tint them with the class
TableRow({ children: '<td>Single cell</td><td class="table-danger">-12</td>' });
```

---

## Team Members

A realistic list with working selection: tick rows, use the header checkbox to select or clear all (it shows the mixed state when only some are selected), shift-click to select a range, and the bulk actions appear while something is selected. Avatars with status dots, two-line cells, status badges and a row action menu complete the row. See [Selectable Rows](#/components/table) below for the API.

::html
<div class="docs-preview [overflow:visible_!important]">
  <div class="hstack justify-between flex-wrap gap-2">
    <span class="text-sm text-subtle"><strong class="text-body" data-table-count="#teamTable">0</strong> of 5 selected</span>
    <div class="hstack gap-2" data-table-bulk="#teamTable" hidden>
      <button class="btn btn-plain btn-sm" type="button"><span class="mdi mdi-tray-arrow-down"></span> Export</button>
      <button class="btn btn-soft-danger btn-sm" type="button"><span class="mdi mdi-trash-can-outline"></span> Remove</button>
    </div>
  </div>
  <div class="table-responsive">
    <table id="teamTable" class="table table-hover" data-table-select>
      <thead>
        <tr>
          <th class="table-check"><input class="form-check-input" type="checkbox" data-table-select-all aria-label="Select all members"></th>
          <th>Member</th>
          <th>Title</th>
          <th>Status</th>
          <th class="text-end">Last active</th>
          <th class="text-end"><span class="visually-hidden">Actions</span></th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td class="table-check"><input class="form-check-input" type="checkbox" data-table-select-row aria-label="Select Maya Chen"></td>
            <td>
              <div class="hstack gap-3">
                <span class="avatar avatar-md rounded-full avatar-primary" aria-hidden="true">MC<span class="avatar-status bg-success"></span></span>
                <div class="min-w-0"><strong class="block">Maya Chen</strong><span class="text-subtle text-sm">maya.chen@example.com</span></div>
              </div>
            </td>
            <td><span class="block">Product Designer</span><span class="text-subtle text-sm">Admin</span></td>
            <td><span class="badge badge-soft-success">Active</span></td>
            <td class="text-end text-subtle text-nowrap">2m ago</td>
            <td>
              <div class="hstack gap-1 justify-end">
                <button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Edit Maya Chen" data-tooltip="Edit"><span class="mdi mdi-pencil-outline"></span></button>
                <div class="dropdown">
                  <button class="btn btn-ghost btn-sm btn-icon" type="button" data-dropdown="#userMenu0" aria-label="More actions for Maya Chen"><span class="mdi mdi-dots-vertical"></span></button>
                  <div id="userMenu0" class="dropdown-menu dropdown-menu-end dropdown-menu-sm">
                    <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-eye-outline"></span> View profile</button>
                    <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-email-outline"></span> Send email</button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item dropdown-item-danger hstack gap-2" type="button"><span class="mdi mdi-trash-can-outline"></span> Remove</button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table-check"><input class="form-check-input" type="checkbox" data-table-select-row aria-label="Select Alex Morgan" checked></td>
            <td>
              <div class="hstack gap-3">
                <span class="avatar avatar-md rounded-full avatar-info" aria-hidden="true">AM<span class="avatar-status bg-success"></span></span>
                <div class="min-w-0"><strong class="block">Alex Morgan</strong><span class="text-subtle text-sm">alex.morgan@example.com</span></div>
              </div>
            </td>
            <td><span class="block">Frontend Engineer</span><span class="text-subtle text-sm">Editor</span></td>
            <td><span class="badge badge-soft-success">Active</span></td>
            <td class="text-end text-subtle text-nowrap">1h ago</td>
            <td>
              <div class="hstack gap-1 justify-end">
                <button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Edit Alex Morgan" data-tooltip="Edit"><span class="mdi mdi-pencil-outline"></span></button>
                <div class="dropdown">
                  <button class="btn btn-ghost btn-sm btn-icon" type="button" data-dropdown="#userMenu1" aria-label="More actions for Alex Morgan"><span class="mdi mdi-dots-vertical"></span></button>
                  <div id="userMenu1" class="dropdown-menu dropdown-menu-end dropdown-menu-sm">
                    <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-eye-outline"></span> View profile</button>
                    <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-email-outline"></span> Send email</button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item dropdown-item-danger hstack gap-2" type="button"><span class="mdi mdi-trash-can-outline"></span> Remove</button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table-check"><input class="form-check-input" type="checkbox" data-table-select-row aria-label="Select Sofia Patel"></td>
            <td>
              <div class="hstack gap-3">
                <span class="avatar avatar-md rounded-full avatar-success" aria-hidden="true">SP<span class="avatar-status bg-warning"></span></span>
                <div class="min-w-0"><strong class="block">Sofia Patel</strong><span class="text-subtle text-sm">sofia.patel@example.com</span></div>
              </div>
            </td>
            <td><span class="block">Marketing Lead</span><span class="text-subtle text-sm">Editor</span></td>
            <td><span class="badge badge-soft-warning">Invited</span></td>
            <td class="text-end text-subtle text-nowrap">Yesterday</td>
            <td>
              <div class="hstack gap-1 justify-end">
                <button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Edit Sofia Patel" data-tooltip="Edit"><span class="mdi mdi-pencil-outline"></span></button>
                <div class="dropdown">
                  <button class="btn btn-ghost btn-sm btn-icon" type="button" data-dropdown="#userMenu2" aria-label="More actions for Sofia Patel"><span class="mdi mdi-dots-vertical"></span></button>
                  <div id="userMenu2" class="dropdown-menu dropdown-menu-end dropdown-menu-sm">
                    <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-eye-outline"></span> View profile</button>
                    <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-email-outline"></span> Send email</button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item dropdown-item-danger hstack gap-2" type="button"><span class="mdi mdi-trash-can-outline"></span> Remove</button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table-check"><input class="form-check-input" type="checkbox" data-table-select-row aria-label="Select Daniel Kim"></td>
            <td>
              <div class="hstack gap-3">
                <span class="avatar avatar-md rounded-full avatar-warning" aria-hidden="true">DK<span class="avatar-status bg-secondary"></span></span>
                <div class="min-w-0"><strong class="block">Daniel Kim</strong><span class="text-subtle text-sm">daniel.kim@example.com</span></div>
              </div>
            </td>
            <td><span class="block">Support Agent</span><span class="text-subtle text-sm">Viewer</span></td>
            <td><span class="badge badge-soft-secondary">Inactive</span></td>
            <td class="text-end text-subtle text-nowrap">3w ago</td>
            <td>
              <div class="hstack gap-1 justify-end">
                <button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Edit Daniel Kim" data-tooltip="Edit"><span class="mdi mdi-pencil-outline"></span></button>
                <div class="dropdown">
                  <button class="btn btn-ghost btn-sm btn-icon" type="button" data-dropdown="#userMenu3" aria-label="More actions for Daniel Kim"><span class="mdi mdi-dots-vertical"></span></button>
                  <div id="userMenu3" class="dropdown-menu dropdown-menu-end dropdown-menu-sm">
                    <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-eye-outline"></span> View profile</button>
                    <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-email-outline"></span> Send email</button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item dropdown-item-danger hstack gap-2" type="button"><span class="mdi mdi-trash-can-outline"></span> Remove</button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table-check"><input class="form-check-input" type="checkbox" data-table-select-row aria-label="Select Emma Wilson"></td>
            <td>
              <div class="hstack gap-3">
                <span class="avatar avatar-md rounded-full avatar-danger" aria-hidden="true">EW<span class="avatar-status bg-secondary"></span></span>
                <div class="min-w-0"><strong class="block">Emma Wilson</strong><span class="text-subtle text-sm">emma.wilson@example.com</span></div>
              </div>
            </td>
            <td><span class="block">Data Analyst</span><span class="text-subtle text-sm">Viewer</span></td>
            <td><span class="badge badge-soft-danger">Suspended</span></td>
            <td class="text-end text-subtle text-nowrap">2mo ago</td>
            <td>
              <div class="hstack gap-1 justify-end">
                <button class="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Edit Emma Wilson" data-tooltip="Edit"><span class="mdi mdi-pencil-outline"></span></button>
                <div class="dropdown">
                  <button class="btn btn-ghost btn-sm btn-icon" type="button" data-dropdown="#userMenu4" aria-label="More actions for Emma Wilson"><span class="mdi mdi-dots-vertical"></span></button>
                  <div id="userMenu4" class="dropdown-menu dropdown-menu-end dropdown-menu-sm">
                    <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-eye-outline"></span> View profile</button>
                    <button class="dropdown-item hstack gap-2" type="button"><span class="mdi mdi-email-outline"></span> Send email</button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item dropdown-item-danger hstack gap-2" type="button"><span class="mdi mdi-trash-can-outline"></span> Remove</button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</div>
::end

```html
<span><strong data-table-count="#teamTable">0</strong> of 5 selected</span>
<div data-table-bulk="#teamTable" hidden>
  <button class="btn btn-plain btn-sm">Export</button>
  <button class="btn btn-soft-danger btn-sm">Remove</button>
</div>

<div class="table-responsive">
  <table id="teamTable" class="table table-hover" data-table-select>
    <thead>
      <tr>
        <th class="table-check">
          <input class="form-check-input" type="checkbox" data-table-select-all aria-label="Select all members" />
        </th>
        <th>Member</th>
        <th>Status</th>
        <th class="text-end"><span class="visually-hidden">Actions</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="table-check">
          <input
            class="form-check-input"
            type="checkbox"
            data-table-select-row
            aria-label="Select Alex Morgan"
            checked
          />
        </td>
        <td>
          <div class="hstack gap-3">
            <span class="avatar avatar-md rounded-full avatar-info" aria-hidden="true">
              AM
              <span class="avatar-status bg-success"></span>
            </span>
            <div class="min-w-0">
              <strong class="block">Alex Morgan</strong><span class="text-subtle text-sm">alex.morgan@example.com</span>
            </div>
          </div>
        </td>
        <td><span class="badge badge-soft-success">Active</span></td>
        <td>
          <div class="hstack gap-1 justify-end">
            <button class="btn btn-ghost btn-sm btn-icon" aria-label="Edit">
              <span class="mdi mdi-pencil-outline"></span>
            </button>
            <div class="dropdown">
              <button class="btn btn-ghost btn-sm btn-icon" data-dropdown="#rowMenu" aria-label="More">
                <span class="mdi mdi-dots-vertical"></span>
              </button>
              <div id="rowMenu" class="dropdown-menu dropdown-menu-end dropdown-menu-sm">...</div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

```js components
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCheckAll,
  TableCheck,
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownMenu
} from "@abydahana/aksara-ui/components";

const iconButton = (icon, label, attributes = {}) =>
  Button({
    ghost: true,
    size: "sm",
    className: "btn-icon",
    attributes: { "aria-label": label, ...attributes },
    children: `<span class="mdi ${icon}"></span>`
  });

Table({
  hover: true,
  responsive: true,
  selectable: true,
  attributes: { id: "teamTable" },
  children:
    TableHead({
      children: `<tr>
        ${TableCheckAll({ label: "Select all members" })}
        <th>Member</th>
        <th>Status</th>
        <th class="text-end"><span class="visually-hidden">Actions</span></th>
      </tr>`
    }) +
    TableBody({
      children: TableRow({
        selected: true,
        children: `
          ${TableCheck({ label: "Select Alex Morgan", checked: true })}
          <td>
            <div class="hstack gap-3">
              ${Avatar({ initials: "AM", variant: "info", status: "online", attributes: { "aria-hidden": "true" } })}
              <div class="min-w-0">
                <strong class="block">Alex Morgan</strong><span class="text-subtle text-sm">alex.morgan@example.com</span>
              </div>
            </div>
          </td>
          <td>${Badge({ variant: "success", soft: true, label: "Active" })}</td>
          <td>
            <div class="hstack gap-1 justify-end">
              ${iconButton("mdi-pencil-outline", "Edit")}
              ${Dropdown({
                children:
                  iconButton("mdi-dots-vertical", "More", { "data-dropdown": "#rowMenu" }) +
                  DropdownMenu({ id: "rowMenu", end: true, className: "dropdown-menu-sm", children: "..." })
              })}
            </div>
          </td>`
      })
    })
});
```

---

---

## Selectable Rows

Selection is built into the runtime: add `data-table-select` to the table, `data-table-select-all` to the header checkbox and `data-table-select-row` to each row checkbox (plain checkboxes in `thead` / `tbody` also work). Put them in `.table-check` cells.

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Attribute / API</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>data-table-select</code></td><td>Turns selection on. <code>data-table-select="row"</code> also toggles a row when you click anywhere on it (links, buttons and inputs keep their own behavior).</td></tr>
      <tr><td><code>data-table-select-all</code></td><td>Header checkbox: selects or clears every enabled row; checked when all are selected, indeterminate when some are.</td></tr>
      <tr><td><code>data-table-select-row</code></td><td>Row checkbox. Selected rows get <code>table-active</code> and <code>aria-selected="true"</code>. Shift-click selects a range. Disabled checkboxes are skipped.</td></tr>
      <tr><td><code>data-table-count="#id"</code></td><td>Any element: shows the number of selected rows.</td></tr>
      <tr><td><code>data-table-bulk="#id"</code></td><td>Any element: hidden while nothing is selected (bulk action bars).</td></tr>
      <tr><td><code>aksara:table:select</code></td><td>Fired on the table after every change. Detail: <code>{ rows, count, total }</code>.</td></tr>
      <tr><td><code>Aksara.tableSelection(table, rows?)</code></td><td>Returns the selected <code>&lt;tr&gt;</code> elements; pass <code>"all"</code>, <code>"none"</code> or an array of rows / indexes to set the selection.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
const table = document.querySelector("#teamTable");

table.addEventListener("aksara:table:select", (event) => {
  console.log(`${event.detail.count} of ${event.detail.total} selected`);
});

const ids = Aksara.tableSelection(table).map((row) => row.dataset.id); // read
Aksara.tableSelection(table, "none"); // clear after a bulk action
Aksara.tableSelection(table, [0, 2]); // select the first and third rows
```

```js components
import { Table, TableHead, TableBody, TableRow, TableCheckAll, TableCheck } from "@abydahana/aksara-ui/components";

Table({
  selectable: "row", // true, or "row" to select by clicking the row
  attributes: { id: "ordersTable" },
  children:
    TableHead({ children: TableRow({ children: TableCheckAll() + "<th>Order</th><th>Total</th>" }) }) +
    TableBody({
      children:
        TableRow({ children: TableCheck({ label: "Select INV-2041" }) + "<td>INV-2041</td><td>$450.00</td>" }) +
        TableRow({
          selected: true,
          children: TableCheck({ label: "Select INV-2040", checked: true }) + "<td>INV-2040</td><td>$125.00</td>"
        })
    })
});
```

## CRUD Table

Use a toolbar above the responsive table for primary actions, export controls, and search. Keep row actions compact so repeated operations stay easy to scan.

::html
<div class="docs-preview">
  <div class="vstack gap-4">
    <div class="hstack gap-3 justify-between flex-wrap">
      <div class="docs-row">
        <button class="btn btn-primary hstack gap-2">
          <span class="mdi mdi-plus"></span>
          Create
        </button>
        <button class="btn btn-outline-primary hstack gap-2">
          <span class="mdi mdi-tray-arrow-down"></span>
          Export
        </button>
      </div>

      <form class="input-group max-w-[320px]" role="search">
        <span class="input-group-text">
          <span class="mdi mdi-magnify"></span>
        </span>
        <input class="form-control" type="search" placeholder="Search users" aria-label="Search users">
      </form>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Status</th>
            <th class="text-end">Last Active</th>
            <th class="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong class="block">Maya Chen</strong>
              <span class="text-subtle text-sm">maya.chen@example.com</span>
            </td>
            <td>Admin</td>
            <td><span class="badge badge-soft-success">Active</span></td>
            <td class="text-end">2m ago</td>
            <td>
              <div class="hstack gap-2 justify-end">
                <button class="btn btn-soft-info btn-sm btn-icon" aria-label="View Maya Chen">
                  <span class="mdi mdi-eye-outline"></span>
                </button>
                <button class="btn btn-soft-primary btn-sm btn-icon" aria-label="Update Maya Chen">
                  <span class="mdi mdi-pencil-outline"></span>
                </button>
                <button class="btn btn-soft-danger btn-sm btn-icon" aria-label="Delete Maya Chen">
                  <span class="mdi mdi-trash-can-outline"></span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong class="block">Alex Morgan</strong>
              <span class="text-subtle text-sm">alex.morgan@example.com</span>
            </td>
            <td>Editor</td>
            <td><span class="badge badge-soft-warning">Invited</span></td>
            <td class="text-end">1h ago</td>
            <td>
              <div class="hstack gap-2 justify-end">
                <button class="btn btn-soft-info btn-sm btn-icon" aria-label="View Alex Morgan">
                  <span class="mdi mdi-eye-outline"></span>
                </button>
                <button class="btn btn-soft-primary btn-sm btn-icon" aria-label="Update Alex Morgan">
                  <span class="mdi mdi-pencil-outline"></span>
                </button>
                <button class="btn btn-soft-danger btn-sm btn-icon" aria-label="Delete Alex Morgan">
                  <span class="mdi mdi-trash-can-outline"></span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong class="block">Sofia Patel</strong>
              <span class="text-subtle text-sm">sofia.patel@example.com</span>
            </td>
            <td>Viewer</td>
            <td><span class="badge badge-soft-danger">Suspended</span></td>
            <td class="text-end">Yesterday</td>
            <td>
              <div class="hstack gap-2 justify-end">
                <button class="btn btn-soft-info btn-sm btn-icon" aria-label="View Sofia Patel">
                  <span class="mdi mdi-eye-outline"></span>
                </button>
                <button class="btn btn-soft-primary btn-sm btn-icon" aria-label="Update Sofia Patel">
                  <span class="mdi mdi-pencil-outline"></span>
                </button>
                <button class="btn btn-soft-danger btn-sm btn-icon" aria-label="Delete Sofia Patel">
                  <span class="mdi mdi-trash-can-outline"></span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hstack gap-3 justify-between flex-wrap">
      <span class="text-subtle text-sm">Showing 1-3 of 24 users</span>
      <ul class="pagination">
        <li><a href="#" class="page-link disabled" aria-disabled="true">Previous</a></li>
        <li><a href="#" class="page-link" aria-current="page">1</a></li>
        <li><a href="#" class="page-link">2</a></li>
        <li><a href="#" class="page-link">3</a></li>
        <li><a href="#" class="page-link">Next</a></li>
      </ul>
    </div>

  </div>
</div>
::end

```html
<div class="hstack gap-3 justify-between flex-wrap">
  <div class="docs-row">
    <button class="btn btn-primary">Create</button>
    <button class="btn btn-outline-primary">Export</button>
  </div>

  <form class="input-group max-w-[320px]" role="search">
    <span class="input-group-text">
      <span class="mdi mdi-magnify"></span>
    </span>
    <input class="form-control" type="search" placeholder="Search users" />
  </form>
</div>

<div class="table-responsive">
  <table class="table table-striped table-hover table-bordered">
    <thead>
      <tr>
        <th>User</th>
        <th>Role</th>
        <th>Status</th>
        <th class="text-end">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Maya Chen</td>
        <td>Admin</td>
        <td><span class="badge badge-soft-success">Active</span></td>
        <td>
          <div class="hstack gap-2 justify-end">
            <button class="btn btn-soft-info btn-sm btn-icon" aria-label="View">
              <span class="mdi mdi-eye-outline"></span>
            </button>
            <button class="btn btn-soft-primary btn-sm btn-icon" aria-label="Update">
              <span class="mdi mdi-pencil-outline"></span>
            </button>
            <button class="btn btn-soft-danger btn-sm btn-icon" aria-label="Delete">
              <span class="mdi mdi-trash-can-outline"></span>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<ul class="pagination">
  <li><a href="#" class="page-link disabled" aria-disabled="true">Previous</a></li>
  <li><a href="#" class="page-link" aria-current="page">1</a></li>
  <li><a href="#" class="page-link">2</a></li>
  <li><a href="#" class="page-link">Next</a></li>
</ul>
```

```js components
import {
  Button,
  InputGroup,
  InputGroupText,
  Input,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Badge,
  Pagination
} from "@abydahana/aksara-ui/components";

const action = (variant, icon, label) =>
  Button({
    variant,
    soft: true,
    size: "sm",
    className: "btn-icon",
    attributes: { "aria-label": label },
    children: `<span class="mdi ${icon}"></span>`
  });

`<div class="hstack gap-3 justify-between flex-wrap">
  <div class="docs-row">
    ${Button({ label: "Create" })}
    ${Button({ outline: true, label: "Export" })}
  </div>
  ${InputGroup({
    attributes: { role: "search", style: "max-width:320px;" },
    children:
      InputGroupText({ children: '<span class="mdi mdi-magnify"></span>' }) +
      Input({ type: "search", placeholder: "Search users" })
  })}
</div>`;

Table({
  striped: true,
  hover: true,
  bordered: true,
  responsive: true,
  children:
    TableHead({ children: '<tr><th>User</th><th>Role</th><th>Status</th><th class="text-end">Actions</th></tr>' }) +
    TableBody({
      children: TableRow({
        children: `<td>Maya Chen</td><td>Admin</td>
          <td>${Badge({ variant: "success", soft: true, label: "Active" })}</td>
          <td>
            <div class="hstack gap-2 justify-end">
              ${action("info", "mdi-eye-outline", "View")}
              ${action("primary", "mdi-pencil-outline", "Update")}
              ${action("danger", "mdi-trash-can-outline", "Delete")}
            </div>
          </td>`
      })
    })
});

Pagination({
  items: [{ label: "Previous", disabled: true }, { label: "1", active: true }, { label: "2" }, { label: "Next" }]
});
```

---

## Sticky Header

Give the responsive wrapper a maximum height with `max-h-[…]` and `overflow-y-auto`, then make the header row `sticky top-0`. The header cells already have an opaque background. `z-[3]` keeps the header above avatar status dots.

::html
<div class="docs-preview">
  <div class="table-responsive max-h-[300px] overflow-y-auto">
    <table class="table table-compact table-hover">
      <thead class="sticky top-0 z-[3]">
        <tr><th>#</th><th>Event</th><th>Actor</th><th class="text-end">Time</th></tr>
      </thead>
      <tbody>
        <tr><td class="text-subtle">1</td><td>Signed in</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-primary" aria-hidden="true">MC</span>Maya</span></td><td class="text-end text-subtle text-nowrap">09:12</td></tr>
        <tr><td class="text-subtle">2</td><td>Created project “Atlas”</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-info" aria-hidden="true">AM</span>Alex</span></td><td class="text-end text-subtle text-nowrap">09:20</td></tr>
        <tr><td class="text-subtle">3</td><td>Invited sofia.patel@example.com</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-primary" aria-hidden="true">MC</span>Maya</span></td><td class="text-end text-subtle text-nowrap">09:31</td></tr>
        <tr><td class="text-subtle">4</td><td>Uploaded 12 files</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-success" aria-hidden="true">SP</span>Sofia</span></td><td class="text-end text-subtle text-nowrap">10:02</td></tr>
        <tr><td class="text-subtle">5</td><td>Changed billing plan</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-warning" aria-hidden="true">DK</span>Daniel</span></td><td class="text-end text-subtle text-nowrap">10:15</td></tr>
        <tr><td class="text-subtle">6</td><td>Commented on “Q3 roadmap”</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-info" aria-hidden="true">AM</span>Alex</span></td><td class="text-end text-subtle text-nowrap">10:40</td></tr>
        <tr><td class="text-subtle">7</td><td>Archived 3 tasks</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-danger" aria-hidden="true">EW</span>Emma</span></td><td class="text-end text-subtle text-nowrap">11:05</td></tr>
        <tr><td class="text-subtle">8</td><td>Exported CSV</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-success" aria-hidden="true">SP</span>Sofia</span></td><td class="text-end text-subtle text-nowrap">11:22</td></tr>
        <tr><td class="text-subtle">9</td><td>Updated permissions</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-primary" aria-hidden="true">MC</span>Maya</span></td><td class="text-end text-subtle text-nowrap">11:48</td></tr>
        <tr><td class="text-subtle">10</td><td>Signed out</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-warning" aria-hidden="true">DK</span>Daniel</span></td><td class="text-end text-subtle text-nowrap">12:01</td></tr>
        <tr><td class="text-subtle">11</td><td>Deleted draft</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-danger" aria-hidden="true">EW</span>Emma</span></td><td class="text-end text-subtle text-nowrap">12:30</td></tr>
        <tr><td class="text-subtle">12</td><td>Signed in</td><td><span class="hstack gap-2"><span class="avatar avatar-xs rounded-full avatar-info" aria-hidden="true">AM</span>Alex</span></td><td class="text-end text-subtle text-nowrap">13:04</td></tr>
      </tbody>
    </table>
  </div>
</div>
::end

```html
<div class="table-responsive max-h-[300px] overflow-y-auto">
  <table class="table table-compact table-hover">
    <thead class="sticky top-0 z-[3]">
      <tr>
        <th>#</th>
        <th>Event</th>
        <th>Actor</th>
        <th class="text-end">Time</th>
      </tr>
    </thead>
    <tbody>
      ...
    </tbody>
  </table>
</div>
```

```js components
import { Table, TableHead, TableBody } from "@abydahana/aksara-ui/components";

Table({
  hover: true,
  className: "table-compact",
  responsive: true,
  responsiveClassName: "max-h-[300px] overflow-y-auto",
  children:
    TableHead({
      className: "sticky top-0 z-[3]",
      children: '<tr><th>#</th><th>Event</th><th>Actor</th><th class="text-end">Time</th></tr>'
    }) + TableBody({ children: "..." })
});
```

---

## Empty and Loading Rows

When there is nothing to show, keep the header and put an [empty state](#/components/empty-state) in a single cell spanning every column. While data loads, fill rows with placeholders.

::html
<div class="docs-preview">
  <div class="table-responsive">
    <table class="table">
      <thead><tr><th>Order</th><th>Customer</th><th>Status</th><th class="text-end">Total</th></tr></thead>
      <tbody>
        <tr>
          <td colspan="4">
            <div class="empty-state py-5">
              <div class="empty-state-icon-wrap w-[56px] h-[56px]"><span class="mdi mdi-receipt-text-outline mdi-24px"></span></div>
              <div class="empty-state-title">No orders match “refunded”</div>
              <p class="empty-state-desc">Try a different status or clear the filters.</p>
              <div class="empty-state-actions">
                <button class="btn btn-outline-primary btn-sm" type="button">Clear filters</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="table-responsive" aria-busy="true">
    <table class="table">
      <thead><tr><th>Order</th><th>Customer</th><th>Status</th><th class="text-end">Total</th></tr></thead>
      <tbody>
        <tr><td><span class="placeholder placeholder-wave block w-[60%]"></span></td><td><span class="hstack gap-2"><span class="placeholder placeholder-wave rounded-full w-[32px] h-[32px]"></span><span class="placeholder placeholder-wave block w-[40%]"></span></span></td><td><span class="placeholder placeholder-wave block w-[60px]"></span></td><td><span class="placeholder placeholder-wave block w-[40%] ms-auto"></span></td></tr>
        <tr><td><span class="placeholder placeholder-wave block w-[60%]"></span></td><td><span class="hstack gap-2"><span class="placeholder placeholder-wave rounded-full w-[32px] h-[32px]"></span><span class="placeholder placeholder-wave block w-[40%]"></span></span></td><td><span class="placeholder placeholder-wave block w-[60px]"></span></td><td><span class="placeholder placeholder-wave block w-[40%] ms-auto"></span></td></tr>
        <tr><td><span class="placeholder placeholder-wave block w-[60%]"></span></td><td><span class="hstack gap-2"><span class="placeholder placeholder-wave rounded-full w-[32px] h-[32px]"></span><span class="placeholder placeholder-wave block w-[40%]"></span></span></td><td><span class="placeholder placeholder-wave block w-[60px]"></span></td><td><span class="placeholder placeholder-wave block w-[40%] ms-auto"></span></td></tr>
      </tbody>
    </table>
  </div>
</div>
::end

```html
<tbody>
  <tr>
    <td colspan="4">
      <div class="empty-state py-5">
        <div class="empty-state-icon-wrap w-[56px] h-[56px]">
          <span class="mdi mdi-receipt-text-outline mdi-24px"></span>
        </div>
        <div class="empty-state-title">No orders match “refunded”</div>
        <p class="empty-state-desc">Try a different status or clear the filters.</p>
        <div class="empty-state-actions"><button class="btn btn-outline-primary btn-sm">Clear filters</button></div>
      </div>
    </td>
  </tr>
</tbody>

<!-- Loading -->
<tr>
  <td><span class="placeholder placeholder-wave block w-[60%]"></span></td>
  ...
</tr>
```

```js components
import { TableBody, TableRow, EmptyState, Button, Placeholder } from "@abydahana/aksara-ui/components";

TableBody({
  children: TableRow({
    children: `<td colspan="4">${EmptyState({
      icon: "mdi-receipt-text-outline",
      iconSize: "sm",
      title: "No orders match “refunded”",
      description: "Try a different status or clear the filters.",
      actions: Button({ outline: true, size: "sm", label: "Clear filters" })
    })}</td>`
  })
});

// Loading
TableRow({
  children: `<td>${Placeholder({ animation: "wave", className: "block w-[60%]" })}</td>
    ...`
});
```

---

## Totals Footer

Use `<tfoot>` for sums, right-align numbers with `text-end`, and use `font-mono` where digits must line up.

::html
<div class="docs-preview">
  <div class="table-responsive">
    <table class="table table-compact">
      <thead><tr><th>Item</th><th class="text-end">Qty</th><th class="text-end">Unit price</th><th class="text-end">Amount</th></tr></thead>
      <tbody>
        <tr><td>Design system audit</td><td class="text-end">1</td><td class="text-end font-mono">1,200.00</td><td class="text-end font-mono">1,200.00</td></tr>
        <tr><td>Component build (per component)</td><td class="text-end">8</td><td class="text-end font-mono">150.00</td><td class="text-end font-mono">1,200.00</td></tr>
        <tr><td>Accessibility review</td><td class="text-end">1</td><td class="text-end font-mono">480.00</td><td class="text-end font-mono">480.00</td></tr>
      </tbody>
      <tfoot>
        <tr><td colspan="3" class="text-end text-subtle">Subtotal</td><td class="text-end font-mono">2,880.00</td></tr>
        <tr><td colspan="3" class="text-end text-subtle">Tax (11%)</td><td class="text-end font-mono">316.80</td></tr>
        <tr class="table-light"><td colspan="3" class="text-end fw-bold">Total (USD)</td><td class="text-end font-mono fw-bold">3,196.80</td></tr>
      </tfoot>
    </table>
  </div>
</div>
::end

```html
<table class="table table-compact">
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3" class="text-end text-subtle">Subtotal</td>
      <td class="text-end font-mono">2,880.00</td>
    </tr>
    <tr class="table-light">
      <td colspan="3" class="text-end fw-bold">Total (USD)</td>
      <td class="text-end font-mono fw-bold">3,196.80</td>
    </tr>
  </tfoot>
</table>
```

```js components
import { Table, TableHead, TableBody, TableFoot, TableRow } from "@abydahana/aksara-ui/components";

Table({
  className: "table-compact",
  children:
    TableHead({ children: "..." }) +
    TableBody({ children: "..." }) +
    TableFoot({
      children:
        TableRow({
          children:
            '<td colspan="3" class="text-end text-subtle">Subtotal</td><td class="text-end font-mono">2,880.00</td>'
        }) +
        TableRow({
          variant: "light",
          children:
            '<td colspan="3" class="text-end fw-bold">Total (USD)</td><td class="text-end font-mono fw-bold">3,196.80</td>'
        })
    })
});
```

---

## Responsive Wrappers

`.table-responsive` always scrolls horizontally and adds a rounded border. `.table-responsive-{sm,md,lg,xl,2xl,3xl}` only scrolls below the breakpoint, without the frame. Add `text-nowrap` to cells that should not wrap.

::html
<div class="docs-preview">
  <div class="table-responsive">
    <table class="table table-compact text-nowrap">
      <thead><tr><th>Column 1</th><th>Column 2</th><th>Column 3</th><th>Column 4</th><th>Column 5</th><th>Column 6</th><th>Column 7</th><th>Column 8</th><th>Column 9</th><th>Column 10</th><th>Column 11</th><th>Column 12</th></tr></thead>
      <tbody>
        <tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td><td>Cell 5</td><td>Cell 6</td><td>Cell 7</td><td>Cell 8</td><td>Cell 9</td><td>Cell 10</td><td>Cell 11</td><td>Cell 12</td></tr>
        <tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td><td>Cell 5</td><td>Cell 6</td><td>Cell 7</td><td>Cell 8</td><td>Cell 9</td><td>Cell 10</td><td>Cell 11</td><td>Cell 12</td></tr>
      </tbody>
    </table>
  </div>
</div>
::end

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>

<!-- Scrolls only below 768px -->
<div class="table-responsive-md">
  <table class="table">
    ...
  </table>
</div>
```

```js components
import { Table } from "@abydahana/aksara-ui/components";

Table({ responsive: true, children: "..." });

// Scrolls only below 768px
Table({ responsive: "md", children: "..." });
```

---

## Modifiers

::html
<div class="table-responsive">
  <table class="table table-compact">
    <thead>
      <tr><th>Class</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td class="text-nowrap"><code>table</code></td><td>Base table: full width, cell padding, row dividers, uppercase header.</td></tr>
      <tr><td class="text-nowrap"><code>table-striped</code></td><td>Tints every even body row.</td></tr>
      <tr><td class="text-nowrap"><code>table-hover</code></td><td>Tints the body row under the pointer.</td></tr>
      <tr><td class="text-nowrap"><code>table-bordered</code></td><td>Borders every cell and rounds the outer frame.</td></tr>
      <tr><td class="text-nowrap"><code>table-borderless</code></td><td>Removes all cell borders.</td></tr>
      <tr><td class="text-nowrap"><code>table-compact</code></td><td>Tighter cell padding (<code>0.5rem 0.75rem</code>).</td></tr>
      <tr><td class="text-nowrap"><code>table-sm</code></td><td>Tightest cell padding (<code>0.25rem 0.5rem</code>).</td></tr>
      <tr><td class="text-nowrap"><code>table-dark</code></td><td>Dark surface with light text, independent of the page theme.</td></tr>
      <tr><td class="text-nowrap"><code>table-active</code></td><td>Highlights a row or cell with a primary wash.</td></tr>
      <tr><td class="text-nowrap"><code>table-{primary,secondary,tertiary,success,danger,warning,info,light}</code></td><td>Tints a row or cell with the theme color. (<code>table-dark</code> is the dark-table modifier, not a row tint.)</td></tr>
      <tr><td class="text-nowrap"><code>table-responsive</code></td><td>Horizontal scroll wrapper with a rounded border.</td></tr>
      <tr><td class="text-nowrap"><code>table-responsive-{sm,md,lg,xl,2xl,3xl}</code></td><td>Scrolls only below the breakpoint.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## String Components

`Table({ striped, bordered, borderless, hover, small, dark, responsive })` maps its props to the classes above (`small` adds `table-compact table-sm`, `responsive` is `true` or a breakpoint, `responsiveClassName` styles that wrapper). `TableHead`, `TableBody`, `TableFoot` and `TableRow({ variant, active })` render the sections and rows; each takes `className` and `attributes`.

```js
import { Table, TableHead, TableBody, TableRow } from "@abydahana/aksara-ui/components";

Table({
  hover: true,
  small: true,
  responsive: "md",
  children:
    TableHead({ children: "<tr><th>Name</th><th>Status</th></tr>" }) +
    TableBody({ children: TableRow({ variant: "success", children: "<td>Generator</td><td>Ready</td>" }) })
});
```
