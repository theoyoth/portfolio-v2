import Layout from "../components/Layouts/LayoutAnimate";
import { Text, Container, Button, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const ErrorPage = () => {
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
        <Flex
          alignItems="center"
          justifyContent="center"
          borderWidth="1"
          borderColor="blue.500"
        >
          <Link href="/" passHref>
            <Button colorScheme="blue" leftIcon={<Icon as={IoChevronBack} />}>
              Homepage
            </Button>
          </Link>
        </Flex>
      </Container>
    </Layout>
  );
};

export default ErrorPage;
