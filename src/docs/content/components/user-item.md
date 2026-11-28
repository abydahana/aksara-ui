# User Item

A user item is one row about a person: avatar, name with an optional verified mark, handle and a subtitle, with an action at the end such as a Follow button, a role badge or a menu. Use it for follow suggestions, member lists, search results and people pickers. With `href`, the avatar and text become one profile link while the action stays a separate control.

::html
<div class="docs-preview">
  <div class="card max-w-[420px] w-full">
    <div class="user-item">
      <a href="#" class="user-item-link">
        <span class="avatar avatar-md rounded-full avatar-warning"><span class="avatar-initials">SP</span></span>
        <div class="user-item-info">
          <div class="user-item-name">Sofia Patel<span class="mdi mdi-check-decagram user-item-verified" title="Verified" aria-label="Verified" role="img"></span></div>
          <div class="user-item-subtitle user-item-handle truncate">@sofiapatel</div>
          <div class="user-item-subtitle truncate">Product Designer at Acme Cloud</div>
        </div>
      </a>
      <button class="btn btn-plain btn-sm" type="button" data-toggle="button" aria-pressed="false" aria-label="Follow Sofia Patel"><span class="btn-toggle-off"><span class="mdi mdi-account-plus-outline" aria-hidden="true"></span> Follow</span><span class="btn-toggle-on"><span class="mdi mdi-check" aria-hidden="true"></span> Following</span></button>
    </div>
  </div>
</div>
::end

```html
<div class="user-item">
  <a href="/u/sofiapatel" class="user-item-link">
    <span class="avatar avatar-md rounded-full avatar-warning"><span class="avatar-initials">SP</span></span>
    <div class="user-item-info">
      <div class="user-item-name">
        Sofia Patel<span
          class="mdi mdi-check-decagram user-item-verified"
          title="Verified"
          aria-label="Verified"
          role="img"
        ></span>
      </div>
      <div class="user-item-subtitle user-item-handle truncate">@sofiapatel</div>
      <div class="user-item-subtitle truncate">Product Designer at Acme Cloud</div>
    </div>
  </a>
  <button
    class="btn btn-plain btn-sm"
    type="button"
    data-toggle="button"
    aria-pressed="false"
    aria-label="Follow Sofia Patel"
  >
    <span class="btn-toggle-off"><span class="mdi mdi-account-plus-outline" aria-hidden="true"></span> Follow</span>
    <span class="btn-toggle-on"><span class="mdi mdi-check" aria-hidden="true"></span> Following</span>
  </button>
</div>
```

```js components
import { ToggleButton, UserItem } from "@abydahana/aksara-ui/components";

UserItem({
  name: "Sofia Patel",
  handle: "@sofiapatel",
  subtitle: "Product Designer at Acme Cloud",
  initials: "SP",
  avatarVariant: "warning",
  verified: true,
  href: "/u/sofiapatel",
  action: ToggleButton({
    children: '<span class="mdi mdi-account-plus-outline" aria-hidden="true"></span> Follow',
    pressedChildren: '<span class="mdi mdi-check" aria-hidden="true"></span> Following',
    size: "sm",
    label: "Follow Sofia Patel"
  })
});
```

---

## Content

Every line under the name is optional. `handle` is shown with one leading `@` whether or not you include it. `subtitle` adds a second line, and is skipped when it only repeats the handle, so passing the same value to both does not print it twice. Both lines truncate with an ellipsis; the name wraps. `verified` adds a `.user-item-verified` check mark after the name; it has `role="img"` and `aria-label="Verified"`, so screen readers announce it and a mouse hover shows the same word as a tooltip.

::html
<div class="docs-preview">
  <div class="card max-w-[420px] w-full">
    <div class="user-item">
      <span class="avatar avatar-md rounded-full avatar-primary"><span class="avatar-initials">MC</span></span>
      <div class="user-item-info">
        <div class="user-item-name">Maya Chen</div>
      </div>
    </div>
    <div class="user-item">
      <span class="avatar avatar-md rounded-full avatar-success"><span class="avatar-initials">DK</span></span>
      <div class="user-item-info">
        <div class="user-item-name">Daniel Kim</div>
        <div class="user-item-subtitle user-item-handle truncate">@danielkim</div>
      </div>
    </div>
    <div class="user-item">
      <span class="avatar avatar-md rounded-full avatar-info"><span class="avatar-initials">GL</span></span>
      <div class="user-item-info">
        <div class="user-item-name">Grace Lee</div>
        <div class="user-item-subtitle truncate">Head of Customer Success, London</div>
      </div>
    </div>
    <div class="user-item">
      <span class="avatar avatar-md rounded-full avatar-danger"><span class="avatar-initials">AM</span></span>
      <div class="user-item-info">
        <div class="user-item-name">Alex Morgan<span class="mdi mdi-check-decagram user-item-verified" title="Verified" aria-label="Verified" role="img"></span></div>
        <div class="user-item-subtitle user-item-handle truncate">@alexmorgan</div>
        <div class="user-item-subtitle truncate">Staff Engineer, Platform Infrastructure and Developer Experience</div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="user-item">
  <span class="avatar avatar-md rounded-full avatar-success"><span class="avatar-initials">DK</span></span>
  <div class="user-item-info">
    <div class="user-item-name">Daniel Kim</div>
    <div class="user-item-subtitle user-item-handle truncate">@danielkim</div>
  </div>
</div>
```

```js components
import { UserItem } from "@abydahana/aksara-ui/components";

UserItem({ name: "Maya Chen", initials: "MC" });
UserItem({ name: "Daniel Kim", handle: "danielkim", initials: "DK", avatarVariant: "success" }); // shown as @danielkim
UserItem({ name: "Grace Lee", subtitle: "Head of Customer Success, London", initials: "GL", avatarVariant: "info" });
UserItem({
  name: "Alex Morgan",
  handle: "@alexmorgan",
  subtitle: "Staff Engineer, Platform Infrastructure and Developer Experience",
  initials: "AM",
  avatarVariant: "danger",
  verified: true
});
```

Every row has a bottom divider except the last one (`.user-item:last-child` drops it), so a list inside a card never doubles the card border. No extra class is needed.

---

## Follow Suggestions

A "Who to follow" card: profile links on the left, a Follow toggle on the right. `ToggleButton` adds `data-toggle="button"`, so the runtime flips `aria-pressed` and swaps "Follow" for "Following" on click. Listen for `aksara:toggle` to save the change (see JavaScript below).

::html
<div class="docs-preview [background:var(--aksara-bg-body-secondary)]">
  <div class="card max-w-[400px] w-full">
    <div class="card-header hstack justify-between">
      <span class="fw-semibold">Who to follow</span>
      <a href="#" class="text-sm">See all</a>
    </div>
    <div class="user-item" data-user-id="104">
      <a href="#" class="user-item-link">
        <span class="avatar avatar-md rounded-full avatar-primary"><span class="avatar-initials">MC</span></span>
        <div class="user-item-info">
          <div class="user-item-name">Maya Chen<span class="mdi mdi-check-decagram user-item-verified" title="Verified" aria-label="Verified" role="img"></span></div>
          <div class="user-item-subtitle user-item-handle truncate">@mayachen</div>
        </div>
      </a>
      <button class="btn btn-plain btn-sm" type="button" data-toggle="button" aria-pressed="false" aria-label="Follow Maya Chen"><span class="btn-toggle-off"><span class="mdi mdi-account-plus-outline" aria-hidden="true"></span> Follow</span><span class="btn-toggle-on"><span class="mdi mdi-check" aria-hidden="true"></span> Following</span></button>
    </div>
    <div class="user-item" data-user-id="217">
      <a href="#" class="user-item-link">
        <span class="avatar avatar-md rounded-full avatar-success"><span class="avatar-initials">DK</span></span>
        <div class="user-item-info">
          <div class="user-item-name">Daniel Kim</div>
          <div class="user-item-subtitle user-item-handle truncate">@danielkim</div>
          <div class="user-item-subtitle truncate">Followed by Grace Lee and 3 others</div>
        </div>
      </a>
      <button class="btn btn-plain btn-sm active" type="button" data-toggle="button" aria-pressed="true" aria-label="Follow Daniel Kim"><span class="btn-toggle-off"><span class="mdi mdi-account-plus-outline" aria-hidden="true"></span> Follow</span><span class="btn-toggle-on"><span class="mdi mdi-check" aria-hidden="true"></span> Following</span></button>
    </div>
    <div class="user-item" data-user-id="389">
      <a href="#" class="user-item-link">
        <span class="avatar avatar-md rounded-full avatar-tertiary"><span class="avatar-initials">GL</span></span>
        <div class="user-item-info">
          <div class="user-item-name">Grace Lee</div>
          <div class="user-item-subtitle user-item-handle truncate">@gracelee</div>
          <div class="user-item-subtitle truncate">New to Acme Cloud</div>
        </div>
      </a>
      <button class="btn btn-plain btn-sm" type="button" data-toggle="button" aria-pressed="false" aria-label="Follow Grace Lee"><span class="btn-toggle-off"><span class="mdi mdi-account-plus-outline" aria-hidden="true"></span> Follow</span><span class="btn-toggle-on"><span class="mdi mdi-check" aria-hidden="true"></span> Following</span></button>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-header hstack justify-between">
    <span class="fw-semibold">Who to follow</span>
    <a href="/explore/people" class="text-sm">See all</a>
  </div>
  <div class="user-item" data-user-id="104">
    <a href="/u/mayachen" class="user-item-link">…</a>
    <button
      class="btn btn-plain btn-sm"
      type="button"
      data-toggle="button"
      aria-pressed="false"
      aria-label="Follow Maya Chen"
    >
      <span class="btn-toggle-off">Follow</span>
      <span class="btn-toggle-on">Following</span>
    </button>
  </div>
  <!-- more rows -->
</div>
```

```js components
import { Card, ToggleButton, UserItem } from "@abydahana/aksara-ui/components";

const suggestions = [
  { id: 104, name: "Maya Chen", handle: "mayachen", initials: "MC", variant: "primary", verified: true },
  {
    id: 217,
    name: "Daniel Kim",
    handle: "danielkim",
    initials: "DK",
    variant: "success",
    note: "Followed by Grace Lee and 3 others",
    following: true
  },
  { id: 389, name: "Grace Lee", handle: "gracelee", initials: "GL", variant: "tertiary", note: "New to Acme Cloud" }
];

Card({
  children:
    `<div class="card-header hstack justify-between"><span class="fw-semibold">Who to follow</span><a href="/explore/people" class="text-sm">See all</a></div>` +
    suggestions
      .map((user) =>
        UserItem({
          name: user.name,
          handle: user.handle,
          subtitle: user.note,
          initials: user.initials,
          avatarVariant: user.variant,
          verified: user.verified,
          href: `/u/${user.handle}`,
          attributes: { "data-user-id": user.id },
          action: ToggleButton({
            children: '<span class="mdi mdi-account-plus-outline" aria-hidden="true"></span> Follow',
            pressedChildren: '<span class="mdi mdi-check" aria-hidden="true"></span> Following',
            pressed: user.following,
            size: "sm",
            label: `Follow ${user.name}`
          })
        })
      )
      .join("")
});
```

---

## Team Members

A members table without the table: presence dots from `status`, the role in the subtitle, and a badge plus a menu button as the action. Pass several elements to `action` by concatenating them inside a wrapper.

::html
<div class="docs-preview">
  <div class="card max-w-[520px] w-full">
    <div class="card-header hstack justify-between">
      <span class="fw-semibold">Members <span class="text-subtle fw-normal">· 4</span></span>
      <button type="button" class="btn btn-primary btn-sm"><span class="mdi mdi-account-plus-outline"></span> Invite</button>
    </div>
    <div class="user-item">
      <span class="avatar avatar-md rounded-full avatar-primary"><span class="avatar-initials">MC</span><span class="avatar-status bg-success" aria-hidden="true"></span></span>
      <div class="user-item-info">
        <div class="user-item-name">Maya Chen</div>
        <div class="user-item-subtitle truncate">maya@example.com</div>
      </div>
      <div class="hstack gap-2 shrink-0">
        <span class="badge badge-soft-primary">Owner</span>
        <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Options for Maya Chen"><span class="mdi mdi-dots-horizontal"></span></button>
      </div>
    </div>
    <div class="user-item">
      <span class="avatar avatar-md rounded-full avatar-success"><span class="avatar-initials">DK</span><span class="avatar-status bg-warning" aria-hidden="true"></span></span>
      <div class="user-item-info">
        <div class="user-item-name">Daniel Kim</div>
        <div class="user-item-subtitle truncate">daniel@example.com</div>
      </div>
      <div class="hstack gap-2 shrink-0">
        <span class="badge badge-soft-info">Admin</span>
        <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Options for Daniel Kim"><span class="mdi mdi-dots-horizontal"></span></button>
      </div>
    </div>
    <div class="user-item">
      <span class="avatar avatar-md rounded-full avatar-warning"><span class="avatar-initials">SP</span><span class="avatar-status bg-danger" aria-hidden="true"></span></span>
      <div class="user-item-info">
        <div class="user-item-name">Sofia Patel</div>
        <div class="user-item-subtitle truncate">sofia@example.com</div>
      </div>
      <div class="hstack gap-2 shrink-0">
        <span class="badge badge-soft-secondary">Member</span>
        <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Options for Sofia Patel"><span class="mdi mdi-dots-horizontal"></span></button>
      </div>
    </div>
    <div class="user-item">
      <span class="avatar avatar-md rounded-full avatar-secondary"><span class="avatar-initials">AM</span></span>
      <div class="user-item-info">
        <div class="user-item-name">Alex Morgan</div>
        <div class="user-item-subtitle truncate">Invitation sent Nov 26</div>
      </div>
      <div class="hstack gap-2 shrink-0">
        <span class="badge badge-soft-warning">Pending</span>
        <button type="button" class="btn btn-ghost btn-sm">Resend</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="user-item">
  <span class="avatar avatar-md rounded-full avatar-success">
    <span class="avatar-initials">DK</span>
    <span class="avatar-status bg-warning" aria-hidden="true"></span>
  </span>
  <div class="user-item-info">
    <div class="user-item-name">Daniel Kim</div>
    <div class="user-item-subtitle truncate">daniel@example.com</div>
  </div>
  <div class="hstack gap-2 shrink-0">
    <span class="badge badge-soft-info">Admin</span>
    <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Options for Daniel Kim">
      <span class="mdi mdi-dots-horizontal"></span>
    </button>
  </div>
</div>
```

```js components
import { UserItem } from "@abydahana/aksara-ui/components";

UserItem({
  name: "Daniel Kim",
  subtitle: "daniel@example.com",
  initials: "DK",
  avatarVariant: "success",
  status: "away", // online | offline | busy | away
  action: `<div class="hstack gap-2 shrink-0">
    <span class="badge badge-soft-info">Admin</span>
    <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Options for Daniel Kim"><span class="mdi mdi-dots-horizontal"></span></button>
  </div>`
});
```

`status` maps to the avatar's presence dot: `online` green, `away` amber, `busy` red, `offline` grey. It also becomes part of the avatar's alt text ("Daniel Kim, away") when the avatar is a photo.

---

## Search Results

Results in a people search. Each row links to the profile; the subtitle carries the context that matched (role, city, mutual connections).

::html
<div class="docs-preview">
  <div class="max-w-[520px] w-full vstack gap-3">
    <div class="input-group">
      <span class="input-group-text"><span class="mdi mdi-magnify"></span></span>
      <input type="search" class="form-control" value="designer" aria-label="Search people" />
    </div>
    <div class="card">
      <div class="user-item">
        <a href="#" class="user-item-link">
          <span class="avatar avatar-md rounded-full avatar-warning"><span class="avatar-initials">SP</span></span>
          <div class="user-item-info">
            <div class="user-item-name">Sofia Patel<span class="mdi mdi-check-decagram user-item-verified" title="Verified" aria-label="Verified" role="img"></span></div>
            <div class="user-item-subtitle user-item-handle truncate">@sofiapatel</div>
            <div class="user-item-subtitle truncate">Product Designer · London</div>
          </div>
        </a>
        <span class="mdi mdi-chevron-right text-subtle" aria-hidden="true"></span>
      </div>
      <div class="user-item">
        <a href="#" class="user-item-link">
          <span class="avatar avatar-md rounded-full avatar-info"><span class="avatar-initials">GL</span></span>
          <div class="user-item-info">
            <div class="user-item-name">Grace Lee</div>
            <div class="user-item-subtitle user-item-handle truncate">@gracelee</div>
            <div class="user-item-subtitle truncate">Brand Designer · Manchester · 4 mutual connections</div>
          </div>
        </a>
        <span class="mdi mdi-chevron-right text-subtle" aria-hidden="true"></span>
      </div>
      <div class="user-item">
        <a href="#" class="user-item-link">
          <span class="avatar avatar-md rounded-full avatar-primary"><span class="avatar-initials">AM</span></span>
          <div class="user-item-info">
            <div class="user-item-name">Alex Morgan</div>
            <div class="user-item-subtitle user-item-handle truncate">@alexmorgan</div>
            <div class="user-item-subtitle truncate">Design Engineer · New York</div>
          </div>
        </a>
        <span class="mdi mdi-chevron-right text-subtle" aria-hidden="true"></span>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="user-item">
  <a href="/u/gracelee" class="user-item-link">
    <span class="avatar avatar-md rounded-full avatar-info"><span class="avatar-initials">GL</span></span>
    <div class="user-item-info">
      <div class="user-item-name">Grace Lee</div>
      <div class="user-item-subtitle user-item-handle truncate">@gracelee</div>
      <div class="user-item-subtitle truncate">Brand Designer · Manchester · 4 mutual connections</div>
    </div>
  </a>
  <span class="mdi mdi-chevron-right text-subtle" aria-hidden="true"></span>
</div>
```

```js components
import { UserItem } from "@abydahana/aksara-ui/components";

results
  .map((person) =>
    UserItem({
      name: person.name,
      handle: person.handle,
      subtitle: [person.title, person.city, person.mutual && `${person.mutual} mutual connections`]
        .filter(Boolean)
        .join(" · "),
      initials: person.initials,
      avatar: person.photoUrl, // falls back to initials when empty
      verified: person.verified,
      href: `/u/${person.handle}`,
      action: '<span class="mdi mdi-chevron-right text-subtle" aria-hidden="true"></span>'
    })
  )
  .join("");
```

The name and subtitle are escaped, so the component cannot highlight the matched text. To mark matches, write the markup yourself with `<mark>` inside `.user-item-name`.

---

## Compact List In A Panel

A popover-like "Share" panel: a narrower card with tighter rows (`py-2 px-3` through `className`) and a role label as the action.

::html
<div class="docs-preview">
  <div class="card w-[320px] max-w-[100%]">
    <div class="card-body vstack gap-3 pb-2">
      <div class="fw-semibold">Share "Q4 Revenue Forecast"</div>
      <div class="input-group">
        <input type="email" class="form-control" placeholder="Add people by email" aria-label="Add people by email" />
        <button type="button" class="btn btn-primary">Invite</button>
      </div>
      <div class="text-xs fw-bold uppercase tracking-wider text-subtle">People with access</div>
    </div>
    <div class="user-item py-2 px-3">
      <span class="avatar avatar-md rounded-full avatar-primary"><span class="avatar-initials">MC</span></span>
      <div class="user-item-info">
        <div class="user-item-name">Maya Chen (you)</div>
        <div class="user-item-subtitle truncate">maya@example.com</div>
      </div>
      <span class="text-xs text-subtle">Owner</span>
    </div>
    <div class="user-item py-2 px-3">
      <span class="avatar avatar-md rounded-full avatar-success"><span class="avatar-initials">DK</span></span>
      <div class="user-item-info">
        <div class="user-item-name">Daniel Kim</div>
        <div class="user-item-subtitle truncate">daniel@example.com</div>
      </div>
      <span class="text-xs text-subtle">Can edit</span>
    </div>
    <div class="user-item py-2 px-3">
      <span class="avatar avatar-md rounded-full avatar-warning"><span class="avatar-initials">SP</span></span>
      <div class="user-item-info">
        <div class="user-item-name">Sofia Patel</div>
        <div class="user-item-subtitle truncate">sofia@example.com</div>
      </div>
      <span class="text-xs text-subtle">Can view</span>
    </div>
  </div>
</div>
::end

```html
<div class="user-item py-2 px-3">
  <span class="avatar avatar-md rounded-full avatar-success"><span class="avatar-initials">DK</span></span>
  <div class="user-item-info">
    <div class="user-item-name">Daniel Kim</div>
    <div class="user-item-subtitle truncate">daniel@example.com</div>
  </div>
  <span class="text-xs text-subtle">Can edit</span>
</div>
```

```js components
import { UserItem } from "@abydahana/aksara-ui/components";

UserItem({
  name: "Daniel Kim",
  subtitle: "daniel@example.com",
  initials: "DK",
  avatarVariant: "success",
  className: "py-2 px-3",
  action: '<span class="text-xs text-subtle">Can edit</span>'
});
```

The avatar is always `avatar-md`. For a denser list (a mention picker, for example), write the markup by hand with `avatar-sm`.

---

## Profile Link

With `href`, the avatar and the text are wrapped in one `a.user-item-link`: hovering underlines the name, and keyboard focus draws a ring around the link only. The action stays outside the link, so a Follow button never navigates. `linkAttributes` puts extra attributes on that link, for example the attribute your SPA router intercepts, or `target`.

::html
<div class="docs-preview">
  <div class="card max-w-[420px] w-full">
    <div class="user-item">
      <a href="#" class="user-item-link" data-link="">
        <span class="avatar avatar-md rounded-full avatar-danger"><span class="avatar-initials">AM</span><span class="avatar-status bg-success" aria-hidden="true"></span></span>
        <div class="user-item-info">
          <div class="user-item-name">Alex Morgan</div>
          <div class="user-item-subtitle user-item-handle truncate">@alexmorgan</div>
        </div>
      </a>
      <button type="button" class="btn btn-soft-primary btn-sm"><span class="mdi mdi-message-outline"></span> Message</button>
    </div>
  </div>
</div>
::end

```html
<div class="user-item">
  <a href="/u/alexmorgan" class="user-item-link" data-link="">
    <span class="avatar avatar-md rounded-full avatar-danger">…</span>
    <div class="user-item-info">…</div>
  </a>
  <button type="button" class="btn btn-soft-primary btn-sm">
    <span class="mdi mdi-message-outline"></span> Message
  </button>
</div>
```

```js components
import { UserItem } from "@abydahana/aksara-ui/components";

UserItem({
  name: "Alex Morgan",
  handle: "alexmorgan",
  initials: "AM",
  avatarVariant: "danger",
  status: "online",
  href: "/u/alexmorgan",
  linkAttributes: { "data-link": "" }, // picked up by a client-side router
  action:
    '<button type="button" class="btn btn-soft-primary btn-sm"><span class="mdi mdi-message-outline"></span> Message</button>'
});
```

`href` goes through the URL sanitizer, so `javascript:` URLs become `#`.

---

## JavaScript

The runtime adds no behavior to the user item itself. The Follow buttons above are toggle buttons: a click flips `aria-pressed` and `.active` and fires `aksara:toggle` on the button, with `event.detail.pressed`. Save the change there and roll it back if the request fails.

```js
document.addEventListener("aksara:toggle", async (event) => {
  const row = event.target.closest(".user-item[data-user-id]");
  if (!row) return;
  const { pressed } = event.detail;
  const response = await fetch(`/api/users/${row.dataset.userId}/follow`, { method: pressed ? "PUT" : "DELETE" });
  if (!response.ok) {
    event.target.click(); // flip it back
    Aksara.notify("Could not update. Try again.", { icon: "mdi-alert-circle-outline" });
  }
});
```

---

## String Component

```ts
import { UserItem } from "@abydahana/aksara-ui/components";

UserItem({
  name: "Grace Lee",
  handle: "gracelee",
  subtitle: "Head of Customer Success",
  initials: "GL",
  avatarVariant: "info",
  status: "online",
  verified: true,
  href: "/u/gracelee",
  action: '<span class="badge badge-soft-success">Admin</span>'
});
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>UserItem prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>Required. Display name. Escaped; also the avatar's alt text.</td></tr>
      <tr><td><code>handle</code></td><td><code>string</code></td><td>—</td><td>Username, shown with a single leading <code>@</code> (one you pass is stripped first).</td></tr>
      <tr><td><code>subtitle</code></td><td><code>string</code></td><td>—</td><td>Second subtle line. Skipped when it equals the handle.</td></tr>
      <tr><td><code>avatar</code></td><td><code>string</code></td><td>—</td><td>Photo URL. Sanitized.</td></tr>
      <tr><td><code>initials</code></td><td><code>string</code></td><td>—</td><td>Avatar text when there is no photo.</td></tr>
      <tr><td><code>avatarVariant</code></td><td><code>AvatarProps["variant"]</code></td><td>avatar default</td><td>Avatar color: <code>primary</code>, <code>success</code>, <code>warning</code>…</td></tr>
      <tr><td><code>status</code></td><td><code>"online" | "offline" | "busy" | "away"</code></td><td>—</td><td>Presence dot on the avatar.</td></tr>
      <tr><td><code>verified</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>span.mdi-check-decagram.user-item-verified</code> after the name, with <code>role="img"</code>, <code>aria-label</code> and <code>title</code> "Verified".</td></tr>
      <tr><td><code>href</code></td><td><code>string</code></td><td>—</td><td>Wraps the avatar and text in <code>a.user-item-link</code>. Sanitized.</td></tr>
      <tr><td><code>linkAttributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra attributes on the profile link, for example <code>{ "data-link": "" }</code>.</td></tr>
      <tr><td><code>action</code></td><td><code>string</code></td><td>—</td><td>Raw HTML at the end of the row: a button, badge or menu.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on <code>.user-item</code>, for example <code>py-2 px-3</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes on the root.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.user-item</code></td><td>Row: flex, centered, space-between, <code>.75rem</code> gap, <code>.75rem 1rem</code> padding, bottom divider (none on the last child).</td></tr>
      <tr><td><code>.user-item-link</code></td><td>Profile link around the avatar and text: flex, fills the row, inherits color, underlines the name on hover, focus ring.</td></tr>
      <tr><td><code>.user-item-info</code></td><td>Text column that grows and can shrink (<code>min-width: 0</code>), so lines can truncate.</td></tr>
      <tr><td><code>.user-item-name</code></td><td>Semi-bold <code>.875rem</code> name.</td></tr>
      <tr><td><code>.user-item-subtitle</code></td><td>Subtle <code>.8125rem</code> line for the handle and the subtitle. Add <code>.truncate</code> for one line.</td></tr>
      <tr><td><code>.user-item-handle</code></td><td>On the handle line, together with <code>.user-item-subtitle</code>: subtle <code>.8125rem</code> text. A hook to style handles apart from the subtitle.</td></tr>
      <tr><td><code>.user-item-verified</code></td><td>Verified icon after the name: <code>.25rem</code> start margin, <code>1rem</code>, aligned with the text, body color.</td></tr>
    </tbody>
  </table>
</div>
::end
