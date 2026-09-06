# Carousel Sliders

Carousels are interactive slideshows that cycle through multiple slides of contents (like images, hero text alerts, or reviews panels) inside a single container.

---

## Interactive Carousel Showcase

Click the prev/next arrow controls (`‹` and `›`) below to transition slides. Aksara UI handles cycling offsets, display hidden flags, and slide index transitions programmatically.

::html
<div class="docs-preview">
  <div id="demoCarousel" class="carousel card border border-subtle bg-body shadow-sm" style="position: relative; overflow: hidden; min-height: 200px;">
    <!-- Slide 1 -->
    <div class="carousel-item p-10 bg-primary/10 text-primary hstack justify-center flex-col text-center" data-carousel-item style="min-height: 200px;">
      <h3 class="text-24 font-900 m-0 hstack gap-2 justify-center"><span class="mdi mdi-flash"></span> High-Performance Offline CSS</h3>
      <p class="text-subtle text-sm mt-2 mb-0" style="max-width:480px;">
        Aksara precompiles all spacing, sizing, colors, and layout combinations into static stylesheets, eliminating JIT lags entirely.
      </p>
    </div>

    <!-- Slide 2 -->
    <div class="carousel-item p-10 bg-success/10 text-success hstack justify-center flex-col text-center" data-carousel-item hidden style="min-height: 200px;">
      <h3 class="text-24 font-900 m-0 hstack gap-2 justify-center"><span class="mdi mdi-earth"></span> RTL-First Logical Architecture</h3>
      <p class="text-subtle text-sm mt-2 mb-0" style="max-width:480px;">
        Align pages with start/end properties natively. Your interfaces instantly mirror when switching HTML text directions.
      </p>
    </div>

    <!-- Slide 3 -->
    <div class="carousel-item p-10 bg-danger/10 text-danger hstack justify-center flex-col text-center" data-carousel-item hidden style="min-height: 200px;">
      <h3 class="text-24 font-900 m-0 hstack gap-2 justify-center"><span class="mdi mdi-cube-outline"></span> Pure Zero-Dependency JS</h3>
      <p class="text-subtle text-sm mt-2 mb-0" style="max-width:480px;">
        Clean vanilla JavaScript plugins with zero runtime footprint, complete accessibility focus trapping, and ARIA triggers.
      </p>
    </div>

    <!-- Prev / Next Controller Actions -->
    <button class="carousel-control carousel-prev hstack justify-center" data-carousel="prev" aria-label="Previous slide" style="position: absolute; top: 50%; start: 16px; transform: translateY(-50%); border: 0; background: rgba(var(--aksara-dark)/.16); color: var(--aksara-text-base); width: 36px; height: 36px; border-radius: 50%; cursor: pointer;">
      <span class="mdi mdi-chevron-left mdi-24px" style="line-height: 1;"></span>
    </button>

    <button class="carousel-control carousel-next hstack justify-center" data-carousel="next" aria-label="Next slide" style="position: absolute; top: 50%; end: 16px; transform: translateY(-50%); border: 0; background: rgba(var(--aksara-dark)/.16); color: var(--aksara-text-base); width: 36px; height: 36px; border-radius: 50%; cursor: pointer;">
      <span class="mdi mdi-chevron-right mdi-24px" style="line-height: 1;"></span>
    </button>

  </div>
</div>
::end

```html
<div id="myCarousel" class="carousel card">
  <!-- Slide Items: only the active item is visible (hidden attribute omitted) -->
  <div class="carousel-item" data-carousel-item>
    <h3>Slide Title One</h3>
  </div>
  <div class="carousel-item" data-carousel-item hidden>
    <h3>Slide Title Two</h3>
  </div>

  <!-- Prev / Next Controller Triggers -->
  <button class="carousel-control carousel-prev" data-carousel="prev">
    <span class="mdi mdi-chevron-left"></span>
  </button>
  <button class="carousel-control carousel-next" data-carousel="next">
    <span class="mdi mdi-chevron-right"></span>
  </button>
</div>
```

---

## HTML Structural Classes

Assemble slide decks using these basic classes:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">Class Identifier</th>
        <th style="width: 25%;">HTML Element Tag</th>
        <th style="width: 50%;">Usage & Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>carousel</code></td>
        <td><code>&lt;div&gt;</code></td>
        <td>The main slider container layout. Place coordinate anchors or relative borders here.</td>
      </tr>
      <tr>
        <td><code>carousel-item</code></td>
        <td><code>&lt;div&gt;</code></td>
        <td>A single slide panel. Must declare <code>data-carousel-item</code>. Apply <code>hidden</code> to hide inactive slides.</td>
      </tr>
      <tr>
        <td><code>carousel-control</code></td>
        <td><code>&lt;button&gt;</code></td>
        <td>Interactive trigger button containing layout alignments. Apply <code>data-carousel="prev"</code> or <code>data-carousel="next"</code>.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Declarative HTML Data API

Compose and hook controls markup-only:

- **`data-carousel-item`**: Place this attribute on all slide elements.
- **`data-carousel="prev"`**: Place this attribute on the trigger button designed to slide backward.
- **`data-carousel="next"`**: Place this attribute on the trigger button designed to slide forward.

---

## Programmatic JavaScript API

Control slideshows programmatically inside your scripts.

### Creating an Instance

```js
// Initialize programmatic sliders
const slider = Aksara.carousel("#myCarousel", {
  activeIndex: 0,
  autoplay: false,
  interval: 5000,
  pauseOnHover: true,
  keyboard: true,
  loop: true
});
```

### Methods

- **`slider.show(index)`**: Displays the slide matching that index. Safely wraps index values out-of-bounds (e.g. going beyond the maximum item length resets to `0`). Returns instance.
- **`slider.next()`**: Shifts forward to the next slide. Returns instance.
- **`slider.prev()`**: Shifts backward to the previous slide. Returns instance.
- **`slider.play()`**: Starts automatic cycling when `autoplay` is enabled. Returns instance.
- **`slider.pause()`**: Stops automatic cycling. Returns instance.
- **`slider.destroy()`**: Unbinds target click navigation events and deletes memory references.

---

## Custom Lifecycle Events

Carousels emit custom events when slides shift:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 35%;">Custom Event String</th>
        <th style="width: 65%;">Trigger Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>aksara:carousel:show</code></td>
        <td>Dispatched when a new slide is shown. Detail contains: <code>{ index, instance }</code>.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

### Listening Example

```js
const sliderEl = document.querySelector("#myCarousel");

sliderEl.addEventListener("aksara:carousel:show", (event) => {
  console.log("Slide shifted!", event.detail.index);
});
```
