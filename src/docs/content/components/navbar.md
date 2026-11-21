# Navbar

Use navbar classes for application headers and compact navigation.

::html
<div class="docs-preview">
  <nav class="navbar rounded-[12px]">
    <a class="navbar-brand" href="#">Aksara</a>
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
        <li><a class="nav-link" href="#">Components</a></li>
      </ul>
    </div>
    <button class="navbar-toggler ms-auto hstack justify-center items-center" aria-label="Menu" style="border:0; background:transparent; cursor:pointer;"><span class="mdi mdi-menu"></span></button>
  </nav>
</div>
::end

```html
<nav class="navbar">
  <a class="navbar-brand" href="#">Aksara</a>
  <ul class="navbar-nav">
    <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
  </ul>
</nav>
```

## Responsive Expand

Add `navbar-expand-{sm,md,lg,xl,2xl,3xl}` to show `.navbar-collapse` inline from that breakpoint up. Below it the collapse is hidden and `.navbar-toggler` toggles it through the collapse data API. `navbar-expand` (no breakpoint) is always expanded and hides the toggler.

```html
<nav class="navbar navbar-expand-md">
  <a class="navbar-brand" href="#">Aksara</a>
  <button
    class="navbar-toggler ms-auto"
    data-collapse="#mainNav"
    aria-controls="mainNav"
    aria-expanded="false"
    aria-label="Menu"
  >
    <span class="mdi mdi-menu"></span>
  </button>
  <div id="mainNav" class="navbar-collapse">
    <ul class="navbar-nav">
      <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
      <li><a class="nav-link" href="#">Components</a></li>
    </ul>
  </div>
</nav>
```

## Dark Navbar

`navbar-dark bg-dark` renders a dark bar with light text regardless of the page theme.

::html
<div class="docs-preview">
  <nav class="navbar navbar-expand navbar-dark bg-dark rounded-[12px]">
    <a class="navbar-brand" href="#">Aksara</a>
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
        <li><a class="nav-link" href="#">Components</a></li>
      </ul>
    </div>
  </nav>
</div>
::end

```html
<nav class="navbar navbar-expand navbar-dark bg-dark">...</nav>
```

The `Navbar` string component maps its `expand` and `dark` props to these classes.
