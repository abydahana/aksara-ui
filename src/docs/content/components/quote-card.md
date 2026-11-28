# Quote Card

A quote card embeds one post inside another: a reshare in a feed, a quoted reply, or the preview of the post you are quoting in a composer. It is a bordered block with the author row (avatar, name, verified mark, handle and time), an optional category badge, the quoted text and up to four media items laid out by the [Media Grid](#/components/media-grid). The composer variant gets a tinted background and a remove button.

::html
<div class="docs-preview">
  <div class="quote-card max-w-[34rem]">
    <div class="quote-header">
      <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">MC</span></span>
      <div class="quote-author-info">
        <div class="quote-author-name"><span>Maya Chen</span><span class="mdi mdi-check-decagram text-primary" title="Verified"></span></div>
        <div class="quote-author-meta"><span>@mayachen</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-28T09:00:00Z">2h</time></div>
      </div>
    </div>
    <div class="quote-body">We moved our billing pipeline to usage-based pricing last quarter. Churn on the Starter plan dropped by 18%, and nobody on the team misses the old seat calculator.</div>
  </div>
</div>
::end

```html
<div class="quote-card">
  <div class="quote-header">
    <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"
      ><span class="avatar-initials">MC</span></span
    >
    <div class="quote-author-info">
      <div class="quote-author-name">
        <span>Maya Chen</span><span class="mdi mdi-check-decagram text-primary" title="Verified"></span>
      </div>
      <div class="quote-author-meta">
        <span>@mayachen</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-28T09:00:00Z">2h</time>
      </div>
    </div>
  </div>
  <div class="quote-body">We moved our billing pipeline to usage-based pricing last quarter.</div>
</div>
```

```js components
import { QuoteCard } from "@abydahana/aksara-ui/components";

QuoteCard({
  author: { name: "Maya Chen", handle: "@mayachen", verified: true },
  content: "We moved our billing pipeline to usage-based pricing last quarter.",
  timeAgo: "2h",
  timestamp: "2026-11-28T09:00:00Z"
});
```

---

## Anatomy

Every part except the header is optional. The header is a single flex row, so the author block shrinks and truncates before the actions do.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Part</th><th>Markup</th><th>Notes</th></tr>
    </thead>
    <tbody>
      <tr><td>Root</td><td><code>.quote-card</code></td><td>Bordered column with a <code>.625rem</code> gap. Add <code>.quote-preview</code> for the composer look.</td></tr>
      <tr><td>Header</td><td><code>.quote-header</code></td><td>Avatar, author info and actions in one row.</td></tr>
      <tr><td>Avatar</td><td><code>.avatar.avatar-md</code></td><td><code>.quote-avatar</code> keeps it from shrinking. A photo, or up to two initials: the given <code>initials</code>, else the first letters of the first two words of the name.</td></tr>
      <tr><td>Name</td><td><code>.quote-author-name &gt; span</code></td><td>Truncates with an ellipsis. A verified icon can follow the name span.</td></tr>
      <tr><td>Meta</td><td><code>.quote-author-meta</code></td><td>Handle, a middle dot and a <code>&lt;time&gt;</code>. The handle truncates first.</td></tr>
      <tr><td>Actions</td><td><code>.quote-actions</code></td><td>Pushed to the end of the row: a category badge, a remove button or both.</td></tr>
      <tr><td>Body</td><td><code>.quote-body</code></td><td>Keeps line breaks (<code>white-space: pre-line</code>) and breaks long words and URLs.</td></tr>
      <tr><td>Media</td><td><code>.quote-media</code></td><td>Rounded wrapper around a <code>.media-grid</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Inside A Feed Post

The most common use: a post that reshares another post with a comment. The quote card sits between the post text and the reaction bar. On hover its border darkens; make it clickable with the snippet in Clickable Quote below.

::html
<div class="docs-preview [background:var(--aksara-bg-body-secondary)]">
  <div class="card max-w-[34rem]">
    <div class="card-body">
      <div class="hstack gap-3">
        <span class="avatar avatar-md rounded-full avatar-success shrink-0" aria-hidden="true">DK</span>
        <div class="min-w-0">
          <div class="fw-semibold text-sm">Daniel Kim</div>
          <div class="text-subtle text-xs">@danielkim · 35m</div>
        </div>
        <button type="button" class="btn btn-ghost btn-sm btn-icon ms-auto" aria-label="More options"><span class="mdi mdi-dots-horizontal"></span></button>
      </div>
      <p class="text-sm mt-3 mb-3">This matches what we saw at our Manchester office. Usage-based pricing is worth the migration pain.</p>
      <div class="quote-card">
        <div class="quote-header">
          <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">MC</span></span>
          <div class="quote-author-info">
            <div class="quote-author-name"><span>Maya Chen</span><span class="mdi mdi-check-decagram text-primary" title="Verified"></span></div>
            <div class="quote-author-meta"><span>@mayachen</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-28T09:00:00Z">2h</time></div>
          </div>
        </div>
        <div class="quote-body">We moved our billing pipeline to usage-based pricing last quarter. Churn on the Starter plan dropped by 18%.</div>
      </div>
      <div class="hstack gap-1 mt-3">
        <button type="button" class="btn btn-ghost btn-sm"><span class="mdi mdi-heart-outline"></span> 42</button>
        <button type="button" class="btn btn-ghost btn-sm"><span class="mdi mdi-comment-outline"></span> 6</button>
        <button type="button" class="btn btn-ghost btn-sm ms-auto"><span class="mdi mdi-share-variant-outline"></span> Share</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-body">
    <!-- post author row -->
    <p class="text-sm mt-3 mb-3">This matches what we saw at our Manchester office.</p>
    <div class="quote-card">
      <div class="quote-header">…</div>
      <div class="quote-body">We moved our billing pipeline to usage-based pricing last quarter.</div>
    </div>
    <!-- reactions row -->
  </div>
</div>
```

```js components
import { Card, CardBody, QuoteCard } from "@abydahana/aksara-ui/components";

Card({
  children: CardBody({
    children: `
      <!-- post author row -->
      <p class="text-sm mt-3 mb-3">This matches what we saw at our Manchester office.</p>
      ${QuoteCard({
        author: { name: "Maya Chen", handle: "@mayachen", verified: true },
        content: "We moved our billing pipeline to usage-based pricing last quarter.",
        timeAgo: "2h"
      })}
      <!-- reactions row -->
    `
  })
});
```

---

## With Media

Pass image URLs (or `{ src, alt }` objects) in `media` and the card renders them with `MediaGrid` inside `.quote-media`: one item full width, two side by side, three with a tall lead image, four in a 2×2 square, and a `+N` overlay on the fourth cell when there are more. The previews on this page use gradient blocks in place of photos.

::html
<div class="docs-preview">
  <div class="vstack gap-4 max-w-[34rem]">
    <div class="quote-card">
      <div class="quote-header">
        <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">SP</span></span>
        <div class="quote-author-info">
          <div class="quote-author-name"><span>Sofia Patel</span></div>
          <div class="quote-author-meta"><span>@sofiapatel</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-27T16:20:00Z">Yesterday</time></div>
        </div>
      </div>
      <div class="quote-body">First look at the new dashboard theme. Dark mode ships next week.</div>
      <div class="quote-media">
        <div class="media-grid media-grid-2 gap-2 rounded-[12px] overflow-hidden">
          <div class="media-grid-item media-grid-item-1"><div class="w-full h-full [background:linear-gradient(135deg,#c7d2fe,#6366f1_60%,#312e81)]" role="img" aria-label="Dashboard in light mode"></div></div>
          <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(135deg,#334155,#0f172a)]" role="img" aria-label="Dashboard in dark mode"></div></div>
        </div>
      </div>
    </div>
    <div class="quote-card">
      <div class="quote-header">
        <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">GL</span></span>
        <div class="quote-author-info">
          <div class="quote-author-name"><span>Grace Lee</span></div>
          <div class="quote-author-meta"><span>@gracelee</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-26T11:00:00Z">2d</time></div>
        </div>
      </div>
      <div class="quote-body">Team offsite in London. Six workshops, one very long whiteboard.</div>
      <div class="quote-media">
        <div class="media-grid media-grid-4 gap-2 rounded-[12px] overflow-hidden">
          <div class="media-grid-item media-grid-item-1"><div class="w-full h-full [background:linear-gradient(150deg,#d6e2e9,#5d7f95)]" role="img" aria-label="Meeting room"></div></div>
          <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(160deg,#f6d7b0,#c8794a)]" role="img" aria-label="Whiteboard"></div></div>
          <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(140deg,#cfe3c6,#4f7d4a)]" role="img" aria-label="Rooftop terrace"></div></div>
          <div class="media-grid-item has-overlay">
            <div class="w-full h-full [background:linear-gradient(135deg,#e8d5f0,#7a5c99)]" role="img" aria-label="Team dinner"></div>
            <div class="media-grid-overlay"><span class="media-grid-overlay-text fw-bold text-2xl text-[#fff]">+3</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="quote-card">
  <div class="quote-header">…</div>
  <div class="quote-body">First look at the new dashboard theme. Dark mode ships next week.</div>
  <div class="quote-media">
    <div class="media-grid media-grid-2 gap-2 rounded-[12px] overflow-hidden">
      <div class="media-grid-item media-grid-item-1"><img src="light.png" alt="Dashboard in light mode" /></div>
      <div class="media-grid-item"><img src="dark.png" alt="Dashboard in dark mode" /></div>
    </div>
  </div>
</div>
```

```js components
import { QuoteCard } from "@abydahana/aksara-ui/components";

QuoteCard({
  author: { name: "Sofia Patel", handle: "@sofiapatel" },
  content: "First look at the new dashboard theme. Dark mode ships next week.",
  timeAgo: "Yesterday",
  media: [
    { src: "/uploads/light.png", alt: "Dashboard in light mode" },
    { src: "/uploads/dark.png", alt: "Dashboard in dark mode" }
  ]
});

// Seven items: four cells, the last one shows "+3".
QuoteCard({
  author: { name: "Grace Lee", handle: "@gracelee" },
  content: "Team offsite in London. Six workshops, one very long whiteboard.",
  timeAgo: "2d",
  media: offsitePhotos
});
```

Each `{ src, alt }` object passes its `alt` to the grid item. Plain URL strings get the generic `alt="Media item 1"`, `"Media item 2"`…, so use objects whenever the images carry meaning. Strings and objects can be mixed in one array.

### Filtering Media

`mediaFilter` decides which URLs are rendered (it receives the `src` of object entries). The default drops empty strings and URLs that end in `/` (a bare upload directory left by a failed upload). Pass your own to allow only a CDN, for example.

```js
QuoteCard({
  author: { name: "Alex Morgan", handle: "@alexmorgan" },
  content: "Release notes are up.",
  media: post.attachments,
  mediaFilter: (url) => url.startsWith("https://cdn.example.com/") && !url.endsWith("/")
});
```

---

## Category Badge

`category` adds a soft pill badge to the end of the header: a topic, a channel or the type of post. `variant` takes any badge color (default `secondary`) and `icon` an MDI class.

::html
<div class="docs-preview">
  <div class="vstack gap-3 max-w-[34rem]">
    <div class="quote-card">
      <div class="quote-header">
        <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">AM</span></span>
        <div class="quote-author-info">
          <div class="quote-author-name"><span>Alex Morgan</span></div>
          <div class="quote-author-meta"><span>@alexmorgan</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-28T08:10:00Z">3h</time></div>
        </div>
        <div class="quote-actions"><span class="badge badge-soft-primary rounded-pill"><span class="mdi mdi-rocket-launch-outline"></span> Release</span></div>
      </div>
      <div class="quote-body">Version 2.4 is live: SSO for every plan, audit log export and a faster search.</div>
    </div>
    <div class="quote-card">
      <div class="quote-header">
        <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">DK</span></span>
        <div class="quote-author-info">
          <div class="quote-author-name"><span>Daniel Kim</span></div>
          <div class="quote-author-meta"><span>@danielkim</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-28T07:45:00Z">4h</time></div>
        </div>
        <div class="quote-actions"><span class="badge badge-soft-danger rounded-pill"><span class="mdi mdi-alert-circle-outline"></span> Incident</span></div>
      </div>
      <div class="quote-body">EU checkout latency is back to normal. Root cause: an expired cache certificate in the New York region.</div>
    </div>
    <div class="quote-card">
      <div class="quote-header">
        <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">GL</span></span>
        <div class="quote-author-info">
          <div class="quote-author-name"><span>Grace Lee</span></div>
          <div class="quote-author-meta"><span>@gracelee</span></div>
        </div>
        <div class="quote-actions"><span class="badge badge-soft-secondary rounded-pill">Question</span></div>
      </div>
      <div class="quote-body">Does anyone have a template for quarterly business reviews?</div>
    </div>
  </div>
</div>
::end

```html
<div class="quote-header">
  …
  <div class="quote-actions">
    <span class="badge badge-soft-primary rounded-pill"
      ><span class="mdi mdi-rocket-launch-outline"></span> Release</span
    >
  </div>
</div>
```

```js components
import { QuoteCard } from "@abydahana/aksara-ui/components";

QuoteCard({
  author: { name: "Alex Morgan", handle: "@alexmorgan" },
  content: "Version 2.4 is live: SSO for every plan, audit log export and a faster search.",
  timeAgo: "3h",
  category: { label: "Release", icon: "mdi-rocket-launch-outline", variant: "primary" }
});

QuoteCard({
  author: { name: "Grace Lee", handle: "@gracelee" },
  content: "Does anyone have a template for quarterly business reviews?",
  category: { label: "Question" } // secondary by default
});
```

---

## Verified Author

`author.verified` adds a primary `mdi-check-decagram` after the name, with a "Verified" tooltip. Long names truncate with an ellipsis while the icon keeps its full size.

::html
<div class="docs-preview">
  <div class="quote-card max-w-[22rem]">
    <div class="quote-header">
      <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">AD</span></span>
      <div class="quote-author-info">
        <div class="quote-author-name"><span>Aksara Design Systems Team London</span><span class="mdi mdi-check-decagram text-primary" title="Verified"></span></div>
        <div class="quote-author-meta"><span>@aksaradesignsystemslondon</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-25T10:00:00Z">Nov 25</time></div>
      </div>
    </div>
    <div class="quote-body">New tokens for spacing and radius are in the changelog.</div>
  </div>
</div>
::end

```html
<div class="quote-author-name">
  <span>Aksara Design Systems Team London</span>
  <span class="mdi mdi-check-decagram text-primary" title="Verified"></span>
</div>
```

```js components
import { QuoteCard } from "@abydahana/aksara-ui/components";

QuoteCard({
  author: { name: "Aksara Design Systems Team London", handle: "@aksaradesignsystemslondon", verified: true },
  content: "New tokens for spacing and radius are in the changelog.",
  timeAgo: "Nov 25",
  timestamp: "2026-11-25T10:00:00Z"
});
```

---

## Composer Preview

In a "quote post" composer, show the quoted post with `isPreview: true`. It adds `.quote-preview` (subtle background, no hover border) and, unless you set `showRemoveBtn: false`, a close button with `data-quote-card-remove`. `onRemoveTitle` sets its `title` and `aria-label`.

::html
<div class="docs-preview">
  <div class="card max-w-[34rem]">
    <div class="card-body vstack gap-3">
      <div class="hstack gap-3 items-start">
        <span class="avatar avatar-md rounded-full avatar-success shrink-0" aria-hidden="true">DK</span>
        <textarea class="form-control" rows="3" placeholder="Add a comment…" aria-label="Your comment">Worth reading before Monday's pricing review.</textarea>
      </div>
      <div class="quote-card quote-preview">
        <div class="quote-header">
          <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">MC</span></span>
          <div class="quote-author-info">
            <div class="quote-author-name"><span>Maya Chen</span><span class="mdi mdi-check-decagram text-primary" title="Verified"></span></div>
            <div class="quote-author-meta"><span>@mayachen</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-28T09:00:00Z">2h</time></div>
          </div>
          <div class="quote-actions"><button type="button" class="quote-card-remove btn-close" data-quote-card-remove title="Remove quoted post" aria-label="Remove quoted post"></button></div>
        </div>
        <div class="quote-body">We moved our billing pipeline to usage-based pricing last quarter. Churn on the Starter plan dropped by 18%.</div>
      </div>
      <div class="hstack gap-2 justify-between">
        <div class="hstack gap-1">
          <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Add image"><span class="mdi mdi-image-outline"></span></button>
          <button type="button" class="btn btn-ghost btn-sm btn-icon" aria-label="Add emoji"><span class="mdi mdi-emoticon-outline"></span></button>
        </div>
        <button type="button" class="btn btn-primary btn-sm">Post</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="quote-card quote-preview" data-quoted-id="8812">
  <div class="quote-header">
    …
    <div class="quote-actions">
      <button
        type="button"
        class="quote-card-remove btn-close"
        data-quote-card-remove
        title="Remove quoted post"
        aria-label="Remove quoted post"
      ></button>
    </div>
  </div>
  <div class="quote-body">We moved our billing pipeline to usage-based pricing last quarter.</div>
</div>

<script>
  // The runtime does not handle data-quote-card-remove: wire it once, for every composer.
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quote-card-remove]");
    if (!button) return;
    const card = button.closest(".quote-card");
    const composer = card.closest("form");
    composer?.querySelector("input[name=quoted_id]")?.remove(); // forget the quoted post
    card.remove();
    composer?.querySelector("textarea")?.focus(); // keep focus in the composer
  });
</script>
```

```js components
import { QuoteCard } from "@abydahana/aksara-ui/components";

QuoteCard({
  author: { name: "Maya Chen", handle: "@mayachen", verified: true },
  content: "We moved our billing pipeline to usage-based pricing last quarter.",
  timeAgo: "2h",
  isPreview: true, // also turns on showRemoveBtn
  onRemoveTitle: "Remove quoted post",
  interactiveAttributes: { "data-quoted-id": "8812" }
});

// A tinted preview without the remove button (for example, a read-only draft).
QuoteCard({ author: { name: "Maya Chen" }, content: "…", isPreview: true, showRemoveBtn: false });
```

The button is a `.btn-close` with `.quote-card-remove`, which keeps it from shrinking next to a long author name. Target `[data-quote-card-remove]` in scripts.

---

## Long Text

The body keeps line breaks from the source text and breaks long words, URLs and hashtags anywhere, so a quote never overflows the card. The name and handle truncate on one line.

::html
<div class="docs-preview">
  <div class="quote-card max-w-[24rem]">
    <div class="quote-header">
      <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">AM</span></span>
      <div class="quote-author-info">
        <div class="quote-author-name"><span>Alex Morgan</span></div>
        <div class="quote-author-meta"><span>@alexmorgan</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-28T06:30:00Z">5h</time></div>
      </div>
    </div>
    <div class="quote-body">Checklist for Friday's launch:
1. Freeze the release branch at noon
2. Run the migration on staging
3. Post in #launch-coordination-and-announcements-london

Full runbook: https://docs.example.com/runbooks/2026/november/launch-day-checklist-version-four</div>
  </div>
</div>
::end

```html
<!-- Newlines inside .quote-body are shown; don't indent its text. -->
<div class="quote-body">
  Checklist for Friday's launch: 1. Freeze the release branch at noon 2. Run the migration on staging
</div>
```

```js components
import { QuoteCard } from "@abydahana/aksara-ui/components";

QuoteCard({
  author: { name: "Alex Morgan", handle: "@alexmorgan" },
  content: "Checklist for Friday's launch:\n1. Freeze the release branch at noon\n2. Run the migration on staging",
  timeAgo: "5h"
});
```

---

## Custom Body

`content` is escaped and wrapped in `.quote-body`. To render HTML (mentions, links, your own media grid), leave `content` empty and pass `children`. `children` is inserted as is, without the `.quote-body` wrapper, so add it yourself. `children` is not escaped: only pass trusted or sanitized HTML.

::html
<div class="docs-preview">
  <div class="quote-card max-w-[34rem]">
    <div class="quote-header">
      <span class="avatar avatar-md rounded-full avatar-primary quote-avatar"><span class="avatar-initials">GL</span></span>
      <div class="quote-author-info">
        <div class="quote-author-name"><span>Grace Lee</span></div>
        <div class="quote-author-meta"><span>@gracelee</span><span aria-hidden="true">&middot;</span><time datetime="2026-11-28T05:00:00Z">6h</time></div>
      </div>
    </div>
    <div class="quote-body">Thanks <a href="#">@sofiapatel</a> for the onboarding redesign. Activation on the Team plan is up 12% week over week, and support tickets about invites dropped to almost zero. Full write-up in the product channel.</div>
  </div>
</div>
::end

```html
<div class="quote-body">Thanks <a href="/u/sofiapatel">@sofiapatel</a> for the onboarding redesign…</div>
```

```js components
import { QuoteCard } from "@abydahana/aksara-ui/components";

QuoteCard({
  author: { name: "Grace Lee", handle: "@gracelee" },
  timeAgo: "6h",
  children: `<div class="quote-body">Thanks <a href="/u/sofiapatel">@sofiapatel</a> for the onboarding redesign…</div>`
});
```

---

## Clickable Quote

`.quote-card[data-href]` and `.quote-card-link` get a pointer cursor; navigation is up to you. Put the target URL on the card with `interactiveAttributes` and handle the click, skipping clicks on links and buttons inside it.

```js
import { QuoteCard } from "@abydahana/aksara-ui/components";

QuoteCard({
  author: { name: "Maya Chen", handle: "@mayachen" },
  content: "We moved our billing pipeline to usage-based pricing.",
  interactiveAttributes: { "data-href": "/posts/8812", role: "link", tabindex: "0" }
});

document.addEventListener("click", (event) => {
  const card = event.target.closest(".quote-card[data-href]");
  if (!card || event.target.closest("a, button")) return;
  window.location.assign(card.dataset.href);
});
```

With `role="link"` and `tabindex="0"`, also open the post on <kbd>Enter</kbd> so keyboard users can reach it.

---

## JavaScript

The quote card is static markup. The runtime adds no behavior: neither the remove button nor `data-href` does anything until you wire it as shown above. Media cells come from `MediaGrid`, so they open a [media viewer](#/components/media-viewer) only when you render the grid yourself with its `viewer` option.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Hook</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>[data-quote-card-remove]</code></td><td>The remove button rendered with <code>showRemoveBtn</code> (default when <code>isPreview</code>). Listen for clicks and remove the closest <code>.quote-card</code>.</td></tr>
      <tr><td><code>.quote-card[data-href]</code></td><td>Pointer cursor only. Add the navigation yourself.</td></tr>
      <tr><td><code>interactiveAttributes</code></td><td>Puts your own data attributes (post id, URL) on the root. <code>on*</code> handlers are dropped.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## String Component

```ts
import { QuoteCard } from "@abydahana/aksara-ui/components";

QuoteCard({
  author: { name: "Maya Chen", handle: "mayachen", verified: true }, // renders "@mayachen" and "MC"
  content: "We moved our billing pipeline to usage-based pricing last quarter.",
  timeAgo: "2h",
  timestamp: "2026-11-28T09:00:00Z",
  category: { label: "Billing", icon: "mdi-credit-card-outline", variant: "info" },
  media: [{ src: "/uploads/chart.png", alt: "Monthly churn by plan" }]
});
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>QuoteCard prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>author</code></td><td><code>QuoteAuthor</code></td><td>—</td><td>Required. See the table below.</td></tr>
      <tr><td><code>content</code></td><td><code>string</code></td><td>—</td><td>Quoted text. Escaped and wrapped in <code>.quote-body</code>. Line breaks are kept.</td></tr>
      <tr><td><code>children</code></td><td><code>string</code></td><td>—</td><td>Raw HTML used instead of the body when <code>content</code> is empty. Not wrapped, not escaped.</td></tr>
      <tr><td><code>timeAgo</code></td><td><code>string</code></td><td>—</td><td>Text of the <code>&lt;time&gt;</code> element, for example <code>"2h"</code>.</td></tr>
      <tr><td><code>timestamp</code></td><td><code>string</code></td><td>—</td><td>Machine-readable <code>datetime</code> attribute. Shown as the text when <code>timeAgo</code> is missing.</td></tr>
      <tr><td><code>category</code></td><td><code>QuoteCategoryBadge</code></td><td>—</td><td>Soft pill badge in <code>.quote-actions</code>.</td></tr>
      <tr><td><code>media</code></td><td><code>Array&lt;string | { src: string; alt?: string }&gt;</code></td><td><code>[]</code></td><td>Image URLs, or objects with alt text, rendered by <code>MediaGrid</code> (four cells at most, then <code>+N</code>). Unsafe URLs are replaced.</td></tr>
      <tr><td><code>mediaFilter</code></td><td><code>(url: string) =&gt; boolean</code></td><td>drops URLs ending in <code>/</code></td><td>Keeps the URLs (the <code>src</code> of object entries) it returns <code>true</code> for. Empty values are always dropped.</td></tr>
      <tr><td><code>isPreview</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.quote-preview</code> for the composer look.</td></tr>
      <tr><td><code>showRemoveBtn</code></td><td><code>boolean</code></td><td><code>isPreview</code></td><td>Renders the <code>[data-quote-card-remove]</code> close button.</td></tr>
      <tr><td><code>onRemoveTitle</code></td><td><code>string</code></td><td><code>"Remove quote"</code></td><td><code>title</code> and <code>aria-label</code> of the remove button. Despite the name, not an event handler.</td></tr>
      <tr><td><code>interactiveAttributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra attributes on the root, merged before <code>attributes</code>. <code>on*</code> handlers are dropped.</td></tr>
      <tr><td><code>interactiveAttrs</code></td><td><code>string</code></td><td><code>""</code></td><td>Deprecated. A raw attribute string, parsed and escaped. Use <code>interactiveAttributes</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on <code>.quote-card</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes on the root.</td></tr>
    </tbody>
  </table>
</div>
::end

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>QuoteAuthor field</th><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>name</code></td><td><code>string</code></td><td>Required. Display name, also the avatar's <code>alt</code>.</td></tr>
      <tr><td><code>handle</code></td><td><code>string</code></td><td>Shown in the meta row, always with one leading <code>@</code>: <code>"mayachen"</code> and <code>"@mayachen"</code> both render <code>@mayachen</code>.</td></tr>
      <tr><td><code>photo</code></td><td><code>string</code></td><td>Avatar image URL. Without it the avatar shows initials.</td></tr>
      <tr><td><code>initials</code></td><td><code>string</code></td><td>Avatar initials, up to two characters, upper-cased. Without it, the first letters of the first two words of <code>name</code> are used (<code>"Maya Chen"</code> → <code>MC</code>).</td></tr>
      <tr><td><code>verified</code></td><td><code>boolean</code></td><td>Adds the verified icon after the name.</td></tr>
    </tbody>
  </table>
</div>
::end

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>QuoteCategoryBadge field</th><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>label</code></td><td><code>string</code></td><td>Required. Badge text.</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td>MDI class shown before the label, for example <code>"mdi-tag-outline"</code>.</td></tr>
      <tr><td><code>variant</code></td><td><code>BadgeVariant</code></td><td>Badge color. Default <code>"secondary"</code>.</td></tr>
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
      <tr><td><code>.quote-card</code></td><td>Root: flex column, <code>.625rem</code> gap, <code>1rem</code> padding, subtle border, large radius, surface background. The border darkens on hover (not in previews).</td></tr>
      <tr><td><code>.quote-preview</code></td><td>Composer variant: subtle background, no hover border.</td></tr>
      <tr><td><code>.quote-card-link</code></td><td>Pointer cursor for a card you make clickable. <code>.quote-card[data-href]</code> gets the same.</td></tr>
      <tr><td><code>.quote-header</code></td><td>Flex row, centered, <code>.625rem</code> gap.</td></tr>
      <tr><td><code>.quote-avatar</code></td><td>On the avatar: does not shrink.</td></tr>
      <tr><td><code>.quote-author-info</code></td><td>Flexible column that can shrink (<code>min-width: 0</code>).</td></tr>
      <tr><td><code>.quote-author-name</code></td><td>Semi-bold <code>.875rem</code> inline row. Its first <code>span</code> truncates; an icon (<code>.mdi</code>) after it never shrinks.</td></tr>
      <tr><td><code>.quote-author-meta</code></td><td>Subtle <code>.8125rem</code> row with a <code>.375rem</code> gap. Its first <code>span</code> (the handle) truncates.</td></tr>
      <tr><td><code>.quote-actions</code></td><td>Non-shrinking row at the end of the header (<code>margin-inline-start: auto</code>).</td></tr>
      <tr><td><code>.quote-card-remove</code></td><td>On the remove <code>.btn-close</code>: does not shrink.</td></tr>
      <tr><td><code>.quote-body</code></td><td><code>.9375rem</code> text, <code>1.55</code> line height, <code>white-space: pre-line</code>, <code>overflow-wrap: anywhere</code>.</td></tr>
      <tr><td><code>.quote-media</code></td><td>Rounded, clipped wrapper for the media grid.</td></tr>
    </tbody>
  </table>
</div>
::end
