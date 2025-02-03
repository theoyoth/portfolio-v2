import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layouts/Layout";
import Fonts from "../components/Fonts";

// vercel analytics
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
          <Analytics />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
