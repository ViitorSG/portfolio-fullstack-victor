import type { LucideIcon } from 'lucide-react'

export type Locale = 'pt' | 'en'

export type Theme = 'light' | 'dark'

export type StackGroup = {
  title: string
  icon: LucideIcon
  items: string[]
}

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  stack: string[]
}

export type PortfolioContent = {
  nav: {
    stacks: string
    experience: string
    project: string
    contact: string
  }
  actions: {
    contact: string
    github: string
    linkedin: string
    viewGithub: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    location: string
    imageAlt: string
  }
  about: {
    label: string
    title: string
    description: string
  }
  stacks: {
    label: string
    title: string
    featured: string[]
    groups: StackGroup[]
  }
  experience: {
    label: string
    title: string
    items: Experience[]
  }
  project: {
    label: string
    title: string
    description: string
  }
  contact: {
    label: string
    title: string
  }
}
