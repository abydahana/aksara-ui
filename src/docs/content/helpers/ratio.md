# Ratio

`.ratio` keeps a box at a fixed width-to-height proportion, whatever its width. Put one child inside (an `<iframe>`, `<video>`, `<img>` or any element) and it fills the box exactly. Use it for embeds, thumbnails and media placeholders that must not jump while loading.

---

## How It Works

The box is as wide as its container; its height comes from `--aksara-aspect-ratio`, the height as a percentage of the width (`height / width × 100`). The single child is stretched over the whole box, and images and videos are cropped to fit (`object-fit: cover`).

::html
<div class="docs-preview">
  <div class="max-w-[420px]">
    <div class="ratio ratio-16x9 rounded-[12px] overflow-hidden border border-subtle bg-primary/10">
      <div class="vstack gap-1 justify-center [align-items:center]">
        <span class="fw-semibold">ratio-16x9</span>
        <span class="text-subtle text-sm">height = 56.25% of width</span>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Product tour" allowfullscreen></iframe>
</div>
```

---

## Available Ratios

Each box below is the same width (220px), so only the height changes.

::html
<div class="docs-preview">
  <div class="docs-row [align-items:flex-start]">
    <div class="w-[220px]"><div class="ratio ratio-1x1 rounded-[12px] overflow-hidden bg-primary/10"><div class="vstack justify-center [align-items:center]"><span class="fw-semibold">1x1</span><span class="text-xs text-subtle">100%</span></div></div></div>
    <div class="w-[220px]"><div class="ratio ratio-4x3 rounded-[12px] overflow-hidden bg-success/10"><div class="vstack justify-center [align-items:center]"><span class="fw-semibold">4x3</span><span class="text-xs text-subtle">75%</span></div></div></div>
    <div class="w-[220px]"><div class="ratio ratio-3x2 rounded-[12px] overflow-hidden bg-info/10"><div class="vstack justify-center [align-items:center]"><span class="fw-semibold">3x2</span><span class="text-xs text-subtle">66.67%</span></div></div></div>
    <div class="w-[220px]"><div class="ratio ratio-16x9 rounded-[12px] overflow-hidden bg-warning/15"><div class="vstack justify-center [align-items:center]"><span class="fw-semibold">16x9</span><span class="text-xs text-subtle">56.25%</span></div></div></div>
    <div class="w-[220px]"><div class="ratio ratio-2x1 rounded-[12px] overflow-hidden bg-danger/10"><div class="vstack justify-center [align-items:center]"><span class="fw-semibold">2x1</span><span class="text-xs text-subtle">50%</span></div></div></div>
    <div class="w-[220px]"><div class="ratio ratio-21x9 rounded-[12px] overflow-hidden bg-secondary/10"><div class="vstack justify-center [align-items:center]"><span class="fw-semibold">21x9</span><span class="text-xs text-subtle">42.86%</span></div></div></div>
  </div>
  <h4 class="mt-5 mb-3 fw-semibold text-sm">Portrait</h4>
  <div class="docs-row [align-items:flex-start]">
    <div class="w-[150px]"><div class="ratio ratio-3x4 rounded-[12px] overflow-hidden bg-primary/10"><div class="vstack justify-center [align-items:center]"><span class="fw-semibold">3x4</span><span class="text-xs text-subtle">133.33%</span></div></div></div>
    <div class="w-[150px]"><div class="ratio ratio-9x16 rounded-[12px] overflow-hidden bg-success/10"><div class="vstack justify-center [align-items:center]"><span class="fw-semibold">9x16</span><span class="text-xs text-subtle">177.78%</span></div></div></div>
  </div>
</div>
::end

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Class</th><th>Width : height</th><th><code>--aksara-aspect-ratio</code></th><th>Typical use</th></tr></thead>
    <tbody>
      <tr><td><code>ratio-1x1</code></td><td>1 : 1</td><td>100%</td><td>Avatars, product tiles, Instagram posts</td></tr>
      <tr><td><code>ratio-4x3</code></td><td>4 : 3</td><td>75%</td><td>Classic photos, slides</td></tr>
      <tr><td><code>ratio-3x2</code></td><td>3 : 2</td><td>66.67%</td><td>Camera photos, blog thumbnails</td></tr>
      <tr><td><code>ratio-16x9</code> (default)</td><td>16 : 9</td><td>56.25%</td><td>Video embeds, hero images</td></tr>
      <tr><td><code>ratio-2x1</code></td><td>2 : 1</td><td>50%</td><td>Banners, social cards</td></tr>
      <tr><td><code>ratio-21x9</code></td><td>21 : 9</td><td>42.86%</td><td>Cinematic banners</td></tr>
      <tr><td><code>ratio-3x4</code></td><td>3 : 4</td><td>133.33%</td><td>Portraits, book covers</td></tr>
      <tr><td><code>ratio-9x16</code></td><td>9 : 16</td><td>177.78%</td><td>Stories, Reels, Shorts</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Custom Ratio

Set `--aksara-aspect-ratio` to `height ÷ width × 100%`. For 5 : 4 that is `4 ÷ 5 × 100 = 80%`; for 1.91 : 1 (link previews) it is `52.36%`.

::html
<div class="docs-preview">
  <div class="docs-row [align-items:flex-start]">
    <div class="w-[220px]"><div class="ratio rounded-[12px] overflow-hidden bg-info/10 [--aksara-aspect-ratio:80%]"><div class="vstack justify-center [align-items:center]"><span class="fw-semibold">5 : 4</span><span class="text-xs text-subtle">80%</span></div></div></div>
    <div class="w-[220px]"><div class="ratio rounded-[12px] overflow-hidden bg-warning/15 [--aksara-aspect-ratio:52.36%]"><div class="vstack justify-center [align-items:center]"><span class="fw-semibold">1.91 : 1</span><span class="text-xs text-subtle">52.36%</span></div></div></div>
  </div>
</div>
::end

```html
<div class="ratio [--aksara-aspect-ratio:80%]">...</div>
```

On elements that are not wrappers, the CSS `aspect-ratio` property also works as an arbitrary utility: `class="[aspect-ratio:5/4]"`.

---

## Video Embed

::html
<div class="docs-preview">
  <div class="max-w-[560px]">
    <div class="ratio ratio-16x9 rounded-[14px] overflow-hidden [background:linear-gradient(150deg,#2f3437,#121110)]">
      <div class="vstack gap-2 justify-center [align-items:center] text-[#f7f6f4]">
        <span class="hstack justify-center rounded-full w-[56px] h-[56px] [background:rgb(255_255_255/.14)] text-[1.75rem]"><span class="mdi mdi-play"></span></span>
        <span class="text-sm opacity-[.75]">An &lt;iframe&gt; fills this box</span>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="ratio ratio-16x9 rounded-[14px] overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Product tour"
    allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
```

---

## Image Thumbnails

Images keep the box's shape and are cropped, so a grid of different photos stays even.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 sm:col-6 md:col-4">
      <div class="card h-100">
        <div class="ratio ratio-3x2"><div class="[background:linear-gradient(160deg,#c9d6df,#2f4858)]" role="img" aria-label="Lake"></div></div>
        <div class="card-body"><h5 class="card-title">Lake District</h5><p class="card-text">3 : 2 thumbnail</p></div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="card h-100">
        <div class="ratio ratio-3x2"><div class="[background:linear-gradient(160deg,#d8cfb8,#33402a)]" role="img" aria-label="Forest"></div></div>
        <div class="card-body"><h5 class="card-title">Yosemite</h5><p class="card-text">Same ratio, any source size</p></div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-4">
      <div class="card h-100">
        <div class="ratio ratio-3x2"><div class="[background:linear-gradient(160deg,#cfe3ea,#1d4e63)]" role="img" aria-label="Coast"></div></div>
        <div class="card-body"><h5 class="card-title">Big Sur</h5><p class="card-text">Cropped with object-fit</p></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="ratio ratio-3x2">
    <img src="lake.jpg" alt="Lake District" />
  </div>
  <div class="card-body">...</div>
</div>
```

---

## Loading Placeholder

Reserve the space before media loads so the page does not shift:

::html
<div class="docs-preview">
  <div class="max-w-[420px]">
    <div class="ratio ratio-16x9 rounded-[12px] overflow-hidden">
      <div class="skeleton skeleton-wave rounded-[0]"></div>
    </div>
  </div>
</div>
::end

```html
<div class="ratio ratio-16x9">
  <div class="skeleton skeleton-wave"></div>
</div>
```

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Class / property</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>ratio</code></td><td>Wrapper; full width, height from <code>--aksara-aspect-ratio</code> (16 : 9 by default). Its direct child fills it.</td></tr>
      <tr><td><code>ratio-{w}x{h}</code></td><td><code>1x1</code>, <code>4x3</code>, <code>3x2</code>, <code>16x9</code>, <code>2x1</code>, <code>21x9</code>, <code>3x4</code>, <code>9x16</code>.</td></tr>
      <tr><td><code>--aksara-aspect-ratio</code></td><td>Any percentage (height ÷ width × 100) for a custom ratio.</td></tr>
    </tbody>
  </table>
</div>
::end
