import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box, Container } from "@chakra-ui/react";

const Layout = ({ router, children }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar path={router.asPath} />
      <Container w="container.xl" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
