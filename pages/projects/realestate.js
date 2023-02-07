import {
  Container,
  List,
  ListItem,
} from "@chakra-ui/react";
import Layout from "../../components/Layouts/LayoutAnimate";
import {
  Title,
  WorkImage,
  Meta,
} from "../../components/Projects";
import Paragraph from "../../components/Paragraph";
import LinkGithub from "../../components/LinkGithub";

export default function Realestate() {
  return (
    <Layout title="Travel">
      <Container>
        <WorkImage
          src="/image/projects/real-estate1.png"
          alt="real estate website"
        />
        <WorkImage
          src="/image/projects/real-estate2.png"
          alt="real estate website"
        />
        <Title link="">Real estate website 🏠</Title>
        <Paragraph>
          Di projek ini, saya membuat real estate web menggunakan API dari Rapid
          API, user bisa mencari perumahan yang diinginkan sesuai spesifikasi
          yang dimasukkan.
        </Paragraph>
        <List ml={4} my={2} align="center">
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next JS</span>
          </ListItem>
        </List>
        <LinkGithub href="https://github.com/theoyoth/real-estate"/>
      </Container>
    </Layout>
  );
}
