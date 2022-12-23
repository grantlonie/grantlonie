import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { TypeAnimation } from "react-type-animation"
import React from "react"
import PowerIcon from "../components/PowerIcon"
import "../styles.css"

const height = 600
const titleBoxWidth = 316

export default function WelcomeSection() {
  return (
    <Box
      overflow="hidden"
      position="relative"
      height={height}
      //   display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        height={height}
        overflow="hidden"
        bgGradient="radial(rgba(0,100,183,1) 0%, rgba(0,145,234,1) 80%, rgba(100,193,255,1) 100%)"
        transform="rotate(355deg)"
        width="115%"
        position="relative"
        transformOrigin="bottom left"
      >
        <ul className="circles">
          {new Array(10).fill(0).map(() => (
            <PowerIcon />
          ))}
        </ul>
      </Box>
      <Box position="absolute" left={`calc(50% - ${titleBoxWidth / 2}px)`} top={250} width={titleBoxWidth}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Heading as="h1" size="2xl" color="white">
            Grant Lonie
          </Heading>
        </Box>
        <TypeAnimation
          sequence={tagSequence}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ color: "white", fontSize: "1.2em" }}
        />
        <Box display="flex" justifyContent="center" mt={4}>
          <Button color="white" variant="outline">
            Reach out 👋
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

const tagSequence = [
  "Freelance web stack technologist",
  2000,
  "Freelance web application guru",
  2000,
  "Admirable multi-platform architect",
  2000,
  "Admirable husband and father",
  2000,
]
