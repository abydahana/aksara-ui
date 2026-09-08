# Table

Tables include striped, hover, compact, bordered, and responsive wrappers.

::html
<div class="docs-preview">
  <div class="mb-4">
    <h4 class="mt-0 mb-3 font-700 text-sm">Responsive Striped Table</h4>
    <div class="table-responsive">
      <table class="table table-striped table-hover table-bordered">
        <thead><tr><th>Name</th><th>Status</th><th class="text-end">Rules</th></tr></thead>
        <tbody>
          <tr><td>Generator</td><td><span class="badge badge-soft-success">Ready</span></td><td class="text-end">15,279</td></tr>
          <tr><td>Data API</td><td><span class="badge badge-soft-primary">Active</span></td><td class="text-end">9</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <h4 class="mt-0 mb-3 font-700 text-sm">Compact Status Table</h4>
    <div class="table-responsive">
      <table class="table table-compact table-hover">
        <thead><tr><th>Module</th><th>Owner</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Tooltip</td><td>Interaction</td><td><span class="badge badge-soft-info">Documented</span></td></tr>
          <tr><td>Progress</td><td>Components</td><td><span class="badge badge-soft-success">Expanded</span></td></tr>
          <tr><td>List Group</td><td>Components</td><td><span class="badge badge-soft-warning">Examples</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
::end

```html
<div class="table-responsive">
  <table class="table table-striped table-hover table-bordered">
    ...
  </table>
</div>

<div class="table-responsive">
  <table class="table table-compact table-hover">
    ...
  </table>
</div>
```

---

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

      <form class="input-group" role="search" style="max-width:320px;">
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
              <strong class="block">Alya Rahman</strong>
              <span class="text-subtle text-sm">alya@example.com</span>
            </td>
            <td>Admin</td>
            <td><span class="badge badge-soft-success">Active</span></td>
            <td class="text-end">2m ago</td>
            <td>
              <div class="hstack gap-2 justify-end">
                <button class="btn btn-soft-info btn-sm btn-icon" aria-label="View Alya Rahman">
                  <span class="mdi mdi-eye-outline"></span>
                </button>
                <button class="btn btn-soft-primary btn-sm btn-icon" aria-label="Update Alya Rahman">
                  <span class="mdi mdi-pencil-outline"></span>
                </button>
                <button class="btn btn-soft-danger btn-sm btn-icon" aria-label="Delete Alya Rahman">
                  <span class="mdi mdi-trash-can-outline"></span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong class="block">Bima Santoso</strong>
              <span class="text-subtle text-sm">bima@example.com</span>
            </td>
            <td>Editor</td>
            <td><span class="badge badge-soft-warning">Invited</span></td>
            <td class="text-end">1h ago</td>
            <td>
              <div class="hstack gap-2 justify-end">
                <button class="btn btn-soft-info btn-sm btn-icon" aria-label="View Bima Santoso">
                  <span class="mdi mdi-eye-outline"></span>
                </button>
                <button class="btn btn-soft-primary btn-sm btn-icon" aria-label="Update Bima Santoso">
                  <span class="mdi mdi-pencil-outline"></span>
                </button>
                <button class="btn btn-soft-danger btn-sm btn-icon" aria-label="Delete Bima Santoso">
                  <span class="mdi mdi-trash-can-outline"></span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong class="block">Citra Lestari</strong>
              <span class="text-subtle text-sm">citra@example.com</span>
            </td>
            <td>Viewer</td>
            <td><span class="badge badge-soft-danger">Suspended</span></td>
            <td class="text-end">Yesterday</td>
            <td>
              <div class="hstack gap-2 justify-end">
                <button class="btn btn-soft-info btn-sm btn-icon" aria-label="View Citra Lestari">
                  <span class="mdi mdi-eye-outline"></span>
                </button>
                <button class="btn btn-soft-primary btn-sm btn-icon" aria-label="Update Citra Lestari">
                  <span class="mdi mdi-pencil-outline"></span>
                </button>
                <button class="btn btn-soft-danger btn-sm btn-icon" aria-label="Delete Citra Lestari">
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

  <form class="input-group" role="search" style="max-width:320px;">
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
        <td>Alya Rahman</td>
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
