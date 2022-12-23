import { Box } from "@chakra-ui/react"
import React from "react"
import { AboutSection, ContactSection, ExperienceSection, OfferingsSection, WelcomeSection } from "../sections"
import PortfolioSection from "../sections/PortfolioSection"

export default function Home() {
  return (
    <Box height="100%">
      <WelcomeSection />
      <OfferingsSection />
      <ExperienceSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </Box>
  )
}

export function Head() {
  return (
    <>
      <title>Grant Lonie</title>
      <meta name="description" content="Freelance site for Grant Lonie" />
    </>
  )
}
