# Components

Aksara UI components are plain CSS classes with optional vanilla JavaScript enhancements. The visual direction is flat, sleek, and soft: gentle surfaces, semantic color accents, modest radius, and restrained shadows.

## Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-soft-primary">Soft</button>
<button class="btn btn-danger btn-sm">Delete</button>
<button class="btn btn-secondary btn-lg">Continue</button>
```

Available semantic variants:

- `btn-primary`
- `btn-secondary`
- `btn-success`
- `btn-danger`
- `btn-warning`
- `btn-info`
- `btn-dark`
- `btn-light`
- `btn-outline-*`
- `btn-soft-*`

## Cards

```html
<article class="card card-elevated">
  <header class="card-header">Account</header>
  <div class="card-body">Card content</div>
  <footer class="card-footer">Footer</footer>
</article>
```

## Alerts

```html
<div class="alert alert-primary">
  <p class="alert-title">Profile updated</p>
  <p>Settings were saved successfully.</p>
</div>
```

Use `alert-*` for each semantic color.

## Badges

```html
<span class="badge badge-primary">New</span>
<span class="badge badge-soft-success">Live</span>
<span class="badge badge-dot text-danger"></span>
```

## Navbar

```html
<nav class="navbar">
  <a class="navbar-brand" href="#">Aksara</a>
  <ul class="navbar-nav">
    <li><a class="nav-link" aria-current="page" href="#">Docs</a></li>
    <li><a class="nav-link" href="#">Components</a></li>
  </ul>
</nav>
```

## Dropdown

```html
<div class="dropdown">
  <button class="btn btn-soft-primary" data-dropdown="#menu">Menu</button>
  <div id="menu" class="dropdown-menu">
    <button class="dropdown-item">Profile</button>
    <button class="dropdown-item">Settings</button>
    <div class="dropdown-divider"></div>
    <button class="dropdown-item">Sign out</button>
  </div>
</div>
```

## Modal

```html
<button class="btn btn-primary" data-modal="#accountModal">Open</button>

<div id="accountModal" class="modal" aria-labelledby="accountTitle">
  <div class="modal-dialog">
    <div class="modal-header">
      <h2 id="accountTitle" class="text-20 m-0">Account</h2>
      <button class="modal-close" data-modal-close aria-label="Close">x</button>
    </div>
    <div class="modal-body">Modal body</div>
    <div class="modal-footer">
      <button class="btn btn-secondary" data-modal-close>Cancel</button>
      <button class="btn btn-primary">Save</button>
    </div>
  </div>
</div>
```

## Tooltip

```html
<button class="btn btn-soft-secondary" data-tooltip="Edit item" data-tooltip-placement="top">Edit</button>
```

## Popover

```html
<button class="btn btn-soft-info" data-popover="Extra details" data-popover-placement="right">Details</button>
```

## Accordion

```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-button" data-accordion="#panelOne" aria-expanded="false">Section one</button>
    <div id="panelOne" class="accordion-panel" hidden>Panel content</div>
  </div>
</div>
```

## Tabs

```html
<div class="tabs" role="tablist">
  <button class="tab" data-tabs="#tabOne" aria-selected="true">One</button>
  <button class="tab" data-tabs="#tabTwo" aria-selected="false">Two</button>
</div>
<div id="tabOne" class="tab-panel">First panel</div>
<div id="tabTwo" class="tab-panel" hidden>Second panel</div>
```

## Toast

```html
<button class="btn btn-primary" data-toast="#savedToast">Show toast</button>

<div id="savedToast" class="toast" data-toast-delay="3000">
  <div class="toast-header">Saved</div>
  <div class="toast-body">Your changes are synced.</div>
</div>
```

## Carousel

```html
<div class="carousel">
  <div class="carousel-item" data-carousel-item>First slide</div>
  <div class="carousel-item" data-carousel-item hidden>Second slide</div>
  <button class="carousel-control carousel-prev" data-carousel="prev">‹</button>
  <button class="carousel-control carousel-next" data-carousel="next">›</button>
</div>
```

## Offcanvas

```html
<button class="btn btn-soft-primary" data-offcanvas="#sidebar">Open sidebar</button>

<aside id="sidebar" class="offcanvas" aria-label="Sidebar">
  <div class="offcanvas-header">
    <strong>Menu</strong>
    <button class="modal-close" data-offcanvas-close aria-label="Close">x</button>
  </div>
  <div class="offcanvas-body">Sidebar content</div>
</aside>
```

## Tables

```html
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Aksara</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>
```

## Breadcrumb

```html
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item">Docs</li>
</ol>
```

## Pagination

```html
<nav aria-label="Pagination">
  <ul class="pagination">
    <li><a class="page-link" href="#">Previous</a></li>
    <li><a class="page-link" aria-current="page" href="#">1</a></li>
    <li><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```

## Forms

```html
<div class="form-group">
  <label class="form-label" for="email">Email</label>
  <input id="email" class="form-control" type="email" placeholder="you@example.com" />
  <p class="form-text">We will never share your email.</p>
</div>

<label class="form-check">
  <input type="checkbox" />
  <span>Remember me</span>
</label>

<label class="form-radio">
  <input type="radio" name="plan" />
  <span>Starter</span>
</label>

<label class="form-switch">
  <input type="checkbox" />
  <span>Enable alerts</span>
</label>

<input class="form-range" type="range" />
<input class="form-file" type="file" />
```
