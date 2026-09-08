# Bento Card & Grid

A modern dashboard layout inspired by Japanese bento boxes: organize diverse metrics, features, and rich content into a modular, responsive grid without tedious manual positioning.

---

## Interactive Showcase

Explore different Bento card variations below, featuring highlight cards with subtle gradient glows, compact metric cards, multi-span wide cards, and interactive visual slots:

::html
<div class="docs-preview py-4">
  <div class="bento-grid">
    <!-- Featured Card: Span 2 cols -->
    <article class="bento-card bento-col-2 bento-featured">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-primary mb-2">⭐ Featured Highlight</span>
          <h3 class="bento-title text-2xl font-800">Aksara UI v1.1.0</h3>
          <p class="bento-subtitle text-base">Ultra-fast static CSS, zero runtime JS dependencies, and RTL-first.</p>
        </div>
        <button class="btn btn-sm btn-icon btn-soft-primary" data-clipboard="npm install @abydahana/aksara-ui" data-clipboard-success="✓" aria-label="Copy install command">
          <span class="mdi mdi-content-copy"></span>
        </button>
      </div>
      <div class="bento-body">
        <div class="p-4 rounded-xl bg-body border border-subtle hstack gap-4 flex-wrap">
          <div>
            <div class="text-xs text-subtle font-700 uppercase">Utilities</div>
            <div class="text-xl font-800 text-primary">7.7k+</div>
          </div>
          <div class="vr"></div>
          <div>
            <div class="text-xs text-subtle font-700 uppercase">Runtime</div>
            <div class="text-xl font-800 text-success">0 KB</div>
          </div>
          <div class="vr"></div>
          <div>
            <div class="text-xs text-subtle font-700 uppercase">AOT Rules</div>
            <div class="text-xl font-800 text-info">9.6k+</div>
          </div>
        </div>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">Zero compilation lag in production</span>
        <a href="#/getting-started" class="btn btn-sm btn-primary hstack gap-1">
          Quick Start <span class="mdi mdi-arrow-right"></span>
        </a>
      </div>
    </article>

    <!-- Quick Metric Card -->
    <article class="bento-card">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-success mb-2">Performance</span>
          <h3 class="bento-title">Ultra Fast</h3>
          <p class="bento-subtitle">Instant paint without style injection</p>
        </div>
        <span class="mdi mdi-lightning-bolt text-warning text-2xl"></span>
      </div>
      <div class="bento-body">
        <div class="text-4xl font-900 text-success mt-2">100<span class="text-lg text-subtle font-500">/100</span></div>
        <p class="text-xs text-subtle mt-1">Out-of-the-box 100 Lighthouse score for all static sites.</p>
      </div>
      <div class="bento-footer">
        <span class="badge badge-dot bg-success"></span>
        <span class="text-xs text-subtle">AOT Precompiled</span>
      </div>
    </article>

    <!-- Compact Stat Card -->
    <article class="bento-card">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-info mb-2">Flexible Themes</span>
          <h3 class="bento-title">Dark Mode</h3>
          <p class="bento-subtitle">Automatic system synchronization</p>
        </div>
        <span class="mdi mdi-theme-light-dark text-primary text-2xl"></span>
      </div>
      <div class="bento-body">
        <p class="text-sm text-subtle">Switch color modes with a single method call:</p>
        <code class="p-2 rounded bg-subtle block text-xs font-mono">Aksara.setTheme('dark')</code>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">Native CSS Variables</span>
      </div>
    </article>

    <!-- Visual / Integration Slot: Span 2 cols -->
    <article class="bento-card bento-col-2">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-warning mb-2">Adaptive Layout</span>
          <h3 class="bento-title">RTL & Bidirectional Ready</h3>
          <p class="bento-subtitle">Built from the ground up with CSS logical properties (ms, me, ps, pe).</p>
        </div>
        <span class="mdi mdi-swap-horizontal-bold text-info text-2xl"></span>
      </div>
      <div class="bento-visual">
        <div class="hstack gap-3 p-4 items-center">
          <span class="badge badge-primary">LTR Layout</span>
          <span class="mdi mdi-arrow-left-right text-subtle"></span>
          <span class="badge badge-soft-primary">RTL Mirror</span>
        </div>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">Simply add <code>dir="rtl"</code></span>
        <button class="btn btn-sm btn-ghost" data-clipboard="dir='rtl'">Copy Attribute</button>
      </div>
    </article>

  </div>
</div>
::end

```html
<!-- Bento Grid Container -->
<div class="bento-grid">
  <!-- Wide Card (Spans 2 columns on desktop) -->
  <article class="bento-card bento-col-2 bento-featured">
    <div class="bento-header">
      <div>
        <span class="badge badge-soft-primary">Highlight</span>
        <h3 class="bento-title">Aksara UI v1.1.0</h3>
        <p class="bento-subtitle">Ultra-fast static CSS, zero runtime dependencies.</p>
      </div>
    </div>
    <div class="bento-body">
      <!-- Your custom content here -->
    </div>
    <div class="bento-footer">
      <span>Footer information</span>
      <button class="btn btn-sm btn-primary">Action</button>
    </div>
  </article>

  <!-- Standard Card (1 column) -->
  <article class="bento-card">
    <div class="bento-header">
      <h3 class="bento-title">Metric</h3>
    </div>
    <div class="bento-body">
      <div class="text-4xl font-900 text-success">100%</div>
    </div>
  </article>
</div>
```

---

## Bento Classes Reference

| Class                            | Description                                                                 |
| -------------------------------- | --------------------------------------------------------------------------- |
| `.bento-grid`                    | Responsive CSS grid container (1 column on mobile, 3 columns on desktop).   |
| `.bento-grid-2` / `3` / `4`      | Grid variants targeting specific column counts on wider screens.            |
| `.bento-card`                    | Tactile bento card with modern border radius, surface token, and elevation. |
| `.bento-col-1` to `.bento-col-4` | Defines column span width (1 column on mobile, expands on desktop).         |
| `.bento-row-1` to `.bento-row-3` | Defines row span height.                                                    |
| `.bento-featured`                | Highlights card with subtle gradient background and glowing accent border.  |
| `.bento-header`                  | Top area containing title, subtitle, and badges or action buttons.          |
| `.bento-body`                    | Main flexible content container.                                            |
| `.bento-footer`                  | Bottom bar for action buttons, status indicator, or helper links.           |
| `.bento-visual`                  | Visual container slot for mockups, interactive components, or previews.     |

---

## TypeScript Component Helper

For applications using TypeScript or component rendering, Aksara UI provides structured builders:

```ts
import { BentoGrid, BentoCard, BentoTitle, BentoHeader, BentoBody, BentoFooter } from "@abydahana/aksara-ui/components";

const html = BentoGrid({
  cols: 3,
  children: `
    ${BentoCard({
      colSpan: 2,
      featured: true,
      children: `
        ${BentoHeader({
          children: BentoTitle({ title: "Featured Component", subtitle: "Ready to use without complex configuration" })
        })}
        ${BentoBody({ children: "<p>Card content here...</p>" })}
        ${BentoFooter({ children: '<button class="btn btn-sm btn-primary">Get Started</button>' })}
      `
    })}
    ${BentoCard({
      children: `
        ${BentoHeader({ children: BentoTitle({ title: "Live Metric" }) })}
        <div class="text-3xl font-bold text-success">99.9%</div>
      `
    })}
  `
});
```
