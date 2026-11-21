/**
 * Semantic color palette (space-separated RGB channels) used by the CSS generator.
 *
 * The runtime engine (`runtimeColorNames` in aksara.ts) resolves color opacity
 * utilities such as `bg-primary/10` for exactly these names; the acceptance tests
 * keep both lists in sync.
 */
export const colors: Record<string, string> = {
  primary: "15 23 42",
  secondary: "100 116 139",
  tertiary: "148 163 184",
  success: "34 197 94",
  danger: "244 63 94",
  warning: "245 158 11",
  info: "6 182 212",
  dark: "15 23 42",
  light: "248 250 252"
};
