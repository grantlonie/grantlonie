import {
  Box,
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
import Swiper, { SwiperProps } from 'canari-swipe'
import { Suspense, lazy, useState } from 'react'
import { PortfolioItemProps, portfolioItems } from '../../portfolioItems'
import PortfolioItem from '../PortfolioItem'

const VideoPlayer = lazy(() => import('../VideoPlayer'))

export default function PortfolioSection() {
  const [selected, setSelected] = useState<PortfolioItemProps>(null)

  const modalOpen = selected != null
  const mdSwiperProps = useBreakpointValue<Omit<SwiperProps, 'children'>>({
    md: { easingFunction: 'overshoot', Overlay, stopMode: 'multiple', endMode: 'carousel' },
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
        <Swiper align="center" gap={20} stopMode="free" {...mdSwiperProps}>
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

function Overlay() {
  const theme = useTheme()
  //@ts-ignore
  const background = theme.colors.background
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, ${background} 10%, rgba(0,0,0,0) 40%,rgba(0,0,0,0) 60%, ${background} 90%)`,
        pointerEvents: 'none',
      }}
    />
  )
}
