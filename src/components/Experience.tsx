import { BriefcaseBusiness } from 'lucide-react'
import type { PortfolioContent } from '../types/portfolio'

type ExperienceProps = {
  content: PortfolioContent
}

export function Experience({ content }: ExperienceProps) {
  return (
    <section className="section timeline-section" id="experiencia">
      <div className="section-heading">
        <p className="section-label">{content.experience.label}</p>
        <h2>{content.experience.title}</h2>
      </div>
      <div className="timeline">
        {content.experience.items.map((experience) => (
          <article className="timeline-item" key={`${experience.company}-${experience.role}`}>
            <div className="timeline-marker" aria-hidden="true">
              <BriefcaseBusiness size={18} />
            </div>
            <div>
              <p className="period">{experience.period}</p>
              <h3>
                {experience.role} <span>{experience.company}</span>
              </h3>
              <p>{experience.description}</p>
              <div className="mini-stack">
                {experience.stack.map((stack) => (
                  <span key={stack}>{stack}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
