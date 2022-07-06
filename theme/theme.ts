import { extendTheme } from "@chakra-ui/react";
import components from "./components";
import semanticTokens from "./tokens";

const theme = extendTheme({
  colors: {
    grey: {
      50: "#FCFCFC",
      100: "#F5F5F5",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    purple: {
      50: "#F2F0FF",
      100: "#D5CCFF",
      300: "#A190F9",
      500: "#7560E2",
      700: "#5848A9",
      900: "#3A3071",
    },
  },
  fonts: {
    body: "'Noto Sans', sans-serif",
    heading: "'Noto Sans', sans-serif",
  },
  fontWeights: {
    regular: "400",
    semibold: "600",
  },
  radii: {
    md: "8px",
  },
  shadows: {},
  semanticTokens,
  components,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "pageBg",
      },
    },
  },
  config: {
    initialColorMode: "light",
  },
});

export default theme;
