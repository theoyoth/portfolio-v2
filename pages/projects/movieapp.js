import { Container, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/Layouts/LayoutAnimate";
import LinkGithub from "../../components/LinkGithub";
import Paragraph from "../../components/Paragraph";
import { Title, WorkImage, Meta } from "../../components/Projects";

export default function Movieapp() {
  return (
    <Layout title="Movie App">
      <Container>
        <WorkImage
          src="/image/projects/movieapp-2.png"
          alt="Movie search app image 1"
        />
        <WorkImage
          src="/image/projects/movieapp-3.png"
          alt="Movie search app image 2"
        />
        <Title link="https://moviename.netlify.app/">Movie search app 🎥</Title>
        <Paragraph>
          Di project ini, saya menggunakan API untuk mengambil data-data film
          lalu memunculkannya ke user. terdapat juga search bar untuk mencari
          film tertentu untuk melihat detailnya.
        </Paragraph>
        <List ml={4} my={2} align="center">
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nuxt JS</span>
          </ListItem>
        </List>
        <LinkGithub href="https://github.com/theoyoth/movie-search-app"/>
      </Container>
    </Layout>
  );
}
