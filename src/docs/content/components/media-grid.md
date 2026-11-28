# Media Grid

A media grid lays out one to four photos the way social feeds and chat apps do: a single image full width, two side by side, three with a tall lead image, or a 2×2 square. A dark overlay on the last cell shows how many more items there are. Images are cropped with `object-fit: cover`, so mixed aspect ratios still line up.

The previews on this page use gradient blocks in place of photos. In your markup, put an `<img>` in each cell.

::html
<div class="docs-preview">
  <div class="media-grid media-grid-3 max-w-[36rem]">
    <div class="media-grid-item media-grid-item-1"><div class="w-full h-full [background:linear-gradient(150deg,#d6e2e9,#5d7f95_60%,#2c4a5e)]" role="img" aria-label="Harbour at dusk"></div></div>
    <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(160deg,#f6d7b0,#c8794a)]" role="img" aria-label="Sand dunes"></div></div>
    <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(140deg,#cfe3c6,#4f7d4a)]" role="img" aria-label="Rice terraces"></div></div>
  </div>
</div>
::end

```html
<div class="media-grid media-grid-3">
  <div class="media-grid-item media-grid-item-1"><img src="harbour.jpg" alt="Harbour at dusk" /></div>
  <div class="media-grid-item"><img src="dunes.jpg" alt="Sand dunes" /></div>
  <div class="media-grid-item"><img src="terraces.jpg" alt="Rice terraces" /></div>
</div>
```

```js components
import { MediaGrid } from "@abydahana/aksara-ui/components";

MediaGrid({
  items: [
    { src: "harbour.jpg", alt: "Harbour at dusk" },
    { src: "dunes.jpg", alt: "Sand dunes" },
    { src: "terraces.jpg", alt: "Rice terraces" }
  ]
});
```

---

## Layouts

Pick the layout class that matches the number of items. Each cell is a `.media-grid-item` with an image inside.

::html
<div class="docs-preview">
  <div class="row gap-4">
    <div class="col-12 md:col-6">
      <h4 class="mt-0 mb-3 fw-bold text-sm">.media-grid-1</h4>
      <div class="media-grid media-grid-1">
        <div class="media-grid-item aspect-video"><div class="w-full h-full [background:linear-gradient(150deg,#d6e2e9,#5d7f95_60%,#2c4a5e)]" role="img" aria-label="Photo 1"></div></div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <h4 class="mt-0 mb-3 fw-bold text-sm">.media-grid-2</h4>
      <div class="media-grid media-grid-2 h-[220px]">
        <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(160deg,#f6d7b0,#c8794a)]" role="img" aria-label="Photo 1"></div></div>
        <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(135deg,#e8d5f0,#7a5c99)]" role="img" aria-label="Photo 2"></div></div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <h4 class="mt-0 mb-3 fw-bold text-sm">.media-grid-3</h4>
      <div class="media-grid media-grid-3 h-[240px]">
        <div class="media-grid-item media-grid-item-1"><div class="w-full h-full [background:linear-gradient(140deg,#cfe3c6,#4f7d4a)]" role="img" aria-label="Photo 1"></div></div>
        <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(150deg,#f3e1c7,#b55d4c)]" role="img" aria-label="Photo 2"></div></div>
        <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(145deg,#d9dde3,#3f4752)]" role="img" aria-label="Photo 3"></div></div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <h4 class="mt-0 mb-3 fw-bold text-sm">.media-grid-4</h4>
      <div class="media-grid media-grid-4 h-[240px]">
        <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(150deg,#d6e2e9,#5d7f95)]" role="img" aria-label="Photo 1"></div></div>
        <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(160deg,#f6d7b0,#c8794a)]" role="img" aria-label="Photo 2"></div></div>
        <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(140deg,#cfe3c6,#4f7d4a)]" role="img" aria-label="Photo 3"></div></div>
        <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(135deg,#e8d5f0,#7a5c99)]" role="img" aria-label="Photo 4"></div></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- One item: full width, up to 480px tall -->
<div class="media-grid media-grid-1">
  <div class="media-grid-item"><img src="1.jpg" alt="…" /></div>
</div>

<!-- Two items: side by side, 280px tall -->
<div class="media-grid media-grid-2">
  <div class="media-grid-item"><img src="1.jpg" alt="…" /></div>
  <div class="media-grid-item"><img src="2.jpg" alt="…" /></div>
</div>

<!-- Three items: the first spans both rows, 320px tall -->
<div class="media-grid media-grid-3">
  <div class="media-grid-item media-grid-item-1"><img src="1.jpg" alt="…" /></div>
  <div class="media-grid-item"><img src="2.jpg" alt="…" /></div>
  <div class="media-grid-item"><img src="3.jpg" alt="…" /></div>
</div>

<!-- Four items: 2×2, 320px tall -->
<div class="media-grid media-grid-4">
  <div class="media-grid-item"><img src="1.jpg" alt="…" /></div>
  <div class="media-grid-item"><img src="2.jpg" alt="…" /></div>
  <div class="media-grid-item"><img src="3.jpg" alt="…" /></div>
  <div class="media-grid-item"><img src="4.jpg" alt="…" /></div>
</div>
```

```js components
import { MediaGrid } from "@abydahana/aksara-ui/components";

const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map((src) => ({ src, alt: "…" }));

// The layout class follows the item count.
MediaGrid({ items: photos.slice(0, 1) }); // .media-grid-1
MediaGrid({ items: photos.slice(0, 2) }); // .media-grid-2
MediaGrid({ items: photos.slice(0, 3) }); // .media-grid-3
MediaGrid({ items: photos }); // .media-grid-4
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Columns</th><th>Height</th><th>Notes</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.media-grid-1</code></td><td>1</td><td>auto, max <code>480px</code></td><td>The image keeps its own height. Add <code>aspect-video</code> or another ratio to the item for a fixed shape.</td></tr>
      <tr><td><code>.media-grid-2</code></td><td>2 equal</td><td><code>280px</code></td><td></td></tr>
      <tr><td><code>.media-grid-3</code></td><td><code>2fr 1fr</code>, 2 rows</td><td><code>320px</code></td><td><code>.media-grid-item-1</code> spans both rows.</td></tr>
      <tr><td><code>.media-grid-4</code></td><td>2 × 2</td><td><code>320px</code></td><td></td></tr>
    </tbody>
  </table>
</div>
::end

---

## More Items Overlay

Show at most four cells. Put a `.media-grid-overlay` inside the last one with the count of hidden items. The overlay covers the cell with a 55% black scrim and centers its content.

::html
<div class="docs-preview">
  <div class="media-grid media-grid-4 max-w-[30rem] h-[280px]">
    <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(150deg,#f3e1c7,#b55d4c)]" role="img" aria-label="Photo 1"></div></div>
    <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(140deg,#cfe3c6,#4f7d4a)]" role="img" aria-label="Photo 2"></div></div>
    <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(150deg,#d6e2e9,#5d7f95)]" role="img" aria-label="Photo 3"></div></div>
    <div class="media-grid-item">
      <div class="w-full h-full [background:linear-gradient(145deg,#d9dde3,#3f4752)]" role="img" aria-label="Photo 4"></div>
      <div class="media-grid-overlay"><span class="fw-bold text-2xl text-[#fff]">+5</span></div>
    </div>
  </div>
</div>
::end

```html
<div class="media-grid media-grid-4">
  <div class="media-grid-item"><img src="1.jpg" alt="…" /></div>
  <div class="media-grid-item"><img src="2.jpg" alt="…" /></div>
  <div class="media-grid-item"><img src="3.jpg" alt="…" /></div>
  <div class="media-grid-item">
    <img src="4.jpg" alt="…" />
    <div class="media-grid-overlay"><span class="fw-bold text-2xl text-[#fff]">+5</span></div>
  </div>
</div>
```

```js components
import { MediaGrid } from "@abydahana/aksara-ui/components";

// 9 items, 4 shown: the fourth cell gets a "+5" overlay.
MediaGrid({
  items: Array.from({ length: 9 }, (_, i) => ({ src: `${i + 1}.jpg`, alt: "…" })),
  maxDisplay: 4
});
```

The scrim is always dark, so use a fixed white (`text-[#fff]`) rather than a theme color for the count.

---

## Gap, Radius, And Height

Cells are `.5rem` apart and each has the theme radius. Change the gap with `gap-*`, the height with `h-[…]`, and for one continuous rounded block, round the container, clip it, and square the cells.

::html
<div class="docs-preview">
  <div class="row gap-4">
    <div class="col-12 md:col-6">
      <h4 class="mt-0 mb-3 fw-bold text-sm">Seamless, gap-1</h4>
      <div class="media-grid media-grid-3 gap-1 rounded-[16px] overflow-hidden h-[220px]">
        <div class="media-grid-item media-grid-item-1 rounded-0"><div class="w-full h-full [background:linear-gradient(135deg,#e8d5f0,#7a5c99)]" role="img" aria-label="Photo 1"></div></div>
        <div class="media-grid-item rounded-0"><div class="w-full h-full [background:linear-gradient(160deg,#f6d7b0,#c8794a)]" role="img" aria-label="Photo 2"></div></div>
        <div class="media-grid-item rounded-0"><div class="w-full h-full [background:linear-gradient(140deg,#cfe3c6,#4f7d4a)]" role="img" aria-label="Photo 3"></div></div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <h4 class="mt-0 mb-3 fw-bold text-sm">Airy, gap-3</h4>
      <div class="media-grid media-grid-3 gap-3 h-[220px]">
        <div class="media-grid-item media-grid-item-1"><div class="w-full h-full [background:linear-gradient(135deg,#e8d5f0,#7a5c99)]" role="img" aria-label="Photo 1"></div></div>
        <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(160deg,#f6d7b0,#c8794a)]" role="img" aria-label="Photo 2"></div></div>
        <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(140deg,#cfe3c6,#4f7d4a)]" role="img" aria-label="Photo 3"></div></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- Seamless block -->
<div class="media-grid media-grid-3 gap-1 rounded-[16px] overflow-hidden h-[220px]">
  <div class="media-grid-item media-grid-item-1 rounded-0"><img src="1.jpg" alt="…" /></div>
  <div class="media-grid-item rounded-0"><img src="2.jpg" alt="…" /></div>
  <div class="media-grid-item rounded-0"><img src="3.jpg" alt="…" /></div>
</div>

<!-- More space between cells -->
<div class="media-grid media-grid-3 gap-3 h-[220px]">…</div>
```

```js components
import { MediaGrid } from "@abydahana/aksara-ui/components";

const photos = ["1.jpg", "2.jpg", "3.jpg"].map((src) => ({ src, alt: "…" }));

// Seamless block
MediaGrid({ items: photos, gap: 1, rounded: false, itemClassName: "rounded-0", className: "rounded-[16px] h-[220px]" });

// More space between cells
MediaGrid({ items: photos, gap: 3, rounded: false, className: "h-[220px]" });
```

---

## Feed Post

A media grid inside a post card, between the text and the reactions.

::html
<div class="docs-preview [background:var(--aksara-bg-body-secondary)]">
  <div class="card max-w-[34rem]">
    <div class="card-body">
      <div class="hstack gap-3">
        <span class="avatar avatar-md rounded-full avatar-danger" aria-hidden="true">CA</span>
        <div class="min-w-0">
          <div class="fw-semibold text-sm">Chloe Adams</div>
          <div class="text-subtle text-xs">Bristol · 3 h</div>
        </div>
        <button type="button" class="btn btn-ghost btn-sm btn-icon ms-auto" aria-label="More options"><span class="mdi mdi-dots-horizontal"></span></button>
      </div>
      <p class="text-sm mt-3 mb-3">Weekend trip done. Sunrise at Stonehenge was worth the 3 a.m. alarm.</p>
      <div class="media-grid media-grid-4 gap-1 rounded-[12px] overflow-hidden h-[300px]">
        <div class="media-grid-item rounded-0"><div class="w-full h-full [background:linear-gradient(160deg,#f6d7b0,#c8794a_60%,#7a3e22)]" role="img" aria-label="Stones at sunrise"></div></div>
        <div class="media-grid-item rounded-0"><div class="w-full h-full [background:linear-gradient(150deg,#d6e2e9,#5d7f95)]" role="img" aria-label="Misty hills"></div></div>
        <div class="media-grid-item rounded-0"><div class="w-full h-full [background:linear-gradient(150deg,#f3e1c7,#b55d4c)]" role="img" aria-label="Street food stall"></div></div>
        <div class="media-grid-item rounded-0">
          <div class="w-full h-full [background:linear-gradient(135deg,#e8d5f0,#7a5c99)]" role="img" aria-label="Pottery workshop"></div>
          <div class="media-grid-overlay"><span class="fw-bold text-2xl text-[#fff]">+8</span></div>
        </div>
      </div>
      <div class="hstack gap-1 mt-3">
        <button type="button" class="btn btn-ghost btn-sm"><span class="mdi mdi-heart-outline"></span> 128</button>
        <button type="button" class="btn btn-ghost btn-sm"><span class="mdi mdi-comment-outline"></span> 14</button>
        <button type="button" class="btn btn-ghost btn-sm ms-auto"><span class="mdi mdi-share-variant-outline"></span> Share</button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-body">
    <!-- author row -->
    <p class="text-sm">Weekend trip done.</p>
    <div class="media-grid media-grid-4 gap-1 rounded-[12px] overflow-hidden h-[300px]">
      <div class="media-grid-item rounded-0"><img src="1.jpg" alt="Stones at sunrise" /></div>
      <div class="media-grid-item rounded-0"><img src="2.jpg" alt="Misty hills" /></div>
      <div class="media-grid-item rounded-0"><img src="3.jpg" alt="Street food stall" /></div>
      <div class="media-grid-item rounded-0">
        <img src="4.jpg" alt="Pottery workshop" />
        <div class="media-grid-overlay"><span class="fw-bold text-2xl text-[#fff]">+8</span></div>
      </div>
    </div>
    <!-- reactions row -->
  </div>
</div>
```

```js components
import { Card, CardBody, MediaGrid } from "@abydahana/aksara-ui/components";

const morePhotos = Array.from({ length: 8 }, (_, i) => ({ src: `${i + 5}.jpg`, alt: "…" }));

Card({
  children: CardBody({
    children: `
      <!-- author row -->
      <p class="text-sm">Weekend trip done.</p>
      ${MediaGrid({
        items: [
          { src: "1.jpg", alt: "Stones at sunrise" },
          { src: "2.jpg", alt: "Misty hills" },
          { src: "3.jpg", alt: "Street food stall" },
          { src: "4.jpg", alt: "Pottery workshop" },
          ...morePhotos // 8 more, so the fourth cell shows "+8"
        ],
        gap: 1,
        itemClassName: "rounded-0",
        className: "h-[300px]"
      })}
      <!-- reactions row -->
    `
  })
});
```

---

## Chat Attachments

A smaller grid inside a message bubble.

::html
<div class="docs-preview">
  <div class="vstack gap-2 max-w-[22rem] ms-auto">
    <div class="media-grid media-grid-2 h-[150px] gap-1">
      <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(145deg,#d9dde3,#3f4752)]" role="img" aria-label="Whiteboard sketch"></div></div>
      <div class="media-grid-item"><div class="w-full h-full [background:linear-gradient(160deg,#f6d7b0,#c8794a)]" role="img" aria-label="Sticky notes"></div></div>
    </div>
    <div class="rounded-xl bg-primary/10 px-3 py-2 text-sm">Photos from today’s workshop. The second one has the final user flow.</div>
    <div class="text-subtle text-xs text-end">14:32 · Read</div>
  </div>
</div>
::end

```html
<div class="media-grid media-grid-2 h-[150px] gap-1">
  <div class="media-grid-item"><img src="sketch.jpg" alt="Whiteboard sketch" /></div>
  <div class="media-grid-item"><img src="notes.jpg" alt="Sticky notes" /></div>
</div>
```

```js components
import { MediaGrid } from "@abydahana/aksara-ui/components";

MediaGrid({
  items: [
    { src: "sketch.jpg", alt: "Whiteboard sketch" },
    { src: "notes.jpg", alt: "Sticky notes" }
  ],
  gap: 1,
  rounded: false,
  className: "h-[150px]"
});
```

---

## Listing Gallery

The three-item layout suits a property or product card, with the lead image doing most of the work.

::html
<div class="docs-preview">
  <div class="card max-w-[36rem] overflow-hidden">
    <div class="media-grid media-grid-3 gap-1 h-[260px]">
      <div class="media-grid-item media-grid-item-1 rounded-0"><div class="w-full h-full [background:linear-gradient(150deg,#f3e1c7,#b55d4c)]" role="img" aria-label="Living room"></div></div>
      <div class="media-grid-item rounded-0"><div class="w-full h-full [background:linear-gradient(140deg,#cfe3c6,#4f7d4a)]" role="img" aria-label="Kitchen"></div></div>
      <div class="media-grid-item rounded-0">
        <div class="w-full h-full [background:linear-gradient(150deg,#d6e2e9,#5d7f95)]" role="img" aria-label="Garden"></div>
        <div class="media-grid-overlay"><span class="text-sm fw-semibold text-[#fff]"><span class="mdi mdi-image-multiple-outline"></span> 12 photos</span></div>
      </div>
    </div>
    <div class="card-body">
      <div class="hstack justify-between">
        <h4 class="card-title m-0">Garden House, Big Sur</h4>
        <span class="badge badge-soft-success">Available</span>
      </div>
      <p class="card-subtitle mt-1">3 bedrooms · 2 baths · 180 m²</p>
      <div class="fw-bold">$240 <span class="text-subtle text-sm fw-semibold">/ night</span></div>
    </div>
  </div>
</div>
::end

```html
<div class="card overflow-hidden">
  <div class="media-grid media-grid-3 gap-1 h-[260px]">
    <div class="media-grid-item media-grid-item-1 rounded-0"><img src="living.jpg" alt="Living room" /></div>
    <div class="media-grid-item rounded-0"><img src="kitchen.jpg" alt="Kitchen" /></div>
    <div class="media-grid-item rounded-0">
      <img src="garden.jpg" alt="Garden" />
      <div class="media-grid-overlay">
        <span class="text-sm fw-semibold text-[#fff]"
          ><span class="mdi mdi-image-multiple-outline"></span> 12 photos</span
        >
      </div>
    </div>
  </div>
  <div class="card-body">…</div>
</div>
```

```js components
import { Card, CardBody, MediaGrid } from "@abydahana/aksara-ui/components";

Card({
  className: "overflow-hidden",
  children:
    MediaGrid({
      items: [
        { src: "living.jpg", alt: "Living room" },
        { src: "kitchen.jpg", alt: "Kitchen" },
        {
          src: "garden.jpg",
          alt: "Garden",
          overlayHtml:
            '<span class="text-sm fw-semibold text-[#fff]"><span class="mdi mdi-image-multiple-outline"></span> 12 photos</span>'
        }
      ],
      gap: 1,
      rounded: false,
      itemClassName: "rounded-0",
      className: "h-[260px]"
    }) + CardBody({ children: "…" })
});
```

---

## Opening A Viewer

The media grid has no built-in click behavior. Give each cell an index and a shared group id, then open your own lightbox or modal from one delegated listener. The `MediaGrid` string component writes `data-media-index` on every cell for this purpose.

```html
<div class="media-grid media-grid-2" data-media-id="post-418">
  <div class="media-grid-item cursor-pointer" data-media-index="0"><img src="1.jpg" alt="…" /></div>
  <div class="media-grid-item cursor-pointer" data-media-index="1"><img src="2.jpg" alt="…" /></div>
</div>
```

```js components
import { MediaGrid } from "@abydahana/aksara-ui/components";

// Sets data-media-id on the grid and data-media-index on each cell.
MediaGrid({
  items: [
    { src: "1.jpg", alt: "…" },
    { src: "2.jpg", alt: "…" }
  ],
  itemClickDataId: "post-418"
});
```

```js
document.addEventListener("click", (event) => {
  const cell = event.target.closest(".media-grid-item[data-media-index]");
  if (!cell) return;
  const group = cell.closest("[data-media-id]").dataset.mediaId;
  openViewer(group, Number(cell.dataset.mediaIndex));
});
```

For keyboard users, wrap each image in a link to the full-size file or make the cell a `<button>`.

---

## String Component

`MediaGrid` picks the layout from the number of items, renders at most `maxDisplay` cells, and adds the `+N` overlay to the last one when there are more. It returns an empty string for an empty list.

```ts
import { MediaGrid } from "@abydahana/aksara-ui/components";

MediaGrid({
  items: photos.map((p) => ({ src: p.url, alt: p.caption })),
  gap: 1,
  itemClickDataId: "post-418",
  onItemClickAttribute: "data-open-media"
});
// 7 photos → .media-grid-4 with "+3" on the fourth cell
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>items</code></td><td><code>MediaGridItem[]</code></td><td>required</td><td>Images to show, see below.</td></tr>
      <tr><td><code>maxDisplay</code></td><td><code>number</code></td><td><code>4</code></td><td>Cells to render. The rest are counted in the overlay.</td></tr>
      <tr><td><code>gap</code></td><td><code>1 | 2 | 3 | 4</code></td><td><code>2</code></td><td>Adds <code>gap-{n}</code>.</td></tr>
      <tr><td><code>rounded</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Rounds and clips the container (<code>rounded-[12px] overflow-hidden</code>).</td></tr>
      <tr><td><code>itemClickDataId</code></td><td><code>string</code></td><td>—</td><td>Written as <code>data-media-id</code> on the container, and as the value of <code>onItemClickAttribute</code> on each cell.</td></tr>
      <tr><td><code>onItemClickAttribute</code></td><td><code>string</code></td><td>—</td><td>Name of a data attribute to set on every cell, such as <code>"data-open-media"</code>. Event-handler names (<code>on*</code>) are rejected.</td></tr>
      <tr><td><code>itemClassName</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on every cell, e.g. <code>"rounded-0"</code> for a seamless block.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the container.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes on the container.</td></tr>
    </tbody>
  </table>
</div>
::end

### MediaGridItem

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Field</th><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>src</code></td><td><code>string</code></td><td>Image URL. Unsafe schemes such as <code>javascript:</code> are replaced.</td></tr>
      <tr><td><code>alt</code></td><td><code>string</code></td><td>Alt text. Defaults to <code>"Media item N"</code>.</td></tr>
      <tr><td><code>dataIndex</code></td><td><code>number</code></td><td>Value for <code>data-media-index</code>. Defaults to the item's position.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td>Extra classes on the cell.</td></tr>
      <tr><td><code>overlayHtml</code></td><td><code>string</code></td><td>Raw HTML shown in a <code>.media-grid-overlay</code> on the cell, in place of the <code>+N</code> counter.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>Extra attributes on the cell.</td></tr>
      <tr><td><code>caption</code></td><td><code>string</code></td><td>Accepted but not rendered by the grid.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.media-grid</code></td><td>Full-width grid with a <code>.5rem</code> gap.</td></tr>
      <tr><td><code>.media-grid-1</code> … <code>.media-grid-4</code></td><td>Layout for one to four items.</td></tr>
      <tr><td><code>.media-grid-item</code></td><td>Clipped, rounded cell on a subtle background. Its <code>img</code> covers the cell.</td></tr>
      <tr><td><code>.media-grid-item-1</code></td><td>Marks the lead cell; spans two rows in <code>.media-grid-3</code>.</td></tr>
      <tr><td><code>.media-grid-overlay</code></td><td>Full-cell dark scrim with centered content, for the hidden-item count.</td></tr>
    </tbody>
  </table>
</div>
::end
