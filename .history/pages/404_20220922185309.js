import Layout from "../components/Layouts/LayoutAnimate";
import { Text, Container } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Layout title="404">
      <Container maxH="lg" border="1" borderColor="blue.500">
        <Text fontSize="6xl" fontWeight="bold">
          Not Found
        </Text>
        <Text fontSize="lg">The page you're looking for</Text>
      </Container>
    </Layout>
  );
};

export default ErrorPage;
