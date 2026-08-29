import { Award } from 'lucide-react'
import { certifications } from '../../data/certifications'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 scroll-mt-24" aria-label="Certifications">
      <div className="section-container">
        <SectionHeading eyebrow="Certifications" title="Courses & credentials" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <Reveal
              as="li"
              key={cert.id}
              delay={i * 60}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-accent-dim/50"
            >
              <Award size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-text leading-snug">{cert.name}</p>
                <p className="text-xs text-text-faint mt-0.5">{cert.issuer}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
