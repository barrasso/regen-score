import {
  Flex,
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <Text>
          Turning <Code>Degens</Code> into <Code>Regens</Code> since 2021.
        </Text>
      </Flex>

      <CTA />

    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Made With ❤️ in Lisboa 🇵🇹</Text>
    </Footer>
  </Container>
)

export default Index
