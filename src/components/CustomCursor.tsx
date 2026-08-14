import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isFinePointer, setIsFinePointer] = useState(false)

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Fluid spring with silky smooth response for the unified cursor
  const cursorX = useSpring(mouseX, { damping: 32, stiffness: 650 })
  const cursorY = useSpring(mouseY, { damping: 32, stiffness: 650 })

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setIsFinePointer(mediaQuery.matches)

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches)
    }
    mediaQuery.addEventListener('change', handleMediaChange)

    if (!mediaQuery.matches) return () => mediaQuery.removeEventListener('change', handleMediaChange)

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)
      if (!isVisible) setIsVisible(true)

      // Detect hover over interactive elements
      const target = e.target as HTMLElement | null
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, [role="button"], .cursor-pointer')
        )
        setIsHovered(isInteractive)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible, mouseX, mouseY])

  if (!isFinePointer) return null

  return (
    <>
      {/* SVG Optical Refraction Filter with High Displacement on Edges */}
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="apple-liquid-lens" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="24" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        {/* Unified Cursor: Liquid Glass Lens + Centered Micro-Dot */}
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="relative flex items-center justify-center"
        >
          {/* Liquid Glass Refractive Outer Lens */}
          <motion.div
            animate={{
              width: isHovered ? 60 : 40,
              height: isHovered ? 60 : 40,
              scale: isClicking ? 0.85 : 1,
              opacity: isVisible ? 1 : 0,
            }}
            transition={{
              width: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
              height: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 0.12 },
              opacity: { duration: 0.12 },
            }}
            className="relative flex items-center justify-center rounded-full"
          >
            {/* Glass Lens Core with Edge Refraction */}
            <div
              className="h-full w-full rounded-full transition-all duration-200"
              style={{
                /* Strong Light Bending Refraction */
                backdropFilter: isHovered
                  ? 'url(#apple-liquid-lens) blur(0.5px) brightness(1.18) contrast(1.18) saturate(1.3)'
                  : 'url(#apple-liquid-lens) blur(0.5px) brightness(1.12) contrast(1.14) saturate(1.2)',
                WebkitBackdropFilter: isHovered
                  ? 'blur(0.5px) brightness(1.18) contrast(1.18) saturate(1.3)'
                  : 'blur(0.5px) brightness(1.12) contrast(1.14) saturate(1.2)',

                /* 100% Transparent in Center, subtle glass density only on edges */
                background: isHovered
                  ? 'radial-gradient(circle at center, transparent 40%, rgba(255, 255, 255, 0.02) 75%, rgba(215, 226, 234, 0.06) 100%)'
                  : 'radial-gradient(circle at center, transparent 45%, rgba(255, 255, 255, 0.01) 80%, rgba(215, 226, 234, 0.04) 100%)',

                /* Intense Edge Caustic Refraction Glow without hard borders */
                boxShadow: isHovered
                  ? 'inset 0 0 14px 2px rgba(255, 255, 255, 0.24), inset 0 0 4px rgba(255, 255, 255, 0.35), 0 10px 30px rgba(0, 0, 0, 0.45)'
                  : 'inset 0 0 10px 1.5px rgba(255, 255, 255, 0.18), inset 0 0 3px rgba(255, 255, 255, 0.25), 0 8px 24px rgba(0, 0, 0, 0.35)',
              }}
            />

            {/* Simple & Minimalist Precision Micro-Pointer: Fixed in Dead-Center */}
            <motion.div
              animate={{
                scale: isClicking ? 0.65 : isHovered ? 0.5 : 1,
                opacity: isVisible ? (isHovered ? 0.6 : 1) : 0,
              }}
              transition={{ duration: 0.12 }}
              className="absolute h-1.5 w-1.5 rounded-full bg-[#D7E2EA] shadow-[0_0_6px_rgba(215,226,234,0.9),0_1px_3px_rgba(0,0,0,0.8)] ring-[0.5px] ring-[#0C0C0C]"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
