import { useState } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import ProjectModal from '../ui/ProjectModal'
import SectionHeading from '../ui/SectionHeading'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 sm:py-32 scroll-mt-24" aria-label="Featured projects">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A collection of full-stack platforms, personal tools, and hardware experiments, each built to solve a different problem, explore new ideas, and push my understanding a little further."
        />

        <div className="flex flex-col gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured onOpenDetails={setActiveProject} />
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={i * 100}
                onOpenDetails={setActiveProject}
              />
            ))}
          </div>
        </div>
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  )
}
