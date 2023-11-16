import { Variants, useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'

export function useAnimateOnView(ref, options = {}) {
  const controls = useAnimation()
  const inView = useInView(ref, { amount: 1, ...options })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  return controls
}

export const defaultVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}
