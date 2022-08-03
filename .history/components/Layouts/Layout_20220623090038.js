import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box, Container } from "@chakra-ui/react";
import Particles from "react-tsparticles";

const Layout = ({ router, children }) => {
  return (
    <Box as="main" pb={8}>
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
              value: "9fafca",
            },
            number: {
              density: {
                enabled: true,
                area: 1080,
              },
              limit: 0,
              value: 400,
            },
          },
        }}
      />
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
