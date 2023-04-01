import { Box, Image, Text, Tooltip } from '@chakra-ui/react'

interface Props {
  value: Technology
}

export default function TechnologyIcon({ value }: Props) {
  const { description, iconUrl, title } = technologyOptionDictionary[value]

  const tooltip = (
    <Box>
      <Text fontSize="xl">{title}</Text>
      <Text>{description}</Text>
    </Box>
  )

  return (
    <Tooltip placement="right" label={tooltip} sx={{ maxWidth: '800px' }}>
      <Image src={iconUrl} alt={`${title} icon`} />
    </Tooltip>
  )
}

type Technology = 'react' | 'python' | 'cpp' | 'c#' | 'ts' | 'gatsby' | 'node' | 'next'

export const technologies: Technology[] = [
  'ts',
  'node',
  'python',
  'cpp',
  'c#',
  'react',
  'next',
  'gatsby',
]

interface TechnologyOption {
  description: string
  iconUrl: string
  title: string
}

const technologyOptionDictionary: { [key in Technology]: TechnologyOption } = {
  cpp: {
    description: 'Lower level language for embedded applications',
    iconUrl: 'technology-icons/cpp.png',
    title: 'C++',
  },
  'c#': {
    description: 'Strongly-typed OOP lanauage',
    iconUrl: 'technology-icons/c-sharp.png',
    title: 'C#',
  },
  gatsby: {
    description: 'Universal Javascript React library',
    iconUrl: 'technology-icons/gatsby.png',
    title: 'Gatsby',
  },
  next: {
    description: 'Universal Javascript React library',
    iconUrl: 'technology-icons/next.png',
    title: 'Next.JS',
  },
  node: {
    description: 'Interpretted Javascript runtime language',
    iconUrl: 'technology-icons/node.png',
    title: 'Node',
  },
  python: {
    description: 'Interpretted language for automation and analytics',
    iconUrl: 'technology-icons/python.png',
    title: 'Python',
  },
  react: {
    description: 'Javascript rendering library for web and mobile',
    iconUrl: 'technology-icons/react.png',
    title: 'React',
  },
  ts: {
    description: 'Syntatic superset of JavaScript language',
    iconUrl: 'technology-icons/ts.png',
    title: 'TypeScript',
  },
}
