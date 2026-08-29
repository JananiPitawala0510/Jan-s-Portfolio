import { useEffect, useRef } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import { GithubIcon } from './icons'

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 py-10 sm:p-6 sm:py-16"
      role="presentation"
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative w-full max-w-2xl rounded-3xl border border-border bg-surface shadow-2xl animate-fade-up"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-3xl border-b border-border bg-surface/95 backdrop-blur px-6 sm:px-8 py-6">
          <div>
            <h3 id="project-modal-title" className="text-2xl font-semibold text-text">
              {project.name}
            </h3>
            <p className="text-accent-soft text-sm mt-1">{project.tagline}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent-dim hover:text-accent-soft"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6 flex flex-col gap-8">
          <ModalBlock title="Problem">
            <p className="text-text-muted leading-relaxed">{project.details.problem}</p>
          </ModalBlock>

          <ModalBlock title="Solution">
            <p className="text-text-muted leading-relaxed">{project.details.solution}</p>
          </ModalBlock>

          <ModalBlock title="Technologies">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border-soft bg-bg-soft px-3 py-1 font-mono text-xs text-text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </ModalBlock>

          <ModalBlock title="Key Features">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </ModalBlock>

          <ModalBlock title="My Contribution">
            <p className="text-text-muted leading-relaxed">{project.details.contribution}</p>
          </ModalBlock>

          <ModalBlock title="Challenges & Learning">
            <p className="text-text-muted leading-relaxed">{project.details.challenges}</p>
          </ModalBlock>

          <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#04120f] transition-colors hover:bg-accent-soft"
            >
              <GithubIcon size={16} aria-hidden="true" />
              View on GitHub
            </a>
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition-colors hover:border-accent-dim hover:text-accent-soft"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ModalBlock({ title, children }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-2.5">{title}</h4>
      {children}
    </div>
  )
}
