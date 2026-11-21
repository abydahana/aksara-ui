/** Component styles (buttons, forms, overlays, ...) and component modifier classes. */
import { colors } from "../palette";
import { breakpoints, rules, add, addRaw, escapeClass, colorValue, readableText, solidForeground } from "./core";

export function addComponents(): void {
  add(
    "btn",
    "display:inline-flex;align-items:center;justify-content:center;gap:.5rem;min-height:2.375rem;border:1px solid transparent;border-radius:var(--aksara-radius-sm);padding:.5rem .875rem;font:inherit;line-height:1.25;text-decoration:none;cursor:pointer;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,transform .15s ease-in-out"
  );
  add("btn-xs", "min-height:1.5rem;padding:.125rem .375rem;font-size:.75rem");
  add("btn-sm", "min-height:1.75rem;padding:.25rem .5rem;font-size:.8125rem");
  add("btn-md", "min-height:2.375rem;padding:.5rem .875rem;font-size:.875rem");
  add("btn-lg", "min-height:2.875rem;padding:.75rem 1.125rem;font-size:1.0625rem");
  add("btn-xl", "min-height:3.375rem;padding:.875rem 1.375rem;font-size:1.25rem");
  add("btn-2xl", "min-height:3.875rem;padding:1rem 1.625rem;font-size:1.5rem");
  add("btn-block", "display:flex;width:100%");
  add(
    "btn-icon",
    "inline-size:2.375rem;block-size:2.375rem;aspect-ratio:1/1;flex-shrink:0;min-height:unset;min-width:unset;padding:0"
  );
  addRaw(
    ".btn-xs.btn-icon",
    "inline-size:1.5rem;block-size:1.5rem;aspect-ratio:1/1;flex-shrink:0;min-height:unset;min-width:unset;padding:0"
  );
  addRaw(
    ".btn-sm.btn-icon",
    "inline-size:1.75rem;block-size:1.75rem;aspect-ratio:1/1;flex-shrink:0;min-height:unset;min-width:unset;padding:0"
  );
  addRaw(
    ".btn-md.btn-icon",
    "inline-size:2.375rem;block-size:2.375rem;aspect-ratio:1/1;flex-shrink:0;min-height:unset;min-width:unset;padding:0"
  );
  addRaw(
    ".btn-lg.btn-icon",
    "inline-size:2.875rem;block-size:2.875rem;aspect-ratio:1/1;flex-shrink:0;min-height:unset;min-width:unset;padding:0"
  );
  addRaw(
    ".btn-xl.btn-icon",
    "inline-size:3.375rem;block-size:3.375rem;aspect-ratio:1/1;flex-shrink:0;min-height:unset;min-width:unset;padding:0"
  );
  addRaw(
    ".btn-2xl.btn-icon",
    "inline-size:3.875rem;block-size:3.875rem;aspect-ratio:1/1;flex-shrink:0;min-height:unset;min-width:unset;padding:0"
  );
  addRaw(
    ".btn.rounded-circle,.btn.rounded-full,button.rounded-circle,a.btn.rounded-circle",
    "aspect-ratio:1/1;flex-shrink:0;min-height:unset;display:inline-flex;align-items:center;justify-content:center"
  );
  addRaw(
    '.btn.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"]),.btn.rounded-full:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:2.375rem;block-size:2.375rem;padding:0"
  );
  addRaw(
    '.btn.btn-xs.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"]),.btn.btn-xs.rounded-full:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:1.5rem;block-size:1.5rem;padding:0"
  );
  addRaw(
    '.btn.btn-sm.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"]),.btn.btn-sm.rounded-full:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:1.75rem;block-size:1.75rem;padding:0"
  );
  addRaw(
    '.btn.btn-md.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"]),.btn.btn-md.rounded-full:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:2.375rem;block-size:2.375rem;padding:0"
  );
  addRaw(
    '.btn.btn-lg.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"]),.btn.btn-lg.rounded-full:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:2.875rem;block-size:2.875rem;padding:0"
  );
  addRaw(
    '.btn.btn-xl.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"]),.btn.btn-xl.rounded-full:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:3.375rem;block-size:3.375rem;padding:0"
  );
  addRaw(
    '.btn.btn-2xl.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"]),.btn.btn-2xl.rounded-full:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:3.875rem;block-size:3.875rem;padding:0"
  );
  add("btn-ghost", "color:var(--aksara-text-body);background:transparent;border-color:transparent");
  add("btn-group", "display:inline-flex;vertical-align:middle");
  add(
    "btn-group-vertical",
    "display:inline-flex;flex-direction:column;align-items:flex-start;justify-content:center;vertical-align:middle"
  );
  add("btn-group-xs", "font-size:.75rem");
  add("btn-group-sm", "font-size:.8125rem");
  add("btn-group-md", "font-size:.875rem");
  add("btn-group-lg", "font-size:1.0625rem");
  add("btn-group-xl", "font-size:1.25rem");
  add("btn-group-2xl", "font-size:1.5rem");
  add("btn-toolbar", "display:flex;flex-wrap:wrap;justify-content:flex-start;gap:.5rem");
  addRaw(".btn-group>.btn,.btn-group-vertical>.btn", "position:relative;flex:1 1 auto;border-radius:0");
  addRaw(".btn-group>.btn+.btn", "margin-inline-start:-1px");
  addRaw(".btn-group-vertical>.btn+.btn", "margin-block-start:-1px;margin-inline-start:0");
  addRaw(
    ".btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:focus-visible,.btn-group>.btn:active,.btn-group-vertical>.btn:hover,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:focus-visible,.btn-group-vertical>.btn:active",
    "z-index:1"
  );
  addRaw(
    ".btn-group>.btn:first-child",
    "border-start-start-radius:var(--aksara-radius-sm);border-end-start-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".btn-group>.btn:last-child",
    "border-start-end-radius:var(--aksara-radius-sm);border-end-end-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".btn-group-vertical>.btn:first-child",
    "border-start-start-radius:var(--aksara-radius-sm);border-start-end-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".btn-group-vertical>.btn:last-child",
    "border-end-start-radius:var(--aksara-radius-sm);border-end-end-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".btn-group-xs>.btn,.btn-group-xs>.btn-group>.btn,.btn-group-xs>.btn-group-vertical>.btn",
    "min-height:1.5rem;padding:.125rem .375rem;font-size:.75rem"
  );
  addRaw(
    ".btn-group-xs>.btn-icon,.btn-group-xs>.btn.btn-icon,.btn-group-xs>.btn-group>.btn-icon,.btn-group-xs>.btn-group>.btn.btn-icon,.btn-group-xs>.btn-group-vertical>.btn-icon,.btn-group-xs>.btn-group-vertical>.btn.btn-icon",
    "inline-size:1.5rem;block-size:1.5rem"
  );
  addRaw(
    ".btn-group-sm>.btn,.btn-group-sm>.btn-group>.btn,.btn-group-sm>.btn-group-vertical>.btn",
    "min-height:1.75rem;padding:.25rem .5rem;font-size:.8125rem"
  );
  addRaw(
    ".btn-group-sm>.btn-icon,.btn-group-sm>.btn.btn-icon,.btn-group-sm>.btn-group>.btn-icon,.btn-group-sm>.btn-group>.btn.btn-icon,.btn-group-sm>.btn-group-vertical>.btn-icon,.btn-group-sm>.btn-group-vertical>.btn.btn-icon",
    "inline-size:1.75rem;block-size:1.75rem"
  );
  addRaw(
    ".btn-group-md>.btn,.btn-group-md>.btn-group>.btn,.btn-group-md>.btn-group-vertical>.btn",
    "min-height:2.375rem;padding:.5rem .875rem;font-size:.875rem"
  );
  addRaw(
    ".btn-group-md>.btn-icon,.btn-group-md>.btn.btn-icon,.btn-group-md>.btn-group>.btn-icon,.btn-group-md>.btn-group>.btn.btn-icon,.btn-group-md>.btn-group-vertical>.btn-icon,.btn-group-md>.btn-group-vertical>.btn.btn-icon",
    "inline-size:2.375rem;block-size:2.375rem"
  );
  addRaw(
    ".btn-group-lg>.btn,.btn-group-lg>.btn-group>.btn,.btn-group-lg>.btn-group-vertical>.btn",
    "min-height:2.875rem;padding:.75rem 1.125rem;font-size:1.0625rem"
  );
  addRaw(
    ".btn-group-lg>.btn-icon,.btn-group-lg>.btn.btn-icon,.btn-group-lg>.btn-group>.btn-icon,.btn-group-lg>.btn-group>.btn.btn-icon,.btn-group-lg>.btn-group-vertical>.btn-icon,.btn-group-lg>.btn-group-vertical>.btn.btn-icon",
    "inline-size:2.875rem;block-size:2.875rem"
  );
  addRaw(
    ".btn-group-xl>.btn,.btn-group-xl>.btn-group>.btn,.btn-group-xl>.btn-group-vertical>.btn",
    "min-height:3.375rem;padding:.875rem 1.375rem;font-size:1.25rem"
  );
  addRaw(
    ".btn-group-xl>.btn-icon,.btn-group-xl>.btn.btn-icon,.btn-group-xl>.btn-group>.btn-icon,.btn-group-xl>.btn-group>.btn.btn-icon,.btn-group-xl>.btn-group-vertical>.btn-icon,.btn-group-xl>.btn-group-vertical>.btn.btn-icon",
    "inline-size:3.375rem;block-size:3.375rem"
  );
  addRaw(
    ".btn-group-2xl>.btn,.btn-group-2xl>.btn-group>.btn,.btn-group-2xl>.btn-group-vertical>.btn",
    "min-height:3.875rem;padding:1rem 1.625rem;font-size:1.5rem"
  );
  addRaw(
    ".btn-group-2xl>.btn-icon,.btn-group-2xl>.btn.btn-icon,.btn-group-2xl>.btn-group>.btn-icon,.btn-group-2xl>.btn-group>.btn.btn-icon,.btn-group-2xl>.btn-group-vertical>.btn-icon,.btn-group-2xl>.btn-group-vertical>.btn.btn-icon",
    "inline-size:3.875rem;block-size:3.875rem"
  );
  addRaw(".btn:focus-visible", "outline:0;box-shadow:none");
  addRaw(".btn-ghost:hover", "background:var(--aksara-bg-subtle)");
  for (const name of Object.keys(colors)) {
    add(
      `btn-${name}`,
      `color:${solidForeground(name)};background-color:${colorValue(name)};border-color:${colorValue(name)}`
    );
    add(
      `btn-outline-${name}`,
      `color:${colorValue(name)};background-color:transparent;border-color:${colorValue(name)}`
    );
    add(
      `btn-soft-${name}`,
      `color:${colorValue(name)};background-color:${colorValue(name, 12)};border-color:${colorValue(name, 18)}`
    );
    addRaw(`.btn-${name}:hover`, `background-color:${colorValue(name, 88)};border-color:${colorValue(name, 88)}`);
    addRaw(
      `.btn-outline-${name}:hover`,
      `color:${solidForeground(name)};background-color:${colorValue(name)};border-color:${colorValue(name)}`
    );
  }
  add(
    "card",
    "color:var(--aksara-text-body);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden;box-shadow:var(--aksara-shadow-sm)"
  );
  add("card-elevated", "box-shadow:var(--aksara-shadow-md)");
  add("card-flat", "box-shadow:none");
  add("card-img", "display:block;width:100%;object-fit:cover");
  add("card-title", "margin:0 0 .375rem;font-weight:800;line-height:1.2");
  add("card-text", "margin:0;color:var(--aksara-text-subtle)");
  add("card-header", "padding:1rem;font-weight:700");
  add("card-body", "padding:1rem");
  add("card-footer", "padding:1rem");
  add("bento-grid", "display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:1.25rem");
  add("bento-grid-2", "display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:1.25rem");
  add("bento-grid-3", "display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:1.25rem");
  add("bento-grid-4", "display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:1.25rem");
  addRaw(
    "@media(min-width:48rem)",
    ".bento-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.bento-grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}.bento-grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}.bento-grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}"
  );
  add(
    "bento-card",
    "position:relative;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;background:var(--aksara-surface);color:var(--aksara-text-body);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-2xl);padding:1.5rem;transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease"
  );
  addRaw(
    ".bento-card:hover",
    "box-shadow:var(--aksara-shadow-md);border-color:var(--aksara-border);transform:translateY(-2px)"
  );
  add("bento-col-1", "grid-column:span 1/span 1");
  add("bento-col-2", "grid-column:span 1/span 1");
  add("bento-col-3", "grid-column:span 1/span 1");
  add("bento-col-4", "grid-column:span 1/span 1");
  add("bento-row-1", "grid-row:span 1/span 1");
  add("bento-row-2", "grid-row:span 1/span 1");
  add("bento-row-3", "grid-row:span 1/span 1");
  addRaw(
    "@media(min-width:48rem)",
    ".bento-col-2{grid-column:span 2/span 2}.bento-col-3{grid-column:span 3/span 3}.bento-col-4{grid-column:span 4/span 4}.bento-row-2{grid-row:span 2/span 2}.bento-row-3{grid-row:span 3/span 3}"
  );
  add(
    "bento-featured",
    "background:linear-gradient(135deg,var(--aksara-surface),var(--aksara-bg-subtle));border-color:rgb(var(--aksara-primary)/.35);box-shadow:0 0 30px rgb(var(--aksara-primary)/.08)"
  );
  add("bento-header", "display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1rem");
  add("bento-title", "margin:0;font-size:1.25rem;font-weight:700;line-height:1.3");
  add("bento-subtitle", "margin:.25rem 0 0;font-size:.875rem;color:var(--aksara-text-subtle);line-height:1.4");
  add("bento-body", "flex:1 1 auto");
  add("bento-footer", "display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:1.25rem");
  add(
    "bento-visual",
    "display:flex;align-items:center;justify-content:center;border-radius:var(--aksara-radius);overflow:hidden;background:var(--aksara-bg-subtle);margin-top:1rem;min-height:120px"
  );
  add(
    "alert",
    "position:relative;padding:1rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
  );
  add("alert-dismissible", "padding-inline-end:3rem");
  add("alert-title", "margin:0 0 .25rem;font-weight:700");
  add("alert-link", "font-weight:700;color:inherit;text-decoration:underline;text-underline-offset:.16em");
  add(
    "badge",
    "display:inline-flex;align-items:center;gap:.25rem;border-radius:9999px;padding:.25rem .55rem;font-size:.75em;font-weight:750;line-height:1;background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
  );
  add("badge-xs", "padding:.125rem .35rem;font-size:.625rem");
  add("badge-sm", "padding:.2rem .45rem;font-size:.7rem");
  add("badge-md", "padding:.25rem .55rem;font-size:.75rem");
  add("badge-lg", "padding:.35rem .65rem;font-size:.875rem");
  add("badge-xl", "padding:.45rem .8rem;font-size:1rem");
  add("badge-2xl", "padding:.55rem .95rem;font-size:1.125rem");
  add("badge-dot", "inline-size:.5rem;block-size:.5rem;border-radius:9999px;background:currentColor;padding:0");
  add(
    "chip",
    "display:inline-flex;align-items:center;justify-content:center;gap:.375rem;min-width:0;max-width:100%;border-radius:9999px;font-weight:600;text-decoration:none;vertical-align:middle;cursor:pointer;transition:all .15s ease-in-out;border:1px solid var(--aksara-border-subtle);background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
  );
  add("chip-xs", "padding:.125rem .375rem;font-size:.6875rem;line-height:1.2;min-height:1.375rem");
  add("chip-sm", "padding:.25rem .5rem;font-size:.75rem;line-height:1.25;min-height:1.75rem");
  add("chip-md", "padding:.375rem .75rem;font-size:.875rem;line-height:1.35;min-height:2.125rem");
  add("chip-lg", "padding:.5rem 1rem;font-size:1rem;line-height:1.5;min-height:2.5rem");
  add(
    "chip-label",
    "flex:1 1 0%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start"
  );
  add("chip-icon", "flex-shrink:0;display:inline-flex;align-items:center;justify-content:center");
  add(
    "chip-action",
    "flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;opacity:.7;cursor:pointer;transition:opacity .15s ease"
  );
  addRaw(".chip-action:hover", "opacity:1");
  add(
    "dropdown-select-toggle",
    "display:inline-flex!important;align-items:center;justify-content:space-between;width:100%;min-width:0;max-width:100%;padding-left:.5rem;padding-right:.5rem"
  );
  addRaw(
    ".dropdown-select-toggle .select-current-label",
    "flex:1 1 0%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start"
  );
  addRaw(".dropdown-select-toggle .select-current-icon,.dropdown-select-toggle .mdi-chevron-down", "flex-shrink:0");
  add("list-unstyled", "padding-left:0;list-style:none");
  add(
    "list-group",
    "display:flex;flex-direction:column;margin:0;padding:0;list-style:none;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden;background:var(--aksara-surface)"
  );
  add("list-group-flush", "border:0;border-radius:0;overflow:visible");
  add(
    "list-group-inset",
    "border-radius:var(--aksara-radius-lg,1rem);background:var(--aksara-bg-subtle);border-color:var(--aksara-border-subtle);overflow:hidden"
  );
  addRaw(".list-group-inset .list-group-item", "background:transparent");
  addRaw(
    ".list-group-inset .list-group-item-action:hover,.list-group-inset .list-group-item-action:focus",
    "background:rgb(var(--aksara-primary)/.06)"
  );
  addRaw(".list-group-divider-inset > .list-group-item", "position:relative;border-block-end-color:transparent");
  addRaw(
    ".list-group-divider-inset > .list-group-item:not(:last-child)::after",
    'content:"";position:absolute;inset-inline-start:3.25rem;inset-inline-end:0;inset-block-end:0;height:1px;background-color:var(--aksara-border-subtle);pointer-events:none'
  );
  addRaw(".list-group-item-action:active", "transform:scale(.99);opacity:.9");
  add(
    "list-group-item",
    "display:block;padding:1rem;border-block-end:1px solid var(--aksara-border-subtle);color:var(--aksara-text-body);text-decoration:none;background:var(--aksara-surface)"
  );
  add(
    "list-group-item-action",
    "width:100%;border-inline:0;border-block-start:0;text-align:start;cursor:pointer;transition:background-color .15s ease,color .15s ease"
  );
  add("list-group-title", "display:block;margin:0;font-weight:800;color:var(--aksara-text-body);line-height:1.35");
  add(
    "list-group-subtitle",
    "display:block;margin:.25rem 0 0;color:var(--aksara-text-subtle);font-size:.875rem;line-height:1.45"
  );
  addRaw(".list-group-item:last-child", "border-block-end:0");
  addRaw(
    ".list-group-item.active",
    "background:rgb(var(--aksara-primary)/.12);color:rgb(var(--aksara-primary));font-weight:700"
  );
  addRaw(".list-group-item.active .list-group-title,.list-group-item.active .list-group-subtitle", "color:inherit");
  addRaw(".list-group-item-action:hover,.list-group-item-action:focus", "background:var(--aksara-bg-subtle);outline:0");
  addRaw(".list-group-item.disabled,.list-group-item:disabled", "opacity:.56;pointer-events:none");
  add("timeline", "position:relative;padding:0;margin:0;list-style:none");
  addRaw(
    ".timeline::before",
    'content:"";position:absolute;inset-block:0;inset-inline-start:.875rem;width:2px;background:var(--aksara-border-subtle)'
  );
  add("timeline-item", "position:relative;display:flex;gap:1rem;margin-bottom:1.5rem");
  addRaw(".timeline-item:last-child", "margin-bottom:0");
  add(
    "timeline-point",
    "position:relative;z-index:1;display:flex;align-items:center;justify-content:center;width:1.75rem;height:1.75rem;border-radius:9999px;background:var(--aksara-surface);border:2px solid rgb(var(--aksara-primary));color:rgb(var(--aksara-primary));flex-shrink:0;box-shadow:0 0 0 3px var(--aksara-surface)"
  );
  add("timeline-content", "flex:1 1 auto;padding-top:.125rem");
  add("timeline-title", "margin:0 0 .25rem;font-size:1rem;font-weight:700;line-height:1.3");
  add("timeline-time", "display:block;font-size:.75rem;color:var(--aksara-text-subtle);margin-bottom:.5rem");
  add(
    "navbar",
    "display:flex;align-items:center;gap:1rem;min-height:3.5rem;padding:.75rem 1rem;border-block-end:1px solid var(--aksara-border-subtle);background:var(--aksara-surface)"
  );
  add("navbar-brand", "font-weight:800;color:var(--aksara-text-body);text-decoration:none");
  add("navbar-nav", "display:flex;align-items:center;gap:.5rem;margin:0;padding:0;list-style:none");
  add(
    "navbar-toggler",
    "display:inline-flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-sm);background:var(--aksara-bg-subtle);color:var(--aksara-text-body);cursor:pointer"
  );
  add("navbar-collapse", "display:flex;align-items:center;gap:1rem");
  add(
    "nav-link",
    "display:inline-flex;align-items:center;border-radius:var(--aksara-radius-sm);padding:.5rem .625rem;color:var(--aksara-text-subtle);text-decoration:none"
  );
  addRaw(
    '.nav-link:hover,.nav-link[aria-current="page"]',
    "color:var(--aksara-text-body);background:var(--aksara-bg-subtle)"
  );
  add("dropdown", "position:relative;display:inline-block");
  add("dropdown-top", "position:relative;display:inline-block");
  add("dropdown-bottom", "position:relative;display:inline-block");
  add("dropdown-start", "position:relative;display:inline-block");
  add("dropdown-end", "position:relative;display:inline-block");
  add(
    "dropdown-menu",
    "position:absolute;z-index:1000;display:none;min-width:12rem;padding:.375rem;margin:.25rem 0 0;list-style:none;background:var(--aksara-surface);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);box-shadow:var(--aksara-shadow-md);overscroll-behavior:contain"
  );
  addRaw(
    ".dropdown-top .dropdown-menu,.dropdown-menu.dropdown-top",
    "bottom:100%;top:auto;margin-top:0;margin-bottom:.25rem"
  );
  addRaw(
    ".dropdown-start .dropdown-menu,.dropdown-menu.dropdown-start",
    "inset-inline-end:100%;inset-inline-start:auto;top:0;margin-top:0;margin-inline-end:.25rem"
  );
  addRaw(
    ".dropdown-end .dropdown-menu,.dropdown-menu.dropdown-end",
    "inset-inline-start:100%;inset-inline-end:auto;top:0;margin-top:0;margin-inline-start:.25rem"
  );

  addRaw(
    ".dropdown-menu::before,.dropdown-menu::after",
    "content:'';position:absolute;pointer-events:none;border-style:solid"
  );
  addRaw(
    ".dropdown:not(.dropdown-top):not(.dropdown-start):not(.dropdown-end) .dropdown-menu::before,.dropdown-menu.dropdown-bottom::before",
    "bottom:100%;inset-inline-start:1rem;border-width:6px;border-color:transparent transparent var(--aksara-border-subtle) transparent"
  );
  addRaw(
    ".dropdown:not(.dropdown-top):not(.dropdown-start):not(.dropdown-end) .dropdown-menu::after,.dropdown-menu.dropdown-bottom::after",
    "bottom:100%;inset-inline-start:calc(1rem + 1px);border-width:5px;border-color:transparent transparent var(--aksara-surface) transparent"
  );
  addRaw(
    ".dropdown-top .dropdown-menu::before,.dropdown-menu.dropdown-top::before",
    "top:100%;bottom:auto;inset-inline-start:1rem;border-width:6px;border-color:var(--aksara-border-subtle) transparent transparent transparent"
  );
  addRaw(
    ".dropdown-top .dropdown-menu::after,.dropdown-menu.dropdown-top::after",
    "top:100%;bottom:auto;inset-inline-start:calc(1rem + 1px);border-width:5px;border-color:var(--aksara-surface) transparent transparent transparent"
  );
  addRaw(
    ".dropdown-start .dropdown-menu::before,.dropdown-menu.dropdown-start::before",
    "inset-inline-start:100%;top:1rem;border-width:6px;border-color:transparent transparent transparent var(--aksara-border-subtle)"
  );
  addRaw(
    ".dropdown-start .dropdown-menu::after,.dropdown-menu.dropdown-start::after",
    "inset-inline-start:100%;top:calc(1rem + 1px);border-width:5px;border-color:transparent transparent transparent var(--aksara-surface)"
  );
  addRaw(
    ".dropdown-end .dropdown-menu::before,.dropdown-menu.dropdown-end::before",
    "inset-inline-end:100%;top:1rem;border-width:6px;border-color:transparent var(--aksara-border-subtle) transparent transparent"
  );
  addRaw(
    ".dropdown-end .dropdown-menu::after,.dropdown-menu.dropdown-end::after",
    "inset-inline-end:100%;top:calc(1rem + 1px);border-width:5px;border-color:transparent var(--aksara-surface) transparent transparent"
  );
  add(
    "dropdown-item",
    "display:flex;align-items:center;gap:.5rem;width:100%;border:0;border-radius:var(--aksara-radius-md);padding:.5rem .625rem;background:transparent;color:var(--aksara-text-body);text-align:start;text-decoration:none;cursor:pointer"
  );
  add(
    "dropdown-header",
    "padding:.5rem .625rem;color:var(--aksara-text-subtle);font-size:.75rem;font-weight:800;text-transform:uppercase"
  );
  add("dropdown-divider", "height:1px;margin:.375rem 0;background:var(--aksara-border-subtle)");
  addRaw(".dropdown-item:hover,.dropdown-item:focus", "background:var(--aksara-bg-subtle);outline:0");
  addRaw(
    '.dropdown-item[aria-current="true"],.dropdown-item.active',
    "background:rgb(var(--aksara-primary)/.12);color:rgb(var(--aksara-primary))"
  );
  add("dropdown-open", "display:block");
  add("dropdown-menu-sm", "min-width:9rem;padding:.25rem;font-size:.8125rem");
  addRaw(
    ".dropdown-menu-sm .dropdown-item,.dropdown-sm .dropdown-item,.btn-sm~.dropdown-menu .dropdown-item,.form-control-sm~.dropdown-menu .dropdown-item,.form-select-sm~.dropdown-menu .dropdown-item",
    "padding:.3125rem .5rem;font-size:.8125rem;border-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".dropdown-menu-sm .dropdown-item i,.dropdown-menu-sm .dropdown-item .mdi,.btn-sm~.dropdown-menu .dropdown-item i",
    "font-size:.95rem"
  );
  add(
    "modal",
    "position:fixed;inset:0;z-index:1050;display:none;align-items:center;justify-content:center;overflow:hidden;background:var(--aksara-overlay-bg);backdrop-filter:saturate(130%) blur(8px)"
  );
  add("modal-open", "display:flex");
  add(
    "modal-dialog",
    "display:grid;grid-template-rows:auto minmax(0,1fr) auto;width:min(100%,var(--aksara-modal-width,32rem));max-height:calc(100svh - 2rem);overflow:hidden;transform:translate(var(--aksara-modal-x,0),var(--aksara-modal-y,0));background:var(--aksara-bg-body);color:var(--aksara-text-body);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);box-shadow:var(--aksara-shadow-lg)"
  );
  add("modal-sm", "--aksara-modal-width:24rem");
  add("modal-lg", "--aksara-modal-width:48rem");
  add("modal-xl", "--aksara-modal-width:72rem");
  add("modal-fullscreen", "width:100%;height:100%;max-height:100%;border-radius:0");
  addRaw(
    "@media(max-width:35.99875rem)",
    ".modal-fullscreen-sm-down{width:100%;height:100%;max-height:100%;border-radius:0}.modal-fullscreen-sm-down .modal-content{height:100%;max-height:100%;border-radius:0;border:0}"
  );
  addRaw(
    "@media(max-width:47.99875rem)",
    ".modal-fullscreen-md-down{width:100%;height:100%;max-height:100%;border-radius:0}.modal-fullscreen-md-down .modal-content{height:100%;max-height:100%;border-radius:0;border:0}"
  );
  addRaw(
    "@media(max-width:61.99875rem)",
    ".modal-fullscreen-lg-down{width:100%;height:100%;max-height:100%;border-radius:0}.modal-fullscreen-lg-down .modal-content{height:100%;max-height:100%;border-radius:0;border:0}"
  );
  addRaw(
    "@media(max-width:74.99875rem)",
    ".modal-fullscreen-xl-down{width:100%;height:100%;max-height:100%;border-radius:0}.modal-fullscreen-xl-down .modal-content{height:100%;max-height:100%;border-radius:0;border:0}"
  );
  add(
    "modal-header",
    "display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem;border-block-end:1px solid var(--aksara-border-subtle)"
  );
  add(
    "modal-title",
    "margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;font-size:1.25rem;font-weight:600;line-height:1.5"
  );
  add("modal-body", "min-height:0;overflow:auto;overscroll-behavior:contain;padding:1rem");
  add(
    "modal-footer",
    "display:flex;align-items:center;justify-content:flex-end;gap:.5rem;padding:1rem;border-block-start:1px solid var(--aksara-border-subtle)"
  );
  add(
    "modal-content",
    "display:grid;grid-template-rows:auto minmax(0,1fr) auto;width:100%;height:100%;max-height:calc(100svh - 2rem);min-height:0;overflow:hidden;background:inherit;color:inherit;border-radius:inherit"
  );
  addRaw(".modal-dialog:has(.modal-content)", "display:flex;flex-direction:column");
  add("modal-dialog-scrollable", "max-height:calc(100svh - 2rem)");
  addRaw(".modal-dialog-scrollable .modal-body", "min-height:0;overflow-y:auto;overscroll-behavior:contain");
  addRaw(".modal-header", "cursor:grab;touch-action:none;user-select:none");
  addRaw(".modal-dialog.is-dragging .modal-header", "cursor:grabbing");
  addRaw(
    '.modal[data-modal-draggable="false"] .modal-header,.modal-dialog[data-modal-draggable="false"] .modal-header',
    "cursor:auto;touch-action:auto;user-select:auto"
  );
  add(
    "close",
    "position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;display:inline-flex;align-items:center;justify-content:center;inline-size:2rem;block-size:2rem;aspect-ratio:1/1;flex:0 0 auto;flex-shrink:0;border:0;border-radius:9999px;background:var(--aksara-bg-subtle);color:var(--aksara-text-subtle);cursor:pointer;transition:background-color .15s ease,color .15s ease,transform .15s ease"
  );
  add(
    "modal-close",
    "position:relative;display:inline-flex;align-items:center;justify-content:center;inline-size:2rem;block-size:2rem;aspect-ratio:1/1;flex:0 0 auto;flex-shrink:0;border:0;border-radius:9999px;background:var(--aksara-bg-subtle);color:var(--aksara-text-subtle);cursor:pointer;transition:background-color .15s ease,color .15s ease,transform .15s ease"
  );
  add(
    "btn-close",
    "position:relative;display:inline-flex;align-items:center;justify-content:center;inline-size:2rem;block-size:2rem;aspect-ratio:1/1;flex:0 0 auto;flex-shrink:0;border:0;border-radius:9999px;background:var(--aksara-bg-subtle);color:var(--aksara-text-subtle);cursor:pointer;transition:background-color .15s ease,color .15s ease,transform .15s ease"
  );
  add("close-sm", "inline-size:1.5rem;block-size:1.5rem");
  add("close-lg", "inline-size:2.5rem;block-size:2.5rem");
  addRaw(".btn-close-xs,.btn-xs.btn-close", "inline-size:1.25rem;block-size:1.25rem");
  addRaw(".btn-close-sm,.btn-sm.btn-close", "inline-size:1.5rem;block-size:1.5rem");
  addRaw(".btn-close-md,.btn-md.btn-close", "inline-size:2rem;block-size:2rem");
  addRaw(".btn-close-lg,.btn-lg.btn-close", "inline-size:2.5rem;block-size:2.5rem");
  addRaw(".btn-close-xl,.btn-xl.btn-close", "inline-size:3rem;block-size:3rem");
  addRaw(".btn-close-2xl,.btn-2xl.btn-close", "inline-size:3.5rem;block-size:3.5rem");
  addRaw(
    ".close::before,.close::after,.modal-close::before,.modal-close::after,.btn-close::before,.btn-close::after",
    'content:"";position:absolute;inline-size:50%;block-size:2px;border-radius:9999px;background:currentColor'
  );
  addRaw(".close::before,.modal-close::before,.btn-close::before", "transform:rotate(45deg)");
  addRaw(".close::after,.modal-close::after,.btn-close::after", "transform:rotate(-45deg)");
  addRaw(".close > *,.modal-close > *,.btn-close > *", "display:none");
  addRaw(
    ".close:hover,.modal-close:hover,.btn-close:hover",
    "background:rgb(var(--aksara-primary)/.12);color:rgb(var(--aksara-primary))"
  );
  addRaw(".close:active,.modal-close:active,.btn-close:active", "transform:scale(.94)");
  addRaw(".close-white,.btn-close-white", "color:#fff;background:rgba(255,255,255,.16)");
  add(
    "tooltip",
    "position:absolute;z-index:1080;max-width:16rem;padding:.375rem .5rem;border-radius:var(--aksara-radius-sm);background:var(--aksara-tooltip-bg);color:var(--aksara-tooltip-text);font-size:.875rem;box-shadow:var(--aksara-shadow-sm)"
  );
  addRaw(".tooltip::after", "content:'';position:absolute;pointer-events:none;border-style:solid");
  addRaw(
    ".tooltip-top::after",
    "top:100%;left:50%;transform:translateX(-50%);border-width:5px;border-color:var(--aksara-tooltip-bg) transparent transparent transparent"
  );
  addRaw(
    ".tooltip-bottom::after",
    "bottom:100%;left:50%;transform:translateX(-50%);border-width:5px;border-color:transparent transparent var(--aksara-tooltip-bg) transparent"
  );
  addRaw(
    ".tooltip-left::after,.tooltip-start::after",
    "left:100%;right:auto;top:50%;transform:translateY(-50%);border-width:5px;border-color:transparent transparent transparent var(--aksara-tooltip-bg)"
  );
  addRaw(
    ".tooltip-right::after,.tooltip-end::after",
    "right:100%;left:auto;top:50%;transform:translateY(-50%);border-width:5px;border-color:transparent var(--aksara-tooltip-bg) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .tooltip-start::after",
    "left:auto;right:100%;border-color:transparent var(--aksara-tooltip-bg) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .tooltip-end::after",
    "right:auto;left:100%;border-color:transparent transparent transparent var(--aksara-tooltip-bg)"
  );

  add(
    "popover",
    "position:absolute;z-index:1070;max-width:20rem;padding:.75rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);background:var(--aksara-surface);box-shadow:var(--aksara-shadow-md)"
  );
  addRaw(".popover::before,.popover::after", "content:'';position:absolute;pointer-events:none;border-style:solid");
  addRaw(
    ".popover-top::before",
    "top:100%;left:50%;transform:translateX(-50%);border-width:7px;border-color:var(--aksara-border-subtle) transparent transparent transparent"
  );
  addRaw(
    ".popover-top::after",
    "top:100%;left:50%;transform:translateX(-50%);border-width:6px;border-color:var(--aksara-surface) transparent transparent transparent"
  );
  addRaw(
    ".popover-bottom::before",
    "bottom:100%;left:50%;transform:translateX(-50%);border-width:7px;border-color:transparent transparent var(--aksara-border-subtle) transparent"
  );
  addRaw(
    ".popover-bottom::after",
    "bottom:100%;left:50%;transform:translateX(-50%);border-width:6px;border-color:transparent transparent var(--aksara-surface) transparent"
  );
  addRaw(
    ".popover-left::before,.popover-start::before",
    "left:100%;right:auto;top:50%;transform:translateY(-50%);border-width:7px;border-color:transparent transparent transparent var(--aksara-border-subtle)"
  );
  addRaw(
    ".popover-left::after,.popover-start::after",
    "left:100%;right:auto;top:50%;transform:translateY(-50%);border-width:6px;border-color:transparent transparent transparent var(--aksara-surface)"
  );
  addRaw(
    ".popover-right::before,.popover-end::before",
    "right:100%;left:auto;top:50%;transform:translateY(-50%);border-width:7px;border-color:transparent var(--aksara-border-subtle) transparent transparent"
  );
  addRaw(
    ".popover-right::after,.popover-end::after",
    "right:100%;left:auto;top:50%;transform:translateY(-50%);border-width:6px;border-color:transparent var(--aksara-surface) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .popover-start::before",
    "left:auto;right:100%;border-color:transparent var(--aksara-border-subtle) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .popover-start::after",
    "left:auto;right:100%;border-color:transparent var(--aksara-surface) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .popover-end::before",
    "right:auto;left:100%;border-color:transparent transparent transparent var(--aksara-border-subtle)"
  );
  addRaw(
    "[dir='rtl'] .popover-end::after",
    "right:auto;left:100%;border-color:transparent transparent transparent var(--aksara-surface)"
  );
  add(
    "popover-header",
    "margin:-.75rem -.75rem .75rem;padding:.75rem;border-block-end:1px solid var(--aksara-border-subtle);font-weight:800;background:var(--aksara-bg-subtle);border-start-start-radius:var(--aksara-radius-md);border-start-end-radius:var(--aksara-radius-md)"
  );
  add("popover-title", "margin:0 0 .25rem;font-weight:700");
  add("popover-body", "color:var(--aksara-text-subtle)");
  add(
    "accordion",
    "border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden;background:var(--aksara-surface)"
  );
  add("accordion-item", "border-block-end:1px solid var(--aksara-border-subtle)");
  add(
    "accordion-button",
    "display:flex;width:100%;align-items:center;justify-content:space-between;gap:1rem;border:0;background:transparent;padding:1rem;color:var(--aksara-text-body);font:inherit;font-weight:700;text-align:start;cursor:pointer;transition:background-color .2s ease,color .2s ease"
  );
  add(
    "accordion-icon",
    "display:inline-flex;align-items:center;justify-content:center;color:var(--aksara-text-subtle);transition:transform .2s ease,color .2s ease"
  );
  add("accordion-panel", "padding:0 1rem 1rem;color:var(--aksara-text-subtle)");
  addRaw(".accordion-item:last-child", "border-block-end:0");
  addRaw('.accordion-button[aria-expanded="true"]', "background:var(--aksara-bg-subtle)");
  addRaw(
    '.accordion-button[aria-expanded="true"] .accordion-icon',
    "color:var(--aksara-text-body);transform:rotate(180deg)"
  );
  add("tabs", "display:flex;gap:.25rem;border-block-end:1px solid var(--aksara-border-subtle)");
  add(
    "tab",
    "display:inline-flex;align-items:center;border:0;border-end-start-radius:0;border-end-end-radius:0;border-start-start-radius:var(--aksara-radius-sm);border-start-end-radius:var(--aksara-radius-sm);padding:.625rem .875rem;background:transparent;color:var(--aksara-text-subtle);font:inherit;font-weight:700;cursor:pointer"
  );
  add("tab-panel", "padding:1rem 0");
  add("tabs-slider", "position:relative;overflow:hidden;width:100%");
  addRaw(
    ".tabs-slider-track",
    "display:flex;flex-direction:row;flex-wrap:nowrap;width:100%;will-change:transform;touch-action:pan-y pinch-zoom;transition:transform .3s cubic-bezier(.25,1,.5,1)"
  );
  addRaw(
    ".tabs-slider-track > .tab-panel,.tabs-slider-track > .tab-pane",
    "flex:0 0 100%;min-width:100%;max-width:100%;width:100%;box-sizing:border-box;display:block !important"
  );
  addRaw('.tab[aria-selected="true"]', "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)");
  add("nav", "display:flex;flex-wrap:wrap;gap:.25rem;margin:0;padding:0;list-style:none");
  add("nav-pills", "border-block-end:0");
  addRaw(
    ".nav-pills .nav-link,.nav-pills .tab",
    "border-radius:9999px;border:1px solid transparent;padding:.5rem .875rem;background:transparent;color:var(--aksara-text-subtle);text-decoration:none"
  );
  addRaw(
    ".nav-pills .nav-link:hover,.nav-pills .tab:hover",
    "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
  );
  addRaw(
    '.nav-pills .nav-link.active,.nav-pills .nav-link[aria-current="true"],.nav-pills .nav-link[aria-current="page"],.nav-pills .tab[aria-selected="true"]',
    "background:rgb(var(--aksara-primary)/.12);border-color:rgb(var(--aksara-primary)/.22);color:rgb(var(--aksara-primary))"
  );
  add(
    "tabs-segmented",
    "display:flex;gap:2px;padding:3px;background:var(--aksara-bg-subtle);border-radius:var(--aksara-radius-lg,1rem);border:1px solid var(--aksara-border-subtle)"
  );
  addRaw(
    ".tabs-segmented .tab",
    "flex:1;display:inline-flex;align-items:center;justify-content:center;gap:.375rem;border-radius:calc(var(--aksara-radius-lg,1rem) - 2px);padding:.4375rem .75rem;font:inherit;font-size:.8125rem;font-weight:600;color:var(--aksara-text-subtle);transition:all .15s ease-in-out;border:0;background:transparent;text-decoration:none;cursor:pointer"
  );
  addRaw(".tabs-segmented .tab:hover", "color:var(--aksara-text-body)");
  addRaw(
    '.tabs-segmented .tab.active,.tabs-segmented .tab[aria-selected="true"]',
    "background:var(--aksara-surface);color:var(--aksara-text-body);box-shadow:var(--aksara-shadow-sm);font-weight:700"
  );
  add(
    "toast",
    "display:none;max-width:24rem;padding:1rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);background:var(--aksara-surface);box-shadow:var(--aksara-shadow-md)"
  );
  add(
    "toast-stack",
    "position:fixed;inset-block-end:1rem;inset-inline-end:1rem;z-index:1090;display:grid;align-content:start;gap:.75rem;width:min(100% - 2rem,24rem)"
  );
  add("toast-top-start", "inset-block-start:1rem;inset-block-end:auto;inset-inline-start:1rem;inset-inline-end:auto");
  add("toast-top-end", "inset-block-start:1rem;inset-block-end:auto;inset-inline-start:auto;inset-inline-end:1rem");
  add(
    "toast-top-center",
    "inset-block-start:1rem;inset-block-end:auto;inset-inline-start:50%;inset-inline-end:auto;transform:translateX(-50%)"
  );
  add(
    "toast-bottom-start",
    "inset-block-start:auto;inset-block-end:1rem;inset-inline-start:1rem;inset-inline-end:auto"
  );
  add("toast-bottom-end", "inset-block-start:auto;inset-block-end:1rem;inset-inline-start:auto;inset-inline-end:1rem");
  add(
    "toast-bottom-center",
    "inset-block-start:auto;inset-block-end:1rem;inset-inline-start:50%;inset-inline-end:auto;transform:translateX(-50%)"
  );
  add(
    "toast-header",
    "display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-block-end:.5rem;font-weight:700"
  );
  add("toast-body", "color:var(--aksara-text-subtle)");
  add("toast-show", "display:block");
  add("collapse", "display:none");
  add("collapse-show", "display:block");
  add("progress", "display:flex;height:1rem;overflow:hidden;border-radius:9999px;background:var(--aksara-bg-subtle)");
  add(
    "progress-bar",
    "display:flex;align-items:center;justify-content:center;overflow:hidden;color:rgb(var(--aksara-light));background:rgb(var(--aksara-primary));font-size:.75rem;font-weight:700;white-space:nowrap;transition:width .3s ease"
  );
  for (const name of Object.keys(colors)) {
    addRaw(
      `.progress-bar.${escapeClass(`bg-${name}`)}`,
      `color:${readableText(name)};background-color:${colorValue(name)}`
    );
    // Opacity variants (`bg-warning/40`) get their background from the runtime engine;
    // only the readable foreground is needed statically.
    addRaw(`.progress-bar[class*="bg-${name}/"]`, `color:${readableText(name)}`);
  }
  add(
    "progress-striped",
    "background-image:linear-gradient(45deg,var(--aksara-progress-stripe) 25%,transparent 25%,transparent 50%,var(--aksara-progress-stripe) 50%,var(--aksara-progress-stripe) 75%,transparent 75%,transparent);background-size:1rem 1rem"
  );
  add("progress-animated", "animation:aksara-progress-stripes 1s linear infinite");
  add(
    "spinner",
    "display:inline-block;inline-size:2rem;block-size:2rem;border:.25rem solid color-mix(in srgb,currentColor 22%,transparent);border-inline-end-color:currentColor;border-radius:9999px;animation:aksara-spin .75s linear infinite"
  );
  add("spinner-xs", "inline-size:.75rem;block-size:.75rem;border-width:.125rem");
  add("spinner-sm", "inline-size:1rem;block-size:1rem;border-width:.15rem");
  add("spinner-md", "inline-size:2rem;block-size:2rem;border-width:.25rem");
  add("spinner-lg", "inline-size:2.75rem;block-size:2.75rem;border-width:.3rem");
  add("spinner-xl", "inline-size:3.5rem;block-size:3.5rem;border-width:.35rem");
  add("spinner-2xl", "inline-size:4.25rem;block-size:4.25rem;border-width:.4rem");
  add(
    "placeholder",
    "display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background:currentColor;opacity:.16"
  );
  add("placeholder-xs", "min-height:.6em");
  add("placeholder-sm", "min-height:.8em");
  add("placeholder-lg", "min-height:1.2em");
  add("placeholder-glow", "animation:aksara-pulse 1.5s ease-in-out infinite");
  add("placeholder-wave", "position:relative;overflow:hidden");
  addRaw(
    ".placeholder-wave::after",
    'position:absolute;inset:0;content:"";transform:translateX(-100%);background:linear-gradient(90deg,transparent,var(--aksara-placeholder-shine),transparent);animation:aksara-placeholder-wave 1.6s linear infinite'
  );
  add(
    "skeleton",
    "display:block;background:var(--aksara-bg-subtle);border-radius:var(--aksara-radius-sm);position:relative;overflow:hidden;animation:aksara-pulse 1.5s ease-in-out infinite"
  );
  add("skeleton-text", "height:.875rem;margin-bottom:.5rem;border-radius:var(--aksara-radius-2xs);width:100%");
  add("skeleton-circle", "border-radius:9999px;flex-shrink:0");
  add("skeleton-rect", "width:100%;height:100%");
  add("skeleton-wave", "position:relative;overflow:hidden");
  addRaw(
    ".skeleton-wave::after",
    'position:absolute;inset:0;content:"";transform:translateX(-100%);background:linear-gradient(90deg,transparent,var(--aksara-placeholder-shine),transparent);animation:aksara-placeholder-wave 1.6s linear infinite'
  );
  add("carousel", "position:relative;overflow:hidden");
  add("carousel-item", "display:block");
  add(
    "carousel-caption",
    "position:absolute;inset-inline:1rem;inset-block-end:1rem;padding:1rem;border-radius:var(--aksara-radius);background:var(--aksara-carousel-caption-bg);color:var(--aksara-on-media)"
  );
  add(
    "carousel-indicators",
    "position:absolute;inset-inline:0;inset-block-end:.75rem;display:flex;justify-content:center;gap:.375rem;margin:0;padding:0;list-style:none"
  );
  add(
    "carousel-indicator",
    "inline-size:.5rem;block-size:.5rem;border:0;border-radius:9999px;background:var(--aksara-carousel-indicator)"
  );
  addRaw('.carousel-indicator[aria-current="true"]', "background:var(--aksara-carousel-indicator-active)");
  add(
    "carousel-control",
    "position:absolute;inset-block-start:50%;transform:translateY(-50%);display:inline-flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:0;border-radius:9999px;background:var(--aksara-carousel-control-bg);color:var(--aksara-on-media);cursor:pointer"
  );
  add("carousel-prev", "inset-inline-start:.75rem");
  add("carousel-next", "inset-inline-end:.75rem");
  add(
    "offcanvas",
    "position:fixed;inset-block:0;inset-inline-start:0;z-index:1045;width:min(100%,20rem);transform:translateX(-100%);transition:transform .2s ease-in-out;background:var(--aksara-surface);border-inline-end:1px solid var(--aksara-border-subtle);box-shadow:var(--aksara-shadow-lg)"
  );
  add(
    "offcanvas-end",
    "inset-inline-start:auto;inset-inline-end:0;transform:translateX(100%);border-inline-start:1px solid var(--aksara-border-subtle);border-inline-end:0"
  );
  add(
    "offcanvas-top",
    "inset-inline:0;inset-block-start:0;inset-block-end:auto;width:100%;height:min(100%,18rem);transform:translateY(-100%);border-block-end:1px solid var(--aksara-border-subtle);border-inline-end:0"
  );
  add(
    "offcanvas-bottom",
    "inset-inline:0;inset-block-start:auto;inset-block-end:0;width:100%;height:min(100%,18rem);transform:translateY(100%);border-block-start:1px solid var(--aksara-border-subtle);border-inline-end:0"
  );
  add(
    "offcanvas-header",
    "display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem;border-block-end:1px solid var(--aksara-border-subtle)"
  );
  add("offcanvas-body", "padding:1rem");
  add("offcanvas-open", "transform:translateX(0)");
  addRaw(
    "[dir='rtl'] .offcanvas",
    "transform:translateX(100%);border-inline-start:1px solid var(--aksara-border-subtle);border-inline-end:0"
  );
  addRaw(
    "[dir='rtl'] .offcanvas-end",
    "transform:translateX(-100%);border-inline-start:0;border-inline-end:1px solid var(--aksara-border-subtle)"
  );
  addRaw("[dir='rtl'] .offcanvas-top", "transform:translateY(-100%)");
  addRaw("[dir='rtl'] .offcanvas-bottom", "transform:translateY(100%)");
  // Must follow the top/bottom rules or RTL top/bottom sheets never open.
  addRaw("[dir='rtl'] .offcanvas-open", "transform:translate(0,0)");
  add("table", "width:100%;border-collapse:collapse;vertical-align:top;background:var(--aksara-surface)");
  add("table-responsive", "display:block;width:100%;overflow-x:auto;border-radius:var(--aksara-radius)");
  add(
    "table-bordered",
    "border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden"
  );
  add("table-compact", "font-size:.875rem");
  add("table-striped", "background:var(--aksara-surface)");
  add("table-hover", "background:var(--aksara-surface)");
  addRaw(
    ".table th,.table td",
    "padding:.75rem;border-block-end:1px solid var(--aksara-border-subtle);text-align:start"
  );
  addRaw(".table-compact th,.table-compact td", "padding:.5rem");
  addRaw(".table-bordered th,.table-bordered td", "border:1px solid var(--aksara-border-subtle)");
  addRaw(
    ".table thead th",
    "color:var(--aksara-text-subtle);font-size:.875rem;font-weight:800;background:var(--aksara-bg-subtle)"
  );
  addRaw(".table-striped tbody tr:nth-child(odd)", "background:var(--aksara-bg-subtle)");
  addRaw(".table-hover tbody tr:hover", "background:rgb(var(--aksara-primary)/.08)");
  add(
    "breadcrumb",
    "display:flex;flex-wrap:wrap;align-items:center;gap:.5rem;list-style:none;padding:0;margin:0;color:var(--aksara-text-subtle)"
  );
  add("breadcrumb-item", "display:inline-flex;align-items:center;gap:.5rem");
  addRaw('.breadcrumb-item[aria-current="page"]', "color:var(--aksara-text-body);font-weight:700");
  addRaw(".breadcrumb-item+ .breadcrumb-item::before", "content:'/';color:var(--aksara-border-invert)");
  addRaw(
    ".breadcrumb-dot .breadcrumb-item+ .breadcrumb-item::before",
    "content:'\\2022';font-size:.875em;line-height:1"
  );
  addRaw(
    ".breadcrumb-arrow .breadcrumb-item+ .breadcrumb-item::before",
    "content:'\\203A';font-size:1.15em;line-height:1;transform:none"
  );
  addRaw("[dir='rtl'] .breadcrumb-arrow .breadcrumb-item+ .breadcrumb-item::before", "content:'\\2039'");
  addRaw(".breadcrumb a", "color:inherit;text-decoration:none");
  addRaw(".breadcrumb a:hover", "color:var(--aksara-text-body)");
  add("pagination", "display:flex;gap:.25rem;list-style:none;padding:0;margin:0");
  add("pagination-xs", "gap:.125rem");
  addRaw(".pagination-xs .page-link", "min-width:1.5rem;height:1.5rem;padding:0 .375rem;font-size:.75rem");
  add("pagination-sm", "gap:.2rem");
  addRaw(".pagination-sm .page-link", "min-width:1.875rem;height:1.875rem;padding:0 .5rem;font-size:.8125rem");
  add("pagination-md", "gap:.25rem");
  addRaw(".pagination-md .page-link", "min-width:2.25rem;height:2.25rem;padding:0 .625rem;font-size:.875rem");
  add("pagination-lg", "gap:.375rem");
  addRaw(".pagination-lg .page-link", "min-width:2.75rem;height:2.75rem;padding:0 .875rem;font-size:1.0625rem");
  add("pagination-xl", "gap:.5rem");
  addRaw(".pagination-xl .page-link", "min-width:3.25rem;height:3.25rem;padding:0 1rem;font-size:1.25rem");
  add("pagination-2xl", "gap:.625rem");
  addRaw(".pagination-2xl .page-link", "min-width:3.75rem;height:3.75rem;padding:0 1.25rem;font-size:1.5rem");
  add(
    "page-link",
    "display:inline-flex;align-items:center;justify-content:center;min-width:2.25rem;height:2.25rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-sm);padding:0 .625rem;background:var(--aksara-surface);color:var(--aksara-text-body);text-decoration:none"
  );
  addRaw(
    '.page-link:hover,.page-link[aria-current="page"]',
    "background:rgb(var(--aksara-primary)/.12);border-color:rgb(var(--aksara-primary)/.24);color:rgb(var(--aksara-primary))"
  );
  addRaw(".page-link.disabled,.page-link:disabled", "opacity:.5;pointer-events:none");
  for (const name of Object.keys(colors)) {
    add(
      `alert-${name}`,
      `color:${colorValue(name)};background-color:${colorValue(name, 10)};border-color:${colorValue(name, 20)}`
    );
    add(`badge-${name}`, `color:${solidForeground(name)};background-color:${colorValue(name)}`);
    add(`badge-soft-${name}`, `color:${colorValue(name)};background-color:${colorValue(name, 12)}`);
    add(
      `chip-${name}`,
      `color:${solidForeground(name)};background-color:${colorValue(name)};border-color:${colorValue(name)}`
    );
    add(
      `chip-soft-${name}`,
      `color:${colorValue(name)};background-color:${colorValue(name, 12)};border-color:${colorValue(name, 24)}`
    );
    add(
      `chip-outline-${name}`,
      `color:${colorValue(name)};background-color:transparent;border-color:${colorValue(name)}`
    );
    add(
      `chip-${name}`,
      `color:${solidForeground(name)};background-color:${colorValue(name)};border-color:${colorValue(name)}`
    );
    add(
      `chip-soft-${name}`,
      `color:${colorValue(name)};background-color:${colorValue(name, 12)};border-color:${colorValue(name, 24)}`
    );
    add(
      `chip-outline-${name}`,
      `color:${colorValue(name)};background-color:transparent;border-color:${colorValue(name)}`
    );
    addRaw(
      `.badge-dot.${escapeClass(`text-${name}`)}`,
      `color:${colorValue(name)};background-color:${colorValue(name)}`
    );
    add(`link-${name}`, `color:${colorValue(name)};text-decoration-color:${colorValue(name, 35)}`);
    add(`bg-text-${name}`, `color:${readableText(name)};background-color:${colorValue(name)}`);
    add(
      `toast-${name}`,
      `border-color:${colorValue(name, 24)};border-inline-start:4px solid ${colorValue(name)};background-image:linear-gradient(${colorValue(name, 6)},${colorValue(name, 6)})`
    );
    addRaw(`.toast-${name} .toast-header`, `color:${colorValue(name)}`);
  }
  add(
    "form-control",
    "display:block;width:100%;padding:.5rem .75rem;font:inherit;font-size:1rem;line-height:1.5;color:var(--aksara-text-body);background:var(--aksara-bg-body);border:1px solid var(--aksara-border);border-radius:var(--aksara-radius-sm);height:42px;min-height:42px;box-sizing:border-box;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out"
  );
  add(
    "form-select",
    "display:block;width:100%;padding:.5rem 2.25rem .5rem .75rem;font:inherit;font-size:1rem;line-height:1.5;color:var(--aksara-text-body);background-color:var(--aksara-bg-body);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid var(--aksara-border);border-radius:var(--aksara-radius-sm);height:42px;min-height:42px;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none"
  );
  addRaw("textarea.form-control", "height:auto;min-height:auto");
  addRaw(".form-control::placeholder,.form-select::placeholder", "color:var(--aksara-text-subtle);opacity:1");
  add("form-label", "display:inline-block;margin-block-end:.375rem;font-weight:600");
  add("form-text", "margin-block-start:.25rem;color:var(--aksara-text-subtle);font-size:.875rem");
  add("form-error", "margin-block-start:.25rem;color:rgb(var(--aksara-danger));font-size:.875rem");
  add("form-group", "margin-block-end:1rem");
  add("form-check", "display:flex;align-items:center;gap:.5rem");
  add("form-radio", "display:flex;align-items:center;gap:.5rem");
  add("form-switch", "display:flex;align-items:center;gap:.5rem");
  add("form-file", "display:block;width:100%");
  add("form-range", "width:100%");
  add("input-group", "position:relative;display:flex;align-items:stretch;width:100%");
  add(
    "input-group-text",
    "display:flex;align-items:center;padding:.5rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--aksara-text-subtle);text-align:center;white-space:nowrap;background-color:var(--aksara-bg-subtle);border:1px solid var(--aksara-border);border-radius:0"
  );
  addRaw(
    ".input-group>.form-control,.input-group>.form-select",
    "position:relative;flex:1 1 auto;width:1%;min-width:0;border-radius:0"
  );
  addRaw(
    ".input-group>.btn",
    "position:relative;z-index:2;display:inline-flex;align-items:center;justify-content:center;min-height:0;border-radius:0"
  );
  addRaw(
    ".input-group>:not(:first-child)",
    "margin-inline-start:-1px;border-start-start-radius:0!important;border-end-start-radius:0!important"
  );
  addRaw(".input-group>:not(:last-child)", "border-start-end-radius:0!important;border-end-end-radius:0!important");
  addRaw(
    ".input-group>:first-child",
    "border-start-start-radius:var(--aksara-radius-sm);border-end-start-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".input-group>:last-child",
    "border-start-end-radius:var(--aksara-radius-sm);border-end-end-radius:var(--aksara-radius-sm)"
  );
  addRaw(".input-group>.form-control:focus,.input-group>.form-select:focus", "z-index:3");
  addRaw(".input-group>.btn:focus", "z-index:4");
  add("input-group-xs", "");
  addRaw(
    ".input-group-xs>.form-control,.input-group-xs>.form-select,.input-group-xs>.input-group-text,.input-group-xs>.btn,.input-group>.form-control-xs,.input-group>.form-select-xs,.input-group>.btn-xs",
    "padding:.1875rem .375rem;font-size:.75rem;line-height:1.4;min-height:26px;height:26px;box-sizing:border-box"
  );
  addRaw(".input-group-xs>textarea.form-control,.input-group>textarea.form-control-xs", "height:auto;min-height:auto");
  addRaw(
    ".input-group-xs>.form-select,.input-group>.form-select-xs",
    "padding-right:1.75rem;background-position:right .375rem center;background-size:12px 8px"
  );
  addRaw(
    ".input-group-xs>:first-child,.input-group:has(>.form-control-xs:first-child)>:first-child,.input-group:has(>.btn-xs:first-child)>:first-child",
    "border-start-start-radius:var(--aksara-radius-sm);border-end-start-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".input-group-xs>:last-child,.input-group:has(>.form-control-xs:last-child)>:last-child,.input-group:has(>.btn-xs:last-child)>:last-child",
    "border-start-end-radius:var(--aksara-radius-sm);border-end-end-radius:var(--aksara-radius-sm)"
  );
  add("input-group-sm", "");
  addRaw(
    ".input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn,.input-group>.form-control-sm,.input-group>.form-select-sm,.input-group>.btn-sm",
    "padding:.25rem .5rem;font-size:.875rem;line-height:1.5;min-height:31px;height:31px;box-sizing:border-box"
  );
  addRaw(".input-group-sm>textarea.form-control,.input-group>textarea.form-control-sm", "height:auto;min-height:auto");
  addRaw(
    ".input-group-sm>.form-select,.input-group>.form-select-sm",
    "padding-right:2rem;background-position:right .5rem center;background-size:14px 10px"
  );
  addRaw(
    ".input-group-sm>:first-child,.input-group:has(>.form-control-sm:first-child)>:first-child,.input-group:has(>.btn-sm:first-child)>:first-child",
    "border-start-start-radius:var(--aksara-radius-sm);border-end-start-radius:var(--aksara-radius-sm)"
  );
  addRaw(
    ".input-group-sm>:last-child,.input-group:has(>.form-control-sm:last-child)>:last-child,.input-group:has(>.btn-sm:last-child)>:last-child",
    "border-start-end-radius:var(--aksara-radius-sm);border-end-end-radius:var(--aksara-radius-sm)"
  );
  add("input-group-md", "");
  add("input-group-lg", "");
  addRaw(
    ".input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn,.input-group>.form-control-lg,.input-group>.form-select-lg,.input-group>.btn-lg",
    "padding:.5rem 1rem;font-size:1.125rem;line-height:1.5;min-height:48px;height:48px;box-sizing:border-box"
  );
  addRaw(".input-group-lg>textarea.form-control,.input-group>textarea.form-control-lg", "height:auto;min-height:auto");
  addRaw(
    ".input-group-lg>.form-select,.input-group>.form-select-lg",
    "padding-right:2.5rem;background-position:right 1rem center;background-size:18px 14px"
  );
  addRaw(
    ".input-group-lg>:first-child",
    "border-start-start-radius:var(--aksara-radius-md,.5rem);border-end-start-radius:var(--aksara-radius-md,.5rem)"
  );
  addRaw(
    ".input-group-lg>:last-child",
    "border-start-end-radius:var(--aksara-radius-md,.5rem);border-end-end-radius:var(--aksara-radius-md,.5rem)"
  );
  add("input-group-xl", "");
  addRaw(
    ".input-group-xl>.form-control,.input-group-xl>.form-select,.input-group-xl>.input-group-text,.input-group-xl>.btn,.input-group>.form-control-xl,.input-group>.form-select-xl,.input-group>.btn-xl",
    "padding:.875rem 1.125rem;font-size:1.25rem;line-height:1.5;min-height:56px;height:56px;box-sizing:border-box"
  );
  addRaw(".input-group-xl>textarea.form-control,.input-group>textarea.form-control-xl", "height:auto;min-height:auto");
  addRaw(
    ".input-group-xl>.form-select,.input-group>.form-select-xl",
    "padding-right:2.75rem;background-position:right 1.125rem center;background-size:20px 16px"
  );
  addRaw(
    ".input-group-xl>:first-child",
    "border-start-start-radius:var(--aksara-radius-md,.5rem);border-end-start-radius:var(--aksara-radius-md,.5rem)"
  );
  addRaw(
    ".input-group-xl>:last-child",
    "border-start-end-radius:var(--aksara-radius-md,.5rem);border-end-end-radius:var(--aksara-radius-md,.5rem)"
  );
  add("input-group-2xl", "");
  addRaw(
    ".input-group-2xl>.form-control,.input-group-2xl>.form-select,.input-group-2xl>.input-group-text,.input-group-2xl>.btn,.input-group>.form-control-2xl,.input-group>.form-select-2xl,.input-group>.btn-2xl",
    "padding:1rem 1.25rem;font-size:1.5rem;line-height:1.5;min-height:64px;height:64px;box-sizing:border-box"
  );
  addRaw(
    ".input-group-2xl>textarea.form-control,.input-group>textarea.form-control-2xl",
    "height:auto;min-height:auto"
  );
  addRaw(
    ".input-group-2xl>.form-select,.input-group>.form-select-2xl",
    "padding-right:3rem;background-position:right 1.25rem center;background-size:22px 18px"
  );
  addRaw(
    ".input-group-2xl>:first-child",
    "border-start-start-radius:var(--aksara-radius-lg,.75rem);border-end-start-radius:var(--aksara-radius-lg,.75rem)"
  );
  addRaw(
    ".input-group-2xl>:last-child",
    "border-start-end-radius:var(--aksara-radius-lg,.75rem);border-end-end-radius:var(--aksara-radius-lg,.75rem)"
  );
  add("is-valid", "border-color:rgb(var(--aksara-success))");
  add("is-invalid", "border-color:rgb(var(--aksara-danger))");
  add(
    "form-control-xs",
    "padding:.1875rem .375rem;font-size:.75rem;line-height:1.4;min-height:26px;height:26px;box-sizing:border-box;border-radius:var(--aksara-radius-sm)"
  );
  add(
    "form-select-xs",
    "padding:.1875rem 1.75rem .1875rem .375rem;font-size:.75rem;line-height:1.4;min-height:26px;height:26px;box-sizing:border-box;border-radius:var(--aksara-radius-sm);background-position:right .375rem center;background-size:12px 8px"
  );
  add(
    "form-control-sm",
    "padding:.25rem .5rem;font-size:.875rem;line-height:1.5;min-height:31px;height:31px;box-sizing:border-box;border-radius:var(--aksara-radius-sm)"
  );
  add(
    "form-select-sm",
    "padding:.25rem 2rem .25rem .5rem;font-size:.875rem;line-height:1.5;min-height:31px;height:31px;box-sizing:border-box;border-radius:var(--aksara-radius-sm);background-position:right .5rem center;background-size:14px 10px"
  );
  add(
    "form-control-md",
    "padding:.5rem .75rem;font-size:1rem;line-height:1.5;min-height:42px;height:42px;box-sizing:border-box"
  );
  add(
    "form-select-md",
    "padding:.5rem 2.25rem .5rem .75rem;font-size:1rem;line-height:1.5;min-height:42px;height:42px;box-sizing:border-box;background-position:right .75rem center;background-size:16px 12px"
  );
  add(
    "form-control-lg",
    "padding:.75rem 1rem;font-size:1.125rem;line-height:1.5;min-height:48px;height:48px;box-sizing:border-box;border-radius:var(--aksara-radius-md,.5rem)"
  );
  add(
    "form-select-lg",
    "padding:.75rem 2.5rem .75rem 1rem;font-size:1.125rem;line-height:1.5;min-height:48px;height:48px;box-sizing:border-box;border-radius:var(--aksara-radius-md,.5rem);background-position:right 1rem center;background-size:18px 14px"
  );
  add(
    "form-control-xl",
    "padding:.875rem 1.125rem;font-size:1.25rem;line-height:1.5;min-height:56px;height:56px;box-sizing:border-box;border-radius:var(--aksara-radius-md,.5rem)"
  );
  add(
    "form-select-xl",
    "padding:.875rem 2.75rem .875rem 1.125rem;font-size:1.25rem;line-height:1.5;min-height:56px;height:56px;box-sizing:border-box;border-radius:var(--aksara-radius-md,.5rem);background-position:right 1.125rem center;background-size:20px 16px"
  );
  add(
    "form-control-2xl",
    "padding:1rem 1.25rem;font-size:1.5rem;line-height:1.5;min-height:64px;height:64px;box-sizing:border-box;border-radius:var(--aksara-radius-lg,.75rem)"
  );
  add(
    "form-select-2xl",
    "padding:1rem 3rem 1rem 1.25rem;font-size:1.5rem;line-height:1.5;min-height:64px;height:64px;box-sizing:border-box;border-radius:var(--aksara-radius-lg,.75rem);background-position:right 1.25rem center;background-size:22px 18px"
  );
  addRaw(
    ".form-control:focus,.form-select:focus",
    "color:var(--aksara-text-body);border-color:rgb(var(--aksara-primary));box-shadow:none;outline:0"
  );
  addRaw(
    ".form-check,.form-switch",
    "display:inline-flex;align-items:center;gap:.5rem;min-height:38px;line-height:1.5;margin-bottom:0"
  );
  addRaw(
    ".form-check-sm,.form-check.form-check-sm,.form-switch-sm,.form-switch.form-switch-sm",
    "min-height:31px;height:31px;line-height:1.5"
  );
  addRaw(
    ".form-check-lg,.form-check.form-check-lg,.form-switch-lg,.form-switch.form-switch-lg",
    "min-height:48px;height:48px;line-height:1.5"
  );
  addRaw(".form-check-label", "cursor:pointer;color:var(--aksara-text-body);font-size:.875rem;user-select:none");
  addRaw(
    ".form-check-input:not(.form-switch *),.form-check input:not(.form-switch *),.form-radio input",
    "appearance:none;-webkit-appearance:none;position:relative;display:inline-block;width:1.125rem;height:1.125rem;background-color:var(--aksara-surface);border:1.5px solid var(--aksara-border);border-radius:var(--aksara-radius-xs,.25rem);cursor:pointer;outline:0;padding:0;margin:0;vertical-align:middle;flex-shrink:0;transition:background-color .15s ease,border-color .15s ease,box-shadow .15s ease"
  );
  addRaw(
    ".form-check-input:not(.form-switch *):focus,.form-check input:not(.form-switch *):focus,.form-radio input:focus",
    "border-color:rgb(var(--aksara-primary));box-shadow:0 0 0 3px rgb(var(--aksara-primary)/.25)"
  );
  addRaw(
    ".form-check-input[type='checkbox']:not(.form-switch *):checked,.form-check input[type='checkbox']:not(.form-switch *):checked,.form-check-input:not([type]):not(.form-switch *):checked",
    "background-color:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' d='M3 8.5l3.5 3.5 6.5-6.5'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;background-size:100% 100%"
  );
  addRaw(
    ".form-check-input[type='checkbox']:not(.form-switch *):indeterminate,.form-check input[type='checkbox']:not(.form-switch *):indeterminate",
    "background-color:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' d='M3.5 8h9'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;background-size:100% 100%"
  );
  addRaw(".form-check-input[type='radio'],.form-radio input[type='radio'],.form-radio input", "border-radius:50%");
  addRaw(
    ".form-check-input[type='radio']:checked,.form-radio input[type='radio']:checked,.form-radio input:checked",
    "background-color:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3ccircle cx='8' cy='8' r='3.5' fill='%23ffffff'/%3e%3c/svg%3e\");background-position:center;background-repeat:no-repeat;background-size:100% 100%"
  );
  addRaw(
    ".form-check-input:disabled,.form-check input:disabled,.form-radio input:disabled",
    "opacity:.5;cursor:not-allowed"
  );
  addRaw(
    ".form-switch input,.form-switch .form-check-input",
    "appearance:none;-webkit-appearance:none;position:relative;display:inline-block;width:2.25rem;height:1.25rem;border-radius:9999px;background-color:var(--aksara-border);cursor:pointer;outline:0;border:0;padding:0;margin:0;vertical-align:middle;flex-shrink:0;transition:background-color .2s ease,border-color .2s ease"
  );
  addRaw(
    ".form-switch input::before,.form-switch .form-check-input::before",
    'content:"";position:absolute;top:2px;left:2px;width:calc(1.25rem - 4px);height:calc(1.25rem - 4px);border-radius:50%;background-color:#ffffff;box-shadow:0 1px 3px rgba(0,0,0,.2);transition:transform .2s ease'
  );
  addRaw(
    ".form-switch input:checked,.form-switch .form-check-input:checked",
    "background-color:rgb(var(--aksara-primary))"
  );
  addRaw(
    ".form-switch input:checked::before,.form-switch .form-check-input:checked::before",
    "transform:translateX(1rem)"
  );
  addRaw(".form-switch input:disabled,.form-switch .form-check-input:disabled", "opacity:.5;cursor:not-allowed");
  addRaw(".form-range", "accent-color:rgb(var(--aksara-primary))");
  add("ratio", "--aksara-aspect-ratio:56.25%;position:relative;width:100%");
  addRaw(".ratio::before", 'display:block;padding-block-start:var(--aksara-aspect-ratio,56.25%);content:""');
  addRaw(".ratio>*", "position:absolute;inset:0;width:100%;height:100%");
  add("ratio-1x1", "--aksara-aspect-ratio:100%");
  add("ratio-4x3", "--aksara-aspect-ratio:75%");
  add("ratio-16x9", "--aksara-aspect-ratio:56.25%");
  add("ratio-21x9", "--aksara-aspect-ratio:42.8571428571%");
  add(
    "hstack",
    "--aksara-stack-gap:1rem;display:flex;flex-direction:row;align-items:center;gap:var(--aksara-stack-gap,1rem)"
  );
  add(
    "vstack",
    "--aksara-stack-gap:1rem;display:flex;flex-direction:column;align-self:stretch;gap:var(--aksara-stack-gap,1rem)"
  );
  add(
    "vr",
    "display:inline-block;align-self:stretch;width:1px;min-height:1em;background:var(--aksara-border);opacity:.85"
  );
  add("stretched-link", "position:static");
  addRaw(".stretched-link::after", 'position:absolute;inset:0;z-index:1;content:""');
  add(
    "visually-hidden",
    "position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important"
  );
  add("clearfix", "display:flow-root");
  add("media-grid", "display:grid;width:100%;gap:.5rem");
  add(
    "media-grid-item",
    "position:relative;overflow:hidden;border-radius:var(--aksara-radius);background:var(--aksara-bg-subtle)"
  );
  addRaw(".media-grid-item img", "width:100%;height:100%;object-fit:cover;display:block");
  add("media-grid-1", "grid-template-columns:1fr;max-height:480px");
  add("media-grid-2", "grid-template-columns:repeat(2,1fr);height:280px");
  add("media-grid-3", "grid-template-columns:2fr 1fr;grid-template-rows:repeat(2,1fr);height:320px");
  addRaw(".media-grid-3 .media-grid-item-1", "grid-row:span 2");
  add("media-grid-4", "grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);height:320px");
  add(
    "media-grid-overlay",
    "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.55)"
  );
  add(
    "avatar",
    "display:inline-flex;align-items:center;justify-content:center;position:relative;width:2.5rem;height:2.5rem;font-size:1rem;font-weight:700;line-height:1;overflow:visible;user-select:none;flex-shrink:0;border-color:var(--aksara-bg-body)"
  );
  add("avatar-xs", "width:1.5rem;height:1.5rem;font-size:.6875rem");
  add("avatar-sm", "width:2rem;height:2rem;font-size:.8125rem");
  add("avatar-md", "width:2.5rem;height:2.5rem;font-size:1rem");
  add("avatar-lg", "width:3.25rem;height:3.25rem;font-size:1.25rem");
  add("avatar-xl", "width:4rem;height:4rem;font-size:1.5rem");
  add("avatar-2xl", "width:6rem;height:6rem;font-size:2.25rem");
  add("avatar-3xl", "width:7.5rem;height:7.5rem;font-size:3rem");
  addRaw(".avatar img,.avatar-img", "width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit");
  addRaw(
    ".avatar .avatar-initials,.avatar .avatar-fallback",
    "width:100%;height:100%;display:inline-flex;align-items:center;justify-content:center;border-radius:inherit"
  );
  addRaw(
    ".avatar-status",
    "position:absolute;bottom:0;right:0;border-radius:9999px;border:2px solid var(--aksara-bg-body);z-index:2;box-sizing:content-box"
  );
  addRaw(
    ".avatar.rounded-full .avatar-status,.avatar.rounded-circle .avatar-status",
    "bottom:14.6%;right:14.6%;transform:translate(50%,50%)"
  );
  addRaw(".avatar-xs .avatar-status", "width:.375rem;height:.375rem;border-width:1px");
  addRaw(".avatar-sm .avatar-status", "width:.4375rem;height:.4375rem;border-width:1.5px");
  addRaw(
    '.avatar-md .avatar-status,.avatar:not([class*="avatar-"]) .avatar-status',
    "width:.5625rem;height:.5625rem;border-width:1.5px"
  );
  addRaw(".avatar-lg .avatar-status", "width:.6875rem;height:.6875rem;border-width:2px");
  addRaw(".avatar-xl .avatar-status", "width:.8125rem;height:.8125rem;border-width:2px");
  addRaw(".avatar-2xl .avatar-status", "width:1.125rem;height:1.125rem;border-width:3px");
  addRaw(".avatar-3xl .avatar-status", "width:1.375rem;height:1.375rem;border-width:3.5px");
  addRaw(".avatar-group .avatar", "border:2px solid var(--aksara-bg-body);background:var(--aksara-bg-subtle)");
  addRaw(".avatar-group .avatar:not(:first-child)", "margin-inline-start:-.625rem");
  addRaw(".avatar-stack", "display:inline-flex;align-items:center");
  addRaw(
    ".avatar-stack > :not(:first-child),.avatar-stack .avatar-stack-item:not(:first-child)",
    "margin-inline-start:-.75rem"
  );
  addRaw(
    ".avatar-stack .avatar-stack-item,.avatar-stack > *",
    "position:relative;border:2px solid var(--aksara-bg-body);border-radius:9999px;transition:transform .15s ease,z-index .15s ease"
  );
  addRaw(".avatar-stack .avatar-stack-item:hover,.avatar-stack > *:hover", "z-index:10;transform:scale(1.1)");
  addRaw(
    ".avatar-stack-xs > :not(:first-child),.avatar-stack-xs .avatar-stack-item:not(:first-child)",
    "margin-inline-start:-.375rem"
  );
  addRaw(
    ".avatar-stack-sm > :not(:first-child),.avatar-stack-sm .avatar-stack-item:not(:first-child)",
    "margin-inline-start:-.5rem"
  );
  addRaw(
    ".avatar-stack-lg > :not(:first-child),.avatar-stack-lg .avatar-stack-item:not(:first-child)",
    "margin-inline-start:-1rem"
  );
  addRaw(
    ".avatar-stack-xl > :not(:first-child),.avatar-stack-xl .avatar-stack-item:not(:first-child)",
    "margin-inline-start:-1.25rem"
  );

  // ── Sidebar Nav ────────────────────────────────────────────────────────────
  add("sidebar-nav", "display:flex;flex-direction:column;gap:.125rem;margin:0;list-style:none");
  add(
    "sidebar-nav-item",
    "display:flex;align-items:center;gap:.625rem;width:100%;border:0;border-radius:var(--aksara-radius-sm);padding:.5625rem .75rem;background:transparent;color:var(--aksara-text-subtle);font:inherit;font-weight:600;font-size:.9375rem;text-align:start;text-decoration:none;cursor:pointer;transition:background-color .15s ease,color .15s ease;line-height:1.35"
  );
  add(
    "sidebar-nav-header",
    "display:block;padding:.625rem .75rem .25rem;font-size:.6875rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--aksara-text-subtle);opacity:.7;user-select:none"
  );
  add(
    "sidebar-nav-icon",
    "display:inline-flex;align-items:center;justify-content:center;width:1.375rem;height:1.375rem;flex-shrink:0;font-size:1.0625rem"
  );
  add("sidebar-nav-label", "flex:1 1 auto;min-width:0");
  add(
    "sidebar-nav-badge",
    "display:inline-flex;align-items:center;justify-content:center;min-width:1.25rem;height:1.25rem;border-radius:9999px;padding:0 .3125rem;font-size:.6875rem;font-weight:800;background:rgb(var(--aksara-primary)/.12);color:rgb(var(--aksara-primary));flex-shrink:0"
  );
  add(
    "sidebar-nav-brand",
    "display:flex;align-items:center;gap:.625rem;padding:.875rem .75rem;margin-block-end:.25rem"
  );
  add("sidebar-nav-brand-title", "font-weight:800;font-size:.9375rem;line-height:1.25;color:var(--aksara-text-body)");
  add(
    "sidebar-nav-brand-subtitle",
    "display:block;font-size:.75rem;font-weight:400;color:var(--aksara-text-subtle);margin-block-start:.0625rem;line-height:1.3"
  );
  addRaw(".sidebar-nav-item:hover", "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)");
  addRaw(
    '.sidebar-nav-item.active,.sidebar-nav-item[aria-selected="true"]',
    "background:var(--aksara-bg-subtle);color:var(--aksara-text-body);font-weight:700"
  );
  addRaw(".sidebar-nav-item:disabled,.sidebar-nav-item.disabled", "opacity:.5;pointer-events:none");

  // ── Sidebar Layout ─────────────────────────────────────────────────────────
  add("sidebar-layout", "display:flex;min-height:0;gap:0");
  add("sidebar-pane", "flex-shrink:0;width:14rem;border-inline-end:1px solid var(--aksara-border-subtle)");
  add("sidebar-content", "flex:1 1 auto;min-width:0;overflow:auto");

  // ── Empty State ────────────────────────────────────────────────────────────
  add("empty-state", "padding:3rem 1.5rem;text-align:center;margin:1rem auto");
  add(
    "empty-state-icon-wrap",
    "display:inline-flex;align-items:center;justify-content:center;border-radius:9999px;background:var(--aksara-bg-subtle);margin-inline:auto;margin-block-end:1rem"
  );
  add("empty-state-title", "font-weight:700;font-size:1.125rem;color:var(--aksara-text-body);margin-block-end:.5rem");
  add("empty-state-desc", "color:var(--aksara-text-subtle);font-size:.875rem;line-height:1.5;margin-block-end:1.25rem");
  add("empty-state-actions", "display:flex;align-items:center;justify-content:center;gap:.5rem;flex-wrap:wrap");

  // ── User Item / Row ────────────────────────────────────────────────────────
  add(
    "user-item",
    "display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;border-block-end:1px solid var(--aksara-border-subtle);transition:background .15s ease"
  );
  add("user-item-info", "flex:1 1 auto;min-width:0");
  add("user-item-name", "font-weight:700;font-size:.875rem;color:var(--aksara-text-body);line-height:1.3");
  add("user-item-subtitle", "color:var(--aksara-text-subtle);font-size:.8125rem;margin-block-start:.125rem");

  // ── Dropdown Select ────────────────────────────────────────────────────────
  add("aksara-select-dropdown", "position:relative");
  addRaw(".aksara-select-dropdown .dropdown-select-menu", "min-width:100%;max-height:18rem;overflow-y:auto");
  addRaw(".aksara-select-dropdown .select-current-label", "text-overflow:ellipsis;overflow:hidden;white-space:nowrap");

  // ── Toast Floating Container ───────────────────────────────────────────────
  add(
    "aksara-toast-container",
    "position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);z-index:1090;pointer-events:none;display:flex;flex-direction:column;gap:.5rem;align-items:center"
  );
  add(
    "aksara-toast-pill",
    "display:flex;align-items:center;gap:.625rem;padding:.75rem 1rem;border-radius:var(--aksara-radius-md,0.75rem);font-size:.875rem;font-weight:500;line-height:1.4;pointer-events:auto;background:rgba(15,23,42,.92);color:#fff;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.15);box-shadow:0 10px 25px -5px rgba(0,0,0,.35);transition:opacity .25s ease,transform .25s ease;word-break:break-word"
  );
  addRaw(".aksara-toast-pill span", "flex:1 1 auto;min-width:0");
  addRaw(".aksara-toast-pill i,.aksara-toast-pill .mdi", "flex-shrink:0");
  addRaw(
    "@media(max-width:47.99875rem)",
    ".aksara-toast-container{left:1rem;right:1rem;bottom:max(1rem,env(safe-area-inset-bottom,0px));transform:none;width:auto;max-width:calc(100% - 2rem);margin:0 auto}.aksara-toast-pill{width:100%;max-width:100%;box-sizing:border-box}"
  );
  addRaw("@media(min-width:48rem)", ".aksara-toast-container{max-width:32rem}.aksara-toast-pill{max-width:32rem}");
}

/** Max-width query just below a min-width breakpoint (`48rem` -> `47.99875rem`). */
export function belowBreakpoint(minWidth: string): string {
  return `${Number.parseFloat(minWidth) - 0.00125}rem`;
}

/**
 * Modifier classes that components emit (props such as `small`, `dark`, `horizontal`,
 * `expand`, `fade`) and that previously had no CSS. Dark variants re-scope the theme
 * tokens instead of re-declaring every inner rule.
 */
export function addComponentVariants(): void {
  const componentBreakpoints: Array<[string, string]> = Object.entries(breakpoints);
  const darkScope =
    "--aksara-surface:rgb(var(--aksara-dark));--aksara-bg-subtle:rgb(var(--aksara-light)/.06);--aksara-border-subtle:rgb(var(--aksara-light)/.12);--aksara-text-body:rgb(var(--aksara-light));--aksara-text-subtle:rgb(var(--aksara-light)/.72);color:var(--aksara-text-body)";

  // FloatingLabel
  addRaw(".form-floating", "position:relative");
  addRaw(
    ".form-floating>.form-control,.form-floating>.form-select",
    "min-height:3.5rem;padding-block:1.625rem .5rem;line-height:1.25"
  );
  addRaw(".form-floating>textarea.form-control", "min-height:6rem");
  addRaw(
    ".form-floating>label",
    "position:absolute;inset-block-start:0;inset-inline-start:0;z-index:2;max-width:100%;padding:1rem .75rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--aksara-text-subtle);pointer-events:none;transform-origin:0 0;transition:transform .15s ease,opacity .15s ease"
  );
  addRaw("[dir='rtl'] .form-floating>label", "transform-origin:100% 0");
  addRaw(".form-floating>.form-control::placeholder", "color:transparent");
  addRaw(
    ".form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label",
    "transform:scale(.85) translateY(-.625rem);opacity:.8"
  );

  // Table
  addRaw(".table-sm th,.table-sm td", "padding:.25rem .5rem");
  addRaw(".table-borderless,.table-borderless th,.table-borderless td", "border:0");
  addRaw(".table-dark", darkScope);
  addRaw(".table-active,.table-active>th,.table-active>td", "background:rgb(var(--aksara-primary)/.08)");
  for (const name of Object.keys(colors)) {
    addRaw(`.table-${name},.table-${name}>th,.table-${name}>td`, `background:rgb(var(--aksara-${name})/.1)`);
  }
  for (const [bp, minWidth] of componentBreakpoints) {
    rules.push(
      `@media (max-width:${belowBreakpoint(minWidth)}){.table-responsive-${bp}{display:block;width:100%;overflow-x:auto}}`
    );
  }

  // List group
  const horizontalList = (name: string): string =>
    `.${name}{display:flex;flex-direction:row}.${name}>.list-group-item{border-block-end:0;border-inline-end:1px solid var(--aksara-border-subtle)}.${name}>.list-group-item:last-child{border-inline-end:0}`;
  rules.push(horizontalList("list-group-horizontal"));
  for (const [bp, minWidth] of componentBreakpoints) {
    rules.push(`@media (min-width:${minWidth}){${horizontalList(`list-group-horizontal-${bp}`)}}`);
  }
  addRaw(".list-group-numbered", "counter-reset:aksara-list");
  addRaw(
    ".list-group-numbered>.list-group-item::before",
    'content:counter(aksara-list) ".";counter-increment:aksara-list;margin-inline-end:.5rem;font-weight:700'
  );
  for (const name of Object.keys(colors)) {
    addRaw(`.list-group-item-${name}`, `background:rgb(var(--aksara-${name})/.1);color:rgb(var(--aksara-${name}))`);
  }

  // Navbar: `navbar-expand(-bp)` shows the collapse and hides the toggler from bp up.
  addRaw(".navbar-expand .navbar-toggler", "display:none");
  addRaw(".navbar-expand .navbar-collapse", "display:flex");
  for (const [bp, minWidth] of componentBreakpoints) {
    addRaw(`.navbar-expand-${bp} .navbar-collapse:not(.collapse-show)`, "display:none");
    rules.push(
      `@media (min-width:${minWidth}){.navbar-expand-${bp} .navbar-toggler{display:none}.navbar-expand-${bp} .navbar-collapse,.navbar-expand-${bp} .navbar-collapse:not(.collapse-show){display:flex}}`
    );
  }
  addRaw(".navbar-dark", darkScope);

  // Dropdown
  addRaw(".dropdown-menu-end", "inset-inline-end:0;inset-inline-start:auto");
  addRaw(".dropdown-menu-dark", darkScope);

  // Forms, accordion, carousel
  addRaw(".form-check-inline", "display:inline-flex;margin-inline-end:1rem");
  addRaw(".accordion-flush,.accordion-flush .accordion-item", "border-inline:0;border-radius:0;background:transparent");
  addRaw(".carousel-fade .carousel-item:not([hidden])", "animation:aksara-fade .45s ease");
}
