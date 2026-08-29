import { useState } from 'react'
import { ArrowDown, Download, ImageUp, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../ui/Button'
import { GithubIcon, LinkedinIcon } from '../ui/icons'

const socialLinks = [
  { href: profile.social.github, label: 'GitHub', Icon: GithubIcon },
  { href: profile.social.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
      aria-label="Introduction"
    >
      {/* Background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="section-container grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-sm sm:text-base tracking-[0.3em] uppercase text-accent mb-5">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text leading-[1.05] mb-6">
            JANANI PITAWALA
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-text-muted mb-6">
            IT and Management Undergraduate
          </h2>

          <p className="max-w-xl text-base sm:text-lg text-text-muted leading-relaxed mb-10">
            A curious mind with a passion for technology and innovation.
            Always exploring new possibilities, learning along the way, and creating with purpose.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button as="a" href="#projects" variant="primary">
              View My Work
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              variant="secondary"
              icon={Download}
              download
            >
              Download CV
            </Button>
          </div>

          <ul className="flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-muted transition-all duration-200 hover:border-accent-dim hover:text-accent-soft hover:-translate-y-0.5"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
          <PortraitCard />
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-faint hover:text-accent-soft transition-colors animate-float"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}

function PortraitCard() {
  const [imageFailed, setImageFailed] = useState(false)
  const showPlaceholder = !profile.photo || imageFailed

  return (
    <div className="relative w-full max-w-sm">
      <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl shadow-black/40">
        {!showPlaceholder && (
          <img
            src={profile.photo}
            alt={profile.name === 'Welcome!' ? 'Portrait photo' : `Portrait of ${profile.name}`}
            className="h-full w-full object-cover"
            onError={() => setImageFailed(true)}
          />
        )}

        {showPlaceholder && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-code-grid px-8 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border-soft bg-surface-2 text-accent">
              <ImageUp size={28} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <p className="text-sm text-text-muted leading-relaxed">
              Add your photo at
              <br />
              <code className="font-mono text-xs text-accent-soft">public/profile.jpg</code>
            </p>
          </div>
        )}

        {/* Corner accents for a framed, premium feel */}
        <span
          aria-hidden="true"
          className="absolute left-4 top-4 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-accent/50"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-accent/50"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
        />
      </div>
    </div>
  )
}
