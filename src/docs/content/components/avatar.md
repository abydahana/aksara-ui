# Avatar

Avatars represent a person, team, or workspace with a photo, initials, or an icon. `.avatar` sets the box and centers its content; you pick the shape with a radius utility and the color with background and text utilities. Status dots, overlapping groups, and hover stacks are built in.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="avatar avatar-primary avatar-lg rounded-full" role="img" aria-label="Grace Lee">GL</span>
    <span class="avatar avatar-lg rounded-full bg-subtle text-subtle" role="img" aria-label="Unknown user"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-success avatar-lg rounded-full" role="img" aria-label="Ryan Cooper, online">
      RC
      <span class="avatar-status bg-success"></span>
    </span>
    <div class="avatar-stack">
      <span class="avatar avatar-warning avatar-lg rounded-full" role="img" aria-label="Olivia Brown">OB</span>
      <span class="avatar avatar-info avatar-lg rounded-full" role="img" aria-label="Alex Morgan">AM</span>
      <span class="avatar avatar-danger avatar-lg rounded-full" role="img" aria-label="Sofia Patel">SP</span>
      <span class="avatar avatar-lg rounded-full bg-subtle text-subtle text-sm">+4</span>
    </div>
  </div>
</div>
::end

```html
<!-- Image: point src at your own file -->
<span class="avatar avatar-lg rounded-full"><img src="grace.jpg" alt="Grace Lee" /></span>
<!-- Initials -->
<span class="avatar avatar-primary avatar-lg rounded-full" role="img" aria-label="Grace Lee">GL</span>
<!-- Fallback icon -->
<span class="avatar avatar-lg rounded-full bg-subtle text-subtle"
  ><span class="avatar-fallback mdi mdi-account"></span
></span>
```

```js components
import { Avatar } from "@abydahana/aksara-ui/components";

Avatar({ src: "grace.jpg", alt: "Grace Lee", size: "lg" });
Avatar({ initials: "GL", size: "lg", attributes: { role: "img", "aria-label": "Grace Lee" } });
Avatar({ size: "lg", className: "bg-subtle text-subtle" });
```

---

## Sizes

Seven fixed sizes scale the box together with the initials or icon inside it. Without a size class the avatar is `2.5rem`, the same as `.avatar-md`.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="avatar avatar-primary avatar-xs rounded-full">XS</span>
    <span class="avatar avatar-primary avatar-sm rounded-full">SM</span>
    <span class="avatar avatar-primary avatar-md rounded-full">MD</span>
    <span class="avatar avatar-primary avatar-lg rounded-full">LG</span>
    <span class="avatar avatar-primary avatar-xl rounded-full">XL</span>
    <span class="avatar avatar-primary avatar-2xl rounded-full">2X</span>
    <span class="avatar avatar-primary avatar-3xl rounded-full">3X</span>
  </div>
  <div class="docs-row">
    <span class="avatar avatar-info avatar-xs rounded-full" role="img" aria-label="User"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-info avatar-sm rounded-full" role="img" aria-label="User"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-info avatar-md rounded-full" role="img" aria-label="User"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-info avatar-lg rounded-full" role="img" aria-label="User"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-info avatar-xl rounded-full" role="img" aria-label="User"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-info avatar-2xl rounded-full" role="img" aria-label="User"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-info avatar-3xl rounded-full" role="img" aria-label="User"><span class="avatar-fallback mdi mdi-account"></span></span>
  </div>
</div>
::end

```html
<span class="avatar avatar-primary avatar-xs rounded-full">XS</span>
<span class="avatar avatar-primary avatar-sm rounded-full">SM</span>
<span class="avatar avatar-primary avatar-md rounded-full">MD</span>
<span class="avatar avatar-primary avatar-lg rounded-full">LG</span>
<span class="avatar avatar-primary avatar-xl rounded-full">XL</span>
<span class="avatar avatar-primary avatar-2xl rounded-full">2X</span>
<span class="avatar avatar-primary avatar-3xl rounded-full">3X</span>
```

```js components
import { Avatar } from "@abydahana/aksara-ui/components";

Avatar({ initials: "XS", size: "xs" });
Avatar({ initials: "SM", size: "sm" });
Avatar({ initials: "MD", size: "md" });
Avatar({ initials: "LG", size: "lg" });
Avatar({ initials: "XL", size: "xl" });
Avatar({ initials: "2X", size: "2xl" });
Avatar({ initials: "3X", size: "3xl" });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Box</th><th>Initials</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.avatar-xs</code></td><td><code>1.5rem</code></td><td><code>.6875rem</code></td></tr>
      <tr><td><code>.avatar-sm</code></td><td><code>2rem</code></td><td><code>.8125rem</code></td></tr>
      <tr><td><code>.avatar-md</code></td><td><code>2.5rem</code></td><td><code>1rem</code></td></tr>
      <tr><td><code>.avatar-lg</code></td><td><code>3.25rem</code></td><td><code>1.25rem</code></td></tr>
      <tr><td><code>.avatar-xl</code></td><td><code>4rem</code></td><td><code>1.5rem</code></td></tr>
      <tr><td><code>.avatar-2xl</code></td><td><code>6rem</code></td><td><code>2.25rem</code></td></tr>
      <tr><td><code>.avatar-3xl</code></td><td><code>7.5rem</code></td><td><code>3rem</code></td></tr>
    </tbody>
  </table>
</div>
::end

For a one-off size, use arbitrary width and height utilities such as `w-[88px] h-[88px]`.

---

## Shapes

`.avatar` has no radius of its own. Add `rounded-full` for a circle, a radius utility for a rounded square, or `rounded-0` for a hard square. Icons, initials, and images all inherit the radius.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="avatar avatar-info avatar-xl rounded-full" role="img" aria-label="Circle"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-info avatar-xl rounded-md" role="img" aria-label="Rounded"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-info avatar-xl rounded-0" role="img" aria-label="Square"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-success avatar-xl rounded-full">AR</span>
    <span class="avatar avatar-success avatar-xl rounded-md">AR</span>
    <span class="avatar avatar-success avatar-xl rounded-0">AR</span>
  </div>
</div>
::end

```html
<span class="avatar avatar-success avatar-xl rounded-full">AR</span>
<span class="avatar avatar-success avatar-xl rounded-md">AR</span>
<span class="avatar avatar-success avatar-xl rounded-0">AR</span>
```

```js components
import { Avatar } from "@abydahana/aksara-ui/components";

Avatar({ initials: "AR", variant: "success", size: "xl", shape: "circle" });
Avatar({ initials: "AR", variant: "success", size: "xl", shape: "rounded" });
Avatar({ initials: "AR", variant: "success", size: "xl", shape: "square" });
```

---

## Content

An avatar holds one of three things:

- **Image**: a direct `<img>` child, or any image with `.avatar-img`. It fills the box with `object-fit: cover`.
- **Initials**: plain text, or a `.avatar-initials` span when you need to style the text separately.
- **Fallback icon**: a `.avatar-fallback` icon when there is neither a photo nor a name.

The preview shows initials and icons. The image markup is the first line of the code below; point `src` at your own file.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="avatar avatar-info avatar-xl rounded-full" role="img" aria-label="Mia Parker"><span class="avatar-initials">MP</span></span>
    <span class="avatar avatar-xl rounded-full bg-subtle text-subtle"><span class="avatar-fallback mdi mdi-account"></span></span>
    <span class="avatar avatar-warning avatar-xl rounded-md"><span class="avatar-fallback mdi mdi-domain"></span></span>
    <span class="avatar avatar-tertiary avatar-xl rounded-md"><span class="avatar-fallback mdi mdi-robot-outline"></span></span>
  </div>
</div>
::end

```html
<span class="avatar avatar-xl rounded-full"><img class="avatar-img" src="mia.jpg" alt="Mia Parker" /></span>
<span class="avatar avatar-info avatar-xl rounded-full"><span class="avatar-initials">MP</span></span>
<span class="avatar avatar-xl rounded-full bg-subtle text-subtle"
  ><span class="avatar-fallback mdi mdi-account"></span
></span>
```

```js components
import { Avatar } from "@abydahana/aksara-ui/components";

Avatar({ src: "mia.jpg", alt: "Mia Parker", size: "xl" });
Avatar({ initials: "MP", variant: "info", size: "xl" });
Avatar({ size: "xl", className: "bg-subtle text-subtle" });
```

---

## Colors

Color initials and icons with background and text utilities. Use `avatar-{color}` (`avatar-primary`, `avatar-success`, ...) for a soft tinted fill: the tint is mixed into the surface color, so it is opaque and never shows through overlapping avatars, and the text stays readable in both themes. `bg-text-{color}` gives a solid fill with an automatically readable text color.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="avatar avatar-primary avatar-lg rounded-full">PR</span>
    <span class="avatar avatar-secondary avatar-lg rounded-full">SE</span>
    <span class="avatar avatar-tertiary avatar-lg rounded-full">TE</span>
    <span class="avatar avatar-success avatar-lg rounded-full">SU</span>
    <span class="avatar avatar-danger avatar-lg rounded-full">DA</span>
    <span class="avatar avatar-warning avatar-lg rounded-full">WA</span>
    <span class="avatar avatar-info avatar-lg rounded-full">IN</span>
  </div>
  <div class="docs-row">
    <span class="avatar avatar-lg rounded-full bg-text-primary">PR</span>
    <span class="avatar avatar-lg rounded-full bg-text-secondary">SE</span>
    <span class="avatar avatar-lg rounded-full bg-text-tertiary">TE</span>
    <span class="avatar avatar-lg rounded-full bg-text-success">SU</span>
    <span class="avatar avatar-lg rounded-full bg-text-danger">DA</span>
    <span class="avatar avatar-lg rounded-full bg-text-warning">WA</span>
    <span class="avatar avatar-lg rounded-full bg-text-info">IN</span>
    <span class="avatar avatar-lg rounded-full bg-text-dark">DK</span>
  </div>
</div>
::end

```html
<!-- Tinted -->
<span class="avatar avatar-primary avatar-lg rounded-full">PR</span>
<span class="avatar avatar-success avatar-lg rounded-full">SU</span>

<!-- Solid -->
<span class="avatar avatar-lg rounded-full bg-text-primary">PR</span>
<span class="avatar avatar-lg rounded-full bg-text-success">SU</span>
```

```js components
import { Avatar } from "@abydahana/aksara-ui/components";

// Tinted
Avatar({ initials: "PR", variant: "primary", size: "lg" });
Avatar({ initials: "SU", variant: "success", size: "lg" });

// Solid
Avatar({ initials: "PR", size: "lg", className: "bg-text-primary" });
Avatar({ initials: "SU", size: "lg", className: "bg-text-success" });
```

---

## Status Indicator

Add a `.avatar-status` span inside the avatar and color it with a background utility. The dot sits on the bottom-right edge, grows with the avatar size, and gets a ring in `--aksara-avatar-ring` (the surface color by default) so it stays visible on any fill or photo. On circular avatars it is pulled onto the curve.

::html
<div class="docs-preview">
  <div class="docs-row">
    <span class="avatar avatar-primary avatar-lg rounded-full" role="img" aria-label="Grace Lee, online">
      GL
      <span class="avatar-status bg-success"></span>
    </span>
    <span class="avatar avatar-success avatar-lg rounded-full" role="img" aria-label="Ryan Cooper, away">
      RC
      <span class="avatar-status bg-warning"></span>
    </span>
    <span class="avatar avatar-warning avatar-lg rounded-full" role="img" aria-label="Olivia Brown, busy">
      OB
      <span class="avatar-status bg-danger"></span>
    </span>
    <span class="avatar avatar-info avatar-lg rounded-full" role="img" aria-label="Alex Morgan, offline">
      AM
      <span class="avatar-status bg-subtle"></span>
    </span>
    <span class="avatar avatar-primary avatar-lg rounded-md">
      KS
      <span class="avatar-status bg-success"></span>
    </span>
  </div>
  <div class="docs-row">
    <span class="avatar avatar-primary avatar-xs rounded-full">A<span class="avatar-status bg-success"></span></span>
    <span class="avatar avatar-primary avatar-sm rounded-full">AB<span class="avatar-status bg-success"></span></span>
    <span class="avatar avatar-primary avatar-md rounded-full">AB<span class="avatar-status bg-success"></span></span>
    <span class="avatar avatar-primary avatar-lg rounded-full">AB<span class="avatar-status bg-success"></span></span>
    <span class="avatar avatar-primary avatar-xl rounded-full">AB<span class="avatar-status bg-success"></span></span>
    <span class="avatar avatar-primary avatar-2xl rounded-full">AB<span class="avatar-status bg-success"></span></span>
    <span class="avatar avatar-primary avatar-3xl rounded-full">AB<span class="avatar-status bg-success"></span></span>
  </div>
</div>
::end

```html
<span class="avatar avatar-success avatar-lg rounded-full" role="img" aria-label="Ryan Cooper, online">
  RC
  <span class="avatar-status bg-success"></span>
</span>
```

```js components
import { Avatar } from "@abydahana/aksara-ui/components";

Avatar({
  initials: "RC",
  variant: "success",
  size: "lg",
  status: "online",
  attributes: { role: "img", "aria-label": "Ryan Cooper, online" }
});
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Status</th><th>Suggested class</th></tr>
    </thead>
    <tbody>
      <tr><td>Online</td><td><code>bg-success</code></td></tr>
      <tr><td>Away</td><td><code>bg-warning</code></td></tr>
      <tr><td>Busy</td><td><code>bg-danger</code></td></tr>
      <tr><td>Offline</td><td><code>bg-subtle</code></td></tr>
    </tbody>
  </table>
</div>
::end

The dot is decorative. Put the status in text too, for example in the avatar's `aria-label` (or the image `alt`) or a visible label, so screen reader users get it.

---

## Avatar Group

`.avatar-group` overlaps its avatars by `.625rem`, aligns image and initial avatars by their centers, gives each one a ring in `--aksara-avatar-ring` (the surface color; set it to match a different background), and an opaque subtle fill behind initials. Use `avatar-{color}` for colored initials. End the group with a counter avatar for the people you did not render.

::html
<div class="docs-preview">
  <div class="avatar-group">
    <span class="avatar avatar-primary avatar-md rounded-full" role="img" aria-label="Noah Evans">NE</span>
    <span class="avatar avatar-danger avatar-md rounded-full" role="img" aria-label="Laura Bennett">LB</span>
    <span class="avatar avatar-warning avatar-md rounded-full" role="img" aria-label="Leo Martin">LM</span>
    <span class="avatar avatar-md rounded-full text-success" role="img" aria-label="Nina Brooks">NB</span>
    <span class="avatar avatar-md rounded-full text-subtle text-xs" role="img" aria-label="8 more">+8</span>
  </div>
  <div class="avatar-group">
    <span class="avatar avatar-info avatar-sm rounded-full" role="img" aria-label="Tara Quinn">TQ</span>
    <span class="avatar avatar-secondary avatar-sm rounded-full" role="img" aria-label="Owen Price">OP</span>
    <span class="avatar avatar-success avatar-sm rounded-full" role="img" aria-label="Ruby Shaw">RS</span>
    <span class="avatar avatar-sm rounded-full text-subtle text-xs" role="img" aria-label="2 more">+2</span>
  </div>
</div>
::end

```html
<div class="avatar-group">
  <span class="avatar avatar-primary avatar-md rounded-full" role="img" aria-label="Noah Evans">NE</span>
  <span class="avatar avatar-danger avatar-md rounded-full" role="img" aria-label="Laura Bennett">LB</span>
  <span class="avatar avatar-md rounded-full text-success" role="img" aria-label="Nina Brooks">NB</span>
  <span class="avatar avatar-md rounded-full text-subtle text-xs" role="img" aria-label="8 more">+8</span>
</div>
```

```js components
import { AvatarGroup } from "@abydahana/aksara-ui/components";

AvatarGroup({
  size: "md",
  avatars: [
    { initials: "NE", variant: "primary", attributes: { role: "img", "aria-label": "Noah Evans" } },
    { initials: "LB", variant: "danger", attributes: { role: "img", "aria-label": "Laura Bennett" } },
    {
      initials: "NB",
      tinted: false,
      className: "text-success",
      attributes: { role: "img", "aria-label": "Nina Brooks" }
    },
    {
      initials: "+8",
      tinted: false,
      className: "text-subtle text-xs",
      attributes: { role: "img", "aria-label": "8 more" }
    }
  ]
});
```

---

## Avatar Stack

`.avatar-stack` overlaps its children a little more than a group, rounds them, and lifts the hovered one above its neighbours. Match the overlap to the avatar size with `.avatar-stack-xs`, `.avatar-stack-sm`, `.avatar-stack-lg`, or `.avatar-stack-xl`. Hover the avatars below.

::html
<div class="docs-preview">
  <div class="avatar-stack avatar-stack-xs">
    <span class="avatar avatar-warning avatar-xs" role="img" aria-label="Olivia Brown">OB</span>
    <span class="avatar avatar-info avatar-xs" role="img" aria-label="Alex Morgan">AM</span>
    <span class="avatar avatar-danger avatar-xs" role="img" aria-label="Sofia Patel">SP</span>
    <span class="avatar avatar-primary avatar-xs" role="img" aria-label="Grace Lee">GL</span>
  </div>
  <div class="avatar-stack avatar-stack-sm">
    <span class="avatar avatar-warning avatar-sm" role="img" aria-label="Olivia Brown">OB</span>
    <span class="avatar avatar-info avatar-sm" role="img" aria-label="Alex Morgan">AM</span>
    <span class="avatar avatar-danger avatar-sm" role="img" aria-label="Sofia Patel">SP</span>
    <span class="avatar avatar-primary avatar-sm" role="img" aria-label="Grace Lee">GL</span>
  </div>
  <div class="avatar-stack">
    <span class="avatar avatar-warning avatar-md" role="img" aria-label="Olivia Brown">OB</span>
    <span class="avatar avatar-info avatar-md" role="img" aria-label="Alex Morgan">AM</span>
    <span class="avatar avatar-danger avatar-md" role="img" aria-label="Sofia Patel">SP</span>
    <span class="avatar avatar-primary avatar-md" role="img" aria-label="Grace Lee">GL</span>
  </div>
  <div class="avatar-stack avatar-stack-lg">
    <span class="avatar avatar-warning avatar-lg" role="img" aria-label="Olivia Brown">OB</span>
    <span class="avatar avatar-info avatar-lg" role="img" aria-label="Alex Morgan">AM</span>
    <span class="avatar avatar-danger avatar-lg" role="img" aria-label="Sofia Patel">SP</span>
    <span class="avatar avatar-secondary avatar-lg text-sm" role="img" aria-label="12 more">+12</span>
  </div>
  <div class="avatar-stack avatar-stack-xl">
    <span class="avatar avatar-warning avatar-xl" role="img" aria-label="Olivia Brown">OB</span>
    <span class="avatar avatar-info avatar-xl" role="img" aria-label="Alex Morgan">AM</span>
    <span class="avatar avatar-danger avatar-xl" role="img" aria-label="Sofia Patel">SP</span>
    <span class="avatar avatar-secondary avatar-xl text-base" role="img" aria-label="12 more">+12</span>
  </div>
</div>
::end

```html
<div class="avatar-stack avatar-stack-lg">
  <span class="avatar avatar-warning avatar-lg" role="img" aria-label="Olivia Brown">OB</span>
  <span class="avatar avatar-info avatar-lg" role="img" aria-label="Alex Morgan">AM</span>
  <span class="avatar avatar-danger avatar-lg" role="img" aria-label="Sofia Patel">SP</span>
  <span class="avatar avatar-secondary avatar-lg text-sm" role="img" aria-label="12 more">+12</span>
</div>
```

```js components
import { Avatar, AvatarStack } from "@abydahana/aksara-ui/components";

AvatarStack({
  size: "lg",
  children: [
    Avatar({
      initials: "OB",
      variant: "warning",
      size: "lg",
      attributes: { role: "img", "aria-label": "Olivia Brown" }
    }),
    Avatar({ initials: "AM", variant: "info", size: "lg", attributes: { role: "img", "aria-label": "Alex Morgan" } }),
    Avatar({ initials: "SP", variant: "danger", size: "lg", attributes: { role: "img", "aria-label": "Sofia Patel" } }),
    Avatar({
      initials: "+12",
      variant: "secondary",
      size: "lg",
      className: "text-sm",
      attributes: { role: "img", "aria-label": "12 more" }
    })
  ].join("")
});
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Overlap</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.avatar-stack-xs</code></td><td><code>-.375rem</code></td></tr>
      <tr><td><code>.avatar-stack-sm</code></td><td><code>-.5rem</code></td></tr>
      <tr><td><code>.avatar-stack</code></td><td><code>-.75rem</code></td></tr>
      <tr><td><code>.avatar-stack-lg</code></td><td><code>-1rem</code></td></tr>
      <tr><td><code>.avatar-stack-xl</code></td><td><code>-1.25rem</code></td></tr>
    </tbody>
  </table>
</div>
::end

Any direct child is stacked, so you can wrap each avatar in a link to a profile. `.avatar-stack-item` applies the same ring and hover lift to an element explicitly.

---

## Team Members

Avatars with status dots in a card list, each row a `.user-item` with a role badge and an action.

::html
<div class="docs-preview">
  <div class="card max-w-[34rem]">
    <div class="card-header hstack justify-between">
      <span>Team members</span>
      <button class="btn btn-soft-primary btn-sm"><span class="mdi mdi-account-plus-outline"></span> Invite</button>
    </div>
    <div class="mt-3">
      <div class="user-item">
        <span class="avatar avatar-primary avatar-md rounded-full" role="img" aria-label="Grace Lee, online">
          GL
          <span class="avatar-status bg-success"></span>
        </span>
        <div class="user-item-info">
          <div class="user-item-name">Grace Lee</div>
          <div class="user-item-subtitle truncate">grace.lee@example.com</div>
        </div>
        <span class="badge badge-soft-primary">Owner</span>
      </div>
      <div class="user-item">
        <span class="avatar avatar-success avatar-md rounded-full" role="img" aria-label="Ryan Cooper, away">
          RC
          <span class="avatar-status bg-warning"></span>
        </span>
        <div class="user-item-info">
          <div class="user-item-name">Ryan Cooper</div>
          <div class="user-item-subtitle truncate">ryan.cooper@example.com</div>
        </div>
        <span class="badge badge-soft-success">Editor</span>
      </div>
      <div class="user-item">
        <span class="avatar avatar-info avatar-md rounded-full" role="img" aria-label="Nina Brooks, invited">
          NB
          <span class="avatar-status bg-subtle"></span>
        </span>
        <div class="user-item-info">
          <div class="user-item-name">Nina Brooks</div>
          <div class="user-item-subtitle truncate">Invitation sent 2 days ago</div>
        </div>
        <button class="btn btn-ghost btn-sm">Resend</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="user-item">
  <span class="avatar avatar-primary avatar-md rounded-full" role="img" aria-label="Grace Lee, online">
    GL
    <span class="avatar-status bg-success"></span>
  </span>
  <div class="user-item-info">
    <div class="user-item-name">Grace Lee</div>
    <div class="user-item-subtitle truncate">grace.lee@example.com</div>
  </div>
  <span class="badge badge-soft-primary">Owner</span>
</div>
```

```js components
import { Badge, UserItem } from "@abydahana/aksara-ui/components";

UserItem({
  initials: "GL",
  avatarVariant: "primary",
  name: "Grace Lee",
  subtitle: "grace.lee@example.com",
  status: "online",
  action: Badge({ label: "Owner", soft: true })
});
```

---

## Project Cards

A stack shows who is on a project without taking much room. Pair it with a short count so the number is readable.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6">
      <div class="card h-100">
        <div class="card-body">
          <div class="hstack gap-3">
            <span class="avatar avatar-primary avatar-lg rounded-md"><span class="avatar-fallback mdi mdi-palette-outline"></span></span>
            <div class="min-w-0">
              <h4 class="card-title truncate">Brand refresh</h4>
              <p class="card-subtitle m-0">Due 12 Dec</p>
            </div>
          </div>
          <div class="hstack justify-between mt-4">
            <div class="avatar-stack avatar-stack-sm">
              <span class="avatar avatar-warning avatar-sm" role="img" aria-label="Olivia Brown">OB</span>
              <span class="avatar avatar-info avatar-sm" role="img" aria-label="Alex Morgan">AM</span>
              <span class="avatar avatar-danger avatar-sm" role="img" aria-label="Sofia Patel">SP</span>
              <span class="avatar avatar-sm bg-subtle text-subtle text-xs" role="img" aria-label="3 more">+3</span>
            </div>
            <span class="text-subtle text-sm">6 members</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card h-100">
        <div class="card-body">
          <div class="hstack gap-3">
            <span class="avatar avatar-success avatar-lg rounded-md"><span class="avatar-fallback mdi mdi-rocket-launch-outline"></span></span>
            <div class="min-w-0">
              <h4 class="card-title truncate">Mobile app launch</h4>
              <p class="card-subtitle m-0">Due 20 Jan</p>
            </div>
          </div>
          <div class="hstack justify-between mt-4">
            <div class="avatar-stack avatar-stack-sm">
              <span class="avatar avatar-primary avatar-sm" role="img" aria-label="Jack Reed">JR</span>
              <span class="avatar avatar-success avatar-sm" role="img" aria-label="Yuki Tanaka">YT</span>
            </div>
            <span class="text-subtle text-sm">2 members</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="hstack justify-between">
  <div class="avatar-stack avatar-stack-sm">
    <span class="avatar avatar-warning avatar-sm" role="img" aria-label="Olivia Brown">OB</span>
    <span class="avatar avatar-info avatar-sm" role="img" aria-label="Alex Morgan">AM</span>
    <span class="avatar avatar-sm bg-subtle text-subtle text-xs" role="img" aria-label="3 more">+3</span>
  </div>
  <span class="text-subtle text-sm">6 members</span>
</div>
```

```js components
import { Avatar, AvatarStack } from "@abydahana/aksara-ui/components";

const members = AvatarStack({
  size: "sm",
  children: [
    Avatar({
      initials: "OB",
      variant: "warning",
      size: "sm",
      attributes: { role: "img", "aria-label": "Olivia Brown" }
    }),
    Avatar({ initials: "AM", variant: "info", size: "sm", attributes: { role: "img", "aria-label": "Alex Morgan" } }),
    Avatar({
      initials: "+3",
      size: "sm",
      className: "bg-subtle text-subtle text-xs",
      attributes: { role: "img", "aria-label": "3 more" }
    })
  ].join("")
});

`<div class="hstack justify-between">
  ${members}
  <span class="text-subtle text-sm">6 members</span>
</div>`;
```

---

## Comment Thread

Small avatars anchor each comment to its author. `shrink-0` is already part of `.avatar`, so long text never squeezes it.

::html
<div class="docs-preview">
  <div class="vstack gap-4 max-w-[36rem]">
    <div class="hstack gap-3 items-start">
      <span class="avatar avatar-danger avatar-md rounded-full" aria-hidden="true">LB</span>
      <div class="min-w-0">
        <div class="hstack gap-2"><span class="fw-semibold text-sm">Laura Bennett</span><span class="text-subtle text-xs">2 h ago</span></div>
        <p class="text-sm m-0 mt-1">Can we move the pricing table above the testimonials? Most people scroll straight past them on mobile.</p>
      </div>
    </div>
    <div class="hstack gap-3 items-start ms-5">
      <span class="avatar avatar-primary avatar-sm rounded-full" aria-hidden="true">AR</span>
      <div class="min-w-0">
        <div class="hstack gap-2"><span class="fw-semibold text-sm">Adam Ross</span><span class="badge badge-soft-primary">Author</span></div>
        <p class="text-sm m-0 mt-1">Good call. Pushed a new layout to the preview branch.</p>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="hstack gap-3 items-start">
  <span class="avatar avatar-danger avatar-md rounded-full" aria-hidden="true">LB</span>
  <div class="min-w-0">
    <span class="fw-semibold text-sm">Laura Bennett</span>
    <p class="text-sm m-0 mt-1">Can we move the pricing table above the testimonials?</p>
  </div>
</div>
```

```js components
import { Avatar } from "@abydahana/aksara-ui/components";

`<div class="hstack gap-3 items-start">
  ${Avatar({ initials: "LB", variant: "danger", size: "md", attributes: { "aria-hidden": "true" } })}
  <div class="min-w-0">
    <span class="fw-semibold text-sm">Laura Bennett</span>
    <p class="text-sm m-0 mt-1">Can we move the pricing table above the testimonials?</p>
  </div>
</div>`;
```

---

## Profile Header

A large avatar overlapping a cover band. The ring comes from a border in the surface color.

::html
<div class="docs-preview">
  <div class="card max-w-[30rem] overflow-hidden">
    <div class="h-[96px] bg-primary/15"></div>
    <div class="card-body pt-0">
      <span class="avatar avatar-info avatar-2xl rounded-full border-4 mt-[-3rem] [border-color:var(--aksara-surface)]" role="img" aria-label="Isaac Bell, online">
        IB
        <span class="avatar-status bg-success"></span>
      </span>
      <div class="hstack justify-between items-end mt-2">
        <div>
          <h4 class="card-title">Isaac Bell</h4>
          <p class="card-subtitle m-0">Product designer, Manchester</p>
        </div>
        <button class="btn btn-primary btn-sm">Follow</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<span
  class="avatar avatar-info avatar-2xl rounded-full border-4 mt-[-3rem] [border-color:var(--aksara-surface)]"
  role="img"
  aria-label="Isaac Bell, online"
>
  IB
  <span class="avatar-status bg-success"></span>
</span>
```

```js components
import { Avatar } from "@abydahana/aksara-ui/components";

Avatar({
  initials: "IB",
  variant: "info",
  size: "2xl",
  status: "online",
  className: "border-4 mt-[-3rem] [border-color:var(--aksara-surface)]",
  attributes: { role: "img", "aria-label": "Isaac Bell, online" }
});
```

---

## String Components

`Avatar`, `AvatarGroup`, and `AvatarStack` return HTML strings, so they work in server templates, static site generators, and plain `innerHTML`. Text and URLs are escaped.

```ts
import { Avatar, AvatarGroup, AvatarStack } from "@abydahana/aksara-ui/components";

Avatar({ src: "/img/grace.jpg", alt: "Grace Lee", size: "lg", status: "online" });
Avatar({ initials: "GL", variant: "success", shape: "rounded" });

AvatarGroup({
  size: "sm",
  max: 3,
  avatars: [
    { src: "/img/noah.jpg", alt: "Noah" },
    { src: "/img/laura.jpg", alt: "Laura" },
    { initials: "NB", variant: "info" },
    { initials: "FR" },
    { initials: "YT" }
  ]
}); // renders 3 avatars and a "+2" counter

AvatarStack({ size: "lg", children: Avatar({ src: "/img/a.jpg" }) + Avatar({ src: "/img/b.jpg" }) });
```

### Avatar

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>src</code></td><td><code>string</code></td><td>—</td><td>Image URL. When set, the image replaces initials and the fallback icon.</td></tr>
      <tr><td><code>alt</code></td><td><code>string</code></td><td><code>"Avatar"</code></td><td>Image alt text.</td></tr>
      <tr><td><code>initials</code></td><td><code>string</code></td><td>—</td><td>Text shown when there is no <code>src</code>. Rendered uppercase.</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td><code>"mdi-account"</code></td><td>Fallback icon when there is neither <code>src</code> nor <code>initials</code>.</td></tr>
      <tr><td><code>size</code></td><td><code>"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"</code></td><td><code>"md"</code></td><td>Adds <code>.avatar-{size}</code>. Skipped when you pass <code>width</code> or <code>height</code> without a size.</td></tr>
      <tr><td><code>width</code></td><td><code>string | number</code></td><td>—</td><td>Custom width as an inline style. Numbers are pixels.</td></tr>
      <tr><td><code>height</code></td><td><code>string | number</code></td><td>—</td><td>Custom height as an inline style.</td></tr>
      <tr><td><code>shape</code></td><td><code>"circle" | "rounded" | "square"</code></td><td><code>"circle"</code></td><td><code>rounded-full</code>, an <code>8px</code> radius, or <code>rounded-0</code>.</td></tr>
      <tr><td><code>status</code></td><td><code>"online" | "offline" | "busy" | "away" | boolean</code></td><td>—</td><td>Adds a <code>.avatar-status</code> dot: success, subtle, danger, or warning. <code>true</code> means online.</td></tr>
      <tr><td><code>variant</code></td><td><code>"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light"</code></td><td><code>"primary"</code></td><td>Tint for initials and the fallback icon (<code>bg-{variant}/15 text-{variant}</code>).</td></tr>
      <tr><td><code>tinted</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Set <code>false</code> to skip the variant tint and style the fallback yourself. Also skipped when <code>className</code> has a <code>bg-</code> class.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the avatar.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes.</td></tr>
    </tbody>
  </table>
</div>
::end

### AvatarGroup

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>avatars</code></td><td><code>AvatarProps[]</code></td><td><code>[]</code></td><td>Avatars to render. Each item takes the <code>Avatar</code> props.</td></tr>
      <tr><td><code>max</code></td><td><code>number</code></td><td>—</td><td>Render at most this many, then a <code>+N</code> counter for the rest.</td></tr>
      <tr><td><code>size</code></td><td><code>AvatarSize</code></td><td><code>"md"</code></td><td>Size for every avatar that does not set its own, and for the counter.</td></tr>
      <tr><td><code>children</code></td><td><code>string</code></td><td>—</td><td>Raw HTML to place inside the group instead of <code>avatars</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the <code>.avatar-group</code> wrapper.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes.</td></tr>
    </tbody>
  </table>
</div>
::end

### AvatarStack

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>children</code></td><td><code>string</code></td><td><code>""</code></td><td>Avatar HTML to stack.</td></tr>
      <tr><td><code>size</code></td><td><code>AvatarSize</code></td><td>—</td><td>Adds <code>.avatar-stack-{size}</code> to set the overlap.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the <code>.avatar-stack</code> wrapper.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes.</td></tr>
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
      <tr><td><code>.avatar</code></td><td>Inline-flex box, <code>2.5rem</code> by default, centered bold content, no shrinking.</td></tr>
      <tr><td><code>.avatar-xs</code> … <code>.avatar-3xl</code></td><td>Fixed box and font sizes.</td></tr>
      <tr><td><code>.avatar-img</code></td><td>Image that covers the box and inherits its radius (direct <code>img</code> children get the same).</td></tr>
      <tr><td><code>.avatar-initials</code>, <code>.avatar-fallback</code></td><td>Full-size centered wrapper for initials or a fallback icon.</td></tr>
      <tr><td><code>.avatar-status</code></td><td>Status dot on the bottom-right edge, sized per avatar size.</td></tr>
      <tr><td><code>.avatar-group</code></td><td>Overlapping row with a ring around each avatar.</td></tr>
      <tr><td><code>.avatar-stack</code></td><td>Overlapping row with rounded children and a hover lift.</td></tr>
      <tr><td><code>.avatar-stack-item</code></td><td>Marks a non-avatar child (such as a link) as a stack item.</td></tr>
      <tr><td><code>.avatar-stack-xs</code> … <code>.avatar-stack-xl</code></td><td>Overlap amount for small and large stacks.</td></tr>
    </tbody>
  </table>
</div>
::end
