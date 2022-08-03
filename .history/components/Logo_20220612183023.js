import { Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <Flex alignItems="center" justifyContent="space-between">
            <Image src="/image/logo.png" alt="logo" width="25" height="25" />
            <Text fontFamily="Pushster, cursive" letterSpacing={1.1}>
              Theoyoth
            </Text>
          </Flex>
        </a>
      </Link>
    </Container>
  );
};

export default Logo;
