import { Box, Container, Heading, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import React from "react"
import { Chart, Compass, Devices, LightBulb } from "../components/icons"

export default function OfferingsSection() {
  return (
    <Container maxW="5xl">
      <Heading mt={10} mb={8}>
        Let me help you...
      </Heading>

      <Container maxW="3xl">
        <Box sx={{ display: "grid", gridTemplateColumns: "200px auto", gap: 4 }}>
          <Image src="/waiter.png" alt="Server" />
          <List spacing={5}>
            <Item Icon={Compass}>navigate complex business processes</Item>
            <Item Icon={Chart}>visualize your data to make decisions</Item>
            <Item Icon={LightBulb}>turn your cutting edge idea into a reality</Item>
            <Item Icon={Devices}>build scalable cross-platform solutions</Item>
          </List>
        </Box>
      </Container>
    </Container>
  )
}

function Item({ children, Icon }) {
  return (
    <ListItem fontSize="2xl">
      <ListIcon as={Icon} fontSize="4xl" sx={{ color: "#ff6f00" }} />
      {children}
    </ListItem>
  )
}
