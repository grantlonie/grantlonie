import React from "react"
import ReactPlayer, { ReactPlayerProps } from "react-player"

export default function VideoPlayer(props: ReactPlayerProps) {
  return <ReactPlayer controls playing width="100%" height="100%" {...props} />
}
