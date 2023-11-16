import {
  Box,
  Button,
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
} from '@chakra-ui/react'
import { useState } from 'react'
import { isSSR } from '../../../utils'
import AnimateIn from '../../AnimateIn'
import SectionHeader from '../../SectionHeader'
import PersonalHistory from './PersonalHistory'
import PositionalHistory from './PositionalHistory'
import ProfessionalHistory from './ProfressionalHistory'

export default function AboutSection() {
  return (
    <>
      <SectionHeader
        title="About"
        description="Let me tell you my story - the crazy career turns I've taken and my amazing family."
      />

      <AnimateIn>
        <DesktopTabs />
        <MobileModals />
      </AnimateIn>
    </>
  )
}

function DesktopTabs() {
  return (
    <Tabs isLazy={isSSR} display={{ base: 'none', md: 'inherit' }}>
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
        <Button color="inherit" variant="outline" onClick={() => setValue('Professional')}>
          Professional
        </Button>
        <Button color="inherit" variant="outline" onClick={() => setValue('Personal')}>
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
          <ModalBody>
            {value === 'Professional' ? <ProfessionalHistory /> : <PersonalHistory />}
          </ModalBody>
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
    Component: ProfessionalHistory,
  },
  {
    title: 'Personal',
    Component: PersonalHistory,
  },
  {
    title: 'Positional',
    Component: PositionalHistory,
  },
]
