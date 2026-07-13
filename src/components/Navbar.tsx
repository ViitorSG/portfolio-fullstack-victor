import { Languages, Moon, Sun } from 'lucide-react'
import { profile } from '../data/portfolio'
import type { Locale, PortfolioContent, Theme } from '../types/portfolio'

type NavbarProps = {
  content: PortfolioContent
  locale: Locale
  theme: Theme
  onLocaleChange: (locale: Locale) => void
  onThemeChange: (theme: Theme) => void
}

export function Navbar({ content, locale, theme, onLocaleChange, onThemeChange }: NavbarProps) {
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const nextLocale = locale === 'pt' ? 'en' : 'pt'

  return (
    <nav className="topbar" aria-label="Navegação principal">
      <a className="brand" href="#home" aria-label={profile.name}>
        {profile.initials}
      </a>

      <div className="nav-links">
        <a href="#stacks">{content.nav.stacks}</a>
        <a href="#experiencia">{content.nav.experience}</a>
        <a href="#projeto">{content.nav.project}</a>
        <a href="#contato">{content.nav.contact}</a>
      </div>

      <div className="toolbar" aria-label="Preferências">
        <button
          className="icon-button"
          type="button"
          onClick={() => onLocaleChange(nextLocale)}
          aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para português'}
          title={locale === 'pt' ? 'English' : 'Português'}
        >
          <Languages size={20} aria-hidden="true" />
          <span>{nextLocale.toUpperCase()}</span>
        </button>
        <button
          className="icon-button"
          type="button"
          onClick={() => onThemeChange(nextTheme)}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          title={theme === 'light' ? 'Modo escuro' : 'Modo claro'}
        >
          {theme === 'light' ? <Moon size={20} aria-hidden="true" /> : <Sun size={20} aria-hidden="true" />}
        </button>
      </div>
    </nav>
  )
}
