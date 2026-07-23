interface LiveProjectButtonProps {
  label?: string
  href: string
}

export default function LiveProjectButton({
  label = 'Vezi pe GitHub',
  href,
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] px-5 py-2 sm:px-10 sm:py-3.5 text-xs sm:text-base font-medium uppercase tracking-wider sm:tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      {label}
    </a>
  )
}
