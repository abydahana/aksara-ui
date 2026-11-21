/** Design tokens (:root / light / dark) and the base reset. */
import { colors } from "../palette";
import { hexColors, baseTokens, lightTheme, darkTheme } from "./core";

export function cssVars(source: Record<string, string>): string {
  return Object.entries(source)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
}

export function preflight(): string {
  const vars = Object.entries(colors)
    .map(([name, value]) => {
      const commaSeparated = value.split(" ").join(", ");
      const hex = hexColors[name] ?? "";
      return `--aksara-${name}:${value};--aksara-${name}-rgb:${commaSeparated};${hex ? `--aksara-${name}-hex:${hex};` : ""}`;
    })
    .join("");
  const uniqueBaseTokens = Object.fromEntries(
    Object.entries(baseTokens).filter(([key, value]) => lightTheme[key] !== value)
  );
  return `:root{${vars}${cssVars(uniqueBaseTokens)}font-size:1rem}:root,[data-theme="light"],.light{${cssVars(lightTheme)}color-scheme:light}[data-theme="dark"],.dark{${cssVars(darkTheme)}color-scheme:dark}*,*::before,*::after{box-sizing:border-box}html{font-size:1rem}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:1rem;background:var(--aksara-bg-body);color:var(--aksara-text-body);line-height:1.5}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:600;line-height:1.25;color:inherit}h1{font-size:2rem}h2{font-size:1.75rem}h3{font-size:1.5rem}h4{font-size:1.25rem}h5{font-size:1.125rem}h6{font-size:1rem}form{margin:0}button,input,textarea,select{font:inherit}button:disabled,.disabled{pointer-events:none;opacity:.58}img,svg,video{max-width:100%;height:auto}.row>*{box-sizing:border-box;flex-shrink:0;width:100%;max-width:100%;padding-inline:calc(var(--aksara-gutter-x,1rem)/2);margin-top:var(--aksara-gutter-y,0)}[hidden]{display:none!important}@keyframes aksara-fade{from{opacity:0}to{opacity:1}}@keyframes aksara-zoom{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes aksara-slide{from{opacity:0;transform:translateY(.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes aksara-spin{to{transform:rotate(360deg)}}@keyframes aksara-progress-stripes{from{background-position-x:1rem}to{background-position-x:0}}@keyframes aksara-bounce{0%,100%{transform:translateY(-15%)}50%{transform:translateY(0)}}@keyframes aksara-pulse{0%,100%{opacity:1}50%{opacity:.5}}@keyframes aksara-placeholder-wave{100%{transform:translateX(100%)}}`;
}
