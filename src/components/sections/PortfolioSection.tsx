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
import { Suspense, lazy, useState } from 'react'
import { PortfolioItemProps, portfolioItems } from '../../portfolioItems'
import PortfolioItem from '../PortfolioItem'

const VideoPlayer = lazy(() => import('../VideoPlayer'))

export default function PortfolioSection() {
  const [selected, setSelected] = useState<PortfolioItemProps>(null)

  const modalOpen = selected != null
  const mdSwiperProps = useBreakpointValue<Omit<SwiperProps, 'children'>>({
    md: {
      braking: 50,
      easingFunction: 'overshoot',
      endMode: 'carousel',
      Overlay,
      stopMode: 'multiple',
    },
  })

  return (
    <>
      <Container sx={{ color: 'black', maxW: '5xl', mt: '200px' }}>
        <Heading mb={4}>Portfolio</Heading>

        <Text mb={5}>
          Sometimes you have to see it to believe it. Grab a coffee, get cozy, and dive in.
        </Text>
      </Container>

      <Container sx={{ color: 'black', p: 0, maxW: '8xl' }}>
        <Swiper align="center" braking={25} gap={20} stopMode="free" {...mdSwiperProps}>
          {portfolioItems.map((p, i) => (
            <PortfolioItem key={i} item={p} onClick={() => setSelected(p)} />
          ))}
        </Swiper>
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

function Overlay({ methods }: SwiperOverlayProps) {
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
      <NavButton onClick={methods.prev} sx={{ transform: 'rotate(180deg)' }} />
      <NavButton onClick={methods.next} />
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
        pointerEvents: 'auto',
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
