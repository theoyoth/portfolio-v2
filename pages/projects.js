import { SimpleGrid, Heading, Container, Flex } from "@chakra-ui/react";
import { IoFolderOpen } from "react-icons/io5";
import Layout from "../components/Layouts/LayoutAnimate";
import { ProjectDetail } from "../content/Project";
import { ProjectWrapper } from "../components/Projects";

export default function Projects() {
  return (
    <Layout title="Projects">
      <Container maxW="550px">
        <Flex alignItems="center" mb={4}>
          <Heading as="h3" fontSize={20} mr={2}>
            Projects
          </Heading>
          <IoFolderOpen />
        </Flex>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {ProjectDetail.map((project, index) => (
            <ProjectWrapper
              key={index}
              src={project.src}
              title={project.title}
              href={project.href}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
