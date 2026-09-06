const routes = {
    "/": "content/index.md",
    "/core/utility-first": "content/core/utility-first.md",
    "/core/variants": "content/core/variants.md",
    "/core/dark-mode": "content/core/dark-mode.md",
    "/core/static-css": "content/core/static-css.md",
    "/components/accordion": "content/components/accordion.md",
    "/components/alerts": "content/components/alerts.md",
    "/components/badges": "content/components/badges.md",
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
    "/components/spinner": "content/components/spinner.md",
    "/components/table": "content/components/table.md",
    "/components/tabs": "content/components/tabs.md",
    "/components/toast": "content/components/toast.md",
    "/components/tooltip": "content/components/tooltip.md",
    "/layout/grid": "content/layout/grid.md",
    "/layout/container": "content/layout/container.md",
    "/layout/responsive": "content/layout/responsive.md",
    "/layout/display": "content/layout/display.md",
    "/layout/flex": "content/layout/flex.md",
    "/layout/position": "content/layout/position.md",
    "/forms/forms": "content/forms/forms.md",
    "/forms/validation": "content/forms/validation.md",
    "/forms/input-group": "content/forms/input-group.md",
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
const menuButton = document.querySelector("[data-docs-menu]");
const backdrop = document.querySelector("[data-docs-backdrop]");
const themeButton = document.querySelector("[data-docs-theme]");
const themeLabel = document.querySelector("[data-docs-theme-label]");
const groupToggles = Array.from(document.querySelectorAll("[data-docs-group-toggle]"));
applyStoredTheme();
applyStoredGroups();
function currentRoute() {
    const hash = window.location.hash.replace(/^#/, "");
    return routes[hash] ? hash : "/";
}
async function loadRoute() {
    if (!content)
        return;
    const route = currentRoute();
    setActiveLink(route);
    closeMenu();
    try {
        const markdown = await loadMarkdown(route);
        if (window.Aksara)
            window.Aksara.destroy();
        content.innerHTML = renderMarkdown(markdown);
        content.focus({ preventScroll: true });
        bindDocsScrollspy(content);
        if (window.Aksara)
            window.Aksara.init(content);
        document.title = `${content.querySelector("h1")?.textContent || "Docs"} - Aksara UI`;
    }
    catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        content.innerHTML = `<h1>Page unavailable</h1><p class="docs-lead">${escapeHtml(message)}</p>`;
    }
}
function openMenu() {
    document.body.classList.add("docs-menu-open");
    menuButton?.setAttribute("aria-expanded", "true");
}
function closeMenu() {
    document.body.classList.remove("docs-menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
}
function toggleMenu() {
    if (document.body.classList.contains("docs-menu-open"))
        closeMenu();
    else
        openMenu();
}
function currentTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}
function applyStoredTheme() {
    const stored = localStorage.getItem("aksara-docs-theme");
    const preferred = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(stored || preferred);
}
function setTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("aksara-docs-theme", next);
    if (themeLabel)
        themeLabel.textContent = next === "dark" ? "Dark" : "Light";
    themeButton?.setAttribute("aria-label", `Switch to ${next === "dark" ? "light" : "dark"} theme`);
}
function toggleTheme() {
    setTheme(currentTheme() === "dark" ? "light" : "dark");
}
function groupStorageKey(group) {
    return `aksara-docs-group-${group.id || group.querySelector(".docs-group-toggle")?.textContent?.trim()}`;
}
function setGroupCollapsed(group, collapsed) {
    group.dataset.collapsed = collapsed ? "true" : "false";
    const toggle = group.querySelector("[data-docs-group-toggle]");
    toggle?.setAttribute("aria-expanded", String(!collapsed));
    localStorage.setItem(groupStorageKey(group), collapsed ? "true" : "false");
}
function applyStoredGroups() {
    document.querySelectorAll("[data-docs-group]").forEach((group) => {
        const stored = localStorage.getItem(groupStorageKey(group));
        if (stored === "true")
            setGroupCollapsed(group, true);
        if (stored === "false")
            setGroupCollapsed(group, false);
    });
}
function toggleGroup(event) {
    const currentTarget = event.currentTarget;
    const group = currentTarget?.closest("[data-docs-group]");
    if (!group)
        return;
    setGroupCollapsed(group, group.dataset.collapsed !== "true");
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
    links.forEach((link) => {
        if (link.dataset.docLink === route)
            link.setAttribute("aria-current", "page");
        else
            link.removeAttribute("aria-current");
    });
}
function bindDocsScrollspy(root) {
    root.querySelectorAll("[data-docs-scrollspy-link]").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");
            if (!href)
                return;
            const target = root.querySelector(href);
            const containerSelector = link.dataset.docsScrollspyContainer;
            const container = containerSelector ? root.querySelector(containerSelector) : null;
            if (!target || !container)
                return;
            container.scrollTo({
                top: target.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop,
                behavior: "smooth"
            });
            const group = link.closest("[data-docs-scrollspy-nav]");
            if (!group)
                return;
            group.querySelectorAll("[data-docs-scrollspy-link]").forEach((item) => {
                const active = item === link;
                item.classList.toggle("active", active && group.dataset.docsScrollspyActive === "class");
                if (active && group.dataset.docsScrollspyCurrent)
                    item.setAttribute("aria-current", group.dataset.docsScrollspyCurrent);
                else
                    item.removeAttribute("aria-current");
            });
        });
    });
}
function renderMarkdown(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const html = [];
    let paragraph = [];
    let list = [];
    let code = [];
    let inCode = false;
    let inHtml = false;
    let htmlBlock = [];
    function flushParagraph() {
        if (!paragraph.length)
            return;
        html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
        paragraph = [];
    }
    function flushList() {
        if (!list.length)
            return;
        html.push(`<ul>${list.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>`);
        list = [];
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
                html.push(`<pre class="docs-code"><code>${escapeHtml(code.join("\n"))}</code></pre>`);
                code = [];
                inCode = false;
            }
            else {
                flushParagraph();
                flushList();
                flushHtml();
                inCode = true;
            }
            continue;
        }
        if (inCode) {
            code.push(line);
            continue;
        }
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
        if (line.startsWith("- ")) {
            flushParagraph();
            list.push(line.slice(2));
            continue;
        }
        paragraph.push(line.trim());
    }
    flushParagraph();
    flushList();
    flushHtml();
    return html.join("\n");
}
function renderInline(value) {
    return escapeHtml(value)
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}
function escapeHtml(value) {
    return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
menuButton?.addEventListener("click", toggleMenu);
backdrop?.addEventListener("click", closeMenu);
themeButton?.addEventListener("click", toggleTheme);
groupToggles.forEach((toggle) => toggle.addEventListener("click", toggleGroup));
links.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape")
        closeMenu();
});
window.addEventListener("hashchange", loadRoute);
loadRoute();
export {};
