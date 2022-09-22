import Layout from "../components/Layouts/LayoutAnimate";
import { Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Layout title="404">
      <Text fontSize="2xl">Not Found</Text>
    </Layout>
  );
};

export default ErrorPage;
