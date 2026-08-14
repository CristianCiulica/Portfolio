import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import { useLanguage } from '../i18n/LanguageContext'

export default function AboutSection() {
  const { lang, t } = useLanguage()

  return (
    <section
      id="despre"
      className="relative flex min-h-0 flex-col items-center justify-center gap-6 px-5 py-14 sm:min-h-screen sm:gap-14 sm:px-8 sm:py-20 md:gap-16 md:px-10"
    >
      <div className="absolute left-[1%] top-[4%] w-[70px] opacity-30 sm:left-[2%] sm:w-[160px] sm:opacity-100 md:left-[4%] md:w-[210px]">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img src="/about/moon_icon.png" alt="" className="w-full" />
        </FadeIn>
      </div>
      <div className="absolute bottom-[8%] left-[3%] w-[60px] opacity-30 sm:left-[6%] sm:w-[140px] sm:opacity-100 md:left-[10%] md:w-[180px]">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img src="/about/p59.png" alt="" className="w-full" />
        </FadeIn>
      </div>
      <div className="absolute right-[1%] top-[4%] w-[70px] opacity-30 sm:right-[2%] sm:w-[160px] sm:opacity-100 md:right-[4%] md:w-[210px]">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img src="/about/lego_icon.png" alt="" className="w-full" />
        </FadeIn>
      </div>
      <div className="absolute bottom-[8%] right-[3%] w-[80px] opacity-30 sm:right-[6%] sm:w-[170px] sm:opacity-100 md:right-[10%] md:w-[220px]">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img src="/about/group_134.png" alt="" className="w-full" />
        </FadeIn>
      </div>

      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t.about.heading}
        </h2>
      </FadeIn>

      <AnimatedText
        key={lang}
        text={t.about.text}
        className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
      />

      <div className="mt-6 sm:mt-10 md:mt-12">
        <ContactButton />
      </div>
    </section>
  )
}
