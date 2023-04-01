import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'

export default function _404Page() {
  return (
    <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 4, mt: 20 }}>
      <Image src="./icon.png" />
      <Heading>Nothing here</Heading>
      <Text>Oops! This page does not exist.</Text>
      <Button color="primary" as="a" href="/" variant="link">
        Go home
      </Button>
    </Box>
  )
}
