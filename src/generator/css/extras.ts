/**
 * Display and input components built from recurring docs patterns: divider, kbd, stat,
 * description list, icon tile, check list, steps, indicator, segmented control,
 * toggle / copy buttons, number stepper, rating and one-time-code input.
 */
import { colors } from "../palette";
import { add, addRaw, rules, colorValue, softText } from "./core";

const COLOR_NAMES = Object.keys(colors);

/** Hooks for component classes that need little or no styling of their own. */
function addComponentHooks(): void {
  for (let n = 1; n <= 4; n += 1) add(`media-grid-item-${n}`, "");
  add("guest-gate-inline", "padding-block:1.5rem");
  add("quote-avatar", "flex-shrink:0");
  add("quote-card-remove", "flex-shrink:0");
  add("user-item-handle", "color:var(--aksara-text-subtle);font-size:.8125rem");
  add(
    "user-item-verified",
    "margin-inline-start:.25rem;font-size:1rem;line-height:1;vertical-align:-.125em;color:var(--aksara-text-body)"
  );
  addRaw(".user-item:last-child", "border-block-end:0");
  // The verified icon next to a long quote author name must not shrink.
  addRaw(".quote-author-name>.mdi", "flex-shrink:0;overflow:visible");
  // Select chevron mirrors in RTL.
  addRaw("[dir='rtl'] .form-select", "background-position:left .75rem center;padding-inline:.875rem 2.25rem");
}

export function addExtras(): void {
  addComponentHooks();
  addDivider();
  addKbd();
  addStat();
  addDescriptionList();
  addIconTile();
  addCheckList();
  addSteps();
  addIndicator();
  addSegmented();
  addToggleAndCopy();
  addNumberStepper();
  addRating();
  addOtp();
}

function addDivider(): void {
  add(
    "divider",
    "display:flex;align-items:center;gap:.75rem;margin-block:1rem;color:var(--aksara-text-subtle);font-size:.8125rem;font-weight:500;line-height:1.4;--aksara-divider-color:var(--aksara-border-subtle);--aksara-divider-style:solid"
  );
  addRaw(
    ".divider::before,.divider::after",
    'content:"";flex:1 1 0;border-block-start:1px var(--aksara-divider-style) var(--aksara-divider-color)'
  );
  addRaw(".divider:empty", "gap:0");
  addRaw(".divider:empty::before", "flex:1 1 0");
  addRaw(".divider:empty::after", "display:none");
  addRaw(".divider-start::before,.divider-end::after", "flex:0 0 1.5rem");
  add("divider-start", "");
  add("divider-end", "");
  add("divider-dashed", "--aksara-divider-style:dashed");
  add("divider-strong", "--aksara-divider-color:var(--aksara-border-strong)");
  add(
    "divider-vertical",
    "flex-direction:column;align-self:stretch;margin-block:0;margin-inline:.75rem;min-height:1.25rem;gap:.5rem"
  );
  addRaw(
    ".divider-vertical::before,.divider-vertical::after",
    "border-block-start:0;border-inline-start:1px var(--aksara-divider-style) var(--aksara-divider-color)"
  );
  addRaw(".divider-vertical:empty::after", "display:none");
}

function addKbd(): void {
  const kbd =
    "display:inline-flex;align-items:center;justify-content:center;min-width:1.5rem;height:1.5rem;padding:0 .375rem;font-family:var(--aksara-font-sans);font-size:.75rem;font-weight:600;line-height:1;color:var(--aksara-text-body);background:var(--aksara-surface);border:1px solid var(--aksara-border);border-block-end-width:2px;border-radius:.375rem;white-space:nowrap;vertical-align:baseline";
  addRaw("kbd", kbd);
  add("kbd", kbd);
  add("kbd-sm", "min-width:1.25rem;height:1.25rem;padding:0 .25rem;font-size:.6875rem;border-radius:.3125rem");
  add("kbd-lg", "min-width:2rem;height:2rem;padding:0 .5rem;font-size:.875rem;border-radius:.5rem");
  add(
    "kbd-group",
    "display:inline-flex;align-items:center;gap:.25rem;color:var(--aksara-text-subtle);font-size:.75rem"
  );
}

function addStat(): void {
  add(
    "stat",
    "display:flex;flex-direction:column;gap:.25rem;min-width:0;padding:1.25rem;border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-lg);background:var(--aksara-surface)"
  );
  add("stat-plain", "padding:0;border:0;background:transparent");
  add(
    "stat-header",
    "display:flex;align-items:center;justify-content:space-between;gap:.75rem;margin-block-end:.25rem"
  );
  add("stat-label", "font-size:.8125rem;font-weight:500;color:var(--aksara-text-subtle)");
  add(
    "stat-value",
    "font-size:1.75rem;font-weight:700;line-height:1.15;letter-spacing:-.02em;font-variant-numeric:tabular-nums;color:var(--aksara-text-body)"
  );
  add("stat-value-sm", "font-size:1.25rem");
  add(
    "stat-unit",
    "margin-inline-start:.125rem;font-size:.875rem;font-weight:500;color:var(--aksara-text-subtle);letter-spacing:0"
  );
  add(
    "stat-meta",
    "display:flex;align-items:center;flex-wrap:wrap;gap:.375rem;font-size:.8125rem;color:var(--aksara-text-subtle)"
  );
  add(
    "stat-delta",
    "display:inline-flex;align-items:center;gap:.125rem;padding:.0625rem .375rem;border-radius:9999px;font-size:.75rem;font-weight:600;font-variant-numeric:tabular-nums;background:var(--aksara-bg-subtle);color:var(--aksara-text-subtle)"
  );
  add("stat-delta-up", `color:${softText("success")};background:${colorValue("success", 12)}`);
  add("stat-delta-down", `color:${softText("danger")};background:${colorValue("danger", 12)}`);
  add(
    "stat-group",
    "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,11rem),1fr));border:1px solid var(--aksara-border-subtle);border-radius:var(--aksara-radius-lg);background:var(--aksara-surface);overflow:hidden"
  );
  addRaw(
    ".stat-group>.stat",
    "border:0;border-radius:0;background:transparent;box-shadow:-1px -1px 0 var(--aksara-border-subtle)"
  );
}

function addDescriptionList(): void {
  add("desc-list", "display:grid;gap:.875rem;margin:0");
  addRaw(".desc-list>div", "display:grid;gap:.125rem;min-width:0");
  addRaw(".desc-list dt", "font-size:.8125rem;font-weight:500;color:var(--aksara-text-subtle)");
  addRaw(".desc-list dd", "margin:0;font-size:.9375rem;color:var(--aksara-text-body);overflow-wrap:anywhere");
  add("desc-list-horizontal", "");
  rules.push(
    "@media (min-width:576px){.desc-list-horizontal>div{grid-template-columns:minmax(8rem,var(--aksara-desc-term,30%)) 1fr;gap:1rem;align-items:baseline}}"
  );
  add("desc-list-divided", "gap:0");
  addRaw(".desc-list-divided>div", "padding-block:.75rem;border-block-end:1px solid var(--aksara-border-subtle)");
  addRaw(".desc-list-divided>div:first-child", "padding-block-start:0");
  addRaw(".desc-list-divided>div:last-child", "border-block-end:0;padding-block-end:0");
  add("desc-list-grid", "grid-template-columns:repeat(auto-fit,minmax(min(100%,10rem),1fr));gap:1rem 1.5rem");
}

function addIconTile(): void {
  add(
    "icon-tile",
    "display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:2.5rem;height:2.5rem;border-radius:var(--aksara-radius-md);background:var(--aksara-bg-subtle);color:var(--aksara-text-body);font-size:1.25rem;line-height:1"
  );
  add("icon-tile-xs", "width:1.75rem;height:1.75rem;font-size:1rem;border-radius:.5rem");
  add("icon-tile-sm", "width:2rem;height:2rem;font-size:1.0625rem;border-radius:.625rem");
  add("icon-tile-lg", "width:3rem;height:3rem;font-size:1.5rem;border-radius:var(--aksara-radius-lg)");
  add("icon-tile-xl", "width:3.75rem;height:3.75rem;font-size:1.875rem;border-radius:var(--aksara-radius-xl)");
  add("icon-tile-circle", "border-radius:9999px");
  add("icon-tile-outline", "background:transparent;border:1px solid var(--aksara-border-subtle)");
  // Outline wins over the color tint: transparent fill, border tinted by the icon color.
  addRaw(
    ".icon-tile.icon-tile-outline",
    "background:transparent;border-color:color-mix(in srgb,currentColor 28%,transparent)"
  );
  for (const name of COLOR_NAMES) {
    add(`icon-tile-${name}`, `background:${colorValue(name, 12)};color:${softText(name)}`);
  }
}

function addCheckList(): void {
  add("check-list", "display:grid;gap:.625rem;margin:0;padding:0;list-style:none");
  addRaw(".check-list>li", "position:relative;padding-inline-start:1.75rem;line-height:1.5");
  addRaw(
    ".check-list>li::before",
    'content:"";position:absolute;inset-inline-start:0;top:.1875rem;width:1.125rem;height:1.125rem;border-radius:9999px;background:var(--aksara-check-color,rgb(var(--aksara-success)));-webkit-mask:var(--aksara-check-icon) center/100% no-repeat;mask:var(--aksara-check-icon) center/100% no-repeat'
  );
  addRaw(
    ".check-list",
    `--aksara-check-icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 14.2-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7Z'/%3E%3C/svg%3E");--aksara-cross-icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.6 12.2-1.4 1.4-2.2-2.2-2.2 2.2-1.4-1.4 2.2-2.2-2.2-2.2 1.4-1.4 2.2 2.2 2.2-2.2 1.4 1.4-2.2 2.2 2.2 2.2Z'/%3E%3C/svg%3E")`
  );
  addRaw(".check-list>li.is-off", "color:var(--aksara-text-subtle)");
  addRaw(
    ".check-list>li.is-off::before",
    "background:var(--aksara-border-strong);-webkit-mask-image:var(--aksara-cross-icon);mask-image:var(--aksara-cross-icon)"
  );
  add("check-list-sm", "gap:.375rem;font-size:.875rem");
  addRaw(".check-list-sm>li", "padding-inline-start:1.5rem");
  addRaw(".check-list-sm>li::before", "width:1rem;height:1rem;top:.15625rem");
  add("check-list-plain", "");
  addRaw(
    ".check-list-plain",
    `--aksara-check-icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='m9 16.2-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z'/%3E%3C/svg%3E")`
  );
  for (const name of COLOR_NAMES) {
    add(`check-list-${name}`, `--aksara-check-color:rgb(var(--aksara-${name}))`);
  }
}

function addSteps(): void {
  add(
    "steps",
    "display:flex;margin:0;padding:0;list-style:none;counter-reset:aksara-step;--aksara-step-size:2rem;--aksara-step-line:var(--aksara-border)"
  );
  add(
    "step",
    "position:relative;display:flex;flex-direction:column;align-items:center;flex:1 1 0;min-width:0;gap:.5rem;text-align:center;counter-increment:aksara-step"
  );
  addRaw(
    ".step::after",
    'content:"";position:absolute;top:calc(var(--aksara-step-size)/2);inset-inline-start:calc(50% + var(--aksara-step-size)/2 + .5rem);inset-inline-end:calc(-50% + var(--aksara-step-size)/2 + .5rem);border-block-start:2px solid var(--aksara-step-line);border-radius:2px'
  );
  addRaw(".step:last-child::after", "display:none");
  add(
    "step-marker",
    "position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;width:var(--aksara-step-size);height:var(--aksara-step-size);border-radius:9999px;border:1.5px solid var(--aksara-border-strong);background:var(--aksara-surface);color:var(--aksara-text-subtle);font-size:.8125rem;font-weight:650;font-variant-numeric:tabular-nums;transition:background .2s ease,color .2s ease,border-color .2s ease"
  );
  addRaw(".step-marker:empty::before", "content:counter(aksara-step)");
  add("step-body", "display:flex;flex-direction:column;gap:.125rem;min-width:0;padding-inline:.25rem");
  add("step-title", "font-size:.875rem;font-weight:600;color:var(--aksara-text-subtle)");
  add("step-text", "font-size:.8125rem;color:var(--aksara-text-subtle)");
  addRaw(
    ".step.is-complete .step-marker",
    "background:rgb(var(--aksara-primary));border-color:rgb(var(--aksara-primary));color:var(--aksara-primary-foreground)"
  );
  addRaw(
    ".step.is-complete .step-marker:empty::before",
    "content:\"\";width:.875rem;height:.875rem;background:currentColor;-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='m9 16.2-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z'/%3E%3C/svg%3E\") center/100% no-repeat;mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='m9 16.2-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z'/%3E%3C/svg%3E\") center/100% no-repeat"
  );
  addRaw(".step.is-complete::after", "border-color:rgb(var(--aksara-primary))");
  addRaw(
    ".step.is-active .step-marker",
    "border-color:rgb(var(--aksara-primary));color:var(--aksara-text-body);outline:4px solid rgb(var(--aksara-primary)/.1);outline-offset:0"
  );
  addRaw(".step.is-active .step-title,.step.is-complete .step-title", "color:var(--aksara-text-body)");
  addRaw(".step.is-error .step-marker", `border-color:rgb(var(--aksara-danger));color:${softText("danger")}`);
  addRaw(".step.is-error .step-title", `color:${softText("danger")}`);
  addRaw("a.step,button.step,.step>a", "color:inherit;text-decoration:none");
  // A step rendered as a link keeps the step's own layout.
  add(
    "step-link",
    "display:flex;flex-direction:column;align-items:center;gap:.5rem;min-width:0;border-radius:var(--aksara-radius-sm);color:inherit;text-decoration:none"
  );
  addRaw(
    ".step-link:hover .step-title",
    "color:var(--aksara-text-body);text-decoration:underline;text-underline-offset:2px"
  );
  addRaw(
    ".step-link:focus-visible",
    "outline:var(--aksara-ring-width,3px) solid var(--aksara-ring);outline-offset:2px"
  );
  addRaw(".steps-vertical .step-link", "flex-direction:row;align-items:flex-start;gap:.875rem");
  // Wizard "Next" buttons: `.steps-continue` text until the last step, then `.steps-finish`.
  add("steps-continue", "");
  add("steps-finish", "display:none");
  addRaw("[data-steps-last] .steps-finish", "display:inline");
  addRaw("[data-steps-last] .steps-continue", "display:none");
  // Vertical: marker column with the connector running down to the next step.
  add("steps-vertical", "flex-direction:column;gap:0");
  addRaw(
    ".steps-vertical>.step",
    "flex-direction:row;align-items:flex-start;gap:.875rem;text-align:start;padding-block-end:1.5rem"
  );
  addRaw(".steps-vertical>.step:last-child", "padding-block-end:0");
  addRaw(
    ".steps-vertical>.step::after",
    "top:calc(var(--aksara-step-size) + .375rem);bottom:.375rem;inset-inline-start:calc(var(--aksara-step-size)/2 - 1px);inset-inline-end:auto;border-block-start:0;border-inline-start:2px solid var(--aksara-step-line)"
  );
  addRaw(
    ".steps-vertical .step-body",
    "padding-block-start:calc((var(--aksara-step-size) - 1.3rem)/2);padding-inline:0"
  );
  add("steps-sm", "--aksara-step-size:1.5rem");
  addRaw(".steps-sm .step-marker", "font-size:.6875rem");
  addRaw(".steps-sm .step.is-complete .step-marker:empty::before", "width:.6875rem;height:.6875rem");
  // Compact horizontal steps hide their text below sm unless active.
  rules.push("@media (max-width:575.98px){.steps:not(.steps-vertical) .step:not(.is-active) .step-body{display:none}}");
}

function addIndicator(): void {
  // `--aksara-indicator-offset` moves the item in from the corner of the target's box.
  add("indicator", "position:relative;display:inline-flex;vertical-align:middle;--aksara-indicator-offset:0px");
  add(
    "indicator-item",
    "position:absolute;z-index:1;top:var(--aksara-indicator-offset);inset-inline-end:var(--aksara-indicator-offset);translate:50% -50%;display:inline-flex;align-items:center;justify-content:center;min-width:1.125rem;height:1.125rem;padding:0 .3125rem;border-radius:9999px;border:2px solid var(--aksara-indicator-ring,var(--aksara-bg-body));background:rgb(var(--aksara-danger));color:var(--aksara-danger-foreground);font-size:.6875rem;font-weight:700;line-height:1;font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none"
  );
  addRaw("[dir='rtl'] .indicator-item", "translate:-50% -50%");
  add("indicator-dot", "min-width:0;width:.75rem;height:.75rem;padding:0");
  add("indicator-bottom", "top:auto;bottom:var(--aksara-indicator-offset);translate:50% 50%");
  addRaw("[dir='rtl'] .indicator-bottom", "translate:-50% 50%");
  add("indicator-start", "inset-inline-end:auto;inset-inline-start:var(--aksara-indicator-offset);translate:-50% -50%");
  addRaw("[dir='rtl'] .indicator-start", "translate:50% -50%");
  addRaw(".indicator-start.indicator-bottom", "translate:-50% 50%");
  addRaw("[dir='rtl'] .indicator-start.indicator-bottom", "translate:50% 50%");
  // Round targets (avatars, circular tiles and buttons): sit on the circle's edge at 45°
  // (1 − 1/√2 ≈ 14.6% in from the box corner) instead of floating at the empty box corner.
  add("indicator-circle", "--aksara-indicator-offset:14.6%");
  addRaw(
    ".indicator:has(>.rounded-full,>.rounded-circle,>.icon-tile-circle,>.btn-icon.rounded-pill,>.avatar:not([class*='rounded-']))",
    "--aksara-indicator-offset:14.6%"
  );
  // Borderless icon buttons: the visible thing is the glyph, so hug its corner.
  add("indicator-icon", "--aksara-indicator-offset:24%");
  addRaw(
    ".indicator:has(>.btn-ghost.btn-icon,>.btn-link.btn-icon,>.btn-icon[class*='btn-ghost-'])",
    "--aksara-indicator-offset:24%"
  );
  addRaw(".indicator:has(>.mdi)", "--aksara-indicator-offset:12%");
  add("indicator-inset", "translate:0 0;top:.125rem;inset-inline-end:.125rem");
  addRaw("[dir='rtl'] .indicator-inset", "translate:0 0");
  addRaw(".indicator-inset.indicator-bottom", "top:auto;bottom:.125rem");
  addRaw(".indicator-inset.indicator-start", "inset-inline-end:auto;inset-inline-start:.125rem");
  // The ring matches the surface the indicator sits on.
  addRaw(".card,.list-group,.stat,.table", "--aksara-indicator-ring:var(--aksara-surface)");
  addRaw(
    ".modal-content,.dropdown-menu,.offcanvas,.sheet-panel,.popover",
    "--aksara-indicator-ring:var(--aksara-surface-raised)"
  );
  add("indicator-pulse", "");
  addRaw(
    ".indicator-pulse::after",
    'content:"";position:absolute;inset:-2px;border-radius:inherit;background:inherit;opacity:.6;animation:aksara-indicator-pulse 1.6s ease-out infinite;z-index:-1'
  );
  rules.push(
    "@keyframes aksara-indicator-pulse{from{transform:scale(1);opacity:.6}to{transform:scale(2.2);opacity:0}}"
  );
  for (const name of COLOR_NAMES) {
    addRaw(
      `.indicator-item.indicator-${name}`,
      `background:rgb(var(--aksara-${name}));color:var(--aksara-${name}-foreground)`
    );
    add(`indicator-${name}`, "");
  }
}

function addSegmented(): void {
  add(
    "segmented",
    "position:relative;display:inline-flex;align-items:stretch;gap:.125rem;padding:.1875rem;border-radius:calc(var(--aksara-control-radius,.625rem) + .125rem);background:var(--aksara-bg-subtle);border:1px solid var(--aksara-border-subtle);max-width:100%;overflow-x:auto;scrollbar-width:none"
  );
  add("segmented-block", "display:flex;width:100%");
  addRaw(".segmented-block>label,.segmented-block>.segmented-item", "flex:1 1 0");
  addRaw(".segmented>input", "position:absolute;opacity:0;width:1px;height:1px;pointer-events:none");
  const item =
    "display:inline-flex;align-items:center;justify-content:center;gap:.375rem;min-height:2.125rem;padding:.25rem .875rem;border:0;border-radius:var(--aksara-control-radius,.625rem);background:transparent;color:var(--aksara-text-subtle);font-size:.875rem;font-weight:550;white-space:nowrap;cursor:pointer;user-select:none;transition:background .15s ease,color .15s ease";
  addRaw(".segmented>label,.segmented-item", item);
  add("segmented-item", "");
  addRaw(".segmented>label:hover,.segmented-item:hover", "color:var(--aksara-text-body)");
  addRaw(
    ".segmented>input:checked+label,.segmented-item.active,.segmented-item[aria-pressed='true'],.segmented-item[aria-selected='true']",
    "background:var(--aksara-surface);color:var(--aksara-text-body);box-shadow:0 0 0 1px var(--aksara-border-subtle)"
  );
  addRaw(
    ".segmented>input:focus-visible+label,.segmented-item:focus-visible",
    "outline:var(--aksara-ring-width,3px) solid var(--aksara-ring);outline-offset:-1px"
  );
  addRaw(".segmented>input:disabled+label,.segmented-item:disabled", "opacity:.45;pointer-events:none");
  add("segmented-sm", "padding:.125rem");
  addRaw(
    ".segmented-sm>label,.segmented-sm>.segmented-item",
    "min-height:1.75rem;padding:.125rem .625rem;font-size:.8125rem"
  );
  add("segmented-lg", "");
  addRaw(
    ".segmented-lg>label,.segmented-lg>.segmented-item",
    "min-height:2.5rem;padding:.375rem 1.125rem;font-size:.9375rem"
  );
}

function addToggleAndCopy(): void {
  // Toggle buttons: `aria-pressed="true"` (kept in sync by `data-toggle="button"`).
  addRaw(
    ".btn-plain[aria-pressed='true'],.btn-ghost[aria-pressed='true'],.btn-subtle[aria-pressed='true']",
    "background:rgb(var(--aksara-primary)/.1);border-color:rgb(var(--aksara-primary)/.25);color:var(--aksara-text-body)"
  );
  addRaw(".btn[aria-pressed] .btn-toggle-on,.btn[aria-pressed='true'] .btn-toggle-off", "display:none");
  addRaw(".btn[aria-pressed='true'] .btn-toggle-on", "display:inline-flex");
  add("btn-toggle-on", "");
  add("btn-toggle-off", "");
  // Copy button: label/icon swap while `.is-copied`.
  add("copy-btn", "");
  addRaw(".copy-btn .copy-btn-done,.copy-btn.is-copied .copy-btn-idle", "display:none");
  addRaw(".copy-btn.is-copied .copy-btn-done", "display:inline-flex");
  addRaw(".copy-btn.is-copied", `color:${softText("success")}`);
  add("copy-btn-idle", "display:inline-flex;align-items:center;gap:.375rem");
  add("copy-btn-done", "align-items:center;gap:.375rem");
  add(
    "copy-field",
    "display:flex;align-items:center;gap:.5rem;min-width:0;padding:.375rem .375rem .375rem .875rem;border:1px solid var(--aksara-border);border-radius:var(--aksara-control-radius,.625rem);background:var(--aksara-bg-subtle);font-family:var(--aksara-font-mono,ui-monospace,SFMono-Regular,Menlo,monospace);font-size:.8125rem"
  );
  addRaw(
    ".copy-field>code,.copy-field>span",
    "flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:none;padding:0;color:var(--aksara-text-body)"
  );
}

function addNumberStepper(): void {
  add("input-stepper", "");
  addRaw(
    ".input-stepper>.form-control",
    "text-align:center;font-variant-numeric:tabular-nums;-moz-appearance:textfield;appearance:textfield"
  );
  addRaw(
    ".input-stepper>.form-control::-webkit-outer-spin-button,.input-stepper>.form-control::-webkit-inner-spin-button",
    "-webkit-appearance:none;margin:0"
  );
  addRaw(".input-stepper>.btn:disabled", "opacity:.35");
  add("input-stepper-inline", "display:inline-flex;width:auto");
  addRaw(".input-stepper-inline>.form-control", "flex:0 0 3.5rem;width:3.5rem");
}

function addRating(): void {
  add(
    "rating",
    "display:inline-flex;gap:.125rem;font-size:1.375rem;line-height:1;--aksara-rating-color:rgb(var(--aksara-warning));--aksara-rating-empty:var(--aksara-border-strong)"
  );
  // The input version is a form field: its own line, and the hidden radios stay anchored to it.
  addRaw(".rating:not(.rating-display)", "display:flex;width:fit-content;position:relative");
  addRaw(".rating>input", "position:absolute;opacity:0;width:1px;height:1px;pointer-events:none");
  const star = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 17.3 18.2 21l-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2 7.5 14l-1.7 7z'/%3E%3C/svg%3E")`;
  addRaw(
    ".rating>label,.rating-star",
    `display:inline-block;width:1em;height:1em;background:var(--aksara-rating-empty);-webkit-mask:${star} center/100% no-repeat;mask:${star} center/100% no-repeat;cursor:pointer;transition:background .12s ease,transform .12s ease`
  );
  add("rating-star", "");
  // Stars are in natural order (1 → max), so arrow keys and RTL behave as they look.
  // Filled: the checked star and every star before it.
  addRaw(
    ".rating>input:checked+label,.rating>label:has(~input:checked),.rating-star.is-on",
    "background:var(--aksara-rating-color)"
  );
  // Hover previews: clear everything, then fill up to the hovered star.
  addRaw(".rating:not(.rating-readonly):has(>label:hover)>label", "background:var(--aksara-rating-empty)");
  addRaw(
    ".rating:not(.rating-readonly):has(>label:hover)>label:hover,.rating:not(.rating-readonly):has(>label:hover)>label:has(~label:hover)",
    "background:var(--aksara-rating-color)"
  );
  addRaw(".rating:not(.rating-readonly)>label:active", "transform:scale(.88)");
  addRaw(
    ".rating>input:focus-visible+label",
    "outline:2px solid var(--aksara-ring);outline-offset:2px;border-radius:2px"
  );
  add("rating-readonly", "pointer-events:none");
  addRaw(".rating-readonly>label,.rating-display>.rating-star", "cursor:default");
  add("rating-display", "");
  addRaw(
    ".rating-star.is-half",
    "background:linear-gradient(90deg,var(--aksara-rating-color) 50%,var(--aksara-rating-empty) 50%)"
  );
  addRaw(
    "[dir='rtl'] .rating-star.is-half",
    "background:linear-gradient(270deg,var(--aksara-rating-color) 50%,var(--aksara-rating-empty) 50%)"
  );
  add("rating-sm", "font-size:1rem");
  add("rating-lg", "font-size:1.875rem");
}

function addOtp(): void {
  add("otp", "display:flex;gap:.5rem");
  addRaw(
    ".otp>input",
    "width:2.875rem;height:3.25rem;padding:0;text-align:center;font-size:1.375rem;font-weight:650;font-variant-numeric:tabular-nums;color:var(--aksara-text-body);background:var(--aksara-surface);border:1px solid var(--aksara-border);border-radius:var(--aksara-control-radius,.625rem);caret-color:rgb(var(--aksara-primary));transition:border-color .15s ease,box-shadow .15s ease"
  );
  addRaw(".otp>input:focus", "outline:0;border-color:rgb(var(--aksara-primary)/.7);box-shadow:var(--aksara-ring)");
  addRaw(".otp>input:not(:placeholder-shown)", "border-color:var(--aksara-border-strong)");
  addRaw(".otp.is-invalid>input,.otp>input.is-invalid", "border-color:rgb(var(--aksara-danger)/.7)");
  addRaw(".otp.is-invalid", "animation:aksara-shake-x .42s cubic-bezier(.36,.07,.19,.97)");
  addRaw(".otp>input:disabled", "opacity:.55");
  add("otp-separator", "display:inline-flex;align-items:center;color:var(--aksara-text-subtle);font-weight:600");
  add("otp-sm", "gap:.375rem");
  addRaw(".otp-sm>input", "width:2.25rem;height:2.5rem;font-size:1.0625rem");
}
