# Customization

Aksara UI is built from CSS variables, a static stylesheet generator, and a runtime engine for on-demand classes.

## Theme Variables

Override variables after loading Aksara CSS:

```css
:root {
  --aksara-primary: 15 23 42;
  --aksara-bg-body: #ffffff;
  --aksara-text-base: #0f172a;
  --aksara-radius-md: 0.75rem;
}
```

## Dark Theme

Use `data-theme="dark"` or `.dark`:

```html
<html data-theme="dark">
  ...
</html>
```

Palette colors are space-separated RGB channels, so the on-demand opacity classes (`bg-primary/10`) follow your overrides automatically.

## Generator Changes

Framework authors can change the palette in `src/generator/palette.ts` and token ranges in `src/generator/build.ts`, then rebuild:

```bash
npm run build
```
