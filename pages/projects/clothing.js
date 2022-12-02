import { Container, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/Layouts/LayoutAnimate";
import Paragraph from "../../components/Paragraph";
import { Title, WorkImage, Meta } from "../../components/Projects";

export default function Clothing() {
  return (
    <Layout title="Movie App">
      <Container>
        <WorkImage src="/image/projects/clothing2.png" alt="clothing website" />
        <WorkImage src="/image/projects/clothing3.png" alt="clothing website" />
        <Title link="https://online-clothing.vercel.app/">
          Clothing website 🧥
        </Title>
        <Paragraph>
          Website di mana user bisa memilih pakaian yang diinginkan dan
          menambahkannya ke keranjang.
        </Paragraph>
        <List ml={4} my={2} align="center">
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next JS, Tailwind CSS, Framer Motion, Zustand</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
}
