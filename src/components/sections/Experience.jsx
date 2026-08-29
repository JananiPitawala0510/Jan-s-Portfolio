import { experience } from '../../data/experience'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 scroll-mt-24" aria-label="Leadership and experience">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Extra-curricular and Leadership"
          description="Outside of coursework and code, I look for ways to lead, organize, and collaborate."
        />

        <ol className="relative flex flex-col gap-8 border-l border-border pl-8 sm:pl-10">
          {experience.map((item, i) => (
            <Reveal as="li" key={item.id} delay={i * 100} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(2rem+5px)] sm:-left-[calc(2.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_var(--color-bg),0_0_0_5px_var(--color-border)]"
              />
              <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-dim/50">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <h3 className="text-lg font-semibold text-text">{item.role}</h3>
                  <span className="font-mono text-xs text-text-faint whitespace-nowrap">{item.period}</span>
                </div>
                <p className="text-accent-soft text-sm font-medium mb-3">{item.organization}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{item.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-bg-soft border border-border-soft px-3 py-1 text-xs text-text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
