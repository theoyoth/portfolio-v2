import { Box, SimpleGrid, Container, Heading, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io5";
import Layout from "../components/Layouts/LayoutAnimate";
import { Meta } from "../components/Projects";

const Posts = ({ data }) => {
  return (
    <Layout title="Posts">
      <Container maxW="550px">
        <Flex alignItems="center" mb={4}>
          <Heading as="h3" fontSize={20} mr={2}>
            Latest Posts on youtube
          </Heading>
          <IoLogoYoutube style={{ fontSize: "1.2rem" }} />
        </Flex>
        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          {data.map((item, index) => (
            <Flex
              direction="column"
              key={item?.id?.videoId}
              alignItems="center"
            >
              <NextLink
                href={`https://www.youtube.com/watch?v=${item?.id?.videoId}`}
              >
                <a target="_blank">
                  <Image
                    src={item?.snippet?.thumbnails?.medium?.url}
                    width={item?.snippet?.thumbnails?.medium?.width}
                    height={item?.snippet?.thumbnails?.medium?.height}
                    style={{
                      borderRadius: "12px",
                    }}
                  />
                </a>
              </NextLink>
              <Box align="center">
                <Meta>Link</Meta>
                <span>{decodeURI(item?.snippet?.title.split("|")[0])}</span>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?maxResults=4&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}&channelId=UCd1DGoZCWy1xPX1K7WvVvFg&part=snippet&order=date`
  );

  const data = await res.json();

  return {
    props: {
      data: data.items,
    },
  };
}

export default Posts;
