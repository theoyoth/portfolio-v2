import Layout from "../components/Layouts/LayoutAnimate";
import {
  Text,
  Link,
  Button,
  Icon,
  Heading,
  List,
  ListItem,
  Container,
  Box,Flex
} from "@chakra-ui/react";
import { IoLogoInstagram, IoLogoGithub, IoLogoYoutube } from "react-icons/io5";

import Image from "next/image";

export default function Home() {
  return (
    <Layout title="Home">
      <Container maxW="550px">
        <Text textAlign="center" fontSize="3xl" fontWeight="bold">
          Theo Servis Bantang
        </Text>
        <Text textAlign="center" fontSize="md">
          Frontend web developer
        </Text>
        <Flex alignItems="center" justifyContent="center" marginTop="10px">
          <Image src="/image/avatar.jpg" width={120} height={118} style={{borderRadius:"50%"}} />
        </Flex>
        <Heading as="h3" size="2xl" variant="section-title">
          About Me
        </Heading>
        <Text>
          My name is Theo, focus on make website in frontend side and little backend
        </Text>
        <Heading size="2xl" variant="section-title">
          What I Like
        </Heading>
        <Box>
          Art, Music, Playing Guitar,{" "}
          <Link href="https://www.deviantart.com/yoth1" isExternal>
            Edit Photos
          </Link>
        </Box>
        <Heading size="2xl" variant="section-title">
          Find Me
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/theoyoth" isExternal>
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                theoyoth
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/theoyoth/" isExternal>
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                theoyoth
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.youtube.com/channel/UCd1DGoZCWy1xPX1K7WvVvFg"
              isExternal
            >
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoYoutube} />}
              >
                CodeByTheo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.youtube.com/channel/UCF3t40-awz3eOb9FqNhcesQ"
              isExternal
            >
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoYoutube} />}
              >
                Theoyoth
              </Button>
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
}
