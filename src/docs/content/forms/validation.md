# Form Validation States

Aksara UI features lightweight, accessible validation classes to provide clear visual feedback during form submission errors or correct input updates.

---

## Validation Showcase

See the comparison of standard input fields in their natural, valid, and invalid states with matching message prompts:

::html
<div class="docs-preview">
  <form onsubmit="event.preventDefault();">
    <div class="row gap-4">
      <!-- Valid Field -->
      <div class="col-12 md:col-6">
        <div class="form-group">
          <label class="form-label" for="valInputValid">Email Address</label>
          <input id="valInputValid" type="email" class="form-control is-valid" value="user@domain.com">
          <span class="form-text hstack gap-2 items-center" style="color: rgb(var(--aksara-success)); font-weight: 600;"><span class="mdi mdi-check-circle-outline"></span> Email address is available.</span>
        </div>
      </div>

      <!-- Invalid Field -->
      <div class="col-12 md:col-6">
        <div class="form-group">
          <label class="form-label" for="valInputInvalid">Preferred Username</label>
          <input id="valInputInvalid" type="text" class="form-control is-invalid" value="john_doe_99!">
          <span class="form-error hstack gap-2 items-center"><span class="mdi mdi-close-circle-outline"></span> Special characters are not allowed.</span>
        </div>
      </div>

      <!-- Valid Select -->
      <div class="col-12 md:col-6">
        <div class="form-group">
          <label class="form-label" for="valSelectValid">Account Billing Tier</label>
          <select id="valSelectValid" class="form-select is-valid">
            <option>Enterprise (Active)</option>
            <option>Professional</option>
          </select>
        </div>
      </div>

      <!-- Invalid Select -->
      <div class="col-12 md:col-6">
        <div class="form-group">
          <label class="form-label" for="valSelectInvalid">Required Agreement Type</label>
          <select id="valSelectInvalid" class="form-select is-invalid">
            <option value="">Please make a choice...</option>
          </select>
          <span class="form-error hstack gap-2 items-center"><span class="mdi mdi-close-circle-outline"></span> You must select an agreement tier.</span>
        </div>
      </div>
    </div>

  </form>
</div>
::end

---

## Implementing Validation Classes

Apply Aksara's validation state classes directly next to `.form-control` or `.form-select` nodes to alert the user of status states:

### 1. Valid Input State

Add `.is-valid` to the input control. This changes borders to success green:

```html
<div class="form-group">
  <label class="form-label" for="promoCode">Promo Coupon</label>
  <!-- Class is-valid changes border color to success green -->
  <input id="promoCode" type="text" class="form-control is-valid" value="AKSARA_SUMMER_50" />
  <span class="form-text hstack gap-2 items-center" style="color: rgb(var(--aksara-success));">
    <span class="mdi mdi-check-circle-outline"></span> Coupon applied successfully! 50% discount active.
  </span>
</div>
```

### 2. Invalid Input State

Add `.is-invalid` to the input control. This changes borders to danger red. Match it with `.form-error` underneath:

```html
<div class="form-group">
  <label class="form-label" for="passwordConfirm">Confirm Password</label>
  <!-- Class is-invalid changes border color to danger red -->
  <input id="passwordConfirm" type="password" class="form-control is-invalid" value="different_pwd" />
  <!-- Use .form-error to print the error text block in matching red -->
  <span class="form-error hstack gap-2 items-center"
    ><span class="mdi mdi-close-circle-outline"></span> Passwords do not match. Please re-enter.</span
  >
</div>
```

---

## Semantic Feedback Elements

Aksara UI provides helper utility tags to align spacing and typography beneath form fields:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">Feedback Class</th>
        <th style="width: 25%;">Text Color</th>
        <th style="width: 50%;">Usage Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>form-text</code></td>
        <td>Muted Blue-Gray (<code>var(--aksara-text-subtle)</code>)</td>
        <td>Used for general helper comments, password rules, or character count guides.</td>
      </tr>
      <tr>
        <td><code>form-error</code></td>
        <td>Danger Red (<code>rgb(var(--aksara-danger))</code>)</td>
        <td>Used for validation error statements. Automatically inherits matching warning size and layout margin spacing.</td>
      </tr>
    </tbody>
  </table>
</div>
::end
