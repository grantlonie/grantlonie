import { motion } from 'framer-motion'
import { useRef } from 'react'
import { defaultVariants, useAnimateOnView } from '../utils/animationUtils'

interface Props {
  children: any
  options?: any
}

export default function AnimateIn({ children, options }: Props) {
  const ref = useRef()
  const controls = useAnimateOnView(ref, { amount: 0.4, ...options })

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={defaultVariants}>
      {children}
    </motion.div>
  )
}
