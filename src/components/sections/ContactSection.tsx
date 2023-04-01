import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'

const emailService = 'https://getform.io/f/c8a53674-04db-4c2f-bd81-bd6ed9378f63'

export default function ContactSection() {
  return (
    <>
      <Heading mb={8}>Reach out</Heading>

      <form action={emailService} method="POST">
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { md: '1fr 1fr' }, mb: 2 }}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" />
          </FormControl>
        </Box>

        <FormControl>
          <FormLabel>What can I help you with</FormLabel>
          <Textarea height="200px" name="body" />{' '}
        </FormControl>

        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" sx={{ background: 'primary', color: 'white', mt: 2 }}>
            Send
          </Button>
        </Box>
      </form>
    </>
  )
}
