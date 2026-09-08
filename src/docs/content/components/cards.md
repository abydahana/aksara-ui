# Cards

Cards are robust layout blocks designed to frame cohesive content chunks (such as analytical stats, pricing grids, news summaries, or user settings) inside a clean, rounded compartment.

---

## Interactive Dashboard Showcase

Explore Aksara UI's borderless cards in action. Headers and footers merge seamlessly with the card body without dividing separator lines.

### Padded Card-Body Rounded Images (No Header)

This modern layout features a **rounded image embedded directly inside the padded card-body** rather than cropped at the card edges, creating a highly polished, framed presentation perfect for articles, products, and modern portfolios:

::html
<div class="docs-preview">
  <div class="row gap-5">

    <!-- 1. Product/Innovation Card with Padded Body Image -->
    <div class="col-12 md:col-6">
      <article class="card border border-subtle bg-body">
        <div class="card-body">
          <div class="w-full rounded-12 mb-4 bg-subtle border border-subtle hstack justify-center items-center text-primary" style="aspect-ratio: 16/10;">
            <span class="mdi mdi-laptop text-5xl opacity-80"></span>
          </div>

          <span class="text-xs text-primary font-800 uppercase tracking-widest block mb-2">Workspace Innovation</span>
          <h4 class="card-title mt-0 mb-2 text-xl font-800">Next-Gen Developer Studio</h4>
          <p class="card-text text-subtle text-sm mb-4 mt-0">
            Optimize your setup with modular smart standing desks, custom ambient lightbars, and ergonomic posture chairs designed to elevate productivity.
          </p>

          <button class="btn btn-primary hstack gap-2">
            Configure Studio <span class="mdi mdi-cog-outline mdi-18px"></span>
          </button>
        </div>
      </article>
    </div>

    <!-- 2. Portfolio/Minimal Card with Padded Body Image -->
    <div class="col-12 md:col-6">
      <article class="card border border-subtle bg-body">
        <div class="card-body">
          <div class="w-full rounded-12 mb-4 bg-subtle border border-subtle hstack justify-center items-center text-success" style="aspect-ratio: 16/10;">
            <span class="mdi mdi-palette-outline text-5xl opacity-80"></span>
          </div>

          <span class="text-xs text-success font-800 uppercase tracking-widest block mb-2">Minimalist Design</span>
          <h4 class="card-title mt-0 mb-2 text-xl font-800">Architectural Spatial Balance</h4>
          <p class="card-text text-subtle text-sm mb-4 mt-0">
            Discover how natural lighting angles, clean monochrome surfaces, and selective plant layouts can breathe peace and balance into active living spaces.
          </p>

          <button class="btn btn-soft-success hstack gap-2">
            View Showcase <span class="mdi mdi-image-multiple-outline mdi-18px"></span>
          </button>
        </div>
      </article>
    </div>

  </div>
</div>
::end

```html
<!-- Card with rounded image directly inside padded Card Body -->
<div class="card border border-subtle bg-body">
  <div class="card-body">
    <!-- Image gets a custom rounded border-radius inside the body padding -->
    <img class="w-full rounded-12 mb-4" src="workspace.jpg" alt="Workspace" />

    <span class="text-xs text-primary font-800 uppercase tracking-widest block mb-2">Category</span>
    <h4 class="card-title">Card Title</h4>
    <p class="card-text">Descriptive text about the article or product.</p>

    <button class="btn btn-primary">Action Button</button>
  </div>
</div>
```

### Complete Layouts (Borderless Headers & Footers)

::html
<div class="docs-preview">
  <div class="row gap-5">

    <!-- 1. Rich Card with Top Image Header -->
    <div class="col-12 md:col-6">
      <article class="card border border-subtle bg-body h-100%">
        <div class="card-img bg-subtle border-bottom border-subtle hstack justify-center items-center text-info" style="aspect-ratio: 16/10;">
          <span class="mdi mdi-image-area text-5xl opacity-80"></span>
        </div>

        <div class="card-body">
          <div class="hstack gap-2 mb-2 flex-wrap">
            <span class="badge badge-soft-success">Travel Guide</span>
            <span class="badge badge-soft-primary"><span class="mdi mdi-clock-outline me-1"></span>5 min read</span>
          </div>
          <h4 class="card-title mt-0 mb-2 text-xl font-800">Alpine Adventure Exploration</h4>
          <p class="card-text text-subtle text-sm mb-4 mt-0">
            Embark on an extraordinary journey through high alpine meadows, pristine crystal mountain peaks, and hidden valleys.
          </p>
        </div>

        <footer class="card-footer hstack gap-3 justify-between">
          <button class="btn btn-sm btn-ghost"><span class="mdi mdi-heart-outline"></span> Favorite</button>
          <button class="btn btn-sm btn-primary hstack gap-2">
            Explore Now <span class="mdi mdi-arrow-right"></span>
          </button>
        </footer>
      </article>
    </div>

    <!-- 2. Minimalist Borderless Header/Footer Card -->
    <div class="col-12 md:col-6">
      <article class="card border border-subtle bg-body h-100%">
        <header class="card-header pb-0 text-subtle text-xs font-800 uppercase tracking-widest hstack gap-2">
          <span class="mdi mdi-star-circle text-warning mdi-18px"></span> Featured Case Study
        </header>

        <div class="card-body">
          <h4 class="card-title mt-0 mb-2 text-xl font-800">The Art of Borderless UI Design</h4>
          <p class="card-text text-subtle text-sm mb-4 mt-0">
            Discover how dropping hard borders, leveraging micro-spacing patterns, and utilizing soft background tints creates interfaces that feel fluid, breathable, and highly integrated.
          </p>
        </div>

        <footer class="card-footer pt-0">
          <button class="btn btn-sm btn-soft-primary btn-block hstack justify-center gap-2">
            Read Case Study <span class="mdi mdi-book-open-page-variant-outline"></span>
          </button>
        </footer>
      </article>
    </div>

  </div>
</div>
::end

---

## Height Alignments (Uneven vs Equal Height)

Compare the differences below to understand height controls. Column grids naturally wrap cards according to their content size unless forced:

### 1. Default Auto-Height Columns (Uneven Heights)

By default, card heights adapt dynamically to their specific text content, resulting in **uneven bottom borders** when cards have different amounts of description copy:

::html
<div class="docs-preview">
  <div class="row gap-5">

    <!-- Uneven Card 1 -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body">
        <div class="card-img bg-subtle border-bottom border-subtle hstack justify-center items-center text-primary" style="aspect-ratio: 16/10;">
          <span class="mdi mdi-xml text-4xl opacity-80"></span>
        </div>
        <div class="card-body">
          <h4 class="card-title mt-0 mb-2 font-800">Web Engineering</h4>
          <p class="card-text text-subtle text-sm mt-0 mb-0">
            Master logical coordinate spacing systems and high-performance vanilla components.
          </p>
        </div>
        <footer class="card-footer pt-0">
          <span class="text-subtle text-xs">Aksara Core</span>
        </footer>
      </article>
    </div>

    <!-- Uneven Card 2 -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body">
        <div class="card-img bg-subtle border-bottom border-subtle hstack justify-center items-center text-success" style="aspect-ratio: 16/10;">
          <span class="mdi mdi-layers-triple-outline text-4xl opacity-80"></span>
        </div>
        <div class="card-body">
          <h4 class="card-title mt-0 mb-2 font-800">Logical Frameworks</h4>
          <p class="card-text text-subtle text-sm mt-0 mb-0">
            Discover the layout mirroring power of direction-agnostic logical boundaries.
          </p>
        </div>
        <footer class="card-footer pt-0">
          <span class="text-subtle text-xs">RTL-First</span>
        </footer>
      </article>
    </div>

    <!-- Uneven Card 3 (Tallest content) -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body">
        <div class="card-img bg-subtle border-bottom border-subtle hstack justify-center items-center text-warning" style="aspect-ratio: 16/10;">
          <span class="mdi mdi-speedometer text-4xl opacity-80"></span>
        </div>
        <div class="card-body">
          <h4 class="card-title mt-0 mb-2 font-800">Static Compile Runtimes</h4>
          <p class="card-text text-subtle text-sm mt-0 mb-0">
            Eliminate all dynamic compilation lags, heavy runtime stylesheet injection cycles, and node bundle bloats. Prebuilt static CSS stylesheets deliver instant paints and immediate performance out-of-the-box, ensuring layouts load within a single refresh loop.
          </p>
        </div>
        <footer class="card-footer pt-0">
          <span class="text-subtle text-xs">Zero JIT</span>
        </footer>
      </article>
    </div>

  </div>
</div>
::end

```html
<!-- Default Auto-Height Column Grid (Uneven heights) -->
<div class="row gap-5">
  <div class="col-12 md:col-4">
    <!-- Notice: NO h-100% utility applied. Height wraps content. -->
    <div class="card bg-body border border-subtle">...</div>
  </div>
</div>
```

### 2. Equal-Height Columns (Stretched with `h-100%`)

By applying the **`h-100%`** (or `h-full`) class to each card container inside the columns, all cards stretch to exactly match the vertical bounds of the tallest card in the row, creating a **harmonious, perfectly aligned bottom edge**:

::html
<div class="docs-preview">
  <div class="row gap-5">

    <!-- Equal Card 1 (Stretched) -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body h-100%">
        <div class="card-img bg-subtle border-bottom border-subtle hstack justify-center items-center text-primary" style="aspect-ratio: 16/10;">
          <span class="mdi mdi-xml text-4xl opacity-80"></span>
        </div>
        <div class="card-body">
          <h4 class="card-title mt-0 mb-2 font-800">Web Engineering</h4>
          <p class="card-text text-subtle text-sm mt-0 mb-0">
            Master logical coordinate spacing systems and high-performance vanilla components.
          </p>
        </div>
        <footer class="card-footer pt-0">
          <span class="text-subtle text-xs">Aksara Core</span>
        </footer>
      </article>
    </div>

    <!-- Equal Card 2 (Stretched) -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body h-100%">
        <div class="card-img bg-subtle border-bottom border-subtle hstack justify-center items-center text-success" style="aspect-ratio: 16/10;">
          <span class="mdi mdi-layers-triple-outline text-4xl opacity-80"></span>
        </div>
        <div class="card-body">
          <h4 class="card-title mt-0 mb-2 font-800">Logical Frameworks</h4>
          <p class="card-text text-subtle text-sm mt-0 mb-0">
            Discover the layout mirroring power of direction-agnostic logical boundaries.
          </p>
        </div>
        <footer class="card-footer pt-0">
          <span class="text-subtle text-xs">RTL-First</span>
        </footer>
      </article>
    </div>

    <!-- Equal Card 3 (Tallest content) -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body h-100%">
        <div class="card-img bg-subtle border-bottom border-subtle hstack justify-center items-center text-warning" style="aspect-ratio: 16/10;">
          <span class="mdi mdi-speedometer text-4xl opacity-80"></span>
        </div>
        <div class="card-body">
          <h4 class="card-title mt-0 mb-2 font-800">Static Compile Runtimes</h4>
          <p class="card-text text-subtle text-sm mt-0 mb-0">
            Eliminate all dynamic compilation lags, heavy runtime stylesheet injection cycles, and node bundle bloats. Prebuilt static CSS stylesheets deliver instant paints and immediate performance out-of-the-box, ensuring layouts load within a single refresh loop.
          </p>
        </div>
        <footer class="card-footer pt-0">
          <span class="text-subtle text-xs">Zero JIT</span>
        </footer>
      </article>
    </div>

  </div>
</div>
::end

```html
<!-- Equal-Height Column Grid (Aligned using h-100%) -->
<div class="row gap-5">
  <div class="col-12 md:col-4">
    <!-- Notice: h-100% forces the card to fill the entire vertical height -->
    <div class="card h-100% bg-body border border-subtle">...</div>
  </div>
</div>
```

---

## Bottom-Aligned Buttons inside Equal-Height Cards

In premium interface grids, even if cards have different amounts of description copy, we want their **action buttons or footers to sit perfectly aligned along the bottom edge** across all columns.

Aksara UI solves this cleanly without writing heavy script loops. By nesting **Flexbox** classes on the card and using the **`mt-auto`** (margin-top: auto) or **`grow`** (flex-grow) utilities, buttons are pushed exactly to the baseline:

### 1. Padded-Body Cards with `mt-auto` (No Footer)

Inside a `d-flex flex-col grow` card body, placing **`mt-auto`** on the button pushes it perfectly to the bottom, aligning the buttons in all columns despite varying heights of preceding text content:

::html
<div class="docs-preview">
  <div class="row gap-5">

    <!-- Card 1 (Short content, button pushed) -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body h-100% d-flex flex-col">
        <div class="card-body d-flex flex-col grow">
          <div class="w-full rounded-12 mb-4 bg-subtle border border-subtle hstack justify-center items-center text-primary" style="aspect-ratio: 16/10;">
            <span class="mdi mdi-code-braces text-4xl opacity-80"></span>
          </div>
          <h4 class="card-title mt-0 mb-2 font-800">Web Engineering</h4>
          <p class="card-text text-subtle text-sm mt-0 mb-4">
            Master logical spacing coordinates.
          </p>
          <!-- mt-auto pushes the button to the absolute bottom of the flex body! -->
          <button class="btn btn-primary btn-block mt-auto hstack justify-center gap-2">
            Configure Setup <span class="mdi mdi-cog-outline"></span>
          </button>
        </div>
      </article>
    </div>

    <!-- Card 2 (Medium content, button pushed) -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body h-100% d-flex flex-col">
        <div class="card-body d-flex flex-col grow">
          <div class="w-full rounded-12 mb-4 bg-subtle border border-subtle hstack justify-center items-center text-success" style="aspect-ratio: 16/10;">
            <span class="mdi mdi-swap-horizontal text-4xl opacity-80"></span>
          </div>
          <h4 class="card-title mt-0 mb-2 font-800">Logical Frameworks</h4>
          <p class="card-text text-subtle text-sm mt-0 mb-4">
            Discover the layout mirroring power of direction-agnostic boundaries. Supports RTL natively in a single click.
          </p>
          <!-- mt-auto pushes the button to the absolute bottom of the flex body! -->
          <button class="btn btn-primary btn-block mt-auto hstack justify-center gap-2">
            Configure Setup <span class="mdi mdi-cog-outline"></span>
          </button>
        </div>
      </article>
    </div>

    <!-- Card 3 (Longest content) -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body h-100% d-flex flex-col">
        <div class="card-body d-flex flex-col grow">
          <div class="w-full rounded-12 mb-4 bg-subtle border border-subtle hstack justify-center items-center text-warning" style="aspect-ratio: 16/10;">
            <span class="mdi mdi-flash text-4xl opacity-80"></span>
          </div>
          <h4 class="card-title mt-0 mb-2 font-800">Static Compile Runtimes</h4>
          <p class="card-text text-subtle text-sm mt-0 mb-4">
            Eliminate all dynamic compilation lags, heavy runtime stylesheet injection cycles, and node bundle bloats. Prebuilt static CSS stylesheets deliver instant paints and immediate performance out-of-the-box, ensuring layouts load within a single refresh loop.
          </p>
          <!-- mt-auto pushes the button to the absolute bottom of the flex body! -->
          <button class="btn btn-primary btn-block mt-auto hstack justify-center gap-2">
            Configure Setup <span class="mdi mdi-cog-outline"></span>
          </button>
        </div>
      </article>
    </div>

  </div>
</div>
::end

```html
<!-- Inside-Body Button pushed to bottom using mt-auto -->
<div class="card h-100% d-flex flex-col bg-body border border-subtle">
  <!-- Body becomes a flex container with 'grow' -->
  <div class="card-body d-flex flex-col grow">
    <img class="w-full rounded-12 mb-4" src="banner.jpg" alt="Banner" />
    <h4 class="card-title">Card Title</h4>
    <p class="card-text mb-4">Varying length descriptive paragraph.</p>

    <!-- mt-auto pushes the button to the bottom boundary -->
    <button class="btn btn-primary mt-auto">Action Trigger</button>
  </div>
</div>
```

### 2. Header & Footer Cards with Flex `grow`

When using a separate `.card-footer` container, wrapping `.card` with `d-flex flex-col` and applying **`grow`** to `.card-body` pushes the entire footer block exactly to the base of the card:

::html
<div class="docs-preview">
  <div class="row gap-5">

    <!-- Footer Card 1 (Short content, footer pushed) -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body h-100% d-flex flex-col">
        <header class="card-header pb-0 text-subtle text-xs font-800 uppercase tracking-widest">
          Aksara Core
        </header>
        <div class="card-body grow">
          <h4 class="card-title mt-0 mb-2 font-800">Web Engineering</h4>
          <p class="card-text text-subtle text-sm mt-0">
            Master logical spacing coordinates.
          </p>
        </div>
        <footer class="card-footer pt-0">
          <button class="btn btn-sm btn-soft-primary btn-block hstack justify-center gap-2">
            Read Story <span class="mdi mdi-arrow-right"></span>
          </button>
        </footer>
      </article>
    </div>

    <!-- Footer Card 2 (Medium content, footer pushed) -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body h-100% d-flex flex-col">
        <header class="card-header pb-0 text-subtle text-xs font-800 uppercase tracking-widest">
          RTL-First
        </header>
        <div class="card-body grow">
          <h4 class="card-title mt-0 mb-2 font-800">Logical Frameworks</h4>
          <p class="card-text text-subtle text-sm mt-0">
            Discover the layout mirroring power of direction-agnostic boundaries. Supports RTL natively in a single click.
          </p>
        </div>
        <footer class="card-footer pt-0">
          <button class="btn btn-sm btn-soft-primary btn-block hstack justify-center gap-2">
            Read Story <span class="mdi mdi-arrow-right"></span>
          </button>
        </footer>
      </article>
    </div>

    <!-- Footer Card 3 (Longest content) -->
    <div class="col-12 md:col-4">
      <article class="card border border-subtle bg-body h-100% d-flex flex-col">
        <header class="card-header pb-0 text-subtle text-xs font-800 uppercase tracking-widest">
          Zero JIT
        </header>
        <div class="card-body grow">
          <h4 class="card-title mt-0 mb-2 font-800">Static Compile Runtimes</h4>
          <p class="card-text text-subtle text-sm mt-0">
            Eliminate all dynamic compilation lags, heavy runtime stylesheet injection cycles, and node bundle bloats. Prebuilt static CSS stylesheets deliver instant paints and immediate performance out-of-the-box, ensuring layouts load within a single refresh loop.
          </p>
        </div>
        <footer class="card-footer pt-0">
          <button class="btn btn-sm btn-soft-primary btn-block hstack justify-center gap-2">
            Read Story <span class="mdi mdi-arrow-right"></span>
          </button>
        </footer>
      </article>
    </div>

  </div>
</div>
::end

```html
<!-- Separated Card Footer pushed to bottom using flex grow body -->
<div class="card h-100% d-flex flex-col bg-body border border-subtle">
  <header class="card-header">Header Title</header>

  <!-- Applying 'grow' expands body to push the footer down -->
  <div class="card-body grow">
    <h4 class="card-title">Card Title</h4>
    <p class="card-text">Varying length description.</p>
  </div>

  <footer class="card-footer">
    <button class="btn btn-primary btn-block">Action Button</button>
  </footer>
</div>
```

---

## HTML Structural Classes

Construct complex cards by nesting specific structural sub-components inside the main wrapper:

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
        <td><code>card</code></td>
        <td><code>&lt;div&gt; / &lt;article&gt;</code></td>
        <td>The main border, background-color, and border-radius card container.</td>
      </tr>
      <tr>
        <td><code>card-img</code></td>
        <td><code>&lt;img&gt;</code></td>
        <td>An image placed inside the card. Fits perfectly and scales responsive widths while clipping corners.</td>
      </tr>
      <tr>
        <td><code>card-header</code></td>
        <td><code>&lt;div&gt; / &lt;header&gt;</code></td>
        <td>Top metadata segment. Highlighted with bold weights and custom vertical spacing (without dividing lines).</td>
      </tr>
      <tr>
        <td><code>card-body</code></td>
        <td><code>&lt;div&gt;</code></td>
        <td>The core padding area wrapping card titles, subtitles, text blocks, and badge lists.</td>
      </tr>
      <tr>
        <td><code>card-footer</code></td>
        <td><code>&lt;div&gt; / &lt;footer&gt;</code></td>
        <td>Bottom actions area. Houses buttons, share links, and tags with sleek padding (without dividing lines).</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Card Styling Variations

Alter shadows and border weights to match your surrounding interface elements:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">Class Identifier</th>
        <th style="width: 35%;">Visual Shadow Profile</th>
        <th style="width: 40%;">Best Practices & Usage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Default / Flat</td>
        <td>No shadow. Relies on borders (e.g. <code>border border-subtle</code>).</td>
        <td>Ideal for embedding lists, nested blocks, or secondary inputs.</td>
      </tr>
      <tr>
        <td><code>card-elevated</code></td>
        <td>Soft premium drop-shadow (<code>box-shadow</code>).</td>
        <td>Ideal for hero components, pricing grids, and highlighted stats.</td>
      </tr>
      <tr>
        <td><code>card-flat</code></td>
        <td>No borders or shadows. Completely flat background fills.</td>
      </tr>
    </tbody>
  </table>
</div>
::end
