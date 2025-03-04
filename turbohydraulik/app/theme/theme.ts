import { createTheme } from "@mui/material";

// SPACING SYSTEM (px)
// 2 / 4 / 8 /12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

// FONT SIZE SYSTEM (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52
// / 62 / 74 / 86 / 98

const theme = createTheme({
  breakpoints: {
    values: {
      xl: 1920,
      lg: 1440,
      md: 1200,
      sm: 600,
      xs: 375,
      xxs: 200,
      mobile: 1022,
    },
  },
  palette: {
    primary: {
      main: "#02578C",
    },
    secondary: {
      main: "#FED33B",
    },

    custom: {
      background: "#F9FAFB",
      darkGray: "#374151",
      lightGray: "#6B7280",
      errorRed: "#ff3333",
      lightBorder: "#F3F4F6",
      positiveGreen: "#1F7640",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    subtitle1: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "14px",
    },
    subtitle2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "14px",
      color: "gray",
    },
    headline1: {
      fontSize: "48px",
      fontWeight: "bold",
    },
    headline2: {
      fontSize: "36px",
      fontWeight: "bold",
    },
    headline3: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    label1: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    label2: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    label3: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    label4: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    text1: {
      fontSize: "16px",
    },
    text2: {
      fontSize: "14px",
    },
    text3: {
      fontSize: "12px",
    },
    text4: {
      fontSize: "10px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          minWidth: "unset",
          padding: 0,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          cursor: "inherit",

          textTransform: "none",
          userSelect: "none",
          fontFamily: "Inter",
        },
      },
    },
  },
});

export default theme;
