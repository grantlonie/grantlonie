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
