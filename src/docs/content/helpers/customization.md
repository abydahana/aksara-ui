# Customization

Aksara UI is built from CSS variables and a static generator.

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

## Generator Changes

Framework authors can change token ranges in `src/generator/build.ts`, then rebuild:

```bash
npm run build
```
