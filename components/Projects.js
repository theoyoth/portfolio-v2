import { Image, Box, Heading, Badge, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import styles from "../styles/Projects.module.css";

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

export const ProjectWrapper = ({ src, title = "", href = "" }) => (
  <Box>
    <Image src={src} alt={title} className={styles.thumbnail} />
    <NextLink href={href} target="_blank">
      <a>
        <Text mt={2} fontWeight='semibold'>{title}</Text>
      </a>
    </NextLink>
  </Box>
);
