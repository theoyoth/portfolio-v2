import { Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Logo = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <Flex w="100px" alignItems="center" justifyContent="space-between">
            <Image src="/image/logo.png" alt="logo" width="25" height="25" />
            <Text fontFamily="cursive" letterSpacing={1.1}>
              Theoyoth
            </Text>
          </Flex>
        </a>
      </Link>
    </Container>
  );
};

export default Logo;
