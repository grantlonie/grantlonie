import {
  Box,
  BoxProps,
  Container,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import Swiper, { SwiperOverlayProps, SwiperProps } from 'canari-swipe'
import { Variants, motion } from 'framer-motion'
import { Suspense, lazy, useRef, useState } from 'react'
import { PortfolioItemProps, portfolioItems } from '../../portfolioItems'
import { defaultVariants, useAnimateOnView } from '../../utils/animationUtils'
import PortfolioItem from '../PortfolioItem'
import SectionHeader from '../SectionHeader'

const VideoPlayer = lazy(() => import('../VideoPlayer'))

export default function PortfolioSection() {
  const [selected, setSelected] = useState<PortfolioItemProps>(null)

  const modalOpen = selected != null
  const mdSwiperProps = useBreakpointValue<Omit<SwiperProps, 'children'>>({
    md: { braking: 50, endMode: 'carousel', Overlay, stopMode: 'multiple' },
  })

  const swiperRef = useRef()
  const controls = useAnimateOnView(swiperRef)

  return (
    <>
      <Container sx={{ color: 'black', maxW: '5xl', mt: '200px' }}>
        <SectionHeader
          title="Portfolio"
          description="Don't just read about potential — witness the power in action. Each of the following case studies highlights the challenges faced, the innovative strategies employed, and the tangible results achieved."
        />
      </Container>

      <Container
        ref={swiperRef}
        sx={{ color: 'black', p: 0, maxW: '8xl', borderRadius: '3xl', overflow: 'hidden' }}
      >
        <motion.div animate={controls} initial="hidden" variants={containerAnimationVariants}>
          <Swiper
            align="center"
            braking={25}
            easingFunction="overshoot"
            gap={20}
            stopMode="free"
            {...mdSwiperProps}
          >
            {portfolioItems.map((p, i) => (
              <Box
                key={i}
                onClick={() => setSelected(p)}
                sx={{ cursor: 'pointer', height: '440px', width: '335px' }}
              >
                <motion.div variants={defaultVariants}>
                  <PortfolioItem item={p} />
                </motion.div>
              </Box>
            ))}
          </Swiper>
        </motion.div>
      </Container>

      <Modal isCentered onClose={() => setSelected(null)} size="3xl" isOpen={modalOpen}>
        <ModalOverlay />
        <ModalContent>
          <Flex sx={{ alignItems: 'center', gap: 1, m: 2 }}>
            <Image alt={selected?.title} src={selected?.iconUrl} sx={{ height: '40px' }} />
            <Heading>{selected?.title}</Heading>
          </Flex>
          <ModalCloseButton />

          <ModalBody sx={{ pb: 6 }}>
            <Text fontSize="lg" sx={{ pb: 4 }}>
              {selected?.subtitle}
            </Text>

            {modalOpen && (
              <Suspense>
                <VideoPlayer url={selected?.videoUrl} />
              </Suspense>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

function Overlay({ actionClass, methods }: SwiperOverlayProps) {
  const theme = useTheme()
  //@ts-ignore
  const background = theme.colors.background
  return (
    <Box
      sx={{
        alignItems: 'center',
        background: `linear-gradient(90deg, ${background} 10%, rgba(0,0,0,0) 40%,rgba(0,0,0,0) 60%, ${background} 90%)`,
        display: 'flex',
        justifyContent: 'space-between',
        pointerEvents: 'none',
      }}
    >
      <NavButton
        className={actionClass}
        onClick={methods.prev}
        sx={{ transform: 'rotate(180deg)' }}
      />
      <NavButton className={actionClass} onClick={methods.next} />
    </Box>
  )
}

function NavButton({ sx, ...rest }: BoxProps) {
  const theme = useTheme()
  //@ts-ignore
  const black = theme.colors.black
  return (
    <Box
      as="button"
      aria-label="swipe right"
      sx={{
        color: 'black',
        height: '100%',
        px: 4,
        _hover: { backgroundColor: 'white' },
        ...sx,
      }}
      {...rest}
    >
      <RightArrow fill={black} />
    </Box>
  )
}

function RightArrow(props) {
  return (
    <svg
      height="80"
      id="svg134"
      version="1.1"
      viewBox="0 -960 470.99998 1182.3729"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 71.000005,222.37288 0,117.43729 329,-368.81356 0,-855.0644 71.000005,-960 471,-368.81356 Z"
        strokeWidth={1.2}
      />
    </svg>
  )
}

const containerAnimationVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.2 },
  },
}
