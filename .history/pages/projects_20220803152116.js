import { Box, SimpleGrid, Text, Heading, Container } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Layout from "../components/Layouts/LayoutAnimate";
import travelThumb from "../public/image/projects/travel.png";
import movieThumb from "../public/image/projects/movieapp.png";
import realEstateThumb from "../public/image/projects/real-estate1.png";
import appBarang1Thumb from "../public/image/projects/appbarang1.png";
import quizApp from "../public/image/projects/quizyoth.png";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <Layout title="Projects">
      <Container maxW="550px">
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Box>
            <Image
              src={travelThumb}
              alt="travel's thumbnail"
              className={styles.thumbnail}
            />
            <NextLink href="projects/travel" target="_blank">
              <a>
                <Text mt={2}>Travel website front-end</Text>
              </a>
            </NextLink>
          </Box>
          <Box>
            <Image
              src={appBarang1Thumb}
              alt="appBarang's thumbnail"
              height={700}
              className={styles.thumbnail}
            />
            <NextLink href="projects/serverManager" target="_blank">
              <a>
                <Text mt={2}>
                  Web app to manage server room and check temperature
                </Text>
              </a>
            </NextLink>
          </Box>
          <Box>
            <Image
              src={movieThumb}
              alt="todo's thumbnail"
              height={700}
              className={styles.thumbnail}
            />
            <NextLink href="projects/movieapp" target="_blank">
              <a>
                <Text mt={2}>Movie search app using Nuxt JS</Text>
              </a>
            </NextLink>
          </Box>
          <Box>
            <Image
              src={realEstateThumb}
              alt="real estate"
              height={700}
              className={styles.thumbnail}
            />
            <NextLink href="projects/realestate" target="_blank">
              <a>
                <Text mt={2}>Real estate website</Text>
              </a>
            </NextLink>
          </Box>
          <Box>
            <Image
              src={quizApp}
              alt="quiz app"
              height={700}
              className={styles.thumbnail}
            />
            <NextLink href="projects/quizapp" target="_blank">
              <a>
                <Text mt={2}>Quiz app</Text>
              </a>
            </NextLink>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
