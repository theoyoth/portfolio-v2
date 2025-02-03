import { Container, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/Layouts/LayoutAnimate";
import { Title, WorkImage, Meta } from "../../components/Projects";
import Paragraph from "../../components/Paragraph";
import LinkGithub from "../../components/LinkGithub";

export default function Travel() {
  return (
    <Layout title="Travel">
      <Container>
        <WorkImage src="/image/projects/travel.png" alt="travel website" />
        <Title link="">Travel web front-end 🐱‍🏍</Title>
        <Paragraph>
          Di project ini, saya membuat frontend untuk travel website. responsif
          untuk laptop dan mobile.
        </Paragraph>
        <List ml={4} my={2} align="center">
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, SCSS, JS</span>
          </ListItem>
        </List>
        <LinkGithub href="https://github.com/theoyoth/travel-website"/>
      </Container>
    </Layout>
  );
}
