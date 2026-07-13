import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import type { PortfolioContent } from '../types/portfolio'

type ContactProps = {
  content: PortfolioContent
}

export function Contact({ content }: ContactProps) {
  return (
    <section className="contact-section" id="contato">
      <div>
        <p className="section-label">{content.contact.label}</p>
        <h2>{content.contact.title}</h2>
      </div>
      <div className="contact-actions">
        <a href={`mailto:${profile.email}`}>
          <Mail size={18} aria-hidden="true" />
          {profile.email}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Code2 size={18} aria-hidden="true" />
          {content.actions.github}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <BriefcaseBusiness size={18} aria-hidden="true" />
          {content.actions.linkedin}
        </a>
      </div>
    </section>
  )
}
