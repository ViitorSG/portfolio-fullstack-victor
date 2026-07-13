import type { PortfolioContent } from '../types/portfolio'

type StacksProps = {
  content: PortfolioContent
}

export function Stacks({ content }: StacksProps) {
  return (
    <section className="section" id="stacks">
      <div className="section-heading">
        <p className="section-label">{content.stacks.label}</p>
        <h2>{content.stacks.title}</h2>
      </div>
      <div className="stack-strip" aria-label={content.stacks.label}>
        {content.stacks.featured.map((stack) => (
          <span key={stack}>{stack}</span>
        ))}
      </div>
      <div className="stack-grid">
        {content.stacks.groups.map(({ title, icon: Icon, items }) => (
          <article className="stack-card" key={title}>
            <div className="card-icon" aria-hidden="true">
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
