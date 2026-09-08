# RTL & Logical Properties

Aksara UI is built as an **RTL-First Logical Framework**. Instead of using rigid coordinate rules (left, right) that break when text directions change, Aksara relies exclusively on modern logical CSS properties.

---

## Interactive RTL Showcase

Below are two identical card containers. The right card is wrapped inside a `dir="rtl"` attribute. Notice how spacing, alignment, and borders adapt naturally without writing a single line of responsive overrides:

::html
<div class="docs-preview">
  <div class="row gap-4">
    <!-- Left-to-Right Sandbox -->
    <div class="col-12 md:col-6">
      <div class="p-4 rounded-16 border bg-body text-base" dir="ltr">
        <div class="hstack justify-between mb-3">
          <span class="badge badge-soft-primary">LTR Container</span>
          <span class="text-xs text-subtle">dir="ltr"</span>
        </div>
        <!-- Align start, margin start border -->
        <div class="ps-4 border-start border-primary border-4 text-start">
          <h4 class="mt-0 mb-1 font-700">Logical Spacing</h4>
          <p class="m-0 text-subtle text-xs">Border and padding are placed on the flow-start side.</p>
        </div>
      </div>
    </div>

    <!-- Right-to-Left Sandbox -->
    <div class="col-12 md:col-6">
      <div class="p-4 rounded-16 border bg-body text-base" dir="rtl">
        <div class="hstack justify-between mb-3">
          <span class="badge badge-soft-primary">RTL Container</span>
          <span class="text-xs text-subtle">dir="rtl"</span>
        </div>
        <!-- Align start, margin start border -->
        <div class="ps-4 border-start border-primary border-4 text-start">
          <h4 class="mt-0 mb-1 font-700">التباعد المنطقي</h4>
          <p class="m-0 text-subtle text-xs">يتم وضع الحدود والحشوة تلقائيًا على جانب البداية.</p>
        </div>
      </div>
    </div>

  </div>
</div>
::end

```html
<!-- Left-to-Right layout -->
<div dir="ltr" class="ps-4 border-start border-primary text-start">
  <h4>Logical Spacing</h4>
</div>

<!-- Right-to-Left layout: exactly the same utility classes! -->
<div dir="rtl" class="ps-4 border-start border-primary text-start">
  <h4>التباعد المنطقي</h4>
</div>
```

---

## Logical Properties Mappings

Aksara UI precompiles high-performance logical properties directly in the preflight stylesheet. Below is a translation guide comparing legacy utility naming against modern logical naming:

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 25%;">Aksara Logical Class</th>
        <th style="width: 35%;">Underlying CSS Logical property</th>
        <th style="width: 25%;">Legacy Equivalent</th>
        <th style="width: 15%;">RTL Behavior</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>ms-3</code></td>
        <td><code>margin-inline-start: 10px</code></td>
        <td><code>margin-left: 10px</code></td>
        <td>Flips to right side.</td>
      </tr>
      <tr>
        <td><code>me-3</code></td>
        <td><code>margin-inline-end: 10px</code></td>
        <td><code>margin-right: 10px</code></td>
        <td>Flips to left side.</td>
      </tr>
      <tr>
        <td><code>ps-5</code></td>
        <td><code>padding-inline-start: 20px</code></td>
        <td><code>padding-left: 20px</code></td>
        <td>Flips to right side.</td>
      </tr>
      <tr>
        <td><code>pe-5</code></td>
        <td><code>padding-inline-end: 20px</code></td>
        <td><code>padding-right: 20px</code></td>
        <td>Flips to left side.</td>
      </tr>
      <tr>
        <td><code>border-start</code></td>
        <td><code>border-inline-start-width: 1px</code></td>
        <td><code>border-left-width: 1px</code></td>
        <td>Flips to right side.</td>
      </tr>
      <tr>
        <td><code>border-end</code></td>
        <td><code>border-inline-end-width: 1px</code></td>
        <td><code>border-right-width: 1px</code></td>
        <td>Flips to left side.</td>
      </tr>
      <tr>
        <td><code>text-start</code></td>
        <td><code>text-align: start</code></td>
        <td><code>text-align: left</code></td>
        <td>Aligns right.</td>
      </tr>
      <tr>
        <td><code>text-end</code></td>
        <td><code>text-align: end</code></td>
        <td><code>text-align: right</code></td>
        <td>Aligns left.</td>
      </tr>
      <tr>
        <td><code>start-10</code></td>
        <td><code>inset-inline-start: 10px</code></td>
        <td><code>left: 10px</code></td>
        <td>Flips to right side.</td>
      </tr>
      <tr>
        <td><code>end-10</code></td>
        <td><code>inset-inline-end: 10px</code></td>
        <td><code>right: 10px</code></td>
        <td>Flips to left side.</td>
      </tr>
    </tbody>
  </table>
</div>
::end

---

## Why Legacy Left/Right Classes are Rejected

Legacy frameworks precompile classes like `.pl-3` (`padding-left`) or `.text-right`. When compiling an RTL theme, developers must load massive "RTL override files" that override almost every single utility spacing property manually.

Aksara UI **does not compile or export** coordinates:

- `ml-10`, `mr-10`, `pl-10`, `pr-10` — **REJECTED** (Not generated)
- `text-left`, `text-right` — **REJECTED** (Not generated)
- `border-l`, `border-r`, `border-t`, `border-b` — **REJECTED** (Not generated)

This guarantees that:

1. **0% CSS Redundancy**: You load exactly one stylesheet that supports LTR and RTL perfectly.
2. **Simplified Layout code**: You don't have to code directional state variants like `rtl:pl-0` or `rtl:pr-3`. Composing once handles all display setups.
