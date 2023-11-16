import { Box, BoxProps, Container, Heading, Image, Text } from '@chakra-ui/react'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Offering, offerings } from '../../offerings'
import SectionHeader from '../SectionHeader'

const itemWidth = 260
const itemHeight = 160
const radius = 190

export default function OfferingsSection() {
  return (
    <>
      <SectionHeader
        title="Services"
        description="Whether you need help bringing your idea to life or need a partner to assist in ideation and
        feature rollout, I have a model to suit your needs"
      />

      <DesktopOfferings />
      <MobileOfferings />
    </>
  )
}

function DesktopOfferings() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

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
      <Box ref={ref} sx={{ position: 'relative' }}>
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
        {offerings.map((offering, i) => {
          return (
            <RotateItem
              key={offering.title}
              offering={offering}
              offset={i * 120}
              progress={scrollYProgress}
            />
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

interface RotateItemProps {
  offering: Offering
  /** degrees offset */
  offset: number
  /** percent scroll */
  progress: MotionValue
}

function RotateItem({ progress, offering, offset }: RotateItemProps) {
  const rotate = useTransform(() => progress.get() * 100 + offset)
  const reverseRotate = useTransform(() => rotate.get() * -1)

  return (
    <motion.div style={{ rotate }}>
      <Box
        sx={{
          height: radius,
          bottom: 0,
          position: 'absolute',
          transformOrigin: 'bottom',
        }}
      >
        <motion.div style={{ rotate: reverseRotate }}>
          <Item
            {...offering}
            sx={{
              backgroundColor: 'background',
              borderRadius: '8px',
              position: 'absolute',
              top: `${-itemHeight / 2}px`,
              left: `${-itemWidth / 2}px`,
              height: itemHeight,
              width: itemWidth,
              p: 2,
            }}
          />
        </motion.div>
      </Box>
    </motion.div>
  )
}

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
