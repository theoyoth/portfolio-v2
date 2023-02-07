import {Icon} from '@chakra-ui/icons'
import { Button,List,Link,useColorModeValue } from '@chakra-ui/react'
import {BsGithub} from 'react-icons/bs'

function LinkGithub({href}) {
  return (
    <List align="center">
        <Link href={href} isExternal>
            <Button variant="outline"
            colorScheme="gray"
            leftIcon={<Icon as={BsGithub} />}
            >
            Github
            </Button>
        </Link>
    </List>
  )
}

export default LinkGithub