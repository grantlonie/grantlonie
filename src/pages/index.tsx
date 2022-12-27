import { Box } from "@chakra-ui/react"
import React from "react"
import { AboutSection, ContactSection, OfferingsSection, WelcomeSection } from "../sections"
import PortfolioSection from "../sections/PortfolioSection"

export default function Home() {
  return (
    <Box height="100%">
      <WelcomeSection />
      <OfferingsSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </Box>
  )
}
