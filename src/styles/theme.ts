export interface Breakpoint {
  mobile: string;
  mobileMedium: string;
  pad: string;
  desktop: string;
}

interface ThemeType {
  breakpoints: Breakpoint;
  [key: string]: any;
}

const theme: ThemeType = {
  grid: {},
  border: {},
  font: {
    family: "Lato",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {},
  },
  colors: {
    mediumGreen: "#00DA93",
    black: "#28241C",
    darkGray: "#867F70",
    mediumGray: "#D4CEC3",
    gray: "#C4C4C4",
    lightGray: "#FBFBFD",
    mediumRed: "#FF6B6F",
    mediumYellow: "#FFCE00",
    xLightWhite: "#F2F2FO",
  },
  spacings: {},
  breakpoints: {
    mobile: "0px",
    mobileMedium: "374px",
    pad: "600px",
    desktop: "1024px",
  },
};

export default theme;
