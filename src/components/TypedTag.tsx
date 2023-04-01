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
      style={{ color: theme.colors.white, fontSize: '1.2em' }}
    />
  )
}

const tagSequence = [
  'Freelance web stack technologist',
  2000,
  'Freelance web application guru',
  2000,
  'Admirable multi-platform architect',
  2000,
  'Admirable husband and father',
  2000,
]
