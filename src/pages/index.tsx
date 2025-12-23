import { Box, Container, useBreakpointValue } from '@chakra-ui/react'
import FloatingLines from '../components/FloatingLines'
import SEO from '../components/SEO'
import {
  AboutSection,
  ContactSection,
  FooterSection,
  MethodologiesSection,
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
      <Box sx={{ position: 'absolute', height: '1100px', width: '100%' }}>
        <FloatingLines />
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height="400px"
          background="linear-gradient(180deg, rgba(2, 8, 23, 0) 0%, #0A1A36 100%)"
        />
      </Box>

      <Container sx={{ color: 'white', maxW: '5xl', mt: '200px' }}>
        <WelcomeSection />
      </Container>

      <Container position="relative" sx={{ color: 'white', maxW: '5xl', mt: '400px' }}>
        <OfferingsSection />
      </Container>

      <Container sx={{ color: 'white', maxW: '5xl', mt: '400px' }}>
        <MethodologiesSection />
      </Container>

      <PortfolioSection />

      <Box sx={{ overflow: 'hidden', position: 'relative', height }}>
        <Box
          sx={{
            bgGradient:
              'linear-gradient(135deg, rgba(36, 43, 66, 0.5) 0%, rgba(52, 72, 120, 0.3) 100%)',
            boxShadow: '0px 0px 6px 6px rgba(255, 255, 255, 0.2)',
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
