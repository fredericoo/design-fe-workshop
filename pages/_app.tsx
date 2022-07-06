/* eslint-disable @next/next/no-page-custom-font */
import {
  Box,
  ChakraProvider,
  Container,
  createLocalStorageManager,
  Flex,
} from "@chakra-ui/react";
import { AppComponent } from "next/dist/shared/lib/router/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import theme from "../theme/theme";

const colorModeManager = createLocalStorageManager("saltpay-color-mode");

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Box as="main" flexGrow="1">
          <Component {...pageProps} />
        </Box>
        <Container maxW="pageWidth">
          <Footer />
        </Container>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
