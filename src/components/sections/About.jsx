import { GraduationCap, Sparkles } from 'lucide-react'
import { about, profile } from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 scroll-mt-24" aria-label="About me">
      <div className="section-container">
        <SectionHeading eyebrow="About me" title="A little about me" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <Reveal as="p" className="text-lg sm:text-xl text-text leading-relaxed">
              I'm an undergraduate at the University of Moratuwa, pursuing a BSc (Hons) in Information Technology and Management. I'm driven by curiosity and a passion for technology, and I enjoy taking problems apart, understanding how the pieces fit together, and turning ideas into solutions that actually work.
            </Reveal>
            <Reveal as="p" delay={100} className="text-base sm:text-lg text-text-muted leading-relaxed">
              Over the past few years, I've worked across the stack from building frontend interfaces and backend services to working with databases and mobile applications. I enjoy the details in between just as much: designing data models, connecting APIs, refining user experiences, and figuring out how everything comes together. I’m particularly drawn to projects that combine technical depth with creativity, whether it’s a full-stack platform with multiple user roles or a hardware system brought to life through software.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
