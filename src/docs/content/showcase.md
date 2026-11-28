# Showcase

Complete screens built only from Aksara UI components and utilities, no custom CSS. Toggle the theme in the top bar: every screen below adapts, palette included.

---

## Project Dashboard

Stat cards, a segmented range switch, a data table with soft status badges, and an activity timeline.

::html
<div class="docs-preview [background:var(--aksara-bg-body-secondary)]">
  <div class="hstack justify-between flex-wrap gap-3">
    <div>
      <h3 class="m-0">Good morning, Grace</h3>
      <p class="text-subtle text-sm m-0 mt-1">Here is what happened across your workspace this week.</p>
    </div>
    <div class="hstack gap-2">
      <div class="tabs-segmented" role="tablist" aria-label="Range">
        <button class="tab" type="button" role="tab" aria-selected="false">Day</button>
        <button class="tab" type="button" role="tab" aria-selected="true">Week</button>
        <button class="tab" type="button" role="tab" aria-selected="false">Month</button>
      </div>
      <button class="btn btn-primary"><span class="mdi mdi-plus"></span> New project</button>
    </div>
  </div>

  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="hstack justify-between">
            <span class="text-subtle text-sm fw-semibold">Revenue</span>
            <span class="hstack justify-center rounded-[10px] bg-primary/10 text-primary w-[34px] h-[34px]"><span class="mdi mdi-cash-multiple"></span></span>
          </div>
          <div class="hstack gap-2 mt-2">
            <span class="fw-bold text-nowrap text-[1.5rem] tracking-[-.02em]">$48.2k</span>
            <span class="badge badge-soft-success"><span class="mdi mdi-trending-up"></span> 12%</span>
          </div>
          <p class="text-subtle text-xs mb-0 mt-1">vs. $43.0k last week</p>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="hstack justify-between">
            <span class="text-subtle text-sm fw-semibold">Active users</span>
            <span class="hstack justify-center rounded-[10px] bg-info/10 text-info w-[34px] h-[34px]"><span class="mdi mdi-account-group-outline"></span></span>
          </div>
          <div class="hstack gap-2 mt-2">
            <span class="fw-bold text-nowrap text-[1.5rem] tracking-[-.02em]">2,418</span>
            <span class="badge badge-soft-success"><span class="mdi mdi-trending-up"></span> 4%</span>
          </div>
          <p class="text-subtle text-xs mb-0 mt-1">312 signed up this week</p>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="hstack justify-between">
            <span class="text-subtle text-sm fw-semibold">Sprint progress</span>
            <span class="hstack justify-center rounded-[10px] bg-warning/15 text-warning w-[34px] h-[34px]"><span class="mdi mdi-flag-checkered"></span></span>
          </div>
          <div class="hstack gap-2 mt-2">
            <span class="fw-bold text-nowrap text-[1.5rem] tracking-[-.02em]">68%</span>
            <span class="badge badge-soft-warning">5 days left</span>
          </div>
          <div class="progress progress-thin mt-3"><div class="progress-bar w-[68%]"></div></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row gap-3">
    <div class="col-12 lg:col-8">
      <div class="card h-100">
        <div class="card-header hstack justify-between">
          <span>Recent invoices</span>
          <button class="btn btn-ghost btn-sm">View all <span class="mdi mdi-arrow-right"></span></button>
        </div>
        <div class="table-responsive border-0 rounded-0 mt-3">
            <table class="table table-hover">
              <thead>
                <tr><th>Customer</th><th>Amount</th><th>Status</th><th></th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="hstack gap-2">
                      <span class="avatar avatar-primary avatar-sm rounded-full">MC</span>
                      <div><div class="fw-semibold text-nowrap">Maya Chen</div><div class="text-subtle text-xs">INV-2041</div></div>
                    </div>
                  </td>
                  <td class="text-nowrap">$4,500.00</td>
                  <td><span class="badge badge-soft-success">Paid</span></td>
                  <td class="text-end"><button class="btn btn-ghost btn-sm btn-icon" aria-label="More"><span class="mdi mdi-dots-horizontal"></span></button></td>
                </tr>
                <tr>
                  <td>
                    <div class="hstack gap-2">
                      <span class="avatar avatar-success avatar-sm rounded-full">AM</span>
                      <div><div class="fw-semibold text-nowrap">Alex Morgan</div><div class="text-subtle text-xs">INV-2040</div></div>
                    </div>
                  </td>
                  <td class="text-nowrap">$1,250.00</td>
                  <td><span class="badge badge-soft-warning">Pending</span></td>
                  <td class="text-end"><button class="btn btn-ghost btn-sm btn-icon" aria-label="More"><span class="mdi mdi-dots-horizontal"></span></button></td>
                </tr>
                <tr>
                  <td>
                    <div class="hstack gap-2">
                      <span class="avatar avatar-danger avatar-sm rounded-full">SP</span>
                      <div><div class="fw-semibold text-nowrap">Sofia Patel</div><div class="text-subtle text-xs">INV-2039</div></div>
                    </div>
                  </td>
                  <td class="text-nowrap">$820.00</td>
                  <td><span class="badge badge-soft-danger">Overdue</span></td>
                  <td class="text-end"><button class="btn btn-ghost btn-sm btn-icon" aria-label="More"><span class="mdi mdi-dots-horizontal"></span></button></td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-4">
      <div class="card h-100">
        <div class="card-header">Activity</div>
        <div class="card-body">
          <ul class="timeline">
            <li class="timeline-item">
              <div class="timeline-point"><span class="mdi mdi-check"></span></div>
              <div class="timeline-content">
                <p class="timeline-title">Invoice paid</p>
                <span class="timeline-time">Today, 09:12</span>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-point"><span class="mdi mdi-source-pull"></span></div>
              <div class="timeline-content">
                <p class="timeline-title">PR #312 merged</p>
                <span class="timeline-time">Yesterday, 16:40</span>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-point"><span class="mdi mdi-account-plus-outline"></span></div>
              <div class="timeline-content">
                <p class="timeline-title">Sofia joined the team</p>
                <span class="timeline-time">Mon, 10:05</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
::end

---

## Account Settings

A settings form with grouped fields, switches, an input group, and a divided card footer for actions.

::html
<div class="docs-preview [background:var(--aksara-bg-body-secondary)]">
  <div class="card card-divided">
    <div class="card-header hstack justify-between gap-3">
      <div>
        <div>Profile</div>
        <div class="text-subtle text-sm fw-normal">This information is visible to your team.</div>
      </div>
      <span class="badge badge-outline-primary">Pro plan</span>
    </div>
    <div class="card-body">
      <div class="row gap-3">
        <div class="col-12 md:col-6">
          <label class="form-label" for="scName">Full name</label>
          <input id="scName" class="form-control" value="Grace Lee" />
        </div>
        <div class="col-12 md:col-6">
          <label class="form-label" for="scRole">Role</label>
          <select id="scRole" class="form-select">
            <option>Product designer</option>
            <option>Engineer</option>
            <option>Manager</option>
          </select>
        </div>
        <div class="col-12">
          <label class="form-label" for="scSite">Website</label>
          <div class="input-group">
            <span class="input-group-text">https://</span>
            <input id="scSite" class="form-control" placeholder="studio.example.com" />
          </div>
          <span class="form-text">Shown on your public profile.</span>
        </div>
        <div class="col-12">
          <div class="list-group">
            <div class="list-group-item hstack justify-between gap-3">
              <div>
                <span class="list-group-title">Email notifications</span>
                <span class="list-group-subtitle">Weekly digest and mentions.</span>
              </div>
              <label class="form-switch"><input type="checkbox" checked aria-label="Email notifications" /></label>
            </div>
            <div class="list-group-item hstack justify-between gap-3">
              <div>
                <span class="list-group-title">Two-factor authentication</span>
                <span class="list-group-subtitle">Require a code from your authenticator app.</span>
              </div>
              <label class="form-switch"><input type="checkbox" aria-label="Two-factor authentication" /></label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer justify-end">
      <button class="btn btn-plain">Cancel</button>
      <button class="btn btn-primary">Save changes</button>
    </div>
  </div>

  <div class="alert alert-danger">
    <span class="alert-icon mdi mdi-alert-circle-outline"></span>
    <div class="alert-content hstack justify-between flex-wrap gap-3">
      <div>
        <p class="alert-title">Delete workspace</p>
        <p class="m-0">This permanently removes all projects and invoices.</p>
      </div>
      <button class="btn btn-danger btn-sm">Delete workspace</button>
    </div>
  </div>
</div>
::end

---

## Pricing

Three plans with a featured middle card, soft badges and plain vs. primary calls to action.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <div class="card h-100">
        <div class="card-body vstack gap-3">
          <span class="badge badge-soft-secondary [align-self:flex-start]">Starter</span>
          <div><span class="fw-bold text-[2rem] tracking-[-.02em]">Free</span></div>
          <p class="card-text">For side projects and trying things out.</p>
          <ul class="list-unstyled vstack gap-2 text-sm m-0">
            <li class="hstack gap-2"><span class="mdi mdi-check text-success"></span> 3 projects</li>
            <li class="hstack gap-2"><span class="mdi mdi-check text-success"></span> 1 GB storage</li>
            <li class="hstack gap-2 text-subtle"><span class="mdi mdi-minus"></span> Custom domains</li>
          </ul>
          <button class="btn btn-plain btn-block mt-auto">Get started</button>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="card h-100 [border-color:rgb(var(--aksara-primary)/.4)]">
        <div class="card-body vstack gap-3">
          <div class="hstack justify-between">
            <span class="badge badge-primary">Pro</span>
            <span class="badge badge-soft-primary">Most popular</span>
          </div>
          <div class="text-nowrap"><span class="fw-bold text-[2rem] tracking-[-.02em]">$15</span><span class="text-subtle text-sm"> / month</span></div>
          <p class="card-text">For growing teams that ship every week.</p>
          <ul class="list-unstyled vstack gap-2 text-sm m-0">
            <li class="hstack gap-2"><span class="mdi mdi-check text-success"></span> Unlimited projects</li>
            <li class="hstack gap-2"><span class="mdi mdi-check text-success"></span> 100 GB storage</li>
            <li class="hstack gap-2"><span class="mdi mdi-check text-success"></span> Custom domains</li>
          </ul>
          <button class="btn btn-primary btn-block mt-auto">Start 14-day trial</button>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="card h-100">
        <div class="card-body vstack gap-3">
          <span class="badge badge-soft-info [align-self:flex-start]">Enterprise</span>
          <div><span class="fw-bold text-[2rem] tracking-[-.02em]">Custom</span></div>
          <p class="card-text">SSO, audit logs and a dedicated success manager.</p>
          <ul class="list-unstyled vstack gap-2 text-sm m-0">
            <li class="hstack gap-2"><span class="mdi mdi-check text-success"></span> Everything in Pro</li>
            <li class="hstack gap-2"><span class="mdi mdi-check text-success"></span> SAML SSO</li>
            <li class="hstack gap-2"><span class="mdi mdi-check text-success"></span> 99.9% SLA</li>
          </ul>
          <button class="btn btn-outline-primary btn-block mt-auto">Contact sales</button>
        </div>
      </div>
    </div>
  </div>
</div>
::end

---

## Sign In

A centered auth card with a segmented method switch, inputs with icons and a quiet secondary action.

::html
<div class="docs-preview [background:radial-gradient(80%_60%_at_50%_0%,rgb(var(--aksara-primary)/.1),transparent_70%),var(--aksara-bg-body-secondary)]">
  <div class="card max-w-[400px] w-[100%] mx-[auto]">
    <div class="card-body vstack gap-3 p-[2rem]">
      <div class="vstack gap-1 [align-items:center] [text-align:center]">
        <span class="hstack justify-center rounded-[12px] bg-text-primary fw-bold w-[44px] h-[44px] text-[1.25rem]">A</span>
        <h4 class="m-0 mt-2">Welcome back</h4>
        <p class="text-subtle text-sm m-0">Sign in to continue to Aksara.</p>
      </div>
      <div class="tabs-segmented" role="tablist" aria-label="Sign-in method">
        <button class="tab" type="button" role="tab" aria-selected="true">Email</button>
        <button class="tab" type="button" role="tab" aria-selected="false">Phone</button>
      </div>
      <div>
        <label class="form-label" for="siEmail">Email</label>
        <div class="input-group">
          <span class="input-group-text"><span class="mdi mdi-email-outline"></span></span>
          <input id="siEmail" class="form-control" type="email" placeholder="you@company.com" />
        </div>
      </div>
      <div>
        <div class="hstack justify-between">
          <label class="form-label" for="siPassword">Password</label>
          <a href="#/showcase" class="text-sm text-primary [text-decoration:none]">Forgot?</a>
        </div>
        <input id="siPassword" class="form-control" type="password" value="password" />
      </div>
      <label class="form-check"><input type="checkbox" checked /> <span class="form-check-label">Keep me signed in</span></label>
      <button class="btn btn-primary btn-block">Sign in</button>
      <button class="btn btn-plain btn-block"><span class="mdi mdi-google"></span> Continue with Google</button>
    </div>
  </div>
</div>
::end

---

## Empty State

::html
<div class="docs-preview">
  <div class="card">
    <div class="empty-state">
      <div class="empty-state-icon-wrap w-[56px] h-[56px] text-[1.5rem]"><span class="mdi mdi-folder-open-outline"></span></div>
      <div class="empty-state-title">No projects yet</div>
      <p class="empty-state-desc">Create your first project to start tracking invoices, tasks and team activity.</p>
      <div class="empty-state-actions">
        <button class="btn btn-plain">Import</button>
        <button class="btn btn-primary"><span class="mdi mdi-plus"></span> New project</button>
      </div>
    </div>
  </div>
</div>
::end
