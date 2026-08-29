import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col gap-3 mb-12 md:mb-16 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-accent flex items-center gap-2">
          <span aria-hidden="true" className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-text">{title}</h2>
      {description && <p className="text-text-muted text-base sm:text-lg leading-relaxed">{description}</p>}
    </Reveal>
  )
}
