import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box, Container } from "@chakra-ui/react";
import Particles from "react-tsparticles";

const Layout = ({ router, children }) => {
  return (
    <Particles
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
      }}
    >
      <Box as="main" pb={8}>
        <Navbar path={router.asPath} />
        <Container maxW="container.lg" pt={14}>
          {children}
        </Container>
        <Footer />
      </Box>
    </Particles>
  );
};

export default Layout;
