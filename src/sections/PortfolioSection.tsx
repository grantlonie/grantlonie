import { Box, Container, Heading, Text } from "@chakra-ui/react"
import React from "react"
import PortfolioItem from "../components/PortfolioItem"
import { portfolioItems } from "../portfolioItems"

export default function PortfolioSection() {
  return (
    <Container maxW="5xl">
      <Heading>Portfolio</Heading>
      <Text>Take a look at these nifty things I've done!</Text>
      {portfolioItems.map((p) => (
        <PortfolioItem key={p.title} item={p} />
      ))}
    </Container>
  )
}
