# Bento Card & Grid

A modern layout system inspired by Japanese bento boxes: organize diverse metrics, features, photo galleries, and rich media slots into a modular, responsive grid with zero manual coordinate positioning.

---

## Interactive Showcase

Explore Bento card variations below, featuring highlight cards with subtle gradient glows, compact metric cards, multi-span wide cards, and visual media slots:

::html
<div class="docs-preview py-4">
  <div class="bento-grid">
    <!-- Featured Card: Span 2 cols -->
    <article class="bento-card bento-col-2 bento-featured">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-primary mb-2">⭐ Featured Highlight</span>
          <h3 class="bento-title text-2xl font-800">Aksara UI v1.1.0</h3>
          <p class="bento-subtitle">Ultra-fast static CSS, zero runtime JS dependencies, and RTL-first.</p>
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
        <a href="#/" class="btn btn-sm btn-primary hstack gap-1">
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

---

## Gallery Grid Layouts

Bento cards are exceptionally suited for modern photography, digital art portfolios, product showcases, and media galleries. You can compose modular ratios like **1:2**, **1:3**, **2:2**, **2:1**, and **2x2 featured mosaics** with responsive fluidity.

### 1:2 Ratio Gallery (Portrait + Panoramic Landscape)

Combine a compact 1-column card (`bento-col-1`) with a wide 2-column showcase card (`bento-col-2`) inside a 3-column container (`bento-grid-3`). This layout provides an elegant focal contrast between vertical framing and wide vista imagery.

::html
<div class="docs-preview py-4">
  <div class="bento-grid-3">
    <!-- 1 Column: Portrait / Vertical Capture -->
    <article class="bento-card bento-col-1">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-warning mb-2">Portrait · 3:4</span>
          <h3 class="bento-title text-base">Golden Hour</h3>
          <p class="bento-subtitle">35mm Prime · f/1.4 · ISO 100</p>
        </div>
        <button class="btn btn-sm btn-icon btn-ghost" aria-label="Add to favorites">
          <span class="mdi mdi-heart-outline"></span>
        </button>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-lg overflow-hidden" style="background: linear-gradient(145deg, #f59e0b 0%, #ea580c 50%, #991b1b 100%); min-height: 190px; display: flex; align-items: center; justify-content: center; position: relative;">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="12" y1="2" x2="12" y2="4"></line>
            <line x1="12" y1="20" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
            <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="4" y2="12"></line>
            <line x1="20" y1="12" x2="22" y2="12"></line>
          </svg>
          <div style="position: absolute; bottom: 8px; left: 8px;" class="hstack gap-1">
            <span class="badge badge-primary">RAW</span>
            <span class="badge badge-soft-primary">48 MP</span>
          </div>
        </div>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">By Elena Rostova</span>
        <button class="btn btn-sm btn-soft-primary hstack gap-1">
          <span class="mdi mdi-magnify-plus-outline"></span> View
        </button>
      </div>
    </article>

    <!-- 2 Columns: Wide Panoramic Landscape Showcase -->
    <article class="bento-card bento-col-2 bento-featured">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-primary mb-2">Exhibition Feature · 16:9</span>
          <h3 class="bento-title text-xl font-800">Alpine Vista at Twilight</h3>
          <p class="bento-subtitle">Dolomites National Park · 24mm Ultra-Wide · HDR Exposure</p>
        </div>
        <div class="hstack gap-1">
          <span class="badge badge-soft-success">In Focus</span>
          <button class="btn btn-sm btn-icon btn-ghost" aria-label="Share">
            <span class="mdi mdi-share-variant-outline"></span>
          </button>
        </div>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-xl overflow-hidden mb-3" style="background: linear-gradient(135deg, #0f172a 0%, #0369a1 50%, #10b981 100%); min-height: 190px; display: flex; align-items: center; justify-content: center; position: relative;">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            <circle cx="18" cy="5" r="2"></circle>
          </svg>
          <div style="position: absolute; top: 12px; right: 12px;" class="hstack gap-1">
            <span class="badge badge-soft-info">Ultra HD</span>
            <span class="badge badge-soft-warning">DCI-P3</span>
          </div>
          <div style="position: absolute; bottom: 12px; left: 12px; color: #ffffff;" class="text-xs font-600">
            ISO 64 · 24mm · f/8.0 · 30s
          </div>
        </div>
        <div class="hstack gap-2 flex-wrap">
          <span class="badge badge-soft-primary">Landscape</span>
          <span class="badge badge-soft-secondary">Long Exposure</span>
          <span class="badge badge-soft-info">Alps</span>
          <span class="text-xs text-subtle ms-auto">Shutter Count: #1,842</span>
        </div>
      </div>
      <div class="bento-footer">
        <div class="hstack gap-2 items-center">
          <span class="badge badge-dot bg-success"></span>
          <span class="text-xs text-subtle">Licensed under CC BY-SA 4.0</span>
        </div>
        <div class="hstack gap-2">
          <button class="btn btn-sm btn-outline-primary hstack gap-1">
            <span class="mdi mdi-information-outline"></span> EXIF
          </button>
          <button class="btn btn-sm btn-primary hstack gap-1">
            <span class="mdi mdi-download"></span> Download Hi-Res
          </button>
        </div>
      </div>
    </article>

  </div>
</div>
::end

```html
<!-- 1:2 Gallery Layout (3-Column Bento Grid) -->
<div class="bento-grid-3">
  <!-- 1-Column Portrait Card -->
  <article class="bento-card bento-col-1">
    <div class="bento-header">
      <div>
        <span class="badge badge-soft-warning">Portrait · 3:4</span>
        <h3 class="bento-title">Golden Hour</h3>
        <p class="bento-subtitle">35mm Prime · f/1.4</p>
      </div>
    </div>
    <div class="bento-body">
      <div class="bento-visual">...</div>
    </div>
    <div class="bento-footer">
      <span>Elena Rostova</span>
      <button class="btn btn-sm btn-soft-primary">View</button>
    </div>
  </article>

  <!-- 2-Column Wide Panoramic Card -->
  <article class="bento-card bento-col-2 bento-featured">
    <div class="bento-header">
      <div>
        <span class="badge badge-soft-primary">Featured · 16:9</span>
        <h3 class="bento-title">Alpine Vista at Twilight</h3>
        <p class="bento-subtitle">24mm Ultra-Wide · HDR</p>
      </div>
    </div>
    <div class="bento-body">
      <div class="bento-visual">...</div>
    </div>
    <div class="bento-footer">
      <span>Licensed CC BY-SA</span>
      <button class="btn btn-sm btn-primary">Download</button>
    </div>
  </article>
</div>
```

---

### 1:3 Ratio Gallery (EXIF Specs Sidebar + Ultrawide Hero Banner)

Combine a compact 1-column specification sidebar (`bento-col-1`) with a sweeping 3-column panoramic artwork banner (`bento-col-3`) inside a 4-column container (`bento-grid-4`). You can also reverse the order to create a **3:1** layout.

::html
<div class="docs-preview py-4">
  <div class="bento-grid-4">
    <!-- 1 Column: EXIF & Camera Equipment Details -->
    <article class="bento-card bento-col-1">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-info mb-1">EXIF Specs</span>
          <h3 class="bento-title text-base">Camera Info</h3>
          <p class="bento-subtitle">Optics & parameters</p>
        </div>
        <span class="mdi mdi-camera-iris text-info text-xl"></span>
      </div>
      <div class="bento-body">
        <div class="p-3 rounded-lg bg-subtle border border-subtle mb-3 vstack gap-2 text-xs">
          <div class="hstack justify-between">
            <span class="text-subtle">Camera:</span>
            <span class="font-600">Sony α7 IV</span>
          </div>
          <div class="hstack justify-between">
            <span class="text-subtle">Lens:</span>
            <span class="font-600">FE 85mm F1.4</span>
          </div>
          <div class="hstack justify-between">
            <span class="text-subtle">Shutter:</span>
            <span class="font-600 font-mono">1/1600s</span>
          </div>
          <div class="hstack justify-between">
            <span class="text-subtle">Aperture:</span>
            <span class="font-600 font-mono">f/1.8</span>
          </div>
          <div class="hstack justify-between">
            <span class="text-subtle">ISO:</span>
            <span class="font-600 font-mono">100</span>
          </div>
        </div>

        <div class="text-xs text-subtle mb-1 font-600">Color Palette</div>
        <div class="hstack gap-2">
          <span style="inline-size: 18px; block-size: 18px; border-radius: 99px; background: #6366f1;"></span>
          <span style="inline-size: 18px; block-size: 18px; border-radius: 99px; background: #ec4899;"></span>
          <span style="inline-size: 18px; block-size: 18px; border-radius: 99px; background: #06b6d4;"></span>
          <span style="inline-size: 18px; block-size: 18px; border-radius: 99px; background: #10b981;"></span>
          <span style="inline-size: 18px; block-size: 18px; border-radius: 99px; background: #1e293b;"></span>
        </div>
      </div>
      <div class="bento-footer">
        <span class="badge badge-soft-success">Verified RAW</span>
        <button class="btn btn-sm btn-ghost" data-clipboard="Sony α7 IV · FE 85mm F1.4 · 1/1600s · f/1.8 · ISO 100">
          Copy
        </button>
      </div>
    </article>

    <!-- 3 Columns: Ultrawide Panoramic Artwork Banner -->
    <article class="bento-card bento-col-3 bento-featured">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-danger mb-2">Editor's Choice · Cinema 21:9</span>
          <h3 class="bento-title text-2xl font-800">Neon Nocturne: Rain Over Shinjuku</h3>
          <p class="bento-subtitle">Atmospheric reflections and neon light-trails captured across Tokyo's neon corridors.</p>
        </div>
        <div class="hstack gap-2">
          <span class="badge badge-soft-primary">8K Master</span>
          <button class="btn btn-sm btn-icon btn-ghost" aria-label="Bookmark photo">
            <span class="mdi mdi-bookmark-outline"></span>
          </button>
        </div>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-xl overflow-hidden mb-3" style="background: linear-gradient(120deg, #18181b 0%, #311042 35%, #701a75 70%, #0369a1 100%); min-height: 190px; display: flex; align-items: center; justify-content: center; position: relative;">
          <svg width="120" height="70" viewBox="0 0 120 70" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5">
            <rect x="10" y="20" width="18" height="40" rx="2"></rect>
            <rect x="34" y="10" width="24" height="50" rx="2"></rect>
            <rect x="64" y="25" width="20" height="35" rx="2"></rect>
            <rect x="90" y="15" width="20" height="45" rx="2"></rect>
            <line x1="0" y1="60" x2="120" y2="60" stroke="#ec4899" stroke-width="2"></line>
          </svg>
          <div style="position: absolute; bottom: 12px; left: 16px;" class="hstack gap-2">
            <span class="badge badge-soft-light">Cyberpunk</span>
            <span class="badge badge-soft-light">Cityscape</span>
            <span class="badge badge-soft-light">Tokyo</span>
          </div>
          <div style="position: absolute; top: 12px; right: 16px; color: #ffffff;" class="text-xs font-mono">
            Aspect: 21:9 · 7680 × 3290
          </div>
        </div>
      </div>
      <div class="bento-footer">
        <div class="hstack gap-2 items-center">
          <span class="badge badge-soft-primary">Curated Series</span>
          <span class="text-xs text-subtle">Series #04 of Neo Tokyo Collection</span>
        </div>
        <div class="hstack gap-2">
          <button class="btn btn-sm btn-outline-primary hstack gap-1">
            <span class="mdi mdi-eye-outline"></span> Preview Full
          </button>
          <button class="btn btn-sm btn-primary hstack gap-1">
            <span class="mdi mdi-cart-outline"></span> License Print
          </button>
        </div>
      </div>
    </article>

  </div>
</div>
::end

```html
<!-- 1:3 Gallery Layout (4-Column Bento Grid) -->
<div class="bento-grid-4">
  <!-- 1-Column Sidebar Specs Card -->
  <article class="bento-card bento-col-1">
    <div class="bento-header">
      <h3 class="bento-title">Camera Info</h3>
    </div>
    <div class="bento-body">
      <!-- EXIF specs & color palette -->
    </div>
    <div class="bento-footer">
      <span class="badge badge-soft-success">Verified RAW</span>
    </div>
  </article>

  <!-- 3-Column Panoramic Art Banner -->
  <article class="bento-card bento-col-3 bento-featured">
    <div class="bento-header">
      <h3 class="bento-title">Neon Nocturne: Rain Over Shinjuku</h3>
    </div>
    <div class="bento-body">
      <div class="bento-visual">...</div>
    </div>
    <div class="bento-footer">
      <button class="btn btn-sm btn-primary">License Print</button>
    </div>
  </article>
</div>
```

---

### 2:2 Balanced Ratio Gallery (Dual Spotlight Split)

Equal 50/50 balance across desktop screens using two `bento-col-2` cards inside a 4-column container (`bento-grid-4`), or two cards inside a 2-column container (`bento-grid-2`). Ideal for side-by-side thematic comparisons or collection showcases.

::html
<div class="docs-preview py-4">
  <div class="bento-grid-4">
    <!-- First Half (2 cols): Architectural Series -->
    <article class="bento-card bento-col-2">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-primary mb-2">Series A · Architecture</span>
          <h3 class="bento-title text-lg font-700">Monochrome Geometries</h3>
          <p class="bento-subtitle">Brutalist curves and modern concrete shadows</p>
        </div>
        <span class="mdi mdi-domain text-primary text-2xl"></span>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-xl overflow-hidden mb-3" style="background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #64748b 100%); min-height: 160px; display: flex; align-items: center; justify-content: center; position: relative;">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="1.3">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <div style="position: absolute; bottom: 8px; left: 12px;">
            <span class="badge badge-soft-info">18 Works</span>
          </div>
        </div>
        <p class="text-xs text-subtle">Exploration of architectural minimalism across Scandinavian civic centers.</p>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">Curated by Marcus Lind</span>
        <button class="btn btn-sm btn-soft-primary hstack gap-1">
          Explore Series <span class="mdi mdi-arrow-right"></span>
        </button>
      </div>
    </article>

    <!-- Second Half (2 cols): Botanical Textures -->
    <article class="bento-card bento-col-2">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-success mb-2">Series B · Wilderness</span>
          <h3 class="bento-title text-lg font-700">Emerald Forest Canopy</h3>
          <p class="bento-subtitle">Macro chlorophyll patterns & rainforest morning dew</p>
        </div>
        <span class="mdi mdi-leaf text-success text-2xl"></span>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-xl overflow-hidden mb-3" style="background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%); min-height: 160px; display: flex; align-items: center; justify-content: center; position: relative;">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="1.3">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
          </svg>
          <div style="position: absolute; bottom: 8px; left: 12px;">
            <span class="badge badge-soft-success">24 Works</span>
          </div>
        </div>
        <p class="text-xs text-subtle">High-magnification botanical studies captured in Costa Rica cloud forests.</p>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">Curated by Sarah Lin</span>
        <button class="btn btn-sm btn-soft-success hstack gap-1">
          Explore Series <span class="mdi mdi-arrow-right"></span>
        </button>
      </div>
    </article>

  </div>
</div>
::end

```html
<!-- 2:2 Balanced Gallery (4-Column Bento Grid) -->
<div class="bento-grid-4">
  <article class="bento-card bento-col-2">
    <div class="bento-header">
      <h3 class="bento-title">Monochrome Geometries</h3>
    </div>
    <div class="bento-body">
      <div class="bento-visual">...</div>
    </div>
    <div class="bento-footer">
      <button class="btn btn-sm btn-soft-primary">Explore Series</button>
    </div>
  </article>

  <article class="bento-card bento-col-2">
    <div class="bento-header">
      <h3 class="bento-title">Emerald Forest Canopy</h3>
    </div>
    <div class="bento-body">
      <div class="bento-visual">...</div>
    </div>
    <div class="bento-footer">
      <button class="btn btn-sm btn-soft-success">Explore Series</button>
    </div>
  </article>
</div>
```

---

### Asymmetric Mosaic with 2x2 Hero Spanning

Create captivating asymmetric editorial layouts by combining a 2-column, 2-row prominent hero card (`bento-col-2 bento-row-2 bento-featured`) alongside complementary secondary media cards and compact thumbnails:

::html
<div class="docs-preview py-4">
  <div class="bento-grid-4">
    <!-- Centerpiece Hero: Spans 2 cols AND 2 rows -->
    <article class="bento-card bento-col-2 bento-row-2 bento-featured">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-warning mb-2">⭐ Centerpiece Gallery</span>
          <h3 class="bento-title text-2xl font-800">Deep Space Nebula</h3>
          <p class="bento-subtitle">James Webb Space Telescope composite imagery</p>
        </div>
        <span class="mdi mdi-telescope text-warning text-2xl"></span>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-xl overflow-hidden mb-3" style="background: linear-gradient(135deg, #09090b 0%, #1e1b4b 40%, #581c87 75%, #db2777 100%); min-height: 260px; display: flex; align-items: center; justify-content: center; position: relative;">
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="1.2">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="m4.93 4.93 4.24 4.24"></path>
            <path d="m14.83 9.17 4.24-4.24"></path>
            <path d="m14.83 14.83 4.24 4.24"></path>
            <path d="m9.17 14.83-4.24 4.24"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <div style="position: absolute; bottom: 12px; left: 16px;" class="hstack gap-2">
            <span class="badge badge-primary">Infrared composite</span>
            <span class="badge badge-soft-primary">Carina Nebula</span>
          </div>
        </div>
        <p class="text-sm text-subtle">
          Infrared spectrum visualization revealing previously invisible stellar nurseries and cosmic dust clouds.
        </p>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">NASA / ESA / CSA Archives</span>
        <button class="btn btn-sm btn-primary hstack gap-1">
          <span class="mdi mdi-telescope"></span> High-Res Viewer
        </button>
      </div>
    </article>

    <!-- Secondary Landscape Card: Spans 2 cols, 1 row -->
    <article class="bento-card bento-col-2">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-info mb-1">Aurora Borealis</span>
          <h3 class="bento-title text-base">Tromsø Lights</h3>
          <p class="bento-subtitle">Arctic geomagnetic storm</p>
        </div>
        <span class="mdi mdi-weather-night text-info text-xl"></span>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-lg overflow-hidden" style="background: linear-gradient(135deg, #022c22 0%, #059669 60%, #34d399 100%); min-height: 90px; display: flex; align-items: center; justify-content: center; position: relative;">
          <span class="text-xs font-mono text-white">KP-Index: 7.2 · Norway</span>
        </div>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">14mm f/2.8 · 8s</span>
        <button class="btn btn-sm btn-ghost">Details</button>
      </div>
    </article>

    <!-- Thumbnail 1: 1 col -->
    <article class="bento-card bento-col-1">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-danger mb-1">Solar Flare</span>
          <h3 class="bento-title text-sm">Sunspot 3664</h3>
        </div>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-lg overflow-hidden" style="background: linear-gradient(135deg, #7c2d12 0%, #ea580c 100%); min-height: 80px; display: flex; align-items: center; justify-content: center;">
          <span class="mdi mdi-white-balance-sunny text-white text-2xl"></span>
        </div>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle font-mono">X5.8 Class</span>
      </div>
    </article>

    <!-- Thumbnail 2: 1 col -->
    <article class="bento-card bento-col-1">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-secondary mb-1">Lunar Rim</span>
          <h3 class="bento-title text-sm">Tycho Crater</h3>
        </div>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-lg overflow-hidden" style="background: linear-gradient(135deg, #334155 0%, #94a3b8 100%); min-height: 80px; display: flex; align-items: center; justify-content: center;">
          <span class="mdi mdi-moon-waning-crescent text-white text-2xl"></span>
        </div>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle font-mono">85 km Dia</span>
      </div>
    </article>

  </div>
</div>
::end

```html
<!-- Asymmetric Gallery (Hero 2x2 with Stacked Secondary Cards) -->
<div class="bento-grid-4">
  <!-- Large 2x2 Centerpiece Hero -->
  <article class="bento-card bento-col-2 bento-row-2 bento-featured">
    <div class="bento-header">
      <h3 class="bento-title">Deep Space Nebula</h3>
    </div>
    <div class="bento-body">
      <div class="bento-visual">...</div>
    </div>
    <div class="bento-footer">
      <button class="btn btn-sm btn-primary">High-Res Viewer</button>
    </div>
  </article>

  <!-- Secondary 2-Column Card -->
  <article class="bento-card bento-col-2">
    <div class="bento-header"><h3 class="bento-title">Tromsø Lights</h3></div>
    <div class="bento-body"><div class="bento-visual">...</div></div>
  </article>

  <!-- Compact 1-Column Thumbnails -->
  <article class="bento-card bento-col-1">...</article>
  <article class="bento-card bento-col-1">...</article>
</div>
```

---

### Triptych Gallery (1:1:1 Equal 3-Piece Suite)

For photo series shot across three harmonious moments, use three standard cards inside `bento-grid-3`:

::html
<div class="docs-preview py-4">
  <div class="bento-grid-3">
    <!-- Phase 01 -->
    <article class="bento-card">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-info mb-1">Phase 01 · 05:45 AM</span>
          <h3 class="bento-title text-base">First Light</h3>
          <p class="bento-subtitle">Misty Valley Sunrise</p>
        </div>
        <span class="mdi mdi-weather-sunset-up text-info text-xl"></span>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-lg overflow-hidden" style="background: linear-gradient(135deg, #0369a1 0%, #38bdf8 100%); min-height: 120px; display: flex; align-items: center; justify-content: center;">
          <span class="badge badge-primary">Dawn</span>
        </div>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">Color Temp: 3800K</span>
        <span class="text-xs font-600">Part I</span>
      </div>
    </article>

    <!-- Phase 02 -->
    <article class="bento-card">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-warning mb-1">Phase 02 · 12:30 PM</span>
          <h3 class="bento-title text-base">Zenith Sun</h3>
          <p class="bento-subtitle">High Contrast Shadows</p>
        </div>
        <span class="mdi mdi-white-balance-sunny text-warning text-xl"></span>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-lg overflow-hidden" style="background: linear-gradient(135deg, #d97706 0%, #fbbf24 100%); min-height: 120px; display: flex; align-items: center; justify-content: center;">
          <span class="badge badge-primary">Noon</span>
        </div>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">Color Temp: 5600K</span>
        <span class="text-xs font-600">Part II</span>
      </div>
    </article>

    <!-- Phase 03 -->
    <article class="bento-card">
      <div class="bento-header">
        <div>
          <span class="badge badge-soft-danger mb-1">Phase 03 · 19:15 PM</span>
          <h3 class="bento-title text-base">Blue Hour</h3>
          <p class="bento-subtitle">Twilight Mountain Glow</p>
        </div>
        <span class="mdi mdi-weather-sunset-down text-danger text-xl"></span>
      </div>
      <div class="bento-body">
        <div class="bento-visual p-0 rounded-lg overflow-hidden" style="background: linear-gradient(135deg, #4338ca 0%, #818cf8 100%); min-height: 120px; display: flex; align-items: center; justify-content: center;">
          <span class="badge badge-primary">Dusk</span>
        </div>
      </div>
      <div class="bento-footer">
        <span class="text-xs text-subtle">Color Temp: 7200K</span>
        <span class="text-xs font-600">Part III</span>
      </div>
    </article>

  </div>
</div>
::end

---

## Bento Classes Reference

::html
<div class="table-responsive my-3">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 220px;">Class</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>.bento-grid</code></td>
        <td>Responsive CSS grid container (1 column on mobile, 3 columns on desktop).</td>
      </tr>
      <tr>
        <td><code>.bento-grid-2</code></td>
        <td>Grid variant with 2 columns on desktop (ideal for 2:2 half-and-half layouts).</td>
      </tr>
      <tr>
        <td><code>.bento-grid-3</code></td>
        <td>Grid variant with 3 columns on desktop (ideal for 1:2 and triptych 1:1:1 layouts).</td>
      </tr>
      <tr>
        <td><code>.bento-grid-4</code></td>
        <td>Grid variant with 4 columns on desktop (ideal for 1:3, 3:1, 2:2, and 4-piece suites).</td>
      </tr>
      <tr>
        <td><code>.bento-card</code></td>
        <td>Tactile bento card with modern border radius, surface tokens, and interactive elevation hover effects.</td>
      </tr>
      <tr>
        <td><code>.bento-col-1</code> to <code>.bento-col-4</code></td>
        <td>Defines column span width (1 column on mobile, expands up to span 4 on desktop).</td>
      </tr>
      <tr>
        <td><code>.bento-row-1</code> to <code>.bento-row-3</code></td>
        <td>Defines row span height on desktop screens.</td>
      </tr>
      <tr>
        <td><code>.bento-featured</code></td>
        <td>Highlights card with subtle gradient background and glowing accent border.</td>
      </tr>
      <tr>
        <td><code>.bento-header</code></td>
        <td>Top flex area containing title, subtitle, badges, or action buttons.</td>
      </tr>
      <tr>
        <td><code>.bento-body</code></td>
        <td>Main flexible content container expanding to fill available card height.</td>
      </tr>
      <tr>
        <td><code>.bento-footer</code></td>
        <td>Bottom bar for action buttons, status indicator, or helper links.</td>
      </tr>
      <tr>
        <td><code>.bento-visual</code></td>
        <td>Visual container slot for mockups, photography, or interactive previews.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## TypeScript Component Helper

For applications using TypeScript or component rendering, Aksara UI provides structured builders for grids, cards, headers, visuals, and footers:

```ts
import {
  BentoGrid,
  BentoCard,
  BentoHeader,
  BentoTitle,
  BentoVisual,
  BentoBody,
  BentoFooter
} from "@abydahana/aksara-ui/components";

// Example: 1:2 Gallery Layout built with TypeScript
const galleryHtml = BentoGrid({
  cols: 3,
  children: `
    ${BentoCard({
      colSpan: 1,
      children: `
        ${BentoHeader({
          children: BentoTitle({ title: "Golden Hour", subtitle: "35mm Prime · f/1.4" })
        })}
        ${BentoBody({
          children: BentoVisual({
            children: '<span class="badge badge-primary">3:4 Portrait</span>'
          })
        })}
        ${BentoFooter({ children: "<span>Elena Rostova</span>" })}
      `
    })}

    ${BentoCard({
      colSpan: 2,
      featured: true,
      children: `
        ${BentoHeader({
          children: BentoTitle({
            title: "Alpine Vista at Twilight",
            subtitle: "24mm Ultra-Wide · Dolomites"
          })
        })}
        ${BentoBody({
          children: BentoVisual({
            children: '<span class="badge badge-primary">16:9 Landscape</span>'
          })
        })}
        ${BentoFooter({
          children: '<button class="btn btn-sm btn-primary">Download Hi-Res</button>'
        })}
      `
    })}
  `
});
```
