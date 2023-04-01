import { Box, Heading } from '@chakra-ui/react'
import { lazy, Suspense, useRef, useState } from 'react'
import { PortfolioItem as PortfolioItemProps } from '../portfolioItems'
import useHover from '../utils/useHover'
import PlayOutlined from './icons/PlayOutlined'

const VideoPlayer = lazy(() => import('./VideoPlayer'))

interface Props {
  item: PortfolioItemProps
}

const playIconWidth = 75

export default function PortfolioItem({ item }: Props) {
  const { title, description, imageUrl, videoUrl } = item

  const ref = useRef(null)
  const hovering = useHover(ref)
  const [playing, setPlaying] = useState(false)

  return (
    <Box
      ref={ref}
      sx={{
        background: 'white',
        border: '1px solid black',
        borderRadius: '8px',
        boxShadow: 'md',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: { base: 'auto', lg: '450px auto' },
        overflow: 'hidden',
        transformOrigin: '50% 50%',
        transition: 'all 300ms ease',
        ...((hovering || playing) && { transform: { lg: 'scale(1.1)' } }),
      }}
      onClick={() => setPlaying(true)}
    >
      <Box position="relative">
        {playing ? (
          <Suspense>
            <VideoPlayer url={videoUrl} />
          </Suspense>
        ) : (
          <>
            <img src={imageUrl} alt={`showcase image-${title}`} />
            <Box
              position="absolute"
              left={`calc(50% - ${playIconWidth / 2}px)`}
              top={`calc(50% - ${playIconWidth / 2}px)`}
            >
              <PlayOutlined fontSize={playIconWidth} />
            </Box>
          </>
        )}
      </Box>
      <Box mx={2}>
        <Heading mb={1}>{title}</Heading>
        {description}
      </Box>
    </Box>
  )
}
