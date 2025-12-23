import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { PortfolioItemProps } from '../portfolioItems'
import PlayOutlined from './icons/PlayOutlined'

interface Props {
  item: PortfolioItemProps
}

const playIconWidth = 75

export default function PortfolioItem({ item }: Props) {
  const { title, description, iconUrl, imageUrl, subtitle } = item

  return (
    <Card
      sx={{
        background:
          'linear-gradient(135deg, rgba(36, 43, 66, 0.5) 0%, rgba(52, 72, 120, 0.3) 100%)',
        borderColor: 'primary',
        borderWidth: '1px',
        color: 'white',
        my: 2,
      }}
    >
      <CardHeader>
        <Flex flex="1" gap="4" alignItems="center">
          <Image alt={title} src={iconUrl} sx={{ height: '40px' }} />
          <Heading>{title}</Heading>
        </Flex>
      </CardHeader>

      <Text fontSize="sm" sx={{ px: 5, pb: 3 }}>
        {subtitle}
      </Text>

      <Box sx={{ position: 'relative' }}>
        <Image objectFit="cover" src={imageUrl} alt={`${title} portfolio`} />
        <Box
          position="absolute"
          left={`calc(50% - ${playIconWidth / 2}px)`}
          top={`calc(50% - ${playIconWidth / 2}px)`}
        >
          <PlayOutlined fontSize={playIconWidth} />
        </Box>
      </Box>

      <CardBody>{description}</CardBody>
    </Card>
  )
}
