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

Aksara UI uses a streamlined, Bootstrap-compatible **0 to 5** spacing scale for optimal visual harmony and predictability:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 20%;">Step</th>
        <th style="width: 30%;">Rem Value</th>
        <th style="width: 25%;">Pixel (Base 16px)</th>
        <th style="width: 25%;">Example Classes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>0</code></td>
        <td><code>0</code></td>
        <td><code>0px</code></td>
        <td><code>m-0</code>, <code>p-0</code>, <code>gap-0</code></td>
      </tr>
      <tr>
        <td><code>1</code></td>
        <td><code>.25rem</code></td>
        <td><code>4px</code></td>
        <td><code>m-1</code>, <code>p-1</code>, <code>gap-1</code></td>
      </tr>
      <tr>
        <td><code>2</code></td>
        <td><code>.5rem</code></td>
        <td><code>8px</code></td>
        <td><code>m-2</code>, <code>p-2</code>, <code>gap-2</code></td>
      </tr>
      <tr>
        <td><code>3</code></td>
        <td><code>1rem</code></td>
        <td><code>16px</code></td>
        <td><code>m-3</code>, <code>p-3</code>, <code>gap-3</code></td>
      </tr>
      <tr>
        <td><code>4</code></td>
        <td><code>1.5rem</code></td>
        <td><code>24px</code></td>
        <td><code>m-4</code>, <code>p-4</code>, <code>gap-4</code></td>
      </tr>
      <tr>
        <td><code>5</code></td>
        <td><code>3rem</code></td>
        <td><code>48px</code></td>
        <td><code>m-5</code>, <code>p-5</code>, <code>gap-5</code></td>
      </tr>
    </tbody>
  </table>
</div>
::end

- **Margin Utilities**: `m-{0..5}`, `mt-{0..5}`, `mb-{0..5}`, `ms-{0..5}`, `me-{0..5}`, `mx-{0..5}`, `my-{0..5}`.
- **Padding Utilities**: `p-{0..5}`, `pt-{0..5}`, `pb-{0..5}`, `ps-{0..5}`, `pe-{0..5}`, `px-{0..5}`, `py-{0..5}`.
- **Gap Utilities**: `gap-{0..5}`, `row-gap-{0..5}`, `col-gap-{0..5}`.

---

## Negative Spacing Modifiers

To pull adjacent elements closer or create overlap layouts, apply negative margins (precompiled for steps `1` to `5`):

- **Negative Classes**: `-m-{1..5}`, `-mt-{1..5}`, `-mb-{1..5}`, `-ms-{1..5}`, `-me-{1..5}`, `-mx-{1..5}`, `-my-{1..5}`.

```html
<!-- Move card up to overlap a hero background by 1.5rem -->
<div class="card -mt-4 bg-body">...</div>
```

---

## Centering & Auto Margins

Align elements easily inside parent blocks using standard auto margin utilities:

- **Auto Classes**: `m-auto`, `mt-auto`, `mb-auto`, `ms-auto`, `me-auto`, `mx-auto`, `my-auto`.

```html
<!-- Horizontally center a responsive box -->
<div class="w-full mx-auto" style="max-width:200px;">Centered Content</div>
```
