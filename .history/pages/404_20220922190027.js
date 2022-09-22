import Layout from "../components/Layouts/LayoutAnimate";
import { Text, Container, Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <Layout title="404">
      <Container maxH="lg" borderWidth="1" borderColor="blue.500">
        <Text fontSize="5xl" fontWeight="bold">
          Not Found
        </Text>
        <Text fontSize="lg" textColor="blue.400">
          The page you're looking for
        </Text>
        <Link href="/" passHref>
          <Button colorScheme="blue" leftIcon={<Icon as={IoChevronBack} />}>
            Homepage
          </Button>
        </Link>
      </Container>
    </Layout>
  );
};

export default ErrorPage;
