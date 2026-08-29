import { Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { GithubIcon, LinkedinIcon } from '../ui/icons'

const contactLinks = [
  { href: `mailto:${profile.email}`, label: profile.email, Icon: Mail, name: 'Email' },
  { href: profile.social.linkedin, label: 'LinkedIn', Icon: LinkedinIcon, name: 'LinkedIn' },
  { href: profile.social.github, label: 'GitHub', Icon: GithubIcon, name: 'GitHub' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 scroll-mt-24" aria-label="Contact">
      <div className="section-container">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 sm:px-16 sm:py-20 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/10 blur-[100px]"
          />

          <div className="relative">
            <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-accent">
              Contact
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-text">
              Let's build something <span className="text-gradient">meaningful.</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-text-muted leading-relaxed">
              I'm always open to connecting, discussing ideas, and exploring opportunities in software
              engineering.
            </p>

            <div className="mt-9">
              <Button as="a" href={`mailto:${profile.email}`} variant="primary" icon={Mail}>
                Say Hello
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {contactLinks.map(({ href, label, Icon, name }) => (
                <li key={name}>
                  <a
                    href={href}
                    target={name === 'Email' ? undefined : '_blank'}
                    rel={name === 'Email' ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-soft"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
