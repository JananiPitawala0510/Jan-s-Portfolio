import { Code2, Database, LayoutTemplate, Server, Wrench } from 'lucide-react'
import { skillCategories } from '../../data/skills'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const ICONS = {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 scroll-mt-24" aria-label="Technical skills">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tech I work with"
          description="A growing toolkit shaped by coursework, hands-on projects, and a healthy amount of exploration and experimentation.
"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => {
            const Icon = ICONS[category.icon]
            return (
              <Reveal
                key={category.id}
                delay={i * 80}
                className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-dim/60 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(45,212,191,0.25)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-accent transition-colors group-hover:bg-accent/10">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-text">{category.title}</h3>
                </div>

                <p className="text-sm text-text-muted mb-5 leading-relaxed">{category.description}</p>

                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border-soft bg-bg-soft px-3 py-1.5 font-mono text-xs text-text-muted transition-colors hover:border-accent-dim hover:text-accent-soft"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
