# Customization

Aksara UI is built from CSS variables and a static generator.

## Theme Variables

Override variables after loading Aksara CSS:

```css
:root {
  --aksara-primary: 92 106 255;
  --aksara-bg-body: #fbfcff;
  --aksara-text-base: #172033;
  --aksara-radius-md: 0.625rem;
}
```

## Dark Theme

Use `data-theme="dark"` or `.dark`:

```html
<html data-theme="dark">
  ...
</html>
```

## Generator Changes

Framework authors can change token ranges in `src/generator/build.ts`, then rebuild:

```bash
npm run build
```
