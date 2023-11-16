import { useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'

export default function useAnimateOnView(ref) {
  const controls = useAnimation()
  const inView = useInView(ref, { amount: 0.7 })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  return controls
}
