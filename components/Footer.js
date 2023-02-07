import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box opacity={0.6} align="center" fontSize="sm" pt={4}>
      &copy;{new Date().getFullYear()} Theo. All Rights Reserved.
    </Box>
  );
};

export default Footer;
