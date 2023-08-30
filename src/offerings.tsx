import { Text } from '@chakra-ui/react'
import { Consult, Field, Partner } from './components/icons'

export interface Offering {
  description: JSX.Element
  title: string
  Icon: (props: any) => JSX.Element
}

export const offerings: Offering[] = [
  {
    description: (
      <Text fontSize="xl">
        <strong>Power up</strong> your idea from initial proof of concept to long-term maintenance
      </Text>
    ),
    Icon: Field,
    title: 'Kickstart',
  },
  {
    description: (
      <Text fontSize="xl">
        <strong>Energize</strong> existing apps bringing new perspectives and additional features
      </Text>
    ),
    Icon: Partner,
    title: 'Partner',
  },
  {
    description: (
      <Text fontSize="xl">
        <strong>Supercharge</strong> your tech stack with advice on modern methodologies
      </Text>
    ),
    Icon: Consult,
    title: 'Consult',
  },
]
