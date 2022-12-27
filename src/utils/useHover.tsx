import { useState, useEffect } from "react"

/** Returns a boolean representing whether or not the provided reference is currently being hovered on */
export default function useHover(ref) {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => setHover(true)
  const handleMouseExit = () => setHover(false)

  useEffect(() => {
    if (!ref.current) return

    ref.current.addEventListener("mouseenter", handleMouseEnter)
    ref.current.addEventListener("mouseleave", handleMouseExit)

    return () => {
      if (!ref.current) return
      ref.current.removeEventListener("mouseenter", handleMouseEnter)
      ref.current.removeEventListener("mouseleave", handleMouseExit)
    }
  }, [ref.current])

  return hover
}
