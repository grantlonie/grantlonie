import { Box, Container } from '@chakra-ui/react'
import {
  AboutSection,
  ContactSection,
  FooterSection,
  OfferingsSection,
  PortfolioSection,
  WelcomeSection,
} from '../components/sections'

export default function Home() {
  return (
    <Box sx={{ background: 'background', height: '100%', overflow: 'hidden' }}>
      <WelcomeSection />

      <Container sx={{ color: 'black', maxW: '5xl', mt: '200px' }}>
        <OfferingsSection />
      </Container>

      <Container sx={{ color: 'black', maxW: '5xl', mt: '200px' }}>
        <PortfolioSection />
      </Container>

      <Box
        sx={{
          bgGradient:
            'radial(rgba(0,100,183,1) 0%, rgba(0,145,234,1) 80%, rgba(100,193,255,1) 100%)',
          boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.49)',
          color: 'white',
          ml: `-${leftAdj}px`,
          mt: '200px',
          overflow: 'hidden',
          pb: '200px',
          position: 'relative',
          transform: 'rotate(355deg)',
          transformOrigin: 'center',
          width: `${widthPercent}%`,
        }}
      >
        <Box
          sx={{
            transform: 'rotate(5deg)',
            transformOrigin: 'center',
            ml: `${leftAdj}px`,
            width: `${10000 / widthPercent}%`,
          }}
        >
          <Container sx={{ maxW: '5xl', mt: '200px' }}>
            <AboutSection />
          </Container>
          <Container sx={{ maxW: '5xl', mt: '200px' }}>
            <ContactSection />
          </Container>
        </Box>
      </Box>

      <FooterSection />
    </Box>
  )
}

const leftAdj = 90
const widthPercent = 150
