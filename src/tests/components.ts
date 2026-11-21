import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import {
  Accordion,
  AccordionItem,
  Alert,
  AuthModal,
  Avatar,
  Breadcrumb,
  Button,
  Chip,
  DropdownItem,
  DropdownSelect,
  GuestGate,
  InputGroupText,
  ListGroupItem,
  MediaGrid,
  MediaPreviewModal,
  Modal,
  Navbar,
  NavLink,
  OptionPickerModal,
  Pagination,
  Progress,
  QuoteCard,
  SettingsGroup,
  SettingsItem,
  SidebarNav,
  SkeletonCircle,
  Toast,
  Tooltip,
  UserItem,
  UserPill,
  classNames,
  safeUrl,
  toAttributes
} from "../components/index";

const XSS = '"><script>alert(1)</script>';
const JS_URL = "javascript:alert(1)";

function assertNoScript(html: string, label: string): void {
  assert.ok(!html.includes("<script>"), `${label}: raw <script> leaked:\n${html}`);
  assert.ok(!html.includes('"><script'), `${label}: attribute breakout leaked:\n${html}`);
}

function assertNoJsUrl(html: string, label: string): void {
  assert.ok(!/javascript:/i.test(html), `${label}: javascript: URL leaked:\n${html}`);
}

function checkUtils(): void {
  // classNames is safe inside a double-quoted attribute and keeps normal tokens intact.
  assert.equal(
    classNames("btn", "w-[2.5rem]", "bg-primary/10", "md:px-[1.5rem]"),
    "btn w-[2.5rem] bg-primary/10 md:px-[1.5rem]"
  );
  assert.ok(!classNames("a", XSS).includes('"'));
  assert.ok(!classNames("a", XSS).includes("<"));

  // toAttributes escapes values, validates names and drops on* handlers.
  const attrs = toAttributes({
    title: XSS,
    onclick: "alert(1)",
    OnMouseOver: "alert(1)",
    'x onload="alert(1)"': "1",
    "data-ok": "1",
    hidden: true,
    skipped: false
  });
  assert.ok(!/onclick|onmouseover|onload/i.test(attrs), attrs);
  assert.ok(attrs.includes('data-ok="1"'));
  assert.ok(attrs.includes(" hidden"));
  assert.ok(!attrs.includes("skipped"));
  assertNoScript(attrs, "toAttributes");
  assert.equal(toAttributes({ href: JS_URL }), ' href="#"');
  assert.equal(toAttributes({ src: "data:text/html,<b>x</b>" }), ' src="#"');

  // safeUrl allow-list.
  for (const ok of [
    "/path?a=1",
    "relative/page.html",
    "#section",
    "?q=1",
    "http://example.com",
    "https://example.com/a:b",
    "mailto:a@example.com",
    "tel:+620000",
    "data:image/png;base64,AAAA",
    "blob:https://example.com/uuid"
  ]) {
    assert.equal(safeUrl(ok), ok, `safeUrl should allow ${ok}`);
  }
  for (const bad of [
    JS_URL,
    " JaVaScRiPt:alert(1)",
    "java\tscript:alert(1)",
    "java\nscript:alert(1)",
    "vbscript:msgbox(1)",
    "data:text/html,<script>alert(1)</script>",
    "data:application/javascript,alert(1)"
  ]) {
    assert.equal(safeUrl(bad), "#", `safeUrl should reject ${JSON.stringify(bad)}`);
  }
}

function checkUrlSinks(): void {
  const outputs: Record<string, string> = {
    Button: Button({ href: JS_URL, label: "x" }),
    Chip: Chip({ href: JS_URL, avatar: JS_URL, label: "x" }),
    Avatar: Avatar({ src: JS_URL }),
    UserItem: UserItem({ name: "U", href: JS_URL, avatar: JS_URL }),
    ListGroupItem: ListGroupItem({ href: JS_URL, content: "x" }),
    SettingsItem: SettingsItem({ label: "x", href: JS_URL }),
    SidebarNav: SidebarNav({ items: [{ label: "x", href: JS_URL }] }),
    Breadcrumb: Breadcrumb({ items: [{ label: "a", href: JS_URL }, { label: "b" }] }),
    Pagination: Pagination({ items: [{ label: "1", href: JS_URL }] }),
    Navbar: Navbar({ brand: "B", brandHref: JS_URL }),
    NavLink: NavLink({ label: "x", href: JS_URL }),
    DropdownItem: DropdownItem({ href: JS_URL, content: "x" }),
    MediaGrid: MediaGrid({ items: [{ src: JS_URL }] }),
    MediaPreviewModal: MediaPreviewModal({ items: [{ src: JS_URL }] }),
    GuestGate: GuestGate({ loginUrl: JS_URL }),
    AuthModal: AuthModal({ loginUrl: JS_URL, registerUrl: JS_URL }),
    QuoteCard: QuoteCard({ author: { name: "A", photo: JS_URL }, media: [JS_URL] })
  };
  for (const [name, html] of Object.entries(outputs)) assertNoJsUrl(html, name);
}

function checkRawSinks(): void {
  assertNoScript(Tooltip({ text: XSS }), "Tooltip");
  assert.ok(Tooltip({ text: "<b>ok</b>", html: true }).includes("<b>ok</b>"), "Tooltip html opt-in");

  const toast = Toast({ id: XSS, title: "T", body: "B" });
  assertNoScript(toast, "Toast id");
  assert.ok(toast.includes('data-dismiss=""'), "Toast dismiss should target the enclosing toast");
  assert.ok(Toast({ title: "T", body: "B" }).includes('data-dismiss=""'));
  assert.ok(!Toast({ title: "T", body: "B" }).includes('data-dismiss="toast"'));
  assert.ok(Alert({ content: "x", dismissible: true }).includes('data-dismiss=""'));

  const legacyQuote = QuoteCard({
    author: { name: "A" },
    interactiveAttrs: `onclick="alert(1)" data-post-id="5" ${XSS}`
  });
  assertNoScript(legacyQuote, "QuoteCard interactiveAttrs");
  assert.ok(!/onclick/i.test(legacyQuote), legacyQuote);
  assert.ok(legacyQuote.includes('data-post-id="5"'));
  const quote = QuoteCard({ author: { name: XSS }, interactiveAttributes: { onclick: "x", "data-id": XSS } });
  assertNoScript(quote, "QuoteCard interactiveAttributes");
  assert.ok(!/onclick/i.test(quote));

  assertNoScript(Pagination({ items: [{ label: XSS }] }), "Pagination label");
  assert.ok(Pagination({ items: [{ label: "prev", content: "&laquo;" }] }).includes("&laquo;"));

  assertNoScript(Progress({ value: 10, label: XSS }), "Progress label");
  assertNoScript(Progress({ value: 10, height: XSS }), "Progress height");

  assertNoScript(InputGroupText({ as: "label", htmlFor: XSS, children: "x" }), "InputGroupText for");

  const circle = SkeletonCircle({ size: '1px;background:url("x")"><script>alert(1)</script>' });
  assertNoScript(circle, "SkeletonCircle size");
  assert.ok(circle.includes("width:3rem;height:3rem;"), circle);
  assert.ok(SkeletonCircle({ size: 40 }).includes("width:40px;"));
  assert.ok(SkeletonCircle({ size: "2.5rem" }).includes("width:2.5rem;"));

  const grid = MediaGrid({ items: [{ src: "a.jpg" }], onItemClickAttribute: "onclick", itemClickDataId: "alert(1)" });
  assert.ok(!/onclick/i.test(grid), grid);
  assert.ok(
    MediaGrid({ items: [{ src: "a.jpg" }], onItemClickAttribute: "data-open-media", itemClickDataId: "7" }).includes(
      'data-open-media="7"'
    )
  );

  assertNoScript(Button({ className: XSS, label: XSS }), "Button className");
  assertNoScript(Avatar({ width: XSS, height: XSS, initials: XSS }), "Avatar size");
  assertNoScript(
    DropdownSelect({ name: "n", btnClassName: XSS, options: [{ value: XSS, label: XSS, icon: XSS }] }),
    "DropdownSelect"
  );
  assertNoScript(
    OptionPickerModal({
      title: XSS,
      options: [{ value: XSS, label: XSS, iconClass: XSS, badge: XSS, badgeVariant: XSS }]
    }),
    "OptionPickerModal"
  );
  assertNoScript(AuthModal({ id: XSS, closeLabel: XSS }), "AuthModal");
}

function checkPropBugs(): void {
  const collapsed = AccordionItem({ id: "a1", title: "T", body: "B" });
  assert.ok(collapsed.includes('aria-expanded="false"'));
  assert.ok(/<div id="a1"[^>]*\shidden>/.test(collapsed), collapsed);
  assert.ok(collapsed.includes('class="accordion-header m-0 text-base"'));

  const open = AccordionItem({ id: "#a2", title: "T", body: "B", expanded: true });
  assert.ok(open.includes('aria-expanded="true"'));
  assert.ok(open.includes('data-accordion="#a2"'));
  assert.ok(!/<div id="a2"[^>]*\shidden>/.test(open), open);
  assert.ok(Accordion({ children: collapsed }).includes('class="accordion"'));

  const staticModal = Modal({ id: "m", staticBackdrop: true });
  assert.ok(staticModal.includes('data-modal-backdrop="static"'));
  assert.ok(!staticModal.includes("data-backdrop="));
  assert.ok(!Modal({ id: "m" }).includes("data-modal-backdrop"));
  const sized = Modal({ id: "m", size: "lg", dialogClassName: "max-w-[576px]", className: "z-[1055]" });
  assert.ok(sized.includes('class="modal-dialog modal-lg max-w-[576px]"'), sized);
  assert.ok(sized.includes('class="modal z-[1055]"'), sized);
  assert.ok(OptionPickerModal({ title: "P", options: [] }).includes('data-modal-backdrop="static"'));

  const group = SettingsGroup({ title: "Privacy", attributes: { id: "grp", "data-x": "1" }, children: "c" });
  assert.ok(group.includes('id="grp"') && group.includes('data-x="1"'), group);

  const nav = SidebarNav({
    items: [
      { id: "privacy", label: "Privacy", panelTarget: "#panel-privacy", active: true },
      { id: "notif", label: "Notifications", panelTarget: "panel-notif" }
    ]
  });
  assert.ok(nav.includes('role="tablist"'));
  assert.ok(nav.includes('aria-controls="panel-privacy"'));
  assert.ok(nav.includes('aria-controls="panel-notif"'));
  assert.ok(nav.includes('data-tabs="#panel-notif"'));
  assert.ok(nav.includes('id="sidebar-tab-privacy"'));
  assert.ok(!nav.includes('aria-controls="privacy"'));
  assert.ok(!SidebarNav({ items: [{ label: "x", href: "/x" }] }).includes("tablist"));

  assert.ok(Avatar({ shape: "square" }).includes("rounded-0"));
  assert.ok(!Avatar({ shape: "square" }).includes("rounded-none"));
  assert.ok(!Avatar({ tinted: false }).includes("bg-primary/15"));
  assert.ok(!OptionPickerModal({ title: "P", options: [{ value: "1", label: "1" }] }).includes("transition-all"));

  const auth = AuthModal({ redirect: "/feed?x=1" });
  assert.ok(auth.includes('href="/login?redirect=%2Ffeed%3Fx%3D1"'), auth);
  assert.ok(
    AuthModal({ loginPath: "/auth/sign-in", redirectParam: "next", redirect: "/a" }).includes(
      'href="/auth/sign-in?next=%2Fa"'
    )
  );
  assert.ok(AuthModal({ redirect: "/a", linkAttributes: { "data-link": "" } }).includes('data-link=""'));
  assert.ok(!AuthModal({ redirect: "/a" }).includes("data-link"));
  assert.ok(!UserItem({ name: "U", href: "/u" }).includes("data-link"));
  assert.ok(UserItem({ name: "U", href: "/u", linkAttributes: { "data-link": "" } }).includes("data-link"));
}

const OLD_APP_CLASSES = [
  "feed-quote-card",
  "composer-remove-quote",
  "feed-card-avatar",
  "composer-chip-btn",
  "composer-picker-modal",
  "clips-guest-gate-icon",
  "clips-guest-gate-slide",
  "sidebar-user-",
  "auth-prompt-",
  "media-preview-modal",
  "hover:bg-hover",
  "interactive",
  "rounded-none",
  "transition-all",
  "placeholder.png",
  "data-backdrop="
];

function checkNoAppSpecificNames(): void {
  const html = [
    QuoteCard({ author: { name: "A", handle: "@a" }, content: "c", media: ["a.jpg"], isPreview: true }),
    QuoteCard({ author: { name: "A" }, content: "c" }),
    Avatar({}),
    Avatar({ shape: "square" }),
    DropdownSelect({ name: "n", options: [{ value: "a", label: "A" }] }),
    DropdownSelect({ name: "n", variant: "form-select", options: [{ value: "a", label: "A" }] }),
    OptionPickerModal({ title: "P", options: [{ value: "1", label: "One" }] }),
    GuestGate({}),
    GuestGate({ variant: "slide" }),
    GuestGate({ variant: "inline" }),
    UserPill({ name: "U", handle: "u", menuHtml: "<a>m</a>" }),
    AuthModal({}),
    MediaPreviewModal({ items: [{ src: "a.jpg" }, { src: "b.jpg" }] }),
    UserItem({ name: "U", href: "/u" }),
    Modal({ id: "m", staticBackdrop: true })
  ].join("\n");

  for (const name of OLD_APP_CLASSES) {
    assert.ok(!html.includes(name), `Old app-specific name "${name}" still rendered`);
  }

  // New generic names are present.
  for (const name of [
    "quote-card-remove",
    "dropdown-select-toggle",
    "picker-modal",
    "guest-gate-slide",
    "guest-gate-icon",
    "user-pill",
    "user-pill-trigger",
    "user-pill-menu",
    "auth-modal",
    "auth-modal-logo",
    'id="media-modal"'
  ]) {
    assert.ok(html.includes(name), `Expected generic name "${name}"`);
  }
}

export function runComponentChecks(): void {
  checkUtils();
  checkUrlSinks();
  checkRawSinks();
  checkPropBugs();
  checkNoAppSpecificNames();
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  runComponentChecks();
  console.log("component checks passed");
}
