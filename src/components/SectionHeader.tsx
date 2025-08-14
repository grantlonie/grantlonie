import { Heading, Text } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'
import { useRef } from 'react'
import { useAnimateOnView } from '../utils/animationUtils'

interface Props {
  title: string
  description?: string
}

export default function SectionHeader({ title, description }: Props) {
  const ref = useRef()
  const controls = useAnimateOnView(ref)

  return (
    <motion.div ref={ref} variants={containerAnimationVariants} initial="hidden" animate={controls}>
      <motion.div variants={itemAnimationVariants}>
        <Heading size="2xl" mb={5}>
          {title}
        </Heading>
      </motion.div>

      {description && (
        <motion.div variants={itemAnimationVariants}>
          <Text fontSize="xl" mb={8}>
            {description}
          </Text>
        </motion.div>
      )}
    </motion.div>
  )
}

const containerAnimationVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
}

const itemAnimationVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}
