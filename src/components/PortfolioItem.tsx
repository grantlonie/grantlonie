import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { PortfolioItemProps } from '../portfolioItems'
import PlayOutlined from './icons/PlayOutlined'

interface Props {
  item: PortfolioItemProps
  onClick: () => void
}

const playIconWidth = 75

export default function PortfolioItem({ item, onClick }: Props) {
  const { title, description, iconUrl, imageUrl, subtitle } = item

  return (
    <Card
      onClick={onClick}
      sx={{
        background: 'white',
        color: 'black',
        cursor: 'pointer',
        height: '440px',
        my: 2,
        width: '335px',
      }}
    >
      <CardHeader>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
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
