import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface Palette {
    custom: {
      background: string;
      yellowLight: string;
      darkGray: string;
      lightGray: string;
      errorRed: string;
      lightBorder: string;
      positiveGreen: string;
    };
  }

  interface PaletteOptions {
    custom: {
      background: string;
      yellowLight: string;
      darkGray: string;
      lightGray: string;
      errorRed: string;
      lightBorder: string;
      positiveGreen: string;
    };
  }

  interface TypographyVariants {
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    headline1: React.CSSProperties;
    headline2: React.CSSProperties;
    headline3: React.CSSProperties;
    label1: React.CSSProperties;
    label2: React.CSSProperties;
    label3: React.CSSProperties;
    label4: React.CSSProperties;
    text1: React.CSSProperties;
    text2: React.CSSProperties;
    text3: React.CSSProperties;
    text4: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    headline1?: React.CSSProperties;
    headline2?: React.CSSProperties;
    headline3?: React.CSSProperties;
    label1?: React.CSSProperties;
    label2?: React.CSSProperties;
    label3?: React.CSSProperties;
    label4?: React.CSSProperties;
    text1?: React.CSSProperties;
    text2?: React.CSSProperties;
    text3?: React.CSSProperties;
    text4?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle1: true;
    subtitle2: true;
    headline1: true;
    headline2: true;
    headline3: true;
    label1: true;
    label2: true;
    label3: true;
    label4: true;
    text1: true;
    text2: true;
    text3: true;
    text4: true;
  }
}
