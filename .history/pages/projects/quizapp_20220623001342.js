import { Container, List, ListItem, Flex } from "@chakra-ui/react";
import Layout from "../../components/Layouts/LayoutAnimate";
import Paragraph from "../../components/Paragraph";
import { Title, WorkImage, Meta } from "../../components/Projects";

export default function Quizapp() {
  return (
    <Layout title="Quiz App">
      <Container>
        <WorkImage src="/image/projects/quizyoth2.png" alt="quiz app image 1" />
        <WorkImage src="/image/projects/quizyoth3.png" alt="quiz app image 2" />
        <Flex>
          <WorkImage
            src="/image/projects/quizyoth-mobile1.png"
            alt="quiz app image 3"
            w="300"
          />
          <WorkImage
            src="/image/projects/quizyoth-mobile2.png"
            alt="quiz app image 4"
          />
        </Flex>
        <Title link="https://quizyoth.netlify.app/">Quizyoth</Title>
        <Paragraph>
          Saya menggunakan API untuk mendapatkan daftar pertanyaan dan jawaban,
          saya menggunakan framework Nuxt JS untuk membangun website ini.
        </Paragraph>
        <List ml={4} my={2} align="center">
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nuxt JS</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
}
