import { Link as ChakraLink, Button } from '@chakra-ui/react'
import { Container } from './Container'
import { ethers } from 'ethers'

export const CTA = () => (
  <Container
    justifyContent="center"
    alignItems="center"
    flexDirection="row"
    position="relative"
    bottom="0"
    width="100%"
  >
    <Button 
      width="33%" 
      variant="solid"  
      colorScheme="pink"
      onClick={requestAccount}
    >
      View Score
    </Button>

  </Container>
)

async function requestAccount() {
  if ((window as any)['ethereum']) {
    try {
      // Request account access if needed
      let res = await (window as any)['ethereum'].enable()
      console.log(res)
      const provider = new ethers.providers.Web3Provider((window as any)['ethereum'])
      const signer = provider.getSigner()
      console.log(signer)
    } catch (error) {
      // User denied account access
      throw new Error('User denied account access.')
    }
  } else {
    // No wallet found
    throw new Error('No wallet found.')
  }
}
