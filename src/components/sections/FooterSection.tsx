import { Box, Text } from '@chakra-ui/react'
import SocialIcon from '../SocialIcon'

export default function FooterSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'flex-end',
        m: 8,
        mt: 4,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        <SocialIcon value="github" />
        <SocialIcon value="linkedin" />
      </Box>
      <Text color="white" fontSize="2xl">
        Grant Lonie
      </Text>
    </Box>
  )
}
