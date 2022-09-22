import Layout from "../components/Layouts/LayoutAnimate";
import Link from "next/link";
import {
  Text,
  Container,
  Button,
  Flex,
  Box,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";

export default function ErrorPage() {
  return (
    <Layout title="404">
      <Container borderWidth="1" borderColor="blue.500">
        <Flex
          h="200"
          alignItems="center"
          direction="column"
          justifyContent="center"
        >
          <Text fontSize="5xl" fontWeight="bold">
            Not Found
          </Text>
          <Text fontSize="lg">The page you're looking for</Text>
        </Flex>
        <Divider my={4} />
        <Box align="center">
          <Link href="/" passHref>
            <Button colorScheme="blue" leftIcon={<Icon as={IoChevronBack} />}>
              Homepage
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
}
