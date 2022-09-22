import Layout from "../components/Layouts/LayoutAnimate";
import { Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Layout title="404">
      <Text fontSize="6xl" fontWeight="bold">
        Not Found
      </Text>
      <Text fontSize="lg">The page you're looking for</Text>
    </Layout>
  );
};

export default ErrorPage;
