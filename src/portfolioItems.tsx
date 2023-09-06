import { Box, Text } from '@chakra-ui/react'

export interface PortfolioItemProps {
  title: string
  description: string
  iconUrl: string
  imageUrl: string
  subtitle: string
  videoUrl: string
}

export const portfolioItems: PortfolioItemProps[] = [
  {
    title: 'Bombdoor',
    description:
      'As startup CTO, developed a high-performance B2B marketplace for vendors to rent and lease their equipment to other client businesses',
    iconUrl: '/portfolio-icons/bombdoor.png',
    imageUrl: 'https://storage.googleapis.com/grantlonie-public/showcase/bombdoor.gif',
    subtitle: 'Business-to-business product rental platform',
    videoUrl: 'https://storage.googleapis.com/grantlonie-public/showcase/bombdoor.mp4',
  },
  {
    title: 'Tada Designer',
    description:
      'Built a visual database management tool used by internal company stakeholders for generating database table joins and calculated properties',
    iconUrl: '/portfolio-icons/designer.svg',
    imageUrl: 'https://storage.googleapis.com/grantlonie-public/showcase/designer.gif',
    subtitle: 'Database CRUD management tool',
    videoUrl: 'https://storage.googleapis.com/grantlonie-public/showcase/designer.mp4',
  },
  {
    title: 'Tada Builder',
    description:
      'Constructed a widget building tool including: the UI-agnostic config, API architecture, dynamic chart type swapping and drag-n-drop fluid UX.',
    iconUrl: '/portfolio-icons/tada-builder.svg',
    imageUrl: 'https://storage.googleapis.com/grantlonie-public/showcase/builder.gif',
    subtitle: 'WYSIWYG widget configuration tool',
    videoUrl: 'https://storage.googleapis.com/grantlonie-public/showcase/builder.mp4',
  },
  {
    title: 'Touch Display',
    description:
      'Architected and developed telematic touchscreen display applications to assist in the operational efficiency of large mining equipment',
    iconUrl: '/portfolio-icons/ARi.png',
    imageUrl: 'https://storage.googleapis.com/grantlonie-public/showcase/displays.gif',
    subtitle: 'Heavy manufacturing rugged touch screens',
    videoUrl: 'https://storage.googleapis.com/grantlonie-public/showcase/displays.mp4',
  },
  {
    title: 'Electronics',
    description:
      'Managed the development of multiple electronic products assisting in hardware design, software integration and product validation',
    iconUrl: '/portfolio-icons/ARi.png',
    imageUrl: 'https://storage.googleapis.com/grantlonie-public/showcase/electronics.gif',
    subtitle: 'Electronic hw and embedded applications',
    videoUrl: 'https://storage.googleapis.com/grantlonie-public/showcase/electronics.mp4',
  },
]
