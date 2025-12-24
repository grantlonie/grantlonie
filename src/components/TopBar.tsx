import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Menu from './icons/Menu'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Methodologies', href: '#methodologies' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1)

    const sectionMapping: { [key: string]: () => number } = {
      services: () => {
        const element = document.querySelector('[data-section="services"]')
        return element.getBoundingClientRect().top + window.scrollY
      },
      methodologies: () => {
        const element = document.querySelector('[data-section="methodologies"]')
        return element.getBoundingClientRect().top + window.scrollY
      },
      portfolio: () => {
        const element = document.querySelector('[data-section="portfolio"]')
        return element.getBoundingClientRect().top + window.scrollY
      },
      about: () => {
        const element = document.querySelector('[data-section="about"]')
        return element.getBoundingClientRect().top + window.scrollY
      },
      contact: () => {
        const element = document.querySelector('[data-section="contact"]')
        return element.getBoundingClientRect().top + window.scrollY
      },
    }

    window.scrollTo({
      top: sectionMapping[targetId]() - 100,
      behavior: 'smooth',
    })

    onClose()
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1000"
        transition="all 0.3s ease"
        bg={isScrolled ? 'rgba(10, 26, 54, 0.50)' : 'transparent'}
        backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
        borderBottom={isScrolled ? '1px solid rgba(45, 125, 255, 0.3)' : 'none'}
      >
        <Container maxW="5xl">
          <Flex h="60px" alignItems="center" justifyContent="space-between">
            <Image
              src="/icon.png"
              alt="Logo"
              h="40px"
              w="40px"
              cursor="pointer"
              onClick={scrollToTop}
              _hover={{ opacity: 0.8 }}
            />

            <Flex display={{ base: 'none', md: 'flex' }} alignItems="center" gap={8}>
              {navItems.map(item => (
                <Button
                  key={item.label}
                  variant="ghost"
                  color="white"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{
                    color: 'primary',
                    bg: 'rgba(45, 125, 255, 0.1)',
                  }}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Button>
              ))}
            </Flex>

            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              icon={<Menu />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'rgba(45, 125, 255, 0.1)' }}
              onClick={onOpen}
            />
          </Flex>
        </Container>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="background" borderLeft="1px solid rgba(45, 125, 255, 0.3)">
          <DrawerCloseButton color="white" />
          <DrawerBody pt={16}>
            <VStack spacing={6} align="stretch">
              {navItems.map(item => (
                <Button
                  key={item.label}
                  variant="ghost"
                  color="white"
                  fontSize="lg"
                  fontWeight="medium"
                  justifyContent="flex-start"
                  h="50px"
                  _hover={{
                    color: 'primary',
                    bg: 'rgba(45, 125, 255, 0.1)',
                  }}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
