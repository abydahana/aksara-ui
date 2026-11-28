const routes = {
    "/": "content/index.md",
    "/showcase": "content/showcase.md",
    "/core/utility-first": "content/core/utility-first.md",
    "/core/variants": "content/core/variants.md",
    "/core/dark-mode": "content/core/dark-mode.md",
    "/core/static-css": "content/core/static-css.md",
    "/components/accordion": "content/components/accordion.md",
    "/components/alerts": "content/components/alerts.md",
    "/components/avatar": "content/components/avatar.md",
    "/components/chip": "content/components/chip.md",
    "/components/close-button": "content/components/close-button.md",
    "/components/empty-state": "content/components/empty-state.md",
    "/components/media-grid": "content/components/media-grid.md",
    "/components/badges": "content/components/badges.md",
    "/components/bento-card": "content/components/bento-card.md",
    "/components/bottom-sheet": "content/components/bottom-sheet.md",
    "/components/breadcrumb": "content/components/breadcrumb.md",
    "/components/button-group": "content/components/button-group.md",
    "/components/buttons": "content/components/buttons.md",
    "/components/cards": "content/components/cards.md",
    "/components/carousel": "content/components/carousel.md",
    "/components/collapse": "content/components/collapse.md",
    "/components/dropdown": "content/components/dropdown.md",
    "/components/list-group": "content/components/list-group.md",
    "/components/modal": "content/components/modal.md",
    "/components/navbar": "content/components/navbar.md",
    "/components/offcanvas": "content/components/offcanvas.md",
    "/components/pagination": "content/components/pagination.md",
    "/components/placeholders": "content/components/placeholders.md",
    "/components/popover": "content/components/popover.md",
    "/components/progress": "content/components/progress.md",
    "/components/scrollspy": "content/components/scrollspy.md",
    "/components/sidebar": "content/components/sidebar.md",
    "/components/skeleton": "content/components/skeleton.md",
    "/components/spinner": "content/components/spinner.md",
    "/components/table": "content/components/table.md",
    "/components/tabs": "content/components/tabs.md",
    "/components/timeline": "content/components/timeline.md",
    "/components/toast": "content/components/toast.md",
    "/components/tooltip": "content/components/tooltip.md",
    "/components/check-list": "content/components/check-list.md",
    "/components/copy-button": "content/components/copy-button.md",
    "/components/description-list": "content/components/description-list.md",
    "/components/divider": "content/components/divider.md",
    "/components/icon-tile": "content/components/icon-tile.md",
    "/components/indicator": "content/components/indicator.md",
    "/components/kbd": "content/components/kbd.md",
    "/components/segmented": "content/components/segmented.md",
    "/components/stat": "content/components/stat.md",
    "/components/steps": "content/components/steps.md",
    "/forms/number-input": "content/forms/number-input.md",
    "/forms/otp": "content/forms/otp.md",
    "/forms/rating": "content/forms/rating.md",
    "/components/auth-modal": "content/components/auth-modal.md",
    "/components/guest-gate": "content/components/guest-gate.md",
    "/components/media-viewer": "content/components/media-viewer.md",
    "/components/option-picker": "content/components/option-picker.md",
    "/components/quote-card": "content/components/quote-card.md",
    "/components/settings-list": "content/components/settings-list.md",
    "/components/user-item": "content/components/user-item.md",
    "/forms/dropdown-select": "content/forms/dropdown-select.md",
    "/layout/grid": "content/layout/grid.md",
    "/layout/container": "content/layout/container.md",
    "/layout/responsive": "content/layout/responsive.md",
    "/layout/display": "content/layout/display.md",
    "/layout/flex": "content/layout/flex.md",
    "/layout/position": "content/layout/position.md",
    "/forms/forms": "content/forms/forms.md",
    "/forms/validation": "content/forms/validation.md",
    "/forms/input-group": "content/forms/input-group.md",
    "/forms/select": "content/forms/select.md",
    "/forms/checks": "content/forms/checks.md",
    "/forms/range": "content/forms/range.md",
    "/forms/floating-labels": "content/forms/floating-labels.md",
    "/forms/layout": "content/forms/layout.md",
    "/typography/typography": "content/typography/typography.md",
    "/typography/text": "content/typography/text.md",
    "/utilities/utilities": "content/utilities/utilities.md",
    "/utilities/colors": "content/utilities/colors.md",
    "/utilities/spacing": "content/utilities/spacing.md",
    "/utilities/sizing": "content/utilities/sizing.md",
    "/utilities/borders": "content/utilities/borders.md",
    "/utilities/effects": "content/utilities/effects.md",
    "/utilities/transitions": "content/utilities/transitions.md",
    "/utilities/transforms": "content/utilities/transforms.md",
    "/utilities/animations": "content/utilities/animations.md",
    "/utilities/states": "content/utilities/states.md",
    "/helpers/rtl": "content/helpers/rtl.md",
    "/helpers/ratio": "content/helpers/ratio.md",
    "/helpers/stacks": "content/helpers/stacks.md",
    "/helpers/links": "content/helpers/links.md",
    "/helpers/visually-hidden": "content/helpers/visually-hidden.md",
    "/helpers/no-jit": "content/helpers/no-jit.md",
    "/helpers/customization": "content/helpers/customization.md",
    "/helpers/javascript": "content/helpers/javascript.md"
};
const content = document.querySelector("#docs-content");
const links = Array.from(document.querySelectorAll("[data-doc-link]"));
const categoryTabs = Array.from(document.querySelectorAll("[data-docs-tab]"));
const menuButton = document.querySelector("[data-docs-menu]");
const backdrop = document.querySelector("[data-docs-backdrop]");
const themeButton = document.querySelector("[data-docs-theme]");
const rtlButton = document.querySelector("[data-docs-rtl]");
const groupToggles = Array.from(document.querySelectorAll("[data-docs-group-toggle]"));
// Search elements
const searchWrapper = document.querySelector("[data-docs-search-wrapper]");
const searchInput = document.querySelector("[data-docs-search-input]");
const searchDropdown = document.querySelector("[data-docs-search-dropdown]");
const searchResults = document.querySelector("[data-docs-search-results]");
let activeSearchIndex = -1;
applyStoredTheme();
function currentRoute() {
    const hash = window.location.hash.replace(/^#/, "");
    return routes[hash] ? hash : "/";
}
function syncCategoryTab(route) {
    let category = "start";
    if (route.startsWith("/core/")) {
        category = "core";
    }
    else if (route.startsWith("/layout/") ||
        route.startsWith("/components/") ||
        route.startsWith("/forms/") ||
        route.startsWith("/typography/")) {
        category = "components";
    }
    else if (route.startsWith("/utilities/")) {
        category = "utilities";
    }
    else if (route.startsWith("/helpers/")) {
        category = "helpers";
    }
    categoryTabs.forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.docsTab === category);
    });
}
function buildToc() {
    const tocContainer = document.querySelector("#docs-toc");
    const tocNav = document.querySelector("#docs-toc-nav");
    if (!tocContainer || !tocNav || !content)
        return;
    const headings = Array.from(content.querySelectorAll("h2, h3"));
    if (headings.length === 0) {
        tocContainer.style.display = "none";
        return;
    }
    tocContainer.style.display = "";
    tocNav.innerHTML = headings
        .map((heading) => {
        if (!heading.id) {
            heading.id = (heading.textContent || "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
        }
        const isH3 = heading.tagName.toUpperCase() === "H3";
        return `<a href="#${heading.id}" class="docs-toc-link ${isH3 ? "docs-toc-sublink" : ""}" data-toc-target="${heading.id}">${escapeHtml(heading.textContent || "")}</a>`;
    })
        .join("");
    tocNav.querySelectorAll("[data-toc-target]").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.dataset.tocTarget;
            const targetEl = targetId ? document.getElementById(targetId) : null;
            if (targetEl) {
                const top = targetEl.getBoundingClientRect().top + window.scrollY - 120;
                window.scrollTo({ top, behavior: "smooth" });
            }
        });
    });
    updateActiveToc();
}
function updateActiveToc() {
    const tocLinks = Array.from(document.querySelectorAll(".docs-toc-link"));
    if (tocLinks.length === 0 || !content)
        return;
    const headings = Array.from(content.querySelectorAll("h2, h3"));
    let currentId = "";
    const scrollPos = window.scrollY + 140;
    for (const heading of headings) {
        if (heading.offsetTop <= scrollPos) {
            currentId = heading.id;
        }
    }
    tocLinks.forEach((link) => {
        link.classList.toggle("active", Boolean(currentId && link.dataset.tocTarget === currentId));
    });
}
async function loadRoute() {
    if (!content)
        return;
    const route = currentRoute();
    setActiveLink(route);
    syncCategoryTab(route);
    closeMenu();
    try {
        const markdown = await loadMarkdown(route);
        if (window.Aksara)
            window.Aksara.destroy();
        content.innerHTML = renderMarkdown(markdown);
        content.focus({ preventScroll: true });
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        content.scrollTop = 0;
        buildToc();
        if (window.Aksara)
            window.Aksara.init(content);
        restoreCodeTab();
        document.title = `${content.querySelector("h1")?.textContent || "Docs"} - Aksara UI`;
        scrollToPendingSection();
    }
    catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        content.innerHTML = `<h1>Page unavailable</h1><p class="docs-lead">${escapeHtml(message)}</p>`;
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        content.scrollTop = 0;
    }
}
// ── Mobile menu: an Aksara bottom sheet built from the sidebar; each group is a sub-sheet ──
let docsSheet = null;
const groupIcons = {
    Start: "rocket-launch-outline",
    "Core Concepts": "lightbulb-on-outline",
    Components: "view-grid-outline",
    Layout: "page-layout-body",
    Forms: "form-textbox",
    Typography: "format-text",
    Utilities: "tools",
    Helpers: "lifebuoy"
};
function buildDocsSheet() {
    if (docsSheet)
        return docsSheet;
    const groups = Array.from(document.querySelectorAll("#docs-sidebar [data-docs-group]")).map((group, index) => ({
        id: `docsSheetGroup${index}`,
        title: group.querySelector("[data-docs-group-toggle] span")?.textContent?.trim() || `Section ${index + 1}`,
        links: Array.from(group.querySelectorAll(".docs-nav a"))
    }));
    const handle = '<div class="sheet-handle" aria-hidden="true"></div>';
    const rows = groups
        .map((group) => `<button type="button" class="sheet-item" data-sheet-push="#${group.id}" data-docs-sheet-group="${group.id}"><span class="sheet-item-icon mdi mdi-${groupIcons[group.title] ?? "book-open-variant"}"></span><span class="sheet-item-label">${escapeHtml(group.title)}</span><span class="sheet-item-meta">${group.links.length}</span><span class="sheet-item-chevron mdi mdi-chevron-right"></span></button>`)
        .join("");
    const root = `<div class="sheet-panel" aria-labelledby="docsSheetTitle">${handle}<div class="sheet-header"><h2 id="docsSheetTitle" class="sheet-title">Aksara UI<span class="sheet-subtitle">Documentation</span></h2><button type="button" class="btn-close" data-sheet-close aria-label="Close menu"></button></div><div class="sheet-body">${rows}<div class="sheet-divider"></div><a class="sheet-item" href="https://github.com/abydahana/aksara-ui" target="_blank" rel="noreferrer"><span class="sheet-item-icon mdi mdi-github"></span><span class="sheet-item-label">GitHub</span><span class="sheet-item-chevron mdi mdi-open-in-new"></span></a></div></div>`;
    const panels = groups
        .map((group) => {
        const links = group.links
            .map((link) => `<a class="sheet-item" href="${escapeHtml(link.getAttribute("href") || "#/")}" data-docs-sheet-link="${escapeHtml(link.dataset.docLink || "")}"><span class="sheet-item-label">${escapeHtml(link.textContent?.trim() || "")}</span></a>`)
            .join("");
        return `<div id="${group.id}" class="sheet-panel" aria-labelledby="${group.id}Title">${handle}<div class="sheet-header"><button type="button" class="sheet-back" data-sheet-back aria-label="Back"><span class="mdi mdi-chevron-left"></span></button><h2 id="${group.id}Title" class="sheet-title">${escapeHtml(group.title)}</h2><button type="button" class="btn-close" data-sheet-close aria-label="Close menu"></button></div><div class="sheet-body">${links}</div></div>`;
    })
        .join("");
    const sheet = document.createElement("div");
    sheet.id = "docsMenuSheet";
    sheet.className = "sheet";
    sheet.innerHTML = root + panels;
    sheet.addEventListener("aksara:sheet:hide", () => {
        document.body.classList.remove("docs-menu-open");
        menuButton?.setAttribute("aria-expanded", "false");
    });
    document.body.append(sheet);
    docsSheet = sheet;
    return sheet;
}
/** Marks the current page (and its group) in the menu sheet. */
function syncDocsSheet() {
    if (!docsSheet)
        return;
    const route = currentRoute();
    docsSheet.querySelectorAll("[data-docs-sheet-link]").forEach((link) => {
        const active = link.dataset.docsSheetLink === route;
        link.classList.toggle("active", active);
        if (active)
            link.setAttribute("aria-current", "page");
        else
            link.removeAttribute("aria-current");
    });
    docsSheet.querySelectorAll("[data-docs-sheet-group]").forEach((row) => {
        const panel = docsSheet?.querySelector(`#${row.dataset.docsSheetGroup}`);
        row.classList.toggle("active", Boolean(panel?.querySelector('[aria-current="page"]')));
    });
}
function openMenu() {
    document.body.classList.add("docs-menu-open");
    menuButton?.setAttribute("aria-expanded", "true");
    const sheet = buildDocsSheet();
    syncDocsSheet();
    window.Aksara?.sheet(sheet).show();
}
function closeMenu() {
    document.body.classList.remove("docs-menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (docsSheet?.classList.contains("sheet-visible"))
        window.Aksara?.sheet(docsSheet).hide();
}
const CODE_TAB_KEY = "aksara-docs-code-tab";
function applyCodeTab(key) {
    document.querySelectorAll("[data-docs-code-tabs]").forEach((group) => {
        if (!group.querySelector(`[data-docs-code-tab="${key}"]`))
            return;
        group.querySelectorAll("[data-docs-code-tab]").forEach((tab) => {
            tab.setAttribute("aria-selected", String(tab.dataset.docsCodeTab === key));
        });
        group.querySelectorAll("[data-docs-code-panel]").forEach((panel) => {
            panel.hidden = panel.dataset.docsCodePanel !== key;
        });
    });
}
document.addEventListener("click", (event) => {
    const tab = event.target instanceof Element ? event.target.closest("[data-docs-code-tab]") : null;
    if (!tab?.dataset.docsCodeTab)
        return;
    applyCodeTab(tab.dataset.docsCodeTab);
    try {
        localStorage.setItem(CODE_TAB_KEY, tab.dataset.docsCodeTab);
    }
    catch {
        /* storage unavailable: the choice just isn't remembered */
    }
});
function restoreCodeTab() {
    try {
        const saved = localStorage.getItem(CODE_TAB_KEY);
        if (saved)
            applyCodeTab(saved);
    }
    catch {
        /* ignore */
    }
}
function toggleMenu() {
    if (document.body.classList.contains("docs-menu-open"))
        closeMenu();
    else
        openMenu();
}
function currentTheme() {
    if (window.Aksara?.getTheme) {
        const t = window.Aksara.getTheme();
        if (t === "dark" || t === "light")
            return t;
    }
    return document.documentElement.getAttribute("data-theme") === "dark" ||
        document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
}
function applyStoredTheme() {
    const stored = localStorage.getItem("aksara-theme");
    const preferred = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(stored || preferred);
}
function setTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";
    if (window.Aksara?.setTheme) {
        window.Aksara.setTheme(next);
    }
    else {
        document.documentElement.setAttribute("data-theme", next);
        if (next === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        }
        else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }
    localStorage.setItem("aksara-theme", next);
    localStorage.setItem("aksara-theme", next);
    if (themeButton) {
        const icon = themeButton.querySelector(".mdi");
        if (icon) {
            icon.className = next === "dark" ? "mdi mdi-weather-sunny" : "mdi mdi-weather-night";
        }
        themeButton.setAttribute("aria-label", `Switch to ${next === "dark" ? "light" : "dark"} theme`);
    }
}
function toggleTheme() {
    setTheme(currentTheme() === "dark" ? "light" : "dark");
}
function setGroupCollapsed(group, collapsed) {
    group.dataset.collapsed = collapsed ? "true" : "false";
    const toggle = group.querySelector("[data-docs-group-toggle]");
    toggle?.setAttribute("aria-expanded", String(!collapsed));
}
function openOnlyGroup(targetGroup) {
    document.querySelectorAll("[data-docs-group]").forEach((group) => {
        if (group === targetGroup) {
            setGroupCollapsed(group, false);
        }
        else {
            setGroupCollapsed(group, true);
        }
    });
}
function toggleGroup(event) {
    const currentTarget = event.currentTarget;
    const targetGroup = currentTarget?.closest("[data-docs-group]");
    if (!targetGroup)
        return;
    const isCurrentlyCollapsed = targetGroup.dataset.collapsed === "true";
    if (isCurrentlyCollapsed) {
        openOnlyGroup(targetGroup);
    }
    else {
        setGroupCollapsed(targetGroup, true);
    }
}
async function loadMarkdown(route) {
    if (window.AksaraDocsContent?.[route])
        return window.AksaraDocsContent[route];
    const response = await fetch(routes[route]);
    if (!response.ok)
        throw new Error(`Unable to load ${routes[route]}`);
    return response.text();
}
function setActiveLink(route) {
    let activeGroup = null;
    links.forEach((link) => {
        if (link.dataset.docLink === route) {
            link.setAttribute("aria-current", "page");
            activeGroup = link.closest("[data-docs-group]");
        }
        else {
            link.removeAttribute("aria-current");
        }
    });
    if (activeGroup) {
        openOnlyGroup(activeGroup);
    }
}
function renderMarkdown(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const html = [];
    let paragraph = [];
    let list = [];
    let ordered = [];
    let table = [];
    let code = [];
    let codeInfo = "";
    let codeGroup = [];
    let inCode = false;
    let inHtml = false;
    let htmlBlock = [];
    /**
     * Adjacent code fences become one tabbed block when one of them is a component-package
     * sample (```js components); otherwise each fence renders on its own.
     */
    function flushCodeGroup() {
        if (!codeGroup.length)
            return;
        const group = codeGroup;
        codeGroup = [];
        const pre = (block, attrs = "") => `<pre class="docs-code"${attrs}><code>${escapeHtml(block.code)}</code></pre>`;
        if (group.length < 2 || !group.some((block) => block.label === "Components")) {
            group.forEach((block) => html.push(pre(block)));
            return;
        }
        const key = (label) => label.toLowerCase().replace(/\W+/g, "-");
        const tabs = group
            .map((block, index) => `<button type="button" role="tab" class="docs-code-tab" data-docs-code-tab="${key(block.label)}" aria-selected="${index === 0}">${escapeHtml(block.label)}</button>`)
            .join("");
        const panels = group
            .map((block, index) => pre(block, ` role="tabpanel" data-docs-code-panel="${key(block.label)}"${index === 0 ? "" : " hidden"}`))
            .join("");
        html.push(`<div class="docs-code-tabs" data-docs-code-tabs><div class="docs-code-tablist" role="tablist">${tabs}</div>${panels}</div>`);
    }
    function codeLabel(info) {
        const [lang = "", ...flags] = info.toLowerCase().split(/\s+/);
        if (flags.includes("components"))
            return "Components";
        if (lang === "html")
            return "HTML";
        if (lang === "js" || lang === "javascript" || lang === "ts" || lang === "typescript")
            return "JavaScript";
        if (lang === "css")
            return "CSS";
        if (lang === "bash" || lang === "sh" || lang === "shell")
            return "Terminal";
        return lang ? lang.toUpperCase() : "Code";
    }
    function flushParagraph() {
        if (!paragraph.length)
            return;
        html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
        paragraph = [];
    }
    function flushList() {
        if (list.length) {
            const items = list.map((item) => {
                const nested = item.children.length
                    ? `<ul>${item.children.map((child) => `<li>${renderInline(child)}</li>`).join("")}</ul>`
                    : "";
                return `<li>${renderInline(item.text)}${nested}</li>`;
            });
            html.push(`<ul>${items.join("")}</ul>`);
        }
        if (ordered.length)
            html.push(`<ol>${ordered.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ol>`);
        list = [];
        ordered = [];
        flushTable();
    }
    /** GitHub-style pipe table: header row, `|---|` separator, body rows. */
    function flushTable() {
        if (!table.length)
            return;
        const cells = (row) => row
            .trim()
            .replace(/^\||\|$/g, "")
            .split("|")
            .map((cell) => cell.trim());
        const [head, separator, ...body] = table;
        table = [];
        if (!separator || !/^[\s|:-]+$/.test(separator)) {
            html.push(`<p>${renderInline(head)}</p>`);
            return;
        }
        const thead = cells(head)
            .map((cell) => `<th>${renderInline(cell)}</th>`)
            .join("");
        const tbody = body
            .map((row) => `<tr>${cells(row)
            .map((cell) => `<td>${renderInline(cell)}</td>`)
            .join("")}</tr>`)
            .join("");
        html.push(`<div class="table-responsive docs-table"><table class="table"><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table></div>`);
    }
    function flushHtml() {
        if (!htmlBlock.length)
            return;
        html.push(htmlBlock.join("\n"));
        htmlBlock = [];
    }
    for (const line of lines) {
        if (line.startsWith("```")) {
            if (inCode) {
                codeGroup.push({ label: codeLabel(codeInfo), code: code.join("\n") });
                code = [];
                inCode = false;
            }
            else {
                flushParagraph();
                flushList();
                flushHtml();
                codeInfo = line.slice(3).trim();
                inCode = true;
            }
            continue;
        }
        if (inCode) {
            code.push(line);
            continue;
        }
        if (line.trim())
            flushCodeGroup();
        if (line.trim() === "::html") {
            flushParagraph();
            flushList();
            inHtml = true;
            continue;
        }
        if (line.trim() === "::end") {
            inHtml = false;
            flushHtml();
            continue;
        }
        if (inHtml) {
            htmlBlock.push(line);
            continue;
        }
        if (!line.trim()) {
            flushParagraph();
            flushList();
            continue;
        }
        if (line.trim() === "---") {
            flushParagraph();
            flushList();
            html.push("<hr>");
            continue;
        }
        if (line.startsWith("### ")) {
            flushParagraph();
            flushList();
            html.push(`<h3>${renderInline(line.slice(4))}</h3>`);
            continue;
        }
        if (line.startsWith("## ")) {
            flushParagraph();
            flushList();
            html.push(`<h2 class="docs-section">${renderInline(line.slice(3))}</h2>`);
            continue;
        }
        if (line.startsWith("# ")) {
            flushParagraph();
            flushList();
            html.push(`<h1>${renderInline(line.slice(2))}</h1>`);
            continue;
        }
        if (line.trim().startsWith("|")) {
            flushParagraph();
            table.push(line);
            continue;
        }
        if (table.length)
            flushTable();
        if (line.startsWith("- ")) {
            flushParagraph();
            list.push({ text: line.slice(2), children: [] });
            continue;
        }
        const nestedItem = /^\s{2,}- (.*)$/.exec(line);
        if (nestedItem && list.length) {
            list[list.length - 1].children.push(nestedItem[1]);
            continue;
        }
        const orderedItem = /^\d+\.\s+(.*)$/.exec(line);
        if (orderedItem) {
            flushParagraph();
            ordered.push(orderedItem[1]);
            continue;
        }
        paragraph.push(line.trim());
    }
    flushCodeGroup();
    flushParagraph();
    flushList();
    flushHtml();
    return html.join("\n");
}
function renderInline(value) {
    // Code spans first, so their contents are never parsed as links or bold text.
    return value
        .split(/(`[^`]+`)/g)
        .map((part, index) => (index % 2 ? `<code>${escapeHtml(part.slice(1, -1))}</code>` : renderText(part)))
        .join("");
}
function renderText(value) {
    return escapeHtml(value)
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label, href) => {
        if (!/^(#|\/|https?:\/\/)/.test(href))
            return match;
        const external = /^https?:\/\//.test(href) ? ' target="_blank" rel="noreferrer"' : "";
        return `<a href="${href}"${external}>${label}</a>`;
    })
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}
function escapeHtml(value) {
    return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
// Search dropdown functions
function openSearchDropdown() {
    if (!searchDropdown || !searchInput)
        return;
    const query = searchInput.value.trim();
    if (query) {
        renderSearchResults(query);
        searchDropdown.removeAttribute("hidden");
    }
}
function closeSearchDropdown() {
    if (!searchDropdown)
        return;
    searchDropdown.setAttribute("hidden", "");
    activeSearchIndex = -1;
}
let searchIndex = null;
let pendingSection = null;
/** Same slug as `buildToc()` gives the rendered heading. */
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}
function plainInline(text) {
    return text
        .replace(/`([^`]*)`/g, "$1")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
        .trim();
}
function stripTags(html) {
    return html
        .replace(/<[^>]+>/g, " ")
        .replace(/&[a-z#0-9]+;/gi, " ")
        .replace(/\s+/g, " ")
        .trim();
}
function buildSearchIndex() {
    const sources = window.AksaraDocsContent ?? {};
    const sections = [];
    for (const route of Object.keys(routes)) {
        const markdown = sources[route];
        if (!markdown)
            continue;
        const page = plainInline(markdown.match(/^#\s+(.+)$/m)?.[1] ?? route);
        let current = { route, page, heading: "", slug: "", prose: "", code: "" };
        sections.push(current);
        let inFence = false;
        let inPreview = false;
        for (const line of markdown.split("\n")) {
            if (/^```/.test(line)) {
                inFence = !inFence;
                continue;
            }
            if (/^::html/.test(line)) {
                inPreview = true;
                continue;
            }
            if (/^::end/.test(line)) {
                inPreview = false;
                continue;
            }
            if (inFence) {
                current.code += ` ${line}`;
                continue;
            }
            if (inPreview) {
                // Live previews: their visible text counts as prose, their markup as code.
                current.prose += ` ${stripTags(line)}`;
                current.code += ` ${line}`;
                continue;
            }
            const heading = line.match(/^(##|###)\s+(.+)$/);
            if (heading) {
                const text = plainInline(heading[2]);
                current = { route, page, heading: text, slug: slugify(text), prose: "", code: "" };
                sections.push(current);
                continue;
            }
            if (/^#\s/.test(line) || /^---\s*$/.test(line))
                continue;
            const body = line
                .replace(/^\s*(?:[-*+]|\d+\.)\s+/, "")
                .replace(/^\s*>\s?/, "")
                .replace(/\|/g, " ");
            current.prose += ` ${plainInline(body)}`;
        }
    }
    return sections;
}
function scoreSection(section, terms) {
    const page = section.page.toLowerCase();
    const heading = section.heading.toLowerCase();
    const prose = section.prose.toLowerCase();
    const code = section.code.toLowerCase();
    let score = 0;
    for (const term of terms) {
        let best = 0;
        if (page.includes(term))
            best = Math.max(best, section.heading ? 30 : 100);
        if (heading.includes(term))
            best = Math.max(best, heading.startsWith(term) ? 70 : 55);
        if (prose.includes(term))
            best = Math.max(best, 12);
        if (code.includes(term))
            best = Math.max(best, 4);
        if (!best)
            return 0; // every term must appear somewhere in the section
        score += best;
    }
    return score;
}
/** Up to ~120 characters of prose around the first hit, with every term highlighted. */
function searchSnippet(section, terms) {
    const text = section.prose.replace(/\s+/g, " ").trim();
    const lower = text.toLowerCase();
    const hit = terms
        .map((term) => lower.indexOf(term))
        .filter((i) => i >= 0)
        .sort((x, y) => x - y)[0];
    let snippet;
    if (hit === undefined) {
        snippet = text.slice(0, 110);
        if (text.length > 110)
            snippet += "…";
    }
    else {
        const start = Math.max(0, hit - 40);
        snippet = (start > 0 ? "…" : "") + text.slice(start, start + 120) + (start + 120 < text.length ? "…" : "");
    }
    let html = escapeHtml(snippet);
    for (const term of terms) {
        const pattern = new RegExp(`(${escapeHtml(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
        html = html.replace(pattern, "<mark>$1</mark>");
    }
    return html;
}
function scrollToPendingSection() {
    if (!pendingSection)
        return;
    const target = document.getElementById(pendingSection);
    pendingSection = null;
    if (!target)
        return;
    requestAnimationFrame(() => {
        const top = target.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: "instant" });
    });
}
function renderSearchResults(query) {
    if (!searchResults)
        return;
    if (!query) {
        searchResults.innerHTML = "";
        closeSearchDropdown();
        return;
    }
    searchIndex ??= buildSearchIndex();
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const ranked = searchIndex
        .map((section) => ({ section, score: scoreSection(section, terms) }))
        .filter((entry) => entry.score > 0)
        .sort((x, y) => y.score - x.score);
    if (ranked.length === 0) {
        searchResults.innerHTML = `<div class="docs-search-empty">No results found for "${escapeHtml(query)}"</div>`;
        activeSearchIndex = -1;
        return;
    }
    activeSearchIndex = 0;
    searchResults.innerHTML = ranked
        .slice(0, 12)
        .map(({ section }, index) => {
        const category = section.route.split("/").filter(Boolean)[0] ?? "start";
        const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
        const title = section.heading
            ? `${escapeHtml(section.page)}<span class="docs-search-item-sep" aria-hidden="true">›</span>${escapeHtml(section.heading)}`
            : escapeHtml(section.page);
        return `<a href="#${section.route}" class="docs-search-item${index === 0 ? " active" : ""}" data-search-link data-search-index="${index}" data-search-route="${escapeHtml(section.route)}" data-search-section="${escapeHtml(section.slug)}">
        <div class="docs-search-item-header">
          <span class="docs-search-item-title">${title}</span>
          <span class="docs-search-item-badge">${escapeHtml(categoryLabel)}</span>
        </div>
        <span class="docs-search-item-snippet">${searchSnippet(section, terms)}</span>
      </a>`;
    })
        .join("");
    searchResults.querySelectorAll("[data-search-link]").forEach((item) => {
        item.addEventListener("click", (event) => {
            closeSearchDropdown();
            pendingSection = item.dataset.searchSection || null;
            // Same page: no hashchange fires, so scroll right away.
            if (item.dataset.searchRoute === currentRoute()) {
                event.preventDefault();
                scrollToPendingSection();
            }
        });
    });
}
function updateActiveSearchItem(index) {
    if (!searchResults)
        return;
    const items = searchResults.querySelectorAll("[data-search-link]");
    if (items.length === 0)
        return;
    if (index < 0)
        index = items.length - 1;
    if (index >= items.length)
        index = 0;
    activeSearchIndex = index;
    items.forEach((item, i) => {
        if (i === activeSearchIndex) {
            item.classList.add("active");
            item.scrollIntoView({ block: "nearest" });
        }
        else {
            item.classList.remove("active");
        }
    });
}
// Event Listeners
menuButton?.addEventListener("click", toggleMenu);
backdrop?.addEventListener("click", closeMenu);
themeButton?.addEventListener("click", toggleTheme);
groupToggles.forEach((toggle) => toggle.addEventListener("click", toggleGroup));
rtlButton?.addEventListener("click", () => {
    const isRtl = document.documentElement.getAttribute("dir") === "rtl";
    if (isRtl) {
        document.documentElement.removeAttribute("dir");
        rtlButton.classList.remove("active");
    }
    else {
        document.documentElement.setAttribute("dir", "rtl");
        rtlButton.classList.add("active");
    }
});
searchInput?.addEventListener("input", () => {
    const query = searchInput.value.trim();
    if (query) {
        renderSearchResults(query);
        searchDropdown?.removeAttribute("hidden");
    }
    else {
        closeSearchDropdown();
    }
});
searchInput?.addEventListener("focus", () => {
    if (searchInput.value.trim()) {
        openSearchDropdown();
    }
});
searchInput?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        event.preventDefault();
        if (searchDropdown?.hasAttribute("hidden")) {
            openSearchDropdown();
        }
        else {
            updateActiveSearchItem(activeSearchIndex + 1);
        }
    }
    else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (searchDropdown?.hasAttribute("hidden")) {
            openSearchDropdown();
        }
        else {
            updateActiveSearchItem(activeSearchIndex - 1);
        }
    }
    else if (event.key === "Enter") {
        if (searchDropdown && !searchDropdown.hasAttribute("hidden")) {
            const activeItem = searchResults?.querySelector(".docs-search-item.active");
            if (activeItem) {
                event.preventDefault();
                activeItem.click();
                searchInput.blur();
            }
        }
    }
    else if (event.key === "Escape") {
        closeSearchDropdown();
        searchInput.blur();
    }
});
document.addEventListener("click", (event) => {
    const target = event.target;
    if (searchWrapper && !searchWrapper.contains(target)) {
        closeSearchDropdown();
    }
});
document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInput?.focus();
        searchInput?.select();
        if (searchInput?.value.trim()) {
            openSearchDropdown();
        }
    }
    else if (event.key === "Escape") {
        if (searchDropdown && !searchDropdown.hasAttribute("hidden")) {
            closeSearchDropdown();
            searchInput?.blur();
        }
        else {
            closeMenu();
        }
    }
});
window.addEventListener("scroll", updateActiveToc, { passive: true });
links.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        if (content)
            content.scrollTop = 0;
    });
});
window.addEventListener("hashchange", loadRoute);
loadRoute();