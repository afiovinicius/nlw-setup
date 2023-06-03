import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Patterns
      white: "hsla(0, 0%, 100%, 1)",
      black: "hsla(0, 0%, 0%, 1)",
      // Violet
      violet_100: "hsla(255, 92%, 76%, 1)",
      violet_200: "hsla(258, 90%, 66%, 1)",
      violet_300: "hsla(262, 83%, 58%, 1)",
      violet_400: "hsla(263, 70%, 50%, 1)",
      violet_500: "hsla(263, 69%, 42%, 1)",
      violet_600: "hsla(263, 67%, 35%, 1)",
      // Colors
      blue: "hsla(198, 71%, 45%, 1)",
      green: "hsla(142, 71%, 45%, 1)",
      red: "hsla(0, 71%, 45%, 1)",
      yellow: "hsla(61, 71%, 45%, 1)",
      // Gray Scale
      grey_100: "hsla(210, 40%, 98%, 1)",
      grey_200: "hsla(253, 95%, 85%, 1)",
      grey_300: "hsla(240, 5%, 65%, 1)",
      grey_400: "hsla(240, 5%, 26%, 1)",
      grey_500: "hsla(240, 4%, 16%, 1)",
      grey_600: "hsla(240, 6%, 10%, 1)",
    },
    fontWeights: {
      // Regular
      rg: 400,
      // Medium
      md: 500,
      // Semi-Bold
      sb: 600,
      // Bold
      bd: 700,
    },
  },
  media: {
    // Grid Small
    sm: "(max-width: 630px)",
    // Grid Medium
    md: "(max-width: 1200px)",
    // Grid Large
    lg: "(max-width: 1216px)",
  },
});
