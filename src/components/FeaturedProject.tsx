import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'
import type { PortfolioContent } from '../types/portfolio'

type FeaturedProjectProps = {
  content: PortfolioContent
}

export function FeaturedProject({ content }: FeaturedProjectProps) {
  return (
    <section className="project-section" id="projeto">
      <div className="project-copy">
        <p className="section-label">{content.project.label}</p>
        <h2>{content.project.title}</h2>
        <p>{content.project.description}</p>
      </div>
      <a className="project-link" href={profile.github} target="_blank" rel="noreferrer">
        {content.actions.viewGithub}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </section>
  )
}
