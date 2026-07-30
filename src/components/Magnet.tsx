import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  // Touch devices emit synthetic mouse events on tap, which would drag the
  // card around. Only follow a real pointer.
  const [pointerFine, setPointerFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const sync = () => setPointerFine(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!pointerFine) {
      setActive(false)
      setOffset({ x: 0, y: 0 })
      return
    }

    const handleMove = (e: PointerEvent) => {
      // Ignore touch and pen: only an actual mouse should attract the card.
      if (e.pointerType !== 'mouse') return
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const withinX = Math.abs(e.clientX - centerX) < rect.width / 2 + padding
      const withinY = Math.abs(e.clientY - centerY) < rect.height / 2 + padding
      if (withinX && withinY) {
        setActive(true)
        setOffset({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
        })
      } else {
        setActive(false)
        setOffset({ x: 0, y: 0 })
      }
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [padding, strength, pointerFine])

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
