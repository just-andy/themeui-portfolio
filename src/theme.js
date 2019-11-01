// example base theme from @theme-ui/presets
const heading = {
  fontFamily: "body",
  lineHeight: "body",
  fontWeight: "body",
  mt: 0,
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
    text: "#060606",
    background: "#f4f7f6",
    primary: "#1fb622",
    secondary: "#cff0c5",
    accent: "text",
    muted: "#f7f8fc",
    dark: "text",
    light: "white",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      bg: "background",
    },
    Main: {
      fontSize: [2, 3],
      lineHeight: "body",
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
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "text",
        textDecoration: "underline",
      },
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
        color: "light",
        bg: "primary",
      },
      secondary: {
        color: "dark",
        bg: "secondary",
      },
      gray: {
        color: "background",
        bg: "muted",
      },
    },
    // Forms
    forms: {
      input: {
        color: "primary",
      },
      label: {
        color: "primary",
        fontWeight: "500",
        display: "block",
        py: 4,
      },
    },
    // Nav Link
    navlink: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "text",
        textDecoration: "underline",
      },
    },
    hollow: {
      color: "primary",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "primary",
      borderRadius: "0.25em",
      py: 2,
      px: [3, 4],
      m: 1,
      fontSize: [3, 4],
      textDecoration: "none",
      ":hover": {
        backgroundColor: "primary",
        color: "#fff",
        textDecoration: "none",
      },
      "&.active": {
        backgroundColor: "primary",
        color: "#fff",
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
