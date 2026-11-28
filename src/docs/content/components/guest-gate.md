# Guest Gate

A guest gate sits in the page flow where members-only content would continue, and invites signed-out visitors to log in. The default card fades in a skeleton teaser of the hidden content above the prompt, so it reads as "there is more here". An `inline` variant drops the frame to fit inside cards and panels, and a `slide` variant fills a full-height panel, such as one slide of a vertical video feed.

::html
<div class="docs-preview">
  <div class="max-w-[32rem] w-full mx-auto vstack gap-3">
    <div class="card">
      <div class="card-body vstack gap-2">
        <div class="hstack gap-3">
          <span class="avatar avatar-sm avatar-success rounded-full"><span class="avatar-initials">GL</span></span>
          <div class="flex-1"><div class="fw-semibold text-sm">Grace Lee</div><div class="text-xs text-subtle">Engineering manager · 1h</div></div>
        </div>
        <p class="m-0 text-sm">Our on-call rotation went from 14 pages a week to 3. The biggest win was deleting alerts nobody acted on.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-body vstack gap-2">
        <div class="hstack gap-3">
          <span class="avatar avatar-sm avatar-warning rounded-full"><span class="avatar-initials">AM</span></span>
          <div class="flex-1"><div class="fw-semibold text-sm">Alex Morgan</div><div class="text-xs text-subtle">Founder · Manchester · 3h</div></div>
        </div>
        <p class="m-0 text-sm">We just crossed $40,000.00 in monthly revenue with a team of four. Writing up the full story this week.</p>
      </div>
    </div>
    <div class="guest-gate">
    <div class="guest-gate-teaser" aria-hidden="true">
    <div class="hstack gap-3"><span class="skeleton skeleton-circle w-[40px] h-[40px]"></span><span class="vstack gap-2 flex-1"><span class="skeleton skeleton-text w-[40%] m-0"></span><span class="skeleton skeleton-text w-[25%] m-0"></span></span></div>
    <span class="skeleton skeleton-text w-[90%] m-0"></span>
    <span class="skeleton skeleton-text w-[70%] m-0"></span>
    </div>
    <div class="guest-gate-card">
    <div class="guest-gate-icon" aria-hidden="true"><span class="mdi mdi-account-lock-outline"></span></div>
    <h4 class="guest-gate-title">You&#39;re all caught up on the preview</h4>
    <p class="guest-gate-text">Log in to keep scrolling, follow people and get replies to your posts.</p>
    <div class="guest-gate-actions">
    <a class="btn btn-primary rounded-pill" href="/login?redirect=%2Ffeed"><span class="mdi mdi-login"></span><span>Log in</span></a>
    <a class="btn btn-plain rounded-pill" href="/register">Create account</a>
    </div></div>
    </div>
  </div>
</div>
::end

```html
<div class="guest-gate">
  <div class="guest-gate-teaser" aria-hidden="true">
    <div class="hstack gap-3">
      <span class="skeleton skeleton-circle w-[40px] h-[40px]"></span>
      <span class="vstack gap-2 flex-1">
        <span class="skeleton skeleton-text w-[40%] m-0"></span>
        <span class="skeleton skeleton-text w-[25%] m-0"></span>
      </span>
    </div>
    <span class="skeleton skeleton-text w-[90%] m-0"></span>
    <span class="skeleton skeleton-text w-[70%] m-0"></span>
  </div>
  <div class="guest-gate-card">
    <div class="guest-gate-icon" aria-hidden="true"><span class="mdi mdi-account-lock-outline"></span></div>
    <h4 class="guest-gate-title">You're all caught up on the preview</h4>
    <p class="guest-gate-text">Log in to keep scrolling, follow people and get replies to your posts.</p>
    <div class="guest-gate-actions">
      <a class="btn btn-primary rounded-pill" href="/login?redirect=%2Ffeed"
        ><span class="mdi mdi-login"></span><span>Log in</span></a
      >
      <a class="btn btn-plain rounded-pill" href="/register">Create account</a>
    </div>
  </div>
</div>
```

```js components
import { GuestGate } from "@abydahana/aksara-ui/components";

// After the last public post of the feed
GuestGate({
  title: "You're all caught up on the preview",
  description: "Log in to keep scrolling, follow people and get replies to your posts.",
  redirectTo: "/feed",
  secondaryText: "Create account"
});
```

---

## Card

The default `card` variant renders a framed, centered prompt up to 30rem wide. Above it, `.guest-gate-teaser` draws a post-shaped skeleton (avatar, name, two lines) that fades out toward the card through a CSS mask. The teaser is decorative (`aria-hidden="true"`) and does not react to the pointer.

The login button links to `loginPath` (`/login` by default), or `loginPath?redirect=…` when you pass `redirectTo`. `redirectParam` renames the query parameter, and `loginUrl` replaces the whole address. See Links and SPA Routers below. `secondaryText` adds a plain second button linking to `secondaryUrl` (`/register` by default).

---

## Locked Comments

Show the first few comments to everyone and gate the rest. Here the teaser looks like one more comment, and the title says exactly what is behind the gate.

::html
<div class="docs-preview">
  <div class="card max-w-[32rem] w-full">
    <div class="card-header hstack justify-between">
      <span class="fw-semibold">Comments</span>
      <span class="badge badge-soft-secondary">128</span>
    </div>
    <div class="card-body vstack gap-3">
      <div class="hstack gap-2 items-start">
        <span class="avatar avatar-xs avatar-info rounded-full"><span class="avatar-initials">DK</span></span>
        <div class="flex-1 text-sm"><span class="fw-semibold">Daniel Kim</span> This is the clearest explanation of database indexes I have read.<div class="text-xs text-subtle mt-1">2h · 24 likes</div></div>
      </div>
      <div class="hstack gap-2 items-start">
        <span class="avatar avatar-xs avatar-danger rounded-full"><span class="avatar-initials">SP</span></span>
        <div class="flex-1 text-sm"><span class="fw-semibold">Sofia Patel</span> Would love a follow-up on partial indexes in Postgres.<div class="text-xs text-subtle mt-1">1h · 9 likes</div></div>
      </div>
      <div class="guest-gate">
      <div class="guest-gate-teaser" aria-hidden="true">
      <div class="hstack gap-3"><span class="skeleton skeleton-circle w-[40px] h-[40px]"></span><span class="vstack gap-2 flex-1"><span class="skeleton skeleton-text w-[40%] m-0"></span><span class="skeleton skeleton-text w-[25%] m-0"></span></span></div>
      <span class="skeleton skeleton-text w-[90%] m-0"></span>
      <span class="skeleton skeleton-text w-[70%] m-0"></span>
      </div>
      <div class="guest-gate-card">
      <div class="guest-gate-icon" aria-hidden="true"><span class="mdi mdi-forum-outline"></span></div>
      <h4 class="guest-gate-title">Log in to read all 128 comments</h4>
      <p class="guest-gate-text">Join the discussion, reply to the author and get notified about new answers.</p>
      <div class="guest-gate-actions">
      <a class="btn btn-primary rounded-pill" href="/login?redirect=%2Farticles%2Fdatabase-indexes%23comments"><span class="mdi mdi-login"></span><span>Log in to comment</span></a>
      <a class="btn btn-plain rounded-pill" href="/register">Sign up free</a>
      </div></div>
      </div>
    </div>
  </div>
</div>
::end

```js components
import { GuestGate } from "@abydahana/aksara-ui/components";

GuestGate({
  icon: '<span class="mdi mdi-forum-outline"></span>',
  title: "Log in to read all 128 comments",
  description: "Join the discussion, reply to the author and get notified about new answers.",
  buttonText: "Log in to comment",
  redirectTo: "/articles/database-indexes#comments",
  secondaryText: "Sign up free"
});
```

`icon` takes HTML, so any MDI icon, an SVG or an `<img>` works. The default is `mdi-account-lock-outline` (`mdi-play-box-lock-outline` for the slide variant).

---

## Without the Teaser

Set `showTeaserSkeleton: false` when the content above already shows what is hidden, for example right under a truncated article.

::html
<div class="docs-preview">
  <article class="max-w-[36rem] w-full mx-auto vstack gap-3">
    <div class="text-xs text-subtle">Engineering · 8 min read</div>
    <h4 class="m-0">How we cut our cloud bill by 38%</h4>
    <p class="m-0 text-sm text-subtle">It started with a $12,480.00 invoice nobody could explain. Over six weeks we tagged every resource, rebuilt our staging environments and rethought how we cache build artifacts. The results surprised even our finance team…</p>
    <div class="guest-gate">
    <div class="guest-gate-card">
    <div class="guest-gate-icon" aria-hidden="true"><span class="mdi mdi-book-lock-outline"></span></div>
    <h4 class="guest-gate-title">Keep reading for free</h4>
    <p class="guest-gate-text">Create an account to read the full article and get our weekly engineering digest.</p>
    <div class="guest-gate-actions">
    <a class="btn btn-primary rounded-pill" href="/login?redirect=%2Fblog%2Fcloud-bill"><span class="mdi mdi-login"></span><span>Log in</span></a>
    <a class="btn btn-plain rounded-pill" href="/register?plan=free">Create account</a>
    </div></div>
    </div>
  </article>
</div>
::end

```js components
import { GuestGate } from "@abydahana/aksara-ui/components";

GuestGate({
  showTeaserSkeleton: false,
  icon: '<span class="mdi mdi-book-lock-outline"></span>',
  title: "Keep reading for free",
  description: "Create an account to read the full article and get our weekly engineering digest.",
  buttonText: "Log in",
  redirectTo: "/blog/cloud-bill",
  secondaryText: "Create account",
  secondaryUrl: "/register?plan=free"
});
```

---

## Slide

`variant: "slide"` centers the prompt in a panel at least `min(70vh, 36rem)` tall, with a larger icon and title and no frame or teaser. Use it as one item of a vertical, swipeable feed (short videos, stories): the visitor swipes to the next slide and meets the gate instead of a video. Give it the height of your slides with a class such as `h-full`.

::html
<div class="docs-preview">
  <div class="w-full max-w-[320px] h-[600px] mx-auto rounded-[28px] overflow-hidden text-body vstack [background:linear-gradient(180deg,#1f2a36,#0d1117)]" data-theme="dark">
    <div class="hstack justify-between px-4 pt-4">
      <span class="fw-semibold text-sm">For you</span>
      <span class="mdi mdi-magnify"></span>
    </div>
    <div class="guest-gate guest-gate-slide h-full">
    <div class="guest-gate-icon" aria-hidden="true"><span class="mdi mdi-play-box-lock-outline"></span></div>
    <h4 class="guest-gate-title">Watch more on Aksara</h4>
    <p class="guest-gate-text">Log in to keep watching, follow creators and save videos for later.</p>
    <div class="guest-gate-actions">
    <a class="btn btn-primary rounded-pill" href="/login?redirect=%2Fwatch"><span class="mdi mdi-login"></span><span>Log in</span></a>
    <a class="btn btn-plain rounded-pill" href="/register">Sign up</a>
    </div></div>
  </div>
</div>
::end

```html
<div class="guest-gate guest-gate-slide h-full">
  <div class="guest-gate-icon" aria-hidden="true"><span class="mdi mdi-play-box-lock-outline"></span></div>
  <h4 class="guest-gate-title">Watch more on Aksara</h4>
  <p class="guest-gate-text">Log in to keep watching, follow creators and save videos for later.</p>
  <div class="guest-gate-actions">
    <a class="btn btn-primary rounded-pill" href="/login?redirect=%2Fwatch"
      ><span class="mdi mdi-login"></span><span>Log in</span></a
    >
    <a class="btn btn-plain rounded-pill" href="/register">Sign up</a>
  </div>
</div>
```

```js components
import { GuestGate } from "@abydahana/aksara-ui/components";

GuestGate({
  variant: "slide",
  className: "h-full",
  title: "Watch more on Aksara",
  description: "Log in to keep watching, follow creators and save videos for later.",
  redirectTo: "/watch",
  secondaryText: "Sign up"
});
```

The frame in this example sets `data-theme="dark"` and `text-body`, so the gate picks up dark-theme colors on a video-like background.

---

## Inline

`variant: "inline"` renders the icon, text and buttons with no frame and no teaser, so it fits inside a card, a sidebar panel or a tab you already styled. `.guest-gate-inline` adds `1.5rem` of vertical padding so the prompt does not touch the edges of its container.

::html
<div class="docs-preview">
  <div class="row gap-3 w-full">
    <div class="col-12 md:col-6">
      <div class="card h-full">
        <div class="card-header hstack justify-between">
          <span class="fw-semibold">Audience insights</span>
          <span class="badge badge-soft-primary">Members</span>
        </div>
        <div class="card-body">
          <div class="guest-gate guest-gate-inline">
          <div class="guest-gate-icon" aria-hidden="true"><span class="mdi mdi-chart-box-outline"></span></div>
          <h4 class="guest-gate-title">See who reads your posts</h4>
          <p class="guest-gate-text">Log in to view reach, followers and top posts for the last 90 days.</p>
          <div class="guest-gate-actions">
          <a class="btn btn-primary rounded-pill" href="/login?redirect=%2Finsights"><span class="mdi mdi-login"></span><span>Log in</span></a>
          </div></div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card h-full">
        <div class="card-header fw-semibold">Saved collections</div>
        <div class="card-body">
          <div class="guest-gate guest-gate-inline">
          <div class="guest-gate-icon" aria-hidden="true"><span class="mdi mdi-bookmark-multiple-outline"></span></div>
          <h4 class="guest-gate-title">Your reading list lives here</h4>
          <p class="guest-gate-text">Log in to save posts and pick up where you left off on any device.</p>
          <div class="guest-gate-actions">
          <a class="btn btn-primary rounded-pill" href="/login?redirect=%2Fsaved"><span class="mdi mdi-login"></span><span>Log in</span></a>
          <a class="btn btn-plain rounded-pill" href="/register">Create account</a>
          </div></div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-header">Audience insights</div>
  <div class="card-body">
    <div class="guest-gate guest-gate-inline">
      <div class="guest-gate-icon" aria-hidden="true"><span class="mdi mdi-chart-box-outline"></span></div>
      <h4 class="guest-gate-title">See who reads your posts</h4>
      <p class="guest-gate-text">Log in to view reach, followers and top posts for the last 90 days.</p>
      <div class="guest-gate-actions">
        <a class="btn btn-primary rounded-pill" href="/login?redirect=%2Finsights"
          ><span class="mdi mdi-login"></span><span>Log in</span></a
        >
      </div>
    </div>
  </div>
</div>
```

```js components
import { GuestGate } from "@abydahana/aksara-ui/components";

GuestGate({
  variant: "inline",
  icon: '<span class="mdi mdi-chart-box-outline"></span>',
  title: "See who reads your posts",
  description: "Log in to view reach, followers and top posts for the last 90 days.",
  redirectTo: "/insights"
});
```

Add your own utilities through `className` to change the spacing, for example `className: "py-5"` for an empty tab.

---

## Links and SPA Routers

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Props</th><th>Log in link</th></tr>
    </thead>
    <tbody>
      <tr><td><em>none</em></td><td><code>/login</code></td></tr>
      <tr><td><code>redirectTo: "/feed?tab=following"</code></td><td><code>/login?redirect=%2Ffeed%3Ftab%3Dfollowing</code></td></tr>
      <tr><td><code>loginPath: "/auth/sign-in"</code></td><td><code>/auth/sign-in</code></td></tr>
      <tr><td><code>loginPath: "/auth/sign-in", redirectParam: "next", redirectTo: "/feed"</code></td><td><code>/auth/sign-in?next=%2Ffeed</code></td></tr>
      <tr><td><code>loginPath: "/login?source=gate", redirectTo: "/feed"</code></td><td><code>/login?source=gate&amp;redirect=%2Ffeed</code> (joined with <code>&amp;</code> when the path already has a query)</td></tr>
      <tr><td><code>redirectParam: "", redirectTo: "/feed"</code></td><td><code>/login</code> (an empty parameter name drops the redirect)</td></tr>
      <tr><td><code>loginUrl: "/auth/sign-in?next=/feed"</code></td><td>Used as is; <code>loginPath</code>, <code>redirectParam</code> and <code>redirectTo</code> are ignored.</td></tr>
    </tbody>
  </table>
</div>
::end

`linkAttributes` adds the same attributes to both rendered links (the login button and, when present, the secondary button), for example the attribute your client-side router intercepts:

```js components
import { GuestGate } from "@abydahana/aksara-ui/components";

GuestGate({
  loginPath: "/auth/sign-in",
  redirectParam: "next",
  redirectTo: location.pathname,
  secondaryText: "Create account",
  secondaryUrl: "/auth/sign-up",
  linkAttributes: { "data-link": "" }
});
// On /pricing this renders:
// <a class="btn btn-primary rounded-pill" href="/auth/sign-in?next=%2Fpricing" data-link="">…</a>
// <a class="btn btn-plain rounded-pill" href="/auth/sign-up" data-link="">Create account</a>
```

---

## Accessibility

- The icon and the teaser are `aria-hidden`; the title (an `<h4>`) and the text carry the message, so keep them specific ("Log in to read all 128 comments").
- Both actions are real links that work without JavaScript and can be opened in a new tab.
- Do not render the hidden content behind the gate and only blur it. Send it only to signed-in visitors: the teaser is a skeleton, not the real content.
- For a gate that appears in response to an action (like, follow) rather than in the page flow, use the [Auth Prompt](#/components/auth-modal) modal.

---

## String Component

`GuestGate` (alias `guestGate`) renders the whole block. Text props are escaped; `icon` is raw HTML; URLs pass the library's URL filter.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>variant</code></td><td><code>"card" | "inline" | "slide"</code></td><td><code>"card"</code></td><td>Framed card with a teaser, frameless block, or full-height panel.</td></tr>
      <tr><td><code>title</code></td><td><code>string</code></td><td><code>"Log in to see more"</code></td><td>Heading, rendered as <code>&lt;h4 class="guest-gate-title"&gt;</code>.</td></tr>
      <tr><td><code>description</code></td><td><code>string</code></td><td><code>"Join the community to stay updated, interact, and connect."</code></td><td>Supporting text.</td></tr>
      <tr><td><code>buttonText</code></td><td><code>string</code></td><td><code>"Log in"</code></td><td>Login button text (shown after a login icon).</td></tr>
      <tr><td><code>loginUrl</code></td><td><code>string</code></td><td>—</td><td>Full login URL; overrides <code>loginPath</code>, <code>redirectParam</code> and <code>redirectTo</code>.</td></tr>
      <tr><td><code>loginPath</code></td><td><code>string</code></td><td><code>"/login"</code></td><td>Base login path when there is no <code>loginUrl</code>.</td></tr>
      <tr><td><code>redirectTo</code></td><td><code>string</code></td><td>—</td><td>Appended to <code>loginPath</code> as <code>?{redirectParam}={redirectTo}</code> (URL-encoded; <code>&amp;</code> when the path already has a query).</td></tr>
      <tr><td><code>redirectParam</code></td><td><code>string</code></td><td><code>"redirect"</code></td><td>Query parameter that carries <code>redirectTo</code>, for example <code>"next"</code> or <code>"returnTo"</code>.</td></tr>
      <tr><td><code>secondaryText</code></td><td><code>string</code></td><td>—</td><td>Adds a plain second button.</td></tr>
      <tr><td><code>secondaryUrl</code></td><td><code>string</code></td><td><code>"/register"</code></td><td>Link of the second button.</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td>Lock icon</td><td>Raw HTML inside <code>.guest-gate-icon</code>.</td></tr>
      <tr><td><code>showTeaserSkeleton</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Card variant only: render the faded skeleton teaser.</td></tr>
      <tr><td><code>linkAttributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra attributes on both action links, the login button and the secondary button (SPA routers, tracking).</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the root.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra attributes on the root.</td></tr>
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
      <tr><td><code>.guest-gate</code></td><td>Root: centered column with centered text.</td></tr>
      <tr><td><code>.guest-gate-teaser</code></td><td>Skeleton preview above the card, faded out with a mask; ignores the pointer.</td></tr>
      <tr><td><code>.guest-gate-card</code></td><td>Framed surface card up to 30rem wide with a subtle border; its buttons share the row (up to 18rem each).</td></tr>
      <tr><td><code>.guest-gate-icon</code></td><td>Round, primary-tinted icon tile.</td></tr>
      <tr><td><code>.guest-gate-title</code></td><td>1.125rem semibold heading.</td></tr>
      <tr><td><code>.guest-gate-text</code></td><td>Muted supporting text, up to 26rem wide.</td></tr>
      <tr><td><code>.guest-gate-actions</code></td><td>Centered, wrapping row of buttons.</td></tr>
      <tr><td><code>.guest-gate-inline</code></td><td>Frameless variant: <code>1.5rem</code> vertical padding.</td></tr>
      <tr><td><code>.guest-gate-slide</code></td><td>Full-height panel (<code>min-height: min(70vh, 36rem)</code>) with a larger icon and title.</td></tr>
    </tbody>
  </table>
</div>
::end
