import { Code2, Database, Server, Smartphone } from 'lucide-react'
import type { Locale, PortfolioContent } from '../types/portfolio'

export const profile = {
  name: 'Victor Rafael Gomes',
  initials: 'VRG',
  email: 'vrgcontato@outlook.com',
  github: 'https://github.com/ViitorSG',
  linkedin: 'https://www.linkedin.com/in/victor-rafaelsg/',
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
  pt: {
    nav: {
      stacks: 'Stacks',
      experience: 'Experiência',
      project: 'Projeto',
      contact: 'Contato',
    },
    actions: {
      contact: 'Entrar em contato',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      viewGithub: 'Ver GitHub',
    },
    hero: {
      eyebrow: 'Desenvolvedor Full Stack',
      title: 'Victor Rafael Gomes',
      description:
        'Crio aplicações web e mobile com foco em interfaces responsivas, APIs bem integradas e código organizado para produtos digitais reais.',
      location: 'Ribeirão Preto, SP - Brasil | Remoto',
      imageAlt: 'Estação de trabalho com painéis de código, APIs e dashboards',
    },
    about: {
      label: 'Sobre',
      title: 'Mais de 3 anos criando experiências digitais com base forte em React e TypeScript.',
      description:
        'Atuo em projetos web e mobile, integrando APIs, estruturando componentes reutilizáveis e evoluindo funcionalidades em ambientes remotos. Também desenvolvo backends com Node.js, NestJS, REST APIs e PostgreSQL, com foco em autenticação, organização de código e integração com banco de dados.',
    },
    stacks: {
      label: 'Stacks',
      title: 'Tecnologias que uso no dia a dia',
      featured: [
        'React.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'NestJS',
        'Flutter',
        'PostgreSQL',
        'REST APIs',
      ],
      groups: [
        {
          title: 'Frontend',
          icon: Code2,
          items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
        },
        {
          title: 'Backend',
          icon: Server,
          items: ['Node.js', 'NestJS', 'REST APIs', 'Autenticação', 'Sessões', 'CORS'],
        },
        {
          title: 'Mobile',
          icon: Smartphone,
          items: ['Flutter', 'Dart', 'Consumo de APIs', 'Gerenciamento de estado'],
        },
        {
          title: 'Dados e ferramentas',
          icon: Database,
          items: ['PostgreSQL', 'Git', 'GitHub', 'Postman', 'Power BI APIs', 'Bitrix24'],
        },
      ],
    },
    experience: {
      label: 'Experiência',
      title: 'Trajetória profissional',
      items: [
        {
          role: 'Full Stack Developer',
          company: 'RISTI',
          period: 'Julho/2024 - Atual',
          description:
            'Desenvolvimento e manutenção de aplicações web com React, TypeScript e JavaScript, além de apoio em rotinas backend com Node.js, NestJS, REST APIs e PostgreSQL.',
          stack: ['React.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Power BI'],
        },
        {
          role: 'Desenvolvedor Full Stack Autônomo',
          company: 'Projetos sob demanda',
          period: 'Maio/2024 - Atual',
          description:
            'Criação de projetos web, mobile e backend com foco em interfaces responsivas, APIs REST, autenticação, configuração de ambiente e integração com serviços externos.',
          stack: ['React', 'Node.js', 'Flutter', 'Dart', 'PostgreSQL', 'Git'],
        },
        {
          role: 'Junior Front-end Developer',
          company: 'Krykto',
          period: 'Fevereiro/2023 - Maio/2024',
          description:
            'Atuação em projetos web e mobile, desenvolvendo interfaces, funcionalidades, consumo de APIs, organização de componentes e boas práticas de versionamento.',
          stack: ['React', 'JavaScript', 'TypeScript', 'Flutter', 'Dart', 'APIs'],
        },
      ],
    },
    project: {
      label: 'Projeto em destaque',
      title: 'SmartData',
      description:
        'Projeto full stack com frontend em React/TypeScript e backend em Node.js/NestJS. A aplicação reúne práticas de arquitetura, consumo de APIs, autenticação, sessões, CORS, configuração de ambiente e integração com PostgreSQL.',
    },
    contact: {
      label: 'Contato',
      title: 'Vamos conversar sobre produtos, APIs e interfaces bem construídas.',
    },
  },
  en: {
    nav: {
      stacks: 'Stacks',
      experience: 'Experience',
      project: 'Project',
      contact: 'Contact',
    },
    actions: {
      contact: 'Get in touch',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      viewGithub: 'View GitHub',
    },
    hero: {
      eyebrow: 'Full Stack Developer',
      title: 'Victor Rafael Gomes',
      description:
        'I build web and mobile applications focused on responsive interfaces, well-integrated APIs, and organized code for real digital products.',
      location: 'Ribeirão Preto, SP - Brazil | Remote',
      imageAlt: 'Developer workstation with code panels, APIs and dashboards',
    },
    about: {
      label: 'About',
      title: 'Over 3 years building digital experiences with a strong React and TypeScript foundation.',
      description:
        'I work on web and mobile projects, integrating APIs, structuring reusable components, and evolving features in remote environments. I also build backends with Node.js, NestJS, REST APIs, and PostgreSQL, focusing on authentication, code organization, and database integration.',
    },
    stacks: {
      label: 'Stacks',
      title: 'Technologies I use day to day',
      featured: [
        'React.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'NestJS',
        'Flutter',
        'PostgreSQL',
        'REST APIs',
      ],
      groups: [
        {
          title: 'Frontend',
          icon: Code2,
          items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
        },
        {
          title: 'Backend',
          icon: Server,
          items: ['Node.js', 'NestJS', 'REST APIs', 'Authentication', 'Sessions', 'CORS'],
        },
        {
          title: 'Mobile',
          icon: Smartphone,
          items: ['Flutter', 'Dart', 'API consumption', 'State management'],
        },
        {
          title: 'Data and tools',
          icon: Database,
          items: ['PostgreSQL', 'Git', 'GitHub', 'Postman', 'Power BI APIs', 'Bitrix24'],
        },
      ],
    },
    experience: {
      label: 'Experience',
      title: 'Professional journey',
      items: [
        {
          role: 'Full Stack Developer',
          company: 'RISTI',
          period: 'July/2024 - Present',
          description:
            'Development and maintenance of web applications with React, TypeScript, and JavaScript, while also supporting backend routines with Node.js, NestJS, REST APIs, and PostgreSQL.',
          stack: ['React.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Power BI'],
        },
        {
          role: 'Freelance Full Stack Developer',
          company: 'On-demand projects',
          period: 'May/2024 - Present',
          description:
            'Creation of web, mobile, and backend projects focused on responsive interfaces, REST APIs, authentication, environment setup, and external service integrations.',
          stack: ['React', 'Node.js', 'Flutter', 'Dart', 'PostgreSQL', 'Git'],
        },
        {
          role: 'Junior Front-end Developer',
          company: 'Krykto',
          period: 'February/2023 - May/2024',
          description:
            'Worked on web and mobile projects, developing interfaces, features, API consumption, component organization, and versioning best practices.',
          stack: ['React', 'JavaScript', 'TypeScript', 'Flutter', 'Dart', 'APIs'],
        },
      ],
    },
    project: {
      label: 'Featured project',
      title: 'SmartData',
      description:
        'Full stack project with a React/TypeScript frontend and Node.js/NestJS backend. The application brings together architecture practices, API consumption, authentication, sessions, CORS, environment configuration, and PostgreSQL integration.',
    },
    contact: {
      label: 'Contact',
      title: 'Let’s talk about products, APIs, and well-built interfaces.',
    },
  },
}
