import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const NAV_LINKS = [
  { label: 'Despre', href: '#despre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proiecte', href: '#proiecte' },
  { label: 'Contact', href: '#contact' },
]

const TECH_PILLS = [
  { label: 'Java', pos: 'left-[6%] top-[34%]', rot: '-rotate-6', delay: 0.7, dur: '4.6s' },
  { label: 'C#', pos: 'left-[17%] top-[52%]', rot: 'rotate-3', delay: 0.8, dur: '5.4s' },
  { label: 'Algorithms', pos: 'left-[7%] top-[70%]', rot: 'rotate-[8deg]', delay: 0.9, dur: '5s' },
  { label: 'Data Structures', pos: 'right-[5%] top-[34%]', rot: 'rotate-6', delay: 0.75, dur: '5.2s' },
  { label: 'Spring Boot', pos: 'right-[14%] top-[52%]', rot: '-rotate-3', delay: 0.85, dur: '4.8s' },
  { label: 'Frontend Development', pos: 'right-[4%] top-[70%]', rot: '-rotate-[6deg]', delay: 0.95, dur: '5.6s' },
]

function TechPills() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
      {TECH_PILLS.map((pill) => (
        <div key={pill.label} className={`absolute ${pill.pos}`}>
          <FadeIn delay={pill.delay} y={20}>
            <div className="float-soft" style={{ animationDuration: pill.dur }}>
              <span
                className={`inline-block rounded-full border border-[#D7E2EA]/25 bg-[#D7E2EA]/5 px-5 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70 backdrop-blur-sm md:px-6 md:py-2.5 md:text-sm ${pill.rot}`}
              >
                {pill.label}
              </span>
            </div>
          </FadeIn>
        </div>
      ))}
    </div>
  )
}

function TerminalCard() {
  return (
    <div
      className="w-full rounded-2xl border border-[#D7E2EA]/20 bg-[#111214]/90 font-mono text-left shadow-2xl backdrop-blur-sm"
      style={{ boxShadow: '0 0 60px rgba(118, 33, 176, 0.25)' }}
    >
      <div className="flex items-center gap-2 border-b border-[#D7E2EA]/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#B600A8]" />
        <span className="h-3 w-3 rounded-full bg-[#7621B0]" />
        <span className="h-3 w-3 rounded-full bg-[#BE4C00]" />
        <span className="ml-2 text-xs tracking-wider text-[#D7E2EA]/40">
          cristian@unitbv
        </span>
      </div>
      <div className="flex flex-col gap-2.5 px-4 py-5 text-xs sm:px-5 sm:py-7 sm:text-sm md:py-8 md:text-base">
        <p className="text-[#D7E2EA]/60">
          <span className="text-[#B600A8]">$</span> whoami
        </p>
        <p className="text-[#D7E2EA]">student informatică · C++ · AI · full-stack</p>
        <p className="text-[#D7E2EA]/60">
          <span className="text-[#B600A8]">$</span> ls proiecte/
        </p>
        <p className="text-[#D7E2EA]">fittrack · skinalert · bacpro</p>
        <p className="text-[#D7E2EA]/60">
          <span className="text-[#B600A8]">$</span> cat status.txt
        </p>
        <p className="text-[#D7E2EA]">deschis pentru internship-uri și colaborări</p>
        <p className="text-[#D7E2EA]/60">
          <span className="text-[#B600A8]">$</span> ./construieste ceva_memorabil
        </p>
        <p className="text-[#D7E2EA]">
          rulează…<span className="terminal-cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-[#D7E2EA]" />
        </p>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[10.5vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[10.8vw] md:-mt-5 md:text-[11vw] lg:text-[11.5vw]">
            Sunt Cristian
          </h1>
        </FadeIn>
      </div>

      <div className="relative flex flex-1 items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Transform idei în software care funcționează — rapid, curat și bine
            gândit
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <TechPills />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full sm:top-auto sm:bottom-0 sm:h-[560px] sm:w-[720px]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(118, 33, 176, 0.22), rgba(182, 0, 168, 0.08) 55%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[300px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-14 sm:w-[420px] sm:translate-y-0 md:bottom-16 md:w-[500px] lg:w-[560px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <TerminalCard />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  )
}
