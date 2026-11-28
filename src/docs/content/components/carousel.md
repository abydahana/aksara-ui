# Carousel

A sliding carousel with touch swipe and mouse drag, cross-fade mode, several slides per view (responsive), autoplay that pauses on hover, focus, interaction and hidden tabs, keyboard control, auto-generated indicators, a counter, a progress bar and thumbnails. It works from markup alone: `Aksara.init()` picks up every `.carousel`.

---

## Basic Slider

Swipe or drag the slides, use the arrows, the dots, or ←/→ when the carousel has focus. Empty `.carousel-indicators` are filled with one dot per slide.

::html
<div class="docs-preview">
  <div class="carousel rounded-[16px]">
    <div class="carousel-item" data-carousel-item>
      <div class="carousel-img aspect-[2/1] [background:linear-gradient(160deg,#c9d6df_0%,#6f8fa6_45%,#2f4858_100%)]" role="img" aria-label="Mountain lake"></div>
      <div class="carousel-caption"><strong>Quiet mornings</strong><div class="text-sm">Swipe, drag or use the arrows.</div></div>
    </div>
    <div class="carousel-item" data-carousel-item>
      <div class="carousel-img aspect-[2/1] [background:linear-gradient(160deg,#d8cfb8_0%,#7c8a5c_50%,#33402a_100%)]" role="img" aria-label="Forest road"></div>
      <div class="carousel-caption"><strong>Long roads</strong><div class="text-sm">Slides move on a track with easing.</div></div>
    </div>
    <div class="carousel-item" data-carousel-item>
      <div class="carousel-img aspect-[2/1] [background:linear-gradient(160deg,#cfe3ea_0%,#4f97b0_50%,#1d4e63_100%)]" role="img" aria-label="Coastline"></div>
      <div class="carousel-caption"><strong>Open water</strong><div class="text-sm">Loops back to the first slide.</div></div>
    </div>
    <button class="carousel-control carousel-prev" data-carousel="prev" aria-label="Previous slide"><span class="mdi mdi-chevron-left"></span></button>
    <button class="carousel-control carousel-next" data-carousel="next" aria-label="Next slide"><span class="mdi mdi-chevron-right"></span></button>
    <div class="carousel-indicators"></div>
  </div>
</div>
::end

```html
<div class="carousel">
  <div class="carousel-item" data-carousel-item>
    <img class="carousel-img" src="slide-1.jpg" alt="..." />
    <div class="carousel-caption">...</div>
  </div>
  <div class="carousel-item" data-carousel-item>...</div>
  <div class="carousel-item" data-carousel-item>...</div>

  <button class="carousel-control carousel-prev" data-carousel="prev" aria-label="Previous slide">
    <span class="mdi mdi-chevron-left"></span>
  </button>
  <button class="carousel-control carousel-next" data-carousel="next" aria-label="Next slide">
    <span class="mdi mdi-chevron-right"></span>
  </button>
  <div class="carousel-indicators"></div>
</div>
```

```js components
import { Carousel } from "@abydahana/aksara-ui/components";

// Renders the slides, prev/next controls and one indicator per slide.
Carousel({
  slides: [
    { content: '<img class="carousel-img" src="slide-1.jpg" alt="..." /><div class="carousel-caption">...</div>' },
    { content: "..." },
    { content: "..." }
  ]
});
```

On init the items are moved into `.carousel-viewport > .carousel-track`; you can also write that structure yourself.

---

## Autoplay With Progress

`data-carousel-autoplay="true"` advances every `data-carousel-interval` ms (5000 by default). Playback pauses while the pointer is over the carousel, while it has keyboard focus, during a drag and when the tab is hidden. `.carousel-progress` shows the time left; `.carousel-counter` with `data-carousel-current` / `data-carousel-total` shows the position.

::html
<div class="docs-preview">
  <div class="carousel rounded-[16px]" data-carousel-autoplay="true" data-carousel-interval="4000">
    <div class="carousel-item" data-carousel-item>
      <div class="vstack gap-2 justify-center p-5 min-h-[240px] [background:linear-gradient(135deg,#1c1a18,#3d3a37)] text-[#f7f6f4]">
        <span class="badge badge-soft-light [align-self:flex-start]">New</span>
        <h3 class="m-0">Aksara 1.5 is here</h3>
        <p class="m-0 opacity-[.75]">A calmer palette, Tom Select forms and a swipeable carousel.</p>
      </div>
    </div>
    <div class="carousel-item" data-carousel-item>
      <div class="vstack gap-2 justify-center p-5 min-h-[240px] [background:linear-gradient(135deg,#14532d,#1b8056)] text-[#f7f6f4]">
        <span class="badge badge-soft-light [align-self:flex-start]">Forms</span>
        <h3 class="m-0">Validation without code</h3>
        <p class="m-0 opacity-[.75]">Add data-validate to a form and you are done.</p>
      </div>
    </div>
    <div class="carousel-item" data-carousel-item>
      <div class="vstack gap-2 justify-center p-5 min-h-[240px] [background:linear-gradient(135deg,#1f3a5f,#1f71aa)] text-[#f7f6f4]">
        <span class="badge badge-soft-light [align-self:flex-start]">Docs</span>
        <h3 class="m-0">Every component, every state</h3>
        <p class="m-0 opacity-[.75]">Copy-ready samples for light and dark.</p>
      </div>
    </div>
    <span class="carousel-counter"><span data-carousel-current></span> / <span data-carousel-total></span></span>
    <button class="carousel-control carousel-prev" data-carousel="prev" aria-label="Previous slide"><span class="mdi mdi-chevron-left"></span></button>
    <button class="carousel-control carousel-next" data-carousel="next" aria-label="Next slide"><span class="mdi mdi-chevron-right"></span></button>
    <div class="carousel-progress"><div class="carousel-progress-bar"></div></div>
  </div>
</div>
::end

```html
<div class="carousel" data-carousel-autoplay="true" data-carousel-interval="4000">
  ...slides...
  <span class="carousel-counter"><span data-carousel-current></span> / <span data-carousel-total></span></span>
  <div class="carousel-progress"><div class="carousel-progress-bar"></div></div>
</div>
```

```js components
import { Carousel } from "@abydahana/aksara-ui/components";

const slides = [{ content: "..." }, { content: "..." }, { content: "..." }];

Carousel({
  slides,
  counter: true,
  progress: true,
  attributes: { "data-carousel-autoplay": "true", "data-carousel-interval": "4000" }
});
```

---

## Fade

`.carousel-fade` (or `data-carousel-effect="fade"`) cross-fades instead of sliding. Swipe still works.

::html
<div class="docs-preview">
  <div class="carousel carousel-fade rounded-[16px]" data-carousel-autoplay="true">
    <div class="carousel-item" data-carousel-item><div class="carousel-img aspect-[12/5] [background:linear-gradient(170deg,#f3d9b1_0%,#d79a5b_55%,#7a4a2a_100%)]" role="img" aria-label="Desert dunes"></div></div>
    <div class="carousel-item" data-carousel-item><div class="carousel-img aspect-[12/5] [background:linear-gradient(170deg,#3b3f58_0%,#1f2235_60%,#0f1020_100%)]" role="img" aria-label="City at night"></div></div>
    <div class="carousel-item" data-carousel-item><div class="carousel-img aspect-[12/5] [background:linear-gradient(170deg,#f2f4f7_0%,#b9c4d0_55%,#5c6b7a_100%)]" role="img" aria-label="Snowy peaks"></div></div>
    <div class="carousel-indicators"></div>
  </div>
</div>
::end

```html
<div class="carousel carousel-fade" data-carousel-autoplay="true">...</div>
```

```js components
import { Carousel } from "@abydahana/aksara-ui/components";

const slides = [{ content: "..." }, { content: "..." }, { content: "..." }];

Carousel({ slides, fade: true, attributes: { "data-carousel-autoplay": "true" } });
```

---

## Multiple Slides Per View

`data-carousel-per-view` shows several slides at once, `data-carousel-gap` spaces them, and breakpoint variants (`data-carousel-per-view-md`, `-lg`, ...) make it responsive. `data-carousel-step` moves more than one slide per click. Indicators below the slides use `carousel-indicators-static`.

::html
<div class="docs-preview">
  <div class="carousel" data-carousel-per-view="1" data-carousel-per-view-sm="2" data-carousel-per-view-lg="3" data-carousel-gap="16" data-carousel-loop="false">
    <div class="carousel-item" data-carousel-item>
      <div class="card h-100"><div class="carousel-img aspect-[3/2] [background:linear-gradient(135deg,#ece6dc,#cbbfae)]" role="img" aria-label=""></div><div class="card-body"><h5 class="card-title">Linen shirt</h5><p class="card-text">$28.90</p></div></div>
    </div>
    <div class="carousel-item" data-carousel-item>
      <div class="card h-100"><div class="carousel-img aspect-[3/2] [background:linear-gradient(135deg,#e2e6da,#a9b39a)]" role="img" aria-label=""></div><div class="card-body"><h5 class="card-title">Canvas tote</h5><p class="card-text">$14.90</p></div></div>
    </div>
    <div class="carousel-item" data-carousel-item>
      <div class="card h-100"><div class="carousel-img aspect-[3/2] [background:linear-gradient(135deg,#e6d9cf,#9c7a63)]" role="img" aria-label=""></div><div class="card-body"><h5 class="card-title">Leather wallet</h5><p class="card-text">$34.90</p></div></div>
    </div>
    <div class="carousel-item" data-carousel-item>
      <div class="card h-100"><div class="carousel-img aspect-[3/2] [background:linear-gradient(135deg,#dfe3ea,#8d97a8)]" role="img" aria-label=""></div><div class="card-body"><h5 class="card-title">Wool beanie</h5><p class="card-text">$11.90</p></div></div>
    </div>
    <div class="carousel-item" data-carousel-item>
      <div class="card h-100"><div class="carousel-img aspect-[3/2] [background:linear-gradient(135deg,#efe9e1,#c2b5a3)]" role="img" aria-label=""></div><div class="card-body"><h5 class="card-title">Ceramic mug</h5><p class="card-text">$8.90</p></div></div>
    </div>
    <button class="carousel-control carousel-prev" data-carousel="prev" aria-label="Previous"><span class="mdi mdi-chevron-left"></span></button>
    <button class="carousel-control carousel-next" data-carousel="next" aria-label="Next"><span class="mdi mdi-chevron-right"></span></button>
    <div class="carousel-indicators carousel-indicators-static"></div>
  </div>
</div>
::end

```html
<div
  class="carousel"
  data-carousel-per-view="1"
  data-carousel-per-view-sm="2"
  data-carousel-per-view-lg="3"
  data-carousel-gap="16"
  data-carousel-loop="false"
>
  <div class="carousel-item" data-carousel-item><div class="card">...</div></div>
  ...
  <div class="carousel-indicators carousel-indicators-static"></div>
</div>
```

```js components
import { Card, Carousel } from "@abydahana/aksara-ui/components";

Carousel({
  slides: [{ content: Card({ children: "..." }) }, { content: "..." }],
  controls: false,
  staticIndicators: true, // empty row; the runtime adds one dot per page
  attributes: {
    "data-carousel-per-view": "1",
    "data-carousel-per-view-sm": "2",
    "data-carousel-per-view-lg": "3",
    "data-carousel-gap": "16",
    "data-carousel-loop": "false"
  }
});
```

With `data-carousel-loop="false"` the arrows hide at the ends and dragging past the edge rubber-bands.

---

## Thumbnails

Any `[data-carousel-to]` element jumps to a slide. Thumbnails outside the carousel go in a container with `data-carousel-for="#id"`: clicks reach the right carousel and the active thumbnail stays highlighted and scrolled into view.

::html
<div class="docs-preview">
  <div id="thumbCarousel" class="carousel rounded-[14px]">
    <div class="carousel-item" data-carousel-item><div class="carousel-img aspect-[12/7] [background:linear-gradient(150deg,#d6e2e9,#5d7f95)]" role="img" aria-label="Photo 1"></div></div>
    <div class="carousel-item" data-carousel-item><div class="carousel-img aspect-[12/7] [background:linear-gradient(150deg,#e9dfcf,#a8835c)]" role="img" aria-label="Photo 2"></div></div>
    <div class="carousel-item" data-carousel-item><div class="carousel-img aspect-[12/7] [background:linear-gradient(150deg,#dde7d8,#6d8a5e)]" role="img" aria-label="Photo 3"></div></div>
    <div class="carousel-item" data-carousel-item><div class="carousel-img aspect-[12/7] [background:linear-gradient(150deg,#e4dbe6,#8a6f93)]" role="img" aria-label="Photo 4"></div></div>
    <span class="carousel-counter"><span data-carousel-current></span> / <span data-carousel-total></span></span>
  </div>
  <div class="carousel-thumbs" data-carousel-for="#thumbCarousel">
    <button class="carousel-thumb" data-carousel-to="0" aria-label="Photo 1"><span class="[display:block] w-[100%] h-[100%] [background:linear-gradient(150deg,#d6e2e9,#5d7f95)]"></span></button>
    <button class="carousel-thumb" data-carousel-to="1" aria-label="Photo 2"><span class="[display:block] w-[100%] h-[100%] [background:linear-gradient(150deg,#e9dfcf,#a8835c)]"></span></button>
    <button class="carousel-thumb" data-carousel-to="2" aria-label="Photo 3"><span class="[display:block] w-[100%] h-[100%] [background:linear-gradient(150deg,#dde7d8,#6d8a5e)]"></span></button>
    <button class="carousel-thumb" data-carousel-to="3" aria-label="Photo 4"><span class="[display:block] w-[100%] h-[100%] [background:linear-gradient(150deg,#e4dbe6,#8a6f93)]"></span></button>
  </div>
</div>
::end

```html
<div id="gallery" class="carousel">...slides...</div>

<div class="carousel-thumbs" data-carousel-for="#gallery">
  <button class="carousel-thumb" data-carousel-to="0">
    <img src="thumb-1.jpg" alt="" />
  </button>
  ...
</div>
```

```js components
import { Carousel } from "@abydahana/aksara-ui/components";

const slides = [{ content: "..." }, { content: "..." }, { content: "..." }];

Carousel({ id: "gallery", slides, controls: false, indicators: false }) +
  `<div class="carousel-thumbs" data-carousel-for="#gallery">
    <button class="carousel-thumb" data-carousel-to="0">
      <img src="thumb-1.jpg" alt="" />
    </button>
    ...
  </div>`;
```

---

## Auto Height

`.carousel-auto-height` (or `data-carousel-auto-height="true"`) animates the viewport to the height of the active slide, for testimonials or text of different lengths.

::html
<div class="docs-preview">
  <div class="carousel carousel-auto-height card">
    <div class="carousel-item" data-carousel-item>
      <div class="card-body">
        <p class="m-0 text-[1.125rem]">“Aksara let us ship a consistent admin UI with no build step.”</p>
        <p class="text-subtle text-sm mb-0 mt-3">— Maya Chen, CTO</p>
      </div>
    </div>
    <div class="carousel-item" data-carousel-item>
      <div class="card-body">
        <p class="m-0 text-[1.125rem]">“The forms are the best part: Tom Select styled out of the box, validation by attribute, and dark mode that actually looks good. We deleted a few thousand lines of custom CSS after the switch.”</p>
        <p class="text-subtle text-sm mb-0 mt-3">— Alex Morgan, Frontend lead</p>
      </div>
    </div>
    <div class="carousel-item" data-carousel-item>
      <div class="card-body">
        <p class="m-0 text-[1.125rem]">“Simple.”</p>
        <p class="text-subtle text-sm mb-0 mt-3">— Sofia Patel</p>
      </div>
    </div>
    <div class="hstack justify-between p-[0_1.25rem_1.25rem]">
      <div class="carousel-indicators carousel-indicators-static m-[0!important]"></div>
      <div class="hstack gap-2">
        <button class="btn btn-plain btn-sm btn-icon" data-carousel="prev" aria-label="Previous"><span class="mdi mdi-chevron-left"></span></button>
        <button class="btn btn-plain btn-sm btn-icon" data-carousel="next" aria-label="Next"><span class="mdi mdi-chevron-right"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="carousel carousel-auto-height card">
  <div class="carousel-item" data-carousel-item>...</div>
  ...
  <button class="btn btn-plain btn-sm btn-icon" data-carousel="prev">...</button>
  <button class="btn btn-plain btn-sm btn-icon" data-carousel="next">...</button>
</div>
```

```js components
import { Button, Carousel } from "@abydahana/aksara-ui/components";

const control = (direction, icon) =>
  Button({
    plain: true,
    size: "sm",
    className: "btn-icon",
    attributes: { "data-carousel": direction },
    children: `<span class="mdi ${icon}"></span>`
  });

Carousel({
  className: "carousel-auto-height card",
  slides: [{ content: "..." }, { content: "..." }],
  indicators: false,
  controlsHtml: control("prev", "mdi-chevron-left") + control("next", "mdi-chevron-right")
});
```

Any element with `data-carousel="prev|next|play|pause|toggle"` or `data-carousel="2"` controls the carousel it sits in.

---

## Options

Set options with `data-carousel-*` attributes or pass them to `Aksara.carousel()`.

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Option</th><th>Attribute</th><th>Default</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>autoplay</code></td><td><code>data-carousel-autoplay</code></td><td><code>false</code></td><td>Advance automatically.</td></tr>
      <tr><td><code>interval</code></td><td><code>data-carousel-interval</code></td><td><code>5000</code></td><td>Milliseconds per slide.</td></tr>
      <tr><td><code>pauseOnHover</code></td><td><code>data-carousel-pause-on-hover</code></td><td><code>true</code></td><td>Pause while hovered.</td></tr>
      <tr><td><code>loop</code></td><td><code>data-carousel-loop</code></td><td><code>true</code></td><td>Wrap around at the ends.</td></tr>
      <tr><td><code>swipe</code></td><td><code>data-carousel-swipe</code></td><td><code>true</code></td><td>Touch and pen swipe.</td></tr>
      <tr><td><code>drag</code></td><td><code>data-carousel-drag</code></td><td><code>true</code></td><td>Mouse drag (needs <code>swipe</code>).</td></tr>
      <tr><td><code>keyboard</code></td><td><code>data-carousel-keyboard</code></td><td><code>true</code></td><td>←/→, Home, End when focused (mirrored in RTL).</td></tr>
      <tr><td><code>effect</code></td><td><code>data-carousel-effect</code></td><td><code>"slide"</code></td><td><code>"slide"</code> or <code>"fade"</code>.</td></tr>
      <tr><td><code>perView</code></td><td><code>data-carousel-per-view(-bp)</code></td><td><code>1</code></td><td>Slides visible at once, per breakpoint.</td></tr>
      <tr><td><code>gap</code></td><td><code>data-carousel-gap</code></td><td><code>0</code></td><td>Space between slides (number = px, or any CSS length).</td></tr>
      <tr><td><code>step</code></td><td><code>data-carousel-step</code></td><td><code>1</code></td><td>Slides moved per next/prev.</td></tr>
      <tr><td><code>speed</code></td><td><code>data-carousel-speed</code></td><td><code>500</code> / <code>600</code></td><td>Transition length in ms (slide / fade).</td></tr>
      <tr><td><code>autoHeight</code></td><td><code>data-carousel-auto-height</code></td><td><code>false</code></td><td>Fit the viewport to the active slide.</td></tr>
      <tr><td><code>activeIndex</code></td><td><code>data-carousel-active-index</code></td><td>first <code>.active</code> or 0</td><td>Starting slide.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## JavaScript API

```js
const carousel = Aksara.carousel("#hero", {
  autoplay: false,
  pauseOnHover: true,
  activeIndex: 0,
  interval: 6000,
  perView: 2,
  gap: "1rem"
});

carousel.next();
carousel.prev();
carousel.show(2); // go to slide index 2
carousel.play(); // start autoplay
carousel.pause(); // stop autoplay
carousel.update(); // re-read slides after adding or removing items
carousel.destroy();

document.querySelector("#hero").addEventListener("aksara:carousel:show", (event) => {
  console.log(`Slide ${event.detail.from} → ${event.detail.index}`);
});
```

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Event</th><th>Detail</th></tr></thead>
    <tbody>
      <tr><td><code>aksara:carousel:show</code></td><td><code>{ index, from, instance }</code></td></tr>
      <tr><td><code>aksara:carousel:play</code> / <code>aksara:carousel:pause</code></td><td><code>{ instance }</code></td></tr>
      <tr><td><code>aksara:carousel:destroy</code></td><td><code>{ instance }</code></td></tr>
    </tbody>
  </table>
</div>
::end

---

## Accessibility

- The carousel gets `role="region"` and `aria-roledescription="carousel"`; each slide is a `group` labelled "n / total" (override with your own `aria-label`).
- Slides outside the view are `inert` and `aria-hidden`, so keyboard focus never lands on hidden content.
- Autoplay stops while the carousel has focus, and motion is reduced when the user prefers reduced motion.
- Give arrows and thumbnails an `aria-label`.

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table">
    <thead><tr><th>Class</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><code>carousel</code>, <code>carousel-item</code></td><td>Root and slide.</td></tr>
      <tr><td><code>carousel-viewport</code>, <code>carousel-track</code></td><td>Clipping area and moving strip (created automatically).</td></tr>
      <tr><td><code>carousel-fade</code>, <code>carousel-auto-height</code></td><td>Cross-fade mode, height follows the slide.</td></tr>
      <tr><td><code>carousel-img</code></td><td>Full-bleed cover image.</td></tr>
      <tr><td><code>carousel-caption</code></td><td>Blurred caption over the image.</td></tr>
      <tr><td><code>carousel-control</code>, <code>carousel-prev</code>, <code>carousel-next</code></td><td>Round arrow buttons.</td></tr>
      <tr><td><code>carousel-indicators</code>, <code>carousel-indicator</code>, <code>carousel-indicators-static</code></td><td>Dots (overlay or below).</td></tr>
      <tr><td><code>carousel-counter</code></td><td>"2 / 5" badge.</td></tr>
      <tr><td><code>carousel-progress</code>, <code>carousel-progress-bar</code></td><td>Autoplay timer.</td></tr>
      <tr><td><code>carousel-thumbs</code>, <code>carousel-thumb</code></td><td>Thumbnail strip.</td></tr>
    </tbody>
  </table>
</div>
::end
