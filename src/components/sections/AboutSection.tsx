import {
  Box,
  Button,
  Heading,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { useState } from 'react'
import TechnologyIcon, { technologies } from '../TechnologyIcon'

export default function AboutSection() {
  return (
    <>
      <Heading mb={4}>About</Heading>
      <Text fontSize="lg">Still not convinced!</Text>
      <Text mb={5}>
        Let me tell you my story - the crazy career turns I've taken and my amazing family.
      </Text>
      <DesktopTabs />
      <MobileModals />
    </>
  )
}

function DesktopTabs() {
  return (
    <Tabs isLazy lazyBehavior="keepMounted" display={{ base: 'none', md: 'inherit' }}>
      <TabList sx={{ border: 0 }}>
        {tabs.map(({ title }) => (
          <Tab key={title} _selected={{ color: 'primary' }}>
            {title}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map(({ Component, title }) => (
          <TabPanel
            key={title}
            sx={{
              backgroundColor: 'background',
              boxShadow: 'inset 0px 0px 3px 3px rgba(0,0,0,0.49)',
              color: 'black',
              height: '500px',
              padding: 0,
            }}
          >
            <Component />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

function MobileModals() {
  const [value, setValue] = useState<'Professional' | 'Personal'>(null)
  return (
    <Box display={{ md: 'none' }}>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button variant="outline" onClick={() => setValue('Professional')}>
          Professional
        </Button>
        <Button variant="outline" onClick={() => setValue('Personal')}>
          Personal
        </Button>
      </Box>

      <Modal
        isOpen={Boolean(value)}
        motionPreset="slideInBottom"
        onClose={() => setValue(null)}
        scrollBehavior="inside"
        size="full"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{value}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{value === 'Professional' ? <Professional /> : <Personal />}</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
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
    <Box
      sx={{
        display: { base: 'inherit', md: 'grid' },
        gridTemplateColumns: { base: undefined, md: '350px auto auto' },
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ p: { base: null, md: 12 }, pr: { base: null, md: 4 } }}>
        <Heading as="h2" size="md" sx={{ mb: 2 }}>
          Industry Knowledge
        </Heading>
        <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
          <Tag
            size="lg"
            sx={{
              alignSelf: 'start',
              background: 'primary',
              color: 'white',
              py: 2,
            }}
          >
            Finance technology
          </Tag>
          <Tag
            size="lg"
            sx={{
              alignSelf: 'start',
              background: 'primary',
              color: 'white',
              py: 2,
            }}
          >
            Product research & development
          </Tag>
        </Box>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Tag
            size="lg"
            sx={{
              alignSelf: 'start',
              background: 'primary',
              color: 'white',
              py: 2,
            }}
          >
            Supply chain consulting
          </Tag>
          <Tag
            size="lg"
            sx={{
              alignSelf: 'start',
              background: 'primary',
              color: 'white',
              py: 2,
            }}
          >
            Heavy manufacturing
          </Tag>
        </Box>

        <Heading as="h2" size="md" sx={{ mt: 4, mb: 2 }}>
          Technologies
        </Heading>
        <Box
          sx={{
            alignItems: 'center',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 4,
          }}
        >
          {technologies.map(t => (
            <TechnologyIcon key={t} value={t} />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: { base: 'none', md: 'inherit' },
          width: '1px',
          background: 'black',
        }}
      />

      <Box sx={{ overflow: 'auto', py: 12, pl: { base: null, md: 4 }, pr: { base: null, md: 12 } }}>
        <Text mb={2}>
          Driven by curiosity, I have danced around to various professions. I completed my degree in
          Mechanical Engineering focusing on dynamic systems and advanced computer algorithms. I
          started my career in engine validation collecting and analyzing data. Desiring to get away
          from the grease, I pursued a path in business and supply chain consulting, where I created
          and visualized large databases and crafted fancy presentations. Tired of the go go, I
          repositioned myself in product design and development managing timelines and teams for
          heavy manufacturing electronics.
        </Text>
        <Text mb={2}>
          Bringing my industry knowledge and algo-analytical skills together, I launched a full on
          attack in user application software development. The past 5 five years has been a wild
          ride:
        </Text>
        <UnorderedList mb={2}>
          <ListItem>
            developing Linux touchscreen vehicle applications while onboarding and managing the team
            as the program scaled
          </ListItem>
          <ListItem>
            building a CRM platform for colleagues to manage customer relations and project growth
          </ListItem>
          <ListItem>
            bringing a fin-tech business-to-business equipment rental app to the market
          </ListItem>
          <ListItem>
            architecting an advanced data visualization platform including: managing visuals with
            deployment process and change tracking, designing the UI-agnostic aggregation API, and
            developing a seamless drag and drop user widget and dashboard editors.
          </ListItem>
        </UnorderedList>
        <Text mb={2}>
          I excel in everything JavaScript and have a special place in my heart for universal JS
          apps. I love nerding out with advanced algorithms and strive to turn complexity into
          beauty. I prefer the greenfield space helping customers bring their dreams to life.
        </Text>
      </Box>
    </Box>
  )
}

function Personal() {
  return (
    <Box
      sx={{
        display: { base: null, md: 'flex' },
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          py: { base: 4, md: 12 },
          pr: { base: 0, md: 2 },
          pl: { base: 0, md: 12 },
          display: 'flex',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Image src="/family.png" alt="family picture" />
      </Box>
      <Box
        sx={{
          overflow: 'auto',
          py: { base: 4, md: 12 },
          pr: { base: 0, md: 12 },
          pl: { base: 0, md: 2 },
        }}
      >
        <Text mb={2}>
          I grew up in Peoria, Illinois - a small city surrounded by rural farmland known for the
          phrase “Will it play in Peoria”. My favorite past time activities include: skateboarding,
          disc golf and Smash Brothers.
        </Text>
        <Text mb={2}>
          I went to Bradley, a local private university, followed up with a Christian mission trip.
          I lived for a few years with friends who helped strengthen my faith while working my first
          couple jobs.
        </Text>
        <Text mb={2}>
          One night, after a gathering with some friends, I gathered my courage and chased down the
          woman of my dreams and swept her off her feet. After long distance engagement while she
          was living in California, Erica and I got hitched and started our life together.
        </Text>
        <Text mb={2}>
          Erica started working for Caterpillar right out of school, and she received a new position
          that relocated us to bourbon capitol - Louisville, KY. After a few years and a few more
          friends we took off for her next assignment in Alberta, Canada, where we live today.
        </Text>
        <Text mb={2}>
          Erica and I love to travel and spend most evenings cooking and sipping wine or classic
          bourbon cocktails. We have two kids - James is turning 1 and our feisty cat Misty.
        </Text>
      </Box>
    </Box>
  )
}

function Positional() {
  return <Box>details..</Box>
}
