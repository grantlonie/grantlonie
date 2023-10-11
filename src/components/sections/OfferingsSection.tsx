import { Box, BoxProps, Container, Heading, Image, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Offering, offerings } from '../../offerings'

const itemWidth = 260
const itemHeight = 160
const radius = 190
const clock = 8000 // ms step time
const transition = `all ${clock / 2}ms ease`

export default function OfferingsSection() {
  return (
    <>
      <Heading mb={4}>Services</Heading>
      <Text mb={5}>
        Whether you need help bringing your idea to life or need a partner to assist in ideation and
        feature rollout, I have a model to suit your needs
      </Text>
      <DesktopOfferings />
      <MobileOfferings />
    </>
  )
}

function DesktopOfferings() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setStep(s => s + 1), clock)
    return () => clearInterval(interval)
  }, [])

  return (
    <Container
      maxW="3xl"
      sx={{
        display: { base: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        height: radius * 2 + 200,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            height: radius * 2,
            width: radius * 2,
            border: '4px solid',
            borderColor: 'primary',
            borderRadius: radius,
            position: 'absolute',
            top: `-${radius}px`,
            left: `-${radius}px`,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: `-${radius / 6}px`,
            left: `-${radius / 6}px`,
            height: `${radius / 3}px`,
            width: `${radius / 3}px`,
          }}
        >
          <Image src="./icon.png" alt="logo" />
        </Box>
        {offerings.map((p, i) => {
          const rotation = (step + i) * 120 + 160
          return (
            <Box
              key={p.title}
              style={{ transform: `rotate(${rotation}deg)` }}
              sx={{
                height: radius,
                bottom: 0,
                position: 'absolute',
                transition,
                transformOrigin: 'bottom',
              }}
            >
              <Item
                {...p}
                sx={{
                  backgroundColor: 'background',
                  borderRadius: '8px',
                  position: 'absolute',
                  transition,
                  top: `${-itemHeight / 2}px`,
                  left: `${-itemWidth / 2}px`,
                  height: itemHeight,
                  width: itemWidth,
                  p: 2,
                }}
                style={{ transform: `rotate(-${rotation}deg)` }}
              />
            </Box>
          )
        })}
      </Box>
    </Container>
  )
}

function MobileOfferings() {
  return (
    <Box display={{ base: 'inherit', md: 'none' }}>
      {offerings.map((p, i) => {
        return <Item key={i} {...p} sx={{ mb: 6 }} />
      })}
    </Box>
  )
}

type ItemProps = Offering & BoxProps

function Item({ description, Icon, title, sx, ...rest }: ItemProps) {
  return (
    <Box sx={{ ...sx }} {...rest}>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <Icon sx={{ color: 'primary', fontSize: { base: '2xl', md: '6xl' } }} />
        <Text fontSize="4xl">{title}</Text>
      </Box>
      {description}
    </Box>
  )
}
