import { Box, Container } from "@chakra-ui/react"
import React from "react"
import { AboutSection, ContactSection, OfferingsSection, WelcomeSection } from "../sections"
import PortfolioSection from "../sections/PortfolioSection"
import theme from "../utils/theme"

export default function Home() {
  return (
    <Box height="100%" sx={{ background: theme.background, overflow: "hidden" }}>
      <WelcomeSection />

      <Container sx={{ maxW: "5xl", mt: "200px" }}>
        <OfferingsSection />
      </Container>

      <Container sx={{ maxW: "5xl", mt: "200px" }}>
        <PortfolioSection />
      </Container>

      <Box
        sx={{ mt: "200px", color: "white", pb: "200px", ml: `-${leftAdj}px` }}
        overflow="hidden"
        bgGradient="radial(rgba(0,100,183,1) 0%, rgba(0,145,234,1) 80%, rgba(100,193,255,1) 100%)"
        width="140%"
        position="relative"
        transform="rotate(355deg)"
        transformOrigin="center"
      >
        <Box
          sx={{
            transform: "rotate(5deg)",
            transformOrigin: "center",
            ml: `${leftAdj}px`,
            width: "100vw",
          }}
        >
          <Container sx={{ maxW: "5xl", mt: "200px" }}>
            <AboutSection />
          </Container>
          <Container sx={{ maxW: "5xl", mt: "200px" }}>
            <ContactSection />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

const leftAdj = 70
