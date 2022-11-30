import { Flex, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Box>
      <Link href="/">
        <a>
          <Flex w="100px" alignItems="center" justifyContent="space-between">
            <Image
              src="/image/logo-theo.png"
              alt="logo"
              width="25"
              height="25"
            />
            <Text fontFamily="Pushster, cursive" letterSpacing={1.1}>
              Theoyoth
            </Text>
          </Flex>
        </a>
      </Link>
    </Box>
  );
};

export default Logo;
