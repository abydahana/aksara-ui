# No JIT Philosophy

Aksara UI generates static CSS ahead of time. Users do not need Node.js, a bundler, a compiler, runtime CSS generation, or a JIT server.

## Why

- Dynamic class names are safe because the generated ranges already exist.
- Browser usage stays simple.
- Production output is predictable.
- Documentation examples map directly to real CSS.

## Usage

```html
<link rel="stylesheet" href="aksara.min.css" />
<script src="aksara.min.js"></script>
```

## Generated Utility Ranges

```text
spacing: 0..100px
sizing: 0..1000px
alpha: 0..100
radius: 0..100px
z-index: 0..100
```
