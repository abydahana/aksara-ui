/** Component styles (buttons, forms, overlays, ...) and component modifier classes. */
import { colors } from "../palette";
import {
  breakpoints,
  rules,
  add,
  addRaw,
  escapeClass,
  colorValue,
  readableText,
  solidForeground,
  softText,
  shiftedFill
} from "./core";

export function addComponents(): void {
  add(
    "btn",
    "position:relative;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;min-height:2.375rem;border:1px solid transparent;border-radius:var(--aksara-control-radius,.625rem);padding:.5rem .875rem;font:inherit;font-size:.875rem;font-weight:600;line-height:1.25;letter-spacing:-.005em;white-space:nowrap;text-decoration:none;user-select:none;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--aksara-duration,.18s) var(--aksara-ease,ease),background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),border-color var(--aksara-duration,.18s) var(--aksara-ease,ease),box-shadow var(--aksara-duration,.18s) var(--aksara-ease,ease),transform .12s var(--aksara-ease,ease)"
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
    ".btn.rounded-circle,button.rounded-circle,a.btn.rounded-circle",
    "aspect-ratio:1/1;flex-shrink:0;min-height:unset;display:inline-flex;align-items:center;justify-content:center"
  );
  addRaw(
    '.btn.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:2.375rem;block-size:2.375rem;padding:0"
  );
  addRaw(
    '.btn.btn-xs.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:1.5rem;block-size:1.5rem;padding:0"
  );
  addRaw(
    '.btn.btn-sm.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:1.75rem;block-size:1.75rem;padding:0"
  );
  addRaw(
    '.btn.btn-md.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:2.375rem;block-size:2.375rem;padding:0"
  );
  addRaw(
    '.btn.btn-lg.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:2.875rem;block-size:2.875rem;padding:0"
  );
  addRaw(
    '.btn.btn-xl.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:3.375rem;block-size:3.375rem;padding:0"
  );
  addRaw(
    '.btn.btn-2xl.rounded-circle:not(.btn-icon):not([class*="w-"]):not([style*="width"])',
    "inline-size:3.875rem;block-size:3.875rem;padding:0"
  );
  add("btn-ghost", "color:var(--aksara-text-body);background:transparent;border-color:transparent");
  add("btn-subtle", "color:var(--aksara-text-body);background:var(--aksara-bg-subtle);border-color:transparent");
  add("btn-plain", "color:var(--aksara-text-body);background:var(--aksara-surface);border-color:var(--aksara-border)");
  add("btn-group", "display:inline-flex;vertical-align:middle");
  add(
    "btn-group-vertical",
    "display:inline-flex;flex-direction:column;align-items:stretch;justify-content:center;vertical-align:middle"
  );
  add("btn-group-xs", "font-size:.75rem");
  add("btn-group-sm", "font-size:.8125rem");
  add("btn-group-md", "font-size:.875rem");
  add("btn-group-lg", "font-size:1.0625rem");
  add("btn-group-xl", "font-size:1.25rem");
  add("btn-group-2xl", "font-size:1.5rem");
  add("btn-toolbar", "display:flex;flex-wrap:wrap;justify-content:flex-start;gap:.5rem");
  addRaw(".btn-group>.btn,.btn-group-vertical>.btn", "position:relative;flex:1 1 auto;border-radius:0");
  addRaw(".btn-group>.btn+.btn,.btn-group>.btn-check+.btn:not(:nth-child(2))", "margin-inline-start:-1px");
  addRaw(
    ".btn-group>.btn-check:first-child+.btn",
    "border-start-start-radius:var(--aksara-radius-sm);border-end-start-radius:var(--aksara-radius-sm)"
  );
  addRaw(".btn-group>.btn-check:checked+.btn", "z-index:1");
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
  addRaw(".btn:focus-visible", "outline:0;box-shadow:var(--aksara-ring)");
  addRaw(".btn:active:not(:disabled):not(.disabled)", "transform:scale(.98)");
  addRaw(".btn:disabled,.btn.disabled", "opacity:.5;box-shadow:none;cursor:not-allowed");
  addRaw(".btn-ghost:hover,.btn-subtle:hover", "background:var(--aksara-surface-muted)");
  addRaw(".btn-plain:hover", "background:var(--aksara-surface-hover);border-color:var(--aksara-border-strong)");
  for (const name of Object.keys(colors)) {
    // Solid: a faint inner highlight and a tinted drop shadow give the fill some depth.
    add(
      `btn-${name}`,
      `color:${solidForeground(name)};background-color:${colorValue(name)};border-color:${colorValue(name)}`
    );
    add(
      `btn-outline-${name}`,
      `color:${softText(name)};background-color:transparent;border-color:${colorValue(name, 45)}`
    );
    add(
      `btn-soft-${name}`,
      `color:${softText(name)};background-color:${colorValue(name, 12)};border-color:transparent`
    );
    add(`btn-ghost-${name}`, `color:${softText(name)};background-color:transparent;border-color:transparent`);
    addRaw(`.btn-${name}:hover`, `background-color:${shiftedFill(name)};border-color:${shiftedFill(name)}`);
    addRaw(`.btn-${name}:active`, `background-color:${shiftedFill(name, 76)};border-color:${shiftedFill(name, 76)}`);
    addRaw(`.btn-outline-${name}:hover`, `background-color:${colorValue(name, 8)};border-color:${colorValue(name)}`);
    addRaw(`.btn-soft-${name}:hover`, `background-color:${colorValue(name, 18)}`);
    addRaw(`.btn-ghost-${name}:hover`, `background-color:${colorValue(name, 10)}`);
    addRaw(
      `.btn-${name}:focus-visible,.btn-outline-${name}:focus-visible,.btn-soft-${name}:focus-visible,.btn-ghost-${name}:focus-visible`,
      `box-shadow:0 0 0 var(--aksara-ring-width,3px) ${colorValue(name, 28)}`
    );
  }
  // Adjacent solid buttons in a group (split buttons) get a visible divider.
  for (const name of Object.keys(colors)) {
    addRaw(`.btn-group>.btn-${name}+.btn-${name}`, `border-inline-start-color:${shiftedFill(name, 70)}`);
  }
  // Near-white fills need an edge to read as a button on light surfaces.
  addRaw(".btn-light", "border-color:var(--aksara-border)");
  addRaw(".btn-light:hover,.btn-light:active", "border-color:var(--aksara-border-strong)");
  add(
    "card",
    "position:relative;display:flex;flex-direction:column;min-width:0;color:var(--aksara-text-body);background:var(--aksara-surface);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden"
  );
  add("card-elevated", "box-shadow:var(--aksara-shadow-md)");
  add("card-flat", "box-shadow:none");
  add("card-muted", "background:var(--aksara-bg-body-secondary);box-shadow:none");
  add(
    "card-interactive",
    "cursor:pointer;transition:box-shadow var(--aksara-duration,.18s) var(--aksara-ease,ease),border-color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(".card-interactive:hover", "border-color:var(--aksara-border-strong);background:var(--aksara-surface-hover)");
  add("card-img", "display:block;width:100%;object-fit:cover");
  add("card-title", "margin:0 0 .375rem;font-size:1.0625rem;font-weight:650;line-height:1.3;letter-spacing:-.01em");
  add("card-subtitle", "margin:0 0 .5rem;font-size:.8125rem;font-weight:500;color:var(--aksara-text-subtle)");
  add("card-text", "margin:0;color:var(--aksara-text-subtle);line-height:1.6");
  // Headers and footers stay borderless so they read as part of the body; opt into a
  // divider with `card-divided`.
  add("card-header", "padding:1rem 1.25rem 0;font-weight:650");
  add("card-body", "flex:1 1 auto;padding:1.25rem");
  add("card-footer", "padding:0 1.25rem 1.25rem");
  add("card-divided", "");
  addRaw(".card-divided>.card-header", "padding-block-end:1rem;border-block-end:1px solid var(--aksara-border-subtle)");
  addRaw(
    ".card-divided>.card-footer",
    "padding-block-start:.875rem;padding-block-end:.875rem;border-block-start:1px solid var(--aksara-border-subtle);background:var(--aksara-bg-body-secondary)"
  );
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
    "position:relative;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;background:var(--aksara-surface);color:var(--aksara-text-body);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-2xl);padding:1.5rem;transition:box-shadow .2s ease,border-color .2s ease"
  );
  addRaw(".bento-card:hover", "border-color:var(--aksara-border-strong)");
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
    "background:radial-gradient(120% 120% at 100% 0%,rgb(var(--aksara-primary)/.1),transparent 55%),var(--aksara-surface);border-color:rgb(var(--aksara-primary)/.28)"
  );
  add("bento-header", "display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1rem");
  add("bento-title", "margin:0;font-size:1.25rem;font-weight:650;line-height:1.3;letter-spacing:-.015em");
  add("bento-subtitle", "margin:.25rem 0 0;font-size:.875rem;color:var(--aksara-text-subtle);line-height:1.4");
  add("bento-body", "flex:1 1 auto");
  add("bento-footer", "display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:1.25rem");
  add(
    "bento-visual",
    "display:flex;align-items:center;justify-content:center;border-radius:var(--aksara-radius);overflow:hidden;background:var(--aksara-bg-subtle);margin-top:1rem;min-height:120px"
  );
  add(
    "alert",
    "position:relative;padding:.875rem 1rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-md);background:var(--aksara-bg-subtle);color:var(--aksara-text-body);font-size:.9375rem;line-height:1.55"
  );
  add("alert-dismissible", "padding-inline-end:3rem");
  // The close button's center sits on the first text line: top padding (.875rem) plus half
  // the line box (1.55em), minus half the button (1.75rem).
  addRaw(
    ".alert>.close,.alert>.btn-close,.alert>.modal-close",
    "position:absolute;inset-block-start:calc(.875rem + (1.55em - 1.75rem) / 2);inset-inline-end:.625rem;inline-size:1.75rem;block-size:1.75rem"
  );
  add("alert-title", "margin:0 0 .125rem;font-size:.9375rem;font-weight:650;color:inherit");
  add(
    "alert-icon",
    "flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;font-size:1.25rem;line-height:1.2"
  );
  add("alert-content", "flex:1 1 auto;min-width:0");
  addRaw(".alert:has(>.alert-icon)", "display:flex;align-items:flex-start;gap:.75rem");
  add("alert-link", "font-weight:700;color:inherit;text-decoration:underline;text-underline-offset:.16em");
  add(
    "badge",
    "display:inline-flex;align-items:center;gap:.3em;border:1px solid transparent;border-radius:9999px;padding:.3em .65em;font-size:.75em;font-weight:600;line-height:1;letter-spacing:.01em;white-space:nowrap;vertical-align:middle;background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
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
    "display:inline-flex;align-items:center;justify-content:center;gap:.375rem;min-width:0;max-width:100%;border-radius:9999px;font-weight:600;text-decoration:none;vertical-align:middle;cursor:pointer;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),border-color var(--aksara-duration,.18s) var(--aksara-ease,ease),color var(--aksara-duration,.18s) var(--aksara-ease,ease);border:1px solid var(--aksara-border);background:var(--aksara-surface);color:var(--aksara-text-body)"
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
  addRaw(
    "button.chip-action",
    "padding:0;margin:0;border:0;border-radius:9999px;background:transparent;color:inherit;font:inherit;line-height:1"
  );
  addRaw("button.chip-action:focus-visible", "outline:0;opacity:1;box-shadow:var(--aksara-ring)");
  add("chip-remove", "");
  add("chip-ghost", "color:var(--aksara-text-body);background:transparent;border-color:transparent");
  addRaw(".chip-ghost:hover", "background:var(--aksara-bg-subtle)");
  add(
    "chip-avatar",
    "inline-size:1.375em;block-size:1.375em;flex-shrink:0;margin-inline-start:-.25em;border-radius:9999px;object-fit:cover"
  );
  addRaw("a.chip:hover,button.chip:hover:not(:disabled)", "border-color:var(--aksara-border-strong)");
  addRaw(
    '.chip.active,.chip[aria-pressed="true"]',
    "background:rgb(var(--aksara-primary)/.1);border-color:rgb(var(--aksara-primary)/.35);color:color-mix(in srgb,rgb(var(--aksara-primary)) 78%,var(--aksara-text-body))"
  );
  addRaw(".chip.disabled,.chip:disabled", "opacity:.5;pointer-events:none");
  addRaw("button.chip:focus-visible,a.chip:focus-visible", "outline:0;box-shadow:var(--aksara-ring)");
  add(
    "dropdown-select-toggle",
    "display:inline-flex!important;align-items:center;gap:.5rem;width:100%;min-width:0;max-width:100%;text-align:start"
  );
  addRaw(".btn.dropdown-select-toggle", "justify-content:space-between;padding-inline:.625rem");
  add("dropdown-select-chevron", "opacity:.6;margin-inline-start:auto");
  add("dropdown-select-option-icon", "flex-shrink:0;font-size:1.05em");
  add("dropdown-select-option-label", "min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap");
  addRaw(".dropdown-select-menu .dropdown-item", "display:flex;align-items:center;gap:.625rem");
  add("variant-form-select", "");
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
    "display:block;padding:.875rem 1rem;border-block-end:1px solid var(--aksara-border-subtle);color:var(--aksara-text-body);text-decoration:none;background:var(--aksara-surface)"
  );
  add(
    "list-group-item-action",
    "width:100%;border-inline:0;border-block-start:0;text-align:start;cursor:pointer;transition:background-color .15s ease,color .15s ease"
  );
  add("list-group-title", "display:block;margin:0;font-weight:600;color:var(--aksara-text-body);line-height:1.35");
  add(
    "list-group-subtitle",
    "display:block;margin:.25rem 0 0;color:var(--aksara-text-subtle);font-size:.875rem;line-height:1.45"
  );
  addRaw(".list-group-item:last-child", "border-block-end:0");
  addRaw(
    ".list-group-item.active",
    "background:rgb(var(--aksara-primary)/.1);color:color-mix(in srgb,rgb(var(--aksara-primary)) 78%,var(--aksara-text-body));font-weight:600"
  );
  addRaw(".list-group-item.active .list-group-title,.list-group-item.active .list-group-subtitle", "color:inherit");
  addRaw(
    ".list-group-item-action:hover,.list-group-item-action:focus-visible",
    "background:var(--aksara-surface-hover);outline:0"
  );
  addRaw(".list-group-item.disabled,.list-group-item:disabled", "opacity:.56;pointer-events:none");
  // Each item draws its own connector from below its point to the next item, so the line
  // always runs through the points, whatever padding the list or items receive.
  add(
    "timeline",
    "--aksara-timeline-point:1.75rem;--aksara-timeline-gap:1.5rem;position:relative;padding:0;margin:0;list-style:none"
  );
  add("timeline-item", "position:relative;display:flex;gap:1rem;margin-bottom:var(--aksara-timeline-gap,1.5rem)");
  add("timeline-compact", "--aksara-timeline-point:1.5rem;--aksara-timeline-gap:1rem");
  addRaw(".timeline-compact .timeline-point", "font-size:.75rem");
  addRaw(
    ".timeline-item:not(:last-child)::before",
    'content:"";position:absolute;inset-block-start:calc(var(--aksara-timeline-point,1.75rem) + 4px);inset-block-end:calc(4px - var(--aksara-timeline-gap,1.5rem));inset-inline-start:calc(var(--aksara-timeline-point,1.75rem) / 2 - 1px);width:2px;border-radius:9999px;background:var(--aksara-border)'
  );
  addRaw(".timeline-item:last-child", "margin-bottom:0");
  add(
    "timeline-point",
    "position:relative;z-index:1;display:flex;align-items:center;justify-content:center;width:var(--aksara-timeline-point,1.75rem);height:var(--aksara-timeline-point,1.75rem);border-radius:9999px;background:var(--aksara-surface);border:2px solid rgb(var(--aksara-primary)/.55);color:rgb(var(--aksara-primary));font-size:.875rem;flex-shrink:0"
  );
  add("timeline-content", "flex:1 1 auto;padding-top:.125rem");
  add("timeline-title", "margin:0 0 .25rem;font-size:.9375rem;font-weight:650;line-height:1.35");
  add("timeline-time", "display:block;font-size:.75rem;color:var(--aksara-text-subtle);margin-bottom:.5rem");
  add(
    "navbar",
    "display:flex;align-items:center;gap:1rem;min-height:3.5rem;padding:.75rem 1rem;border-block-end:1px solid var(--aksara-border-subtle);background:var(--aksara-surface)"
  );
  add(
    "navbar-brand",
    "display:inline-flex;align-items:center;gap:.5rem;font-weight:700;letter-spacing:-.015em;color:var(--aksara-text-body);text-decoration:none"
  );
  add("navbar-nav", "display:flex;align-items:center;gap:.5rem;margin:0;padding:0;list-style:none");
  add(
    "navbar-toggler",
    "display:inline-flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:1px solid var(--aksara-border);border-radius:var(--aksara-control-radius,.625rem);background:var(--aksara-surface);color:var(--aksara-text-body);cursor:pointer"
  );
  add("navbar-collapse", "display:flex;align-items:center;gap:1rem");
  add(
    "nav-link",
    "display:inline-flex;align-items:center;gap:.375rem;border-radius:var(--aksara-radius-sm);padding:.5rem .75rem;color:var(--aksara-text-subtle);font-size:.875rem;font-weight:500;text-decoration:none;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(".nav-link:hover", "color:var(--aksara-text-body);background:var(--aksara-bg-subtle)");
  addRaw(
    '.nav-link[aria-current="page"],.nav-link.active',
    "color:var(--aksara-text-body);background:var(--aksara-bg-subtle);font-weight:600"
  );
  add("dropdown", "position:relative;display:inline-block");
  add("dropdown-top", "position:relative;display:inline-block");
  add("dropdown-bottom", "position:relative;display:inline-block");
  add("dropdown-start", "position:relative;display:inline-block");
  add("dropdown-end", "position:relative;display:inline-block");
  add(
    "dropdown-menu",
    "position:absolute;z-index:1000;display:none;min-width:12rem;padding:.375rem;margin:.375rem 0 0;list-style:none;background:var(--aksara-surface-raised);color:var(--aksara-text-body);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-md);box-shadow:var(--aksara-shadow-lg);font-size:.875rem;overscroll-behavior:contain"
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

  add(
    "dropdown-item",
    "display:flex;align-items:center;gap:.625rem;width:100%;border:0;border-radius:var(--aksara-radius-sm);padding:.5rem .625rem;background:transparent;color:var(--aksara-text-body);font:inherit;text-align:start;text-decoration:none;cursor:pointer;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  add(
    "dropdown-header",
    "padding:.5rem .625rem .25rem;color:var(--aksara-text-body-tertiary);font-size:.6875rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase"
  );
  add("dropdown-divider", "height:1px;margin:.375rem -.375rem;background:var(--aksara-border-subtle)");
  addRaw(".dropdown-item:hover,.dropdown-item:focus-visible", "background:var(--aksara-bg-subtle);outline:0");
  addRaw(".dropdown-item>i,.dropdown-item>.mdi", "color:var(--aksara-text-subtle);font-size:1.0625rem;line-height:1");
  addRaw(
    ".dropdown-item-danger,.dropdown-item.text-danger",
    "color:color-mix(in srgb,rgb(var(--aksara-danger)) 85%,var(--aksara-text-body))"
  );
  addRaw(".dropdown-item-danger:hover,.dropdown-item.text-danger:hover", "background:rgb(var(--aksara-danger)/.1)");
  addRaw(".dropdown-item-danger>i,.dropdown-item-danger>.mdi", "color:inherit");
  addRaw(
    '.dropdown-item[aria-current="true"],.dropdown-item.active',
    "background:rgb(var(--aksara-primary)/.1);color:color-mix(in srgb,rgb(var(--aksara-primary)) 78%,var(--aksara-text-body))"
  );
  add("dropdown-open", "display:block;animation:aksara-pop .16s var(--aksara-ease,ease)");
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
    "position:fixed;inset:0;z-index:1050;display:none;align-items:center;justify-content:center;overflow:hidden;background:var(--aksara-overlay-bg);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)"
  );
  add("modal-open", "display:flex;animation:aksara-fade .2s ease");
  addRaw(".modal-open .modal-dialog", "animation:aksara-rise .26s var(--aksara-ease,ease)");
  add(
    "modal-dialog",
    "display:grid;grid-template-rows:auto minmax(0,1fr) auto;width:min(100%,var(--aksara-modal-width,32rem));max-height:calc(100svh - 2rem);overflow:hidden;transform:translate(var(--aksara-modal-x,0),var(--aksara-modal-y,0));background:var(--aksara-surface-raised);color:var(--aksara-text-body);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-xl,1.25rem);box-shadow:var(--aksara-shadow-lg)"
  );
  add("modal-sm", "--aksara-modal-width:24rem");
  // Alert dialog in the iOS / macOS style: narrow frosted card, centered text and an icon
  // tile, full-width text actions split by hairlines. Used by Aksara.confirm()/alert().
  const hairline = "color-mix(in srgb,var(--aksara-text-body) 13%,transparent)";
  add("modal-alert", "");
  addRaw(
    ".modal-alert .modal-dialog",
    `display:block;width:min(100% - 2rem,18rem);max-height:none;overflow:hidden;border:1px solid ${hairline};border-radius:1.25rem;background:color-mix(in srgb,var(--aksara-surface-raised) 84%,transparent);backdrop-filter:blur(30px) saturate(180%);-webkit-backdrop-filter:blur(30px) saturate(180%);box-shadow:var(--aksara-shadow-lg)`
  );
  addRaw(".modal-open.modal-alert .modal-dialog", "animation:aksara-alert-in .3s cubic-bezier(.2,.9,.3,1.15)");
  add("modal-alert-body", "padding:1.375rem 1.125rem 1.125rem;text-align:center");
  add(
    "modal-alert-icon",
    "display:inline-flex;align-items:center;justify-content:center;inline-size:3.25rem;block-size:3.25rem;margin-block-end:.875rem;border-radius:.875rem;background:color-mix(in srgb,currentColor 13%,transparent);font-size:1.75rem;line-height:1"
  );
  add(
    "modal-alert-title",
    "margin:0 0 .3125rem;color:var(--aksara-text-body);font-size:1.0625rem;font-weight:650;line-height:1.3;letter-spacing:-.01em"
  );
  add("modal-alert-message", "margin:0;color:var(--aksara-text-subtle);font-size:.8125rem;line-height:1.45");
  add(
    "modal-alert-actions",
    `display:grid;grid-auto-flow:column;grid-auto-columns:1fr;border-block-start:1px solid ${hairline}`
  );
  add("modal-alert-actions-stacked", "grid-auto-flow:row");
  add(
    "modal-alert-action",
    "min-height:2.875rem;margin:0;padding:.625rem .75rem;border:0;background:transparent;color:var(--aksara-text-body);font:inherit;font-size:.9375rem;font-weight:500;cursor:pointer;transition:background-color .12s ease"
  );
  addRaw(".modal-alert-action+.modal-alert-action", `border-inline-start:1px solid ${hairline}`);
  addRaw(
    ".modal-alert-actions-stacked>.modal-alert-action+.modal-alert-action",
    `border-inline-start:0;border-block-start:1px solid ${hairline}`
  );
  addRaw(".modal-alert-action:hover", "background:color-mix(in srgb,var(--aksara-text-body) 6%,transparent)");
  addRaw(".modal-alert-action:active", "background:color-mix(in srgb,var(--aksara-text-body) 11%,transparent)");
  addRaw(
    ".modal-alert-action:focus-visible",
    "outline:0;background:color-mix(in srgb,var(--aksara-text-body) 8%,transparent)"
  );
  for (const name of Object.keys(colors)) {
    add(`modal-alert-action-${name}`, `color:${softText(name)};font-weight:650`);
  }
  add("modal-dialog-centered", "margin-block:auto");
  add("fade", "");
  // Static backdrop "buzz": the open animation stays first in the list so it never replays.
  addRaw(
    ".modal-static .modal-dialog",
    "animation:aksara-rise .26s var(--aksara-ease,ease),aksara-shake .42s cubic-bezier(.36,.07,.19,.97)"
  );
  addRaw(
    ".modal-static.modal-alert .modal-dialog",
    "animation:aksara-alert-in .3s cubic-bezier(.2,.9,.3,1.15),aksara-shake .42s cubic-bezier(.36,.07,.19,.97)"
  );
  addRaw(".offcanvas.offcanvas-static", "animation:aksara-shake-x .42s cubic-bezier(.36,.07,.19,.97)");
  add("tooltip-inner", "");
  add("tab-icon", "font-size:1.05em;line-height:1");
  add("tabs-wrapper", "");
  add("tab-content", "");
  add("tabs-segmented-wrapper", "");
  addRaw(
    ".nav-link.disabled,.nav-link[aria-disabled='true'],.tab:disabled,.tab.disabled",
    "opacity:.45;pointer-events:none"
  );
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
    "display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.25rem 1.25rem .75rem"
  );
  add(
    "modal-title",
    "margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;font-size:1.125rem;font-weight:650;line-height:1.4;letter-spacing:-.015em"
  );
  add(
    "modal-body",
    "min-height:0;overflow:auto;overscroll-behavior:contain;padding:.25rem 1.25rem 1.25rem;color:var(--aksara-text-subtle);line-height:1.6"
  );
  addRaw(".modal-body:first-child", "padding-block-start:1.25rem");
  add(
    "modal-footer",
    "display:flex;align-items:center;justify-content:flex-end;gap:.5rem;padding:.5rem 1.25rem 1.25rem"
  );
  // A divider only where the body scrolls under the footer.
  addRaw(
    ".modal-dialog-scrollable .modal-footer",
    "padding-block-start:1rem;border-block-start:1px solid var(--aksara-border-subtle)"
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
    "position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;display:inline-flex;align-items:center;justify-content:center;inline-size:2rem;block-size:2rem;aspect-ratio:1/1;flex:0 0 auto;flex-shrink:0;border:0;border-radius:9999px;background:transparent;color:var(--aksara-text-subtle);cursor:pointer;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),color var(--aksara-duration,.18s) var(--aksara-ease,ease),transform .12s ease"
  );
  add(
    "modal-close",
    "position:relative;display:inline-flex;align-items:center;justify-content:center;inline-size:2rem;block-size:2rem;aspect-ratio:1/1;flex:0 0 auto;flex-shrink:0;border:0;border-radius:9999px;background:transparent;color:var(--aksara-text-subtle);cursor:pointer;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),color var(--aksara-duration,.18s) var(--aksara-ease,ease),transform .12s ease"
  );
  add(
    "btn-close",
    "position:relative;display:inline-flex;align-items:center;justify-content:center;inline-size:2rem;block-size:2rem;aspect-ratio:1/1;flex:0 0 auto;flex-shrink:0;border:0;border-radius:9999px;background:transparent;color:var(--aksara-text-subtle);cursor:pointer;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),color var(--aksara-duration,.18s) var(--aksara-ease,ease),transform .12s ease"
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
    'content:"";position:absolute;inline-size:42%;block-size:1.75px;border-radius:9999px;background:currentColor'
  );
  addRaw(".close::before,.modal-close::before,.btn-close::before", "transform:rotate(45deg)");
  addRaw(".close::after,.modal-close::after,.btn-close::after", "transform:rotate(-45deg)");
  addRaw(".close > *,.modal-close > *,.btn-close > *", "display:none");
  addRaw(
    ".close:hover,.modal-close:hover,.btn-close:hover",
    "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
  );
  addRaw(
    ".close:focus-visible,.modal-close:focus-visible,.btn-close:focus-visible",
    "outline:0;box-shadow:var(--aksara-ring)"
  );
  addRaw(".close:active,.modal-close:active,.btn-close:active", "transform:scale(.94)");
  addRaw(".close-white,.btn-close-white", "color:#fff;background:rgba(255,255,255,.16)");
  add(
    "tooltip",
    "position:absolute;z-index:1080;max-width:16rem;padding:.375rem .625rem;border-radius:var(--aksara-radius-sm);background:var(--aksara-tooltip-bg);color:var(--aksara-tooltip-text);font-size:.8125rem;font-weight:500;line-height:1.4;box-shadow:var(--aksara-shadow-md);animation:aksara-fade .14s ease"
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
    "position:absolute;z-index:1070;max-width:20rem;padding:.875rem 1rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-md);background:var(--aksara-surface-raised);color:var(--aksara-text-body);font-size:.875rem;box-shadow:var(--aksara-shadow-lg);animation:aksara-pop .16s var(--aksara-ease,ease)"
  );
  addRaw(".popover::before,.popover::after", "content:'';position:absolute;pointer-events:none;border-style:solid");
  addRaw(
    ".popover-top::before",
    "top:100%;left:50%;transform:translateX(-50%);border-width:7px;border-color:var(--aksara-border-subtle) transparent transparent transparent"
  );
  addRaw(
    ".popover-top::after",
    "top:100%;left:50%;transform:translateX(-50%);border-width:6px;border-color:var(--aksara-surface-raised) transparent transparent transparent"
  );
  addRaw(
    ".popover-bottom::before",
    "bottom:100%;left:50%;transform:translateX(-50%);border-width:7px;border-color:transparent transparent var(--aksara-border-subtle) transparent"
  );
  addRaw(
    ".popover-bottom::after",
    "bottom:100%;left:50%;transform:translateX(-50%);border-width:6px;border-color:transparent transparent var(--aksara-surface-raised) transparent"
  );
  addRaw(
    ".popover-left::before,.popover-start::before",
    "left:100%;right:auto;top:50%;transform:translateY(-50%);border-width:7px;border-color:transparent transparent transparent var(--aksara-border-subtle)"
  );
  addRaw(
    ".popover-left::after,.popover-start::after",
    "left:100%;right:auto;top:50%;transform:translateY(-50%);border-width:6px;border-color:transparent transparent transparent var(--aksara-surface-raised)"
  );
  addRaw(
    ".popover-right::before,.popover-end::before",
    "right:100%;left:auto;top:50%;transform:translateY(-50%);border-width:7px;border-color:transparent var(--aksara-border-subtle) transparent transparent"
  );
  addRaw(
    ".popover-right::after,.popover-end::after",
    "right:100%;left:auto;top:50%;transform:translateY(-50%);border-width:6px;border-color:transparent var(--aksara-surface-raised) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .popover-start::before",
    "left:auto;right:100%;border-color:transparent var(--aksara-border-subtle) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .popover-start::after",
    "left:auto;right:100%;border-color:transparent var(--aksara-surface-raised) transparent transparent"
  );
  addRaw(
    "[dir='rtl'] .popover-end::before",
    "right:auto;left:100%;border-color:transparent transparent transparent var(--aksara-border-subtle)"
  );
  addRaw(
    "[dir='rtl'] .popover-end::after",
    "right:auto;left:100%;border-color:transparent transparent transparent var(--aksara-surface-raised)"
  );
  add(
    "popover-header",
    "margin:0 0 .25rem;padding:0;color:var(--aksara-text-body);font-size:.875rem;font-weight:650;line-height:1.4"
  );
  add("popover-title", "margin:0 0 .25rem;font-weight:650");
  add("popover-body", "color:var(--aksara-text-subtle);line-height:1.55");
  add(
    "accordion",
    "border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden;background:var(--aksara-surface)"
  );
  add("accordion-item", "border-block-end:1px solid var(--aksara-border-subtle)");
  add(
    "accordion-button",
    "display:flex;width:100%;align-items:center;justify-content:space-between;gap:1rem;border:0;background:transparent;padding:1rem 1.25rem;color:var(--aksara-text-body);font:inherit;font-weight:600;text-align:start;cursor:pointer;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  add(
    "accordion-icon",
    "display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;inline-size:1.5rem;block-size:1.5rem;border-radius:9999px;color:var(--aksara-text-subtle);transition:transform .25s var(--aksara-ease,ease),color .2s ease,background-color .2s ease"
  );
  add("accordion-panel", "padding:0 1.25rem 1.25rem;color:var(--aksara-text-subtle);line-height:1.6");
  addRaw(".accordion-button:hover", "background:var(--aksara-surface-hover)");
  addRaw(".accordion-button:focus-visible", "outline:0;box-shadow:inset var(--aksara-ring)");
  addRaw(".accordion-item:last-child", "border-block-end:0");
  add(
    "accordion-separated",
    "display:grid;gap:.75rem;border:0;border-radius:0;background:transparent;box-shadow:none;overflow:visible"
  );
  addRaw(
    ".accordion-separated>.accordion-item,.accordion-separated>.accordion-item:last-child",
    "border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-md);background:var(--aksara-surface);overflow:hidden"
  );
  addRaw('.accordion-button[aria-expanded="true"]', "background:transparent");
  addRaw(
    '.accordion-button[aria-expanded="true"] .accordion-icon',
    "color:var(--aksara-text-body);background:var(--aksara-bg-subtle);transform:rotate(180deg)"
  );
  add(
    "tabs",
    "display:flex;gap:.25rem;overflow-x:auto;scrollbar-width:none;border-block-end:1px solid var(--aksara-border-subtle)"
  );
  add(
    "tab",
    "position:relative;display:inline-flex;align-items:center;gap:.375rem;flex-shrink:0;border:0;border-radius:0;padding:.625rem .75rem;margin-block-end:-1px;background:transparent;color:var(--aksara-text-subtle);font:inherit;font-size:.875rem;font-weight:600;white-space:nowrap;cursor:pointer;box-shadow:inset 0 -2px 0 transparent;transition:color var(--aksara-duration,.18s) var(--aksara-ease,ease),box-shadow var(--aksara-duration,.18s) var(--aksara-ease,ease)"
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
  addRaw(".tab:hover", "color:var(--aksara-text-body)");
  addRaw(".tab:focus-visible", "outline:0;border-radius:var(--aksara-radius-sm);box-shadow:var(--aksara-ring)");
  addRaw(
    '.tab[aria-selected="true"],.tab.active',
    "color:var(--aksara-text-body);box-shadow:inset 0 -2px 0 rgb(var(--aksara-primary))"
  );
  add("nav", "display:flex;flex-wrap:wrap;gap:.25rem;margin:0;padding:0;list-style:none");
  add("nav-pills", "border-block-end:0");
  addRaw(
    ".nav-pills .nav-link,.nav-pills .tab",
    "border-radius:9999px;border:1px solid transparent;margin:0;padding:.4375rem .875rem;background:transparent;color:var(--aksara-text-subtle);text-decoration:none;box-shadow:none"
  );
  addRaw(
    ".nav-pills .nav-link:hover,.nav-pills .tab:hover",
    "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
  );
  addRaw(
    '.nav-pills .nav-link.active,.nav-pills .nav-link[aria-current="true"],.nav-pills .nav-link[aria-current="page"],.nav-pills .tab[aria-selected="true"]',
    "background:rgb(var(--aksara-primary)/.1);border-color:transparent;color:color-mix(in srgb,rgb(var(--aksara-primary)) 78%,var(--aksara-text-body));box-shadow:none"
  );
  add(
    "tabs-segmented",
    "display:flex;gap:2px;padding:3px;background:var(--aksara-bg-subtle);border-radius:var(--aksara-control-radius,.625rem);border:1px solid var(--aksara-border-subtle)"
  );
  addRaw(
    ".tabs-segmented .tab",
    "flex:1;display:inline-flex;align-items:center;justify-content:center;gap:.375rem;margin:0;border-radius:calc(var(--aksara-control-radius,.625rem) - 3px);padding:.375rem .75rem;font:inherit;font-size:.8125rem;font-weight:600;color:var(--aksara-text-subtle);transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),color var(--aksara-duration,.18s) var(--aksara-ease,ease),box-shadow var(--aksara-duration,.18s) var(--aksara-ease,ease);border:0;background:transparent;text-decoration:none;cursor:pointer;box-shadow:none"
  );
  addRaw(".tabs-segmented .tab:hover", "color:var(--aksara-text-body)");
  addRaw(
    '.tabs-segmented .tab.active,.tabs-segmented .tab[aria-selected="true"]',
    "background:var(--aksara-surface-raised);color:var(--aksara-text-body)"
  );
  add(
    "toast",
    "position:relative;display:none;max-width:24rem;padding:.875rem 1rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-md);background:var(--aksara-surface-raised);color:var(--aksara-text-body);font-size:.875rem;box-shadow:var(--aksara-shadow-lg)"
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
    "display:flex;align-items:center;justify-content:space-between;gap:.75rem;margin-block-end:.25rem;font-weight:650"
  );
  add("toast-body", "color:var(--aksara-text-subtle);line-height:1.55");
  add("toast-show", "display:block;animation:aksara-slide .22s var(--aksara-ease,ease)");
  add("collapse", "display:none");
  add("collapse-show", "display:block");
  addRaw(".collapse.show", "display:block");
  add("collapse-horizontal", "");
  add(
    "progress",
    "display:flex;height:.875rem;overflow:hidden;border-radius:9999px;background:var(--aksara-bg-subtle);box-shadow:inset 0 0 0 1px var(--aksara-border-subtle)"
  );
  add("progress-thin", "height:.375rem");
  addRaw(".progress-bar:last-child", "border-start-end-radius:inherit;border-end-end-radius:inherit");
  add(
    "progress-bar",
    "display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--aksara-primary-foreground,rgb(255 255 255));background:rgb(var(--aksara-primary));font-size:.625rem;font-weight:650;letter-spacing:.02em;white-space:nowrap;transition:width .45s var(--aksara-ease,ease)"
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
  add("placeholder-glow", "animation:aksara-placeholder-glow 1.5s ease-in-out infinite");
  addRaw(".placeholder-glow .placeholder", "animation:aksara-placeholder-glow 1.5s ease-in-out infinite");
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
  add("carousel", "position:relative;overflow:hidden;outline:0");
  addRaw(".carousel:focus-visible", "box-shadow:var(--aksara-ring)");
  add(
    "carousel-viewport",
    "position:relative;overflow:hidden;border-radius:inherit;touch-action:pan-y pinch-zoom;transition:height .3s var(--aksara-ease,ease)"
  );
  add(
    "carousel-track",
    "display:flex;gap:var(--aksara-carousel-gap,0px);will-change:transform;transition:transform var(--aksara-carousel-speed,.5s) var(--aksara-ease,ease)"
  );
  add("carousel-item", "display:block;position:relative;min-width:0");
  addRaw(
    ".carousel-track>.carousel-item",
    "flex:0 0 calc((100% - (var(--aksara-carousel-per-view,1) - 1) * var(--aksara-carousel-gap,0px)) / var(--aksara-carousel-per-view,1))"
  );
  addRaw(".carousel-draggable .carousel-viewport", "cursor:grab");
  addRaw(".carousel.is-dragging .carousel-viewport", "cursor:grabbing;user-select:none");
  addRaw(".carousel.is-dragging .carousel-track", "transition:none");
  addRaw(".carousel-draggable .carousel-item img", "-webkit-user-drag:none;user-select:none");
  addRaw(".carousel-fade .carousel-track", "display:grid;transform:none!important");
  addRaw(
    ".carousel-fade .carousel-track>.carousel-item",
    "grid-area:1/1;opacity:0;visibility:hidden;transition:opacity var(--aksara-carousel-speed,.6s) ease,visibility 0s linear var(--aksara-carousel-speed,.6s)"
  );
  addRaw(
    ".carousel-fade .carousel-track>.carousel-item.active",
    "opacity:1;visibility:visible;transition-delay:0s;z-index:1"
  );
  add("carousel-img", "display:block;width:100%;height:100%;object-fit:cover");
  add("carousel-auto-height", "");
  add(
    "carousel-counter",
    "position:absolute;z-index:2;inset-block-start:.75rem;inset-inline-end:.75rem;padding:.25rem .625rem;border-radius:9999px;background:var(--aksara-carousel-caption-bg);color:var(--aksara-on-media);font-size:.75rem;font-weight:600;font-variant-numeric:tabular-nums;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)"
  );
  add(
    "carousel-progress",
    "position:absolute;z-index:2;inset-inline:0;inset-block-end:0;height:3px;background:rgb(255 255 255/.22)"
  );
  add(
    "carousel-progress-bar",
    "height:100%;background:var(--aksara-carousel-indicator-active);transform:scaleX(0);transform-origin:left center"
  );
  addRaw("[dir='rtl'] .carousel-progress-bar", "transform-origin:right center");
  addRaw(
    ".carousel.is-playing .carousel-progress-bar",
    "animation:aksara-carousel-progress var(--aksara-carousel-interval,5s) linear forwards"
  );
  addRaw(".carousel.is-paused .carousel-progress-bar", "animation-play-state:paused");
  add(
    "carousel-thumbs",
    "display:flex;gap:.5rem;margin-block-start:.75rem;overflow-x:auto;scrollbar-width:none;padding:2px"
  );
  add(
    "carousel-thumb",
    "flex:0 0 auto;inline-size:4.5rem;block-size:3rem;padding:0;border:0;border-radius:var(--aksara-radius-sm);overflow:hidden;background:var(--aksara-bg-subtle);opacity:.5;cursor:pointer;outline:2px solid transparent;outline-offset:1px;transition:opacity var(--aksara-duration,.18s) var(--aksara-ease,ease),outline-color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(".carousel-thumb img", "display:block;width:100%;height:100%;object-fit:cover");
  addRaw(".carousel-thumb:hover", "opacity:.85");
  addRaw(
    '.carousel-thumb.active,.carousel-thumb[aria-current="true"]',
    "opacity:1;outline-color:rgb(var(--aksara-primary))"
  );
  add("carousel-indicators-static", "position:static!important;margin-block-start:.875rem!important");
  addRaw(".carousel-indicators-static .carousel-indicator", "background:var(--aksara-border-strong)");
  addRaw(
    '.carousel-indicators-static .carousel-indicator[aria-current="true"]',
    "background:rgb(var(--aksara-primary))"
  );
  add(
    "carousel-caption",
    "position:absolute;inset-inline:1rem;inset-block-end:2.25rem;padding:.875rem 1rem;border-radius:var(--aksara-radius-md);background:var(--aksara-carousel-caption-bg);color:var(--aksara-on-media);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)"
  );
  add(
    "carousel-indicators",
    "position:absolute;inset-inline:0;inset-block-end:.75rem;display:flex;justify-content:center;gap:.375rem;margin:0;padding:0;list-style:none"
  );
  add(
    "carousel-indicator",
    "inline-size:.5rem;block-size:.5rem;padding:0;border:0;border-radius:9999px;background:var(--aksara-carousel-indicator);cursor:pointer;transition:inline-size .3s var(--aksara-ease,ease),background-color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(
    '.carousel-indicator[aria-current="true"]',
    "inline-size:1.5rem;background:var(--aksara-carousel-indicator-active)"
  );
  add(
    "carousel-control",
    "position:absolute;inset-block-start:50%;transform:translateY(-50%);display:inline-flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:0;border-radius:9999px;background:var(--aksara-carousel-control-bg);color:var(--aksara-carousel-control-text,var(--aksara-on-media));font-size:1.25rem;box-shadow:var(--aksara-shadow-md);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);cursor:pointer;transition:transform var(--aksara-duration,.18s) var(--aksara-ease,ease),background-color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(".carousel-control:hover", "transform:translateY(-50%) scale(1.06)");
  addRaw(".carousel-control,.carousel-indicators,.carousel-caption", "z-index:2");
  addRaw(".carousel-control:disabled", "opacity:0;pointer-events:none");
  add("carousel-prev", "inset-inline-start:.75rem");
  add("carousel-next", "inset-inline-end:.75rem");
  add(
    "offcanvas",
    "position:fixed;inset-block:0;inset-inline-start:0;z-index:1045;width:min(100%,20rem);transform:translateX(-100%);display:flex;flex-direction:column;visibility:hidden;transition:transform .3s var(--aksara-ease,ease),visibility 0s linear .3s;background:var(--aksara-surface-raised);color:var(--aksara-text-body);border-inline-end:1px solid var(--aksara-border-subtle);box-shadow:var(--aksara-shadow-lg)"
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
    "display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.25rem 1.25rem .75rem;font-weight:650"
  );
  add(
    "offcanvas-body",
    "flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:.5rem 1.25rem 1.25rem"
  );
  add(
    "offcanvas-footer",
    "display:flex;align-items:center;justify-content:flex-end;gap:.5rem;padding:1rem 1.25rem 1.25rem;border-block-start:1px solid var(--aksara-border-subtle)"
  );
  add("offcanvas-title", "margin:0;font-size:1.0625rem;font-weight:650;letter-spacing:-.01em");
  add("offcanvas-start", "");
  add("offcanvas-open", "transform:translateX(0);visibility:visible;transition:transform .3s var(--aksara-ease,ease)");
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
  add(
    "table",
    "width:100%;border-collapse:collapse;vertical-align:top;background:var(--aksara-surface);color:var(--aksara-text-body);font-size:.875rem"
  );
  add(
    "table-responsive",
    "display:block;width:100%;overflow-x:auto;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius)"
  );
  addRaw(".table-responsive>.table tbody tr:last-child>*", "border-block-end:0");
  add(
    "table-bordered",
    "border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);overflow:hidden"
  );
  add("table-compact", "font-size:.875rem");
  add("table-striped", "background:var(--aksara-surface)");
  add("table-hover", "background:var(--aksara-surface)");
  addRaw(
    ".table th,.table td",
    "padding:.75rem 1rem;border-block-end:1px solid var(--aksara-border-subtle);vertical-align:middle"
  );
  // Zero specificity so `text-end` / `text-center` on cells win.
  addRaw(":where(.table th,.table td)", "text-align:start");
  addRaw(".table-compact th,.table-compact td", "padding:.5rem .75rem");
  // Selection column of `data-table-select` tables.
  add("table-check", "width:1%;white-space:nowrap");
  addRaw(".table .table-check", "padding-inline-end:.25rem;line-height:0");
  addRaw(".table .table-check>input", "margin:0;vertical-align:middle");
  addRaw('table[data-table-select="row"] tbody tr', "cursor:pointer");
  addRaw("table[data-table-select] tbody tr.table-active>*", "background:rgb(var(--aksara-primary)/.06)");
  addRaw(".table-bordered th,.table-bordered td", "border:1px solid var(--aksara-border-subtle)");
  addRaw(
    ".table thead th",
    "color:var(--aksara-text-subtle);font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap;background:var(--aksara-bg-body-secondary)"
  );
  addRaw(".table-striped tbody tr:nth-child(even)", "background:var(--aksara-bg-body-secondary)");
  addRaw(".table tbody tr", "transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease)");
  addRaw(".table-hover tbody tr:hover", "background:var(--aksara-surface-hover)");
  add(
    "breadcrumb",
    "display:flex;flex-wrap:wrap;align-items:center;gap:.5rem;list-style:none;padding:0;margin:0;color:var(--aksara-text-subtle);font-size:.875rem"
  );
  add("breadcrumb-item", "display:inline-flex;align-items:center;gap:.5rem");
  addRaw('.breadcrumb-item[aria-current="page"]', "color:var(--aksara-text-body);font-weight:600");
  addRaw(
    ".breadcrumb-item+ .breadcrumb-item::before",
    "content:var(--aksara-breadcrumb-divider,'/');color:var(--aksara-text-body-tertiary)"
  );
  addRaw(
    ".breadcrumb-dot .breadcrumb-item+ .breadcrumb-item::before",
    "content:'\\2022';font-size:.875em;line-height:1"
  );
  addRaw(
    ".breadcrumb-arrow .breadcrumb-item+ .breadcrumb-item::before",
    "content:'\\203A';font-size:1.15em;line-height:1;transform:none"
  );
  addRaw("[dir='rtl'] .breadcrumb-arrow .breadcrumb-item+ .breadcrumb-item::before", "content:'\\2039'");
  addRaw(".breadcrumb a", "color:inherit;text-decoration:none;transition:color .15s ease");
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
    "display:inline-flex;align-items:center;justify-content:center;min-width:2.25rem;height:2.25rem;border:1px solid transparent;border-radius:var(--aksara-control-radius,.625rem);padding:0 .625rem;background:transparent;color:var(--aksara-text-subtle);font-size:.875rem;font-weight:500;text-decoration:none;cursor:pointer;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),color var(--aksara-duration,.18s) var(--aksara-ease,ease),border-color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(".page-link:hover", "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)");
  addRaw(
    '.page-link[aria-current="page"],.page-link.active',
    "background:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary));color:var(--aksara-primary-foreground,rgb(255 255 255));font-weight:600"
  );
  addRaw(".page-link:focus-visible", "outline:0;box-shadow:var(--aksara-ring)");
  addRaw(
    ".pagination-outline .page-link:not([aria-current]):not(.active)",
    "border-color:var(--aksara-border);background:var(--aksara-surface)"
  );
  addRaw(".page-link.disabled,.page-link:disabled", "opacity:.5;pointer-events:none");
  for (const name of Object.keys(colors)) {
    add(
      `alert-${name}`,
      `color:${softText(name)};background-color:${colorValue(name, 8)};border-color:${colorValue(name, 22)}`
    );
    addRaw(`.alert-${name} .alert-icon`, `color:${colorValue(name)}`);
    add(`badge-${name}`, `color:${solidForeground(name)};background-color:${colorValue(name)}`);
    add(`badge-soft-${name}`, `color:${softText(name)};background-color:${colorValue(name, 12)}`);
    add(
      `badge-outline-${name}`,
      `color:${softText(name)};background-color:transparent;border-color:${colorValue(name, 40)}`
    );
    add(
      `chip-${name}`,
      `color:${solidForeground(name)};background-color:${colorValue(name)};border-color:${colorValue(name)}`
    );
    add(
      `chip-soft-${name}`,
      `color:${softText(name)};background-color:${colorValue(name, 10)};border-color:${colorValue(name, 20)}`
    );
    add(
      `chip-outline-${name}`,
      `color:${softText(name)};background-color:transparent;border-color:${colorValue(name, 45)}`
    );
    addRaw(
      `.badge-dot.${escapeClass(`text-${name}`)}`,
      `color:${colorValue(name)};background-color:${colorValue(name)}`
    );
    add(`link-${name}`, `color:${softText(name)};text-decoration-color:${colorValue(name, 35)}`);
    add(`bg-text-${name}`, `color:${readableText(name)};background-color:${colorValue(name)}`);
    add(
      `toast-${name}`,
      `border-color:${colorValue(name, 22)};background-image:linear-gradient(${colorValue(name, 6)},${colorValue(name, 6)})`
    );
    addRaw(`.toast-${name} .toast-header`, `color:${softText(name)}`);
  }
  add(
    "form-control",
    "display:block;width:100%;padding:.5rem .875rem;font:inherit;font-size:.9375rem;line-height:1.5;color:var(--aksara-text-body);background:var(--aksara-surface);border:1px solid var(--aksara-border);border-radius:var(--aksara-control-radius,.625rem);height:42px;min-height:42px;box-sizing:border-box;transition:border-color var(--aksara-duration,.18s) var(--aksara-ease,ease),box-shadow var(--aksara-duration,.18s) var(--aksara-ease,ease),background-color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  add(
    "form-select",
    "display:block;width:100%;padding:.5rem 2.25rem .5rem .875rem;font:inherit;font-size:.9375rem;line-height:1.5;color:var(--aksara-text-body);background-color:var(--aksara-surface);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23a09b94' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid var(--aksara-border);border-radius:var(--aksara-control-radius,.625rem);height:42px;min-height:42px;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:border-color var(--aksara-duration,.18s) var(--aksara-ease,ease),box-shadow var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  // Textareas grow vertically only: a horizontal drag would break the layout. The selector
  // outranks the `resize` / `resize-x` utilities; `resize-none` still turns resizing off.
  // Never smaller than one row: one line plus the control's padding and border.
  addRaw(
    "textarea.form-control",
    "height:auto;min-height:calc(1.5em + 1rem + 2px);min-height:max(42px,calc(1lh + 1rem + 2px));resize:vertical"
  );
  // Small / large controls: one row at their own height.
  // Per size: never shorter than the matching input, and always tall enough for one full line
  // (line + vertical padding + border), so a one-row textarea lines up with an input.
  for (const [size, height, paddingY] of [
    ["xs", 26, ".1875rem"],
    ["sm", 31, ".25rem"],
    ["md", 42, ".5rem"],
    ["lg", 48, ".75rem"],
    ["xl", 56, ".875rem"],
    ["2xl", 64, "1rem"]
  ] as const) {
    addRaw(
      `textarea.form-control.form-control-${size}`,
      // Vertical padding shrinks just enough for one line to fit the input height (lg and up
      // would otherwise be a few px taller than their input); the minimum is that height.
      `padding-block:min(${paddingY},max(0px,calc((${height}px - 1lh - 2px) / 2)));min-height:${height}px`
    );
  }
  addRaw("textarea.form-control:not([class*='form-control-'])", "min-height:42px");
  addRaw("textarea.form-control.resize-none,textarea.resize-none", "resize:none");
  addRaw(".form-control::placeholder,.form-select::placeholder", "color:var(--aksara-text-body-tertiary);opacity:1");
  addRaw(
    ".form-control:hover:not(:focus):not(:disabled),.form-select:hover:not(:focus):not(:disabled)",
    "border-color:var(--aksara-border-strong)"
  );
  addRaw(
    ".form-control:disabled,.form-select:disabled,.form-control[readonly]",
    "background-color:var(--aksara-bg-body-secondary);color:var(--aksara-text-subtle);box-shadow:none"
  );
  addRaw(".form-control:disabled,.form-select:disabled", "cursor:not-allowed;opacity:1");
  addRaw(
    "[data-theme='dark'] .form-select,.dark .form-select",
    "background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%2375716b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")"
  );
  add(
    "form-label",
    "display:inline-block;margin-block-end:.375rem;color:var(--aksara-text-body);font-size:.875rem;font-weight:600"
  );
  add("form-text", "display:block;margin-block-start:.375rem;color:var(--aksara-text-subtle);font-size:.8125rem");
  add(
    "form-error",
    "display:block;margin-block-start:.375rem;color:color-mix(in srgb,rgb(var(--aksara-danger)) 85%,var(--aksara-text-body));font-size:.8125rem"
  );
  add("form-group", "position:relative;margin-block-end:1rem");
  // Feedback emitted by the FormFeedback string component and by `data-validate` forms.
  add(
    "invalid-feedback",
    "display:block;margin-block-start:.375rem;color:color-mix(in srgb,rgb(var(--aksara-danger)) 85%,var(--aksara-text-body));font-size:.8125rem"
  );
  add(
    "valid-feedback",
    "display:block;margin-block-start:.375rem;color:color-mix(in srgb,rgb(var(--aksara-success)) 85%,var(--aksara-text-body));font-size:.8125rem"
  );
  addRaw(
    ".invalid-tooltip,.valid-tooltip",
    "position:absolute;z-index:5;inset-block-start:100%;inset-inline-start:0;max-width:100%;margin-block-start:.25rem;padding:.25rem .5rem;border-radius:var(--aksara-radius-sm);font-size:.75rem;font-weight:500;box-shadow:var(--aksara-shadow-md)"
  );
  add("invalid-tooltip", `background:rgb(var(--aksara-danger));color:${solidForeground("danger")}`);
  add("valid-tooltip", `background:rgb(var(--aksara-success));color:${solidForeground("success")}`);
  add("form-check", "display:flex;align-items:center;gap:.5rem");
  add("form-radio", "display:flex;align-items:center;gap:.5rem");
  add("form-switch", "display:flex;align-items:center;gap:.5rem");
  add("form-file", "display:block;width:100%");
  add(
    "form-range",
    "--aksara-range-progress:50%;display:block;width:100%;height:1.25rem;margin:0;padding:0;background:transparent;-webkit-appearance:none;appearance:none;cursor:pointer"
  );
  addRaw(".form-range:focus", "outline:0");
  addRaw(
    ".form-range::-webkit-slider-runnable-track",
    "height:.375rem;border-radius:9999px;background:linear-gradient(to right,rgb(var(--aksara-primary)) var(--aksara-range-progress),var(--aksara-bg-subtle) var(--aksara-range-progress));box-shadow:inset 0 0 0 1px var(--aksara-border-subtle)"
  );
  addRaw(
    "[dir='rtl'] .form-range::-webkit-slider-runnable-track",
    "background:linear-gradient(to left,rgb(var(--aksara-primary)) var(--aksara-range-progress),var(--aksara-bg-subtle) var(--aksara-range-progress))"
  );
  addRaw(
    ".form-range::-webkit-slider-thumb",
    "-webkit-appearance:none;appearance:none;inline-size:1.125rem;block-size:1.125rem;margin-block-start:-.375rem;border:2px solid rgb(var(--aksara-primary));border-radius:50%;background:var(--aksara-surface);transition:transform .15s ease"
  );
  addRaw(".form-range:active::-webkit-slider-thumb", "transform:scale(1.12)");
  addRaw(".form-range:focus-visible::-webkit-slider-thumb", "box-shadow:var(--aksara-ring)");
  addRaw(".form-range::-moz-range-track", "height:.375rem;border-radius:9999px;background:var(--aksara-bg-subtle)");
  addRaw(
    ".form-range::-moz-range-progress",
    "height:.375rem;border-radius:9999px;background:rgb(var(--aksara-primary))"
  );
  addRaw(
    ".form-range::-moz-range-thumb",
    "inline-size:.875rem;block-size:.875rem;border:2px solid rgb(var(--aksara-primary));border-radius:50%;background:var(--aksara-surface)"
  );
  addRaw(".form-range:focus-visible::-moz-range-thumb", "box-shadow:var(--aksara-ring)");
  addRaw(".form-range:disabled", "opacity:.5;cursor:not-allowed");
  // File inputs: the native button becomes a quiet segment inside the field.
  addRaw("input[type='file'].form-control", "padding-block:0;padding-inline-start:0;line-height:40px;cursor:pointer");
  addRaw(
    "input[type='file'].form-control::file-selector-button",
    "height:100%;margin-inline-end:.875rem;padding:0 .875rem;border:0;border-inline-end:1px solid var(--aksara-border);background:var(--aksara-bg-body-secondary);color:var(--aksara-text-body);font:inherit;font-weight:600;cursor:pointer;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw("input[type='file'].form-control:hover::file-selector-button", "background:var(--aksara-bg-subtle)");
  add(
    "form-dropzone",
    "position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.375rem;padding:1.75rem 1.25rem;border:1.5px dashed var(--aksara-border-strong);border-radius:var(--aksara-radius);background:var(--aksara-bg-body-secondary);color:var(--aksara-text-subtle);font-size:.875rem;text-align:center;cursor:pointer;transition:border-color var(--aksara-duration,.18s) var(--aksara-ease,ease),background-color var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(
    ".form-dropzone input[type='file']",
    "position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer"
  );
  addRaw(
    ".form-dropzone:hover,.form-dropzone.is-dragover,.form-dropzone:focus-within",
    "border-color:rgb(var(--aksara-primary)/.6);background:rgb(var(--aksara-primary)/.04)"
  );
  addRaw(".form-dropzone:focus-within", "box-shadow:var(--aksara-ring)");
  addRaw(".form-dropzone .mdi", "font-size:1.75rem;color:var(--aksara-text-body-tertiary)");
  add("form-dropzone-title", "color:var(--aksara-text-body);font-weight:600");
  add("form-dropzone-files", "color:var(--aksara-text-body);font-weight:500");
  addRaw(".form-dropzone-files:empty", "display:none");
  add(
    "form-control-plaintext",
    "display:block;width:100%;min-height:42px;padding:.5rem 0;margin:0;border:solid transparent;border-width:1px 0;background:transparent;color:var(--aksara-text-body);font-size:.9375rem;line-height:1.5;outline:0"
  );
  add("form-control-color", "inline-size:3.25rem;padding:.3125rem;cursor:pointer");
  addRaw(".form-control-color::-webkit-color-swatch-wrapper", "padding:0");
  addRaw(
    ".form-control-color::-webkit-color-swatch",
    "border:0;border-radius:calc(var(--aksara-control-radius,.625rem) - 4px)"
  );
  addRaw(
    ".form-control-color::-moz-color-swatch",
    "border:0;border-radius:calc(var(--aksara-control-radius,.625rem) - 4px)"
  );
  // Inputs with icons: `.form-icon` wraps the field and absolutely placed start/end slots.
  add("form-icon", "position:relative;display:block;width:100%");
  addRaw(
    ".form-icon-start,.form-icon-end",
    "position:absolute;z-index:4;inset-block:0;display:flex;align-items:center;justify-content:center;inline-size:2.5rem;color:var(--aksara-text-body-tertiary);font-size:1.125rem;line-height:1;pointer-events:none"
  );
  add("form-icon-start", "inset-inline-start:0");
  add("form-icon-end", "inset-inline-end:0");
  addRaw(
    "button.form-icon-start,button.form-icon-end,a.form-icon-end",
    "padding:0;border:0;background:transparent;color:var(--aksara-text-subtle);cursor:pointer;pointer-events:auto;border-radius:var(--aksara-control-radius,.625rem);transition:color .15s ease"
  );
  addRaw("button.form-icon-start:hover,button.form-icon-end:hover", "color:var(--aksara-text-body)");
  addRaw(
    "button.form-icon-end:focus-visible,button.form-icon-start:focus-visible",
    "outline:0;box-shadow:var(--aksara-ring)"
  );
  addRaw(".form-icon:has(>.form-icon-start)>.form-control", "padding-inline-start:2.5rem");
  addRaw(".form-icon:has(>.form-icon-end)>.form-control", "padding-inline-end:2.5rem");
  addRaw(".form-icon:focus-within>.form-icon-start", "color:rgb(var(--aksara-primary))");
  addRaw(".input-group>.form-icon", "flex:1 1 auto;width:1%;min-width:0");
  // Horizontal forms: the label is as tall as a control and centers its text, so it lines
  // up with inputs, selects, plaintext and check/radio/switch rows (all 42px), and with the
  // first line of a textarea.
  add(
    "col-form-label",
    "display:flex;align-self:flex-start;align-items:center;min-height:42px;margin-block-end:0;padding-block:0;color:var(--aksara-text-body);font-size:.875rem;font-weight:600;line-height:1.35"
  );
  for (const [size, height] of [
    ["xs", 26],
    ["sm", 31],
    ["lg", 48],
    ["xl", 56],
    ["2xl", 64]
  ] as const) {
    add(`col-form-label-${size}`, `min-height:${height}px`);
  }
  addRaw(".form-label.required::after,.col-form-label.required::after", 'content:" *";color:rgb(var(--aksara-danger))');
  add("form-label-hint", "margin-inline-start:.25rem;color:var(--aksara-text-body-tertiary);font-weight:400");
  add(
    "form-counter",
    "display:block;margin-block-start:.375rem;color:var(--aksara-text-body-tertiary);font-size:.75rem;font-variant-numeric:tabular-nums;text-align:end"
  );
  addRaw(".form-counter.is-limit", "color:rgb(var(--aksara-danger))");
  add(
    "form-fieldset",
    "margin:0;padding:1.25rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius);background:var(--aksara-surface)"
  );
  add(
    "form-legend",
    "float:left;width:100%;margin:0 0 1rem;padding:0;font-size:.9375rem;font-weight:650;color:var(--aksara-text-body)"
  );
  addRaw(".form-legend+*", "clear:left");
  add(
    "form-actions",
    "display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:.5rem;margin-block-start:1.25rem;padding-block-start:1.25rem;border-block-start:1px solid var(--aksara-border-subtle)"
  );
  // Selectable cards: a radio or checkbox inside a bordered label.
  add(
    "form-check-card",
    "position:relative;display:flex;align-items:flex-start;gap:.75rem;padding:1rem;border:1px solid var(--aksara-border);border-radius:var(--aksara-radius-md);background:var(--aksara-surface);cursor:pointer;transition:border-color var(--aksara-duration,.18s) var(--aksara-ease,ease),background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),box-shadow var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(".form-check-card:hover", "border-color:var(--aksara-border-strong)");
  addRaw(
    ".form-check-card:has(input:checked)",
    "border-color:rgb(var(--aksara-primary)/.65);background:rgb(var(--aksara-primary)/.04);box-shadow:0 0 0 1px rgb(var(--aksara-primary)/.65)"
  );
  addRaw(".form-check-card:has(input:focus-visible)", "box-shadow:var(--aksara-ring)");
  addRaw(".form-check-card:has(input:disabled)", "opacity:.55;cursor:not-allowed");
  addRaw(".form-check-card>input", "margin-block-start:.125rem!important");
  add("form-check-card-body", "display:flex;flex-direction:column;gap:.125rem;flex:1 1 auto;min-width:0");
  add("form-check-card-title", "color:var(--aksara-text-body);font-size:.9375rem;font-weight:600;line-height:1.4");
  add("form-check-card-text", "color:var(--aksara-text-subtle);font-size:.8125rem;line-height:1.5");
  add("form-check-card-hidden", "");
  addRaw(".form-check-card-hidden>input", "position:absolute;opacity:0;pointer-events:none");
  // Toggle buttons: a visually hidden radio/checkbox followed by a `.btn`.
  add("btn-check", "position:absolute;clip:rect(0,0,0,0);pointer-events:none");
  addRaw(".btn-check:focus-visible+.btn", "box-shadow:var(--aksara-ring)");
  addRaw(".btn-check:disabled+.btn", "opacity:.5;pointer-events:none");
  addRaw(
    ".btn-check:checked+.btn-plain,.btn-check:checked+.btn-ghost,.btn-check:checked+.btn-subtle",
    "background:var(--aksara-bg-subtle);border-color:var(--aksara-border-strong);color:var(--aksara-text-body);box-shadow:inset 0 1px 2px rgb(0 0 0/.06)"
  );
  for (const name of Object.keys(colors)) {
    addRaw(
      `.btn-check:checked+.btn-outline-${name},.btn-check:checked+.btn-soft-${name}`,
      `color:${solidForeground(name)};background-color:${colorValue(name)};border-color:${colorValue(name)}`
    );
  }
  // Input group: the group itself is the field (border, radius, background, focus ring); its
  // members are transparent and borderless, so addons and inputs read as one control.
  // Buttons sit inset inside the field and always match its height.
  add(
    "input-group",
    "position:relative;display:flex;align-items:stretch;width:100%;min-height:42px;border:1px solid var(--aksara-border);border-radius:var(--aksara-control-radius,.625rem);background:var(--aksara-surface);transition:border-color var(--aksara-duration,.18s) var(--aksara-ease,ease),box-shadow var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(".input-group:hover:not(:focus-within)", "border-color:var(--aksara-border-strong)");
  addRaw(".input-group:focus-within", "border-color:rgb(var(--aksara-primary)/.7);box-shadow:var(--aksara-ring)");
  addRaw(".input-group:has(.is-invalid)", "border-color:rgb(var(--aksara-danger)/.7)");
  addRaw(
    ".input-group:has(.is-invalid):focus-within",
    "border-color:rgb(var(--aksara-danger));box-shadow:0 0 0 var(--aksara-ring-width,3px) rgb(var(--aksara-danger)/.18)"
  );
  addRaw(".input-group:has(.is-valid)", "border-color:rgb(var(--aksara-success)/.7)");
  addRaw(
    ".input-group:has(>.form-control:disabled),.input-group:has(>.form-select:disabled)",
    "background:var(--aksara-bg-body-secondary);box-shadow:none"
  );
  add(
    "input-group-text",
    "display:flex;align-items:center;gap:.375rem;padding:0 .875rem;font-size:.9375rem;font-weight:500;line-height:1.5;color:var(--aksara-text-subtle);text-align:center;white-space:nowrap;background:transparent;border:0"
  );
  addRaw(".input-group-text+.form-control,.input-group-text+.form-icon>.form-control", "padding-inline-start:0");
  addRaw(".form-control+.input-group-text", "padding-inline-start:0");
  addRaw(
    ".input-group>.form-control,.input-group>.form-select,.input-group>.form-icon>.form-control",
    "position:relative;flex:1 1 auto;width:1%;min-width:0;height:auto;min-height:0;margin:0;border:0;border-radius:0;background-color:transparent;box-shadow:none"
  );
  addRaw(
    ".input-group>.form-control:focus,.input-group>.form-select:focus,.input-group>.form-icon>.form-control:focus",
    "box-shadow:none;border:0"
  );
  addRaw(".input-group>.form-control:disabled,.input-group>.form-control[readonly]", "background-color:transparent");
  // Buttons: inset pills. Plain/ghost/subtle buttons blend into the field.
  addRaw(
    ".input-group>.btn,.input-group>.dropdown>.btn",
    "position:relative;z-index:1;align-self:stretch;min-height:0;height:auto;margin:3px;padding-block:0;border-radius:calc(var(--aksara-control-radius,.625rem) - 3px);box-shadow:none"
  );
  addRaw(".input-group>.dropdown", "display:flex;align-items:stretch");
  addRaw(
    ".input-group>.btn-plain,.input-group>.btn-ghost,.input-group>.dropdown>.btn-plain,.input-group>.dropdown>.btn-ghost",
    "border-color:transparent;background:transparent;color:var(--aksara-text-subtle)"
  );
  addRaw(
    ".input-group>.btn-plain:hover,.input-group>.btn-ghost:hover,.input-group>.dropdown>.btn-plain:hover,.input-group>.dropdown>.btn-ghost:hover",
    "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)"
  );
  // Icon buttons inside a field: square to the field height (42px − 2×3px margin), whatever
  // btn size class they carry, with the icon centred.
  addRaw(
    ".input-group>.btn.btn-icon,.input-group>.dropdown>.btn.btn-icon",
    "inline-size:auto;block-size:auto;aspect-ratio:auto;min-inline-size:36px;padding-inline:.5rem;justify-content:center"
  );
  addRaw(".input-group>.btn:focus-visible", "z-index:2");
  // Sizes: the group sets the height; members fill it.
  for (const [size, height, font, padX, radius] of [
    ["xs", 26, ".75rem", ".375rem", "var(--aksara-radius-sm)"],
    ["sm", 31, ".875rem", ".5rem", "var(--aksara-radius-sm)"],
    ["lg", 48, "1.0625rem", "1rem", "var(--aksara-radius-md,.75rem)"],
    ["xl", 56, "1.25rem", "1.125rem", "var(--aksara-radius-md,.75rem)"],
    ["2xl", 64, "1.5rem", "1.25rem", "var(--aksara-radius-lg,1rem)"]
  ] as const) {
    add(`input-group-${size}`, `min-height:${height}px;border-radius:${radius}`);
    addRaw(
      `.input-group-${size}>.form-control,.input-group-${size}>.form-select,.input-group-${size}>.input-group-text,.input-group-${size}>.btn`,
      `font-size:${font};padding-inline:${padX}`
    );
    addRaw(`.input-group-${size}>.btn`, `border-radius:calc(${radius} - 3px)`);
    addRaw(`.input-group-${size}>.btn.btn-icon`, `min-inline-size:${height - 6}px;padding-inline:0`);
  }
  add("input-group-md", "");
  add("is-valid", "border-color:rgb(var(--aksara-success)/.7)");
  add("is-invalid", "border-color:rgb(var(--aksara-danger)/.7)");
  addRaw(
    ".is-valid:focus,.form-control.is-valid:focus,.form-select.is-valid:focus",
    "border-color:rgb(var(--aksara-success));box-shadow:0 0 0 var(--aksara-ring-width,3px) rgb(var(--aksara-success)/.18)"
  );
  addRaw(
    ".is-invalid:focus,.form-control.is-invalid:focus,.form-select.is-invalid:focus",
    "border-color:rgb(var(--aksara-danger));box-shadow:0 0 0 var(--aksara-ring-width,3px) rgb(var(--aksara-danger)/.18)"
  );
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
    "color:var(--aksara-text-body);border-color:rgb(var(--aksara-primary)/.7);box-shadow:var(--aksara-ring);outline:0"
  );
  // Checks, radios and switches share the height of .form-control (and its sizes), so a row
  // mixing them with text inputs or selects lines up and does not shift when a field appears.
  addRaw(
    ".form-check,.form-switch,.form-radio",
    "display:inline-flex;align-items:center;gap:.5rem;min-height:42px;line-height:1.5;margin-bottom:0"
  );
  for (const [size, height] of [
    ["xs", 26],
    ["sm", 31],
    ["md", 42],
    ["lg", 48],
    ["xl", 56],
    ["2xl", 64]
  ] as const) {
    addRaw(
      [".form-check", ".form-switch", ".form-radio"].map((base) => `${base}-${size},${base}${base}-${size}`).join(","),
      `min-height:${height}px;height:${height}px;line-height:1.5`
    );
  }
  addRaw(
    ".form-check-label",
    "cursor:pointer;color:var(--aksara-text-body);font-size:.875rem;line-height:1.4;user-select:none"
  );
  addRaw(
    ".form-check-input:not(.form-switch *),.form-check input:not(.form-switch *),.form-radio input",
    "appearance:none;-webkit-appearance:none;position:relative;display:inline-block;width:1.125rem;height:1.125rem;background-color:var(--aksara-surface);border:1.5px solid color-mix(in srgb,var(--aksara-text-body) 30%,transparent);border-radius:.375rem;cursor:pointer;outline:0;padding:0;margin:0;vertical-align:middle;flex-shrink:0;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),border-color var(--aksara-duration,.18s) var(--aksara-ease,ease),box-shadow var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(
    ".form-check-input:not(.form-switch *):hover:not(:checked):not(:disabled),.form-check input:not(.form-switch *):hover:not(:checked):not(:disabled),.form-radio input:hover:not(:checked):not(:disabled)",
    "border-color:rgb(var(--aksara-primary)/.6)"
  );
  addRaw(
    ".form-check-input:not(.form-switch *):focus,.form-check input:not(.form-switch *):focus,.form-radio input:focus",
    "border-color:rgb(var(--aksara-primary));box-shadow:var(--aksara-ring)"
  );
  addRaw(
    ".form-check-input[type='checkbox']:not(.form-switch *):checked,.form-check input[type='checkbox']:not(.form-switch *):checked,.form-check-input:not([type]):not(.form-switch *):checked",
    "background-color:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary))"
  );
  addRaw(
    ".form-check-input[type='checkbox']:not(.form-switch *):indeterminate,.form-check input[type='checkbox']:not(.form-switch *):indeterminate",
    "background-color:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary))"
  );
  addRaw(".form-check-input[type='radio'],.form-radio input[type='radio'],.form-radio input", "border-radius:50%");
  addRaw(
    ".form-check-input[type='radio']:checked,.form-radio input[type='radio']:checked,.form-radio input:checked",
    "background-color:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary))"
  );
  // Glyphs are masks filled with the primary's foreground, so they stay visible when a theme
  // makes the primary light (dark mode) and the fill dark text.
  addRaw(
    ".form-check-input[type='checkbox']:not(.form-switch *):checked::before,.form-check input[type='checkbox']:not(.form-switch *):checked::before,.form-check-input:not([type]):not(.form-switch *):checked::before",
    `content:"";position:absolute;inset:-1.5px;background-color:var(--aksara-primary-foreground,#fff);-webkit-mask:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' d='M3 8.5l3.5 3.5 6.5-6.5'/%3e%3c/svg%3e") center/100% 100% no-repeat;mask:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' d='M3 8.5l3.5 3.5 6.5-6.5'/%3e%3c/svg%3e") center/100% 100% no-repeat`
  );
  addRaw(
    ".form-check-input[type='checkbox']:not(.form-switch *):indeterminate::before,.form-check input[type='checkbox']:not(.form-switch *):indeterminate::before",
    `content:"";position:absolute;inset:-1.5px;background-color:var(--aksara-primary-foreground,#fff);-webkit-mask:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' d='M3.5 8h9'/%3e%3c/svg%3e") center/100% 100% no-repeat;mask:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' d='M3.5 8h9'/%3e%3c/svg%3e") center/100% 100% no-repeat`
  );
  addRaw(
    ".form-check-input[type='radio']:checked::before,.form-radio input[type='radio']:checked::before,.form-radio input:checked::before",
    `content:"";position:absolute;inset:-1.5px;background-color:var(--aksara-primary-foreground,#fff);-webkit-mask:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3ccircle cx='8' cy='8' r='3.5' fill='black'/%3e%3c/svg%3e") center/100% 100% no-repeat;mask:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3ccircle cx='8' cy='8' r='3.5' fill='black'/%3e%3c/svg%3e") center/100% 100% no-repeat`
  );
  addRaw(
    ".form-check-input:disabled,.form-check input:disabled,.form-radio input:disabled",
    "opacity:.5;cursor:not-allowed"
  );
  addRaw(
    ".form-switch input,.form-switch .form-check-input",
    "appearance:none;-webkit-appearance:none;position:relative;display:inline-block;width:2.5rem;height:1.375rem;border-radius:9999px;background-color:color-mix(in srgb,var(--aksara-text-body) 24%,transparent);cursor:pointer;outline:0;border:0;padding:0;margin:0;vertical-align:middle;flex-shrink:0;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),box-shadow var(--aksara-duration,.18s) var(--aksara-ease,ease)"
  );
  addRaw(
    ".form-switch input::before,.form-switch .form-check-input::before",
    'content:"";position:absolute;top:2px;left:2px;width:calc(1.375rem - 4px);height:calc(1.375rem - 4px);border-radius:50%;background-color:#ffffff;transition:transform .25s var(--aksara-ease,ease)'
  );
  addRaw(
    ".form-switch input:checked,.form-switch .form-check-input:checked",
    "background-color:rgb(var(--aksara-primary))"
  );
  addRaw(
    ".form-switch input:checked::before,.form-switch .form-check-input:checked::before",
    "transform:translateX(1.125rem);background-color:var(--aksara-primary-foreground,#fff)"
  );
  addRaw(
    ".form-switch input:focus-visible,.form-switch .form-check-input:focus-visible",
    "box-shadow:var(--aksara-ring)"
  );
  addRaw(
    "[dir='rtl'] .form-switch input:checked::before,[dir='rtl'] .form-switch .form-check-input:checked::before",
    "transform:translateX(-1.125rem)"
  );
  addRaw(
    "[dir='rtl'] .form-switch input::before,[dir='rtl'] .form-switch .form-check-input::before",
    "left:auto;right:2px"
  );
  addRaw(".form-switch input:disabled,.form-switch .form-check-input:disabled", "opacity:.5;cursor:not-allowed");
  add("ratio", "--aksara-aspect-ratio:56.25%;position:relative;width:100%");
  addRaw(".ratio::before", 'display:block;padding-block-start:var(--aksara-aspect-ratio,56.25%);content:""');
  addRaw(".ratio>*", "position:absolute;inset:0;width:100%;height:100%");
  add("ratio-1x1", "--aksara-aspect-ratio:100%");
  add("ratio-4x3", "--aksara-aspect-ratio:75%");
  add("ratio-16x9", "--aksara-aspect-ratio:56.25%");
  add("ratio-21x9", "--aksara-aspect-ratio:42.8571428571%");
  add("ratio-3x2", "--aksara-aspect-ratio:66.6666666667%");
  add("ratio-2x1", "--aksara-aspect-ratio:50%");
  add("ratio-3x4", "--aksara-aspect-ratio:133.3333333333%");
  add("ratio-9x16", "--aksara-aspect-ratio:177.7777777778%");
  addRaw(".ratio>img,.ratio>video", "object-fit:cover");
  addRaw(".ratio>iframe", "border:0");
  // Stacks set only their direction; the default gap and alignment live in `:where()` (zero
  // specificity), so `gap-*`, `items-*` and their responsive forms always win, also over the
  // responsive `{bp}:hstack` / `{bp}:vstack` copies emitted late in the stylesheet.
  add("hstack", "display:flex;flex-direction:row");
  add("vstack", "display:flex;flex-direction:column;align-self:stretch");
  addRaw(":where(.hstack,.vstack)", "--aksara-stack-gap:1rem;gap:var(--aksara-stack-gap,1rem)");
  addRaw(":where(.hstack)", "align-items:center");
  for (const [bp, minWidth] of Object.entries(breakpoints)) {
    const h = `.${escapeClass(`${bp}:hstack`)}`;
    const v = `.${escapeClass(`${bp}:vstack`)}`;
    rules.push(
      `@media (min-width:${minWidth}){:where(${h},${v}){--aksara-stack-gap:1rem;gap:var(--aksara-stack-gap,1rem)}:where(${h}){align-items:center}:where(${v}){align-items:normal}}`
    );
  }
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
  addRaw(".media-grid-item img,.media-grid-img", "width:100%;height:100%;object-fit:cover;display:block");
  addRaw(".media-grid-1 .media-grid-item", "aspect-ratio:16/9");
  addRaw(".media-grid-item.has-overlay,.media-grid-item[data-media-index]", "cursor:pointer");
  add("media-grid-overlay-text", "color:#fff;font-size:1.5rem;font-weight:700;letter-spacing:-.01em");
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
    "display:inline-flex;align-items:center;justify-content:center;position:relative;width:2.5rem;height:2.5rem;font-size:1rem;font-weight:650;line-height:1;overflow:visible;user-select:none;flex-shrink:0;border-color:var(--aksara-avatar-ring,var(--aksara-surface))"
  );
  add("avatar-xs", "width:1.5rem;height:1.5rem;font-size:.6875rem");
  add("avatar-sm", "width:2rem;height:2rem;font-size:.8125rem");
  add("avatar-md", "width:2.5rem;height:2.5rem;font-size:1rem");
  add("avatar-lg", "width:3.25rem;height:3.25rem;font-size:1.25rem");
  add("avatar-xl", "width:4rem;height:4rem;font-size:1.5rem");
  add("avatar-2xl", "width:6rem;height:6rem;font-size:2.25rem");
  add("avatar-3xl", "width:7.5rem;height:7.5rem;font-size:3rem");
  addRaw(".avatar img,.avatar-img", "width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit");
  // A bare `.avatar` is a neutral circle; color (`avatar-*`, `bg-*`) and shape (`rounded-*`) classes win.
  addRaw(
    ":where(.avatar)",
    "border-radius:9999px;background-color:color-mix(in srgb,var(--aksara-text-body) 9%,var(--aksara-surface));color:var(--aksara-text-subtle)"
  );
  addRaw(
    ".avatar .avatar-initials,.avatar .avatar-fallback",
    "width:100%;height:100%;display:inline-flex;align-items:center;justify-content:center;border-radius:inherit"
  );
  addRaw(
    ".avatar-status",
    "position:absolute;bottom:0;right:0;border-radius:9999px;border:2px solid var(--aksara-avatar-ring,var(--aksara-surface));z-index:2;box-sizing:content-box"
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
  // Groups and stacks align avatars by their centers (image and initials alike) and ring them
  // in --aksara-avatar-ring, the color of the surface they sit on (cards by default).
  addRaw(".avatar-group", "display:inline-flex;align-items:center;vertical-align:middle");
  addRaw(".avatar-group .avatar", "border:2px solid var(--aksara-avatar-ring,var(--aksara-surface))");
  // Zero specificity, so `bg-*` utilities on an avatar win inside groups.
  addRaw(":where(.avatar-group .avatar)", "background:var(--aksara-bg-subtle)");
  addRaw(".avatar-group .avatar:not(:first-child)", "margin-inline-start:-.625rem");
  addRaw(".avatar-stack", "display:inline-flex;align-items:center;vertical-align:middle");
  // Opaque tinted avatars: the tint is mixed into the surface color, so overlapping avatars in
  // groups and stacks never show through each other (unlike `bg-primary/15`).
  for (const name of Object.keys(colors)) {
    add(
      `avatar-${name}`,
      `background-color:color-mix(in srgb,rgb(var(--aksara-${name})) 16%,var(--aksara-surface));color:${softText(name)}`
    );
  }
  addRaw(":where(.avatar-stack .avatar)", "background:var(--aksara-bg-subtle)");
  addRaw(
    ".avatar-stack > :not(:first-child),.avatar-stack .avatar-stack-item:not(:first-child)",
    "margin-inline-start:-.75rem"
  );
  addRaw(
    ".avatar-stack .avatar-stack-item,.avatar-stack > *",
    "position:relative;border:2px solid var(--aksara-avatar-ring,var(--aksara-surface));border-radius:9999px;transition:transform .15s ease,z-index .15s ease"
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
  // Padded so rounded items never touch the pane edge.
  add("sidebar-nav", "display:flex;flex-direction:column;gap:.125rem;margin:0;padding:.5rem;list-style:none");
  add(
    "sidebar-nav-item",
    "display:flex;align-items:center;gap:.625rem;width:100%;border:0;border-radius:var(--aksara-radius-sm);padding:.5rem .75rem;background:transparent;color:var(--aksara-text-subtle);font:inherit;font-weight:500;font-size:.875rem;text-align:start;text-decoration:none;cursor:pointer;transition:background-color var(--aksara-duration,.18s) var(--aksara-ease,ease),color var(--aksara-duration,.18s) var(--aksara-ease,ease);line-height:1.35"
  );
  add(
    "sidebar-nav-header",
    "display:block;padding:1rem .75rem .375rem;font-size:.6875rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--aksara-text-body-tertiary);user-select:none"
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
  add(
    "sidebar-nav-brand-title",
    "font-weight:700;font-size:.9375rem;line-height:1.25;letter-spacing:-.01em;color:var(--aksara-text-body)"
  );
  add(
    "sidebar-nav-brand-subtitle",
    "display:block;font-size:.75rem;font-weight:400;color:var(--aksara-text-subtle);margin-block-start:.0625rem;line-height:1.3"
  );
  addRaw(".sidebar-nav-item:hover", "background:var(--aksara-bg-subtle);color:var(--aksara-text-body)");
  addRaw(
    '.sidebar-nav-item.active,.sidebar-nav-item[aria-selected="true"],.sidebar-nav-item[aria-current="page"]',
    "background:rgb(var(--aksara-primary)/.1);color:color-mix(in srgb,rgb(var(--aksara-primary)) 78%,var(--aksara-text-body));font-weight:600"
  );
  addRaw(".sidebar-nav-item:disabled,.sidebar-nav-item.disabled", "opacity:.5;pointer-events:none");

  // ── Sidebar Layout ─────────────────────────────────────────────────────────
  add("sidebar-layout", "display:flex;min-height:0;gap:0");
  add("sidebar-pane", "flex-shrink:0;width:14rem;border-inline-end:1px solid var(--aksara-border-subtle)");
  add("sidebar-content", "flex:1 1 auto;min-width:0;overflow:auto");

  // ── Empty State ────────────────────────────────────────────────────────────
  add("empty-state", "padding:3rem 1.5rem;text-align:center;margin:1rem auto");
  // Tinted from currentColor, so `text-danger` on the wrap recolors fill and halo together.
  add(
    "empty-state-icon-wrap",
    "display:inline-flex;align-items:center;justify-content:center;inline-size:4.5rem;block-size:4.5rem;border-radius:9999px;color:rgb(var(--aksara-primary));background:color-mix(in srgb,currentColor 10%,transparent);box-shadow:0 0 0 8px color-mix(in srgb,currentColor 5%,transparent);font-size:2.25rem;margin-block-end:1.25rem"
  );
  add(
    "empty-state-icon-wrap-sm",
    "inline-size:3.5rem;block-size:3.5rem;font-size:1.75rem;box-shadow:0 0 0 6px color-mix(in srgb,currentColor 5%,transparent)"
  );
  add(
    "empty-state-icon-wrap-lg",
    "inline-size:5.5rem;block-size:5.5rem;font-size:2.75rem;box-shadow:0 0 0 10px color-mix(in srgb,currentColor 5%,transparent)"
  );
  add(
    "empty-state-title",
    "font-weight:650;font-size:1.0625rem;letter-spacing:-.01em;color:var(--aksara-text-body);margin-block-end:.375rem"
  );
  add("empty-state-desc", "color:var(--aksara-text-subtle);font-size:.875rem;line-height:1.5;margin-block-end:1.25rem");
  add("empty-state-actions", "display:flex;align-items:center;justify-content:center;gap:.5rem;flex-wrap:wrap");

  // ── User Item / Row ────────────────────────────────────────────────────────
  add(
    "user-item",
    "display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.75rem 1rem;border-block-end:1px solid var(--aksara-border-subtle);transition:background .15s ease"
  );
  add("user-item-info", "flex:1 1 auto;min-width:0");
  add("user-item-name", "font-weight:600;font-size:.875rem;color:var(--aksara-text-body);line-height:1.3");
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
    "display:flex;align-items:center;gap:.625rem;padding:.75rem 1rem;border-radius:var(--aksara-radius-md,0.75rem);font-size:.875rem;font-weight:500;line-height:1.4;pointer-events:auto;background:var(--aksara-tooltip-bg);color:var(--aksara-tooltip-text);backdrop-filter:blur(8px);border:1px solid rgb(255 255 255/.08);box-shadow:var(--aksara-shadow-lg);transition:opacity .25s ease,transform .25s ease;word-break:break-word"
  );
  addRaw(".aksara-toast-pill span", "flex:1 1 auto;min-width:0");
  addRaw(".aksara-toast-pill i,.aksara-toast-pill .mdi", "flex-shrink:0");
  addRaw(
    "@media(max-width:47.99875rem)",
    ".aksara-toast-container{left:1rem;right:1rem;bottom:max(1rem,env(safe-area-inset-bottom,0px));transform:none;width:auto;max-width:calc(100% - 2rem);margin:0 auto}.aksara-toast-pill{width:100%;max-width:100%;box-sizing:border-box}"
  );
  addRaw("@media(min-width:48rem)", ".aksara-toast-container{max-width:32rem}.aksara-toast-pill{max-width:32rem}");
}

/**
 * Theme for Tom Select (https://tom-select.js.org), which `Aksara.init()` applies to every
 * `select.form-select`. Aksara ships the whole skin, so Tom Select's own CSS is not needed.
 * The wrapper inherits the select's classes (`form-select form-select-sm is-invalid`), so
 * the box styles move from the wrapper to `.ts-control`.
 */
export function addSelectEnhancer(): void {
  const E = "var(--aksara-duration,.18s) var(--aksara-ease,ease)";
  addRaw(
    ".ts-hidden-accessible",
    "border:0!important;clip:rect(0 0 0 0)!important;clip-path:inset(50%)!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important;white-space:nowrap!important"
  );
  add("ts-wrapper", "position:relative;display:block;width:100%");
  add("form-select-native", "");
  addRaw(
    'select.form-select[multiple],select.form-select[size]:not([size="1"])',
    "height:auto;padding-inline-end:.875rem;background-image:none"
  );
  addRaw(
    ".ts-wrapper.form-select,.ts-wrapper.form-control",
    "height:auto;min-height:0;padding:0;border:0;background:none;box-shadow:none"
  );
  add(
    "ts-control",
    `position:relative;display:flex;flex-wrap:wrap;align-items:center;gap:.25rem;width:100%;min-height:42px;padding:.375rem 2.25rem .375rem .875rem;overflow:hidden;font-size:.9375rem;line-height:1.5;color:var(--aksara-text-body);background:var(--aksara-surface) url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23a09b94' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e") no-repeat right .75rem center/16px 12px;border:1px solid var(--aksara-border);border-radius:var(--aksara-control-radius,.625rem);cursor:pointer;transition:border-color ${E},box-shadow ${E}`
  );
  addRaw("[dir='rtl'] .ts-control", "padding:.375rem .875rem .375rem 2.25rem;background-position:left .75rem center");
  addRaw(".ts-wrapper:not(.focus):not(.disabled):hover .ts-control", "border-color:var(--aksara-border-strong)");
  addRaw(".ts-wrapper.focus .ts-control", "border-color:rgb(var(--aksara-primary)/.7);box-shadow:var(--aksara-ring)");
  addRaw(".ts-wrapper.dropdown-active .ts-control", "border-color:rgb(var(--aksara-primary)/.7)");
  addRaw(
    ".ts-control>input",
    "flex:1 1 4rem;min-width:4rem;max-width:100%;margin:0;padding:0;border:0;outline:0;background:transparent;box-shadow:none;color:inherit;font:inherit;line-height:inherit"
  );
  addRaw(".ts-control>input::placeholder", "color:var(--aksara-text-body-tertiary);opacity:1");
  addRaw(".ts-wrapper.single.input-active .ts-control", "cursor:text");
  addRaw(".ts-wrapper.single .ts-control>.item", "overflow:hidden;text-overflow:ellipsis;white-space:nowrap");
  addRaw(".ts-wrapper.input-hidden .ts-control>input", "position:absolute;left:-10000px;opacity:0");
  // Multiple: selected values render as soft chips.
  addRaw(".ts-wrapper.multi.has-items .ts-control", "padding-inline-start:.375rem");
  addRaw(
    ".ts-wrapper.multi .ts-control>.item",
    `display:inline-flex;align-items:center;gap:.25rem;max-width:100%;padding:.125rem .5rem;border-radius:.4375rem;background:var(--aksara-bg-subtle);border:1px solid var(--aksara-border-subtle);color:var(--aksara-text-body);font-size:.8125rem;font-weight:500;line-height:1.5;cursor:pointer;transition:background-color ${E},border-color ${E}`
  );
  addRaw(
    ".ts-wrapper.multi .ts-control>.item.active",
    "background:rgb(var(--aksara-primary)/.12);border-color:rgb(var(--aksara-primary)/.3)"
  );
  addRaw(
    ".ts-wrapper .item>.remove",
    "display:inline-flex;align-items:center;justify-content:center;inline-size:1rem;block-size:1rem;margin-inline-end:-.25rem;border-radius:9999px;color:var(--aksara-text-subtle);font-size:.9375rem;line-height:1;text-decoration:none"
  );
  addRaw(".ts-wrapper .item>.remove:hover", "background:rgb(var(--aksara-danger)/.12);color:rgb(var(--aksara-danger))");
  addRaw(
    ".ts-wrapper .clear-button",
    "position:absolute;inset-block:0;inset-inline-end:2.25rem;display:flex;align-items:center;padding:0 .25rem;color:var(--aksara-text-body-tertiary);font-size:1.125rem;line-height:1;cursor:pointer;opacity:0;transition:opacity .15s ease,color .15s ease"
  );
  addRaw(".ts-wrapper.has-items:hover .clear-button,.ts-wrapper.focus.has-items .clear-button", "opacity:1");
  addRaw(".ts-wrapper .clear-button:hover", "color:var(--aksara-text-body)");
  addRaw(".ts-wrapper.plugin-clear_button .ts-control", "padding-inline-end:3.75rem");
  addRaw(
    ".ts-wrapper.disabled .ts-control,.ts-wrapper.locked .ts-control",
    "background-color:var(--aksara-bg-body-secondary);color:var(--aksara-text-subtle);box-shadow:none;cursor:not-allowed"
  );
  addRaw(".ts-wrapper.disabled .ts-control>.item", "opacity:.7");
  addRaw(
    ".ts-wrapper.is-invalid .ts-control,.ts-wrapper.invalid .ts-control",
    "border-color:rgb(var(--aksara-danger)/.7)"
  );
  addRaw(".ts-wrapper.is-valid .ts-control", "border-color:rgb(var(--aksara-success)/.7)");
  addRaw(
    ".ts-wrapper.is-invalid.focus .ts-control,.ts-wrapper.invalid.focus .ts-control",
    "border-color:rgb(var(--aksara-danger));box-shadow:0 0 0 var(--aksara-ring-width,3px) rgb(var(--aksara-danger)/.18)"
  );
  addRaw(
    ".ts-wrapper.is-valid.focus .ts-control",
    "border-color:rgb(var(--aksara-success));box-shadow:0 0 0 var(--aksara-ring-width,3px) rgb(var(--aksara-success)/.18)"
  );
  for (const [size, height, padY, padX, font] of [
    ["xs", 26, ".0625rem", ".375rem", ".75rem"],
    ["sm", 31, ".1875rem", ".5rem", ".875rem"],
    ["lg", 48, ".5rem", "1rem", "1.0625rem"],
    ["xl", 56, ".75rem", "1.125rem", "1.25rem"],
    ["2xl", 64, ".875rem", "1.25rem", "1.5rem"]
  ] as const) {
    addRaw(
      `.ts-wrapper.form-select-${size} .ts-control`,
      `min-height:${height}px;padding-block:${padY};padding-inline-start:${padX};font-size:${font}`
    );
  }
  // Dropdown panel: mounted on <body> so cards and scroll containers never clip it.
  add(
    "ts-dropdown",
    "position:absolute;z-index:1060;box-sizing:border-box;margin-top:.375rem;padding:.375rem;background:var(--aksara-surface-raised);color:var(--aksara-text-body);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-md);box-shadow:var(--aksara-shadow-lg);font-size:.875rem;animation:aksara-pop .16s var(--aksara-ease,ease)"
  );
  add(
    "ts-dropdown-content",
    "max-height:16rem;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;scroll-behavior:smooth"
  );
  addRaw(
    ".ts-dropdown .option,.ts-dropdown .create,.ts-dropdown .no-results,.ts-dropdown .optgroup-header",
    "padding:.5rem .625rem;border-radius:var(--aksara-radius-sm)"
  );
  addRaw(".ts-dropdown .option,.ts-dropdown .create", "position:relative;cursor:pointer");
  addRaw(".ts-dropdown .option.active,.ts-dropdown .create.active", "background:var(--aksara-bg-subtle)");
  addRaw(
    ".ts-dropdown .option.selected",
    "color:color-mix(in srgb,rgb(var(--aksara-primary)) 78%,var(--aksara-text-body));font-weight:600;padding-inline-end:2rem"
  );
  addRaw(
    ".ts-dropdown.single .option.selected::after",
    `content:"";position:absolute;inset-block:0;inset-inline-end:.625rem;margin:auto;inline-size:1rem;block-size:1rem;background:currentColor;-webkit-mask:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' d='M3 8.5l3.5 3.5 6.5-6.5'/%3e%3c/svg%3e") center/contain no-repeat;mask:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' d='M3 8.5l3.5 3.5 6.5-6.5'/%3e%3c/svg%3e") center/contain no-repeat`
  );
  addRaw(".ts-dropdown [data-disabled],.ts-dropdown [data-disabled] *", "opacity:.45;cursor:not-allowed");
  addRaw(
    ".ts-dropdown .optgroup-header",
    "padding-block:.625rem .25rem;color:var(--aksara-text-body-tertiary);font-size:.6875rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;cursor:default"
  );
  addRaw(
    ".ts-dropdown .optgroup+.optgroup",
    "margin-block-start:.25rem;padding-block-start:.25rem;border-block-start:1px solid var(--aksara-border-subtle)"
  );
  addRaw(".ts-dropdown .no-results", "color:var(--aksara-text-subtle);cursor:default");
  addRaw(".ts-dropdown .create", "color:var(--aksara-text-subtle)");
  addRaw(".ts-dropdown .create strong", "color:var(--aksara-text-body)");
  addRaw(".ts-dropdown .highlight", "border-radius:.1875rem;background:rgb(var(--aksara-warning)/.3);color:inherit");
  addRaw(
    ".ts-dropdown .spinner",
    "display:block;inline-size:1.25rem;block-size:1.25rem;margin:.5rem auto;border-width:.15rem"
  );
  addRaw(
    ".ts-dropdown .dropdown-input-wrap",
    "margin:-.375rem -.375rem .375rem;padding:.375rem;border-block-end:1px solid var(--aksara-border-subtle)"
  );
  addRaw(
    ".ts-dropdown .dropdown-input",
    "display:block;width:100%;padding:.4375rem .75rem;border:1px solid var(--aksara-border);border-radius:var(--aksara-radius-sm);background:var(--aksara-surface);color:var(--aksara-text-body);font:inherit;outline:0"
  );
  addRaw(
    ".ts-dropdown .dropdown-input:focus",
    "border-color:rgb(var(--aksara-primary)/.7);box-shadow:var(--aksara-ring)"
  );
  addRaw(".ts-dropdown.plugin-checkbox_options .option", "display:flex;align-items:center;gap:.625rem");
  addRaw(".ts-dropdown.plugin-checkbox_options .option input", "margin:0");
  // Inside an input group the control loses its own rounding on the joined sides.
  addRaw(".input-group>.ts-wrapper", "flex:1 1 auto;width:1%;min-width:0");
  addRaw(
    ".input-group>.ts-wrapper .ts-control",
    "height:100%;min-height:0;border:0;border-radius:0;background-color:transparent;box-shadow:none"
  );
}

/** Bottom sheet with stacked sub-sheets, sheet menus and icon grids, plus the user pill. */
export function addSheets(): void {
  const E = "var(--aksara-duration,.18s) var(--aksara-ease,ease)";
  const slide = "cubic-bezier(.2,.8,.2,1)";
  add(
    "sheet",
    "position:fixed;inset:0;z-index:1055;display:none;overflow:hidden;background:transparent;transition:background-color .3s ease"
  );
  add("sheet-open", "display:block");
  add("sheet-visible", "background:var(--aksara-overlay-bg)");
  add("sheet-stacked", "");
  addRaw(
    ".sheet-static .sheet-panel.is-open:not(.is-behind)",
    "animation:aksara-sheet-bounce .36s cubic-bezier(.36,.07,.19,.97)"
  );
  add(
    "sheet-panel",
    `position:absolute;inset-inline:0;inset-block-end:0;display:flex;flex-direction:column;width:100%;max-width:var(--aksara-sheet-width,36rem);max-height:calc(100% - 2.5rem);margin-inline:auto;padding-block-end:env(safe-area-inset-bottom,0px);background:var(--aksara-surface-raised);color:var(--aksara-text-body);border-radius:1.375rem 1.375rem 0 0;box-shadow:var(--aksara-shadow-lg);outline:0;transform:translateY(100%);transform-origin:50% 0;visibility:hidden;transition:transform .36s ${slide},filter .3s ease,visibility 0s linear .36s`
  );
  // Stacked sheets: each level behind the top one shrinks a little, moves up and dims.
  addRaw(
    ".sheet-panel.is-open",
    `visibility:visible;transform:translateY(calc(var(--aksara-sheet-depth,0) * -.75rem)) scale(calc(1 - var(--aksara-sheet-depth,0) * .05));transition:transform .36s ${slide},filter .3s ease,visibility 0s`
  );
  addRaw(".sheet-panel.is-behind", "filter:brightness(.9);pointer-events:none");
  addRaw(".sheet-panel.is-dragging", "transition:none");
  addRaw(
    "@media(min-width:48rem)",
    ".sheet-panel{inset-block-end:1rem;max-height:calc(100% - 4rem);border-radius:1.375rem}"
  );
  add(
    "sheet-handle",
    "flex-shrink:0;inline-size:2.5rem;block-size:.3125rem;margin:.5rem auto .125rem;border-radius:9999px;background:var(--aksara-border-strong);cursor:grab;touch-action:none"
  );
  add(
    "sheet-header",
    "display:flex;align-items:center;gap:.5rem;min-height:3rem;padding:.375rem 1rem .5rem;touch-action:none"
  );
  add(
    "sheet-title",
    "flex:1 1 auto;min-width:0;margin:0;font-size:1.0625rem;font-weight:650;letter-spacing:-.01em;line-height:1.3"
  );
  add(
    "sheet-subtitle",
    "display:block;margin-block-start:.125rem;color:var(--aksara-text-subtle);font-size:.8125rem;font-weight:400;letter-spacing:0"
  );
  add(
    "sheet-back",
    `display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;inline-size:2rem;block-size:2rem;margin-inline-start:-.375rem;padding:0;border:0;border-radius:9999px;background:transparent;color:var(--aksara-text-body);font-size:1.375rem;cursor:pointer;transition:background-color ${E}`
  );
  addRaw(".sheet-back:hover,.sheet-back:focus-visible", "background:var(--aksara-bg-subtle);outline:0");
  addRaw("[dir='rtl'] .sheet-back>.mdi", "transform:scaleX(-1)");
  add("sheet-body", "flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 .5rem .75rem");
  add(
    "sheet-footer",
    "display:flex;align-items:center;gap:.5rem;padding:.75rem 1rem 1rem;border-block-start:1px solid var(--aksara-border-subtle)"
  );
  addRaw(".sheet-footer>.btn", "flex:1 1 0");
  add(
    "sheet-section-title",
    "padding:.75rem .75rem .375rem;color:var(--aksara-text-body-tertiary);font-size:.6875rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase"
  );
  add("sheet-divider", "height:1px;margin:.375rem .75rem;background:var(--aksara-border-subtle)");
  add(
    "sheet-item",
    `display:flex;align-items:center;gap:.875rem;width:100%;min-height:3rem;padding:.5rem .75rem;border:0;border-radius:var(--aksara-radius-md);background:transparent;color:var(--aksara-text-body);font:inherit;font-size:.9375rem;line-height:1.35;text-align:start;text-decoration:none;cursor:pointer;transition:background-color ${E}`
  );
  addRaw(".sheet-item:hover,.sheet-item:focus-visible", "background:var(--aksara-bg-subtle);outline:0");
  addRaw(".sheet-item:active", "background:var(--aksara-surface-muted)");
  addRaw(
    '.sheet-item.active,.sheet-item[aria-current="page"],.sheet-item[aria-current="true"]',
    "background:rgb(var(--aksara-primary)/.08);color:color-mix(in srgb,rgb(var(--aksara-primary)) 78%,var(--aksara-text-body));font-weight:600"
  );
  add(
    "sheet-item-icon",
    "display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;inline-size:2rem;block-size:2rem;border-radius:.625rem;background:color-mix(in srgb,currentColor 10%,transparent);font-size:1.125rem"
  );
  add("sheet-item-label", "flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap");
  add(
    "sheet-item-text",
    "display:block;margin-block-start:.125rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--aksara-text-subtle);font-size:.8125rem;font-weight:400"
  );
  add("sheet-item-meta", "flex-shrink:0;color:var(--aksara-text-body-tertiary);font-size:.8125rem");
  add("sheet-item-chevron", "flex-shrink:0;color:var(--aksara-text-body-tertiary);font-size:1.25rem;line-height:1");
  addRaw("[dir='rtl'] .sheet-item-chevron", "transform:scaleX(-1)");
  add("sheet-item-danger", "color:color-mix(in srgb,rgb(var(--aksara-danger)) 85%,var(--aksara-text-body))");
  addRaw(".sheet-item-danger:hover", "background:rgb(var(--aksara-danger)/.08)");
  // Icon grid (app launcher / share sheet)
  add(
    "sheet-grid",
    "display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.25rem .125rem;padding:.25rem .25rem .5rem"
  );
  add("sheet-grid-3", "grid-template-columns:repeat(3,minmax(0,1fr))");
  add("sheet-grid-5", "grid-template-columns:repeat(5,minmax(0,1fr))");
  add(
    "sheet-grid-item",
    `display:flex;flex-direction:column;align-items:center;gap:.4375rem;min-width:0;padding:.625rem .125rem;border:0;border-radius:var(--aksara-radius-md);background:transparent;color:var(--aksara-text-body);font:inherit;font-size:.75rem;font-weight:500;line-height:1.25;text-align:center;text-decoration:none;cursor:pointer;transition:background-color ${E}`
  );
  addRaw(".sheet-grid-item:hover,.sheet-grid-item:focus-visible", "background:var(--aksara-bg-subtle);outline:0");
  add(
    "sheet-grid-icon",
    "display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;inline-size:3.5rem;block-size:3.5rem;border-radius:1.125rem;background:color-mix(in srgb,currentColor 12%,var(--aksara-surface-raised));font-size:1.625rem"
  );
  add(
    "sheet-grid-label",
    "display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--aksara-text-body)"
  );

  // User pill: avatar + name + handle in a rounded trigger (opens a menu or a sheet).
  add("user-pill", "position:relative;display:block");
  add(
    "user-pill-trigger",
    `display:flex;align-items:center;gap:.625rem;width:100%;min-width:0;padding:.375rem .75rem .375rem .375rem;border:1px solid var(--aksara-border-subtle);border-radius:9999px;background:var(--aksara-surface);color:var(--aksara-text-body);font:inherit;text-align:start;cursor:pointer;transition:background-color ${E},border-color ${E}`
  );
  addRaw(".user-pill-trigger:hover", "background:var(--aksara-surface-hover);border-color:var(--aksara-border)");
  addRaw(".user-pill-trigger:focus-visible", "outline:0;box-shadow:var(--aksara-ring)");
  add("user-pill-avatar", "flex-shrink:0");
  add("user-pill-meta", "flex:1 1 auto;min-width:0;line-height:1.25");
  add(
    "user-pill-name",
    "display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;font-weight:600"
  );
  add(
    "user-pill-handle",
    "display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--aksara-text-subtle);font-size:.75rem"
  );
  add("user-pill-dots", "flex-shrink:0;color:var(--aksara-text-body-tertiary);font-size:1.25rem;line-height:1");
  add(
    "user-pill-menu",
    "position:absolute;inset-inline:0;inset-block-end:calc(100% + .5rem);z-index:1000;padding:.375rem;background:var(--aksara-surface-raised);border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-md);box-shadow:var(--aksara-shadow-lg)"
  );
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
    "--aksara-surface:rgb(var(--aksara-dark));--aksara-surface-raised:rgb(var(--aksara-dark));--aksara-border:rgb(var(--aksara-light)/.18);--aksara-border-strong:rgb(var(--aksara-light)/.26);--aksara-bg-subtle:rgb(var(--aksara-light)/.06);--aksara-border-subtle:rgb(var(--aksara-light)/.12);--aksara-text-body:rgb(var(--aksara-light));--aksara-text-subtle:rgb(var(--aksara-light)/.72);color:var(--aksara-text-body)";

  // FloatingLabel
  addRaw(".form-floating", "position:relative");
  addRaw(
    ".form-floating>.form-control,.form-floating>.form-select",
    "height:3.5rem;min-height:3.5rem;padding-block:1.625rem .5rem;padding-inline:.875rem;line-height:1.25"
  );
  addRaw(".form-floating>textarea.form-control", "height:auto;min-height:6rem");
  addRaw(
    ".form-floating>label",
    "position:absolute;inset-block-start:0;inset-inline-start:0;z-index:2;max-width:100%;padding:calc(1rem + 1px) calc(.875rem + 1px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--aksara-text-subtle);font-size:.9375rem;line-height:1.25;pointer-events:none;transform-origin:calc(.875rem + 1px) 0;transition:transform .15s ease,opacity .15s ease"
  );
  addRaw("[dir='rtl'] .form-floating>label", "transform-origin:calc(100% - .875rem - 1px) 0");
  addRaw(".form-floating>.form-control::placeholder", "color:transparent");
  addRaw(
    ".form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label",
    "transform:scale(.85) translateY(-.625rem);opacity:.8"
  );

  // Table
  addRaw(".table-sm th,.table-sm td", "padding:.25rem .5rem");
  addRaw(".table-borderless,.table-borderless th,.table-borderless td", "border:0");
  addRaw(
    ".table-dark",
    `${darkScope};--aksara-bg-body-secondary:rgb(var(--aksara-light)/.04);--aksara-surface-hover:rgb(var(--aksara-light)/.08);background:var(--aksara-surface)`
  );
  addRaw(".table-active,.table-active>th,.table-active>td", "background:rgb(var(--aksara-primary)/.08)");
  for (const name of Object.keys(colors)) {
    if (name === "dark") continue; // `.table-dark` is the dark-scope table, not a row tint
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
      `@media (max-width:${belowBreakpoint(minWidth)}){.navbar-expand-${bp}{flex-wrap:wrap}.navbar-expand-${bp} .navbar-collapse.collapse-show{display:flex;flex-basis:100%;flex-direction:column;align-items:stretch}.navbar-expand-${bp} .navbar-collapse.collapse-show .navbar-nav{flex-direction:column;align-items:stretch}}`
    );
    rules.push(
      `@media (min-width:${minWidth}){.navbar-expand-${bp} .navbar-toggler{display:none}.navbar-expand-${bp} .navbar-collapse,.navbar-expand-${bp} .navbar-collapse:not(.collapse-show){display:flex}}`
    );
  }
  addRaw(".navbar-dark", darkScope);

  // Dropdown
  addRaw(".dropdown-menu-end", "inset-inline-end:0;inset-inline-start:auto");
  addRaw(".dropdown-menu-dark", darkScope);
  // A menu shown in the flow (static previews, inline menus) must not stack over the page:
  // as a flex/grid item its z-index would otherwise still apply.
  addRaw(
    ".dropdown-menu.position-static,.dropdown-menu.position-relative,.popover.position-static,.popover.position-relative,.tooltip.position-static,.tooltip.position-relative,.toast.position-static",
    "z-index:auto"
  );

  // Forms, accordion, carousel
  addRaw(".form-check-inline", "display:inline-flex;margin-inline-end:1rem");
  addRaw(".accordion-flush,.accordion-flush .accordion-item", "border-inline:0;border-radius:0;background:transparent");
}

/**
 * Collapse transition, offcanvas backdrop, groups and the app-level components
 * (media viewer, option picker, guest gate, auth prompt, quote card).
 */
export function addAppComponents(): void {
  // ── Collapse / offcanvas backdrop ──────────────────────────────────────────
  add(
    "collapsing",
    "overflow:hidden;transition:height var(--aksara-collapse-duration,.3s) var(--aksara-ease,ease),width var(--aksara-collapse-duration,.3s) var(--aksara-ease,ease)"
  );
  add(
    "offcanvas-backdrop",
    "position:fixed;inset:0;z-index:1044;background:var(--aksara-overlay-bg);backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);opacity:0;transition:opacity .3s var(--aksara-ease,ease)"
  );
  addRaw(".offcanvas-backdrop.is-visible", "opacity:1");

  // ── Check / radio groups ───────────────────────────────────────────────────
  add("radio-group", "display:flex;flex-direction:column;align-items:flex-start;gap:.25rem");
  add("check-group", "display:flex;flex-direction:column;align-items:flex-start;gap:.25rem");
  addRaw(".radio-group>.form-check,.check-group>.form-check", "min-height:2rem");
  addRaw(
    ".radio-group-inline,.check-group-inline",
    "flex-direction:row;flex-wrap:wrap;align-items:center;gap:.25rem 1.25rem"
  );
  addRaw(".radio-group-inline>.form-check-inline,.check-group-inline>.form-check-inline", "margin-inline-end:0");

  // ── User item link ─────────────────────────────────────────────────────────
  add(
    "user-item-link",
    "display:flex;align-items:center;gap:.75rem;flex:1 1 auto;min-width:0;color:inherit;text-decoration:none"
  );
  addRaw(".user-item-link:hover .user-item-name", "text-decoration:underline;text-underline-offset:2px");
  addRaw(
    ".user-item-link:focus-visible",
    "outline:var(--aksara-ring-width,3px) solid var(--aksara-ring);outline-offset:2px;border-radius:var(--aksara-radius-sm)"
  );

  // ── Quote card ─────────────────────────────────────────────────────────────
  add(
    "quote-card",
    "display:flex;flex-direction:column;gap:.625rem;padding:1rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-lg,1rem);background:var(--aksara-surface);color:var(--aksara-text-body);transition:border-color .15s ease,background .15s ease"
  );
  addRaw(".quote-card[data-href],.quote-card-link", "cursor:pointer");
  addRaw(".quote-card:not(.quote-preview):hover", "border-color:var(--aksara-border-strong)");
  add("quote-preview", "background:var(--aksara-bg-subtle)");
  add("quote-header", "display:flex;align-items:center;gap:.625rem;min-width:0");
  add("quote-author-info", "display:flex;flex-direction:column;min-width:0;flex:1 1 auto;line-height:1.3");
  add(
    "quote-author-name",
    "display:inline-flex;align-items:center;gap:.25rem;min-width:0;font-weight:650;font-size:.875rem"
  );
  addRaw(".quote-author-name>span", "overflow:hidden;text-overflow:ellipsis;white-space:nowrap");
  add(
    "quote-author-meta",
    "display:flex;align-items:center;gap:.375rem;min-width:0;font-size:.8125rem;color:var(--aksara-text-subtle);white-space:nowrap"
  );
  addRaw(".quote-author-meta>span:first-child", "overflow:hidden;text-overflow:ellipsis");
  add("quote-actions", "display:flex;align-items:center;gap:.375rem;flex-shrink:0;margin-inline-start:auto");
  add("quote-body", "font-size:.9375rem;line-height:1.55;overflow-wrap:anywhere;white-space:pre-line");
  add("quote-media", "border-radius:var(--aksara-radius-md,.75rem);overflow:hidden");

  // ── Guest gate ─────────────────────────────────────────────────────────────
  add("guest-gate", "position:relative;display:flex;flex-direction:column;align-items:center;text-align:center");
  add(
    "guest-gate-card",
    "display:flex;flex-direction:column;align-items:center;gap:.25rem;width:100%;max-width:30rem;padding:2rem 1.5rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-xl,1.25rem);background:var(--aksara-surface)"
  );
  add(
    "guest-gate-teaser",
    "width:100%;max-width:30rem;display:flex;flex-direction:column;gap:.625rem;padding:0 .25rem 1rem;pointer-events:none;user-select:none;-webkit-mask-image:linear-gradient(to bottom,#000 0%,transparent 100%);mask-image:linear-gradient(to bottom,#000 0%,transparent 100%)"
  );
  add(
    "guest-gate-icon",
    "display:inline-flex;align-items:center;justify-content:center;width:3.25rem;height:3.25rem;margin-block-end:.75rem;border-radius:9999px;background:rgb(var(--aksara-primary)/.08);color:var(--aksara-text-body);font-size:1.5rem"
  );
  add("guest-gate-title", "margin:0 0 .25rem;font-size:1.125rem;font-weight:650;letter-spacing:-.01em");
  add(
    "guest-gate-text",
    "margin:0 0 1.25rem;max-width:26rem;color:var(--aksara-text-subtle);font-size:.875rem;line-height:1.55"
  );
  add("guest-gate-actions", "display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem;width:100%");
  addRaw(".guest-gate-card .guest-gate-actions>.btn", "flex:1 1 auto;max-width:18rem");
  add("guest-gate-slide", "justify-content:center;min-height:min(70vh,36rem);padding:2rem 1.5rem");
  addRaw(".guest-gate-slide .guest-gate-icon", "width:4rem;height:4rem;font-size:1.875rem");
  addRaw(".guest-gate-slide .guest-gate-title", "font-size:1.375rem");

  // ── Auth prompt modal ──────────────────────────────────────────────────────
  addRaw(".auth-modal .modal-dialog", "max-width:24rem");
  add(
    "auth-modal-body",
    "position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:2.5rem 1.75rem 1.75rem"
  );
  addRaw(
    ".auth-modal-body>.btn-close,.auth-modal-body>.modal-close",
    "position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem"
  );
  add(
    "auth-modal-logo",
    "display:inline-flex;align-items:center;justify-content:center;width:3.25rem;height:3.25rem;margin-block-end:1rem;border-radius:9999px;background:rgb(var(--aksara-primary)/.08);color:var(--aksara-text-body);font-size:1.75rem"
  );
  add(
    "auth-modal-title",
    "margin:0 0 .375rem;font-size:1.25rem;font-weight:700;letter-spacing:-.015em;line-height:1.25"
  );
  add(
    "auth-modal-text",
    "margin:0 0 1.5rem;max-width:18rem;color:var(--aksara-text-subtle);font-size:.875rem;line-height:1.55"
  );
  add("auth-modal-actions", "display:flex;flex-direction:column;gap:.5rem;width:100%");

  // ── Option picker modal ────────────────────────────────────────────────────
  addRaw(".picker-modal .modal-dialog", "max-width:26rem");
  add("picker-heading", "display:flex;align-items:center;gap:.75rem;min-width:0;margin-inline-end:auto");
  add("picker-heading-text", "min-width:0");
  addRaw(".picker-heading .modal-title", "font-size:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap");
  add(
    "picker-subtitle",
    "font-size:.8125rem;color:var(--aksara-text-subtle);overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
  );
  addRaw(".picker-modal .modal-body", "padding:.25rem .5rem .5rem");
  add("picker-list", "display:flex;flex-direction:column;gap:.125rem");
  add(
    "picker-option",
    "display:flex;align-items:center;gap:.75rem;width:100%;padding:.625rem .75rem;border:0;border-radius:var(--aksara-radius-md,.75rem);background:transparent;color:var(--aksara-text-body);text-align:start;cursor:pointer;transition:background .15s ease"
  );
  addRaw(".picker-option:hover", "background:var(--aksara-bg-subtle)");
  addRaw(
    ".picker-option:focus-visible",
    "outline:var(--aksara-ring-width,3px) solid var(--aksara-ring);outline-offset:-1px"
  );
  addRaw(".picker-option:disabled,.picker-option[aria-disabled='true']", "opacity:.5;pointer-events:none");
  add(
    "picker-option-icon",
    "display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:2.375rem;height:2.375rem;border-radius:9999px;background:var(--aksara-bg-subtle);font-size:1.125rem;transition:background .15s ease,color .15s ease"
  );
  addRaw(
    ".picker-option.is-selected .picker-option-icon",
    "background:rgb(var(--aksara-primary));color:var(--aksara-primary-foreground)"
  );
  add("picker-option-text", "display:flex;flex-direction:column;flex:1 1 auto;min-width:0;line-height:1.3");
  add(
    "picker-option-label",
    "font-weight:600;font-size:.875rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
  );
  add(
    "picker-option-desc",
    "margin-block-start:.125rem;font-size:.8125rem;color:var(--aksara-text-subtle);overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
  );
  add(
    "picker-option-check",
    "flex-shrink:0;width:1.25rem;font-size:1.25rem;line-height:1;color:var(--aksara-text-body);opacity:0"
  );
  addRaw(".picker-option.is-selected .picker-option-check", "opacity:1");

  // ── Media viewer ───────────────────────────────────────────────────────────
  add(
    "media-modal",
    "position:fixed;inset:0;z-index:1060;display:none;background:rgb(10 9 8/.97);color:#f7f6f4;--aksara-media-zoom:1;--aksara-media-x:0px;--aksara-media-y:0px"
  );
  add("media-modal-open", "display:flex;flex-direction:column;animation:aksara-fade .2s ease");
  add(
    "media-modal-stage",
    "position:relative;flex:1 1 auto;min-width:0;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;touch-action:none;user-select:none"
  );
  add(
    "media-modal-figure",
    "margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.75rem;width:100%;height:100%;padding:4rem 1rem 5rem"
  );
  add(
    "media-modal-image",
    "display:block;max-width:100%;max-height:100%;min-height:0;object-fit:contain;border-radius:.5rem;transform:translate(var(--aksara-media-x),var(--aksara-media-y)) scale(var(--aksara-media-zoom));transition:transform .2s var(--aksara-ease,ease),opacity .2s ease;cursor:zoom-in;-webkit-user-drag:none"
  );
  // Slide track: previous | current | next, each one stage wide. `--aksara-media-drag` follows the
  // pointer; `.is-settling` animates the snap to a neighbour (or back).
  add(
    "media-modal-track",
    "position:absolute;inset:0;display:flex;transform:translate3d(calc(-100% + var(--aksara-media-drag,0px)),0,0);will-change:transform"
  );
  addRaw("[dir='rtl'] .media-modal-track", "transform:translate3d(calc(100% + var(--aksara-media-drag,0px)),0,0)");
  addRaw(".media-modal-track>.media-modal-figure", "flex:0 0 100%;min-width:0");
  addRaw(".media-modal.is-settling .media-modal-track", "transition:transform .34s cubic-bezier(.22,.8,.24,1)");
  addRaw(".media-modal-figure.is-empty", "visibility:hidden");
  // Zoom and pan apply to the current slide only.
  addRaw(".media-modal-figure:not([data-media-slot='current']) .media-modal-image", "transform:none");
  addRaw(".media-modal.is-zoomed .media-modal-image", "cursor:grab");
  addRaw(
    ".media-modal.is-panning .media-modal-image,.media-modal.is-swiping .media-modal-image",
    "transition:none;cursor:grabbing"
  );
  add("media-modal-caption", "max-width:40rem;text-align:center;font-size:.875rem;color:rgb(247 246 244/.78)");
  add(
    "media-modal-btn",
    "position:absolute;z-index:2;display:inline-flex;align-items:center;justify-content:center;width:2.75rem;height:2.75rem;padding:0;border:0;border-radius:9999px;background:rgb(255 255 255/.1);color:#f7f6f4;font-size:1.375rem;cursor:pointer;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);transition:background .15s ease,opacity .15s ease"
  );
  addRaw(".media-modal-btn:hover", "background:rgb(255 255 255/.2)");
  addRaw(
    ".media-modal-btn:focus-visible,.media-modal-zoom>button:focus-visible",
    "outline:2px solid #f7f6f4;outline-offset:2px"
  );
  addRaw(".media-modal-btn:disabled", "opacity:0;pointer-events:none");
  add("media-modal-close", "inset-block-start:1rem;inset-inline-start:1rem");
  add("media-modal-prev", "inset-inline-start:1rem;top:50%;translate:0 -50%");
  add("media-modal-next", "inset-inline-end:1rem;top:50%;translate:0 -50%");
  add(
    "media-modal-counter",
    "position:absolute;z-index:2;inset-block-start:1.5rem;left:50%;translate:-50% 0;padding:.25rem .75rem;border-radius:9999px;background:rgb(255 255 255/.1);font-size:.8125rem;font-weight:600;font-variant-numeric:tabular-nums;pointer-events:none"
  );
  add(
    "media-modal-zoom",
    "position:absolute;z-index:2;inset-block-end:1.25rem;left:50%;translate:-50% 0;display:flex;gap:.25rem;padding:.25rem;border-radius:9999px;background:rgb(255 255 255/.1);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)"
  );
  addRaw(
    ".media-modal-zoom>button",
    "display:inline-flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;padding:0;border:0;border-radius:9999px;background:transparent;color:#f7f6f4;font-size:1.125rem;cursor:pointer"
  );
  addRaw(".media-modal-zoom>button:hover", "background:rgb(255 255 255/.14)");
  add(
    "media-modal-sidebar",
    "flex-shrink:0;max-height:40vh;overflow-y:auto;overscroll-behavior:contain;background:var(--aksara-surface);color:var(--aksara-text-body);border-block-start:1px solid var(--aksara-border-subtle)"
  );
  rules.push(
    "@media (min-width:768px){.media-modal-open:has(.media-modal-sidebar){flex-direction:row}.media-modal-sidebar{width:22rem;max-height:none;border-block-start:0;border-inline-start:1px solid var(--aksara-border-subtle)}}",
    "@media (min-width:992px){.media-modal-sidebar{width:26rem}}",
    "[dir='rtl'] .media-modal-prev .mdi,[dir='rtl'] .media-modal-next .mdi{transform:scaleX(-1)}"
  );
}
