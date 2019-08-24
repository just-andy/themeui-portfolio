// example base theme from @theme-ui/presets
const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}

export default {
  breakpoints: ["40em", "52em", "64em", "85.375em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Arial, sans-serif",
    heading: "'Anton', sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96, 124],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 400,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#111",
    background: "#ebebeb",
    primary: "tomato",
    secondary: "#30c",
    accent: "aqua",
    muted: "#f6f6f6",
  },
  // Needs fixed
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, 0.125)',
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      p: 0,
      m: 0,
      bg: "background"
    },
    Header: {
      m: 0
    },
    Container: {
      p: [2, 3],
      my: [0, 2]
    },
    Footer: {
      my: 2
    },
    h1: {
      ...heading,
      fontSize: 7,
    },
    h2: {
      ...heading,
      fontSize: 6,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    headline: {
      ...heading,
      fontSize: [8,9]
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    navlink: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    hollow: {
      color: "primary",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "primary",
      borderRadius: "0.25em",
      py: 1,
      px: [3 ,4 , 5],
      m: 1,
      textDecoration: "none",
      ":hover": {
        backgroundColor: "primary",
        color: "#fff",
        textDecoration: "none",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
}
