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
        options={{
          background: { color: "#333333" },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "ffffff",
            },
            number: {
              density: {
                enabled: true,
                area: 1080,
              },
              limit: 0,
              value: 400,
            },
            opacity: {
              animation: {
                enabled: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false,
              },
              random: {
                enabled: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enabled: true,
                minimumValue: 0.05,
              },
              value: 1,
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
