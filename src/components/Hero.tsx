import { BriefcaseBusiness, Code2, Mail, MapPin, Sparkles } from 'lucide-react'
import heroImage from '../assets/portfolio-hero.png'
import { profile } from '../data/portfolio'
import type { PortfolioContent } from '../types/portfolio'

type HeroProps = {
  content: PortfolioContent
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <Sparkles size={18} aria-hidden="true" />
          {content.hero.eyebrow}
        </p>
        <h1>{content.hero.title}</h1>
        <p className="hero-text">{content.hero.description}</p>
        <div className="hero-actions" aria-label="Links principais">
          <a className="primary-link" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            {content.actions.contact}
          </a>
          <a
            className="icon-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label={content.actions.github}
            title={content.actions.github}
          >
            <Code2 size={21} aria-hidden="true" />
          </a>
          <a
            className="icon-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={content.actions.linkedin}
            title={content.actions.linkedin}
          >
            <BriefcaseBusiness size={21} aria-hidden="true" />
          </a>
        </div>
        <div className="location-line">
          <MapPin size={18} aria-hidden="true" />
          {content.hero.location}
        </div>
      </div>

      <div className="hero-visual">
        <img src={heroImage} alt={content.hero.imageAlt} />
      </div>
    </section>
  )
}
