import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box, Container } from "@chakra-ui/react";

const Layout = ({ router, children }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar path={router.asPath} />
      <Container
        maxW="container.xl"
        pt={14}
        border
        borderWidth="1px"
        borderColor="white"
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
