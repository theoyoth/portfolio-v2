import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layouts/Layout";
import Fonts from "../components/Fonts";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
