# Container

Containers center content and provide horizontal page padding.

## Fixed Container

::html
<div class="docs-preview">
  <div class="container bg-primary/10 border border-primary/20 rounded-12 p-5">
    Fixed max-width container
  </div>
</div>
::end

```html
<div class="container">...</div>
```

## Fluid Container

::html
<div class="docs-preview">
  <div class="container-fluid bg-success/10 border border-success/20 rounded-12 p-5">
    Full-width fluid container
  </div>
</div>
::end

```html
<div class="container-fluid">...</div>
```

## Common Page Shell

```html
<main class="container py-10">
  <h1 class="text-32 font-800">Dashboard</h1>
  <div class="row gap-5">
    <section class="col-12 lg:col-8">Main content</section>
    <aside class="col-12 lg:col-4">Side content</aside>
  </div>
</main>
```
