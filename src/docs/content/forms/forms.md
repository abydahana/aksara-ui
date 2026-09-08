# Form Fields & Controls

Aksara UI features a clean, highly polished form layout engine. It provides robust form controls, field inputs, textareas, custom checkboxes, custom radios, switches, and sliders.

---

## Interactive Controls Showcase

Here is a live layout showing off various standard fields and elements styled using Aksara's flat, soft form guidelines:

::html
<div class="docs-preview">
  <form onsubmit="event.preventDefault();">
    <div class="row gap-4">
      <!-- Input Text -->
      <div class="col-12 md:col-6">
        <div class="form-group">
          <label class="form-label" for="exampleInputUser">Username</label>
          <input id="exampleInputUser" type="text" class="form-control" placeholder="john_doe">
          <span class="form-text">Choose a unique public handler.</span>
        </div>
      </div>

      <!-- Select Options -->
      <div class="col-12 md:col-6">
        <div class="form-group">
          <label class="form-label" for="exampleSelectRole">Default Role</label>
          <select id="exampleSelectRole" class="form-select">
            <option>Administrator</option>
            <option>Editor</option>
            <option>Standard Contributor</option>
          </select>
        </div>
      </div>

      <!-- Textarea -->
      <div class="col-12">
        <div class="form-group">
          <label class="form-label" for="exampleTextBio">Biography</label>
          <textarea id="exampleTextBio" class="form-control" rows="3" placeholder="Tell us about yourself..."></textarea>
        </div>
      </div>

      <!-- Checkbox & Radios & Switches -->
      <div class="col-12 md:col-6">
        <div class="form-group">
          <span class="form-label block mb-2">Access Preferences</span>
          <div class="vstack gap-2">
            <label class="form-check">
              <input type="checkbox" checked>
              <span>Receive monthly analytics digest</span>
            </label>
            <label class="form-check">
              <input type="checkbox">
              <span>Notify of third-party login triggers</span>
            </label>
          </div>
        </div>
      </div>

      <div class="col-12 md:col-6">
        <div class="form-group">
          <span class="form-label block mb-2">System Mode</span>
          <div class="vstack gap-2">
            <label class="form-switch">
              <input type="checkbox" checked>
              <span>Enable dynamic sandbox debugger</span>
            </label>
            <label class="form-switch">
              <input type="checkbox">
              <span>Block search engine indexing</span>
            </label>
          </div>
        </div>
      </div>
    </div>

  </form>
</div>
::end

---

## Core Input & Textarea Elements

To style standard textual fields, apply the `.form-control` class. For custom dropdown selectors, apply `.form-select`. Use `.form-group` to manage layout flow and vertical field margin spacing.

```html
<!-- Text input element -->
<div class="form-group">
  <label class="form-label" for="userEmail">Email Address</label>
  <input id="userEmail" type="email" class="form-control" placeholder="user@domain.com" />
  <span class="form-text">Your email address remains confidential.</span>
</div>

<!-- Textarea description block -->
<div class="form-group">
  <label class="form-label" for="userBio">Short Description</label>
  <textarea id="userBio" class="form-control" rows="3" placeholder="Enter details..."></textarea>
</div>

<!-- Standard drop-down picker -->
<div class="form-group">
  <label class="form-label" for="userCountry">Region</label>
  <select id="userCountry" class="form-select">
    <option value="us">United States</option>
    <option value="id">Indonesia</option>
    <option value="uk">United Kingdom</option>
  </select>
</div>
```

---

## Interactive Checkbox, Radio, and Switch Elements

Aksara UI replaces legacy browser styling with beautifully curated checkbox toggles, radio choices, and slider switch buttons:

::html
<div class="docs-preview">
  <div class="hstack gap-4 flex-wrap">
    <!-- Checkbox -->
    <label class="form-check">
      <input type="checkbox" checked>
      <span>Selected Checkbox</span>
    </label>

    <!-- Radio Group -->
    <label class="form-radio">
      <input type="radio" name="demoRadioGrp" checked>
      <span>Radio Option A</span>
    </label>
    <label class="form-radio">
      <input type="radio" name="demoRadioGrp">
      <span>Radio Option B</span>
    </label>

    <!-- Switch Toggle -->
    <label class="form-switch">
      <input type="checkbox" checked>
      <span>Toggle Switch</span>
    </label>

  </div>
</div>
::end

```html
<!-- Accessible Custom Checkbox Toggle -->
<label class="form-check">
  <input type="checkbox" checked />
  <span>Accept term requirements</span>
</label>

<!-- Custom Radio Options Group -->
<label class="form-radio">
  <input type="radio" name="billingPlan" value="monthly" checked />
  <span>Monthly Billing</span>
</label>
<label class="form-radio">
  <input type="radio" name="billingPlan" value="annually" />
  <span>Annual Billing</span>
</label>

<!-- Slide Toggle Switch -->
<label class="form-switch">
  <input type="checkbox" checked />
  <span>Enable email notifications</span>
</label>
```

---

## Form Sizing Classes

Alter the size scale and typographic weight of form inputs by matching sizes to your surrounding dashboard layouts.

::html
<div class="docs-preview">
  <div class="vstack gap-4">
    <input type="text" class="form-control form-control-sm" placeholder="Small Input field (.form-control-sm)">
    <input type="text" class="form-control" placeholder="Default Standard Input field">
    <input type="text" class="form-control form-control-lg" placeholder="Large Premium Input field (.form-control-lg)">
  </div>
</div>
::end

```html
<!-- Small input for tighter spaces -->
<input type="text" class="form-control form-control-sm" placeholder="Small Input" />

<!-- Standard input -->
<input type="text" class="form-control" placeholder="Default Input" />

<!-- Large input for search screens or hero inputs -->
<input type="text" class="form-control form-control-lg" placeholder="Large Input" />
```
