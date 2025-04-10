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
      yellowLight: "#fff8e2",
      blueLight: "#e5edf1",
      darkGray: "rgb(41, 41, 41)",
      lightGray: "#f4f4f4",
      errorRed: "#ff3333",
      lightBorder: "#F3F4F6",
      positiveGreen: "#3AEE7F",
      darkBlue: "#003F67",
      inNumbersBackground: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
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
          fontFamily: "Inter, sans-serif",
        },
      },
    },
  },
});

export default theme;
