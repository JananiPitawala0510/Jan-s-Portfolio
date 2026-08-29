import { GraduationCap } from 'lucide-react'
import { education } from '../../data/education'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 scroll-mt-24" aria-label="Education">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 80}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-dim/50"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-accent">
                <GraduationCap size={20} aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold text-text leading-snug">{item.institution}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.credential}</p>
              {item.period && (
                <span className="font-mono text-xs text-text-faint mt-auto pt-1">{item.period}</span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
