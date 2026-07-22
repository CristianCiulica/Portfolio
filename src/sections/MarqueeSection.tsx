import { useEffect, useRef } from 'react'

const ROW_1_IMAGES = [
  '/projects/skinalert/landing.png',
  '/projects/fittrack/dashboard.png',
  '/projects/bacpro/dashboard.png',
  '/projects/skinalert/stats.png',
  '/projects/fittrack/running.png',
]

const ROW_2_IMAGES = [
  '/projects/7wonders/game.png',
  '/projects/bacpro/random.png',
  '/projects/skinalert/result.png',
  '/projects/fittrack/workout.png',
]

const ROW_1 = [...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES]
const ROW_2 = [...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES]

function MarqueeRow({
  images,
  rowRef,
}: {
  images: string[]
  rowRef: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <div ref={rowRef} className="flex gap-3" style={{ willChange: 'transform' }}>
      {images.map((src, i) => {
        // 7 Wonders fills its tile (no bars); other screenshots show full (contain);
        // gifs fill as before.
        const isFill = !src.startsWith('/projects/') || src.includes('7wonders')
        return (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            className={`rounded-2xl ${
              isFill ? 'object-cover' : 'bg-[#F2F2F7] object-contain'
            }`}
            style={{ width: 420, height: 270, flexShrink: 0 }}
          />
        )
      })}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const el = sectionRef.current
      if (!el) return
      const offset = (window.scrollY - el.offsetTop + window.innerHeight) * 0.3
      if (row1Ref.current)
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`
      if (row2Ref.current)
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <MarqueeRow images={ROW_1} rowRef={row1Ref} />
      <MarqueeRow images={ROW_2} rowRef={row2Ref} />
    </section>
  )
}
