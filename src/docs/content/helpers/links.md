# Links

Link helpers provide semantic link colors and stretched clickable areas.

::html
<div class="docs-preview">
  <div class="docs-row">
    <a class="link-primary" href="#">Primary link</a>
    <a class="link-success" href="#">Success link</a>
    <a class="link-danger" href="#">Danger link</a>
  </div>
  <article class="card relative" style="max-width:420px;">
    <div class="card-body">
      <h2 class="card-title">Stretched link card</h2>
      <p class="card-text">The link covers the whole positioned card.</p>
      <a class="stretched-link link-primary" href="#">Open</a>
    </div>
  </article>
</div>
::end

```html
<a class="link-primary" href="#">Primary link</a>

<article class="card relative">
  <a class="stretched-link" href="#">Open</a>
</article>
```
