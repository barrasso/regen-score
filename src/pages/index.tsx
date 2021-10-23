import {
  Flex,
  Text,
  Code,
} from '@chakra-ui/react'
import React, { useState } from "react"
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { ethers } from 'ethers'

const Index = () => {
  const [absolved, setAbsolved] = useState(false)

  async function requestAccount() {
    if ((window as any)['ethereum']) {
      try {
        // Request account access if needed
        await (window as any)['ethereum'].enable()
        const provider = new ethers.providers.Web3Provider((window as any)['ethereum'])
        const signer = provider.getSigner()
        await absolveDegeneracy(signer)

      } catch (error) {
        // User denied account access
        throw new Error('User denied account access.')
      }
    } else {
      // No wallet found
      throw new Error('No wallet found.')
    }
  }

  async function absolveDegeneracy(signer: any) {
    // Absolve thyself.
    console.log(await signer.getAddress())
    const signature = await signer.signMessage('I hereby absolve myself of my degeneracy.')
    console.log(signature)

    setAbsolved(true)
  }

  return (
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

        <CTA
          setAbsolved = {absolved}
          onClick = {requestAccount}
        />

      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Made With ❤️ in Lisboa 🇵🇹</Text>
      </Footer>
    </Container>
  )
}

export default Index
