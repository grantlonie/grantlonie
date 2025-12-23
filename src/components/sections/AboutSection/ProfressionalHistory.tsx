import { Box, Heading, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react'
import TechnologyIcon, { technologies } from '../../TechnologyIcon'

export default function ProfessionalHistory() {
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
          background: 'white',
        }}
      />

      <Box sx={{ overflow: 'auto', py: 12, pl: { base: null, md: 4 }, pr: { base: null, md: 12 } }}>
        <Text mb={2}>
          My career has been shaped by intellectual curiosity and a drive to tackle diverse
          challenges across multiple industries. I hold a degree in Mechanical Engineering with
          specialized focus on dynamic systems and advanced computer algorithms.
        </Text>
        <Text mb={2}>
          I began my professional journey in engine validation, where I developed expertise in data
          collection and analysis. Seeking to broaden my impact beyond technical operations, I
          transitioned to business and supply chain consulting, where I specialized in database
          development, data visualization, and executive presentation design.
        </Text>
        <Text mb={2}>
          I then shifted my focus to product design and development within the heavy manufacturing
          electronics sector, where I led cross-functional teams and managed complex project
          timelines to deliver innovative solutions.
        </Text>
        <Text mb={2}>
          Leveraging my industry expertise and analytical capabilities, I transitioned into user
          application software development. Over the past five years, I have built a comprehensive
          portfolio of technical achievements:
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
          <ListItem>
            launching a comprehensive engagement platform that revolutionizes trade shows and
            facility management by integrating: lead generation, interactive content, and
            personalized user experiences. The application features real-time analytics dashboards,
            customizable templates, seamless badge scanning capabilities, and multi-platform support
            across mobile and desktop environments.
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
