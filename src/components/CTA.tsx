import { Link as ChakraLink, Button } from '@chakra-ui/react'
import { Container } from './Container'

interface CTAprops{onClick: () => void, setAbsolved: boolean}

export const CTA = ({onClick, setAbsolved}: CTAprops) => (
  <Container
    justifyContent="center"
    alignItems="center"
    flexDirection="row"
    position="relative"
    bottom="0"
    width="100%"
  >
    {!setAbsolved && ( 
      <Button
      width="33%" 
      variant="solid"  
      colorScheme="pink"
      onClick={onClick}
      >
        View Score
      </Button>
    )}
  </Container>
)
