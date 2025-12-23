import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import { lazy, Suspense } from 'react'
import '../../styles.css'
import { isSSR } from '../../utils'
import { Share } from '../icons'

const TypedTag = lazy(() => import('../TypedTag'))

export default function WelcomeSection() {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      justifyContent={{ base: 'center', lg: 'space-between' }}
      alignItems={{ base: 'center', lg: 'flex-end' }}
      gap={8}
    >
      <Flex direction={{ base: 'column', lg: 'row' }} alignItems="center" gap={8}>
        <Flex
          align="center"
          justify="center"
          borderRadius="2xl"
          backgroundColor="background"
          overflow="hidden"
          zIndex={1}
          borderColor="primary"
          borderWidth="1px"
        >
          <Image src="mug-shot.png" alt="Grant Lonie" width="200px" />
        </Flex>

        <Flex direction="column" gap={4}>
          <Box
            bg="rgba(255, 255, 255, 0.2)"
            borderColor="primary"
            borderWidth="1px"
            px={4}
            py={1}
            borderRadius="full"
            fontSize="sm"
            fontWeight="medium"
            color="rgba(255, 255, 255, 0.8)"
            width="fit-content"
            zIndex={1}
          >
            PROFESSIONAL SERVICES
          </Box>

          <Heading
            color="white"
            fontFamily="Krona One"
            as="h1"
            fontSize={{ base: '4xl', lg: '5xl' }}
            zIndex={1}
          >
            GRANT LONIE
          </Heading>

          <Box width="390px" zIndex={1}>
            {isSSR ? (
              <StaticTag />
            ) : (
              <Suspense fallback={<StaticTag />}>
                <TypedTag />
              </Suspense>
            )}
          </Box>
        </Flex>
      </Flex>

      <Button
        bg="blue.500"
        color="white"
        px={8}
        py={6}
        borderRadius="xl"
        fontSize="lg"
        fontWeight="medium"
        _hover={{ bg: 'blue.600' }}
        rightIcon={<Share />}
        onClick={handleGoToContact}
      >
        Get in Touch
      </Button>
    </Flex>
  )
}

const StaticTag = () => <Box fontSize="1.5em">Freelance web stack technologist</Box>

function handleGoToContact() {
  window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' })
}
