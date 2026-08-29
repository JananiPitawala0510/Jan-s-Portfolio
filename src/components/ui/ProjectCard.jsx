import { useState } from 'react'
import { ArrowUpRight, Cpu, Layers } from 'lucide-react'
import Reveal from './Reveal'
import { GithubIcon } from './icons'

const THEME_ICON = {
  software: Layers,
  'software-alt': Layers,
  hardware: Cpu,
}

export default function ProjectCard({ project, onOpenDetails, featured = false, delay = 0 }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = project.image && !imageFailed
  const ThemeIcon = THEME_ICON[project.theme] ?? Layers
  const visibleTech = project.technologies.slice(0, featured ? 8 : 4)
  const remaining = project.technologies.length - visibleTech.length

  return (
    <Reveal
      delay={delay}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:border-accent-dim/60 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(45,212,191,0.3)] ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden border-b border-border bg-surface-2 ${
          featured ? 'lg:w-2/5 lg:border-b-0 lg:border-r' : ''
        } ${project.theme === 'hardware' ? 'h-56' : 'h-48'}`}
      >
        {showImage ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
            <div
              className={`absolute inset-0 opacity-40 ${
                project.theme === 'hardware' ? 'bg-circuit' : 'bg-code-grid'
              }`}
            />
            <ThemeIcon
              size={featured ? 64 : 48}
              strokeWidth={1.25}
              className="relative text-accent/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent"
            />
          </div>
        )}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface-2 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-text">{project.name}</h3>
            <p className="text-sm text-accent-soft mt-1">{project.tagline}</p>
          </div>
          {featured && (
            <span className="shrink-0 rounded-full border border-accent-dim/50 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-soft">
              Featured
            </span>
          )}
        </div>

        <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-5">{project.description}</p>

        <ul className="flex flex-wrap gap-2 mb-6">
          {visibleTech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border-soft bg-bg-soft px-3 py-1 font-mono text-xs text-text-muted"
            >
              {tech}
            </li>
          ))}
          {remaining > 0 && (
            <li className="rounded-full border border-border-soft px-3 py-1 font-mono text-xs text-text-faint">
              +{remaining} more
            </li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#04120f] transition-all hover:bg-accent-soft"
          >
            View Details
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>

          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition-colors hover:border-accent-dim hover:text-accent-soft"
          >
            <GithubIcon size={15} aria-hidden="true" />
            GitHub
          </a>

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-text-muted transition-colors hover:text-accent-soft"
            >
              Live Demo
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}
