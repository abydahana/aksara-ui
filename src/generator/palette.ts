/**
 * Semantic color palette (space-separated RGB channels) used by the CSS generator.
 *
 * Aksara ships its own palette instead of Bootstrap or Tailwind defaults:
 * near-black neutrals with a faint warm tint, a near-black primary that turns
 * off-white in dark mode, and semantic colors warmed slightly to match.
 *
 * The runtime engine (`runtimeColorNames` in aksara.ts) resolves color opacity
 * utilities such as `bg-primary/10` for exactly these names; the acceptance tests
 * keep both lists in sync.
 */
export const colors: Record<string, string> = {
  primary: "34 32 29",
  secondary: "108 104 98",
  tertiary: "166 162 156",
  success: "27 128 86",
  danger: "196 62 52",
  warning: "226 152 40",
  info: "31 113 170",
  dark: "28 26 24",
  light: "247 246 244"
};

/**
 * Dark theme channels. Fills are lifted so they stay legible on dark surfaces
 * (every value keeps >= 4:1 against the dark body background).
 */
export const darkColors: Record<string, string> = {
  primary: "236 233 228",
  secondary: "163 159 152",
  tertiary: "120 116 110",
  success: "86 190 140",
  danger: "236 112 98",
  warning: "238 182 88",
  info: "104 170 222",
  dark: "48 46 43",
  light: "247 246 244"
};

const ink = "rgb(28 26 24)";
const paper = "rgb(255 255 255)";

/**
 * Text drawn on top of a solid fill (`.btn-primary`, `.badge-warning`, ...), picked per
 * theme for contrast: light fills (warning, tertiary, light) take ink, the rest white.
 * In dark mode the lifted fills take ink as well.
 */
export const foregrounds: Record<string, string> = {
  primary: paper,
  secondary: paper,
  tertiary: ink,
  success: paper,
  danger: paper,
  warning: ink,
  info: paper,
  dark: paper,
  light: ink
};

export const darkForegrounds: Record<string, string> = {
  primary: ink,
  secondary: ink,
  tertiary: paper,
  success: ink,
  danger: ink,
  warning: ink,
  info: ink,
  dark: paper,
  light: ink
};
