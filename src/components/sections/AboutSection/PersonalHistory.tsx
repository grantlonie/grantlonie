import { Box, Image, Text } from '@chakra-ui/react'

export default function PersonalHistory() {
  return (
    <Box
      sx={{
        display: { base: null, md: 'flex' },
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          py: { base: 4, md: 12 },
          pr: { base: 0, md: 2 },
          pl: { base: 0, md: 12 },
          display: 'flex',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Image src="/family.png" alt="family picture" sx={{ borderRadius: 8 }} />
      </Box>
      <Box
        sx={{
          overflow: 'auto',
          py: { base: 4, md: 12 },
          pr: { base: 0, md: 12 },
          pl: { base: 0, md: 2 },
        }}
      >
        <Text mb={2}>
          I grew up in Peoria, Illinois - a small city surrounded by rural farmland known for the
          phrase “Will it play in Peoria”. My favorite past time activities include: skateboarding,
          disc golf and Smash Brothers.
        </Text>
        <Text mb={2}>
          I went to Bradley, a local private university, followed up with a Christian mission trip.
          I lived for a few years with friends who helped strengthen my faith while working my first
          couple jobs.
        </Text>
        <Text mb={2}>
          One night, after a gathering with some friends, I gathered my courage and chased down the
          woman of my dreams and swept her off her feet. After long distance engagement while she
          was living in California, Erica and I got hitched and started our life together.
        </Text>
        <Text mb={2}>
          Erica started working for Caterpillar right out of school, and she received a new position
          that relocated us to bourbon capitol - Louisville, KY. After a few years and a few more
          friends we took off for her next assignment in Alberta, Canada, where we live today.
        </Text>
        <Text mb={2}>
          Erica and I love to travel and spend most evenings cooking and sipping wine or classic
          bourbon cocktails. We have two kids - James is turning 1 and our feisty cat Misty.
        </Text>
      </Box>
    </Box>
  )
}
