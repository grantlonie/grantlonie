import { Box, Container, Heading, Image, List, ListIcon, ListItem } from '@chakra-ui/react'
import { Chart, Compass, Devices, LightBulb } from '../icons'

export default function OfferingsSection() {
  return (
    <>
      <Heading mb={8}>Let me help you...</Heading>

      <Container maxW="3xl">
        <Box sx={{ display: 'grid', gridTemplateColumns: { md: '200px auto' }, gap: 4 }}>
          <Image src="/waiter.png" alt="Server" />
          <List spacing={5}>
            <Item Icon={Compass}>navigate complex business processes</Item>
            <Item Icon={Chart}>visualize your data to make decisions</Item>
            <Item Icon={LightBulb}>turn your cutting edge idea into a reality</Item>
            <Item Icon={Devices}>build scalable cross-platform solutions</Item>
          </List>
        </Box>
      </Container>
    </>
  )
}

function Item({ children, Icon }) {
  return (
    <ListItem sx={{ fontSize: { md: '2xl' } }}>
      <ListIcon as={Icon} sx={{ color: 'primary', fontSize: { base: '2xl', md: '4xl' } }} />
      {children}
    </ListItem>
  )
}
