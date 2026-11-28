# Auth Prompt

The auth prompt is a compact, centered modal that asks signed-out visitors to log in or create an account. Show it when someone tries an action that needs an account (liking, following, commenting, saving, voting) instead of sending them away from the page. Both buttons carry a redirect back to the current page by default, so people land where they started after signing in.

::html
<div class="docs-preview">
  <div class="card max-w-[30rem] w-full">
    <div class="card-body vstack gap-3">
      <div class="hstack gap-3">
        <span class="avatar avatar-sm avatar-primary rounded-full"><span class="avatar-initials">MC</span></span>
        <div class="flex-1">
          <div class="fw-semibold text-sm">Maya Chen</div>
          <div class="text-xs text-subtle">Product designer · London</div>
        </div>
        <button class="btn btn-soft-primary btn-sm" type="button" data-modal="#authPromptDemo"><span class="mdi mdi-account-plus-outline"></span> Follow</button>
      </div>
      <p class="m-0 text-sm">We cut our checkout from five steps to two. Here is everything we tested along the way, including the ideas that failed.</p>
      <div class="hstack gap-2">
        <button class="btn btn-ghost btn-sm" type="button" data-modal="#authPromptDemo"><span class="mdi mdi-heart-outline"></span> 1.2k</button>
        <button class="btn btn-ghost btn-sm" type="button" data-modal="#authPromptDemo"><span class="mdi mdi-comment-outline"></span> 86</button>
        <button class="btn btn-ghost btn-sm ms-auto" type="button" data-modal="#authPromptDemo" aria-label="Save"><span class="mdi mdi-bookmark-outline"></span></button>
      </div>
    </div>
  </div>
  <div class="modal auth-modal" id="authPromptDemo" tabindex="-1" aria-hidden="true" aria-labelledby="authPromptDemo-title" data-modal-draggable="false">
  <div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
  <div class="auth-modal-body">
  <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
  <div class="auth-modal-logo" aria-hidden="true"><span class="mdi mdi-account-circle-outline"></span></div>
  <h3 id="authPromptDemo-title" class="auth-modal-title">Don&#39;t miss what&#39;s happening</h3>
  <p class="auth-modal-text">People on this platform are the first to know.</p>
  <div class="auth-modal-actions">
  <a class="btn btn-primary rounded-pill w-100" href="/login?redirect=%2Fposts%2F4821">Log in</a>
  <a class="btn btn-plain rounded-pill w-100" href="/register?redirect=%2Fposts%2F4821">Sign up</a>
  </div>
  </div>
  </div>
  </div>
  </div>
</div>
::end

```html
<button class="btn btn-soft-primary btn-sm" type="button" data-modal="#authPromptModal">Follow</button>

<div
  class="modal auth-modal"
  id="authPromptModal"
  tabindex="-1"
  aria-hidden="true"
  aria-labelledby="authPromptModal-title"
  data-modal-draggable="false"
>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="auth-modal-body">
        <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
        <div class="auth-modal-logo" aria-hidden="true"><span class="mdi mdi-account-circle-outline"></span></div>
        <h3 id="authPromptModal-title" class="auth-modal-title">Don't miss what's happening</h3>
        <p class="auth-modal-text">People on this platform are the first to know.</p>
        <div class="auth-modal-actions">
          <a class="btn btn-primary rounded-pill w-100" href="/login?redirect=%2Fposts%2F4821">Log in</a>
          <a class="btn btn-plain rounded-pill w-100" href="/register?redirect=%2Fposts%2F4821">Sign up</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

```js components
import { AuthPromptModal } from "@abydahana/aksara-ui/components";

// Render once per page for signed-out visitors
AuthPromptModal({ redirect: "/posts/4821" });
```

The prompt uses the regular modal layer (`z-index: 1050`), above page content, sticky headers and offcanvas panels, and renders no inline `style`. A [media viewer](#/components/media-viewer) sits one layer higher (`1060`), so when the prompt can open on top of one (a like button inside the viewer, for example), pass `zIndex: 1070`. Only then does the modal get an inline `style="z-index: 1070;"`.

```js
AuthPromptModal({ id: "viewerAuthPrompt", zIndex: 1070 }); // above an open media viewer
```

---

## When to Use It

- **Gated actions.** Like, follow, comment, bookmark, vote, report: let visitors read freely and ask for an account only at the moment they act.
- **Keep the context.** The page stays behind the dialog and the redirect brings people back, so nobody loses their place in a long thread or a feed.
- **Not for whole pages.** When the content itself is members-only, use a [Guest Gate](#/components/guest-gate) in the page flow instead. Use a real sign-in form, not this prompt, when you want people to enter credentials right away.

---

## Opening the Prompt

Any element with `data-modal="#authPromptModal"` opens it, which is the simplest option when you already know on the server that the visitor is signed out: render the buttons with `data-modal` for guests and with their real actions for members.

When the same button serves both, guard the action in JavaScript and open the prompt with `Aksara.modal("#authPromptModal").show()`:

::html
<div class="docs-preview">
  <div class="card max-w-[30rem] w-full">
    <div class="card-body hstack gap-3">
      <span class="avatar avatar-md avatar-info rounded-full"><span class="avatar-initials">DK</span></span>
      <div class="flex-1">
        <div class="fw-semibold">Daniel Kim</div>
        <div class="text-sm text-subtle">Street photography · New York · 18.4k followers</div>
      </div>
      <button class="btn btn-primary btn-sm" type="button" onclick="Aksara.modal('#authPromptDemo').show()">Follow</button>
    </div>
  </div>
</div>
::end

```html
<button class="btn btn-primary btn-sm" type="button" data-follow="daniel-kim">Follow</button>
```

```js
const session = window.APP_SESSION; // { user: null } for visitors

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-follow]");
  if (!button) return;

  if (!session.user) {
    Aksara.modal("#authPromptModal").show();
    return;
  }
  follow(button.dataset.follow);
});
```

### Contextual titles

One prompt can serve every action. Change its title and text right before opening it so the message matches what the visitor tried to do:

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-soft-danger" type="button" onclick="document.querySelector('#authPromptContext-title').textContent = 'Like this post?'; document.querySelector('#authPromptContext .auth-modal-text').textContent = 'Log in to like posts and let Maya know you enjoyed it.'; Aksara.modal('#authPromptContext').show()"><span class="mdi mdi-heart-outline"></span> Like</button>
    <button class="btn btn-soft-primary" type="button" onclick="document.querySelector('#authPromptContext-title').textContent = 'Join the conversation'; document.querySelector('#authPromptContext .auth-modal-text').textContent = 'Log in to reply to Maya and 86 others.'; Aksara.modal('#authPromptContext').show()"><span class="mdi mdi-comment-outline"></span> Comment</button>
    <button class="btn btn-soft-secondary" type="button" onclick="document.querySelector('#authPromptContext-title').textContent = 'Save it for later'; document.querySelector('#authPromptContext .auth-modal-text').textContent = 'Log in to build collections you can read on any device.'; Aksara.modal('#authPromptContext').show()"><span class="mdi mdi-bookmark-outline"></span> Save</button>
  </div>
  <div class="modal auth-modal" id="authPromptContext" tabindex="-1" aria-hidden="true" aria-labelledby="authPromptContext-title" data-modal-draggable="false">
  <div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
  <div class="auth-modal-body">
  <button class="modal-close btn-close" type="button" data-modal-close aria-label="Close"></button>
  <div class="auth-modal-logo" aria-hidden="true"><span class="mdi mdi-heart-outline"></span></div>
  <h3 id="authPromptContext-title" class="auth-modal-title">Don&#39;t miss what&#39;s happening</h3>
  <p class="auth-modal-text">People on this platform are the first to know.</p>
  <div class="auth-modal-actions">
  <a class="btn btn-primary rounded-pill w-100" href="/login?redirect=%2Fposts%2F4821">Log in</a>
  <a class="btn btn-plain rounded-pill w-100" href="/register?redirect=%2Fposts%2F4821">Sign up</a>
  </div>
  </div>
  </div>
  </div>
  </div>
</div>
::end

```js
const prompts = {
  like: ["Like this post?", "Log in to like posts and let Maya know you enjoyed it."],
  comment: ["Join the conversation", "Log in to reply to Maya and 86 others."],
  save: ["Save it for later", "Log in to build collections you can read on any device."]
};

function promptLogin(action) {
  const modal = document.querySelector("#authPromptModal");
  const [title, text] = prompts[action];
  modal.querySelector(".auth-modal-title").textContent = title;
  modal.querySelector(".auth-modal-text").textContent = text;
  Aksara.modal(modal).show();
}
```

---

## Login and Register URLs

By default the buttons link to `/login` and `/register` with a `redirect` query parameter. Change each part separately, or pass full URLs:

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Props</th><th>Log in link</th></tr>
    </thead>
    <tbody>
      <tr><td><em>none</em> (browser on <code>/posts/4821</code>)</td><td><code>/login?redirect=%2Fposts%2F4821</code></td></tr>
      <tr><td><em>none</em> (server-side render)</td><td><code>/login</code>: there is no <code>window</code>, so pass <code>redirect</code> yourself.</td></tr>
      <tr><td><code>redirect: "/pricing"</code></td><td><code>/login?redirect=%2Fpricing</code></td></tr>
      <tr><td><code>redirectParam: "next"</code></td><td><code>/login?next=%2Fposts%2F4821</code></td></tr>
      <tr><td><code>redirectParam: ""</code></td><td><code>/login</code> (no redirect at all)</td></tr>
      <tr><td><code>loginPath: "/auth/sign-in?source=prompt"</code></td><td><code>/auth/sign-in?source=prompt&amp;redirect=%2Fposts%2F4821</code> (an existing query string is kept)</td></tr>
      <tr><td><code>loginUrl: "https://accounts.example.com/login"</code></td><td>Used as is; <code>loginPath</code>, <code>redirect</code> and <code>redirectParam</code> are ignored for this link.</td></tr>
    </tbody>
  </table>
</div>
::end

`registerPath` and `registerUrl` work the same way for the second button. The redirect is the current `pathname` only; pass `redirect` explicitly to keep a query string or hash (`redirect: location.pathname + location.search`).

```js components
import { AuthPromptModal } from "@abydahana/aksara-ui/components";

// Your own routes and parameter name
AuthPromptModal({
  loginPath: "/auth/sign-in",
  registerPath: "/auth/sign-up",
  redirectParam: "next",
  redirect: "/checkout?plan=pro"
});
// → /auth/sign-in?next=%2Fcheckout%3Fplan%3Dpro

// A hosted identity provider
AuthPromptModal({
  loginUrl: "https://accounts.example.com/login?client=web",
  registerUrl: "https://accounts.example.com/signup?client=web"
});
```

---

## Custom Logo and Text

Replace the default account icon with your own mark through `logoHtml` (raw HTML, rendered inside `.auth-modal-logo`), and change every string: `title`, `description`, `loginText`, `registerText` and the close button's `closeLabel`.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-primary" type="button" data-modal="#authPromptCustom">Open branded prompt</button>
  </div>
  <div class="modal auth-modal" id="authPromptCustom" tabindex="-1" aria-hidden="true" aria-labelledby="authPromptCustom-title" data-modal-draggable="false">
  <div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
  <div class="auth-modal-body">
  <button class="modal-close btn-close" type="button" data-modal-close aria-label="Not now"></button>
  <div class="auth-modal-logo" aria-hidden="true"><span class="mdi mdi-hexagon-multiple-outline text-primary"></span></div>
  <h3 id="authPromptCustom-title" class="auth-modal-title">Like what you see?</h3>
  <p class="auth-modal-text">Create a free account to follow creators, save posts and get a weekly digest.</p>
  <div class="auth-modal-actions">
  <a class="btn btn-primary rounded-pill w-100" href="/auth/sign-in?next=%2Fposts%2F4821">Sign in</a>
  <a class="btn btn-plain rounded-pill w-100" href="/auth/sign-up?next=%2Fposts%2F4821">Create a free account</a>
  </div>
  </div>
  </div>
  </div>
  </div>
</div>
::end

```html
<div class="auth-modal-logo" aria-hidden="true">
  <span class="mdi mdi-hexagon-multiple-outline text-primary"></span>
</div>
<h3 id="authPromptCustom-title" class="auth-modal-title">Like what you see?</h3>
<p class="auth-modal-text">Create a free account to follow creators, save posts and get a weekly digest.</p>
<div class="auth-modal-actions">
  <a class="btn btn-primary rounded-pill w-100" href="/auth/sign-in?next=%2Fposts%2F4821">Sign in</a>
  <a class="btn btn-plain rounded-pill w-100" href="/auth/sign-up?next=%2Fposts%2F4821">Create a free account</a>
</div>
```

```js components
import { AuthPromptModal } from "@abydahana/aksara-ui/components";

AuthPromptModal({
  id: "authPromptCustom",
  logoHtml: '<span class="mdi mdi-hexagon-multiple-outline text-primary"></span>',
  title: "Like what you see?",
  description: "Create a free account to follow creators, save posts and get a weekly digest.",
  loginText: "Sign in",
  registerText: "Create a free account",
  closeLabel: "Not now",
  loginPath: "/auth/sign-in",
  registerPath: "/auth/sign-up",
  redirectParam: "next",
  redirect: "/posts/4821"
});
```

`logoHtml` can be an `<img>` or an inline SVG of your brand as well. It is not escaped, so only pass markup you control.

---

## SPA Routers

`linkAttributes` adds the same attributes to both links. Use it for the attribute your client-side router looks for, or for analytics hooks:

```js components
import { AuthPromptModal } from "@abydahana/aksara-ui/components";

AuthPromptModal({
  linkAttributes: { "data-link": "", "data-track": "auth-prompt" }
});
// <a class="btn btn-primary rounded-pill w-100" href="/login?redirect=…" data-link="" data-track="auth-prompt">Log in</a>
```

Close the prompt when your router navigates, because the page behind it changes:

```js
router.on("navigate", () => Aksara.modal("#authPromptModal").hide());
```

---

## Accessibility

- The dialog is labelled by its title (`aria-labelledby="{id}-title"`), and the decorative logo is `aria-hidden`.
- It is a regular Aksara modal: focus moves into it and is trapped while it is open, Escape or a backdrop click closes it, and focus returns to the button that opened it.
- Both actions are real links, so they work with a middle click, open in a new tab and are announced as links.
- Write the title as the reason for the prompt ("Like this post?") rather than a generic "Log in", so people understand why it appeared.

---

## JavaScript

The prompt is a regular `.modal`, so the modal data API and JavaScript API apply; it adds no behavior of its own.

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>API</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-modal="#authPromptModal"</code></td><td>On any element: opens the prompt on click.</td></tr>
      <tr><td><code>data-modal-close</code></td><td>On the close button (already rendered).</td></tr>
      <tr><td><code>Aksara.modal("#authPromptModal").show()</code> / <code>.hide()</code></td><td>Open or close from code, for example after a guarded action.</td></tr>
      <tr><td><code>aksara:modal:show</code>, <code>aksara:modal:hide</code></td><td>Dispatched on the modal when it opens and closes; <code>event.detail</code> is <code>{ instance }</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

```js
document.querySelector("#authPromptModal").addEventListener("aksara:modal:show", () => {
  analytics.track("auth_prompt_shown", { path: location.pathname });
});
```

---

## String Component

`AuthPromptModal` renders the complete modal (aliases: `AuthModal`, `authModal`, `authPromptModal`). All props are optional. Text props are escaped, URLs pass the library's URL filter, and `logoHtml` is raw HTML.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>id</code></td><td><code>string</code></td><td><code>"authPromptModal"</code></td><td>Modal id; the title gets <code>{id}-title</code>.</td></tr>
      <tr><td><code>title</code></td><td><code>string</code></td><td><code>"Don't miss what's happening"</code></td><td>Heading.</td></tr>
      <tr><td><code>description</code></td><td><code>string</code></td><td><code>"People on this platform are the first to know."</code></td><td>Supporting text.</td></tr>
      <tr><td><code>loginText</code></td><td><code>string</code></td><td><code>"Log in"</code></td><td>Primary button text.</td></tr>
      <tr><td><code>registerText</code></td><td><code>string</code></td><td><code>"Sign up"</code></td><td>Secondary button text.</td></tr>
      <tr><td><code>loginUrl</code></td><td><code>string</code></td><td>—</td><td>Full login URL; overrides <code>loginPath</code> and the redirect.</td></tr>
      <tr><td><code>registerUrl</code></td><td><code>string</code></td><td>—</td><td>Full register URL; overrides <code>registerPath</code> and the redirect.</td></tr>
      <tr><td><code>loginPath</code></td><td><code>string</code></td><td><code>"/login"</code></td><td>Base login path used with the redirect.</td></tr>
      <tr><td><code>registerPath</code></td><td><code>string</code></td><td><code>"/register"</code></td><td>Base register path used with the redirect.</td></tr>
      <tr><td><code>redirect</code></td><td><code>string</code></td><td><code>location.pathname</code> in the browser</td><td>Where to send people after signing in. Nothing during server-side rendering.</td></tr>
      <tr><td><code>redirectParam</code></td><td><code>string</code></td><td><code>"redirect"</code></td><td>Query parameter for the redirect; <code>""</code> omits it.</td></tr>
      <tr><td><code>linkAttributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra attributes on both links (SPA routers, tracking).</td></tr>
      <tr><td><code>logoHtml</code></td><td><code>string</code></td><td>Account icon</td><td>Raw HTML inside <code>.auth-modal-logo</code>.</td></tr>
      <tr><td><code>closeLabel</code></td><td><code>string</code></td><td><code>"Close"</code></td><td><code>aria-label</code> of the close button.</td></tr>
      <tr><td><code>zIndex</code></td><td><code>number</code></td><td>—</td><td>Inline <code>z-index</code> of the modal, only rendered when set (integers only). Without it the modal stays on the default modal layer (<code>1050</code>).</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on <code>.modal.auth-modal</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra attributes on the modal (they override the defaults, including <code>style</code>).</td></tr>
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
      <tr><td><code>.auth-modal</code></td><td>On the <code>.modal</code>: limits the dialog to 24rem.</td></tr>
      <tr><td><code>.auth-modal-body</code></td><td>Centered column with generous padding; positions the close button in the top end corner.</td></tr>
      <tr><td><code>.auth-modal-logo</code></td><td>Round tinted tile for the logo or icon.</td></tr>
      <tr><td><code>.auth-modal-title</code></td><td>Bold 1.25rem heading.</td></tr>
      <tr><td><code>.auth-modal-text</code></td><td>Muted supporting text, up to 18rem wide.</td></tr>
      <tr><td><code>.auth-modal-actions</code></td><td>Full-width stack of the two buttons.</td></tr>
    </tbody>
  </table>
</div>
::end
