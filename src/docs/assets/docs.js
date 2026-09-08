const routes = {
    "/": "content/index.md",
    "/core/utility-first": "content/core/utility-first.md",
    "/core/variants": "content/core/variants.md",
    "/core/dark-mode": "content/core/dark-mode.md",
    "/core/static-css": "content/core/static-css.md",
    "/components/accordion": "content/components/accordion.md",
    "/components/alerts": "content/components/alerts.md",
    "/components/badges": "content/components/badges.md",
    "/components/bento-card": "content/components/bento-card.md",
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
    "/components/skeleton": "content/components/skeleton.md",
    "/components/spinner": "content/components/spinner.md",
    "/components/table": "content/components/table.md",
    "/components/tabs": "content/components/tabs.md",
    "/components/timeline": "content/components/timeline.md",
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
const categoryTabs = Array.from(document.querySelectorAll("[data-docs-tab]"));
const menuButton = document.querySelector("[data-docs-menu]");
const backdrop = document.querySelector("[data-docs-backdrop]");
const themeButton = document.querySelector("[data-docs-theme]");
const rtlButton = document.querySelector("[data-docs-rtl]");
const groupToggles = Array.from(document.querySelectorAll("[data-docs-group-toggle]"));
// Search Modal elements
const searchTrigger = document.querySelector("[data-docs-search-trigger]");
const searchModal = document.querySelector("#docs-search-modal");
const searchBackdrop = document.querySelector("[data-docs-search-backdrop]");
const searchInput = document.querySelector("[data-docs-search-input]");
const searchResults = document.querySelector("[data-docs-search-results]");
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
        bindDocsScrollspy(content);
        if (window.Aksara)
            window.Aksara.init(content);
        document.title = `${content.querySelector("h1")?.textContent || "Docs"} - Aksara UI`;
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
    const stored = (localStorage.getItem("aksara-theme") || localStorage.getItem("aksara-docs-theme"));
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
    localStorage.setItem("aksara-docs-theme", next);
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
// Search Modal functions
function openSearch() {
    if (!searchModal)
        return;
    searchModal.removeAttribute("hidden");
    if (searchInput) {
        searchInput.value = "";
        renderSearchResults("");
        setTimeout(() => searchInput.focus(), 50);
    }
}
function closeSearch() {
    if (!searchModal)
        return;
    searchModal.setAttribute("hidden", "");
}
function renderSearchResults(query) {
    if (!searchResults)
        return;
    if (!query) {
        searchResults.innerHTML = `<div class="docs-search-empty">Type to search documentation...</div>`;
        return;
    }
    const lower = query.toLowerCase();
    const matches = Object.keys(routes).filter((route) => {
        return route.toLowerCase().includes(lower);
    });
    if (matches.length === 0) {
        searchResults.innerHTML = `<div class="docs-search-empty">No results found for "${escapeHtml(query)}"</div>`;
        return;
    }
    searchResults.innerHTML = matches
        .map((route) => {
        const label = route === "/" ? "Overview" : route.split("/").pop()?.replace(/-/g, " ") || route;
        const capitalized = label.charAt(0).toUpperCase() + label.slice(1);
        return `<a href="#${route}" class="docs-search-item" data-search-link>
        <span class="docs-search-item-title">${escapeHtml(capitalized)}</span>
        <span class="docs-search-item-route">${escapeHtml(route)}</span>
      </a>`;
    })
        .join("");
    searchResults.querySelectorAll("[data-search-link]").forEach((item) => {
        item.addEventListener("click", () => {
            closeSearch();
        });
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
searchTrigger?.addEventListener("click", openSearch);
searchBackdrop?.addEventListener("click", closeSearch);
searchInput?.addEventListener("input", () => {
    renderSearchResults(searchInput.value.trim());
});
document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (searchModal && !searchModal.hasAttribute("hidden")) {
            closeSearch();
        }
        else {
            openSearch();
        }
    }
    else if (event.key === "Escape") {
        if (searchModal && !searchModal.hasAttribute("hidden")) {
            closeSearch();
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