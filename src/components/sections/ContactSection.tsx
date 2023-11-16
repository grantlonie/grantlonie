import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import SectionHeader from '../SectionHeader'

const emailService = 'https://getform.io/f/c8a53674-04db-4c2f-bd81-bd6ed9378f63'

export default function ContactSection() {
  const [email, setEmail] = useState('')
  const valid = validateEmail(email)

  return (
    <>
      <SectionHeader title="Reach out" />

      <form action={emailService} method="POST">
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { md: '1fr 1fr' }, mb: 2 }}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
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
          <Button color="inherit" disabled={!valid} type="submit" variant="outline" sx={{ mt: 2 }}>
            Send
          </Button>
        </Box>
      </form>
    </>
  )
}

const validateEmail = email =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
