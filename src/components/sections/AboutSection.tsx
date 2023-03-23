import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import React from 'react'

export default function AboutSection() {
  return (
    <>
      <Heading>About</Heading>

      <Tabs>
        <TabList mb="1em">
          {tabs.map(({ title }) => (
            <Tab key={title} _selected={{ color: 'primary' }}>
              {title}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map(({ Component, title }) => (
            <TabPanel key={title}>
              <Component />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  )
}

interface TabProps {
  title: string
  Component: () => JSX.Element
}

const tabs: TabProps[] = [
  {
    title: 'Professional',
    Component: Professional,
  },
  {
    title: 'Personal',
    Component: Personal,
  },
  {
    title: 'Positional',
    Component: Positional,
  },
]

function Professional() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box>
        <Heading as="h2" size="lg">
          Industry Knowledge
        </Heading>
        <List>
          <ListItem sx={{ whiteSpace: 'nowrap', fontSize: 'lg', mt: 2 }}>Heavy manufacturing</ListItem>
          <ListItem sx={{ whiteSpace: 'nowrap', fontSize: 'lg', mt: 2 }}>Finance technology</ListItem>
          <ListItem sx={{ whiteSpace: 'nowrap', fontSize: 'lg', mt: 2 }}>Supply chain consulting</ListItem>
          <ListItem sx={{ whiteSpace: 'nowrap', fontSize: 'lg', mt: 2 }}>Product development & testing</ListItem>
        </List>
      </Box>

      <Box sx={{ width: '3px', background: 'white' }} />

      <Box>
        <Text mb={2}>
          Driven by curiosity, I have danced around to various professions. I completed my degree in Mechanical
          Engineering focusing on dynamic systems and advanced computer algorithms. I started my career in engine
          validation collecting and analyzing data. Desiring to get away from the grease, I pursued a path in business
          and supply chain consulting, where I created and visualized large databases and crafted fancy presentations.
          Tired of the go go, I repositioned myself in product design and development managing timelines and teams for
          heavy manufacturing electronics.
        </Text>
        <Text mb={2}>
          Bringing my industry knowledge and algo-analytical skills together, I launched a full on attack in user
          application software development. The past 5 five years has been a wild ride:
        </Text>
        <UnorderedList mb={2}>
          <ListItem>
            developing Linux touchscreen vehicle applications while onboarding and managing the team as the program
            scaled
          </ListItem>
          <ListItem>building a CRM platform for colleagues to manage customer relations and project growth</ListItem>
          <ListItem>bringing a fin-tech business-to-business equipment rental app to the market</ListItem>
          <ListItem>
            architecting an advanced data visualization platform including: managing visuals with deployment process and
            change tracking, designing the UI-agnostic aggregation API, and developing a seamless drag and drop user
            widget and dashboard editors.
          </ListItem>
        </UnorderedList>
        <Text mb={2}>
          I excel in everything JavaScript and have a special place in my heart for universal JS apps. I love nerding
          out with advanced algorithms and strive to turn complexity into beauty. I prefer the greenfield space helping
          customers bring their dreams to life.
        </Text>
      </Box>
    </Box>
  )
}

function Personal() {
  return <Box>details..</Box>
}

function Positional() {
  return <Box>details..</Box>
}
