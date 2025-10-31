import { Box, Button, Flex, Heading, Image, useBreakpointValue } from '@chakra-ui/react'
import { Suspense, lazy } from 'react'
import '../../styles.css'
import { isSSR, rotateAngle } from '../../utils'
import PowerIcon from '../PowerIcon'

const height = 600

const TypedTag = lazy(() => import('../TypedTag'))

export default function WelcomeSection() {
  const titleBoxWidth = useBreakpointValue({ base: 375, md: 670 })

  return (
    <Box position="relative" height={height} zIndex={1}>
      <Box
        height={height}
        overflow="hidden"
        bgGradient="radial(#393E46 0%, #5c6575ff 80%, #717b8cff 100%)"
        transform={`rotate3d(0, 0, 1, ${360 - rotateAngle}deg)`}
        width="115%"
        position="relative"
        transformOrigin="bottom left"
        boxShadow="0px 0px 3px 3px rgba(0,0,0,0.49)"
      >
        <ul className="circles">
          {new Array(10).fill(0).map((_, i) => (
            <PowerIcon key={i} />
          ))}
        </ul>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: `calc(50% - ${titleBoxWidth / 2}px)`,
          top: 100,
          width: titleBoxWidth,
          color: 'white',
        }}
      >
        <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }} gap={10}>
          <Flex
            align="center"
            justify="center"
            borderRadius="2xl"
            backgroundColor="background"
            overflow="hidden"
            boxShadow="inset 0px 0px 3px 3px rgba(0,0,0,0.49)"
          >
            <Image src="mug-shot.png" alt="Grant Lonie" width="250px" />
          </Flex>

          <Flex
            alignItems={{ base: 'center', md: 'flex-start' }}
            direction="column"
            gap={5}
            flex={1}
          >
            <Heading as="h1" size="3xl">
              Grant Lonie
            </Heading>

            <Box width="370px">
              {isSSR ? (
                <StaticTag />
              ) : (
                <Suspense fallback={<StaticTag />}>
                  <TypedTag />
                </Suspense>
              )}
            </Box>

            <Button color="inherit" variant="outline" onClick={handleGoToContact}>
              Reach out 👋
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

const StaticTag = () => <Box fontSize="1.5em">Freelance web stack technologist</Box>

function handleGoToContact() {
  window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' })
}
