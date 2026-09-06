# Modal Dialogs

Modals are elegant overlay windows designed to capture focus and request inputs, alert messages, or dedicated confirmations on top of your application's primary viewpoint.

---

## Interactive Modal Showcase

Click the buttons below to trigger live modals of various sizes. Aksara UI handles focus trapping, Escape key closing, scroll-blocking, draggable headers, and backdrop fade-in transitions automatically.

::html
<div class="docs-preview">
  <div class="docs-row">
    <!-- Trigger Buttons -->
    <button class="btn btn-primary" data-modal="#standardModalDemo">Launch Standard Modal</button>
    <button class="btn btn-soft-primary" data-modal="#smallModalDemo">Launch Small Modal</button>
    <button class="btn btn-soft-primary" data-modal="#largeModalDemo">Launch Large Modal</button>
  </div>

  <!-- Standard Modal Box -->
  <div id="standardModalDemo" class="modal" tabindex="-1" aria-labelledby="standardModalTitle">
    <div class="modal-dialog">
      <div class="modal-header">
        <h4 id="standardModalTitle" class="m-0 font-800 text-lg">Standard Overlay Modal</h4>
        <button class="modal-close hstack justify-center items-center" data-modal-close aria-label="Close modal" style="border:0; background:transparent; padding:4px; cursor:pointer;"><span class="mdi mdi-close"></span></button>
      </div>
      <div class="modal-body">
        <p class="mt-0 text-subtle text-sm">
          This is Aksara UI's default modal. It provides accessible focus-trapping (pressing Tab cycles focus solely inside this panel) and listens to the ESC key.
        </p>
        <div class="form-group mb-0">
          <label class="form-label" for="modalInputEmail">Email Address</label>
          <input id="modalInputEmail" type="email" class="form-control" placeholder="name@example.com">
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" data-modal-close>Cancel</button>
        <button class="btn btn-primary" data-modal-close>Save changes</button>
      </div>
    </div>
  </div>

  <!-- Small Modal Box -->
  <div id="smallModalDemo" class="modal" tabindex="-1" aria-labelledby="smallModalTitle">
    <div class="modal-dialog modal-sm">
      <div class="modal-header">
        <h4 id="smallModalTitle" class="m-0 font-800 text-md">Delete Item</h4>
        <button class="modal-close hstack justify-center items-center" data-modal-close aria-label="Close modal" style="border:0; background:transparent; padding:4px; cursor:pointer;"><span class="mdi mdi-close"></span></button>
      </div>
      <div class="modal-body">
        <p class="m-0 text-subtle text-sm">Are you absolutely sure you want to permanently delete this resource?</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-sm btn-ghost" data-modal-close>Cancel</button>
        <button class="btn btn-sm btn-danger" data-modal-close>Delete</button>
      </div>
    </div>
  </div>

  <!-- Large Modal Box -->
  <div id="largeModalDemo" class="modal" tabindex="-1" aria-labelledby="largeModalTitle">
    <div class="modal-dialog modal-lg">
      <div class="modal-header">
        <h4 id="largeModalTitle" class="m-0 font-800 text-xl">System Configurations</h4>
        <button class="modal-close hstack justify-center items-center" data-modal-close aria-label="Close modal" style="border:0; background:transparent; padding:4px; cursor:pointer;"><span class="mdi mdi-close"></span></button>
      </div>
      <div class="modal-body">
        <p class="mt-0 text-subtle text-sm">Configure your system preferences using this advanced multi-column layout:</p>
        <div class="row gap-4">
          <div class="col-12 md:col-6">
            <div class="form-group">
              <label class="form-label" for="largeModalFn">First Name</label>
              <input id="largeModalFn" type="text" class="form-control" placeholder="John">
            </div>
          </div>
          <div class="col-12 md:col-6">
            <div class="form-group">
              <label class="form-label" for="largeModalLn">Last Name</label>
              <input id="largeModalLn" type="text" class="form-control" placeholder="Doe">
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" data-modal-close>Discard</button>
        <button class="btn btn-primary" data-modal-close>Update System</button>
      </div>
    </div>
  </div>
</div>
::end

---

## HTML Structural Markup

To construct a standard modal overlay, structure your HTML containers as follows:

```html
<!-- Main Modal Wrapper (Hidden by default) -->
<div id="userModal" class="modal" tabindex="-1" aria-hidden="true" role="dialog">
  <div class="modal-dialog">
    <!-- Modal Panel content -->
    <div class="modal-header">
      <h4 class="m-0 font-800 text-lg">Modal Title</h4>
      <!-- Button to close the modal -->
      <button
        class="modal-close hstack justify-center items-center"
        data-modal-close
        aria-label="Close"
        style="border:0; background:transparent; padding:4px; cursor:pointer;"
      >
        <span class="mdi mdi-close"></span>
      </button>
    </div>
    <div class="modal-body">
      <p class="text-subtle text-sm">Input body contents here...</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" data-modal-close>Cancel</button>
      <button class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
```

---

## Dialog Size Modifiers

Control the width bounds of your modal window by appending modifier classes next to the `.modal-dialog` component:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 30%;">Sizing Class</th>
        <th style="width: 30%;">Max Width</th>
        <th style="width: 40%;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>modal-sm</code></td>
        <td><code>24rem</code> (384px)</td>
        <td>Perfect for small delete prompts, alerts, or simple actions.</td>
      </tr>
      <tr>
        <td>Default (None)</td>
        <td><code>32rem</code> (512px)</td>
        <td>Perfect for user forms, login interfaces, or dialog choices.</td>
      </tr>
      <tr>
        <td><code>modal-lg</code></td>
        <td><code>48rem</code> (768px)</td>
        <td>Great for medium dashboards, lists, or dual-column inputs.</td>
      </tr>
      <tr>
        <td><code>modal-xl</code></td>
        <td><code>72rem</code> (1152px)</td>
        <td>Great for heavy lists, extensive charts, or complex layouts.</td>
      </tr>
      <tr>
        <td><code>modal-fullscreen</code></td>
        <td><code>100vw</code></td>
        <td>Fills the entire screen. Perfect for focused full-screen task wizards.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## HTML Data API System

Aksara UI features a declarative data-driven API to trigger and close modals without writing any manual JavaScript logic.

- **`data-modal="#modalId"`**: Place this attribute on any trigger button or clickable link. Clicking the element will target and launch the modal container.
- **`data-modal-close`**: Place this attribute on any element inside the modal. Clicking the element will automatically dismiss the containing modal.
- **`data-modal-close="#modalId"`**: Place this attribute on external triggers to specifically hide a targeted modal by ID.
- **`data-modal-draggable="false"`**: Disable the default draggable header behavior for a modal trigger or modal element.

---

## Programmatic JavaScript API

Interact with modal panels manually by accessing the Global `Aksara` controller inside your scripts.

### Creating an Instance

```js
// Initialize or fetch the modal instance
const myModal = Aksara.modal("#userModal", {
  backdrop: true,
  keyboard: true,
  draggable: true
});
```

### Methods

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 30%;">Method</th>
        <th style="width: 70%;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>myModal.show()</code></td>
        <td>Displays the modal window, puts focus on the first input, and blocks page body scrolling. Returns instance.</td>
      </tr>
      <tr>
        <td><code>myModal.hide()</code></td>
        <td>Dismisses the modal window, restores page body scrolling, and returns focus to the trigger. Returns instance.</td>
      </tr>
      <tr>
        <td><code>myModal.toggle()</code></td>
        <td>Toggles the visible state of the modal panel. Returns instance.</td>
      </tr>
      <tr>
        <td><code>myModal.destroy()</code></td>
        <td>Removes event listeners, tears down active keybind triggers, and deletes internal memory references.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

### Custom Events

Aksara UI triggers standard semantic custom events during the modal transition lifecycle. These bubble up, allowing you to bind listeners globally:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 35%;">Event Key</th>
        <th style="width: 65%;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>aksara:modal:show</code></td>
        <td>Dispatched instantly when the modal window is shown. Access the instance in <code>event.detail.instance</code>.</td>
      </tr>
      <tr>
        <td><code>aksara:modal:hide</code></td>
        <td>Dispatched instantly when the modal window is hidden. Access the instance in <code>event.detail.instance</code>.</td>
      </tr>
      <tr>
        <td><code>aksara:modal:destroy</code></td>
        <td>Dispatched when the modal instance is destroyed.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

### Listening Example

```js
const userModalEl = document.querySelector("#userModal");

userModalEl.addEventListener("aksara:modal:show", (event) => {
  console.log("Modal opened manually or via Data API!", event.detail.instance);

  // Example: focus a specific input once the modal renders
  userModalEl.querySelector("#usernameInput").focus();
});
```
