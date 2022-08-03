import { Container, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/Layouts/LayoutAnimate";
import { Title, WorkImage, Meta } from "../../components/Projects";
import Paragraph from "../../components/Paragraph";

function serverManager() {
  return (
    <Layout title="Manage server">
      <Container>
        <WorkImage
          src="/image/projects/appbarang1.png"
          alt="app barang image 1"
        />
        <WorkImage
          src="/image/projects/appbarang2.png"
          alt="app barang image 2"
        />
        <Title link="">Server manager</Title>
        <Paragraph>
          Di projek ini, saya membuat web app untuk mengatur barang-barang di
          ruangan server seperti server, baterai, AC, dan lainnya. Web app ini
          juga mengecek suhu dan kelembapan ruangan server. Jika, suhu dan atau
          kelembapan naik maka akan ada pemberitahuan pesan ke petugas lewat
          Telegram bot untuk segera melakukan pemeriksaan
        </Paragraph>
        <List ml={4} my={2} align="center">
          <ListItem>
            <Meta>Stacked</Meta>
            <span>Nuxt JS, Tailwind CSS, Maria DB, Three JS</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
}

export default serverManager;
