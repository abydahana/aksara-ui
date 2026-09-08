# Timeline

A clean, structured vertical timeline component for presenting activity logs, order tracking status, user history, or project milestones.

---

## Interactive Showcase

::html
<div class="docs-preview py-4">
  <ul class="timeline w-full" style="max-width: 28rem;">
    <li class="timeline-item">
      <div class="timeline-point">
        <span class="mdi mdi-check text-sm"></span>
      </div>
      <div class="timeline-content">
        <h4 class="timeline-title">Version 1.1.0 Released</h4>
        <span class="timeline-time">Today, 08:45 AM</span>
        <p class="text-sm text-subtle m-0">Added Bento Card, modern CSS utilities, and Theme Manager.</p>
      </div>
    </li>
    <li class="timeline-item">
      <div class="timeline-point">
        <span class="mdi mdi-code-tags text-sm"></span>
      </div>
      <div class="timeline-content">
        <h4 class="timeline-title">TypeScript Migration</h4>
        <span class="timeline-time">Yesterday, 02:20 PM</span>
        <p class="text-sm text-subtle m-0">All components and helpers migrated with end-to-end type safety.</p>
      </div>
    </li>
    <li class="timeline-item">
      <div class="timeline-point" style="border-color: var(--aksara-border-subtle); color: var(--aksara-text-subtle);">
        <span class="mdi mdi-circle-small text-sm"></span>
      </div>
      <div class="timeline-content">
        <h4 class="timeline-title text-subtle">Aksara UI v1.0.0 Inaugural Release</h4>
        <span class="timeline-time">3 days ago</span>
        <p class="text-sm text-subtle m-0">Initial open-source release.</p>
      </div>
    </li>
  </ul>
</div>
::end

```html
<ul class="timeline">
  <li class="timeline-item">
    <div class="timeline-point">
      <span class="mdi mdi-check"></span>
    </div>
    <div class="timeline-content">
      <h4 class="timeline-title">Version 1.1.0 Update</h4>
      <span class="timeline-time">Today, 08:45 AM</span>
      <p class="text-sm text-subtle">Added Bento Card & modern CSS utilities.</p>
    </div>
  </li>

  <li class="timeline-item">
    <div class="timeline-point">
      <span class="mdi mdi-circle-small"></span>
    </div>
    <div class="timeline-content">
      <h4 class="timeline-title">Previous Event</h4>
      <span class="timeline-time">Yesterday</span>
    </div>
  </li>
</ul>
```
