import { Box, Flex, Image, Text } from '@chakra-ui/react'
import AnimateIn from '../AnimateIn'
import SectionHeader from '../SectionHeader'

const methodologies = [
  {
    title: 'AI-Powered Velocity: The Electric Edge',
    image: '/methodology-photos/methodologies-ai.png',
    description: (
      <>
        <Text mb={3}>
          AI integration is a core mechanism for enhanced quality and speed, delivering an electric
          edge.
        </Text>
        <Box as="ul" sx={{ listStyleType: 'disc', pl: 5, mb: 0, fontSize: 'sm' }}>
          <Box as="li" mb={2}>
            <Text as="span" fontWeight="bold">
              Rapid Ignition & Scaffolding:
            </Text>{' '}
            AI agents rapidly generate boilerplate and feature scaffolds, moving from idea to
            proof-of-concept in hours.
          </Box>
          <Box as="li">
            <Text as="span" fontWeight="bold">
              Clean Code & Scanning:
            </Text>{' '}
            AI serves as a vigilant peer reviewer, enforcing clean code standards and performing
            proactive security scans (OWASP Top 10) during development to minimize technical debt
            and risk.
          </Box>
        </Box>
      </>
    ),
  },
  {
    title: 'Converting Potential Energy into Product Momentum',
    image: '/methodology-photos/methodologies-momentum.png',
    description: (
      <>
        <Text mb={3}>
          Abstract product concepts are transformed into defined, deliverable technical
          requirements, quickly producing momentum.
        </Text>
        <Box as="ul" sx={{ listStyleType: 'disc', pl: 5, mb: 0, fontSize: 'sm' }}>
          <Box as="li" mb={2}>
            <Text as="span" fontWeight="bold">
              Idea-to-Build Translation:
            </Text>{' '}
            Experience is leveraged to generate precise technical requirements from stakeholder
            ideas, ensuring coding hours contribute directly to measurable goals.
          </Box>
          <Box as="li">
            <Text as="span" fontWeight="bold">
              MVP & Roadmap Generation:
            </Text>{' '}
            MVP core functionality is designed, developing a clear, phase-gated roadmap to sustain
            product momentum through high-impact milestones.
          </Box>
        </Box>
      </>
    ),
  },
  {
    title: 'Grounding the Circuit: Navigating Regulatory Power Grids',
    image: '/methodology-photos/methodologies-regulations.png',
    description: (
      <>
        <Text mb={3}>
          Data is the fuel of every application; regulatory constraints are managed early to prevent
          liabilities.
        </Text>
        <Box as="ul" sx={{ listStyleType: 'disc', pl: 5, mb: 0, fontSize: 'sm' }}>
          <Box as="li" mb={2}>
            <Text as="span" fontWeight="bold">
              Data Classification & Compliance:
            </Text>{' '}
            Rapid audits are conducted to classify all data (PII, financial, PHI) and identify
            critical jurisdictions (NA, EU/GDPR).
          </Box>
          <Box as="li">
            <Text as="span" fontWeight="bold">
              Proactive Regulation Planning:
            </Text>{' '}
            Complex frameworks (HIPAA, SOC 2, GDPR) are navigated, ensuring architecture avoids
            expensive overhauls. The goal: prepare the system for audit from day one.
          </Box>
        </Box>
      </>
    ),
  },
  {
    title: 'The Technical Architecture Blueprint: Optimized for Maximum Output',
    image: '/methodology-photos/methodologies-architecture.png',
    description: (
      <>
        <Text mb={3}>
          As a CTO/Architect, the technology stack is ensured to be resilient, maintainable, and
          aligned with future scale for maximum output.
        </Text>
        <Box as="ul" sx={{ listStyleType: 'disc', pl: 5, mb: 0, fontSize: 'sm' }}>
          <Box as="li" mb={2}>
            <Text as="span" fontWeight="bold">
              Strategic Stack Selection:
            </Text>{' '}
            Modern, durable, and cost-effective cloud infrastructure is selected. Every tool is
            justified by its contribution to long-term stability.
          </Box>
          <Box as="li">
            <Text as="span" fontWeight="bold">
              Managing Technical Debt:
            </Text>{' '}
            Proactive processes are implemented to manage technical debt, ensuring the foundational
            power of the architecture is strong and flexible for rapid pivots.
          </Box>
        </Box>
      </>
    ),
  },
  {
    title: 'Future-Proofing the Grid: Scaling, Culture, and Capacity',
    image: '/methodology-photos/methodologies-scaling.png',
    description: (
      <>
        <Text mb={3}>
          Scaling demands more than servers; it requires a culture that sees growth as a chance to
          supercharge capacity.
        </Text>
        <Box as="ul" sx={{ listStyleType: 'disc', pl: 5, mb: 0, fontSize: 'sm' }}>
          <Box as="li" mb={2}>
            <Text as="span" fontWeight="bold">
              Cultivating Bold Developers:
            </Text>{' '}
            Bold, curious developers are hired and mentored, empowered to take calculated risks on
            long-term infrastructure, prioritizing high-performance and innovation.
          </Box>
          <Box as="li">
            <Text as="span" fontWeight="bold">
              Optimized Infrastructure Planning:
            </Text>{' '}
            We investigate high-security, high-performance, and optimized cost models (FinOps) to
            ensure infrastructure handles 10x growth. Your "power grid" is ready for any load.
          </Box>
        </Box>
      </>
    ),
  },
]

export default function MethodologiesSection() {
  return (
    <>
      <SectionHeader
        title="Methodologies"
        description="My role is to act as a catalyst, converting raw ideas into high-velocity, scalable technology solutions. This requires a balanced focus on immediate delivery, long-term architectural integrity, and cultural development. The following sections outline the methodologies I employ to supercharge your technology stack and team."
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { base: 16, md: 12 } }}>
        {methodologies.map((methodology, index) => (
          <AnimateIn key={index}>
            <MethodologyCard {...methodology} />
          </AnimateIn>
        ))}
      </Box>
    </>
  )
}

interface MethodologyCardProps {
  title: string
  image: string
  description: React.ReactNode
}

function MethodologyCard({ title, image, description }: MethodologyCardProps) {
  return (
    <Flex
      sx={{
        flexDirection: { base: 'column', md: 'row' },
        gap: { base: 2, md: 8 },
        alignItems: { base: 'center', md: 'flex-start' },
      }}
    >
      <Box sx={{ flexShrink: 0, width: { base: '100%', md: '210px' } }}>
        <Image
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: '16px',
          }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Text fontSize="xl" fontWeight="bold" color="primary" mb={4}>
          {title}
        </Text>
        <Box fontSize="md" color="gray.600">
          {description}
        </Box>
      </Box>
    </Flex>
  )
}
