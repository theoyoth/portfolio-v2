import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";
import Logo from "./Logo";
import ThemeToggleButton from "./ThemeToggleButton";

const LinkItem = ({ path, href, _target, children, ...props }) => {
  const active = path === href;
  const inactivecolor = useColorModeValue("gray.600", "whiteAlpha.800");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "#777778" : undefined}
        color={active ? "#202034" : inactivecolor}
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
      w="100%"
      bg={useColorModeValue("#f1f1f2", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        maxW="container.md"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Flex>
          <Flex align="center" mr={5}>
            <Logo />
          </Flex>
          <Stack direction="row" spacing="5">
            <LinkItem href="/posts" path={path}>
              Videos
            </LinkItem>
            <LinkItem href="/projects" path={path}>
              Projects
            </LinkItem>
          </Stack>
        </Flex>
        <ThemeToggleButton />
      </Container>
    </Box>
  );
};

export default Navbar;
