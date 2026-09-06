# Spacing System

Aksara UI features a comprehensive, precompiled rem-based spacing system to manage margin, padding, flex/grid gaps, and negative offsets. It uses a quarter-rem scale where `1` equals `.25rem`, `2` equals `.5rem`, `3` equals `.75rem`, and `4` equals `1rem`. It relies strictly on **logical properties** for out-of-the-box RTL compliance.

---

## Interactive Spacing Showcase

Change card structures or alignments by mixing structural logical spacing utilities. Below are sample blocks rendered with precise `p-4`, `mb-3`, and `gap-4` values:

::html
<div class="docs-preview">
  <div class="card p-4 bg-body border border-subtle rounded-16">
    <span class="badge badge-soft-primary mb-3">Padding: p-4</span>
    <h4 class="mt-0 mb-2 font-800">Spacing Showcase Box</h4>
    <p class="text-subtle text-sm mb-5 mt-0">
      This card wraps content using 1rem of logical padding. Its label uses <code>mb-3</code> to push text down.
    </p>

    <div class="hstack gap-4 flex-wrap">
      <div class="p-2 rounded bg-subtle border text-xs">gap-4 Item A</div>
      <div class="p-2 rounded bg-subtle border text-xs">gap-4 Item B</div>
      <div class="p-2 rounded bg-subtle border text-xs">gap-4 Item C</div>
    </div>

  </div>
</div>
::end

```html
<div class="card p-4 bg-body border border-subtle rounded-16">
  <span class="badge badge-soft-primary mb-3">Padding: p-4</span>
  <h4 class="mt-0 mb-2 font-800">Spacing Showcase Box</h4>
  <p class="text-subtle text-sm mb-5 mt-0">...</p>

  <div class="hstack gap-4">...</div>
</div>
```

---

## Logical Spacing Mappings (RTL Naming Rules)

Aksara UI rejects legacy left/right naming conventions. To support RTL layouts seamlessly, we map all directions to logical block and inline property variants:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 20%;">Aksara Shorthand</th>
        <th style="width: 40%;">Underlying CSS Logical property</th>
        <th style="width: 40%;">Visual Direction behavior</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>ms-</code> / <code>ps-</code></td>
        <td><code>margin-inline-start</code> / <code>padding-inline-start</code></td>
        <td>Left side in LTR, **Right side** in RTL.</td>
      </tr>
      <tr>
        <td><code>me-</code> / <code>pe-</code></td>
        <td><code>margin-inline-end</code> / <code>padding-inline-end</code></td>
        <td>Right side in LTR, **Left side** in RTL.</td>
      </tr>
      <tr>
        <td><code>mt-</code> / <code>pt-</code></td>
        <td><code>margin-block-start</code> / <code>padding-block-start</code></td>
        <td>Top side.</td>
      </tr>
      <tr>
        <td><code>mb-</code> / <code>pb-</code></td>
        <td><code>margin-block-end</code> / <code>padding-block-end</code></td>
        <td>Bottom side.</td>
      </tr>
      <tr>
        <td><code>mx-</code> / <code>px-</code></td>
        <td><code>margin-inline</code> / <code>padding-inline</code></td>
        <td>Horizontal axes (Left & Right side).</td>
      </tr>
      <tr>
        <td><code>my-</code> / <code>py-</code></td>
        <td><code>margin-block</code> / <code>padding-block</code></td>
        <td>Vertical axes (Top & Bottom side).</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Precompiled Spacing Ranges

Spacing classes are precompiled ahead-of-time in standard ranges of **0 to 100 quarter-rem steps**:

- **Margin Utilities**: `m-{n}`, `mt-{n}`, `mb-{n}`, `ms-{n}`, `me-{n}`, `mx-{n}`, `my-{n}` (where `n` goes from `0` to `100`).
- **Padding Utilities**: `p-{n}`, `pt-{n}`, `pb-{n}`, `ps-{n}`, `pe-{n}`, `px-{n}`, `py-{n}` (where `n` goes from `0` to `100`).
- **Flex & Grid Gap Utilities**: `gap-{n}`, `row-gap-{n}`, `col-gap-{n}` (where `n` goes from `0` to `100`).

Examples: `p-1` is `.25rem`, `p-2` is `.5rem`, `p-3` is `.75rem`, `p-4` is `1rem`, and `gap-6` is `1.5rem`.

---

## Negative Spacing Modifiers

To pull adjacent elements closer or build custom overlay structures, apply negative margins. Simply prefix your classes with a dash:

- **Negative Classes**: `-m-{n}`, `-mt-{n}`, `-mb-{n}`, `-ms-{n}`, `-me-{n}`, `-mx-{n}`, `-my-{n}` (precompiled between `0` and `100` quarter-rem steps).

```html
<!-- Move card up to overlap a hero background by 2rem -->
<div class="card -mt-8 bg-body">...</div>
```

---

## Centering & Auto Margins

Align elements easily inside parent blocks using standard auto margin utilities:

- **Auto Classes**: `m-auto`, `mt-auto`, `mb-auto`, `ms-auto`, `me-auto`, `mx-auto`, `my-auto`.

```html
<!-- Horizontally center a responsive box -->
<div class="w-full mx-auto" style="max-width:200px;">Centered Content</div>
```
