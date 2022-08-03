import {
  Box,
  Text,
  SimpleGrid,
  Container,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Layout from "../components/Layouts/LayoutAnimate";
import NextLink from "next/link";
import Image from "next/image";

import styles from "../styles/Projects.module.css";
import { Meta } from "../components/Projects";

import youtubeThumb1 from "../public/image/projects/youtube-thumb1.jpg";
import youtubeThumb2 from "../public/image/projects/youtube-thumb2.jpg";
import youtubeThumb3 from "../public/image/projects/youtube-thumb3.jpg";

const Posts = ({ data }) => {
  console.log(data);
  return (
    <Layout title="Posts">
      <Container maxW="550px">
        <Heading as="h3" fontSize={20} mb={4}>
          Latest Posts on youtube
        </Heading>
        {data.map((item, index) => (
          <SimpleGrid columns={[1, 1, 2]} gap={5} placeItems="center">
            <Flex direction="column">
              <NextLink href="#">
                <a target="_blank">
                  <Image
                    src={snippet?.thumbnails?.hight}
                    width="380"
                    height="220"
                    className={styles.thumbnail}
                  />
                </a>
              </NextLink>
              <Box align="center">
                <Meta>Link</Meta>
                <span>Youtube</span>
              </Box>
            </Flex>
          </SimpleGrid>
        ))}
        {/* <Flex direction="column">
            <NextLink
              href="https://www.youtube.com/watch?v=mNsbPbXKwNo"
              passHref
            >
              <a target="_blank">
                <Image
                  src={youtubeThumb1}
                  width="380"
                  height="220"
                  className={styles.thumbnail}
                />
              </a>
            </NextLink>
            <Box align="center">
              <Meta>Link</Meta>
              <span>Youtube</span>
            </Box>
          </Flex>
          <Flex direction="column">
            <NextLink
              href="https://www.youtube.com/watch?v=Hs42yQwixbQ"
              passHref
            >
              <a target="_blank">
                <Image
                  src={youtubeThumb2}
                  width="380"
                  height="220"
                  className={styles.thumbnail}
                />
              </a>
            </NextLink>
            <Box align="center">
              <Meta>Link</Meta>
              <span>Youtube</span>
            </Box>
          </Flex>
          <Flex direction="column">
            <NextLink
              href="https://www.youtube.com/watch?v=kKVYFIP9YQo"
              passHref
            >
              <a target="_blank">
                <Image
                  src={youtubeThumb3}
                  width="380"
                  height="220"
                  className={styles.thumbnail}
                />
              </a>
            </NextLink>
            <Box align="center">
              <Meta>Link</Meta>
              <span>Youtube</span>
            </Box>
          </Flex> */}
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API}&channelId=UCF3t40-awz3eOb9FqNhcesQ&part=snippet&order=date`
  );

  const data = await res.json();

  return {
    props: {
      data: data.items,
    },
  };
}

export default Posts;
