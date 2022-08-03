import { Image, Box, Heading, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const Title = ({ children, link }) => (
  <Box>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading
      display="inline-block"
      as="h3"
      fontSize={20}
      mb={4}
      color="blue.400"
    >
      <NextLink href={`${link}`} passHref>
        <a target="_blank">{children}</a>
      </NextLink>
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt, ...props }) => (
  <Image
    borderRadius="lg"
    w="full"
    src={src}
    alt={alt}
    mb={4}
    mx="auto"
    {...props}
  />
);

export const WorkImageMobile = ({ src, alt, ...props }) => (
  <Image borderRadius="lg" w="230px" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
