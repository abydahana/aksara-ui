/** Design tokens (:root / light / dark) and the base reset. */
import { colors, darkColors, foregrounds, darkForegrounds } from "../palette";
import { baseTokens, lightTheme, darkTheme } from "./core";

export function cssVars(source: Record<string, string>): string {
  return Object.entries(source)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
}

function toHex(rgb: string): string {
  return `#${rgb
    .split(" ")
    .map((channel) => Number(channel).toString(16).padStart(2, "0"))
    .join("")}`;
}

/** `--aksara-{name}`, its `-rgb`/`-hex` aliases and the solid-fill foreground for one theme. */
function paletteVars(palette: Record<string, string>, fg: Record<string, string>): string {
  return Object.entries(palette)
    .map(
      ([name, value]) =>
        `--aksara-${name}:${value};--aksara-${name}-rgb:${value.split(" ").join(", ")};--aksara-${name}-hex:${toHex(value)};--aksara-${name}-foreground:${fg[name]};`
    )
    .join("");
}

export function preflight(): string {
  const uniqueBaseTokens = Object.fromEntries(
    Object.entries(baseTokens).filter(([key, value]) => lightTheme[key] !== value)
  );
  return `:root{${cssVars(uniqueBaseTokens)}font-size:1rem}:root,[data-theme="light"],.light{${paletteVars(colors, foregrounds)}${cssVars(lightTheme)}color-scheme:light}[data-theme="dark"],.dark{${paletteVars(darkColors, darkForegrounds)}${cssVars(darkTheme)}color-scheme:dark}*,*::before,*::after{box-sizing:border-box}html{font-size:1rem}body{margin:0;font-family:var(--aksara-font-sans);font-size:1rem;background:var(--aksara-bg-body);color:var(--aksara-text-body);line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:650;line-height:1.25;letter-spacing:-.015em;color:inherit}::selection{background:rgb(var(--aksara-primary)/.2)}h1{font-size:2rem}h2{font-size:1.75rem}h3{font-size:1.5rem}h4{font-size:1.25rem}h5{font-size:1.125rem}h6{font-size:1rem}form{margin:0}button,input,textarea,select{font:inherit}textarea{resize:vertical;min-height:2.25em;min-height:calc(1lh + .5rem)}button:disabled,.disabled{pointer-events:none;opacity:.58}img,svg,video{max-width:100%;height:auto}.row>*{box-sizing:border-box;flex-shrink:0;width:100%;max-width:100%;padding-inline:calc(var(--aksara-gutter-x,1rem)/2);margin-top:var(--aksara-gutter-y,0)}[hidden]{display:none!important}@keyframes aksara-fade{from{opacity:0}to{opacity:1}}@keyframes aksara-zoom{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes aksara-slide{from{opacity:0;transform:translateY(.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes aksara-spin{to{transform:rotate(360deg)}}@keyframes aksara-progress-stripes{from{background-position-x:1rem}to{background-position-x:0}}@keyframes aksara-bounce{0%,100%{transform:translateY(-15%)}50%{transform:translateY(0)}}@keyframes aksara-pulse{0%,100%{opacity:1}50%{opacity:.5}}@keyframes aksara-placeholder-wave{100%{transform:translateX(100%)}}@keyframes aksara-placeholder-glow{0%,100%{opacity:.16}50%{opacity:.08}}@keyframes aksara-shake{0%,100%{translate:0}15%{translate:-7px}30%{translate:6px}45%{translate:-5px}60%{translate:4px}75%{translate:-2px}90%{translate:1px}}@keyframes aksara-shake-x{0%,100%{translate:0}20%{translate:-6px}40%{translate:5px}60%{translate:-3px}80%{translate:2px}}@keyframes aksara-sheet-bounce{0%,100%{translate:0}35%{translate:0 -10px}65%{translate:0 3px}}@keyframes aksara-alert-in{from{opacity:0;transform:scale(1.12)}to{opacity:1;transform:scale(1)}}@keyframes aksara-carousel-progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}@keyframes aksara-pop{from{opacity:0;transform:translateY(-4px) scale(.98)}to{opacity:1;transform:none}}@keyframes aksara-rise{from{opacity:0;transform:translate(var(--aksara-modal-x,0),calc(var(--aksara-modal-y,0) + 12px)) scale(.97)}to{opacity:1;transform:translate(var(--aksara-modal-x,0),var(--aksara-modal-y,0))}}@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`;
}
