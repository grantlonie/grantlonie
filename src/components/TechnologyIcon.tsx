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

type Technology =
  | 'angular'
  | 'aws'
  | 'cpp'
  | 'c#'
  | 'gatsby'
  | 'gcp'
  | 'linux'
  | 'matlab'
  | 'next'
  | 'node'
  | 'nosql'
  | 'python'
  | 'react'
  | 'sql'
  | 'ts'

export const technologies: Technology[] = [
  'ts',
  'node',
  'python',
  'cpp',
  'c#',
  'matlab',
  'react',
  'angular',
  'next',
  'gatsby',
  'sql',
  'nosql',
  'gcp',
  'aws',
  'linux',
]

interface TechnologyOption {
  description: string
  iconUrl: string
  title: string
}

const technologyOptionDictionary: { [key in Technology]: TechnologyOption } = {
  angular: {
    description: 'Javascript rendering library',
    iconUrl: 'technology-icons/angular.png',
    title: 'AngularJS',
  },
  aws: {
    description: 'Cloud platform',
    iconUrl: 'technology-icons/aws.png',
    title: 'Amazon Web Services',
  },
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
  gcp: {
    description: 'Cloud platform',
    iconUrl: 'technology-icons/gcp.png',
    title: 'Google Cloud Platform',
  },
  linux: {
    description: 'High security OS typically used by servers',
    iconUrl: 'technology-icons/linux.png',
    title: 'Linux',
  },
  matlab: {
    description: 'Engineering numeric computing language',
    iconUrl: 'technology-icons/matlab.png',
    title: 'Matlab',
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
  nosql: {
    description: 'Unstrutred databases (Mongo, Cosmos, Firestore, Dynamo)',
    iconUrl: 'technology-icons/nosql.png',
    title: 'Document DBs',
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
  sql: {
    description: 'Structured database (mySQL and Access)',
    iconUrl: 'technology-icons/sql.png',
    title: 'Relational DBs',
  },
  ts: {
    description: 'Syntatic superset of JavaScript language',
    iconUrl: 'technology-icons/ts.png',
    title: 'TypeScript',
  },
}
