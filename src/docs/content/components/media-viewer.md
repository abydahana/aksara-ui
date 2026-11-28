# Media Viewer

The media viewer is a full-screen lightbox for photos. It opens from a Media Grid, from any button or link, or from every image inside a gallery container, and it adds everything people expect from a photo app: previous and next buttons with a counter, captions, a sliding track that follows your finger, arrow keys, zoom (buttons, keyboard, double click, ctrl or ⌘ + wheel) and drag to pan while zoomed. An optional sidebar holds comments or details next to the image and stacks under it on phones.

::html
<div class="docs-preview">
  <div class="card max-w-[36rem] w-full">
    <div class="card-body vstack gap-3">
      <div class="hstack gap-3">
        <span class="avatar avatar-sm avatar-primary rounded-full"><span class="avatar-initials">MC</span></span>
        <div class="flex-1">
          <div class="fw-semibold text-sm">Maya Chen</div>
          <div class="text-xs text-subtle">Lake District · 2h</div>
        </div>
      </div>
      <p class="m-0 text-sm">Three days, two summits and one very wet tent. Tap a photo to browse all five.</p>
      <div class="media-grid media-grid-4 gap-2 rounded-[12px] overflow-hidden" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Lake at first light&quot;,&quot;caption&quot;:&quot;Windermere at 6:40 am, before the boats were out.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Pine forest trail&quot;,&quot;caption&quot;:&quot;The trail above Grasmere.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f6d7b0'/%3E%3Cstop offset='1' stop-color='%23c8794a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff1d6' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%238a4b32'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%235a2f22'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Ridge at sunrise&quot;,&quot;caption&quot;:&quot;Sunrise from the ridge. Worth the 5 am alarm.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Valley at dusk&quot;,&quot;caption&quot;:&quot;Back down just as the light turned purple.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Coast road&quot;,&quot;caption&quot;:&quot;A last stop on the coast road home.&quot;}]">
        <div class="media-grid-item media-grid-item-1 position-relative overflow-hidden cursor-pointer" data-media-index="0" data-media-open="#mediaViewerPost" role="button" tabindex="0" aria-label="Open Lake at first light"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E" alt="Lake at first light" class="media-grid-img w-full h-full object-cover block"></div>
        <div class="media-grid-item position-relative overflow-hidden cursor-pointer" data-media-index="1" data-media-open="#mediaViewerPost" role="button" tabindex="0" aria-label="Open Pine forest trail"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E" alt="Pine forest trail" class="media-grid-img w-full h-full object-cover block"></div>
        <div class="media-grid-item position-relative overflow-hidden cursor-pointer" data-media-index="2" data-media-open="#mediaViewerPost" role="button" tabindex="0" aria-label="Open Ridge at sunrise"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f6d7b0'/%3E%3Cstop offset='1' stop-color='%23c8794a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff1d6' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%238a4b32'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%235a2f22'/%3E%3C/svg%3E" alt="Ridge at sunrise" class="media-grid-img w-full h-full object-cover block"></div>
        <div class="media-grid-item has-overlay position-relative overflow-hidden cursor-pointer" data-media-index="3" data-media-open="#mediaViewerPost" role="button" tabindex="0" aria-label="Open Valley at dusk">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E" alt="Valley at dusk" class="media-grid-img w-full h-full object-cover block">
          <div class="media-grid-overlay position-absolute inset-0 d-flex align-items-center justify-content-center"><span class="media-grid-overlay-text fw-bold text-light text-2xl">+1</span></div>
        </div>
      </div>
    </div>
  </div>
  <div id="mediaViewerPost" class="media-modal" role="dialog" aria-modal="true" aria-label="Photos from Maya Chen" aria-hidden="true" tabindex="-1" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Lake at first light&quot;,&quot;caption&quot;:&quot;Windermere at 6:40 am, before the boats were out.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Pine forest trail&quot;,&quot;caption&quot;:&quot;The trail above Grasmere.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f6d7b0'/%3E%3Cstop offset='1' stop-color='%23c8794a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff1d6' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%238a4b32'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%235a2f22'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Ridge at sunrise&quot;,&quot;caption&quot;:&quot;Sunrise from the ridge. Worth the 5 am alarm.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Valley at dusk&quot;,&quot;caption&quot;:&quot;Back down just as the light turned purple.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Coast road&quot;,&quot;caption&quot;:&quot;A last stop on the coast road home.&quot;}]" data-media-index="0">
    <div class="media-modal-stage" data-media-stage>
      <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close"><span class="mdi mdi-close"></span></button>
      <span class="media-modal-counter" aria-live="polite"><span data-media-current>1</span> / <span data-media-total>5</span></span>
      <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous" disabled><span class="mdi mdi-chevron-left"></span></button>
      <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next"><span class="mdi mdi-chevron-right"></span></button>
      <figure class="media-modal-figure">
        <img class="media-modal-image" data-media-image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E" alt="Lake at first light" draggable="false">
        <figcaption class="media-modal-caption" data-media-caption>Windermere at 6:40 am, before the boats were out.</figcaption>
      </figure>
      <div class="media-modal-zoom" role="group" aria-label="Zoom">
        <button type="button" data-media-zoom-out aria-label="Zoom out" title="Zoom out"><span class="mdi mdi-magnify-minus-outline"></span></button>
        <button type="button" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen"><span class="mdi mdi-fit-to-screen-outline"></span></button>
        <button type="button" data-media-zoom-in aria-label="Zoom in" title="Zoom in"><span class="mdi mdi-magnify-plus-outline"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- The grid carries the full list; each cell opens the viewer at its index -->
<div
  class="media-grid media-grid-4 gap-2 rounded-[12px] overflow-hidden"
  data-media-items='[{"src":"lake.jpg","alt":"Lake at first light","caption":"Windermere at 6:40 am."}, …]'
>
  <div
    class="media-grid-item media-grid-item-1"
    data-media-index="0"
    data-media-open="#mediaViewer"
    role="button"
    tabindex="0"
    aria-label="Open Lake at first light"
  >
    <img src="lake.jpg" alt="Lake at first light" class="media-grid-img" />
  </div>
  …
</div>

<div
  id="mediaViewer"
  class="media-modal"
  role="dialog"
  aria-modal="true"
  aria-label="Media viewer"
  aria-hidden="true"
  tabindex="-1"
  data-media-items="[…]"
  data-media-index="0"
>
  <div class="media-modal-stage" data-media-stage>
    <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close">
      <span class="mdi mdi-close"></span>
    </button>
    <span class="media-modal-counter" aria-live="polite"
      ><span data-media-current>1</span> / <span data-media-total>5</span></span
    >
    <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous">
      <span class="mdi mdi-chevron-left"></span>
    </button>
    <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next">
      <span class="mdi mdi-chevron-right"></span>
    </button>
    <figure class="media-modal-figure">
      <img class="media-modal-image" data-media-image src="lake.jpg" alt="Lake at first light" draggable="false" />
      <figcaption class="media-modal-caption" data-media-caption>Windermere at 6:40 am.</figcaption>
    </figure>
    <div class="media-modal-zoom" role="group" aria-label="Zoom">
      <button type="button" data-media-zoom-out aria-label="Zoom out">
        <span class="mdi mdi-magnify-minus-outline"></span>
      </button>
      <button type="button" data-media-zoom-reset aria-label="Fit to screen">
        <span class="mdi mdi-fit-to-screen-outline"></span>
      </button>
      <button type="button" data-media-zoom-in aria-label="Zoom in">
        <span class="mdi mdi-magnify-plus-outline"></span>
      </button>
    </div>
  </div>
</div>
```

```js components
import { MediaGrid, MediaPreviewModal } from "@abydahana/aksara-ui/components";

const photos = [
  { src: "lake.jpg", alt: "Lake at first light", caption: "Windermere at 6:40 am, before the boats were out." },
  { src: "forest.jpg", alt: "Pine forest trail", caption: "The trail above Grasmere." },
  { src: "ridge.jpg", alt: "Ridge at sunrise", caption: "Sunrise from the ridge. Worth the 5 am alarm." },
  { src: "valley.jpg", alt: "Valley at dusk", caption: "Back down just as the light turned purple." },
  { src: "coast.jpg", alt: "Coast road", caption: "A last stop on the coast road home." }
];

// Clicking a cell opens #mediaViewer at that photo; all five photos can be browsed,
// including the one hidden behind "+1".
MediaGrid({ items: photos, maxDisplay: 4, viewer: "#mediaViewer" });

MediaPreviewModal({ id: "mediaViewer", items: photos });
```

---

## Opening From a Media Grid

Pass `viewer: "#id"` to `MediaGrid` and render a `MediaPreviewModal` with that id anywhere on the page. The grid then serializes **every** item (not only the visible ones) into `data-media-items` on its container, and each cell gets `data-media-open`, `data-media-index`, `role="button"` and `tabindex="0"`. A click, Enter or Space on a cell loads the grid's list into the viewer and opens it at that cell. The `+N` cell opens at its own photo, so people can keep swiping to the hidden ones.

::html
<div class="docs-preview">
  <div class="card max-w-[30rem] w-full">
    <div class="card-header hstack justify-between">
      <span class="fw-semibold">Harbour Studio, Manchester</span>
      <span class="badge badge-soft-success">Available</span>
    </div>
    <div class="card-body vstack gap-3">
      <div class="media-grid media-grid-3 gap-2 rounded-[12px] overflow-hidden" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f3e1c7'/%3E%3Cstop offset='1' stop-color='%23b55d4c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff4e2' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%236e3a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%233f4752'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;View from the roof terrace&quot;,&quot;caption&quot;:&quot;Roof terrace, west-facing.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Canal at dusk&quot;,&quot;caption&quot;:&quot;The canal side entrance.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Courtyard garden&quot;,&quot;caption&quot;:&quot;Courtyard garden, seats 24.&quot;}]">
        <div class="media-grid-item media-grid-item-1 position-relative overflow-hidden cursor-pointer" data-media-index="0" data-media-open="#mediaViewerVenue" role="button" tabindex="0" aria-label="Open View from the roof terrace"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f3e1c7'/%3E%3Cstop offset='1' stop-color='%23b55d4c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff4e2' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%236e3a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%233f4752'/%3E%3C/svg%3E" alt="View from the roof terrace" class="media-grid-img w-full h-full object-cover block"></div>
        <div class="media-grid-item position-relative overflow-hidden cursor-pointer" data-media-index="1" data-media-open="#mediaViewerVenue" role="button" tabindex="0" aria-label="Open Canal at dusk"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E" alt="Canal at dusk" class="media-grid-img w-full h-full object-cover block"></div>
        <div class="media-grid-item position-relative overflow-hidden cursor-pointer" data-media-index="2" data-media-open="#mediaViewerVenue" role="button" tabindex="0" aria-label="Open Courtyard garden"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E" alt="Courtyard garden" class="media-grid-img w-full h-full object-cover block"></div>
      </div>
      <div class="hstack justify-between">
        <span class="text-sm text-subtle">Up to 40 guests · Ancoats</span>
        <span class="fw-bold">$1,240.00 / day</span>
      </div>
    </div>
  </div>
  <div id="mediaViewerVenue" class="media-modal" role="dialog" aria-modal="true" aria-label="Harbour Studio photos" aria-hidden="true" tabindex="-1" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f3e1c7'/%3E%3Cstop offset='1' stop-color='%23b55d4c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff4e2' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%236e3a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%233f4752'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;View from the roof terrace&quot;,&quot;caption&quot;:&quot;Roof terrace, west-facing.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Canal at dusk&quot;,&quot;caption&quot;:&quot;The canal side entrance.&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Courtyard garden&quot;,&quot;caption&quot;:&quot;Courtyard garden, seats 24.&quot;}]" data-media-index="0">
    <div class="media-modal-stage" data-media-stage>
      <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close"><span class="mdi mdi-close"></span></button>
      <span class="media-modal-counter" aria-live="polite"><span data-media-current>1</span> / <span data-media-total>3</span></span>
      <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous" disabled><span class="mdi mdi-chevron-left"></span></button>
      <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next"><span class="mdi mdi-chevron-right"></span></button>
      <figure class="media-modal-figure">
        <img class="media-modal-image" data-media-image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f3e1c7'/%3E%3Cstop offset='1' stop-color='%23b55d4c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff4e2' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%236e3a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%233f4752'/%3E%3C/svg%3E" alt="View from the roof terrace" draggable="false">
        <figcaption class="media-modal-caption" data-media-caption>Roof terrace, west-facing.</figcaption>
      </figure>
      <div class="media-modal-zoom" role="group" aria-label="Zoom">
        <button type="button" data-media-zoom-out aria-label="Zoom out" title="Zoom out"><span class="mdi mdi-magnify-minus-outline"></span></button>
        <button type="button" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen"><span class="mdi mdi-fit-to-screen-outline"></span></button>
        <button type="button" data-media-zoom-in aria-label="Zoom in" title="Zoom in"><span class="mdi mdi-magnify-plus-outline"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="media-grid media-grid-3 gap-2 rounded-[12px] overflow-hidden" data-media-items="[…]">
  <div
    class="media-grid-item media-grid-item-1"
    data-media-index="0"
    data-media-open="#venueViewer"
    role="button"
    tabindex="0"
    aria-label="Open View from the roof terrace"
  >
    <img src="terrace.jpg" alt="View from the roof terrace" class="media-grid-img" />
  </div>
  <div class="media-grid-item" data-media-index="1" data-media-open="#venueViewer" role="button" tabindex="0">…</div>
  <div class="media-grid-item" data-media-index="2" data-media-open="#venueViewer" role="button" tabindex="0">…</div>
</div>
```

```js components
import { MediaGrid, MediaPreviewModal } from "@abydahana/aksara-ui/components";

const venue = [
  { src: "terrace.jpg", alt: "View from the roof terrace", caption: "Roof terrace, west-facing." },
  { src: "canal.jpg", alt: "Canal at dusk", caption: "The canal side entrance." },
  { src: "courtyard.jpg", alt: "Courtyard garden", caption: "Courtyard garden, seats 24." }
];

MediaGrid({ items: venue, viewer: "#venueViewer" });
MediaPreviewModal({ id: "venueViewer", items: venue }); // optional: a cell click loads the grid's list anyway
```

The viewer's own `items` can stay empty: a click on a cell loads the grid's list into it. The counter and the previous/next buttons are always rendered and only hidden while the viewer holds fewer than two items, so they appear as soon as a grid, a gallery or `setItems()` fills it. Pass the same `items` to the viewer only when you also open it from code before any cell was clicked.

---

## Opening From Any Trigger

Any element with `data-media-open="#viewer"` opens the viewer. Add `data-media-index` to start at a specific item of the viewer's own list. Buttons, links and non-button elements all work; non-button triggers also respond to Enter and Space.

::html
<div class="docs-preview">
  <div class="card max-w-[30rem] w-full">
    <div class="card-header hstack justify-between">
      <span class="fw-semibold">Travel journal</span>
      <button class="btn btn-soft-primary btn-sm" type="button" data-media-open="#mediaViewerJournal" data-media-index="0"><span class="mdi mdi-image-multiple-outline"></span> View all 4</button>
    </div>
    <div class="list-group list-group-flush">
      <div class="list-group-item hstack gap-3">
        <button class="border-0 p-0 bg-transparent cursor-pointer rounded-[8px] overflow-hidden w-[56px] h-[40px] [flex-shrink:0]" type="button" data-media-open="#mediaViewerJournal" data-media-index="0" aria-label="Open Day 1 photo"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E" alt="" class="w-full h-full object-cover block"></button>
        <div class="flex-1"><div class="fw-semibold text-sm">Day 1 · Edinburgh</div><div class="text-xs text-subtle">Arthur's Seat at sunrise</div></div>
        <button class="btn btn-ghost btn-sm" type="button" data-media-open="#mediaViewerJournal" data-media-index="0">Open</button>
      </div>
      <div class="list-group-item hstack gap-3">
        <button class="border-0 p-0 bg-transparent cursor-pointer rounded-[8px] overflow-hidden w-[56px] h-[40px] [flex-shrink:0]" type="button" data-media-open="#mediaViewerJournal" data-media-index="1" aria-label="Open Day 2 photo"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E" alt="" class="w-full h-full object-cover block"></button>
        <div class="flex-1"><div class="fw-semibold text-sm">Day 2 · Cairngorms</div><div class="text-xs text-subtle">Forest trail to Loch an Eilein</div></div>
        <button class="btn btn-ghost btn-sm" type="button" data-media-open="#mediaViewerJournal" data-media-index="1">Open</button>
      </div>
      <div class="list-group-item hstack gap-3">
        <button class="border-0 p-0 bg-transparent cursor-pointer rounded-[8px] overflow-hidden w-[56px] h-[40px] [flex-shrink:0]" type="button" data-media-open="#mediaViewerJournal" data-media-index="2" aria-label="Open Day 3 photo"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E" alt="" class="w-full h-full object-cover block"></button>
        <div class="flex-1"><div class="fw-semibold text-sm">Day 3 · Isle of Skye</div><div class="text-xs text-subtle">Two photos from the coast</div></div>
        <button class="btn btn-ghost btn-sm" type="button" data-media-open="#mediaViewerJournal" data-media-index="2">Open</button>
      </div>
    </div>
  </div>
  <div id="mediaViewerJournal" class="media-modal" role="dialog" aria-modal="true" aria-label="Travel journal photos" aria-hidden="true" tabindex="-1" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Arthur's Seat at sunrise&quot;,&quot;caption&quot;:&quot;Day 1 · Edinburgh&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Forest trail to Loch an Eilein&quot;,&quot;caption&quot;:&quot;Day 2 · Cairngorms&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Neist Point&quot;,&quot;caption&quot;:&quot;Day 3 · Isle of Skye&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Coast road at dusk&quot;,&quot;caption&quot;:&quot;Day 3 · Isle of Skye&quot;}]" data-media-index="0">
    <div class="media-modal-stage" data-media-stage>
      <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close"><span class="mdi mdi-close"></span></button>
      <span class="media-modal-counter" aria-live="polite"><span data-media-current>1</span> / <span data-media-total>4</span></span>
      <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous" disabled><span class="mdi mdi-chevron-left"></span></button>
      <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next"><span class="mdi mdi-chevron-right"></span></button>
      <figure class="media-modal-figure">
        <img class="media-modal-image" data-media-image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E" alt="Arthur's Seat at sunrise" draggable="false">
        <figcaption class="media-modal-caption" data-media-caption>Day 1 · Edinburgh</figcaption>
      </figure>
      <div class="media-modal-zoom" role="group" aria-label="Zoom">
        <button type="button" data-media-zoom-out aria-label="Zoom out" title="Zoom out"><span class="mdi mdi-magnify-minus-outline"></span></button>
        <button type="button" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen"><span class="mdi mdi-fit-to-screen-outline"></span></button>
        <button type="button" data-media-zoom-in aria-label="Zoom in" title="Zoom in"><span class="mdi mdi-magnify-plus-outline"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<button class="btn btn-soft-primary btn-sm" type="button" data-media-open="#journalViewer" data-media-index="0">
  View all 4
</button>
<button class="btn btn-ghost btn-sm" type="button" data-media-open="#journalViewer" data-media-index="2">Open</button>

<div id="journalViewer" class="media-modal" data-media-items="[…]" …>…</div>
```

```js components
import { MediaPreviewModal } from "@abydahana/aksara-ui/components";

MediaPreviewModal({
  id: "journalViewer",
  label: "Travel journal photos",
  items: [
    { src: "edinburgh.jpg", alt: "Arthur's Seat", caption: "Day 1 · Edinburgh" },
    { src: "cairngorms.jpg", alt: "Forest trail", caption: "Day 2 · Cairngorms" },
    { src: "skye-1.jpg", alt: "Neist Point", caption: "Day 3 · Isle of Skye" },
    { src: "skye-2.jpg", alt: "Coast road", caption: "Day 3 · Isle of Skye" }
  ]
});
```

A trigger that sits inside any element with a `data-media-items` JSON list (a `MediaGrid` is one) browses that list instead of the viewer's own, so you can share one viewer between several albums.

### A single image

Give a trigger `data-media-src` (plus optional `data-media-alt` and `data-media-caption`) to open just that image. With one item the counter and arrows stay hidden, and swiping only stretches a little and springs back. This suits receipts, attachments and avatars.

::html
<div class="docs-preview">
  <div class="table-responsive w-full">
    <table class="table m-0">
      <thead>
        <tr><th>Expense</th><th>Submitted by</th><th class="text-end">Amount</th><th class="text-end">Receipt</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><div class="fw-semibold text-sm">Team lunch</div><div class="text-xs text-subtle">Pret A Manger, London</div></td>
          <td class="text-sm">Grace Lee</td>
          <td class="text-end text-sm">$148.20</td>
          <td class="text-end"><button class="btn btn-ghost btn-sm" type="button" data-media-open="#mediaViewerReceipt" data-media-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%23e7e4df'/%3E%3Crect x='150' y='60' width='300' height='680' rx='6' fill='%23fff'/%3E%3Crect x='200' y='110' width='200' height='22' rx='4' fill='%233f4752'/%3E%3Crect x='230' y='150' width='140' height='10' rx='5' fill='%23c9c5be'/%3E%3Cg fill='%23d9d5cf'%3E%3Crect x='190' y='220' width='150' height='10' rx='5'/%3E%3Crect x='190' y='260' width='120' height='10' rx='5'/%3E%3Crect x='190' y='300' width='160' height='10' rx='5'/%3E%3Crect x='190' y='340' width='100' height='10' rx='5'/%3E%3C/g%3E%3Cg fill='%239e9890'%3E%3Crect x='370' y='220' width='40' height='10' rx='5'/%3E%3Crect x='370' y='260' width='40' height='10' rx='5'/%3E%3Crect x='370' y='300' width='40' height='10' rx='5'/%3E%3Crect x='370' y='340' width='40' height='10' rx='5'/%3E%3C/g%3E%3Crect x='190' y='400' width='220' height='2' fill='%23c9c5be'/%3E%3Crect x='190' y='430' width='90' height='16' rx='4' fill='%233f4752'/%3E%3Crect x='340' y='430' width='70' height='16' rx='4' fill='%233f4752'/%3E%3Cg fill='%233f4752'%3E%3Crect x='200' y='600' width='6' height='70'/%3E%3Crect x='214' y='600' width='3' height='70'/%3E%3Crect x='224' y='600' width='9' height='70'/%3E%3Crect x='240' y='600' width='3' height='70'/%3E%3Crect x='250' y='600' width='6' height='70'/%3E%3Crect x='264' y='600' width='12' height='70'/%3E%3Crect x='284' y='600' width='3' height='70'/%3E%3Crect x='294' y='600' width='6' height='70'/%3E%3Crect x='308' y='600' width='9' height='70'/%3E%3Crect x='324' y='600' width='3' height='70'/%3E%3Crect x='334' y='600' width='6' height='70'/%3E%3Crect x='348' y='600' width='12' height='70'/%3E%3Crect x='368' y='600' width='3' height='70'/%3E%3Crect x='378' y='600' width='6' height='70'/%3E%3Crect x='392' y='600' width='6' height='70'/%3E%3C/g%3E%3C/svg%3E" data-media-alt="Receipt for team lunch" data-media-caption="Team lunch · Pret A Manger, London · $148.20"><span class="mdi mdi-receipt-text-outline"></span> View</button></td>
        </tr>
        <tr>
          <td><div class="fw-semibold text-sm">Train to Manchester</div><div class="text-xs text-subtle">Avanti West Coast</div></td>
          <td class="text-sm">Alex Morgan</td>
          <td class="text-end text-sm">$96.40</td>
          <td class="text-end"><button class="btn btn-ghost btn-sm" type="button" data-media-open="#mediaViewerReceipt" data-media-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%23e7e4df'/%3E%3Crect x='150' y='60' width='300' height='680' rx='6' fill='%23fff'/%3E%3Crect x='200' y='110' width='200' height='22' rx='4' fill='%233f4752'/%3E%3Crect x='230' y='150' width='140' height='10' rx='5' fill='%23c9c5be'/%3E%3Cg fill='%23d9d5cf'%3E%3Crect x='190' y='220' width='150' height='10' rx='5'/%3E%3Crect x='190' y='260' width='120' height='10' rx='5'/%3E%3Crect x='190' y='300' width='160' height='10' rx='5'/%3E%3Crect x='190' y='340' width='100' height='10' rx='5'/%3E%3C/g%3E%3Cg fill='%239e9890'%3E%3Crect x='370' y='220' width='40' height='10' rx='5'/%3E%3Crect x='370' y='260' width='40' height='10' rx='5'/%3E%3Crect x='370' y='300' width='40' height='10' rx='5'/%3E%3Crect x='370' y='340' width='40' height='10' rx='5'/%3E%3C/g%3E%3Crect x='190' y='400' width='220' height='2' fill='%23c9c5be'/%3E%3Crect x='190' y='430' width='90' height='16' rx='4' fill='%233f4752'/%3E%3Crect x='340' y='430' width='70' height='16' rx='4' fill='%233f4752'/%3E%3Cg fill='%233f4752'%3E%3Crect x='200' y='600' width='6' height='70'/%3E%3Crect x='214' y='600' width='3' height='70'/%3E%3Crect x='224' y='600' width='9' height='70'/%3E%3Crect x='240' y='600' width='3' height='70'/%3E%3Crect x='250' y='600' width='6' height='70'/%3E%3Crect x='264' y='600' width='12' height='70'/%3E%3Crect x='284' y='600' width='3' height='70'/%3E%3Crect x='294' y='600' width='6' height='70'/%3E%3Crect x='308' y='600' width='9' height='70'/%3E%3Crect x='324' y='600' width='3' height='70'/%3E%3Crect x='334' y='600' width='6' height='70'/%3E%3Crect x='348' y='600' width='12' height='70'/%3E%3Crect x='368' y='600' width='3' height='70'/%3E%3Crect x='378' y='600' width='6' height='70'/%3E%3Crect x='392' y='600' width='6' height='70'/%3E%3C/g%3E%3C/svg%3E" data-media-alt="Receipt for train ticket" data-media-caption="Train to Manchester · $96.40"><span class="mdi mdi-receipt-text-outline"></span> View</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="mediaViewerReceipt" class="media-modal" role="dialog" aria-modal="true" aria-label="Receipt" aria-hidden="true" tabindex="-1" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%23e7e4df'/%3E%3Crect x='150' y='60' width='300' height='680' rx='6' fill='%23fff'/%3E%3Crect x='200' y='110' width='200' height='22' rx='4' fill='%233f4752'/%3E%3Crect x='230' y='150' width='140' height='10' rx='5' fill='%23c9c5be'/%3E%3Cg fill='%23d9d5cf'%3E%3Crect x='190' y='220' width='150' height='10' rx='5'/%3E%3Crect x='190' y='260' width='120' height='10' rx='5'/%3E%3Crect x='190' y='300' width='160' height='10' rx='5'/%3E%3Crect x='190' y='340' width='100' height='10' rx='5'/%3E%3C/g%3E%3Cg fill='%239e9890'%3E%3Crect x='370' y='220' width='40' height='10' rx='5'/%3E%3Crect x='370' y='260' width='40' height='10' rx='5'/%3E%3Crect x='370' y='300' width='40' height='10' rx='5'/%3E%3Crect x='370' y='340' width='40' height='10' rx='5'/%3E%3C/g%3E%3Crect x='190' y='400' width='220' height='2' fill='%23c9c5be'/%3E%3Crect x='190' y='430' width='90' height='16' rx='4' fill='%233f4752'/%3E%3Crect x='340' y='430' width='70' height='16' rx='4' fill='%233f4752'/%3E%3Cg fill='%233f4752'%3E%3Crect x='200' y='600' width='6' height='70'/%3E%3Crect x='214' y='600' width='3' height='70'/%3E%3Crect x='224' y='600' width='9' height='70'/%3E%3Crect x='240' y='600' width='3' height='70'/%3E%3Crect x='250' y='600' width='6' height='70'/%3E%3Crect x='264' y='600' width='12' height='70'/%3E%3Crect x='284' y='600' width='3' height='70'/%3E%3Crect x='294' y='600' width='6' height='70'/%3E%3Crect x='308' y='600' width='9' height='70'/%3E%3Crect x='324' y='600' width='3' height='70'/%3E%3Crect x='334' y='600' width='6' height='70'/%3E%3Crect x='348' y='600' width='12' height='70'/%3E%3Crect x='368' y='600' width='3' height='70'/%3E%3Crect x='378' y='600' width='6' height='70'/%3E%3Crect x='392' y='600' width='6' height='70'/%3E%3C/g%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Receipt&quot;,&quot;caption&quot;:&quot;&quot;}]" data-media-index="0">
    <div class="media-modal-stage" data-media-stage>
      <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close"><span class="mdi mdi-close"></span></button>
      <span class="media-modal-counter" aria-live="polite" hidden><span data-media-current>1</span> / <span data-media-total>1</span></span>
      <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous" disabled hidden><span class="mdi mdi-chevron-left"></span></button>
      <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next" disabled hidden><span class="mdi mdi-chevron-right"></span></button>
      <figure class="media-modal-figure">
        <img class="media-modal-image" data-media-image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%23e7e4df'/%3E%3Crect x='150' y='60' width='300' height='680' rx='6' fill='%23fff'/%3E%3Crect x='200' y='110' width='200' height='22' rx='4' fill='%233f4752'/%3E%3Crect x='230' y='150' width='140' height='10' rx='5' fill='%23c9c5be'/%3E%3Cg fill='%23d9d5cf'%3E%3Crect x='190' y='220' width='150' height='10' rx='5'/%3E%3Crect x='190' y='260' width='120' height='10' rx='5'/%3E%3Crect x='190' y='300' width='160' height='10' rx='5'/%3E%3Crect x='190' y='340' width='100' height='10' rx='5'/%3E%3C/g%3E%3Cg fill='%239e9890'%3E%3Crect x='370' y='220' width='40' height='10' rx='5'/%3E%3Crect x='370' y='260' width='40' height='10' rx='5'/%3E%3Crect x='370' y='300' width='40' height='10' rx='5'/%3E%3Crect x='370' y='340' width='40' height='10' rx='5'/%3E%3C/g%3E%3Crect x='190' y='400' width='220' height='2' fill='%23c9c5be'/%3E%3Crect x='190' y='430' width='90' height='16' rx='4' fill='%233f4752'/%3E%3Crect x='340' y='430' width='70' height='16' rx='4' fill='%233f4752'/%3E%3Cg fill='%233f4752'%3E%3Crect x='200' y='600' width='6' height='70'/%3E%3Crect x='214' y='600' width='3' height='70'/%3E%3Crect x='224' y='600' width='9' height='70'/%3E%3Crect x='240' y='600' width='3' height='70'/%3E%3Crect x='250' y='600' width='6' height='70'/%3E%3Crect x='264' y='600' width='12' height='70'/%3E%3Crect x='284' y='600' width='3' height='70'/%3E%3Crect x='294' y='600' width='6' height='70'/%3E%3Crect x='308' y='600' width='9' height='70'/%3E%3Crect x='324' y='600' width='3' height='70'/%3E%3Crect x='334' y='600' width='6' height='70'/%3E%3Crect x='348' y='600' width='12' height='70'/%3E%3Crect x='368' y='600' width='3' height='70'/%3E%3Crect x='378' y='600' width='6' height='70'/%3E%3Crect x='392' y='600' width='6' height='70'/%3E%3C/g%3E%3C/svg%3E" alt="Receipt" draggable="false">
        <figcaption class="media-modal-caption" data-media-caption hidden></figcaption>
      </figure>
      <div class="media-modal-zoom" role="group" aria-label="Zoom">
        <button type="button" data-media-zoom-out aria-label="Zoom out" title="Zoom out"><span class="mdi mdi-magnify-minus-outline"></span></button>
        <button type="button" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen"><span class="mdi mdi-fit-to-screen-outline"></span></button>
        <button type="button" data-media-zoom-in aria-label="Zoom in" title="Zoom in"><span class="mdi mdi-magnify-plus-outline"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<button
  class="btn btn-ghost btn-sm"
  type="button"
  data-media-open="#receiptViewer"
  data-media-src="receipts/team-lunch.jpg"
  data-media-alt="Receipt for team lunch"
  data-media-caption="Team lunch · Pret A Manger, London · $148.20"
>
  <span class="mdi mdi-receipt-text-outline"></span> View
</button>
```

```js components
import { Button, MediaPreviewModal } from "@abydahana/aksara-ui/components";

// An empty viewer: every trigger supplies its own image.
MediaPreviewModal({ id: "receiptViewer", label: "Receipt", items: [] });

Button({
  variant: "ghost",
  size: "sm",
  attributes: {
    "data-media-open": "#receiptViewer",
    "data-media-src": "receipts/team-lunch.jpg",
    "data-media-alt": "Receipt for team lunch",
    "data-media-caption": "Team lunch · Pret A Manger, London · $148.20"
  },
  children: '<span class="mdi mdi-receipt-text-outline"></span> View'
});
```

A `data-media-src` trigger **replaces** the viewer's list with that one image. Use a dedicated viewer for single images, or give the other triggers their own `data-media-items` source, so an index-only trigger never ends up browsing a lone receipt.

---

## Gallery Containers

Put `data-media-gallery="#viewer"` on a container to turn every item inside it into a trigger, with no attributes on the items themselves. Clicking an item collects the gallery, loads it into the viewer and opens it at that item.

- Mark items with `data-media-item`. The full-size source comes from `data-media-src`, then the item's `href` (so a plain `<a href="full.jpg">` works without JavaScript too), then the image inside it. Alt text and captions come from `data-media-alt` / `data-media-caption`, falling back to the image's `alt` and `data-media-caption`.
- Without any `[data-media-item]`, every `<img>` in the container is an item, using `data-media-src` or the image's current source.

::html
<div class="docs-preview">
  <div class="w-full vstack gap-3">
    <div class="hstack justify-between">
      <span class="fw-semibold">Shared album</span>
      <span class="text-sm text-subtle">6 photos · Sofia Patel</span>
    </div>
    <div class="row gap-2" data-media-gallery="#mediaViewerGallery">
      <div class="col-4 md:col-2"><button class="w-full border-0 p-0 bg-transparent cursor-pointer rounded-[10px] overflow-hidden aspect-square block" type="button" data-media-item data-media-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E" data-media-alt="Lake at first light" data-media-caption="Windermere, 6:40 am"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E" alt="Lake at first light" class="w-full h-full object-cover block"></button></div>
      <div class="col-4 md:col-2"><button class="w-full border-0 p-0 bg-transparent cursor-pointer rounded-[10px] overflow-hidden aspect-square block" type="button" data-media-item data-media-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E" data-media-alt="Pine forest" data-media-caption="Grizedale Forest"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E" alt="Pine forest" class="w-full h-full object-cover block"></button></div>
      <div class="col-4 md:col-2"><button class="w-full border-0 p-0 bg-transparent cursor-pointer rounded-[10px] overflow-hidden aspect-square block" type="button" data-media-item data-media-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f6d7b0'/%3E%3Cstop offset='1' stop-color='%23c8794a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff1d6' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%238a4b32'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%235a2f22'/%3E%3C/svg%3E" data-media-alt="Ridge at sunrise" data-media-caption="Helvellyn ridge at sunrise"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f6d7b0'/%3E%3Cstop offset='1' stop-color='%23c8794a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff1d6' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%238a4b32'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%235a2f22'/%3E%3C/svg%3E" alt="Ridge at sunrise" class="w-full h-full object-cover block"></button></div>
      <div class="col-4 md:col-2"><button class="w-full border-0 p-0 bg-transparent cursor-pointer rounded-[10px] overflow-hidden aspect-square block" type="button" data-media-item data-media-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E" data-media-alt="Valley at dusk" data-media-caption="Borrowdale at dusk"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E" alt="Valley at dusk" class="w-full h-full object-cover block"></button></div>
      <div class="col-4 md:col-2"><button class="w-full border-0 p-0 bg-transparent cursor-pointer rounded-[10px] overflow-hidden aspect-square block" type="button" data-media-item data-media-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E" data-media-alt="Coast road" data-media-caption="The coast road near Whitehaven"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E" alt="Coast road" class="w-full h-full object-cover block"></button></div>
      <div class="col-4 md:col-2"><button class="w-full border-0 p-0 bg-transparent cursor-pointer rounded-[10px] overflow-hidden aspect-square block" type="button" data-media-item data-media-src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f3e1c7'/%3E%3Cstop offset='1' stop-color='%23b55d4c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff4e2' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%236e3a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%233f4752'/%3E%3C/svg%3E" data-media-alt="Old town rooftops" data-media-caption="Kendal rooftops on the way home"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f3e1c7'/%3E%3Cstop offset='1' stop-color='%23b55d4c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff4e2' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%236e3a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%233f4752'/%3E%3C/svg%3E" alt="Old town rooftops" class="w-full h-full object-cover block"></button></div>
    </div>
  </div>
  <div id="mediaViewerGallery" class="media-modal" role="dialog" aria-modal="true" aria-label="Shared album" aria-hidden="true" tabindex="-1" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Lake at first light&quot;,&quot;caption&quot;:&quot;Windermere, 6:40 am&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cfe3c6'/%3E%3Cstop offset='1' stop-color='%234f7d4a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f2f7e8' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%23355a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2322391f'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Pine forest&quot;,&quot;caption&quot;:&quot;Grizedale Forest&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f6d7b0'/%3E%3Cstop offset='1' stop-color='%23c8794a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff1d6' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%238a4b32'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%235a2f22'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Ridge at sunrise&quot;,&quot;caption&quot;:&quot;Helvellyn ridge at sunrise&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Valley at dusk&quot;,&quot;caption&quot;:&quot;Borrowdale at dusk&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Coast road&quot;,&quot;caption&quot;:&quot;The coast road near Whitehaven&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f3e1c7'/%3E%3Cstop offset='1' stop-color='%23b55d4c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff4e2' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%236e3a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%233f4752'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Old town rooftops&quot;,&quot;caption&quot;:&quot;Kendal rooftops on the way home&quot;}]" data-media-index="0">
    <div class="media-modal-stage" data-media-stage>
      <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close"><span class="mdi mdi-close"></span></button>
      <span class="media-modal-counter" aria-live="polite"><span data-media-current>1</span> / <span data-media-total>6</span></span>
      <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous" disabled><span class="mdi mdi-chevron-left"></span></button>
      <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next"><span class="mdi mdi-chevron-right"></span></button>
      <figure class="media-modal-figure">
        <img class="media-modal-image" data-media-image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E" alt="Lake at first light" draggable="false">
        <figcaption class="media-modal-caption" data-media-caption>Windermere, 6:40 am</figcaption>
      </figure>
      <div class="media-modal-zoom" role="group" aria-label="Zoom">
        <button type="button" data-media-zoom-out aria-label="Zoom out" title="Zoom out"><span class="mdi mdi-magnify-minus-outline"></span></button>
        <button type="button" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen"><span class="mdi mdi-fit-to-screen-outline"></span></button>
        <button type="button" data-media-zoom-in aria-label="Zoom in" title="Zoom in"><span class="mdi mdi-magnify-plus-outline"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="row gap-2" data-media-gallery="#albumViewer">
  <div class="col-4 md:col-2">
    <a href="photos/full/lake.jpg" data-media-item data-media-caption="Windermere, 6:40 am">
      <img src="photos/thumb/lake.jpg" alt="Lake at first light" />
    </a>
  </div>
  <div class="col-4 md:col-2">
    <a href="photos/full/forest.jpg" data-media-item data-media-caption="Grizedale Forest">
      <img src="photos/thumb/forest.jpg" alt="Pine forest" />
    </a>
  </div>
  …
</div>
```

```js components
import { MediaPreviewModal } from "@abydahana/aksara-ui/components";

// The gallery fills the viewer at click time, so `items` is optional here:
// the counter and arrows show up as soon as the viewer holds two or more photos.
MediaPreviewModal({ id: "albumViewer", label: "Shared album", items: album });
```

### Plain images

When the container has no `[data-media-item]`, each `<img>` becomes an item. This is the quickest way to make an article or a rich-text body browsable.

::html
<div class="docs-preview">
  <article class="max-w-[36rem] vstack gap-3" data-media-gallery="#mediaViewerArticle">
    <h4 class="m-0">A weekend in the Lakes</h4>
    <p class="m-0 text-sm text-subtle">We started early on Saturday and walked the western shore before the crowds arrived.</p>
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E" alt="Western shore of Windermere" data-media-caption="The western shore, Saturday morning" class="w-full rounded-[12px] block cursor-pointer">
    <p class="m-0 text-sm text-subtle">By Sunday the weather had turned, so we headed for the coast instead.</p>
    <div class="row gap-2">
      <div class="col-6"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E" alt="Coast road" data-media-caption="Coast road, Sunday" class="w-full aspect-video object-cover rounded-[12px] block cursor-pointer"></div>
      <div class="col-6"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E" alt="Harbour at dusk" data-media-caption="Harbour at dusk" class="w-full aspect-video object-cover rounded-[12px] block cursor-pointer"></div>
    </div>
  </article>
  <div id="mediaViewerArticle" class="media-modal" role="dialog" aria-modal="true" aria-label="Article photos" aria-hidden="true" tabindex="-1" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Western shore of Windermere&quot;,&quot;caption&quot;:&quot;The western shore, Saturday morning&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Coast road&quot;,&quot;caption&quot;:&quot;Coast road, Sunday&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Harbour at dusk&quot;,&quot;caption&quot;:&quot;Harbour at dusk&quot;}]" data-media-index="0">
    <div class="media-modal-stage" data-media-stage>
      <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close"><span class="mdi mdi-close"></span></button>
      <span class="media-modal-counter" aria-live="polite"><span data-media-current>1</span> / <span data-media-total>3</span></span>
      <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous" disabled><span class="mdi mdi-chevron-left"></span></button>
      <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next"><span class="mdi mdi-chevron-right"></span></button>
      <figure class="media-modal-figure">
        <img class="media-modal-image" data-media-image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E" alt="Western shore of Windermere" draggable="false">
        <figcaption class="media-modal-caption" data-media-caption>The western shore, Saturday morning</figcaption>
      </figure>
      <div class="media-modal-zoom" role="group" aria-label="Zoom">
        <button type="button" data-media-zoom-out aria-label="Zoom out" title="Zoom out"><span class="mdi mdi-magnify-minus-outline"></span></button>
        <button type="button" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen"><span class="mdi mdi-fit-to-screen-outline"></span></button>
        <button type="button" data-media-zoom-in aria-label="Zoom in" title="Zoom in"><span class="mdi mdi-magnify-plus-outline"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<article data-media-gallery="#articleViewer">
  <h4>A weekend in the Lakes</h4>
  <p>…</p>
  <img
    src="shore-800.jpg"
    data-media-src="shore-2400.jpg"
    alt="Western shore of Windermere"
    data-media-caption="The western shore, Saturday morning"
  />
  <p>…</p>
  <img src="coast-800.jpg" data-media-src="coast-2400.jpg" alt="Coast road" data-media-caption="Coast road, Sunday" />
</article>
```

```js components
import { MediaPreviewModal } from "@abydahana/aksara-ui/components";

MediaPreviewModal({ id: "articleViewer", label: "Article photos", items: articlePhotos });
```

Use `data-media-src` to open a larger file than the one in the page. Without it, the viewer shows the image's `currentSrc`, which is the size the browser picked from `srcset`.

---

## Captions and Alt Text

Each item is `{ src, alt, caption }`. The caption is shown under the image in `.media-modal-caption` and hidden when an item has none. The `alt` text is copied to the viewer image, so write it as you would for the thumbnail. Both are set as text, never as HTML.

```js components
import { MediaPreviewModal } from "@abydahana/aksara-ui/components";

MediaPreviewModal({
  id: "productViewer",
  label: "Product photos",
  items: [
    { src: "chair-front.jpg", alt: "Oak lounge chair, front", caption: "Natural oak with wool cushions" },
    { src: "chair-side.jpg", alt: "Oak lounge chair, side" } // no caption: the caption line is hidden
  ]
});
```

---

## Comments Sidebar

Pass HTML to `sidebar` to show a panel next to the image: the post's author, its text and the comment thread, like a social photo viewer. From 768px up the viewer switches to a row with a 22rem panel (26rem from 992px). On phones the panel stacks under the image, capped at 40% of the viewport height and scrollable. Keyboard shortcuts are ignored while the comment field has focus, so typing `+` or `0` does not zoom.

::html
<div class="docs-preview">
  <div class="card max-w-[22rem] w-full overflow-hidden">
    <button class="border-0 p-0 bg-transparent cursor-pointer block w-full" type="button" data-media-open="#mediaViewerComments" data-media-index="0" aria-label="Open photo with comments"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E" alt="Brooklyn Bridge Park at dusk" class="w-full aspect-video object-cover block"></button>
    <div class="card-body hstack justify-between">
      <span class="text-sm"><span class="fw-semibold">Daniel Kim</span> <span class="text-subtle">· 3 photos</span></span>
      <span class="hstack gap-3 text-sm text-subtle"><span><span class="mdi mdi-heart-outline"></span> 214</span><span><span class="mdi mdi-comment-outline"></span> 3</span></span>
    </div>
  </div>
  <div id="mediaViewerComments" class="media-modal" role="dialog" aria-modal="true" aria-label="Photos from Daniel Kim" aria-hidden="true" tabindex="-1" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Brooklyn Bridge Park at dusk&quot;,&quot;caption&quot;:&quot;&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Manhattan skyline from Dumbo&quot;,&quot;caption&quot;:&quot;&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f3e1c7'/%3E%3Cstop offset='1' stop-color='%23b55d4c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff4e2' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%236e3a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%233f4752'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Rooftops in Williamsburg&quot;,&quot;caption&quot;:&quot;&quot;}]" data-media-index="0">
    <div class="media-modal-stage" data-media-stage>
      <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close"><span class="mdi mdi-close"></span></button>
      <span class="media-modal-counter" aria-live="polite"><span data-media-current>1</span> / <span data-media-total>3</span></span>
      <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous" disabled><span class="mdi mdi-chevron-left"></span></button>
      <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next"><span class="mdi mdi-chevron-right"></span></button>
      <figure class="media-modal-figure">
        <img class="media-modal-image" data-media-image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E" alt="Brooklyn Bridge Park at dusk" draggable="false">
        <figcaption class="media-modal-caption" data-media-caption hidden></figcaption>
      </figure>
      <div class="media-modal-zoom" role="group" aria-label="Zoom">
        <button type="button" data-media-zoom-out aria-label="Zoom out" title="Zoom out"><span class="mdi mdi-magnify-minus-outline"></span></button>
        <button type="button" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen"><span class="mdi mdi-fit-to-screen-outline"></span></button>
        <button type="button" data-media-zoom-in aria-label="Zoom in" title="Zoom in"><span class="mdi mdi-magnify-plus-outline"></span></button>
      </div>
    </div>
    <aside class="media-modal-sidebar">
      <div class="hstack gap-3 p-4 border-bottom">
        <span class="avatar avatar-sm avatar-info rounded-full"><span class="avatar-initials">DK</span></span>
        <div class="flex-1"><div class="fw-semibold text-sm">Daniel Kim</div><div class="text-xs text-subtle">New York · 3h</div></div>
        <button class="btn btn-soft-primary btn-sm" type="button">Follow</button>
      </div>
      <div class="vstack gap-3 p-4">
        <p class="m-0 text-sm">Golden hour from Brooklyn Bridge Park, then a walk up to the rooftops. Swipe for all three.</p>
        <div class="hstack gap-2 items-start">
          <span class="avatar avatar-xs avatar-success rounded-full"><span class="avatar-initials">GL</span></span>
          <div class="flex-1 text-sm"><span class="fw-semibold">Grace Lee</span> The second one is unreal.<div class="text-xs text-subtle mt-1">2h · Reply</div></div>
        </div>
        <div class="hstack gap-2 items-start">
          <span class="avatar avatar-xs avatar-warning rounded-full"><span class="avatar-initials">AM</span></span>
          <div class="flex-1 text-sm"><span class="fw-semibold">Alex Morgan</span> Saving this spot for my next trip to New York.<div class="text-xs text-subtle mt-1">1h · Reply</div></div>
        </div>
        <div class="hstack gap-2 items-start">
          <span class="avatar avatar-xs avatar-danger rounded-full"><span class="avatar-initials">SP</span></span>
          <div class="flex-1 text-sm"><span class="fw-semibold">Sofia Patel</span> Which lens did you use?<div class="text-xs text-subtle mt-1">45m · Reply</div></div>
        </div>
      </div>
      <div class="p-3 border-top">
        <div class="input-group">
          <input class="form-control" type="text" placeholder="Add a comment" aria-label="Add a comment">
          <button class="btn btn-primary" type="button">Post</button>
        </div>
      </div>
    </aside>
  </div>
</div>
::end

```html
<div
  id="photoViewer"
  class="media-modal"
  role="dialog"
  aria-modal="true"
  aria-label="Photo"
  aria-hidden="true"
  tabindex="-1"
  data-media-items="[…]"
>
  <div class="media-modal-stage" data-media-stage>…</div>
  <aside class="media-modal-sidebar">
    <div class="hstack gap-3 p-4 border-bottom">…author…</div>
    <div class="vstack gap-3 p-4">…comments…</div>
    <div class="p-3 border-top">
      <div class="input-group">
        <input class="form-control" placeholder="Add a comment" aria-label="Add a comment" />
        <button class="btn btn-primary" type="button">Post</button>
      </div>
    </div>
  </aside>
</div>
```

```js components
import { MediaPreviewModal, Avatar } from "@abydahana/aksara-ui/components";

MediaPreviewModal({
  id: "photoViewer",
  label: "Photos from Daniel Kim",
  items: photos,
  // Raw HTML, rendered inside <aside class="media-modal-sidebar">
  sidebar: `
    <div class="hstack gap-3 p-4 border-bottom">
      ${Avatar({ initials: "DK", size: "sm", variant: "info" })}
      <div class="flex-1"><div class="fw-semibold text-sm">Daniel Kim</div><div class="text-xs text-subtle">New York · 3h</div></div>
    </div>
    <div class="vstack gap-3 p-4">${comments}</div>
    <div class="p-3 border-top">${commentForm}</div>
  `
});
```

---

## Looping

By default the previous button is hidden on the first item and the next button on the last. With `loop: true` (rendered as `data-media-loop="true"`) the viewer wraps around in both directions, for buttons, arrow keys and swipes.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-primary" type="button" data-media-open="#mediaViewerLoop" data-media-index="0"><span class="mdi mdi-play-circle-outline"></span> Start slideshow</button>
    <button class="btn btn-outline-secondary" type="button" data-media-open="#mediaViewerLoop" data-media-index="3">Open the last photo</button>
  </div>
  <div id="mediaViewerLoop" class="media-modal" role="dialog" aria-modal="true" aria-label="Slideshow" aria-hidden="true" tabindex="-1" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f6d7b0'/%3E%3Cstop offset='1' stop-color='%23c8794a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff1d6' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%238a4b32'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%235a2f22'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Sunrise&quot;,&quot;caption&quot;:&quot;Sunrise · 1 of 4&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23d6e2e9'/%3E%3Cstop offset='1' stop-color='%235d7f95'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23f4f8fa' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233d5a6c'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%232c4a5e'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Morning&quot;,&quot;caption&quot;:&quot;Morning · 2 of 4&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e8d5f0'/%3E%3Cstop offset='1' stop-color='%237a5c99'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23ffe0ef' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%234e3a66'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%2333264a'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Dusk&quot;,&quot;caption&quot;:&quot;Dusk · 3 of 4&quot;},{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9d6df'/%3E%3Cstop offset='1' stop-color='%232f4858'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23e6f0f4' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%233e5f73'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%231f3340'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Night&quot;,&quot;caption&quot;:&quot;Night · 4 of 4&quot;}]" data-media-index="0" data-media-loop="true">
    <div class="media-modal-stage" data-media-stage>
      <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close"><span class="mdi mdi-close"></span></button>
      <span class="media-modal-counter" aria-live="polite"><span data-media-current>1</span> / <span data-media-total>4</span></span>
      <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous"><span class="mdi mdi-chevron-left"></span></button>
      <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next"><span class="mdi mdi-chevron-right"></span></button>
      <figure class="media-modal-figure">
        <img class="media-modal-image" data-media-image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f6d7b0'/%3E%3Cstop offset='1' stop-color='%23c8794a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff1d6' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%238a4b32'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%235a2f22'/%3E%3C/svg%3E" alt="Sunrise" draggable="false">
        <figcaption class="media-modal-caption" data-media-caption>Sunrise · 1 of 4</figcaption>
      </figure>
      <div class="media-modal-zoom" role="group" aria-label="Zoom">
        <button type="button" data-media-zoom-out aria-label="Zoom out" title="Zoom out"><span class="mdi mdi-magnify-minus-outline"></span></button>
        <button type="button" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen"><span class="mdi mdi-fit-to-screen-outline"></span></button>
        <button type="button" data-media-zoom-in aria-label="Zoom in" title="Zoom in"><span class="mdi mdi-magnify-plus-outline"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div id="slideshow" class="media-modal" data-media-loop="true" data-media-items="[…]" …>…</div>
```

```js components
import { MediaPreviewModal } from "@abydahana/aksara-ui/components";

MediaPreviewModal({ id: "slideshow", items: photos, loop: true });
```

---

## Swipe and Slide

Changing items slides, like a photo app. When a viewer is set up, the runtime wraps its `.media-modal-figure` in a `.media-modal-track` with three stage-wide slots: a copy for the previous item, the current figure and a copy for the next item (`data-media-slot="prev|current|next"`). The track is shifted so only the current slot is visible, and moved by the `--aksara-media-drag` custom property (in px) on the viewer.

```html
<!-- What the runtime builds inside .media-modal-stage (your markup has a single figure) -->
<div class="media-modal-track">
  <figure class="media-modal-figure" data-media-slot="prev" aria-hidden="true" inert>…</figure>
  <figure class="media-modal-figure" data-media-slot="current">…</figure>
  <figure class="media-modal-figure" data-media-slot="next" aria-hidden="true" inert>…</figure>
</div>
```

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Input</th><th>Movement</th></tr>
    </thead>
    <tbody>
      <tr><td>Drag or swipe at 1×</td><td>The track follows the pointer, so the neighbouring photo slides in alongside. Toward a side with no item (first or last, without <code>loop</code>) it moves at 30% of the pointer, a rubber-band stretch.</td></tr>
      <tr><td>Release</td><td>Past 20% of the stage width, or after a quick flick in the same direction, the track slides on to the neighbour, which becomes current. Otherwise it springs back.</td></tr>
      <tr><td>Previous / next buttons, <kbd>←</kbd> / <kbd>→</kbd>, <code>next()</code> / <code>prev()</code></td><td>Animated slide to the neighbour. At an end without <code>loop</code> nothing moves.</td></tr>
      <tr><td><kbd>Home</kbd> / <kbd>End</kbd>, <code>show(index)</code>, <code>go(index)</code>, <code>setItems()</code>, a trigger click</td><td>Jump straight to the item, without a slide.</td></tr>
      <tr><td>Drag while zoomed</td><td>Pans the image instead; the track stays put.</td></tr>
    </tbody>
  </table>
</div>
::end

While the track animates, the viewer has `.is-settling` (a `.34s` `transform` transition). `aksara:media:change` fires when the slide has finished and the new item is current. A new drag, key press or button click during a slide completes it at once, so fast taps never queue up. With `prefers-reduced-motion: reduce`, items change without the animation. Neighbour slots without an item get `.is-empty` and stay invisible.

To tune the feel, restyle the settling transition. Keep the duration under about `.4s`: the runtime completes a slide after 420ms even if the transition is still running.

```css
.media-modal.is-settling .media-modal-track {
  transition-timing-function: cubic-bezier(0.2, 0.9, 0.3, 1);
}
```

---

## Zoom and Pan

The zoom bar at the bottom has zoom out, fit to screen and zoom in. Every way of zooming works on any viewer, with or without the bar:

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Input</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td>Zoom buttons</td><td>Zoom in or out by a factor of 1.5; the middle button resets to fit.</td></tr>
      <tr><td><kbd>+</kbd> / <kbd>=</kbd>, <kbd>-</kbd>, <kbd>0</kbd></td><td>Zoom in, zoom out, reset.</td></tr>
      <tr><td>Double click on the image</td><td>Toggles between fit and 2.5×.</td></tr>
      <tr><td><kbd>Ctrl</kbd> or <kbd>⌘</kbd> + wheel (also a trackpad pinch in browsers that report it as a ctrl + wheel)</td><td>Zooms in steps of 1.15×.</td></tr>
      <tr><td>Drag while zoomed</td><td>Pans the image (<code>.is-panning</code> on the viewer).</td></tr>
    </tbody>
  </table>
</div>
::end

Zoom is clamped between 1× and `maxZoom` (default 4, set it with `data-media-max-zoom` or the `maxZoom` option). It resets to fit when you change items or close the viewer. While zoomed the viewer has `.is-zoomed`, and the transform is driven by the `--aksara-media-zoom`, `--aksara-media-x` and `--aksara-media-y` custom properties.

::html
<div class="docs-preview">
  <div class="docs-row">
    <button class="btn btn-soft-primary" type="button" data-media-open="#mediaViewerZoom"><span class="mdi mdi-magnify-plus-outline"></span> Inspect site plan (up to 8×)</button>
  </div>
  <div id="mediaViewerZoom" class="media-modal" role="dialog" aria-modal="true" aria-label="Site plan" aria-hidden="true" tabindex="-1" data-media-items="[{&quot;src&quot;:&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f3e1c7'/%3E%3Cstop offset='1' stop-color='%23b55d4c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff4e2' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%236e3a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%233f4752'/%3E%3C/svg%3E&quot;,&quot;alt&quot;:&quot;Site plan&quot;,&quot;caption&quot;:&quot;Site plan · Ancoats, Manchester&quot;}]" data-media-index="0" data-media-max-zoom="8">
    <div class="media-modal-stage" data-media-stage>
      <button type="button" class="media-modal-btn media-modal-close" data-media-close aria-label="Close"><span class="mdi mdi-close"></span></button>
      <span class="media-modal-counter" aria-live="polite" hidden><span data-media-current>1</span> / <span data-media-total>1</span></span>
      <button type="button" class="media-modal-btn media-modal-prev" data-media-prev aria-label="Previous" disabled hidden><span class="mdi mdi-chevron-left"></span></button>
      <button type="button" class="media-modal-btn media-modal-next" data-media-next aria-label="Next" disabled hidden><span class="mdi mdi-chevron-right"></span></button>
      <figure class="media-modal-figure">
        <img class="media-modal-image" data-media-image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f3e1c7'/%3E%3Cstop offset='1' stop-color='%23b55d4c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ccircle cx='860' cy='290' r='90' fill='%23fff4e2' fill-opacity='.85'/%3E%3Cpath d='M0 610L260 420L470 560L700 360L1200 630V800H0Z' fill='%236e3a33'/%3E%3Cpath d='M0 700L320 570L620 690L900 540L1200 700V800H0Z' fill='%233f4752'/%3E%3C/svg%3E" alt="Site plan" draggable="false">
        <figcaption class="media-modal-caption" data-media-caption>Site plan · Ancoats, Manchester</figcaption>
      </figure>
      <div class="media-modal-zoom" role="group" aria-label="Zoom">
        <button type="button" data-media-zoom-out aria-label="Zoom out" title="Zoom out"><span class="mdi mdi-magnify-minus-outline"></span></button>
        <button type="button" data-media-zoom-reset aria-label="Fit to screen" title="Fit to screen"><span class="mdi mdi-fit-to-screen-outline"></span></button>
        <button type="button" data-media-zoom-in aria-label="Zoom in" title="Zoom in"><span class="mdi mdi-magnify-plus-outline"></span></button>
      </div>
    </div>
  </div>
</div>
::end

```html
<div id="planViewer" class="media-modal" data-media-max-zoom="8" …>…</div>
```

```js components
import { MediaPreviewModal } from "@abydahana/aksara-ui/components";

// Extra zoom headroom for detailed images
MediaPreviewModal({ id: "planViewer", items: [plan], attributes: { "data-media-max-zoom": 8 } });

// No zoom bar (keyboard, double click and wheel zoom still work)
MediaPreviewModal({ id: "storyViewer", items: stories, showZoomControls: false });
```

---

## Keyboard and Gestures

Keyboard shortcuts apply only to the topmost open overlay, and never while focus is in an input, textarea, select or contenteditable element (for example the comment field in a sidebar).

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Key or gesture</th><th>Action</th></tr>
    </thead>
    <tbody>
      <tr><td><kbd>←</kbd> / <kbd>→</kbd></td><td>Slide to the previous / next item. Mirrored in right-to-left layouts, so the key always points toward the item it shows.</td></tr>
      <tr><td><kbd>Home</kbd> / <kbd>End</kbd></td><td>Jump to the first / last item, without a slide.</td></tr>
      <tr><td><kbd>Escape</kbd></td><td>Close the viewer.</td></tr>
      <tr><td><kbd>+</kbd> <kbd>=</kbd> <kbd>-</kbd> <kbd>0</kbd></td><td>Zoom in, zoom in, zoom out, reset.</td></tr>
      <tr><td><kbd>Enter</kbd> / <kbd>Space</kbd></td><td>On a non-button trigger such as a Media Grid cell: open the viewer.</td></tr>
      <tr><td>Swipe left / right</td><td>At 1×, the track follows the finger with the neighbouring photo coming in. Past 20% of the width, or on a quick flick, it slides to that photo; otherwise it springs back. At the first and last item it stretches with resistance. Mirrored in RTL; <code>.is-swiping</code> is set while dragging.</td></tr>
      <tr><td>Click the dark area</td><td>A click on the stage around the image (not at the end of a drag) closes the viewer, like a backdrop.</td></tr>
    </tbody>
  </table>
</div>
::end

Set `data-media-keyboard="false"` (or the `keyboard: false` option) to turn the keyboard shortcuts off.

### Accessibility and RTL

- The viewer is a `role="dialog"` with `aria-modal="true"` and an `aria-label` (the `label` prop). Opening it moves focus to the viewer and closing it returns focus to the trigger.
- The counter is an `aria-live="polite"` region, so screen readers announce "2 / 5" as people browse.
- Every control is a real `<button>` with an `aria-label`. Media Grid cells get `role="button"`, `tabindex="0"` and an `aria-label` built from the item's `alt`.
- Opening the viewer locks page scrolling. It stacks with other overlays, so Escape closes only the topmost one.
- In `dir="rtl"` the close button and the previous/next buttons swap sides (logical properties), the chevrons are mirrored, the track is laid out right to left, and the arrow keys and swipe direction follow the reading order.
- The neighbour copies in the track are `aria-hidden` and `inert`, so screen readers and the Tab key only reach the current image. With `prefers-reduced-motion: reduce`, items change without the slide animation.

---

## JavaScript

`Aksara.init()` creates a viewer instance for every `.media-modal` in the page (or in the root you pass), so a viewer rendered with `open: true` works right away. Viewers added to the page later are created on first use: the first click on a `data-media-open` trigger or inside a `data-media-gallery`, the first call to `Aksara.media()`, or `Aksara.init(container)`. All triggers are delegated from `document`, so they also work for markup rendered later.

When an instance is created, the runtime wraps the `.media-modal-figure` in a `.media-modal-track` and adds two copies of it for the previous and next items (see Swipe and Slide above). Write your own markup with a single figure; never add the track yourself.

### Data attributes

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Attribute</th><th>On</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-media-open="#id"</code></td><td>Trigger</td><td>Opens the viewer matching the selector.</td></tr>
      <tr><td><code>data-media-index="2"</code></td><td>Trigger</td><td>Index to open at (0-based). Without it, the viewer opens at its current index.</td></tr>
      <tr><td><code>data-media-src</code>, <code>data-media-alt</code>, <code>data-media-caption</code></td><td>Trigger</td><td>Open this one image instead of a list. Replaces the viewer's items.</td></tr>
      <tr><td><code>data-media-items='[…]'</code></td><td>Any ancestor of a trigger, or the viewer</td><td>JSON list of <code>{ src, alt, caption }</code>. A trigger inside such an element browses that list; on the viewer it is the default list.</td></tr>
      <tr><td><code>data-media-gallery="#id"</code></td><td>Container</td><td>Every <code>[data-media-item]</code> inside (or every <code>&lt;img&gt;</code> when there are none) opens the viewer at that item.</td></tr>
      <tr><td><code>data-media-item</code></td><td>Gallery item</td><td>Marks an item. Source: <code>data-media-src</code>, then <code>href</code>, then the image inside.</td></tr>
      <tr><td><code>data-media-loop="true"</code></td><td>Viewer</td><td>Wrap around from the last item to the first.</td></tr>
      <tr><td><code>data-media-keyboard="false"</code></td><td>Viewer</td><td>Disable the keyboard shortcuts.</td></tr>
      <tr><td><code>data-media-max-zoom="4"</code></td><td>Viewer</td><td>Largest zoom factor.</td></tr>
      <tr><td><code>data-media-close</code>, <code>data-media-prev</code>, <code>data-media-next</code></td><td>Inside the viewer</td><td>Close, previous and next buttons.</td></tr>
      <tr><td><code>data-media-zoom-in</code>, <code>data-media-zoom-out</code>, <code>data-media-zoom-reset</code></td><td>Inside the viewer</td><td>Zoom buttons.</td></tr>
      <tr><td><code>data-media-stage</code>, <code>data-media-image</code>, <code>data-media-caption</code>, <code>data-media-current</code>, <code>data-media-total</code></td><td>Inside the viewer</td><td>Hooks the runtime updates: the swipe and pan area, the image, the caption and the counter.</td></tr>
      <tr><td><code>data-media-slot="prev|current|next"</code></td><td>Figures in the track</td><td>Set by the runtime on the three figures of <code>.media-modal-track</code>. The <code>prev</code> and <code>next</code> copies are <code>aria-hidden</code> and <code>inert</code>; zoom and pan apply to <code>current</code> only.</td></tr>
    </tbody>
  </table>
</div>
::end

### Events

Events are dispatched on the viewer element and bubble.

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Event</th><th>Fired when</th><th><code>event.detail</code></th></tr>
    </thead>
    <tbody>
      <tr><td><code>aksara:media:show</code></td><td>The viewer opens.</td><td><code>{ index, item, instance }</code></td></tr>
      <tr><td><code>aksara:media:change</code></td><td>The current item changes (buttons, keys, swipe or code).</td><td><code>{ index, item, instance }</code></td></tr>
      <tr><td><code>aksara:media:hide</code></td><td>The viewer closes.</td><td><code>{ instance }</code></td></tr>
    </tbody>
  </table>
</div>
::end

```js
const viewer = document.querySelector("#photoViewer");

// Keep the URL in sync so a photo can be shared
viewer.addEventListener("aksara:media:change", (event) => {
  history.replaceState(null, "", `#photo-${event.detail.index + 1}`);
});

viewer.addEventListener("aksara:media:show", (event) => {
  analytics.track("photo_viewer_opened", { src: event.detail.item.src });
});

viewer.addEventListener("aksara:media:hide", () => history.replaceState(null, "", location.pathname));
```

### JavaScript API

`Aksara.media(target, options)` returns the viewer instance for a `.media-modal` (or a list when the selector matches several). Every method returns the instance, so calls chain.

```js
const viewer = Aksara.media("#photoViewer");

viewer.show(); // open at the current index
viewer.show(2); // open at the third item
viewer.next(); // slides to the next item
viewer.prev(); // slides back
viewer.go(0); // jumps without a slide; clamped, or wrapped when loop is on
viewer.setZoom(2); // 1 to maxZoom
viewer.hide();
viewer.toggle();

// Load a new list (for example from an API) and open it at the first item
const photos = await fetch("/api/posts/42/photos").then((response) => response.json());
Aksara.media("#photoViewer").setItems(photos, 0).show();

// Options can be passed on first use or later
Aksara.media("#photoViewer", { loop: true, maxZoom: 6, keyboard: true });
```

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Member</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>show(index?)</code></td><td>Opens the viewer, optionally jumping to <code>index</code> (no slide). Locks scrolling, focuses the viewer and fires <code>aksara:media:show</code>.</td></tr>
      <tr><td><code>hide()</code></td><td>Closes, resets the zoom, returns focus and fires <code>aksara:media:hide</code>.</td></tr>
      <tr><td><code>toggle()</code></td><td>Opens or closes.</td></tr>
      <tr><td><code>next()</code>, <code>prev()</code></td><td>Slide to the neighbouring item (no slide past the ends without <code>loop</code>: the track springs back). Fires <code>aksara:media:change</code> once the slide has finished.</td></tr>
      <tr><td><code>go(index)</code></td><td>Jumps to <code>index</code> without a slide (clamped, or wrapped when <code>loop</code> is on). Fires <code>aksara:media:change</code> when the index actually changes.</td></tr>
      <tr><td><code>setItems(items, index = 0)</code></td><td>Replaces the list (also written back to <code>data-media-items</code>), refreshes the counter, buttons and neighbour slots, and jumps to <code>index</code> without a slide.</td></tr>
      <tr><td><code>setZoom(value)</code></td><td>Sets the zoom factor, clamped to <code>1</code> … <code>maxZoom</code>. <code>1</code> also resets the pan.</td></tr>
      <tr><td><code>items</code>, <code>index</code>, <code>zoom</code>, <code>isOpen</code></td><td>Current state (read only).</td></tr>
      <tr><td>Options: <code>items</code>, <code>index</code>, <code>loop</code>, <code>keyboard</code>, <code>maxZoom</code></td><td>Override the <code>data-media-*</code> attributes.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## String Component

`MediaPreviewModal` renders the viewer (aliases: `MediaModal`, `mediaModal`, `mediaPreviewModal`). Item sources go through the library's URL filter (`http(s)`, relative paths, `blob:` and `data:image/*` are allowed), and alt text and captions are escaped.

```ts
import { MediaGrid, MediaPreviewModal } from "@abydahana/aksara-ui/components";

const photos = [
  { src: "/uploads/1.jpg", alt: "Lake at first light", caption: "Windermere" },
  { src: "/uploads/2.jpg", alt: "Pine forest trail" }
];

MediaGrid({ items: photos, viewer: "#postViewer" }) +
  MediaPreviewModal({ id: "postViewer", items: photos, loop: true });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>id</code></td><td><code>string</code></td><td><code>"media-modal"</code></td><td>Element id, the target of <code>data-media-open</code> and <code>MediaGrid({ viewer })</code>.</td></tr>
      <tr><td><code>items</code></td><td><code>{ src, alt?, caption? }[]</code></td><td><code>[]</code></td><td>Initial list, serialized to <code>data-media-items</code>. Can be empty when a grid, gallery or trigger fills the viewer. The counter and previous/next buttons are always rendered, with <code>hidden</code> while there are fewer than two items.</td></tr>
      <tr><td><code>activeIndex</code></td><td><code>number</code></td><td><code>0</code></td><td>Item shown first (clamped to the list).</td></tr>
      <tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Render it already open (<code>.media-modal-open</code>). <code>Aksara.init()</code> binds it, so the controls, keys and gestures work without calling <code>Aksara.media()</code>.</td></tr>
      <tr><td><code>sidebar</code></td><td><code>string</code></td><td>—</td><td>Raw HTML for <code>&lt;aside class="media-modal-sidebar"&gt;</code> (comments, details).</td></tr>
      <tr><td><code>showZoomControls</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Render the zoom bar.</td></tr>
      <tr><td><code>loop</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>data-media-loop="true"</code>.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td><code>"Media viewer"</code></td><td>The dialog's <code>aria-label</code>.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on <code>.media-modal</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra attributes, e.g. <code>{ "data-media-max-zoom": 8 }</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

On `MediaGrid`, `viewer: "#id"` serializes all items (also the ones behind "+N") to the grid's `data-media-items` and turns every cell into a keyboard-accessible trigger. See [Media Grid](#/components/media-grid) for its other props.

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr><th>Class</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.media-modal</code></td><td>Fixed, full-screen dark layer (<code>z-index: 1060</code>), hidden until opened. Holds the zoom, pan and drag custom properties (<code>--aksara-media-zoom</code>, <code>--aksara-media-x</code>, <code>--aksara-media-y</code>, <code>--aksara-media-drag</code>).</td></tr>
      <tr><td><code>.media-modal-open</code></td><td>Shows the viewer as a column (a row from 768px when it has a sidebar), with a fade-in.</td></tr>
      <tr><td><code>.media-modal-stage</code></td><td>Flexible area that centers the image; handles swipe and pan (<code>touch-action: none</code>).</td></tr>
      <tr><td><code>.media-modal-track</code></td><td>Added by the runtime around the figure: a flex row of three stage-wide slots (previous, current, next), shifted so the current one is visible and moved by <code>--aksara-media-drag</code>. Mirrored in RTL.</td></tr>
      <tr><td><code>.media-modal-figure</code></td><td>Image plus caption, padded clear of the top and bottom controls. Inside the track each figure is one stage wide.</td></tr>
      <tr><td><code>.media-modal-figure.is-empty</code></td><td>A neighbour slot with no item (before the first or after the last without <code>loop</code>): kept in the layout but invisible.</td></tr>
      <tr><td><code>.media-modal-image</code></td><td>Contained image, scaled and translated by <code>--aksara-media-zoom</code>, <code>--aksara-media-x</code> and <code>--aksara-media-y</code>.</td></tr>
      <tr><td><code>.media-modal-caption</code></td><td>Centered caption under the image, up to 40rem wide.</td></tr>
      <tr><td><code>.media-modal-btn</code></td><td>Round translucent control button. Hidden while <code>:disabled</code>.</td></tr>
      <tr><td><code>.media-modal-close</code></td><td>Places the close button in the top start corner.</td></tr>
      <tr><td><code>.media-modal-prev</code>, <code>.media-modal-next</code></td><td>Vertically centered at the start and end edges; chevrons mirror in RTL.</td></tr>
      <tr><td><code>.media-modal-counter</code></td><td>"1 / 5" pill at the top center.</td></tr>
      <tr><td><code>.media-modal-zoom</code></td><td>Zoom bar pill at the bottom center.</td></tr>
      <tr><td><code>.media-modal-sidebar</code></td><td>Surface-colored side panel: under the stage (max 40vh) on phones, 22rem at the end from 768px, 26rem from 992px.</td></tr>
      <tr><td><code>.is-zoomed</code></td><td>State: zoom above 1× (grab cursor).</td></tr>
      <tr><td><code>.is-panning</code>, <code>.is-swiping</code></td><td>State while dragging; disables the image transform transition.</td></tr>
      <tr><td><code>.is-settling</code></td><td>State while the track animates to a neighbour or back (<code>transform</code> transition, .34s). Removed when the slide ends.</td></tr>
    </tbody>
  </table>
</div>
::end
