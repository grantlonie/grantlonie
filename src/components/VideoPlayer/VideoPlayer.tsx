import { Box } from '@chakra-ui/react'
import { round } from 'lodash'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import './videoPlayerStyle.css'

const videoRatio = round((1080 / 1920) * 100, 2)

export default function VideoPlayer(props: ReactPlayerProps) {
  return (
    <Box sx={{ position: 'relative', paddingTop: `${videoRatio}%` }}>
      <ReactPlayer
        className="react-player"
        controls
        playing
        width="100%"
        height="100%"
        {...props}
      />
    </Box>
  )
}
