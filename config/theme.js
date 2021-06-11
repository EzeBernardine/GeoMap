const white = "#fff";
const black = "#111";
const transaprent = "transaprent";

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    teal: "#02AAB0",
    darkTeal: "#005D67",
    Spearmint: " #85FFC7",
    Aqua: "#45D1D6",
    offWhite: "#E8F7F7",
    seaGreen: "#00B3AA",
    background: "#01969E",
    background: "#08163E",
    background: "#E0E2EA",
    white: white,
    transaprent: transaprent,
  },
  error: {
    main: "#e73939",
    light: "#FFF3EE",
    dark: "#9c2e2e ",
    contrastText: white,
  },
  success: {
    main: "#17e904",
    light: "#cff0cc61",
    dark: "#366936",
    contrastText: white,
  },
  warning: {
    main: "#dcdc2c",
    light: "#f3f3d0",
    dark: "#787836",
    contrastText: white,
  },
  info: {
    main: "#2136e5b3",
    light: "#e4f3fe",
    dark: "#313174",
    contrastText: white,
  },
  grey: {
    medium: "#E4E4E4",
    dark: "#666666",
    green: "#B1E4DC",
    light: "#F4F4F4",
    background: "#E5E5E5",
    line: '#C1C1C1',
    100: '#F2F2F2',
    200: '#9F9F9F',
    300: '#4E4E4E'
  },
};

const shadows = {
  0: "none",
};

const typography = {
  fontFamily: '"Fira Sans", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontWeightNormal: "normal",
};

const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

export const spacing = {
  none: 0,
  xxsmall: "4px",
  xsmall: "6px",
  small: "12px",
  medium: "20px",
  gutter: "22px",
  large: "32px",
  xlarge: "48px",
  xxlarge: "96px",
};

export const fontSizes = {
  xxsmall: "0.75rem", //12px
  xsmall: "0.813rem", //13px
  small: "0.875rem", //14px
  medium: "1rem", //16px
  large: "1.125rem", //18px
  xlarge: "1.25rem", //20px
  xxlarge: "1.375rem", //22px
};

const shape = {
  borderRadius: spacing["xxsmall"],
};

export const theme = {
  palette,
  shadows,
  typography,
  zIndex,
  shape,
  fontSizes,
  spacing,
};
