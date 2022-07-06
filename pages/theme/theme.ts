import { extendTheme } from "@chakra-ui/react";
import components from "./components";
import semanticTokens from "./tokens";

const theme = extendTheme({
  colors: {},
  fonts: {},
  fontWeights: {},
  radii: {},
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
