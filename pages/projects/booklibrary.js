import { Container, List, ListItem,Flex } from "@chakra-ui/react";
import Layout from "../../components/Layouts/LayoutAnimate";
import Paragraph from "../../components/Paragraph";
import { Title, WorkImage, Meta,WorkImageMobile } from "../../components/Projects";
import LinkGithub from "../../components/LinkGithub";

function BookLibrary() {
  return (
    <Layout title="Book library">
      <Container>
        <WorkImage src="/image/projects/book-library.png" alt="book library website" />
        <WorkImage src="/image/projects/book-library2.png" alt="book library website" />
        <Flex
          justifyContent={{ base: "center", sm: "space-between" }}
          alignItems={{ base: "center", sm: "none" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <WorkImageMobile
            src="/image/projects/book-library-mobile.png"
            alt="book library mobile preview"
          />
          <WorkImageMobile
            src="/image/projects/book-library-mobile2.png"
            alt="book library mobile preview"
          />
        </Flex>
        <Title link="https://booklibraryapp.vercel.app/">
          Book library website 📚
        </Title>
        <Paragraph>
          Website ini untuk menyimpan data-data buku. saya punya beberapa buku  di rak, kadang-kadang teman-teman saya meminjamnya. jadi, website ini mencatat detail buku dan statusnya, apakah ada di rak atau di sedang di pinjam. saya menggunakan MERN stack.
        </Paragraph>
        
        <List ml={4} my={2} align="center">
          <ListItem>
            <Meta>Stack</Meta>
            <span>React js, Tailwind CSS, Node js, Express js, MongoDB, Mongoose</span>
          </ListItem>
        </List>
        <LinkGithub href="https://github.com/theoyoth/mern-library"/>
      </Container>
    </Layout>
  )
}

export default BookLibrary