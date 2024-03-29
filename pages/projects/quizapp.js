import { Container, List, ListItem, Flex } from "@chakra-ui/react";
import Layout from "../../components/Layouts/LayoutAnimate";
import LinkGithub from "../../components/LinkGithub";
import Paragraph from "../../components/Paragraph";
import {
  Title,
  WorkImage,
  WorkImageMobile,
  Meta,
} from "../../components/Projects";

export default function Quizapp() {
  return (
    <Layout title="Quiz App">
      <Container>
        <WorkImage src="/image/projects/quizyoth2.png" alt="quiz app image 1" />
        <Flex
          justifyContent={{ base: "center", sm: "space-between" }}
          alignItems={{ base: "center", sm: "none" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <WorkImageMobile
            src="/image/projects/quizyoth-mobile1.png"
            alt="quiz app image 3"
          />
          <WorkImageMobile
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
        <LinkGithub href="https://github.com/theoyoth/quiz-game"/>
      </Container>
    </Layout>
  );
}
