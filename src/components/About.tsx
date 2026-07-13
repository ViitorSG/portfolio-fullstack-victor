import type { PortfolioContent } from '../types/portfolio'

type AboutProps = {
  content: PortfolioContent
}

export function About({ content }: AboutProps) {
  return (
    <section className="section intro-section" aria-label={content.about.label}>
      <div>
        <p className="section-label">{content.about.label}</p>
        <h2>{content.about.title}</h2>
      </div>
      <p>{content.about.description}</p>
    </section>
  )
}
