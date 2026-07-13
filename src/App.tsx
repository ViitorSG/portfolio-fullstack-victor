import { useEffect } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { FeaturedProject } from './components/FeaturedProject'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Stacks } from './components/Stacks'
import { portfolioContent } from './data/portfolio'
import { useLocalStorage } from './hooks/useLocalStorage'
import type { Locale, Theme } from './types/portfolio'
import './App.css'

function App() {
  const [locale, setLocale] = useLocalStorage<Locale>('portfolio-locale', 'pt')
  const [theme, setTheme] = useLocalStorage<Theme>('portfolio-theme', 'dark')
  const content = portfolioContent[locale]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
  }, [locale, theme])

  return (
    <main className="page-shell">
      <Navbar
        content={content}
        locale={locale}
        theme={theme}
        onLocaleChange={setLocale}
        onThemeChange={setTheme}
      />
      <Hero content={content} />
      <About content={content} />
      <Stacks content={content} />
      <Experience content={content} />
      <FeaturedProject content={content} />
      <Contact content={content} />
    </main>
  )
}

export default App
