import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  useColorModeValue,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";
import Logo from "./Logo";

const LinkItem = ({ path, href, _target, children, ...props }) => {
  const active = path === href;
  const inactivecolor = useColorModeValue("gray.200", "whiteAlpha.800");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "#4299E1" : undefined}
        color={active ? "#202034" : "inactivecolor"}
        borderRadius="base"
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = ({ path }) => {
  return (
    <Box
      as="nav"
      position="fixed"
      w="400px"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        maxW="container.md"
        display="flex"
        align="center"
        wrap="wrap"
        justify="space-between"
        p={2}
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
