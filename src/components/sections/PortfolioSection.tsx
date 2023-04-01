import { Heading, Text } from '@chakra-ui/react'
import { portfolioItems } from '../../portfolioItems'
import PortfolioItem from '../PortfolioItem'

export default function PortfolioSection() {
  return (
    <>
      <Heading mb={4}>Portfolio</Heading>

      <Text fontSize="lg">The proof is in the pudding!</Text>
      <Text mb={5}>Sometimes you have to see it to believe it. Grab a coffee, get cozy, and dive in.</Text>

      {portfolioItems.map((p) => (
        <PortfolioItem key={p.title} item={p} />
      ))}
    </>
  )
}
