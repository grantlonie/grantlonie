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
        mt: 2,
        mr: 4,
        mb: 8,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        <SocialIcon value="github" />
        <SocialIcon value="linkedin" />
      </Box>
      <Text>Made with ❤️ by Gatsby</Text>
    </Box>
  )
}
