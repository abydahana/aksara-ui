# Spacing System

Aksara UI ships a precompiled rem-based spacing system for margin, padding, flex/grid gaps and inset. It uses a single `0..5` scale: `0` = `0`, `1` = `.25rem`, `2` = `.5rem`, `3` = `1rem`, `4` = `1.5rem` and `5` = `3rem`. Any other value, including negative margins, is an arbitrary class (`p-[.75rem]`, `mt-[2rem]`, `mt-[-1rem]`), generated on demand by `Aksara.init()`. It relies strictly on **logical properties** for out-of-the-box RTL compliance.

---

## Interactive Spacing Showcase

Change card structures or alignments by mixing structural logical spacing utilities. Below are sample blocks rendered with precise `p-4`, `mb-3`, and `gap-4` values:

::html
<div class="docs-preview">
  <div class="card p-4 bg-body border border-subtle rounded-[16px]">
    <span class="badge badge-soft-primary mb-3">Padding: p-4</span>
    <h4 class="mt-0 mb-2 font-extrabold">Spacing Showcase Box</h4>
    <p class="text-subtle text-sm mb-5 mt-0">
      This card wraps content using 1.5rem of logical padding. Its label uses <code>mb-3</code> to push text down.
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
<div class="card p-4 bg-body border border-subtle rounded-[16px]">
  <span class="badge badge-soft-primary mb-3">Padding: p-4</span>
  <h4 class="mt-0 mb-2 font-extrabold">Spacing Showcase Box</h4>
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
        <th class="w-[20%]">Aksara Shorthand</th>
        <th class="w-[40%]">Underlying CSS Logical property</th>
        <th class="w-[40%]">Visual Direction behavior</th>
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
        <th class="w-[20%]">Step</th>
        <th class="w-[30%]">Rem Value</th>
        <th class="w-[25%]">Pixel (Base 16px)</th>
        <th class="w-[25%]">Example Classes</th>
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
- **Gap Utilities**: `gap-{0..5}`, `gap-x-{0..5}`, `gap-y-{0..5}`, `row-gap-{0..5}`, `col-gap-{0..5}`, and the grid gutters `g-{0..5}`, `gx-{0..5}`, `gy-{0..5}`.
- **Other values**: `p-[.75rem]`, `gap-[1.25rem]`, `md:px-[2rem]` (arbitrary, generated on demand). There is no `p-6` or `p-24`.

---

## Negative Margins

To pull elements closer or make them overlap, put a negative value in an arbitrary margin: `mt-[-1.5rem]`, `mx-[-1rem]`, `ms-[-4px]`. There are no `-`-prefixed classes; the value carries the sign, so any length works (`m-[-2px]`, `mt-[-50%]`). `ms-*` / `me-*` are logical, so they flip in RTL. Padding cannot be negative in CSS, so only margins (and the inset utilities, see [Position](#/layout/position)) take negative values. Typical uses: a card lifted over a hero banner, an avatar overlapping a profile cover, and a full-bleed block that cancels its container's padding.

::html
<div class="docs-preview">
  <div class="row gap-4">
    <div class="col-12 md:col-6">
      <div class="rounded-lg overflow-hidden border border-subtle">
        <div class="h-[96px] [background:linear-gradient(135deg,#2f4858,#121110)]" role="img" aria-label="Cover"></div>
        <div class="px-4 pb-4">
          <span class="avatar avatar-xl avatar-primary rounded-full mt-[-3rem] border-4 border-[var(--aksara-surface)]">MC</span>
          <p class="m-0 mt-2 fw-semibold">Maya Chen</p>
          <p class="m-0 text-sm text-subtle">Product designer · London</p>
        </div>
      </div>
      <p class="mt-2 mb-0 text-xs text-subtle"><code>mt-[-3rem]</code> pulls the avatar up over the cover.</p>
    </div>
    <div class="col-12 md:col-6">
      <div class="rounded-lg overflow-hidden">
        <div class="px-4 pt-4 pb-5 [background:linear-gradient(135deg,#2f4858,#121110)] text-[#f7f6f4]">
          <p class="m-0 text-sm opacity-[.75]">Balance</p>
          <p class="m-0 text-2xl fw-bold">$12,480.00</p>
        </div>
        <div class="card mx-3 mt-[-1.5rem]">
          <div class="card-body hstack justify-between">
            <span class="text-sm">Next payout</span>
            <span class="fw-semibold">Dec 2</span>
          </div>
        </div>
      </div>
      <p class="mt-2 mb-0 text-xs text-subtle"><code>mt-[-1.5rem]</code> lifts the card over the banner.</p>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <p class="m-0 mb-3 fw-semibold">Recent activity</p>
          <div class="mx-[-1.5rem] px-4 py-2 bg-subtle text-sm">Full-bleed row: <code>mx-[-1.5rem]</code> cancels the card body's padding, <code>px-4</code> restores it inside.</div>
          <p class="m-0 mt-3 text-sm text-subtle">Regular content keeps the padding.</p>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- Avatar overlapping a cover image -->
<div class="h-[96px]"><!-- cover --></div>
<span class="avatar avatar-xl rounded-full mt-[-3rem] border-4">MC</span>

<!-- Card lifted over a hero banner by 1.5rem -->
<div class="px-4 pt-4 pb-5">...</div>
<div class="card mx-3 mt-[-1.5rem]">...</div>

<!-- Full-bleed row inside a padded card body -->
<div class="mx-[-1.5rem] px-4 py-2 bg-subtle">...</div>
```

---

## Centering & Auto Margins

Align elements easily inside parent blocks using standard auto margin utilities:

- **Auto Classes**: `m-auto`, `mt-auto`, `mb-auto`, `ms-auto`, `me-auto`, `mx-auto`, `my-auto`.

```html
<!-- Horizontally center a responsive box -->
<div class="w-full mx-auto max-w-[200px]">Centered Content</div>
```
