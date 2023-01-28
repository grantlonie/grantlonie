import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export interface PortfolioItem {
  title: string
  description: JSX.Element
  imageUrl: string
  videoUrl: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Bombdoor',
    description: (
      <Box>
        <Text>Business-to-business rental and leasing platform</Text>
        <Text>
          As startup CTO, I worked with the other founders to develop a high-performance, SEO marketplace where vendors
          would make their equipment available for rent by other client businesses
        </Text>
      </Box>
    ),
    imageUrl: 'https://storage.cloud.google.com/grantlonie-public/showcase/bombdoor.png',
    videoUrl: 'https://storage.cloud.google.com/grantlonie-public/showcase/bombdoor.mp4',
  },
]
