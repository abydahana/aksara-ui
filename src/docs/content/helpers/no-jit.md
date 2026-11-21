# Runtime Engine

Aksara UI ships a precompiled stylesheet and a small runtime engine. Users do not need Node.js, a bundler, a compiler, or a build-time class scanner.

## How It Works

- Components and the common utilities (layout, spacing, colors, typography) ship precompiled in `aksara.min.css`.
- Responsive layout variants (`md:col-6`, `lg:d-flex`, `md:gap-3`) and `hover:` / `focus:` / `active:` for colors, `bg-body`, `bg-subtle`, `bg-transparent`, `text-body`, `border`, `border-subtle`, `underline` and `ring` are precompiled too.
- Everything else is generated in the browser by `Aksara.init()`, once per class, the first time the class appears in the DOM (a `MutationObserver` also covers markup added later):
  - arbitrary bracket classes: `w-[320px]`, `md:p-[2rem]`, `[position:sticky]`;
  - color opacity classes: `bg-primary/10`, `hover:border-danger/30` (any level `0`–`100`, palette colors only);
  - variants of static utilities that are not precompiled: `disabled:opacity-[.5]`, `last:border-0`, `md:text-center`, `odd:bg-subtle`.
- Variants must follow `theme → breakpoint → state`. Unknown or misordered variants are ignored and generate no rule. Arbitrary values may not contain `;`, `{` or `}`.

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui@1.4.0/dist/aksara.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" />
<script src="https://cdn.jsdelivr.net/npm/@abydahana/aksara-ui@1.4.0/dist/aksara.min.js"></script>
```

## Static Utility Scales

```text
spacing, inset, translate: 0..5   (0, .25rem, .5rem, 1rem, 1.5rem, 3rem)
radius:                    semantic: rounded-0, rounded-2xs … rounded-3xl, rounded, rounded-full/pill/circle
border width:              0..5   (0..5px)
z-index:                   none (z-auto only; use z-[1], z-[1050])
opacity:                   0..5   (0, .2, .4, .6, .8, 1)
font size / line height /
letter spacing:            semantic names only (text-sm, leading-tight, tracking-wide)
width / height:            w-100, w-full, w-auto, w-screen (and h-*), mw-100, mh-100, vw-100, vh-100, min-vw-100, min-vh-100
```

## On-Demand Utilities

Values outside the static scales are not precompiled:

```html
<div class="rounded-[12px] text-[13px] z-[1050] opacity-[.85] w-[33.3333%]"></div>
<div class="bg-primary/10 hover:border-danger/30 last:border-0"></div>
```

Pages that render without JavaScript (or before it loads) should stick to the static scales and precompiled variants, or ship the few rules they need in their own stylesheet.
