import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layouts/Layout";
import Fonts from "../components/Fonts";
import Particles from "react-tsparticles";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
      />
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
