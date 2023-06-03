import { globalCss, styled } from "./stitches.config";

export const globalStyles = globalCss({
  /* 
  ===== índice =====
    1° Reset Global
    2° Set Html & Body
    3° Set link and button
    4° Set img
    5° Heading & Text Body
  ==================
  */
  // ===== Reset Global =====
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    border: "none",
    listStyle: "none",
    textDecoration: "none",
    outline: "none",
    fontSize: "1.6rem",
    fontWeight: "$rg",
    fontFamily: "Inter, sans-serif",
  },
  // ===== Set Html & Body =====
  "html, body": {
    color: "$grey_100",
    fontSize: "62.5%",
    background: "$grey_600",
    height: "100vh",
    textRendering: "optimizeLegibility",
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
    scrollbarColor: "$violet_200",
    "&::-webkit-scrollbar": {
      width: "0.4rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "$violet_200",
      borderRadius: "2rem",
    },
  },
  "#root": {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  // ===== Set link and button =====
  "a, button": {
    cursor: "pointer",
    background: "transparent",
  },
  //===== Set img =====
  img: {
    display: "block",
    width: "100%",
  },
  //===== Heading & Text Body =====
  h1: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "$bd",
    fontSize: "4.8rem",
    "@sm": {
      fontSize: "4rem",
    },
  },
  h2: {
    fontFamily: "KoHo, sans-serif",
    fontWeight: "$bd",
    fontSize: "4rem",
    "@sm": {
      fontSize: "3.2rem",
    },
  },
  h3: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "$md",
    fontSize: "3.2rem",
    "@sm": {
      fontSize: "2.4rem",
    },
  },
  h4: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "$rg",
    fontSize: "2.4rem",
    "@sm": {
      fontSize: "1.8rem",
    },
  },
  h5: {
    fontFamily: "KoHo, sans-serif",
    fontWeight: "$rg",
    fontSize: "1.8rem",
    "@sm": {
      fontSize: "1.4rem",
    },
  },
  p: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "$rg",
    fontSize: "2rem",
    "@sm": {
      fontSize: "1.6rem",
    },
  },
  "a, li, button, span": {
    fontFamily: "KoHo, sans-serif",
    fontWeight: "$sb",
    fontSize: "1.8rem",
    "@sm": {
      fontSize: "1.4rem",
    },
  },
  label: {
    fontFamily: "KoHo, sans-serif",
    fontWeight: "$sb",
    fontSize: "2rem",
    "@sm": {
      fontSize: "1.6rem",
    },
  },
  "input, textarea": {
    fontFamily: "Inter, sans-serif",
    fontWeight: "$md",
    fontSize: "1.8rem",
    background: "transparent",
    "@sm": {
      fontSize: "1.4rem",
    },
  },
});

export const WrapperContent = styled("div", {
  flex: 1,
});

export const Container = styled("div", {
  margin: "0 auto",
  width: "100%",
  maxWidth: "121.6rem",
  "@md": {
    maxWidth: "63rem",
  },
  "@sm": {
    maxWidth: "33.2rem",
  },
});
