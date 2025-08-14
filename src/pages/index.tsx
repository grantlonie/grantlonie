import { Box, Container, useBreakpointValue } from '@chakra-ui/react'
import SEO from '../components/SEO'
import {
  AboutSection,
  ContactSection,
  FooterSection,
  OfferingsSection,
  PortfolioSection,
  WelcomeSection,
} from '../components/sections'
import { isSSR, rotateAngle } from '../utils'

export const Head = SEO

export default function Home() {
  const height = useBreakpointValue({ base: 1300, md: 1900 }, { fallback: 'md' })
  const angleAdj = isSSR ? 100 : window.innerWidth * Math.tan((rotateAngle * Math.PI) / 180)

  return (
    <Box sx={{ background: 'background', height: '100%', overflow: 'hidden' }}>
      <WelcomeSection />

      <Container sx={{ color: 'black', maxW: '5xl', mt: '200px' }}>
        <OfferingsSection />
      </Container>

      <PortfolioSection />

      <Box sx={{ overflow: 'hidden', position: 'relative', height }}>
        <Box
          sx={{
            bgGradient: 'radial(#393E46 0%, #5c6575ff 80%, #717b8cff 100%)',
            boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.49)',
            color: 'white',
            height: height - 2 * angleAdj,
            ml: `-${leftAdj}px`,
            mt: angleAdj,
            overflow: 'hidden',
            position: 'absolute',
            transform: `rotate3d(0, 0, 1, ${360 - rotateAngle}deg)`,
            transformOrigin: 'center',
            width: `${widthPercent}%`,
          }}
        />
        <Box sx={{ color: 'white', mt: angleAdj, position: 'absolute', width: '100%' }}>
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
