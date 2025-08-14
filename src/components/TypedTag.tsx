import { useTheme } from '@chakra-ui/react'
import { TypeAnimation } from 'react-type-animation'

export default function TypedTag() {
  const theme = useTheme()

  return (
    <TypeAnimation
      sequence={tagSequence}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ color: theme.colors.white, fontSize: '1.5em' }}
    />
  )
}

const tagSequence = [
  'Freelance web stack technologist',
  2000,
  'Freelance software architect',
  2000,
  'Fractional Technology Officer',
  2000,
  'Devoted husband and father',
  2000,
]
