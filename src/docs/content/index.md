# Aksara UI

A lightweight, modern CSS + TypeScript frontend framework that blends **Bootstrap readability** with **Tailwind-like utility flexibility**, designed with modern logical properties, native RTL support, and a beautiful, flat, soft visual language.

---

::html
<div class="p-5 bg-subtle border border-subtle rounded-2xl mb-5">
  <span class="badge bg-body-tertiary text-body mb-3 font-700">Aksara UI v1.1.0</span>
  <h2 class="text-32 font-900 leading-38 text-body mb-2">Bootstrap Readability + Tailwind Flexibility</h2>
  <p class="text-subtle text-md leading-relaxed mb-4" style="max-width:640px;">
    Build stunning, fully accessible interfaces with prebuilt CSS components, highly flexible logical utility classes, a strict variant grammar, and zero-runtime TypeScript plugins. Offline-ready and compiled to pure static CSS.
  </p>
  <div class="docs-row flex-wrap gap-3">
    <a href="#/core/utility-first" class="btn btn-primary shadow-sm">Get Started</a>
    <a href="#/helpers/javascript" class="btn btn-soft-secondary">JavaScript API Reference</a>
    <span class="badge badge-soft-success font-700 hstack gap-2">
      <span class="mdi mdi-shield-check-outline mdi-18px"></span> Static CSS (No JIT)
    </span>
  </div>
</div>
::end

## Premium UI Showcase

Experience the flat, soft design aesthetics and modular components of Aksara UI. Click the interactive buttons below to trigger live modals and toast stacks:

::html
<div class="docs-preview">
  <div class="row gap-4">
    <!-- Component Cards 1 (Modal trigger) -->
    <div class="col-12 md:col-6">
      <div class="card p-4 bg-body border border-subtle rounded-16 shadow-md transition duration-300 h-100% d-flex flex-col">
        <div class="hstack justify-between mb-4">
          <span class="badge badge-soft-danger font-700">Analytical Card</span>
          <span class="text-subtle text-xs">Updated 2m ago</span>
        </div>
        <h3 class="text-20 font-800 mb-2 mt-0">Premium Soft Visuals</h3>
        <p class="text-subtle text-sm leading-relaxed mb-5 mt-0">
          Aksara avoids intense, over-saturated colors in favor of balanced semantic shades, gentle alpha fills, and soft curves.
        </p>
        <div class="hstack gap-3 mt-auto">
          <!-- Button triggers the live reportModal below -->
          <button class="btn btn-sm btn-soft-primary hstack gap-2" data-modal="#reportModal">
            <span class="mdi mdi-chart-box-outline"></span> View Report
          </button>
          <!-- Tooltip on hover -->
          <button class="btn btn-sm btn-ghost" data-tooltip="Dismiss dashboard analytics" data-tooltip-placement="bottom">
            Dismiss
          </button>
        </div>
      </div>
    </div>

    <!-- Component Cards 2 (Toast trigger) -->
    <div class="col-12 md:col-6">
      <div class="card p-4 bg-body border border-subtle rounded-16 shadow-md transition duration-300 h-100% d-flex flex-col">
        <div class="hstack justify-between mb-4">
          <span class="badge badge-soft-success font-700">Interactive Status</span>
          <span class="badge badge-dot badge-success"></span>
        </div>
        <h3 class="text-20 font-800 mb-2 mt-0">Interactive Elements</h3>
        <p class="text-subtle text-sm leading-relaxed mb-5 mt-0">
          Combine stable responsive structures with dynamic inline hover modifications, tooltips, modals, and flexible spacing.
        </p>
        <div class="hstack gap-3 mt-auto">
          <!-- Button triggers the demoToast below -->
          <button class="btn btn-sm btn-success hstack gap-2" data-toast="#demoToast">
            <span class="mdi mdi-bell-ring-outline"></span> Trigger Toast
          </button>
          <span class="text-subtle text-xs font-600 hstack gap-1">
            <span class="mdi mdi-check-all text-success"></span> Vanilla JS Ready
          </span>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- 1. Interactive Demo Toast Stack -->
<div class="toast-stack toast-top-end" style="top: 80px; z-index: 1500; pointer-events: none;">
  <div id="demoToast" class="toast toast-success" data-toast-delay="4000" role="alert" style="pointer-events: auto;">
    <div class="toast-header">
      <span class="mdi mdi-check-circle mdi-18px me-2"></span>
      <strong>System Alert</strong>
      <span class="text-subtle text-xs ms-auto">Just now</span>
    </div>
    <div class="toast-body">Aksara UI prebuilt Vanilla JS framework is active and listening!</div>
  </div>
</div>

<!-- 2. Interactive Analytical Report Modal -->
<div id="reportModal" class="modal" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title font-800 hstack gap-2">
          <span class="mdi mdi-chart-bar-stacked text-primary"></span>
          Analytical System Report
        </h3>
        <button class="modal-close" data-modal-close>
          <span class="mdi mdi-close"></span>
        </button>
      </div>
      <div class="modal-body">
        <p class="text-subtle text-sm mt-0 mb-5">
          Here is a live analytical summary of your Aksara UI bundle size, rendering performance, and component counts:
        </p>

        <!-- Showcase Stats Grid -->
        <div class="row gap-4 mb-5">
          <div class="col-6">
            <div class="p-4 rounded-12 bg-subtle">
              <span class="text-subtle text-xs uppercase tracking-wider block mb-1">Core CSS Size</span>
              <strong class="text-xl font-900 text-body">24.8 KB</strong>
              <span class="text-success text-xs block font-600 mt-1">
                <span class="mdi mdi-arrow-down-bold"></span> -14% Gzipped
              </span>
            </div>
          </div>
          <div class="col-6">
            <div class="p-4 rounded-12 bg-subtle">
              <span class="text-subtle text-xs uppercase tracking-wider block mb-1">JS Footprint</span>
              <strong class="text-xl font-900 text-body">4.2 KB</strong>
              <span class="text-success text-xs block font-600 mt-1">
                <span class="mdi mdi-flash"></span> Pure Vanilla
              </span>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-12 bg-primary/6 text-primary text-sm font-600 hstack gap-2">
          <span class="mdi mdi-alert-circle-outline mdi-18px"></span>
          No compilers, preprocessors, or node environments required to load this.
        </div>
      </div>
      <div class="modal-footer hstack gap-3 justify-end">
        <button class="btn btn-ghost" data-modal-close>Close</button>
        <button class="btn btn-primary" data-modal-close>Acknowledge</button>
      </div>
    </div>

  </div>
</div>
::end

---

## Philosophy & Core Goals

Aksara UI is designed from the ground up for developer ergonomics, speed, and cross-cultural compatibility:

- **No Compiler Required**: Say goodbye to Node.js build processes, bundlers, and runtime JIT servers. Just drop the files and go.
- **RTL-First Logical Properties**: Modern layout naming based on flow start/end values instead of rigid left/right rules. Spacing adaptively shifts when your HTML direction switches.
- **Strict Variant Order**: No chaotic class names. Variants must obey a predictable parser grammar, bringing absolute structure and clean reading to complex utility stacking.
- **Flat Soft Design System**: A curated, modern, and harmonious color scheme built around soft borders, restrained shadows, and subtle translucent alpha fills.

---

## Class Syntax Grammar

Aksara enforces a strict, predictable syntax order for combined classes:

```text
[theme:][breakpoint:][state:]utility[-value][/level]
```

Variants **MUST ONLY** be composed in this sequence:

```text
theme ➔ breakpoint ➔ state ➔ utility
```

Here are some real-world examples:

- `md:col-4` — Grid span of 4 columns at medium viewports and up.
- `hover:bg-primary/80` — Darken the background color to 80% opacity on mouse hover.
- `dark:md:hover:border-primary` — Apply primary border on hover in dark mode at medium viewports.
- `dark:lg:focus:bg-primary/20` — Apply primary background at 20% alpha on focus in dark mode on large viewports.

---

## Quick Installation

Simply reference the prebuilt minified CSS and JavaScript bundle directly inside your HTML page:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Aksara UI App</title>
    <!-- Prebuilt Aksara UI CSS -->
    <link rel="stylesheet" href="aksara.min.css" />
  </head>
  <body>
    <div class="container py-5">
      <h1 class="font-900 text-40 mb-4">Hello Aksara UI!</h1>
      <button class="btn btn-primary shadow" data-tooltip="Welcome tooltip!">Explore Framework</button>
    </div>

    <!-- Aksara UI Vanilla JS Library -->
    <script src="aksara.min.js"></script>
  </body>
</html>
```
