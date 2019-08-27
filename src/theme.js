// example base theme from @theme-ui/presets
const heading = {
  fontFamily: "body",
  lineHeight: "body",
  fontWeight: "body",
  mt: 0
}

export default {
  breakpoints: ["40em", "52em", "64em", "85.375em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "'Work Sans', Arial, sans-serif",
    heading: "'Work Sans', sans-serif",
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
    background: "#fbfbfb",
    primary: "#79e789",
    secondary: "#222",
    accent: "aqua",
    muted: "#f7f8fc",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      bg: "background"
    },
    Main: {
      fontSize: [2, 3],
      lineHeight: "body"
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
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    // Buttons
    buttons: {
      primary: {
        color: 'background',
        bg: 'primary',
      },
      secondary: {
        color: 'background',
        bg: 'secondary',
      },
      gray: {
        color: 'background',
        bg: 'muted',
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
      borderRadius: "1em",
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
